# Costa Albuquerque Engenharia — Contexto do projeto

## O que é este projeto
Site institucional da **Costa Albuquerque Engenharia**, empresa de engenharia sob demanda (on-demand) que atende indústrias, plantas fabris e integradoras com projetos pontuais — sem que o cliente precise manter equipe de engenharia interna.

## Stack
- React 19 + Vite 8 (SPA pura, sem SSR)
- TanStack Router (client-side routing)
- TypeScript + Tailwind CSS v4 + shadcn/ui
- Fontes: **Space Grotesk** (títulos, `font-display`) e **IBM Plex Sans** (corpo, `font-sans`) via Google Fonts

## Estrutura de componentes
```
src/
  config/scheduling.ts   ← dados centralizados: contato, serviços, Google Calendar URL
  components/landing/
    Header.tsx
    Hero.tsx
    Differentials.tsx     ← seção "Projetos sob Demanda, atendimento prioritário" (4 cards)
    Services.tsx          ← 7 serviços
    Process.tsx           ← 4 etapas do processo
    About.tsx             ← seção "Sobre" (texto lorem ipsum pendente de reescrita)
    FinalCTA.tsx          ← CTA + formulário de contato
    Footer.tsx
    SchedulingModal.tsx   ← iframe Google Calendar
  routes/
    __root.tsx            ← root layout (QueryClientProvider)
    index.tsx             ← página principal
  main.tsx               ← entry point SPA
index.html               ← entry HTML com meta tags e Google Fonts
vercel.json              ← rewrite SPA para Vercel
```

## Deploy
- **Repositório:** github.com/iurialb23/costa-albuquerque-engenharia
- **Deploy:** Vercel (importar o repo, build padrão Vite detectado automaticamente)
- **Build:** `vite build` / **Preview:** `vite preview`

## Contatos (em scheduling.ts)
- Email: contato@costaalbuquerque.com.br
- Telefone/WhatsApp: +55 (71) 99606-8126
- Endereço: Salvador, Bahia — Brasil
- Google Calendar: https://calendar.app.google/CeCt8v98TSQ2Q8j47
- LinkedIn / Instagram: ainda `"#"` (não preenchidos)

## Pendências conhecidas
- **About.tsx:** parágrafos estão com lorem ipsum — reescrita pendente
- **Card "Sem custo fixo de equipe"** (Differentials.tsx): texto do card será reescrito
- **LinkedIn / Instagram:** preencher URLs reais em `scheduling.ts`
- **og:image / twitter:image:** sem imagem definida (removidas as referências Lovable)

## Convenções de copy
- Sem pontos finais em títulos (h1/h2)
- Máximo 1 travessão em toda a página (mantido apenas no FinalCTA: "— sem compromisso")
- Evitar repetir "sem time interno / sem equipe / sem folha" — a ideia está apenas no card "Sem custo fixo de equipe"
- "multidisciplinar/es" aparece no máximo 2x (Hero + card Diferenciais)
- Tom: corporativo/profissional, sem inventar dados, números ou certificações
