import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Header = () => {
  // toggle mobile menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-t-[1px] border-gray-250 border-b-[1px]">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2">
          {/* Logo + NGO Name */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600">
            <FaHeart
              className="h-5 w-5 text-primary-foreground"
              fill="currentColor"
            />
          </div>
          <div className="text-2xl font-bold text-green-600">Health NGO</div>
        </a>

        {/* Dekstop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 font-medium">
          <Link to="/" className="hover:text-green-600 transition">
            Home
          </Link>

          <Link to="/about" className="hover:text-green-600 transition">
            About Us
          </Link>

          <Link to="/programs" className="hover:text-green-600 transition">
            Our Programs
          </Link>

          <Link to="/blogs" className="hover:text-green-600 transition">
            Blog
          </Link>

          <Link to="/events" className="hover:text-green-600 transition">
            Events
          </Link>

          <Link
            to="/donate"
            className="bg-red-500 rounded-full border-2 inline-flex items-center justify-center gap-2 text-white px-5 py-2  hover:bg-red-700 transition"
          >
            <FaHeart className="h-4 w-4" />
            Donate
          </Link>

          <Link to="/contact" className="hover:text-green-600 transition">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-6 space-y-4 font-medium">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block hover:text-green-600"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block hover:text-green-600"
          >
            About Us
          </Link>

          <Link
            to="/programs"
            onClick={() => setIsOpen(false)}
            className="block hover:text-green-600"
          >
            Our Programs
          </Link>

          <Link
            to="/blogs"
            onClick={() => setIsOpen(false)}
            className="block hover:text-green-600"
          >
            Blog
          </Link>

          <Link
            to="/events"
            onClick={() => setIsOpen(false)}
            className="block hover:text-green-600"
          >
            Events
          </Link>

          <Link
            to="/donate"
            onClick={() => setIsOpen(false)}
            className="block bg-red-500 inline-flex items-center justify-center gap-2 text-white px-4 py-2 rounded-lg text-center hover:bg-red-600"
          >
            <FaHeart className="h-4 w-4" />
            Donate
          </Link>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block hover:text-green-600"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
