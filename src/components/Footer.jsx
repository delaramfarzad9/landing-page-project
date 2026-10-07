import { Link } from "react-router";
import logo from "../assets/images/logo_websol.png";
import { CiMail } from "react-icons/ci";
import { TfiLocationPin } from "react-icons/tfi";
import { MdOutlineCall } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
function Footer() {
    return (
        <footer className="flex  flex-col  bg-sky-100 gap-2 md:gap-4  pt-8 mt-10 px-4 md:px-0">
            <div className="flex flex-col md:flex-row items-start justify-evenly gap-4 md:gap-0 ">
{/* logo & motto  */}
<div className="flex flex-col space-y-2 md:space-y-4">
<Link to="/">  <img
        src={logo}
        alt="WebSol"
        className="h-10 w-auto"
      />
      </Link>
          <p className="text-[0.7rem] md:text-xs font-semibold uppercase tracking-[0.3em] text-blue-800">
  DESIGN · DEVELOP · DELIVER
</p>
  <p className="max-w-md text-sm text-gray-500">We create thoughtful digital experiences through
UI/UX design, front-end development, and reliable
back-end solutions.</p> 

</div>
{/* QUICK LINKS */}
<div className="flex flex-col md:gap-2 gap-1  ">
    <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-800 mb-2">QUICK LINKS</h2>
    <Link to="/" className="  focus-visible:outline-2
  focus-visible:outline-offset-4
  focus-visible:outline-teal-500
  transition-colors duration-200
  hover:text-teal-500 text-sm font-normal text-gray-600 " >Home</Link>
    <Link to="/about" className="  focus-visible:outline-2
  focus-visible:outline-offset-4
  focus-visible:outline-teal-500
  transition-colors duration-200
  hover:text-teal-500 text-sm font-normal text-gray-600 " >About WebSol</Link>
     <Link to="/services" className="  focus-visible:outline-2
  focus-visible:outline-offset-4
  focus-visible:outline-teal-500
  transition-colors duration-200
  hover:text-teal-500 text-sm font-normal text-gray-600 " >Services</Link>
     <Link to="/contact" className="  focus-visible:outline-2
  focus-visible:outline-offset-4
  focus-visible:outline-teal-500
  transition-colors duration-200
  hover:text-teal-500 text-sm font-normal text-gray-600 " >Contact</Link>

</div>
{/* CONTACT  */}
<div className="flex flex-col items-start md:gap-2 gap-1 ">
    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-800 mb-2">CONTACT</p>
    <a href="mailto:hello@websol.com" className="flex justify-center items-center gap-1  focus-visible:outline-2
  focus-visible:outline-offset-4
  focus-visible:outline-teal-500
  transition-colors duration-200
  hover:text-teal-500 text-sm font-normal text-gray-600 ">
    <CiMail aria-hidden="true"/>
    <span>hello@websol.com</span>

  </a>
<a href="tel:+442012345678" className="flex justify-center items-center gap-1  focus-visible:outline-2
  focus-visible:outline-offset-4
  focus-visible:outline-teal-500
  transition-colors duration-200
  hover:text-teal-500 text-sm font-normal text-gray-600 ">
    <MdOutlineCall aria-hidden="true"/>
    <span> +44 20 1234 5678</span>

  </a>
  <address  className="flex items-center gap-1 text-sm font-normal not-italic text-gray-600">
    <TfiLocationPin aria-hidden="true"/>
    <span>London, United Kingdom</span>

  </address>
  {/* social media  */}
  <div className="mt-2 flex items-center gap-3">
  <a
    href="#"
    aria-label="WebSol on LinkedIn"
    className="text-gray-600 transition-colors hover:text-teal-500
               focus-visible:outline-2 focus-visible:outline-offset-4
               focus-visible:outline-teal-500"
  >
    <FaLinkedinIn aria-hidden="true" />
  </a>

  <a
    href="#"
    aria-label="WebSol on GitHub"
    className="text-gray-600 transition-colors hover:text-teal-500
               focus-visible:outline-2 focus-visible:outline-offset-4
               focus-visible:outline-teal-500"
  >
    <FaGithub aria-hidden="true" />
  </a>
  <a
    href="#"
    aria-label="WebSol on Instagram"
    className="text-gray-600 transition-colors hover:text-teal-500
               focus-visible:outline-2 focus-visible:outline-offset-4
               focus-visible:outline-teal-500"
  >
    <FaInstagram aria-hidden="true" />
  </a>
</div>
</div>
            </div>
           
            {/* copy */}
            <div className="mt-2 border-t border-teal-800/15 py-3 md:py-5 ">
                <p className="text-center text-sm text-gray-500">&copy; 2026 WebSol. All rights reserved.</p>
            </div>
        </footer>
    );
}
export default Footer