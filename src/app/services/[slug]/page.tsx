import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ARTICLES, getArticle } from "@/lib/articles";
import { CLINIC } from "@/lib/clinic";
import { buildMetadata } from "@/lib/meta";
import { breadcrumbSchema, faqSchema, medicalArticleSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return buildMetadata({ title: a.metaTitle, description: a.metaDescription, path: `/services/${a.slug}/` });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

  const related = ARTICLES.filter((x) => x.slug !== a.slug).slice(0, 4);

  return (
    <main>
      <JsonLd data={medicalArticleSchema(a)} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }, { name: a.name, path: `/services/${a.slug}/` }])} />
      <JsonLd data={faqSchema(a.faqs)} />

      {/* HERO */}
      <section style={{ background: "var(--bg-tint)" }}>
        <div className="container-k" style={{ padding: "48px 22px 0" }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: "var(--ink-faint)", marginBottom: 22 }}>
            <Link href="/" style={{ color: "var(--ink-faint)" }}>Home</Link> <span>›</span>{" "}
            <Link href="/services/" style={{ color: "var(--ink-faint)" }}>Services</Link> <span>›</span>{" "}
            <span style={{ color: "var(--rose-deep)" }}>{a.name}</span>
          </nav>
          <div className="art-hero" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 44, alignItems: "center", paddingBottom: 48 }}>
            <div>
              <span className="chip">Women&rsquo;s health</span>
              <h1 style={{ fontSize: "clamp(30px, 4.4vw, 46px)", marginTop: 16 }}>{a.name}</h1>
              <p className="lead" style={{ marginTop: 16 }}>{a.intro}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 26 }}>
                <a href={CLINIC.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">Book a Consultation</a>
                <a href={`https://wa.me/${CLINIC.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-ghost">Ask on WhatsApp</a>
              </div>
            </div>
            <div style={{ borderRadius: 20, overflow: "hidden", border: "1px solid var(--rose-soft)", boxShadow: "0 18px 44px rgba(162,29,88,0.12)" }}>
              <Image src={a.image.src} alt={a.image.alt} width={640} height={520} priority
                sizes="(max-width: 860px) 100vw, 42vw" style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="section">
        <div className="container-narrow">
          {a.sections.map((sec) => (
            <div key={sec.heading} style={{ marginBottom: 36 }}>
              <h2 style={{ fontSize: 25, marginBottom: 14 }}>{sec.heading}</h2>
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

          {/* FAQs */}
          <h2 style={{ fontSize: 25, marginTop: 48, marginBottom: 18 }}>Common questions</h2>
          {a.faqs.map((f) => (
            <details key={f.question} className="faq-item">
              <summary>{f.question}<span className="plus" aria-hidden>+</span></summary>
              <div className="faq-answer">{f.answer}</div>
            </details>
          ))}

          {/* CTA */}
          <div style={{ marginTop: 44, background: "var(--bg-tint)", borderRadius: 18, padding: "32px 26px", textAlign: "center" }}>
            <h2 style={{ fontSize: 23 }}>Talk to Dr. Santhalakshmi</h2>
            <p className="muted" style={{ marginTop: 10, fontSize: 15, maxWidth: 460, marginInline: "auto" }}>
              Every woman is different. Book a consultation for advice suited to you.
            </p>
            <div style={{ marginTop: 20, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href={`tel:${CLINIC.phoneRaw}`} className="btn-primary">Call {CLINIC.phoneDisplay}</a>
              <Link href="/contact/" className="btn-ghost">Visit &amp; Map →</Link>
            </div>
          </div>

          {/* Sources */}
          {a.sources.length > 0 && (
            <div style={{ marginTop: 40 }}>
              <h3 style={{ fontSize: 16 }}>References</h3>
              <ul style={{ listStyle: "none", padding: 0, marginTop: 10 }}>
                {a.sources.map((s) => (
                  <li key={s.url} style={{ fontSize: 13.5, padding: "4px 0" }}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer nofollow" className="muted" style={{ textDecoration: "underline" }}>{s.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Medical disclaimer */}
          <div style={{ marginTop: 28, padding: "18px 20px", borderLeft: "3px solid var(--rose)", background: "var(--bg-tint)", borderRadius: "0 10px 10px 0" }}>
            <p style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.65 }}>
              <strong>Medical disclaimer:</strong> This article is general health information reviewed by {CLINIC.doctor.name},
              {" "}{CLINIC.doctor.title}. It is for education only and does not replace a personal consultation, diagnosis, or
              treatment. Please speak with a qualified doctor about your individual situation.
            </p>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section section-tint" style={{ paddingTop: 56 }}>
        <div className="container-k">
          <h2 style={{ fontSize: 24, marginBottom: 24 }}>Related care</h2>
          <div className="rel-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {related.map((r) => (
              <Link key={r.slug} href={`/services/${r.slug}/`} className="card" style={{ display: "block" }}>
                <h3 style={{ fontSize: 16 }}>{r.name.replace(/\s*\(.*\)/, "")}</h3>
                <p className="muted" style={{ fontSize: 13.5, marginTop: 8, lineHeight: 1.6 }}>{r.metaDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 860px){ .art-hero{ grid-template-columns:1fr !important; } .art-hero > div:last-child{ order:-1; } }
        @media (max-width: 860px){ .rel-grid{ grid-template-columns:1fr 1fr !important; } }
        @media (max-width: 520px){ .rel-grid{ grid-template-columns:1fr !important; } }
      `}</style>
    </main>
  );
}
