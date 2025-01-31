// components/Navbar.jsx
import React, { useState } from "react";
import { FiMenu, FiX, FiXCircle } from "react-icons/fi";
// import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-7">
      <div className="text-2xl font-bold text-[#ffd7be]">Chiamaka's Portfolio</div>
        {/* <div className="text-2xl font-bold text-[] ">Chiamaka's Portfolio</div> */}

        <button
          className="text-3xl text-gray-900 md:hidden"
          onClick={toggleSidebar}
        >
          {isOpen ? <FiXCircle /> : <FiMenu />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-700 hover:text-purple-700">
            About
          </a>
          <a href="#work" className="text-gray-700 hover:text-purple-700">
            Portfolio
          </a>
          <a href="#services" className="text-gray-700 hover:text-purple-700">
            Services
          </a>
          <a href="#contact" className="text-gray-700 hover:text-purple-700">
            Contact
          </a>
        </nav>
      </div>

      {/* Sidebar Nav */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden">
          <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 flex flex-col p-6">
            <button
              className="text-3xl text-purple-700 self-end mb-6"
              onClick={toggleSidebar}
            >
              <FiX />
            </button>
            <nav className="flex flex-col space-y-4">
              <a
                href="#about"
                className="text-gray-700 hover:text-purple-700 text-lg"
                onClick={toggleSidebar}
              >
                About
              </a>
              <a
                href="#work"
                className="text-gray-700 hover:text-purple-700 text-lg"
                onClick={toggleSidebar}
              >
                Portfolio
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-purple-700 text-lg"
                onClick={toggleSidebar}
              >
                Services
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-purple-700 text-lg"
                onClick={toggleSidebar}
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
