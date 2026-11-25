/**
 * Every word on the page lives here, in page order, so copy can be edited
 * without touching layout code.
 *
 * Section order and wording follow "Landing page - DP Mitran Global"
 * (the instructions PDF). Extra supporting text is taken from MiTran Global's
 * own published pages (mitranglobal.com, the Positivity Hub page and the
 * free-training page); nothing here is new claims.
 */

export const site = {
  name: "Positivity Hub",
  fullName: "MiTran Global Positivity Hub",
  by: "MiTran Global",
  /** Checkout link used by every Register / Enrol button. */
  registerUrl: "https://hub.mitranglobal.com/web/checkout/6ace0ed5f506917ea09e28b5?purchaseNow=true&couponcode=MGBRIGHTFRI",
  /**
   * When true, Register / Enrol buttons and the VSL first open the short
   * sign-up popup (details go to ClarityConvert), then continue to checkout or
   * play the video. Set to false to send visitors straight to checkout and let
   * the video play without a popup.
   */
  leadGate: true,
  price: 1999,
  was: 4999,
  /** The VSL, taken from the Positivity Hub site. */
  vsl: {
    src: "https://res.cloudinary.com/twteccae/video/upload/PHVSL_-_v1_hwt5ut.mp4",
    poster: "https://res.cloudinary.com/twteccae/video/upload/so_3,w_1600,q_auto/PHVSL_-_v1_hwt5ut.jpg",
    title: "Vidyashankar Guru introduces Positivity Hub",
    cta: "Watch the introduction",
  },
};

export const formatINR = (n: number) => `₹${n.toLocaleString("en-IN")}`;
export const saving = site.was - site.price;

export const nav = [
  { label: "Programme", href: "#programme" },
  { label: "Sessions", href: "#sessions" },
  { label: "What’s included", href: "#included" },
  { label: "The coach", href: "#coach" },
  { label: "FAQ", href: "#faq" },
];

/* ─────────────────────────── 1. Hero ─────────────────────────── */
export const hero = {
  audience: "For parents of children aged 11–17",
  headline: "Is Your Teenager Always on Their Phone, Struggling to Focus on Studies or Getting",
  highlight: "Stressed About Exams?",
  sub: "Help Them Build Focus, Manage Exam Pressure and Navigate Teenage Life With Confidence.",
  intro: {
    before: "Introducing ",
    name: "MiTran Global’s Positivity Hub",
    after: " – a personalised, one-to-one guided programme that helps teenagers build a positive mindset, better learning habits and essential life skills.",
  },
  image: { src: "/images/outcome-3.webp", alt: "A calm, smiling student writing his exam paper in a classroom" },
  benefitsTitle: "A Personalised, One-to-One Programme",
  benefits: [
    "Build confidence and a positive mindset",
    "Manage exam stress and stay calm",
    "Improve focus and study habits",
    "Handle emotions and everyday challenges",
  ],
  highlightsTitle: "Programme Highlights",
  highlights: [
    { icon: "people", label: "One-to-One Guidance" },
    { icon: "calendar", label: "3 Personalised Sessions" },
    { icon: "laptop", label: "Live & Interactive (Online)" },
    { icon: "book", label: "3 Focused Courses" },
  ] as const,
  cta: "Register your child now",
  trustTitle: "Trusted by Parents and Students",
  stats: [
    { value: "10K+", label: "Teenagers Guided" },
    { value: "4.9★", label: "Parent & Student Feedback" },
    { value: "95%", label: "Report Positive Change" },
  ],
};

