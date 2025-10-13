import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import type { PracticeArea } from '../types';

const PracticeAreaCard: React.FC<{ area: PracticeArea }> = ({ area }) => {
    return (
        <div className="relative bg-[#1a2f5a]/30 backdrop-blur-lg border border-white/10 p-4 md:p-5 rounded-lg text-center flex flex-col items-center group hover:border-white/20 hover:-translate-y-2 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
            <i className={`${area.icon} text-2xl md:text-3xl text-[#d4a15c] mb-2 md:mb-3 transition-transform duration-300 group-hover:scale-110 z-10`}></i>
            <h3 className="text-lg md:text-xl font-serif font-bold mb-2 z-10">{area.title}</h3>
            <p className="text-gray-300 text-xs md:text-sm flex-grow z-10">{area.description}</p>
        </div>
    );
}

const PracticeAreas: React.FC = () => {
  const { t } = useLanguage();
  
  const practiceAreas: PracticeArea[] = [
    { icon: 'fa-solid fa-scales', title: t('services.civil'), description: t('services.civil.desc') },
    { icon: 'fa-solid fa-gavel', title: t('services.criminal'), description: t('services.criminal.desc') },
    { icon: 'fa-solid fa-handshake', title: t('services.commercial'), description: t('services.commercial.desc') },
    { icon: 'fa-solid fa-heart', title: t('services.family'), description: t('services.family.desc') },
    { icon: 'fa-solid fa-building', title: t('services.companies'), description: t('services.companies.desc') },
    { icon: 'fa-solid fa-passport', title: t('services.foreigners'), description: t('services.foreigners.desc') },
    { icon: 'fa-solid fa-plane', title: t('services.egyptians'), description: t('services.egyptians.desc') },
  ];

  return (
    <section id="services" className="py-8 md:py-12 bg-[#0b1a33]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-bold font-sans">
            <i className="fas fa-briefcase text-[#d4a15c] ml-2"></i>
            {t('services.title')}
          </h2>
          <p className="text-base text-gray-400 mt-2 font-sans">{t('services.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {practiceAreas.map((area) => (
            <PracticeAreaCard key={area.title} area={area} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
