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

  // SEO Keywords للمدن الرئيسية
  const cityKeywords = {
    ar: [
      'محامي أجانب في شرم الشيخ',
      'محامي اجانب شرم الشيخ',
      'محامي للأجانب شرم الشيخ',
      'lawyer for foreigners sharm el sheikh',
      'محامي أجانب في القاهرة',
      'محامي اجانب القاهرة',
      'محامي للأجانب القاهرة',
      'lawyer for foreigners cairo',
      'محامي أجانب في الإسكندرية',
      'محامي اجانب الاسكندرية',
      'محامي للأجانب الاسكندرية',
      'lawyer for foreigners alexandria',
      'محامي أجانب في الغردقة',
      'محامي اجانب الغردقة',
      'lawyer for foreigners hurghada',
      'كريم الديب محامي أجانب',
      'محامي كريم الديب',
      'مكتب كريم الديب للمحاماة',
      'محامي دولي في مصر',
      'محامي استثمار أجنبي',
      'محامي تأسيس شركات للأجانب',
      'international lawyer egypt',
      'foreign investment lawyer egypt',
      'lawyer for expats egypt',
      'english speaking lawyer egypt',
      'french speaking lawyer egypt',
      'محامي يتكلم انجليزي',
      'محامي يتكلم فرنسي',
      'محامي القنصلية الفرنسية',
      'محامي معتمد قنصلية فرنسا',
      'avocat pour étrangers egypte',
    ],
    en: [
      'lawyer for foreigners sharm el sheikh',
      'international lawyer sharm el sheikh',
      'lawyer for foreigners cairo',
      'international lawyer cairo',
      'lawyer for foreigners alexandria',
      'international lawyer alexandria',
      'lawyer for foreigners hurghada',
      'karim eldib lawyer',
      'karim eldib attorney',
      'foreign investment lawyer egypt',
      'company formation lawyer egypt',
      'expat lawyer egypt',
      'english speaking lawyer egypt',
      'french speaking lawyer egypt',
      'french consulate lawyer egypt',
      'legal services for foreigners egypt',
      'residence permit lawyer egypt',
      'visa lawyer egypt',
      'business lawyer for foreigners',
      'real estate lawyer for foreigners egypt',
    ],
    fr: [
      'avocat pour étrangers sharm el sheikh',
      'avocat international sharm el sheikh',
      'avocat pour étrangers le caire',
      'avocat international le caire',
      'avocat pour étrangers alexandrie',
      'avocat international alexandrie',
      'avocat pour étrangers hurghada',
      'karim eldib avocat',
      'avocat investissement étranger egypte',
      'avocat création entreprise egypte',
      'avocat pour expatriés egypte',
      'avocat francophone egypte',
      'avocat consulat français egypte',
      'services juridiques étrangers egypte',
      'avocat permis de résidence egypte',
      'avocat visa egypte',
      'avocat immobilier étrangers egypte',
      'conseil juridique français egypte',
    ],
    it: [
      'avvocato per stranieri sharm el sheikh',
      'avvocato internazionale sharm el sheikh',
      'avvocato per stranieri cairo',
      'avvocato internazionale cairo',
      'avvocato per stranieri alessandria',
      'avvocato internazionale alessandria',
      'avvocato per stranieri hurghada',
      'karim eldib avvocato',
      'avvocato investimenti esteri egitto',
      'avvocato costituzione società egitto',
      'avvocato per expat egitto',
      'avvocato italiano egitto',
      'servizi legali stranieri egitto',
      'avvocato permesso di soggiorno egitto',
      'avvocato visti egitto',
      'avvocato immobiliare stranieri egitto',
      'consulenza legale italiana egitto',
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
    ? 'محامي أجانب متخصص في مصر. خدمات قانونية للأجانب في شرم الشيخ، القاهرة، الإسكندرية، الغردقة. محامي كريم الديب - استشارات قانونية، تأسيس شركات، إقامات، عقود دولية. محامي معتمد لدى القنصلية الفرنسية. خبرة 18 عام في خدمة الأجانب والمستثمرين. اتصل الآن: +20 122 376 7592'
    : language === 'fr'
    ? 'Avocat spécialisé pour étrangers en Égypte. Services juridiques à Sharm El Sheikh, Le Caire, Alexandrie, Hurghada. Karim Eldib - Avocat international pour consultations juridiques, création de sociétés, permis de résidence, contrats internationaux. Avocat certifié au Consulat français. 18 ans d\'expérience au service des étrangers et investisseurs. Appelez maintenant: +20 122 376 7592'
    : language === 'it'
    ? 'Avvocato specializzato per stranieri in Egitto. Servizi legali a Sharm El Sheikh, Cairo, Alessandria, Hurghada. Karim Eldib - Avvocato internazionale per consulenze legali, costituzione società, permessi di soggiorno, contratti internazionali. Avvocato certificato al Consolato francese. 18 anni di esperienza al servizio di stranieri e investitori. Chiama ora: +20 122 376 7592'
    : 'Specialized lawyer for foreigners in Egypt. Legal services in Sharm El Sheikh, Cairo, Alexandria, Hurghada. Karim Eldib - International lawyer for legal consultations, company formation, residence permits, international contracts. Certified lawyer at French Consulate. 18 years experience serving foreigners and investors. Call now: +20 122 376 7592';

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
        "telephone": "+2001223767592",
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
