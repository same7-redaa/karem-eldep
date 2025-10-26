import React from 'react';
import type { BlogPost } from '../types';

const blogPosts: BlogPost[] = [
    { 
        date: '15 أكتوبر 2025', 
        title: 'دليل شامل للأجانب: الخدمات القانونية في مصر 2025', 
        excerpt: 'دليل شامل للأجانب الراغبين في الاستثمار أو العيش في مصر، يشمل كل ما تحتاج معرفته عن الخدمات القانونية والإجراءات المطلوبة مع المحامي كريم الديب.',
        image: '/images/lawyer-1.jpg',
        slug: 'guide-foreigners-legal-services-egypt-2025',
        readTime: '10 دقائق قراءة',
        tags: ['محامي أجانب في مصر', 'استثمار أجنبي', 'تأسيس شركات', 'كريم الديب محامي'],
        metaDescription: 'دليل شامل للخدمات القانونية للأجانب في مصر 2025 من المحامي كريم الديب. تأسيس شركات، تصاريح إقامة، استثمار عقاري.'
    },
    { 
        date: '10 أكتوبر 2025', 
        title: 'محامي المصريين بالخارج: حماية حقوقك القانونية', 
        excerpt: 'كيف يمكن للمصريين في الخارج حماية حقوقهم القانونية في مصر والحصول على الخدمات القانونية المطلوبة عن بُعد مع المحامي كريم الديب.',
        image: '/images/lawyer-2.jpg',
        slug: 'egyptians-abroad-legal-rights-protection',
        readTime: '8 دقائق قراءة',
        tags: ['محامي المصريين بالخارج', 'حقوق قانونية', 'خدمات عن بعد', 'كريم الديب'],
        metaDescription: 'خدمات قانونية للمصريين بالخارج مع المحامي كريم الديب. إدارة الممتلكات، قضايا الميراث، الوكالات القانونية عن بُعد.'
    },
    { 
        date: '5 أكتوبر 2025', 
        title: 'الاستثمار في مصر: دليل المستثمر الأجنبي الكامل', 
        excerpt: 'دليل شامل للاستثمار الأجنبي في مصر، يتضمن القوانين الجديدة، التسهيلات المتاحة، وأفضل الفرص الاستثمارية مع المحامي كريم الديب.',
        image: '/images/lawyer-3.jpg',
        slug: 'foreign-investment-egypt-complete-guide',
        readTime: '12 دقيقة قراءة',
        tags: ['الاستثمار في مصر', 'قانون الاستثمار', 'فرص استثمارية', 'محامي استثمار'],
        metaDescription: 'دليل الاستثمار الأجنبي في مصر 2025 من المحامي كريم الديب. القوانين، التسهيلات، والفرص الاستثمارية المتاحة.'
    },
];

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
    return (
        <article className="relative bg-[#1a2f5a]/30 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden flex flex-col group hover:border-white/20 transition-all duration-300 hover:transform hover:scale-[1.02]">
            {/* صورة المقال */}
            {post.image && (
                <div className="h-48 overflow-hidden relative">
                    <img 
                        src={post.image} 
                        alt={`صورة مقال: ${post.title}`}
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/images/lawyer-7.jpg';
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a2f5a]/80 to-transparent"></div>
                    {/* شارة وقت القراءة */}
                    {post.readTime && (
                        <div className="absolute top-3 right-3 bg-[#d4a15c] text-[#1a2f5a] px-2 py-1 rounded-full text-xs font-bold">
                            <i className="fas fa-clock ml-1"></i>
                            {post.readTime}
                        </div>
                    )}
                </div>
            )}
            
            {/* محتوى المقال */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* التاريخ */}
                <time className="text-sm text-gray-400 mb-3 z-10 flex items-center gap-1">
                    <i className="fas fa-calendar-alt text-[#d4a15c]"></i>
                    {post.date}
                </time>
                
                {/* العنوان */}
                <h3 className="text-xl font-serif font-bold mb-3 text-white flex-grow z-10 leading-tight group-hover:text-[#d4a15c] transition-colors duration-300">
                    {post.title}
                </h3>
                
                {/* المقتطف */}
                <p className="text-gray-300 mb-4 z-10 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                </p>
                
                {/* التاجز */}
                {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4 z-10">
                        {post.tags.slice(0, 2).map((tag, index) => (
                            <span 
                                key={index}
                                className="bg-[#d4a15c]/10 border border-[#d4a15c]/30 text-[#d4a15c] px-2 py-1 rounded-lg text-xs font-semibold"
                            >
                                #{tag}
                            </span>
                        ))}
                        {post.tags.length > 2 && (
                            <span className="text-[#d4a15c] text-xs font-semibold">
                                +{post.tags.length - 2}
                            </span>
                        )}
                    </div>
                )}
                
                {/* رابط القراءة */}
                <a 
                    href={post.slug ? `/blog/${post.slug}` : "/blog"} 
                    className="font-semibold text-[#d4a15c] hover:text-white mt-auto z-10 inline-flex items-center gap-2 transition-colors duration-300"
                    aria-label={`اقرأ مقال: ${post.title}`}
                >
                    اقرأ المزيد
                    <i className="fas fa-arrow-left text-sm group-hover:translate-x-1 transition-transform duration-300"></i>
                </a>
            </div>
        </article>
    );
}

const Blog: React.FC = () => {
  return (
    <section className="py-20 bg-[#0b1a33]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-sans">
            <i className="fas fa-newspaper text-[#d4a15c] ml-3"></i>
            آخر المقالات القانونية
          </h2>
          <a href="/blog" className="text-lg text-[#d4a15c] mt-2 inline-block hover:underline font-sans">عرض جميع المقالات</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
