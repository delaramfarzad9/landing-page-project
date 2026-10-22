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
        tabIndex={-1}
        className={`
  flex w-fit items-center gap-1 rounded-full bg-white px-2 py-1 sm:gap-1.5 sm:px-3 sm:py-2
  lg:gap-1.5 lg:px-3 lg:py-2 min-[1292px]:gap-2 min-[1292px]:px-4 min-[1292px]:py-3
  font-space whitespace-nowrap shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40
`}
      >
        <div className="text-green-logo text-xs sm:text-base lg:text-lg min-[1292px]:text-2xl">
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
