import { GoArrowUpRight } from "react-icons/go";
import MonitorSlider from "../components/MonitorSlider";
import CtaButton from "./CtaButton";
import { motion, useReducedMotion } from "motion/react";
function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.14,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
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
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="scroll-mt-16 py-6 md:py-8 lg:py-10 xl:py-12"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-5 px-4 md:px-10 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center items-center gap-4 "
        >
          <motion.p
            variants={itemVariants}
            className="text-blue-800 font-semibold tracking-wider text-sm font-space"
          >
            WEBSOL · DIGITAL SOLUTIONS
          </motion.p>

          <h1
            id="hero-heading"
            className="text-center  text-4xl sm:text-5xl lg:text-7xl font-bold text-shadow-stone-400 text-shadow-md leading-[1.2] font-space"
          >
            <motion.span
              variants={itemVariants}
              className="text-blue-600   block  "
            >
              Digital Design{" "}
            </motion.span>
            <motion.span variants={itemVariants} className=" block ">
              Development Agency
            </motion.span>
          </h1>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 max-w-xl text-center  "
          >
            We design and develop modern, user-focused websites and digital
            solutions that help businesses grow.
          </motion.p>
          {/* CTA */}
          <motion.div variants={itemVariants}>
            <CtaButton
              id="contact"
              text="Start a Project"
              icon={<GoArrowUpRight aria-hidden="true" />}
              className="mt-4 md:mb-2"
            />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0.01 : 0.9,
            delay: shouldReduceMotion ? 0 : 1.1,
            ease: "easeOut",
          }}
        >
          <MonitorSlider />
        </motion.div>
      </div>
    </section>
  );
}
export default HeroSection;
