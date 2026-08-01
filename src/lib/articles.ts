// Patient-education articles for each service, one per /services/<slug>/ page.
// Web-verified medical content (sources cited per article), medically responsible,
// no overclaims. Generated from research agents. Slugs match SERVICES in clinic.ts.
import type { Service } from './clinic';

export interface ArticleSection { heading: string; paragraphs: string[]; bullets?: string[]; }
export interface ArticleFAQ { question: string; answer: string; }
export interface ArticleSource { title: string; url: string; }
export interface Article {
  slug: string; name: string; metaTitle: string; metaDescription: string;
  intro: string; sections: ArticleSection[]; faqs: ArticleFAQ[]; sources: ArticleSource[];
  image: { src: string; alt: string };
}

export const ARTICLES: Article[] = [
  {
    "slug": "pre-conception-counselling",
    "name": "Pre-Conception Counselling",
    "metaTitle": "Pre-Conception Counselling",
    "metaDescription": "Planning a baby? Learn how pre-conception counselling, folic acid, vaccines and health checks help you start pregnancy well. Book at Kairavi Clinic.",
    "intro": "Pre-conception counselling is a friendly health check before you try for a baby. It gives you and your partner a chance to get your health in good shape, ask questions, and lower the chance of problems in pregnancy. The goal is simple: to help you feel ready and supported before you conceive.",
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Many things that affect a healthy pregnancy happen in the first few weeks, often before a woman even knows she is pregnant. A visit before conception lets us look at your overall health early, so there is time to make helpful changes.",
          "Pre-conception care is useful whether this is your first baby or you have been pregnant before. It is also a good idea if you have a long-term health condition, take regular medicines, or have had a difficult pregnancy in the past."
        ]
      },
      {
        "heading": "What to expect",
        "paragraphs": [
          "During your visit, Dr. Santhalakshmi will talk with you about your medical history, your periods, any past pregnancies, and your family health background. This is a relaxed conversation, and there are no wrong questions to ask.",
          "We may suggest some simple checks, such as blood tests for haemoglobin (to look for anaemia), blood group, blood sugar, thyroid, and immunity to certain infections. We can also review your weight and blood pressure."
        ],
        "bullets": [
          "A review of your health history and any current symptoms",
          "Basic blood tests and a check of your blood pressure and weight",
          "Advice on folic acid and other supplements",
          "A look at any regular medicines you take",
          "Time to ask anything about getting pregnant"
        ]
      },
      {
        "heading": "How we care for you",
        "paragraphs": [
          "Folic acid is one of the most important steps. Taking 400 micrograms of folic acid every day, starting at least one month before you try to conceive and continuing through the first 12 weeks, can lower the chance of certain birth defects of the brain and spine. Some women, for example those with diabetes, a history of a previous baby with such a defect, or those on certain anti-seizure medicines, may be advised a higher dose. We will guide you on the right amount for you.",
          "We also check that your vaccinations are up to date. Being protected against infections such as rubella before pregnancy is helpful, since some vaccines are given before you conceive rather than during pregnancy. If you have a condition like diabetes, high blood pressure, thyroid trouble, or epilepsy, getting it well managed before pregnancy can make a real difference, so we work with you on this.",
          "Healthy daily habits matter too. We may talk about a balanced diet, gentle activity, reaching a comfortable weight, and stopping alcohol and tobacco, since these can affect both conceiving and a growing baby."
        ],
        "bullets": [
          "Folic acid 400 micrograms daily before and in early pregnancy",
          "A check that vaccinations such as rubella are up to date",
          "Help to manage diabetes, thyroid, blood pressure or other conditions",
          "A review of medicines, as some may need to be changed before pregnancy",
          "Support to stop smoking and alcohol and to eat well"
        ]
      },
      {
        "heading": "Preparing for your visit",
        "paragraphs": [
          "It helps to bring a list of any medicines or supplements you take, including ones bought without a prescription. If you have past medical or pregnancy records, blood reports, or scan results, please carry them along.",
          "It is a good idea for your partner to come too if possible. Some family health details and lifestyle habits involve both of you, and decisions about pregnancy are easier to make together."
        ]
      },
      {
        "heading": "When to reach out",
        "paragraphs": [
          "There is no need to wait until you are ready to conceive right away. Speaking with us a few months ahead gives more time to prepare. If you have a long-term condition, are on regular medication, are over 35, or have had miscarriages or pregnancy complications before, an earlier chat is especially worthwhile.",
          "To book a pre-conception visit at Kairavi Women's Clinic in Kelambakkam, you can call or message us on WhatsApp. We are happy to answer your questions and find a time that suits you."
        ]
      }
    ],
    "faqs": [
      {
        "question": "When should I start pre-conception counselling?",
        "answer": "Ideally a few months before you plan to try for a baby. This gives time to start folic acid, update vaccinations, manage any health conditions, and make lifestyle changes. If you have a medical condition or are on regular medicines, an earlier visit is even more helpful."
      },
      {
        "question": "How much folic acid should I take before pregnancy?",
        "answer": "Most women are advised 400 micrograms of folic acid daily, started at least one month before trying to conceive and continued for the first 12 weeks. Some women need a higher dose, so it is best to confirm the right amount with your doctor."
      },
      {
        "question": "Do I need any tests before getting pregnant?",
        "answer": "Often a few simple checks are suggested, such as haemoglobin, blood group, blood sugar, thyroid, and immunity to some infections, along with blood pressure and weight. The exact tests depend on your health history, and we will explain why each one is useful."
      },
      {
        "question": "Should my partner come to the appointment?",
        "answer": "Yes, it is a good idea if he can. Family health history, lifestyle habits, and planning a pregnancy involve both partners. Coming together makes it easier to ask questions and decide on next steps."
      }
    ],
    "sources": [
      {
        "title": "ACOG: Good Health Before Pregnancy (Prepregnancy Care)",
        "url": "https://www.acog.org/womens-health/faqs/good-health-before-pregnancy-prepregnancy-care"
      },
      {
        "title": "NHS: Planning your pregnancy",
        "url": "https://www.nhs.uk/pregnancy/trying-for-a-baby/planning-your-pregnancy/"
      },
      {
        "title": "ACOG Committee Opinion No. 762: Prepregnancy Counseling",
        "url": "https://pubmed.ncbi.nlm.nih.gov/30575679/"
      }
    ],
    "image": {
      "src": "/images/articles/pre-conception-counselling.jpg",
      "alt": "Couple on bicycles reaching for each other's hands at sunset, planning ahead together"
    }
  },
  {
    "slug": "high-risk-pregnancy-management",
    "name": "High-Risk Pregnancy Management",
    "metaTitle": "High-Risk Pregnancy Care",
    "metaDescription": "Caring, expert monitoring for high-risk pregnancy in Kelambakkam, Chennai. Learn what makes a pregnancy high-risk and how we look after you and your baby.",
    "intro": "A high-risk pregnancy simply means you or your baby may need closer attention than usual. Most women with a high-risk pregnancy go on to have a healthy baby, especially with regular care. At Kairavi Women's Clinic, Dr. Santhalakshmi works with you through every stage so you feel supported and informed.",
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "A pregnancy is called high-risk when there is a higher chance of certain health concerns for the mother, the baby, or both. This does not mean something will go wrong. It mainly means your care may include extra check-ups, scans, or tests so that anything that comes up can be picked up early and managed.",
          "Some pregnancies are high-risk from the start because of an existing health condition. Others become high-risk as the pregnancy goes on. Either way, the aim of close monitoring is the same: to keep you and your baby as safe and comfortable as possible.",
          "Being told your pregnancy is high-risk can feel worrying at first. It often simply means a few extra appointments and tests, woven into the same supportive care every expectant mother receives. Many women in this situation have a smooth pregnancy and a healthy baby."
        ]
      },
      {
        "heading": "What can make a pregnancy high-risk",
        "paragraphs": [
          "Several factors can raise the chance of complications. Having one of these does not mean you will have problems, but it helps your doctor plan the right level of care for you."
        ],
        "bullets": [
          "Age: being older than 35 or in the mid-teens can carry a slightly higher chance of certain complications.",
          "High blood pressure or pre-eclampsia, which is a condition involving raised blood pressure and protein in the urine during pregnancy.",
          "Gestational diabetes, which is high blood sugar that can develop during pregnancy.",
          "Expecting twins or more, which usually needs extra monitoring.",
          "Existing conditions such as long-standing high blood pressure, diabetes, thyroid problems, kidney disease, or heart conditions.",
          "A previous pregnancy with complications, such as early birth, pre-eclampsia, or a previous caesarean."
        ]
      },
      {
        "heading": "How we care for you",
        "paragraphs": [
          "Care is planned around your particular situation. You may be offered more frequent antenatal visits, additional ultrasound scans to check your baby's growth, and blood pressure and urine checks at each visit. If you have or develop gestational diabetes, testing and dietary guidance are usually part of your care.",
          "Where helpful, your doctor may suggest blood tests, monitoring of your baby's heartbeat, or a referral for a specialist opinion. The plan can change as your pregnancy progresses, and your doctor will explain each step so you understand the reasons behind it.",
          "Day-to-day advice often matters just as much as tests. Your doctor may talk with you about rest, gentle activity, healthy eating, taking iron and folic acid, and managing any existing condition such as blood pressure or blood sugar. Simple habits, followed steadily, can make a real difference over the months ahead."
        ]
      },
      {
        "heading": "Preparing for your visit",
        "paragraphs": [
          "Bringing the right information helps your doctor plan your care well. It is useful to come with a few things ready, and to share any concerns openly."
        ],
        "bullets": [
          "A list of any medicines or supplements you take, including doses.",
          "Details of past pregnancies and any complications.",
          "Any earlier scan reports, blood test results, or hospital records you have.",
          "A note of symptoms you have noticed, and questions you want to ask."
        ]
      },
      {
        "heading": "When to reach out",
        "paragraphs": [
          "Contact the clinic or seek urgent care if you notice warning signs rather than waiting for your next appointment. Trust your instincts. If something does not feel right, it is always reasonable to ask.",
          "You can book an appointment with Kairavi Women's Clinic by phone or WhatsApp. For anything that feels urgent, please seek care without delay."
        ],
        "bullets": [
          "Severe or constant headache, blurred vision, or sudden swelling of the face, hands, or feet.",
          "Heavy vaginal bleeding or any leaking of fluid.",
          "Severe tummy pain, or a fever.",
          "A noticeable drop in your baby's movements."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Does a high-risk pregnancy mean my baby will have problems?",
        "answer": "No. High-risk means you may need closer monitoring, not that problems are certain. Many women with a high-risk pregnancy have a healthy baby. Regular care helps pick up and manage any concerns early."
      },
      {
        "question": "Will I need more scans and tests?",
        "answer": "Often, yes. You may be offered extra ultrasound scans to check your baby's growth, along with regular blood pressure, urine, and blood tests. Your exact plan depends on your individual situation and is explained by your doctor."
      },
      {
        "question": "Can I still have a normal delivery with a high-risk pregnancy?",
        "answer": "In many cases, a vaginal birth is still possible. The right choice depends on your health, your baby's wellbeing, and how labour progresses. Your doctor will discuss the safest options with you as your due date nears."
      },
      {
        "question": "How early should I start antenatal care?",
        "answer": "It helps to start as early as possible, ideally in the first trimester. Early care lets your doctor identify any risk factors and plan your monitoring from the start."
      }
    ],
    "sources": [
      {
        "title": "Pregnancy at Age 35 Years or Older | ACOG",
        "url": "https://www.acog.org/clinical/clinical-guidance/obstetric-care-consensus/articles/2022/08/pregnancy-at-age-35-years-or-older"
      },
      {
        "title": "High-Risk Pregnancy: Age, Complications & Management | Cleveland Clinic",
        "url": "https://my.clevelandclinic.org/health/diseases/22190-high-risk-pregnancy"
      },
      {
        "title": "Your antenatal care and appointments | NHS",
        "url": "https://www.nhs.uk/pregnancy/your-pregnancy-care/your-antenatal-care-and-appointments/"
      }
    ],
    "image": {
      "src": "/images/articles/high-risk-pregnancy-management.jpg",
      "alt": "Nurse checking a patient's blood pressure with a monitor during careful antenatal monitoring"
    }
  },
  {
    "slug": "normal-and-assisted-deliveries",
    "name": "Normal & Assisted Deliveries",
    "metaTitle": "Normal & Assisted Deliveries",
    "metaDescription": "Vaginal birth and assisted delivery with vacuum or forceps in Kelambakkam, Chennai. Learn what to expect and how we care for you during labour.",
    "intro": "A normal delivery is a vaginal birth, and an assisted delivery is a vaginal birth helped along by a vacuum cup or forceps when extra help is needed near the end. Most births are straightforward, and assistance is only used when it is the safer choice for you and your baby. At Kairavi Women's Clinic, Dr. Santhalakshmi supports you through labour with clear, calm guidance.",
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "In a normal vaginal delivery, your baby is born through the birth canal with your own pushing efforts. Labour usually moves through stages, from early contractions to the birth of your baby and then the placenta. Your doctor and the care team monitor you and your baby throughout.",
          "Sometimes, near the end of labour, a little extra help is needed to guide your baby out safely. This is called an assisted or operative vaginal delivery, and it uses either a vacuum device or forceps."
        ]
      },
      {
        "heading": "What assisted delivery means",
        "paragraphs": [
          "An assisted delivery is when your doctor uses a vacuum cup or forceps to gently help your baby through the last part of the birth canal while you continue to push. The instrument is chosen based on your situation, and your doctor will explain the reason before going ahead.",
          "A vacuum device, sometimes called a ventouse, is a soft or firm cup that attaches to the top of your baby's head and applies gentle traction. Forceps are two smooth, curved blades that cradle your baby's head to guide it out. Assisted births are fairly common and are used to help, not to replace, your own efforts."
        ],
        "bullets": [
          "Your baby may need help arriving sooner, for example if the heartbeat pattern suggests it is better not to wait.",
          "Pushing has gone on for a long time and you are tired.",
          "You have been advised not to push hard because of a health condition.",
          "Your baby is in a position that needs a little guidance."
        ]
      },
      {
        "heading": "How we care for you",
        "paragraphs": [
          "During labour, your blood pressure, your contractions, and your baby's heartbeat are monitored. Pain relief options are discussed with you, and you are encouraged to move and find comfortable positions where possible.",
          "If an assisted delivery is recommended, your doctor will explain why, what instrument is suited, and what to expect. Numbing or other pain relief is usually given. Afterwards, you and your baby are checked over, and any stitches or aftercare needs are explained. If a vaginal birth is not the safest path, your doctor will talk through other options with you."
        ]
      },
      {
        "heading": "Preparing for your visit",
        "paragraphs": [
          "Talking through your birth preferences during your antenatal visits helps you feel ready. There is no single right plan, and staying flexible is wise because labour can be unpredictable. You can book an appointment with Kairavi Women's Clinic by phone or WhatsApp."
        ],
        "bullets": [
          "Ask about pain relief choices and what they involve.",
          "Share any concerns about labour, including past birth experiences.",
          "Keep your antenatal records and scan reports handy.",
          "Pack a hospital bag in your final weeks and know how to reach the clinic when labour starts."
        ]
      },
      {
        "heading": "When to reach out",
        "paragraphs": [
          "Contact the clinic when you think labour may be starting, and seek care promptly for any warning sign rather than waiting. If you are unsure, it is always reasonable to call."
        ],
        "bullets": [
          "Regular, strengthening contractions, or your waters breaking.",
          "Any vaginal bleeding.",
          "A noticeable reduction in your baby's movements.",
          "Severe pain, severe headache, or blurred vision."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Why might I need a vacuum or forceps delivery?",
        "answer": "Assistance may be suggested if your baby needs to be born a little sooner, if pushing has gone on a long time and you are tired, or if you have been advised not to push hard. It is used to help a vaginal birth, and your doctor explains the reason beforehand."
      },
      {
        "question": "Is an assisted delivery safe?",
        "answer": "Assisted vaginal births are a common and accepted part of obstetric care, used when they are the safer option. As with any procedure there can be some risks, which your doctor will discuss with you. The aim is always the wellbeing of you and your baby."
      },
      {
        "question": "Will I be able to have a normal birth next time?",
        "answer": "Many women who have an assisted delivery go on to have a straightforward vaginal birth later. What is right for you depends on your individual circumstances, and your doctor can talk this through during future pregnancies."
      },
      {
        "question": "Does an assisted delivery need stitches?",
        "answer": "Sometimes stitches are needed if there is a tear or a cut to help the birth. Your doctor will check after delivery and explain any aftercare. Most of this heals over the following weeks."
      }
    ],
    "sources": [
      {
        "title": "Assisted Vaginal Delivery | ACOG",
        "url": "https://www.acog.org/womens-health/faqs/assisted-vaginal-delivery"
      },
      {
        "title": "Forceps or vacuum delivery | NHS",
        "url": "https://www.nhs.uk/pregnancy/labour-and-birth/what-happens/forceps-or-vacuum-delivery/"
      }
    ],
    "image": {
      "src": "/images/articles/normal-and-assisted-deliveries.jpg",
      "alt": "Newborn baby's tiny feet wrapped in a soft white blanket"
    }
  },
  {
    "slug": "caesarean-sections",
    "name": "Caesarean Sections (Elective & Emergency)",
    "metaTitle": "Caesarean Section Care",
    "metaDescription": "Planned and emergency caesarean birth in Kelambakkam, Chennai. Learn why a C-section may be needed, what to expect, and how recovery works.",
    "intro": "A caesarean section, often called a C-section, is an operation to deliver your baby through a cut in your tummy and womb. Some are planned in advance, and others are decided during labour when it becomes the safest way to give birth. At Kairavi Women's Clinic, Dr. Santhalakshmi will explain your options clearly and support you before, during, and after.",
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "A caesarean is a common and well-established way to give birth. It may be the planned choice from early on, or it may become the right choice during labour. In either case, the goal is a safe arrival for your baby and good care for you.",
          "A planned, or elective, caesarean is usually carried out from around the 39th week of pregnancy when there is no medical reason to deliver earlier. An emergency caesarean is one decided before or during labour because it is the safest option at that moment."
        ]
      },
      {
        "heading": "Why a caesarean may be planned or become an emergency",
        "paragraphs": [
          "A planned caesarean may be advised for clear reasons known before labour. An emergency caesarean is usually decided when labour is not going as hoped or there is concern about you or your baby. The word emergency does not always mean a sudden rush, it simply means it was not planned in advance."
        ],
        "bullets": [
          "Planned reasons can include the baby lying bottom-first, which is called breech, when turning is not possible.",
          "Planned reasons can include a low-lying placenta, certain infections, some cases of pre-eclampsia, or a previous caesarean.",
          "Expecting twins or more may sometimes lead to a planned caesarean.",
          "Emergency reasons can include labour not progressing well, heavy bleeding, or concern about your baby's wellbeing during labour."
        ]
      },
      {
        "heading": "How we care for you",
        "paragraphs": [
          "Most caesareans are done with a spinal or epidural anaesthetic, so you are awake but numb from the chest down and feel no pain. A screen is placed so you do not see the surgery, and many mothers can have skin-to-skin contact with their baby soon after birth.",
          "Your doctor explains the reasons, the anaesthetic, and what to expect beforehand wherever there is time. After the birth, you and your baby are monitored closely, and the care team supports you with feeding and early recovery."
        ]
      },
      {
        "heading": "Recovery and preparing for your visit",
        "paragraphs": [
          "A caesarean is major surgery, so recovery usually takes a little longer than after a vaginal birth. Many women stay in hospital for a few days, and pain relief is offered to keep you comfortable. The wound heals over the following weeks, and gentle movement helps recovery.",
          "It helps to arrange support at home for the first few weeks, as you will be advised to avoid heavy lifting and, often, driving until you are checked and feel ready. You can book an appointment with Kairavi Women's Clinic by phone or WhatsApp to discuss your birth options."
        ],
        "bullets": [
          "Take pain relief as advised and move gently as you are able.",
          "Keep the wound clean and dry, and watch for signs of infection.",
          "Avoid heavy lifting and strenuous activity until your doctor advises.",
          "Arrange help at home for feeding, household tasks, and rest."
        ]
      },
      {
        "heading": "When to reach out",
        "paragraphs": [
          "During recovery, contact the clinic or seek care if you notice any warning sign rather than waiting. Asking early is always sensible."
        ],
        "bullets": [
          "Increasing pain, redness, swelling, or discharge from the wound.",
          "A fever, or feeling generally unwell.",
          "Heavy or foul-smelling vaginal bleeding.",
          "Pain, swelling, or redness in a leg, or trouble breathing, which need urgent care.",
          "Feelings of sadness or low mood lasting more than two weeks after birth."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Will I be awake during a caesarean?",
        "answer": "Most caesareans are done with a spinal or epidural anaesthetic, so you are awake but numb and free of pain. In some emergency situations a general anaesthetic is needed. Your doctor and anaesthetist will explain what suits your situation."
      },
      {
        "question": "How long does recovery from a caesarean take?",
        "answer": "Recovery usually takes a few weeks and is often a little longer than after a vaginal birth. Many women stay in hospital for a few days. With rest, pain relief, and support at home, most feel steadily better over the following weeks."
      },
      {
        "question": "Can I have a vaginal birth after a caesarean?",
        "answer": "Many women can plan a vaginal birth after a previous caesarean, while for others a repeat caesarean is safer. The right choice depends on your individual history and pregnancy. Your doctor will discuss the options with you."
      },
      {
        "question": "Does an emergency caesarean mean something has gone seriously wrong?",
        "answer": "Not necessarily. Emergency simply means the caesarean was not planned in advance and was decided during pregnancy or labour as the safest way to give birth. It is a common and well-practised procedure."
      }
    ],
    "sources": [
      {
        "title": "Caesarean section | NHS",
        "url": "https://www.nhs.uk/conditions/caesarean-section/"
      },
      {
        "title": "Choosing a caesarean (planned caesarean birth) | Imperial College Healthcare NHS Trust",
        "url": "https://www.imperial.nhs.uk/our-services/maternity-services/giving-birth/planned-caesarean-birth"
      }
    ],
    "image": {
      "src": "/images/articles/caesarean-sections.jpg",
      "alt": "Mother tenderly holding and cradling her swaddled newborn, warm recovery moment"
    }
  },
  {
    "slug": "antenatal-and-postnatal-care",
    "name": "Antenatal & Postnatal Care",
    "metaTitle": "Antenatal & Postnatal Care",
    "metaDescription": "Regular pregnancy check-ups and after-birth care in Kelambakkam, Chennai. Learn the visit schedule, common scans and tests, and newborn care basics.",
    "intro": "Antenatal care is the regular check-ups you have during pregnancy, and postnatal care is the support you receive after your baby arrives. Together they help keep you and your baby well from the early weeks through to recovery. At Kairavi Women's Clinic, Dr. Santhalakshmi guides you warmly through both.",
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Antenatal care lets your doctor follow your health and your baby's growth during pregnancy. Routine checks such as blood pressure, weight, and urine tests help spot anything that needs attention early. Postnatal care continues this support after birth, looking after your recovery and your newborn.",
          "Starting care early, ideally in the first trimester, gives you a strong start in planning a healthy pregnancy. The number and timing of visits can be tailored to you.",
          "Each visit is also a chance to ask questions, talk through how you are feeling, and learn what to expect next. Good antenatal and postnatal care is about steady support and clear information, not just tests, so you feel confident at every stage."
        ]
      },
      {
        "heading": "Your antenatal visit schedule",
        "paragraphs": [
          "The World Health Organization recommends at least eight antenatal contacts during a healthy pregnancy, with the first in the first trimester. In India, national guidance also encourages early registration and regular visits, with the number adjusted to your needs.",
          "Visits are usually more frequent as you get closer to your due date. If your pregnancy needs extra monitoring, your doctor may suggest additional appointments."
        ],
        "bullets": [
          "Early booking visit to confirm the pregnancy and check your health history.",
          "Blood pressure and urine checks at most visits.",
          "An early ultrasound scan to confirm dates, and a mid-pregnancy scan around 18 to 21 weeks to check your baby's growth and development.",
          "Blood tests for things such as anaemia, blood group, and infections.",
          "Testing for gestational diabetes, often offered between 24 and 28 weeks if needed.",
          "Iron, folic acid, and tetanus protection as advised."
        ]
      },
      {
        "heading": "How we care for you after birth",
        "paragraphs": [
          "Your body recovers gradually over about six to eight weeks. Some vaginal bleeding for a few weeks is normal, and gentle activity such as walking can help. Your doctor will check your healing, blood pressure, and emotional wellbeing, and offer guidance on feeding and contraception.",
          "Newborn care in the early days focuses on a few simple basics. Skin-to-skin contact, keeping your baby warm, and early feeding all help your baby settle. Breastfeeding support is part of postnatal care, and your baby will be checked over after birth.",
          "It is normal for newborns to lose a little weight in the first days and then begin to gain steadily. Frequent feeding, plenty of skin-to-skin time, and rest for you all help. If you are unsure about feeding or your baby's sleep, your doctor and care team are there to guide you, and no question is too small."
        ],
        "bullets": [
          "Early and frequent feeding, with breastfeeding encouraged where possible.",
          "Keeping your baby warm and clean, with gentle cord and skin care.",
          "A newborn check after birth, and routine screening such as the heel-prick blood test.",
          "Safe sleeping practices to lower the risk of cot death."
        ]
      },
      {
        "heading": "Preparing for your visit",
        "paragraphs": [
          "A little preparation makes each visit smoother. You can book an appointment with Kairavi Women's Clinic by phone or WhatsApp."
        ],
        "bullets": [
          "Bring any earlier scan reports, blood test results, and your pregnancy or vaccination records.",
          "Note down any medicines or supplements you take.",
          "Write down questions or symptoms you want to discuss.",
          "For postnatal visits, bring your baby's records and note any feeding or sleep concerns."
        ]
      },
      {
        "heading": "When to reach out",
        "paragraphs": [
          "Between appointments, contact the clinic if you notice anything worrying. For your baby, seek advice if feeding is very difficult or your baby seems unwell. It is always fine to ask."
        ],
        "bullets": [
          "Severe headache, blurred vision, or sudden swelling during pregnancy.",
          "Heavy bleeding, leaking fluid, or a noticeable drop in your baby's movements.",
          "After birth: heavy or foul-smelling bleeding, fever, or feelings of sadness lasting more than two weeks.",
          "A newborn who is feeding poorly, very sleepy, or has a fever."
        ]
      }
    ],
    "faqs": [
      {
        "question": "When should I have my first antenatal visit?",
        "answer": "As early as possible, ideally in the first trimester. An early visit confirms your pregnancy, checks your health, and lets your doctor plan your care and any needed tests from the start."
      },
      {
        "question": "How long does recovery after birth take?",
        "answer": "Recovery usually takes around six to eight weeks, though everyone is different. Some bleeding and tiredness are normal at first. Your postnatal check helps make sure you are healing well."
      },
      {
        "question": "What basic care does a newborn need in the first days?",
        "answer": "Early and frequent feeding, staying warm, gentle skin and cord care, and safe sleep are the basics. Your baby will also have a check after birth and routine newborn screening. Your doctor can guide you through it all."
      }
    ],
    "sources": [
      {
        "title": "Your antenatal care and appointments | NHS",
        "url": "https://www.nhs.uk/pregnancy/your-pregnancy-care/your-antenatal-care-and-appointments/"
      },
      {
        "title": "New guidelines on antenatal care for a positive pregnancy experience | WHO",
        "url": "https://www.who.int/news/item/07-11-2016-new-guidelines-on-antenatal-care-for-a-positive-pregnancy-experience"
      },
      {
        "title": "Early days (after the birth) | NHS",
        "url": "https://www.nhs.uk/pregnancy/labour-and-birth/after-the-birth/early-days/"
      }
    ],
    "image": {
      "src": "/images/articles/antenatal-and-postnatal-care.jpg",
      "alt": "Pregnant woman cradling her belly with hands forming a heart shape"
    }
  },
  {
    "slug": "gynaecological-treatments",
    "name": "Gynaecological Treatments (Medical & Surgical)",
    "metaTitle": "Gynaecological Treatments",
    "metaDescription": "Medical and minimally invasive surgical gynae care at Kairavi Women's Clinic, Kelambakkam, Chennai. Caring, clear treatment for common conditions.",
    "intro": "Many common gynaecological problems can be treated, often with medicines or with gentle keyhole surgery. This page gives an overview of the medical and minimally invasive surgical care we offer and what you can expect when you visit.",
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Gynaecological care covers a wide range of conditions, from heavy or painful periods to fibroids, ovarian cysts, polyps, and endometriosis. The right treatment depends on your diagnosis, your symptoms, and your goals, such as relief of symptoms or plans for pregnancy.",
          "Care often begins with simpler, non-surgical options. When surgery is needed, many procedures can be done using minimally invasive techniques that usually mean smaller cuts and a quicker recovery than open surgery."
        ]
      },
      {
        "heading": "Medical (non-surgical) care",
        "paragraphs": [
          "Many conditions improve with medicines or other non-surgical steps. These are often tried first because they are simpler and avoid surgery.",
          "Depending on the condition, options can include hormonal treatments such as the combined pill, progestogen tablets, or a hormonal intrauterine system, non-hormonal medicines for heavy or painful periods, treatment for infections, and advice on lifestyle. We will explain what each option does and its common side effects.",
          "Medical care often takes a little time to show its full effect, so we may review how you are doing and adjust the plan if needed. If symptoms do not settle, or a condition needs a closer look, we will talk through the next steps with you."
        ]
      },
      {
        "heading": "Minimally invasive (keyhole) surgery",
        "paragraphs": [
          "When surgery can help, minimally invasive methods are often suitable. Two common approaches are laparoscopy and hysteroscopy.",
          "Laparoscopy uses a thin camera passed through small cuts in the tummy to view and treat conditions such as ovarian cysts, fibroids, or endometriosis. Hysteroscopy uses a thin camera passed through the vagina and cervix to look inside the uterus and treat problems such as polyps, with no cut on the tummy. Compared with open surgery, these methods are generally linked to less pain, smaller scars, and a faster return to daily life, though the right choice depends on your case."
        ],
        "bullets": [
          "Ovarian cyst removal",
          "Fibroid treatment",
          "Treatment of endometriosis",
          "Removal of polyps inside the uterus",
          "Investigation of heavy or unusual bleeding"
        ]
      },
      {
        "heading": "How we care for you",
        "paragraphs": [
          "Dr. Santhalakshmi will talk through your diagnosis and the options in plain language, including the benefits, the risks, and what recovery may look like. Our aim is for you to feel informed and comfortable with the plan.",
          "We start with the least invasive option that suits your condition and step up only if needed. Where it matters to you, we keep your future fertility in mind when planning care.",
          "You are welcome to take time to think things over, ask questions, or seek a second opinion. We want you to feel comfortable and well informed before you agree to any treatment."
        ]
      },
      {
        "heading": "Preparing for your visit",
        "paragraphs": [
          "Bring along any past scan reports, blood tests, or a list of your medicines, and note down the dates and pattern of your symptoms. It helps to write down your questions beforehand so nothing is missed.",
          "If a procedure is planned, our team will give you clear instructions on what to do before and after, including any fasting, when to arrive, and how to rest at home afterwards. It can help to arrange for someone to travel home with you and to take a few quiet days off work if your procedure needs it.",
          "Please tell us about any allergies, medicines, or health conditions, as this helps us plan your care safely. There is no such thing as a silly question, so do ask us anything that is on your mind."
        ]
      },
      {
        "heading": "When to reach out",
        "paragraphs": [
          "Please get in touch if you have ongoing symptoms such as heavy or painful periods, pelvic pain, or any change that worries you. After a procedure, contact us if you have heavy bleeding, fever, severe pain, or anything that does not feel right.",
          "You can book an appointment at Kairavi Women's Clinic, Kelambakkam, by phone or WhatsApp. We are happy to answer your questions before you decide on any treatment."
        ]
      }
    ],
    "faqs": [
      {
        "question": "What is the difference between laparoscopy and hysteroscopy?",
        "answer": "Laparoscopy uses a thin camera through small cuts in the tummy to view and treat the ovaries, tubes, or outside of the uterus. Hysteroscopy uses a camera passed through the vagina and cervix to look inside the uterus, with no cut on the tummy."
      },
      {
        "question": "Will I always need surgery for a gynae problem?",
        "answer": "No. Many conditions improve with medicines or other non-surgical care, which is often tried first. Surgery is considered when it is likely to help and after discussing the options with you."
      },
      {
        "question": "How long is recovery after keyhole surgery?",
        "answer": "Recovery varies by the person and the procedure, but keyhole surgery is generally linked to less pain and a faster return to daily life than open surgery. Your doctor will give you advice for your specific case."
      },
      {
        "question": "Can these treatments affect my fertility?",
        "answer": "Many treatments aim to protect or even help fertility, and the approach can be planned with your future plans in mind. Tell your doctor if you hope to have children so this can guide the choice of care."
      }
    ],
    "sources": [
      {
        "title": "Imperial College Healthcare NHS Trust: Minimal access surgery for gynaecology",
        "url": "https://www.imperial.nhs.uk/our-services/gynaecology/minimal-access-surgery-for-gynaecology"
      },
      {
        "title": "NHS: Heavy periods",
        "url": "https://www.nhs.uk/conditions/heavy-periods/"
      },
      {
        "title": "Yale Medicine: Minimally Invasive Gynecologic Surgery",
        "url": "https://www.yalemedicine.org/conditions/minimally-invasive-gyn-surgery"
      }
    ],
    "image": {
      "src": "/images/articles/gynaecological-treatments.jpg",
      "alt": "Confident doctor in a white coat with a stethoscope, modern clinical setting"
    }
  },
  {
    "slug": "family-planning-and-contraceptive-counselling",
    "name": "Family Planning & Contraceptive Counselling",
    "metaTitle": "Family Planning & Contraception",
    "metaDescription": "Private, judgement-free family planning advice. Learn how pills, IUDs, implants, injections and other methods work. Book at Kairavi Clinic.",
    "intro": "Family planning means choosing if and when to have children, and how to space your pregnancies. Contraceptive counselling is a private, unhurried conversation to help you understand your options and pick what suits your body and your life. Every choice is respected here, with no judgement.",
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "There are many safe and effective ways to prevent or plan pregnancy. No single method is right for everyone, so the best choice depends on your health, your future plans, how easy a method is to use, and your own comfort.",
          "Our aim is to give you clear, honest information so you can decide for yourself. Whatever you choose can usually be changed later if your needs change, and we are always happy to review it with you."
        ]
      },
      {
        "heading": "What to expect",
        "paragraphs": [
          "During your visit, Dr. Santhalakshmi will ask about your health, your periods, any past pregnancies, and what you are looking for, such as a short-term, long-term, or permanent method. This conversation is confidential.",
          "We then explain the options that may suit you, including how each one works and how to use it. You are free to take your time, ask questions, and decide without any pressure."
        ]
      },
      {
        "heading": "Methods we can discuss",
        "paragraphs": [
          "Reversible methods can be stopped when you wish to try for a baby. Hormonal pills include the combined pill, which contains two hormones, and the progestogen-only pill, which has one. Both are taken regularly and work well when used correctly, though they need to be remembered each day. In India, government programmes also offer options such as Mala N pills and the weekly non-hormonal Chhaya (Centchroman) pill.",
          "Long-acting methods need less day-to-day effort. The intrauterine device (IUD, copper) and the intrauterine system (IUS, hormonal) are small devices placed in the womb that can last several years. The implant is a tiny rod placed under the skin of the upper arm, and the injection (such as the DMPA injection offered under the Antara programme) is given every few months. These long-acting options are among the most reliable everyday methods, because there is little for you to do once they are in place.",
          "Barrier methods such as condoms work by stopping sperm from reaching an egg. Condoms are also the only method that helps protect against sexually transmitted infections, so some people use them alongside another method. Permanent methods, namely female sterilisation and male vasectomy, are meant for those who are sure they do not want children in the future."
        ],
        "bullets": [
          "Combined pill and progestogen-only pill, taken regularly",
          "Copper IUD and hormonal IUS, lasting several years inside the womb",
          "Contraceptive implant, placed under the skin of the upper arm",
          "Contraceptive injection, given every few months",
          "Condoms, which also help protect against infections",
          "Permanent methods: female sterilisation and male vasectomy"
        ]
      },
      {
        "heading": "How we care for you",
        "paragraphs": [
          "We talk about effectiveness in plain terms. Long-acting methods like the implant, IUD, IUS, and injection are very reliable because they do not depend on remembering them each day. Pills work well when taken correctly, but their everyday effectiveness depends on using them as directed. Condoms add protection against infections but are less reliable on their own for preventing pregnancy.",
          "We also go through how each method might affect your periods, any common effects to expect, and which options may or may not suit a particular health condition. Your privacy is important to us, and what you share stays between you and your doctor."
        ]
      },
      {
        "heading": "When to reach out",
        "paragraphs": [
          "You are welcome to come whenever you want to start a method, switch to a different one, or stop a method to plan a pregnancy. It is also a good time to visit if you have missed pills, had a method fail, or have questions about emergency contraception.",
          "To book a private family planning consultation at Kairavi Women's Clinic in Kelambakkam, please call or message us on WhatsApp. We will help you find a method that fits your needs."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Which contraceptive method is best for me?",
        "answer": "There is no single best method, since the right choice depends on your health, your plans for children, how easy a method is for you to use, and your own preference. During counselling we explain the options and help you weigh them, but the decision is always yours."
      },
      {
        "question": "Are long-acting methods like the IUD or implant safe?",
        "answer": "For most people these methods are safe and very reliable, which is why they are widely recommended. Like all methods they can have some effects, and a few health conditions may make one option less suitable. We check what fits you before fitting any device."
      },
      {
        "question": "Will I be able to get pregnant after stopping contraception?",
        "answer": "Reversible methods such as pills, IUDs, IUS, implants, and condoms are meant to be stopped when you want to conceive, and fertility usually returns afterwards. With the injection it can sometimes take a few months longer. Sterilisation, however, is meant to be permanent."
      },
      {
        "question": "Is my visit kept private?",
        "answer": "Yes. Family planning is a personal matter, and your conversation with the doctor is confidential. You can ask anything without judgement, and we will respect whatever choice you make."
      }
    ],
    "sources": [
      {
        "title": "WHO: Family planning and contraception methods",
        "url": "https://www.who.int/news-room/fact-sheets/detail/family-planning-contraception"
      },
      {
        "title": "NHS: Which method of contraception suits me?",
        "url": "https://www.nhs.uk/conditions/contraception/which-method-suits-me/"
      },
      {
        "title": "CDC: About Contraception",
        "url": "https://www.cdc.gov/contraception/about/index.html"
      },
      {
        "title": "NHSRC India: Family Planning Programme Guidance (Antara, Chhaya, IUCD)",
        "url": "https://nhsrcindia.org/sites/default/files/2022-05/Family_Planning_Guidance_Booklet_for_CHO.pdf"
      }
    ],
    "image": {
      "src": "/images/articles/family-planning-and-contraceptive-counselling.jpg",
      "alt": "Young family with a newborn relaxing together on a bed, warm and neutral"
    }
  },
  {
    "slug": "menstrual-disorder-treatment",
    "name": "Menstrual Disorder Treatment",
    "metaTitle": "Menstrual Disorder Treatment",
    "metaDescription": "Help for heavy, irregular, painful, or missed periods. Learn the common causes, tests, and care at Kairavi Women's Clinic, Kelambakkam, Chennai.",
    "intro": "Periods that are heavy, irregular, painful, or missing can affect your daily life and worry you. These problems are common and often treatable. This page explains what may be happening and how we can help you find relief.",
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "A typical menstrual cycle comes roughly every 24 to 38 days, with bleeding that lasts up to about 8 days. Cycles can vary from person to person, and some change is normal.",
          "A menstrual disorder means your periods are causing trouble in one of several ways: bleeding that is very heavy, periods that come too often or too rarely, periods that are very painful, or periods that stop or do not start. Each pattern can have different causes and different care."
        ]
      },
      {
        "heading": "Types and signs",
        "paragraphs": [
          "It helps to know which pattern fits you, as this guides the tests and care. Many women have more than one of these at the same time."
        ],
        "bullets": [
          "Heavy periods: soaking through pads or tampons quickly, passing large clots, or bleeding that limits your day",
          "Irregular periods: cycles that are much shorter, longer, or unpredictable",
          "Painful periods: cramps that are severe or stop you doing normal activities",
          "Absent or missed periods: no period for 90 days or more when you are not pregnant, or periods that have not started by the expected age"
        ]
      },
      {
        "heading": "Causes and risk factors",
        "paragraphs": [
          "Period problems can come from hormone changes, conditions of the uterus or ovaries, or wider health issues. Pregnancy and breastfeeding are common reasons for missed periods and are usually checked first.",
          "Common causes include polycystic ovary syndrome, thyroid problems, fibroids, endometriosis, adenomyosis, and the natural changes around the start of periods or near menopause. Stress, weight changes, certain medicines, and bleeding disorders can also play a part.",
          "Having a risk factor does not mean you have a problem, and many women with period changes have no serious cause. Finding the reason is the first step to choosing care that works for you, so it is worth getting checked rather than guessing."
        ]
      },
      {
        "heading": "How it is diagnosed",
        "paragraphs": [
          "We start by talking about your cycle, your symptoms, and your health, followed by a gentle examination when needed. A pregnancy test is often done if periods have stopped.",
          "Tests may include blood tests to check for anaemia, thyroid function, and hormones, and an ultrasound scan to look at the uterus and ovaries. In some cases we may suggest a hysteroscopy, where a thin camera looks inside the uterus, or a small sample of the womb lining. We choose tests based on your pattern of symptoms."
        ]
      },
      {
        "heading": "Treatment and care at the clinic",
        "paragraphs": [
          "Treatment depends on the cause, your symptoms, and whether you hope to have children. Care often starts with simpler options and steps up if needed.",
          "Medical options can include non-hormonal medicines such as tranexamic acid or anti-inflammatory painkillers for heavy or painful periods, and hormonal options such as the combined pill, progestogen tablets, or a hormonal intrauterine system. When there is an underlying cause like fibroids or polyps, treating it may settle the bleeding. Surgical options are considered in selected cases. Dr. Santhalakshmi will explain the choices and help you decide.",
          "If your periods have left you low on iron, we may also treat anaemia so you feel less tired. The aim is to ease your symptoms, protect your health, and fit the plan around your needs, including any wish to have children in the future."
        ]
      },
      {
        "heading": "When to see a doctor",
        "paragraphs": [
          "Please book a visit if your periods are very heavy, last longer than 8 days, suddenly change, become very painful, or stop for more than 90 days when you are not pregnant. Bleeding after sex or after menopause should always be checked.",
          "You can reach Kairavi Women's Clinic, Kelambakkam, by phone or WhatsApp to book an appointment. Feeling very tired or breathless can be a sign of low iron from heavy periods and is worth mentioning."
        ]
      }
    ],
    "faqs": [
      {
        "question": "How heavy is too heavy for a period?",
        "answer": "Bleeding may be considered heavy if you soak through pads or tampons every hour or two, pass large clots, need double protection, or have to change products at night. If your periods limit your daily life, it is worth getting checked."
      },
      {
        "question": "Why are my periods irregular?",
        "answer": "Irregular periods can come from hormone changes, polycystic ovary syndrome, thyroid problems, stress, weight changes, or the natural shifts near the start of periods or menopause. A few tests can usually help find the reason."
      },
      {
        "question": "When should I worry about missing a period?",
        "answer": "First consider pregnancy if that is possible. If you are not pregnant and your period stops for 90 days or more, or your usual pattern changes a lot, it is a good idea to see a doctor for a check."
      },
      {
        "question": "Are painful periods normal?",
        "answer": "Mild cramps are common, but pain that is severe or stops you from your usual activities is not something you simply have to put up with. Conditions such as endometriosis can cause severe pain, and treatment options are available."
      }
    ],
    "sources": [
      {
        "title": "Mayo Clinic: Menstrual cycle, what's normal",
        "url": "https://www.mayoclinic.org/healthy-lifestyle/womens-health/in-depth/menstrual-cycle/art-20047186"
      },
      {
        "title": "NHS: Heavy periods",
        "url": "https://www.nhs.uk/conditions/heavy-periods/"
      },
      {
        "title": "Mayo Clinic: Heavy menstrual bleeding",
        "url": "https://www.mayoclinic.org/diseases-conditions/menorrhagia/symptoms-causes/syc-20352829"
      }
    ],
    "image": {
      "src": "/images/articles/menstrual-disorder-treatment.jpg",
      "alt": "Woman practising yoga at sunset by the sea, calm wellness and relaxation"
    }
  },
  {
    "slug": "pcos-and-hormonal-disorder-management",
    "name": "PCOS & Hormonal Disorder Management",
    "metaTitle": "PCOS & Hormonal Care",
    "metaDescription": "Understand PCOS symptoms, causes, tests and care options. Dr. Santhalakshmi S offers caring PCOS and hormone support in Kelambakkam, Chennai.",
    "intro": "Polycystic ovary syndrome (PCOS) is one of the most common hormonal conditions in women of reproductive age. It can affect periods, skin, weight and fertility, but with the right support many women manage it well. This page explains what PCOS is and how we can help.",
    "sections": [
      {
        "heading": "What PCOS is",
        "paragraphs": [
          "PCOS is a hormonal condition. In women with PCOS, the ovaries may not release an egg regularly, and the body may make higher levels of male-type hormones called androgens. Many women also have a problem called insulin resistance, where the body has to make extra insulin to keep blood sugar steady.",
          "The name can be confusing. The small fluid-filled sacs seen on an ovary scan are not harmful cysts. They are immature follicles. Not everyone with PCOS has them on a scan."
        ]
      },
      {
        "heading": "Signs and symptoms",
        "paragraphs": [
          "PCOS affects each woman differently, and symptoms can be mild or more noticeable. Common signs include:"
        ],
        "bullets": [
          "Irregular periods, very few periods, or no periods",
          "Difficulty getting pregnant because of irregular ovulation",
          "Extra hair growth on the face, chest or back (called hirsutism)",
          "Acne or oily skin",
          "Weight gain or trouble losing weight",
          "Thinning of the hair on the scalp"
        ]
      },
      {
        "heading": "Causes and risk factors",
        "paragraphs": [
          "The exact cause of PCOS is not fully known. It often runs in families, so genes may play a part. Higher insulin levels and a hormone imbalance are closely linked to the condition, and being above a healthy weight can make insulin levels higher.",
          "Over the long term, PCOS can raise the chance of type 2 diabetes and high cholesterol. This is why regular check-ups matter, even when periods feel settled."
        ]
      },
      {
        "heading": "How it is diagnosed",
        "paragraphs": [
          "There is no single test for PCOS. Dr. Santhalakshmi will ask about your periods and symptoms, examine you, and may suggest tests to build a clear picture and rule out other causes.",
          "Diagnosis usually considers a combination of irregular ovulation, signs of higher androgens (from an examination or blood tests), and the appearance of the ovaries on an ultrasound scan. Blood tests may also check hormone levels, blood sugar and cholesterol."
        ]
      },
      {
        "heading": "Treatment and care at the clinic",
        "paragraphs": [
          "There is no cure for PCOS, but symptoms can often be managed well, and care is tailored to your needs and goals, such as easing symptoms or planning a pregnancy.",
          "Care may include lifestyle steps, medicines, or both. Many women find that small, steady changes help."
        ],
        "bullets": [
          "Lifestyle: a balanced diet and regular activity can improve symptoms, and even a modest weight loss may help periods and insulin levels",
          "Medicines for periods and skin: hormonal options such as the combined pill may help regulate cycles and reduce extra hair or acne",
          "Insulin-related medicines: medicines that help the body respond to insulin are sometimes used",
          "Fertility support: when you are trying to conceive, treatments to help ovulation may be discussed"
        ]
      },
      {
        "heading": "When to see a doctor",
        "paragraphs": [
          "It is a good idea to see a doctor if your periods are irregular or have stopped, if you notice extra hair growth or persistent acne, or if you have been trying to conceive without success. Early support can help you feel more in control and lower long-term health risks.",
          "To book an appointment with Dr. Santhalakshmi, call or message the clinic on WhatsApp."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Can I still get pregnant if I have PCOS?",
        "answer": "Yes, many women with PCOS go on to have healthy pregnancies. Because ovulation can be irregular, it may take longer to conceive, and some women benefit from treatments that help with ovulation. Speak with your doctor about a plan that suits you."
      },
      {
        "question": "Does PCOS go away?",
        "answer": "PCOS is a long-term condition and there is no cure, but symptoms can often be managed well. Lifestyle steps and medicines can help with periods, skin and weight. Symptoms may also change over time, including around menopause."
      },
      {
        "question": "Will losing weight help my PCOS?",
        "answer": "For women who are above a healthy weight, even a modest weight loss may improve periods, insulin levels and some other symptoms. Diet and regular activity are usually the first steps, alongside any medicines your doctor advises."
      },
      {
        "question": "Is PCOS linked to diabetes?",
        "answer": "PCOS is linked with insulin resistance, which can raise the long-term chance of type 2 diabetes and high cholesterol. Regular check-ups, including blood sugar tests, help catch any changes early so they can be managed."
      }
    ],
    "sources": [
      {
        "title": "ACOG: Polycystic Ovary Syndrome (PCOS) FAQ",
        "url": "https://www.acog.org/womens-health/faqs/polycystic-ovary-syndrome-pcos"
      },
      {
        "title": "NHS: Polycystic ovary syndrome (PCOS)",
        "url": "https://www.nhs.uk/conditions/polycystic-ovary-syndrome-pcos/"
      },
      {
        "title": "Cleveland Clinic: Polycystic Ovary Syndrome (PCOS)",
        "url": "https://my.clevelandclinic.org/health/diseases/8316-polycystic-ovary-syndrome-pcos"
      }
    ],
    "image": {
      "src": "/images/articles/pcos-and-hormonal-disorder-management.jpg",
      "alt": "Group of women exercising with dumbbells in a bright studio, healthy active lifestyle"
    }
  },
  {
    "slug": "infertility-workup-and-treatment",
    "name": "Infertility Workup & Treatment",
    "metaTitle": "Infertility Workup & Treatment",
    "metaDescription": "A caring guide to fertility checks for both partners and treatment options at Kairavi Women's Clinic, Kelambakkam, Chennai. Book by phone or WhatsApp.",
    "intro": "Trying for a baby without success can feel lonely and stressful. You are not alone, and many couples find help. This page explains what infertility means, when to seek advice, what the checks involve for both partners, and the kinds of care that may follow.",
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Infertility is commonly described as not being able to conceive after about 12 months of regular unprotected sex, or after about 6 months if the woman is over 35. Age can affect fertility, which is why earlier checks are suggested for older couples.",
          "The cause can lie with the woman, the man, both partners, or sometimes no clear cause is found, which is called unexplained infertility. Because either or both partners can be involved, checks usually look at both of you together."
        ]
      },
      {
        "heading": "When to seek help",
        "paragraphs": [
          "It is reasonable to seek advice after about a year of trying if you are under 35, or after about 6 months if you are over 35. Speak to a doctor sooner if you already know of a reason that could affect fertility.",
          "Reasons to come in earlier include irregular or absent periods, very painful periods, a history of pelvic infection or surgery, undescended testicles or past groin surgery in the man, or any known reproductive health condition."
        ]
      },
      {
        "heading": "The workup for both partners",
        "paragraphs": [
          "We start with a friendly talk about your history, cycle, and general health, followed by a gentle examination when needed. Checking both partners at the same time saves time and gives a fuller picture.",
          "For the woman, tests often look at whether ovulation is happening, the hormones involved, and the shape of the uterus and tubes. For the man, a semen analysis checks the number, movement, and shape of the sperm.",
          "Not everyone needs every test. We choose the checks that make sense for your history and explain why each one matters, so you understand what is being looked at and what the results may mean for your care."
        ],
        "bullets": [
          "Blood tests to check hormones and confirm ovulation",
          "Ultrasound scan of the uterus and ovaries",
          "A test to check whether the fallopian tubes are open",
          "Semen analysis for the male partner",
          "Other tests as guided by your history"
        ]
      },
      {
        "heading": "Treatment options at a general level",
        "paragraphs": [
          "Care is shaped by what the tests show, your ages, and how long you have been trying. Sometimes simple steps such as timing, healthy weight, and stopping smoking can help.",
          "Medical options can include tablets or injections to help with ovulation. Surgery may help in some cases, for example to treat endometriosis or address a blocked tube. Assisted conception, such as intrauterine insemination (IUI) or in vitro fertilisation (IVF), may be discussed when suitable. We will explain each option honestly. No treatment can promise a pregnancy, and Dr. Santhalakshmi will give you a realistic picture for your situation.",
          "Some couples find that a treatable issue, once addressed, allows pregnancy to happen naturally, while others may be referred on for specialist fertility care. We will guide you through the options at a pace that feels right and keep you informed at each step."
        ]
      },
      {
        "heading": "Emotional support",
        "paragraphs": [
          "Fertility worries can affect your mood, your relationship, and your sense of hope. These feelings are normal and valid. We aim to listen without judgement and to give you clear, honest information at each step.",
          "Take the time you need to make decisions, and lean on your partner, family, or a counsellor if that helps. We are here to support you whatever path you choose."
        ]
      },
      {
        "heading": "When to reach out",
        "paragraphs": [
          "If you have been trying for the time frames above, or you have any reason to think there may be a problem, please book a visit. Coming in together, as a couple, often works best.",
          "You can contact Kairavi Women's Clinic, Kelambakkam, by phone or WhatsApp to arrange an appointment. Starting the conversation early gives you more options."
        ]
      }
    ],
    "faqs": [
      {
        "question": "How long should we try before seeing a doctor?",
        "answer": "If you are under 35, it is usually reasonable to seek advice after about 12 months of regular unprotected sex. If you are over 35, see a doctor after about 6 months, or sooner if you know of a reason that could affect fertility."
      },
      {
        "question": "Is infertility always a problem with the woman?",
        "answer": "No. The cause can be with the woman, the man, both partners, or sometimes no clear cause is found. This is why checks usually involve both partners, including a semen analysis for the man."
      },
      {
        "question": "What does a fertility workup involve?",
        "answer": "It usually starts with a talk about your history and an examination, then tests. These often include blood tests and an ultrasound for the woman, a check of whether the tubes are open, and a semen analysis for the man."
      },
      {
        "question": "Does treatment guarantee a pregnancy?",
        "answer": "No treatment can promise a pregnancy. Success depends on many factors, including age and the cause. Your doctor will explain the options and give you a realistic picture for your own situation."
      }
    ],
    "sources": [
      {
        "title": "ASRM: Defining Infertility",
        "url": "https://www.reproductivefacts.org/news-and-publications/fact-sheets-and-infographics/defining-infertility/"
      },
      {
        "title": "ACOG: Treating Infertility",
        "url": "https://www.acog.org/womens-health/faqs/treating-infertility"
      },
      {
        "title": "NHS: Infertility",
        "url": "https://www.nhs.uk/conditions/infertility/"
      }
    ],
    "image": {
      "src": "/images/articles/infertility-workup-and-treatment.jpg",
      "alt": "Couple holding hands across a table in a supportive, hopeful moment"
    }
  },
  {
    "slug": "fibroid-management",
    "name": "Fibroid Management",
    "metaTitle": "Fibroid Management",
    "metaDescription": "Learn about uterine fibroids, their symptoms, scans and care choices. Dr. Santhalakshmi S provides caring fibroid management in Kelambakkam, Chennai.",
    "intro": "Uterine fibroids are growths that develop in or around the womb. They are very common and are not cancer. Many fibroids cause no problems at all, while others may need care if they lead to symptoms. This page explains what fibroids are and the options available.",
    "sections": [
      {
        "heading": "What fibroids are",
        "paragraphs": [
          "Fibroids are growths made of muscle and other tissue that form in or on the wall of the uterus (womb). They can be as small as a seed or grow much larger, and a woman may have one fibroid or several.",
          "Fibroids are non-cancerous. They mainly affect women who have not yet reached menopause, and they often shrink after menopause."
        ]
      },
      {
        "heading": "Signs and symptoms",
        "paragraphs": [
          "Many women with fibroids have no symptoms at all and only find out about them during a scan for another reason. When symptoms do occur, they depend on the size, number and position of the fibroids. They may include:"
        ],
        "bullets": [
          "Heavy or painful periods",
          "Stomach (abdominal) or lower back pain",
          "A frequent need to pass urine",
          "Constipation or other bowel changes",
          "Discomfort or pain during sex",
          "In some cases, difficulty getting pregnant"
        ]
      },
      {
        "heading": "Causes and risk factors",
        "paragraphs": [
          "The exact cause of fibroids is not known, but they are linked to the hormones oestrogen and progesterone, which is why they tend to grow during the reproductive years.",
          "Some factors can make fibroids more likely. These include not having reached menopause, a family history of fibroids, being above a healthy weight, and being of African or Asian background. Having a fibroid does not mean you have done anything wrong."
        ]
      },
      {
        "heading": "How it is diagnosed",
        "paragraphs": [
          "Fibroids are often found during a pelvic examination. To confirm the diagnosis, Dr. Santhalakshmi will usually arrange an ultrasound scan, which shows the number, size and position of any fibroids.",
          "If more detail is needed, other tests such as an MRI scan or a small camera test to look inside the womb may be suggested. Blood tests may be used to check for anaemia if periods have been heavy."
        ]
      },
      {
        "heading": "Treatment and care at the clinic",
        "paragraphs": [
          "Fibroids that are small and not causing symptoms often need no treatment at all. In these cases, we may simply keep an eye on them with regular check-ups to make sure they are not growing or causing problems.",
          "When fibroids do cause symptoms, care is matched to your symptoms, your wish to have children in the future, and your preferences. Options may include:"
        ],
        "bullets": [
          "Medicines for symptoms: pain relief and medicines to reduce heavy bleeding",
          "Hormonal medicines: options that can ease bleeding or, in some cases, help shrink fibroids before surgery",
          "Surgery to remove fibroids (myomectomy): this can keep the womb in place",
          "Other procedures: such as blocking the blood supply to a fibroid (uterine artery embolisation)",
          "Removal of the womb (hysterectomy): considered in some cases when the family is complete and other options have not helped"
        ]
      },
      {
        "heading": "When to see a doctor",
        "paragraphs": [
          "See a doctor if you have heavy or painful periods, ongoing tummy or back pain, a frequent need to pass urine, or pain during sex. These symptoms have many possible causes, and a check-up can find out what is going on.",
          "To arrange a visit with Dr. Santhalakshmi, call or message the clinic on WhatsApp."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Are uterine fibroids cancer?",
        "answer": "No, fibroids are non-cancerous growths and very rarely turn into cancer. They are common in women of reproductive age. Even so, it is sensible to have any new or changing symptoms checked by a doctor."
      },
      {
        "question": "Do all fibroids need to be treated?",
        "answer": "No. Many fibroids cause no symptoms and need no treatment, just regular monitoring. Treatment is usually considered only when fibroids cause symptoms such as heavy bleeding or pain, or affect daily life or fertility."
      },
      {
        "question": "Can fibroids affect my chances of getting pregnant?",
        "answer": "Most fibroids do not cause fertility problems, but some, depending on their size and position, can make it harder to conceive or carry a pregnancy. If you are planning a pregnancy, your doctor can discuss whether any treatment is helpful."
      },
      {
        "question": "Will fibroids go away on their own?",
        "answer": "Fibroids often shrink after menopause when hormone levels fall, and symptoms may ease. Before menopause they usually do not disappear on their own, but small symptom-free fibroids may simply be watched over time."
      }
    ],
    "sources": [
      {
        "title": "NHS: Fibroids",
        "url": "https://www.nhs.uk/conditions/fibroids/"
      },
      {
        "title": "Cleveland Clinic: Uterine Fibroids",
        "url": "https://my.clevelandclinic.org/health/diseases/9130-uterine-fibroids"
      },
      {
        "title": "AAFP: Uterine Fibroids, Diagnosis and Treatment",
        "url": "https://www.aafp.org/pubs/afp/issues/2017/0115/p100.html"
      }
    ],
    "image": {
      "src": "/images/articles/fibroid-management.jpg",
      "alt": "Female doctor reassuring a woman patient during a warm clinical consultation"
    }
  },
  {
    "slug": "endometriosis-management",
    "name": "Endometriosis Management",
    "metaTitle": "Endometriosis Management",
    "metaDescription": "Understand endometriosis symptoms, causes, tests and care options. Dr. Santhalakshmi S offers caring endometriosis support in Kelambakkam, Chennai.",
    "intro": "Endometriosis is a condition where tissue similar to the lining of the womb grows in other parts of the body. It can cause pain and heavy periods, and it sometimes affects fertility. With the right support, many women find ways to manage their symptoms. This page explains what endometriosis is and how we can help.",
    "sections": [
      {
        "heading": "What endometriosis is",
        "paragraphs": [
          "In endometriosis, tissue similar to the lining of the womb grows in places outside the womb, such as the ovaries, the fallopian tubes and other areas in the pelvis. Each month this tissue responds to hormones in a similar way to the womb lining, but it has no easy way to leave the body.",
          "This can lead to inflammation, pain and the build-up of scar tissue. Endometriosis is a long-term condition, and how much it affects each woman can vary widely."
        ]
      },
      {
        "heading": "Signs and symptoms",
        "paragraphs": [
          "Symptoms differ from person to person. Some women have severe symptoms, while others have few. Common signs include:"
        ],
        "bullets": [
          "Period pain that is severe enough to stop normal activities",
          "Pain in the lower tummy or back, sometimes between periods",
          "Pain during or after sex",
          "Pain when passing urine or having a bowel movement, often around period time",
          "Heavy periods",
          "Tiredness, low mood, and difficulty getting pregnant"
        ]
      },
      {
        "heading": "Causes and risk factors",
        "paragraphs": [
          "The cause of endometriosis is not fully understood. Several ideas are being studied, including the backward flow of period blood into the pelvis, the way cells develop, and how the immune system and hormones behave.",
          "Endometriosis can run in families, so genes may play a part. Because the cause is not clear, there is no known way to prevent it, and having it is not anyone's fault."
        ]
      },
      {
        "heading": "How it is diagnosed",
        "paragraphs": [
          "Dr. Santhalakshmi will start by listening to your symptoms and examining you. Symptoms and an examination can often point to endometriosis, which may allow treatment to begin without delay.",
          "An ultrasound scan is often used, and an MRI scan may be suggested in some cases to look at deeper areas. A keyhole operation called a laparoscopy, where a small camera is passed into the tummy, can confirm endometriosis and, at the same time, treat some of it. Your doctor will explain which steps are right for you."
        ]
      },
      {
        "heading": "Treatment and care at the clinic",
        "paragraphs": [
          "There is no cure for endometriosis, but treatment can often reduce symptoms and improve quality of life. Care depends on your symptoms, whether you are hoping to become pregnant, and your preferences.",
          "Options may include:"
        ],
        "bullets": [
          "Pain relief: medicines such as anti-inflammatory painkillers to ease period pain",
          "Hormonal treatments: options such as the contraceptive pill or other hormone medicines to reduce pain and bleeding",
          "Surgery: keyhole surgery to remove or treat patches of endometriosis",
          "Fertility support: tailored advice and treatment if you are trying to conceive"
        ]
      },
      {
        "heading": "When to see a doctor",
        "paragraphs": [
          "Please see a doctor if period pain is stopping you from doing everyday things, if you have ongoing pelvic pain, pain during sex, or trouble getting pregnant. Period pain is common, but pain this severe is worth checking.",
          "To book a visit with Dr. Santhalakshmi, call or message the clinic on WhatsApp."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Is severe period pain always normal?",
        "answer": "Some period discomfort is common, but pain that stops you from doing your normal activities is not something you simply have to put up with. It can be a sign of endometriosis or another condition. A doctor can help find the cause and discuss ways to ease it."
      },
      {
        "question": "Can endometriosis be cured?",
        "answer": "There is no cure for endometriosis at present, but treatment can often reduce pain and other symptoms. Hormonal medicines, pain relief and surgery are among the options. Care is planned around your symptoms and your goals, such as fertility."
      },
      {
        "question": "Does endometriosis cause infertility?",
        "answer": "Endometriosis can make it harder for some women to get pregnant, but many women with the condition do conceive, with or without treatment. If you are planning a pregnancy, your doctor can discuss options that may help."
      },
      {
        "question": "How is endometriosis diagnosed?",
        "answer": "Diagnosis often starts with your symptoms and an examination, sometimes supported by an ultrasound or MRI scan. A keyhole operation called a laparoscopy can confirm the condition and treat some of it at the same time. Your doctor will advise which steps suit you."
      }
    ],
    "sources": [
      {
        "title": "NHS: Endometriosis",
        "url": "https://www.nhs.uk/conditions/endometriosis/"
      },
      {
        "title": "ACOG: Endometriosis FAQ",
        "url": "https://www.acog.org/womens-health/faqs/endometriosis"
      },
      {
        "title": "Cleveland Clinic: Endometriosis",
        "url": "https://my.clevelandclinic.org/health/diseases/10857-endometriosis"
      }
    ],
    "image": {
      "src": "/images/articles/endometriosis-management.jpg",
      "alt": "Calm young woman in a quiet portrait, soft supportive mood"
    }
  },
  {
    "slug": "adenomyosis-management",
    "name": "Adenomyosis Management",
    "metaTitle": "Adenomyosis Management",
    "metaDescription": "Learn about adenomyosis symptoms, causes, scans and care choices. Dr. Santhalakshmi S provides caring adenomyosis support in Kelambakkam, Chennai.",
    "intro": "Adenomyosis is a condition where tissue similar to the lining of the womb grows into the muscle wall of the uterus. It can cause heavy and painful periods, though some women have no symptoms at all. With the right care, symptoms can often be managed. This page explains what adenomyosis is and the options available.",
    "sections": [
      {
        "heading": "What adenomyosis is",
        "paragraphs": [
          "In adenomyosis, tissue that is similar to the lining of the womb grows into the muscle wall of the uterus. Each month this tissue responds to hormones, which can make the wall of the womb thicker and the uterus larger.",
          "Adenomyosis is not cancer. It is most often seen in women in their 40s and 50s, and symptoms usually ease after menopause."
        ]
      },
      {
        "heading": "Signs and symptoms",
        "paragraphs": [
          "Symptoms vary from woman to woman, and about one in three women with adenomyosis have no symptoms at all. When symptoms do occur, they may include:"
        ],
        "bullets": [
          "Heavy or prolonged periods",
          "Severe period cramps",
          "Ongoing pelvic pain",
          "Pain during sex",
          "A feeling of fullness or pressure in the lower tummy"
        ]
      },
      {
        "heading": "Causes and risk factors",
        "paragraphs": [
          "The exact cause of adenomyosis is not known. Researchers think that hormones, genes, inflammation, or previous changes to the womb may play a part.",
          "It is more common in women who are in their 40s or 50s, who have had children, or who have had previous surgery on the womb such as a fibroid removal or a D and C. It is also linked with endometriosis."
        ]
      },
      {
        "heading": "How it is diagnosed",
        "paragraphs": [
          "Dr. Santhalakshmi will ask about your periods and symptoms and examine you. During the examination, the uterus may feel larger or tender than usual.",
          "An ultrasound scan, usually done through the vagina, is often used to look at the wall of the womb. An MRI scan can give more detail and help tell adenomyosis apart from other conditions such as fibroids. A firm diagnosis is sometimes only confirmed after the womb is examined following surgery."
        ]
      },
      {
        "heading": "Treatment and care at the clinic",
        "paragraphs": [
          "If symptoms are mild or absent, treatment may not be needed, and we may simply keep an eye on things. When symptoms affect daily life, care is matched to your symptoms, your wish to have children in the future, and your preferences.",
          "Options may include:"
        ],
        "bullets": [
          "Simple measures: a warm bath or heat pad on the lower tummy may ease cramps",
          "Pain relief: anti-inflammatory painkillers can help with cramps",
          "Hormonal treatments: options such as the pill, hormone-releasing coils, or other medicines to reduce heavy bleeding and pain",
          "Medicines to reduce bleeding: such as tranexamic acid for heavy periods",
          "Surgery: removal of the womb (hysterectomy) may be considered when the family is complete and other options have not helped"
        ]
      },
      {
        "heading": "When to see a doctor",
        "paragraphs": [
          "See a doctor if you have heavy or very painful periods, ongoing pelvic pain, or pain during sex. Heavy bleeding over time can also lead to low iron levels (anaemia), which can leave you tired and short of breath, so it is worth getting checked.",
          "To book an appointment with Dr. Santhalakshmi, call or message the clinic on WhatsApp."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Is adenomyosis the same as endometriosis?",
        "answer": "They are related but not the same. In adenomyosis the womb-like tissue grows into the muscle wall of the uterus, while in endometriosis it grows in other areas outside the womb. Some women have both conditions at the same time."
      },
      {
        "question": "Does adenomyosis need treatment if it is not causing symptoms?",
        "answer": "Not always. When there are no symptoms or they are mild, treatment may not be needed and the condition can simply be monitored. Treatment is usually considered when heavy bleeding or pain affects daily life."
      },
      {
        "question": "Will adenomyosis go away?",
        "answer": "Adenomyosis is linked to hormones, and symptoms usually ease after menopause as hormone levels fall. Before then, treatments can help manage heavy bleeding and pain. Your doctor can discuss which options suit you."
      },
      {
        "question": "Can I get pregnant with adenomyosis?",
        "answer": "Many women with adenomyosis can become pregnant. The condition may affect fertility in some cases, so if you are planning a pregnancy it helps to discuss this with your doctor, who can advise on suitable care."
      }
    ],
    "sources": [
      {
        "title": "Mayo Clinic: Adenomyosis, Symptoms and causes",
        "url": "https://www.mayoclinic.org/diseases-conditions/adenomyosis/symptoms-causes/syc-20369138"
      },
      {
        "title": "Mayo Clinic: Adenomyosis, Diagnosis and treatment",
        "url": "https://www.mayoclinic.org/diseases-conditions/adenomyosis/diagnosis-treatment/drc-20369143"
      },
      {
        "title": "Cleveland Clinic: Adenomyosis",
        "url": "https://my.clevelandclinic.org/health/diseases/14167-adenomyosis"
      }
    ],
    "image": {
      "src": "/images/articles/adenomyosis-management.jpg",
      "alt": "Composed woman smiling in a professional, reassuring portrait"
    }
  },
  {
    "slug": "ovarian-cyst-management",
    "name": "Ovarian Cyst Management",
    "metaTitle": "Ovarian Cyst Management",
    "metaDescription": "Understand ovarian cysts: common signs, how they are diagnosed with ultrasound, and care options at Kairavi Women's Clinic in Kelambakkam, Chennai.",
    "intro": "An ovarian cyst is a fluid-filled sac that forms in or on an ovary. Cysts are very common, most are not cancer, and many go away on their own. This page explains what they are and how we help you understand and manage them.",
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Ovaries are two small organs on each side of the uterus that store eggs and make hormones. A cyst is a sac filled with fluid that can develop on an ovary. They are common during the years when you have periods and can also happen after menopause.",
          "The most common type is a functional cyst. These often form as part of the normal monthly cycle and usually settle on their own within a few weeks or a couple of cycles. Other types include dermoid cysts, cystadenomas, and endometriomas, which may need closer follow up.",
          "Finding out you have a cyst can feel worrying, but most cysts are harmless and simple to monitor. Our aim is to give you clear information, check the cyst safely, and only suggest treatment when it is truly needed."
        ]
      },
      {
        "heading": "Signs and symptoms",
        "paragraphs": [
          "Many ovarian cysts cause no symptoms at all and are found by chance during a scan done for another reason. When symptoms do happen, they can be mild or come and go."
        ],
        "bullets": [
          "Pelvic pain or a dull ache on one side",
          "Bloating or a feeling of fullness in the lower tummy",
          "Pain during sex",
          "Changes in your periods, such as heavier or irregular bleeding",
          "Needing to pass urine more often"
        ]
      },
      {
        "heading": "Causes and risk factors",
        "paragraphs": [
          "Most cysts form as a normal part of how the ovaries work each month. Hormonal changes, ovulation, and conditions such as polycystic ovary syndrome or endometriosis can make cysts more likely.",
          "Pregnancy can sometimes cause a cyst that stays for a while. Cysts can occur at any age, and the chance of certain types changes around and after menopause, which is why follow up matters."
        ]
      },
      {
        "heading": "How it is diagnosed",
        "paragraphs": [
          "The main test is an ultrasound scan, often done through the vagina, which gives a clear picture of the size and type of cyst. A scan is simple and does not hurt.",
          "Depending on your age and the look of the cyst, we may suggest a blood test such as CA 125. This can be raised by several non-cancer conditions, so it is read together with the scan and your symptoms, not on its own. We will explain what your results mean."
        ]
      },
      {
        "heading": "Treatment and care at the clinic",
        "paragraphs": [
          "Care depends on the type and size of the cyst, your age, and your symptoms. For many small or functional cysts, the best approach is watchful waiting, where we repeat a scan after some weeks to check that the cyst has settled.",
          "If a cyst is large, causing symptoms, or looks unusual, we may discuss surgery to remove the cyst, often using keyhole (laparoscopic) techniques where suitable. Hormonal options may be considered in some situations. Dr. Santhalakshmi will talk through what fits your needs and aims to protect your fertility where possible.",
          "After menopause, cysts are followed a little more closely with repeat scans and sometimes blood tests, because the small chance of a problem changes with age. We will explain the plan clearly and answer any questions so you know what to expect at each step."
        ]
      },
      {
        "heading": "When to see a doctor",
        "paragraphs": [
          "Please book a visit if you have ongoing pelvic pain, bloating, or changes in your periods. Sudden, severe pain in the lower tummy, especially with nausea, vomiting, fever, or dizziness, can be a sign of a twisted or burst cyst and needs urgent care straight away.",
          "You can book an appointment at Kairavi Women's Clinic, Kelambakkam, by phone or WhatsApp. Getting checked early helps us guide you with the right care."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Do ovarian cysts go away on their own?",
        "answer": "Yes, many do. Functional cysts, the most common kind, often clear up by themselves within a few weeks or one to two menstrual cycles. We may repeat a scan to confirm the cyst has settled."
      },
      {
        "question": "Are ovarian cysts cancer?",
        "answer": "Most ovarian cysts are not cancer, especially in younger women. The look on ultrasound, your age, and sometimes a blood test help us judge the small chance of a problem and decide on follow up."
      },
      {
        "question": "Can an ovarian cyst affect my chances of getting pregnant?",
        "answer": "Most simple cysts do not affect fertility. Some types, such as endometriomas or cysts linked to polycystic ovary syndrome, can be related to fertility concerns, so it is worth discussing with your doctor."
      },
      {
        "question": "When is surgery needed for an ovarian cyst?",
        "answer": "Surgery may be suggested if a cyst is large, keeps causing symptoms, does not go away, or looks unusual on a scan. Many cysts can be removed using keyhole surgery, which often means a quicker recovery."
      }
    ],
    "sources": [
      {
        "title": "ACOG: Ovarian Cysts",
        "url": "https://www.acog.org/womens-health/faqs/ovarian-cysts"
      },
      {
        "title": "NHS: Ovarian cyst",
        "url": "https://www.nhs.uk/conditions/ovarian-cyst/"
      },
      {
        "title": "Cleveland Clinic: Ovarian Cysts",
        "url": "https://my.clevelandclinic.org/health/diseases/9133-ovarian-cysts"
      }
    ],
    "image": {
      "src": "/images/articles/ovarian-cyst-management.jpg",
      "alt": "Clinician pointing at a medical imaging scan on a monitor during a consultation"
    }
  }
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
export const ARTICLE_SLUGS: string[] = ARTICLES.map((a) => a.slug);
