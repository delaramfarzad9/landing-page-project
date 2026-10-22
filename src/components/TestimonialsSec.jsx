import TestimonialCard from "./TestimonialCard";
import { motion, useReducedMotion } from "motion/react";

const testimonials = [
  {
    id: 1,
    name: "Charlotte Bennett",
    title: "Founder, Studio North",
    feedback:
      "WebSol understood our vision from the start and created a website that truly reflects our brand. The attention to detail made all the difference.",
    rating: 5,
  },
  {
    id: 2,
    name: "James Mitchell",
    title: "Owner, Oak & Co.",
    feedback:
      "Our new online store is fast, intuitive, and beautifully designed. It's made the shopping experience much simpler for our customers.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sophie Williams",
    title: "Marketing Director, Brightline",
    feedback:
      "From the initial ideas to the final design, the process felt smooth and collaborative. The result is a professional website we're proud to share.",
    rating: 5,
  },
];

function TestimonialsSec() {
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

  const cardsVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.18,
        delayChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };
  const cardVariants = [
    {
      hidden: {
        opacity: 0,
        x: shouldReduceMotion ? 0 : -35,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: shouldReduceMotion ? 0.01 : 0.7,
          ease: "easeOut",
        },
      },
    },
    {
      hidden: {
        opacity: 0,
        y: shouldReduceMotion ? 0 : 30,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: shouldReduceMotion ? 0.01 : 0.7,
          ease: "easeOut",
        },
      },
    },
    {
      hidden: {
        opacity: 0,
        x: shouldReduceMotion ? 0 : 35,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: shouldReduceMotion ? 0.01 : 0.7,
          ease: "easeOut",
        },
      },
    },
  ];
  return (
    <section id="testimonials" className=" py-6 md:py-8 lg:py-10 xl:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-10 lg:px-12">
        {/* header  */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-8 flex flex-col items-center gap-2 text-center"
        >
          <motion.p
            variants={headerItemVariants}
            className="text-blue-800 font-semibold tracking-wider text-sm font-space "
          >
            CLIENT FEEDBACK
          </motion.p>
          <motion.h2
            variants={headerItemVariants}
            className="text-blue-800 font-bold text-3xl sm:text-4xl font-space"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p variants={headerItemVariants} className="text-gray-600 ">
            A closer look at the experiences behind our work.
          </motion.p>
        </motion.div>
        {/* cards  */}
        <motion.div
          variants={cardsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-4 lg:grid-cols-3"
        >
          {testimonials.map(({ id, name, title, feedback, rating }, index) => (
            <motion.div key={id} variants={cardVariants[index]}>
              <TestimonialCard
                name={name}
                title={title}
                feedback={feedback}
                rating={rating}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
export default TestimonialsSec;
