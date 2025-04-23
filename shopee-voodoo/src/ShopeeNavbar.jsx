import React, { useState, useEffect } from 'react';
import ShopeeLogo from './assets/Shopee.svg';
import { FaBars, FaTimes, FaHome, FaQuestionCircle, FaUsers, FaStore, FaEnvelope } from 'react-icons/fa';

const ShopeeNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Smooth scroll to element with offset for the navbar height
      const navbarHeight = 70; // Approximate navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Close the mobile menu after clicking
      setIsMenuOpen(false);
    }
  };

  // Function to scroll to bottom of the page (for Contact Us)
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
    
    // Close the mobile menu after clicking
    setIsMenuOpen(false);
  };

  // Update the navbar background logic for better mobile visibility
  const navbarClass = isMenuOpen 
    ? 'bg-white shadow-md' 
    : (scrolled ? 'bg-white shadow-md' : 'bg-white'); // Removed transparency

  return (
    <nav className={`w-full flex items-center justify-between px-4 sm:px-6 py-3 ${navbarClass} transition-all duration-300 z-50`}>
      {/* Logo with scroll to top functionality */}
      <div className="flex items-center space-x-2">
        <img 
          src={ShopeeLogo} 
          alt="Shopee Logo" 
          className="h-8 sm:h-10 w-auto cursor-pointer" 
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsMenuOpen(false);
          }}
        />  
      </div>

      {/* Mobile menu toggle button - always visible against any background */}
      <button 
        className={`md:hidden z-50 text-[#EE4D2D] ${isMenuOpen ? 'fixed right-4 top-3' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <FaTimes className="text-2xl" />
        ) : (
          <FaBars className="text-2xl" />
        )}
      </button>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-6 text-[#EE4D2D] font-medium text-sm">
        <li className="hover:underline cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Home
        </li>
        <li className="hover:underline cursor-pointer" onClick={() => scrollToSection('kenapa-section')}>
          Why us?
        </li>
        <li className="hover:underline cursor-pointer" onClick={() => scrollToSection('team-section')}>
          Our Team
        </li>
        <li className="hover:underline cursor-pointer" onClick={() => scrollToSection('gallery-section')}>
          Gallery
        </li>
        <li className="hover:underline cursor-pointer" onClick={scrollToBottom}>
          Contact Us
        </li>
      </ul>

      {/* Mobile Menu - Slide in from RIGHT side with improved icon styling */}
      <div 
        className={`fixed top-0 right-0 h-full w-[75%] max-w-[300px] bg-[#EE4D2D] z-40 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-6">
          <ul className="flex flex-col space-y-8">
            <li className="flex items-center space-x-4 cursor-pointer" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="bg-white p-2 rounded-full flex items-center justify-center">
                <FaHome className="text-[#EE4D2D] text-xl" />
              </div>
              <span className="text-white text-lg font-medium">Home</span>
            </li>
            <li className="flex items-center space-x-4 cursor-pointer" 
                onClick={() => scrollToSection('kenapa-section')}>
              <div className="bg-white p-2 rounded-full flex items-center justify-center">
                <FaQuestionCircle className="text-[#EE4D2D] text-xl" />
              </div>
              <span className="text-white text-lg font-medium">Why us?</span>
            </li>
            <li className="flex items-center space-x-4 cursor-pointer" 
                onClick={() => scrollToSection('team-section')}>
              <div className="bg-white p-2 rounded-full flex items-center justify-center">
                <FaUsers className="text-[#EE4D2D] text-xl" />
              </div>
              <span className="text-white text-lg font-medium">Our Team</span>
            </li>
            <li className="flex items-center space-x-4 cursor-pointer" 
                onClick={() => scrollToSection('gallery-section')}>
              <div className="bg-white p-2 rounded-full flex items-center justify-center">
                <FaStore className="text-[#EE4D2D] text-xl" />
              </div>
              <span className="text-white text-lg font-medium">Gallery</span>
            </li>
            <li className="flex items-center space-x-4 cursor-pointer" 
                onClick={scrollToBottom}>
              <div className="bg-white p-2 rounded-full flex items-center justify-center">
                <FaEnvelope className="text-[#EE4D2D] text-xl" />
              </div>
              <span className="text-white text-lg font-medium">Contact Us</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Overlay when menu is open */}
      <div 
        className={`fixed inset-0 bg-white/70 z-30 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>
    </nav>
  );
};

export default ShopeeNavbar;