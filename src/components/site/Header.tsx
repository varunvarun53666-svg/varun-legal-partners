import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { MORE_LINKS, PRACTICE_AREAS } from "@/lib/site";
import { cn } from "@/lib/utils";

const practiceLinks = PRACTICE_AREAS.map((p) => ({ to: `/practice/${p.slug}`, label: p.name }));
const moreLinks = MORE_LINKS.map((m) => ({ to: m.to as string, label: m.label }));

function Dropdown({ label, items, active }: { label: string; items: { to: string; label: string }[]; active: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const h = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false); };
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", h);
    document.addEventListener("keydown", k);
    return () => { document.removeEventListener("mousedown", h); document.removeEventListener("keydown", k); };
  }, []);
  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button aria-expanded={open} aria-haspopup="true" onClick={() => setOpen((o) => !o)}
        className={cn("flex min-h-11 items-center gap-1 py-2 font-medium transition-colors hover:text-amber", active ? "text-amber" : "text-navy")}>
        {label}<ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <div className="absolute right-0 top-full z-50 w-72 pt-2">
          <div className="card-soft animate-in fade-in slide-in-from-top-2 py-2">
            {items.map((i) => (
              <Link key={i.to} to={i.to as never} onClick={() => setOpen(false)} activeProps={{ className: "text-amber" }}
                className="block px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent hover:text-amber">{i.label}</Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function Header() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [mobile, setMobile] = useState(false);
  const [section, setSection] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => { setMobile(false); setSection(null); }, [path]);
  useEffect(() => {
    if (!mobile) return;
    const h = (e: MouseEvent | TouchEvent) => { if (!headerRef.current?.contains(e.target as Node)) setMobile(false); };
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") setMobile(false); };
    document.addEventListener("mousedown", h);
    document.addEventListener("touchstart", h);
    document.addEventListener("keydown", k);
    return () => {
      document.removeEventListener("mousedown", h);
      document.removeEventListener("touchstart", h);
      document.removeEventListener("keydown", k);
    };
  }, [mobile]);

  const close = () => setMobile(false);
  const top = (to: string, label: string) => (
    <Link to={to as never} className={cn("flex min-h-11 items-center py-2 font-medium transition-colors hover:text-amber", path === to ? "text-amber" : "text-navy")}>{label}</Link>
  );
  const mLink = (to: string, label: string) => (
    <Link to={to as never} onClick={close} className={cn("flex min-h-11 items-center border-b py-3", path === to ? "text-amber" : "text-navy")}>{label}</Link>
  );

  return (
    <header ref={headerRef} className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4">
        <div className="shrink-0 md:max-lg:origin-left md:max-lg:scale-90"><Logo /></div>
        <nav className="hidden items-center gap-4 whitespace-nowrap text-sm md:flex lg:gap-7 lg:text-base" aria-label="Main">
          {top("/", "Home")}
          {top("/appointment", "Appointment")}
          <Dropdown label="Practice Areas" items={practiceLinks} active={path.startsWith("/practice")} />
          <Dropdown label="More" items={moreLinks} active={moreLinks.some((m) => path.startsWith(m.to))} />
          {top("/contact", "Contact us")}
        </nav>
        <button className="flex h-11 w-11 items-center justify-center md:hidden" aria-label={mobile ? "Close menu" : "Open menu"}
          aria-expanded={mobile} aria-controls="mobile-menu" onClick={() => setMobile((m) => !m)}>
          {mobile ? <X className="h-7 w-7 text-navy" /> : <Menu className="h-7 w-7 text-navy" />}
        </button>
      </div>

      {mobile && (
        <div id="mobile-menu" className="absolute inset-x-0 top-full z-50 max-h-[calc(100vh-5rem)] overflow-y-auto rounded-b-2xl bg-background shadow-lg animate-in fade-in slide-in-from-top-2 md:hidden">
          <nav className="flex flex-col px-6 py-2 text-lg" aria-label="Mobile">
            {mLink("/", "Home")}
            {mLink("/appointment", "Appointment")}
            {([["Practice Areas", practiceLinks], ["More", moreLinks]] as const).map(([l, items]) => {
              const open = section === l;
              const id = `mobile-${l.replace(/\s+/g, "-").toLowerCase()}`;
              return (
                <div key={l} className="border-b">
                  <button className="flex min-h-11 w-full items-center justify-between py-3 text-navy" aria-expanded={open} aria-controls={id}
                    onClick={() => setSection(open ? null : l)}>
                    {l}<ChevronDown className={cn("h-5 w-5 transition-transform", open && "rotate-180")} />
                  </button>
                  {open && (
                    <div id={id} className="pb-2 pl-3">
                      {items.map((i) => (
                        <Link key={i.to} to={i.to as never} onClick={close} activeProps={{ className: "text-amber" }}
                          className="flex min-h-11 items-center text-base text-muted-foreground">{i.label}</Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            {mLink("/contact", "Contact us")}
            <Link to="/appointment" onClick={close} className="btn-primary my-5">Book a consultation</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
