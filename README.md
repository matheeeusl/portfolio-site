# Portfolio Site

Personal portfolio/resume website with bilingual support (pt-BR / en), dark mode, analytics, and a PostgreSQL backend.

## Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4
- **Auth**: NextAuth.js v5 (GitHub OAuth, Google OAuth, Magic Link)
- **Database**: PostgreSQL + Prisma ORM
- **Testing**: Vitest + Testing Library (co-located)
- **Package manager**: pnpm

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL instance (local or remote)
- pnpm

### Installation

```bash
pnpm install
```

### Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```env
DATABASE_URL=postgresql://...
NEXTAUTH_SECRET=...
GITHUB_ID=...
GITHUB_SECRET=...
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
```

### Database Setup

```bash
pnpm prisma migrate dev
pnpm prisma generate
```

### Running

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command               | Description                  |
| --------------------- | ---------------------------- |
| `pnpm dev`            | Start dev server             |
| `pnpm build`          | Production build             |
| `pnpm lint`           | Run ESLint                   |
| `pnpm test`           | Run tests once               |
| `pnpm test:watch`     | Run tests in watch mode      |
| `pnpm test:coverage`  | Run tests with coverage      |
| `pnpm prisma generate`| Regenerate Prisma client     |
| `pnpm prisma migrate dev` | Run DB migrations        |

## Project Structure

```
src/
├── app/
│   ├── [locale]/          # Public pages (pt-BR, en)
│   ├── api/analytics/     # Page view analytics endpoint
│   └── page.tsx           # Redirect to default locale
├── components/
│   ├── layout/            # Header, Footer, Logo, LocaleSwitcher, MobileNav, ContactDropdown
│   ├── sections/          # Hero, About, Experience, Projects, Skills, Volunteer
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
├── types/                 # Shared global types
└── middleware.ts          # Locale redirect
prisma/
└── schema.prisma
```

## Features

- Bilingual (pt-BR / en) with locale-aware routing
- Dark mode (default)
- Profile photo in Hero section (responsive: circular on mobile, rounded rect on desktop)
- Expandable project descriptions (modal)
- Page view analytics stored in PostgreSQL
- WCAG AA accessibility (axe-core verified)
- SEO: JSON-LD schema, sitemap, robots.txt
- Mobile-first responsive layout
