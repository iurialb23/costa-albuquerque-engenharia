import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { CalendarCheck2, ArrowRight } from "lucide-react";
import { useScheduling } from "@/hooks/use-scheduling";
import { SERVICES } from "@/config/scheduling";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  const { openModal } = useScheduling();
  const [service, setService] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Placeholder: integrar com backend / e-mail conforme necessário.
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      setService("");
      toast.success("Mensagem enviada!", {
        description: "Em breve nossa equipe entrará em contato.",
      });
    }, 600);
  };

  return (
    <section id="contato" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-[oklch(0.32_0.07_252)] p-8 text-primary-foreground md:p-14">
            <div className="grid items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">
                  Vamos discutir o seu próximo projeto
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
                  Agende uma reunião com nosso time técnico — sem compromisso.
                  Em 30 minutos entendemos seu cenário e indicamos o caminho.
                </p>
              </div>
              <div className="lg:col-span-5 lg:flex lg:justify-end">
                <Button
                  size="lg"
                  onClick={openModal}
                  className="h-14 bg-accent px-8 text-base text-accent-foreground hover:bg-accent/90"
                >
                  <CalendarCheck2 className="mr-2 h-5 w-5" />
                  Agendar reunião
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-16 grid gap-10 rounded-2xl border border-border bg-card p-8 md:p-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Formulário de contato
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold text-primary md:text-3xl">
                Prefere escrever primeiro?
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                Conte um pouco sobre o desafio do seu projeto e retornamos com
                uma proposta inicial.
              </p>
            </div>

            <form className="grid gap-4 lg:col-span-7 lg:grid-cols-2" onSubmit={onSubmit}>
              <div className="lg:col-span-1">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" name="name" required className="mt-1.5" placeholder="Seu nome" />
              </div>
              <div className="lg:col-span-1">
                <Label htmlFor="company">Empresa</Label>
                <Input id="company" name="company" required className="mt-1.5" placeholder="Razão social" />
              </div>
              <div className="lg:col-span-1">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" name="email" type="email" required className="mt-1.5" placeholder="voce@empresa.com" />
              </div>
              <div className="lg:col-span-1">
                <Label htmlFor="phone">Telefone / WhatsApp</Label>
                <Input id="phone" name="phone" required className="mt-1.5" placeholder="(00) 00000-0000" />
              </div>
              <div className="lg:col-span-2">
                <Label htmlFor="service">Serviço de interesse</Label>
                <Select value={service} onValueChange={setService} required>
                  <SelectTrigger id="service" className="mt-1.5">
                    <SelectValue placeholder="Selecione um serviço" />
                  </SelectTrigger>
                  <SelectContent>
                    {SERVICES.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="lg:col-span-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="mt-1.5"
                  placeholder="Descreva brevemente o projeto, prazo e escopo previstos."
                />
              </div>
              <div className="lg:col-span-2">
                <Button
                  type="submit"
                  disabled={submitting}
                  className="h-12 w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto"
                >
                  {submitting ? "Enviando..." : "Enviar mensagem"}
                </Button>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}