# Design Context — Forge & Flame Custom Metalworks

## Archetype
- **Name:** forge-glow-industrial-bold
- **Colour family:** Bold (hue 15 — ember crimson, accent hue 65 — copper)
- **Profile:** profile-bold.css (zero radii, thick borders, brutalist)
- **Visual identity:** A blacksmith's forge rendered digitally — deep charcoal backgrounds cut by ember-red and copper-gold highlights. Every element is hard-edged, deliberate, and confrontational. The darkness makes the fire colours burn brighter.
- **This site should feel:** Industrial, powerful, fiery
- **This site should NOT feel:** Generic, soft, corporate

## Brand Token Overrides (from mood: industrial, powerful, fiery)
- **Animation base duration:** 0.3-0.4s (snappy, decisive)
- **Stagger delay:** 0.06s (rapid cascade)
- **Heading font-weight override:** 700-900 (heavy)
- **Preferred section density:** Mixed (tight stats + spacious hero for contrast)
- **Border treatment:** Thick (2px+), hard edges, no radius
- **Hover intensity:** Dramatic (background fill, colour inversion)
- **Layout tendency:** Asymmetric, rule-breaking

## Expanded Colour Tokens

| Token | Value | Use For |
|-------|-------|---------|
| --clr-primary | `oklch(45% 0.20 15)` | Deep crimson: CTA buttons, key highlights |
| --clr-primary-light | `oklch(60% 0.20 15)` | Lighter crimson: hover states, emphasis |
| --clr-primary-muted | `oklch(40% 0.10 15)` | Muted crimson: subtle backgrounds |
| --clr-accent | `oklch(75% 0.20 65)` | Copper gold: badges, dividers, text highlights |
| --clr-accent-muted | `oklch(65% 0.12 65)` | Muted copper: accent backgrounds |
| --clr-surface-1 | `oklch(12% 0.02 15)` | Deepest charcoal (= base-100) |
| --clr-surface-2 | `oklch(16% 0.02 15)` | Card background (= base-200) |
| --clr-surface-3 | `oklch(22% 0.03 15)` | Borders, elevated (= base-300) |
| --clr-surface-4 | `oklch(28% 0.03 15)` | Hover states |
| --clr-text-primary | `oklch(95% 0.01 15)` | Main text (warm off-white) |
| --clr-text-secondary | `oklch(75% 0.02 15)` | Secondary text |
| --clr-text-muted | `oklch(55% 0.03 15)` | Labels, captions |

### Opacity Rules
- Gradient overlays on dark backgrounds: **minimum 0.15 opacity**
- Text on dark backgrounds: use `var(--clr-text-secondary)` minimum for readable text
- Subtle backgrounds: `bg-primary/10` to `bg-primary/20` (not /5)
- Card borders: `border-base-300` or `border-accent/20` (visible)

### Hardcoded Colour Rules
- CSS keyframes: `color-mix(in oklch, var(--clr-primary) 40%, transparent)` — NOT raw oklch
- Inline JSX: use `var(--clr-primary)` or `palette.ts` — NOT duplicated values
- OG images: use `palette.ts` hex values

## Typography
- **Heading:** `var(--font-heading)` — Bebas Neue, condensed industrial display, weight 400 (Bebas has one weight, reads as bold due to condensed letterforms)
- **Body:** `var(--font-body)` — Source Sans 3, clean and highly readable at all sizes
- **DO NOT hardcode text-4xl — use type classes from typography.css**

## Signature Effects

### 1. Molten Edge Glow
Apply `.molten-edge` or `.molten-edge-accent` from archetype.css to cards and key containers. Creates ember-coloured shadow glow on edges.
```tsx
<div className="card-featured molten-edge">Content</div>
```

### 2. Anvil Stamp Headers
Apply `.anvil-stamp` from archetype.css to section headings. Adds heavy 3px accent top border + tight padding.
```tsx
<h2 className="type-section anvil-stamp">Our Services</h2>
```

### 3. Spark Trail Dividers
Use WaveDivider with "sharp" variant in accent colour between key sections:
```tsx
<WaveDivider color="oklch(0.75 0.20 65)" variant="sharp" height={48} />
```

### 4. ParticleField as Spark Effect (Hero only)
Use ParticleField "rise" variant for rising spark particles in hero background:
```tsx
<ParticleField color="oklch(0.75 0.20 65)" fallbackColor="rgba(212,147,42,0.6)" variant="rise" count={30} speed={1.5} size={2} />
```

## Layout Rules for This Build
- **Hero layout:** SectionFullBleed with contentPosition="left", dark bg with ParticleField spark overlay
- **Primary card pattern:** SectionBentoGrid columns=3 for services (asymmetric sizing)
- **Container width variety:**
  - Narrow: max-w-3xl (editorial/materials description)
  - Standard: max-w-6xl (services, process)
  - Wide: max-w-7xl (testimonials, stats)
  - Full-bleed: hero, CTA (SectionFullBleed)
- **Section spacing:**
  - `section-spacious`: hero, CTA, signature-project
  - `section-standard`: services, process, testimonials
  - `section-compact`: materials (dense info)
- **Section dividers:** WaveDivider "sharp" variant in accent between hero→signature and services→process. Elsewhere: whitespace only.
- **Section backgrounds:**
  - `section-bg-deep`: hero, CTA, process
  - `section-bg-gradient`: signature-project, services
  - `section-bg-texture`: materials, testimonials

## Anti-Patterns for This Build
- Do NOT centre every heading — at least 3 sections should have left-aligned text
- Do NOT use symmetrical 3-column card grids for more than 1 section
- Do NOT use the same section-bg-* for consecutive sections
- Do NOT make all sections the same density — mix spacious/standard/compact
- Do NOT use `text-base-content/50` for readable text — use `var(--clr-text-secondary)` minimum
- Do NOT use emoji icons — use Lucide React (Hammer, Flame, Building, Sparkles, Wrench, Shield, PenTool)
- Do NOT use `.card-archetype` — use `.card-featured`, `.card-standard`, `.card-compact`
- Do NOT hardcode max-w-7xl on every section — vary container widths
- Do NOT use soft/rounded elements — this is a BOLD profile (zero radii, hard edges)

## What Already Exists (do not rebuild)
- `Reveal.tsx` — scroll-triggered animation wrapper (`@/components/Reveal`)
- `StaggerGroup.tsx` — stagger delay wrapper (`@/components/StaggerGroup`)
- `src/styles/profile.css` — bold structural profile
- `src/styles/typography.css` — fluid type scale + section density
- `src/styles/colour-tokens.css` — filled with OKLCH values
- `src/styles/archetype.css` — grain overlay, anvil-stamp, molten-edge, image treatments
- `src/components/effects/` — WaveDivider, GradientSweep, RingBorder, TracePath, GlowCursor, ParticleField
- `src/components/layouts/` — all 8 layout templates
- `globals.css` — DaisyUI "forge" theme, font tokens, base styles
- `config/site.ts` — business info (`@/config/site`)
- `lib/palette.ts` — hex + OKLCH constants (`@/lib/palette`)

## DaisyUI 5 Syntax Reminder
```css
@plugin "daisyui/theme" { name: "forge"; primary: oklch(...); }
```

## Tailwind CSS v4 Reminder
- `@import "tailwindcss"` not `@tailwind base/components/utilities`
- Custom tokens in `@theme inline { }` blocks
- OKLCH everywhere, not hex/HSL
