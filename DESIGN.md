# RELINK — Design Style Guide

A reference for the AI agent and developers building the RELINK website. Follow this file for all visual and UI decisions.

---

## 1. Brand Feel

- **Personality:** calm, trustworthy, resilient, human. Urgent but never alarmist.
- **Genre:** humanitarian-tech. Not cyberpunk, not generic SaaS, not charity-poster sad.
- **Core metaphor:** a signal that survives. Mesh nodes, connecting lines, radio waves.
- **Honesty rule:** RELINK is a proposed concept. No fake stats, testimonials, partner logos, or fake "live" data. Illustrative visuals must be labeled "Concept".

---

## 2. Color Palette

Define all colors as CSS variables on `:root`.

```css
:root {
  /* Base */
  --bg-900: #0B1220;      /* page background (deep navy) */
  --bg-800: #111B2E;      /* sections / alt background */
  --bg-700: #1A2740;      /* cards */
  --border: #26364F;      /* hairlines, card borders */

  /* Text */
  --text-100: #F2F5FA;    /* headings */
  --text-300: #B8C3D6;    /* body */
  --text-500: #7F8DA6;    /* muted / captions */

  /* Accents */
  --aid: #FFB020;         /* amber: aid, signal, primary CTA */
  --aid-dark: #E69500;    /* CTA hover */
  --link: #2DD4BF;        /* teal: connectivity, links, nodes */
  --alert: #FF6B5B;       /* use sparingly: problem/urgency highlights */
}
```

**Usage**
- Amber = action and warmth (CTAs, key highlights). Teal = connection (lines, nodes, icons, links). Coral only for problem/urgency moments.
- Ratio: ~80% navy neutrals, ~15% teal, ~5% amber/coral.
- All text must meet **WCAG AA** contrast.

---

## 3. Typography

| Role | Font | Weight | Notes |
|------|------|--------|-------|
| Display / headings | **Space Grotesk** | 600–700 | Tight tracking (-0.02em) |
| Body / UI | **Inter** | 400–500 | Line-height 1.6 |
| Mono (tech labels) | **JetBrains Mono** | 400 | For tags like `LoRaWAN`, `RoIP`, `USSD` |

- Fallbacks: `system-ui, -apple-system, "Segoe UI", sans-serif`.
- Scale (fluid with `clamp`): H1 `clamp(2.5rem, 6vw, 4.5rem)`, H2 `clamp(1.75rem, 4vw, 2.75rem)`, H3 `1.25rem`, body `1rem`, caption `0.875rem`.
- Max line length for paragraphs: **65ch**.

---

## 4. Layout & Spacing

- Mobile-first. Breakpoints: `640px`, `768px`, `1024px`, `1280px`.
- Content container: `max-width: 1200px`, side padding `1.25rem` (mobile) / `2rem` (desktop).
- Section vertical padding: `5rem` mobile / `7rem` desktop.
- Spacing scale (8px base): 4, 8, 16, 24, 32, 48, 64, 96, 128.
- Grids: 1 column (mobile), 2 (tablet), 3 (desktop) for card sections.
- Generous whitespace. One idea per section.

---

## 5. Components

### Navbar
- Sticky, translucent navy (`backdrop-filter: blur(10px)`), 1px bottom border.
- Logo left, anchor links right, amber CTA button. Hamburger on mobile with a slide-down panel.
- Smooth-scroll to sections; highlight the active section link in teal.

### Buttons
- **Primary:** amber background, navy text, `border-radius: 10px`, padding `0.75rem 1.5rem`. Hover: `--aid-dark` plus a slight lift.
- **Secondary:** transparent, 1px teal border, teal text. Hover: teal 10% fill.
- Always show a visible `:focus-visible` outline (2px teal, 2px offset).

### Cards
- Background `--bg-700`, 1px `--border`, radius `16px`, padding `1.5rem`.
- Hover: border shifts to teal, `translateY(-4px)`, soft teal glow (`0 8px 30px rgba(45,212,191,0.12)`).
- Icon top-left in a teal-tinted rounded square, then title, then 1–2 line description.

### Tags / Chips
- Mono font, small, pill shape, teal text on a teal 10% background. Used for the comms stack labels.

### Flow diagram (How It Works)
- Horizontal steps on desktop, vertical on mobile, connected by a dashed teal line with animated "signal" dots.
- Steps: **Need → Coordinate → Match Supplies → Deliver**.

---

## 6. Visual Motif

- **Mesh network:** nodes (small circles) joined by thin lines. Used in the hero background and section dividers.
- **Signal waves:** concentric arcs radiating from a node, for the logo mark and the comms stack section.
- Build everything with **inline SVG and CSS**. No stock photos and no heavy images.
- Optional subtle noise or grain overlay at ~3% opacity for depth.

---

## 7. Motion

- Principle: motion should feel like **signal and connection**, never flashy.
- Hero: slowly drifting mesh nodes with faint line connections (canvas or SVG, capped for performance).
- Scroll reveal: fade-up, `24px` translate, `500ms`, `ease-out`, staggered `80ms` between siblings.
- Hover transitions: `200ms ease`.
- **Must** respect `prefers-reduced-motion: reduce` (disable drifting nodes and reveals, keep static states).

---

## 8. Page Structure

1. Hero
2. The Problem
3. The Solution
4. How It Works
5. Resilient Communication Stack (5 cards)
6. Core Objectives (6-item grid)
7. Who It's For (6 audience cards)
8. Intended Impact + Roadmap (labeled "Proposed Concept")
9. Footer

Alternate section backgrounds between `--bg-900` and `--bg-800` for rhythm.

---

## 9. Accessibility

- Semantic HTML (`header`, `nav`, `main`, `section`, `footer`), one `h1`, logical heading order.
- Alt text for meaningful graphics. `aria-hidden="true"` on decorative SVGs.
- Keyboard navigable; visible focus states.
- Touch targets at least `44x44px`.
- Never rely on color alone to convey meaning.

---

## 10. Performance (the site should mirror the project's resilience)

- Lightweight bundle, no heavy UI libraries.
- Inline SVG over images. Lazy-load anything below the fold.
- Limit to 2 font families plus mono, using `font-display: swap`.
- Target Lighthouse 90+ across Performance, Accessibility, Best Practices, SEO.
- Free-tier deployable (Vercel).

---

## 11. Tone of Copy

- Plain, direct, human. Short sentences.
- Say "people", "communities", "families" instead of "beneficiaries" or "end-users".
- Avoid hype words ("revolutionary", "game-changing"). Lead with the problem, then the idea.
- Always frame RELINK as a concept to be validated through prototyping.

---

## 12. Don'ts

- No neon cyberpunk glows, glitch effects, or horror/dark-fantasy styling.
- No fabricated metrics, quotes, or partners.
- No autoplay audio or video.
- No walls of text. Break content into cards and short blocks.
- No more than 2 accent colors in one component.
