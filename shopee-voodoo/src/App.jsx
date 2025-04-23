import { useState } from 'react';
import './App.css';
import LandingPage from './LandingPage';
import MainPage from './MainPage';

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleDiveIn = () => {
    setIsAnimating(true);
    // Increased timeout to match longer animation duration
    setTimeout(() => {
      setShowLanding(false);
    }, 2500); // Keep at 2500ms to match the orange expand animation
  };
  
  return (
    <>
      {/* Always render MainPage, but hidden when showing landing */}
      <div className={showLanding ? "fixed inset-0 z-0" : ""}>
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