import React, { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const CommercialLaw: React.FC = () => {
  const { language, getTextByLanguage } = useLanguage();
  const isRTL = language === 'ar';

  useEffect(() => {
    const title = language === 'ar'
      ? "محامي قانون تجاري | تأسيس شركات في مصر | المحامي كريم الديب"
      : language === 'fr'
      ? "Avocat Droit Commercial | Création Sociétés Égypte | Karim El-Dib"
      : language === 'it'
      ? "Avvocato Diritto Commerciale | Costituzione Società Egitto | Karim El-Dib"
      : "Commercial Lawyer | Company Formation Egypt | Lawyer Karim El-Dib";
    
    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'محامي قانون تجاري - المحامي كريم الديب خبير في تأسيس الشركات والقانون التجاري. تأسيس شركات للأجانب والمصريين، عقود تجارية، استثمار. Commercial lawyer Egypt, company formation, business law.');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'تأسيس شركات في مصر, محامي قانون تجاري, تأسيس شركة مصر, محامي شركات, عقود تجارية, محامي استثمار, تأسيس شركة أجنبية مصر, Commercial lawyer Egypt, Company formation Egypt, Business lawyer Cairo, كريم الديب محامي');
    }
  }, []);

  const services = [
    {
      icon: 'fas fa-building',
      title: getTextByLanguage({
        ar: 'تأسيس جميع أنواع الشركات',
        en: 'Establishing All Types of Companies',
        fr: 'Constitution de Tous Types de Sociétés',
        it: 'Costituzione di Tutti i Tipi di Società'
      }),
      description: getTextByLanguage({
        ar: 'تأسيس شركات المساهمة، ذات المسؤولية المحدودة، التضامن، والتوصية البسيطة والأشخاص',
        en: 'Establishing joint stock companies, limited liability, partnership, and simple recommendation companies',
        fr: 'Constitution de sociétés par actions, à responsabilité limitée, sociétés en nom collectif et en commandite simple',
        it: 'Costituzione di società per azioni, a responsabilità limitata, società in nome collettivo e in accomandita semplice'
      })
    },
    {
      icon: 'fas fa-globe',
      title: getTextByLanguage({
        ar: 'الشركات الأجنبية والاستثمار',
        en: 'Foreign Companies & Investment',
        fr: 'Sociétés Étrangères et Investissement',
        it: 'Società Straniere e Investimento'
      }),
      description: getTextByLanguage({
        ar: 'تأسيس الشركات الأجنبية في مصر وفقاً لقانون الاستثمار الجديد',
        en: 'Establishing foreign companies in Egypt according to the new investment law',
        fr: 'Constitution de sociétés étrangères en Égypte selon la nouvelle loi sur l\'investissement',
        it: 'Costituzione di società straniere in Egitto secondo la nuova legge sugli investimenti'
      })
    },
    {
      icon: 'fas fa-file-contract',
      title: getTextByLanguage({
        ar: 'صياغة العقود التجارية',
        en: 'Commercial Contract Drafting',
        fr: 'Rédaction de Contrats Commerciaux',
        it: 'Redazione di Contratti Commerciali'
      }),
      description: getTextByLanguage({
        ar: 'صياغة ومراجعة جميع أنواع العقود التجارية والاتفاقيات التجارية',
        en: 'Drafting and reviewing all types of commercial contracts and commercial agreements',
        fr: 'Rédaction et révision de tous types de contrats et accords commerciaux',
        it: 'Redazione e revisione di tutti i tipi di contratti e accordi commerciali'
      })
    },
    {
      icon: 'fas fa-handshake',
      title: getTextByLanguage({
        ar: 'عمليات الاندماج والاستحواذ',
        en: 'Mergers & Acquisitions',
        fr: 'Fusions et Acquisitions',
        it: 'Fusioni e Acquisizioni'
      }),
      description: getTextByLanguage({
        ar: 'استشارات قانونية في عمليات دمج الشركات والاستحواذ والتحالفات الاستراتيجية',
        en: 'Legal consultations in corporate mergers, acquisitions, and strategic alliances',
        fr: 'Consultations juridiques sur les fusions, acquisitions et alliances stratégiques d\'entreprises',
        it: 'Consulenze legali su fusioni, acquisizioni e alleanze strategiche aziendali'
      })
    },
    {
      icon: 'fas fa-chart-line',
      title: getTextByLanguage({
        ar: 'الامتثال والحوكمة',
        en: 'Compliance & Governance',
        fr: 'Conformité et Gouvernance',
        it: 'Conformità e Governance'
      }),
      description: getTextByLanguage({
        ar: 'ضمان الامتثال للقوانين التجارية وتطبيق معايير الحوكمة الرشيدة',
        en: 'Ensuring compliance with commercial laws and implementing good governance standards',
        fr: 'Assurer la conformité aux lois commerciales et mettre en œuvre les normes de bonne gouvernance',
        it: 'Garantire la conformità alle leggi commerciali e implementare standard di buona governance'
      })
    },
    {
      icon: 'fas fa-balance-scale',
      title: getTextByLanguage({
        ar: 'فض النزاعات التجارية',
        en: 'Commercial Dispute Resolution',
        fr: 'Résolution de Litiges Commerciaux',
        it: 'Risoluzione di Controversie Commerciali'
      }),
      description: getTextByLanguage({
        ar: 'حل النزاعات التجارية بين الشركات والشركاء والموردين',
        en: 'Resolving commercial disputes between companies, partners, and suppliers',
        fr: 'Résolution de litiges commerciaux entre entreprises, partenaires et fournisseurs',
        it: 'Risoluzione di controversie commerciali tra aziende, partner e fornitori'
      })
    }
  ];

  const companyTypes = [
    {
      type: getTextByLanguage({
        ar: 'شركة مساهمة',
        en: 'Joint Stock Company',
        fr: 'Société par Actions',
        it: 'Società per Azioni'
      }),
      minCapital: getTextByLanguage({
        ar: '250,000 جنيه',
        en: 'EGP 250,000',
        fr: '250 000 EGP',
        it: '250.000 EGP'
      }),
      features: [
        getTextByLanguage({
          ar: 'مسؤولية محدودة',
          en: 'Limited liability',
          fr: 'Responsabilité limitée',
          it: 'Responsabilità limitata'
        }),
        getTextByLanguage({
          ar: 'قابلة للاكتتاب العام',
          en: 'Public subscription capable',
          fr: 'Souscription publique possible',
          it: 'Possibilità di sottoscrizione pubblica'
        }),
        getTextByLanguage({
          ar: 'سهولة نقل الأسهم',
          en: 'Easy share transfer',
          fr: 'Transfert d\'actions facile',
          it: 'Trasferimento azioni facile'
        })
      ]
    },
    {
      type: getTextByLanguage({
        ar: 'شركة ذات مسؤولية محدودة',
        en: 'Limited Liability Company',
        fr: 'Société à Responsabilité Limitée',
        it: 'Società a Responsabilità Limitata'
      }),
      minCapital: getTextByLanguage({
        ar: '50,000 جنيه',
        en: 'EGP 50,000',
        fr: '50 000 EGP',
        it: '50.000 EGP'
      }),
      features: [
        getTextByLanguage({
          ar: 'مسؤولية محدودة',
          en: 'Limited liability',
          fr: 'Responsabilité limitée',
          it: 'Responsabilità limitata'
        }),
        getTextByLanguage({
          ar: 'مرونة في الإدارة',
          en: 'Management flexibility',
          fr: 'Flexibilité de gestion',
          it: 'Flessibilità di gestione'
        }),
        getTextByLanguage({
          ar: 'حماية الأصول الشخصية',
          en: 'Personal asset protection',
          fr: 'Protection des actifs personnels',
          it: 'Protezione del patrimonio personale'
        })
      ]
    },
    {
      type: getTextByLanguage({
        ar: 'شركة تضامن',
        en: 'Partnership Company',
        fr: 'Société en Nom Collectif',
        it: 'Società in Nome Collettivo'
      }),
      minCapital: getTextByLanguage({
        ar: 'لا يوجد حد أدنى',
        en: 'No minimum',
        fr: 'Pas de minimum',
        it: 'Nessun minimo'
      }),
      features: [
        getTextByLanguage({
          ar: 'مسؤولية تضامنية',
          en: 'Joint liability',
          fr: 'Responsabilité solidaire',
          it: 'Responsabilità solidale'
        }),
        getTextByLanguage({
          ar: 'سهولة التأسيس',
          en: 'Easy establishment',
          fr: 'Constitution facile',
          it: 'Costituzione facile'
        }),
        getTextByLanguage({
          ar: 'مرونة في العمليات',
          en: 'Operational flexibility',
          fr: 'Flexibilité opérationnelle',
          it: 'Flessibilità operativa'
        })
      ]
    },
    {
      type: getTextByLanguage({
        ar: 'شركة توصية بسيطة',
        en: 'Simple Partnership',
        fr: 'Société en Commandite Simple',
        it: 'Società in Accomandita Semplice'
      }),
      minCapital: getTextByLanguage({
        ar: 'حسب الاتفاق',
        en: 'As agreed',
        fr: 'Selon accord',
        it: 'Come concordato'
      }),
      features: [
        getTextByLanguage({
          ar: 'شركاء عاملون وموصون',
          en: 'Active & silent partners',
          fr: 'Associés actifs et commanditaires',
          it: 'Soci accomandatari e accomandanti'
        }),
        getTextByLanguage({
          ar: 'مسؤولية متنوعة',
          en: 'Varied liability',
          fr: 'Responsabilité variée',
          it: 'Responsabilità variata'
        }),
        getTextByLanguage({
          ar: 'مرونة في رأس المال',
          en: 'Capital flexibility',
          fr: 'Flexibilité du capital',
          it: 'Flessibilità del capitale'
        })
      ]
    }
  ];

