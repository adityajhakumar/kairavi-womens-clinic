import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { CLINIC, SERVICES, STAGES, SITE_URL } from "@/lib/clinic";
import { ARTICLES } from "@/lib/articles";
import { servicesItemList, faqSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

// Override the root opengraph-image.tsx file convention (which would emit a
// hashed, extensionless URL that strict scrapers reject) with the clean .png.
export const metadata: Metadata = {
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    images: [{ url: `${SITE_URL}/opengraph-image.png`, secureUrl: `${SITE_URL}/opengraph-image.png`, width: 1200, height: 630, alt: "Kairavi Women's Clinic, Kelambakkam, Chennai", type: "image/png" }],
  },
  twitter: { images: [`${SITE_URL}/opengraph-image.png`] },
};

export default function Home() {
  return (
    <main>
      <JsonLd data={servicesItemList()} />
      <JsonLd data={faqSchema()} />

      {/* ============================ HERO ============================ */}
      <section style={{ background: "linear-gradient(180deg, var(--bg-tint) 0%, #ffffff 100%)" }}>
        <div className="container-k" style={{ padding: "64px 22px 72px" }}>
          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 56, alignItems: "center" }}>
            <div>
              <span className="chip">Women&rsquo;s Health · Kelambakkam, Chennai</span>
              <h1 style={{ fontSize: "clamp(36px, 5.4vw, 60px)", marginTop: 20 }}>
                Compassionate care for women, at <span style={{ color: "var(--rose)" }}>every stage of life.</span>
              </h1>
              <p className="lead" style={{ marginTop: 22, maxWidth: 520 }}>
                Kairavi Women&rsquo;s Clinic offers obstetrics and gynaecology care led by {CLINIC.doctor.name},
                with the time to listen, explain clearly, and support every decision you make.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 30 }}>
                <a href={CLINIC.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">Book an Appointment</a>
                <Link href="/services/" className="btn-ghost">Explore Services</Link>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 26, marginTop: 34 }}>
                <Trust label="Open" value="Mon to Sat, 6 to 9 PM" />
                <Trust label="Care by" value={`${CLINIC.doctor.name}, ${CLINIC.doctor.title}`} />
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <div style={{ borderRadius: 24, overflow: "hidden", boxShadow: "0 24px 60px rgba(162,29,88,0.16)", border: "1px solid var(--rose-soft)" }}>
                <Image src={CLINIC.images.hero.src} alt={CLINIC.images.hero.alt} width={760} height={680}
                  priority sizes="(max-width: 860px) 100vw, 46vw"
                  style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }} />
              </div>
              <div style={{ position: "absolute", left: -10, bottom: -18, background: "#fff", border: "1px solid var(--line)", borderRadius: 16, padding: "16px 20px", boxShadow: "0 12px 30px rgba(42,38,48,0.10)" }}>
                <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--rose)" }}>Now welcoming patients</p>
                <p className="muted" style={{ fontSize: 13.5, marginTop: 4 }}>Call or WhatsApp {CLINIC.phoneDisplay}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== STAGES STRIP ===================== */}
      <section className="section">
        <div className="container-k">
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
            <p className="eyebrow">Care at every stage</p>
            <h2 style={{ fontSize: "clamp(26px, 3.6vw, 38px)", marginTop: 12 }}>From adolescence to menopause, and beyond</h2>
            <p className="lead" style={{ marginTop: 14 }}>Whatever stage of life you are in, you deserve care that is gentle, informed, and unhurried.</p>
          </div>
          <div className="stage-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18, marginTop: 44 }}>
            {STAGES.map((s) => (
              <div key={s.name} className="card" style={{ padding: 0, overflow: "hidden" }}>
                <div style={{ position: "relative", aspectRatio: "16/10" }}>
                  <Image src={s.image.src} alt={s.image.alt} fill sizes="(max-width: 860px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: "20px 22px 24px" }}>
                  <h3 style={{ fontSize: 19 }}>{s.name}</h3>
                  <p className="muted" style={{ fontSize: 14.5, marginTop: 8, lineHeight: 1.65 }}>{s.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <Link href="/womens-care/" className="btn-ghost">See all of women&rsquo;s care →</Link>
          </div>
        </div>
      </section>

      {/* ===================== DOCTOR PREVIEW ===================== */}
      <section className="section section-tint">
        <div className="container-k">
          <div className="doctor-grid" style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 52, alignItems: "center" }}>
            <div style={{ borderRadius: 22, overflow: "hidden", border: "1px solid var(--rose-soft)", boxShadow: "0 18px 44px rgba(162,29,88,0.12)", background: "#fff" }}>
              <Image src={CLINIC.doctor.photo.src} alt={CLINIC.doctor.photo.alt} width={600} height={600}
                sizes="(max-width: 860px) 100vw, 40vw" style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }} />
            </div>
            <div>
              <p className="eyebrow">Meet your doctor</p>
              <h2 style={{ fontSize: "clamp(26px, 3.6vw, 38px)", marginTop: 12 }}>{CLINIC.doctor.name}</h2>
              <p style={{ color: "var(--rose-deep)", fontWeight: 600, marginTop: 6 }}>{CLINIC.doctor.title}</p>
              <p className="lead" style={{ marginTop: 18 }}>
                {CLINIC.doctor.bio.split("\n\n")[0]}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 22 }}>
                {CLINIC.doctor.credentials.map((c) => <span key={c} className="chip">{c}</span>)}
              </div>
              <p className="muted" style={{ fontSize: 14.5, marginTop: 18 }}>
                Consultant, Department of Obstetrics &amp; Gynaecology, {CLINIC.doctor.hospital.split(",")[0]}.
              </p>
              <div style={{ marginTop: 26 }}>
                <Link href="/about/" className="btn-ghost">Read full profile →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SERVICES PREVIEW ===================== */}
      <section className="section">
        <div className="container-k">
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 16 }}>
            <div>
              <p className="eyebrow">What we offer</p>
              <h2 style={{ fontSize: "clamp(26px, 3.6vw, 38px)", marginTop: 12 }}>Complete women&rsquo;s healthcare</h2>
            </div>
            <Link href="/services/" className="btn-ghost">All {SERVICES.length} services →</Link>
          </div>
          <div className="svc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 36 }}>
            {SERVICES.slice(0, 6).map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}/`} className="card" style={{ display: "block" }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: "var(--bg-tint)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  <span style={{ color: "var(--rose)", fontSize: 20 }}>✚</span>
                </div>
                <h3 style={{ fontSize: 17.5 }}>{s.name.replace(/\s*\(.*\)/, "")}</h3>
                <p className="muted" style={{ fontSize: 14, marginTop: 8, lineHeight: 1.6 }}>{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CONDITIONS WE HELP WITH ===================== */}
      <section className="section section-tint">
        <div className="container-k">
          <div style={{ textAlign: "center", maxWidth: 660, margin: "0 auto" }}>
            <p className="eyebrow">Conditions we help with</p>
            <h2 style={{ fontSize: "clamp(26px, 3.6vw, 38px)", marginTop: 12 }}>Common concerns, explained simply</h2>
            <p className="lead" style={{ marginTop: 14 }}>
              Clear, doctor-reviewed guides on the conditions and care we provide. Read about your concern, then book a visit when you are ready.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginTop: 34, maxWidth: 880, marginInline: "auto" }}>
            {ARTICLES.map((a) => (
              <Link key={a.slug} href={`/services/${a.slug}/`} className="chip" style={{ fontSize: 13.5, padding: "9px 16px", background: "#fff" }}>
                {a.name.replace(/\s*\(.*\)/, "")}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== VALUES ===================== */}
      <section className="section">
        <div className="container-k">
          <div className="value-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 22 }}>
            {VALUES.map((v) => (
              <div key={v.title}>
                <div style={{ fontSize: 26 }}>{v.icon}</div>
                <h3 style={{ fontSize: 18, marginTop: 12 }}>{v.title}</h3>
                <p className="muted" style={{ fontSize: 14, marginTop: 8, lineHeight: 1.65 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHAT TO EXPECT ===================== */}
      <section className="section section-tint">
        <div className="container-k">
          <div style={{ textAlign: "center", maxWidth: 620, margin: "0 auto" }}>
            <p className="eyebrow">Your first visit</p>
            <h2 style={{ fontSize: "clamp(26px, 3.6vw, 38px)", marginTop: 12 }}>Simple, unhurried, and on your terms</h2>
          </div>
          <div className="step-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18, marginTop: 40 }}>
            {STEPS.map((s, i) => (
              <div key={s.title} className="card">
                <span style={{ width: 34, height: 34, borderRadius: 999, background: "var(--rose)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14 }}>{i + 1}</span>
                <h3 style={{ fontSize: 18, marginTop: 14 }}>{s.title}</h3>
                <p className="muted" style={{ fontSize: 14.5, marginTop: 8, lineHeight: 1.65 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA BAND ===================== */}
      <section style={{ background: "linear-gradient(135deg, var(--rose) 0%, var(--rose-deep) 100%)" }}>
        <div className="container-k" style={{ padding: "66px 22px", textAlign: "center" }}>
          <h2 style={{ color: "#fff", fontSize: "clamp(26px, 3.6vw, 38px)" }}>Ready to see Dr. Santhalakshmi?</h2>
          <p style={{ color: "rgba(255,255,255,0.9)", marginTop: 14, fontSize: 17, maxWidth: 560, marginInline: "auto" }}>
            Call or send a WhatsApp message and we will help you find a suitable time. Open {CLINIC.hours.days}, {CLINIC.hours.openDisplay} to {CLINIC.hours.closeDisplay}.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 30 }}>
            <a href={CLINIC.bookingUrl} target="_blank" rel="noopener noreferrer" style={{ ...whiteBtn }}>Book Online</a>
            <a href={`tel:${CLINIC.phoneRaw}`} style={{ ...whiteOutlineBtn }}>Call {CLINIC.phoneDisplay}</a>
            <a href={`https://wa.me/${CLINIC.whatsapp}`} target="_blank" rel="noopener noreferrer" style={{ ...whiteOutlineBtn }}>WhatsApp Us</a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 860px) {
          .hero-grid, .doctor-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
          .stage-grid, .svc-grid, .step-grid { grid-template-columns: 1fr 1fr !important; }
          .value-grid { grid-template-columns: 1fr 1fr !important; gap: 28px !important; }
        }
        @media (max-width: 560px) {
          .stage-grid, .svc-grid, .value-grid, .step-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}

