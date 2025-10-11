import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-[#0b1a33] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-serif">Contact Us</h2>
          <p className="text-lg text-gray-300 mt-2">Send Us Your Inquiry Now</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-serif font-bold mb-6">Send Us a Message</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:ring-2 focus:ring-[#d4a15c] focus:border-transparent outline-none transition" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 font-medium mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:ring-2 focus:ring-[#d4a15c] focus:border-transparent outline-none transition" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">Message</label>
                <textarea id="message" name="message" rows={5} className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:ring-2 focus:ring-[#d4a15c] focus:border-transparent outline-none transition"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#d4a15c] text-[#0b1a33] font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition-all duration-300">
                Submit
              </button>
            </form>
          </div>
          <div>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-lg shadow-lg mb-8">
                <h3 className="text-2xl font-serif font-bold mb-4">HEAD OFFICE</h3>
                <p className="text-gray-300 mb-2"><strong>Address:</strong> Citadel Plaza Building 1, Intersection of Mokattam Road & Autostrade Mokattam, Cairo 11411, Egypt</p>
                <p className="text-gray-300 mb-2"><strong>Phone:</strong> +20 2 2510 0000</p>
                <p className="text-gray-300"><strong>Fax:</strong> +20 2 2510 5555</p>
            </div>
            <img src="https://picsum.photos/seed/map/600/400" alt="Office Location Map" className="w-full h-auto rounded-lg shadow-lg object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;