import React, { useState } from "react";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <header className="flex justify-between items-center font-gemunu h-24 sm:h-32 w-full p-6 md:p-8 uppercase bg-black-pro text-orange-pro">
        <span className="text-4xl sm:text-5xl md:text-6xl font-bold cursor-pointer text-transparent bg-gradient-to-r bg-clip-text from-orange-pro via-orange-bright to-orange-400">
          Devilkin
        </span>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
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

        <nav
          className={`hidden container mx-auto md:flex items-center justify-end space-x-2 md:space-x-3`}
        >
          <a
            href="#home"
            className="hover:text-orange-300 duration-300 text-xs sm:text-base"
          >
            home
          </a>
          <a
            href="#about"
            className="hover:text-orange-300 duration-300 text-xs sm:text-base"
          >
            about
          </a>
          <a
            href="#skills"
            className="hover:text-orange-300 duration-300 text-xs sm:text-base"
          >
            skills
          </a>
          <a
            href="#projects"
            className="hover:text-orange-300 duration-300 text-xs sm:text-base"
          >
            projects
          </a>

        </nav>
      </header>
      <div
        className={`${
          isMobileMenuOpen ? "flex" : "hidden"
        } items-center justify-center space-x-4 bg-black-pro text-orange-pro uppercase w-full px-6 py-3`}
      >
        <a href="#home" className="hover:text-orange-300 duration-300 text-xs">
          home
        </a>
        <a href="#about" className="hover:text-orange-300 duration-300 text-xs">
          about
        </a>
        <a
          href="#skills"
          className="hover:text-orange-300 duration-300 text-xs">
          skills
        </a>
        <a
          href="#projects"
          className="hover:text-orange-300 duration-300 text-xs">
          projects
        </a>
        <a
          href="#services"
          className="hover:text-orange-300 duration-300 text-xs">
          services
        </a>
      </div>
    </>
  );
}

export default Header;
