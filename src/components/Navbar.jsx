import { IoMdMenu } from "react-icons/io";
import { useState, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
import logo from "../assets/images/logo_3.png";
import { CiMail } from "react-icons/ci";
import MobileLink from "./MobileLink";
import { createPortal } from "react-dom";
import { TbTools } from "react-icons/tb";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const closeButtonRef = useRef(null);
  const menuRef = useRef(null);
  function closeMenu() {
    setIsMenuOpen(false);
    menuButtonRef.current?.focus();
  }
  // Manage keyboard navigation & prevent bg scrolling when the drawer is open
  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        closeMenu();
      }
    }
    // Keep Tab & Shift+Tab navigation inside the mobile drawer.
    function handleTab(event) {
      if (event.key !== "Tab") return;

      const focusableElements = menuRef.current?.querySelectorAll(
        "button:not([disabled]), a[href]",
      );

      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      if (!menuRef.current.contains(document.activeElement)) {
        event.preventDefault();
        firstElement.focus();
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
    if (isMenuOpen) {
      closeButtonRef.current?.focus();
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleTab);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleTab);
    };
  }, [isMenuOpen]);

 // Close the mobile drawer when the viewport reaches the desktop breakpoint.
useEffect(() => {
  const mediaQuery = window.matchMedia("(min-width: 768px)");

  function handleBreakpointChange(event) {
    if (event.matches) {
      setIsMenuOpen(false);
    }
  }

  // Check the viewport width when the component mounts.
  if (mediaQuery.matches) {
    setIsMenuOpen(false);
  }

  // Listen for changes across the desktop breakpoint.
  mediaQuery.addEventListener("change", handleBreakpointChange);

  return () => {
    mediaQuery.removeEventListener("change", handleBreakpointChange);
  };
}, []);


  return (
    <>
      <header
        className=" h-16 sticky  top-0 left-0 right-0 z-50   backdrop-blur-xl bg-stone-200/50    transition-colors duration-300
    shadow-lg font-space tracking-tighter"
      >
        <nav
          aria-label="Main navigation"
          className="relative z-50 mx-auto flex h-full w-full max-w-7xl items-center justify-between px-4 md:px-10 lg:px-12 "
        >
          {/* logo */}
          <a href="#home" aria-label="WebSol home">
            <img src={logo} alt="WebSol" className="h-12 w-auto" />
          </a>
          {/* desktop menu  */}
          <div className=" hidden md:flex flex-row gap-6 lg:gap-8 text-blue-800 *:text-lg *:font-bold *:transition-colors  *:duration-200 *:hover:text-green-logo *:focus-visible:outline-2 *:focus-visible:outline-offset-4 *:focus-visible:outline-teal-500">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>

            <a href="#contact">Contact</a>
          </div>
          {/* MOBILE menu with backdrop */}

          {/* hamburger button */}
          <button
            type="button"
            ref={menuButtonRef}
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen(true)}
            className="flex size-11 items-center justify-center rounded-lg text-blue-800 transition-colors hover:bg-blue-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-logo md:hidden"
          >
            <IoMdMenu aria-hidden="true" className="text-2xl  text-blue-800" />
          </button>
        </nav>
      </header>

      {isMenuOpen &&
        createPortal(
          <div className="inset-0 fixed z-50 md:hidden">
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={closeMenu}
              tabIndex={-1}
              className="absolute inset-0 bg-black/30 backdrop-blur-md"
            />
            <div
              ref={menuRef}
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="absolute inset-y-0 left-0 z-50 flex h-dvh w-[min(85vw,360px)] flex-col overflow-y-auto rounded-r-2xl bg-sky-50 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-blue-100 px-5 py-5">
                <span className="font-space text-sm font-bold tracking-widest text-blue-800">
                  MENU
                </span>
                {/* close button*/}
                <button
                  type="button"
                  ref={closeButtonRef}
                  aria-label="Close navigation menu"
                  onClick={closeMenu}
                  className="flex size-11 items-center justify-center rounded-full text-blue-800 transition-colors hover:bg-blue-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-logo"
                >
                  <IoMdClose aria-hidden="true" size={24} />
                </button>
              </div>
              {/* links */}

              <div className="flex flex-col gap-2 p-4 text-blue-800">
                {/* home */}
                <MobileLink
                  href="#home"
                  text="Home"
                  icon={<IoHomeOutline aria-hidden="true" />}
                  closeMenu={closeMenu}
                />
                {/* about */}
                <MobileLink
                  href="#about"
                  text="About"
                  icon={<IoIosInformationCircleOutline aria-hidden="true" />}
                  closeMenu={closeMenu}
                />
                {/* services */}
                <MobileLink
                  href="#services"
                  text="Services"
                  icon={<TbTools aria-hidden="true" />}
                  closeMenu={closeMenu}
                />
                {/* contact */}
                <MobileLink
                  href="#contact"
                  text="Contact"
                  icon={<CiMail aria-hidden="true" />}
                  closeMenu={closeMenu}
                />
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}

export default Navbar;
