import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter } from "@tanstack/react-router";

import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatIcons } from "@/components/site/FloatIcons";
import { LeadPopup } from "@/components/site/LeadPopup";
import { ChatBot } from "@/components/site/ChatBot";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4 pt-24">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-light text-forest">404</h1>
        <h2 className="mt-3 font-display text-xl text-forest">Lost in the woods</h2>
        <p className="mt-2 text-sm text-ink-muted">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link to="/" className="btn-outline-forest mt-6 inline-block">
          Return Home
        </Link>
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
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-outline-forest"
          >
            Try again
          </button>
          <a href="/" className="btn-outline-forest">
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

function PendingComponent() {
  return (
    <div className="fixed inset-0 z-[100] flex min-h-screen items-center justify-center bg-cream backdrop-blur-md">
      <img
        src="/logo.png"
        alt="Loading..."
        className="h-24 w-auto animate-pulse object-contain opacity-80"
      />
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  pendingComponent: PendingComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <FloatIcons />
      <LeadPopup />
      <ChatBot />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
