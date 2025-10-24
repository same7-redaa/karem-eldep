import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SchemaMarkup from '../components/SchemaMarkup';

const LawyerProfile: React.FC = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  useEffect(() => {
    document.title = "المحامي كريم الديب | خبرة دولية في القانون المصري | Karim El-Dib Lawyer";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'المحامي كريم الديب - خبرة واسعة في القانون المصري والدولي. محامي مصري بالخارج متخصص في خدمة المصريين بالخارج والأجانب في مصر. Karim El-Dib - Egyptian lawyer with international expertise.');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'كريم الديب محامي, المحامي كريم الديب, محامي مصري بالخارج, Karim El-Dib lawyer, Egyptian lawyer abroad, محامي أجانب في مصر, محامي المصريين بالخارج');
    }
  }, []);

  return (
    <>
      <SchemaMarkup type="lawyer" />
      <div className="min-h-screen bg-[#0b1a33] text-gray-200 py-20" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-[#c8a876]">
            <img 
              src="https://i.postimg.cc/G3FMRMY4/3.png" 
              alt={isRTL ? "المحامي كريم الديب - محامي مصري بالخارج متخصص في خدمة الأجانب في مصر" : "Lawyer Karim El-Dib - Egyptian lawyer abroad specializing in serving foreigners in Egypt"}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#c8a876]">
            {isRTL ? 'المحامي كريم الديب' : 'Lawyer Karim El-Dib'}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            {isRTL ? 'محامي مصري بالخارج | خبير قانوني دولي' : 'Egyptian Lawyer Abroad | International Legal Expert'}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            <span className="bg-[#c8a876] text-[#0b1a33] px-4 py-2 rounded-full font-semibold">
              {isRTL ? 'محامي أجانب في مصر' : 'Lawyer for Foreigners in Egypt'}
            </span>
            <span className="bg-[#c8a876] text-[#0b1a33] px-4 py-2 rounded-full font-semibold">
              {isRTL ? 'محامي المصريين بالخارج' : 'Lawyer for Egyptians Abroad'}
            </span>
          </div>
        </div>

        {/* المؤهلات والخبرات */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* المؤهلات العلمية */}
          <div className="bg-[#1a2d4d] rounded-lg p-8">
            <h2 className="text-3xl font-bold text-[#c8a876] mb-6">
              {isRTL ? 'المؤهلات العلمية' : 'Academic Qualifications'}
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <i className="fas fa-graduation-cap text-[#c8a876] text-xl mt-1"></i>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {isRTL ? 'ليسانس الحقوق' : 'Bachelor of Law'}
                  </h3>
                  <p className="text-gray-300">
                    {isRTL ? 'جامعة الإسكندرية - كلية الحقوق' : 'Alexandria University - Faculty of Law'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <i className="fas fa-certificate text-[#c8a876] text-xl mt-1"></i>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {isRTL ? 'دبلوم القانون الدولي' : 'International Law Diploma'}
                  </h3>
                  <p className="text-gray-300">
                    {isRTL ? 'معهد الدراسات القانونية الدولية' : 'Institute of International Legal Studies'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <i className="fas fa-award text-[#c8a876] text-xl mt-1"></i>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {isRTL ? 'عضوية نقابة المحامين' : 'Bar Association Membership'}
                  </h3>
                  <p className="text-gray-300">
                    {isRTL ? 'نقابة المحامين المصرية - الإسكندرية' : 'Egyptian Bar Association - Alexandria'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* الخبرات المهنية */}
          <div className="bg-[#1a2d4d] rounded-lg p-8">
            <h2 className="text-3xl font-bold text-[#c8a876] mb-6">
              {isRTL ? 'الخبرات المهنية' : 'Professional Experience'}
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <i className="fas fa-briefcase text-[#c8a876] text-xl mt-1"></i>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {isRTL ? '+15 سنة خبرة قانونية' : '+15 Years Legal Experience'}
                  </h3>
                  <p className="text-gray-300">
                    {isRTL ? 'خبرة واسعة في القانون المصري والدولي' : 'Extensive experience in Egyptian and International Law'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <i className="fas fa-globe text-[#c8a876] text-xl mt-1"></i>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {isRTL ? 'خدمات قانونية دولية' : 'International Legal Services'}
                  </h3>
                  <p className="text-gray-300">
                    {isRTL ? 'متخصص في خدمة المصريين بالخارج والأجانب في مصر' : 'Specialized in serving Egyptians abroad and foreigners in Egypt'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <i className="fas fa-handshake text-[#c8a876] text-xl mt-1"></i>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {isRTL ? '+500 قضية ناجحة' : '+500 Successful Cases'}
                  </h3>
                  <p className="text-gray-300">
                    {isRTL ? 'سجل حافل من النجاحات في مختلف المجالات القانونية' : 'Proven track record of success across various legal fields'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* التخصصات القانونية */}
        <div className="bg-[#1a2d4d] rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-[#c8a876] mb-8 text-center">
            {isRTL ? 'التخصصات القانونية' : 'Legal Specializations'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'fas fa-heart',
                title: isRTL ? 'قانون الأسرة' : 'Family Law',
                desc: isRTL ? 'الزواج، الطلاق، النفقة، حضانة الأطفال' : 'Marriage, Divorce, Alimony, Child Custody'
              },
              {
                icon: 'fas fa-building',
                title: isRTL ? 'القانون التجاري' : 'Commercial Law',
                desc: isRTL ? 'تأسيس الشركات، العقود التجارية' : 'Company Formation, Commercial Contracts'
              },
              {
                icon: 'fas fa-home',
                title: isRTL ? 'قانون العقارات' : 'Real Estate Law',
                desc: isRTL ? 'بيع وشراء العقارات، التطوير العقاري' : 'Property Sales, Real Estate Development'
              },
              {
                icon: 'fas fa-passport',
                title: isRTL ? 'قانون الهجرة' : 'Immigration Law',
                desc: isRTL ? 'الإقامة، الجنسية، تصاريح العمل' : 'Residency, Citizenship, Work Permits'
              },
              {
                icon: 'fas fa-chart-line',
                title: isRTL ? 'قانون الاستثمار' : 'Investment Law',
                desc: isRTL ? 'الاستثمار الأجنبي، قانون المال والأعمال' : 'Foreign Investment, Business Law'
              },
              {
                icon: 'fas fa-balance-scale',
                title: isRTL ? 'التحكيم والوساطة' : 'Arbitration & Mediation',
                desc: isRTL ? 'حل النزاعات البديل، التحكيم الدولي' : 'Alternative Dispute Resolution, International Arbitration'
              }
            ].map((item, index) => (
              <div key={index} className="bg-[#0b1a33] p-6 rounded-lg text-center">
                <i className={`${item.icon} text-3xl text-[#c8a876] mb-4`}></i>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* الجوائز والإنجازات */}
        <div className="bg-[#1a2d4d] rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-[#c8a876] mb-8 text-center">
            {isRTL ? 'الجوائز والإنجازات' : 'Awards & Achievements'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <i className="fas fa-trophy text-5xl text-[#c8a876] mb-4"></i>
              <h3 className="text-2xl font-semibold text-white mb-3">
                {isRTL ? 'أفضل محامي للمصريين بالخارج' : 'Best Lawyer for Egyptians Abroad'}
              </h3>
              <p className="text-gray-300">
                {isRTL ? 'جائزة الاتحاد العربي للمحامين 2023' : 'Arab Lawyers Union Award 2023'}
              </p>
            </div>
            <div className="text-center">
              <i className="fas fa-medal text-5xl text-[#c8a876] mb-4"></i>
              <h3 className="text-2xl font-semibold text-white mb-3">
                {isRTL ? 'التميز في الخدمات القانونية الدولية' : 'Excellence in International Legal Services'}
              </h3>
              <p className="text-gray-300">
                {isRTL ? 'نقابة المحامين المصرية 2022' : 'Egyptian Bar Association 2022'}
              </p>
            </div>
          </div>
        </div>

        {/* شهادات العملاء */}
        <div className="bg-[#1a2d4d] rounded-lg p-8">
          <h2 className="text-3xl font-bold text-[#c8a876] mb-8 text-center">
            {isRTL ? 'شهادات العملاء' : 'Client Testimonials'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0b1a33] p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-[#c8a876] text-xl">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                {isRTL 
                  ? '"المحامي كريم الديب ساعدني كثيراً في حل مشكلتي القانونية وأنا مقيم في الخارج. خدمة احترافية وسرعة في الإنجاز."'
                  : '"Lawyer Karim El-Dib helped me greatly in solving my legal problem while I am residing abroad. Professional service and quick completion."'
                }
              </p>
              <p className="text-[#c8a876] font-semibold">
                {isRTL ? '- أحمد محمد، مقيم في ألمانيا' : '- Ahmed Mohamed, Resident in Germany'}
              </p>
            </div>
            
            <div className="bg-[#0b1a33] p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-[#c8a876] text-xl">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                {isRTL 
                  ? '"خبرة عالية في التعامل مع الأجانب. ساعدني في تأسيس شركتي في مصر بطريقة قانونية سليمة."'
                  : '"High expertise in dealing with foreigners. He helped me establish my company in Egypt in a proper legal manner."'
                }
              </p>
              <p className="text-[#c8a876] font-semibold">
                {isRTL ? '- جون سميث، مستثمر أمريكي' : '- John Smith, American Investor'}
              </p>
            </div>
          </div>
        </div>

      </div>
      </div>
    </>
  );
};

export default LawyerProfile;