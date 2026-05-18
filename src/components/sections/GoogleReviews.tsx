import { motion } from "framer-motion";
import { reviews } from "@/data/reviews";
import { FadeUp, Stagger, staggerItem } from "./Motion";

export function GoogleReviews() {
  return (
    <section className="bg-sand-light/30 px-6 py-24 md:px-16 border-t border-cream-dark">
      <div className="mx-auto max-w-6xl">
        <FadeUp className="text-center mb-16">
          <div className="section-label mx-auto">Testimonials</div>
          <h2 className="section-title mt-4">
            Voice of the <em>Community</em>
          </h2>
          <p className="mt-4 text-ink-muted text-[0.95rem]">
            Join the families who have already found their peace at EarthAroma.
          </p>
        </FadeUp>

        <Stagger>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((r, i) => (
              <motion.div
                key={r.name}
                variants={staggerItem}
                className="group relative bg-white p-8 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-cream-dark hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-500"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-8 text-gold/20 font-display text-6xl leading-none select-none">
                  “
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(r.rating)].map((_, i) => (
                    <svg
                      key={i}
                      viewBox="0 0 24 24"
                      className="h-4 w-4 fill-gold text-gold"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>

                {/* Review Body */}
                <p className="text-[0.88rem] leading-[1.7] text-ink-mid italic mb-8 relative z-10">
                  "{r.body}"
                </p>

                {/* Author Info */}
                <div className="mt-auto flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-cream-dark flex items-center justify-center font-display text-forest font-medium text-lg uppercase shadow-inner">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-[0.82rem] font-medium text-forest uppercase tracking-wider">
                      {r.name}
                    </div>
                    <div className="text-[0.7rem] text-ink-muted">
                      {r.date}
                    </div>
                  </div>
                </div>

                {/* Hover Line Animation */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </Stagger>

        <FadeUp delay={0.4} className="mt-16 text-center">
          <a
            href="https://share.google/z61vL9yZFJmY53uvK"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 text-forest font-medium text-[0.9rem] hover:text-gold transition-colors"
          >
            <span>Read more reviews on Google</span>
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-current transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
            </svg>
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
