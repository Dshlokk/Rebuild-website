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

## Commands
- `bun run dev`: Start development server.
- `bun run build`: Build for production.
- `bun run lint`: Run ESLint.
- `bun run format`: Format code with Prettier.