function Trust({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-faint)" }}>{label}</p>
      <p style={{ fontSize: 14.5, fontWeight: 600, color: "var(--ink)", marginTop: 4 }}>{value}</p>
    </div>
  );
}

const STEPS = [
  { title: "Book a time", body: "Call or WhatsApp us to reserve a slot. We will find a time that suits you." },
  { title: "Talk it through", body: "Dr. Santhalakshmi listens to your concern, examines if needed, and explains things in plain language." },
  { title: "A plan that fits you", body: "You leave with a clear next step, whether that is reassurance, tests, treatment, or a follow-up." },
];

const VALUES = [
  { icon: "🤍", title: "Compassionate", body: "Care that begins with listening, in a calm and respectful setting." },
  { icon: "🩺", title: "Experienced", body: "OB-GYN training across pregnancy, delivery, and gynaecology." },
  { icon: "💬", title: "Clear guidance", body: "Plain-language explanations so you understand every step." },
  { icon: "🔒", title: "Confidential", body: "Your privacy is respected at every visit, at every age." },
];

const whiteBtn: React.CSSProperties = { display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 26px", borderRadius: 999, background: "#fff", color: "var(--rose-deep)", fontWeight: 700, fontSize: 15 };
const whiteOutlineBtn: React.CSSProperties = { display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 26px", borderRadius: 999, background: "transparent", color: "#fff", fontWeight: 600, fontSize: 15, border: "1px solid rgba(255,255,255,0.6)" };
