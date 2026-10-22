import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { PageHero } from "@/components/site/FadeIn";
import { ImageSlot } from "@/components/site/ImageSlot";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/events")({
  head: () => seo("Our Office Events", "Photos from office events, legal awareness camps and celebrations at Vidya Charan Advocates, Bangalore."),
  component: Events,
});

const PHOTOS = ["Annual day", "Legal awareness camp", "Diwali celebration", "Team outing", "Law student workshop", "Office anniversary", "Client meet", "Kannada Rajyotsava", "Moot court session"].map((t, i) => `Event photo ${i + 1}: ${t}`);

function Events() {
  const [i, setI] = useState<number | null>(null);
  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (i === null) return; if (e.key === "Escape") setI(null); if (e.key === "ArrowRight") setI((i + 1) % PHOTOS.length); if (e.key === "ArrowLeft") setI((i - 1 + PHOTOS.length) % PHOTOS.length); };
    window.addEventListener("keydown", h); return () => window.removeEventListener("keydown", h);
  }, [i]);
  return (
    <>
      <PageHero title="Our Office Events" />
      <section className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-16 md:grid-cols-3">
        {PHOTOS.map((p, k) => (
          <button key={p} onClick={() => setI(k)} className="overflow-hidden rounded-xl transition-transform hover:scale-[1.02]" aria-label={`Open ${p}`}>
            <ImageSlot label={p} className="aspect-[4/3]" />
          </button>
        ))}
      </section>
      {i !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/90 p-4 animate-in fade-in" role="dialog" aria-modal="true" onClick={() => setI(null)}>
          <button aria-label="Close" className="absolute right-4 top-4 text-navy-foreground"><X className="h-8 w-8" /></button>
          <button aria-label="Previous" className="absolute left-4 text-navy-foreground" onClick={(e) => { e.stopPropagation(); setI((i - 1 + PHOTOS.length) % PHOTOS.length); }}><ChevronLeft className="h-10 w-10" /></button>
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-3xl"><ImageSlot label={PHOTOS[i]!} className="aspect-[4/3] rounded-xl" /></div>
          <button aria-label="Next" className="absolute right-4 text-navy-foreground" onClick={(e) => { e.stopPropagation(); setI((i + 1) % PHOTOS.length); }}><ChevronRight className="h-10 w-10" /></button>
        </div>
      )}
    </>
  );
}
