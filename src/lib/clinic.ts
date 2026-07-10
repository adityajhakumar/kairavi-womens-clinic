// Single source of truth for Kairavi Women's Clinic. All copy is medically
// reviewed (no overclaims) and drives both the visible UI and the JSON-LD.
// Generated from the briefing document + research agents.

// Canonical/absolute-URL base. Defaults to the GitHub Pages project URL.
// When you move to the real domain, set NEXT_PUBLIC_SITE_URL (and clear
// NEXT_PUBLIC_BASE_PATH) in the deploy workflow — no trailing slash here.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://adityajhakumar.github.io/kairavi-womens-clinic";

export interface Service { slug: string; name: string; short: string; description: string; }
export interface Stage { name: string; description: string; image: { src: string; alt: string }; }
export interface FAQ { question: string; answer: string; }

export const CLINIC = {
  name: "Kairavi Women's Clinic",
  shortName: "Kairavi",
  tagline: "Compassionate care for women, at every stage of life.",
  doctor: {
    name: "Dr. Santhalakshmi S",
    title: "Obstetrician, Gynaecologist & Laparoscopic Surgeon",
    credentials: ["MBBS", "DGO", "DNB (Obstetrics & Gynaecology)", "Fellowship in Gynaecologic Endoscopy", "Laparoscopic Surgeon"],
    hospital: "Chettinad Super Speciality Hospital, Kelambakkam",
    bio: "Dr. Santhalakshmi S is an Obstetrician, Gynaecologist, and Laparoscopic Surgeon dedicated to caring for women through every stage of life. She completed her MBBS at Coimbatore Medical College, her DGO at Thanjavur Medical College, and her DNB in Obstetrics and Gynaecology at G. Kuppuswamy Naidu Memorial Hospital.\n\nShe has also earned a Surgical Fellowship in Gynaecologic Endoscopy, training in gynaecological laparoscopy with Patel's Minimal Access Gynecology Team at Aurangabad. This advanced training strengthens her expertise in minimally invasive (keyhole) gynaecological surgery.\n\nShe currently serves as Consultant in the Department of Obstetrics and Gynaecology at Chettinad Super Speciality Hospital, Kelambakkam. Her training spans the full breadth of women's health, from pregnancy and delivery to gynaecological and hormonal conditions.\n\nAt Kairavi Women's Clinic, Dr. Santhalakshmi brings a warm, patient-centered approach, taking time to listen and explain things in plain language. She believes that good care is built on trust, comfort, and clear communication, so every woman feels supported in her decisions.",
    photo: { src: "/images/dr-santhalakshmi.png", alt: "Dr. Santhalakshmi S, Obstetrician and Gynaecologist at Kairavi Women's Clinic" },
    profiles: [
      { label: "Chettinad Hospital profile", href: "https://www.chettinadhospital.com/doctor/Dr.S.SanthalakshmiConsultant-Obstetrics&Gynecology" },
      { label: "Practo profile", href: "https://www.practo.com/chennai/doctor/dr-santhalakshmi-gynecologist-obstetrician" },
      { label: "MediBuddy profile", href: "https://www.medibuddy.in/doctor-consultations/chennai/gynecology/dr-santhalakshmi-s-300268" },
    ],
  },
  phoneDisplay: "+91 73586 79920",
  phoneRaw: "+917358679920",
  whatsapp: "917358679920",
  email: "kairaviwomensclinic@gmail.com",
  instagram: "kairavi_care",
  instagramUrl: "https://www.instagram.com/kairavi_care/",
  // Online appointment booking is handled on MediBuddy; appointment CTAs point here.
  bookingUrl: "https://www.medibuddy.in/doctor-consultations/chennai/gynecology/dr-santhalakshmi-s-300268",
  address: {
    line1: "Plot No. 151, VSN Heights, Iyra Aditi Phase 1",
    locality: "Kelambakkam",
    city: "Chennai",
    region: "Tamil Nadu",
    postalCode: "603103",
    country: "IN",
    landmark: "Adjacent to Divine Mercy Church, Kelambakkam",
    full: "Plot No. 151, VSN Heights, Iyra Aditi Phase 1, Kelambakkam, Chennai 603103",
  },
  geo: { lat: 12.7889, lng: 80.2228 },
  hours: { days: "Monday to Saturday", open: "18:00", close: "21:00", openDisplay: "6:00 PM", closeDisplay: "9:00 PM", closed: "Sunday" },
  googleMapsSearch: "https://www.google.com/maps/search/?api=1&query=Kairavi+Women%27s+Clinic+Kelambakkam",
  chettinadProfile: "https://www.chettinadhospital.com/speciality/obstetrics-gynaecology-chennai",
  images: {
  "hero": {
    "src": "/images/hero.jpg",
    "alt": "Mother holding her young child on a sunlit beach, warm and joyful"
  },
  "pregnancy-care": {
    "src": "/images/pregnancy-care.jpg",
    "alt": "Expecting mother cradling her pregnant belly with hands forming a heart"
  },
  "gynecology": {
    "src": "/images/gynecology.jpg",
    "alt": "Female doctor in a white coat consulting a patient in a clinic"
  },
  "wellness-preventive": {
    "src": "/images/wellness-preventive.jpg",
    "alt": "Woman practising a calm yoga pose outdoors at sunset"
  },
  "adolescent-reproductive": {
    "src": "/images/adolescent-reproductive.jpg",
    "alt": "Calm, confident young woman portrait against a warm backdrop"
  },
  "menopause-care": {
    "src": "/images/menopause-care.jpg",
    "alt": "Confident, smiling mature woman in professional attire"
  },
  "clinic-interior": {
    "src": "/images/clinic-interior.jpg",
    "alt": "Clean, bright modern medical consultation room interior"
  },
  "family-planning": {
    "src": "/images/family-planning.jpg",
    "alt": "Two people holding hands in a warm, supportive counselling moment"
  },
  "contact-location": {
    "src": "/images/contact-location.jpg",
    "alt": "Welcoming clean reception desk in a healthcare facility"
  }
},
};

