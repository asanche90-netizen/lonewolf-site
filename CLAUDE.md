# CLAUDE.md — LONE WOLF Design Firm Website

## Project Overview

This is a class assignment for DES 235 (Vibe Coding). It is a satirical design firm website for **LONE WOLF**, an alpha-male parody design agency. The site will be deployed to Vercel for instructor review.

Built by Agustin Sanchez and Charley as co-founders. Both are titled "FOUNDER & LONE WOLF" (the contradiction is the joke and is never acknowledged anywhere on the site).

---

## ⚠️ Read this before generating anything

**This site is satire.** It is a maximalist absurdist parody of "alpha male" entrepreneur and hustle culture applied to the design industry. The execution rule is sincere commitment to the bit. Deadpan delivery. Never wink at the camera. The firm believes itself completely.

When making any decision about copy, design, or feature behavior:

- Lean MORE absurd, never less
- Never break character with a self-aware aside
- Aggression and certainty are the registers, not humor
- Replace normal design vocabulary with combat, hunting, predator, or domination language
- Two founders, both titled "FOUNDER & LONE WOLF," never noted as a contradiction

If a copy choice could go softer or harder, go harder.

---

## Brand Strategy

### Concept

A design firm for men who are too busy grinding to read design websites. We do not iterate. We strike.

### Voice & Tone

- ALL CAPS for headlines, system labels, CTAs, and key statements
- Sentence case for body copy
- Short, declarative sentences. No qualifiers. No "we believe." No "we feel."
- Deadpan certainty
- Combat, hunting, and predator metaphors throughout
- Numbered manifesto energy ("01 /", "02 /")

### Things this brand never says

- "We're passionate about..."
- "Our team..."
- "We collaborate..."
- "Curious," "playful," "human-centered," "thoughtful"
- Anything emotionally vulnerable
- Anything that sounds like a real modern design agency

---

## Site Structure & Locked Copy

Every piece of copy below is final. Build directly against it.

### NAVIGATION

- Logo wordmark: **LONE WOLF** (collapses to **LW** monogram on mobile)
- Links: WORK · CODE · CONTACT
- CTA Button: **STRIKE** (links to inquiry form)

### HERO

- Headline: **WE DON'T BRAINSTORM. WE HUNT.**
- Subhead: OTHER AGENCIES MEET. WE STRIKE.
- Body: We are LONE WOLF. We design at 4AM. We do not have a Slack. We do not take calls before noon. We do not take calls.
- CTA Button: **BEGIN THE HUNT**

### ABOUT

- Section title: **THE PACK OF TWO**
- Body: We are LONE WOLF. Two founders. Zero employees. Zero retainers. Zero feelings. Zero compromise. We do not collaborate. We do not iterate. We do not respond to feedback after midnight. (We do not respond to feedback before midnight either.)

**Team grid (2x2):**

| Photo | Name | Title |
|-------|------|-------|
| charley-02.jpg (arms crossed) | CHARLEY | FOUNDER & LONE WOLF |
| agustin-01.jpg (hands behind head) | AGUSTIN SANCHEZ | FOUNDER & LONE WOLF |
| agustin-02.jpg (pensive) | AGUSTIN SANCHEZ | FOUNDER & LONE WOLF |
| charley-01.jpg (backwards on chair) | CHARLEY | FOUNDER & LONE WOLF |

**Below the grid:**
> NOW ACCEPTING APPLICATIONS TO THE PACK. MOST CANDIDATES DO NOT QUALIFY.

(No application link. Dead end on purpose.)

**Optional environment moment** (place between team grid and the next section, or as a full-bleed strip):
- Paired wide shots: agustin-03.jpg (city silhouette) + charley-03.jpg (city silhouette)
- Caption: SURVEYING THE TERRITORY

### THE CODE (manifesto strip between About and Services)

Section title: **THE CODE**

```
01 / WE DO NOT BRAINSTORM.
02 / FIRST DRAFT IS FINAL DRAFT.
03 / KERNING IS A DISCIPLINE.
04 / SLEEP IS A SKILL ISSUE.
05 / WE ARE NOT LIKE OTHER AGENCIES.
```

Treat this as oversized type, left-aligned, one line per row, accent color on the numerals only.

### SERVICES

Section title: **THE ARSENAL**

**01. BRAND DOMINATION**
We do not craft your brand. We forge a weapon. Logo systems. Wordmarks. Visual identity built to break down doors.

