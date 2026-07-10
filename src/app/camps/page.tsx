import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { CLINIC } from "@/lib/clinic";
import { CAMPS } from "@/lib/camps";
import { buildMetadata } from "@/lib/meta";
import { breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Health Camps & Community Outreach",
  description:
    "Photos and highlights from community health camps and awareness drives by Kairavi Women's Clinic, Dr. Santhalakshmi S, in and around Kelambakkam, Chennai.",
  path: "/camps/",
});

export default function CampsPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Camps", path: "/camps/" }])} />

      <section style={{ background: "var(--bg-tint)" }}>
        <div className="container-k" style={{ padding: "54px 22px 56px" }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: "var(--ink-faint)", marginBottom: 22 }}>
            <Link href="/" style={{ color: "var(--ink-faint)" }}>Home</Link> <span>›</span> <span style={{ color: "var(--rose-deep)" }}>Camps</span>
          </nav>
          <p className="eyebrow">Community outreach</p>
          <h1 style={{ fontSize: "clamp(32px, 4.6vw, 50px)", marginTop: 14, maxWidth: 780 }}>
            Health camps &amp; awareness drives
          </h1>
          <p className="lead" style={{ marginTop: 18, maxWidth: 660 }}>
            Beyond the clinic, Kairavi takes part in community health camps and awareness activities to bring
            women&rsquo;s health care and guidance closer to home. Photos and highlights from our camps are shared here.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-k">
          {CAMPS.length === 0 ? (
            <div className="card" style={{ textAlign: "center", padding: "52px 26px", maxWidth: 640, margin: "0 auto" }}>
              <div style={{ fontSize: 34 }} aria-hidden>🩺</div>
              <h2 style={{ fontSize: 24, marginTop: 12 }}>Photos coming soon</h2>
              <p className="lead" style={{ marginTop: 12 }}>
                We are putting together photos and highlights from our recent community health camps.
                Please check back shortly to see them here.
              </p>
              <div style={{ marginTop: 22, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <a href={`https://wa.me/${CLINIC.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-primary">Ask about upcoming camps</a>
                <Link href="/about/" className="btn-ghost">Meet the doctor →</Link>
              </div>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
              {CAMPS.map((camp) => (
                <article key={camp.slug} id={camp.slug}>
                  <div style={{ maxWidth: 760 }}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center" }}>
                      <span className="chip">{camp.dateDisplay}</span>
                      <span className="muted" style={{ fontSize: 13.5 }}>{camp.location}</span>
                    </div>
                    <h2 style={{ fontSize: 26, marginTop: 14 }}>{camp.title}</h2>
                    <p className="muted" style={{ fontSize: 15.5, marginTop: 12, lineHeight: 1.7 }}>{camp.summary}</p>
                  </div>
                  <div className="camp-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginTop: 22 }}>
                    {camp.photos.map((photo, i) => (
                      <div key={i} style={{ position: "relative", aspectRatio: "4/3", borderRadius: 14, overflow: "hidden", border: "1px solid var(--line)" }}>
                        <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 860px) 50vw, 340px" style={{ objectFit: "cover" }} />
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <style>{`
        @media (max-width: 640px){ .camp-grid{ grid-template-columns:1fr 1fr !important; } }
      `}</style>
    </main>
  );
}
