import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { FiArrowUp } from "react-icons/fi";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 500);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? "instant" : "smooth",
    });
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          key="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 20,
          }}
          animate={{ opacity: 1, y: 0 }}
          exit={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 20,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 flex size-11 items-center justify-center rounded-full border border-gray-300 bg-white/90 text-blue-800 shadow-lg backdrop-blur-sm transition-colors duration-200 hover:border-green-logo hover:bg-green-logo hover:text-white active:border-green-logo active:bg-green-logo active:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-logo"
        >
          <FiArrowUp size={20} aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default BackToTop;
