import Link from "next/link";
import type { Metadata } from "next";
import { CLINIC, META } from "@/lib/clinic";
import { buildMetadata } from "@/lib/meta";
import { breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Contact & Appointments",
  description: META.contact,
  path: "/contact/",
});

const mapsEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(
  CLINIC.address.full,
)}&z=15&output=embed`;

export default function ContactPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact/" }])} />

      <section style={{ background: "var(--bg-tint)" }}>
        <div className="container-k" style={{ padding: "54px 22px 56px" }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: "var(--ink-faint)", marginBottom: 22 }}>
            <Link href="/" style={{ color: "var(--ink-faint)" }}>Home</Link> <span>›</span> <span style={{ color: "var(--rose-deep)" }}>Contact</span>
          </nav>
          <p className="eyebrow">Visit us</p>
          <h1 style={{ fontSize: "clamp(32px, 4.6vw, 50px)", marginTop: 14 }}>Book an appointment</h1>
          <p className="lead" style={{ marginTop: 16, maxWidth: 600 }}>
            Call or send a WhatsApp message and we will help you find a suitable time. We look forward to caring for you.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-k">
          <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 40 }}>
            {/* details */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <InfoCard label="Call or WhatsApp" main={CLINIC.phoneDisplay} href={`tel:${CLINIC.phoneRaw}`}
                sub="Tap to call, or message us on WhatsApp" extra={<a href={`https://wa.me/${CLINIC.whatsapp}`} target="_blank" rel="noopener noreferrer" style={{ color: "var(--rose-deep)", fontWeight: 600, fontSize: 14 }}>Open WhatsApp →</a>} />
              <InfoCard label="Email" main={CLINIC.email} href={`mailto:${CLINIC.email}`} sub="We reply within clinic hours" />
              <InfoCard label="Clinic hours" main={`${CLINIC.hours.openDisplay} to ${CLINIC.hours.closeDisplay}`}
                sub={`${CLINIC.hours.days}. Closed on ${CLINIC.hours.closed}.`} />
              <div className="card">
                <p style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-faint)" }}>Address</p>
                <p style={{ fontSize: 16, fontWeight: 600, marginTop: 8, lineHeight: 1.6 }}>{CLINIC.address.full}</p>
                <p className="muted" style={{ fontSize: 14, marginTop: 8 }}>{CLINIC.address.landmark}</p>
                <a href={CLINIC.googleMapsSearch} target="_blank" rel="noopener noreferrer" style={{ color: "var(--rose-deep)", fontWeight: 600, fontSize: 14, marginTop: 12, display: "inline-block" }}>
                  Get directions →
                </a>
              </div>
              <div className="card">
                <p style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-faint)" }}>Follow us</p>
                <a href={CLINIC.instagramUrl} target="_blank" rel="noopener noreferrer" style={{ color: "var(--rose-deep)", fontWeight: 600, fontSize: 15, marginTop: 8, display: "inline-block" }}>
                  Instagram @{CLINIC.instagram} →
                </a>
              </div>
            </div>

            {/* map */}
            <div>
              <div style={{ borderRadius: 18, overflow: "hidden", border: "1px solid var(--line)", height: "100%", minHeight: 420 }}>
                <iframe
                  title="Kairavi Women's Clinic location map"
                  src={mapsEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0, width: "100%", height: "100%", minHeight: 420 }}
                />
              </div>
              <a href={CLINIC.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: 18 }}>
                Book an Appointment
              </a>
            </div>
          </div>

          <div className="contact-extra" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22, marginTop: 44 }}>
            <div className="card">
              <h2 style={{ fontSize: 21 }}>Your first visit</h2>
              <p className="muted" style={{ fontSize: 14.5, marginTop: 10 }}>A few things to bring so we can help you well:</p>
              <ul style={{ listStyle: "none", padding: 0, marginTop: 12 }}>
                {["Any previous records, scan and test reports", "A list of medicines you currently take", "Details of past pregnancies, if any", "Your last menstrual period date, if you know it", "Photo ID and any insurance details"].map((t) => (
                  <li key={t} style={{ display: "flex", gap: 10, padding: "7px 0" }}>
                    <span style={{ color: "var(--rose)", flexShrink: 0 }}>›</span>
                    <span className="muted" style={{ fontSize: 14.5, lineHeight: 1.6 }}>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h2 style={{ fontSize: 21 }}>Getting here</h2>
              <p className="muted" style={{ fontSize: 14.5, marginTop: 10, lineHeight: 1.7 }}>
                We are in Kelambakkam, on the OMR side of Chennai. {CLINIC.address.full}. {CLINIC.address.landmark}.
              </p>
              <p className="muted" style={{ fontSize: 14.5, marginTop: 10, lineHeight: 1.7 }}>
                If you are travelling and need directions, call or WhatsApp us on {CLINIC.phoneDisplay} and we will guide you.
              </p>
              <a href={CLINIC.googleMapsSearch} target="_blank" rel="noopener noreferrer" style={{ color: "var(--rose-deep)", fontWeight: 600, fontSize: 14, marginTop: 14, display: "inline-block" }}>
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`@media (max-width: 820px){ .contact-grid, .contact-extra{ grid-template-columns:1fr !important; } }`}</style>
    </main>
  );
}

function InfoCard({ label, main, sub, href, extra }: { label: string; main: string; sub: string; href?: string; extra?: React.ReactNode }) {
  const body = (
    <>
      <p style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-faint)" }}>{label}</p>
      <p style={{ fontSize: 18, fontWeight: 600, marginTop: 8, color: "var(--ink)" }}>{main}</p>
      <p className="muted" style={{ fontSize: 14, marginTop: 6 }}>{sub}</p>
      {extra && <div style={{ marginTop: 10 }}>{extra}</div>}
    </>
  );
  return href ? <a href={href} className="card" style={{ display: "block" }}>{body}</a> : <div className="card">{body}</div>;
}
