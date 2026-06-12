import { Wallet, Layers, Users, Zap } from "lucide-react";
import { Reveal } from "./Reveal";

const ITEMS = [
  {
    icon: Wallet,
    title: "Sem custo fixo de equipe",
    text: "Pague apenas pelos projetos que precisar. Nada de folha, encargos ou ociosidade técnica.",
  },
  {
    icon: Layers,
    title: "Flexibilidade por projeto",
    text: "Escopo, prazo e equipe dimensionados sob medida — escalamos com você quando a demanda cresce.",
  },
  {
    icon: Users,
    title: "Especialistas multidisciplinares",
    text: "Mecânica, hidráulica, pneumática, refrigeração e estrutura metálica em um único ponto de contato.",
  },
  {
    icon: Zap,
    title: "Agilidade na entrega",
    text: "Processo enxuto e documentado para acelerar do diagnóstico ao projeto executivo final.",
  },
];

export function Differentials() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold text-primary md:text-5xl">
              Projetos sob Demanda, atendimento prioritário
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Um modelo pensado para indústrias e integradoras que precisam de
              capacidade técnica de alto nível, exatamente quando e como o
              projeto exige.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-primary/5">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}