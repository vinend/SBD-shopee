import React, { useEffect, useRef, useState } from 'react';
import ShopeeNavbar from './ShopeeNavbar';
import Footer from './Footer';
import Clouds from './assets/Clouds.svg';
import Lines1 from './assets/Lines1.svg';
import Lines2 from './assets/Lines2.svg';
import TeamBg from './assets/shopee.png';
import ReadMoreButton from './assets/ReadMoreButton.svg';
import { 
  FaLaptop, 
  FaTshirt, 
  FaMobile, 
  FaHeadphones, 
  FaHome, 
  FaBabyCarriage, 
  FaUtensils, 
  FaRunning, 
  FaChevronLeft, 
  FaChevronRight 
} from 'react-icons/fa';

const MainPage = ({ animationStarted }) => {
  // State for device detection
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile on component mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile(); // Initial check
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  // Refs for scroll animation sections
  const homeSection = useRef(null);
  const kenapaSection = useRef(null);
  const teamSection = useRef(null);
  const productsSection = useRef(null);
  const [isHomeVisible, setIsHomeVisible] = useState(false);
  const [isKenapaVisible, setIsKenapaVisible] = useState(false);
  const [isTeamVisible, setIsTeamVisible] = useState(false);
  const [isProductsVisible, setIsProductsVisible] = useState(false);
  const [showTeamDetails, setShowTeamDetails] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const teamDetailsRef = useRef(null);
  
  // Products category state
  const [currentCategory, setCurrentCategory] = useState(0);
  const categories = [
    { 
      name: "Elektronik", 
      icon: <FaLaptop className="text-4xl mb-3" />,
      description: isMobile ? "Temukan produk elektronik dari brand ternama." : "Temukan berbagai produk elektronik seperti laptop, komputer, dan aksesori dari brand ternama.",
      link: "https://shopee.co.id/Komputer-Aksesoris-cat.11044364",
      color: "from-blue-500/20 to-blue-700/20"
    },
    { 
      name: "Fashion", 
      icon: <FaTshirt className="text-4xl mb-3" />,
      description: isMobile ? "Koleksi fashion terkini untuk pria dan wanita." : "Jelajahi koleksi fashion terkini untuk pria, wanita, dan anak-anak dari berbagai brand lokal.",
      link: "https://shopee.co.id/Pakaian-Pria-cat.11012031",
      color: "from-purple-500/20 to-pink-700/20"
    },
    { 
      name: "Gadget", 
      icon: <FaMobile className="text-4xl mb-3" />,
      description: isMobile ? "Smartphone dan gadget terbaru dengan garansi resmi." : "Dapatkan smartphone, tablet, dan gadget terbaru dengan penawaran spesial dan garansi resmi.",
      link: "https://shopee.co.id/Handphone-Tablet-cat.11012007",
      color: "from-orange-500/20 to-red-700/20"
    },
    { 
      name: "Audio", 
      icon: <FaHeadphones className="text-4xl mb-3" />,
      description: isMobile ? "Headphone dan speaker berkualitas tinggi." : "Rasakan pengalaman audio terbaik dengan headphone dan speaker berkualitas tinggi.",
      link: "https://shopee.co.id/Audio-cat.11043497",
      color: "from-green-500/20 to-teal-700/20"
    },
    { 
      name: "Home Living", 
      icon: <FaHome className="text-4xl mb-3" />,
      description: isMobile ? "Furnitur & dekorasi untuk rumah stylish." : "Percantik rumah Anda dengan berbagai pilihan furnitur dan dekorasi yang stylish.",
      link: "https://shopee.co.id/Perlengkapan-Rumah-cat.11011001",
      color: "from-yellow-500/20 to-amber-700/20"
    },
    { 
      name: "Baby & Kids", 
      icon: <FaBabyCarriage className="text-4xl mb-3" />,
      description: isMobile ? "Kebutuhan lengkap si kecil kualitas terjamin." : "Temukan kebutuhan lengkap untuk si kecil dengan kualitas terjamin.",
      link: "https://shopee.co.id/Ibu-Bayi-cat.11012005",
      color: "from-pink-500/20 to-rose-700/20"
    },
    { 
      name: "Kitchen", 
      icon: <FaUtensils className="text-4xl mb-3" />,
      description: isMobile ? "Peralatan masak berkualitas untuk dapur." : "Lengkapi dapur Anda dengan berbagai peralatan masak dan perabotan dapur berkualitas.",
      link: "https://shopee.co.id/Peralatan-Dapur-cat.11027421",
      color: "from-red-500/20 to-red-800/20"
    },
    { 
      name: "Sports", 
      icon: <FaRunning className="text-4xl mb-3" />,
      description: isMobile ? "Perlengkapan olahraga untuk gaya hidup sehat." : "Dapatkan perlengkapan olahraga dan aktivitas outdoor terbaik untuk gaya hidup sehat.",
      link: "https://shopee.co.id/Sports-Outdoor-cat.11012013",
      color: "from-sky-500/20 to-blue-700/20"
    }
  ];

  const nextCategory = () => {
    setCurrentCategory((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
  };

  const prevCategory = () => {
    setCurrentCategory((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  };

  const goToCategory = (index) => {
    setCurrentCategory(index);
  };

  // Get height of expanded content when it changes
  useEffect(() => {
    if (teamDetailsRef.current) {
      setContentHeight(teamDetailsRef.current.scrollHeight);
    }
  }, [showTeamDetails]);
  
  // Delay animation start for mobile to prevent sudden appearance
  useEffect(() => {
    if (animationStarted) {
      // Small delay for mobile animation to ensure smoother transition
      const timer = setTimeout(() => {
        document.body.classList.add('animation-ready');
      }, isMobile ? 500 : 800);
      return () => clearTimeout(timer);
    }
  }, [animationStarted, isMobile]);
  
  // Set up intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.target === homeSection.current) {
          setIsHomeVisible(entry.isIntersecting);
        } else if (entry.target === kenapaSection.current) {
          setIsKenapaVisible(entry.isIntersecting);
        } else if (entry.target === teamSection.current) {
          setIsTeamVisible(entry.isIntersecting);
        } else if (entry.target === productsSection.current) {
          setIsProductsVisible(entry.isIntersecting);
        }
      });
    }, { threshold: isMobile ? 0.1 : 0.2 }); // Lower threshold for mobile for earlier animation trigger
    
    // Observe all sections
    [homeSection, kenapaSection, teamSection, productsSection].forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });
    
    return () => {
      [homeSection, kenapaSection, teamSection, productsSection].forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [isMobile]);
  
  return (
    <div className="relative min-h-screen bg-[#EE4D2D] text-white overflow-hidden">
      {/* Add subtle background effect */}
      <div className="fixed inset-0 z-2 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[#EE4D2D]/30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#EE4D2D]/20"></div>
      </div>
      
      {/* Navbar Shopee */}
      <div className="fixed top-0 left-0 right-0 z-[60]">
        <ShopeeNavbar />
      </div>
      
      {/* Background Lines */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <img
          src={Lines1}
          alt="Background Lines"
          className="absolute top-40 left-0 w-full h-auto min-h-screen object-cover opacity-30"
        />
        <img
          src={Lines2}
          alt="Additional Background Lines"
          className="absolute bottom-0 right-0 w-full sm:w-3/4 h-auto opacity-20 rotate-180"
        />
      </div>
      
      {/* Decorative Clouds - Adjusted for mobile appearance */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <img
          src={Clouds}
          alt="Cloud Decoration"
          className="absolute top-10 left-10 w-24 sm:w-52 md:w-64 opacity-0 animate-float-in-left"
          style={{ 
            animationDelay: animationStarted ? (isMobile ? '0.8s' : '2.5s') : '999s', 
            animationFillMode: 'forwards', 
            animationDuration: isMobile ? '1.2s' : '2.5s' 
          }}
        />
        <img
          src={Clouds}
          alt="Cloud Decoration"
          className="absolute bottom-0 right-0 w-32 sm:w-64 md:w-80 opacity-0 animate-float-in-right"
          style={{ 
            animationDelay: animationStarted ? (isMobile ? '1.0s' : '3s') : '999s', 
            animationFillMode: 'forwards',
            animationDuration: isMobile ? '1.2s' : '2.5s'  
          }}
        />
        <img
          src={Clouds}
          alt="Cloud Decoration"
          className="absolute bottom-20 left-10 w-24 sm:w-48 md:w-56 opacity-0 animate-float-in-left animate-float"
          style={{ 
            animationDelay: animationStarted ? (isMobile ? '1.2s' : '3.5s') : '999s', 
            animationFillMode: 'forwards',
            animationDuration: isMobile ? '1.2s' : '2.5s'  
          }}
        />
        <img
          src={Clouds}
          alt="Cloud Decoration"
          className="absolute top-40 right-20 w-20 sm:w-40 md:w-52 opacity-0 animate-float-in-right animate-float"
          style={{ 
            animationDelay: animationStarted ? (isMobile ? '1.4s' : '4s') : '999s', 
            animationFillMode: 'forwards',
            animationDuration: isMobile ? '1.2s' : '2.5s'  
          }}
        />
      </div>

      {/* HOME SECTION - Reduced height on mobile */}
      <div 
        id="home-section" 
        ref={homeSection}
        className={`relative z-20 pt-16 sm:pt-32 px-4 sm:px-6 flex flex-col justify-center items-center ${isMobile ? 'min-h-[85vh]' : 'min-h-screen'} max-w-7xl mx-auto`}
      >
        <div className={`${isMobile ? 'mt-8' : 'mt-4 sm:mt-10'} text-center sm:text-left sm:md:pr-0 sm:pl-0 md:pl-12`}>
          <h1 
            className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-center sm:text-justify transition-all duration-700 transform ${
              isHomeVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
            }`}
          >
            {isMobile ? (
              <>
                <span className="block mb-2">BELANJA BINGUNG?</span>
                <span>DI <span className="text-[#F48F7B] font-semibold text-stroke-white">Shopee</span> AJA</span>
              </>
            ) : (
              <>
                BELANJA BINGUNG?<br />
                DI <span className="text-[#F48F7B] font-semibold text-stroke-white">Shopee</span> AJA
              </>
            )}
          </h1>

          <p 
            className={`text-white text-sm sm:text-base md:text-lg max-w-3xl mx-auto mt-4 sm:mt-6 leading-relaxed text-justify transition-all duration-700 transform ${
              isHomeVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {isMobile ? 
              "Shopee adalah platform e-commerce terkemuka di Asia Tenggara dengan berbagai fitur menarik." :
              "Shopee adalah platform e-commerce terkemuka di Asia Tenggara dan Taiwan yang menawarkan pengalaman belanja online lengkap dengan berbagai fitur seperti ShopeePay, SPayLater, gratis ongkir, dan Shopee Mall untuk produk resmi, serta menghadirkan promo menarik, flash sale, dan kemudahan transaksi digital bagi jutaan pengguna di berbagai negara."
            }
          </p>
        </div>
      </div>
      
      {/* KENAPA SECTION - Reduced height on mobile */}
      <div 
        id="kenapa-section"
        ref={kenapaSection}
        className={`relative ${isMobile ? 'min-h-[85vh] py-12' : 'min-h-screen py-16 sm:py-24'} px-4 sm:px-6 md:px-12 lg:px-24 bg-[#EE4D2D] overflow-hidden z-10`}
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
            className={`absolute top-1/4 -left-40 w-48 sm:w-80 md:w-96 opacity-70 transition-all duration-1000 ${
              isKenapaVisible ? 'translate-x-16 sm:translate-x-40' : '-translate-x-full'
            }`}
          />
          <img
            src={Clouds}
            alt="Cloud Decoration"
            className={`absolute bottom-1/4 -right-40 w-48 sm:w-80 md:w-96 opacity-70 transition-all duration-1000 ${
              isKenapaVisible ? 'translate-x-[-20px] sm:translate-x-[-40px]' : 'translate-x-full'
            }`}
          />
        </div>
        
        {/* Content for KENAPA? section */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
          <h2 
            className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-[#F48F7B] mb-6 sm:mb-12 transition-all duration-700 transform text-stroke-white ${
              isKenapaVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
            }`}
          >
            KENAPA?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 md:gap-12 w-full">
            {/* RELIABLE Feature */}
            <div 
              className={`bg-white/10 backdrop-blur-sm p-4 sm:p-8 rounded-2xl shadow-xl border border-white/20 transition-all duration-700 transform ${
                isKenapaVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">RELIABLE</h3>
              <p className="text-white/90 text-justify text-sm">
                {isMobile ? 
                  "Platform handal dengan uptime tinggi dan pengalaman pengguna yang stabil." :
                  "Shopee menyediakan platform yang handal dengan uptime tinggi dan pengalaman pengguna yang stabil, menjadikannya pilihan tepercaya untuk belanja online di segala waktu."
                }
              </p>
            </div>
            
            {/* EFISIEN Feature */}
            <div 
              className={`bg-white/10 backdrop-blur-sm p-4 sm:p-8 rounded-2xl shadow-xl border border-white/20 transition-all duration-700 transform ${
                isKenapaVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">EFISIEN</h3>
              <p className="text-white/90 text-justify text-sm">
                {isMobile ? 
                  "Pencarian canggih dan navigasi intuitif untuk menemukan produk dengan cepat." :
                  "Pengguna dapat dengan cepat menemukan, membandingkan, dan membeli produk yang mereka inginkan melalui fitur pencarian yang canggih dan navigasi yang intuitif."
                }
              </p>
            </div>
            
            {/* LANGSUNG GAS Feature */}
            <div 
              className={`bg-white/10 backdrop-blur-sm p-4 sm:p-8 rounded-2xl shadow-xl border border-white/20 transition-all duration-700 transform ${
                isKenapaVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">LANGSUNG GAS</h3>
              <p className="text-white/90 text-justify text-sm">
                {isMobile ? 
                  "Checkout cepat dan beragam metode pembayaran untuk belanja instan." :
                  "Proses checkout yang cepat, beragam metode pembayaran, dan opsi pengiriman yang fleksibel memungkinkan pembeli untuk segera mendapatkan produk yang mereka inginkan."
                }
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* TEAM SECTION - Reduced height on mobile */}
      <div 
        id="team-section"
        ref={teamSection}
        className={`relative ${isMobile ? 'min-h-[85vh] py-12' : 'min-h-screen py-16 sm:py-24'} px-4 sm:px-6 md:px-12 lg:px-24 bg-[#EE4D2D] overflow-hidden z-10`}
      >
        <div className="absolute inset-0 z-1 pointer-events-none">
          <div className="absolute inset-0 bg-black/40"></div>
          <img
            src={TeamBg}
            alt="Team Background"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
          <h2 
            className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-[#F48F7B] mb-6 sm:mb-12 transition-all duration-700 transform text-stroke-white ${
              isTeamVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
            }`}
            style={{ textShadow: '0 4px 8px rgba(0,0,0,0.3)' }}
          >
            OUR TEAM
          </h2>
          
          <div 
            className={`bg-white/10 backdrop-blur-md p-4 sm:p-8 rounded-2xl shadow-xl border border-white/20 max-w-4xl w-full transition-all duration-700 transform ${
              isTeamVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="text-white mb-3 sm:mb-6">
              <p className="text-justify text-sm sm:text-base mb-2 sm:mb-3">
                {isMobile ? 
                  "Tim Shopee terdiri dari individu-individu berbakat yang bersatu untuk merevolusi pengalaman belanja online." :
                  "Tim Shopee terdiri dari individu-individu berbakat dari berbagai latar belakang yang bersatu dengan misi untuk merevolusi pengalaman belanja online di Asia Tenggara dan Taiwan."
                }
              </p>
              
              <div 
                className="overflow-hidden transition-all duration-700 ease-in-out"
                style={{ 
                  maxHeight: showTeamDetails ? `${contentHeight + 20}px` : '0px', // Added 20px extra space
                  opacity: showTeamDetails ? 1 : 0,
                  marginBottom: showTeamDetails ? '16px' : '0px' // Increased bottom margin
                }}
              >
                <div ref={teamDetailsRef} className="mt-3 sm:mt-4 text-justify">
                  <p className="mb-3 sm:mb-4 text-sm">
                    Dipimpin oleh manajemen berpengalaman dengan wawasan mendalam tentang pasar lokal, tim kami menggabungkan keahlian teknologi dengan pemahaman tentang perilaku konsumen regional.
                  </p>
                  <p className="mb-3 sm:mb-4 text-sm">
                    Tim pengembangan kami terus berinovasi untuk meningkatkan pengalaman pengguna, sementara tim pemasaran kami menciptakan kampanye yang menarik dan melibatkan konsumen.
                  </p>
                  <p className="text-sm mb-4"> {/* Increased bottom margin from mb-2 to mb-4 */}
                    Dengan semangat untuk memberikan yang terbaik, tim Shopee berkomitmen untuk menciptakan ekosistem e-commerce yang memperkaya kehidupan jutaan orang setiap hari.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-2 sm:mt-3">
              <button 
                onClick={() => setShowTeamDetails(!showTeamDetails)}
                className="bg-transparent border-none focus:outline-none hover:opacity-80 transition-opacity duration-300 relative group"
              >
                <img 
                  src={ReadMoreButton} 
                  alt="Read More"
                  className="w-24 sm:w-40 transition-transform duration-700 ease-in-out"
                  style={{ 
                    transform: showTeamDetails ? 'rotate(360deg)' : 'rotate(0deg)'
                  }}
                />
                <span className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCTS SECTION - Better optimized for mobile with reduced height */}
      <div 
        id="gallery-section" 
        ref={productsSection}
        className={`relative ${isMobile ? 'min-h-[80vh] py-8' : 'min-h-screen py-16 sm:py-24'} px-4 sm:px-6 md:px-12 lg:px-24 bg-[#EE4D2D] overflow-hidden z-10`}
      >
        <div className="absolute inset-0 z-1 pointer-events-none">
          <img
            src={Lines1}
            alt="Background Lines"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-30 rotate-12 scale-150"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
          <h2 
            className={`${isMobile ? 'text-3xl mb-2' : 'text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-4 sm:mb-12'} font-extrabold text-[#F48F7B] text-stroke-white transition-all duration-700 transform ${
              isProductsVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
            }`}
          >
            OUR PRODUCTS
          </h2>
          
          <div 
            className={`relative w-full max-w-4xl transition-all duration-700 transform ${
              isProductsVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {/* Navigation buttons - more compact for mobile */}
            <button 
              onClick={prevCategory}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 sm:-translate-x-4 lg:-translate-x-12 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 sm:p-4 z-20 transition-all duration-300 backdrop-blur-sm"
              aria-label="Previous category"
            >
              <FaChevronLeft className={`${isMobile ? 'text-xs' : 'text-base sm:text-xl'}`} />
            </button>
            
            <button 
              onClick={nextCategory}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 sm:translate-x-4 lg:translate-x-12 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 sm:p-4 z-20 transition-all duration-300 backdrop-blur-sm"
              aria-label="Next category"
            >
              <FaChevronRight className={`${isMobile ? 'text-xs' : 'text-base sm:text-xl'}`} />
            </button>
            
            {/* Product cards - further optimized for mobile */}
            <div className="overflow-hidden w-full">
              <div 
                className="flex transition-all duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentCategory * 100}%)` }}
              >
                {categories.map((category, index) => (
                  <div 
                    key={index} 
                    className="w-full flex-shrink-0 px-1 sm:px-4"
                  >
                    <div className={`bg-gradient-to-br ${category.color} backdrop-blur-md ${isMobile ? 'p-2 min-h-[210px]' : 'p-5 sm:p-10'} rounded-2xl shadow-xl border border-white/20 h-full flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}>
                      {/* Icon made smaller on mobile */}
                      <div className={isMobile ? "text-2xl mb-1" : "text-4xl mb-3"}>
                        {category.icon}
                      </div>
                      <h3 className={`${isMobile ? 'text-base' : 'text-xl sm:text-3xl'} font-bold ${isMobile ? 'mb-1' : 'mb-1 sm:mb-4'}`}>{category.name}</h3>
                      <p className={`text-white ${isMobile ? 'text-xs line-clamp-2 mb-1.5' : 'text-sm mb-3 sm:mb-8'}`}>
                        {category.description}
                      </p>
                      <a 
                        href={category.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`mt-auto bg-white text-[#EE4D2D] hover:bg-[#F48F7B] hover:text-white font-bold ${isMobile ? 'py-0.5 px-2 text-xs' : 'py-2 px-5 sm:px-8 text-sm'} rounded-full transition-all duration-300 transform hover:scale-105`}
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Category indicator dots - made smaller and with less spacing for mobile */}
            <div className={`flex justify-center ${isMobile ? 'mt-2' : 'mt-3 sm:mt-8'} ${isMobile ? 'space-x-0.5' : 'space-x-1 sm:space-x-2'}`}>
              {categories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToCategory(index)}
                  className={`${isMobile ? 'w-1 h-1' : 'w-2 sm:w-3 h-2 sm:h-3'} rounded-full transition-all duration-300 ${
                    currentCategory === index ? `bg-white ${isMobile ? 'w-2' : 'w-3 sm:w-6'}` : 'bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to category ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-[100]">
        <Footer />
      </div>

      {/* Add styles for mobile animations */}
      <style jsx>{`
        @media (max-width: 767px) {
          .animation-ready .animate-float-in-left,
          .animation-ready .animate-float-in-right {
            animation-duration: 1.2s !important;
          }
        }
      `}</style>
    </div>
  );
};

export default MainPage;