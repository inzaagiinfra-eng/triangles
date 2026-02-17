import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <nav className="w-full  fixed top-0 left-0 z-50 bg-white shadow-lg">
      <div className="app-container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          
          <Link to="/" className="flex items-center">
            <img src="/logo.png" width={54} height={54} alt="Logo" />
          </Link>

          <ul className="hidden md:flex space-x-8">
            {navLinks.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  className="text-gray-700 hover:text-black transition duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden bg-white transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 space-y-4">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                className="block text-gray-700 hover:text-black transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
