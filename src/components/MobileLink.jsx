import { IoChevronForwardSharp } from "react-icons/io5";

function MobileLink({ href, text, icon, closeMenu }) {
  return (
    <a
      href={href}
      onClick={closeMenu}
      className="flex min-h-12 w-full items-center justify-between gap-3 rounded-xl px-4 py-3 text-base font-semibold transition-colors hover:bg-blue-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-logo"
    >
      <span className="flex items-center gap-3">
       <span className="flex size-5 shrink-0 items-center justify-center text-xl drop-shadow-[0_0_0.5px_currentColor]">
    {icon}
  </span>
        <span>{text}</span>
      </span>

      <IoChevronForwardSharp aria-hidden="true" />
    </a>
  );
}

export default MobileLink;
