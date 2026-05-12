import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { rooms } from "@/data/gallery";

export function RoomGallery() {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const room = rooms[active];

  return (
    <section className="bg-white px-6 py-20 md:px-16 md:py-24">
      <div className="section-label">Interior Tour</div>
      <h2 className="section-title mb-10">
        #Elevated<em>Living</em>
      </h2>

      <div className="mb-10 flex flex-wrap gap-0 border-b border-cream-dark">
        {rooms.map((r, i) => (
          <button
            key={r.name}
            onClick={() => setActive(i)}
            className={`border-b-2 px-5 py-3 text-[0.75rem] uppercase tracking-[0.14em] transition-colors ${
              i === active ? "border-forest text-forest" : "border-transparent text-ink-muted hover:text-forest"
            }`}
          >
            {r.name}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={room.name}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 gap-3 md:grid-cols-[1.4fr_1fr]"
        >
          <button onClick={() => setLightbox(room.imgs[0])} className="overflow-hidden rounded-[4px]">
            <img src={room.imgs[0]} alt={room.name} className="h-[480px] w-full cursor-zoom-in object-cover transition-transform duration-700 hover:scale-[1.03]" />
          </button>
          <div className="grid grid-rows-2 gap-3">
            {[room.imgs[1], room.imgs[2]].map((src) => (
              <button key={src} onClick={() => setLightbox(src)} className="overflow-hidden rounded-[4px]">
                <img src={src} alt={room.name} className="h-[230px] w-full cursor-zoom-in object-cover transition-transform duration-700 hover:scale-[1.04]" />
              </button>
            ))}
          </div>
          <div className="md:col-span-2 mt-6">
            <h3 className="font-display text-2xl text-forest">{room.sub}</h3>
            <p className="mt-2 max-w-3xl text-[0.9rem] leading-[1.75] text-ink-mid">{room.body}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-ink/80 p-6 backdrop-blur"
            onClick={() => setLightbox(null)}
          >
            <motion.img
              src={lightbox}
              alt="View"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-h-[90vh] max-w-[90vw] rounded object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
