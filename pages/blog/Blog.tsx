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
      title: isRTL ? 'دليل شامل للأجانب: الخدمات القانونية في مصر 2025 | المحامي كريم الديب' : 'Complete Guide for Foreigners: Legal Services in Egypt 2025 | Lawyer Karim El-Dib',
      excerpt: isRTL 
        ? 'دليل شامل للأجانب الراغبين في الاستثمار أو العيش في مصر مع المحامي كريم الديب. تأسيس الشركات، تصاريح الإقامة، الاستثمار العقاري، وجميع الخدمات القانونية المتخصصة للأجانب.'
        : 'A comprehensive guide for foreigners wishing to invest or live in Egypt with Lawyer Karim El-Dib. Company formation, residence permits, real estate investment, and all specialized legal services for foreigners.',
      date: isRTL ? '15 أكتوبر 2025' : 'October 15, 2025',
      readTime: isRTL ? '12 دقيقة قراءة' : '12 min read',
      image: '/images/lawyer-1.jpg',
      tags: isRTL 
        ? ['محامي أجانب في مصر', 'كريم الديب محامي', 'استثمار أجنبي مصر', 'تأسيس شركات للأجانب', 'تصاريح إقامة مصر']
        : ['Lawyer for foreigners Egypt', 'Karim El-Dib lawyer', 'Foreign investment Egypt', 'Company formation foreigners', 'Egypt residence permits']
    },
    {
      id: 2,
      slug: 'egyptians-abroad-legal-rights-protection',
      title: isRTL ? 'محامي المصريين بالخارج: حماية حقوقك القانونية | كريم الديب' : 'Lawyer for Egyptians Abroad: Protecting Your Legal Rights | Karim El-Dib',
      excerpt: isRTL 
        ? 'خدمات قانونية متخصصة للمصريين المقيمين بالخارج مع المحامي كريم الديب. إدارة الممتلكات، قضايا الميراث، الوكالات القانونية، وحماية الحقوق عن بُعد.'
        : 'Specialized legal services for Egyptians residing abroad with Lawyer Karim El-Dib. Property management, inheritance cases, legal powers of attorney, and remote rights protection.',
      date: isRTL ? '10 أكتوبر 2025' : 'October 10, 2025',
      readTime: isRTL ? '10 دقائق قراءة' : '10 min read',
      image: '/images/lawyer-2.jpg',
      tags: isRTL 
        ? ['محامي المصريين بالخارج', 'كريم الديب', 'حقوق قانونية مصر', 'خدمات قانونية عن بعد', 'إدارة الممتلكات مصر']
        : ['Lawyer for Egyptians abroad', 'Karim El-Dib', 'Egypt legal rights', 'Remote legal services', 'Egypt property management']
    },
    {
      id: 3,
      slug: 'foreign-investment-egypt-complete-guide',
      title: isRTL ? 'الاستثمار في مصر: دليل المستثمر الأجنبي الكامل 2025 | كريم الديب' : 'Investment in Egypt: Complete Foreign Investor Guide 2025 | Karim El-Dib',
      excerpt: isRTL 
        ? 'دليل شامل للاستثمار الأجنبي في مصر 2025 مع المحامي كريم الديب. القوانين الجديدة، التسهيلات الحكومية، الفرص الاستثمارية الذهبية، والإجراءات القانونية المطلوبة.'
        : 'A comprehensive guide to foreign investment in Egypt 2025 with Lawyer Karim El-Dib. New laws, government facilities, golden investment opportunities, and required legal procedures.',
      date: isRTL ? '5 أكتوبر 2025' : 'October 5, 2025',
      readTime: isRTL ? '15 دقيقة قراءة' : '15 min read',
      image: '/images/lawyer-3.jpg',
      tags: isRTL 
        ? ['الاستثمار في مصر 2025', 'قانون الاستثمار المصري', 'فرص استثمارية مصر', 'كريم الديب محامي استثمار', 'تسهيلات الاستثمار مصر']
        : ['Investment in Egypt 2025', 'Egyptian investment law', 'Egypt investment opportunities', 'Karim El-Dib investment lawyer', 'Egypt investment facilities']
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
                  {article.title}
                </h2>

                {/* مقتطف من المقال */}
                <p className="text-gray-300 mb-5 line-clamp-3 leading-relaxed">
                  {article.excerpt}
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
                  {isRTL ? 'اقرأ المزيد' : 'Read More'}
                  <i className={`fas fa-arrow-${isRTL ? 'left' : 'right'}`}></i>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA للاشتراك والتواصل */}
        <div className="bg-gradient-to-br from-[#1a2d4d] to-[#0b1a33] border border-[#c8a876]/20 rounded-2xl p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-[#c8a876]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-newspaper text-4xl text-[#c8a876]"></i>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#c8a876] mb-4">
              {isRTL ? 'هل لديك استفسار قانوني؟' : 'Have a Legal Question?'}
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {isRTL 
                ? 'تواصل معنا الآن للحصول على استشارة قانونية متخصصة من المحامي كريم الديب'
                : 'Contact us now for specialized legal consultation from Lawyer Karim El-Dib'
              }
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/201009955509"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#c8a876] text-[#0b1a33] px-8 py-4 rounded-xl font-bold hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#c8a876]/50"
              >
                <i className="fab fa-whatsapp text-2xl"></i>
                {isRTL ? 'تواصل عبر واتساب' : 'Contact via WhatsApp'}
              </a>
              <a
                href="tel:+201009955509"
                className="inline-flex items-center gap-3 bg-white text-[#0b1a33] px-8 py-4 rounded-xl font-bold hover:bg-[#c8a876] hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <i className="fas fa-phone text-xl"></i>
                {isRTL ? 'اتصل الآن' : 'Call Now'}
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Blog;