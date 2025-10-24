import React, { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  useEffect(() => {
    document.title = "مقالات قانونية | مدونة المحامي كريم الديب | Legal Blog Egypt";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'مقالات قانونية متخصصة من المحامي كريم الديب. نصائح قانونية، أحكام محاكم، قوانين جديدة للمصريين والأجانب في مصر. Legal blog Egypt by Karim El-Dib lawyer.');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'مقالات قانونية, مدونة قانونية, نصائح قانونية, أحكام محاكم, قوانين مصر, كريم الديب محامي, المحامي كريم الديب, Legal blog Egypt, Legal articles Egypt');
    }
  }, []);

  const articles = [
    {
      id: 1,
      slug: 'guide-foreigners-legal-services-egypt-2025',
      title: isRTL ? 'دليل شامل للأجانب: الخدمات القانونية في مصر 2025' : 'Complete Guide for Foreigners: Legal Services in Egypt 2025',
      excerpt: isRTL 
        ? 'دليل شامل للأجانب الراغبين في الاستثمار أو العيش في مصر، يشمل كل ما تحتاج معرفته عن الخدمات القانونية والإجراءات المطلوبة.'
        : 'A comprehensive guide for foreigners wishing to invest or live in Egypt, including everything you need to know about legal services and required procedures.',
      date: isRTL ? '15 أكتوبر 2025' : 'October 15, 2025',
      readTime: isRTL ? '10 دقائق قراءة' : '10 min read',
      image: 'https://i.postimg.cc/x1MfZcP8/legal-blog1.jpg',
      tags: isRTL 
        ? ['محامي أجانب في مصر', 'استثمار أجنبي', 'تأسيس شركات']
        : ['Lawyer for foreigners Egypt', 'Foreign investment', 'Company formation']
    },
    {
      id: 2,
      slug: 'egyptians-abroad-legal-rights-protection',
      title: isRTL ? 'محامي المصريين بالخارج: حماية حقوقك القانونية' : 'Lawyer for Egyptians Abroad: Protecting Your Legal Rights',
      excerpt: isRTL 
        ? 'كيف يمكن للمصريين في الخارج حماية حقوقهم القانونية في مصر والحصول على الخدمات القانونية المطلوبة عن بُعد.'
        : 'How Egyptians abroad can protect their legal rights in Egypt and obtain required legal services remotely.',
      date: isRTL ? '10 أكتوبر 2025' : 'October 10, 2025',
      readTime: isRTL ? '8 دقائق قراءة' : '8 min read',
      image: 'https://i.postimg.cc/N0h9Lx6K/legal-blog2.jpg',
      tags: isRTL 
        ? ['محامي المصريين بالخارج', 'حقوق قانونية', 'خدمات عن بعد']
        : ['Lawyer for Egyptians abroad', 'Legal rights', 'Remote services']
    },
    {
      id: 3,
      slug: 'foreign-investment-egypt-complete-guide',
      title: isRTL ? 'الاستثمار في مصر: دليل المستثمر الأجنبي الكامل' : 'Investment in Egypt: Complete Foreign Investor Guide',
      excerpt: isRTL 
        ? 'دليل شامل للاستثمار الأجنبي في مصر، يتضمن القوانين الجديدة، التسهيلات المتاحة، وأفضل الفرص الاستثمارية.'
        : 'A comprehensive guide to foreign investment in Egypt, including new laws, available facilities, and best investment opportunities.',
      date: isRTL ? '5 أكتوبر 2025' : 'October 5, 2025',
      readTime: isRTL ? '12 دقيقة قراءة' : '12 min read',
      image: 'https://i.postimg.cc/j5DcF8xK/legal-blog3.jpg',
      tags: isRTL 
        ? ['الاستثمار في مصر', 'قانون الاستثمار', 'فرص استثمارية']
        : ['Investment in Egypt', 'Investment law', 'Investment opportunities']
    }
  ];

  return (
    <div className="min-h-screen bg-[#0b1a33] text-gray-200 py-20" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#c8a876]">
            {isRTL ? 'المقالات القانونية' : 'Legal Articles'}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            {isRTL 
              ? 'مقالات قانونية متخصصة من المحامي كريم الديب لمساعدتك في فهم القوانين المصرية والحصول على نصائح قانونية قيمة.'
              : 'Specialized legal articles by Lawyer Karim El-Dib to help you understand Egyptian laws and get valuable legal advice.'
            }
          </p>
        </div>

        {/* المقالات */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {articles.map((article) => (
            <article key={article.id} className="bg-[#1a2d4d] rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              
              {/* صورة المقال */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
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
                <h2 className="text-2xl font-bold text-white mb-3 line-clamp-2">
                  {article.title}
                </h2>

                {/* مقتطف من المقال */}
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* التاجز */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-[#c8a876] text-[#0b1a33] px-3 py-1 rounded-full text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* رابط القراءة */}
                <Link 
                  to={`/blog/${article.slug}`}
                  className="inline-flex items-center gap-2 text-[#c8a876] hover:text-white transition-colors duration-300 font-semibold"
                >
                  {isRTL ? 'اقرأ المقال كاملاً' : 'Read Full Article'}
                  <i className={`fas fa-arrow-${isRTL ? 'left' : 'right'}`}></i>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA للاشتراك */}
        <div className="bg-[#1a2d4d] rounded-lg p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#c8a876] mb-6">
            {isRTL ? 'ابق على اطلاع بأحدث المقالات القانونية' : 'Stay Updated with Latest Legal Articles'}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {isRTL 
              ? 'اشترك لتحصل على أحدث المقالات والنصائح القانونية من المحامي كريم الديب مباشرة في بريدك الإلكتروني.'
              : 'Subscribe to get the latest articles and legal advice from Lawyer Karim El-Dib directly in your email.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder={isRTL ? 'البريد الإلكتروني' : 'Email Address'}
              className="flex-1 px-6 py-3 rounded-full bg-[#0b1a33] text-white border border-[#c8a876] focus:outline-none focus:ring-2 focus:ring-[#c8a876]"
            />
            <button className="bg-[#c8a876] text-[#0b1a33] px-8 py-3 rounded-full font-semibold hover:bg-white transition-colors duration-300">
              {isRTL ? 'اشترك' : 'Subscribe'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Blog;