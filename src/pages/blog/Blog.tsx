import React, { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';

import { staticArticles } from '../../data/staticArticles';

const Blog: React.FC = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const getTextByLanguage = (texts: { ar: string; en: string; fr: string; it: string }) => {
    return texts[language as keyof typeof texts] || texts.en;
  };

  const [articles, setArticles] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    // SEO Meta updates
    document.title = "مقالات قانونية | مدونة المحامي كريم الديب | Legal Blog Egypt";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'مقالات قانونية متخصصة من المحامي كريم الديب. نصائح قانونية، أحكام محاكم، قوانين جديدة للمصريين والأجانب في مصر. Legal blog Egypt by Karim El-Dib lawyer.');
    }

    // Fetch articles from Firebase
    const fetchArticles = async () => {
      try {
        const { collection, getDocs, query, where } = await import('firebase/firestore');
        const { db } = await import('../../lib/firebase');

        const q = query(
          collection(db, 'articles'),
          where('isPublished', '==', true)
        );

        const querySnapshot = await getDocs(q);
        const fetchedArticles: any[] = [];
        querySnapshot.forEach((doc) => {
          fetchedArticles.push({ id: doc.id, ...doc.data() });
        });

        // Merge with staticArticles (avoiding duplicates if already in Firestore)
        const existingSlugs = new Set(fetchedArticles.map(a => a.slug));
        Object.values(staticArticles).forEach(statArt => {
          if (!existingSlugs.has(statArt.slug)) {
            fetchedArticles.push(statArt);
          }
        });

        // Sort client-side
        fetchedArticles.sort((a, b) => (a.order || 0) - (b.order || 0));

        setArticles(fetchedArticles);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setArticles(Object.values(staticArticles));
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // Helper to get localized content for an article
  const getLocalizedContent = (article: any, field: string) => {
    if (language === 'ar') return article[field] || '';
    const localized = article[`${field}_${language}`];
    return localized || article[field] || '';
  };

  return (
    <div className="min-h-screen bg-[#0b1a33] text-gray-200 py-20" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#c8a876]">
            {getTextByLanguage({
              ar: 'المقالات القانونية',
              en: 'Legal Articles',
              fr: 'Articles Juridiques',
              it: 'Articoli Legali'
            })}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            {getTextByLanguage({
              ar: 'مقالات قانونية متخصصة من المحامي كريم الديب لمساعدتك في فهم القوانين المصرية والحصول على نصائح قانونية قيمة.',
              en: 'Specialized legal articles by Lawyer Karim El-Dib to help you understand Egyptian laws and get valuable legal advice.',
              fr: 'Articles juridiques spécialisés de l\'avocat Karim El-Dib pour vous aider à comprendre les lois égyptiennes et obtenir des conseils juridiques précieux.',
              it: 'Articoli legali specializzati dell\'avvocato Karim El-Dib per aiutarti a comprendere le leggi egiziane e ottenere preziosi consigli legali.'
            })}
          </p>
        </div>

        {/* المقالات */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group bg-[#1a2d4d] rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-[#c8a876]/20"
            >

              {/* صورة المقال */}
              <div className="h-56 overflow-hidden relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://i.postimg.cc/G3FMRMY4/3.png';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a33]/80 to-transparent"></div>
              </div>

              {/* محتوى المقال */}
              <div className="p-6">

                {/* التاريخ ووقت القراءة */}
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <span className="flex items-center gap-2 bg-[#c8a876]/10 px-3 py-1 rounded-full">
                    <i className="fas fa-calendar-alt text-[#c8a876]"></i>
                    {article.date}
                  </span>
                  <span className="flex items-center gap-2 bg-[#c8a876]/10 px-3 py-1 rounded-full">
                    <i className="fas fa-clock text-[#c8a876]"></i>
                    {article.readTime}
                  </span>
                </div>

                {/* عنوان المقال */}
                <h2 className="text-2xl font-bold text-white mb-4 line-clamp-2 group-hover:text-[#c8a876] transition-colors duration-300">
                  {getLocalizedContent(article, 'title')}
                </h2>

                {/* مقتطف من المقال */}
                <p className="text-gray-300 mb-5 line-clamp-3 leading-relaxed">
                  {getLocalizedContent(article, 'excerpt')}
                </p>

                {/* التاجز */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {article.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#c8a876]/10 border border-[#c8a876]/30 text-[#c8a876] px-3 py-1 rounded-lg text-xs font-semibold hover:bg-[#c8a876]/20 transition-colors duration-300"
                    >
                      <i className="fas fa-tag text-xs mr-1"></i>
                      {tag}
                    </span>
                  ))}
                  {article.tags.length > 2 && (
                    <span className="bg-[#c8a876]/10 text-[#c8a876] px-3 py-1 rounded-lg text-xs font-semibold">
                      +{article.tags.length - 2}
                    </span>
                  )}
                </div>

                {/* رابط القراءة */}
                <Link
                  to={`/blog/${article.slug}`}
                  className="inline-flex items-center gap-2 bg-[#c8a876] text-[#0b1a33] px-6 py-3 rounded-lg font-semibold hover:bg-white transition-all duration-300 hover:gap-3"
                >
                  {getTextByLanguage({
                    ar: 'اقرأ المزيد',
                    en: 'Read More',
                    fr: 'Lire Plus',
                    it: 'Leggi di Più'
                  })}
                  <i className={`fas fa-arrow-${isRTL ? 'left' : 'right'}`}></i>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA للاشتراك والتواصل */}
        <div className="bg-gradient-to-br from-[#1a2d4d] to-[#0b1a33] border border-[#c8a876]/20 rounded-2xl p-12 text-center">
          <div className="max-w-7xl mx-auto">
            <div className="w-20 h-20 bg-[#c8a876]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-newspaper text-4xl text-[#c8a876]"></i>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#c8a876] mb-4">
              {getTextByLanguage({
                ar: 'هل لديك استفسار قانوني؟',
                en: 'Have a Legal Question?',
                fr: 'Avez-vous une Question Juridique?',
                it: 'Hai una Domanda Legale?'
              })}
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {getTextByLanguage({
                ar: 'تواصل معنا الآن للحصول على استشارة قانونية متخصصة من المحامي كريم الديب',
                en: 'Contact us now for specialized legal consultation from Lawyer Karim El-Dib',
                fr: 'Contactez-nous maintenant pour une consultation juridique spécialisée de l\'avocat Karim El-Dib',
                it: 'Contattaci ora per una consulenza legale specializzata dall\'avvocato Karim El-Dib'
              })}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/201009955509"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#c8a876] text-[#0b1a33] px-8 py-4 rounded-xl font-bold hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#c8a876]/50"
              >
                <i className="fab fa-whatsapp text-2xl"></i>
                {getTextByLanguage({
                  ar: 'تواصل عبر واتساب',
                  en: 'Contact via WhatsApp',
                  fr: 'Contacter via WhatsApp',
                  it: 'Contatta via WhatsApp'
                })}
              </a>
              <a
                href="tel:+201223767592"
                className="inline-flex items-center gap-3 bg-white text-[#0b1a33] px-8 py-4 rounded-xl font-bold hover:bg-[#c8a876] hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <i className="fas fa-phone text-xl"></i>
                {getTextByLanguage({
                  ar: 'اتصل الآن',
                  en: 'Call Now',
                  fr: 'Appeler Maintenant',
                  it: 'Chiama Ora'
                })}
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Blog;