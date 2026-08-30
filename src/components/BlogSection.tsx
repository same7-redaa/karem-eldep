import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const BlogSection: React.FC = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const getTextByLanguage = (texts: { ar: string; en: string; fr: string; it: string }) => {
    return texts[language as keyof typeof texts] || texts.en;
  };

  const [articles, setArticles] = React.useState<any[]>([]);

  // Helper to get localized content for an article
  const getLocalizedContent = (article: any, field: string) => {
    if (language === 'ar') return article[field] || '';
    const localized = article[`${field}_${language}`];
    return localized || article[field] || '';
  };

  React.useEffect(() => {
    const fetchFeaturedArticles = async () => {
      try {
        const { collection, getDocs, query, where, limit } = await import('firebase/firestore');
        const { db } = await import('../lib/firebase');

        // Fetch featured and published articles
        const q = query(
          collection(db, 'articles'),
          where('isPublished', '==', true),
          where('isFeatured', '==', true)
        );

        const querySnapshot = await getDocs(q);
        const fetchedArticles: any[] = [];
        querySnapshot.forEach((doc) => {
          fetchedArticles.push({ id: doc.id, ...doc.data() });
        });

        // Sort by order and take top 3
        fetchedArticles.sort((a, b) => (a.order || 0) - (b.order || 0));
        setArticles(fetchedArticles.slice(0, 3));
      } catch (error) {
        console.error("Error fetching featured articles:", error);
      }
    };

    fetchFeaturedArticles();
  }, []);

  if (articles.length === 0) return null; // Don't show section if no articles

  return (
    <section className="py-20 bg-[#0b1a33]" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* العنوان الرئيسي */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#c8a876] mb-6">
            {getTextByLanguage({ ar: 'أحدث المقالات القانونية', en: 'Latest Legal Articles', fr: 'Derniers Articles Juridiques', it: 'Ultimi Articoli Legali' })}
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
          {articles.map((article) => (
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
                  {getLocalizedContent(article, 'title')}
                </h3>

                {/* مقتطف من المقال */}
                <p className="text-gray-300 mb-4 line-clamp-3 text-sm">
                  {getLocalizedContent(article, 'excerpt')}
                </p>

                {/* التاجز */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags && article.tags.slice(0, 2).map((tag: any, index: number) => (
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
                  {getTextByLanguage({ ar: 'اقرأ المقال كاملاً', en: 'Read Full Article', fr: 'Lire l\'Article Complet', it: 'Leggi l\'Articolo Completo' })}
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
            {getTextByLanguage({ ar: 'عرض جميع المقالات', en: 'View All Articles', fr: 'Voir Tous les Articles', it: 'Visualizza Tutti gli Articoli' })}
          </Link>
        </div>

      </div>
    </section>
  );
};

export default BlogSection;