import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { floorPlans } from "@/data/floorPlans";

export function FloorPlanViewer() {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);
  const plan = floorPlans[active];

  return (
    <section className="bg-cream px-6 py-20 md:px-16 md:py-24">
      <div className="section-label">Architecture</div>
      <h2 className="section-title mb-10">Floor Plan</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_2.5fr] md:items-start lg:gap-12">
        <div className="flex flex-col shadow-sm">
          {floorPlans.map((p, i) => (
            <button
              key={p.name}
              onClick={() => setActive(i)}
              className={`flex items-center justify-between border border-b-0 border-cream-dark px-6 py-4 text-left text-[0.82rem] transition-colors last:border-b md:px-5 md:py-3.5 ${
                i === active ? "bg-forest text-cream" : "bg-white text-ink-mid hover:text-forest"
              }`}
            >
              <span className="font-medium">{p.name}</span>
              <span className="opacity-60">→</span>
            </button>
          ))}
        </div>
        <div>
          <button
            onClick={() => setZoom(true)}
            className="group relative block w-full overflow-hidden rounded border border-cream-dark bg-white p-2 sm:p-4"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={plan.img}
                src={plan.img}
                alt={plan.name}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="w-full cursor-zoom-in transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </AnimatePresence>
            <div className="absolute bottom-4 right-4 rounded-full bg-forest/80 p-2 text-white opacity-0 transition-opacity group-hover:opacity-100 md:hidden">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>
          </button>
          <div className="mt-8 rounded bg-forest p-8 text-center md:mt-10 lg:p-10">
            <h4 className="font-display text-2xl text-cream mb-2">Detailed Specifications</h4>
            <p className="mb-6 text-[0.88rem] leading-[1.6] text-forest-pale/80">
              Get high-resolution floor plans with exact dimensions and material specifications sent
              to your WhatsApp.
            </p>
            <Link
              to="/contact"
              className="btn-primary inline-block w-full text-center md:w-auto px-10"
            >
              Download Brochure PDF
            </Link>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {zoom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoom(false)}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-ink/80 p-6 backdrop-blur"
          >
            <img
              src={plan.img}
              alt={plan.name}
              className="max-h-[90vh] max-w-[95vw] rounded bg-white object-contain p-2"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
