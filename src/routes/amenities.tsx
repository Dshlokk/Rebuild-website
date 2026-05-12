import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/site/SectionHeader";
import { Stagger, staggerItem } from "@/components/site/Motion";
import { ContactBar } from "@/components/site/ContactBar";
import { LifestyleQuote } from "@/components/site/LifestyleQuote";
import { sportAmenities, wellnessAmenities } from "@/data/amenities";

export const Route = createFileRoute("/amenities")({
  head: () => ({
    meta: [
      { title: "Amenities — Pura Vida Villas | Lakeside Clubhouse & Wellness" },
      { name: "description", content: "Tennis, swimming, gym, lakeside walks, spa, gazebo and more — community amenities for athletes and seekers of serenity." },
      { property: "og:title", content: "EarthAroma Amenities" },
      { property: "og:description", content: "#LuxuryIsHome — discover community at EarthAroma." },
    ],
  }),
  component: AmenitiesPage,
});

function Grid({ title, items }: { title: string; items: { name: string; icon: string }[] }) {
  return (
    <div>
      <h3 className="mb-6 border-b border-cream-dark pb-3 font-display text-2xl text-forest">{title}</h3>
      <Stagger>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {items.map((a) => (
            <motion.div
              key={a.name}
              variants={staggerItem}
              className="group flex flex-col items-center gap-2 rounded bg-cream p-4 text-center transition-colors hover:bg-forest"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-forest-mid transition-colors group-hover:stroke-cream" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d={a.icon} />
              </svg>
              <div className="text-[0.7rem] tracking-[0.06em] text-ink-mid transition-colors group-hover:text-cream">
                {a.name}
              </div>
            </motion.div>
          ))}
        </div>
      </Stagger>
    </div>
  );
}

function AmenitiesPage() {
  return (
    <>
      <PageHeader label="Community" title={<>#Luxury Is <em>Home</em></>} intro="A lakeside clubhouse, biodynamic gardens, and spaces designed for wellness, sport, and slow evenings." />
      <section className="relative overflow-hidden bg-white px-6 py-20 md:px-16">
        <div className="pointer-events-none absolute -left-16 -top-16 h-80 w-80 rounded-full bg-forest-light/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 -bottom-16 h-80 w-80 rounded-full bg-forest/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2">
          <Grid title="Discover the Athlete in You" items={sportAmenities} />
          <Grid title="Dive into Serenity" items={wellnessAmenities} />
        </div>
      </section>
      <LifestyleQuote />
      <ContactBar />
    </>
  );
}
