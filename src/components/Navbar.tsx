// src/components/HamburgerMenu.tsx
import React, { useState } from 'react';
import logo from '../../public/logo.png';

const HamburgerMenu: React.FC<{ scrollToSection: (sectionId: string) => void }> = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 absolute top-0 w-full m-0">
      <div className="container mx-auto flex items-center justify-between ">
        <div id="logo-text" className='p-0 m-0'>
            <img src={logo} alt="Logo" className="h-auto w-24" />
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className={`w-10 h-10 transition-transform duration-300 transform ${
                isOpen ? 'rotate-90' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <ul
          className={`flex flex-col md:flex-row items-start md:items-center justify-start p-10 md:p-0 absolute md:static w-full right-14 md:right-0 top-20 md:top-0 bg-dark-blue md:bg-transparent transition-all duration-300 ease-in ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none md:pointer-events-auto'
          } md:opacity-100`}
        >
          <li className="text-white p-2 hover:text-light-blue cursor-pointer">
            <span onClick={() => scrollToSection("home")}>Home</span>
          </li>
          <li className="text-white p-2 hover:text-light-blue cursor-pointer">
            <span onClick={() => scrollToSection("about")}>About Me</span>
          </li>
          <li className="text-white p-2 hover:text-light-blue cursor-pointer">
            <span onClick={() => scrollToSection("expertise")}>What I do</span>
          </li>
          <li className="text-white p-2 hover:text-light-blue cursor-pointer">
            <span onClick={() => scrollToSection("skills")}>Skills</span>
          </li>
          <li className="text-white p-2 hover:text-light-blue cursor-pointer">
            <span onClick={() => scrollToSection("experience")}>Experience</span>
          </li>
          <li className="text-white p-2 hover:text-light-blue cursor-pointer">
            <span onClick={() => scrollToSection("portfolio")}>Portfolio</span>
          </li>
          <li className="text-white p-2 hover:text-light-blue cursor-pointer">
            <span onClick={() => scrollToSection("contact")}>Get in Touch</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HamburgerMenu;
