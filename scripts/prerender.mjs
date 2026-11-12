// Build-time static prerender (SSG).
// Renders every public route with React (dist-ssr/entry-server.js) and writes
// dist/<path>/index.html containing the real page markup, per-page <title>,
// meta description, canonical, hreflang, Open Graph and JSON-LD.
// Head data comes from <AdvancedSEO> on each page, so there is ONE source of truth.
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const serverEntry = path.join(rootDir, 'dist-ssr', 'entry-server.js');

if (!fs.existsSync(path.join(distDir, 'index.html')) || !fs.existsSync(serverEntry)) {
  console.error('Missing dist/index.html or dist-ssr/entry-server.js – run both vite builds first.');
  process.exit(1);
}

const { render } = await import(pathToFileURL(serverEntry).href);
const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');

const staticPaths = [
  '', '/alexandria', '/sharm-el-sheikh', '/cairo',
  '/arbitration-mediation', '/foreigners-in-egypt', '/company-law', '/commercial-law',
  '/family-law', '/civil-law', '/criminal-law', '/egyptians-abroad',
  '/services', '/about-us', '/lawyer-profile', '/faq', '/blog',
];

// Blog slugs are read from staticArticles.ts (top-level keys of the staticArticles object)
const articlesSrc = fs.readFileSync(path.join(rootDir, 'src/data/staticArticles.ts'), 'utf8');
const blogSlugs = [...articlesSrc.matchAll(/^\s{2}['"]([a-z0-9-]+)['"]\s*:\s*\{/gm)].map(m => m[1]);

// Alexandria practice-area pages (slugs read from src/data/alexandriaServices.ts)
const alexSrc = fs.readFileSync(path.join(rootDir, 'src/data/alexandriaServices.ts'), 'utf8');
const alexSlugs = [...alexSrc.matchAll(/^\s{4}slug:\s*'([a-z0-9-]+)'/gm)].map(m => m[1]);
if (!alexSlugs.length) { console.error('No Alexandria service slugs found'); process.exit(1); }
// The router uses the short list in alexandriaSlugs.ts; it must match the content file.
const routerSlugs = [...fs.readFileSync(path.join(rootDir, 'src/data/alexandriaSlugs.ts'), 'utf8').matchAll(/^\s{2}'([a-z0-9-]+)',/gm)].map(m => m[1]);
if (routerSlugs.join() !== alexSlugs.join()) {
  console.error('alexandriaSlugs.ts does not match the slugs in alexandriaServices.ts');
  process.exit(1);
}

const allPaths = [...staticPaths, ...alexSlugs.map(s => `/alexandria/${s}`), ...blogSlugs.map(s => `/blog/${s}`)];

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function buildHtml({ html, head, lang }) {
  const isAr = lang === 'ar';
  let out = template;
  const t = esc(head.title);
  const d = esc(head.description);

  out = out.replace(/<html[^>]*>/i, `<html lang="${lang}" dir="${isAr ? 'rtl' : 'ltr'}">`);
  out = out.replace(/<title>[\s\S]*?<\/title>/i, `<title>${t}</title>`);
  out = out.replace(/<meta name="description"[^>]*>/i, `<meta name="description" content="${d}" />`);
  out = out.replace(/<link rel="canonical"[^>]*>/i, `<link rel="canonical" href="${head.canonical}" />`);
  out = out.replace(/\s*<link rel="alternate" hreflang[^>]*>/gi, '');
  out = out.replace(
    /(<link rel="canonical"[^>]*>)/i,
    `$1\n  <link rel="alternate" hreflang="ar" href="${head.arHref}" />\n  <link rel="alternate" hreflang="en" href="${head.enHref}" />\n  <link rel="alternate" hreflang="x-default" href="${head.arHref}" />`
  );
  out = out.replace(/<meta property="og:url"[^>]*>/i, `<meta property="og:url" content="${head.canonical}" />`);
  out = out.replace(/<meta property="og:title"[^>]*>/i, `<meta property="og:title" content="${t}" />`);
  out = out.replace(/<meta property="og:description"[^>]*>/i, `<meta property="og:description" content="${d}" />`);
  out = out.replace(/<meta property="og:locale"[^>]*>/i, `<meta property="og:locale" content="${isAr ? 'ar_EG' : 'en_US'}" />`);
  out = out.replace(/<meta property="og:site_name"[^>]*>/i, `<meta property="og:site_name" content="${isAr ? 'مكتب المحامي كريم الديب للمحاماة' : 'Karim Eldib Law Firm'}" />`);
  out = out.replace(/<meta name="twitter:title"[^>]*>/i, `<meta name="twitter:title" content="${t}" />`);
  out = out.replace(/<meta name="twitter:description"[^>]*>/i, `<meta name="twitter:description" content="${d}" />`);
  out = out.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  return out;
}

let count = 0;
const failures = [];
for (const p of allPaths) {
  for (const lang of ['ar', 'en']) {
    const urlPath = lang === 'ar' ? (p || '/') : `/en${p}`;
    try {
      const result = await render(urlPath);
      if (!result.head) throw new Error('page did not render <AdvancedSEO> (no head data)');
      if (!result.html.includes('<h1')) throw new Error('rendered page has no <h1>');
      const outDir = path.join(distDir, urlPath === '/' ? '' : urlPath);
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, 'index.html'), buildHtml(result), 'utf8');
      count++;
    } catch (err) {
      failures.push(`${urlPath}: ${err.message}`);
    }
  }
}

console.log(`Prerendered ${count} pages.`);
if (failures.length) {
  console.error(`Prerender failed for ${failures.length} page(s):\n  ${failures.join('\n  ')}`);
  process.exit(1);
}
process.exit(0);
