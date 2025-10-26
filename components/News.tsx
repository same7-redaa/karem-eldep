import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const News: React.FC = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const newsArticles = [
    {
      id: 1,
      title: isRTL 
        ? 'نصير من لا نصير له: المحامي كريم الديب صاحب القضايا المستحيلة'
        : 'Supporter of the Unsupported: Lawyer Karim El-Dib, Master of Impossible Cases',
      newspaper: isRTL ? 'أخبار الجمهورية' : 'Akhbar El Gomhuria',
      date: isRTL ? '15 مايو 2025' : 'May 15, 2025',
      excerpt: isRTL 
        ? 'تقرير شامل عن إنجازات المحامي كريم الديب في الدفاع عن القضايا الصعبة والمعقدة التي لا يجرؤ محامون آخرون على التعامل معها.'
        : 'Comprehensive report on Lawyer Karim El-Dib\'s achievements in defending difficult and complex cases that other lawyers dare not handle.',
      link: 'https://akhbaralgomhuria.com/%d9%86%d8%b5%d9%8a%d8%b1-%d9%85%d9%86-%d9%84%d8%a7-%d9%86%d8%b5%d9%8a%d8%b1-%d9%84%d8%a9-%d8%a7%d9%84%d9%85%d8%ad%d8%a7%d9%85%d9%8a-%d9%83%d8%b1%d9%8a%d9%85-%d8%a7%d9%84%d8%af%d9%8a%d8%a8-%d8%b5/',
      image: '/images/lawyer-4.jpg',
      tags: isRTL 
        ? ['أخبار المحامين', 'قضايا صعبة', 'كريم الديب']
        : ['Lawyers News', 'Difficult Cases', 'Karim El-Dib']
    },
    {
      id: 2,
      title: isRTL 
        ? 'المحامي كريم الديب يحقق نصراً قانونياً مدوياً في قضية استثمارية معقدة'
        : 'Lawyer Karim El-Dib Achieves Resounding Legal Victory in Complex Investment Case',
      newspaper: isRTL ? 'اليوم السابع' : 'Youm7',
      date: isRTL ? '10 مايو 2025' : 'May 10, 2025',
      excerpt: isRTL 
        ? 'تغطية حصرية لانتصار المحامي كريم الديب في قضية استثمارية دولية معقدة تتعلق بحقوق المستثمرين الأجانب في مصر.'
        : 'Exclusive coverage of Lawyer Karim El-Dib\'s victory in a complex international investment case related to foreign investors\' rights in Egypt.',
      link: 'https://www.youm7.com/2025/05/blog-post_565.html',
      image: '/images/lawyer-5.jpg',
      tags: isRTL 
        ? ['انتصارات قانونية', 'استثمار دولي', 'أخبار قانونية']
        : ['Legal Victories', 'International Investment', 'Legal News']
    },
    {
      id: 3,
      title: isRTL 
        ? 'كريم الديب: رائد الخدمات القانونية للمصريين بالخارج والمستثمرين الأجانب'
        : 'Karim El-Dib: Pioneer in Legal Services for Egyptians Abroad and Foreign Investors',
      newspaper: isRTL ? 'الوطن نيوز' : 'El Watan News',
      date: isRTL ? '5 مايو 2025' : 'May 5, 2025',
      excerpt: isRTL 
        ? 'حوار شامل مع المحامي كريم الديب حول تطوير الخدمات القانونية المتخصصة للمصريين في الخارج والمستثمرين الأجانب في مصر.'
        : 'Comprehensive interview with Lawyer Karim El-Dib about developing specialized legal services for Egyptians abroad and foreign investors in Egypt.',
      link: 'https://www.elwaatannews.com/2025/05/blog-post_55.html',
      image: '/images/lawyer-6.jpg',
      tags: isRTL 
        ? ['خدمات قانونية', 'مصريون بالخارج', 'استثمار أجنبي']
        : ['Legal Services', 'Egyptians Abroad', 'Foreign Investment']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#0b1a33] to-[#1a2d4d]" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* العنوان الرئيسي */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#c8a876] mb-6">
            <i className="fas fa-newspaper text-[#c8a876] ml-3"></i>
            {isRTL ? 'كريم الديب في الأخبار' : 'Karim El-Dib in the News'}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {isRTL 
              ? 'تغطية إعلامية شاملة لإنجازات وانتصارات المحامي كريم الديب في أهم الصحف والمواقع الإخبارية المصرية'
              : 'Comprehensive media coverage of Lawyer Karim El-Dib\'s achievements and victories in major Egyptian newspapers and news websites'
            }
          </p>
        </div>

        {/* مقالات الأخبار */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsArticles.map((article) => (
            <article key={article.id} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group hover:border-[#c8a876]/50">
              
              {/* صورة المقال */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/lawyer-7.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                
                {/* شارة الصحيفة */}
                <div className="absolute top-3 right-3 bg-[#c8a876] text-[#0b1a33] px-3 py-1 rounded-full text-xs font-bold">
                  <i className="fas fa-newspaper ml-1"></i>
                  {article.newspaper}
                </div>
              </div>

              {/* محتوى المقال */}
              <div className="p-6">
                
                {/* التاريخ */}
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                  <i className="fas fa-calendar-alt text-[#c8a876]"></i>
                  <span>{article.date}</span>
                </div>

                {/* عنوان المقال */}
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-[#c8a876] transition-colors duration-300 leading-tight">
                  {article.title}
                </h3>

                {/* مقتطف من المقال */}
                <p className="text-gray-300 mb-4 line-clamp-3 text-sm leading-relaxed">
                  {article.excerpt}
                </p>

                {/* التاجز */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.slice(0, 2).map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-[#c8a876]/10 border border-[#c8a876]/30 text-[#c8a876] px-2 py-1 rounded-lg text-xs font-semibold"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* رابط القراءة */}
                <a 
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#c8a876] hover:text-white transition-colors duration-300 font-semibold text-sm"
                >
                  {isRTL ? 'قراءة الخبر كاملاً' : 'Read Full News'}
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* إحصائيات الإعلام */}
        <div className="bg-[#c8a876]/10 border border-[#c8a876]/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-[#c8a876] mb-4">
            {isRTL ? 'تغطية إعلامية واسعة' : 'Extensive Media Coverage'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300 text-sm">
                {isRTL ? 'تقرير إعلامي' : 'Media Reports'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-gray-300 text-sm">
                {isRTL ? 'صحيفة ومجلة' : 'Newspapers & Magazines'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-gray-300 text-sm">
                {isRTL ? 'قضية منشورة' : 'Published Cases'}
              </div>
            </div>
          </div>
          <p className="text-gray-300 mt-4 text-sm">
            {isRTL 
              ? 'يحظى المحامي كريم الديب بتغطية إعلامية واسعة لإنجازاته القانونية المتميزة'
              : 'Lawyer Karim El-Dib receives extensive media coverage for his outstanding legal achievements'
            }
          </p>
        </div>

      </div>
    </section>
  );
};

export default News;