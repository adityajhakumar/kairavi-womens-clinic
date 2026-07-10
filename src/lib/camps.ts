// Community health camps for Kairavi Women's Clinic.
// ---------------------------------------------------------------------------
// HOW TO ADD CAMP PHOTOS (no coding experience needed):
//   1. Put your photos in the folder `public/images/camps/`. Give them simple
//      names, e.g. camp1-01.jpg, camp1-02.jpg.
//   2. Add a new { ... } block to the CAMPS array below (copy the commented
//      EXAMPLE at the bottom). Keep the newest camp at the TOP of the array.
//   3. In `photos`, list each image with its path and a short `alt` describing
//      the picture, e.g.
//        { src: "/images/camps/camp1-01.jpg", alt: "Free health check-up camp" }
//   4. Save, commit, and push — the site rebuilds and publishes automatically.
// Please only use photos you have permission to share, and avoid images that
// identify patients without their consent.
// ---------------------------------------------------------------------------

export interface CampPhoto { src: string; alt: string; }
export interface Camp {
  slug: string;
  title: string;
  date: string;         // ISO date, e.g. "2026-07-05"
  dateDisplay: string;  // human date, e.g. "5 July 2026"
  location: string;
  summary: string;
  photos: CampPhoto[];
}

export const CAMPS: Camp[] = [
  // No camps published yet. Add your first one here (see the EXAMPLE below).
];

// ---------------------------------------------------------------------------
// EXAMPLE — copy this into the CAMPS array above and edit it:
//
//   {
//     slug: "free-womens-health-camp-kelambakkam",
//     title: "Free Women's Health Check-up Camp",
//     date: "2026-07-05",
//     dateDisplay: "5 July 2026",
//     location: "Kelambakkam, Chennai",
//     summary:
//       "A free camp offering basic health checks, awareness, and guidance on " +
//       "women's health for the local community.",
//     photos: [
//       { src: "/images/camps/camp1-01.jpg", alt: "Health check-up in progress at the camp" },
//       { src: "/images/camps/camp1-02.jpg", alt: "Awareness session for the community" },
//     ],
//   },
// ---------------------------------------------------------------------------
