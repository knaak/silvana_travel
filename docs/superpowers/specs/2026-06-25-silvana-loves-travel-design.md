# Silvana Loves Travel — Website Design Spec

**Date:** 2026-06-25
**Project:** Static travel business website for a TICO-certified travel agent based in Canada

---

## Overview

A modern, sleek, visually heavy single-page static website for **Silvana Loves Travel**, a TICO-certified Canadian travel agency. The site advertises the business, highlights Silvana's personal travel expertise, bilingual capability (English and Spanish), and destination specialisms (Europe, Caribbean, South America). It provides clear contact information and drives visitors toward a free consultation.

---

## Goals

- Establish trust and personal brand for a solo travel agent
- Showcase destination expertise through compelling imagery
- Drive leads via a single clear CTA: "Book a Free Consultation" → email
- Communicate TICO certification (consumer protection credibility)
- Work beautifully on mobile phones (primary use case)

---

## Technical Approach

- **Architecture:** Single-page scrolling narrative
- **Stack:** Pure HTML5 + CSS3 + minimal vanilla JS (no frameworks)
- **Files:** `index.html`, `style.css`, `script.js`
- **Images:** Unsplash direct URLs (hotlinking permitted under Unsplash licence)
- **Fonts:** Google Fonts — Playfair Display + Inter
- **Font loading:**
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Playfair+Display:ital,wght@0,400;1,400&display=swap" rel="stylesheet">
  ```
  Fallback stacks: `'Playfair Display', Georgia, serif` and `'Inter', system-ui, sans-serif`
- **Global scroll behaviour:** `html { scroll-behavior: smooth; }` — enables smooth scrolling for all anchor links
- **Responsive:** Mobile-first using CSS Flexbox, Grid, and `clamp()` for fluid typography
- **No build step:** Open `index.html` directly in a browser

---

## Visual Identity

### Color Palette

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| Primary | Deep Teal | `#1A4A5A` | Nav background, Why Me section background |
| Warm Gold | Gold (large) | `#C89B3C` | CTA button backgrounds, large decorative accents, icon color, TICO badge border |
| Accessible Gold | Gold (small text) | `#7A5A18` | Small text on light/cream backgrounds: section labels (11px), TICO badge text, destination tag borders/text. `#C89B3C` may be used for decorative borders (non-text) only. |
| Highlight | Terracotta | `#C4622D` | Hover state for all CTA buttons and interactive elements |
| Light BG | Cream | `#F8F3EC` | About and Testimonials section backgrounds |
| Text | Charcoal | `#2C2323` | Body text, CTA button text |
| Overlay | Dark | `rgba(0,0,0,0.55)` | Hero and card image overlays |

**Contrast (WCAG AA):**
- White text on `rgba(0,0,0,0.55)` overlay: passes AA
- Gold `#C89B3C` background + charcoal `#2C2323` text (CTA button): passes AA
- Accessible gold `#7A5A18` on cream `#F8F3EC`: 5.76:1, passes AA (use for all small text including 11px labels)
- White on teal `#1A4A5A` (nav links): passes AA

### Typography

| Use | Font | Weight | Size |
|-----|------|--------|------|
| Hero/page title | Playfair Display italic | 400 | `clamp(2.8rem, 6vw, 5rem)` |
| Section headings | Playfair Display regular | 400 | `clamp(2rem, 4vw, 3rem)` |
| Section sub-headings | Playfair Display italic | 400 | `clamp(2rem, 4vw, 3.2rem)` |
| Body copy | Inter | 400 | 15–18px (context-specific) |
| Buttons/labels | Inter | 600 | 13–16px |
| Light intro copy | Inter | 300 | `clamp(1rem, 2.5vw, 1.4rem)` |

Line height: 1.7 for body. All font sizes use `clamp()` for fluid scaling.

**Focus styles (keyboard navigation):**
Add globally in `style.css`:
```css
:focus-visible {
  outline: 2px solid #C89B3C;
  outline-offset: 3px;
  border-radius: 2px;
}
```
This ensures visible focus rings on all interactive elements against any background.

---

## Tagline

> "The world is better when someone who loves it plans your trip."

