import { cn } from "@/lib/utils";
import { imageForLabel } from "@/lib/site-images";

export function ImageSlot({ label, className, loading = "lazy" }: { label: string; alt?: string; className?: string; loading?: "eager" | "lazy" }) {
  const image = imageForLabel(label);
  const banner = /banner|background/.test(label.toLowerCase());
  return (
    <picture className={cn("relative block overflow-hidden", className)}>
      {banner && <source media="(max-width: 767px)" srcSet={image.mobile} />}
      <img src={banner ? image.wide : image.card} alt={image.alt} width={banner ? 1920 : 960} height={banner ? 700 : 480} loading={loading} decoding="async" className="absolute inset-0 h-full w-full object-cover" />
    </picture>
  );
}
