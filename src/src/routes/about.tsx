import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, CheckCircle2, HeartHandshake, Scale, Users } from "lucide-react";
import { FadeIn, PageHero } from "@/components/site/FadeIn";
import { ImageSlot } from "@/components/site/ImageSlot";
import { PRACTICE_AREAS } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => seo("About Us", "Learn about Vidya Charan Advocates & Legal Consultants, a Bangalore law firm built on clear advice, careful preparation and client trust."),
  component: About,
});

function About() {
  return (
    <>
      <PageHero title="About Us" subtitle="Advocates & Legal Consultants in the heart of Bengaluru." />
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2">
        <FadeIn>
          <p className="section-title">Who we are</p>
          <h2 className="mt-2 text-3xl md:text-4xl">Practical legal counsel, explained simply</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">Founded in Bengaluru, Vidya Charan is a team of advocates who believe good legal work starts with listening. We take time to understand your situation, explain your options in plain language and stand with you from the first consultation to the final order.</p>
          <p className="mt-3 leading-relaxed text-muted-foreground">Our practice spans civil disputes, property, employment, digital, intellectual property, cross-border and arbitration matters for individuals, families and businesses.</p>
          <Link to="/appointment" className="btn-primary mt-6">Book a consultation</Link>
        </FadeIn>
        <ImageSlot label="Illustration: our firm" className="aspect-[4/3] rounded-xl" />
      </section>
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center"><p className="section-title">Why choose us</p><h2 className="mt-2 text-3xl">What sets us apart</h2></div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[[Award, "Experienced advocates", "Years of courtroom and advisory experience across Karnataka."], [HeartHandshake, "Client-first approach", "Honest advice, regular updates and transparent fees."], [Users, "Dedicated team", "Specialists who collaborate so nothing falls through the cracks."]].map(([I, t, d], k) => {
              const Icon = I as typeof Award;
              return <FadeIn key={t as string} delay={k * 100}><div className="card-soft h-full p-6 text-center"><Icon className="mx-auto h-10 w-10 text-amber" /><h3 className="mt-4 text-xl">{t as string}</h3><p className="mt-2 text-sm text-muted-foreground">{d as string}</p></div></FadeIn>;
            })}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center"><p className="section-title">Our services</p><h2 className="mt-2 text-3xl">Areas we handle</h2></div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRACTICE_AREAS.map((p, k) => (
            <FadeIn key={p.slug} delay={k * 60}>
              <Link to="/practice/$slug" params={{ slug: p.slug }} className="card-soft block h-full p-6 hover:-translate-y-1">
                <Scale className="h-8 w-8 text-primary" /><h3 className="mt-3 text-lg">{p.name}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">{p.services.slice(0, 3).map((s) => <li key={s.title} className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-amber" />{s.title}</li>)}</ul>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
