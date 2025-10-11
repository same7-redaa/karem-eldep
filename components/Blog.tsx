import React from 'react';
import type { BlogPost } from '../types';

const blogPosts: BlogPost[] = [
    { 
        date: '17 August 2025', 
        title: 'Law No. 164 of 2025: What Egypt’s New Rental Regulations Mean for Landlords and Tenants', 
        excerpt: 'On the 4th of August 2025, President Abdel Fattah El-Sisi approved Law No. 164 of 2025 (the “New Rental Law”). This legislation is considered as one of…' 
    },
    { 
        date: '18 June 2025', 
        title: 'Cairo Calling: Why Chinese Manufacturers Are Choosing Egypt, and Why Eldib & Co is Their Gateway', 
        excerpt: 'As global trade tensions escalate and US tariffs continue to pressure Chinese manufacturing, a surprising solution has emerged on the western edge of the…' 
    },
    { 
        date: '21 May 2025', 
        title: 'China Trademark Association’s Secretary General Wu Dongping Meets with Amr Eldib, Managing Partner of Egypt’s Eldib & Co', 
        excerpt: 'On May 14, Secretary General Wu Dongping of China Trademark Association received Mr. Amr Eldib, Managing Partner of Egypt’s Eldib & Co Law Firm,…' 
    },
    { 
        date: '27 April 2025', 
        title: 'Egypt’s Draft Labor Law: A Comprehensive Overhaul of Employment Regulations', 
        excerpt: 'Key Reforms in Egypt’s New Labor Law: Modern Protections, Inclusive Policies, and Employment Innovation The Egyptian parliament has recently introduced a 2025 draft of the new Labor Law (the…' 
    },
];

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
    return (
        <div className="relative bg-[#1a2f5a]/30 backdrop-blur-lg border border-white/10 rounded-lg p-6 flex flex-col group hover:border-white/20 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
            <p className="text-sm text-gray-400 mb-2 z-10">{post.date}</p>
            <h3 className="text-xl font-serif font-bold mb-3 text-white flex-grow z-10">{post.title}</h3>
            <p className="text-gray-300 mb-4 z-10">{post.excerpt}</p>
            <a href="#" className="font-semibold text-[#d4a15c] hover:underline mt-auto z-10">READ MORE</a>
        </div>
    );
}

const Blog: React.FC = () => {
  return (
    <section className="py-20 bg-[#0b1a33]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-serif">Latest Blog Posts</h2>
          <a href="#" className="text-lg text-[#d4a15c] mt-2 inline-block hover:underline">VIEW ALL BLOG</a>
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
