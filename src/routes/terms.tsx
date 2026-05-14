import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/SectionHeader";
import { FadeUp } from "@/components/site/Motion";
import { ContactBar } from "@/components/site/ContactBar";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — Pura Vida Villas | EarthAroma" },
      { name: "description", content: "Terms of Use for the Pura Vida Villas website. By accessing this site, you agree to comply with our terms and conditions." },
    ],
  }),
  component: TermsOfUse,
});

function TermsOfUse() {
  return (
    <>
      <PageHeader
        label="Legal"
        title={<>Terms of <em>Use</em></>}
        intro="By accessing and using this website, you agree to be bound by the following terms and conditions. Please read them carefully."
      />

      <section className="bg-white px-6 py-20 md:px-16">
        <div className="mx-auto max-w-4xl space-y-10 text-ink-mid">
          <FadeUp className="space-y-4">
            <h2 className="font-display text-2xl text-forest">Acceptance of Terms</h2>
            <p className="text-[0.95rem] leading-[1.8]">
              The services that Pura Vida Villas provides to you are subject to the following Terms of Use. We reserve the right to update these terms at any time without notice to you.
            </p>
          </FadeUp>

          <FadeUp delay={0.1} className="space-y-4">
            <h2 className="font-display text-2xl text-forest">Intellectual Property</h2>
            <p className="text-[0.95rem] leading-[1.8]">
              All content on this website, including text, graphics, logos, images, and software, is the property of Pura Vida Villas or its content suppliers and is protected by international copyright laws. Unauthorized use of any content is strictly prohibited.
            </p>
          </FadeUp>

          <FadeUp delay={0.15} className="space-y-4">
            <h2 className="font-display text-2xl text-forest">User Conduct</h2>
            <p className="text-[0.95rem] leading-[1.8]">
              You agree to use the website only for lawful purposes. You are prohibited from posting or transmitting any unlawful, threatening, libelous, defamatory, obscene, or otherwise objectionable material.
            </p>
          </FadeUp>

          <FadeUp delay={0.2} className="space-y-4">
            <h2 className="font-display text-2xl text-forest">Limitation of Liability</h2>
            <p className="text-[0.95rem] leading-[1.8]">
              In no event shall Pura Vida Villas be liable for any damages whatsoever arising out of or in connection with the use or performance of information available from this website.
            </p>
          </FadeUp>

          <FadeUp delay={0.25} className="space-y-4">
            <h2 className="font-display text-2xl text-forest">Governing Law</h2>
            <p className="text-[0.95rem] leading-[1.8]">
              These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in Bengaluru.
            </p>
          </FadeUp>
        </div>
      </section>

      <ContactBar />
    </>
  );
}
