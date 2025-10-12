import React from 'react';
import type { BlogPost } from '../types';

const blogPosts: BlogPost[] = [
    { 
        date: '15 يناير 2025', 
        title: 'دليل شامل لتأسيس الشركات الأجنبية في مصر', 
        excerpt: 'تعرف على الخطوات الكاملة والمتطلبات القانونية لتأسيس شركتك الأجنبية في مصر، بما في ذلك الأوراق المطلوبة والإجراءات الحكومية...' 
    },
    { 
        date: '10 فبراير 2025', 
        title: 'قوانين الإقامة الجديدة للأجانب في مصر 2025', 
        excerpt: 'آخر التحديثات على قوانين الإقامة والتأشيرات للأجانب في مصر، وكيفية تجديد الإقامة بسهولة وبدون تعقيدات...' 
    },
    { 
        date: '5 مارس 2025', 
        title: 'الاستثمار السياحي في شرم الشيخ: فرص وتحديات', 
        excerpt: 'نظرة شاملة على فرص الاستثمار في القطاع السياحي بشرم الشيخ والإجراءات القانونية المطلوبة للمستثمرين الأجانب...' 
    },
    { 
        date: '20 مارس 2025', 
        title: 'حقوق العمال الأجانب في مصر: دليل قانوني', 
        excerpt: 'تعرف على حقوقك كعامل أجنبي في مصر، بما في ذلك عقود العمل، التأمينات الاجتماعية، وحل النزاعات العمالية...' 
    },
];

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
    return (
        <div className="relative bg-[#1a2f5a]/30 backdrop-blur-lg border border-white/10 rounded-lg p-6 flex flex-col group hover:border-white/20 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
            <p className="text-sm text-gray-400 mb-2 z-10">{post.date}</p>
            <h3 className="text-xl font-serif font-bold mb-3 text-white flex-grow z-10">{post.title}</h3>
            <p className="text-gray-300 mb-4 z-10">{post.excerpt}</p>
            <a href="#" className="font-semibold text-[#d4a15c] hover:underline mt-auto z-10">اقرأ المزيد</a>
        </div>
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
          <a href="#" className="text-lg text-[#d4a15c] mt-2 inline-block hover:underline font-sans">عرض جميع المقالات</a>
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