/* ─────────────────────────── 2. The challenge ─────────────────────────── */
export const challenge = {
  eyebrow: "The challenge",
  title: "Does This Sound Like Your Child?",
  lead: "These behaviours don’t mean something is wrong with your child. They may be signs that your child needs practical tools to handle pressure, manage emotions and study more independently.",
  signs: [
    "Always distracted by phones and social media?",
    "Finds it difficult to focus on studies?",
    "Gets anxious or stressed before exams?",
    "Struggles with confidence and comparison?",
    "Finds it difficult to manage emotions?",
    "Gets influenced by peer pressure?",
  ],
  image: { src: "/images/familiar-2.webp", alt: "A teenager lying in bed late at night, face lit by a phone screen" },
  quotesTitle: "Sound familiar?",
  quotes: [
    { title: "The reminder loop", text: "I remind, she shouts, I feel terrible about it but it starts all over again." },
    { title: "The phone and the late night", text: "She is awake until 2 am, then asleep through the morning, and gets angry when I try to cut down her screentime." },
    { title: "Going blank in the exam", text: "At home, he knew everything. But at the exam, he forgot everything due to a fear he never told us about." },
    { title: "“Everyone else is better than me.”", text: "He often compares himself with classmates and doesn’t even give anything a try." },
  ],
  closing: "Your teenager doesn’t just need more reminders. They need the right guidance and tools to navigate these challenges.",
  cta: "Help my teen take the first step",
};

/* ─────────────────────────── 3. The solution ─────────────────────────── */
export const solution = {
  eyebrow: "The solution",
  title: "Help Your Teen Build Skills That Go Beyond Academics.",
  lead: "A personalised growth journey combining one-to-one coaching and three practical learning programmes.",
  parts: [
    { title: "Personalised Coaching", body: "Individual guidance to understand your teenager’s challenges, strengths and areas for growth." },
    { title: "Positive Mind Mastery", body: "Build confidence, positive thinking and emotional awareness." },
    { title: "Accelerated Learning Methodologies", body: "Improve focus, memory and effective study habits." },
    { title: "I Love Exams", body: "Develop better revision strategies, time management and exam confidence." },
  ],
  cta: "Explore the Positivity Hub programme",
};

