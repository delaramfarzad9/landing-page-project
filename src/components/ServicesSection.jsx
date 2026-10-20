import {
  FiPenTool,
  FiCode,
  FiTrendingUp,
  FiArrowLeft,
  FiArrowRight,
  FiLayers,
  FiShoppingBag,
  FiSearch,
  FiGrid,
  FiColumns,
} from "react-icons/fi";
import useEmblaCarousel from "embla-carousel-react";
import { GoArrowUpRight } from "react-icons/go";
import Autoplay from "embla-carousel-autoplay";
import CtaButton from "./CtaButton";
import ServiceCard from "./ServiceCard";
import { useState, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";

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
  const [showAll, setShowAll] = useState(false);
  const headerRef = useRef(null);

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
  const handlePrev = () => {
    if (!emblaApi) return;

    emblaApi.scrollPrev();
    emblaApi.plugins().autoplay?.reset();
  };

  const handleNext = () => {
    if (!emblaApi) return;

    emblaApi.scrollNext();
    emblaApi.plugins().autoplay?.reset();
  };
  const toggleShowAll = () => {
    if (showAll) {
      headerRef.current?.scrollIntoView({
        behavior: "instant",
        block: "start",
      });
    }

    setShowAll((prev) => !prev);
  };
  const shouldReduceMotion = useReducedMotion();

const headerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: shouldReduceMotion ? 0 : 0.12,
    },
  },
};

const headerItemVariants = {
  hidden: {
    opacity: 0,
    y: shouldReduceMotion ? 0 : -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: shouldReduceMotion ? 0.01 : 0.55,
      ease: "easeOut",
    },
  },
};
  return (
    <section id="services" className=" py-6 md:py-8 lg:py-10 xl:py-12 ">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-10 lg:px-12">
        {/* header  */}
        <motion.div
          ref={headerRef}
            variants={headerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
          className="flex scroll-mt-20 flex-col items-center gap-2 text-center"
        >
          <motion.p 
           variants={headerItemVariants}
          className="text-blue-800 font-semibold tracking-wider text-sm font-space">
            WHAT WE DO
          </motion.p>
          <motion.h2
          variants={headerItemVariants}
           className="text-blue-800 font-bold text-3xl font-space">
            Our Expertise
          </motion.h2>
          <motion.p
          variants={headerItemVariants} 
          className="text-gray-600 ">
            Everything you need to bring your digital vision to life.
          </motion.p>
        </motion.div>
        {/* cards section */}
        {showAll ? (
          <div id="services-content" className="my-6 grid grid-cols-1 gap-6 px-2 pt-6 pb-10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.id}
                style={{ transitionDelay: `${index * 70}ms` }}
                className="transition-all duration-500 ease-out
      starting:translate-y-4 starting:opacity-0
      motion-reduce:transition-none"
              >
                <ServiceCard service={service} index={index} />
              </div>
            ))}
          </div>
        ) : (
     <motion.div     initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{
      duration: shouldReduceMotion ? 0.01 : 0.7,
      ease: "easeOut",
    }}
     >
           <div
          id="services-content"
            ref={emblaRef}
            className="   px-2  pt-6 pb-10 my-6 overflow-hidden  mb-2  "
          >
            {/* Embla viewport */}
            {/* Embla container */}
            <div className="-ml-5 flex touch-pan-y">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="min-w-0 basis-full shrink-0 pl-5 md:basis-1/2 lg:basis-1/3"
                >
                  <ServiceCard service={service} index={index} />
                </div>
              ))}
            </div>
          </div>
     </motion.div>
        )}
        {/* End Embla container */}
        {/* End Embla viewport */}
        {/* Carousel navigation & cta */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 ">
      {!showAll && (    <motion.div 
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -35 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: shouldReduceMotion ? 0.01 : 0.6,
      ease: "easeOut",
    }}
      className=" flex justify-end gap-3 *:text-gray-600 *:shadow ">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous services"
              className="rounded-full border border-gray-300 p-3 transition-all duration-200 hover:bg-green-logo hover:border-green-logo hover:text-gray-100 hover:shadow-lg
 active:bg-green-logo active:border-green-logo active:text-white
    active:scale-95 focus-visible:outline-2   focus-visible:outline-offset-4  focus-visible:outline-green-logo"
            >
              <FiArrowLeft size={20} />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next services"
              className="rounded-full border border-gray-300 p-3
    transition-all duration-200 hover:bg-green-logo hover:border-green-logo hover:text-gray-100 hover:shadow-lg
 active:bg-green-logo active:border-green-logo active:text-white active:scale-95 focus-visible:outline-2
    focus-visible:outline-offset-4 focus-visible:outline-green-logo"
            >
              <FiArrowRight size={20} />
            </button>
          </motion.div>)}
          {/* CTA button & see all services button */}
         <motion.div
           initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 35 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: shouldReduceMotion ? 0.01 : 0.6,
    ease: "easeOut",
  }}
          className="ml-auto flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            {/* show all services button  */}
            <button
              onClick={toggleShowAll}
              aria-expanded={showAll}
              aria-controls="services-content"
              type="button"
              className="inline-flex items-center justify-center gap-2  rounded-full border-2 border-blue-logo bg-transparent
      px-3 py-2.5 font-space text-sm font-bold tracking-wide  text-blue-800 transition-all duration-300
      hover:border-green-logo hover:bg-green-logo  hover:text-white hover:shadow-lg active:border-green-logo active:bg-green-logo
    active:text-white active:scale-95  focus-visible:outline-2 focus-visible:outline-offset-4
      focus-visible:outline-teal-500
      md:px-6 md:py-3.5"
            >
              {showAll ? (
                <>
                  <FiColumns aria-hidden="true" size={18} />
                  Back to Slider
                </>
              ) : (
                <>
                  <FiGrid aria-hidden="true" size={18} />
                  See All Services
                </>
              )}
            </button>
            {/* cta button  */}
            <CtaButton
              id="contact"
              text="Plan Your Project"
              icon={<GoArrowUpRight aria-hidden="true" />}
              font="font-space"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default ServicesSection;
