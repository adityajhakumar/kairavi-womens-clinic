import Link from "next/link";
import type { Metadata } from "next";
import { CLINIC, SERVICES, META } from "@/lib/clinic";
import { buildMetadata } from "@/lib/meta";
import { breadcrumbSchema, servicesItemList } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Services & Treatments",
  description: META.services,
  path: "/services/",
});

export default function ServicesPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }])} />
      <JsonLd data={servicesItemList()} />

      <section style={{ background: "var(--bg-tint)" }}>
        <div className="container-k" style={{ padding: "54px 22px 56px" }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: "var(--ink-faint)", marginBottom: 22 }}>
            <Link href="/" style={{ color: "var(--ink-faint)" }}>Home</Link> <span>›</span> <span style={{ color: "var(--rose-deep)" }}>Services</span>
          </nav>
          <p className="eyebrow">What we offer</p>
          <h1 style={{ fontSize: "clamp(32px, 4.6vw, 50px)", marginTop: 14, maxWidth: 760 }}>
            Comprehensive obstetrics and gynaecology care
          </h1>
          <p className="lead" style={{ marginTop: 18, maxWidth: 640 }}>
            From planning a pregnancy to managing complex gynaecological conditions, every service is delivered
            with care, clear explanations, and respect for your comfort.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-k">
          <div style={{ maxWidth: 740, margin: "0 auto 44px", textAlign: "center" }}>
            <p className="eyebrow">Our approach</p>
            <p className="lead" style={{ marginTop: 12 }}>
              Care at Kairavi is unhurried and personal. We start by understanding your concern, explain what is happening
              in plain language, and recommend only what genuinely helps, whether that is reassurance, medication, or a
              procedure. Tap any service below to read a clear, doctor-reviewed guide.
            </p>
          </div>
          <div className="svc-list" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 18 }}>
            {SERVICES.map((s, i) => (
              <Link key={s.slug} id={s.slug} href={`/services/${s.slug}/`} className="card" style={{ scrollMarginTop: 90, display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <span style={{ width: 34, height: 34, borderRadius: 10, background: "var(--bg-tint)", color: "var(--rose)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14, flexShrink: 0 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 style={{ fontSize: 19 }}>{s.name}</h2>
                </div>
                <p className="muted" style={{ fontSize: 15, lineHeight: 1.7 }}>{s.description}</p>
                <span style={{ marginTop: 14, color: "var(--rose-deep)", fontWeight: 600, fontSize: 14 }}>Read more →</span>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: 48, textAlign: "center", background: "var(--bg-tint)", borderRadius: 20, padding: "40px 24px" }}>
            <h2 style={{ fontSize: 26 }}>Not sure which service you need?</h2>
            <p className="lead" style={{ marginTop: 12, maxWidth: 520, marginInline: "auto" }}>
              Call us and describe your concern. We will guide you to the right care.
            </p>
            <div style={{ marginTop: 24, display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <a href={`tel:${CLINIC.phoneRaw}`} className="btn-primary">Call {CLINIC.phoneDisplay}</a>
              <Link href="/contact/" className="btn-ghost">Visit &amp; Contact →</Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`@media (max-width: 720px){ .svc-list{ grid-template-columns:1fr !important; } }`}</style>
    </main>
  );
}
