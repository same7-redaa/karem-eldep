import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { MapPin, Phone, Mail, Clock, Users, Building2, FileText, Home, Briefcase, Heart, Gavel, Globe2 } from 'lucide-react';

const SharmElSheikh: React.FC = () => {
    const { language, t } = useLanguage();
    const isRTL = language === 'ar';

    useEffect(() => {
        // SEO Meta Tags
        const title = language === 'ar'
            ? 'محامي أجانب في شرم الشيخ | كريم الديب | أفضل محامي للأجانب'
            : language === 'fr'
                ? 'Avocat pour Étrangers à Sharm El Sheikh | Karim Eldib'
                : language === 'it'
                    ? 'Avvocato per Stranieri a Sharm El Sheikh | Karim Eldib'
                    : 'Lawyer for Foreigners in Sharm El Sheikh | Karim Eldib';

        const description = language === 'ar'
            ? 'أفضل محامي أجانب في شرم الشيخ. خدمات قانونية متخصصة: إقامة وتأشيرات، تأسيس شركات، قضايا مدنية وجنائية، طلاق وأحوال شخصية، عقارات واستثمارات. نتحدث الفرنسية والإيطالية والإنجليزية.'
            : language === 'fr'
                ? 'Meilleur avocat pour étrangers à Sharm El Sheikh. Services juridiques: résidence et visas, création de sociétés, affaires civiles et pénales, divorce, immobilier. Nous parlons français.'
                : language === 'it'
                    ? 'Miglior avvocato per stranieri a Sharm El Sheikh. Servizi legali: residenza e visti, costituzione società, casi civili e penali, divorzio, immobiliare. Parliamo italiano.'
                    : 'Best lawyer for foreigners in Sharm El Sheikh. Legal services: residence permits, company formation, civil and criminal cases, divorce, real estate. We speak French, Italian, English.';

        document.title = title;

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description);
        }

        // Schema Markup
        const schema = {
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": language === 'ar' ? "مكتب المحامي كريم الديب - شرم الشيخ" : "Karim El-Dib Law Office - Sharm El Sheikh",
            "description": description,
            "address": {
                "@type": "PostalAddress",
                "streetAddress": language === 'ar' ? "الهضبة" : "Al Hadaba",
                "addressLocality": "Sharm El Sheikh",
                "addressRegion": "South Sinai",
                "addressCountry": "EG"
            },
            "telephone": "+20-122-376-7592",
            "email": "kingarim2411@gmail.com",
            "url": "https://ke-lawyer.com/sharm-el-sheikh",
            "priceRange": "$$",
            "areaServed": {
                "@type": "City",
                "name": "Sharm El Sheikh"
            },
            "knowsLanguage": ["ar", "en", "fr", "it"],
            "serviceType": [
                language === 'ar' ? "خدمات قانونية للأجانب" : "Legal Services for Foreigners",
                language === 'ar' ? "إقامة وتأشيرات" : "Residence Permits and Visas",
                language === 'ar' ? "تأسيس شركات" : "Company Formation",
                language === 'ar' ? "قضايا مدنية وجنائية" : "Civil and Criminal Cases",
                language === 'ar' ? "طلاق وأحوال شخصية" : "Divorce and Personal Status",
                language === 'ar' ? "عقارات واستثمارات" : "Real Estate and Investments"
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
            icon: Users,
            titleAr: 'خدمات الأجانب',
            titleEn: 'Foreigners Services',
            titleFr: 'Services pour Étrangers',
            titleIt: 'Servizi per Stranieri',
            descAr: 'خدمات قانونية شاملة للأجانب المقيمين في شرم الشيخ',
            descEn: 'Comprehensive legal services for foreigners residing in Sharm El Sheikh',
            descFr: 'Services juridiques complets pour les étrangers résidant à Sharm El Sheikh',
            descIt: 'Servizi legali completi per stranieri residenti a Sharm El Sheikh'
        },
        {
            icon: FileText,
            titleAr: 'إقامة وتأشيرات',
            titleEn: 'Residence & Visas',
            titleFr: 'Résidence et Visas',
            titleIt: 'Residenza e Visti',
            descAr: 'استخراج وتجديد الإقامات والتأشيرات لجميع الجنسيات',
            descEn: 'Obtaining and renewing residence permits and visas for all nationalities',
            descFr: 'Obtention et renouvellement de permis de résidence et visas',
            descIt: 'Ottenimento e rinnovo di permessi di soggiorno e visti'
        },
        {
            icon: Building2,
            titleAr: 'تأسيس الشركات',
            titleEn: 'Company Formation',
            titleFr: 'Création d\'Entreprise',
            titleIt: 'Costituzione Società',
            descAr: 'تأسيس الشركات للمستثمرين الأجانب في مصر',
            descEn: 'Company formation for foreign investors in Egypt',
            descFr: 'Création de sociétés pour investisseurs étrangers en Égypte',
            descIt: 'Costituzione di società per investitori stranieri in Egitto'
        },
        {
            icon: Gavel,
            titleAr: 'قضايا مدنية وجنائية',
            titleEn: 'Civil & Criminal Cases',
            titleFr: 'Affaires Civiles et Pénales',
            titleIt: 'Casi Civili e Penali',
            descAr: 'تمثيل قانوني في القضايا المدنية والجنائية',
            descEn: 'Legal representation in civil and criminal cases',
            descFr: 'Représentation juridique dans les affaires civiles et pénales',
            descIt: 'Rappresentanza legale in casi civili e penali'
        },
        {
            icon: Heart,
            titleAr: 'طلاق وأحوال شخصية',
            titleEn: 'Divorce & Personal Status',
            titleFr: 'Divorce et Statut Personnel',
            titleIt: 'Divorzio e Stato Personale',
            descAr: 'قضايا الطلاق والخلع والنفقة والحضانة للأجانب',
            descEn: 'Divorce, alimony, and custody cases for foreigners',
            descFr: 'Divorce, pension alimentaire et garde d\'enfants pour étrangers',
            descIt: 'Divorzio, alimenti e custodia per stranieri'
        },
        {
            icon: Home,
            titleAr: 'عقارات واستثمارات',
            titleEn: 'Real Estate & Investments',
            titleFr: 'Immobilier et Investissements',
            titleIt: 'Immobiliare e Investimenti',
            descAr: 'شراء وبيع العقارات والاستثمار العقاري للأجانب',
            descEn: 'Real estate purchase, sale, and investment for foreigners',
            descFr: 'Achat, vente et investissement immobilier pour étrangers',
            descIt: 'Acquisto, vendita e investimento immobiliare per stranieri'
        },
        {
            icon: Briefcase,
            titleAr: 'قضايا عمالية',
            titleEn: 'Labor Cases',
            titleFr: 'Affaires du Travail',
            titleIt: 'Casi di Lavoro',
            descAr: 'قضايا العمل والتعويضات للعمال الأجانب',
            descEn: 'Labor disputes and compensation for foreign workers',
            descFr: 'Litiges du travail et indemnisation pour travailleurs étrangers',
            descIt: 'Controversie di lavoro e compensazione per lavoratori stranieri'
        }
    ];

    const languages = [
        { icon: Globe2, name: 'Français', flag: '🇫🇷' },
        { icon: Globe2, name: 'Italiano', flag: '🇮🇹' },
        { icon: Globe2, name: 'English', flag: '🇬🇧' },
        { icon: Globe2, name: 'العربية', flag: '🇸🇦' }
    ];

    const getTitle = (service: any) => {
        switch (language) {
            case 'ar': return service.titleAr;
            case 'fr': return service.titleFr;
            case 'it': return service.titleIt;
            default: return service.titleEn;
        }
    };

    const getDesc = (service: any) => {
        switch (language) {
            case 'ar': return service.descAr;
            case 'fr': return service.descFr;
            case 'it': return service.descIt;
            default: return service.descEn;
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
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-white">
                            {language === 'ar' && 'محامي أجانب في شرم الشيخ'}
                            {language === 'en' && 'Lawyer for Foreigners in Sharm El Sheikh'}
                            {language === 'fr' && 'Avocat pour Étrangers à Sharm El Sheikh'}
                            {language === 'it' && 'Avvocato per Stranieri a Sharm El Sheikh'}
                        </h1>
                        <p className="text-xl md:text-2xl mb-6 text-[#d4a15c] font-medium">
                            {language === 'ar' && 'المحامي كريم الديب - خبرة 18 عاماً في خدمة الأجانب'}
                            {language === 'en' && 'Lawyer Karim El-Dib - 18 Years of Experience Serving Foreigners'}
                            {language === 'fr' && 'Avocat Karim El-Dib - 18 Ans d\'Expérience au Service des Étrangers'}
                            {language === 'it' && 'Avvocato Karim El-Dib - 18 Anni di Esperienza al Servizio degli Stranieri'}
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
                        {language === 'ar' && 'خدماتنا القانونية في شرم الشيخ'}
                        {language === 'en' && 'Our Legal Services in Sharm El Sheikh'}
                        {language === 'fr' && 'Nos Services Juridiques à Sharm El Sheikh'}
                        {language === 'it' && 'I Nostri Servizi Legali a Sharm El Sheikh'}
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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

            {/* Contact Section */}
            <section className="py-16 bg-[#0b1a33]">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-[#0e1f3b] rounded-lg p-8 border border-[#d4a15c]/20">
                        <h2 className="text-3xl font-bold text-center mb-8 text-white">
                            {language === 'ar' && 'اتصل بنا في شرم الشيخ'}
                            {language === 'en' && 'Contact Us in Sharm El Sheikh'}
                            {language === 'fr' && 'Contactez-nous à Sharm El Sheikh'}
                            {language === 'it' && 'Contattaci a Sharm El Sheikh'}
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
                                        {language === 'ar' ? 'الهضبة، شرم الشيخ' : 'Al Hadaba, Sharm El Sheikh'}
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

export default SharmElSheikh;
