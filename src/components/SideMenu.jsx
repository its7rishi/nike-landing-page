const SideMenu = ({ setMenuOpen }) => {
  return (
    <div className="absolute top-0 right-0 bg-white w-[50%] max-h-[80%] pb-12 z-30 flex flex-col items-center justify-start gap-8 shadow-3xl">
      <button
        className="mt-4 mr-4 inline-flex self-end"
        onClick={() => setMenuOpen(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <ul className="flex flex-col gap-8 font-montserrat text-xl font-semibold">
        <li className="cursor-pointer hover:text-coral-red">
          <a href="#">Home</a>
        </li>
        <li className="cursor-pointer hover:text-coral-red">
          <a href="#">About Us</a>
        </li>
        <li className="cursor-pointer hover:text-coral-red">
          <a href="#">Products</a>
        </li>
        <li className="cursor-pointer">
          <a href="#" className="hover:text-coral-red">
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  )
}
export default SideMenu
