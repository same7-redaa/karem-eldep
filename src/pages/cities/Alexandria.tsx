import React, { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { MapPin, Phone, Mail, Clock, Globe2, Award, Shield, Zap } from 'lucide-react';
import PracticeAreas from '../../components/PracticeAreas';

const Alexandria: React.FC = () => {
    const { language, t } = useLanguage();
    const isRTL = language === 'ar';

    useEffect(() => {
        // SEO Meta Tags
        const title = language === 'ar'
            ? 'محامي تحكيم دولي وقضايا أجانب في الإسكندرية | كريم الديب'
            : language === 'fr'
                ? 'Avocat Arbitrage International & Étrangers à Alexandrie | Karim Eldib'
                : language === 'it'
                    ? 'Avvocato Arbitrato Internazionale e Stranieri ad Alessandria | Karim Eldib'
                    : 'International Arbitration & Foreigners Lawyer in Alexandria | Karim Eldib';

        const description = language === 'ar'
            ? 'أفضل مكتب محاماة للتحكيم الدولي وقضايا الأجانب في الإسكندرية. خدمات قانونية متخصصة: تسوية المنازعات التجارية والاستثمارية، تأسيس شركات، عقارات واستثمارات، إقامة وتأشيرات. نتحدث الفرنسية والإيطالية والإنجليزية.'
            : language === 'fr'
                ? 'Meilleur cabinet d\'avocats pour l\'arbitrage international et les étrangers à Alexandrie. Services juridiques : règlement des litiges commerciaux, création d\'entreprises, immobilier et visas. Nous parlons français.'
                : language === 'it'
                    ? 'Miglior studio legale per l\'arbitrato internazionale e gli stranieri ad Alessandria. Servizi legali: risoluzione delle controversie commerciali, costituzione di società, immobili e visti. Parliamo italiano.'
                    : 'Best law firm for international arbitration and foreigners in Alexandria. Specialized legal services: commercial & investment dispute resolution, company formation, real estate, and residency permits. We speak English, French, Italian.';

        document.title = title;

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description);
        }

        // Schema Markup
        const schema = {
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": language === 'ar' ? "مكتب المحامي كريم الديب - الإسكندرية (المكتب الرئيسي)" : "Karim El-Dib Law Office - Alexandria (Main Office)",
            "description": description,
            "address": {
                "@type": "PostalAddress",
                "streetAddress": language === 'ar' ? "14 شارع الشهداء" : "14 El Shohada Street",
                "addressLocality": "Alexandria",
                "addressRegion": "Alexandria",
                "addressCountry": "EG"
            },
            "telephone": "+20-122-376-7592",
            "email": "kingarim2411@gmail.com",
            "url": "https://ke-lawyer.com/alexandria",
            "priceRange": "$$",
            "areaServed": {
                "@type": "City",
                "name": "Alexandria"
            },
            "knowsLanguage": ["ar", "en", "fr", "it"],
            "serviceType": [
                language === 'ar' ? "خدمات قانونية للمستثمرين الأجانب" : "Legal Services for Foreign Investors",
                language === 'ar' ? "تأسيس شركات للأجانب" : "Company Formation for Foreigners",
                language === 'ar' ? "عقارات واستثمارات" : "Real Estate and Investments",
                language === 'ar' ? "إقامة وتأشيرات" : "Residence Permits and Visas",
                language === 'ar' ? "قضايا مدنية وجنائية" : "Civil and Criminal Cases",
                language === 'ar' ? "طلاق وأحوال شخصية" : "Divorce and Personal Status",
                language === 'ar' ? "قضايا عمالية وتجارية" : "Labor and Commercial Cases"
            ]
        };

        const scriptTag = document.createElement('script');
        scriptTag.type = 'application/ld+json';
        scriptTag.text = JSON.stringify(schema);
        document.head.appendChild(scriptTag);

        return () => {
            document.head.removeChild(scriptTag);
        };
    }, [language]);


    const features = [
        {
            icon: Award,
            titleAr: 'خبرة 18 عاماً',
            titleEn: '18 Years of Experience',
            titleFr: '18 Ans d\'Expérience',
            titleIt: '18 Anni di Esperienza',
            descAr: 'خبرة طويلة في خدمة الأجانب والمستثمرين',
            descEn: 'Long experience serving foreigners and investors',
            descFr: 'Longue expérience au service des étrangers et investisseurs',
            descIt: 'Lunga esperienza al servizio di stranieri e investitori'
        },
        {
            icon: Globe2,
            titleAr: '4 لغات',
            titleEn: '4 Languages',
            titleFr: '4 Langues',
            titleIt: '4 Lingue',
            descAr: 'نتحدث العربية والإنجليزية والفرنسية والإيطالية',
            descEn: 'We speak Arabic, English, French and Italian',
            descFr: 'Nous parlons arabe, anglais, français et italien',
            descIt: 'Parliamo arabo, inglese, francese e italiano'
        },
        {
            icon: Shield,
            titleAr: 'خدمات شاملة',
            titleEn: 'Comprehensive Services',
            titleFr: 'Services Complets',
            titleIt: 'Servizi Completi',
            descAr: 'جميع الخدمات القانونية للأجانب في مكان واحد',
            descEn: 'All legal services for foreigners in one place',
            descFr: 'Tous les services juridiques pour étrangers en un seul endroit',
            descIt: 'Tutti i servizi legali per stranieri in un unico posto'
        }
    ];

    const languages = [
        { icon: Globe2, name: 'Français' },
        { icon: Globe2, name: 'Italiano' },
        { icon: Globe2, name: 'English' },
        { icon: Globe2, name: 'العربية' }
    ];

    const getTitle = (item: any) => {
        switch (language) {
            case 'ar': return item.titleAr;
            case 'fr': return item.titleFr;
            case 'it': return item.titleIt;
            default: return item.titleEn;
        }
    };

    const getDesc = (item: any) => {
        switch (language) {
            case 'ar': return item.descAr;
            case 'fr': return item.descFr;
            case 'it': return item.descIt;
            default: return item.descEn;
        }
    };

    return (
        <div className={`min-h-screen bg-[#0b1a33] text-gray-200 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0b1a33] via-[#0e1f3b] to-[#0b1a33]"></div>
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212, 161, 92, 0.15) 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-4">
                            <span className="inline-flex items-center gap-2 bg-[#d4a15c] text-[#0b1a33] px-4 py-2 rounded-full font-bold text-sm">
                                <Award className="w-4 h-4" />
                                {language === 'ar' ? 'المكتب الرئيسي' : language === 'fr' ? 'Bureau Principal' : language === 'it' ? 'Ufficio Principale' : 'Main Office'}
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-white">
                            {language === 'ar' && 'محامي قضايا أجانب في الإسكندرية'}
                            {language === 'en' && 'Lawyer for Foreigners Cases in Alexandria'}
                            {language === 'fr' && 'Avocat pour Affaires d\'Étrangers à Alexandrie'}
                            {language === 'it' && 'Avvocato per Casi di Stranieri ad Alessandria'}
                        </h1>
                        <p className="text-xl md:text-2xl mb-6 text-[#d4a15c] font-medium">
                            {language === 'ar' && 'مكتب المحامي كريم الديب - متخصصون في خدمة المستثمرين الأجانب'}
                            {language === 'en' && 'Karim El-Dib Law Office - Specialists in Serving Foreign Investors'}
                            {language === 'fr' && 'Cabinet Karim El-Dib - Spécialistes au Service des Investisseurs Étrangers'}
                            {language === 'it' && 'Studio Karim El-Dib - Specialisti al Servizio degli Investitori Stranieri'}
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {languages.map((lang, index) => (
                                <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-[#d4a15c]/30">
                                    <lang.icon className="w-4 h-4 text-[#d4a15c]" />
                                    <span className="text-sm font-medium">{lang.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <PracticeAreas />

            {/* تفصيل الخدمات القانونية في الإسكندرية */}
            <section className="py-16 bg-[#1a2d4d]/30 border-t border-b border-[#d4a15c]/10">
                <div className="container mx-auto px-4 max-w-7xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#d4a15c]">
                        {language === 'ar' ? 'تفاصيل نطاق خدماتنا القانونية في الإسكندرية (المكتب الرئيسي)' : language === 'fr' ? 'Détails de nos Services Juridiques à Alexandrie (Bureau Principal)' : language === 'it' ? 'Dettagli dei Nostri Servizi Legali ad Alessandria (Ufficio Principale)' : 'Detailed Legal Services Scope in Alexandria (Main Office)'}
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300 leading-relaxed text-sm md:text-base">
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-bold text-[#d4a15c] mb-2 flex items-center gap-2">
                                    <i className="fas fa-ship"></i>
                                    {language === 'ar' ? 'القانون التجاري والبحري وتأسيس الشركات' : language === 'fr' ? 'Droit Commercial, Maritime & Sociétés' : language === 'it' ? 'Diritto Commerciale, Marittimo e Società' : 'Commercial, Maritime & Corporate Law'}
                                </h3>
                                <p>
                                    {language === 'ar' 
                                        ? 'بصفتها الميناء الرئيسي لمصر، فإن مكتبنا بالإسكندرية يتخصص في القانون البحري، ومنازعات الشحن والجمارك، وعقود النقل، بجانب تأسيس وهيكلة الشركات الاستثمارية للشركاء المحليين والأجانب، والحصول على التراخيص التجارية والصناعية اللازمة.'
                                        : language === 'fr'
                                        ? 'En tant que principal port d\'Égypte, notre bureau d\'Alexandrie est spécialisé en droit maritime, litiges de transport et douanes, ainsi que dans la création de sociétés d\'investissement.'
                                        : language === 'it'
                                        ? 'Essendo il porto principale dell\'Egitto, il nostro ufficio di Alessandria è specializzato in diritto marittimo, controversie di spedizione e doganali, nonché nella costituzione di società.'
                                        : 'As Egypt\'s primary port, our Alexandria main office specializes in maritime law, shipping and customs disputes, and transport agreements, alongside company formation and commercial licensing.'}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-[#d4a15c] mb-2 flex items-center gap-2">
                                    <i className="fas fa-gavel"></i>
                                    {language === 'ar' ? 'محامي تحكيم دولي في الإسكندرية وتسوية النزاعات' : language === 'fr' ? 'Avocat d\'Arbitrage International à Alexandrie' : language === 'it' ? 'Avvocato Arbitrato Internazionale ad Alessandria' : 'Arbitration Lawyer & Dispute Resolution in Alexandria'}
                                </h3>
                                <p>
                                    {language === 'ar' 
                                        ? 'يقدم مكتبنا تمثيلاً قانونياً متكاملاً كـ محامي تحكيم دولي في الإسكندرية. نوفر خدمات صياغة اتفاقيات التحكيم، وإدارة إجراءات الوساطة والتفاوض لتسوية المنازعات التجارية والاستثمارية ودياً للشركات، بالإضافة للتمثيل أمام مراكز التحكيم الإقليمية والدولية.'
                                        : language === 'fr'
                                        ? 'Nous agissons comme avocat d\'arbitrage international à Alexandrie, fournissant des services de médiation, de rédaction d\'accords d\'arbitrage et de représentation devant les tribunaux.'
                                        : language === 'it'
                                        ? 'Agiamo come avvocato arbitro internazionale ad Alessandria, fornendo servizi di mediazione, redazione di accordi arbitrali e rappresentanza presso tribunali.'
                                        : 'We act as a specialized international arbitration lawyer in Alexandria, providing drafting of arbitration agreements, commercial mediation, dispute resolution, and legal representation before arbitral tribunals.'}
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-bold text-[#d4a15c] mb-2 flex items-center gap-2">
                                    <i className="fas fa-users"></i>
                                    {language === 'ar' ? 'خدمات الأجانب والمغتربين والأحوال الشخصية' : language === 'fr' ? 'Services Étrangers, Expatriés & Statut Personnel' : language === 'it' ? 'Servizi Stranieri, Espatriati e Stato Personale' : 'Foreigners, Expats & Family Law'}
                                </h3>
                                <p>
                                    {language === 'ar' 
                                        ? 'يتخصص مكتبنا الرئيسي في إنهاء إجراءات زواج الأجانب وتوثيقها بوزارة العدل بالإسكندرية، ومساعدة المغتربين المصريين في تسييل التركات وإدارة الممتلكات وحل نزاعات الميراث، بجانب تملك العقارات للأجانب وتراخيص الإقامة.'
                                        : language === 'fr'
                                        ? 'Nous gérons les mariages d\'étrangers à Alexandrie, aidons les expatriés à liquider les successions et à gérer les biens, et conseillons sur l\'acquisition de biens par des étrangers.'
                                        : language === 'it'
                                        ? 'Gestiamo matrimoni di stranieri ad Alessandria, assistiamo gli espatriati a liquidare eredità e gestire beni, e consigliamo sull\'acquisto di proprietà.'
                                        : 'Our main office handles foreign marriages at the Alexandria Notary, assists expats in inheritance liquidation and property management, and secures expat residence and property deeds.'}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-[#d4a15c] mb-2 flex items-center gap-2">
                                    <i className="fas fa-balance-scale"></i>
                                    {language === 'ar' ? 'التقاضي المدني والدفاع الجنائي' : language === 'fr' ? 'Litige Civil & Défense Pénale' : language === 'it' ? 'Contenzioso Civile e Difesa Penale' : 'Civil Litigation & Criminal Defense'}
                                </h3>
                                <p>
                                    {language === 'ar' 
                                        ? 'نمثل الموكلين أمام محاكم الإسكندرية في القضايا المدنية، والنزاعات العقارية، ومطالبات التعويضات. كما نوفر دفاعاً جنائياً قوياً وفعالاً للأجانب والمصريين في مختلف القضايا الجنائية والمالية.'
                                        : language === 'fr'
                                        ? 'Nous représentons les clients devant les tribunaux d\'Alexandrie pour les affaires civiles, immobilières et d\'indemnisation, ainsi qu\'en défense pénale.'
                                        : language === 'it'
                                        ? 'Rappresentiamo i clienti presso i tribunali di Alessandria per cause civili, immobiliari e di risarcimento, nonché in difesa penale.'
                                        : 'We represent clients before Alexandria courts in civil, real estate and damage claims, alongside providing robust criminal defense for both expats and locals.'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 bg-[#0b1a33]">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                        {language === 'ar' && 'لماذا تختار مكتبنا في الإسكندرية؟'}
                        {language === 'en' && 'Why Choose Our Office in Alexandria?'}
                        {language === 'fr' && 'Pourquoi Choisir Notre Cabinet à Alexandrie?'}
                        {language === 'it' && 'Perché Scegliere il Nostro Studio ad Alessandria?'}
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-[#0e1f3b] rounded-lg p-6 border border-[#d4a15c]/20 text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="bg-[#d4a15c]/10 p-4 rounded-full">
                                        <feature.icon className="w-8 h-8 text-[#d4a15c]" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{getTitle(feature)}</h3>
                                <p className="text-gray-400">{getDesc(feature)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 bg-[#0e1f3b]">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto bg-[#0b1a33] rounded-lg p-8 border border-[#d4a15c]/20">
                        <h2 className="text-3xl font-bold text-center mb-8 text-white">
                            {language === 'ar' && 'اتصل بمكتبنا الرئيسي في الإسكندرية'}
                            {language === 'en' && 'Contact Our Main Office in Alexandria'}
                            {language === 'fr' && 'Contactez Notre Bureau Principal à Alexandrie'}
                            {language === 'it' && 'Contatta il Nostro Ufficio Principale ad Alessandria'}
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-[#d4a15c]/10 p-3 rounded-lg flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-[#d4a15c]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white mb-2">
                                        {language === 'ar' ? 'العنوان' : language === 'fr' ? 'Adresse' : language === 'it' ? 'Indirizzo' : 'Address'}
                                    </h3>
                                    <p className="text-gray-400">
                                        {language === 'ar' ? '14 شارع الشهداء، الإسكندرية' : '14 El Shohada Street, Alexandria'}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-[#d4a15c]/10 p-3 rounded-lg flex-shrink-0">
                                    <Phone className="w-6 h-6 text-[#d4a15c]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white mb-2">
                                        {language === 'ar' ? 'الهاتف' : language === 'fr' ? 'Téléphone' : language === 'it' ? 'Telefono' : 'Phone'}
                                    </h3>
                                    <a href="tel:+201223767592" className="text-[#d4a15c] hover:text-[#c8a876] font-semibold transition-colors">
                                        +20 122 376 7592
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-[#d4a15c]/10 p-3 rounded-lg flex-shrink-0">
                                    <Mail className="w-6 h-6 text-[#d4a15c]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white mb-2">
                                        {language === 'ar' ? 'البريد الإلكتروني' : language === 'fr' ? 'Email' : language === 'it' ? 'Email' : 'Email'}
                                    </h3>
                                    <a href="mailto:kingarim2411@gmail.com" className="text-[#d4a15c] hover:text-[#c8a876] transition-colors">
                                        kingarim2411@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-[#d4a15c]/10 p-3 rounded-lg flex-shrink-0">
                                    <Clock className="w-6 h-6 text-[#d4a15c]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white mb-2">
                                        {language === 'ar' ? 'ساعات العمل' : language === 'fr' ? 'Horaires' : language === 'it' ? 'Orari' : 'Working Hours'}
                                    </h3>
                                    <p className="text-gray-400">
                                        {language === 'ar' ? 'السبت - الخميس: 9:00 - 17:00' : 'Saturday - Thursday: 9:00 AM - 5:00 PM'}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <a
                                href="tel:+201223767592"
                                className="inline-block bg-[#d4a15c] text-[#0b1a33] px-8 py-3 rounded-md font-bold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
                            >
                                {language === 'ar' && 'احجز استشارة الآن'}
                                {language === 'en' && 'Book a Consultation Now'}
                                {language === 'fr' && 'Réserver une Consultation'}
                                {language === 'it' && 'Prenota una Consulenza'}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Alexandria;
