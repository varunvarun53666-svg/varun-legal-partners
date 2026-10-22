import { createFileRoute } from "@tanstack/react-router";
import { FadeIn, PageHero } from "@/components/site/FadeIn";
import { ImageSlot } from "@/components/site/ImageSlot";
import { TEAM } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/associates")({
  head: () => seo("Our Associates", "Meet the advocates at Varun, Bangalore, and the practice areas each of them leads."),
  component: () => (
    <>
      <PageHero title="Our Associates" subtitle="The advocates behind every case." />
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {TEAM.map((t, k) => (
          <FadeIn key={t.name} delay={k * 60}>
            <div className="card-soft overflow-hidden text-center hover:-translate-y-1">
              <ImageSlot label={`Photo of ${t.name}`} className="aspect-square" />
              <div className="p-5"><h3 className="text-lg">{t.name}</h3><p className="text-sm text-muted-foreground">{t.role}</p><p className="mt-2 inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium text-navy">{t.area}</p></div>
            </div>
          </FadeIn>
        ))}
      </section>
    </>
  ),
});
