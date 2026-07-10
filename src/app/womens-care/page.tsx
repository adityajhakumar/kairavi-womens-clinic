import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { CLINIC, STAGES, META } from "@/lib/clinic";
import { ARTICLES } from "@/lib/articles";
import { buildMetadata } from "@/lib/meta";

// Each life stage links to the most relevant in-depth articles (by stage order).
const STAGE_ARTICLES: string[][] = [
  ["menstrual-disorder-treatment", "pcos-and-hormonal-disorder-management"],
  ["family-planning-and-contraceptive-counselling", "menstrual-disorder-treatment"],
  ["antenatal-and-postnatal-care", "high-risk-pregnancy-management"],
  ["normal-and-assisted-deliveries", "caesarean-sections"],
  ["gynaecological-treatments", "ovarian-cyst-management"],
  ["pre-conception-counselling", "gynaecological-treatments"],
];
const nameOf = (slug: string) => ARTICLES.find((a) => a.slug === slug)?.name.replace(/\s*\(.*\)/, "") ?? slug;
import { breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Women's Care at Every Stage",
  description: META["womens-care"],
  path: "/womens-care/",
});

export default function WomensCarePage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Women's Care", path: "/womens-care/" }])} />

      <section style={{ background: "var(--bg-tint)" }}>
        <div className="container-k" style={{ padding: "54px 22px 56px" }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: "var(--ink-faint)", marginBottom: 22 }}>
            <Link href="/" style={{ color: "var(--ink-faint)" }}>Home</Link> <span>›</span> <span style={{ color: "var(--rose-deep)" }}>Women&rsquo;s Care</span>
          </nav>
          <p className="eyebrow">Care for every chapter</p>
          <h1 style={{ fontSize: "clamp(32px, 4.6vw, 50px)", marginTop: 14, maxWidth: 760 }}>
            Supporting women&rsquo;s health across every stage of life
          </h1>
          <p className="lead" style={{ marginTop: 18, maxWidth: 640 }}>
            A woman&rsquo;s health needs change over time. Kairavi Women&rsquo;s Clinic offers attentive,
            stage-appropriate care from adolescence through the menopausal years.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-k" style={{ display: "flex", flexDirection: "column", gap: 30 }}>
          {STAGES.map((s, i) => (
            <article key={s.name} className="stage-row card" style={{ display: "grid", gridTemplateColumns: i % 2 === 0 ? "0.8fr 1.2fr" : "1.2fr 0.8fr", gap: 30, alignItems: "center", padding: 18 }}>
              <div style={{ order: i % 2 === 0 ? 0 : 1, borderRadius: 14, overflow: "hidden", position: "relative", aspectRatio: "4/3" }}>
                <Image src={s.image.src} alt={s.image.alt} fill sizes="(max-width: 860px) 100vw, 40vw" style={{ objectFit: "cover" }} />
              </div>
              <div style={{ order: i % 2 === 0 ? 1 : 0, padding: "8px 18px" }}>
                <span className="chip">Stage {String(i + 1).padStart(2, "0")}</span>
                <h2 style={{ fontSize: 25, marginTop: 14 }}>{s.name}</h2>
                <p className="muted" style={{ fontSize: 15.5, marginTop: 12, lineHeight: 1.75 }}>{s.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
                  {(STAGE_ARTICLES[i] || []).map((slug) => (
                    <Link key={slug} href={`/services/${slug}/`} style={{ fontSize: 13, fontWeight: 600, color: "var(--rose-deep)", border: "1px solid var(--rose-soft)", borderRadius: 999, padding: "6px 13px" }}>
                      {nameOf(slug)} →
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="container-narrow" style={{ marginTop: 50, textAlign: "center" }}>
          <h2 style={{ fontSize: 26 }}>Wherever you are in life, we are here to help</h2>
          <div style={{ marginTop: 22, display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`tel:${CLINIC.phoneRaw}`} className="btn-primary">Book an Appointment</a>
            <Link href="/services/" className="btn-ghost">Explore Services →</Link>
          </div>
        </div>
      </section>

      <style>{`@media (max-width: 760px){ .stage-row{ grid-template-columns:1fr !important; } .stage-row > div{ order:initial !important; } }`}</style>
    </main>
  );
}
