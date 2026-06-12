import { Button } from "@/components/ui/button";
import { useScheduling } from "@/hooks/use-scheduling";
import { ArrowRight, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/hero-engineering.jpg";

export function Hero() {
  const { openModal } = useScheduling();

  return (
    <section id="top" className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Estrutura industrial moderna com tubulações e equipamentos mecânicos"
          width={1280}
          height={1024}
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/30" />
      </div>

      <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center px-4 pt-28 pb-20 md:px-8 lg:min-h-[92vh] lg:grid-cols-12 lg:pt-32">
        <div className="lg:col-span-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-white/90 backdrop-blur-sm">
            <ShieldCheck className="h-3.5 w-3.5 text-accent" />
            Engenharia sob demanda
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Engenharia especializada para cada projeto,{" "}
            <span className="text-accent">exatamente quando você precisa</span>.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            Entregamos projetos pontuais para indústrias, plantas fabris e
            integradoras — sem que sua empresa precise manter uma equipe de
            engenharia interna. Flexibilidade, especialistas multidisciplinares
            e padrão técnico em cada entrega.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              onClick={openModal}
              className="h-12 bg-accent px-7 text-base text-accent-foreground hover:bg-accent/90"
            >
              Agendar reunião
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="h-12 border-white/25 bg-transparent px-7 text-base text-white hover:bg-white/10 hover:text-white"
            >
              <a href="#servicos">Ver serviços</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}