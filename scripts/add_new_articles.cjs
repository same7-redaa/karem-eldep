const fs = require('fs');
let code = fs.readFileSync('src/data/staticArticles.ts', 'utf8');

const newArticles = `
  'comprehensive-legal-services-guide-egypt-2026': {
    id: 'comprehensive-guide-2026',
    slug: 'comprehensive-legal-services-guide-egypt-2026',
    title: 'دليل الخدمات القانونية الشامل للأجانب والشركات في مصر 2026: تأسيس الشركات، الإقامات، العقارات، والتحكيم الدولي',
    title_en: 'Comprehensive Legal Services Guide for Foreigners & Companies in Egypt 2026: Business, Residency & Arbitration',
    title_fr: 'Guide Juridique Complet pour Étrangers et Sociétés en Égypte 2026',
    title_it: 'Guida Legale Completa per Stranieri e Imprese in Egitto 2026',
    excerpt: 'الدليل القانوني المرجعي لعام 2026: تأسيس الشركات للأجانب، إقامات وتأشيرات العمل، الفحص العقاري، والتحكيم التجاري الدولي مع مؤسسة كريم الديب للمحاماة.',
    excerpt_en: 'The definitive 2026 legal guide: company formation for foreigners, residency visas, real estate due diligence, and international arbitration in Egypt.',
    excerpt_fr: 'Guide de référence 2026: création de sociétés pour étrangers, visas de résidence, audit immobilier et arbitrage international en Égypte.',
    excerpt_it: 'Guida legale di riferimento 2026: costituzione di società per stranieri, visti di soggiorno, due diligence immobiliare e arbitrato in Egitto.',
    image: '/images/services/foreigners-in-egypt.webp',
    date: '2026-10-25',
    category: 'خدمات الأجانب والاستثمار',
    readTime: '10 دقائق',
    tags: ['تأسيس شركات للأجانب', 'إقامة الأجانب في مصر', 'شراء عقارات للأجانب', 'تحكيم تجاري دولي', 'كريم الديب محامي'],
    isPublished: true,
    order: 0,
    content: \`
      <h2>1. خدمات المستثمرين وتأسيس الشركات في مصر (قانون الاستثمار 72 لسنة 2017)</h2>
      <p>تُعد مصر اليوم واحدة من أكثر الوجهات الاستثمارية جاذبية في الشرق الأوسط وإفريقيا. يتيح القانون المصري للمستثمرين الأجانب التملك بنسبة 100% في معظم الأنشطة الاقتصادية عبر عدة كيانات قانونية: الشركات ذات المسؤولية المحدودة (LLC)، شركة الشخص الواحد، والشركات المساهمة.</p>

      <h2>2. دليل إقامات وتأشيرات الأجانب في مصر 2026</h2>
      <p>تنظم مصلحة الهجرة والجوازات المصرية أنواع الإقامات: الإقامة الاستثمارية عبر هيئة الاستثمار GAFI، الإقامة العقارية لشراء العقارات المسجلة بالدولار، إقامة الزواج من مصري/مصرية، وإقامات العمل الرسمية.</p>

      <h2>3. الشراء والاستثمار العقاري للأجانب والفحص النافي للجهالة</h2>
      <p>فحص تسلسل الملكية بالشهر العقاري، مراجعة تراخيص البناء، صياغة عقود البيع بثلاث لغات، وتوثيق عقود حق الانتفاع والتملك في شرم الشيخ وشبه جزيرة سيناء طبقاً للضوابط القانونية الصارمة.</p>

      <h2>4. التحكيم التجاري الدولي وتنفيذ أحكام التحكيم الأجنبية</h2>
      <p>مباشرة النزاعات أمام مركز القاهرة الإقليمي (CRCICA) ومحكمة التحكيم الدولية (ICC)، واستصدار الصيغة التنفيذية للأحكام الأجنبية بموجب اتفاقية نيويورك 1958 والقانون رقم 27 لسنة 1994.</p>

      <h2>5. خدمات المصريين المقيمين بالخارج وإدارة التركات</h2>
      <p>حصر التركات، قسمة الميراث، استخراج إعلام الوراثة، وإدارة وتسييل العقارات الاستثمارية في مصر دون حاجة المغترب للسفر عبر التوكيلات القنصلية الرسمية.</p>
    \`,
    content_en: \`
      <h2>1. Foreign Investment & Company Formation in Egypt 2026</h2>
      <p>Egypt offers compelling investment incentives under Investment Law No. 72 of 2017. Foreign nationals can establish 100% foreign-owned LLCs, single-person entities, and joint-stock corporations with rapid registration at GAFI.</p>

      <h2>2. Expat Residency & Visa Procedures in Egypt</h2>
      <p>Comprehensive overview of investor residency permits, real estate purchase residency visas, marriage visas, and work permit accreditations for executives and international specialists.</p>

      <h2>3. Real Estate Purchase & Due Diligence for Foreigners</h2>
      <p>Legal due diligence at the Egyptian Real Estate Registry, multi-language contractual protections, and compliant property ownership in Cairo, Alexandria, and Sharm El Sheikh (Sinai Usufruct Deeds).</p>

      <h2>4. International Commercial Arbitration & Award Enforcement</h2>
      <p>Representation before CRCICA, ICC, and Cairo Courts for the swift enforcement of foreign arbitral awards pursuant to the 1958 New York Convention.</p>
    \`
  },

  'international-arbitration-foreign-investors-lawyer-egypt-2026': {
    id: 'arbitration-investors-2026',
    slug: 'international-arbitration-foreign-investors-lawyer-egypt-2026',
    title: 'محامي تحكيم دولي وقضايا أجانب في مصر 2026: الدليل القانوني الشامل لتسوية منازعات الاستثمار والتمثيل أمام CRCICA',
    title_en: 'International Arbitration & Foreign Investors Lawyer in Egypt 2026: CRCICA Representation & Award Enforcement',
    title_fr: 'Avocat Arbitrage International & Investisseurs Étrangers en Égypte 2026',
    title_it: 'Avvocato Arbitrato Internazionale & Investitori Stranieri in Egitto 2026',
    excerpt: 'الدليل المتخصص في التحكيم التجاري الدولي بمصر: شروط وضوابط شرط التحكيم، فض منازعات الطاقة والإنشاءات، والتمثيل أمام CRCICA وتنفيذ الأحكام الأجنبية باتفاقية نيويورك.',
    excerpt_en: 'Specialized legal guide to international commercial arbitration in Egypt: arbitration clauses, CRCICA representation, and foreign award enforcement under the 1958 New York Convention.',
    excerpt_fr: 'Guide spécialisé de l\\'arbitrage commercial international en Égypte, représentation devant le CRCICA et exécution des sentences étrangères.',
    excerpt_it: 'Guida specializzata all\\'arbitrato commerciale internazionale in Egitto, rappresentanza CRCICA ed esecuzione di lodi stranieri.',
    image: '/images/services/arbitration-mediation.webp',
    date: '2026-10-28',
    category: 'التحكيم الدولي',
    readTime: '9 دقائق',
    tags: ['محامي تحكيم دولي', 'مركز القاهرة CRCICA', 'اتفاقية نيويورك 1958', 'منازعات استثمار أجنبي', 'تنفيذ أحكام التحكيم بمصر'],
    isPublished: true,
    order: 0,
    content: \`
      <h2>1. لماذا يختار المستثمرون والشركات الدولية التحكيم التجاري في مصر؟</h2>
      <p>يوفر التحكيم السرية التامة، سرعة الفصل في النزاعات المعقدة خلال 6 إلى 12 شهراً، حرية اختيار المحكمين الخبراء، والقدرة على تطبيق القواعد والقوانين الدولية.</p>

      <h2>2. الإطار التشريعي: قانون التحكيم المصري رقم 27 لسنة 1994</h2>
      <p>مستمد من قانون الأونسيترال النموذجي، ويكرس مبادئ استقلالية شرط التحكيم (Separability Doctrine)، واختصاص المحكمين بالبت في اختصاصهم (Kompetenz-Kompetenz)، ونهائية أحكام التحكيم وحصانتها من الاستئناف.</p>

      <h2>3. التمثيل القانوني أمام مركز القاهرة الإقليمي (CRCICA)</h2>
      <p>صياغة طلبات التحكيم، التدابير الوقتية والتحفظية على الحسابات والأصول، وإدارة جلسات الاستماع والمرافعات باللغات العربية والإنجليزية والفرنسية.</p>

      <h2>4. خطوات تنفيذ أحكام التحكيم الأجنبية في مصر (Exequatur)</h2>
      <p>إيداع أصل الحكم والترجمة المعتمدة لدى محكمة الاستئناف، استصدار الأمر بوضع الصيغة التنفيذية طبقاً لاتفاقية نيويورك 1958، وتوقيع الحجز التنفيذي على أموال المدين لتسييل المبالغ المقضي بها.</p>
    \`,
    content_en: \`
      <h2>1. Why Foreign Investors Rely on Commercial Arbitration in Egypt</h2>
      <p>International arbitration offers complete confidentiality, swift adjudication (6-12 months), party autonomy in selecting specialist arbitrators, and freedom of choice of governing law.</p>

      <h2>2. Statutory Framework: Egyptian Arbitration Law No. 27 of 1994</h2>
      <p>Derived from the UNCITRAL Model Law, establishing the separability of the arbitration agreement, kompetenz-kompetenz, and finality of arbitral awards.</p>

      <h2>3. Legal Representation Before CRCICA</h2>
      <p>Comprehensive representation before the Cairo Regional Centre for International Commercial Arbitration, interim emergency relief, and multilingual hearings.</p>

      <h2>4. Enforcement of Foreign Arbitral Awards Under the 1958 New York Convention</h2>
      <p>Filing the exequatur petition before the Court of Appeal, obtaining immediate writ of execution, and levying judicial attachment on debtor assets in Egypt.</p>
    \`
  },
`;

const insertMarker = "export const staticArticles: Record<string, StaticArticle> = {";
code = code.replace(insertMarker, insertMarker + newArticles);

// Add slug aliases
const aliasMarker = "export const slugAliases: Record<string, string> = {";
const newAliases = `
  'comprehensive-guide-egypt-2026': 'comprehensive-legal-services-guide-egypt-2026',
  'arbitration-investors-guide-2026': 'international-arbitration-foreign-investors-lawyer-egypt-2026',
`;
code = code.replace(aliasMarker, aliasMarker + newAliases);

fs.writeFileSync('src/data/staticArticles.ts', code, 'utf8');
console.log('staticArticles.ts updated with 2 high-value 2026 articles!');

