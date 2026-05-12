import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/SectionHeader";
import { FloorPlanViewer } from "@/components/sections/FloorPlanViewer";
import { FadeUp } from "@/components/site/Motion";
import { ContactBar } from "@/components/site/ContactBar";
import { specPreview, fullSpecs } from "@/data/floorPlans";

export const Route = createFileRoute("/floor-plans")({
  head: () => ({
    meta: [
      { title: "Floor Plans & Specs — Pura Vida Villas | EarthAroma" },
      { name: "description", content: "Interactive 3600 sq.ft. villa floor plans (G+2), site plan, and complete specification sheet — Italian marble, Duravit, Grohe, glass capsule lift." },
      { property: "og:title", content: "EarthAroma Floor Plans" },
      { property: "og:description", content: "Built to the finest detail — explore every plan and specification." },
    ],
  }),
  component: FloorPlansPage,
});

function FloorPlansPage() {
  return (
    <>
      <PageHeader label="Architecture" title={<>Floor <em>Plans</em></>} intro="Four configurations across G+2 plus a private terrace — explore every level." />
      <FloorPlanViewer />

      <section className="bg-earth px-6 py-24 md:px-16 text-cream">
        <div className="mx-auto max-w-6xl">
          <FadeUp>
            <div className="section-label" style={{ color: "var(--sand)" }}>Villa Specification</div>
            <h2 className="section-title text-cream">Built to the<br /><em>Finest Detail</em></h2>
            <p className="mt-6 max-w-2xl text-[0.92rem] leading-[1.8] text-sand-light/80">
              From Italian marble flooring and Duravit sanitary ware to concealed copper wiring and hydro-pneumatic plumbing — every specification reflects uncompromising quality.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {specPreview.map((s) => (
                <div key={s.label} className="flex items-start gap-3 rounded border border-sand/20 bg-white/5 p-4">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                  <div className="text-[0.78rem] leading-[1.5] text-sand-light/80">
                    <strong className="block text-[0.82rem] text-cream">{s.label}</strong>
                    {s.value}
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="bg-cream px-6 py-24 md:px-16">
        <div className="mx-auto max-w-5xl">
          <FadeUp>
            <div className="section-label">Full Specification</div>
            <h2 className="section-title mb-12">Complete <em>Spec Sheet</em></h2>
          </FadeUp>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {fullSpecs.map((sec, i) => (
              <FadeUp key={sec.title} delay={i * 0.04}>
                <div className="rounded bg-white p-6">
                  <div className="mb-3 border-b border-cream-dark pb-2 text-[0.72rem] uppercase tracking-[0.18em] text-forest">
                    {sec.title}
                  </div>
                  <ul className="space-y-2">
                    {sec.items.map((it) => (
                      <li key={it} className="relative pl-5 text-[0.82rem] leading-[1.6] text-ink-mid">
                        <span className="absolute left-0 top-0 text-gold">—</span>{it}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <ContactBar />
    </>
  );
}
