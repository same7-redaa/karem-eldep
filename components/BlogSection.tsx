import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const BlogSection: React.FC = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const featuredArticles = [
    {
      id: 1,
      slug: 'guide-foreigners-legal-services-egypt-2025',
      title: isRTL ? 'دليل شامل للأجانب: الخدمات القانونية في مصر 2025' : 'Complete Guide for Foreigners: Legal Services in Egypt 2025',
      excerpt: isRTL 
        ? 'دليل شامل للأجانب الراغبين في الاستثمار أو العيش في مصر، يشمل كل ما تحتاج معرفته عن الخدمات القانونية.'
        : 'A comprehensive guide for foreigners wishing to invest or live in Egypt, including everything you need to know about legal services.',
      date: isRTL ? '15 أكتوبر 2025' : 'October 15, 2025',
      readTime: isRTL ? '10 دقائق قراءة' : '10 min read',
      image: 'https://i.postimg.cc/x1MfZcP8/legal-blog1.jpg',
      tags: isRTL 
        ? ['محامي أجانب في مصر', 'استثمار أجنبي']
        : ['Lawyer for foreigners Egypt', 'Foreign investment']
    },
    {
      id: 2,
      slug: 'egyptians-abroad-legal-rights-protection',
      title: isRTL ? 'محامي المصريين بالخارج: حماية حقوقك القانونية' : 'Lawyer for Egyptians Abroad: Protecting Your Legal Rights',
      excerpt: isRTL 
        ? 'كيف يمكن للمصريين في الخارج حماية حقوقهم القانونية في مصر والحصول على الخدمات القانونية المطلوبة.'
        : 'How Egyptians abroad can protect their legal rights in Egypt and obtain required legal services remotely.',
      date: isRTL ? '10 أكتوبر 2025' : 'October 10, 2025',
      readTime: isRTL ? '8 دقائق قراءة' : '8 min read',
      image: 'https://i.postimg.cc/N0h9Lx6K/legal-blog2.jpg',
      tags: isRTL 
        ? ['محامي المصريين بالخارج', 'حقوق قانونية']
        : ['Lawyer for Egyptians abroad', 'Legal rights']
    },
    {
      id: 3,
      slug: 'foreign-investment-egypt-complete-guide',
      title: isRTL ? 'الاستثمار في مصر: دليل المستثمر الأجنبي الكامل' : 'Investment in Egypt: Complete Foreign Investor Guide',
      excerpt: isRTL 
        ? 'دليل شامل للاستثمار الأجنبي في مصر، يتضمن القوانين الجديدة والتسهيلات المتاحة.'
        : 'A comprehensive guide to foreign investment in Egypt, including new laws and available facilities.',
      date: isRTL ? '5 أكتوبر 2025' : 'October 5, 2025',
      readTime: isRTL ? '12 دقيقة قراءة' : '12 min read',
      image: 'https://i.postimg.cc/j5DcF8xK/legal-blog3.jpg',
      tags: isRTL 
        ? ['الاستثمار في مصر', 'قانون الاستثمار']
        : ['Investment in Egypt', 'Investment law']
    }
  ];

  return (
    <section className="py-20 bg-[#0b1a33]" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* العنوان الرئيسي */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#c8a876] mb-6">
            {isRTL ? 'أحدث المقالات القانونية' : 'Latest Legal Articles'}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {isRTL 
              ? 'مقالات قانونية متخصصة من المحامي كريم الديب لمساعدتك في فهم القوانين والحصول على نصائح قانونية قيمة'
              : 'Specialized legal articles by Lawyer Karim El-Dib to help you understand laws and get valuable legal advice'
            }
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
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://i.postimg.cc/G3FMRMY4/3.png';
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
                  {isRTL ? 'اقرأ المقال كاملاً' : 'Read Full Article'}
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
            {isRTL ? 'عرض جميع المقالات' : 'View All Articles'}
          </Link>
        </div>

      </div>
    </section>
  );
};

export default BlogSection;