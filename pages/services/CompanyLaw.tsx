import React, { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const CompanyLaw: React.FC = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  useEffect(() => {
    document.title = "محامي قانون الشركات | المحامي كريم الديب | Company Law Lawyer Egypt";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'محامي قانون الشركات - المحامي كريم الديب خبير في قانون الشركات وتأسيس الشركات والحوكمة المؤسسية. خدمات قانونية شاملة للشركات المحلية والدولية. Company law lawyer Egypt.');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'محامي قانون الشركات, تأسيس شركات مصر, حوكمة الشركات, محامي شركات, قانون الاستثمار, Company law Egypt, Corporate lawyer, كريم الديب محامي, المحامي كريم الديب');
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0b1a33] text-gray-200 py-20" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#c8a876]">
            {isRTL ? 'محامي قانون الشركات' : 'Corporate Law Lawyer'}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            {isRTL 
              ? 'المحامي كريم الديب - خبير في قانون الشركات وتأسيس الشركات والحوكمة المؤسسية. نقدم استشارات قانونية متقدمة للشركات المحلية والدولية في مصر.'
              : 'Lawyer Karim El-Dib - Expert in corporate law, company formation, and corporate governance. We provide advanced legal consultations for local and international companies in Egypt.'
            }
          </p>
        </div>

        {/* تعريف شامل بقانون الشركات */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#c8a876] mb-6">
              {isRTL ? 'ما هو قانون الشركات؟' : 'What is Corporate Law?'}
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {isRTL 
                ? 'قانون الشركات هو مجموعة القواعد القانونية التي تحكم تأسيس وإدارة وتشغيل الشركات في مصر. يشمل هذا القانون قانون الشركات رقم 159 لسنة 1981 وتعديلاته، وقانون الاستثمار، وقانون الضرائب على الشركات. يغطي القانون جميع أشكال الشركات من الشركات المساهمة إلى الشركات ذات المسؤولية المحدودة والشركات التضامنية.'
                : 'Corporate law is a set of legal rules governing the establishment, management, and operation of companies in Egypt. This law includes Companies Law No. 159 of 1981 and its amendments, Investment Law, and Corporate Tax Law. The law covers all forms of companies from joint stock companies to limited liability companies and partnerships.'
              }
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              {isRTL 
                ? 'يهدف قانون الشركات إلى تنظيم النشاط التجاري وحماية حقوق المساهمين والدائنين والمتعاملين مع الشركة. كما يضع الأطر القانونية للحوكمة المؤسسية والشفافية المالية والمحاسبية. يتضمن القانون أيضاً أحكام الاندماج والاستحواذ وتصفية الشركات.'
                : 'Corporate law aims to regulate commercial activity and protect the rights of shareholders, creditors, and those dealing with the company. It also sets legal frameworks for corporate governance, financial transparency, and accounting. The law also includes provisions for mergers, acquisitions, and company liquidation.'
              }
            </p>
          </div>
          
          <div className="bg-[#1a2d4d] rounded-lg p-8">
            <h3 className="text-2xl font-bold text-[#c8a876] mb-6">
              {isRTL ? 'خدماتنا في قانون الشركات' : 'Our Corporate Law Services'}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="fas fa-building text-[#c8a876] mt-1"></i>
                <span className="text-gray-300">
                  {isRTL ? 'تأسيس جميع أنواع الشركات' : 'Establishing all types of companies'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-file-contract text-[#c8a876] mt-1"></i>
                <span className="text-gray-300">
                  {isRTL ? 'صياغة عقود التأسيس والأنظمة الأساسية' : 'Drafting articles of incorporation and bylaws'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-handshake text-[#c8a876] mt-1"></i>
                <span className="text-gray-300">
                  {isRTL ? 'الاندماج والاستحواذ' : 'Mergers and acquisitions'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-chart-line text-[#c8a876] mt-1"></i>
                <span className="text-gray-300">
                  {isRTL ? 'الحوكمة المؤسسية والامتثال' : 'Corporate governance and compliance'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-gavel text-[#c8a876] mt-1"></i>
                <span className="text-gray-300">
                  {isRTL ? 'تسوية منازعات الشركات' : 'Corporate dispute resolution'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* أنواع الشركات */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-[#c8a876] mb-12">
            {isRTL ? 'أنواع الشركات التي نؤسسها' : 'Types of Companies We Establish'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-chart-pie text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {isRTL ? 'الشركة المساهمة' : 'Joint Stock Company'}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {isRTL 
                  ? 'تأسيس الشركات المساهمة العامة والمقيدة بالبورصة مع كامل الاجراءات القانونية'
                  : 'Establishing public joint stock companies and listed companies with complete legal procedures'
                }
              </p>
            </div>

            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-shield-alt text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {isRTL ? 'شركة ذات مسؤولية محدودة' : 'Limited Liability Company'}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {isRTL 
                  ? 'تأسيس الشركات ذات المسؤولية المحدودة للمشاريع الصغيرة والمتوسطة'
                  : 'Establishing limited liability companies for small and medium enterprises'
                }
              </p>
            </div>

            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-handshake text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {isRTL ? 'شركة التضامن' : 'General Partnership'}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {isRTL 
                  ? 'تأسيس شركات التضامن والشركات التوصية البسيطة والشركات التوصية بالأسهم'
                  : 'Establishing general partnerships, simple and limited partnerships'
                }
              </p>
            </div>

            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-globe text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {isRTL ? 'الشركات الأجنبية' : 'Foreign Companies'}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {isRTL 
                  ? 'تأسيس فروع ومكاتب تمثيل للشركات الأجنبية في مصر'
                  : 'Establishing branches and representative offices for foreign companies in Egypt'
                }
              </p>
            </div>

            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-building text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {isRTL ? 'الشركات القابضة' : 'Holding Companies'}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {isRTL 
                  ? 'تأسيس الشركات القابضة ووضع هياكل الملكية المعقدة'
                  : 'Establishing holding companies and complex ownership structures'
                }
              </p>
            </div>

            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-seedling text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {isRTL ? 'الشركات الناشئة' : 'Startups'}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {isRTL 
                  ? 'خدمات قانونية مخصصة للشركات الناشئة وشركات التكنولوجيا'
                  : 'Specialized legal services for startups and technology companies'
                }
              </p>
            </div>
          </div>
        </div>

        {/* خدمات الحوكمة والامتثال */}
        <div className="bg-[#1a2d4d] rounded-lg p-12 mb-16">
          <h2 className="text-3xl font-bold text-center text-[#c8a876] mb-12">
            {isRTL ? 'خدمات الحوكمة والامتثال' : 'Governance and Compliance Services'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <i className="fas fa-users text-4xl text-[#c8a876] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-3">
                {isRTL ? 'إدارة مجالس الإدارة' : 'Board Management'}
              </h3>
              <p className="text-gray-300">
                {isRTL ? 'تنظيم اجتماعات مجالس الإدارة وصياغة القرارات' : 'Organizing board meetings and drafting resolutions'}
              </p>
            </div>

            <div className="text-center">
              <i className="fas fa-file-alt text-4xl text-[#c8a876] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-3">
                {isRTL ? 'التقارير السنوية' : 'Annual Reports'}
              </h3>
              <p className="text-gray-300">
                {isRTL ? 'إعداد التقارير السنوية والمالية للشركات' : 'Preparing annual and financial reports for companies'}
              </p>
            </div>

            <div className="text-center">
              <i className="fas fa-check-circle text-4xl text-[#c8a876] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-3">
                {isRTL ? 'الامتثال القانوني' : 'Legal Compliance'}
              </h3>
              <p className="text-gray-300">
                {isRTL ? 'ضمان امتثال الشركة للقوانين واللوائح' : 'Ensuring company compliance with laws and regulations'}
              </p>
            </div>

            <div className="text-center">
              <i className="fas fa-balance-scale text-4xl text-[#c8a876] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-3">
                {isRTL ? 'المسؤولية المؤسسية' : 'Corporate Responsibility'}
              </h3>
              <p className="text-gray-300">
                {isRTL ? 'تطوير برامج المسؤولية الاجتماعية للشركات' : 'Developing corporate social responsibility programs'}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#c8a876] to-[#b8956a] rounded-lg p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b1a33] mb-6">
            {isRTL ? 'هل تريد تأسيس شركة أو تحتاج استشارات قانونية؟' : 'Want to Establish a Company or Need Legal Consultations?'}
          </h2>
          <a 
            href="#contact" 
            className="bg-[#0b1a33] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors duration-300"
          >
            {isRTL ? 'احجز استشارة مؤسسية' : 'Book Corporate Consultation'}
          </a>
        </div>

      </div>
    </div>
  );
};

export default CompanyLaw;