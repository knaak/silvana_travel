# Silvana Loves Travel — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete, mobile-first static travel business website for Silvana Loves Travel using pure HTML5, CSS3, and minimal vanilla JS.

**Architecture:** Three files — `index.html` (all markup), `style.css` (all styles, mobile-first with media queries at 768px and 1024px), `script.js` (mobile nav toggle only). No frameworks, no build step, opens directly in a browser.

**Tech Stack:** HTML5, CSS3 (custom properties, Grid, Flexbox, clamp()), vanilla JS (~40 lines), Google Fonts (Playfair Display + Inter), Unsplash image hotlinks, Heroicons inline SVG.

**Spec:** `docs/superpowers/specs/2026-06-25-silvana-loves-travel-design.md`

---

## Chunk 1: Scaffolding, CSS Foundation, and Navigation

### Task 1: Create base file structure and HTML scaffold

**Files:**
- Create: `index.html`
- Create: `style.css`
- Create: `script.js`

- [ ] **Step 1: Create `index.html` with complete `<head>` and empty `<body>` sections**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Silvana Loves Travel — TICO-Certified Travel Agent</title>
  <meta name="description" content="TICO-certified travel agent specializing in Europe, Caribbean, and South America. Bilingual English and Spanish. Based in Canada.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Playfair+Display:ital,wght@0,400;1,400&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- NAV -->
  <!-- MAIN -->
  <main>
    <!-- HERO -->
    <!-- ABOUT -->
    <!-- DESTINATIONS -->
    <!-- WHY ME -->
    <!-- TESTIMONIALS -->
    <!-- CONTACT -->
  </main>
  <!-- FOOTER -->
  <script src="script.js"></script>
</body>
</html>
```

- [ ] **Step 2: Create `style.css` with CSS custom properties and global reset**

```css
/* ===== CUSTOM PROPERTIES ===== */
:root {
  --teal:       #1A4A5A;
  --gold:       #C89B3C;
  --gold-text:  #7A5A18;
  --terra:      #C4622D;
  --cream:      #F8F3EC;
  --charcoal:   #2C2323;
  --overlay:    rgba(0,0,0,0.55);
  --nav-height:    60px;
  --scroll-offset: 70px; /* spec requires 70px scroll-margin-top */

  --font-serif: 'Playfair Display', Georgia, serif;
  --font-sans:  'Inter', system-ui, sans-serif;
}

/* ===== RESET ===== */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: var(--font-sans);
  color: var(--charcoal);
  line-height: 1.7;
  background: #fff;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
}

/* ===== FOCUS RING ===== */
:focus-visible {
  outline: 2px solid var(--gold);
  outline-offset: 3px;
  border-radius: 2px;
}

/* ===== SECTION DEFAULT PADDING ===== */
.section {
  padding: 80px 24px;
}

/* ===== SECTION SCROLL OFFSET (sticky nav compensation) ===== */
[id] {
  scroll-margin-top: var(--scroll-offset); /* 70px per spec */
}
```

- [ ] **Step 3: Create `script.js` as an empty placeholder**

```js
// Mobile nav — implemented in Task 9
```

- [ ] **Step 4: Open `index.html` in a browser and verify it loads without errors**

Open `index.html` directly (File → Open, or `open index.html` on macOS). Expected: blank white page, no console errors, Google Fonts loading in Network tab.

- [ ] **Step 5: Commit**

```bash
# Only run `git init` if this is a brand-new repo (no existing .git directory)
git add index.html style.css script.js
git commit -m "feat: project scaffolding with CSS custom properties and reset"
```

---

### Task 2: Navigation bar

**Files:**
- Modify: `index.html` (replace `<!-- NAV -->` comment)
- Modify: `style.css` (append nav styles)

- [ ] **Step 1: Add nav markup to `index.html`**

Replace `<!-- NAV -->` with:

```html
<nav id="site-nav" aria-label="Main navigation">
  <a href="#" class="nav-logo">Silvana Loves Travel</a>
  <ul class="nav-links" role="list">
    <li><a href="#about">About</a></li>
    <li><a href="#destinations">Destinations</a></li>
    <li><a href="#why-me">Why Me</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <button class="nav-toggle" aria-label="Open navigation" aria-expanded="false">
    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <line x1="3" y1="6"  x2="21" y2="6"/>
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  </button>
  <div class="nav-panel" aria-hidden="true">
    <ul role="list">
      <li><a href="#about">About</a></li>
      <li><a href="#destinations">Destinations</a></li>
      <li><a href="#why-me">Why Me</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
