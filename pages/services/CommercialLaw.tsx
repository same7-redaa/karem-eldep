import React, { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const CommercialLaw: React.FC = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  useEffect(() => {
    document.title = "محامي قانون تجاري | تأسيس شركات في مصر | المحامي كريم الديب | Commercial Lawyer Egypt";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'محامي قانون تجاري - المحامي كريم الديب خبير في تأسيس الشركات والقانون التجاري. تأسيس شركات للأجانب والمصريين، عقود تجارية، استثمار. Commercial lawyer Egypt, company formation, business law.');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'تأسيس شركات في مصر, محامي قانون تجاري, تأسيس شركة مصر, محامي شركات, عقود تجارية, محامي استثمار, تأسيس شركة أجنبية مصر, Commercial lawyer Egypt, Company formation Egypt, Business lawyer Cairo, كريم الديب محامي');
    }
  }, []);

  const services = [
    {
      icon: 'fas fa-building',
      title: isRTL ? 'تأسيس جميع أنواع الشركات' : 'Establishing All Types of Companies',
      description: isRTL 
        ? 'تأسيس شركات المساهمة، ذات المسؤولية المحدودة، التضامن، والتوصية البسيطة والأشخاص'
        : 'Establishing joint stock companies, limited liability, partnership, and simple recommendation companies'
    },
    {
      icon: 'fas fa-globe',
      title: isRTL ? 'الشركات الأجنبية والاستثمار' : 'Foreign Companies & Investment',
      description: isRTL 
        ? 'تأسيس الشركات الأجنبية في مصر وفقاً لقانون الاستثمار الجديد'
        : 'Establishing foreign companies in Egypt according to the new investment law'
    },
    {
      icon: 'fas fa-file-contract',
      title: isRTL ? 'صياغة العقود التجارية' : 'Commercial Contract Drafting',
      description: isRTL 
        ? 'صياغة ومراجعة جميع أنواع العقود التجارية والاتفاقيات التجارية'
        : 'Drafting and reviewing all types of commercial contracts and commercial agreements'
    },
    {
      icon: 'fas fa-handshake',
      title: isRTL ? 'عمليات الاندماج والاستحواذ' : 'Mergers & Acquisitions',
      description: isRTL 
        ? 'استشارات قانونية في عمليات دمج الشركات والاستحواذ والتحالفات الاستراتيجية'
        : 'Legal consultations in corporate mergers, acquisitions, and strategic alliances'
    },
    {
      icon: 'fas fa-chart-line',
      title: isRTL ? 'الامتثال والحوكمة' : 'Compliance & Governance',
      description: isRTL 
        ? 'ضمان الامتثال للقوانين التجارية وتطبيق معايير الحوكمة الرشيدة'
        : 'Ensuring compliance with commercial laws and implementing good governance standards'
    },
    {
      icon: 'fas fa-balance-scale',
      title: isRTL ? 'فض النزاعات التجارية' : 'Commercial Dispute Resolution',
      description: isRTL 
        ? 'حل النزاعات التجارية بين الشركات والشركاء والموردين'
        : 'Resolving commercial disputes between companies, partners, and suppliers'
    }
  ];

  const companyTypes = [
    {
      type: isRTL ? 'شركة مساهمة' : 'Joint Stock Company',
      minCapital: isRTL ? '250,000 جنيه' : 'EGP 250,000',
      features: isRTL 
        ? ['مسؤولية محدودة', 'قابلة للاكتتاب العام', 'سهولة نقل الأسهم']
        : ['Limited liability', 'Public subscription capable', 'Easy share transfer']
    },
    {
      type: isRTL ? 'شركة ذات مسؤولية محدودة' : 'Limited Liability Company',
      minCapital: isRTL ? '50,000 جنيه' : 'EGP 50,000',
      features: isRTL 
        ? ['مسؤولية محدودة', 'مرونة في الإدارة', 'حماية الأصول الشخصية']
        : ['Limited liability', 'Management flexibility', 'Personal asset protection']
    },
    {
      type: isRTL ? 'شركة تضامن' : 'Partnership Company',
      minCapital: isRTL ? 'لا يوجد حد أدنى' : 'No minimum',
      features: isRTL 
        ? ['مسؤولية تضامنية', 'سهولة التأسيس', 'مرونة في العمليات']
        : ['Joint liability', 'Easy establishment', 'Operational flexibility']
    },
    {
      type: isRTL ? 'شركة توصية بسيطة' : 'Simple Partnership',
      minCapital: isRTL ? 'حسب الاتفاق' : 'As agreed',
      features: isRTL 
        ? ['شركاء عاملون وموصون', 'مسؤولية متنوعة', 'مرونة في رأس المال']
        : ['Active & silent partners', 'Varied liability', 'Capital flexibility']
    }
  ];

  const steps = [
    {
      step: '01',
      title: isRTL ? 'الاستشارة الأولية' : 'Initial Consultation',
      description: isRTL ? 'تحديد نوع الشركة المناسب ورأس المال والأنشطة' : 'Determining suitable company type, capital, and activities'
    },
    {
      step: '02',
      title: isRTL ? 'إعداد المستندات' : 'Document Preparation',
      description: isRTL ? 'إعداد عقد التأسيس والنظام الأساسي وجميع المستندات' : 'Preparing incorporation contract, articles of association, and all documents'
    },
    {
      step: '03',
      title: isRTL ? 'التوثيق والتسجيل' : 'Authentication & Registration',
      description: isRTL ? 'توثيق العقود وتسجيل الشركة في السجل التجاري' : 'Authenticating contracts and registering the company in commercial registry'
    },
    {
      step: '04',
      title: isRTL ? 'الحصول على التراخيص' : 'Obtaining Licenses',
      description: isRTL ? 'استخراج جميع التراخيص والتصاريح اللازمة للعمل' : 'Obtaining all necessary licenses and permits for operation'
    },
    {
      step: '05',
      title: isRTL ? 'بدء النشاط' : 'Starting Operations',
      description: isRTL ? 'مساعدتك في بدء النشاط التجاري والامتثال القانوني' : 'Helping you start business operations and legal compliance'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0b1a33] text-gray-200 py-20" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#c8a876]">
            {isRTL ? 'محامي قانون تجاري وتأسيس شركات' : 'Commercial Law & Company Formation Lawyer'}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            {isRTL 
              ? 'المحامي كريم الديب - خبير في القانون التجاري وتأسيس الشركات في مصر. نساعد المصريين والأجانب في تأسيس شركاتهم وتنمية أعمالهم وفقاً للقانون المصري.'
              : 'Lawyer Karim El-Dib - Expert in commercial law and company formation in Egypt. We help Egyptians and foreigners establish their companies and grow their businesses according to Egyptian law.'
            }
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            <span className="bg-[#c8a876] text-[#0b1a33] px-6 py-3 rounded-full font-semibold">
              {isRTL ? 'خبير تأسيس الشركات' : 'Company Formation Expert'}
            </span>
            <span className="bg-white text-[#0b1a33] px-6 py-3 rounded-full font-semibold">
              {isRTL ? '+500 شركة تأسست' : '+500 Companies Established'}
            </span>
          </div>
        </div>

        {/* خدمات القانون التجاري */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#c8a876] mb-12">
            {isRTL ? 'خدمات القانون التجاري' : 'Commercial Law Services'}
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

        {/* أنواع الشركات */}
        <div className="bg-[#1a2d4d] rounded-lg p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#c8a876] mb-12">
            {isRTL ? 'أنواع الشركات التي نؤسسها' : 'Types of Companies We Establish'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyTypes.map((company, index) => (
              <div key={index} className="bg-[#0b1a33] p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-[#c8a876] mb-4">{company.type}</h3>
                <div className="mb-4">
                  <span className="text-white font-semibold">{isRTL ? 'رأس المال الأدنى: ' : 'Minimum Capital: '}</span>
                  <span className="text-gray-300">{company.minCapital}</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">{isRTL ? 'المميزات:' : 'Features:'}</h4>
                  <ul className="space-y-1">
                    {company.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 flex items-center gap-2">
                        <i className="fas fa-check text-[#c8a876] text-sm"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* خطوات تأسيس الشركة */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#c8a876] mb-12">
            {isRTL ? 'خطوات تأسيس الشركة' : 'Company Formation Steps'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#c8a876] rounded-full flex items-center justify-center text-[#0b1a33] font-bold text-xl mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* قصص نجاح */}
        <div className="bg-[#1a2d4d] rounded-lg p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#c8a876] mb-12">
            {isRTL ? 'قصص نجاح في تأسيس الشركات' : 'Success Stories in Company Formation'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0b1a33] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">
                {isRTL ? 'شركة تكنولوجيا ناشئة' : 'Tech Startup Company'}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {isRTL 
                  ? 'ساعدنا مجموعة من المهندسين الشباب في تأسيس شركة تكنولوجيا ناشئة، وحصلت على استثمارات بقيمة 5 مليون جنيه في السنة الأولى.'
                  : 'We helped a group of young engineers establish a tech startup company that received EGP 5 million in investments in its first year.'
                }
              </p>
              <p className="text-[#c8a876] font-semibold">
                {isRTL ? '- شركة تك إيجيبت للتكنولوجيا' : '- Tech Egypt Technology Company'}
              </p>
            </div>
            
            <div className="bg-[#0b1a33] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">
                {isRTL ? 'شركة استيراد وتصدير دولية' : 'International Import/Export Company'}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {isRTL 
                  ? 'أسسنا شركة استيراد وتصدير لمستثمر ألماني، وأصبحت من أكبر الشركات في مجالها خلال 3 سنوات.'
                  : 'We established an import/export company for a German investor, which became one of the largest companies in its field within 3 years.'
                }
              </p>
              <p className="text-[#c8a876] font-semibold">
                {isRTL ? '- شركة يورو تريد إيجيبت' : '- Euro Trade Egypt Company'}
              </p>
            </div>
          </div>
        </div>

        {/* الأسعار والباقات */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#c8a876] mb-12">
            {isRTL ? 'باقات تأسيس الشركات' : 'Company Formation Packages'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: isRTL ? 'الباقة الأساسية' : 'Basic Package',
                price: isRTL ? '15,000 جنيه' : 'EGP 15,000',
                features: isRTL 
                  ? ['تأسيس الشركة', 'السجل التجاري', 'البطاقة الضريبية', 'التأمينات الاجتماعية']
                  : ['Company establishment', 'Commercial registry', 'Tax card', 'Social insurance']
              },
              {
                name: isRTL ? 'الباقة المتقدمة' : 'Advanced Package',
                price: isRTL ? '25,000 جنيه' : 'EGP 25,000',
                features: isRTL 
                  ? ['كل ما في الأساسية', 'التراخيص المهنية', 'فتح حساب بنكي', 'استشارات قانونية 6 أشهر']
                  : ['Everything in Basic', 'Professional licenses', 'Bank account opening', '6 months legal consultations']
              },
              {
                name: isRTL ? 'الباقة الشاملة' : 'Comprehensive Package',
                price: isRTL ? '40,000 جنيه' : 'EGP 40,000',
                features: isRTL 
                  ? ['كل ما في المتقدمة', 'خدمات محاسبية سنة', 'دعم قانوني مستمر', 'استشارات ضريبية']
                  : ['Everything in Advanced', '1 year accounting services', 'Continuous legal support', 'Tax consultations']
              }
            ].map((package_, index) => (
              <div key={index} className={`p-8 rounded-lg ${index === 1 ? 'bg-[#c8a876] text-[#0b1a33]' : 'bg-[#1a2d4d] text-white'}`}>
                <h3 className="text-2xl font-bold mb-4">{package_.name}</h3>
                <div className="text-3xl font-bold mb-6">{package_.price}</div>
                <ul className="space-y-3">
                  {package_.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <i className={`fas fa-check ${index === 1 ? 'text-[#0b1a33]' : 'text-[#c8a876]'}`}></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full mt-8 py-3 rounded-full font-semibold transition-colors duration-300 ${
                  index === 1 
                    ? 'bg-[#0b1a33] text-white hover:bg-gray-800' 
                    : 'bg-[#c8a876] text-[#0b1a33] hover:bg-white'
                }`}>
                  {isRTL ? 'اختر الباقة' : 'Choose Package'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#c8a876] to-[#b8956a] rounded-lg p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b1a33] mb-6">
            {isRTL ? 'جاهز لتأسيس شركتك؟' : 'Ready to Establish Your Company?'}
          </h2>
          <p className="text-xl text-[#0b1a33] mb-8 max-w-3xl mx-auto">
            {isRTL 
              ? 'المحامي كريم الديب جاهز لمساعدتك في تأسيس شركتك وبدء رحلة نجاحك التجاري في مصر.'
              : 'Lawyer Karim El-Dib is ready to help you establish your company and start your commercial success journey in Egypt.'
            }
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#contact" 
              className="bg-[#0b1a33] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors duration-300"
            >
              {isRTL ? 'ابدأ تأسيس شركتك' : 'Start Your Company Formation'}
            </a>
            <a 
              href="tel:+201234567890" 
              className="bg-white text-[#0b1a33] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors duration-300"
            >
              {isRTL ? 'اتصل للاستشارة' : 'Call for Consultation'}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CommercialLaw;