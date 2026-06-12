# Landing Page — Costa Albuquerque Engenharia

Construir uma landing page corporativa moderna e responsiva em uma única rota (`/`), seguindo exatamente a paleta, tipografia e estrutura solicitadas.

## Design System

Atualizar `src/styles.css`:
- Tokens semânticos em oklch equivalentes a:
  - `--primary` = #0F2A43 (azul-marinho)
  - `--accent` = #1E88E5 (ciano de ação)
  - `--foreground` = #2B3440 (grafite)
  - `--background` = #FFFFFF, `--muted` = #F5F7FA
- Fontes via `<link>` no `__root.tsx` (Google Fonts: Space Grotesk + IBM Plex Sans).
- Tokens `--font-display: "Space Grotesk"` e `--font-sans: "IBM Plex Sans"` em `@theme`.
- Remover qualquer uso de Inter.

Atualizar `src/routes/__root.tsx`:
- Adicionar `<link>` preconnect + Google Fonts.
- Atualizar metadata (title, description, og) para a empresa.

## Estrutura

Substituir o placeholder de `src/routes/index.tsx` e quebrar em componentes em `src/components/landing/`:

1. `Header.tsx` — fixo, blur/translúcido, logo textual, nav (Serviços, Como Funciona, Sobre, Contato), CTA "Agendar reunião" (abre modal). Menu mobile com Sheet.
2. `Hero.tsx` — headline + subtítulo + CTA + imagem técnica/industrial (gerada via imagegen, salva em `src/assets/`).
3. `Differentials.tsx` — 4 cards (sem custo fixo, flexibilidade, multidisciplinar, agilidade) com ícones lucide.
4. `Services.tsx` — grid de 7 cards (Refrigeração, Dimensionamento, Projetos mec/pneumáticos, Estrutura metálica, Contêiner, As Built/Eng. Reversa, Virtualização de Plantas) com ícones lucide.
5. `Process.tsx` — 4 passos numerados (Diagnóstico → Proposta → Execução → Entrega/Suporte).
6. `About.tsx` — texto institucional + selos ABNT NBR / ISO.
7. `FinalCTA.tsx` — bloco com botão "Agendar reunião" + formulário de contato (Nome, Empresa, E-mail, Telefone/WhatsApp, Serviço de interesse [Select com os 7], Mensagem). Submit apenas client-side (toast de confirmação) — sem backend, conforme escopo.
8. `Footer.tsx` — nome, nav, contatos placeholder, redes sociais (ícones lucide).

## Modal de agendamento

`SchedulingModal.tsx` usando shadcn `Dialog`:
- Renderiza um `<iframe>` apontando para uma constante `GOOGLE_APPOINTMENT_URL` em `src/config/scheduling.ts` (placeholder claramente comentado: `// TODO: cole aqui o link do Google Appointment Schedule`).
- Se a constante estiver vazia, mostrar um bloco de placeholder destacado com instruções para colar o link.
- Compartilhado por todos os botões "Agendar reunião" (header, hero, CTA final) via um contexto leve ou um hook `useScheduling()` com Zustand-free state (simple React context).

## Animações

Animações sutis no scroll usando `framer-motion` (já comum) — fade/slide-up em seções. Instalar `motion` se ainda não estiver presente.

## Responsividade

- Grid `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` para serviços/diferenciais.
- Header: nav escondido em mobile, Sheet para menu.
- Espaçamento generoso (`py-24 lg:py-32`), max-width container.

## SEO

- `head()` no index com title <60 chars, meta description, og tags pt-BR.
- H1 único no hero.
- Alt text em imagens.

## Arquivos a criar/alterar

- `src/styles.css` (tokens + fontes)
- `src/routes/__root.tsx` (Google Fonts links + metadata)
- `src/routes/index.tsx` (composição da landing)
- `src/components/landing/{Header,Hero,Differentials,Services,Process,About,FinalCTA,Footer,SchedulingModal}.tsx`
- `src/config/scheduling.ts` (placeholders editáveis: URL agendamento, contato, redes)
- `src/assets/hero-engineering.jpg` (gerada)
- `src/hooks/use-scheduling.tsx` (contexto do modal)

Nenhum backend necessário nesta entrega; formulário mostra toast de sucesso e o agendamento é via iframe do Google.