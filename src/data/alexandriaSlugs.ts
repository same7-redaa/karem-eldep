// Slugs of the Alexandria practice-area pages. Kept separate from alexandriaServices.ts
// so the router can list the routes without pulling all page content into the main bundle.
// Must match the `slug` fields in alexandriaServices.ts (checked at build by scripts/prerender.mjs).
export const alexandriaServiceSlugs = [
  'family-lawyer',
  'real-estate-lawyer',
  'immigration-lawyer',
  'civil-lawyer',
  'commercial-lawyer',
  'corporate-lawyer',
  'lawyer-for-foreigners',
  'international-lawyer',
  'international-arbitration-lawyer',
  'maritime-arbitration-lawyer',
  'mediation-lawyer',
] as const;
