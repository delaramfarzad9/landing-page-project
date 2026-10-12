import { FiPenTool, FiCode, FiTrendingUp, FiArrowLeft, FiArrowRight, FiLayers, FiShoppingBag, FiSearch } from "react-icons/fi";
import useEmblaCarousel from "embla-carousel-react";
import { GoArrowUpRight } from "react-icons/go";
import Autoplay from "embla-carousel-autoplay";
import CtaButton from "./CtaButton";


const services = [
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "We design intuitive digital experiences, from wireframes and prototypes to polished interfaces that put users first.",
    icon: FiPenTool,
  },
  {
    id: "web-development",
    title: "Web Development",
    description:
      "We build fast, responsive websites and web applications with clean code, seamless functionality, and modern technologies.",
    icon: FiCode,

  },
  {
    id: "website-optimization",
    title: "Website Optimisation",
    description:
      "We enhance website performance, accessibility, and usability to create faster, smoother experiences across devices.",
    icon: FiTrendingUp,
  },
  {
    id: "branding-identity",
    title: "Branding & Visual Identity",
    description:
      "We create distinctive logos, colour palettes, typography, and branded visuals that make businesses memorable.",
    icon: FiLayers,
  },
  {
    id: "ecommerce",
    title: "E-commerce Solutions",
    description:
      "We develop engaging online stores with intuitive product discovery, smooth shopping journeys, and user-friendly checkout experiences.",
    icon: FiShoppingBag,
  },
  {
    id: "seo-digital-strategy",
    title: "SEO & Digital Strategy",
    description:
      "We improve search visibility, refine content strategy, and help businesses connect with the right audience online.",
    icon: FiSearch,
  },
];

function ServicesSection() {
const [emblaRef, emblaApi] = useEmblaCarousel(
  {
    align: "start",
    containScroll: "trimSnaps",
    slidesToScroll: 1,
    loop: true,
  },
  [
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  ],
);
  return (
<section id="services" >
    {/* header  */}
    <div className="flex flex-col justify-center items-center gap-1">
        <p className="text-blue-800 font-semibold tracking-wider text-sm font-space">WHAT WE DO</p>
    <h2 className="text-blue-800 font-bold text-3xl mx-4 font-space">Our Expertise</h2>
    <p className="text-gray-600 ">Everything you need to bring your digital vision to life.</p>
    </div>
    {/* cards section */}
    {/* Embla viewport */}
  <div   ref={emblaRef}
  className="  mx-4 px-2  pt-6 pb-10 my-6 overflow-hidden md:mx-10 lg:mx-20 ">
      {/* Embla container */}
        <div  className="-ml-5 flex touch-pan-y">
      {services.map((service,index) => {
        const Icon = service.icon;

        return (
     <div   key={service.id}
    className="    min-w-0 basis-full shrink-0 pl-5 md:basis-1/2 lg:basis-1/3">
      {/* each Card  */}
             <article className="group relative flex h-full flex-col overflow-hidden gap-2 rounded-2xl border border-gray-100 p-7 shadow-md  transition-all duration-300 ease-out hover:-translate-y-1 
  hover:border-green-logo/40 hover:shadow-xl active:translate-y-0 
   active:scale-[.97] bg-gray-100">
         {/* icon & number */}
    <div className="flex items-start justify-between">
     <span className="flex size-14 items-center justify-center rounded-xl bg-blue-logo/10  text-blue-logo transition-colors duration-300  group-hover:bg-green-logo group-hover:text-gray-100">
       <Icon size={28}  aria-hidden="true" />
     </span>
      <span className=" text-gray-400  font-space text-sm font-semibold duration-300 group-hover:text-green-logo">{String(index + 1).padStart(2, "0")}</span>
    </div>
   
 
 
{/* service title  */}
            <h3 className="mt-6 text-xl   font-semibold   border-b pb-4 border-gray-200  font-space text-blue-800">{service.title}</h3>
           
            <p className="text-gray-600 pt-4 ">{service.description}</p>
            {/* accent bar  */}
            <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1  origin-left scale-x-0 bg-linear-to-r from-blue-logo to-green-logo transition-all duration-300 ease-out group-hover:scale-x-100"/>
              {/* <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1  origin-bottom scale-y-0 bg-linear-to-t from-blue-logo to-green-logo transition-all duration-300 ease-out group-hover:scale-y-100"/>  */}
          </article>
     </div>
        );
      })}
    </div>{/* End Embla container */}
  </div>{/* End Embla viewport */}
{/* Carousel navigation & cta */}
<div className="flex justify-between items-center md:mx-10 lg:mx-20 mb-8 mx-4 ">
    <div className=" flex justify-end gap-3 *:text-gray-600 *:shadow ">
  <button
    type="button"
    onClick={() => emblaApi?.scrollPrev()}
    aria-label="Previous services"
    className="rounded-full border border-gray-300 p-3 transition-colors hover:bg-green-logo hover:border-green-logo hover:text-gray-100 hover:shadow-lg"
  >
    <FiArrowLeft size={20} />
  </button>

  <button
    type="button"
    onClick={() => emblaApi?.scrollNext()}
    aria-label="Next services"
    className="rounded-full border border-gray-300 p-3 transition-colors hover:bg-green-logo hover:border-green-logo hover:text-gray-100 hover:shadow-lg"
  >
    <FiArrowRight size={20} />
  </button>
</div>
<CtaButton id="contact" text="Plan Your Project" icon={<GoArrowUpRight aria-hidden="true"/>}  font="font-space"/>
</div>
  
</section>
  );
}  
export default ServicesSection