/* ─────────────────────────── 4. Student experiences ─────────────────────────── */
export const experiences = {
  eyebrow: "Student experiences",
  title: "Real Students. Real Experiences. Real Growth.",
  lead: "Hear directly from students and parents who have experienced MiTran Global’s programmes.",
  videoLabel: "Featured introduction · Vidyashankar Guru on Positivity Hub",
  studentsTitle: "Hear From Our Students",
  /**
   * Student testimonial videos, played in the popup player.
   * `src` (+ `poster`): the video on Cloudinary, folder "Student Testimonials",
   *   delivered as a 720p H.264 copy so it plays in every browser.
   * `driveId`: the Google Drive copy, only used as a fallback if `src` is
   *   left empty.
   */
  students: [
    {
      name: "Anshika Kumar",
      grade: "9th Grade",
      caption: "Gained clarity on her weak areas and the confidence to improve them.",
      driveId: "1hIXffXvh2pY1gl70UYlf28TP7wUVY3Eo",
      src: "https://res.cloudinary.com/twteccae/video/upload/c_limit,w_1280,vc_h264,q_auto/v1795588511/anshika-kumar.mp4",
      poster: "https://res.cloudinary.com/twteccae/video/upload/c_limit,so_3,w_800/q_auto/v1795588511/anshika-kumar.jpg",
    },
    {
      name: "Satvik",
      grade: "7th Grade",
      caption: "Mastered time management and the confidence to handle exam pressure.",
      driveId: "10nAMQwABs6OLEhLBKUxUgqb7ji9c_ETd",
      src: "https://res.cloudinary.com/twteccae/video/upload/c_limit,w_1280,vc_h264,q_auto/v1795590199/satvik.mp4",
      poster: "https://res.cloudinary.com/twteccae/video/upload/c_limit,so_3,w_800/q_auto/v1795590199/satvik.jpg",
    },
    {
      name: "Senthilvel Vinayak",
      grade: "10th Grade",
      caption: "Developed better study habits and the confidence to stay consistent.",
      driveId: "1RprF7p6v4P40IG7GKaUV2rsqV09KZgi5",
      src: "https://res.cloudinary.com/twteccae/video/upload/c_limit,w_1280,vc_h264,q_auto/v1795590216/senthilvel-vinayak.mp4",
      poster: "https://res.cloudinary.com/twteccae/video/upload/c_limit,so_3,w_800/q_auto/v1795590216/senthilvel-vinayak.jpg",
    },
  ],
  moreTitle: "More student stories",
  more: [
    { name: "Amogh Chivukula", grade: "8th Grade", caption: "Built stronger concepts and the confidence to tackle challenging questions.", driveId: "129JGPWicsYnQtDpwBXzx4d2colFpnN8u", src: "https://res.cloudinary.com/twteccae/video/upload/c_limit,w_1280,vc_h264,q_auto/v1795590234/amogh-chivukula.mp4",
      poster: "https://res.cloudinary.com/twteccae/video/upload/c_limit,so_3,w_800/q_auto/v1795590234/amogh-chivukula.jpg" },
    { name: "Tharunikaa Srinath", grade: "7th Grade", caption: "Gained a clear study strategy and the confidence to walk into exams prepared.", driveId: "1bUy5QALDCsyimWUlRLNhyI9PBskAKJlC", src: "https://res.cloudinary.com/twteccae/video/upload/c_limit,w_1280,vc_h264,q_auto/v1795590249/tharunikaa-srinath.mp4",
      poster: "https://res.cloudinary.com/twteccae/video/upload/c_limit,so_3,w_800/q_auto/v1795590249/tharunikaa-srinath.jpg" },
    { name: "Likhith Bhardwaj", grade: "7th Grade", caption: "", driveId: "12Gm1iosRzXLCiW6AN8-oDmj6vJzKKwDk", src: "https://res.cloudinary.com/twteccae/video/upload/c_limit,w_1280,vc_h264,q_auto/v1795588539/likhith-bhardwaj.mp4",
      poster: "https://res.cloudinary.com/twteccae/video/upload/c_limit,so_3,w_800/q_auto/v1795588539/likhith-bhardwaj.jpg" },
    { name: "Karanam Pramod", grade: "", caption: "", driveId: "10DWjGnMLhJ1mg22O69KNDJhQimg297wB", src: "https://res.cloudinary.com/twteccae/video/upload/c_limit,w_1280,vc_h264,q_auto/v1795590265/karanam-pramod.mp4",
      poster: "https://res.cloudinary.com/twteccae/video/upload/c_limit,so_3,w_800/q_auto/v1795590265/karanam-pramod.jpg" },
    { name: "Vibha Nair", grade: "", caption: "", driveId: "1uN6rvcvKioYZgrrVSWwrWCkWGidpziI9", src: "https://res.cloudinary.com/twteccae/video/upload/c_limit,w_1280,vc_h264,q_auto/v1795588549/vibha-nair.mp4",
      poster: "https://res.cloudinary.com/twteccae/video/upload/c_limit,so_3,w_800/q_auto/v1795588549/vibha-nair.jpg" },
  ],
  cta: "Start your teen’s growth journey",
};

/* ─────────────────────────── 5. Personalised coaching ─────────────────────────── */
export const coaching = {
  eyebrow: "Personalised coaching",
  title: "Your Child Is Unique. Their Growth Journey Should Be Too.",
  lead: "Three individual sessions designed around your teenager’s needs, guided by a trained and certified Transformation Coach.",
  sessions: [
    { label: "Session 1", who: "Parent + Child", body: "Understand your teenager’s challenges and concerns." },
    { label: "Session 2", who: "Parent + Child", body: "Explore observations and identify areas for growth." },
    { label: "Session 3", who: "Child Only", body: "Give your teenager a dedicated space for personal guidance." },
  ],
  meta: "40 minutes per session | Online",
  report: {
    title: "Plus: Personalised Well-being Report",
    body: "Understand your teenager’s strengths and areas for development.",
  },
  image: { src: "/images/outcome-4.webp", alt: "A teenage girl working happily at her desk while her father looks on" },
  cta: "Get personalised guidance for your teen",
};

/* ─────────────────────────── 6. What's included ─────────────────────────── */
export type IncludedItem = { title: string; body?: string; bonus?: boolean; courses?: { name: string; meta: string }[] };

