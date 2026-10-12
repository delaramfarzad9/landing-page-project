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
      animate={shouldReduceMotion ? { y: 0 } : { y: [0, -8, 0] }}
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
  flex w-fit items-center gap-1 rounded-full bg-gray-100 px-2 py-1 text-[9px]
  sm:gap-1.5 sm:px-3 sm:py-2 sm:text-xs lg:gap-2 lg:px-4 lg:py-3 lg:text-sm
  font-space whitespace-nowrap shadow-md shadow-blue-900/20 hover:shadow-blue-900/40
 
`}
      >
        <div className="text-green-logo">{icon}</div>
<span className="font-medium text-blue-logo">{text}</span>
      </motion.div>
    </motion.div>
  );
}

export default FloatingSticker;