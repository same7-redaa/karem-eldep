// Single source of truth for business NAP (Name / Address / Phone), hours and
// structured data. Every page, schema block and footer must read from here so
// Google sees identical details everywhere (critical for local ranking).
// Keep these values identical to the Google Business Profile listings.

export const DOMAIN = 'https://www.ke-lawyer.com';

export const BUSINESS = {
  nameAr: 'مكتب المحامي كريم الديب للمحاماة',
  nameEn: 'Karim Eldib Law Firm',
  alternateNames: [
    'كريم الديب محامي',
    'المحامي كريم الديب',
    'Karim El Deeb Lawyer',
    'Karim El Deeb Law firm',
    'Karim Eldib Lawyer',
    'Unlimited Lawyers & Foreign Services',
  ],
  phone: '+201223767592',
  phoneDisplay: '+20 122 376 7592',
  whatsapp: 'https://wa.me/201223767592',
  email: 'kingarim2411@gmail.com',
  logo: `${DOMAIN}/images/lawyer-7.jpg`,
  image: `${DOMAIN}/images/lawyer-7.jpg`,
  foundingYear: '2006',
  languages: ['Arabic', 'English', 'French', 'Italian'],
  sameAs: [
    'https://www.facebook.com/Unlimitedsharm',
    'https://www.instagram.com/karimeldeeb_lawyer/',
    'https://www.tiktok.com/@lawyer.karim.eldee',
  ],
  // Open 24 hours, 7 days (matches both Google Business Profiles)
  hours: {
    days: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '00:00',
    closes: '23:59',
    labelAr: 'مفتوح 24 ساعة طوال أيام الأسبوع',
    labelEn: 'Open 24 hours, 7 days a week',
  },
};

export type BranchId = 'alexandria' | 'sharm';

export const BRANCHES: Record<BranchId, {
  id: BranchId;
  path: string;
  nameAr: string;
  nameEn: string;
  streetAr: string;
  streetEn: string;
  cityAr: string;
  cityEn: string;
  regionAr: string;
  regionEn: string;
  postalCode?: string;
  lat: number;
  lng: number;
  mapUrl: string;
  /** Stable Google Maps CID URL – used as schema hasMap */
  cidUrl: string;
  mapEmbed: string;
}> = {
  alexandria: {
    id: 'alexandria',
    path: '/alexandria',
    nameAr: 'مكتب المحامي كريم الديب – الإسكندرية (المكتب الرئيسي)',
    nameEn: 'Karim Eldib Law Firm – Alexandria (Main Office)',
    streetAr: '29 المسلة غرب وشريف باشا، العطارين',
    streetEn: '29 El Masalla Gharb & Sherif Pasha St., El Attarin',
    cityAr: 'الإسكندرية',
    cityEn: 'Alexandria',
    regionAr: 'الإسكندرية',
    regionEn: 'Alexandria Governorate',
    lat: 31.1997224,
    lng: 29.8969014,
    mapUrl: 'https://maps.app.goo.gl/ZbXQ8WdAtYyER15E6',
    cidUrl: 'https://maps.google.com/?cid=11140661931420793809',
    mapEmbed: 'https://maps.google.com/maps?q=Karim+El+Deeb+Lawyer@31.1997224,29.8969014&z=16&output=embed',
  },
  sharm: {
    id: 'sharm',
    path: '/sharm-el-sheikh',
    nameAr: 'مكتب المحامي كريم الديب – شرم الشيخ',
    nameEn: 'Karim Eldib Law Firm – Sharm El Sheikh',
    streetAr: '123 شارع البحر',
    streetEn: '123 El Bahr St.',
    postalCode: '46619',
    cityAr: 'شرم الشيخ',
    cityEn: 'Sharm El Sheikh',
    regionAr: 'جنوب سيناء',
    regionEn: 'South Sinai Governorate',
    lat: 27.8524719,
    lng: 34.3006913,
    mapUrl: 'https://maps.app.goo.gl/vUJRRpyVskkFGsFt9',
    cidUrl: 'https://maps.google.com/?cid=16259810409059525405',
    mapEmbed: 'https://maps.google.com/maps?q=Karim+El+Deeb+Law+firm@27.8524719,34.3006913&z=16&output=embed',
  },
};

