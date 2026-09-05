# Abraham Morales — Portfolio

Personal portfolio of **Abraham Morales Rodríguez**, software developer working on DevOps and e-learning systems in Seville, Spain.

**Live:** [abrahammor.dev](https://abrahammor.dev) · [abrahammordev-portfolio.vercel.app](https://abrahammordev-portfolio.vercel.app/)

---

## Overview

A single-page React application with four routes — home, about, projects and contact — built around a token-based design system. No component library: every element is styled directly with Tailwind CSS v4 design tokens, which keeps the bundle small and the visual language consistent.

### Features

- **Design tokens** — one set of CSS custom properties drives light and dark themes; the theme is applied before first paint to avoid a flash of the wrong colours.
- **Internationalisation** — full English, Spanish and German content through `i18next`, with the language persisted to `localStorage` and detected from the browser on first visit.
- **Content as data** — projects, experience and skills live in typed modules under `src/data`, with all copy in the i18n bundles, so adding a project never means touching a component.
- **Accessible by default** — skip link, visible focus states, keyboard-navigable modal and filters, `aria-live` regions, and every animation gated behind `prefers-reduced-motion`.
- **Route-level code splitting** — pages and the project modal load on demand.

## Stack

| Area | Tools |
| --- | --- |
| Framework | React 18, TypeScript, Vite 6 |
| Styling | Tailwind CSS v4 (`@theme` tokens), `clsx`, `tailwind-merge` |
| Motion | Framer Motion |
| i18n | i18next, react-i18next |
| Icons | react-icons (Feather, Font Awesome, Simple Icons) |
| Forms | EmailJS |
| Hosting | Vercel |

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Type-check without emitting |

## Project structure

```
src/
├── components/
│   ├── about/        Intro, experience timeline
│   ├── contact/      Contact form and details
│   ├── home/         Hero, "now", featured work, stack, CTA
│   ├── layout/       Header, footer, ambient background
│   ├── projects/     Project card, filters, detail modal
│   └── ui/           Button, Badge, Section, theme and language switches
├── data/             site, projects, experience, skills, now
├── hooks/            theme, scroll and motion-preference hooks
├── i18n/             en.json, es.json, de.json, i18next setup
├── lib/              animation variants, class-name helper
├── pages/            Home, About, Projects, Contact, NotFound
├── routes/           Route table, paths, scroll restoration
└── styles/           globals.css — design tokens and base layer
```

## Editing content

- **Add a project** — append an entry to `src/data/projects.ts`, then add its `tagline`, `description` and `highlights` under `projects.items.<id>` in `src/i18n/en.json`, `es.json` and `de.json`.
- **Update experience** — edit `src/data/experience.ts` (structure) and the `experience.*` keys in the i18n bundles (copy).
- **Change theme colours** — edit the custom properties in `:root` and `.dark` at the top of `src/styles/globals.css`. Nothing else needs to change.

## Contact

[abrahammordev@gmail.com](mailto:abrahammordev@gmail.com) · [LinkedIn](https://www.linkedin.com/in/abrahammordev) · [GitHub](https://github.com/abrahammordev)

© 2026 Abraham Morales Rodríguez.
