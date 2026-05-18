import { motion } from "framer-motion";
import { reviews } from "@/data/reviews";
import { FadeUp } from "@/components/site/Motion";

export function GoogleReviews() {
  // Triple the reviews for a truly seamless loop
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section className="bg-sand-light/30 py-24 border-t border-cream-dark overflow-hidden">
      <div className="px-6 md:px-16 mb-16">
        <FadeUp className="text-center">
          <div className="section-label mx-auto">Testimonials</div>
          <h2 className="section-title mt-4">
            Voice of the <em>Community</em>
          </h2>
          <p className="mt-4 text-ink-muted text-[0.95rem]">
            Join the families who have already found their peace at EarthAroma.
          </p>
        </FadeUp>
      </div>

      <div className="relative flex overflow-hidden py-10">
        <motion.div
          animate={{
            x: [0, -2500], // Adjust this value based on card width + gap
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-6 whitespace-nowrap"
        >
          {duplicatedReviews.map((r, i) => (
            <div
              key={`${r.name}-${i}`}
              className="inline-block w-[300px] md:w-[380px] shrink-0 bg-white p-8 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-cream-dark hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-shadow duration-500 whitespace-normal"
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
              <div className="flex items-center gap-4">
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
            </div>
          ))}
        </motion.div>
      </div>

      <FadeUp delay={0.4} className="mt-16 text-center px-6">
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
    </section>
  );
}
