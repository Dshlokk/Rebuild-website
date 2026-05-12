import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatIcons } from "@/components/site/FloatIcons";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4 pt-24">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-light text-forest">404</h1>
        <h2 className="mt-3 font-display text-xl text-forest">Lost in the woods</h2>
        <p className="mt-2 text-sm text-ink-muted">The page you're looking for doesn't exist or has moved.</p>
        <Link to="/" className="btn-outline-forest mt-6 inline-block">Return Home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4 pt-24">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl text-forest">Something went wrong</h1>
        <p className="mt-2 text-sm text-ink-muted">{error.message}</p>
        <div className="mt-6 flex justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-outline-forest">Try again</button>
          <a href="/" className="btn-outline-forest">Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Pura Vida Villas — EarthAroma | Eco-Luxury Living in Bengaluru" },
      { name: "description", content: "EarthAroma by Pura Vida Villas — IGBC Platinum certified eco-luxury villas in Bengaluru. Biophilic design, lakeside serenity, 100% renewable energy." },
      { name: "author", content: "Pura Vida Villas" },
      { property: "og:title", content: "Pura Vida Villas — EarthAroma" },
      { property: "og:description", content: "Eco-luxury villa community inspired by the Costa Rican way of life." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1800&q=80" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap",
      },
      { rel: "icon", href: "https://github.com/Dshlokk/Rebuild-website/raw/217372617fcfd86906304655c1044ef8a0c33419/Faviconn.png" },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <FloatIcons />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
