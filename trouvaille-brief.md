# Trouvaille — Creative & Technical Brief

> A fictional boutique natural wine bar & bottle shop in Marseille, France.
> Static brochure site built with Astro + Tailwind CSS.

---

## 1. The Business

**Name:** Trouvaille (French for "a lucky find")
**Location:** 14 Rue de la Loge, Le Panier district, Marseille, France
**What they do:** A small natural wine bar and bottle shop tucked into the old port neighbourhood. They source natural, biodynamic, and low-intervention wines from small producers across southern France, with a focus on Provence, Languedoc, and the Rhône Valley. Open evenings only. No reservations — just show up.
**Founded:** 2019 by two friends, Camille Renard and Julien Morel, who left careers in Paris to pursue something slower.
**Vibe:** Warm, unpretentious, a little bit bohemian. The kind of place a local would whisper to you about. Not precious or snobby — wine is for everyone here.

---

## 2. Design Direction

### Aesthetic
**Mediterranean rustic meets modern editorial.** Think sun-faded plaster walls, hand-drawn illustrations, natural textures — but laid out with the confidence and whitespace of a good independent magazine. It should feel handmade but not amateurish, warm but not cluttered. The visual tension is between *organic looseness* and *typographic precision*.

### Mood Keywords
- Sun-bleached
- Textured
- Typographic
- Effortlessly cool
- Lived-in
- Warm evening light
- Unhurried

### What Makes It Unforgettable
The site should feel like you can *feel the warmth* coming off the screen. Grain, texture, and earthy colour combine to evoke a late-summer evening in the south of France. The bold typography and handwritten Caveat accents give it personality that no template could replicate. One standout moment: the hero section where the massive Playfair Display heading, the casual Caveat subtitle, and the warm cream/grain background combine into something that feels like a wine bar menu pinned to a sun-bleached wall.

### Anti-patterns (What to Avoid)
- Clean/sterile SaaS aesthetics
- Purple or blue-toned gradients
- Generic stock photography feel
- Perfectly symmetrical grid layouts
- Inter, Roboto, or any default sans-serif
- Overly polished "luxury brand" coldness
- Dark mode (this site is warm and light)

---

## 3. Design Tokens

### Colour Palette

All colours are defined as custom Tailwind theme extensions in `tailwind.config.js` — use them as standard Tailwind classes (e.g., `bg-cream`, `text-terracotta`, `border-warm-gray`). **Do NOT use CSS custom properties or arbitrary value syntax like `bg-[var(--color-cream)]` or `bg-[#F5EDE3]`.** Everything goes through the Tailwind config.

| Tailwind Name | Hex | Usage |
|---|---|---|
| `cream` | `#F5EDE3` | Page background, primary surface |
| `terracotta` | `#C2704E` | Primary accent, CTAs, highlights |
| `ochre` | `#D4A54A` | Secondary accent, warm highlights |
| `olive` | `#6B7B4C` | Tertiary accent, natural/organic elements |
| `charcoal` | `#2E2A27` | Body text, headings |
| `warm-gray` | `#8C8279` | Secondary text, captions |
| `plaster` | `#E8DDD1` | Card backgrounds, subtle sections |
| `wine` | `#722F37` | Decorative accent, sparingly used |

Background should have a subtle grain/noise texture overlay to avoid flatness.

### Typography

Fonts are extended in `tailwind.config.js` under `fontFamily` so they can be used as `font-display`, `font-body`, and `font-accent` classes.

| Role | Tailwind Class | Font | Weight | Notes |
|---|---|---|---|---|
| Display / Hero | `font-display` | **Playfair Display** | 700, 900 | Chunky serif with character. Used large. |
| Section Headings | `font-display` | **Playfair Display** | 700 | Slightly smaller than hero, still commanding. |
| Body | `font-body` | **DM Sans** | 400, 500 | Clean, friendly, good readability at small sizes. |
| Accent / Labels | `font-accent` | **Caveat** | 400, 700 | Handwritten feel. Use for annotations, labels, small callouts — never for body text. |

All from Google Fonts. The interplay between the confident serif (Playfair) and the handwritten (Caveat) is core to the brand identity.

### Spacing Scale
Use Tailwind's default spacing scale. Lean generous — this site breathes. Sections should have significant vertical padding (`py-24` to `py-32` range). Don't crowd elements.

### Border Radius
Minimal. Mostly `rounded-none` or `rounded-sm`. This isn't a bubbly UI — it's grounded and tactile. Exception: the occasional soft rounded element for organic contrast.

