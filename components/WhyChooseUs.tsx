import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();
  
  const reasons = [
    {
      icon: 'fa-solid fa-hourglass-end',
      title: t('why.experience'),
      description: t('why.experience.desc'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'fa-solid fa-handshake',
      title: t('why.diplomatic'),
      description: t('why.diplomatic.desc'),
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'fa-solid fa-globe',
      title: t('why.languages'),
      description: t('why.languages.desc'),
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'fa-solid fa-shield-halved',
      title: t('why.confidential'),
      description: t('why.confidential.desc'),
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#0b1a33] via-[#0e1f3b] to-[#0b1a33]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 bg-[#d4a15c]/10 px-4 py-2 rounded-full border border-[#d4a15c]/20">
            <i className="fas fa-star text-[#d4a15c]"></i>
            <span className="text-[#d4a15c] text-sm font-semibold">{t('why.differ')}</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-sans mb-4 text-white">
            {t('why.title')}
          </h2>
          
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-sans">
            {t('why.subtitle')}
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-[#1a2f5a]/40 to-[#0f1d38]/40 backdrop-blur-xl border border-[#d4a15c]/20 rounded-xl p-6 md:p-8 hover:border-[#d4a15c]/50 hover:shadow-2xl hover:shadow-[#d4a15c]/10 transition-all duration-300 overflow-hidden flex flex-col h-full"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4a15c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4a15c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Icon Container */}
              <div className="relative z-10 mb-5 inline-flex items-center justify-center w-16 h-16 rounded-lg bg-[#d4a15c]/10 group-hover:bg-[#d4a15c]/20 transition-all duration-300 group-hover:scale-110">
                <i className={`${reason.icon} text-2xl md:text-3xl text-[#d4a15c]`}></i>
              </div>

              {/* Content */}
              <div className="relative z-10 flex-grow">
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-[#d4a15c] transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  {reason.description}
                </p>
              </div>


            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-[#d4a15c]/20 to-transparent p-8 rounded-xl border border-[#d4a15c]/30">
            <h3 className="text-lg md:text-xl font-bold text-white mb-4">
              {t('why.ready')}
            </h3>
            <p className="text-gray-300 text-sm md:text-base mb-6">
              {t('why.ready.desc')}
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#d4a15c] to-[#c8936a] hover:from-[#e0b573] hover:to-[#d4a15c] text-[#0b1a33] font-bold py-3 px-8 rounded-lg transition-all duration-300 group shadow-lg hover:shadow-[#d4a15c]/30 hover:scale-105"
            >
              <span>{t('why.book')}</span>
              <i className="fas fa-phone group-hover:translate-x-1 transition-transform"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
