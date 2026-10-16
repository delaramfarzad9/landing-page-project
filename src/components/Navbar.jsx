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
  const menuRef = useRef(null);
  const logoRef = useRef(null);
  function closeMenu() {
    setIsMenuOpen(false);
    menuButtonRef.current?.focus();
  }
  // Manage keyboard focus and Escape key
  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        closeMenu();
      }
    }
   
// Keep keyboard focus within the logo, X button and mobile links.
function handleTab(event) {
  if (event.key !== "Tab") return;

  const links = menuRef.current?.querySelectorAll("a[href]");
  if (!links?.length) return;

  const logo = logoRef.current;
  const menuButton = menuButtonRef.current;
  const firstLink = links[0];
  const lastLink = links[links.length - 1];
  const activeElement = document.activeElement;

  if (!logo || !menuButton) return;

  // Tab from Logo → X.
  if (!event.shiftKey && activeElement === logo) {
    event.preventDefault();
    menuButton.focus();
  }

  // Tab from X → Home.
  else if (!event.shiftKey && activeElement === menuButton) {
    event.preventDefault();
    firstLink.focus();
  }

  // Tab from Contact → Logo.
  else if (!event.shiftKey && activeElement === lastLink) {
    event.preventDefault();
    logo.focus();
  }

  // Shift + Tab from Logo → Contact.
  else if (event.shiftKey && activeElement === logo) {
    event.preventDefault();
    lastLink.focus();
  }

  // Shift + Tab from X → Logo.
  else if (event.shiftKey && activeElement === menuButton) {
    event.preventDefault();
    logo.focus();
  }

  // Shift + Tab from Home → X.
  else if (event.shiftKey && activeElement === firstLink) {
    event.preventDefault();
    menuButton.focus();
  }

  // Recover focus if it escapes the mobile navigation.
  else if (
    activeElement !== logo &&
    activeElement !== menuButton &&
    !menuRef.current.contains(activeElement)
  ) {
    event.preventDefault();
    logo.focus();
  }
}
    if (isMenuOpen) {
menuButtonRef.current?.focus();
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("keydown", handleTab);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("keydown", handleTab);
    };
  }, [isMenuOpen]);

  // 2. Lock background scrolling while the mobile menu is open
  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);



 // Close the mobile menu when swtiching to desktop
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
         {/* Logo: navigate home and close the mobile menu */}
<a
ref={logoRef}
  href="#home"
  aria-label="WebSol home"
  onClick={() => setIsMenuOpen(false)}
  className="rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-logo"
>
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
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex size-11 items-center justify-center rounded-lg text-blue-800 transition-colors hover:bg-blue-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-logo md:hidden"
          >
           {isMenuOpen ? (
  <IoMdClose aria-hidden="true" className="text-2xl" />
) : (
  <IoMdMenu aria-hidden="true" className="text-2xl" />
)}
          </button>
        </nav>
      </header>

      {createPortal(
          <div
 className={`fixed inset-x-0 top-16 bottom-0 z-40 md:hidden
  transition-[visibility] duration-350
  motion-reduce:transition-none
  ${
    isMenuOpen
      ? "visible"
      : "invisible pointer-events-none"
  }`}
>
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={closeMenu}
              tabIndex={-1}
             className={`absolute inset-0 bg-black/30 backdrop-blur-md
  transition-opacity duration-350 ease-out
  motion-reduce:transition-none
  ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
            />
            <div
              ref={menuRef}
              aria-hidden={!isMenuOpen}
inert={!isMenuOpen}
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
             className={`relative z-10 flex max-h-[calc(100dvh-4rem)] w-full flex-col
  overflow-y-auto bg-sky-50 p-4 shadow-xl
  transition-[transform,opacity] duration-350 ease-[cubic-bezier(0.22,1,0.36,1)]
  motion-reduce:transition-none
  ${
    isMenuOpen
      ? "translate-y-0 opacity-100"
      : "-translate-y-4 opacity-0"
  }`}
            >
            
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
