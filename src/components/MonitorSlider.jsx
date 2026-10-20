import { useEffect, useState } from "react";

import project1 from "../assets/images/hero_mockup_slides/websol_1.png";
import project2 from "../assets/images/hero_mockup_slides/websol_2.png";
import project3 from "../assets/images/hero_mockup_slides/websol_3.png";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { FiZap } from "react-icons/fi";
import FloatingSticker from "./FloatingSticker";
import { LuMonitorSmartphone } from "react-icons/lu";
import { FiTrendingUp} from "react-icons/fi";
const slides = [project1, project2, project3];

function MonitorSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showStickers, setShowStickers] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowStickers(latest > 30);
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearTimeout(timeout);
  }, [currentSlide]);

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* monitor */}
<div className="relative mx-auto w-[90%] lg:w-[85%]">
        {/*  frame */}
        <div className="rounded-3xl bg-linear-to-b from-gray-800 via-gray-600 to-gray-900 p-3 shadow-2xl">
          {/* webcam */}
          <div className="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-gray-400" />

          {/* Screen */}
          <div className="relative aspect-16/10 overflow-hidden rounded-2xl bg-gray-900">
            <div
              className="flex h-full transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide}
                  alt={`Project preview ${index + 1}`}
                  className="h-full w-full shrink-0 object-cover"
                />
              ))}
            </div>
          </div>
        </div>

        {/* bottom Monitor stand */}
<div className="mx-auto h-10 w-4 sm:h-14 sm:w-5 lg:h-16 lg:w-6 bg-linear-to-b from-gray-700 via-gray-400 to-gray-700" />

<div className="mx-auto h-3 w-24 sm:h-4 sm:w-32 lg:w-40 rounded-full bg-linear-to-r from-gray-500 via-gray-700 to-gray-500 shadow-lg" />
      </div>

      {/* slider dots */}
      <div className="mt-6 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentSlide(index)}
            className={`h-3  rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-blue-800 w-6" : "bg-gray-300 w-3 "
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      {/* floating stickers  */}
      {/* Fast Performance */}
      <motion.div
        initial={{ opacity: 0, y: -100, scale: 0.9 }}
      animate={{
  opacity: showStickers ? 1 : 0,
  y: showStickers ? 0 : -100,
  scale: showStickers ? 1 : 0.9,
}}
        transition={{
          opacity: {
            duration: 1.2,
            ease: "easeInOut",
          },
          y: {
            duration: 1.5,
            ease: "easeOut",
          },
          scale: {
            duration: 1.5,
            ease: "easeOut",
          },
        }}
        className="absolute top-7 left-0 lg:-left-10 z-20 lg:top-12 "
      >
        <FloatingSticker icon={<FiZap />} text="Fast Performance" />
      </motion.div>

      {/* Fully Responsive */}
      <motion.div
   initial={{ opacity: 0, x: 100, scale: 0.9 }}
animate={{
  opacity: showStickers ? 1 : 0,
  x: showStickers ? 0 : 100,
  scale: showStickers ? 1 : 0.9,
}}
   transition={{
  opacity: {
    duration: 1,
    delay: showStickers ? 0.4 : 0,
    ease: "easeOut",
  },
  x: {
    duration: 1.2,
    delay: showStickers ? 0.4 : 0,
    ease: "easeOut",
  },
  scale: {
    duration: 1.2,
    delay: showStickers ? 0.4 : 0,
    ease: "easeOut",
  },
}}
        className="absolute top-2/5 lg:top-1/2 right-0 z-20 lg:-right-20"
      >
        <FloatingSticker
          icon={<LuMonitorSmartphone />}
          text="Fully Responsive"
        />
      </motion.div>
      {/* Grow Your Business */}
      <motion.div
    initial={{ opacity: 0, x: -100, scale: 0.9 }}
animate={{
  opacity: showStickers ? 1 : 0,
  x: showStickers ? 0 : -100,
  scale: showStickers ? 1 : 0.9,
}}
       transition={{
  opacity: {
    duration: 1,
    delay: showStickers ? 0.9 : 0,
  },
  x: {
    duration: 1.2,
    delay: showStickers ? 0.9 : 0,
    ease: "easeOut",
  },
  scale: {
    duration: 1.2,
    delay: showStickers ? 0.9 : 0,
    ease: "easeOut",
  },
}}
        className=" absolute z-20  bottom-36 left-2  sm:bottom-40 sm:left-0  lg:bottom-36 lg:-left-30"
      >
        <FloatingSticker
          icon={<FiTrendingUp className="" />}
          text="Grow Your Business"
        />
      </motion.div>
    </div>
  );
}

export default MonitorSlider;
