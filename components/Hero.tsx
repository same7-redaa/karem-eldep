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
      id="home"
      className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white bg-cover bg-center" 
      style={{ backgroundImage: "url('https://i.pinimg.com/1200x/fb/4e/36/fb4e36b171a92fb4d391f3bc6a90e8a5.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#0b1a33] bg-opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0e1f3b] to-transparent"></div>
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold font-sans mb-3 md:mb-4 leading-tight">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl lg:text-4xl max-w-3xl mx-auto mb-6 md:mb-8 font-medium text-[#d4a15c] font-sans">
          {t('hero.subtitle')}
        </p>
        <button 
          onClick={scrollToContact}
          className="bg-[#d4a15c] text-[#0b1a33] font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-md text-base md:text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
        >
          {t('hero.cta')}
        </button>
      </div>
    </section>
  );
};

export default Hero;
