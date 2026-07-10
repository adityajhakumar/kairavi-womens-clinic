import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { CLINIC, SITE_URL, META } from "@/lib/clinic";
import { clinicSchema, physicianSchema, websiteSchema } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-newsreader", weight: ["400", "500", "600"], display: "swap" });

// Static-export metadata icons are NOT auto-prefixed with basePath, so prefix
// them here to match next.config.ts (keeps the favicon working on the subpath).
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "/kairavi-womens-clinic";

export const viewport: Viewport = {
  themeColor: "#c2306c",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kairavi Women's Clinic | OB-GYN in Kelambakkam, Chennai",
    template: "%s | Kairavi Women's Clinic",
  },
  description: META.home,
  applicationName: CLINIC.name,
  referrer: "origin-when-cross-origin",
  authors: [{ name: CLINIC.doctor.name }],
  creator: CLINIC.name,
  publisher: CLINIC.name,
  category: "Health",
  alternates: { canonical: `${SITE_URL}/` },
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    title: "Kairavi Women's Clinic | Compassionate OB-GYN Care, Chennai",
    description: META.home,
    url: `${SITE_URL}/`,
    siteName: CLINIC.name,
    images: [{ url: `${SITE_URL}/opengraph-image.png`, secureUrl: `${SITE_URL}/opengraph-image.png`, width: 1200, height: 630, alt: "Kairavi Women's Clinic, Kelambakkam, Chennai", type: "image/png" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kairavi Women's Clinic | OB-GYN in Kelambakkam, Chennai",
    description: META.home,
    images: [`${SITE_URL}/opengraph-image.png`],
  },
  icons: { icon: `${BASE_PATH}/favicon.svg` },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${newsreader.variable}`}>
      <body>
        <JsonLd data={clinicSchema()} />
        <JsonLd data={physicianSchema()} />
        <JsonLd data={websiteSchema()} />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
