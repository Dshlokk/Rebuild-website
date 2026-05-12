import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/SectionHeader";
import { RoomGallery } from "@/components/sections/RoomGallery";
import { ContactBar } from "@/components/site/ContactBar";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Pura Vida Villas | Interiors, Exteriors & Nature" },
      { name: "description", content: "Tour the living spaces, master bedroom, kitchen, backyard and terrace of EarthAroma villas — interactive image gallery with lightbox." },
      { property: "og:title", content: "EarthAroma Gallery" },
      { property: "og:description", content: "#ElevatedLiving — explore every space." },
    ],
  }),
  component: () => (
    <>
      <PageHeader label="Interior Tour" title={<>#Elevated<em>Living</em></>} intro="Step inside EarthAroma — earthy materials, airy volumes, and a design that breathes with nature." />
      <RoomGallery />
      <ContactBar />
    </>
  ),
});
