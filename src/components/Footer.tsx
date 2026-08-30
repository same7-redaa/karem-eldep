import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { language, t } = useLanguage();
  const isRTL = language === 'ar';
  
  return (
    <footer className="bg-[#061021] text-gray-400 py-12 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-center md:text-left">
          {/* Copyright / Info */}
          <div className={isRTL ? 'md:text-right' : 'md:text-left'}>
            <h3 className="text-[#d4a15c] font-bold text-lg mb-3">
              {isRTL ? 'مؤسسة كريم الديب للمحاماة' : 'Karim Eldib Law Firm'}
            </h3>
            <p className="text-sm text-gray-400 max-w-sm mx-auto md:mx-0">
              {isRTL 
                ? 'خدمات قانونية متكاملة وبلا حدود للأجانب في مصر والمصريين بالخارج.'
                : 'Comprehensive legal services for foreigners in Egypt and Egyptians abroad.'}
            </p>
          </div>
          
          {/* Office Pages Links */}
          <div className={isRTL ? 'md:text-right font-sans' : 'md:text-left font-sans'}>
            <h4 className="text-white font-bold text-base mb-3">
              {isRTL ? 'فروعنا ومكاتبنا المستهدفة' : 'Our Branches & Covered Cities'}
            </h4>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/alexandria" className="text-sm text-gray-400 hover:text-[#d4a15c] transition-colors duration-300">
                {isRTL ? 'المكتب الرئيسي - الإسكندرية' : 'Main Office - Alexandria'}
              </Link>
              <Link to="/sharm-el-sheikh" className="text-sm text-gray-400 hover:text-[#d4a15c] transition-colors duration-300">
                {isRTL ? 'فرع شرم الشيخ' : 'Sharm El Sheikh Branch'}
              </Link>
              <Link to="/cairo" className="text-sm text-gray-400 hover:text-[#d4a15c] transition-colors duration-300">
                {isRTL ? 'مكتب التمثيل - القاهرة' : 'Representation Office - Cairo'}
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-sm font-sans text-gray-500">
            &copy; {new Date().getFullYear()} {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
