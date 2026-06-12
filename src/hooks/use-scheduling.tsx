import { createContext, useContext, useState, type ReactNode } from "react";

type SchedulingContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  openModal: () => void;
};

const SchedulingContext = createContext<SchedulingContextValue | null>(null);

export function SchedulingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <SchedulingContext.Provider value={{ open, setOpen, openModal: () => setOpen(true) }}>
      {children}
    </SchedulingContext.Provider>
  );
}

export function useScheduling() {
  const ctx = useContext(SchedulingContext);
  if (!ctx) throw new Error("useScheduling must be used within SchedulingProvider");
  return ctx;
}