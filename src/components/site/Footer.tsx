import { Link } from "@tanstack/react-router";
import { Clock, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { Logo } from "./Logo";
import { BRANCH, EMAIL, HEAD_OFFICE, PHONE_1, PHONE_2, PRACTICE_AREAS, mapLink } from "@/lib/site";

const quick = [
  ["/about", "About us"], ["/practice/civil-law", "Services"], ["/associates", "Associates"], ["/careers", "Careers"],
  ["/events", "Our Office Events"], ["/contact", "Contact us"], ["/faq", "FAQ"], ["/blog", "Blog"], ["/news", "News"],
  ["/privacy-policy", "Privacy Policy"], ["/terms", "Terms & Conditions"],
];

export function Footer() {
  const h = "mb-4 font-display text-lg text-amber";
  const a = "text-navy-foreground/80 transition-colors hover:text-amber";
  return (
    <footer className="bg-navy text-sm text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className={h}>Practice Areas</h3>
          <ul className="space-y-2">
            {PRACTICE_AREAS.map((p) => <li key={p.slug}><Link to="/practice/$slug" params={{ slug: p.slug }} className={a}>{p.name}</Link></li>)}
          </ul>
        </div>
        <div>
          <h3 className={h}>Quick Links</h3>
          <ul className="grid grid-cols-2 gap-2 lg:grid-cols-1">
            {quick.map(([to, l]) => <li key={l}><Link to={to as never} className={a}>{l}</Link></li>)}
          </ul>
        </div>
        <div>
          <h3 className={h}>Social</h3>
          <div className="flex gap-3">
            {[[Instagram, "Instagram", "https://instagram.com"], [Youtube, "YouTube", "https://youtube.com"], [Linkedin, "LinkedIn", "https://linkedin.com"]].map(([Icon, l, href]) => {
              const I = Icon as typeof Instagram;
              return <a key={l as string} href={href as string} target="_blank" rel="noreferrer" aria-label={l as string}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-foreground/10 transition-colors hover:bg-amber hover:text-navy"><I className="h-5 w-5" /></a>;
            })}
          </div>
          <div className="mt-8"><Logo light /></div>
        </div>
        <div className="space-y-3">
          <h3 className={h}>Contact</h3>
          <p className="flex gap-2"><Phone className="h-4 w-4 shrink-0 text-amber" /><span><a className={a} href="tel:+919845000000">{PHONE_1}</a><br /><a className={a} href="tel:+918040000000">{PHONE_2}</a></span></p>
          <p className="flex gap-2"><Mail className="h-4 w-4 shrink-0 text-amber" /><a className={a} href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
          {[["Head Office", HEAD_OFFICE], ["Branch", BRANCH]].map(([t, addr]) => (
            <p key={t} className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-amber" /><span><strong>{t}:</strong> <span className="text-navy-foreground/80">{addr}</span><br />
              <a className="text-amber underline-offset-2 hover:underline" href={mapLink(addr!)} target="_blank" rel="noreferrer">View on Map</a></span></p>
          ))}
          <p className="flex gap-2"><Clock className="h-4 w-4 shrink-0 text-amber" />Mon–Sat: 9 AM – 6 PM · Sunday closed</p>
        </div>
      </div>
      <div className="border-t border-navy-foreground/10 py-5 text-center text-xs text-navy-foreground/60">© {new Date().getFullYear()} Vidyacharan Advocates &amp; Legal Consultants. All rights reserved.</div>
    </footer>
  );
}
