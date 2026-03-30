/**
 * Palette — Forge & Flame Custom Metalworks
 * Family: Bold | Hue: 15 (ember crimson) | Accent hue: 65 (copper)
 *
 * Used by opengraph-image.tsx and server components that can't read CSS vars.
 * Keep in sync with src/styles/colour-tokens.css.
 */

export const palette = {
  primary:       { oklch: "oklch(50% 0.20 15)", hex: "#A0281A" },
  primaryLight:  { oklch: "oklch(60% 0.20 15)", hex: "#C0392B" },
  primaryMuted:  { oklch: "oklch(40% 0.10 15)", hex: "#5C3028" },
  accent:        { oklch: "oklch(75% 0.20 65)", hex: "#D4932A" },
  accentMuted:   { oklch: "oklch(65% 0.12 65)", hex: "#A8844A" },
  surface1:      { oklch: "oklch(12% 0.02 15)", hex: "#1C1412" },
  surface2:      { oklch: "oklch(16% 0.02 15)", hex: "#261C18" },
  surface3:      { oklch: "oklch(22% 0.03 15)", hex: "#372A24" },
  surface4:      { oklch: "oklch(28% 0.03 15)", hex: "#47382F" },
  textPrimary:   { oklch: "oklch(95% 0.01 15)", hex: "#F5F0EE" },
  textSecondary: { oklch: "oklch(75% 0.02 15)", hex: "#BFB5AF" },
  textMuted:     { oklch: "oklch(55% 0.03 15)", hex: "#887A72" },
} as const;

/** OG image gradients — hex/rgba for Satori compatibility */
export const ogGradients = {
  background: "linear-gradient(150deg, #1C1412 0%, #8B2010 50%, #261C18 100%)",
  glow: "radial-gradient(circle, rgba(139,32,16,0.3) 0%, transparent 60%)",
  accentText: "#D4932A",
  gridLine: "rgba(212,147,42,0.08)",
} as const;

export type PaletteToken = keyof typeof palette;
