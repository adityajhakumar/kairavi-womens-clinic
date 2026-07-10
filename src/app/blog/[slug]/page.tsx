import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getPost } from "@/lib/blog";
import { resolveBlogCover } from "@/lib/blog-image";
import { CLINIC } from "@/lib/clinic";
import { buildMetadata } from "@/lib/meta";
import { breadcrumbSchema, blogPostingSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return buildMetadata({ title: p.title, description: p.excerpt, path: `/blog/${p.slug}/` });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const cover = resolveBlogCover(post);
  const more = BLOG_POSTS.filter((x) => x.slug !== post.slug).slice(0, 3);

  return (
    <main>
      <JsonLd data={blogPostingSchema({ ...post, cover })} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog/" }, { name: post.title, path: `/blog/${post.slug}/` }])} />

      {/* HERO */}
      <section style={{ background: "var(--bg-tint)" }}>
        <div className="container-narrow" style={{ padding: "48px 22px 40px" }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: "var(--ink-faint)", marginBottom: 22 }}>
            <Link href="/" style={{ color: "var(--ink-faint)" }}>Home</Link> <span>›</span>{" "}
            <Link href="/blog/" style={{ color: "var(--ink-faint)" }}>Blog</Link> <span>›</span>{" "}
            <span style={{ color: "var(--rose-deep)" }}>{post.title}</span>
          </nav>
          <p className="muted" style={{ fontSize: 13, letterSpacing: "0.02em" }}>{post.dateDisplay} · {post.readingTime}</p>
          <h1 style={{ fontSize: "clamp(30px, 4.4vw, 46px)", marginTop: 12 }}>{post.title}</h1>
          <p className="muted" style={{ fontSize: 14.5, marginTop: 14 }}>By {post.author}, {CLINIC.doctor.title}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-narrow">
          <div style={{ borderRadius: 20, overflow: "hidden", border: "1px solid var(--rose-soft)", boxShadow: "0 18px 44px rgba(162,29,88,0.12)", margin: "-28px 0 40px" }}>
            <Image src={cover.src} alt={cover.alt} width={760} height={460} priority
              sizes="(max-width: 800px) 100vw, 760px" style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }} />
          </div>

          {post.content.map((sec, si) => (
            <div key={si} style={{ marginBottom: 30 }}>
              {sec.heading && <h2 style={{ fontSize: 24, marginBottom: 14 }}>{sec.heading}</h2>}
              {sec.paragraphs.map((p, i) => (
                <p key={i} className="lead" style={{ marginBottom: 14 }}>{p}</p>
              ))}
              {sec.bullets && sec.bullets.length > 0 && (
                <ul style={{ listStyle: "none", padding: 0, marginTop: 8 }}>
                  {sec.bullets.map((b, i) => (
                    <li key={i} style={{ display: "flex", gap: 12, padding: "7px 0" }}>
                      <span style={{ color: "var(--rose)", flexShrink: 0 }}>›</span>
                      <span className="muted" style={{ fontSize: 15.5, lineHeight: 1.7 }}>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* CTA */}
          <div style={{ marginTop: 40, background: "var(--bg-tint)", borderRadius: 18, padding: "32px 26px", textAlign: "center" }}>
            <h2 style={{ fontSize: 23 }}>Talk to Dr. Santhalakshmi</h2>
            <p className="muted" style={{ marginTop: 10, fontSize: 15, maxWidth: 460, marginInline: "auto" }}>
              For advice suited to your own situation, book a consultation at Kairavi Women&rsquo;s Clinic.
            </p>
            <div style={{ marginTop: 20, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href={`tel:${CLINIC.phoneRaw}`} className="btn-primary">Call {CLINIC.phoneDisplay}</a>
              <Link href="/contact/" className="btn-ghost">Visit &amp; Map →</Link>
            </div>
          </div>

          {/* Medical disclaimer */}
          <div style={{ marginTop: 28, padding: "18px 20px", borderLeft: "3px solid var(--rose)", background: "var(--bg-tint)", borderRadius: "0 10px 10px 0" }}>
            <p style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.65 }}>
              <strong>Medical disclaimer:</strong> This article is general health information for education only. It does not
              replace a personal consultation, diagnosis, or treatment. Please speak with a qualified doctor about your
              individual situation.
            </p>
          </div>

          <div style={{ marginTop: 36 }}>
            <Link href="/blog/" style={{ color: "var(--rose-deep)", fontWeight: 600, fontSize: 14 }}>← Back to all articles</Link>
          </div>
        </div>
      </section>

      {/* More posts */}
      {more.length > 0 && (
        <section className="section section-tint" style={{ paddingTop: 56 }}>
          <div className="container-k">
            <h2 style={{ fontSize: 24, marginBottom: 24 }}>More from the blog</h2>
            <div className="more-grid" style={{ display: "grid", gridTemplateColumns: `repeat(${more.length}, 1fr)`, gap: 20 }}>
              {more.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}/`} className="card" style={{ display: "block" }}>
                  <p className="muted" style={{ fontSize: 12.5 }}>{r.dateDisplay}</p>
                  <h3 style={{ fontSize: 17, marginTop: 8, lineHeight: 1.3 }}>{r.title}</h3>
                  <p className="muted" style={{ fontSize: 13.5, marginTop: 8, lineHeight: 1.6 }}>{r.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <style>{`
        @media (max-width: 720px){ .more-grid{ grid-template-columns:1fr !important; } }
      `}</style>
    </main>
  );
}
