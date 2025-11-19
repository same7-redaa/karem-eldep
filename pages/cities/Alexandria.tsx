import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import AdvancedSEO from '../../components/AdvancedSEO';
import Hero from '../../components/Hero';
import Contact from '../../components/Contact';
import PracticeAreas from '../../components/PracticeAreas';

const Alexandria: React.FC = () => {
  const { language, getTextByLanguage } = useLanguage();
  const isRTL = language === 'ar';

  const title = getTextByLanguage({
    ar: 'محامي أجانب في الإسكندرية | كريم الديب | Lawyer for Foreigners Alexandria',
    en: 'Lawyer for Foreigners in Alexandria | Karim Eldib | محامي أجانب الإسكندرية',
    fr: 'Avocat pour Étrangers à Alexandrie | Karim Eldib | محامي أجانب الإسكندرية',
    it: 'Avvocato per Stranieri ad Alessandria | Karim Eldib | محامي أجانب الإسكندرية'
  });

  const description = getTextByLanguage({
    ar: 'محامي أجانب متخصص في الإسكندرية. المحامي كريم الديب - المكتب الرئيسي في الإسكندرية. خدمات قانونية شاملة للأجانب: تأسيس شركات، إقامات، عقود، قضايا محاكم، استشارات. محامي معتمد لدى القنصلية الفرنسية. يتحدث الإنجليزية والفرنسية. اتصل: +20 122 376 7592',
    en: 'Specialized lawyer for foreigners in Alexandria. Karim Eldib - Main office in Alexandria. Comprehensive legal services for foreigners: company formation, residence permits, contracts, court cases, consultations. Certified lawyer at French Consulate. English and French speaking. Call: +20 122 376 7592',
    fr: 'Avocat spécialisé pour étrangers à Alexandrie. Karim Eldib - Bureau principal à Alexandrie. Services juridiques complets pour étrangers : création sociétés, permis de résidence, contrats, affaires judiciaires, consultations. Avocat certifié au Consulat français. Parle anglais et français. Appelez : +20 122 376 7592',
    it: 'Avvocato specializzato per stranieri ad Alessandria. Karim Eldib - Ufficio principale ad Alessandria. Servizi legali completi per stranieri: costituzione società, permessi di soggiorno, contratti, cause giudiziarie, consulenze. Avvocato certificato al Consolato francese. Parla inglese e francese. Chiamata: +20 122 376 7592'
  });

  const keywords = getTextByLanguage({
    ar: 'محامي أجانب في الإسكندرية, محامي اجانب الاسكندرية, محامي للأجانب الاسكندرية, محامي دولي الاسكندرية, lawyer for foreigners alexandria, international lawyer alexandria, محامي يتكلم انجليزي الاسكندرية',
    en: 'lawyer for foreigners alexandria, international lawyer alexandria, english speaking lawyer alexandria, french speaking lawyer alexandria, expat lawyer alexandria, legal services alexandria, foreign investment lawyer alexandria',
    fr: 'avocat pour étrangers alexandrie, avocat international alexandrie, avocat francophone alexandrie, avocat expatriés alexandrie, services juridiques alexandrie',
    it: 'avvocato per stranieri alessandria, avvocato internazionale alessandria, avvocato italiano alessandria, avvocato expat alessandria, servizi legali alessandria'
  });

  return (
    <>
      <AdvancedSEO 
        title={title}
        description={description}
        keywords={keywords}
        city="Alexandria"
      />
      <div className="min-h-screen bg-[#0e1f3b]">
        <Hero />
        
        <section className="py-16 px-4 container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#d4a15c]">
              {getTextByLanguage({
                ar: 'محامي أجانب متخصص في الإسكندرية',
                en: 'Specialized Lawyer for Foreigners in Alexandria',
                fr: 'Avocat Spécialisé pour Étrangers à Alexandrie',
                it: 'Avvocato Specializzato per Stranieri ad Alessandria'
              })}
            </h1>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 mb-8 text-white">
              <h2 className="text-2xl font-bold mb-4 text-[#d4a15c]">
                {getTextByLanguage({
                  ar: 'خدماتنا القانونية في الإسكندرية',
                  en: 'Our Legal Services in Alexandria',
                  fr: 'Nos Services Juridiques à Alexandrie',
                  it: 'I Nostri Servizi Legali ad Alessandria'
                })}
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#d4a15c] text-xl">✓</span>
                  <span>{getTextByLanguage({
                    ar: 'تأسيس الشركات للمستثمرين الأجانب',
                    en: 'Company Formation for Foreign Investors',
                    fr: 'Création de Sociétés pour Investisseurs Étrangers',
                    it: 'Costituzione Società per Investitori Stranieri'
                  })}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4a15c] text-xl">✓</span>
                  <span>{getTextByLanguage({
                    ar: 'تصاريح الإقامة والعمل',
                    en: 'Residence and Work Permits',
                    fr: 'Permis de Résidence et de Travail',
                    it: 'Permessi di Soggiorno e Lavoro'
                  })}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4a15c] text-xl">✓</span>
                  <span>{getTextByLanguage({
                    ar: 'العقود العقارية والتجارية',
                    en: 'Real Estate and Commercial Contracts',
                    fr: 'Contrats Immobiliers et Commerciaux',
                    it: 'Contratti Immobiliari e Commerciali'
                  })}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4a15c] text-xl">✓</span>
                  <span>{getTextByLanguage({
                    ar: 'القضايا المدنية والجنائية للأجانب',
                    en: 'Civil and Criminal Cases for Foreigners',
                    fr: 'Affaires Civiles et Pénales pour Étrangers',
                    it: 'Cause Civili e Penali per Stranieri'
                  })}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4a15c] text-xl">✓</span>
                  <span>{getTextByLanguage({
                    ar: 'قانون الأحوال الشخصية (زواج، طلاق)',
                    en: 'Family Law (Marriage, Divorce)',
                    fr: 'Droit de la Famille (Mariage, Divorce)',
                    it: 'Diritto di Famiglia (Matrimonio, Divorzio)'
                  })}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4a15c] text-xl">✓</span>
                  <span>{getTextByLanguage({
                    ar: 'التوثيقات والترجمات القانونية',
                    en: 'Legal Notarization and Translation',
                    fr: 'Notarisation et Traduction Juridique',
                    it: 'Notarizzazione e Traduzione Legale'
                  })}</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 mb-8 text-white">
              <h2 className="text-2xl font-bold mb-4 text-[#d4a15c]">
                {getTextByLanguage({
                  ar: 'المكتب الرئيسي في الإسكندرية',
                  en: 'Main Office in Alexandria',
                  fr: 'Bureau Principal à Alexandrie',
                  it: 'Ufficio Principale ad Alessandria'
                })}
              </h2>
              <div className="space-y-4">
                <p>{getTextByLanguage({
                  ar: '✦ مكتبنا الرئيسي في قلب الإسكندرية',
                  en: '✦ Our main office in the heart of Alexandria',
                  fr: '✦ Notre bureau principal au cœur d\'Alexandrie',
                  it: '✦ Il nostro ufficio principale nel cuore di Alessandria'
                })}</p>
                <p>{getTextByLanguage({
                  ar: '✦ خبرة 18 عام في خدمة الجالية الأجنبية',
                  en: '✦ 18 years experience serving the foreign community',
                  fr: '✦ 18 ans d\'expérience au service de la communauté étrangère',
                  it: '✦ 18 anni di esperienza al servizio della comunità straniera'
                })}</p>
                <p>{getTextByLanguage({
                  ar: '✦ محامي معتمد لدى القنصلية الفرنسية',
                  en: '✦ Certified lawyer at French Consulate',
                  fr: '✦ Avocat certifié au Consulat français',
                  it: '✦ Avvocato certificato al Consolato francese'
                })}</p>
                <p>{getTextByLanguage({
                  ar: '✦ فريق قانوني يتحدث عدة لغات',
                  en: '✦ Multilingual legal team',
                  fr: '✦ Équipe juridique multilingue',
                  it: '✦ Team legale multilingue'
                })}</p>
                <p>{getTextByLanguage({
                  ar: '✦ سهولة الوصول من جميع أنحاء الإسكندرية',
                  en: '✦ Easy access from all parts of Alexandria',
                  fr: '✦ Accès facile de toutes les régions d\'Alexandrie',
                  it: '✦ Facile accesso da tutte le parti di Alessandria'
                })}</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#d4a15c]/20 to-[#d4a15c]/10 rounded-lg p-6 text-center text-white">
              <h3 className="text-xl font-bold mb-3">{getTextByLanguage({
                ar: 'مكتب الإسكندرية - المكتب الرئيسي',
                en: 'Alexandria Office - Main Office',
                fr: 'Bureau d\'Alexandrie - Bureau Principal',
                it: 'Ufficio di Alessandria - Ufficio Principale'
              })}</h3>
              <p className="mb-2">📍 {getTextByLanguage({
                ar: 'محطة الرمل، 14 شارع الشهداء، متفرع من شارع الغرفة التجارية',
                en: 'Raml Station, 14 Al-Shohada Street, Chamber of Commerce Street',
                fr: 'Station Raml, 14 rue Al-Shohada, rue de la Chambre de Commerce',
                it: 'Stazione Raml, 14 via Al-Shohada, via Camera di Commercio'
              })}</p>
              <p className="mb-4" dir="ltr">📞 +20 122 376 7592</p>
              <p className="mb-2">✉️ kingarim2411@gmail.com</p>
              <p className="text-sm opacity-90">
                {getTextByLanguage({
                  ar: 'نرحب بزيارتكم من السبت إلى الخميس، 9 صباحاً - 7 مساءً',
                  en: 'We welcome your visit Saturday to Thursday, 9 AM - 7 PM',
                  fr: 'Nous vous accueillons du samedi au jeudi, de 9h à 19h',
                  it: 'Vi accogliamo da sabato a giovedì, dalle 9:00 alle 19:00'
                })}
              </p>
            </div>
          </div>
        </section>

        <PracticeAreas />
        <Contact />
      </div>
    </>
  );
};

export default Alexandria;
