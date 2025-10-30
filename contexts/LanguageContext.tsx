import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ar' | 'en' | 'fr' | 'it';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
  getTextByLanguage: (texts: { ar: string; en: string; fr: string; it: string }) => string;
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
    'hero.title': 'مؤسسة كريم الديب للمحاماة الدولية وخدمات الأجانب',
    'hero.subtitle': 'Unlimited lawyers & foreign services',
    'hero.consulate': 'محامي معتمد لدى القنصلية الفرنسية',
    'hero.cta': 'احجز استشارة قانونية',
    
    // About
    'about.title': 'نبذة عن المكتب',
    'about.intro': 'نبذة عن مكتب كريم الديب للمحاماة',
    'about.p1': 'مكتب كريم الديب للمحاماة والاستشارات القانونية هو مكتب قانوني معتمد تأسس عام 2006 ويضم فريق متخصص من المحامين ذوي الخبرة في مختلف فروع القانون.',
    'about.p2': 'يقدم المكتب خدماته في مجالات القضايا الجنائية والمدنية وقضايا الأجانب والاقامات والعقود الدولية والتحكيم قانون الشركات قانون الأسرة قانون تجاري.',
    'about.p3': 'يتميز المكتب بخبرة تتجاوز 18 عام في تقديم الدعم القانوني للأفراد والشركات محليا ودوليا خاصة بالتعاون مع السفارات الأجنبية في مصر. نلتزم بالدقة والسرية والاحترافية في تمثيل عملائنا داخل وخارج مصر. هدفنا هو تحقيق العدالة وحماية حقوق عملائنا بكل شفافية والتزام.',
    'about.stat1': 'سنة خبرة',
    'about.stat2': 'موكل',
    'about.stat3.value': 'عالمية',
    'about.stat3.label': 'خدمات',
    'about.lawyerProfile': 'التعريف بالمحامي كريم الديب',
    
    // Services
        // Services
    'services.title': 'خدماتنا',
    'services.heading': 'خدماتنا القانونية بلا حدود',
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
    'services.arbitration': 'التحكيم والوساطة',
    'services.arbitration.desc': 'تقديم خدمات التحكيم والوساطة لتسوية النزاعات التجارية والمدنية بطرق سلمية وفعالة',
    'services.learnMore': 'اعرف المزيد',
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
    'why.differ': 'لماذا نختلف',
    'why.ready': 'هل أنت مستعد للبدء؟',
    'why.ready.desc': 'تواصل معنا اليوم واحصل على استشارة قانونية متخصصة من فريقنا المحترف',
    'why.book': 'احجز استشارة قانونية',
    
    // Contact
    'contact.title': 'تواصل معنا',
    'contact.heading': 'تواصل معنا الآن',
    'contact.subtitle': 'نحن هنا لمساعدتك - تواصل معنا الآن',
    'contact.info': 'معلومات التواصل والعناوين',
    'contact.alex': 'مكتب الإسكندرية',
    'contact.alex.address': 'محطة الرمل 14 شارع الشهداء متفرع من شارع الغرفة التجارية',
    'contact.sharm': 'مكتب شرم الشيخ',
    'contact.sharm.address': '123 ش البحر الهضبة شرم الشيخ',
    'contact.methods': 'طرق التواصل',
    'contact.whatsapp': 'واتساب',
    'contact.social': 'تابعنا على وسائل التواصل الاجتماعي',
    
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
    'hero.title': 'Karim Eldib International Law Firm & Foreign Services',
    'hero.subtitle': 'Unlimited lawyers & foreign services',
    'hero.consulate': 'Certified Lawyer at the French Consulate',
    'hero.cta': 'Book Legal Consultation',
    
    // About
    'about.title': 'About the Firm',
    'about.intro': 'About Karim Eldib Law Firm',
    'about.p1': 'Karim Eldib Law Firm & Legal Consultations is an accredited legal office established in 2006, comprising a specialized team of experienced lawyers in various branches of law.',
    'about.p2': 'The firm provides its services in the fields of criminal and civil cases, foreigners and residence cases, international contracts, arbitration, corporate law, family law, and commercial law.',
    'about.p3': 'The firm is distinguished by experience spanning over 18 years in providing legal support to individuals and companies locally and internationally, especially in cooperation with foreign embassies in Egypt. We are committed to accuracy, confidentiality, and professionalism in representing our clients inside and outside Egypt. Our goal is to achieve justice and protect the rights of our clients with complete transparency and commitment.',
    'about.stat1': 'Years Experience',
    'about.stat2': 'Clients',
    'about.stat3.value': 'Global',
    'about.stat3.label': 'Services',
    'about.lawyerProfile': 'Meet Lawyer Karim Eldib',
    
    // Services
    'services.title': 'Unlimited Legal Services',
    'services.heading': 'Unlimited Legal Services',
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
    'services.arbitration': 'Arbitration & Mediation',
    'services.arbitration.desc': 'Providing arbitration and mediation services to resolve commercial and civil disputes through peaceful and effective methods',
    'services.learnMore': 'Learn More',
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
    'why.differ': 'Why We Differ',
    'why.ready': 'Are You Ready to Get Started?',
    'why.ready.desc': 'Contact us today and get specialized legal consultation from our professional team',
    'why.book': 'Book Legal Consultation',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.heading': 'Contact Us Now',
    'contact.subtitle': 'We are here to help you - Contact us now',
    'contact.info': 'Contact Information and Addresses',
    'contact.alex': 'Alexandria Office',
    'contact.alex.address': 'Raml Station, 14 Al-Shohada Street, branching from Chamber of Commerce Street',
    'contact.sharm': 'Sharm El Sheikh Office',
    'contact.sharm.address': '123 Al-Bahr Street, Al-Hadaba, Sharm El Sheikh',
    'contact.methods': 'Contact Methods',
    'contact.whatsapp': 'WhatsApp',
    'contact.social': 'Follow Us on Social Media',
    
    // Footer
    'footer.rights': 'Karim Eldib Law Firm. All rights reserved.',
  },
  
  // French translations
  fr: {
    // Header
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.services': 'Services Juridiques',
    'nav.contact': 'Contact',
    'nav.book': 'Réserver une consultation',
    
    // Hero
    'hero.title': 'Cabinet Karim Eldib - Avocat International et Services pour Étrangers',
    'hero.subtitle': 'Services juridiques illimités pour étrangers',
    'hero.consulate': 'Avocat agréé au Consulat de France',
    'hero.cta': 'Réserver une consultation juridique',
    
    // About
    'about.title': 'À propos du cabinet',
    'about.intro': 'À propos du Cabinet Karim Eldib',
    'about.p1': 'Le Cabinet Karim Eldib est un cabinet juridique agréé fondé en 2006, composé d\'une équipe spécialisée d\'avocats expérimentés dans diverses branches du droit.',
    'about.p2': 'Le cabinet offre ses services dans les domaines du droit pénal et civil, affaires d\'étrangers, permis de résidence, contrats internationaux, arbitrage, droit des sociétés, droit de la famille et droit commercial.',
    'about.p3': 'Le cabinet se distingue par une expérience de plus de 18 ans dans la fourniture de soutien juridique aux particuliers et aux entreprises localement et internationalement, en particulier en coopération avec les ambassades étrangères en Égypte.',
    'about.stat1': 'Années d\'expérience',
    'about.stat2': 'Clients',
    'about.stat3.value': 'Mondiaux',
    'about.stat3.label': 'Services',
    'about.lawyerProfile': 'Profil de l\'Avocat Karim Eldib',
    
    // Services
    'services.title': 'Nos Services',
    'services.heading': 'Services Juridiques Illimités',
    'services.subtitle': 'Services juridiques complets et spécialisés pour particuliers et entreprises',
    'services.civil': 'Droit Civil',
    'services.civil.desc': 'Consultations juridiques, rédaction de contrats et gestion des affaires de droits civils',
    'services.criminal': 'Droit Pénal',
    'services.criminal.desc': 'Plaidoiries dans les affaires pénales et représentation devant les tribunaux',
    'services.commercial': 'Droit Commercial',
    'services.commercial.desc': 'Services de création d\'entreprise et gestion des contrats commerciaux',
    'services.family': 'Droit de la Famille',
    'services.family.desc': 'Gestion professionnelle des affaires de divorce, garde et pension alimentaire',
    'services.companies': 'Droit des Sociétés',
    'services.companies.desc': 'Création de sociétés et soutien juridique et administratif complet',
    'services.foreigners': 'Étrangers en Égypte',
    'services.foreigners.desc': 'Création d\'entreprises, permis de résidence, représentation juridique pour étrangers',
    'services.egyptians': 'Égyptiens à l\'étranger',
    'services.egyptians.desc': 'Suivi des affaires en Égypte et consultations juridiques multilingues',
    'services.arbitration': 'Arbitrage et Médiation',
    'services.arbitration.desc': 'Services d\'arbitrage pour résoudre les litiges commerciaux et civils',
    'services.learnMore': 'En savoir plus',
    
    // Why Choose Us
    'why.title': 'Pourquoi choisir le Cabinet Karim Eldib?',
    'why.subtitle': 'Services juridiques internationaux de classe mondiale avec confidentialité totale',
    'why.experience': '18 ans d\'expérience',
    'why.experience.desc': 'Longue expérience dans le soutien juridique local et international',
    'why.diplomatic': 'Coopération Internationale',
    'why.diplomatic.desc': 'Coopération avec les ambassades étrangères et cabinets juridiques internationaux',
    'why.languages': 'Multilingue',
    'why.languages.desc': 'Consultations juridiques en plusieurs langues pour clients internationaux',
    'why.confidential': 'Confidentialité et Professionnalisme',
    'why.confidential.desc': 'Services juridiques avec haut niveau de confidentialité',
    'why.differ': 'Pourquoi nous sommes différents',
    'why.ready': 'Prêt à commencer?',
    'why.ready.desc': 'Contactez-nous aujourd\'hui pour une consultation juridique spécialisée',
    'why.book': 'Réserver une consultation',
    
    // Contact
    'contact.title': 'Contactez-nous',
    'contact.heading': 'Contactez-nous maintenant',
    'contact.subtitle': 'Nous sommes là pour vous aider',
    'contact.info': 'Informations de contact et adresses',
    'contact.alex': 'Bureau d\'Alexandrie',
    'contact.alex.address': 'Station Raml, 14 rue Al-Shohada, Chambre de Commerce',
    'contact.sharm': 'Bureau de Sharm El Sheikh',
    'contact.sharm.address': '123 rue Al-Bahr, Al-Hadaba, Sharm El Sheikh',
    'contact.methods': 'Méthodes de contact',
    'contact.whatsapp': 'WhatsApp',
    'contact.social': 'Suivez-nous sur les réseaux sociaux',
    
    // Footer
    'footer.rights': 'Cabinet Karim Eldib. Tous droits réservés.',
  },
  
  // Italian translations
  it: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'Chi Siamo',
    'nav.services': 'Servizi Legali',
    'nav.contact': 'Contatti',
    'nav.book': 'Prenota consulenza',
    
    // Hero
    'hero.title': 'Studio Legale Karim Eldib - Avvocato Internazionale e Servizi per Stranieri',
    'hero.subtitle': 'Servizi legali illimitati per stranieri',
    'hero.consulate': 'Avvocato certificato presso il Consolato Francese',
    'hero.cta': 'Prenota consulenza legale',
    
    // About
    'about.title': 'Chi Siamo',
    'about.intro': 'Informazioni sullo Studio Legale Karim Eldib',
    'about.p1': 'Lo Studio Legale Karim Eldib è uno studio legale accreditato fondato nel 2006, composto da un team specializzato di avvocati esperti in vari rami del diritto.',
    'about.p2': 'Lo studio offre i suoi servizi nei settori del diritto penale e civile, affari degli stranieri, permessi di soggiorno, contratti internazionali, arbitrato, diritto societario, diritto di famiglia e diritto commerciale.',
    'about.p3': 'Lo studio si distingue per un\'esperienza di oltre 18 anni nel fornire supporto legale a privati e aziende localmente e internazionalmente, in particolare in collaborazione con ambasciate straniere in Egitto.',
    'about.stat1': 'Anni di esperienza',
    'about.stat2': 'Clienti',
    'about.stat3.value': 'Globali',
    'about.stat3.label': 'Servizi',
    'about.lawyerProfile': 'Profilo dell\'Avvocato Karim Eldib',
    
    // Services
    'services.title': 'I Nostri Servizi',
    'services.heading': 'Servizi Legali Illimitati',
    'services.subtitle': 'Servizi legali completi e specializzati per privati e aziende',
    'services.civil': 'Diritto Civile',
    'services.civil.desc': 'Consulenze legali, redazione contratti e gestione cause civili',
    'services.criminal': 'Diritto Penale',
    'services.criminal.desc': 'Difesa in cause penali e rappresentanza nei tribunali',
    'services.commercial': 'Diritto Commerciale',
    'services.commercial.desc': 'Servizi di costituzione società e gestione contratti commerciali',
    'services.family': 'Diritto di Famiglia',
    'services.family.desc': 'Gestione professionale di divorzi, custodia e alimenti',
    'services.companies': 'Diritto Societario',
    'services.companies.desc': 'Costituzione società e supporto legale e amministrativo completo',
    'services.foreigners': 'Stranieri in Egitto',
    'services.foreigners.desc': 'Costituzione società, permessi di soggiorno, rappresentanza legale per stranieri',
    'services.egyptians': 'Egiziani all\'estero',
    'services.egyptians.desc': 'Gestione affari in Egitto e consulenze legali multilingue',
    'services.arbitration': 'Arbitrato e Mediazione',
    'services.arbitration.desc': 'Servizi di arbitrato per risolvere controversie commerciali e civili',
    'services.learnMore': 'Scopri di più',
    
    // Why Choose Us
    'why.title': 'Perché scegliere lo Studio Legale Karim Eldib?',
    'why.subtitle': 'Servizi legali internazionali di livello mondiale con totale riservatezza',
    'why.experience': '18 anni di esperienza',
    'why.experience.desc': 'Lunga esperienza nel supporto legale locale e internazionale',
    'why.diplomatic': 'Cooperazione Internazionale',
    'why.diplomatic.desc': 'Cooperazione con ambasciate straniere e studi legali internazionali',
    'why.languages': 'Multilingue',
    'why.languages.desc': 'Consulenze legali in più lingue per clienti internazionali',
    'why.confidential': 'Riservatezza e Professionalità',
    'why.confidential.desc': 'Servizi legali con alto livello di riservatezza',
    'why.differ': 'Perché siamo diversi',
    'why.ready': 'Pronto per iniziare?',
    'why.ready.desc': 'Contattaci oggi per una consulenza legale specializzata',
    'why.book': 'Prenota consulenza',
    
    // Contact
    'contact.title': 'Contattaci',
    'contact.heading': 'Contattaci ora',
    'contact.subtitle': 'Siamo qui per aiutarti',
    'contact.info': 'Informazioni di contatto e indirizzi',
    'contact.alex': 'Ufficio di Alessandria',
    'contact.alex.address': 'Stazione Raml, 14 via Al-Shohada, Camera di Commercio',
    'contact.sharm': 'Ufficio di Sharm El Sheikh',
    'contact.sharm.address': '123 via Al-Bahr, Al-Hadaba, Sharm El Sheikh',
    'contact.methods': 'Metodi di contatto',
    'contact.whatsapp': 'WhatsApp',
    'contact.social': 'Seguici sui social media',
    
    // Footer
    'footer.rights': 'Studio Legale Karim Eldib. Tutti i diritti riservati.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load language from localStorage or default to 'en'
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    return (savedLanguage as Language) || 'en';
  });

  useEffect(() => {
    // Set document direction based on language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    
    // Save language preference to localStorage
    localStorage.setItem('preferredLanguage', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => {
      if (prev === 'ar') return 'en';
      if (prev === 'en') return 'fr';
      if (prev === 'fr') return 'it';
      return 'ar';
    });
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const getTextByLanguage = (texts: { ar: string; en: string; fr: string; it: string }): string => {
    return texts[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, getTextByLanguage }}>
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