</nav>
```

- [ ] **Step 2: Add nav CSS to `style.css`**

```css
/* ===== NAV ===== */
nav {
  position: sticky;
  top: 0;
  z-index: 100;
  height: var(--nav-height);
  background: var(--teal);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
}

.nav-logo {
  font-family: var(--font-serif);
  font-size: 1.25rem; /* 20px per spec */
  color: #fff;
  text-decoration: none;
  white-space: nowrap;
}

.nav-links {
  display: none; /* shown at ≥768px */
  list-style: none;
  gap: 28px;
  align-items: center;
}

.nav-links a {
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: 0.9375rem;
  color: #fff;
  text-decoration: none;
}

.nav-links a:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
}

/* Hamburger */
.nav-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 0;
}

/* Mobile panel */
.nav-panel {
  position: absolute;
  top: var(--nav-height);
  left: 0;
  right: 0;
  background: var(--teal);
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.25s ease;
}

.nav-panel.open {
  max-height: 300px;
}

.nav-panel ul {
  list-style: none;
  padding: 8px 0 16px;
}

.nav-panel a {
  display: block;
  padding: 12px 24px;
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: 1rem;
  color: #fff;
  text-decoration: none;
  line-height: 1.5;
}

.nav-panel a:hover {
  background: rgba(255,255,255,0.08);
}

/* Desktop: show links, hide hamburger */
@media (min-width: 768px) {
  .nav-links {
    display: flex;
  }
  .nav-toggle {
    display: none;
  }
  .nav-panel {
    display: none;
  }
}
```

- [ ] **Step 3: Open in browser and verify**

Expected: teal nav bar with "Silvana Loves Travel" wordmark. On desktop (≥768px): links visible, no hamburger. On mobile (<768px): hamburger visible, no links. Hamburger not functional yet (that's Task 9).

- [ ] **Step 4: Commit**

```bash
git add index.html style.css
git commit -m "feat: sticky navigation bar with mobile hamburger markup"
```

---

## Chunk 2: Hero and About Sections

### Task 3: Hero section

**Files:**
- Modify: `index.html` (replace `<!-- HERO -->` comment)
- Modify: `style.css` (append hero styles)

- [ ] **Step 1: Add hero markup to `index.html`**

Replace `<!-- HERO -->` with:

```html
<section class="hero" aria-label="Hero">
  <div class="hero-content">
    <h1>Silvana Loves Travel</h1>
    <p class="hero-tagline">The world is better when someone who loves it plans your trip.</p>
    <a href="mailto:silvana@silvanalovestravel.ca?subject=Free%20Consultation%20Request"
       class="btn btn-gold">
      Book a Free Consultation
    </a>
    <p class="hero-tico">TICO Registered Travel Agent · Canada</p>
  </div>
  <div class="hero-chevron" aria-hidden="true">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  </div>
</section>
```

- [ ] **Step 2: Add hero CSS to `style.css`**

```css
/* ===== HERO ===== */
.hero {
  position: relative;
  height: 100vh;   /* fallback for older browsers */
  height: 100svh;  /* modern: excludes mobile browser chrome */
  background-image: url('https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1600&q=80');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.65) 100%);
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
  padding: 24px;
  max-width: 800px;
  width: 100%;
}

.hero h1 {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: clamp(2.8rem, 6vw, 5rem);
  color: #fff;
  line-height: 1.1;
  margin-bottom: 20px;
}

.hero-tagline {
  font-family: var(--font-sans);
  font-weight: 300;
  font-size: clamp(1rem, 2.5vw, 1.4rem);
  color: var(--cream);
  max-width: 600px;
  margin: 0 auto 28px;
  line-height: 1.6;
}

.hero-tico {
  font-family: var(--font-sans);
  font-size: 0.8125rem;
  color: rgba(255,255,255,0.7);
  margin-top: 12px;
}

