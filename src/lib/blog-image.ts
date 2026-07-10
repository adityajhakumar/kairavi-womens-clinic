// Automatic blog cover images (medical / women's-health theme).
// ---------------------------------------------------------------------------
// If a blog post in blog.ts does not set its own `cover`, we pick a medical
// photo from the pool below, chosen deterministically from the post's slug so
// the same post always shows the same image. Pattern inspired by the LumiChat
// reference project. Images are served from Unsplash (whitelisted in
// next.config.ts). To always control a post's image, just set `cover` on that
// post in blog.ts (a local "/images/blog/..." file or an Unsplash URL).
// ---------------------------------------------------------------------------

// Build an Unsplash URL from a photo ID, sized for a wide cover (1200x675).
const U = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

// Medical / women's-health photo pool. Each entry is an Unsplash photo ID plus
// a short alt description. Add or replace IDs freely — use any photo from
// unsplash.com (the ID is the part of the image URL after "images.unsplash.com/").
export const MEDICAL_IMAGE_POOL: { id: string; alt: string }[] = [
  { id: "photo-1559757148-5c350d0d3c56", alt: "Expecting mother holding her pregnant belly" },
  { id: "photo-1576091160550-2173dba999ef", alt: "Doctor with a stethoscope in a bright clinic" },
  { id: "photo-1631217868264-e5b90bb7e133", alt: "Friendly doctor consulting a patient" },
  { id: "photo-1505751172876-fa1923c5c528", alt: "Healthcare professional in a white coat" },
  { id: "photo-1666214280557-f1b5022eb634", alt: "Doctor reassuring a patient during a consultation" },
  { id: "photo-1544367567-0f2fcb009e0b", alt: "Woman practising calm, healthy wellness" },
  { id: "photo-1522771739844-6a9f6d5f14af", alt: "Warm moment of care and support" },
  { id: "photo-1607990281513-2c110a25bd8c", alt: "Medical care and health check" },
  { id: "photo-1519824145371-296894a0daa9", alt: "Caring, calm healthcare setting" },
  { id: "photo-1518717758536-85ae29035b6d", alt: "Fresh, healthy food for wellbeing" },
  { id: "photo-1531983412531-1f49a365ffed", alt: "Gentle, reassuring health and wellbeing" },
  { id: "photo-1476703993599-0035a21b17a9", alt: "Calm wellness and self-care" },
  { id: "photo-1584982751601-97dcc096659c", alt: "Modern, clean medical environment" },
  { id: "photo-1551601651-2a8555f1a136", alt: "Supportive, professional health care" },
];

// djb2-variant hash so a slug maps to a stable pool index.
function hash(s: string): number {
  let v = 0;
  for (let i = 0; i < s.length; i++) v = (Math.imul(31, v) + s.charCodeAt(i)) | 0;
  return Math.abs(v);
}

export interface ResolvedCover { src: string; alt: string; }

// Return the post's own cover if it set one, otherwise a deterministic medical
// image from the pool.
export function resolveBlogCover(post: { slug: string; title: string; cover?: { src: string; alt: string } }): ResolvedCover {
  if (post.cover) return post.cover;
  const pick = MEDICAL_IMAGE_POOL[hash(post.slug) % MEDICAL_IMAGE_POOL.length];
  return { src: U(pick.id), alt: pick.alt || post.title };
}
