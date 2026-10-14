import { IoIosArrowRoundForward } from "react-icons/io";
import { useState } from "react";
function ContactForm() {
    const [formData, setFormData] = useState({
        fullName:"",
        emailAddress:"",
        message:""
    });
    const [errors, setErrors] = useState({});
    const [submitStatus, setSubmitStatus] = useState("");
function handleChange(event) {
  const { name, value } = event.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));

  setErrors((prev) => ({
    ...prev,
    [name]: "",
  }));

  setSubmitStatus("");
}
function handleSubmit(event) {
  event.preventDefault();

  const newErrors = {};

  if (!formData.fullName.trim()) {
    newErrors.fullName = "Please enter your full name.";
  }

  if (!formData.emailAddress.trim()) {
    newErrors.emailAddress = "Please enter your email address.";
  }
     else if (!event.currentTarget.elements.emailAddress.validity.valid) {
    newErrors.emailAddress = "Please enter a valid email address.";
  }


  if (!formData.message.trim()) {
    newErrors.message = "Please enter a message.";
  }
  

  setErrors(newErrors);

  if (Object.keys(newErrors).length > 0) {
    return;
  }


  setSubmitStatus("success");
}
  return (
<form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-2xl border border-blue-100 bg-white p-6 shadow-md">
 <div className="flex flex-col gap-1">
       <h3 className="text-2xl font-semibold text-blue-800 font-space">
        Send Us a Message
      </h3>
      <p className="text-sm text-gray-500">
      <span className="text-red-500" aria-hidden="true">*</span> Required fields
    </p>
 </div>
      <div className="flex flex-col gap-5">
<div className="flex flex-col gap-2">
    <label htmlFor="fullName" className="font-medium text-gray-700">Full Name<span className="text-red-600" aria-hidden="true">*</span></label>
<input  type="text" id="fullName"   name="fullName" value={formData.fullName} onChange={handleChange}  placeholder="Jane Smith"  required className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-logo focus:ring-2 focus:ring-green-logo/20" aria-invalid={Boolean(errors.fullName)}
aria-describedby={errors.fullName ? "fullName-error" : undefined} />
{errors.fullName && (
  <p id="fullName-error" className="text-sm text-red-600">
    {errors.fullName}
  </p>
)}
</div>
<div className="flex flex-col gap-2">
    <label htmlFor="emailAddress" className="font-medium text-gray-700">Email Address<span className="text-red-600" aria-hidden="true">*</span></label>
    <input type="email" id="emailAddress" name="emailAddress" value={formData.emailAddress} onChange={handleChange} placeholder="jane@example.com" required className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-logo focus:ring-2 focus:ring-green-logo/20" aria-invalid={Boolean(errors.emailAddress)}
aria-describedby={errors.emailAddress ? "emailAddress-error" : undefined} />
{errors.emailAddress && (
  <p id="emailAddress-error" className="text-sm text-red-600">
    {errors.emailAddress}
  </p>
)}
</div>
  <div className="flex flex-col gap-2">
    <label htmlFor="message" className="font-medium text-gray-700">
      Your Message<span className="text-red-600" aria-hidden="true">*</span>
    </label>
    <textarea aria-invalid={Boolean(errors.message)}
aria-describedby={errors.message ? "message-error" : undefined} rows={5} id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project..." required   className="resize-y rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-logo focus:ring-2 focus:ring-green-logo/20 "/>
    {errors.message && (
  <p id="message-error" className="text-sm text-red-600">
    {errors.message}
  </p>
)}
  </div>
  {/* submit button  */}
 <button type="submit" className="inline-flex  justify-center
        items-center md:gap-3 gap-2 rounded-full   bg-blue-logo px-3 md:px-6 md:py-4 py-3
        text-sm font-semibold text-gray-100 hover:text-white shadow-lg transition-all duration-300 hover:bg-green-logo hover:shadow-xl
        hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-500 font-space">
<span>Send Message</span>
<IoIosArrowRoundForward aria-hidden="true" />
 </button>
{submitStatus === "success" && (
  <p
    role="status"
    className="rounded-lg bg-green-50 p-3 text-sm text-green-800"
  >
    Form validated successfully!
  </p>
)}
      </div>
</form>
  )
}
export default ContactForm