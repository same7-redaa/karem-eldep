import React from 'react';
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
import { useLanguage } from '../contexts/LanguageContext';

const Home: React.FC = () => {
  const { language } = useLanguage();

  const seoTitle = language === 'ar'
    ? 'المحامي كريم الديب | محامي أجانب في مصر | مكتب محاماة دولي'
    : language === 'fr'
    ? 'Cabinet Karim Eldib | Avocat pour Étrangers en Égypte | Droit International'
    : language === 'it'
    ? 'Studio Karim Eldib | Avvocato per Stranieri in Egitto | Diritto Internazionale'
    : 'Karim El-Dib Law Firm | Lawyer for Foreigners in Egypt | International Arbitration';

  const seoDescription = language === 'ar'
    ? 'المحامي كريم الديب - مكتب محاماة دولي متخصص في خدمات الأجانب في مصر، تأسيس الشركات، عقارات واستثمارات، التحكيم الدولي ومنازعات الاستثمار بمصر.'
    : language === 'fr'
    ? 'Cabinet Karim Eldib - Avocat international spécialisé pour étrangers en Égypte. Création de sociétés, immobilier, arbitrage international et litiges.'
    : language === 'it'
    ? 'Studio Karim Eldib - Avvocato internazionale per stranieri in Egitto. Costituzione società, immobiliare, arbitrato internazionale e controversie.'
    : 'Karim El-Dib Law Firm - International law firm specialized in serving foreigners and investors in Egypt. Company formation, property deeds, and international arbitration.';

  const seoKeywords = language === 'ar'
    ? 'كريم الديب محامي, محامي أجانب في مصر, محامي دولي في مصر, مكتب محاماة دولي بمصر, محامي استثمار أجنبي, محامي تحكيم دولي مصر, تسوية المنازعات الدولية بمصر'
    : 'Karim Eldib lawyer, lawyer for foreigners in egypt, international lawyer egypt, corporate lawyer egypt, investment disputes egypt, commercial arbitration';

  return (
    <>
      <AdvancedSEO 
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
      />
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