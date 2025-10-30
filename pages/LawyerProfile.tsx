import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SchemaMarkup from '../components/SchemaMarkup';

const LawyerProfile: React.FC = () => {
  const { language, getTextByLanguage } = useLanguage();
  const isRTL = language === 'ar';

  useEffect(() => {
    const title = language === 'ar' 
      ? "المحامي كريم الديب | خبرة دولية في القانون المصري"
      : language === 'fr'
      ? "Avocat Karim El-Dib | Expertise Internationale en Droit Égyptien"
      : language === 'it'
      ? "Avvocato Karim El-Dib | Esperienza Internazionale in Diritto Egiziano"
      : "Karim El-Dib Lawyer | International Expertise in Egyptian Law";
    
    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      const description = language === 'ar'
        ? 'المحامي كريم الديب - خبرة واسعة في القانون المصري والدولي. محامي دولي في مصر متخصص في خدمة المصريين المغتربين والأجانب في مصر.'
        : language === 'fr'
        ? 'Avocat Karim El-Dib - Large expérience en droit égyptien et international. Avocat international en Égypte spécialisé dans les services aux expatriés égyptiens et étrangers en Égypte.'
        : language === 'it'
        ? 'Avvocato Karim El-Dib - Vasta esperienza in diritto egiziano e internazionale. Avvocato internazionale in Egitto specializzato nei servizi per espatriati egiziani e stranieri in Egitto.'
        : 'Karim El-Dib - International lawyer in Egypt with extensive expertise in Egyptian and international law. Specialized in serving Egyptian expats and foreigners in Egypt.';
      
      metaDescription.setAttribute('content', description);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      const keywords = language === 'ar'
        ? 'كريم الديب محامي, المحامي كريم الديب, محامي دولي في مصر, محامي أجانب في مصر, خدمات المصريين المغتربين'
        : language === 'fr'
        ? 'karim el-dib avocat, avocat international egypte, avocat pour étrangers egypte, services expatriés égyptiens'
        : language === 'it'
        ? 'karim el-dib avvocato, avvocato internazionale egitto, avvocato per stranieri egitto, servizi espatriati egiziani'
        : 'karim el-dib lawyer, international lawyer egypt, lawyer for foreigners egypt, egyptian expats services';
      
      metaKeywords.setAttribute('content', keywords);
    }
  }, [language]);

  return (
    <>
      <SchemaMarkup type="lawyer" />
      <div className="min-h-screen bg-[#0b1a33] text-gray-200 py-20" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-[#c8a876]">
            <img 
              src="https://i.postimg.cc/G3FMRMY4/3.png" 
              alt={getTextByLanguage({
                ar: "المحامي كريم الديب - محامي دولي في مصر متخصص في خدمة الأجانب والمصريين المغتربين",
                en: "Lawyer Karim El-Dib - International lawyer in Egypt specializing in serving foreigners and Egyptian expats",
                fr: "Avocat Karim El-Dib - Avocat international en Égypte spécialisé dans les services aux étrangers et expatriés égyptiens",
                it: "Avvocato Karim El-Dib - Avvocato internazionale in Egitto specializzato nei servizi per stranieri ed espatriati egiziani"
              })}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#c8a876]">
            {getTextByLanguage({
              ar: 'المحامي كريم الديب',
              en: 'Lawyer Karim El-Dib',
              fr: 'Avocat Karim El-Dib',
              it: 'Avvocato Karim El-Dib'
            })}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            {getTextByLanguage({
              ar: 'محامي دولي في مصر | خبير قانوني متخصص',
              en: 'International Lawyer in Egypt | Specialized Legal Expert',
              fr: 'Avocat International en Égypte | Expert Juridique Spécialisé',
              it: 'Avvocato Internazionale in Egitto | Esperto Legale Specializzato'
            })}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            <span className="bg-[#c8a876] text-[#0b1a33] px-4 py-2 rounded-full font-semibold">
              {getTextByLanguage({
                ar: 'محامي أجانب في مصر',
                en: 'Lawyer for Foreigners in Egypt',
                fr: 'Avocat pour Étrangers en Égypte',
                it: 'Avvocato per Stranieri in Egitto'
              })}
            </span>
            <span className="bg-[#c8a876] text-[#0b1a33] px-4 py-2 rounded-full font-semibold">
              {getTextByLanguage({
                ar: 'محامي المصريين بالخارج',
                en: 'Lawyer for Egyptians Abroad',
                fr: 'Avocat pour Égyptiens à l\'Étranger',
                it: 'Avvocato per Egiziani all\'Estero'
              })}
            </span>
          </div>
        </div>

        {/* المؤهلات والخبرات */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* المؤهلات العلمية */}
          <div className="bg-[#1a2d4d] rounded-lg p-8">
            <h2 className="text-3xl font-bold text-[#c8a876] mb-6">
              {getTextByLanguage({
                ar: 'المؤهلات العلمية',
                en: 'Academic Qualifications',
                fr: 'Qualifications Académiques',
                it: 'Qualifiche Accademiche'
              })}
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <i className="fas fa-graduation-cap text-[#c8a876] text-xl mt-1"></i>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {getTextByLanguage({
                      ar: 'ليسانس الحقوق',
                      en: 'Bachelor of Law',
                      fr: 'Licence en Droit',
                      it: 'Laurea in Giurisprudenza'
                    })}
                  </h3>
                  <p className="text-gray-300">
                    {getTextByLanguage({
                      ar: 'جامعة الإسكندرية - كلية الحقوق',
                      en: 'Alexandria University - Faculty of Law',
                      fr: 'Université d\'Alexandrie - Faculté de Droit',
                      it: 'Università di Alessandria - Facoltà di Giurisprudenza'
                    })}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <i className="fas fa-certificate text-[#c8a876] text-xl mt-1"></i>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {getTextByLanguage({
                      ar: 'دبلوم القانون الدولي',
                      en: 'International Law Diploma',
                      fr: 'Diplôme en Droit International',
                      it: 'Diploma in Diritto Internazionale'
                    })}
                  </h3>
                  <p className="text-gray-300">
                    {getTextByLanguage({
                      ar: 'معهد الدراسات القانونية الدولية',
                      en: 'Institute of International Legal Studies',
                      fr: 'Institut d\'Études Juridiques Internationales',
                      it: 'Istituto di Studi Legali Internazionali'
                    })}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <i className="fas fa-award text-[#c8a876] text-xl mt-1"></i>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {getTextByLanguage({
                      ar: 'عضوية نقابة المحامين',
                      en: 'Bar Association Membership',
                      fr: 'Membre du Barreau',
                      it: 'Iscrizione all\'Ordine degli Avvocati'
                    })}
                  </h3>
                  <p className="text-gray-300">
                    {getTextByLanguage({
                      ar: 'نقابة المحامين المصرية - الإسكندرية',
                      en: 'Egyptian Bar Association - Alexandria',
                      fr: 'Barreau Égyptien - Alexandrie',
                      it: 'Ordine degli Avvocati Egiziano - Alessandria'
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* الخبرات المهنية */}
          <div className="bg-[#1a2d4d] rounded-lg p-8">
            <h2 className="text-3xl font-bold text-[#c8a876] mb-6">
              {getTextByLanguage({
                ar: 'الخبرات المهنية',
                en: 'Professional Experience',
                fr: 'Expérience Professionnelle',
                it: 'Esperienza Professionale'
              })}
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <i className="fas fa-briefcase text-[#c8a876] text-xl mt-1"></i>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {getTextByLanguage({
                      ar: '+15 سنة خبرة قانونية',
                      en: '+15 Years Legal Experience',
                      fr: '+15 Ans d\'Expérience Juridique',
                      it: '+15 Anni di Esperienza Legale'
                    })}
                  </h3>
                  <p className="text-gray-300">
                    {getTextByLanguage({
                      ar: 'خبرة واسعة في القانون المصري والدولي',
                      en: 'Extensive experience in Egyptian and International Law',
                      fr: 'Vaste expérience en droit égyptien et international',
                      it: 'Vasta esperienza in diritto egiziano e internazionale'
                    })}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <i className="fas fa-globe text-[#c8a876] text-xl mt-1"></i>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {getTextByLanguage({
                      ar: 'خدمات قانونية دولية',
                      en: 'International Legal Services',
                      fr: 'Services Juridiques Internationaux',
                      it: 'Servizi Legali Internazionali'
                    })}
                  </h3>
                  <p className="text-gray-300">
                    {getTextByLanguage({
                      ar: 'متخصص في خدمة المصريين بالخارج والأجانب في مصر',
                      en: 'Specialized in serving Egyptians abroad and foreigners in Egypt',
                      fr: 'Spécialisé dans les services aux Égyptiens à l\'étranger et aux étrangers en Égypte',
                      it: 'Specializzato nei servizi per egiziani all\'estero e stranieri in Egitto'
                    })}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <i className="fas fa-handshake text-[#c8a876] text-xl mt-1"></i>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {getTextByLanguage({
                      ar: '+500 قضية ناجحة',
                      en: '+500 Successful Cases',
                      fr: '+500 Affaires Réussies',
                      it: '+500 Cause Vincenti'
                    })}
                  </h3>
                  <p className="text-gray-300">
                    {getTextByLanguage({
                      ar: 'سجل حافل من النجاحات في مختلف المجالات القانونية',
                      en: 'Proven track record of success across various legal fields',
                      fr: 'Bilan éprouvé de succès dans divers domaines juridiques',
                      it: 'Comprovata esperienza di successo in vari settori legali'
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* التخصصات القانونية */}
        <div className="bg-[#1a2d4d] rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-[#c8a876] mb-8 text-center">
            {getTextByLanguage({
              ar: 'التخصصات القانونية',
              en: 'Legal Specializations',
              fr: 'Spécialisations Juridiques',
              it: 'Specializzazioni Legali'
            })}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'fas fa-heart',
                title: getTextByLanguage({
                  ar: 'قانون الأسرة',
                  en: 'Family Law',
                  fr: 'Droit de la Famille',
                  it: 'Diritto di Famiglia'
                }),
                desc: getTextByLanguage({
                  ar: 'الزواج، الطلاق، النفقة، حضانة الأطفال',
                  en: 'Marriage, Divorce, Alimony, Child Custody',
                  fr: 'Mariage, Divorce, Pension, Garde d\'Enfants',
                  it: 'Matrimonio, Divorzio, Alimenti, Custodia dei Figli'
                })
              },
              {
                icon: 'fas fa-building',
                title: getTextByLanguage({
                  ar: 'القانون التجاري',
                  en: 'Commercial Law',
                  fr: 'Droit Commercial',
                  it: 'Diritto Commerciale'
                }),
                desc: getTextByLanguage({
                  ar: 'تأسيس الشركات، العقود التجارية',
                  en: 'Company Formation, Commercial Contracts',
                  fr: 'Création de Sociétés, Contrats Commerciaux',
                  it: 'Costituzione Società, Contratti Commerciali'
                })
              },
              {
                icon: 'fas fa-home',
                title: getTextByLanguage({
                  ar: 'قانون العقارات',
                  en: 'Real Estate Law',
                  fr: 'Droit Immobilier',
                  it: 'Diritto Immobiliare'
                }),
                desc: getTextByLanguage({
                  ar: 'بيع وشراء العقارات، التطوير العقاري',
                  en: 'Property Sales, Real Estate Development',
                  fr: 'Vente de Propriétés, Développement Immobilier',
                  it: 'Vendita Proprietà, Sviluppo Immobiliare'
                })
              },
              {
                icon: 'fas fa-passport',
                title: getTextByLanguage({
                  ar: 'قانون الهجرة',
                  en: 'Immigration Law',
                  fr: 'Droit de l\'Immigration',
                  it: 'Diritto dell\'Immigrazione'
                }),
                desc: getTextByLanguage({
                  ar: 'الإقامة، الجنسية، تصاريح العمل',
                  en: 'Residency, Citizenship, Work Permits',
                  fr: 'Résidence, Citoyenneté, Permis de Travail',
                  it: 'Residenza, Cittadinanza, Permessi di Lavoro'
                })
              },
              {
                icon: 'fas fa-chart-line',
                title: getTextByLanguage({
                  ar: 'قانون الاستثمار',
                  en: 'Investment Law',
                  fr: 'Droit de l\'Investissement',
                  it: 'Diritto degli Investimenti'
                }),
                desc: getTextByLanguage({
                  ar: 'الاستثمار الأجنبي، قانون المال والأعمال',
                  en: 'Foreign Investment, Business Law',
                  fr: 'Investissement Étranger, Droit des Affaires',
                  it: 'Investimenti Esteri, Diritto Commerciale'
                })
              },
              {
                icon: 'fas fa-balance-scale',
                title: getTextByLanguage({
                  ar: 'التحكيم والوساطة',
                  en: 'Arbitration & Mediation',
                  fr: 'Arbitrage et Médiation',
                  it: 'Arbitrato e Mediazione'
                }),
                desc: getTextByLanguage({
                  ar: 'حل النزاعات البديل، التحكيم الدولي',
                  en: 'Alternative Dispute Resolution, International Arbitration',
                  fr: 'Résolution Alternative des Conflits, Arbitrage International',
                  it: 'Risoluzione Alternativa delle Controversie, Arbitrato Internazionale'
                })
              }
            ].map((item, index) => (
              <div key={index} className="bg-[#0b1a33] p-6 rounded-lg text-center">
                <i className={`${item.icon} text-3xl text-[#c8a876] mb-4`}></i>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* الجوائز والإنجازات */}
        <div className="bg-[#1a2d4d] rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-[#c8a876] mb-8 text-center">
            {getTextByLanguage({
              ar: 'الجوائز والإنجازات',
              en: 'Awards & Achievements',
              fr: 'Prix et Réalisations',
              it: 'Premi e Risultati'
            })}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <i className="fas fa-trophy text-5xl text-[#c8a876] mb-4"></i>
              <h3 className="text-2xl font-semibold text-white mb-3">
                {getTextByLanguage({
                  ar: 'أفضل محامي للمصريين بالخارج',
                  en: 'Best Lawyer for Egyptians Abroad',
                  fr: 'Meilleur Avocat pour les Égyptiens à l\'Étranger',
                  it: 'Miglior Avvocato per Egiziani all\'Estero'
                })}
              </h3>
              <p className="text-gray-300">
                {getTextByLanguage({
                  ar: 'جائزة الاتحاد العربي للمحامين 2023',
                  en: 'Arab Lawyers Union Award 2023',
                  fr: 'Prix de l\'Union des Avocats Arabes 2023',
                  it: 'Premio Unione Avvocati Arabi 2023'
                })}
              </p>
            </div>
            <div className="text-center">
              <i className="fas fa-medal text-5xl text-[#c8a876] mb-4"></i>
              <h3 className="text-2xl font-semibold text-white mb-3">
                {getTextByLanguage({
                  ar: 'التميز في الخدمات القانونية الدولية',
                  en: 'Excellence in International Legal Services',
                  fr: 'Excellence en Services Juridiques Internationaux',
                  it: 'Eccellenza nei Servizi Legali Internazionali'
                })}
              </h3>
              <p className="text-gray-300">
                {getTextByLanguage({
                  ar: 'نقابة المحامين المصرية 2022',
                  en: 'Egyptian Bar Association 2022',
                  fr: 'Barreau Égyptien 2022',
                  it: 'Ordine degli Avvocati Egiziano 2022'
                })}
              </p>
            </div>
          </div>
        </div>

        {/* شهادات العملاء */}
        <div className="bg-[#1a2d4d] rounded-lg p-8">
          <h2 className="text-3xl font-bold text-[#c8a876] mb-8 text-center">
            {getTextByLanguage({
              ar: 'شهادات العملاء',
              en: 'Client Testimonials',
              fr: 'Témoignages de Clients',
              it: 'Testimonianze dei Clienti'
            })}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0b1a33] p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-[#c8a876] text-xl">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                {getTextByLanguage({
                  ar: '"المحامي كريم الديب ساعدني كثيراً في حل مشكلتي القانونية وأنا مقيم في الخارج. خدمة احترافية وسرعة في الإنجاز."',
                  en: '"Lawyer Karim El-Dib helped me greatly in solving my legal problem while I am residing abroad. Professional service and quick completion."',
                  fr: '"L\'avocat Karim El-Dib m\'a beaucoup aidé à résoudre mon problème juridique alors que je réside à l\'étranger. Service professionnel et réalisation rapide."',
                  it: '"L\'avvocato Karim El-Dib mi ha aiutato molto a risolvere il mio problema legale mentre risiedevo all\'estero. Servizio professionale e completamento rapido."'
                })}
              </p>
              <p className="text-[#c8a876] font-semibold">
                {getTextByLanguage({
                  ar: '- أحمد محمد، مقيم في ألمانيا',
                  en: '- Ahmed Mohamed, Resident in Germany',
                  fr: '- Ahmed Mohamed, Résident en Allemagne',
                  it: '- Ahmed Mohamed, Residente in Germania'
                })}
              </p>
            </div>
            
            <div className="bg-[#0b1a33] p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-[#c8a876] text-xl">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                {getTextByLanguage({
                  ar: '"خبرة عالية في التعامل مع الأجانب. ساعدني في تأسيس شركتي في مصر بطريقة قانونية سليمة."',
                  en: '"High expertise in dealing with foreigners. He helped me establish my company in Egypt in a proper legal manner."',
                  fr: '"Grande expertise dans le traitement avec les étrangers. Il m\'a aidé à établir ma société en Égypte de manière légale appropriée."',
                  it: '"Alta competenza nel trattare con gli stranieri. Mi ha aiutato a stabilire la mia società in Egitto in modo legale appropriato."'
                })}
              </p>
              <p className="text-[#c8a876] font-semibold">
                {getTextByLanguage({
                  ar: '- جون سميث، مستثمر أمريكي',
                  en: '- John Smith, American Investor',
                  fr: '- John Smith, Investisseur Américain',
                  it: '- John Smith, Investitore Americano'
                })}
              </p>
            </div>
          </div>
        </div>

      </div>
      </div>
    </>
  );
};

export default LawyerProfile;