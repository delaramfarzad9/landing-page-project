import { FiCheckCircle } from "react-icons/fi";
import { FiCode } from "react-icons/fi";
import { FiTrendingUp } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
import { FiUsers } from "react-icons/fi";
import StatsBar from "./StatsBar";
import CtaButton from "./CtaButton";
import { motion, useReducedMotion } from "motion/react";
const aboutCards = [
  {
    id: "understanding-business",
    title: "Understanding Your Business",
    description:
      "We understand your goals and audience to create tailored digital solutions that reflect your brand.",
    icon: FiUsers,
  },
  {
    id: "quality-experiences",
    title: "Building Quality Experiences",
    description:
      "We combine thoughtful design and clean development to build professional websites that inspire trust.",
    icon: FiCode,
  },
  {
    id: "business-growth",
    title: "Supporting Business Growth",
    description:
      "We create fast, user-friendly experiences that strengthen your online presence and help your business grow.",
    icon: FiTrendingUp,
  },
];
const accomplishments = [
  {
    id: "projects-delivered",
    title: "Projects Delivered",
    value: "50+",
  },
  {
    id: "clients-worldwide",
    title: "Clients Worldwide",
    value: "30+",
  },
  {
    id: "years-of-experience",
    title: "Years of Experience",
    value: "5+",
  },
];
const checkedpoints = [
  "Tailored solutions for every project",
  "Transparent, collaborative process",
  "Built for Performance and growth",
];

function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  const leftVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  const rightVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.18,
        delayChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const leftItemVariants = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : -40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.6,
        ease: "easeOut",
      },
    },
  };

  const rightItemVariants = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : 40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <section id="about" className="py-4 md:py-8 lg:py-10 xl:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-10 lg:px-12">
        {/* two columns layout */}
        <div className="flex flex-col gap-10 xl:flex-row xl:items-center ml-1 md:ml-0">
          {/* header  */}
          <motion.div
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="flex w-full min-w-0 flex-col items-start gap-1 xl:w-auto xl:flex-1"
          >
            <motion.div variants={leftItemVariants}>
              <p className="text-blue-800 font-semibold tracking-wider text-sm font-space ">
                WHO WE ARE
              </p>
              <h2 className="text-blue-800 font-bold text-3xl sm:text-4xl font-space">
                Creative Thinking. Smart Development.
              </h2>
            </motion.div>
            <motion.p
              variants={leftItemVariants}
              className="text-gray-600 mt-2"
            >
              WebSol is a creative digital agency specialising in web
              development, UI/UX design, branding, and digital solutions. We
              combine creativity and technology to build modern, engaging
              digital experiences that help businesses strengthen their online
              presence and connect with their audiences.
            </motion.p>
            <motion.div className="flex flex-col items-start  space-y-2 mt-6">
              {checkedpoints.map((point) => (
                <motion.div
                  key={point}
                  variants={leftItemVariants}
                  className="flex gap-2 items-start"
                >
                  <FiCheckCircle
                    aria-hidden="true"
                    className="text-blue-logo shrink-0"
                    size={20}
                  />
                  <span className="text-gray-600">{point}</span>
                </motion.div>
              ))}
            </motion.div>
            {/* cta  */}
            <motion.div variants={leftItemVariants} className="mt-6">
              <CtaButton
                id="contact"
                text="Let's work together"
                icon={<GoArrowUpRight aria-hidden="true" />}
                font="font-space"
              />
            </motion.div>
          </motion.div>

          {/* visual  */}
          <motion.div
            variants={rightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="flex w-full min-w-0 flex-col gap-3 xl:w-auto xl:flex-1 "
          >
            {aboutCards.map((card) => (
              <motion.div
                variants={rightItemVariants}
                key={card.id}
                className="group flex items-start gap-4 rounded-lg border border-gray-100 p-4 shadow-md
  transition-[box-shadow,border-color] duration-300 ease-in-out hover:shadow-xl  active:shadow-xl  active:border-green-logo/40"
              >
                {/* icon  */}
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center
  rounded-md bg-blue-logo/10 p-2 text-blue-logo transition-all duration-300 group-hover:bg-green-logo
  group-hover:text-gray-100 group-hover:shadow-lg group-active:bg-green-logo group-active:text-gray-100
  group-active:shadow-lg"
                >
                  <card.icon size={24} />
                </div>
                {/* text  */}
                <div className="flex flex-col gap-2 max-w-lg">
                  <h3 className="font-bold font-space text-blue-800 ">
                    {card.title}
                  </h3>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              </motion.div>
            ))}
            {/* statistics panel  */}
            <motion.div variants={rightItemVariants}>
              <StatsBar stats={accomplishments} font="font-space" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default AboutSection;