export const SERVICES: Service[] = [
  {
    "slug": "pre-conception-counselling",
    "name": "Pre-Conception Counselling",
    "short": "Planning ahead for a healthy pregnancy.",
    "description": "Pre-conception counselling helps you prepare your body and health before you try to conceive. We review your medical history, lifestyle, and any existing conditions, and may advise folic acid, vaccinations, and routine tests. This is a gentle, unhurried conversation to give your pregnancy the best possible start."
  },
  {
    "slug": "high-risk-pregnancy-management",
    "name": "High-Risk Pregnancy Management",
    "short": "Close, careful care when pregnancy needs extra attention.",
    "description": "Some pregnancies need closer monitoring, such as those with high blood pressure, diabetes, twins, or other medical concerns. We provide attentive antenatal care with the tests and follow-up your situation calls for. Our aim is to support you and your baby with regular checks and clear guidance at every step."
  },
  {
    "slug": "normal-and-assisted-deliveries",
    "name": "Normal & Assisted Deliveries",
    "short": "Supportive care through labour and birth.",
    "description": "We support normal vaginal births and, when needed, assisted deliveries using safe, established methods. Throughout labour we keep you informed and comfortable, and explain each decision as it comes up. The goal is a safe birth for you and your baby with care you can trust."
  },
  {
    "slug": "caesarean-sections",
    "name": "Caesarean Sections (Elective & Emergency)",
    "short": "Planned and emergency caesarean care when it is the safer choice.",
    "description": "A caesarean section may be planned in advance or needed urgently during labour for the safety of mother or baby. We discuss the reasons clearly so you understand what to expect before, during, and after surgery. Our focus is on a safe procedure and a smooth recovery with proper postnatal support."
  },
  {
    "slug": "antenatal-and-postnatal-care",
    "name": "Antenatal & Postnatal Care",
    "short": "Regular check-ups before and after your baby arrives.",
    "description": "Antenatal visits help us track your health and your baby's growth through scans, blood tests, and routine checks. After delivery, postnatal care looks after your recovery, feeding support, and your baby's early wellbeing. We are here to answer your questions and guide you through this special time."
  },
  {
    "slug": "gynaecological-treatments",
    "name": "Gynaecological Treatments (Medical & Surgical)",
    "short": "Care for a wide range of women's health concerns.",
    "description": "We offer both medical and surgical treatment for common gynaecological conditions, from infections and bleeding problems to conditions needing surgery. After a careful assessment, we discuss the options suited to your needs and comfort. You will always understand the plan before any treatment begins."
  },
  {
    "slug": "family-planning-and-contraceptive-counselling",
    "name": "Family Planning & Contraceptive Counselling",
    "short": "Choosing the contraception that suits your life.",
    "description": "Family planning counselling helps you understand the contraceptive options available, including pills, IUDs, injections, and barrier methods. We talk through how each works, the benefits, and possible side effects so you can choose with confidence. Your preferences and privacy are always respected."
  },
  {
    "slug": "menstrual-disorder-treatment",
    "name": "Menstrual Disorder Treatment",
    "short": "Help for irregular, heavy, or painful periods.",
    "description": "Irregular, heavy, or painful periods can affect daily life and may have many causes. We assess your symptoms, suggest relevant tests, and discuss treatment ranging from medication to further care if needed. Our aim is to find the reason and help you feel more comfortable."
  },
  {
    "slug": "pcos-and-hormonal-disorder-management",
    "name": "PCOS & Hormonal Disorder Management",
    "short": "Long-term support for PCOS and hormone imbalances.",
    "description": "PCOS and other hormonal conditions can affect periods, weight, skin, and fertility. We offer assessment, lifestyle guidance, and medical management tailored to your goals, whether that is regular cycles or planning a pregnancy. Care is ongoing, so we follow up to see how you are doing."
  },
  {
    "slug": "infertility-workup-and-treatment",
    "name": "Infertility Workup & Treatment",
    "short": "Understanding and addressing difficulty conceiving.",
    "description": "If conceiving has been difficult, a structured workup helps identify possible reasons for both partners. We arrange the relevant tests and explain the findings in plain language, then discuss treatment options or referral when appropriate. We approach this sensitive journey with patience and care."
  },
  {
    "slug": "fibroid-management",
    "name": "Fibroid Management",
    "short": "Care for uterine fibroids, from monitoring to surgery.",
    "description": "Fibroids are common non-cancerous growths in the uterus that may cause heavy periods, pain, or pressure symptoms, though many need no treatment. We assess your symptoms and scans to decide whether monitoring, medication, or surgery is best for you. Every option is discussed clearly so you can decide what feels right."
  },
  {
    "slug": "endometriosis-management",
    "name": "Endometriosis Management",
    "short": "Support for pelvic pain and endometriosis.",
    "description": "Endometriosis can cause painful periods, pelvic pain, and sometimes difficulty conceiving. We focus on diagnosis, pain relief, and a management plan suited to your symptoms and life stage, including medical or surgical options when needed. Our aim is to help you manage symptoms and improve your quality of life."
  },
  {
    "slug": "adenomyosis-management",
    "name": "Adenomyosis Management",
    "short": "Relief for heavy, painful periods from adenomyosis.",
    "description": "Adenomyosis occurs when the inner lining of the uterus grows into its muscular wall, often causing heavy bleeding and cramping. We confirm the diagnosis and discuss treatments ranging from medication to other options based on your symptoms and plans. Together we work towards relief and a plan that fits you."
  },
  {
    "slug": "ovarian-cyst-management",
    "name": "Ovarian Cyst Management",
    "short": "Assessment and care for ovarian cysts.",
    "description": "Many ovarian cysts are harmless and resolve on their own, while some need closer follow-up or treatment. We use scans and your symptoms to decide whether to monitor, treat, or consider surgery. We explain what your results mean so you feel reassured and informed."
  }
];

