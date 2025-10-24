import React, { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const ArbitrationMediation: React.FC = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  useEffect(() => {
    document.title = "محامي تحكيم ووساطة | المحامي كريم الديب | Arbitration Lawyer Egypt";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'محامي تحكيم ووساطة - المحامي كريم الديب خبير في التحكيم الدولي والتجاري والوساطة. حل النزاعات البديل للمصريين والأجانب. Arbitration lawyer Egypt.');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'محامي تحكيم, التحكيم الدولي مصر, محامي وساطة, Arbitration lawyer Egypt, International arbitration Egypt, محامي تحكيم تجاري, مركز تحكيم القاهرة, ADR Egypt, كريم الديب محامي');
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0b1a33] text-gray-200 py-20" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#c8a876]">
            {isRTL ? 'محامي التحكيم والوساطة' : 'Arbitration & Mediation Lawyer'}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            {isRTL 
              ? 'المحامي كريم الديب - خبير في التحكيم الدولي والتجاري والوساطة. نقدم حلول بديلة لحل النزاعات بطريقة أسرع وأكثر كفاءة من التقاضي التقليدي.'
              : 'Lawyer Karim El-Dib - Expert in international and commercial arbitration and mediation. We provide alternative dispute resolution solutions faster and more efficiently than traditional litigation.'
            }
          </p>
        </div>

        {/* تعريف شامل بالتحكيم والوساطة */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#c8a876] mb-6">
              {isRTL ? 'ما هو التحكيم والوساطة؟' : 'What is Arbitration and Mediation?'}
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {isRTL 
                ? 'التحكيم والوساطة هما من أهم وسائل حل النزاعات البديلة (ADR) التي تهدف إلى تسوية المنازعات خارج أروقة المحاكم. التحكيم هو إجراء قضائي بديل يختار فيه الأطراف محكمين متخصصين لإصدار قرار ملزم في النزاع. أما الوساطة فهي عملية تفاوضية يساعد فيها وسيط محايد الأطراف للوصول إلى اتفاق ودي.'
                : 'Arbitration and mediation are among the most important alternative dispute resolution (ADR) methods that aim to settle disputes outside courtrooms. Arbitration is an alternative judicial procedure where parties choose specialized arbitrators to issue a binding decision in the dispute. Mediation is a negotiation process where a neutral mediator helps parties reach an amicable agreement.'
              }
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              {isRTL 
                ? 'يتميز التحكيم بالسرية والسرعة والمرونة، ويعتبر الخيار المفضل في النزاعات التجارية الدولية والاستثمارية. كما أن قرارات التحكيم قابلة للتنفيذ دولياً وفقاً لاتفاقية نيويورك 1958. الوساطة من جهة أخرى تحافظ على العلاقات التجارية وتوفر حلول إبداعية للنزاعات.'
                : 'Arbitration is characterized by confidentiality, speed, and flexibility, and is the preferred choice in international commercial and investment disputes. Arbitration awards are internationally enforceable under the 1958 New York Convention. Mediation, on the other hand, preserves business relationships and provides creative solutions to disputes.'
              }
            </p>
          </div>
          
          <div className="bg-[#1a2d4d] rounded-lg p-8">
            <h3 className="text-2xl font-bold text-[#c8a876] mb-6">
              {isRTL ? 'خدماتنا في التحكيم والوساطة' : 'Our Arbitration & Mediation Services'}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="fas fa-gavel text-[#c8a876] mt-1"></i>
                <span className="text-gray-300">
                  {isRTL ? 'التحكيم التجاري والدولي' : 'Commercial and international arbitration'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-handshake text-[#c8a876] mt-1"></i>
                <span className="text-gray-300">
                  {isRTL ? 'الوساطة في النزاعات التجارية' : 'Commercial dispute mediation'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-file-contract text-[#c8a876] mt-1"></i>
                <span className="text-gray-300">
                  {isRTL ? 'صياغة اتفاقيات التحكيم' : 'Drafting arbitration agreements'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-globe text-[#c8a876] mt-1"></i>
                <span className="text-gray-300">
                  {isRTL ? 'تنفيذ قرارات التحكيم الأجنبية' : 'Enforcement of foreign arbitral awards'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-users text-[#c8a876] mt-1"></i>
                <span className="text-gray-300">
                  {isRTL ? 'تدريب المحكمين والوسطاء' : 'Training arbitrators and mediators'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* أنواع التحكيم */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-[#c8a876] mb-12">
            {isRTL ? 'أنواع التحكيم والوساطة التي نتعامل معها' : 'Types of Arbitration and Mediation We Handle'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-globe text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {isRTL ? 'التحكيم الدولي' : 'International Arbitration'}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {isRTL 
                  ? 'التحكيم في النزاعات الدولية وفقاً لقواعد ICC وLCIA وUNCITRAL'
                  : 'Arbitration in international disputes according to ICC, LCIA, and UNCITRAL rules'
                }
              </p>
            </div>

            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-chart-line text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {isRTL ? 'التحكيم التجاري' : 'Commercial Arbitration'}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {isRTL 
                  ? 'تحكيم النزاعات التجارية المحلية والإقليمية أمام مراكز التحكيم المعتمدة'
                  : 'Local and regional commercial dispute arbitration before accredited arbitration centers'
                }
              </p>
            </div>

            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-building text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {isRTL ? 'تحكيم الاستثمار' : 'Investment Arbitration'}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {isRTL 
                  ? 'تحكيم منازعات الاستثمار بين المستثمرين والدول أمام ICSID'
                  : 'Investment dispute arbitration between investors and states before ICSID'
                }
              </p>
            </div>

            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-home text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {isRTL ? 'تحكيم العقود العقارية' : 'Real Estate Arbitration'}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {isRTL 
                  ? 'تحكيم النزاعات العقارية والإنشائية وعقود المقاولات'
                  : 'Real estate and construction disputes and contracting arbitration'
                }
              </p>
            </div>

            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-handshake text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {isRTL ? 'الوساطة التجارية' : 'Commercial Mediation'}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {isRTL 
                  ? 'وساطة النزاعات التجارية والشراكات والعقود طويلة الأمد'
                  : 'Commercial disputes, partnerships, and long-term contract mediation'
                }
              </p>
            </div>

            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-users text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {isRTL ? 'وساطة الشركات' : 'Corporate Mediation'}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {isRTL 
                  ? 'وساطة نزاعات الشركات والمساهمين ومجالس الإدارة'
                  : 'Corporate, shareholder, and board dispute mediation'
                }
              </p>
            </div>
          </div>
        </div>

        {/* مراكز التحكيم */}
        <div className="bg-[#1a2d4d] rounded-lg p-12 mb-16">
          <h2 className="text-3xl font-bold text-center text-[#c8a876] mb-12">
            {isRTL ? 'مراكز التحكيم التي نتعامل معها' : 'Arbitration Centers We Work With'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <i className="fas fa-landmark text-4xl text-[#c8a876] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-3">
                {isRTL ? 'مركز القاهرة الإقليمي' : 'Cairo Regional Center'}
              </h3>
              <p className="text-gray-300">
                {isRTL ? 'مركز القاهرة الإقليمي للتحكيم التجاري الدولي' : 'Cairo Regional Center for International Commercial Arbitration'}
              </p>
            </div>

            <div className="text-center">
              <i className="fas fa-globe-europe text-4xl text-[#c8a876] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-3">
                {isRTL ? 'محكمة التحكيم الدولية' : 'International Court of Arbitration'}
              </h3>
              <p className="text-gray-300">
                {isRTL ? 'محكمة التحكيم الدولية بغرفة التجارة الدولية ICC' : 'International Court of Arbitration - ICC'}
              </p>
            </div>

            <div className="text-center">
              <i className="fas fa-university text-4xl text-[#c8a876] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-3">
                {isRTL ? 'مركز الاستثمار الدولي' : 'International Investment Center'}
              </h3>
              <p className="text-gray-300">
                {isRTL ? 'المركز الدولي لتسوية منازعات الاستثمار ICSID' : 'International Centre for Settlement of Investment Disputes - ICSID'}
              </p>
            </div>

            <div className="text-center">
              <i className="fas fa-balance-scale text-4xl text-[#c8a876] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-3">
                {isRTL ? 'مركز لندن للتحكيم' : 'London Court of Arbitration'}
              </h3>
              <p className="text-gray-300">
                {isRTL ? 'محكمة لندن للتحكيم التجاري الدولي LCIA' : 'London Court of International Arbitration - LCIA'}
              </p>
            </div>
          </div>
        </div>

        {/* مزايا التحكيم والوساطة */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-[#c8a876] mb-12">
            {isRTL ? 'مزايا التحكيم والوساطة' : 'Advantages of Arbitration and Mediation'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <i className="fas fa-clock text-4xl text-[#c8a876] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-3">
                {isRTL ? 'السرعة' : 'Speed'}
              </h3>
              <p className="text-gray-300">
                {isRTL ? 'حل النزاعات في وقت أقل من التقاضي العادي' : 'Resolving disputes faster than regular litigation'}
              </p>
            </div>

            <div className="text-center">
              <i className="fas fa-user-secret text-4xl text-[#c8a876] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-3">
                {isRTL ? 'السرية' : 'Confidentiality'}
              </h3>
              <p className="text-gray-300">
                {isRTL ? 'حماية كاملة لسرية المعلومات التجارية' : 'Complete protection of commercial information confidentiality'}
              </p>
            </div>

            <div className="text-center">
              <i className="fas fa-cogs text-4xl text-[#c8a876] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-3">
                {isRTL ? 'المرونة' : 'Flexibility'}
              </h3>
              <p className="text-gray-300">
                {isRTL ? 'إجراءات مرنة تناسب طبيعة النزاع' : 'Flexible procedures suitable to the nature of the dispute'}
              </p>
            </div>

            <div className="text-center">
              <i className="fas fa-money-bill-wave text-4xl text-[#c8a876] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-3">
                {isRTL ? 'التكلفة' : 'Cost'}
              </h3>
              <p className="text-gray-300">
                {isRTL ? 'تكلفة أقل مقارنة بالتقاضي التقليدي' : 'Lower cost compared to traditional litigation'}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#c8a876] to-[#b8956a] rounded-lg p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b1a33] mb-6">
            {isRTL ? 'هل تريد حل نزاعك بالتحكيم أو الوساطة؟' : 'Want to Resolve Your Dispute Through Arbitration or Mediation?'}
          </h2>
          <a 
            href="#contact" 
            className="bg-[#0b1a33] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors duration-300"
          >
            {isRTL ? 'احجز استشارة متخصصة' : 'Book Specialized Consultation'}
          </a>
        </div>

      </div>
    </div>
  );
};

export default ArbitrationMediation;