import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Globe2, Award, Scale, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import AdvancedSEO from './AdvancedSEO';
import { BUSINESS, BRANCHES, BranchId, DOMAIN, branchId } from '../data/business';

/** Bilingual text pair. FR/IT visitors see the English text. */
export type T = { ar: string; en: string };

export interface CityPageData {
  branch: BranchId;
  seoTitle: T;
  seoDescription: T;
  badge: T;
  h1: T;
  subtitle: T;
  intro: T[];
  servicesHeading: T;
  services: { path: string; icon: string; title: T; text: T }[];
  courtsHeading: T;
  courtsText: T;
  areasHeading: T;
  areas: T[];
  whyHeading: T;
  why: { title: T; text: T }[];
  faqHeading: T;
  faq: { q: T; a: T }[];
  otherBranch: { path: string; text: T };
  relatedArticle?: { path: string; text: T };
}

const CityLandingPage: React.FC<{ data: CityPageData }> = ({ data }) => {
  const { language } = useLanguage();
  const isAr = language === 'ar';
  const L = (t: T) => (isAr ? t.ar : t.en);
  const link = (p: string) => (isAr ? p : `/en${p}`);
  const br = BRANCHES[data.branch];
  const pageUrl = `${DOMAIN}${isAr ? '' : '/en'}${br.path}`;

  const extraSchema = [
    {
      '@type': 'FAQPage',
      '@id': `${pageUrl}#faq`,
      mainEntity: data.faq.map(f => ({
        '@type': 'Question',
        name: L(f.q),
        acceptedAnswer: { '@type': 'Answer', text: L(f.a) },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: isAr ? 'الرئيسية' : 'Home', item: `${DOMAIN}${isAr ? '/' : '/en'}` },
        { '@type': 'ListItem', position: 2, name: isAr ? br.cityAr : br.cityEn, item: pageUrl },
      ],
    },
    {
      '@type': 'ItemList',
      '@id': `${pageUrl}#services`,
      name: L(data.servicesHeading),
      itemListElement: data.services.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Service',
          name: L(s.title),
          url: `${DOMAIN}${link(s.path)}`,
          provider: { '@id': branchId(data.branch) },
          areaServed: { '@type': 'City', name: br.cityEn },
        },
      })),
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b1a33] text-gray-200" dir={isAr ? 'rtl' : 'ltr'}>
      <AdvancedSEO
        title={L(data.seoTitle)}
        description={L(data.seoDescription)}
        canonicalUrl={`${DOMAIN}${br.path}`}
        schema={extraSchema}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-28 text-center overflow-hidden bg-gradient-to-br from-[#0b1a33] via-[#0e1f3b] to-[#0b1a33]">
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-400">
            <Link to={isAr ? '/' : '/en'} className="hover:text-[#d4a15c]">{isAr ? 'الرئيسية' : 'Home'}</Link>
            <span className="mx-2">/</span>
            <span className="text-[#d4a15c]">{isAr ? br.cityAr : br.cityEn}</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-[#d4a15c] text-[#0b1a33] px-4 py-2 rounded-full font-bold text-sm mb-5">
            <Award className="w-4 h-4" /> {L(data.badge)}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-5 text-white leading-tight">{L(data.h1)}</h1>
          <p className="text-lg md:text-2xl mb-8 text-[#d4a15c] font-medium">{L(data.subtitle)}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center gap-2 bg-[#d4a15c] text-[#0b1a33] px-7 py-3 rounded-md font-bold hover:bg-opacity-90">
              <Phone className="w-5 h-5" /> {isAr ? 'اتصل الآن' : 'Call Now'}
            </a>
            <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 border border-[#d4a15c]/40 text-white px-7 py-3 rounded-md font-bold hover:bg-white/20">
              <MessageCircle className="w-5 h-5" /> {isAr ? 'واتساب' : 'WhatsApp'}
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {['العربية', 'English', 'Français', 'Italiano'].map(n => (
              <span key={n} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg border border-[#d4a15c]/30 text-sm">
                <Globe2 className="w-4 h-4 text-[#d4a15c]" /> {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14">
        <div className="container mx-auto px-4 max-w-4xl space-y-5 text-base md:text-lg leading-relaxed text-gray-300">
          {data.intro.map((p, i) => <p key={i}>{L(p)}</p>)}
        </div>
      </section>

      {/* Services in this city */}
      <section className="py-14 bg-[#1a2d4d]/30 border-y border-[#d4a15c]/10">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 text-[#d4a15c]">{L(data.servicesHeading)}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.services.map(s => (
              <Link key={s.path} to={link(s.path)} className="block bg-[#0e1f3b] rounded-lg p-6 border border-[#d4a15c]/20 hover:border-[#d4a15c]/60 transition-colors">
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 flex items-center gap-3">
                  <i className={`${s.icon} text-[#d4a15c]`} aria-hidden="true"></i>{L(s.title)}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">{L(s.text)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Courts & areas */}
      <section className="py-14">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white flex items-center gap-3">
              <Scale className="w-7 h-7 text-[#d4a15c]" /> {L(data.courtsHeading)}
            </h2>
            <p className="text-gray-300 leading-relaxed">{L(data.courtsText)}</p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white flex items-center gap-3">
              <MapPin className="w-7 h-7 text-[#d4a15c]" /> {L(data.areasHeading)}
            </h2>
            <ul className="flex flex-wrap gap-2">
              {data.areas.map(a => (
                <li key={a.en} className="bg-[#0e1f3b] border border-[#d4a15c]/20 rounded-full px-4 py-1.5 text-sm">{L(a)}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-14 bg-[#0e1f3b]">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 text-white">{L(data.whyHeading)}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.why.map(w => (
              <div key={w.title.en} className="bg-[#0b1a33] rounded-lg p-6 border border-[#d4a15c]/20">
                <h3 className="text-lg font-bold mb-2 text-[#d4a15c]">{L(w.title)}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{L(w.text)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 text-[#d4a15c]">{L(data.faqHeading)}</h2>
          <div className="space-y-4">
            {data.faq.map((f, i) => (
              <details key={i} className="bg-[#0e1f3b] rounded-lg border border-[#d4a15c]/20 p-5 group" open={i === 0}>
                <summary className="cursor-pointer font-bold text-white text-base md:text-lg">{L(f.q)}</summary>
                <p className="mt-3 text-gray-300 leading-relaxed">{L(f.a)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / NAP */}
      <section className="py-14 bg-[#0e1f3b]">
        <div className="container mx-auto px-4 max-w-7xl grid lg:grid-cols-2 gap-8">
          <div className="bg-[#0b1a33] rounded-lg p-8 border border-[#d4a15c]/20">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              {isAr ? `تواصل مع مكتبنا في ${br.cityAr}` : `Contact Our ${br.cityEn} Office`}
            </h2>
            <address className="not-italic space-y-5">
              <p className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-[#d4a15c] flex-shrink-0" />
                <span>
                  <strong className="block text-white">{isAr ? br.nameAr : br.nameEn}</strong>
                  {isAr ? `${br.streetAr}، ${br.cityAr}، ${br.regionAr}، مصر` : `${br.streetEn}, ${br.cityEn}, ${br.regionEn}, Egypt`}
                </span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-[#d4a15c]" />
                <a href={`tel:${BUSINESS.phone}`} className="text-[#d4a15c] font-semibold" dir="ltr">{BUSINESS.phoneDisplay}</a>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-[#d4a15c]" />
                <a href={`mailto:${BUSINESS.email}`} className="text-[#d4a15c]">{BUSINESS.email}</a>
              </p>
              <p className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-[#d4a15c]" />
                <span>{isAr ? BUSINESS.hours.labelAr : BUSINESS.hours.labelEn}</span>
              </p>
            </address>
            <div className="flex flex-wrap gap-3 mt-8">
              <a href={br.mapUrl} target="_blank" rel="noopener noreferrer" className="bg-[#d4a15c] text-[#0b1a33] px-5 py-2.5 rounded-md font-bold">
                {isAr ? 'الاتجاهات على خرائط Google' : 'Directions on Google Maps'}
              </a>
              <Link to={link(data.otherBranch.path)} className="bg-white/10 border border-[#d4a15c]/40 px-5 py-2.5 rounded-md font-bold text-white">
                {L(data.otherBranch.text)}
              </Link>
            </div>
            {data.relatedArticle && (
              <p className="mt-6 text-sm">
                <Link to={link(data.relatedArticle.path)} className="text-[#d4a15c] underline">{L(data.relatedArticle.text)}</Link>
              </p>
            )}
          </div>
          <iframe
            title={isAr ? `موقع مكتب المحامي كريم الديب في ${br.cityAr}` : `Karim Eldib Law Firm location in ${br.cityEn}`}
            src={br.mapEmbed}
            className="w-full min-h-[380px] rounded-lg border border-[#d4a15c]/20"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
};

export default CityLandingPage;
