import React, { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const EgyptiansAbroad: React.FC = () => {
  const { language, getTextByLanguage } = useLanguage();
  const isRTL = language === 'ar';

  useEffect(() => {
    const title = language === 'ar'
      ? "خدمات المصريين المغتربين | المحامي كريم الديب"
      : language === 'fr'
      ? "Services pour Égyptiens à l'Étranger | Karim El-Dib"
      : language === 'it'
      ? "Servizi per Egiziani all'Estero | Karim El-Dib"
      : "Legal Services for Egyptian Expats | Karim El-Dib";
    
    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      const description = language === 'ar'
        ? 'خدمات قانونية للمصريين المغتربين - المحامي كريم الديب محامي في مصر متخصص في خدمة المغتربين المصريين. خدمات قانونية شاملة للمصريين في جميع أنحاء العالم.'
        : language === 'fr'
        ? 'Services juridiques pour Égyptiens expatriés - Karim El-Dib avocat en Égypte spécialisé au service des expatriés égyptiens. Services juridiques complets pour Égyptiens dans le monde entier.'
        : language === 'it'
        ? 'Servizi legali per egiziani espatriati - Karim El-Dib avvocato in Egitto specializzato nel servizio degli espatriati egiziani. Servizi legali completi per egiziani in tutto il mondo.'
        : 'Legal services for Egyptian expats - Karim El-Dib lawyer in Egypt specialized in serving Egyptian expatriates. Comprehensive legal services for Egyptians worldwide.';
      
      metaDescription.setAttribute('content', description);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      const keywords = language === 'ar'
        ? 'خدمات المصريين المغتربين, محامي للمصريين في الخارج, خدمات قانونية للمغتربين المصريين, محامي مصريين أوروبا, محامي مصريين أمريكا, محامي مصريين الخليج, كريم الديب محامي'
        : language === 'fr'
        ? 'services égyptiens expatriés, avocat égyptiens étranger, services juridiques expatriés égyptiens, avocat égyptiens europe, avocat égyptiens amérique, karim el-dib avocat'
        : language === 'it'
        ? 'servizi egiziani espatriati, avvocato egiziani estero, servizi legali espatriati egiziani, avvocato egiziani europa, avvocato egiziani america, karim el-dib avvocato'
        : 'legal services egyptian expats, lawyer egyptians abroad, egyptian expatriates services, lawyer egyptians europe, lawyer egyptians america, karim el-dib lawyer';
      
      metaKeywords.setAttribute('content', keywords);
    }
  }, [language]);

  const services = [
    {
      icon: 'fas fa-file-signature',
      title: getTextByLanguage({
        ar: 'وكالات قانونية وتوثيق',
        en: 'Legal Powers of Attorney & Documentation',
        fr: 'Procurations Légales et Documentation',
        it: 'Procure Legali e Documentazione'
      }),
      description: getTextByLanguage({
        ar: 'إنجاز الوكالات القانونية وتوثيق المستندات للمصريين بالخارج',
        en: 'Completing legal powers of attorney and document authentication for Egyptians abroad',
        fr: 'Complétant les procurations légales et l\'authentification des documents pour les Égyptiens à l\'étranger',
        it: 'Completamento di procure legali e autenticazione documenti per egiziani all\'estero'
      })
    },
    {
      icon: 'fas fa-home',
      title: getTextByLanguage({
        ar: 'إدارة العقارات والممتلكات',
        en: 'Property & Asset Management',
        fr: 'Gestion Immobilière et Patrimoniale',
        it: 'Gestione Immobiliare e Patrimoniale'
      }),
      description: getTextByLanguage({
        ar: 'إدارة وتصرف في العقارات والممتلكات نيابة عن المصريين بالخارج',
        en: 'Managing and disposing of real estate and properties on behalf of Egyptians abroad',
        fr: 'Gestion et disposition de biens immobiliers et propriétés au nom des Égyptiens à l\'étranger',
        it: 'Gestione e disposizione di immobili e proprietà per conto di egiziani all\'estero'
      })
    },
    {
      icon: 'fas fa-gavel',
      title: getTextByLanguage({
        ar: 'التمثيل أمام المحاكم',
        en: 'Court Representation',
        fr: 'Représentation devant les Tribunaux',
        it: 'Rappresentanza nei Tribunali'
      }),
      description: getTextByLanguage({
        ar: 'تمثيل المصريين بالخارج أمام المحاكم المصرية في جميع القضايا',
        en: 'Representing Egyptians abroad before Egyptian courts in all cases',
        fr: 'Représentation des Égyptiens à l\'étranger devant les tribunaux égyptiens dans toutes les affaires',
        it: 'Rappresentanza di egiziani all\'estero davanti ai tribunali egiziani in tutti i casi'
      })
    },
    {
      icon: 'fas fa-heart',
      title: getTextByLanguage({
        ar: 'قضايا الأحوال الشخصية',
        en: 'Personal Status Cases',
        fr: 'Cas de Statut Personnel',
        it: 'Casi di Stato Civile'
      }),
      description: getTextByLanguage({
        ar: 'إنجاز معاملات الزواج والطلاق والميراث للمصريين بالخارج',
        en: 'Completing marriage, divorce, and inheritance procedures for Egyptians abroad',
        fr: 'Complétant les procédures de mariage, divorce et héritage pour les Égyptiens à l\'étranger',
        it: 'Completamento delle procedure di matrimonio, divorzio ed eredità per egiziani all\'estero'
      })
    },
    {
      icon: 'fas fa-building',
      title: getTextByLanguage({
        ar: 'الاستثمار في مصر',
        en: 'Investment in Egypt',
        fr: 'Investissement en Égypte',
        it: 'Investimento in Egitto'
      }),
      description: getTextByLanguage({
        ar: 'مساعدة المصريين بالخارج في الاستثمار وتأسيس المشاريع في مصر',
        en: 'Helping Egyptians abroad invest and establish projects in Egypt',
        fr: 'Aider les Égyptiens à l\'étranger à investir et établir des projets en Égypte',
        it: 'Aiutare gli egiziani all\'estero a investire e stabilire progetti in Egitto'
      })
    },
    {
      icon: 'fas fa-passport',
      title: getTextByLanguage({
        ar: 'الخدمات القنصلية والحكومية',
        en: 'Consular & Government Services',
        fr: 'Services Consulaires et Gouvernementaux',
        it: 'Servizi Consolari e Governativi'
      }),
      description: getTextByLanguage({
        ar: 'إنجاز المعاملات الحكومية والقنصلية للمصريين بالخارج',
        en: 'Completing government and consular procedures for Egyptians abroad',
        fr: 'Complétant les procédures gouvernementales et consulaires pour les Égyptiens à l\'étranger',
        it: 'Completamento delle procedure governative e consolari per egiziani all\'estero'
      })
    }
  ];

  const countries = [
    {
      name: getTextByLanguage({
        ar: 'الولايات المتحدة الأمريكية',
        en: 'United States',
        fr: 'États-Unis',
        it: 'Stati Uniti'
      }),
      icon: 'fas fa-flag-usa',
      color: '#c8a876',
      cities: language === 'ar' ? ['نيويورك', 'لوس أنجلوس', 'شيكاغو', 'واشنطن'] : ['New York', 'Los Angeles', 'Chicago', 'Washington']
    },
    {
      name: getTextByLanguage({
        ar: 'ألمانيا',
        en: 'Germany',
        fr: 'Allemagne',
        it: 'Germania'
      }),
      icon: 'fas fa-landmark',
      color: '#c8a876',
      cities: language === 'ar' ? ['برلين', 'ميونيخ', 'فرانكفورت', 'هامبورغ'] : language === 'fr' ? ['Berlin', 'Munich', 'Francfort', 'Hambourg'] : ['Berlin', 'Munich', 'Frankfurt', 'Hamburg']
    },
    {
      name: getTextByLanguage({
        ar: 'المملكة العربية السعودية',
        en: 'Saudi Arabia',
        fr: 'Arabie Saoudite',
        it: 'Arabia Saudita'
      }),
      icon: 'fas fa-mosque',
      color: '#c8a876',
      cities: language === 'ar' ? ['الرياض', 'جدة', 'الدمام', 'مكة المكرمة'] : language === 'fr' ? ['Riyad', 'Djeddah', 'Dammam', 'La Mecque'] : ['Riyadh', 'Jeddah', 'Dammam', 'Makkah']
    },
    {
      name: getTextByLanguage({
        ar: 'الإمارات العربية المتحدة',
        en: 'UAE',
        fr: 'Émirats Arabes Unis',
        it: 'Emirati Arabi Uniti'
      }),
      icon: 'fas fa-city',
      color: '#c8a876',
      cities: language === 'ar' ? ['دبي', 'أبوظبي', 'الشارقة', 'عجمان'] : language === 'fr' ? ['Dubaï', 'Abu Dhabi', 'Sharjah', 'Ajman'] : ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman']
    },
    {
      name: getTextByLanguage({
        ar: 'كندا',
        en: 'Canada',
        fr: 'Canada',
        it: 'Canada'
      }),
      icon: 'fas fa-map-marker-alt',
      color: '#c8a876',
      cities: language === 'ar' ? ['تورنتو', 'فانكوفر', 'مونتريال', 'أوتاوا'] : language === 'fr' ? ['Toronto', 'Vancouver', 'Montréal', 'Ottawa'] : ['Toronto', 'Vancouver', 'Montreal', 'Ottawa']
    },
    {
      name: getTextByLanguage({
        ar: 'المملكة المتحدة',
        en: 'United Kingdom',
        fr: 'Royaume-Uni',
        it: 'Regno Unito'
      }),
      icon: 'fas fa-university',
      color: '#c8a876',
      cities: language === 'ar' ? ['لندن', 'مانشستر', 'برمنغهام', 'ليفربول'] : language === 'fr' ? ['Londres', 'Manchester', 'Birmingham', 'Liverpool'] : ['London', 'Manchester', 'Birmingham', 'Liverpool']
    },
    {
      name: getTextByLanguage({
        ar: 'الكويت',
        en: 'Kuwait',
        fr: 'Koweït',
        it: 'Kuwait'
      }),
      icon: 'fas fa-building',
      color: '#c8a876',
      cities: language === 'ar' ? ['الكويت', 'حولي', 'السالمية', 'الفروانية'] : language === 'fr' ? ['Koweït', 'Hawalli', 'Salmiya', 'Farwaniya'] : ['Kuwait City', 'Hawalli', 'Salmiya', 'Farwaniya']
    },
    {
      name: getTextByLanguage({
        ar: 'قطر',
        en: 'Qatar',
        fr: 'Qatar',
        it: 'Qatar'
      }),
      icon: 'fas fa-city',
      color: '#c8a876',
      cities: language === 'ar' ? ['الدوحة', 'الوكرة', 'الخور', 'الريان'] : language === 'fr' ? ['Doha', 'Al Wakrah', 'Al Khor', 'Al Rayyan'] : ['Doha', 'Al Wakrah', 'Al Khor', 'Al Rayyan']
    },
    {
      name: getTextByLanguage({
        ar: 'أستراليا',
        en: 'Australia',
        fr: 'Australie',
        it: 'Australia'
      }),
      icon: 'fas fa-globe-asia',
      color: '#c8a876',
      cities: language === 'ar' ? ['سيدني', 'ملبورن', 'بريسبان', 'بيرث'] : language === 'fr' ? ['Sydney', 'Melbourne', 'Brisbane', 'Perth'] : ['Sydney', 'Melbourne', 'Brisbane', 'Perth']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: getTextByLanguage({
        ar: 'التواصل الأولي',
        en: 'Initial Contact',
        fr: 'Contact Initial',
        it: 'Contatto Iniziale'
      }),
      description: getTextByLanguage({
        ar: 'تواصل معنا عبر الهاتف أو البريد الإلكتروني أو واتساب',
        en: 'Contact us via phone, email, or WhatsApp',
        fr: 'Contactez-nous par téléphone, email ou WhatsApp',
        it: 'Contattaci tramite telefono, email o WhatsApp'
      })
    },
    {
      step: '02',
      title: getTextByLanguage({
        ar: 'تقييم الحالة',
        en: 'Case Assessment',
        fr: 'Évaluation du Cas',
        it: 'Valutazione del Caso'
      }),
      description: getTextByLanguage({
        ar: 'نقيم حالتك ونحدد الخدمات المطلوبة والإجراءات اللازمة',
        en: 'We assess your case and determine required services and procedures',
        fr: 'Nous évaluons votre cas et déterminons les services et procédures nécessaires',
        it: 'Valutiamo il tuo caso e determiniamo i servizi e le procedure necessarie'
      })
    },
    {
      step: '03',
      title: getTextByLanguage({
        ar: 'التوكيل والتفويض',
        en: 'Authorization & Delegation',
        fr: 'Autorisation et Délégation',
        it: 'Autorizzazione e Delega'
      }),
      description: getTextByLanguage({
        ar: 'نحصل على التوكيل اللازم لتمثيلك قانونياً في مصر',
        en: 'We obtain necessary authorization to represent you legally in Egypt',
        fr: 'Nous obtenons l\'autorisation nécessaire pour vous représenter légalement en Égypte',
        it: 'Otteniamo l\'autorizzazione necessaria per rappresentarti legalmente in Egitto'
      })
    },
    {
      step: '04',
      title: getTextByLanguage({
        ar: 'تنفيذ الخدمة',
        en: 'Service Execution',
        fr: 'Exécution du Service',
        it: 'Esecuzione del Servizio'
      }),
      description: getTextByLanguage({
        ar: 'ننفذ الخدمة المطلوبة ونتابع الإجراءات حتى الإنجاز',
        en: 'We execute the required service and follow up procedures until completion',
        fr: 'Nous exécutons le service requis et suivons les procédures jusqu\'à l\'achèvement',
        it: 'Eseguiamo il servizio richiesto e seguiamo le procedure fino al completamento'
      })
    },
    {
      step: '05',
      title: getTextByLanguage({
        ar: 'التقارير والمتابعة',
        en: 'Reporting & Follow-up',
        fr: 'Rapport et Suivi',
        it: 'Reportistica e Follow-up'
      }),
      description: getTextByLanguage({
        ar: 'نرسل لك تقارير دورية ونتابع معك حتى إتمام كل شيء',
        en: 'We send you periodic reports and follow up with you until everything is completed',
        fr: 'Nous vous envoyons des rapports périodiques et assurons le suivi jusqu\'à ce que tout soit terminé',
        it: 'Ti inviamo report periodici e ti seguiamo fino al completamento di tutto'
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
              ar: 'خدمات المصريين المغتربين',
              en: 'Legal Services for Egyptian Expats',
              fr: 'Services Juridiques pour Égyptiens Expatriés',
              it: 'Servizi Legali per Egiziani Espatriati'
            })}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            {getTextByLanguage({
              ar: 'المحامي كريم الديب - محامي دولي في مصر متخصص في تقديم الخدمات القانونية للمغتربين المصريين في جميع أنحاء العالم. نحن جسرك القانوني مع مصر.',
              en: 'Lawyer Karim El-Dib - International lawyer in Egypt specialized in providing legal services for Egyptian expats worldwide. We are your legal bridge with Egypt.',
              fr: 'Avocat Karim El-Dib - Avocat international en Égypte spécialisé dans la fourniture de services juridiques pour les expatriés égyptiens dans le monde entier. Nous sommes votre pont juridique avec l\'Égypte.',
              it: 'Avvocato Karim El-Dib - Avvocato internazionale in Egitto specializzato nel fornire servizi legali per espatriati egiziani in tutto il mondo. Siamo il tuo ponte legale con l\'Egitto.'
            })}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            <span className="bg-[#c8a876] text-[#0b1a33] px-6 py-3 rounded-full font-semibold">
              {getTextByLanguage({
                ar: 'المحامي كريم الديب',
                en: 'Lawyer Karim El-Dib',
                fr: 'Avocat Karim El-Dib',
                it: 'Avvocato Karim El-Dib'
              })}
            </span>
            <span className="bg-white text-[#0b1a33] px-6 py-3 rounded-full font-semibold">
              {getTextByLanguage({
                ar: 'خدمات عالمية',
                en: 'Global Services',
                fr: 'Services Mondiaux',
                it: 'Servizi Globali'
              })}
            </span>
          </div>
        </div>

        {/* الخدمات المقدمة */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#c8a876] mb-12">
            {getTextByLanguage({
              ar: 'خدماتنا للمصريين بالخارج',
              en: 'Our Services for Egyptians Abroad',
              fr: 'Nos Services pour Égyptiens à l\'Étranger',
              it: 'I Nostri Servizi per Egiziani all\'Estero'
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

        {/* الدول التي نخدمها */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#c8a876] mb-4">
            {getTextByLanguage({
              ar: 'نخدم المصريين في جميع أنحاء العالم',
              en: 'We Serve Egyptians Worldwide',
              fr: 'Nous Servons les Égyptiens dans le Monde Entier',
              it: 'Serviamo gli Egiziani in Tutto il Mondo'
            })}
          </h2>
          <p className="text-center text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            {getTextByLanguage({
              ar: 'خدماتنا القانونية متاحة للمصريين المقيمين في جميع دول العالم',
              en: 'Our legal services are available to Egyptians residing in all countries worldwide',
              fr: 'Nos services juridiques sont disponibles pour les Égyptiens résidant dans tous les pays du monde',
              it: 'I nostri servizi legali sono disponibili per gli egiziani residenti in tutti i paesi del mondo'
            })}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((country, index) => (
              <div 
                key={index} 
                className="bg-[#1a2d4d] p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-[#c8a876]/20"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-[#c8a876]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className={`${country.icon} text-2xl text-[#c8a876]`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{country.name}</h3>
                  </div>
                </div>
                <div className="space-y-2">
                  {country.cities.map((city, cityIndex) => (
                    <div key={cityIndex} className="flex items-center gap-2 text-gray-300">
                      <i className="fas fa-check-circle text-[#c8a876] text-sm"></i>
                      <span className="text-sm">{city}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 bg-[#1a2d4d] p-8 rounded-lg">
            <i className="fas fa-globe text-5xl text-[#c8a876] mb-4"></i>
            <p className="text-gray-300 text-xl font-semibold">
              {getTextByLanguage({
                ar: '+ جميع البلدان الأخرى حول العالم',
                en: '+ All Other Countries Worldwide',
                fr: '+ Tous les Autres Pays du Monde',
                it: '+ Tutti gli Altri Paesi del Mondo'
              })}
            </p>
            <p className="text-gray-400 mt-2">
              {getTextByLanguage({
                ar: 'نقدم خدماتنا للمصريين في كل مكان',
                en: 'We serve Egyptians everywhere',
                fr: 'Nous servons les Égyptiens partout',
                it: 'Serviamo gli egiziani ovunque'
              })}
            </p>
          </div>
        </div>

        {/* خطوات العمل */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#c8a876] mb-12">
            {getTextByLanguage({
              ar: 'كيف نعمل معك؟',
              en: 'How Do We Work With You?',
              fr: 'Comment Travaillons-Nous avec Vous?',
              it: 'Come Lavoriamo con Te?'
            })}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
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
              ar: 'قصص نجاح عملائنا المصريين بالخارج',
              en: 'Success Stories of Our Egyptian Clients Abroad',
              fr: 'Histoires de Succès de Nos Clients Égyptiens à l\'Étranger',
              it: 'Storie di Successo dei Nostri Clienti Egiziani all\'Estero'
            })}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0b1a33] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">
                {getTextByLanguage({
                  ar: 'حل نزاع ميراث معقد',
                  en: 'Resolving Complex Inheritance Dispute',
                  fr: 'Résolution d\'un Litige d\'Héritage Complexe',
                  it: 'Risoluzione di Controversia Ereditaria Complessa'
                })}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {getTextByLanguage({
                  ar: 'ساعدنا طبيب مصري يعمل في ألمانيا في حل نزاع ميراث معقد واسترداد حقوقه كاملة في عقار بالقاهرة.',
                  en: 'We helped an Egyptian doctor working in Germany resolve a complex inheritance dispute and recover his full rights in a Cairo property.',
                  fr: 'Nous avons aidé un médecin égyptien travaillant en Allemagne à résoudre un litige d\'héritage complexe et à récupérer l\'intégralité de ses droits sur une propriété au Caire.',
                  it: 'Abbiamo aiutato un medico egiziano che lavora in Germania a risolvere una controversia ereditaria complessa e a recuperare i suoi pieni diritti su una proprietà al Cairo.'
                })}
              </p>
              <p className="text-[#c8a876] font-semibold">
                {getTextByLanguage({
                  ar: '- د. أحمد محمود، طبيب في برلين',
                  en: '- Dr. Ahmed Mahmoud, Doctor in Berlin',
                  fr: '- Dr. Ahmed Mahmoud, Médecin à Berlin',
                  it: '- Dr. Ahmed Mahmoud, Medico a Berlino'
                })}
              </p>
            </div>
            
            <div className="bg-[#0b1a33] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">
                {getTextByLanguage({
                  ar: 'تأسيس شركة استثمارية',
                  en: 'Establishing Investment Company',
                  fr: 'Création de Société d\'Investissement',
                  it: 'Costituzione di Società d\'Investimento'
                })}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {getTextByLanguage({
                  ar: 'نجحنا في تأسيس شركة استثمارية لمهندس مصري في الإمارات، ومتابعة جميع إجراءاتها القانونية.',
                  en: 'We successfully established an investment company for an Egyptian engineer in the UAE, following up on all its legal procedures.',
                  fr: 'Nous avons créé avec succès une société d\'investissement pour un ingénieur égyptien aux Émirats, en assurant le suivi de toutes ses procédures juridiques.',
                  it: 'Abbiamo costituito con successo una società d\'investimento per un ingegnere egiziano negli Emirati, seguendo tutte le sue procedure legali.'
                })}
              </p>
              <p className="text-[#c8a876] font-semibold">
                {getTextByLanguage({
                  ar: '- م. خالد عبدالله، مهندس في دبي',
                  en: '- Eng. Khaled Abdullah, Engineer in Dubai',
                  fr: '- Ing. Khaled Abdullah, Ingénieur à Dubaï',
                  it: '- Ing. Khaled Abdullah, Ingegnere a Dubai'
                })}
              </p>
            </div>
          </div>
        </div>

        {/* الأسئلة الشائعة */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#c8a876] mb-12">
            {getTextByLanguage({
              ar: 'الأسئلة الشائعة',
              en: 'Frequently Asked Questions',
              fr: 'Questions Fréquemment Posées',
              it: 'Domande Frequenti'
            })}
          </h2>
          <div className="space-y-6">
            {[
              {
                q: getTextByLanguage({
                  ar: 'هل يمكنني توكيل المحامي كريم الديب وأنا في الخارج؟',
                  en: 'Can I authorize Lawyer Karim El-Dib while I am abroad?',
                  fr: 'Puis-je autoriser l\'avocat Karim El-Dib alors que je suis à l\'étranger?',
                  it: 'Posso autorizzare l\'avvocato Karim El-Dib mentre sono all\'estero?'
                }),
                a: getTextByLanguage({
                  ar: 'نعم، يمكنك توكيلنا من خلال القنصليات المصرية أو عبر التوكيل الإلكتروني المعتمد.',
                  en: 'Yes, you can authorize us through Egyptian consulates or through certified electronic authorization.',
                  fr: 'Oui, vous pouvez nous autoriser via les consulats égyptiens ou par autorisation électronique certifiée.',
                  it: 'Sì, puoi autorizzarci tramite i consolati egiziani o tramite autorizzazione elettronica certificata.'
                })
              },
              {
                q: getTextByLanguage({
                  ar: 'ما تكلفة الخدمات القانونية للمصريين بالخارج؟',
                  en: 'What is the cost of legal services for Egyptians abroad?',
                  fr: 'Quel est le coût des services juridiques pour les Égyptiens à l\'étranger?',
                  it: 'Qual è il costo dei servizi legali per gli egiziani all\'estero?'
                }),
                a: getTextByLanguage({
                  ar: 'التكلفة تختلف حسب نوع الخدمة ومدى تعقيدها. نقدم استشارة مجانية أولى لتحديد التكلفة.',
                  en: 'The cost varies depending on the type of service and its complexity. We provide a free initial consultation to determine the cost.',
                  fr: 'Le coût varie selon le type de service et sa complexité. Nous offrons une consultation initiale gratuite pour déterminer le coût.',
                  it: 'Il costo varia a seconda del tipo di servizio e della sua complessità. Forniamo una consulenza iniziale gratuita per determinare il costo.'
                })
              },
              {
                q: getTextByLanguage({
                  ar: 'كم يستغرق إنجاز المعاملات القانونية؟',
                  en: 'How long does it take to complete legal procedures?',
                  fr: 'Combien de temps faut-il pour compléter les procédures juridiques?',
                  it: 'Quanto tempo ci vuole per completare le procedure legali?'
                }),
                a: getTextByLanguage({
                  ar: 'المدة تختلف حسب نوع المعاملة، لكننا نضمن أسرع إنجاز ممكن مع إرسال تقارير دورية.',
                  en: 'The duration varies depending on the type of transaction, but we guarantee the fastest possible completion with periodic reports.',
                  fr: 'La durée varie selon le type de transaction, mais nous garantissons la réalisation la plus rapide possible avec des rapports périodiques.',
                  it: 'La durata varia a seconda del tipo di transazione, ma garantiamo il completamento più rapido possibile con report periodici.'
                })
              }
            ].map((faq, index) => (
              <div key={index} className="bg-[#1a2d4d] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">{faq.q}</h3>
                <p className="text-gray-300">{faq.a}</p>
              </div>
            ))}
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
              ar: 'المحامي كريم الديب - محامي دولي في مصر جاهز لخدمتك أينما كنت في العالم. تواصل معنا الآن.',
              en: 'Lawyer Karim El-Dib - International lawyer in Egypt ready to serve you wherever you are in the world. Contact us now.',
              fr: 'Avocat Karim El-Dib - Avocat international en Égypte prêt à vous servir où que vous soyez dans le monde. Contactez-nous maintenant.',
              it: 'Avvocato Karim El-Dib - Avvocato internazionale in Egitto pronto a servirti ovunque tu sia nel mondo. Contattaci ora.'
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
              href="https://wa.me/201234567890" 
              className="bg-white text-[#0b1a33] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors duration-300"
            >
              {getTextByLanguage({
                ar: 'واتساب الآن',
                en: 'WhatsApp Now',
                fr: 'WhatsApp Maintenant',
                it: 'WhatsApp Ora'
              })}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EgyptiansAbroad;