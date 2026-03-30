# Implementation Plan — Forge & Flame Custom Metalworks

## Overview
- **Total tasks:** 14
- **Tier breakdown:** 3 Tier-1, 8 Tier-2, 3 Tier-3
- **Homepage sections:** 7 (hero, signature-project, services, process, materials, testimonials, cta)
- **Inner pages:** services overview, about, contact
- **Section order:** hero → signature-project → services → process → materials → testimonials → cta

---

## Phase 4 Tasks — Structure

### Task 1: Header.tsx
- **File:** `src/components/Header.tsx`
- **Tier:** 1
- **Layout:** Fixed top nav. Logo left, nav links centre (Home, Services, About, Contact), CTA button right ("Get a Quote"). Mobile: hamburger menu with slide-down panel.
- **Animation:** None (static, always visible)
- **Anti-pattern:** No rounded buttons, no soft shadows — this is bold profile. Use `btn-profile` for CTA. Zero border-radius.
- **Responsive:** Mobile: logo + hamburger only. Tablet: logo + CTA + hamburger. Desktop: full nav bar.
- **Acceptance criteria:** Sticky header. Mobile menu opens/closes. CTA links to contact. Active page highlighted. Logo links to home. Phone number visible on desktop.

### Task 2: Footer.tsx
- **File:** `src/components/Footer.tsx`
- **Tier:** 1
- **Layout:** 4-column grid on desktop. Col 1: logo + tagline + phone. Col 2: nav links. Col 3: services list. Col 4: service area + hours. Bottom bar: copyright + privacy/terms links.
- **Animation:** None
- **Anti-pattern:** No centred single-column footer. No rounded elements. Use `type-small` for links, `type-caption` for copyright.
- **Responsive:** Mobile: single column stack. Tablet: 2x2 grid. Desktop: 4-column.
- **Acceptance criteria:** Privacy and Terms links present and working. Phone is tel: link. Email is mailto: link. Canadian English.

### Task 3: Reveal.tsx + StaggerGroup.tsx updates
- **File:** `src/components/Reveal.tsx`, `src/components/StaggerGroup.tsx`
- **Tier:** 1
- **Layout:** N/A — utility wrappers
- **Animation:** Reveal supports: fade-up, slide-left, slide-right, scale-up, clip-reveal, blur-sharpen, rotate-in, none. StaggerGroup supports: cascade, fan, wave, pop patterns.
- **Anti-pattern:** No default to fade-up only. Must support all 7 entrance types. Must include `useReducedMotion`.
- **Responsive:** N/A
- **Acceptance criteria:** All animation variants work. Spring physics: stiffness=100, damping=20 (adjustable). Reduced motion respected.

---

## Phase 5 Tasks — Homepage

### Task 4: Hero Section
- **File:** `src/components/home/Hero.tsx`
- **Tier:** 3 (complex: ParticleField + split layout + gradients)
- **Layout:** SectionFullBleed, contentPosition="left". Dark background with radial gradient + ParticleField "rise" sparks. Left side: business name in type-hero (Bebas Neue), tagline in type-hero-sub, phone number prominent, CTA buttons (btn-profile + btn-profile-ghost). Right side: placeholder image with img-gradient-mask.
- **Animation:** scale-up entrance + parallax background
- **Anti-pattern:** No centred text over stock photo. No rounded corners. No soft gradients — use steep angular gradients. Phone number must NOT be hidden.
- **Responsive:** Mobile: full-width stack, image below text. Tablet: 60/40 split. Desktop: 55/45 split with ParticleField visible.
- **Acceptance criteria:** ParticleField renders sparks. Business name reads at all breakpoints. Phone number clickable (tel:). CTA buttons use btn-profile classes. Background gradient visible (min 0.15 opacity).

### Task 5: Signature Project Section
- **File:** `src/components/home/SignatureProject.tsx`
- **Tier:** 2
- **Layout:** SectionAsymmetricSplit ratio="8-4". Left: large project image with img-elevated treatment. Right: project description, type of work badge (badge-label), key stats (materials used, timeline). Anvil-stamp on heading.
- **Animation:** clip-reveal entrance
- **Anti-pattern:** No symmetrical layout. No generic "Our Work" heading — use specific project name. Image must have visual treatment, not bare.
- **Responsive:** Mobile: image on top, details below (full width). Tablet: 60/40. Desktop: 8/4 grid.
- **Acceptance criteria:** Image has img-elevated class. Badge uses badge-label. Heading has anvil-stamp. Section uses section-bg-gradient. section-spacious density.

