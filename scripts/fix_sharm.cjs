const fs = require('fs');
let code = fs.readFileSync('src/pages/cities/SharmElSheikh.tsx', 'utf8');

const targetStart = "const SharmElSheikh: React.FC = () => {";
const targetEnd = "    const languages = [";

const sIndex = code.indexOf(targetStart);
const eIndex = code.indexOf(targetEnd);

if (sIndex === -1 || eIndex === -1) {
  console.error("Sharm markers not found");
  process.exit(1);
}

const replacement = `const SharmElSheikh: React.FC = () => {
    const { language, t } = useLanguage();
    const isRTL = language === 'ar';

    const title = language === 'ar'
        ? 'محامي تحكيم دولي وقضايا أجانب في شرم الشيخ | كريم الديب'
        : language === 'fr'
            ? 'Avocat Arbitrage International & Étrangers à Sharm El Sheikh | Karim Eldib'
            : language === 'it'
                ? 'Avvocato Arbitrato Internazionale e Stranieri a Sharm El Sheikh | Karim Eldib'
                : 'International Arbitration & Foreigners Lawyer in Sharm El Sheikh | Karim Eldib';

    const description = language === 'ar'
        ? 'محامي تحكيم دولي في شرم الشيخ — كريم الديب. متخصص في التحكيم التجاري الدولي لمنازعات الفنادق والاستثمار السياحي، تسوية منازعات المستثمرين الأجانب، تنفيذ أحكام التحكيم، تأسيس شركات وإقامة. استشارة مجانية.'
        : language === 'fr'
            ? 'Avocat en arbitrage international à Sharm El Sheikh — Karim Eldib. Spécialiste en arbitrage commercial international, litiges d\\'investissement hôtelier et touristique, résolution des différends transfrontaliers. Consultation gratuite. Nous parlons français.'
            : language === 'it'
                ? 'Avvocato di arbitrato internazionale a Sharm El Sheikh — Karim Eldib. Specialista in arbitrato commerciale internazionale, controversie sugli investimenti alberghieri e turistici. Consulenza gratuita. Parliamo italiano.'
                : 'International Arbitration Lawyer in Sharm El Sheikh, Egypt — Karim Eldib. Expert in commercial arbitration, hotel & tourism investment disputes, cross-border dispute resolution, and enforcement of foreign arbitral awards. Free consultation. English, French & Italian spoken.';

`;

code = code.slice(0, sIndex) + replacement + code.slice(eIndex);
fs.writeFileSync('src/pages/cities/SharmElSheikh.tsx', code, 'utf8');
console.log("SharmElSheikh.tsx updated successfully!");
