import React, { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const CriminalLaw: React.FC = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  useEffect(() => {
    document.title = "محامي قانون جنائي | المحامي كريم الديب | Criminal Defense Lawyer Egypt";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'محامي قانون جنائي - المحامي كريم الديب خبير في الدفاع الجنائي والقضايا الجنائية. دفاع قوي للمصريين والأجانب في مصر. Criminal defense lawyer Egypt.');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'محامي قانون جنائي, محامي جنائي مصر, دفاع جنائي, قضايا جنائية, محامي دفاع, Criminal lawyer Egypt, كريم الديب محامي, المحامي كريم الديب');
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0b1a33] text-gray-200 py-20" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#c8a876]">
            {isRTL ? 'محامي القانون الجنائي' : 'Criminal Defense Lawyer'}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            {isRTL 
              ? 'المحامي كريم الديب - خبير في الدفاع الجنائي والقضايا الجنائية. نقدم دفاعاً قوياً ومهنياً للمصريين والأجانب في جميع القضايا الجنائية.'
              : 'Lawyer Karim El-Dib - Expert in criminal defense and criminal cases. We provide strong and professional defense for Egyptians and foreigners in all criminal cases.'
            }
          </p>
        </div>

        {/* تعريف شامل بالقانون الجنائي */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#c8a876] mb-6">
              {isRTL ? 'ما هو القانون الجنائي؟' : 'What is Criminal Law?'}
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {isRTL 
                ? 'القانون الجنائي هو مجموعة القواعد القانونية التي تحدد الأفعال المجرمة والعقوبات المقررة لها. يهدف القانون الجنائي إلى حماية المجتمع والحفاظ على الأمن والنظام العام من خلال تجريم الأفعال التي تضر بالمصلحة العامة أو الخاصة. يشمل القانون الجنائي المصري الجرائم والعقوبات، وإجراءات التحقيق والمحاكمة، وضمانات المتهم.'
                : 'Criminal law is a set of legal rules that define criminal acts and their prescribed penalties. Criminal law aims to protect society and maintain security and public order by criminalizing acts that harm public or private interests. Egyptian criminal law includes crimes and penalties, investigation and trial procedures, and defendant guarantees.'
              }
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              {isRTL 
                ? 'يتميز القانون الجنائي بالطبيعة العقابية والوقائية، حيث يسعى لردع الجناة ومنع تكرار الجرائم. كما يكفل حقوق المتهم في الدفاع والحصول على محاكمة عادلة. يشمل القانون الجنائي المصري جرائم متنوعة كالقتل والسرقة والاحتيال والمخدرات والجرائم الاقتصادية والسياسية.'
                : 'Criminal law is characterized by its punitive and preventive nature, seeking to deter offenders and prevent crime repetition. It also guarantees the defendant\'s rights to defense and fair trial. Egyptian criminal law includes various crimes such as murder, theft, fraud, drugs, economic and political crimes.'
              }
            </p>
          </div>
          
          <div className="bg-[#1a2d4d] rounded-lg p-8">
            <h3 className="text-2xl font-bold text-[#c8a876] mb-6">
              {isRTL ? 'خدماتنا في القانون الجنائي' : 'Our Criminal Law Services'}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="fas fa-shield-alt text-[#c8a876] mt-1"></i>
                <span className="text-gray-300">
                  {isRTL ? 'الدفاع في القضايا الجنائية' : 'Defense in criminal cases'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-gavel text-[#c8a876] mt-1"></i>
                <span className="text-gray-300">
                  {isRTL ? 'التمثيل أمام محاكم الجنايات' : 'Representation before criminal courts'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-search text-[#c8a876] mt-1"></i>
                <span className="text-gray-300">
                  {isRTL ? 'حضور التحقيقات والاستجوابات' : 'Attending investigations and interrogations'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-file-alt text-[#c8a876] mt-1"></i>
                <span className="text-gray-300">
                  {isRTL ? 'تقديم الطعون والاستئنافات' : 'Filing appeals and cassations'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-handshake text-[#c8a876] mt-1"></i>
                <span className="text-gray-300">
                  {isRTL ? 'التصالح والحلول البديلة' : 'Reconciliation and alternative solutions'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* أنواع القضايا الجنائية */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-[#c8a876] mb-12">
            {isRTL ? 'أنواع القضايا الجنائية التي نتعامل معها' : 'Types of Criminal Cases We Handle'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-mask text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {isRTL ? 'جرائم الأشخاص' : 'Crimes Against Persons'}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {isRTL 
                  ? 'القتل، الضرب، الجرح، الاعتداء، التهديد، وجميع الجرائم الواقعة على الأشخاص'
                  : 'Murder, assault, battery, threats, and all crimes against persons'
                }
              </p>
            </div>

            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-money-bill-wave text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {isRTL ? 'جرائم الأموال' : 'Financial Crimes'}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {isRTL 
                  ? 'السرقة، النصب والاحتيال، اختلاس الأموال، وجميع الجرائم المالية'
                  : 'Theft, fraud, embezzlement, and all financial crimes'
                }
              </p>
            </div>

            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-pills text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {isRTL ? 'قضايا المخدرات' : 'Drug Cases'}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {isRTL 
                  ? 'تعاطي وترويج وتهريب المخدرات والمواد المؤثرة على الأعصاب'
                  : 'Drug possession, trafficking, and smuggling cases'
                }
              </p>
            </div>

            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-laptop text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {isRTL ? 'الجرائم الإلكترونية' : 'Cyber Crimes'}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {isRTL 
                  ? 'جرائم الإنترنت، القرصنة، انتهاك الخصوصية، والجرائم الرقمية'
                  : 'Internet crimes, hacking, privacy violations, and digital crimes'
                }
              </p>
            </div>

            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-car text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {isRTL ? 'حوادث المرور' : 'Traffic Accidents'}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {isRTL 
                  ? 'القتل الخطأ، الإصابة الخطأ، ومخالفات المرور الجنائية'
                  : 'Vehicular manslaughter, negligent injury, and criminal traffic violations'
                }
              </p>
            </div>

            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-university text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {isRTL ? 'جرائم أمن الدولة' : 'State Security Crimes'}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {isRTL 
                  ? 'الجرائم السياسية وجرائم أمن الدولة والتخابر مع العدو'
                  : 'Political crimes, state security crimes, and espionage'
                }
              </p>
            </div>
          </div>
        </div>

        {/* مراحل الدفاع الجنائي */}
        <div className="bg-[#1a2d4d] rounded-lg p-12 mb-16">
          <h2 className="text-3xl font-bold text-center text-[#c8a876] mb-12">
            {isRTL ? 'مراحل الدفاع الجنائي' : 'Criminal Defense Stages'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#c8a876] text-[#0b1a33] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
              <h3 className="text-xl font-bold text-white mb-3">
                {isRTL ? 'مرحلة التحقيق' : 'Investigation Stage'}
              </h3>
              <p className="text-gray-300">
                {isRTL ? 'حضور التحقيقات والاستجوابات مع المتهم' : 'Attending investigations and interrogations with the defendant'}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#c8a876] text-[#0b1a33] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
              <h3 className="text-xl font-bold text-white mb-3">
                {isRTL ? 'مرحلة الإحالة' : 'Referral Stage'}
              </h3>
              <p className="text-gray-300">
                {isRTL ? 'مراجعة أوراق القضية وإعداد استراتيجية الدفاع' : 'Reviewing case files and preparing defense strategy'}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#c8a876] text-[#0b1a33] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
              <h3 className="text-xl font-bold text-white mb-3">
                {isRTL ? 'مرحلة المحاكمة' : 'Trial Stage'}
              </h3>
              <p className="text-gray-300">
                {isRTL ? 'تمثيل المتهم أمام المحكمة وتقديم الدفاع' : 'Representing the defendant in court and presenting defense'}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#c8a876] text-[#0b1a33] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">4</div>
              <h3 className="text-xl font-bold text-white mb-3">
                {isRTL ? 'مرحلة الطعن' : 'Appeal Stage'}
              </h3>
              <p className="text-gray-300">
                {isRTL ? 'تقديم الطعون والاستئنافات عند الحاجة' : 'Filing appeals and cassations when needed'}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#c8a876] to-[#b8956a] rounded-lg p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b1a33] mb-6">
            {isRTL ? 'هل تحتاج دفاعاً جنائياً؟' : 'Do You Need Criminal Defense?'}
          </h2>
          <a 
            href="#contact" 
            className="bg-[#0b1a33] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors duration-300"
          >
            {isRTL ? 'احجز استشارة عاجلة' : 'Book Urgent Consultation'}
          </a>
        </div>

      </div>
    </div>
  );
};

export default CriminalLaw;