---

## Contact

- **Email:** silvana@silvanalovestravel.ca
- **CTA link:** `mailto:silvana@silvanalovestravel.ca?subject=Free%20Consultation%20Request`
- No contact form — static site, no backend

---

## Default Section Padding

Unless overridden per section: `padding: 80px 24px` (mobile) and `padding: 100px 80px` (desktop ≥768px). Apply via a `.section` class used on all content sections.

---

## Page Sections (top to bottom)

### 1. Sticky Navigation Bar

**Section IDs for anchors:**
| Nav link | href | Section id |
|----------|------|------------|
| About | `#about` | `id="about"` on About section |
| Destinations | `#destinations` | `id="destinations"` on Destinations section |
| Why Me | `#why-me` | `id="why-me"` on Why Me section |
| Contact | `#contact` | `id="contact"` on Contact section |

All sections need `scroll-margin-top: 70px` to compensate for the sticky nav height (~60px) — prevents headings from hiding under the bar on anchor scroll.

**Nav markup:**
- `<nav>` element, `position: sticky; top: 0; z-index: 100; background: #1A4A5A`
- Left: `<a href="#" class="nav-logo">` — "Silvana Loves Travel" wordmark, Playfair Display 20px, white, `text-decoration: none`
- Right (desktop ≥768px): anchor links — About · Destinations · Why Me · Contact — Inter 600 15px, white, `text-decoration: none`; hover: `text-decoration: underline; text-underline-offset: 4px`
- Estimated nav height: ~60px — use this value for `scroll-margin-top` on sections

**Mobile hamburger (<768px):**
- Button: 44×44px, inline SVG three-bar icon (`aria-hidden="true"` on SVG), `aria-label="Open navigation"`, `aria-expanded="false"` (toggled by JS), white icon
- Panel: `max-height: 0; overflow: hidden; transition: max-height 0.25s ease; background: #1A4A5A`. Open state: `max-height: 300px`
- Links in panel: stacked vertically, Inter 600 16px, white, `padding: 12px 24px; display: block; text-decoration: none`
- **Close triggers:**
  1. Anchor link tap → closes menu, scrolls to section
  2. Escape key → closes menu, returns focus to hamburger button
  3. Outside click → `document.addEventListener('click', e => { if (isOpen && !nav.contains(e.target)) closeMenu() })`
- **On open:** set `aria-expanded="true"`, first nav link receives `focus()`
- **On close:** set `aria-expanded="false"`, hamburger button receives `focus()` if closed by Escape

### 2. Hero Section

- `<section>` — `position: relative; height: 100svh; /* fallback: */ height: 100vh`
- CSS: `background-image: url('https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1600&q=80'); background-size: cover; background-position: center; background-repeat: no-repeat`
- `::before` pseudo-element: `content: ''; position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.65) 100%); z-index: 0`
- Content wrapper: `position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; height: 100%; padding: 24px`
  - Business name `<h1>`: Playfair Display italic, `clamp(2.8rem, 6vw, 5rem)`, white
  - Tagline `<p>`: Inter 300, `clamp(1rem, 2.5vw, 1.4rem)`, `#F8F3EC`, `max-width: 600px`
  - CTA `<a>`: "Book a Free Consultation", `href="mailto:silvana@silvanalovestravel.ca?subject=Free%20Consultation%20Request"`, display inline-block, `background: #C89B3C`, `color: #2C2323`, Inter 600 16px, padding `14px 32px`, `border-radius: 4px`, `text-decoration: none`, margin-top `28px`; hover: `background: #C4622D`
  - TICO trust `<p>`: "TICO Registered Travel Agent · Canada", Inter 400 13px, `rgba(255,255,255,0.7)`, margin-top 12px
- Scroll chevron: `position: absolute; bottom: 24px; left: 50%; transform: translateX(-50%); z-index: 1`, white downward chevron SVG 24×24px, `aria-hidden="true"`.
  Animation: `@keyframes bounce { 0%,100% { transform: translateX(-50%) translateY(0); opacity:1 } 50% { transform: translateX(-50%) translateY(8px); opacity:0.4 } }` — `animation: bounce 1.5s ease-in-out infinite`. `@media (prefers-reduced-motion: reduce) { animation: none }`

