import React, { useEffect, useRef, useState } from 'react';
import ShopeeNavbar from './ShopeeNavbar';
import Footer from './Footer';
import Clouds from './assets/Clouds.svg';
import Lines1 from './assets/Lines1.svg';
import Lines2 from './assets/Lines2.svg';
import TeamBg from './assets/shopee.png';
import ReadMoreButton from './assets/ReadMoreButton.svg';

const MainPage = ({ animationStarted }) => {
  // Animations start after landing page animation begins, with longer delays
  const animationDelay = animationStarted ? '2.5s' : '999s';
  const textAnimationDelay = animationStarted ? '3s' : '999s';
  const descriptionAnimationDelay = animationStarted ? '3.5s' : '999s';
  
  // Refs for scroll animation sections
  const kenapaSection = useRef(null);
  const teamSection = useRef(null);
  const [isKenapaVisible, setIsKenapaVisible] = useState(false);
  const [isTeamVisible, setIsTeamVisible] = useState(false);
  const [showTeamDetails, setShowTeamDetails] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const teamDetailsRef = useRef(null);
  
  // Get height of expanded content when it changes
  useEffect(() => {
    if (teamDetailsRef.current) {
      setContentHeight(teamDetailsRef.current.scrollHeight);
    }
  }, [showTeamDetails]);
  
  // Set up intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.target === kenapaSection.current) {
          setIsKenapaVisible(entry.isIntersecting);
        } else if (entry.target === teamSection.current) {
          setIsTeamVisible(entry.isIntersecting);
        }
      });
    }, { threshold: 0.2 }); // Trigger when 20% of the element is visible
    
    if (kenapaSection.current) {
      observer.observe(kenapaSection.current);
    }
    
    if (teamSection.current) {
      observer.observe(teamSection.current);
    }
    
    return () => {
      if (kenapaSection.current) {
        observer.unobserve(kenapaSection.current);
      }
      if (teamSection.current) {
        observer.unobserve(teamSection.current);
      }
    };
  }, []);
  
  return (
    <div className="relative min-h-screen bg-[#EE4D2D] text-white overflow-hidden">
      {/* Add subtle background effect if desired */}
      <div className="fixed inset-0 z-2 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[#EE4D2D]/30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#EE4D2D]/20"></div>
      </div>
      
      {/* Navbar Shopee */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <ShopeeNavbar />
      </div>
      
      {/* Background Lines - Lowest z-index, moved down */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <img
          src={Lines1}
          alt="Background Lines"
          className="absolute top-40 left-0 w-full h-auto min-h-screen object-cover opacity-30"
        />
        <img
          src={Lines2}
          alt="Additional Background Lines"
          className="absolute bottom-0 right-0 w-3/4 h-auto opacity-20 rotate-180"
        />
      </div>
      
      {/* Decorative Clouds - Middle z-index */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Cloud hiasan kiri atas - float in from left */}
        <img
          src={Clouds}
          alt="Cloud Decoration"
          className="absolute top-10 left-10 w-52 md:w-64 lg:w-80 opacity-0 animate-float-in-left"
          style={{ animationDelay, animationFillMode: 'forwards' }}
        />
        {/* Cloud hiasan kanan bawah - float in from right */}
        <img
          src={Clouds}
          alt="Cloud Decoration"
          className="absolute bottom-0 right-0 w-64 md:w-80 lg:w-96 opacity-0 animate-float-in-right"
          style={{ animationDelay: animationStarted ? '3s' : '999s', animationFillMode: 'forwards' }}
        />
        {/* Cloud hiasan kiri bawah - float in from left */}
        <img
          src={Clouds}
          alt="Cloud Decoration"
          className="absolute bottom-20 left-10 w-48 md:w-56 lg:w-72 opacity-0 animate-float-in-left animate-float"
          style={{ animationDelay: animationStarted ? '3.5s' : '999s', animationFillMode: 'forwards' }}
        />
        {/* Cloud hiasan kanan atas - float in from right */}
        <img
          src={Clouds}
          alt="Cloud Decoration"
          className="absolute top-40 right-20 w-40 md:w-52 lg:w-64 opacity-0 animate-float-in-right animate-float"
          style={{ animationDelay: animationStarted ? '4s' : '999s', animationFillMode: 'forwards' }}
        />
      </div>

      {/* Content container - Highest z-index, shifted slightly right from center - HOME SECTION */}
      <div id="home-section" className="relative z-20 pt-24 px-6 flex flex-col justify-center items-center min-h-screen max-w-7xl mx-auto">
        <div className="mt-10 text-center md:pr-0 md:pl-12 lg:pl-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight opacity-0 animate-drop-in text-justify"
              style={{ animationDelay: textAnimationDelay, animationFillMode: 'forwards' }}>
            BELANJA BINGUNG?<br />
            DI <span className="text-[#F48F7B] font-semibold">Shopee</span> AJA
          </h1>

          <p className="text-white text-base sm:text-lg md:text-xl max-w-3xl mx-auto mt-6 leading-relaxed opacity-0 animate-drop-in text-justify"
             style={{ animationDelay: descriptionAnimationDelay, animationFillMode: 'forwards' }}>
            Shopee adalah platform e-commerce terkemuka di Asia Tenggara dan Taiwan yang menawarkan pengalaman belanja online lengkap dengan berbagai fitur seperti ShopeePay, SPayLater, gratis ongkir, dan Shopee Mall untuk produk resmi, serta menghadirkan promo menarik, flash sale, dan kemudahan transaksi digital bagi jutaan pengguna di berbagai negara.
          </p>
        </div>
      </div>
      
      {/* Additional decorative elements */}
      <div className="absolute bottom-10 right-10 z-5 w-24 h-24 bg-[#F48F7B] rounded-full opacity-0 animate-float-in-right"
           style={{ animationDelay: animationStarted ? '4.2s' : '999s', animationFillMode: 'forwards' }}>
      </div>
      <div className="absolute top-32 left-32 z-5 w-16 h-16 bg-[#F48F7B] rounded-full opacity-0 animate-float-in-left"
           style={{ animationDelay: animationStarted ? '4.5s' : '999s', animationFillMode: 'forwards' }}>
      </div>
      
      {/* KENAPA? Section with scroll animations - WHY US SECTION */}
      <div 
        id="kenapa-section"
        ref={kenapaSection}
        className="relative min-h-screen py-24 px-6 md:px-12 lg:px-24 bg-[#EE4D2D] overflow-hidden z-10"
      >
        {/* Background decoration specific to this section */}
        <div className="absolute inset-0 z-1 pointer-events-none">
          <img
            src={Lines2}
            alt="Background Lines"
            className="absolute top-0 left-0 w-full h-auto opacity-30 -rotate-6"
          />
        </div>
        
        {/* Decorative clouds specific to this section */}
        <div className="absolute inset-0 z-5 pointer-events-none">
          <img
            src={Clouds}
            alt="Cloud Decoration"
            className={`absolute top-1/4 -left-40 w-80 md:w-96 lg:w-[30rem] opacity-70 transition-all duration-1000 ${
              isKenapaVisible ? 'translate-x-40' : '-translate-x-full'
            }`}
          />
          <img
            src={Clouds}
            alt="Cloud Decoration"
            className={`absolute bottom-1/4 -right-40 w-80 md:w-96 lg:w-[30rem] opacity-70 transition-all duration-1000 ${
              isKenapaVisible ? 'translate-x-[-40px]' : 'translate-x-full'
            }`}
          />
        </div>
        
        {/* Content for KENAPA? section */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
          <h2 
            className={`text-6xl md:text-7xl lg:text-8xl font-extrabold text-[#F48F7B] mb-12 transition-all duration-700 transform ${
              isKenapaVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
            }`}
          >
            KENAPA?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full">
            {/* RELIABLE Feature */}
            <div 
              className={`bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 transition-all duration-700 transform ${
                isKenapaVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-4">RELIABLE</h3>
              <p className="text-white/90 text-justify">
                Shopee menyediakan platform yang handal dengan uptime tinggi dan pengalaman pengguna yang stabil, menjadikannya pilihan tepercaya untuk belanja online di segala waktu.
              </p>
            </div>
            
            {/* EFISIEN Feature */}
            <div 
              className={`bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 transition-all duration-700 transform ${
                isKenapaVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-4">EFISIEN</h3>
              <p className="text-white/90 text-justify">
                Pengguna dapat dengan cepat menemukan, membandingkan, dan membeli produk yang mereka inginkan melalui fitur pencarian yang canggih dan navigasi yang intuitif.
              </p>
            </div>
            
            {/* LANGSUNG GAS Feature */}
            <div 
              className={`bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 transition-all duration-700 transform ${
                isKenapaVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-4">LANGSUNG GAS</h3>
              <p className="text-white/90 text-justify">
                Proses checkout yang cepat, beragam metode pembayaran, dan opsi pengiriman yang fleksibel memungkinkan pembeli untuk segera mendapatkan produk yang mereka inginkan.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* OUR TEAM Section with scroll animations - TEAM SECTION */}
      <div 
        id="team-section"
        ref={teamSection}
        className="relative min-h-screen py-24 px-6 md:px-12 lg:px-24 bg-[#EE4D2D] overflow-hidden z-10"
      >
        {/* Team background image with overlay */}
        <div className="absolute inset-0 z-1 pointer-events-none">
          <div className="absolute inset-0 bg-black/40"></div>
          <img
            src={TeamBg}
            alt="Team Background"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
        </div>
        
        {/* Content for OUR TEAM section */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
          <h2 
            className={`text-6xl md:text-7xl lg:text-8xl font-extrabold text-[#F48F7B] mb-12 transition-all duration-700 transform ${
              isTeamVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
            }`}
            style={{ textShadow: '0 4px 8px rgba(0,0,0,0.3)' }}
          >
            OUR TEAM
          </h2>
          
          <div 
            className={`bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20 max-w-4xl w-full transition-all duration-700 transform ${
              isTeamVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="text-white mb-6">
              <p className="text-justify text-lg mb-4">
                Tim Shopee terdiri dari individu-individu berbakat dari berbagai latar belakang yang bersatu dengan misi untuk merevolusi pengalaman belanja online di Asia Tenggara dan Taiwan.
              </p>
              
              {/* Improved animation container with smooth height transition */}
              <div 
                className="overflow-hidden transition-all duration-700 ease-in-out"
                style={{ 
                  maxHeight: showTeamDetails ? `${contentHeight}px` : '0px',
                  opacity: showTeamDetails ? 1 : 0,
                }}
              >
                <div ref={teamDetailsRef} className="mt-6 text-justify">
                  <p className="mb-4">
                    Dipimpin oleh manajemen berpengalaman dengan wawasan mendalam tentang pasar lokal, tim kami menggabungkan keahlian teknologi dengan pemahaman tentang perilaku konsumen regional untuk menghadirkan platform yang intuitif, aman, dan menyenangkan.
                  </p>
                  <p className="mb-4">
                    Tim pengembangan kami terus berinovasi untuk meningkatkan pengalaman pengguna, sementara tim pemasaran kami menciptakan kampanye yang menarik dan melibatkan konsumen. Dukungan pelanggan kami memastikan bahwa semua pengguna mendapatkan bantuan yang mereka butuhkan.
                  </p>
                  <p>
                    Dengan semangat untuk memberikan yang terbaik dan budaya pembelajaran berkelanjutan, tim Shopee berkomitmen untuk menciptakan ekosistem e-commerce yang memperkaya kehidupan jutaan orang setiap hari.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Read More Button with smoother rotation */}
            <div className="flex justify-center mt-4">
              <button 
                onClick={() => setShowTeamDetails(!showTeamDetails)}
                className="bg-transparent border-none focus:outline-none hover:opacity-80 transition-opacity duration-300 relative group"
              >
                <img 
                  src={ReadMoreButton} 
                  alt="Read More"
                  className="w-40 transition-transform duration-700 ease-in-out"
                />
                <span className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Placeholder for Gallery section */}
      <div id="gallery-section" className="relative min-h-screen py-24 px-6 md:px-12 lg:px-24 bg-[#EE4D2D] overflow-hidden z-10">
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-[#F48F7B] mb-12">
            GALLERY
          </h2>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20 max-w-4xl w-full">
            <p className="text-white text-justify text-lg">
              Gallery section will display Shopee's products and promotional images here. This section is currently under development.
            </p>
          </div>
        </div>
      </div>

      {/* Placeholder for Contact Us section */}
      <div id="contact-section" className="relative min-h-screen py-24 px-6 md:px-12 lg:px-24 bg-[#EE4D2D] overflow-hidden z-10">
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-[#F48F7B] mb-12">
            CONTACT US
          </h2>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20 max-w-4xl w-full">
            <p className="text-white text-justify text-lg mb-6">
              Have questions or feedback about Shopee? We'd love to hear from you! Reach out to us through any of the methods below.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                <ul className="space-y-2 text-white">
                  <li>Email: support@shopee.co.id</li>
                  <li>Phone: +62 21 5080 7888</li>
                  <li>Hours: Monday-Friday, 9am-6pm</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Visit Us</h3>
                <p className="text-white text-justify">
                  Shopee Tower, Capital Place Level 39<br />
                  Jalan Jenderal Gatot Subroto Kav. 18<br />
                  Jakarta 12710, Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with z-index to ensure it's above everything */}
      <div className="relative z-[100]">
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;