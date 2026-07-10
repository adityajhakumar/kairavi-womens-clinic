import type { Metadata } from "next";
import { SITE_URL } from "./clinic";

// DRY per-page metadata. One branded OG card (/opengraph-image.png) is shared
// across pages, with clean extension + explicit type + secureUrl so strict
// scrapers (LinkedIn, Google) accept it.
export function buildMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogImage = `${SITE_URL}/opengraph-image.png`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | Kairavi Women's Clinic`,
      description,
      url,
      siteName: "Kairavi Women's Clinic",
      images: [{ url: ogImage, secureUrl: ogImage, width: 1200, height: 630, alt: "Kairavi Women's Clinic", type: "image/png" }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Kairavi Women's Clinic`,
      description,
      images: [ogImage],
    },
  };
}
