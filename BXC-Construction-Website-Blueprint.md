# BXC CONSTRUCTION — Ultra-Premium Website Project File
### Complete Design Blueprint + AI Builder Implementation Prompt

---

## PART 1 — WHAT WAS ANALYZED (Source Reference)

The reference video showed a Framer-built roofing-company site ("ROOFERCO") screen-recorded end to end. The core things worth preserving are not the roofing content itself, but the **underlying design mechanics** that made it feel clean and premium:

- A calm, confident **information architecture**: Hero → Trust logos → Values → Problem framing → Solutions → Services → Process → Projects (carousel) → Company stats + Team → Testimonials → FAQ → CTA → Footer.
- A **restrained animation language**: every section enters on scroll with the same signature move — opacity 0→1, upward drift of ~20px, and a soft blur-to-sharp focus pull, staggered card-by-card at ~0.14s intervals, eased with a smooth deceleration (no bounce, no spring, no overshoot).
- A **two-tone dark system**: one deep saturated dark (footer, about band) and one slightly lighter neutral dark (active/expanded UI states like the FAQ), rather than one flat dark reused everywhere.
- **Generous whitespace** on light sections, snug and confident spacing on dark sections.
- A single **geometric sans-serif** used everywhere — logo, nav, headings, body — with no secondary display font, which is a big part of why it reads "designed" rather than "assembled."
- **Content-card discipline**: every card follows the same anatomy (icon or image → short bold label → one to two lines of supporting copy), which is why the grids feel intentional instead of like filler.
- A single accent color doing double duty as the only "loud" element on the page (used only for the primary CTA button), against everything else staying black/white/gray — this restraint is a major driver of the "expensive" feeling.

None of the roofing content, the green/yellow palette, or the specific copy should carry over — those are being replaced entirely. What carries over is the **structural and motion DNA** described above, elevated further per the instructions below.

---

## PART 2 — BXC CONSTRUCTION BRAND FOUNDATION

**Company name:** BXC Construction
**Positioning:** A high-end design-build construction firm for premium residential, commercial, and custom builds — the kind of company a serious developer or high-net-worth homeowner calls when the budget is large and the standards are non-negotiable.
**Tagline (hero-ready):** "Engineering the Extraordinary."
**Secondary line (footer/about):** "Building Excellence, By Design."
**Brand voice:** Confident, precise, understated. Short declarative sentences. No exclamation points except sparingly in CTAs. Talks like an architecture firm, not a handyman service.
**Tone words:** Authoritative, precise, calm, powerful, exclusive, engineered, enduring.

### Visual identity decision (deliberate upgrade from source)
The source used a forest-green/yellow palette appropriate for a friendly local roofer. That palette is **replaced entirely** — it would undercut the "hundred-million-dollar company" brief. BXC's system:

| Role | Color | Hex | Notes |
|---|---|---|---|
| Primary background (light sections) | Warm off-white | `#F7F6F3` | Never pure white — pure white feels cheap/clinical |
| Ink / primary text | Near-black charcoal | `#0E0F0F` | Not pure `#000` — softer, more premium |
| Deep dark panel (footer, about/stats band) | Espresso-black | `#111413` | Equivalent role to source's `#17312E` |
| Secondary dark (FAQ active state, hover panels) | Graphite | `#2B2D2C` | Equivalent role to source's `#454F4F` |
| Accent (the ONE loud color — primary CTA only) | Brushed bronze / antique gold | `#B08D57` | Replaces the yellow; signals luxury/metal/construction materiality instead of "friendly local business" |
| Supporting neutral (card backgrounds on light sections) | Stone gray | `#EDEBE6` | Equivalent role to source's light-gray cards |
| Hairline borders / dividers | `#DDD9D1` on light, `#33342F` on dark | | Always 1px, never heavier |

**Typography:**
- Primary typeface: **"Neue Montreal"** or **"General Sans"** (geometric grotesk, same family archetype identified in the source) for all headings and nav.
- Body/paragraph typeface: same family at Regular 400, or pair with **"Inter"** at 400/450 for long-form paragraph legibility if the builder's font library lacks the primary.
- Optional refinement over the source: introduce **one** small serif or condensed-caps accent (e.g., a slab serif or an all-caps tracked label like "01 / SERVICES") purely for section eyebrows/numbering — this is the kind of detail Awwwards sites use to signal intentional art direction without breaking the single-typeface discipline for actual content.
- Weight scale: Headings 600, Nav 500, Body 400, Eyebrows/labels 500 with `letter-spacing: 0.12em` and uppercase.

