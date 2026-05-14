import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/SectionHeader";
import { FadeUp } from "@/components/site/Motion";
import { ContactBar } from "@/components/site/ContactBar";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Pura Vida Villas | EarthAroma" },
      { name: "description", content: "Privacy Policy for Pura Vida Villas and EarthAroma. Your privacy and data security are our top priorities." },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <>
      <PageHeader
        label="Privacy"
        title={<>Privacy <em>Policy</em></>}
        intro="Your trust is our most valued foundation. We are committed to protecting your privacy and ensuring your personal information is handled with care."
      />

      <section className="bg-white px-6 py-20 md:px-16">
        <div className="mx-auto max-w-4xl space-y-10 text-ink-mid">
          <FadeUp className="space-y-4">
            <h2 className="font-display text-2xl text-forest">Information Collection</h2>
            <p className="text-[0.95rem] leading-[1.8]">
              We collect information that you provide directly to us when you request a brochure, schedule a site visit, or contact our sales team. This may include your name, email address, phone number, and preferences regarding our property offerings.
            </p>
          </FadeUp>

          <FadeUp delay={0.1} className="space-y-4">
            <h2 className="font-display text-2xl text-forest">Use of Information</h2>
            <p className="text-[0.95rem] leading-[1.8]">
              The information we collect is used to provide you with the services and information you request, to communicate with you about our project updates, and to improve our website and customer service. We do not sell or lease your personal information to third parties.
            </p>
          </FadeUp>

          <FadeUp delay={0.15} className="space-y-4">
            <h2 className="font-display text-2xl text-forest">Data Security</h2>
            <p className="text-[0.95rem] leading-[1.8]">
              We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </FadeUp>

          <FadeUp delay={0.2} className="space-y-4">
            <h2 className="font-display text-2xl text-forest">Cookies</h2>
            <p className="text-[0.95rem] leading-[1.8]">
              Our website may use cookies to enhance your experience. You can choose to set your web browser to refuse cookies, or to alert you when cookies are being sent. If you do so, note that some parts of the site may not function properly.
            </p>
          </FadeUp>

          <FadeUp delay={0.25} className="space-y-4">
            <h2 className="font-display text-2xl text-forest">Changes to This Policy</h2>
            <p className="text-[0.95rem] leading-[1.8]">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </FadeUp>
        </div>
      </section>

      <ContactBar />
    </>
  );
}
