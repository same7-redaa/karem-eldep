import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="py-12 md:py-16 lg:py-20 bg-[#0b1a33] text-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 bg-[#d4a15c]/10 px-4 py-2 rounded-full border border-[#d4a15c]/20">
            <i className="fas fa-phone text-[#d4a15c]"></i>
            <span className="text-[#d4a15c] text-sm font-semibold">{t('contact.title')}</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-sans mb-3">
            {t('contact.heading')}
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto font-sans">
            {t('contact.subtitle')}
          </p>
        </div>
        
        {/* Contact Cards */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
            {/* Alexandria Office */}
            <div className="group bg-gradient-to-br from-[#1a2f5a]/40 to-[#0f1d38]/40 backdrop-blur-xl border border-[#d4a15c]/20 rounded-xl p-6 md:p-8 hover:border-[#d4a15c]/50 hover:shadow-2xl hover:shadow-[#d4a15c]/10 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4a15c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              
              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#d4a15c]/20 group-hover:bg-[#d4a15c]/30 transition-colors duration-300">
                  <i className="fas fa-building text-[#d4a15c] text-xl"></i>
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                  {t('contact.alex')}
                </h3>
                
                <a 
                  href="https://maps.google.com/maps?q=31.1996837%2C29.8969865&z=17&hl=ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-2 text-gray-300 hover:text-[#d4a15c] transition-colors duration-300 group/link"
                >
                  <i className="fas fa-map-marker-alt text-[#d4a15c] mt-1 flex-shrink-0"></i>
                  <span className="text-sm md:text-base group-hover/link:underline">
                    {t('contact.alex.address')}
                  </span>
                </a>
              </div>
            </div>

            {/* Sharm El-Sheikh Office */}
            <div className="group bg-gradient-to-br from-[#1a2f5a]/40 to-[#0f1d38]/40 backdrop-blur-xl border border-[#d4a15c]/20 rounded-xl p-6 md:p-8 hover:border-[#d4a15c]/50 hover:shadow-2xl hover:shadow-[#d4a15c]/10 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4a15c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              
              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#d4a15c]/20 group-hover:bg-[#d4a15c]/30 transition-colors duration-300">
                  <i className="fas fa-umbrella-beach text-[#d4a15c] text-xl"></i>
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                  {t('contact.sharm')}
                </h3>
                
                <a 
                  href="https://maps.google.com/maps?q=27.8544775%2C34.3000034&z=17&hl=ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-2 text-gray-300 hover:text-[#d4a15c] transition-colors duration-300 group/link"
                >
                  <i className="fas fa-map-marker-alt text-[#d4a15c] mt-1 flex-shrink-0"></i>
                  <span className="text-sm md:text-base group-hover/link:underline">
                    {t('contact.sharm.address')}
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="bg-[#1a2f5a]/30 backdrop-blur-lg border border-[#d4a15c]/20 rounded-xl p-6 md:p-8">
            <h3 className="text-lg md:text-xl font-bold text-white mb-6 flex items-center gap-2">
              <i className="fas fa-headset text-[#d4a15c]"></i>
              {t('contact.methods')}
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 flex-wrap justify-center">
              <a href="tel:01223767592" className="inline-flex items-center gap-2 px-4 py-2 bg-[#d4a15c]/10 hover:bg-[#d4a15c]/20 border border-[#d4a15c]/30 hover:border-[#d4a15c]/50 rounded-lg text-gray-300 hover:text-[#d4a15c] transition-all duration-300 font-sans text-sm md:text-base">
                <i className="fas fa-phone text-[#d4a15c]"></i>
                <span>01223767592</span>
              </a>
              <a href="https://wa.me/201223767592" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-[#d4a15c]/10 hover:bg-[#d4a15c]/20 border border-[#d4a15c]/30 hover:border-[#d4a15c]/50 rounded-lg text-gray-300 hover:text-[#d4a15c] transition-all duration-300 font-sans text-sm md:text-base">
                <i className="fab fa-whatsapp text-[#d4a15c]"></i>
                <span>{t('contact.whatsapp')}</span>
              </a>
              <a href="mailto:kingarim2411@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 bg-[#d4a15c]/10 hover:bg-[#d4a15c]/20 border border-[#d4a15c]/30 hover:border-[#d4a15c]/50 rounded-lg text-gray-300 hover:text-[#d4a15c] transition-all duration-300 font-sans text-sm md:text-base">
                <i className="fas fa-envelope text-[#d4a15c]"></i>
                <span>kingarim2411@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
