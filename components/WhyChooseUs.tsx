import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-8 md:py-12 bg-[#0e1f3b]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-bold font-sans mb-3 md:mb-4">
            <i className="fas fa-star text-[#d4a15c] ml-2"></i>
            {t('why.title')}
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-4xl mx-auto leading-relaxed mb-4 md:mb-6 font-sans">
            {t('why.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 md:p-5 rounded-lg text-center hover:border-[#d4a15c] transition-all duration-300">
            <div className="text-3xl md:text-4xl mb-2 md:mb-3">
              <i className="fas fa-calendar-check text-[#d4a15c]"></i>
            </div>
            <h3 className="text-base md:text-lg font-bold mb-2 font-sans">{t('why.experience')}</h3>
            <p className="text-gray-300 text-xs md:text-sm font-sans">{t('why.experience.desc')}</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 md:p-5 rounded-lg text-center hover:border-[#d4a15c] transition-all duration-300">
            <div className="text-3xl md:text-4xl mb-2 md:mb-3">
              <i className="fas fa-globe-americas text-[#d4a15c]"></i>
            </div>
            <h3 className="text-base md:text-lg font-bold mb-2 font-sans">{t('why.diplomatic')}</h3>
            <p className="text-gray-300 text-xs md:text-sm font-sans">{t('why.diplomatic.desc')}</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 md:p-5 rounded-lg text-center hover:border-[#d4a15c] transition-all duration-300">
            <div className="text-3xl md:text-4xl mb-2 md:mb-3">
              <i className="fas fa-language text-[#d4a15c]"></i>
            </div>
            <h3 className="text-base md:text-lg font-bold mb-2 font-sans">{t('why.languages')}</h3>
            <p className="text-gray-300 text-xs md:text-sm font-sans">{t('why.languages.desc')}</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 md:p-5 rounded-lg text-center hover:border-[#d4a15c] transition-all duration-300">
            <div className="text-3xl md:text-4xl mb-2 md:mb-3">
              <i className="fas fa-user-shield text-[#d4a15c]"></i>
            </div>
            <h3 className="text-base md:text-lg font-bold mb-2 font-sans">{t('why.confidential')}</h3>
            <p className="text-gray-300 text-xs md:text-sm font-sans">{t('why.confidential.desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
