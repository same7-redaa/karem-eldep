import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useParams, Link } from 'react-router-dom';

const BlogPost: React.FC = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const { slug } = useParams();
  const [article, setArticle] = useState<any>(null);

  useEffect(() => {
    // بيانات المقالات (في التطبيق الحقيقي ستأتي من API)
    const articles = {
      'guide-foreigners-legal-services-egypt-2025': {
        title: isRTL ? 'دليل شامل للأجانب: الخدمات القانونية في مصر 2025' : 'Complete Guide for Foreigners: Legal Services in Egypt 2025',
        content: isRTL 
          ? `
            <h2>مقدمة</h2>
            <p>يشهد الاستثمار الأجنبي في مصر نمواً متزايداً، مما يتطلب من الأجانب فهماً عميقاً للنظام القانوني المصري. المحامي كريم الديب، كمحامي أجانب في مصر متخصص، يقدم هذا الدليل الشامل.</p>
            
            <h2>الخدمات القانونية الأساسية للأجانب</h2>
            <h3>1. تأسيس الشركات</h3>
            <p>تأسيس شركات للأجانب في مصر يتطلب فهماً دقيقاً لقانون الشركات المصري. نساعدك في:</p>
            <ul>
              <li>اختيار النوع المناسب للشركة</li>
              <li>إنجاز جميع الإجراءات القانونية</li>
              <li>الحصول على التراخيص اللازمة</li>
            </ul>
            
            <h3>2. تصاريح الإقامة والعمل</h3>
            <p>كمحامي أجانب في مصر، نقدم خدمات شاملة في:</p>
            <ul>
              <li>استخراج تصاريح الإقامة</li>
              <li>تجديد تصاريح العمل</li>
              <li>حل مشاكل الإقامة القانونية</li>
            </ul>
            
            <h3>3. الاستثمار العقاري</h3>
            <p>قوانين تملك الأجانب للعقارات في مصر معقدة، ونحن نساعدك في:</p>
            <ul>
              <li>فهم قوانين التملك</li>
              <li>إنجاز عمليات الشراء</li>
              <li>حماية استثماراتك العقارية</li>
            </ul>
            
            <h2>لماذا تختار المحامي كريم الديب؟</h2>
            <p>كريم الديب محامي متخصص في خدمة الأجانب في مصر، مع خبرة تزيد عن 15 سنة في:</p>
            <ul>
              <li>القانون المصري والدولي</li>
              <li>خدمة العملاء الأجانب</li>
              <li>الحلول القانونية المبتكرة</li>
            </ul>
            
            <h2>خاتمة</h2>
            <p>الاستثمار في مصر فرصة ذهبية، والمحامي كريم الديب شريكك القانوني الأمثل لضمان نجاح استثماراتك.</p>
          `
          : `
            <h2>Introduction</h2>
            <p>Foreign investment in Egypt is experiencing increasing growth, requiring foreigners to have a deep understanding of the Egyptian legal system. Lawyer Karim El-Dib, as a specialized lawyer for foreigners in Egypt, provides this comprehensive guide.</p>
            
            <h2>Essential Legal Services for Foreigners</h2>
            <h3>1. Company Formation</h3>
            <p>Establishing companies for foreigners in Egypt requires precise understanding of Egyptian company law. We help you with:</p>
            <ul>
              <li>Choosing the appropriate company type</li>
              <li>Completing all legal procedures</li>
              <li>Obtaining necessary licenses</li>
            </ul>
            
            <h3>2. Residence and Work Permits</h3>
            <p>As a lawyer for foreigners in Egypt, we provide comprehensive services in:</p>
            <ul>
              <li>Obtaining residence permits</li>
              <li>Renewing work permits</li>
              <li>Solving legal residency issues</li>
            </ul>
            
            <h3>3. Real Estate Investment</h3>
            <p>Laws governing foreign property ownership in Egypt are complex, and we help you with:</p>
            <ul>
              <li>Understanding ownership laws</li>
              <li>Completing purchase transactions</li>
              <li>Protecting your real estate investments</li>
            </ul>
            
            <h2>Why Choose Lawyer Karim El-Dib?</h2>
            <p>Karim El-Dib is a lawyer specialized in serving foreigners in Egypt, with over 15 years of experience in:</p>
            <ul>
              <li>Egyptian and international law</li>
              <li>Serving foreign clients</li>
              <li>Innovative legal solutions</li>
            </ul>
            
            <h2>Conclusion</h2>
            <p>Investing in Egypt is a golden opportunity, and Lawyer Karim El-Dib is your ideal legal partner to ensure the success of your investments.</p>
          `,
        date: isRTL ? '15 أكتوبر 2025' : 'October 15, 2025',
        readTime: isRTL ? '10 دقائق قراءة' : '10 min read',
        tags: isRTL 
          ? ['محامي أجانب في مصر', 'استثمار أجنبي', 'تأسيس شركات']
          : ['Lawyer for foreigners Egypt', 'Foreign investment', 'Company formation']
      },
      'egyptians-abroad-legal-rights-protection': {
        title: isRTL ? 'محامي المصريين بالخارج: حماية حقوقك القانونية' : 'Lawyer for Egyptians Abroad: Protecting Your Legal Rights',
        content: isRTL 
          ? `
            <h2>حقوق المصريين بالخارج</h2>
            <p>المحامي كريم الديب، كمحامي مصري بالخارج متخصص، يساعد المصريين المقيمين في الخارج في حماية حقوقهم القانونية في مصر.</p>
            
            <h2>الخدمات المقدمة</h2>
            <h3>1. إدارة الممتلكات</h3>
            <p>نساعدك في إدارة ممتلكاتك في مصر وأنت في الخارج</p>
            
            <h3>2. قضايا الميراث</h3>
            <p>حل نزاعات الميراث وتقسيم التركات</p>
            
            <h3>3. الوكالات القانونية</h3>
            <p>إنجاز الوكالات اللازمة لتمثيلك قانونياً</p>
          `
          : `
            <h2>Rights of Egyptians Abroad</h2>
            <p>Lawyer Karim El-Dib, as a specialized Egyptian lawyer abroad, helps Egyptians residing abroad protect their legal rights in Egypt.</p>
            
            <h2>Services Provided</h2>
            <h3>1. Property Management</h3>
            <p>We help you manage your properties in Egypt while you are abroad</p>
            
            <h3>2. Inheritance Cases</h3>
            <p>Resolving inheritance disputes and estate division</p>
            
            <h3>3. Legal Powers of Attorney</h3>
            <p>Completing necessary powers of attorney for legal representation</p>
          `,
        date: isRTL ? '10 أكتوبر 2025' : 'October 10, 2025',
        readTime: isRTL ? '8 دقائق قراءة' : '8 min read',
        tags: isRTL 
          ? ['محامي المصريين بالخارج', 'حقوق قانونية', 'خدمات عن بعد']
          : ['Lawyer for Egyptians abroad', 'Legal rights', 'Remote services']
      },
      'foreign-investment-egypt-complete-guide': {
        title: isRTL ? 'الاستثمار في مصر: دليل المستثمر الأجنبي الكامل' : 'Investment in Egypt: Complete Foreign Investor Guide',
        content: isRTL 
          ? `
            <h2>فرص الاستثمار في مصر</h2>
            <p>مصر تقدم فرصاً استثمارية متنوعة للمستثمرين الأجانب، والمحامي كريم الديب يساعدك في استكشافها.</p>
            
            <h2>القطاعات الاستثمارية</h2>
            <h3>1. العقارات والتطوير العقاري</h3>
            <p>الاستثمار في العقارات والمشاريع السكنية والتجارية</p>
            
            <h3>2. السياحة والضيافة</h3>
            <p>الاستثمار في المنتجعات والفنادق والخدمات السياحية</p>
            
            <h3>3. التكنولوجيا والابتكار</h3>
            <p>الاستثمار في شركات التكنولوجيا والشركات الناشئة</p>
          `
          : `
            <h2>Investment Opportunities in Egypt</h2>
            <p>Egypt offers diverse investment opportunities for foreign investors, and Lawyer Karim El-Dib helps you explore them.</p>
            
            <h2>Investment Sectors</h2>
            <h3>1. Real Estate and Development</h3>
            <p>Investment in real estate and residential and commercial projects</p>
            
            <h3>2. Tourism and Hospitality</h3>
            <p>Investment in resorts, hotels, and tourism services</p>
            
            <h3>3. Technology and Innovation</h3>
            <p>Investment in technology companies and startups</p>
          `,
        date: isRTL ? '5 أكتوبر 2025' : 'October 5, 2025',
        readTime: isRTL ? '12 دقيقة قراءة' : '12 min read',
        tags: isRTL 
          ? ['الاستثمار في مصر', 'قانون الاستثمار', 'فرص استثمارية']
          : ['Investment in Egypt', 'Investment law', 'Investment opportunities']
      }
    };

    const currentArticle = articles[slug as keyof typeof articles];
    if (currentArticle) {
      setArticle(currentArticle);
      document.title = `${currentArticle.title} | المحامي كريم الديب`;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', currentArticle.title);
      }
    }
  }, [slug, isRTL]);

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
            {article.title}
          </h1>
          
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag: string, index: number) => (
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
          <div 
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-[#c8a876] 
              prose-h2:text-3xl prose-h2:font-bold prose-h2:mb-6 prose-h2:mt-8
              prose-h3:text-2xl prose-h3:font-semibold prose-h3:mb-4 prose-h3:mt-6
              prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
              prose-ul:text-gray-300 prose-li:mb-2
              prose-strong:text-white"
            dangerouslySetInnerHTML={{ __html: article.content }}
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