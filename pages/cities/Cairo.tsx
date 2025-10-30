import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import AdvancedSEO from '../../components/AdvancedSEO';
import Hero from '../../components/Hero';
import Contact from '../../components/Contact';
import PracticeAreas from '../../components/PracticeAreas';

const Cairo: React.FC = () => {
  const { language, getTextByLanguage } = useLanguage();
  const isRTL = language === 'ar';

  const title = getTextByLanguage({
    ar: 'محامي أجانب في القاهرة | كريم الديب | Lawyer for Foreigners Cairo',
    en: 'Lawyer for Foreigners in Cairo | Karim Eldib | محامي أجانب القاهرة',
    fr: 'Avocat pour Étrangers au Caire | Karim Eldib | محامي أجانب القاهرة',
    it: 'Avvocato per Stranieri al Cairo | Karim Eldib | محامي أجانب القاهرة'
  });

  const description = getTextByLanguage({
    ar: 'محامي أجانب متخصص في القاهرة. المحامي كريم الديب يقدم خدمات قانونية شاملة للأجانب والمستثمرين في القاهرة: تأسيس شركات، استثمار أجنبي، تصاريح إقامة، عقود تجارية، استشارات قانونية. محامي يتحدث الإنجليزية والفرنسية. اتصل: +20 122 376 7592',
    en: 'Specialized lawyer for foreigners in Cairo. Karim Eldib provides comprehensive legal services for foreigners and investors in Cairo: company formation, foreign investment, residence permits, commercial contracts, legal consultations. English and French speaking lawyer. Call: +20 122 376 7592',
    fr: 'Avocat spécialisé pour étrangers au Caire. Karim Eldib offre des services juridiques complets pour les étrangers et investisseurs au Caire : création de sociétés, investissement étranger, permis de résidence, contrats commerciaux, consultations juridiques. Avocat parlant français et anglais. Appelez : +20 122 376 7592',
    it: 'Avvocato specializzato per stranieri al Cairo. Karim Eldib fornisce servizi legali completi per stranieri e investitori al Cairo: costituzione società, investimenti esteri, permessi di soggiorno, contratti commerciali, consulenze legali. Avvocato che parla inglese e francese. Chiamata: +20 122 376 7592'
  });

  const keywords = getTextByLanguage({
    ar: 'محامي أجانب في القاهرة, محامي اجانب القاهرة, محامي للأجانب القاهرة, محامي دولي القاهرة, محامي استثمار القاهرة, lawyer for foreigners cairo, international lawyer cairo, محامي يتكلم انجليزي القاهرة',
    en: 'lawyer for foreigners cairo, international lawyer cairo, english speaking lawyer cairo, french speaking lawyer cairo, expat lawyer cairo, legal services cairo, foreign investment lawyer cairo, business lawyer cairo',
    fr: 'avocat pour étrangers le caire, avocat international le caire, avocat francophone le caire, avocat expatriés le caire, services juridiques le caire, avocat investissement étranger le caire',
    it: 'avvocato per stranieri cairo, avvocato internazionale cairo, avvocato italiano cairo, avvocato expat cairo, servizi legali cairo, avvocato investimenti esteri cairo'
  });

  return (
    <>
      <AdvancedSEO 
        title={title}
        description={description}
        keywords={keywords}
        city="Cairo"
      />
      <div className="min-h-screen bg-[#0e1f3b]">
        <Hero />
        
        <section className="py-16 px-4 container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#d4a15c]">
              {getTextByLanguage({
                ar: 'محامي أجانب متخصص في القاهرة',
                en: 'Specialized Lawyer for Foreigners in Cairo',
                fr: 'Avocat Spécialisé pour Étrangers au Caire',
                it: 'Avvocato Specializzato per Stranieri al Cairo'
              })}
            </h1>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 mb-8 text-white">
              <h2 className="text-2xl font-bold mb-4 text-[#d4a15c]">
                {getTextByLanguage({
                  ar: 'خدماتنا القانونية في القاهرة',
                  en: 'Our Legal Services in Cairo',
                  fr: 'Nos Services Juridiques au Caire',
                  it: 'I Nostri Servizi Legali al Cairo'
                })}
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#d4a15c] text-xl">✓</span>
                  <span>{getTextByLanguage({
                    ar: 'تأسيس الشركات والاستثمار الأجنبي',
                    en: 'Company Formation and Foreign Investment',
                    fr: 'Création de Sociétés et Investissement Étranger',
                    it: 'Costituzione Società e Investimenti Esteri'
                  })}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4a15c] text-xl">✓</span>
                  <span>{getTextByLanguage({
                    ar: 'استخراج تصاريح الإقامة والعمل للأجانب',
                    en: 'Residence and Work Permits for Foreigners',
                    fr: 'Permis de Résidence et de Travail pour Étrangers',
                    it: 'Permessi di Soggiorno e Lavoro per Stranieri'
                  })}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4a15c] text-xl">✓</span>
                  <span>{getTextByLanguage({
                    ar: 'العقود التجارية والاستثمارية',
                    en: 'Commercial and Investment Contracts',
                    fr: 'Contrats Commerciaux et d\'Investissement',
                    it: 'Contratti Commerciali e di Investimento'
                  })}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4a15c] text-xl">✓</span>
                  <span>{getTextByLanguage({
                    ar: 'التمثيل القانوني أمام الجهات الحكومية',
                    en: 'Legal Representation before Government Authorities',
                    fr: 'Représentation Légale devant les Autorités Gouvernementales',
                    it: 'Rappresentanza Legale presso le Autorità Governative'
                  })}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4a15c] text-xl">✓</span>
                  <span>{getTextByLanguage({
                    ar: 'قضايا الأجانب المدنية والجنائية',
                    en: 'Civil and Criminal Cases for Foreigners',
                    fr: 'Affaires Civiles et Pénales pour Étrangers',
                    it: 'Cause Civili e Penali per Stranieri'
                  })}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4a15c] text-xl">✓</span>
                  <span>{getTextByLanguage({
                    ar: 'خدمات القنصلية الفرنسية',
                    en: 'French Consulate Services',
                    fr: 'Services du Consulat Français',
                    it: 'Servizi del Consolato Francese'
                  })}</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 mb-8 text-white">
              <h2 className="text-2xl font-bold mb-4 text-[#d4a15c]">
                {getTextByLanguage({
                  ar: 'لماذا تختار المحامي كريم الديب في القاهرة؟',
                  en: 'Why Choose Lawyer Karim Eldib in Cairo?',
                  fr: 'Pourquoi Choisir l\'Avocat Karim Eldib au Caire?',
                  it: 'Perché Scegliere l\'Avvocato Karim Eldib al Cairo?'
                })}
              </h2>
              <div className="space-y-4">
                <p>{getTextByLanguage({
                  ar: '✦ خبرة واسعة في قانون الاستثمار الأجنبي',
                  en: '✦ Extensive experience in foreign investment law',
                  fr: '✦ Vaste expérience en droit de l\'investissement étranger',
                  it: '✦ Vasta esperienza in diritto degli investimenti esteri'
                })}</p>
                <p>{getTextByLanguage({
                  ar: '✦ علاقات قوية مع الجهات الحكومية في القاهرة',
                  en: '✦ Strong relationships with government authorities in Cairo',
                  fr: '✦ Relations solides avec les autorités gouvernementales du Caire',
                  it: '✦ Forti relazioni con le autorità governative del Cairo'
                })}</p>
                <p>{getTextByLanguage({
                  ar: '✦ محامي معتمد لدى القنصلية الفرنسية',
                  en: '✦ Certified lawyer at French Consulate',
                  fr: '✦ Avocat certifié au Consulat français',
                  it: '✦ Avvocato certificato al Consolato francese'
                })}</p>
                <p>{getTextByLanguage({
                  ar: '✦ فريق متعدد اللغات (عربي، إنجليزي، فرنسي)',
                  en: '✦ Multilingual team (Arabic, English, French)',
                  fr: '✦ Équipe multilingue (arabe, anglais, français)',
                  it: '✦ Team multilingue (arabo, inglese, francese)'
                })}</p>
                <p>{getTextByLanguage({
                  ar: '✦ خدمات متكاملة من الاستشارة إلى التنفيذ',
                  en: '✦ Comprehensive services from consultation to execution',
                  fr: '✦ Services complets de la consultation à l\'exécution',
                  it: '✦ Servizi completi dalla consulenza all\'esecuzione'
                })}</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#d4a15c]/20 to-[#d4a15c]/10 rounded-lg p-6 text-center text-white">
              <h3 className="text-xl font-bold mb-3">{getTextByLanguage({
                ar: 'خدمات القاهرة',
                en: 'Cairo Services',
                fr: 'Services du Caire',
                it: 'Servizi del Cairo'
              })}</h3>
              <p className="mb-2">📍 {getTextByLanguage({
                ar: 'نخدم جميع مناطق القاهرة الكبرى',
                en: 'Serving all Greater Cairo areas',
                fr: 'Desservant toutes les zones du Grand Caire',
                it: 'Al servizio di tutte le aree del Grande Cairo'
              })}</p>
              <p className="mb-4" dir="ltr">📞 +20 122 376 7592</p>
              <p className="text-sm opacity-90">
                {isRTL 
                  ? 'استشارات قانونية متخصصة للأجانب والمستثمرين في القاهرة'
                  : 'Specialized legal consultations for foreigners and investors in Cairo'}
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

export default Cairo;