const steps = [
    {
      step: '01',
      title: getTextByLanguage({
        ar: 'الاستشارة الأولية',
        en: 'Initial Consultation',
        fr: 'Consultation Initiale',
        it: 'Consulenza Iniziale'
      }),
      description: getTextByLanguage({
        ar: 'تحديد نوع الشركة المناسب ورأس المال والأنشطة',
        en: 'Determining suitable company type, capital, and activities',
        fr: 'Détermination du type de société, capital et activités appropriés',
        it: 'Determinazione del tipo di società, capitale e attività appropriate'
      })
    },
    {
      step: '02',
      title: getTextByLanguage({
        ar: 'إعداد المستندات',
        en: 'Document Preparation',
        fr: 'Préparation des Documents',
        it: 'Preparazione Documenti'
      }),
      description: getTextByLanguage({
        ar: 'إعداد عقد التأسيس والنظام الأساسي وجميع المستندات',
        en: 'Preparing incorporation contract, articles of association, and all documents',
        fr: 'Préparation du contrat de constitution, statuts et tous documents',
        it: 'Preparazione dell\'atto costitutivo, statuto e tutti i documenti'
      })
    },
    {
      step: '03',
      title: getTextByLanguage({
        ar: 'التوثيق والتسجيل',
        en: 'Authentication & Registration',
        fr: 'Authentification et Enregistrement',
        it: 'Autenticazione e Registrazione'
      }),
      description: getTextByLanguage({
        ar: 'توثيق العقود وتسجيل الشركة في السجل التجاري',
        en: 'Authenticating contracts and registering the company in commercial registry',
        fr: 'Authentification des contrats et enregistrement au registre du commerce',
        it: 'Autenticazione dei contratti e registrazione nel registro commerciale'
      })
    },
    {
      step: '04',
      title: getTextByLanguage({
        ar: 'الحصول على التراخيص',
        en: 'Obtaining Licenses',
        fr: 'Obtention des Licences',
        it: 'Ottenimento Licenze'
      }),
      description: getTextByLanguage({
        ar: 'استخراج جميع التراخيص والتصاريح اللازمة للعمل',
        en: 'Obtaining all necessary licenses and permits for operation',
        fr: 'Obtention de toutes les licences et permis nécessaires',
        it: 'Ottenimento di tutte le licenze e permessi necessari'
      })
    },
    {
      step: '05',
      title: getTextByLanguage({
        ar: 'بدء النشاط',
        en: 'Starting Operations',
        fr: 'Démarrage des Opérations',
        it: 'Avvio Operazioni'
      }),
      description: getTextByLanguage({
        ar: 'مساعدتك في بدء النشاط التجاري والامتثال القانوني',
        en: 'Helping you start business operations and legal compliance',
        fr: 'Aide au démarrage des opérations commerciales et à la conformité légale',
        it: 'Aiuto nell\'avvio delle operazioni commerciali e nella conformità legale'
      })
    }
  ];

  return (
    <div className="min-h-screen bg-[#0b1a33] text-gray-200" dir={isRTL ? 'rtl' : 'ltr'}>
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white overflow-hidden bg-[#0b1a33]">
        <img
          src="/images/services/commercial-law.webp"
          alt={isRTL ? "القانون التجاري - مكتب كريم الديب للمحاماة" : "Commercial Law - Karim El-Dib Law Firm"}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[#0b1a33] bg-opacity-70 z-[1]"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0b1a33] to-transparent z-[2]"></div>
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
            {getTextByLanguage({
              ar: 'محامي قانون تجاري وتأسيس شركات',
              en: 'Commercial Law & Company Formation Lawyer',
              fr: 'Avocat Droit Commercial et Constitution de Sociétés',
              it: 'Avvocato Diritto Commerciale e Costituzione Società'
            })}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-6 font-medium text-[#d4a15c]">
            {getTextByLanguage({
              ar: 'المحامي كريم الديب - خبير في القانون التجاري وتأسيس الشركات في مصر. نساعد المصريين والأجانب في تأسيس شركاتهم وتنمية أعمالهم وفقاً للقانون المصري.',
              en: 'Lawyer Karim El-Dib - Expert in commercial law and company formation in Egypt. We help Egyptians and foreigners establish their companies and grow their businesses according to Egyptian law.',
              fr: 'Avocat Karim El-Dib - Expert en droit commercial et constitution de sociétés en Égypte. Nous aidons les Égyptiens et les étrangers à créer leurs entreprises et à développer leurs activités conformément à la loi égyptienne.',
              it: 'Avvocato Karim El-Dib - Esperto in diritto commerciale e costituzione di società in Egitto. Aiutiamo egiziani e stranieri a costituire le loro società e a sviluppare le loro attività secondo la legge egiziana.'
            })}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-base">
            <span className="bg-[#c8a876] text-[#0b1a33] px-5 py-2.5 rounded-full font-semibold">
              {getTextByLanguage({
                ar: 'خبير تأسيس الشركات',
                en: 'Company Formation Expert',
                fr: 'Expert en Constitution de Sociétés',
                it: 'Esperto in Costituzione Società'
              })}
            </span>
            <span className="bg-white/20 backdrop-blur-sm text-white px-5 py-2.5 rounded-full font-semibold border border-white/30">
              {getTextByLanguage({
                ar: '+500 شركة تأسست',
                en: '+500 Companies Established',
                fr: '+500 Sociétés Créées',
                it: '+500 Società Costituite'
              })}
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* خدمات القانون التجاري */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#c8a876] mb-12">
            {getTextByLanguage({
              ar: 'خدمات القانون التجاري',
              en: 'Commercial Law Services',
              fr: 'Services de Droit Commercial',
              it: 'Servizi di Diritto Commerciale'
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

        {/* القانون البحري وقانون طاقة الاستثمار */}
        <div className="mb-20 bg-[#1a2d4d]/30 rounded-2xl p-8 border border-[#c8a876]/10">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-3xl font-bold text-[#c8a876] mb-4">
              {getTextByLanguage({
                ar: 'القانون البحري وطاقة الاستثمار',
                en: 'Maritime Law & Energy Investment Law',
                fr: 'Droit Maritime & Énergie d\'Investissement',
                it: 'Diritto Marittimo e Legge sull\'Energia'
              })}
            </h2>
            <div className="w-24 h-1 bg-[#c8a876] mx-auto mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300 leading-relaxed">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-2">
                {getTextByLanguage({ ar: 'القانون البحري ومنازعات الموانئ', en: 'Maritime Law & Port Disputes', fr: 'Droit Maritime & Litiges Portuaires', it: 'Diritto Marittimo e Controversie Portuali' })}
              </h3>
              <p>
                {getTextByLanguage({
                  ar: 'نقدم استشارات قانونية متكاملة لشركات الشحن البحري، والتخليص الجمركي، ونزاعات الموانئ في الإسكندرية. يشمل ذلك عقود النقل البحري، والتعويضات عن خسائر البضائع، وحجز السفن.',
                  en: 'We provide comprehensive legal consultations for shipping companies, customs clearance agents, and port disputes in Alexandria. This includes maritime transport contracts, cargo damage claims, and vessel arrest.',
                  fr: 'Nous offrons des conseils juridiques complets pour les compagnies maritimes, les agents de dédouanement et les litiges portuaires à Alexandrie.',
                  it: 'Forniamo consulenze legali complete per compagnie di navigazione, agenti doganali e controversie portuali ad Alessandria.'
                })}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-2">
                {getTextByLanguage({ ar: 'قانون الطاقة وعقود الاستثمار البترولي', en: 'Energy Law & Oil Investment Contracts', fr: 'Droit de l\'Énergie & Contrats Pétroliers', it: 'Diritto dell\'Energia e Contratti Petroliferi' })}
              </h3>
              <p>
                {getTextByLanguage({
                  ar: 'نحن نساعد شركات الطاقة الدولية والمستثمرين في صياغة ومراجعة عقود الامتياز والتنقيب عن البترول والغاز الطبيعي، والتعامل مع وزارة البترول والهيئات الحكومية المعنية لتأمين استثماراتهم بالكامل في مصر.',
                  en: 'We assist international energy companies and investors in drafting and reviewing concession, exploration, and drilling agreements for oil and natural gas, dealing with the Ministry of Petroleum and government authorities.',
                  fr: 'Nous aidons les compagnies d\'énergie internationales et les investisseurs à rédiger et réviser les accords de concession, d\'exploration et de forage pour le pétrole et le gaz naturel.',
                  it: 'Assistiamo compagnie energetiche internazionali e investitori nella redazione e revisione di accordi di concessione, esplorazione e perforazione per petrolio e gas naturale.'
                })}
              </p>
            </div>
          </div>
        </div>

        {/* أنواع الشركات */}
        <div className="bg-[#1a2d4d] rounded-lg p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#c8a876] mb-12">
            {getTextByLanguage({
              ar: 'أنواع الشركات التي نؤسسها',
              en: 'Types of Companies We Establish',
              fr: 'Types de Sociétés que Nous Créons',
              it: 'Tipi di Società che Costituiamo'
            })}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyTypes.map((company, index) => (
              <div key={index} className="bg-[#0b1a33] p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-[#c8a876] mb-4">{company.type}</h3>
                <div className="mb-4">
                  <span className="text-white font-semibold">{getTextByLanguage({
                    ar: 'رأس المال الأدنى: ',
                    en: 'Minimum Capital: ',
                    fr: 'Capital Minimum : ',
                    it: 'Capitale Minimo: '
                  })}</span>
                  <span className="text-gray-300">{company.minCapital}</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">{getTextByLanguage({
                    ar: 'المميزات:',
                    en: 'Features:',
                    fr: 'Caractéristiques :',
                    it: 'Caratteristiche:'
                  })}</h4>
                  <ul className="space-y-1">
                    {company.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 flex items-center gap-2">
                        <i className="fas fa-check text-[#c8a876] text-sm"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* خطوات تأسيس الشركة */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#c8a876] mb-12">
            {getTextByLanguage({
              ar: 'خطوات تأسيس الشركة',
              en: 'Company Formation Steps',
              fr: 'Étapes de Constitution de Société',
              it: 'Fasi di Costituzione Società'
            })}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#c8a876] rounded-full flex items-center justify-center text-[#0b1a33] font-bold text-xl mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* قصص نجاح */}
        <div className="bg-[#1a2d4d] rounded-lg p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#c8a876] mb-12">
            {getTextByLanguage({
              ar: 'قصص نجاح في تأسيس الشركات',
              en: 'Success Stories in Company Formation',
              fr: 'Histoires de Réussite en Constitution de Sociétés',
              it: 'Storie di Successo nella Costituzione di Società'
            })}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0b1a33] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">
                {getTextByLanguage({
                  ar: 'شركة تكنولوجيا ناشئة',
                  en: 'Tech Startup Company',
                  fr: 'Startup Technologique',
                  it: 'Startup Tecnologica'
                })}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {getTextByLanguage({
                  ar: 'ساعدنا مجموعة من المهندسين الشباب في تأسيس شركة تكنولوجيا ناشئة، وحصلت على استثمارات بقيمة 5 مليون جنيه في السنة الأولى.',
                  en: 'We helped a group of young engineers establish a tech startup company that received EGP 5 million in investments in its first year.',
                  fr: 'Nous avons aidé un groupe de jeunes ingénieurs à créer une startup technologique qui a reçu 5 millions de livres égyptiennes d\'investissements la première année.',
                  it: 'Abbiamo aiutato un gruppo di giovani ingegneri a costituire una startup tecnologica che ha ricevuto 5 milioni di sterline egiziane di investimenti nel primo anno.'
                })}
              </p>
              <p className="text-[#c8a876] font-semibold">
                {getTextByLanguage({
                  ar: '- شركة تك إيجيبت للتكنولوجيا',
                  en: '- Tech Egypt Technology Company',
                  fr: '- Tech Egypt Technology Company',
                  it: '- Tech Egypt Technology Company'
                })}
              </p>
            </div>
            
            <div className="bg-[#0b1a33] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">
                {getTextByLanguage({
                  ar: 'شركة استيراد وتصدير دولية',
                  en: 'International Import/Export Company',
                  fr: 'Société Import/Export Internationale',
                  it: 'Società di Import/Export Internazionale'
                })}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {getTextByLanguage({
                  ar: 'أسسنا شركة استيراد وتصدير لمستثمر ألماني، وأصبحت من أكبر الشركات في مجالها خلال 3 سنوات.',
                  en: 'We established an import/export company for a German investor, which became one of the largest companies in its field within 3 years.',
                  fr: 'Nous avons créé une société d\'import/export pour un investisseur allemand, devenue l\'une des plus grandes entreprises de son secteur en 3 ans.',
                  it: 'Abbiamo costituito una società di import/export per un investitore tedesco, diventata una delle più grandi aziende del settore in 3 anni.'
                })}
              </p>
              <p className="text-[#c8a876] font-semibold">
                {getTextByLanguage({
                  ar: '- شركة يورو تريد إيجيبت',
                  en: '- Euro Trade Egypt Company',
                  fr: '- Euro Trade Egypt Company',
                  it: '- Euro Trade Egypt Company'
                })}
              </p>
            </div>
          </div>
        </div>

        {/* تغطية الخدمة في المحافظات */}
        <div className="mb-16 bg-[#1a2d4d]/50 rounded-2xl p-8 border border-[#c8a876]/20 text-white">
          <h2 className="text-3xl font-bold text-center text-[#c8a876] mb-8">
            {getTextByLanguage({
              ar: 'تغطية الخدمة والمناطق المستهدفة في مصر',
              en: 'Service Coverage & Operation Areas in Egypt',
              fr: 'Couverture du Service & Zones d\'Opération en Égypte',
              it: 'Copertura del Servizio e Aree Operative in Egitto'
            })}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Alexandria */}
            <div className="bg-[#0b1a33]/60 rounded-xl p-6 border border-[#c8a876]/10 flex flex-col justify-between items-center text-center">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {getTextByLanguage({ ar: 'المكتب الرئيسي - الإسكندرية', en: 'Main Office - Alexandria', fr: 'Bureau Principal - Alexandrie', it: 'Ufficio Principale - Alessandria' })}
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  {getTextByLanguage({
                    ar: 'خدمات قانونية متكاملة للشركات التجارية والاستثمارات وتأسيس الشركات وإدارة الموانئ والشحن في الإسكندرية.',
                    en: 'Comprehensive legal services for commercial firms, companies establishment, port administration and shipping in Alexandria.',
                    fr: 'Services juridiques complets pour les entreprises commerciales, création de sociétés, administration portuaire et transport à Alexandrie.',
                    it: 'Servizi legali completi per imprese commerciali, costituzione di società, amministrazione portuale e trasporti ad Alessandria.'
                  })}
                </p>
              </div>
              <Link to="/alexandria" className="text-sm text-[#c8a876] hover:text-white hover:underline font-semibold">
                {getTextByLanguage({ ar: 'تفاصيل فرع الإسكندرية ←', en: 'Alexandria Office Details ←', fr: 'Détails du Bureau d\'Alexandrie ←', it: 'Dettagli Ufficio Alessandria ←' })}
              </Link>
            </div>

            {/* Sharm El Sheikh */}
            <div className="bg-[#0b1a33]/60 rounded-xl p-6 border border-[#c8a876]/10 flex flex-col justify-between items-center text-center">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {getTextByLanguage({ ar: 'فرع شرم الشيخ', en: 'Sharm El Sheikh Branch', fr: 'Succursale - Sharm El Sheikh', it: 'Filiale - Sharm El Sheikh' })}
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  {getTextByLanguage({
                    ar: 'تأسيس شركات الفنادق والسياحة، وعقود إدارة المنشآت السياحية للمستثمرين الأجانب والمحليين بشرم الشيخ وجنوب سيناء.',
                    en: 'Establishing hotel and tourism companies, and management agreements for foreign and domestic investors in Sharm El Sheikh.',
                    fr: 'Création de sociétés hôtelières et touristiques, et accords de gestion pour investisseurs étrangers et locaux à Charm.',
                    it: 'Costituzione di società alberghiere e turistiche, e contratti di gestione per investitori stranieri e locali a Sharm.'
                  })}
                </p>
              </div>
              <Link to="/sharm-el-sheikh" className="text-sm text-[#c8a876] hover:text-white hover:underline font-semibold">
                {getTextByLanguage({ ar: 'تفاصيل فرع شرم الشيخ ←', en: 'Sharm El Sheikh Branch Details ←', fr: 'Détails de la Succursale de Charm ←', it: 'Dettagli Filiale Sharm ←' })}
              </Link>
            </div>

            {/* Cairo */}
            <div className="bg-[#0b1a33]/60 rounded-xl p-6 border border-[#c8a876]/10 flex flex-col justify-between items-center text-center">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {getTextByLanguage({ ar: 'مكتب التمثيل - القاهرة', en: 'Representation Office - Cairo', fr: 'Bureau de Représentation - Le Caire', it: 'Ufficio di Rappresentanza - Il Cairo' })}
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  {getTextByLanguage({
                    ar: 'تخليص ومتابعة كافة تراخيص الشركات وتأسيسها وتوثيق العقود التجارية بالهيئة العامة للاستثمار والمناطق الحرة (GAFI) بالقاهرة.',
                    en: 'Completing and following up on all company licenses, formation, and documenting commercial contracts at GAFI in Cairo.',
                    fr: 'Obtention de toutes les licences d\'entreprise, création et enregistrement des contrats commerciaux auprès de la GAFI au Caire.',
                    it: 'Ottenimento di licenze aziendali, costituzione e registrazione di contratti commerciali presso GAFI al Cairo.'
                  })}
                </p>
              </div>
              <Link to="/cairo" className="text-sm text-[#c8a876] hover:text-white hover:underline font-semibold">
                {getTextByLanguage({ ar: 'تفاصيل خدمات القاهرة ←', en: 'Cairo Services Details ←', fr: 'Détails des Services du Caire ←', it: 'Dettagli Servizi Cairo ←' })}
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#c8a876] to-[#b8956a] rounded-lg p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b1a33] mb-6">
            {getTextByLanguage({
              ar: 'جاهز لتأسيس شركتك؟',
              en: 'Ready to Establish Your Company?',
              fr: 'Prêt à Créer Votre Société?',
              it: 'Pronto a Costituire la Tua Società?'
            })}
          </h2>
          <p className="text-xl text-[#0b1a33] mb-8 max-w-3xl mx-auto">
            {getTextByLanguage({
              ar: 'المحامي كريم الديب جاهز لمساعدتك في تأسيس شركتك وبدء رحلة نجاحك التجاري في مصر.',
              en: 'Lawyer Karim El-Dib is ready to help you establish your company and start your commercial success journey in Egypt.',
              fr: 'L\'avocat Karim El-Dib est prêt à vous aider à créer votre société et à démarrer votre parcours de réussite commerciale en Égypte.',
              it: 'L\'avvocato Karim El-Dib è pronto ad aiutarti a costituire la tua società e ad iniziare il tuo percorso di successo commerciale in Egitto.'
            })}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#contact" 
              className="bg-[#0b1a33] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors duration-300"
            >
              {getTextByLanguage({
                ar: 'ابدأ تأسيس شركتك',
                en: 'Start Your Company Formation',
                fr: 'Commencez la Création',
                it: 'Inizia la Costituzione'
              })}
            </a>
            <a 
              href="tel:+201223767592" 
              className="bg-white text-[#0b1a33] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors duration-300"
            >
              {getTextByLanguage({
                ar: 'اتصل للاستشارة',
                en: 'Call for Consultation',
                fr: 'Appelez pour Consultation',
                it: 'Chiama per Consulenza'
              })}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CommercialLaw;