### 3. About Silvana

- `id="about"`, `scroll-margin-top: 70px`, class `.section`, background Cream `#F8F3EC`
- **Layout:** `display: grid; grid-template-columns: 1fr` (mobile) → `grid-template-columns: 1fr 1fr; gap: 60px; align-items: center` (≥768px)
- **Photo placeholder:** `<div>` with `aspect-ratio: 3/4; max-width: 300px; background: #D4C5B0; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin: 0 auto`
  Inside: "SL" span, Playfair Display italic 48px, charcoal
  HTML comment above: `<!-- Replace with Silvana's headshot. Min 600×800px JPEG. Swap div for: <img src="silvana.jpg" alt="Silvana, TICO-certified travel agent" style="width:100%;border-radius:8px"> -->`
- **Text block:**
  - Label `<span>`: "YOUR TRAVEL EXPERT" — Inter 600, 11px, letter-spacing 2px, `#7A5A18`, uppercase, `display: block; margin-bottom: 12px`
  - `<h2>`: "Meet Silvana" — Playfair Display regular, `clamp(2rem, 4vw, 3rem)`, charcoal
  - Bio `<p>`: "I've spent years exploring the world's most beautiful destinations — from the sun-drenched coasts of the Mediterranean to the ancient wonders of South America and the crystal waters of the Caribbean. As a TICO-certified agent, I bring that firsthand passion to every trip I plan. My goal is simple: to make your journey as personal, seamless, and unforgettable as the memories you'll bring home." — Inter 400 16px, charcoal, line-height 1.7
  - Bilingual badge `<span>`: "English · Español" — `background: #1A4A5A; color: white; font: 600 13px Inter; padding: 6px 16px; border-radius: 20px; display: inline-block; margin-top: 16px`
  - TICO badge `<span>`: "TICO Registered" — `border: 1px solid #C89B3C; color: #7A5A18; font: 600 12px Inter; padding: 6px 12px; border-radius: 4px; display: inline-block; margin-left: 10px`, `title="Travel Industry Council of Ontario — protecting Canadian travellers"`
  - TICO number `<span>`: "Reg. #XXXXXX" — Inter 400 11px, `#1A4A5A`, `display: block; margin-top: 4px`. **Pre-launch blocker: replace #XXXXXX with real TICO registration number.**
  - Destination tags `<div>` (margin-top 20px): three `<span>` pills — "Europe", "Caribbean", "South America" — `border: 1px solid #7A5A18; color: #7A5A18; font: 400 12px Inter; padding: 4px 12px; border-radius: 20px; display: inline-block; margin: 4px`

### 4. Destinations

- `id="destinations"`, `scroll-margin-top: 70px`, class `.section`, background white
- Section `<h2>`: "Where Will You Go?" — Playfair Display regular, centered, `clamp(2rem, 4vw, 3rem)`, charcoal
- Subtitle `<p>`: "Explore the destinations Silvana knows best" — Inter 400 16px, `#666666`, centered, margin-bottom 48px
- Cards grid: `display: grid; gap: 24px`
  - Mobile: `grid-template-columns: 1fr`
  - Tablet 768–1023px: `grid-template-columns: 1fr 1fr`. Third card: `grid-column: 1 / -1; max-width: 50%; margin-inline: auto`
  - Desktop ≥1024px: `grid-template-columns: repeat(3, 1fr)`

- **Each card `<div>`:** `role="img"` + `aria-label="[Region]: [description]"` (e.g., `aria-label="Europe: From Rome's cobblestones to Santorini's cliffs"`)
  - `aspect-ratio: 3/4; border-radius: 8px; overflow: hidden; position: relative`
  - `background-image: url(...); background-size: cover; background-position: center`
  - Inner overlay `<div>`: `position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)`
  - Inner text `<div>`: `position: absolute; bottom: 20px; left: 20px; right: 20px`
    - Region name: Playfair Display italic, white, `clamp(1.6rem, 3vw, 2.2rem)`
    - Description: Inter 300, white, 14px, margin-top 4px

  **Card content:**

  | Region | Image URL | Description |
  |--------|-----------|-------------|
  | Europe | `https://images.unsplash.com/photo-1499678329028-101435549a4e?w=800&q=80` | From Rome's cobblestones to Santorini's cliffs |
  | Caribbean | `https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&q=80` | Crystal waters, white sands, and endless sunshine |
  | South America | `https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80` | Ancient wonders and breathtaking landscapes |

