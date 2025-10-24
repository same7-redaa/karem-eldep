import React, { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const ForeignersInEgypt: React.FC = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  useEffect(() => {
    document.title = "محامي أجانب في مصر | المحامي كريم الديب | Egyptian Lawyer for Foreigners";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'محامي أجانب في مصر - المحامي كريم الديب خبير في تقديم الخدمات القانونية للأجانب. تأسيس شركات، تصاريح إقامة، عقود. Egyptian lawyer for foreigners providing comprehensive legal services in Egypt.');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'محامي أجانب في مصر, محامي للأجانب بمصر, Egyptian lawyer for foreigners, قانوني أجانب مصر, استشارات قانونية للأجانب, تأسيس شركات للأجانب في مصر, تصاريح إقامة أجانب مصر, كريم الديب محامي, المحامي كريم الديب');
    }
  }, []);

  const services = [
    {
      icon: 'fas fa-building',
      title: isRTL ? 'تأسيس الشركات للأجانب' : 'Company Formation for Foreigners',
      description: isRTL 
        ? 'تأسيس الشركات بجميع أنواعها للأجانب في مصر مع ضمان الامتثال للقوانين المصرية والدولية'
        : 'Establishing companies of all types for foreigners in Egypt while ensuring compliance with Egyptian and international laws'
    },
    {
      icon: 'fas fa-passport',
      title: isRTL ? 'تصاريح الإقامة والعمل' : 'Residence and Work Permits',
      description: isRTL 
        ? 'استخراج وتجديد تصاريح الإقامة وتصاريح العمل للأجانب في مصر'
        : 'Obtaining and renewing residence permits and work permits for foreigners in Egypt'
    },
    {
      icon: 'fas fa-file-contract',
      title: isRTL ? 'صياغة العقود الدولية' : 'International Contract Drafting',
      description: isRTL 
        ? 'صياغة ومراجعة العقود التجارية والاستثمارية للأجانب'
        : 'Drafting and reviewing commercial and investment contracts for foreigners'
    },
    {
      icon: 'fas fa-home',
      title: isRTL ? 'تملك العقارات للأجانب' : 'Property Ownership for Foreigners',
      description: isRTL 
        ? 'استشارات وإجراءات تملك العقارات للأجانب وفقاً للقانون المصري'
        : 'Consultations and procedures for property ownership by foreigners according to Egyptian law'
    },
    {
      icon: 'fas fa-chart-line',
      title: isRTL ? 'الاستثمار الأجنبي' : 'Foreign Investment',
      description: isRTL 
        ? 'استشارات قانونية شاملة للاستثمار الأجنبي في مصر'
        : 'Comprehensive legal consultations for foreign investment in Egypt'
    },
    {
      icon: 'fas fa-gavel',
      title: isRTL ? 'التمثيل القانوني أمام المحاكم' : 'Legal Representation in Courts',
      description: isRTL 
        ? 'تمثيل الأجانب أمام المحاكم المصرية في جميع أنواع القضايا'
        : 'Representing foreigners before Egyptian courts in all types of cases'
    }
  ];

  const whyChooseUs = [
    {
      title: isRTL ? 'خبرة دولية واسعة' : 'Extensive International Experience',
      description: isRTL 
        ? 'أكثر من 15 سنة في خدمة الأجانب في مصر'
        : 'More than 15 years serving foreigners in Egypt'
    },
    {
      title: isRTL ? 'فهم عميق للقوانين' : 'Deep Understanding of Laws',
      description: isRTL 
        ? 'إتقان القانون المصري والقوانين الدولية'
        : 'Mastery of Egyptian law and international laws'
    },
    {
      title: isRTL ? 'خدمات باللغات المتعددة' : 'Multilingual Services',
      description: isRTL 
        ? 'نقدم خدماتنا بالعربية والإنجليزية'
        : 'We provide our services in Arabic and English'
    },
    {
      title: isRTL ? 'شبكة علاقات قوية' : 'Strong Network of Relations',
      description: isRTL 
        ? 'علاقات ممتازة مع الجهات الحكومية والسفارات'
        : 'Excellent relations with government agencies and embassies'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0b1a33] text-gray-200 py-20" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#c8a876]">
            {isRTL ? 'محامي أجانب في مصر' : 'Lawyer for Foreigners in Egypt'}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            {isRTL 
              ? 'المحامي كريم الديب - خبير في تقديم الخدمات القانونية المتخصصة للأجانب في مصر. محامي معتمد بخبرة دولية واسعة في خدمة الأجانب والمستثمرين الأجانب في مصر.'
              : 'Lawyer Karim El-Dib - Expert in providing specialized legal services for foreigners in Egypt. Certified lawyer with extensive international experience in serving foreigners and foreign investors in Egypt.'
            }
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            <span className="bg-[#c8a876] text-[#0b1a33] px-6 py-3 rounded-full font-semibold">
              {isRTL ? 'كريم الديب محامي' : 'Karim El-Dib Lawyer'}
            </span>
            <span className="bg-white text-[#0b1a33] px-6 py-3 rounded-full font-semibold">
              {isRTL ? 'خبرة +15 سنة' : '+15 Years Experience'}
            </span>
          </div>
        </div>

        {/* الخدمات المقدمة */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#c8a876] mb-12">
            {isRTL ? 'خدماتنا للأجانب في مصر' : 'Our Services for Foreigners in Egypt'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-[#1a2d4d] p-8 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
                <i className={`${service.icon} text-4xl text-[#c8a876] mb-6 block`}></i>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* لماذا تختار المحامي كريم الديب */}
        <div className="bg-[#1a2d4d] rounded-lg p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#c8a876] mb-12">
            {isRTL ? 'لماذا تختار المحامي كريم الديب؟' : 'Why Choose Lawyer Karim El-Dib?'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#c8a876] rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-check text-[#0b1a33] text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* قصص نجاح */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#c8a876] mb-12">
            {isRTL ? 'قصص نجاح لعملائنا الأجانب' : 'Success Stories of Our Foreign Clients'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1a2d4d] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">
                {isRTL ? 'تأسيس شركة استثمارية أمريكية' : 'Establishing American Investment Company'}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {isRTL 
                  ? 'ساعدنا مستثمر أمريكي في تأسيس شركة استثمارية في القاهرة الجديدة برأس مال 2 مليون دولار، مع الحصول على جميع التصاريح اللازمة في وقت قياسي.'
                  : 'We helped an American investor establish an investment company in New Cairo with a capital of $2 million, obtaining all necessary permits in record time.'
                }
              </p>
              <p className="text-[#c8a876] font-semibold">
                {isRTL ? '- مايكل جونسون، مستثمر أمريكي' : '- Michael Johnson, American Investor'}
              </p>
            </div>
            
            <div className="bg-[#1a2d4d] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">
                {isRTL ? 'حل نزاع عقاري معقد' : 'Resolving Complex Real Estate Dispute'}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {isRTL 
                  ? 'نجحنا في حل نزاع عقاري معقد لمستثمر ألماني، وضمنا له استرداد حقوقه كاملة مع التعويضات المناسبة.'
                  : 'We successfully resolved a complex real estate dispute for a German investor, ensuring full recovery of his rights with appropriate compensation.'
                }
              </p>
              <p className="text-[#c8a876] font-semibold">
                {isRTL ? '- هانز مولر، مستثمر ألماني' : '- Hans Müller, German Investor'}
              </p>
            </div>
          </div>
        </div>

        {/* المناطق التي نخدمها */}
        <div className="bg-[#1a2d4d] rounded-lg p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#c8a876] mb-8">
            {isRTL ? 'نخدم الأجانب في جميع أنحاء مصر' : 'We Serve Foreigners Throughout Egypt'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { name: isRTL ? 'القاهرة' : 'Cairo', icon: 'fas fa-city' },
              { name: isRTL ? 'الإسكندرية' : 'Alexandria', icon: 'fas fa-water' },
              { name: isRTL ? 'شرم الشيخ' : 'Sharm El Sheikh', icon: 'fas fa-umbrella-beach' },
              { name: isRTL ? 'الغردقة' : 'Hurghada', icon: 'fas fa-fish' },
              { name: isRTL ? 'الساحل الشمالي' : 'North Coast', icon: 'fas fa-waves' },
              { name: isRTL ? 'العين السخنة' : 'Ain Sokhna', icon: 'fas fa-mountain' },
              { name: isRTL ? 'العاصمة الإدارية' : 'New Capital', icon: 'fas fa-building' },
              { name: isRTL ? 'جميع المحافظات' : 'All Governorates', icon: 'fas fa-map-marked-alt' }
            ].map((location, index) => (
              <div key={index} className="text-center">
                <i className={`${location.icon} text-3xl text-[#c8a876] mb-3`}></i>
                <h3 className="text-white font-semibold">{location.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#c8a876] to-[#b8956a] rounded-lg p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b1a33] mb-6">
            {isRTL ? 'هل تحتاج مساعدة قانونية في مصر؟' : 'Do You Need Legal Help in Egypt?'}
          </h2>
          <p className="text-xl text-[#0b1a33] mb-8 max-w-3xl mx-auto">
            {isRTL 
              ? 'المحامي كريم الديب جاهز لمساعدتك في جميع احتياجاتك القانونية كأجنبي في مصر. اتصل بنا الآن للحصول على استشارة مجانية.'
              : 'Lawyer Karim El-Dib is ready to help you with all your legal needs as a foreigner in Egypt. Contact us now for a free consultation.'
            }
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#contact" 
              className="bg-[#0b1a33] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors duration-300"
            >
              {isRTL ? 'احجز استشارة مجانية' : 'Book Free Consultation'}
            </a>
            <a 
              href="tel:+201234567890" 
              className="bg-white text-[#0b1a33] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors duration-300"
            >
              {isRTL ? 'اتصل الآن' : 'Call Now'}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ForeignersInEgypt;