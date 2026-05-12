import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md transition-all md:px-16 ${
        scrolled ? "bg-cream/95 shadow-[0_1px_24px_rgba(45,74,45,0.08)]" : "bg-cream/85"
      } border-b border-sand/20`}
    >
      <Link to="/" className="flex items-center gap-2.5">
        <img 
          src="/logo.png" 
          alt={site.name} 
          className="h-5 w-auto object-contain"
        />
      </Link>

      <div className="hidden items-center gap-9 md:flex">
        {navLinks.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="text-[0.8rem] uppercase tracking-[0.12em] text-ink-mid transition-colors hover:text-forest"
            activeProps={{ className: "text-forest" }}
          >
            {l.label}
          </Link>
        ))}
        <Link
          to="/contact"
          className="rounded-[2px] bg-forest px-5 py-2 text-[0.72rem] uppercase tracking-[0.14em] text-cream transition-colors hover:bg-earth"
        >
          Get Brochure
        </Link>
      </div>

      <button
        className="md:hidden text-forest"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full flex flex-col gap-1 border-b border-sand/20 bg-cream px-6 py-5 shadow-md md:hidden">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="py-2 text-[0.85rem] uppercase tracking-[0.12em] text-ink-mid"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-[2px] bg-forest px-5 py-2.5 text-center text-[0.72rem] uppercase tracking-[0.14em] text-cream"
          >
            Get Brochure
          </Link>
        </div>
      )}
    </nav>
  );
}