### 5. Why Book With Me

- `id="why-me"`, `scroll-margin-top: 70px`, class `.section`, background Deep Teal `#1A4A5A`
- `<h2>`: "Why Travel With Silvana?" — Playfair Display italic, white, centered, `clamp(2rem, 4vw, 3rem)`
- Subtitle `<p>`: "The difference between booking a trip and living one" — Inter 300, `rgba(255,255,255,0.75)`, centered, margin-bottom 48px
- Tiles grid: `display: grid; gap: 16px; grid-template-columns: 1fr 1fr` (mobile) → `grid-template-columns: repeat(4, 1fr); gap: 24px` (≥768px)

- **Each tile `<div>`:** `background: rgba(255,255,255,0.06); border-radius: 8px; padding: 28px 24px; text-align: center`
  - Icon: Heroicons inline SVG (MIT licence), `width="40" height="40" stroke="currentColor" fill="none"`, wrapper `color: #C89B3C`
  - Title `<h3>`: Inter 600, white, 16px, margin-top 12px
  - Body `<p>`: Inter 400, `rgba(255,255,255,0.72)`, 14px, line-height 1.6, margin-top 8px

  **Tile content (use Heroicons outline variants):**

  | Heroicon name | Title | Body |
  |---------------|-------|------|
  | `shield-check` | TICO Certified | Your booking is protected by Canada's Travel Industry Council of Ontario |
  | `chat-bubble-left-right` | Bilingual EN/ES | Serving English and Spanish-speaking travellers with equal fluency |
  | `user-circle` | Personal Service | Real human expertise — not an algorithm, not a chatbot |
  | `globe-americas` | Destination Expert | Deep firsthand knowledge of Europe, the Caribbean, and South America |

### 6. Testimonials

- `id="testimonials"`, `scroll-margin-top: 70px` (not linked from nav but useful for direct linking), class `.section`, background Cream `#F8F3EC`
- `<h2>`: "What Travellers Say" — Playfair Display regular, centered, `clamp(2rem, 4vw, 3rem)`, charcoal

- **Mobile layout:** `display: flex; overflow-x: auto; scroll-snap-type: x mandatory; gap: 16px; padding: 0 24px 16px`; hide scrollbar: `scrollbar-width: none` + `::-webkit-scrollbar { display: none }`
- **Desktop layout (≥768px):** `display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px`
- Each card `<div>`: `scroll-snap-align: start; min-width: 85vw` (mobile only, remove at ≥768px) — `background: white; border-radius: 8px; padding: 28px; box-shadow: 0 2px 12px rgba(0,0,0,0.07); flex-shrink: 0`
  - Opening quote `<span>` `aria-hidden="true"`: `"` — Playfair Display italic, 72px, `#C89B3C`, `line-height: 0.8; display: block; margin-bottom: 8px`
  - Quote `<p>`: Inter 400 15px, charcoal, line-height 1.7
  - Attribution `<p>`: Inter 600 13px, `#1A4A5A`, margin-top 16px

  **Placeholder quotes (replace with real testimonials before launch):**

  | Quote | Attribution |
  |-------|-------------|
  | "Silvana planned our honeymoon in Italy and it was absolutely perfect. Every detail was thoughtful and personal — we never could have done it ourselves." | — Priya & Daniel, Amalfi Coast |
  | "As Spanish speakers, it was so refreshing to work with someone who truly understood us. Silvana found us an incredible resort in the Dominican Republic." | — Carlos & Ana, Dominican Republic |
  | "I've booked travel online for years. Silvana saved us time, money, and stress — and got us experiences we'd never have found on our own." | — Jennifer M., Patagonia, Argentina |

### 7. Contact / CTA Section

