import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const DOMAIN = 'https://www.ke-lawyer.com';

if (!fs.existsSync(distDir)) {
  console.error("dist/ directory does not exist! Please run vite build first.");
  process.exit(1);
}

const templatePath = path.join(distDir, 'index.html');
const templateHtml = fs.readFileSync(templatePath, 'utf8');

// Import staticArticles
const staticArticlesFile = fs.readFileSync(path.join(rootDir, 'src/data/staticArticles.ts'), 'utf8');

// Parse articles roughly from staticArticles.ts
const articleSlugs = [
  'international-commercial-arbitration-egypt-guide-2026',
  'international-arbitration-foreign-investors-lawyer-egypt-2026',
  'comprehensive-legal-services-guide-egypt-2026',
  'enforcement-foreign-arbitral-awards-egypt-guide',
  'foreign-lawyer-sharm-el-sheikh',
  'foreign-lawyer-alexandria',
  'guide-foreigners-legal-services-egypt-2025',
  'egyptians-abroad-legal-rights-protection',
  'foreign-investment-egypt-complete-guide',
  'company-formation-for-foreigners-in-egypt-complete-guide',
  'divorce-for-foreigners-in-egypt-comprehensive-guide',
  'real-estate-investment-sharm-el-sheikh-comprehensive-guide',
  'residence-permit-guide-in-egypt-2026',
  'international-arbitration-lawyer-egypt-investment-disputes'
];

