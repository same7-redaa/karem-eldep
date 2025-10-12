import React, { useState, useEffect } from 'react';

const WhatsAppButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <a
        href="https://wa.me/201223767592"
        target="_blank"
        rel="noopener noreferrer"
        className={`group flex items-center justify-center bg-[#25D366] text-white rounded-full w-16 h-16 shadow-2xl hover:bg-[#20BA5A] transition-all duration-300 transform hover:scale-110 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        aria-label="تواصل معنا عبر واتساب"
      >
        {/* WhatsApp Icon */}
        <i className="fab fa-whatsapp text-4xl"></i>
      </a>
    </div>
  );
};

export default WhatsAppButton;
