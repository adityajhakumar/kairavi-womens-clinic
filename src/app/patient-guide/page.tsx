import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { CLINIC } from "@/lib/clinic";
import { buildMetadata } from "@/lib/meta";
import { breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Patient Guide: Delivery, Scans, Food & Blood Tests",
  description:
    "Simple guidance on delivery, pregnancy scans, healthy eating, and common blood tests at Kairavi Women's Clinic, Kelambakkam. General information reviewed by Dr. Santhalakshmi S.",
  path: "/patient-guide/",
});

interface Section {
  id: string;
  title: string;
  image: { src: string; alt: string };
  paragraphs: string[];
  bullets: string[];
}

const SECTIONS: Section[] = [
  {
    id: "delivery",
    title: "Delivery",
    image: { src: "/images/pregnancy-care.jpg", alt: "Expecting mother cradling her pregnant belly" },
    paragraphs: [
      "As your due date nears, it helps to know what to expect and when to come in. Most babies are born through a normal vaginal delivery. Sometimes a little help is needed with a vacuum or forceps, and in some situations a caesarean section is the safer choice. We will discuss your options during your antenatal visits and explain each decision clearly as it comes up.",
      "Keep a hospital bag ready in your final weeks, and make sure you know how to reach us when labour begins. If anything feels urgent, please seek care without waiting for your next appointment.",
    ],
    bullets: [
      "Signs labour may be starting: regular, strengthening contractions or your waters breaking",
      "Come in or call promptly for any bleeding, reduced baby movements, severe headache, or blurred vision",
      "Pain relief options are discussed with you beforehand so you can choose what suits you",
      "Pack your records, scan reports, comfortable clothes, and baby essentials in your hospital bag",
    ],
  },
  {
    id: "scans",
    title: "Scans (Ultrasound)",
    image: { src: "/images/gynecology.jpg", alt: "Doctor reviewing a scan with a patient in a clinic" },
    paragraphs: [
      "Ultrasound scans use sound waves to create a picture of your baby. They are painless and considered safe in pregnancy. Scans help us confirm your dates, check your baby's growth and development, and look at the position of the placenta.",
      "The number and timing of scans can be tailored to you. If your pregnancy needs closer monitoring, your doctor may suggest a few extra scans.",
    ],
    bullets: [
      "An early dating scan to confirm how many weeks pregnant you are",
      "A mid-pregnancy scan, usually around 18 to 21 weeks, to check your baby's growth and development",
      "Growth scans later in pregnancy if extra monitoring is needed",
      "Scans are painless and safe; you may be asked to come with a comfortably full bladder for early scans",
    ],
  },
  {
    id: "food",
    title: "Food & Nutrition",
    image: { src: "/images/wellness-preventive.jpg", alt: "Fresh, balanced food and healthy lifestyle" },
    paragraphs: [
      "Eating well supports both you and your baby. There is no need for anything fancy or expensive. A balanced plate with a variety of everyday foods, along with the supplements your doctor advises, covers most of what you need.",
      "A little care with food hygiene and a few foods to limit can help you stay well through pregnancy. If you have a condition such as diabetes or anaemia, we will give you guidance suited to you.",
    ],
    bullets: [
      "Include a variety of fruits, vegetables, whole grains, pulses, dairy, and good protein",
      "Take iron, folic acid, and calcium as advised by your doctor",
      "Wash fruits and vegetables well, and avoid raw or undercooked meat and eggs",
      "Drink plenty of water, and limit caffeine and very sugary or fried foods",
      "Avoid alcohol and tobacco completely during pregnancy",
    ],
  },
  {
    id: "blood-tests",
    title: "Blood Tests",
    image: { src: "/images/clinic-interior.jpg", alt: "Clean, modern clinic where tests are carried out" },
    paragraphs: [
      "A few simple blood tests during pregnancy help us keep you and your baby healthy. They let us pick up common issues early, such as low iron or high blood sugar, so they can be managed in good time.",
      "We will explain why each test is suggested and what the results mean. Please bring any earlier reports you have to your visits.",
    ],
    bullets: [
      "Haemoglobin, to check for anaemia (low iron)",
      "Blood group and Rh typing, which is important during pregnancy",
      "Blood sugar, including a glucose test often offered around 24 to 28 weeks for gestational diabetes",
      "Thyroid function, as thyroid changes can affect pregnancy",
      "Screening for certain infections, as advised",
    ],
  },
];

