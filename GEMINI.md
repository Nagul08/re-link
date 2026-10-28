# RELINK — Project Rules

## Project
RELINK is a proposed disaster-response and relief-coordination concept that improves distribution of food and essential supplies during floods, cyclones, and landslides, especially where connectivity is disrupted. It connects affected communities, NGOs, government agencies, volunteers, and supply providers.

Communication layers explored: satellite, mesh networking, Radio over IP (RoIP), SMS/USSD, LoRaWAN.

This is a concept website, not a live product. Never invent statistics, testimonials, partner logos, or fake live data. Label anything illustrative as "Concept".

## Stack
- React + Vite
- Plain CSS with CSS variables (no heavy UI libraries)
- Free-tier friendly, deployable on Vercel

## Design
Follow the design system in full for every visual decision:

@./DESIGN.md

## Page Sections (in order)
1. Hero
2. The Problem
3. The Solution
4. How It Works
5. Resilient Communication Stack (5 cards)
6. Core Objectives (6-item grid)
7. Who It's For (6 audience cards)
8. Intended Impact + Roadmap (labeled "Proposed Concept")
9. Footer

## Working Rules
- Mobile-first, fully responsive, accessible (WCAG AA).
- Clean component structure: Navbar, Hero, Section, Card, Footer.
- Use real copy from the project, tightened. No lorem ipsum.
- Respect `prefers-reduced-motion`.
- Make sure `npm run dev` works after scaffolding.
- Keep explanations short.
