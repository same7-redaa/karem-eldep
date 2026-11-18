# Google Maps + Website Local Plan (Alexandria & Sharm)

Goal: top 3 in the Maps local pack and top 10 organic for **"محامي في الإسكندرية"**, plus
"lawyer in Alexandria", "محامي في شرم الشيخ" and "lawyer in Sharm El Sheikh".

Audit date: 2026-11-18. State: English pack already #2 Alexandria / #1 Sharm.
Arabic "محامي في الاسكندرية" in Maps: **not in the top 10**. Leaders: 337, 273, 225, 147 and 118 reviews.
We have 106 (Alexandria) and 102 (Sharm).

## 1. Profile audit (2026-11-18)

| Field | Alexandria (CID 11140661931420793809) | Sharm (CID 16259810409059525405) |
|---|---|---|
| Name | Karim El Deeb Lawyer | Karim El Deeb Law firm |
| Street address | **31.2001116, 29.8964066 (coordinates, not an address)** | 123 El Bahr street-El Hadaba, 46619 ✔ |
| Pin | Correct per owner, do not move | Correct |
| Primary category | Lawyer ✔ + Law firm, Legal services, Divorce, Business, Civil, Family, Immigration, Mediation | Lawyer ✔ + similar set |
| Description | Mentioned "العطارين" → **rewritten 2026-11-18 (pending review)** | Good |
| Website | /alexandria + UTM ✔ | /sharm-el-sheikh + UTM ✔ |
| Chat | WhatsApp primary ✔, Messenger added by Google | WhatsApp ✔ |
| Social | Facebook → **Instagram added 2026-11-18 (pending)** | Facebook → **Instagram added 2026-11-18 (pending)** |
| Hours | 24/7 (matches site) | 24/7 |
| Photos | No exterior or signage photo | Has some; new signage photos coming |
| Attributes | Every parking type ticked (free and paid, lot and multi-storey), plus full wheelchair access. Owner should untick anything untrue. | Similar |

### Changes made later on 2026-11-18

- **Alexandria address** saved in Arabic: «14 شارع الشهداء، محطة الرمل» (pending review).
  The English version made Google move the pin about 1.5 km away, so it was not saved.
  The Arabic version keeps the pin on building 14 at the corner of Shohada and Omar Lotfy (owner approved).
  After approval, update `lat/lng` in `src/data/business.ts` from the live Maps pin.
- **Sharm address** stays in English. The Arabic version made Google move the pin to the city centre.
- **Sharm name** changed to «كريم الديب المحامي - Karim El Deeb Law Firm» (pending review). It matches the real Sharm signs.
- **Alexandria name:** wait until the Sharm rename settles.
  Then use the same bilingual name, but only if the Alexandria sign reads the same.
- **Sign photos:** use real ones only. AI-made sign photos or verification videos are not acceptable and risk suspension.

## 2. Owner actions (cannot be done safely by Claude)

1. **Alexandria pin.** If you ever adjust it, do it from a phone at the office with **Adjust**.
2. **Photos.** Upload the AI-touched-up signage photos (light, crop and sharpness only; never change the sign or the building).
   - Alexandria: building with the «كريم الديب محامي» sign.
   - Sharm: unlimited front with «KARIM EL DEEB ATTORNEY», and the round «Law Firm Since 2006» sign.
   - Then add one new real photo per week (team, office, documents without client data).
3. **Attributes.** Untick the parking and accessibility options that are not true.
   Wrong attributes cause bad reviews and suggested edits.
4. **Reviews (biggest lever for Arabic Alexandria).**
   - Target: Alexandria 106 → 200 in 3 months, then 300+.
   - Ask every finished client for a review with the short link or QR (`docs/qr`).
   - Ask for a few words in Arabic about the service and the area, e.g. "قضية خلع في الإسكندرية". Never script, pay for, or gate reviews.
   - Reply to every review within 48 h. Name the service and the city naturally in the reply.
5. **Keep the names as on the signs.**
   - Alexandria sign: «كريم الديب المحامي». Sharm sign: «Karim El Deeb Law Firm».
   - Do not add keywords like "أفضل محامي في الإسكندرية" to the name. That violates Google's guidelines and risks suspension.

## 3. Weekly Google Business routine (both profiles)

- **1 post per week per profile**, alternating Arabic and English.
  Each post links to a matching article or service page with UTM `utm_campaign=gbp_post_<city>`.
- **Services list.** Mirror the site's service pages (family, real estate, criminal, civil, corporate,
  foreigners/residency, arbitration, mediation) with a short description each.
- **Q&A.** Seed real FAQs from the site's FAQ (addresses, languages, appointments).
- **Products.** Optional: one "product" card per main service linking to its page.

## 4. Website ↔ profile linking (done in code)

- `src/data/business.ts`
  - Alexandria `lat/lng` set to the exact profile pin.
  - Map embed now points to the business listing, not a bare address.
  - Branch `sameAs` lists both the CID URL and the short Maps link.
  - The sign names were added to `alternateName`.
- Already in place:
  - NAP from one source.
  - LegalService schema per branch with `hasMap` = CID.
  - City pages with service sections.
  - Hours that match the profiles.

## 5. Website content for "محامي في الإسكندرية"

- `/alexandria` already targets the term in H1/title and 13 service sections ("محامي … في الإسكندرية").
- Next pieces:
  - Arabic area pages or sections for Raml Station, Smouha, Sidi Gaber, Miami and El Agamy. Only where real clients come from.
  - FAQ "أفضل محامي في الإسكندرية؟ كيف تختار" as an honest guide article.
  - Link every new article to `/alexandria` with natural Arabic anchor text.
- Citations: keep Yellow Pages, Hawleek, MisrConnect and Afokato NAP identical to the site.
  Add 3–5 more Egyptian directories with the exact same name, address and phone.

## 6. Monthly check

- Run "محامي في الاسكندرية" / "lawyer in Alexandria" in Maps from Raml Station and Smouha.
- Track position and review count vs. the top 5.
- In Search Console, track clicks from `utm_campaign=gbp_*` and the queries for `/alexandria`.
