const fs = require('fs');

const DOMAIN = 'https://www.ke-lawyer.com';
const TODAY = new Date().toISOString().slice(0, 10);

const mainPages = [
  { path: '', priority: '1.0', changefreq: 'daily' },
  { path: '/arbitration-mediation', priority: '1.0', changefreq: 'weekly' },
  { path: '/foreigners-in-egypt', priority: '0.9', changefreq: 'weekly' },
  { path: '/company-law', priority: '0.9', changefreq: 'weekly' },
  { path: '/services', priority: '0.9', changefreq: 'weekly' },
  { path: '/about-us', priority: '0.9', changefreq: 'monthly' },
  { path: '/lawyer-profile', priority: '0.9', changefreq: 'monthly' },
  { path: '/commercial-law', priority: '0.8', changefreq: 'weekly' },
  { path: '/family-law', priority: '0.8', changefreq: 'weekly' },
  { path: '/civil-law', priority: '0.8', changefreq: 'weekly' },
  { path: '/criminal-law', priority: '0.8', changefreq: 'weekly' },
  { path: '/egyptians-abroad', priority: '0.8', changefreq: 'weekly' },
  { path: '/cairo', priority: '0.8', changefreq: 'monthly' },
  { path: '/alexandria', priority: '0.8', changefreq: 'monthly' },
  { path: '/sharm-el-sheikh', priority: '0.8', changefreq: 'monthly' },
  { path: '/faq', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog', priority: '0.9', changefreq: 'daily' }
];

// Alexandria practice-area pages (slugs read from the data file so the sitemap never drifts)
const alexSrc = fs.readFileSync('src/data/alexandriaServices.ts', 'utf8');
for (const m of alexSrc.matchAll(/^\s{4}slug:\s*'([a-z0-9-]+)'/gm)) {
  mainPages.push({ path: `/alexandria/${m[1]}`, priority: '0.8', changefreq: 'monthly' });
}

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

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

// Helper to format url block
function makeUrlEntry(loc, arHref, enHref, xDefault, priority, changefreq, lastmod) {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="ar" href="${arHref}" />
    <xhtml:link rel="alternate" hreflang="en" href="${enHref}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${xDefault}" />
  </url>
`;
}

// 1. Main Pages (Arabic & English)
for (const p of mainPages) {
  const arLoc = p.path === '' ? `${DOMAIN}/` : `${DOMAIN}${p.path}`;
  const enLoc = p.path === '' ? `${DOMAIN}/en` : `${DOMAIN}/en${p.path}`;
  const xDef = arLoc;

  // Add Arabic version
  xml += makeUrlEntry(arLoc, arLoc, enLoc, xDef, p.priority, p.changefreq, TODAY);
  // Add English version
  xml += makeUrlEntry(enLoc, arLoc, enLoc, xDef, (parseFloat(p.priority) * 0.95).toFixed(1), p.changefreq, TODAY);
}

// 2. Blog Articles (Arabic & English)
for (const slug of articleSlugs) {
  const arLoc = `${DOMAIN}/blog/${slug}`;
  const enLoc = `${DOMAIN}/en/blog/${slug}`;
  const xDef = arLoc;

  // Add Arabic version
  xml += makeUrlEntry(arLoc, arLoc, enLoc, xDef, '0.8', 'monthly', TODAY);
  // Add English version
  xml += makeUrlEntry(enLoc, arLoc, enLoc, xDef, '0.8', 'monthly', TODAY);
}

xml += `</urlset>\n`;

fs.writeFileSync('public/sitemap.xml', xml, 'utf8');
console.log(`Generated public/sitemap.xml with ${mainPages.length * 2 + articleSlugs.length * 2} bilingual URLs!`);

