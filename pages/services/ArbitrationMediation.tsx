import React, { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const ArbitrationMediation: React.FC = () => {
  const { language, getTextByLanguage } = useLanguage();
  const isRTL = language === 'ar';

  useEffect(() => {
    const title = language === 'ar'
      ? "محامي تحكيم ووساطة | المحامي كريم الديب"
      : language === 'fr'
      ? "Avocat Arbitrage et Médiation | Karim El-Dib"
      : language === 'it'
      ? "Avvocato Arbitrato e Mediazione | Karim El-Dib"
      : "Arbitration & Mediation Lawyer | Lawyer Karim El-Dib";
    
    document.title = title;
    
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
            {getTextByLanguage({ar: 'محامي التحكيم والوساطة', en: 'Arbitration & Mediation Lawyer', fr: 'Avocat en Arbitrage et Médiation', it: 'Avvocato in Arbitrato e Mediazione'})}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            {getTextByLanguage({
              ar: 'المحامي كريم الديب - خبير في التحكيم الدولي والتجاري والوساطة. نقدم حلول بديلة لحل النزاعات بطريقة أسرع وأكثر كفاءة من التقاضي التقليدي.',
              en: 'Lawyer Karim El-Dib - Expert in international and commercial arbitration and mediation. We provide alternative dispute resolution solutions faster and more efficiently than traditional litigation.',
              fr: 'Avocat Karim El-Dib - Expert en arbitrage international et commercial et médiation. Nous fournissons des solutions alternatives de résolution des litiges plus rapides et plus efficaces que les litiges traditionnels.',
              it: 'Avvocato Karim El-Dib - Esperto in arbitrato internazionale e commerciale e mediazione. Forniamo soluzioni alternative di risoluzione delle controversie più veloci ed efficienti del contenzioso tradizionale.'
            })}
          </p>
        </div>

        {/* تعريف شامل بالتحكيم والوساطة */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#c8a876] mb-6">
              {getTextByLanguage({ar: 'ما هو التحكيم والوساطة؟', en: 'What is Arbitration and Mediation?', fr: 'Qu\'est-ce que l\'Arbitrage et la Médiation?', it: 'Cos\'è l\'Arbitrato e la Mediazione?'})}
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {getTextByLanguage({
                ar: 'التحكيم والوساطة هما من أهم وسائل حل النزاعات البديلة (ADR) التي تهدف إلى تسوية المنازعات خارج أروقة المحاكم. التحكيم هو إجراء قضائي بديل يختار فيه الأطراف محكمين متخصصين لإصدار قرار ملزم في النزاع. أما الوساطة فهي عملية تفاوضية يساعد فيها وسيط محايد الأطراف للوصول إلى اتفاق ودي.',
                en: 'Arbitration and mediation are among the most important alternative dispute resolution (ADR) methods that aim to settle disputes outside courtrooms. Arbitration is an alternative judicial procedure where parties choose specialized arbitrators to issue a binding decision in the dispute. Mediation is a negotiation process where a neutral mediator helps parties reach an amicable agreement.',
                fr: 'L\'arbitrage et la médiation sont parmi les méthodes de résolution alternative des litiges (ADR) les plus importantes visant à régler les différends en dehors des tribunaux. L\'arbitrage est une procédure judiciaire alternative où les parties choisissent des arbitres spécialisés pour rendre une décision contraignante.',
                it: 'L\'arbitrato e la mediazione sono tra i metodi più importanti di risoluzione alternativa delle controversie (ADR) che mirano a risolvere dispute al di fuori dei tribunali. L\'arbitrato è una procedura giudiziaria alternativa in cui le parti scelgono arbitri specializzati per emettere una decisione vincolante.'
              })}
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              {getTextByLanguage({
                ar: 'يتميز التحكيم بالسرية والسرعة والمرونة، ويعتبر الخيار المفضل في النزاعات التجارية الدولية والاستثمارية. كما أن قرارات التحكيم قابلة للتنفيذ دولياً وفقاً لاتفاقية نيويورك 1958. الوساطة من جهة أخرى تحافظ على العلاقات التجارية وتوفر حلول إبداعية للنزاعات.',
                en: 'Arbitration is characterized by confidentiality, speed, and flexibility, and is the preferred choice in international commercial and investment disputes. Arbitration awards are internationally enforceable under the 1958 New York Convention. Mediation, on the other hand, preserves business relationships and provides creative solutions to disputes.',
                fr: 'L\'arbitrage se caractérise par la confidentialité, la rapidité et la flexibilité, et est le choix préféré dans les litiges commerciaux et d\'investissement internationaux. Les sentences arbitrales sont exécutoires internationalement selon la Convention de New York de 1958.',
                it: 'L\'arbitrato è caratterizzato da riservatezza, velocità e flessibilità, ed è la scelta preferita nelle controversie commerciali e di investimento internazionali. I lodi arbitrali sono esecutivi a livello internazionale secondo la Convenzione di New York del 1958.'
              })}
            </p>
          </div>
          
          <div className="bg-[#1a2d4d] rounded-lg p-8">
            <h3 className="text-2xl font-bold text-[#c8a876] mb-6">
              {getTextByLanguage({ar: 'خدماتنا في التحكيم والوساطة', en: 'Our Arbitration & Mediation Services', fr: 'Nos Services en Arbitrage et Médiation', it: 'I Nostri Servizi di Arbitrato e Mediazione'})}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="fas fa-gavel text-[#c8a876] mt-1"></i>
                <span className="text-gray-300">
                  {getTextByLanguage({ar: 'التحكيم التجاري والدولي', en: 'Commercial and international arbitration', fr: 'Arbitrage commercial et international', it: 'Arbitrato commerciale e internazionale'})}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-handshake text-[#c8a876] mt-1"></i>
                <span className="text-gray-300">
                  {getTextByLanguage({ar: 'الوساطة في النزاعات التجارية', en: 'Commercial dispute mediation', fr: 'Médiation des litiges commerciaux', it: 'Mediazione delle controversie commerciali'})}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-file-contract text-[#c8a876] mt-1"></i>
                <span className="text-gray-300">
                  {getTextByLanguage({ar: 'صياغة اتفاقيات التحكيم', en: 'Drafting arbitration agreements', fr: 'Rédaction de conventions d\'arbitrage', it: 'Redazione di accordi arbitrali'})}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-globe text-[#c8a876] mt-1"></i>
                <span className="text-gray-300">
                  {getTextByLanguage({ar: 'تنفيذ قرارات التحكيم الأجنبية', en: 'Enforcement of foreign arbitral awards', fr: 'Exécution de sentences arbitrales étrangères', it: 'Esecuzione di lodi arbitrali stranieri'})}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-users text-[#c8a876] mt-1"></i>
                <span className="text-gray-300">
                  {getTextByLanguage({ar: 'تدريب المحكمين والوسطاء', en: 'Training arbitrators and mediators', fr: 'Formation des arbitres et médiateurs', it: 'Formazione di arbitri e mediatori'})}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* أنواع التحكيم */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-[#c8a876] mb-12">
            {getTextByLanguage({ar: 'أنواع التحكيم والوساطة التي نتعامل معها', en: 'Types of Arbitration and Mediation We Handle', fr: 'Types d\'Arbitrage et de Médiation que Nous Traitons', it: 'Tipi di Arbitrato e Mediazione che Gestiamo'})}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-globe text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {getTextByLanguage({ar: 'التحكيم الدولي', en: 'International Arbitration', fr: 'Arbitrage International', it: 'Arbitrato Internazionale'})}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {getTextByLanguage({
                  ar: 'التحكيم في النزاعات الدولية وفقاً لقواعد ICC وLCIA وUNCITRAL',
                  en: 'Arbitration in international disputes according to ICC, LCIA, and UNCITRAL rules',
                  fr: 'Arbitrage dans les litiges internationaux selon les règles ICC, LCIA et UNCITRAL',
                  it: 'Arbitrato nelle controversie internazionali secondo le regole ICC, LCIA e UNCITRAL'
                })}
              </p>
            </div>

            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-chart-line text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {getTextByLanguage({ar: 'التحكيم التجاري', en: 'Commercial Arbitration', fr: 'Arbitrage Commercial', it: 'Arbitrato Commerciale'})}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {getTextByLanguage({
                  ar: 'تحكيم النزاعات التجارية المحلية والإقليمية أمام مراكز التحكيم المعتمدة',
                  en: 'Local and regional commercial dispute arbitration before accredited arbitration centers',
                  fr: 'Arbitrage des litiges commerciaux locaux et régionaux devant des centres d\'arbitrage accrédités',
                  it: 'Arbitrato di controversie commerciali locali e regionali presso centri arbitrali accreditati'
                })}
              </p>
            </div>

            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-building text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {getTextByLanguage({ar: 'تحكيم الاستثمار', en: 'Investment Arbitration', fr: 'Arbitrage d\'Investissement', it: 'Arbitrato degli Investimenti'})}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {getTextByLanguage({
                  ar: 'تحكيم منازعات الاستثمار بين المستثمرين والدول أمام ICSID',
                  en: 'Investment dispute arbitration between investors and states before ICSID',
                  fr: 'Arbitrage des litiges d\'investissement entre investisseurs et États devant le CIRDI',
                  it: 'Arbitrato di controversie sugli investimenti tra investitori e Stati presso l\'ICSID'
                })}
              </p>
            </div>

            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-home text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {getTextByLanguage({ar: 'تحكيم العقود العقارية', en: 'Real Estate Arbitration', fr: 'Arbitrage Immobilier', it: 'Arbitrato Immobiliare'})}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {getTextByLanguage({
                  ar: 'تحكيم النزاعات العقارية والإنشائية وعقود المقاولات',
                  en: 'Real estate and construction disputes and contracting arbitration',
                  fr: 'Arbitrage des litiges immobiliers, de construction et des contrats de construction',
                  it: 'Arbitrato di controversie immobiliari, di costruzione e contratti di appalto'
                })}
              </p>
            </div>

            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-handshake text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {getTextByLanguage({ar: 'الوساطة التجارية', en: 'Commercial Mediation', fr: 'Médiation Commerciale', it: 'Mediazione Commerciale'})}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {getTextByLanguage({
                  ar: 'وساطة النزاعات التجارية والشراكات والعقود طويلة الأمد',
                  en: 'Commercial disputes, partnerships, and long-term contract mediation',
                  fr: 'Médiation des litiges commerciaux, des partenariats et des contrats à long terme',
                  it: 'Mediazione di controversie commerciali, partnership e contratti a lungo termine'
                })}
              </p>
            </div>

            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-users text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {getTextByLanguage({ar: 'وساطة الشركات', en: 'Corporate Mediation', fr: 'Médiation d\'Entreprise', it: 'Mediazione Aziendale'})}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {getTextByLanguage({
                  ar: 'وساطة نزاعات الشركات والمساهمين ومجالس الإدارة',
                  en: 'Corporate, shareholder, and board dispute mediation',
                  fr: 'Médiation des litiges entre sociétés, actionnaires et conseils d\'administration',
                  it: 'Mediazione di controversie aziendali, degli azionisti e del consiglio di amministrazione'
                })}
              </p>
            </div>
          </div>
        </div>

        {/* مراكز التحكيم */}
        <div className="bg-[#1a2d4d] rounded-lg p-12 mb-16">
          <h2 className="text-3xl font-bold text-center text-[#c8a876] mb-12">
            {getTextByLanguage({ar: 'مراكز التحكيم التي نتعامل معها', en: 'Arbitration Centers We Work With', fr: 'Centres d\'Arbitrage avec Lesquels Nous Travaillons', it: 'Centri Arbitrali con cui Lavoriamo'})}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <i className="fas fa-landmark text-4xl text-[#c8a876] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-3">
                {getTextByLanguage({ar: 'مركز القاهرة الإقليمي', en: 'Cairo Regional Center', fr: 'Centre Régional du Caire', it: 'Centro Regionale del Cairo'})}
              </h3>
              <p className="text-gray-300">
                {getTextByLanguage({ar: 'مركز القاهرة الإقليمي للتحكيم التجاري الدولي', en: 'Cairo Regional Center for International Commercial Arbitration', fr: 'Centre régional du Caire pour l\'arbitrage commercial international', it: 'Centro regionale del Cairo per l\'arbitrato commerciale internazionale'})}
              </p>
            </div>

            <div className="text-center">
              <i className="fas fa-globe-europe text-4xl text-[#c8a876] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-3">
                {getTextByLanguage({ar: 'محكمة التحكيم الدولية', en: 'International Court of Arbitration', fr: 'Cour Internationale d\'Arbitrage', it: 'Corte Internazionale di Arbitrato'})}
              </h3>
              <p className="text-gray-300">
                {getTextByLanguage({ar: 'محكمة التحكيم الدولية بغرفة التجارة الدولية ICC', en: 'International Court of Arbitration - ICC', fr: 'Cour internationale d\'arbitrage de la CCI', it: 'Corte internazionale di arbitrato - ICC'})}
              </p>
            </div>

            <div className="text-center">
              <i className="fas fa-university text-4xl text-[#c8a876] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-3">
                {getTextByLanguage({ar: 'مركز الاستثمار الدولي', en: 'International Investment Center', fr: 'Centre International d\'Investissement', it: 'Centro Internazionale per gli Investimenti'})}
              </h3>
              <p className="text-gray-300">
                {getTextByLanguage({ar: 'المركز الدولي لتسوية منازعات الاستثمار ICSID', en: 'International Centre for Settlement of Investment Disputes - ICSID', fr: 'Centre international pour le règlement des différends relatifs aux investissements - CIRDI', it: 'Centro internazionale per la risoluzione delle controversie sugli investimenti - ICSID'})}
              </p>
            </div>

            <div className="text-center">
              <i className="fas fa-balance-scale text-4xl text-[#c8a876] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-3">
                {getTextByLanguage({ar: 'مركز لندن للتحكيم', en: 'London Court of Arbitration', fr: 'Cour d\'Arbitrage de Londres', it: 'Corte di Arbitrato di Londra'})}
              </h3>
              <p className="text-gray-300">
                {getTextByLanguage({ar: 'محكمة لندن للتحكيم التجاري الدولي LCIA', en: 'London Court of International Arbitration - LCIA', fr: 'Cour d\'arbitrage international de Londres - LCIA', it: 'Corte di arbitrato internazionale di Londra - LCIA'})}
              </p>
            </div>
          </div>
        </div>

        {/* مزايا التحكيم والوساطة */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-[#c8a876] mb-12">
            {getTextByLanguage({ar: 'مزايا التحكيم والوساطة', en: 'Advantages of Arbitration and Mediation', fr: 'Avantages de l\'Arbitrage et de la Médiation', it: 'Vantaggi dell\'Arbitrato e della Mediazione'})}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <i className="fas fa-clock text-4xl text-[#c8a876] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-3">
                {getTextByLanguage({ar: 'السرعة', en: 'Speed', fr: 'Rapidité', it: 'Velocità'})}
              </h3>
              <p className="text-gray-300">
                {getTextByLanguage({ar: 'حل النزاعات في وقت أقل من التقاضي العادي', en: 'Resolving disputes faster than regular litigation', fr: 'Résolution des litiges plus rapide que les procès ordinaires', it: 'Risoluzione delle controversie più veloce del contenzioso ordinario'})}
              </p>
            </div>

            <div className="text-center">
              <i className="fas fa-user-secret text-4xl text-[#c8a876] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-3">
                {getTextByLanguage({ar: 'السرية', en: 'Confidentiality', fr: 'Confidentialité', it: 'Riservatezza'})}
              </h3>
              <p className="text-gray-300">
                {getTextByLanguage({ar: 'حماية كاملة لسرية المعلومات التجارية', en: 'Complete protection of commercial information confidentiality', fr: 'Protection complète de la confidentialité des informations commerciales', it: 'Protezione completa della riservatezza delle informazioni commerciali'})}
              </p>
            </div>

            <div className="text-center">
              <i className="fas fa-cogs text-4xl text-[#c8a876] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-3">
                {getTextByLanguage({ar: 'المرونة', en: 'Flexibility', fr: 'Flexibilité', it: 'Flessibilità'})}
              </h3>
              <p className="text-gray-300">
                {getTextByLanguage({ar: 'إجراءات مرنة تناسب طبيعة النزاع', en: 'Flexible procedures suitable to the nature of the dispute', fr: 'Procédures flexibles adaptées à la nature du litige', it: 'Procedure flessibili adatte alla natura della controversia'})}
              </p>
            </div>

            <div className="text-center">
              <i className="fas fa-money-bill-wave text-4xl text-[#c8a876] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-3">
                {getTextByLanguage({ar: 'التكلفة', en: 'Cost', fr: 'Coût', it: 'Costo'})}
              </h3>
              <p className="text-gray-300">
                {getTextByLanguage({ar: 'تكلفة أقل مقارنة بالتقاضي التقليدي', en: 'Lower cost compared to traditional litigation', fr: 'Coût inférieur par rapport aux procès traditionnels', it: 'Costo inferiore rispetto al contenzioso tradizionale'})}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#c8a876] to-[#b8956a] rounded-lg p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b1a33] mb-6">
            {getTextByLanguage({ar: 'هل تريد حل نزاعك بالتحكيم أو الوساطة؟', en: 'Want to Resolve Your Dispute Through Arbitration or Mediation?', fr: 'Voulez-vous résoudre votre litige par arbitrage ou médiation?', it: 'Vuoi risolvere la tua controversia tramite arbitrato o mediazione?'})}
          </h2>
          <a 
            href="#contact" 
            className="bg-[#0b1a33] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors duration-300"
          >
            {getTextByLanguage({ar: 'احجز استشارة متخصصة', en: 'Book Specialized Consultation', fr: 'Réservez une Consultation Spécialisée', it: 'Prenota Consultazione Specializzata'})}
          </a>
        </div>

      </div>
    </div>
  );
};

export default ArbitrationMediation;