**02. DIGITAL CONQUEST**
Websites that close. Pages that perform. UX with a mortgage to pay. We design the hunt.

**03. VISUAL WARFARE**
Campaigns built for impact, retention, and intimidation. Print, digital, environmental. We do not do "delight."

**04. MOTION COMBAT**
Animation as discipline. 60 frames per second of pure intent. After Effects is our cathedral.

### WORK / PORTFOLIO

Section title: **KILLS**

Each tile is a styled placeholder (no real imagery required). Aggressive type-driven compositions in black and white, accent color used sparingly. Number each tile (KILL N°01, etc.).

**KILL N°01 — APEX TESTOSTERONE**
Sub: SUPPLEMENT BRAND // 2024
Description: Identity system for men who refuse to test below 850 ng/dL.

**KILL N°02 — THE 4AM CLUB**
Sub: COMMUNITY PLATFORM // 2024
Description: Brand and digital design for an invite-only newsletter for early risers and late operators.

**KILL N°03 — VALOR DENTAL**
Sub: HEALTHCARE // 2024
Description: Identity refresh for a family dentistry practice. We brought predator energy to preventative care.

**KILL N°04 — MONOLITH PRESCHOOL**
Sub: EDUCATION // 2025
Description: K-1 brand system rooted in discipline, structure, and the early cultivation of grit.

### INQUIRY FORM

Section title: **BEGIN THE HUNT**
Subhead: NOT EVERY PROSPECT BECOMES PREY. SUBMIT YOUR APPLICATION.

| Field | Label | Type | Required | Placeholder |
|-------|-------|------|----------|-------------|
| Full name | NAME | text | yes | WHAT THEY CALL YOU |
| Company | ORGANIZATION | text | no | THE EMPIRE YOU REPRESENT |
| Email | EMAIL | email | yes | WHERE WE STRIKE |
| Phone | PHONE | tel | no | FOR EMERGENCY EXTRACTION |
| Project type | ENGAGEMENT TYPE | select | yes | (see options) |
| Budget | WAR CHEST | select | no | (see options) |
| Timeline | STRIKE WINDOW | select | no | (see options) |
| Description | BRIEFING | textarea | yes | STATE YOUR INTENT. WE READ EVERYTHING TWICE. |

**ENGAGEMENT TYPE options:**
- BRAND DOMINATION
- DIGITAL CONQUEST
- VISUAL WARFARE
- MOTION COMBAT
- OTHER (LIKELY REJECTED)

**WAR CHEST options:**
- UNDER $10K (BEGIN AGAIN)
- $10K – $25K
- $25K – $50K
- $50K – $100K
- $100K+ (RESPECT)

**STRIKE WINDOW options:**
- IMMEDIATE
- WITHIN 30 DAYS
- WITHIN 90 DAYS
- WHEN THE TIME IS RIGHT

**Submit button:** COMMENCE THE HUNT
**Success state message:** MESSAGE RECEIVED. THE PACK WILL DECIDE. WE DO NOT REPLY TO ALL APPLICATIONS.
**Error state message:** REJECTED. RECALIBRATE AND TRY AGAIN.

### FOOTER

- Brand mark: LONE WOLF
- Tagline: WE DO NOT NETWORK. WE OPERATE.
- Links: WORK · CODE · CONTACT
- Contact: HUNT@LONEWOLF.STUDIO
- Copyright: © 2026 LONE WOLF. ALL TERRITORY DEFENDED.
- Bottom small line: WE WILL NOT RESPOND TO YOUR LINKEDIN MESSAGE.

---

## Visual Direction

### Color System

```css
--bg: #0A0A0A;           /* near-black background, never pure #000 */
--fg: #F4F1EC;           /* warm off-white, slight cream */
--accent: #E63946;       /* blood red, primary accent */
--border: #1F1F1F;       /* subtle dark dividers */
--muted: #6B6B6B;        /* secondary text */
```

Use red sparingly. CTAs, hover states, numerals in the manifesto, the active nav link, the form submit. The whole site is mostly off-white-on-near-black.

### Typography

- **Display:** Anton (Google Fonts, free) for all headlines and display type. ALL CAPS. Tracking -0.02em. Heavy/black weight.
- **Body:** Inter for body copy and form inputs. Sentence case for prose, ALL CAPS for labels and CTAs.
- **System / numerals / small detail:** JetBrains Mono for numerals in the manifesto, "KILL N°", form helper text, footer small print.