/* ===== SHARED BUTTON ===== */
.btn {
  display: inline-block;
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  padding: 14px 32px;
  border-radius: 4px;
  transition: background 0.2s;
}

.btn-gold {
  background: var(--gold);
  color: var(--charcoal);
}

.btn-gold:hover {
  background: var(--terra);
  color: #fff;
}

/* Scroll chevron */
.hero-chevron {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  color: #fff;
  animation: bounce 1.5s ease-in-out infinite;
}

@keyframes bounce {
  0%,  100% { transform: translateX(-50%) translateY(0);   opacity: 1;   }
  50%        { transform: translateX(-50%) translateY(8px); opacity: 0.4; }
}

@media (prefers-reduced-motion: reduce) {
  .hero-chevron { animation: none; }
}
```

- [ ] **Step 3: Open in browser and verify**

Expected: full-viewport Santorini image with dark gradient overlay. "Silvana Loves Travel" in large italic serif, tagline below, gold "Book a Free Consultation" button, small TICO text, animated chevron at bottom. Clicking button opens email client.

- [ ] **Step 4: Commit**

```bash
git add index.html style.css
git commit -m "feat: hero section with full-viewport image, CTA button, and scroll chevron"
```

---

### Task 4: About section

**Files:**
- Modify: `index.html` (replace `<!-- ABOUT -->` comment)
- Modify: `style.css` (append about styles)

- [ ] **Step 1: Add about markup to `index.html`**

Replace `<!-- ABOUT -->` with:

```html
<section id="about" class="section about" aria-label="About Silvana">
  <!-- Replace div below with <img src="silvana.jpg" alt="Silvana, TICO-certified travel agent" class="about-photo"> when headshot is available. Min 600×800px JPEG. -->
  <div class="about-photo-placeholder" aria-hidden="true">
    <span>SL</span>
  </div>
  <div class="about-text">
    <span class="section-label">Your Travel Expert</span>
    <h2>Meet Silvana</h2>
    <p>I've spent years exploring the world's most beautiful destinations — from the sun-drenched coasts of the Mediterranean to the ancient wonders of South America and the crystal waters of the Caribbean. As a TICO-certified agent, I bring that firsthand passion to every trip I plan. My goal is simple: to make your journey as personal, seamless, and unforgettable as the memories you'll bring home.</p>
    <div class="about-badges">
      <span class="badge-bilingual">English · Español</span>
      <span class="badge-tico" title="Travel Industry Council of Ontario — protecting Canadian travellers">
        TICO Registered
      </span>
      <span class="badge-tico-num">Reg. #XXXXXX</span><!-- REPLACE before launch -->
    </div>
    <div class="about-tags">
      <span class="tag">Europe</span>
      <span class="tag">Caribbean</span>
      <span class="tag">South America</span>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add about CSS to `style.css`**

```css
/* ===== ABOUT ===== */
.about {
  background: var(--cream);
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
}

.about-photo-placeholder {
  aspect-ratio: 3/4;
  max-width: 300px;
  width: 100%;
  background: #D4C5B0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.about-photo-placeholder span {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 3rem;
  color: var(--charcoal);
}

/* When replaced with real <img>: */
.about-photo {
  aspect-ratio: 3/4;
  max-width: 300px;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
  margin: 0 auto;
  display: block;
}

.section-label {
  display: block;
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: 0.6875rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--gold-text);
  margin-bottom: 12px;
}

/* Shared heading style for all content sections — defined once here, applies globally */
.section h2 {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.2;
  margin-bottom: 20px;
}

.about p {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--charcoal);
  margin-bottom: 24px;
}

.about-badges {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
}

.badge-bilingual {
  background: var(--teal);
  color: #fff;
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: 0.8125rem;
  padding: 6px 16px;
  border-radius: 20px;
}

.badge-tico {
  border: 1px solid var(--gold);
  color: var(--gold-text);
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: 0.75rem;
  padding: 6px 12px;
  border-radius: 4px;
}

.badge-tico-num {
  font-family: var(--font-sans);
  font-size: 0.6875rem;
  color: var(--teal);
}

.about-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  border: 1px solid var(--gold-text);
  color: var(--gold-text);
  font-family: var(--font-sans);
  font-size: 0.75rem;
  padding: 4px 12px;
  border-radius: 20px;
}

@media (min-width: 768px) {
  .about {
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
    padding: 100px 80px;
  }
  .about-photo-placeholder,
  .about-photo {
    max-width: 100%;
    margin: 0;
  }
}
```