export const included: { eyebrow: string; title: string; items: IncludedItem[]; cta: string } = {
  eyebrow: "What’s included",
  title: "Everything Your Child Gets",
  items: [
    { title: "3 Personalised Coaching Sessions", body: "Individual guidance for your teenager and family." },
    {
      title: "3 Focused Online Courses",
      courses: [
        { name: "Positive Mind Mastery", meta: "80 minutes | 10 sections | 41 lectures" },
        { name: "Accelerated Learning Methodologies", meta: "95 minutes | 8 sections | 39 lectures" },
        { name: "I Love Exams", meta: "2 hours | 5 sections | 40 lectures" },
      ],
    },
    { title: "Personalised Well-being Report", body: "Insights into your teenager’s strengths and areas for growth." },
    { title: "101 Secrets of Positive Parenting", body: "Audio lessons to help parents support their teenagers.", bonus: true },
    { title: "Power Up Live Sessions", body: "Interactive small-group sessions focused on real-life challenges and practical solutions.", bonus: true },
  ],
  cta: "Get the complete programme",
};

/* ─────────────────────────── 7. The coach ─────────────────────────── */
export const coach = {
  eyebrow: "Meet the coach behind the programme",
  name: "Meet Vidyashankar Guru",
  role: "Founder, MiTran Global | Transformation Coach",
  photo: { src: "/images/vidyashankar-guru.jpg", alt: "Vidyashankar Guru, Founder of MiTran Global" },
  bio: "With 22 years of experience in teaching and transformation, Vidyashankar’s mission is to help teenagers develop confidence, a positive mindset and essential life skills.",
  facts: ["Trained 25,000+ teens and professionals", "Worked with learners across 40+ nationalities", "TEDx Speaker", "Author of five books"],
  storyTitle: "The coach who was once exactly where your child is today",
  story: [
    "I grew up in a small village school in South India. No elite school. No big-city advantages. My headmaster told us we could never compete with city students. I believed him.",
    "I went quiet. The first time I had to speak on a stage, my legs were shaking and my mind went blank.",
    "It took me several years to learn what no school ever taught me: how to stay calm, confident and steady even under pressure, without comparing myself with anyone.",
  ],
  storyClose: "I’ve spent the last 22 years teaching children exactly that.",
  recognitionTitle: "Recognition",
  recognition: [
    "Author of five books, including Be a Champ, presented to Dr. A.P.J. Abdul Kalam",
    "Author of 101 Secrets of Imparting Positivity to Your Teen",
    "Lifetime Achievement Award, GEC",
    "Entrepreneur of the Year Award",
  ],
  /**
   * "Watch his story" button. Leave `storyVideo` empty to scroll to the
   * introduction video (Section 4), or set a hosted .mp4 URL to open it in the
   * popup player instead.
   */
  storyVideo: "",
  cta: "Watch his story",
};

/* ─────────────────────────── 8. Price ─────────────────────────── */
export const price = {
  eyebrow: "Programme price",
  title: "Give Your Teenager the Guidance They Need to Grow.",
  name: "MiTran Global Positivity Hub",
  includesTitle: "Your registration includes:",
  includes: [
    "3 personalised coaching sessions",
    "3 focused online courses",
    "Personalised well-being report",
    "101 Secrets of Positive Parenting",
    "Power Up Live Sessions",
  ],
  paymentNote: "One-time payment",
  cta: `Enrol now – save ${formatINR(saving)}`,
};

