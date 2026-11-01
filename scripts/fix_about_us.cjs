const fs = require('fs');
let code = fs.readFileSync('src/pages/AboutUs.tsx', 'utf8');

// Replace lines from const AboutUs: React.FC = () => { up to const stats = [
const targetStart = "const AboutUs: React.FC = () => {";
const targetEnd = "    const stats = [";

const sIndex = code.indexOf(targetStart);
const eIndex = code.indexOf(targetEnd);

if (sIndex === -1 || eIndex === -1) {
  console.error("AboutUs markers not found");
  process.exit(1);
}

const replacement = `const AboutUs: React.FC = () => {
    const { language } = useLanguage();
    const isRTL = language === 'ar';

    const title = language === 'ar'
        ? 'من نحن | المحامي كريم الديب | 18 عاماً من الخبرة في خدمة الأجانب والتحكيم الدولي'
        : language === 'fr'
            ? 'À Propos | Avocat Karim Eldib | 18 Ans d\\'Expérience en Égypte'
            : language === 'it'
                ? 'Chi Siamo | Avvocato Karim Eldib | 18 Anni di Esperienza in Egitto'
                : 'About Us | Lawyer Karim El-Dib | 18 Years Experience in Egypt';

    const description = language === 'ar'
        ? 'تعرف على المحامي كريم الديب، صاحب 18 عاماً من الخبرة المتخصصة في خدمة الأجانب والمستثمرين في مصر. مكتب محاماة دولي يتحدث 4 لغات ويقدم خدمات قانونية شاملة في شرم الشيخ والإسكندرية والقاهرة.'
        : language === 'fr'
            ? 'Découvrez l\\'avocat Karim El-Dib, 18 ans d\\'expérience spécialisée dans les services aux étrangers et investisseurs en Égypte. Cabinet d\\'avocats international parlant 4 langues.'
            : language === 'it'
                ? 'Scopri l\\'avvocato Karim El-Dib, 18 anni di esperienza specializzata nei servizi per stranieri e investitori in Egitto. Studio legale internazionale che parla 4 lingue.'
                : 'Meet Lawyer Karim El-Dib, 18 years of specialized experience serving foreigners and investors in Egypt. International law firm speaking 4 languages in Alexandria, Cairo & Sharm El Sheikh.';

`;

code = code.slice(0, sIndex) + replacement + code.slice(eIndex);
fs.writeFileSync('src/pages/AboutUs.tsx', code, 'utf8');
console.log("AboutUs.tsx updated successfully!");

