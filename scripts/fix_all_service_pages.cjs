const fs = require('fs');

// 1. Fix Cairo.tsx
let cairo = fs.readFileSync('src/pages/cities/Cairo.tsx', 'utf8');
if (!cairo.includes('canonicalUrl=')) {
  cairo = cairo.replace(
    /city="Cairo"/,
    'canonicalUrl="https://www.ke-lawyer.com/cairo"\n        city="Cairo"'
  );
  fs.writeFileSync('src/pages/cities/Cairo.tsx', cairo, 'utf8');
  console.log('Fixed Cairo.tsx');
}

// 2. Fix ForeignersInEgypt.tsx
let foreigners = fs.readFileSync('src/pages/services/ForeignersInEgypt.tsx', 'utf8');
if (!foreigners.includes('canonicalUrl=')) {
  foreigners = foreigners.replace(
    /<AdvancedSEO\s*\n\s*title=\{seoTitle\}\s*\n\s*description=\{seoDescription\}\s*\n\s*keywords=\{seoKeywords\}\s*\n\s*\/>/,
    `<AdvancedSEO 
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        canonicalUrl="https://www.ke-lawyer.com/foreigners-in-egypt"
      />`
  );
  // fallback if formatting differed
  if (!foreigners.includes('canonicalUrl=')) {
    foreigners = foreigners.replace(
      /keywords=\{seoKeywords\}/,
      'keywords={seoKeywords}\n        canonicalUrl="https://www.ke-lawyer.com/foreigners-in-egypt"'
    );
  }
  fs.writeFileSync('src/pages/services/ForeignersInEgypt.tsx', foreigners, 'utf8');
  console.log('Fixed ForeignersInEgypt.tsx');
}

// 3. Fix CivilLaw.tsx
let civil = fs.readFileSync('src/pages/services/CivilLaw.tsx', 'utf8');
// Check if AdvancedSEO is imported
if (!civil.includes("import AdvancedSEO")) {
  civil = civil.replace(
    "import React, { useEffect } from 'react';",
    "import React from 'react';\nimport AdvancedSEO from '../../components/AdvancedSEO';"
  );
}
// Remove the giant useEffect (from useEffect(() => { down to const services = [)
const civilStart = civil.indexOf("useEffect(() => {");
const civilEnd = civil.indexOf("  const services = [");
if (civilStart !== -1 && civilEnd !== -1) {
  const replacement = `const seoTitle = isRTL 
    ? 'محامي قانون مدني في مصر | تعويضات وعقود وعقارات | المحامي كريم الديب'
    : 'Civil Law Lawyer in Egypt | Contracts, Real Estate & Compensation | Karim El-Dib';

  const seoDescription = isRTL
    ? 'محامي قانون مدني في مصر — المحامي كريم الديب. متخصص في قضايا التعويضات، صياغة ومراجعة العقود المدنية، النزاعات العقارية، وتقسيم التركات. خبرة 18 عاماً.'
    : 'Civil Law Lawyer in Egypt — Karim El-Dib. Expert representation in civil contracts, tort compensation, property disputes, and inheritance cases in Cairo, Alexandria & Sharm El Sheikh.';

  const seoKeywords = isRTL
    ? 'محامي قانون مدني, محامي مدني في مصر, محامي تعويضات مصر, محامي عقود مدنية, محامي نزاعات عقارية, محامي قضايا إرث, كريم الديب محامي مدني'
    : 'Civil law lawyer Egypt, civil litigation attorney Cairo, contract dispute lawyer Egypt, compensation attorney Alexandria';

`;
  civil = civil.slice(0, civilStart) + replacement + civil.slice(civilEnd);
}

