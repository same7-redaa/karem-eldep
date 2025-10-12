import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import type { PracticeArea } from '../types';

const PracticeAreaCard: React.FC<{ area: PracticeArea }> = ({ area }) => {
    return (
        <div className="relative bg-[#1a2f5a]/30 backdrop-blur-lg border border-white/10 p-5 md:p-8 rounded-lg text-center flex flex-col items-center group hover:border-white/20 hover:-translate-y-2 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
            <i className={`${area.icon} text-3xl md:text-4xl text-[#d4a15c] mb-3 md:mb-4 transition-transform duration-300 group-hover:scale-110 z-10`}></i>
            <h3 className="text-xl md:text-2xl font-serif font-bold mb-2 md:mb-3 z-10">{area.title}</h3>
            <p className="text-gray-300 text-sm md:text-base flex-grow z-10">{area.description}</p>
        </div>
    );
}

const PracticeAreas: React.FC = () => {
  const { t } = useLanguage();
  
  const practiceAreas: PracticeArea[] = [
    { icon: 'fa-solid fa-passport', title: t('services.immigration'), description: t('services.immigration.desc') },
    { icon: 'fa-solid fa-building', title: t('services.companies'), description: t('services.companies.desc') },
    { icon: 'fa-solid fa-file-contract', title: t('services.commercial'), description: t('services.commercial.desc') },
    { icon: 'fa-solid fa-scale-balanced', title: t('services.arbitration'), description: t('services.arbitration.desc') },
    { icon: 'fa-solid fa-briefcase', title: t('services.labor'), description: t('services.labor.desc') },
    { icon: 'fa-solid fa-hotel', title: t('services.tourism'), description: t('services.tourism.desc') },
  ];

  return (
    <section id="services" className="py-12 md:py-20 bg-[#0b1a33]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold font-sans">
            <i className="fas fa-briefcase text-[#d4a15c] ml-3"></i>
            {t('services.title')}
          </h2>
          <p className="text-lg text-gray-400 mt-2 font-sans">{t('services.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area) => (
            <PracticeAreaCard key={area.title} area={area} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
