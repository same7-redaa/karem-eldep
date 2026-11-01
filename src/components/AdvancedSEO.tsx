import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface AdvancedSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  city?: string;
}

const DOMAIN = 'https://www.ke-lawyer.com';

const AdvancedSEO: React.FC<AdvancedSEOProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  city
}) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  // Calculate clean path without language prefix
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';
  const cleanPath = currentPath.replace(/^\/(en|ar|fr|it)(\/|$)/, '/') || '/';
  const normalizedCleanPath = cleanPath === '/' ? '/' : cleanPath.replace(/\/$/, '');

  // Calculate self-referencing canonical URL
  const resolvedCanonical = canonicalUrl
    ? (language === 'en' && !canonicalUrl.includes('/en')
        ? canonicalUrl.replace(DOMAIN, `${DOMAIN}/en`)
        : canonicalUrl)
    : (language === 'ar'
        ? `${DOMAIN}${normalizedCleanPath}`
        : `${DOMAIN}/${language}${normalizedCleanPath === '/' ? '' : normalizedCleanPath}`);

  // SEO Keywords للمدن الرئيسية
  const cityKeywords: Record<'ar' | 'en' | 'fr' | 'it', string[]> = {
    ar: [
      'محامي في شرم الشيخ',
      'أفضل محامي في شرم الشيخ',
      'مكتب محاماة في شرم الشيخ',
      'محامي أجانب في شرم الشيخ',
      'محامي جنائي في شرم الشيخ',
      'محامي شركات في شرم الشيخ',
      'محامي أحوال شخصية في شرم الشيخ',
      'استشارات قانونية في شرم الشيخ',
      'محامي في الإسكندرية',
      'أفضل مكتب محاماة في الإسكندرية',
      'مكتب محاماة في الإسكندرية',
      'محامي قضايا أجانب في الإسكندرية',
      'محامي هجرة وإقامة في الإسكندرية',
      'محامي شركات في الإسكندرية',
      'محامي أحوال شخصية في الإسكندرية',
      'محامي أجانب في مصر',
      'محامي مستثمرين أجانب في مصر',
      'محامي تأسيس شركات للأجانب',
      'كريم الديب محامي أجانب',
      'محامي تحكيم دولي في مصر',
      'التحكيم التجاري الدولي في مصر',
      'محامي منازعات دولية في مصر',
      'تسوية المنازعات الدولية في مصر',
      'تنفيذ أحكام التحكيم الأجنبية في مصر',
      'مركز القاهرة الإقليمي للتحكيم CRCICA'
    ],
    en: [
      'Lawyer in Sharm El Sheikh',
      'Best lawyer in Sharm El Sheikh',
      'Law firm in Sharm El Sheikh',
      'Foreigners lawyer Sharm El Sheikh',
      'Criminal lawyer Sharm El Sheikh',
      'Corporate lawyer Sharm El Sheikh',
      'Family lawyer Sharm El Sheikh',
      'Immigration lawyer Sharm El Sheikh',
      'Lawyer in Alexandria',
      'Best law firm in Alexandria',
      'Law firm in Alexandria',
      'Foreigners lawyer Alexandria',
      'Lawyer in Egypt',
      'Best lawyer in Egypt',
      'English speaking lawyer Egypt',
      'International arbitration lawyer Egypt',
      'Commercial arbitration in Egypt',
      'Foreign investment lawyer Egypt',
      'Company formation Egypt',
      'Enforcement foreign arbitral awards Egypt',
      'CRCICA arbitration Egypt'
    ],
    fr: [
      'Avocat pour étrangers à Sharm El Sheikh',
      'Cabinet d\'avocats à Sharm El Sheikh',
      'Avocat francophone Sharm El Sheikh',
      'Avocat pour étrangers à Alexandrie',
      'Avocat francophone Alexandrie',
      'Avocat pour étrangers en Égypte',
      'Services juridiques pour étrangers',
      'Création d\'entreprise pour étrangers',
      'Arbitrage commercial international Égypte',
      'Exécution sentences arbitrales Égypte'
    ],
    it: [
      'Avvocato per stranieri a Sharm El Sheikh',
      'Studio legale a Sharm El Sheikh',
      'Avvocato italiano Sharm El Sheikh',
      'Avvocato per stranieri ad Alessandria',
      'Avvocato per stranieri in Egitto',
      'Servizi legali per stranieri',
      'Costituzione di società per stranieri',
      'Arbitrato internazionale Egitto'
    ]
  };

  const defaultTitle = language === 'ar'
    ? 'المحامي كريم الديب | محامي تحكيم دولي وقضايا أجانب في مصر | شرم الشيخ - الإسكندرية - القاهرة'
    : language === 'fr'
      ? 'Cabinet Karim Eldib | Avocat Arbitrage International & Étrangers en Égypte'
      : language === 'it'
        ? 'Studio Karim Eldib | Avvocato Arbitrato Internazionale & Stranieri in Egitto'
        : 'Karim Eldib Law Firm | International Arbitration & Foreigners Lawyer in Egypt';

  const defaultDescription = language === 'ar'
    ? 'مؤسسة المحامي كريم الديب للمحاماة والتحكيم الدولي في مصر. خدمات متخصصة للأجانب والمستثمرين والمصريين بالخارج: تأسيس شركات، إقامات، عقارات، تحكيم تجاري دولي، وقضايا أسرة وجنائي. نتحدث العربية والإنجليزية والفرنسية والإيطالية.'
    : language === 'fr'
      ? 'Cabinet Karim Eldib - Avocats spécialisés en arbitrage international, droit des affaires et litiges pour étrangers et investisseurs en Égypte. Présence à Alexandrie, Sharm El Sheikh et Le Caire.'
      : language === 'it'
        ? 'Studio Karim Eldib - Assistenza legale specializzata per stranieri e investitori in Egitto: arbitrato internazionale, societario, immobiliare e diritto di famiglia.'
        : 'Karim Eldib Law Firm — Premier international law firm in Egypt specializing in international commercial arbitration, investment disputes, company formation, residence permits & expat legal services in Cairo, Alexandria & Sharm El Sheikh.';

  const combinedKeywords = [
    ...(keywords ? [keywords] : []),
    ...(cityKeywords[language] || cityKeywords['ar']),
  ].join(', ');

  const pageTitle = title || defaultTitle;
  const pageDescription = description || defaultDescription;

  // Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        "@id": `${DOMAIN}#legalservice`,
        "name": isRTL ? "مؤسسة كريم الديب للمحاماة والتحكيم الدولي" : "Karim Eldib Law Firm & International Arbitration",
        "alternateName": [
          "كريم الديب محامي",
          "المحامي كريم الديب",
          "Karim Eldib Lawyer",
          "Unlimited lawyers and foreign services"
        ],
        "description": pageDescription,
        "url": DOMAIN,
        "telephone": "+201223767592",
        "email": "kingarim2411@gmail.com",
        "priceRange": "$$",
        "image": `${DOMAIN}/images/lawyer-7.jpg`,
        "address": [
          {
            "@type": "PostalAddress",
            "streetAddress": "14 شارع الشهداء (محطة الرمل)",
            "addressLocality": "الإسكندرية",
            "addressRegion": "Alexandria",
            "addressCountry": "EG"
          },
          {
            "@type": "PostalAddress",
            "streetAddress": "الهضبة",
            "addressLocality": "شرم الشيخ",
            "addressRegion": "South Sinai",
            "addressCountry": "EG"
          }
        ],
        "areaServed": [
          { "@type": "Country", "name": "Egypt" },
          { "@type": "City", "name": "Cairo" },
          { "@type": "City", "name": "Alexandria" },
          { "@type": "City", "name": "Sharm El Sheikh" }
        ]
      },
      {
        "@type": "Attorney",
        "@id": `${DOMAIN}#attorney`,
        "name": isRTL ? "كريم الديب" : "Karim Eldib",
        "jobTitle": isRTL ? "محامي بالنقض ومحكم دولي" : "Attorney at Cassation & International Arbitrator",
        "worksFor": { "@id": `${DOMAIN}#legalservice` },
        "telephone": "+201223767592",
        "knowsLanguage": ["Arabic", "English", "French", "Italian"]
      },
      {
        "@type": "WebPage",
        "@id": `${resolvedCanonical}#webpage`,
        "url": resolvedCanonical,
        "name": pageTitle,
        "description": pageDescription,
        "inLanguage": language,
        "isPartOf": {
          "@type": "WebSite",
          "@id": `${DOMAIN}#website`,
          "url": DOMAIN,
          "name": isRTL ? "مؤسسة كريم الديب للمحاماة" : "Karim Eldib Law Firm"
        }
      }
    ]
  };

  useEffect(() => {
    // 1. Update document title
    document.title = pageTitle;

    // Helper to set meta tags
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

    // 2. Standard Meta Tags
    updateMetaTag('description', pageDescription);
    updateMetaTag('keywords', combinedKeywords);
    updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMetaTag('googlebot', 'index, follow');
    updateMetaTag('bingbot', 'index, follow');
    updateMetaTag('language', language === 'ar' ? 'ar' : language);
    updateMetaTag('author', 'Karim Eldib Law Firm');

    // 3. Geo Targeting
    updateMetaTag('geo.region', 'EG');
    updateMetaTag('geo.placename', city || 'Cairo, Alexandria, Sharm El Sheikh, Egypt');

    // 4. Open Graph Tags
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:url', resolvedCanonical, true);
    updateMetaTag('og:title', pageTitle, true);
    updateMetaTag('og:description', pageDescription, true);
    updateMetaTag('og:image', `${DOMAIN}/images/lawyer-7.jpg`, true);
    updateMetaTag('og:site_name', isRTL ? 'مؤسسة كريم الديب للمحاماة والتحكيم الدولي' : 'Karim Eldib Law Firm', true);
    updateMetaTag('og:locale', language === 'ar' ? 'ar_EG' : language === 'en' ? 'en_US' : language === 'fr' ? 'fr_FR' : 'it_IT', true);

    // 5. Twitter Tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:url', resolvedCanonical);
    updateMetaTag('twitter:title', pageTitle);
    updateMetaTag('twitter:description', pageDescription);
    updateMetaTag('twitter:image', `${DOMAIN}/images/lawyer-7.jpg`);

    // 6. Update Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', resolvedCanonical);

    // 7. Manage Hreflang Alternate Links (Bidirectional & Clean)
    const existingHreflangs = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingHreflangs.forEach(el => el.remove());

    const arHref = `${DOMAIN}${normalizedCleanPath}`;
    const enHref = `${DOMAIN}/en${normalizedCleanPath === '/' ? '' : normalizedCleanPath}`;
    const frHref = `${DOMAIN}/fr${normalizedCleanPath === '/' ? '' : normalizedCleanPath}`;
    const itHref = `${DOMAIN}/it${normalizedCleanPath === '/' ? '' : normalizedCleanPath}`;

    const addHreflang = (hreflang: string, href: string) => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', hreflang);
      link.setAttribute('href', href);
      document.head.appendChild(link);
    };

    addHreflang('ar', arHref);
    addHreflang('en', enHref);
    addHreflang('fr', frHref);
    addHreflang('it', itHref);
    addHreflang('x-default', arHref);

    // 8. Structured Data
    let structuredDataScript = document.querySelector('script[type="application/ld+json"][data-seo="advanced"]');
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.setAttribute('type', 'application/ld+json');
      structuredDataScript.setAttribute('data-seo', 'advanced');
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);

    // 9. Update HTML lang & dir
    document.documentElement.lang = language;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';

  }, [pageTitle, pageDescription, combinedKeywords, resolvedCanonical, city, language, isRTL, normalizedCleanPath]);

  return null;
};

export default AdvancedSEO;
