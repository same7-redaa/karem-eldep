import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Users, FileText, Building2, Home, Heart, Scale, Briefcase, Globe2, ArrowRight, Anchor, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
    const { language } = useLanguage();
    const isRTL = language === 'ar';

    useEffect(() => {
        // SEO Meta Tags
        const title = language === 'ar'
            ? 'خدماتنا القانونية | محامي أجانب في مصر | كريم الديب'
            : language === 'fr'
                ? 'Nos Services Juridiques | Avocat pour Étrangers en Égypte'
                : language === 'it'
                    ? 'I Nostri Servizi Legali | Avvocato per Stranieri in Egitto'
                    : 'Our Legal Services | Lawyer for Foreigners in Egypt';

        const description = language === 'ar'
            ? 'خدمات قانونية شاملة للأجانب في مصر: إقامة وتأشيرات، تأسيس شركات، عقارات واستثمارات، طلاق وأحوال شخصية، قضايا مدنية وجنائية، قضايا عمالية. نتحدث 4 لغات.'
            : language === 'fr'
                ? 'Services juridiques complets pour étrangers en Égypte: résidence et visas, création d\'entreprise, immobilier, divorce, affaires civiles et pénales. Nous parlons 4 langues.'
                : language === 'it'
                    ? 'Servizi legali completi per stranieri in Egitto: residenza e visti, costituzione società, immobiliare, divorzio, casi civili e penali. Parliamo 4 lingue.'
                    : 'Comprehensive legal services for foreigners in Egypt: residence permits, company formation, real estate, divorce, civil and criminal cases. We speak 4 languages.';

        document.title = title;

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description);
        }
    }, [language]);

    const services = [
        {
            icon: Users,
            titleAr: 'خدمات الأجانب',
            titleEn: 'Foreigners Services',
            titleFr: 'Services pour Étrangers',
            titleIt: 'Servizi per Stranieri',
            descAr: 'خدمات قانونية شاملة ومتخصصة للأجانب المقيمين والمستثمرين في مصر',
            descEn: 'Comprehensive and specialized legal services for foreign residents and investors in Egypt',
            descFr: 'Services juridiques complets et spécialisés pour résidents et investisseurs étrangers en Égypte',
            descIt: 'Servizi legali completi e specializzati per residenti e investitori stranieri in Egitto',
            link: '/foreigners-in-egypt',
            image: '/images/services/foreigners-in-egypt.webp',
            features: [
                { ar: 'استشارات قانونية', en: 'Legal consultations', fr: 'Consultations juridiques', it: 'Consulenze legali' },
                { ar: 'تمثيل قانوني', en: 'Legal representation', fr: 'Représentation juridique', it: 'Rappresentanza legale' },
                { ar: 'خدمات الترجمة', en: 'Translation services', fr: 'Services de traduction', it: 'Servizi di traduzione' },
                { ar: 'متابعة الإجراءات', en: 'Follow-up procedures', fr: 'Suivi des procédures', it: 'Procedure di follow-up' }
            ]
        },
        {
            icon: FileText,
            titleAr: 'إقامة وتأشيرات',
            titleEn: 'Residence & Visas',
            titleFr: 'Résidence et Visas',
            titleIt: 'Residenza e Visti',
            descAr: 'استخراج وتجديد الإقامات والتأشيرات لجميع الجنسيات بسرعة وكفاءة',
            descEn: 'Obtaining and renewing residence permits and visas for all nationalities quickly and efficiently',
            descFr: 'Obtention et renouvellement de permis de résidence et visas pour toutes nationalités rapidement et efficacement',
            descIt: 'Ottenimento e rinnovo di permessi di soggiorno e visti per tutte le nazionalità in modo rapido ed efficiente',
            link: '/foreigners-in-egypt',
            image: '/images/services/foreigners-in-egypt.webp',
            features: [
                { ar: 'إقامة سياحية', en: 'Tourist residence', fr: 'Résidence touristique', it: 'Residenza turistica' },
                { ar: 'إقامة عمل', en: 'Work residence', fr: 'Résidence de travail', it: 'Residenza di lavoro' },
                { ar: 'إقامة استثمار', en: 'Investment residence', fr: 'Résidence d\'investissement', it: 'Residenza di investimento' },
                { ar: 'إقامة دائمة', en: 'Permanent residence', fr: 'Résidence permanente', it: 'Residenza permanente' }
            ]
        },
        {
            icon: Building2,
            titleAr: 'تأسيس الشركات',
            titleEn: 'Company Formation',
            titleFr: 'Création d\'Entreprise',
            titleIt: 'Costituzione Società',
            descAr: 'تأسيس جميع أنواع الشركات للمستثمرين الأجانب مع الحصول على جميع التراخيص',
            descEn: 'Formation of all types of companies for foreign investors with obtaining all licenses',
            descFr: 'Création de tous types de sociétés pour investisseurs étrangers avec obtention de toutes les licences',
            descIt: 'Costituzione di tutti i tipi di società per investitori stranieri con ottenimento di tutte le licenze',
            link: '/company-law',
            image: '/images/services/company-law.webp',
            features: [
                { ar: 'شركة ذات مسؤولية محدودة', en: 'LLC', fr: 'SARL', it: 'SRL' },
                { ar: 'شركة الشخص الواحد', en: 'Single person company', fr: 'Société unipersonnelle', it: 'Società unipersonale' },
                { ar: 'شركة مساهمة', en: 'Joint stock company', fr: 'Société par actions', it: 'Società per azioni' },
                { ar: 'فرع أجنبي', en: 'Foreign branch', fr: 'Succursale étrangère', it: 'Filiale estera' }
            ]
        },
        {
            icon: Home,
            titleAr: 'عقارات واستثمارات',
            titleEn: 'Real Estate & Investments',
            titleFr: 'Immobilier et Investissements',
            titleIt: 'Immobiliare e Investimenti',
            descAr: 'شراء وبيع العقارات والاستثمار العقاري للأجانب مع الحماية القانونية الكاملة',
            descEn: 'Real estate purchase, sale and investment for foreigners with complete legal protection',
            descFr: 'Achat, vente et investissement immobilier pour étrangers avec protection juridique complète',
            descIt: 'Acquisto, vendita e investimento immobiliare per stranieri con protezione legale completa',
            link: '/commercial-law',
            image: '/images/services/commercial-law.webp',
            features: [
                { ar: 'فحص قانوني للعقار', en: 'Legal property check', fr: 'Vérification juridique immobilière', it: 'Controllo legale immobiliare' },
                { ar: 'صياغة العقود', en: 'Contract drafting', fr: 'Rédaction de contrats', it: 'Redazione contratti' },
                { ar: 'التسجيل في الشهر العقاري', en: 'Real estate registration', fr: 'Enregistrement immobilier', it: 'Registrazione immobiliare' },
                { ar: 'حل النزاعات العقارية', en: 'Real estate disputes', fr: 'Litiges immobiliers', it: 'Controversie immobiliari' }
            ]
        },
        {
            icon: Heart,
            titleAr: 'طلاق وأحوال شخصية',
            titleEn: 'Divorce & Personal Status',
            titleFr: 'Divorce et Statut Personnel',
            titleIt: 'Divorzio e Stato Personale',
            descAr: 'قضايا الطلاق والخلع والنفقة والحضانة للأجانب بكل حساسية واحترافية',
            descEn: 'Divorce, khul\', alimony and custody cases for foreigners with sensitivity and professionalism',
            descFr: 'Divorce, khul\', pension alimentaire et garde pour étrangers avec sensibilité et professionnalisme',
            descIt: 'Divorzio, khul\', alimenti e custodia per stranieri con sensibilità e professionalità',
            link: '/family-law',
            image: '/images/services/family-law.webp',
            features: [
                { ar: 'طلاق بالتراضي', en: 'Divorce by consent', fr: 'Divorce par consentement', it: 'Divorzio consensuale' },
                { ar: 'طلاق للضرر', en: 'Divorce for harm', fr: 'Divorce pour préjudice', it: 'Divorzio per danno' },
                { ar: 'حضانة الأطفال', en: 'Child custody', fr: 'Garde d\'enfants', it: 'Custodia dei bambini' },
                { ar: 'نفقة وتعويضات', en: 'Alimony & compensation', fr: 'Pension et compensation', it: 'Alimenti e compensazione' }
            ]
        },
        {
            icon: Scale,
            titleAr: 'قضايا مدنية وجنائية',
            titleEn: 'Civil & Criminal Cases',
            titleFr: 'Affaires Civiles et Pénales',
            titleIt: 'Casi Civili e Penali',
            descAr: 'تمثيل قانوني قوي في جميع القضايا المدنية والجنائية للأجانب',
            descEn: 'Strong legal representation in all civil and criminal cases for foreigners',
            descFr: 'Représentation juridique solide dans toutes les affaires civiles et pénales pour étrangers',
            descIt: 'Forte rappresentanza legale in tutti i casi civili e penali per stranieri',
            link: '/criminal-law',
            image: '/images/services/criminal-law.webp',
            features: [
                { ar: 'قضايا مدنية', en: 'Civil cases', fr: 'Affaires civiles', it: 'Casi civili' },
                { ar: 'قضايا جنائية', en: 'Criminal cases', fr: 'Affaires pénales', it: 'Casi penali' },
                { ar: 'قضايا تجارية', en: 'Commercial cases', fr: 'Affaires commerciales', it: 'Casi commerciali' },
                { ar: 'التحكيم والوساطة', en: 'Arbitration & mediation', fr: 'Arbitrage et médiation', it: 'Arbitrato e mediazione' }
            ]
        },
        {
            icon: Briefcase,
            titleAr: 'قضايا عمالية',
            titleEn: 'Labor Cases',
            titleFr: 'Affaires du Travail',
            titleIt: 'Casi di Lavoro',
            descAr: 'قضايا العمل والتعويضات وحقوق العمال الأجانب في مصر',
            descEn: 'Labor disputes, compensation and foreign workers\' rights in Egypt',
            descFr: 'Litiges du travail, indemnisation et droits des travailleurs étrangers en Égypte',
            descIt: 'Controversie di lavoro, compensazione e diritti dei lavoratori stranieri in Egitto',
            link: '/commercial-law',
            image: '/images/services/company-law.webp',
            features: [
                { ar: 'عقود العمل', en: 'Employment contracts', fr: 'Contrats de travail', it: 'Contratti di lavoro' },
                { ar: 'نزاعات العمل', en: 'Labor disputes', fr: 'Litiges du travail', it: 'Controversie di lavoro' },
                { ar: 'تعويضات العمال', en: 'Workers\' compensation', fr: 'Indemnisation des travailleurs', it: 'Compensazione lavoratori' },
                { ar: 'فصل تعسفي', en: 'Wrongful termination', fr: 'Licenciement abusif', it: 'Licenziamento ingiusto' }
            ]
        },
        {
            icon: Globe2,
            titleAr: 'المصريون بالخارج',
            titleEn: 'Egyptians Abroad',
            titleFr: 'Égyptiens à l\'Étranger',
            titleIt: 'Egiziani all\'Estero',
            descAr: 'خدمات قانونية للمصريين المغتربين في الخارج',
            descEn: 'Legal services for Egyptian expatriates abroad',
            descFr: 'Services juridiques pour expatriés égyptiens à l\'étranger',
            descIt: 'Servizi legali per espatriati egiziani all\'estero',
            link: '/egyptians-abroad',
            image: '/images/services/egyptians-abroad.webp',
            features: [
                { ar: 'توكيلات رسمية', en: 'Official powers of attorney', fr: 'Procurations officielles', it: 'Procure ufficiali' },
                { ar: 'إدارة الممتلكات', en: 'Property management', fr: 'Gestion immobilière', it: 'Gestione immobiliare' },
                { ar: 'قضايا الميراث', en: 'Inheritance cases', fr: 'Affaires de succession', it: 'Casi di eredità' },
                { ar: 'استشارات قانونية', en: 'Legal consultations', fr: 'Consultations juridiques', it: 'Consulenze legali' }
            ]
        },
        {
            icon: Globe,
            titleAr: 'القانون الدولي والتحكيم',
            titleEn: 'International Law & Arbitration',
            titleFr: 'Droit International et Arbitrage',
            titleIt: 'Diritto Internazionale ed Arbitrato',
            descAr: 'التمثيل والتحكيم التجاري الدولي وتسوية النزاعات العابرة للحدود',
            descEn: 'International legal representation, commercial arbitration and cross-border dispute resolution',
            descFr: 'Représentation internationale, arbitrage commercial et résolution de litiges transfrontaliers',
            descIt: 'Rappresentanza internazionale, arbitrato commerciale e risoluzione controversie transfrontaliere',
            link: '/arbitration-mediation',
            image: '/images/services/international-law.webp',
            features: [
                { ar: 'تحكيم تجاري دولي', en: 'International commercial arbitration', fr: 'Arbitrage commercial international', it: 'Arbitrato commerciale internazionale' },
                { ar: 'عقود عابرة للحدود', en: 'Cross-border contracts', fr: 'Contrats transfrontaliers', it: 'Contratti transfrontalieri' },
                { ar: 'نزاعات دولية', en: 'International disputes', fr: 'Litiges internationaux', it: 'Controversie internazionali' },
                { ar: 'استشارات قانونية دولية', en: 'International legal consultations', fr: 'Consultations juridiques internationales', it: 'Consulenze legali internazionali' }
            ]
        },
        {
            icon: Anchor,
            titleAr: 'القانون البحري والطاقة',
            titleEn: 'Maritime & Energy Law',
            titleFr: 'Droit Maritime et Énergie',
            titleIt: 'Diritto Marittimo ed Energia',
            descAr: 'حل نزاعات الشحن البحري وتخليص البضائع وعقود البترول والطاقة',
            descEn: 'Resolving maritime shipping disputes, customs clearance, energy and petroleum contracts',
            descFr: 'Résolution des litiges de transport maritime, dédouanement et contrats d\'énergie',
            descIt: 'Risoluzione controversie trasporto marittimo, sdoganamento e contratti energetici',
            link: '/commercial-law',
            image: '/images/services/maritime.webp',
            features: [
                { ar: 'نزاعات الشحن البحري', en: 'Maritime shipping disputes', fr: 'Litiges de transport maritime', it: 'Controversie trasporto marittimo' },
                { ar: 'تخليص جمركي وبضائع', en: 'Customs clearance & cargo', fr: 'Dédouanement et cargaison', it: 'Sdoganamento e carico' },
                { ar: 'عقود البترول والطاقة', en: 'Petroleum & energy contracts', fr: 'Contrats de pétrole et d\'énergie', it: 'Contratti di petrolio ed energia' },
                { ar: 'نزاعات الموانئ', en: 'Port disputes', fr: 'Litiges des ports', it: 'Controversie portuali' }
            ]
        }
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

    const getFeature = (feature: any) => {
        switch (language) {
            case 'ar': return feature.ar;
            case 'fr': return feature.fr;
            case 'it': return feature.it;
            default: return feature.en;
        }
    };

    return (
        <div className={`min-h-screen bg-[#0b1a33] text-gray-200 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
            
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white overflow-hidden bg-[#0b1a33]">
                <img
                    src="/images/services/civil-law.webp"
                    alt={isRTL ? "خدماتنا القانونية - مكتب كريم الديب للمحاماة" : "Our Legal Services - Karim El-Dib Law Firm"}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                />
                <div className="absolute inset-0 bg-[#0b1a33] bg-opacity-70 z-[1]"></div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0b1a33] to-transparent z-[2]"></div>
                <div className="relative z-10 container mx-auto px-4 md:px-6">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight text-white">
                        {language === 'ar' && 'خدماتنا القانونية'}
                        {language === 'en' && 'Our Legal Services'}
                        {language === 'fr' && 'Nos Services Juridiques'}
                        {language === 'it' && 'I Nostri Servizi Legali'}
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-6 font-medium text-[#d4a15c]">
                        {language === 'ar' && 'خدمات قانونية شاملة ومتخصصة للأجانب والمستثمرين في مصر'}
                        {language === 'en' && 'Comprehensive and specialized legal services for foreigners and investors in Egypt'}
                        {language === 'fr' && 'Services juridiques complets et spécialisés pour étrangers et investisseurs en Égypte'}
                        {language === 'it' && 'Servizi legali completi e specializzati per stranieri e investitori in Egitto'}
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 bg-[#0b1a33]">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {services.map((service, index) => (
                            <div key={index} className="bg-[#0e1f3b] h-full rounded-lg border border-[#d4a15c]/20 hover:border-[#d4a15c]/50 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden flex flex-col">
                                {service.image && (
                                    <div className="relative h-48 w-full">
                                        <img src={service.image} alt={getTitle(service)} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0e1f3b] to-transparent"></div>
                                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                                            <div className="bg-[#0e1f3b]/80 p-2 rounded-lg backdrop-blur-sm border border-[#d4a15c]/30">
                                                <service.icon className="w-6 h-6 text-[#d4a15c]" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div className="p-6 flex-grow flex flex-col">
                                    <h3 className="text-xl font-bold mb-3 text-white">{getTitle(service)}</h3>
                                    <p className="text-gray-400 leading-relaxed mb-4 flex-grow">{getDesc(service)}</p>
    
                                    <ul className="space-y-2 mb-6">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                                            <ArrowRight className="w-4 h-4 text-[#d4a15c] flex-shrink-0 mt-0.5" />
                                            <span>{getFeature(feature)}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    to={service.link}
                                    className="inline-flex items-center gap-2 text-[#d4a15c] hover:text-[#c8a876] font-semibold transition-colors mt-auto"
                                >
                                    {language === 'ar' && 'اعرف المزيد'}
                                    {language === 'en' && 'Learn More'}
                                    {language === 'fr' && 'En Savoir Plus'}
                                    {language === 'it' && 'Scopri di Più'}
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-[#d4a15c] to-[#c8a876]">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0b1a33] mb-6">
                            {language === 'ar' && 'هل تحتاج مساعدة قانونية؟'}
                            {language === 'en' && 'Need Legal Help?'}
                            {language === 'fr' && 'Besoin d\'Aide Juridique?'}
                            {language === 'it' && 'Hai Bisogno di Aiuto Legale?'}
                        </h2>
                        <p className="text-xl text-[#0b1a33] mb-8">
                            {language === 'ar' && 'احصل على استشارة قانونية مجانية من خبرائنا'}
                            {language === 'en' && 'Get a free legal consultation from our experts'}
                            {language === 'fr' && 'Obtenez une consultation juridique gratuite de nos experts'}
                            {language === 'it' && 'Ottieni una consulenza legale gratuita dai nostri esperti'}
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

export default Services;
