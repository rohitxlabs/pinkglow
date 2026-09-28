export type CourseModule = {
  number: string;
  title: string;
  points?: string[];
};

export const navLinks = [
  { label: "Studio", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Academy", href: "#academy" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: 2, suffix: "+", label: "Years of Artistry" },
  { value: 200, suffix: "+", label: "Faces Glammed" },
  { value: 80, suffix: "+", label: "Certified Students" },
  { value: 4.9, suffix: "/5", label: "Average Rating" },
];

export const services = [
  {
    title: "Bridal Makeup",
    description:
      "HD & airbrush bridal looks engineered to survive twelve hours, tears, and every camera flash — from the mehendi to the reception.",
    tag: "Signature",
    image: "/images/gallery-lipstick.jpg",
    duration: "4–6 hrs",
    includes: ["HD & airbrush base", "Draping & jewellery setting", "Touch-up kit on the day"],
  },
  {
    title: "Engagement & Party Glam",
    description:
      "Dewy, radiant, camera-ready glam with precision contouring and long-wear finishing for your most photographed nights.",
    tag: "Popular",
    image: "/images/gallery-eye-glow.jpg",
    duration: "2–3 hrs",
    includes: ["Skin prep & contouring", "Long-wear setting spray", "Lash application"],
  },
  {
    title: "HD & Editorial Makeup",
    description:
      "High-definition, editorial-grade makeup for shoots, portfolios, and ramp — built for close-ups and unforgiving lighting.",
    tag: "Editorial",
    image: "/images/gallery-editorial.jpg",
    duration: "2–4 hrs",
    includes: ["Camera-tested HD finish", "Look consultation", "On-set touch-ups available"],
  },
  {
    title: "Hairstyling & Draping",
    description:
      "Advance bridal and engagement hairstyling with crimper, straightener, and curler work, paired with flawless saree draping.",
    tag: "Complete Look",
    image: "/images/gallery-draping.jpg",
    duration: "1.5–3 hrs",
    includes: ["Crimper, curler & straightener styling", "Saree & dupatta draping", "Accessory placement"],
  },
  {
    title: "Pre-Bridal Skin Prep",
    description:
      "Skin-tone and undertone-mapped prep rituals so foundation, contour, and highlight sit perfectly on the big day.",
    tag: "Prep",
    image: "/images/gallery-dewy.jpg",
    duration: "45–60 min",
    includes: ["Undertone & skin-type mapping", "Prep facial ritual", "Product shade-matching"],
  },
  {
    title: "Group & Family Glam",
    description:
      "Coordinated, on-time glam for the full bridal party and family — one studio, one flawless aesthetic, zero delays.",
    tag: "Group",
    image: "/images/service-group.jpg",
    duration: "Scheduled by group size",
    includes: ["Multi-artist coordination", "Matching aesthetic across the party", "On-time studio scheduling"],
  },
];

export const courseModules: CourseModule[] = [
  {
    number: "01",
    title: "Product Knowledge",
    points: ["International & National Product Knowledge"],
  },
  {
    number: "02",
    title: "Details of Makeup Brushes",
    points: ["Brush families, fibers & correct usage for every step"],
  },
  {
    number: "03",
    title: "Colour Wheel Theory Knowledge",
    points: ["Colour correcting, complementary tones & product mixing"],
  },
  {
    number: "04",
    title: "Skin Theory Knowledge",
    points: [
      "Understand Skin Type",
      "Understand Skin Tones",
      "Undertone Knowledge",
    ],
  },
  {
    number: "05",
    title: "Makeup Steps",
    points: ["Complete step-by-step professional application sequence"],
  },
  {
    number: "06",
    title: "Makeup Types",
    points: [
      "HD Makeup",
      "Non HD Makeup",
      "Waterproof Makeup",
      "Dewy & Matte Makeup",
    ],
  },
  {
    number: "07",
    title: "Makeup Application Techniques",
    points: ["Contouring", "Blush Placement", "Highlighter Selection"],
  },
  {
    number: "08",
    title: "Specified Eye Makeup Classes",
    points: ["Live demonstrations for every eye makeup style"],
  },
  {
    number: "09",
    title: "Face Features & Eye Shapes",
    points: ["Reading face structure & customising looks accordingly"],
  },
  {
    number: "10",
    title: "Bridal Demonstration",
    points: ["2 full live bridal demonstrations"],
  },
  {
    number: "11",
    title: "Hairstyling — Basic to Advance",
    points: [
      "Crimper",
      "Straightener",
      "Curler",
      "Advance Bridal Hairstyle",
      "Advance Engagement Hairstyle",
    ],
  },
  {
    number: "12",
    title: "Draping & Practice",
    points: ["Saree & dupatta draping styles with hands-on practice"],
  },
];

export const academyHighlights = [
  {
    title: "Certified Academy",
    description:
      "Structured, industry-recognised curriculum from basic fundamentals to advance bridal artistry.",
  },
  {
    title: "Exam After Every Module",
    description:
      "Every module closes with an examination, so skill and confidence build in lock-step.",
  },
  {
    title: "Certificate & Celebration",
    description:
      "Graduate with a certificate of completion and a celebration you'll remember as long as your clients remember your work.",
  },
  {
    title: "Hands-On Practice",
    description:
      "Live bridal demos, real models, and studio practice on every technique — not just theory on a slide.",
  },
];

export const galleryItems = [
  {
    title: "Bridal Radiance",
    category: "Bridal",
    image: "/images/gallery-lipstick.jpg",
  },
  {
    title: "Engagement Glow",
    category: "Party Glam",
    image: "/images/gallery-eye-glow.jpg",
  },
  {
    title: "Editorial Precision",
    category: "HD Editorial",
    image: "/images/gallery-editorial.jpg",
  },
  {
    title: "Draping Artistry",
    category: "Draping",
    image: "/images/gallery-draping.jpg",
  },
  {
    title: "Soft Dewy Glam",
    category: "Party Glam",
    image: "/images/gallery-dewy.jpg",
  },
  {
    title: "Advance Hairstyling",
    category: "Hairstyle",
    image: "/images/gallery-hairstyle.jpg",
  },
];

export const testimonials = [
  {
    name: "Ritika Sharma",
    role: "Bride, 2025 Batch Client",
    quote:
      "My bridal look stayed flawless for fourteen hours straight — through the pheras, the dance floor, and every hug. PinkGlow doesn't just do makeup, they engineer it.",
  },
  {
    name: "Ananya Kapoor",
    role: "Graduate, MUA Ultimate Course",
    quote:
      "I walked in knowing nothing about undertones. Twelve modules later I sat my first bridal booking with total confidence — the module-wise exams genuinely built my skill.",
  },
  {
    name: "Simran Kaur",
    role: "Engagement Client",
    quote:
      "The colour wheel and contouring technique they used made my face look sculpted in every single photo. Best glam decision I made for my engagement.",
  },
  {
    name: "Priya Menon",
    role: "Graduate, MUA Ultimate Course",
    quote:
      "The hairstyling module alone — crimper, curler, advance bridal styles — was worth the entire course. Certified, celebrated, and booked within a month of graduating.",
  },
  {
    name: "Neha Chawla",
    role: "Bride, Engagement Client",
    quote:
      "Booked the pre-bridal skin prep and bridal package together — by the time my makeup started, my base already looked flawless. Zero touch-ups needed all evening.",
  },
  {
    name: "Ishita Rao",
    role: "Graduate, MUA Ultimate Course",
    quote:
      "Coming from zero experience, the module-wise exams kept me honest about what I actually knew. I left with a portfolio, a certificate, and my first three bookings.",
  },
];

export const founder = {
  name: "Khushi",
  role: "Founder & Lead MUA, PinkGlow Academy",
  bio: "Over a decade behind the brush, Khushi built PinkGlow to give every bride an undertone-perfect, camera-ready glow — and to train the next generation of MUAs with the same precision, module by module, exam by exam.",
};

export const contactDetails = {
  phone: "+91 98765 43210",
  email: "hello@pinkglow.studio",
  location: "PinkGlow Studio, Connaught Place, New Delhi",
  instagram: "@pinkglow.studio",
};

export const interestOptions = [
  { value: "bridal", label: "Bridal Makeup" },
  { value: "party", label: "Engagement & Party Glam" },
  { value: "hd", label: "HD & Editorial" },
  { value: "hair", label: "Hairstyling & Draping" },
  { value: "academy", label: "MUA Ultimate Course" },
] as const;

export type InterestValue = (typeof interestOptions)[number]["value"];

export const businessHours = [
  { day: "Monday – Friday", hours: "10:00 AM – 8:00 PM" },
  { day: "Saturday – Sunday", hours: "9:00 AM – 9:00 PM" },
  { day: "Wedding Season Slots", hours: "By advance appointment" },
];

export const bookingSteps = [
  {
    title: "Consult",
    description:
      "Tell us your date, event, and the look you're picturing — over call, WhatsApp, or in studio.",
  },
  {
    title: "Trial (Optional)",
    description:
      "Book a trial session so your bridal or event look is locked in before the big day, not on it.",
  },
  {
    title: "Confirm Your Slot",
    description:
      "Advance-book your date — wedding season slots fill fast, especially weekend batches.",
  },
  {
    title: "Glam Day",
    description:
      "Arrive to a fully prepped station. We work to your timeline so you're ready exactly on schedule.",
  },
];

export const enrolSteps = [
  {
    title: "Enquire & Counsel",
    description:
      "Share your experience level and goals — we recommend the right batch pace for you.",
  },
  {
    title: "Enrol & Choose a Batch",
    description:
      "Pick Weekend, Weekday Intensive, or Fast-Track Pro based on your schedule.",
  },
  {
    title: "Learn All 12 Modules",
    description:
      "Product knowledge to draping — hands-on practice, live bridal demos, real models.",
  },
  {
    title: "Exam & Certify",
    description:
      "Sit an exam after every module, then graduate with your certificate and celebration.",
  },
];

export const faqs = [
  {
    question: "How far in advance should I book bridal makeup?",
    answer:
      "For wedding season dates (October–February), we recommend booking 2–3 months ahead. Off-season and weekday events can often be booked with 2–3 weeks' notice, subject to availability.",
  },
  {
    question: "Do you offer a trial session before the wedding day?",
    answer:
      "Yes — trial sessions are optional but strongly recommended for bridal bookings, so your look is finalised (and adjusted if needed) well before the actual event.",
  },
  {
    question: "What's included in the MUA Ultimate Course fee?",
    answer:
      "All 12 modules, live bridal demonstrations, module-wise examinations, and your certificate & celebration on graduation. Message us for current batch fees and seat availability.",
  },
  {
    question: "Do I need my own makeup kit to join the academy?",
    answer:
      "No prior kit is required to enrol. We'll guide you on building a personal kit as you progress through the product knowledge and application modules.",
  },
  {
    question: "Is the certificate recognised for professional bookings?",
    answer:
      "Our certificate confirms you've completed the full curriculum and passed every module exam — many of our graduates use it directly to start taking paid bookings and build their portfolio.",
  },
  {
    question: "Do you travel for destination weddings or outstation events?",
    answer:
      "Yes, outstation and destination bookings are available. Share your event location when you enquire and we'll confirm travel logistics and timing together.",
  },
  {
    question: "Can I switch between Weekend and Weekday batches?",
    answer:
      "If your schedule changes mid-course, let us know — we'll do our best to move you to a different batch track without repeating completed modules.",
  },
  {
    question: "What's your cancellation or rescheduling policy?",
    answer:
      "We understand plans shift. Reach out as early as possible for service bookings or batch changes and we'll work with you on the best available option.",
  },
];
