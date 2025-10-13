import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="py-8 md:py-12 bg-[#0b1a33] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-bold font-sans">
            <i className="fas fa-map-marker-alt text-[#d4a15c] ml-2"></i>
            {t('contact.title')}
          </h2>
          <p className="text-base text-gray-300 mt-2 font-sans">{t('contact.subtitle')}</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 md:p-6 rounded-lg shadow-lg">
            <h3 className="text-lg md:text-xl font-sans font-bold mb-4 md:mb-5 text-center">
              <i className="fas fa-address-book text-[#d4a15c] ml-2"></i>
              {t('contact.info')}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
              {/* مكتب الإسكندرية */}
              <div className="space-y-2 md:space-y-3">
                <h4 className="text-base md:text-lg font-sans font-bold text-[#d4a15c] mb-2">
                  <i className="fas fa-building ml-2"></i>
                  {t('contact.alex')}
                </h4>
                <a 
                  href="https://maps.google.com/maps?q=31.1996837%2C29.8969865&z=17&hl=ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 font-sans flex items-start gap-2 hover:text-[#d4a15c] transition-colors cursor-pointer group text-sm md:text-base"
                >
                  <i className="fas fa-map-marker-alt text-[#d4a15c] mt-1 group-hover:scale-110 transition-transform"></i>
                  <span className="underline-offset-2 group-hover:underline">{t('contact.alex.address')}</span>
                </a>
              </div>
              
              {/* مكتب شرم الشيخ */}
              <div className="space-y-2 md:space-y-3">
                <h4 className="text-base md:text-lg font-sans font-bold text-[#d4a15c] mb-2">
                  <i className="fas fa-umbrella-beach ml-2"></i>
                  {t('contact.sharm')}
                </h4>
                <a 
                  href="https://maps.google.com/maps?q=27.8544775%2C34.3000034&z=17&hl=ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 font-sans flex items-start gap-2 hover:text-[#d4a15c] transition-colors cursor-pointer group text-sm md:text-base"
                >
                  <i className="fas fa-map-marker-alt text-[#d4a15c] mt-1 group-hover:scale-110 transition-transform"></i>
                  <span className="underline-offset-2 group-hover:underline">{t('contact.sharm.address')}</span>
                </a>
              </div>
            </div>
            
            {/* معلومات الاتصال */}
            <div className="border-t border-white/20 pt-4 md:pt-5">
              <h4 className="text-lg font-sans font-bold text-center mb-4 md:mb-5">
                <i className="fas fa-phone-alt text-[#d4a15c] ml-2"></i>
                {t('contact.methods')}
              </h4>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                <a href="tel:01223767592" className="flex items-center gap-2 text-gray-300 hover:text-[#d4a15c] font-sans transition-colors text-sm md:text-base">
                  <i className="fas fa-phone text-[#d4a15c]"></i>
                  <span>01223767592</span>
                </a>
                <a href="https://wa.me/201223767592" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-[#d4a15c] font-sans transition-colors text-sm md:text-base">
                  <i className="fab fa-whatsapp text-[#d4a15c]"></i>
                  <span>{t('contact.whatsapp')}</span>
                </a>
                <a href="mailto:kingarim2411@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-[#d4a15c] font-sans transition-colors text-sm md:text-base">
                  <i className="fas fa-envelope text-[#d4a15c]"></i>
                  <span>kingarim2411@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
