import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-12 md:py-20 bg-[#0e1f3b]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold font-sans mb-4 md:mb-6">
            <i className="fas fa-star text-[#d4a15c] ml-2 md:ml-3"></i>
            {t('why.title')}
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6 md:mb-8 font-sans">
            {t('why.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-5 md:p-6 rounded-lg text-center hover:border-[#d4a15c] transition-all duration-300">
            <div className="text-4xl md:text-5xl mb-3 md:mb-4">
              <i className="fas fa-certificate text-[#d4a15c]"></i>
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 font-sans">{t('why.diplomatic')}</h3>
            <p className="text-gray-300 text-sm font-sans">{t('why.diplomatic.desc')}</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-5 md:p-6 rounded-lg text-center hover:border-[#d4a15c] transition-all duration-300">
            <div className="text-4xl md:text-5xl mb-3 md:mb-4">
              <i className="fas fa-globe-americas text-[#d4a15c]"></i>
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 font-sans">{t('why.international')}</h3>
            <p className="text-gray-300 text-sm font-sans">{t('why.international.desc')}</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-5 md:p-6 rounded-lg text-center hover:border-[#d4a15c] transition-all duration-300">
            <div className="text-4xl md:text-5xl mb-3 md:mb-4">
              <i className="fas fa-language text-[#d4a15c]"></i>
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 font-sans">{t('why.languages')}</h3>
            <p className="text-gray-300 text-sm font-sans">{t('why.languages.desc')}</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-5 md:p-6 rounded-lg text-center hover:border-[#d4a15c] transition-all duration-300">
            <div className="text-4xl md:text-5xl mb-3 md:mb-4">
              <i className="fas fa-user-shield text-[#d4a15c]"></i>
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 font-sans">{t('why.confidential')}</h3>
            <p className="text-gray-300 text-sm font-sans">{t('why.confidential.desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
