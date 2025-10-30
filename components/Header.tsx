import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const isRTL = language === 'ar';
  
  const navLinks = [
    { name: t('nav.home'), id: "hero" },
    { name: t('nav.about'), id: "about" },
    { name: t('nav.contact'), id: "contact" }
  ];
  
  const getTextByLanguage = (texts: { ar: string; en: string; fr: string; it: string }) => {
    return texts[language as keyof typeof texts] || texts.en;
  };

  const services = [
    { name: getTextByLanguage({ar: 'الأجانب في مصر', en: 'Foreigners in Egypt', fr: 'Étrangers en Égypte', it: 'Stranieri in Egitto'}), path: '/foreigners-in-egypt' },
    { name: getTextByLanguage({ar: 'المصريين بالخارج', en: 'Egyptians Abroad', fr: 'Égyptiens à l\'Étranger', it: 'Egiziani all\'Estero'}), path: '/egyptians-abroad' },
    { name: getTextByLanguage({ar: 'القانون التجاري', en: 'Commercial Law', fr: 'Droit Commercial', it: 'Diritto Commerciale'}), path: '/commercial-law' },
    { name: getTextByLanguage({ar: 'قانون الأسرة', en: 'Family Law', fr: 'Droit de la Famille', it: 'Diritto di Famiglia'}), path: '/family-law' },
    { name: getTextByLanguage({ar: 'القانون المدني', en: 'Civil Law', fr: 'Droit Civil', it: 'Diritto Civile'}), path: '/civil-law' },
    { name: getTextByLanguage({ar: 'القانون الجنائي', en: 'Criminal Law', fr: 'Droit Pénal', it: 'Diritto Penale'}), path: '/criminal-law' },
    { name: getTextByLanguage({ar: 'قانون الشركات', en: 'Company Law', fr: 'Droit des Sociétés', it: 'Diritto Societario'}), path: '/company-law' },
    { name: getTextByLanguage({ar: 'التحكيم والوساطة', en: 'Arbitration & Mediation', fr: 'Arbitrage et Médiation', it: 'Arbitrato e Mediazione'}), path: '/arbitration-mediation' }
  ];

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isLangMenuOpen && !target.closest('.language-dropdown')) {
        setIsLangMenuOpen(false);
      }
    };

    if (isLangMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isLangMenuOpen]);

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
              {getTextByLanguage({ar: 'الرئيسية', en: 'Home', fr: 'Accueil', it: 'Home'})}
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
                {getTextByLanguage({ar: 'الخدمات', en: 'Services', fr: 'Services', it: 'Servizi'})}
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
              {getTextByLanguage({ar: 'المحامي', en: 'Lawyer', fr: 'Avocat', it: 'Avvocato'})}
            </Link>

            <Link to="/blog" className="text-gray-300 hover:text-[#d4a15c] transition-colors duration-300 tracking-wide text-sm lg:text-base whitespace-nowrap">
              {getTextByLanguage({ar: 'المقالات', en: 'Blog', fr: 'Blog', it: 'Blog'})}
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
            
            <div className="relative language-dropdown">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md transition-all duration-300 border border-white/20"
                aria-label="Select Language"
              >
                <i className="fas fa-language text-[#d4a15c]"></i>
                <span className="text-white font-medium">
                  {language === 'ar' ? '🇪🇬 AR' : language === 'en' ? '🇬🇧 EN' : language === 'fr' ? '🇫🇷 FR' : '🇮🇹 IT'}
                </span>
                <i className={`fas fa-chevron-down text-white text-xs transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`}></i>
              </button>
              
              {isLangMenuOpen && (
                <div className="absolute top-full mt-2 right-0 bg-[#0b1a33] border border-white/20 rounded-md shadow-lg overflow-hidden z-50 min-w-[120px]">
                  <button
                    onClick={() => { setLanguage('ar'); setIsLangMenuOpen(false); }}
                    className={`w-full px-4 py-2 text-right hover:bg-white/10 transition-colors ${language === 'ar' ? 'bg-white/20 text-[#d4a15c]' : 'text-white'}`}
                  >
                    🇪🇬 العربية
                  </button>
                  <button
                    onClick={() => { setLanguage('en'); setIsLangMenuOpen(false); }}
                    className={`w-full px-4 py-2 text-left hover:bg-white/10 transition-colors ${language === 'en' ? 'bg-white/20 text-[#d4a15c]' : 'text-white'}`}
                  >
                    🇬🇧 English
                  </button>
                  <button
                    onClick={() => { setLanguage('fr'); setIsLangMenuOpen(false); }}
                    className={`w-full px-4 py-2 text-left hover:bg-white/10 transition-colors ${language === 'fr' ? 'bg-white/20 text-[#d4a15c]' : 'text-white'}`}
                  >
                    🇫🇷 Français
                  </button>
                  <button
                    onClick={() => { setLanguage('it'); setIsLangMenuOpen(false); }}
                    className={`w-full px-4 py-2 text-left hover:bg-white/10 transition-colors ${language === 'it' ? 'bg-white/20 text-[#d4a15c]' : 'text-white'}`}
                  >
                    🇮🇹 Italiano
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <div className="relative language-dropdown">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-1 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-md transition-all duration-300"
                aria-label="Select Language"
              >
                <span className="text-white text-sm font-medium">
                  {language === 'ar' ? '🇪🇬' : language === 'en' ? '🇬🇧' : language === 'fr' ? '🇫🇷' : '🇮🇹'}
                </span>
                <i className={`fas fa-chevron-down text-white text-xs transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`}></i>
              </button>
              
              {isLangMenuOpen && (
                <div className="absolute top-full mt-2 right-0 bg-[#0b1a33] border border-white/20 rounded-md shadow-lg overflow-hidden z-50 min-w-[100px]">
                  <button
                    onClick={() => { setLanguage('ar'); setIsLangMenuOpen(false); }}
                    className={`w-full px-3 py-2 text-sm text-right hover:bg-white/10 transition-colors ${language === 'ar' ? 'bg-white/20 text-[#d4a15c]' : 'text-white'}`}
                  >
                    🇪🇬 AR
                  </button>
                  <button
                    onClick={() => { setLanguage('en'); setIsLangMenuOpen(false); }}
                    className={`w-full px-3 py-2 text-sm text-left hover:bg-white/10 transition-colors ${language === 'en' ? 'bg-white/20 text-[#d4a15c]' : 'text-white'}`}
                  >
                    🇬🇧 EN
                  </button>
                  <button
                    onClick={() => { setLanguage('fr'); setIsLangMenuOpen(false); }}
                    className={`w-full px-3 py-2 text-sm text-left hover:bg-white/10 transition-colors ${language === 'fr' ? 'bg-white/20 text-[#d4a15c]' : 'text-white'}`}
                  >
                    🇫🇷 FR
                  </button>
                  <button
                    onClick={() => { setLanguage('it'); setIsLangMenuOpen(false); }}
                    className={`w-full px-3 py-2 text-sm text-left hover:bg-white/10 transition-colors ${language === 'it' ? 'bg-white/20 text-[#d4a15c]' : 'text-white'}`}
                  >
                    🇮🇹 IT
                  </button>
                </div>
              )}
            </div>
            
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
