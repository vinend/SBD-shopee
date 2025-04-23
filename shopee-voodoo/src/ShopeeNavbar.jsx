import React from 'react';
import ShopeeLogo from './assets/Shopee.svg';

const ShopeeNavbar = () => {
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
    }
  };

  return (
    <nav className="w-full flex items-center justify-between px-6 py-3 shadow-sm bg-white">
      {/* Logo with scroll to top functionality */}
      <div className="flex items-center space-x-2">
        <img 
          src={ShopeeLogo} 
          alt="Shopee Logo" 
          className="h-10 w-auto cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />  
      </div>

      {/* Menu */}
      <ul className="flex items-center space-x-6 text-[#EE4D2D] font-medium text-sm">
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
        <li className="hover:underline cursor-pointer" onClick={() => scrollToSection('contact-section')}>
          Contact Us
        </li>
      </ul>
    </nav>
  );
};

export default ShopeeNavbar;