import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="sobre" className="bg-primary py-24 text-primary-foreground md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-8 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Sobre a Costa Albuquerque
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-5xl">
            Compromisso com a engenharia bem feita
          </h2>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal delay={80}>
            <p className="text-base leading-relaxed text-white/85 md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="mt-5 text-base leading-relaxed text-white/85 md:text-lg">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
