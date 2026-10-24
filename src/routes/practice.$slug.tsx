import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Briefcase, Building2, FileText, Gavel, Scale, Shield, CheckCircle2 } from "lucide-react";
import { FadeIn, PageHero } from "@/components/site/FadeIn";
import { ImageSlot } from "@/components/site/ImageSlot";
import { PRACTICE_AREAS } from "@/lib/site";
import { seo } from "@/lib/seo";

const ICONS = [Scale, FileText, Gavel, Shield, Building2, Briefcase];

export const Route = createFileRoute("/practice/$slug")({
  loader: ({ params }) => {
    const area = PRACTICE_AREAS.find((p) => p.slug === params.slug);
    if (!area) throw notFound();
    return area;
  },
  head: ({ loaderData }) => loaderData ? seo(`${loaderData.name} Lawyers`, `${loaderData.short} ${loaderData.name} advocates at Vidyacharan, Bangalore.`) : { meta: [{ title: "Practice area not found" }, { name: "robots", content: "noindex" }] },
  component: Practice,
});

function Practice() {
  const a = Route.useLoaderData();
  return (
    <>
      <PageHero title={a.name} label={`${a.name} banner image`} />
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 pt-16 lg:grid-cols-2">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl">{a.name} Services</h2>
          <ul className="mt-6 space-y-3 text-muted-foreground">
            {a.highlights.map((h) => <li key={h} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber" />{h}</li>)}
          </ul>
        </FadeIn>
        <FadeIn delay={120}>
          <ImageSlot label={`${a.name} services image`} className="aspect-[4/3] rounded-xl" />
        </FadeIn>
      </section>
      <section className="mx-auto max-w-3xl px-4 pt-16 text-center">
        <p className="section-title">Practice Area</p>
        <h2 className="mt-2 text-3xl md:text-4xl">How we help with {a.name}</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">{a.intro}</p>
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:grid-cols-2 lg:grid-cols-3">
        {a.services.map((s, k) => {
          const Icon = ICONS[k % ICONS.length]!;
          return (
            <FadeIn key={s.title} delay={k * 80}>
              <div className="card-soft h-full p-6 hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent"><Icon className="h-6 w-6 text-primary" /></div>
                <h3 className="mt-4 text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <ul className="mt-4 space-y-2 text-sm">{s.bullets.map((b) => <li key={b} className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-amber" />{b}</li>)}</ul>
              </div>
            </FadeIn>
          );
        })}
      </section>
      <div className="pb-20 text-center"><Link to="/appointment" className="btn-primary">Book a consultation</Link></div>
    </>
  );
}
