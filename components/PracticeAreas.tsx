import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import type { PracticeArea } from '../types';

interface PracticeAreaWithLink extends PracticeArea {
  path?: string;
}

const PracticeAreaCard: React.FC<{ area: PracticeAreaWithLink }> = ({ area }) => {
    const { t } = useLanguage();
    const content = (
        <div className="relative bg-gradient-to-br from-[#1a2f5a]/40 to-[#0f1d38]/40 backdrop-blur-xl border border-[#d4a15c]/20 rounded-xl overflow-hidden group hover:border-[#d4a15c]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#d4a15c]/10 h-full flex flex-col">
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#d4a15c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4a15c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
                {/* Icon */}
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-[#d4a15c]/10 group-hover:bg-[#d4a15c]/20 transition-all duration-300">
                    <i className={`${area.icon} text-2xl md:text-3xl text-[#d4a15c] transition-transform duration-300 group-hover:scale-125`}></i>
                </div>
                
                {/* Title */}
                <h3 className="text-lg md:text-xl font-serif font-bold mb-3 text-white group-hover:text-[#d4a15c] transition-colors duration-300">
                    {area.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-300 text-sm md:text-base leading-relaxed flex-grow mb-4">
                    {area.description}
                </p>
                
                {/* Button/Link */}
                {area.path && (
                    <div className="inline-flex items-center justify-center gap-2 mt-auto pt-4 border-t border-white/5 group-hover:border-[#d4a15c]/30 transition-colors duration-300">
                        <span className="text-[#d4a15c] text-sm font-semibold group-hover:text-white transition-colors duration-300">
                            {t('services.learnMore')}
                        </span>
                        <i className="fas fa-arrow-left text-[#d4a15c] text-xs group-hover:translate-x-1 transition-all duration-300"></i>
                    </div>
                )}
            </div>
        </div>
    );

    return area.path ? <Link to={area.path} className="no-underline">{content}</Link> : content;
}

const PracticeAreas: React.FC = () => {
  const { t } = useLanguage();
  
  const practiceAreas: PracticeAreaWithLink[] = [
    { icon: 'fa-solid fa-balance-scale', title: t('services.civil'), description: t('services.civil.desc'), path: '/civil-law' },
    { icon: 'fa-solid fa-gavel', title: t('services.criminal'), description: t('services.criminal.desc'), path: '/criminal-law' },
    { icon: 'fa-solid fa-handshake', title: t('services.commercial'), description: t('services.commercial.desc'), path: '/commercial-law' },
    { icon: 'fa-solid fa-heart', title: t('services.family'), description: t('services.family.desc'), path: '/family-law' },
    { icon: 'fa-solid fa-building', title: t('services.companies'), description: t('services.companies.desc'), path: '/company-law' },
    { icon: 'fa-solid fa-passport', title: t('services.foreigners'), description: t('services.foreigners.desc'), path: '/foreigners-in-egypt' },
    { icon: 'fa-solid fa-plane', title: t('services.egyptians'), description: t('services.egyptians.desc'), path: '/egyptians-abroad' },
    { icon: 'fa-solid fa-scale-balanced', title: t('services.arbitration'), description: t('services.arbitration.desc'), path: '/arbitration-mediation' },
  ];

  return (
    <section id="services" className="py-12 md:py-16 lg:py-20 bg-[#0b1a33]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 mb-4 bg-[#d4a15c]/10 px-4 py-2 rounded-full border border-[#d4a15c]/20">
            <i className="fas fa-briefcase text-[#d4a15c]"></i>
            <span className="text-[#d4a15c] text-sm font-semibold">{t('services.title')}</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-sans mb-3">
            {t('services.heading')}
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto font-sans">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {practiceAreas.map((area) => (
            <PracticeAreaCard key={area.title} area={area} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
