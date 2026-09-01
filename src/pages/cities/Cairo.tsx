import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import AdvancedSEO from '../../components/AdvancedSEO';
import Hero from '../../components/Hero';
import Contact from '../../components/Contact';
import PracticeAreas from '../../components/PracticeAreas';

const Cairo: React.FC = () => {
  const { language, getTextByLanguage } = useLanguage();
  const isRTL = language === 'ar';

  const title = getTextByLanguage({
    ar: 'محامي تحكيم دولي وقضايا أجانب في القاهرة | كريم الديب',
    en: 'International Arbitration & Foreigners Lawyer in Cairo | Karim Eldib',
    fr: 'Avocat Arbitrage International & Étrangers au Caire | Karim Eldib',
    it: 'Avvocato Arbitrato Internazionale e Stranieri al Cairo | Karim Eldib'
  });

  const description = getTextByLanguage({
    ar: 'مكتب المحامي كريم الديب للتحكيم الدولي وقضايا الأجانب في القاهرة. تأسيس شركات أمام الهيئة العامة للاستثمار (GAFI)، تمثيل أمام مركز القاهرة الإقليمي (CRCICA)، تسوية منازعات الاستثمار وعقود الاستيراد والتصدير. نتحدث العربية والإنجليزية والفرنسية والإيطالية.',
    en: 'Karim Eldib Law Firm for international arbitration and foreigners in Cairo. Company formation before GAFI, representation before CRCICA, investment dispute resolution, and international commercial contracts. Speak English, French, Italian.',
    fr: 'Cabinet Karim Eldib pour l\'arbitrage international et les étrangers au Caire. Création d\'entreprises (GAFI), représentation devant le CRCICA, et règlement des litiges d\'investissement. Nous parlons français.',
    it: 'Studio Karim Eldib per l\'arbitrato internazionale e gli stranieri al Cairo. Costituzione di società (GAFI), rappresentanza presso CRCICA e risoluzione delle controversie sugli investimenti. Parliamo italiano.'
  });

  const keywords = getTextByLanguage({
    ar: 'محامي تحكيم دولي في القاهرة, محامي استثمار أجنبي القاهرة, تسوية المنازعات في مصر, مركز القاهرة الإقليمي للتحكيم, محامي شركات دولي بمصر, مكتب محاماة دولي في القاهرة',
    en: 'International Arbitration Lawyer in Cairo, International Dispute Resolution in Egypt, Foreign Investors Lawyer Egypt, CRCICA arbitration cairo, company formation GAFI, business disputes cairo',
    fr: 'avocat arbitrage international le caire, resolution des litiges egypte, avocat investisseurs etrangers le caire, arbitrage CRCICA, creation societes GAFI',
    it: 'avvocato arbitrato internazionale cairo, risoluzione controversie egitto, avvocato investitori stranieri cairo, arbitrato CRCICA, costituzione societa GAFI'
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
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#d4a15c]">
              {getTextByLanguage({
                ar: 'محامي تحكيم دولي وأجانب متخصص في القاهرة',
                en: 'Specialized International Arbitration & Foreigners Lawyer in Cairo',
                fr: 'Avocat Spécialisé en Arbitrage International & Étrangers au Caire',
                it: 'Avvocato Specializzato in Arbitrato Internazionale e Stranieri al Cairo'
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
                <li className="flex items-start gap-3 bg-[#d4a15c]/10 p-3 rounded-lg border border-[#d4a15c]/30">
                  <span className="text-[#d4a15c] text-xl">⚖️</span>
                  <div>
                    <Link to="/arbitration-mediation" className="text-[#d4a15c] hover:underline font-bold text-base md:text-lg block">
                      {getTextByLanguage({
                        ar: 'التحكيم التجاري الدولي وتسوية منازعات الاستثمار (CRCICA)',
                        en: 'International Commercial Arbitration & Investment Disputes (CRCICA)',
                        fr: 'Arbitrage Commercial International & Différends d\'Investissement (CRCICA)',
                        it: 'Arbitrato Commerciale Internazionale e Controversie sugli Investimenti (CRCICA)'
                      })}
                    </Link>
                    <p className="text-gray-300 text-xs md:text-sm mt-1">
                      {getTextByLanguage({
                        ar: 'تمثيل قانوني أمام مركز القاهرة الإقليمي للتحكيم التجاري الدولي وتنفيذ أحكام التحكيم الأجنبية في مصر.',
                        en: 'Full legal representation before CRCICA and enforcement of foreign arbitral awards in Egypt.',
                        fr: 'Représentation légale devant le CRCICA et exécution des sentences arbitrales étrangères en Égypte.',
                        it: 'Rappresentanza legale dinanzi al CRCICA ed esecuzione di lodi arbitrali stranieri in Egitto.'
                      })}
                    </p>
                  </div>
                </li>
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

        {/* تفصيل الخدمات القانونية في القاهرة */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-[#1a2d4d]/80 to-[#0b1a33]/80 rounded-2xl p-8 md:p-12 border border-[#d4a15c]/20">
            <h2 className="text-3xl font-bold text-center text-[#d4a15c] mb-8">
              {getTextByLanguage({
                ar: 'تفاصيل نطاق خدماتنا القانونية في القاهرة الكبرى',
                en: 'Detailed Legal Services Scope in Greater Cairo',
                fr: 'Détails de nos Services Juridiques dans le Grand Caire',
                it: 'Dettagli dei Nostri Servizi Legali nel Grande Cairo'
              })}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300 leading-relaxed text-sm md:text-base">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#d4a15c] mb-2 flex items-center gap-2">
                    <i className="fas fa-building"></i>
                    {getTextByLanguage({ ar: 'الشركات والاستثمارات', en: 'Companies & Investment', fr: 'Sociétés & Investissements', it: 'Società & Investimenti' })}
                  </h3>
                  <p>
                    {getTextByLanguage({
                      ar: 'نظراً لوجود الهيئات الحكومية الرئيسية في العاصمة، فإن مكتب التمثيل الخاص بنا في القاهرة يختص بمباشرة إجراءات تأسيس الشركات بأنواعها المختلفة أمام الهيئة العامة للاستثمار والمناطق الحرة (GAFI)، ومتابعة التراخيص بمختلف الوزارات مثل البترول والتنمية الصناعية والسياحة.',
                      en: 'As the main government headquarters are located in the capital, our representation office in Cairo handles company formation before GAFI and follows up on business licensing with different ministries like Petroleum, Industrial Development, and Tourism.',
                      fr: 'Les principaux ministères se situant dans la capitale, notre bureau de représentation au Caire gère la création d\'entreprises auprès de la GAFI et suit l\'octroi des licences auprès des différents ministères.',
                      it: 'Trovandosi i principali ministeri nella capitale, il nostro ufficio di rappresentanza al Cairo gestisce la costituzione di società presso GAFI e segue il rilascio delle licenze presso i vari ministeri.'
                    })}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#d4a15c] mb-2 flex items-center gap-2">
                    <i className="fas fa-gavel"></i>
                    {getTextByLanguage({ ar: 'التحكيم الدولي والقانون الخاص', en: 'International Arbitration & Private Law', fr: 'Arbitrage International & Droit Privé', it: 'Arbitrato International e Diritto Privato' })}
                  </h3>
                  <p>
                    {getTextByLanguage({
                      ar: 'نقدم تمثيلاً قانونياً فائق المستوى في نزاعات التحكيم التجاري الدولي أمام مركز القاهرة الإقليمي للتحكيم التجاري الدولي (CRCICA)، وصياغة بنود التحكيم المعقدة في العقود متعددة الأطراف، مع تقديم الاستشارات في القانون الدولي الخاص.',
                      en: 'We provide premier legal representation in commercial arbitration disputes before the Cairo Regional Centre (CRCICA), drafting complex arbitration clauses, and advising on private international law.',
                      fr: 'Nous fournissons une représentation de premier ordre dans les litiges d\'arbitrage commercial devant le Centre de Caire (CRCICA), en rédigeant des clauses d\'arbitrage complexes.',
                      it: 'Forniamo una rappresentanza di primo ordine nelle controversie di arbitrato commerciale presso il Centro del Cairo (CRCICA), redigendo clausole arbitrali complesse.'
                    })}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#d4a15c] mb-2 flex items-center gap-2">
                    <i className="fas fa-users"></i>
                    {getTextByLanguage({ ar: 'الأجانب والمصريين بالخارج', en: 'Foreigners & Expat Egyptians', fr: 'Étrangers & Expatriés Égyptiens', it: 'Stranieri ed Espatriati Egiziani' })}
                  </h3>
                  <p>
                    {getTextByLanguage({
                      ar: 'نقوم بتوثيق عقود زواج الأجانب بوزارة العدل في القاهرة، والتصديق على المستندات الرسمية بوزارة الخارجية، وإنهاء تصاريح الإقامة والعمل للأجانب بمقر مصلحة الهجرة والجوازات بالعباسية، بجانب تسييل التركات وإدارة العقارات للمصريين المغتربين.',
                      en: 'We document foreign marriages at the Ministry of Justice in Cairo, certify official documents at the Ministry of Foreign Affairs, process expat residence permits at Abbassia Immigration Department, and manage inheritance assets for Egyptian expats.',
                      fr: 'Nous enregistrons les mariages d\'étrangers au ministère de la Justice au Caire, légalisons les documents au ministère des Affaires étrangères, et gérons l\'héritage des Égyptiens expatriés.',
                      it: 'Registriamo i matrimoni di stranieri presso il Ministero della Giustizia al Cairo, legalizziamo i documenti presso il Ministero degli Affari Esteri e gestiamo l\'eredità degli egiziani all\'estero.'
                    })}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#d4a15c] mb-2 flex items-center gap-2">
                    <i className="fas fa-balance-scale"></i>
                    {getTextByLanguage({ ar: 'التقاضي والدفاع الجنائي', en: 'Litigation & Criminal Defense', fr: 'Litige & Défense Pénale', it: 'Contenzioso e Difesa Penale' })}
                  </h3>
                  <p>
                    {getTextByLanguage({
                      ar: 'يمتد نشاطنا لتمثيل الموكلين أمام محكمة النقض والمحكمة الدستورية العليا والمحكمة الإدارية العليا بالقاهرة، والدفاع في الجرائم الاقتصادية وجرائم الأموال العامة وجرائم الإنترنت والتمثيل أمام مختلف نيابات ومحاكم القاهرة.',
                      en: 'Our representation extends to the Court of Cassation, Supreme Constitutional Court, and Supreme Administrative Court in Cairo. We defend clients in economic crimes, public funds, cybercrimes, and before Cairo courts.',
                      fr: 'Notre représentation s\'étend à la Cour de cassation et à la Cour constitutionnelle suprême au Caire. Nous défendons les clients dans les crimes économiques et devant les tribunaux du Caire.',
                      it: 'La nostra rappresentanza si estende alla Corte di Cassazione e alla Corte Costituzionale Suprema al Cairo. Difendiamo i clienti nei reati economici e presso i tribunali del Cairo.'
                    })}
                  </p>
                </div>
              </div>
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
