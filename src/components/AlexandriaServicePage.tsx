import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Scale, MessageCircle, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import AdvancedSEO from './AdvancedSEO';
import { BUSINESS, BRANCHES, DOMAIN, branchId } from '../data/business';
import { alexandriaServices, alexandriaServiceBySlug, AlexandriaService, T } from '../data/alexandriaServices';

/**
 * One practice area in Alexandria (e.g. /alexandria/family-lawyer).
 * Each page targets a single "specialty + Alexandria" search intent and has its
 * own unique copy in src/data/alexandriaServices.ts.
 */
const AlexandriaServicePage: React.FC<{ slug: string }> = ({ slug }) => {
  const { language } = useLanguage();
  const isAr = language === 'ar';
  const L = (t: T) => (isAr ? t.ar : t.en);
  const link = (p: string) => (isAr ? p : `/en${p}`);
  const data = alexandriaServiceBySlug[slug] as AlexandriaService;
  const br = BRANCHES.alexandria;
  const path = `/alexandria/${data.slug}`;
  const pageUrl = `${DOMAIN}${link(path)}`;
  const related = data.related.map(s => alexandriaServiceBySlug[s]).filter(Boolean);
  const others = alexandriaServices.filter(s => s.slug !== data.slug && !data.related.includes(s.slug));

  const schema = [
    {
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: L(data.h1),
      serviceType: L(data.name),
      description: L(data.seoDescription),
      url: pageUrl,
      provider: { '@id': branchId('alexandria') },
      areaServed: { '@type': 'City', name: isAr ? 'الإسكندرية' : 'Alexandria' },
      availableLanguage: BUSINESS.languages,
    },
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
        { '@type': 'ListItem', position: 2, name: isAr ? 'محامي في الإسكندرية' : 'Lawyer in Alexandria', item: `${DOMAIN}${link('/alexandria')}` },
        { '@type': 'ListItem', position: 3, name: L(data.name), item: pageUrl },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b1a33] text-gray-200" dir={isAr ? 'rtl' : 'ltr'}>
      <AdvancedSEO
        title={L(data.seoTitle)}
        description={L(data.seoDescription)}
        canonicalUrl={`${DOMAIN}${path}`}
        schema={schema}
      />

      {/* Hero */}
      <section className="py-16 md:py-24 text-center bg-gradient-to-br from-[#0b1a33] via-[#0e1f3b] to-[#0b1a33]">
        <div className="container mx-auto px-4 max-w-5xl">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-400">
            <Link to={isAr ? '/' : '/en'} className="hover:text-[#d4a15c]">{isAr ? 'الرئيسية' : 'Home'}</Link>
            <span className="mx-2">/</span>
            <Link to={link('/alexandria')} className="hover:text-[#d4a15c]">{isAr ? 'محامي في الإسكندرية' : 'Lawyer in Alexandria'}</Link>
            <span className="mx-2">/</span>
            <span className="text-[#d4a15c]">{L(data.name)}</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-5 text-white leading-tight">{L(data.h1)}</h1>
          <p className="text-lg md:text-xl mb-8 text-[#d4a15c] font-medium">{L(data.subtitle)}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center gap-2 bg-[#d4a15c] text-[#0b1a33] px-7 py-3 rounded-md font-bold hover:bg-opacity-90">
              <Phone className="w-5 h-5" /> {isAr ? 'اتصل الآن' : 'Call Now'}
            </a>
            <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 border border-[#d4a15c]/40 text-white px-7 py-3 rounded-md font-bold hover:bg-white/20">
              <MessageCircle className="w-5 h-5" /> {isAr ? 'واتساب' : 'WhatsApp'}
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl space-y-5 text-base md:text-lg leading-relaxed text-gray-300">
          {data.intro.map((p, i) => <p key={i}>{L(p)}</p>)}
        </div>
      </section>

      {/* What we handle */}
      <section className="py-12 bg-[#1a2d4d]/30 border-y border-[#d4a15c]/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 text-[#d4a15c]">{L(data.servicesHeading)}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {data.services.map(s => (
              <div key={s.title.en} className="bg-[#0e1f3b] rounded-lg p-6 border border-[#d4a15c]/20">
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#d4a15c] flex-shrink-0 mt-0.5" />{L(s.title)}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">{L(s.text)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courts and law */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-5 text-white flex items-center gap-3">
            <Scale className="w-7 h-7 text-[#d4a15c] flex-shrink-0" /> {L(data.courtsHeading)}
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed text-base md:text-lg">
            {data.courts.map((p, i) => <p key={i}>{L(p)}</p>)}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-12 bg-[#0e1f3b]">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 text-white">{L(data.stepsHeading)}</h2>
          <ol className="grid md:grid-cols-2 gap-6">
            {data.steps.map((s, i) => (
              <li key={s.title.en} className="bg-[#0b1a33] rounded-lg p-6 border border-[#d4a15c]/20">
                <h3 className="text-lg font-bold mb-2 text-[#d4a15c]">{i + 1}. {L(s.title)}</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">{L(s.text)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 text-[#d4a15c]">{L(data.faqHeading)}</h2>
          <div className="space-y-4">
            {data.faq.map((f, i) => (
              <details key={i} className="bg-[#0e1f3b] rounded-lg border border-[#d4a15c]/20 p-5" open={i === 0}>
                <summary className="cursor-pointer font-bold text-white text-base md:text-lg">{L(f.q)}</summary>
                <p className="mt-3 text-gray-300 leading-relaxed">{L(f.a)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-[#1a2d4d]/30 border-y border-[#d4a15c]/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">{isAr ? 'تخصصات أخرى لمكتبنا في الإسكندرية' : 'Other Practice Areas of Our Alexandria Office'}</h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[...related, ...others].map(s => (
              <li key={s.slug}>
                <Link to={link(`/alexandria/${s.slug}`)} className="block bg-[#0e1f3b] border border-[#d4a15c]/20 hover:border-[#d4a15c]/60 rounded-lg px-4 py-3 text-[#d4a15c] font-semibold">
                  {L(s.name)}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-gray-300">
            {isAr ? 'للتفاصيل الكاملة عن هذا التخصص على مستوى مصر: ' : 'For this practice area across Egypt, see: '}
            <Link to={link(data.parent.path)} className="text-[#d4a15c] underline">{L(data.parent.text)}</Link>
          </p>
        </div>
      </section>

      {/* Contact / NAP */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-[#0e1f3b] rounded-lg p-8 border border-[#d4a15c]/20">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">{L(data.contactHeading)}</h2>
            <address className="not-italic space-y-4">
              <p className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-[#d4a15c] flex-shrink-0" />
                <span>
                  <strong className="block text-white">{isAr ? br.nameAr : br.nameEn}</strong>
                  {isAr ? `${br.streetAr}، ${br.cityAr}، مصر` : `${br.streetEn}, ${br.cityEn}, Egypt`}
                </span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-[#d4a15c]" />
                <a href={`tel:${BUSINESS.phone}`} className="text-[#d4a15c] font-semibold" dir="ltr">{BUSINESS.phoneDisplay}</a>
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
              <Link to={link('/alexandria')} className="bg-white/10 border border-[#d4a15c]/40 px-5 py-2.5 rounded-md font-bold text-white">
                {isAr ? 'كل خدمات مكتب الإسكندرية' : 'All Alexandria office services'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlexandriaServicePage;
