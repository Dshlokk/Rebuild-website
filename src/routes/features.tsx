import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/site/SectionHeader";
import { FadeUp, Stagger, staggerItem } from "@/components/site/Motion";
import { ContactBar } from "@/components/site/ContactBar";
import { features, igbc } from "@/data/features";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — Pura Vida Villas | Smart Eco-Luxury Homes" },
      { name: "description", content: "Vastu compliant, solar ready, biophilic, smart home automation, IGBC Platinum — every feature crafted for elevated, responsible living." },
      { property: "og:title", content: "EarthAroma Features" },
      { property: "og:description", content: "#RootedInResponsibility — every detail engineered for purpose." },
    ],
  }),
  component: FeaturesPage,
});

const stats = [
  { num: "3600", label: "Sq.Ft. per Villa" },
  { num: "100%", label: "Renewable Energy" },
  { num: "G+2", label: "Floors + Terrace" },
  { num: "5★", label: "IGBC Platinum" },
];

function FeaturesPage() {
  return (
    <>
      <PageHeader
        label="Key Highlights"
        title={<>#RootedIn<em>Responsibility</em></>}
        intro="Every feature reflects intent — from glass capsule lifts and smart automation to Vastu-aligned layouts and 100% renewable power."
      />

      <section className="bg-white px-6 py-20 md:px-16">
        <Stagger>
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={staggerItem}
                className="rounded border border-sand/30 bg-cream p-6 transition-all hover:-translate-y-1 hover:border-forest-light hover:shadow-[0_4px_24px_rgba(45,74,45,0.10)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-cream-dark bg-white">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-forest" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={f.path} />
                  </svg>
                </div>
                <div className="text-[0.9rem] font-medium text-forest">{f.title}</div>
                <div className="mt-1 text-[0.78rem] leading-[1.65] text-ink-muted">{f.body}</div>
              </motion.div>
            ))}
          </div>
        </Stagger>
      </section>

      <section className="bg-cream px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s, i) => (
            <FadeUp key={s.label} delay={i * 0.06}>
              <div className="rounded bg-white p-8 text-center">
                <div className="font-display text-5xl font-light text-forest">{s.num}</div>
                <div className="mt-2 text-[0.7rem] uppercase tracking-[0.16em] text-ink-muted">{s.label}</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="bg-forest px-6 py-24 md:px-16">
        <div className="mx-auto max-w-6xl">
          <FadeUp>
            <div className="section-label" style={{ color: "var(--forest-pale)" }}>Certification</div>
            <h2 className="section-title text-cream max-w-xl">IGBC <em>Platinum</em> — Pillar by Pillar</h2>
          </FadeUp>
          <Stagger>
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {igbc.map((c) => (
                <motion.div
                  key={c.num}
                  variants={staggerItem}
                  className="rounded border border-forest-pale/20 bg-white/5 p-6 transition-all hover:-translate-y-1 hover:bg-white/10"
                >
                  <div className="mb-3 font-display text-4xl font-light text-gold-light">{c.num}</div>
                  <div className="mb-1 text-[0.85rem] font-medium text-cream">{c.title}</div>
                  <div className="text-[0.78rem] leading-[1.65] text-forest-pale/70">{c.body}</div>
                </motion.div>
              ))}
            </div>
          </Stagger>
        </div>
      </section>

      <ContactBar />
    </>
  );
}
