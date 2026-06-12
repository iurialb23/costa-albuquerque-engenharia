import { Reveal } from "./Reveal";
import { BadgeCheck, FileCheck2, Award } from "lucide-react";

const BADGES = [
  { icon: BadgeCheck, label: "ABNT NBR" },
  { icon: FileCheck2, label: "Normas ISO" },
  { icon: Award, label: "Padrão técnico" },
];

export function About() {
  return (
    <section id="sobre" className="bg-primary py-24 text-primary-foreground md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-8 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Sobre a Costa Albuquerque
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-5xl">
            Compromisso com a engenharia bem feita.
          </h2>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal delay={80}>
            <p className="text-base leading-relaxed text-white/85 md:text-lg">
              A <strong>Costa Albuquerque Engenharia</strong> nasceu para
              entregar capacidade técnica de ponta para empresas que precisam
              de projetos pontuais — sem o custo e a complexidade de manter um
              time de engenharia próprio. Atendemos indústrias, plantas fabris,
              empresas de manutenção e integradoras com projetos executivos,
              dimensionamentos, virtualização de plantas e documentação técnica.
            </p>
            <p className="mt-5 text-base leading-relaxed text-white/85 md:text-lg">
              Cada entrega segue rigorosamente as normas técnicas vigentes —{" "}
              <strong>ABNT NBR</strong> e <strong>ISO</strong> — para garantir
              segurança, conformidade e padrão de qualidade reconhecido.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-10 flex flex-wrap gap-3">
              {BADGES.map((b) => (
                <div
                  key={b.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
                >
                  <b.icon className="h-4 w-4 text-accent" />
                  {b.label}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}