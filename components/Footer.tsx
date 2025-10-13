import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-[#061021] text-gray-400 py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-sm font-sans text-gray-400">
            &copy; {new Date().getFullYear()} {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
