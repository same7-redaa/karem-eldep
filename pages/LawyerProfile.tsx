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

        {/* النبذة التعريفية المطولة */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-[#1a2d4d] to-[#0f1f38] rounded-2xl p-8 md:p-12 shadow-2xl border border-[#c8a876]/20">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#c8a876] mb-8 text-center">
                {getTextByLanguage({
                  ar: 'من هو المحامي كريم الديب؟ - محامي الأجانب في شرم الشيخ والإسكندرية',
                  en: 'Who is Lawyer Karim El-Dib? - Lawyer for Foreigners in Sharm El Sheikh and Alexandria',
                  fr: 'Qui est l\'avocat Karim El-Dib? - Avocat pour étrangers à Charm el-Cheikh et Alexandrie',
                  it: 'Chi è l\'avvocato Karim El-Dib? - Avvocato per stranieri a Sharm El Sheikh e Alessandria'
                })}
              </h2>

              {/* صورة المحامي كريم الديب - محامي معتمد من القنصلية الفرنسية */}
              <div className="flex justify-center mb-10">
                <div className="relative">
                  <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-[#c8a876] shadow-2xl">
                    <img 
                      src="/images/karim-eldib-lawyer.jpg" 
                      alt={getTextByLanguage({
                        ar: "المحامي كريم الديب - محامي معتمد من القنصلية الفرنسية",
                        en: "Lawyer Karim El-Dib - Certified by the French Consulate",
                        fr: "Avocat Karim El-Dib - Agréé par le Consulat de France",
                        it: "Avvocato Karim El-Dib - Certificato dal Consolato Francese"
                      })}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-[#c8a876] font-bold text-lg md:text-xl">
                      {getTextByLanguage({
                        ar: '🏛️ محامي معتمد من القنصلية الفرنسية',
                        en: '🏛️ Certified by the French Consulate',
                        fr: '🏛️ Agréé par le Consulat de France',
                        it: '🏛️ Certificato dal Consolato Francese'
                      })}
                    </p>
                  </div>
                </div>
              </div>

              {/* المقدمة */}
              <div className="mb-10">
                <p className="text-lg md:text-xl leading-relaxed text-gray-200 mb-6">
                  {getTextByLanguage({
                    ar: 'يُعتبر المحامي كريم الديب واحدًا من أبرز المتخصصين في قضايا وإجراءات الأجانب في شرم الشيخ وقضايا الأجانب في الإسكندرية، حيث يتمتع بخبرة طويلة في تقديم الخدمات القانونية للمقيمين والزوار في المدينتين. لقد بنى كريم الديب سمعته المتميزة بفضل قدرته الفائقة على تبسيط الإجراءات الحكومية المعقّدة، وإنهاء كافة المعاملات الخاصة بالأجانب بسرعة ودقة ومهنية عالية، مما جعل اسمه بارزًا بين محامي الأجانب في مصر.',
                    en: 'Lawyer Karim El-Dib is considered one of the leading specialists in foreigner cases and procedures in Sharm El Sheikh and Alexandria. He has extensive experience in providing legal services to residents and visitors in both cities. Karim El-Dib has built his distinguished reputation thanks to his exceptional ability to simplify complex government procedures and complete all foreigner-related transactions quickly, accurately, and with high professionalism, making his name prominent among lawyers for foreigners in Egypt.',
                    fr: 'L\'avocat Karim El-Dib est considéré comme l\'un des principaux spécialistes des affaires et procédures concernant les étrangers à Charm el-Cheikh et Alexandrie. Il possède une vaste expérience dans la prestation de services juridiques aux résidents et visiteurs des deux villes. Karim El-Dib a construit sa réputation distinguée grâce à sa capacité exceptionnelle à simplifier les procédures gouvernementales complexes et à compléter toutes les transactions liées aux étrangers rapidement, avec précision et professionnalisme élevé.',
                    it: 'L\'avvocato Karim El-Dib è considerato uno dei principali specialisti in casi e procedure per stranieri a Sharm El Sheikh e Alessandria. Ha una vasta esperienza nella fornitura di servizi legali a residenti e visitatori in entrambe le città. Karim El-Dib ha costruito la sua reputazione distinta grazie alla sua capacità eccezionale di semplificare procedure governative complesse e completare tutte le transazioni relative agli stranieri rapidamente, con precisione e alto professionalismo.'
                  })}
                </p>
              </div>

              {/* خبرة قانونية متخصصة */}
              <div className="mb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-[#c8a876] mb-6 flex items-center gap-3">
                  <i className="fas fa-balance-scale"></i>
                  {getTextByLanguage({
                    ar: 'خبرته القانونية المتخصصة في شؤون الأجانب',
                    en: 'His Specialized Legal Expertise in Foreign Affairs',
                    fr: 'Son expertise juridique spécialisée en affaires étrangères',
                    it: 'La sua competenza legale specializzata in affari esteri'
                  })}
                </h3>
                <p className="text-lg leading-relaxed text-gray-200 mb-6">
                  {getTextByLanguage({
                    ar: 'بصفته محامي أجانب متميز في شرم الشيخ والإسكندرية، يُقدم المحامي كريم الديب مجموعة واسعة من الخدمات القانونية التي يحتاجها الأجانب في مصر، وتشمل:',
                    en: 'As a distinguished lawyer for foreigners in Sharm El Sheikh and Alexandria, Lawyer Karim El-Dib provides a wide range of legal services needed by foreigners in Egypt, including:',
                    fr: 'En tant qu\'avocat distingué pour étrangers à Charm el-Cheikh et Alexandrie, Maître Karim El-Dib fournit une large gamme de services juridiques nécessaires aux étrangers en Égypte, notamment:',
                    it: 'Come avvocato distinto per stranieri a Sharm El Sheikh e Alessandria, l\'Avvocato Karim El-Dib fornisce un\'ampia gamma di servizi legali necessari agli stranieri in Egitto, tra cui:'
                  })}
                </p>
                <ul className="grid md:grid-cols-2 gap-4 text-gray-200">
                  <li className="flex items-start gap-3 bg-[#0b1a33]/50 p-4 rounded-lg border border-[#c8a876]/10 hover:border-[#c8a876]/30 transition-all">
                    <i className="fas fa-check-circle text-[#c8a876] text-xl mt-1 flex-shrink-0"></i>
                    <span className="text-lg">{getTextByLanguage({ar: 'إجراءات الإقامة والتجديد', en: 'Residence procedures and renewal', fr: 'Procédures de résidence et renouvellement', it: 'Procedure di residenza e rinnovo'})}</span>
                  </li>
                  <li className="flex items-start gap-3 bg-[#0b1a33]/50 p-4 rounded-lg border border-[#c8a876]/10 hover:border-[#c8a876]/30 transition-all">
                    <i className="fas fa-check-circle text-[#c8a876] text-xl mt-1 flex-shrink-0"></i>
                    <span className="text-lg">{getTextByLanguage({ar: 'تأسيس الشركات للأجانب', en: 'Company formation for foreigners', fr: 'Formation de sociétés pour étrangers', it: 'Costituzione società per stranieri'})}</span>
                  </li>
                  <li className="flex items-start gap-3 bg-[#0b1a33]/50 p-4 rounded-lg border border-[#c8a876]/10 hover:border-[#c8a876]/30 transition-all">
                    <i className="fas fa-check-circle text-[#c8a876] text-xl mt-1 flex-shrink-0"></i>
                    <span className="text-lg">{getTextByLanguage({ar: 'عقود شراء وبيع العقارات', en: 'Real estate purchase and sale contracts', fr: 'Contrats d\'achat et vente immobilière', it: 'Contratti di compravendita immobiliare'})}</span>
                  </li>
                  <li className="flex items-start gap-3 bg-[#0b1a33]/50 p-4 rounded-lg border border-[#c8a876]/10 hover:border-[#c8a876]/30 transition-all">
                    <i className="fas fa-check-circle text-[#c8a876] text-xl mt-1 flex-shrink-0"></i>
                    <span className="text-lg">{getTextByLanguage({ar: 'تسجيل الزواج المختلط والطلاق للأجانب', en: 'Mixed marriage registration and divorce for foreigners', fr: 'Enregistrement de mariage mixte et divorce pour étrangers', it: 'Registrazione matrimonio misto e divorzio per stranieri'})}</span>
                  </li>
                  <li className="flex items-start gap-3 bg-[#0b1a33]/50 p-4 rounded-lg border border-[#c8a876]/10 hover:border-[#c8a876]/30 transition-all md:col-span-2">
                    <i className="fas fa-check-circle text-[#c8a876] text-xl mt-1 flex-shrink-0"></i>
                    <span className="text-lg">{getTextByLanguage({ar: 'الاستشارات القانونية المتعلقة بالاستثمار والعمل', en: 'Legal consultations related to investment and work', fr: 'Consultations juridiques liées à l\'investissement et au travail', it: 'Consulenze legali relative a investimenti e lavoro'})}</span>
                  </li>
                </ul>
                <p className="text-lg leading-relaxed text-gray-200 mt-6 bg-[#c8a876]/10 p-4 rounded-lg border-r-4 border-[#c8a876]">
                  {getTextByLanguage({
                    ar: 'ويجعل تخصصه الدقيق في Foreigners\' Legal Affairs خيارًا قويًا لكل من يبحث عن: Foreign Lawyer in Sharm El Sheikh، أو Lawyer for Foreigners in Alexandria.',
                    en: 'His precise specialization in Foreigners\' Legal Affairs makes him a strong choice for anyone looking for: Foreign Lawyer in Sharm El Sheikh, or Lawyer for Foreigners in Alexandria.',
                    fr: 'Sa spécialisation précise dans les affaires juridiques des étrangers en fait un choix solide pour tous ceux qui recherchent: Avocat étranger à Charm el-Cheikh, ou Avocat pour étrangers à Alexandrie.',
                    it: 'La sua precisa specializzazione negli affari legali degli stranieri lo rende una scelta forte per chiunque cerchi: Avvocato straniero a Sharm El Sheikh, o Avvocato per stranieri ad Alessandria.'
                  })}
                </p>
              </div>

              {/* خدمات قانونية عملية */}
              <div className="mb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-[#c8a876] mb-6 flex items-center gap-3">
                  <i className="fas fa-rocket"></i>
                  {getTextByLanguage({
                    ar: 'خدماته القانونية العملية والسريعة',
                    en: 'His Practical and Fast Legal Services',
                    fr: 'Ses services juridiques pratiques et rapides',
                    it: 'I suoi servizi legali pratici e veloci'
                  })}
                </h3>
                <p className="text-lg leading-relaxed text-gray-200 mb-6">
                  {getTextByLanguage({
                    ar: 'يتميز المحامي كريم الديب بفهمه الدقيق للقوانين المنظمة لوضع الأجانب داخل مصر، وقدرته الفائقة على إنهاء الإجراءات الحكومية بكفاءة عالية داخل الجهات التالية:',
                    en: 'Lawyer Karim El-Dib is distinguished by his precise understanding of the laws regulating the status of foreigners in Egypt, and his exceptional ability to complete government procedures with high efficiency within the following entities:',
                    fr: 'Maître Karim El-Dib se distingue par sa compréhension précise des lois régissant le statut des étrangers en Égypte, et sa capacité exceptionnelle à accomplir les procédures gouvernementales avec une grande efficacité auprès des entités suivantes:',
                    it: 'L\'Avvocato Karim El-Dib si distingue per la sua precisa comprensione delle leggi che regolano lo status degli stranieri in Egitto, e la sua capacità eccezionale di completare le procedure governative con alta efficienza presso le seguenti entità:'
                  })}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-[#0b1a33]/50 p-5 rounded-lg border border-[#c8a876]/20 hover:border-[#c8a876]/40 transition-all hover:shadow-lg hover:shadow-[#c8a876]/10">
                    <i className="fas fa-passport text-[#c8a876] text-2xl mb-3"></i>
                    <h4 className="text-xl font-semibold text-white mb-2">{getTextByLanguage({ar: 'مصلحة الجوازات والهجرة', en: 'Passport and Immigration Authority', fr: 'Autorité des passeports et de l\'immigration', it: 'Autorità passaporti e immigrazione'})}</h4>
                  </div>
                  <div className="bg-[#0b1a33]/50 p-5 rounded-lg border border-[#c8a876]/20 hover:border-[#c8a876]/40 transition-all hover:shadow-lg hover:shadow-[#c8a876]/10">
                    <i className="fas fa-building text-[#c8a876] text-2xl mb-3"></i>
                    <h4 className="text-xl font-semibold text-white mb-2">{getTextByLanguage({ar: 'الشهر العقاري', en: 'Real Estate Registry', fr: 'Registre immobilier', it: 'Registro immobiliare'})}</h4>
                  </div>
                  <div className="bg-[#0b1a33]/50 p-5 rounded-lg border border-[#c8a876]/20 hover:border-[#c8a876]/40 transition-all hover:shadow-lg hover:shadow-[#c8a876]/10">
                    <i className="fas fa-chart-line text-[#c8a876] text-2xl mb-3"></i>
                    <h4 className="text-xl font-semibold text-white mb-2">{getTextByLanguage({ar: 'هيئة الاستثمار', en: 'Investment Authority', fr: 'Autorité d\'investissement', it: 'Autorità per gli investimenti'})}</h4>
                  </div>
                  <div className="bg-[#0b1a33]/50 p-5 rounded-lg border border-[#c8a876]/20 hover:border-[#c8a876]/40 transition-all hover:shadow-lg hover:shadow-[#c8a876]/10">
                    <i className="fas fa-gavel text-[#c8a876] text-2xl mb-3"></i>
                    <h4 className="text-xl font-semibold text-white mb-2">{getTextByLanguage({ar: 'الجهات القضائية والمحاكم', en: 'Judicial Bodies and Courts', fr: 'Organes judiciaires et tribunaux', it: 'Organi giudiziari e tribunali'})}</h4>
                  </div>
                </div>
                <p className="text-lg leading-relaxed text-gray-200 mt-6 text-center font-semibold">
                  {getTextByLanguage({
                    ar: 'ويحرص دائمًا على تقديم خدمات تعتمد على السرعة، والدقة، والاحترافية، مما يجعله من الأسماء الرائدة في مجال محامي الأجانب في شرم الشيخ ومحامي الأجانب في الإسكندرية.',
                    en: 'He always strives to provide services based on speed, accuracy, and professionalism, making him one of the leading names in the field of lawyers for foreigners in Sharm El Sheikh and lawyers for foreigners in Alexandria.',
                    fr: 'Il s\'efforce toujours de fournir des services basés sur la rapidité, la précision et le professionnalisme, ce qui fait de lui l\'un des noms de premier plan dans le domaine des avocats pour étrangers à Charm el-Cheikh et des avocats pour étrangers à Alexandrie.',
                    it: 'Si impegna sempre a fornire servizi basati su velocità, precisione e professionalità, rendendolo uno dei nomi leader nel campo degli avvocati per stranieri a Sharm El Sheikh e degli avvocati per stranieri ad Alessandria.'
                  })}
                </p>
              </div>

              {/* استشارات بخمس لغات */}
              <div className="mb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-[#c8a876] mb-6 flex items-center gap-3">
                  <i className="fas fa-language"></i>
                  {getTextByLanguage({
                    ar: 'استشاراته القانونية بخمس لغات',
                    en: 'His Legal Consultations in Five Languages',
                    fr: 'Ses consultations juridiques en cinq langues',
                    it: 'Le sue consulenze legali in cinque lingue'
                  })}
                </h3>
                <p className="text-lg leading-relaxed text-gray-200 mb-6">
                  {getTextByLanguage({
                    ar: 'لتسهيل التواصل مع أكبر عدد من الجاليات الأجنبية، يُقدم المحامي كريم الديب خدماته القانونية واستشاراته بخمس لغات، وهي:',
                    en: 'To facilitate communication with the largest number of foreign communities, Lawyer Karim El-Dib provides his legal services and consultations in five languages:',
                    fr: 'Pour faciliter la communication avec le plus grand nombre de communautés étrangères, Maître Karim El-Dib fournit ses services juridiques et ses consultations en cinq langues:',
                    it: 'Per facilitare la comunicazione con il maggior numero di comunità straniere, l\'Avvocato Karim El-Dib fornisce i suoi servizi legali e consulenze in cinque lingue:'
                  })}
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-[#c8a876] to-[#d4a15c] text-[#0b1a33] px-6 py-3 rounded-full font-bold text-lg shadow-lg flex items-center gap-2">
                    <span>🇪🇬</span> {getTextByLanguage({ar: 'العربية', en: 'Arabic', fr: 'Arabe', it: 'Arabo'})}
                  </div>
                  <div className="bg-gradient-to-br from-[#c8a876] to-[#d4a15c] text-[#0b1a33] px-6 py-3 rounded-full font-bold text-lg shadow-lg flex items-center gap-2">
                    <span>🇬🇧</span> {getTextByLanguage({ar: 'الإنجليزية', en: 'English', fr: 'Anglais', it: 'Inglese'})}
                  </div>
                  <div className="bg-gradient-to-br from-[#c8a876] to-[#d4a15c] text-[#0b1a33] px-6 py-3 rounded-full font-bold text-lg shadow-lg flex items-center gap-2">
                    <span>🇫🇷</span> {getTextByLanguage({ar: 'الفرنسية', en: 'French', fr: 'Français', it: 'Francese'})}
                  </div>
                  <div className="bg-gradient-to-br from-[#c8a876] to-[#d4a15c] text-[#0b1a33] px-6 py-3 rounded-full font-bold text-lg shadow-lg flex items-center gap-2">
                    <span>🇩🇪</span> {getTextByLanguage({ar: 'الألمانية', en: 'German', fr: 'Allemand', it: 'Tedesco'})}
                  </div>
                  <div className="bg-gradient-to-br from-[#c8a876] to-[#d4a15c] text-[#0b1a33] px-6 py-3 rounded-full font-bold text-lg shadow-lg flex items-center gap-2">
                    <span>🇮🇹</span> {getTextByLanguage({ar: 'الإيطالية', en: 'Italian', fr: 'Italien', it: 'Italiano'})}
                  </div>
                </div>
                <p className="text-lg leading-relaxed text-gray-200 bg-[#c8a876]/10 p-4 rounded-lg border-l-4 border-[#c8a876]">
                  {getTextByLanguage({
                    ar: 'هذا التنوع اللغوي يمنحه قدرة قوية على التواصل مع عملاء من مختلف الدول، ويجعله اختيارًا مثاليًا لكل من يبحث عن Multilingual Foreign Lawyer in Egypt أو Foreign Legal Consultant in Sharm El Sheikh & Alexandria.',
                    en: 'This linguistic diversity gives him a strong ability to communicate with clients from different countries, making him an ideal choice for anyone looking for a Multilingual Foreign Lawyer in Egypt or Foreign Legal Consultant in Sharm El Sheikh & Alexandria.',
                    fr: 'Cette diversité linguistique lui donne une forte capacité à communiquer avec des clients de différents pays, ce qui en fait un choix idéal pour tous ceux qui recherchent un avocat étranger multilingue en Égypte ou un consultant juridique étranger à Charm el-Cheikh et Alexandrie.',
                    it: 'Questa diversità linguistica gli conferisce una forte capacità di comunicare con clienti di diversi paesi, rendendolo una scelta ideale per chiunque cerchi un avvocato straniero multilingue in Egitto o un consulente legale straniero a Sharm El Sheikh e Alessandria.'
                  })}
                </p>
              </div>

              {/* لماذا يختار العملاء */}
              <div className="bg-gradient-to-br from-[#c8a876]/20 to-[#d4a15c]/10 rounded-xl p-8 border-2 border-[#c8a876]/30">
                <h3 className="text-2xl md:text-3xl font-bold text-[#c8a876] mb-6 text-center flex items-center justify-center gap-3">
                  <i className="fas fa-star"></i>
                  {getTextByLanguage({
                    ar: 'لماذا يختار العملاء المحامي كريم الديب؟',
                    en: 'Why Do Clients Choose Lawyer Karim El-Dib?',
                    fr: 'Pourquoi les clients choisissent-ils l\'avocat Karim El-Dib?',
                    it: 'Perché i clienti scelgono l\'avvocato Karim El-Dib?'
                  })}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <i className="fas fa-check-double text-[#c8a876] text-xl mt-1 flex-shrink-0"></i>
                    <span className="text-lg text-gray-200">{getTextByLanguage({ar: 'خبرة متخصصة في شؤون الأجانب', en: 'Specialized expertise in foreign affairs', fr: 'Expertise spécialisée en affaires étrangères', it: 'Competenza specializzata in affari esteri'})}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="fas fa-check-double text-[#c8a876] text-xl mt-1 flex-shrink-0"></i>
                    <span className="text-lg text-gray-200">{getTextByLanguage({ar: 'إنهاء الإجراءات الحكومية دون تعقيد', en: 'Completing government procedures without complications', fr: 'Accomplissement des procédures gouvernementales sans complications', it: 'Completamento procedure governative senza complicazioni'})}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="fas fa-check-double text-[#c8a876] text-xl mt-1 flex-shrink-0"></i>
                    <span className="text-lg text-gray-200">{getTextByLanguage({ar: 'إدارة كاملة لملفات الإقامة والشركات والعقارات', en: 'Complete management of residence, company and property files', fr: 'Gestion complète des dossiers de résidence, sociétés et propriétés', it: 'Gestione completa di residenza, società e proprietà'})}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="fas fa-check-double text-[#c8a876] text-xl mt-1 flex-shrink-0"></i>
                    <span className="text-lg text-gray-200">{getTextByLanguage({ar: 'متابعة دقيقة لكل خطوة قانونية', en: 'Precise follow-up of every legal step', fr: 'Suivi précis de chaque étape juridique', it: 'Monitoraggio preciso di ogni fase legale'})}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="fas fa-check-double text-[#c8a876] text-xl mt-1 flex-shrink-0"></i>
                    <span className="text-lg text-gray-200">{getTextByLanguage({ar: 'احترافية عالية في التواصل وتوضيح التفاصيل للعميل', en: 'High professionalism in communication and clarifying details to clients', fr: 'Haut professionnalisme en communication et clarification des détails aux clients', it: 'Alto professionalismo nella comunicazione e chiarimento dettagli ai clienti'})}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="fas fa-check-double text-[#c8a876] text-xl mt-1 flex-shrink-0"></i>
                    <span className="text-lg text-gray-200">{getTextByLanguage({ar: 'تغطية جغرافية تشمل شرم الشيخ + الإسكندرية', en: 'Geographic coverage including Sharm El Sheikh + Alexandria', fr: 'Couverture géographique incluant Charm el-Cheikh + Alexandrie', it: 'Copertura geografica che include Sharm El Sheikh + Alessandria'})}</span>
                  </div>
                  <div className="flex items-start gap-3 md:col-span-2">
                    <i className="fas fa-check-double text-[#c8a876] text-xl mt-1 flex-shrink-0"></i>
                    <span className="text-lg text-gray-200">{getTextByLanguage({ar: 'دعم لغوي قوي بخمس لغات يخدم مختلف الجاليات الأجنبية', en: 'Strong linguistic support in five languages serving various foreign communities', fr: 'Support linguistique solide en cinq langues au service de diverses communautés étrangères', it: 'Forte supporto linguistico in cinque lingue al servizio di varie comunità straniere'})}</span>
                  </div>
                </div>
              </div>
            </div>
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