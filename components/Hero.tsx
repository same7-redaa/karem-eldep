import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="hero"
      className="relative h-[70vh] min-h-[450px] flex items-center justify-center text-center text-white overflow-hidden bg-[#0b1a33]" 
      role="banner"
      aria-label={t('hero.title')}
    >
      {/* Background Image with optimization and blur placeholder */}
      <img 
        src="/france.png" 
        alt="Karim El-Dib Law Firm Background"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        style={{ 
          filter: 'blur(0px)',
          opacity: 1
        }}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        onLoad={(e) => {
          (e.target as HTMLImageElement).style.filter = 'blur(0px)';
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0b1a33] bg-opacity-70 z-[1]"></div>
      
      {/* Gradient bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0e1f3b] to-transparent z-[2]"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold font-sans mb-2 md:mb-3 leading-tight">
          {t('hero.title')}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-3 md:mb-4 font-medium text-[#d4a15c] font-sans">
          {t('hero.subtitle')}
        </p>
        <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-4 md:mb-6 font-medium text-white/90 font-sans">
          {t('hero.consulate')}
        </p>
        <button 
          onClick={scrollToContact}
          className="bg-[#d4a15c] text-[#0b1a33] font-bold py-2 px-4 md:py-2.5 md:px-6 rounded-md text-sm md:text-base hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
        >
          {t('hero.cta')}
        </button>
      </div>
    </section>
  );
};

export default Hero;
