import { createFileRoute } from "@tanstack/react-router";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { PageHero } from "@/components/site/FadeIn";
import { FAQS } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () => seo("FAQ", "Answers to common questions about consultations, fees and working with Vidyacharan Advocates in Bangalore."),
  component: Faq,
});

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageHero title="Frequently Asked Questions" />
      <section className="mx-auto max-w-3xl space-y-4 px-4 py-16">
        {FAQS.map(([q, a], k) => (
          <div key={q} className="card-soft overflow-hidden">
            <button aria-expanded={open === k} onClick={() => setOpen(open === k ? null : k)} className="flex w-full items-center gap-4 p-5 text-left">
              <span className="font-display text-xl font-bold text-amber">{String(k + 1).padStart(2, "0")}</span>
              <span className="flex-1 font-semibold text-navy">{q}</span>
              {open === k ? <Minus className="h-5 w-5 text-primary" /> : <Plus className="h-5 w-5 text-primary" />}
            </button>
            {open === k && <p className="px-5 pb-5 pl-16 text-muted-foreground animate-in fade-in">{a}</p>}
          </div>
        ))}
      </section>
    </>
  );
}
