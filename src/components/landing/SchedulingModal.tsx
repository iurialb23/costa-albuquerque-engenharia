import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useScheduling } from "@/hooks/use-scheduling";
import { GOOGLE_APPOINTMENT_URL } from "@/config/scheduling";
import { CalendarClock } from "lucide-react";

export function SchedulingModal() {
  const { open, setOpen } = useScheduling();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle className="font-display text-2xl text-primary">Agendar reunião</DialogTitle>
          <DialogDescription>
            Escolha um horário disponível na agenda da nossa equipe.
          </DialogDescription>
        </DialogHeader>

        <div className="px-6 pb-6 pt-2">
          {GOOGLE_APPOINTMENT_URL ? (
            <div className="relative h-[600px] w-full overflow-hidden rounded-lg border border-border">
              <iframe
                src={GOOGLE_APPOINTMENT_URL}
                title="Agendar reunião — Google Calendar"
                className="h-full w-full"
                frameBorder={0}
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-accent/40 bg-secondary px-6 py-16 text-center">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-accent/10 text-accent">
                <CalendarClock className="h-7 w-7" />
              </div>
              <h3 className="font-display text-lg font-semibold text-primary">
                Placeholder do agendamento Google Calendar
              </h3>
              <p className="max-w-md text-sm text-muted-foreground">
                Edite{" "}
                <code className="rounded bg-background px-1.5 py-0.5 text-xs">
                  src/config/scheduling.ts
                </code>{" "}
                e cole o link da sua página de "Horários de atendimento" do Google
                Calendar na constante{" "}
                <code className="rounded bg-background px-1.5 py-0.5 text-xs">
                  GOOGLE_APPOINTMENT_URL
                </code>{" "}
                para incorporar o agendador aqui.
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}