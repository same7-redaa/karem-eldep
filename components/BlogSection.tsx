import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const BlogSection: React.FC = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const getTextByLanguage = (texts: { ar: string; en: string; fr: string; it: string }) => {
    return texts[language as keyof typeof texts] || texts.en;
  };

  const featuredArticles = [
    {
      id: 1,
      slug: 'guide-foreigners-legal-services-egypt-2025',
      title: getTextByLanguage({
        ar: 'دليل شامل للأجانب: الخدمات القانونية في مصر 2025',
        en: 'Complete Guide for Foreigners: Legal Services in Egypt 2025',
        fr: 'Guide Complet pour les Étrangers: Services Juridiques en Égypte 2025',
        it: 'Guida Completa per Stranieri: Servizi Legali in Egitto 2025'
      }),
      excerpt: getTextByLanguage({
        ar: 'دليل شامل للأجانب الراغبين في الاستثمار أو العيش في مصر، يشمل كل ما تحتاج معرفته عن الخدمات القانونية.',
        en: 'A comprehensive guide for foreigners wishing to invest or live in Egypt, including everything you need to know about legal services.',
        fr: 'Un guide complet pour les étrangers souhaitant investir ou vivre en Égypte, incluant tout ce que vous devez savoir sur les services juridiques.',
        it: 'Una guida completa per stranieri che desiderano investire o vivere in Egitto, includendo tutto ciò che devi sapere sui servizi legali.'
      }),
      date: getTextByLanguage({ar: '15 أكتوبر 2025', en: 'October 15, 2025', fr: '15 octobre 2025', it: '15 ottobre 2025'}),
      readTime: getTextByLanguage({ar: '10 دقائق قراءة', en: '10 min read', fr: '10 min de lecture', it: '10 min di lettura'}),
      image: '/images/lawyer-1.jpg',
      tags: getTextByLanguage({
        ar: 'محامي أجانب في مصر, استثمار أجنبي',
        en: 'Lawyer for foreigners Egypt, Foreign investment',
        fr: 'Avocat pour étrangers Égypte, Investissement étranger',
        it: 'Avvocato per stranieri Egitto, Investimento estero'
      }).split(', ')
    },
    {
      id: 2,
      slug: 'egyptians-abroad-legal-rights-protection',
      title: getTextByLanguage({
        ar: 'محامي المصريين بالخارج: حماية حقوقك القانونية',
        en: 'Lawyer for Egyptians Abroad: Protecting Your Legal Rights',
        fr: 'Avocat pour Égyptiens à l\'Étranger: Protection de vos Droits Juridiques',
        it: 'Avvocato per Egiziani all\'Estero: Protezione dei Tuoi Diritti Legali'
      }),
      excerpt: getTextByLanguage({
        ar: 'كيف يمكن للمصريين في الخارج حماية حقوقهم القانونية في مصر والحصول على الخدمات القانونية المطلوبة.',
        en: 'How Egyptians abroad can protect their legal rights in Egypt and obtain required legal services remotely.',
        fr: 'Comment les Égyptiens à l\'étranger peuvent protéger leurs droits juridiques en Égypte et obtenir les services juridiques requis.',
        it: 'Come gli egiziani all\'estero possono proteggere i loro diritti legali in Egitto e ottenere i servizi legali richiesti.'
      }),
      date: getTextByLanguage({ar: '10 أكتوبر 2025', en: 'October 10, 2025', fr: '10 octobre 2025', it: '10 ottobre 2025'}),
      readTime: getTextByLanguage({ar: '8 دقائق قراءة', en: '8 min read', fr: '8 min de lecture', it: '8 min di lettura'}),
      image: '/images/lawyer-2.jpg',
      tags: getTextByLanguage({
        ar: 'محامي المصريين بالخارج, حقوق قانونية',
        en: 'Lawyer for Egyptians abroad, Legal rights',
        fr: 'Avocat pour Égyptiens à l\'étranger, Droits juridiques',
        it: 'Avvocato per egiziani all\'estero, Diritti legali'
      }).split(', ')
    },
    {
      id: 3,
      slug: 'foreign-investment-egypt-complete-guide',
      title: getTextByLanguage({
        ar: 'الاستثمار في مصر: دليل المستثمر الأجنبي الكامل',
        en: 'Investment in Egypt: Complete Foreign Investor Guide',
        fr: 'Investissement en Égypte: Guide Complet pour Investisseurs Étrangers',
        it: 'Investimento in Egitto: Guida Completa per Investitori Esteri'
      }),
      excerpt: getTextByLanguage({
        ar: 'دليل شامل للاستثمار الأجنبي في مصر، يتضمن القوانين الجديدة والتسهيلات المتاحة.',
        en: 'A comprehensive guide to foreign investment in Egypt, including new laws and available facilities.',
        fr: 'Un guide complet sur l\'investissement étranger en Égypte, incluant les nouvelles lois et les facilités disponibles.',
        it: 'Una guida completa all\'investimento estero in Egitto, includendo nuove leggi e strutture disponibili.'
      }),
      date: getTextByLanguage({ar: '5 أكتوبر 2025', en: 'October 5, 2025', fr: '5 octobre 2025', it: '5 ottobre 2025'}),
      readTime: getTextByLanguage({ar: '12 دقيقة قراءة', en: '12 min read', fr: '12 min de lecture', it: '12 min di lettura'}),
      image: '/images/lawyer-3.jpg',
      tags: getTextByLanguage({
        ar: 'الاستثمار في مصر, قانون الاستثمار',
        en: 'Investment in Egypt, Investment law',
        fr: 'Investissement en Égypte, Droit de l\'investissement',
        it: 'Investimento in Egitto, Legge sugli investimenti'
      }).split(', ')
    }
  ];

  return (
    <section className="py-20 bg-[#0b1a33]" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* العنوان الرئيسي */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#c8a876] mb-6">
            {getTextByLanguage({ar: 'أحدث المقالات القانونية', en: 'Latest Legal Articles', fr: 'Derniers Articles Juridiques', it: 'Ultimi Articoli Legali'})}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {getTextByLanguage({
              ar: 'مقالات قانونية متخصصة من المحامي كريم الديب لمساعدتك في فهم القوانين والحصول على نصائح قانونية قيمة',
              en: 'Specialized legal articles by Lawyer Karim El-Dib to help you understand laws and get valuable legal advice',
              fr: 'Articles juridiques spécialisés de l\'avocat Karim El-Dib pour vous aider à comprendre les lois et obtenir des conseils juridiques précieux',
              it: 'Articoli legali specializzati dell\'avvocato Karim El-Dib per aiutarti a comprendere le leggi e ottenere preziosi consigli legali'
            })}
          </p>
        </div>

        {/* المقالات المميزة */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredArticles.map((article) => (
            <article key={article.id} className="bg-[#1a2d4d] rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
              
              {/* صورة المقال */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/lawyer-7.jpg';
                  }}
                />
              </div>

              {/* محتوى المقال */}
              <div className="p-6">
                
                {/* التاريخ ووقت القراءة */}
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <i className="fas fa-calendar-alt"></i>
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="fas fa-clock"></i>
                    {article.readTime}
                  </span>
                </div>

                {/* عنوان المقال */}
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-[#c8a876] transition-colors duration-300">
                  {article.title}
                </h3>

                {/* مقتطف من المقال */}
                <p className="text-gray-300 mb-4 line-clamp-3 text-sm">
                  {article.excerpt}
                </p>

                {/* التاجز */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.slice(0, 2).map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-[#c8a876] text-[#0b1a33] px-2 py-1 rounded-full text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* رابط القراءة */}
                <Link 
                  to={`/blog/${article.slug}`}
                  className="inline-flex items-center gap-2 text-[#c8a876] hover:text-white transition-colors duration-300 font-semibold text-sm"
                >
                  {getTextByLanguage({ar: 'اقرأ المقال كاملاً', en: 'Read Full Article', fr: 'Lire l\'Article Complet', it: 'Leggi l\'Articolo Completo'})}
                  <i className={`fas fa-arrow-${isRTL ? 'left' : 'right'}`}></i>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* رابط لعرض جميع المقالات */}
        <div className="text-center">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-3 bg-[#c8a876] text-[#0b1a33] px-8 py-4 rounded-full font-semibold text-lg hover:bg-white transition-colors duration-300"
          >
            <i className="fas fa-newspaper"></i>
            {getTextByLanguage({ar: 'عرض جميع المقالات', en: 'View All Articles', fr: 'Voir Tous les Articles', it: 'Visualizza Tutti gli Articoli'})}
          </Link>
        </div>

      </div>
    </section>
  );
};

export default BlogSection;