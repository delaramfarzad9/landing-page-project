import { Link } from "react-router";
import { IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router";
import { useState,useEffect } from "react";
import { IoMdClose } from "react-icons/io";

import { IoHomeOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoChevronForwardSharp } from "react-icons/io5";
import logo from "../assets/images/logo_websol.png";
import { MdOutlineDesignServices } from "react-icons/md";
import { CiMail } from "react-icons/ci";





function Navbar() {
const [isMenuOpen,setIsMenuOpen]=useState(false);
function closeMenu (){
  setIsMenuOpen(false)
};
useEffect(() => {
  function handleEscape(event) {
    if (event.key === "Escape") {
      closeMenu();
    }
  }

  if (isMenuOpen) {
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
  }

  return () => {
    document.removeEventListener("keydown", handleEscape);
    document.body.style.overflow = "";
  };
}, [isMenuOpen]);
  return (
   <header className=" h-16 sticky  top-0 left-0 right-0 z-50   backdrop-blur-xl bg-stone-200/50    transition-colors duration-300
    shadow-lg ">
     <nav aria-label="Main navigation" className="relative z-50  h-full mx-auto max-w-7xl flex flex-row justify-between items-center px-4 md:px-6 lg:px-8 ">
      {/* logo */}
    <Link to="/" aria-label="WebSol home">
         <img
        src={logo}
        alt="WebSol"
        className="h-10 w-auto"
      />
    </Link>
{/* desktop menu  */}
      <div className="    hidden md:flex
  flex-row
  gap-6 lg:gap-8
  text-blue-800
  *:text-lg
  *:font-bold
  *:transition-colors
  *:duration-200
  *:hover:text-teal-500
  *:focus-visible:outline-2
  *:focus-visible:outline-offset-4
  *:focus-visible:outline-teal-500">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink className="flex flex-row gap-1 justify-center items-center" to="/services">Services</NavLink>
      
        <NavLink to="/contact">Contact</NavLink>
      </div>
    {/* MOBILE menu with backdrop */}
      {isMenuOpen ?  (<div  className="inset-0 fixed z-40 md:hidden">
      <button   type="button"
  aria-hidden="true"
  tabIndex={-1}
  onClick={closeMenu}
  className="absolute inset-0 bg-black/30 backdrop-blur-md"/>
        <div id="mobile-menu"
   className="  absolute z-50
    top-0 left-0
    w-2/3 max-w-sm
    flex flex-col
    bg-sky-100
    rounded-br-md
    shadow-lg shadow-black/20
    md:hidden">
      {/* close */}
       <div className="flex justify-end bg-blue-800   ">
          <button className="p-2"
          aria-label="Close navigation menu"
           type="button" onClick={closeMenu} >
          <IoMdClose aria-hidden="true" className="hover:text-[#fec30e] text-gray-100 text-xl "/>
          </button>
       </div>
          {/* links */}
          
         <div className="flex flex-col space-y-2 text-blue-800 *:p-2 *:hover:text-shadow-sky-200 *:hover:text-shadow-xs  *:hover:bg-blue-700/10  *:w-full *:flex *:flex-row *:justify-between *:items-center *:gap-2 *:text-lg *:font-bold "> 
          {/* home */}
          <NavLink  to="/" onClick={closeMenu}>
         <div className="flex flex-row gap-2 items-center">
           <IoHomeOutline aria-hidden="true"/> <span>Home</span>
         </div>
          <IoChevronForwardSharp/></NavLink>
          {/* about */}
        <NavLink to="/about" onClick={closeMenu}>
       <div className="flex flex-row gap-2 items-center">
         <IoIosInformationCircleOutline aria-hidden="true"/>
       <span> About</span></div>
       <IoChevronForwardSharp/></NavLink>
          {/* services */}
        <NavLink to="/services" onClick={closeMenu}>
        <div className="flex flex-row gap-2 items-center">
          <MdOutlineDesignServices aria-hidden="true"/>
       <span> Services</span></div>
       <IoChevronForwardSharp/></NavLink>
          {/* contact */}
        <NavLink to="/contact" onClick={closeMenu}>
        <div className="flex flex-row gap-2 items-center"><CiMail aria-hidden="true"/> <span>Contact</span></div>
        <IoChevronForwardSharp/></NavLink>
       
         </div>
      </div>
      </div>) :  (<button
      
      aria-label="Open navigation menu"
  aria-expanded={isMenuOpen}
  aria-controls="mobile-menu"
      onClick={()=>setIsMenuOpen(true)} className=" md:hidden p-2">
        <IoMdMenu aria-hidden="true" className="text-2xl  text-blue-800"/>
      </button>)}
      {/* CTA */}
      <NavLink className="    hidden md:flex
    items-center
    rounded-full
    border border-white/60
    bg-white/25
    px-5 py-2
    text-sm font-semibold text-blue-800 hover:text-teal-500
    backdrop-blur-xl
    shadow-lg shadow-black/10
    transition-all duration-300
    hover:bg-white/40
    hover:shadow-xl
    hover:-translate-y-0.5
    focus-visible:outline-2
 focus-visible:outline-offset-4
  focus-visible:outline-teal-500" to="/contact">Start a Project</NavLink>
    </nav>
   </header>
  );
}

export default Navbar;