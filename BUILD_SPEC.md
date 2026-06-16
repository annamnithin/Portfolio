# Nithin Annam — Portfolio UI Build Specification

A complete, implementation-ready spec for building a personal developer portfolio with a
refined **Japanese aesthetic**. Any AI or developer should be able to build the entire
application from this document alone. Read it top to bottom before writing code.

---

## 1. Concept & Intent

A single-page **scroll journey** that tells the story of one person's life through education
stages, each rendered as an **illustrated, animated 2D scene** built with **SVG + CSS/Framer
Motion** (NOT raster images). The tone is calm, cultural, and storybook-like — inspired by
ukiyo-e woodblock prints, sumi-e ink painting, washi paper, and seasonal motifs (maple leaves,
sakura, waves, torii gates, lanterns).

Each life stage must visually *reflect* its meaning:

| Stage | Scene it must depict |
|-------|----------------------|
| High School | A child reading a book under a maple tree, leaves dropping from the tree |
| Junior College | Playing freely with friends (kite, open sky, blossoms) |
| Engineering Institute | Sitting in front of a computer, the screen glow beaming on the face (night) |
| University (Master's) | A graduate by a torii gate taking flight — cap toss, swirling leaves |

Guiding principle: **"Ship something interesting, never boring, never ugly."** Animation is a
first-class requirement on every section — not decoration.

---

## 2. Tech Stack (required)

- **Next.js (App Router)** + **React** + **TypeScript**
- **Tailwind CSS** for styling (semantic design tokens only — no raw hex in components)
- **Framer Motion** for scroll-triggered reveals, parallax, and orchestrated animations
- All scenes are **hand-built SVG + CSS keyframes**. No `.png`/`.jpg` illustration assets.
- `prefers-reduced-motion` must be respected globally.

### File structure
```
app/
  layout.tsx            # fonts, metadata, <html className="bg-background">
  globals.css           # design tokens + texture/pattern utilities
  page.tsx              # assembles all sections in order
components/
  nav.tsx               # fixed top nav, smooth-scroll links, scroll progress
  sections/
    hero.tsx
    about.tsx
    education.tsx        # maps over education[] -> EducationStage
    projects.tsx
    contact.tsx
  scenes/
    school-scene.tsx
    junior-college-scene.tsx
    institute-scene.tsx
    university-scene.tsx
  motifs/
    particle-field.tsx   # reusable falling leaves / petals
    reveal.tsx           # scroll-triggered reveal wrapper
    enso.tsx             # ink circle
    seigaiha.tsx         # wave pattern
    torii.tsx            # gate svg
lib/
  data.ts               # ALL content (profile, education, projects)
```

---

## 3. Design System

### 3.1 Color tokens (exactly these — defined in `globals.css` as CSS vars, mapped in Tailwind)

| Token | Hex | Meaning / use |
|-------|-----|---------------|
| `--background` / `washi` | `#f4efe6` | Warm off-white washi paper — default page bg |
| `--foreground` / `sumi` | `#2b2722` | Sumi ink near-black — body text |
| `--ai` | `#20435c` | Ai-iro indigo — primary brand, dark sections |
| `--ai-soft` | `#3a6a87` | Lighter indigo — secondary |
| `--shu` | `#c4452f` | Shu-iro vermillion — accents, seals, CTAs |
| `--ochre` | `#c98a3c` | Warm ochre — autumn leaves, glow |
| `--matcha` | `#6f8f5a` | Muted green — foliage accents |
| `--card` | `#faf6ee` | Card surface |
| `--muted` | `#8c8273` | Muted text |
| `--border` | `#ddd2bf` | Hairline borders |
| `--radius` | `0.5rem` | Corner rounding |

Rules: use tokens via Tailwind classes (`bg-background`, `text-ai`, `border-border`, etc.).
**Never** use `text-white`/`bg-black` or raw hex in components. Keep to this palette — no purple.

### 3.2 Typography (2 families only)

- **Headings — serif:** `Shippori Mincho` (Google Font), Tailwind `font-serif`. Elegant, calm.
- **Body / UI — sans:** `Zen Kaku Gothic New` (Google Font), Tailwind `font-sans`.
- Load in `layout.tsx` via `next/font/google`, expose as CSS vars `--font-shippori` and
  `--font-zen-kaku`, wire into `tailwind.config.ts` `fontFamily`.
- Body line-height relaxed (`leading-relaxed`). Headings can use `text-balance`/`text-pretty`.
- Kanji accents (e.g. `学び`) appear as large decorative serif glyphs and via `.vertical-text`.

### 3.3 CSS utilities (in `globals.css`)

- `.washi-texture` — layered faint radial gradients simulating paper grain (no image).
- `.seigaiha` — repeating wave pattern via radial-gradients, `background-size: 60px 30px`.
- `.vertical-text` — `writing-mode: vertical-rl; text-orientation: upright` for vertical kanji.
- Global `@media (prefers-reduced-motion: reduce)` disables animations.

### 3.4 Keyframes / animations (in `tailwind.config.ts`)

| Name | Effect | Used by |
|------|--------|---------|
| `leaf-fall` | translate down 110vh + rotate 720°, fade in/out, `--drift` var for x-drift | maple leaves |
| `petal-drift` | gentler fall + rotate 360° | sakura petals |
| `screen-glow` (`animate-screen-glow`) | opacity 0.55↔1 pulse, 3.5s | institute screen glow |
| `gentle-float` (`animate-gentle-float`) | translateY 0↔-10px, 6s | clouds, kite, lanterns |
| `sway` (`animate-sway`) | rotate -2°↔2°, 5s | tree, foliage |
| `code-blink` (`animate-code-blink`) | opacity blink, steps(1) | code cursor |
| `ripple` | scale 0.8→2.2 fade | water ripples / pond |

Each particle gets randomized `left`, `animation-delay`, `animation-duration`, and `--drift`
so motion never looks uniform.

---

## 4. Layout & Section Order

Single page, vertical scroll, in this exact order:

1. **Nav** (fixed)
2. **Hero**
3. **About**
4. **Education journey** (4 animated scenes, alternating sides)
5. **Projects** ("Selected Work")
6. **Contact** (footer)

Global layout rules: mobile-first, flexbox first / grid only for 2D layouts, Tailwind spacing
scale (no arbitrary px), `gap-*` for spacing (never mix margin+gap on same element). Section
vertical rhythm: `py-24 md:py-32`, content `max-w-6xl mx-auto px-6`.

---

## 5. Content (source of truth — from `lib/data.ts`)

### profile
- name: **Nithin Annam** (nameJa: `ニティン`)
- title: **Full Stack Developer**
- tagline: *"Crafting software with patience, balance, and care."*
- location: Based in India / USA
- email: `nithinsiva71@gmail.com`
- phone: `+1 786-790-5658`
- linkedin: `https://www.linkedin.com/in/nithin-annam/`

### education (EducationStage[])
Each item: `id, school, kanji, romaji, period, grade, achievement?, scene, caption`.

1. **S.T.B.E.M High School** — 学び (Manabi — to learn) — 2000-2012 — 9.7 G.P.A —
   *School second in SSC Public Exams* — scene `school` —
   caption: "A quiet child reading beneath a maple tree as the leaves let go."
2. **Narayana Junior College** — 友情 (Yūjō — friendship) — 2000-2012 — 9.7 G.P.A —
   scene `juniorCollege` — caption: "Years of playing freely with friends under blossoming skies."
3. **SRK Institute of Technology** — 集中 (Shūchū — focus) — 2000-2012 — 9.7 G.P.A —
   *Best Outgoing Student* — scene `institute` —
   caption: "Late nights at the screen, its glow lighting the way forward."
4. **University at Buffalo** — 飛躍 (Hiyaku — to take flight) — 2022-2023 — 3.8 G.P.A —
   scene `university` — caption: "Stepping through the gate into a wider world."

> NOTE: dates/GPAs for items 1–3 are placeholders (repeated `2000-2012` / `9.7`). Render them as-is
> but keep them trivially editable in `lib/data.ts`. Do not invent corrected values.

### projects (Project[])
Each item: `id, name, client, role, period, description[], tech[]`.

1. **Enterprise Chat Bot** — EY — Full Stack Developer — Jan 2020–Aug 2020 — tech: Azure Web
   Services, Bot Framework API, Azure Cloud, Angular, Python.
2. **Retail Management** — Personal Project — Full Stack Developer — Mar 2020–May 2020 — tech:
   C#, WPF, SQL Server, GitHub, MVC API.
3. **Cash Application** — Infosys — Backend Developer — Oct 2019–Dec 2019 — tech: Python,
   Automation Anywhere.
4. **PayRoll** — Infosys — Database Developer — Nov 2018–Feb 2019 — tech: C#, SQL Server,
   Internal Tool.

(Use the full `description[]` bullet text exactly as stored in `lib/data.ts`.)

---

## 6. Section Specs

### 6.1 Nav (`components/nav.tsx`) — client component
- Fixed top, transparent on hero, gains `bg-washi/80 backdrop-blur` + bottom border after
  scrolling ~40px.
- Left: small vermillion circle "seal" logo + `Nithin / ニティン`.
- Right: smooth-scroll anchor links — **About · Journey · Work · Contact**.
- Thin **scroll-progress bar** (vermillion) pinned to the very top, width = scroll %.
- Mobile: collapse links into a simple toggle.

### 6.2 Hero (`components/sections/hero.tsx`)
- Full-viewport (`min-h-screen`), `washi-texture` background, flex centered, content left-aligned
  on desktop.
- **Background:** a large, slowly **morphing indigo ink-blob** SVG (animate the `d` path or use a
  blob that scales/rotates very slowly) behind the text, low opacity. Optional faint floating
  particles.
- **Foreground:** giant decorative kanji or enso behind the name; `Nithin Annam` in large
  `font-serif` (clamp ~`text-6xl md:text-8xl`); below: `Full Stack Developer` + tagline in muted
  sans; a vertical `ニティン` accent using `.vertical-text`.
- A `.seigaiha` wave strip along the bottom edge.
- Entrance: staggered fade-up of name → title → tagline (Framer Motion, on mount).
- A subtle scroll-cue (bouncing line/arrow) at bottom.

### 6.3 About (`components/sections/about.tsx`)
- Two-column on `md+` (flex/grid), single column on mobile.
- Left: section label "About" (small uppercase, thin vermillion vertical rule) + an **enso**
  (ink brush ring) framing a portrait placeholder (use a generated avatar or an `enso` ring around
  initials — no external image required).
- Right: short editorial bio paragraph (derive 2–3 calm sentences from title + tagline + the idea
  of a developer who values balance/craft), then a wrap of **skill pill chips**: React, Angular,
  Node, Python, C#, SQL Server, Azure (soft bordered pills, `border-border`, hover lifts).
- Reveal each block on scroll via `Reveal`.

### 6.4 Education journey (`components/sections/education.tsx` + `components/scenes/*`)
- Section intro: heading like "The Journey" / 道 (michi) with a short line.
- Map over `education[]`. Each stage is a **full-width row**, alternating: scene on left/text on
  right, then flipped for the next (use index parity). On mobile, scene stacks above text.
- **Text card:** small `period` label, kanji glyph + `romaji`, `school` as `font-serif` heading,
  `grade`, optional `achievement` (as a small vermillion "seal" badge), and the `caption` in muted
  italic serif.
- Use a vertical **timeline spine** down the center on desktop with a node per stage.
- Each scene is its own component (below). Scenes reveal + start their loops when scrolled into
  view (Framer Motion `whileInView`, `viewport={{ once: false, amount: 0.3 }}`).

#### Scene: School (`school-scene.tsx`) — day, washi sky
- Flat SVG: a large **maple tree** (brown trunk, layered ochre/shu/matcha foliage clusters), a
  small **child sitting** with an **open book**, grass baseline.
- Tree foliage uses `animate-sway`. 
- **Falling maple leaves**: render ~14 leaf SVGs via `ParticleField` using `leaf-fall`, colors
  cycling shu/ochre/matcha, randomized position/delay/drift. Leaves originate near the canopy.
- Soft sun/enso in the corner.

#### Scene: Junior College (`junior-college-scene.tsx`) — bright open sky
- Flat SVG: 2–3 simple **friend figures** playing, one flying a **kite** (string to a hand), a few
  `gentle-float` **clouds** (seigaiha-styled), rolling hill baseline.
- **Drifting sakura petals** via `ParticleField` using `petal-drift` (pink-tinted shu/ochre mix,
  soft). Kite bobs with `gentle-float`; figures have a subtle bounce.

#### Scene: Institute (`institute-scene.tsx`) — NIGHT, dark indigo bg
- Dark `bg-ai` panel. A **desk + person silhouette** facing a **monitor**. The screen emits a
  **glow** (radial gradient rectangle) using `animate-screen-glow`, casting light onto the face
  (a lighter wedge shape toward the figure).
- On-screen: a few **code lines** (rects) with a blinking cursor (`animate-code-blink`).
- A **paper lantern** glowing with `gentle-float` nearby. A couple of faint floating embers.

#### Scene: University (`university-scene.tsx`) — dawn, hopeful
- Flat SVG: a red **torii gate** (`torii.tsx`), distant stylized **mountains**, a **graduate**
  figure with cap; a **graduation cap tossed** that animates up in an arc on view.
- Swirling leaves/petals via `ParticleField`. Subtle rising sun. Gentle parallax on mountains.

### 6.5 Projects (`components/sections/projects.tsx`)
- Heading "Selected Work" `font-serif` with a small **hanko seal** stamp accent (vermillion
  rounded-square SVG with a kanji).
- Responsive **card grid**: 1 col mobile, 2 col `md+`. Map `projects[]`.
- **Card:** thin `border-border`, `bg-card`, `rounded`, padding `p-6`; serif `name`; a line
  `role · client · period` in muted; `description[]` bullets; a wrapped row of **tech pills**.
- Hover: gentle lift (`-translate-y-1`) + border turns `ai`/`shu`, soft shadow. Stagger card
  reveals on scroll.

### 6.6 Contact (`components/sections/contact.tsx`)
- Dark **`bg-ai`** footer with a faint `.seigaiha` overlay and a glowing **lantern** motif.
- Centered large serif CTA: **"Let's create something together."**
- `mailto:` email link + outlined pill buttons: **LinkedIn** (profile url), **Email**, **Phone**.
- Small bottom row: `© {year} Nithin Annam` + a tiny enso. Text in washi/cream for contrast on
  the dark bg (remember: override text color when overriding bg).

---

## 7. Animation Patterns (reusable)

- **`Reveal` wrapper** (`motifs/reveal.tsx`): Framer Motion wrapper; fades + slides children up
  (`opacity 0→1`, `y 24→0`) when entering viewport; accepts a `delay` prop for stagger.
- **`ParticleField`** (`motifs/particle-field.tsx`): props `count`, `type` ('leaf' | 'petal'),
  `colors[]`. Generates absolutely-positioned SVG particles with randomized
  `left`, `animationDelay`, `animationDuration`, and `--drift` (CSS var, e.g. `-40px..40px`).
  Pointer-events none; contained by a `relative overflow-hidden` parent.
- **Parallax:** use Framer Motion `useScroll` + `useTransform` to translate scene background
  layers slightly slower than foreground for depth.
- **Looping scene motion:** Tailwind `animate-*` infinite keyframes (sway, float, glow, blink).
- **Performance:** animate only `transform`/`opacity`; keep particle counts modest (<= ~16 per
  scene); gate everything behind reduced-motion.

---

## 8. Accessibility & Quality Bar

- Semantic landmarks: `header` (nav), `main`, `section` with `aria-labelledby`, `footer`.
- All decorative SVG scenes: `aria-hidden="true"`; provide an `sr-only` text description of the
  life stage instead.
- Color contrast AA: sumi-on-washi for body; cream/washi text on `bg-ai` dark sections.
- Escape JSX special chars (`&apos;`, wrap `<`/`{` in strings).
- Real `alt`/labels on interactive links; focus-visible rings using `shu`/`ai`.
- Respect `prefers-reduced-motion` (already global).
- Update `layout.tsx` metadata: title "Nithin Annam — Full Stack Developer", description, and
  viewport theme-color (`#20435c`). Add `bg-background` to `<html>`.

---

## 9. Build Order (recommended)

1. Scaffold Next.js + Tailwind; write `globals.css` tokens + utilities; `layout.tsx` fonts/metadata.
2. `lib/data.ts` (content above) + `tailwind.config.ts` (tokens, keyframes).
3. `motifs/` primitives: `reveal`, `particle-field`, `enso`, `seigaiha`, `torii`.
4. `nav` + `hero` (verify scroll + entrance).
5. `about`.
6. The 4 `scenes/*` then `education` section wiring them in with the timeline.
7. `projects`, then `contact`.
8. Assemble in `app/page.tsx`. Verify in browser: scroll journey, each scene animates on view,
   responsive at 375px / 768px / 1280px, reduced-motion fallback.

---

## 10. Definition of Done

- All 6 sections present, in order, fully responsive, themed strictly to the palette/fonts above.
- Each of the 4 education scenes is a bespoke animated SVG that **clearly depicts** its described
  moment (reading under tree + falling leaves / friends + kite / glowing screen at night / torii
  cap toss).
- Every section has at least one meaningful animation (entrance + ambient loop).
- No raster illustration assets, no jQuery/Bootstrap, no purple, no placeholder lorem text.
- Accessible, reduced-motion-safe, and visually polished — "interesting, never ugly."
