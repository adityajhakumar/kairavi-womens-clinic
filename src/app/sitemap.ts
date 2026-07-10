import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/clinic";
import { ARTICLE_SLUGS } from "@/lib/articles";
import { BLOG_SLUGS } from "@/lib/blog";

// Required for output: 'export' so the static exporter renders this at build.
export const dynamic = "force-static";

const LASTMOD = new Date("2026-06-02");

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFrequency: "monthly" },
    { path: "/about/", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services/", priority: 0.9, changeFrequency: "monthly" },
    { path: "/womens-care/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/patient-guide/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/blog/", priority: 0.7, changeFrequency: "weekly" },
    { path: "/camps/", priority: 0.6, changeFrequency: "monthly" },
    { path: "/contact/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/faq/", priority: 0.7, changeFrequency: "monthly" },
    // Individual service / condition articles
    ...ARTICLE_SLUGS.map((slug) => ({ path: `/services/${slug}/`, priority: 0.7, changeFrequency: "monthly" as const })),
    // Blog posts
    ...BLOG_SLUGS.map((slug) => ({ path: `/blog/${slug}/`, priority: 0.6, changeFrequency: "monthly" as const })),
  ];
  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: LASTMOD,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
