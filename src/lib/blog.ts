// Blog posts for Kairavi Women's Clinic.
// ---------------------------------------------------------------------------
// HOW TO ADD A NEW POST (no coding experience needed):
//   1. Add a new { ... } block to the BLOG_POSTS array below. Copy an existing
//      one and change the fields. Keep the newest post at the TOP of the array.
//   2. `slug` becomes the page URL (/blog/<slug>/). Use lowercase-with-dashes,
//      and make it unique.
//   3. The cover image is OPTIONAL. If you leave `cover` out, the post
//      automatically gets a medical photo (see src/lib/blog-image.ts). To set
//      your own, add `cover: { src: "...", alt: "..." }` where src is either a
//      local file in `public/images/blog/` (e.g. "/images/blog/my-photo.jpg")
//      or an Unsplash image URL. Always write a short `alt` describing it.
//   4. `content` is a list of sections. Each section has an optional `heading`,
//      one or more `paragraphs`, and optional `bullets`.
//   5. Save, commit, and push — the site rebuilds and publishes automatically.
// Keep everything medically responsible: general information, no guarantees,
// and always encourage readers to consult the doctor for their own situation.
// ---------------------------------------------------------------------------

export interface BlogSection { heading?: string; paragraphs: string[]; bullets?: string[]; }
export interface BlogPost {
  slug: string;
  title: string;
  date: string;         // ISO date, e.g. "2026-07-10"
  dateDisplay: string;  // human date, e.g. "10 July 2026"
  author: string;
  readingTime: string;  // e.g. "4 min read"
  excerpt: string;      // 1-2 sentence summary for cards + meta description
  cover?: { src: string; alt: string }; // OPTIONAL — omit for an auto medical image
  content: BlogSection[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "welcome-to-the-kairavi-blog",
    title: "Welcome to the Kairavi Women's Clinic blog",
    date: "2026-07-10",
    dateDisplay: "10 July 2026",
    author: "Dr. Santhalakshmi S",
    readingTime: "3 min read",
    excerpt:
      "A warm hello from Kairavi Women's Clinic. Here we will share simple, trustworthy guidance on pregnancy, women's health, and looking after yourself at every stage of life.",
    cover: { src: "/images/clinic-interior.jpg", alt: "Bright, welcoming consultation room at Kairavi Women's Clinic" },
    content: [
      {
        paragraphs: [
          "Welcome, and thank you for visiting. This blog is a space where we will share clear, friendly information about women's health, pregnancy, and everyday wellbeing. Our aim is to answer the questions we hear most often at the clinic, in plain language and without jargon.",
          "Good health decisions are easier when you understand what is happening in your body and what your choices are. We hope these articles help you feel more informed and more at ease, whether you are planning a pregnancy, managing a health concern, or simply looking after yourself.",
        ],
      },
      {
        heading: "What you can expect here",
        paragraphs: [
          "We will keep things practical and honest. Every article is written to be easy to read and is meant for general awareness only, not as a replacement for a consultation. When something needs a doctor's assessment, we will say so.",
        ],
        bullets: [
          "Simple guides to pregnancy care, scans, and tests",
          "Answers to common questions about periods, PCOS, and hormonal health",
          "Tips on nutrition, wellbeing, and preparing for your visit",
          "Updates about our community health camps and clinic news",
        ],
      },
      {
        heading: "A note on using this information",
        paragraphs: [
          "Every woman's body and situation are different. The guidance here is general and may not apply to you exactly. Please treat it as a starting point for a conversation, and reach out to us or your own doctor for advice tailored to you.",
          "If you have a concern you would like us to write about, we would love to hear from you. You can call or message the clinic any time, and we will do our best to cover it in a future post.",
        ],
      },
    ],
  },
  {
    slug: "five-steps-to-prepare-for-a-healthy-pregnancy",
    title: "Five simple steps to prepare for a healthy pregnancy",
    date: "2026-07-10",
    dateDisplay: "10 July 2026",
    author: "Dr. Santhalakshmi S",
    readingTime: "5 min read",
    excerpt:
      "Thinking about a baby? A few simple steps before you conceive can give your pregnancy the best possible start. Here are five gentle things to focus on.",
    cover: { src: "/images/pregnancy-care.jpg", alt: "Expecting mother cradling her pregnant belly with hands forming a heart" },
    content: [
      {
        paragraphs: [
          "Many of the things that support a healthy pregnancy happen in the very first weeks, often before you even know you are pregnant. That is why preparing a little ahead of time can make a real difference. None of this needs to be complicated. Here are five simple steps to focus on.",
        ],
      },
      {
        heading: "1. Start folic acid early",
        paragraphs: [
          "Taking folic acid before and in early pregnancy lowers the chance of certain birth defects of the brain and spine. Most women are advised 400 to 800 micrograms a day, ideally started at least a month before trying to conceive and continued through the first 12 weeks. Some women need a higher dose, so it is worth confirming the right amount with your doctor.",
        ],
      },
      {
        heading: "2. Have a pre-pregnancy check",
        paragraphs: [
          "A simple visit before you conceive lets us review your health, check a few basics such as haemoglobin, blood group, blood sugar, and thyroid, and make sure any long-term condition is well managed. It is also a good time to check that vaccinations, such as protection against rubella, are up to date.",
        ],
      },
      {
        heading: "3. Eat well and reach a comfortable weight",
        paragraphs: [
          "A balanced diet with plenty of fruit, vegetables, whole grains, and good protein supports both you and a future baby. Being close to a healthy weight before pregnancy can help conception and lower some risks. Small, steady changes are easier to keep than big, sudden ones.",
        ],
      },
      {
        heading: "4. Stop smoking and alcohol",
        paragraphs: [
          "Smoking and alcohol can affect both conceiving and a growing baby. Stopping before you try for a baby is one of the most helpful steps you can take. If you would like support to stop, we are glad to help.",
        ],
      },
      {
        heading: "5. Review your medicines",
        paragraphs: [
          "Some regular medicines, including a few bought without a prescription, may need to be changed before pregnancy. Do not stop anything on your own. Bring a list of what you take to your visit, and we will go through it together.",
        ],
      },
      {
        heading: "When to reach out",
        paragraphs: [
          "There is no need to wait until you are ready to conceive right away. Speaking with us a few months ahead gives more time to prepare, especially if you have a long-term condition, are over 35, or have had pregnancy difficulties before. To book a pre-conception visit at Kairavi Women's Clinic, call or message us any time.",
        ],
      },
    ],
  },
  {
    slug: "when-to-see-a-gynaecologist",
    title: "When should you see a gynaecologist?",
    date: "2026-07-10",
    dateDisplay: "10 July 2026",
    author: "Dr. Santhalakshmi S",
    readingTime: "4 min read",
    excerpt:
      "Not sure whether your symptoms need a check-up? Here are the common signs that it is worth seeing a gynaecologist, and why an earlier visit often helps.",
    // No `cover` set here on purpose — this post shows an automatic medical image.
    content: [
      {
        paragraphs: [
          "Many women wonder whether what they are noticing is normal or worth getting checked. As a simple rule, if a symptom is new, persistent, or affecting your daily life, it is worth a visit. Seeing a gynaecologist does not always mean something is wrong; often it is simply reassurance and a plan.",
        ],
      },
      {
        heading: "Reasons to book a visit",
        paragraphs: ["It is a good idea to see a gynaecologist if you notice any of the following:"],
        bullets: [
          "Periods that are very heavy, irregular, painful, or have stopped",
          "Pelvic pain, or unusual vaginal discharge or itching",
          "Bleeding between periods, after sex, or after menopause",
          "Difficulty getting pregnant after trying for a while",
          "Concerns about contraception, pregnancy, or menopause symptoms",
        ],
      },
      {
        heading: "Routine check-ups matter too",
        paragraphs: [
          "Even when you feel well, a routine women's health check and screening can catch concerns early, when they are easiest to manage. If you are unsure whether you need to come in, you are always welcome to call and ask first.",
        ],
      },
      {
        heading: "When to reach out",
        paragraphs: [
          "For anything that feels severe or sudden, such as heavy bleeding or severe pain, please seek care without waiting. To book an appointment with Dr. Santhalakshmi at Kairavi Women's Clinic, call or message us any time.",
        ],
      },
    ],
  },
];

export const BLOG_SLUGS = BLOG_POSTS.map((p) => p.slug);
export const getPost = (slug: string) => BLOG_POSTS.find((p) => p.slug === slug);
