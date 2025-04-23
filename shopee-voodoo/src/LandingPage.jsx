import React, { useEffect } from 'react';
import ShopeeLogo from './assets/LOGO-LANDING.svg';
import ButtonIcon from './assets/Button.svg';

const LandingPage = ({ onDiveIn, isAnimating }) => {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <div className="flex w-screen h-screen overflow-hidden font-poppins relative">
      {/* Kiri: Background oranye dan teks */}
      <div 
        className={`flex flex-col justify-center items-center bg-[#EE4D2D] w-1/2 h-full text-white text-center px-6 transition-all duration-300 ease-in-out z-10 ${
          isAnimating ? 'animate-expand absolute left-0 top-0' : 'relative'
        }`}
      >
        <div className={`transition-opacity duration-800 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold mb-4" style={{ fontSize: '96px' }}>
            WELCOME
          </h1>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold" style={{ fontSize: '96px' }}>
            SHOPPERS
          </h1>
        </div>

        <button
          className={`bg-transparent cursor-pointer focus:outline-none hover:outline-none mt-8 transition-opacity duration-800 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
          style={{ lineHeight: 0 }}
          onClick={onDiveIn}
          disabled={isAnimating}
        >
          <img
            src={ButtonIcon}
            alt="Head In Button"
            className="w-40 h-auto md:w-56 lg:w-64 object-contain hover:filter hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-300"
          />
        </button>
      </div>

      {/* Kanan: Logo Shopee */}
      <div className={`flex flex-col justify-center items-center bg-white w-1/2 h-full transition-opacity duration-800 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
        <img
          src={ShopeeLogo}
          alt="Shopee Logo"
          className="w-48 md:w-64 lg:w-80 mb-4"
        />
      </div>
    </div>
  );
};

export default LandingPage;