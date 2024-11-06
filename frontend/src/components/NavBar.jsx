import React, { useState, useEffect } from 'react';
import SearchBar from './Search';
import Dropdown from './DropDown';
import '../index.css';

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed z-10 w-full top-0 transition-colors duration-300 ${isScrolled ? 'bg-black' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="flex items-center justify-between w-full h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img
                src="../../images/logo.png"
                alt="Project Logo"
                className="h-12 w-auto"
              />
            </a>
          </div>

          <SearchBar />

          {/* Centered Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8 mx-auto">
            <a href="#colab" className="text-transparent bg-clip-text bg-gradient-to-r from-golden to-darkerGold hover:bg-opacity-20 px-3 py-2 rounded-md text-md font-semibold">
              Colab
            </a>
            <Dropdown />
            <a href="#course-details" className="text-transparent bg-clip-text bg-gradient-to-r from-golden to-darkerGold hover:bg-opacity-20 px-3 py-2 rounded-md text-md font-semibold">
              Course Details
            </a>
            <a href="/register" className="text-transparent bg-clip-text bg-gradient-to-r from-golden to-darkerGold hover:bg-opacity-20 px-3 py-2 rounded-md text-md font-semibold">
              Register
            </a>
            <a href="/faqs" className="text-transparent bg-clip-text bg-gradient-to-r from-golden to-darkerGold hover:bg-opacity-20 px-3 py-2 rounded-md text-md font-semibold">
              FAQ
            </a>
          </div>

          {/* Right-Aligned Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="bg-gold p-2 rounded-md text-gray-400 hover:text-white hover:bg-darkerGold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gold focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg className={`${!isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close Icon */}
              <svg className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-transparent" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            <a href="#colab" className="block px-3 py-2 rounded-md text-md font-semibold text-transparent bg-clip-text bg-gradient-to-r from-golden to-darkerGold hover:bg-opacity-20">
              Colab
            </a>
            <a href="#process" className="block px-3 py-2 rounded-md text-md font-semibold text-transparent bg-clip-text bg-gradient-to-r from-golden to-darkerGold hover:bg-opacity-20">
              Process
            </a>
            <a href="#course-details" className="block px-3 py-2 rounded-md text-md font-semibold text-transparent bg-clip-text bg-gradient-to-r from-golden to-darkerGold hover:bg-opacity-20">
              Course Details
            </a>
            <a href="/register" className="block px-3 py-2 rounded-md text-md font-semibold text-transparent bg-clip-text bg-gradient-to-r from-golden to-darkerGold hover:bg-opacity-20">
              Register
            </a>
            <a href="#faq" className="block px-3 py-2 rounded-md text-md font-semibold text-transparent bg-clip-text bg-gradient-to-r from-golden to-darkerGold hover:bg-opacity-20">
              FAQ
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