export const STAGES: Stage[] = [
  {
    "name": "Adolescent Care",
    "description": "We support young girls through the changes of puberty, period concerns, and questions about their bodies in a calm, private setting. Our approach is gentle and reassuring, so adolescents and their families feel comfortable asking anything.",
    "image": {
      "src": "/images/adolescent-reproductive.jpg",
      "alt": "Calm, confident young woman portrait against a warm backdrop"
    }
  },
  {
    "name": "Reproductive Health",
    "description": "From contraception and menstrual health to infections and routine screening, we care for women across their reproductive years. We offer clear guidance and confidential support tailored to your needs and life stage.",
    "image": {
      "src": "/images/wellness-preventive.jpg",
      "alt": "Woman practising a calm yoga pose outdoors at sunset"
    }
  },
  {
    "name": "Pregnancy Care",
    "description": "We guide you through pregnancy with regular antenatal visits, scans, and tests to keep you and your baby well. Whether your pregnancy is routine or needs extra attention, we are with you at every step.",
    "image": {
      "src": "/images/pregnancy-care.jpg",
      "alt": "Expecting mother cradling her pregnant belly with hands forming a heart"
    }
  },
  {
    "name": "Delivery & Postnatal Care",
    "description": "We support you through labour and birth, including normal, assisted, and caesarean deliveries when needed. After your baby arrives, we look after your recovery, feeding, and early wellbeing for both of you.",
    "image": {
      "src": "/images/gynecology.jpg",
      "alt": "Female doctor in a white coat consulting a patient in a clinic"
    }
  },
  {
    "name": "Menopause Care",
    "description": "The years around menopause can bring symptoms such as hot flushes, mood changes, and irregular periods. We offer understanding, advice, and management options to help you feel comfortable and well during this transition.",
    "image": {
      "src": "/images/menopause-care.jpg",
      "alt": "Confident, smiling mature woman in professional attire"
    }
  },
  {
    "name": "Wellness & Preventive Care",
    "description": "Regular check-ups, screening, and healthy lifestyle guidance help you stay well and catch concerns early. We encourage preventive care so you can look after your long-term health with confidence.",
    "image": {
      "src": "/images/clinic-interior.jpg",
      "alt": "Clean, bright modern medical consultation room interior"
    }
  }
];

