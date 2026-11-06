import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getLanguageFromPath } from '../contexts/LanguageContext';
import { DOMAIN, BUSINESS, buildBusinessGraph, ORG_ID, WEBSITE_ID } from '../data/business';

interface AdvancedSEOProps {
  title?: string;
  description?: string;
  /** @deprecated meta keywords are ignored by Google; kept for backwards compatibility */
  keywords?: string;
  /** Canonical URL of the Arabic (default) version. The English URL is derived from it. */
  canonicalUrl?: string;
  city?: string;
  /** Extra JSON-LD nodes for this page (FAQPage, BreadcrumbList, Service...) */
  schema?: Record<string, any>[];
}

/** Head data collected during server-side prerender (scripts/prerender.mjs reads it). */
export const ssrHead: { current: null | {
  title: string;
  description: string;
  canonical: string;
  arHref: string;
  enHref: string;
  lang: 'ar' | 'en';
} } = { current: null };

const DEFAULT_TITLE = {
  ar: 'المحامي كريم الديب | محامي في الإسكندرية وشرم الشيخ | قضايا أجانب وتحكيم دولي',
  en: 'Karim Eldib Law Firm | Lawyer in Alexandria & Sharm El Sheikh, Egypt',
};
const DEFAULT_DESC = {
  ar: 'مكتب المحامي كريم الديب للمحاماة في الإسكندرية وشرم الشيخ: قضايا جنائية ومدنية وأحوال شخصية، تأسيس شركات، إقامات الأجانب، والتحكيم الدولي. خبرة منذ 2006 ونتحدث 4 لغات.',
  en: 'Karim Eldib Law Firm — English-speaking lawyers in Alexandria & Sharm El Sheikh, Egypt: criminal, civil & family law, company formation, residency for foreigners and international arbitration. Since 2006.',
};

// Escape < and & as unicode escapes so JSON-LD can never break out of the <script> tag
const BACKSLASH = String.fromCharCode(92);
const safeJson = (data: unknown) =>
  JSON.stringify(data).replace(/[<&]/g, c => `${BACKSLASH}u00${c.charCodeAt(0).toString(16)}`);

const AdvancedSEO: React.FC<AdvancedSEOProps> = ({ title, description, canonicalUrl, schema }) => {
  const { pathname } = useLocation();

  // Language comes from the URL (never from localStorage) so the canonical is always stable.
  const pathLang = getLanguageFromPath(pathname);
  const lang: 'ar' | 'en' = pathLang === 'en' ? 'en' : 'ar';
  const isAr = lang === 'ar';

  // Clean (language-less) path
  let cleanPath = pathname.replace(/^\/(en|ar|fr|it)(\/|$)/, '/') || '/';
  if (canonicalUrl) {
    try { cleanPath = new URL(canonicalUrl).pathname; } catch { /* keep path */ }
  }
  cleanPath = cleanPath === '/' ? '/' : cleanPath.replace(/\/$/, '');

  const arHref = `${DOMAIN}${cleanPath === '/' ? '/' : cleanPath}`;
  const enHref = `${DOMAIN}/en${cleanPath === '/' ? '' : cleanPath}`;
  const canonical = isAr ? arHref : enHref;

  const pageTitle = title || DEFAULT_TITLE[lang];
  const pageDescription = description || DEFAULT_DESC[lang];

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      ...buildBusinessGraph(isAr),
      {
        '@type': 'WebPage',
        '@id': `${canonical}#webpage`,
        url: canonical,
        name: pageTitle,
        description: pageDescription,
        inLanguage: lang,
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': ORG_ID },
      },
      ...(schema || []),
    ],
  };

  // Expose head data to the build-time prerenderer
  if (typeof document === 'undefined') {
    ssrHead.current = { title: pageTitle, description: pageDescription, canonical, arHref, enHref, lang };
  }

  useEffect(() => {
    document.title = pageTitle;

    const setMeta = (key: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', pageDescription);
    setMeta('og:type', 'website', true);
    setMeta('og:url', canonical, true);
    setMeta('og:title', pageTitle, true);
    setMeta('og:description', pageDescription, true);
    setMeta('og:image', BUSINESS.image, true);
    setMeta('og:site_name', isAr ? BUSINESS.nameAr : BUSINESS.nameEn, true);
    setMeta('og:locale', isAr ? 'ar_EG' : 'en_US', true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', pageTitle);
    setMeta('twitter:description', pageDescription);
    setMeta('twitter:image', BUSINESS.image);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);

    // hreflang: only languages that actually exist (ar + en)
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());
    ([['ar', arHref], ['en', enHref], ['x-default', arHref]] as const).forEach(([hl, href]) => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', hl);
      link.setAttribute('href', href);
      document.head.appendChild(link);
    });

    document.documentElement.lang = lang;
    document.documentElement.dir = isAr ? 'rtl' : 'ltr';
  }, [pageTitle, pageDescription, canonical, arHref, enHref, lang, isAr]);

  // JSON-LD is rendered in the markup so it is present in the prerendered HTML.
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJson(structuredData) }}
    />
  );
};

export default AdvancedSEO;
