import { FiStar } from "react-icons/fi";
import { BiSolidQuoteAltRight } from "react-icons/bi";
const stars = [1, 2, 3, 4, 5];

function TestimonialCard({name,title,feedback,rating}){
     const initials = name
    .split(" ")
    .map((word) => word[0])
    .join(""); 
    return(

     <article className="group relative z-0 flex h-full flex-col items-start
  gap-7 rounded-xl border border-blue-100 bg-gray-50 p-6
  shadow-[0_4px_18px] shadow-blue-logo/8
  transition-all duration-500 ease-in-out motion-safe:hover:z-10 motion-safe:hover:-translate-y-3
  motion-safe:hover:scale-[1.02] hover:border-green-logo/30 hover:shadow-[0_18px_35px]
  hover:shadow-blue-logo/16 motion-safe:active:scale-[0.99] active:border-green-logo/30
 motion-reduce:transition-none">
<div className="flex w-full items-start justify-between ">
    <div className="  rounded-lg bg-blue-800/20 p-2 text-blue-800 transition-colors duration-300 group-hover:bg-green-logo/15
group-hover:text-green-logo
group-active:bg-green-logo/15
group-active:text-green-logo">
    <BiSolidQuoteAltRight size={24} aria-hidden="true" />
    </div>
    {/* stars  */}
 <div
  className="flex gap-1 text-amber-400"
  role="img"
  aria-label={`${rating} out of 5 stars`}
>
  {stars.map((star) => (
    <FiStar
      key={star}
      aria-hidden="true"
      className={
        star <= rating
          ? "fill-current"
          : "text-gray-300"
      }
    />
  ))}
</div>

   </div>
   <p className="text-gray-600">“{feedback}”</p>
 <div className="mt-auto flex items-center gap-3 ">
   <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-800/10 text-lg font-bold text-blue-800">
  {initials}
</div>
  <div className="flex flex-col ">
     <span   className="font-semibold text-blue-800
    transition-colors duration-300
    group-hover:text-green-logo
    group-active:text-green-logo">{name}</span>
   <span className="text-gray-500">{title}</span>
  </div>

 </div>

     </article>
)}
export default TestimonialCard