export const FAQS: FAQ[] = [
  {
    "question": "How do I book an appointment at Kairavi Women's Clinic?",
    "answer": "You can book an appointment by calling or sending a WhatsApp message to +91 73586 79920, or by emailing kairaviwomensclinic@gmail.com. We will help you find a suitable time during our clinic hours."
  },
  {
    "question": "What are the clinic timings?",
    "answer": "The clinic is open Monday to Saturday from 6:00 PM to 9:00 PM. We are closed on Sundays. If you need help outside these hours, please call or message us and we will guide you."
  },
  {
    "question": "What should I bring to my first antenatal visit?",
    "answer": "Please bring any previous medical records, scan and test reports, a list of medicines you take, and details of past pregnancies if any. If you have a pregnancy test result or last menstrual period date, that is helpful too. Carrying your ID and any insurance details is also a good idea."
  },
  {
    "question": "When should I see a gynaecologist?",
    "answer": "It is worth seeing a gynaecologist for irregular, heavy, or painful periods, pelvic pain, unusual discharge, difficulty conceiving, or concerns around pregnancy or menopause. Routine check-ups and screening are also helpful even when you feel well. If you are unsure, you are welcome to call and ask."
  },
  {
    "question": "Is high-risk pregnancy care available at the clinic?",
    "answer": "Yes, we provide care and monitoring for high-risk pregnancies, including those with conditions such as high blood pressure, diabetes, or twins. We arrange the necessary tests and closer follow-up, and coordinate further care when required."
  },
  {
    "question": "What conditions does the clinic treat?",
    "answer": "We treat a wide range of women's health conditions, including PCOS, fibroids, endometriosis, adenomyosis, ovarian cysts, menstrual disorders, and hormonal imbalances. We also offer infertility workup, family planning, and complete pregnancy care. After assessing you, we discuss the options best suited to your needs."
  },
  {
    "question": "Is care for adolescents and reproductive health kept confidential?",
    "answer": "Yes, your privacy matters to us. Consultations for adolescent and reproductive health are handled with sensitivity and confidentiality in a comfortable setting. You are welcome to ask any question without hesitation."
  },
  {
    "question": "Where is Kairavi Women's Clinic located?",
    "answer": "The clinic is located in Kelambakkam, Chennai 603103. If you need directions or help finding us, please call or message us on +91 73586 79920 and we will be glad to assist."
  },
  {
    "question": "Can I book an appointment online?",
    "answer": "Yes. You can book an online appointment with Dr. Santhalakshmi on MediBuddy, or simply call or WhatsApp us on +91 73586 79920. Online booking lets you choose a slot at your convenience."
  },
  {
    "question": "Does Dr. Santhalakshmi handle deliveries and caesarean sections?",
    "answer": "Yes. Dr. Santhalakshmi provides complete pregnancy care, including normal and assisted deliveries and planned or emergency caesarean sections, with antenatal and postnatal support throughout."
  },
  {
    "question": "Do I need a referral to see a gynaecologist?",
    "answer": "No referral is needed. You can book directly for any women's health concern, a routine check-up, or pregnancy care. If you are unsure whether to come in, you are welcome to call and ask first."
  },
  {
    "question": "What are Dr. Santhalakshmi's qualifications?",
    "answer": "She holds an MBBS from Coimbatore Medical College, a DGO from Thanjavur Medical College, and a DNB in Obstetrics and Gynaecology from G. Kuppuswamy Naidu Memorial Hospital. She has also completed a Surgical Fellowship in Gynaecologic Endoscopy (laparoscopy training with Patel's Minimal Access Gynecology Team, Aurangabad). She is a Consultant in Obstetrics and Gynaecology at Chettinad Super Speciality Hospital, Kelambakkam."
  }
];

export const META = {
  "home": "Kairavi Women's Clinic in Kelambakkam, Chennai. Compassionate OB-GYN care by Dr. Santhalakshmi S, for women at every stage of life. Book today.",
  "about": "Meet Dr. Santhalakshmi S, Obstetrician & Gynaecologist at Kairavi Women's Clinic, Kelambakkam. Warm, patient-centered care you can trust.",
  "services": "Pregnancy care, deliveries, PCOS, fibroids, endometriosis, infertility, and more at Kairavi Women's Clinic, Kelambakkam, Chennai.",
  "womens-care": "Care for women at every stage: adolescent, reproductive, pregnancy, delivery, menopause, and preventive health at Kairavi Women's Clinic.",
  "contact": "Book at Kairavi Women's Clinic, Kelambakkam, Chennai. Call or WhatsApp +91 73586 79920. Open Mon-Sat 6 to 9 PM.",
  "faq": "Answers about appointments, timings, antenatal visits, and conditions treated at Kairavi Women's Clinic, Kelambakkam, Chennai."
};
