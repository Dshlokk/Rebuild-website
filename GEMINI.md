# Project Instructions

This project is built with **TanStack Start** (React 19), **Tailwind CSS 4**, and **TanStack Router**.

## Tech Stack
- **Framework:** [TanStack Start](https://tanstack.com/start)
- **Routing:** [TanStack Router](https://tanstack.com/router)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) with [Framer Motion](https://www.framer.com/motion/)
- **UI Components:** [Shadcn UI](https://ui.shadcn.com/) (Radix UI)
- **Package Manager:** [Bun](https://bun.sh/)
- **Deployment:** [Cloudflare Pages](https://pages.cloudflare.com/)

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
- **Routing:** After adding or moving routes, the router will automatically regenerate `src/routeTree.gen.ts` during dev.

### Styling
- This project uses Tailwind CSS 4.
- Use `framer-motion` for animations.
- Prefer Vanilla CSS in `src/styles.css` for global styles or complex custom animations that are hard to express in Tailwind.

## Deployment

### Cloudflare Pages (Default)
This project is pre-configured for Cloudflare Pages.
- **Build Command:** `bun run build`
- **Output Directory:** `dist/client` (Static) and `dist/server` (Functions)
- **Framework Preset:** TanStack Start / Vinxi (if available) or use the `wrangler.jsonc` configuration.

### Vercel
To deploy on Vercel, the configuration automatically switches to the Vercel preset when `process.env.VERCEL` is detected.
- **Build Command:** `bun run build`
- **Output Directory:** `.output` (Nitro default) or `dist/client` if static.
- **Environment Variables:** Vercel automatically sets `VERCEL=1`, which triggers the Vercel-specific build in `vite.config.ts`.

#### Steps for Vercel Deployment:
1. Connect your repository to Vercel.
2. Vercel should auto-detect the framework. If not, select **Other** or **Vite**.
3. Ensure the build command is `bun run build`.
4. If the build produces a `.output` directory, set that as the output directory in Vercel.
