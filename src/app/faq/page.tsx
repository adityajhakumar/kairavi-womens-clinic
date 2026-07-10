import Link from "next/link";
import type { Metadata } from "next";
import { CLINIC, FAQS, META } from "@/lib/clinic";
import { buildMetadata } from "@/lib/meta";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description: META.faq,
  path: "/faq/",
});

export default function FaqPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq/" }])} />
      <JsonLd data={faqSchema()} />

      <section style={{ background: "var(--bg-tint)" }}>
        <div className="container-k" style={{ padding: "54px 22px 56px" }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: "var(--ink-faint)", marginBottom: 22 }}>
            <Link href="/" style={{ color: "var(--ink-faint)" }}>Home</Link> <span>›</span> <span style={{ color: "var(--rose-deep)" }}>FAQ</span>
          </nav>
          <p className="eyebrow">Good to know</p>
          <h1 style={{ fontSize: "clamp(32px, 4.6vw, 50px)", marginTop: 14 }}>Frequently asked questions</h1>
          <p className="lead" style={{ marginTop: 16, maxWidth: 600 }}>
            Answers to common questions about appointments, timings, and the care we provide. If you do not see your
            question, please call us.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          {FAQS.map((f) => (
            <details key={f.question} className="faq-item">
              <summary>
                {f.question}
                <span className="plus" aria-hidden>+</span>
              </summary>
              <div className="faq-answer">{f.answer}</div>
            </details>
          ))}

          <div style={{ marginTop: 44, textAlign: "center", background: "var(--bg-tint)", borderRadius: 18, padding: "34px 24px" }}>
            <h2 style={{ fontSize: 23 }}>Still have a question?</h2>
            <p className="muted" style={{ marginTop: 10, fontSize: 15 }}>
              We are happy to help. Reach us during clinic hours.
            </p>
            <div style={{ marginTop: 22, display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <a href={`tel:${CLINIC.phoneRaw}`} className="btn-primary">Call {CLINIC.phoneDisplay}</a>
              <Link href="/contact/" className="btn-ghost">Contact &amp; Map →</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
