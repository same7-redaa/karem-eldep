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

## 7. Data analysis (Search Console, 90 days to 2026-11-18) and SERP check

### What the data says

- **Volume:**
  - Egypt is 92,742 of about 95k impressions.
  - The biggest are the English generic queries "family lawyer" (29.8k, pos 7.3) and "divorce lawyer" (12.5k, pos 7.6).
  - They land on the **Arabic** `/family-law` page, so CTR is only 0.13–0.3%.
  - Fix shipped: a bilingual `<title>` on `/family-law`.
- **Arabic "محامي (في) الاسكندرية":**
  - `/alexandria` sits at about pos 7–10 but with very few impressions.
  - Google's organic top 10 for the term is mostly directories: Yellow Pages (x2), Lawzana (x2), Hawleek, wakilly, Facebook pages, and one competitor site (elmustasharlawfirm.com).
  - The map pack shows 4 firms with 24–337 reviews. We are not in it in Arabic.
- **AI Overview** for "محامي في الاسكندرية" already names **Karim El Deeb Law Firm** for companies, commercial and maritime arbitration.
  - It described the office as being in "العطارين" (the old profile address).
  - That updates now that the address is «14 شارع الشهداء، محطة الرمل».
- **Duplicate URL variants still collect impressions:** `ke-lawyer.com` (non-www), `?lang=ar`, `?lang=en`.
  Non-www already 308-redirects and the canonicals are correct, so no action is needed. These variants fade as Google recrawls.

### Shipped on 2026-11-18

- `/alexandria`:
  - Three FAQ answers that match Google's "People also ask": choosing a lawyer, consultation cost (no figures), and the phone number.
  - New areas: Moharam Bek, Ibrahimia/Azarita/Shatby, Cleopatra/Hadara, Seyouf/Asafra. These come from "searched also for".
- RSS feeds, page dates and author on the city pages.
- Google Business posts on both profiles (first in a year), each linking to its city page with UTM `gbp_post_*`.
- Replied to 3 new or recent Sharm reviews.

### Owner actions, in order of impact

1. **Reviews:** the biggest Maps lever (we have 106, the leaders 118–337). Ask every closed case for a review with the short link or QR.
2. **1-star review on Alexandria** (John Mark, 2026-11-17): "Unprofessional, defensive, terrible communication…".
   - If he was a client, reply calmly without any case details and invite him to call.
   - If he was never a client, flag it in the profile as "not a customer".
3. **Facebook page** (12k followers, 1,037 recommendations) has **no website link**. Add `https://www.ke-lawyer.com` in Page → About → Links.
   The Chrome session isn't a page admin, so the owner has to do this.
4. **Directories that rank for "محامي في الاسكندرية":**
   - Get listed or claimed on **Lawzana** (Alexandria) and **wakilly.com**.
   - Add the website link to **Yellow Pages**, **Hawleek** and **Afokato**. Those profiles exist but don't link to the site.
   - Keep name, address and phone identical to the Google profiles.
5. **LinkedIn** (Karim Eldeeb, 130+ followers): add the website and the firm name.
   Then add the LinkedIn URL to `attorneyProfiles` in `src/data/business.ts`.
6. **Weekly:** one Google post per profile. Rotate the service pages and new articles.

## 8. Log, later on 2026-11-18

### Approved by Google

- Alexandria address: «14 شارع الشهداء، محطة الرمل». The pin is on building 14 (corner of El Shohada and Omar Lotfy), at 31.1995989, 29.8967125.
- Sharm name: «كريم الديب المحامي - Karim El Deeb Law Firm». It matches the real signs.
- Alexandria description, and Instagram on both profiles.

### Website (deployed)

- An "at a glance" facts block near the top of `/alexandria` and `/sharm-el-sheikh` (name, address, practice areas, years, languages, phone, Maps link).
  This gives AI Overviews a short passage to cite, so they link to the site and not only to directories.
- `llms.txt`: both addresses, the Maps CIDs and an Arabic summary.
- Alexandria `geo` and map embed updated to the approved pin.

### Google posts

8 posts with a "Learn more" button and UTM `gbp_post_*`:

| Profile | Links to |
|---|---|
| Alexandria | `/alexandria`, `/alexandria/family-lawyer`, `/alexandria/real-estate-lawyer`, `/alexandria/corporate-lawyer` |
| Sharm | `/sharm-el-sheikh`, `/sharm-el-sheikh/real-estate-lawyer`, `/sharm-el-sheikh/immigration-lawyer`, `/sharm-el-sheikh/lawyer-for-foreigners` |

Never put phone numbers in post text, because Google rejects those posts.

### Review replies

- **Sharm:** AR Thalen, Hosam Elgar and Mohamed Abdalmaksoud (positive).
- **Alexandria, negative:**
  - John Mark (1★, "unprofessional… pushes for a good review early"): calm reply that keeps client confidentiality and invites direct contact.
  - Itachi Uchiha (1★): replied.
  - Ouuyyy Rreedoo (2★, no text): replied.
- **Still open: Keir Harris (1★, 2026-11-17).**
  - He is a real client: rental-deposit case, fee paid in July 2026.
  - He says he got no updates after August, never received a court, case number or hearing date, was blocked on WhatsApp, and had no answer to his email of 12 Nov.
  - The owner must first email him the court, case number and next hearing date, and unblock him. Only then post this reply:

    > Hello Keir, thank you for your feedback, and we're sorry you felt uninformed. Clients abroad should always know exactly where their case stands. We have emailed you the full case details (court, case number and next hearing date) so you can verify them directly, and Mr. Karim El Deeb remains available to update you personally. For client confidentiality we can't discuss the case here. – Karim El Deeb Law Firm

### Next session

1. Search Console indexing, 10 per day. Queue in memory: /alexandria and /sharm-el-sheikh recrawl first, then the 11 new articles.
2. Keir Harris reply, once the owner confirms the email was sent.
3. More Google posts weekly. Re-check the AI Overview for «محامي في الاسكندرية» in about 2 weeks.
4. Owner tasks: Facebook page website link; Lawzana and wakilly listings; website links on Yellow Pages, Hawleek and Afokato; real sign photos.
