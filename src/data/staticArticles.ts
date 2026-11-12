export interface StaticArticle {
  id: string;
  slug: string;
  title: string;
  title_en?: string;
  title_fr?: string;
  title_it?: string;
  /** Short <title> for search results (about 60 chars max). Falls back to `title`. */
  seoTitle?: string;
  seoTitle_en?: string;
  excerpt: string;
  excerpt_en?: string;
  excerpt_fr?: string;
  excerpt_it?: string;
  content: string;
  content_en?: string;
  content_fr?: string;
  content_it?: string;
  image?: string;
  date: string;
  dateModified?: string;
  category: string;
  readTime: string;
  tags: string[];
  isPublished: boolean;
  order: number;
}

export const staticArticles: Record<string, StaticArticle> = {
  'comprehensive-legal-services-guide-egypt-2026': {
    id: 'comprehensive-guide-2026',
    slug: 'comprehensive-legal-services-guide-egypt-2026',
    title: 'دليل الخدمات القانونية الشامل للأجانب والشركات في مصر 2026: تأسيس الشركات، الإقامات، العقارات، والتحكيم الدولي',
    title_en: 'Comprehensive Legal Services Guide for Foreigners & Companies in Egypt 2026: Business, Residency & Arbitration',
    title_fr: 'Guide Juridique Complet pour Étrangers et Sociétés en Égypte 2026',
    title_it: 'Guida Legale Completa per Stranieri e Imprese in Egitto 2026',
    seoTitle: 'الخدمات القانونية للأجانب والشركات في مصر 2026',
    seoTitle_en: 'Legal Services for Foreigners & Companies in Egypt 2026',
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
    content: `
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
    `,
    content_en: `
      <h2>1. Foreign Investment & Company Formation in Egypt 2026</h2>
      <p>Egypt offers compelling investment incentives under Investment Law No. 72 of 2017. Foreign nationals can establish 100% foreign-owned LLCs, single-person entities, and joint-stock corporations with rapid registration at GAFI.</p>

      <h2>2. Expat Residency & Visa Procedures in Egypt</h2>
      <p>Comprehensive overview of investor residency permits, real estate purchase residency visas, marriage visas, and work permit accreditations for executives and international specialists.</p>

      <h2>3. Real Estate Purchase & Due Diligence for Foreigners</h2>
      <p>Legal due diligence at the Egyptian Real Estate Registry, multi-language contractual protections, and compliant property ownership in Cairo, Alexandria, and Sharm El Sheikh (Sinai Usufruct Deeds).</p>

      <h2>4. International Commercial Arbitration & Award Enforcement</h2>
      <p>Representation before CRCICA, ICC, and Cairo Courts for the swift enforcement of foreign arbitral awards pursuant to the 1958 New York Convention.</p>
    `
  },

  'international-arbitration-foreign-investors-lawyer-egypt-2026': {
    id: 'arbitration-investors-2026',
    slug: 'international-arbitration-foreign-investors-lawyer-egypt-2026',
    title: 'محامي تحكيم دولي وقضايا أجانب في مصر 2026: الدليل القانوني الشامل لتسوية منازعات الاستثمار والتمثيل أمام CRCICA',
    title_en: 'International Arbitration & Foreign Investors Lawyer in Egypt 2026: CRCICA Representation & Award Enforcement',
    title_fr: 'Avocat Arbitrage International & Investisseurs Étrangers en Égypte 2026',
    title_it: 'Avvocato Arbitrato Internazionale & Investitori Stranieri in Egitto 2026',
    seoTitle: 'محامي تحكيم دولي ومنازعات استثمار في مصر 2026',
    seoTitle_en: 'Arbitration Lawyer for Foreign Investors in Egypt 2026',
    excerpt: 'الدليل المتخصص في التحكيم التجاري الدولي بمصر: شروط وضوابط شرط التحكيم، فض منازعات الطاقة والإنشاءات، والتمثيل أمام CRCICA وتنفيذ الأحكام الأجنبية باتفاقية نيويورك.',
    excerpt_en: 'Specialized legal guide to international commercial arbitration in Egypt: arbitration clauses, CRCICA representation, and foreign award enforcement under the 1958 New York Convention.',
    excerpt_fr: 'Guide spécialisé de l\'arbitrage commercial international en Égypte, représentation devant le CRCICA et exécution des sentences étrangères.',
    excerpt_it: 'Guida specializzata all\'arbitrato commerciale internazionale in Egitto, rappresentanza CRCICA ed esecuzione di lodi stranieri.',
    image: '/images/services/arbitration-mediation.webp',
    date: '2026-10-28',
    category: 'التحكيم الدولي',
    readTime: '9 دقائق',
    tags: ['محامي تحكيم دولي', 'مركز القاهرة CRCICA', 'اتفاقية نيويورك 1958', 'منازعات استثمار أجنبي', 'تنفيذ أحكام التحكيم بمصر'],
    isPublished: true,
    order: 0,
    content: `
      <h2>1. لماذا يختار المستثمرون والشركات الدولية التحكيم التجاري في مصر؟</h2>
      <p>يوفر التحكيم السرية التامة، سرعة الفصل في النزاعات المعقدة خلال 6 إلى 12 شهراً، حرية اختيار المحكمين الخبراء، والقدرة على تطبيق القواعد والقوانين الدولية.</p>

      <h2>2. الإطار التشريعي: قانون التحكيم المصري رقم 27 لسنة 1994</h2>
      <p>مستمد من قانون الأونسيترال النموذجي، ويكرس مبادئ استقلالية شرط التحكيم (Separability Doctrine)، واختصاص المحكمين بالبت في اختصاصهم (Kompetenz-Kompetenz)، ونهائية أحكام التحكيم وحصانتها من الاستئناف.</p>

      <h2>3. التمثيل القانوني أمام مركز القاهرة الإقليمي (CRCICA)</h2>
      <p>صياغة طلبات التحكيم، التدابير الوقتية والتحفظية على الحسابات والأصول، وإدارة جلسات الاستماع والمرافعات باللغات العربية والإنجليزية والفرنسية.</p>

      <h2>4. خطوات تنفيذ أحكام التحكيم الأجنبية في مصر (Exequatur)</h2>
      <p>إيداع أصل الحكم والترجمة المعتمدة لدى محكمة الاستئناف، استصدار الأمر بوضع الصيغة التنفيذية طبقاً لاتفاقية نيويورك 1958، وتوقيع الحجز التنفيذي على أموال المدين لتسييل المبالغ المقضي بها.</p>
    `,
    content_en: `
      <h2>1. Why Foreign Investors Rely on Commercial Arbitration in Egypt</h2>
      <p>International arbitration offers complete confidentiality, swift adjudication (6-12 months), party autonomy in selecting specialist arbitrators, and freedom of choice of governing law.</p>

      <h2>2. Statutory Framework: Egyptian Arbitration Law No. 27 of 1994</h2>
      <p>Derived from the UNCITRAL Model Law, establishing the separability of the arbitration agreement, kompetenz-kompetenz, and finality of arbitral awards.</p>

      <h2>3. Legal Representation Before CRCICA</h2>
      <p>Comprehensive representation before the Cairo Regional Centre for International Commercial Arbitration, interim emergency relief, and multilingual hearings.</p>

      <h2>4. Enforcement of Foreign Arbitral Awards Under the 1958 New York Convention</h2>
      <p>Filing the exequatur petition before the Court of Appeal, obtaining immediate writ of execution, and levying judicial attachment on debtor assets in Egypt.</p>
    `
  },

  'international-commercial-arbitration-egypt-guide-2026': {
    id: 'arbitration-guide-2026',
    slug: 'international-commercial-arbitration-egypt-guide-2026',
    title: 'التحكيم التجاري الدولي وتسوية منازعات الاستثمار في مصر 2026: الدليل القانوني الشامل',
    title_en: 'International Commercial Arbitration & Foreign Investment Disputes in Egypt 2026',
    title_fr: 'Arbitrage Commercial International & Règlement des Litiges d\'Investissement en Égypte 2026',
    title_it: 'Arbitrato Commerciale Internazionale e Controversie sugli Investimenti in Egitto 2026',
    seoTitle: 'التحكيم التجاري الدولي في مصر: دليل 2026',
    seoTitle_en: 'International Commercial Arbitration in Egypt: 2026 Guide',
    excerpt: 'دليل شامل حول التحكيم التجاري الدولي وتسوية منازعات المستثمرين الأجانب أمام مركز القاهرة الإقليمي (CRCICA) وتنفيذ أحكام التحكيم بمصر.',
    excerpt_en: 'Comprehensive legal guide on international commercial arbitration, investor dispute resolution before CRCICA, and arbitral award enforcement in Egypt.',
    excerpt_fr: 'Guide juridique complet sur l\'arbitrage commercial international, la résolution des litiges d\'investissement devant le CRCICA et l\'exécution des sentences en Égypte.',
    excerpt_it: 'Guida legale completa sull\'arbitrato commerciale internazionale, la risoluzione delle controversie dinanzi al CRCICA e l\'esecuzione dei lodi arbitrali in Egitto.',
    image: '/images/services/arbitration-mediation.webp',
    date: '2026-09-02',
    category: 'التحكيم الدولي',
    readTime: '8 دقائق',
    tags: ['تحكيم دولي', 'منازعات استثمار', 'مركز القاهرة CRCICA', 'عقود تجارية دولية', 'تنفيذ أحكام'],
    isPublished: true,
    order: 1,
    content: `
      <h2>أهمية التحكيم التجاري الدولي في مصر للمستثمرين والشركات الأجنبية</h2>
      <p>يُعد التحكيم التجاري الدولي (International Commercial Arbitration) الآلية القانونية الأكثر فاعلية وحيادية لتسوية المنازعات الناشئة عن عقود الاستثمار والتجارة الدولية العابرة للحدود في مصر. يوفر التحكيم مرونة وسرية تامة وسرعة في الفصل في النزاعات بالمقارنة مع إجراءات التقاضي التقليدية.</p>
      
      <h2>الإطار القانوني: قانون التحكيم المصري رقم 27 لسنة 1994</h2>
      <p>يستند التحكيم في مصر إلى القانون رقم 27 لسنة 1994 المستمد من قانون الأونسيترال النموذجي (UNCITRAL Model Law)، والذي يقر المبادئ الجوهرية الآتية:</p>
      <ul>
        <li><strong>استقلالية شرط التحكيم:</strong> اتفاق التحكيم مستقل بذاته عن باقي بنود العقد الأصلي.</li>
        <li><strong>حرية اختيار القانون واجب التطبيق:</strong> للأطراف كامل الحرية في تحديد القانون الحاكم ولغة الجلسات ومكان التحكيم.</li>
        <li><strong>مبدأ الاختصاص بالاختصاص:</strong> تملك هيئة التحكيم سلطة الفصل في الدفوع المتعلقة بعدم اختصاصها.</li>
      </ul>

      <h2>التمثيل أمام مركز القاهرة الإقليمي للتحكيم التجاري الدولي (CRCICA)</h2>
      <p>يُعتبر مركز القاهرة الإقليمي (CRCICA) من أقدم وأهم مراكز التحكيم الدولية في إفريقيا والشرق الأوسط، ويتميز بقواعد متطورة تواكب معايير غرف التجارة الدولية (ICC) ومحكمة لندن للتحكيم الدولي (LCIA).</p>
      
      <h2>خدمات مؤسسة كريم الديب في التحكيم الدولي</h2>
      <p>توفر مؤسسة كريم الديب للمحاماة تمثيلاً قانونياً متكاملاً يشمل:</p>
      <ul>
        <li>صياغة ومراجعة شروط ومشارطات التحكيم في العقود الدولية.</li>
        <li>إدارة الخصومة التحكيمية وتمثيل الشركات الأجنبية والمستثمرين أمام هيئات التحكيم.</li>
        <li>الوساطة والمفاوضات الودية لتسوية المنازعات وحماية الأصول.</li>
      </ul>
    `,
    content_en: `
      <h2>International Commercial Arbitration in Egypt: Legal Framework</h2>
      <p>International Commercial Arbitration is the primary mechanism for resolving cross-border business and investment disputes in Egypt. It offers neutrality, speed, and strict confidentiality for international investors and corporations.</p>
      
      <h2>Egyptian Arbitration Law No. 27 of 1994</h2>
      <p>Egypt's legal landscape aligns with the UNCITRAL Model Law, ensuring complete party autonomy, the separability of arbitration clauses, and seamless enforcement of arbitral awards.</p>
      
      <h2>Representation before CRCICA</h2>
      <p>The Cairo Regional Centre for International Commercial Arbitration (CRCICA) is a premier arbitral institution. Karim El-Dib Law Firm provides robust legal representation before CRCICA, ICC, and Ad-Hoc tribunals.</p>
      
      <h2>Our Arbitration Services</h2>
      <ul>
        <li>Drafting cross-border arbitration agreements.</li>
        <li>Representation in commercial and investment treaty disputes.</li>
        <li>Enforcement of international arbitral awards under the New York Convention.</li>
      </ul>
    `,
    content_fr: `
      <h2>Arbitrage Commercial International en Égypte</h2>
      <p>L'arbitrage commercial international constitue le mécanisme juridique privilégié pour le règlement des litiges d'investissement transfrontaliers en Égypte. Notre cabinet assure la représentation complète devant le CRCICA et les tribunaux arbitraux internationaux.</p>
    `,
    content_it: `
      <h2>Arbitrato Commerciale Internazionale in Egitto</h2>
      <p>L'arbitrato internazionale è lo strumento fondamentale per la risoluzione delle controversie commerciali e degli investimenti esteri in Egitto. Lo Studio Legale Karim El-Dib offre assistenza specializzata dinanzi al CRCICA e nelle procedure di esecuzione forzata.</p>
    `
  },

  'enforcement-foreign-arbitral-awards-egypt-guide': {
    id: 'enforcement-guide-2026',
    slug: 'enforcement-foreign-arbitral-awards-egypt-guide',
    title: 'دليل تنفيذ والاعتراف بأحكام التحكيم الأجنبية في مصر طبقاً لاتفاقية نيويورك والقانون 27 لسنة 1994',
    title_en: 'Enforcement and Recognition of Foreign Arbitral Awards in Egypt (New York Convention Guide)',
    title_fr: 'Exécution des Sentences Arbitrales Étrangères en Égypte (Convention de New York)',
    title_it: 'Esecuzione e Riconoscimento di Lodi Arbitrali Stranieri in Egitto',
    seoTitle: 'تنفيذ أحكام التحكيم الأجنبية في مصر',
    seoTitle_en: 'Enforcing Foreign Arbitral Awards in Egypt',
    excerpt: 'شروط وإجراءات وضع الصيغة التنفيذية لأحكام التحكيم الأجنبية في مصر، حالات رفض التنفيذ، وتسييل الأصول والحجز التحفظي.',
    excerpt_en: 'Legal requirements, court procedures, and exequatur orders for enforcing foreign arbitral awards in Egypt under the 1958 New York Convention.',
    excerpt_fr: 'Conditions et procédures d\'exequatur pour l\'exécution des sentences arbitrales étrangères en Égypte selon la Convention de New York.',
    excerpt_it: 'Requisiti legali e procedure per l\'omologazione e l\'esecuzione forzata di lodi arbitrali stranieri in Egitto.',
    image: '/images/services/international-law.webp',
    date: '2026-09-02',
    category: 'تنفيذ الأحكام',
    readTime: '7 دقائق',
    tags: ['تنفيذ أحكام أجنبية', 'اتفاقية نيويورك', 'تحكيم تجاري', 'حجز تنفيذي', 'قانون التحكيم المصري'],
    isPublished: true,
    order: 2,
    content: `
      <h2>الأساس القانوني لتنفيذ أحكام التحكيم الأجنبية في مصر</h2>
      <p>تلتزم جمهورية مصر العربية بتطبيق اتفاقية نيويورك لعام 1958 الخاصة بالاعتراف بأحكام التحكيم الأجنبية وتنفيذها. بالإضافة إلى ذلك، يحدد قانون التحكيم المصري رقم 27 لسنة 1994 في المواد (55 إلى 58) إجراءات استصدار أمر التنفيذ (الصيغة التنفيذية).</p>
      
      <h2>المستندات المطلوبة لوضع الصيغة التنفيذية (Exequatur)</h2>
      <ul>
        <li>أصل حكم التحكيم أو صورة طبق الأصل مصدقاً عليها رسمياً.</li>
        <li>أصل اتفاق التحكيم أو العقد المتضمن شرط التحكيم.</li>
        <li>ترجمة عربية معتمدة لحكم واتفاق التحكيم.</li>
        <li>شهادة إيداع الحكم في قلم كتاب محكمة الاستئناف المختصة.</li>
      </ul>

      <h2>حالات رفض التنفيذ الحصرية</h2>
      <p>لا تفحص المحاكم المصرية موضوع النزاع، وتقتصر أسباب الرفض على مخالفة النظام العام المصري، أو بطلان اتفاق التحكيم، أو عدم إعلان الطرف الصادر ضده الحكم إعلاناً صحيحاً.</p>
    `,
    content_en: `
      <h2>Enforcement of Foreign Arbitral Awards under New York Convention</h2>
      <p>Egypt is a party to the 1958 New York Convention. Foreign arbitral awards are recognized and enforced through an exequatur order issued by the competent Court of Appeal without reviewing the substantive merits of the dispute.</p>
    `,
    content_fr: `
      <h2>Exécution des Sentences Arbitrales Étrangères en Égypte</h2>
      <p>En vertu de la Convention de New York de 1958, les sentences arbitrales étrangères bénéficient d'une procédure d'exequatur rapide devant la Cour d'appel du Caire.</p>
    `,
    content_it: `
      <h2>Esecuzione Forzata di Lodi Esteri in Egitto</h2>
      <p>L'Egitto garantisce il riconoscimento e l'esecuzione dei lodi arbitrali internazionali in conformità con la Convenzione di New York del 1958.</p>
    `
  },

  'foreign-lawyer-sharm-el-sheikh': {
    id: 'foreign-lawyer-sharm',
    slug: 'foreign-lawyer-sharm-el-sheikh',
    title: 'محامي أجانب في شرم الشيخ: الدليل الشامل للخدمات القانونية والإقامة والاستثمار 2026',
    title_en: 'Foreigners Lawyer in Sharm El Sheikh: Legal Services, Residency & Real Estate Guide',
    title_fr: 'Avocat pour Étrangers à Sharm El Sheikh : Guide Juridique Complet',
    title_it: 'Avvocato per Stranieri a Sharm El Sheikh: Guida Legale Completa',
    seoTitle: 'محامي أجانب في شرم الشيخ: دليل 2026',
    seoTitle_en: 'Lawyer for Foreigners in Sharm El Sheikh: 2026 Guide',
    excerpt: 'متى يحتاج الأجنبي إلى محامٍ في شرم الشيخ، وكيف يختاره ويتحقق منه، وكيف يعمل التوكيل، وعلامات التحذير قبل التعاقد.',
    excerpt_en: 'Comprehensive guide to hiring a specialized lawyer for foreigners in Sharm El Sheikh. Residency permits, company formation, real estate contracts, and family law.',
    excerpt_fr: 'Guide complet pour choisir le meilleur avocat pour étrangers à Sharm El Sheikh : permis de séjour, création d\'entreprise, contrats immobiliers et divorce.',
    excerpt_it: 'Guida completa per scegliere il miglior avvocato per stranieri a Sharm El Sheikh: permessi di soggiorno, societario, contratti immobiliari e divorzio.',
    image: '/images/services/foreigners-in-egypt.webp',
    date: '2026-01-24',
    dateModified: '2026-11-12',
    category: 'خدمات الأجانب',
    readTime: '3 دقائق',
    tags: ['محامي أجانب شرم الشيخ', 'إقامة الأجانب', 'عقارات شرم الشيخ', 'تأسيس شركات', 'كريم الديب'],
    isPublished: true,
    order: 3,
    content: `

      <p>يعيش في شرم الشيخ ويستثمر فيها عدد كبير من الأجانب، وتختلف بعض إجراءاتها القانونية عن باقي المحافظات لأنها جزء من محافظة جنوب سيناء. يشرح هذا الدليل متى تحتاج إلى محامٍ، وما الذي يجب أن تتحقق منه قبل توكيله، وكيف تسير العلاقة معه.</p>

      <h2>متى تحتاج إلى محامٍ في شرم الشيخ؟</h2>
      <ul>
        <li><strong>شراء عقار أو الانتفاع به:</strong> قواعد التملك في سيناء خاصة، وأي خطأ في صيغة العقد يصعب إصلاحه لاحقاً.</li>
        <li><strong>الإقامة:</strong> عند ارتباطها بعقار أو شركة أو زواج، أو عند وجود إقامة منتهية أو طلب مرفوض.</li>
        <li><strong>تأسيس نشاط:</strong> شركات الغوص والرحلات والمطاعم والفنادق تحتاج إلى تراخيص من جهات متعددة.</li>
        <li><strong>الزواج والطلاق:</strong> الزواج المختلط وتوثيقه، وقضايا الطلاق والحضانة عند وجود طرف أجنبي.</li>
        <li><strong>النزاعات:</strong> خلافات مع مطور أو شريك أو مستأجر، أو قضايا جنائية تحتاج حضوراً عاجلاً.</li>
      </ul>

      <h2>كيف تختار المحامي؟</h2>
      <h3>1. القيد في نقابة المحامين</h3>
      <p>اطلب رقم القيد ودرجة القيد. المحامي فقط له حق تمثيلك أمام المحاكم، وليس السمسار أو "المخلص" أو مكتب الخدمات.</p>
      <h3>2. الخبرة في ملفات الأجانب</h3>
      <p>ملفات الأجانب تتضمن تطبيق قوانين أجنبية أحياناً، وترجمة وتصديق مستندات، والتعامل مع القنصليات. اسأل عن خبرته في نوع ملفك تحديداً.</p>
      <h3>3. اللغة</h3>
      <p>يجب أن تفهم ما يحدث في ملفك وما توقعه. المحامي الذي يتحدث لغتك يقلل سوء الفهم، لكن اطلب ترجمة للمستندات المهمة أيضاً.</p>
      <h3>4. الوجود المحلي</h3>
      <p>بعض الإجراءات تحتاج حضوراً شخصياً أمام جهات في جنوب سيناء، ووجود مكتب في المدينة يختصر الوقت.</p>
      <h3>5. الوضوح في الأتعاب</h3>
      <p>اطلب اتفاق أتعاب مكتوباً يحدد نطاق العمل، وما يشمله المبلغ، وما يعد مصروفات إضافية مثل الرسوم الحكومية والترجمة.</p>

      <h2>التوكيل: كيف يعمل المحامي نيابة عنك؟</h2>
      <p>يعمل المحامي بموجب توكيل رسمي يُحرر في الشهر العقاري داخل مصر، أو في القنصلية المصرية إذا كنت في الخارج. حدد في التوكيل الأعمال المطلوبة فقط، واحتفظ بصورة منه، ويمكنك إلغاؤه في أي وقت.</p>

      <h2>علامات تحذير</h2>
      <ul>
        <li>من يطلب توكيلاً عاماً شاملاً بالبيع دون سبب واضح.</li>
        <li>من يضمن نتيجة قضية قبل أن يطلع على المستندات.</li>
        <li>من يرفض إعطاء إيصالات بما تدفعه.</li>
        <li>من يقترح تسجيل عقار أو شركة باسم شخص آخر للالتفاف على القانون.</li>
      </ul>

      <h2>مكتب المحامي كريم الديب في شرم الشيخ</h2>
      <p>يعمل المكتب منذ 2006، ومقره الرئيسي في الإسكندرية مع فرع في شرم الشيخ. يقدم خدماته للأجانب بالعربية والإنجليزية والفرنسية والإيطالية في الإقامة والعقارات وتأسيس الشركات وقضايا الأسرة والتقاضي. العنوان ووسائل التواصل في صفحة <a href="/sharm-el-sheikh">مكتب شرم الشيخ</a>، وتفاصيل الخدمات في صفحة <a href="/foreigners-in-egypt">خدمات الأجانب في مصر</a>.</p>

      <p><em>هذا المقال معلومات عامة وليس استشارة قانونية.</em></p>
    `,
    content_en: `
      <h2>Why You Need a Specialized Lawyer in Sharm El Sheikh</h2>
      <p>Sharm El Sheikh has specific legal regulations regarding property ownership, residency, and business setup in South Sinai. Karim Eldib Law Firm provides end-to-end legal solutions for international residents, investors, and tourists.</p>
      
      <h2>Key Legal Services for Expats</h2>
      <ul>
        <li>Residency permits (Investment, Real Estate, Marriage, Work).</li>
        <li>Real estate due diligence and contract drafting.</li>
        <li>Corporate registration and hotel/diving tourism licenses.</li>
        <li>Family law, mixed marriage registration, and international divorce.</li>
      </ul>
    `
  },

  'foreign-lawyer-alexandria': {
    id: 'foreign-lawyer-alex',
    slug: 'foreign-lawyer-alexandria',
    title: 'محامي أجانب في الإسكندرية: خدمات قانونية متخصصة وتأسيس شركات للمستثمرين',
    title_en: 'Foreigners Lawyer in Alexandria: Legal Services, Investment & Maritime Law',
    title_fr: 'Avocat pour Étrangers à Alexandrie : Services Juridiques et Investissement',
    title_it: 'Avvocato per Stranieri ad Alessandria: Servizi Legali e Diritto Marittimo',
    seoTitle: 'محامي أجانب في الإسكندرية',
    seoTitle_en: 'Lawyer for Foreigners in Alexandria',
    excerpt: 'الخدمات القانونية المتخصصة للأجانب والمستثمرين في الإسكندرية: قضايا الموانئ والشحن، تأسيس الشركات، والإقامات.',
    excerpt_en: 'Specialized legal services for expats and investors in Alexandria: maritime disputes, port operations, company formation, and residency.',
    excerpt_fr: 'Services juridiques spécialisés pour expatriés et investisseurs à Alexandrie : litiges maritimes, création d\'entreprise et séjour.',
    excerpt_it: 'Servizi legali specializzati per espatriati e investitori ad Alessandria: controversie marittime, costituzione societaria e permessi.',
    image: '/images/services/commercial-law.webp',
    date: '2026-01-20',
    category: 'خدمات الأجانب',
    readTime: '9 دقائق',
    tags: ['محامي أجانب الإسكندرية', 'استثمار أجنبي', 'قانون بحري', 'تأسيس شركات', 'المكتب الرئيسي'],
    isPublished: true,
    order: 4,
    content: `
      <h2>المكتب الرئيسي لمؤسسة كريم الديب في الإسكندرية</h2>
      <p>يقع المقر الرئيسي لمكتب كريم الديب للمحاماة في قلب مدينة الإسكندرية (29 المسلة غرب وشريف باشا، العطارين)، ويقدم دعماً قانونياً شاملاً للشركات الدولية، المستوردين، والمقيمين الأجانب في عروس البحر المتوسط.</p>
      
      <h2>أبرز المجالات القانونية في الإسكندرية</h2>
      <ul>
        <li><strong>القانون التجاري والبحري:</strong> تسوية نزاعات الشحن والتخليص الجمركي بميناء الإسكندرية وميناء الدخيلة.</li>
        <li><strong>تأسيس الشركات للمستثمرين الأجانب:</strong> التأسيس في المناطق الحرة بالإسكندرية وبرج العرب.</li>
        <li><strong>التقاضي والتحكيم:</strong> التمثيل أمام المحاكم الاقتصادية وهيئات التحكيم.</li>
      </ul>
    `,
    content_en: `
      <h2>Alexandria Main Office - Karim Eldib Law Firm</h2>
      <p>Located in the commercial heart of Alexandria, our firm delivers premier legal services for foreign investors, shipping companies, and international residents.</p>
    `
  },

  'guide-foreigners-legal-services-egypt-2025': {
    id: 'guide-foreigners-2025',
    slug: 'guide-foreigners-legal-services-egypt-2025',
    title: 'دليل شامل للأجانب: الخدمات القانونية في مصر 2026',
    title_en: 'Comprehensive Guide to Legal Services for Foreigners in Egypt 2026',
    title_fr: 'Guide Complet des Services Juridiques pour Étrangers en Égypte 2026',
    title_it: 'Guida Completa ai Servizi Legali per Stranieri in Egitto 2026',
    seoTitle: 'الخدمات القانونية للأجانب في مصر 2026',
    seoTitle_en: 'Legal Services for Foreigners in Egypt 2026',
    excerpt: 'دليل شامل للأجانب الراغبين في الاستثمار أو الإقامة في مصر، يوضح كافة الإجراءات والضمانات القانونية.',
    excerpt_en: 'Complete guide for foreigners living or investing in Egypt: laws, legal rights, company setup, and visas.',
    excerpt_fr: 'Guide complet pour étrangers vivant ou investissant en Égypte : lois, droits, entreprises et visas.',
    excerpt_it: 'Guida completa per stranieri residenti o investitori in Egitto: leggi, diritti, aziende e visti.',
    image: '/images/services/civil-law.webp',
    date: '2026-01-15',
    category: 'دليل قانوني',
    readTime: '11 دقيقة',
    tags: ['دليل الأجانب', 'استثمار في مصر', 'تأشيرات وإقامة', 'قوانين مصر للأجانب'],
    isPublished: true,
    order: 5,
    content: `
      <h2>حقوق وواجبات الأجانب في القانون المصري</h2>
      <p>يمنح الدستور والقوانين المصرية حماية متكاملة للأجانب والمستثمرين، مع توفير أطر قانونية واضحة لحرية ممارسة الأعمال وتملك العقارات واستخراج الإقامات الرسمية.</p>
      
      <h2>أهم القوانين التي يجب على كل أجنبي معرفتها:</h2>
      <ul>
        <li>قانون الاستثمار رقم 72 لسنة 2017 وحوافزه للمستثمر الأجنبي.</li>
        <li>قانون العمل المصري والضوابط المنظمة لتوظيف العمالة الأجنبية.</li>
        <li>قانون دخول وإقامة الأجانب في مصر وتعديلاته الأخيرة.</li>
      </ul>
    `,
    content_en: `
      <h2>Legal Rights of Foreigners in Egypt</h2>
      <p>Egypt provides robust constitutional and legislative protections for foreigners and investors under the Investment Law No. 72 of 2017.</p>
    `
  },

  'egyptians-abroad-legal-rights-protection': {
    id: 'egyptians-abroad-guide',
    slug: 'egyptians-abroad-legal-rights-protection',
    title: 'محامي المصريين بالخارج: حماية حقوقك القانونية وإدارة الممتلكات عن بُعد',
    title_en: 'Legal Rights Protection for Egyptian Expats Abroad: Remote Representation',
    title_fr: 'Protection des Droits Juridiques des Égyptiens à l\'Étranger',
    title_it: 'Tutela dei Diritti Legali per Egiziani all\'Estero',
    seoTitle: 'محامي المصريين بالخارج: إدارة الحقوق عن بُعد',
    seoTitle_en: 'Lawyer for Egyptians Abroad: Remote Representation',
    excerpt: 'كيف يمكن للمصريين في الخارج حماية ممتلكاتهم ومتابعة قضاياهم القانونية داخل مصر بواسطة التوكيلات الرسمية.',
    excerpt_en: 'How Egyptian expatriates can manage properties, inheritance, and legal cases in Egypt remotely via power of attorney.',
    excerpt_fr: 'Comment les expatriés égyptiens peuvent gérer leurs biens et affaires en Égypte à distance.',
    excerpt_it: 'Come gli espatriati egiziani possono gestire beni ed eredità in Egitto a distanza.',
    image: '/images/services/egyptians-abroad.webp',
    date: '2026-01-10',
    category: 'المصريين بالخارج',
    readTime: '8 دقائق',
    tags: ['المصريين بالخارج', 'توكيلات قنصلية', 'إدارة عقارات', 'قضايا الميراث'],
    isPublished: true,
    order: 6,
    content: `
      <h2>خدمات التمثيل القانوني عن بُعد للمصريين المغتربين</h2>
      <p>يواجه المصريون المقيمون في دول الخليج وأوروبا وأمريكا تحديات في إدارة شؤونهم القانونية والعقارية داخل مصر. توفر مؤسسة كريم الديب تمثيلاً قانونياً كاملاً بموجب التوكيلات القنصلية الرسمية دون حاجة لسفر الموكل.</p>
      
      <h2>أهم الخدمات المقدمة:</h2>
      <ul>
        <li>حصر وقسمة التركات وإنهاء المنازعات الإرثية.</li>
        <li>إدارة العقارات وعقود الإيجار والبيع والشراء.</li>
        <li>التمثيل في الدعاوى القضائية المدنية والتجارية والأحوال الشخصية.</li>
      </ul>
    `,
    content_en: `
      <h2>Remote Legal Services for Egyptian Expats</h2>
      <p>We represent Egyptians living abroad through consular powers of attorney for property management, inheritance distribution, and court proceedings in Egypt.</p>
    `
  },

  'foreign-investment-egypt-complete-guide': {
    id: 'foreign-investment-guide',
    slug: 'foreign-investment-egypt-complete-guide',
    title: 'الاستثمار في مصر 2026: دليل المستثمر الأجنبي والحوافز والضمانات القانونية',
    title_en: 'Foreign Investment in Egypt 2026: Comprehensive Investor Guide & Incentives',
    title_fr: 'Investissement Étranger en Égypte 2026 : Guide Complet de l\'Investisseur',
    title_it: 'Investimenti Esteri in Egitto 2026: Guida Completa per Investitori',
    seoTitle: 'الاستثمار الأجنبي في مصر 2026: الحوافز والضمانات',
    seoTitle_en: 'Foreign Investment in Egypt 2026: Incentives & Guarantees',
    excerpt: 'دليل المستثمر الأجنبي في مصر: الحوافز الاستثمارية، الإعفاءات الضريبية، تأسيس الشركات، والرخصة الذهبية.',
    excerpt_en: 'Foreign investor legal guide in Egypt: tax incentives, Golden License, free zones, and investment guarantees.',
    excerpt_fr: 'Guide des investissements étrangers en Égypte : incitations fiscales, licence dorée et zones franches.',
    excerpt_it: 'Guida agli investimenti esteri in Egitto: incentivi fiscali, licenza d\'oro e zone franche.',
    image: '/images/services/company-law.webp',
    date: '2026-01-05',
    category: 'استثمار أجنبي',
    readTime: '12 دقيقة',
    tags: ['استثمار أجنبي', 'الرخصة الذهبية', 'قانون الاستثمار', 'تأسيس شركات', 'مصر 2026'],
    isPublished: true,
    order: 7,
    content: `
      <h2>حوافز الاستثمار الأجنبي في مصر</h2>
      <p>تقدم مصر للمستثمرين الأجانب باقة حوافز استثنائية بموجب قانون الاستثمار الجديد، تشمل حوافز ضريبية خاصة تصل إلى خصم 50% من التكاليف الاستثمارية، وتوفير أراضي بأسعار تفضيلية، وإتاحة "الرخصة الذهبية" للمشروعات الاستراتيجية.</p>
      
      <h2>المناطق الاستثمارية والمناطق الحرة</h2>
      <ul>
        <li>المناطق الحرة العامة والخاصة: إعفاء كامل من الضرائب الجمركية وضريبة القيمة المضافة على المعدات والبضائع المصدرة.</li>
        <li>المنطقة الاقتصادية لقناة السويس (SCZone): حوافز جمركية ولوجستية فريدة للمشروعات الصناعية.</li>
      </ul>
    `,
    content_en: `
      <h2>Investment Incentives in Egypt</h2>
      <p>Egypt offers compelling investment incentives, including the Golden License, special tax deductions up to 50%, and full customs duty exemptions in Free Zones.</p>
    `
  },

  'company-formation-for-foreigners-in-egypt-complete-guide': {
    id: 'company-formation-guide',
    slug: 'company-formation-for-foreigners-in-egypt-complete-guide',
    title: 'تأسيس شركة في مصر للأجانب 2026: الأنواع والإجراءات خطوة بخطوة',
    title_en: 'Company Formation in Egypt for Foreigners 2026: Step-by-Step Legal Guide',
    title_fr: 'Création d\'Entreprise en Égypte pour les Étrangers 2026',
    title_it: 'Costituzione di Società in Egitto per Stranieri 2026',
    seoTitle: 'تأسيس شركة في مصر للأجانب 2026',
    seoTitle_en: 'Company Formation in Egypt for Foreigners 2026',
    excerpt: 'دليل تأسيس الشركات في مصر للأجانب: الأشكال القانونية المتاحة، وخطوات التأسيس أمام هيئة الاستثمار، والمستندات، وحوافز الاستثمار، والأخطاء الشائعة.',
    excerpt_en: 'Complete legal guide on setting up a company in Egypt for foreign nationals: LLCs, joint stock companies, and GAFI registration.',
    excerpt_fr: 'Guide complet pour créer une société en Égypte : SARL, société anonyme et démarches au GAFI.',
    excerpt_it: 'Guida completa per la costituzione di società in Egitto: SRL, SPA e procedure GAFI.',
    image: '/images/services/company-law.webp',
    date: '2026-01-24',
    dateModified: '2026-11-12',
    category: 'قانون الشركات',
    readTime: '3 دقائق',
    tags: ['تأسيس شركات', 'شركة ذات مسؤولية محدودة', 'هيئة الاستثمار GAFI', 'استثمار أجنبي'],
    isPublished: true,
    order: 8,
    content: `

      <p>يسمح القانون المصري للأجانب بتأسيس شركات وتملكها بالكامل في أغلب الأنشطة، وينظم ذلك أساساً قانون الشركات رقم 159 لسنة 1981 وقانون الاستثمار رقم 72 لسنة 2017. يشرح هذا الدليل الأشكال القانونية المتاحة، وخطوات التأسيس، والأخطاء التي تؤخر المستثمر الأجنبي أو تكلفه لاحقاً.</p>

      <h2>أولاً: الأشكال القانونية المتاحة للأجانب</h2>

      <h3>1. الشركة ذات المسؤولية المحدودة</h3>
      <p>الشكل الأكثر استخداماً للمشروعات الصغيرة والمتوسطة. مسؤولية كل شريك محدودة بحصته، والإدارة مرنة، ويجوز أن يكون المدير أجنبياً. يشترط القانون حداً أدنى وأقصى لعدد الشركاء، ولا يجوز لها طرح حصصها للاكتتاب العام.</p>

      <h3>2. شركة الشخص الواحد</h3>
      <p>أضيفت إلى قانون الشركات بتعديلات عام 2018، وتتيح لشخص واحد، مصرياً كان أو أجنبياً، تأسيس شركة بمسؤولية محدودة دون الحاجة إلى شريك. مناسبة للمشروعات الفردية والخدمات المهنية.</p>

      <h3>3. شركة المساهمة</h3>
      <p>للمشروعات الكبيرة أو التي تحتاج إلى تمويل من عدد كبير من المساهمين. تُدار بمجلس إدارة، ورأس مالها مقسم إلى أسهم قابلة للتداول، وإجراءات تأسيسها والرقابة عليها أكثر تفصيلاً.</p>

      <h3>4. فرع الشركة الأجنبية</h3>
      <p>تسجيل فرع لشركة قائمة في الخارج لمباشرة نشاطها في مصر. الفرع ليس شخصاً قانونياً مستقلاً، والشركة الأم مسؤولة عن التزاماته.</p>

      <h3>5. مكتب التمثيل</h3>
      <p>لدراسة السوق والترويج لمنتجات الشركة الأم فقط، ولا يجوز له ممارسة نشاط تجاري أو تحقيق إيرادات في مصر.</p>

      <h2>ثانياً: كيف تختار الشكل المناسب؟</h2>
      <ul>
        <li><strong>عدد الشركاء:</strong> شريك واحد أم أكثر.</li>
        <li><strong>طبيعة النشاط:</strong> بعض الأنشطة، مثل الاستيراد والأنشطة السياحية، لها شروط خاصة بالجنسية أو تراخيص من جهات محددة.</li>
        <li><strong>حجم المشروع وخطط التمويل:</strong> هل ستحتاج إلى دخول مساهمين جدد لاحقاً؟</li>
        <li><strong>الحوافز المطلوبة:</strong> نظام الاستثمار الداخلي أم المناطق الحرة.</li>
      </ul>
      <p>الاختيار الخاطئ في البداية قد يحتاج إلى تحويل الشكل القانوني لاحقاً، وهو إجراء أطول من التأسيس نفسه.</p>

      <h2>ثالثاً: خطوات التأسيس</h2>
      <ol>
        <li><strong>حجز الاسم التجاري:</strong> الحصول على شهادة بعدم الالتباس من السجل التجاري.</li>
        <li><strong>إعداد عقد التأسيس أو النظام الأساسي:</strong> يحدد النشاط، ورأس المال وتوزيع الحصص، والمديرين وصلاحياتهم، وطريقة اتخاذ القرارات وحل الخلافات بين الشركاء.</li>
        <li><strong>الموافقات الأمنية:</strong> للشركاء والمديرين الأجانب، وقد تكون شرطاً لبعض الأنشطة.</li>
        <li><strong>إيداع رأس المال:</strong> في حساب بنكي باسم الشركة تحت التأسيس، واستخراج شهادة بنكية بذلك.</li>
        <li><strong>التقديم في مركز خدمات المستثمرين بالهيئة العامة للاستثمار:</strong> لتوثيق العقد وإصدار السجل التجاري.</li>
        <li><strong>البطاقة الضريبية والتسجيل في ضريبة القيمة المضافة</strong> إذا انطبقت شروطها.</li>
        <li><strong>التأمينات الاجتماعية:</strong> تسجيل الشركة كصاحب عمل وتسجيل العاملين.</li>
        <li><strong>التراخيص الخاصة بالنشاط:</strong> مثل تراخيص وزارة السياحة أو الصحة أو التراخيص الصناعية.</li>
      </ol>

      <h2>رابعاً: المستندات المعتادة</h2>
      <ul>
        <li>جوازات سفر سارية للشركاء الأجانب، مترجمة ومصدقة حسب الحالة.</li>
        <li>عقد إيجار أو تملك لمقر الشركة.</li>
        <li>توكيل رسمي للمحامي لمباشرة الإجراءات، ويمكن عمله من الخارج عبر القنصلية المصرية.</li>
        <li>للشركاء من الأشخاص الاعتبارية: مستندات تأسيس الشركة الأجنبية وقرار المشاركة، مصدقة ومترجمة.</li>
      </ul>

      <h2>خامساً: حوافز الاستثمار</h2>
      <p>يمنح قانون الاستثمار حوافز عامة لكل المشروعات، وحوافز خاصة وإضافية لمشروعات بعينها حسب النشاط والموقع الجغرافي، إلى جانب نظام المناطق الحرة والرخصة الذهبية للمشروعات الاستراتيجية. شروط كل حافز ونسبته ومدته تحددها اللائحة والقرارات المنفذة، ويجب التحقق منها لكل مشروع قبل البدء.</p>

      <h2>سادساً: أخطاء شائعة</h2>
      <ul>
        <li><strong>استخدام عقد تأسيس جاهز:</strong> العقد الجاهز لا ينظم الخلافات بين الشركاء ولا خروج شريك أو دخول آخر.</li>
        <li><strong>بدء النشاط قبل استكمال التراخيص:</strong> قد يعرض النشاط للغلق والغرامات.</li>
        <li><strong>إهمال الالتزامات الضريبية والتأمينية بعد التأسيس:</strong> التأسيس بداية الالتزامات وليس نهايتها.</li>
        <li><strong>تسجيل الشركة باسم شخص آخر للالتفاف على شرط قانوني:</strong> يضع ملكية المستثمر الحقيقية في خطر.</li>
      </ul>

      <h2>كيف نساعدك</h2>
      <p>يتولى مكتب المحامي كريم الديب تأسيس الشركات للمستثمرين الأجانب من دراسة الشكل القانوني إلى استلام السجل التجاري والبطاقة الضريبية، مع صياغة عقد التأسيس واتفاقيات الشركاء، والتواصل بالعربية والإنجليزية والفرنسية والإيطالية. تفاصيل الخدمة في صفحة <a href="/company-law">قانون الشركات</a> وصفحة <a href="/alexandria/corporate-lawyer">محامي شركات في الإسكندرية</a>.</p>

      <p><em>هذا المقال معلومات عامة وليس استشارة قانونية. الإجراءات والشروط تتغير بقرارات تنفيذية، فراجع حالتك مع محامٍ قبل اتخاذ أي قرار.</em></p>
    `,
    content_en: `
      <h2>Setting up an LLC in Egypt</h2>
      <p>A Limited Liability Company (LLC) is the most preferred structure for foreign investors, offering 100% foreign ownership and swift registration through GAFI.</p>
    `
  },

  'divorce-for-foreigners-in-egypt-comprehensive-guide': {
    id: 'divorce-foreigners-guide',
    slug: 'divorce-for-foreigners-in-egypt-comprehensive-guide',
    title: 'الطلاق للأجانب في مصر 2026: القوانين والإجراءات والحضانة والنفقة',
    title_en: 'Divorce for Foreigners in Egypt 2026: Legal Procedures, Custody & Alimony',
    title_fr: 'Divorce pour les Étrangers en Égypte 2026 : Procédures et Garde d\'Enfants',
    title_it: 'Divorzio per Stranieri in Egitto 2026: Procedure Legali e Affidamento',
    seoTitle: 'الطلاق للأجانب في مصر 2026: الحضانة والنفقة',
    seoTitle_en: 'Divorce for Foreigners in Egypt 2026: Custody & Support',
    excerpt: 'دليل قانوني شامل حول قضايا الطلاق والخلع للأجانب والزواج المختلط في مصر، وتحديد القانون الواجب التطبيق.',
    excerpt_en: 'Legal guide to international divorce and mixed marriage dissolution in Egypt: applicable law, custody, and alimony.',
    excerpt_fr: 'Guide juridique sur le divorce des étrangers en Égypte : loi applicable, garde des enfants et pension alimentaire.',
    excerpt_it: 'Guida legale al divorzio per stranieri in Egitto: legge applicabile, affidamento e alimenti.',
    image: '/images/services/family-law.webp',
    date: '2026-01-24',
    dateModified: '2026-11-12',
    category: 'الأحوال الشخصية',
    readTime: '3 دقائق',
    tags: ['طلاق أجانب', 'زواج مختلط', 'حضانة أطفال', 'قانون الأسرة', 'محامي أحوال شخصية'],
    isPublished: true,
    order: 9,
    content: `

      <p>الطلاق بين أجانب في مصر، أو بين أجنبي ومصري، يطرح سؤالاً قبل أي إجراء: أي قانون يحكم النزاع؟ الإجابة تحدد حق الطلاق نفسه، والحضانة، والنفقة، وإمكانية الاعتراف بالحكم في بلدك. يشرح هذا الدليل القواعد الأساسية والخطوات العملية.</p>

      <h2>أولاً: القانون الواجب التطبيق</h2>
      <p>تنظم المواد من 12 إلى 14 من القانون المدني المصري هذه المسألة:</p>
      <ul>
        <li><strong>إذا كان أحد الزوجين مصرياً وقت انعقاد الزواج:</strong> يسري القانون المصري وحده على آثار الزواج والطلاق (المادة 14)، أياً كانت جنسية الطرف الآخر.</li>
        <li><strong>إذا كان الزوجان أجنبيين:</strong> يسري على الطلاق قانون جنسية الزوج وقت الطلاق، ويسري على التطليق والانفصال قانون جنسية الزوج وقت رفع الدعوى (المادة 13).</li>
        <li><strong>النظام العام:</strong> لا تطبق المحكمة المصرية أي نص أجنبي يخالف النظام العام في مصر.</li>
      </ul>
      <p>لذلك قد ينظر القاضي المصري الدعوى ويطبق فيها قانوناً فرنسياً أو إيطالياً مثلاً، ويحتاج ذلك إلى تقديم نص القانون الأجنبي مترجماً وإثباته.</p>

      <h2>ثانياً: صور إنهاء الزواج عند تطبيق القانون المصري</h2>
      <h3>الطلاق بإرادة الزوج</h3>
      <p>يوثق لدى المأذون أو الموثق المختص، ويترتب عليه حقوق مالية للزوجة.</p>
      <h3>التطليق للضرر</h3>
      <p>دعوى ترفعها الزوجة وتثبت فيها ضرراً يستحيل معه دوام العشرة، بالشهود أو المستندات أو التقارير. تحاول المحكمة الصلح أولاً.</p>
      <h3>الخلع</h3>
      <p>تنهي الزوجة الزواج دون موافقة الزوج، مقابل رد المهر الذي قبضته والتنازل عن حقوقها المالية الشرعية. تحاول المحكمة الصلح وتندب حكمين، وحكم الخلع نهائي لا يقبل الطعن.</p>
      <h3>التطليق للغيبة أو لعدم الإنفاق</h3>
      <p>في حالات غياب الزوج دون عذر مقبول أو امتناعه عن الإنفاق، بشروط يحددها قانون الأحوال الشخصية.</p>

      <h2>ثالثاً: الحضانة</h2>
      <p>عند تطبيق القانون المصري تكون الحضانة للأم أولاً حتى السن التي يحددها القانون، ثم يخير القاضي الصغير بين البقاء مع الحاضنة أو الانتقال. وللطرف غير الحاضن حق الرؤية بحكم أو باتفاق. أما إذا طبق قانون أجنبي فقد تختلف القواعد، مثل الحضانة المشتركة المعروفة في دول أوروبية كثيرة. وفي كل الأحوال تبقى مصلحة الطفل المعيار الأساسي.</p>
      <p><strong>تنبيه مهم:</strong> نقل الأطفال خارج مصر دون اتفاق أو حكم قد يعرض الطرف الذي نقلهم لمسؤولية قانونية، وقد يجعل استردادهم إجراءً طويلاً بين أكثر من دولة.</p>

      <h2>رابعاً: النفقة والحقوق المالية</h2>
      <ul>
        <li><strong>نفقة الزوجة ونفقة العدة والمتعة:</strong> عند تطبيق القانون المصري، وتقدرها المحكمة حسب يسار الزوج وظروف الطرفين.</li>
        <li><strong>نفقة الصغار:</strong> واجبة على الأب، وتشمل المأكل والملبس والمسكن والتعليم والعلاج.</li>
        <li><strong>الممتلكات:</strong> لا يعرف القانون المصري نظام الأموال المشتركة بين الزوجين، بعكس بعض القوانين الأجنبية، وهذا يؤثر على تقسيم الممتلكات.</li>
      </ul>

      <h2>خامساً: الخطوات العملية</h2>
      <ol>
        <li><strong>تحديد القانون الواجب التطبيق</strong> من جنسية كل طرف وقت الزواج ووقت رفع الدعوى.</li>
        <li><strong>تجميع المستندات:</strong> وثيقة الزواج، وشهادات ميلاد الأطفال، وجوازات السفر، ومستندات الدخل، وأي دليل على الضرر، مع الترجمة والتصديق.</li>
        <li><strong>التقدم لمكتب تسوية المنازعات الأسرية:</strong> خطوة إلزامية قبل رفع أغلب دعاوى الأسرة.</li>
        <li><strong>رفع الدعوى أمام محكمة الأسرة المختصة</strong> وحضور الجلسات أو التوكيل بالحضور.</li>
        <li><strong>بعد الحكم:</strong> استخراج صورة رسمية، وتصديقها من وزارة الخارجية والقنصلية المختصة، وقيدها في بلد كل طرف.</li>
      </ol>

      <h2>سادساً: الاعتراف بالحكم في الخارج</h2>
      <p>صدور الحكم في مصر لا يعني تلقائياً الاعتراف به في بلدك. لكل دولة إجراءات خاصة لقيد أحكام الطلاق الأجنبية، لذلك من الأفضل التنسيق مع محامٍ في بلدك أو مع قنصليتك قبل رفع الدعوى، حتى يصدر الحكم بالشكل الذي يقبله نظامك القانوني.</p>

      <h2>كيف نساعدك</h2>
      <p>يتولى مكتب المحامي كريم الديب قضايا الأسرة للأجانب والزواج المختلط من تحديد القانون الواجب التطبيق حتى تصديق الحكم وقيده، مع التواصل بالعربية والإنجليزية والفرنسية والإيطالية، والتمثيل بالتوكيل إذا كنت خارج مصر. تفاصيل الخدمة في صفحة <a href="/family-law">قانون الأسرة</a> وصفحة <a href="/alexandria/family-lawyer">محامي أسرة في الإسكندرية</a>.</p>

      <p><em>هذا المقال معلومات عامة وليس استشارة قانونية. كل حالة تختلف بحسب الجنسيات والديانة وتاريخ الزواج، فراجع حالتك مع محامٍ قبل اتخاذ أي خطوة.</em></p>
    `,
    content_en: `
      <h2>Applicable Law in International Divorce in Egypt</h2>
      <p>Under Article 13 of the Egyptian Civil Code, personal status matters are governed by the law of the husband's nationality, with specialized provisions for mixed marriages.</p>
    `
  },

  'real-estate-investment-sharm-el-sheikh-comprehensive-guide': {
    id: 'real-estate-sharm-guide',
    slug: 'real-estate-investment-sharm-el-sheikh-comprehensive-guide',
    title: 'الاستثمار العقاري في شرم الشيخ للأجانب 2026: ضوابط التملك وحق الانتفاع',
    title_en: 'Real Estate Investment in Sharm El Sheikh for Foreigners 2026',
    title_fr: 'Investissement Immobilier à Sharm El Sheikh pour les Étrangers 2026',
    title_it: 'Investimenti Immobiliari a Sharm El Sheikh per Stranieri 2026',
    seoTitle: 'تملك العقارات للأجانب في شرم الشيخ 2026',
    seoTitle_en: 'Buying Property in Sharm El Sheikh as a Foreigner 2026',
    excerpt: 'ما يجب أن يعرفه الأجنبي قبل شراء عقار في شرم الشيخ: قواعد التملك وحق الانتفاع في سيناء، والفحص القانوني، والتعاقد والدفع، والإقامة بعد الشراء.',
    excerpt_en: 'What foreigners should know before buying property in Sharm El Sheikh: Sinai ownership rules and usufruct rights, due diligence, contracts and residency.',
    excerpt_fr: 'Guide d\'achat immobilier à Sharm El Sheikh : droit d\'usufruit de 50 ans et résidence immobilière.',
    excerpt_it: 'Guida all\'acquisto di immobili a Sharm El Sheikh: diritto di usufrutto di 50 anni e residenza.',
    image: '/images/services/foreigners-in-egypt.webp',
    date: '2026-01-20',
    dateModified: '2026-11-12',
    category: 'عقارات واستثمار',
    readTime: '3 دقائق',
    tags: ['عقارات شرم الشيخ', 'حق الانتفاع', 'إقامة عقارية', 'استثمار أجنبي'],
    isPublished: true,
    order: 10,
    content: `

      <p>شراء عقار في شرم الشيخ يختلف قانونياً عن الشراء في القاهرة أو الإسكندرية، لأن شبه جزيرة سيناء تخضع لقواعد خاصة في التملك. يشرح هذا الدليل ما يجب أن يعرفه المشتري الأجنبي قبل أن يدفع أي مبلغ.</p>

      <h2>أولاً: الإطار القانوني في سيناء</h2>
      <p>ينظم القانون رقم 14 لسنة 2012 بشأن التنمية المتكاملة في شبه جزيرة سيناء وتعديلاته التملك في المنطقة. يقصر القانون تملك الأراضي والعقارات ملكية تامة على فئات محددة من المصريين، ويتيح لغيرهم، ومنهم الأجانب، الحصول على <strong>حق الانتفاع</strong> بالوحدات وفق الضوابط والمدد التي يحددها القانون وقراراته التنفيذية.</p>
      <p>معنى ذلك عملياً أن كثيراً من العقود المعروضة على الأجانب في شرم الشيخ تكون عقود انتفاع أو عقوداً مع مطور، وليست ملكية مسجلة. وصيغة العقد هي التي تحدد حقوقك في البيع والتوريث والتأجير.</p>

      <h2>ثانياً: أنواع العقود التي ستقابلها</h2>
      <ul>
        <li><strong>عقد مع مطور لوحدة تحت الإنشاء:</strong> راجع تراخيص المشروع، وجدول التسليم، والجزاء على التأخير، ومصير مدفوعاتك إذا توقف المشروع.</li>
        <li><strong>عقد انتفاع:</strong> راجع المدة، وشروط التجديد، وحقك في التنازل عن الانتفاع لغيرك، وما يحدث عند الوفاة.</li>
        <li><strong>إعادة بيع من مالك سابق:</strong> راجع تسلسل العقود حتى المطور أو المالك الأصلي، وهل الحق قابل للنقل أصلاً.</li>
      </ul>

      <h2>ثالثاً: الفحص القانوني قبل الشراء</h2>
      <ol>
        <li>التحقق من صفة البائع وحقه في التصرف.</li>
        <li>مراجعة سند ملكية الأرض وترخيص البناء وتطابق الوحدة معه.</li>
        <li>البحث عن رهون أو حجوزات أو نزاعات قضائية على الوحدة أو المشروع.</li>
        <li>مراجعة لائحة اتحاد الشاغلين ورسوم الصيانة والخدمات.</li>
        <li>التأكد من أن الاستخدام المسموح، سكني أو فندقي، يتوافق مع ما تنوي فعله، خاصة إذا كنت تخطط للإيجار السياحي.</li>
      </ol>

      <h2>رابعاً: التعاقد والدفع</h2>
      <ul>
        <li>اطلب عقداً بلغة تفهمها إلى جانب النسخة العربية، مع تحديد النسخة التي تُعتمد عند الخلاف.</li>
        <li>ادفع عبر تحويل بنكي موثق، وتجنب الدفع النقدي دون إيصالات رسمية.</li>
        <li>اربط كل دفعة بمرحلة تنفيذ واضحة إذا كانت الوحدة تحت الإنشاء.</li>
        <li>نظم إجراءات توثيق العقد أو إثبات تاريخه أو رفع دعوى صحة التوقيع حسب نوع العقد.</li>
      </ul>

      <h2>خامساً: بعد الشراء</h2>
      <ul>
        <li><strong>الإقامة:</strong> تملك عقار أو الانتفاع به قد يفتح الباب لنوع من الإقامة وفق الشروط المعلنة وقت التقديم.</li>
        <li><strong>التأجير:</strong> التأجير السياحي قصير المدى قد يحتاج إلى تراخيص أو التعامل عبر شركة إدارة مرخصة.</li>
        <li><strong>الضرائب والرسوم:</strong> تختلف حسب طبيعة العقار والاستخدام، وتحتاج إلى مراجعة محاسب.</li>
        <li><strong>التوريث:</strong> حدد مسبقاً ما يحدث للحق عند الوفاة، خاصة في عقود الانتفاع.</li>
      </ul>

      <h2>أخطاء شائعة</h2>
      <ul>
        <li>الاعتماد على وعود البائع أو السمسار دون مراجعة المستندات.</li>
        <li>توقيع عقد عربي لا تفهمه دون مراجعة.</li>
        <li>تسجيل العقار باسم شخص مصري للالتفاف على قيود التملك، وهو ما يضع العقار كله في خطر.</li>
        <li>شراء وحدة مبنية بالمخالفة لترخيصها.</li>
      </ul>

      <h2>كيف نساعدك</h2>
      <p>يتولى مكتب المحامي كريم الديب من فرعه في شرم الشيخ الفحص القانوني للعقارات، ومراجعة وصياغة عقود الشراء والانتفاع، ومتابعة إجراءات التوثيق، مع التواصل بالعربية والإنجليزية والفرنسية والإيطالية. تفاصيل الخدمة في صفحة <a href="/sharm-el-sheikh">مكتب شرم الشيخ</a>.</p>

      <p><em>هذا المقال معلومات عامة وليس استشارة قانونية. قواعد التملك في سيناء تتأثر بقرارات تنفيذية متتالية، فراجع العقد مع محامٍ قبل التوقيع أو الدفع.</em></p>
    `,
    content_en: `
      <h2>Real Estate Regulations in Sharm El Sheikh</h2>
      <p>Property acquisitions by foreign nationals in Sharm El Sheikh are governed by Law No. 14 of 2012, which grants foreign nationals usufruct rights under the terms set by the law and its executive decrees.</p>
    `
  },

  'residence-permit-guide-in-egypt-2026': {
    id: 'residence-permit-guide',
    slug: 'residence-permit-guide-in-egypt-2026',
    title: 'دليل تصاريح الإقامة للأجانب في مصر 2026: الأنواع والشروط والرسوم',
    title_en: 'Residence Permits in Egypt for Foreigners 2026: Types, Requirements & Fees',
    title_fr: 'Guide des Permis de Séjour en Égypte pour les Étrangers 2026',
    title_it: 'Guida ai Permessi di Soggiorno in Egitto per Stranieri 2026',
    seoTitle: 'إقامة الأجانب في مصر 2026: الأنواع والشروط',
    seoTitle_en: 'Residence Permits in Egypt for Foreigners 2026',
    excerpt: 'دليل شامل لاستخراج وتجديد الإقامات للأجانب في مصر: إقامة المستثمر، الإقامة العقارية، وإقامة العمل.',
    excerpt_en: 'Complete legal guide on obtaining residency in Egypt: investor visas, property owner residency, and work permits.',
    excerpt_fr: 'Guide complet pour obtenir un permis de séjour en Égypte : investisseur, propriétaire et travail.',
    excerpt_it: 'Guida completa per ottenere il permesso di soggiorno in Egitto: investitore, immobile e lavoro.',
    image: '/images/services/foreigners-in-egypt.webp',
    date: '2026-01-18',
    dateModified: '2026-11-12',
    category: 'إقامة وتأشيرات',
    readTime: '3 دقائق',
    tags: ['إقامة الأجانب', 'إقامة عقارية', 'إقامة مستثمر', 'جوازات مصر'],
    isPublished: true,
    order: 11,
    content: `

      <p>الإقامة هي ما يسمح للأجنبي بالبقاء في مصر بعد انتهاء تأشيرة الدخول. تصدرها الإدارة العامة للجوازات والهجرة والجنسية، ويختلف نوعها حسب سبب وجودك في مصر. يشرح هذا الدليل الأنواع الرئيسية والمستندات والخطوات والأخطاء الشائعة.</p>

      <h2>أولاً: الأنواع الرئيسية للإقامة</h2>
      <h3>إقامة العمل</h3>
      <p>للأجنبي الذي يعمل لدى جهة في مصر. تسبقها موافقة وتصريح عمل من الوزارة المختصة بالعمل، وتجدد بتجديد التصريح. العمل بدون تصريح مخالفة يتحملها العامل وصاحب العمل.</p>
      <h3>إقامة المستثمر أو الشريك</h3>
      <p>للشركاء والمديرين في الشركات المؤسسة في مصر، وتصدر بناءً على مستندات الشركة وخطاب من الجهة المختصة.</p>
      <h3>إقامة تملك العقار</h3>
      <p>لمن يملك عقاراً في مصر وفق الشروط المعلنة من الجهات المختصة. وفي شرم الشيخ وسيناء عموماً لتملك الأجانب ضوابط خاصة يجب مراجعتها قبل الشراء.</p>
      <h3>إقامة الزواج من مصري أو مصرية</h3>
      <p>للزوج أو الزوجة الأجنبية بعد توثيق الزواج رسمياً، ولأبنائهم.</p>
      <h3>إقامة الدراسة</h3>
      <p>للطلاب المقيدين في جامعات أو معاهد معتمدة، بخطاب من جهة الدراسة.</p>
      <h3>الإقامة السياحية</h3>
      <p>لغير أغراض العمل، وتصدر وفق الشروط التي تعلنها الجوازات وقت التقديم.</p>
      <p>مدة كل إقامة وقيمة رسومها وشروطها المالية تتغير بقرارات إدارية، لذلك نراجعها مع كل طلب ولا نعتمد على أرقام قديمة.</p>

      <h2>ثانياً: المستندات المعتادة</h2>
      <ul>
        <li>جواز سفر ساري لمدة كافية، وصورة من صفحة البيانات وختم الدخول.</li>
        <li>صور شخصية حديثة.</li>
        <li>مستند سبب الإقامة: تصريح العمل، أو مستندات الشركة، أو عقد العقار، أو وثيقة الزواج، أو خطاب الجامعة.</li>
        <li>إثبات محل السكن في مصر.</li>
        <li>مستندات أجنبية مترجمة ومصدقة عند الحاجة.</li>
      </ul>

      <h2>ثالثاً: الخطوات</h2>
      <ol>
        <li>الدخول إلى مصر بتأشيرة سارية مناسبة.</li>
        <li>تجهيز مستند سبب الإقامة واستكمال الترجمة والتصديقات.</li>
        <li>التقديم في مكتب الجوازات المختص أو عبر المنصة الإلكترونية حسب نوع الإقامة، وسداد الرسوم.</li>
        <li>المتابعة حتى الاستلام، والرد على أي طلب استيفاء.</li>
        <li>تسجيل تاريخ انتهاء الإقامة والبدء في التجديد مبكراً.</li>
      </ol>

      <h2>رابعاً: أخطاء شائعة</h2>
      <ul>
        <li><strong>التأخر في التجديد:</strong> البقاء بعد انتهاء الإقامة يعرضك لغرامات، وقد يؤثر على طلباتك القادمة.</li>
        <li><strong>العمل بإقامة غير إقامة العمل:</strong> مخالفة حتى لو كانت إقامتك سارية.</li>
        <li><strong>تقديم مستندات أجنبية غير مصدقة:</strong> أكثر سبب لرفض الطلب أو تأخيره.</li>
        <li><strong>الاعتماد على معلومات من منتديات قديمة:</strong> الشروط والرسوم تتغير باستمرار.</li>
      </ul>

      <h2>أسئلة شائعة</h2>
      <h3>هل يمكن تغيير نوع الإقامة دون مغادرة مصر؟</h3>
      <p>في حالات كثيرة نعم، إذا توافرت شروط النوع الجديد، مثل الانتقال من إقامة سياحية إلى إقامة عمل بعد استخراج تصريح العمل.</p>
      <h3>ماذا أفعل إذا انتهت إقامتي بالفعل؟</h3>
      <p>تقدم بطلب التجديد في أقرب وقت مع سداد الغرامة المستحقة. التأخير الطويل يعقد الوضع.</p>
      <h3>هل أحتاج محامياً لاستخراج الإقامة؟</h3>
      <p>ليس شرطاً في كل الحالات، لكنه يفيد عندما تكون الإقامة مرتبطة بشركة أو عقار أو زواج مختلط، أو عند وجود رفض سابق أو مخالفة.</p>

      <h2>كيف نساعدك</h2>
      <p>يتولى مكتب المحامي كريم الديب ملفات الإقامة للأجانب في الإسكندرية وشرم الشيخ: تحديد النوع المناسب، وتجهيز المستندات، والمتابعة مع الجهات، وحل مشكلات الإقامة المنتهية. تفاصيل الخدمة في صفحة <a href="/foreigners-in-egypt">خدمات الأجانب في مصر</a> وصفحة <a href="/alexandria/immigration-lawyer">محامي هجرة وإقامات في الإسكندرية</a>.</p>

      <p><em>هذا المقال معلومات عامة وليس استشارة قانونية. شروط الإقامة ورسومها تتغير بقرارات إدارية، فتأكد من الوضع الحالي قبل التقديم.</em></p>
    `,
    content_en: `
      <h2>Types of Residency in Egypt</h2>
      <p>Egypt provides several residency pathways for foreigners, including investment residency, property ownership residency, and work permits.</p>
    `
  },

  'international-arbitration-lawyer-egypt-investment-disputes': {
    id: 'arbitration-investment-lawyer-egypt',
    slug: 'international-arbitration-lawyer-egypt-investment-disputes',
    title: 'محامي تحكيم دولي في مصر ومنازعات الاستثمار: الدليل الشامل لحل النزاعات التجارية العابرة للحدود',
    title_en: 'International Arbitration Lawyer in Egypt & Cross-Border Investment Dispute Resolution Guide',
    title_fr: 'Avocat d\'Arbitrage International en Égypte & Règlement des Litiges d\'Investissement Transfrontaliers',
    title_it: 'Avvocato di Arbitrato Internazionale in Egitto e Risoluzione Controversie Commerciali',
    seoTitle: 'محامي تحكيم دولي في مصر لمنازعات الاستثمار',
    seoTitle_en: 'International Arbitration Lawyer in Egypt',
    excerpt: 'دليل متخصص من مكتب محاماة دولي في مصر حول التحكيم التجاري الدولي، تسوية منازعات المستثمرين الأجانب، التقاضي الدولي، وتنفيذ أحكام التحكيم في القاهرة والإسكندرية وشرم الشيخ.',
    excerpt_en: 'Comprehensive guide by an international law firm in Egypt on international commercial arbitration, foreign investor disputes, cross-border dispute resolution, and arbitral award enforcement.',
    excerpt_fr: 'Guide complet par un cabinet d\'avocats international en Égypte sur l\'arbitrage commercial international et le règlement des différends relatifs aux investissements étrangers.',
    excerpt_it: 'Guida completa di uno studio legale internazionale in Egitto sull\'arbitrato commerciale internazionale e la risoluzione delle controversie sugli investimenti esteri.',
    image: '/images/services/arbitration-mediation.webp',
    date: '2026-09-07',
    category: 'التحكيم الدولي',
    readTime: '12 دقيقة',
    tags: [
      'محامي تحكيم دولي في مصر',
      'التحكيم التجاري الدولي',
      'منازعات المستثمرين الأجانب',
      'محامي شركات دولي',
      'تسوية المنازعات الاستثمارية',
      'تنفيذ أحكام التحكيم الأجنبية'
    ],
    isPublished: true,
    order: 12,
    content: `
      <h2>دور محامي تحكيم دولي في مصر لحماية الأعمال والاستثمارات الأجنبية</h2>
      <p>يُمثل <strong>التحكيم التجاري الدولي في مصر</strong> الركيزة الأساسية لحماية حقوق الشركات متعددة الجنسيات والمستثمرين في العقود العابرة للحدود. عند نشوء أي نزاع تجاري، فإن الاستعانة بـ <strong>محامي تحكيم دولي في مصر</strong> يضمن صياغة استراتيجية قانونية محكمة ترتكز على مبادئ قانون التحكيم المصري رقم 27 لسنة 1994 وقواعد الأونسيترال الدولية (UNCITRAL).</p>

      <h2>تسوية منازعات المستثمرين الأجانب ومنازعات الاستثمار في مصر</h2>
      <p>تتطلب <strong>تسوية المنازعات الاستثمارية</strong> و<strong>منازعات المستثمرين الأجانب في مصر</strong> دراية عميقة بالاتفاقيات الثنائية لحماية الاستثمار (BITs) ومعاهدات الاستثمار متعددة الأطراف (ICSID). يقدم <strong>محامي استثمار أجنبي في مصر</strong> حلولاً قانونية متكاملة تشمل:</p>
      <ul>
        <li><strong>التفاوض وتسوية المنازعات التجارية:</strong> إدارة المفاوضات الودية والوساطة لحل الخلافات المالية والعقدية قبل تصعيدها.</li>
        <li><strong>الوساطة وتسوية المنازعات في مصر:</strong> تفعيل بنود الوساطة التعاقدية لتقليل التكاليف وسرعة التوصل لحلول ترضي أطراف التعاقد.</li>
        <li><strong>التمثيل أمام هيئات التحكيم الدولية:</strong> مباشرة إجراءات التحكيم أمام مركز القاهرة الإقليمي للتحكيم التجاري الدولي (CRCICA)، غرفة التجارة الدولية بباريس (ICC)، ومحكمة لندن للتحكيم الدولي (LCIA).</li>
      </ul>

      <h2>حل المنازعات التجارية الدولية وصياغة عقود التجارة العابرة للحدود</h2>
      <p>إن تجنب <strong>منازعات العقود التجارية الدولية</strong> يبدأ من الصياغة المحترفة. بصفتنا <strong>مكتب محاماة دولي في مصر</strong> و<strong>محامي عقود تجارية دولية</strong>، نتولى إعداد ومراجعة اتفاقيات التوزيع، الشراكات الاستراتيجية، عقود المقاولات الدولية (FIDIC)، واتفاقيات الاستثمار المباشر بما يضمن وجود شرط تحكيم قطعي ومحكم يمنع أي تنازع في الاختصاص القضائي.</p>

      <h2>التقاضي في المنازعات الدولية والمنازعات العابرة للحدود</h2>
      <p>عندما تقتضي الضرورة، يتولى <strong>محامي منازعات تجارية دولية</strong> إدارة <strong>المنازعات العابرة للحدود</strong> و<strong>التقاضي في المنازعات الدولية</strong> أمام الدوائر التجارية والاستثمارية بمحاكم الاستئناف ومحكمة النقض المصرية، مع تأمين الأوامر الوقتية والتحفظية على الأصول والأموال محل النزاع.</p>

      <h2>تنفيذ والاعتراف بأحكام التحكيم الأجنبية في مصر (اتفاقية نيويورك 1958)</h2>
      <p>صدور حكم التحكيم لا يكتمل أثره إلا بـ <strong>تنفيذ أحكام التحكيم الدولي في مصر</strong>. يتولى فريقنا إجراءات <strong>الاعتراف بأحكام التحكيم الأجنبية في مصر</strong> واستصدار أمر الإيداع والأمر بالتنفيذ (Exequatur) وفقاً للمادة 58 من القانون رقم 27 لسنة 1994 وبنود اتفاقية نيويورك، مع التصدي الفوري لأي دعاوى بطلان كيدية تُقام لعرقلة التنفيذ.</p>

      <h2>حضور إقليمي متخصص: القاهرة، الإسكندرية، وشرم الشيخ</h2>
      <p>بفضل خبرة منذ عام 2006 واعتماد رسمي لدى القنصلية الفرنسية والعديد من السفارات الأوروبية، توفر مؤسسة كريم الديب خدمات <strong>محامي تحكيم دولي في الإسكندرية</strong> للنزاعات البحرية والتجارية، و<strong>محامي تحكيم دولي في شرم الشيخ</strong> للمنازعات العقارية والسياحية، إلى جانب مقرنا الرئيسي لخدمة قضايا التحكيم بالقاهرة الكبرى.</p>
    `,
    content_en: `
      <h2>Leading International Arbitration Lawyer in Egypt & Dispute Resolution Firm</h2>
      <p>As premier <strong>international lawyers in Egypt</strong>, Karim El-Dib Law Firm provides top-tier legal counsel in <strong>commercial arbitration in Egypt</strong>, cross-border corporate transactions, and complex international dispute resolution.</p>

      <h2>Resolving Foreign Investor & Investment Disputes in Egypt</h2>
      <p>Navigating <strong>foreign investor disputes in Egypt</strong> and <strong>investment disputes in Egypt</strong> requires specialized expertise in bilateral investment treaties (BITs), ICSID proceedings, and CRCICA arbitrations. Our dedicated <strong>foreign investors lawyer Egypt</strong> team delivers decisive strategic advantages.</p>

      <h2>Core Areas of International Legal Practice:</h2>
      <ul>
        <li><strong>International Commercial Arbitration:</strong> Representation before CRCICA, ICC, LCIA, and Ad-Hoc arbitral tribunals.</li>
        <li><strong>Cross-Border Dispute Resolution:</strong> Handling multinational commercial litigation, breach of contract, and shareholder disputes.</li>
        <li><strong>International Commercial Disputes:</strong> Negotiation, structured mediation, and amicable commercial dispute settlements.</li>
        <li><strong>Enforcement of Foreign Arbitral Awards:</strong> Full recognition and execution of foreign arbitration awards under the 1958 New York Convention.</li>
      </ul>

      <h2>Regional Hubs: Arbitration Lawyer in Alexandria & Sharm El Sheikh</h2>
      <p>Whether you require an <strong>arbitration lawyer in Alexandria</strong> for maritime and logistics disputes, an <strong>arbitration lawyer in Sharm El Sheikh</strong> for hospitality and real estate conflicts, or corporate litigation in Cairo, our <strong>international law firm in Egypt</strong> delivers unmatched legal defense.</p>
    `,
    content_fr: `
      <h2>Avocat d'Arbitrage Commercial International en Égypte</h2>
      <p>Spécialisé dans le règlement des litiges commerciaux internationaux, l'arbitrage devant le CRCICA et l'exécution des sentences arbitrales étrangères en Égypte sous la Convention de New York.</p>
    `,
    content_it: `
      <h2>Avvocato per Arbitrato Internazionale e Risoluzione Controversie in Egitto</h2>
      <p>Consulenza legale specializzata per investitori e società estere in controversie commerciali, arbitrato CRCICA ed esecuzione forzata di lodi arbitrali in Egitto.</p>
    `
  }
};