const ORG_ID = `${DOMAIN}/#organization`;
const ATTORNEY_ID = `${DOMAIN}/#attorney`;
const WEBSITE_ID = `${DOMAIN}/#website`;
export const branchId = (b: BranchId) => `${DOMAIN}${BRANCHES[b].path}#legalservice`;

const hoursSpec = () => ({
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: BUSINESS.hours.days,
  opens: BUSINESS.hours.opens,
  closes: BUSINESS.hours.closes,
});

const branchNode = (b: BranchId, isAr: boolean) => {
  const br = BRANCHES[b];
  return {
    '@type': ['LegalService', 'LocalBusiness'],
    '@id': branchId(b),
    name: isAr ? br.nameAr : br.nameEn,
    url: `${DOMAIN}${isAr ? '' : '/en'}${br.path}`,
    parentOrganization: { '@id': ORG_ID },
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    image: BUSINESS.image,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: isAr ? br.streetAr : br.streetEn,
      addressLocality: isAr ? br.cityAr : br.cityEn,
      addressRegion: isAr ? br.regionAr : br.regionEn,
      ...(br.postalCode ? { postalCode: br.postalCode } : {}),
      addressCountry: 'EG',
    },
    geo: { '@type': 'GeoCoordinates', latitude: br.lat, longitude: br.lng },
    hasMap: br.cidUrl,
    sameAs: [br.cidUrl],
    openingHoursSpecification: [hoursSpec()],
    areaServed: { '@type': 'City', name: br.cityEn },
    knowsLanguage: BUSINESS.languages,
  };
};

/**
 * Site-wide knowledge graph: organization, both branches, attorney and website.
 * NOTE: never add aggregateRating / review here — self-serving review markup
 * violates Google's guidelines. Real reviews belong on Google Business Profile.
 */
export const buildBusinessGraph = (isAr: boolean) => [
  {
    '@type': ['LegalService', 'Organization'],
    '@id': ORG_ID,
    name: isAr ? BUSINESS.nameAr : BUSINESS.nameEn,
    alternateName: BUSINESS.alternateNames,
    url: DOMAIN,
    logo: BUSINESS.logo,
    image: BUSINESS.image,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    foundingDate: BUSINESS.foundingYear,
    priceRange: '$$',
    founder: { '@id': ATTORNEY_ID },
    knowsLanguage: BUSINESS.languages,
    sameAs: BUSINESS.sameAs,
    address: branchNode('alexandria', isAr).address,
    subOrganization: [{ '@id': branchId('alexandria') }, { '@id': branchId('sharm') }],
    areaServed: [
      { '@type': 'City', name: 'Alexandria' },
      { '@type': 'City', name: 'Sharm El Sheikh' },
      { '@type': 'City', name: 'Cairo' },
      { '@type': 'Country', name: 'Egypt' },
    ],
  },
  branchNode('alexandria', isAr),
  branchNode('sharm', isAr),
  {
    '@type': 'Person',
    '@id': ATTORNEY_ID,
    name: isAr ? 'كريم الديب' : 'Karim Eldib',
    alternateName: ['Karim El Deeb', 'Karim El-Dib', 'كريم الديب'],
    jobTitle: isAr ? 'محامٍ بالنقض ومحكّم دولي' : 'Attorney at the Court of Cassation & International Arbitrator',
    worksFor: { '@id': ORG_ID },
    url: `${DOMAIN}${isAr ? '' : '/en'}/lawyer-profile`,
    image: BUSINESS.image,
    telephone: BUSINESS.phone,
    knowsLanguage: BUSINESS.languages,
    sameAs: BUSINESS.sameAs,
  },
  {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: DOMAIN,
    name: isAr ? BUSINESS.nameAr : BUSINESS.nameEn,
    inLanguage: ['ar', 'en'],
    publisher: { '@id': ORG_ID },
  },
];

export { ORG_ID, WEBSITE_ID, ATTORNEY_ID };
