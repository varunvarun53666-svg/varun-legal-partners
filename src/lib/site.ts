export const PHONE_1 = "+91 98450 00000";
export const PHONE_2 = "+91 80 4000 0000";
export const TEL = "tel:+919845000000";
export const WHATSAPP = "https://wa.me/919845000000?text=" + encodeURIComponent("Hello Vidyacharan, I would like to enquire about a legal matter.");
export const EMAIL = "contact@vidyacharan.in";
export const HEAD_OFFICE = "No. 12, 2nd Floor, Lavelle Road, Bengaluru, Karnataka 560001";
export const BRANCH = "45, 80 Feet Road, Koramangala 4th Block, Bengaluru 560034";
export const mapLink = (a: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(a)}`;

export type PracticeArea = {
  slug: string; name: string; short: string; intro: string;
  services: { title: string; desc: string; bullets: string[] }[];
  highlights: string[];
};

const svc = (titles: string[], area: string) =>
  titles.map((t) => ({
    title: t,
    desc: `Focused guidance on ${t.toLowerCase()} matters, tailored to your facts and goals in ${area}.`,
    bullets: ["Initial case assessment", "Drafting & documentation", "Representation before forums"],
  }));

export const PRACTICE_AREAS: PracticeArea[] = [
  { slug: "corporate-law", name: "Corporate Law", short: "Company compliance, FEMA, SEBI, tax and GST advisory.",
    intro: "Running a business means keeping up with company law, tax and regulatory duties at every step. We help companies, LLPs and startups stay compliant and make sound decisions.",
    services: [
      { title: "Companies Act", desc: "End-to-end support under the Companies Act, from incorporation to board governance and annual filings.",
        bullets: ["Company incorporation & structuring", "Board & shareholder resolutions", "ROC filings & annual compliance"] },
      { title: "FEMA", desc: "Advisory on foreign exchange rules for cross-border investment, remittances and overseas transactions.",
        bullets: ["FDI & ODI compliance", "RBI reporting & compounding", "Cross-border remittance guidance"] },
      { title: "SEBI", desc: "Guidance on securities regulations for listed companies, fundraisers and market intermediaries.",
        bullets: ["Listing & disclosure obligations", "Insider trading compliance", "Responses to SEBI notices"] },
      { title: "LLP Act", desc: "Formation and ongoing compliance for limited liability partnerships of every size.",
        bullets: ["LLP incorporation & agreements", "Partner changes & admissions", "Annual returns & statements"] },
      { title: "Income Tax", desc: "Practical advice on income tax planning, assessments and disputes for businesses and individuals.",
        bullets: ["Tax planning & structuring", "Assessment & scrutiny replies", "Appeals before tax authorities"] },
      { title: "GST", desc: "Support with GST registration, returns, audits and litigation so your business stays on the right side of the law.",
        bullets: ["GST registration & returns", "Input tax credit review", "Notices, audits & appeals"] },
    ],
    highlights: [
      "Incorporating companies and LLPs with the right structure",
      "Keeping ROC, board and shareholder records up to date",
      "Advising on FEMA rules for foreign investment and remittances",
      "Handling SEBI disclosures and regulatory correspondence",
      "Planning income tax and responding to assessments",
      "Managing GST registration, returns and audits",
      "Drafting shareholder, partnership and founder agreements",
      "Supporting mergers, acquisitions and business restructuring",
    ] },
  { slug: "ip-law", name: "Intellectual Property Law (IP Law)", short: "Trademarks, copyrights, patents and licensing.",
    intro: "Protect what you create. We handle trademark filings, copyright registration, licensing and infringement actions.",
    services: svc(["Trademark Registration", "Copyright Filing", "Patent Support", "Licensing Agreements", "Infringement Actions", "Brand Portfolio Audits"], "intellectual property"),
    highlights: [
      "Searching and filing trademark applications",
      "Registering copyrights for creative and software works",
      "Coordinating patent drafting and filing support",
      "Drafting licensing and assignment agreements",
      "Acting against infringement and passing off",
      "Responding to examination reports and oppositions",
      "Auditing and organising brand portfolios",
      "Advising on IP clauses in commercial contracts",
    ] },
  { slug: "employment-labour-law", name: "Employment & Labour Law", short: "Contracts, terminations, POSH and labour compliance.",
    intro: "We advise employers and employees on contracts, terminations, workplace policies and disputes before labour authorities.",
    services: svc(["Employment Contracts", "Wrongful Termination", "POSH Compliance", "Gratuity & PF Claims", "Labour Court Matters", "HR Policy Review"], "employment law"),
    highlights: [
      "Drafting employment contracts and offer letters",
      "Advising on termination, notice and severance",
      "Setting up POSH committees and training",
      "Pursuing gratuity, PF and bonus claims",
      "Representing parties before labour courts",
      "Reviewing HR policies and employee handbooks",
      "Handling non-compete and confidentiality clauses",
      "Guiding layoffs, retrenchment and settlements",
    ] },
  { slug: "real-estate-property-land-law", name: "Real Estate, Property & Land Law", short: "Title checks, registrations, RERA and land disputes.",
    intro: "Buying, selling or defending property in Bengaluru calls for precise due diligence. We help you secure clear title and resolve land disputes.",
    services: svc(["Title Verification", "Sale Deed Drafting", "RERA Complaints", "Land Conversion", "Property Disputes", "Lease & Rent Matters"], "property law"),
    highlights: [
      "Verifying title and encumbrances before purchase",
      "Drafting sale deeds, agreements and registrations",
      "Filing and defending RERA complaints",
      "Managing land conversion and khata matters",
      "Resolving partition and boundary disputes",
      "Handling lease, rent and eviction issues",
      "Advising on inherited and ancestral property",
      "Checking approvals for apartments and layouts",
    ] },
  { slug: "cyber-digital-law", name: "Cyber & Digital Law", short: "Online fraud, data protection and IT Act matters.",
    intro: "Digital life brings new legal risks. We assist with cyber fraud complaints, data protection compliance and IT Act proceedings.",
    services: [
      { title: "DPDP Act", desc: "Compliance with the Digital Personal Data Protection Act for businesses that collect or process personal data.",
        bullets: ["Data protection audits & gap reviews", "Privacy notices & consent flows", "Data breach response planning"] },
      { title: "Online Fraud", desc: "Swift action on online fraud, from filing complaints to pursuing recovery of lost funds.",
        bullets: ["Cyber crime complaint drafting", "Bank freeze & lien requests", "Coordination with cyber police"] },
      ...svc(["Online Defamation", "IT Act Defence", "Website Terms & Policies", "Social Media Takedowns"], "cyber law"),
    ],
    highlights: [
      "Complying with the DPDP Act and data protection duties",
      "Filing complaints for online fraud and cheating",
      "Acting against online defamation and impersonation",
      "Defending proceedings under the IT Act",
      "Drafting website terms, policies and disclaimers",
      "Requesting takedowns on social media platforms",
      "Advising on data breach response and notification",
      "Handling email, account and identity misuse",
    ] },
  { slug: "civil-law", name: "Civil Law", short: "Recovery suits, injunctions, contracts and civil disputes.",
    intro: "From money recovery to injunctions, we handle civil disputes with careful preparation and steady advocacy before civil courts across Karnataka.",
    services: svc(["Money Recovery Suits", "Injunctions & Stay", "Contract Disputes", "Partition Suits", "Consumer Complaints", "Appeals & Revisions"], "civil law"),
    highlights: [
      "Filing suits for recovery of money and dues",
      "Seeking injunctions and urgent stay orders",
      "Enforcing contracts and claiming damages",
      "Handling partition and family property suits",
      "Pursuing consumer complaints for deficient services",
      "Arguing appeals and revisions in higher courts",
      "Executing decrees and recovering awarded amounts",
      "Negotiating settlements where they serve you better",
    ] },
  { slug: "international-law", name: "International Law", short: "Cross-border contracts, NRI matters and trade.",
    intro: "For NRIs and businesses working across borders, we advise on cross-border contracts, enforcement and compliance.",
    services: [
      ...svc(["Cross-border Contracts", "NRI Property Matters", "Foreign Judgment Enforcement", "Trade Compliance"], "international law"),
      { title: "NRI Wills & Succession", desc: "Wills, succession planning and inheritance formalities for NRIs with assets in India.",
        bullets: ["Drafting & registering wills", "Succession & legal heir certificates", "Probate and estate administration"] },
      ...svc(["Overseas Documentation"], "international law"),
    ],
    highlights: [
      "Drafting and reviewing cross-border contracts",
      "Managing NRI property purchase, sale and disputes",
      "Enforcing foreign judgments and awards in India",
      "Advising on import, export and trade compliance",
      "Preparing wills and succession plans for NRIs",
      "Obtaining succession and legal heir certificates",
      "Attesting and apostilling overseas documents",
      "Coordinating with counsel in other jurisdictions",
    ] },
  { slug: "arbitration-mediation", name: "Arbitration & Mediation", short: "Faster, private resolution of commercial disputes.",
    intro: "Not every dispute needs a courtroom. We represent clients in arbitration and mediation for quicker, confidential outcomes.",
    services: svc(["Arbitration Proceedings", "Mediation Support", "Arbitration Clauses", "Award Enforcement", "Section 9 Interim Relief", "Settlement Agreements"], "dispute resolution"),
    highlights: [
      "Representing clients in arbitration proceedings",
      "Supporting parties through structured mediation",
      "Drafting effective arbitration clauses in contracts",
      "Enforcing domestic and foreign arbitral awards",
      "Seeking interim relief under Section 9",
      "Challenging awards where grounds exist",
      "Recording settlements in binding agreements",
      "Keeping disputes private and out of court",
    ] },
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
  { name: "Adv. Vidyacharan", role: "Founder & Managing Partner", area: "Civil Law" },
  { name: "Adv. Meera Rao", role: "Senior Associate", area: "Real Estate & Property" },
  { name: "Adv. Arjun Shetty", role: "Associate", area: "Employment & Labour" },
  { name: "Adv. Kavya Nair", role: "Associate", area: "Cyber & Digital Law" },
  { name: "Adv. Rahul Iyer", role: "Associate", area: "Intellectual Property Law (IP Law)" },
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
  "Vidyacharan Opens Koramangala Branch", "Team Hosts Free Legal Awareness Camp", "New Associates Join the Firm",
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
