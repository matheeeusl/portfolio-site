## Project

Personal portfolio/resume website with bilingual support (en, pt-BR), dark mode, analytics, and a PostgreSQL backend.

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
- Test watch: `pnpm test:watch`
- Test coverage: `pnpm test:coverage`
- Prisma generate: `pnpm prisma generate`
- Prisma migrate: `pnpm prisma migrate dev`

## Project Structure

```
src/
├── app/
│   ├── [locale]/          # Public pages (pt-BR, en)
│   ├── api/analytics/     # Page view analytics endpoint
│   └── page.tsx           # Redirect to default locale
├── components/
│   ├── layout/            # Header, Footer, Logo, LocaleSwitcher, MobileNav, ContactDropdown
│   ├── sections/          # Hero, About (includes Education), Experience, Projects, Skills, Volunteer
│   │   └── [section]/     # Sub-components (AboutBio, EducationItem, …)
│   └── ui/                # Card, ThemeToggle
├── data/                  # Static resume data (typed)
├── hooks/                 # useScrollReveal
├── i18n/
│   ├── en/                # English translations (JSON per section)
│   ├── pt-BR/             # Portuguese translations (JSON per section)
│   ├── config.ts          # Locale config
│   ├── getDictionary.ts   # Dictionary loader
│   └── LocaleProvider.tsx # Locale context
├── lib/                   # db.ts (Prisma client)
├── test/                  # Global test setup + accessibility tests
├── types/                 # Shared global types only
└── middleware.ts          # Locale redirect
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

Each component follows this pattern:

- `Hero.tsx` — Component file (`"use client"` if it needs state/effects/hooks, server component otherwise)
- `Hero.types.ts` — Props and component-specific types (only if needed)
- `Hero.test.tsx` — Tests (co-located, always test behavior not implementation)

Only use `"use client"` when the component actually needs interactivity (state, effects, browser APIs).
If a component is purely presentational with no state/effects, keep it as a server component.

## TDD Rules

- ALWAYS write the test BEFORE the implementation
- Every component MUST have a co-located .test.tsx file
- If suggesting a function without a test, STOP and write the test first
- Run `pnpm test` after every implementation to verify
- Test user-visible behavior, not implementation details
- Never import real data (e.g. `projects` from `resume.ts`) as test oracles — use `vi.hoisted` + `vi.mock` to define controlled mock data that covers all edge cases explicitly

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

- middleware.ts handles locale redirect
- Never expose API keys or secrets in client components
- Use environment variables for all sensitive config
- Prisma client only in server-side code (lib/, api/, server components)

## Git

- Commit messages in English, semantic format: feat:, fix:, perf:, test:, docs:
- One commit per logical change, keep them small
- Always run lint and tests before committing
