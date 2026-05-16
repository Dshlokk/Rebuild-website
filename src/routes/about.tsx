import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/SectionHeader";
import { FadeUp } from "@/components/site/Motion";
import { ContactBar } from "@/components/site/ContactBar";
import { site } from "@/data/site";

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
        intro={
          <>
            Pura Vida — not just a phrase, but a way of being. At{" "}
            <a href={site.projectUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-forest transition-colors">
              {site.project}
            </a>
            , we've translated Costa Rica's relaxed, soulful ethos into architecture, community, and lifestyle.
          </>
        }
      />

      <section className="bg-white px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-16 md:grid-cols-2">
          <FadeUp>
            <img
              src="https://github.com/Dshlokk/Rebuild-website/raw/1992ba1f0a3950651255a4663bcb26c0bf11bd59/PURA%20VIDA%20ELEVATION.jpg.jpeg"
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
              As a signature project within the <a href={site.projectUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-forest transition-colors">{site.project}</a> ecosystem, Pura Vida Villas represents the pinnacle of our commitment to conscious living.
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

      {/* EarthAroma Section */}
      <section className="bg-white px-6 py-24 md:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
            <FadeUp>
              <div className="section-label">The Parent Project</div>
              <h2 className="section-title">
                The EarthAroma <em>Legacy</em>
              </h2>
              <div className="mt-8 space-y-6 text-[0.95rem] leading-[1.85] text-ink-mid">
                <p>
                  EarthAroma is more than a developer; it is a curator of conscious communities. With a focus on sustainable luxury and lakefront serenity, EarthAroma has set a new benchmark for residential living in North Bengaluru.
                </p>
                <p>
                  Every project under the EarthAroma banner is guided by the principle of "Life in Harmony." From the preservation of local flora to the integration of advanced renewable energy systems, we ensure that our impact on the earth is as beautiful as the homes we build.
                </p>
                <ul className="mt-6 space-y-4">
                  {[
                    "80+ Acres of Planned Development",
                    "Pioneers in IGBC Platinum Certification",
                    "Focus on Biophilic & Climate-Responsive Design",
                    "Commitment to 100% Water Neutrality"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-forest">
                      <div className="h-1.5 w-1.5 rounded-full bg-gold" />
                      <span className="text-[0.9rem] font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href={site.projectUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-outline-forest mt-4 inline-block"
                >
                  Visit EarthAroma Website →
                </a>
              </div>
            </FadeUp>

            <div className="grid grid-cols-2 gap-4">
              <FadeUp delay={0.1} className="space-y-4">
                <img
                  src="https://www.eartharoma.life/static/img/gallery/52.jpg"
                  alt="EarthAroma Landscape"
                  className="h-64 w-full rounded object-cover shadow-lg"
                />
                <img
                  src="https://www.eartharoma.life/static/img/gallery/51.jpg"
                  alt="EarthAroma Architecture"
                  className="h-48 w-full rounded object-cover shadow-lg"
                />
              </FadeUp>
              <FadeUp delay={0.2} className="mt-8 space-y-4">
                <img
                  src="https://www.eartharoma.life/static/img/gallery/53.jpg"
                  alt="EarthAroma Greenery"
                  className="h-48 w-full rounded object-cover shadow-lg"
                />
                <img
                  src="https://github.com/Dshlokk/Rebuild-website/raw/f9c956924e79b07b70ed962e9d399811d59a65d8/DJI_0713.JPG"
                  alt="EarthAroma Lakefront"
                  className="h-64 w-full rounded object-cover shadow-lg"
                />
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      <ContactBar />
    </>
  );
}
