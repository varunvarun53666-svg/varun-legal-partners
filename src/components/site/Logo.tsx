import { Link } from "@tanstack/react-router";
import { Landmark } from "lucide-react";
import { ImageSlot } from "./ImageSlot";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Vidyacharan home">
      <ImageSlot label="Law office" className="hidden h-11 w-14 rounded sm:block" loading="eager" />
      <Landmark className={light ? "h-7 w-7 text-amber" : "h-7 w-7 text-primary"} aria-hidden />
      <div className="leading-tight">
        <div className={`font-display text-2xl font-bold tracking-[0.2em] ${light ? "text-navy-foreground" : "text-navy"}`}>VIDYACHARAN</div>
        <div className={`text-[11px] ${light ? "text-navy-foreground/70" : "text-muted-foreground"}`}>Advocates &amp; Legal Consultants</div>
      </div>
    </Link>
  );
}
