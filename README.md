## Project Structure

Rebuild-website/
│
├── public/ # Public static assets
│ ├── logo.png
│ └── .htaccess # Routing support for GoDaddy cPanel
│
├── src/
│ │
│ ├── components/
│ │ │
│ │ ├── sections/ # Landing page sections
│ │ │ ├── FloorPlanViewer.tsx
│ │ │ ├── Hero.tsx
│ │ │ └── RoomGallery.tsx
│ │ │
│ │ ├── site/ # Shared site-wide components
│ │ │ ├── ContactBar.tsx
│ │ │ ├── FloatIcons.tsx
│ │ │ ├── Footer.tsx
│ │ │ ├── LeadPopup.tsx
│ │ │ ├── Navbar.tsx
│ │ │ └── SectionHeader.tsx
│ │ │
│ │ └── ui/ # shadcn/ui reusable components
│ │
│ ├── data/ # Static data/config
│ │ ├── amenities.ts
│ │ ├── features.ts
│ │ ├── floorPlans.ts
│ │ ├── gallery.ts
│ │ └── site.ts
│ │
│ ├── hooks/ # Custom React hooks
│ │ └── use-mobile.tsx
│ │
│ ├── lib/ # Utility/helper functions
│ │ ├── error-capture.ts
│ │ ├── error-page.ts
│ │ ├── leads.ts
│ │ └── utils.ts
│ │
│ ├── routes/ # TanStack Router pages
│ │ ├── \_\_root.tsx
│ │ ├── about.tsx
│ │ ├── amenities.tsx
│ │ ├── contact.tsx
│ │ ├── disclaimer.tsx
│ │ ├── features.tsx
│ │ ├── floor-plans.tsx
│ │ ├── gallery.tsx
│ │ ├── index.tsx
│ │ ├── privacy.tsx
│ │ ├── sustainability.tsx
│ │ └── terms.tsx
│ │
│ ├── main.tsx # SPA entry point
│ ├── router.tsx
│ ├── routeTree.gen.ts
│ └── styles.css
│
├── index.html # Main HTML entry point
├── package.json
├── bun.lock
├── vite.config.ts
├── tsconfig.json
├── eslint.config.js
└── components.json

## Deployment

### GoDaddy cPanel (Recommended)

This project is configured as a Single Page Application (SPA) for easy cPanel deployment.

1. Run `bun run build` (or `npm run build`).
2. The production files will be generated in the `dist/` directory.
3. Zip the contents of the `dist/` folder.
4. Log in to your GoDaddy cPanel.
5. Use **File Manager** to upload the zip file to the `public_html` directory.
6. Extract the zip file in `public_html`.
7. Ensure the `.htaccess` file from the `public/` directory was also uploaded (it handles routing).
