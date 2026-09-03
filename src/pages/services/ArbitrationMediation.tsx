import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import AdvancedSEO from '../../components/AdvancedSEO';

const ArbitrationMediation: React.FC = () => {
  const { language, getTextByLanguage } = useLanguage();
  const isRTL = language === 'ar';

  const seoTitle = language === 'ar'
    ? 'محامي تحكيم دولي في مصر | منازعات الاستثمار والتحكيم التجاري | كريم الديب'
    : language === 'fr'
    ? 'Avocat Arbitrage International Égypte | Litiges Investissement & Commercial | Karim Eldib'
    : language === 'it'
    ? 'Avvocato Arbitrato Internazionale Egitto | Controversie Investimento | Karim Eldib'
    : 'International Arbitration Lawyer in Egypt | Investment & Commercial Dispute Resolution | Karim Eldib';

  const seoDescription = language === 'ar'
    ? 'محامي كريم الديب — مكتب محاماة دولي متخصص في التحكيم التجاري الدولي، منازعات المستثمرين الأجانب، تسوية المنازعات الدولية، وتنفيذ أحكام التحكيم الأجنبية في مصر. تمثيل أمام CRCICA وICCوUNCITRAL. مصر — الإسكندرية — القاهرة — شرم الشيخ.'
    : language === 'fr'
    ? 'Cabinet Karim Eldib — Spécialiste en arbitrage commercial international, litiges d\'investissement étranger, résolution des différends transfrontaliers et exécution de sentences arbitrales en Égypte. Représentation devant CRCICA, ICC et UNCITRAL.'
    : language === 'it'
    ? 'Studio Karim Eldib — Specialista in arbitrato commerciale internazionale, controversie sugli investimenti esteri, risoluzione delle dispute transfrontaliere ed esecuzione di lodi arbitrali in Egitto. CRCICA, ICC, UNCITRAL.'
    : 'Karim Eldib — International Arbitration & Dispute Resolution Lawyer in Egypt. Expert in international commercial arbitration, investment disputes, cross-border dispute resolution, and enforcement of foreign arbitral awards. Representation before CRCICA, ICC, LCIA & UNCITRAL in Cairo, Alexandria & Sharm El Sheikh.';

  const seoKeywords = language === 'ar'
    ? 'محامي تحكيم دولي في مصر, التحكيم التجاري الدولي في مصر, محاماة التحكيم الدولي في مصر, تسوية المنازعات الدولية في مصر, محامي منازعات دولية في مصر, حل المنازعات التجارية الدولية, محامي منازعات تجارية دولية, محامي استثمار أجنبي في مصر, منازعات المستثمرين الأجانب في مصر, منازعات الاستثمار في مصر, تسوية المنازعات الاستثمارية, محامي شركات دولي في مصر, محامي دولي في مصر, مكتب محاماة دولي في مصر, محامي تحكيم دولي في الإسكندرية, محامي تحكيم دولي في شرم الشيخ, محامي منازعات تجارية في مصر, محامي عقود تجارية دولية, منازعات العقود التجارية الدولية, المنازعات العابرة للحدود, التقاضي في المنازعات الدولية, تنفيذ أحكام التحكيم الأجنبية في مصر, الاعتراف بأحكام التحكيم الأجنبية في مصر, تنفيذ أحكام التحكيم الدولي في مصر, الوساطة وتسوية المنازعات في مصر, التفاوض وتسوية المنازعات التجارية'
    : 'International Arbitration Lawyer in Egypt, International Arbitration in Egypt, International Dispute Resolution in Egypt, International Law Firm in Egypt, International Lawyers in Egypt, Commercial Arbitration in Egypt, International Commercial Arbitration, Cross-Border Dispute Resolution, International Commercial Disputes, Investment Disputes in Egypt, Foreign Investor Disputes in Egypt, Arbitration Lawyer in Alexandria, Arbitration Lawyer in Sharm El Sheikh, Dispute Resolution Lawyer in Egypt, Foreign Investors Lawyer Egypt, CRCICA arbitration Egypt, enforcement foreign arbitral awards Egypt, investment arbitration Egypt';

  // ─── FAQ Schema (FAQPage) ───────────────────────────────────────────────────
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": language === 'ar'
      ? [
          {
            "@type": "Question",
            "name": "ما هو التحكيم التجاري الدولي في مصر؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "التحكيم التجاري الدولي في مصر هو وسيلة بديلة لفض النزاعات خارج المحاكم، يحكمه القانون رقم 27 لسنة 1994. يُعيَّن محكمون متخصصون لإصدار قرار ملزم في النزاعات التجارية والاستثمارية الدولية، وتنفذ أحكامه دولياً وفقاً لاتفاقية نيويورك 1958."
            }
          },
          {
            "@type": "Question",
            "name": "كيف يتم تنفيذ أحكام التحكيم الأجنبية في مصر؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "تُنفذ أحكام التحكيم الأجنبية في مصر بموجب اتفاقية نيويورك 1958 والقانون رقم 27 لسنة 1994. يُقدَّم طلب الاعتراف والتنفيذ أمام محكمة الاستئناف، وتُصدر الأمر بالتنفيذ بعد التحقق من شروط الصحة الشكلية وعدم مخالفة النظام العام."
            }
          },
          {
            "@type": "Question",
            "name": "ما هو مركز القاهرة الإقليمي للتحكيم (CRCICA)؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "مركز القاهرة الإقليمي للتحكيم التجاري الدولي (CRCICA) هو أبرز مركز تحكيم دولي في أفريقيا والشرق الأوسط، يعمل وفق قواعد UNCITRAL. يُقدم مكتب كريم الديب تمثيلاً قانونياً كاملاً أمام CRCICA في القاهرة."
            }
          },
          {
            "@type": "Question",
            "name": "ما خيارات تسوية منازعات الاستثمار الأجنبي في مصر؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "تشمل خيارات تسوية منازعات الاستثمار الأجنبي في مصر: التحكيم الدولي أمام ICSID وICCوCRCICA، والوساطة التجارية، والتفاوض المباشر، والتقاضي أمام المحاكم المصرية. يُرجَّح التحكيم الدولي في معظم اتفاقيات الاستثمار الثنائية (BITs)."
            }
          },
          {
            "@type": "Question",
            "name": "هل يقدم مكتب كريم الديب خدمات التحكيم في الإسكندرية وشرم الشيخ؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نعم، يُقدم مكتب كريم الديب خدمات التحكيم التجاري الدولي وتسوية المنازعات في الإسكندرية وشرم الشيخ والقاهرة وجميع أنحاء مصر، مع التمثيل أمام مراكز التحكيم المحلية والدولية."
            }
          }
        ]
      : [
          {
            "@type": "Question",
            "name": "What is international commercial arbitration in Egypt?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "International commercial arbitration in Egypt is an alternative dispute resolution (ADR) method governed by Law No. 27 of 1994. Specialized arbitrators are appointed to issue a binding award in international commercial and investment disputes. Awards are internationally enforceable under the 1958 New York Convention."
            }
          },
          {
            "@type": "Question",
            "name": "How to enforce foreign arbitral awards in Egypt?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Foreign arbitral awards are enforced in Egypt under the New York Convention 1958 and Law No. 27 of 1994. A recognition and enforcement petition is filed before the Court of Appeal, which issues an exequatur order after verifying formal validity requirements and ensuring non-violation of Egyptian public order."
            }
          },
          {
            "@type": "Question",
            "name": "What is CRCICA and how does it handle arbitration cases in Egypt?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Cairo Regional Centre for International Commercial Arbitration (CRCICA) is the leading international arbitration center in Africa and the Middle East, operating under UNCITRAL rules. Karim Eldib Law Firm provides full legal representation before CRCICA in Cairo for commercial and investment disputes."
            }
          },
          {
            "@type": "Question",
            "name": "What are the options for resolving investment disputes in Egypt?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Options for resolving foreign investment disputes in Egypt include: international arbitration before ICSID, ICC, LCIA, and CRCICA; commercial mediation; direct negotiation; and Egyptian court litigation. International arbitration is typically preferred under Bilateral Investment Treaties (BITs)."
            }
          },
          {
            "@type": "Question",
            "name": "Does Karim Eldib Law Firm handle arbitration in Alexandria and Sharm El Sheikh?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Karim Eldib Law Firm provides international commercial arbitration and dispute resolution services in Alexandria, Sharm El Sheikh, Cairo, and across Egypt, with representation before both local and international arbitration centers."
            }
          },
          {
            "@type": "Question",
            "name": "What is cross-border dispute resolution and how does it work in Egypt?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cross-border dispute resolution refers to resolving commercial and investment disputes between parties from different countries. In Egypt, this is primarily handled through international arbitration under ICC, UNCITRAL, or CRCICA rules, or through bilateral investment treaty arbitration before ICSID."
            }
          }
        ]
  };

  // ─── LegalService Schema (Arbitration-specific) ────────────────────────────
  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": "https://www.ke-lawyer.com/arbitration-mediation#legalservice",
    "name": language === 'ar'
      ? "مكتب كريم الديب للتحكيم التجاري الدولي وتسوية المنازعات"
      : "Karim Eldib International Arbitration & Dispute Resolution Law Firm",
    "alternateName": [
      "International Arbitration Lawyer Egypt",
      "محامي تحكيم دولي مصر",
      "Dispute Resolution Lawyer in Egypt",
      "Karim Eldib CRCICA"
    ],
    "description": seoDescription,
    "url": "https://www.ke-lawyer.com/arbitration-mediation",
    "telephone": "+201223767592",
    "knowsLanguage": ["Arabic", "English", "French", "Italian"],
    "areaServed": [
      { "@type": "Country", "name": "Egypt" },
      { "@type": "City", "name": "Cairo", "alternateName": "القاهرة" },
      { "@type": "City", "name": "Alexandria", "alternateName": "الإسكندرية" },
      { "@type": "City", "name": "Sharm El Sheikh", "alternateName": "شرم الشيخ" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "International Arbitration & Dispute Resolution Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "International Commercial Arbitration in Egypt",
            "description": "Full legal representation in international commercial arbitration before CRCICA, ICC, LCIA and UNCITRAL in Egypt."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Investment Disputes & Foreign Investor Disputes in Egypt",
            "description": "Legal representation for investment disputes and foreign investor disputes in Egypt, including ICSID arbitration and bilateral investment treaty claims."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Enforcement of Foreign Arbitral Awards in Egypt",
            "description": "Enforcement and recognition of foreign arbitral awards in Egypt under the New York Convention 1958 and Egyptian Law No. 27 of 1994."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cross-Border Dispute Resolution",
            "description": "Cross-border and international commercial dispute resolution through arbitration, mediation and negotiation in Egypt."
          }
        }
      ]
    },
    "sameAs": [
      "https://www.ke-lawyer.com",
      "https://www.facebook.com/Unlimitedsharm"
    ]
  };

  return (
    <div className="min-h-screen bg-[#0b1a33] text-gray-200" dir={isRTL ? 'rtl' : 'ltr'}>
      <AdvancedSEO
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        canonicalUrl="https://www.ke-lawyer.com/arbitration-mediation"
      />

      {/* Inject FAQ + LegalService Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
      />


      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white overflow-hidden bg-[#0b1a33]">
        <img
          src="/images/services/arbitration-mediation.webp"
          alt={isRTL ? "التحكيم التجاري الدولي في مصر - مكتب كريم الديب للمحاماة" : "International Commercial Arbitration in Egypt - Karim El-Dib Law Firm"}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[#0b1a33] bg-opacity-70 z-[1]"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0b1a33] to-transparent z-[2]"></div>
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
            {getTextByLanguage({
              ar: 'محامي تحكيم دولي في مصر - تسوية المنازعات الدولية',
              en: 'International Arbitration & Dispute Resolution Lawyer in Egypt',
              fr: 'Avocat en Arbitrage International & Résolution des Litiges en Égypte',
              it: 'Avvocato in Arbitrato Internazionale e Risoluzione delle Controversie in Egitto'
            })}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-6 font-medium text-[#d4a15c]">
            {getTextByLanguage({
              ar: 'المؤسسة القانونية للأستاذ كريم الديب - متخصصون في التحكيم التجاري الدولي ومنازعات الاستثمار الأجنبي وتسييل وتنفيذ أحكام التحكيم الأجنبية في مصر. نقدم حلولاً متكاملة لتسوية المنازعات العابرة للحدود بطريقة أسرع وأكثر كفاءة.',
              en: 'Karim El-Dib Law Firm - Specialized in international commercial arbitration, foreign investment disputes, and enforcement of foreign arbitral awards in Egypt. We provide comprehensive solutions for cross-border dispute resolution.',
              fr: 'Maitre Karim El-Dib - Spécialisé en arbitrage commercial international, litiges d\'investissement étranger et exécution des sentences arbitrales en Égypte. Solutions de résolution des litiges transfrontaliers.',
              it: 'Avvocato Karim El-Dib - Specializzato in arbitrato commerciale internazionale, controversie sugli investimenti esteri ed esecuzione di lodi arbitrali in Egitto. Soluzioni di risoluzione delle controversie.'
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


        {/* ═══ Investment Disputes in Egypt ══════════════════════════════════ */}
        <div className="mb-16 bg-gradient-to-br from-[#1a2d4d] to-[#0e1f3b] rounded-2xl p-8 border border-[#c8a876]/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#c8a876] mb-4 text-center">
              {getTextByLanguage({
                ar: 'منازعات الاستثمار ومنازعات المستثمرين الأجانب في مصر',
                en: 'Investment Disputes & Foreign Investor Disputes in Egypt',
                fr: 'Litiges d\'Investissement & Litiges des Investisseurs Étrangers en Égypte',
                it: 'Controversie sugli Investimenti & Stranieri in Egitto'
              })}
            </h2>
            <div className="w-20 h-1 bg-[#c8a876] mx-auto mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300 leading-relaxed">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {getTextByLanguage({
                    ar: 'حماية حقوق المستثمر الأجنبي في مصر',
                    en: 'Protecting Foreign Investor Rights in Egypt',
                    fr: 'Protection des Droits des Investisseurs Étrangers en Égypte',
                    it: 'Protezione dei Diritti degli Investitori Stranieri in Egitto'
                  })}
                </h3>
                <p className="mb-4">
                  {getTextByLanguage({
                    ar: 'يُكفل قانون الاستثمار المصري رقم 72 لسنة 2017 حقوق المستثمرين الأجانب ويمنحهم الحق في اللجوء إلى التحكيم الدولي لتسوية منازعاتهم مع الدولة المصرية أو الأطراف التجارية الأخرى. يمتلك مكتب كريم الديب خبرة واسعة في تمثيل المستثمرين الأجانب.',
                    en: 'Egyptian Investment Law No. 72 of 2017 guarantees foreign investor rights and grants them the right to resort to international arbitration to settle disputes with the Egyptian state or other commercial parties. Karim Eldib Law Firm has extensive experience representing foreign investors.',
                    fr: 'La loi égyptienne sur l\'investissement n° 72 de 2017 garantit les droits des investisseurs étrangers et leur accorde le droit de recourir à l\'arbitrage international. Le cabinet Karim Eldib a une vaste expérience dans la représentation des investisseurs étrangers.',
                    it: 'La legge egiziana sugli investimenti n. 72 del 2017 garantisce i diritti degli investitori stranieri e concede loro il diritto di ricorrere all\'arbitrato internazionale. Lo Studio Karim Eldib ha ampia esperienza nella rappresentanza di investitori stranieri.'
                  })}
                </p>
                <ul className="space-y-2">
                  {[
                    getTextByLanguage({ ar: 'تحكيم منازعات الاستثمار أمام ICSID', en: 'Investment arbitration before ICSID', fr: 'Arbitrage d\'investissement devant l\'ICSID', it: 'Arbitrato degli investimenti davanti all\'ICSID' }),
                    getTextByLanguage({ ar: 'مطالبات اتفاقيات الاستثمار الثنائية (BITs)', en: 'Bilateral Investment Treaty (BIT) claims', fr: 'Réclamations de traités bilatéraux d\'investissement', it: 'Reclami da trattati bilaterali di investimento' }),
                    getTextByLanguage({ ar: 'النزاعات مع الجهات الحكومية المصرية', en: 'Disputes with Egyptian government entities', fr: 'Litiges avec les entités gouvernementales égyptiennes', it: 'Controversie con enti governativi egiziani' }),
                    getTextByLanguage({ ar: 'منازعات عقود الامتياز والتراخيص', en: 'Concession and licensing contract disputes', fr: 'Litiges de concessions et de licences', it: 'Controversie su concessioni e licenze' }),
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <i className="fas fa-check-circle text-[#c8a876] text-sm flex-shrink-0"></i>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {getTextByLanguage({
                    ar: 'المنازعات العابرة للحدود والتجارة الدولية',
                    en: 'Cross-Border Disputes & International Commercial Disputes',
                    fr: 'Litiges Transfrontaliers & Disputes Commerciales Internationales',
                    it: 'Controversie Transfrontaliere & Dispute Commerciali Internazionali'
                  })}
                </h3>
                <p className="mb-4">
                  {getTextByLanguage({
                    ar: 'تشمل خدماتنا في تسوية المنازعات الدولية: منازعات عقود الاستيراد والتصدير، النزاعات بين الشركات متعددة الجنسيات، الخلافات على حقوق الملكية الفكرية الدولية، ونزاعات عقود البناء والإنشاء الدولية.',
                    en: 'Our international dispute resolution services include: import/export contract disputes, multinational company disputes, international intellectual property rights conflicts, and international construction contract disputes.',
                    fr: 'Nos services de résolution des litiges internationaux comprennent: litiges de contrats import/export, différends entre multinationales, conflits de propriété intellectuelle internationale, et litiges de contrats de construction internationaux.',
                    it: 'I nostri servizi di risoluzione delle controversie internazionali includono: dispute su contratti import/export, controversie tra multinazionali, conflitti di proprietà intellettuale internazionale e dispute su contratti di costruzione internazionali.'
                  })}
                </p>
                <div className="bg-[#0b1a33]/60 rounded-lg p-4 border border-[#c8a876]/10">
                  <p className="text-[#c8a876] font-semibold text-sm mb-2">
                    {getTextByLanguage({ ar: 'تواصل مع محامي تحكيم دولي في مصر', en: 'Contact an International Arbitration Lawyer in Egypt', fr: 'Contactez un Avocat en Arbitrage International en Égypte', it: 'Contatta un Avvocato di Arbitrato Internazionale in Egitto' })}
                  </p>
                  <p className="text-gray-300 text-sm">
                    {getTextByLanguage({ ar: '+20 122 376 7592 | kingarim2411@gmail.com', en: '+20 122 376 7592 | kingarim2411@gmail.com', fr: '+20 122 376 7592 | kingarim2411@gmail.com', it: '+20 122 376 7592 | kingarim2411@gmail.com' })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══ Enforcement of Foreign Arbitral Awards ════════════════════════ */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-[#c8a876] mb-4">
            {getTextByLanguage({
              ar: 'تنفيذ أحكام التحكيم الأجنبية في مصر والاعتراف بها',
              en: 'Enforcement of Foreign Arbitral Awards in Egypt',
              fr: 'Exécution des Sentences Arbitrales Étrangères en Égypte',
              it: 'Esecuzione di Lodi Arbitrali Stranieri in Egitto'
            })}
          </h2>
          <div className="w-20 h-1 bg-[#c8a876] mx-auto mb-10"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: 'fas fa-file-signature',
                title: getTextByLanguage({ ar: 'اتفاقية نيويورك 1958', en: 'New York Convention 1958', fr: 'Convention de New York 1958', it: 'Convenzione di New York 1958' }),
                text: getTextByLanguage({
                  ar: 'مصر طرف في اتفاقية نيويورك منذ 1959، مما يتيح تنفيذ أحكام التحكيم الأجنبية من 170+ دولة في مصر.',
                  en: 'Egypt has been a signatory to the New York Convention since 1959, enabling enforcement of foreign arbitral awards from 170+ countries in Egypt.',
                  fr: 'L\'Égypte est signataire de la Convention de New York depuis 1959, permettant l\'exécution de sentences arbitrales étrangères de plus de 170 pays.',
                  it: 'L\'Egitto è firmatario della Convenzione di New York dal 1959, consentendo l\'esecuzione di lodi arbitrali stranieri da oltre 170 paesi.'
                })
              },
              {
                icon: 'fas fa-gavel',
                title: getTextByLanguage({ ar: 'القانون رقم 27 لسنة 1994', en: 'Egyptian Arbitration Law No. 27/1994', fr: 'Loi Égyptienne d\'Arbitrage n°27/1994', it: 'Legge Egiziana sull\'Arbitrato n.27/1994' }),
                text: getTextByLanguage({
                  ar: 'يُنظم القانون 27/1994 إجراءات تنفيذ أحكام التحكيم الأجنبية والدولية في مصر عبر طلب الاعتراف أمام محكمة الاستئناف.',
                  en: 'Law 27/1994 regulates the recognition and enforcement of foreign and international arbitral awards in Egypt through the Court of Appeal.',
                  fr: 'La loi 27/1994 régit la reconnaissance et l\'exécution des sentences arbitrales étrangères et internationales en Égypte via la Cour d\'appel.',
                  it: 'La legge 27/1994 regola il riconoscimento e l\'esecuzione dei lodi arbitrali stranieri e internazionali in Egitto tramite la Corte d\'Appello.'
                })
              },
              {
                icon: 'fas fa-balance-scale',
                title: getTextByLanguage({ ar: 'إجراءات التنفيذ والاعتراف', en: 'Recognition & Enforcement Procedure', fr: 'Procédure de Reconnaissance & Exécution', it: 'Procedura di Riconoscimento & Esecuzione' }),
                text: getTextByLanguage({
                  ar: 'يُقدم مكتب كريم الديب طلب الاعتراف والتنفيذ، ويُرفق مستندات الحكم والترجمة المعتمدة، ويتابع الإجراءات حتى صدور أمر التنفيذ.',
                  en: 'Karim Eldib Law Firm files the recognition and enforcement petition, attaches award documents and certified translations, and follows up until the exequatur order is issued.',
                  fr: 'Le cabinet Karim Eldib dépose la requête en reconnaissance et exécution, joint les documents de la sentence et les traductions certifiées, jusqu\'à l\'ordonnance exequatur.',
                  it: 'Lo Studio Karim Eldib deposita la richiesta di riconoscimento ed esecuzione, allega i documenti del lodo e le traduzioni certificate, fino all\'emissione dell\'ordine di exequatur.'
                })
              }
            ].map((card, i) => (
              <div key={i} className="bg-[#1a2d4d] rounded-xl p-6 border border-[#c8a876]/10 hover:border-[#c8a876]/40 transition-colors duration-300">
                <i className={`${card.icon} text-3xl text-[#c8a876] mb-4 block text-center`}></i>
                <h3 className="text-lg font-bold text-white mb-3 text-center">{card.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ═══ FAQ Section (visual) ═══════════════════════════════════════════ */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-[#c8a876] mb-4">
            {getTextByLanguage({
              ar: 'أسئلة شائعة عن التحكيم الدولي في مصر',
              en: 'Frequently Asked Questions — International Arbitration in Egypt',
              fr: 'Questions Fréquentes — Arbitrage International en Égypte',
              it: 'Domande Frequenti — Arbitrato Internazionale in Egitto'
            })}
          </h2>
          <div className="w-20 h-1 bg-[#c8a876] mx-auto mb-10"></div>
          <div className="space-y-4 max-w-4xl mx-auto">
            {(language === 'ar'
              ? [
                  { q: 'ما هو التحكيم التجاري الدولي في مصر؟', a: 'التحكيم التجاري الدولي في مصر هو وسيلة بديلة لفض النزاعات خارج المحاكم، يحكمه القانون رقم 27 لسنة 1994. يُعيَّن محكمون متخصصون لإصدار قرار ملزم في النزاعات التجارية والاستثمارية الدولية، وتُنفَّذ أحكامه دولياً وفقاً لاتفاقية نيويورك 1958.' },
                  { q: 'كيف يتم تنفيذ أحكام التحكيم الأجنبية في مصر؟', a: 'تُنفَّذ أحكام التحكيم الأجنبية في مصر بموجب اتفاقية نيويورك 1958 والقانون رقم 27 لسنة 1994. يُقدَّم طلب الاعتراف والتنفيذ أمام محكمة الاستئناف، وتُصدِر أمر التنفيذ بعد التحقق من الصحة الشكلية وعدم مخالفة النظام العام.' },
                  { q: 'ما خيارات تسوية منازعات الاستثمار الأجنبي في مصر؟', a: 'تشمل الخيارات: التحكيم الدولي أمام ICSID وICCوCRCICA، الوساطة التجارية، التفاوض المباشر، والتقاضي أمام المحاكم المصرية. يُرجَّح التحكيم الدولي في معظم اتفاقيات الاستثمار الثنائية (BITs).' },
                  { q: 'هل تخدم مكتب كريم الديب في الإسكندرية وشرم الشيخ والقاهرة؟', a: 'نعم، يُقدم مكتب كريم الديب خدمات التحكيم الدولي وتسوية المنازعات في الإسكندرية وشرم الشيخ والقاهرة وجميع أنحاء مصر، مع التمثيل أمام مراكز التحكيم المحلية والدولية.' },
                ]
              : [
                  { q: 'What is international commercial arbitration in Egypt?', a: 'International commercial arbitration in Egypt is an ADR method governed by Law No. 27 of 1994. Specialized arbitrators issue a binding award in commercial and investment disputes. Awards are enforceable in 170+ countries under the New York Convention 1958.' },
                  { q: 'How to enforce foreign arbitral awards in Egypt?', a: 'Foreign arbitral awards are enforced in Egypt under the New York Convention 1958 and Law No. 27 of 1994. A recognition petition is filed before the Court of Appeal, which issues an exequatur order after verifying formal requirements and non-violation of public order.' },
                  { q: 'What are the options for resolving investment disputes in Egypt?', a: 'Options include: international arbitration before ICSID, ICC, LCIA, and CRCICA; commercial mediation; direct negotiation; and Egyptian court litigation. International arbitration is typically preferred under Bilateral Investment Treaties (BITs).' },
                  { q: 'What is CRCICA and how does it handle arbitration in Egypt?', a: 'CRCICA (Cairo Regional Centre for International Commercial Arbitration) is the leading arbitration center in Africa and the Middle East, operating under UNCITRAL rules. Karim Eldib Law Firm provides full legal representation before CRCICA in Cairo.' },
                  { q: 'Does Karim Eldib handle arbitration in Alexandria and Sharm El Sheikh?', a: 'Yes. Karim Eldib Law Firm provides international arbitration and dispute resolution services in Alexandria, Sharm El Sheikh, Cairo, and across Egypt, with representation before both local and international arbitration centers.' },
                  { q: 'What is cross-border dispute resolution?', a: 'Cross-border dispute resolution handles commercial and investment disputes between parties from different countries, primarily through international arbitration under ICC, UNCITRAL, or CRCICA rules, or ICSID treaty arbitration.' },
                ]
            ).map((faq, i) => (
              <details key={i} className="bg-[#1a2d4d] rounded-xl border border-[#c8a876]/10 group">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="font-semibold text-white group-open:text-[#c8a876] transition-colors duration-200">{faq.q}</span>
                  <i className="fas fa-chevron-down text-[#c8a876] group-open:rotate-180 transition-transform duration-300 flex-shrink-0 ml-4"></i>
                </summary>
                <div className="px-5 pb-5 text-gray-300 leading-relaxed border-t border-[#c8a876]/10 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
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