import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface SchemaMarkupProps {
  type: 'organization' | 'lawyer' | 'article' | 'service';
  data?: any;
}

const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ type, data }) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const getSchema = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": isRTL ? "مكتب كريم الديب للمحاماة والاستشارات القانونية" : "Karim Eldib Law Firm & Legal Consultations",
          "alternateName": [
            "كريم الديب محامي",
            "المحامي كريم الديب",
            "مكتب الديب للمحاماة",
            "Karim Eldib Lawyer",
            "Eldib Law Firm"
          ],
          "description": isRTL 
            ? "مكتب قانوني معتمد متخصص في خدمة الأجانب في مصر والمصريين بالخارج مع خبرة 18 عام في القانون التجاري والجنائي والمدني"
            : "Accredited law firm specializing in serving foreigners in Egypt and Egyptians abroad with 18 years of experience in commercial, criminal and civil law",
          "url": "https://eldib-co-law-firm.vercel.app",
          "logo": "https://i.postimg.cc/G3FMRMY4/3.png",
          "image": "/Image22.jpeg",
          "founder": {
            "@type": "Person",
            "name": isRTL ? "كريم الديب" : "Karim Eldib",
            "jobTitle": isRTL ? "محامي ومستشار قانوني" : "Lawyer and Legal Consultant",
            "description": isRTL 
              ? "محامي مصري متخصص في خدمة الأجانب والمصريين بالخارج مع خبرة تزيد عن 18 عام"
              : "Egyptian lawyer specialized in serving foreigners and Egyptians abroad with over 18 years of experience"
          },
          "address": [
            {
              "@type": "PostalAddress",
              "streetAddress": "14 شارع الشهداء متفرع من شارع الغرفة التجارية",
              "addressLocality": "محطة الرمل",
              "addressRegion": "الإسكندرية",
              "addressCountry": "EG"
            },
            {
              "@type": "PostalAddress",
              "streetAddress": "123 ش البحر الهضبة",
              "addressLocality": "شرم الشيخ",
              "addressRegion": "جنوب سيناء",
              "addressCountry": "EG"
            }
          ],
          "telephone": ["+201065502030", "+201013302030"],
          "email": "karimeldib@lawyer.com",
          "priceRange": "$$",
          "areaServed": [
            {
              "@type": "Country",
              "name": "Egypt"
            },
            {
              "@type": "AdministrativeArea",
              "name": "Alexandria"
            },
            {
              "@type": "AdministrativeArea",
              "name": "Sharm El Sheikh"
            }
          ],
          "serviceType": [
            isRTL ? "خدمات قانونية للأجانب في مصر" : "Legal services for foreigners in Egypt",
            isRTL ? "خدمات قانونية للمصريين بالخارج" : "Legal services for Egyptians abroad",
            isRTL ? "القانون التجاري" : "Commercial Law",
            isRTL ? "القانون الجنائي" : "Criminal Law",
            isRTL ? "القانون المدني" : "Civil Law",
            isRTL ? "قانون الأسرة" : "Family Law",
            isRTL ? "قانون الشركات" : "Corporate Law",
            isRTL ? "التحكيم والوساطة" : "Arbitration and Mediation"
          ],
          "hasCredential": [
            {
              "@type": "EducationalOccupationalCredential",
              "name": isRTL ? "ترخيص مزاولة المهنة" : "Law Practice License",
              "credentialCategory": "license"
            }
          ],
          "knowsLanguage": ["ar", "en", "fr"],
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
              "opens": "09:00",
              "closes": "18:00"
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": "127"
          },
          "review": [
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": isRTL ? "أحمد محمد" : "Ahmed Mohamed"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5"
              },
              "reviewBody": isRTL 
                ? "خدمة ممتازة واحترافية عالية في التعامل مع قضايا الأجانب"
                : "Excellent service and high professionalism in dealing with foreigners' cases"
            }
          ]
        };

      case 'lawyer':
        return {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": isRTL ? "كريم الديب" : "Karim Eldib",
          "alternateName": [
            "كريم الديب محامي",
            "المحامي كريم الديب",
            "Karim Eldib Lawyer",
            "Attorney Karim Eldib"
          ],
          "jobTitle": isRTL ? "محامي ومستشار قانوني" : "Lawyer and Legal Consultant",
          "description": isRTL 
            ? "محامي مصري متخصص في خدمة الأجانب في مصر والمصريين بالخارج، خبرة تزيد عن 18 عام في مختلف فروع القانون"
            : "Egyptian lawyer specialized in serving foreigners in Egypt and Egyptians abroad, with over 18 years of experience in various branches of law",
          "url": "https://eldib-co-law-firm.vercel.app/lawyer-profile",
          "image": "/Image22.jpeg",
          "worksFor": {
            "@type": "LegalService",
            "name": isRTL ? "مكتب كريم الديب للمحاماة" : "Karim Eldib Law Firm"
          },
          "hasCredential": [
            {
              "@type": "EducationalOccupationalCredential",
              "name": isRTL ? "بكالوريوس الحقوق" : "Bachelor of Law",
              "credentialCategory": "degree"
            },
            {
              "@type": "EducationalOccupationalCredential", 
              "name": isRTL ? "ترخيص مزاولة المهنة" : "Law Practice License",
              "credentialCategory": "license"
            }
          ],
          "knowsLanguage": ["ar", "en", "fr"],
          "expertise": [
            isRTL ? "قانون الأجانب" : "Immigration Law",
            isRTL ? "القانون التجاري" : "Commercial Law",
            isRTL ? "القانون الجنائي" : "Criminal Law",
            isRTL ? "القانون المدني" : "Civil Law"
          ]
        };

      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data?.title || "",
          "description": data?.excerpt || "",
          "author": {
            "@type": "Person",
            "name": isRTL ? "كريم الديب" : "Karim Eldib"
          },
          "publisher": {
            "@type": "Organization",
            "name": isRTL ? "مكتب كريم الديب للمحاماة" : "Karim Eldib Law Firm",
            "logo": {
              "@type": "ImageObject",
              "url": "https://i.postimg.cc/G3FMRMY4/3.png"
            }
          },
          "datePublished": data?.date || new Date().toISOString(),
          "dateModified": data?.date || new Date().toISOString(),
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": data?.url || ""
          }
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data?.name || "",
          "description": data?.description || "",
          "provider": {
            "@type": "LegalService",
            "name": isRTL ? "مكتب كريم الديب للمحاماة" : "Karim Eldib Law Firm"
          },
          "areaServed": "Egypt",
          "serviceType": "Legal Service"
        };

      default:
        return null;
    }
  };

  const schema = getSchema();

  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SchemaMarkup;