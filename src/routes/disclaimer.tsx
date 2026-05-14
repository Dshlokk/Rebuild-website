import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/SectionHeader";
import { FadeUp } from "@/components/site/Motion";
import { ContactBar } from "@/components/site/ContactBar";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — Pura Vida Villas | EarthAroma" },
      { name: "description", content: "Legal disclaimer for Pura Vida Villas. All information provided is for informational purposes and is subject to change." },
    ],
  }),
  component: Disclaimer,
});

function Disclaimer() {
  return (
    <>
      <PageHeader
        label="Legal"
        title={<>Legal <em>Disclaimer</em></>}
        intro="The information provided on this website is for general informational purposes only and does not constitute a legal offer or contract."
      />

      <section className="bg-white px-6 py-20 md:px-16">
        <div className="mx-auto max-w-4xl space-y-10 text-ink-mid">
          <FadeUp className="space-y-4">
            <h2 className="font-display text-2xl text-forest">Nature of Information</h2>
            <p className="text-[0.95rem] leading-[1.8]">
              The content, including images, floor plans, and specifications, are intended for artistic and illustrative purposes and are subject to change without notice. These materials represent the developer's intent and may vary in the final delivery.
            </p>
          </FadeUp>

          <FadeUp delay={0.1} className="space-y-4">
            <h2 className="font-display text-2xl text-forest">RERA Registration</h2>
            <p className="text-[0.95rem] leading-[1.8]">
              Pura Vida Villas / EarthAroma is a RERA-registered project. For official documentation and registered details, please refer to the Karnataka RERA portal using our project registration number.
            </p>
          </FadeUp>

          <FadeUp delay={0.15} className="space-y-4">
            <h2 className="font-display text-2xl text-forest">Accuracy of Content</h2>
            <p className="text-[0.95rem] leading-[1.8]">
              While we strive to ensure the accuracy of the information presented on this website, Pura Vida Villas makes no warranties or representations as to its accuracy and assumes no liability for any errors or omissions in the content.
            </p>
          </FadeUp>

          <FadeUp delay={0.2} className="space-y-4">
            <h2 className="font-display text-2xl text-forest">Third-Party Links</h2>
            <p className="text-[0.95rem] leading-[1.8]">
              Our website may contain links to third-party websites. These links are provided for convenience only. We have no control over the content of these sites and do not endorse or accept responsibility for them.
            </p>
          </FadeUp>

          <FadeUp delay={0.25} className="space-y-4">
            <h2 className="font-display text-2xl text-forest">Contact for Clarification</h2>
            <p className="text-[0.95rem] leading-[1.8]">
              Prospective buyers are advised to verify all information with our authorized sales representatives before making any booking or purchasing decisions.
            </p>
          </FadeUp>
        </div>
      </section>

      <ContactBar />
    </>
  );
}