### Task 6: Services Section
- **File:** `src/components/home/Services.tsx`
- **Tier:** 2
- **Layout:** SectionBentoGrid columns=3. 5 service cards: 1 featured (col-span-2, card-featured with molten-edge) + 4 standard (card-standard). Each card: Lucide icon, service name (type-card), 2-line description. Anvil-stamp on section heading.
- **Animation:** slide-alternate entrance + cascade stagger
- **Anti-pattern:** No symmetrical 3-column grid of equal cards — use bento sizing (1 large + 4 small). No emoji icons. No rounded cards.
- **Responsive:** Mobile: single column stack. Tablet: 2-column. Desktop: 3-column bento.
- **Acceptance criteria:** Featured card spans 2 columns with molten-edge glow. Icons from Lucide (Hammer, Flame, Building, Sparkles, Wrench). section-bg-gradient. section-standard density.

### Task 7: Process Section
- **File:** `src/components/home/Process.tsx`
- **Tier:** 2
- **Layout:** SectionZigzag with 4 steps: Consultation → Design → Fabrication → Installation. Each step: number badge, step name (type-card), description, placeholder image. TracePath SVG connecting steps vertically on desktop.
- **Animation:** blur-sharpen entrance + cascade stagger
- **Anti-pattern:** No generic numbered list. Each step must have a descriptive image. TracePath must use accent colour with visible stroke.
- **Responsive:** Mobile: vertical stack, TracePath hidden. Tablet: reduced zigzag with TracePath. Desktop: full zigzag with TracePath.
- **Acceptance criteria:** 4 process steps rendered. TracePath draws on scroll. Section uses section-bg-deep. section-standard density. Step numbers use badge-label.

### Task 8: Materials Section
- **File:** `src/components/home/Materials.tsx`
- **Tier:** 2
- **Layout:** SectionEditorial (max-w-3xl, left-aligned). Intro paragraph about metal types/welding processes. Below: 4 compact cards (card-compact) in 2x2 grid showing material types: Mild Steel, Stainless Steel, Aluminum, Wrought Iron. Each card: material name, 1-line capability.
- **Animation:** fade-up entrance + fan stagger
- **Anti-pattern:** No large image gallery — this is information-dense. No full-width layout. Keep it narrow and readable.
- **Responsive:** Mobile: single column cards. Tablet+: 2x2 grid within narrow container.
- **Acceptance criteria:** section-bg-texture. section-compact density. Card-compact borders visible. Material descriptions are specific and technical.

### Task 9: Testimonials Section
- **File:** `src/components/home/Testimonials.tsx`
- **Tier:** 2
- **Layout:** SectionOffsetGrid side="right". 3 testimonial cards stacked on the right 60%. Left 40%: large quote mark decoration + section heading. Each card: quote text, client name, project type badge (badge-label: "Residential" / "Commercial" / "Industrial").
- **Animation:** rotate-in entrance + pop stagger
- **Anti-pattern:** No centred testimonial carousel. No star ratings. No rounded avatar circles (bold profile). Quotes must sound real, not generic.
- **Responsive:** Mobile: full-width stack. Tablet: 70/30 split. Desktop: 60/40 offset.
- **Acceptance criteria:** 3 distinct testimonials with project type labels. section-bg-texture. section-standard density. Cards use card-standard with visible borders.

### Task 10: CTA Section
- **File:** `src/components/home/CTA.tsx`
- **Tier:** 1
- **Layout:** SectionFullBleed, contentPosition="center". Dark background with gradient-mesh. Heading (type-section), subtext, phone number (large, clickable), two CTA buttons (btn-profile: "Request a Quote", btn-profile-ghost: "Call Now").
- **Animation:** none (intentional stillness)
- **Anti-pattern:** No gentle curves. No soft drop shadow. Hard edges. Phone number must be prominent and clickable.
- **Responsive:** All breakpoints: centred, full-bleed. Phone number scales with viewport.
- **Acceptance criteria:** section-bg-deep. section-spacious density. Phone is tel: link. Buttons use profile classes. No animation (intentional).

---

## Phase 6 Tasks — Inner Pages

