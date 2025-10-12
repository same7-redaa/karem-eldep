import React from 'react';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} className="text-[#d4a15c]/60 hover:text-[#d4a15c] transition-colors duration-300">
        {children}
    </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#061021] text-gray-400 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* القسم الأول - معلومات المؤسسة */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="https://i.postimg.cc/PJpM23qn/Eldib-150-anni.png" alt="Karim Eldib Law Firm Logo" className="h-12 w-auto" />
              <span className="text-xl font-bold font-sans tracking-wider text-white">مؤسسة كريم الديب</span>
            </div>
            <p className="text-sm font-sans leading-relaxed text-gray-400">
              <i className="fas fa-gavel text-[#d4a15c] ml-2"></i>
              محامي الأجانب والشركات الأجنبية في مصر
            </p>
            <p className="text-sm font-sans leading-relaxed text-gray-400 mt-2">
              <i className="fas fa-globe text-[#d4a15c] ml-2"></i>
              خدمات قانونية بلا حدود
            </p>
          </div>

          {/* القسم الثاني - روابط سريعة */}
          <div>
            <h4 className="text-white font-bold mb-6 font-sans text-lg">روابط سريعة</h4>
            <ul className="space-y-3 text-sm font-sans">
              <li><a href="#" className="hover:text-[#d4a15c] transition-colors duration-300 flex items-center gap-2">
                <i className="fas fa-chevron-left text-[#d4a15c] text-xs"></i>
                نبذة عنا
              </a></li>
              <li><a href="#" className="hover:text-[#d4a15c] transition-colors duration-300 flex items-center gap-2">
                <i className="fas fa-chevron-left text-[#d4a15c] text-xs"></i>
                الخدمات القانونية
              </a></li>
              <li><a href="#" className="hover:text-[#d4a15c] transition-colors duration-300 flex items-center gap-2">
                <i className="fas fa-chevron-left text-[#d4a15c] text-xs"></i>
                اتصل بنا
              </a></li>
            </ul>
          </div>

          {/* القسم الثالث - الخدمات القانونية */}
          <div>
            <h4 className="text-white font-bold mb-6 font-sans text-lg">الخدمات القانونية</h4>
            <ul className="space-y-3 text-sm font-sans">
              <li><a href="#" className="hover:text-[#d4a15c] transition-colors duration-300 flex items-center gap-2">
                <i className="fas fa-chevron-left text-[#d4a15c] text-xs"></i>
                الإقامة والهجرة
              </a></li>
              <li><a href="#" className="hover:text-[#d4a15c] transition-colors duration-300 flex items-center gap-2">
                <i className="fas fa-chevron-left text-[#d4a15c] text-xs"></i>
                تأسيس الشركات
              </a></li>
              <li><a href="#" className="hover:text-[#d4a15c] transition-colors duration-300 flex items-center gap-2">
                <i className="fas fa-chevron-left text-[#d4a15c] text-xs"></i>
                القانون التجاري
              </a></li>
              <li><a href="#" className="hover:text-[#d4a15c] transition-colors duration-300 flex items-center gap-2">
                <i className="fas fa-chevron-left text-[#d4a15c] text-xs"></i>
                قطاع السياحة
              </a></li>
            </ul>
          </div>

          {/* القسم الرابع - معلومات الاتصال */}
          <div>
            <h4 className="text-white font-bold mb-6 font-sans text-lg">اتصل بنا</h4>
            <address className="not-italic text-sm space-y-4 font-sans">
              <p className="flex items-start gap-3 hover:text-[#d4a15c] transition-colors duration-300">
                <i className="fas fa-map-marker-alt text-[#d4a15c] mt-1"></i>
                <span>الإسكندرية - شرم الشيخ</span>
              </p>
              <p className="flex items-center gap-3 hover:text-[#d4a15c] transition-colors duration-300">
                <i className="fas fa-phone text-[#d4a15c]"></i>
                <a href="tel:01223767592">01223767592</a>
              </p>
              <p className="flex items-center gap-3 hover:text-[#d4a15c] transition-colors duration-300">
                <i className="fas fa-envelope text-[#d4a15c]"></i>
                <a href="mailto:kingarim2411@gmail.com">kingarim2411@gmail.com</a>
              </p>
            </address>
          </div>
        </div>

        {/* الخط الفاصل والحقوق */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-sm font-sans text-center sm:text-right">
            &copy; {new Date().getFullYear()} مؤسسة كريم الديب للمحاماة. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-4">
            <SocialIcon href="https://wa.me/201223767592">
              <i className="fa-brands fa-whatsapp text-2xl"></i>
            </SocialIcon>
            <SocialIcon href="https://www.facebook.com/profile.php?id=61581691364993">
              <i className="fa-brands fa-facebook-f text-2xl"></i>
            </SocialIcon>
            <SocialIcon href="tel:01223767592">
              <i className="fa-solid fa-phone text-2xl"></i>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
