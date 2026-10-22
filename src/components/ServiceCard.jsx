function ServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden gap-2 rounded-2xl border border-gray-100 px-7 pt-7 pb-5 shadow-md  transition-all duration-300 ease-out hover:-translate-y-1 
  hover:border-green-logo/40 hover:shadow-xl  bg-gray-50   active:-translate-y-0.5
  active:border-green-logo/40
  active:shadow-lg"
    >
      {/* icon & number */}
      <div className="flex items-start justify-between">
        <span
          className="flex size-14 items-center justify-center rounded-xl bg-blue-logo/10  text-blue-logo transition-colors duration-300  group-hover:bg-green-logo group-hover:text-gray-100  group-active:bg-green-logo
  group-active:text-gray-100"
        >
          <Icon size={28} aria-hidden="true" />
        </span>
        <span className=" text-gray-400  font-space text-sm font-semibold duration-300 group-hover:text-green-logo group-active:text-green-logo">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* service title  */}
      <h3 className="mt-6 text-xl   font-semibold   border-b pb-4 border-gray-200  font-space text-blue-800">
        {service.title}
      </h3>

      <p className="text-gray-600 pt-4 ">{service.description}</p>
      {/* accent bar  */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1  origin-left scale-x-0 bg-linear-to-r from-blue-logo to-green-logo transition-all duration-300 ease-out group-hover:scale-x-100 group-active:scale-x-100"
      />
    </article>
  );
}

export default ServiceCard;
