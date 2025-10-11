import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import PracticeAreas from './components/PracticeAreas';
import WhyChooseUs from './components/WhyChooseUs';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

// FIX: Changed return type to React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
export default function App(): React.ReactElement {
  return (
    <div className="bg-[#0b1a33] text-gray-200 font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <WhyChooseUs />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}