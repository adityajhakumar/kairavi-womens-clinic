import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

// Shared 1200x630 OG card for every page. Light theme, deep-rose accent, text
// wordmark (no logo-image dependency). Rendered at build time (output: export,
// Node runtime, so fs works for the embedded fonts).

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const FONT_BOLD = readFileSync(join(process.cwd(), "assets/fonts/Inter-800.woff"));
const FONT_MEDIUM = readFileSync(join(process.cwd(), "assets/fonts/Inter-500.woff"));

function titleFontSize(title: string): number {
  const n = title.length;
  if (n > 80) return 52;
  if (n > 55) return 62;
  if (n > 38) return 70;
  return 78;
}

export interface OgCardProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  footerRight?: string;
}

export function renderOgCard({ eyebrow, title, subtitle, footerRight = "kairaviwomensclinic.com" }: OgCardProps): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #ffffff 0%, #fdf2f7 60%, #fbe4ef 100%)",
          padding: "64px 70px", position: "relative", fontFamily: "Inter",
        }}
      >
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 14, background: "#c2306c" }} />

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 30, fontWeight: 800, color: "#a21d58", letterSpacing: -0.5 }}>
            Kairavi Women&rsquo;s Clinic
          </div>
          <div style={{ display: "flex", fontSize: 22, fontWeight: 800, letterSpacing: 3, color: "#c2306c", border: "2px solid rgba(194,48,108,0.4)", borderRadius: 999, padding: "10px 24px" }}>
            {eyebrow.toUpperCase()}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: titleFontSize(title), fontWeight: 800, color: "#2a2630", lineHeight: 1.1, letterSpacing: -1, maxWidth: 1010 }}>
            {title}
          </div>
          {subtitle ? (
            <div style={{ display: "flex", marginTop: 22, fontSize: 30, fontWeight: 500, color: "#5b525f", lineHeight: 1.25, maxWidth: 980 }}>
              {subtitle}
            </div>
          ) : null}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 25, color: "#8b8392" }}>
          <div style={{ display: "flex" }}>Dr. Santhalakshmi S · Kelambakkam, Chennai</div>
          <div style={{ display: "flex", color: "#c2306c", fontWeight: 800 }}>{footerRight}</div>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Inter", data: FONT_BOLD, weight: 800, style: "normal" },
        { name: "Inter", data: FONT_MEDIUM, weight: 500, style: "normal" },
      ],
    },
  );
}
