import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, CalendarCheck2 } from "lucide-react";
import { useScheduling } from "@/hooks/use-scheduling";
import { COMPANY } from "@/config/scheduling";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Serviços", href: "#servicos" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const { openModal } = useScheduling();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground font-display font-bold">
            CA
          </span>
          <span className="hidden font-display text-base font-semibold text-primary sm:inline">
            {COMPANY.name}
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            onClick={openModal}
            className="hidden bg-accent text-accent-foreground hover:bg-accent/90 sm:inline-flex"
          >
            <CalendarCheck2 className="mr-2 h-4 w-4" />
            Agendar reunião
          </Button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Abrir menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetTitle className="font-display text-primary">Menu</SheetTitle>
              <nav className="mt-8 flex flex-col gap-1">
                {NAV.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-secondary"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <Button
                onClick={() => {
                  setMobileOpen(false);
                  openModal();
                }}
                className="mt-6 w-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <CalendarCheck2 className="mr-2 h-4 w-4" />
                Agendar reunião
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}