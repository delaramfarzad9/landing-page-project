function CtaButton({id,text,icon,className,font}){
return (
       <a  className={`inline-flex  justify-center
        items-center md:gap-3 gap-2 rounded-full   bg-blue-logo px-3 md:px-6 md:py-4 py-3
        text-sm font-semibold text-gray-100 hover:text-white shadow-lg transition-all duration-300 [@media(hover:hover)]:hover:bg-green-logo hover:shadow-xl
        hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-500 font-space ${className}`}
              href={`#${id}`}
            >
              
             <span className={`font-bold tracking-wide ${font} `}>{text}</span>
              {icon}
            </a>
)
}
export default CtaButton;