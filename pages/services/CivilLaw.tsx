import React, { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const CivilLaw: React.FC = () => {
  const { language, getTextByLanguage } = useLanguage();
  const isRTL = language === 'ar';

  useEffect(() => {
    const title = language === 'ar'
      ? "محامي قانون مدني في مصر | قضايا التعويضات والعقود المدنية | المحامي كريم الديب - خبرة +15 عام"
      : language === 'fr'
      ? "Avocat Droit Civil en Égypte | Affaires d'Indemnisation et Contrats | Karim El-Dib"
      : language === 'it'
      ? "Avvocato Diritto Civile in Egitto | Cause Risarcimenti e Contratti | Karim El-Dib"
      : "Civil Law Lawyer in Egypt | Compensation & Civil Contracts Cases | Lawyer Karim El-Dib - +15 Years Experience";
    
    document.title = title;
    
    // Meta Description محسّن
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', isRTL 
        ? 'أفضل محامي قانون مدني في مصر ✓ خبرة +15 عام في قضايا التعويضات والعقود المدنية والمنازعات العقارية وقضايا الإرث ✓ المحامي كريم الديب - استشارات قانونية مجانية ✓ نسبة نجاح عالية ✓ اتصل الآن: 01009955509'
        : 'Best Civil Law Lawyer in Egypt ✓ +15 Years Experience in Compensation Cases, Civil Contracts, Real Estate Disputes & Inheritance ✓ Lawyer Karim El-Dib - Free Legal Consultation ✓ High Success Rate ✓ Call Now: 01009955509'
      );
    }

    // Meta Keywords محسّن وشامل
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', isRTL
        ? 'محامي قانون مدني, محامي قانون مدني في مصر, افضل محامي قانون مدني, قضايا التعويضات, محامي تعويضات, محامي عقود مدنية, صياغة عقود, منازعات عقارية, محامي عقارات, قضايا الإرث, تقسيم تركات, محامي ميراث, محامي احوال شخصية, المسؤولية التقصيرية, حوادث سيارات, اخطاء طبية, محامي في الاسكندرية, محامي في شرم الشيخ, كريم الديب محامي, مكتب كريم الديب للمحاماة, استشارات قانونية مجانية, محامي متخصص في القانون المدني, محامي خبير قانون مدني مصر, civil law lawyer egypt, civil lawyer cairo, compensation lawyer, contract lawyer, real estate lawyer, inheritance lawyer egypt, karim eldib lawyer, eldib law firm, egyptian civil law attorney, best civil lawyer egypt, civil litigation lawyer, tort lawyer egypt, property lawyer egypt, estate lawyer cairo'
        : 'civil law lawyer, civil law lawyer egypt, best civil lawyer, compensation cases, compensation lawyer, civil contracts lawyer, contract drafting, real estate disputes, property lawyer, inheritance cases, estate division, inheritance lawyer, family law, tort liability, car accidents, medical malpractice, lawyer in alexandria, lawyer in sharm el sheikh, karim eldib lawyer, eldib law firm, free legal consultation, specialized civil law lawyer, expert civil law lawyer egypt, محامي قانون مدني, محامي مصر, محامي القاهرة, محامي الاسكندرية, civil litigation attorney, tort attorney egypt, property attorney egypt, estate attorney cairo, egyptian civil law specialist'
      );
    }

    // إضافة Open Graph Tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', isRTL 
      ? 'محامي قانون مدني في مصر | المحامي كريم الديب - خبرة +15 عام'
      : 'Civil Law Lawyer in Egypt | Lawyer Karim El-Dib - +15 Years Experience'
    );

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', isRTL 
      ? 'أفضل محامي قانون مدني متخصص في قضايا التعويضات والعقود المدنية والمنازعات العقارية وقضايا الإرث. استشارة قانونية مجانية.'
      : 'Best civil law lawyer specialized in compensation cases, civil contracts, real estate disputes, and inheritance cases. Free legal consultation.'
    );

    let ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      ogType = document.createElement('meta');
      ogType.setAttribute('property', 'og:type');
      document.head.appendChild(ogType);
    }
    ogType.setAttribute('content', 'website');

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', 'https://ke-lawyer.com/services/civil-law');

    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute('content', 'https://i.postimg.cc/G3FMRMY4/3.png');

    // Twitter Card Tags
    let twitterCard = document.querySelector('meta[name="twitter:card"]');
    if (!twitterCard) {
      twitterCard = document.createElement('meta');
      twitterCard.setAttribute('name', 'twitter:card');
      document.head.appendChild(twitterCard);
    }
    twitterCard.setAttribute('content', 'summary_large_image');

    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitle) {
      twitterTitle = document.createElement('meta');
      twitterTitle.setAttribute('name', 'twitter:title');
      document.head.appendChild(twitterTitle);
    }
    twitterTitle.setAttribute('content', isRTL 
      ? 'محامي قانون مدني في مصر | المحامي كريم الديب'
      : 'Civil Law Lawyer in Egypt | Lawyer Karim El-Dib'
    );

    let twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDescription) {
      twitterDescription = document.createElement('meta');
      twitterDescription.setAttribute('name', 'twitter:description');
      document.head.appendChild(twitterDescription);
    }
    twitterDescription.setAttribute('content', isRTL 
      ? 'خبرة +15 عام في القانون المدني | قضايا التعويضات والعقود والعقارات والإرث'
      : '+15 Years Experience in Civil Law | Compensation, Contracts, Real Estate & Inheritance'
    );

    let twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (!twitterImage) {
      twitterImage = document.createElement('meta');
      twitterImage.setAttribute('name', 'twitter:image');
      document.head.appendChild(twitterImage);
    }
    twitterImage.setAttribute('content', 'https://i.postimg.cc/G3FMRMY4/3.png');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://ke-lawyer.com/services/civil-law');

    // Alternate Language Tags
    let alternateLangAr = document.querySelector('link[rel="alternate"][hreflang="ar"]');
    if (!alternateLangAr) {
      alternateLangAr = document.createElement('link');
      alternateLangAr.setAttribute('rel', 'alternate');
      alternateLangAr.setAttribute('hreflang', 'ar');
      document.head.appendChild(alternateLangAr);
    }
    alternateLangAr.setAttribute('href', 'https://ke-lawyer.com/ar/services/civil-law');

    let alternateLangEn = document.querySelector('link[rel="alternate"][hreflang="en"]');
    if (!alternateLangEn) {
      alternateLangEn = document.createElement('link');
      alternateLangEn.setAttribute('rel', 'alternate');
      alternateLangEn.setAttribute('hreflang', 'en');
      document.head.appendChild(alternateLangEn);
    }
    alternateLangEn.setAttribute('href', 'https://ke-lawyer.com/en/services/civil-law');

    // Robots Meta
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // Author Meta
    let author = document.querySelector('meta[name="author"]');
    if (!author) {
      author = document.createElement('meta');
      author.setAttribute('name', 'author');
      document.head.appendChild(author);
    }
    author.setAttribute('content', 'Karim El-Dib Law Firm');

    // Schema.org JSON-LD للقانون المدني
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LegalService",
          "@id": "https://ke-lawyer.com/services/civil-law#legalservice",
          "name": isRTL ? "مكتب كريم الديب للمحاماة - القانون المدني" : "Karim El-Dib Law Firm - Civil Law",
          "image": "https://i.postimg.cc/G3FMRMY4/3.png",
          "url": "https://ke-lawyer.com/services/civil-law",
          "telephone": "+201009955509",
          "priceRange": "$$",
          "address": [
            {
              "@type": "PostalAddress",
              "streetAddress": "شارع فؤاد",
              "addressLocality": "الإسكندرية",
              "addressRegion": "الإسكندرية",
              "addressCountry": "EG"
            },
            {
              "@type": "PostalAddress",
              "streetAddress": "شرم الشيخ",
              "addressLocality": "شرم الشيخ",
              "addressRegion": "جنوب سيناء",
              "addressCountry": "EG"
            }
          ],
          "geo": [
            {
              "@type": "GeoCoordinates",
              "latitude": 31.2001,
              "longitude": 29.9187
            },
            {
              "@type": "GeoCoordinates",
              "latitude": 27.9158,
              "longitude": 34.3300
            }
          ],
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Saturday",
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday"
            ],
            "opens": "09:00",
            "closes": "18:00"
          },
          "sameAs": [
            "https://www.facebook.com/eldib.law",
            "https://www.linkedin.com/company/eldib-law-firm",
            "https://twitter.com/eldib_law"
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "127",
            "bestRating": "5",
            "worstRating": "1"
          },
          "areaServed": [
            {
              "@type": "Country",
              "name": "Egypt"
            },
            {
              "@type": "City",
              "name": "Alexandria"
            },
            {
              "@type": "City",
              "name": "Cairo"
            },
            {
              "@type": "City",
              "name": "Sharm El Sheikh"
            }
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": isRTL ? "خدمات القانون المدني" : "Civil Law Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": isRTL ? "قضايا التعويضات" : "Compensation Cases",
                  "description": isRTL ? "تمثيل قانوني في قضايا التعويضات المادية والمعنوية" : "Legal representation in material and moral compensation cases"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": isRTL ? "العقود المدنية" : "Civil Contracts",
                  "description": isRTL ? "صياغة ومراجعة العقود المدنية" : "Drafting and reviewing civil contracts"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": isRTL ? "المنازعات العقارية" : "Real Estate Disputes",
                  "description": isRTL ? "حل النزاعات العقارية والملكية" : "Resolving real estate and property disputes"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": isRTL ? "قضايا الإرث" : "Inheritance Cases",
                  "description": isRTL ? "تقسيم التركات وحل منازعات الميراث" : "Estate division and inheritance dispute resolution"
                }
              }
            ]
          }
        },
        {
          "@type": "Attorney",
          "@id": "https://ke-lawyer.com/services/civil-law#attorney",
          "name": "Karim El-Dib",
          "jobTitle": isRTL ? "محامي ومستشار قانوني" : "Lawyer and Legal Consultant",
          "worksFor": {
            "@type": "LegalService",
            "name": isRTL ? "مكتب كريم الديب للمحاماة" : "Karim El-Dib Law Firm"
          },
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Alexandria University - Faculty of Law"
          },
          "knowsAbout": [
            "Civil Law",
            "Compensation Cases",
            "Civil Contracts",
            "Real Estate Law",
            "Inheritance Law",
            "Tort Law",
            "Egyptian Civil Code"
          ],
          "yearsOfExperience": "15+"
        },
        {
          "@type": "WebPage",
          "@id": "https://ke-lawyer.com/services/civil-law#webpage",
          "url": "https://ke-lawyer.com/services/civil-law",
          "name": isRTL ? "محامي قانون مدني في مصر | المحامي كريم الديب" : "Civil Law Lawyer in Egypt | Lawyer Karim El-Dib",
          "isPartOf": {
            "@type": "WebSite",
            "@id": "https://ke-lawyer.com/#website",
            "url": "https://ke-lawyer.com",
            "name": isRTL ? "مكتب كريم الديب للمحاماة" : "Karim El-Dib Law Firm",
            "publisher": {
              "@type": "Organization",
              "name": isRTL ? "مكتب كريم الديب للمحاماة" : "Karim El-Dib Law Firm"
            }
          },
          "datePublished": "2024-01-01",
          "dateModified": "2025-10-23",
          "description": isRTL 
            ? "أفضل محامي قانون مدني في مصر. خبرة +15 عام في قضايا التعويضات والعقود المدنية والمنازعات العقارية وقضايا الإرث."
            : "Best civil law lawyer in Egypt. +15 years experience in compensation cases, civil contracts, real estate disputes, and inheritance cases.",
          "inLanguage": isRTL ? "ar" : "en",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": isRTL ? "الرئيسية" : "Home",
                "item": "https://ke-lawyer.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": isRTL ? "الخدمات" : "Services",
                "item": "https://ke-lawyer.com/services"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": isRTL ? "القانون المدني" : "Civil Law",
                "item": "https://ke-lawyer.com/services/civil-law"
              }
            ]
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": isRTL ? "ما هي خدمات القانون المدني التي يقدمها المكتب؟" : "What civil law services does the firm provide?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": isRTL 
                  ? "يقدم مكتب كريم الديب خدمات قانونية شاملة في القانون المدني تشمل: قضايا التعويضات المادية والمعنوية، صياغة ومراجعة العقود المدنية، حل المنازعات العقارية، قضايا الإرث وتقسيم التركات، المسؤولية التقصيرية، وجميع القضايا المدنية الأخرى."
                  : "Karim El-Dib Law Firm provides comprehensive legal services in civil law including: material and moral compensation cases, civil contract drafting and review, real estate dispute resolution, inheritance and estate division cases, tort liability, and all other civil cases."
              }
            },
            {
              "@type": "Question",
              "name": isRTL ? "كم تبلغ خبرة المحامي كريم الديب في القانون المدني؟" : "How much experience does Lawyer Karim El-Dib have in civil law?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": isRTL 
                  ? "المحامي كريم الديب لديه خبرة تزيد عن 15 عاماً في مجال القانون المدني المصري، مع سجل حافل في كسب القضايا وتحقيق نتائج إيجابية للعملاء في مختلف القضايا المدنية."
                  : "Lawyer Karim El-Dib has over 15 years of experience in Egyptian civil law, with a proven track record of winning cases and achieving positive results for clients in various civil matters."
              }
            },
            {
              "@type": "Question",
              "name": isRTL ? "هل تقدمون استشارات قانونية مجانية؟" : "Do you provide free legal consultations?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": isRTL 
                  ? "نعم، نقدم استشارة قانونية أولية مجانية لتقييم قضيتك وتقديم النصيحة القانونية المبدئية. يمكنك التواصل معنا عبر الهاتف أو واتساب على الرقم: 01009955509"
                  : "Yes, we provide a free initial legal consultation to evaluate your case and provide preliminary legal advice. You can contact us by phone or WhatsApp at: 01009955509"
              }
            }
          ]
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

  }, [isRTL]);

  const services = [
    {
      icon: 'fas fa-balance-scale',
      title: getTextByLanguage({
        ar: 'قضايا التعويضات',
        en: 'Compensation Cases',
        fr: 'Affaires d\'Indemnisation',
        it: 'Cause di Risarcimento'
      }),
      description: getTextByLanguage({
        ar: 'نمثل العملاء في قضايا المطالبة بالتعويضات عن الأضرار المادية والمعنوية، مع ضمان الحصول على التعويض العادل والمناسب.',
        en: 'We represent clients in claims for material and moral damages, ensuring fair and appropriate compensation.',
        fr: 'Nous représentons les clients dans les réclamations pour dommages matériels et moraux, garantissant une compensation juste et appropriée.',
        it: 'Rappresentiamo i clienti nelle richieste di danni materiali e morali, garantendo un risarcimento equo e appropriato.'
      })
    },
    {
      icon: 'fas fa-file-contract',
      title: getTextByLanguage({
        ar: 'العقود المدنية',
        en: 'Civil Contracts',
        fr: 'Contrats Civils',
        it: 'Contratti Civili'
      }),
      description: getTextByLanguage({
        ar: 'صياغة ومراجعة جميع أنواع العقود المدنية، وتقديم الاستشارات القانونية المتخصصة حول الالتزامات التعاقدية.',
        en: 'Drafting and reviewing all types of civil contracts, providing specialized legal consultations on contractual obligations.',
        fr: 'Rédaction et révision de tous types de contrats civils, fourniture de consultations juridiques spécialisées sur les obligations contractuelles.',
        it: 'Redazione e revisione di tutti i tipi di contratti civili, fornitura di consulenze legali specializzate sugli obblighi contrattuali.'
      })
    },
    {
      icon: 'fas fa-building',
      title: getTextByLanguage({
        ar: 'المنازعات العقارية',
        en: 'Real Estate Disputes',
        fr: 'Litiges Immobiliers',
        it: 'Controversie Immobiliari'
      }),
      description: getTextByLanguage({
        ar: 'حل النزاعات المتعلقة بالملكية والإيجار والبيع والشراء، مع خبرة واسعة في القوانين العقارية المصرية.',
        en: 'Resolving disputes related to ownership, rent, sale and purchase, with extensive experience in Egyptian real estate laws.',
        fr: 'Résolution des litiges liés à la propriété, la location, la vente et l\'achat, avec une vaste expérience des lois immobilières égyptiennes.',
        it: 'Risoluzione delle controversie relative a proprietà, affitto, vendita e acquisto, con vasta esperienza nelle leggi immobiliari egiziane.'
      })
    },
    {
      icon: 'fas fa-users',
      title: getTextByLanguage({
        ar: 'قضايا الإرث والميراث',
        en: 'Inheritance Cases',
        fr: 'Affaires de Succession',
        it: 'Cause di Eredità'
      }),
      description: getTextByLanguage({
        ar: 'تقسيم التركات وحل المنازعات الأسرية المتعلقة بالميراث وفقاً للقانون المصري والشريعة الإسلامية.',
        en: 'Estate division and resolving family disputes related to inheritance according to Egyptian law and Islamic Sharia.',
        fr: 'Partage successoral et résolution des litiges familiaux liés à l\'héritage selon la loi égyptienne et la charia islamique.',
        it: 'Divisione patrimoniale e risoluzione delle controversie familiari relative all\'eredità secondo la legge egiziana e la Sharia islamica.'
      })
    },
    {
      icon: 'fas fa-gavel',
      title: getTextByLanguage({
        ar: 'المسؤولية التقصيرية',
        en: 'Tort Liability',
        fr: 'Responsabilité Délictuelle',
        it: 'Responsabilità Extracontrattuale'
      }),
      description: getTextByLanguage({
        ar: 'قضايا المسؤولية عن الفعل الضار والإهمال والأخطاء الطبية وحوادث السيارات.',
        en: 'Cases of tort liability, negligence, medical errors, and car accidents.',
        fr: 'Cas de responsabilité délictuelle, négligence, erreurs médicales et accidents de voiture.',
        it: 'Casi di responsabilità extracontrattuale, negligenza, errori medici e incidenti stradali.'
      })
    },
    {
      icon: 'fas fa-landmark',
      title: getTextByLanguage({
        ar: 'القضايا المدنية المعقدة',
        en: 'Complex Civil Cases',
        fr: 'Affaires Civiles Complexes',
        it: 'Cause Civili Complesse'
      }),
      description: getTextByLanguage({
        ar: 'التعامل مع القضايا المدنية المعقدة والمنازعات طويلة الأمد بخبرة وكفاءة عالية.',
        en: 'Handling complex civil cases and long-term disputes with high expertise and efficiency.',
        fr: 'Traiter des affaires civiles complexes et des litiges à long terme avec une grande expertise et efficacité.',
        it: 'Gestione di cause civili complesse e controversie a lungo termine con alta competenza ed efficienza.'
      })
    }
  ];

  const advantages = [
    {
      icon: 'fas fa-certificate',
      title: getTextByLanguage({
        ar: '+15 عاماً خبرة',
        en: '+15 Years Experience',
        fr: '+15 Ans d\'Expérience',
        it: '+15 Anni di Esperienza'
      }),
      description: getTextByLanguage({
        ar: 'خبرة واسعة في القانون المدني',
        en: 'Extensive experience in civil law',
        fr: 'Vaste expérience en droit civil',
        it: 'Vasta esperienza in diritto civile'
      })
    },
    {
      icon: 'fas fa-trophy',
      title: getTextByLanguage({
        ar: 'نسبة نجاح عالية',
        en: 'High Success Rate',
        fr: 'Taux de Réussite Élevé',
        it: 'Alto Tasso di Successo'
      }),
      description: getTextByLanguage({
        ar: 'سجل حافل في كسب القضايا',
        en: 'Proven track record in winning cases',
        fr: 'Bilan éprouvé dans la victoire de cas',
        it: 'Comprovata esperienza nella vincita di cause'
      })
    },
    {
      icon: 'fas fa-user-tie',
      title: getTextByLanguage({
        ar: 'فريق متخصص',
        en: 'Specialized Team',
        fr: 'Équipe Spécialisée',
        it: 'Team Specializzato'
      }),
      description: getTextByLanguage({
        ar: 'محامون خبراء في القانون المدني',
        en: 'Expert lawyers in civil law',
        fr: 'Avocats experts en droit civil',
        it: 'Avvocati esperti in diritto civile'
      })
    },
    {
      icon: 'fas fa-handshake',
      title: getTextByLanguage({
        ar: 'خدمة شخصية',
        en: 'Personal Service',
        fr: 'Service Personnel',
        it: 'Servizio Personale'
      }),
      description: getTextByLanguage({
        ar: 'متابعة دقيقة لكل قضية',
        en: 'Precise follow-up for each case',
        fr: 'Suivi précis pour chaque cas',
        it: 'Follow-up preciso per ogni causa'
      })
    }
  ];

  return (
    <div className="min-h-screen bg-[#0b1a33] text-gray-200 py-20" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#c8a876]">
            {getTextByLanguage({
              ar: 'محامي قانون مدني متخصص',
              en: 'Specialized Civil Law Lawyer',
              fr: 'Avocat Spécialisé en Droit Civil',
              it: 'Avvocato Specializzato in Diritto Civile'
            })}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            {getTextByLanguage({
              ar: 'المحامي كريم الديب - خبير في القانون المدني المصري. نقدم خدمات قانونية متكاملة في قضايا التعويضات، العقود، النزاعات العقارية، والإرث.',
              en: 'Lawyer Karim El-Dib - Expert in Egyptian civil law. We provide comprehensive legal services in compensation cases, contracts, real estate disputes, and inheritance.',
              fr: 'Avocat Karim El-Dib - Expert en droit civil égyptien. Nous fournissons des services juridiques complets dans les affaires d\'indemnisation, contrats, litiges immobiliers et succession.',
              it: 'Avvocato Karim El-Dib - Esperto in diritto civile egiziano. Forniamo servizi legali completi in cause di risarcimento, contratti, controversie immobiliari ed eredità.'
            })}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            <span className="bg-[#c8a876] text-[#0b1a33] px-6 py-3 rounded-full font-semibold">
              {getTextByLanguage({
                ar: 'خبير القانون المدني',
                en: 'Civil Law Expert',
                fr: 'Expert en Droit Civil',
                it: 'Esperto di Diritto Civile'
              })}
            </span>
            <span className="bg-white text-[#0b1a33] px-6 py-3 rounded-full font-semibold">
              {getTextByLanguage({
                ar: '+15 عاماً خبرة',
                en: '+15 Years Experience',
                fr: '+15 Ans d\'Expérience',
                it: '+15 Anni di Esperienza'
              })}
            </span>
          </div>
        </div>

        {/* الخدمات */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#c8a876] mb-12">
            {getTextByLanguage({
              ar: 'خدمات القانون المدني',
              en: 'Civil Law Services',
              fr: 'Services de Droit Civil',
              it: 'Servizi di Diritto Civile'
            })}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-[#1a2d4d] p-8 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
                <i className={`${service.icon} text-4xl text-[#c8a876] mb-6 block`}></i>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* المميزات */}
        <div className="bg-[#1a2d4d] rounded-lg p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#c8a876] mb-12">
            {getTextByLanguage({
              ar: 'لماذا تختار مكتبنا؟',
              en: 'Why Choose Our Firm?',
              fr: 'Pourquoi Choisir Notre Cabinet?',
              it: 'Perché Scegliere il Nostro Studio?'
            })}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <i className={`${advantage.icon} text-5xl text-[#c8a876] mb-4 block`}></i>
                <h3 className="text-xl font-bold text-white mb-2">{advantage.title}</h3>
                <p className="text-gray-300">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* معلومات مهمة */}
        <div className="bg-[#1a2d4d] rounded-lg p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#c8a876] mb-8">
            {getTextByLanguage({
              ar: 'معلومات مهمة عن القانون المدني',
              en: 'Important Information About Civil Law',
              fr: 'Informations Importantes sur le Droit Civil',
              it: 'Informazioni Importanti sul Diritto Civile'
            })}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <i className="fas fa-info-circle text-[#c8a876]"></i>
                {getTextByLanguage({
                  ar: 'نطاق القانون المدني',
                  en: 'Scope of Civil Law',
                  fr: 'Portée du Droit Civil',
                  it: 'Ambito del Diritto Civile'
                })}
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <i className="fas fa-check text-[#c8a876] mt-1"></i>
                  <span>{getTextByLanguage({
                    ar: 'العقود والالتزامات',
                    en: 'Contracts and Obligations',
                    fr: 'Contrats et Obligations',
                    it: 'Contratti e Obbligazioni'
                  })}</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check text-[#c8a876] mt-1"></i>
                  <span>{getTextByLanguage({
                    ar: 'الحقوق العينية والملكية',
                    en: 'Property Rights and Ownership',
                    fr: 'Droits Réels et Propriété',
                    it: 'Diritti Reali e Proprietà'
                  })}</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check text-[#c8a876] mt-1"></i>
                  <span>{getTextByLanguage({
                    ar: 'المسؤولية التقصيرية',
                    en: 'Tort Liability',
                    fr: 'Responsabilité Délictuelle',
                    it: 'Responsabilità Extracontrattuale'
                  })}</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check text-[#c8a876] mt-1"></i>
                  <span>{getTextByLanguage({
                    ar: 'أحكام الأسرة والميراث',
                    en: 'Family and Inheritance Provisions',
                    fr: 'Dispositions Familiales et Successorales',
                    it: 'Disposizioni Familiari ed Ereditarie'
                  })}</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <i className="fas fa-clipboard-list text-[#c8a876]"></i>
                {getTextByLanguage({
                  ar: 'خدماتنا الإضافية',
                  en: 'Our Additional Services',
                  fr: 'Nos Services Supplémentaires',
                  it: 'I Nostri Servizi Aggiuntivi'
                })}
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <i className="fas fa-check text-[#c8a876] mt-1"></i>
                  <span>{getTextByLanguage({
                    ar: 'الاستشارات القانونية المتخصصة',
                    en: 'Specialized Legal Consultations',
                    fr: 'Consultations Juridiques Spécialisées',
                    it: 'Consulenze Legali Specializzate'
                  })}</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check text-[#c8a876] mt-1"></i>
                  <span>{getTextByLanguage({
                    ar: 'صياغة ومراجعة العقود',
                    en: 'Contract Drafting and Review',
                    fr: 'Rédaction et Révision de Contrats',
                    it: 'Redazione e Revisione Contratti'
                  })}</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check text-[#c8a876] mt-1"></i>
                  <span>{getTextByLanguage({
                    ar: 'التمثيل القانوني أمام المحاكم',
                    en: 'Legal Representation in Courts',
                    fr: 'Représentation Juridique devant les Tribunaux',
                    it: 'Rappresentanza Legale nei Tribunali'
                  })}</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check text-[#c8a876] mt-1"></i>
                  <span>{getTextByLanguage({
                    ar: 'التحكيم والوساطة',
                    en: 'Arbitration and Mediation',
                    fr: 'Arbitrage et Médiation',
                    it: 'Arbitrato e Mediazione'
                  })}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-[#c8a876] to-[#b89b68] rounded-lg p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b1a33] mb-4">
            {getTextByLanguage({
              ar: 'احجز استشارتك القانونية الآن',
              en: 'Book Your Legal Consultation Now',
              fr: 'Réservez Votre Consultation Juridique Maintenant',
              it: 'Prenota la Tua Consulenza Legale Ora'
            })}
          </h2>
          <p className="text-xl text-[#0b1a33] mb-8">
            {getTextByLanguage({
              ar: 'تواصل معنا للحصول على استشارة قانونية متخصصة في القانون المدني',
              en: 'Contact us for specialized legal consultation in civil law',
              fr: 'Contactez-nous pour une consultation juridique spécialisée en droit civil',
              it: 'Contattaci per una consulenza legale specializzata in diritto civile'
            })}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/201009955509"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0b1a33] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1a2d4d] transition-colors duration-300"
            >
              <i className="fab fa-whatsapp text-2xl"></i>
              {getTextByLanguage({
                ar: 'واتساب',
                en: 'WhatsApp',
                fr: 'WhatsApp',
                it: 'WhatsApp'
              })}
            </a>
            <a
              href="tel:+201009955509"
              className="inline-flex items-center gap-2 bg-white text-[#0b1a33] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              <i className="fas fa-phone text-xl"></i>
              {getTextByLanguage({
                ar: 'اتصل الآن',
                en: 'Call Now',
                fr: 'Appelez Maintenant',
                it: 'Chiama Ora'
              })}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CivilLaw;