### Task 11: Services Page
- **File:** `src/app/services/page.tsx`
- **Tier:** 3 (5 service detail sections)
- **Layout:** Bento-showcase style. Hero banner at top (section-bg-gradient, type-hero heading). Below: 5 service blocks, each with: service name (type-section, anvil-stamp), description paragraph, key details (what's included, typical timeline), placeholder image. Alternate between SectionAsymmetricSplit and SectionZigzag layouts for variety.
- **Animation:** Mixed: clip-reveal for hero, slide-alternate for zigzag blocks, blur-sharpen for split blocks
- **Anti-pattern:** No identical card grid for all 5 services. Must alternate layouts. Each service needs specific, detailed copy — not generic filler.
- **Responsive:** Mobile: single column. Tablet: reduced splits. Desktop: full asymmetric/zigzag alternation.
- **Acceptance criteria:** 5 services detailed. At least 2 layout types used. Anvil-stamp on service headings. CTA at bottom linking to contact.

### Task 12: About Page
- **File:** `src/app/about/page.tsx`
- **Tier:** 2
- **Layout:** Story-image layout. Hero: SectionFullBleed with workshop image + overlay text (business name, "Est. 2001"). Below: SectionAsymmetricSplit with Marcus Reeves' story on left (type-body-lg), workshop image on right. Then: values/philosophy section using SectionEditorial. Finally: CTA strip.
- **Animation:** clip-reveal for hero, fade-up for story, blur-sharpen for values
- **Anti-pattern:** Owner name "Marcus Reeves" appears HERE ONLY — nowhere else on the site. No generic "about us" copy. Story must reference Thunder Bay, Northern Ontario, 25 years.
- **Responsive:** Mobile: stacked. Tablet: 60/40. Desktop: full asymmetric split.
- **Acceptance criteria:** Owner name present. Local details (Thunder Bay, Lake Superior, Northern Ontario). Workshop/forge imagery. section-bg-deep for hero, section-bg-gradient for story.

### Task 13: Contact Page
- **File:** `src/app/contact/page.tsx`
- **Tier:** 3 (form + map + sidebar)
- **Layout:** Form-sidebar layout. Left 60%: contact form (name, email, phone, service type dropdown, message). Right 40%: sidebar with phone (tel: link), email (mailto: link), address, hours of operation, Google Maps embed. Section-bg-gradient background.
- **Animation:** fade-up for form, slide-right for sidebar
- **Anti-pattern:** No centred single-column form. Must have sidebar with all contact details. Map must be visible, not hidden. Form must post to API route.
- **Responsive:** Mobile: form on top, sidebar below, map full-width. Tablet: 55/45 split. Desktop: 60/40 split.
- **Acceptance criteria:** Form has all fields. Sidebar has phone (tel:), email (mailto:), map embed. Hours listed. Canadian English. Form action posts to `/api/contact`.

---

## Phase 7 Tasks — SEO & Legal

### Task 14: SEO Infrastructure + Legal Pages
- **File:** `src/app/robots.ts`, `src/app/sitemap.ts`, `src/app/opengraph-image.tsx`, `src/app/privacy/page.tsx`, `src/app/terms/page.tsx`, `public/llms.txt`
- **Tier:** 2
- **Layout:** Legal pages: SectionEditorial, left-aligned, type-body for content.
- **Animation:** None
- **Anti-pattern:** OG image must use palette.ts hex values (Satori can't read CSS vars). Privacy must reference PIPEDA. Terms must be specific to welding/fabrication services.
- **Responsive:** Legal pages: max-w-3xl centred, readable at all breakpoints.
- **Acceptance criteria:** robots.ts allows all, references sitemap. sitemap.ts includes all routes. OG image renders with forge palette colours. Privacy mentions PIPEDA + business name. Terms specific to trade. llms.txt updated.

---

## Anti-Sameness Self-Review

| Check | Result |
|-------|--------|
| Archetype not in last 3 | PASS — forge-glow-industrial-bold (last 3: brass-instrument, glacier-glass, quarry-face) |
| Hero not in last 3 | PASS — spark-cascade-split (last 3: gauge-dial, glassmorphism, angular-blocks) |
| Section order not in last 3 | PASS — Premium Showcase never used before |
| Palette family rotation | PASS — bold (last 3: warm, cool, earth) |
| Heading font not recent | PASS — Bebas Neue (last: Oswald, Plus Jakarta Sans, IBM Plex Sans) |
| Signature moves unique | PASS — molten-edge-glow, anvil-stamp-headers, spark-trail-dividers (none in registry) |
| Inner page layouts varied | PASS — bento-showcase, story-image, form-sidebar (none match last 3 builds) |
| Animation set different | PASS — scale-up hero, clip-reveal signature, slide-alternate services (unique combo) |
| >=3 layout templates | PASS — FullBleed, AsymmetricSplit, BentoGrid, Zigzag, Editorial, OffsetGrid, StatsBar (7 templates) |
| >=3 section backgrounds | PASS — deep, gradient, texture all used |
| Container width variety | PASS — max-w-3xl, max-w-5xl, max-w-6xl, max-w-7xl, full-bleed |
