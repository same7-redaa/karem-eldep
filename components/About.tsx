import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import type { Stat } from '../types';

const StatCard: React.FC<{ stat: Stat; index: number }> = ({ stat, index }) => (
    <div 
        className="relative bg-white/5 backdrop-blur-sm border border-[#d4a15c]/30 rounded-lg p-3 md:p-4 text-center animate-fade-in-up opacity-0 hover:bg-white/10 hover:border-[#d4a15c]/60 transition-all duration-300 hover:scale-105 min-w-[90px] md:min-w-[110px]"
        style={{ animationDelay: `${0.6 + index * 0.2}s`, animationFillMode: 'forwards' }}
    >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#d4a15c]/10 to-transparent rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        <p className="text-2xl md:text-3xl font-bold font-sans text-[#d4a15c] mb-1 relative z-10">{stat.value}</p>
        <p className="text-gray-300 text-xs md:text-sm font-medium relative z-10">{stat.label}</p>
    </div>
);

const About: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const { t } = useLanguage();

    const stats: Stat[] = [
        { value: '18+', label: t('about.stat1') },
        { value: '3500+', label: t('about.stat2') },
        { value: t('about.stat3.value'), label: t('about.stat3.label') }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

  return (
    <section id="about" ref={sectionRef} className="py-8 md:py-12 bg-[#0e1f3b] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className={`order-2 lg:order-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-xl md:text-2xl font-bold font-sans mb-4 md:mb-6 animate-fade-in-up">
              <i className="fas fa-user-tie text-[#d4a15c] ml-2"></i>
              {t('about.title')}
            </h2>
            
            <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
              <div className="flex items-start gap-2 md:gap-3 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards', opacity: 0 }}>
                <i className="fas fa-shield-alt text-[#d4a15c] text-lg md:text-xl mt-1 flex-shrink-0"></i>
                <p className="text-gray-300 leading-relaxed font-sans text-sm md:text-base">
                  {t('about.p1')}
                </p>
              </div>
              
              <div className="flex items-start gap-2 md:gap-3 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards', opacity: 0 }}>
                <i className="fas fa-landmark text-[#d4a15c] text-lg md:text-xl mt-1 flex-shrink-0"></i>
                <p className="text-gray-300 leading-relaxed font-sans text-sm md:text-base">
                  {t('about.p2')}
                </p>
              </div>
              
              <div className="flex items-start gap-2 md:gap-3 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards', opacity: 0 }}>
                <i className="fas fa-language text-[#d4a15c] text-lg md:text-xl mt-1 flex-shrink-0"></i>
                <p className="text-gray-300 leading-relaxed font-sans text-sm md:text-base">
                  {t('about.p3')}
                </p>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-start gap-4 md:gap-6 flex-wrap">
                {stats.map((stat, index) => <StatCard key={index} stat={stat} index={index} />)}
            </div>
          </div>
          <div className={`order-1 lg:order-2 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-95'}`}>
            <div className="relative group mx-auto w-full max-w-md">
              {/* A more pronounced glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#d4a15c] to-[#b8860b] rounded-lg blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
              <img 
                src="/Image22.jpeg"
                alt="Karim Eldib Law Firm" 
                className="relative rounded-lg shadow-lg w-full h-auto object-cover transform transition-all duration-500 ease-out group-hover:scale-[1.05] group-hover:shadow-2xl group-hover:-rotate-1"
              />
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default About;
