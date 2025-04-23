import React, { useEffect, useState } from 'react';
import ShopeeLogo from './assets/LOGO-LANDING.svg';
import ButtonIcon from './assets/Button.svg';

const LandingPage = ({ onDiveIn, isAnimating }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile(); // Initial check
    window.addEventListener('resize', checkMobile);
    
    // Prevent scrolling on landing page
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    
    // Add smooth fade-in animation for all elements when component is mounted
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-screen h-screen overflow-hidden font-poppins relative">
      {/* Mobile-only full logo for smaller screens - with fade-in animation */}
      {isMobile && !isAnimating && (
        <div 
          className={`absolute top-8 left-1/2 transform -translate-x-1/2 z-20 transition-opacity duration-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={ShopeeLogo}
            alt="Shopee Logo"
            className="w-32 h-auto"
          />
        </div>
      )}
      
      {/* Background for full-screen orange on mobile */}
      <div className="absolute inset-0 bg-[#EE4D2D] md:hidden"></div>
      
      {/* Left: Background orange and text - full width on mobile */}
      <div 
        className={`flex flex-col justify-center items-center bg-[#EE4D2D] w-full md:w-1/2 h-full text-white text-center px-6 transition-all duration-700 ease-in-out z-10 ${
          isAnimating ? (isMobile ? 'opacity-0 animate-expand-mobile' : 'animate-expand absolute left-0 top-0') : 'relative'
        }`}
      >
        <div className={`transition-all duration-800 ${isAnimating ? 'opacity-0 translate-y-8' : `opacity-${isLoaded ? '100' : '0'} translate-y-${isLoaded ? '0' : '8'}`}`}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-extrabold mb-2 md:mb-4 transition-all duration-700" style={{ transitionDelay: '100ms' }}>
            WELCOME
          </h1>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-extrabold transition-all duration-700" style={{ transitionDelay: '300ms' }}>
            SHOPPERS
          </h1>
        </div>

        <button
          className={`bg-transparent cursor-pointer focus:outline-none hover:outline-none mt-8 transition-all duration-800 ${
            isAnimating ? 'opacity-0 translate-y-8' : `opacity-${isLoaded ? '100' : '0'} translate-y-${isLoaded ? '0' : '8'}`
          }`}
          style={{ lineHeight: 0, transitionDelay: '500ms' }}
          onClick={onDiveIn}
          disabled={isAnimating}
        >
          <img
            src={ButtonIcon}
            alt="Head In Button"
            className="w-32 h-auto md:w-48 lg:w-64 object-contain hover:filter hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-300"
          />
        </button>
      </div>

      {/* Right: Logo Shopee - hidden on mobile */}
      <div className={`hidden md:flex flex-col justify-center items-center bg-white w-1/2 h-full transition-all duration-800 ${
        isAnimating ? 'opacity-0' : `opacity-${isLoaded ? '100' : '0'}`
      }`}>
        <img
          src={ShopeeLogo}
          alt="Shopee Logo"
          className={`w-48 md:w-64 lg:w-80 mb-4 transition-all duration-700 ${
            isLoaded ? 'translate-y-0' : 'translate-y-8'
          }`}
          style={{ transitionDelay: '300ms' }}
        />
      </div>
    </div>
  );
};

export default LandingPage;