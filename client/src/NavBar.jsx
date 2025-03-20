import { useState } from "react";
import briansLogo from './assets/brians_logo.png';

// Smooth scroll function
const smoothScroll = (sectionId) => {
  const section = document.querySelector(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    // 'Home', // Removed since it's unnecessary for now
    { name: 'About', id: '#about' },       // Placeholder for future section
    { name: 'Services', id: '#services' },  // Existing section
    { name: 'Gallery', id: '#gallery' },    // Placeholder for future section
    { name: 'Contact Us', id: '#contact' }  // Placeholder for future section
  ];

  return (
    <>
      <nav className="flex items-center bg-green-900 p-3 flex-wrap shadow-lg">
        <a href="#" className="p-2 mr-4 inline-flex items-center">
          <img src={briansLogo} alt="Brians Lawncare Logo" className="h-18 w-18 mr-2" />
          <span className="text-xl text-white font-bold uppercase tracking-wide">
            Appalachian Resource Management
          </span>
        </a>

        <button
          className="text-white inline-flex p-3 hover:bg-gray-700 rounded lg:hidden ml-auto hover:text-white outline-none"
          onClick={handleToggle}
        >
          <span className="material-icons">Menu</span>
        </button>

        <div
          className={`${isOpen ? "block" : "hidden"} top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto`}
          id="navigation"
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
            {menuItems.map(item => (
              <button
                key={item.name}
                onClick={() => smoothScroll(item.id)}
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-gray-700 hover:text-white"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
