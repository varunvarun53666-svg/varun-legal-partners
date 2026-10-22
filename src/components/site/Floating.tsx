import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { TEL, WHATSAPP } from "@/lib/site";

export function FloatingButtons() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const f = () => setShow(window.scrollY > 400);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  const btn = "flex h-12 w-12 items-center justify-center rounded-full text-primary-foreground shadow-lg transition-transform hover:scale-110";
  const lbl = "mt-1 text-[10px] font-semibold text-navy bg-background/90 rounded px-1";
  return (
    <div className="fixed bottom-4 right-4 z-30 flex flex-col items-center gap-3">
      <a href={TEL} className="flex flex-col items-center" aria-label="Call us"><span className={`${btn} bg-call`}><Phone className="h-5 w-5" /></span><span className={lbl}>Call us</span></a>
      <a href={WHATSAPP} target="_blank" rel="noreferrer" className="flex flex-col items-center" aria-label="Chat with us on WhatsApp"><span className={`${btn} bg-chat`}><MessageCircle className="h-5 w-5" /></span><span className={lbl}>Chat with us</span></a>
      {show && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex flex-col items-center animate-in fade-in" aria-label="Scroll to top">
          <span className={`${btn} bg-muted-foreground`}><ArrowUp className="h-5 w-5" /></span><span className={lbl}>Top</span>
        </button>
      )}
    </div>
  );
}