- [ ] **Step 3: Open in browser and verify**

Expected: cream background section. Photo placeholder with "SL" initials (portrait aspect ratio). Text column with small gold uppercase "YOUR TRAVEL EXPERT" label, "Meet Silvana" heading, bio paragraph, bilingual badge (teal pill), TICO badge (gold border), destination pills (gold-text border). Two-column layout on desktop.

- [ ] **Step 4: Commit**

```bash
git add index.html style.css
git commit -m "feat: about section with photo placeholder, badges, and destination tags"
```

---

## Chunk 3: Destinations and Why Me Sections

### Task 5: Destinations section

**Files:**
- Modify: `index.html` (replace `<!-- DESTINATIONS -->` comment)
- Modify: `style.css` (append destinations styles)

- [ ] **Step 1: Add destinations markup to `index.html`**

Replace `<!-- DESTINATIONS -->` with:

```html
<section id="destinations" class="section destinations" aria-label="Destinations">
  <h2>Where Will You Go?</h2>
  <p class="section-subtitle">Explore the destinations Silvana knows best</p>
  <div class="dest-grid">
    <div class="dest-card"
         role="img"
         aria-label="Europe: From Rome's cobblestones to Santorini's cliffs"
         style="background-image:url('https://images.unsplash.com/photo-1499678329028-101435549a4e?w=800&q=80')">
      <div class="dest-overlay"></div>
      <div class="dest-text">
        <span class="dest-name">Europe</span>
        <span class="dest-desc">From Rome's cobblestones to Santorini's cliffs</span>
      </div>
    </div>
    <div class="dest-card"
         role="img"
         aria-label="Caribbean: Crystal waters, white sands, and endless sunshine"
         style="background-image:url('https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&q=80')">
      <div class="dest-overlay"></div>
      <div class="dest-text">
        <span class="dest-name">Caribbean</span>
        <span class="dest-desc">Crystal waters, white sands, and endless sunshine</span>
      </div>
    </div>
    <div class="dest-card dest-card--last"
         role="img"
         aria-label="South America: Ancient wonders and breathtaking landscapes"
         style="background-image:url('https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80')">
      <div class="dest-overlay"></div>
      <div class="dest-text">
        <span class="dest-name">South America</span>
        <span class="dest-desc">Ancient wonders and breathtaking landscapes</span>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add destinations CSS to `style.css`**

```css
/* ===== DESTINATIONS ===== */
.destinations {
  background: #fff;
  text-align: center;
}

.destinations h2 {
  color: var(--charcoal);
  margin-bottom: 12px;
}

.section-subtitle {
  font-family: var(--font-sans);
  font-size: 1rem;
  color: #666666;
  margin-bottom: 48px;
}

.dest-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  text-align: left;
}

.dest-card {
  aspect-ratio: 3/4;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  background-size: cover;
  background-position: center;
}

.dest-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%);
}

.dest-text {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  z-index: 1;
}

.dest-name {
  display: block;
  font-family: var(--font-serif);
  font-style: italic;
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  color: #fff;
  line-height: 1.1;
}

.dest-desc {
  display: block;
  font-family: var(--font-sans);
  font-weight: 300;
  font-size: 0.875rem;
  color: #fff;
  margin-top: 4px;
}

/* Tablet: 2-col, last card centered */
@media (min-width: 768px) and (max-width: 1023px) {
  .destinations { padding: 100px 80px; }
  .dest-grid {
    grid-template-columns: 1fr 1fr;
  }
  .dest-card--last {
    grid-column: 1 / -1;
    max-width: 50%;
    margin-inline: auto;
    aspect-ratio: 3/4;
  }
}

