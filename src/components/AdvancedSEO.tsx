import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface AdvancedSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  city?: string;
}

const AdvancedSEO: React.FC<AdvancedSEOProps> = ({
  title,
  description,
  keywords,
  canonicalUrl = 'https://ke-lawyer.com',
  city
}) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  // SEO Keywords للمدن الرئيسية - محدثة بجميع الكلمات المستهدفة
  const cityKeywords = {
    ar: [
      // شرم الشيخ
      'محامي في شرم الشيخ',
      'أفضل محامي في شرم الشيخ',
      'مكتب محاماة في شرم الشيخ',
      'محامي أجانب في شرم الشيخ',
      'محامي جنائي في شرم الشيخ',
      'محامي قضايا مدنية في شرم الشيخ',
      'محامي شركات في شرم الشيخ',
      'محامي أحوال شخصية في شرم الشيخ',
      'محامي طلاق في شرم الشيخ',
      'محامي هجرة وإقامة في شرم الشيخ',
      'محامي تأشيرات في شرم الشيخ',
      'استشارات قانونية في شرم الشيخ',
      'مستشار قانوني في شرم الشيخ',
      'محامي تعويضات في شرم الشيخ',
      'محامي قضايا عمال في شرم الشيخ',
      'محامي نزاعات تجارية في شرم الشيخ',
      'محامي فرنسي في شرم الشيخ',
      'محامي إيطالي في شرم الشيخ',
      'محامي إنجليزي في شرم الشيخ',
      'محامي روسي في شرم الشيخ',

      // الإسكندرية
      'محامي في الإسكندرية',
      'أفضل مكتب محاماة في الإسكندرية',
      'مكتب محاماة في الإسكندرية',
      'محامي قضايا أجانب في الإسكندرية',
      'محامي هجرة وإقامة في الإسكندرية',
      'محامي مدني في الإسكندرية',
      'محامي جنائي في الإسكندرية',
      'محامي طلاق في الإسكندرية',
      'محامي شركات في الإسكندرية',
      'محامي أحوال شخصية في الإسكندرية',
      'محامي تأشيرات في الإسكندرية',
      'مستشار قانوني في الإسكندرية',
      'محامي تعويضات في الإسكندرية',
      'محامي عمال في الإسكندرية',
      'محامي قضايا تجارية في الإسكندرية',
      'محامي مستثمرين أجانب في الإسكندرية',
      'محامي فرنسي في الإسكندرية',
      'محامي إيطالي في الإسكندرية',
      'محامي إنجليزي في الإسكندرية',
      'رقم محامي في الإسكندرية',

      // مصر عام
      'محامي أجانب في مصر',
      'محامي للأجانب في مصر',
      'محامي مستثمرين أجانب في مصر',
      'محامي تأسيس شركات للأجانب',
      'محامي عقارات للأجانب',
      'محامي استثمار في مصر',
      'كريم الديب محامي أجانب',
      'محامي دولي كريم الديب',
      'محامي تحكيم دولي في مصر',
      'محاماة التحكيم الدولي في مصر',
      'التحكيم التجاري الدولي في مصر',
      'محامي منازعات دولية في مصر',
      'تسوية المنازعات الدولية في مصر',
      'حل المنازعات التجارية الدولية',
      'محامي منازعات تجارية دولية',
      'محامي استثمار أجنبي في مصر',
      'منازعات المستثمرين الأجانب في مصر',
      'منازعات الاستثمار في مصر',
      'تسوية المنازعات الاستثمارية',
      'محامي شركات دولي في مصر',
      'محامي دولي في مصر',
      'مكتب محاماة دولي في مصر',
      'محامي تحكيم دولي في الإسكندرية',
      'محامي تحكيم دولي في شرم الشيخ',
      'محامي منازعات تجارية في مصر',
      'محامي عقود تجارية دولية',
      'منازعات العقود التجارية الدولية',
      'المنازعات العابرة للحدود',
      'التقاضي في المنازعات الدولية',
      'تنفيذ أحكام التحكيم الأجنبية في مصر',
      'الاعتراف بأحكام التحكيم الأجنبية في مصر',
      'تنفيذ أحكام التحكيم الدولي في مصر',
      'الوساطة وتسوية المنازعات في مصر',
      'التفاوض وتسوية المنازعات التجارية'
    ],

    en: [
      // Sharm El Sheikh
      'Lawyer in Sharm El Sheikh',
      'Best Lawyer in Sharm El Sheikh',
      'Law Firm in Sharm El Sheikh',
      'Foreigners Lawyer in Sharm El Sheikh',
      'Criminal Lawyer in Sharm El Sheikh',
      'Civil Lawyer in Sharm El Sheikh',
      'Corporate Lawyer in Sharm El Sheikh',
      'Personal Status Lawyer in Sharm El Sheikh',
      'Divorce Lawyer in Sharm El Sheikh',
      'Immigration Lawyer in Sharm El Sheikh',
      'Visa Lawyer in Sharm El Sheikh',
      'Legal Consultation in Sharm El Sheikh',
      'Legal Consultant in Sharm El Sheikh',
      'Compensation Lawyer in Sharm El Sheikh',
      'Labor Lawyer in Sharm El Sheikh',
      'Business Litigation Lawyer in Sharm El Sheikh',
      'Civil Rights Attorney Sharm El Sheikh',
      'Criminal Defense Attorney Sharm El Sheikh',
      'Family Law Attorney Sharm El Sheikh',
      'Personal Injury Lawyer Sharm El Sheikh',
      'French Lawyer in Sharm El Sheikh',
      'Italian Lawyer in Sharm El Sheikh',
      'English Lawyer in Sharm El Sheikh',
      'Lawyer Phone Number Sharm El Sheikh',

      // Alexandria
      'Lawyer in Alexandria',
      'Best Law Firm in Alexandria',
      'Law Firm in Alexandria',
      'Lawyer for Foreigners Cases in Alexandria',
      'Immigration and Residency Lawyer in Alexandria',
      'Civil Lawyer in Alexandria',
      'Criminal Lawyer in Alexandria',
      'Divorce Cases Lawyer in Alexandria',
      'Corporate Lawyer in Alexandria',
      'Personal Status Cases Lawyer in Alexandria',
      'Visa Lawyer in Alexandria',
      'Legal Advisor in Alexandria',
      'Compensation Lawyer in Alexandria',
      'Labor Cases Lawyer in Alexandria',
      'Commercial Cases Lawyer in Alexandria',
      'Lawyer for Foreign Investors in Alexandria',
      'French Lawyer in Alexandria',
      'Italian Lawyer in Alexandria',
      'English Lawyer in Alexandria',
      'Lawyer Contact Number in Alexandria',

      // Egypt General
      'Lawyer in Egypt',
      'Best Law Firm in Egypt',
      'Lawyer for Foreigners Cases in Egypt',
      'Immigration and Residency Lawyer in Egypt',
      'Foreign Investors Lawyer in Egypt',
      'French Lawyer in Egypt',
      'Italian Lawyer in Egypt',
      'English Lawyer in Egypt',
      'Legal services for foreigners',
      'Company formation for foreigners',
      'Property and investment lawyer',
      'lawyer for foreign investors',
      'international lawyer Egypt',
      'karim eldib lawyer',
      'attorney sharm el sheikh',
      'real estate lawyer sharm el sheikh',
      'investment lawyer sharm el sheikh',
      'residence permit lawyer sharm el sheikh',
      'International Arbitration Lawyer in Egypt',
      'International Arbitration in Egypt',
      'International Dispute Resolution in Egypt',
      'International Law Firm in Egypt',
      'International Lawyers in Egypt',
      'Commercial Arbitration in Egypt',
      'International Commercial Arbitration',
      'Cross-Border Dispute Resolution',
      'International Commercial Disputes',
      'Investment Disputes in Egypt',
      'Foreign Investor Disputes in Egypt',
      'Arbitration Lawyer in Alexandria',
      'Arbitration Lawyer in Sharm El Sheikh',
      'Dispute Resolution Lawyer in Egypt',
      'Foreign Investors Lawyer Egypt'
    ],

    fr: [
      'Avocat pour étrangers à Sharm El Sheikh',
      'Meilleur avocat à Sharm El Sheikh',
      'Cabinet d\'avocats à Sharm El Sheikh',
      'Avocat francophone Sharm El Sheikh',
      'Avocat pour étrangers à Alexandrie',
      'Meilleur avocat à Alexandrie',
      'Avocat francophone Alexandrie',
      'Avocat pour étrangers en Égypte',
      'Avocat français en Égypte',
      'Services juridiques pour étrangers',
      'Création d\'entreprise pour étrangers',
      'Avocat immobilier et investissement',
      'Avocat divorce Égypte',
      'Avocat immigration Égypte',
      'Avocat investisseurs étrangers',
      'Avocat résidence Égypte',
      'Avocat mariage Sharm El Sheikh',
      'Avocat affaires Sharm El Sheikh',
      'Conseiller juridique Sharm El Sheikh',
      'Maitre Karim Eldib'
    ],

    it: [
      'Avvocato per stranieri a Sharm El Sheikh',
      'Miglior avvocato a Sharm El Sheikh',
      'Studio legale a Sharm El Sheikh',
      'Avvocato italiano Sharm El Sheikh',
      'Avvocato per stranieri ad Alessandria',
      'Miglior avvocato ad Alessandria',
      'Avvocato italiano Alessandria',
      'Avvocato per stranieri in Egitto',
      'Avvocato italiano in Egitto',
      'Servizi legali per stranieri',
      'Costituzione di società per stranieri',
      'Avvocato immobiliare e investimenti',
      'Avvocato divorzio Egitto',
      'Avvocato immigrazione Egitto',
      'Avvocato investitori stranieri',
      'Avvocato permesso di soggiorno Sharm El Sheikh',
      'Avvocato matrimonio Sharm El Sheikh',
      'Avvocato affari Sharm El Sheikh',
      'Consulenza legale Sharm El Sheikh',
      'Avvocato Karim Eldib'
    ]
  };

  const defaultTitle = language === 'ar'
    ? 'محامي أجانب في مصر | كريم الديب | شرم الشيخ - القاهرة - الإسكندرية'
    : language === 'fr'
      ? 'Avocat pour Étrangers en Égypte | Karim Eldib | Sharm El Sheikh - Le Caire - Alexandrie'
      : language === 'it'
        ? 'Avvocato per Stranieri in Egitto | Karim Eldib | Sharm El Sheikh - Cairo - Alessandria'
        : 'Lawyer for Foreigners in Egypt | Karim Eldib | Sharm El Sheikh - Cairo - Alexandria';

  const defaultDescription = language === 'ar'
    ? 'أفضل محامي أجانب متخصص في شرم الشيخ والإسكندرية ومصر. خدمات قانونية شاملة: قضايا الأجانب، إقامة وتأشيرات، تأسيس شركات، قضايا مدنية وجنائية، طلاق وأحوال شخصية، عقارات واستثمارات، قضايا عمالية. نتحدث العربية والإنجليزية والفرنسية والإيطالية. مكتب المحامي كريم الديب - خبرة 18 عاماً.'
    : language === 'fr'
      ? 'Meilleur avocat pour étrangers à Sharm El Sheikh, Alexandrie et Égypte. Services juridiques complets: affaires d\'étrangers, résidence et visas, création de sociétés, affaires civiles et pénales, divorce et statut personnel, immobilier et investissements. Nous parlons français, arabe, anglais et italien. Cabinet Karim Eldib - 18 ans d\'expérience.'
      : language === 'it'
        ? 'Miglior avvocato per stranieri a Sharm El Sheikh, Alessandria ed Egitto. Servizi legali completi: casi di stranieri, residenza e visti, costituzione di società, casi civili e penali, divorzio e stato personale, immobiliare e investimenti. Parliamo italiano, arabo, inglese e francese. Studio Legale Karim Eldib - 18 anni di esperienza.'
        : 'Best lawyer for foreigners in Sharm El Sheikh, Alexandria and Egypt. Comprehensive legal services: foreigners cases, residence and visas, company formation, civil and criminal cases, divorce and personal status, real estate and investments, labor cases. We speak English, Arabic, French and Italian. Karim Eldib Law Firm - 18 years of experience.';

  const combinedKeywords = [
    ...(keywords ? [keywords] : []),
    ...cityKeywords[language],
  ].join(', ');

  const pageTitle = title || defaultTitle;
  const pageDescription = description || defaultDescription;

  // Structured Data for Local Business
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        "@id": `${canonicalUrl}#legalservice`,
        "name": isRTL ? "مؤسسة كريم الديب للمحاماة الدولية" : "Karim Eldib International Law Firm",
        "alternateName": [
          "كريم الديب محامي أجانب",
          "Karim Eldib Lawyer for Foreigners",
          "مكتب كريم الديب للمحاماة"
        ],
        "description": pageDescription,
        "url": canonicalUrl,
        "telephone": "+201223767592",
        "email": "kingarim2411@gmail.com",
        "priceRange": "$$",
        "knowsLanguage": ["Arabic", "English", "French", "Italian"],
        "areaServed": [
          {
            "@type": "City",
            "name": "Sharm El Sheikh",
            "alternateName": "شرم الشيخ"
          },
          {
            "@type": "City",
            "name": "Cairo",
            "alternateName": "القاهرة"
          },
          {
            "@type": "City",
            "name": "Alexandria",
            "alternateName": "الإسكندرية"
          },
          {
            "@type": "City",
            "name": "Hurghada",
            "alternateName": "الغردقة"
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": isRTL ? "خدمات قانونية للأجانب" : "Legal Services for Foreigners",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": isRTL ? "محامي أجانب في شرم الشيخ" : "Lawyer for Foreigners in Sharm El Sheikh",
                "description": isRTL
                  ? "خدمات قانونية متخصصة للأجانب في شرم الشيخ. استشارات، إقامات، تأسيس شركات، عقود"
                  : "Specialized legal services for foreigners in Sharm El Sheikh. Consultations, residence permits, company formation, contracts",
                "areaServed": "Sharm El Sheikh"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": isRTL ? "محامي أجانب في القاهرة" : "Lawyer for Foreigners in Cairo",
                "description": isRTL
                  ? "محامي متخصص للأجانب في القاهرة. خدمات قانونية شاملة للمستثمرين الأجانب"
                  : "Specialized lawyer for foreigners in Cairo. Comprehensive legal services for foreign investors",
                "areaServed": "Cairo"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": isRTL ? "محامي أجانب في الإسكندرية" : "Lawyer for Foreigners in Alexandria",
                "description": isRTL
                  ? "محامي للأجانب في الإسكندرية. خدمات قانونية، عقود، قضايا، استشارات"
                  : "Lawyer for foreigners in Alexandria. Legal services, contracts, cases, consultations",
                "areaServed": "Alexandria"
              }
            }
          ]
        },
        "address": [
          {
            "@type": "PostalAddress",
            "streetAddress": "14 شارع الشهداء",
            "addressLocality": "الإسكندرية",
            "addressRegion": "Alexandria",
            "addressCountry": "EG",
            "name": isRTL ? "مكتب الإسكندرية" : "Alexandria Office"
          },
          {
            "@type": "PostalAddress",
            "streetAddress": "الهضبة",
            "addressLocality": "شرم الشيخ",
            "addressRegion": "South Sinai",
            "addressCountry": "EG",
            "name": isRTL ? "مكتب شرم الشيخ" : "Sharm El Sheikh Office"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "reviewCount": "150",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "Attorney",
        "@id": `${canonicalUrl}#attorney`,
        "name": "Karim Eldib",
        "alternateName": "كريم الديب",
        "honorificPrefix": isRTL ? "المحامي" : "Attorney",
        "knowsLanguage": ["Arabic", "English", "French"],
        "jobTitle": isRTL ? "محامي دولي متخصص في خدمات الأجانب" : "International Lawyer Specializing in Foreign Services",
        "worksFor": {
          "@id": `${canonicalUrl}#legalservice`
        },
        "description": isRTL
          ? "محامي دولي بخبرة 18 عام، متخصص في خدمات الأجانب والمستثمرين في مصر. محامي معتمد لدى القنصلية الفرنسية"
          : "International lawyer with 18 years experience, specialized in serving foreigners and investors in Egypt. Certified lawyer at French Consulate"
      },
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": pageTitle,
        "description": pageDescription,
        "inLanguage": language === 'ar' ? 'ar-EG' : 'en-US',
        "isPartOf": {
          "@type": "WebSite",
          "@id": `${canonicalUrl}#website`,
          "url": canonicalUrl,
          "name": isRTL ? "مؤسسة كريم الديب للمحاماة" : "Karim Eldib Law Firm",
          "publisher": {
            "@id": `${canonicalUrl}#legalservice`
          }
        }
      }
    ]
  };

  useEffect(() => {
    // Update document title
    document.title = pageTitle;

    // Update meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', pageDescription);
    updateMetaTag('keywords', combinedKeywords);

    // Geo targeting
    updateMetaTag('geo.region', 'EG');
    updateMetaTag('geo.placename', 'Sharm El Sheikh, Cairo, Alexandria, Hurghada');
    updateMetaTag('geo.position', '27.915551;34.329750');
    updateMetaTag('ICBM', '27.915551, 34.329750');

    // Language & Location
    updateMetaTag('language', language === 'ar' ? 'Arabic' : 'English');
    updateMetaTag('coverage', 'Egypt');
    updateMetaTag('distribution', 'global');
    updateMetaTag('target', 'foreigners in Egypt, expats, investors, international clients');

    // Robots
    updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMetaTag('googlebot', 'index, follow');
    updateMetaTag('bingbot', 'index, follow');
    updateMetaTag('revisit-after', '1 days');

    // Open Graph
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:url', canonicalUrl, true);
    updateMetaTag('og:title', pageTitle, true);
    updateMetaTag('og:description', pageDescription, true);
    updateMetaTag('og:image', `${canonicalUrl}/images/lawyer-7.jpg`, true);
    updateMetaTag('og:locale', language === 'ar' ? 'ar_EG' : 'en_US', true);
    updateMetaTag('og:site_name', isRTL ? 'مؤسسة كريم الديب للمحاماة' : 'Karim Eldib Law Firm', true);

    // Twitter Card
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', pageTitle);
    updateMetaTag('twitter:description', pageDescription);
    updateMetaTag('twitter:image', `${canonicalUrl}/images/lawyer-7.jpg`);

    // Author & Copyright
    updateMetaTag('author', 'Karim Eldib Law Firm');
    updateMetaTag('copyright', '© 2025 Karim Eldib Law Firm');

    // City-specific
    if (city) {
      updateMetaTag('city', city);
      updateMetaTag('business:contact_data:locality', city, true);
      updateMetaTag('business:contact_data:country_name', 'Egypt', true);
    }

    // Add canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Add hreflang alternate links for multilingual SEO targeting
    const languagesList: ('ar' | 'en' | 'fr' | 'it')[] = ['ar', 'en', 'fr', 'it'];
    const currentPath = window.location.pathname;
    
    // Remove existing hreflang link tags to avoid duplicates on route change
    const existingHreflangs = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingHreflangs.forEach(el => el.remove());
    
    // Create new hreflang link tags
    languagesList.forEach(lang => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', lang === 'ar' ? 'ar-eg' : lang === 'en' ? 'en-us' : lang === 'fr' ? 'fr-fr' : 'it-it');
      link.setAttribute('href', `https://ke-lawyer.com${currentPath}?lang=${lang}`);
      document.head.appendChild(link);
    });

    // Add x-default link tag (fallback)
    const defaultLink = document.createElement('link');
    defaultLink.setAttribute('rel', 'alternate');
    defaultLink.setAttribute('hreflang', 'x-default');
    defaultLink.setAttribute('href', `https://ke-lawyer.com${currentPath}`);
    document.head.appendChild(defaultLink);

    // Add structured data
    let structuredDataScript = document.querySelector('script[type="application/ld+json"][data-seo="advanced"]');
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.setAttribute('type', 'application/ld+json');
      structuredDataScript.setAttribute('data-seo', 'advanced');
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);

    // Update html attributes
    document.documentElement.lang = language === 'ar' ? 'ar-EG' : 'en-US';
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';

  }, [pageTitle, pageDescription, combinedKeywords, canonicalUrl, city, language, isRTL, structuredData]);

  return null;
};

export default AdvancedSEO;
