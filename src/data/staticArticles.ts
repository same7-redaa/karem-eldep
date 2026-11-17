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
      <p>يوفر التحكيم السرية التامة، سرعة نسبية في الفصل في النزاعات المعقدة مقارنة بالتقاضي العادي، حرية اختيار المحكمين الخبراء، والقدرة على تطبيق القواعد والقوانين الدولية.</p>

      <h2>2. الإطار التشريعي: قانون التحكيم المصري رقم 27 لسنة 1994</h2>
      <p>مستمد من قانون الأونسيترال النموذجي، ويكرس مبادئ استقلالية شرط التحكيم (Separability Doctrine)، واختصاص المحكمين بالبت في اختصاصهم (Kompetenz-Kompetenz)، ونهائية أحكام التحكيم وحصانتها من الاستئناف.</p>

      <h2>3. التمثيل القانوني أمام مركز القاهرة الإقليمي (CRCICA)</h2>
      <p>صياغة طلبات التحكيم، التدابير الوقتية والتحفظية على الحسابات والأصول، وإدارة جلسات الاستماع والمرافعات باللغات العربية والإنجليزية والفرنسية.</p>

      <h2>4. خطوات تنفيذ أحكام التحكيم الأجنبية في مصر (Exequatur)</h2>
      <p>إيداع أصل الحكم والترجمة المعتمدة لدى محكمة الاستئناف، استصدار الأمر بوضع الصيغة التنفيذية طبقاً لاتفاقية نيويورك 1958، وتوقيع الحجز التنفيذي على أموال المدين لتسييل المبالغ المقضي بها.</p>
    `,
    content_en: `
      <h2>1. Why Foreign Investors Rely on Commercial Arbitration in Egypt</h2>
      <p>International arbitration offers complete confidentiality, relatively swift adjudication compared with ordinary litigation, party autonomy in selecting specialist arbitrators, and freedom of choice of governing law.</p>

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
      <p>The Cairo Regional Centre for International Commercial Arbitration (CRCICA) is a premier arbitral institution. Karim El Deeb Law Firm provides robust legal representation before CRCICA, ICC, and Ad-Hoc tribunals.</p>
      
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
      <p>L'arbitrato internazionale è lo strumento fondamentale per la risoluzione delle controversie commerciali e degli investimenti esteri in Egitto. Lo Studio Legale Karim El Deeb offre assistenza specializzata dinanzi al CRCICA e nelle procedure di esecuzione forzata.</p>
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
      <h2>Legal basis</h2>
      <p>Egypt applies the 1958 New York Convention, and Arbitration Law No. 27 of 1994 (Articles 55 to 58) sets out how an enforcement order is obtained.</p>
      <h2>Documents usually required for the enforcement formula (exequatur)</h2>
      <ul>
        <li>The original arbitral award or an officially authenticated true copy.</li>
        <li>The original arbitration agreement or the contract containing the arbitration clause.</li>
        <li>A certified Arabic translation of the award and the arbitration agreement.</li>
        <li>A certificate of deposit of the award with the competent court of appeal clerk.</li>
      </ul>
      <h2>Exclusive grounds for refusing enforcement</h2>
      <p>Egyptian courts do not review the merits of the dispute. Refusal is limited to violation of Egyptian public policy, invalidity of the arbitration agreement, or improper notification of the party against whom the award was made.</p>
      <p><em>This article is general information, not legal advice.</em></p>
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
      <p>A large number of foreigners live and invest in Sharm El Sheikh, and some of its legal procedures differ from other governorates because it is part of South Sinai. This guide explains when you need a lawyer, what to check before appointing one, and how the relationship works.</p>

      <h2>When do you need a lawyer in Sharm El Sheikh?</h2>
      <ul>
        <li><strong>Buying property or taking usufruct:</strong> Sinai ownership rules are special, and an error in the contract wording is hard to fix later.</li>
        <li><strong>Residency:</strong> when it is tied to a property, company or marriage, or when a residency has expired or an application was refused.</li>
        <li><strong>Starting a business:</strong> diving, excursion, restaurant and hotel businesses need licences from several bodies.</li>
        <li><strong>Marriage and divorce:</strong> registering mixed marriages, and divorce and custody cases involving a foreign party.</li>
        <li><strong>Disputes:</strong> disagreements with a developer, partner or tenant, or criminal cases needing urgent attendance.</li>
      </ul>

      <h2>How to choose a lawyer</h2>
      <h3>1. Bar Association registration</h3>
      <p>Ask for the registration number and grade. Only a lawyer may represent you before the courts, not a broker, a fixer or a services office.</p>
      <h3>2. Experience with foreigners' files</h3>
      <p>These files sometimes involve applying foreign law, translating and authenticating documents, and dealing with consulates. Ask about experience with your exact type of file.</p>
      <h3>3. Language</h3>
      <p>You must understand what is happening in your file and what you sign. A lawyer who speaks your language reduces misunderstanding, but still ask for translations of important documents.</p>
      <h3>4. Local presence</h3>
      <p>Some procedures need personal attendance before bodies in South Sinai, and an office in the city saves time.</p>
      <h3>5. Fee clarity</h3>
      <p>Ask for a written fee agreement setting the scope of work, what the amount covers, and what counts as extra expenses such as government fees and translation.</p>

      <h2>Power of attorney: how a lawyer acts for you</h2>
      <p>A lawyer acts under an official power of attorney made at the Notary in Egypt, or at the Egyptian consulate if you are abroad. List only the acts you need, keep a copy, and remember you can revoke it at any time.</p>

      <h2>Warning signs</h2>
      <ul>
        <li>Anyone asking for a broad general power of attorney to sell without a clear reason.</li>
        <li>Anyone guaranteeing a case outcome before seeing the documents.</li>
        <li>Anyone refusing to give receipts for what you pay.</li>
        <li>Anyone suggesting registering a property or company in another person's name to get around the law.</li>
      </ul>

      <h2>Karim El-Deeb Law Firm in Sharm El Sheikh</h2>
      <p>The firm has practised since 2006, with its main office in Alexandria and a branch in Sharm El Sheikh. It serves foreigners in Arabic, English, French and Italian on residency, property, company formation, family cases and litigation.</p>
      <p><em>This article is general information, not legal advice.</em></p>
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
      <p>يقع المقر الرئيسي لمكتب كريم الديب للمحاماة في قلب مدينة الإسكندرية (14 شارع الشهداء، محطة الرمل)، ويقدم دعماً قانونياً شاملاً للشركات الدولية، المستوردين، والمقيمين الأجانب في عروس البحر المتوسط.</p>
      
      <h2>أبرز المجالات القانونية في الإسكندرية</h2>
      <ul>
        <li><strong>القانون التجاري والبحري:</strong> تسوية نزاعات الشحن والتخليص الجمركي بميناء الإسكندرية وميناء الدخيلة.</li>
        <li><strong>تأسيس الشركات للمستثمرين الأجانب:</strong> التأسيس في المناطق الحرة بالإسكندرية وبرج العرب.</li>
        <li><strong>التقاضي والتحكيم:</strong> التمثيل أمام المحاكم الاقتصادية وهيئات التحكيم.</li>
      </ul>
      <h2>ما الذي يحتاجه الأجنبي في الإسكندرية عادةً؟</h2>
      <ul>
        <li><strong>الإقامة وتجديدها:</strong> حسب سبب الوجود في مصر (عمل، استثمار، زواج، دراسة).</li>
        <li><strong>توثيق الزواج:</strong> مستندات من السفارة وترجمة معتمدة وتوثيق أمام الجهة المختصة.</li>
        <li><strong>شراء أو إيجار عقار:</strong> فحص المستندات وصياغة العقد بلغة تفهمها.</li>
        <li><strong>تأسيس شركة أو فرع:</strong> اختيار الشكل القانوني واستكمال التراخيص.</li>
        <li><strong>قضايا الأسرة:</strong> الطلاق والحضانة والنفقة عند وجود طرف أجنبي.</li>
        <li><strong>النزاعات التجارية والبحرية:</strong> الشحن والتخليص والعقود الدولية.</li>
      </ul>
      <h2>لماذا مكتب في الإسكندرية؟</h2>
      <p>كثير من الإجراءات تتطلب حضوراً أمام جهات في المدينة: المحاكم، والشهر العقاري، ومصلحة الجوازات والهجرة، والسجل التجاري. وجود مكتب قريب منها يختصر الوقت. يعمل المكتب منذ 2006 ويتحدث العربية والإنجليزية والفرنسية والإيطالية.</p>
      <p>راجع أيضاً صفحة <a href="/alexandria/lawyer-for-foreigners">محامي للأجانب في الإسكندرية</a> وصفحة <a href="/alexandria/immigration-lawyer">محامي هجرة وإقامة</a>.</p>
      <p><em>هذا المقال معلومات عامة وليس استشارة قانونية.</em></p>
    `,
    content_en: `
      <h2>Alexandria Main Office - Karim El Deeb Law Firm</h2>
      <p>Located in the commercial heart of Alexandria, our firm delivers premier legal services for foreign investors, shipping companies, and international residents.</p>
      <h2>What foreigners usually need in Alexandria</h2>
      <ul>
        <li><strong>Residency and renewal:</strong> depending on the reason for being in Egypt (work, investment, marriage, study).</li>
        <li><strong>Marriage registration:</strong> embassy documents, certified translation and registration before the competent body.</li>
        <li><strong>Buying or renting property:</strong> document review and a contract drafted in a language you understand.</li>
        <li><strong>Setting up a company or branch:</strong> choosing the legal form and completing licences.</li>
        <li><strong>Family cases:</strong> divorce, custody and maintenance where a foreign party is involved.</li>
        <li><strong>Commercial and maritime disputes:</strong> shipping, clearance and international contracts.</li>
      </ul>
      <h2>Why an office in Alexandria?</h2>
      <p>Many procedures need attendance before bodies in the city: the courts, the Real Estate Registry, the Passports and Immigration Authority and the Commercial Registry. A nearby office saves time. The firm has practised since 2006 and works in Arabic, English, French and Italian.</p>
      <p>See also <a href="/en/alexandria/lawyer-for-foreigners">Lawyer for Foreigners in Alexandria</a> and <a href="/en/alexandria/immigration-lawyer">Immigration Lawyer</a>.</p>
      <p><em>This article is general information, not legal advice.</em></p>
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
      <h2>أبرز احتياجات الأجنبي في مصر</h2>
      <ul>
        <li><strong>الإقامة:</strong> الاختيار بين أنواعها حسب سبب الوجود، وتجديدها قبل انتهائها. التفاصيل في <a href="/blog/residence-permit-guide-in-egypt-2026">دليل الإقامة</a>.</li>
        <li><strong>الشركات والاستثمار:</strong> الشكل القانوني والتراخيص. التفاصيل في <a href="/blog/company-formation-for-foreigners-in-egypt-complete-guide">دليل تأسيس الشركات</a>.</li>
        <li><strong>العقارات:</strong> فحص المستندات وصياغة العقود وتسجيلها. راجع <a href="/blog/property-sale-registration-lawyer-egypt-guide">دليل تسجيل العقار</a>.</li>
        <li><strong>الأسرة:</strong> الزواج والطلاق والحضانة. راجع <a href="/blog/divorce-for-foreigners-in-egypt-comprehensive-guide">الطلاق للأجانب</a> و<a href="/blog/foreigner-marriage-egyptian-registration-guide">زواج الأجانب</a>.</li>
        <li><strong>المنازعات:</strong> القضاء أو التحكيم أو الوساطة حسب العقد.</li>
      </ul>
      <p><em>هذا المقال معلومات عامة وليس استشارة قانونية، والشروط والرسوم تتغير بقرارات إدارية.</em></p>
    `,
    content_en: `
      <h2>Legal Rights of Foreigners in Egypt</h2>
      <p>Egypt provides robust constitutional and legislative protections for foreigners and investors under the Investment Law No. 72 of 2017.</p>
      <h2>Key laws every foreigner should know</h2>
      <ul>
        <li>Investment Law No. 72 of 2017 and its incentives for foreign investors.</li>
        <li>The Egyptian Labour Law and the rules on employing foreign workers.</li>
        <li>The law on entry and residence of foreigners in Egypt and its latest amendments.</li>
      </ul>
      <h2>What foreigners usually need in Egypt</h2>
      <ul>
        <li><strong>Residency:</strong> choosing among its types by reason of stay, and renewing before expiry. See the <a href="/en/blog/residence-permit-guide-in-egypt-2026">residency guide</a>.</li>
        <li><strong>Companies and investment:</strong> the legal form and licences. See the <a href="/en/blog/company-formation-for-foreigners-in-egypt-complete-guide">company formation guide</a>.</li>
        <li><strong>Property:</strong> document checks, contract drafting and registration. See the <a href="/en/blog/property-sale-registration-lawyer-egypt-guide">property registration guide</a>.</li>
        <li><strong>Family:</strong> marriage, divorce and custody. See <a href="/en/blog/divorce-for-foreigners-in-egypt-comprehensive-guide">divorce for foreigners</a> and <a href="/en/blog/foreigner-marriage-egyptian-registration-guide">marriage of foreigners</a>.</li>
        <li><strong>Disputes:</strong> court, arbitration or mediation depending on the contract.</li>
      </ul>
      <p><em>This article is general information, not legal advice. Conditions and fees change through administrative decisions.</em></p>
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
      <h2>كيف تعمل المتابعة عن بُعد؟</h2>
      <ol>
        <li><strong>استشارة أولية</strong> عبر الهاتف أو واتساب لفهم المطلوب والمستندات.</li>
        <li><strong>التوكيل:</strong> يُصدر من القنصلية المصرية في بلد إقامتك بصيغة تحدد الصلاحيات بدقة.</li>
        <li><strong>التنفيذ:</strong> يتولى المكتب الإجراءات والجلسات في مصر.</li>
        <li><strong>التقارير:</strong> تحديث بعد كل جلسة أو إجراء مع صور المستندات والأحكام.</li>
      </ol>
      <h2>أخطاء يقع فيها المغتربون</h2>
      <ul>
        <li>توكيل شخص غير متخصص بصلاحيات واسعة جداً.</li>
        <li>ترك الميراث دون حصر لسنوات ما يعقّد التقسيم لاحقاً.</li>
        <li>الاعتماد على اتفاقات شفهية مع الأقارب بشأن العقارات.</li>
        <li>إهمال متابعة أحكام صدرت غيابياً في مواعيد الطعن.</li>
      </ul>
      <p>راجع أيضاً: <a href="/blog/power-of-attorney-from-abroad-egypt-guide">التوكيل من الخارج لمتابعة قضاياك في مصر</a>، وصفحة <a href="/egyptians-abroad">خدمات المصريين بالخارج</a>.</p>
      <p><em>هذا المقال معلومات قانونية عامة وليس استشارة لحالة بعينها.</em></p>
    `,
    content_en: `
      <h2>Remote Legal Representation for Egyptian Expats</h2>
      <p>Egyptians living in the Gulf, Europe and the Americas face challenges managing their legal and property affairs in Egypt. Karim El-Deeb Law Firm provides full legal representation under official consular powers of attorney, without the client needing to travel.</p>
      <h2>Main services</h2>
      <ul>
        <li>Inventory and division of estates, and settling inheritance disputes.</li>
        <li>Managing property, leases, sales and purchases.</li>
        <li>Representation in civil, commercial and personal status cases.</li>
        <li>Following family cases from abroad: maintenance, custody, visitation, divorce and khula.</li>
        <li>Obtaining official documents from the Real Estate Registry, the Civil Registry and the courts.</li>
      </ul>
      <h2>How does remote follow-up work?</h2>
      <ol>
        <li><strong>Initial consultation</strong> by phone or WhatsApp to understand the need and documents.</li>
        <li><strong>Power of attorney:</strong> issued at the Egyptian consulate in your country, worded to set the powers precisely.</li>
        <li><strong>Execution:</strong> the firm handles procedures and hearings in Egypt.</li>
        <li><strong>Reporting:</strong> an update after each hearing or step with copies of documents and judgments.</li>
      </ol>
      <h2>Mistakes expats often make</h2>
      <ul>
        <li>Giving a non-specialist very broad powers.</li>
        <li>Leaving an inheritance unsettled for years, which complicates division later.</li>
        <li>Relying on verbal agreements with relatives about property.</li>
        <li>Missing appeal deadlines on judgments issued in your absence.</li>
      </ul>
      <p>See also: <a href="/en/blog/power-of-attorney-from-abroad-egypt-guide">Power of attorney from abroad for your cases in Egypt</a> and our <a href="/en/egyptians-abroad">Egyptians abroad</a> page.</p>
      <p><em>This article is general legal information, not advice on a specific case.</em></p>
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
      <p>تقدم مصر للمستثمرين الأجانب باقة حوافز استثنائية بموجب قانون الاستثمار الجديد، تشمل حوافز ضريبية وإجراءات مبسطة لبعض القطاعات والمناطق، وإتاحة "الرخصة الذهبية" للمشروعات الاستراتيجية. تختلف الحوافز المتاحة حسب القطاع والموقع والشروط، فتحقق من الحافز المنطبق على مشروعك مع هيئة الاستثمار ومحاميك.</p>
      
      <h2>المناطق الاستثمارية والمناطق الحرة</h2>
      <ul>
        <li>المناطق الحرة العامة والخاصة: تخضع لنظام جمركي وضريبي خاص يختلف باختلاف نوع المنطقة والنشاط، ويلزم التحقق من الشروط قبل التأسيس.</li>
        <li>المنطقة الاقتصادية لقناة السويس (SCZone): حوافز جمركية ولوجستية فريدة للمشروعات الصناعية.</li>
      </ul>
    `,
    content_en: `
      <h2>Investment Incentives in Egypt</h2>
      <p>Egypt offers compelling investment incentives, including tax incentives and simplified procedures for certain sectors and areas, and the Golden License for strategic projects. Available incentives depend on the sector, location and conditions, so confirm what applies to your project with the Investment Authority and your lawyer.</p>
      <h2>Free Zones and Investment Areas</h2>
      <p>Public and private free zones and the Suez Canal Economic Zone (SCZone) operate under special customs and tax regimes that vary by zone and activity. Check the conditions before incorporating.</p>
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
      <p>Egyptian law lets foreigners set up and fully own companies in most activities, mainly under the Companies Law No. 159 of 1981 and the Investment Law No. 72 of 2017. This guide explains the available legal forms, the incorporation steps, and the mistakes that delay or cost foreign investors later.</p>

      <h2>1. Legal forms available to foreigners</h2>
      <h3>Limited liability company (LLC)</h3>
      <p>The most common form for small and medium projects. Each partner's liability is limited to their share, management is flexible, and the manager may be a foreigner. The law sets a minimum and maximum number of partners, and an LLC cannot offer its shares to the public.</p>
      <h3>One-person company</h3>
      <p>Added to the Companies Law by the 2018 amendments, it lets one person, Egyptian or foreign, form a limited liability company without a partner. Suitable for individual ventures and professional services.</p>
      <h3>Joint-stock company</h3>
      <p>For large projects or those needing many shareholders. It is run by a board, its capital is divided into tradable shares, and its incorporation and supervision rules are more detailed.</p>
      <h3>Branch of a foreign company</h3>
      <p>Registration of a branch of an existing foreign company to operate in Egypt. A branch is not a separate legal person, and the parent company is liable for its obligations.</p>
      <h3>Representative office</h3>
      <p>For market research and promoting the parent company's products only. It may not carry on commercial activity or earn revenue in Egypt.</p>

      <h2>2. How to choose the right form</h2>
      <ul>
        <li><strong>Number of partners:</strong> one or several.</li>
        <li><strong>Nature of the activity:</strong> some activities, such as import and tourism, have special nationality conditions or licences from specific bodies.</li>
        <li><strong>Size and financing plans:</strong> will new shareholders join later?</li>
        <li><strong>Incentives sought:</strong> the domestic investment regime or free zones.</li>
      </ul>
      <p>A wrong choice at the start may require converting the legal form later, which takes longer than incorporating.</p>

      <h2>3. Incorporation steps</h2>
      <ol>
        <li><strong>Reserve the trade name:</strong> obtain a no-conflict certificate from the Commercial Registry.</li>
        <li><strong>Prepare the articles or memorandum of association:</strong> activity, capital and share split, managers and powers, decision-making and partner dispute resolution.</li>
        <li><strong>Security approvals:</strong> for foreign partners and managers, and sometimes a condition for certain activities.</li>
        <li><strong>Deposit the capital:</strong> in a bank account for the company under formation and obtain a bank certificate.</li>
        <li><strong>Apply at the Investors Service Centre of the Investment Authority:</strong> to notarise the contract and issue the Commercial Registry extract.</li>
        <li><strong>Tax card and VAT registration</strong> where the conditions apply.</li>
        <li><strong>Social insurance:</strong> register the company as an employer and register employees.</li>
        <li><strong>Activity-specific licences:</strong> such as Tourism, Health or industrial licences.</li>
      </ol>

      <h2>4. Usual documents</h2>
      <ul>
        <li>Valid passports for foreign partners, translated and authenticated as required.</li>
        <li>A lease or ownership document for the company's premises.</li>
        <li>An official power of attorney to the lawyer, which can be made abroad through the Egyptian consulate.</li>
        <li>For corporate partners: the foreign company's incorporation documents and a participation resolution, authenticated and translated.</li>
      </ul>

      <h2>5. Investment incentives</h2>
      <p>The Investment Law grants general incentives to all projects and special, additional incentives for particular projects by activity and location, alongside the free-zone regime and the Golden License for strategic projects. The conditions, rate and duration of each incentive are set by the executive regulations and decisions and must be verified for each project before starting.</p>

      <h2>6. Common mistakes</h2>
      <ul>
        <li><strong>Using a ready-made contract:</strong> it does not regulate partner disputes, exits or the entry of a new partner.</li>
        <li><strong>Starting before all licences are complete:</strong> this can lead to closure and fines.</li>
        <li><strong>Neglecting tax and insurance duties after incorporation:</strong> incorporation is the start of obligations, not the end.</li>
        <li><strong>Registering the company in someone else's name to bypass a legal condition:</strong> this puts the investor's real ownership at risk.</li>
      </ul>

      <h2>How we help</h2>
      <p>Karim El-Deeb Law Firm handles company incorporation for foreign investors, from choosing the legal form to receiving the Commercial Registry and tax card, including drafting the articles and shareholder agreements, in Arabic, English, French and Italian. See our <a href="/en/company-law">company law</a> and <a href="/en/alexandria/corporate-lawyer">corporate lawyer in Alexandria</a> pages.</p>

      <p><em>This article is general information, not legal advice. Procedures and conditions change through executive decisions, so review your case with a lawyer before deciding.</em></p>
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
      <p>Divorce between foreigners in Egypt, or between a foreigner and an Egyptian, raises one question before any step: which law governs? The answer decides the right to divorce itself, custody, maintenance, and whether the judgment can be recognised in your home country. This guide explains the basic rules and practical steps.</p>

      <h2>1. Applicable law</h2>
      <p>Articles 12 to 14 of the Egyptian Civil Code regulate this:</p>
      <ul>
        <li><strong>If one spouse was Egyptian when the marriage was concluded:</strong> Egyptian law alone governs the effects of the marriage and divorce (Article 14), whatever the other spouse's nationality.</li>
        <li><strong>If both spouses are foreigners:</strong> divorce is governed by the husband's national law at the time of divorce, and judicial divorce and separation by the husband's national law at the time the case is filed (Article 13).</li>
        <li><strong>Public policy:</strong> an Egyptian court will not apply any foreign provision that contradicts Egyptian public policy.</li>
      </ul>
      <p>So an Egyptian judge may hear the case and apply, for example, French or Italian law, which requires submitting the text of the foreign law, translated, and proving it.</p>

      <h2>2. Ways to end the marriage under Egyptian law</h2>
      <h3>Divorce by the husband</h3>
      <p>Registered before the registrar or competent notary, with financial consequences for the wife.</p>
      <h3>Judicial divorce for harm</h3>
      <p>A case filed by the wife proving harm that makes married life impossible, by witnesses, documents or reports. The court first attempts reconciliation.</p>
      <h3>Khula</h3>
      <p>The wife ends the marriage without the husband's consent, returning the dowry she received and waiving her financial rights under Islamic law. The court attempts reconciliation and appoints two arbitrators, and the khula judgment is final and not open to appeal.</p>
      <h3>Divorce for absence or non-maintenance</h3>
      <p>Where the husband is absent without acceptable excuse or refuses to provide maintenance, under conditions set by the personal status law.</p>

      <h2>3. Custody</h2>
      <p>Under Egyptian law, custody goes first to the mother until the age set by law, after which the judge lets the child choose between staying with the custodian or moving. The non-custodial parent has visitation by judgment or agreement. If a foreign law applies, the rules may differ, such as joint custody known in many European countries. In every case the child's interest is the main criterion.</p>
      <p><strong>Important:</strong> taking children out of Egypt without agreement or a judgment can expose the parent who did so to legal liability and may make recovery a long process across several countries.</p>

      <h2>4. Maintenance and financial rights</h2>
      <ul>
        <li><strong>Wife's maintenance, iddah and mut'ah:</strong> under Egyptian law, set by the court according to the husband's means and the circumstances of both parties.</li>
        <li><strong>Child maintenance:</strong> owed by the father, covering food, clothing, housing, education and medical care.</li>
        <li><strong>Property:</strong> Egyptian law does not recognise a community-property regime between spouses, unlike some foreign laws, which affects how assets are divided.</li>
      </ul>

      <h2>5. Practical steps</h2>
      <ol>
        <li><strong>Identify the applicable law</strong> from each party's nationality at the time of marriage and at filing.</li>
        <li><strong>Gather documents:</strong> marriage certificate, children's birth certificates, passports, income documents and any proof of harm, translated and authenticated.</li>
        <li><strong>Apply to the family dispute settlement office:</strong> a mandatory step before most family cases.</li>
        <li><strong>File before the competent family court</strong> and attend hearings or appoint someone to attend.</li>
        <li><strong>After judgment:</strong> obtain an official copy, have it authenticated by the Ministry of Foreign Affairs and the relevant consulate, and register it in each party's country.</li>
      </ol>

      <h2>6. Recognition abroad</h2>
      <p>A judgment issued in Egypt is not automatically recognised in your country. Each state has its own procedure for registering foreign divorces, so it is best to coordinate with a lawyer in your country or your consulate before filing, so the judgment is issued in a form your legal system accepts.</p>

      <h2>How we help</h2>
      <p>Karim El-Deeb Law Firm handles family cases for foreigners and mixed marriages, from identifying the applicable law to authentication and registration of the judgment, in Arabic, English, French and Italian, and can represent you by power of attorney if you are abroad. See our <a href="/en/family-law">family law</a> and <a href="/en/alexandria/family-lawyer">family lawyer in Alexandria</a> pages.</p>

      <p><em>This article is general information, not legal advice. Each case differs by nationalities, religion and date of marriage, so review your case with a lawyer before acting.</em></p>
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
    excerpt_fr: 'Guide d\'achat immobilier à Sharm El Sheikh : droit d\'usufruit et résidence immobilière.',
    excerpt_it: 'Guida all\'acquisto di immobili a Sharm El Sheikh: diritto di usufrutto e residenza.',
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
      <p>Buying property in Sharm El Sheikh is legally different from buying in Cairo or Alexandria, because the Sinai Peninsula is subject to special ownership rules. This guide explains what a foreign buyer should know before paying anything.</p>

      <h2>1. The legal framework in Sinai</h2>
      <p>Law No. 14 of 2012 on the integrated development of the Sinai Peninsula, and its amendments, regulates ownership in the area. It limits full ownership of land and real estate to specified categories of Egyptians and allows others, including foreigners, to obtain a <strong>usufruct right</strong> over units under the conditions and periods set by the law and its executive decisions.</p>
      <p>In practice, many contracts offered to foreigners in Sharm El Sheikh are usufruct contracts or developer contracts, not registered ownership. The wording of the contract decides your rights to sell, inherit and lease.</p>

      <h2>2. Types of contract you will meet</h2>
      <ul>
        <li><strong>Developer contract for a unit under construction:</strong> check the project's licences, the delivery schedule, the penalty for delay, and what happens to your payments if the project stops.</li>
        <li><strong>Usufruct contract:</strong> check the term, renewal conditions, your right to assign the usufruct to someone else, and what happens on death.</li>
        <li><strong>Resale from a previous owner:</strong> check the chain of contracts back to the developer or original owner, and whether the right is transferable at all.</li>
      </ul>

      <h2>3. Legal due diligence before buying</h2>
      <ol>
        <li>Verify the seller's capacity and right to dispose.</li>
        <li>Review the land title, the building permit, and whether the unit matches it.</li>
        <li>Search for mortgages, attachments or court disputes on the unit or the project.</li>
        <li>Review the owners' association rules and maintenance and service charges.</li>
        <li>Confirm the permitted use, residential or hotel, matches what you intend, especially if you plan tourist rentals.</li>
      </ol>

      <h2>4. Contracting and payment</h2>
      <ul>
        <li>Ask for a contract in a language you understand alongside the Arabic version, and state which version prevails in a dispute.</li>
        <li>Pay by documented bank transfer and avoid cash without official receipts.</li>
        <li>Link each payment to a clear construction milestone if the unit is under construction.</li>
        <li>Arrange notarisation, certification of the contract date, or a signature-validity claim, depending on the type of contract.</li>
      </ul>

      <h2>5. After buying</h2>
      <ul>
        <li><strong>Residency:</strong> owning or holding usufruct over a property may open the door to a type of residence under the conditions announced at the time of application.</li>
        <li><strong>Letting:</strong> short-term tourist letting may need licences or a licensed management company.</li>
        <li><strong>Taxes and fees:</strong> these vary with the property and its use, and need an accountant's review.</li>
        <li><strong>Inheritance:</strong> decide in advance what happens to the right on death, especially under usufruct contracts.</li>
      </ul>

      <h2>Common mistakes</h2>
      <ul>
        <li>Relying on the seller's or broker's promises without reviewing documents.</li>
        <li>Signing an Arabic contract you do not understand without review.</li>
        <li>Registering the property in an Egyptian's name to bypass ownership limits, which puts the entire property at risk.</li>
        <li>Buying a unit built in breach of its licence.</li>
      </ul>

      <h2>How we help</h2>
      <p>From its Sharm El Sheikh branch, Karim El-Deeb Law Firm carries out legal due diligence on properties, reviews and drafts purchase and usufruct contracts, and follows registration procedures, in Arabic, English, French and Italian. See our <a href="/en/sharm-el-sheikh">Sharm El Sheikh office</a> page.</p>

      <p><em>This article is general information, not legal advice. Ownership rules in Sinai are affected by successive executive decisions, so have a lawyer review the contract before you sign or pay.</em></p>
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
      <p>Residency is what allows a foreigner to stay in Egypt after the entry visa expires. It is issued by the General Administration of Passports, Immigration and Nationality, and its type depends on why you are in Egypt. This guide explains the main types, documents, steps and common mistakes.</p>

      <h2>1. Main types of residency</h2>
      <h3>Work residency</h3>
      <p>For a foreigner working for an entity in Egypt. It is preceded by approval and a work permit from the labour authority, and is renewed with the permit. Working without a permit is a violation borne by both the worker and the employer.</p>
      <h3>Investor or partner residency</h3>
      <p>For partners and managers of companies established in Egypt, issued on the basis of company documents and a letter from the competent body.</p>
      <h3>Property ownership residency</h3>
      <p>For those who own property in Egypt under the conditions announced by the competent authorities. In Sharm El Sheikh and Sinai generally, foreign ownership has special rules that must be reviewed before buying.</p>
      <h3>Residency through marriage to an Egyptian</h3>
      <p>For the foreign spouse after the marriage is officially registered, and for their children.</p>
      <h3>Student residency</h3>
      <p>For students enrolled at accredited universities or institutes, with a letter from the institution.</p>
      <h3>Tourist residency</h3>
      <p>For purposes other than work, issued under the conditions the Passports Authority announces at the time of application.</p>
      <p>The duration, fees and financial conditions of each residency change through administrative decisions, so we check them with each application rather than relying on old figures.</p>

      <h2>2. Usual documents</h2>
      <ul>
        <li>A passport valid for a sufficient period, with a copy of the data page and the entry stamp.</li>
        <li>Recent passport photos.</li>
        <li>The document proving the reason for residence: work permit, company documents, property contract, marriage certificate or university letter.</li>
        <li>Proof of residence address in Egypt.</li>
        <li>Foreign documents translated and authenticated where needed.</li>
      </ul>

      <h2>3. Steps</h2>
      <ol>
        <li>Enter Egypt on a valid, suitable visa.</li>
        <li>Prepare the document supporting the residency and complete translations and authentications.</li>
        <li>Apply at the competent passports office or on the e-platform depending on the type, and pay the fees.</li>
        <li>Follow up until collection and answer any request for further documents.</li>
        <li>Record the expiry date and start renewal early.</li>
      </ol>

      <h2>4. Common mistakes</h2>
      <ul>
        <li><strong>Renewing late:</strong> overstaying exposes you to fines and can affect future applications.</li>
        <li><strong>Working on a non-work residency:</strong> a violation even if your residency is valid.</li>
        <li><strong>Submitting unauthenticated foreign documents:</strong> the most common reason for rejection or delay.</li>
        <li><strong>Relying on old forum information:</strong> conditions and fees change constantly.</li>
      </ul>

      <h2>Frequently asked questions</h2>
      <h3>Can I change the type of residency without leaving Egypt?</h3>
      <p>In many cases yes, if the conditions for the new type are met, such as moving from tourist residency to work residency after obtaining a work permit.</p>
      <h3>What do I do if my residency has already expired?</h3>
      <p>Apply for renewal as soon as possible and pay the fine due. A long delay complicates matters.</p>
      <h3>Do I need a lawyer to get residency?</h3>
      <p>Not in every case, but it helps when the residency is tied to a company, property or mixed marriage, or where there has been a refusal or a violation.</p>

      <h2>How we help</h2>
      <p>Karim El-Deeb Law Firm handles residency files for foreigners in Alexandria and Sharm El Sheikh: choosing the right type, preparing documents, following up with the authorities, and resolving expired-residency problems. See our <a href="/en/foreigners-in-egypt">foreigners in Egypt</a> and <a href="/en/alexandria/immigration-lawyer">immigration lawyer in Alexandria</a> pages.</p>

      <p><em>This article is general information, not legal advice. Residency conditions and fees change through administrative decisions, so confirm the current position before applying.</em></p>
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
      <p>As premier <strong>international lawyers in Egypt</strong>, Karim El Deeb Law Firm provides top-tier legal counsel in <strong>commercial arbitration in Egypt</strong>, cross-border corporate transactions, and complex international dispute resolution.</p>

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
  },

  "khula-divorce-procedure-egypt-guide": {
    id: "khula-divorce-procedure-egypt-guide",
    slug: "khula-divorce-procedure-egypt-guide",
    title: "الخلع في مصر: الشروط والإجراءات خطوة بخطوة",
    title_en: "Khula (Wife-Initiated Divorce) in Egypt: Conditions and Steps",
    seoTitle: "الخلع في مصر: الشروط والإجراءات",
    seoTitle_en: "Khula Divorce in Egypt: Steps & Requirements",
    excerpt: "شرح مبسط لدعوى الخلع أمام محكمة الأسرة: ماذا تتنازل الزوجة عنه، ومراحل الدعوى، والمستندات المطلوبة، ومتى تحتاجين محامياً.",
    excerpt_en: "A plain guide to filing khula before the Egyptian family court: what the wife gives up, the stages of the case, documents, and when to hire a lawyer.",
    image: "/images/services/family-law.webp",
    date: '2026-11-16',
    category: "الأحوال الشخصية",
    readTime: "6 دقائق",
    tags: ["الخلع","محامي أحوال شخصية في الإسكندرية","دعوى خلع","محكمة الأسرة"],
    isPublished: true,
    order: 30,
    content: "<h2>ما هو الخلع؟</h2>\n<p>الخلع حق للزوجة في طلب إنهاء الزواج أمام محكمة الأسرة عندما تستحيل العشرة بينها وبين زوجها وتخشى ألا تقيم حدود الله. ينظمه قانون تنظيم بعض أوضاع وإجراءات التقاضي في مسائل الأحوال الشخصية رقم 1 لسنة 2000.</p>\n<h2>ماذا تتنازل عنه الزوجة؟</h2>\n<p>تتنازل الزوجة عن حقوقها المالية الشرعية، وترد ما دفعه الزوج من مقدم الصداق. وتبقى حقوق الأطفال، مثل نفقتهم وحضانتهم ورؤيتهم، قائمة ولا يشملها التنازل.</p>\n<h2>خطوات الدعوى</h2>\n<ul>\n<li><strong>طلب التسوية:</strong> يُقدَّم أولاً إلى مكتب تسوية المنازعات الأسرية التابع للمحكمة.</li>\n<li><strong>رفع الدعوى:</strong> أمام محكمة الأسرة المختصة بالإسكندرية أو بمحل إقامة الزوجة حسب ضوابط الاختصاص.</li>\n<li><strong>محاولة الصلح:</strong> تبذل المحكمة محاولات للصلح وتندب حكمين في بعض الحالات.</li>\n<li><strong>الحكم:</strong> إذا أقرّت الزوجة بالتنازل ورفضت الاستمرار، تحكم المحكمة بالتطليق خلعاً.</li>\n</ul>\n<h2>المستندات المعتادة</h2>\n<p>وثيقة الزواج، وبطاقة الرقم القومي، وما يفيد مقدم الصداق المدفوع، وشهادات ميلاد الأطفال إن وُجدوا، وبيانات إعلان الزوج.</p>\n<h2>متى تحتاجين محامياً؟</h2>\n<p>عند صياغة صحيفة الدعوى بشكل سليم، وإعلان الزوج، وحصر الحقوق المتنازل عنها، ولحماية حقوق الأطفال في نفقتهم وحضانتهم حتى لا تضيع أثناء الإجراءات.</p>\n<p><em>هذا المقال معلومات قانونية عامة وليس استشارة لحالة بعينها. تختلف الإجراءات والمستندات حسب ظروف كل قضية، ويُنصح بعرض مستنداتك على محامٍ قبل اتخاذ أي خطوة.</em></p><h2>تواصل مع مكتبنا</h2><p>مكتب كريم الديب للمحاماة يعمل منذ 2006 ومقره الرئيسي في محطة الرمل بالإسكندرية. اتصل أو راسلنا على واتساب: <a href=\"tel:+201223767592\">01223767592</a>.</p>",
    content_en: "<h2>What is Khula?</h2>\n<p>Khula lets a wife ask the Egyptian family court to end the marriage when married life has become impossible. It is governed by Personal Status Procedure Law No. 1 of 2000.</p>\n<h2>What does the wife give up?</h2>\n<p>She waives her financial rights under Islamic law and returns the advance dowry the husband paid. The children's rights, such as maintenance, custody and visitation, are not affected.</p>\n<h2>Steps of the case</h2>\n<ul>\n<li><strong>Settlement request:</strong> first filed with the family dispute settlement office attached to the court.</li>\n<li><strong>Filing the case:</strong> before the competent family court, in Alexandria or where the wife lives, subject to jurisdiction rules.</li>\n<li><strong>Reconciliation attempt:</strong> the court tries to reconcile the spouses and sometimes appoints two arbitrators.</li>\n<li><strong>Judgment:</strong> if the wife confirms the waiver and refuses to continue, the court grants the divorce by khula.</li>\n</ul>\n<h2>Usual documents</h2>\n<p>Marriage certificate, national ID or passport, proof of the dowry paid, the children's birth certificates, and the husband's address for service.</p>\n<h2>When do you need a lawyer?</h2>\n<p>To draft the claim correctly, serve the husband, record exactly which rights are waived, and protect the children's maintenance and custody during the proceedings.</p>\n<p><em>This article is general legal information, not advice on a specific case. Procedures and required documents vary with each situation, so have a lawyer review your papers before you act.</em></p><h2>Contact Our Office</h2><p>Karim El-Deeb Law Firm has practised since 2006, with its main office in Raml Station, Alexandria. Call or WhatsApp: <a href=\"tel:+201223767592\">+20 122 376 7592</a>.</p>"
  },

  "alimony-custody-visitation-egypt-guide": {
    id: "alimony-custody-visitation-egypt-guide",
    slug: "alimony-custody-visitation-egypt-guide",
    title: "النفقة والحضانة والرؤية في مصر: دليل مبسط للأسرة",
    title_en: "Alimony, Custody and Visitation in Egypt: A Simple Family Guide",
    seoTitle: "النفقة والحضانة والرؤية في مصر",
    seoTitle_en: "Alimony, Custody & Visitation in Egypt",
    excerpt: "أنواع النفقة، ومن له الحضانة، وكيف تُنظَّم الرؤية والاستضافة، وما الذي يمكن للمحكمة تعديله لاحقاً.",
    excerpt_en: "Types of alimony, who holds custody, how visitation is arranged, and what the court can change later.",
    image: "/images/services/family-law.webp",
    date: '2026-11-16',
    category: "الأحوال الشخصية",
    readTime: "6 دقائق",
    tags: ["نفقة","حضانة","رؤية","محامي أسرة في الإسكندرية"],
    isPublished: true,
    order: 31,
    content: "<h2>أنواع النفقة</h2>\n<ul>\n<li><strong>نفقة الزوجة:</strong> تستحقها الزوجة أثناء قيام الزوجية.</li>\n<li><strong>نفقة الصغار:</strong> تشمل المأكل والملبس والمسكن والتعليم والعلاج.</li>\n<li><strong>نفقة العدة والمتعة:</strong> تُقرَّر عند الطلاق وفق ظروف الزواج والطلاق.</li>\n</ul>\n<p>تُقدَّر النفقة حسب يسار الملتزم بها وحاجة المستحق، وتُحكم بها المحكمة بعد بحث الدخل والالتزامات.</p>\n<h2>الحضانة</h2>\n<p>الحضانة رعاية الصغير وتربيته، وتُمنح وفق مصلحته الفضلى. للأم الأولوية في الحضانة وفق ترتيب يحدده القانون، وللقاضي سلطة النظر في مصلحة الصغير إذا ثار نزاع.</p>\n<h2>الرؤية والاستضافة</h2>\n<p>ينظّم القضاء حق الطرف غير الحاضن في رؤية الصغير، ويحدد مكانها وموعدها. يمكن طلب تعديل ترتيبات الرؤية إذا تغيّرت الظروف.</p>\n<h2>هل يمكن تعديل الحكم؟</h2>\n<p>نعم، يجوز رفع دعوى لزيادة النفقة أو إنقاصها أو تعديل الرؤية عند تغيّر الدخل أو ظروف الأسرة، مع تقديم ما يثبت هذا التغيّر.</p>\n<h2>نصيحة عملية</h2>\n<p>احتفظ بإثباتات الدخل والإنفاق على الأبناء، وتجنّب الاتفاقات الشفهية، ووثّق كل ما يخص الأطفال كتابةً.</p>\n<p><em>هذا المقال معلومات قانونية عامة وليس استشارة لحالة بعينها. تختلف الإجراءات والمستندات حسب ظروف كل قضية، ويُنصح بعرض مستنداتك على محامٍ قبل اتخاذ أي خطوة.</em></p><h2>تواصل مع مكتبنا</h2><p>مكتب كريم الديب للمحاماة يعمل منذ 2006 ومقره الرئيسي في محطة الرمل بالإسكندرية. اتصل أو راسلنا على واتساب: <a href=\"tel:+201223767592\">01223767592</a>.</p>",
    content_en: "<h2>Types of alimony</h2>\n<ul>\n<li><strong>Wife's maintenance:</strong> owed during the marriage.</li>\n<li><strong>Child maintenance:</strong> food, clothing, housing, education and medical care.</li>\n<li><strong>Iddah and mut'ah:</strong> set at divorce according to the circumstances.</li>\n</ul>\n<p>The amount depends on the payer's means and the beneficiary's needs, and the court rules after examining income and obligations.</p>\n<h2>Custody</h2>\n<p>Custody means caring for and raising the child, and is decided in the child's best interest. The mother has priority under an order set by law, and the judge can review the child's interest if there is a dispute.</p>\n<h2>Visitation</h2>\n<p>The court regulates the non-custodial parent's right to see the child, including place and time. Arrangements can be revisited when circumstances change.</p>\n<h2>Can a judgment be changed?</h2>\n<p>Yes. A new case can seek to raise or lower maintenance or change visitation when income or family circumstances change, with proof of the change.</p>\n<h2>Practical tip</h2>\n<p>Keep proof of income and spending on the children, avoid verbal agreements, and put everything concerning the children in writing.</p>\n<p><em>This article is general legal information, not advice on a specific case. Procedures and required documents vary with each situation, so have a lawyer review your papers before you act.</em></p><h2>Contact Our Office</h2><p>Karim El-Deeb Law Firm has practised since 2006, with its main office in Raml Station, Alexandria. Call or WhatsApp: <a href=\"tel:+201223767592\">+20 122 376 7592</a>.</p>"
  },

  "criminal-investigation-rights-lawyer-egypt-guide": {
    id: "criminal-investigation-rights-lawyer-egypt-guide",
    slug: "criminal-investigation-rights-lawyer-egypt-guide",
    title: "حقوقك أثناء التحقيق الجنائي في مصر: دور المحامي أمام النيابة",
    title_en: "Your Rights During a Criminal Investigation in Egypt: The Lawyer at the Prosecution",
    seoTitle: "حقوق المتهم أثناء التحقيق في مصر",
    seoTitle_en: "Rights During Criminal Investigation in Egypt",
    excerpt: "ماذا تفعل عند استدعائك أو القبض عليك: حق الصمت، حضور المحامي، ومراحل التحقيق أمام النيابة العامة.",
    excerpt_en: "What to do if summoned or arrested in Egypt: the right to silence, having a lawyer present, and the stages of investigation before the Public Prosecution.",
    image: "/images/services/criminal-law.webp",
    date: '2026-11-16',
    category: "القانون الجنائي",
    readTime: "6 دقائق",
    tags: ["محامي جنائي في الإسكندرية","التحقيق","النيابة العامة","حقوق المتهم"],
    isPublished: true,
    order: 32,
    content: "<h2>عند القبض أو الاستدعاء</h2>\n<p>اطلب فوراً الاتصال بمحاميك. لا توقّع على أي محضر قبل قراءته، ولا تدلِ بأقوال دون استشارة قانونية.</p>\n<h2>حضور المحامي</h2>\n<p>يكفل قانون الإجراءات الجنائية للمتهم حق الاستعانة بمحامٍ يحضر معه التحقيق، وتُنتدب له المحكمة محامياً في الجنايات إذا لم يكن له محامٍ.</p>\n<h2>مراحل التحقيق</h2>\n<ul>\n<li><strong>محضر الشرطة:</strong> تُدوَّن فيه البلاغ والأقوال الأولية.</li>\n<li><strong>التحقيق بالنيابة:</strong> تستجوب النيابة المتهم وتسمع الشهود وتأمر بالإجراءات اللازمة.</li>\n<li><strong>قرار النيابة:</strong> إما الحفظ أو الإحالة للمحكمة أو اتخاذ تدبير احترازي مثل الحبس الاحتياطي.</li>\n<li><strong>المحاكمة:</strong> أمام محكمة الجنح أو الجنايات حسب وصف الجريمة.</li>\n</ul>\n<h2>أخطاء شائعة</h2>\n<p>التسرع بالاعتراف دون فهم الاتهام، وتجاهل الاستدعاء، والتوقيع على أوراق غير مقروءة، وتأخير توكيل محامٍ.</p>\n<h2>الطعن والاستئناف</h2>\n<p>تقبل الأحكام الطعن بالاستئناف في الجنح، وبالنقض في الجنح والجنايات خلال المواعيد التي يحددها القانون، وهي مواعيد حاسمة لا تُهمل.</p>\n<p><em>هذا المقال معلومات قانونية عامة وليس استشارة لحالة بعينها. تختلف الإجراءات والمستندات حسب ظروف كل قضية، ويُنصح بعرض مستنداتك على محامٍ قبل اتخاذ أي خطوة.</em></p><h2>تواصل مع مكتبنا</h2><p>مكتب كريم الديب للمحاماة يعمل منذ 2006 ومقره الرئيسي في محطة الرمل بالإسكندرية. اتصل أو راسلنا على واتساب: <a href=\"tel:+201223767592\">01223767592</a>.</p>",
    content_en: "<h2>If you are summoned or arrested</h2>\n<p>Ask immediately to contact your lawyer. Do not sign any record before reading it, and do not give statements without legal advice.</p>\n<h2>Having a lawyer present</h2>\n<p>The Code of Criminal Procedure lets the accused have a lawyer attend the investigation, and in felony cases the court appoints one if the accused has none.</p>\n<h2>Stages of the investigation</h2>\n<ul>\n<li><strong>Police report:</strong> records the complaint and first statements.</li>\n<li><strong>Prosecution interrogation:</strong> the Public Prosecution questions the accused, hears witnesses and orders necessary measures.</li>\n<li><strong>Prosecution decision:</strong> dismissal, referral to court, or a precautionary measure such as pre-trial detention.</li>\n<li><strong>Trial:</strong> before the misdemeanor or felony court depending on the charge.</li>\n</ul>\n<h2>Common mistakes</h2>\n<p>Confessing before understanding the charge, ignoring a summons, signing unread papers, and delaying the appointment of a lawyer.</p>\n<h2>Appeals</h2>\n<p>Misdemeanor judgments can be appealed, and misdemeanor and felony judgments can go to the Court of Cassation, within legal time limits that must not be missed.</p>\n<p><em>This article is general legal information, not advice on a specific case. Procedures and required documents vary with each situation, so have a lawyer review your papers before you act.</em></p><h2>Contact Our Office</h2><p>Karim El-Deeb Law Firm has practised since 2006, with its main office in Raml Station, Alexandria. Call or WhatsApp: <a href=\"tel:+201223767592\">+20 122 376 7592</a>.</p>"
  },

  "cybercrime-law-175-defense-egypt-guide": {
    id: "cybercrime-law-175-defense-egypt-guide",
    slug: "cybercrime-law-175-defense-egypt-guide",
    title: "الجرائم الإلكترونية في مصر: ماذا يقول قانون 175 لسنة 2018 وكيف تدافع عن نفسك",
    title_en: "Cybercrime in Egypt: Law 175 of 2018 and How to Defend Yourself",
    seoTitle: "الجرائم الإلكترونية في مصر وقانون 175",
    seoTitle_en: "Cybercrime Law 175 of 2018 in Egypt",
    excerpt: "أشهر بلاغات الجرائم الإلكترونية، وكيف تتعامل النيابة معها، وما يلزم لإثبات الواقعة أو الدفاع عنها.",
    excerpt_en: "Common cybercrime complaints in Egypt, how the prosecution treats them, and what is needed to prove or defend a case.",
    image: "/images/services/criminal-law.webp",
    date: '2026-11-16',
    category: "القانون الجنائي",
    readTime: "5 دقائق",
    tags: ["جرائم إلكترونية","قانون 175 لسنة 2018","محامي جنائي"],
    isPublished: true,
    order: 33,
    content: "<h2>الإطار القانوني</h2>\n<p>ينظم قانون مكافحة جرائم تقنية المعلومات رقم 175 لسنة 2018 الجرائم المرتبطة بالإنترنت والحسابات والأجهزة، إلى جانب نصوص قانون العقوبات.</p>\n<h2>بلاغات شائعة</h2>\n<ul>\n<li>السب والقذف عبر مواقع التواصل.</li>\n<li>الدخول غير المشروع على حساب أو جهاز.</li>\n<li>انتحال الشخصية وإنشاء حسابات مزيفة.</li>\n<li>الابتزاز الإلكتروني ونشر صور أو بيانات خاصة.</li>\n<li>الاحتيال على الإنترنت.</li>\n</ul>\n<h2>إثبات الواقعة</h2>\n<p>احتفظ بلقطات الشاشة مع التاريخ والرابط، ولا تحذف المحادثات، واطلب تحرير محضر بالواقعة سريعاً. تُحال الأدلة الرقمية إلى جهات الفحص الفني عند اللزوم.</p>\n<h2>الدفاع عند الاتهام</h2>\n<p>يركز الدفاع على نسبة الحساب أو الجهاز للمتهم فعلاً، وسلامة إجراءات الضبط والتحريز، وأصالة الأدلة الرقمية، وتوافر أركان الجريمة.</p>\n<h2>نصيحة</h2>\n<p>لا تتواصل مع الطرف الآخر بعد البلاغ إلا عبر محاميك، ولا تحذف أي بيانات قبل مشورة قانونية.</p>\n<p><em>هذا المقال معلومات قانونية عامة وليس استشارة لحالة بعينها. تختلف الإجراءات والمستندات حسب ظروف كل قضية، ويُنصح بعرض مستنداتك على محامٍ قبل اتخاذ أي خطوة.</em></p><h2>تواصل مع مكتبنا</h2><p>مكتب كريم الديب للمحاماة يعمل منذ 2006 ومقره الرئيسي في محطة الرمل بالإسكندرية. اتصل أو راسلنا على واتساب: <a href=\"tel:+201223767592\">01223767592</a>.</p>",
    content_en: "<h2>Legal framework</h2>\n<p>The Anti-Cybercrime Law No. 175 of 2018 covers offences involving the internet, accounts and devices, alongside provisions of the Penal Code.</p>\n<h2>Common complaints</h2>\n<ul>\n<li>Insult and defamation on social media.</li>\n<li>Unauthorised access to an account or device.</li>\n<li>Impersonation and fake accounts.</li>\n<li>Online blackmail and publishing private images or data.</li>\n<li>Online fraud.</li>\n</ul>\n<h2>Proving the incident</h2>\n<p>Keep dated screenshots with links, do not delete conversations, and file a report quickly. Digital evidence may be sent for technical examination.</p>\n<h2>Defending an accusation</h2>\n<p>The defence focuses on whether the account or device is really attributable to the accused, the correctness of seizure and sealing procedures, the authenticity of digital evidence, and whether the elements of the offence exist.</p>\n<h2>Tip</h2>\n<p>After a complaint, contact the other side only through your lawyer, and do not delete any data before getting legal advice.</p>\n<p><em>This article is general legal information, not advice on a specific case. Procedures and required documents vary with each situation, so have a lawyer review your papers before you act.</em></p><h2>Contact Our Office</h2><p>Karim El-Deeb Law Firm has practised since 2006, with its main office in Raml Station, Alexandria. Call or WhatsApp: <a href=\"tel:+201223767592\">+20 122 376 7592</a>.</p>"
  },

  "property-sale-registration-lawyer-egypt-guide": {
    id: "property-sale-registration-lawyer-egypt-guide",
    slug: "property-sale-registration-lawyer-egypt-guide",
    title: "شراء عقار في مصر وتسجيله: صحة ونفاذ العقد والشهر العقاري",
    title_en: "Buying and Registering Property in Egypt: Validity Claims and the Real Estate Registry",
    seoTitle: "تسجيل العقار في مصر ودعوى صحة ونفاذ",
    seoTitle_en: "Property Registration in Egypt Explained",
    excerpt: "لماذا لا يكفي العقد العرفي، وما هي دعوى صحة ونفاذ عقد البيع، وكيف تفحص المستندات قبل الشراء.",
    excerpt_en: "Why an unregistered contract is not enough, what a claim to validate and enforce a sale contract is, and how to check documents before buying.",
    image: "/images/services/civil-law.webp",
    date: '2026-11-16',
    category: "العقارات",
    readTime: "7 دقائق",
    tags: ["محامي عقارات في الإسكندرية","تسجيل عقار","صحة ونفاذ","الشهر العقاري"],
    isPublished: true,
    order: 34,
    content: "<h2>لماذا التسجيل مهم؟</h2>\n<p>لا تنتقل ملكية العقار في مواجهة الغير إلا بالتسجيل وفق قانون تنظيم الشهر العقاري رقم 114 لسنة 1946. العقد العرفي وحده يُنشئ التزامات بين طرفيه لكنه لا يحميك من بيع العقار لشخص آخر أو من حجز دائني البائع.</p>\n<h2>فحص المستندات قبل الشراء</h2>\n<ul>\n<li>سلسلة الملكية من المالك الأصلي إلى البائع.</li>\n<li>خلو العقار من الرهن أو الحجز أو الدعاوى.</li>\n<li>رخصة البناء ومطابقة الوحدة للرسومات.</li>\n<li>سداد الضرائب والمرافق.</li>\n<li>صفة البائع وتوكيله إن كان وكيلاً.</li>\n</ul>\n<h2>دعوى صحة ونفاذ عقد البيع</h2>\n<p>إذا امتنع البائع عن التسجيل يمكن للمشتري رفع دعوى صحة ونفاذ العقد، وبصدور الحكم النهائي يُسجَّل الحكم بالشهر العقاري.</p>\n<h2>للأجانب والمصريين بالخارج</h2>\n<p>قد يتطلب الشراء توكيلاً موثقاً وترجمة معتمدة للمستندات، ومراجعة ضوابط تملك الأجانب في المنطقة المعنية قبل التعاقد.</p>\n<h2>نصيحة</h2>\n<p>اعرض العقد على محامٍ قبل دفع أي مبلغ، وسجّل كل دفعة بإيصال مكتوب.</p>\n<p><em>هذا المقال معلومات قانونية عامة وليس استشارة لحالة بعينها. تختلف الإجراءات والمستندات حسب ظروف كل قضية، ويُنصح بعرض مستنداتك على محامٍ قبل اتخاذ أي خطوة.</em></p><h2>تواصل مع مكتبنا</h2><p>مكتب كريم الديب للمحاماة يعمل منذ 2006 ومقره الرئيسي في محطة الرمل بالإسكندرية. اتصل أو راسلنا على واتساب: <a href=\"tel:+201223767592\">01223767592</a>.</p>",
    content_en: "<h2>Why registration matters</h2>\n<p>Ownership transfers against third parties only through registration under Real Estate Registration Law No. 114 of 1946. An unregistered contract binds the parties but does not protect you if the seller sells to someone else or the seller's creditors seize the property.</p>\n<h2>Checking documents before buying</h2>\n<ul>\n<li>The chain of title from the original owner to the seller.</li>\n<li>No mortgage, attachment or pending cases on the property.</li>\n<li>Building permit and conformity of the unit with the plans.</li>\n<li>Taxes and utilities paid.</li>\n<li>The seller's capacity and power of attorney if acting as an agent.</li>\n</ul>\n<h2>Claim to validate and enforce the sale</h2>\n<p>If the seller refuses to register, the buyer can file a claim to validate and enforce the contract. Once final, the judgment is registered at the Real Estate Registry.</p>\n<h2>For foreigners and Egyptians abroad</h2>\n<p>Buying may need a notarised power of attorney, certified translations, and a check of the rules on foreign ownership in the area before contracting.</p>\n<h2>Tip</h2>\n<p>Have a lawyer review the contract before paying anything, and get a written receipt for every instalment.</p>\n<p><em>This article is general legal information, not advice on a specific case. Procedures and required documents vary with each situation, so have a lawyer review your papers before you act.</em></p><h2>Contact Our Office</h2><p>Karim El-Deeb Law Firm has practised since 2006, with its main office in Raml Station, Alexandria. Call or WhatsApp: <a href=\"tel:+201223767592\">+20 122 376 7592</a>.</p>"
  },

  "civil-lawsuit-steps-egypt-guide": {
    id: "civil-lawsuit-steps-egypt-guide",
    slug: "civil-lawsuit-steps-egypt-guide",
    title: "مراحل الدعوى المدنية في مصر: من صحيفة الدعوى إلى تنفيذ الحكم",
    title_en: "Stages of a Civil Lawsuit in Egypt: From the Statement of Claim to Enforcement",
    seoTitle: "مراحل الدعوى المدنية في مصر",
    seoTitle_en: "Civil Lawsuit Stages in Egypt",
    excerpt: "رحلة القضية المدنية خطوة بخطوة: رفع الدعوى، الإعلان، الجلسات، الخبرة، الحكم، الاستئناف، والتنفيذ.",
    excerpt_en: "The life of a civil case step by step: filing, service, hearings, expert report, judgment, appeal and enforcement.",
    image: "/images/services/civil-law.webp",
    date: '2026-11-16',
    category: "القانون المدني",
    readTime: "6 دقائق",
    tags: ["محامي مدني في الإسكندرية","دعوى مدنية","تنفيذ الأحكام"],
    isPublished: true,
    order: 35,
    content: "<h2>مصادر القانون</h2>\n<p>يحكم المنازعات المدنية القانون المدني رقم 131 لسنة 1948، وتنظم الإجراءات أمام المحاكم نصوص قانون المرافعات المدنية والتجارية رقم 13 لسنة 1968.</p>\n<h2>المراحل</h2>\n<ol>\n<li><strong>الإنذار أو المطالبة الودية:</strong> يثبت المطالبة ويقطع الاحتجاج بعدم العلم.</li>\n<li><strong>صحيفة الدعوى:</strong> تُودَع قلم الكتاب ويُحدَّد أول جلسة.</li>\n<li><strong>إعلان المدعى عليه:</strong> سلامة الإعلان شرط لصحة السير في الدعوى.</li>\n<li><strong>الجلسات والمذكرات:</strong> تبادل المستندات والدفوع.</li>\n<li><strong>الخبرة:</strong> قد تندب المحكمة خبيراً لفحص الأمور الفنية أو الحسابية.</li>\n<li><strong>الحكم:</strong> يصدر بعد حجز الدعوى للحكم.</li>\n<li><strong>الاستئناف والنقض:</strong> وفق ما يسمح به القانون وفي مواعيد محددة.</li>\n<li><strong>التنفيذ:</strong> بالحجز أو التسليم أو الإخلاء حسب طبيعة الحكم.</li>\n</ol>\n<h2>ما يقوي موقفك</h2>\n<p>مستندات مكتوبة، وإيصالات، ومراسلات، وشهود عند الحاجة. الإثبات هو أساس الدعوى المدنية.</p>\n<h2>التقادم</h2>\n<p>للحقوق مواعيد سقوط بمرور الزمن تختلف حسب نوع الحق، فلا تؤخر المطالبة وراجع المحامي مبكراً.</p>\n<p><em>هذا المقال معلومات قانونية عامة وليس استشارة لحالة بعينها. تختلف الإجراءات والمستندات حسب ظروف كل قضية، ويُنصح بعرض مستنداتك على محامٍ قبل اتخاذ أي خطوة.</em></p><h2>تواصل مع مكتبنا</h2><p>مكتب كريم الديب للمحاماة يعمل منذ 2006 ومقره الرئيسي في محطة الرمل بالإسكندرية. اتصل أو راسلنا على واتساب: <a href=\"tel:+201223767592\">01223767592</a>.</p>",
    content_en: "<h2>Sources of law</h2>\n<p>Civil disputes are governed by the Civil Code No. 131 of 1948, and court procedure by the Civil and Commercial Procedure Law No. 13 of 1968.</p>\n<h2>The stages</h2>\n<ol>\n<li><strong>Formal notice or amicable demand:</strong> documents the claim.</li>\n<li><strong>Statement of claim:</strong> filed with the court clerk, which sets the first hearing.</li>\n<li><strong>Service on the defendant:</strong> valid service is required for the case to proceed.</li>\n<li><strong>Hearings and memoranda:</strong> exchange of documents and defences.</li>\n<li><strong>Expert report:</strong> the court may appoint an expert on technical or accounting matters.</li>\n<li><strong>Judgment:</strong> issued after the case is reserved for judgment.</li>\n<li><strong>Appeal and cassation:</strong> as the law allows and within set time limits.</li>\n<li><strong>Enforcement:</strong> attachment, delivery or eviction depending on the judgment.</li>\n</ol>\n<h2>What strengthens your position</h2>\n<p>Written documents, receipts, correspondence and witnesses where needed. Evidence is the foundation of a civil case.</p>\n<h2>Limitation periods</h2>\n<p>Rights lapse after set periods that vary by type of claim, so do not delay and consult a lawyer early.</p>\n<p><em>This article is general legal information, not advice on a specific case. Procedures and required documents vary with each situation, so have a lawyer review your papers before you act.</em></p><h2>Contact Our Office</h2><p>Karim El-Deeb Law Firm has practised since 2006, with its main office in Raml Station, Alexandria. Call or WhatsApp: <a href=\"tel:+201223767592\">+20 122 376 7592</a>.</p>"
  },

  "commercial-contract-dispute-economic-court-egypt-guide": {
    id: "commercial-contract-dispute-economic-court-egypt-guide",
    slug: "commercial-contract-dispute-economic-court-egypt-guide",
    title: "نزاعات العقود التجارية في مصر: المحكمة الاقتصادية والتحكيم والتسوية",
    title_en: "Commercial Contract Disputes in Egypt: Economic Court, Arbitration and Settlement",
    seoTitle: "نزاعات العقود التجارية والمحكمة الاقتصادية",
    seoTitle_en: "Commercial Contract Disputes in Egypt",
    excerpt: "كيف تختار بين المحكمة الاقتصادية والتحكيم، وما الذي يجب أن يتضمنه العقد التجاري لتجنب النزاع.",
    excerpt_en: "How to choose between the Economic Court and arbitration, and what a commercial contract should contain to avoid disputes.",
    image: "/images/services/commercial-law.webp",
    date: '2026-11-16',
    category: "القانون التجاري",
    readTime: "6 دقائق",
    tags: ["محامي تجاري في الإسكندرية","المحكمة الاقتصادية","عقود تجارية"],
    isPublished: true,
    order: 36,
    content: "<h2>أين تُنظر النزاعات التجارية؟</h2>\n<p>تختص المحاكم الاقتصادية، ومنها المحكمة الاقتصادية بالإسكندرية، بنظر طائفة من المنازعات التجارية والاستثمارية وفق القانون رقم 120 لسنة 2008. ويحكم التعامل التجاري قانون التجارة رقم 17 لسنة 1999.</p>\n<h2>أسباب النزاعات الشائعة</h2>\n<ul>\n<li>التأخر في التوريد أو السداد.</li>\n<li>عيوب البضاعة أو عدم مطابقتها للمواصفات.</li>\n<li>الشيكات المرتدة والكمبيالات.</li>\n<li>خلافات الشركاء.</li>\n<li>الإنهاء غير المشروع للعقد.</li>\n</ul>\n<h2>بنود لا غنى عنها في العقد</h2>\n<p>تحديد الأطراف والالتزامات بدقة، وتواريخ التنفيذ، والشرط الجزائي، والقانون الواجب التطبيق، وآلية حل النزاعات (قضاء أو تحكيم).</p>\n<h2>القضاء أم التحكيم؟</h2>\n<p>يتميز التحكيم بالسرية والمرونة واختيار المحكمين، بينما يوفر القضاء درجات تقاضٍ. يُتفق على الطريقة مسبقاً في العقد.</p>\n<h2>قبل التصعيد</h2>\n<p>أرسل إنذاراً رسمياً يُثبت التقصير، وجرّب التسوية، فكثير من النزاعات التجارية تنتهي بالتفاوض أقل كلفة ووقتاً.</p>\n<p><em>هذا المقال معلومات قانونية عامة وليس استشارة لحالة بعينها. تختلف الإجراءات والمستندات حسب ظروف كل قضية، ويُنصح بعرض مستنداتك على محامٍ قبل اتخاذ أي خطوة.</em></p><h2>تواصل مع مكتبنا</h2><p>مكتب كريم الديب للمحاماة يعمل منذ 2006 ومقره الرئيسي في محطة الرمل بالإسكندرية. اتصل أو راسلنا على واتساب: <a href=\"tel:+201223767592\">01223767592</a>.</p>",
    content_en: "<h2>Where are commercial disputes heard?</h2>\n<p>The economic courts, including the Alexandria Economic Court, hear a range of commercial and investment disputes under Law No. 120 of 2008. Commercial dealings are governed by the Commercial Law No. 17 of 1999.</p>\n<h2>Common causes of disputes</h2>\n<ul>\n<li>Late delivery or late payment.</li>\n<li>Defective goods or non-conformity with specifications.</li>\n<li>Bounced cheques and promissory notes.</li>\n<li>Partner disagreements.</li>\n<li>Wrongful termination of a contract.</li>\n</ul>\n<h2>Clauses a contract needs</h2>\n<p>Precisely defined parties and obligations, performance dates, a penalty clause, governing law, and a dispute mechanism (court or arbitration).</p>\n<h2>Court or arbitration?</h2>\n<p>Arbitration offers confidentiality, flexibility and a choice of arbitrators, while courts offer levels of appeal. Agree on the method in the contract in advance.</p>\n<h2>Before escalating</h2>\n<p>Send a formal notice documenting the default and try settlement. Many commercial disputes end by negotiation at lower cost and in less time.</p>\n<p><em>This article is general legal information, not advice on a specific case. Procedures and required documents vary with each situation, so have a lawyer review your papers before you act.</em></p><h2>Contact Our Office</h2><p>Karim El-Deeb Law Firm has practised since 2006, with its main office in Raml Station, Alexandria. Call or WhatsApp: <a href=\"tel:+201223767592\">+20 122 376 7592</a>.</p>"
  },

  "maritime-arbitration-alexandria-port-disputes-guide": {
    id: "maritime-arbitration-alexandria-port-disputes-guide",
    slug: "maritime-arbitration-alexandria-port-disputes-guide",
    title: "التحكيم البحري ونزاعات الشحن في الإسكندرية: سندات الشحن والتأخير وتلف البضائع",
    title_en: "Maritime Arbitration and Shipping Disputes in Alexandria: Bills of Lading, Demurrage and Cargo Damage",
    seoTitle: "التحكيم البحري في الإسكندرية",
    seoTitle_en: "Maritime Arbitration in Alexandria",
    excerpt: "أشهر نزاعات الشحن بموانئ الإسكندرية وكيف تُحَل بالتحكيم أو القضاء، وما يجب توثيقه فور وقوع الضرر.",
    excerpt_en: "Common shipping disputes at Alexandria ports and how they are resolved by arbitration or court, and what to document as soon as damage occurs.",
    image: "/images/services/maritime.webp",
    date: '2026-11-16',
    category: "التحكيم البحري",
    readTime: "6 دقائق",
    tags: ["تحكيم بحري","محامي بحري الإسكندرية","سند الشحن","غرامات التأخير"],
    isPublished: true,
    order: 37,
    content: "<h2>لماذا الإسكندرية؟</h2>\n<p>تضم الإسكندرية ميناءي الإسكندرية والدخيلة، وهي مركز رئيسي لحركة الشحن والتخليص، ما يجعل النزاعات البحرية فيها متكررة.</p>\n<h2>أبرز النزاعات</h2>\n<ul>\n<li><strong>سندات الشحن:</strong> الخلاف حول بيانات السند أو تسليم البضاعة.</li>\n<li><strong>تلف البضائع أو نقصها</strong> أثناء النقل أو التفريغ.</li>\n<li><strong>عقود إيجار السفن (Charterparty)</strong> وشروطها.</li>\n<li><strong>غرامات التأخير (Demurrage)</strong> عن تأخر التحميل أو التفريغ.</li>\n<li><strong>التصادمات والإنقاذ البحري.</strong></li>\n</ul>\n<h2>الإطار القانوني</h2>\n<p>يحكم التجارة البحرية القانون رقم 8 لسنة 1990، وتخضع المنازعات التحكيمية لقانون التحكيم رقم 27 لسنة 1994 ولشروط عقد الإيجار أو سند الشحن.</p>\n<h2>ما يجب توثيقه فوراً</h2>\n<p>معاينة البضاعة بحضور الأطراف، وتقرير المعاينة، والصور، ومراسلات الإخطار بالضرر، وإخطار شركة التأمين في الوقت المحدد.</p>\n<h2>التحكيم أم القضاء؟</h2>\n<p>غالباً ما تنص عقود الإيجار وسندات الشحن على شرط تحكيم، وتحدد مكانه ولغته، فراجع الشرط قبل اتخاذ أي إجراء.</p>\n<p><em>هذا المقال معلومات قانونية عامة وليس استشارة لحالة بعينها. تختلف الإجراءات والمستندات حسب ظروف كل قضية، ويُنصح بعرض مستنداتك على محامٍ قبل اتخاذ أي خطوة.</em></p><h2>تواصل مع مكتبنا</h2><p>مكتب كريم الديب للمحاماة يعمل منذ 2006 ومقره الرئيسي في محطة الرمل بالإسكندرية. اتصل أو راسلنا على واتساب: <a href=\"tel:+201223767592\">01223767592</a>.</p>",
    content_en: "<h2>Why Alexandria?</h2>\n<p>Alexandria hosts the Alexandria and Dekheila ports and is a main hub for shipping and customs clearance, so maritime disputes there are frequent.</p>\n<h2>Main types of dispute</h2>\n<ul>\n<li><strong>Bills of lading:</strong> disagreement over the bill's data or delivery of the cargo.</li>\n<li><strong>Cargo damage or shortage</strong> during carriage or discharge.</li>\n<li><strong>Charterparties</strong> and their terms.</li>\n<li><strong>Demurrage claims</strong> for delays in loading or discharge.</li>\n<li><strong>Collisions and salvage.</strong></li>\n</ul>\n<h2>Legal framework</h2>\n<p>Maritime trade is governed by Law No. 8 of 1990, and arbitration by Arbitration Law No. 27 of 1994 together with the charterparty or bill of lading terms.</p>\n<h2>What to document immediately</h2>\n<p>A joint survey of the cargo, the survey report, photographs, notices of damage, and timely notice to the insurer.</p>\n<h2>Arbitration or court?</h2>\n<p>Charterparties and bills of lading often contain an arbitration clause fixing the seat and language, so check the clause before taking any step.</p>\n<p><em>This article is general legal information, not advice on a specific case. Procedures and required documents vary with each situation, so have a lawyer review your papers before you act.</em></p><h2>Contact Our Office</h2><p>Karim El-Deeb Law Firm has practised since 2006, with its main office in Raml Station, Alexandria. Call or WhatsApp: <a href=\"tel:+201223767592\">+20 122 376 7592</a>.</p>"
  },

  "mediation-settlement-agreement-egypt-guide": {
    id: "mediation-settlement-agreement-egypt-guide",
    slug: "mediation-settlement-agreement-egypt-guide",
    title: "الوساطة وتسوية النزاعات ودياً في مصر: متى تفيد وكيف تُوثَّق التسوية",
    title_en: "Mediation and Amicable Settlement in Egypt: When It Works and How to Document the Deal",
    seoTitle: "الوساطة وحل النزاعات ودياً في مصر",
    seoTitle_en: "Mediation & Amicable Settlement in Egypt",
    excerpt: "مزايا الوساطة مقارنة بالقضاء، والنزاعات التي تناسبها، وكيف تصاغ اتفاقية تسوية ملزمة وقابلة للتنفيذ.",
    excerpt_en: "Advantages of mediation over litigation, the disputes it suits, and how to draft a binding, enforceable settlement agreement.",
    image: "/images/services/arbitration-mediation.webp",
    date: '2026-11-16',
    category: "الوساطة",
    readTime: "5 دقائق",
    tags: ["وساطة","تسوية ودية","محامي وساطة الإسكندرية","عقد صلح"],
    isPublished: true,
    order: 38,
    content: "<h2>ما هي الوساطة؟</h2>\n<p>هي تفاوض منظم بمساعدة طرف محايد (وسيط) يساعد الخصوم على الوصول إلى حل يرضيهم، دون أن يفرض عليهم حكماً.</p>\n<h2>مزاياها</h2>\n<ul>\n<li>السرية على خلاف جلسات المحاكم.</li>\n<li>سرعة وكلفة أقل غالباً.</li>\n<li>الحفاظ على العلاقة التجارية أو الأسرية.</li>\n<li>تحكم الأطراف في النتيجة.</li>\n</ul>\n<h2>النزاعات المناسبة</h2>\n<p>الخلافات التجارية بين شركاء أو موردين، ونزاعات الجوار والعقارات، والمسائل الأسرية المالية، ومنازعات الميراث التي يرغب أطرافها في حل ودي.</p>\n<h2>اتفاقية التسوية</h2>\n<p>ينبغي أن تُحدد أطرافها بدقة، والتزامات كل طرف، ومواعيد التنفيذ، والجزاء عند الإخلال، والتنازل المتبادل عن الدعاوى. ويستحسن إثباتها أو التصديق عليها بالطريقة التي تجعلها قابلة للتنفيذ حسب نوع النزاع.</p>\n<h2>متى لا تصلح؟</h2>\n<p>عندما يرفض أحد الأطراف التفاوض، أو يلزم حكم قضائي قاطع لإنشاء سابقة أو حماية فورية.</p>\n<p><em>هذا المقال معلومات قانونية عامة وليس استشارة لحالة بعينها. تختلف الإجراءات والمستندات حسب ظروف كل قضية، ويُنصح بعرض مستنداتك على محامٍ قبل اتخاذ أي خطوة.</em></p><h2>تواصل مع مكتبنا</h2><p>مكتب كريم الديب للمحاماة يعمل منذ 2006 ومقره الرئيسي في محطة الرمل بالإسكندرية. اتصل أو راسلنا على واتساب: <a href=\"tel:+201223767592\">01223767592</a>.</p>",
    content_en: "<h2>What is mediation?</h2>\n<p>A structured negotiation assisted by a neutral mediator who helps the parties reach a solution they accept, without imposing a ruling.</p>\n<h2>Advantages</h2>\n<ul>\n<li>Confidentiality, unlike court hearings.</li>\n<li>Often faster and cheaper.</li>\n<li>Preserves business or family relationships.</li>\n<li>The parties control the outcome.</li>\n</ul>\n<h2>Disputes that suit it</h2>\n<p>Commercial disagreements between partners or suppliers, neighbour and property disputes, family financial matters, and inheritance disputes the parties want to settle amicably.</p>\n<h2>The settlement agreement</h2>\n<p>It should identify the parties precisely, each side's obligations, performance dates, the consequence of breach, and mutual withdrawal of claims. It should be recorded or ratified in the way that makes it enforceable for that type of dispute.</p>\n<h2>When it does not work</h2>\n<p>When one side refuses to negotiate, or a definitive court ruling or urgent protection is needed.</p>\n<p><em>This article is general legal information, not advice on a specific case. Procedures and required documents vary with each situation, so have a lawyer review your papers before you act.</em></p><h2>Contact Our Office</h2><p>Karim El-Deeb Law Firm has practised since 2006, with its main office in Raml Station, Alexandria. Call or WhatsApp: <a href=\"tel:+201223767592\">+20 122 376 7592</a>.</p>"
  },

  "foreigner-marriage-egyptian-registration-guide": {
    id: "foreigner-marriage-egyptian-registration-guide",
    slug: "foreigner-marriage-egyptian-registration-guide",
    title: "زواج الأجانب في مصر: التوثيق والمستندات والإقامة بعد الزواج",
    title_en: "Marriage of Foreigners in Egypt: Registration, Documents and Residency After Marriage",
    seoTitle: "زواج الأجانب وتوثيقه في مصر",
    seoTitle_en: "Foreigner Marriage Registration in Egypt",
    excerpt: "الخطوات العامة لتوثيق زواج أجنبي في مصر، والمستندات التي تُطلب عادةً، وأثر الزواج على الإقامة.",
    excerpt_en: "The general steps for registering a foreigner's marriage in Egypt, documents usually requested, and the effect on residency.",
    image: "/images/services/foreigners-in-egypt.webp",
    date: '2026-11-16',
    category: "خدمات الأجانب",
    readTime: "6 دقائق",
    tags: ["زواج الأجانب","توثيق الزواج","محامي أجانب الإسكندرية","إقامة"],
    isPublished: true,
    order: 39,
    content: "<h2>مقدمة</h2>\n<p>يختلف إجراء الزواج بحسب جنسية الطرفين وديانتهما، وتُوثَّق العقود عادةً أمام الجهات المختصة كالشهر العقاري أو المأذون. تحتاج الحالات المختلطة إلى مراجعة دقيقة للمستندات.</p>\n<h2>مستندات تُطلب عادةً</h2>\n<ul>\n<li>جواز السفر وصورة من الإقامة سارية.</li>\n<li>شهادة تفيد خلو الأجنبي من الموانع أو حالته الاجتماعية، غالباً من سفارة بلده.</li>\n<li>الرقم القومي والمستندات الخاصة بالطرف المصري.</li>\n<li>ترجمة معتمدة للمستندات الأجنبية.</li>\n<li>شهود وفق ما يحدده نوع التوثيق.</li>\n</ul>\n<h2>خطوات عامة</h2>\n<ol>\n<li>تجميع المستندات وتصديقها وترجمتها.</li>\n<li>مراجعة اشتراطات جهة التوثيق.</li>\n<li>إتمام التوثيق وحصول الطرفين على الوثيقة.</li>\n<li>الاعتراف بالزواج في بلد الأجنبي حسب قوانينه.</li>\n</ol>\n<h2>أثر الزواج على الإقامة</h2>\n<p>قد يتيح الزواج من مصري أو مصرية نوعاً من الإقامة وفق قانون دخول وإقامة الأجانب رقم 89 لسنة 1960 وإجراءات مصلحة الهجرة والجوازات.</p>\n<h2>ملاحظة</h2>\n<p>المتطلبات تتغير من حالة لأخرى، فتحقق من الشروط الحالية قبل الحجز.</p>\n<p><em>هذا المقال معلومات قانونية عامة وليس استشارة لحالة بعينها. تختلف الإجراءات والمستندات حسب ظروف كل قضية، ويُنصح بعرض مستنداتك على محامٍ قبل اتخاذ أي خطوة.</em></p><h2>تواصل مع مكتبنا</h2><p>مكتب كريم الديب للمحاماة يعمل منذ 2006 ومقره الرئيسي في محطة الرمل بالإسكندرية. اتصل أو راسلنا على واتساب: <a href=\"tel:+201223767592\">01223767592</a>.</p>",
    content_en: "<h2>Introduction</h2>\n<p>Marriage procedure depends on the nationality and religion of the spouses, and contracts are normally registered before the competent authority, such as the Notary (Shahr El Akary) or a registrar. Mixed marriages need careful document review.</p>\n<h2>Documents usually requested</h2>\n<ul>\n<li>Passport and a valid residence permit copy.</li>\n<li>A certificate of no impediment or marital status for the foreigner, often from their embassy.</li>\n<li>National ID and documents for the Egyptian spouse.</li>\n<li>Certified translations of foreign documents.</li>\n<li>Witnesses as required by the type of registration.</li>\n</ul>\n<h2>General steps</h2>\n<ol>\n<li>Gather, authenticate and translate the documents.</li>\n<li>Check the registering authority's requirements.</li>\n<li>Complete registration and obtain the marriage document.</li>\n<li>Have the marriage recognised in the foreigner's home country under its rules.</li>\n</ol>\n<h2>Effect on residency</h2>\n<p>Marriage to an Egyptian may allow a type of residence under the Entry and Residence of Foreigners Law No. 89 of 1960 and the Immigration and Passports Authority procedures.</p>\n<h2>Note</h2>\n<p>Requirements change from case to case, so verify current conditions before booking.</p>\n<p><em>This article is general legal information, not advice on a specific case. Procedures and required documents vary with each situation, so have a lawyer review your papers before you act.</em></p><h2>Contact Our Office</h2><p>Karim El-Deeb Law Firm has practised since 2006, with its main office in Raml Station, Alexandria. Call or WhatsApp: <a href=\"tel:+201223767592\">+20 122 376 7592</a>.</p>"
  },

  "power-of-attorney-from-abroad-egypt-guide": {
    id: "power-of-attorney-from-abroad-egypt-guide",
    slug: "power-of-attorney-from-abroad-egypt-guide",
    title: "التوكيل من الخارج لمتابعة قضاياك في مصر: خطوات وتنبيهات",
    title_en: "Power of Attorney from Abroad to Handle Your Cases in Egypt: Steps and Warnings",
    seoTitle: "توكيل من الخارج لمتابعة قضايا في مصر",
    seoTitle_en: "Power of Attorney from Abroad for Egypt Cases",
    excerpt: "كيف تعمل توكيلاً من القنصلية أو من جهة معتمدة بالخارج، وما صيغ التوكيل الصحيحة، وكيف تتابع قضيتك دون سفر.",
    excerpt_en: "How to issue a power of attorney from an Egyptian consulate or authorised body abroad, correct wording, and following your case without travelling.",
    image: "/images/services/egyptians-abroad.webp",
    date: '2026-11-16',
    category: "المصريين بالخارج",
    readTime: "5 دقائق",
    tags: ["توكيل من الخارج","المصريين بالخارج","محامي توكيلات الإسكندرية"],
    isPublished: true,
    order: 40,
    content: "<h2>لماذا التوكيل؟</h2>\n<p>يتيح لمحاميك التصرف نيابة عنك أمام المحاكم والجهات الحكومية في مصر دون الحاجة لسفرك.</p>\n<h2>أين يُصدر؟</h2>\n<p>عادةً من القنصلية أو السفارة المصرية في بلد إقامتك، أو أمام جهة توثيق معتمدة في ذلك البلد تتبعها إجراءات تصديق وترجمة حسب كل دولة.</p>\n<h2>الصيغ المهمة</h2>\n<ul>\n<li><strong>توكيل عام:</strong> نطاقه واسع لكنه لا يغني دائماً عن الصيغ الخاصة.</li>\n<li><strong>توكيل خاص:</strong> لتصرف معين مثل بيع عقار أو رفع دعوى محددة.</li>\n<li><strong>توكيل قضايا:</strong> يخوّل المحامي الحضور وتقديم الطعون وتسلم الأحكام.</li>\n</ul>\n<h2>تنبيهات</h2>\n<ul>\n<li>اكتب الصلاحيات بدقة، فالتصرف خارج نطاق التوكيل قد يبطل.</li>\n<li>راجع صياغة التوكيل مع محاميك قبل التوقيع.</li>\n<li>حدد مدة التوكيل وأخطر الجهات عند الإلغاء.</li>\n<li>لا توكّل شخصاً لا تثق به لتصرفات مالية كبيرة.</li>\n</ul>\n<h2>متابعة القضية عن بُعد</h2>\n<p>نرسل لك تحديثات بعد كل جلسة عبر واتساب والبريد مع صور من المستندات والأحكام.</p>\n<p><em>هذا المقال معلومات قانونية عامة وليس استشارة لحالة بعينها. تختلف الإجراءات والمستندات حسب ظروف كل قضية، ويُنصح بعرض مستنداتك على محامٍ قبل اتخاذ أي خطوة.</em></p><h2>تواصل مع مكتبنا</h2><p>مكتب كريم الديب للمحاماة يعمل منذ 2006 ومقره الرئيسي في محطة الرمل بالإسكندرية. اتصل أو راسلنا على واتساب: <a href=\"tel:+201223767592\">01223767592</a>.</p>",
    content_en: "<h2>Why a power of attorney?</h2>\n<p>It lets your lawyer act for you before Egyptian courts and government bodies without you travelling.</p>\n<h2>Where is it issued?</h2>\n<p>Usually at the Egyptian consulate or embassy in your country of residence, or before an authorised notarial body there, followed by authentication and translation steps that vary by country.</p>\n<h2>Important types</h2>\n<ul>\n<li><strong>General power:</strong> broad scope but does not always replace specific wording.</li>\n<li><strong>Special power:</strong> for a specific act such as selling property or filing a defined claim.</li>\n<li><strong>Litigation power:</strong> authorises the lawyer to appear, appeal and receive judgments.</li>\n</ul>\n<h2>Warnings</h2>\n<ul>\n<li>Write the powers precisely, since acts beyond the scope can be invalid.</li>\n<li>Review the wording with your lawyer before signing.</li>\n<li>Set a duration and notify the relevant bodies if you revoke it.</li>\n<li>Do not appoint anyone you do not trust for major financial acts.</li>\n</ul>\n<h2>Following your case remotely</h2>\n<p>We send updates after every hearing by WhatsApp and email, with copies of documents and judgments.</p>\n<p><em>This article is general legal information, not advice on a specific case. Procedures and required documents vary with each situation, so have a lawyer review your papers before you act.</em></p><h2>Contact Our Office</h2><p>Karim El-Deeb Law Firm has practised since 2006, with its main office in Raml Station, Alexandria. Call or WhatsApp: <a href=\"tel:+201223767592\">+20 122 376 7592</a>.</p>"
  },

  "how-to-choose-a-lawyer-in-alexandria-guide": {
    id: "how-to-choose-a-lawyer-in-alexandria-guide",
    slug: "how-to-choose-a-lawyer-in-alexandria-guide",
    title: "كيف تختار محامياً في الإسكندرية؟ 8 أسئلة تسألها قبل التعاقد",
    title_en: "How to Choose a Lawyer in Alexandria: 8 Questions to Ask Before You Hire",
    seoTitle: "كيف تختار محامي في الإسكندرية",
    seoTitle_en: "How to Choose a Lawyer in Alexandria",
    excerpt: "معايير عملية لاختيار محامٍ مناسب في الإسكندرية: التخصص، الخبرة أمام المحاكم، الشفافية في الأتعاب، وطريقة المتابعة.",
    excerpt_en: "Practical criteria for choosing a lawyer in Alexandria: specialisation, court experience, fee transparency and how the lawyer keeps you informed.",
    image: "/images/services/civil-law.webp",
    date: '2026-11-16',
    category: "دليل قانوني",
    readTime: "5 دقائق",
    tags: ["محامي في الإسكندرية","اختيار محامي","استشارة قانونية"],
    isPublished: true,
    order: 41,
    content: "<h2>ابدأ بنوع قضيتك</h2>\n<p>محامي الأسرة يختلف عن محامي الشركات أو الجنايات. اختر متخصصاً في نوع نزاعك، ولا تتعامل مع من يَعِد بنتيجة مضمونة.</p>\n<h2>8 أسئلة قبل التعاقد</h2>\n<ol>\n<li>هل لديك خبرة في هذا النوع من القضايا أمام محاكم الإسكندرية؟</li>\n<li>من الذي سيتابع قضيتي فعلياً؟</li>\n<li>كيف تُحدَّد الأتعاب وهل تُكتب في اتفاق مكتوب؟</li>\n<li>ما المصروفات الإضافية المتوقعة (رسوم، خبراء، ترجمة)؟</li>\n<li>كيف وكم مرة سأتلقى تحديثات عن القضية؟</li>\n<li>ما الخطوات والمدة التقريبية المتوقعة دون وعود مؤكدة؟</li>\n<li>ما الذي تحتاجه مني من مستندات؟</li>\n<li>هل تتحدث بلغتي إن كنت أجنبياً أو مقيماً بالخارج؟</li>\n</ol>\n<h2>علامات تحذير</h2>\n<ul>\n<li>وعد بنتيجة مضمونة أو نفوذ شخصي.</li>\n<li>رفض كتابة اتفاق الأتعاب.</li>\n<li>عدم الرد على الاستفسارات.</li>\n<li>طلب مبالغ نقدية دون إيصال.</li>\n</ul>\n<h2>التحقق من المكتب</h2>\n<p>تأكد من عنوان المكتب وطريقة التواصل، واطلع على تقييمات العملاء على خرائط جوجل، واحتفظ بنسخ من كل ما توقّعه.</p>\n<p><em>هذا المقال معلومات قانونية عامة وليس استشارة لحالة بعينها. تختلف الإجراءات والمستندات حسب ظروف كل قضية، ويُنصح بعرض مستنداتك على محامٍ قبل اتخاذ أي خطوة.</em></p><h2>تواصل مع مكتبنا</h2><p>مكتب كريم الديب للمحاماة يعمل منذ 2006 ومقره الرئيسي في محطة الرمل بالإسكندرية. اتصل أو راسلنا على واتساب: <a href=\"tel:+201223767592\">01223767592</a>.</p>",
    content_en: "<h2>Start with the type of case</h2>\n<p>A family lawyer differs from a corporate or criminal lawyer. Choose a specialist in your type of dispute, and avoid anyone who promises a guaranteed result.</p>\n<h2>8 questions before hiring</h2>\n<ol>\n<li>Do you have experience with this type of case before the Alexandria courts?</li>\n<li>Who will actually handle my case day to day?</li>\n<li>How are fees set, and are they in a written agreement?</li>\n<li>What additional costs should I expect (court fees, experts, translation)?</li>\n<li>How and how often will I receive updates?</li>\n<li>What are the steps and the approximate timeline, without firm promises?</li>\n<li>Which documents do you need from me?</li>\n<li>Do you work in my language if I am a foreigner or live abroad?</li>\n</ol>\n<h2>Warning signs</h2>\n<ul>\n<li>A guaranteed result or claimed personal influence.</li>\n<li>Refusal to put fees in writing.</li>\n<li>Not answering your questions.</li>\n<li>Cash demands without a receipt.</li>\n</ul>\n<h2>Verify the office</h2>\n<p>Confirm the office address and contact method, read client reviews on Google Maps, and keep copies of everything you sign.</p>\n<p><em>This article is general legal information, not advice on a specific case. Procedures and required documents vary with each situation, so have a lawyer review your papers before you act.</em></p><h2>Contact Our Office</h2><p>Karim El-Deeb Law Firm has practised since 2006, with its main office in Raml Station, Alexandria. Call or WhatsApp: <a href=\"tel:+201223767592\">+20 122 376 7592</a>.</p>"
  },

  "company-setup-alexandria-steps-guide": {
    id: "company-setup-alexandria-steps-guide",
    slug: "company-setup-alexandria-steps-guide",
    title: "تأسيس شركة في الإسكندرية: الخطوات والجهات والمستندات",
    title_en: "Setting Up a Company in Alexandria: Steps, Authorities and Documents",
    seoTitle: "تأسيس شركة في الإسكندرية: الخطوات",
    seoTitle_en: "Company Formation in Alexandria: Steps",
    excerpt: "خطوات تأسيس شركة في الإسكندرية للمصريين والأجانب، من اختيار الشكل القانوني حتى السجل التجاري والبطاقة الضريبية.",
    excerpt_en: "The steps to set up a company in Alexandria for Egyptians and foreigners, from choosing the legal form to the commercial registry and tax card.",
    image: "/images/services/company-law.webp",
    date: '2026-11-17',
    category: "قانون الشركات",
    readTime: "6 دقائق",
    tags: ["تأسيس شركة في الإسكندرية","محامي شركات في الإسكندرية","سجل تجاري"],
    isPublished: true,
    order: 60,
    content: "<h2>قبل أن تبدأ</h2>\n<p>حدد نشاط الشركة وعدد الشركاء ورأس المال المتوقع، فهذه العناصر تحدد الشكل القانوني (شركة مسؤولية محدودة، شخص واحد، مساهمة) وتراخيص النشاط. ينظم التأسيس قانون الشركات رقم 159 لسنة 1981 وقانون الاستثمار رقم 72 لسنة 2017.</p>\n<h2>الخطوات العامة</h2>\n<ol>\n<li><strong>حجز الاسم التجاري</strong> والتأكد من عدم تشابهه مع اسم قائم.</li>\n<li><strong>إعداد عقد التأسيس والنظام الأساسي</strong> بما يحدد الحصص والإدارة وحل الخلافات.</li>\n<li><strong>الموافقات اللازمة</strong> بحسب النشاط وجنسية الشركاء.</li>\n<li><strong>فتح حساب بنكي</strong> وإيداع رأس المال واستخراج شهادة بذلك.</li>\n<li><strong>التقديم في مركز خدمات المستثمرين</strong> التابع للهيئة العامة للاستثمار لتوثيق العقد وإصدار السجل التجاري.</li>\n<li><strong>البطاقة الضريبية</strong> والتسجيل في ضريبة القيمة المضافة عند انطباق شروطها.</li>\n<li><strong>التأمينات الاجتماعية</strong> وتراخيص النشاط الخاصة.</li>\n</ol>\n<h2>مستندات معتادة</h2>\n<p>صور البطاقات أو جوازات السفر للشركاء، وعقد إيجار أو سند ملكية للمقر، وتوكيل للمحامي إن لزم، ومستندات الشركة الأجنبية مترجمة ومصدقة إن كان أحد الشركاء شخصاً اعتبارياً.</p>\n<h2>أخطاء شائعة</h2>\n<p>استخدام عقد جاهز لا ينظم الخلافات، وبدء النشاط قبل استكمال التراخيص، وإهمال الالتزامات الضريبية والتأمينية بعد التأسيس.</p>\n<p><em>هذا المقال معلومات قانونية عامة وليس استشارة لحالة بعينها. تختلف الإجراءات والمستندات حسب ظروف كل قضية، ويُنصح بعرض مستنداتك على محامٍ قبل اتخاذ أي خطوة.</em></p><h2>تواصل مع مكتبنا</h2><p>مكتب كريم الديب للمحاماة يعمل منذ 2006 ومقره الرئيسي في محطة الرمل بالإسكندرية. اتصل أو راسلنا على واتساب: <a href=\"tel:+201223767592\">01223767592</a>. راجع أيضاً <a href=\"/alexandria\">محامي في الإسكندرية</a>.</p>",
    content_en: "<h2>Before you start</h2>\n<p>Define the activity, the number of partners and the expected capital, since these decide the legal form (LLC, one-person company, joint-stock) and the activity licences. Incorporation is governed by the Companies Law No. 159 of 1981 and the Investment Law No. 72 of 2017.</p>\n<h2>General steps</h2>\n<ol>\n<li><strong>Reserve the trade name</strong> and check it does not conflict with an existing one.</li>\n<li><strong>Prepare the articles and memorandum of association</strong> to set shares, management and dispute resolution.</li>\n<li><strong>Required approvals</strong> depending on the activity and the partners' nationality.</li>\n<li><strong>Open a bank account</strong>, deposit the capital and obtain a certificate.</li>\n<li><strong>Apply at the Investors Service Centre</strong> of the Investment Authority to notarise the contract and issue the commercial registry.</li>\n<li><strong>Tax card</strong> and VAT registration where the conditions apply.</li>\n<li><strong>Social insurance</strong> and activity-specific licences.</li>\n</ol>\n<h2>Usual documents</h2>\n<p>ID or passport copies for the partners, a lease or title deed for the premises, a power of attorney to the lawyer if needed, and the foreign company's documents translated and authenticated if a partner is a legal entity.</p>\n<h2>Common mistakes</h2>\n<p>Using a ready-made contract that does not regulate disputes, starting before licences are complete, and neglecting tax and insurance duties after incorporation.</p>\n<p><em>This article is general legal information, not advice on a specific case. Procedures and required documents vary with each situation, so have a lawyer review your papers before you act.</em></p><h2>Contact Our Office</h2><p>Karim El Deeb Law Firm has practised since 2006, with its main office in Raml Station, Alexandria. Call or WhatsApp: <a href=\"tel:+201223767592\">+20 122 376 7592</a>. See also <a href=\"/en/alexandria\">Lawyer in Alexandria</a>.</p>"
  },

  "bounced-cheque-egypt-lawyer-guide": {
    id: "bounced-cheque-egypt-lawyer-guide",
    slug: "bounced-cheque-egypt-lawyer-guide",
    title: "الشيك المرتد في مصر: ماذا تفعل خطوة بخطوة",
    title_en: "Bounced Cheques in Egypt: What to Do Step by Step",
    seoTitle: "الشيك المرتد في مصر: الإجراءات",
    seoTitle_en: "Bounced Cheque in Egypt: Procedure",
    excerpt: "ما الذي يجب فعله عند ارتداد شيك: حفظ الأدلة، إفادة البنك، الطريق الجنائي والمدني، وحدود التسوية.",
    excerpt_en: "What to do when a cheque bounces: preserving evidence, the bank statement, the criminal and civil routes, and settlement.",
    image: "/images/services/commercial-law.webp",
    date: '2026-11-17',
    category: "القانون التجاري",
    readTime: "5 دقائق",
    tags: ["شيك مرتد","محامي تجاري في الإسكندرية","تحصيل ديون"],
    isPublished: true,
    order: 61,
    content: "<h2>أول ما يجب فعله</h2>\n<p>احتفظ بأصل الشيك ولا تتصرف فيه، واطلب من البنك إفادة رسمية بسبب عدم الصرف. هذه الإفادة هي أساس أي إجراء لاحق.</p>\n<h2>الطريقان المتاحان</h2>\n<ul>\n<li><strong>الطريق الجنائي:</strong> بلاغ أو شكوى للنيابة عن إصدار شيك بدون رصيد، وفق نصوص قانون التجارة رقم 17 لسنة 1999 وتعديلاته. يتغير حكم بعض التفاصيل بالتعديلات، فتحقق من النص الساري.</li>\n<li><strong>الطريق المدني:</strong> دعوى مطالبة بقيمة الشيك أمام المحكمة المختصة، وقد تكون المحكمة الاقتصادية بحسب طبيعة النزاع.</li>\n</ul>\n<h2>مستندات مفيدة</h2>\n<p>أصل الشيك، وإفادة البنك، والعقد أو المراسلات التي تثبت سبب الدين، وأي إيصالات سداد جزئية.</p>\n<h2>التسوية</h2>\n<p>يتفق كثير من الأطراف على سداد الدين، وينبغي توثيق أي اتفاق كتابةً بمبلغ ومواعيد وجزاء الإخلال، وعدم تسليم الشيك قبل السداد الكامل.</p>\n<h2>للمدين</h2>\n<p>إذا وُجّه إليك بلاغ، فلا تتجاهل الاستدعاء. وعرّف محاميك بسبب الشيك وما سدّدته من أموال.</p>\n<p><em>هذا المقال معلومات قانونية عامة وليس استشارة لحالة بعينها. تختلف الإجراءات والمستندات حسب ظروف كل قضية، ويُنصح بعرض مستنداتك على محامٍ قبل اتخاذ أي خطوة.</em></p><h2>تواصل مع مكتبنا</h2><p>مكتب كريم الديب للمحاماة يعمل منذ 2006 ومقره الرئيسي في محطة الرمل بالإسكندرية. اتصل أو راسلنا على واتساب: <a href=\"tel:+201223767592\">01223767592</a>. راجع أيضاً <a href=\"/alexandria\">محامي في الإسكندرية</a>.</p>",
    content_en: "<h2>First things to do</h2>\n<p>Keep the original cheque and do not dispose of it, and ask the bank for an official statement of the reason for non-payment. That statement is the basis of any later step.</p>\n<h2>The two routes</h2>\n<ul>\n<li><strong>Criminal route:</strong> a report or complaint to the prosecution for issuing a cheque without funds, under the Commercial Law No. 17 of 1999 as amended. Some details change with amendments, so check the text in force.</li>\n<li><strong>Civil route:</strong> a claim for the cheque amount before the competent court, which may be the Economic Court depending on the dispute.</li>\n</ul>\n<h2>Useful documents</h2>\n<p>The original cheque, the bank statement, the contract or correspondence proving the debt, and any receipts for part payments.</p>\n<h2>Settlement</h2>\n<p>Many parties agree to repay. Record any agreement in writing with the amount, dates and consequence of default, and do not hand back the cheque before full payment.</p>\n<h2>For the drawer</h2>\n<p>If a complaint is filed against you, do not ignore the summons. Tell your lawyer why the cheque was issued and what you have already paid.</p>\n<p><em>This article is general legal information, not advice on a specific case. Procedures and required documents vary with each situation, so have a lawyer review your papers before you act.</em></p><h2>Contact Our Office</h2><p>Karim El Deeb Law Firm has practised since 2006, with its main office in Raml Station, Alexandria. Call or WhatsApp: <a href=\"tel:+201223767592\">+20 122 376 7592</a>. See also <a href=\"/en/alexandria\">Lawyer in Alexandria</a>.</p>"
  },

  "rent-dispute-eviction-egypt-guide": {
    id: "rent-dispute-eviction-egypt-guide",
    slug: "rent-dispute-eviction-egypt-guide",
    title: "منازعات الإيجار والإخلاء في مصر: الإنذار والدعوى والتنفيذ",
    title_en: "Rent Disputes and Eviction in Egypt: Notice, Claim and Enforcement",
    seoTitle: "منازعات الإيجار والإخلاء في مصر",
    seoTitle_en: "Rent Disputes & Eviction in Egypt",
    excerpt: "كيف تُحل منازعات الإيجار: التأخر في السداد، انتهاء المدة، التعديل، والإخلاء، وما الذي يوثقه المؤجر والمستأجر.",
    excerpt_en: "How rent disputes are resolved: late payment, expiry, changes to the lease, and eviction, and what landlords and tenants should document.",
    image: "/images/services/civil-law.webp",
    date: '2026-11-17',
    category: "القانون المدني",
    readTime: "5 دقائق",
    tags: ["إيجار","إخلاء","محامي مدني في الإسكندرية"],
    isPublished: true,
    order: 62,
    content: "<h2>نوع العقد أولاً</h2>\n<p>تتفاوت القواعد بحسب نوع عقد الإيجار وتاريخ إبرامه، فبعض العقود يخضع للقانون المدني، وبعضها لقوانين إيجار خاصة. حدد أولاً نوع عقدك قبل أي إجراء.</p>\n<h2>أسباب المنازعات الشائعة</h2>\n<ul>\n<li>التأخر في سداد الأجرة.</li>\n<li>انتهاء المدة أو رفض التجديد.</li>\n<li>تعديل الأجرة أو شروط العقد.</li>\n<li>التأجير من الباطن أو تغيير الاستعمال.</li>\n<li>الإصلاحات والعيوب في العين المؤجرة.</li>\n</ul>\n<h2>خطوات المؤجر</h2>\n<p>إرسال إنذار رسمي بالسداد أو الإخلاء، ثم رفع الدعوى أمام المحكمة المختصة إذا لم يُستجب، ثم تنفيذ الحكم بمعرفة جهات التنفيذ.</p>\n<h2>خطوات المستأجر</h2>\n<p>احتفظ بإيصالات السداد، وإن رُفض استلام الأجرة فيمكن عرضها رسمياً وإيداعها وفق الإجراءات القانونية، ولا تترك العين دون محضر تسليم.</p>\n<h2>نصيحة</h2>\n<p>وثّق كل شيء كتابةً: العقد، السداد، المراسلات، وحالة العين عند التسليم.</p>\n<p><em>هذا المقال معلومات قانونية عامة وليس استشارة لحالة بعينها. تختلف الإجراءات والمستندات حسب ظروف كل قضية، ويُنصح بعرض مستنداتك على محامٍ قبل اتخاذ أي خطوة.</em></p><h2>تواصل مع مكتبنا</h2><p>مكتب كريم الديب للمحاماة يعمل منذ 2006 ومقره الرئيسي في محطة الرمل بالإسكندرية. اتصل أو راسلنا على واتساب: <a href=\"tel:+201223767592\">01223767592</a>. راجع أيضاً <a href=\"/alexandria\">محامي في الإسكندرية</a>.</p>",
    content_en: "<h2>The type of lease first</h2>\n<p>Rules vary with the type and date of the lease: some leases fall under the Civil Code and others under special rent laws. Identify your lease type before any step.</p>\n<h2>Common causes of dispute</h2>\n<ul>\n<li>Late payment of rent.</li>\n<li>Expiry or refusal to renew.</li>\n<li>Changes to the rent or lease terms.</li>\n<li>Subletting or change of use.</li>\n<li>Repairs and defects in the property.</li>\n</ul>\n<h2>Landlord's steps</h2>\n<p>Send a formal notice to pay or vacate, then file a claim before the competent court if there is no response, then enforce the judgment through the enforcement bodies.</p>\n<h2>Tenant's steps</h2>\n<p>Keep rent receipts. If the landlord refuses to accept rent it can be formally offered and deposited under the legal procedure. Do not leave the property without a handover record.</p>\n<h2>Tip</h2>\n<p>Document everything in writing: the lease, payments, correspondence and the condition of the property at handover.</p>\n<p><em>This article is general legal information, not advice on a specific case. Procedures and required documents vary with each situation, so have a lawyer review your papers before you act.</em></p><h2>Contact Our Office</h2><p>Karim El Deeb Law Firm has practised since 2006, with its main office in Raml Station, Alexandria. Call or WhatsApp: <a href=\"tel:+201223767592\">+20 122 376 7592</a>. See also <a href=\"/en/alexandria\">Lawyer in Alexandria</a>.</p>"
  },

  "inheritance-estate-division-egypt-guide": {
    id: "inheritance-estate-division-egypt-guide",
    slug: "inheritance-estate-division-egypt-guide",
    title: "حصر التركة وقسمة الميراث في مصر: الخطوات والمستندات",
    title_en: "Inheritance Inventory and Estate Division in Egypt: Steps and Documents",
    seoTitle: "قسمة الميراث وحصر التركة في مصر",
    seoTitle_en: "Inheritance & Estate Division in Egypt",
    excerpt: "من إعلام الوراثة إلى حصر التركة والقسمة الودية أو القضائية، وما الذي يحتاجه الورثة، ومنهم الموجودون خارج مصر.",
    excerpt_en: "From the inheritance declaration to inventorying the estate and amicable or judicial division, and what heirs need, including those abroad.",
    image: "/images/services/family-law.webp",
    date: '2026-11-17',
    category: "الأحوال الشخصية",
    readTime: "6 دقائق",
    tags: ["ميراث","قسمة تركة","محامي أحوال شخصية في الإسكندرية"],
    isPublished: true,
    order: 63,
    content: "<h2>الإطار القانوني</h2>\n<p>تنظم أحكام الميراث في مصر قانون المواريث رقم 77 لسنة 1943، وتختلف الأنصبة بحسب الورثة وصلة القرابة. ويتولى القضاء المختص نظر المنازعات المتعلقة بها.</p>\n<h2>الخطوات العملية</h2>\n<ol>\n<li><strong>إعلام الوراثة:</strong> يحدد الورثة وأنصبتهم، ويُستخرج بالإجراءات القضائية المقررة.</li>\n<li><strong>حصر التركة:</strong> جرد العقارات والأموال والأسهم والديون التي للمتوفى أو عليه.</li>\n<li><strong>سداد الديون والالتزامات</strong> قبل توزيع الأنصبة.</li>\n<li><strong>القسمة الودية:</strong> اتفاق مكتوب بين الورثة على توزيع الأموال والعقارات.</li>\n<li><strong>القسمة القضائية:</strong> دعوى قسمة إذا تعذّر الاتفاق.</li>\n<li><strong>تسجيل نقل الملكية</strong> في الشهر العقاري باسم الورثة.</li>\n</ol>\n<h2>للورثة خارج مصر</h2>\n<p>يمكن متابعة الإجراءات بتوكيل رسمي من القنصلية المصرية، ومن المهم تحديد صلاحيات الوكيل بدقة.</p>\n<h2>أخطاء شائعة</h2>\n<p>ترك التركة دون حصر لسنوات، والاعتماد على اتفاقات شفهية بين الأقارب، وبيع جزء من التركة قبل تحديد الأنصبة.</p>\n<p><em>هذا المقال معلومات قانونية عامة وليس استشارة لحالة بعينها. تختلف الإجراءات والمستندات حسب ظروف كل قضية، ويُنصح بعرض مستنداتك على محامٍ قبل اتخاذ أي خطوة.</em></p><h2>تواصل مع مكتبنا</h2><p>مكتب كريم الديب للمحاماة يعمل منذ 2006 ومقره الرئيسي في محطة الرمل بالإسكندرية. اتصل أو راسلنا على واتساب: <a href=\"tel:+201223767592\">01223767592</a>. راجع أيضاً <a href=\"/alexandria\">محامي في الإسكندرية</a>.</p>",
    content_en: "<h2>Legal framework</h2>\n<p>Inheritance in Egypt is governed by the Inheritance Law No. 77 of 1943, and shares vary with the heirs and their degree of kinship. The competent court hears disputes about it.</p>\n<h2>Practical steps</h2>\n<ol>\n<li><strong>Inheritance declaration:</strong> identifies the heirs and their shares, obtained through the prescribed judicial procedure.</li>\n<li><strong>Inventory of the estate:</strong> listing property, funds, shares and debts owed to or by the deceased.</li>\n<li><strong>Paying debts and obligations</strong> before distributing shares.</li>\n<li><strong>Amicable division:</strong> a written agreement between the heirs on distributing funds and property.</li>\n<li><strong>Judicial division:</strong> a partition claim if agreement is not possible.</li>\n<li><strong>Registering the transfer of title</strong> at the Real Estate Registry in the heirs' names.</li>\n</ol>\n<h2>For heirs abroad</h2>\n<p>Procedures can be followed under a power of attorney from the Egyptian consulate, and the agent's powers should be defined precisely.</p>\n<h2>Common mistakes</h2>\n<p>Leaving an estate uninventoried for years, relying on verbal agreements between relatives, and selling part of the estate before shares are fixed.</p>\n<p><em>This article is general legal information, not advice on a specific case. Procedures and required documents vary with each situation, so have a lawyer review your papers before you act.</em></p><h2>Contact Our Office</h2><p>Karim El Deeb Law Firm has practised since 2006, with its main office in Raml Station, Alexandria. Call or WhatsApp: <a href=\"tel:+201223767592\">+20 122 376 7592</a>. See also <a href=\"/en/alexandria\">Lawyer in Alexandria</a>.</p>"
  },

  "traffic-accident-compensation-egypt-guide": {
    id: "traffic-accident-compensation-egypt-guide",
    slug: "traffic-accident-compensation-egypt-guide",
    title: "حوادث الطرق في مصر: المحضر والتعويض والتأمين الإجباري",
    title_en: "Road Accidents in Egypt: Police Report, Compensation and Compulsory Insurance",
    seoTitle: "حوادث الطرق والتعويض في مصر",
    seoTitle_en: "Road Accident Compensation in Egypt",
    excerpt: "ماذا تفعل بعد حادث سيارة: المحضر، النيابة، التعويض المدني، ودور التأمين الإجباري.",
    excerpt_en: "What to do after a car accident: the police report, the prosecution, civil compensation and the role of compulsory insurance.",
    image: "/images/services/criminal-law.webp",
    date: '2026-11-17',
    category: "القانون الجنائي",
    readTime: "5 دقائق",
    tags: ["حوادث سيارات","تعويض","محامي جنائي في الإسكندرية"],
    isPublished: true,
    order: 64,
    content: "<h2>في موقع الحادث</h2>\n<p>أبلغ الشرطة أو الإسعاف، ولا تغادر المكان، ودوّن بيانات المركبات والشهود، والتقط صوراً. لا توقع على أي محضر قبل قراءته.</p>\n<h2>المسار الجنائي</h2>\n<p>تُحرَّر محاضر الحادث وتحقق فيه النيابة العامة، وقد تُحال القضية إلى المحكمة المختصة إذا توافرت أركان الجريمة، كالإصابة أو الوفاة الخطأ.</p>\n<h2>التعويض المدني</h2>\n<p>للمضرور المطالبة بالتعويض بالادعاء مدنياً أمام المحكمة الجنائية أو برفع دعوى أمام المحكمة المدنية. ويستند التقدير إلى التقارير الطبية وما تكبده من أضرار.</p>\n<h2>التأمين الإجباري</h2>\n<p>ينظم قانون التأمين الإجباري عن المسؤولية المدنية الناشئة عن حوادث المركبات رقم 72 لسنة 2007 حق المضرور في الحصول على تعويض من شركة التأمين وفق شروطه.</p>\n<h2>مستندات تحتاجها</h2>\n<p>محضر الحادث، والتقارير الطبية، وبيانات المركبات والتأمين، وإيصالات العلاج، وما يثبت العجز أو فقد الدخل.</p>\n<p><em>هذا المقال معلومات قانونية عامة وليس استشارة لحالة بعينها. تختلف الإجراءات والمستندات حسب ظروف كل قضية، ويُنصح بعرض مستنداتك على محامٍ قبل اتخاذ أي خطوة.</em></p><h2>تواصل مع مكتبنا</h2><p>مكتب كريم الديب للمحاماة يعمل منذ 2006 ومقره الرئيسي في محطة الرمل بالإسكندرية. اتصل أو راسلنا على واتساب: <a href=\"tel:+201223767592\">01223767592</a>. راجع أيضاً <a href=\"/alexandria\">محامي في الإسكندرية</a>.</p>",
    content_en: "<h2>At the scene</h2>\n<p>Call the police or ambulance, do not leave, note vehicle and witness details, and take photos. Do not sign any record before reading it.</p>\n<h2>The criminal track</h2>\n<p>Accident reports are drawn up and the Public Prosecution investigates, and the case may be referred to the competent court if the elements of an offence exist, such as negligent injury or death.</p>\n<h2>Civil compensation</h2>\n<p>The injured party may claim compensation as a civil party before the criminal court or by a claim before the civil court. Assessment relies on medical reports and the damage suffered.</p>\n<h2>Compulsory insurance</h2>\n<p>The Compulsory Insurance for Civil Liability from Vehicle Accidents Law No. 72 of 2007 governs the injured party's right to compensation from the insurer under its conditions.</p>\n<h2>Documents you need</h2>\n<p>The accident report, medical reports, vehicle and insurance details, treatment receipts, and proof of disability or lost income.</p>\n<p><em>This article is general legal information, not advice on a specific case. Procedures and required documents vary with each situation, so have a lawyer review your papers before you act.</em></p><h2>Contact Our Office</h2><p>Karim El Deeb Law Firm has practised since 2006, with its main office in Raml Station, Alexandria. Call or WhatsApp: <a href=\"tel:+201223767592\">+20 122 376 7592</a>. See also <a href=\"/en/alexandria\">Lawyer in Alexandria</a>.</p>"
  },

  "contract-review-before-signing-egypt-guide": {
    id: "contract-review-before-signing-egypt-guide",
    slug: "contract-review-before-signing-egypt-guide",
    title: "مراجعة العقود قبل التوقيع في مصر: 10 بنود لا تتجاهلها",
    title_en: "Reviewing a Contract Before Signing in Egypt: 10 Clauses Not to Ignore",
    seoTitle: "مراجعة العقد قبل التوقيع في مصر",
    seoTitle_en: "Contract Review Before Signing in Egypt",
    excerpt: "قائمة عملية بالبنود التي تراجعها قبل توقيع أي عقد تجاري أو مدني، وأخطاء تكلف الكثير لاحقاً.",
    excerpt_en: "A practical checklist of clauses to review before signing any commercial or civil contract, and mistakes that cost a lot later.",
    image: "/images/services/commercial-law.webp",
    date: '2026-11-17',
    category: "القانون التجاري",
    readTime: "5 دقائق",
    tags: ["مراجعة العقود","صياغة العقود","محامي تجاري في الإسكندرية"],
    isPublished: true,
    order: 65,
    content: "<h2>لماذا المراجعة؟</h2>\n<p>أغلب النزاعات التجارية والمدنية سببها عقد غامض أو ناقص. مراجعة العقد قبل التوقيع أرخص من التقاضي بعده.</p>\n<h2>10 بنود تراجعها</h2>\n<ol>\n<li><strong>الأطراف:</strong> الأسماء والصفات وسلطة التوقيع.</li>\n<li><strong>موضوع العقد:</strong> وصف دقيق للالتزامات.</li>\n<li><strong>الثمن وطريقة السداد</strong> ومواعيده.</li>\n<li><strong>مدة العقد</strong> والتجديد والإنهاء.</li>\n<li><strong>الشرط الجزائي:</strong> الجزاء عند التأخر أو الإخلال.</li>\n<li><strong>الضمانات:</strong> شيكات أو كفالة أو رهن.</li>\n<li><strong>القوة القاهرة</strong> وما يترتب عليها.</li>\n<li><strong>القانون الواجب التطبيق</strong> وجهة حل النزاعات (قضاء أو تحكيم).</li>\n<li><strong>الإخطارات:</strong> العناوين وطريقة المراسلة.</li>\n<li><strong>الملاحق والمستندات المرفقة</strong> وترتيبها عند التعارض.</li>\n</ol>\n<h2>أخطاء شائعة</h2>\n<p>توقيع نسخة بلغة لا تفهمها، والاعتماد على وعود شفهية خارج العقد، وترك بنود فارغة، وعدم الاحتفاظ بنسخة موقعة.</p>\n<p><em>هذا المقال معلومات قانونية عامة وليس استشارة لحالة بعينها. تختلف الإجراءات والمستندات حسب ظروف كل قضية، ويُنصح بعرض مستنداتك على محامٍ قبل اتخاذ أي خطوة.</em></p><h2>تواصل مع مكتبنا</h2><p>مكتب كريم الديب للمحاماة يعمل منذ 2006 ومقره الرئيسي في محطة الرمل بالإسكندرية. اتصل أو راسلنا على واتساب: <a href=\"tel:+201223767592\">01223767592</a>. راجع أيضاً <a href=\"/alexandria\">محامي في الإسكندرية</a>.</p>",
    content_en: "<h2>Why review?</h2>\n<p>Most commercial and civil disputes start with a vague or incomplete contract. Reviewing before signing costs less than litigating afterwards.</p>\n<h2>10 clauses to review</h2>\n<ol>\n<li><strong>Parties:</strong> names, capacities and authority to sign.</li>\n<li><strong>Subject matter:</strong> a precise description of the obligations.</li>\n<li><strong>Price and payment method</strong> and dates.</li>\n<li><strong>Term</strong>, renewal and termination.</li>\n<li><strong>Penalty clause:</strong> the consequence of delay or breach.</li>\n<li><strong>Security:</strong> cheques, guarantee or mortgage.</li>\n<li><strong>Force majeure</strong> and its effects.</li>\n<li><strong>Governing law</strong> and dispute forum (court or arbitration).</li>\n<li><strong>Notices:</strong> addresses and method of correspondence.</li>\n<li><strong>Annexes and attached documents</strong> and their order of precedence if they conflict.</li>\n</ol>\n<h2>Common mistakes</h2>\n<p>Signing a version in a language you do not understand, relying on verbal promises outside the contract, leaving blanks, and not keeping a signed copy.</p>\n<p><em>This article is general legal information, not advice on a specific case. Procedures and required documents vary with each situation, so have a lawyer review your papers before you act.</em></p><h2>Contact Our Office</h2><p>Karim El Deeb Law Firm has practised since 2006, with its main office in Raml Station, Alexandria. Call or WhatsApp: <a href=\"tel:+201223767592\">+20 122 376 7592</a>. See also <a href=\"/en/alexandria\">Lawyer in Alexandria</a>.</p>"
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

