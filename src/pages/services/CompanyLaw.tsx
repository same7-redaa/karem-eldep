import React, { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const CompanyLaw: React.FC = () => {
  const { language, getTextByLanguage } = useLanguage();
  const isRTL = language === 'ar';

  useEffect(() => {
    const title = language === 'ar'
      ? "محامي قانون الشركات | المحامي كريم الديب"
      : language === 'fr'
      ? "Avocat Droit des Sociétés | Karim El-Dib"
      : language === 'it'
      ? "Avvocato Diritto Societario | Karim El-Dib"
      : "Company Law Lawyer | Lawyer Karim El-Dib";
    
    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'محامي قانون الشركات - المحامي كريم الديب خبير في قانون الشركات وتأسيس الشركات والحوكمة المؤسسية. خدمات قانونية شاملة للشركات المحلية والدولية. Company law lawyer Egypt.');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'محامي قانون الشركات, تأسيس شركات مصر, حوكمة الشركات, محامي شركات, قانون الاستثمار, Company law Egypt, Corporate lawyer, كريم الديب محامي, المحامي كريم الديب');
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0b1a33] text-gray-200" dir={isRTL ? 'rtl' : 'ltr'}>
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white overflow-hidden bg-[#0b1a33]">
        <img
          src="/images/services/company-law.webp"
          alt={isRTL ? "قانون الشركات - مكتب كريم الديب للمحاماة" : "Corporate Law - Karim El-Dib Law Firm"}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[#0b1a33] bg-opacity-70 z-[1]"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0b1a33] to-transparent z-[2]"></div>
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
            {getTextByLanguage({
              ar: 'محامي قانون الشركات',
              en: 'Corporate Law Lawyer',
              fr: 'Avocat Droit des Sociétés',
              it: 'Avvocato Diritto Societario'
            })}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-6 font-medium text-[#d4a15c]">
            {getTextByLanguage({
              ar: 'المحامي كريم الديب - خبير في قانون الشركات وتأسيس الشركات والحوكمة المؤسسية. نقدم استشارات قانونية متقدمة للشركات المحلية والدولية في مصر.',
              en: 'Lawyer Karim El-Dib - Expert in corporate law, company formation, and corporate governance. We provide advanced legal consultations for local and international companies in Egypt.',
              fr: 'Avocat Karim El-Dib - Expert en droit des sociétés. Nous fournissons des consultations juridiques avancées pour les entreprises locales et internationales.',
              it: 'Avvocato Karim El-Dib - Esperto in diritto societario. Forniamo consulenze legali avanzate per aziende locali e internazionali.'
            })}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* تعريف شامل بقانون الشركات */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#c8a876] mb-6">
              {getTextByLanguage({
                ar: 'ما هو قانون الشركات؟',
                en: 'What is Corporate Law?',
                fr: 'Qu\'est-ce que le Droit des Sociétés?',
                it: 'Cos\'è il Diritto Societario?'
              })}
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {getTextByLanguage({
                ar: 'قانون الشركات هو مجموعة القواعد القانونية التي تحكم تأسيس وإدارة وتشغيل الشركات في مصر. يشمل هذا القانون قانون الشركات رقم 159 لسنة 1981 وتعديلاته، وقانون الاستثمار، وقانون الضرائب على الشركات. يغطي القانون جميع أشكال الشركات من الشركات المساهمة إلى الشركات ذات المسؤولية المحدودة والشركات التضامنية.',
                en: 'Corporate law is a set of legal rules governing the establishment, management, and operation of companies in Egypt. This law includes Companies Law No. 159 of 1981 and its amendments, Investment Law, and Corporate Tax Law. The law covers all forms of companies from joint stock companies to limited liability companies and partnerships.',
                fr: 'Le droit des sociétés est un ensemble de règles juridiques régissant la création, la gestion et l\'exploitation des entreprises en Égypte. Cette loi comprend la loi sur les sociétés n° 159 de 1981 et ses amendements, la loi sur l\'investissement et la loi fiscale sur les sociétés.',
                it: 'Il diritto societario è un insieme di norme giuridiche che regolano la costituzione, la gestione e l\'operatività delle società in Egitto. Questa legge include la Legge sulle Società n. 159 del 1981 e suoi emendamenti, la Legge sugli Investimenti e la Legge Fiscale sulle Società.'
              })}
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              {getTextByLanguage({
                ar: 'يهدف قانون الشركات إلى تنظيم النشاط التجاري وحماية حقوق المساهمين والدائنين والمتعاملين مع الشركة. كما يضع الأطر القانونية للحوكمة المؤسسية والشفافية المالية والمحاسبية. يتضمن القانون أيضاً أحكام الاندماج والاستحواذ وتصفية الشركات.',
                en: 'Corporate law aims to regulate commercial activity and protect the rights of shareholders, creditors, and those dealing with the company. It also sets legal frameworks for corporate governance, financial transparency, and accounting. The law also includes provisions for mergers, acquisitions, and company liquidation.',
                fr: 'Le droit des sociétés vise à réglementer l\'activité commerciale et à protéger les droits des actionnaires, créanciers et parties prenantes. Il établit également des cadres juridiques pour la gouvernance d\'entreprise, la transparence financière et comptable.',
                it: 'Il diritto societario mira a regolamentare l\'attività commerciale e proteggere i diritti degli azionisti, creditori e parti interessate. Stabilisce anche quadri giuridici per la governance aziendale, la trasparenza finanziaria e contabile.'
              })}
            </p>
          </div>
          
          <div className="bg-[#1a2d4d] rounded-lg p-8">
            <h3 className="text-2xl font-bold text-[#c8a876] mb-6">
              {getTextByLanguage({
                ar: 'خدماتنا في قانون الشركات',
                en: 'Our Corporate Law Services',
                fr: 'Nos Services en Droit des Sociétés',
                it: 'I Nostri Servizi di Diritto Societario'
              })}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="fas fa-building text-[#c8a876] mt-1"></i>
                <span className="text-gray-300">
                  {getTextByLanguage({
                    ar: 'تأسيس جميع أنواع الشركات',
                    en: 'Establishing all types of companies',
                    fr: 'Constitution de tous types de sociétés',
                    it: 'Costituzione di tutti i tipi di società'
                  })}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-file-contract text-[#c8a876] mt-1"></i>
                <span className="text-gray-300">
                  {getTextByLanguage({
                    ar: 'صياغة عقود التأسيس والأنظمة الأساسية',
                    en: 'Drafting articles of incorporation and bylaws',
                    fr: 'Rédaction des statuts et règlements',
                    it: 'Redazione degli atti costitutivi e statuti'
                  })}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-handshake text-[#c8a876] mt-1"></i>
                <span className="text-gray-300">
                  {getTextByLanguage({
                    ar: 'الاندماج والاستحواذ',
                    en: 'Mergers and acquisitions',
                    fr: 'Fusions et acquisitions',
                    it: 'Fusioni e acquisizioni'
                  })}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-chart-line text-[#c8a876] mt-1"></i>
                <span className="text-gray-300">
                  {getTextByLanguage({
                    ar: 'الحوكمة المؤسسية والامتثال',
                    en: 'Corporate governance and compliance',
                    fr: 'Gouvernance d\'entreprise et conformité',
                    it: 'Governance aziendale e conformità'
                  })}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-gavel text-[#c8a876] mt-1"></i>
                <span className="text-gray-300">
                  {getTextByLanguage({
                    ar: 'تسوية منازعات الشركات',
                    en: 'Corporate dispute resolution',
                    fr: 'Résolution des litiges d\'entreprise',
                    it: 'Risoluzione controversie aziendali'
                  })}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* أنواع الشركات */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-[#c8a876] mb-12">
            {getTextByLanguage({
              ar: 'أنواع الشركات التي نؤسسها',
              en: 'Types of Companies We Establish',
              fr: 'Types de Sociétés que Nous Créons',
              it: 'Tipi di Società che Costituiamo'
            })}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-chart-pie text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {getTextByLanguage({ar: 'الشركة المساهمة', en: 'Joint Stock Company', fr: 'Société par Actions', it: 'Società per Azioni'})}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {getTextByLanguage({
                  ar: 'تأسيس الشركات المساهمة العامة والمقيدة بالبورصة مع كامل الاجراءات القانونية',
                  en: 'Establishing public joint stock companies and listed companies with complete legal procedures',
                  fr: 'Constitution de sociétés par actions publiques et cotées en bourse avec toutes les procédures légales',
                  it: 'Costituzione di società per azioni pubbliche e quotate in borsa con tutte le procedure legali'
                })}
              </p>
            </div>

            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-shield-alt text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {getTextByLanguage({ar: 'شركة ذات مسؤولية محدودة', en: 'Limited Liability Company', fr: 'Société à Responsabilité Limitée', it: 'Società a Responsabilità Limitata'})}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {getTextByLanguage({
                  ar: 'تأسيس الشركات ذات المسؤولية المحدودة للمشاريع الصغيرة والمتوسطة',
                  en: 'Establishing limited liability companies for small and medium enterprises',
                  fr: 'Constitution de sociétés à responsabilité limitée pour petites et moyennes entreprises',
                  it: 'Costituzione di società a responsabilità limitata per piccole e medie imprese'
                })}
              </p>
            </div>

            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-handshake text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {getTextByLanguage({ar: 'شركة التضامن', en: 'General Partnership', fr: 'Société en Nom Collectif', it: 'Società in Nome Collettivo'})}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {getTextByLanguage({
                  ar: 'تأسيس شركات التضامن والشركات التوصية البسيطة والشركات التوصية بالأسهم',
                  en: 'Establishing general partnerships, simple and limited partnerships',
                  fr: 'Constitution de sociétés en nom collectif, en commandite simple et par actions',
                  it: 'Costituzione di società in nome collettivo, in accomandita semplice e per azioni'
                })}
              </p>
            </div>

            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-globe text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {getTextByLanguage({ar: 'الشركات الأجنبية', en: 'Foreign Companies', fr: 'Sociétés Étrangères', it: 'Società Straniere'})}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {getTextByLanguage({
                  ar: 'تأسيس فروع ومكاتب تمثيل للشركات الأجنبية في مصر',
                  en: 'Establishing branches and representative offices for foreign companies in Egypt',
                  fr: 'Établissement de succursales et bureaux de représentation pour sociétés étrangères en Égypte',
                  it: 'Costituzione di filiali e uffici di rappresentanza per società straniere in Egitto'
                })}
              </p>
            </div>

            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-building text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {getTextByLanguage({ar: 'الشركات القابضة', en: 'Holding Companies', fr: 'Sociétés Holding', it: 'Società Holding'})}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {getTextByLanguage({
                  ar: 'تأسيس الشركات القابضة ووضع هياكل الملكية المعقدة',
                  en: 'Establishing holding companies and complex ownership structures',
                  fr: 'Constitution de sociétés holding et structures de propriété complexes',
                  it: 'Costituzione di società holding e strutture proprietarie complesse'
                })}
              </p>
            </div>

            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-seedling text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {getTextByLanguage({ar: 'الشركات الناشئة', en: 'Startups', fr: 'Startups', it: 'Startup'})}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {getTextByLanguage({
                  ar: 'خدمات قانونية مخصصة للشركات الناشئة وشركات التكنولوجيا',
                  en: 'Specialized legal services for startups and technology companies',
                  fr: 'Services juridiques spécialisés pour startups et sociétés technologiques',
                  it: 'Servizi legali specializzati per startup e aziende tecnologiche'
                })}
              </p>
            </div>
          </div>
        </div>

        {/* خدمات الحوكمة والامتثال */}
        <div className="bg-[#1a2d4d] rounded-lg p-12 mb-16">
          <h2 className="text-3xl font-bold text-center text-[#c8a876] mb-12">
            {getTextByLanguage({ar: 'خدمات الحوكمة والامتثال', en: 'Governance and Compliance Services', fr: 'Services de Gouvernance et Conformité', it: 'Servizi di Governance e Conformità'})}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <i className="fas fa-users text-4xl text-[#c8a876] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-3">
                {getTextByLanguage({ar: 'إدارة مجالس الإدارة', en: 'Board Management', fr: 'Gestion des Conseils', it: 'Gestione Consigli'})}
              </h3>
              <p className="text-gray-300">
                {getTextByLanguage({ar: 'تنظيم اجتماعات مجالس الإدارة وصياغة القرارات', en: 'Organizing board meetings and drafting resolutions', fr: 'Organisation des réunions du conseil et rédaction des résolutions', it: 'Organizzazione riunioni del consiglio e redazione risoluzioni'})}
              </p>
            </div>

            <div className="text-center">
              <i className="fas fa-file-alt text-4xl text-[#c8a876] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-3">
                {getTextByLanguage({ar: 'التقارير السنوية', en: 'Annual Reports', fr: 'Rapports Annuels', it: 'Relazioni Annuali'})}
              </h3>
              <p className="text-gray-300">
                {getTextByLanguage({ar: 'إعداد التقارير السنوية والمالية للشركات', en: 'Preparing annual and financial reports for companies', fr: 'Préparation des rapports annuels et financiers', it: 'Preparazione dei rapporti annuali e finanziari'})}
              </p>
            </div>

            <div className="text-center">
              <i className="fas fa-check-circle text-4xl text-[#c8a876] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-3">
                {getTextByLanguage({ar: 'الامتثال القانوني', en: 'Legal Compliance', fr: 'Conformité Légale', it: 'Conformità Legale'})}
              </h3>
              <p className="text-gray-300">
                {getTextByLanguage({ar: 'ضمان امتثال الشركة للقوانين واللوائح', en: 'Ensuring company compliance with laws and regulations', fr: 'Assurer la conformité de l\'entreprise aux lois', it: 'Garantire la conformità aziendale alle leggi'})}
              </p>
            </div>

            <div className="text-center">
              <i className="fas fa-balance-scale text-4xl text-[#c8a876] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-3">
                {getTextByLanguage({ar: 'المسؤولية المؤسسية', en: 'Corporate Responsibility', fr: 'Responsabilité d\'Entreprise', it: 'Responsabilità Aziendale'})}
              </h3>
              <p className="text-gray-300">
                {getTextByLanguage({ar: 'تطوير برامج المسؤولية الاجتماعية للشركات', en: 'Developing corporate social responsibility programs', fr: 'Développement de programmes de RSE', it: 'Sviluppo di programmi di responsabilità sociale'})}
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
                    ar: 'خدمات تأسيس وهيكلة شركات المساهمة والشركات ذات المسؤولية المحدودة للمستثمرين في قطاعي الشحن والصناعة بالإسكندرية.',
                    en: 'Establishing and structuring joint stock and LLC companies for investors in shipping and industrial sectors in Alexandria.',
                    fr: 'Création et structuration de SA et SARL pour les investisseurs des secteurs maritime et industriel à Alexandrie.',
                    it: 'Costituzione e strutturazione di SA e Srl per investitori nei settori marittimo e industriale ad Alessandria.'
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
                    ar: 'تأسيس شركات الفنادق والتنمية السياحية والخدمات الترفيهية للأجانب والشركات متعددة الجنسيات بشرم الشيخ وجنوب سيناء.',
                    en: 'Establishing hotel, tourism development, and entertainment companies for foreigners and multinationals in Sharm El Sheikh.',
                    fr: 'Constitution d\'entreprises hôtelières, de développement touristique et de loisirs pour les étrangers à Charm.',
                    it: 'Costituzione di imprese alberghiere, di sviluppo turistico e di intrattenimento per stranieri a Sharm.'
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
                    ar: 'خدمات التمثيل القانوني والجمعيات العمومية ومجالس الإدارة والتعامل مع البورصة المصرية وهيئة الرقابة المالية في القاهرة.',
                    en: 'Legal representation, general assemblies, board meetings, and dealing with the Egyptian Stock Exchange and EFSA in Cairo.',
                    fr: 'Représentation légale, assemblées générales, conseils et relations avec la Bourse égyptienne et l\'EFSA au Caire.',
                    it: 'Rappresentanza legale, assemblee generali, consigli e relazioni con la Borsa egiziana e l\'EFSA al Cairo.'
                  })}
                </p>
              </div>
              <Link to="/cairo" className="text-sm text-[#c8a876] hover:text-white hover:underline font-semibold">
                {getTextByLanguage({ ar: 'تفاصيل خدمات القاهرة ←', en: 'Cairo Services Details ←', fr: 'Détails des Services du Caire ←', it: 'Dettagli Servizi Cairo ←' })}
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#c8a876] to-[#b8956a] rounded-lg p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b1a33] mb-6">
            {getTextByLanguage({ar: 'هل تريد تأسيس شركة أو تحتاج استشارات قانونية؟', en: 'Want to Establish a Company or Need Legal Consultations?', fr: 'Voulez-vous Créer une Société ou Besoin de Consultations?', it: 'Vuoi Costituire una Società o Hai Bisogno di Consulenze?'})}
          </h2>
          <a 
            href="#contact" 
            className="bg-[#0b1a33] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors duration-300"
          >
            {getTextByLanguage({ar: 'احجز استشارة مؤسسية', en: 'Book Corporate Consultation', fr: 'Réserver Consultation', it: 'Prenota Consulenza'})}
          </a>
        </div>

      </div>
    </div>
  );
};

export default CompanyLaw;