import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const TeamSection: React.FC = () => {
  const { language, t } = useLanguage();
  const isRTL = language === 'ar';

  const getTextByLanguage = (texts: { ar: string; en: string; fr: string; it: string }) => {
    return texts[language as keyof typeof texts] || texts.en;
  };

  const teamMembers = [
    {
      id: 1,
      name: getTextByLanguage({ar: 'أ/ منة مرسي', en: 'Menna Morsi', fr: 'Menna Morsi', it: 'Menna Morsi'}),
    },
    {
      id: 2,
      name: getTextByLanguage({ar: 'أ/ الحسين النبوي', en: 'Al-Hussein Al-Nabawy', fr: 'Al-Hussein Al-Nabawy', it: 'Al-Hussein Al-Nabawy'}),
    },
    {
      id: 3,
      name: getTextByLanguage({ar: 'أ/ محمد ابراهيم', en: 'Mohamed Ibrahim', fr: 'Mohamed Ibrahim', it: 'Mohamed Ibrahim'}),
    }
  ];

  return (
    <section className="py-20 bg-[#1a2d4d]" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* العنوان الرئيسي */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#c8a876] mb-6">
            {getTextByLanguage({ar: 'فريق العمل', en: 'Our Team', fr: 'Notre Équipe', it: 'Il Nostro Team'})}
          </h2>
        </div>

        {/* أعضاء الفريق */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="relative group"
            >
              {/* الخلفية المتحركة */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#c8a876] via-[#d4a15c] to-[#b8956a] rounded-2xl transform group-hover:scale-105 transition-all duration-500 opacity-0 group-hover:opacity-100 blur-xl"></div>
              
              {/* البطاقة الرئيسية */}
              <div className="relative bg-gradient-to-br from-[#0b1a33] via-[#0e1f3b] to-[#1a2d4d] rounded-2xl p-8 text-center transform group-hover:scale-105 transition-all duration-500 border-2 border-[#c8a876]/30 group-hover:border-[#c8a876] shadow-2xl overflow-hidden">
                
                {/* شكل زخرفي في الخلفية */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#c8a876]/10 rounded-full blur-3xl transform translate-x-16 -translate-y-16 group-hover:bg-[#c8a876]/20 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#d4a15c]/10 rounded-full blur-3xl transform -translate-x-16 translate-y-16 group-hover:bg-[#d4a15c]/20 transition-all duration-500"></div>
                
                {/* أيقونة محامي مميزة */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#c8a876] to-[#b8956a] rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-all duration-500 shadow-xl">
                    <i className="fas fa-balance-scale text-4xl text-[#0b1a33] group-hover:scale-110 transition-transform duration-500"></i>
                  </div>
                  {/* حلقة ديكور */}
                  <div className="absolute inset-0 w-24 h-24 mx-auto border-2 border-[#c8a876] rounded-2xl transform rotate-6 group-hover:rotate-12 transition-all duration-500 opacity-50"></div>
                </div>
                
                {/* الاسم */}
                <h3 className="relative text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#c8a876] via-[#d4a15c] to-[#c8a876] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                  {member.name}
                </h3>
                
                {/* خط فاصل متحرك */}
                <div className="relative mt-4 h-1 bg-gradient-to-r from-transparent via-[#c8a876] to-transparent w-0 group-hover:w-full mx-auto transition-all duration-700"></div>
                
                {/* زخرفة إضافية */}
                <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
                  <i className="fas fa-gavel text-6xl text-[#c8a876]"></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA للتواصل */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-white mb-4">
            {getTextByLanguage({ar: 'هل تحتاج استشارة قانونية متخصصة؟', en: 'Need Specialized Legal Consultation?', fr: 'Besoin d\'une Consultation Juridique Spécialisée?', it: 'Hai bisogno di Consultazione Legale Specializzata?'})}
          </h3>
          <p className="text-gray-300 mb-6">
            {getTextByLanguage({
              ar: 'تواصل مع فريقنا المتخصص من المحامين لحل جميع قضاياك القانونية',
              en: 'Contact our specialized team of lawyers to solve all your legal issues',
              fr: 'Contactez notre équipe spécialisée d\'avocats pour résoudre tous vos problèmes juridiques',
              it: 'Contatta il nostro team specializzato di avvocati per risolvere tutte le tue questioni legali'
            })}
          </p>
          <a 
            href="#contact" 
            className="bg-[#c8a876] text-[#0b1a33] px-8 py-3 rounded-full font-semibold hover:bg-white transition-colors duration-300 inline-block"
          >
            {getTextByLanguage({ar: 'احجز استشارة الآن', en: 'Book Consultation Now', fr: 'Réservez une Consultation Maintenant', it: 'Prenota Consultazione Ora'})}
          </a>
        </div>

      </div>
    </section>
  );
};

export default TeamSection;