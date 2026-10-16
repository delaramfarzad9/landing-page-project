function CtaButton({id,text,icon,className,font}){
return (
       <a  className={`inline-flex items-center justify-center
    gap-2 md:gap-3 rounded-full
    bg-blue-logo px-3 py-3 md:px-6 md:py-4
    text-sm font-semibold text-gray-100
    shadow-lg transition-all duration-300 font-space

    hover:bg-green-logo hover:text-white
    hover:shadow-xl hover:-translate-y-0.5

    active:bg-green-logo active:text-white
    active:scale-95

    focus-visible:outline-2
    focus-visible:outline-offset-4
    focus-visible:outline-teal-500 ${className}`}
              href={`#${id}`}
            >
              
             <span className={`font-bold tracking-wide ${font} `}>{text}</span>
              {icon}
            </a>
)
}
export default CtaButton;