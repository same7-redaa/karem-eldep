import React, { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const FamilyLaw: React.FC = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  useEffect(() => {
    document.title = "محامي أحوال شخصية | قانون الأسرة | المحامي كريم الديب | Family Law Lawyer Egypt";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'محامي أحوال شخصية - المحامي كريم الديب خبير في قانون الأسرة والأحوال الشخصية. قضايا الطلاق، الخلع، النفقة، الحضانة، الميراث للمصريين والأجانب. Family law lawyer Egypt.');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'محامي أحوال شخصية, محامي قانون الأسرة, محامي طلاق, محامي خلع, محامي نفقة, محامي حضانة أطفال, قضايا الأسرة محامي, محامي زواج أجانب, قانون الأحوال الشخصية, Family law lawyer Egypt, كريم الديب محامي');
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0b1a33] text-gray-200 py-20" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#c8a876]">
            {isRTL ? 'محامي الأحوال الشخصية' : 'Family Law Lawyer'}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            {isRTL 
              ? 'المحامي كريم الديب - خبير في قانون الأسرة والأحوال الشخصية. نتعامل بحساسية واحترافية مع قضايا الأسرة للمصريين والأجانب.'
              : 'Lawyer Karim El-Dib - Expert in family law and personal status. We handle family matters with sensitivity and professionalism for Egyptians and foreigners.'
            }
          </p>
        </div>

        {/* تعريف شامل بقانون الأسرة */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#c8a876] mb-6">
              {isRTL ? 'ما هو قانون الأحوال الشخصية؟' : 'What is Family Law?'}
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {isRTL 
                ? 'قانون الأحوال الشخصية هو مجموعة القواعد القانونية التي تنظم العلاقات الأسرية والشخصية للأفراد. يشمل هذا القانون في مصر أحكام الزواج والطلاق والخلع والنفقة والحضانة والميراث والوصية. يتميز قانون الأحوال الشخصية في مصر بتنوع المصادر حيث يطبق وفقاً للديانة والمذهب، مما يتطلب خبرة قانونية متخصصة للتعامل مع هذا التنوع.'
                : 'Family law is a set of legal rules that regulate family and personal relationships of individuals. This law in Egypt includes provisions for marriage, divorce, khula, alimony, custody, inheritance, and wills. Egyptian family law is characterized by diverse sources as it is applied according to religion and sect, requiring specialized legal expertise to deal with this diversity.'
              }
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              {isRTL 
                ? 'يهدف قانون الأحوال الشخصية إلى حماية الأسرة كوحدة أساسية في المجتمع، وضمان حقوق جميع أفراد الأسرة خاصة الأطفال والنساء. كما يتناول القانون المسائل المتعلقة بالأهلية والولاية والوصاية، ويوفر آليات لحل النزاعات الأسرية بطرق ودية قبل اللجوء للتقاضي.'
                : 'Family law aims to protect the family as a fundamental unit in society and ensure the rights of all family members, especially children and women. The law also addresses matters related to capacity, guardianship, and custody, providing mechanisms to resolve family disputes amicably before resorting to litigation.'
              }
            </p>
          </div>
          
          <div className="bg-[#1a2d4d] rounded-lg p-8">
            <h3 className="text-2xl font-bold text-[#c8a876] mb-6">
              {isRTL ? 'خدماتنا في قانون الأسرة' : 'Our Family Law Services'}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="fas fa-heart text-[#c8a876] mt-1"></i>
                <span className="text-gray-300">
                  {isRTL ? 'عقود الزواج والتوثيق' : 'Marriage contracts and documentation'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-file-contract text-[#c8a876] mt-1"></i>
                <span className="text-gray-300">
                  {isRTL ? 'قضايا الطلاق والخلع' : 'Divorce and khula cases'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-child text-[#c8a876] mt-1"></i>
                <span className="text-gray-300">
                  {isRTL ? 'قضايا الحضانة والرؤية' : 'Custody and visitation cases'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-coins text-[#c8a876] mt-1"></i>
                <span className="text-gray-300">
                  {isRTL ? 'قضايا النفقة والمتعة' : 'Alimony and compensation cases'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-scroll text-[#c8a876] mt-1"></i>
                <span className="text-gray-300">
                  {isRTL ? 'قضايا الميراث والوصايا' : 'Inheritance and will cases'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* أنواع قضايا الأحوال الشخصية */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-[#c8a876] mb-12">
            {isRTL ? 'أنواع قضايا الأحوال الشخصية التي نتعامل معها' : 'Types of Family Law Cases We Handle'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-heart text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {isRTL ? 'عقود الزواج' : 'Marriage Contracts'}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {isRTL 
                  ? 'صياغة وتوثيق عقود الزواج للمصريين والأجانب وفقاً للقانون المصري'
                  : 'Drafting and documenting marriage contracts for Egyptians and foreigners according to Egyptian law'
                }
              </p>
            </div>

            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-file-contract text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {isRTL ? 'قضايا الطلاق' : 'Divorce Cases'}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {isRTL 
                  ? 'الطلاق الرضائي والطلاق للضرر والطلاق للعلة وجميع أنواع الطلاق'
                  : 'Consensual divorce, divorce for harm, and all types of divorce proceedings'
                }
              </p>
            </div>

            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-female text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {isRTL ? 'قضايا الخلع' : 'Khula Cases'}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {isRTL 
                  ? 'دعاوى الخلع للزوجة مع المطالبة بالحقوق المالية والمعنوية'
                  : 'Khula lawsuits for wives with claims for financial and moral rights'
                }
              </p>
            </div>

            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-child text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {isRTL ? 'قضايا الحضانة' : 'Custody Cases'}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {isRTL 
                  ? 'حضانة الأطفال، تعديل أحكام الحضانة، وقضايا الرؤية والزيارة'
                  : 'Child custody, custody modification, and visitation cases'
                }
              </p>
            </div>

            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-coins text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {isRTL ? 'قضايا النفقة' : 'Alimony Cases'}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {isRTL 
                  ? 'نفقة الزوجة، نفقة الأطفال، المتعة، وتعديل أحكام النفقة'
                  : 'Spousal support, child support, compensation, and alimony modification'
                }
              </p>
            </div>

            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-scroll text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {isRTL ? 'قضايا الميراث' : 'Inheritance Cases'}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {isRTL 
                  ? 'تقسيم التركات، دعاوى الوراثة، والمنازعات حول الإرث'
                  : 'Estate division, inheritance lawsuits, and inheritance disputes'
                }
              </p>
            </div>
          </div>
        </div>

        {/* مميزاتنا في قضايا الأسرة */}
        <div className="bg-[#1a2d4d] rounded-lg p-12 mb-16">
          <h2 className="text-3xl font-bold text-center text-[#c8a876] mb-12">
            {isRTL ? 'لماذا تختارنا في قضايا الأسرة؟' : 'Why Choose Us for Family Cases?'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <i className="fas fa-heart text-4xl text-[#c8a876] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-3">
                {isRTL ? 'تعامل إنساني' : 'Humane Treatment'}
              </h3>
              <p className="text-gray-300">
                {isRTL ? 'نتفهم الجانب الإنساني في قضايا الأسرة' : 'We understand the human aspect in family cases'}
              </p>
            </div>

            <div className="text-center">
              <i className="fas fa-user-secret text-4xl text-[#c8a876] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-3">
                {isRTL ? 'سرية تامة' : 'Complete Confidentiality'}
              </h3>
              <p className="text-gray-300">
                {isRTL ? 'حماية كاملة لخصوصية العملاء' : 'Complete protection of client privacy'}
              </p>
            </div>

            <div className="text-center">
              <i className="fas fa-handshake text-4xl text-[#c8a876] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-3">
                {isRTL ? 'حلول ودية' : 'Amicable Solutions'}
              </h3>
              <p className="text-gray-300">
                {isRTL ? 'تفضيل الحلول الودية والتفاوض' : 'Preference for amicable solutions and negotiation'}
              </p>
            </div>

            <div className="text-center">
              <i className="fas fa-child text-4xl text-[#c8a876] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-3">
                {isRTL ? 'حماية الأطفال' : 'Child Protection'}
              </h3>
              <p className="text-gray-300">
                {isRTL ? 'الأولوية لمصلحة الأطفال' : 'Priority for children\'s best interests'}
              </p>
            </div>
          </div>
        </div>

        {/* مراحل التعامل مع قضايا الأسرة */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-[#c8a876] mb-12">
            {isRTL ? 'مراحل التعامل مع قضايا الأسرة' : 'Family Case Handling Stages'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#c8a876] text-[#0b1a33] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
              <h3 className="text-xl font-bold text-white mb-3">
                {isRTL ? 'الاستشارة الأولية' : 'Initial Consultation'}
              </h3>
              <p className="text-gray-300">
                {isRTL ? 'فهم الوضع الأسري وتقديم النصح القانوني' : 'Understanding family situation and providing legal advice'}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#c8a876] text-[#0b1a33] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
              <h3 className="text-xl font-bold text-white mb-3">
                {isRTL ? 'محاولة الصلح' : 'Reconciliation Attempt'}
              </h3>
              <p className="text-gray-300">
                {isRTL ? 'السعي للحلول الودية والتفاوض بين الأطراف' : 'Seeking amicable solutions and negotiation between parties'}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#c8a876] text-[#0b1a33] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
              <h3 className="text-xl font-bold text-white mb-3">
                {isRTL ? 'إعداد الدعوى' : 'Case Preparation'}
              </h3>
              <p className="text-gray-300">
                {isRTL ? 'جمع الأدلة وإعداد المستندات اللازمة' : 'Gathering evidence and preparing necessary documents'}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#c8a876] text-[#0b1a33] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">4</div>
              <h3 className="text-xl font-bold text-white mb-3">
                {isRTL ? 'التمثيل القانوني' : 'Legal Representation'}
              </h3>
              <p className="text-gray-300">
                {isRTL ? 'التمثيل أمام محاكم الأسرة ومتابعة القضية' : 'Representation before family courts and case follow-up'}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#c8a876] to-[#b8956a] rounded-lg p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b1a33] mb-6">
            {isRTL ? 'هل تحتاج مساعدة في قضايا الأسرة؟' : 'Do You Need Help with Family Matters?'}
          </h2>
          <a 
            href="#contact" 
            className="bg-[#0b1a33] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors duration-300"
          >
            {isRTL ? 'احجز استشارة خاصة' : 'Book Private Consultation'}
          </a>
        </div>

      </div>
    </div>
  );
};

export default FamilyLaw;