import React, { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const FamilyLaw: React.FC = () => {
  const { language, getTextByLanguage } = useLanguage();
  const isRTL = language === 'ar';

  useEffect(() => {
    const title = language === 'ar'
      ? "محامي أحوال شخصية | قانون الأسرة | المحامي كريم الديب"
      : language === 'fr'
      ? "Avocat Droit de la Famille | Karim El-Dib"
      : language === 'it'
      ? "Avvocato Diritto di Famiglia | Karim El-Dib"
      : "Family Law Lawyer | Lawyer Karim El-Dib";
    
    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'محامي أحوال شخصية - المحامي كريم الديب خبير في قانون الأسرة والأحوال الشخصية. قضايا الطلاق، الخلع، النفقة، الحضانة، الميراث للمصريين والأجانب. Family law lawyer Egypt.');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'محامي أحوال شخصية, محامي قانون الأسرة, محامي طلاق, محامي خلع, محامي نفقة, محامي حضانة أطفال, قضايا الأسرة محامي, محامي زواج أجانب, قانون الأحوال الشخصية, Family law lawyer Egypt, كريم الديب محامي');
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0b1a33] text-gray-200 py-20" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#c8a876]">
            {getTextByLanguage({ar: 'محامي الأحوال الشخصية', en: 'Family Law Lawyer', fr: 'Avocat en Droit de la Famille', it: 'Avvocato di Diritto di Famiglia'})}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            {getTextByLanguage({
              ar: 'المحامي كريم الديب - خبير في قانون الأسرة والأحوال الشخصية. نتعامل بحساسية واحترافية مع قضايا الأسرة للمصريين والأجانب.',
              en: 'Lawyer Karim El-Dib - Expert in family law and personal status. We handle family matters with sensitivity and professionalism for Egyptians and foreigners.',
              fr: 'Avocat Karim El-Dib - Expert en droit de la famille et statut personnel. Nous traitons les affaires familiales avec sensibilité et professionnalisme pour les Égyptiens et les étrangers.',
              it: 'Avvocato Karim El-Dib - Esperto in diritto di famiglia e stato personale. Gestiamo questioni familiari con sensibilità e professionalità per egiziani e stranieri.'
            })}
          </p>
        </div>

        {/* تعريف شامل بقانون الأسرة */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#c8a876] mb-6">
              {getTextByLanguage({ar: 'ما هو قانون الأحوال الشخصية؟', en: 'What is Family Law?', fr: 'Qu\'est-ce que le Droit de la Famille?', it: 'Cos\'è il Diritto di Famiglia?'})}
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {getTextByLanguage({
                ar: 'قانون الأحوال الشخصية هو مجموعة القواعد القانونية التي تنظم العلاقات الأسرية والشخصية للأفراد. يشمل هذا القانون في مصر أحكام الزواج والطلاق والخلع والنفقة والحضانة والميراث والوصية. يتميز قانون الأحوال الشخصية في مصر بتنوع المصادر حيث يطبق وفقاً للديانة والمذهب، مما يتطلب خبرة قانونية متخصصة للتعامل مع هذا التنوع.',
                en: 'Family law is a set of legal rules that regulate family and personal relationships of individuals. This law in Egypt includes provisions for marriage, divorce, khula, alimony, custody, inheritance, and wills. Egyptian family law is characterized by diverse sources as it is applied according to religion and sect, requiring specialized legal expertise to deal with this diversity.',
                fr: 'Le droit de la famille est un ensemble de règles juridiques qui régissent les relations familiales et personnelles des individus. Cette loi en Égypte comprend des dispositions sur le mariage, le divorce, le khula, la pension alimentaire, la garde, l\'héritage et les testaments.',
                it: 'Il diritto di famiglia è un insieme di norme giuridiche che regolano le relazioni familiari e personali degli individui. Questa legge in Egitto include disposizioni su matrimonio, divorzio, khula, alimenti, custodia, eredità e testamenti.'
              })}
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              {getTextByLanguage({
                ar: 'يهدف قانون الأحوال الشخصية إلى حماية الأسرة كوحدة أساسية في المجتمع، وضمان حقوق جميع أفراد الأسرة خاصة الأطفال والنساء. كما يتناول القانون المسائل المتعلقة بالأهلية والولاية والوصاية، ويوفر آليات لحل النزاعات الأسرية بطرق ودية قبل اللجوء للتقاضي.',
                en: 'Family law aims to protect the family as a fundamental unit in society and ensure the rights of all family members, especially children and women. The law also addresses matters related to capacity, guardianship, and custody, providing mechanisms to resolve family disputes amicably before resorting to litigation.',
                fr: 'Le droit de la famille vise à protéger la famille en tant qu\'unité fondamentale de la société et à garantir les droits de tous les membres de la famille, en particulier les enfants et les femmes.',
                it: 'Il diritto di famiglia mira a proteggere la famiglia come unità fondamentale della società e garantire i diritti di tutti i membri della famiglia, specialmente bambini e donne.'
              })}
            </p>
          </div>
          
          <div className="bg-[#1a2d4d] rounded-lg p-8">
            <h3 className="text-2xl font-bold text-[#c8a876] mb-6">
              {getTextByLanguage({ar: 'خدماتنا في قانون الأسرة', en: 'Our Family Law Services', fr: 'Nos Services en Droit de la Famille', it: 'I Nostri Servizi di Diritto di Famiglia'})}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="fas fa-heart text-[#c8a876] mt-1"></i>
                <span className="text-gray-300">
                  {getTextByLanguage({ar: 'عقود الزواج والتوثيق', en: 'Marriage contracts and documentation', fr: 'Contrats de mariage et documentation', it: 'Contratti di matrimonio e documentazione'})}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-file-contract text-[#c8a876] mt-1"></i>
                <span className="text-gray-300">
                  {getTextByLanguage({ar: 'قضايا الطلاق والخلع', en: 'Divorce and khula cases', fr: 'Cas de divorce et khula', it: 'Casi di divorzio e khula'})}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-child text-[#c8a876] mt-1"></i>
                <span className="text-gray-300">
                  {getTextByLanguage({ar: 'قضايا الحضانة والرؤية', en: 'Custody and visitation cases', fr: 'Cas de garde et de visite', it: 'Casi di custodia e visita'})}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-coins text-[#c8a876] mt-1"></i>
                <span className="text-gray-300">
                  {getTextByLanguage({ar: 'قضايا النفقة والمتعة', en: 'Alimony and compensation cases', fr: 'Cas de pension alimentaire et compensation', it: 'Casi di alimenti e compensazione'})}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-scroll text-[#c8a876] mt-1"></i>
                <span className="text-gray-300">
                  {getTextByLanguage({ar: 'قضايا الميراث والوصايا', en: 'Inheritance and will cases', fr: 'Cas de succession et testaments', it: 'Casi di eredità e testamenti'})}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* أنواع قضايا الأحوال الشخصية */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-[#c8a876] mb-12">
            {getTextByLanguage({ar: 'أنواع قضايا الأحوال الشخصية التي نتعامل معها', en: 'Types of Family Law Cases We Handle', fr: 'Types de Cas de Droit de la Famille que Nous Traitons', it: 'Tipi di Casi di Diritto di Famiglia che Gestiamo'})}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-heart text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {getTextByLanguage({ar: 'عقود الزواج', en: 'Marriage Contracts', fr: 'Contrats de Mariage', it: 'Contratti di Matrimonio'})}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {getTextByLanguage({
                  ar: 'صياغة وتوثيق عقود الزواج للمصريين والأجانب وفقاً للقانون المصري',
                  en: 'Drafting and documenting marriage contracts for Egyptians and foreigners according to Egyptian law',
                  fr: 'Rédaction et documentation de contrats de mariage pour Égyptiens et étrangers selon le droit égyptien',
                  it: 'Redazione e documentazione di contratti di matrimonio per egiziani e stranieri secondo la legge egiziana'
                })}
              </p>
            </div>

            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-file-contract text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {getTextByLanguage({ar: 'قضايا الطلاق', en: 'Divorce Cases', fr: 'Cas de Divorce', it: 'Casi di Divorzio'})}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {getTextByLanguage({
                  ar: 'الطلاق الرضائي والطلاق للضرر والطلاق للعلة وجميع أنواع الطلاق',
                  en: 'Consensual divorce, divorce for harm, and all types of divorce proceedings',
                  fr: 'Divorce consensuel, divorce pour préjudice et tous types de procédures de divorce',
                  it: 'Divorzio consensuale, divorzio per danno e tutti i tipi di procedimenti di divorzio'
                })}
              </p>
            </div>

            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-female text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {getTextByLanguage({ar: 'قضايا الخلع', en: 'Khula Cases', fr: 'Cas de Khula', it: 'Casi di Khula'})}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {getTextByLanguage({
                  ar: 'دعاوى الخلع للزوجة مع المطالبة بالحقوق المالية والمعنوية',
                  en: 'Khula lawsuits for wives with claims for financial and moral rights',
                  fr: 'Actions en khula pour les épouses avec réclamations de droits financiers et moraux',
                  it: 'Azioni di khula per mogli con richieste di diritti finanziari e morali'
                })}
              </p>
            </div>

            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-child text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {getTextByLanguage({ar: 'قضايا الحضانة', en: 'Custody Cases', fr: 'Cas de Garde', it: 'Casi di Custodia'})}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {getTextByLanguage({
                  ar: 'حضانة الأطفال، تعديل أحكام الحضانة، وقضايا الرؤية والزيارة',
                  en: 'Child custody, custody modification, and visitation cases',
                  fr: 'Garde d\'enfants, modification de la garde et cas de visite',
                  it: 'Custodia dei bambini, modifica della custodia e casi di visita'
                })}
              </p>
            </div>

            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-coins text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {getTextByLanguage({ar: 'قضايا النفقة', en: 'Alimony Cases', fr: 'Cas de Pension Alimentaire', it: 'Casi di Alimenti'})}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {getTextByLanguage({
                  ar: 'نفقة الزوجة، نفقة الأطفال، المتعة، وتعديل أحكام النفقة',
                  en: 'Spousal support, child support, compensation, and alimony modification',
                  fr: 'Pension alimentaire pour conjoint, pension alimentaire pour enfants, compensation et modification',
                  it: 'Alimenti per coniuge, alimenti per bambini, compensazione e modifica'
                })}
              </p>
            </div>

            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-scroll text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {getTextByLanguage({ar: 'قضايا الميراث', en: 'Inheritance Cases', fr: 'Cas de Succession', it: 'Casi di Eredità'})}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {getTextByLanguage({
                  ar: 'تقسيم التركات، دعاوى الوراثة، والمنازعات حول الإرث',
                  en: 'Estate division, inheritance lawsuits, and inheritance disputes',
                  fr: 'Division de la succession, actions en succession et litiges successoraux',
                  it: 'Divisione del patrimonio, cause ereditarie e controversie ereditarie'
                })}
              </p>
            </div>
          </div>
        </div>

        {/* مميزاتنا في قضايا الأسرة */}
        <div className="bg-[#1a2d4d] rounded-lg p-12 mb-16">
          <h2 className="text-3xl font-bold text-center text-[#c8a876] mb-12">
            {getTextByLanguage({ar: 'لماذا تختارنا في قضايا الأسرة؟', en: 'Why Choose Us for Family Cases?', fr: 'Pourquoi Nous Choisir pour les Affaires Familiales?', it: 'Perché Sceglierci per i Casi Familiari?'})}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <i className="fas fa-heart text-4xl text-[#c8a876] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-3">
                {getTextByLanguage({ar: 'تعامل إنساني', en: 'Humane Treatment', fr: 'Traitement Humain', it: 'Trattamento Umano'})}
              </h3>
              <p className="text-gray-300">
                {getTextByLanguage({ar: 'نتفهم الجانب الإنساني في قضايا الأسرة', en: 'We understand the human aspect in family cases', fr: 'Nous comprenons l\'aspect humain dans les affaires familiales', it: 'Comprendiamo l\'aspetto umano nei casi familiari'})}
              </p>
            </div>

            <div className="text-center">
              <i className="fas fa-user-secret text-4xl text-[#c8a876] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-3">
                {getTextByLanguage({ar: 'سرية تامة', en: 'Complete Confidentiality', fr: 'Confidentialité Totale', it: 'Riservatezza Completa'})}
              </h3>
              <p className="text-gray-300">
                {getTextByLanguage({ar: 'حماية كاملة لخصوصية العملاء', en: 'Complete protection of client privacy', fr: 'Protection complète de la vie privée des clients', it: 'Protezione completa della privacy dei clienti'})}
              </p>
            </div>

            <div className="text-center">
              <i className="fas fa-handshake text-4xl text-[#c8a876] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-3">
                {getTextByLanguage({ar: 'حلول ودية', en: 'Amicable Solutions', fr: 'Solutions Amiables', it: 'Soluzioni Amichevoli'})}
              </h3>
              <p className="text-gray-300">
                {getTextByLanguage({ar: 'تفضيل الحلول الودية والتفاوض', en: 'Preference for amicable solutions and negotiation', fr: 'Préférence pour les solutions amiables et la négociation', it: 'Preferenza per soluzioni amichevoli e negoziazione'})}
              </p>
            </div>

            <div className="text-center">
              <i className="fas fa-child text-4xl text-[#c8a876] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-3">
                {getTextByLanguage({ar: 'حماية الأطفال', en: 'Child Protection', fr: 'Protection des Enfants', it: 'Protezione dei Bambini'})}
              </h3>
              <p className="text-gray-300">
                {getTextByLanguage({ar: 'الأولوية لمصلحة الأطفال', en: 'Priority for children\'s best interests', fr: 'Priorité pour l\'intérêt supérieur des enfants', it: 'Priorità per il miglior interesse dei bambini'})}
              </p>
            </div>
          </div>
        </div>

        {/* مراحل التعامل مع قضايا الأسرة */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-[#c8a876] mb-12">
            {getTextByLanguage({ar: 'مراحل التعامل مع قضايا الأسرة', en: 'Family Case Handling Stages', fr: 'Étapes de Gestion des Affaires Familiales', it: 'Fasi di Gestione dei Casi Familiari'})}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#c8a876] text-[#0b1a33] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
              <h3 className="text-xl font-bold text-white mb-3">
                {getTextByLanguage({ar: 'الاستشارة الأولية', en: 'Initial Consultation', fr: 'Consultation Initiale', it: 'Consultazione Iniziale'})}
              </h3>
              <p className="text-gray-300">
                {getTextByLanguage({ar: 'فهم الوضع الأسري وتقديم النصح القانوني', en: 'Understanding family situation and providing legal advice', fr: 'Comprendre la situation familiale et fournir des conseils juridiques', it: 'Comprendere la situazione familiare e fornire consulenza legale'})}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#c8a876] text-[#0b1a33] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
              <h3 className="text-xl font-bold text-white mb-3">
                {getTextByLanguage({ar: 'محاولة الصلح', en: 'Reconciliation Attempt', fr: 'Tentative de Réconciliation', it: 'Tentativo di Riconciliazione'})}
              </h3>
              <p className="text-gray-300">
                {getTextByLanguage({ar: 'السعي للحلول الودية والتفاوض بين الأطراف', en: 'Seeking amicable solutions and negotiation between parties', fr: 'Recherche de solutions amiables et négociation entre les parties', it: 'Ricerca di soluzioni amichevoli e negoziazione tra le parti'})}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#c8a876] text-[#0b1a33] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
              <h3 className="text-xl font-bold text-white mb-3">
                {getTextByLanguage({ar: 'إعداد الدعوى', en: 'Case Preparation', fr: 'Préparation du Dossier', it: 'Preparazione del Caso'})}
              </h3>
              <p className="text-gray-300">
                {getTextByLanguage({ar: 'جمع الأدلة وإعداد المستندات اللازمة', en: 'Gathering evidence and preparing necessary documents', fr: 'Rassembler les preuves et préparer les documents nécessaires', it: 'Raccogliere prove e preparare documenti necessari'})}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#c8a876] text-[#0b1a33] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">4</div>
              <h3 className="text-xl font-bold text-white mb-3">
                {getTextByLanguage({ar: 'التمثيل القانوني', en: 'Legal Representation', fr: 'Représentation Juridique', it: 'Rappresentanza Legale'})}
              </h3>
              <p className="text-gray-300">
                {getTextByLanguage({ar: 'التمثيل أمام محاكم الأسرة ومتابعة القضية', en: 'Representation before family courts and case follow-up', fr: 'Représentation devant les tribunaux de la famille et suivi du dossier', it: 'Rappresentanza davanti ai tribunali di famiglia e follow-up del caso'})}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#c8a876] to-[#b8956a] rounded-lg p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b1a33] mb-6">
            {getTextByLanguage({ar: 'هل تحتاج مساعدة في قضايا الأسرة؟', en: 'Do You Need Help with Family Matters?', fr: 'Avez-vous besoin d\'aide pour les Affaires Familiales?', it: 'Hai bisogno di aiuto con Questioni Familiari?'})}
          </h2>
          <a 
            href="#contact" 
            className="bg-[#0b1a33] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors duration-300"
          >
            {getTextByLanguage({ar: 'احجز استشارة خاصة', en: 'Book Private Consultation', fr: 'Réservez une Consultation Privée', it: 'Prenota Consultazione Privata'})}
          </a>
        </div>

      </div>
    </div>
  );
};

export default FamilyLaw;