**Logo concept (for the AI builder to generate/typeset):**
Wordmark "BXC" in tight tracked caps, followed by "CONSTRUCTION" in a smaller tracked caps line beneath or beside it — mirrors the source's simple wordmark-only logo (no icon needed), which reads more premium than an icon-heavy logo.

---

## PART 3 — FULL SITE ARCHITECTURE (Sitemap)

1. **Loader** (first visit / hard refresh only)
2. **Navbar** (sticky, floating pill, glass blur)
3. **Hero**
4. **Trusted By** (client/partner logo strip)
5. **Why BXC** (three/four pillar values — equivalent to "Heart of the Company")
6. **The Cost of the Wrong Contractor** (problem-framing section — equivalent to "Common Roofing Problems")
7. **Our Capabilities** (solutions intro — equivalent to "Our Solutions")
8. **Services** (4-card grid — equivalent to Services grid)
9. **Our Process** (step-by-step — equivalent to "Streamlined Booking Process")
10. **Featured Projects** (carousel portfolio — equivalent to "What We Did So Far")
11. **Industries We Serve** *(NEW high-value addition)*
12. **By the Numbers** (stats band — equivalent to team/stats section)
13. **Leadership & Team**
14. **Quality, Safety & Craftsmanship** *(NEW high-value addition)*
15. **Client Testimonials**
16. **FAQ**
17. **Engagement / How We Work** *(NEW — lightweight "pricing-adjacent" tiers section)*
18. **Final CTA** ("Start Your Project")
19. **Footer**

---

## PART 4 — SECTION-BY-SECTION BLUEPRINT

For every section below: **Content**, **Layout**, **Animation**.