### Shadows
Avoid hard drop shadows. A custom `shadow-warm` is defined in the Tailwind config for the soft, warm shadow used on hover states: `0 4px 20px rgba(46,42,39,0.08)`. Use `shadow-warm` class — do not use arbitrary shadow values.

---

## 4. Page Structure

Single-page brochure with smooth scroll navigation. Sections:

### 4.1 Navigation
- Fixed/sticky top nav, minimal
- Logo (wordmark "Trouvaille" in Playfair Display) on the left
- Nav links right-aligned: Nos Vins · Notre Histoire · Nous Trouver
- Nav should have a subtle background blur/opacity when scrolling over content
- Mobile: hamburger menu with full-screen overlay

### 4.2 Hero Section
- **The centrepiece.** Full viewport height.
- Large display heading: *"Le vin est une trouvaille."* — set in Playfair Display, very large (think `text-7xl` to `text-9xl`), with a Caveat annotation underneath: *"Bar à vins naturels · Le Panier, Marseille"*.
- **Visual approach:** Rather than a complex illustrated scene, use bold typographic composition as the hero. The heading itself is the art — use scale, layout, and the interplay between Playfair and Caveat to create drama. Consider splitting the phrase across lines with different sizes/weights, or using a large decorative "T" drop cap. Pair with a few simple decorative CSS elements: a terracotta horizontal rule, a small cluster of dots, or a simple wine-glass silhouette (basic geometric shapes only — circle + triangle + line, not a detailed drawing).
- Background: `bg-cream` with grain texture. Optionally add a large, faded, watermark-style single character or word in `text-plaster` behind the heading for depth.
- Subtle entrance animation: elements fade/slide in with staggered timing (CSS only).
- A small scroll indicator at the bottom: the word "défiler" in Caveat with a simple CSS animated down-arrow (border trick, not SVG).

### 4.3 Introduction / Philosophy
- Short paragraph about what Trouvaille is. Keep it to 3-4 sentences max.
- *"We believe wine should taste like the place it comes from and the person who made it."*
- Layout: text centred in a narrow column (`max-w-2xl`), with generous padding. Use a Caveat-font pull quote above or below the main text, slightly rotated (`-rotate-2`) for a casual, annotated feel.
- Decorative elements: simple CSS-only — a terracotta horizontal line, decorative bullet dots, or a bracket/parenthesis motif in `text-warm-gray`. No complex SVG illustrations.

### 4.4 "Cette Semaine" (This Week's Pours)
- A curated selection of 3 wines currently being poured.
- Card-style layout (3-column on desktop, stacked on mobile), each card showing:
  - Wine name (Playfair Display)
  - Region and grape variety (DM Sans, `text-warm-gray`)
  - Wine type badge — a small label like "Rouge", "Blanc", or "Pét-nat" with a coloured dot or subtle background tint (terracotta for red, ochre for white, olive for pét-nat)
  - A one-line tasting note in a casual voice (DM Sans italic)
  - Price by glass (Caveat font, larger)
- Cards: `bg-plaster`, `border-warm-gray` at low opacity (`border-opacity-20`), slight hover lift with `shadow-warm`. Keep cards simple and typographic — the personality comes from the font pairing and layout, not illustrated embellishments.
- Section header "Cette semaine" in Caveat, large, slightly rotated.

### 4.5 Notre Histoire (Our Story)
- Brief origin story of Camille and Julien.
- Keep it human and short — 2 short paragraphs max.
- Layout: asymmetric — text column offset to one side (`ml-auto max-w-xl` on desktop). The opposite side has a large decorative year "2019" in `font-display` at massive scale (`text-[12rem]`), low opacity in `text-plaster`, acting as a background/watermark element. This is pure CSS typography — no illustration needed.
- A Caveat annotation/aside near the text, like *"(on ne regrette rien)"* — slightly rotated.

### 4.6 Nous Trouver (Find Us)
- Address: 14 Rue de la Loge, Le Panier, 13002 Marseille
- Hours: Mardi–Samedi, 18h–00h (Closed Sun & Mon)
- **No map.** Instead of an illustrated or embedded map (which tends to look bad when AI-generated), use a purely typographic/layout approach: display the address prominently as a large styled text block — the address itself becomes a design element. Set "Le Panier, Marseille" in large Playfair Display, with the street address in DM Sans below. Think of it like a mailing label or vintage postcard layout.
- Optionally include a one-line walking direction in Caveat: *"À 5 minutes du Vieux-Port, cherchez la porte terracotta."*
- Contact: email (bonjour@trouvaille-marseille.fr) and Instagram (@trouvaille.marseille) as simple styled links with terracotta hover colour.
- Layout: this section can use a two-column grid — address/hours on one side, contact on the other. Or a centred stacked layout with generous spacing.