// Ensure AdvancedSEO is rendered in CivilLaw JSX
if (!civil.includes('<AdvancedSEO')) {
  civil = civil.replace(
    '<div className="min-h-screen bg-[#0b1a33] text-gray-200" dir={isRTL ? \'rtl\' : \'ltr\'>',
    `<div className="min-h-screen bg-[#0b1a33] text-gray-200" dir={isRTL ? 'rtl' : 'ltr'}>
      <AdvancedSEO
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        canonicalUrl="https://www.ke-lawyer.com/civil-law"
      />`
  );
}
fs.writeFileSync('src/pages/services/CivilLaw.tsx', civil, 'utf8');
console.log('Fixed CivilLaw.tsx');

// 4. Fix FamilyLaw.tsx (remove conflicting useEffect)
let family = fs.readFileSync('src/pages/services/FamilyLaw.tsx', 'utf8');
const famStart = family.indexOf("useEffect(() => {");
const famEnd = family.indexOf("  return (");
if (famStart !== -1 && famEnd !== -1) {
  family = family.slice(0, famStart) + family.slice(famEnd);
  family = family.replace("import React, { useEffect } from 'react';", "import React from 'react';");
  fs.writeFileSync('src/pages/services/FamilyLaw.tsx', family, 'utf8');
  console.log('Fixed FamilyLaw.tsx');
}

// 5. Fix CommercialLaw.tsx (remove conflicting useEffect)
let comm = fs.readFileSync('src/pages/services/CommercialLaw.tsx', 'utf8');
const commStart = comm.indexOf("useEffect(() => {");
const commEnd = comm.indexOf("  const services = [");
if (commStart !== -1 && commEnd !== -1) {
  comm = comm.slice(0, commStart) + comm.slice(commEnd);
  comm = comm.replace("import React, { useEffect } from 'react';", "import React from 'react';");
  fs.writeFileSync('src/pages/services/CommercialLaw.tsx', comm, 'utf8');
  console.log('Fixed CommercialLaw.tsx');
}

// 6. Fix CompanyLaw.tsx (remove conflicting useEffect)
let comp = fs.readFileSync('src/pages/services/CompanyLaw.tsx', 'utf8');
const compStart = comp.indexOf("useEffect(() => {");
const compEnd = comp.indexOf("  return (");
if (compStart !== -1 && compEnd !== -1) {
  comp = comp.slice(0, compStart) + comp.slice(compEnd);
  comp = comp.replace("import React, { useEffect } from 'react';", "import React from 'react';");
  fs.writeFileSync('src/pages/services/CompanyLaw.tsx', comp, 'utf8');
  console.log('Fixed CompanyLaw.tsx');
}

// 7. Fix CriminalLaw.tsx (remove conflicting useEffect)
let crim = fs.readFileSync('src/pages/services/CriminalLaw.tsx', 'utf8');
const crimStart = crim.indexOf("useEffect(() => {");
const crimEnd = crim.indexOf("  return (");
if (crimStart !== -1 && crimEnd !== -1) {
  crim = crim.slice(0, crimStart) + crim.slice(crimEnd);
  crim = crim.replace("import React, { useEffect } from 'react';", "import React from 'react';");
  fs.writeFileSync('src/pages/services/CriminalLaw.tsx', crim, 'utf8');
  console.log('Fixed CriminalLaw.tsx');
}

// 8. Fix LawyerProfile.tsx (clean up conflicting useEffect)
let lawyer = fs.readFileSync('src/pages/LawyerProfile.tsx', 'utf8');
const lawStart = lawyer.indexOf("useEffect(() => {");
const lawEnd = lawyer.indexOf("  return (");
if (lawStart !== -1 && lawEnd !== -1) {
  lawyer = lawyer.slice(0, lawStart) + lawyer.slice(lawEnd);
  lawyer = lawyer.replace("import React, { useEffect } from 'react';", "import React from 'react';");
  fs.writeFileSync('src/pages/LawyerProfile.tsx', lawyer, 'utf8');
  console.log('Fixed LawyerProfile.tsx');
}

console.log('All service pages cleaned up and harmonized!');
