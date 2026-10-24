import civilWide from "@/assets/civil-wide.webp";
import civilMobile from "@/assets/civil-mobile.webp";
import civilCard from "@/assets/civil-card.webp";
import propertyWide from "@/assets/property-wide.webp";
import propertyMobile from "@/assets/property-mobile.webp";
import propertyCard from "@/assets/property-card.webp";
import employmentWide from "@/assets/employment-wide.webp";
import employmentMobile from "@/assets/employment-mobile.webp";
import employmentCard from "@/assets/employment-card.webp";
import cyberWide from "@/assets/cyber-wide.webp";
import cyberMobile from "@/assets/cyber-mobile.webp";
import cyberCard from "@/assets/cyber-card.webp";
import ipWide from "@/assets/ip-wide.webp";
import ipMobile from "@/assets/ip-mobile.webp";
import ipCard from "@/assets/ip-card.webp";
import internationalWide from "@/assets/international-wide.webp";
import internationalMobile from "@/assets/international-mobile.webp";
import internationalCard from "@/assets/international-card.webp";
import arbitrationWide from "@/assets/arbitration-wide.webp";
import arbitrationMobile from "@/assets/arbitration-mobile.webp";
import arbitrationCard from "@/assets/arbitration-card.webp";
import corporateWide from "@/assets/corporate-wide.webp";
import corporateMobile from "@/assets/corporate-mobile.webp";
import corporateCard from "@/assets/corporate-card.webp";
import officeWide from "@/assets/office-wide.webp";
import officeMobile from "@/assets/office-mobile.webp";
import officeCard from "@/assets/office-card.webp";

const images = {
  civil: { wide: civilWide, mobile: civilMobile, card: civilCard, alt: "Brass scales of justice, a gavel and navy law books in an empty courtroom." },
  property: { wide: propertyWide, mobile: propertyMobile, card: propertyCard, alt: "An architectural house model, blueprints and house keys overlooking city buildings." },
  employment: { wide: employmentWide, mobile: employmentMobile, card: employmentCard, alt: "Contract papers, navy folders and a brass pen on a desk in an empty office." },
  cyber: { wide: cyberWide, mobile: cyberMobile, card: cyberCard, alt: "A brass padlock in front of a laptop on a white desk in a technology office." },
  ip: { wide: ipWide, mobile: ipMobile, card: ipCard, alt: "A brass lightbulb, technical drawings, a fountain pen and navy law books." },
  international: { wide: internationalWide, mobile: internationalMobile, card: internationalCard, alt: "A navy and brass globe with document folders on an office desk overlooking a city." },
  arbitration: { wide: arbitrationWide, mobile: arbitrationMobile, card: arbitrationCard, alt: "An empty negotiation room with navy chairs and folders around a white meeting table." },
  corporate: { wide: corporateWide, mobile: corporateMobile, card: corporateCard, alt: "A navy company register, brass seal, board documents and a fountain pen on a boardroom table." },
  office: { wide: officeWide, mobile: officeMobile, card: officeCard, alt: "An empty law office with navy bookcases, a white desk, brass scales and an amber lamp." },
};

export function imageForLabel(label: string) {
  const text = label.toLowerCase();
  if (/corporate|companies act|sebi|gst|income tax|llp/.test(text)) return images.corporate;
  if (/property|real estate|land law|koramangala|branch/.test(text)) return images.property;
  if (/employment|labour|rights when employment/.test(text)) return images.employment;
  if (/cyber|digital|online fraud/.test(text)) return images.cyber;
  if (/\bip\b|intellectual|trademark|brand|startup/.test(text)) return images.ip;
  if (/international|cross.border|nri/.test(text)) return images.international;
  if (/arbitration|mediation|seminar|camp|workshop|moot|client meet/.test(text)) return images.arbitration;
  if (/civil|court|legal blog/.test(text)) return images.civil;
  return images.office;
}
