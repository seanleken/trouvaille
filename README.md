# Trouvaille

Static brochure site for a fictional boutique natural wine bar in Marseille, France.

Built with Astro + Tailwind CSS v3.

## Stack

- [Astro](https://astro.build) — static site generator
- [Tailwind CSS v3](https://tailwindcss.com) — utility-first styling
- Google Fonts — Playfair Display, DM Sans, Caveat
- Vanilla JS — scroll reveals, mobile menu (~2KB)

## Getting Started

```bash
npm install
npm run dev
```

Runs at `http://localhost:4321`.

## Commands

| Command | Action |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Build to `dist/` |
| `npm run preview` | Preview production build |

## Project Structure

```
src/
├── layouts/
│   └── Layout.astro       # Base HTML, fonts, scroll reveal JS
├── components/
│   ├── Nav.astro
│   ├── Hero.astro
│   ├── Philosophy.astro
│   ├── WinePours.astro
│   ├── WineCard.astro
│   ├── OurStory.astro
│   ├── FindUs.astro
│   └── Footer.astro
├── pages/
│   └── index.astro        # Single page
└── styles/
    └── global.css         # Tailwind directives, grain texture, animations
```

## Design

Custom Tailwind tokens are defined in `tailwind.config.js`:

- **Colours:** `bg-cream`, `text-terracotta`, `text-ochre`, `text-olive`, `text-charcoal`, `text-warm-gray`, `bg-plaster`, `text-wine`
- **Fonts:** `font-display` (Playfair Display), `font-body` (DM Sans), `font-accent` (Caveat)
- **Shadow:** `shadow-warm`
