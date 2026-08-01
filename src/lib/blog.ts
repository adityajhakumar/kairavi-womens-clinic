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
export interface BlogSource { title: string; url: string; }
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
  sources?: BlogSource[]; // OPTIONAL — cited references shown at the end of the post
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
          "Taking folic acid before and in early pregnancy lowers the chance of certain birth defects of the brain and spine. Most women are advised 400 micrograms a day, ideally started at least a month before trying to conceive and continued through the first 12 weeks. Some women need a higher dose, so it is worth confirming the right amount with your doctor.",
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
  {
    "slug": "understanding-pcos",
    "title": "Understanding PCOS: Symptoms, Causes and Care",
    "date": "2026-07-09",
    "dateDisplay": "9 July 2026",
    "author": "Dr. Santhalakshmi S",
    "readingTime": "6 min read",
    "excerpt": "PCOS is one of the most common hormonal conditions in women of reproductive age, yet it is widely misunderstood. Here is a calm, clear guide to spotting it, understanding it, and managing it well.",
    "content": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Polycystic ovary syndrome (PCOS) is a common hormonal condition that affects how the ovaries work. It affects roughly 1 in 10 women of reproductive age, and many go undiagnosed for years because the symptoms are dismissed as \"just how my body is\".",
          "It is a long-term but very manageable condition. With the right understanding, lifestyle support and, when needed, medical treatment, most women with PCOS lead healthy lives and many go on to have children. This article explains what PCOS is, how it is diagnosed, and how we care for it at Kairavi Women's Clinic."
        ]
      },
      {
        "heading": "What Actually Happens in PCOS",
        "paragraphs": [
          "The name \"polycystic\" is a little misleading. The structures seen on an ultrasound scan are not true cysts but immature follicles — tiny sacs each holding a developing egg that has not matured enough to be released that month. Hormonal imbalances stop these follicles ovulating normally, so they gather around the edge of the ovary, sometimes giving a \"string of pearls\" appearance.",
          "At the heart of PCOS are two linked issues: higher androgens (\"male\" hormones that all women have in small amounts) and, in many women, insulin resistance, where cells respond less efficiently to insulin. Together these disrupt the monthly cycle of ovulation."
        ]
      },
      {
        "heading": "Common Symptoms",
        "paragraphs": [
          "Symptoms vary a great deal. Some women have very mild symptoms, others several at once — you do not need every feature to have PCOS. Most signs build up gradually over months or years."
        ],
        "bullets": [
          "Irregular, infrequent or absent periods (often the earliest sign)",
          "Acne or oily skin that is slow to improve",
          "Excess hair growth on the face, chest or back (hirsutism)",
          "Thinning hair on the scalp",
          "Weight gain, or difficulty losing weight, particularly around the abdomen",
          "Difficulty conceiving, due to irregular or absent ovulation",
          "Darkened patches of skin at the neck or underarms, linked to insulin resistance"
        ]
      },
      {
        "heading": "How PCOS Is Diagnosed",
        "paragraphs": [
          "There is no single test for PCOS. Doctors generally use the Rotterdam criteria: a diagnosis needs at least two of three features — irregular or absent ovulation (usually seen as irregular periods), clinical or blood-test evidence of higher androgens, and polycystic-appearing ovaries on ultrasound. Other conditions that mimic PCOS must be excluded first.",
          "At the clinic this usually means a history of your cycles and symptoms, an examination, blood tests to check hormones and exclude look-alike conditions (such as thyroid disorders or raised prolactin), and, where appropriate, a pelvic ultrasound. Because PCOS looks different in every woman, diagnosis is personalised."
        ]
      },
      {
        "heading": "Managing PCOS: Lifestyle and Medical Care",
        "paragraphs": [
          "There is no cure for PCOS, but its symptoms can be managed effectively, and early care lowers the risk of longer-term complications. Treatment is tailored to what matters most to you — regulating periods, easing acne and hair growth, supporting weight goals, or planning a pregnancy.",
          "Lifestyle measures are usually the first step and help hormone balance and insulin sensitivity. For women above a healthy weight, even a modest loss of around 5% of body weight can help restore more regular cycles.",
          "Where needed, medical options include combined hormonal contraceptives to regulate periods and reduce acne and excess hair, insulin-sensitising medicines such as metformin, and treatments aimed at acne or hair growth."
        ],
        "bullets": [
          "A balanced diet with plenty of fibre, vegetables and whole grains, limiting refined sugar and processed foods",
          "Regular physical activity — around 150 minutes of moderate exercise a week, plus some strength training",
          "Good sleep and stress management, which also influence hormone balance",
          "Regular follow-up so treatment can be adjusted as your needs change"
        ]
      },
      {
        "heading": "A Note on Fertility",
        "paragraphs": [
          "PCOS is one of the most common — and most treatable — causes of difficulty conceiving, because irregular ovulation means an egg is not released reliably each month. Even so, many women conceive with support such as ovulation-inducing medication, lifestyle changes or further fertility treatment.",
          "If you are trying to conceive, starting folic acid beforehand is sensible. The usual dose is 400 micrograms daily, but women with a higher BMI, diabetes or other risk factors are often advised 5 mg — confirm the right amount with your doctor."
        ]
      },
      {
        "heading": "Looking Beyond the Ovaries: Long-Term Health",
        "paragraphs": [
          "Because PCOS is closely linked with insulin resistance, women with the condition have a higher lifetime risk of type 2 diabetes, raised blood pressure, unhealthy cholesterol and, over time, cardiovascular disease.",
          "There is another important reason not to ignore long gaps between periods. When ovulation is infrequent or absent, the womb lining is not shed regularly and can be exposed to oestrogen without the balancing effect a period provides. Over time this can make the lining thicken abnormally (endometrial hyperplasia), raising the risk of womb-lining (endometrial) cancer — women with PCOS have roughly two-to-three times the risk. Reassuringly, this is largely preventable: prolonged absence of periods can be treated, for example with medication that brings on a regular withdrawal bleed to protect the lining. Any unusually heavy or prolonged bleeding, or bleeding after a long gap, should be checked promptly.",
          "Regular monitoring — periodic blood sugar, cholesterol and blood pressure checks — alongside these lifestyle steps can meaningfully lower these risks, even if you are not trying to conceive."
        ]
      },
      {
        "heading": "When to See a Doctor",
        "paragraphs": [
          "Do speak with a gynaecologist if you have irregular or absent periods for several months, ongoing acne or unwanted hair growth that concerns you, difficulty conceiving after about a year of trying (or six months if over 35), or a family history of PCOS or type 2 diabetes alongside these symptoms.",
          "Seek prompt evaluation rather than routine follow-up if androgen-related changes come on rapidly — hair growth worsening noticeably over a few weeks to months, a deepening voice, marked male-pattern balding, or other quick masculinising changes. These are uncommon in PCOS and need investigation to exclude other, rarer causes.",
          "At Kairavi Women's Clinic, Dr. Santhalakshmi S offers a thorough, unhurried assessment for PCOS — from diagnosis through to lifestyle guidance, medical treatment and fertility planning. Call or WhatsApp +91 73586 79920 to book a consultation in Kelambakkam, Chennai."
        ]
      }
    ],
    "sources": [
      {
        "title": "Polycystic ovary syndrome (PCOS) - NHS",
        "url": "https://www.nhs.uk/conditions/polycystic-ovary-syndrome-pcos/"
      },
      {
        "title": "Polycystic ovary syndrome (PCOS) - Symptoms and causes - Mayo Clinic",
        "url": "https://www.mayoclinic.org/diseases-conditions/pcos/symptoms-causes/syc-20353439"
      },
      {
        "title": "Polycystic Ovary Syndrome (PCOS) - Cleveland Clinic",
        "url": "https://my.clevelandclinic.org/health/diseases/8316-polycystic-ovary-syndrome-pcos"
      },
      {
        "title": "Polycystic ovary syndrome (PCOS) - World Health Organization",
        "url": "https://www.who.int/news-room/fact-sheets/detail/polycystic-ovary-syndrome"
      }
    ]
  },
  {
    "slug": "coping-with-morning-sickness",
    "title": "Coping With Morning Sickness in Pregnancy",
    "date": "2026-07-07",
    "dateDisplay": "7 July 2026",
    "author": "Dr. Santhalakshmi S",
    "readingTime": "6 min read",
    "excerpt": "Nausea in early pregnancy is common and usually temporary. Here is why it happens, gentle ways to feel more comfortable, and how to know when it is time to ask for help.",
    "content": [
      {
        "paragraphs": [
          "If you are feeling queasy in the early weeks of pregnancy, you are far from alone. Nausea and vomiting are very common in early pregnancy, affecting as many as 8 in 10 women (around 80%). It usually starts around weeks 4 to 6 and, for most women, begins to ease by weeks 14 to 20 - though for some it settles a little later. Despite the name, \"morning sickness\" can strike at any time of day - morning, afternoon, evening, or all three. It can feel exhausting and unsettling, especially in a first pregnancy, but for most women it is uncomfortable rather than dangerous, and there is a lot you can do to feel steadier while your body adjusts."
        ]
      },
      {
        "heading": "Why does it happen?",
        "paragraphs": [
          "The exact cause is not fully understood, but the hormonal changes of early pregnancy - including rising human chorionic gonadotropin (hCG) and oestrogen - are thought to play a central role, along with a heightened sense of smell and a more sensitive stomach at this time.",
          "Some women are more likely to experience it than others. You may be more prone to pregnancy sickness if any of the following apply:"
        ],
        "bullets": [
          "Carrying twins or more",
          "A history of severe sickness in a previous pregnancy",
          "A tendency towards motion sickness or migraines",
          "A family history of pregnancy sickness",
          "This being a first pregnancy"
        ]
      },
      {
        "heading": "Gentle ways to feel more comfortable",
        "paragraphs": [
          "There is no single fix, but small, consistent changes often help take the edge off nausea. It can be useful to try a few of these and notice what suits you best."
        ],
        "bullets": [
          "Eat small, frequent meals rather than three large ones - an empty stomach can worsen nausea",
          "Choose plain foods high in carbohydrate and low in fat (like idli, toast, khichdi, or crackers) that are easy on the stomach",
          "Try cold or room-temperature foods if the smell of hot, cooked food is off-putting",
          "Keep a few dry crackers or biscuits by the bed to nibble before getting up",
          "Sip fluids slowly and often through the day rather than gulping large amounts at once",
          "Ginger - as tea, candy, or added to food - has some evidence behind it for easing nausea",
          "Rest when you can, as tiredness tends to make nausea feel worse",
          "Get some fresh air and avoid strong smells, smoke, or stuffy rooms where possible",
          "Wear loose, comfortable clothing around the waist"
        ]
      },
      {
        "heading": "It usually gets better",
        "paragraphs": [
          "For most women, nausea eases significantly as the second trimester begins - often by around weeks 14 to 20 - and for many it resolves completely, though a small number continue to feel queasy for longer, sometimes into later pregnancy. Try to be patient and kind to yourself during this phase - it is a genuine physiological process, not something you are doing wrong, and it does not reflect how your pregnancy is progressing overall.",
          "One thing worth knowing: morning sickness usually begins before about 9 weeks. If nausea or vomiting starts for the first time after this, or begins or worsens later in pregnancy, please have it checked, as it can sometimes be due to another cause that needs attention - such as a urinary infection, a thyroid problem, or, later in pregnancy, raised blood pressure - rather than ordinary pregnancy sickness.",
          "If nausea is affecting your ability to work or manage daily life, it is worth mentioning to your doctor even if it does not feel \"severe\" - there are safe, effective options that can help, and you do not have to simply endure it."
        ]
      },
      {
        "heading": "When it is more than morning sickness: hyperemesis gravidarum",
        "paragraphs": [
          "A smaller group of women - up to around 3 in every 100 - develop a more severe form called hyperemesis gravidarum (HG). This is when vomiting is so frequent and persistent that it becomes difficult to keep down food or fluids, leading to dehydration, weight loss, and sometimes an imbalance of body salts. HG can be genuinely debilitating and usually needs medical treatment, sometimes including fluids given through a drip and medication to control vomiting, occasionally with a short hospital stay. Signs that sickness may be more than ordinary morning sickness include:"
        ],
        "bullets": [
          "Vomiting many times a day and being unable to keep fluids down",
          "Losing weight",
          "Feeling very thirsty, dizzy, or drowsy (signs of dehydration)",
          "Dark yellow or brown urine, or passing very little urine",
          "Extreme tiredness that stops you managing daily activities"
        ]
      },
      {
        "heading": "When to reach out to Kairavi Women's Clinic",
        "paragraphs": [
          "Ordinary morning sickness does not usually need emergency care, but a few signs in early pregnancy need urgent, same-day attention rather than waiting to see if they pass. Please seek urgent medical care or attend an emergency service straight away if you have:"
        ],
        "bullets": [
          "Vaginal bleeding, especially with lower abdominal or shoulder-tip pain",
          "Severe or one-sided lower abdominal or pelvic pain"
        ]
      },
      {
        "paragraphs": [
          "These signs can occasionally point to an ectopic pregnancy or a miscarriage rather than morning sickness, and are safest assessed without delay. Please also contact us or seek medical advice promptly if any of the following apply:"
        ],
        "bullets": [
          "You cannot keep any food or fluids down for 24 hours",
          "You feel dizzy, very weak, or notice a fast heartbeat",
          "Your urine is dark or scanty, or you are passing very little",
          "You notice blood in your vomit",
          "You have a fever, or you are losing weight",
          "Nausea or vomiting starts for the first time after about 9 weeks, or begins or worsens later in pregnancy",
          "Nausea is stopping you from managing your normal daily activities"
        ]
      },
      {
        "paragraphs": [
          "Dr Santhalakshmi S and the team at Kairavi Women's Clinic in Kelambakkam are glad to help you find what works for your body, check that you and your baby are doing well, and discuss safe treatment options if nausea is more than mild. Please call or WhatsApp +91 73586 79920 to book a consultation - and do reach out sooner rather than later if any of the signs above apply to you."
        ]
      }
    ],
    "sources": [
      {
        "title": "NHS - Vomiting and morning sickness in pregnancy",
        "url": "https://www.nhs.uk/pregnancy/related-conditions/common-symptoms/vomiting-and-morning-sickness/"
      },
      {
        "title": "RCOG - Pregnancy sickness (nausea and vomiting of pregnancy and hyperemesis gravidarum)",
        "url": "https://www.rcog.org.uk/for-the-public/browse-our-patient-information/pregnancy-sickness-nausea-and-vomiting-of-pregnancy-and-hyperemesis-gravidarum/"
      },
      {
        "title": "ACOG - Morning Sickness: Nausea and Vomiting of Pregnancy",
        "url": "https://www.acog.org/womens-health/faqs/morning-sickness-nausea-and-vomiting-of-pregnancy"
      }
    ]
  },
  {
    "slug": "iron-deficiency-anaemia-in-women",
    "title": "Iron-Deficiency Anaemia in Women: Signs and Prevention",
    "date": "2026-07-05",
    "dateDisplay": "5 July 2026",
    "author": "Dr. Santhalakshmi S",
    "readingTime": "6 min read",
    "excerpt": "Tired all the time or short of breath on the stairs? Iron-deficiency anaemia is common in Indian women, but it's easy to test for and, in most cases, straightforward to prevent and treat.",
    "content": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Feeling tired all the time, breathless on the stairs, or noticing that your skin and nails look paler than usual? These are some of the most common signs of iron-deficiency anaemia — one of the most frequent health problems seen in women across India. The reassuring news is that it is easy to test for and, in most cases, straightforward to prevent and manage once you understand why it happens and what to look out for."
        ]
      },
      {
        "heading": "Why Iron-Deficiency Anaemia Is So Common in Women",
        "paragraphs": [
          "Iron is needed to make haemoglobin, the protein in red blood cells that carries oxygen around your body. When iron stores run low, your body cannot make enough healthy red blood cells, and anaemia gradually develops. Women are particularly prone to this because of the extra iron losses and demands of the reproductive years.",
          "According to India's National Family Health Survey (NFHS-5, 2019-21), around 57% of women aged 15-49 are affected by some degree of anaemia — more than half of this age group, making it a widespread everyday concern rather than a rare condition."
        ],
        "bullets": [
          "Heavy or prolonged menstrual periods (menorrhagia) — a leading cause in reproductive-age women",
          "Pregnancy, when the body needs more iron for the growing baby and the rise in blood volume",
          "A diet low in iron-rich foods, which can be harder with vegetarian or restrictive eating patterns",
          "Conditions that affect iron absorption, such as coeliac disease, or gastrointestinal blood loss from ulcers",
          "Closely spaced pregnancies, or breastfeeding without adequate iron replenishment"
        ]
      },
      {
        "heading": "Signs and Symptoms to Watch For",
        "paragraphs": [
          "Iron-deficiency anaemia often develops slowly, so early symptoms can be mild or easy to brush off as \"just being busy\". Over time, they tend to become more noticeable and can affect your energy, concentration, and quality of life. Not everyone has every symptom, but the following are worth watching for."
        ],
        "bullets": [
          "Persistent tiredness or low energy, even after rest",
          "Breathlessness or a pounding heartbeat with everyday activity",
          "Pale skin, inner eyelids, or nail beds",
          "Headaches, dizziness, or difficulty concentrating",
          "Brittle nails, hair thinning, or cravings for non-food items like ice or clay (a sign called pica)",
          "Restless legs, or a sore, smooth tongue in marked cases"
        ]
      },
      {
        "heading": "Iron-Rich Foods and the Vitamin C Connection",
        "paragraphs": [
          "A balanced, iron-rich diet is one of the most effective everyday steps you can take against anaemia. Iron from animal sources (haem iron) is absorbed more easily than iron from plant sources (non-haem iron), which is helpful to know if you follow a vegetarian diet — it simply means paying a little more attention to variety and to how you combine foods.",
          "Pairing iron-rich foods with a source of vitamin C at the same meal improves how much iron your body absorbs — a simple habit that makes a real difference over time."
        ],
        "bullets": [
          "Iron-rich foods: leafy greens (spinach, methi), pulses (rajma, chana, moong dal), ragi, jaggery, dates, and iron-fortified cereals; plus red meat, chicken, fish, and eggs if non-vegetarian",
          "Vitamin C boosters to pair with meals: citrus fruits (orange, sweet lime), amla, guava, tomatoes, and bell peppers",
          "Best spaced apart from iron-rich meals: tea and coffee, as their tannins can reduce iron absorption when taken with food"
        ]
      },
      {
        "heading": "When Testing and Supplements Are Needed",
        "paragraphs": [
          "A simple blood test measuring your haemoglobin level is the usual starting point, and your doctor may follow it with iron studies (such as serum ferritin) to confirm iron deficiency. The World Health Organization defines anaemia in non-pregnant women as a haemoglobin level below 12.0 g/dL, with a lower threshold used during pregnancy because blood volume naturally rises.",
          "Iron supplements — often with folic acid — can be very effective, but the dose and duration should be guided by your test results rather than self-prescribed, as too much iron is not helpful either. In pregnancy, iron and folic acid supplementation is a routine part of antenatal care in India, and bodies such as ACOG support it alongside regular haemoglobin monitoring, since both mother and baby depend on adequate iron stores."
        ]
      },
      {
        "heading": "Red Flags: When to Seek Urgent Care",
        "paragraphs": [
          "Most iron-deficiency anaemia builds up slowly and can be sorted out calmly. But some symptoms mean the body is struggling to get enough oxygen right now and should not wait for a routine appointment. If you have any of the following, seek same-day help — call or WhatsApp the clinic urgently, and if we are unavailable, go straight to the nearest hospital: chest pain; fainting or feeling close to fainting; severe or worsening breathlessness, including breathlessness at rest; or a very fast, pounding, or irregular heartbeat.",
          "Heavy menstrual bleeding has its own warning thresholds. Seek urgent care if you soak through a pad or tampon every hour for two or more hours in a row, pass blood clots larger than a grape, or feel faint, dizzy, or very weak with the bleeding. Do not assume sudden heavy blood loss is a diet or iron issue — contact the clinic or go to the nearest hospital.",
          "If you are pregnant, some symptoms should never be delayed. Contact us the same day for reduced or absent baby movements, or for marked breathlessness, palpitations, dizziness, or fainting. Severe anaemia in pregnancy needs closer monitoring, so report any concerning symptom promptly rather than waiting for your next visit."
        ]
      },
      {
        "heading": "When to Reach Out to Us",
        "paragraphs": [
          "For non-urgent concerns, consult a doctor if you notice ongoing tiredness, breathlessness, heavy periods, or pallor that does not improve — especially if you are pregnant or planning a pregnancy. Testing early means anaemia can usually be corrected comfortably, often before it affects your daily life or, in pregnancy, your baby's growth.",
          "At Kairavi Women's Clinic, Dr. Santhalakshmi S offers haemoglobin testing, nutrition guidance, and personalised treatment plans for anaemia related to periods, pregnancy, or diet. If any of these signs sound familiar, please call or WhatsApp us at +91 73586 79920 to book a consultation in Kelambakkam, Chennai — and for the emergency red flags above, seek same-day care or go to the nearest hospital."
        ]
      }
    ],
    "sources": [
      {
        "title": "Iron deficiency anemia - Symptoms & causes - Mayo Clinic",
        "url": "https://www.mayoclinic.org/diseases-conditions/iron-deficiency-anemia/symptoms-causes/syc-20355034"
      },
      {
        "title": "About Heavy Menstrual Bleeding - CDC",
        "url": "https://www.cdc.gov/female-blood-disorders/about/heavy-menstrual-bleeding.html"
      },
      {
        "title": "Anemia in Pregnancy: ACOG Practice Bulletin, Number 233",
        "url": "https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2021/08/anemia-in-pregnancy"
      },
      {
        "title": "Anaemia (WHO nutrition data)",
        "url": "https://www.who.int/data/nutrition/nlis/info/anaemia"
      }
    ]
  },
  {
    "slug": "understanding-your-menstrual-cycle",
    "title": "Understanding Your Menstrual Cycle: What's Normal, and When to Get It Checked",
    "date": "2026-07-03",
    "dateDisplay": "3 July 2026",
    "author": "Dr. Santhalakshmi S",
    "readingTime": "6 min read",
    "excerpt": "Your menstrual cycle is a natural monthly rhythm, and understanding its phases and your own normal pattern makes it much easier to know when to simply track and when to get checked.",
    "content": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Your menstrual cycle is far more than \"that time of the month\" — it's a monthly rhythm of hormonal changes that prepares your body for a possible pregnancy each cycle. Understanding what's happening, and what counts as normal, can help you feel more in control of your health and know when it's worth getting something checked.",
          "At Kairavi Women's Clinic, we meet many women who aren't sure whether their cycle is \"normal.\" The truth is, normal covers a fairly wide range — and getting to know your own pattern is the best way to notice when something has genuinely changed."
        ]
      },
      {
        "heading": "The Four Phases, in Simple Terms",
        "paragraphs": [
          "Each cycle is counted from the first day of one period to the first day of the next. Underneath the bleeding you see, four phases are quietly at work:"
        ],
        "bullets": [
          "Menstrual phase: The uterine lining sheds, causing your period. This usually lasts about 2–8 days.",
          "Follicular phase: Overlapping with your period and continuing after it, oestrogen rises and the uterine lining begins to thicken again as follicles in the ovary develop.",
          "Ovulation: Around the middle of the cycle, a surge in luteinising hormone triggers the release of an egg from the ovary.",
          "Luteal phase: Progesterone rises to prepare the uterine lining for a possible pregnancy. If pregnancy doesn't occur, hormone levels fall and the next period begins."
        ]
      },
      {
        "heading": "What's a Normal Length and Flow?",
        "paragraphs": [
          "International guidance from FIGO (the International Federation of Gynecology and Obstetrics) treats a menstrual cycle lasting anywhere from 24 to 38 days, counted start to start, as normal — the average is close to 28 days, but very few people are exactly average every month. A period itself usually lasts up to about 8 days.",
          "Total blood loss over a period is typically only about 2–3 tablespoons (roughly 30–40 ml), with the heaviest flow in the first day or two, often becoming lighter, pinkish or brownish towards the end. It can look like more than it is. Some month-to-month variation in cycle length and flow is completely normal, especially in the teenage years and in the years leading up to menopause, when cycles can take time to settle into a regular pattern."
        ]
      },
      {
        "heading": "Tracking Your Cycle",
        "paragraphs": [
          "Tracking helps you learn your own normal, which makes it much easier to notice a real change later on. It also gives your doctor useful information at any consultation.",
          "A simple calendar or a period-tracking app works well. Note the date your period starts each month, how many days it lasts, and roughly how heavy the flow is (light, medium, heavy, or spotting). Over a few cycles, you'll start to see your typical pattern, including how long your cycles usually run and how your flow tends to change."
        ]
      },
      {
        "heading": "Common, Normal Changes",
        "paragraphs": [
          "It's normal for cycles to shift a little from month to month, and certain life stages naturally bring more variation.",
          "Some common, generally harmless changes include:"
        ],
        "bullets": [
          "Cycle length varying by a few days from one month to the next.",
          "Irregular cycles during the first couple of years after your first period, as the body's hormonal rhythm settles.",
          "Longer or more unpredictable cycles in the years approaching menopause (perimenopause).",
          "Mild changes in flow, cramping, or mood around ovulation or just before your period, linked to normal hormonal shifts.",
          "Temporary changes after starting, stopping, or switching hormonal contraception, or after childbirth and while breastfeeding."
        ]
      },
      {
        "heading": "When to Book a Consultation",
        "paragraphs": [
          "Getting to know your own pattern makes it easier to spot when something has changed. Many of the changes below are common and not serious, but they are still worth checking — and there's no need to feel embarrassed about asking. Dr Santhalakshmi S at Kairavi Women's Clinic in Kelambakkam, Chennai, sees women through every stage of the menstrual journey, from the first period to menopause. For any of the non-urgent concerns below, please do call or WhatsApp us at +91 73586 79920 to book a consultation.",
          "Consider booking a consultation if:"
        ],
        "bullets": [
          "Your period regularly lasts longer than 8 days, or your cycle is consistently shorter than 24 days or longer than 38 days.",
          "You go 90 days or more without a period and you are not pregnant, or your periods have stopped completely without an obvious explanation.",
          "You notice bleeding or spotting between periods, or bleeding after intercourse.",
          "You have severe period pain that disrupts daily life.",
          "You feel persistently tired, breathless or pale between periods, which can be a sign of anaemia from heavy blood loss and is worth checking soon.",
          "A young girl hasn't started her periods by around age 15 (or has had no breast development by about age 13), or you notice any bleeding after menopause — which should always be checked."
        ]
      },
      {
        "heading": "Signs That Need Urgent, Same-Day Care",
        "paragraphs": [
          "Some symptoms point to heavy or rapid blood loss and should not wait for a booked appointment. Go straight to the nearest hospital emergency department, or seek same-day medical care, if any of the following happen — do not simply wait it out. This matters especially because iron-deficiency anaemia is common and leaves the body with less reserve to cope with sudden blood loss:"
        ],
        "bullets": [
          "You are soaking through a pad or tampon every hour for two or more hours in a row.",
          "You are passing blood clots the size of a large coin or bigger.",
          "Any bleeding is accompanied by dizziness, feeling faint, breathlessness, a racing heart, or cold, clammy skin — these can signal dangerous blood loss and need immediate assessment."
        ]
      }
    ],
    "sources": [
      {
        "title": "Periods - NHS",
        "url": "https://www.nhs.uk/conditions/periods/"
      },
      {
        "title": "Menstrual Cycle (Normal Menstruation): Overview & Phases - Cleveland Clinic",
        "url": "https://my.clevelandclinic.org/health/articles/10132-menstrual-cycle"
      },
      {
        "title": "Heavy Menstrual Bleeding - ACOG",
        "url": "https://www.acog.org/womens-health/faqs/heavy-menstrual-bleeding"
      },
      {
        "title": "Abnormal Uterine Bleeding - ACOG",
        "url": "https://www.acog.org/womens-health/faqs/abnormal-uterine-bleeding"
      }
    ]
  },
  {
    "slug": "recognising-endometriosis",
    "title": "Endometriosis: Recognising the Signs",
    "date": "2026-07-01",
    "dateDisplay": "1 July 2026",
    "author": "Dr. Santhalakshmi S",
    "readingTime": "6 min read",
    "excerpt": "Endometriosis is common and often under-diagnosed, but manageable once identified — here is what to watch for and how it is diagnosed and treated.",
    "content": [
      {
        "paragraphs": [
          "Endometriosis is a condition in which tissue similar to the lining of the womb grows outside the uterus — most often on the ovaries, fallopian tubes, or the lining of the pelvis. This tissue responds to the monthly hormone cycle but has nowhere to shed, which can lead to inflammation, pain, and sometimes scar tissue. It affects roughly 1 in 10 women of reproductive age worldwide, yet it often takes years to be recognised because its symptoms are mistaken for \"normal\" period pain. This article covers the signs to watch for, how it is diagnosed, and how it is managed."
        ]
      },
      {
        "heading": "Symptoms to be aware of",
        "paragraphs": [
          "Endometriosis symptoms vary widely — some women have severe symptoms with only a little tissue, while others have extensive disease with mild symptoms. The overall pattern usually matters more than any single sign."
        ],
        "bullets": [
          "Painful periods (dysmenorrhoea) severe enough to interfere with daily activities, school, or work, and not fully relieved by usual painkillers",
          "Chronic pelvic pain, which may occur at any time of the month, not just during periods",
          "Pain during or after sexual intercourse (dyspareunia)",
          "Pain with bowel movements or passing urine, especially around your period",
          "Heavy menstrual bleeding, or bleeding between periods",
          "Fatigue, low mood, or bloating that fluctuates with the menstrual cycle",
          "Difficulty conceiving, which for some women is the first clue that leads to a diagnosis"
        ]
      },
      {
        "heading": "Why it can be easy to miss",
        "paragraphs": [
          "Because period pain is so common, many women assume severe cramping is simply something to endure. In reality, pain that regularly stops you going to work, college, or daily activities is not \"normal\" and deserves proper evaluation. Symptoms can also overlap with conditions such as adenomyosis, fibroids, pelvic inflammatory disease, or irritable bowel syndrome, which is one reason diagnosis can take time.",
          "Keeping a simple diary of your cycle — noting pain levels, bleeding patterns, and any bowel, bladder, or sexual symptoms — is genuinely useful when you see your gynaecologist, building a clearer picture over a few cycles."
        ]
      },
      {
        "heading": "How endometriosis is diagnosed",
        "paragraphs": [
          "Diagnosis usually begins with a detailed conversation about your symptoms and menstrual history, followed by a pelvic examination. Your doctor may then suggest further tests. Current guidance encourages doctors to consider a diagnosis — and to begin treatment — based on your symptoms and examination, without always waiting for surgery. A normal scan does not rule out endometriosis, so your symptoms are taken seriously either way."
        ],
        "bullets": [
          "Pelvic ultrasound (often transvaginal) to look for endometriotic cysts on the ovaries or signs of deeper disease",
          "MRI in some cases, particularly if deeper disease is suspected",
          "Laparoscopy, a minimally invasive keyhole procedure that lets the pelvis be viewed directly and tissue sampled or treated in the same operation. It gives the most definitive confirmation, but is no longer always needed to start treatment, and is usually considered when scans are normal but symptoms persist, or surgery is planned"
        ]
      },
      {
        "heading": "Managing endometriosis",
        "paragraphs": [
          "There is currently no cure, but a range of treatments can meaningfully reduce pain and improve quality of life. The right approach depends on symptom severity, your age, and whether you are hoping to conceive — so it is very much a personalised discussion with your gynaecologist."
        ],
        "bullets": [
          "Pain relief: over-the-counter anti-inflammatory painkillers, such as ibuprofen, are often the first step for milder symptoms",
          "Hormonal treatment: combined contraceptive pills, progestogen-only options, or other hormonal therapies can suppress periods and ease pain by limiting cyclical stimulation of the tissue",
          "Surgical management: laparoscopic surgery can remove or destroy patches of endometriosis and ovarian cysts, which may relieve pain and sometimes improve the chances of natural conception; more extensive surgery is reserved for severe or complex disease",
          "Lifestyle and supportive care: gentle exercise, pelvic physiotherapy, and attention to sleep and stress can help some women manage symptoms alongside medical treatment"
        ]
      },
      {
        "heading": "A note on fertility",
        "paragraphs": [
          "Many women with endometriosis conceive without difficulty, and pregnancy remains possible with the condition. That said, it is recognised as one of the factors that can make conceiving take longer for some women, particularly when disease affects the ovaries or fallopian tubes. If you have been trying to conceive without success, it is worth discussing this with your gynaecologist so that fertility can be assessed and, if needed, addressed alongside symptom management."
        ]
      },
      {
        "heading": "Seek urgent care straight away",
        "paragraphs": [
          "Endometriosis can occasionally cause complications that need emergency care rather than a routine appointment. An endometriotic cyst on the ovary can, rarely, rupture or make the ovary twist (torsion), and other causes of sudden pelvic pain also need ruling out. Please go to your nearest hospital or emergency department straight away — do not wait for a routine appointment — if you have any of the following:"
        ],
        "bullets": [
          "Sudden, severe, or one-sided pelvic or abdominal pain that feels different from your usual pain",
          "Pain together with fainting, dizziness, or collapse",
          "Pain with fever, chills, or repeated vomiting",
          "A rigid, swollen, or very tender abdomen",
          "Very heavy bleeding that soaks a pad or more every hour, or large clots with weakness or dizziness",
          "A positive pregnancy test alongside pelvic pain or bleeding, which can signal an ectopic pregnancy"
        ]
      },
      {
        "heading": "When to reach out",
        "paragraphs": [
          "For non-urgent symptoms, please consider booking a consultation if you have period pain that disrupts your normal life, pelvic pain outside your period, pain during intercourse, or difficulty conceiving. Early evaluation does not always mean immediate treatment, but it lets you and your doctor build a clear picture and plan next steps that suit you.",
          "Dr Santhalakshmi S at Kairavi Women's Clinic, Kelambakkam, Chennai, sees women with these concerns regularly and can guide you through diagnosis and management, from simple pain relief to surgical care when needed. Call or WhatsApp +91 73586 79920 to book an appointment or ask a question."
        ]
      }
    ],
    "sources": [
      {
        "title": "Endometriosis - NHS",
        "url": "https://www.nhs.uk/conditions/endometriosis/"
      },
      {
        "title": "Endometriosis - Cleveland Clinic",
        "url": "https://my.clevelandclinic.org/health/diseases/10857-endometriosis"
      },
      {
        "title": "Endometriosis - World Health Organization Fact Sheet",
        "url": "https://www.who.int/news-room/fact-sheets/detail/endometriosis"
      },
      {
        "title": "Endometriosis - Mayo Clinic",
        "url": "https://www.mayoclinic.org/diseases-conditions/endometriosis/symptoms-causes/syc-20354656"
      }
    ]
  },
  {
    "slug": "uterine-fibroids-explained",
    "title": "Uterine Fibroids: What Every Woman Should Know",
    "date": "2026-06-29",
    "dateDisplay": "29 June 2026",
    "author": "Dr. Santhalakshmi S",
    "readingTime": "6 min read",
    "excerpt": "Fibroids are common and usually benign — here's what they are, the symptoms to watch for, the red flags that need urgent care, and when it's worth talking to a gynaecologist.",
    "content": [
      {
        "heading": "Overview",
        "paragraphs": [
          "If your doctor has ever mentioned fibroids, or you've noticed heavier periods than usual, you are not alone. Uterine fibroids are very common, non-cancerous (benign) growths that develop in or around the womb. They are made of muscle and fibrous tissue and can vary greatly in size — from as small as a pea to, in rare cases, as large as a melon. Many women — by some estimates a majority — develop at least one fibroid during their reproductive years, often without ever knowing it.",
          "The reassuring news is that the overwhelming majority of fibroids are not cancer, and most women with fibroids never need surgery. This article explains what fibroids are, the symptoms they can cause, the small number of warning signs that need urgent attention, and how doctors decide on the right approach — from simply watching and waiting to medication or surgery."
        ]
      },
      {
        "heading": "What exactly are fibroids?",
        "paragraphs": [
          "Fibroids (medically called leiomyomas) are growths of muscle and fibrous tissue that form within the wall of the uterus, on its outer surface, or bulging into the uterine cavity. They tend to develop during the reproductive years, most often between the ages of 30 and 50, and often shrink on their own after menopause as oestrogen levels fall.",
          "The exact cause isn't fully understood, but the hormones oestrogen and progesterone are believed to play a key role. Fibroids can grow when hormone levels are high, such as during pregnancy, and tend to shrink after menopause. Because fibroids usually shrink rather than grow after menopause, a fibroid that appears for the first time or keeps growing after menopause — or any fibroid that grows unusually quickly — is uncommon and should be checked promptly. This is rarely anything serious, but it is important to confirm the diagnosis. Certain factors can make fibroids more likely:"
        ],
        "bullets": [
          "Family history of fibroids",
          "Higher body weight or obesity",
          "Never having had a full-term pregnancy",
          "Starting periods at a young age",
          "Reaching menopause at a later age"
        ]
      },
      {
        "heading": "Common symptoms",
        "paragraphs": [
          "Many women with fibroids have no symptoms at all, and the fibroid is only discovered during a routine scan or examination. When symptoms do occur, they depend on the size, number, and location of the fibroids."
        ],
        "bullets": [
          "Heavy or prolonged menstrual bleeding, sometimes with clots",
          "A feeling of pressure or heaviness in the lower abdomen or pelvis",
          "Lower back pain or period pain that feels different from usual",
          "Needing to pass urine more often, due to pressure on the bladder",
          "Bloating, constipation, or a sense of fullness",
          "Pain during intercourse",
          "Occasionally, difficulty conceiving or complications in pregnancy"
        ]
      },
      {
        "heading": "Why heavy bleeding matters",
        "paragraphs": [
          "One of the most important reasons not to ignore heavy periods caused by fibroids is anaemia. Persistent heavy bleeding can gradually lower your haemoglobin, leaving you tired, breathless, or dizzy. If you've been feeling unusually fatigued alongside heavy periods, it's worth having your haemoglobin checked — this is a simple blood test. Low iron can often be corrected with iron-rich foods and iron supplementation, but it is just as important to address the underlying cause of the bleeding, which is where a gynaecologist can help.",
          "A slow, gradual drop in haemoglobin is the usual pattern. But very sudden, heavy blood loss — or feeling faint, breathless at rest, or aware of a racing heart — is different and needs urgent attention rather than a routine appointment (see 'When to reach out' below)."
        ]
      },
      {
        "heading": "Do fibroids always need treatment?",
        "paragraphs": [
          "No — and this is one of the most reassuring facts about fibroids. If a fibroid is small and isn't causing symptoms, many doctors recommend simple monitoring with periodic pelvic examinations or ultrasound scans to check whether it is growing. There is no need to rush into treatment just because a fibroid has been found.",
          "Treatment is generally considered when fibroids cause heavy bleeding that affects daily life, significant pain, pressure symptoms, or when they may be affecting fertility. The right approach always depends on your age, symptoms, fibroid size and location, and whether you wish to have children in the future — which is why a personalised discussion with your gynaecologist matters more than general advice."
        ]
      },
      {
        "heading": "Treatment options, from least to most invasive",
        "paragraphs": [
          "When treatment is needed, there is a range of options, and most start with the least invasive approach first."
        ],
        "bullets": [
          "Watchful waiting: regular check-ups and scans if fibroids are stable and not causing bothersome symptoms",
          "Pain relief: over-the-counter anti-inflammatory painkillers (such as ibuprofen) for period pain",
          "Medicines to reduce bleeding: tranexamic acid, a non-hormonal tablet taken during your period, can lessen heavy menstrual bleeding",
          "Hormonal options: the combined pill, a hormonal (levonorgestrel) IUD, or other hormone-based treatments to reduce heavy bleeding",
          "Medication to shrink fibroids: certain hormone-modulating medicines (such as GnRH analogues) can temporarily reduce fibroid size and bleeding, usually used short-term or before surgery",
          "Iron supplementation: to correct or prevent anaemia from heavy bleeding, alongside iron-rich foods",
          "Minimally invasive procedures: such as uterine artery embolisation, which reduces blood flow to shrink fibroids",
          "Myomectomy: surgical removal of fibroids while preserving the uterus, often preferred for women who wish to have children — though new fibroids can sometimes develop later",
          "Hysterectomy: removal of the uterus, considered when other options aren't suitable and childbearing is complete; because the uterus itself is removed, fibroids cannot grow back"
        ]
      },
      {
        "heading": "When to reach out",
        "paragraphs": [
          "It's worth booking a consultation with a gynaecologist if you have periods that are heavier or longer than usual, pelvic pressure or a dragging ache that doesn't settle, needing to pass urine far more often, or discomfort during intercourse. If you've been feeling persistently tired, it is sensible to arrange a simple haemoglobin blood test and a gynaecology review, as ongoing heavy bleeding can slowly cause anaemia. It's also worth getting checked if you're planning a pregnancy and have known fibroids, or if you simply want peace of mind after noticing a change in your cycle.",
          "Some symptoms, however, should not wait for a booked appointment. Go to your nearest emergency department — or call the clinic urgently during clinic hours — if you notice any of the following:"
        ],
        "bullets": [
          "Very heavy bleeding — soaking through a pad or tampon every hour for two or more hours in a row, or passing clots larger than a coin. This can signal dangerous blood loss.",
          "Feeling faint, very dizzy, breathless even at rest, chest pain, or your heart racing — these can be signs that blood loss is affecting your body and need same-day assessment.",
          "Sudden, severe pelvic pain, especially if it comes with fever, vomiting, or feeling generally unwell.",
          "Any vaginal bleeding or spotting after menopause — even if you have known fibroids, bleeding after menopause is never normal and should be checked promptly, as it can occasionally point to a problem in the womb lining that needs investigation."
        ]
      },
      {
        "heading": "How we can help",
        "paragraphs": [
          "At Kairavi Women's Clinic in Kelambakkam, Dr. Santhalakshmi S offers a thorough, unhurried evaluation — including ultrasound assessment where needed — to understand your fibroids and discuss options that suit your health, symptoms, and life plans. For a routine review, you're welcome to call or WhatsApp +91 73586 79920 to book a consultation. For the urgent symptoms listed above, please seek same-day emergency care rather than waiting for an appointment.",
          "Remember: fibroids are common and usually benign, and most women manage them well with the right guidance — but do trust your instincts and seek help early if something doesn't feel right. This article is for general information only and isn't a substitute for a personal medical consultation."
        ]
      }
    ],
    "sources": [
      {
        "title": "Fibroids - NHS",
        "url": "https://www.nhs.uk/conditions/fibroids/"
      },
      {
        "title": "Uterine Fibroids - Cleveland Clinic",
        "url": "https://my.clevelandclinic.org/health/diseases/9130-uterine-fibroids"
      },
      {
        "title": "Uterine Fibroids - ACOG (American College of Obstetricians and Gynecologists)",
        "url": "https://www.acog.org/womens-health/faqs/uterine-fibroids"
      }
    ]
  },
  {
    "slug": "a-healthy-first-trimester",
    "title": "A Healthy First Trimester: What to Expect",
    "date": "2026-06-27",
    "dateDisplay": "27 June 2026",
    "author": "Dr. Santhalakshmi S",
    "readingTime": "6 min read",
    "excerpt": "Those first twelve weeks bring a whirlwind of change. Here is what is normal, what helps, and when to reach out to your gynaecologist for reassurance.",
    "content": [
      {
        "paragraphs": [
          "Finding out you are pregnant can bring excitement, relief and a fair bit of anxiety, sometimes all in the same afternoon. The first trimester, roughly weeks 1 to 13, is when your baby's major organs begin to form, and it is also when your own body starts adjusting rapidly. Knowing what is normal, what needs attention, and how to care for yourself can make this stretch feel a lot less overwhelming."
        ]
      },
      {
        "heading": "What is happening in your body",
        "paragraphs": [
          "In these early weeks, the fertilised egg implants in the womb lining and begins developing into an embryo. By the end of the first trimester, your baby's heart, brain, limbs and other organs are already taking shape, even though the baby is still only a few centimetres long.",
          "Meanwhile, your body is producing higher levels of hormones such as human chorionic gonadotropin (hCG), oestrogen and progesterone to support the pregnancy. These hormonal shifts are behind most of the symptoms you may notice in the coming weeks."
        ]
      },
      {
        "heading": "Folic acid and other essentials",
        "paragraphs": [
          "Folic acid is one of the most important things you can take in early pregnancy. It helps your baby's neural tube develop properly into the brain and spinal cord, and taking it lowers the chance of neural tube defects such as spina bifida. Most guidelines recommend 400 micrograms of folic acid daily, ideally starting before conception and continued through at least the first 12 weeks. If you have a higher-risk history, such as a previous baby with a neural tube defect, diabetes or certain medicines, your doctor may advise a higher dose, so it is always worth discussing your personal needs at your booking visit.",
          "Alongside folic acid, your doctor is likely to check your haemoglobin and may recommend iron, calcium or vitamin D depending on your diet and blood results. Try to eat a balanced diet with plenty of vegetables, fruits, whole grains, dairy and protein, and stay well hydrated."
        ],
        "bullets": [
          "Folic acid: 400 micrograms daily (up to a higher dose only if your doctor advises)",
          "A varied, balanced diet with iron- and calcium-rich foods",
          "Adequate hydration and rest",
          "Continuing any prescribed supplements exactly as recommended, not self-adjusting doses"
        ]
      },
      {
        "heading": "Common symptoms you may notice",
        "paragraphs": [
          "Almost every early pregnancy brings some combination of tiredness, nausea (with or without vomiting), breast tenderness, frequent urination, mild mood swings and food aversions. Nausea often begins around weeks 5 to 6, tends to peak around weeks 9 to 10, and usually eases as you move into the second trimester, though for some women it lasts longer. Mild spotting can sometimes occur too, but any bleeding should always be mentioned to your doctor rather than assumed to be harmless.",
          "These changes, while uncomfortable, are usually a sign that pregnancy hormones are doing their job. Eating small, frequent meals, keeping ginger or plain snacks handy, and resting when you can often help with nausea and fatigue."
        ]
      },
      {
        "heading": "Things to avoid",
        "paragraphs": [
          "Certain habits and foods carry a higher risk of harm in early pregnancy and are best avoided completely, or discussed with your doctor first."
        ],
        "bullets": [
          "Alcohol in any amount, and smoking or tobacco of any kind",
          "Raw or undercooked meat, fish and eggs, and unpasteurised milk or cheese",
          "Certain high-mercury fish, and processed deli meats unless heated until steaming",
          "Hot tubs, saunas and any medicines, herbal remedies or supplements not cleared by your doctor",
          "Contact sports or activities with a risk of abdominal injury"
        ]
      },
      {
        "heading": "Your booking visit and early scan",
        "paragraphs": [
          "Your first proper prenatal appointment, often called the booking visit, ideally happens before around 8 to 10 weeks, or soon after you have a positive pregnancy test. This visit is typically longer than later ones and includes a detailed history, a general health check, blood tests (including haemoglobin, blood group, infection screening and thyroid, as appropriate), a urine test, and a discussion of your due date.",
          "An early ultrasound scan, sometimes called a dating or viability scan, is often done around 6 to 9 weeks in early pregnancy, though a scan any time up to about 13 to 14 weeks still dates the pregnancy very accurately. It confirms the pregnancy is developing inside the womb, checks the heartbeat, and helps estimate the due date. Not everyone needs a scan this early, so your doctor will guide you on the right timing based on your history."
        ]
      },
      {
        "heading": "Emergency signs: get help immediately",
        "paragraphs": [
          "Most first-trimester symptoms are uncomfortable but expected. A few, however, can signal heavy internal bleeding or a pregnancy growing outside the womb (an ectopic pregnancy). These are medical emergencies where minutes matter, and they cannot wait for a message to be read or a call to be returned.",
          "If you have any of the signs below, go straight to your nearest hospital emergency department or call an ambulance on 108 immediately. Please do not wait for a reply from a clinic or messaging service. You can let us know on the way, but getting to emergency care comes first."
        ],
        "bullets": [
          "Heavy vaginal bleeding, such as soaking through a pad within an hour, or passing large clots",
          "Fainting, near-fainting, or feeling very dizzy or lightheaded",
          "Sharp or severe pain low down on one side of your abdomen",
          "Pain at the tip of your shoulder, especially alongside dizziness or bleeding, which can be a sign of a pregnancy growing outside the womb and needs urgent assessment",
          "Signs of shock, such as cold, clammy or pale skin, a racing heart or feeling like you might pass out"
        ]
      },
      {
        "heading": "When to reach out to us",
        "paragraphs": [
          "For concerns that are worrying but not an emergency, Dr. Santhalakshmi S and her team at Kairavi Women's Clinic are here to support you through every stage of a healthy pregnancy. If any of the following occur, or if you simply feel unsure about something, please call or WhatsApp us at +91 73586 79920 and we will guide you on what to do next."
        ],
        "bullets": [
          "Mild spotting or light bleeding",
          "Cramping that is ongoing or uncomfortable but not severe",
          "Vomiting so severe you cannot keep fluids down (contact us the same day, as you may need treatment for dehydration)",
          "Fever, chills or unusual vaginal discharge",
          "Any symptom that simply worries you"
        ]
      }
    ],
    "sources": [
      {
        "title": "How and when to take folic acid - NHS",
        "url": "https://www.nhs.uk/medicines/folic-acid/how-and-when-to-take-folic-acid/"
      },
      {
        "title": "First Trimester of Pregnancy: Weeks & What To Expect - Cleveland Clinic",
        "url": "https://my.clevelandclinic.org/health/articles/9699-first-trimester"
      },
      {
        "title": "1st trimester pregnancy: What to expect - Mayo Clinic",
        "url": "https://www.mayoclinic.org/healthy-lifestyle/pregnancy-week-by-week/in-depth/pregnancy/art-20047208"
      },
      {
        "title": "Ectopic pregnancy - Symptoms - NHS",
        "url": "https://www.nhs.uk/conditions/ectopic-pregnancy/symptoms/"
      }
    ]
  },
  {
    "slug": "gestational-diabetes-explained",
    "title": "Gestational Diabetes: What It Means for You and Your Baby",
    "date": "2026-06-25",
    "dateDisplay": "25 June 2026",
    "author": "Dr. Santhalakshmi S",
    "readingTime": "6 min read",
    "excerpt": "A gestational diabetes diagnosis can feel alarming, but with the right screening, everyday care and follow-up, most women go on to have healthy pregnancies and healthy babies.",
    "content": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Hearing \"gestational diabetes\" at your antenatal check-up can feel worrying, but it is a common and manageable condition. It means your blood sugar (glucose) rises for the first time during pregnancy, because pregnancy hormones make it harder for your body to use insulin. It usually appears in the second half of pregnancy and, for most women, resolves after birth.",
          "With early detection and simple day-to-day care, most women with gestational diabetes have healthy pregnancies and healthy babies."
        ]
      },
      {
        "heading": "What Is Gestational Diabetes?",
        "paragraphs": [
          "During pregnancy, the placenta produces hormones that help your baby grow but also make your cells more resistant to insulin, which controls blood sugar. Most women compensate by making extra insulin; when the body cannot keep up, blood glucose rises — this is gestational diabetes.",
          "It does not mean you had diabetes before or did anything wrong. Certain factors raise the chance, including a body mass index (BMI) above 30, a parent or sibling with diabetes, older maternal age, gestational diabetes in a previous pregnancy, or a previous larger baby (4.5 kg or more). Women of South Asian background, including Indian women, carry a higher risk, which is one reason routine screening matters here."
        ]
      },
      {
        "heading": "Screening Around 24-28 Weeks",
        "paragraphs": [
          "Most women are screened between 24 and 28 weeks using an oral glucose tolerance test (OGTT); your doctor may test earlier if you have risk factors or previous gestational diabetes. The test usually involves:"
        ],
        "bullets": [
          "Fasting overnight, typically 8-10 hours, with only water allowed",
          "A blood sample to check your fasting glucose level, then drinking a measured glucose solution",
          "One or more further samples over the next two hours to see how your body processes the sugar"
        ]
      },
      {
        "heading": "Managing Gestational Diabetes",
        "paragraphs": [
          "For many women, diet and activity changes are enough to keep blood sugar in a healthy range; your doctor or dietitian will recommend the steps below.",
          "If diet and activity alone are not enough, your doctor may prescribe tablets or insulin. This is common and does not mean you have failed; your body simply needs extra support to keep you and your baby safe.",
          "If you are on insulin or glucose-lowering tablets, learn the signs of hypoglycaemia (a \"hypo\"), when blood sugar drops too low: shakiness, sweating, dizziness, a fast or pounding heartbeat, blurred vision, sudden hunger, or confusion. If you notice these, take a fast-acting sugar straight away, such as glucose tablets, fruit juice or a spoonful of honey, then recheck your blood sugar after about 15 minutes. Seek urgent help if symptoms are severe, do not settle, or your awareness is affected. Dosing decisions stay with your treating doctor."
        ],
        "bullets": [
          "Balanced meals with plenty of vegetables, whole grains and lean protein, limiting sugary foods, sweetened drinks and refined carbohydrates",
          "Spacing meals and snacks evenly rather than having a few large meals",
          "Regular gentle activity such as walking, unless your doctor advises otherwise",
          "Checking blood sugar at home with a glucose meter, usually in the morning and after meals, so you can track progress",
          "Attending antenatal visits regularly so growth scans and blood pressure can be monitored"
        ]
      },
      {
        "heading": "Why It Matters",
        "paragraphs": [
          "Well controlled, most pregnancies proceed normally. Left unmanaged, higher blood sugar can raise the chance of problems for mother and baby, including:"
        ],
        "bullets": [
          "A larger-than-average baby (macrosomia), which can make delivery harder and raise caesarean risk",
          "Higher risk of high blood pressure or pre-eclampsia in the mother",
          "Excess amniotic fluid (polyhydramnios) or, in some cases, preterm birth",
          "The baby having low blood sugar or jaundice shortly after birth",
          "A higher lifetime chance for both mother and child of type 2 diabetes later on"
        ]
      },
      {
        "heading": "Warning Signs: When to Seek Urgent Care",
        "paragraphs": [
          "Most days are routine, but a few symptoms should not wait. If any of these happen, do not wait for your next antenatal visit or a routine appointment. Go straight to your nearest hospital or maternity/labour unit, or telephone the clinic without delay, day or night:"
        ],
        "bullets": [
          "A severe or persistent headache that does not ease with simple painkillers",
          "Blurred vision, spots or flashing lights, or a sudden change in your eyesight",
          "Sudden swelling of your face, hands or feet",
          "Pain just below the ribs or in the upper right of your tummy",
          "Sudden shortness of breath (the signs above can indicate pre-eclampsia, a serious rise in blood pressure that can develop quickly and needs immediate assessment)",
          "Any reduction in, or change to, your baby's usual movements: contact your maternity unit immediately and never wait to see if it improves. A very quiet baby can sometimes follow a low blood sugar after insulin or tablets, so check your glucose; if movements stay reduced once it is normal, seek care at once",
          "Heavy vaginal bleeding, severe abdominal pain, or a gush or steady leaking of fluid"
        ]
      },
      {
        "heading": "After the Birth: What Happens Next",
        "paragraphs": [
          "For most women, blood sugar returns to normal soon after delivery, once the placenta and its hormones are gone. Doctors recommend a follow-up glucose test around 6-13 weeks after birth to confirm this, then periodic checks thereafter.",
          "Because gestational diabetes raises the chance of type 2 diabetes later, it is worth eating well, staying active, and having regular blood sugar checks in the years that follow, plus early testing in any future pregnancy."
        ]
      },
      {
        "heading": "When to Reach Out",
        "paragraphs": [
          "If you are due for screening, have risk factors, or are already diagnosed and want support with monitoring, diet or your birth plan, Dr. Santhalakshmi S at Kairavi Women's Clinic, Kelambakkam, Chennai, is here to guide you with care.",
          "For routine questions, such as milder symptoms like thirst, frequent urination, a dry mouth or tiredness, or understanding your test results, do call or WhatsApp +91 73586 79920 to book a consultation. Many are common in pregnancy, and a check-up helps you stay on top of things. Keep this separate, though, from the urgent warning signs above, which need immediate hospital assessment, not a routine booking. Every pregnancy is different, and personalised guidance makes all the difference."
        ]
      }
    ],
    "sources": [
      {
        "title": "Gestational diabetes - NHS",
        "url": "https://www.nhs.uk/conditions/gestational-diabetes/"
      },
      {
        "title": "Gestational Diabetes - Cleveland Clinic",
        "url": "https://my.clevelandclinic.org/health/diseases/9012-gestational-diabetes"
      },
      {
        "title": "Pre-eclampsia - NHS",
        "url": "https://www.nhs.uk/conditions/pre-eclampsia/"
      },
      {
        "title": "Your baby's movements - NHS",
        "url": "https://www.nhs.uk/pregnancy/keeping-well/your-babys-movements/"
      }
    ]
  },
  {
    "slug": "pcos-and-fertility",
    "title": "PCOS and Fertility: What You Can Do",
    "date": "2026-06-23",
    "dateDisplay": "23 June 2026",
    "author": "Dr. Santhalakshmi S",
    "readingTime": "6 min read",
    "excerpt": "PCOS is one of the most common — and most treatable — causes of ovulation trouble. With the right approach, most women with PCOS go on to conceive.",
    "content": [
      {
        "heading": "Overview",
        "paragraphs": [
          "If you have been told you have polycystic ovary syndrome (PCOS) and you are hoping to conceive, it is natural to feel worried. PCOS is one of the most common hormonal conditions in women of reproductive age, and a leading reason for irregular ovulation. But here is the reassuring part: PCOS is very treatable, and the large majority of women with PCOS who want to become pregnant eventually do, naturally or with some medical support."
        ]
      },
      {
        "heading": "How PCOS Affects Ovulation and Conceiving",
        "paragraphs": [
          "In a typical cycle, one ovary releases a mature egg each month. In PCOS, a hormonal imbalance often involving raised androgens (male hormones) and insulin resistance can prevent the ovary from releasing an egg regularly. This anovulation, or irregular ovulation, is the main reason PCOS can make conception harder.",
          "This does not mean ovulation never happens. Many women ovulate some months and not others, so cycles are unpredictable and conception can take longer. Reassuringly, the ovaries usually have plenty of eggs; the challenge is releasing one reliably, which is what treatment helps with.",
          "Regular bleeds matter for another reason too. When ovulation does not happen, the womb lining is not shed and is exposed to oestrogen for long stretches, which over time thickens it and raises the long-term risk of womb (endometrial) cancer. So it is best not to go many months without a period; if your cycles are very infrequent, your doctor can prescribe a short course of progestogen (progestin) tablets to trigger a protective bleed."
        ],
        "bullets": [
          "Irregular or absent periods are the most common sign that ovulation is not happening reliably",
          "Other PCOS features, such as excess hair growth, acne, or weight gain, often go along with the ovulation problem",
          "PCOS is usually diagnosed using a combination of symptoms, blood tests, and an ultrasound scan"
        ]
      },
      {
        "heading": "Lifestyle Steps That Genuinely Help",
        "paragraphs": [
          "Lifestyle changes are the recommended first step for most women with PCOS trying to conceive, working partly by improving insulin sensitivity, which helps restore ovulation. Even a modest weight loss, around 5 to 10% where you are above a healthy weight, can meaningfully improve ovulation and pregnancy rates.",
          "These changes take time, so be patient with yourself rather than chasing quick fixes."
        ],
        "bullets": [
          "Aim for a balanced diet rich in vegetables, whole grains, lean protein, and healthy fats, with limited refined sugar and processed food",
          "Build in regular moderate exercise, such as brisk walking, most days of the week",
          "If you smoke, quitting helps both fertility and general health",
          "Start a folic acid supplement (typically 400 mcg daily, or 5 mg if advised by your doctor) once you begin trying to conceive",
          "Get enough sleep and manage stress, as both support wellbeing while you try to conceive"
        ]
      },
      {
        "heading": "Medical Treatments That Support Ovulation",
        "paragraphs": [
          "When lifestyle changes alone are not enough, several medical options can help trigger ovulation. Your gynaecologist will recommend one based on your hormone profile, weight, and how long you have been trying.",
          "These are used one step at a time, moving on only if the previous one does not lead to ovulation or pregnancy."
        ],
        "bullets": [
          "Letrozole or clomiphene citrate: oral tablets taken early in the cycle to stimulate the ovary to release an egg; usually the first medicines tried, with letrozole now often preferred",
          "Metformin: sometimes added to improve insulin resistance, particularly alongside ovulation-inducing tablets",
          "Gonadotrophin injections: used under close monitoring if tablets alone do not work",
          "Laparoscopic ovarian drilling: a minor keyhole procedure sometimes considered when medicines have not worked",
          "IVF (in vitro fertilisation): considered if other treatments do not lead to pregnancy, or if other fertility factors are involved"
        ]
      },
      {
        "heading": "A Safety Note During Ovulation Treatment",
        "paragraphs": [
          "If you are having ovulation-induction injections or IVF, you will be monitored closely, because a small number of women respond too strongly to the medicines, a condition called ovarian hyperstimulation syndrome (OHSS). It is uncommon but can occasionally become serious. Seek urgent medical care straight away if you develop severe or worsening tummy pain or bloating, rapid weight gain, persistent vomiting, much reduced urine output, breathlessness, or pain or swelling in a calf."
        ]
      },
      {
        "heading": "When to Reach Out for Fertility Help",
        "paragraphs": [
          "If you have PCOS, it is reasonable to seek advice earlier than the usual one-year guideline, because irregular ovulation can make conception slower. Do not worry alone; a proper evaluation can pinpoint what is happening and what will help.",
          "At Kairavi Women's Clinic, Dr. Santhalakshmi S offers personalised evaluation and management for PCOS and fertility, from assessment to ovulation induction and, where needed, laparoscopic treatment. You are welcome to call or WhatsApp +91 73586 79920 to book a consultation in Kelambakkam, Chennai."
        ],
        "bullets": [
          "You have PCOS and have been trying to conceive for six months or more without success",
          "Your periods are very irregular or absent, making it hard to know if or when you are ovulating",
          "Your periods have been absent for around three months or more, as the womb lining needs to shed periodically to stay healthy",
          "You notice any unusually heavy, prolonged, or between-period bleeding, which should always be checked",
          "You are over 35 and would like to start fertility evaluation sooner",
          "You have had a previous miscarriage or are unsure about your PCOS diagnosis and management"
        ]
      },
      {
        "heading": "A Reassuring Note",
        "paragraphs": [
          "PCOS can feel overwhelming when you are planning a family, but it is a manageable condition, not a barrier to motherhood. With lifestyle support and, where needed, medical treatment, most women with PCOS go on to have successful pregnancies.",
          "Do know that PCOS pregnancies, while usually successful, warrant closer monitoring, as they carry a somewhat higher chance of gestational diabetes, raised blood pressure (pre-eclampsia), and miscarriage. Booking in early for antenatal care and attending your check-ups matters. Report any severe headache, changes in your vision, upper-tummy pain, or sudden swelling of the face, hands or feet promptly, as these can be warning signs of pre-eclampsia. Working closely with your gynaecologist gives you the best chance of a smooth journey to motherhood."
        ]
      }
    ],
    "sources": [
      {
        "title": "NHS - Polycystic ovary syndrome (PCOS)",
        "url": "https://www.nhs.uk/conditions/polycystic-ovary-syndrome-pcos/"
      },
      {
        "title": "NHS - Polycystic ovary syndrome (PCOS): Treatment",
        "url": "https://www.nhs.uk/conditions/polycystic-ovary-syndrome-pcos/treatment/"
      },
      {
        "title": "Infertility management in women with polycystic ovary syndrome: a review (PMC)",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7846416/"
      },
      {
        "title": "A Review of First Line Infertility Treatments and Supporting Evidence in Women with Polycystic Ovary Syndrome (PMC)",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6780967/"
      }
    ]
  },
  {
    "slug": "contraception-options-explained",
    "title": "Contraception Options Explained: Finding What Suits You",
    "date": "2026-06-21",
    "dateDisplay": "21 June 2026",
    "author": "Dr. Santhalakshmi S",
    "readingTime": "5 min read",
    "excerpt": "From the pill to the IUD to permanent methods, here is a plain-English guide to choosing contraception that fits your body, your family plans and your life — including the warning signs everyone should know.",
    "content": [
      {
        "heading": "Overview",
        "paragraphs": [
          "There is no single \"best\" contraceptive — only the one that suits your health, your family plans and how easily you can use it. This guide covers the main categories in plain language, for an informed conversation with your gynaecologist.",
          "Every method here is generally safe when chosen with medical guidance, but conditions such as high blood pressure, migraine with aura or clotting disorders can rule options in or out. A few also carry rare but serious warning signs, flagged clearly below. This article is educational and does not replace a personal consultation."
        ]
      },
      {
        "heading": "Reversible hormonal methods",
        "paragraphs": [
          "Hormonal methods work by preventing ovulation, thickening cervical mucus, or thinning the uterine lining. They are reversible — fertility usually returns after stopping, though with the injection it can take several months longer.",
          "With typical, real-world use, the pill, patch and vaginal ring are around 91-93% effective over a year, rising to over 99% with perfect use. The injectable is roughly 96% effective."
        ],
        "bullets": [
          "Combined pill (oestrogen + progestogen): daily tablet; also tends to make periods lighter and more regular",
          "Progestogen-only (mini) pill: an option for women who cannot take oestrogen, including many breastfeeding mothers",
          "Contraceptive injection: given every one to three months, so there is no daily routine to remember",
          "Implant: a small rod under the skin of the upper arm; among the most effective reversible methods, lasting several years with a failure rate well under 1%"
        ]
      },
      {
        "heading": "Warning signs on oestrogen-containing methods",
        "paragraphs": [
          "The methods that contain oestrogen — the combined pill, the patch and the vaginal ring — carry a small risk of a serious blood clot. The risk is low, but the warning signs are worth memorising, because acting quickly can be life-saving. Do not wait for a routine appointment: seek urgent or emergency care immediately if you notice severe or persistent pain, swelling, redness or warmth in a calf or thigh (a possible clot in the leg); sudden breathlessness, sharp chest pain or coughing up blood (a possible clot in the lung); a sudden severe or unusual headache, slurred speech, fainting, or weakness or numbness in a limb or one side of the face (a possible stroke); sudden blurred vision or loss of vision; or severe abdominal pain."
        ]
      },
      {
        "heading": "IUD and IUS (intrauterine devices)",
        "paragraphs": [
          "An IUD (copper, non-hormonal) or IUS (hormonal) is a small device a trained doctor places inside the uterus. Both are \"fit and forget\" for several years, with fertility returning as soon as the device is removed. They are among the most effective reversible methods, with failure rates under 1%; the IUS often makes periods lighter, while the copper IUD is hormone-free.",
          "Serious problems are uncommon, but a few warning signs need urgent attention. Seek urgent or emergency care for a fever with pelvic pain or unusual, foul-smelling discharge (a possible pelvic infection); or severe or one-sided lower abdominal pain, especially with a missed period, faintness or dizziness — this can signal an ectopic pregnancy, a medical emergency. Very heavy or prolonged bleeding also needs prompt review. Check the threads occasionally: if the device or its strings feel different, or you cannot feel them, arrange to be seen, as it may have shifted or been expelled."
        ]
      },
      {
        "heading": "Barrier methods and STI protection",
        "paragraphs": [
          "Barrier methods physically stop sperm from reaching the egg. Male condoms are around 82-87% effective with typical use, rising to about 98% with correct use every time. Female condoms and diaphragms are also available.",
          "Condoms are also the only method that reduces the risk of sexually transmitted infections (STIs), including HIV. Many couples pair a condom with a more effective method — the pill or IUD — for \"dual protection\" against both pregnancy and infection."
        ]
      },
      {
        "heading": "Emergency contraception",
        "paragraphs": [
          "Accidents happen — a burst condom, missed pills, or unprotected sex. Emergency contraception is a backup for these situations, not a routine method, and works better the sooner it is used.",
          "Emergency pills containing levonorgestrel are most effective within 72 hours (another type, ulipristal acetate, works a little longer), and a pharmacist can often help. The copper IUD is the most effective option and can be fitted up to five days afterwards, then continue as ongoing contraception. Emergency contraception prevents a pregnancy from starting — it does not end an established one. If you may need it, contact the clinic or a pharmacist as soon as you can."
        ]
      },
      {
        "heading": "Permanent methods",
        "paragraphs": [
          "For those certain their family is complete, sterilisation is an option — female tubal ligation (often laparoscopic day-care surgery) or male vasectomy. Both are highly effective, with failure rates well under 1%, and a vasectomy is simpler, quicker and lower-risk.",
          "These methods should be considered permanent. Reversal surgery exists but is not always successful, so make this choice calmly and well-informed, after discussion with your partner and doctor — never rushed or under stress."
        ]
      },
      {
        "heading": "Options through India's public health programme",
        "paragraphs": [
          "Under India's national family planning programme, government facilities offer free options including the Antara injectable (every three months) and the non-hormonal Chhaya pill, alongside condoms, the pill, IUDs and sterilisation. If cost is a concern, ask about these options."
        ]
      },
      {
        "heading": "How to choose, and when to reach out",
        "paragraphs": [
          "The right method depends on your age, whether and when you plan more children, any health conditions, breastfeeding status and your lifestyle. A gynaecologist can help you weigh effectiveness, side effects, convenience and reversibility.",
          "For everyday questions — choosing or switching methods, tolerable side effects, or understanding permanent options — Dr Santhalakshmi S at Kairavi Women's Clinic in Kelambakkam is happy to help in a private, unhurried consultation. Call or WhatsApp +91 73586 79920 to book an appointment.",
          "One important exception: the warning signs above are not reasons to wait for an appointment. If you develop possible signs of a blood clot or stroke, a suspected ectopic pregnancy, or a pelvic infection with fever, do not phone to book a slot — go straight to the nearest emergency department or casualty, or call your local emergency number. With these red flags, it is always better to be checked and reassured than to delay."
        ]
      }
    ],
    "sources": [
      {
        "title": "Contraception - Methods of contraception (NHS)",
        "url": "https://www.nhs.uk/contraception/methods-of-contraception/"
      },
      {
        "title": "Side effects and risks of the combined pill (NHS)",
        "url": "https://www.nhs.uk/contraception/methods-of-contraception/combined-pill/side-effects/"
      },
      {
        "title": "Emergency contraception (NHS)",
        "url": "https://www.nhs.uk/conditions/contraception/emergency-contraception/"
      },
      {
        "title": "Health Ministry launches two new contraceptives - Antara and Chhaya (Press Information Bureau, Government of India)",
        "url": "https://www.pib.gov.in/newsite/PrintRelease.aspx?relid=170537&reg=3&lang=2"
      }
    ]
  },
  {
    "slug": "menopause-symptoms-and-support",
    "title": "Menopause: Symptoms and How to Feel Better",
    "date": "2026-06-19",
    "dateDisplay": "19 June 2026",
    "author": "Dr. Santhalakshmi S",
    "readingTime": "7 min read",
    "excerpt": "Menopause is a natural transition, not an illness — and there is a lot you can do, with the right guidance, to feel steady, strong and well through it.",
    "content": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Every woman goes through menopause, yet many of us reach it without quite knowing what to expect. Menopause simply means your periods have stopped for good — it is confirmed once you have gone 12 months without a period. It usually happens between about 45 and 55. In India the average age is a little earlier than in Western countries — around 46 to 47 years, compared with about 51 in the UK. The years leading up to it, called perimenopause, are when most of the noticeable changes begin. Understanding what is happening in your body can make this transition feel far less confusing — and there are genuinely helpful ways to manage the symptoms."
        ]
      },
      {
        "heading": "Perimenopause vs menopause: what is the difference?",
        "paragraphs": [
          "Perimenopause is the run-up to menopause, when your ovaries gradually produce less oestrogen. It often lasts around four to eight years, and periods commonly become unpredictable during this time — closer together, further apart, heavier or lighter than before. Menopause itself is a single point in time: the day you complete a full year with no period. After that, you are in postmenopause, when hormone levels settle at a lower, steadier baseline.",
          "It helps to remember this is a gradual biological shift, not a sudden event. Symptoms can start well before periods stop and, for some women, continue for several years afterwards."
        ]
      },
      {
        "heading": "Common symptoms to expect",
        "paragraphs": [
          "Symptoms vary widely from woman to woman, and not everyone experiences all of them. The most commonly reported ones are listed below. They can last several years — often around seven to nine — and may change in character over time, so what troubles you most in early perimenopause may look quite different a few years on."
        ],
        "bullets": [
          "Irregular periods that become lighter, heavier, closer together or further apart, eventually stopping altogether",
          "Hot flushes and night sweats — sudden warmth in the face, neck and chest, sometimes with sweating, palpitations or a feeling of anxiety",
          "Mood changes such as irritability, low mood, anxiety or tearfulness, often worsened by disturbed sleep",
          "Trouble sleeping, and difficulty concentrating or with memory (often called \"brain fog\")",
          "Vaginal dryness, discomfort during intercourse, and more frequent urinary tract infections",
          "Joint aches, headaches, hair thinning and changes in weight distribution, especially around the abdomen"
        ]
      },
      {
        "heading": "Lifestyle steps that genuinely help",
        "paragraphs": [
          "Small, consistent habits can make a real difference to how you feel day to day. None of these are cures, but together they support your body through the transition."
        ],
        "bullets": [
          "Dress in layers and keep your room cool, especially at night, to ease hot flushes and sweats",
          "Stay physically active with a mix of brisk walking, yoga or strength-based exercise most days of the week",
          "Eat a balanced diet rich in vegetables, fruits, whole grains, calcium-rich foods (dairy, ragi, sesame, leafy greens) and adequate protein",
          "Limit caffeine, alcohol and spicy food if you notice they trigger flushes or disturb your sleep",
          "Practise stress-reduction techniques such as breathing exercises, meditation or gentle yoga",
          "Keep a symptom diary — it helps you and your doctor identify patterns and triggers"
        ]
      },
      {
        "heading": "Hormone replacement therapy: a balanced view",
        "paragraphs": [
          "Hormone replacement therapy (HRT) is the most effective treatment for troublesome hot flushes, night sweats and vaginal dryness, and it can also help protect bone density. It usually involves oestrogen, combined with a progestogen if you still have your uterus, and comes as tablets, patches, gels or sprays. For vaginal dryness alone, a low-dose vaginal oestrogen can be used on its own.",
          "HRT is not right for everyone, and the decision depends on your personal and family medical history, including any history of certain cancers, blood clots or heart disease. Non-hormonal options — including certain antidepressants, cognitive behavioural therapy and lifestyle measures — can also help with hot flushes and mood symptoms when HRT is not suitable. This is very much a personal decision, best made after an open discussion with your doctor about your individual risks and benefits, rather than a one-size-fits-all choice."
        ]
      },
      {
        "heading": "Looking after your bones",
        "paragraphs": [
          "Falling oestrogen levels speed up bone loss, particularly in the first few years after your last period, which raises the risk of osteoporosis later in life. The good news is that bone health responds well to a few consistent habits.",
          "Aim for adequate dietary calcium (dairy products, sesame seeds, ragi and leafy greens are useful in an Indian diet), along with vitamin D — from safe sun exposure or a supplement if your levels are low, which your doctor can check with a simple blood test. Weight-bearing exercise such as brisk walking, dancing or light strength training also helps maintain bone strength. If you have risk factors for osteoporosis, your doctor may suggest a bone density (DEXA) scan."
        ]
      },
      {
        "heading": "When to reach out",
        "paragraphs": [
          "Menopause is a natural stage of life, not a disease, but you do not have to simply endure difficult symptoms. It is worth booking an appointment if hot flushes, mood changes or sleep problems are affecting your daily life, if your periods become heavy or frequent during perimenopause, or if you would like to explore whether HRT or another treatment is right for you.",
          "A few situations need prompt rather than routine attention. Any vaginal bleeding once your periods have stopped for a full year — known as postmenopausal bleeding — should always be checked promptly, without waiting for a routine appointment. It is often not caused by anything serious, but it must be evaluated to rule out conditions such as cancer of the womb lining, which is far more treatable when found early, so please contact the clinic without delay even if it happens only once. You should also seek urgent, same-day care if bleeding during perimenopause is very heavy — soaking through a pad or more every hour, passing large clots, or coming with dizziness, breathlessness or a racing heart — as this can cause significant blood loss.",
          "Dr Santhalakshmi S at Kairavi Women's Clinic in Kelambakkam, Chennai, offers personalised menopause care, from symptom management to bone health screening. You are welcome to call or WhatsApp +91 73586 79920 to book a consultation and discuss what will work best for you."
        ]
      }
    ],
    "sources": [
      {
        "title": "Menopause and perimenopause - Symptoms (NHS)",
        "url": "https://www.nhs.uk/conditions/menopause/symptoms/"
      },
      {
        "title": "Menopause and perimenopause - Treatment (NHS)",
        "url": "https://www.nhs.uk/conditions/menopause/treatment/"
      },
      {
        "title": "Postmenopausal bleeding (NHS)",
        "url": "https://www.nhs.uk/conditions/post-menopausal-bleeding/"
      },
      {
        "title": "Menopause (ACOG Topics)",
        "url": "https://www.acog.org/topics/menopause"
      }
    ]
  },
  {
    "slug": "breastfeeding-getting-started",
    "title": "Breastfeeding: A Gentle Guide to Getting Started",
    "date": "2026-06-17",
    "dateDisplay": "17 June 2026",
    "author": "Dr. Santhalakshmi S",
    "readingTime": "8 min read",
    "excerpt": "Breastfeeding is a skill that mother and baby learn together, and a little patience and the right support can make all the difference. Here is a warm, practical guide to the first days and weeks.",
    "content": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Bringing a new baby home is joyful, tiring, and often overwhelming, and breastfeeding is one more skill you and your baby learn together. It rarely goes perfectly from the first feed, and that is normal. With good positioning, patience, and support, most early difficulties settle within a couple of weeks.",
          "This guide brings together evidence-based advice from the NHS, the World Health Organization, and other trusted sources. Every mother and baby is different, so use it as general guidance and speak with Dr Santhalakshmi or a lactation counsellor for advice suited to you."
        ]
      },
      {
        "heading": "Why breastfeeding helps",
        "paragraphs": [
          "Breast milk is uniquely suited to your baby's needs. It changes over the first days and weeks to match your baby's growth and carries antibodies that offer some protection against infections. Skin-to-skin contact soon after birth also helps steady your baby's temperature and encourages the first feed.",
          "For mothers, breastfeeding releases oxytocin, which helps the womb contract after delivery and supports bonding. It is also linked with a lower risk of some later health conditions, though it is one factor among many.",
          "In the early days, give only breast milk. Avoid prelacteal feeds such as honey, sugar or jaggery water, ghutti, or plain water: these are unnecessary, can displace the valuable colostrum, and may carry infection risk. Colostrum, the thick first milk, is rich in antibodies and suited to a newborn's tiny stomach. Where possible, feed within the first hour after birth; the World Health Organization recommends exclusive breastfeeding for the first six months."
        ]
      },
      {
        "heading": "Getting a good latch",
        "paragraphs": [
          "A good latch is the most important factor in comfortable, effective feeding. When it is right, feeding should not hurt after the first few seconds. If it does, gently break the suction with a clean finger and start again rather than pushing through pain."
        ],
        "bullets": [
          "Hold your baby close, tummy to tummy, with their nose level with your nipple",
          "Let their head tip back slightly so the top lip brushes your nipple, encouraging a wide, open mouth",
          "Wait for a wide gape, then bring baby to the breast (not breast to baby), aiming for the roof of their mouth",
          "Their chin should touch the breast first, lips flanged outwards, with more darker skin showing above the top lip than below",
          "Cheeks should look full and rounded, and you should hear soft swallowing rather than clicking"
        ]
      },
      {
        "heading": "Feeding on demand in the early days",
        "paragraphs": [
          "Newborns feed frequently and irregularly, often 8 to 12 times in 24 hours, and this is normal. Rather than watching the clock, watch for early hunger cues such as rooting, sucking on their hands, or smacking their lips, and offer the breast before crying starts, as a crying baby can be harder to latch.",
          "Frequent feeding is also how your body receives the signal to build a full milk supply, so try not to worry if feeds feel constant at first. In general you cannot overfeed a breastfed baby who is latching and swallowing well: let your baby feed until they come off on their own, and offer the second side if they seem interested. Even so, a poorly feeding baby can still take in too little, so watch for the warning signs below."
        ]
      },
      {
        "heading": "Common early problems and simple fixes",
        "paragraphs": [
          "Sore nipples and engorgement are common in the first week or two and usually settle once feeding is well established."
        ],
        "bullets": [
          "Sore nipples: Usually a positioning or latch issue, so re-check the latch. Let a little breast milk dry on the nipple, air-dry it, and change damp breast pads regularly",
          "Engorgement: When your milk 'comes in' around day 2 to 4, breasts can feel hard and full. Feed frequently, hand-express a little if baby struggles to latch, and use a cold compress between feeds",
          "Cracked or bleeding nipples: Feed on the less painful side first, and seek help promptly to have the latch checked rather than pushing through",
          "Blocked ducts: A tender lump often eases with gentle massage towards the nipple during feeds and frequent feeding to drain the breast"
        ]
      },
      {
        "heading": "When to see a doctor",
        "paragraphs": [
          "Most early hiccups are a normal part of learning to breastfeed, but please seek help sooner rather than later. It helps to know the difference between concerns that need feeding support and signs that need urgent medical care.",
          "For feeding support, get in touch if your baby is not latching, feeding is consistently painful, or your breasts become red, hot and painful with flu-like symptoms or a fever, which can signal mastitis. Also reach out if you feel unsure and would like reassurance.",
          "Contact us the same day if your baby is feeding poorly or losing weight, or you notice signs of dehydration: fewer than about six wet nappies a day after the first few days, dark or strong-smelling urine, a dry mouth, few or no tears when crying, a sunken soft spot (fontanelle), or a baby too sleepy to wake for feeds. Dehydration can develop quickly, and even a settled, content baby can be affected, so it is always worth checking.",
          "Contact us or your baby's doctor promptly if your baby's skin or the whites of their eyes look yellow, especially if the colour is spreading, they are feeding poorly, or unusually sleepy. Jaundice is common and often mild, but if it appears in the first day of life it needs urgent review and should always be checked.",
          "Seek urgent care the same day, or go to your nearest hospital, if your baby has a fever, is difficult to wake or floppy, is breathing fast or with difficulty, has blue or dusky lips, or refuses to feed or sucks very weakly. Newborns can become unwell quickly, so do not wait.",
          "Dr Santhalakshmi S and the team at Kairavi Women's Clinic, Kelambakkam are here to help. For any breastfeeding concern, call or WhatsApp +91 73586 79920. In an emergency, go to your nearest hospital without delay."
        ]
      }
    ],
    "sources": [
      {
        "title": "Latching on - Best Start in Life - NHS",
        "url": "https://www.nhs.uk/best-start-in-life/baby/feeding-your-baby/breastfeeding/how-to-breastfeed/latching-on/"
      },
      {
        "title": "Common breastfeeding problems - NHS",
        "url": "https://www.nhs.uk/baby/breastfeeding-and-bottle-feeding/breastfeeding-problems/common-problems/"
      },
      {
        "title": "Breastfeeding - World Health Organization",
        "url": "https://www.who.int/health-topics/breastfeeding"
      },
      {
        "title": "Getting a good latch - Office on Women's Health",
        "url": "https://womenshealth.gov/breastfeeding/learning-breastfeed/getting-good-latch"
      }
    ]
  },
  {
    "slug": "pelvic-floor-health-after-birth",
    "title": "Pelvic Floor Health After Childbirth: A Gentle Guide to Recovery",
    "date": "2026-06-15",
    "dateDisplay": "15 June 2026",
    "author": "Dr. Santhalakshmi S",
    "readingTime": "6 min read",
    "excerpt": "A gentle, practical guide to your pelvic floor after childbirth - why it weakens, how to strengthen it with Kegel exercises, the urgent warning signs to never ignore, and when to seek help.",
    "content": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Nobody warns you enough about this part of recovery. Between feeding, healing your stitches, and trying to sleep, your pelvic floor gets forgotten — yet it quietly does an enormous amount of work every day. A little leaking when you cough or laugh, a heavy dragging feeling, or reduced sensation are all common after childbirth, and usually improve with the right care and patience.",
          "This article covers the pelvic floor, why it weakens, how to do Kegel exercises, the urgent warning signs that need same-day care, and when to see a doctor."
        ]
      },
      {
        "heading": "What is the pelvic floor, and why does it weaken after birth?",
        "paragraphs": [
          "The pelvic floor is a hammock of muscles and connective tissue across the base of your pelvis. It supports your bladder, uterus, and bowel, helps control when you pass urine, wind, and stool, and aids core stability and sexual sensation.",
          "During pregnancy, the growing baby's weight and softening hormones put sustained pressure on these muscles, and a vaginal birth stretches them further; a caesarean doesn't fully protect them either. So it's normal for the pelvic floor to feel weaker or harder to 'find' after delivery, and for most women strength gradually returns with regular, correct exercises."
        ]
      },
      {
        "heading": "How to do pelvic floor (Kegel) exercises",
        "paragraphs": [
          "Pelvic floor exercises can usually be started gently within a day or two of birth, once any catheter is removed, whether you delivered vaginally or by caesarean — as long as it isn't painful. Check with your doctor if unsure, especially after a significant tear or complicated delivery.",
          "To find the right muscles, imagine trying to stop yourself passing wind while also stopping the flow of urine — that squeezing-and-lifting sensation is the pelvic floor contracting. (Use this only to locate the muscles; don't regularly stop your urine mid-flow, as this can stop your bladder emptying properly.) Try not to hold your breath or clench your buttocks, thighs, or tummy."
        ],
        "bullets": [
          "Long squeezes: tighten and lift, holding and building up towards 10 seconds, then relax fully. Repeat about 8-10 times.",
          "Short, quick squeezes: squeeze and release quickly, without holding. Repeat about 8-10 times.",
          "Aim for this routine two to three times a day, in any comfortable position — lying down is often easiest to begin with. Relaxing fully between squeezes matters as much as the squeeze itself.",
          "Be patient: it can take a few weeks of practice to notice a difference, and up to a few months for the full benefit."
        ]
      },
      {
        "heading": "Leaking urine and other signs to watch for",
        "paragraphs": [
          "Some urinary leakage — with coughing, sneezing, laughing, or exercise — is common in the early weeks and often settles as the pelvic floor heals. Don't accept it as 'normal' if it continues; watch for these signs and mention them to your doctor:"
        ],
        "bullets": [
          "Leaking urine or wind, especially with coughing, sneezing, or exertion",
          "A feeling of heaviness, dragging, or 'something coming down' in the vagina (which can suggest pelvic organ prolapse)",
          "A weak urine stream, or a sense of not fully emptying your bladder or bowel (note: being completely UNABLE to pass urine is an emergency — see the urgent warning signs below)",
          "Accidental leakage of stool, or trouble controlling wind",
          "Reduced sensation during sex, or pain during sex",
          "Ongoing pelvic, hip, or lower back pain",
          "Visible bulging or a lump felt at the vaginal opening"
        ]
      },
      {
        "heading": "Urgent warning signs — seek emergency care immediately (do not wait for an appointment)",
        "paragraphs": [
          "Most pelvic floor symptoms are not emergencies, but some problems after birth are, and a clinic booking is not a substitute for hospital or emergency care. Serious postpartum complications can develop at any point up to around twelve weeks after delivery. If you have any of the signs below, go to your nearest hospital or emergency department for same-day assessment, or call for urgent medical help — do not wait for a scheduled appointment."
        ],
        "bullets": [
          "Heavy vaginal bleeding — soaking through a pad within an hour, or passing large clots — which can signal secondary postpartum haemorrhage and is not part of normal healing",
          "Being unable to pass urine at all, or a very full, painful bladder you cannot empty, in the hours or days after birth — this needs same-day care, usually a catheter, to prevent lasting bladder or nerve damage",
          "Fever or chills, foul-smelling vaginal discharge, burning when you pass urine, or a perineal or caesarean wound that becomes hotter, redder, more painful, or leaks pus — possible infection that can progress to sepsis (fever with severe pain needs same-day care)",
          "A severe headache, changes to your vision, or sudden swelling of the face, hands, or feet — which can indicate postpartum pre-eclampsia",
          "Pain, swelling, warmth, or redness in one calf, or chest pain and breathlessness — possible signs of a blood clot"
        ]
      },
      {
        "heading": "When to reach out to the clinic",
        "paragraphs": [
          "Away from the emergencies above, many pelvic floor symptoms improve with time and exercise — but you don't have to wait months, especially if they affect daily life or persist beyond three months postpartum. An assessment can check your technique and whether physiotherapy or other treatment would help. A weak stream or incomplete emptying, stool leakage, a visible or palpable bulge, or ongoing pain are all worth getting checked sooner rather than later.",
          "At Kairavi Women's Clinic, Dr Santhalakshmi S offers postpartum and gynaecological assessment for concerns such as urinary leakage, vaginal heaviness or prolapse, painful sex, or slow perineal healing. If any routine sign above sounds familiar, or you'd like reassurance that recovery is on track, call or WhatsApp us on +91 73586 79920 to book a consultation. Remember, though, that the urgent warning signs earlier — heavy bleeding, being unable to pass urine, or fever with a painful wound — need immediate emergency care, not a booked appointment."
        ]
      },
      {
        "heading": "A gentle reminder",
        "paragraphs": [
          "Your pelvic floor carried you through pregnancy and birth, and it deserves a little attention in return. A few minutes of exercises each day, plus patience and professional guidance when needed, can make a real difference to your comfort and long-term health."
        ]
      }
    ],
    "sources": [
      {
        "title": "Your pelvic floor - RCOG",
        "url": "https://www.rcog.org.uk/for-the-public/perineal-tears-and-episiotomies-in-childbirth/your-pelvic-floor/"
      },
      {
        "title": "Pelvic floor exercises after childbirth - Somerset NHS Foundation Trust",
        "url": "https://www.somersetft.nhs.uk/maternity-new/maternity/after-your-babys-birth/for-you/pelvic-floor-exercises/"
      },
      {
        "title": "Your post-pregnancy body - NHS",
        "url": "https://www.nhs.uk/baby/support-and-services/your-post-pregnancy-body/"
      },
      {
        "title": "Pre-eclampsia - NHS",
        "url": "https://www.nhs.uk/conditions/pre-eclampsia/"
      }
    ]
  },
  {
    "slug": "pregnancy-ultrasound-scans-explained",
    "title": "Pregnancy Ultrasound Scans Explained: Dating, Anomaly and Growth Scans",
    "date": "2026-06-13",
    "dateDisplay": "13 June 2026",
    "author": "Dr. Santhalakshmi S",
    "readingTime": "6 min read",
    "excerpt": "Wondering what each pregnancy scan actually checks and whether they are safe? Here is a warm, plain-English guide to the dating scan, the mid-pregnancy anomaly scan and growth scans.",
    "content": [
      {
        "heading": "Overview",
        "paragraphs": [
          "An ultrasound scan is one of the most reassuring parts of antenatal care. It lets you see your baby, shows how the pregnancy is progressing, and helps your doctor plan the right care for you. Many women feel a little anxious before their first scan, especially if they are not sure what is being checked or why. This guide walks through the main scans you will usually be offered during a healthy pregnancy - the dating scan, the mid-pregnancy anomaly scan, and growth scans - so you know what to expect at each visit.",
          "Every pregnancy is different, and your doctor may recommend additional or earlier scans based on your health history. This article is general information and is not a substitute for a personal consultation with your obstetrician."
        ]
      },
      {
        "heading": "The dating scan (around 11-14 weeks)",
        "paragraphs": [
          "The first routine scan of pregnancy is usually done between about 11 and 14 weeks and is often called the dating scan. (An earlier scan may sometimes be arranged, for example to confirm a pregnancy or check its location if you have bleeding or pain.) Its main job is to confirm how many weeks pregnant you are and to work out your estimated due date, which is calculated from the baby's measurements rather than from your last menstrual period alone.",
          "This scan also checks some important early milestones and can be combined with a blood test - often called combined first-trimester screening - to assess the chance of certain chromosomal conditions such as Down's syndrome. Screening is your choice, and your doctor will explain what the results can and cannot tell you."
        ],
        "bullets": [
          "Confirms the pregnancy is developing inside the uterus",
          "Checks the baby's heartbeat",
          "Estimates the due date, mainly from the crown-rump length",
          "Confirms the number of babies (and, in twins, the type of pregnancy)",
          "Measures nuchal translucency (fluid behind the baby's neck) if combined screening is chosen"
        ]
      },
      {
        "heading": "The mid-pregnancy anomaly scan (around 18-21 weeks)",
        "paragraphs": [
          "The second major scan, sometimes called the 20-week or anomaly scan, is usually done between 18 and 21 weeks. This is a detailed scan that looks closely at your baby's growing organs and body structure - the brain, spine, heart, kidneys, limbs and more - to check that development is progressing as expected.",
          "It also looks at the position of the placenta and the amount of amniotic fluid. If the placenta is found to be low-lying, a follow-up scan later in pregnancy is usually recommended, since the placenta often appears to move away from the cervix as the uterus grows.",
          "No scan can detect every possible condition, and most anomaly scans are reassuring. If something needs a closer look, your doctor will explain the findings clearly and discuss any further tests or specialist opinions that may help.",
          "Please note: under Indian law (the PCPNDT Act), the baby's sex is never determined or shared during any scan. This applies at every clinic and for every scan, and it is there to protect the girl child."
        ],
        "bullets": [
          "Detailed check of the baby's brain, spine, heart, kidneys, abdominal wall and limbs",
          "Placental position and amniotic fluid levels",
          "Whether the baby's growth is in line with the expected dates"
        ]
      },
      {
        "heading": "Growth scans - when are they needed?",
        "paragraphs": [
          "Not every pregnancy needs extra scans beyond the dating and anomaly scans. However, your doctor may suggest one or more growth scans later in pregnancy, often in the third trimester (from around 28 weeks), if there is a specific reason to keep a closer eye on the baby.",
          "Growth scans measure the baby's size and estimated weight, can check the blood flow in the umbilical cord using Doppler studies when needed, and reassess the amniotic fluid. They are simply a way of tracking that the baby continues to grow and stay well through the later weeks."
        ],
        "bullets": [
          "Twin or multiple pregnancy",
          "Diabetes or high blood pressure in pregnancy",
          "Baby measuring smaller or larger than expected on clinical examination",
          "A low-lying placenta on the earlier scan",
          "Reduced fetal movements or other concerns raised at a check-up"
        ]
      },
      {
        "heading": "Are scans safe and painful?",
        "paragraphs": [
          "Ultrasound uses sound waves, not X-rays or ionising radiation, so a standard pregnancy scan performed by a trained practitioner for a medical reason has no known risk to you or your baby. It is one of the most widely used and well-studied tools in antenatal care, and it does not hurt.",
          "An abdominal scan simply involves some gel on your tummy and a smooth probe moved gently over the skin. In early pregnancy, a transvaginal scan (using a slim probe) may occasionally give a clearer picture; this is also painless, though it can feel a little unfamiliar. You can usually eat and drink normally beforehand - your clinic will let you know if a full bladder is needed for a clearer view."
        ]
      },
      {
        "heading": "When to reach out to us",
        "paragraphs": [
          "If you have missed a period and think you may be pregnant, or if you are already pregnant and unsure which scans you have had or still need, it helps to speak with your obstetrician early so nothing is missed. For everyday questions, or to book or reschedule a scan, you are always welcome to call or WhatsApp us.",
          "Some symptoms, however, need urgent attention and must not wait. If you have heavy vaginal bleeding, severe or constant abdominal pain, a severe headache with visual disturbance (such as flashing lights, spots or blurred vision), or if you notice any reduction or change in your baby's movements once you have started to feel them regularly, seek care straight away. Phone the clinic immediately - please do not rely on WhatsApp for these, as messages may not be seen at once - and if you cannot reach us quickly or your symptoms are severe, go directly to the nearest hospital labour ward or emergency department without delay, at any time of day or night.",
          "At Kairavi Women's Clinic in Kelambakkam, Chennai, Dr. Santhalakshmi S and her team can guide you through each scan, explain the findings in plain language, and plan the right antenatal schedule for your pregnancy. Call or WhatsApp +91 73586 79920 to book an appointment or ask a non-urgent question."
        ]
      }
    ],
    "sources": [
      {
        "title": "Ultrasound scans in pregnancy - NHS",
        "url": "https://www.nhs.uk/pregnancy/your-pregnancy-care/ultrasound-scans/"
      },
      {
        "title": "20-week screening scan - NHS",
        "url": "https://www.nhs.uk/pregnancy/your-pregnancy-care/20-week-scan/"
      },
      {
        "title": "20 Week Ultrasound (Anatomy Scan) - Cleveland Clinic",
        "url": "https://my.clevelandclinic.org/health/diagnostics/22644-20-week-ultrasound"
      },
      {
        "title": "Ultrasound Exams - ACOG",
        "url": "https://www.acog.org/womens-health/faqs/ultrasound-exams"
      }
    ]
  },
  {
    "slug": "eating-well-in-pregnancy",
    "title": "Eating Well in Pregnancy: A Simple Everyday Guide",
    "date": "2026-06-11",
    "dateDisplay": "11 June 2026",
    "author": "Dr. Santhalakshmi S",
    "readingTime": "6 min read",
    "excerpt": "A simple, everyday guide to eating well through pregnancy - the nutrients that matter most, foods to enjoy in moderation, and easy food-safety habits, all explained in plain, reassuring language.",
    "content": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Pregnancy is a time when your body is working hard to nourish a new life, and food naturally becomes a big source of both care and confusion. The good news is that eating well in pregnancy does not mean eating for two, following an expensive diet, or giving up everyday Indian food. It simply means eating a variety of nutritious foods, paying attention to a few key nutrients, and being careful about food hygiene. This guide brings together trusted medical advice to help you build a simple, balanced everyday plate."
        ]
      },
      {
        "heading": "Building a Balanced Plate",
        "paragraphs": [
          "A healthy pregnancy diet is built on variety rather than restriction. There is no need to double your portions - what matters more is including a good mix of food groups at most meals.",
          "For most Indian households, this is easier than it sounds, since dals, vegetables, rice or roti, curd, and seasonal fruit are already part of daily eating."
        ],
        "bullets": [
          "Wholegrains and millets (brown rice, ragi, jowar, whole wheat) for sustained energy",
          "At least five portions of vegetables and fruit a day, well washed",
          "Protein from dal, legumes, eggs, fish, lean meat, paneer, or nuts",
          "Dairy such as milk, curd, or paneer for calcium - lower-fat versions where you can",
          "Healthy fats in moderate amounts - ghee, nuts, and seeds in small quantities",
          "Limit foods high in added sugar, deep-fried snacks, and very salty pickles"
        ]
      },
      {
        "heading": "Key Nutrients to Focus On",
        "paragraphs": [
          "A few nutrients are needed in larger amounts during pregnancy, and getting these right supports your baby's growth and your own wellbeing.",
          "Your obstetrician will usually recommend a prenatal supplement and adjust it based on your blood tests, so always take supplements as advised at your antenatal visits rather than self-prescribing."
        ],
        "bullets": [
          "Folic acid: important from before conception through the first 12 weeks to support your baby's brain and spine development; the usual dose is 400 micrograms daily, though some women (for example with diabetes, a higher BMI, certain medicines, or a previous baby with a neural tube defect) are advised a higher dose - follow your doctor's guidance",
          "Iron: needed for healthy haemoglobin levels and to prevent anaemia, which is common in pregnancy - found in dal, leafy greens, jaggery, and lean meat; pairing with vitamin C-rich foods like citrus or amla improves absorption",
          "Calcium: supports your baby's developing bones and teeth - found in milk, curd, paneer, ragi, and sesame seeds",
          "Protein: needed in slightly higher amounts as pregnancy progresses - found in dal, eggs, fish, paneer, and lean meat",
          "Vitamin D: recommended for all pregnant women, usually 10 micrograms (400 IU) daily, and especially important if you have limited sun exposure",
          "Iodine: often discussed at antenatal visits, particularly if your diet is largely vegetarian"
        ]
      },
      {
        "heading": "Foods to Limit or Avoid",
        "paragraphs": [
          "Certain foods carry a higher risk of infection or contain substances best kept low during pregnancy. This is not about fear, but about a few sensible precautions.",
          "Caffeine in moderate amounts is generally considered acceptable, but most guidance suggests keeping total daily intake under about 200 mg, which is roughly one to two cups of coffee."
        ],
        "bullets": [
          "Avoid unpasteurised milk, and soft or mould-ripened cheeses made from unpasteurised milk unless thoroughly cooked",
          "Avoid raw or undercooked eggs, meat, poultry, and fish (including sushi and rare preparations)",
          "Avoid liver and liver-based products due to their very high vitamin A content",
          "Limit high-mercury fish such as shark, swordfish, and king mackerel; oily fish is best kept to no more than two portions a week",
          "Keep caffeine intake modest - tea, coffee, cola, chocolate, and energy drinks all count",
          "Avoid alcohol completely, as no safe level has been established in pregnancy"
        ]
      },
      {
        "heading": "Food Hygiene and Hydration",
        "paragraphs": [
          "Simple kitchen habits go a long way in reducing the risk of food-borne infections such as listeria and toxoplasmosis, which can be more serious during pregnancy.",
          "Staying well hydrated also supports amniotic fluid levels and digestion, and helps reduce common complaints like constipation."
        ],
        "bullets": [
          "Wash fruits and vegetables thoroughly before eating or cooking",
          "Cook meat, poultry, fish, and eggs until fully done, with no pink or runny parts",
          "Reheat leftovers until steaming hot, and avoid food left out at room temperature for long",
          "Use separate boards and utensils for raw and cooked foods",
          "Drink plenty of fluids through the day - roughly 8-10 glasses of water, and more in Chennai's heat and humidity"
        ]
      },
      {
        "heading": "When to Reach Out",
        "paragraphs": [
          "Every pregnancy and every appetite is a little different, and what suits one woman may not suit another. It is worth discussing things with your obstetrician early - rather than waiting for your next visit - if you notice signs of anaemia such as unusual tiredness or breathlessness, cravings for non-food items (a condition called pica), significant weight changes, or if you have a pre-existing condition like diabetes, thyroid disorder, or a restricted diet.",
          "Some nausea and vomiting is very common in early pregnancy, but it can occasionally become severe. If you cannot keep any fluids down for more than about eight hours or food down for around 24 hours, are being sick many times a day, feel dizzy or faint, are passing only small amounts of dark urine, or are losing weight, please contact the clinic the same day (call or WhatsApp +91 73586 79920) or seek prompt medical care, as you may need treatment for dehydration.",
          "A few symptoms need urgent attention rather than waiting for your next visit. Contact the clinic immediately or seek emergency care if you have heavy vaginal bleeding, a severe or persistent headache with blurred vision or seeing spots, sudden swelling of your face, hands, or feet, or a noticeable reduction in your baby's movements.",
          "At Kairavi Women's Clinic, Dr Santhalakshmi S and the team are happy to guide you through personalised, practical nutrition advice at your antenatal visits, tailored to your health history and everyday food habits. Do call or WhatsApp +91 73586 79920 to book a consultation or ask any questions about eating well during your pregnancy."
        ]
      }
    ],
    "sources": [
      {
        "title": "Have a healthy diet in pregnancy - NHS",
        "url": "https://www.nhs.uk/pregnancy/keeping-well/have-a-healthy-diet/"
      },
      {
        "title": "Foods to avoid in pregnancy - NHS",
        "url": "https://www.nhs.uk/pregnancy/keeping-well/foods-to-avoid/"
      },
      {
        "title": "Severe vomiting in pregnancy (hyperemesis gravidarum) - NHS",
        "url": "https://www.nhs.uk/pregnancy/related-conditions/complications/severe-vomiting/"
      },
      {
        "title": "Nutrition During Pregnancy - ACOG",
        "url": "https://www.acog.org/womens-health/faqs/nutrition-during-pregnancy"
      }
    ]
  },
  {
    "slug": "why-are-my-periods-irregular",
    "title": "Why Are My Periods Irregular?",
    "date": "2026-06-09",
    "dateDisplay": "9 June 2026",
    "author": "Dr. Santhalakshmi S",
    "readingTime": "6 min read",
    "excerpt": "Irregular periods are common and often harmless, but sometimes they are your body's way of flagging something worth checking. Here is what usually causes them, and when to seek routine, prompt, or urgent care.",
    "content": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Most women's periods vary a little from month to month, and that is completely normal. But when cycles become consistently unpredictable — arriving very early or late, disappearing for months, or changing a lot in flow — it is natural to wonder why. The reassuring news is that irregular periods are very common and usually have an identifiable, manageable cause. Below are the common reasons, and when to seek help — including the few situations that need same-day care."
        ]
      },
      {
        "heading": "What counts as 'irregular'?",
        "paragraphs": [
          "A typical menstrual cycle lasts anywhere from 24 to 38 days, and some month-to-month variation is normal. Periods are generally considered irregular when the gap between cycles is shorter than 24 days or longer than 38 days, when the length keeps changing, when periods stop for three months or more (outside pregnancy), when bleeding lasts longer than eight days, or when flow becomes much heavier or lighter than usual.",
          "Tracking your cycles on a calendar or app for a couple of months beforehand makes it much easier for your doctor to understand your pattern."
        ]
      },
      {
        "heading": "Common causes of irregular periods",
        "paragraphs": [
          "Irregular cycles usually come down to something disrupting the hormonal signalling between the brain and the ovaries. Common culprits include:"
        ],
        "bullets": [
          "Polycystic ovary syndrome (PCOS): a common hormonal condition where the ovaries do not release an egg regularly, often with acne, excess facial or body hair, or weight gain.",
          "Thyroid problems: an underactive or overactive thyroid can disturb the hormones that regulate your cycle.",
          "Stress and anxiety: significant emotional or physical stress can temporarily suppress ovulation.",
          "Weight change: rapid weight loss, or being significantly under- or overweight, can affect hormone levels and ovulation.",
          "Excessive exercise: very intense or high-volume training, especially alongside low body fat, can disrupt cycles.",
          "Hormonal contraception: the progestogen-only pill, contraceptive injection, and hormonal IUS (intrauterine system) commonly cause lighter, less predictable, or absent periods, and cycles can take a while to settle after stopping any method.",
          "Pregnancy: a missed or unusually light period is worth checking with a home pregnancy test if pregnancy is possible.",
          "Perimenopause: the years leading up to menopause, when hormone levels naturally fluctuate.",
          "Less commonly, conditions such as uncontrolled diabetes, raised prolactin levels, or uterine causes like fibroids and polyps."
        ]
      },
      {
        "heading": "When irregular periods are normal",
        "paragraphs": [
          "Irregularity is expected, and usually not a concern, at two life stages. In the early teenage years, cycles can take two to three years after the first period to settle, as the hormonal system is still maturing.",
          "Similarly, in the years approaching menopause (perimenopause), fluctuating oestrogen and progesterone levels commonly cause cycles to become shorter, longer, lighter, heavier, or occasionally skip altogether. Perimenopause usually begins in the mid-40s, though it can start earlier or later, and may last several years. In both situations, mild, gradually settling irregularity is usually part of a normal transition rather than a disease process."
        ]
      },
      {
        "heading": "Bleeding after menopause is different",
        "paragraphs": [
          "There is one important exception. Once you have gone a full 12 months with no periods at all, you have reached menopause — and any vaginal bleeding after that point is never normal, even light spotting.",
          "Bleeding after menopause should always be checked promptly by a doctor. It is often due to something harmless, such as thinning of the vaginal lining or a small polyp, but it can occasionally be an early sign of a treatable but serious condition, including cancer of the womb lining, which is very treatable when caught early. So please do not put it off, and do not assume it is simply 'the change'."
        ]
      },
      {
        "heading": "Tests that can help find the cause",
        "paragraphs": [
          "If your doctor recommends tests, they are simply narrowing down which cause applies to you. Depending on your symptoms and age, these may include:"
        ],
        "bullets": [
          "A urine or blood pregnancy test, if pregnancy is possible.",
          "Blood tests for thyroid function, and sometimes prolactin, blood sugar, or haemoglobin levels (to check for anaemia if bleeding is heavy).",
          "Hormone blood tests (such as LH, FSH, and testosterone) if PCOS or another hormonal imbalance is suspected.",
          "A pelvic ultrasound scan to look at the ovaries and uterine lining, and check for cysts, fibroids, or polyps.",
          "A physical examination and a detailed history of your cycle, weight changes, lifestyle, and stress levels."
        ]
      },
      {
        "heading": "When to see a doctor",
        "paragraphs": [
          "Not every irregular period carries the same urgency. Use the following as a rough guide, and when in doubt, it is always fine to ask.",
          "Book a routine appointment if your periods have been irregular for more than a few months, if you have gone three months or more without a period and are not pregnant or breastfeeding, or if irregular cycles come with symptoms such as unexplained weight change, excess hair growth, acne, or difficulty conceiving.",
          "See a doctor promptly, within a few days, if you have bleeding between periods, bleeding after intercourse, any vaginal bleeding after menopause, or bleeding that lasts longer than eight days.",
          "Seek urgent, same-day care — from a doctor or your nearest emergency department — if you are bleeding very heavily: soaking through a pad or tampon every hour for two or more hours in a row, passing clots larger than a coin, or feeling faint, dizzy, breathless, or noticing a racing heartbeat. Heavy blood loss can occasionally become an emergency, all the more so because iron-deficiency anaemia, common among women in India, can make its effects felt sooner.",
          "Irregular periods are often very manageable once the cause is found, and an early conversation makes things simpler. Dr Santhalakshmi S at Kairavi Women's Clinic in Kelambakkam, Chennai, offers confidential consultations to understand what is happening with your cycle and guide you through any tests or next steps. You can call or WhatsApp +91 73586 79920 to book an appointment.",
          "This article is for general information only and is not a substitute for personal medical advice. Please consult a qualified doctor to discuss your specific symptoms and history."
        ]
      }
    ],
    "sources": [
      {
        "title": "Irregular periods - NHS",
        "url": "https://www.nhs.uk/symptoms/irregular-periods/"
      },
      {
        "title": "Post-menopausal bleeding - NHS",
        "url": "https://www.nhs.uk/conditions/post-menopausal-bleeding/"
      },
      {
        "title": "Irregular Periods (Abnormal Menstruation) - Cleveland Clinic",
        "url": "https://my.clevelandclinic.org/health/diseases/14633-abnormal-menstruation-periods"
      },
      {
        "title": "Perimenopause - Cleveland Clinic",
        "url": "https://my.clevelandclinic.org/health/diseases/21608-perimenopause"
      }
    ]
  },
  {
    "slug": "cervical-screening-explained",
    "title": "Cervical Screening: Why It Matters",
    "date": "2026-06-07",
    "dateDisplay": "7 June 2026",
    "author": "Dr. Santhalakshmi S",
    "readingTime": "6 min read",
    "excerpt": "Cervical screening is one of the simplest, most effective ways to catch trouble early - and it takes only a few minutes. Here is what the test involves and why it is worth making time for.",
    "content": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Cervical screening - the Pap smear, often done together with an HPV test - is one of the simplest ways to protect yourself from cervical cancer. It does not diagnose cancer; it looks for early changes in the cells of the cervix, usually long before they would ever cause a problem, so they can be watched or treated in good time.",
          "Many women in India put this test off out of shyness, fear of discomfort, or simply because nothing feels wrong. But cervical cancer is one of the most preventable cancers we know of, and regular screening is a big part of why. Here is what the test involves and why it is worth making time for."
        ]
      },
      {
        "heading": "What Does the Test Actually Check For",
        "paragraphs": [
          "A Pap smear looks at cells collected from the surface of the cervix under a microscope, checking for abnormal changes. An HPV test checks for high-risk strains of human papillomavirus (HPV), the virus behind almost all cervical cancers. Many clinics now do both together, or use HPV testing as the primary method, since it is very good at identifying who needs closer follow-up.",
          "Both are done during a routine gynaecological visit using cells taken from the cervix - they are not blood tests and do not need any anaesthesia."
        ]
      },
      {
        "heading": "Who Should Be Screened, and How Often",
        "paragraphs": [
          "Screening intervals vary a little between guidelines, but the general principle is the same everywhere: regular screening through the reproductive and midlife years, with the exact gap depending on your age and which test is used.",
          "As a general guide only - your gynaecologist will tailor this to you:"
        ],
        "bullets": [
          "Screening usually begins in the early-to-mid 20s (some guidelines start at 21, others at 25)",
          "Roughly 21-29 years: a Pap smear about every 3 years",
          "30-65 years: an HPV test (alone or with a Pap smear) about every 5 years, or a Pap smear every 3 years where HPV testing isn't available",
          "Women who have had the HPV vaccine still need regular screening, as the vaccine does not cover every cancer-causing HPV strain",
          "Your doctor may advise stopping around 65 if previous results have been consistently normal"
        ]
      },
      {
        "heading": "What to Expect at the Appointment",
        "paragraphs": [
          "The test itself takes only a few minutes, and the whole visit is usually done within about 10-15 minutes. You will be asked to lie down with your knees bent apart, and a smooth, lubricated instrument called a speculum is gently placed in the vagina so the cervix can be seen clearly.",
          "Using a soft brush or spatula, the doctor collects a small sample of cells from the surface of the cervix. Most women feel mild pressure rather than pain, and it is normal to feel a little anxious beforehand - do tell your doctor if you are nervous, and you can ask to pause or stop at any point. Light spotting afterwards is common and usually settles within a day."
        ]
      },
      {
        "heading": "HPV and the HPV Vaccine",
        "paragraphs": [
          "HPV is an extremely common virus spread through skin-to-skin genital contact, and most sexually active people are exposed to it at some point. In most women the body clears the infection naturally, but persistent infection with certain high-risk types can, over many years, lead to changes that may progress to cervical cancer if left unchecked - which is exactly what screening is designed to catch early.",
          "The HPV vaccine works best when given before the start of sexual activity - it is commonly offered around 9-14 years of age, though it can be given later too (often up to age 26, and in some cases beyond). It significantly lowers the risk of the infections that cause most cervical cancers. It is a preventive tool, not a substitute for screening - vaccinated women still need their regular Pap smear or HPV test, since the vaccine does not protect against every high-risk strain."
        ]
      },
      {
        "heading": "Understanding Your Results",
        "paragraphs": [
          "A normal result means no concerning changes were found this time, and you simply return for your next routine screening. An abnormal or unclear result does not mean you have cancer - it usually means the doctor wants a closer look, perhaps with a repeat test, an HPV test, or a colposcopy (a more detailed examination of the cervix), so any changes can be monitored or treated well before they could become serious.",
          "Try not to let an abnormal result cause alarm on its own. The whole point of screening is to catch things at the earliest, most treatable stage - it is a call for a follow-up conversation, not a diagnosis."
        ]
      },
      {
        "heading": "When to Reach Out",
        "paragraphs": [
          "Do book a screening if you are within the recommended age range and haven't had one recently, or if it has been longer than advised since your last test. You should also see a gynaecologist sooner - rather than waiting for your routine screening date - if you notice unusual vaginal bleeding (between periods, after intercourse, or after menopause), persistent pelvic pain, or an unusual discharge.",
          "At Kairavi Women's Clinic in Kelambakkam, Chennai, Dr. Santhalakshmi S offers cervical screening in a private, unhurried, judgement-free setting, and is happy to talk through which test suits you and when. You can call or WhatsApp +91 73586 79920 to ask a question or book an appointment - there is no need to wait until something feels wrong."
        ]
      }
    ],
    "sources": [
      {
        "title": "Cervical screening - NHS",
        "url": "https://www.nhs.uk/conditions/cervical-screening/"
      },
      {
        "title": "What happens at your cervical screening appointment - NHS",
        "url": "https://www.nhs.uk/conditions/cervical-screening/what-happens-at-your-appointment/"
      },
      {
        "title": "Screening for Cervical Cancer - ACOG Clinical Guidance",
        "url": "https://www.acog.org/clinical/clinical-guidance/committee-statement/articles/2026/07/screening-for-cervical-cancer"
      },
      {
        "title": "Reducing Risk for Cervical Cancer - CDC",
        "url": "https://www.cdc.gov/cervical-cancer/prevention/index.html"
      }
    ]
  },
  {
    "slug": "managing-painful-periods",
    "title": "Managing Painful Periods: When Cramps Are Normal and When to Seek Help",
    "date": "2026-06-05",
    "dateDisplay": "5 June 2026",
    "author": "Dr. Santhalakshmi S",
    "readingTime": "7 min read",
    "excerpt": "Period pain is common, but it shouldn't have to run your life — learn the difference between everyday cramps, pain that needs a check-up, and the warning signs that mean urgent care.",
    "content": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Almost every woman experiences period pain at some point, and for many it is simply a normal part of the menstrual cycle. But when cramps are severe enough to keep you off work, off college, or off your feet each month, it is worth understanding why — and what can help. This article looks at the difference between ordinary period pain and pain that may signal an underlying condition, along with simple self-care measures and clear guidance on when to see a gynaecologist — and when pain needs urgent attention."
        ]
      },
      {
        "heading": "Primary dysmenorrhoea: the common kind",
        "paragraphs": [
          "Most menstrual cramps are what doctors call primary dysmenorrhoea — pain caused by natural chemicals (prostaglandins) that make the womb muscle contract as it sheds its lining. There is no underlying disease; it is simply a strong, sometimes uncomfortable, physiological process. This kind of pain often begins in the teenage years, within a year or two of periods starting, and for many women it eases with age.",
          "This pain usually starts a day or two before your period, peaks in the first day or two of bleeding, and settles within two to three days. It is typically felt as cramping in the lower abdomen and may spread to the lower back and thighs, sometimes with nausea, tiredness or headache."
        ]
      },
      {
        "heading": "Secondary dysmenorrhoea: when pain points to a cause",
        "paragraphs": [
          "Secondary dysmenorrhoea is period pain caused by an underlying gynaecological condition, most commonly endometriosis, but also adenomyosis, fibroids, pelvic inflammatory disease, or (occasionally) an IUD. It usually appears later in life rather than with your very first periods, and it tends to behave differently from ordinary cramps."
        ],
        "bullets": [
          "Starts earlier in the cycle and lasts longer than typical cramps",
          "Tends to worsen over time rather than staying the same each month",
          "May be accompanied by pain during sex, heavy or irregular bleeding, or pain with bowel movements or urination",
          "Often does not respond well to usual pain relief"
        ]
      },
      {
        "heading": "Self-care that genuinely helps",
        "paragraphs": [
          "For everyday period pain, several simple, evidence-backed measures can make a real difference and are worth trying before or during your period."
        ],
        "bullets": [
          "Heat: a hot water bottle, heat patch, or warm bath/shower on the lower abdomen or back can relax the uterine muscle and ease cramping",
          "Gentle movement: light exercise such as walking, stretching, yoga, swimming or cycling has been shown to reduce period pain for many women, even though intense activity may feel unappealing at the time",
          "Rest and sleep: adequate rest, especially on the heaviest pain days, helps your body cope better",
          "Other habits: cutting back on caffeine and alcohol, staying hydrated, and gentle abdominal massage are commonly recommended and low-risk to try"
        ]
      },
      {
        "heading": "Over-the-counter pain relief",
        "paragraphs": [
          "Common over-the-counter pain relievers can be effective for period pain, particularly when started at the first sign of cramping rather than waiting for the pain to build. Anti-inflammatory medicines (NSAIDs) such as ibuprofen or naproxen often work better than paracetamol for cramps, because they lower the prostaglandins that drive the pain — though paracetamol is a reasonable option if NSAIDs do not suit you.",
          "Take ibuprofen-type medicines with food, and avoid them if you have a stomach ulcer, or if conditions such as asthma, kidney problems or certain other medicines make them unsuitable. Always read the label, use the lowest effective dose for the shortest time needed, and check with a pharmacist or doctor if you have any other health conditions, are on other medication, or are trying to conceive. Importantly, do not simply rely on painkillers and a hot water bottle for pain that could be linked to pregnancy — see the urgent-care note below.",
          "If you find you need pain relief every single cycle, or the usual doses are not touching the pain, that itself is a good reason to speak with a doctor rather than simply increasing how much you take."
        ]
      },
      {
        "heading": "Seek urgent or emergency care",
        "paragraphs": [
          "Most period pain is uncomfortable but not dangerous. Some symptoms, however, need same-day or emergency attention rather than a routine appointment, because they can point to serious conditions such as an ectopic pregnancy, ovarian torsion, a ruptured or twisted cyst, or a pelvic infection. Go to your nearest emergency department, or call the clinic straight away, if you notice any of the following:"
        ],
        "bullets": [
          "Sudden, severe pain — especially on one side — that is unlike your usual cramps, or pain so intense that you cannot stand, faint, or feel dizzy and very unwell",
          "Severe pelvic pain when you are, or could be, pregnant — including if a period is late, missed, or unusually light. This can be a sign of an ectopic pregnancy (a pregnancy growing outside the womb), which is a medical emergency. Take a home pregnancy test and seek prompt medical review; do not treat this as an ordinary bad period",
          "Pain with a fever, or with unusual, heavy or foul-smelling vaginal discharge, which may indicate a pelvic infection",
          "Very heavy bleeding — soaking through a pad or tampon every hour for several hours in a row, or passing clots larger than a coin — especially if you also feel weak, breathless, lightheaded or faint"
        ]
      },
      {
        "heading": "When to see a doctor",
        "paragraphs": [
          "Away from those emergencies, it is time to book a routine consultation if your period pain is severe, is getting worse cycle after cycle, or is not relieved by simple self-care and standard over-the-counter medicine. You should also seek advice if pain is accompanied by pain during intercourse, irregular cycles, bleeding between periods, or if it is affecting your studies, work or daily life. Periods that have become persistently heavier than usual — needing you to change protection more often than before — are worth reviewing too, even when they do not reach the emergency thresholds described above.",
          "At Kairavi Women's Clinic, Dr. Santhalakshmi S can help assess whether your pain is primary or whether it may be linked to a condition such as endometriosis, adenomyosis or fibroids, and discuss suitable next steps, including further tests if needed. There is no need to live with pain that disrupts your life — a proper evaluation can bring both answers and relief. Call or WhatsApp +91 73586 79920 to book an appointment, or to ask for advice if you are unsure how urgent your symptoms are."
        ]
      }
    ],
    "sources": [
      {
        "title": "Period pain - NHS",
        "url": "https://www.nhs.uk/conditions/period-pain/"
      },
      {
        "title": "Dysmenorrhea (Menstrual Cramps) - Cleveland Clinic",
        "url": "https://my.clevelandclinic.org/health/diseases/4148-dysmenorrhea"
      },
      {
        "title": "Dysmenorrhea: Painful Periods - ACOG",
        "url": "https://www.acog.org/womens-health/faqs/dysmenorrhea-painful-periods"
      },
      {
        "title": "Painful menstrual periods - MedlinePlus Medical Encyclopedia",
        "url": "https://medlineplus.gov/ency/article/003150.htm"
      }
    ]
  },
  {
    "slug": "pre-eclampsia-warning-signs",
    "title": "Pre-eclampsia: The Warning Signs to Know",
    "date": "2026-06-03",
    "dateDisplay": "3 June 2026",
    "author": "Dr. Santhalakshmi S",
    "readingTime": "5 min read",
    "excerpt": "Pre-eclampsia can sound alarming, but knowing the warning signs and keeping up with antenatal checks makes it far more manageable. Here is what every expecting mother should know.",
    "content": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Pre-eclampsia is one of those pregnancy words that can feel frightening the first time you hear it. The reassuring news is that with regular antenatal care, it is usually picked up early and managed safely. Understanding what it is and which warning signs need urgent attention can make a real difference for you and your baby."
        ]
      },
      {
        "heading": "What is pre-eclampsia?",
        "paragraphs": [
          "Pre-eclampsia is a condition that develops during pregnancy, most often after 20 weeks, in which blood pressure rises and, in many women, protein appears in the urine. It is thought to begin when the placenta does not develop or function quite as it should, which can affect blood flow to your organs and to your baby.",
          "Very often, pre-eclampsia is spotted simply because blood pressure is a little high or protein is found in the urine at a routine check-up, long before any symptoms appear. This is exactly why antenatal visits matter, even when you feel completely well."
        ]
      },
      {
        "heading": "Warning signs to watch for",
        "paragraphs": [
          "Some women have no symptoms at all in the early stages, which is why blood pressure and urine checks at every antenatal visit are so important. However, certain symptoms should never be ignored, as they can signal that the condition is becoming more serious."
        ],
        "bullets": [
          "A severe headache that does not ease with a simple painkiller such as paracetamol",
          "Changes in vision, such as blurring, flashing lights, or seeing spots",
          "Sudden swelling of the face, hands, or feet, especially if it comes on quickly, or a sudden, rapid gain in weight from fluid build-up",
          "Pain or tenderness just below the ribs, usually on the right side (upper abdominal pain)",
          "Feeling generally very unwell, or vomiting",
          "Shortness of breath, or a sense that something is simply not right",
          "Any reduction, change, or absence in your baby's usual pattern of movements, which always needs urgent, same-day assessment"
        ]
      },
      {
        "heading": "Who is more at risk?",
        "paragraphs": [
          "Pre-eclampsia can affect any pregnant woman, but certain factors raise the chance of developing it. Knowing your own risk profile helps your doctor plan the right level of monitoring for you.",
          "Higher-risk factors include a previous pregnancy affected by pre-eclampsia, chronic (long-standing) high blood pressure, type 1 or type 2 diabetes, kidney disease, or autoimmune conditions such as lupus or antiphospholipid syndrome. Moderate-risk factors include a first pregnancy, a twin or multiple pregnancy, a body mass index of 35 or more, being 40 years of age or older, a South Asian ethnic background, a family history of pre-eclampsia, or a gap of more than ten years since your last pregnancy. Having one high-risk factor, or two or more moderate ones, is usually what prompts your doctor to recommend extra precautions."
        ]
      },
      {
        "heading": "Why antenatal checks matter",
        "paragraphs": [
          "Because pre-eclampsia often develops quietly, regular antenatal check-ups are one of the best protections you have. At each visit, your blood pressure is measured and your urine is tested for protein, so that any early change can be caught and managed before it becomes serious.",
          "If you are considered higher risk, your doctor may suggest closer monitoring, low-dose aspirin from around 12 weeks of pregnancy (only ever on medical advice and at the dose prescribed for you), and additional scans to check your baby's growth. In some cases a calcium supplement is also advised. Folic acid (usually 400 mcg daily, or a higher dose if your doctor recommends it) and a balanced, iron-rich diet support overall pregnancy health, though they do not specifically prevent pre-eclampsia."
        ]
      },
      {
        "heading": "When to see a doctor",
        "paragraphs": [
          "Some symptoms of pre-eclampsia are medical emergencies and need hospital care straight away, not a phone call or a wait for a reply. If you have a severe or worsening headache, changes to your vision, breathlessness, severe pain just below your ribs, a noticeable reduction or absence in your baby's movements, or any fit or convulsion, go immediately to the nearest hospital emergency department or maternity/labour ward. Do the same if you feel very unwell and cannot reach the clinic promptly. Pre-eclampsia can progress quickly to serious complications, so it is always better to be checked and reassured than to wait.",
          "For milder concerns, or if you have noticed a new symptom from the list above and are unsure, do not wait for your next scheduled appointment either. Prompt evaluation helps keep both you and your baby safe.",
          "At Kairavi Women's Clinic, Dr. Santhalakshmi S and her team are glad to see you for an unscheduled check if something feels wrong, or to guide you through a personalised antenatal care plan if you have risk factors for pre-eclampsia. Please call or WhatsApp +91 73586 79920 to speak with the clinic, ask a question, or arrange a review. Please remember that this number is for non-urgent concerns and follow-up, and should never replace emergency hospital care if you have the severe symptoms described above."
        ]
      },
      {
        "heading": "A reassuring note",
        "paragraphs": [
          "Pre-eclampsia can sound worrying, but it is a well-understood condition that maternity teams look after every day. Attending your antenatal appointments, knowing the warning signs, and reaching out promptly if something feels off are among the simplest and most effective steps you can take towards a safer pregnancy."
        ]
      }
    ],
    "sources": [
      {
        "title": "Pre-eclampsia - NHS",
        "url": "https://www.nhs.uk/conditions/pre-eclampsia/"
      },
      {
        "title": "Preeclampsia - Cleveland Clinic",
        "url": "https://my.clevelandclinic.org/health/diseases/17952-preeclampsia"
      },
      {
        "title": "Pre-eclampsia - Patient Information - RCOG",
        "url": "https://www.rcog.org.uk/for-the-public/browse-our-patient-information/pre-eclampsia/"
      },
      {
        "title": "Hypertension in pregnancy: diagnosis and management - NICE NG133",
        "url": "https://www.nice.org.uk/guidance/ng133/chapter/recommendations"
      }
    ]
  },
  {
    "slug": "vaginal-infections-explained",
    "title": "Vaginal Infections: Thrush and Bacterial Vaginosis Explained",
    "date": "2026-06-01",
    "dateDisplay": "1 June 2026",
    "author": "Dr. Santhalakshmi S",
    "readingTime": "6 min read",
    "excerpt": "Itching, discharge, or an unfamiliar odour down there can feel worrying, but thrush and bacterial vaginosis are both common and treatable - here's how to tell them apart and when to get checked.",
    "content": [
      {
        "heading": "Overview",
        "paragraphs": [
          "It's very common to notice a change in your vaginal discharge and wonder if something is wrong. Most women have some discharge every day, and it's a normal, healthy part of how the vagina keeps itself clean. But sometimes an infection does develop, and the two most common are vaginal thrush (a yeast infection) and bacterial vaginosis (BV). Both are extremely common, both very treatable, and neither is anything to feel embarrassed about. This article explains what each one is, how to tell them apart, and when it's worth getting checked."
        ]
      },
      {
        "heading": "What is normal discharge?",
        "paragraphs": [
          "Normal vaginal discharge is usually clear or white, doesn't have a strong smell, and changes in amount and thickness through your monthly cycle - it's often thinner and stretchier around ovulation and heavier just before your period.",
          "You know your own body best, so the real question isn't 'do I have discharge' but 'has something changed'. A new colour, a strong or unusual odour, or discomfort are the signals worth attention."
        ]
      },
      {
        "heading": "Vaginal thrush (yeast infection)",
        "paragraphs": [
          "Thrush happens when a yeast called Candida, which normally lives harmlessly in the vagina, grows out of balance. It's not caused by poor hygiene and it isn't classed as a sexually transmitted infection, though it can occasionally be triggered by sex."
        ],
        "bullets": [
          "Thick, white discharge that can look like cottage cheese, usually without a strong smell",
          "Itching and soreness around the vulva and vagina",
          "Stinging or discomfort during sex or when passing urine",
          "Common triggers: antibiotic use, pregnancy, poorly controlled diabetes, and a weakened immune system"
        ]
      },
      {
        "heading": "Bacterial vaginosis (BV)",
        "paragraphs": [
          "BV occurs when the natural balance of bacteria in the vagina is disturbed, allowing certain bacteria to overgrow. Like thrush, it isn't classed as a sexually transmitted infection, though it's more common in women who are sexually active. Around half of women with BV have no symptoms, so it can be present even when nothing feels wrong."
        ],
        "bullets": [
          "A thin, greyish-white discharge with a distinctive fishy odour, often more noticeable after sex",
          "Usually little to no itching or soreness (this is a key difference from thrush)",
          "Risk factors include douching, perfumed soaps or washes in the genital area, and having an intrauterine device (IUD)"
        ]
      },
      {
        "heading": "Could it be something else?",
        "paragraphs": [
          "Thrush and BV are the most common causes of a change in discharge, but not the only ones. Other infections - including sexually transmitted ones such as trichomoniasis - can cause very similar discharge, odour, or itching. Trichomoniasis, for instance, can produce a greenish-yellow, sometimes frothy discharge with a fishy smell that closely resembles BV. Because the symptoms overlap, only a clinical assessment - and sometimes a swab - can tell them apart for certain, which is why persistent or uncertain symptoms are worth checking rather than self-treating so you (and, where relevant, a partner) get the right treatment."
        ]
      },
      {
        "heading": "Basics of treatment",
        "paragraphs": [
          "Both are usually straightforward to treat once diagnosed correctly, but the treatments differ, so it's important not to guess or self-treat repeatedly without a proper assessment - especially if this is your first episode or symptoms keep returning.",
          "Thrush is treated with antifungal creams, pessaries, or tablets, and usually clears within one to two weeks. In pregnancy the oral tablets are generally avoided and creams or pessaries used instead - another reason to confirm with your doctor rather than reaching for an over-the-counter option. BV is treated with a course of antibiotics, as tablets or a vaginal gel or cream. Simple self-care - cotton underwear, avoiding tight synthetic clothing, and skipping douches or scented washes - can support treatment and reduce recurrence, but shouldn't replace medical treatment when it's needed."
        ]
      },
      {
        "heading": "Why it matters more in pregnancy",
        "paragraphs": [
          "Both thrush and BV are common in pregnancy because of natural hormonal changes, and thrush on its own is not usually a concern for your baby. BV, however, deserves prompt attention, as it has been linked in some studies to a small increased risk of premature birth, miscarriage, and other complications. Most pregnancies with BV are completely fine - this simply means it's worth getting checked and treated rather than waiting it out.",
          "Because pregnancy-safe medicines can differ, always let your doctor confirm the right treatment rather than self-treating. If you notice a change in discharge, smell, or discomfort, don't wait for your next scheduled visit - mention it to your doctor promptly.",
          "Some pregnancy symptoms, though, need care straight away rather than a routine mention. If you are pregnant, seek help immediately - do not wait - if you have vaginal bleeding, a sudden gush or continuous leak of watery fluid (your waters may have broken), regular tightenings or pelvic pressure before 37 weeks, a fever of 38C/100.4F or higher, or you notice your baby moving less than usual."
        ]
      },
      {
        "heading": "When to reach out to Dr Santhalakshmi",
        "paragraphs": [
          "You don't need to struggle with uncertainty or discomfort. It's worth booking a consultation if you notice a new or unusual discharge, itching, odour, or pain - particularly if this is your first episode, symptoms keep coming back, you're pregnant, or an over-the-counter treatment hasn't helped. A quick examination can confirm what's going on and rule out other causes, so you get the right treatment.",
          "Some symptoms, though, need urgent attention rather than a routine appointment. Get medical help the same day - or go to your nearest emergency department - if you have a fever or chills, severe or worsening lower abdominal or pelvic pain, pain together with abnormal discharge, or you simply feel very unwell. These can be signs of a deeper infection such as pelvic inflammatory disease, which needs prompt treatment to protect your health and future fertility.",
          "At Kairavi Women's Clinic in Kelambakkam, Chennai, Dr Santhalakshmi S offers a comfortable, confidential space to discuss any vaginal or gynaecological concern, at any stage of life. Call or WhatsApp +91 73586 79920 to book an appointment."
        ]
      }
    ],
    "sources": [
      {
        "title": "Vaginal thrush - NHS",
        "url": "https://www.nhs.uk/conditions/vaginal-thrush/"
      },
      {
        "title": "Bacterial vaginosis - NHS",
        "url": "https://www.nhs.uk/conditions/bacterial-vaginosis/"
      },
      {
        "title": "Trichomoniasis - NHS",
        "url": "https://www.nhs.uk/conditions/trichomoniasis/"
      },
      {
        "title": "Pelvic inflammatory disease (PID) - NHS",
        "url": "https://www.nhs.uk/conditions/pelvic-inflammatory-disease-pid/"
      }
    ]
  },
];

export const BLOG_SLUGS = BLOG_POSTS.map((p) => p.slug);
export const getPost = (slug: string) => BLOG_POSTS.find((p) => p.slug === slug);