### Type Scale (desktop)

```
Hero headline:        clamp(4rem, 12vw, 11rem)   tracking -0.02em
Section titles:       5rem                        tracking -0.02em
Service / Kill title: 2.25rem                     tracking -0.01em
Body copy:            1.0625rem (17px)            line-height 1.5
Labels & nav:         0.8125rem (13px) uppercase  tracking +0.05em
```

Mobile: hero scales down via clamp. Section titles drop to ~3rem. Body stays 17px.

### Layout & Spacing

- Generous vertical rhythm. Sections breathe. Use `padding-block: 8rem` or larger between major sections.
- Asymmetric grids. Things should feel slightly unbalanced. Avoid centering everything.
- Use type as a graphic element. Oversized numerals. Words bleeding off the edge of the viewport are encouraged.
- Hard left or hard right alignment beats centered.
- Slice sections with 1px horizontal rules in `--border` or `--accent`.

### Imagery Treatment

- All photos rendered as hard rectangles. No rounded corners. No drop shadows.
- Apply `filter: grayscale(100%) contrast(1.15) brightness(0.95);` as a baseline so any photo gets pushed further into the brand register.
- Pair every photo with an ALL CAPS name label below in JetBrains Mono.
- Optional: one feature image with a duotone red treatment (use CSS `mix-blend-mode: multiply` over a red overlay) for visual punch.

### Motion / Interaction

- Link hover: underline appears, color shifts to `--accent`
- Button hover: hard color flip (red bg, black text), no transition curve trickery, just `transition: 120ms linear`
- Scroll entrance: fade up 20px, 600ms, ease-out. Subtle, not flashy.
- No bounce easing. No spring physics. No "fun" interactions.

---

## Hard Don'ts (visual)

- No gradients (one subtle dark vignette behind hero is the only exception)
- No rounded corners except on form inputs (max 2px)
- No drop shadows
- No bento layouts
- No emojis anywhere
- No tasteful pastel palettes
- No script or handwritten fonts
- No images of people smiling (the existing slight smile in agustin-01 is the only allowed exception, since it reads as smug)
- No "Made with ♥" anything
- No light mode toggle

---

## Imagery Asset List

Place in `/public/images/team/`:

```
agustin-01.jpg   (hands behind head, leather chair)
agustin-02.jpg   (pensive at window, hand on chin)
agustin-03.jpg   (city skyline silhouette)
charley-01.jpg   (backwards on wooden chair, gesturing)
charley-02.jpg   (arms crossed studio portrait)
charley-03.jpg   (city skyline silhouette)
```

**Recommended deployment:**
- Team grid (2x2 in About): `charley-02`, `agustin-01`, `agustin-02`, `charley-01`
- Paired environment moment ("SURVEYING THE TERRITORY"): `agustin-03` and `charley-03` side by side

---

## Tech Stack

- **Framework:** Next.js 14+ (App Router) for clean Vercel deployment
- **Styling:** Tailwind CSS, with the color and type tokens above wired into `tailwind.config.js`
- **Fonts:** Anton, Inter, JetBrains Mono via `next/font/google`
- **Form handling:** React Hook Form for validation. For the demo, submission can use Formspree or just a mock handler that returns the success state. Validation must work on required fields.
- **Hosting:** Vercel
- **Responsive breakpoints:** mobile (375px target), tablet (768px), desktop (1280px+). Site must look intentional at 375px.

---

## Build Priorities

1. Get structure rendering with all locked copy in place
2. Install fonts and lock the type system early. Type is 80% of the visual identity here.
3. Wire up the color tokens
4. Build mobile-first. 375px is non-negotiable per the brief.
5. Form must validate required fields and show a success state on submit
6. Polish hover states and scroll-in animations last

---

## Easter Eggs (only if time permits)

- 404 page: `TARGET LOST. RECALIBRATE.` with a CTA back to home that says `RETURN TO BASE`
- HTML `<head>` comment: `<!-- IF YOU CAN READ THIS YOU ARE PACK -->`
- Form submit failure: `REJECTED. DO NOT TRY AGAIN.`
- A `robots.txt` at the root that just says `User-agent: prey` / `Disallow: /`

---

## Copy quality bar

If a piece of copy reads like it could be on a real design agency site, rewrite it. If it reads like it could be a tweet from a finance bro at 4:47am, ship it.
