# Draford Eye Care Clinic

A modern marketing site for Draford Eye Care Clinic in Gudu, Abuja. Built with React 19, Vite 8, Tailwind CSS 4 and React Router 7.

## Scripts

```bash
npm run dev      # start the Vite dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
npm run lint     # run ESLint
```

## Project structure

- `src/data/site.js` — clinic details, navigation, services, FAQs, articles, values and other shared content
- `src/components/` — shared UI (navbar, footer, page hero, CTA band, FAQ accordion, reveal animation, logo)
- `src/pages/` — Home, About, Services, Resources, Contact and the 404 page
- `src/lib/useDocumentTitle.js` — per-page document titles

## Design system

The theme is defined CSS-first in `src/index.css` using Tailwind's `@theme` tokens:

- **Palette** — warm paper `canvas`, near-black green `ink`, deep `pine` and warm `clay` accents
- **Type** — Instrument Serif for display headings, Manrope for UI and body copy
- **Components** — shared `.btn`, `.field`, `.eyebrow`, `.container-custom` and section utilities
- **Motion** — subtle scroll reveals and floating hero cards, respecting `prefers-reduced-motion`

## Appointment form

The contact form validates on the client and composes a pre-filled email via `mailto:`. Replace the `handleSubmit` handler in `src/pages/Contact.jsx` with an API or form service (for example Formspree or a serverless endpoint) when a backend is available.
