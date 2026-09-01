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
  }
};