// Aliases mapping for old slugs to avoid any Soft 404
export const slugAliases: Record<string, string> = {
  'comprehensive-guide-egypt-2026': 'comprehensive-legal-services-guide-egypt-2026',
  'arbitration-investors-guide-2026': 'international-arbitration-foreign-investors-lawyer-egypt-2026',

  'international-arbitration-lawyer-in-egypt': 'international-arbitration-lawyer-egypt-investment-disputes',
  'arbitration-lawyer-egypt': 'international-arbitration-lawyer-egypt-investment-disputes',
  'best-lawyer-foreigners-sharm-el-sheikh-guide-2026': 'foreign-lawyer-sharm-el-sheikh',
  'foreign-lawyer-sharm': 'foreign-lawyer-sharm-el-sheikh',
  'enforcement-foreign-arbitral-awards-egypt-guide-2026': 'enforcement-foreign-arbitral-awards-egypt-guide',
  'company-formation-egypt-foreigners-complete-guide-2026': 'company-formation-for-foreigners-in-egypt-complete-guide',
  'divorce-foreigners-egypt-complete-legal-guide-2026': 'divorce-for-foreigners-in-egypt-comprehensive-guide',
  'christian-divorce-case-2025': 'divorce-for-foreigners-in-egypt-comprehensive-guide',
  'rent-control-decision-2025': 'guide-foreigners-legal-services-egypt-2025'
};

