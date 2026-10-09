import { GoArrowUpRight } from "react-icons/go";
import MonitorSlider from "../components/MonitorSlider";
function HeroSection() {
    return (
        <section id="home"   aria-labelledby="hero-heading" 
         className="md:mt-10 flex justify-center items-center gap-5  flex-col  px-4 md:px-10 lg:px-20 py-10 md:py-20 max-w-7xl mx-auto ">
          
           <dv className="flex flex-col justify-center items-center gap-4 ">
            
             <p className="text-blue-800 font-semibold tracking-wider text-sm font-space">WEBSOL · DIGITAL SOLUTIONS</p>

            <h1 id="hero-heading" className="text-center  text-4xl sm:text-5xl lg:text-7xl font-bold text-shadow-stone-400 text-shadow-md leading-[1.2] font-space">
              <span className="text-blue-600   block  ">Digital Design  </span>
               <span className=" block ">Development Agency</span>
               </h1>
            
            <p className="text-gray-600 max-w-xl text-center  ">We design and develop modern, user-focused websites and digital solutions that help businesses grow.</p>
             {/* CTA */}
        <a
          className="inline-flex mt-8 mb-10 justify-center
    items-center md:gap-3 gap-2 rounded-full   bg-blue-logo px-3 md:px-6 md:py-4 py-3
    text-sm font-semibold text-gray-100 hover:text-white shadow-lg transition-all duration-300 hover:bg-green-logo hover:shadow-xl
    hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-500 font-space"
          href="#contact"
        >
          
         <span className="font-bold tracking-wide "> Start a Project</span>
          <GoArrowUpRight aria-hidden="true"/>
        </a>
           </dv>
            <div className=" ">
        <MonitorSlider />
      </div>
        </section>
    )
}    
export default HeroSection

