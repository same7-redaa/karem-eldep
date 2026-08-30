import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown, ChevronUp, Search, HelpCircle } from 'lucide-react';

interface FAQItem {
    questionAr: string;
    questionEn: string;
    questionFr: string;
    questionIt: string;
    answerAr: string;
    answerEn: string;
    answerFr: string;
    answerIt: string;
    category: string;
}

const FAQ: React.FC = () => {
    const { language } = useLanguage();
    const isRTL = language === 'ar';
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // SEO Meta Tags
        const title = language === 'ar'
            ? 'الأسئلة الشائعة | محامي أجانب في مصر | كريم الديب'
            : language === 'fr'
                ? 'Questions Fréquentes | Avocat pour Étrangers en Égypte | Karim Eldib'
                : language === 'it'
                    ? 'Domande Frequenti | Avvocato per Stranieri in Egitto | Karim Eldib'
                    : 'Frequently Asked Questions | Lawyer for Foreigners in Egypt | Karim Eldib';

        const description = language === 'ar'
            ? 'إجابات شاملة على الأسئلة الشائعة حول الخدمات القانونية للأجانب في مصر: الإقامة، التأشيرات، تأسيس الشركات، الطلاق، العقارات، والاستثمار.'
            : language === 'fr'
                ? 'Réponses complètes aux questions fréquentes sur les services juridiques pour étrangers en Égypte: résidence, visas, création d\'entreprise, divorce, immobilier et investissement.'
                : language === 'it'
                    ? 'Risposte complete alle domande frequenti sui servizi legali per stranieri in Egitto: residenza, visti, costituzione società, divorzio, immobiliare e investimenti.'
                    : 'Comprehensive answers to frequently asked questions about legal services for foreigners in Egypt: residence, visas, company formation, divorce, real estate, and investment.';

        document.title = title;

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description);
        }

        // FAQPage Schema Markup
        const faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": language === 'ar' ? faq.questionAr : language === 'fr' ? faq.questionFr : language === 'it' ? faq.questionIt : faq.questionEn,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": language === 'ar' ? faq.answerAr : language === 'fr' ? faq.answerFr : language === 'it' ? faq.answerIt : faq.answerEn
                }
            }))
        };

        const scriptTag = document.createElement('script');
        scriptTag.type = 'application/ld+json';
        scriptTag.text = JSON.stringify(faqSchema);
        document.head.appendChild(scriptTag);

        return () => {
            document.head.removeChild(scriptTag);
        };
    }, [language]);

    const faqs: FAQItem[] = [
        // قضايا الأجانب
        {
            questionAr: 'من هو أفضل محامي أجانب في شرم الشيخ؟',
            questionEn: 'Who is the best lawyer for foreigners in Sharm El Sheikh?',
            questionFr: 'Qui est le meilleur avocat pour étrangers à Sharm El Sheikh?',
            questionIt: 'Chi è il miglior avvocato per stranieri a Sharm El Sheikh?',
            answerAr: 'المحامي كريم الديب هو أفضل محامي متخصص في خدمة الأجانب في شرم الشيخ، مع خبرة 18 عاماً في تقديم الخدمات القانونية الشاملة. يتحدث العربية والإنجليزية والفرنسية والإيطالية، ويقدم خدمات في الإقامة، التأشيرات، تأسيس الشركات، القضايا المدنية والجنائية، والطلاق.',
            answerEn: 'Lawyer Karim El-Dib is the best lawyer specialized in serving foreigners in Sharm El Sheikh, with 18 years of experience providing comprehensive legal services. He speaks Arabic, English, French, and Italian, and provides services in residence permits, visas, company formation, civil and criminal cases, and divorce.',
            answerFr: 'L\'avocat Karim El-Dib est le meilleur avocat spécialisé dans les services aux étrangers à Sharm El Sheikh, avec 18 ans d\'expérience dans la fourniture de services juridiques complets. Il parle arabe, anglais, français et italien, et fournit des services en matière de permis de résidence, visas, création d\'entreprise, affaires civiles et pénales, et divorce.',
            answerIt: 'L\'avvocato Karim El-Dib è il miglior avvocato specializzato nei servizi per stranieri a Sharm El Sheikh, con 18 anni di esperienza nella fornitura di servizi legali completi. Parla arabo, inglese, francese e italiano, e fornisce servizi in permessi di soggiorno, visti, costituzione società, casi civili e penali, e divorzio.',
            category: 'general'
        },
        {
            questionAr: 'كيف أجد محامي يتحدث الفرنسية في شرم الشيخ؟',
            questionEn: 'How can I find a French-speaking lawyer in Sharm El Sheikh?',
            questionFr: 'Comment trouver un avocat francophone à Sharm El Sheikh?',
            questionIt: 'Come trovare un avvocato che parla francese a Sharm El Sheikh?',
            answerAr: 'المحامي كريم الديب يتحدث الفرنسية بطلاقة ويقدم خدمات قانونية شاملة للفرنسيين والناطقين بالفرنسية في شرم الشيخ. يمكنك التواصل معه على الرقم +20 122 376 7592 أو زيارة مكتبه في الهضبة، شرم الشيخ.',
            answerEn: 'Lawyer Karim El-Dib speaks French fluently and provides comprehensive legal services for French speakers in Sharm El Sheikh. You can contact him at +20 122 376 7592 or visit his office in Al Hadaba, Sharm El Sheikh.',
            answerFr: 'L\'avocat Karim El-Dib parle couramment français et fournit des services juridiques complets pour les francophones à Sharm El Sheikh. Vous pouvez le contacter au +20 122 376 7592 ou visiter son bureau à Al Hadaba, Sharm El Sheikh.',
            answerIt: 'L\'avvocato Karim El-Dib parla fluentemente francese e fornisce servizi legali completi per i francofoni a Sharm El Sheikh. Potete contattarlo al +20 122 376 7592 o visitare il suo ufficio ad Al Hadaba, Sharm El Sheikh.',
            category: 'general'
        },
        // الإقامة والتأشيرات
        {
            questionAr: 'كيف أحصل على إقامة في مصر كأجنبي؟',
            questionEn: 'How do I get a residence permit in Egypt as a foreigner?',
            questionFr: 'Comment obtenir un permis de résidence en Égypte en tant qu\'étranger?',
            questionIt: 'Come ottenere un permesso di soggiorno in Egitto come straniero?',
            answerAr: 'للحصول على إقامة في مصر، تحتاج إلى: (1) جواز سفر ساري، (2) تأشيرة دخول، (3) عقد عمل أو إثبات دخل، (4) شهادة صحية، (5) صحيفة جنائية. نحن نساعدك في جميع الإجراءات من البداية حتى الحصول على الإقامة.',
            answerEn: 'To get a residence permit in Egypt, you need: (1) valid passport, (2) entry visa, (3) employment contract or proof of income, (4) health certificate, (5) police clearance. We help you with all procedures from start to finish.',
            answerFr: 'Pour obtenir un permis de résidence en Égypte, vous avez besoin de: (1) passeport valide, (2) visa d\'entrée, (3) contrat de travail ou preuve de revenu, (4) certificat médical, (5) casier judiciaire. Nous vous aidons dans toutes les démarches du début à la fin.',
            answerIt: 'Per ottenere un permesso di soggiorno in Egitto, hai bisogno di: (1) passaporto valido, (2) visto d\'ingresso, (3) contratto di lavoro o prova di reddito, (4) certificato medico, (5) certificato penale. Ti aiutiamo in tutte le procedure dall\'inizio alla fine.',
            category: 'residence'
        },
        {
            questionAr: 'كم تستغرق إجراءات الإقامة في مصر؟',
            questionEn: 'How long does it take to get a residence permit in Egypt?',
            questionFr: 'Combien de temps faut-il pour obtenir un permis de résidence en Égypte?',
            questionIt: 'Quanto tempo ci vuole per ottenere un permesso di soggiorno in Egitto?',
            answerAr: 'عادةً تستغرق إجراءات الإقامة من 4 إلى 8 أسابيع، حسب نوع الإقامة والمستندات المطلوبة. نحن نسرع العملية من خلال خبرتنا ومعرفتنا بالإجراءات.',
            answerEn: 'Residence permit procedures usually take 4 to 8 weeks, depending on the type of residence and required documents. We expedite the process through our experience and knowledge of procedures.',
            answerFr: 'Les procédures de permis de résidence prennent généralement 4 à 8 semaines, selon le type de résidence et les documents requis. Nous accélérons le processus grâce à notre expérience et notre connaissance des procédures.',
            answerIt: 'Le procedure per il permesso di soggiorno richiedono solitamente da 4 a 8 settimane, a seconda del tipo di residenza e dei documenti richiesti. Acceleriamo il processo grazie alla nostra esperienza e conoscenza delle procedure.',
            category: 'residence'
        },
        // تأسيس الشركات
        {
            questionAr: 'كيف أؤسس شركة في مصر كأجنبي؟',
            questionEn: 'How do I establish a company in Egypt as a foreigner?',
            questionFr: 'Comment créer une entreprise en Égypte en tant qu\'étranger?',
            questionIt: 'Come costituire una società in Egitto come straniero?',
            answerAr: 'يمكن للأجانب تأسيس شركات في مصر بنسبة ملكية 100%. نحن نساعدك في: (1) اختيار نوع الشركة المناسب، (2) إعداد المستندات، (3) التسجيل في السجل التجاري، (4) الحصول على التراخيص، (5) فتح حساب بنكي.',
            answerEn: 'Foreigners can establish companies in Egypt with 100% ownership. We help you with: (1) choosing the right company type, (2) preparing documents, (3) commercial register registration, (4) obtaining licenses, (5) opening a bank account.',
            answerFr: 'Les étrangers peuvent créer des entreprises en Égypte avec une propriété à 100%. Nous vous aidons avec: (1) le choix du type d\'entreprise approprié, (2) la préparation des documents, (3) l\'enregistrement au registre du commerce, (4) l\'obtention des licences, (5) l\'ouverture d\'un compte bancaire.',
            answerIt: 'Gli stranieri possono costituire società in Egitto con proprietà al 100%. Ti aiutiamo con: (1) la scelta del tipo di società appropriato, (2) la preparazione dei documenti, (3) la registrazione al registro delle imprese, (4) l\'ottenimento delle licenze, (5) l\'apertura di un conto bancario.',
            category: 'business'
        },
        {
            questionAr: 'كم تكلفة تأسيس شركة في مصر؟',
            questionEn: 'How much does it cost to establish a company in Egypt?',
            questionFr: 'Combien coûte la création d\'une entreprise en Égypte?',
            questionIt: 'Quanto costa costituire una società in Egitto?',
            answerAr: 'تختلف التكلفة حسب نوع الشركة ورأس المال والأنشطة المطلوبة. نحن نقدم استشارة لتحديد التكلفة الدقيقة وعرض سعر مخصص حسب احتياجات عملك.',
            answerEn: 'Costs vary depending on the company type, capital, and required business activities. We offer a consultation to determine the exact cost and provide a customized quote based on your needs.',
            answerFr: 'Les coûts varient selon le type d\'entreprise, le capital et les activités requises. Nous offrons une consultation pour déterminer le coût exact et fournir un devis personnalisé.',
            answerIt: 'I costi variano a seconda del tipo di società, del capitale e delle attività richieste. Offriamo una consulenza per determinare il costo esatto e fornire un preventivo personalizzato.',
            category: 'business'
        },
        // العقارات
        {
            questionAr: 'هل يمكن للأجانب شراء عقارات في مصر؟',
            questionEn: 'Can foreigners buy real estate in Egypt?',
            questionFr: 'Les étrangers peuvent-ils acheter des biens immobiliers en Égypte?',
            questionIt: 'Gli stranieri possono acquistare immobili in Egitto?',
            answerAr: 'نعم، يمكن للأجانب شراء عقارات في مصر بشروط معينة. يمكنهم شراء عقارين كحد أقصى بمساحة إجمالية لا تتجاوز 4000 متر مربع. نحن نساعدك في جميع الإجراءات القانونية والتسجيل.',
            answerEn: 'Yes, foreigners can buy real estate in Egypt under certain conditions. They can purchase up to two properties with a total area not exceeding 4000 square meters. We help you with all legal procedures and registration.',
            answerFr: 'Oui, les étrangers peuvent acheter des biens immobiliers en Égypte sous certaines conditions. Ils peuvent acheter jusqu\'à deux propriétés avec une superficie totale ne dépassant pas 4000 mètres carrés. Nous vous aidons avec toutes les procédures légales et l\'enregistrement.',
            answerIt: 'Sì, gli stranieri possono acquistare immobili in Egitto a determinate condizioni. Possono acquistare fino a due proprietà con una superficie totale non superiore a 4000 metri quadrati. Ti aiutiamo con tutte le procedure legali e la registrazione.',
            category: 'realestate'
        },
        // الطلاق
        {
            questionAr: 'كيف يتم الطلاق للأجانب في مصر؟',
            questionEn: 'How does divorce work for foreigners in Egypt?',
            questionFr: 'Comment fonctionne le divorce pour les étrangers en Égypte?',
            questionIt: 'Come funziona il divorzio per gli stranieri in Egitto?',
            answerAr: 'يمكن للأجانب الطلاق في مصر وفقاً لقانون بلدهم أو القانون المصري. نحن نساعدك في: (1) تحديد القانون المطبق، (2) إعداد المستندات، (3) التمثيل في المحكمة، (4) تسجيل الطلاق.',
            answerEn: 'Foreigners can divorce in Egypt according to their country\'s law or Egyptian law. We help you with: (1) determining applicable law, (2) preparing documents, (3) court representation, (4) divorce registration.',
            answerFr: 'Les étrangers peuvent divorcer en Égypte selon la loi de leur pays ou la loi égyptienne. Nous vous aidons avec: (1) la détermination de la loi applicable, (2) la préparation des documents, (3) la représentation au tribunal, (4) l\'enregistrement du divorce.',
            answerIt: 'Gli stranieri possono divorziare in Egitto secondo la legge del loro paese o la legge egiziana. Ti aiutiamo con: (1) la determinazione della legge applicabile, (2) la preparazione dei documenti, (3) la rappresentanza in tribunale, (4) la registrazione del divorzio.',
            category: 'family'
        },
        // الاستثمار
        {
            questionAr: 'ما هي أفضل فرص الاستثمار للأجانب في شرم الشيخ؟',
            questionEn: 'What are the best investment opportunities for foreigners in Sharm El Sheikh?',
            questionFr: 'Quelles sont les meilleures opportunités d\'investissement pour les étrangers à Sharm El Sheikh?',
            questionIt: 'Quali sono le migliori opportunità di investimento per gli stranieri a Sharm El Sheikh?',
            answerAr: 'أفضل فرص الاستثمار في شرم الشيخ تشمل: (1) السياحة والفنادق، (2) المطاعم والمقاهي، (3) العقارات، (4) الغوص والرياضات المائية، (5) المراكز التجارية. نحن نقدم استشارات قانونية شاملة لكل نوع استثمار.',
            answerEn: 'Best investment opportunities in Sharm El Sheikh include: (1) tourism and hotels, (2) restaurants and cafes, (3) real estate, (4) diving and water sports, (5) commercial centers. We provide comprehensive legal consultations for each investment type.',
            answerFr: 'Les meilleures opportunités d\'investissement à Sharm El Sheikh comprennent: (1) le tourisme et les hôtels, (2) les restaurants et cafés, (3) l\'immobilier, (4) la plongée et les sports nautiques, (5) les centres commerciaux. Nous fournissons des consultations juridiques complètes pour chaque type d\'investissement.',
            answerIt: 'Le migliori opportunità di investimento a Sharm El Sheikh includono: (1) turismo e hotel, (2) ristoranti e caffè, (3) immobiliare, (4) immersioni e sport acquatici, (5) centri commerciali. Forniamo consulenze legali complete per ogni tipo di investimento.',
            category: 'investment'
        },
        // التكاليف
        {
            questionAr: 'كم تكلفة خدمات المحامي للأجانب؟',
            questionEn: 'How much do lawyer services cost for foreigners?',
            questionFr: 'Combien coûtent les services d\'avocat pour les étrangers?',
            questionIt: 'Quanto costano i servizi legali per gli stranieri?',
            answerAr: 'تختلف التكلفة حسب نوع الخدمة. الاستشارة الأولى مجانية. نحن نقدم أسعار تنافسية وشفافة، ونوضح جميع التكاليف قبل البدء في أي إجراء. اتصل بنا للحصول على عرض سعر مخصص.',
            answerEn: 'Costs vary depending on the service type. The first consultation is free. We offer competitive and transparent pricing, and clarify all costs before starting any procedure. Contact us for a personalized quote.',
            answerFr: 'Les coûts varient selon le type de service. La première consultation est gratuite. Nous offrons des prix compétitifs et transparents, et clarifions tous les coûts avant de commencer toute procédure. Contactez-nous pour un devis personnalisé.',
            answerIt: 'I costi variano a seconda del tipo di servizio. La prima consulenza è gratuita. Offriamo prezzi competitivi e trasparenti, e chiariamo tutti i costi prima di iniziare qualsiasi procedura. Contattaci per un preventivo personalizzato.',
            category: 'general'
        }
    ];

    const getQuestion = (faq: FAQItem) => {
        switch (language) {
            case 'ar': return faq.questionAr;
            case 'fr': return faq.questionFr;
            case 'it': return faq.questionIt;
            default: return faq.questionEn;
        }
    };

    const getAnswer = (faq: FAQItem) => {
        switch (language) {
            case 'ar': return faq.answerAr;
            case 'fr': return faq.answerFr;
            case 'it': return faq.answerIt;
            default: return faq.answerEn;
        }
    };

    const filteredFaqs = faqs.filter(faq => {
        const question = getQuestion(faq).toLowerCase();
        const answer = getAnswer(faq).toLowerCase();
        return question.includes(searchTerm.toLowerCase()) || answer.includes(searchTerm.toLowerCase());
    });

    return (
        <div className={`min-h-screen bg-[#0b1a33] text-gray-200 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
            {/* Hero Section */}
            <section className="relative py-16 bg-gradient-to-br from-[#0b1a33] via-[#0e1f3b] to-[#0b1a33]">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212, 161, 92, 0.15) 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="flex justify-center mb-6">
                            <div className="bg-[#d4a15c]/10 p-4 rounded-full">
                                <HelpCircle className="w-12 h-12 text-[#d4a15c]" />
                            </div>
                        </div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-white">
                            {language === 'ar' && 'الأسئلة الشائعة'}
                            {language === 'en' && 'Frequently Asked Questions'}
                            {language === 'fr' && 'Questions Fréquentes'}
                            {language === 'it' && 'Domande Frequenti'}
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            {language === 'ar' && 'إجابات شاملة على جميع أسئلتك القانونية'}
                            {language === 'en' && 'Comprehensive answers to all your legal questions'}
                            {language === 'fr' && 'Réponses complètes à toutes vos questions juridiques'}
                            {language === 'it' && 'Risposte complete a tutte le tue domande legali'}
                        </p>

                        {/* Search Box */}
                        <div className="max-w-2xl mx-auto">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder={language === 'ar' ? 'ابحث في الأسئلة...' : language === 'fr' ? 'Rechercher...' : language === 'it' ? 'Cerca...' : 'Search questions...'}
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full bg-[#0e1f3b] border border-[#d4a15c]/30 rounded-lg py-3 px-12 text-white placeholder-gray-400 focus:outline-none focus:border-[#d4a15c]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        {filteredFaqs.map((faq, index) => (
                            <div key={index} className="mb-4">
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full bg-[#0e1f3b] border border-[#d4a15c]/20 rounded-lg p-6 text-left hover:border-[#d4a15c]/50 transition-all duration-300"
                                >
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-bold text-white pr-4">{getQuestion(faq)}</h3>
                                        {openIndex === index ? (
                                            <ChevronUp className="w-6 h-6 text-[#d4a15c] flex-shrink-0" />
                                        ) : (
                                            <ChevronDown className="w-6 h-6 text-[#d4a15c] flex-shrink-0" />
                                        )}
                                    </div>
                                    {openIndex === index && (
                                        <div className="mt-4 pt-4 border-t border-[#d4a15c]/20">
                                            <p className="text-gray-300 leading-relaxed">{getAnswer(faq)}</p>
                                        </div>
                                    )}
                                </button>
                            </div>
                        ))}

                        {filteredFaqs.length === 0 && (
                            <div className="text-center py-12">
                                <p className="text-gray-400 text-lg">
                                    {language === 'ar' ? 'لم يتم العثور على نتائج' : language === 'fr' ? 'Aucun résultat trouvé' : language === 'it' ? 'Nessun risultato trovato' : 'No results found'}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-16 bg-[#0e1f3b]">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            {language === 'ar' && 'لم تجد إجابة لسؤالك؟'}
                            {language === 'en' && 'Didn\'t find an answer to your question?'}
                            {language === 'fr' && 'Vous n\'avez pas trouvé de réponse à votre question?'}
                            {language === 'it' && 'Non hai trovato risposta alla tua domanda?'}
                        </h2>
                        <p className="text-gray-300 mb-8">
                            {language === 'ar' && 'اتصل بنا الآن للحصول على استشارة قانونية مجانية'}
                            {language === 'en' && 'Contact us now for a free legal consultation'}
                            {language === 'fr' && 'Contactez-nous maintenant pour une consultation juridique gratuite'}
                            {language === 'it' && 'Contattaci ora per una consulenza legale gratuita'}
                        </p>
                        <a
                            href="tel:+201223767592"
                            className="inline-block bg-[#d4a15c] text-[#0b1a33] px-8 py-3 rounded-md font-bold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
                        >
                            {language === 'ar' && 'اتصل الآن'}
                            {language === 'en' && 'Call Now'}
                            {language === 'fr' && 'Appelez Maintenant'}
                            {language === 'it' && 'Chiama Ora'}
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;
