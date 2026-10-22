export const PHONE_1 = "+91 9110478212";
export const PHONE_2 = "+91 9110478212";
export const TEL = "tel:+919110478212";
export const WHATSAPP = "https://wa.me/919110478212?text=" + encodeURIComponent("Hello Vidya Charan, I would like to enquire about a legal matter.");
export const EMAIL = "contact@VIDYA CHARANlegal.in";
export const HEAD_OFFICE = "No. 12, 2nd Floor, Lavelle Road, Bengaluru, Karnataka 560001";
export const BRANCH = "45, 80 Feet Road, Koramangala 4th Block, Bengaluru 560034";
export const mapLink = (a: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(a)}`;

export type PracticeArea = {
  slug: string; name: string; short: string; intro: string;
  services: { title: string; desc: string; bullets: string[] }[];
};

const svc = (titles: string[], area: string) =>
  titles.map((t) => ({
    title: t,
    desc: `Focused guidance on ${t.toLowerCase()} matters, tailored to your facts and goals in ${area}.`,
    bullets: ["Initial case assessment", "Drafting & documentation", "Representation before forums"],
  }));

export const PRACTICE_AREAS: PracticeArea[] = [
  { slug: "civil-law", name: "Civil Law", short: "Recovery suits, injunctions, contracts and civil disputes.",
    intro: "From money recovery to injunctions, we handle civil disputes with careful preparation and steady advocacy before civil courts across Karnataka.",
    services: svc(["Money Recovery Suits", "Injunctions & Stay", "Contract Disputes", "Partition Suits", "Consumer Complaints", "Appeals & Revisions"], "civil law") },
  { slug: "real-estate-property-land-law", name: "Real Estate, Property & Land Law", short: "Title checks, registrations, RERA and land disputes.",
    intro: "Buying, selling or defending property in Bengaluru calls for precise due diligence. We help you secure clear title and resolve land disputes.",
    services: svc(["Title Verification", "Sale Deed Drafting", "RERA Complaints", "Land Conversion", "Property Disputes", "Lease & Rent Matters"], "property law") },
  { slug: "employment-labour-law", name: "Employment & Labour Law", short: "Contracts, terminations, POSH and labour compliance.",
    intro: "We advise employers and employees on contracts, terminations, workplace policies and disputes before labour authorities.",
    services: svc(["Employment Contracts", "Wrongful Termination", "POSH Compliance", "Gratuity & PF Claims", "Labour Court Matters", "HR Policy Review"], "employment law") },
  { slug: "cyber-digital-law", name: "Cyber & Digital Law", short: "Online fraud, data protection and IT Act matters.",
    intro: "Digital life brings new legal risks. We assist with cyber fraud complaints, data protection compliance and IT Act proceedings.",
    services: svc(["Cyber Fraud Complaints", "Data Protection", "Online Defamation", "IT Act Defence", "Website Terms & Policies", "Social Media Takedowns"], "cyber law") },
  { slug: "ip-law", name: "IP Law", short: "Trademarks, copyrights, patents and licensing.",
    intro: "Protect what you create. We handle trademark filings, copyright registration, licensing and infringement actions.",
    services: svc(["Trademark Registration", "Copyright Filing", "Patent Support", "Licensing Agreements", "Infringement Actions", "Brand Portfolio Audits"], "intellectual property") },
  { slug: "international-law", name: "International Law", short: "Cross-border contracts, NRI matters and trade.",
    intro: "For NRIs and businesses working across borders, we advise on cross-border contracts, enforcement and compliance.",
    services: svc(["Cross-border Contracts", "NRI Property Matters", "Foreign Judgment Enforcement", "Trade Compliance", "FEMA Advisory", "Overseas Documentation"], "international law") },
  { slug: "arbitration-mediation", name: "Arbitration & Mediation", short: "Faster, private resolution of commercial disputes.",
    intro: "Not every dispute needs a courtroom. We represent clients in arbitration and mediation for quicker, confidential outcomes.",
    services: svc(["Arbitration Proceedings", "Mediation Support", "Arbitration Clauses", "Award Enforcement", "Section 9 Interim Relief", "Settlement Agreements"], "dispute resolution") },
];

export const MORE_LINKS = [
  { to: "/about", label: "About Us" },
  { to: "/faq", label: "FAQ" },
  { to: "/associates", label: "Associates" },
  { to: "/events", label: "Our Office Events" },
  { to: "/blog", label: "Blog" },
  { to: "/news", label: "News" },
  { to: "/careers", label: "Careers" },
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms & Conditions" },
  { to: "/refund-policy", label: "Refund Policy" },
] as const;

export const TEAM = [
  { name: "Adv. Vidya Charan Kumar", role: "Founder & Managing Partner", area: "Civil Law" },
  { name: "Adv. Meera Rao", role: "Senior Associate", area: "Real Estate & Property" },
  { name: "Adv. Arjun Shetty", role: "Associate", area: "Employment & Labour" },
  { name: "Adv. Kavya Nair", role: "Associate", area: "Cyber & Digital Law" },
  { name: "Adv. Rahul Iyer", role: "Associate", area: "IP Law" },
  { name: "Adv. Sneha Gowda", role: "Associate", area: "Arbitration & Mediation" },
  { name: "Adv. Farhan Ali", role: "Junior Associate", area: "International Law" },
  { name: "Adv. Divya Menon", role: "Junior Associate", area: "Civil Law" },
];

export const TESTIMONIALS = [
  { name: "Ramesh P.", date: "March 2026", text: "Clear advice from day one. They explained every step of my property case and kept me updated throughout." },
  { name: "Ananya S.", date: "January 2026", text: "Professional, patient and well prepared. My employment matter was settled far quicker than I expected." },
  { name: "Vikram T.", date: "November 2025", text: "Their trademark team handled our filings smoothly and answered every question promptly." },
  { name: "Lakshmi R.", date: "September 2025", text: "Respectful and responsive. I always knew where my case stood and what came next." },
];

export type Post = { slug: string; title: string; date: string; excerpt: string; body: string[] };
const body = (t: string) => [
  `This placeholder article introduces ${t.toLowerCase()} in simple terms for readers in Bengaluru and across India.`,
  "It outlines the key points people usually ask about, the documents worth keeping ready, and the common mistakes to avoid.",
  "This content is general information only and is not legal advice. Please speak with an advocate about your specific situation.",
];
export const BLOG: Post[] = [
  "Checking Property Title Before You Buy", "Your Rights When Employment Ends", "Protecting Your Brand With a Trademark",
  "What To Do After an Online Fraud", "Why Arbitration Clauses Matter", "A Simple Guide to Civil Suits",
].map((t, i) => ({ slug: t.toLowerCase().replace(/[^a-z0-9]+/g, "-"), title: t, date: `${10 + i} Aug 2026`, excerpt: `A short, plain-language look at ${t.toLowerCase()}.`, body: body(t) }));
export const NEWS: Post[] = [
  "Vidya Charan Opens Koramangala Branch", "Team Hosts Free Legal Awareness Camp", "New Associates Join the Firm",
  "Firm Speaks at Bengaluru Startup Meet",
].map((t, i) => ({ slug: t.toLowerCase().replace(/[^a-z0-9]+/g, "-"), title: t, date: `${2 + i * 5} Sep 2026`, excerpt: `Placeholder update: ${t.toLowerCase()}.`, body: body(t) }));

export const FAQS = [
  ["How do I book a consultation?", "Use the Appointment page to pick a consultation type, date and time slot. You will see a summary before confirming."],
  ["What should I bring to my first meeting?", "Bring any documents related to your matter, such as agreements, notices, title papers or correspondence, along with a photo ID."],
  ["Do you offer online consultations?", "Yes. Consultations can be held in person at our office or over a video call, depending on your preference."],
  ["How are fees decided?", "Fees depend on the nature and complexity of the matter. We discuss them openly before any work begins."],
  ["Which courts do you appear in?", "Our advocates appear before civil courts, tribunals and authorities in Bengaluru and across Karnataka."],
  ["Is my information kept confidential?", "Yes. Everything you share with us is treated as strictly confidential."],
];
