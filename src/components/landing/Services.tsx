import {
  Snowflake,
  Gauge,
  Wind,
  Building2,
  Container,
  ScanLine,
  MonitorCog,
} from "lucide-react";
import { Reveal } from "./Reveal";

const SERVICES = [
  {
    icon: Snowflake,
    title: "Refrigeração",
    text: "Projetos de sistemas de refrigeração industrial, comercial e processos com foco em eficiência energética.",
  },
  {
    icon: Gauge,
    title: "Dimensionamento mecânico e hidráulico",
    text: "Cálculo e seleção de equipamentos mecânicos e hidráulicos conforme a demanda real do processo.",
  },
  {
    icon: Wind,
    title: "Projetos mecânicos e pneumáticos",
    text: "Projetos executivos e diagramas de sistemas mecânicos e pneumáticos prontos para fabricação.",
  },
  {
    icon: Building2,
    title: "Estrutura metálica",
    text: "Concepção, cálculo e detalhamento de estruturas metálicas industriais e de suporte de equipamentos.",
  },
  {
    icon: Container,
    title: "Contêiner",
    text: "Adaptação e projeto de contêineres para uso técnico, salas elétricas, módulos operacionais e logísticos.",
  },
  {
    icon: ScanLine,
    title: "As Built / Engenharia Reversa",
    text: "Levantamento e documentação fiel de instalações existentes e reconstrução de projetos perdidos.",
  },
  {
    icon: MonitorCog,
    title: "Virtualização de Plantas",
    text: "Modelos digitais 3D de plantas industriais para análise, manutenção, treinamento e tomada de decisão.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Serviços
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-primary md:text-5xl">
              Capacidade técnica completa, sob um único contrato.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Sete frentes de engenharia para responder ao que sua planta precisa
              — do diagnóstico ao projeto executivo entregue.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-primary/5">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/5 text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-primary">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}