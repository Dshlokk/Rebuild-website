import { marqueeItems } from "@/data/site";

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div className="overflow-hidden bg-forest py-3.5">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.2em] text-forest-pale">
            <span className="h-1 w-1 rounded-full bg-gold" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
