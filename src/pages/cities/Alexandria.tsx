import React from 'react';
import CityLandingPage, { CityPageData } from '../../components/CityLandingPage';

const data: CityPageData = {
  branch: 'alexandria',
  seoTitle: {
    ar: 'محامي في الإسكندرية | مكتب محاماة لجميع القضايا | المحامي كريم الديب',
    en: 'Lawyer in Alexandria, Egypt | English-Speaking Law Firm | Karim Eldib',
  },
  seoDescription: {
    ar: 'محامي في الإسكندرية منذ 2006 – مكتب المحامي كريم الديب يخدم كل أحياء الإسكندرية: قضايا جنائية ومدنية وأسرة، تأسيس شركات، قضايا الأجانب والتحكيم. اتصل: 01223767592',
    en: 'Looking for a lawyer in Alexandria, Egypt? Karim Eldib Law Firm serves all of Alexandria and handles criminal, civil, family & corporate cases for locals and foreigners. English, French & Italian spoken.',
  },
  badge: { ar: 'المكتب الرئيسي – الإسكندرية', en: 'Main Office – Alexandria' },
  h1: {
    ar: 'محامي في الإسكندرية – مكتب المحامي كريم الديب للمحاماة',
    en: 'Lawyer in Alexandria, Egypt – Karim Eldib Law Firm',
  },
  subtitle: {
    ar: 'تمثيل قانوني أمام محاكم الإسكندرية للأفراد والشركات والأجانب – بالعربية والإنجليزية والفرنسية والإيطالية',
    en: 'Representation before Alexandria courts for individuals, companies and foreigners – in English, Arabic, French and Italian',
  },
  intro: [
    {
      ar: 'إذا كنت تبحث عن محامي في الإسكندرية يجمع بين الخبرة في المحاكم المصرية والقدرة على التعامل مع القضايا ذات الطابع الدولي، فمكتب المحامي كريم الديب هو المقر الرئيسي لمؤسستنا في الإسكندرية منذ عام 2006، ويخدم الموكلين في كل أحياء المدينة. نتولى القضايا الجنائية والمدنية وقضايا الأحوال الشخصية، وتأسيس الشركات، والعقود التجارية، وقضايا الأجانب والإقامة، والتحكيم التجاري.',
      en: 'If you need a lawyer in Alexandria who knows the Egyptian courts and can also handle cases with an international dimension, Karim Eldib Law Firm has run its main office in Alexandria since 2006, serving clients across the whole city. We handle criminal defense, civil litigation, family and personal-status cases, company formation, commercial contracts, residency matters for foreigners, and commercial arbitration.',
    },
    {
      ar: 'يخدم مكتبنا في الإسكندرية الموكلين المصريين المقيمين داخل مصر وخارجها، والأجانب المقيمين في الإسكندرية والساحل الشمالي، والشركات العاملة في ميناء الإسكندرية والمناطق الحرة. نشرح لك موقفك القانوني بوضوح، ونحدد الأتعاب كتابياً قبل البدء، ونتابع معك كل خطوة في القضية.',
      en: 'Our Alexandria office serves Egyptian clients at home and abroad, foreign residents of Alexandria and the North Coast, and companies operating around Alexandria Port and the free zones. As an English-speaking law firm in Alexandria, we explain your legal position clearly, agree fees in writing before work begins, and keep you updated at every stage of your case.',
    },
  ],
  servicesHeading: { ar: 'خدماتنا القانونية في الإسكندرية', en: 'Our Legal Services in Alexandria' },
  services: [
    {
      path: '/criminal-law', icon: 'fas fa-balance-scale',
      title: { ar: 'محامي جنائي في الإسكندرية', en: 'Criminal Lawyer in Alexandria' },
      text: {
        ar: 'الحضور أمام النيابة وأقسام الشرطة، والدفاع في الجنح والجنايات، والاستئناف والنقض، مع تمثيل عاجل للأجانب.',
        en: 'Representation at the prosecution and police stations, defense in misdemeanour and felony cases, appeals and cassation, with urgent help for foreigners.',
      },
    },
    {
      path: '/alexandria/family-lawyer', icon: 'fas fa-users',
      title: { ar: 'محامي أحوال شخصية في الإسكندرية', en: 'Family Lawyer in Alexandria' },
      text: {
        ar: 'الطلاق والخلع، النفقة والحضانة والرؤية، توثيق زواج الأجانب، والاعتراف بأحكام الطلاق الأجنبية.',
        en: 'Divorce and khul\', alimony, custody and visitation, foreign marriage registration and recognition of foreign divorce judgments.',
      },
    },
    {
      path: '/alexandria/civil-lawyer', icon: 'fas fa-home',
      title: { ar: 'محامي مدني في الإسكندرية', en: 'Civil Lawyer in Alexandria' },
      text: {
        ar: 'دعاوى التعويض، صحة ونفاذ العقود، منازعات الإيجار والملكية، والميراث وقسمة التركات.',
        en: 'Compensation claims, contract validation suits, rent and ownership disputes, inheritance and estate division.',
      },
    },
    {
      path: '/alexandria/corporate-lawyer', icon: 'fas fa-building',
      title: { ar: 'محامي شركات في الإسكندرية', en: 'Corporate Lawyer in Alexandria' },
      text: {
        ar: 'تأسيس الشركات للمصريين والأجانب، السجل التجاري والتراخيص، وصياغة عقود الشركاء واللوائح.',
        en: 'Company formation for Egyptians and foreigners, commercial registry and licensing, shareholder agreements and by-laws.',
      },
    },
    {
      path: '/alexandria/commercial-lawyer', icon: 'fas fa-ship',
      title: { ar: 'محامي تجاري في الإسكندرية', en: 'Commercial Lawyer in Alexandria' },
      text: {
        ar: 'العقود التجارية، منازعات الشحن والجمارك والنقل البحري المرتبطة بميناء الإسكندرية، وتحصيل المستحقات.',
        en: 'Commercial contracts, shipping, customs and maritime transport disputes linked to Alexandria Port, and debt recovery.',
      },
    },
    {
      path: '/alexandria/lawyer-for-foreigners', icon: 'fas fa-passport',
      title: { ar: 'محامي أجانب في الإسكندرية', en: 'Lawyer for Foreigners in Alexandria' },
      text: {
        ar: 'الإقامات وتصاريح العمل، شراء العقارات، الزواج والطلاق، وأي نزاع قانوني يواجهه الأجنبي في الإسكندرية.',
        en: 'Residency and work permits, buying property, marriage and divorce, and any legal dispute a foreigner faces in Alexandria.',
      },
    },
    {
      path: '/alexandria/international-arbitration-lawyer', icon: 'fas fa-gavel',
      title: { ar: 'محامي تحكيم دولي في الإسكندرية', en: 'International Arbitration Lawyer in Alexandria' },
      text: {
        ar: 'صياغة شروط التحكيم، التمثيل في التحكيم التجاري المحلي والدولي، وتنفيذ أحكام التحكيم في مصر.',
        en: 'Drafting arbitration clauses, representation in domestic and international commercial arbitration, and enforcing awards in Egypt.',
      },
    },
    {
      path: '/egyptians-abroad', icon: 'fas fa-globe',
      title: { ar: 'خدمات المصريين بالخارج', en: 'Services for Egyptians Abroad' },
      text: {
        ar: 'متابعة قضاياك وعقاراتك في الإسكندرية وأنت بالخارج بموجب توكيل رسمي، مع تقارير دورية.',
        en: 'We follow your Alexandria cases and property while you live abroad under a formal power of attorney, with regular updates.',
      },
    },
    {
      path: '/alexandria/real-estate-lawyer', icon: 'fas fa-key',
      title: { ar: 'محامي عقارات في الإسكندرية', en: 'Real Estate Lawyer in Alexandria' },
      text: {
        ar: 'فحص الملكية قبل الشراء، صحة التوقيع وصحة ونفاذ، التسجيل بالشهر العقاري، ومنازعات الإيجار والملكية.',
        en: 'Title checks before purchase, contract validation suits, registration, and rent and ownership disputes.',
      },
    },
    {
      path: '/alexandria/immigration-lawyer', icon: 'fas fa-id-card',
      title: { ar: 'محامي هجرة وإقامات في الإسكندرية', en: 'Immigration Lawyer in Alexandria' },
      text: {
        ar: 'إقامات الأجانب وتصاريح العمل، الجنسية المصرية، وتجهيز وتصديق مستندات ملفات الهجرة.',
        en: 'Residence and work permits, Egyptian nationality, and preparing and legalising documents for emigration files.',
      },
    },
    {
      path: '/alexandria/international-lawyer', icon: 'fas fa-globe-africa',
      title: { ar: 'محامي دولي في الإسكندرية', en: 'International Lawyer in Alexandria' },
      text: {
        ar: 'تنفيذ الأحكام الأجنبية في مصر، العقود الدولية، والميراث والأموال عبر الحدود.',
        en: 'Enforcing foreign judgments in Egypt, international contracts, and cross-border inheritance and assets.',
      },
    },
    {
      path: '/alexandria/maritime-arbitration-lawyer', icon: 'fas fa-anchor',
      title: { ar: 'محامي تحكيم بحري في الإسكندرية', en: 'Maritime Arbitration Lawyer in Alexandria' },
      text: {
        ar: 'منازعات سندات الشحن وتلف البضائع، الحجز التحفظي على السفن، والتحكيم البحري.',
        en: 'Bill of lading and cargo damage disputes, ship arrest, and maritime arbitration.',
      },
    },
    {
      path: '/alexandria/mediation-lawyer', icon: 'fas fa-handshake',
      title: { ar: 'محامي وساطة في الإسكندرية', en: 'Mediation Lawyer in Alexandria' },
      text: {
        ar: 'تسوية المنازعات التجارية والمدنية والأسرية ودياً، وصياغة عقد صلح ملزم وقابل للتنفيذ.',
        en: 'Amicable settlement of commercial, civil and family disputes, and a binding, enforceable settlement agreement.',
      },
    },
  ],
  courtsHeading: { ar: 'المحاكم والجهات التي نتعامل معها في الإسكندرية', en: 'Courts & Authorities We Handle in Alexandria' },
  courtsText: {
    ar: 'نترافع أمام محاكم الإسكندرية الجزئية والابتدائية ومحكمة استئناف الإسكندرية ومحاكم الأسرة والمحكمة الاقتصادية، ونحضر أمام النيابات العامة وأقسام الشرطة، ونتابع الإجراءات لدى الشهر العقاري والسجل التجاري ومصلحة الجوازات والهجرة. ونتولى الطعون أمام محكمة النقض.',
    en: 'We appear before the Alexandria district and primary courts, the Alexandria Court of Appeal, family courts and the Economic Court, attend public prosecution offices and police stations, and handle procedures at the Notary (Shahr El Akary), the Commercial Registry and the Passports & Immigration authority. Cassation appeals are handled before the Court of Cassation.',
  },
  areasHeading: { ar: 'المناطق التي نخدمها', en: 'Areas We Serve' },
  areas: [
    { ar: 'العطارين ومحطة الرمل', en: 'Attarin & Raml Station' },
    { ar: 'المنشية', en: 'Mansheya' },
    { ar: 'سموحة', en: 'Smouha' },
    { ar: 'سيدي جابر', en: 'Sidi Gaber' },
    { ar: 'ستانلي ورشدي', en: 'Stanley & Roushdy' },
    { ar: 'سان ستيفانو', en: 'San Stefano' },
    { ar: 'المندرة والمنتزه', en: 'Mandara & Montaza' },
    { ar: 'العجمي', en: 'Agami' },
    { ar: 'العامرية وبرج العرب', en: 'Amreya & Borg El Arab' },
    { ar: 'الساحل الشمالي', en: 'North Coast' },
  ],
  whyHeading: { ar: 'لماذا تختار مكتبنا في الإسكندرية؟', en: 'Why Choose Our Alexandria Law Firm?' },
  why: [
    {
      title: { ar: 'خبرة منذ 2006', en: 'Practising Since 2006' },
      text: { ar: 'سنوات من العمل اليومي أمام محاكم ونيابات الإسكندرية.', en: 'Years of day-to-day practice before Alexandria courts and prosecutors.' },
    },
    {
      title: { ar: '4 لغات', en: '4 Languages' },
      text: { ar: 'نتحدث العربية والإنجليزية والفرنسية والإيطالية مع موكلينا مباشرة.', en: 'We speak English, French, Italian and Arabic directly with clients.' },
    },
    {
      title: { ar: 'وضوح في الأتعاب', en: 'Clear Fees' },
      text: { ar: 'نحدد نطاق العمل والأتعاب كتابياً قبل البدء.', en: 'Scope of work and fees are agreed in writing before we start.' },
    },
    {
      title: { ar: 'متابعة عن بُعد', en: 'Remote Follow-Up' },
      text: { ar: 'تحديثات عبر واتساب والبريد للموكلين داخل مصر وخارجها.', en: 'Updates by WhatsApp and email for clients in Egypt and abroad.' },
    },
  ],
  faqHeading: { ar: 'أسئلة شائعة عن المحامي في الإسكندرية', en: 'FAQ – Hiring a Lawyer in Alexandria' },
  faq: [
    {
      q: { ar: 'أين يقع مكتب المحامي كريم الديب في الإسكندرية؟', en: 'Where is your law office in Alexandria?' },
      a: {
        ar: 'المكتب الرئيسي في 29 المسلة غرب وشريف باشا، العطارين، الإسكندرية، وهو مفتوح 24 ساعة طوال أيام الأسبوع. يمكنك التواصل معنا في أي وقت على 01223767592.',
        en: 'Our main office is at 29 El Masalla Gharb & Sherif Pasha St., El Attarin, Alexandria, and is open 24 hours, 7 days a week. You can reach us any time on +20 122 376 7592.',
      },
    },
    {
      q: { ar: 'هل يوجد محامي يتحدث الإنجليزية في الإسكندرية؟', en: 'Is there an English-speaking lawyer in Alexandria?' },
      a: {
        ar: 'نعم، نقدم الاستشارات ونتابع القضايا بالإنجليزية والفرنسية والإيطالية إلى جانب العربية، ونوفر ترجمة المستندات اللازمة للمحكمة.',
        en: 'Yes. We advise and run cases in English, French and Italian as well as Arabic, and arrange certified translation of documents needed in court.',
      },
    },
    {
      q: { ar: 'ما أنواع القضايا التي يتولاها مكتبكم في الإسكندرية؟', en: 'What types of cases do you handle in Alexandria?' },
      a: {
        ar: 'القضايا الجنائية، والمدنية والعقارية، والأحوال الشخصية، وتأسيس الشركات والعقود التجارية والبحرية، وقضايا الأجانب والإقامة، والتحكيم التجاري.',
        en: 'Criminal defense, civil and property disputes, family law, company formation, commercial and maritime contracts, residency matters for foreigners, and commercial arbitration.',
      },
    },
    {
      q: { ar: 'هل يمكنني متابعة قضيتي في الإسكندرية وأنا خارج مصر؟', en: 'Can you handle my Alexandria case while I live abroad?' },
      a: {
        ar: 'نعم، يكفي عمل توكيل رسمي من القنصلية المصرية في بلد إقامتك، ونتولى الإجراءات نيابة عنك مع إرسال تحديثات منتظمة.',
        en: 'Yes. You sign a power of attorney at the Egyptian consulate where you live, and we handle the proceedings on your behalf with regular progress updates.',
      },
    },
    {
      q: { ar: 'كيف أحجز استشارة مع محامي في الإسكندرية؟', en: 'How do I book a consultation with a lawyer in Alexandria?' },
      a: {
        ar: 'تواصل معنا عبر الهاتف أو واتساب على 01223767592 لتحديد موعد في المكتب أو استشارة عن بُعد، وسنوضح لك الأتعاب قبل البدء.',
        en: 'Call or WhatsApp +20 122 376 7592 to book an in-office or remote consultation. We confirm the fee with you before the consultation.',
      },
    },
    {
      q: { ar: 'هل تساعدون الأجانب في توثيق الزواج بالإسكندرية؟', en: 'Do you help foreigners register a marriage in Alexandria?' },
      a: {
        ar: 'نعم، نجهز المستندات المطلوبة ونتابع توثيق زواج الأجانب لدى الشهر العقاري بالإسكندرية، ونقدم المشورة بشأن الاعتراف به في بلد الموكل.',
        en: 'Yes. We prepare the required documents, follow the foreign marriage registration at the Alexandria Notary office, and advise on recognition in your home country.',
      },
    },
  ],
  otherBranch: { path: '/sharm-el-sheikh', text: { ar: 'فرعنا في شرم الشيخ', en: 'Our Sharm El Sheikh office' } },
  relatedArticle: {
    path: '/blog/foreign-lawyer-alexandria',
    text: { ar: 'اقرأ: دليل الأجانب للخدمات القانونية في الإسكندرية', en: 'Read: Legal guide for foreigners in Alexandria' },
  },
};

const Alexandria: React.FC = () => <CityLandingPage data={data} />;

export default Alexandria;
