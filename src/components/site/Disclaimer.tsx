import { FIRM_NAME } from "@/lib/site";
import { useEffect, useState } from "react";

const KEY = "vidyacharan_disclaimer_agreed";
const POINTS = [
  "The Bar Council of India does not permit advocates to advertise or solicit work in any form. This website is not an advertisement or solicitation of any kind.",
  `By clicking “I Agree”, you confirm that you are visiting this site of your own accord to seek information about ${FIRM_NAME}.`,
  "All content on this website is provided for general information purposes only.",
  "Viewing this website or contacting us through it does not create an advocate-client relationship.",
  "Nothing on this website is, or should be read as, legal advice. Please consult a qualified advocate for advice on your specific matter.",
  "We are not responsible for any action taken based on the information on this website.",
  "This website uses cookies and similar technologies to improve your browsing experience. By continuing, you consent to their use.",
];

export function DisclaimerGate() {
  const [open, setOpen] = useState(false);
  useEffect(() => { if (sessionStorage.getItem(KEY) !== "yes") setOpen(true); }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/80 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="disc-title">
      <div className="flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-xl bg-background shadow-2xl animate-in zoom-in-95">
        <h2 id="disc-title" className="border-b px-6 py-5 text-3xl text-primary">Disclaimer</h2>
        <ol className="flex-1 list-decimal space-y-3 overflow-y-auto px-10 py-5 text-sm leading-relaxed text-muted-foreground">
          {POINTS.map((p) => <li key={p}>{p}</li>)}
        </ol>
        <div className="border-t p-4">
          <button className="btn-primary w-full" onClick={() => { sessionStorage.setItem(KEY, "yes"); setOpen(false); }}>I AGREE {'>'}</button>
        </div>
      </div>
    </div>
  );
}
