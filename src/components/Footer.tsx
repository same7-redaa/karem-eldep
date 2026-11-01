import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { language, t, getTextByLanguage } = useLanguage();
  const isRTL = language === 'ar';

  const getLocalizedLink = (path: string) => {
    if (language === 'ar') return path;
    return `/${language}${path === '/' ? '' : path}`;
  };

  const practiceAreas = [
    {
      name: getTextByLanguage({
        ar: 'التحكيم التجاري الدولي وتسوية المنازعات',
        en: 'International Commercial Arbitration',
        fr: 'Arbitrage Commercial International',
        it: 'Arbitrato Commerciale Internazionale'
      }),
      path: '/arbitration-mediation'
    },
    {
      name: getTextByLanguage({
        ar: 'خدمات الأجانب والمستثمرين في مصر',
        en: 'Foreigners & Expat Legal Services',
        fr: 'Services aux Étrangers et Investisseurs',
        it: 'Servizi per Stranieri e Investitori'
      }),
      path: '/foreigners-in-egypt'
    },
    {
      name: getTextByLanguage({
        ar: 'تأسيس الشركات وقانون الأعمال',
        en: 'Company Formation & Business Law',
        fr: 'Création d\'Entreprises & Sociétés',
        it: 'Costituzione Società & Diritto Commerciale'
      }),
      path: '/company-law'
    },
    {
      name: getTextByLanguage({
        ar: 'خدمات المصريين بالخارج وإدارة التركات',
        en: 'Egyptian Expats & Asset Management',
        fr: 'Égyptiens à l\'Étranger & Patrimoine',
        it: 'Espatriati Egiziani & Gestione Patrimoniale'
      }),
      path: '/egyptians-abroad'
    },
    {
      name: getTextByLanguage({
        ar: 'قانون الأسرة والأحوال الشخصية للأجانب',
        en: 'Family Law & Expat Divorce',
        fr: 'Droit de la Famille & Divorce',
        it: 'Diritto di Famiglia & Divorzio'
      }),
      path: '/family-law'
    },
    {
      name: getTextByLanguage({
        ar: 'القانون التجاري والعقود الدولية',
        en: 'Commercial Law & International Contracts',
        fr: 'Droit Commercial & Contrats',
        it: 'Diritto Commerciale & Contratti'
      }),
      path: '/commercial-law'
    },
    {
      name: getTextByLanguage({
        ar: 'القانون المدني والمنازعات العقارية',
        en: 'Civil Law & Real Estate Disputes',
        fr: 'Droit Civil & Litiges Immobiliers',
        it: 'Diritto Civile & Controversie Immobiliari'
      }),
      path: '/civil-law'
    },
    {
      name: getTextByLanguage({
        ar: 'الدفاع الجنائي وتمثيل المتهمين',
        en: 'Criminal Defense & Litigation',
        fr: 'Défense Pénale & Contentieux',
        it: 'Difesa Penale & Contenzioso'
      }),
      path: '/criminal-law'
    }
  ];

  const quickLinks = [
    { name: getTextByLanguage({ ar: 'الرئيسية', en: 'Home', fr: 'Accueil', it: 'Home' }), path: '/' },
    { name: getTextByLanguage({ ar: 'كافة الخدمات القانونية', en: 'All Legal Services', fr: 'Tous les Services', it: 'Tutti i Servizi' }), path: '/services' },
    { name: getTextByLanguage({ ar: 'عن المؤسسة وتاريخنا', en: 'About Our Firm', fr: 'À Propos du Cabinet', it: 'Chi Siamo' }), path: '/about-us' },
    { name: getTextByLanguage({ ar: 'مدير المؤسسة: كريم الديب', en: 'Firm Director: Karim Eldib', fr: 'Directeur: Karim Eldib', it: 'Direttore: Karim Eldib' }), path: '/lawyer-profile' },
    { name: getTextByLanguage({ ar: 'الأسئلة الشائعة (FAQ)', en: 'FAQ', fr: 'FAQ', it: 'FAQ' }), path: '/faq' },
    { name: getTextByLanguage({ ar: 'المدونة القانونية ومقالات الاستثمار', en: 'Legal Blog & Guides', fr: 'Blog Juridique', it: 'Blog Legale' }), path: '/blog' }
  ];

  const cityLinks = [
    {
      name: getTextByLanguage({
        ar: 'المكتب الرئيسي - الإسكندرية (14 شارع الشهداء / فؤاد)',
        en: 'Main Office - Alexandria (14 El Shohada / Fouad St)',
        fr: 'Bureau Principal - Alexandrie',
        it: 'Ufficio Principale - Alessandria'
      }),
      path: '/alexandria'
    },
    {
      name: getTextByLanguage({
        ar: 'فرع شرم الشيخ - الهضبة / جنوب سيناء',
        en: 'Sharm El Sheikh Branch - Hadaba / South Sinai',
        fr: 'Succursale - Sharm El Sheikh',
        it: 'Filiale - Sharm El Sheikh'
      }),
      path: '/sharm-el-sheikh'
    },
    {
      name: getTextByLanguage({
        ar: 'مكتب التمثيل - القاهرة (مركز CRCICA وهيئة الاستثمار)',
        en: 'Representation Office - Cairo (CRCICA & GAFI)',
        fr: 'Bureau de Représentation - Le Caire',
        it: 'Ufficio di Rappresentanza - Il Cairo'
      }),
      path: '/cairo'
    }
  ];

  return (
    <footer className="bg-[#061021] text-gray-400 pt-16 pb-10 border-t border-white/10" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: About Firm & NAP */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://i.postimg.cc/G3FMRMY4/3.png" 
                alt="Karim Eldib Law Firm Logo" 
                className="h-12 w-auto"
                style={{ mixBlendMode: 'screen' }}
              />
              <div>
                <h3 className="text-[#d4a15c] font-bold text-lg leading-tight">
                  {isRTL ? 'مؤسسة كريم الديب للمحاماة' : 'Karim Eldib Law Firm'}
                </h3>
                <span className="text-xs text-gray-400">Unlimited Lawyers & Foreign Services</span>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              {isRTL 
                ? 'مؤسسة قانونية دولية رائدة معتمدة تأسست عام 2006. متخصصة في التحكيم التجاري الدولي، منازعات الاستثمار، تأسيس الشركات، وحماية حقوق الأجانب والمصريين بالخارج.'
                : 'Premier accredited international law firm established in 2006. Specializing in international commercial arbitration, investment disputes, company formation, and foreigners legal protection.'}
            </p>
            <div className="space-y-2 text-xs text-gray-400">
              <p><strong className="text-[#d4a15c]">📞 {isRTL ? 'هاتف / واتساب:' : 'Tel / WhatsApp:'}</strong> <a href="tel:+201223767592" className="hover:text-white transition-colors" dir="ltr">+20 122 376 7592</a></p>
              <p><strong className="text-[#d4a15c]">✉️ {isRTL ? 'البريد الإلكتروني:' : 'Email:'}</strong> <a href="mailto:kingarim2411@gmail.com" className="hover:text-white transition-colors">kingarim2411@gmail.com</a></p>
              <p><strong className="text-[#d4a15c]">🌐 {isRTL ? 'اللغات المعتمدة:' : 'Languages:'}</strong> {isRTL ? 'العربية • English • Français • Italiano' : 'Arabic • English • French • Italian'}</p>
            </div>
          </div>

          {/* Col 2: Practice Areas */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h4 className="text-white font-bold text-base mb-4 border-b border-[#d4a15c]/30 pb-2">
              {isRTL ? 'مجالات الممارسة والتخصص' : 'Practice Areas'}
            </h4>
            <ul className="space-y-2 text-sm">
              {practiceAreas.map((area, idx) => (
                <li key={idx}>
                  <Link 
                    to={getLocalizedLink(area.path)} 
                    className="hover:text-[#d4a15c] transition-colors duration-200 block text-xs lg:text-sm py-0.5"
                  >
                    • {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h4 className="text-white font-bold text-base mb-4 border-b border-[#d4a15c]/30 pb-2">
              {isRTL ? 'روابط سريعة' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to={getLocalizedLink(link.path)} 
                    className="hover:text-[#d4a15c] transition-colors duration-200 block text-xs lg:text-sm"
                  >
                    → {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Branches & Offices */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h4 className="text-white font-bold text-base mb-4 border-b border-[#d4a15c]/30 pb-2">
              {isRTL ? 'فروعنا ومكاتبنا' : 'Offices & Branches'}
            </h4>
            <ul className="space-y-3 text-sm">
              {cityLinks.map((city, idx) => (
                <li key={idx} className="bg-white/5 p-2.5 rounded-md border border-white/5 hover:border-[#d4a15c]/30 transition-all">
                  <Link 
                    to={getLocalizedLink(city.path)} 
                    className="hover:text-[#d4a15c] transition-colors duration-200 block font-medium text-xs lg:text-sm text-gray-200"
                  >
                    📍 {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} {isRTL ? 'مؤسسة كريم الديب للمحاماة والاستشارات القانونية الدولية. جميع الحقوق محفوظة.' : 'Karim Eldib Law Firm. All rights reserved.'}
          </p>
          <div className="flex gap-4">
            <Link to={getLocalizedLink('/')} className="hover:text-gray-400">{isRTL ? 'الرئيسية' : 'Home'}</Link>
            <Link to={getLocalizedLink('/services')} className="hover:text-gray-400">{isRTL ? 'الخدمات' : 'Services'}</Link>
            <Link to={getLocalizedLink('/faq')} className="hover:text-gray-400">{isRTL ? 'الأسئلة الشائعة' : 'FAQ'}</Link>
            <Link to={getLocalizedLink('/blog')} className="hover:text-gray-400">{isRTL ? 'المقالات' : 'Blog'}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
