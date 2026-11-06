import React from 'react';
import CityLandingPage, { CityPageData } from '../../components/CityLandingPage';

const data: CityPageData = {
  branch: 'sharm',
  seoTitle: {
    ar: 'محامي في شرم الشيخ | مكتب محاماة لجميع القضايا | المحامي كريم الديب',
    en: 'Lawyer in Sharm El Sheikh, Egypt | English & Italian Speaking | Karim Eldib',
  },
  seoDescription: {
    ar: 'محامي في شرم الشيخ – مكتب المحامي كريم الديب يخدم كل مناطق شرم الشيخ وجنوب سيناء: قضايا الأجانب والسياح، عقارات وحق انتفاع، إقامات، قضايا جنائية وأسرة وشركات. اتصل: 01223767592',
    en: 'Need a lawyer in Sharm El Sheikh? Karim Eldib Law Firm serves all of Sharm El Sheikh and helps tourists, expats & investors: police cases, property & usufruct, residency, family & company law. English, Italian & French spoken.',
  },
  badge: { ar: 'فرع شرم الشيخ – جنوب سيناء', en: 'Sharm El Sheikh Office – South Sinai' },
  h1: {
    ar: 'محامي في شرم الشيخ – مكتب المحامي كريم الديب للمحاماة',
    en: 'Lawyer in Sharm El Sheikh, Egypt – Karim Eldib Law Firm',
  },
  subtitle: {
    ar: 'خدمات قانونية للمقيمين والسياح والمستثمرين في شرم الشيخ وجنوب سيناء – بالعربية والإنجليزية والإيطالية والفرنسية',
    en: 'Legal help for residents, tourists and investors in Sharm El Sheikh and South Sinai – in English, Italian, French and Arabic',
  },
  intro: [
    {
      ar: 'شرم الشيخ مدينة يعيش ويعمل ويستثمر فيها آلاف المصريين والأجانب، ولهذا تحتاج قضاياها إلى محامي في شرم الشيخ يعرف المحاكم والنيابات المحلية ويتحدث لغة الموكل. يقدم مكتب المحامي كريم الديب في شرم الشيخ تمثيلاً قانونياً كاملاً في القضايا الجنائية والمدنية والأحوال الشخصية، وعقود العقارات وحق الانتفاع، وتأسيس الشركات السياحية، وإقامات الأجانب.',
      en: 'Sharm El Sheikh is home to thousands of Egyptians and foreigners who live, work and invest there, so cases here need a lawyer in Sharm El Sheikh who knows the local courts and prosecutors and speaks the client\'s language. Karim Eldib Law Firm in Sharm El Sheikh provides full representation in criminal, civil and family cases, property and usufruct contracts, tourism company formation, and residency for foreigners.',
    },
    {
      ar: 'إذا كنت سائحاً وتعرضت لمشكلة أثناء إقامتك، أو مقيماً أجنبياً يحتاج إلى عقد أو إقامة، أو مستثمراً في قطاع الفنادق والسياحة، نتواصل معك بسرعة ونشرح لك الخطوات بوضوح ونحدد الأتعاب كتابياً قبل البدء.',
      en: 'Whether you are a tourist who ran into trouble during your stay, a foreign resident who needs a contract or residency permit, or an investor in hotels and tourism, we respond quickly, explain the next steps clearly and agree fees in writing before starting.',
    },
  ],
  servicesHeading: { ar: 'خدماتنا القانونية في شرم الشيخ', en: 'Our Legal Services in Sharm El Sheikh' },
  services: [
    {
      path: '/foreigners-in-egypt', icon: 'fas fa-passport',
      title: { ar: 'محامي أجانب في شرم الشيخ', en: 'Lawyer for Foreigners in Sharm El Sheikh' },
      text: {
        ar: 'الإقامات السياحية والعقارية وتصاريح العمل، ومساعدة الأجانب في أي إجراء قانوني داخل جنوب سيناء.',
        en: 'Tourist and property residency, work permits, and help with any legal procedure foreigners face in South Sinai.',
      },
    },
    {
      path: '/criminal-law', icon: 'fas fa-balance-scale',
      title: { ar: 'محامي جنائي في شرم الشيخ', en: 'Criminal Lawyer in Sharm El Sheikh' },
      text: {
        ar: 'حضور عاجل أمام أقسام الشرطة والنيابة للسياح والمقيمين، والدفاع في الجنح والجنايات والاستئناف.',
        en: 'Urgent attendance at police stations and the prosecution for tourists and residents, plus defense and appeals.',
      },
    },
    {
      path: '/civil-law', icon: 'fas fa-key',
      title: { ar: 'محامي عقارات وحق انتفاع في شرم الشيخ', en: 'Property & Usufruct Lawyer in Sharm El Sheikh' },
      text: {
        ar: 'مراجعة عقود الشقق والفيلات وحق الانتفاع قبل التوقيع، ومنازعات المطورين والإيجار والتعويضات.',
        en: 'Reviewing apartment, villa and usufruct contracts before you sign, and handling developer, rent and compensation disputes.',
      },
    },
    {
      path: '/family-law', icon: 'fas fa-users',
      title: { ar: 'محامي أحوال شخصية في شرم الشيخ', en: 'Family Lawyer in Sharm El Sheikh' },
      text: {
        ar: 'توثيق زواج الأجانب، الطلاق والنفقة والحضانة، والزواج المختلط بين مصريين وأجانب.',
        en: 'Foreign and mixed marriages, divorce, alimony and child custody between Egyptian and foreign spouses.',
      },
    },
    {
      path: '/company-law', icon: 'fas fa-umbrella-beach',
      title: { ar: 'محامي شركات واستثمار سياحي', en: 'Corporate & Tourism Investment Lawyer' },
      text: {
        ar: 'تأسيس شركات السياحة والغوص والمطاعم، التراخيص، وعقود إدارة الفنادق والشراكات.',
        en: 'Setting up tour, diving and restaurant companies, licensing, hotel management agreements and partnerships.',
      },
    },
    {
      path: '/arbitration-mediation', icon: 'fas fa-gavel',
      title: { ar: 'محامي تحكيم في شرم الشيخ', en: 'Arbitration Lawyer in Sharm El Sheikh' },
      text: {
        ar: 'تسوية منازعات الفنادق والمقاولات والاستثمار السياحي بالتحكيم والوساطة، وتنفيذ أحكام التحكيم.',
        en: 'Resolving hotel, construction and tourism investment disputes by arbitration and mediation, and enforcing awards.',
      },
    },
  ],
  courtsHeading: { ar: 'المحاكم والجهات التي نتعامل معها في جنوب سيناء', en: 'Courts & Authorities We Handle in South Sinai' },
  courtsText: {
    ar: 'نترافع أمام محكمة شرم الشيخ الجزئية ومحكمة الطور الابتدائية ومحاكم الأسرة ومحاكم الاستئناف المختصة، ونحضر أمام نيابة شرم الشيخ وأقسام الشرطة، ونتابع الإجراءات لدى الشهر العقاري ومكتب الجوازات والهجرة في جنوب سيناء.',
    en: 'We appear before the Sharm El Sheikh District Court, the El Tor Primary Court, family courts and the competent appeal courts, attend the Sharm El Sheikh prosecution and police stations, and handle procedures at the South Sinai Notary and Passports & Immigration offices.',
  },
  areasHeading: { ar: 'المناطق التي نخدمها', en: 'Areas We Serve' },
  areas: [
    { ar: 'الهضبة', en: 'Hadaba' },
    { ar: 'خليج نعمة', en: 'Naama Bay' },
    { ar: 'نبق', en: 'Nabq' },
    { ar: 'شرم الميا (السوق القديم)', en: 'Sharm El Maya (Old Market)' },
    { ar: 'خليج القرش', en: 'Sharks Bay' },
    { ar: 'هضبة أم السيد', en: 'Um El Sid' },
    { ar: 'دهب', en: 'Dahab' },
    { ar: 'نويبع', en: 'Nuweiba' },
    { ar: 'الطور', en: 'El Tor' },
  ],
  whyHeading: { ar: 'لماذا تختار مكتبنا في شرم الشيخ؟', en: 'Why Choose Our Sharm El Sheikh Law Firm?' },
  why: [
    {
      title: { ar: 'نتحدث لغتك', en: 'We Speak Your Language' },
      text: { ar: 'الإنجليزية والإيطالية والفرنسية والعربية، دون وسيط.', en: 'English, Italian, French and Arabic – no middleman.' },
    },
    {
      title: { ar: 'استجابة سريعة', en: 'Fast Response' },
      text: { ar: 'تواصل مباشر عبر الهاتف وواتساب في الحالات العاجلة.', en: 'Direct phone and WhatsApp contact for urgent matters.' },
    },
    {
      title: { ar: 'خبرة منذ 2006', en: 'Practising Since 2006' },
      text: { ar: 'خبرة طويلة مع قضايا الأجانب والاستثمار السياحي.', en: 'Long experience with foreigners\' cases and tourism investment.' },
    },
    {
      title: { ar: 'وضوح في الأتعاب', en: 'Clear Fees' },
      text: { ar: 'نحدد نطاق العمل والأتعاب كتابياً قبل البدء.', en: 'Scope and fees agreed in writing before we start.' },
    },
  ],
  faqHeading: { ar: 'أسئلة شائعة عن المحامي في شرم الشيخ', en: 'FAQ – Hiring a Lawyer in Sharm El Sheikh' },
  faq: [
    {
      q: { ar: 'أين يقع مكتبكم في شرم الشيخ؟', en: 'Where is your office in Sharm El Sheikh?' },
      a: {
        ar: 'مكتبنا في 123 شارع البحر، شرم الشيخ، جنوب سيناء، وهو مفتوح 24 ساعة طوال أيام الأسبوع. للحالات العاجلة اتصل أو راسلنا على واتساب 01223767592.',
        en: 'Our office is at 123 El Bahr St., Sharm El Sheikh, South Sinai, and is open 24 hours, 7 days a week. For urgent matters call or WhatsApp +20 122 376 7592.',
      },
    },
    {
      q: { ar: 'تعرضت لمشكلة مع الشرطة كسائح في شرم الشيخ، ماذا أفعل؟', en: 'I am a tourist and have a problem with the police in Sharm El Sheikh. What should I do?' },
      a: {
        ar: 'لا توقّع على أي محضر لا تفهمه، واطلب التواصل مع محامٍ وسفارتك. اتصل بنا مباشرة لنحضر معك أمام القسم أو النيابة ونشرح لك موقفك بلغتك.',
        en: 'Do not sign any statement you do not understand, and ask to contact a lawyer and your embassy. Call us directly so we can attend the police station or prosecution with you and explain your position in your language.',
      },
    },
    {
      q: { ar: 'هل يستطيع الأجنبي شراء عقار في شرم الشيخ؟', en: 'Can a foreigner buy property in Sharm El Sheikh?' },
      a: {
        ar: 'التملك في جنوب سيناء يخضع لقواعد خاصة، وغالباً ما يتم شراء الوحدات بنظام حق الانتفاع لمدد طويلة. نراجع العقد ومستندات المطور قبل التوقيع لحماية حقوقك.',
        en: 'Ownership in South Sinai follows special rules, and units are often sold to foreigners on a long-term usufruct basis. We review the contract and the developer\'s documents before you sign to protect your rights.',
      },
    },
    {
      q: { ar: 'هل يوجد محامي يتحدث الإيطالية أو الإنجليزية في شرم الشيخ؟', en: 'Is there an Italian or English-speaking lawyer in Sharm El Sheikh?' },
      a: {
        ar: 'نعم، نتعامل مع موكلينا بالإيطالية والإنجليزية والفرنسية إلى جانب العربية.',
        en: 'Yes. We work with clients in Italian, English and French as well as Arabic.',
      },
    },
    {
      q: { ar: 'هل تساعدون في إقامات الأجانب في شرم الشيخ؟', en: 'Do you help with residency permits in Sharm El Sheikh?' },
      a: {
        ar: 'نعم، نجهز ملفات الإقامة السياحية والعقارية وإقامة الزواج وتصاريح العمل ونتابعها لدى الجوازات.',
        en: 'Yes. We prepare and follow up tourist, property-based and marriage residency files and work permits with the immigration office.',
      },
    },
    {
      q: { ar: 'هل يمكن توثيق زواج أجنبي من مصرية أو مصري في شرم الشيخ؟', en: 'Can a foreigner marry an Egyptian in Sharm El Sheikh?' },
      a: {
        ar: 'نعم، نجهز المستندات المطلوبة من السفارة والشهر العقاري ونتابع التوثيق، وننصحك بشأن الاعتراف بالزواج في بلدك.',
        en: 'Yes. We prepare the documents required by your embassy and the Notary, follow the registration, and advise on recognition of the marriage in your home country.',
      },
    },
  ],
  otherBranch: { path: '/alexandria', text: { ar: 'مكتبنا الرئيسي في الإسكندرية', en: 'Our Alexandria main office' } },
  relatedArticle: {
    path: '/blog/foreign-lawyer-sharm-el-sheikh',
    text: { ar: 'اقرأ: دليل الأجانب للخدمات القانونية في شرم الشيخ', en: 'Read: Legal guide for foreigners in Sharm El Sheikh' },
  },
};

const SharmElSheikh: React.FC = () => <CityLandingPage data={data} />;

export default SharmElSheikh;
