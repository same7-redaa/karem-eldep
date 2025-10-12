import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-[#061021] text-gray-400 py-8">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-3">
          <p className="text-sm font-sans text-gray-400">
            &copy; {new Date().getFullYear()} {t('footer.rights')}
          </p>
          <p className="text-sm font-sans text-gray-500">
            {t('footer.designed')} <span className="text-[#d4a15c] font-semibold">{t('footer.developer')}</span>
          </p>
          <p className="text-sm font-sans text-gray-500">
            {t('footer.order')}
          </p>
          <div className="flex justify-center gap-5 mt-3">
            <a href="https://wa.me/201023160657" target="_blank" rel="noopener noreferrer" className="text-[#d4a15c]/70 hover:text-[#d4a15c] transition-colors duration-300">
              <i className="fa-brands fa-whatsapp text-2xl"></i>
            </a>
            <a href="https://www.facebook.com/SAME7.REDAA" target="_blank" rel="noopener noreferrer" className="text-[#d4a15c]/70 hover:text-[#d4a15c] transition-colors duration-300">
              <i className="fa-brands fa-facebook-f text-2xl"></i>
            </a>
            <a href="https://www.doc-digital.online/" target="_blank" rel="noopener noreferrer" className="text-[#d4a15c]/70 hover:text-[#d4a15c] transition-colors duration-300">
              <i className="fa-solid fa-globe text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
