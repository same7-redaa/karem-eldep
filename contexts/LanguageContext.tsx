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
    'hero.title': 'مؤسسة كريم الديب للمحاماة',
    'hero.subtitle': 'خدمات قانونية بلا حدود',
    'hero.cta': 'احجز استشارة قانونية',
    
    // About
    'about.title': 'نبذة عن كريم الديب',
    'about.p1': 'الأستاذ كريم الديب، محامي بالنقض مصري، ويبلغ من العمر 44 عاما (مواليد 1980). يعد من أبرز المتخصصين في قضايا الأجانب والشركات الأجنبية في مصر، بخبرة قانونية تتجاوز 18 عاما.',
    'about.p2': 'تميز مسيرته بالتعامل مع قضايا معقدة ترتبط بالاستثمار الأجنبي والهجرة والإقامة والتجارة الدولية. هو المحامي المعتمد لدى القنصلية الفرنسية وعدد من السفارات الأوروبية.',
    'about.p3': 'حاصل على ليسانس الحقوق بتقدير جيد جدا ودبلوم في القانون الدولي من سويسرا. يتقن العربية، الإنجليزية، الفرنسية، والإيطالية بطلاقة.',
    'about.stat1': 'سنة خبرة',
    'about.stat2': 'موكل',
    'about.stat3.value': 'عالمية',
    'about.stat3.label': 'خدمات',
    
    // Services
    'services.title': 'خدمات قانونية بلا حدود',
    'services.subtitle': 'خدمات قانونية شاملة ومتخصصة للأجانب والشركات الأجنبية في مصر',
    'services.immigration': 'الإقامة والهجرة',
    'services.immigration.desc': 'خدمات كاملة لتجديد الإقامات والتأشيرات للأجانب في مصر مع متابعة دقيقة لجميع الإجراءات.',
    'services.companies': 'تأسيس الشركات',
    'services.companies.desc': 'تأسيس الشركات الأجنبية والهيئات الاستثمارية في مصر (شركات مساهمة، شركات ذات مسئولية محدودة، فروع شركات أجنبية).',
    'services.commercial': 'القانون التجاري',
    'services.commercial.desc': 'صياغة العقود التجارية الدولية واتفاقيات التصدير والاستيراد بأعلى معايير الجودة.',
    'services.arbitration': 'التحكيم والوساطة',
    'services.arbitration.desc': 'حل وتسوية المنازعات من خلال التحكيم الداخلي والدولي والوساطة القانونية.',
    'services.labor': 'قانون العمل',
    'services.labor.desc': 'استشارات متخصصة في قوانين العمل المصرية للأجانب والشركات متعددة الجنسيات.',
    'services.tourism': 'قطاع السياحة',
    'services.tourism.desc': 'خدمات قانونية لقطاع السياحة: تراخيص شركات السياحة، تنظيم عمل الأجانب في المنشآت السياحية.',
    
    // Why Choose Us
    'why.title': 'لماذا تختار مؤسسة كريم الديب؟',
    'why.subtitle': 'مؤسسة كريم الديب للمحاماة تهدف إلى تقديم خدمات قانونية دولية بمستوى عالمي، مع الحفاظ على السرية التامة والالتزام بأخلاقيات المهنة.',
    'why.diplomatic': 'اعتمادات دبلوماسية',
    'why.diplomatic.desc': 'محامٍ معتمد لدى القنصلية الفرنسية والسفارات البريطانية والبلجيكية والألمانية والإيطالية',
    'why.international': 'خبرة دولية',
    'why.international.desc': 'خبرة عملية في سويسرا وفرنسا والولايات المتحدة الأمريكية لأكثر من 10 سنوات',
    'why.languages': 'تعدد اللغات',
    'why.languages.desc': 'نتحدث العربية والإنجليزية والفرنسية والإيطالية بطلاقة لخدمة عملائنا الدوليين',
    'why.confidential': 'سرية تامة',
    'why.confidential.desc': 'نوفر خدماتنا القانونية بدرجة عالية من السرية والاحترافية',
    
    // Contact
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'نحن هنا لمساعدتك - تواصل معنا الآن',
    'contact.info': 'معلومات التواصل والعناوين',
    'contact.alex': 'مكتب الإسكندرية',
    'contact.alex.address': 'المسلة غرب وشريف باشا، العطارين، الإسكندرية',
    'contact.sharm': 'مكتب شرم الشيخ',
    'contact.sharm.address': 'الهضبة، شرم الشيخ',
    'contact.methods': 'طرق التواصل',
    'contact.whatsapp': 'واتساب',
    
    // Footer
    'footer.rights': 'مؤسسة كريم الديب للمحاماة. جميع الحقوق محفوظة.',
    'footer.designed': 'تم التصميم والتطوير بواسطة:',
    'footer.developer': 'سامح رضا',
    'footer.order': 'اطلب موقعك الآن',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Legal Services',
    'nav.contact': 'Contact Us',
    'nav.book': 'Book Consultation',
    
    // Hero
    'hero.title': 'Karim Eldib Law Firm',
    'hero.subtitle': 'Legal Services Without Borders',
    'hero.cta': 'Book Legal Consultation',
    
    // About
    'about.title': 'About Karim Eldib',
    'about.p1': 'Mr. Karim Eldib, an Egyptian lawyer at the Court of Cassation, is 44 years old (born in 1980). He is one of the most prominent specialists in cases of foreigners and foreign companies in Egypt, with legal experience exceeding 18 years.',
    'about.p2': 'His career has been distinguished by dealing with complex cases related to foreign investment, immigration, residence, and international trade. He is the accredited lawyer at the French Consulate and several European embassies.',
    'about.p3': 'He holds a Bachelor of Law with very good honors and a diploma in International Law from Switzerland. He is fluent in Arabic, English, French, and Italian.',
    'about.stat1': 'Years Experience',
    'about.stat2': 'Clients',
    'about.stat3.value': 'Global',
    'about.stat3.label': 'Services',
    
    // Services
    'services.title': 'Legal Services Without Borders',
    'services.subtitle': 'Comprehensive and specialized legal services for foreigners and foreign companies in Egypt',
    'services.immigration': 'Residence & Immigration',
    'services.immigration.desc': 'Complete services for renewing residencies and visas for foreigners in Egypt with precise follow-up of all procedures.',
    'services.companies': 'Company Formation',
    'services.companies.desc': 'Establishing foreign companies and investment entities in Egypt (joint-stock companies, limited liability companies, branches of foreign companies).',
    'services.commercial': 'Commercial Law',
    'services.commercial.desc': 'Drafting international commercial contracts and export-import agreements with the highest quality standards.',
    'services.arbitration': 'Arbitration & Mediation',
    'services.arbitration.desc': 'Resolving and settling disputes through domestic and international arbitration and legal mediation.',
    'services.labor': 'Labor Law',
    'services.labor.desc': 'Specialized consultations in Egyptian labor laws for foreigners and multinational companies.',
    'services.tourism': 'Tourism Sector',
    'services.tourism.desc': 'Legal services for the tourism sector: tourism company licenses, organizing the work of foreigners in tourist facilities.',
    
    // Why Choose Us
    'why.title': 'Why Choose Karim Eldib Law Firm?',
    'why.subtitle': 'Karim Eldib Law Firm aims to provide international legal services at a world-class level, while maintaining complete confidentiality and commitment to professional ethics.',
    'why.diplomatic': 'Diplomatic Accreditations',
    'why.diplomatic.desc': 'Accredited lawyer at the French Consulate and British, Belgian, German and Italian embassies',
    'why.international': 'International Experience',
    'why.international.desc': 'Practical experience in Switzerland, France and the United States for more than 10 years',
    'why.languages': 'Multilingual',
    'why.languages.desc': 'We speak Arabic, English, French and Italian fluently to serve our international clients',
    'why.confidential': 'Complete Confidentiality',
    'why.confidential.desc': 'We provide our legal services with a high degree of confidentiality and professionalism',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We are here to help you - Contact us now',
    'contact.info': 'Contact Information and Addresses',
    'contact.alex': 'Alexandria Office',
    'contact.alex.address': 'West Obelisk and Sherif Pasha, Attarin, Alexandria',
    'contact.sharm': 'Sharm El Sheikh Office',
    'contact.sharm.address': 'Al Hadaba, Sharm El Sheikh',
    'contact.methods': 'Contact Methods',
    'contact.whatsapp': 'WhatsApp',
    
    // Footer
    'footer.rights': 'Karim Eldib Law Firm. All rights reserved.',
    'footer.designed': 'Designed and Developed by:',
    'footer.developer': 'Sameh Reda',
    'footer.order': 'Order Your Website Now',
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
