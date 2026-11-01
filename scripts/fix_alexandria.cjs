const fs = require('fs');
let code = fs.readFileSync('src/pages/cities/Alexandria.tsx', 'utf8');

const targetStart = "const Alexandria: React.FC = () => {";
const targetEnd = "    const features = [";

const sIndex = code.indexOf(targetStart);
const eIndex = code.indexOf(targetEnd);

if (sIndex === -1 || eIndex === -1) {
  console.error("Alexandria markers not found");
  process.exit(1);
}

const replacement = `const Alexandria: React.FC = () => {
    const { language, t } = useLanguage();
    const isRTL = language === 'ar';

    const title = language === 'ar'
        ? 'محامي تحكيم دولي وقضايا أجانب في الإسكندرية | كريم الديب'
        : language === 'fr'
            ? 'Avocat Arbitrage International & Étrangers à Alexandrie | Karim Eldib'
            : language === 'it'
                ? 'Avvocato Arbitrato Internazionale e Stranieri ad Alessandria | Karim Eldib'
                : 'International Arbitration & Foreigners Lawyer in Alexandria | Karim Eldib';

    const description = language === 'ar'
        ? 'محامي تحكيم دولي في الإسكندرية — كريم الديب. متخصص في التحكيم التجاري الدولي، منازعات المستثمرين الأجانب، تسوية المنازعات الدولية، تنفيذ أحكام التحكيم الأجنبية، تأسيس شركات وإقامة. استشارة مجانية.'
        : language === 'fr'
            ? 'Avocat en arbitrage international à Alexandrie — Karim Eldib. Spécialiste en arbitrage commercial international, litiges d\\'investissements étrangers, résolution des différends transfrontaliers et exécution de sentences arbitrales. Consultation gratuite.'
            : language === 'it'
                ? 'Avvocato di arbitrato internazionale ad Alessandria — Karim Eldib. Specialista in arbitrato commerciale internazionale, controversie di investimento estero, risoluzione dispute transfrontaliere. Consulenza gratuite.'
                : 'International Arbitration Lawyer in Alexandria, Egypt — Karim Eldib. Expert in commercial arbitration, foreign investment disputes, cross-border dispute resolution, and enforcement of foreign arbitral awards. Free consultation. English, French & Italian spoken.';

`;

code = code.slice(0, sIndex) + replacement + code.slice(eIndex);
fs.writeFileSync('src/pages/cities/Alexandria.tsx', code, 'utf8');
console.log("Alexandria.tsx updated successfully!");
