// Slugs of the Sharm El Sheikh practice-area pages. Kept separate from sharmServices.ts
// so the router can list the routes without pulling all page content into the main bundle.
// Must match the  fields in sharmServices.ts (checked at build by scripts/prerender.mjs).
export const sharmServiceSlugs = [
  'lawyer-for-foreigners',
  'real-estate-lawyer',
  'criminal-lawyer',
  'family-lawyer',
  'immigration-lawyer',
  'corporate-lawyer',
] as const;
