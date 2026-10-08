import { useEffect, useState } from "react";

import project1 from "../assets/images/hero_mockup_slides/Lumière_E-commerce.png";
import project2 from "../assets/images/hero_mockup_slides/Serene _Flow _Yoga _Wellness _Homepage.png";
import project3 from "../assets/images/hero_mockup_slides/AutoPrime_Homepage.png";
const slides = [project1, project2, project3];

function MonitorSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* monitor */}
      <div className="relative mx-auto">
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
        <div className="mx-auto h-16 w-6 bg-linear-to-b from-gray-700 via-gray-400 to-gray-700" />
        <div className="mx-auto h-4 w-40 rounded-full bg-linear-to-r from-gray-500 via-gray-700 to-gray-500 shadow-lg" />
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
    </div>
  );
}

export default MonitorSlider;