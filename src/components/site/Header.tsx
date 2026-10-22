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
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button aria-expanded={open} onClick={() => setOpen((o) => !o)}
        className={cn("flex items-center gap-1 py-2 font-medium transition-colors hover:text-amber", active ? "text-amber" : "text-navy")}>
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
  useEffect(() => { setMobile(false); }, [path]);

  const top = (to: string, label: string) => (
    <Link to={to as never} className={cn("py-2 font-medium transition-colors hover:text-amber", path === to ? "text-amber" : "text-navy")}>{label}</Link>
  );

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {top("/", "Home")}
          {top("/appointment", "Appointment")}
          <Dropdown label="Practice Areas" items={practiceLinks} active={path.startsWith("/practice")} />
          <Dropdown label="More" items={moreLinks} active={moreLinks.some((m) => path.startsWith(m.to))} />
          {top("/contact", "Contact us")}
        </nav>
        <button className="lg:hidden" aria-label="Open menu" onClick={() => setMobile(true)}><Menu className="h-7 w-7 text-navy" /></button>
      </div>

      {mobile && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-background animate-in fade-in lg:hidden">
          <div className="flex h-20 items-center justify-between border-b px-4">
            <Logo />
            <button aria-label="Close menu" onClick={() => setMobile(false)}><X className="h-7 w-7 text-navy" /></button>
          </div>
          <nav className="flex flex-col px-6 py-4 text-lg" aria-label="Mobile">
            <Link to="/" className={cn("border-b py-4", path === "/" ? "text-amber" : "text-navy")}>Home</Link>
            <Link to="/appointment" className={cn("border-b py-4", path === "/appointment" ? "text-amber" : "text-navy")}>Appointment</Link>
            {[["Practice Areas", practiceLinks], ["More", moreLinks]].map(([label, items]) => {
              const l = label as string; const open = section === l;
              return (
                <div key={l} className="border-b">
                  <button className="flex w-full items-center justify-between py-4 text-navy" aria-expanded={open} onClick={() => setSection(open ? null : l)}>
                    {l}<ChevronDown className={cn("h-5 w-5 transition-transform", open && "rotate-180")} />
                  </button>
                  {open && (
                    <div className="pb-3 pl-3">
                      {(items as typeof moreLinks).map((i) => (
                        <Link key={i.to} to={i.to as never} activeProps={{ className: "text-amber" }} className="block py-2 text-base text-muted-foreground">{i.label}</Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <Link to="/contact" className={cn("border-b py-4", path === "/contact" ? "text-amber" : "text-navy")}>Contact us</Link>
            <Link to="/appointment" className="btn-primary mt-6">Book a consultation</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
