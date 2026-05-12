import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/SectionHeader";
import { FadeUp } from "@/components/site/Motion";
import { ContactBar } from "@/components/site/ContactBar";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Pura Vida Villas | EarthAroma" },
      { name: "description", content: "Discover the Pura Vida philosophy — eco-luxury living, biophilic design, and a Costa Rica-inspired way of being at EarthAroma in Bengaluru." },
      { property: "og:title", content: "About Pura Vida Villas" },
      { property: "og:description", content: "The art of pure living — sustainability, nature, and luxury, woven into home." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader
        label="The Philosophy"
        title={<>The Art of <em>Pure Living</em></>}
        intro="Pura Vida — not just a phrase, but a way of being. At EarthAroma, we've translated Costa Rica's relaxed, soulful ethos into architecture, community, and lifestyle."
      />

      <section className="bg-white px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-16 md:grid-cols-2">
          <FadeUp>
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
              alt="EarthAroma villa exterior"
              className="rounded object-cover"
            />
          </FadeUp>
          <FadeUp delay={0.1} className="space-y-6 text-[0.95rem] leading-[1.85] text-ink-mid">
            <p>
              In Costa Rica, <em>Pura Vida</em> means more than "pure life." It's a greeting, a reassurance, a way to
              brush off negativity. It is the calm in the morning and the warmth in the evening. It is the river of
              gratitude flowing through everyday moments.
            </p>
            <p>
              EarthAroma takes that ethos and makes it spatial. Tall ceilings invite breath. Native gardens invite
              pollinators. Biophilic geometry invites awe. Nothing here is decorative — every choice is rooted.
            </p>
            <p>
              Sustainability isn't a feature. Nature isn't an amenity. And luxury isn't an escape — it's home.
            </p>
            <Link to="/sustainability" className="btn-outline-forest mt-2 inline-block">Our Sustainability →</Link>
          </FadeUp>
        </div>
      </section>

      <section className="bg-sand-light px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-3">
          {[
            { num: "01", title: "Vision", body: "Eco-luxury homes that do more for the planet than they take from it." },
            { num: "02", title: "Community", body: "A neighborhood where every villa shares the same breathing landscape." },
            { num: "03", title: "Craft", body: "Italian marble, teakwood, biodynamic gardens — uncompromising materials, gently sourced." },
          ].map((c, i) => (
            <FadeUp key={c.num} delay={i * 0.08}>
              <div className="font-display text-5xl font-light text-gold">{c.num}</div>
              <h3 className="mt-3 font-display text-2xl text-forest">{c.title}</h3>
              <p className="mt-3 text-[0.9rem] leading-[1.8] text-ink-mid">{c.body}</p>
            </FadeUp>
          ))}
        </div>
      </section>

      <ContactBar />
    </>
  );
}
