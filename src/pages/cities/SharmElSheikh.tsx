import React, { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { MapPin, Phone, Mail, Clock, Globe2 } from 'lucide-react';
import PracticeAreas from '../../components/PracticeAreas';

const SharmElSheikh: React.FC = () => {
    const { language, t } = useLanguage();
    const isRTL = language === 'ar';

    useEffect(() => {
        // SEO Meta Tags
        const title = language === 'ar'
            ? 'محامي تحكيم دولي وقضايا أجانب في شرم الشيخ | كريم الديب'
            : language === 'fr'
                ? 'Avocat Arbitrage International & Étrangers à Sharm El Sheikh | Karim Eldib'
                : language === 'it'
                    ? 'Avvocato Arbitrato Internazionale e Stranieri a Sharm El Sheikh | Karim Eldib'
                    : 'International Arbitration & Foreigners Lawyer in Sharm El Sheikh | Karim Eldib';

        const description = language === 'ar'
            ? 'أفضل مكتب محاماة للتحكيم الدولي وقضايا الأجانب في شرم الشيخ. خدمات قانونية متخصصة للمستثمرين: تسوية منازعات الفنادق والاستثمارات السياحية، تأسيس شركات، إقامة وعقارات. نتحدث الفرنسية والإيطالية والإنجليزية.'
            : language === 'fr'
                ? 'Meilleur cabinet d\'avocats pour l\'arbitrage international et les étrangers à Charm el-Cheikh. Services de résolution des litiges d\'investissement hôtelier, création d\'entreprises, immobilier. Nous parlons français.'
                : language === 'it'
                    ? 'Miglior studio legale per l\'arbitrato internazionale e gli stranieri a Sharm El Sheikh. Risoluzione delle controversie sugli investimenti alberghieri, costituzione di società, immobili. Parliamo italiano.'
                    : 'Best law firm for international arbitration and foreigners in Sharm El Sheikh. Specialized legal services for investors: hotel & tourism disputes resolution, company formation, property ownership, and residency permits. We speak English, French, Italian.';

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

    const languages = [
        { icon: Globe2, name: 'Français', flag: '🇫🇷' },
        { icon: Globe2, name: 'Italiano', flag: '🇮🇹' },
        { icon: Globe2, name: 'English', flag: '🇬🇧' },
        { icon: Globe2, name: 'العربية', flag: '🇸🇦' }
    ];

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

            <PracticeAreas />

            {/* تفصيل الخدمات القانونية في شرم الشيخ */}
            <section className="py-16 bg-[#1a2d4d]/30 border-t border-b border-[#d4a15c]/10">
                <div className="container mx-auto px-4 max-w-7xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#d4a15c]">
                        {language === 'ar' ? 'تفاصيل نطاق خدماتنا القانونية في شرم الشيخ (فرع جنوب سيناء)' : language === 'fr' ? 'Détails de nos Services Juridiques à Sharm (Succursale de Charm)' : language === 'it' ? 'Dettagli dei Nostri Servizi Legali a Sharm (Filiale Sharm)' : 'Detailed Legal Services Scope in Sharm El Sheikh (South Sinai Branch)'}
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300 leading-relaxed text-sm md:text-base">
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-bold text-[#d4a15c] mb-2 flex items-center gap-2">
                                    <i className="fas fa-umbrella-beach"></i>
                                    {language === 'ar' ? 'الاستثمار السياحي وتأسيس شركات الفنادق' : language === 'fr' ? 'Investissement Touristique & Sociétés Hôtelières' : language === 'it' ? 'Investimenti Turistici e Società Alberghiere' : 'Tourism Investment & Hotel Corporations'}
                                </h3>
                                <p>
                                    {language === 'ar' 
                                        ? 'نظراً لأن شرم الشيخ هي رائدة السياحة في مصر، فإن مكتبنا هناك يتخصص في صياغة عقود إدارة وتشييد الفنادق والقرى السياحية، وتأسيس شركات التنمية السياحية، والحصول على التراخيص البيئية والأمنية والفنية لمختلف المنشآت والأنشطة الترفيهية.'
                                        : language === 'fr'
                                        ? 'Charm el-Cheikh étant le cœur du tourisme, notre bureau est spécialisé dans les contrats de gestion hôtelière et le développement de projets de villégiature.'
                                        : language === 'it'
                                        ? 'Essendo Sharm il cuore del turismo, il nostro ufficio è specializzato in contratti di gestione alberghiera e sviluppo di progetti di resort.'
                                        : 'Given Sharm\'s status as Egypt\'s tourism hub, our branch specializes in hotel management and construction agreements, tourism development company formation, and securing environmental and operational permits.'}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-[#d4a15c] mb-2 flex items-center gap-2">
                                    <i className="fas fa-gavel"></i>
                                    {language === 'ar' ? 'محامي تحكيم دولي وتسوية منازعات في شرم الشيخ' : language === 'fr' ? 'Avocat d\'Arbitrage & Règlement des Différends à Sharm' : language === 'it' ? 'Avvocato Arbitrato e Risoluzione Controversie a Sharm' : 'Arbitration Lawyer & Dispute Resolution in Sharm El Sheikh'}
                                </h3>
                                <p>
                                    {language === 'ar' 
                                        ? 'نقدم تمثيلاً قانونياً متكاملاً للأجانب والفنادق والمنشآت السياحية في شرم الشيخ بواسطة محامي تحكيم دولي معتمد. نوفر خدمات تسوية المنازعات الاستثمارية والتجارية، وعقد جلسات الوساطة وحل النزاعات العابرة للحدود ودياً لتجنب التقاضي الطويل.'
                                        : language === 'fr'
                                        ? 'Nous fournissons une représentation par un avocat d\'arbitrage international à Charm el-Cheikh pour les investisseurs, hôtels et projets touristiques. Règlement des litiges.'
                                        : language === 'it'
                                        ? 'Forniamo una rappresentanza da parte di un avvocato arbitro internazionale a Sharm per investitori, hotel e strutture turistiche. Risoluzione delle controversie.'
                                        : 'We deliver expert representation by a certified international arbitration lawyer in Sharm El Sheikh for foreign investors, hotels, and tourist developments. Settle investment and commercial disputes amicably.'}
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-bold text-[#d4a15c] mb-2 flex items-center gap-2">
                                    <i className="fas fa-key"></i>
                                    {language === 'ar' ? 'تملك العقارات للأجانب وتراخيص الإقامة' : language === 'fr' ? 'Propriété Étrangère & Permis de Séjour' : language === 'it' ? 'Proprietà Straniera e Permessi di Soggiorno' : 'Foreign Property Ownership & Residence Permits'}
                                </h3>
                                <p>
                                    {language === 'ar' 
                                        ? 'نساعد الأجانب والجاليات المقيمة في شرم الشيخ في صياغة وتسجيل عقود بيع وشراء العقارات السكنية والسياحية، وإنهاء تراخيص إقامة المستثمرين والزوار، بجانب إتمام إجراءات وتوثيق زواج الأجانب بمكتب الشهر العقاري المختص.'
                                        : language === 'fr'
                                        ? 'Nous aidons les étrangers à acheter des biens, à obtenir des permis de séjour d\'investisseur et à enregistrer des mariages d\'étrangers à Charm.'
                                        : language === 'it'
                                        ? 'Assistiamo gli stranieri nell\'acquisto di proprietà, nell\'ottenimento di permessi di soggiorno e nella registrazione di matrimoni.'
                                        : 'We assist foreign residents and buyers in drafting property deeds in Sharm, securing investor and tourist residency visas, and completing legal foreign marriage registrations.'}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-[#d4a15c] mb-2 flex items-center gap-2">
                                    <i className="fas fa-balance-scale"></i>
                                    {language === 'ar' ? 'الدفاع الجنائي وتمثيل الأجانب والزوار' : language === 'fr' ? 'Défense Pénale & Représentation' : language === 'it' ? 'Difesa Penale e Rappresentanza Stranieri' : 'Criminal Defense & Visitor Representation'}
                                </h3>
                                <p>
                                    {language === 'ar' 
                                        ? 'نوفر دعماً قانونياً ودفاعاً جنائياً على مدار الساعة للزوار والأجانب المقيمين في مواجهة أي محاضر شرطية أو تحقيقات، والتمثيل القانوني الكامل أمام نيابة شرم الشيخ ومحكمة جنح وجنايات جنوب سيناء بالطور.'
                                        : language === 'fr'
                                        ? 'Nous fournissons une défense pénale 24h/24 pour les visiteurs et expatriés devant les procureurs et tribunaux de Charm et du Sinaï Sud.'
                                        : language === 'it'
                                        ? 'Forniamo una difesa penale 24 ore su 24 per visitatori ed espatriati presso le procure e i tribunali di Sharm e del Sinai del Sud.'
                                        : 'We deliver round-the-clock criminal defense for foreign tourists and residents facing police reports or urgent legal investigations in Sharm El Sheikh.'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 bg-[#0b1a33]">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto bg-[#0e1f3b] rounded-lg p-8 border border-[#d4a15c]/20">
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
