const fs = require('fs');
let code = fs.readFileSync('src/pages/Services.tsx', 'utf8');

const targetStart = "const Services: React.FC = () => {";
const targetEnd = "    const services = [";

const sIndex = code.indexOf(targetStart);
const eIndex = code.indexOf(targetEnd);

if (sIndex === -1 || eIndex === -1) {
  console.error("Services markers not found");
  process.exit(1);
}

const replacement = `const Services: React.FC = () => {
    const { language } = useLanguage();
    const isRTL = language === 'ar';

    const title = language === 'ar'
        ? 'الخدمات القانونية ومنازعات الاستثمار والتحكيم الدولي في مصر | كريم الديب'
        : language === 'fr'
            ? 'Nos Services Juridiques & Arbitrage International en Égypte | Karim Eldib'
            : language === 'it'
                ? 'I Nostri Servizi Legali & Arbitrato Internazionale in Egitto | Karim Eldib'
                : 'Legal Services, Foreign Investment & Arbitration in Egypt | Karim Eldib';

    const description = language === 'ar'
        ? 'خدمات قانونية شاملة ومتخصصة للأجانب والشركات في مصر: التحكيم التجاري الدولي، تأسيس الشركات، إقامة وتأشيرات، عقارات واستثمارات، قضايا مدنية وجنائية وقانون الأسرة. نتحدث 4 لغات.'
        : language === 'fr'
            ? 'Services juridiques complets pour étrangers et investisseurs en Égypte: arbitrage international, création d\\'entreprise, résidence, immobilier, divorce et litiges. Nous parlons 4 langues.'
            : language === 'it'
                ? 'Servizi legali completi per stranieri e investitori in Egitto: arbitrato internazionale, costituzione società, residenza, contratti e contenzioso. Parliamo 4 lingue.'
                : 'Comprehensive legal services for foreigners and international businesses in Egypt: commercial arbitration, company formation, residence permits, real estate, civil and criminal cases.';

`;

code = code.slice(0, sIndex) + replacement + code.slice(eIndex);
fs.writeFileSync('src/pages/Services.tsx', code, 'utf8');
console.log("Services.tsx updated successfully!");

