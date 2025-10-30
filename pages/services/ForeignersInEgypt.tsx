import React, { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const ForeignersInEgypt: React.FC = () => {
  const { language, getTextByLanguage } = useLanguage();
  const isRTL = language === 'ar';

  useEffect(() => {
    const title = language === 'ar'
      ? "محامي أجانب في مصر | المحامي كريم الديب"
      : language === 'fr'
      ? "Avocat pour Étrangers en Égypte | Karim El-Dib"
      : language === 'it'
      ? "Avvocato per Stranieri in Egitto | Karim El-Dib"
      : "Egyptian Lawyer for Foreigners | Karim El-Dib";
    
    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      const description = language === 'ar'
        ? 'محامي أجانب في مصر - المحامي كريم الديب خبير في تقديم الخدمات القانونية للأجانب. تأسيس شركات، تصاريح إقامة، عقود.'
        : language === 'fr'
        ? 'Avocat pour étrangers en Égypte - Karim El-Dib expert en services juridiques pour étrangers. Création de sociétés, permis de résidence, contrats.'
        : language === 'it'
        ? 'Avvocato per stranieri in Egitto - Karim El-Dib esperto in servizi legali per stranieri. Costituzione società, permessi di soggiorno, contratti.'
        : 'Egyptian lawyer for foreigners providing comprehensive legal services in Egypt. Company formation, residence permits, contracts.';
      
      metaDescription.setAttribute('content', description);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      const keywords = language === 'ar'
        ? 'محامي أجانب في مصر, محامي للأجانب بمصر, قانوني أجانب مصر, استشارات قانونية للأجانب, تأسيس شركات للأجانب في مصر, تصاريح إقامة أجانب مصر, كريم الديب محامي'
        : language === 'fr'
        ? 'avocat étrangers egypte, avocat pour étrangers egypte, services juridiques étrangers egypte, création sociétés étrangers egypte, permis résidence egypte, karim el-dib avocat'
        : language === 'it'
        ? 'avvocato stranieri egitto, avvocato per stranieri egitto, servizi legali stranieri egitto, costituzione società stranieri egitto, permessi soggiorno egitto, karim el-dib avvocato'
        : 'egyptian lawyer for foreigners, lawyer for foreigners egypt, legal services foreigners egypt, company formation foreigners egypt, residence permits egypt, karim el-dib lawyer';
      
      metaKeywords.setAttribute('content', keywords);
    }
  }, [language]);

  const services = [
    {
      icon: 'fas fa-building',
      title: getTextByLanguage({
        ar: 'تأسيس الشركات للأجانب',
        en: 'Company Formation for Foreigners',
        fr: 'Création de Sociétés pour Étrangers',
        it: 'Costituzione di Società per Stranieri'
      }),
      description: getTextByLanguage({
        ar: 'تأسيس الشركات بجميع أنواعها للأجانب في مصر مع ضمان الامتثال للقوانين المصرية والدولية',
        en: 'Establishing companies of all types for foreigners in Egypt while ensuring compliance with Egyptian and international laws',
        fr: 'Création de sociétés de tous types pour étrangers en Égypte tout en garantissant la conformité aux lois égyptiennes et internationales',
        it: 'Costituzione di società di tutti i tipi per stranieri in Egitto garantendo la conformità alle leggi egiziane e internazionali'
      })
    },
    {
      icon: 'fas fa-passport',
      title: getTextByLanguage({
        ar: 'تصاريح الإقامة والعمل',
        en: 'Residence and Work Permits',
        fr: 'Permis de Résidence et de Travail',
        it: 'Permessi di Soggiorno e Lavoro'
      }),
      description: getTextByLanguage({
        ar: 'استخراج وتجديد تصاريح الإقامة وتصاريح العمل للأجانب في مصر',
        en: 'Obtaining and renewing residence permits and work permits for foreigners in Egypt',
        fr: 'Obtention et renouvellement des permis de résidence et permis de travail pour étrangers en Égypte',
        it: 'Ottenimento e rinnovo dei permessi di soggiorno e permessi di lavoro per stranieri in Egitto'
      })
    },
    {
      icon: 'fas fa-file-contract',
      title: getTextByLanguage({
        ar: 'صياغة العقود الدولية',
        en: 'International Contract Drafting',
        fr: 'Rédaction de Contrats Internationaux',
        it: 'Redazione di Contratti Internazionali'
      }),
      description: getTextByLanguage({
        ar: 'صياغة ومراجعة العقود التجارية والاستثمارية للأجانب',
        en: 'Drafting and reviewing commercial and investment contracts for foreigners',
        fr: 'Rédaction et révision de contrats commerciaux et d\'investissement pour étrangers',
        it: 'Redazione e revisione di contratti commerciali e di investimento per stranieri'
      })
    },
    {
      icon: 'fas fa-home',
      title: getTextByLanguage({
        ar: 'تملك العقارات للأجانب',
        en: 'Property Ownership for Foreigners',
        fr: 'Propriété Immobilière pour Étrangers',
        it: 'Proprietà Immobiliare per Stranieri'
      }),
      description: getTextByLanguage({
        ar: 'استشارات وإجراءات تملك العقارات للأجانب وفقاً للقانون المصري',
        en: 'Consultations and procedures for property ownership by foreigners according to Egyptian law',
        fr: 'Consultations et procédures de propriété immobilière pour étrangers selon la loi égyptienne',
        it: 'Consulenze e procedure di proprietà immobiliare per stranieri secondo la legge egiziana'
      })
    },
    {
      icon: 'fas fa-chart-line',
      title: getTextByLanguage({
        ar: 'الاستثمار الأجنبي',
        en: 'Foreign Investment',
        fr: 'Investissement Étranger',
        it: 'Investimento Estero'
      }),
      description: getTextByLanguage({
        ar: 'استشارات قانونية شاملة للاستثمار الأجنبي في مصر',
        en: 'Comprehensive legal consultations for foreign investment in Egypt',
        fr: 'Consultations juridiques complètes pour l\'investissement étranger en Égypte',
        it: 'Consulenze legali complete per investimenti esteri in Egitto'
      })
    },
    {
      icon: 'fas fa-gavel',
      title: getTextByLanguage({
        ar: 'التمثيل القانوني أمام المحاكم',
        en: 'Legal Representation in Courts',
        fr: 'Représentation Juridique devant les Tribunaux',
        it: 'Rappresentanza Legale nei Tribunali'
      }),
      description: getTextByLanguage({
        ar: 'تمثيل الأجانب أمام المحاكم المصرية في جميع أنواع القضايا',
        en: 'Representing foreigners before Egyptian courts in all types of cases',
        fr: 'Représentation des étrangers devant les tribunaux égyptiens dans tous types de cas',
        it: 'Rappresentanza degli stranieri davanti ai tribunali egiziani in tutti i tipi di casi'
      })
    }
  ];

  const whyChooseUs = [
    {
      title: getTextByLanguage({
        ar: 'خبرة دولية واسعة',
        en: 'Extensive International Experience',
        fr: 'Vaste Expérience Internationale',
        it: 'Vasta Esperienza Internazionale'
      }),
      description: getTextByLanguage({
        ar: 'أكثر من 15 سنة في خدمة الأجانب في مصر',
        en: 'More than 15 years serving foreigners in Egypt',
        fr: 'Plus de 15 ans au service des étrangers en Égypte',
        it: 'Oltre 15 anni al servizio degli stranieri in Egitto'
      })
    },
    {
      title: getTextByLanguage({
        ar: 'فهم عميق للقوانين',
        en: 'Deep Understanding of Laws',
        fr: 'Compréhension Approfondie des Lois',
        it: 'Profonda Comprensione delle Leggi'
      }),
      description: getTextByLanguage({
        ar: 'إتقان القانون المصري والقوانين الدولية',
        en: 'Mastery of Egyptian law and international laws',
        fr: 'Maîtrise du droit égyptien et des lois internationales',
        it: 'Padronanza del diritto egiziano e delle leggi internazionali'
      })
    },
    {
      title: getTextByLanguage({
        ar: 'خدمات باللغات المتعددة',
        en: 'Multilingual Services',
        fr: 'Services Multilingues',
        it: 'Servizi Multilingue'
      }),
      description: getTextByLanguage({
        ar: 'نقدم خدماتنا بالعربية والإنجليزية والفرنسية والإيطالية',
        en: 'We provide our services in Arabic, English, French and Italian',
        fr: 'Nous fournissons nos services en arabe, anglais, français et italien',
        it: 'Forniamo i nostri servizi in arabo, inglese, francese e italiano'
      })
    },
    {
      title: getTextByLanguage({
        ar: 'شبكة علاقات قوية',
        en: 'Strong Network of Relations',
        fr: 'Réseau de Relations Solide',
        it: 'Forte Rete di Relazioni'
      }),
      description: getTextByLanguage({
        ar: 'علاقات ممتازة مع الجهات الحكومية والسفارات',
        en: 'Excellent relations with government agencies and embassies',
        fr: 'Excellentes relations avec les agences gouvernementales et ambassades',
        it: 'Eccellenti relazioni con agenzie governative e ambasciate'
      })
    }
  ];

  return (
    <div className="min-h-screen bg-[#0b1a33] text-gray-200 py-20" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#c8a876]">
            {getTextByLanguage({
              ar: 'محامي أجانب في مصر',
              en: 'Lawyer for Foreigners in Egypt',
              fr: 'Avocat pour Étrangers en Égypte',
              it: 'Avvocato per Stranieri in Egitto'
            })}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            {getTextByLanguage({
              ar: 'المحامي كريم الديب - خبير في تقديم الخدمات القانونية المتخصصة للأجانب في مصر. محامي معتمد بخبرة دولية واسعة في خدمة الأجانب والمستثمرين الأجانب في مصر.',
              en: 'Lawyer Karim El-Dib - Expert in providing specialized legal services for foreigners in Egypt. Certified lawyer with extensive international experience in serving foreigners and foreign investors in Egypt.',
              fr: 'Avocat Karim El-Dib - Expert en fourniture de services juridiques spécialisés pour étrangers en Égypte. Avocat certifié avec une vaste expérience internationale au service des étrangers et investisseurs étrangers en Égypte.',
              it: 'Avvocato Karim El-Dib - Esperto nel fornire servizi legali specializzati per stranieri in Egitto. Avvocato certificato con vasta esperienza internazionale al servizio di stranieri e investitori stranieri in Egitto.'
            })}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            <span className="bg-[#c8a876] text-[#0b1a33] px-6 py-3 rounded-full font-semibold">
              {getTextByLanguage({
                ar: 'كريم الديب محامي',
                en: 'Karim El-Dib Lawyer',
                fr: 'Karim El-Dib Avocat',
                it: 'Karim El-Dib Avvocato'
              })}
            </span>
            <span className="bg-white text-[#0b1a33] px-6 py-3 rounded-full font-semibold">
              {getTextByLanguage({
                ar: 'خبرة +15 سنة',
                en: '+15 Years Experience',
                fr: '+15 Ans d\'Expérience',
                it: '+15 Anni di Esperienza'
              })}
            </span>
          </div>
        </div>

        {/* الخدمات المقدمة */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#c8a876] mb-12">
            {getTextByLanguage({
              ar: 'خدماتنا للأجانب في مصر',
              en: 'Our Services for Foreigners in Egypt',
              fr: 'Nos Services pour Étrangers en Égypte',
              it: 'I Nostri Servizi per Stranieri in Egitto'
            })}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-[#1a2d4d] p-8 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
                <i className={`${service.icon} text-4xl text-[#c8a876] mb-6 block`}></i>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* لماذا تختار المحامي كريم الديب */}
        <div className="bg-[#1a2d4d] rounded-lg p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#c8a876] mb-12">
            {getTextByLanguage({
              ar: 'لماذا تختار المحامي كريم الديب؟',
              en: 'Why Choose Lawyer Karim El-Dib?',
              fr: 'Pourquoi Choisir l\'Avocat Karim El-Dib?',
              it: 'Perché Scegliere l\'Avvocato Karim El-Dib?'
            })}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#c8a876] rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-check text-[#0b1a33] text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* قصص نجاح */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#c8a876] mb-12">
            {getTextByLanguage({
              ar: 'قصص نجاح لعملائنا الأجانب',
              en: 'Success Stories of Our Foreign Clients',
              fr: 'Histoires de Succès de Nos Clients Étrangers',
              it: 'Storie di Successo dei Nostri Clienti Stranieri'
            })}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1a2d4d] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">
                {getTextByLanguage({
                  ar: 'تأسيس شركة استثمارية أمريكية',
                  en: 'Establishing American Investment Company',
                  fr: 'Création d\'une Société d\'Investissement Américaine',
                  it: 'Costituzione di Società d\'Investimento Americana'
                })}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {getTextByLanguage({
                  ar: 'ساعدنا مستثمر أمريكي في تأسيس شركة استثمارية في القاهرة الجديدة برأس مال 2 مليون دولار، مع الحصول على جميع التصاريح اللازمة في وقت قياسي.',
                  en: 'We helped an American investor establish an investment company in New Cairo with a capital of $2 million, obtaining all necessary permits in record time.',
                  fr: 'Nous avons aidé un investisseur américain à créer une société d\'investissement à New Cairo avec un capital de 2 millions de dollars, obtenant tous les permis nécessaires en un temps record.',
                  it: 'Abbiamo aiutato un investitore americano a costituire una società d\'investimento a New Cairo con un capitale di 2 milioni di dollari, ottenendo tutti i permessi necessari in tempi record.'
                })}
              </p>
              <p className="text-[#c8a876] font-semibold">
                {getTextByLanguage({
                  ar: '- مايكل جونسون، مستثمر أمريكي',
                  en: '- Michael Johnson, American Investor',
                  fr: '- Michael Johnson, Investisseur Américain',
                  it: '- Michael Johnson, Investitore Americano'
                })}
              </p>
            </div>
            
            <div className="bg-[#1a2d4d] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">
                {getTextByLanguage({
                  ar: 'حل نزاع عقاري معقد',
                  en: 'Resolving Complex Real Estate Dispute',
                  fr: 'Résolution d\'un Litige Immobilier Complexe',
                  it: 'Risoluzione di Controversia Immobiliare Complessa'
                })}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {getTextByLanguage({
                  ar: 'نجحنا في حل نزاع عقاري معقد لمستثمر ألماني، وضمنا له استرداد حقوقه كاملة مع التعويضات المناسبة.',
                  en: 'We successfully resolved a complex real estate dispute for a German investor, ensuring full recovery of his rights with appropriate compensation.',
                  fr: 'Nous avons résolu avec succès un litige immobilier complexe pour un investisseur allemand, garantissant la récupération complète de ses droits avec une compensation appropriée.',
                  it: 'Abbiamo risolto con successo una controversia immobiliare complessa per un investitore tedesco, garantendo il pieno recupero dei suoi diritti con un risarcimento adeguato.'
                })}
              </p>
              <p className="text-[#c8a876] font-semibold">
                {getTextByLanguage({
                  ar: '- هانز مولر، مستثمر ألماني',
                  en: '- Hans Müller, German Investor',
                  fr: '- Hans Müller, Investisseur Allemand',
                  it: '- Hans Müller, Investitore Tedesco'
                })}
              </p>
            </div>
          </div>
        </div>

        {/* المناطق التي نخدمها */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#c8a876] mb-4">
            {getTextByLanguage({
              ar: 'نخدم الأجانب في جميع أنحاء مصر',
              en: 'We Serve Foreigners Throughout Egypt',
              fr: 'Nous Servons les Étrangers dans Toute l\'Égypte',
              it: 'Serviamo Stranieri in Tutto l\'Egitto'
            })}
          </h2>
          <p className="text-center text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            {getTextByLanguage({
              ar: 'مكاتبنا وخدماتنا القانونية متاحة في جميع المحافظات والمدن المصرية',
              en: 'Our offices and legal services are available in all Egyptian governorates and cities',
              fr: 'Nos bureaux et services juridiques sont disponibles dans tous les gouvernorats et villes égyptiens',
              it: 'I nostri uffici e servizi legali sono disponibili in tutti i governatorati e città egiziani'
            })}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                name: getTextByLanguage({ar: 'القاهرة الكبرى', en: 'Greater Cairo', fr: 'Grand Caire', it: 'Grande Cairo'}), 
                icon: 'fas fa-city',
                cities: language === 'ar' 
                  ? ['القاهرة', 'الجيزة', 'العاصمة الإدارية', 'القاهرة الجديدة']
                  : language === 'fr'
                  ? ['Le Caire', 'Gizeh', 'Nouvelle Capitale', 'Nouveau Caire']
                  : language === 'it'
                  ? ['Il Cairo', 'Giza', 'Nuova Capitale', 'Nuovo Cairo']
                  : ['Cairo', 'Giza', 'New Capital', 'New Cairo']
              },
              { 
                name: getTextByLanguage({ar: 'الإسكندرية', en: 'Alexandria', fr: 'Alexandrie', it: 'Alessandria'}), 
                icon: 'fas fa-anchor',
                cities: language === 'ar'
                  ? ['الإسكندرية', 'برج العرب', 'العجمي', 'أبو قير']
                  : ['Alexandria', 'Borg El Arab', 'Agami', 'Abu Qir']
              },
              { 
                name: getTextByLanguage({ar: 'البحر الأحمر', en: 'Red Sea', fr: 'Mer Rouge', it: 'Mar Rosso'}), 
                icon: 'fas fa-umbrella-beach',
                cities: language === 'ar'
                  ? ['شرم الشيخ', 'الغردقة', 'دهب', 'مرسى علم']
                  : language === 'fr'
                  ? ['Charm el-Cheikh', 'Hurghada', 'Dahab', 'Marsa Alam']
                  : ['Sharm El Sheikh', 'Hurghada', 'Dahab', 'Marsa Alam']
              },
              { 
                name: getTextByLanguage({ar: 'الساحل الشمالي', en: 'North Coast', fr: 'Côte Nord', it: 'Costa Nord'}), 
                icon: 'fas fa-water',
                cities: language === 'ar'
                  ? ['مطروح', 'العلمين', 'الساحل الشمالي', 'رأس الحكمة']
                  : language === 'fr'
                  ? ['Matrouh', 'Alamein', 'Côte Nord', 'Ras El Hekma']
                  : ['Matrouh', 'Alamein', 'North Coast', 'Ras El Hekma']
              },
              { 
                name: getTextByLanguage({ar: 'الأقصر وأسوان', en: 'Luxor & Aswan', fr: 'Louxor et Assouan', it: 'Luxor e Assuan'}), 
                icon: 'fas fa-monument',
                cities: language === 'ar'
                  ? ['الأقصر', 'أسوان', 'الكرنك', 'إدفو']
                  : language === 'fr'
                  ? ['Louxor', 'Assouan', 'Karnak', 'Edfou']
                  : ['Luxor', 'Aswan', 'Karnak', 'Edfu']
              },
              { 
                name: getTextByLanguage({ar: 'الدلتا', en: 'Delta Region', fr: 'Région du Delta', it: 'Regione del Delta'}), 
                icon: 'fas fa-map-marked-alt',
                cities: language === 'ar'
                  ? ['طنطا', 'المنصورة', 'دمياط', 'كفر الشيخ']
                  : language === 'fr'
                  ? ['Tanta', 'Mansourah', 'Damiette', 'Kafr El Sheikh']
                  : ['Tanta', 'Mansoura', 'Damietta', 'Kafr El Sheikh']
              },
              { 
                name: getTextByLanguage({ar: 'قناة السويس', en: 'Suez Canal', fr: 'Canal de Suez', it: 'Canale di Suez'}), 
                icon: 'fas fa-ship',
                cities: language === 'ar'
                  ? ['بورسعيد', 'السويس', 'الإسماعيلية', 'العين السخنة']
                  : language === 'fr'
                  ? ['Port-Saïd', 'Suez', 'Ismaïlia', 'Ain Sokhna']
                  : ['Port Said', 'Suez', 'Ismailia', 'Ain Sokhna']
              },
              { 
                name: getTextByLanguage({ar: 'صعيد مصر', en: 'Upper Egypt', fr: 'Haute-Égypte', it: 'Alto Egitto'}), 
                icon: 'fas fa-mountain',
                cities: language === 'ar'
                  ? ['أسيوط', 'المنيا', 'سوهاج', 'قنا']
                  : language === 'fr'
                  ? ['Assiout', 'Minya', 'Sohag', 'Qena']
                  : ['Assiut', 'Minya', 'Sohag', 'Qena']
              }
            ].map((region, index) => (
              <div 
                key={index} 
                className="bg-[#1a2d4d] p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-[#c8a876]/20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#c8a876]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className={`${region.icon} text-xl text-[#c8a876]`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-white">{region.name}</h3>
                </div>
                <div className="space-y-1.5">
                  {region.cities.map((city, cityIndex) => (
                    <div key={cityIndex} className="flex items-center gap-2 text-gray-300 text-sm">
                      <i className="fas fa-map-pin text-[#c8a876] text-xs"></i>
                      <span>{city}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 bg-[#1a2d4d] p-8 rounded-xl border-2 border-[#c8a876]/30">
            <i className="fas fa-globe-africa text-5xl text-[#c8a876] mb-4"></i>
            <h3 className="text-2xl font-bold text-white mb-2">
              {getTextByLanguage({
                ar: 'تغطية شاملة لجميع المحافظات',
                en: 'Comprehensive Coverage of All Governorates',
                fr: 'Couverture Complète de Tous les Gouvernorats',
                it: 'Copertura Completa di Tutti i Governatorati'
              })}
            </h3>
            <p className="text-gray-300 text-lg">
              {getTextByLanguage({
                ar: 'خدماتنا القانونية متاحة في جميع أنحاء جمهورية مصر العربية',
                en: 'Our legal services are available throughout the Arab Republic of Egypt',
                fr: 'Nos services juridiques sont disponibles dans toute la République Arabe d\'Égypte',
                it: 'I nostri servizi legali sono disponibili in tutta la Repubblica Araba d\'Egitto'
              })}
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#c8a876] to-[#b8956a] rounded-lg p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b1a33] mb-6">
            {getTextByLanguage({
              ar: 'هل تحتاج مساعدة قانونية في مصر؟',
              en: 'Do You Need Legal Help in Egypt?',
              fr: 'Avez-vous Besoin d\'Aide Juridique en Égypte?',
              it: 'Hai Bisogno di Assistenza Legale in Egitto?'
            })}
          </h2>
          <p className="text-xl text-[#0b1a33] mb-8 max-w-3xl mx-auto">
            {getTextByLanguage({
              ar: 'المحامي كريم الديب جاهز لمساعدتك في جميع احتياجاتك القانونية كأجنبي في مصر. اتصل بنا الآن للحصول على استشارة مجانية.',
              en: 'Lawyer Karim El-Dib is ready to help you with all your legal needs as a foreigner in Egypt. Contact us now for a free consultation.',
              fr: 'L\'avocat Karim El-Dib est prêt à vous aider pour tous vos besoins juridiques en tant qu\'étranger en Égypte. Contactez-nous maintenant pour une consultation gratuite.',
              it: 'L\'avvocato Karim El-Dib è pronto ad aiutarti con tutte le tue esigenze legali come straniero in Egitto. Contattaci ora per una consulenza gratuita.'
            })}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#contact" 
              className="bg-[#0b1a33] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors duration-300"
            >
              {getTextByLanguage({
                ar: 'احجز استشارة مجانية',
                en: 'Book Free Consultation',
                fr: 'Réserver une Consultation Gratuite',
                it: 'Prenota Consulenza Gratuita'
              })}
            </a>
            <a 
              href="tel:+201234567890" 
              className="bg-white text-[#0b1a33] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors duration-300"
            >
              {getTextByLanguage({
                ar: 'اتصل الآن',
                en: 'Call Now',
                fr: 'Appeler Maintenant',
                it: 'Chiama Ora'
              })}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ForeignersInEgypt;