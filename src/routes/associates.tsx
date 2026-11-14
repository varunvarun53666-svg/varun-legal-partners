import { createFileRoute } from "@tanstack/react-router";
import { FadeIn, PageHero } from "@/components/site/FadeIn";
import { ImageSlot } from "@/components/site/ImageSlot";
import { FIRM_NAME, TEAM } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/associates")({
  head: () => seo("Our Associates", `Meet the advocates at ${FIRM_NAME}, Bangalore, and the practice areas each of them leads.`),
  component: () => (
    <>
      <PageHero title="Our Associates" subtitle="The advocates behind every case." />
      <section className="mx-auto grid max-w-5xl gap-6 px-4 py-16 sm:grid-cols-3">
        {TEAM.map((t, k) => (
          <FadeIn key={t.name || `team-placeholder-${k}`} delay={k * 60}>
            {t.placeholder ? (
              <div className="card-soft overflow-hidden text-center" aria-hidden>
                <div className="aspect-square border-2 border-dashed border-navy/20 bg-muted/40" />
                <div className="p-5"><h3 className="text-lg">&nbsp;</h3><p className="text-sm">&nbsp;</p><p className="mt-2 inline-block rounded-full px-3 py-1 text-xs">&nbsp;</p></div>
              </div>
            ) : (
              <div className="card-soft overflow-hidden text-center hover:-translate-y-1">
                <ImageSlot label={`Photo of ${t.name}`} className="aspect-square" />
                <div className="p-5"><h3 className="text-lg">{t.name}</h3><p className="text-sm text-muted-foreground">{t.role}</p><p className="mt-2 inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium text-navy">{t.area}</p></div>
              </div>
            )}
          </FadeIn>
        ))}
      </section>
    </>
  ),
});
