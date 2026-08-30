import React, { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';

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
    <div className="min-h-screen bg-[#0b1a33] text-gray-200" dir={isRTL ? 'rtl' : 'ltr'}>
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white overflow-hidden bg-[#0b1a33]">
        <img
          src="/images/services/arbitration-mediation.webp"
          alt={isRTL ? "التحكيم والوساطة - مكتب كريم الديب للمحاماة" : "Arbitration & Mediation - Karim El-Dib Law Firm"}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[#0b1a33] bg-opacity-70 z-[1]"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0b1a33] to-transparent z-[2]"></div>
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
            {getTextByLanguage({ar: 'محامي التحكيم والوساطة', en: 'Arbitration & Mediation Lawyer', fr: 'Avocat en Arbitrage et Médiation', it: 'Avvocato in Arbitrato e Mediazione'})}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-6 font-medium text-[#d4a15c]">
            {getTextByLanguage({
              ar: 'المحامي كريم الديب - خبير في التحكيم الدولي والتجاري والوساطة. نقدم حلول بديلة لحل النزاعات بطريقة أسرع وأكثر كفاءة من التقاضي التقليدي.',
              en: 'Lawyer Karim El-Dib - Expert in international and commercial arbitration and mediation. We provide alternative dispute resolution solutions faster and more efficiently than traditional litigation.',
              fr: 'Avocat Karim El-Dib - Expert en arbitrage international, commercial et médiation. Nous fournissons des solutions alternatives de résolution des litiges rapides.',
              it: 'Avvocato Karim El-Dib - Esperto in arbitrato internazionale, commerciale e mediazione. Forniamo soluzioni alternative veloci ed efficienti per la risoluzione delle controversie.'
            })}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

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

        {/* القانون الدولي والتحكيم الدولي */}
        <div className="mb-16 bg-[#1a2d4d]/30 rounded-2xl p-8 border border-[#c8a876]/10">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-3xl font-bold text-[#c8a876] mb-4">
              {getTextByLanguage({
                ar: 'القانون الدولي والتحكيم التجاري الدولي',
                en: 'International Law & International Commercial Arbitration',
                fr: 'Droit International & Arbitrage Commercial International',
                it: 'Diritto Internazionale e Arbitrato Commerciale Internazionale'
              })}
            </h2>
            <div className="w-24 h-1 bg-[#c8a876] mx-auto mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300 leading-relaxed">
            <div className="space-y-4">
              <p>
                {getTextByLanguage({
                  ar: 'يتخصص مكتبنا في القانون الدولي الخاص والعام، مع التركيز على تسوية منازعات الاستثمار الدولي وعقود التجارة الدولية. نحن نمثل الشركات الأجنبية والمستثمرين في مصر، والمصريين بالخارج، في النزاعات العابرة للحدود.',
                  en: 'Our firm specializes in private and public international law, focusing on settling international investment disputes and international trade contracts. We represent foreign companies and investors in Egypt, and Egyptians abroad, in cross-border disputes.',
                  fr: 'Notre cabinet est spécialisé en droit international privé et public, en se concentrant sur le règlement des différends relatifs aux investissements internationaux et aux contrats commerciaux internationaux.',
                  it: 'Il nostro studio è specializzato in diritto internazionale privato e pubblico, concentrandosi sulla risoluzione delle controversie in materia di investimenti internazionali e contratti commerciali internazionali.'
                })}
              </p>
            </div>
            <div className="space-y-4">
              <p>
                {getTextByLanguage({
                  ar: 'نقدم استشارات قانونية متكاملة حول صياغة بنود التحكيم الدولي في العقود، والتمثيل القانوني أمام مراكز التحكيم الإقليمية والدولية مثل مركز القاهرة الإقليمي للتحكيم (CRCICA)، ومباشرة إجراءات تنفيذ أحكام التحكيم الأجنبية في مصر.',
                  en: 'We provide integrated legal consultations on drafting international arbitration clauses in contracts, legal representation before regional and international arbitration centers like CRCICA, and executing foreign arbitral awards in Egypt.',
                  fr: 'Nous fournissons des conseils juridiques intégrés sur la rédaction de clauses d\'arbitrage international dans les contrats, la représentation légale devant les centres d\'arbitrage régionaux et internationaux comme le CRCICA.',
                  it: 'Forniamo consulenze legali integrate sulla redazione di clausole arbitrali internazionali nei contratti, rappresentanza legale presso centri di arbitrato regionali e internazionali come CRCICA.'
                })}
              </p>
            </div>
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

        {/* تغطية الخدمة في المحافظات */}
        <div className="mb-16 bg-[#1a2d4d]/50 rounded-2xl p-8 border border-[#c8a876]/20">
          <h2 className="text-3xl font-bold text-center text-[#c8a876] mb-8">
            {getTextByLanguage({
              ar: 'تغطية الخدمة والمناطق المستهدفة في مصر',
              en: 'Service Coverage & Operation Areas in Egypt',
              fr: 'Couverture du Service & Zones d\'Opération en Égypte',
              it: 'Copertura del Servizio e Aree Operative in Egitto'
            })}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Alexandria */}
            <div className="bg-[#0b1a33]/60 rounded-xl p-6 border border-[#c8a876]/10 flex flex-col justify-between items-center text-center">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {getTextByLanguage({ ar: 'المكتب الرئيسي - الإسكندرية', en: 'Main Office - Alexandria', fr: 'Bureau Principal - Alexandrie', it: 'Ufficio Principale - Alessandria' })}
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  {getTextByLanguage({
                    ar: 'نقدم خدمات التمثيل والتحكيم والوساطة المباشرة للمستثمرين والشركات التجارية في مكتبنا الرئيسي بالإسكندرية.',
                    en: 'We provide direct representation, arbitration, and mediation services for investors and commercial businesses at our Alexandria Main Office.',
                    fr: 'Nous offrons des services d\'arbitrage, de médiation et de représentation directe pour les investisseurs et entreprises à notre bureau d\'Alexandrie.',
                    it: 'Offriamo servizi di arbitrato, mediazione e rappresentanza diretta per investitori e imprese presso il nostro ufficio principale di Alessandria.'
                  })}
                </p>
              </div>
              <Link to="/alexandria" className="text-sm text-[#c8a876] hover:text-white hover:underline font-semibold">
                {getTextByLanguage({ ar: 'تفاصيل فرع الإسكندرية ←', en: 'Alexandria Office Details ←', fr: 'Détails du Bureau d\'Alexandrie ←', it: 'Dettagli Ufficio Alessandria ←' })}
              </Link>
            </div>

            {/* Sharm El Sheikh */}
            <div className="bg-[#0b1a33]/60 rounded-xl p-6 border border-[#c8a876]/10 flex flex-col justify-between items-center text-center">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {getTextByLanguage({ ar: 'فرع شرم الشيخ', en: 'Sharm El Sheikh Branch', fr: 'Succursale - Sharm El Sheikh', it: 'Filiale - Sharm El Sheikh' })}
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  {getTextByLanguage({
                    ar: 'دعم كامل للمستثمرين الأجانب والفنادق والمنشآت السياحية في شرم الشيخ وجنوب سيناء لتسوية النزاعات وحلها ودياً.',
                    en: 'Full support for foreign investors, hotels, and tourism businesses in Sharm El Sheikh & South Sinai to settle and resolve disputes amicably.',
                    fr: 'Soutien complet aux investisseurs, hôtels et entreprises touristiques à Charm el-Cheikh et dans le Sinaï Sud pour régler les litiges.',
                    it: 'Supporto completo per investitori stranieri, hotel e imprese turistiche a Sharm El Sheikh e nel Sinai del Sud per risolvere controversie.'
                  })}
                </p>
              </div>
              <Link to="/sharm-el-sheikh" className="text-sm text-[#c8a876] hover:text-white hover:underline font-semibold">
                {getTextByLanguage({ ar: 'تفاصيل فرع شرم الشيخ ←', en: 'Sharm El Sheikh Branch Details ←', fr: 'Détails de la Succursale de Charm ←', it: 'Dettagli Filiale Sharm ←' })}
              </Link>
            </div>

            {/* Cairo */}
            <div className="bg-[#0b1a33]/60 rounded-xl p-6 border border-[#c8a876]/10 flex flex-col justify-between items-center text-center">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {getTextByLanguage({ ar: 'مكتب التمثيل - القاهرة', en: 'Representation Office - Cairo', fr: 'Bureau de Représentation - Le Caire', it: 'Ufficio di Rappresentanza - Il Cairo' })}
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  {getTextByLanguage({
                    ar: 'تمثيل كامل أمام هيئات التحكيم بمركز القاهرة الإقليمي للتحكيم التجاري الدولي (CRCICA) ومباشرة إجراءات التأسيس والمستندات.',
                    en: 'Full representation before arbitration tribunals at Cairo Regional Centre (CRCICA) and direct handling of company formation papers.',
                    fr: 'Représentation devant les tribunaux d\'arbitrage du Centre de Caire (CRCICA) et traitement direct des documents de création.',
                    it: 'Rappresentanza davanti ai tribunali arbitrali del Centro del Cairo (CRCICA) e gestione diretta dei documenti di costituzione.'
                  })}
                </p>
              </div>
              <Link to="/cairo" className="text-sm text-[#c8a876] hover:text-white hover:underline font-semibold">
                {getTextByLanguage({ ar: 'تفاصيل خدمات القاهرة ←', en: 'Cairo Services Details ←', fr: 'Détails des Services du Caire ←', it: 'Dettagli Servizi Cairo ←' })}
              </Link>
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