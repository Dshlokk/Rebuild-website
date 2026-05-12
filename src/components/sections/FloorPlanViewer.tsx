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
      <h2 className="section-title mb-12">Floor Plan</h2>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.3fr_1fr] md:items-start">
        <div className="flex flex-col">
          {floorPlans.map((p, i) => (
            <button
              key={p.name}
              onClick={() => setActive(i)}
              className={`flex items-center justify-between border border-b-0 border-cream-dark px-6 py-4 text-left text-[0.85rem] transition-colors last:border-b ${
                i === active ? "bg-forest text-cream" : "bg-white text-ink-mid hover:text-forest"
              }`}
            >
              <span>{p.name}</span>
              <span>→</span>
            </button>
          ))}
        </div>
        <div>
          <button onClick={() => setZoom(true)} className="block w-full overflow-hidden rounded border border-cream-dark">
            <AnimatePresence mode="wait">
              <motion.img
                key={plan.img}
                src={plan.img}
                alt={plan.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full cursor-zoom-in"
              />
            </AnimatePresence>
          </button>
          <div className="mt-6 rounded bg-forest p-6 text-center">
            <p className="mb-3 text-[0.82rem] leading-[1.5] text-forest-pale">
              Get a clear, high-resolution copy of all floor plans with detailed room dimensions sent directly to you.
            </p>
            <Link to="/contact" className="btn-primary block w-full text-center">Download All Floor Plans</Link>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {zoom && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setZoom(false)}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-ink/80 p-6 backdrop-blur"
          >
            <img src={plan.img} alt={plan.name} className="max-h-[90vh] max-w-[95vw] rounded bg-white object-contain p-2" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
