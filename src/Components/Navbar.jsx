import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Hide navbar when scrolling down
        setShowNavbar(false);
      } else {
        // Show navbar when scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed py-3 w-full bg-black text-white  transition-transform duration-300 z-50 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      } ${isScrolled ? 'backdrop-blur-sm bg-opacity-70 transition-all duration-300' : ''}`}
    >
      <div className="max-w-full h-20 mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center">
        <div className='w-[35vw] md:w-[25vw] lg:w-[15vw]'>
          <Link to="/">
            <img src="/Logo.png" alt="Logo" width={100} height={100} className='w-full object-cover' />
          </Link>
        </div>
        {/* Hamburger menu button */}
        <button
          className="text-white sm:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
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
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            ></path>
          </svg>
        </button>
        {/* Desktop navigation */}
        <ul className="hidden sm:flex space-x-6">
          <li>
            <Link to="/" className="categories-subtext hover:underline text-lg">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="categories-subtext hover:underline text-lg">
              Products
            </Link>
          </li>
          <li>
            <Link to="/contact" className="categories-subtext hover:underline text-lg">
              Contact
            </Link>
          </li>
          <li>
          <a href="/files/PL_Brothers_Exporters_LLP.pdf" download="PL_Brothers_Exporters_LLP.pdf" className='categories-subtext text-[4.5vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.2vw] xl:text-[1.2vw]  hover:underline '>Brochure</a>
          </li>
        </ul>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <ul className="sm:hidden px-4 py-2 space-y-2 shadow-lg bg-opacity-20 backdrop-blur-sm">
          <li>
            <Link to="/" className="block hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="block hover:underline">
              Products
            </Link>
          </li>
          <li>
            <a href="/files/PL_Brothers_Exporters_LLP.pdf" download="PL_Brothers_Exporters_LLP.pdf" className='block hover:underline'>Brochure</a>
          </li>
          <li>
            <Link to="/contact" className="block hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
