# SPEC.md — Portfolio Site Specification

## Overview

A modern, bilingual (en/pt-BR) portfolio website for a frontend developer.
Features smooth animations, dark mode, authentication, and a hidden backstage area.

## Pages

### Public Pages (/{locale}/)

All public pages are server-rendered with locale-based routing.

#### Home Page (/{locale}/)

Single-page layout with smooth scroll between sections:

1. **Hero Section**
   - Developer name and animated title
   - Short bio (localized)
   - CTA button → scrolls to Projects
   - Subtle entrance animation (CSS)

2. **About Section**
   - Longer bio text (localized)
   - Photo or avatar (optional)

3. **Experience Section**
   - Timeline layout (vertical)
   - Each entry: company, role (localized), date range, technologies
   - "Present" label for current job (localized)

4. **Projects Section**
   - Card grid (responsive: 1 col mobile, 2 tablet, 3 desktop)
   - Each card: title, description (localized), tech tags, GitHub link
   - Featured projects highlighted
   - Future: pull repos from GitHub API dynamically, add links to the cards redirecting to the right href

5. **Skills Section**
   - Grouped by category (frontend, backend, tools, languages)
   - Visual representation (chips/badges with level indicator)

### Backstage (/backstage/)

- Protected by NextAuth authentication
- Login options: GitHub OAuth, Google OAuth, Magic Link
- Content: TBD (game, interactive experience, or exclusive content)
- Shows after successful login only

## Layout Components

### Header

- Logo/name (links to home)
- Navigation links (About, Experience, Projects, Skills)
- Locale switcher (en ↔ pt-BR)
- Dark mode toggle
- Mobile: hamburger menu

### Footer

- Social links (GitHub, LinkedIn, Email)
- Copyright
- "Built with Next.js & Claude Code" badge (optional)

## Technical Requirements

### Performance

- Lighthouse score 90+ in all categories
- Images optimized with next/image
- Fonts preloaded (Geist Sans, Geist Mono)
- Lazy load sections below the fold

### SEO

- Metadata per locale (title, description, og:image)
- robots.txt and sitemap.xml
- JSON-LD structured data (Person schema)

### Accessibility

- WCAG AA contrast compliance
- Keyboard navigation for all interactive elements
- Proper aria-labels
- Skip to content link

### Responsive Breakpoints

- Mobile: 320px - 767px (default)
- Tablet: 768px - 1023px (md:)
- Desktop: 1024px+ (lg:)

## Analytics

- Track page views per locale
- Store in PostgreSQL
- API endpoint: POST /api/analytics
- No external dependencies (no Google Analytics)

## Authentication

- Provider: NextAuth.js
- Strategies: GitHub OAuth, Google OAuth, Email Magic Link
- Session storage: Database (PostgreSQL via Prisma)
- Protected routes: /backstage/\*

## Database Schema (Prisma)

- User (id, email, name, image, provider)
- Account (NextAuth standard)
- Session (NextAuth standard)
- PageView (id, path, locale, timestamp, userAgent)

## Dark Mode

- Toggle in header
- Persist preference in localStorage
- Tailwind `class` strategy
- Respect system preference as default

## i18n

- Locales: en, pt-BR
- Default: pt-BR
- URL structure: /en/_, /pt-BR/_
- Root (/) redirects to default locale
- Translations: JSON files per section per locale
