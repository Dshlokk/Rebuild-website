import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";

export function ContactBar() {
  return (
    <div className="relative overflow-hidden bg-cream-dark px-6 py-10 md:px-16">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-[300px] bg-cover bg-center opacity-[0.12]"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=60)" }}
      />
      <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <div className="section-label" style={{ marginBottom: ".3rem" }}>Talk to Us</div>
          <p className="font-display text-[1.4rem] text-forest">We're just a call away.</p>
        </div>
        <div className="flex flex-wrap gap-8">
          <ContactItem label="Sales Office" link={site.phone} href={site.phoneHref} />
          <ContactItem label="Location" link="Get Directions" href={site.maps} ext />
          <ContactItem label="Site Visits" link="Book a Tour" to="/contact" />
        </div>
        <Link to="/contact" className="btn-primary">Schedule a Site Visit</Link>
      </div>
    </div>
  );
}

function ContactItem({
  label, link, href, to, ext,
}: { label: string; link: string; href?: string; to?: string; ext?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] stroke-forest" fill="none" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
      </svg>
      <div className="text-[0.78rem] text-ink-mid">
        {label}
        <br />
        {to ? (
          <Link to={to} className="font-medium text-forest">{link}</Link>
        ) : (
          <a href={href} target={ext ? "_blank" : undefined} rel={ext ? "noreferrer" : undefined} className="font-medium text-forest">
            {link}
          </a>
        )}
      </div>
    </div>
  );
}
