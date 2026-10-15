import TestimonialCard from "./TestimonialCard";

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
  return (
    <section id="testimonials" className=" py-6 md:py-8 lg:py-10 xl:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-10 lg:px-12">
        {/* header  */}
        <div className="mb-8 flex flex-col items-center gap-2 text-center">
          <p className="text-blue-800 font-semibold tracking-wider text-sm font-space ">
            CLIENT FEEDBACK
          </p>
          <h2 className="text-blue-800 font-bold text-3xl sm:text-4xl font-space">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 ">
            A closer look at the experiences behind our work.
          </p>
        </div>
        {/* cards  */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {testimonials.map(({ id, name, title, feedback, rating }) => (
            <TestimonialCard
              key={id}
              name={name}
              title={title}
              feedback={feedback}
              rating={rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export default TestimonialsSec;
