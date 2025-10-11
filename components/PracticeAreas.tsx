import React from 'react';
import type { PracticeArea } from '../types';

const practiceAreas: PracticeArea[] = [
  { icon: 'fa-solid fa-gavel', title: 'Dispute Resolution', description: 'Our elite team of highly qualified lawyers is equipped to handle any case, with a breadth of legal experience.' },
  { icon: 'fa-solid fa-users', title: 'Labour & Employment', description: 'Expert legal counsel on all matters related to labor laws and employment disputes.' },
  { icon: 'fa-solid fa-truck-fast', title: 'Transportation', description: 'Specialized legal services for the transportation industry, covering regulatory, and litigation matters.' },
  { icon: 'fa-solid fa-film', title: 'Media & Entertainment', description: 'Navigating the complex legal landscape of the media and entertainment sectors.' },
  { icon: 'fa-solid fa-briefcase', title: 'Corporate & Commercial', description: 'Comprehensive legal support for your business, from incorporation to contractual agreements.' },
  { icon: 'fa-solid fa-lightbulb', title: 'Intellectual Property', description: 'Protecting your innovations and creative works with robust IP law strategies.' },
];

const PracticeAreaCard: React.FC<{ area: PracticeArea }> = ({ area }) => {
    return (
        <div className="relative bg-[#1a2f5a]/30 backdrop-blur-lg border border-white/10 p-8 rounded-lg text-center flex flex-col items-center group hover:border-white/20 hover:-translate-y-2 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
            <i className={`${area.icon} text-4xl text-[#d4a15c] mb-4 transition-transform duration-300 group-hover:scale-110 z-10`}></i>
            <h3 className="text-2xl font-serif font-bold mb-3 z-10">{area.title}</h3>
            <p className="text-gray-300 flex-grow mb-6 z-10">{area.description}</p>
            <a href="#" className="font-semibold text-[#d4a15c] hover:underline z-10">Know more</a>
        </div>
    );
}

const PracticeAreas: React.FC = () => {
  return (
    <section className="py-20 bg-[#0b1a33]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-serif">Practice Areas</h2>
          <p className="text-lg text-gray-400 mt-2">Our expertise across a wide range of legal fields.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area) => (
            <PracticeAreaCard key={area.title} area={area} />
          ))}
        </div>
        <div className="text-center mt-12">
            <a href="#" className="font-semibold text-[#d4a15c] hover:underline text-lg">VIEW ALL PRACTICE AREAS</a>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;