const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Replace html tag
html = html.replace('<html lang="en" dir="ltr">', '<html lang="ar" dir="rtl">');

// Preload webp instead of png
html = html.replace('/france.png', '/france.webp');

fs.writeFileSync('index.html', html, 'utf8');
console.log('index.html updated successfully!');
