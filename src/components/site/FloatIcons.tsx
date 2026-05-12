import { site } from "@/data/site";

const icons = {
  call: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z",
  map: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z",
  whatsapp: "M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z",
  brochure: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z M14 2 V8 H20 M12 18 V12 M9 15 L12 18 L15 15",
  visit: "M3 4h18v18H3zM16 2v4M8 2v4M3 10h18",
  gallery: "M3 3h18v18H3z M8.5 8.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z M21 15l-5-5L5 21",
};

const items = [
  { href: site.phoneHref, label: "Call", d: icons.call },
  { href: site.maps, label: "Map", d: icons.map, ext: true },
  { href: "/gallery", label: "Gallery", d: icons.gallery },
  { href: "/contact", label: "Brochure", d: icons.brochure },
  { href: site.whatsapp, label: "WhatsApp", d: icons.whatsapp, ext: true },
  { href: "/contact", label: "Visit", d: icons.visit },
];

export function FloatIcons() {
  return (
    <div className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col overflow-hidden rounded-l-xl border border-r-0 border-sand/30 bg-white shadow-[-4px_0_28px_rgba(45,74,45,0.10)] md:flex">
      {items.map((it) => (
        <a
          key={it.label}
          href={it.href}
          target={it.ext ? "_blank" : undefined}
          rel={it.ext ? "noreferrer" : undefined}
          className="group relative flex h-14 w-14 flex-col items-center justify-center gap-[3px] border-b border-sand/15 transition-colors last:border-b-0 hover:bg-forest"
          title={it.label}
        >
          <span className="absolute left-0 top-[20%] bottom-[20%] w-0.5 rounded-r bg-gold opacity-0 transition-opacity group-hover:opacity-100" />
          <svg
            viewBox="0 0 24 24"
            className="h-[18px] w-[18px] stroke-forest transition-colors group-hover:stroke-cream"
            fill="none"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d={it.d} />
          </svg>
          <span className="text-[0.52rem] uppercase tracking-[0.08em] text-ink-muted transition-colors group-hover:text-cream">
            {it.label}
          </span>
        </a>
      ))}
    </div>
  );
}
