import { GoArrowUpRight } from "react-icons/go";
import MonitorSlider from "../components/MonitorSlider";
import CtaButton from "./CtaButton";
function HeroSection() {
    return (
        <section id="home"   aria-labelledby="hero-heading" 
         className="  py-6 md:py-8 lg:py-10 xl:py-12">
          
  <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-5 px-4 md:px-10 lg:px-12">
             <div className="flex flex-col justify-center items-center gap-4 ">
            
             <p className="text-blue-800 font-semibold tracking-wider text-sm font-space">WEBSOL · DIGITAL SOLUTIONS</p>

            <h1 id="hero-heading" className="text-center  text-4xl sm:text-5xl lg:text-7xl font-bold text-shadow-stone-400 text-shadow-md leading-[1.2] font-space">
              <span className="text-blue-600   block  ">Digital Design  </span>
               <span className=" block ">Development Agency</span>
               </h1>
            
            <p className="text-gray-600 max-w-xl text-center  ">We design and develop modern, user-focused websites and digital solutions that help businesses grow.</p>
             {/* CTA */}
    <CtaButton id="contact" text="Start a Project" icon={<GoArrowUpRight aria-hidden="true"/>} className="mt-4" />
    
           </div>
            <div className=" ">
        <MonitorSlider />
      </div>
  </div>
        </section>
    )
}    
export default HeroSection

