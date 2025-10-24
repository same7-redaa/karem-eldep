import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const QuickNavigation: React.FC = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const quickLinks = [
    {
      title: isRTL ? 'محامي أجانب في مصر' : 'Lawyer for Foreigners in Egypt',
      description: isRTL ? 'خدمات قانونية شاملة للأجانب في مصر' : 'Comprehensive legal services for foreigners in Egypt',
      path: '/foreigners-in-egypt',
      icon: 'fas fa-globe',
      gradient: 'from-blue-600 to-blue-800'
    },
    {
      title: isRTL ? 'محامي المصريين بالخارج' : 'Lawyer for Egyptians Abroad',
      description: isRTL ? 'خدمات قانونية للمغتربين المصريين' : 'Legal services for Egyptian expats',
      path: '/egyptians-abroad',
      icon: 'fas fa-plane',
      gradient: 'from-green-600 to-green-800'
    },
    {
      title: isRTL ? 'تأسيس الشركات' : 'Company Formation',
      description: isRTL ? 'تأسيس جميع أنواع الشركات في مصر' : 'Establishing all types of companies in Egypt',
      path: '/commercial-law',
      icon: 'fas fa-building',
      gradient: 'from-purple-600 to-purple-800'
    },
    {
      title: isRTL ? 'قانون الأسرة' : 'Family Law',
      description: isRTL ? 'قضايا الزواج والطلاق والحضانة' : 'Marriage, divorce, and custody cases',
      path: '/family-law',
      icon: 'fas fa-heart',
      gradient: 'from-red-600 to-red-800'
    },
    {
      title: isRTL ? 'المحامي كريم الديب' : 'Lawyer Karim El-Dib',
      description: isRTL ? 'تعرف على خبرات ومؤهلات المحامي' : 'Learn about the lawyer\'s experience and qualifications',
      path: '/lawyer-karim-eldib',
      icon: 'fas fa-user-tie',
      gradient: 'from-yellow-600 to-yellow-800'
    },
    {
      title: isRTL ? 'المقالات القانونية' : 'Legal Articles',
      description: isRTL ? 'مقالات ونصائح قانونية متخصصة' : 'Specialized legal articles and advice',
      path: '/blog',
      icon: 'fas fa-newspaper',
      gradient: 'from-indigo-600 to-indigo-800'
    }
  ];

  return (
    <section className="py-20 bg-[#1a2d4d]" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* العنوان الرئيسي */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#c8a876] mb-6">
            {isRTL ? 'خدماتنا القانونية' : 'Our Legal Services'}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {isRTL 
              ? 'اختر الخدمة التي تحتاجها واحصل على استشارة قانونية متخصصة من المحامي كريم الديب'
              : 'Choose the service you need and get specialized legal consultation from Lawyer Karim El-Dib'
            }
          </p>
        </div>

        {/* الروابط السريعة */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quickLinks.map((link, index) => (
            <Link 
              key={index}
              to={link.path}
              className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-[#0b1a33] to-[#1a2d4d] p-6 hover:transform hover:scale-105 transition-all duration-300 border border-[#c8a876]/20 hover:border-[#c8a876]/50"
            >
              {/* خلفية متحركة */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#c8a876]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* الأيقونة */}
              <div className="relative z-10 mb-4">
                <div className="w-16 h-16 bg-[#c8a876]/10 rounded-lg flex items-center justify-center group-hover:bg-[#c8a876]/20 transition-colors duration-300">
                  <i className={`${link.icon} text-2xl text-[#c8a876]`}></i>
                </div>
              </div>

              {/* العنوان */}
              <h3 className="relative z-10 text-xl font-bold text-white mb-3 group-hover:text-[#c8a876] transition-colors duration-300">
                {link.title}
              </h3>

              {/* الوصف */}
              <p className="relative z-10 text-gray-300 text-sm leading-relaxed mb-4">
                {link.description}
              </p>

              {/* سهم التنقل */}
              <div className="relative z-10 flex items-center text-[#c8a876] group-hover:text-white transition-colors duration-300">
                <span className="text-sm font-semibold">
                  {isRTL ? 'اعرف المزيد' : 'Learn More'}
                </span>
                <i className={`fas fa-arrow-${isRTL ? 'left' : 'right'} ml-2 group-hover:translate-x-1 transition-transform duration-300`}></i>
              </div>

              {/* تأثير الإضاءة */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c8a876] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          ))}
        </div>

        {/* CTA إضافي */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#c8a876]/10 to-[#c8a876]/5 rounded-lg p-8 border border-[#c8a876]/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              {isRTL ? 'هل تحتاج استشارة قانونية خاصة؟' : 'Need Special Legal Consultation?'}
            </h3>
            <p className="text-gray-300 mb-6">
              {isRTL 
                ? 'تواصل مع المحامي كريم الديب مباشرة للحصول على استشارة قانونية متخصصة'
                : 'Contact Lawyer Karim El-Dib directly for specialized legal consultation'
              }
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#contact" 
                className="bg-[#c8a876] text-[#0b1a33] px-8 py-3 rounded-full font-semibold hover:bg-white transition-colors duration-300"
              >
                {isRTL ? 'احجز استشارة' : 'Book Consultation'}
              </a>
              <a 
                href="https://wa.me/201234567890" 
                className="bg-transparent text-[#c8a876] px-8 py-3 rounded-full font-semibold border-2 border-[#c8a876] hover:bg-[#c8a876] hover:text-[#0b1a33] transition-colors duration-300"
              >
                {isRTL ? 'واتساب' : 'WhatsApp'}
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default QuickNavigation;