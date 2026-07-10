"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { CLINIC } from "@/lib/clinic";

const LINKS = [
  { label: "About", href: "/about/" },
  { label: "Services", href: "/services/" },
  { label: "Women's Care", href: "/womens-care/" },
  { label: "Patient Guide", href: "/patient-guide/" },
  { label: "Blog", href: "/blog/" },
  { label: "Camps", href: "/camps/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Contact", href: "/contact/" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      style={{
        position: "sticky", top: 0, zIndex: 50,
        background: scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.8)",
        backdropFilter: "saturate(180%) blur(12px)",
        WebkitBackdropFilter: "saturate(180%) blur(12px)",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
        transition: "border-color .2s ease, background .2s ease",
      }}
    >
      <nav className="container-k" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 70 }}>
        <Link href="/" aria-label="Kairavi Women's Clinic home" style={{ display: "flex", alignItems: "center", gap: 11 }}>
          <Image src="/images/logo-mark.png" alt="" aria-hidden="true" width={469} height={784} priority
            style={{ height: 44, width: "auto", display: "block" }} />
          <span style={{ fontFamily: "var(--font-newsreader), serif", fontSize: 20, fontWeight: 600, color: "var(--ink)", letterSpacing: "-0.01em" }}>
            Kairavi <span style={{ color: "var(--rose)" }}>Women&rsquo;s Clinic</span>
          </span>
        </Link>

        {/* desktop links */}
        <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 22 }}>
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link"
              style={{ fontSize: 14, fontWeight: 500, color: "var(--ink-soft)", whiteSpace: "nowrap" }}>
              {l.label}
            </Link>
          ))}
          <a href={CLINIC.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "10px 18px", fontSize: 14, whiteSpace: "nowrap" }}>
            Book Appointment
          </a>
        </div>

        {/* mobile toggle */}
        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          style={{ display: "none", background: "none", border: 0, cursor: "pointer", padding: 8 }}
        >
          <span style={{ display: "block", width: 24, height: 2, background: "var(--ink)", margin: "5px 0", transition: "transform .2s", transform: open ? "translateY(7px) rotate(45deg)" : "none" }} />
          <span style={{ display: "block", width: 24, height: 2, background: "var(--ink)", margin: "5px 0", opacity: open ? 0 : 1 }} />
          <span style={{ display: "block", width: 24, height: 2, background: "var(--ink)", margin: "5px 0", transition: "transform .2s", transform: open ? "translateY(-7px) rotate(-45deg)" : "none" }} />
        </button>
      </nav>

      {/* mobile drawer */}
      {open && (
        <div className="nav-mobile" style={{ borderTop: "1px solid var(--line)", background: "#fff", padding: "12px 0 22px" }}>
          <div className="container-k" style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                style={{ padding: "13px 4px", fontSize: 16, fontWeight: 500, color: "var(--ink)", borderBottom: "1px solid var(--line)" }}>
                {l.label}
              </Link>
            ))}
            <a href={CLINIC.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 14, justifyContent: "center" }} onClick={() => setOpen(false)}>
              Book Appointment
            </a>
          </div>
        </div>
      )}

      <style>{`
        .nav-link:hover { color: var(--rose) !important; }
        @media (max-width: 980px) {
          .nav-desktop { display: none !important; }
          .nav-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}
