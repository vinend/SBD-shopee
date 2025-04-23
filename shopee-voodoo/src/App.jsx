import { useState, useEffect } from 'react';
import './App.css';
import LandingPage from './LandingPage';
import MainPage from './MainPage';

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mainPageOpacity, setMainPageOpacity] = useState(0); // Add opacity state for MainPage
  
  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile(); // Initial check
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  const handleDiveIn = () => {
    setIsAnimating(true);
    
    // Start fading in the main page before landing page is completely gone
    setTimeout(() => {
      setMainPageOpacity(1);
    }, isMobile ? 800 : 1500);
    
    // Shortened animation time for mobile
    setTimeout(() => {
      setShowLanding(false);
    }, isMobile ? 1500 : 2500); // Shorter timing for mobile devices
  };
  
  return (
    <>
      {/* Always render MainPage, but hidden when showing landing */}
      <div 
        className={showLanding ? "fixed inset-0 z-0" : ""}
        style={{ 
          opacity: showLanding ? mainPageOpacity : 1,
          transition: "opacity 0.8s ease-in-out" 
        }}
      >
        <MainPage animationStarted={isAnimating} />
      </div>
      
      {/* Conditionally render the landing page on top */}
      {showLanding && (
        <div className="fixed inset-0 z-10">
          <LandingPage onDiveIn={handleDiveIn} isAnimating={isAnimating} />
        </div>
      )}
    </>
  );
}

export default App;