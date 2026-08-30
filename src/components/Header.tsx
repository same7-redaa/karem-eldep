import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isBranchesOpen, setIsBranchesOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const isRTL = language === 'ar';
  
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const branchesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 300);
  };

  const handleBranchesEnter = () => {
    if (branchesTimeoutRef.current) clearTimeout(branchesTimeoutRef.current);
    setIsBranchesOpen(true);
  };

  const handleBranchesLeave = () => {
    branchesTimeoutRef.current = setTimeout(() => {
      setIsBranchesOpen(false);
    }, 300);
  };

  const getCtaConfig = () => {
    const path = location.pathname;
    switch (path) {
      case '/foreigners-in-egypt':
        return {
          text: getTextByLanguage({ ar: 'استشارة أجانب', en: 'Expat Consultation', fr: 'Consultation Expatriés', it: 'Consulenza Stranieri' }),
          link: 'https://wa.me/201009955509',
          isExternal: true
        };
      case '/egyptians-abroad':
        return {
          text: getTextByLanguage({ ar: 'استشارة مغتربين', en: 'Expat Consultation', fr: 'Consultation Expatriés', it: 'Consulenza Espatriati' }),
          link: 'https://wa.me/201223767592',
          isExternal: true
        };
      case '/commercial-law':
      case '/company-law':
        return {
          text: getTextByLanguage({ ar: 'تأسيس شركات', en: 'Form Company', fr: 'Créer Société', it: 'Costituire Società' }),
          link: 'https://wa.me/201009955509',
          isExternal: true
        };
      case '/family-law':
        return {
          text: getTextByLanguage({ ar: 'استشارة أسرية', en: 'Family Consultation', fr: 'Consultation Familiale', it: 'Consulenza Familiare' }),
          link: 'https://wa.me/201223767592',
          isExternal: true
        };
      case '/civil-law':
        return {
          text: getTextByLanguage({ ar: 'استشارة', en: 'Consultation', fr: 'Consultation', it: 'Consulenza' }),
          link: 'https://wa.me/201009955509',
          isExternal: true
        };
      case '/criminal-law':
        return {
          text: getTextByLanguage({ ar: 'دفاع عاجل', en: 'Urgent Defense', fr: 'Défense Urgente', it: 'Difesa Urgente' }),
          link: 'tel:+201223767592',
          isExternal: true
        };
      case '/arbitration-mediation':
        return {
          text: getTextByLanguage({ ar: 'طلب تحكيم', en: 'Request Arbitration', fr: 'Demande d\'Arbitrage', it: 'Richiesta Arbitrato' }),
          link: 'https://wa.me/201223767592',
          isExternal: true
        };
      case '/alexandria':
        return {
          text: getTextByLanguage({ ar: 'اتصل بمكتب الإسكندرية', en: 'Call Alex Office', fr: 'Appeler Alexandrie', it: 'Chiama Alessandria' }),
          link: 'tel:+201223767592',
          isExternal: true
        };
      case '/sharm-el-sheikh':
        return {
          text: getTextByLanguage({ ar: 'اتصل بفرع شرم الشيخ', en: 'Call Sharm Branch', fr: 'Appeler Sharm', it: 'Chiama Sharm' }),
          link: 'tel:+201223767592',
          isExternal: true
        };
      case '/cairo':
        return {
          text: getTextByLanguage({ ar: 'اتصل بمكتب القاهرة', en: 'Call Cairo Office', fr: 'Appeler Le Caire', it: 'Chiama Cairo' }),
          link: 'tel:+201223767592',
          isExternal: true
        };
      default:
        return {
          text: t('nav.book'),
          link: '#contact',
          isExternal: false
        };
    }
  };

  const renderCtaButton = (isMobile = false) => {
    const cta = getCtaConfig();
    const baseClass = isMobile 
      ? "mt-6 bg-[#d4a15c] text-[#0b1a33] font-normal py-2 px-5 rounded-md hover:bg-opacity-90 transition-all duration-300 w-full text-center block cursor-pointer text-sm"
      : "bg-[#d4a15c] text-[#0b1a33] font-normal py-1.5 px-3 rounded-md hover:bg-opacity-90 transition-all duration-300 text-xs lg:text-sm whitespace-nowrap block cursor-pointer";

    if (cta.isExternal) {
      return (
        <a 
          href={cta.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className={baseClass}
          onClick={() => { if (isMobile) setIsMenuOpen(false); }}
        >
          {cta.text}
        </a>
      );
    } else {
      return (
        <button 
          onClick={() => {
            scrollToSection('contact');
            if (isMobile) setIsMenuOpen(false);
          }}
          className={baseClass}
        >
          {cta.text}
        </button>
      );
    }
  };
  
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
    { name: getTextByLanguage({ar: 'التحكيم والوساطة', en: 'Arbitration & Mediation', fr: 'Arbitrage et Médiation', it: 'Arbitrato e Mediazione'}), path: '/arbitration-mediation' },
    { name: getTextByLanguage({ar: 'القانون الدولي والتحكيم', en: 'International Law', fr: 'Droit International', it: 'Diritto Internazionale'}), path: '/arbitration-mediation' },
    { name: getTextByLanguage({ar: 'القانون البحري وطاقة الاستثمار', en: 'Maritime & Energy Law', fr: 'Droit Maritime & Énergie', it: 'Diritto Marittimo ed Energia'}), path: '/commercial-law' }
  ];

  const branches = [
    { name: getTextByLanguage({ar: 'المكتب الرئيسي - الإسكندرية', en: 'Main Office - Alexandria', fr: 'Bureau Principal - Alexandrie', it: 'Ufficio Principale - Alessandria'}), path: '/alexandria' },
    { name: getTextByLanguage({ar: 'فرع شرم الشيخ', en: 'Sharm El Sheikh Branch', fr: 'Succursale - Sharm El Sheikh', it: 'Filiale - Sharm El Sheikh'}), path: '/sharm-el-sheikh' },
    { name: getTextByLanguage({ar: 'مكتب التمثيل - القاهرة', en: 'Representation Office - Cairo', fr: 'Bureau de Représentation - Le Caire', it: 'Ufficio di Rappresentanza - Il Cairo'}), path: '/cairo' }
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

          <nav className="hidden lg:flex items-center gap-6 lg:gap-10">
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

            {/* Nav Item: Services with trigger for Sub-Bar */}
            <div 
              className="relative py-4"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <Link 
                to="/services"
                className="text-gray-300 hover:text-[#d4a15c] transition-colors duration-300 tracking-wide text-sm lg:text-base whitespace-nowrap flex items-center gap-1"
              >
                {getTextByLanguage({ar: 'الخدمات', en: 'Services', fr: 'Services', it: 'Servizi'})}
                <i className={`fas fa-chevron-down text-xs transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}></i>
              </Link>
            </div>

            {/* Branches Dropdown using Mega menu style */}
            <div 
              className="relative py-4"
              onMouseEnter={handleBranchesEnter}
              onMouseLeave={handleBranchesLeave}
            >
              <button className="text-gray-300 hover:text-[#d4a15c] transition-colors duration-300 tracking-wide text-sm lg:text-base whitespace-nowrap flex items-center gap-1">
                {getTextByLanguage({ar: 'فروعنا', en: 'Branches', fr: 'Branches', it: 'Filiali'})}
                <i className={`fas fa-chevron-down text-xs transition-transform duration-300 ${isBranchesOpen ? 'rotate-180' : ''}`}></i>
              </button>
            </div>

            <Link to="/lawyer-profile" className="text-gray-300 hover:text-[#d4a15c] transition-colors duration-300 tracking-wide text-sm lg:text-base whitespace-nowrap">
              {getTextByLanguage({ar: 'عن مدير المؤسسة', en: 'About the Director', fr: 'À propos du Directeur', it: 'Sul Direttore'})}
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
          
          <div className="hidden lg:flex items-center gap-4">
            {renderCtaButton(false)}
            
            <div className="relative language-dropdown">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white/10 hover:bg-white/20 rounded-md transition-all duration-300 border border-white/20 text-xs md:text-sm"
                aria-label="Select Language"
              >
                <i className="fas fa-language text-[#d4a15c] text-xs"></i>
                <span className="text-white font-medium text-xs md:text-sm">
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

          <div className="lg:hidden flex items-center gap-3">
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

        {/* Services Sub-Bar (Horizontal Mega Bar) */}
        <div 
          onMouseEnter={handleServicesEnter}
          onMouseLeave={handleServicesLeave}
          className={`absolute left-0 right-0 top-full bg-[#0e1f3b] border-b border-[#c8a876]/20 py-4 transition-all duration-300 z-30 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'}`}
        >
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-3.5 text-center justify-items-center">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  onClick={() => setIsServicesOpen(false)}
                  className="text-xs lg:text-sm text-gray-300 hover:text-[#d4a15c] font-semibold transition-colors duration-200 whitespace-nowrap"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Branches Sub-Bar (Horizontal Mega Bar) */}
        <div 
          onMouseEnter={handleBranchesEnter}
          onMouseLeave={handleBranchesLeave}
          className={`absolute left-0 right-0 top-full bg-[#0e1f3b] border-b border-[#c8a876]/20 py-2.5 transition-all duration-300 z-30 ${isBranchesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'}`}
        >
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex items-center justify-start lg:justify-center gap-6 overflow-x-auto scrollbar-none whitespace-nowrap py-1">
              {branches.map((branch, index) => (
                <Link
                  key={index}
                  to={branch.path}
                  onClick={() => setIsBranchesOpen(false)}
                  className="text-xs lg:text-sm text-gray-300 hover:text-[#d4a15c] font-semibold transition-colors duration-200"
                >
                  {branch.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-30 transition-opacity duration-500 lg:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-0 ${language === 'ar' ? 'left-0' : 'right-0'} h-full w-4/5 max-w-xs bg-[#0e1f3b]/90 backdrop-blur-xl border-${language === 'ar' ? 'r' : 'l'} border-white/10 z-40 transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? 'translate-x-0' : language === 'ar' ? '-translate-x-full' : 'translate-x-full'}`}
      >
        <div className="p-6 mt-16">
          <nav className="flex flex-col items-start space-y-5 w-full">
            {/* Scroll Links */}
            <button 
              onClick={() => { scrollToSection('hero'); setIsMenuOpen(false); }}
              className="text-gray-200 hover:text-[#d4a15c] text-lg transition-all duration-300 w-full text-start"
            >
              {getTextByLanguage({ar: 'الرئيسية', en: 'Home', fr: 'Accueil', it: 'Home'})}
            </button>
            <button 
              onClick={() => { scrollToSection('about'); setIsMenuOpen(false); }}
              className="text-gray-200 hover:text-[#d4a15c] text-lg transition-all duration-300 w-full text-start"
            >
              {t('nav.about')}
            </button>
            
            {/* Route Links */}
            <Link 
              to="/services" 
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-200 hover:text-[#d4a15c] text-lg transition-all duration-300 w-full text-start"
            >
              {getTextByLanguage({ar: 'الخدمات', en: 'Services', fr: 'Services', it: 'Servizi'})}
            </Link>
            <Link 
              to="/lawyer-profile" 
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-200 hover:text-[#d4a15c] text-lg transition-all duration-300 w-full text-start"
            >
              {getTextByLanguage({ar: 'عن مدير المؤسسة', en: 'About the Director', fr: 'À propos du Directeur', it: 'Sul Direttore'})}
            </Link>
            <Link 
              to="/blog" 
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-200 hover:text-[#d4a15c] text-lg transition-all duration-300 w-full text-start"
            >
              {getTextByLanguage({ar: 'المقالات', en: 'Blog', fr: 'Blog', it: 'Blog'})}
            </Link>
            <button 
              onClick={() => { scrollToSection('contact'); setIsMenuOpen(false); }}
              className="text-gray-200 hover:text-[#d4a15c] text-lg transition-all duration-300 w-full text-start"
            >
              {t('nav.contact')}
            </button>

            {/* Branches in Mobile Drawer */}
            <div className="w-full border-t border-white/10 pt-4 mt-2">
              <span className="text-[#d4a15c] text-xs font-bold block mb-3 uppercase tracking-wider text-start">
                {getTextByLanguage({ar: 'فروعنا ومكاتبنا', en: 'Our Branches', fr: 'Nos Branches', it: 'Le Nostre Filiali'})}
              </span>
              <div className="flex flex-col space-y-3 pr-2 pl-2">
                {branches.map((branch, index) => (
                  <Link
                    key={index}
                    to={branch.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-300 hover:text-[#d4a15c] text-base transition-colors duration-200 text-start"
                  >
                    {branch.name}
                  </Link>
                ))}
              </div>
            </div>

            {renderCtaButton(true)}
          </nav>
        </div>
        {/* Glassy lighting effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-30 pointer-events-none"></div>
      </div>
    </>
  );
};

export default Header;
