const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '../dist');
const sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');
const locMatches = sitemap.match(/<loc>(.*?)<\/loc>/g) || [];
const urls = locMatches.map(m => m.replace(/<\/?loc>/g, '').trim());

console.log(`\n======================================================`);
console.log(`Starting Local Pre-Rendered SEO Audit on ${urls.length} URLs`);
console.log(`======================================================\n`);

let passed = 0;
let failed = 0;
const results = [];

for (const url of urls) {
  const urlObj = new URL(url);
  let relPath = urlObj.pathname;
  if (relPath.endsWith('/')) relPath = relPath.slice(0, -1);

  // File path in dist
  const filePath = relPath === '' 
    ? path.join(distDir, 'index.html') 
    : path.join(distDir, relPath, 'index.html');

  if (!fs.existsSync(filePath)) {
    console.error(`❌ MISSING FILE: ${url} -> ${filePath}`);
    failed++;
    results.push({ url, status: 'MISSING', error: 'File not generated' });
    continue;
  }

  const html = fs.readFileSync(filePath, 'utf8');

  // Check title
  const titleMatch = html.match(/<title>(.*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : '';

  // Check description
  const descMatch = html.match(/<meta name="description" content="(.*?)"/i);
  const desc = descMatch ? descMatch[1].trim() : '';

  // Check canonical
  const canonicalMatch = html.match(/<link rel="canonical" href="(.*?)"/i);
  const canonical = canonicalMatch ? canonicalMatch[1].trim() : '';

  // Check hreflang ar & en
  const arHreflangMatch = html.match(/<link rel="alternate" hreflang="ar" href="(.*?)"/i);
  const enHreflangMatch = html.match(/<link rel="alternate" hreflang="en" href="(.*?)"/i);
  const arHreflang = arHreflangMatch ? arHreflangMatch[1].trim() : '';
  const enHreflang = enHreflangMatch ? enHreflangMatch[1].trim() : '';

  // Check root content length
  const rootMatch = html.match(/<div id="root">([\s\S]*?)<\/div>/i);
  const rootContent = rootMatch ? rootMatch[1].trim() : '';

  // Verifications
  const issues = [];
  if (!title) issues.push('Missing Title');
  if (!desc) issues.push('Missing Description');
  if (!canonical) issues.push('Missing Canonical');
  
  // Critical check: canonical must NOT be homepage if it is an internal page
  const isHomepage = url === 'https://www.ke-lawyer.com/' || url === 'https://www.ke-lawyer.com/en';
  if (!isHomepage && (canonical === 'https://www.ke-lawyer.com/' || canonical === 'https://www.ke-lawyer.com')) {
    issues.push('FATAL: Internal page points to homepage as canonical!');
  }

  // Canonical must match the URL
  if (canonical !== url) {
    issues.push(`Canonical mismatch: expected ${url}, got ${canonical}`);
  }

  // Check hreflangs
  if (!arHreflang) issues.push('Missing ar hreflang');
  if (!enHreflang) issues.push('Missing en hreflang');

  // Check content
  if (rootContent.length < 200) {
    issues.push(`Empty or thin body content in HTML (length: ${rootContent.length})`);
  }

  if (issues.length === 0) {
    passed++;
    console.log(`✅ [200 OK] ${url}`);
    console.log(`   Title: ${title.slice(0, 60)}...`);
    console.log(`   Canonical: ${canonical}`);
    console.log(`   Hreflang: [ar: ${arHreflang}] | [en: ${enHreflang}]`);
    console.log(`   HTML Length: ${html.length} bytes | Pre-rendered Body: ${rootContent.length} bytes\n`);
  } else {
    failed++;
    console.error(`❌ [FAIL] ${url}`);
    console.error(`   Issues: ${issues.join(', ')}\n`);
  }

  results.push({
    url,
    status: issues.length === 0 ? 'PASSED' : 'FAILED',
    title,
    canonical,
    arHreflang,
    enHreflang,
    htmlLength: html.length,
    rootContentLength: rootContent.length,
    issues
  });
}

console.log(`\n======================================================`);
console.log(`Audit Summary: ${passed} PASSED | ${failed} FAILED out of ${urls.length} URLs`);
console.log(`======================================================\n`);

fs.writeFileSync('scripts/audit_verified_results.json', JSON.stringify(results, null, 2), 'utf8');

if (failed > 0) {
  process.exit(1);
}

