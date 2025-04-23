import React, { useState, useEffect } from 'react';
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
} from 'react-icons/fa';
import ShopeeLogo from './assets/Shopee.svg';

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile(); // Initial check
    window.addEventListener('resize', checkMobile);
    
    // Function to handle scroll event
    const handleScroll = () => {
      // Get total height of page and window
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      
      // Show footer ONLY when user is near bottom of page (within 300px)
      if (scrollTop + clientHeight >= scrollHeight - 300) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initialize scroll check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <footer 
      className={`bg-white text-[#EE4D2D] px-4 md:px-16 py-4 md:py-6 w-full border-t-2 border-[#F48F7B] transition-all duration-700 ease-in-out transform relative z-[100] ${
        showFooter ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="flex flex-col md:flex-row justify-between items-center md:items-center gap-4 md:gap-6 max-w-screen-2xl mx-auto">
        {/* Left: Logo + Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src={ShopeeLogo}
            alt="Shopee Logo"
            className="h-10 md:h-12 mb-2" 
          />
          <p className="text-xs md:text-sm text-[#EE4D2D] font-semibold text-center md:text-left">
            © 2024 Shopee. All Rights Reserved
          </p>
        </div>

        {/* Right: Address + Social Media */}
        <div className="flex flex-col items-center md:items-end text-xs md:text-sm text-[#EE4D2D] space-y-2 md:space-y-3">
          <div className="flex items-center md:items-start gap-2">
            <p className="max-w-xs text-center md:text-right">
              Shopee Tower, Capital Place Level 39, Jalan Jenderal Gatot Subroto Kav. 18, Jakarta 12710, Indonesia
            </p>
          </div>
          <div className="flex space-x-4 text-lg md:text-xl mt-1 md:mt-2">
            <a href="https://www.instagram.com/shopee_id/" target="_blank" rel="noopener noreferrer" className="text-[#EE4D2D] hover:text-[#F48F7B] transition-colors">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/shopee/" target="_blank" rel="noopener noreferrer" className="text-[#EE4D2D] hover:text-[#F48F7B] transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://www.youtube.com/channel/UCXlRqz8z1Zt-G6tzh7lS_9g" target="_blank" rel="noopener noreferrer" className="text-[#EE4D2D] hover:text-[#F48F7B] transition-colors">
              <FaYoutube />
            </a>
            <a href="https://www.facebook.com/ShopeeID/" target="_blank" rel="noopener noreferrer" className="text-[#EE4D2D] hover:text-[#F48F7B] transition-colors">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;