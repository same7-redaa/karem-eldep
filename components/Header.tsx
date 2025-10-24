import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const isRTL = language === 'ar';
  
  const navLinks = [
    { name: t('nav.home'), id: "hero" },
    { name: t('nav.about'), id: "about" },
    { name: t('nav.contact'), id: "contact" }
  ];
  
  const services = [
    { name: isRTL ? 'الأجانب في مصر' : 'Foreigners in Egypt', path: '/foreigners-in-egypt' },
    { name: isRTL ? 'المصريين بالخارج' : 'Egyptians Abroad', path: '/egyptians-abroad' },
    { name: isRTL ? 'القانون التجاري' : 'Commercial Law', path: '/commercial-law' },
    { name: isRTL ? 'قانون الأسرة' : 'Family Law', path: '/family-law' },
    { name: isRTL ? 'القانون المدني' : 'Civil Law', path: '/civil-law' },
    { name: isRTL ? 'القانون الجنائي' : 'Criminal Law', path: '/criminal-law' },
    { name: isRTL ? 'قانون الشركات' : 'Company Law', path: '/company-law' },
    { name: isRTL ? 'التحكيم والوساطة' : 'Arbitration & Mediation', path: '/arbitration-mediation' }
  ];

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // الانتقال للصفحة الرئيسية بدون hash
      navigate('/');
      return;
    }
    
    // إذا كنا في الصفحة الرئيسية، قم بالتمرير مباشرة
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header className="bg-[#0b1a33]/70 backdrop-blur-lg sticky top-0 z-40 border-b border-white/10">
        {/* Lighting Effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center h-14 md:h-16">
          <button onClick={() => scrollToSection('hero')} className="flex items-center cursor-pointer hover:opacity-80 transition-opacity">
            <img 
              src="https://i.postimg.cc/G3FMRMY4/3.png" 
              alt={isRTL ? "شعار مكتب كريم الديب للمحاماة - مكتب محاماة دولي متخصص" : "Karim Eldib Law Firm Logo - International specialized law office"}
              className="h-10 md:h-12 w-auto"
              style={{ mixBlendMode: 'screen' }}
            />
            <div className="mr-2 md:mr-3 text-right">
              <div className="text-[#d4a15c] text-xs md:text-sm font-bold whitespace-nowrap">
                Unlimited lawyers & foreign services
              </div>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-6 lg:gap-10">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-gray-300 hover:text-[#d4a15c] transition-colors duration-300 tracking-wide text-sm lg:text-base whitespace-nowrap"
            >
              {isRTL ? 'الرئيسية' : 'Home'}
            </button>
            
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-[#d4a15c] transition-colors duration-300 tracking-wide text-sm lg:text-base whitespace-nowrap"
            >
              {t('nav.about')}
            </button>

            {/* قائمة الخدمات المنسدلة */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-[#d4a15c] transition-colors duration-300 tracking-wide text-sm lg:text-base whitespace-nowrap flex items-center gap-1">
                {isRTL ? 'الخدمات' : 'Services'}
                <i className="fas fa-chevron-down text-xs"></i>
              </button>
              
              {/* القائمة المنسدلة */}
              <div className="absolute top-full left-0 mt-2 w-64 bg-[#1a2d4d] rounded-lg shadow-xl border border-[#c8a876]/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className="block px-4 py-3 text-gray-300 hover:text-[#c8a876] hover:bg-[#c8a876]/10 rounded-md transition-colors duration-200 text-sm"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/lawyer-profile" className="text-gray-300 hover:text-[#d4a15c] transition-colors duration-300 tracking-wide text-sm lg:text-base whitespace-nowrap">
              {isRTL ? 'المحامي' : 'Lawyer'}
            </Link>

            <Link to="/blog" className="text-gray-300 hover:text-[#d4a15c] transition-colors duration-300 tracking-wide text-sm lg:text-base whitespace-nowrap">
              {isRTL ? 'المقالات' : 'Blog'}
            </Link>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-[#d4a15c] transition-colors duration-300 tracking-wide text-sm lg:text-base whitespace-nowrap"
            >
              {t('nav.contact')}
            </button>
          </nav>
          
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-[#d4a15c] text-[#0b1a33] font-bold py-2 px-4 rounded-md hover:bg-opacity-90 transition-all duration-300 text-sm lg:text-base whitespace-nowrap"
            >
              {t('nav.book')}
            </button>
            
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md transition-all duration-300 border border-white/20"
              aria-label="Toggle Language"
            >
              <i className="fas fa-language text-[#d4a15c]"></i>
              <span className="text-white font-medium">{language === 'ar' ? 'EN' : 'AR'}</span>
            </button>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-md transition-all duration-300"
              aria-label="Toggle Language"
            >
              <i className="fas fa-language text-[#d4a15c] text-sm"></i>
              <span className="text-white text-sm font-medium">{language === 'ar' ? 'EN' : 'AR'}</span>
            </button>
            
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
        className={`fixed top-0 ${language === 'ar' ? 'left-0' : 'right-0'} h-full w-4/5 max-w-xs bg-[#0e1f3b]/90 backdrop-blur-xl border-${language === 'ar' ? 'r' : 'l'} border-white/10 z-40 transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : language === 'ar' ? '-translate-x-full' : 'translate-x-full'}`}
      >
        <div className="p-6 mt-16">
          <nav className="flex flex-col items-start space-y-6">
            {navLinks.map((link, index) => (
              <button 
                key={link.id} 
                onClick={() => scrollToSection(link.id)}
                className={`text-gray-200 hover:text-[#d4a15c] text-xl transition-all duration-300 transform ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}
                style={{ transitionDelay: `${100 + index * 75}ms` }}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className={`mt-8 bg-[#d4a15c] text-[#0b1a33] font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition-all duration-300 w-full text-center ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${100 + navLinks.length * 75}ms` }}
            >
              {t('nav.book')}
            </button>
          </nav>
        </div>
        {/* Glassy lighting effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-30 pointer-events-none"></div>
      </div>
    </>
  );
};

export default Header;