export default function PatientGuidePage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Patient Guide", path: "/patient-guide/" }])} />

      <section style={{ background: "var(--bg-tint)" }}>
        <div className="container-k" style={{ padding: "54px 22px 56px" }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: "var(--ink-faint)", marginBottom: 22 }}>
            <Link href="/" style={{ color: "var(--ink-faint)" }}>Home</Link> <span>›</span> <span style={{ color: "var(--rose-deep)" }}>Patient Guide</span>
          </nav>
          <p className="eyebrow">Helpful information</p>
          <h1 style={{ fontSize: "clamp(32px, 4.6vw, 50px)", marginTop: 14, maxWidth: 780 }}>
            Your guide to delivery, scans, food &amp; tests
          </h1>
          <p className="lead" style={{ marginTop: 18, maxWidth: 660 }}>
            Simple, reassuring information on what to expect during pregnancy and care, from delivery and
            ultrasound scans to healthy eating and the common blood tests. For general awareness, not a
            replacement for your own consultation.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 24 }}>
            {SECTIONS.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="chip" style={{ textDecoration: "none" }}>{s.title}</a>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-k" style={{ display: "flex", flexDirection: "column", gap: 46 }}>
          {SECTIONS.map((s, i) => (
            <article key={s.id} id={s.id} className="guide-row card" style={{ display: "grid", gridTemplateColumns: i % 2 === 0 ? "0.85fr 1.15fr" : "1.15fr 0.85fr", gap: 30, alignItems: "center", padding: 18, scrollMarginTop: 90 }}>
              <div style={{ order: i % 2 === 0 ? 0 : 1, borderRadius: 14, overflow: "hidden", position: "relative", aspectRatio: "4/3" }}>
                <Image src={s.image.src} alt={s.image.alt} fill sizes="(max-width: 860px) 100vw, 40vw" style={{ objectFit: "cover" }} />
              </div>
              <div style={{ order: i % 2 === 0 ? 1 : 0, padding: "8px 18px" }}>
                <span className="chip">{String(i + 1).padStart(2, "0")}</span>
                <h2 style={{ fontSize: 26, marginTop: 14 }}>{s.title}</h2>
                {s.paragraphs.map((p, pi) => (
                  <p key={pi} className="muted" style={{ fontSize: 15.5, marginTop: 12, lineHeight: 1.75 }}>{p}</p>
                ))}
                <ul style={{ listStyle: "none", padding: 0, marginTop: 14 }}>
                  {s.bullets.map((b, bi) => (
                    <li key={bi} style={{ display: "flex", gap: 12, padding: "6px 0" }}>
                      <span style={{ color: "var(--rose)", flexShrink: 0 }}>›</span>
                      <span className="muted" style={{ fontSize: 15, lineHeight: 1.65 }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="container-narrow" style={{ marginTop: 52 }}>
          <div style={{ background: "var(--bg-tint)", borderRadius: 18, padding: "32px 26px", textAlign: "center" }}>
            <h2 style={{ fontSize: 24 }}>Have a question about your care?</h2>
            <p className="muted" style={{ marginTop: 10, fontSize: 15, maxWidth: 480, marginInline: "auto" }}>
              Every pregnancy and every woman is different. For guidance suited to you, please talk to Dr. Santhalakshmi.
            </p>
            <div style={{ marginTop: 20, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href={`tel:${CLINIC.phoneRaw}`} className="btn-primary">Call {CLINIC.phoneDisplay}</a>
              <a href={`https://wa.me/${CLINIC.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-ghost">Message on WhatsApp →</a>
            </div>
          </div>

          <div style={{ marginTop: 28, padding: "18px 20px", borderLeft: "3px solid var(--rose)", background: "var(--bg-tint)", borderRadius: "0 10px 10px 0" }}>
            <p style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.65 }}>
              <strong>Medical disclaimer:</strong> This guide is general health information reviewed by {CLINIC.doctor.name},
              {" "}{CLINIC.doctor.title}. It is for education only and does not replace a personal consultation, diagnosis, or
              treatment. Please consult a qualified doctor about your individual situation.
            </p>
          </div>
        </div>
      </section>

      <style>{`@media (max-width: 760px){ .guide-row{ grid-template-columns:1fr !important; } .guide-row > div{ order:initial !important; } }`}</style>
    </main>
  );
}
