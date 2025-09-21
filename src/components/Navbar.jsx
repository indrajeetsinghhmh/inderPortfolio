import React from "react";

function Navbar() {
  return (
    <nav className="container mx-auto flex justify-between items-center py-4 px-6">
      <h1 className="text-2xl font-extrabold text-indigo-500 tracking-wide">
        InderPortfolio
      </h1>
      <ul className="hidden md:flex space-x-8 text-lg font-medium">
        <li>
          <a href="#home" className="hover:text-indigo-400 transition">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-indigo-400 transition">
            About
          </a>
        </li>
        <li>
          <a href="#whyme" className="hover:text-indigo-400 transition">
            Why Me
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-indigo-400 transition">
            Skills
          </a>
        </li>
        <li>
          <a href="#services" className="hover:text-indigo-400 transition">
            Services
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-indigo-400 transition">
            Projects
          </a>
        </li>
        <li>
          <a href="#faq" className="hover:text-indigo-400 transition">
            FAQ
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-indigo-400 transition">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
