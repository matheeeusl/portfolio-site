## Project

Personal portfolio/resume website with bilingual support (en, pt-BR), authentication, and a secret backstage area.

## Stack

- Framework: Next.js 16 (App Router)
- Language: TypeScript (strict mode, no `any`)
- Styling: Tailwind CSS 4 (no CSS modules, no styled-components)
- Auth: NextAuth.js (GitHub OAuth, Google OAuth, Magic Link)
- Database: PostgreSQL + Prisma ORM
- Testing: Vitest + Testing Library (co-located)
- Package manager: pnpm

## Commands

- Dev server: `pnpm dev`
- Build: `pnpm build`
- Lint: `pnpm lint`
- Test: `pnpm test`
- Test watch: `pnpm test -- --watch`
- Prisma generate: `pnpm prisma generate`
- Prisma migrate: `pnpm prisma migrate dev`

## Project Structure

```
src/
├── app/
│   ├── [locale]/          # Public pages (pt-BR, en)
│   ├── api/               # Backend endpoints (auth, analytics)
│   ├── backstage/         # Protected area (post-login)
│   └── page.tsx           # Redirect to default locale
├── components/
│   ├── layout/            # Header, Footer, LocaleSwitcher
│   ├── sections/          # Hero, About, Experience, Projects, Skills
│   └── ui/                # Button, Card, Badge, ThemeToggle
├── data/                  # Static resume data (typed)
├── i18n/
│   ├── en/                # English translations (JSON per section)
│   ├── pt-BR/             # Portuguese translations (JSON per section)
│   └── config.ts          # Locale config
├── lib/                   # Utils, auth config, db client, helpers
├── types/                 # Shared global types only
└── middleware.ts          # Security + locale redirect
prisma/
└── schema.prisma          # Database schema
```

## Code Rules

- Functional components only, no class components
- Use `import type` for type-only imports
- Imports use alias `@/` pointing to `src/`
- Component names in PascalCase, utilities in camelCase
- Files in PascalCase for components (Hero.tsx), camelCase for utilities (formatDate.ts)

## Component Pattern

Each component follows the Server + Client pattern:

- `Hero.tsx` — Server Component (fetches data, no interactivity)
- `HeroClient.tsx` — Client Component (animations, user interaction, has "use client" directive)
- `Hero.types.ts` — Props and component-specific types
- `Hero.test.tsx` — Tests (co-located, always test behavior not implementation)

Only create HeroClient.tsx if the component NEEDS client-side interactivity.
If a component is purely presentational with no state/effects, keep it as a single Hero.tsx.

## TDD Rules

- ALWAYS write the test BEFORE the implementation
- Every component MUST have a co-located .test.tsx file
- If suggesting a function without a test, STOP and write the test first
- Run `pnpm test` after every implementation to verify
- Test user-visible behavior, not implementation details

## i18n Rules

- Translations live in JSON files: `src/i18n/en/*.json` and `src/i18n/pt-BR/*.json`
- One JSON file per section (common.json, hero.json, about.json, etc.)
- All user-facing text MUST use the translation system, never hardcode strings
- Type-safe: translation keys are typed

## Styling Rules

- Use Tailwind CSS utility classes only
- Start with CSS transitions/animations
- Add Framer Motion only when CSS is not sufficient
- Support dark mode using Tailwind `dark:` variant
- Mobile-first responsive design (default = mobile, `md:` = tablet, `lg:` = desktop)

## Security

- middleware.ts handles locale redirect and route protection
- /backstage/\* routes require authentication
- Never expose API keys or secrets in client components
- Use environment variables for all sensitive config
- Prisma client only in server-side code (lib/, api/, server components)

## Git

- Commit messages in English, semantic format: feat:, fix:, perf:, test:, docs:
- One commit per logical change, keep them small
- Always run lint and tests before committing
