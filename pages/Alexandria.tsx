import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { MapPin, Phone, Mail, Clock, Users, Building2, FileText, Home, Briefcase, Heart, Gavel, Globe2, Award, Shield, Zap } from 'lucide-react';

const Alexandria: React.FC = () => {
    const { language, t } = useLanguage();
    const isRTL = language === 'ar';

    useEffect(() => {
        // SEO Meta Tags
        const title = language === 'ar'
            ? 'محامي قضايا أجانب في الإسكندرية | كريم الديب | أفضل محامي للمستثمرين الأجانب'
            : language === 'fr'
                ? 'Avocat pour Affaires d\'Étrangers à Alexandrie | Karim Eldib'
                : language === 'it'
                    ? 'Avvocato per Casi di Stranieri ad Alessandria | Karim Eldib'
                    : 'Lawyer for Foreigners Cases in Alexandria | Karim Eldib';

        const description = language === 'ar'
            ? 'أفضل مكتب محاماة للأجانب في الإسكندرية. خدمات قانونية متخصصة للمستثمرين الأجانب: تأسيس شركات، عقارات واستثمارات، إقامة وتأشيرات، قضايا مدنية وجنائية، طلاق وأحوال شخصية، قضايا عمالية. نتحدث الفرنسية والإيطالية والإنجليزية.'
            : language === 'fr'
                ? 'Meilleur cabinet d\'avocats pour étrangers à Alexandrie. Services juridiques pour investisseurs étrangers: création de sociétés, immobilier, résidence et visas, affaires civiles et pénales, divorce. Nous parlons français.'
                : language === 'it'
                    ? 'Miglior studio legale per stranieri ad Alessandria. Servizi legali per investitori stranieri: costituzione società, immobiliare, residenza e visti, casi civili e penali, divorzio. Parliamo italiano.'
                    : 'Best law firm for foreigners in Alexandria. Legal services for foreign investors: company formation, real estate, residence permits, civil and criminal cases, divorce. We speak French, Italian, English.';

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

    const services = [
        {
            icon: Globe2,
            titleAr: 'خدمات المستثمرين الأجانب',
            titleEn: 'Foreign Investors Services',
            titleFr: 'Services pour Investisseurs Étrangers',
            titleIt: 'Servizi per Investitori Stranieri',
            descAr: 'خدمات قانونية شاملة للمستثمرين الأجانب في مصر',
            descEn: 'Comprehensive legal services for foreign investors in Egypt',
            descFr: 'Services juridiques complets pour investisseurs étrangers en Égypte',
            descIt: 'Servizi legali completi per investitori stranieri in Egitto'
        },
        {
            icon: Building2,
            titleAr: 'تأسيس الشركات للأجانب',
            titleEn: 'Company Formation for Foreigners',
            titleFr: 'Création d\'Entreprise pour Étrangers',
            titleIt: 'Costituzione Società per Stranieri',
            descAr: 'تأسيس جميع أنواع الشركات للمستثمرين الأجانب',
            descEn: 'Formation of all types of companies for foreign investors',
            descFr: 'Création de tous types de sociétés pour investisseurs étrangers',
            descIt: 'Costituzione di tutti i tipi di società per investitori stranieri'
        },
        {
            icon: Home,
            titleAr: 'عقارات واستثمارات',
            titleEn: 'Real Estate & Investments',
            titleFr: 'Immobilier et Investissements',
            titleIt: 'Immobiliare e Investimenti',
            descAr: 'الاستثمار العقاري وشراء وبيع العقارات للأجانب',
            descEn: 'Real estate investment, purchase and sale for foreigners',
            descFr: 'Investissement immobilier, achat et vente pour étrangers',
            descIt: 'Investimento immobiliare, acquisto e vendita per stranieri'
        },
        {
            icon: FileText,
            titleAr: 'إقامة وتأشيرات',
            titleEn: 'Residence & Visas',
            titleFr: 'Résidence et Visas',
            titleIt: 'Residenza e Visti',
            descAr: 'استخراج وتجديد الإقامات والتأشيرات لجميع الجنسيات',
            descEn: 'Obtaining and renewing residence permits and visas',
            descFr: 'Obtention et renouvellement de permis de résidence et visas',
            descIt: 'Ottenimento e rinnovo di permessi di soggiorno e visti'
        },
        {
            icon: Gavel,
            titleAr: 'قضايا مدنية وجنائية',
            titleEn: 'Civil & Criminal Cases',
            titleFr: 'Affaires Civiles et Pénales',
            titleIt: 'Casi Civili e Penali',
            descAr: 'تمثيل قانوني في جميع القضايا المدنية والجنائية',
            descEn: 'Legal representation in all civil and criminal cases',
            descFr: 'Représentation juridique dans toutes les affaires civiles et pénales',
            descIt: 'Rappresentanza legale in tutti i casi civili e penali'
        },
        {
            icon: Heart,
            titleAr: 'طلاق وأحوال شخصية',
            titleEn: 'Divorce & Personal Status',
            titleFr: 'Divorce et Statut Personnel',
            titleIt: 'Divorzio e Stato Personale',
            descAr: 'قضايا الطلاق والخلع والنفقة والحضانة للأجانب',
            descEn: 'Divorce, alimony, and custody cases for foreigners',
            descFr: 'Divorce, pension alimentaire et garde pour étrangers',
            descIt: 'Divorzio, alimenti e custodia per stranieri'
        },
        {
            icon: Briefcase,
            titleAr: 'قضايا عمالية وتجارية',
            titleEn: 'Labor & Commercial Cases',
            titleFr: 'Affaires du Travail et Commerciales',
            titleIt: 'Casi di Lavoro e Commerciali',
            descAr: 'قضايا العمل والنزاعات التجارية والتعويضات',
            descEn: 'Labor disputes, commercial litigation, and compensation',
            descFr: 'Litiges du travail, contentieux commercial et indemnisation',
            descIt: 'Controversie di lavoro, contenzioso commerciale e compensazione'
        },
        {
            icon: Users,
            titleAr: 'استشارات قانونية',
            titleEn: 'Legal Consultations',
            titleFr: 'Consultations Juridiques',
            titleIt: 'Consulenze Legali',
            descAr: 'استشارات قانونية متخصصة للأجانب والمستثمرين',
            descEn: 'Specialized legal consultations for foreigners and investors',
            descFr: 'Consultations juridiques spécialisées pour étrangers et investisseurs',
            descIt: 'Consulenze legali specializzate per stranieri e investitori'
        }
    ];

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
                    <div className="max-w-4xl mx-auto">
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

            {/* Services Section */}
            <section className="py-16 bg-[#0e1f3b]">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                        {language === 'ar' && 'خدماتنا القانونية في الإسكندرية'}
                        {language === 'en' && 'Our Legal Services in Alexandria'}
                        {language === 'fr' && 'Nos Services Juridiques à Alexandrie'}
                        {language === 'it' && 'I Nostri Servizi Legali ad Alessandria'}
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {services.map((service, index) => (
                            <div key={index} className="bg-[#0b1a33] rounded-lg p-6 border border-[#d4a15c]/20 hover:border-[#d4a15c]/50 transition-all duration-300 hover:transform hover:scale-105">
                                <div className="flex items-center mb-4">
                                    <div className="bg-[#d4a15c]/10 p-3 rounded-lg">
                                        <service.icon className="w-7 h-7 text-[#d4a15c]" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{getTitle(service)}</h3>
                                <p className="text-gray-400 leading-relaxed">{getDesc(service)}</p>
                            </div>
                        ))}
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

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                    <div className="max-w-4xl mx-auto bg-[#0b1a33] rounded-lg p-8 border border-[#d4a15c]/20">
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
