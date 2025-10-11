import React, { useEffect, useRef, useState } from 'react';
import type { Stat } from '../types';

const StatCard: React.FC<{ stat: Stat; index: number }> = ({ stat, index }) => (
    <div 
        className="text-center animate-fade-in-up opacity-0"
        style={{ animationDelay: `${0.6 + index * 0.2}s`, animationFillMode: 'forwards' }}
    >
        <p className="text-4xl font-bold font-serif text-[#d4a15c]">{stat.value}</p>
        <p className="text-gray-400 mt-1">{stat.label}</p>
    </div>
);

const About: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    const stats: Stat[] = [
        { value: '1875', label: 'Founded' },
        { value: '145+', label: 'Years of Expertise' },
        { value: 'Global', label: 'Reach' }
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
    <section ref={sectionRef} className="py-20 bg-[#0e1f3b] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`order-2 lg:order-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-4xl font-bold font-serif mb-6 animate-fade-in-up">ABOUT US</h2>
            <p className="text-gray-300 mb-4 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards', opacity: 0 }}>
              In today's fast-paced world, you need a proactive business services partner who not only drives your company forward but also understands your challenges and the value of unwavering commitment.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards', opacity: 0 }}>
              Founded in 1875, our firm brings over a century of expertise, dedication, and forward-thinking solutions to support your success.
            </p>
            <div className="flex justify-center lg:justify-start space-x-10">
                {stats.map((stat, index) => <StatCard key={stat.label} stat={stat} index={index} />)}
            </div>
          </div>
          <div className={`order-1 lg:order-2 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-95'}`}>
            <div className="relative group mx-auto w-full max-w-md">
              {/* A more pronounced glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#d4a15c] to-[#b8860b] rounded-lg blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
              <img 
                src="https://i.postimg.cc/mZCjznKQ/Eldib-Final.jpg"
                alt="Eldib & Co Law Firm" 
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