### 4.7 Footer
- Simple. Logo wordmark "Trouvaille" in Playfair Display, the address, and the sign-off line.
- *"Buvez ce que vous aimez."* in Caveat, as the final line — slightly larger, slightly rotated.
- Decorative element: a simple CSS horizontal line in terracotta, or a row of three dots (·  ·  ·). No illustrated SVGs.
- No heavy link lists or newsletter signups.

---

## 5. Visual Elements — What Works (and What to Avoid)

### The Principle
This site achieves its visual personality through **typography, colour, texture, and layout** — NOT through complex SVG illustrations. AI code generation struggles with detailed hand-drawn SVGs (they end up looking awkward and mechanical). Instead, lean hard into what code *can* do beautifully: bold type composition, CSS textures, colour, and spatial rhythm.

### What Claude Code Should Use
- **Typography as decoration:** Oversized watermark text, drop caps, large numerals, mixed font sizing, rotated labels in Caveat. Text IS the illustration.
- **CSS-only decorative elements:** Coloured dots, horizontal rules, bracket motifs, simple geometric shapes (circles, lines), border treatments. These are reliable and crisp.
- **Grain/noise texture:** A subtle SVG noise filter or repeating tiny PNG overlaid at low opacity. This is a simple, proven technique.
- **Colour blocking:** Sections with alternating `bg-cream` and `bg-plaster` backgrounds to create rhythm.
- **Simple Unicode/symbol decorations:** Wine-related symbols (·, •, —, ✦) as dividers or list markers.

### What Claude Code Should NOT Attempt
- Complex illustrated scenes (wine bottles, grapevines, corkscrews, shopfronts, maps)
- Hand-drawn or sketchy line art — it never looks hand-drawn when AI generates it
- Continuous-line illustrations
- Detailed SVG icons beyond the most basic shapes
- Any SVG that tries to represent a real-world object (a building, a plant, a person)

### Simple SVGs That ARE Okay
- A circle (for colour dots / wine type indicators)
- A straight or wavy horizontal line (for dividers) — CSS `border` is even better
- A simple chevron or arrow (for scroll indicators)
- Abstract shapes: a blob, a ring, a simple curve — as long as they're geometric/abstract, not representational

---

## 6. Texture & Background Treatment

- The page background should not be a flat colour. Layer a subtle noise/grain texture over `bg-cream` using a CSS pseudo-element. Recommended approach: an inline SVG `<filter>` with `feTurbulence` applied to a full-screen overlay at 3-6% opacity. This is pure CSS/SVG and renders reliably.
- Section dividers: generous whitespace is the primary divider. Optionally add a simple centred decorative element between sections: three dots (· · ·), a short `border-terracotta` `<hr>`, or a thin line. Keep it simple — CSS only.
- Wine cards use `bg-plaster` to differentiate from the page.

---

## 7. Animation & Interaction

Keep it restrained but intentional:

- **Page load:** Staggered fade-in of hero elements (heading, then subtext, then scroll indicator). CSS `@keyframes` + `animation-delay` only.
- **Scroll reveals:** Sections fade up gently as they enter the viewport. Use a small vanilla JS `IntersectionObserver` snippet (~15 lines). Add a `.reveal` class that transitions `opacity` and `translateY`.
- **Hover states:** Wine cards lift slightly on hover (`translateY(-4px)`) with a warm shadow transition. Nav links get an underline that animates in from left (`scaleX` transform on a pseudo-element).
- **Smooth scroll:** `scroll-behavior: smooth` in CSS for anchor links.
- **Caveat labels:** Slightly rotated (`-rotate-1` to `-rotate-3`) for a casual, placed-by-hand feel. This is static but reads as lively.
- **No parallax.** No scroll-jacking. No SVG path animations. Keep it natural and reliable.

---

## 8. Technical Setup

### Stack
- **Astro** (latest stable) — static output, zero JS by default
- **Tailwind CSS v3** — utility-first styling. **Use v3, NOT v4.** Configure via `tailwind.config.js` (or `.ts`).
- **Google Fonts** — Playfair Display, DM Sans, Caveat
- **Vanilla JS only** — for scroll reveals and mobile menu toggle. No React/Vue/Svelte needed.

### Tailwind Configuration

**CRITICAL:** Use Tailwind v3 with a `tailwind.config.js` file. Extend the theme with all custom colours, fonts, and shadows. All custom values must be in the config — never use CSS variables or arbitrary value bracket syntax like `bg-[#F5EDE3]` or `text-[var(--color)]`. If a value isn't in the config, add it to the config.

