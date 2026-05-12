import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/site/SectionHeader";
import { FadeUp, Stagger, staggerItem } from "@/components/site/Motion";
import { ContactBar } from "@/components/site/ContactBar";
import { sustainability } from "@/data/features";

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: "Sustainability — Pura Vida Villas | IGBC Platinum Eco-Homes" },
      { name: "description", content: "Rainwater harvesting, solar power, EV charging, passive cooling, zero waste — EarthAroma's sustainability commitments in detail." },
      { property: "og:title", content: "EarthAroma Sustainability" },
      { property: "og:description", content: "Smart + efficient homes. 100% renewable. IGBC Platinum certified." },
    ],
  }),
  component: SustainabilityPage,
});

function SustainabilityPage() {
  return (
    <>
      <PageHeader label="Eco Intelligence" title={<>Smart + Efficient <em>Homes</em></>} intro="Sustainability isn't a feature here — it's the operating system. Every system designed to give back more than it takes." />

      <section className="bg-sand-light px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2">
          <Stagger>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {sustainability.map((s) => (
                <motion.div key={s.title} variants={staggerItem} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-forest" />
                  <div>
                    <div className="text-[0.85rem] font-medium text-forest">{s.title}</div>
                    <div className="mt-1 text-[0.78rem] leading-[1.65] text-ink-mid">{s.body}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Stagger>
          <FadeUp delay={0.1} className="relative">
            <span className="pointer-events-none absolute -right-6 -top-10 font-display text-[clamp(7rem,14vw,12rem)] font-light leading-[0.9] text-forest opacity-[0.08]">
              100%
            </span>
            <img
              src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=900&q=80"
              alt="Lush green tropical"
              className="h-[420px] w-full rounded object-cover"
            />
            <div className="absolute -bottom-6 -left-6 max-w-[200px] rounded bg-forest p-5 text-cream">
              <div className="mb-1 text-[0.7rem] uppercase tracking-[0.14em] text-forest-pale">IGBC Status</div>
              <div className="font-display text-2xl text-gold-light">Platinum</div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="bg-white px-6 py-24 md:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { num: "100%", label: "Renewable" },
            { num: "0", label: "Carbon Footprint" },
            { num: "6500L", label: "Rainwater Harvest" },
            { num: "EV", label: "Charging Ready" },
          ].map((s, i) => (
            <FadeUp key={s.label} delay={i * 0.06}>
              <div className="rounded bg-cream p-8 text-center">
                <div className="font-display text-4xl text-forest">{s.num}</div>
                <div className="mt-2 text-[0.7rem] uppercase tracking-[0.16em] text-ink-muted">{s.label}</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <ContactBar />
    </>
  );
}
