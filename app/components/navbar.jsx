import React from "react";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "../css/navbar.css";

export default function Navbar(props) {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <nav className="nav" id="navbar">
      <a href="/" className="brand" id="logo">
        <span>
          <img className="w-64 md:w-auto" src="/images/BenBryantLogo.png"></img>
        </span>
      </a>
      <ul
        className="hidden md:flex justify-end space-x-4 mr-4 absolute right-2"
        id="links"
      >
        <li>
          <AnchorLink className="nav__item" href='#about' >
            About
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="nav__item" href="#contact">
            Contact
          </AnchorLink>
        </li>
      </ul>
      <div className="md:hidden absolute top-6 right-4">
        <button onClick={handleClick} className="outline-none menu-button">
          <svg
            className="w-10 h-10 text-gray-500"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 00 24 24"
            stroke="currentColor"
          >
            <path d="m4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        {visible && (
          <ul className="absolute -right-4 top-10 bg-black opacity-80 rounded mr-0 text-white">
            <li className="nav__item">
              <a href="#about" className="nav__link">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
