import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { SchedulingProvider } from "@/hooks/use-scheduling";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Differentials } from "@/components/landing/Differentials";
import { Services } from "@/components/landing/Services";
import { Process } from "@/components/landing/Process";
import { About } from "@/components/landing/About";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { SchedulingModal } from "@/components/landing/SchedulingModal";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <SchedulingProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Differentials />
          <Services />
          <Process />
          <About />
          <FinalCTA />
        </main>
        <Footer />
        <SchedulingModal />
        <Toaster richColors position="top-right" />
      </div>
    </SchedulingProvider>
  );
}
