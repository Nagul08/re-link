Build a responsive, multi-section marketing/concept website for "RELINK" using React + Vite.

## About the project
RELINK is a proposed disaster-response and relief-coordination concept that improves distribution of food and essential supplies during floods, cyclones, and landslides, especially where mobile networks and internet are disrupted. It connects affected communities, NGOs, government agencies, volunteers, and supply providers so they can communicate needs, see available resources, and coordinate last-mile delivery.

Communication layers explored: satellite communication, mesh networking, Radio over IP (RoIP), SMS/USSD, LoRaWAN.

## Goal of the site
Explain the problem and the concept clearly to judges, NGOs, and potential collaborators, and make it look credible, calm, and human. It is a concept, not a live product, so do NOT invent statistics, testimonials, partner logos, or fake "live" dashboards. Anything illustrative must be labeled "concept".

## Sections (in order)
1. Hero: tagline about keeping relief connected when networks fail, plus a CTA to "See how it works"
2. The Problem: delayed, uneven, duplicated relief; coordination gaps; connectivity loss
3. The Solution: what RELINK does, in 3 short paragraphs max
4. How It Works: a visual flow from need request, to coordination, to supply matching, to last-mile delivery
5. Resilient Communication Stack: 5 cards (Satellite, Mesh, RoIP, SMS/USSD, LoRaWAN), each with a one-line "when it's used" description
6. Core Objectives: the 6 objectives as a clean grid
7. Who It's For: Affected families, NGOs, Government agencies, Volunteers, Supply providers, Emergency teams
8. Intended Impact + Roadmap: start with one use case (food requests and supply matching in a connectivity-disrupted area), then expand. Mark it as "proposed concept, to be validated through prototyping"
9. Footer: project name, short credit line, contact placeholder

## Design direction
- Tone: calm, trustworthy, urgent but not alarmist. Humanitarian-tech feel, not cyberpunk and not generic SaaS.
- Dark navy base with a warm accent (amber/orange for "signal" and "aid") and a secondary teal for connectivity. Keep high contrast.
- Typography: one strong display font plus a clean readable sans (Google Fonts). Large headings, generous spacing.
- Visual motif: signal waves, mesh nodes, and connecting lines. Build with inline SVG/CSS, no stock photos.
- Subtle scroll-reveal animations and an animated mesh-network background in the hero. Respect prefers-reduced-motion.
- Sticky navbar with smooth-scroll anchors and a mobile hamburger menu.

## Technical requirements
- Mobile-first, fully responsive, fast, with a lightweight bundle (the site's own theme should reflect low-bandwidth resilience)
- Accessible: semantic HTML, proper heading order, alt text, focus states, WCAG AA contrast
- Clean component structure (Navbar, Hero, Section, Card, Footer), CSS variables for the color palette
- Free-tier friendly and deployable on Vercel
- No placeholder lorem ipsum; use the real copy above, tightened

## Output
Scaffold the full project, explain the folder structure briefly, and make sure `npm run dev` works.