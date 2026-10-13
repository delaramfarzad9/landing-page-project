import { motion, useReducedMotion } from "motion/react";

function FloatingSticker({
  icon,
  text,
  className = "",
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    // Continuous floating
    <motion.div
      animate={shouldReduceMotion ? { y: 0 } : { y: [0, -5, 0] }}
      transition={{
        duration: 4,
        repeat: shouldReduceMotion ? 0 : Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {/* Wiggle on hover */}
      <motion.div
        initial={{ rotate: 0 }}
  animate={{ rotate: 0 }}
  whileHover={
    shouldReduceMotion
      ? {}
      : { rotate: [0, -6, 6, -3, 0] }
  }
        transition={{
          rotate: {
            duration: 0.5,
            ease: "easeInOut",
          },
        }}
      className={`
  flex w-fit items-center gap-1 rounded-full bg-white px-2 py-1 
  sm:gap-1.5 sm:px-3 sm:py-2 sm:text-xs lg:gap-2 lg:px-4 lg:py-3 
  font-space whitespace-nowrap shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40
 
`}
      >
        <div className="text-green-logo text-xs sm:text-base lg:text-2xl">{icon}</div>
<span className="font-medium text-blue-logo text-[10px] sm:text-sm lg:text-xl">{text}</span>
      </motion.div>
    </motion.div>
  );
}

export default FloatingSticker;