import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import PracticeAreas from '../components/PracticeAreas';
import WhyChooseUs from '../components/WhyChooseUs';
import TeamSection from '../components/TeamSection';
import BlogSection from '../components/BlogSection';
import Contact from '../components/Contact';
import SchemaMarkup from '../components/SchemaMarkup';

const Home: React.FC = () => {
  useEffect(() => {
    // تحديث عنوان الصفحة والـ Meta Tags للصفحة الرئيسية
    document.title = "المحامي كريم الديب | مكتب محاماة دولي | محامي مصري بالخارج | Egyptian Lawyer Abroad";
    
    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'المحامي كريم الديب - محامي مصري بالخارج وخبير قانوني دولي. مكتب محاماة متخصص في خدمات محامي أجانب في مصر، محامي المصريين بالخارج، استشارات قانونية في مصر. Egyptian lawyer abroad providing legal services.');
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'كريم الديب محامي, المحامي كريم الديب, محامي مصري بالخارج, محامي المصريين بالخارج, محامي أجانب في مصر, مكتب محاماة في مصر, مكتب محاماة دولي, استشارات قانونية في مصر, Egyptian lawyer abroad, Egyptian legal consultant, Egyptian lawyer for foreigners, Legal services in Egypt, Lawyer in Sharm El Sheikh, lawyer in alexandria');
    }
  }, []);

  return (
    <>
      <SchemaMarkup type="organization" />
      <Hero />
      <About />
      <PracticeAreas />
      <WhyChooseUs />
      <TeamSection />
      <BlogSection />
      <Contact />
    </>
  );
};

export default Home;