The `tailwind.config.js` should extend `theme` with:
- `colors`: cream, terracotta, ochre, olive, charcoal, warm-gray, plaster, wine (hex values from Section 3)
- `fontFamily`: display (Playfair Display), body (DM Sans), accent (Caveat)
- `boxShadow`: warm (`0 4px 20px rgba(46,42,39,0.08)`)

This means in templates you write `bg-cream`, `text-terracotta`, `font-display`, `shadow-warm` — clean, readable, no bracket hacks.

### Project Structure
```
trouvaille/
├── src/
│   ├── layouts/
│   │   └── Layout.astro          # Base HTML layout with fonts, meta, grain overlay
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── Philosophy.astro
│   │   ├── WinePours.astro
│   │   ├── WineCard.astro
│   │   ├── OurStory.astro
│   │   ├── FindUs.astro
│   │   └── Footer.astro
│   ├── pages/
│   │   └── index.astro           # Single page composing all sections
│   └── styles/
│       └── global.css            # Tailwind v3 directives (@tailwind base/components/utilities), grain texture, base font styles
├── public/
│   └── (static assets if any)
├── astro.config.mjs
├── tailwind.config.js
└── package.json
```

### Fonts Loading
Import via Google Fonts `<link>` in the layout head. Use `font-display: swap`.

### Deployment
Static output (`astro build` → `dist/`). Deployable to Netlify, Vercel, Cloudflare Pages, or any static host.

### Performance Targets
- Zero JavaScript shipped unless needed for scroll reveals and mobile menu (should be < 2KB total).
- Total page weight under 500KB including fonts.
- Lighthouse score: aim for 95+ across all categories.

---

## 9. Copy & Content

All text on the site should be in **French** with a warm, casual tone. Not formal, not slang — like a friend who knows a lot about wine but doesn't lecture you. Short sentences. Occasional playful asides.

### Key copy to include:

**Hero tagline:** *"Le vin est une trouvaille."*
**Hero subtitle (Caveat):** *"Bar à vins naturels · Le Panier, Marseille"*

**Philosophy snippet:**
*"Chez Trouvaille, on croit que le bon vin raconte une histoire — celle d'un terroir, d'un vigneron, d'une saison. Pas de listes interminables, juste une sélection de cuvées qu'on aime vraiment. Venez comme vous êtes."*

**This Week's Wines (example data):**

1. **Les Fesses** — Domaine de la Bohème, Languedoc
   Grenache · Rouge · *Cerises, garrigue et une finale qui danse.* · 7€/verre

2. **Blanc Bec** — Mas de l'Ange, Provence
   Rolle · Blanc · *Salin, vif, comme une baignade à Sormiou.* · 8€/verre

3. **Pétillant Naturel** — La Ferme des Music, Rhône
   Clairette · Pét-nat · *Des bulles joyeuses, parfait pour un mardi soir.* · 6€/verre

**Our Story snippet:**
*"En 2019, Camille et Julien ont quitté Paris avec une idée simple : ouvrir un endroit où le vin naturel se boit sans chichis. Ils ont trouvé un petit local dans Le Panier, le quartier le plus vieux de Marseille, et Trouvaille est née — un bar, une cave, un refuge pour les curieux."*

**Footer sign-off:** *"Buvez ce que vous aimez."*

---

## 10. Summary for Claude Code

Build a single-page Astro static site for Trouvaille, a fictional Marseille natural wine bar. The design is Mediterranean rustic meets modern editorial — warm, textured, and unhurried. Use the colour tokens, typography stack, and component structure defined above.

**Tailwind v3 only.** All custom colours, fonts, and shadows are defined in `tailwind.config.js` and used as standard utility classes (`bg-cream`, `text-terracotta`, `font-display`, `shadow-warm`). Never use CSS custom properties, arbitrary value brackets like `bg-[#hex]` or `text-[var(--x)]`, or Tailwind v4 syntax. If a value isn't in the config, add it to the config.

**The visual personality comes from typography, texture, and colour — NOT from complex SVG illustrations.** Use oversized type as decoration, grain textures for warmth, the Playfair/Caveat font pairing for character, and generous whitespace for breathing room. Every decorative element should be achievable with CSS and basic HTML — no illustrated scenes, no hand-drawn art, no detailed SVG objects. If you're tempted to draw a wine bottle in SVG, use a large Playfair Display "🍷" or a simple coloured circle instead.

Ship zero unnecessary JS. All copy is in French. The site should feel like warm evening light on old stone.
