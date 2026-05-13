export type Room = {
  name: string;
  sub: string;
  body: string;
  imgs: [string, string, string];
};

export const rooms: Room[] = [
  { name: "Living Area", sub: "Effortless. Airy. Soulful.", body: "Tall ceilings invite abundant natural light, enhance airflow, and reduce energy use. Earthy materials, airy volumes, and a design that breathes with nature — calm, expansive, and beautifully alive.", imgs: ["https://github.com/Dshlokk/Rebuild-website/raw/19c439880b9ca7c4a16335a5682992ff0a0bbff2/Images%20from%20pdf/16.jpg", "https://github.com/Dshlokk/Rebuild-website/raw/19c439880b9ca7c4a16335a5682992ff0a0bbff2/Images%20from%20pdf/17.jpg"] },
  { name: "Master Bedroom", sub: "Your private world of calm.", body: "Expansive space, warm earthy tones, and a soothing layout create a retreat that truly lets you unwind. Wake to soft lake views, step onto a greenery-kissed balcony, and move into your walk-in wardrobe.", imgs: ["https://github.com/Dshlokk/Rebuild-website/raw/ac85771937253fcf885d70f7ea3ff553f27846c2/Images%20from%20pdf/21.jpg", "https://github.com/Dshlokk/Rebuild-website/raw/ac85771937253fcf885d70f7ea3ff553f27846c2/Images%20from%20pdf/22.jpg", "https://github.com/Dshlokk/Rebuild-website/raw/ac85771937253fcf885d70f7ea3ff553f27846c2/Images%20from%20pdf/23.jpg"] },
  { name: "Kitchen", sub: "Where Light Leads the Recipe.", body: "Designed to feel bright, fresh, and wonderfully effortless. Sunlight streams through thoughtfully placed windows, creating a warm, inviting space where cooking becomes calming and joyful.", imgs: ["https://github.com/Dshlokk/Rebuild-website/raw/86fe6cf7b4c59ac74e5e6db8d0c074d5aedbbb71/Images%20from%20pdf/18.jpg"] },
  { name: "Backyard", sub: "Nature's lounge, right at home.", body: "Lush green landscapes set the scene. A cozy swing invites slow moments, the fire pit sparks warm conversations, and the gentle water body adds pure serenity.", imgs: ["https://github.com/Dshlokk/Rebuild-website/raw/86fe6cf7b4c59ac74e5e6db8d0c074d5aedbbb71/Images%20from%20pdf/19.jpg", "https://github.com/Dshlokk/Rebuild-website/blob/86fe6cf7b4c59ac74e5e6db8d0c074d5aedbbb71/Images%20from%20pdf/27.png"] },
  { name: "Terrace", sub: "The world feels wider.", body: "A breathtaking escape — elevated, open, and alive with serenity. Calming water bodies reflect the sky, lush green landscapes stretch around you. A space made for sunrise rituals and starlit evenings.", imgs: ["https://github.com/Dshlokk/Rebuild-website/raw/86fe6cf7b4c59ac74e5e6db8d0c074d5aedbbb71/Images%20from%20pdf/24.jpg"] },
  { name: "Balcony", sub: "Nature's lounge, right at home.", body: "Lush green landscapes set the scene. A cozy swing invites slow moments, the fire pit sparks warm conversations, and the gentle water body adds pure serenity.", imgs: ["https://github.com/Dshlokk/Rebuild-website/raw/86fe6cf7b4c59ac74e5e6db8d0c074d5aedbbb71/Images%20from%20pdf/20.jpg"] },
];
