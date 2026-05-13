import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/site/Marquee";
import { ContactBar } from "@/components/site/ContactBar";
import { LifestyleQuote } from "@/components/site/LifestyleQuote";
import { FadeUp, Stagger, staggerItem } from "@/components/site/Motion";
import { motion } from "framer-motion";
import { features, igbc } from "@/data/features";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pura Vida Villas — EarthAroma | Eco-Luxury Villas in Bengaluru" },
      {
        name: "description",
        content:
          "IGBC Platinum certified 3600 sq.ft. eco-luxury villas. Biophilic design, lakeside serenity, 100% renewable energy at EarthAroma.",
      },
      { property: "og:title", content: "Pura Vida Villas — EarthAroma" },
      { property: "og:description", content: "Where Pure Life meets Elevated Living." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Marquee />

      {/* About teaser */}
      <section className="relative bg-white px-6 py-20 md:px-16 md:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <FadeUp className="relative h-[380px] sm:h-[450px] md:h-[520px]">
            <img
              src="/images/pura-vida-elevation.jpg"
              alt="Pura Vida villa"
              className="absolute right-0 top-0 h-[82%] w-[80%] rounded object-cover shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
              alt="Tropical garden"
              className="absolute bottom-0 left-0 h-[50%] w-[50%] rounded border-[4px] border-white object-cover shadow-xl md:border-[6px]"
            />
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="section-label">The Philosophy</div>
            <h2 className="section-title">
              The Art of
              <br />
              <em>Pure Living</em>
            </h2>
            <p className="my-6 border-l-2 border-gold-light pl-5 font-display text-lg italic text-gold">
              "Pura Vida — not just a phrase, but a way of being."
            </p>
            <p className="text-[0.93rem] leading-[1.85] text-ink-mid">
              In Costa Rica, <em>Pura Vida</em> represents the relaxed, active attitude toward life.
              At EarthAroma, we've translated this ethos into architecture, community, and
              lifestyle. Sustainability isn't a feature. Nature isn't an amenity. And luxury isn't
              an escape — it's simply home.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-3 xs:grid-cols-3">
              {[
                ["3600", "Sq.Ft. per Villa"],
                ["100%", "Renewable Energy"],
                ["G+2", "Floors + Terrace"],
              ].map(([n, l]) => (
                <div key={l} className="rounded bg-cream p-4 text-center">
                  <div className="font-display text-3xl text-forest">{n}</div>
                  <div className="mt-1 text-[0.66rem] uppercase tracking-[0.14em] text-ink-muted">
                    {l}
                  </div>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn-outline-forest mt-10 w-full text-center md:w-auto">
              Read Our Story
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* IGBC */}
      <section className="relative bg-forest px-6 py-20 md:px-16 md:py-24">
        <div
          className="absolute inset-x-0 top-0 h-1.5 opacity-40"
          style={{
            background:
              "repeating-linear-gradient(90deg, var(--gold) 0, var(--gold) 8px, transparent 8px, transparent 24px)",
          }}
        />
        <div className="mx-auto max-w-6xl">
          <FadeUp>
            <div className="section-label" style={{ color: "var(--forest-pale)" }}>
              Certification
            </div>
            <h2 className="section-title text-cream max-w-xl">
              What Makes an IGBC
              <br />
              <em>Platinum Home</em> Special?
            </h2>
          </FadeUp>
          <Stagger>
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {igbc.map((c) => (
                <motion.div
                  key={c.num}
                  variants={staggerItem}
                  className="rounded border border-forest-pale/10 bg-white/5 p-6 transition-all hover:bg-white/10"
                >
                  <div className="mb-3 font-display text-4xl font-light text-gold-light">
                    {c.num}
                  </div>
                  <div className="mb-1 text-[0.85rem] font-medium text-cream">{c.title}</div>
                  <div className="text-[0.78rem] leading-[1.65] text-forest-pale/70">{c.body}</div>
                </motion.div>
              ))}
            </div>
          </Stagger>
        </div>
      </section>

      {/* Features */}
      <section className="bg-cream px-6 py-24 md:px-16">
        <div className="mx-auto max-w-6xl">
          <FadeUp className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="section-label">Key Highlights</div>
              <h2 className="section-title">
                #RootedIn<em>Responsibility</em>
              </h2>
            </div>
            <Link to="/features" className="btn-outline-forest">
              All Features
            </Link>
          </FadeUp>
          <Stagger>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
              {features.map((f) => (
                <motion.div
                  key={f.title}
                  variants={staggerItem}
                  className="rounded border border-sand/30 bg-white p-6 transition-all hover:border-forest-light hover:shadow-[0_4px_24px_rgba(45,74,45,0.08)]"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-cream-dark bg-cream">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 stroke-forest"
                      fill="none"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={f.path} />
                    </svg>
                  </div>
                  <div className="text-[0.86rem] font-medium text-forest">{f.title}</div>
                  <div className="mt-1 text-[0.76rem] leading-[1.65] text-ink-muted">{f.body}</div>
                </motion.div>
              ))}
            </div>
          </Stagger>
        </div>
      </section>

      <LifestyleQuote />
      <ContactBar />
    </>
  );
}
