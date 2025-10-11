import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ["About Us", "Practice Areas", "Blog", "Contact Us"];

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="bg-[#0b1a33]/70 backdrop-blur-lg sticky top-0 z-40 border-b border-white/10">
        {/* Lighting Effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-6 flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="https://i.postimg.cc/PJpM23qn/Eldib-150-anni.png" 
              alt="Eldib & Co Law Firm Logo" 
              className="h-10 w-auto" // Reduced logo size
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link} href="#" className="text-gray-300 hover:text-[#d4a15c] transition-colors duration-300 tracking-wide">
                {link}
              </a>
            ))}
          </nav>
          
          <a href="#" className="hidden md:inline-block bg-[#d4a15c] text-[#0b1a33] font-bold py-2 px-5 rounded-md hover:bg-opacity-90 transition-all duration-300">
            Book a Consultation
          </a>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none z-50">
              <svg className="w-7 h-7 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ transform: isMenuOpen ? 'rotate(90deg)' : 'none' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-30 transition-opacity duration-500 md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-0 left-0 h-full w-4/5 max-w-xs bg-[#0e1f3b]/90 backdrop-blur-xl border-r border-white/10 z-40 transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-6 mt-16">
          <nav className="flex flex-col items-start space-y-6">
            {navLinks.map((link, index) => (
              <a 
                key={link} 
                href="#" 
                className={`text-gray-200 hover:text-[#d4a15c] text-xl transition-all duration-300 transform ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}
                style={{ transitionDelay: `${100 + index * 75}ms` }}
              >
                {link}
              </a>
            ))}
            <a 
              href="#" 
              className={`mt-8 bg-[#d4a15c] text-[#0b1a33] font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition-all duration-300 w-full text-center ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${100 + navLinks.length * 75}ms` }}
            >
              Book a Consultation
            </a>
          </nav>
        </div>
        {/* Glassy lighting effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-30 pointer-events-none"></div>
      </div>
    </>
  );
};

export default Header;