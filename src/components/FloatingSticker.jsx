import { motion, useReducedMotion, useAnimate } from "motion/react";

function FloatingSticker({ icon, text, className = "" }) {
  const shouldReduceMotion = useReducedMotion();
  const [scope, animate] = useAnimate();

  const handleTap = () => {
    if (shouldReduceMotion) return;

    animate(
      scope.current,
      {
        rotate: [0, -6, 6, -3, 0],
        scale: [1, 0.96, 1],
      },
      { duration: 0.5, ease: "easeInOut" },
    );
  };

  return (
    // Continuous floating
    <motion.div
      animate={shouldReduceMotion ? { y: 0 } : { y: [0, -6, 0] }}
      transition={{
        duration: 4,
        repeat: shouldReduceMotion ? 0 : Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {/* Sticker content and tap interaction */}
      <motion.div
        ref={scope}
        onTap={handleTap}
        className={`
    flex w-fit items-center gap-1 rounded-full bg-white px-2 py-1 sm:gap-1.5 sm:px-3 sm:py-2 sm:text-xs
    lg:gap-2 lg:px-4 lg:py-3 font-space whitespace-nowrap shadow-lg shadow-blue-900/20
    hover:shadow-blue-900/40
  `}
      >
        <div className="text-green-logo text-xs sm:text-base lg:text-2xl">
          {icon}
        </div>
        <span className="font-medium text-blue-logo text-[10px] sm:text-sm lg:text-xl">
          {text}
        </span>
      </motion.div>
    </motion.div>
  );
}

export default FloatingSticker;
