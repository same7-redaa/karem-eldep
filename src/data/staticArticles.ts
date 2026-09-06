export interface StaticArticle {
  id: string;
  slug: string;
  title: string;
  title_en?: string;
  title_fr?: string;
  title_it?: string;
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
  category: string;
  readTime: string;
  tags: string[];
  isPublished: boolean;
  order: number;
}

export const staticArticles: Record<string, StaticArticle> = {
  'international-commercial-arbitration-egypt-guide-2026': {
    id: 'arbitration-guide-2026',
    slug: 'international-commercial-arbitration-egypt-guide-2026',
    title: 'التحكيم التجاري الدولي وتسوية منازعات الاستثمار في مصر 2026: الدليل القانوني الشامل',
    title_en: 'International Commercial Arbitration & Foreign Investment Disputes in Egypt 2026',
    title_fr: 'Arbitrage Commercial International & Règlement des Litiges d\'Investissement en Égypte 2026',
    title_it: 'Arbitrato Commerciale Internazionale e Controversie sugli Investimenti in Egitto 2026',
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
    excerpt: 'دليل شامل لاختيار أفضل محامي متخصص للأجانب في شرم الشيخ - استخراج الإقامات، تأسيس الشركات، عقود العقارات، والزواج والطلاق.',
    excerpt_en: 'Comprehensive guide to hiring a specialized lawyer for foreigners in Sharm El Sheikh. Residency permits, company formation, real estate contracts, and family law.',
    excerpt_fr: 'Guide complet pour choisir le meilleur avocat pour étrangers à Sharm El Sheikh : permis de séjour, création d\'entreprise, contrats immobiliers et divorce.',
    excerpt_it: 'Guida completa per scegliere il miglior avvocato per stranieri a Sharm El Sheikh: permessi di soggiorno, societario, contratti immobiliari e divorzio.',
    image: '/images/services/foreigners-in-egypt.webp',
    date: '2026-01-24',
    category: 'خدمات الأجانب',
    readTime: '10 دقائق',
    tags: ['محامي أجانب شرم الشيخ', 'إقامة الأجانب', 'عقارات شرم الشيخ', 'تأسيس شركات', 'كريم الديب'],
    isPublished: true,
    order: 3,
    content: `
      <h2>لماذا تحتاج إلى محامي متخصص في شرم الشيخ؟</h2>
      <p>تعتبر مدينة شرم الشيخ مقصداً رئيسياً للجاليات الأجنبية والمستثمرين الدوليين. تختلف الإجراءات القانونية الخاصة بتملك العقارات واستخراج تصاريح الإقامة وتأسيس الشركات للأجانب في محافظة جنوب سيناء عن باقي المحافظات، مما يتطلب محامياً متمرساً يفهم الضوابط الخاصة بالمنطقة.</p>
      
      <h2>الخدمات القانونية الرئيسية للأجانب في شرم الشيخ</h2>
      <ul>
        <li><strong>تصاريح الإقامة والتأشيرات:</strong> إقامة مستثمر، إقامة عقارية، إقامات الزواج والعمل وحل مشكلات غرامات الإقامة.</li>
        <li><strong>شراء وتملك العقارات:</strong> الفحص النافي للجهالة، صياغة عقود حق الانتفاع والتملك، وتوثيق العقود رسمياً.</li>
        <li><strong>تأسيس الشركات والأنشطة السياحية:</strong> إنشاء شركات ذات مسؤولية محدودة، تراخيص الغوص والأنشطة الفندقية.</li>
        <li><strong>قضايا الأحوال الشخصية:</strong> عقود الزواج المدني وتوثيقها بالقنصليات، وقضايا الطلاق والخلع والنفقة والحضانة.</li>
      </ul>

      <h2>خبرة مؤسسة المحامي كريم الديب في شرم الشيخ</h2>
      <p>يقدم مكتب المحامي كريم الديب خدمات قانونية معتمدة منذ أكثر من 18 عاماً باللغات الإنجليزية والفرنسية والإيطالية، مع وجود مقر مباشر وممثلين دائمين في شرم الشيخ.</p>
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
      <p>يقع المقر الرئيسي لمكتب كريم الديب للمحاماة في قلب مدينة الإسكندرية (14 شارع الشهداء - محطة الرمل)، ويقدم دعماً قانونياً شاملاً للشركات الدولية، المستوردين، والمقيمين الأجانب في عروس البحر المتوسط.</p>
      
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
    excerpt: 'دليل متكامل لتأسيس الشركات في مصر للأجانب: الشركة ذات المسؤولية المحدودة (LLC)، شركة المساهمة، ورأس المال الأدنى.',
    excerpt_en: 'Complete legal guide on setting up a company in Egypt for foreign nationals: LLCs, joint stock companies, and GAFI registration.',
    excerpt_fr: 'Guide complet pour créer une société en Égypte : SARL, société anonyme et démarches au GAFI.',
    excerpt_it: 'Guida completa per la costituzione di società in Egitto: SRL, SPA e procedure GAFI.',
    image: '/images/services/company-law.webp',
    date: '2026-01-24',
    category: 'قانون الشركات',
    readTime: '11 دقيقة',
    tags: ['تأسيس شركات', 'شركة ذات مسؤولية محدودة', 'هيئة الاستثمار GAFI', 'استثمار أجنبي'],
    isPublished: true,
    order: 8,
    content: `
      <h2>خطوات تأسيس شركة ذات مسؤولية محدودة (LLC) في مصر</h2>
      <p>تُعد الشركة ذات المسؤولية المحدودة الخيار الأكثر شعبية للمستثمرين الأجانب بسبب مرونة الإدارة وإمكانية الملكية الأجنبية بنسبة 100%.</p>
      
      <h2>المستندات المطلوبة للتأسيس:</h2>
      <ul>
        <li>جوازات سفر سارية لجميع الشركاء مترجمة ومصدقة.</li>
        <li>استخراج الموافقات الأمنية للشركاء الأجانب.</li>
        <li>شهادة عدم التباس الاسم التجاري من السجل التجاري.</li>
        <li>عقد إيجار موثق لمقر الشركة مع إثبات التاريخ.</li>
      </ul>
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
    excerpt: 'دليل قانوني شامل حول قضايا الطلاق والخلع للأجانب والزواج المختلط في مصر، وتحديد القانون الواجب التطبيق.',
    excerpt_en: 'Legal guide to international divorce and mixed marriage dissolution in Egypt: applicable law, custody, and alimony.',
    excerpt_fr: 'Guide juridique sur le divorce des étrangers en Égypte : loi applicable, garde des enfants et pension alimentaire.',
    excerpt_it: 'Guida legale al divorzio per stranieri in Egitto: legge applicabile, affidamento e alimenti.',
    image: '/images/services/family-law.webp',
    date: '2026-01-24',
    category: 'الأحوال الشخصية',
    readTime: '10 دقائق',
    tags: ['طلاق أجانب', 'زواج مختلط', 'حضانة أطفال', 'قانون الأسرة', 'محامي أحوال شخصية'],
    isPublished: true,
    order: 9,
    content: `
      <h2>القانون الواجب التطبيق في طلاق الأجانب</h2>
      <p>وفقاً للمادة 13 من القانون المدني المصري، يسري على الطلاق قانون الدولة التي ينتمي إليها الزوج بجنسيته وقت رفع الدعوى، ما لم تكن هناك استثناءات تتعلق بالزواج المختلط أو اتفاق الأطراف.</p>
      
      <h2>حقوق الحضانة والنفقة:</h2>
      <ul>
        <li>حضانة الأطفال تخضع لمعايير مصلحة الطفل الفضلى.</li>
        <li>النفقة الزوجية ونفقة الصغار تُقدّر وفقاً لمتطلبات المعيشة ودخل الزوج.</li>
        <li>توثيق أحكام الطلاق لدى وزارة الخارجية والقنصليات لضمان الاعتراف الدولي.</li>
      </ul>
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
    excerpt: 'كل ما تحتاج معرفته عن شراء العقارات في شرم الشيخ: ضوابط حق الانتفاع لـ 50 عاماً، والإقامة العقارية.',
    excerpt_en: 'Complete guide to buying real estate in Sharm El Sheikh: 50-year usufruct rights, due diligence, and real estate residency.',
    excerpt_fr: 'Guide d\'achat immobilier à Sharm El Sheikh : droit d\'usufruit de 50 ans et résidence immobilière.',
    excerpt_it: 'Guida all\'acquisto di immobili a Sharm El Sheikh: diritto di usufrutto di 50 anni e residenza.',
    image: '/images/services/foreigners-in-egypt.webp',
    date: '2026-01-20',
    category: 'عقارات واستثمار',
    readTime: '9 دقائق',
    tags: ['عقارات شرم الشيخ', 'حق الانتفاع', 'إقامة عقارية', 'استثمار أجنبي'],
    isPublished: true,
    order: 10,
    content: `
      <h2>ضوابط تملك العقارات للأجانب في سيناء</h2>
      <p>يخضع الاستثمار العقاري في شبه جزيرة سيناء وشرم الشيخ لأحكام القانون رقم 14 لسنة 2012 وتعديلاته، والذي يتيح للأجانب حق الانتفاع بالوحدات السكنية والتجارية لمدة تصل إلى 50 عاماً قابلة للتجديد.</p>
    `,
    content_en: `
      <h2>Real Estate Regulations in Sharm El Sheikh</h2>
      <p>Property acquisitions by foreign nationals in Sharm El Sheikh are governed by Law No. 14 of 2012, allowing up to 50-year renewable usufruct rights.</p>
    `
  },

  'residence-permit-guide-in-egypt-2026': {
    id: 'residence-permit-guide',
    slug: 'residence-permit-guide-in-egypt-2026',
    title: 'دليل تصاريح الإقامة للأجانب في مصر 2026: الأنواع والشروط والرسوم',
    title_en: 'Residence Permits in Egypt for Foreigners 2026: Types, Requirements & Fees',
    title_fr: 'Guide des Permis de Séjour en Égypte pour les Étrangers 2026',
    title_it: 'Guida ai Permessi di Soggiorno in Egitto per Stranieri 2026',
    excerpt: 'دليل شامل لاستخراج وتجديد الإقامات للأجانب في مصر: إقامة المستثمر، الإقامة العقارية، وإقامة العمل.',
    excerpt_en: 'Complete legal guide on obtaining residency in Egypt: investor visas, property owner residency, and work permits.',
    excerpt_fr: 'Guide complet pour obtenir un permis de séjour en Égypte : investisseur, propriétaire et travail.',
    excerpt_it: 'Guida completa per ottenere il permesso di soggiorno in Egitto: investitore, immobile e lavoro.',
    image: '/images/services/foreigners-in-egypt.webp',
    date: '2026-01-18',
    category: 'إقامة وتأشيرات',
    readTime: '8 دقائق',
    tags: ['إقامة الأجانب', 'إقامة عقارية', 'إقامة مستثمر', 'جوازات مصر'],
    isPublished: true,
    order: 11,
    content: `
      <h2>أنواع تصاريح الإقامة في مصر للأجانب</h2>
      <ul>
        <li><strong>الإقامة الاستثمارية:</strong> تُمنح لمدد من سنة إلى 5 سنوات للمؤسسين والشركاء في الشركات المسجلة.</li>
        <li><strong>الإقامة العقارية:</strong> تُمنح عند شراء عقار في مصر بحد أدنى يبدأ من 100,000 دولار.</li>
        <li><strong>الإقامة السياحية والخاصة:</strong> تصاريح إقامة مؤقتة مع إمكانية التجديد القانوني.</li>
      </ul>
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
      <p>بفضل خبرة تتجاوز 18 عاماً واعتماد رسمي لدى القنصلية الفرنسية والعديد من السفارات الأوروبية، توفر مؤسسة كريم الديب خدمات <strong>محامي تحكيم دولي في الإسكندرية</strong> للنزاعات البحرية والتجارية، و<strong>محامي تحكيم دولي في شرم الشيخ</strong> للمنازعات العقارية والسياحية، إلى جانب مقرنا الرئيسي لخدمة قضايا التحكيم بالقاهرة الكبرى.</p>
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

