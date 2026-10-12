import { FiCheckCircle } from "react-icons/fi";
import { FiCode } from "react-icons/fi";
import { FiTrendingUp } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
import { FiUsers } from "react-icons/fi";
import StatsBar from "./StatsBar";
import CtaButton from "./CtaButton";
const aboutCards = [
  {
    id: "understanding-business",
    title: "Understanding Your Business",
    description:
      "We understand your goals and audience to create tailored digital solutions that reflect your brand.",
    icon: FiUsers,
  },
  {
    id: "quality-experiences",
    title: "Building Quality Experiences",
    description:
      "We combine thoughtful design and clean development to build professional websites that inspire trust.",
    icon: FiCode,
  },
  {
    id: "business-growth",
    title: "Supporting Business Growth",
    description:
      "We create fast, user-friendly experiences that strengthen your online presence and help your business grow.",
    icon: FiTrendingUp,
  },
];
const accomplishments=[
    {
        id:"projects-delivered",
        title:"Projects Delivered",  
        value:"50+",
    },
    {
        id:"clients-worldwide",
        title:"Clients Worldwide",  
        value:"30+",        
    },              
    {
        id:"years-of-experience",
        title:"Years of Experience",  
        value:"5+",        
    },              
];  
const checkedpoints=[
    "Tailored solutions for every project","Transparent, collaborative process","Built for Performance and growth"
]
    
function AboutSection() {
    return (
        <section id="about" className="lg:mt-20 mt-14 flex flex-col md:flex-row md:justify-between md:items-center gap-10 mx-4 md:mx-10 lg:mx-20  ">

   {/* header  */}
    <div className="flex w-full flex-col items-start gap-1 md:flex-1 md:min-w-0">
        <p className="text-blue-800 font-semibold tracking-wider text-sm font-space ">WHO WE ARE</p>
    <h2 className="text-blue-800 font-bold text-4xl  font-space ">Creative Thinking. Smart Development.</h2>
    <p className="text-gray-600 mt-2">WebSol is a creative digital agency specialising in web development, UI/UX design, branding, and digital solutions. We combine creativity and technology to build modern, engaging digital experiences that help businesses strengthen their online presence and connect with their audiences.</p>
 <div className="flex flex-col items-start  space-y-2 mt-6">
  {checkedpoints.map((point)=>  <div key={point} className="flex gap-2 justify-center items-center ">
    <FiCheckCircle aria-hidden="true" className="text-blue-logo shrink-0" size={20} />
   <span className="text-gray-600">{point}</span>
  </div>)}

 </div>
 {/* cta  */}
<CtaButton id="contact" text="Let's work together" icon={<GoArrowUpRight aria-hidden="true"/>} className="mt-6" font="font-space" />
    </div>

    {/* visual  */}
     <div className="flex w-full flex-col gap-3 md:flex-1 md:min-w-0 ">
        {aboutCards.map((card)=>(
            <div key={card.id} className="group flex items-start gap-4 rounded-lg border p-4   border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out ">
                {/* icon  */}
                <div className=" shrink-0 flex justify-center items-center w-12 h-12 rounded-md bg-blue-logo/10 text-blue-logo p-2 transition-colors duration-300  group-hover:bg-green-logo group-hover:text-gray-100 group-hover:shadow-lg">
                    <card.icon size={24} />
                </div>
                {/* text  */}
               <div className="flex flex-col gap-2 max-w-lg">
                 <h3 className="font-bold font-space text-blue-800 ">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
               </div>
               
            </div>
        ))}
        {/* statistics panel  */}
<StatsBar stats={accomplishments} font="font-space" />
        
     </div>

        </section>
    );
}    
export default AboutSection

