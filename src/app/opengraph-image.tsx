import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const dynamic = "force-static";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Kairavi Women's Clinic, Kelambakkam, Chennai";

export default function Image() {
  return renderOgCard({
    eyebrow: "OB-GYN Clinic",
    title: "Compassionate care for women, at every stage of life",
    subtitle: "Kelambakkam, Chennai · Mon to Sat, 6 to 9 PM",
  });
}