- `id="contact"`, `scroll-margin-top: 70px`, class `.section`, background Charcoal `#2C2323`
- Centered content (`text-align: center; max-width: 600px; margin-inline: auto`)
- `<h2>`: "Let's Plan Your Dream Trip" — Playfair Display italic, white, `clamp(2rem, 4vw, 3.2rem)`
- Body `<p>`: "Ready to explore the world? Get in touch and I'll create your perfect journey." — Inter 300, `rgba(255,255,255,0.8)`, 18px
- CTA `<a>`: "Email Silvana" — `href="mailto:silvana@silvanalovestravel.ca?subject=Free%20Consultation%20Request"` — `background: #C89B3C; color: #2C2323; font: 600 16px Inter; padding: 14px 32px; border-radius: 4px; display: inline-block; text-decoration: none; margin-top: 32px`; hover: `background: #C4622D`
- Email plain `<a>`: `silvana@silvanalovestravel.ca` — `href="mailto:silvana@silvanalovestravel.ca?subject=Free%20Consultation%20Request"` — Inter 400 15px, cream `#F8F3EC`, `display: block; margin-top: 12px; text-decoration: none`; hover: `text-decoration: underline`
- Trust line `<p>`: "TICO Registered · Based in Canada · Serving Clients Worldwide" — Inter 400 12px, `rgba(255,255,255,0.55)`, margin-top 40px

### 8. Footer

- `<footer>`, background `#111111`, `padding: 24px`, `text-align: center`
- Single `<p>`: "© 2026 Silvana Loves Travel · TICO Registered · " + `<a href="mailto:silvana@silvanalovestravel.ca">silvana@silvanalovestravel.ca</a>` — Inter 400 13px, `rgba(255,255,255,0.55)`, link same color, hover: `rgba(255,255,255,0.8)`

---

## Accessibility

- `<html lang="en">`
- Semantic structure: `<nav>`, `<main>`, `<section>` (each with descriptive `aria-label`), `<footer>`; single `<h1>` in hero; `<h2>` for every section title; `<h3>` for Why Me tile titles
- Hero and destination images: CSS `background-image` (not `<img>`); destination card divs carry `role="img" aria-label="..."` for screen readers
- Hamburger button: `aria-label="Open navigation"`, `aria-expanded` toggled by JS; focus moves to first link on open; Escape closes and returns focus to button
- Decorative opening quotation marks: `aria-hidden="true"`
- Scroll chevron SVG: `aria-hidden="true"`
- All interactive elements: minimum 44×44px tap target
- Focus visible ring: `outline: 2px solid #C89B3C; outline-offset: 3px` via `:focus-visible`
- Scroll chevron animation: `@media (prefers-reduced-motion: reduce) { animation: none }`
- `html { scroll-behavior: smooth }` for anchor navigation

---

## Responsive Breakpoints

| Breakpoint | Behaviour |
|------------|-----------|
| <768px (mobile) | Single column; hamburger nav with slide-down panel; destination cards stacked; testimonials horizontal scroll-snap carousel (85vw cards); Why Me 2×2 grid |
| 768px–1023px (tablet) | 2-col About section; destinations 2-col + 1 card centered at 50% width; testimonials 3-col grid; Why Me 4-col row |
| ≥1024px (desktop) | 3-col destinations; 4-col Why Me; full nav links |

---

## Placeholder Content — Pre-Launch Checklist

| Element | Placeholder | Required before launch |
|---------|-------------|------------------------|
| Headshot | `div` with initials "SL", 3:4 | Replace with real photo (min 600×800px JPEG) |
| TICO number | `Reg. #XXXXXX` | **Blocker — insert real registration number** |
| Testimonials | 3 sample quotes | Replace with real client testimonials |

---

## Files to Create

```
silvana/
├── index.html     # Full page markup
├── style.css      # All styles, mobile-first
└── script.js      # Mobile nav: toggle, Escape key, outside-click, focus management
```

---

## Out of Scope

- Contact form / backend
- Blog or CMS
- Booking integration
- Multi-language toggle (EN-only for now)
- Analytics (add later with one `<script>` tag)
- Official TICO logo artwork (CSS badge used instead)
