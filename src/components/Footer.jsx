
import logo from "../assets/images/logo_1.png";


import { MdOutlineCall } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
function Footer() {
    return (
        <footer className="bg-gray-100 pt-8 md:pt-10 lg:pt-12 border-t border-green-logo">
         
            <div className="mx-auto w-full max-w-7xl px-4 md:px-10 lg:px-12">
              
              <div className="grid grid-cols-1 gap-8 ml-2 md:ml-0  sm:grid-cols-[1.6fr_.9fr_1fr] lg:grid-cols-[2fr_1fr_1.2fr] lg:gap-10">
{/* logo & motto & social media */}
<div className="flex min-w-0 flex-col items-start gap-3">
<a href="#home">  <img
        src={logo}
        alt="WebSol"
        aria-label="WebSol home"
        className="h-10 w-auto"
      />
      </a>
          <p className="text-[0.7rem] md:text-xs font-semibold uppercase tracking-[0.3em] text-blue-800">
  DESIGN · DEVELOP · DELIVER
</p>
<p className="max-w-sm text-sm leading-6 text-gray-600">
  We create thoughtful digital experiences through UI/UX design,
  front-end development, and reliable back-end solutions.
</p>
  {/* social media  */}
  <div className="mt-2  flex items-center gap-3 ">
  <a
  target="_blank"
  rel="noopener noreferrer"
    href="https://linkedin.com"
    aria-label="WebSol on LinkedIn"
   className="text-gray-600 shrink-0 size-10 flex items-center justify-center rounded-lg bg-blue-logo/10 p-2 transition-colors duration-300 hover:bg-green-logo/90 hover:text-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-logo"
  >
    <FaLinkedinIn aria-hidden="true" />
  </a>

  <a
  target="_blank"
  rel="noopener noreferrer"
    href="https://github.com"
    aria-label="WebSol on GitHub"
     className="text-gray-600 shrink-0 size-10 flex items-center justify-center rounded-lg bg-blue-logo/10 p-2 transition-colors duration-300 hover:bg-green-logo/90 hover:text-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-logo"
  >
    <FaGithub aria-hidden="true" />
  </a>
  <a
  target="_blank"
  rel="noopener noreferrer"
    href="https://instagram.com"
    aria-label="WebSol on Instagram"
  className="text-gray-600 shrink-0 size-10 flex items-center justify-center rounded-lg bg-blue-logo/10 p-2 transition-colors duration-300 hover:bg-green-logo/90 hover:text-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-logo"
  >
    <GrInstagram aria-hidden="true" />
  </a>
</div>

</div>
{/* QUICK LINKS */}
<div className="flex flex-col items-start gap-2">
    <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-800 mb-2">QUICK LINKS</h2>
    <a href="#home" className="hover:scale-[1.02]  focus-visible:outline-2
  focus-visible:outline-offset-4
  focus-visible:outline-teal-500
  transition-colors duration-200
  hover:text-green-logo text-sm font-normal text-gray-600 " >Home</a>
    <a href="#about" className="hover:scale-[1.02]  focus-visible:outline-2
  focus-visible:outline-offset-4
  focus-visible:outline-teal-500
  transition-colors duration-200
  hover:text-green-logo text-sm font-normal text-gray-600 " >About WebSol</a>
     <a href="#services" className="hover:scale-[1.02]  focus-visible:outline-2
  focus-visible:outline-offset-4
  focus-visible:outline-teal-500
  transition-colors duration-200
  hover:text-green-logo text-sm font-normal text-gray-600 " >Services</a>
     <a href="#contact" className="hover:scale-[1.02]  focus-visible:outline-2
  focus-visible:outline-offset-4
  focus-visible:outline-teal-500
  transition-colors duration-200
  hover:text-green-logo text-sm font-normal text-gray-600 " >Contact</a>

</div>
{/* CONTACT  */}
<div className="flex min-w-0 flex-col items-start gap-2">
    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-800 mb-2">CONTACT</p>
    <a href="mailto:hello@websol.com" className="group hover:scale-[1.02] flex justify-center items-center gap-2  focus-visible:outline-2
  focus-visible:outline-offset-4
  focus-visible:outline-teal-500
  transition-colors duration-200
  hover:text-teal-500 text-sm font-normal text-gray-600 ">
    <MdOutlineEmail  aria-hidden="true" className="text-gray-600 shrink-0 size-8 flex items-center justify-center rounded-lg bg-blue-logo/10 p-2 transition-colors duration-300 group-hover:bg-green-logo/90 group-hover:text-gray-100"/>
    <span>hello@websol.com</span>

  </a>
<a href="tel:+442012345678" className="group hover:scale-[1.02] flex justify-center items-center gap-2  focus-visible:outline-2
  focus-visible:outline-offset-4
  focus-visible:outline-teal-500
  transition-all duration-200
  hover:text-teal-500 text-sm font-normal text-gray-600 ">
    <MdOutlineCall aria-hidden="true"   className="text-gray-600 shrink-0 size-8 flex items-center justify-center rounded-lg bg-blue-logo/10 p-2 transition-colors duration-300 group-hover:bg-green-logo/90 group-hover:text-gray-100"/>
    <span> +44 20 1234 5678</span>

  </a>
  <address  className="group flex items-center gap-2 text-sm font-normal not-italic text-gray-600">
    <MdOutlineLocationOn aria-hidden="true" className="text-gray-600 shrink-0 size-8 flex items-center justify-center rounded-lg bg-blue-logo/10 p-2 transition-colors duration-300 group-hover:bg-green-logo/90 group-hover:text-gray-100"/>
    <span>London, United Kingdom</span>

  </address>

</div>
            </div>
           
            {/* copy */}
            <div className="mt-8 border-t border-teal-800/15 py-5">
                <p className="text-center text-sm text-gray-500">&copy; 2026 WebSol. All rights reserved.</p>
            </div>
            </div>
        </footer>
    );
}
export default Footer