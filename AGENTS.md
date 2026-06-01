<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Portfolio — SachaDev

## Stack (actual, not what SPEC.md says)

- **Next.js 16.2.4** + **React 19.2.4** + **TypeScript 5** (strict)
- **Tailwind CSS v4** — uses `@import "tailwindcss"` and `@theme` in `globals.css`. No `tailwind.config.ts`. Custom color tokens are in CSS, not in config.
- **Framer Motion 12** — scroll-triggered animations via `whileInView`
- **Lucide React** — icons
- **No test framework** — no tests at all. `npm run build` is the only verification.

## Architecture

- **Single page** (`src/app/page.tsx`): assembles 8 sections via `id` anchors for smooth scroll
- **All components are `"use client"`** — they use Framer Motion hooks and browser APIs
- **Data-driven content** — edit `src/data/portfolio.ts` to change personal info, technologies, projects, services. The components read from this file.
- **Section IDs for nav links**: `#inicio`, `#sobre-mi`, `#proyectos`, `#servicios`, `#contacto`. The `#tecnologias` section exists but is NOT in the nav menu.
- **Contact form** (`Contacto.tsx`) is currently simulated — it connects to a Server Action (`src/app/actions/contact.ts`) that uses the **Resend** API. Requires `RESEND_API_KEY` in `.env.local` to function.

## Commands

| Command | What |
|---------|------|
| `npm run dev` | Dev server with Turbopack |
| `npm run build` | Production build — use this as the main verification step |
| `npm run lint` | ESLint flat config (`eslint.config.mjs`) |

## Conventions

- UI text is in **Spanish** (Rioplatense). Code identifiers, comments, filenames in English.
- Social icons use **inline SVGs** (GitHub, LinkedIn, Instagram, TikTok). Lucide icons for UI elements.
- **SPEC.md** at root is stale (references React 18 + Next.js 14). OpenCode agents should trust `package.json` deps over SPEC.md.
- **No `.env` files** currently exist. Add `.env.local` for secrets (already in `.gitignore`).
- SDD artifacts live in `openspec/` directory.
