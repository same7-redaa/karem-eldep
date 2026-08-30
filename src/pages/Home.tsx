import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import PracticeAreas from '../components/PracticeAreas';
import WhyChooseUs from '../components/WhyChooseUs';
import TeamSection from '../components/TeamSection';
import BlogSection from '../components/BlogSection';
import News from '../components/News';
import Contact from '../components/Contact';
import SchemaMarkup from '../components/SchemaMarkup';
import AdvancedSEO from '../components/AdvancedSEO';

const Home: React.FC = () => {
  useEffect(() => {
    // تحديث عنوان الصفحة والـ Meta Tags للصفحة الرئيسية
    document.title = "المحامي كريم الديب _ صاحب مؤسسة كريم الديب للمحاماة | محامي أجانب في مصر | محامي دولي | International Lawyer Egypt";
    
    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'المحامي كريم الديب - محامي دولي في مصر وخبير قانوني. مكتب محاماة متخصص في خدمات الأجانب في مصر، المصريين المغتربين، استشارات قانونية دولية. International lawyer in Egypt providing legal services for foreigners.');
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'كريم الديب محامي, المحامي كريم الديب, محامي دولي في مصر, محامي للمصريين المغتربين, محامي أجانب في مصر, مكتب محاماة في مصر, مكتب محاماة دولي, استشارات قانونية في مصر, International lawyer Egypt, Egyptian legal consultant, Lawyer for foreigners in Egypt, Legal services in Egypt, Lawyer in Sharm El Sheikh, lawyer in alexandria');
    }
  }, []);

  return (
    <>
      <AdvancedSEO />
      <SchemaMarkup type="organization" />
      <Hero />
      <About />
      <PracticeAreas />
      <WhyChooseUs />
      <TeamSection />
      <BlogSection />
      <News />
      <Contact />
    </>
  );
};

export default Home;