import { Reveal } from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Diagnóstico da necessidade",
    text: "Entendemos o problema técnico, restrições operacionais e objetivos do projeto junto com sua equipe.",
  },
  {
    n: "02",
    title: "Proposta e escopo",
    text: "Apresentamos escopo detalhado, prazo, entregáveis e investimento — sem surpresas no caminho.",
  },
  {
    n: "03",
    title: "Execução do projeto",
    text: "Equipe dedicada trabalha conforme normas ABNT NBR e ISO, com marcos de validação acordados.",
  },
  {
    n: "04",
    title: "Entrega e suporte",
    text: "Documentação completa, transferência técnica e suporte pós-entrega para garantir a implantação.",
  },
];

export function Process() {
  return (
    <section id="como-funciona" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Como funciona
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-primary md:text-5xl">
              Um processo claro, do diagnóstico à entrega.
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 90} className="bg-card">
              <div className="flex h-full flex-col p-8">
                <span className="font-display text-4xl font-bold text-accent">
                  {step.n}
                </span>
                <h3 className="mt-6 font-display text-lg font-semibold text-primary">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}