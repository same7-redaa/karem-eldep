import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const SocialButtons: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: 'fab fa-whatsapp',
      url: 'https://wa.me/201223767592',
      color: '#25D366',
      label: isRTL ? 'واتساب' : 'WhatsApp'
    },
    {
      name: 'Phone',
      icon: 'fas fa-phone',
      url: 'tel:+201223767592',
      color: '#34B7F1',
      label: isRTL ? 'اتصال' : 'Call'
    },
    {
      name: 'Facebook',
      icon: 'fab fa-facebook-f',
      url: 'https://facebook.com/karim.eldib.lawyer',
      color: '#1877F2',
      label: isRTL ? 'فيسبوك' : 'Facebook'
    },
    {
      name: 'Instagram',
      icon: 'fab fa-instagram',
      url: 'https://instagram.com/karim.eldib.lawyer',
      color: '#E4405F',
      label: isRTL ? 'انستجرام' : 'Instagram'
    },
    {
      name: 'TikTok',
      icon: 'fab fa-tiktok',
      url: 'https://tiktok.com/@karim.eldib.lawyer',
      color: '#000000',
      label: isRTL ? 'تيك توك' : 'TikTok'
    },
    {
      name: 'Email',
      icon: 'fas fa-envelope',
      url: 'mailto:info@ke-lawyer.com',
      color: '#EA4335',
      label: isRTL ? 'بريد إلكتروني' : 'Email'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`fixed bottom-6 z-[9999] ${isRTL ? 'left-6' : 'right-6'}`}>
      {/* الأزرار الإضافية */}
      {isExpanded && (
        <div className="flex flex-col items-center space-y-3 mb-4">
          {socialLinks.slice(1).reverse().map((social, index) => (
            <button
              key={social.name}
              onClick={() => handleSocialClick(social.url)}
              className="flex items-center justify-center text-white rounded-full w-12 h-12 shadow-lg transition-all duration-300 transform hover:scale-110"
              style={{
                backgroundColor: social.color,
                opacity: isExpanded ? 1 : 0,
                transform: isExpanded ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${index * 100}ms`
              }}
              title={social.label}
            >
              <i className={`${social.icon} text-lg`}></i>
            </button>
          ))}
        </div>
      )}

      {/* الزر الرئيسي */}
      <button
        onClick={toggleExpanded}
        className={`flex items-center justify-center bg-[#25D366] text-white rounded-full w-16 h-16 shadow-2xl hover:bg-[#20BA5A] transition-all duration-300 transform hover:scale-110 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{
          transform: `${isVisible ? 'translateY(0)' : 'translateY(40px)'} ${isExpanded ? 'rotate(45deg)' : 'rotate(0deg)'}`
        }}
        title={isRTL ? (isExpanded ? 'إغلاق' : 'فتح قائمة التواصل') : (isExpanded ? 'Close' : 'Open social menu')}
      >
        {!isExpanded ? (
          <i className="fab fa-whatsapp text-4xl"></i>
        ) : (
          <i className="fas fa-times text-2xl"></i>
        )}
      </button>

      {/* معلومات التواصل */}
      {isExpanded && (
        <div 
          className={`absolute ${isRTL ? 'left-20' : 'right-20'} bottom-0 bg-white rounded-lg shadow-xl p-4 min-w-[250px] transition-all duration-300`}
          style={{
            opacity: isExpanded ? 1 : 0,
            transform: isExpanded ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <h3 className="font-bold text-[#0b1a33] mb-2 text-center">
            {isRTL ? 'تواصل معنا' : 'Contact Us'}
          </h3>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <i className="fas fa-phone text-[#c8a876]"></i>
              <span>+20 122 376 7592</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-envelope text-[#c8a876]"></i>
              <span>info@ke-lawyer.com</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-clock text-[#c8a876]"></i>
              <span>{isRTL ? '24/7 متاح' : '24/7 Available'}</span>
            </div>
          </div>
        </div>
      )}

      {/* خلفية شفافة */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/20 z-[-1]"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </div>
  );
};

export default SocialButtons;