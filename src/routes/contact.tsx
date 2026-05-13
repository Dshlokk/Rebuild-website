import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/site/SectionHeader";
import { FadeUp } from "@/components/site/Motion";
import { site } from "@/data/site";
import { saveLead } from "@/lib/leads";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Brochure — Pura Vida Villas | EarthAroma" },
      { name: "description", content: "Request the EarthAroma brochure pack, schedule a site visit, or talk to our sales team. Bengaluru — IGBC Platinum eco-villas." },
      { property: "og:title", content: "Contact Pura Vida Villas" },
      { property: "og:description", content: "We're just a call away." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [submitting, setSubmitting] = useState<"idle" | "sending" | "sent">("idle");

  return (
    <>
      <PageHeader label="Get In Touch" title={<>Schedule a <em>Site Visit</em></>} intro="Receive the full villa specification sheet, floor plans, pricing guide, and EarthAroma brochure — free, instantly." />

      <section className="bg-white px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-[1fr_1.1fr]">
          <FadeUp className="space-y-6">
            <div>
              <div className="section-label">Sales Office</div>
              <a href={site.phoneHref} className="block font-display text-3xl text-forest">{site.phone}</a>
            </div>
            <div>
              <div className="section-label">Location</div>
              <a href={site.maps} target="_blank" rel="noreferrer" className="font-display text-xl text-forest underline-offset-4 hover:underline">
                Eartharoma Lakefront Community →
              </a>
            </div>
            <div className="overflow-hidden rounded border border-cream-dark">
              <iframe
                title="Map"
                src="https://www.google.com/maps?q=Pura+Vida+Villas+at+Eartharoma+Lakefront+community&output=embed"
                className="h-72 w-full"
                loading="lazy"
              />
            </div>
          </FadeUp>

          <FadeUp delay={0.1} className="rounded-lg bg-cream p-8 md:p-10">
            <h3 className="font-display text-3xl text-forest">Get the Complete<br />Specification Sheet</h3>
            <p className="mt-2 text-[0.85rem] leading-[1.6] text-ink-muted">
              Receive the full villa spec sheet, floor plans, pricing guide, and EarthAroma brochure — free, instantly.
            </p>
            <div className="mt-6 flex items-start gap-3 rounded border border-dashed border-forest/20 bg-forest/[0.06] p-4">
              <span className="text-xl">🔒</span>
              <p className="text-[0.78rem] leading-[1.5] text-ink-mid">
                <strong>Inside the Brochure Pack:</strong> Complete spec sheet (7 categories) · 4 floor plans with dimensions · Pricing guide · Site map · Clubhouse details
              </p>
            </div>
            <form
              className="mt-6 space-y-4"
              onSubmit={async (e) => {
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
                  link.href = "https://github.com/Dshlokk/Rebuild-website/raw/25f762387a0e26bdd249ada4b78f8d3eceff13ad/EA-Villa-Brochure-3.pdf";
                  link.download = "Pura-Vida-Villa-Brochure.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                } catch (error) {
                  console.error("Failed to save lead:", error);
                  setSubmitting("idle");
                  alert("Something went wrong. Please try again.");
                }
              }}
            >
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Field label="First Name"><input name="firstName" required type="text" placeholder="Your name" className={inputCls} /></Field>
                <Field label="Phone Number"><input name="phone" required type="tel" placeholder="+91 00000 00000" className={inputCls} /></Field>
              </div>
              <Field label="Email Address"><input name="email" required type="email" placeholder="you@email.com" className={inputCls} /></Field>
              <Field label="I am a">
                <select name="type" required className={inputCls} defaultValue="">
                  <option value="" disabled>— Select —</option>
                  <option>End User / Buyer</option>
                  <option>Investor</option>
                  <option>NRI Buyer</option>
                  <option>Real Estate Consultant</option>
                </select>
              </Field>
              <label className="flex items-start gap-3 text-[0.75rem] leading-[1.5] text-ink-muted">
                <input name="consent" required type="checkbox" defaultChecked className="mt-1" />
                <span>I consent to being contacted by the Pura Vida Villas team via call or WhatsApp regarding this property.</span>
              </label>
              <button type="submit" className="btn-primary w-full text-center" disabled={submitting !== "idle"}>
                {submitting === "idle" && "Send Me the Brochure Pack →"}
                {submitting === "sending" && "✓ Sending…"}
                {submitting === "sent" && "✓ Brochure Request Sent!"}
              </button>
            </form>
            {submitting === "sent" && (
              <div className="mt-4 rounded border border-forest/20 bg-forest/5 p-4 text-center">
                <p className="text-sm text-forest">If your brochure didn't open automatically, click below:</p>
                <a 
                  href="https://github.com/Dshlokk/Rebuild-website/raw/25f762387a0e26bdd249ada4b78f8d3eceff13ad/EA-Villa-Brochure-3.pdf" 
                  download="Pura-Vida-Villa-Brochure.pdf"
                  target="_blank" 
                  rel="noreferrer" 
                  className="mt-2 inline-block font-medium text-forest underline underline-offset-4"
                >
                  Download Brochure PDF →
                </a>
              </div>
            )}
            <a href={site.whatsapp} target="_blank" rel="noreferrer" className="btn-outline-forest mt-4 block w-full text-center">
              Chat on WhatsApp
            </a>
          </FadeUp>
        </div>
      </section>
    </>
  );
}

const inputCls =
  "w-full rounded-[3px] border border-sand/40 bg-white px-4 py-3 text-[0.875rem] text-ink outline-none transition-colors focus:border-forest";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1.5 block text-[0.7rem] uppercase tracking-[0.1em] text-ink-mid">{label}</label>
      {children}
    </div>
  );
}
