import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { CLINIC, META } from "@/lib/clinic";
import { buildMetadata } from "@/lib/meta";
import { breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "About Dr. Santhalakshmi S",
  description: META.about,
  path: "/about/",
});

const CREDENTIALS = [
  { degree: "Fellowship in Gynaecologic Endoscopy (Laparoscopy)", place: "Patel's Minimal Access Gynecology Team, Aurangabad", year: "" },
  { degree: "DNB, Obstetrics & Gynaecology", place: "G. Kuppuswamy Naidu Memorial Hospital", year: "" },
  { degree: "D.G.O (Diploma in Gynaecology & Obstetrics)", place: "Thanjavur Medical College", year: "" },
  { degree: "MBBS", place: "Coimbatore Medical College", year: "" },
];

const EXPERIENCE = [
  "Consultant, Department of Obstetrics & Gynaecology, Chettinad Super Speciality Hospital, Kelambakkam",
  "Consultant, Dr. Kamakshi Memorial Hospitals",
  "DNB Trainee, G. Kuppuswamy Naidu Memorial Hospital",
  "Assistant Surgeon, Government District Headquarters Hospital, Cheyyar",
  "Senior Resident, Government Thiruvannamalai Medical College and Hospital",
];

export default function AboutPage() {
  const bioParas = CLINIC.doctor.bio.split("\n\n");
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about/" }])} />

      <section style={{ background: "var(--bg-tint)" }}>
        <div className="container-k" style={{ padding: "54px 22px 60px" }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: "var(--ink-faint)", marginBottom: 24 }}>
            <Link href="/" style={{ color: "var(--ink-faint)" }}>Home</Link> <span>›</span> <span style={{ color: "var(--rose-deep)" }}>About</span>
          </nav>
          <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 50, alignItems: "center" }}>
            <div style={{ borderRadius: 22, overflow: "hidden", border: "1px solid var(--rose-soft)", boxShadow: "0 18px 44px rgba(162,29,88,0.12)", background: "#fff" }}>
              <Image src={CLINIC.doctor.photo.src} alt={CLINIC.doctor.photo.alt} width={560} height={560}
                priority sizes="(max-width: 860px) 100vw, 38vw" style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }} />
            </div>
            <div>
              <p className="eyebrow">About the doctor</p>
              <h1 style={{ fontSize: "clamp(32px, 4.6vw, 50px)", marginTop: 14 }}>{CLINIC.doctor.name}</h1>
              <p style={{ color: "var(--rose-deep)", fontWeight: 600, fontSize: 18, marginTop: 8 }}>{CLINIC.doctor.title}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 18 }}>
                {CLINIC.doctor.credentials.map((c) => <span key={c} className="chip">{c}</span>)}
              </div>
              <p className="muted" style={{ fontSize: 14.5, marginTop: 18 }}>
                Areas of focus: high-risk pregnancy, obstetric emergency care, and minimally invasive gynaecological procedures.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          {bioParas.map((p, i) => (
            <p key={i} className="lead" style={{ marginBottom: 20 }}>{p}</p>
          ))}

          <hr className="divider" style={{ margin: "44px 0" }} />

          <h2 style={{ fontSize: 26 }}>Qualifications</h2>
          <div style={{ marginTop: 22, display: "flex", flexDirection: "column", gap: 14 }}>
            {CREDENTIALS.map((c) => (
              <div key={c.degree} className="card" style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "baseline" }}>
                <div>
                  <p style={{ fontWeight: 600, fontSize: 16 }}>{c.degree}</p>
                  <p className="muted" style={{ fontSize: 14, marginTop: 4 }}>{c.place}</p>
                </div>
                {c.year && <span className="chip">{c.year}</span>}
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 26, marginTop: 48 }}>Fellowship &amp; advanced training</h2>
          <div className="card" style={{ marginTop: 18, borderColor: "var(--rose-soft)", background: "var(--bg-tint)" }}>
            <p style={{ fontWeight: 600, fontSize: 17 }}>Surgical Fellowship in Gynaecologic Endoscopy</p>
            <p className="muted" style={{ fontSize: 14.5, marginTop: 6 }}>
              Gynaecological laparoscopy training with Patel&rsquo;s Minimal Access Gynecology Team, Aurangabad.
            </p>
            <p className="lead" style={{ marginTop: 14, fontSize: 16 }}>
              As a trained laparoscopic surgeon, Dr. Santhalakshmi offers minimally invasive (keyhole) approaches
              for suitable gynaecological conditions. Compared with
              open surgery, keyhole techniques are generally linked to smaller scars, less pain, and a quicker return
              to daily life, though the right approach is always chosen for each individual case.
            </p>
          </div>

          <h2 style={{ fontSize: 26, marginTop: 48 }}>Clinical experience</h2>
          <ul style={{ marginTop: 20, listStyle: "none", padding: 0 }}>
            {EXPERIENCE.map((e) => (
              <li key={e} style={{ display: "flex", gap: 12, padding: "10px 0", borderBottom: "1px solid var(--line)" }}>
                <span style={{ color: "var(--rose)", flexShrink: 0 }}>✦</span>
                <span className="muted" style={{ fontSize: 15, lineHeight: 1.6 }}>{e}</span>
              </li>
            ))}
          </ul>

          <h2 style={{ fontSize: 26, marginTop: 48 }}>Continuing education</h2>
          <p className="lead" style={{ marginTop: 16 }}>
            Dr. Santhalakshmi takes part in Continuing Medical Education programmes, fetal medicine workshops,
            obstetric emergency training, and laparoscopic workshops to keep her knowledge and skills current.
          </p>

          <h2 style={{ fontSize: 26, marginTop: 48 }}>Areas of special interest</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 18 }}>
            {["High-risk pregnancy", "Obstetric emergency care", "Minimally invasive gynaecology", "PCOS and hormonal care", "Menstrual disorders", "Fibroids and endometriosis"].map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>

          <h2 style={{ fontSize: 26, marginTop: 48 }}>What to expect at your visit</h2>
          <p className="lead" style={{ marginTop: 16 }}>
            A consultation with Dr. Santhalakshmi is a calm, two-way conversation. She takes time to understand your
            history and concern, examines only with your consent, and explains your options in plain language so you can
            decide what feels right.
          </p>
          <ul style={{ marginTop: 18, listStyle: "none", padding: 0 }}>
            {["Unhurried time to ask questions and be heard", "Examinations and tests explained before they happen", "Clear, jargon-free explanations of your options", "Privacy and confidentiality respected at every age"].map((t) => (
              <li key={t} style={{ display: "flex", gap: 12, padding: "8px 0", borderBottom: "1px solid var(--line)" }}>
                <span style={{ color: "var(--rose)", flexShrink: 0 }}>✓</span>
                <span className="muted" style={{ fontSize: 15, lineHeight: 1.6 }}>{t}</span>
              </li>
            ))}
          </ul>

          <h2 style={{ fontSize: 26, marginTop: 48 }}>See Dr. Santhalakshmi at Kairavi</h2>
          <p className="muted" style={{ fontSize: 14.5, marginTop: 10 }}>
            She consults at Kairavi Women&rsquo;s Clinic, Kelambakkam, {CLINIC.hours.days},{" "}
            {CLINIC.hours.openDisplay} to {CLINIC.hours.closeDisplay}. To reach the clinic directly:
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 16 }}>
            <a href={`https://wa.me/${CLINIC.whatsapp}`} target="_blank" rel="noopener noreferrer" className="chip" style={{ textDecoration: "none" }}>
              WhatsApp the clinic ↗
            </a>
            <a href={CLINIC.googleMapsSearch} target="_blank" rel="noopener noreferrer" className="chip" style={{ textDecoration: "none" }}>
              Get directions ↗
            </a>
            <a href={CLINIC.instagramUrl} target="_blank" rel="noopener noreferrer" className="chip" style={{ textDecoration: "none" }}>
              @{CLINIC.instagram} on Instagram ↗
            </a>
          </div>

          <div style={{ marginTop: 40, display: "flex", flexWrap: "wrap", gap: 14 }}>
            <a href={CLINIC.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">Book an Appointment</a>
            <a href={`tel:${CLINIC.phoneRaw}`} className="btn-ghost">Call {CLINIC.phoneDisplay}</a>
          </div>
        </div>
      </section>

      <style>{`@media (max-width: 860px){ .about-grid{ grid-template-columns:1fr !important; gap:32px !important; } }`}</style>
    </main>
  );
}
