import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink px-6 pb-8 pt-12 text-cream md:px-16">
      <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-12">
        <div>
          <img 
            src="/logo.png" 
            alt={site.name} 
            className="mb-4 h-10 w-auto object-contain brightness-0 invert"
          />
          <p className="text-[0.78rem] leading-[1.7] text-ink-muted">
            An eco-luxury community at {site.project}, inspired by the Costa Rican way of life. IGBC Platinum
            Certified. {site.location}.
          </p>
        </div>
        <FooterCol title="Explore" links={[
          { label: "About", to: "/about" },
          { label: "Features", to: "/features" },
          { label: "Gallery", to: "/gallery" },
          { label: "Amenities", to: "/amenities" },
        ]} />
        <FooterCol title="Information" links={[
          { label: "Floor Plans", to: "/floor-plans" },
          { label: "Sustainability", to: "/sustainability" },
          { label: "Brochure & Specs", to: "/contact" },
          { label: "Contact", to: "/contact" },
        ]} />
        <FooterCol title="Legal" links={[
          { label: "Privacy Policy", to: "/privacy" },
          { label: "Terms of Use", to: "/terms" },
          { label: "Disclaimer", to: "/disclaimer" },
        ]} />
      </div>
      <div className="flex flex-col items-start justify-between gap-2 border-t border-white/10 pt-6 text-[0.7rem] text-ink-muted md:flex-row md:items-center">
        <p>© 2025 {site.project} · {site.name}. All rights reserved. RERA Registered.</p>
        <p>Designed with intention. Built with purpose.</p>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <div>
      <div className="mb-4 text-[0.68rem] uppercase tracking-[0.18em] text-ink-muted">{title}</div>
      {links.map((l) => (
        <Link
          key={l.label}
          to={l.to}
          className="mb-2 block text-[0.82rem] text-cream/55 transition-colors hover:text-cream"
        >
          {l.label}
        </Link>
      ))}
    </div>
  );
}