/* Desktop: 3-col */
@media (min-width: 1024px) {
  .destinations { padding: 100px 80px; }
  .dest-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .dest-card--last {
    max-width: 100%;
    grid-column: auto;
    margin-inline: 0;
  }
}
```

- [ ] **Step 3: Open in browser and verify**

Expected: "Where Will You Go?" heading, subtitle in grey, three portrait-format destination cards with full-bleed images, gradient overlay, region name and description at bottom. On desktop: 3-column layout. On tablet: 2+1 centered. On mobile: stacked.

- [ ] **Step 4: Commit**

```bash
git add index.html style.css
git commit -m "feat: destinations section with 3 photo cards and responsive grid"
```

---

### Task 6: Why Book With Me section

**Files:**
- Modify: `index.html` (replace `<!-- WHY ME -->` comment)
- Modify: `style.css` (append why-me styles)

- [ ] **Step 1: Add why-me markup to `index.html`**

The Heroicons SVG path data for all four icons is already embedded in the markup below (Heroicons v2 outline, MIT licence). No external lookup is needed.

Replace `<!-- WHY ME -->` with:

```html
<section id="why-me" class="section why-me" aria-label="Why book with Silvana">
  <h2>Why Travel With Silvana?</h2>
  <p class="section-subtitle why-me-subtitle">The difference between booking a trip and living one</p>
  <div class="why-grid">

    <div class="why-tile">
      <div class="why-icon">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
          <!-- Heroicons v2 outline: ShieldCheckIcon -->
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"/>
        </svg>
      </div>
      <h3>TICO Certified</h3>
      <p>Your booking is protected by Canada's Travel Industry Council of Ontario</p>
    </div>

    <div class="why-tile">
      <div class="why-icon">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
          <!-- ChatBubbleLeftRightIcon -->
          <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"/>
        </svg>
      </div>
      <h3>Bilingual EN/ES</h3>
      <p>Serving English and Spanish-speaking travellers with equal fluency</p>
    </div>

    <div class="why-tile">
      <div class="why-icon">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
          <!-- UserCircleIcon -->
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
        </svg>
      </div>
      <h3>Personal Service</h3>
      <p>Real human expertise — not an algorithm, not a chatbot</p>
    </div>

    <div class="why-tile">
      <div class="why-icon">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
          <!-- GlobeAmericasIcon -->
          <path stroke-linecap="round" stroke-linejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.211.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.654-.261a2.25 2.25 0 0 1-1.384-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.279-2.132Z"/>
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 11.25l1.5 1.5.75-.75V8.758l2.166.887a2.25 2.25 0 0 0 2.274-.268l1.335-1.112a2.25 2.25 0 0 0-1.95-3.894l-2.13.426a1.5 1.5 0 0 1-1.07-.14L8.25 3"/>
        </svg>
      </div>
      <h3>Destination Expert</h3>
      <p>Deep firsthand knowledge of Europe, the Caribbean, and South America</p>
    </div>

  </div>
</section>
```

- [ ] **Step 3: Add why-me CSS to `style.css`**

```css
/* ===== WHY ME ===== */
.why-me {
  background: var(--teal);
  text-align: center;
}

.why-me h2 {
  color: #fff;
  font-style: italic;
}

.why-me-subtitle {
  font-weight: 300;
  color: rgba(255,255,255,0.75);
  margin-bottom: 48px;
}

.why-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  text-align: center;
}

.why-tile {
  background: rgba(255,255,255,0.06);
  border-radius: 8px;
  padding: 28px 24px;
}

.why-icon {
  color: var(--gold);
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
}

.why-tile h3 {
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: 1rem;
  color: #fff;
  margin-bottom: 8px;
}

.why-tile p {
  font-family: var(--font-sans);
  font-size: 0.875rem;
  color: rgba(255,255,255,0.72);
  line-height: 1.6;
}

