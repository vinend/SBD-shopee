import React from 'react';
import { ChevronDown } from 'lucide-react'; 
import ShopeeLogo from './assets/Shopee.svg';

const ShopeeNavbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-3 shadow-sm bg-white">
      {/* Increased logo size with width auto to maintain aspect ratio */}
      <div className="flex items-center space-x-2">
        <img src={ShopeeLogo} alt="Shopee Logo" className="h-10 w-auto" />  
      </div>

      {/* Menu */}
      <ul className="flex items-center space-x-6 text-[#EE4D2D] font-medium text-sm">
        <li className="hover:underline cursor-pointer">Home</li>
        <li className="hover:underline cursor-pointer">Why us?</li>
        <li className="hover:underline cursor-pointer">Our Team</li>
        <li className="hover:underline cursor-pointer">Gallery</li>
        <li className="hover:underline cursor-pointer">Contact Us</li>
      </ul>
    </nav>
  );
};

export default ShopeeNavbar;