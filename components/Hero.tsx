import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white bg-cover bg-center" 
      style={{ backgroundImage: "url('https://i.pinimg.com/1200x/fb/4e/36/fb4e36b171a92fb4d391f3bc6a90e8a5.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#0b1a33] bg-opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0e1f3b] to-transparent"></div>
      <div className="relative z-10 container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-serif mb-4 leading-tight">
          A Global Law Firm <br/> With Egyptian Roots
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 font-light text-gray-300">
          Founded in 1875, our firm brings over a century of expertise, dedication, and forward-thinking solutions to support your success.
        </p>
        <a 
          href="#" 
          className="bg-[#d4a15c] text-[#0b1a33] font-bold py-3 px-8 rounded-md text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;