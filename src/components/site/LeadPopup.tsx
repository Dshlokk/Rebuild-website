import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { saveLead } from "@/lib/leads";
import { site } from "@/data/site";
import { X } from "lucide-react";

export function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitting, setSubmitting] = useState<"idle" | "sending" | "sent">("idle");

  useEffect(() => {
    // Show popup after 3 seconds on every mount
    const timer = setTimeout(() => setIsOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting("sending");

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      type: formData.get("type") as string,
    };

    try {
      await saveLead({ data });
      setSubmitting("sent");

      // Trigger direct download
      const link = document.createElement("a");
      link.href =
        "https://github.com/Dshlokk/Rebuild-website/raw/e6e1b44fa9575edff3da4f31bb4f05a46668f2e6/EA-Villa-Brochure-3.pdf";
      link.download = "Pura-Vida-Villa-Brochure.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        closePopup();
      }, 2000);
    } catch (error) {
      console.error("Failed to save lead:", error);
      setSubmitting("idle");
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            onClick={closePopup}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md overflow-hidden rounded-lg bg-cream shadow-2xl"
          >
            <button
              onClick={closePopup}
              className="absolute right-4 top-4 text-ink-muted hover:text-forest transition-colors"
            >
              <X size={20} />
            </button>

            <div className="p-8 md:p-10">
              <div className="section-label">Limited Opportunity</div>
              <h3 className="font-display text-3xl text-forest mt-2">
                Get the Exclusive
                <br />
                Brochure Pack
              </h3>
              <p className="mt-3 text-[0.85rem] leading-[1.6] text-ink-muted">
                Join our priority list to receive the latest pricing, availability, and detailed
                floor plans instantly.
              </p>

              {submitting === "sent" ? (
                <div className="mt-8 py-6 text-center">
                  <div className="text-4xl mb-4">✅</div>
                  <h4 className="font-display text-2xl text-forest">Thank You!</h4>
                  <p className="text-sm text-ink-muted mt-2">Your request has been received.</p>

                  <div className="mt-6 rounded border border-forest/20 bg-forest/5 p-4">
                    <p className="text-[0.75rem] text-forest">
                      If your brochure didn't download automatically, click below:
                    </p>
                    <a
                      href="https://github.com/Dshlokk/Rebuild-website/raw/e6e1b44fa9575edff3da4f31bb4f05a46668f2e6/EA-Villa-Brochure-3.pdf"
                      download="Pura-Vida-Villa-Brochure.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-block text-[0.8rem] font-medium text-forest underline underline-offset-4"
                    >
                      Download Brochure PDF →
                    </a>
                  </div>

                  <button
                    onClick={closePopup}
                    className="mt-6 text-[0.7rem] uppercase tracking-widest text-ink-muted hover:text-forest transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <Field label="First Name">
                      <input
                        name="firstName"
                        required
                        type="text"
                        placeholder="Your name"
                        className={inputCls}
                      />
                    </Field>
                    <Field label="Phone Number">
                      <input
                        name="phone"
                        required
                        type="tel"
                        placeholder="+91 00000 00000"
                        className={inputCls}
                      />
                    </Field>
                  </div>
                  <Field label="Email Address">
                    <input
                      name="email"
                      required
                      type="email"
                      placeholder="you@email.com"
                      className={inputCls}
                    />
                  </Field>
                  <Field label="I am a">
                    <select name="type" required className={inputCls} defaultValue="">
                      <option value="" disabled>
                        — Select —
                      </option>
                      <option>End User / Buyer</option>
                      <option>Investor</option>
                      <option>NRI Buyer</option>
                      <option>Real Estate Consultant</option>
                    </select>
                  </Field>
                  <label className="flex items-start gap-3 text-[0.7rem] leading-[1.5] text-ink-muted">
                    <input
                      name="consent"
                      required
                      type="checkbox"
                      defaultChecked
                      className="mt-1"
                    />
                    <span>
                      I consent to being contacted by the Pura Vida Villas team via call or
                      WhatsApp.
                    </span>
                  </label>
                  <button
                    type="submit"
                    className="btn-primary w-full text-center"
                    disabled={submitting !== "idle"}
                  >
                    {submitting === "idle" && "Get Instant Access →"}
                    {submitting === "sending" && "✓ Sending…"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

const inputCls =
  "w-full rounded-[3px] border border-sand/40 bg-white px-4 py-2.5 text-[0.875rem] text-ink outline-none transition-colors focus:border-forest";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1 block text-[0.65rem] uppercase tracking-[0.1em] text-ink-mid">
        {label}
      </label>
      {children}
    </div>
  );
}