/** Text testimonials, as published on mitranglobal.com. Shown after the price. */
export const testimonials = {
  eyebrow: "In their own words",
  title: "Here’s what our current students have to say",
  lead: "Students and parents from schools across India and abroad on what changed for them with MiTran Global.",
  items: [
    {
      name: "Banshika Kumari",
      photo: "/testimonials/banshika.webp",
      role: "9th Grade, Jammu Sanskriti School, Jammu",
      quote:
        "I always face the problems of slow reading and learning but, since I am using MiTran Global everything took a turn. The platform has many courses like I Love Exams, Accelerated Learning Methodologies and Positive Mind Mastery. All these courses contain the stuff that is much needed for a student. From the Accelerated Learning Methodologies course, I learned to read and learn fast. I especially thank the whole MiTran Global team for making my life much easier.",
    },
    {
      name: "Raju Adnani",
      photo: "/testimonials/raju.webp",
      role: "Parent of Siddharth, 11th Grade, Dubai English School, UAE",
      quote:
        "Working at the foundational level, the system created by Vidyashankar has instilled in Siddharth a drive for success and a belief in failure as a stepping stone to success. Siddharth has not only honed his leadership skills but also integrated essential self-beliefs into his personality. In my opinion, the whole coaching process has been fundamental in shaping Siddharth’s trajectory, addressing aspects often overlooked by mainstream education.",
    },
    {
      name: "Mahathi",
      photo: "/testimonials/mahathi.webp",
      role: "8th Grade, KRM Public School, Chennai",
      quote:
        "I have learned many new things from these classes. The online courses were very understandable and made me believe exams are easy once we love the same. The other courses like Positive Mind Mastery changed me from feeling negative to thinking positive. Thank you MiTran Global for creating this wonderful hub for students.",
    },
    {
      name: "Anshika Kumar",
      photo: "/testimonials/anshikha.webp",
      role: "9th Grade, The Srijan School, Delhi",
      quote:
        "Before joining MiTran Global’s Positivity Hub, I was eager to understand teenage life better and learn how to navigate challenges with confidence. One of the most fascinating things I discovered was the power of the mind and how our neurons shape our thoughts and actions. It was truly eye-opening! I’ve learned the importance of staying positive and believing in myself.",
    },
    {
      name: "Justin Jiby",
      photo: "/testimonials/justin.webp",
      role: "6th Grade, St. Alonso Senior Secondary School",
      quote:
        "Before this, I had never thought about these ideas. But after the session, when I asked myself what I had learned, the first thing that came to my mind was: “If others can do it, I can do it too!” This made me feel more confident and motivated. Thank you for helping me believe in myself and discover my true potential!",
    },
    {
      name: "Likith Bardwaj",
      photo: "/testimonials/likith.webp",
      role: "7th Grade, Delhi Public School, North Bangalore",
      quote:
        "Earlier, I used to feel like I couldn’t achieve much and that my life would always be the same. But after taking these courses, I learned a lot about the human brain, emotions and self-control. One of the best things was making a weekly plan, which helped me stay focused. Now, I feel better both mentally and physically.",
    },
  ],
};

/* ─────────────────────────── 9. FAQ ─────────────────────────── */
export const faq = {
  eyebrow: "Questions parents ask",
  title: "Frequently Asked Questions",
  items: [
    { q: "Is this a tuition programme?", a: "No. Positivity Hub focuses on mindset, confidence, learning habits and personal development." },
    { q: "Are the sessions online?", a: "Yes, all coaching sessions are conducted online." },
    { q: "Will parents be involved?", a: "Yes. Two sessions include the parent and teenager. One session is exclusively for the teenager." },
    { q: "What does my child receive?", a: "Three personalised coaching sessions, three online courses, a well-being report and bonus learning sessions." },
    { q: "Is this suitable for teenagers who are already doing well academically?", a: "Yes. The programme also focuses on confidence, emotional awareness and essential life skills." },
    {
      q: "Is the well-being report a psychological diagnosis?",
      a: "No. It is an educational well-being report and does not replace professional mental health assessment or treatment.",
    },
  ],
};

/* ─────────────────────────── 10. Final CTA ─────────────────────────── */
export const finalCta = {
  title: "Help Your Teen Grow Into a Confident, Independent Individual.",
  lead: "Give them the tools, guidance and support to navigate teenage life with confidence.",
  sub: "Start Your Teenager’s Positivity Hub Journey Today.",
  priceLabel: "Special Programme Price",
  cta: "Enrol your teenager",
  tagline: "MiTran Global Positivity Hub – Building positive mindsets and essential life skills for life.",
};

export const footer = {
  disclaimer:
    "Positivity Hub is an educational well-being programme and is not a substitute for diagnosis or treatment by a qualified mental health professional. MiTran Global does not guarantee any specific results or performance; student experiences shown are individual and should not be read as promised outcomes.",
};
