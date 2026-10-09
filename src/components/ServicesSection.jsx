import { FiPenTool, FiCode, FiTrendingUp, FiArrowLeft, FiArrowRight, FiLayers, FiShoppingBag, FiSearch } from "react-icons/fi";
import useEmblaCarousel from "embla-carousel-react";
import { GoArrowUpRight } from "react-icons/go";
import Autoplay from "embla-carousel-autoplay";


const services = [
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "We design intuitive digital experiences, from wireframes and prototypes to polished interfaces that put users first.",
    icon: FiPenTool,

    bgColor: "bg-[#17252D]",
  },
  {
    id: "web-development",
    title: "Web Development",
    description:
      "We build fast, responsive websites and web applications with clean code, seamless functionality, and modern technologies.",
    icon: FiCode,
   
    bgColor: "bg-cyan-900",
  },
  {
    id: "website-optimization",
    title: "Website Optimisation",
    description:
      "We enhance website performance, accessibility, and usability to create faster, smoother experiences across devices.",
    icon: FiTrendingUp,
   
    bgColor: "bg-blue-900",
  },
  {
    id: "branding-identity",
    title: "Branding & Visual Identity",
    description:
      "We create distinctive logos, colour palettes, typography, and branded visuals that make businesses memorable.",
    icon: FiLayers,
   
    bgColor: "bg-[#31245C]",
  },
  {
    id: "ecommerce",
    title: "E-commerce Solutions",
    description:
      "We develop engaging online stores with intuitive product discovery, smooth shopping journeys, and user-friendly checkout experiences.",
    icon: FiShoppingBag,
   
    bgColor: "bg-[#243F76]",
  },
  {
    id: "seo-digital-strategy",
    title: "SEO & Digital Strategy",
    description:
      "We improve search visibility, refine content strategy, and help businesses connect with the right audience online.",
    icon: FiSearch,
  
    bgColor: "bg-teal-900",
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
  className="mx-4 p-2 my-10 overflow-hidden md:mx-10 lg:mx-20 ">
      {/* Embla container */}
        <div  className="-ml-5 flex touch-pan-y">
      {services.map((service,index) => {
        const Icon = service.icon;

        return (
     <div   key={service.id}
    className="min-w-0 flex-[0_0_100%] pl-5 md:flex-[0_0_50%] lg:flex-[0_0_33.333333%]">
             <article className={`relative flex h-full flex-col gap-2 rounded-xl border border-gray-200 pt-10 pb-5 px-7 shadow-md  ${service.bgColor}`} key={service.id}>
         {/* icon  */}
    <Icon size={30} className="absolute  top-5 left-5  shrink-0 text-gray-100" />
    <span className="absolute  top-5 right-5 text-gray-200  shrink-0 font-space">{String(index + 1).padStart(2, "0")}</span>
 
 
{/* service title  */}
            <h3 className="mt-7 text-xl  text-gray-100 font-semibold  font-space">{service.title}</h3>
           
            <p className="text-gray-200">{service.description}</p>
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
    className="rounded-full border border-gray-300 p-3 transition-colors hover:border-blue-600 hover:text-blue-600"
  >
    <FiArrowLeft size={20} />
  </button>

  <button
    type="button"
    onClick={() => emblaApi?.scrollNext()}
    aria-label="Next services"
    className="rounded-full border border-gray-300 p-3 transition-colors hover:border-blue-600 hover:text-blue-600"
  >
    <FiArrowRight size={20} />
  </button>
</div>
      <a
           className="inline-flex  justify-center
     items-center md:gap-3 gap-2 rounded-full   bg-blue-logo px-3 md:px-6 md:py-4 py-3
     text-sm font-semibold text-gray-100 hover:text-white shadow-lg transition-all duration-300 hover:bg-green-logo hover:shadow-xl
     hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-500"
           href="#contact"
         >
           
          <span className="font-bold tracking-wide font-space"> Start a Project</span>
           <GoArrowUpRight aria-hidden="true"/>
         </a>
</div>
  
</section>
  );
}  
export default ServicesSection