@media (min-width: 768px) {
  .why-me { padding: 100px 80px; }
  .why-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }
}
```

- [ ] **Step 4: Open in browser and verify**

Expected: deep teal background, italic white heading, subtitle, 4 icon tiles (2×2 on mobile, 1×4 on desktop). Each tile has a gold SVG icon, white bold title, and light-teal body text. Icons should render clearly.

- [ ] **Step 5: Commit**

```bash
git add index.html style.css
git commit -m "feat: why-me section with 4 Heroicons tiles and teal background"
```

---

## Chunk 4: Testimonials, Contact, Footer, and JavaScript

### Task 7: Testimonials section

**Files:**
- Modify: `index.html` (replace `<!-- TESTIMONIALS -->` comment)
- Modify: `style.css` (append testimonials styles)

- [ ] **Step 1: Add testimonials markup to `index.html`**

Replace `<!-- TESTIMONIALS -->` with:

```html
<section id="testimonials" class="section testimonials" aria-label="Testimonials">
  <h2>What Travellers Say</h2>
  <div class="testimonials-track">

    <div class="testimonial-card">
      <span class="quote-mark" aria-hidden="true">&ldquo;</span>
      <p>Silvana planned our honeymoon in Italy and it was absolutely perfect. Every detail was thoughtful and personal — we never could have done it ourselves.</p>
      <p class="attribution">— Priya &amp; Daniel, Amalfi Coast</p>
    </div>

    <div class="testimonial-card">
      <span class="quote-mark" aria-hidden="true">&ldquo;</span>
      <p>As Spanish speakers, it was so refreshing to work with someone who truly understood us. Silvana found us an incredible resort in the Dominican Republic.</p>
      <p class="attribution">— Carlos &amp; Ana, Dominican Republic</p>
    </div>

    <div class="testimonial-card">
      <span class="quote-mark" aria-hidden="true">&ldquo;</span>
      <p>I've booked travel online for years. Silvana saved us time, money, and stress — and got us experiences we'd never have found on our own.</p>
      <p class="attribution">— Jennifer M., Patagonia, Argentina</p>
    </div>

  </div>
</section>
```

- [ ] **Step 2: Add testimonials CSS to `style.css`**

```css
/* ===== TESTIMONIALS ===== */
.testimonials {
  background: var(--cream);
  text-align: center;
}

.testimonials h2 {
  margin-bottom: 40px;
}

/* Mobile: horizontal scroll-snap carousel */
.testimonials-track {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 16px;
  padding-bottom: 16px;
  /* Negative margin to allow cards to bleed to edge */
  margin: 0 -24px;
  padding-left: 24px;
  padding-right: 24px;
  scrollbar-width: none;
}

.testimonials-track::-webkit-scrollbar {
  display: none;
}

.testimonial-card {
  flex-shrink: 0;
  min-width: 85vw;
  scroll-snap-align: start;
  background: #fff;
  border-radius: 8px;
  padding: 28px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  text-align: left;
}

.quote-mark {
  display: block;
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 4.5rem;
  color: var(--gold);
  line-height: 0.8;
  margin-bottom: 8px;
}

.testimonial-card > p {
  font-family: var(--font-sans);
  font-size: 0.9375rem;
  color: var(--charcoal);
  line-height: 1.7;
}

.attribution {
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: 0.8125rem;
  color: var(--teal);
  margin-top: 16px;
}

/* Desktop: 3-column grid */
@media (min-width: 768px) {
  .testimonials { padding: 100px 80px; }
  .testimonials-track {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    overflow-x: visible;
    scroll-snap-type: none;
    margin: 0;
    padding: 0;
  }
  .testimonial-card {
    min-width: 0;
  }
}
```

- [ ] **Step 3: Open in browser and verify**

Expected: cream background, "What Travellers Say" heading, three quote cards with gold decorative quote marks. On mobile: swipeable horizontal carousel, one card visible at a time. On desktop: 3-column grid, all cards visible.

- [ ] **Step 4: Commit**

```bash
git add index.html style.css
git commit -m "feat: testimonials section with scroll-snap carousel on mobile"
```

---

### Task 8: Contact section and footer

**Files:**
- Modify: `index.html` (replace `<!-- CONTACT -->` comment, add `<footer>`)
- Modify: `style.css` (append contact and footer styles)

- [ ] **Step 1: Add contact and footer markup to `index.html`**

Replace `<!-- CONTACT -->` with:

```html
    <section id="contact" class="section contact" aria-label="Contact Silvana">
      <div class="contact-inner">
        <h2>Let's Plan Your Dream Trip</h2>
        <p>Ready to explore the world? Get in touch and I'll create your perfect journey.</p>
        <a href="mailto:silvana@silvanalovestravel.ca?subject=Free%20Consultation%20Request"
           class="btn btn-gold contact-btn">
          Email Silvana
        </a>
        <a href="mailto:silvana@silvanalovestravel.ca?subject=Free%20Consultation%20Request"
           class="contact-email">
          silvana@silvanalovestravel.ca
        </a>
        <p class="contact-trust">TICO Registered · Based in Canada · Serving Clients Worldwide</p>
      </div>
    </section>
