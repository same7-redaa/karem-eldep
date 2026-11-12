// Practice-area pages for the Alexandria office: /alexandria/<slug>
// One page per "specialty + Alexandria" search intent. Every page has its own
// copy (no shared boilerplate paragraphs) so the pages are not doorway duplicates.
// Firm facts used here must stay true: Alexandria main office, practising since
// 2006, Arabic / English / French / Italian. Do not add case results or numbers.

export type T = { ar: string; en: string };
const t = (ar: string, en: string): T => ({ ar, en });

export interface AlexandriaService {
  slug: string;
  name: T;
  seoTitle: T;
  seoDescription: T;
  h1: T;
  subtitle: T;
  intro: T[];
  servicesHeading: T;
  services: { title: T; text: T }[];
  courtsHeading: T;
  courts: T[];
  stepsHeading: T;
  steps: { title: T; text: T }[];
  faqHeading: T;
  faq: { q: T; a: T }[];
  related: string[];
  parent: { path: string; text: T };
  contactHeading: T;
}

type Input = Omit<AlexandriaService, 'servicesHeading' | 'courtsHeading' | 'stepsHeading' | 'faqHeading' | 'contactHeading'> & {
  /** Topic used in the generated section headings, e.g. "قضايا الأسرة" / "family cases" */
  topic: T;
};

const make = (i: Input): AlexandriaService => {
  const { topic, ...rest } = i;
  return {
    ...rest,
    servicesHeading: t(`ما نتولاه في ${topic.ar} بالإسكندرية`, `What We Handle: ${topic.en} in Alexandria`),
    courtsHeading: t(`المحاكم والقوانين المنظمة لـ${topic.ar} في الإسكندرية`, `Courts and Laws Governing ${topic.en} in Alexandria`),
    stepsHeading: t('كيف نعمل على ملفك', 'How We Work on Your File'),
    faqHeading: t(`أسئلة شائعة عن ${i.name.ar}`, `FAQ: ${i.name.en}`),
    contactHeading: t(`تواصل مع ${i.name.ar}`, `Contact a ${i.name.en}`),
  };
};

