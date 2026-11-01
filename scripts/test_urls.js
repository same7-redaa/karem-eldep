const fs = require('fs');
const https = require('https');

const sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');
const locMatches = sitemap.match(/<loc>(.*?)<\/loc>/g) || [];
const urls = locMatches.map(m => m.replace(/<\/?loc>/g, '').trim());

console.log(`Starting audit for ${urls.length} URLs...\n`);

function checkUrl(url) {
  return new Promise((resolve) => {
    const start = Date.now();
    const req = https.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)' },
      timeout: 15000
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        const duration = Date.now() - start;
        const titleMatch = body.match(/<title>(.*?)<\/title>/i);
        const title = titleMatch ? titleMatch[1].trim() : 'N/A';
        resolve({
          url,
          status: res.statusCode,
          duration: `${duration}ms`,
          title,
          contentLength: body.length
        });
      });
    });
    
    req.on('error', (err) => {
      resolve({
        url,
        status: `ERR: ${err.message}`,
        duration: '0ms',
        title: 'N/A',
        contentLength: 0
      });
    });

    req.on('timeout', () => {
      req.destroy();
      resolve({
        url,
        status: 'TIMEOUT',
        duration: '15000ms',
        title: 'N/A',
        contentLength: 0
      });
    });
  });
}

(async () => {
  const results = [];
  for (let i = 0; i < urls.length; i++) {
    const r = await checkUrl(urls[i]);
    results.push(r);
    console.log(`[${i + 1}/${urls.length}] ${r.status} (${r.duration}) - ${r.url}`);
  }
  
  fs.writeFileSync('scripts/audit_results.json', JSON.stringify(results, null, 2));
  console.log('\nAudit complete. Results saved to scripts/audit_results.json');
})();
