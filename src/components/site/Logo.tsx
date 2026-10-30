import { Link } from "@tanstack/react-router";
import { Landmark } from "lucide-react";
import { FIRM_NAME } from "@/lib/site";
import { ImageSlot } from "./ImageSlot";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2" aria-label={`${FIRM_NAME} home`}>
      <ImageSlot label="Law office" className="hidden h-11 w-10 rounded sm:block" loading="eager" />
      <Landmark className={light ? "h-7 w-7 text-amber" : "h-7 w-7 text-primary"} aria-hidden />
      <div className="leading-tight">
        <div className={`whitespace-nowrap font-display text-[13px] font-bold tracking-normal lg:text-base ${light ? "text-navy-foreground" : "text-navy"}`}>{FIRM_NAME.toUpperCase()}</div>
        <div className={`text-[11px] ${light ? "text-navy-foreground/70" : "text-muted-foreground"}`}>Advocates &amp; Legal Consultants</div>
      </div>
    </Link>
  );
}
