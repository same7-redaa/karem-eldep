const fs = require('fs');
let code = fs.readFileSync('src/pages/FAQ.tsx', 'utf8');

const targetStart = "const FAQ: React.FC = () => {";
const targetEnd = "    const faqs: FAQItem[] = [";

const sIndex = code.indexOf(targetStart);
const eIndex = code.indexOf(targetEnd);

if (sIndex === -1 || eIndex === -1) {
  console.error("FAQ markers not found");
  process.exit(1);
}

const replacement = `const FAQ: React.FC = () => {
    const { language } = useLanguage();
    const isRTL = language === 'ar';
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    const title = language === 'ar'
        ? 'الأسئلة الشائعة حول الخدمات القانونية والتحكيم في مصر | كريم الديب'
        : language === 'fr'
            ? 'Questions Fréquentes | Avocat pour Étrangers en Égypte | Karim Eldib'
            : language === 'it'
                ? 'Domande Frequenti | Avvocato per Stranieri in Egitto | Karim Eldib'
                : 'Frequently Asked Questions | Legal Services for Foreigners in Egypt | Karim Eldib';

    const description = language === 'ar'
        ? 'إجابات شاملة على الأسئلة الشائعة حول الخدمات القانونية للأجانب في مصر: الإقامة، التأشيرات، تأسيس الشركات، التحكيم التجاري، الطلاق، العقارات، والاستثمار.'
        : language === 'fr'
            ? 'Réponses complètes aux questions fréquentes sur les services juridiques pour étrangers en Égypte: résidence, visas, création d\\'entreprise, divorce, immobilier et investissement.'
            : language === 'it'
                ? 'Risposte complete alle domande frequenti sui servizi legali per stranieri in Egitto: residenza, visti, costituzione società, divorzio, immobiliare e investimenti.'
                : 'Comprehensive answers to frequently asked questions about legal services for foreigners in Egypt: residence, visas, company formation, commercial arbitration, divorce & real estate.';

`;

code = code.slice(0, sIndex) + replacement + code.slice(eIndex);

// Also remove unused useEffect import if any, or keep it clean
fs.writeFileSync('src/pages/FAQ.tsx', code, 'utf8');
console.log("FAQ.tsx updated successfully!");

