import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const badges = [
  { icon: "🌿", strong: "IGBC Platinum", sub: "Certified Eco-Home" },
  { icon: "🏛️", strong: "Vastu Compliant", sub: "3600 Sq.Ft. Villas" },
  { icon: "☀️", strong: "100% Renewables", sub: "Zero Carbon Footprint" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden px-6 pb-20 pt-32 md:px-16 md:pb-24">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source
            src="https://github.com/Dshlokk/Rebuild-website/raw/c912205e97807635c6512317a623b037ea56f8cf/Banner%20Video%20stiched.mp4"
            type="video/mp4"
          />
        </video>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-bottom from-black/15 to-black/65" />
      </div>

      {/* leafy fringe top right */}
      <div className="pointer-events-none absolute right-0 top-20 z-[2] h-80 w-72 opacity-55">
        <svg viewBox="0 0 280 320" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="#4a7a3a" strokeWidth="1.2" opacity="0.6">
            <path d="M240,10 C220,40 180,60 200,120 C210,150 230,140 240,180" stroke="#3d6b3d" strokeWidth="2" />
            <ellipse cx="210" cy="65" rx="35" ry="14" fill="rgba(61,107,61,0.25)" transform="rotate(-30 210 65)" />
            <ellipse cx="225" cy="100" rx="30" ry="11" fill="rgba(61,107,61,0.2)" transform="rotate(-15 225 100)" />
            <ellipse cx="235" cy="140" rx="28" ry="10" fill="rgba(61,107,61,0.18)" transform="rotate(-5 235 140)" />
            <path d="M270,0 C260,30 245,50 255,90 C260,110 270,105 275,130" stroke="#2d4a2d" strokeWidth="1.5" opacity="0.7" />
            <ellipse cx="258" cy="45" rx="25" ry="9" fill="rgba(45,74,45,0.2)" transform="rotate(-40 258 45)" />
            <ellipse cx="265" cy="80" rx="22" ry="8" fill="rgba(45,74,45,0.15)" transform="rotate(-20 265 80)" />
          </g>
        </svg>
      </div>
      {/* leafy fringe bottom left */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-[2] h-56 w-52 opacity-45">
        <svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
          <g fill="none">
            <path d="M10,220 C20,190 40,170 25,130 C18,108 8,115 5,85" stroke="#6b9b6b" strokeWidth="2" opacity="0.8" />
            <ellipse cx="22" cy="165" rx="32" ry="12" fill="rgba(107,155,107,0.3)" transform="rotate(25 22 165)" />
            <ellipse cx="16" cy="130" rx="28" ry="10" fill="rgba(107,155,107,0.25)" transform="rotate(15 16 130)" />
            <path d="M50,220 C55,195 65,178 55,148 C50,132 40,137 38,112" stroke="#4a7a3a" strokeWidth="1.5" opacity="0.6" />
            <ellipse cx="53" cy="178" rx="26" ry="9" fill="rgba(61,107,61,0.22)" transform="rotate(20 53 178)" />
            <ellipse cx="47" cy="150" rx="22" ry="8" fill="rgba(61,107,61,0.18)" transform="rotate(10 47 150)" />
          </g>
        </svg>
      </div>

      {/* Badges (right) */}
      <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col gap-3 md:flex md:right-16 lg:right-24">
        {badges.map((b, i) => (
          <motion.div
            key={b.strong}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + i * 0.12, duration: 0.6 }}
            className="flex items-center gap-3 rounded-[2px] border border-sand/30 bg-cream/10 px-4 py-3 backdrop-blur-md"
          >
            <span className="text-xl">{b.icon}</span>
            <div className="text-[0.72rem] leading-snug tracking-[0.06em] text-white/85">
              <strong className="block font-medium text-white">{b.strong}</strong>
              {b.sub}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10">
        <motion.p {...fadeUp(0)} className="text-[0.75rem] uppercase tracking-[0.22em] text-gold-light">
          EarthAroma by Pura Vida Villas — Bengaluru
        </motion.p>
        <motion.h1
          {...fadeUp(0.1)}
          className="mt-5 max-w-[820px] font-display text-[clamp(3rem,7vw,6.5rem)] font-light leading-[1.05] tracking-[-0.01em] text-white"
        >
          Where <em className="not-italic font-light text-gold-light italic">Pure Life</em>
          <br />
          meets Elevated Living
        </motion.h1>
        <motion.p {...fadeUp(0.22)} className="mt-7 max-w-md text-[1rem] font-light leading-[1.7] text-white/70">
          An eco-luxury villa community inspired by the Costa Rican way of life. Biophilic design, lakeside serenity,
          and world-class sustainability — built for those who seek more.
        </motion.p>
        <motion.div {...fadeUp(0.34)} className="mt-10 flex flex-wrap items-center gap-4">
          <Link to="/gallery" className="btn-primary">Explore Villa</Link>
          <Link to="/contact" className="btn-ghost">Get Full Brochure</Link>
        </motion.div>
      </div>
    </section>
  );
}
