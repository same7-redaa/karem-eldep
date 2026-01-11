import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useParams, Link } from 'react-router-dom';

// Import removed
// Import removed
// Import removed
// Import removed
// Import removed
// Import removed
// Import removed

const BlogPost: React.FC = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const { slug } = useParams();
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Fetch article effect
  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      try {
        const { collection, getDocs, query, where } = await import('firebase/firestore');
        const { db } = await import('../../src/lib/firebase');

        const q = query(collection(db, 'articles'), where('slug', '==', slug));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const docData = querySnapshot.docs[0].data();
          setArticle(docData);
        } else {
          setArticle(null);
        }
      } catch (error) {
        console.error("Error fetching article:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchArticle();
    }
  }, [slug]);

  // SEO & Localization Effect
  useEffect(() => {
    if (article) {
      const localizedTitle = getLocalizedContent('title') || article.title;
      const localizedExcerpt = getLocalizedContent('excerpt') || article.excerpt;

      // Update Title
      document.title = `${localizedTitle} | ${isRTL ? 'المحامي كريم الديب' : 'Karim El-Dib Law Firm'}`;

      // Update Meta Description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', localizedExcerpt);
      }
    }
  }, [article, language, isRTL]);

  // Helper to get localized content
  const getLocalizedContent = (field: string) => {
    if (!article) return '';
    if (language === 'ar') return article[field] || '';
    const localized = article[`${field}_${language}`];
    // Return localized if exists and not empty, otherwise fallback
    return localized || article[field] || '';
  };

  const title = getLocalizedContent('title');
  const excerpt = getLocalizedContent('excerpt');
  const content = getLocalizedContent('content');

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0b1a33] text-gray-200 py-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#c8a876] mx-auto mb-4"></div>
          <p className="text-[#c8a876]">{isRTL ? 'جاري التحميل...' : 'Loading...'}</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-[#0b1a33] text-gray-200 py-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#c8a876] mb-4">
            {isRTL ? 'المقال غير موجود' : 'Article Not Found'}
          </h1>
          <Link to="/blog" className="text-[#c8a876] hover:text-white">
            {isRTL ? 'العودة للمقالات' : 'Back to Articles'}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b1a33] text-gray-200 py-20" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* العودة للمقالات */}
        <div className="mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[#c8a876] hover:text-white transition-colors duration-300"
          >
            <i className={`fas fa-arrow-${isRTL ? 'right' : 'left'}`}></i>
            {isRTL ? 'العودة للمقالات' : 'Back to Articles'}
          </Link>
        </div>

        {/* معلومات المقال */}
        <div className="mb-8">
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
            <span className="flex items-center gap-1">
              <i className="fas fa-calendar-alt"></i>
              {article.date}
            </span>
            <span className="flex items-center gap-1">
              <i className="fas fa-clock"></i>
              {article.readTime}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#c8a876] mb-6">
            {title}
          </h1>

          <div className="flex flex-wrap gap-2">
            {article.tags?.map((tag: string, index: number) => (
              <span
                key={index}
                className="bg-[#c8a876] text-[#0b1a33] px-3 py-1 rounded-full text-sm font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* محتوى المقال */}
        <article className="bg-[#1a2d4d] rounded-lg p-8 mb-8">
          <style>{`
            .prose .ql-align-center { text-align: center; }
            .prose .ql-align-right { text-align: right; }
            .prose .ql-align-justify { text-align: justify; }
            .prose .ql-direction-rtl { direction: rtl; text-align: right; }
            .prose iframe { width: 100%; height: 400px; border-radius: 0.5rem; }
          `}</style>
          <div
            className="prose prose-invert prose-lg max-w-none break-words
              prose-headings:text-[#c8a876] 
              prose-h2:text-3xl prose-h2:font-bold prose-h2:mb-6 prose-h2:mt-8
              prose-h3:text-2xl prose-h3:font-semibold prose-h3:mb-4 prose-h3:mt-6
              prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
              prose-ul:text-gray-300 prose-li:mb-2
              prose-strong:text-white
              prose-img:max-w-full prose-img:h-auto prose-img:rounded-lg prose-img:mx-auto prose-img:my-6"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </article>

        {/* CTA للتواصل */}
        <div className="bg-gradient-to-r from-[#c8a876] to-[#b8956a] rounded-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0b1a33] mb-4">
            {isRTL ? 'هل تحتاج استشارة قانونية؟' : 'Do You Need Legal Consultation?'}
          </h2>
          <p className="text-lg text-[#0b1a33] mb-6">
            {isRTL
              ? 'المحامي كريم الديب جاهز لمساعدتك في جميع احتياجاتك القانونية'
              : 'Lawyer Karim El-Dib is ready to help you with all your legal needs'
            }
          </p>
          <Link
            to="/#contact"
            className="bg-[#0b1a33] text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors duration-300 inline-block"
          >
            {isRTL ? 'احجز استشارة الآن' : 'Book Consultation Now'}
          </Link>
        </div>

      </div>
    </div>
  );
};

export default BlogPost;