export const alexandriaServices: AlexandriaService[] = [
  // ───────────────────────── 1. Family / personal status
  make({
    slug: 'family-lawyer',
    topic: t('قضايا الأسرة والأحوال الشخصية', 'Family and Personal Status Cases'),
    name: t('محامي أسرة وأحوال شخصية في الإسكندرية', 'Family Lawyer in Alexandria'),
    seoTitle: t('محامي أسرة وأحوال شخصية في الإسكندرية | كريم الديب', 'Family & Divorce Lawyer in Alexandria, Egypt | Karim Eldib'),
    seoDescription: t(
      'محامي أحوال شخصية في الإسكندرية: طلاق وخلع، نفقة، حضانة ورؤية، إثبات نسب وزواج الأجانب أمام محاكم الأسرة بالإسكندرية. اتصل 01223767592.',
      'Family lawyer in Alexandria, Egypt: divorce and khul, alimony, child custody and visitation, and mixed-nationality marriages before the Alexandria family courts.'
    ),
    h1: t('محامي أسرة وأحوال شخصية في الإسكندرية', 'Family and Divorce Lawyer in Alexandria, Egypt'),
    subtitle: t('طلاق وخلع ونفقة وحضانة أمام محاكم الأسرة بالإسكندرية', 'Divorce, khul, alimony and custody before the Alexandria family courts'),
    intro: [
      t(
        'قضايا الأسرة لا تحتمل التجربة؛ خطأ إجرائي واحد قد يؤخر نفقة أطفال شهوراً أو يُسقط حقاً في الحضانة. مكتب المحامي كريم الديب يتولى قضايا الأحوال الشخصية أمام محاكم الأسرة في الإسكندرية منذ 2006، للزوج أو الزوجة، وللمصريين والأجانب والزيجات المختلطة.',
        'Family cases leave little room for trial and error: one procedural mistake can delay child support for months or weaken a custody claim. Karim Eldib Law Firm has handled personal status cases before the family courts of Alexandria since 2006, for husbands and wives, Egyptians, foreigners and mixed-nationality couples.'
      ),
      t(
        'نبدأ دائماً بتقييم واقعي: ما الذي يمكن الحصول عليه قانوناً، وكم يستغرق، وهل التسوية الودية أفضل لك من التقاضي. وإذا كان أحد الطرفين خارج مصر، نتابع الدعوى بتوكيل رسمي دون حاجة لحضوره كل جلسة.',
        'We start with a realistic assessment: what the law can actually give you, how long it takes, and whether an amicable settlement serves you better than litigation. If one spouse lives outside Egypt, we run the case under a power of attorney so they need not attend every hearing.'
      ),
    ],
    services: [
      {
        title: t('الطلاق والخلع والتطليق للضرر', 'Divorce, khul and divorce for harm'),
        text: t(
          'رفع دعاوى الخلع والتطليق للضرر أو للغيبة أو لعدم الإنفاق، وإثبات الطلاق الشفوي، وتوثيق الطلاق بالتراضي مع حفظ الحقوق المالية.',
          'Filing khul claims and divorce for harm, absence or non-maintenance, proving an undocumented divorce, and documenting divorce by mutual consent while protecting financial rights.'
        ),
      },
      {
        title: t('النفقات والحقوق المالية', 'Alimony and financial rights'),
        text: t(
          'نفقة الزوجة والصغار، أجر المسكن والحضانة، مؤخر الصداق، نفقة العدة والمتعة، ودعاوى زيادة أو تخفيض النفقة، وتنفيذ أحكام النفقة.',
          'Wife and child maintenance, housing and custody allowances, deferred dowry, waiting-period and compensation (mut’a) payments, claims to increase or reduce maintenance, and enforcing maintenance judgments.'
        ),
      },
      {
        title: t('الحضانة والرؤية والولاية التعليمية', 'Custody, visitation and educational guardianship'),
        text: t(
          'دعاوى ضم الحضانة وإسقاطها، تنظيم الرؤية، الولاية التعليمية، ومنع سفر الصغير أو الإذن بسفره.',
          'Custody transfer and forfeiture claims, visitation orders, educational guardianship, and travel bans or travel permission for a child.'
        ),
      },
      {
        title: t('زواج وطلاق الأجانب والزيجات المختلطة', 'Marriage and divorce for foreigners and mixed couples'),
        text: t(
          'توثيق زواج الأجانب، تحديد القانون الواجب التطبيق عند اختلاف الجنسية أو الديانة، والاعتراف بأحكام الطلاق الأجنبية وتنفيذها في مصر.',
          'Registering marriages involving foreigners, determining which law applies when nationalities or religions differ, and recognising and enforcing foreign divorce judgments in Egypt.'
        ),
      },
    ],
    courts: [
      t(
        'تُنظر هذه الدعاوى أمام محاكم الأسرة بالإسكندرية المنشأة بالقانون رقم 10 لسنة 2004، وتُطبق عليها قوانين الأحوال الشخصية (رقم 25 لسنة 1920 ورقم 25 لسنة 1929 وتعديلاتهما) وقانون إجراءات التقاضي رقم 1 لسنة 2000 الذي ينظم الخلع.',
        'These cases are heard by the Alexandria family courts created by Law 10 of 2004, applying the personal status laws (Law 25 of 1920 and Law 25 of 1929 as amended) and Law 1 of 2000 on litigation procedure, which governs khul.'
      ),
      t(
        'في أغلب دعاوى الأسرة يجب تقديم طلب أولاً إلى مكتب تسوية المنازعات الأسرية قبل رفع الدعوى، وإغفال هذه الخطوة يعرّض الدعوى لعدم القبول. نتولى هذه المرحلة ونستغلها لمحاولة تسوية حقيقية متى كانت في مصلحتك.',
        'In most family cases an application must first go to the Family Dispute Settlement Office before a claim is filed; skipping it can make the claim inadmissible. We handle that stage and use it to attempt a genuine settlement where that serves you.'
      ),
    ],
    steps: [
      { title: t('استشارة وتقييم الموقف', 'Consultation and assessment'), text: t('نراجع وثيقة الزواج والمستندات المالية ونحدد الدعاوى الممكنة وترتيبها.', 'We review the marriage contract and financial documents and identify which claims are available and in what order.') },
      { title: t('مكتب التسوية ومحاولة الصلح', 'Settlement office and conciliation'), text: t('نقدم طلب التسوية ونحضر الجلسات، ونوثق أي اتفاق يتم التوصل إليه.', 'We file the settlement request, attend the sessions and document any agreement reached.') },
      { title: t('رفع الدعوى والمرافعة', 'Filing and pleading'), text: t('نعد صحيفة الدعوى والمستندات والشهود ونحضر الجلسات أمام محكمة الأسرة.', 'We prepare the statement of claim, evidence and witnesses and appear before the family court.') },
      { title: t('التنفيذ', 'Enforcement'), text: t('نتابع تنفيذ الحكم، سواء نفقة أو حضانة أو رؤية، عبر جهات التنفيذ المختصة.', 'We follow enforcement of the judgment, whether maintenance, custody or visitation, through the competent enforcement bodies.') },
    ],
    faq: [
      {
        q: t('كم تستغرق دعوى الخلع في الإسكندرية؟', 'How long does a khul case take in Alexandria?'),
        a: t(
          'تختلف المدة حسب جدول المحكمة وإعلان الزوج ومحاولات الصلح التي يوجبها القانون، وغالباً تمتد عدة أشهر. نعطيك تقديراً أدق بعد الاطلاع على حالتك.',
          'It depends on the court calendar, service on the husband and the reconciliation attempts the law requires, and it usually runs for several months. We give a closer estimate once we have seen your situation.'
        ),
      },
      {
        q: t('حتى أي سن تبقى الحضانة مع الأم؟', 'Until what age does the mother keep custody?'),
        a: t(
          'ينتهي حق حضانة النساء ببلوغ الصغير أو الصغيرة خمس عشرة سنة، ثم يخيّر القاضي الصغير في البقاء مع الحاضنة.',
          'The mother’s custody right ends when the child reaches fifteen, after which the judge lets the child choose whether to stay with the custodian.'
        ),
      },
      {
        q: t('أنا أجنبي متزوج من مصرية، أي قانون يطبق على الطلاق؟', 'I am a foreigner married to an Egyptian. Which law applies to the divorce?'),
        a: t(
          'إذا كان أحد الزوجين مصرياً وقت الزواج يطبق القانون المصري في الغالب. نراجع جنسية وديانة الطرفين لتحديد القانون والمحكمة المختصة قبل أي إجراء.',
          'Where one spouse was Egyptian at the time of marriage, Egyptian law generally applies. We check both spouses’ nationality and religion to confirm the applicable law and court before any step is taken.'
        ),
      },
    ],
    related: ['lawyer-for-foreigners', 'civil-lawyer', 'mediation-lawyer'],
    parent: { path: '/family-law', text: t('محامي الأحوال الشخصية وقانون الأسرة في مصر', 'Family law services in Egypt') },
  }),

  // ───────────────────────── 2. Real estate
  make({
    slug: 'real-estate-lawyer',
    topic: t('القضايا العقارية', 'Real Estate Matters'),
    name: t('محامي عقارات في الإسكندرية', 'Real Estate Lawyer in Alexandria'),
    seoTitle: t('محامي عقارات في الإسكندرية | تسجيل وصحة توقيع ونزاعات | كريم الديب', 'Real Estate Lawyer in Alexandria, Egypt | Karim Eldib'),
    seoDescription: t(
      'محامي عقارات في الإسكندرية: فحص ملكية قبل الشراء، صحة توقيع وصحة ونفاذ، تسجيل بالشهر العقاري، ونزاعات الإيجار والملكية. اتصل 01223767592.',
      'Real estate lawyer in Alexandria, Egypt: title checks before purchase, contract validation suits, registration at the Real Estate Registry, and rent and ownership disputes.'
    ),
    h1: t('محامي عقارات في الإسكندرية', 'Real Estate Lawyer in Alexandria, Egypt'),
    subtitle: t('فحص الملكية، التسجيل، ومنازعات العقارات والإيجارات', 'Title due diligence, registration, and property and rent disputes'),
    intro: [
      t(
        'أغلب مشاكل العقارات في الإسكندرية تبدأ من عقد ابتدائي لم يُفحص: بائع لا يملك، عقار مبيع أكثر من مرة، أو مخالفات بناء تمنع التسجيل. مهمة محامي العقارات أن يكشف ذلك قبل أن تدفع، لا بعده.',
        'Most property problems in Alexandria start with a preliminary contract nobody checked: a seller without title, a unit sold more than once, or building violations that block registration. A real estate lawyer’s job is to find that before you pay, not after.'
      ),
      t(
        'نخدم المشترين والبائعين والملاك والمستأجرين والمصريين بالخارج الذين يملكون عقارات في الإسكندرية والساحل الشمالي، وكذلك الأجانب الراغبين في التملك وفق القيود التي يضعها القانون المصري.',
        'We act for buyers, sellers, landlords, tenants and Egyptians abroad who own property in Alexandria and on the North Coast, as well as foreigners buying within the limits Egyptian law sets.'
      ),
    ],
    services: [
      {
        title: t('فحص الملكية قبل الشراء', 'Title due diligence before purchase'),
        text: t(
          'مراجعة تسلسل الملكية والتوكيلات، واستخراج الشهادات اللازمة من الشهر العقاري، والتحقق من التراخيص والمخالفات والرهون.',
          'Reviewing the chain of title and powers of attorney, obtaining certificates from the Real Estate Registry, and checking licences, violations and mortgages.'
        ),
      },
      {
        title: t('صياغة ومراجعة عقود البيع والإيجار', 'Drafting and reviewing sale and lease contracts'),
        text: t(
          'عقود بيع ابتدائية ونهائية، عقود إيجار سكني وتجاري، وعقود المقاولة والتطوير، بشروط تحمي الثمن ومواعيد التسليم.',
          'Preliminary and final sale contracts, residential and commercial leases, and construction and development agreements, with terms that protect the price and handover dates.'
        ),
      },
      {
        title: t('دعاوى صحة التوقيع وصحة ونفاذ والتسجيل', 'Signature validation, contract validation and registration'),
        text: t(
          'رفع دعاوى صحة التوقيع وصحة ونفاذ عقد البيع، وإتمام إجراءات التسجيل والشهر حتى صدور العقد المسجل.',
          'Bringing signature-validation and contract-validation suits and completing registration through to the registered deed.'
        ),
      },
      {
        title: t('منازعات الملكية والإيجارات والحيازة', 'Ownership, rent and possession disputes'),
        text: t(
          'دعاوى الطرد والإخلاء، فسخ العقد واسترداد الثمن، تثبيت الملكية، منازعات الشيوع وقسمة العقارات الموروثة، ومنازعات اتحاد الملاك.',
          'Eviction claims, rescission and recovery of the price, confirmation of ownership, co-ownership and partition of inherited property, and owners’ association disputes.'
        ),
      },
    ],
    courts: [
      t(
        'تختص المحاكم المدنية بالإسكندرية (الجزئية والابتدائية والاستئناف) بالمنازعات العقارية بحسب قيمة الدعوى، ويحكم التسجيل قانون الشهر العقاري رقم 114 لسنة 1946، وتُطبق على العقود أحكام القانون المدني رقم 131 لسنة 1948.',
        'The Alexandria civil courts (district, primary and appeal) hear property disputes according to the value of the claim. Registration is governed by the Real Estate Registration Law 114 of 1946 and contracts by the Civil Code, Law 131 of 1948.'
      ),
      t(
        'تملّك الأجانب للعقارات ينظمه القانون رقم 230 لسنة 1996 بقيود على عدد العقارات ومساحتها والغرض منها. نراجع انطباق هذه الشروط على حالتك قبل التعاقد.',
        'Ownership by foreigners is governed by Law 230 of 1996, with limits on the number, area and purpose of the properties. We check how those conditions apply to you before you sign.'
      ),
    ],
    steps: [
      { title: t('فحص المستندات', 'Document review'), text: t('نطلب سند ملكية البائع والرخصة ونراجعها قبل أي دفعة.', 'We ask for the seller’s title and the building licence and review them before any payment.') },
      { title: t('التعاقد', 'Contracting'), text: t('نصوغ العقد أو نعدّل شروطه ونحضر التوقيع.', 'We draft or amend the contract and attend signing.') },
      { title: t('التسجيل أو التقاضي', 'Registration or litigation'), text: t('نتابع التسجيل، أو نرفع الدعوى المناسبة إذا امتنع الطرف الآخر.', 'We follow registration, or bring the appropriate claim if the other party refuses.') },
      { title: t('التسليم والتنفيذ', 'Handover and enforcement'), text: t('نتابع استلام العقار أو تنفيذ الحكم الصادر لصالحك.', 'We follow handover of the property or enforcement of the judgment in your favour.') },
    ],
    faq: [
      {
        q: t('هل صحة التوقيع تكفي لحماية ملكيتي؟', 'Is a signature-validation judgment enough to protect my ownership?'),
        a: t(
          'لا. حكم صحة التوقيع يثبت فقط أن البائع وقّع العقد ولا ينقل الملكية ولا يبحث صحة العقد نفسه. الملكية لا تنتقل قانوناً إلا بالتسجيل.',
          'No. It only proves the seller signed the contract; it does not transfer ownership or examine the contract itself. Ownership passes in law only by registration.'
        ),
      },
      {
        q: t('أعيش خارج مصر، هل أستطيع بيع أو شراء عقار في الإسكندرية؟', 'I live abroad. Can I buy or sell property in Alexandria?'),
        a: t(
          'نعم، بتوكيل رسمي من القنصلية المصرية في بلد إقامتك يحدد التصرفات المصرح بها بدقة، ونتولى الإجراءات ونرسل لك صور المستندات أولاً بأول.',
          'Yes. With a power of attorney from the Egyptian consulate where you live, stating precisely which acts are authorised, we handle the process and send you copies of every document as we go.'
        ),
      },
      {
        q: t('ماذا أفعل إذا تأخر المطور في تسليم الوحدة؟', 'What can I do if the developer is late handing over the unit?'),
        a: t(
          'نراجع شروط التسليم والجزاء في العقد، ونوجّه إنذاراً رسمياً، ثم نطالب بالتنفيذ أو بالفسخ واسترداد المدفوع مع التعويض بحسب ما يتيحه العقد.',
          'We review the handover and penalty clauses, serve formal notice, then claim performance or rescission with a refund and compensation, depending on what the contract allows.'
        ),
      },
    ],
    related: ['civil-lawyer', 'lawyer-for-foreigners', 'corporate-lawyer'],
    parent: { path: '/civil-law', text: t('محامي القانون المدني والعقارات في مصر', 'Civil and property law services in Egypt') },
  }),

  // ───────────────────────── 3. Immigration / residency
  make({
    slug: 'immigration-lawyer',
    topic: t('قضايا الهجرة والإقامة والجنسية', 'Immigration, Residency and Nationality Matters'),
    name: t('محامي هجرة وإقامات في الإسكندرية', 'Immigration Lawyer in Alexandria'),
    seoTitle: t('محامي هجرة وإقامات في الإسكندرية | جنسية وتصاريح عمل | كريم الديب', 'Immigration & Residency Lawyer in Alexandria, Egypt | Karim Eldib'),
    seoDescription: t(
      'محامي هجرة في الإسكندرية: إقامات الأجانب وتجديدها، تصاريح العمل، الجنسية المصرية، وتجهيز وتصديق مستندات ملفات الهجرة للخارج. اتصل 01223767592.',
      'Immigration lawyer in Alexandria, Egypt: residence permits and renewals, work permits, Egyptian nationality, and legalising documents for visa and emigration files.'
    ),
    h1: t('محامي هجرة وإقامات في الإسكندرية', 'Immigration and Residency Lawyer in Alexandria, Egypt'),
    subtitle: t('إقامات الأجانب، الجنسية، وتجهيز مستندات الهجرة للخارج', 'Residence permits, nationality, and document preparation for emigration files'),
    intro: [
      t(
        'كلمة "محامي هجرة" تعني أمرين مختلفين، ونحن نعمل في الاثنين: الأجنبي الذي يريد الإقامة أو العمل أو الجنسية في مصر، والمصري الذي يجهز ملف هجرة أو لمّ شمل لدولة أخرى ويحتاج مستندات مصرية صحيحة ومصدّقة.',
        'People mean two different things by "immigration lawyer", and we do both: foreigners who want to live, work or obtain nationality in Egypt, and Egyptians preparing an emigration or family-reunion file for another country who need correct, legalised Egyptian documents.'
      ),
      t(
        'نوضح من البداية حدود دورنا: نحن محامون مصريون، فنتولى كل ما يخص الجهات والمحاكم المصرية، ولا نقدم مشورة في قوانين الهجرة الأجنبية بدلاً من محامٍ مرخص في تلك الدولة.',
        'We are clear about our role from the start: we are Egyptian lawyers, so we handle everything involving Egyptian authorities and courts, and we do not give advice on foreign immigration law in place of a lawyer licensed in that country.'
      ),
    ],
    services: [
      {
        title: t('إقامات الأجانب في مصر', 'Residence permits in Egypt'),
        text: t(
          'استخراج وتجديد الإقامة للزواج من مصري، للدراسة، للاستثمار أو تملك عقار، ومعالجة مخالفات الإقامة والغرامات.',
          'Obtaining and renewing residence based on marriage to an Egyptian, study, investment or property ownership, and resolving overstay violations and fines.'
        ),
      },
      {
        title: t('تصاريح العمل', 'Work permits'),
        text: t(
          'تصاريح عمل الأجانب لدى الشركات المصرية، وما يرتبط بها من موافقات، وتجديدها في المواعيد.',
          'Work permits for foreigners employed by Egyptian companies, the related approvals, and timely renewals.'
        ),
      },
      {
        title: t('الجنسية المصرية', 'Egyptian nationality'),
        text: t(
          'طلبات الجنسية لأبناء الأم المصرية ولزوجة المصري، وإثبات الجنسية، والإذن بالتجنس بجنسية أجنبية مع الاحتفاظ بالمصرية.',
          'Nationality applications for children of an Egyptian mother and for the wife of an Egyptian, proof of nationality, and permission to acquire a foreign nationality while keeping the Egyptian one.'
        ),
      },
      {
        title: t('مستندات ملفات الهجرة للخارج', 'Documents for emigration files'),
        text: t(
          'استخراج وتصحيح شهادات الميلاد والزواج والطلاق والقيد العائلي، صحيفة الحالة الجنائية، أحكام الحضانة والإذن بسفر القاصر، وتصديقها من الخارجية.',
          'Obtaining and correcting birth, marriage, divorce and family records, police clearance certificates, custody judgments and travel consent for minors, and legalising them at the Ministry of Foreign Affairs.'
        ),
      },
    ],
    courts: [
      t(
        'ينظم دخول وإقامة الأجانب القانون رقم 89 لسنة 1960، وتنظم الجنسية أحكام القانون رقم 26 لسنة 1975 وتعديلاته. الجهة المختصة هي الإدارة العامة للجوازات والهجرة والجنسية ومكاتبها بالإسكندرية.',
        'Entry and residence of foreigners is governed by Law 89 of 1960 and nationality by Law 26 of 1975 as amended. The competent authority is the General Administration of Passports, Immigration and Nationality and its Alexandria offices.'
      ),
      t(
        'القرارات الإدارية برفض الإقامة أو الجنسية أو بالإبعاد يُطعن عليها أمام محكمة القضاء الإداري بمجلس الدولة، وللطعن مواعيد قصيرة يجب عدم تفويتها.',
        'Administrative decisions refusing residence or nationality, or ordering removal, are challenged before the Administrative Court of the State Council, within short deadlines that must not be missed.'
      ),
    ],
    steps: [
      { title: t('تحديد نوع الطلب', 'Identifying the right application'), text: t('نحدد السند القانوني الأنسب لحالتك والمستندات المطلوبة له.', 'We identify the legal basis that best fits your case and the documents it needs.') },
      { title: t('تجهيز وترجمة المستندات', 'Preparing and translating documents'), text: t('نجمع المستندات ونرتب ترجمتها وتصديقها.', 'We gather the documents and arrange translation and legalisation.') },
      { title: t('التقديم والمتابعة', 'Filing and follow-up'), text: t('نقدم الطلب ونتابع مع الجهة المختصة حتى صدور القرار.', 'We file the application and follow it with the authority until a decision is issued.') },
      { title: t('التظلم أو الطعن', 'Grievance or appeal'), text: t('عند الرفض نقدم تظلماً أو طعناً قضائياً في الميعاد.', 'If refused, we lodge a grievance or a court challenge in time.') },
    ],
    faq: [
      {
        q: t('هل تساعدون في الحصول على فيزا هجرة لكندا أو أوروبا؟', 'Do you help obtain immigration visas for Canada or Europe?'),
        a: t(
          'نجهز ونصحح ونصدّق المستندات المصرية المطلوبة للملف، ونحل ما يعطله من مشاكل قانونية داخل مصر. أما تقييم فرصك وفق قانون الدولة الأخرى فيقدمه مستشار مرخص هناك.',
          'We prepare, correct and legalise the Egyptian documents the file needs and resolve legal obstacles inside Egypt. Assessing your chances under the other country’s law is for an adviser licensed there.'
        ),
      },
      {
        q: t('انتهت إقامتي في مصر، ماذا أفعل؟', 'My residence permit in Egypt has expired. What should I do?'),
        a: t(
          'تواصل معنا قبل السفر أو التقدم بطلب جديد؛ في أغلب الحالات تُسوّى المخالفة بسداد غرامة ثم يُجدد الطلب، والتأخير يزيد التعقيد.',
          'Contact us before travelling or filing a new application. In most cases the violation is settled by paying a fine and then renewing; delay only makes it harder.'
        ),
      },
      {
        q: t('هل يحصل أبناء الأم المصرية على الجنسية؟', 'Do children of an Egyptian mother get nationality?'),
        a: t(
          'نعم، يقر القانون حق أبناء الأم المصرية في الجنسية، وتختلف الإجراءات بحسب تاريخ الميلاد. نراجع حالتك ونقدم الطلب المناسب.',
          'Yes. The law recognises their right to nationality, and the procedure varies with the date of birth. We review your case and file the appropriate application.'
        ),
      },
    ],
    related: ['lawyer-for-foreigners', 'family-lawyer', 'international-lawyer'],
    parent: { path: '/foreigners-in-egypt', text: t('خدمات الأجانب والإقامات في مصر', 'Legal services for foreigners in Egypt') },
  }),

  // ───────────────────────── 4. Civil
  make({
    slug: 'civil-lawyer',
    topic: t('القضايا المدنية', 'Civil Cases'),
    name: t('محامي مدني في الإسكندرية', 'Civil Lawyer in Alexandria'),
    seoTitle: t('محامي مدني في الإسكندرية | تعويضات وعقود وميراث | كريم الديب', 'Civil Litigation Lawyer in Alexandria, Egypt | Karim Eldib'),
    seoDescription: t(
      'محامي مدني في الإسكندرية: دعاوى التعويض، منازعات العقود والديون، الميراث وقسمة التركات، وتنفيذ الأحكام أمام محاكم الإسكندرية. اتصل 01223767592.',
      'Civil lawyer in Alexandria, Egypt: compensation claims, contract and debt disputes, inheritance and estate division, and enforcement of judgments before the Alexandria courts.'
    ),
    h1: t('محامي مدني في الإسكندرية', 'Civil Litigation Lawyer in Alexandria, Egypt'),
    subtitle: t('تعويضات، عقود، ديون وميراث أمام محاكم الإسكندرية المدنية', 'Compensation, contracts, debts and inheritance before the Alexandria civil courts'),
    intro: [
      t(
        'الدعوى المدنية تُكسب بالمستند قبل المرافعة. لذلك نبدأ بسؤال واحد: ما الذي تستطيع إثباته؟ ثم نبني عليه الطلبات، ونستبعد ما لا سند له حتى لا تدفع رسوماً وأتعاباً على مطالبة ضعيفة.',
        'Civil cases are won on documents before they are won in argument. So we start with one question: what can you prove? We build the claim on that and drop what has no support, so you do not pay fees on a weak demand.'
      ),
      t(
        'يتولى مكتبنا في الإسكندرية الدعاوى المدنية للأفراد والشركات، مدعين ومدعى عليهم، من الإنذار الأول حتى تنفيذ الحكم.',
        'Our Alexandria office handles civil claims for individuals and companies, as claimant or defendant, from the first formal notice through to enforcement.'
      ),
    ],
    services: [
      {
        title: t('دعاوى التعويض', 'Compensation claims'),
        text: t(
          'التعويض عن حوادث السيارات والإصابات، الأخطاء الطبية، الإخلال بالعقود، والتعويض عن الضرر الأدبي.',
          'Compensation for road accidents and injuries, medical negligence, breach of contract, and moral damages.'
        ),
      },
      {
        title: t('منازعات العقود والديون', 'Contract and debt disputes'),
        text: t(
          'الفسخ والتنفيذ العيني، المطالبة بالديون وإيصالات الأمانة، أوامر الأداء، والحجز التحفظي على أموال المدين.',
          'Rescission and specific performance, recovery of debts and trust receipts, payment orders, and precautionary attachment of the debtor’s assets.'
        ),
      },
      {
        title: t('الميراث وقسمة التركات', 'Inheritance and estate division'),
        text: t(
          'إعلام الوراثة، قسمة التركة رضاءً أو قضاءً، دعاوى الفرز والتجنيب، والطعن في الوصايا والتصرفات الصورية.',
          'Declarations of heirs, division of estates by agreement or by court, partition claims, and challenges to wills and sham transfers.'
        ),
      },
      {
        title: t('تنفيذ الأحكام', 'Enforcement of judgments'),
        text: t(
          'اتخاذ إجراءات التنفيذ والحجز والبيع، ومنازعات التنفيذ والإشكالات.',
          'Enforcement, attachment and sale procedures, and enforcement disputes and objections.'
        ),
      },
    ],
    courts: [
      t(
        'تُرفع الدعاوى المدنية أمام المحاكم الجزئية أو محكمة الإسكندرية الابتدائية بحسب قيمة النزاع، وتُستأنف أمام محكمة استئناف الإسكندرية. يحكم الموضوع القانون المدني رقم 131 لسنة 1948، والإجراءات قانون المرافعات رقم 13 لسنة 1968، والإثبات القانون رقم 25 لسنة 1968.',
        'Civil claims go to the district courts or the Alexandria Primary Court according to their value, with appeals to the Alexandria Court of Appeal. The merits are governed by the Civil Code (Law 131 of 1948), procedure by Law 13 of 1968 and evidence by Law 25 of 1968.'
      ),
      t(
        'للحقوق المدنية مدد تقادم تختلف بحسب نوع الحق، وبعضها قصير. لذلك لا تؤجل استشارة المحامي إذا كان النزاع قائماً منذ سنوات.',
        'Civil rights are subject to limitation periods that vary by type of right, and some are short. Do not delay taking advice if the dispute has been running for years.'
      ),
    ],
    steps: [
      { title: t('مراجعة المستندات', 'Reviewing the documents'), text: t('نفحص العقود والإيصالات والمراسلات ونقيّم قوة الموقف.', 'We examine contracts, receipts and correspondence and assess the strength of your position.') },
      { title: t('الإنذار ومحاولة التسوية', 'Notice and settlement attempt'), text: t('نوجه إنذاراً رسمياً ونفاوض متى كان ذلك أسرع وأقل تكلفة.', 'We serve formal notice and negotiate where that is quicker and cheaper.') },
      { title: t('التقاضي', 'Litigation'), text: t('نرفع الدعوى ونتابع الخبراء والجلسات حتى الحكم.', 'We file the claim and follow experts and hearings through to judgment.') },
      { title: t('التنفيذ', 'Enforcement'), text: t('نحصل على الصيغة التنفيذية ونباشر التنفيذ.', 'We obtain the enforceable copy and carry out enforcement.') },
    ],
    faq: [
      {
        q: t('كم تستغرق الدعوى المدنية في الإسكندرية؟', 'How long does a civil case take in Alexandria?'),
        a: t(
          'تتوقف على نوع الدعوى وهل تُحال لخبير. الدعاوى البسيطة قد تنتهي خلال أشهر، والدعاوى التي تحتاج خبرة فنية تطول أكثر. نعطيك تقديراً بعد دراسة الملف.',
          'It depends on the type of claim and whether an expert is appointed. Simple claims may finish within months; those needing expert evidence take longer. We give an estimate after studying the file.'
        ),
      },
      {
        q: t('هل أستطيع المطالبة بدين ثابت بإيصال أمانة؟', 'Can I claim a debt evidenced by a trust receipt?'),
        a: t(
          'نعم. نختار معك الطريق الأنسب، مدنياً أو جنائياً، بحسب صيغة الإيصال وظروف تحريره.',
          'Yes. We choose the most suitable route with you, civil or criminal, depending on the wording of the receipt and how it came to be signed.'
        ),
      },
      {
        q: t('هل يجب حضوري جلسات الدعوى؟', 'Do I have to attend the hearings?'),
        a: t(
          'في الغالب لا؛ يحضر المحامي بتوكيل رسمي، ولا يُطلب حضورك إلا في حالات محددة كالاستجواب أو اليمين.',
          'Usually not. The lawyer appears under a power of attorney, and you are only required in specific situations such as examination or taking an oath.'
        ),
      },
    ],
    related: ['real-estate-lawyer', 'commercial-lawyer', 'family-lawyer'],
    parent: { path: '/civil-law', text: t('محامي القانون المدني في مصر', 'Civil law services in Egypt') },
  }),

  // ───────────────────────── 5. Commercial
  make({
    slug: 'commercial-lawyer',
    topic: t('القضايا التجارية', 'Commercial Cases'),
    name: t('محامي تجاري في الإسكندرية', 'Commercial Lawyer in Alexandria'),
    seoTitle: t('محامي تجاري في الإسكندرية | عقود وشيكات ومحكمة اقتصادية | كريم الديب', 'Commercial Lawyer in Alexandria, Egypt | Karim Eldib'),
    seoDescription: t(
      'محامي تجاري في الإسكندرية: عقود التوريد والوكالات، الشيكات وتحصيل الديون التجارية، الإفلاس وإعادة الهيكلة، والتقاضي أمام المحكمة الاقتصادية.',
      'Commercial lawyer in Alexandria, Egypt: supply and agency contracts, cheques and commercial debt recovery, insolvency and restructuring, and Economic Court litigation.'
    ),
    h1: t('محامي تجاري في الإسكندرية', 'Commercial Lawyer in Alexandria, Egypt'),
    subtitle: t('عقود تجارية، تحصيل ديون، ومنازعات أمام المحكمة الاقتصادية', 'Commercial contracts, debt recovery and Economic Court disputes'),
    intro: [
      t(
        'الإسكندرية مدينة تجارة وميناء، ومعظم منازعاتها التجارية تدور حول بضاعة لم تُسلّم، ثمن لم يُدفع، أو شيك بلا رصيد. نعمل مع التجار والمستوردين والمصانع وشركات الخدمات على منع هذه المنازعات بعقود محكمة، وعلى حسمها بسرعة إذا وقعت.',
        'Alexandria is a trading and port city, and most of its commercial disputes come down to goods not delivered, a price not paid, or a bounced cheque. We work with traders, importers, manufacturers and service companies to prevent those disputes with tight contracts and to resolve them quickly when they arise.'
      ),
      t(
        'نصوغ العقود بالعربية والإنجليزية، ونراجع شروط الاختصاص والتحكيم فيها، لأن الشرط الذي يحدد أين يُفصل النزاع قد يكون أهم بند في العقد كله.',
        'We draft contracts in Arabic and English and review their jurisdiction and arbitration clauses, because the clause that decides where a dispute is heard can be the most important term in the whole contract.'
      ),
    ],
    services: [
      {
        title: t('العقود التجارية', 'Commercial contracts'),
        text: t(
          'عقود التوريد والتوزيع والوكالة التجارية والامتياز (الفرنشايز) والنقل والتخزين، بالعربية والإنجليزية.',
          'Supply, distribution, commercial agency, franchise, carriage and warehousing contracts, in Arabic and English.'
        ),
      },
      {
        title: t('الشيكات وتحصيل الديون التجارية', 'Cheques and commercial debt recovery'),
        text: t(
          'الإجراءات الجنائية والمدنية في الشيكات المرتدة، أوامر الأداء، الحجز التحفظي، والتسويات المجدولة.',
          'Criminal and civil action on dishonoured cheques, payment orders, precautionary attachment, and scheduled settlements.'
        ),
      },
      {
        title: t('الإفلاس وإعادة الهيكلة', 'Insolvency and restructuring'),
        text: t(
          'طلبات إعادة الهيكلة والصلح الواقي من الإفلاس، وتمثيل الدائنين في إجراءات الإفلاس.',
          'Restructuring and preventive composition applications, and representing creditors in bankruptcy proceedings.'
        ),
      },
      {
        title: t('منازعات الجمارك والتجارة الخارجية', 'Customs and foreign trade disputes'),
        text: t(
          'التظلم من التقدير الجمركي والغرامات، ومنازعات الإفراج عن البضائع بميناء الإسكندرية والدخيلة.',
          'Challenging customs valuations and fines, and disputes over release of goods at Alexandria and Dekheila ports.'
        ),
      },
    ],
    courts: [
      t(
        'تختص المحكمة الاقتصادية بالإسكندرية، المنشأة بالقانون رقم 120 لسنة 2008، بطائفة واسعة من المنازعات التجارية ومنها ما ينشأ عن قوانين التجارة والشركات والإفلاس وحماية المنافسة. وتسبق نظر الدعوى مرحلة تحضير تتيح محاولة الصلح.',
        'The Alexandria Economic Court, created by Law 120 of 2008, hears a wide range of commercial disputes, including those arising under the trade, companies, insolvency and competition laws. A preparation stage before the hearing allows a settlement attempt.'
      ),
      t(
        'يحكم المعاملات التجارية قانون التجارة رقم 17 لسنة 1999، وتنظم إعادة الهيكلة والصلح الواقي والإفلاس أحكام القانون رقم 11 لسنة 2018.',
        'Commercial dealings are governed by the Trade Law 17 of 1999, and restructuring, preventive composition and bankruptcy by Law 11 of 2018.'
      ),
    ],
    steps: [
      { title: t('فهم الصفقة', 'Understanding the deal'), text: t('نفهم طبيعة النشاط والمخاطر الفعلية قبل صياغة أي بند.', 'We learn the business and its real risks before drafting a single clause.') },
      { title: t('الصياغة أو المطالبة', 'Drafting or claiming'), text: t('نصوغ العقد، أو نوجه مطالبة رسمية إذا وقع الإخلال.', 'We draft the contract, or issue a formal demand where a breach has occurred.') },
      { title: t('التفاوض', 'Negotiation'), text: t('نفاوض على تسوية تحفظ العلاقة التجارية متى أمكن.', 'We negotiate a settlement that preserves the business relationship where possible.') },
      { title: t('التقاضي أو التحكيم', 'Litigation or arbitration'), text: t('نلجأ للمحكمة الاقتصادية أو التحكيم بحسب شرط العقد.', 'We go to the Economic Court or to arbitration, as the contract provides.') },
    ],
    faq: [
      {
        q: t('ما الفرق بين المحكمة الاقتصادية والمحكمة المدنية؟', 'What is the difference between the Economic Court and the civil courts?'),
        a: t(
          'المحكمة الاقتصادية متخصصة في منازعات حددها القانون على سبيل الحصر وتتميز بمرحلة تحضير وقضاة متخصصين. نحدد لك المحكمة المختصة بنزاعك قبل رفع الدعوى.',
          'The Economic Court specialises in disputes listed by statute and has a preparation stage and specialist judges. We confirm which court has jurisdiction over your dispute before filing.'
        ),
      },
      {
        q: t('لدي شيك مرتد، ما أسرع طريق لتحصيله؟', 'I hold a bounced cheque. What is the quickest way to recover it?'),
        a: t(
          'يتوقف على بيانات الشيك وتاريخه. غالباً نجمع بين الإجراء الجنائي والمطالبة المدنية، وكثير من الحالات تنتهي بالسداد قبل الحكم.',
          'It depends on the cheque’s details and date. We usually combine the criminal route with a civil claim, and many cases end in payment before judgment.'
        ),
      },
      {
        q: t('هل تراجعون عقوداً مكتوبة بالإنجليزية؟', 'Do you review contracts written in English?'),
        a: t(
          'نعم، نراجع ونصوغ العقود بالإنجليزية والفرنسية والإيطالية، ونوضح أثر كل بند وفق القانون المصري.',
          'Yes. We review and draft contracts in English, French and Italian and explain how each clause operates under Egyptian law.'
        ),
      },
    ],
    related: ['corporate-lawyer', 'maritime-arbitration-lawyer', 'international-arbitration-lawyer'],
    parent: { path: '/commercial-law', text: t('محامي القانون التجاري في مصر', 'Commercial law services in Egypt') },
  }),

  // ───────────────────────── 6. Corporate
  make({
    slug: 'corporate-lawyer',
    topic: t('شؤون الشركات', 'Corporate Matters'),
    name: t('محامي شركات في الإسكندرية', 'Corporate Lawyer in Alexandria'),
    seoTitle: t('محامي شركات في الإسكندرية | تأسيس شركات وعقود شركاء | كريم الديب', 'Corporate Lawyer in Alexandria, Egypt | Company Formation | Karim Eldib'),
    seoDescription: t(
      'محامي شركات في الإسكندرية: تأسيس شركات للمصريين والأجانب، سجل تجاري وبطاقة ضريبية، عقود الشركاء، تعديل وتصفية الشركات ومنازعات الشركاء.',
      'Corporate lawyer in Alexandria, Egypt: company formation for Egyptians and foreigners, commercial registration, shareholder agreements, amendments, liquidation and partner disputes.'
    ),
    h1: t('محامي شركات في الإسكندرية', 'Corporate Lawyer in Alexandria, Egypt'),
    subtitle: t('تأسيس الشركات، عقود الشركاء، والتعديل والتصفية', 'Company formation, shareholder agreements, amendments and liquidation'),
    intro: [
      t(
        'اختيار الشكل القانوني للشركة قرار له أثر سنوات: على مسؤولية الشركاء عن الديون، على الضرائب، وعلى سهولة دخول شريك جديد أو خروج شريك. نساعدك على اختيار الشكل المناسب لنشاطك قبل أن نبدأ الإجراءات.',
        'The legal form of a company is a decision with years of consequences: partners’ liability for debts, tax, and how easily a partner can join or leave. We help you choose the right form for your business before we start the paperwork.'
      ),
      t(
        'نؤسس الشركات في الإسكندرية للمصريين وللمستثمرين الأجانب، وفي المناطق الحرة والاستثمارية، ونبقى مستشاراً قانونياً للشركة بعد التأسيس لمن يرغب.',
        'We set up companies in Alexandria for Egyptians and foreign investors, including in the free and investment zones, and stay on as the company’s legal adviser after formation for those who want it.'
      ),
    ],
    services: [
      {
        title: t('تأسيس الشركات', 'Company formation'),
        text: t(
          'ذات مسؤولية محدودة، شركة الشخص الواحد، مساهمة، فروع الشركات الأجنبية ومكاتب التمثيل، حتى استخراج السجل التجاري والبطاقة الضريبية.',
          'Limited liability companies, one-person companies, joint stock companies, branches of foreign companies and representative offices, through to the commercial register and tax card.'
        ),
      },
      {
        title: t('عقود الشركاء والحوكمة', 'Shareholder agreements and governance'),
        text: t(
          'اتفاقيات الشركاء، صلاحيات الإدارة والتوقيع، قواعد توزيع الأرباح، وآليات خروج الشريك وحل الخلافات.',
          'Shareholder agreements, management and signature powers, profit distribution rules, and exit and deadlock mechanisms.'
        ),
      },
      {
        title: t('تعديل الشركات', 'Company amendments'),
        text: t(
          'زيادة وتخفيض رأس المال، دخول وخروج الشركاء، تغيير النشاط أو المقر أو المدير، والاندماج وتغيير الشكل القانوني.',
          'Capital increases and reductions, entry and exit of partners, changes of activity, address or manager, mergers and conversions.'
        ),
      },
      {
        title: t('منازعات الشركاء والتصفية', 'Partner disputes and liquidation'),
        text: t(
          'دعاوى عزل المدير والمحاسبة، بطلان قرارات الجمعية، وتصفية الشركة وشطب السجل.',
          'Claims to remove a manager and for an account, annulment of general meeting resolutions, and liquidation and deregistration.'
        ),
      },
    ],
    courts: [
      t(
        'تخضع شركات الأموال لقانون الشركات رقم 159 لسنة 1981 وتعديلاته، ومنها ما أجاز شركة الشخص الواحد، وتمنح أحكام قانون الاستثمار رقم 72 لسنة 2017 ضمانات وحوافز للمشروعات الخاضعة له. يتم التأسيس عبر الهيئة العامة للاستثمار والمناطق الحرة ومركز خدمات المستثمرين.',
        'Capital companies are governed by the Companies Law 159 of 1981 as amended, including the amendment that introduced the one-person company, and the Investment Law 72 of 2017 gives guarantees and incentives to qualifying projects. Formation runs through the General Authority for Investment and Free Zones (GAFI) and its investor service centre.'
      ),
      t(
        'منازعات الشركات والشركاء تدخل في الغالب في اختصاص المحكمة الاقتصادية بالإسكندرية، ما لم يتضمن عقد الشركة شرط تحكيم.',
        'Company and partner disputes generally fall within the jurisdiction of the Alexandria Economic Court, unless the company’s articles contain an arbitration clause.'
      ),
    ],
    steps: [
      { title: t('اختيار الشكل القانوني', 'Choosing the legal form'), text: t('نقارن الأشكال المتاحة وفق نشاطك وعدد الشركاء ورأس المال.', 'We compare the available forms against your activity, number of partners and capital.') },
      { title: t('إعداد عقد التأسيس', 'Preparing the articles'), text: t('نصوغ العقد والنظام الأساسي ونعتمدهما من الجهة المختصة.', 'We draft the articles and have them approved by the competent authority.') },
      { title: t('القيد والتراخيص', 'Registration and licences'), text: t('نستخرج السجل التجاري والبطاقة الضريبية والتراخيص اللازمة للنشاط.', 'We obtain the commercial register, tax card and the licences the activity requires.') },
      { title: t('المتابعة بعد التأسيس', 'Post-formation support'), text: t('نتولى الجمعيات والتعديلات والعقود لمن يتعاقد على ذلك.', 'We handle meetings, amendments and contracts for clients who retain us.') },
    ],
    faq: [
      {
        q: t('هل يستطيع الأجنبي تأسيس شركة يملكها بالكامل في مصر؟', 'Can a foreigner fully own a company in Egypt?'),
        a: t(
          'نعم في أغلب الأنشطة، مع استثناءات محددة مثل نشاط الاستيراد بغرض الاتجار وبعض المناطق. نراجع نشاطك تحديداً قبل التأسيس.',
          'Yes for most activities, with specific exceptions such as importing for trading purposes and certain areas. We check your particular activity before formation.'
        ),
      },
      {
        q: t('كم يستغرق تأسيس شركة في الإسكندرية؟', 'How long does company formation take in Alexandria?'),
        a: t(
          'إذا كانت المستندات كاملة تنتهي الإجراءات الأساسية خلال أيام عمل معدودة، وقد تطول إذا احتاج النشاط موافقات أمنية أو تراخيص خاصة.',
          'With complete documents, the core steps take a few working days. It takes longer where the activity needs security clearance or special licences.'
        ),
      },
      {
        q: t('ما الفرق بين شركة الشخص الواحد والمنشأة الفردية؟', 'How does a one-person company differ from a sole proprietorship?'),
        a: t(
          'في شركة الشخص الواحد تقتصر مسؤوليتك على رأس مال الشركة، أما في المنشأة الفردية فتُسأل عن ديونها في كل أموالك.',
          'In a one-person company your liability is limited to the company’s capital; in a sole proprietorship you answer for its debts with all your assets.'
        ),
      },
    ],
    related: ['commercial-lawyer', 'lawyer-for-foreigners', 'international-arbitration-lawyer'],
    parent: { path: '/company-law', text: t('محامي قانون الشركات في مصر', 'Company law services in Egypt') },
  }),

  // ───────────────────────── 7. Foreigners
  make({
    slug: 'lawyer-for-foreigners',
    topic: t('قضايا الأجانب', 'Legal Matters for Foreigners'),
    name: t('محامي أجانب في الإسكندرية', 'Lawyer for Foreigners in Alexandria'),
    seoTitle: t('محامي أجانب في الإسكندرية | يتحدث الإنجليزية والفرنسية | كريم الديب', 'English-Speaking Lawyer for Foreigners in Alexandria, Egypt'),
    seoDescription: t(
      'محامي أجانب في الإسكندرية يتحدث الإنجليزية والفرنسية والإيطالية: إقامات، زواج وطلاق، شراء عقارات، شركات، وتمثيل أمام الشرطة والمحاكم.',
      'English-speaking lawyer for foreigners in Alexandria, Egypt. Residency, marriage and divorce, property purchase, companies, and representation before police and courts. French and Italian also spoken.'
    ),
    h1: t('محامي أجانب في الإسكندرية', 'Lawyer for Foreigners and Expats in Alexandria, Egypt'),
    subtitle: t('خدمة قانونية بالإنجليزية والفرنسية والإيطالية للمقيمين والزائرين', 'Legal help in English, French and Italian for residents and visitors'),
    intro: [
      t(
        'أصعب ما يواجه الأجنبي في مصر ليس القانون نفسه، بل أن كل شيء مكتوب بالعربية ويجري في جهات لا يعرف نظامها. نشرح لك موقفك بلغتك، ونترجم لك كل ما توقّع عليه قبل أن توقّعه.',
        'The hardest part for a foreigner in Egypt is not the law itself but that everything is written in Arabic and handled by offices whose system is unfamiliar. We explain your position in your language and translate everything you sign before you sign it.'
      ),
      t(
        'نخدم الأجانب المقيمين في الإسكندرية والساحل الشمالي، والعاملين في الشركات والقنصليات والجامعات، وأزواج وزوجات المصريين، والزائرين الذين تقع لهم مشكلة طارئة.',
        'We act for foreigners living in Alexandria and on the North Coast, staff of companies, consulates and universities, spouses of Egyptians, and visitors who run into an urgent problem.'
      ),
    ],
    services: [
      {
        title: t('الإقامة وتصاريح العمل', 'Residency and work permits'),
        text: t(
          'استخراج وتجديد الإقامة بأنواعها وتصاريح العمل، وتسوية مخالفات تجاوز مدة الإقامة.',
          'Obtaining and renewing all types of residence and work permits, and settling overstay violations.'
        ),
      },
      {
        title: t('الزواج والطلاق والحضانة', 'Marriage, divorce and custody'),
        text: t(
          'توثيق زواج الأجانب في مصر، الطلاق عند اختلاف الجنسية، والحضانة وسفر الأبناء.',
          'Registering a marriage involving a foreigner in Egypt, divorce between different nationalities, and custody and children’s travel.'
        ),
      },
      {
        title: t('شراء العقارات والاستثمار', 'Buying property and investing'),
        text: t(
          'فحص الملكية، مراجعة العقود، التسجيل، وتأسيس الشركات للمستثمر الأجنبي.',
          'Title checks, contract review, registration, and company formation for foreign investors.'
        ),
      },
      {
        title: t('المساعدة العاجلة أمام الشرطة والنيابة', 'Urgent help with police and prosecution'),
        text: t(
          'الحضور مع الأجنبي عند القبض أو التحقيق أو تحرير محضر، والتواصل مع قنصليته عند طلبه.',
          'Attending with a foreigner on arrest, during questioning or when a report is filed, and contacting their consulate if they ask.'
        ),
      },
    ],
    courts: [
      t(
        'يتعامل الأجنبي في الإسكندرية مع مكاتب الجوازات والهجرة، والشهر العقاري والتوثيق، ومحاكم الأسرة والمحاكم المدنية والجنائية. لغة المحاكم هي العربية، وأي مستند أجنبي يحتاج ترجمة معتمدة وتصديقاً قبل تقديمه.',
        'In Alexandria a foreigner deals with the Passports and Immigration offices, the Real Estate Registry and Notary, and the family, civil and criminal courts. The courts work in Arabic, and any foreign document needs certified translation and legalisation before it is filed.'
      ),
      t(
        'تحدد قواعد الإسناد في القانون المدني المصري القانون الواجب التطبيق في مسائل الزواج والميراث والعقود ذات العنصر الأجنبي، وقد يطبق القاضي المصري قانون جنسيتك في بعض المسائل.',
        'The conflict-of-laws rules in the Egyptian Civil Code determine which law applies to marriage, inheritance and contracts with a foreign element, and in some matters the Egyptian judge may apply the law of your nationality.'
      ),
    ],
    steps: [
      { title: t('استشارة بلغتك', 'Consultation in your language'), text: t('نستمع للمشكلة ونشرح الخيارات والتكلفة بوضوح.', 'We listen to the problem and explain the options and cost clearly.') },
      { title: t('التوكيل', 'Power of attorney'), text: t('نرتب توكيلاً رسمياً يحدد ما نمثلك فيه.', 'We arrange a formal power of attorney defining what we may do for you.') },
      { title: t('التنفيذ والمتابعة', 'Action and follow-up'), text: t('نباشر الإجراءات ونرسل لك تحديثات مكتوبة.', 'We carry out the procedures and send you written updates.') },
      { title: t('تسليم المستندات', 'Delivering the documents'), text: t('نسلمك المستندات النهائية مترجمة ومصدقة عند الحاجة.', 'We hand over the final documents, translated and legalised where needed.') },
    ],
    faq: [
      {
        q: t('هل يوجد محامي يتحدث الإنجليزية في الإسكندرية؟', 'Is there an English-speaking lawyer in Alexandria?'),
        a: t(
          'نعم، نقدم الاستشارات ونتابع القضايا بالإنجليزية والفرنسية والإيطالية إلى جانب العربية.',
          'Yes. We advise and run cases in English, French and Italian as well as Arabic.'
        ),
      },
      {
        q: t('هل يستطيع الأجنبي تملك عقار في الإسكندرية؟', 'Can a foreigner own property in Alexandria?'),
        a: t(
          'نعم، وفق قيود يحددها القانون على عدد العقارات ومساحتها والغرض منها. نراجع حالتك قبل التعاقد.',
          'Yes, within statutory limits on the number, area and purpose of the properties. We review your case before you commit.'
        ),
      },
      {
        q: t('تم القبض على قريب لي أجنبي في الإسكندرية، ماذا أفعل؟', 'A foreign relative has been arrested in Alexandria. What should I do?'),
        a: t(
          'اتصل بنا فوراً على 01223767592. نحضر معه التحقيق ونتابع موقفه القانوني ونبلغ قنصليته إذا رغب.',
          'Call us straight away on +20 122 376 7592. We attend the questioning, follow their legal position and notify their consulate if they wish.'
        ),
      },
    ],
    related: ['immigration-lawyer', 'family-lawyer', 'real-estate-lawyer'],
    parent: { path: '/foreigners-in-egypt', text: t('محامي الأجانب والمستثمرين في مصر', 'Legal services for foreigners in Egypt') },
  }),

  // ───────────────────────── 8. International
  make({
    slug: 'international-lawyer',
    topic: t('القضايا ذات العنصر الدولي', 'Cross-Border Matters'),
    name: t('محامي دولي في الإسكندرية', 'International Lawyer in Alexandria'),
    seoTitle: t('محامي دولي في الإسكندرية | قضايا عابرة للحدود | كريم الديب', 'International Lawyer in Alexandria, Egypt | Cross-Border Cases'),
    seoDescription: t(
      'محامي دولي في الإسكندرية: تنفيذ الأحكام الأجنبية في مصر، العقود الدولية، منازعات المصريين بالخارج، وتصديق المستندات. نعمل بأربع لغات.',
      'International lawyer in Alexandria, Egypt: enforcing foreign judgments in Egypt, international contracts, disputes involving Egyptians abroad, and document legalisation. Four working languages.'
    ),
    h1: t('محامي دولي في الإسكندرية', 'International Lawyer in Alexandria, Egypt'),
    subtitle: t('قضايا وعقود عابرة للحدود بين مصر والخارج', 'Cross-border cases and contracts between Egypt and abroad'),
    intro: [
      t(
        'القضية "الدولية" هي كل نزاع فيه طرف أجنبي، أو مال خارج مصر، أو حكم صدر في دولة ويراد تنفيذه في أخرى. هذه القضايا تبدأ بسؤالين قبل أي شيء: أي محكمة مختصة، وأي قانون يطبق؟ والإجابة الخاطئة تضيّع سنوات.',
        'An "international" case is any dispute with a foreign party, assets outside Egypt, or a judgment given in one country to be enforced in another. These cases start with two questions before anything else: which court has jurisdiction, and which law applies? A wrong answer costs years.'
      ),
      t(
        'نمثل الشركات والأفراد الأجانب أمام المحاكم المصرية، وننسق مع محامين في الخارج عندما يحتاج الملف إجراءً في دولة أخرى، ونعمل مباشرة بالعربية والإنجليزية والفرنسية والإيطالية.',
        'We represent foreign companies and individuals before the Egyptian courts, coordinate with lawyers abroad when a file needs action in another country, and work directly in Arabic, English, French and Italian.'
      ),
    ],
    services: [
      {
        title: t('تنفيذ الأحكام الأجنبية في مصر', 'Enforcing foreign judgments in Egypt'),
        text: t(
          'دعاوى الأمر بتنفيذ الأحكام والأوامر الصادرة من محاكم أجنبية، مدنية وتجارية وأحوال شخصية.',
          'Applications for an order to enforce judgments and orders of foreign courts in civil, commercial and family matters.'
        ),
      },
      {
        title: t('العقود الدولية', 'International contracts'),
        text: t(
          'صياغة ومراجعة عقود البيع الدولي والتوزيع والخدمات، واختيار القانون الحاكم وجهة فض النزاع.',
          'Drafting and reviewing international sale, distribution and services contracts, and choosing governing law and dispute forum.'
        ),
      },
      {
        title: t('الميراث والأموال عبر الحدود', 'Cross-border inheritance and assets'),
        text: t(
          'تركات الأجانب في مصر وتركات المصريين التي تشمل أموالاً بالخارج، وإعلام الوراثة عند اختلاف الجنسية أو الديانة.',
          'Estates of foreigners in Egypt and Egyptian estates with assets abroad, and declarations of heirs where nationality or religion differs.'
        ),
      },
      {
        title: t('تصديق وتوثيق المستندات', 'Legalising and notarising documents'),
        text: t(
          'تصديق المستندات المصرية للاستخدام بالخارج والأجنبية للاستخدام في مصر، والتوكيلات القنصلية.',
          'Legalising Egyptian documents for use abroad and foreign documents for use in Egypt, and consular powers of attorney.'
        ),
      },
    ],
    courts: [
      t(
        'ينظم قانون المرافعات (المواد 296 وما بعدها) شروط تنفيذ الأحكام الأجنبية في مصر، ومنها المعاملة بالمثل، واختصاص المحكمة التي أصدرت الحكم، وصحة إعلان الخصوم، وعدم مخالفة النظام العام. ويُرفع الطلب أمام المحكمة الابتدائية المطلوب التنفيذ في دائرتها.',
        'The Civil and Commercial Procedure Law (Articles 296 onwards) sets the conditions for enforcing foreign judgments in Egypt, including reciprocity, jurisdiction of the court that gave judgment, proper service on the parties and no conflict with public policy. The application goes to the primary court for the place of enforcement.'
      ),
      t(
        'تحدد المواد من 10 إلى 28 من القانون المدني القانون الواجب التطبيق عند وجود عنصر أجنبي، وتراعى كذلك الاتفاقيات الثنائية والدولية التي انضمت إليها مصر.',
        'Articles 10 to 28 of the Civil Code determine the applicable law where there is a foreign element, alongside the bilateral and international treaties Egypt has joined.'
      ),
    ],
    steps: [
      { title: t('تحديد الاختصاص والقانون', 'Jurisdiction and governing law'), text: t('نحدد أين يُرفع النزاع وبأي قانون قبل أي إجراء.', 'We establish where the dispute belongs and under which law before any step.') },
      { title: t('تجهيز المستندات الأجنبية', 'Preparing foreign documents'), text: t('نرتب الترجمة المعتمدة والتصديق اللازم لقبولها.', 'We arrange the certified translation and legalisation needed for admission.') },
      { title: t('الإجراء أمام المحكمة المصرية', 'Proceedings in the Egyptian court'), text: t('نرفع الدعوى أو طلب التنفيذ ونتابعه.', 'We file the claim or enforcement application and follow it through.') },
      { title: t('التنسيق مع الخارج', 'Coordination abroad'), text: t('ننسق مع محامين بالخارج عند الحاجة لإجراء هناك.', 'We coordinate with lawyers abroad where a step is needed there.') },
    ],
    faq: [
      {
        q: t('لدي حكم من محكمة أوروبية، هل ينفذ في مصر مباشرة؟', 'I have a judgment from a European court. Is it enforceable in Egypt directly?'),
        a: t(
          'لا. يجب أولاً الحصول على أمر بالتنفيذ من المحكمة المصرية المختصة بعد التحقق من الشروط القانونية، ثم يُنفذ كأي حكم مصري.',
          'No. An enforcement order must first be obtained from the competent Egyptian court once the statutory conditions are checked; it is then enforced like an Egyptian judgment.'
        ),
      },
      {
        q: t('هل تمثلون شركات أجنبية ليس لها وجود في مصر؟', 'Do you act for foreign companies with no presence in Egypt?'),
        a: t(
          'نعم، بتوكيل مصدّق من بلد الشركة، ونتولى التقاضي والتحصيل والتفاوض نيابة عنها.',
          'Yes, under a power of attorney legalised in the company’s country, handling litigation, recovery and negotiation on its behalf.'
        ),
      },
      {
        q: t('هل تقدمون مشورة في قوانين دول أخرى؟', 'Do you advise on the laws of other countries?'),
        a: t(
          'نحن محامون مصريون ومشورتنا في القانون المصري. عند الحاجة لقانون أجنبي ننسق مع محامٍ مرخص في تلك الدولة.',
          'We are Egyptian lawyers and advise on Egyptian law. Where foreign law is needed, we coordinate with a lawyer licensed in that country.'
        ),
      },
    ],
    related: ['international-arbitration-lawyer', 'lawyer-for-foreigners', 'immigration-lawyer'],
    parent: { path: '/foreigners-in-egypt', text: t('خدمات الأجانب والمستثمرين في مصر', 'Legal services for foreigners and investors in Egypt') },
  }),

  // ───────────────────────── 9. International arbitration
  make({
    slug: 'international-arbitration-lawyer',
    topic: t('التحكيم الدولي', 'International Arbitration'),
    name: t('محامي تحكيم دولي في الإسكندرية', 'International Arbitration Lawyer in Alexandria'),
    seoTitle: t('محامي تحكيم دولي في الإسكندرية | تحكيم تجاري وتنفيذ أحكام | كريم الديب', 'International Arbitration Lawyer in Alexandria, Egypt'),
    seoDescription: t(
      'محامي تحكيم دولي في الإسكندرية: صياغة شرط التحكيم، التمثيل في التحكيم التجاري المحلي والدولي، دعاوى البطلان، وتنفيذ أحكام التحكيم الأجنبية في مصر.',
      'International arbitration lawyer in Alexandria, Egypt: drafting arbitration clauses, representation in domestic and international commercial arbitration, annulment actions, and enforcing foreign awards in Egypt.'
    ),
    h1: t('محامي تحكيم دولي في الإسكندرية', 'International Arbitration Lawyer in Alexandria, Egypt'),
    subtitle: t('تحكيم تجاري محلي ودولي، ودعاوى بطلان وتنفيذ أحكام التحكيم', 'Domestic and international commercial arbitration, annulment and enforcement of awards'),
    intro: [
      t(
        'التحكيم يُحسم كثيراً قبل أن يبدأ: في شرط تحكيم مكتوب بعناية أو بإهمال. شرط ناقص في تحديد المركز أو عدد المحكمين أو مقر التحكيم قد يحوّل نزاعاً بسيطاً إلى معركة إجرائية طويلة.',
        'Arbitrations are often decided before they begin, by an arbitration clause drafted with care or without it. A clause that fails to fix the institution, the number of arbitrators or the seat can turn a simple dispute into a long procedural fight.'
      ),
      t(
        'نمثل الشركات المصرية والأجنبية في التحكيم المؤسسي والحر، ونتولى من الإسكندرية ما يتصل به أمام المحاكم المصرية: الإجراءات الوقتية، دعاوى البطلان، وأوامر التنفيذ.',
        'We represent Egyptian and foreign companies in institutional and ad hoc arbitration, and from Alexandria we handle the related work before the Egyptian courts: interim measures, annulment actions and enforcement orders.'
      ),
    ],
    services: [
      {
        title: t('صياغة ومراجعة شرط التحكيم', 'Drafting and reviewing arbitration clauses'),
        text: t(
          'اختيار المركز والقواعد والمقر واللغة والقانون الحاكم بما يناسب الصفقة ومكان أموال الطرف الآخر.',
          'Choosing the institution, rules, seat, language and governing law to suit the deal and where the other side’s assets are.'
        ),
      },
      {
        title: t('التمثيل في إجراءات التحكيم', 'Representation in arbitral proceedings'),
        text: t(
          'إعداد طلب التحكيم والمذكرات والمستندات والشهود والخبراء، والمرافعة أمام هيئة التحكيم.',
          'Preparing the request for arbitration, memorials, exhibits, witnesses and experts, and pleading before the tribunal.'
        ),
      },
      {
        title: t('دعاوى بطلان حكم التحكيم', 'Annulment actions'),
        text: t(
          'رفع دعوى البطلان أو الدفاع فيها في الحالات التي حددها القانون على سبيل الحصر.',
          'Bringing or defending annulment actions on the exhaustive grounds set by statute.'
        ),
      },
      {
        title: t('تنفيذ أحكام التحكيم المحلية والأجنبية', 'Enforcing domestic and foreign awards'),
        text: t(
          'استصدار أمر التنفيذ ومباشرة الحجز على أموال المحكوم ضده في مصر.',
          'Obtaining the enforcement order and attaching the award debtor’s assets in Egypt.'
        ),
      },
    ],
    courts: [
      t(
        'يحكم التحكيم في مصر القانون رقم 27 لسنة 1994، ومصر طرف في اتفاقية نيويورك لسنة 1958 بشأن الاعتراف بأحكام التحكيم الأجنبية وتنفيذها. في التحكيم التجاري الدولي تختص محكمة استئناف القاهرة بمسائل التحكيم ما لم يتفق الطرفان على محكمة استئناف أخرى.',
        'Arbitration in Egypt is governed by Law 27 of 1994, and Egypt is a party to the 1958 New York Convention on the recognition and enforcement of foreign awards. In international commercial arbitration the Cairo Court of Appeal is the competent court unless the parties agree on another court of appeal.'
      ),
      t(
        'تُرفع دعوى البطلان خلال تسعين يوماً من إعلان حكم التحكيم للمحكوم عليه. ومن المراكز التي نتعامل معها مركز القاهرة الإقليمي للتحكيم التجاري الدولي وغرفة التجارة الدولية.',
        'An annulment action must be filed within ninety days of the award being served on the losing party. The institutions we work with include the Cairo Regional Centre for International Commercial Arbitration (CRCICA) and the ICC.'
      ),
    ],
    steps: [
      { title: t('دراسة شرط التحكيم والعقد', 'Studying the clause and the contract'), text: t('نتحقق من صحة الشرط ونطاقه والمواعيد.', 'We check the validity and scope of the clause and the deadlines.') },
      { title: t('الإخطار وتشكيل الهيئة', 'Notice and constituting the tribunal'), text: t('نوجه إخطار التحكيم ونشارك في اختيار المحكمين.', 'We serve the notice of arbitration and take part in appointing the arbitrators.') },
      { title: t('المذكرات والجلسات', 'Memorials and hearings'), text: t('نقدم الدفاع المكتوب ونحضر الجلسات.', 'We file written submissions and attend the hearings.') },
      { title: t('الحكم وتنفيذه', 'The award and its enforcement'), text: t('نتابع صدور الحكم ثم تنفيذه أو الطعن عليه.', 'We follow the award through to enforcement or challenge.') },
    ],
    faq: [
      {
        q: t('هل ينفذ حكم تحكيم أجنبي في مصر؟', 'Is a foreign arbitral award enforceable in Egypt?'),
        a: t(
          'نعم، بعد الحصول على أمر بالتنفيذ من المحكمة المختصة. يتحقق القاضي من شروط محددة، منها ألا يخالف الحكم النظام العام وأن يكون المحكوم ضده قد أُعلن إعلاناً صحيحاً.',
          'Yes, once an enforcement order is obtained from the competent court. The judge checks defined conditions, including that the award does not breach public policy and that the losing party was properly notified.'
        ),
      },
      {
        q: t('التحكيم أفضل أم المحكمة؟', 'Is arbitration better than court?'),
        a: t(
          'التحكيم أسرع غالباً وسري وحكمه نهائي، لكنه أعلى تكلفة. للعقود الصغيرة قد تكون المحكمة الاقتصادية أنسب. ننصحك بحسب قيمة العقد وطبيعته.',
          'Arbitration is usually faster, confidential and final, but costs more. For smaller contracts the Economic Court may suit better. We advise according to the value and nature of the contract.'
        ),
      },
      {
        q: t('هل يمكن استئناف حكم التحكيم؟', 'Can an arbitral award be appealed?'),
        a: t(
          'لا يُستأنف حكم التحكيم، وإنما تُرفع دعوى بطلان لأسباب إجرائية محددة لا تتناول موضوع النزاع.',
          'Awards cannot be appealed. An annulment action may be brought on specific procedural grounds that do not reopen the merits.'
        ),
      },
    ],
    related: ['maritime-arbitration-lawyer', 'mediation-lawyer', 'commercial-lawyer'],
    parent: { path: '/arbitration-mediation', text: t('محامي تحكيم دولي في مصر', 'International arbitration services in Egypt') },
  }),

  // ───────────────────────── 10. Maritime arbitration
  make({
    slug: 'maritime-arbitration-lawyer',
    topic: t('التحكيم والمنازعات البحرية', 'Maritime Arbitration and Disputes'),
    name: t('محامي تحكيم بحري في الإسكندرية', 'Maritime Arbitration Lawyer in Alexandria'),
    seoTitle: t('محامي تحكيم بحري في الإسكندرية | منازعات الشحن وحجز السفن | كريم الديب', 'Maritime Arbitration & Shipping Lawyer in Alexandria, Egypt'),
    seoDescription: t(
      'محامي تحكيم بحري في الإسكندرية: منازعات سندات الشحن ومشارطات الإيجار، تلف وعجز البضائع، الحجز التحفظي على السفن، والتحكيم البحري المحلي والدولي.',
      'Maritime arbitration lawyer in Alexandria, Egypt: bill of lading and charterparty disputes, cargo damage and shortage claims, ship arrest, and domestic and international maritime arbitration.'
    ),
    h1: t('محامي تحكيم بحري في الإسكندرية', 'Maritime Arbitration and Shipping Lawyer in Alexandria, Egypt'),
    subtitle: t('منازعات الشحن والنقل البحري وحجز السفن بميناء الإسكندرية', 'Shipping and carriage disputes and ship arrest at the Port of Alexandria'),
    intro: [
      t(
        'ميناء الإسكندرية والدخيلة يستقبلان الجزء الأكبر من تجارة مصر الخارجية، ومعه تأتي منازعاته: بضاعة وصلت تالفة أو ناقصة، سفينة تأخرت، غرامات تأخير حاويات، أو أجرة نقل لم تُدفع. في هذه المنازعات الوقت عنصر حاسم، لأن السفينة تغادر والمواعيد قصيرة.',
        'The ports of Alexandria and Dekheila handle the largest share of Egypt’s foreign trade, and the disputes that come with it: cargo arriving damaged or short, a delayed vessel, container demurrage, or unpaid freight. Time is decisive here, because the ship sails and the deadlines are short.'
      ),
      t(
        'نمثل أصحاب البضائع والمستوردين والمصدرين ووكلاء الشحن وشركات الملاحة، أمام هيئات التحكيم البحري وأمام محاكم الإسكندرية في الإجراءات العاجلة المرتبطة به.',
        'We act for cargo owners, importers, exporters, freight forwarders and shipping companies, before maritime arbitral tribunals and before the Alexandria courts in the urgent proceedings that go with them.'
      ),
    ],
    services: [
      {
        title: t('منازعات سندات الشحن ومشارطات الإيجار', 'Bill of lading and charterparty disputes'),
        text: t(
          'مطالبات تلف البضاعة أو عجزها أو تأخرها، ومنازعات أجرة النقل وغرامات التأخير، وتفسير شروط المشارطة.',
          'Claims for cargo damage, shortage or delay, freight and demurrage disputes, and construction of charterparty terms.'
        ),
      },
      {
        title: t('الحجز التحفظي على السفن', 'Ship arrest'),
        text: t(
          'استصدار أمر الحجز التحفظي على السفينة ضماناً لدين بحري، أو رفع الحجز مقابل ضمان.',
          'Obtaining an arrest order against a vessel as security for a maritime claim, or lifting an arrest against security.'
        ),
      },
      {
        title: t('التحكيم البحري', 'Maritime arbitration'),
        text: t(
          'التمثيل في التحكيم البحري داخل مصر وخارجها وفق شرط التحكيم الوارد في السند أو المشارطة، وتنفيذ أحكامه في مصر.',
          'Representation in maritime arbitration in Egypt and abroad under the clause in the bill of lading or charterparty, and enforcement of the resulting awards in Egypt.'
        ),
      },
      {
        title: t('التأمين البحري والحوادث البحرية', 'Marine insurance and casualties'),
        text: t(
          'مطالبات التأمين على البضائع، ودعاوى الحلول، والتصادم والمساعدة والإنقاذ والخسائر المشتركة.',
          'Cargo insurance claims, subrogated recoveries, collision, salvage and general average.'
        ),
      },
    ],
    courts: [
      t(
        'ينظم قانون التجارة البحرية رقم 8 لسنة 1990 عقود النقل البحري ومسؤولية الناقل والحجز التحفظي على السفن والديون البحرية التي تجيزه. ويصدر أمر الحجز من رئيس المحكمة الابتدائية المختصة، ثم تُرفع دعوى ثبوت الحق وصحة الحجز في الميعاد.',
        'The Maritime Trade Law 8 of 1990 governs contracts of carriage by sea, carrier liability, ship arrest and the maritime claims that justify it. The arrest order is issued by the president of the competent primary court, followed in time by a claim on the merits and for validation of the arrest.'
      ),
      t(
        'دعاوى تسليم البضائع تتقادم بمدد قصيرة لا تتجاوز في الغالب سنتين، ويشترط القانون إخطار الناقل بالتلف أو العجز خلال أيام معدودة من الاستلام. وتستضيف الإسكندرية مركزاً متخصصاً للتحكيم البحري الدولي، ويجري كثير من التحكيمات البحرية كذلك في لندن وفق شروط المشارطات.',
        'Cargo claims are subject to short limitation periods, generally not more than two years, and the law requires notice of damage or shortage to the carrier within days of delivery. Alexandria hosts a specialist international maritime arbitration centre, and many maritime arbitrations are also seated in London under charterparty terms.'
      ),
    ],
    steps: [
      { title: t('حفظ الدليل فوراً', 'Preserving evidence immediately'), text: t('نوجه الاحتجاج للناقل ونطلب معاينة البضاعة وتقرير خبير.', 'We serve notice of claim on the carrier and arrange a survey and expert report.') },
      { title: t('تأمين الدين', 'Securing the claim'), text: t('نطلب الحجز على السفينة أو خطاب ضمان قبل مغادرتها.', 'We seek arrest of the vessel or a letter of undertaking before she sails.') },
      { title: t('التحكيم أو التقاضي', 'Arbitration or litigation'), text: t('نباشر الإجراء المناسب وفق شرط السند أو المشارطة.', 'We start the proceedings the bill of lading or charterparty requires.') },
      { title: t('التحصيل', 'Recovery'), text: t('ننفذ الحكم على الضمان أو على أموال المدين.', 'We enforce against the security or the debtor’s assets.') },
    ],
    faq: [
      {
        q: t('وصلت بضاعتي تالفة، ما أول ما أفعله؟', 'My cargo arrived damaged. What should I do first?'),
        a: t(
          'لا توقّع على الاستلام دون تحفظ. أثبت التلف كتابة واطلب معاينة مشتركة، وتواصل معنا فوراً لأن مهلة إخطار الناقل قصيرة جداً.',
          'Do not sign for delivery without reservation. Record the damage in writing, ask for a joint survey and contact us at once, because the time for notifying the carrier is very short.'
        ),
      },
      {
        q: t('هل يمكن حجز سفينة أجنبية في ميناء الإسكندرية؟', 'Can a foreign vessel be arrested at Alexandria?'),
        a: t(
          'نعم، إذا كان الدين من الديون البحرية التي يجيز القانون الحجز من أجلها. يصدر الأمر بسرعة، ويمكن رفعه إذا قدم مالك السفينة ضماناً كافياً.',
          'Yes, where the claim is one of the maritime claims for which the law permits arrest. The order is issued quickly and can be lifted if the owner provides adequate security.'
        ),
      },
      {
        q: t('سند الشحن ينص على التحكيم في لندن، هل أستطيع رفع دعوى في مصر؟', 'The bill of lading provides for London arbitration. Can I sue in Egypt?'),
        a: t(
          'الأصل احترام شرط التحكيم، لكن تبقى للمحاكم المصرية سلطة الإجراءات التحفظية كالحجز على السفينة. نراجع صيغة الشرط لتحديد الطريق الصحيح.',
          'The arbitration clause is generally upheld, but the Egyptian courts keep their power to grant protective measures such as arrest. We review the wording to identify the right route.'
        ),
      },
    ],
    related: ['international-arbitration-lawyer', 'commercial-lawyer', 'mediation-lawyer'],
    parent: { path: '/commercial-law', text: t('القانون التجاري والبحري في مصر', 'Commercial and maritime law services in Egypt') },
  }),

  // ───────────────────────── 11. Mediation
  make({
    slug: 'mediation-lawyer',
    topic: t('الوساطة والتسوية الودية', 'Mediation and Amicable Settlement'),
    name: t('محامي وساطة في الإسكندرية', 'Mediation Lawyer in Alexandria'),
    seoTitle: t('محامي وساطة وتسوية منازعات في الإسكندرية | كريم الديب', 'Mediation Lawyer in Alexandria, Egypt | Dispute Settlement'),
    seoDescription: t(
      'محامي وساطة في الإسكندرية: تسوية المنازعات التجارية والمدنية والأسرية ودياً، التفاوض، وصياغة عقد صلح ملزم وقابل للتنفيذ دون تقاضٍ طويل.',
      'Mediation lawyer in Alexandria, Egypt: amicable settlement of commercial, civil and family disputes, negotiation, and drafting a binding, enforceable settlement without lengthy litigation.'
    ),
    h1: t('محامي وساطة وتسوية منازعات في الإسكندرية', 'Mediation and Dispute Settlement Lawyer in Alexandria, Egypt'),
    subtitle: t('حل النزاع بالتفاوض والوساطة قبل المحكمة أو أثناءها', 'Resolving disputes by negotiation and mediation before or during court proceedings'),
    intro: [
      t(
        'ليست كل قضية تستحق سنوات في المحاكم. شريكان يريدان الانفصال، ورثة مختلفون على عقار، مورد وعميل بينهما حساب معلق: هذه منازعات يحلها اتفاق جيد أسرع وأرخص من حكم، ويحفظ ما بقي من العلاقة.',
        'Not every dispute deserves years in court. Two partners who want to part, heirs disagreeing over a property, a supplier and customer with an unsettled account: a good agreement resolves these faster and more cheaply than a judgment, and preserves what is left of the relationship.'
      ),
      t(
        'دورنا في الوساطة مزدوج بحسب ما تطلبه: نمثلك كمحامٍ يفاوض عنك ويحمي مصلحتك، أو نعمل كطرف محايد يساعد الطرفين على الوصول لاتفاق. وفي الحالتين لا تتنازل عن حقك في اللجوء للقضاء إذا فشلت التسوية.',
        'Our role in mediation depends on what you ask for: we represent you as a lawyer who negotiates for you and protects your interests, or we act as a neutral who helps both sides reach agreement. Either way you keep your right to go to court if settlement fails.'
      ),
    ],
    services: [
      {
        title: t('الوساطة التجارية', 'Commercial mediation'),
        text: t(
          'منازعات الشركاء، عقود التوريد والمقاولات، والديون التجارية، مباشرة أو وفق قواعد مركز وساطة.',
          'Partner disputes, supply and construction contracts, and commercial debts, either directly or under the rules of a mediation centre.'
        ),
      },
      {
        title: t('التسوية في المنازعات المدنية والعقارية', 'Settlement of civil and property disputes'),
        text: t(
          'قسمة التركات والعقارات المشتركة، منازعات الجوار والإيجار، والتعويضات.',
          'Division of estates and jointly owned property, neighbour and rent disputes, and compensation.'
        ),
      },
      {
        title: t('التسوية الأسرية', 'Family settlement'),
        text: t(
          'الاتفاق على النفقة والحضانة والرؤية والطلاق بالتراضي، أمام مكتب التسوية أو خارجه.',
          'Agreeing maintenance, custody, visitation and divorce by consent, before the settlement office or outside it.'
        ),
      },
      {
        title: t('صياغة عقد الصلح وتوثيقه', 'Drafting and formalising the settlement'),
        text: t(
          'صياغة اتفاق تسوية واضح ومحدد، وإثباته أمام المحكمة ليصبح سنداً تنفيذياً.',
          'Drafting a clear, specific settlement agreement and having it recorded by the court so it becomes enforceable.'
        ),
      },
    ],
    courts: [
      t(
        'الصلح عقد ينظمه القانون المدني، وهو ملزم لطرفيه. وإذا كان هناك دعوى قائمة يمكن إلحاق اتفاق الصلح بمحضر الجلسة وفق قانون المرافعات فيكتسب قوة السند التنفيذي ويُنفذ دون حاجة لحكم جديد.',
        'A settlement is a contract governed by the Civil Code and binds its parties. Where proceedings are pending, the settlement can be attached to the court record under the Procedure Law, giving it the force of an enforceable instrument without a new judgment.'
      ),
      t(
        'يعرف النظام المصري التسوية في أكثر من موضع: مكاتب تسوية المنازعات الأسرية قبل دعاوى الأسرة، وهيئة التحضير بالمحاكم الاقتصادية، إلى جانب قواعد الوساطة لدى مراكز التحكيم.',
        'Egyptian law provides for settlement in several places: the Family Dispute Settlement Offices before family claims, the preparation panel at the Economic Courts, and the mediation rules of the arbitration centres.'
      ),
    ],
    steps: [
      { title: t('تقييم قابلية التسوية', 'Assessing whether settlement is realistic'), text: t('نحدد مصلحتك الحقيقية وما يمكن أن يقبله الطرف الآخر.', 'We identify your real interest and what the other side might accept.') },
      { title: t('دعوة الطرف الآخر', 'Inviting the other side'), text: t('نتواصل معه أو مع محاميه ونتفق على إطار التفاوض.', 'We approach them or their lawyer and agree a framework for talks.') },
      { title: t('جلسات التفاوض', 'Negotiation sessions'), text: t('نحضر الجلسات ونقرّب المواقف دون التفريط في حقك.', 'We attend the sessions and narrow the gap without giving away your rights.') },
      { title: t('توثيق الاتفاق', 'Formalising the agreement'), text: t('نصوغ الاتفاق ونضفي عليه القوة التنفيذية.', 'We draft the agreement and make it enforceable.') },
    ],
    faq: [
      {
        q: t('هل اتفاق الوساطة ملزم؟', 'Is a mediated agreement binding?'),
        a: t(
          'نعم، متى وُقّع أصبح عقداً ملزماً. ولضمان تنفيذه جبراً نثبته أمام المحكمة أو نوثقه رسمياً.',
          'Yes. Once signed it is a binding contract. To make it compulsorily enforceable we have it recorded by the court or formally notarised.'
        ),
      },
      {
        q: t('ماذا لو فشلت الوساطة؟', 'What if mediation fails?'),
        a: t(
          'لا تخسر شيئاً من حقوقك؛ يبقى طريق المحكمة أو التحكيم مفتوحاً، وما يُقال في جلسات التفاوض يُتفق مسبقاً على سريته.',
          'You lose none of your rights. Court or arbitration remains open, and the confidentiality of what is said in the talks is agreed in advance.'
        ),
      },
      {
        q: t('ما الفرق بين الوساطة والتحكيم؟', 'How does mediation differ from arbitration?'),
        a: t(
          'في التحكيم يصدر المحكّم حكماً ملزماً للطرفين. في الوساطة لا يفرض الوسيط حلاً، والاتفاق لا يتم إلا برضا الطرفين.',
          'In arbitration the arbitrator issues a decision binding on both sides. In mediation the mediator imposes nothing, and there is only an agreement if both sides consent.'
        ),
      },
    ],
    related: ['international-arbitration-lawyer', 'family-lawyer', 'commercial-lawyer'],
    parent: { path: '/arbitration-mediation', text: t('التحكيم والوساطة في مصر', 'Arbitration and mediation services in Egypt') },
  }),
];

export const alexandriaServiceBySlug: Record<string, AlexandriaService> = Object.fromEntries(
  alexandriaServices.map(s => [s.slug, s])
);

export const alexandriaServiceSlugs = alexandriaServices.map(s => s.slug);