```

Close the `</main>` tag after the contact section, then add the footer:

```html
  </main>

  <footer>
    <p>
      &copy; 2026 Silvana Loves Travel &middot; TICO Registered &middot;
      <a href="mailto:silvana@silvanalovestravel.ca">silvana@silvanalovestravel.ca</a>
    </p>
  </footer>
```

- [ ] **Step 2: Add contact and footer CSS to `style.css`**

```css
/* ===== CONTACT ===== */
.contact {
  background: var(--charcoal);
  text-align: center;
}

.contact-inner {
  max-width: 600px;
  margin-inline: auto;
}

.contact h2 {
  color: #fff;
  font-style: italic;
  font-size: clamp(2rem, 4vw, 3.2rem); /* spec: larger than other h2s */
  margin-bottom: 16px;
}

.contact > .contact-inner > p:first-of-type {
  font-family: var(--font-sans);
  font-weight: 300;
  font-size: 1.125rem;
  color: rgba(255,255,255,0.8);
  margin-bottom: 0;
}

.contact-btn {
  margin-top: 32px;
  display: inline-block;
}

.contact-email {
  display: block;
  margin-top: 12px;
  font-family: var(--font-sans);
  font-size: 0.9375rem;
  color: var(--cream);
  text-decoration: none;
}

.contact-email:hover {
  text-decoration: underline;
}

.contact-trust {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  color: rgba(255,255,255,0.55);
  margin-top: 40px;
}

@media (min-width: 768px) {
  .contact { padding: 100px 80px; }
}

/* ===== FOOTER ===== */
footer {
  background: #111111;
  padding: 24px;
  text-align: center;
}

footer p {
  font-family: var(--font-sans);
  font-size: 0.8125rem;
  color: rgba(255,255,255,0.55);
}

footer a {
  color: rgba(255,255,255,0.55);
  text-decoration: none;
}

footer a:hover {
  color: rgba(255,255,255,0.8);
}
```

- [ ] **Step 3: Open in browser and verify**

Expected: dark charcoal contact section with italic white heading, light body text, gold "Email Silvana" button (hover turns terracotta), email link below, small trust text. Footer: near-black background, single line of muted text with clickable email.

- [ ] **Step 4: Commit**

```bash
git add index.html style.css
git commit -m "feat: contact section and footer"
```

---

### Task 9: Mobile navigation JavaScript

**Files:**
- Modify: `script.js` (replace placeholder)

- [ ] **Step 1: Write the mobile nav script**

Replace the entire content of `script.js` with:

```js
(function () {
  const nav    = document.getElementById('site-nav');
  const toggle = nav.querySelector('.nav-toggle');
  const panel  = nav.querySelector('.nav-panel');
  const links  = panel.querySelectorAll('a');
  let isOpen   = false;

  function openMenu() {
    isOpen = true;
    panel.classList.add('open');
    panel.removeAttribute('aria-hidden');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close navigation');
    links[0].focus();
  }

  function closeMenu() {
    isOpen = false;
    panel.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
  }

  // Toggle on hamburger click
  toggle.addEventListener('click', function () {
    isOpen ? closeMenu() : openMenu();
  });

  // Close when an anchor link is tapped
  links.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key, return focus to toggle
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen) {
      closeMenu();
      toggle.focus();
    }
  });

  // Close on outside click
  document.addEventListener('click', function (e) {
    if (isOpen && !nav.contains(e.target)) {
      closeMenu();
    }
  });
}());
```

- [ ] **Step 2: Test mobile nav manually at <768px viewport width**

Open browser DevTools, set viewport to 375px width. Expected:
- Hamburger button visible in top-right of nav
- Click hamburger → panel slides down showing 4 links
- Click any link → panel closes, page scrolls to section
- Tap outside nav → panel closes
- Open panel, press Escape → panel closes, focus returns to hamburger button
- Check DevTools accessibility tree: `aria-expanded` updates correctly

- [ ] **Step 3: Commit**

```bash
git add script.js
git commit -m "feat: mobile nav toggle with keyboard and focus management"
```

---

### Task 10: Accessibility and final polish

**Files:**
- Modify: `index.html` (add any missing aria attributes)
- Modify: `style.css` (minor polish)

- [ ] **Step 1: Verify aria attributes on all sections**

Check each `<section>` has a descriptive `aria-label`. Open `index.html` and confirm:
- `<section class="hero" aria-label="Hero">` ✓
- `<section id="about" ... aria-label="About Silvana">` ✓
- `<section id="destinations" ... aria-label="Destinations">` ✓
- `<section id="why-me" ... aria-label="Why book with Silvana">` ✓
- `<section id="testimonials" ... aria-label="Testimonials">` ✓
- `<section id="contact" ... aria-label="Contact Silvana">` ✓

- [ ] **Step 2: Verify single `<h1>` and heading hierarchy**

In `index.html`, confirm:
- Exactly one `<h1>` (hero: "Silvana Loves Travel")
- All section titles use `<h2>`
- Why Me tile titles use `<h3>`
- No heading levels are skipped

- [ ] **Step 3: Verify all interactive elements meet 44×44px tap target size**

In `style.css`, confirm button and link padding produces adequate touch targets. Add minimum-height helpers if needed:

```css
/* Ensure nav panel links meet 44px tap target */
.nav-panel a {
  min-height: 44px;
  display: flex;
  align-items: center;
}
```

- [ ] **Step 4: Test focus-visible rings**

In the browser, Tab through all interactive elements (nav links, buttons, email links). Each should show a gold `2px solid #C89B3C` outline ring. Test on both light and dark backgrounds.

