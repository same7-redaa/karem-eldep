import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import AdvancedSEO from '../../components/AdvancedSEO';
import Hero from '../../components/Hero';
import Contact from '../../components/Contact';
import PracticeAreas from '../../components/PracticeAreas';

const SharmElSheikh: React.FC = () => {
  const { language, getTextByLanguage } = useLanguage();
  const isRTL = language === 'ar';

  const title = getTextByLanguage({
    ar: 'محامي أجانب في شرم الشيخ | كريم الديب | Lawyer for Foreigners Sharm El Sheikh',
    en: 'Lawyer for Foreigners in Sharm El Sheikh | Karim Eldib | محامي أجانب شرم الشيخ',
    fr: 'Avocat pour Étrangers à Sharm El Sheikh | Karim Eldib | محامي أجانب شرم الشيخ',
    it: 'Avvocato per Stranieri a Sharm El Sheikh | Karim Eldib | محامي أجانب شرم الشيخ'
  });

  const description = getTextByLanguage({
    ar: 'محامي أجانب متخصص في شرم الشيخ. المحامي كريم الديب يقدم خدمات قانونية شاملة للأجانب والمستثمرين في شرم الشيخ: تأسيس شركات، تصاريح إقامة، عقود، استشارات قانونية. محامي يتحدث الإنجليزية والفرنسية. خبرة 18 عام. اتصل: +20 122 376 7592',
    en: 'Specialized lawyer for foreigners in Sharm El Sheikh. Karim Eldib provides comprehensive legal services for foreigners and investors in Sharm El Sheikh: company formation, residence permits, contracts, legal consultations. English and French speaking lawyer. 18 years experience. Call: +20 122 376 7592',
    fr: 'Avocat spécialisé pour étrangers à Sharm El Sheikh. Karim Eldib offre des services juridiques complets pour les étrangers et investisseurs à Sharm El Sheikh : création de sociétés, permis de résidence, contrats, consultations juridiques. Avocat parlant français et anglais. 18 ans d\'expérience. Appelez : +20 122 376 7592',
    it: 'Avvocato specializzato per stranieri a Sharm El Sheikh. Karim Eldib fornisce servizi legali completi per stranieri e investitori a Sharm El Sheikh: costituzione società, permessi di soggiorno, contratti, consulenze legali. Avvocato che parla inglese e francese. 18 anni di esperienza. Chiamata: +20 122 376 7592'
  });

  const keywords = getTextByLanguage({
    ar: 'محامي أجانب في شرم الشيخ, محامي اجانب شرم الشيخ, محامي للأجانب شرم الشيخ, محامي دولي شرم الشيخ, محامي استثمار شرم الشيخ, lawyer for foreigners sharm el sheikh, international lawyer sharm el sheikh, محامي يتكلم انجليزي شرم الشيخ, محامي يتكلم فرنسي شرم الشيخ',
    en: 'lawyer for foreigners sharm el sheikh, international lawyer sharm el sheikh, english speaking lawyer sharm el sheikh, french speaking lawyer sharm el sheikh, expat lawyer sharm el sheikh, legal services sharm el sheikh, foreign investment lawyer sharm, residence permit lawyer sharm',
    fr: 'avocat pour étrangers sharm el sheikh, avocat international sharm el sheikh, avocat francophone sharm el sheikh, avocat expatriés sharm el sheikh, services juridiques sharm el sheikh, avocat investissement étranger sharm',
    it: 'avvocato per stranieri sharm el sheikh, avvocato internazionale sharm el sheikh, avvocato italiano sharm el sheikh, avvocato expat sharm el sheikh, servizi legali sharm el sheikh, avvocato investimenti esteri sharm'
  });

  return (
    <>
      <AdvancedSEO 
        title={title}
        description={description}
        keywords={keywords}
        city="Sharm El Sheikh"
      />
      <div className="min-h-screen bg-[#0e1f3b]">
        <Hero />
        
        <section className="py-16 px-4 container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#d4a15c]">
              {getTextByLanguage({
                ar: 'محامي أجانب متخصص في شرم الشيخ',
                en: 'Specialized Lawyer for Foreigners in Sharm El Sheikh',
                fr: 'Avocat Spécialisé pour Étrangers à Sharm El Sheikh',
                it: 'Avvocato Specializzato per Stranieri a Sharm El Sheikh'
              })}
            </h1>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 mb-8 text-white">
              <h2 className="text-2xl font-bold mb-4 text-[#d4a15c]">
                {getTextByLanguage({
                  ar: 'خدماتنا القانونية في شرم الشيخ',
                  en: 'Our Legal Services in Sharm El Sheikh',
                  fr: 'Nos Services Juridiques à Sharm El Sheikh',
                  it: 'I Nostri Servizi Legali a Sharm El Sheikh'
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
                    ar: 'استخراج تصاريح الإقامة والعمل',
                    en: 'Residence and Work Permits',
                    fr: 'Permis de Résidence et de Travail',
                    it: 'Permessi di Soggiorno e Lavoro'
                  })}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4a15c] text-xl">✓</span>
                  <span>{getTextByLanguage({
                    ar: 'صياغة العقود التجارية والعقارية',
                    en: 'Commercial and Real Estate Contracts',
                    fr: 'Contrats Commerciaux et Immobiliers',
                    it: 'Contratti Commerciali e Immobiliari'
                  })}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4a15c] text-xl">✓</span>
                  <span>{getTextByLanguage({
                    ar: 'التمثيل القانوني في المحاكم',
                    en: 'Legal Representation in Courts',
                    fr: 'Représentation Légale devant les Tribunaux',
                    it: 'Rappresentanza Legale in Tribunale'
                  })}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4a15c] text-xl">✓</span>
                  <span>{getTextByLanguage({
                    ar: 'استشارات قانونية بالإنجليزية والفرنسية',
                    en: 'Legal Consultations in English and French',
                    fr: 'Consultations Juridiques en Anglais et Français',
                    it: 'Consulenze Legali in Inglese e Francese'
                  })}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4a15c] text-xl">✓</span>
                  <span>{getTextByLanguage({
                    ar: 'قضايا الطلاق والأحوال الشخصية للأجانب',
                    en: 'Divorce and Family Law for Foreigners',
                    fr: 'Divorce et Droit de la Famille pour Étrangers',
                    it: 'Divorzio e Diritto di Famiglia per Stranieri'
                  })}</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 mb-8 text-white">
              <h2 className="text-2xl font-bold mb-4 text-[#d4a15c]">
                {getTextByLanguage({
                  ar: 'لماذا تختار المحامي كريم الديب في شرم الشيخ؟',
                  en: 'Why Choose Lawyer Karim Eldib in Sharm El Sheikh?',
                  fr: 'Pourquoi Choisir l\'Avocat Karim Eldib à Sharm El Sheikh?',
                  it: 'Perché Scegliere l\'Avvocato Karim Eldib a Sharm El Sheikh?'
                })}
              </h2>
              <div className="space-y-4">
                <p>{getTextByLanguage({
                  ar: '✦ خبرة 18 عام في خدمة الأجانب والمستثمرين',
                  en: '✦ 18 years experience serving foreigners and investors',
                  fr: '✦ 18 ans d\'expérience au service des étrangers et investisseurs',
                  it: '✦ 18 anni di esperienza al servizio di stranieri e investitori'
                })}</p>
                <p>{getTextByLanguage({
                  ar: '✦ مكتب دائم في شرم الشيخ',
                  en: '✦ Permanent office in Sharm El Sheikh',
                  fr: '✦ Bureau permanent à Sharm El Sheikh',
                  it: '✦ Ufficio permanente a Sharm El Sheikh'
                })}</p>
                <p>{getTextByLanguage({
                  ar: '✦ محامي معتمد لدى القنصلية الفرنسية',
                  en: '✦ Certified lawyer at French Consulate',
                  fr: '✦ Avocat certifié au Consulat français',
                  it: '✦ Avvocato certificato al Consolato francese'
                })}</p>
                <p>{getTextByLanguage({
                  ar: '✦ نتحدث العربية والإنجليزية والفرنسية',
                  en: '✦ We speak Arabic, English and French',
                  fr: '✦ Nous parlons arabe, anglais et français',
                  it: '✦ Parliamo arabo, inglese e francese'
                })}</p>
                <p>{getTextByLanguage({
                  ar: '✦ خدمات قانونية متكاملة 24/7',
                  en: '✦ Comprehensive legal services 24/7',
                  fr: '✦ Services juridiques complets 24/7',
                  it: '✦ Servizi legali completi 24/7'
                })}</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#d4a15c]/20 to-[#d4a15c]/10 rounded-lg p-6 text-center text-white">
              <h3 className="text-xl font-bold mb-3">{getTextByLanguage({
                ar: 'مكتب شرم الشيخ',
                en: 'Sharm El Sheikh Office',
                fr: 'Bureau de Sharm El Sheikh',
                it: 'Ufficio di Sharm El Sheikh'
              })}</h3>
              <p className="mb-2">📍 {getTextByLanguage({
                ar: 'الهضبة، شرم الشيخ، جنوب سيناء',
                en: 'Al-Hadaba, Sharm El Sheikh, South Sinai',
                fr: 'Al-Hadaba, Sharm El Sheikh, Sinaï du Sud',
                it: 'Al-Hadaba, Sharm El Sheikh, Sinai del Sud'
              })}</p>
              <p className="mb-4" dir="ltr">📞 +20 122 376 7592</p>
              <p className="text-sm opacity-90">
                {getTextByLanguage({
                  ar: 'متاح للاستشارات القانونية يومياً من 9 صباحاً حتى 9 مساءً',
                  en: 'Available for legal consultations daily from 9 AM to 9 PM',
                  fr: 'Disponible pour consultations juridiques tous les jours de 9h à 21h',
                  it: 'Disponibile per consulenze legali tutti i giorni dalle 9:00 alle 21:00'
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

export default SharmElSheikh;
