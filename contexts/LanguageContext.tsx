import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  ar: {
    // Header
    'nav.home': 'الرئيسية',
    'nav.about': 'نبذة عنا',
    'nav.services': 'الخدمات القانونية',
    'nav.contact': 'اتصل بنا',
    'nav.book': 'احجز استشارة',
    
    // Hero
    'hero.title': 'مكتب كريم الديب للمحاماة والاستشارات القانونية',
    'hero.subtitle': 'Unlimited lawyers & foreign services',
    'hero.cta': 'احجز استشارة قانونية',
    
    // About
    'about.title': 'نبذة عن المكتب',
    'about.p1': 'مكتب كريم الديب للمحاماة والاستشارات القانونية هو مكتب قانوني معتمد تأسس عام 2006 ويضم فريق متخصص من المحامين ذوي الخبرة في مختلف فروع القانون.',
    'about.p2': 'يقدم المكتب خدماته في مجالات القضايا الجنائية والمدنية وقضايا الأجانب والاقامات والعقود الدولية والتحكيم قانون الشركات قانون الأسرة قانون تجاري.',
    'about.p3': 'يتميز المكتب بخبرة تتجاوز 18 عام في تقديم الدعم القانوني للأفراد والشركات محليا ودوليا خاصة بالتعاون مع السفارات الأجنبية في مصر. نلتزم بالدقة والسرية والاحترافية في تمثيل عملائنا داخل وخارج مصر. هدفنا هو تحقيق العدالة وحماية حقوق عملائنا بكل شفافية والتزام.',
    'about.stat1': 'سنة خبرة',
    'about.stat2': 'موكل',
    'about.stat3.value': 'عالمية',
    'about.stat3.label': 'خدمات',
    
    // Services
    'services.title': 'خدمات قانونية بلا حدود',
    'services.subtitle': 'خدمات قانونية شاملة ومتخصصة للأفراد والشركات محليا ودوليا',
    'services.civil': 'القانون المدني',
    'services.civil.desc': 'تقديم الإستشارات القانونية وصياغة العقود ومباشرة القضايا المتعلقة بالحقوق المدنية والنزاعات والتعويضات',
    'services.criminal': 'القانون الجنائي',
    'services.criminal.desc': 'الترافع في القضايا الجنائية والدفاع عن المتهمين وتمثيل المجني عليهم أمام جهات التحقيق والمحاكم',
    'services.commercial': 'القانون التجاري',
    'services.commercial.desc': 'تقديم خدمات تأسيس ومتابعة عقود المعاملات التجارية وتسوية النزاعات بين التجار',
    'services.family': 'قانون الأحوال الشخصية',
    'services.family.desc': 'التعامل باحترافية مع قضايا الطلاق والخلع والنفقة والحضانة والقروية ومراعاة البعد الإنساني والاجتماعي',
    'services.companies': 'قانون الشركات',
    'services.companies.desc': 'تأسيس الشركات بجميع أنواعها وتقديم الدعم القانوني والإداري لها بما في ذلك صياغة العقود واللوائح الداخلية وتمثيل الشركات أمام الجهات القضائية والرسمية',
    'services.foreigners': 'الأجانب في مصر',
    'services.foreigners.desc': 'تأسيس الشركات داخل مصر واستخراج تصاريح الإقامة والعمل والتمثيل القانوني في النزاعات المدنية والجنائية وتنظيم عقود الزواج والطلاق بما يتوافق مع القوانين المصرية والدولية',
    'services.egyptians': 'المصريين بالخارج',
    'services.egyptians.desc': 'متابعة القضايا داخل مصر نيابة عنهم وإدارة شؤونهم العقارية والقانونية وتنفيذ الوكالات الشرعية والعامة وتقديم استشارات قانونية بلغات متعددة',
    
    // Why Choose Us
    'why.title': 'لماذا تختار مكتب كريم الديب؟',
    'why.subtitle': 'مكتب كريم الديب للمحاماة يهدف إلى تقديم خدمات قانونية دولية بمستوى عالمي، مع الحفاظ على السرية التامة والالتزام بأخلاقيات المهنة.',
    'why.experience': 'خبرة 18 عام',
    'why.experience.desc': 'خبرة طويلة في تقديم الدعم القانوني للأفراد والشركات محليا ودوليا',
    'why.diplomatic': 'تعاون دولي',
    'why.diplomatic.desc': 'تعاون مع السفارات الأجنبية في مصر ومكاتب قانونية دولية',
    'why.languages': 'تعدد اللغات',
    'why.languages.desc': 'تقديم استشارات قانونية بلغات متعددة لخدمة العملاء الدوليين',
    'why.confidential': 'السرية والاحترافية',
    'why.confidential.desc': 'نوفر خدماتنا القانونية بدرجة عالية من السرية والاحترافية',
    
    // Contact
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'نحن هنا لمساعدتك - تواصل معنا الآن',
    'contact.info': 'معلومات التواصل والعناوين',
    'contact.alex': 'مكتب الإسكندرية',
    'contact.alex.address': 'محطة الرمل 14 شارع الشهداء متفرع من شارع الغرفة التجارية',
    'contact.sharm': 'مكتب شرم الشيخ',
    'contact.sharm.address': '123 ش البحر الهضبة شرم الشيخ',
    'contact.methods': 'طرق التواصل',
    'contact.whatsapp': 'واتساب',
    
    // Footer
    'footer.rights': 'مكتب كريم الديب للمحاماة. جميع الحقوق محفوظة.',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Legal Services',
    'nav.contact': 'Contact Us',
    'nav.book': 'Book Consultation',
    
    // Hero
    'hero.title': 'Karim Eldib Law Firm & Legal Consultations',
    'hero.subtitle': 'Unlimited lawyers & foreign services',
    'hero.cta': 'Book Legal Consultation',
    
    // About
    'about.title': 'About the Firm',
    'about.p1': 'Karim Eldib Law Firm & Legal Consultations is an accredited legal office established in 2006, comprising a specialized team of experienced lawyers in various branches of law.',
    'about.p2': 'The firm provides its services in the fields of criminal and civil cases, foreigners and residence cases, international contracts, arbitration, corporate law, family law, and commercial law.',
    'about.p3': 'The firm is distinguished by experience spanning over 18 years in providing legal support to individuals and companies locally and internationally, especially in cooperation with foreign embassies in Egypt. We are committed to accuracy, confidentiality, and professionalism in representing our clients inside and outside Egypt. Our goal is to achieve justice and protect the rights of our clients with complete transparency and commitment.',
    'about.stat1': 'Years Experience',
    'about.stat2': 'Clients',
    'about.stat3.value': 'Global',
    'about.stat3.label': 'Services',
    
    // Services
    'services.title': 'Unlimited Legal Services',
    'services.subtitle': 'Comprehensive and specialized legal services for individuals and companies locally and internationally',
    'services.civil': 'Civil Law',
    'services.civil.desc': 'Providing legal consultations, drafting contracts, and pursuing cases related to civil rights, disputes, and compensation',
    'services.criminal': 'Criminal Law',
    'services.criminal.desc': 'Pleading in criminal cases, defending defendants, and representing victims before investigation authorities and courts',
    'services.commercial': 'Commercial Law',
    'services.commercial.desc': 'Providing establishment services and following up on commercial transaction contracts and settling disputes between traders',
    'services.family': 'Family Law',
    'services.family.desc': 'Professional handling of divorce, khula, alimony, custody, and village cases while considering the human and social dimension',
    'services.companies': 'Corporate Law',
    'services.companies.desc': 'Establishing companies of all types and providing legal and administrative support including drafting contracts and internal regulations and representing companies before judicial and official authorities',
    'services.foreigners': 'Foreigners in Egypt',
    'services.foreigners.desc': 'Establishing companies within Egypt, obtaining residence and work permits, legal representation in civil and criminal disputes, and organizing marriage and divorce contracts in compliance with Egyptian and international laws',
    'services.egyptians': 'Egyptians Abroad',
    'services.egyptians.desc': 'Following up cases within Egypt on their behalf, managing their real estate and legal affairs, implementing religious and general powers of attorney, and providing legal consultations in multiple languages',
    
    // Why Choose Us
    'why.title': 'Why Choose Karim Eldib Law Firm?',
    'why.subtitle': 'Karim Eldib Law Firm aims to provide international legal services at a world-class level, while maintaining complete confidentiality and commitment to professional ethics.',
    'why.experience': '18 Years Experience',
    'why.experience.desc': 'Long experience in providing legal support to individuals and companies locally and internationally',
    'why.diplomatic': 'International Cooperation',
    'why.diplomatic.desc': 'Cooperation with foreign embassies in Egypt and international legal offices',
    'why.languages': 'Multilingual',
    'why.languages.desc': 'Providing legal consultations in multiple languages to serve international clients',
    'why.confidential': 'Confidentiality & Professionalism',
    'why.confidential.desc': 'We provide our legal services with a high degree of confidentiality and professionalism',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We are here to help you - Contact us now',
    'contact.info': 'Contact Information and Addresses',
    'contact.alex': 'Alexandria Office',
    'contact.alex.address': 'Raml Station, 14 Al-Shohada Street, branching from Chamber of Commerce Street',
    'contact.sharm': 'Sharm El Sheikh Office',
    'contact.sharm.address': '123 Al-Bahr Street, Al-Hadaba, Sharm El Sheikh',
    'contact.methods': 'Contact Methods',
    'contact.whatsapp': 'WhatsApp',
    
    // Footer
    'footer.rights': 'Karim Eldib Law Firm. All rights reserved.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    // Set document direction based on language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
