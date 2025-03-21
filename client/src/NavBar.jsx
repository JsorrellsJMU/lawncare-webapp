import { useState } from "react";
import { Link, useLocation } from "react-router-dom";  // Import Link and useLocation for routing
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
  const location = useLocation();  // Get the current route

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Render Home button only if the user is on the Gallery page
  if (location.pathname === "/gallery") {
    return (
      <nav className="flex items-center bg-green-900 p-3 flex-wrap shadow-lg justify-between relative z-10">
        <Link to="/" className="p-2 mr-4 inline-flex items-center">
          <img src={briansLogo} alt="Brians Lawncare Logo" className="h-18 w-18 mr-2" />
          <span className="text-xl text-white font-bold uppercase tracking-wide">
            Appalachian Resource Management
          </span>
        </Link>

        <Link 
          to="/" 
          className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-gray-700 hover:text-white text-center"
        >
          Home
        </Link>
      </nav>
    );
  }

  const menuItems = [
    { name: 'About', id: '#about' },
    { name: 'Services', id: '#services' },
    { name: 'Gallery', link: '/gallery' },
    { name: 'Contact Us', id: '#contact' }
  ];

  return (
    <>
      <nav className="flex items-center bg-green-900 p-3 flex-wrap shadow-lg relative z-10">
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
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-center flex flex-col lg:h-auto space-y-2 lg:space-y-0">
            {menuItems.map(item => (
              item.link ? (
                <Link
                  key={item.name}
                  to={item.link}
                  onClick={() => setIsOpen(false)}  // Closes menu after clicking Gallery
                  className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-gray-700 hover:text-white text-center"
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => { smoothScroll(item.id); setIsOpen(false); }}  // Closes menu after scrolling
                  className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-gray-700 hover:text-white text-center"
                >
                  {item.name}
                </button>
              )
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
