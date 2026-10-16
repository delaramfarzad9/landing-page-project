import { MdOutlineCall } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import { FiGlobe } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";
import ContactForm from "./ContactForm";

import { MdOutlineLocationOn } from "react-icons/md";
const contactInfo = [
  {
    id: 1,
    name: "Phone",
    value: "tel:+442012345678",
    text: "+44 20 1234 5678",
    icon: MdOutlineCall,
  },
  {
    id: 2,
    name: "Email",
    value: "mailto:hello@websol.com",
    text: "hello@websol.com",
    icon: MdOutlineEmail,
  },
  {
    id: 3,
    name: "Address",
    text: "123 Main Street, London, United Kingdom",
    icon: MdOutlineLocationOn,
  },
  {
    id: 4,
    name: "Website",
    value: "https://landing-page-project-rose.vercel.app",
    text: "www.websol.com",
    icon: FiGlobe,
  },
];

const socialLinks = [
  { id: 1, name: "Instagram", url: "https://instagram.com", icon: GrInstagram },
  { id: 2, name: "LinkedIn", url: "https://linkedin.com", icon: FaLinkedinIn },
  { id: 3, name: "GitHub", url: "https://github.com", icon: FaGithub },
];

function ContactSection() {
  return (
    <section id="contact" className=" py-6 md:py-8 lg:py-10 xl:py-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 md:px-10 lg:gap-10 lg:px-12">
        {/* header  */}
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-blue-800 font-semibold tracking-wider text-sm font-space">
            LET'S CONNECT
          </p>
          <h2 className="text-blue-800 font-bold text-3xl md:text-4xl font-space">
            Have a Project in Mind?
          </h2>
          <p className="text-gray-600 ">
            Tell us what you're building. We'd love to hear your ideas.
          </p>
        </div>
        {/* section  */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* text  */}
          <div className="flex flex-col gap-2">
            {/* contactInfo  */}
            <div className="mt-2 flex flex-col gap-1 border-b border-teal-200 pb-6 max-w-lg">
              <h3 className="text-blue-800 font-semibold text-2xl font-space mt-2">
                Contact Information
              </h3>
              <div className="flex flex-col gap-2 mt-5">
                {contactInfo.map((item) => (
                  <div key={item.id} className="group flex items-center gap-3">
                    <div className="flex size-14 items-center justify-center rounded-xl bg-blue-logo/10  text-blue-logo transition-colors duration-300  group-hover:bg-green-logo/90 group-hover:text-gray-100">
                      <item.icon size={22} aria-hidden="true" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-gray-700 font-medium">{item.name}</p>
                      {item.value ? (
                        <a
                          className="wrap-break-word text-gray-600  transition-colors group-hover:text-blue-700 group-hover:underline"
                          href={item.value}
                        >
                          {item.text}
                        </a>
                      ) : (
                        <p className="text-gray-600 wrap-break-word">{item.text}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-blue-800 font-semibold text-xl mt-4 font-space">
                Follow Us
              </h3>
              <div className="flex gap-2">
                {socialLinks.map((link) => (
                  <div key={link.id}>
                    <a
                      href={link.url}
                      aria-label={link.name}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 shrink-0 size-14 flex items-center justify-center rounded-lg bg-blue-logo/10 p-2 transition-colors duration-300 hover:bg-green-logo/90 hover:text-gray-100"
                    >
                      <link.icon size={22} aria-hidden="true" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* form  */}
          <div className="min-w-0">
            <ContactForm />
          </div>
        </div>
        {/* end grid */}
      </div>
    </section>
  );
}
export default ContactSection;
