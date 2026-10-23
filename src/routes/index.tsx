import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ImageSlot } from "@/components/site/ImageSlot";
import { FadeIn } from "@/components/site/FadeIn";
import { PRACTICE_AREAS, TEAM, TESTIMONIALS } from "@/lib/site";
import { seo } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => seo("Law Firm in Bangalore", "Vidyacharan Advocates & Legal Consultants: trusted Bangalore advocates for civil, property, employment, cyber, IP, international law and arbitration."),
  component: Home,
});

function useAuto(n: number, ms = 5000) {
  const [i, setI] = useState(0);
  useEffect(() => { const t = setInterval(() => setI((x) => (x + 1) % n), ms); return () => clearInterval(t); }, [n, ms, i]);
  return [i, setI] as const;
}

function Slider({ slides, className }: { slides: React.ReactNode[]; className?: string }) {
  const [i, setI] = useAuto(slides.length);
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${i * 100}%)` }}>
        {slides.map((s, k) => <div key={k} className="w-full shrink-0" aria-hidden={k !== i}>{s}</div>)}
      </div>
      <button aria-label="Previous slide" onClick={() => setI((i - 1 + slides.length) % slides.length)} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/90 p-2 shadow hover:bg-amber"><ChevronLeft className="h-5 w-5 text-navy" /></button>
      <button aria-label="Next slide" onClick={() => setI((i + 1) % slides.length)} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/90 p-2 shadow hover:bg-amber"><ChevronRight className="h-5 w-5 text-navy" /></button>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, k) => <button key={k} aria-label={`Go to slide ${k + 1}`} onClick={() => setI(k)} className={cn("h-2.5 rounded-full transition-all", k === i ? "w-7 bg-primary" : "w-2.5 bg-navy/30")} />)}
      </div>
    </div>
  );
}

function Counter({ to, label, suffix = "+" }: { to: number; label: string; suffix?: string }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e?.isIntersecting) return; io.disconnect();
      const start = performance.now();
      const step = (t: number) => { const p = Math.min(1, (t - start) / 1800); setV(Math.round(to * (1 - Math.pow(1 - p, 3)))); if (p < 1) requestAnimationFrame(step); };
      requestAnimationFrame(step);
    });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [to]);
  return <div ref={ref} className="text-center"><div className="font-display text-4xl font-bold text-amber md:text-5xl">{v.toLocaleString("en-IN")}{suffix}</div><div className="mt-2 text-sm text-navy-foreground/80">{label}</div></div>;
}

function BannerSlide({ name, alt }: { name: string; alt: string }) {
  return (
    <div className="w-full">
      <ImageSlot label={`${name} banner – desktop`} alt={alt} className="hidden aspect-[1920/700] w-full md:flex" />
      <ImageSlot label={`${name} banner – mobile`} alt={alt} className="aspect-[1080/1350] w-full md:hidden" />
    </div>
  );
}

function Home() {

  const slides = [
    ...PRACTICE_AREAS.map((p) => (
      <BannerSlide key={p.slug} name={p.name} alt={`${p.name} banner with the heading “${p.name}” and the tagline “${p.short}”.`} />
    )),
    <BannerSlide
      key="team"
      name="Our Team"
      alt="Team banner with the heading “Our Team, Your Advocates” and the line “Experienced advocates serving Bengaluru with care and clarity”."
    />,
  ];

  const [ti, setTi] = useAuto(TESTIMONIALS.length, 6000);

  return (
    <>
      <Slider slides={slides} />

      <section className="mx-auto max-w-7xl px-4 py-20">
        <FadeIn className="text-center"><p className="section-title">Our Expertise</p><h2 className="mt-2 text-3xl md:text-4xl">What we are expert at</h2></FadeIn>
        <div className="mt-10 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {PRACTICE_AREAS.map((p, k) => (
            <FadeIn key={p.slug} delay={k * 60}>
              <Link to="/practice/$slug" params={{ slug: p.slug }} className="card-soft group block overflow-hidden hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                <ImageSlot label={`${p.name} image`} className="aspect-[4/3]" />
                <div className="p-4"><h3 className="text-base group-hover:text-primary md:text-lg">{p.name}</h3><p className="mt-1 hidden text-sm text-muted-foreground sm:block">{p.short}</p></div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="relative">
        <ImageSlot label="About section background image" className="absolute inset-0" />
        <div className="relative bg-navy/80 px-4 py-20">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <p className="section-title">About Vidyacharan</p>
            <h2 className="mt-2 text-3xl text-navy-foreground md:text-4xl">Rooted in Bengaluru, focused on you</h2>
            <p className="mt-5 leading-relaxed text-navy-foreground/85">Vidyacharan Advocates &amp; Legal Consultants brings together advocates across civil, property, employment, digital and commercial law. We listen first, explain plainly and prepare thoroughly, so you can make informed decisions at every stage.</p>
            <Link to="/about" className="btn-secondary mt-8">About us</Link>
          </FadeIn>
        </div>
      </section>

      <section className="bg-navy py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-10 px-4 md:grid-cols-4">
          <Counter to={2500} label="Cases handled" /><Counter to={15} label="Years of service" /><Counter to={1800} label="Happy clients" /><Counter to={12} label="Advocates" />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 text-center">
        <p className="section-title">Testimonials</p><h2 className="mt-2 text-3xl md:text-4xl">What our clients say</h2>
        <div className="card-soft mt-10 p-8">
          <Quote className="mx-auto h-8 w-8 text-amber" aria-hidden />
          <p key={ti} className="mt-4 text-lg italic text-muted-foreground animate-in fade-in">“{TESTIMONIALS[ti]!.text}”</p>
          <p className="mt-5 font-display font-semibold text-navy">{TESTIMONIALS[ti]!.name}</p>
          <p className="text-xs text-muted-foreground">{TESTIMONIALS[ti]!.date}</p>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {TESTIMONIALS.map((_, k) => <button key={k} aria-label={`Testimonial ${k + 1}`} onClick={() => setTi(k)} className={cn("h-2.5 rounded-full transition-all", k === ti ? "w-7 bg-primary" : "w-2.5 bg-navy/30")} />)}
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center"><p className="section-title">Our Team</p><h2 className="mt-2 text-3xl md:text-4xl">Meet our advocates</h2></div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.slice(0, 4).map((t, k) => (
              <FadeIn key={t.name} delay={k * 80}>
                <Link to="/associates" className="card-soft block overflow-hidden text-center hover:-translate-y-1">
                  <ImageSlot label={`Photo of ${t.name}`} className="aspect-square" />
                  <div className="p-4"><h3 className="text-lg">{t.name}</h3><p className="text-sm text-muted-foreground">{t.role}</p></div>
                </Link>
              </FadeIn>
            ))}
          </div>
          <div className="mt-10 text-center"><Link to="/associates" className="btn-outline">View all associates</Link></div>
        </div>
      </section>
    </>
  );
}
