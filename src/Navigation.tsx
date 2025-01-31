import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative z-10">
      {/* Navigation Bar */}
      <div className="flex justify-between items-center py-8 px-4 sm:px-16 bg-white opacity-80">
        <Link to="/">
          <div
            className="text-xl font-black hover:opacity-70 duration-300"
            onClick={closeMenu}
          >
            Robin Binder
          </div>
        </Link>

        {/* Hamburger icon (visible on mobile) */}
        <button
          onClick={toggleMenu}
          className="sm:hidden flex flex-col justify-center items-center space-y-1"
        >
          <span
            className={`w-6 h-0.5 bg-black transition-all duration-300 transform ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-black transition-all duration-300 transform ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Desktop Navigation Links */}
        <div className="flex items-center space-x-8 hidden sm:flex">
          <Link to="/paints">
            <div className="hover:opacity-70 duration-300">Handmade Paints</div>
          </Link>
          <Link to="/tattoos">
            <div className="hover:opacity-70 duration-300">Tattoos</div>
          </Link>
          <Link to="/commissions">
            <div className="hover:opacity-70 duration-300">Commissions</div>
          </Link>
          <Link to="/publications">
            <div className="hover:opacity-70 duration-300">Published Work</div>
          </Link>
          <a
            href="mailto:robinBBart@gmail.com?subject=Contact%20Request&body=Hello%2C%20I%20would%20like%20to%20get%20in%20touch."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-1 border rounded-md transition-colors hover:bg-black hover:text-white duration-300"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Mobile Menu (hidden by default, shown when hamburger is clicked) */}
      <div
        className={`sm:hidden absolute top-16 left-0 w-full bg-white shadow-lg ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4">
          <li>
            <Link
              to="/paints"
              className="text-black hover:text-gray-700"
              onClick={closeMenu}
            >
              Handmade Paints
            </Link>
          </li>
          <li>
            <Link
              to="/tattoos"
              className="text-black hover:text-gray-700"
              onClick={closeMenu}
            >
              Tattoos
            </Link>
          </li>
          <li>
            <Link
              to="/commissions"
              className="text-black hover:text-gray-700"
              onClick={closeMenu}
            >
              Commissions
            </Link>
          </li>
          <li>
            <Link
              to="/publications"
              className="text-black hover:text-gray-700"
              onClick={closeMenu}
            >
              Published Work
            </Link>
          </li>
          <li>
            <a
              href="mailto:robinBBart@gmail.com?subject=Contact%20Request&body=Hello%2C%20I%20would%20like%20to%20get%20in%20touch."
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-700"
              onClick={closeMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
