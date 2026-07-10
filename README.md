# Kairavi Women's Clinic, website

A complete, SEO-first marketing website for **Kairavi Women's Clinic** (Dr. Santhalakshmi S, Obstetrician & Gynaecologist), Kelambakkam, Chennai.

Built with the same architecture and SEO techniques as the MemX site: Next.js 15 App Router, static export, structured data, per-page metadata, sitemap, robots, and branded Open Graph cards. Recolored to a **light theme with a deep-rose accent**.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out  (also runs OG copy + broken-link guard)
```

`npm run build` produces a fully static site in `out/` that can be hosted on any
static host (Netlify, Vercel, Firebase Hosting, GitHub Pages, S3/Cloudflare).

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Home: hero, care stages, doctor preview, services, values, CTA |
| `/about/` | Dr. Santhalakshmi: bio, qualifications, experience |
| `/services/` | All 14 services with descriptions (anchored) |
| `/womens-care/` | The 6 life-stage care areas |
| `/contact/` | Address, hours, phone/WhatsApp/email, embedded map |
| `/faq/` | 8 FAQs (accordion + FAQ rich-result schema) |

## SEO built in

- **Structured data (JSON-LD):** `MedicalClinic` + `LocalBusiness` (address, geo,
  opening hours, telephone, medical specialty, services), `Physician`, `WebSite`,
  `BreadcrumbList` on every sub-page, `FAQPage`, and `ItemList` for services.
- Per-page `<title>`, meta description, canonical, Open Graph + Twitter cards.
- One branded 1200x630 OG card generated at build (`opengraph-image.tsx`).
- `sitemap.xml` + `robots.txt` generated from the route list.
- Semantic headings, single H1 per page, descriptive image alt text, mobile-first
  responsive layout, accessible nav, reduced-motion support.

## Editing content

Everything lives in **`src/lib/clinic.ts`** (the single source of truth): doctor
details, the 14 services, 6 care stages, 8 FAQs, contact info, hours, and address.
The JSON-LD in `src/lib/seo.ts` reads from the same file, so the markup never drifts
from the visible copy.

> Set the real domain in `src/lib/clinic.ts` (`SITE_URL`) before going live, and
> swap the decorative stock photos in `public/images/` for real clinic photos when
> available. The doctor portrait is intentionally a stock placeholder.

## Notes

- Images are royalty-free Unsplash photos, downloaded into `public/images/`.
- Medical copy is written to be accurate and non-overclaiming. Review before launch.
- The map uses Google Maps' keyless embed pointed at the clinic address.
