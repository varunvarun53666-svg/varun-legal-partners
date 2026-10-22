import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function FadeIn({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e?.isIntersecting) { el.classList.add("is-visible"); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={cn("fade-up", className)} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export function PageHero({ title, subtitle, label }: { title: string; subtitle?: string; label?: string }) {
  return (
    <section className="relative">
      <div className="h-48 w-full bg-slot md:h-64" role="img" aria-label={label ?? `${title} banner image`} />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-navy/70 px-4 text-center">
        <h1 className="text-3xl text-navy-foreground md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-navy-foreground/85">{subtitle}</p>}
      </div>
    </section>
  );
}
