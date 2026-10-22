import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ImageSlot({ label, className }: { label: string; className?: string }) {
  return (
    <div role="img" aria-label={label} className={cn("flex flex-col items-center justify-center gap-2 bg-slot text-muted-foreground", className)}>
      <ImageIcon className="h-6 w-6 opacity-60" aria-hidden />
      <span className="px-2 text-center text-xs font-medium">{label}</span>
    </div>
  );
}
