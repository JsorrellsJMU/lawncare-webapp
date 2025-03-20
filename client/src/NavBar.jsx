import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center bg-green-700 p-3 flex-wrap">
      {/* Logo / Title */}

      <a href="#" className="p-2 mr-4 inline-flex items-center">
        {/* Inline Grass SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          className="fill-current text-green-500 h-8 w-8 mr-2"
        >
          <path d="M32 2c0 12.68-5.25 20.97-9.74 26.12C23.52 26.92 26 24.21 26 20c0-5.52-4.48-10-10-10-2.93 0-5.55 1.26-7.34 3.26A26.12 26.12 0 002 32c0 16.54 13.46 30 30 30s30-13.46 30-30C62 13.46 48.54 0 32 0zm0 58c-14.36 0-26-11.64-26-26 0-5.31 1.61-10.24 4.36-14.34C11.07 23.62 14 28.04 14 32c0 7.18 5.82 13 13 13 2.96 0 5.68-1.03 7.84-2.74C41.2 47.82 46 52.99 46 59.99c0 2.64-2.68 4.79-5.97 4.79h-.05C35.18 64.78 32 61.46 32 58z" />
        </svg>

        <span className="text-xl text-white font-bold uppercase tracking-wide">
          Brians Lawncare
        </span>
      </a>

      {/* Mobile toggle button */}
      <button
        className="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none"
        onClick={handleToggle}
      >
        <span className="material-icons">menu</span>
      </button>

      {/* Menu items */}
      <div
        className={`${isOpen ? "block" : "hidden"} top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        id="navigation"
      >
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
          <a
            href="#"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-800 items-center justify-center hover:bg-gray-900 hover:text-white"
          >
            Home
          </a>
          <a
            href="#"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-800 items-center justify-center hover:bg-gray-900 hover:text-white"
          >
            About
          </a>
          <a
            href="#"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-800 items-center justify-center hover:bg-gray-900 hover:text-white"
          >
            Services
          </a>
          <a
            href="#"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-800 items-center justify-center hover:bg-gray-900 hover:text-white"
          >
            Gallery
          </a>
          <a
            href="#"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-800 items-center justify-center hover:bg-gray-900 hover:text-white"
          >
            Products
          </a>
          <a
            href="#"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-800 items-center justify-center hover:bg-gray-900 hover:text-white"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}
