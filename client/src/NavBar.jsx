import { useState } from "react";
import briansLogo from './assets/brians_logo.png';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center bg-green-700 p-3 flex-wrap">
      {/* Logo / Title */}
      <a href="#" className="p-2 mr-4 inline-flex items-center">
        <img src={briansLogo} alt="Brians Lawncare Logo" className="h-20 w-20 mr-2" />
        <span className="text-xl text-white font-bold uppercase tracking-wide">
          Appalachian Resource Management
        </span>
      </a>

      {/* Mobile toggle button */}
      <button
        className="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none"
        onClick={handleToggle}
      >
        <span className="material-icons">Menu</span>
      </button>

      {/* Menu items */}
      <div
        className={`${isOpen ? "block" : "hidden"} top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        id="navigation"
      >
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
          <a
            href="#"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-gray-900 hover:text-white"
          >
            Home
          </a>
          <a
            href="#"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-gray-900 hover:text-white"
          >
            About
          </a>
          <a
            href="#"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-gray-900 hover:text-white"
          >
            Services
          </a>
          <a
            href="#"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-gray-900 hover:text-white"
          >
            Gallery
          </a>
         
          <a
            href="#"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-gray-900 hover:text-white"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}
