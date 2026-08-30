import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Award, Users, Globe2, Scale, Heart, Target, CheckCircle, TrendingUp } from 'lucide-react';

const AboutUs: React.FC = () => {
    const { language } = useLanguage();
    const isRTL = language === 'ar';

    useEffect(() => {
        // SEO Meta Tags
        const title = language === 'ar'
            ? 'من نحن | المحامي كريم الديب | 18 عاماً من الخبرة في خدمة الأجانب'
            : language === 'fr'
                ? 'À Propos | Avocat Karim Eldib | 18 Ans d\'Expérience'
                : language === 'it'
                    ? 'Chi Siamo | Avvocato Karim Eldib | 18 Anni di Esperienza'
                    : 'About Us | Lawyer Karim El-Dib | 18 Years of Experience';

        const description = language === 'ar'
            ? 'تعرف على المحامي كريم الديب، صاحب 18 عاماً من الخبرة المتخصصة في خدمة الأجانب والمستثمرين في مصر. مكتب محاماة دولي يتحدث 4 لغات ويقدم خدمات قانونية شاملة في شرم الشيخ والإسكندرية.'
            : language === 'fr'
                ? 'Découvrez l\'avocat Karim El-Dib, 18 ans d\'expérience spécialisée dans les services aux étrangers et investisseurs en Égypte. Cabinet d\'avocats international parlant 4 langues.'
                : language === 'it'
                    ? 'Scopri l\'avvocato Karim El-Dib, 18 anni di esperienza specializzata nei servizi per stranieri e investitori in Egitto. Studio legale internazionale che parla 4 lingue.'
                    : 'Meet Lawyer Karim El-Dib, 18 years of specialized experience serving foreigners and investors in Egypt. International law firm speaking 4 languages.';

        document.title = title;

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description);
        }

        // Organization Schema Markup
        const schema = {
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": language === 'ar' ? "مؤسسة كريم الديب للمحاماة الدولية" : "Karim El-Dib International Law Firm",
            "description": description,
            "founder": {
                "@type": "Person",
                "name": "Karim El-Dib",
                "jobTitle": language === 'ar' ? "محامي ومستشار قانوني" : "Lawyer and Legal Consultant",
                "knowsLanguage": ["ar", "en", "fr", "it"]
            },
            "foundingDate": "2006",
            "areaServed": ["EG"],
            "address": [
                {
                    "@type": "PostalAddress",
                    "streetAddress": "14 El Shohada Street",
                    "addressLocality": "Alexandria",
                    "addressCountry": "EG"
                },
                {
                    "@type": "PostalAddress",
                    "streetAddress": "Al Hadaba",
                    "addressLocality": "Sharm El Sheikh",
                    "addressCountry": "EG"
                }
            ],
            "telephone": "+20-122-376-7592",
            "email": "kingarim2411@gmail.com",
            "url": "https://ke-lawyer.com"
        };

        const scriptTag = document.createElement('script');
        scriptTag.type = 'application/ld+json';
        scriptTag.text = JSON.stringify(schema);
        document.head.appendChild(scriptTag);

        return () => {
            document.head.removeChild(scriptTag);
        };
    }, [language]);

    const stats = [
        {
            icon: Award,
            number: '18',
            labelAr: 'عاماً من الخبرة',
            labelEn: 'Years of Experience',
            labelFr: 'Ans d\'Expérience',
            labelIt: 'Anni di Esperienza'
        },
        {
            icon: Users,
            number: '1000+',
            labelAr: 'عميل راضٍ',
            labelEn: 'Satisfied Clients',
            labelFr: 'Clients Satisfaits',
            labelIt: 'Clienti Soddisfatti'
        },
        {
            icon: Globe2,
            number: '4',
            labelAr: 'لغات',
            labelEn: 'Languages',
            labelFr: 'Langues',
            labelIt: 'Lingue'
        },
        {
            icon: Scale,
            number: '95%',
            labelAr: 'نسبة النجاح',
            labelEn: 'Success Rate',
            labelFr: 'Taux de Réussite',
            labelIt: 'Tasso di Successo'
        }
    ];

    const values = [
        {
            icon: Heart,
            titleAr: 'الالتزام بالعميل',
            titleEn: 'Client Commitment',
            titleFr: 'Engagement Client',
            titleIt: 'Impegno Cliente',
            descAr: 'نضع مصلحة عملائنا في المقام الأول ونعمل بجد لتحقيق أهدافهم',
            descEn: 'We put our clients\' interests first and work hard to achieve their goals',
            descFr: 'Nous plaçons les intérêts de nos clients en premier et travaillons dur pour atteindre leurs objectifs',
            descIt: 'Mettiamo gli interessi dei nostri clienti al primo posto e lavoriamo duramente per raggiungere i loro obiettivi'
        },
        {
            icon: Scale,
            titleAr: 'النزاهة والشفافية',
            titleEn: 'Integrity & Transparency',
            titleFr: 'Intégrité et Transparence',
            titleIt: 'Integrità e Trasparenza',
            descAr: 'نعمل بأعلى معايير النزاهة المهنية والشفافية الكاملة',
            descEn: 'We work with the highest standards of professional integrity and complete transparency',
            descFr: 'Nous travaillons avec les plus hauts standards d\'intégrité professionnelle et de transparence totale',
            descIt: 'Lavoriamo con i più alti standard di integrità professionale e totale trasparenza'
        },
        {
            icon: Target,
            titleAr: 'التميز القانوني',
            titleEn: 'Legal Excellence',
            titleFr: 'Excellence Juridique',
            titleIt: 'Eccellenza Legale',
            descAr: 'نسعى دائماً لتقديم أفضل الحلول القانونية بأعلى جودة',
            descEn: 'We always strive to provide the best legal solutions with the highest quality',
            descFr: 'Nous nous efforçons toujours de fournir les meilleures solutions juridiques avec la plus haute qualité',
            descIt: 'Ci sforziamo sempre di fornire le migliori soluzioni legali con la massima qualità'
        },
        {
            icon: Globe2,
            titleAr: 'التفكير الدولي',
            titleEn: 'International Mindset',
            titleFr: 'Mentalité Internationale',
            titleIt: 'Mentalità Internazionale',
            descAr: 'نفهم الاختلافات الثقافية ونتحدث لغة عملائنا',
            descEn: 'We understand cultural differences and speak our clients\' language',
            descFr: 'Nous comprenons les différences culturelles et parlons la langue de nos clients',
            descIt: 'Comprendiamo le differenze culturali e parliamo la lingua dei nostri clienti'
        }
    ];

    const getLabel = (stat: any) => {
        switch (language) {
            case 'ar': return stat.labelAr;
            case 'fr': return stat.labelFr;
            case 'it': return stat.labelIt;
            default: return stat.labelEn;
        }
    };

    const getTitle = (value: any) => {
        switch (language) {
            case 'ar': return value.titleAr;
            case 'fr': return value.titleFr;
            case 'it': return value.titleIt;
            default: return value.titleEn;
        }
    };

    const getDesc = (value: any) => {
        switch (language) {
            case 'ar': return value.descAr;
            case 'fr': return value.descFr;
            case 'it': return value.descIt;
            default: return value.descEn;
        }
    };

    return (
        <div className={`min-h-screen bg-[#0b1a33] text-gray-200 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-[#0b1a33] via-[#0e1f3b] to-[#0b1a33]">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212, 161, 92, 0.15) 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
                            {language === 'ar' && 'من نحن'}
                            {language === 'en' && 'About Us'}
                            {language === 'fr' && 'À Propos de Nous'}
                            {language === 'it' && 'Chi Siamo'}
                        </h1>
                        <p className="text-xl md:text-2xl text-[#d4a15c] font-medium mb-4">
                            {language === 'ar' && 'مؤسسة كريم الديب للمحاماة الدولية'}
                            {language === 'en' && 'Karim El-Dib International Law Firm'}
                            {language === 'fr' && 'Cabinet Juridique International Karim El-Dib'}
                            {language === 'it' && 'Studio Legale Internazionale Karim El-Dib'}
                        </p>
                        <p className="text-lg text-gray-300">
                            {language === 'ar' && '18 عاماً من التميز في خدمة الأجانب والمستثمرين في مصر'}
                            {language === 'en' && '18 Years of Excellence Serving Foreigners and Investors in Egypt'}
                            {language === 'fr' && '18 Ans d\'Excellence au Service des Étrangers et Investisseurs en Égypte'}
                            {language === 'it' && '18 Anni di Eccellenza al Servizio di Stranieri e Investitori in Egitto'}
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-[#0e1f3b]">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="bg-[#d4a15c]/10 p-4 rounded-full">
                                        <stat.icon className="w-8 h-8 text-[#d4a15c]" />
                                    </div>
                                </div>
                                <div className="text-4xl font-bold text-[#d4a15c] mb-2">{stat.number}</div>
                                <div className="text-gray-300">{getLabel(stat)}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-16 bg-[#0b1a33]">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                            {language === 'ar' && 'قصتنا'}
                            {language === 'en' && 'Our Story'}
                            {language === 'fr' && 'Notre Histoire'}
                            {language === 'it' && 'La Nostra Storia'}
                        </h2>

                        <div className="bg-[#0e1f3b] rounded-lg p-8 border border-[#d4a15c]/20">
                            <p className="text-lg text-gray-300 leading-relaxed mb-6">
                                {language === 'ar' && 'بدأت رحلتنا في عام 2006 عندما أسس المحامي كريم الديب مكتبه في الإسكندرية بهدف واضح: تقديم خدمات قانونية متميزة للأجانب والمستثمرين في مصر. مع مرور السنوات، نمت خبرتنا وتوسعت خدماتنا لتشمل شرم الشيخ، إحدى أهم الوجهات السياحية والاستثمارية في مصر.'}
                                {language === 'en' && 'Our journey began in 2006 when Lawyer Karim El-Dib established his office in Alexandria with a clear goal: to provide distinguished legal services to foreigners and investors in Egypt. Over the years, our expertise has grown and our services have expanded to include Sharm El Sheikh, one of Egypt\'s most important tourist and investment destinations.'}
                                {language === 'fr' && 'Notre parcours a commencé en 2006 lorsque l\'avocat Karim El-Dib a établi son cabinet à Alexandrie avec un objectif clair: fournir des services juridiques distingués aux étrangers et investisseurs en Égypte. Au fil des ans, notre expertise s\'est développée et nos services se sont étendus pour inclure Sharm El Sheikh, l\'une des destinations touristiques et d\'investissement les plus importantes d\'Égypte.'}
                                {language === 'it' && 'Il nostro viaggio è iniziato nel 2006 quando l\'avvocato Karim El-Dib ha fondato il suo studio ad Alessandria con un obiettivo chiaro: fornire servizi legali distinti a stranieri e investitori in Egitto. Nel corso degli anni, la nostra esperienza è cresciuta e i nostri servizi si sono espansi per includere Sharm El Sheikh, una delle destinazioni turistiche e di investimento più importanti dell\'Egitto.'}
                            </p>

                            <p className="text-lg text-gray-300 leading-relaxed">
                                {language === 'ar' && 'اليوم، نفخر بخدمة مئات العملاء من مختلف الجنسيات، ونتحدث 4 لغات (العربية، الإنجليزية، الفرنسية، والإيطالية)، ونقدم خدمات قانونية شاملة تغطي جميع احتياجات الأجانب في مصر.'}
                                {language === 'en' && 'Today, we are proud to serve hundreds of clients from different nationalities, speak 4 languages (Arabic, English, French, and Italian), and provide comprehensive legal services covering all the needs of foreigners in Egypt.'}
                                {language === 'fr' && 'Aujourd\'hui, nous sommes fiers de servir des centaines de clients de différentes nationalités, de parler 4 langues (arabe, anglais, français et italien) et de fournir des services juridiques complets couvrant tous les besoins des étrangers en Égypte.'}
                                {language === 'it' && 'Oggi siamo orgogliosi di servire centinaia di clienti di diverse nazionalità, parlare 4 lingue (arabo, inglese, francese e italiano) e fornire servizi legali completi che coprono tutte le esigenze degli stranieri in Egitto.'}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 bg-[#0e1f3b]">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                        {language === 'ar' && 'قيمنا'}
                        {language === 'en' && 'Our Values'}
                        {language === 'fr' && 'Nos Valeurs'}
                        {language === 'it' && 'I Nostri Valori'}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                        {values.map((value, index) => (
                            <div key={index} className="bg-[#0b1a33] rounded-lg p-6 border border-[#d4a15c]/20">
                                <div className="flex items-center mb-4">
                                    <div className="bg-[#d4a15c]/10 p-3 rounded-lg">
                                        <value.icon className="w-7 h-7 text-[#d4a15c]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mr-4 ml-4">{getTitle(value)}</h3>
                                </div>
                                <p className="text-gray-300 leading-relaxed">{getDesc(value)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 bg-[#0b1a33]">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                            {language === 'ar' && 'لماذا تختارنا؟'}
                            {language === 'en' && 'Why Choose Us?'}
                            {language === 'fr' && 'Pourquoi Nous Choisir?'}
                            {language === 'it' && 'Perché Sceglierci?'}
                        </h2>

                        <div className="space-y-4">
                            {[
                                {
                                    ar: 'خبرة 18 عاماً متخصصة في خدمة الأجانب والمستثمرين',
                                    en: '18 years of specialized experience serving foreigners and investors',
                                    fr: '18 ans d\'expérience spécialisée au service des étrangers et investisseurs',
                                    it: '18 anni di esperienza specializzata al servizio di stranieri e investitori'
                                },
                                {
                                    ar: 'نتحدث 4 لغات: العربية، الإنجليزية، الفرنسية، والإيطالية',
                                    en: 'We speak 4 languages: Arabic, English, French, and Italian',
                                    fr: 'Nous parlons 4 langues: arabe, anglais, français et italien',
                                    it: 'Parliamo 4 lingue: arabo, inglese, francese e italiano'
                                },
                                {
                                    ar: 'مكتبان في موقعين استراتيجيين: الإسكندرية وشرم الشيخ',
                                    en: 'Two offices in strategic locations: Alexandria and Sharm El Sheikh',
                                    fr: 'Deux bureaux dans des emplacements stratégiques: Alexandrie et Sharm El Sheikh',
                                    it: 'Due uffici in posizioni strategiche: Alessandria e Sharm El Sheikh'
                                },
                                {
                                    ar: 'خدمات قانونية شاملة تغطي جميع احتياجاتك',
                                    en: 'Comprehensive legal services covering all your needs',
                                    fr: 'Services juridiques complets couvrant tous vos besoins',
                                    it: 'Servizi legali completi che coprono tutte le tue esigenze'
                                },
                                {
                                    ar: 'نسبة نجاح 95%+ في القضايا',
                                    en: '95%+ success rate in cases',
                                    fr: 'Taux de réussite de 95%+ dans les cas',
                                    it: 'Tasso di successo del 95%+ nei casi'
                                },
                                {
                                    ar: 'شفافية كاملة في الأتعاب والإجراءات',
                                    en: 'Complete transparency in fees and procedures',
                                    fr: 'Transparence totale dans les honoraires et procédures',
                                    it: 'Totale trasparenza nelle tariffe e procedure'
                                }
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-4 bg-[#0e1f3b] p-4 rounded-lg border border-[#d4a15c]/20">
                                    <CheckCircle className="w-6 h-6 text-[#d4a15c] flex-shrink-0 mt-1" />
                                    <p className="text-gray-300 text-lg">
                                        {language === 'ar' && item.ar}
                                        {language === 'en' && item.en}
                                        {language === 'fr' && item.fr}
                                        {language === 'it' && item.it}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-[#d4a15c] to-[#c8a876]">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0b1a33] mb-6">
                            {language === 'ar' && 'هل أنت مستعد للبدء؟'}
                            {language === 'en' && 'Ready to Get Started?'}
                            {language === 'fr' && 'Prêt à Commencer?'}
                            {language === 'it' && 'Pronto per Iniziare?'}
                        </h2>
                        <p className="text-xl text-[#0b1a33] mb-8">
                            {language === 'ar' && 'احصل على استشارة قانونية مجانية اليوم'}
                            {language === 'en' && 'Get a free legal consultation today'}
                            {language === 'fr' && 'Obtenez une consultation juridique gratuite aujourd\'hui'}
                            {language === 'it' && 'Ottieni una consulenza legale gratuita oggi'}
                        </p>
                        <a
                            href="tel:+201223767592"
                            className="inline-block bg-[#0b1a33] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
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

export default AboutUs;
