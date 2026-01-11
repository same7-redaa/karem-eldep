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
      'محامي أجانب في شرم الشيخ', 'أفضل محامي في شرم الشيخ', 'محامي دولي في شرم الشيخ', 'مكتب محاماة في شرم الشيخ', 'محامي استثمار في شرم الشيخ', 'محامي عقارات في شرم الشيخ',
      'محامي أجانب في الإسكندرية', 'أفضل محامي في الإسكندرية', 'محامي دولي في الإسكندرية', 'مكتب محاماة في الإسكندرية', 'محامي قضايا أجانب الإسكندرية',
      'محامي أجانب في مصر', 'محامي زواج أجانب شرم الشيخ', 'محامي تأسيس شركات شرم الشيخ', 'محامي إقامات شرم الشيخ',
      'محامي فرنسي في شرم الشيخ', 'محامي ايطالي في شرم الشيخ', 'محامي روسي في شرم الشيخ', 'محامي انجليزي في شرم الشيخ',
      'كريم الديب محامي أجانب', 'محامي دولي كريم الديب',
      'Lawyer Sharm El Sheikh', 'Lawyer Alexandria', 'Avocat Sharm El Sheikh', 'Avvocato Sharm El Sheikh'
    ],
    en: [
      'lawyer for foreigners in sharm el sheikh', 'best lawyer in sharm el sheikh', 'international lawyer sharm el sheikh', 'law firm in sharm el sheikh', 'legal services sharm el sheikh',
      'lawyer for foreigners in alexandria', 'best lawyer in alexandria', 'international lawyer alexandria', 'law firm in alexandria', 'legal services alexandria',
      'lawyer for foreigners in egypt', 'english speaking lawyer sharm el sheikh', 'english speaking lawyer alexandria',
      'real estate lawyer sharm el sheikh', 'marriage lawyer sharm el sheikh', 'business lawyer sharm el sheikh',
      'investment lawyer sharm el sheikh', 'residence permit lawyer sharm el sheikh',
      'italian speaking lawyer sharm el sheikh', 'french speaking lawyer sharm el sheikh', 'russian speaking lawyer sharm el sheikh',
      'karim eldib lawyer', 'attorney sharm el sheikh', 'solicitor sharm el sheikh'
    ],
    fr: [
      'avocat pour étrangers à sharm el sheikh', 'meilleur avocat à sharm el sheikh', 'avocat international sharm el sheikh', 'cabinet d\'avocats à sharm el sheikh',
      'avocat pour étrangers à alexandrie', 'meilleur avocat à alexandrie', 'avocat international alexandrie', 'cabinet d\'avocats à alexandrie',
      'avocat francophone sharm el sheikh', 'avocat francophone alexandrie',
      'avocat immobilier sharm el sheikh', 'avocat mariage sharm el sheikh', 'avocat affaires sharm el sheikh',
      'avocat résidence egypte', 'avocat investissement sharm el sheikh',
      'maitre karim eldib', 'conseiller juridique sharm el sheikh'
    ],
    it: [
      'avvocato per stranieri a sharm el sheikh', 'miglior avvocato a sharm el sheikh', 'avvocato internazionale sharm el sheikh', 'studio legale a sharm el sheikh',
      'avvocato per stranieri ad alessandria', 'miglior avvocato ad alessandria', 'avvocato internazionale alessandria', 'studio legale ad alessandria',
      'avvocato italiano sharm el sheikh', 'avvocato italiano alessandria',
      'avvocato immobiliare sharm el sheikh', 'avvocato matrimonio sharm el sheikh', 'avvocato affari sharm el sheikh',
      'avvocato permesso di soggiorno sharm el sheikh', 'consulenza legale sharm el sheikh',
      'avvocato karim eldib'
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
    ? 'أفضل محامي أجانب متخصص في مصر. خدمات قانونية شاملة في شرم الشيخ، القاهرة، الإسكندرية، الغردقة. تأسيس شركات، زواج أجانب، عقارات، إقامات. مكتب المحامي كريم الديب خبرة 18 عاماً.'
    : language === 'fr'
      ? 'Meilleur avocat pour étrangers en Égypte. Services juridiques à Sharm El Sheikh, Le Caire, Alexandrie, Hurghada. Création de sociétés, mariage, immobilier. Cabinet Karim Eldib, 18 ans d\'expérience.'
      : language === 'it'
        ? 'Miglior avvocato per stranieri in Egitto. Servizi legali a Sharm El Sheikh, Cairo, Alessandria, Hurghada. Costituzione società, matrimonio, immobiliare. Studio Legale Karim Eldib.'
        : 'Best lawyer for foreigners in Egypt. Expert legal services in Sharm El Sheikh, Cairo, Alexandria, Hurghada. Company formation, marriage, real estate, residence permits. Karim Eldib Law Firm.';

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
