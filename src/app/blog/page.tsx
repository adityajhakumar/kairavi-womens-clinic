import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { CLINIC } from "@/lib/clinic";
import { BLOG_POSTS } from "@/lib/blog";
import { resolveBlogCover } from "@/lib/blog-image";
import { buildMetadata } from "@/lib/meta";
import { breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "Simple, trustworthy guidance on pregnancy, women's health, and wellbeing from Dr. Santhalakshmi S at Kairavi Women's Clinic, Kelambakkam, Chennai.",
  path: "/blog/",
});

export default function BlogPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog/" }])} />

      <section style={{ background: "var(--bg-tint)" }}>
        <div className="container-k" style={{ padding: "54px 22px 56px" }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: "var(--ink-faint)", marginBottom: 22 }}>
            <Link href="/" style={{ color: "var(--ink-faint)" }}>Home</Link> <span>›</span> <span style={{ color: "var(--rose-deep)" }}>Blog</span>
          </nav>
          <p className="eyebrow">From the clinic</p>
          <h1 style={{ fontSize: "clamp(32px, 4.6vw, 50px)", marginTop: 14, maxWidth: 760 }}>
            Health notes &amp; guidance for women
          </h1>
          <p className="lead" style={{ marginTop: 18, maxWidth: 640 }}>
            Clear, friendly articles on pregnancy, periods, hormonal health, and looking after yourself,
            written by Dr. Santhalakshmi. For general awareness, not a substitute for a consultation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-k">
          {BLOG_POSTS.length === 0 ? (
            <div className="card" style={{ textAlign: "center", padding: "48px 26px" }}>
              <p className="lead">Our first articles are on the way. Please check back soon.</p>
            </div>
          ) : (
            <div className="blog-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 26 }}>
              {BLOG_POSTS.map((post) => {
                const cover = resolveBlogCover(post);
                return (
                <Link key={post.slug} href={`/blog/${post.slug}/`} className="card" style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                  <div style={{ position: "relative", aspectRatio: "16/10" }}>
                    <Image src={cover.src} alt={cover.alt} fill sizes="(max-width: 860px) 100vw, 360px" style={{ objectFit: "cover" }} />
                  </div>
                  <div style={{ padding: "20px 22px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
                    <p className="muted" style={{ fontSize: 12.5, letterSpacing: "0.02em" }}>
                      {post.dateDisplay} · {post.readingTime}
                    </p>
                    <h2 style={{ fontSize: 20, marginTop: 10, lineHeight: 1.25 }}>{post.title}</h2>
                    <p className="muted" style={{ fontSize: 14.5, marginTop: 10, lineHeight: 1.65, flex: 1 }}>{post.excerpt}</p>
                    <span style={{ marginTop: 16, color: "var(--rose-deep)", fontWeight: 600, fontSize: 14 }}>Read more →</span>
                  </div>
                </Link>
                );
              })}
            </div>
          )}
        </div>

        <div className="container-narrow" style={{ marginTop: 54, textAlign: "center" }}>
          <h2 style={{ fontSize: 26 }}>Have a question you would like us to cover?</h2>
          <p className="lead" style={{ marginTop: 14 }}>We are always happy to hear what is on your mind.</p>
          <div style={{ marginTop: 22, display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`tel:${CLINIC.phoneRaw}`} className="btn-primary">Call {CLINIC.phoneDisplay}</a>
            <a href={`https://wa.me/${CLINIC.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-ghost">Message on WhatsApp →</a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 860px) { .blog-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .blog-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </main>
  );
}
