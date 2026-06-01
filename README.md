# Drakonis Legal

Marketing & client website for **Drakonis Legal LLP**, a fictional elite litigation
law firm. A multi-page, content-rich corporate site presenting practice areas,
attorneys, case results, insights, careers, and a consultation funnel.

> **Power. Precision. Precedent.**

## What it is

A responsive, single-page-application (SPA) law-firm website with a dark, editorial
"obsidian & gold" brand identity. Built as a static front-end (no backend) — forms
and the client portal are simulated client-side.

## Tech stack

| Layer        | Tech                                   |
|--------------|----------------------------------------|
| Framework    | React 19                               |
| Language     | TypeScript                             |
| Build tool   | Vite 8                                 |
| Styling      | Tailwind CSS 3.4 + PostCSS             |
| Routing      | React Router 7                         |
| Animation    | Framer Motion                          |
| Forms        | React Hook Form + Zod validation       |
| Icons        | Lucide React                           |
| Extras       | react-countup, react-intersection-observer |

## Features

- Multi-page SPA with 20+ routes (home, about, practice areas, attorneys,
  case results, insights, careers, consultation, client portal, legal pages)
- Mega-menu navigation with mobile drawer
- Animated hero with consultation mini-form
- Practice-area, attorney, and case detail pages (dynamic `:slug` routes)
- Validated multi-step consultation form (React Hook Form + Zod)
- Dark editorial design system, fully responsive

## Project structure

```
src/
  components/   UI, layout, home sections, feature components
  pages/        Route-level pages
  data/         Static content (attorneys, cases, insights, offices…)
  hooks/        Custom hooks (scroll reveal, active section)
  lib/          Utilities
  types/        Shared TypeScript types
public/         Favicon, static assets
```

## Getting started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Type-check and build for production
npm run build

# Preview the production build
npm run preview
```

## License

Private project.

---

Developed by [Al Amin Robin](https://alaminrobin.com)