// Helper to extract article title and excerpt
function extractArticleMetadata(slug) {
  const match = staticArticlesFile.indexOf(`'${slug}'`);
  if (match === -1) return null;
  const chunk = staticArticlesFile.slice(match, match + 3500);

  const titleArMatch = chunk.match(/title:\s*['"`](.*?)['"`],/);
  const titleEnMatch = chunk.match(/title_en:\s*['"`](.*?)['"`],/);
  const excerptArMatch = chunk.match(/excerpt:\s*['"`](.*?)['"`],/);
  const excerptEnMatch = chunk.match(/excerpt_en:\s*['"`](.*?)['"`],/);

  return {
    titleAr: titleArMatch ? titleArMatch[1] : 'مقال قانوني | مؤسسة كريم الديب للمحاماة',
    titleEn: titleEnMatch ? titleEnMatch[1] : 'Legal Article | Karim Eldib Law Firm',
    excerptAr: excerptArMatch ? excerptArMatch[1] : 'مقال قانوني متخصص من مؤسسة كريم الديب للمحاماة والتحكيم الدولي في مصر.',
    excerptEn: excerptEnMatch ? excerptEnMatch[1] : 'Specialized legal guide from Karim Eldib Law Firm & International Commercial Arbitration in Egypt.'
  };
}

const pages = [
  {
    path: '',
    titleAr: 'المحامي كريم الديب | محامي تحكيم دولي وقضايا أجانب في مصر | مكتب محاماة دولي',
    titleEn: 'Karim Eldib Law Firm | International Arbitration & Foreigners Lawyer in Egypt',
    descAr: 'مؤسسة المحامي كريم الديب للمحاماة والاستشارات القانونية والتحكيم الدولي في مصر. تأسيس شركات للأجانب، إقامات، عقارات، تحكيم تجاري دولي، وخدمات المصريين بالخارج. خبرة 18 عاماً.',
    descEn: 'Karim Eldib Law Firm — Premier international law firm in Egypt. Expert in international commercial arbitration, investor dispute resolution, company formation & expat legal services in Cairo, Alexandria & Sharm El Sheikh.',
    h1Ar: 'مؤسسة كريم الديب للمحاماة والتحكيم التجاري الدولي بمصر',
    h1En: 'Karim Eldib International Law Firm & Commercial Arbitration in Egypt'
  },
  {
    path: '/arbitration-mediation',
    titleAr: 'محامي تحكيم دولي في مصر | التحكيم التجاري وتسوية منازعات الاستثمار | كريم الديب',
    titleEn: 'International Commercial Arbitration Lawyer in Egypt | Investment Disputes & CRCICA | Karim Eldib',
    descAr: 'مكتب المحامي كريم الديب — الرائد في التحكيم التجاري الدولي، منازعات المستثمرين الأجانب، التمثيل أمام مركز القاهرة CRCICA وICC، وتنفيذ أحكام التحكيم الأجنبية باتفاقية نيويورك 1958.',
    descEn: 'Karim Eldib — Leading international arbitration lawyer in Egypt. Comprehensive representation before CRCICA, ICC & UNCITRAL, investor-state dispute settlement, and cross-border award enforcement under the 1958 New York Convention.',
    h1Ar: 'التحكيم التجاري الدولي وتسوية منازعات الاستثمار بمصر',
    h1En: 'International Commercial Arbitration & Foreign Investment Disputes in Egypt'
  },
  {
    path: '/foreigners-in-egypt',
    titleAr: 'محامي أجانب ومستثمرين في مصر | إقامات وتأشيرات وتأسيس شركات | كريم الديب',
    titleEn: 'Immigration & Foreigners Lawyer in Egypt | Residence Permits, Visas & Business Setup | Karim Eldib',
    descAr: 'خدمات قانونية متكاملة للأجانب والمقيمين في مصر: إقامات استثمارية وعقارية، تصاريح عمل، تأسيس شركات، شراء عقارات، وقضايا زواج وطلاق. نتحدث 4 لغات.',
    descEn: 'Premier legal services for expats & international investors in Egypt: investor visas, work permits, company registration, property deeds, and family law. English, French, Italian & Arabic spoken.',
    h1Ar: 'محامي الأجانب والمستثمرين والمقيمين في جمهورية مصر العربية',
    h1En: 'Legal Services for Foreigners, Expats and Investors in Egypt'
  },
  {
    path: '/company-law',
    titleAr: 'محامي تأسيس شركات وقانون الأعمال في مصر للأجانب | كريم الديب',
    titleEn: 'Company Formation & Corporate Lawyer in Egypt | Foreign Business Setup | Karim Eldib',
    descAr: 'محامي شركات واستثمار أجنبي في مصر: تأسيس الشركات ذات المسؤولية المحدودة (LLC)، شركات الشخص الواحد، والشركات المساهمة لدى هيئة الاستثمار GAFI خلال 72 ساعة.',
    descEn: 'Corporate law & company registration in Egypt for foreign investors: 100% foreign-owned LLCs, single-person entities, GAFI compliance, commercial contracts, and business licensing.',
    h1Ar: 'تأسيس الشركات والاستثمار الأجنبي وقانون الشركات بمصر',
    h1En: 'Company Formation & Foreign Investment Law in Egypt'
  },
  {
    path: '/commercial-law',
    titleAr: 'محامي قانون تجاري وعقود دولية في مصر | كريم الديب',
    titleEn: 'Commercial Law & International Trade Lawyer in Egypt | Karim Eldib',
    descAr: 'محامي تجاري معتمد لصياغة العقود التجارية الدولية، تسوية منازعات التوريد والتوزيع والشحن البحري، ونزاعات الشركاء التجاريين في مصر.',
    descEn: 'Commercial contracts, international trade disputes, maritime shipping claims, agency agreements, and corporate transaction advisory in Egypt.',
    h1Ar: 'القانون التجاري والعقود والمعاملات الدولية بمصر',
    h1En: 'Commercial Law & International Business Transactions in Egypt'
  },
  {
    path: '/family-law',
    titleAr: 'محامي أحوال شخصية وقانون الأسرة للأجانب في مصر | كريم الديب',
    titleEn: 'Family Lawyer for Foreigners in Egypt | Expat Divorce & Custody | Karim Eldib',
    descAr: 'محامي متخصص في قضايا الأسرة والزواج المختلط للأجانب في مصر: توثيق زواج الأجانب بوزارة العدل، قضايا الطلاق والخلع، النفقات، وحضانة الأطفال العابرة للحدود.',
    descEn: 'Expert family law attorney for foreigners and mixed marriages in Egypt: Ministry of Justice marriage documentation, expat divorce, child custody, and cross-border alimony.',
    h1Ar: 'قانون الأسرة والأحوال الشخصية والزواج المختلط للأجانب بمصر',
    h1En: 'Family Law & Expat Personal Status in Egypt'
  },
  {
    path: '/civil-law',
    titleAr: 'محامي قانون مدني وتعويضات وعقارات في مصر | كريم الديب',
    titleEn: 'Civil Law & Real Estate Litigation Lawyer in Egypt | Karim Eldib',
    descAr: 'ترافع في قضايا التعويضات المادية والمعنوية، المنازعات العقارية وصحة ونفاذ العقود، وقضايا الميراث والتركات والمسؤولية التقصيرية بمصر.',
    descEn: 'Civil litigation attorney in Egypt: material damages compensation, real estate title disputes, property validation, tort liability, and estate division.',
    h1Ar: 'القانون المدني والمنازعات العقارية والتعويضات في مصر',
    h1En: 'Civil Litigation & Real Estate Disputes in Egypt'
  },
  {
    path: '/criminal-law',
    titleAr: 'محامي دفاع جنائي وقضايا الأجانب في مصر | كريم الديب',
    titleEn: 'Criminal Defense Lawyer for Foreigners in Egypt | Urgent Legal Aid | Karim Eldib',
    descAr: 'تمثيل ودفاع جنائي قوي أمام النيابة العامة ومحاكم الجنايات والجنح والطعن بالنقض. تمثيل عاجل للأجانب والمصريين على مدار 24 ساعة.',
    descEn: 'Aggressive criminal defense for foreigners and expats in Egypt: representation before public prosecution, police stations, appeal courts, and cassation.',
    h1Ar: 'الدفاع الجنائي والتمثيل القضائي العاجل بمصر',
    h1En: 'Criminal Defense & Emergency Legal Representation in Egypt'
  },
  {
    path: '/egyptians-abroad',
    titleAr: 'محامي شؤون المصريين بالخارج وإدارة التركات والعقارات | كريم الديب',
    titleEn: 'Legal Services for Egyptian Expats Abroad | Asset & Inheritance Management | Karim Eldib',
    descAr: 'مكتب محاماة متخصص لخدمة المصريين المقيمين في الخارج: إدارة الممتلكات والتركات عن بُعد، إعلام الوراثة، توكيلات قنصلية، وإنهاء النزاعات القضائية داخل مصر دون عناء السفر.',
    descEn: 'Remote legal representation for Egyptian expats worldwide: inheritance division, property management, consular powers of attorney, and litigation in Egypt.',
    h1Ar: 'خدمات المصريين بالخارج وإدارة الممتلكات والتركات عن بُعد',
    h1En: 'Legal Services & Asset Management for Egyptian Expats Worldwide'
  },
  {
    path: '/services',
    titleAr: 'كافة الخدمات القانونية ومجالات التخصص | مؤسسة كريم الديب للمحاماة',
    titleEn: 'All Legal Services & Practice Areas in Egypt | Karim Eldib Law Firm',
    descAr: 'دليل الخدمات القانونية الشامل في مصر: تحكيم تجاري، خدمات أجانب، تأسيس شركات، قضايا مدنية، جنائية، وأحوال شخصية بـ 4 لغات معتمدة.',
    descEn: 'Comprehensive directory of legal practice areas in Egypt: commercial arbitration, foreign investor services, corporate registration, civil and criminal law.',
    h1Ar: 'منظومة الخدمات القانونية المتكاملة في مصر',
    h1En: 'Comprehensive Legal Services in Egypt'
  },
  {
    path: '/about-us',
    titleAr: 'من نحن | مؤسسة كريم الديب للمحاماة الدولية | خبرة 18 عاماً بمصر',
    titleEn: 'About Us | Karim Eldib International Law Firm | 18 Years Experience in Egypt',
    descAr: 'تعرف على مؤسسة المحامي كريم الديب للمحاماة الدولية. 18 عاماً من الخبرة في خدمة الأجانب والشركات والمستثمرين في الإسكندرية والقاهرة وشرم الشيخ.',
    descEn: 'Meet Karim Eldib International Law Firm. 18 years of specialized expertise serving foreign embassies, international investors, and expats across Egypt.',
    h1Ar: 'عن مؤسسة المحامي كريم الديب للمحاماة الدولية',
    h1En: 'About Karim Eldib International Law Firm'
  },
  {
    path: '/lawyer-profile',
    titleAr: 'المستشار كريم الديب | محامي بالنقض ومحكم تجاري دولي بمصر',
    titleEn: 'Attorney Karim Eldib | Cassation Lawyer & International Arbitrator in Egypt',
    descAr: 'السيرة المهنية للمستشار كريم الديب: محامي مقيد بالنقض والدستورية العليا، محكم تجاري دولي، وخبير قانوني معتمد لدى قنصليات أوروبية بمصر.',
    descEn: 'Professional biography of Attorney Karim Eldib: Supreme Cassation lawyer, international commercial arbitrator, and certified legal counsel for foreign consulates in Egypt.',
    h1Ar: 'المستشار القانوني كريم الديب - رئيس المؤسسة والمحكم الدولي',
    h1En: 'Attorney Karim Eldib - Firm Director & International Arbitrator'
  },
  {
    path: '/faq',
    titleAr: 'الأسئلة الشائعة حول القوانين والتحكيم وتأسيس الشركات بمصر | كريم الديب',
    titleEn: 'Frequently Asked Questions | Egyptian Law, Arbitration & Expat Services | Karim Eldib',
    descAr: 'إجابات شاملة على أكثر من 30 سؤالاً قانونياً شائعاً حول إقامات وتأشيرات الأجانب، تأسيس الشركات، التحكيم التجاري، وشراء العقارات في مصر.',
    descEn: 'Authoritative answers to frequent questions regarding residency visas, company formation, commercial arbitration, real estate ownership, and expat divorce in Egypt.',
    h1Ar: 'الأسئلة الشائعة والإجابات القانونية المعتمدة في مصر',
    h1En: 'Frequently Asked Questions & Expert Legal Guidance in Egypt'
  },
  {
    path: '/alexandria',
    titleAr: 'محامي تحكيم دولي وقضايا أجانب في الإسكندرية | المكتب الرئيسي | كريم الديب',
    titleEn: 'International Arbitration & Foreigners Lawyer in Alexandria | Main Office | Karim Eldib',
    descAr: 'المقر الرئيسي لمؤسسة كريم الديب في الإسكندرية: 14 شارع الشهداء (محطة الرمل) / شارع فؤاد. خدمات قانونية للأجانب والشركات ومنازعات الشحن والتحكيم البحري.',
    descEn: 'Alexandria Main Office — 14 El Shohada / Fouad St, Raml Station. Premier legal representation for foreign investors, maritime disputes, expat residency, and corporate law.',
    h1Ar: 'المكتب الرئيسي بالإسكندرية - مؤسسة كريم الديب للمحاماة والتحكيم',
    h1En: 'Alexandria Main Office - Karim Eldib Law Firm'
  },
  {
    path: '/sharm-el-sheikh',
    titleAr: 'محامي تحكيم دولي وقضايا أجانب في شرم الشيخ | فرع جنوب سيناء | كريم الديب',
    titleEn: 'International Arbitration & Foreigners Lawyer in Sharm El Sheikh | South Sinai Branch | Karim Eldib',
    descAr: 'فرع شرم الشيخ: خدمات قانونية مخصصة للأجانب والمستثمرين السياحيين. منازعات الفنادق والاستثمار، إقامات الأجانب، عقود تملك حق الانتفاع بسيناء.',
    descEn: 'Sharm El Sheikh Branch — Specialized legal defense for foreign tourists, hotel investors, expat residency permits, and property usufruct registration in Sinai.',
    h1Ar: 'فرع شرم الشيخ وجنوب سيناء - خدمات الأجانب والاستثمار السياحي',
    h1En: 'Sharm El Sheikh Branch - Foreigners & Tourism Investment Legal Services'
  },
  {
    path: '/cairo',
    titleAr: 'محامي تحكيم دولي وتأسيس شركات في القاهرة | مكتب التمثيل | كريم الديب',
    titleEn: 'International Arbitration & Corporate Lawyer in Cairo | Representation Office | Karim Eldib',
    descAr: 'مكتب التمثيل والمتابعة بالقاهرة: تمثيل أمام مركز القاهرة الإقليمي للتحكيم (CRCICA)، الهيئة العامة للاستثمار (GAFI)، ومحكمة استئناف القاهرة لتنفيذ الأحكام.',
    descEn: 'Cairo Representation Office — High-level legal defense before CRCICA, GAFI company registration, Court of Appeal arbitral award enforcement, and corporate litigation.',
    h1Ar: 'مكتب التمثيل والمتابعة بالقاهرة - مركز التحكيم وهيئة الاستثمار',
    h1En: 'Cairo Representation Office - Arbitration & Investment Follow-Up'
  },
  {
    path: '/blog',
    titleAr: 'المدونة القانونية ومقالات الاستثمار والتحكيم الدولي في مصر | كريم الديب',
    titleEn: 'Legal Blog, Investment Guides & Commercial Arbitration in Egypt | Karim Eldib',
    descAr: 'مقالات وأبحاث قانونية معتمدة لعام 2026 حول التحكيم التجاري الدولي، تأسيس الشركات، قوانين الإقامة والتملك للأجانب، وتنفيذ الأحكام الأجنبية بمصر.',
    descEn: 'In-depth 2026 legal articles, investment guides, and analysis on international commercial arbitration, GAFI company formation, expat residency, and arbitration awards in Egypt.',
    h1Ar: 'المدونة القانونية وأحدث أبحاث التحكيم والاستثمار بمصر 2026',
    h1En: 'Legal Blog & 2026 Research on Arbitration and Investment in Egypt'
  }
];

// Add Blog Articles into pages array
for (const slug of articleSlugs) {
  const meta = extractArticleMetadata(slug);
  if (meta) {
    pages.push({
      path: `/blog/${slug}`,
      titleAr: `${meta.titleAr} | المحامي كريم الديب`,
      titleEn: `${meta.titleEn} | Karim Eldib Law Firm`,
      descAr: meta.excerptAr,
      descEn: meta.excerptEn,
      h1Ar: meta.titleAr,
      h1En: meta.titleEn,
      isArticle: true
    });
  }
}

console.log(`Starting pre-render for ${pages.length * 2} bilingual pages...`);

function renderPage(page, lang) {
  const isEn = lang === 'en';
  const isAr = lang === 'ar';
  const isRtl = isAr;

  const title = isEn ? page.titleEn : page.titleAr;
  const description = isEn ? page.descEn : page.descAr;
  const h1 = isEn ? page.h1En : page.h1Ar;

  const cleanPath = page.path === '' ? '/' : page.path;
  const arCanonical = `${DOMAIN}${cleanPath}`;
  const enCanonical = `${DOMAIN}/en${cleanPath === '/' ? '' : cleanPath}`;
  const currentCanonical = isEn ? enCanonical : arCanonical;

  let html = templateHtml;

  // 1. Update <html lang="" dir="">
  html = html.replace(/<html[^>]*>/i, `<html lang="${lang}" dir="${isRtl ? 'rtl' : 'ltr'}">`);

  // 2. Update <title>
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);

  // 3. Update meta description
  html = html.replace(/<meta name="description"[\s\S]*?>/i, `<meta name="description" content="${description.replace(/"/g, '&quot;')}" />`);

  // 4. Update canonical tag
  html = html.replace(/<link rel="canonical"[\s\S]*?>/i, `<link rel="canonical" href="${currentCanonical}" />`);

  // 5. Update hreflang tags
  const hreflangsBlock = `  <link rel="alternate" hreflang="ar" href="${arCanonical}" />
  <link rel="alternate" hreflang="en" href="${enCanonical}" />
  <link rel="alternate" hreflang="x-default" href="${arCanonical}" />`;

  // Remove existing alternate links
  html = html.replace(/<link rel="alternate"[\s\S]*?>/gi, '');
  // Insert new hreflang block before </head>
  html = html.replace('</head>', `${hreflangsBlock}\n</head>`);

  // 6. Update Open Graph tags
  html = html.replace(/<meta property="og:title"[\s\S]*?>/i, `<meta property="og:title" content="${title.replace(/"/g, '&quot;')}" />`);
  html = html.replace(/<meta property="og:description"[\s\S]*?>/i, `<meta property="og:description" content="${description.replace(/"/g, '&quot;')}" />`);
  html = html.replace(/<meta property="og:url"[\s\S]*?>/i, `<meta property="og:url" content="${currentCanonical}" />`);
  html = html.replace(/<meta property="og:locale"[\s\S]*?>/i, `<meta property="og:locale" content="${isEn ? 'en_US' : 'ar_EG'}" />`);

  // 7. Update Twitter tags
  html = html.replace(/<meta property="twitter:title"[\s\S]*?>/i, `<meta property="twitter:title" content="${title.replace(/"/g, '&quot;')}" />`);
  html = html.replace(/<meta property="twitter:description"[\s\S]*?>/i, `<meta property="twitter:description" content="${description.replace(/"/g, '&quot;')}" />`);
  html = html.replace(/<meta property="twitter:url"[\s\S]*?>/i, `<meta property="twitter:url" content="${currentCanonical}" />`);

  // 8. Pre-rendered HTML inside <div id="root">
  const navHome = isEn ? 'Home' : 'الرئيسية';
  const navServices = isEn ? 'Services' : 'الخدمات القانونية';
  const navAbout = isEn ? 'About Us' : 'نبذة عنا';
  const navArbitration = isEn ? 'Arbitration' : 'التحكيم الدولي';
  const navContact = isEn ? 'Contact Us' : 'تواصل معنا';
  const navBlog = isEn ? 'Legal Blog' : 'المدونة القانونية';

  const homeHref = isEn ? '/en' : '/';
  const servicesHref = isEn ? '/en/services' : '/services';
  const aboutHref = isEn ? '/en/about-us' : '/about-us';
  const arbitrationHref = isEn ? '/en/arbitration-mediation' : '/arbitration-mediation';
  const blogHref = isEn ? '/en/blog' : '/blog';

  const preRenderedContent = `
    <header class="bg-[#0b1a33]/90 py-4 border-b border-white/10 text-white">
      <div class="container mx-auto px-6 max-w-7xl flex justify-between items-center">
        <a href="${homeHref}" class="flex items-center gap-3">
          <img src="https://i.postimg.cc/G3FMRMY4/3.png" alt="Karim Eldib Law Firm Logo" class="h-10 w-auto" />
          <span class="text-[#d4a15c] font-bold text-sm">Unlimited Lawyers & Foreign Services</span>
        </a>
        <nav class="hidden md:flex gap-6 text-sm font-medium">
          <a href="${homeHref}" class="hover:text-[#d4a15c]">${navHome}</a>
          <a href="${servicesHref}" class="hover:text-[#d4a15c]">${navServices}</a>
          <a href="${arbitrationHref}" class="hover:text-[#d4a15c]">${navArbitration}</a>
          <a href="${aboutHref}" class="hover:text-[#d4a15c]">${navAbout}</a>
          <a href="${blogHref}" class="hover:text-[#d4a15c]">${navBlog}</a>
        </nav>
      </div>
    </header>

    <main class="min-h-screen py-16 px-6 container mx-auto max-w-5xl text-gray-200">
      <nav aria-label="Breadcrumb" class="mb-6 text-xs text-gray-400">
        <a href="${homeHref}" class="hover:underline">${navHome}</a> &gt; 
        <span class="text-[#d4a15c]">${title}</span>
      </nav>

      <h1 class="text-3xl md:text-5xl font-extrabold text-[#d4a15c] mb-6 leading-tight">
        ${h1}
      </h1>

      <p class="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 font-medium">
        ${description}
      </p>

      <section class="bg-[#0e1f3b] p-8 rounded-xl border border-white/10 mb-10 shadow-lg">
        <h2 class="text-2xl font-bold text-white mb-4">
          ${isEn ? 'Key Legal Practice Areas & Consultation in Egypt' : 'مجالات التخصص والاستشارات القانونية المتكاملة في مصر'}
        </h2>
        <ul class="space-y-3 text-base text-gray-300">
          <li><strong>• ${isEn ? 'Commercial Arbitration:' : 'التحكيم التجاري الدولي:'}</strong> ${isEn ? 'Representation before CRCICA, ICC, and Cairo Courts for investor dispute resolution.' : 'تمثيل معتمد أمام مركز القاهرة الإقليمي (CRCICA) وتسوية منازعات المستثمرين وتنفيذ الأحكام الأجنبية.'}</li>
          <li><strong>• ${isEn ? 'Foreigners Legal Services:' : 'خدمات الأجانب والمستثمرين:'}</strong> ${isEn ? 'Investor residency, work permits, company formation (LLC & single-person), and real estate deeds.' : 'إقامات المستثمرين، تصاريح العمل، تأسيس الشركات لدى GAFI، وتوثيق عقود العقارات.'}</li>
          <li><strong>• ${isEn ? 'Family & Expat Law:' : 'قانون الأسرة والزواج المختلط:'}</strong> ${isEn ? 'Ministry of Justice marriage contracts, expat divorce, child custody, and alimony.' : 'توثيق زواج الأجانب، قضايا الطلاق، النفقة، وحضانة الأطفال العابرة للحدود.'}</li>
          <li><strong>• ${isEn ? 'Egyptian Expats Advisory:' : 'شؤون المصريين بالخارج:'}</strong> ${isEn ? 'Remote estate distribution, property management, and consular powers of attorney.' : 'حصر التركات، قسمة الميراث، وإدارة وتسييل العقارات والاستثمارات داخل مصر عن بُعد.'}</li>
        </ul>
      </section>

      <section class="bg-gradient-to-r from-[#d4a15c]/10 to-transparent p-6 rounded-lg border-l-4 border-[#d4a15c] mb-12">
        <h3 class="text-xl font-bold text-white mb-2">
          ${isEn ? 'Direct Legal Consultation & Emergency Support' : 'طلب استشارة قانونية فورية وتواصل مباشر'}
        </h3>
        <p class="text-sm text-gray-300 mb-4">
          ${isEn ? 'Consult with certified international arbitration counsel in Cairo, Alexandria, and Sharm El Sheikh.' : 'تواصل مباشرة مع المستشار كريم الديب وفريق المحامين المعتمدين في الإسكندرية والقاهرة وشرم الشيخ.'}
        </p>
        <div class="flex flex-wrap gap-4 text-sm font-semibold">
          <a href="https://wa.me/201223767592" class="bg-[#d4a15c] text-[#0b1a33] px-6 py-2.5 rounded hover:bg-opacity-90">
            ${isEn ? 'WhatsApp Consultation (+20 122 376 7592)' : 'واتساب مباشر (+20 122 376 7592)'}
          </a>
          <a href="tel:+201223767592" class="bg-white/10 text-white px-6 py-2.5 rounded hover:bg-white/20 border border-white/20">
            ${isEn ? 'Direct Call' : 'اتصال هاتفي مباشر'}
          </a>
        </div>
      </section>
    </main>
  `;

  // Replace <div id="root"></div> with preRenderedContent inside
  html = html.replace('<div id="root"></div>', `<div id="root">${preRenderedContent}</div>`);

  return html;
}

// Write out all pages
let count = 0;
for (const p of pages) {
  // 1. Arabic Version
  const arHtml = renderPage(p, 'ar');
  const arTargetDir = p.path === '' ? distDir : path.join(distDir, p.path);
  if (!fs.existsSync(arTargetDir)) {
    fs.mkdirSync(arTargetDir, { recursive: true });
  }
  fs.writeFileSync(path.join(arTargetDir, 'index.html'), arHtml, 'utf8');
  count++;

  // 2. English Version
  const enHtml = renderPage(p, 'en');
  const enTargetDir = p.path === '' ? path.join(distDir, 'en') : path.join(distDir, 'en', p.path);
  if (!fs.existsSync(enTargetDir)) {
    fs.mkdirSync(enTargetDir, { recursive: true });
  }
  fs.writeFileSync(path.join(enTargetDir, 'index.html'), enHtml, 'utf8');
  count++;
}

console.log(`Pre-rendering completed! Successfully wrote ${count} static HTML files to dist/`);