- [ ] **Step 5: Check page on actual mobile device or BrowserStack**

Test at 375px (iPhone SE), 390px (iPhone 14), and 414px (iPhone 14 Plus). Verify:
- No horizontal overflow
- Text is readable without zoom
- All tap targets are easy to hit
- Testimonials swipe correctly
- Hero fills viewport

- [ ] **Step 6: Verify destination images load**

Open browser Network tab and confirm all three Unsplash image URLs return 200. If any 404, check the URL against the spec.

- [ ] **Step 7: Verify destination card accessibility**

Inspect each destination card div in DevTools. Confirm every card has `role="img"` and a descriptive `aria-label` (e.g., `"Europe: From Rome's cobblestones to Santorini's cliffs"`). Three cards total — check all three.

- [ ] **Step 8: Verify `<html lang="en">` is present**

Open `index.html` in a text editor and confirm the opening `<html>` tag reads `<html lang="en">`. This is a common casualty of copy-paste edits — confirm it is still there.

- [ ] **Step 9: Verify `prefers-reduced-motion` on scroll chevron**

In browser DevTools (Chrome: Rendering tab → "Emulate CSS media feature prefers-reduced-motion: reduce"), enable reduced-motion and reload the page. The scroll chevron at the bottom of the hero should stop bouncing. Expected: static chevron with no animation.

- [ ] **Step 10: Final commit**

```bash
git add index.html style.css
git commit -m "feat: accessibility pass — aria labels, heading hierarchy, tap targets"
```

---

## Summary

| Task | File(s) | Description |
|------|---------|-------------|
| 1 | index.html, style.css, script.js | Project scaffolding, CSS custom properties, reset |
| 2 | index.html, style.css | Sticky nav, hamburger markup |
| 3 | index.html, style.css | Hero: full-viewport image, CTA, chevron |
| 4 | index.html, style.css | About: photo placeholder, bio, badges, tags |
| 5 | index.html, style.css | Destinations: 3 photo cards, responsive grid |
| 6 | index.html, style.css | Why Me: 4 Heroicons tiles, teal background |
| 7 | index.html, style.css | Testimonials: scroll-snap carousel / 3-col grid |
| 8 | index.html, style.css | Contact section and footer |
| 9 | script.js | Mobile nav JS with keyboard/focus management |
| 10 | index.html, style.css | Accessibility audit, heading hierarchy, tap targets |

**Pre-launch owner actions:**
1. Replace `Reg. #XXXXXX` with real TICO registration number
2. Replace photo placeholder with `silvana.jpg` (min 600×800px JPEG)
3. Replace 3 sample testimonials with real client quotes
