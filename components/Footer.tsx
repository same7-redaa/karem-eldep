import React from 'react';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} className="text-[#d4a15c]/60 hover:text-[#d4a15c] transition-colors duration-300">
        {children}
    </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#061021] text-gray-400 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src="https://i.postimg.cc/PJpM23qn/Eldib-150-anni.png" alt="Eldib & Co Law Firm Logo" className="h-10 w-auto" />
              <span className="text-xl font-semibold font-serif tracking-wider text-white">Eldib & Co</span>
            </div>
            <p className="text-sm">A Global Law Firm With Egyptian Roots. Founded in 1875.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Practice Areas</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Practice Areas</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Dispute Resolution</a></li>
              <li><a href="#" className="hover:text-white">Corporate & Commercial</a></li>
              <li><a href="#" className="hover:text-white">Labour & Employment</a></li>
              <li><a href="#" className="hover:text-white">Intellectual Property</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <address className="not-italic text-sm space-y-2">
              <p>Mokattam, Cairo 11411, Egypt</p>
              <p>+20 2 2510 0000</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Eldib & Co. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <SocialIcon href="#">
              <i className="fa-brands fa-instagram text-xl"></i>
            </SocialIcon>
            <SocialIcon href="#">
              <i className="fa-brands fa-facebook-f text-xl"></i>
            </SocialIcon>
            <SocialIcon href="#">
              <i className="fa-brands fa-twitter text-xl"></i>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;