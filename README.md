## Project Structure

Rebuild-website/
│
├── api/                          # Backend/API functions
│   └── index.js
│
├── public/                       # Public static assets
│   └── logo.png
│
├── src/
│   │
│   ├── components/
│   │   │
│   │   ├── sections/             # Landing page sections
│   │   │   ├── FloorPlanViewer.tsx
│   │   │   ├── Hero.tsx
│   │   │   └── RoomGallery.tsx
│   │   │
│   │   ├── site/                 # Shared site-wide components
│   │   │   ├── ContactBar.tsx
│   │   │   ├── FloatIcons.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── LeadPopup.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── SectionHeader.tsx
│   │   │
│   │   └── ui/                   # shadcn/ui reusable components
│   │
│   ├── data/                     # Static data/config
│   │   ├── amenities.ts
│   │   ├── features.ts
│   │   ├── floorPlans.ts
│   │   ├── gallery.ts
│   │   └── site.ts
│   │
│   ├── hooks/                    # Custom React hooks
│   │   └── use-mobile.tsx
│   │
│   ├── lib/                      # Utility/helper functions
│   │   ├── error-capture.ts
│   │   ├── error-page.ts
│   │   ├── leads.ts
│   │   └── utils.ts
│   │
│   ├── routes/                   # TanStack Router pages
│   │   ├── __root.tsx
│   │   ├── about.tsx
│   │   ├── amenities.tsx
│   │   ├── contact.tsx
│   │   ├── disclaimer.tsx
│   │   ├── features.tsx
│   │   ├── floor-plans.tsx
│   │   ├── gallery.tsx
│   │   ├── index.tsx
│   │   ├── privacy.tsx
│   │   ├── sustainability.tsx
│   │   └── terms.tsx
│   │
│   ├── router.tsx
│   ├── routeTree.gen.ts
│   ├── server.ts
│   ├── start.ts
│   └── styles.css
│
├── Images from pdf/              # Extracted brochure images
├── Banner Video stiched.mp4      # Main hero/background video
├── EA-Villa-Brochure-3.pdf       # Property brochure PDF
│
├── package.json
├── bun.lock
├── vite.config.ts
├── tsconfig.json
├── eslint.config.js
├── components.json
├── vercel.json
└── wrangler.jsonc
