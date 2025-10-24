import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const TeamSection: React.FC = () => {
  const { language, t } = useLanguage();
  const isRTL = language === 'ar';

  const teamMembers = [
    {
      id: 1,
      name: isRTL ? 'المحامي كريم الديب' : 'Lawyer Karim El-Dib',
      title: isRTL ? 'المؤسس والشريك الأول' : 'Founder & Senior Partner',
      image: 'https://i.postimg.cc/G3FMRMY4/3.png',
      specialties: isRTL 
        ? ['القانون الدولي', 'محامي أجانب في مصر', 'محامي المصريين بالخارج'] 
        : ['International Law', 'Lawyer for Foreigners in Egypt', 'Lawyer for Egyptians Abroad'],
      experience: isRTL ? '+15 سنة خبرة' : '+15 Years Experience',
      description: isRTL 
        ? 'محامي مصري بالخارج متخصص في تقديم الخدمات القانونية للمصريين بالخارج والأجانب في مصر'
        : 'Egyptian lawyer abroad specialized in providing legal services for Egyptians abroad and foreigners in Egypt'
    },
    {
      id: 2,
      name: isRTL ? 'المحامي أحمد السيد' : 'Lawyer Ahmed El-Sayed',
      title: isRTL ? 'شريك - القانون التجاري' : 'Partner - Commercial Law',
      image: 'https://i.postimg.cc/x1MfZcP8/lawyer2.jpg',
      specialties: isRTL 
        ? ['القانون التجاري', 'تأسيس الشركات', 'الاستثمار الأجنبي'] 
        : ['Commercial Law', 'Company Formation', 'Foreign Investment'],
      experience: isRTL ? '+12 سنة خبرة' : '+12 Years Experience',
      description: isRTL 
        ? 'خبير في القانون التجاري وتأسيس الشركات للأجانب والمصريين'
        : 'Expert in commercial law and company formation for foreigners and Egyptians'
    },
    {
      id: 3,
      name: isRTL ? 'المحامية فاطمة محمد' : 'Lawyer Fatma Mohamed',
      title: isRTL ? 'محامية أول - قانون الأسرة' : 'Senior Lawyer - Family Law',
      image: 'https://i.postimg.cc/N0h9Lx6K/lawyer3.jpg',
      specialties: isRTL 
        ? ['قانون الأسرة', 'الأحوال الشخصية', 'قضايا النساء'] 
        : ['Family Law', 'Personal Status', 'Women\'s Rights'],
      experience: isRTL ? '+10 سنوات خبرة' : '+10 Years Experience',
      description: isRTL 
        ? 'متخصصة في قانون الأسرة والأحوال الشخصية للمصريين والأجانب'
        : 'Specialized in family law and personal status for Egyptians and foreigners'
    },
    {
      id: 4,
      name: isRTL ? 'المحامي محمد علي' : 'Lawyer Mohamed Ali',
      title: isRTL ? 'محامي - القانون العقاري' : 'Lawyer - Real Estate Law',
      image: 'https://i.postimg.cc/j5DcF8xK/lawyer4.jpg',
      specialties: isRTL 
        ? ['القانون العقاري', 'التطوير العقاري', 'عقارات الأجانب'] 
        : ['Real Estate Law', 'Property Development', 'Foreign Property'],
      experience: isRTL ? '+8 سنوات خبرة' : '+8 Years Experience',
      description: isRTL 
        ? 'خبير في القانون العقاري وتملك الأجانب للعقارات في مصر'
        : 'Expert in real estate law and foreign property ownership in Egypt'
    }
  ];

  return (
    <section className="py-20 bg-[#1a2d4d]" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* العنوان الرئيسي */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#c8a876] mb-6">
            {isRTL ? 'فريق العمل المتميز' : 'Our Distinguished Team'}
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {isRTL 
              ? 'فريق من المحامين المتخصصين والخبراء في مختلف فروع القانون، بقيادة المحامي كريم الديب، محامي مصري بالخارج متخصص في خدمة محامي أجانب في مصر ومحامي المصريين بالخارج'
              : 'A team of specialized lawyers and experts in various branches of law, led by Lawyer Karim El-Dib, an Egyptian lawyer abroad specialized in serving foreigners in Egypt and Egyptians abroad'
            }
          </p>
        </div>

        {/* أعضاء الفريق */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-[#0b1a33] rounded-lg p-6 text-center group hover:transform hover:scale-105 transition-all duration-300">
              
              {/* صورة العضو */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#c8a876] group-hover:border-white transition-colors duration-300">
                <img 
                  src={member.image} 
                  alt={`${member.name} - ${member.title}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // صورة افتراضية في حالة عدم تحميل الصورة
                    (e.target as HTMLImageElement).src = 'https://i.postimg.cc/G3FMRMY4/3.png';
                  }}
                />
              </div>

              {/* معلومات العضو */}
              <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-[#c8a876] font-semibold mb-3">{member.title}</p>
              <p className="text-gray-400 text-sm mb-4">{member.experience}</p>
              
              {/* الوصف */}
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {member.description}
              </p>

              {/* التخصصات */}
              <div className="space-y-2">
                <h4 className="text-white font-semibold text-sm">
                  {isRTL ? 'التخصصات:' : 'Specialties:'}
                </h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.specialties.map((specialty, index) => (
                    <span 
                      key={index}
                      className="bg-[#c8a876] text-[#0b1a33] px-2 py-1 rounded-full text-xs font-semibold"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA للتواصل */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-white mb-4">
            {isRTL ? 'هل تحتاج استشارة قانونية متخصصة؟' : 'Need Specialized Legal Consultation?'}
          </h3>
          <p className="text-gray-300 mb-6">
            {isRTL 
              ? 'تواصل مع فريقنا المتخصص من المحامين لحل جميع قضاياك القانونية'
              : 'Contact our specialized team of lawyers to solve all your legal issues'
            }
          </p>
          <a 
            href="#contact" 
            className="bg-[#c8a876] text-[#0b1a33] px-8 py-3 rounded-full font-semibold hover:bg-white transition-colors duration-300 inline-block"
          >
            {isRTL ? 'احجز استشارة الآن' : 'Book Consultation Now'}
          </a>
        </div>

      </div>
    </section>
  );
};

export default TeamSection;