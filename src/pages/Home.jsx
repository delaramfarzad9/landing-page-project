import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "../components/ContactSection";
import TestimonialsSec from "../components/TestimonialsSec";

function Home() {
  return (
    <>
      <section id="home">
        <HeroSection />
      </section>

       <section id="services" className="scroll-mt-16 ">
        <ServicesSection />
      </section>

      <section id="about" className="scroll-mt-16">
        <AboutSection />
      </section>

      <section id="testimonials" className="scroll-mt-16">
        <TestimonialsSec />
      </section>

      <section id="contact" className="scroll-mt-16">
        <ContactSection />
      </section> 
    </>
  );
}

export default Home;