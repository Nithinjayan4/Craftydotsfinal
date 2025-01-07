import React from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav
      data-name="navbar"
      className="fixed w-full z-50 bg-black bg-opacity-90 py-4"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div data-name="logo" className="text-2xl font-bold">
            <span className="logo-text-white">Crafty</span>
            <span className="logo-text-red">Dots</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#home" data-name="nav-home" className="nav-link">
              Home
            </a>
            <a href="#about" data-name="nav-about" className="nav-link">
              About
            </a>
            <a href="#services" data-name="nav-services" className="nav-link">
              Services
            </a>
            <a href="#contact" data-name="nav-contact" className="nav-link">
              Contact
            </a>
          </div>

          <button
            data-name="mobile-menu-button"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div data-name="mobile-menu" className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="nav-link">
                Home
              </a>
              <a href="#about" className="nav-link">
                About
              </a>
              <a href="#services" className="nav-link">
                Services
              </a>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
