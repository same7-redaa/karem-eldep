import React, { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const EgyptiansAbroad: React.FC = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  useEffect(() => {
    document.title = "محامي المصريين بالخارج | المحامي كريم الديب | Egyptian Lawyer Abroad";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'محامي المصريين بالخارج - المحامي كريم الديب محامي مصري بالخارج متخصص في خدمة المغتربين المصريين. خدمات قانونية شاملة للمصريين في جميع أنحاء العالم. Egyptian lawyer abroad serving Egyptian expats worldwide.');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'محامي المصريين بالخارج, محامي مصري بالخارج, Egyptian lawyer abroad, خدمات قانونية للمغتربين المصريين, محامي مصريين أوروبا, محامي مصريين أمريكا, محامي مصريين الخليج, كريم الديب محامي, المحامي كريم الديب');
    }
  }, []);

  const services = [
    {
      icon: 'fas fa-file-signature',
      title: isRTL ? 'وكالات قانونية وتوثيق' : 'Legal Powers of Attorney & Documentation',
      description: isRTL 
        ? 'إنجاز الوكالات القانونية وتوثيق المستندات للمصريين بالخارج'
        : 'Completing legal powers of attorney and document authentication for Egyptians abroad'
    },
    {
      icon: 'fas fa-home',
      title: isRTL ? 'إدارة العقارات والممتلكات' : 'Property & Asset Management',
      description: isRTL 
        ? 'إدارة وتصرف في العقارات والممتلكات نيابة عن المصريين بالخارج'
        : 'Managing and disposing of real estate and properties on behalf of Egyptians abroad'
    },
    {
      icon: 'fas fa-gavel',
      title: isRTL ? 'التمثيل أمام المحاكم' : 'Court Representation',
      description: isRTL 
        ? 'تمثيل المصريين بالخارج أمام المحاكم المصرية في جميع القضايا'
        : 'Representing Egyptians abroad before Egyptian courts in all cases'
    },
    {
      icon: 'fas fa-heart',
      title: isRTL ? 'قضايا الأحوال الشخصية' : 'Personal Status Cases',
      description: isRTL 
        ? 'إنجاز معاملات الزواج والطلاق والميراث للمصريين بالخارج'
        : 'Completing marriage, divorce, and inheritance procedures for Egyptians abroad'
    },
    {
      icon: 'fas fa-building',
      title: isRTL ? 'الاستثمار في مصر' : 'Investment in Egypt',
      description: isRTL 
        ? 'مساعدة المصريين بالخارج في الاستثمار وتأسيس المشاريع في مصر'
        : 'Helping Egyptians abroad invest and establish projects in Egypt'
    },
    {
      icon: 'fas fa-passport',
      title: isRTL ? 'الخدمات الق领事ية والحكومية' : 'Consular & Government Services',
      description: isRTL 
        ? 'إنجاز المعاملات الحكومية والقنصلية للمصريين بالخارج'
        : 'Completing government and consular procedures for Egyptians abroad'
    }
  ];

  const countries = [
    {
      name: isRTL ? 'الولايات المتحدة الأمريكية' : 'United States',
      icon: 'fas fa-flag-usa',
      color: '#c8a876',
      cities: isRTL ? ['نيويورك', 'لوس أنجلوس', 'شيكاغو', 'واشنطن'] : ['New York', 'Los Angeles', 'Chicago', 'Washington']
    },
    {
      name: isRTL ? 'ألمانيا' : 'Germany',
      icon: 'fas fa-landmark',
      color: '#c8a876',
      cities: isRTL ? ['برلين', 'ميونيخ', 'فرانكفورت', 'هامبورغ'] : ['Berlin', 'Munich', 'Frankfurt', 'Hamburg']
    },
    {
      name: isRTL ? 'المملكة العربية السعودية' : 'Saudi Arabia',
      icon: 'fas fa-mosque',
      color: '#c8a876',
      cities: isRTL ? ['الرياض', 'جدة', 'الدمام', 'مكة المكرمة'] : ['Riyadh', 'Jeddah', 'Dammam', 'Makkah']
    },
    {
      name: isRTL ? 'الإمارات العربية المتحدة' : 'UAE',
      icon: 'fas fa-city',
      color: '#c8a876',
      cities: isRTL ? ['دبي', 'أبوظبي', 'الشارقة', 'عجمان'] : ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman']
    },
    {
      name: isRTL ? 'كندا' : 'Canada',
      icon: 'fas fa-map-marker-alt',
      color: '#c8a876',
      cities: isRTL ? ['تورنتو', 'فانكوفر', 'مونتريال', 'أوتاوا'] : ['Toronto', 'Vancouver', 'Montreal', 'Ottawa']
    },
    {
      name: isRTL ? 'المملكة المتحدة' : 'United Kingdom',
      icon: 'fas fa-university',
      color: '#c8a876',
      cities: isRTL ? ['لندن', 'مانشستر', 'برمنغهام', 'ليفربول'] : ['London', 'Manchester', 'Birmingham', 'Liverpool']
    },
    {
      name: isRTL ? 'الكويت' : 'Kuwait',
      icon: 'fas fa-building',
      color: '#c8a876',
      cities: isRTL ? ['الكويت', 'حولي', 'السالمية', 'الفروانية'] : ['Kuwait City', 'Hawalli', 'Salmiya', 'Farwaniya']
    },
    {
      name: isRTL ? 'قطر' : 'Qatar',
      icon: 'fas fa-city',
      color: '#c8a876',
      cities: isRTL ? ['الدوحة', 'الوكرة', 'الخور', 'الريان'] : ['Doha', 'Al Wakrah', 'Al Khor', 'Al Rayyan']
    },
    {
      name: isRTL ? 'أستراليا' : 'Australia',
      icon: 'fas fa-globe-asia',
      color: '#c8a876',
      cities: isRTL ? ['سيدني', 'ملبورن', 'بريسبان', 'بيرث'] : ['Sydney', 'Melbourne', 'Brisbane', 'Perth']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: isRTL ? 'التواصل الأولي' : 'Initial Contact',
      description: isRTL ? 'تواصل معنا عبر الهاتف أو البريد الإلكتروني أو واتساب' : 'Contact us via phone, email, or WhatsApp'
    },
    {
      step: '02',
      title: isRTL ? 'تقييم الحالة' : 'Case Assessment',
      description: isRTL ? 'نقيم حالتك ونحدد الخدمات المطلوبة والإجراءات اللازمة' : 'We assess your case and determine required services and procedures'
    },
    {
      step: '03',
      title: isRTL ? 'التوكيل والتفويض' : 'Authorization & Delegation',
      description: isRTL ? 'نحصل على التوكيل اللازم لتمثيلك قانونياً في مصر' : 'We obtain necessary authorization to represent you legally in Egypt'
    },
    {
      step: '04',
      title: isRTL ? 'تنفيذ الخدمة' : 'Service Execution',
      description: isRTL ? 'ننفذ الخدمة المطلوبة ونتابع الإجراءات حتى الإنجاز' : 'We execute the required service and follow up procedures until completion'
    },
    {
      step: '05',
      title: isRTL ? 'التقارير والمتابعة' : 'Reporting & Follow-up',
      description: isRTL ? 'نرسل لك تقارير دورية ونتابع معك حتى إتمام كل شيء' : 'We send you periodic reports and follow up with you until everything is completed'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0b1a33] text-gray-200 py-20" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#c8a876]">
            {isRTL ? 'محامي المصريين بالخارج' : 'Lawyer for Egyptians Abroad'}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            {isRTL 
              ? 'المحامي كريم الديب - محامي مصري بالخارج متخصص في تقديم الخدمات القانونية للمغتربين المصريين في جميع أنحاء العالم. نحن جسرك القانوني مع مصر.'
              : 'Lawyer Karim El-Dib - Egyptian lawyer abroad specialized in providing legal services for Egyptian expats worldwide. We are your legal bridge with Egypt.'
            }
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            <span className="bg-[#c8a876] text-[#0b1a33] px-6 py-3 rounded-full font-semibold">
              {isRTL ? 'المحامي كريم الديب' : 'Lawyer Karim El-Dib'}
            </span>
            <span className="bg-white text-[#0b1a33] px-6 py-3 rounded-full font-semibold">
              {isRTL ? 'خدمات عالمية' : 'Global Services'}
            </span>
          </div>
        </div>

        {/* الخدمات المقدمة */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#c8a876] mb-12">
            {isRTL ? 'خدماتنا للمصريين بالخارج' : 'Our Services for Egyptians Abroad'}
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

        {/* الدول التي نخدمها */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#c8a876] mb-4">
            {isRTL ? 'نخدم المصريين في جميع أنحاء العالم' : 'We Serve Egyptians Worldwide'}
          </h2>
          <p className="text-center text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            {isRTL 
              ? 'خدماتنا القانونية متاحة للمصريين المقيمين في جميع دول العالم'
              : 'Our legal services are available to Egyptians residing in all countries worldwide'
            }
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((country, index) => (
              <div 
                key={index} 
                className="bg-[#1a2d4d] p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-[#c8a876]/20"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-[#c8a876]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className={`${country.icon} text-2xl text-[#c8a876]`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{country.name}</h3>
                  </div>
                </div>
                <div className="space-y-2">
                  {country.cities.map((city, cityIndex) => (
                    <div key={cityIndex} className="flex items-center gap-2 text-gray-300">
                      <i className="fas fa-check-circle text-[#c8a876] text-sm"></i>
                      <span className="text-sm">{city}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 bg-[#1a2d4d] p-8 rounded-lg">
            <i className="fas fa-globe text-5xl text-[#c8a876] mb-4"></i>
            <p className="text-gray-300 text-xl font-semibold">
              {isRTL 
                ? '+ جميع البلدان الأخرى حول العالم' 
                : '+ All Other Countries Worldwide'
              }
            </p>
            <p className="text-gray-400 mt-2">
              {isRTL 
                ? 'نقدم خدماتنا للمصريين في كل مكان'
                : 'We serve Egyptians everywhere'
              }
            </p>
          </div>
        </div>

        {/* خطوات العمل */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#c8a876] mb-12">
            {isRTL ? 'كيف نعمل معك؟' : 'How Do We Work With You?'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
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
            {isRTL ? 'قصص نجاح عملائنا المصريين بالخارج' : 'Success Stories of Our Egyptian Clients Abroad'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0b1a33] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">
                {isRTL ? 'حل نزاع ميراث معقد' : 'Resolving Complex Inheritance Dispute'}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {isRTL 
                  ? 'ساعدنا طبيب مصري يعمل في ألمانيا في حل نزاع ميراث معقد واسترداد حقوقه كاملة في عقار بالقاهرة.'
                  : 'We helped an Egyptian doctor working in Germany resolve a complex inheritance dispute and recover his full rights in a Cairo property.'
                }
              </p>
              <p className="text-[#c8a876] font-semibold">
                {isRTL ? '- د. أحمد محمود، طبيب في برلين' : '- Dr. Ahmed Mahmoud, Doctor in Berlin'}
              </p>
            </div>
            
            <div className="bg-[#0b1a33] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">
                {isRTL ? 'تأسيس شركة استثمارية' : 'Establishing Investment Company'}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {isRTL 
                  ? 'نجحنا في تأسيس شركة استثمارية لمهندس مصري في الإمارات، ومتابعة جميع إجراءاتها القانونية.'
                  : 'We successfully established an investment company for an Egyptian engineer in the UAE, following up on all its legal procedures.'
                }
              </p>
              <p className="text-[#c8a876] font-semibold">
                {isRTL ? '- م. خالد عبدالله، مهندس في دبي' : '- Eng. Khaled Abdullah, Engineer in Dubai'}
              </p>
            </div>
          </div>
        </div>

        {/* الأسئلة الشائعة */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#c8a876] mb-12">
            {isRTL ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </h2>
          <div className="space-y-6">
            {[
              {
                q: isRTL ? 'هل يمكنني توكيل المحامي كريم الديب وأنا في الخارج؟' : 'Can I authorize Lawyer Karim El-Dib while I am abroad?',
                a: isRTL ? 'نعم، يمكنك توكيلنا من خلال القنصليات المصرية أو عبر التوكيل الإلكتروني المعتمد.' : 'Yes, you can authorize us through Egyptian consulates or through certified electronic authorization.'
              },
              {
                q: isRTL ? 'ما تكلفة الخدمات القانونية للمصريين بالخارج؟' : 'What is the cost of legal services for Egyptians abroad?',
                a: isRTL ? 'التكلفة تختلف حسب نوع الخدمة ومدى تعقيدها. نقدم استشارة مجانية أولى لتحديد التكلفة.' : 'The cost varies depending on the type of service and its complexity. We provide a free initial consultation to determine the cost.'
              },
              {
                q: isRTL ? 'كم يستغرق إنجاز المعاملات القانونية؟' : 'How long does it take to complete legal procedures?',
                a: isRTL ? 'المدة تختلف حسب نوع المعاملة، لكننا نضمن أسرع إنجاز ممكن مع إرسال تقارير دورية.' : 'The duration varies depending on the type of transaction, but we guarantee the fastest possible completion with periodic reports.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-[#1a2d4d] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">{faq.q}</h3>
                <p className="text-gray-300">{faq.a}</p>
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
              ? 'المحامي كريم الديب - محامي مصري بالخارج جاهز لخدمتك أينما كنت في العالم. تواصل معنا الآن.'
              : 'Lawyer Karim El-Dib - Egyptian lawyer abroad ready to serve you wherever you are in the world. Contact us now.'
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
              href="https://wa.me/201234567890" 
              className="bg-white text-[#0b1a33] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors duration-300"
            >
              {isRTL ? 'واتساب الآن' : 'WhatsApp Now'}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EgyptiansAbroad;