# Project Instructions

This project is built with **React 19**, **Tailwind CSS 4**, and **TanStack Router** (SPA mode).

## Tech Stack

- **Framework:** React 19 (Vite SPA)
- **Routing:** [TanStack Router](https://tanstack.com/router)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) with [Framer Motion](https://www.framer.com/motion/)
- **UI Components:** [Shadcn UI](https://ui.shadcn.com/) (Radix UI)
- **Package Manager:** [Bun](https://bun.sh/)
- **Deployment:** [GoDaddy cPanel](https://www.godaddy.com/hosting/cpanel-hosting)

## Conventions

### Architecture

- **Routes:** All routes are located in `src/routes/`. TanStack Router handles file-based routing.
- **Components:**
  - `src/components/ui/`: Reusable primitive components (Shadcn UI).
  - `src/components/sections/`: Page-specific sections.
  - `src/components/site/`: Global layout components (Navbar, Footer, etc.).
- **Data:** Static data and configuration are stored in `src/data/`.

### Development Workflow

- **Linting:** Use `npm run lint` to run ESLint.
- **Formatting:** Use `npm run format` to run Prettier.
- **Routing:** After adding or moving routes, the router will automatically regenerate `src/routeTree.gen.ts` during dev or build.

### Styling

- This project uses Tailwind CSS 4.
- Use `framer-motion` for animations.
- Prefer Vanilla CSS in `src/styles.css` for global styles or complex custom animations that are hard to express in Tailwind.

## Deployment

### GoDaddy cPanel

This project is configured as a Single Page Application (SPA).

1. **Build Command:** `bun run build`
2. **Output Directory:** `dist/`
3. **Configuration:** The `public/.htaccess` file ensures that all requests are routed to `index.html` for client-side routing.
4. **Steps:**
   - Run the build command.
   - Upload the contents of `dist/` to your `public_html` directory on cPanel.
