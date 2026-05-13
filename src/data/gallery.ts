export type Room = {
  name: string;
  sub: string;
  body: string;
  imgs: string[];
};

export const rooms: Room[] = [
  {
    name: "Living Area",
    sub: "Effortless. Airy. Soulful.",
    body: "Tall ceilings invite abundant natural light, enhance airflow, and reduce energy use. Earthy materials, airy volumes, and a design that breathes with nature — calm, expansive, and beautifully alive.",
    imgs: ["/images/16.jpg", "/images/17.jpg"],
  },
  {
    name: "Master Bedroom",
    sub: "Your private world of calm.",
    body: "Expansive space, warm earthy tones, and a soothing layout create a retreat that truly lets you unwind. Wake to soft lake views, step onto a greenery-kissed balcony, and move into your walk-in wardrobe.",
    imgs: ["/images/21.jpg", "/images/22.jpg", "/images/23.jpg"],
  },
  {
    name: "Kitchen",
    sub: "Where Light Leads the Recipe.",
    body: "Designed to feel bright, fresh, and wonderfully effortless. Sunlight streams through thoughtfully placed windows, creating a warm, inviting space where cooking becomes calming and joyful.",
    imgs: ["/images/18.jpg"],
  },
  {
    name: "Backyard",
    sub: "Nature's lounge, right at home.",
    body: "Lush green landscapes set the scene. A cozy swing invites slow moments, the fire pit sparks warm conversations, and the gentle water body adds pure serenity.",
    imgs: ["/images/19.jpg", "/images/27.png"],
  },
  {
    name: "Terrace",
    sub: "The world feels wider.",
    body: "A breathtaking escape — elevated, open, and alive with serenity. Calming water bodies reflect the sky, lush green landscapes stretch around you. A space made for sunrise rituals and starlit evenings.",
    imgs: ["/images/24.jpg"],
  },
  {
    name: "Balcony",
    sub: "A private perch amidst the trees.",
    body: "Step out to fresh air and panoramic views. A perfect spot for your morning coffee or a quiet evening under the stars, bringing you closer to nature from the comfort of your room.",
    imgs: ["/images/20.jpg"],
  },
];