### 0. Loader (plays once per fresh page load)
**Content:** "BXC" letters, a thin progress line, percentage counter (0→100%).
**Layout:** Full-viewport, background `#0E0F0F`, logo centered, percentage bottom-left or bottom-center in small tracked caps.
**Animation:**
1. Screen is solid `#0E0F0F`.
2. "BXC" letters mask-reveal one at a time, left to right (clip-path or mask animation, ~0.08s stagger per letter), while a thin 1px bronze progress line draws left→right beneath it.
3. Percentage counter ticks 0→100 in sync with the line (roughly 1.2–1.6s total).
4. On completion, the whole loader panel splits or fades: a horizontal wipe (top half slides up, bottom half slides down) reveals the hero underneath, OR a simple scale-up + fade (choose the wipe — it's more premium and matches the "cinematic reveal" brief).
5. Hero content beneath is already in its "hidden" state (opacity 0, y:20, blur:8px) and plays its own entrance animation immediately as the loader clears, so there's zero dead time.
Total loader duration: ~1.8–2.2s max. Never longer — a premium site never makes you wait.

### 1. Navbar
**Content:** Logo "BXC CONSTRUCTION" (left) · Nav links: Services · Projects · Process · About · Contact (center, pill capsule) · "Request a Consultation" button (right, bronze fill or bronze-outline).
**Layout:** Floating pill, ~92% viewport width, sits ~20px from top, `backdrop-filter: blur(16px)`, background `rgba(247,246,243,0.7)` on light scroll position; inverts to a dark glass pill `rgba(17,20,19,0.7)` once scrolled over dark sections (scroll-aware color inversion — an upgrade over the source, which kept one nav style throughout).
**Animation:** Nav fades/drops in 0.4s after loader clears. Underline-on-hover for links (1px bronze line grows from center outward, 0.25s). CTA button has a **magnetic hover** effect: button subtly follows cursor within a 12px radius when cursor is within 60px of it, spring-eased back to center on mouse leave. On scroll down >100px, nav shrinks slightly (padding reduces ~15%) and gains a soft shadow.

### 2. Hero
**Eyebrow:** "PREMIUM DESIGN-BUILD CONSTRUCTION"
**Headline (masked text reveal, word by word):** "Engineering the Extraordinary."
**Subheadline:** "From ground-up estates to landmark commercial builds — BXC Construction delivers uncompromising craftsmanship, on schedule, at scale."
**Trust card (floating, bottom-left over hero image):** 3 avatar circles + "500+ Projects Delivered" + 5-star row "(4.9)" + primary CTA "Request a Consultation →" (bronze).
**Secondary CTA (text link near headline):** "View Our Work ↓"
**Visual:** Full-bleed cinematic image or slow-motion looping video of a modern architectural build (steel frame at golden hour, or a finished luxury facade) — desaturated slightly, with a subtle dark gradient overlay bottom third for text legibility.
**Logo strip below hero:** "TRUSTED BY LEADING DEVELOPERS" + 5 partner/client logos, grayscale, hover-to-color.
**Animation:**
- Headline reveals via **line-mask**: each word rises from a clipped mask (translateY 110%→0%, `clip-path: inset(100% 0 0 0)` → `inset(0 0 0 0)`), staggered 0.05s per word, 0.6s duration, expo-out ease. This is the "cinematic text reveal" upgrade over the source (source used simple opacity fades only).
- Subheadline and trust card fade+rise in immediately after (the standard opacity/y/blur pattern), staggered 0.15s after headline finishes.
- Background image/video has a **slow parallax**: scrolls at 0.5× page scroll speed, plus a very slight continuous Ken Burns zoom (scale 1.0→1.05 over 15s, looping) even before any scroll happens — this alone adds significant "cinematic" perception.
- Logo strip: grayscale→color crossfade (0.3s) on hover.

### 3. Trusted By
Already described inline above with Hero — kept as a compact strip, not a full section, exactly as in source.

### 4. Why BXC (Values)
**Eyebrow:** "OUR PHILOSOPHY"
**Headline:** "The BXC Standard"
**Four cards** (upgraded from source's 3–4):
1. **Uncompromising Craftsmanship** — "Every joint, weld, and finish is executed to a standard most firms reserve for showcase projects."
2. **Engineering-First Approach** — "We design for structural integrity and longevity before we design for aesthetics — then we deliver both."
3. **Radical Transparency** — "Real-time project dashboards, weekly site reports, and a dedicated project lead — always reachable."
4. **On-Time, On-Budget, Guaranteed** — "Our fixed-scope contracts and in-house supply chain mean the number we quote is the number you pay."
**Layout:** 4-column grid on light background (`#F7F6F3`), each card on `#EDEBE6` background, icon (thin-line, monochrome) top, bold label, 2-line description, generous internal padding (~40px), subtle 1px border, rounded corners (16–20px radius).
**Animation:** Standard scroll-reveal stagger (opacity/y/blur, 0.14s stagger, left→right) — identical mechanic to source's "Heart of the Company," confirmed and preserved exactly.

### 5. The Cost of the Wrong Contractor (Problem section)
**Eyebrow:** "WHY IT MATTERS"
**Headline:** "One Bad Contractor Can Cost You Years — and Millions."
**Subhead:** "Structural shortcuts, blown timelines, and budget overruns aren't rare in construction — they're the industry default. BXC exists to be the exception."
**CTA (dark pill button):** "See How We're Different"
**2×3 grid** (dark cards on light bg, or light cards — keep source's light-card treatment):
1. **Structural Shortcuts** — "Undocumented substitutions that compromise long-term integrity."
2. **Budget Creep** — "Vague scopes that balloon costs mid-project."
3. **Missed Deadlines** — "Poor scheduling that cascades into months of delay."
4. **Subpar Materials** — "Unlisted, cheaper materials swapped in without disclosure."
5. **Poor Communication** — "Radio silence for weeks at a time on major decisions."
6. **No Accountability** — "Disputes with no clear contract or documentation to resolve them."
**Animation:** Same scroll-reveal stagger pattern, 2×3 grid staggers row-by-row.

### 6. Our Capabilities (Solutions intro)
**Eyebrow:** "WHAT WE DELIVER"
**Headline:** "Full-Spectrum Construction Capability"
**Subhead:** "From first sketch to final walkthrough, BXC manages every phase in-house."
**Visual:** Two large side-by-side images (before/after or two capability shots) fading in with a slight horizontal reveal — mirrors source's two-image reveal into the services cards.

### 7. Services (4-card grid)
1. **Custom Residential Builds** — "Ground-up luxury homes engineered around how you actually live, from foundation to final finish."
2. **Commercial Construction** — "Retail, hospitality, and office builds delivered on aggressive timelines without cutting corners."
3. **Renovation & Additions** — "Structural, high-impact renovations that respect the original architecture while transforming the space."
4. **Design-Build Consulting** — "Bring us in at concept stage — our in-house architects and engineers de-risk your project before ground ever breaks."
Each card: large image top, title, 2–3 line description, "Learn More →" link bottom.
**Animation:** Image has a subtle scale (1.0→1.08) on card hover over 0.5s ease-out; card lifts 6px with a soft shadow bloom on hover (`box-shadow` expands + `translateY(-6px)`) — this is the "project card animation" micro-interaction requested.

### 8. Our Process
**Eyebrow:** "HOW WE WORK"
**Headline:** "From Vision to Handover in Five Disciplined Phases"
**Five steps** (upgraded from source's 3):
1. **Discovery & Feasibility** — "Site assessment, budget modeling, and feasibility study."
2. **Design & Engineering** — "Architectural drawings, structural engineering, and permitting."
3. **Pre-Construction Planning** — "Detailed scheduling, procurement, and subcontractor vetting."
4. **Construction & Oversight** — "Daily site management with weekly client reporting."
5. **Final Walkthrough & Handover** — "Punch-list resolution, documentation handoff, and warranty activation."
**Layout:** Horizontal timeline on desktop (connecting line with numbered nodes), vertical stacked on mobile.
**Animation:** Line draws left→right as the section scrolls into view (`stroke-dashoffset` animation or width transition on a pseudo-element), each node's content fades in as the line reaches it — an upgrade over the source's simple icon-row reveal, adds real scroll-scrubbed motion.

### 9. Featured Projects (carousel)
**Eyebrow:** "OUR PORTFOLIO"
**Headline:** "Selected Work"
**Subhead:** "A cross-section of what disciplined execution looks like."
**Carousel sets** (3 sets of images, cycling with pagination dots, exactly as source):
1. **The Hillcrest Estate** — Luxury ground-up residential, 14,000 sq ft.
2. **Meridian Corporate Campus** — Class-A commercial office build.
3. **The Alden Residences** — High-rise residential renovation & structural retrofit.
Each project card on click/hover reveals an overlay: project name, category tag, "View Case Study →".
**Animation:** Auto-advance every ~5s (source's carousel cadence, verified as roughly matching the ~5–6s per set observed in the video), pauses on hover, crossfade + slight horizontal slide between sets (0.5s), pagination dots fill left→right as a subtle progress indicator rather than a static dot.

### 10. Industries We Serve *(NEW)*
**Eyebrow:** "SECTORS"
**Headline:** "Built Across Every Sector That Demands Precision"
**Grid/tag-cloud style (6 items, icon + label only — lighter-weight section, not full cards):** Luxury Residential · Hospitality & Resorts · Corporate & Office · Retail & Mixed-Use · Healthcare Facilities · Institutional & Government
**Animation:** Simple stagger fade-in, faster/lighter than main sections (0.3s duration, no blur) since this is a lower-emphasis supporting section.

### 11. By the Numbers (stats band)
**Layout:** Full-width dark panel, `#111413` background (equivalent role to source's dark about/team band).
**Headline:** "Two Decades of Disciplined Execution"
**Stat cards (rotated/fanned slightly, bronze accent, mirrors source's yellow stat cards):**
- **500+** Projects Delivered
- **$2.4B+** Construction Value Managed
- **20 Years** Industry Experience
- **98%** On-Time Delivery Rate
**Animation:** **Animated counters** — numbers count up from 0 to final value over ~1.6s, eased out, triggered on scroll-into-view (this was explicitly requested and is a genuine upgrade over the source, which had static stat numbers).

### 12. Leadership & Team
**Headline:** "Meet the People Behind the Build"
**Team grid** (4+, headshots on `#111413` background matching source's dark team band):
- **[Founder Name]** — Founder & CEO
- **[Name]** — Head of Construction
- **[Name]** — Chief Architect
- **[Name]** — Director of Client Relations
*(Leave names as clean placeholders like "Marcus Bell," "Elena Cho," etc. — instruct the AI builder to use professional stock headshots, never cartoon avatars.)*
**Animation:** Same grid stagger reveal; on hover, headshot desaturates slightly and a bronze underline draws beneath the name.

### 13. Quality, Safety & Craftsmanship *(NEW)*
**Eyebrow:** "STANDARDS"
**Headline:** "Zero-Compromise Standards, Documented at Every Stage"
**Three pillars:**
1. **Licensed & Fully Insured** — "Bonded for projects up to $50M with full liability and workers' comp coverage."
2. **OSHA-Certified Site Safety** — "Every site manager holds active OSHA-30 certification; zero lost-time incidents in five years."
3. **Third-Party Quality Audits** — "Independent structural inspections at every major milestone, documented and shared with clients."
**Layout:** Icon-led list format on a light background, paired with a large supporting image (site safety / quality inspection photo) — breaks the grid rhythm slightly for visual variety, which is good practice this deep into the page.

### 14. Client Testimonials
**Eyebrow:** "CLIENT VOICES"
**Headline:** "What Our Clients Say"
**Four unique testimonials (fixing the source's duplicate-card issue):**
1. "BXC delivered our estate two weeks ahead of schedule, with zero change-order surprises. Unheard of in this industry." — **Richard Voss**, Private Client
2. "Their in-house engineering team caught a structural issue our architect missed — saved us six figures." — **Amanda Cole**, Cole Hospitality Group
3. "The weekly reporting alone is worth the premium. We always knew exactly where the project stood." — **David Kim**, Meridian Developments
4. "White-glove from first call to final walkthrough. This is what 'premium' is supposed to mean." — **Sophia Marchetti**, Marchetti Retail Holdings
**Animation:** Identical stagger-reveal grid mechanic as source, verified.

### 15. FAQ
**Eyebrow:** "FAQS"
**Headline:** "Common Questions"
**Four+ questions:**
1. **"How do you guarantee project timelines?"** — "Every contract includes a fixed schedule with liquidated-damages clauses for delays on our end — your timeline is our liability, not just our promise."
2. **"What's included in your fixed-price contracts?"** — "Materials, labor, permitting, and a 10% contingency buffer are all locked in before you sign — no surprise change orders."
3. **"Do you handle permitting and architectural design in-house?"** — "Yes. Our design-build model means architecture, engineering, and construction sit under one roof and one point of accountability."
4. **"What size projects do you take on?"** — "From $500K renovations to $50M ground-up builds — our process scales without losing precision."
**Layout/animation:** Accordion exactly as source — closed state on stone-gray `#EDEBE6`, active/expanded state switches to graphite `#2B2D2C` with white text, smooth height animation (0.35s ease), plus/x icon rotates 45° on open.

### 16. Engagement / How We Work *(NEW — pricing-adjacent, not literal price tags)*
**Eyebrow:** "GETTING STARTED"
**Headline:** "Three Ways to Work With Us"
**Three tier cards (no hard prices — luxury construction never lists prices publicly; instead frame as engagement models):**
1. **Consultation** — "A paid feasibility and budget study before you commit to anything." → "Book a Consultation"
2. **Design-Build** — "Full-service, single-contract delivery from concept to handover." (marked "Most Popular" with a bronze ribbon/badge)
3. **Construction Management** — "Bring your own architect — we manage procurement, scheduling, and on-site execution." → "Discuss Your Project"
**Animation:** Standard card stagger; "Most Popular" card slightly elevated (scale 1.03, subtle bronze glow shadow) to match premium SaaS-pricing conventions adapted to construction.

### 17. Final CTA
**Eyebrow:** "LET'S BUILD"
**Headline:** "Start Your Project With BXC"
**Subhead:** "Tell us what you're building. We'll respond within one business day with next steps."
**Form fields:** Name · Email · Project Type (dropdown: Residential / Commercial / Renovation / Consulting) · Estimated Budget (dropdown) · Message (textarea)
**CTA button:** "Request a Consultation" (bronze fill)
**Layout:** Two-column — left: headline/copy on `#F7F6F3`; right: form on a subtly elevated white card with soft shadow.

### 18. Footer
**Layout:** Full-width `#111413` dark panel.
**Columns:** Logo + tagline "Building Excellence, By Design." + social icons (LinkedIn, Instagram) | NAVIGATION (Services, Projects, Process, About) | COMPANY (Careers, Press, Privacy, Terms) | CONTACT (Address, Phone, Email)
**Bottom bar:** "© [Year] BXC Construction. All rights reserved." + license number placeholder (adds real-world construction-industry credibility: "Licensed General Contractor · License #XXXXXXX").

---

## PART 5 — GLOBAL INTERACTION SYSTEM (applies site-wide)

- **Custom cursor:** Small bronze dot cursor by default; expands into a soft-edged 60px circle with "View" or "Drag" text when hovering project cards/carousel; disabled entirely on touch devices.
- **Magnetic buttons:** All primary CTA buttons (nav CTA, hero CTA, final CTA) use the magnetic-pull hover effect described in the Navbar section.
- **Scroll-reveal system:** One single reusable animation variant (opacity/y/blur/stagger as defined in Part 1) applied consistently to every section — this consistency is what makes the source feel cohesive, and it must not be varied randomly section to section.
- **Page transitions:** If built as multi-page (e.g., separate Project Case Study pages), use a shared-panel wipe transition (dark panel wipes across screen, ~0.5s) between route changes rather than a hard cut.
- **Button micro-interactions:** All buttons: 0.2s ease background/border transition on hover; bronze-fill buttons darken slightly (`#B08D57` → `#9A7847`) on hover; outline buttons fill with a bronze background sliding in from the left on hover.
- **Image reveals:** Any image entering on scroll uses a clip-path wipe (revealed from a horizontal bar sliding away) rather than a plain fade, for anything above the fold or a "hero-weight" image (services cards, process images).

---

## PART 6 — MOBILE / RESPONSIVE BEHAVIOR

- Loader: identical, but percentage counter and logo scale down proportionally; total duration trimmed to ~1.4s (mobile users are more time-sensitive).
- Navbar: collapses to logo + hamburger icon; menu opens as a full-screen dark overlay (`#111413`) with large stacked nav links that mask-reveal in one after another (same stagger logic as desktop hero text), CTA button pinned at the bottom of the overlay.
- Hero: headline font-size reduces ~45%, trust card moves below the headline (not floated over image) and becomes full-width, background video swapped for a static hero image on mobile to protect performance/data usage.
- All 3–4 column grids collapse to a single column, vertically stacked, with the same stagger-reveal timing (slightly faster stagger, ~0.1s, since single-column reveals feel slower otherwise).
- Process timeline switches from horizontal to vertical with the connecting line running top-to-bottom.
- Carousel becomes swipeable (touch drag) instead of hover-pause/autoplay-only.
- Magnetic button and custom cursor effects are disabled entirely on touch devices (no equivalent, and forcing it causes jank).
- Minimum tap target size 44×44px on every interactive element.
- Typography uses `clamp()` fluid scaling between a defined mobile-min and desktop-max for every heading level rather than fixed breakpoint jumps.

---

## PART 7 — RECOMMENDED TECHNICAL STACK

- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS with a custom design-token config matching Part 2's exact palette/type scale
- **Animation:** Framer Motion for all component-level reveals, hover states, and the magnetic-button/cursor system; GSAP + ScrollTrigger specifically for the Process section's scroll-scrubbed line-draw animation (Framer Motion can do it too, but GSAP's ScrollTrigger is more precise for scrubbed/pinned effects)
- **Smooth scroll:** Lenis, wrapping the whole app, tuned to a moderate (not overly floaty) damping so it reads premium rather than slippery
- **Carousel:** Embla Carousel (lightweight, unopinionated, easy to pair with Framer Motion crossfades)
- **Counters:** a simple custom `useCountUp` hook triggered by an Intersection Observer, or Framer Motion's `useMotionValue` + `animate()`
- **Forms:** React Hook Form + Zod validation, submitting to a serverless function or a service like Resend/Formspree
- **Images:** Next.js `<Image>` with AVIF/WebP, all hero/project imagery sourced as high-resolution architectural photography (not stock-obvious construction-site photos — needs to look editorial)

---

## PART 8 — THE AI BUILDER PROMPT (copy-paste block)

> Use everything below as a single, high-priority instruction set. Do not simplify, omit, or substitute generic alternatives for anything specified. If a limitation prevents an exact implementation, implement the closest possible equivalent and flag it rather than silently dropping it.

```
Build a full, production-quality, ultra-premium website for a luxury construction
company called "BXC CONSTRUCTION." Tagline: "Engineering the Extraordinary."

DESIGN SYSTEM
- Colors: background #F7F6F3, text #0E0F0F, dark panels #111413, secondary dark/active
  state #2B2D2C, accent (used ONLY for primary buttons/highlights) #B08D57, card
  background #EDEBE6, borders #DDD9D1 (light) / #33342F (dark).
- Typography: one geometric sans-serif family (General Sans / Neue Montreal / Inter
  fallback) for everything. Headings 600 weight, nav 500, body 400, section eyebrows
  500 weight uppercase with 0.12em letter-spacing.
- Never use pure white (#FFFFFF) or pure black (#000000) anywhere.
- Rounded corners: 16-20px on cards, pill-shaped (9999px) on buttons and the nav.

GLOBAL ANIMATION RULE (apply identically to every section, no exceptions)
Every section/card enters on scroll using this exact variant: opacity 0→1,
translateY 20px→0, filter blur(8px)→blur(0px), duration 0.4s, ease
cubic-bezier(0.16,1,0.3,1), staggered 0.14s between sibling items, triggered once
via intersection observer at ~30% visibility.

PAGE LOADER (plays once on fresh load only, ~1.8-2.2s total)
Full-screen #111413 panel. "BXC" reveals letter-by-letter via clip-path mask,
left to right, 0.08s stagger per letter. A 1px #B08D57 progress line draws
beneath it in sync with a 0-100% counter. On completion, panel splits into two
halves (top slides up, bottom slides down) to reveal the hero, which is already
mid-entrance-animation underneath so there is no dead pause.

NAVBAR
Floating pill, 92% width, 20px from top, glassmorphism blur, logo left
("BXC CONSTRUCTION"), center links (Services, Projects, Process, About, Contact),
right CTA button "Request a Consultation" filled #B08D57. Nav pill switches from
light-glass to dark-glass automatically based on the background color of the
section currently behind it. CTA button has a magnetic hover effect (follows
cursor within 12px radius inside a 60px hover zone, springs back on leave). Nav
links get a center-out underline animation on hover.

SECTION 1 - HERO
Eyebrow: "PREMIUM DESIGN-BUILD CONSTRUCTION"
Headline (large, bold): "Engineering the Extraordinary." — reveal word-by-word
using a line-mask animation (each word rises from behind a clipping mask,
0.6s duration, 0.05s stagger per word, expo-out ease) - NOT a simple fade.
Subheadline: "From ground-up estates to landmark commercial builds — BXC
Construction delivers uncompromising craftsmanship, on schedule, at scale."
Background: full-bleed cinematic architectural photo/video with slow continuous
Ken Burns zoom (scale 1.0 to 1.05 over 15s loop) plus parallax scroll (0.5x speed).
Floating card bottom-left: 3 avatar circles, "500+ Projects Delivered", 5-star
rating "(4.9)", primary CTA button "Request a Consultation ->".
Secondary link near headline: "View Our Work ↓"
Below hero: "TRUSTED BY LEADING DEVELOPERS" + 5 grayscale partner logos that
crossfade to full color on hover.

SECTION 2 - WHY BXC (four cards, icon + title + 2-line description)
Eyebrow "OUR PHILOSOPHY", headline "The BXC Standard"
1. Uncompromising Craftsmanship
2. Engineering-First Approach
3. Radical Transparency
4. On-Time, On-Budget, Guaranteed
(write full supporting copy for each per the blueprint above)

SECTION 3 - PROBLEM FRAMING
Eyebrow "WHY IT MATTERS", headline "One Bad Contractor Can Cost You Years — and
Millions.", dark CTA pill "See How We're Different", then a 2x3 grid of pain
points: Structural Shortcuts, Budget Creep, Missed Deadlines, Subpar Materials,
Poor Communication, No Accountability - each with a one-line description.

SECTION 4 - CAPABILITIES INTRO
Eyebrow "WHAT WE DELIVER", headline "Full-Spectrum Construction Capability",
two large side-by-side images revealing via horizontal clip-path wipe.

SECTION 5 - SERVICES (4 cards, image top + title + description + "Learn More ->")
1. Custom Residential Builds
2. Commercial Construction
3. Renovation & Additions
4. Design-Build Consulting
On hover: image scales to 1.08 over 0.5s, card lifts -6px with soft shadow bloom.

SECTION 6 - OUR PROCESS (5 steps, horizontal timeline desktop / vertical mobile)
Discovery & Feasibility -> Design & Engineering -> Pre-Construction Planning ->
Construction & Oversight -> Final Walkthrough & Handover.
Connecting line draws left-to-right (or top-to-bottom on mobile) in sync with
scroll position using a scroll-scrubbed stroke/width animation; each step's
content fades in as the line reaches its node.

SECTION 7 - FEATURED PROJECTS (auto-advancing carousel, ~5s per slide, pauses on
hover, pagination dots that fill as a progress bar)
1. The Hillcrest Estate - Luxury ground-up residential, 14,000 sq ft
2. Meridian Corporate Campus - Class-A commercial office build
3. The Alden Residences - High-rise residential renovation & structural retrofit
Hover/tap reveals overlay: project name, category tag, "View Case Study ->"

SECTION 8 - INDUSTRIES WE SERVE
Eyebrow "SECTORS", headline "Built Across Every Sector That Demands Precision"
6 icon+label items: Luxury Residential, Hospitality & Resorts, Corporate & Office,
Retail & Mixed-Use, Healthcare Facilities, Institutional & Government

SECTION 9 - BY THE NUMBERS (full-width dark #111413 panel)
Headline "Two Decades of Disciplined Execution"
4 stat cards with ANIMATED COUNT-UP numbers (0 to final value, 1.6s, ease-out,
triggered on scroll into view), slightly rotated/fanned layout, bronze accents:
500+ Projects Delivered / $2.4B+ Construction Value Managed / 20 Years Industry
Experience / 98% On-Time Delivery Rate

SECTION 10 - LEADERSHIP & TEAM (dark #111413 background, 4 headshots)
Marcus Bell - Founder & CEO / Elena Cho - Head of Construction / James Whitfield
- Chief Architect / Priya Nair - Director of Client Relations
On hover: headshot desaturates slightly, bronze underline draws under the name.

SECTION 11 - QUALITY, SAFETY & CRAFTSMANSHIP
Eyebrow "STANDARDS", headline "Zero-Compromise Standards, Documented at Every
Stage", icon-led list (Licensed & Fully Insured / OSHA-Certified Site Safety /
Third-Party Quality Audits) paired with a large supporting photo.

SECTION 12 - TESTIMONIALS (4 UNIQUE cards - do not duplicate any card)
Write 4 distinct testimonials with distinct names/roles per the blueprint above.

SECTION 13 - FAQ (accordion, closed state light gray #EDEBE6, active state dark
#2B2D2C with white text, smooth height animation 0.35s, icon rotates 45deg on open)
4+ questions per the blueprint above with full answers.

SECTION 14 - ENGAGEMENT / HOW WE WORK (3 tier cards, no literal prices)
Consultation / Design-Build (marked "Most Popular", elevated + bronze glow) /
Construction Management - each with description and its own CTA link.

SECTION 15 - FINAL CTA (two-column: copy left, form right on elevated white card)
Headline "Start Your Project With BXC", form fields: Name, Email, Project Type
dropdown, Estimated Budget dropdown, Message textarea, bronze submit button
"Request a Consultation"

SECTION 16 - FOOTER (dark #111413, 4 columns: brand+social, navigation, company,
contact) + bottom bar with copyright and "Licensed General Contractor #XXXXXXX"

GLOBAL INTERACTIONS
- Custom cursor: bronze dot by default, expands to 60px circle with "View" label
  on project card hover; disabled on touch devices.
- Magnetic pull effect on all primary CTA buttons.
- All buttons: 0.2s hover transitions; filled buttons darken on hover; outline
  buttons fill with a bronze slide-in from the left on hover.
- Any hero-weight image reveals via horizontal clip-path wipe on scroll-into-view,
  not a plain fade.

MOBILE BEHAVIOR
- Full-screen dark hamburger menu overlay with stagger-mask-reveal nav links.
- All grids collapse to single column, same reveal animation at slightly faster
  stagger (0.1s).
- Hero background swaps to a static image (no video) on mobile for performance.
- Process timeline goes vertical.
- Carousel becomes swipe/touch-drag enabled.
- Disable custom cursor and magnetic buttons entirely on touch devices.
- Fluid type scaling via clamp() for every heading across all breakpoints.

TECH STACK
Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion (all component
reveals/hovers/magnetic cursor) + GSAP ScrollTrigger (Process section scroll-
scrubbed line-draw specifically) + Lenis (global smooth scroll, moderate damping)
+ Embla Carousel (Featured Projects) + React Hook Form + Zod (Contact form).

NON-NEGOTIABLE QUALITY BAR
The result must never look like a generic template or an "AI-generated" website.
Every section must use the exact color system, single-typeface discipline, and
identical scroll-reveal animation variant specified above with no deviation. No
pure black/white anywhere. No default framework styling left un-customized
(no default blue links, no default button shadows, no browser-default form
inputs). All copywriting must match the tone and exact wording provided above -
do not rewrite it into generic marketing filler.
```

---

## PART 9 — WHAT TO SEND THE BUILDER TOGETHER WITH THIS FILE

1. This entire document (as the authoritative spec).
2. Any real BXC logo/photography assets you have — if none exist yet, instruct the builder explicitly to source or generate high-end architectural/construction photography (not generic stock) for the hero, services, and projects sections.
3. Real founder/team names and headshots if you want to replace the placeholders before launch.
4. Your actual license number, address, and phone for the footer and contact form once available.
