import React, { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

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
    <div className="min-h-screen bg-[#0b1a33] text-gray-200 py-20" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#c8a876]">
            {getTextByLanguage({
              ar: 'محامي قانون الشركات',
              en: 'Corporate Law Lawyer',
              fr: 'Avocat Droit des Sociétés',
              it: 'Avvocato Diritto Societario'
            })}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            {getTextByLanguage({
              ar: 'المحامي كريم الديب - خبير في قانون الشركات وتأسيس الشركات والحوكمة المؤسسية. نقدم استشارات قانونية متقدمة للشركات المحلية والدولية في مصر.',
              en: 'Lawyer Karim El-Dib - Expert in corporate law, company formation, and corporate governance. We provide advanced legal consultations for local and international companies in Egypt.',
              fr: 'Avocat Karim El-Dib - Expert en droit des sociétés, constitution de sociétés et gouvernance d\'entreprise. Nous fournissons des consultations juridiques avancées pour les entreprises locales et internationales en Égypte.',
              it: 'Avvocato Karim El-Dib - Esperto in diritto societario, costituzione di società e governance aziendale. Forniamo consulenze legali avanzate per aziende locali e internazionali in Egitto.'
            })}
          </p>
        </div>

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