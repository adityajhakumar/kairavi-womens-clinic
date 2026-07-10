// Structured-data builders for Kairavi Women's Clinic.
// Medical sites get the richest results from MedicalClinic + Physician +
// LocalBusiness schema with address, geo, opening hours, and specialty. These
// builders are the single source for every JSON-LD block, so the markup never
// drifts from the data in clinic.ts.
import { CLINIC, SERVICES, FAQS, SITE_URL, type FAQ } from "./clinic";

const CLINIC_ID = `${SITE_URL}/#clinic`;
const DOCTOR_ID = `${SITE_URL}/#physician`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: CLINIC.address.line1,
  addressLocality: CLINIC.address.locality,
  addressRegion: CLINIC.address.region,
  postalCode: CLINIC.address.postalCode,
  addressCountry: CLINIC.address.country,
};

const openingHours = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  opens: CLINIC.hours.open,
  closes: CLINIC.hours.close,
};

// The clinic as a MedicalClinic (a LocalBusiness subtype). This is the anchor
// entity, referenced by @id from every page.
export function clinicSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness"],
    "@id": CLINIC_ID,
    name: CLINIC.name,
    description:
      "Women's health and OB-GYN clinic in Kelambakkam, Chennai, led by Dr. Santhalakshmi S. Pregnancy care, deliveries, and gynaecology for women at every stage of life.",
    url: `${SITE_URL}/`,
    telephone: CLINIC.phoneDisplay,
    email: CLINIC.email,
    address: postalAddress,
    geo: { "@type": "GeoCoordinates", latitude: CLINIC.geo.lat, longitude: CLINIC.geo.lng },
    openingHoursSpecification: [openingHours],
    medicalSpecialty: ["Gynecologic", "Obstetric"],
    availableService: SERVICES.map((s) => ({ "@type": "MedicalProcedure", name: s.name })),
    image: `${SITE_URL}${CLINIC.images["clinic-interior"].src}`,
    sameAs: [CLINIC.instagramUrl],
    priceRange: "₹₹",
    areaServed: { "@type": "City", name: "Chennai" },
    physician: { "@id": DOCTOR_ID },
  };
}

// Dr. Santhalakshmi as a Physician.
export function physicianSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": DOCTOR_ID,
    name: CLINIC.doctor.name,
    description: CLINIC.doctor.bio.replace(/\n+/g, " "),
    image: `${SITE_URL}${CLINIC.doctor.photo.src}`,
    jobTitle: CLINIC.doctor.title,
    medicalSpecialty: ["Gynecologic", "Obstetric"],
    url: `${SITE_URL}/about/`,
    sameAs: CLINIC.doctor.profiles.map((p) => p.href),
    worksFor: { "@id": CLINIC_ID },
    workLocation: { "@id": CLINIC_ID },
    address: postalAddress,
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Coimbatore Medical College" },
      { "@type": "CollegeOrUniversity", name: "Thanjavur Medical College" },
      { "@type": "CollegeOrUniversity", name: "G. Kuppuswamy Naidu Memorial Hospital" },
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Fellowship",
        name: "Surgical Fellowship in Gynaecologic Endoscopy (Laparoscopy)",
        recognizedBy: { "@type": "Organization", name: "Patel's Minimal Access Gynecology Team, Aurangabad" },
      },
    ],
    availableService: SERVICES.map((s) => ({ "@type": "MedicalProcedure", name: s.name })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: CLINIC.name,
    url: `${SITE_URL}/`,
    inLanguage: "en-IN",
    publisher: { "@id": CLINIC_ID },
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${SITE_URL}${t.path}`,
    })),
  };
}

export function faqSchema(faqs: FAQ[] = FAQS) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

// A patient-education article as a MedicalWebPage. reviewedBy a real Physician +
// lastReviewed is the medical E-E-A-T signal Google looks for on health content.
export function medicalArticleSchema(a: { slug: string; name: string; metaTitle: string; metaDescription: string; image: { src: string } }) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: a.name,
    headline: a.metaTitle,
    description: a.metaDescription,
    url: `${SITE_URL}/services/${a.slug}/`,
    mainEntityOfPage: `${SITE_URL}/services/${a.slug}/`,
    image: `${SITE_URL}${a.image.src}`,
    inLanguage: "en-IN",
    lastReviewed: "2026-06-02",
    reviewedBy: { "@id": DOCTOR_ID },
    author: { "@id": DOCTOR_ID },
    publisher: { "@id": CLINIC_ID },
    about: { "@type": "MedicalEntity", name: a.name },
    audience: { "@type": "MedicalAudience", audienceType: "Patient" },
  };
}

// A blog article as a BlogPosting, authored + published by the clinic/doctor.
export function blogPostingSchema(p: { slug: string; title: string; excerpt: string; date: string; cover: { src: string }; author: string }) {
  const image = p.cover.src.startsWith("http") ? p.cover.src : `${SITE_URL}${p.cover.src}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: p.title,
    description: p.excerpt,
    url: `${SITE_URL}/blog/${p.slug}/`,
    mainEntityOfPage: `${SITE_URL}/blog/${p.slug}/`,
    image,
    inLanguage: "en-IN",
    datePublished: p.date,
    dateModified: p.date,
    author: { "@id": DOCTOR_ID, name: p.author },
    publisher: { "@id": CLINIC_ID },
  };
}

// Services as an ItemList (good for the services hub).
export function servicesItemList() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Services at Kairavi Women's Clinic",
    itemListElement: SERVICES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: { "@type": "MedicalProcedure", name: s.name, description: s.short },
    })),
  };
}
