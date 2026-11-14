import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Briefcase, Building2, ChevronDown, FileText, Gavel, Scale, Shield, CheckCircle2 } from "lucide-react";
import { FadeIn, PageHero } from "@/components/site/FadeIn";
import { ImageSlot } from "@/components/site/ImageSlot";
import { SERVICES_CONTENT, type ServiceGroup, type ServiceItem } from "@/lib/services-content";
import { FIRM_NAME, PRACTICE_AREAS } from "@/lib/site";
import { seo } from "@/lib/seo";

const ICONS = [Scale, FileText, Gavel, Shield, Building2, Briefcase];

export const Route = createFileRoute("/practice/$slug")({
  loader: ({ params }) => {
    const area = PRACTICE_AREAS.find((p) => p.slug === params.slug);
    if (!area) throw notFound();
    return area;
  },
  head: ({ loaderData }) => loaderData ? seo(`${loaderData.name} Lawyers`, `${loaderData.short} ${loaderData.name} advocates at ${FIRM_NAME}, Bangalore.`) : { meta: [{ title: "Practice area not found" }, { name: "robots", content: "noindex" }] },
  component: Practice,
});

function Practice() {
  const a = Route.useLoaderData();
  return (
    <>
      <PageHero title={a.name} label={`${a.name} banner image`} />
      <section className="mx-auto max-w-7xl px-4 pt-16">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr] lg:items-start">
          <FadeIn className="lg:col-start-1">
            <h2 className="text-3xl md:text-4xl">{a.name} Services</h2>
          </FadeIn>
          <FadeIn delay={120} className="lg:sticky lg:top-24 lg:col-start-2 lg:row-span-2">
            <ImageSlot label={`${a.name} services image`} className="aspect-[4/3] rounded-xl" />
          </FadeIn>
          <FadeIn className="lg:col-start-1">
            <ServicesContent slug={a.slug} highlights={a.highlights} />
          </FadeIn>
        </div>
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
      <div className="pb-20 text-center"><Link to="/appointment" className="btn-primary">Request a consultation</Link></div>
    </>
  );
}

function ItemText({ item }: { item: ServiceItem }) {
  if (typeof item === "string") return <>{item}</>;
  return <><strong className="font-semibold text-foreground">{item.lead}</strong> — {item.text}</>;
}

function ServicesContent({ slug, highlights }: { slug: string; highlights: string[] }) {
  const groups: ServiceGroup[] | undefined = SERVICES_CONTENT[slug];
  if (!groups) {
    return (
      <ul className="space-y-3 text-muted-foreground">
        {highlights.map((h) => <li key={h} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber" />{h}</li>)}
      </ul>
    );
  }
  let categoryIndex = 0;
  return (
    <div className="space-y-8">
      {groups.map((group, gi) => (
        <div key={group.title ?? gi} className="space-y-4">
          {group.title && (
            <h3 className="border-b-2 border-amber pb-2 text-2xl">{group.title}</h3>
          )}
          {group.categories.map((category) => {
            const isFirst = categoryIndex === 0;
            categoryIndex += 1;
            const TitleTag = group.title ? "h4" : "h3";
            return (
              <details key={category.title} open={isFirst} className="card-soft group p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 [&::-webkit-details-marker]:hidden">
                  <TitleTag className="text-lg md:text-xl">{category.title}</TitleTag>
                  <ChevronDown className="h-5 w-5 shrink-0 text-amber transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
                </summary>
                <ul className="mt-4 space-y-3 text-muted-foreground">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber" aria-hidden="true" />
                      <span><ItemText item={item} /></span>
                    </li>
                  ))}
                </ul>
              </details>
            );
          })}
        </div>
      ))}
    </div>
  );
}
