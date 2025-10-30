import React, { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const CriminalLaw: React.FC = () => {
  const { language, getTextByLanguage } = useLanguage();
  const isRTL = language === 'ar';

  useEffect(() => {
    const title = language === 'ar'
      ? "محامي قانون جنائي | المحامي كريم الديب"
      : language === 'fr'
      ? "Avocat Droit Pénal | Karim El-Dib"
      : language === 'it'
      ? "Avvocato Diritto Penale | Karim El-Dib"
      : "Criminal Defense Lawyer | Lawyer Karim El-Dib";
    
    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'محامي قانون جنائي - المحامي كريم الديب خبير في الدفاع الجنائي والقضايا الجنائية. دفاع قوي للمصريين والأجانب في مصر. Criminal defense lawyer Egypt.');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'محامي قانون جنائي, محامي جنائي مصر, دفاع جنائي, قضايا جنائية, محامي دفاع, Criminal lawyer Egypt, كريم الديب محامي, المحامي كريم الديب');
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0b1a33] text-gray-200 py-20" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#c8a876]">
            {getTextByLanguage({ar: 'محامي القانون الجنائي', en: 'Criminal Defense Lawyer', fr: 'Avocat Pénaliste', it: 'Avvocato Penalista'})}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            {getTextByLanguage({
              ar: 'المحامي كريم الديب - خبير في الدفاع الجنائي والقضايا الجنائية. نقدم دفاعاً قوياً ومهنياً للمصريين والأجانب في جميع القضايا الجنائية.',
              en: 'Lawyer Karim El-Dib - Expert in criminal defense and criminal cases. We provide strong and professional defense for Egyptians and foreigners in all criminal cases.',
              fr: 'Avocat Karim El-Dib - Expert en défense pénale. Nous fournissons une défense solide et professionnelle pour les Égyptiens et les étrangers dans toutes les affaires criminelles.',
              it: 'Avvocato Karim El-Dib - Esperto in difesa penale. Forniamo una difesa forte e professionale per egiziani e stranieri in tutti i casi penali.'
            })}
          </p>
        </div>

        {/* تعريف شامل بالقانون الجنائي */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#c8a876] mb-6">
              {getTextByLanguage({ar: 'ما هو القانون الجنائي؟', en: 'What is Criminal Law?', fr: 'Qu\'est-ce que le Droit Pénal?', it: 'Cos\'è il Diritto Penale?'})}
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {getTextByLanguage({
                ar: 'القانون الجنائي هو مجموعة القواعد القانونية التي تحدد الأفعال المجرمة والعقوبات المقررة لها. يهدف القانون الجنائي إلى حماية المجتمع والحفاظ على الأمن والنظام العام من خلال تجريم الأفعال التي تضر بالمصلحة العامة أو الخاصة. يشمل القانون الجنائي المصري الجرائم والعقوبات، وإجراءات التحقيق والمحاكمة، وضمانات المتهم.',
                en: 'Criminal law is a set of legal rules that define criminal acts and their prescribed penalties. Criminal law aims to protect society and maintain security and public order by criminalizing acts that harm public or private interests. Egyptian criminal law includes crimes and penalties, investigation and trial procedures, and defendant guarantees.',
                fr: 'Le droit pénal est un ensemble de règles juridiques qui définissent les actes criminels et leurs sanctions. Le droit pénal vise à protéger la société et à maintenir la sécurité et l\'ordre public en criminalisant les actes qui nuisent à l\'intérêt public ou privé.',
                it: 'Il diritto penale è un insieme di norme giuridiche che definiscono gli atti criminali e le relative sanzioni. Il diritto penale mira a proteggere la società e mantenere la sicurezza e l\'ordine pubblico criminalizzando gli atti che danneggiano l\'interesse pubblico o privato.'
              })}
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              {getTextByLanguage({
                ar: 'يتميز القانون الجنائي بالطبيعة العقابية والوقائية، حيث يسعى لردع الجناة ومنع تكرار الجرائم. كما يكفل حقوق المتهم في الدفاع والحصول على محاكمة عادلة. يشمل القانون الجنائي المصري جرائم متنوعة كالقتل والسرقة والاحتيال والمخدرات والجرائم الاقتصادية والسياسية.',
                en: 'Criminal law is characterized by its punitive and preventive nature, seeking to deter offenders and prevent crime repetition. It also guarantees the defendant\'s rights to defense and fair trial. Egyptian criminal law includes various crimes such as murder, theft, fraud, drugs, economic and political crimes.',
                fr: 'Le droit pénal se caractérise par sa nature punitive et préventive, cherchant à dissuader les criminels et à prévenir la répétition des crimes. Il garantit également les droits de l\'accusé à la défense et à un procès équitable.',
                it: 'Il diritto penale è caratterizzato dalla sua natura punitiva e preventiva, cercando di dissuadere i criminali e prevenire la ripetizione dei crimini. Garantisce anche i diritti dell\'imputato alla difesa e a un processo equo.'
              })}
            </p>
          </div>
          
          <div className="bg-[#1a2d4d] rounded-lg p-8">
            <h3 className="text-2xl font-bold text-[#c8a876] mb-6">
              {getTextByLanguage({ar: 'خدماتنا في القانون الجنائي', en: 'Our Criminal Law Services', fr: 'Nos Services en Droit Pénal', it: 'I Nostri Servizi di Diritto Penale'})}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="fas fa-shield-alt text-[#c8a876] mt-1"></i>
                <span className="text-gray-300">
                  {getTextByLanguage({ar: 'الدفاع في القضايا الجنائية', en: 'Defense in criminal cases', fr: 'Défense dans les affaires criminelles', it: 'Difesa in casi penali'})}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-gavel text-[#c8a876] mt-1"></i>
                <span className="text-gray-300">
                  {getTextByLanguage({ar: 'التمثيل أمام محاكم الجنايات', en: 'Representation before criminal courts', fr: 'Représentation devant les tribunaux criminels', it: 'Rappresentanza davanti ai tribunali penali'})}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-search text-[#c8a876] mt-1"></i>
                <span className="text-gray-300">
                  {getTextByLanguage({ar: 'حضور التحقيقات والاستجوابات', en: 'Attending investigations and interrogations', fr: 'Assistance aux enquêtes et interrogatoires', it: 'Assistenza alle indagini e interrogatori'})}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-file-alt text-[#c8a876] mt-1"></i>
                <span className="text-gray-300">
                  {getTextByLanguage({ar: 'تقديم الطعون والاستئنافات', en: 'Filing appeals and cassations', fr: 'Dépôt d\'appels et de cassations', it: 'Deposito di ricorsi e cassazioni'})}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-handshake text-[#c8a876] mt-1"></i>
                <span className="text-gray-300">
                  {getTextByLanguage({ar: 'التصالح والحلول البديلة', en: 'Reconciliation and alternative solutions', fr: 'Réconciliation et solutions alternatives', it: 'Riconciliazione e soluzioni alternative'})}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* أنواع القضايا الجنائية */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-[#c8a876] mb-12">
            {getTextByLanguage({ar: 'أنواع القضايا الجنائية التي نتعامل معها', en: 'Types of Criminal Cases We Handle', fr: 'Types d\'Affaires Criminelles que Nous Traitons', it: 'Tipi di Casi Penali che Gestiamo'})}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-mask text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {getTextByLanguage({ar: 'جرائم الأشخاص', en: 'Crimes Against Persons', fr: 'Crimes Contre les Personnes', it: 'Crimini Contro le Persone'})}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {getTextByLanguage({
                  ar: 'القتل، الضرب، الجرح، الاعتداء، التهديد، وجميع الجرائم الواقعة على الأشخاص',
                  en: 'Murder, assault, battery, threats, and all crimes against persons',
                  fr: 'Meurtre, agression, coups et blessures, menaces et tous crimes contre les personnes',
                  it: 'Omicidio, aggressione, lesioni, minacce e tutti i crimini contro le persone'
                })}
              </p>
            </div>

            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-money-bill-wave text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {getTextByLanguage({ar: 'جرائم الأموال', en: 'Financial Crimes', fr: 'Crimes Financiers', it: 'Crimini Finanziari'})}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {getTextByLanguage({
                  ar: 'السرقة، النصب والاحتيال، اختلاس الأموال، وجميع الجرائم المالية',
                  en: 'Theft, fraud, embezzlement, and all financial crimes',
                  fr: 'Vol, fraude, détournement de fonds et tous crimes financiers',
                  it: 'Furto, frode, appropriazione indebita e tutti i crimini finanziari'
                })}
              </p>
            </div>

            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-pills text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {getTextByLanguage({ar: 'قضايا المخدرات', en: 'Drug Cases', fr: 'Affaires de Drogue', it: 'Casi di Droga'})}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {getTextByLanguage({
                  ar: 'تعاطي وترويج وتهريب المخدرات والمواد المؤثرة على الأعصاب',
                  en: 'Drug possession, trafficking, and smuggling cases',
                  fr: 'Possession, trafic et contrebande de drogues',
                  it: 'Possesso, traffico e contrabbando di droga'
                })}
              </p>
            </div>

            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-laptop text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {getTextByLanguage({ar: 'الجرائم الإلكترونية', en: 'Cyber Crimes', fr: 'Cybercriminalité', it: 'Crimini Informatici'})}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {getTextByLanguage({
                  ar: 'جرائم الإنترنت، القرصنة، انتهاك الخصوصية، والجرائم الرقمية',
                  en: 'Internet crimes, hacking, privacy violations, and digital crimes',
                  fr: 'Crimes sur Internet, piratage, violations de la vie privée et crimes numériques',
                  it: 'Crimini su Internet, hacking, violazioni della privacy e crimini digitali'
                })}
              </p>
            </div>

            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-car text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {getTextByLanguage({ar: 'حوادث المرور', en: 'Traffic Accidents', fr: 'Accidents de la Route', it: 'Incidenti Stradali'})}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {getTextByLanguage({
                  ar: 'القتل الخطأ، الإصابة الخطأ، ومخالفات المرور الجنائية',
                  en: 'Vehicular manslaughter, negligent injury, and criminal traffic violations',
                  fr: 'Homicide involontaire, blessures par négligence et infractions pénales au code de la route',
                  it: 'Omicidio stradale, lesioni colpose e violazioni penali del codice della strada'
                })}
              </p>
            </div>

            <div className="bg-[#1a2d4d] rounded-lg p-6 hover:bg-[#2a3d5d] transition-colors duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-university text-4xl text-[#c8a876] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-3">
                  {getTextByLanguage({ar: 'جرائم أمن الدولة', en: 'State Security Crimes', fr: 'Crimes de Sûreté de l\'État', it: 'Crimini contro la Sicurezza dello Stato'})}
                </h3>
              </div>
              <p className="text-gray-300 text-center">
                {getTextByLanguage({
                  ar: 'الجرائم السياسية وجرائم أمن الدولة والتخابر مع العدو',
                  en: 'Political crimes, state security crimes, and espionage',
                  fr: 'Crimes politiques, crimes contre la sûreté de l\'État et espionnage',
                  it: 'Crimini politici, crimini contro la sicurezza dello stato e spionaggio'
                })}
              </p>
            </div>
          </div>
        </div>

        {/* مراحل الدفاع الجنائي */}
        <div className="bg-[#1a2d4d] rounded-lg p-12 mb-16">
          <h2 className="text-3xl font-bold text-center text-[#c8a876] mb-12">
            {getTextByLanguage({ar: 'مراحل الدفاع الجنائي', en: 'Criminal Defense Stages', fr: 'Étapes de la Défense Pénale', it: 'Fasi della Difesa Penale'})}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#c8a876] text-[#0b1a33] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
              <h3 className="text-xl font-bold text-white mb-3">
                {getTextByLanguage({ar: 'مرحلة التحقيق', en: 'Investigation Stage', fr: 'Phase d\'Enquête', it: 'Fase di Indagine'})}
              </h3>
              <p className="text-gray-300">
                {getTextByLanguage({ar: 'حضور التحقيقات والاستجوابات مع المتهم', en: 'Attending investigations and interrogations with the defendant', fr: 'Assistance aux enquêtes et interrogatoires avec l\'accusé', it: 'Assistenza alle indagini e interrogatori con l\'imputato'})}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#c8a876] text-[#0b1a33] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
              <h3 className="text-xl font-bold text-white mb-3">
                {getTextByLanguage({ar: 'مرحلة الإحالة', en: 'Referral Stage', fr: 'Phase de Renvoi', it: 'Fase di Rinvio'})}
              </h3>
              <p className="text-gray-300">
                {getTextByLanguage({ar: 'مراجعة أوراق القضية وإعداد استراتيجية الدفاع', en: 'Reviewing case files and preparing defense strategy', fr: 'Examen du dossier et préparation de la stratégie de défense', it: 'Revisione del fascicolo e preparazione della strategia di difesa'})}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#c8a876] text-[#0b1a33] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
              <h3 className="text-xl font-bold text-white mb-3">
                {getTextByLanguage({ar: 'مرحلة المحاكمة', en: 'Trial Stage', fr: 'Phase de Procès', it: 'Fase di Processo'})}
              </h3>
              <p className="text-gray-300">
                {getTextByLanguage({ar: 'تمثيل المتهم أمام المحكمة وتقديم الدفاع', en: 'Representing the defendant in court and presenting defense', fr: 'Représentation de l\'accusé devant le tribunal et présentation de la défense', it: 'Rappresentanza dell\'imputato in tribunale e presentazione della difesa'})}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#c8a876] text-[#0b1a33] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">4</div>
              <h3 className="text-xl font-bold text-white mb-3">
                {getTextByLanguage({ar: 'مرحلة الطعن', en: 'Appeal Stage', fr: 'Phase d\'Appel', it: 'Fase di Ricorso'})}
              </h3>
              <p className="text-gray-300">
                {getTextByLanguage({ar: 'تقديم الطعون والاستئنافات عند الحاجة', en: 'Filing appeals and cassations when needed', fr: 'Dépôt d\'appels et de pourvois en cassation si nécessaire', it: 'Deposito di ricorsi e cassazioni quando necessario'})}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#c8a876] to-[#b8956a] rounded-lg p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b1a33] mb-6">
            {getTextByLanguage({ar: 'هل تحتاج دفاعاً جنائياً؟', en: 'Do You Need Criminal Defense?', fr: 'Avez-vous besoin d\'une Défense Pénale?', it: 'Hai bisogno di Difesa Penale?'})}
          </h2>
          <a 
            href="#contact" 
            className="bg-[#0b1a33] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors duration-300"
          >
            {getTextByLanguage({ar: 'احجز استشارة عاجلة', en: 'Book Urgent Consultation', fr: 'Réservez une Consultation Urgente', it: 'Prenota Consultazione Urgente'})}
          </a>
        </div>

      </div>
    </div>
  );
};

export default CriminalLaw;