import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import PracticeAreas from './components/PracticeAreas';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// FIX: Changed return type to React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
export default function App(): React.ReactElement {
  return (
    <LanguageProvider>
      <div className="bg-[#0b1a33] text-gray-200 font-sans" style={{ fontFamily: 'Tajawal, sans-serif' }}>
        <Header />
        <main>
          <Hero />
          <About />
          <PracticeAreas />
          <WhyChooseUs />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
}