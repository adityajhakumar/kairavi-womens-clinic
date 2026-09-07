import Link from "next/link";
import Image from "next/image";
import { CLINIC, SERVICES } from "@/lib/clinic";

export function Footer() {
  return (
    <footer style={{ background: "var(--bg-tint)", borderTop: "1px solid var(--line)" }}>
      <div className="container-k" style={{ padding: "62px 22px 32px" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr", gap: 40 }}>
          {/* brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Image src="/images/logo-mark.png" alt="" aria-hidden="true" width={469} height={784}
                style={{ height: 52, width: "auto", display: "block" }} />
              <div style={{ fontFamily: "var(--font-newsreader), serif", fontSize: 21, fontWeight: 600 }}>
                Kairavi <span style={{ color: "var(--rose)" }}>Women&rsquo;s Clinic</span>
              </div>
            </div>
            <p className="muted" style={{ marginTop: 12, fontSize: 14.5, maxWidth: 320 }}>{CLINIC.tagline}</p>
            <p className="muted" style={{ marginTop: 16, fontSize: 13.5 }}>
              Led by {CLINIC.doctor.name}<br />{CLINIC.doctor.title}
            </p>
          </div>

          {/* explore */}
          <div>
            <p style={footHead}>Explore</p>
            <FootLink href="/about/">About the Doctor</FootLink>
            <FootLink href="/services/">Services</FootLink>
            <FootLink href="/womens-care/">Women&rsquo;s Care</FootLink>
            <FootLink href="/patient-guide/">Patient Guide</FootLink>
            <FootLink href="/blog/">Blog</FootLink>
            <FootLink href="/camps/">Camps</FootLink>
            <FootLink href="/faq/">FAQ</FootLink>
            <FootLink href="/contact/">Contact &amp; Booking</FootLink>
          </div>

          {/* services */}
          <div>
            <p style={footHead}>Care</p>
            {SERVICES.slice(0, 6).map((s) => (
              <FootLink key={s.slug} href={`/services/${s.slug}/`}>{s.name.replace(/\s*\(.*\)/, "")}</FootLink>
            ))}
          </div>

          {/* contact */}
          <div>
            <p style={footHead}>Visit Us</p>
            <p className="muted" style={{ fontSize: 13.5, lineHeight: 1.7 }}>{CLINIC.address.full}</p>
            <p className="muted" style={{ fontSize: 13.5, marginTop: 10 }}>{CLINIC.address.landmark}</p>
            <p style={{ fontSize: 13.5, marginTop: 14 }}>
              <a href={`tel:${CLINIC.phoneRaw}`} style={{ color: "var(--rose-deep)", fontWeight: 600 }}>{CLINIC.phoneDisplay}</a>
            </p>
            <p style={{ fontSize: 13.5, marginTop: 4 }}>
              <a href={`mailto:${CLINIC.email}`} style={{ color: "var(--ink-soft)" }}>{CLINIC.email}</a>
            </p>
            <p className="muted" style={{ fontSize: 13.5, marginTop: 10 }}>
              {CLINIC.hours.days}: {CLINIC.hours.openDisplay} to {CLINIC.hours.closeDisplay}
            </p>
          </div>
        </div>

        <hr className="divider" style={{ margin: "40px 0 22px" }} />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "space-between", alignItems: "center" }}>
          <p className="muted" style={{ fontSize: 13 }}>
            © {YEAR} {CLINIC.name}. Kelambakkam, Chennai.
          </p>
          <div style={{ display: "flex", gap: 18, fontSize: 13 }}>
            <a href={CLINIC.instagramUrl} target="_blank" rel="noopener noreferrer" className="muted">Instagram</a>
            <a href={`https://wa.me/${CLINIC.whatsapp}`} target="_blank" rel="noopener noreferrer" className="muted">WhatsApp</a>
            <Link href="/faq/" className="muted">FAQ</Link>
          </div>
        </div>
        <p className="muted" style={{ fontSize: 11.5, marginTop: 18, lineHeight: 1.6 }}>
          The information on this website is for general awareness and does not replace professional medical advice.
          Please consult a qualified doctor for diagnosis and treatment.
        </p>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 520px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

// Static year keeps `output: export` deterministic (no new Date() at request time).
const YEAR = 2026;
const footHead: React.CSSProperties = { fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-faint)", marginBottom: 14 };

function FootLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="foot-link"
      style={{ display: "block", fontSize: 14, color: "var(--ink-soft)", padding: "5px 0" }}>
      {children}
    </Link>
  );
}
