# PROJECT 15 — HUMAN CONNECTION
## *COMMON HOURS: A Journal of Everyday Human Connection (Issue No. 15)*
**Tagline:** *Even in a World That Keeps Moving, We're Still Looking for Each Other*

---

## 1. AI Skill Orchestration Plan

| Exact Installed Skill Name | Intended Responsibility | Phase Used | Expected Contribution |
| :--- | :--- | :--- | :--- |
| `frontend-ui-engineering` (`~/.agents/skills/frontend-ui-engineering/SKILL.md`) | Component architecture, semantic HTML, responsive layout tokens, state management, and anti-AI-slop layout discipline. | Phase 2 & 4: Architecture & Implementation | Clean React + TypeScript component hierarchy, purposeful asymmetric grids instead of stock card grids, and complete loading/empty/error states. |
| `emil-design-eng` (`~/.agents/skills/emil-design-eng/SKILL.md`) | Motion decisions, custom easing curves (`cubic-bezier(0.23, 1, 0.32, 1)`), button press feedback (`scale(0.97)`), `clip-path` image reveals, and hardware-accelerated transitions. | Phase 4 & 5: Motion & Interactive Polish | Warm, tactile transitions under 250ms for UI controls, gentle documentary image reveals, and strict `prefers-reduced-motion` compliance. |
| `accessibility` (`~/.agents/skills/accessibility/SKILL.md`) | WCAG 2.2 AA compliance: skip links, landmark structure, heading hierarchy, color contrast ≥ 4.5:1, programmatic form labels, and `role="alert"` error handling. | Phase 4 & 6: Implementation & Accessibility Audit | Full keyboard operability across filters, modals/drawers, story navigation, and accessible form validation on the Share a Story page. |
| `browser-testing-with-devtools` (`~/.agents/skills/browser-testing-with-devtools/SKILL.md`) | Real-browser verification across 375px, 390px, 768px, 1024px, and 1440px viewports; console, DOM, and interactive flow verification. | Phase 6: Quality Assurance | Zero console errors, verified responsive compositions at all 5 target widths, and verified functional interactions. |

---

## 2. Concept, Audience & Editorial Point of View

- **Publication Name:** *COMMON HOURS* (Issue No. 15 — *The Proximity Issue*)
- **Concept:** An independent documentary and literary-editorial publication chronicling the small, unscripted acts of connection between people—shared umbrellas at bus stops, soup passed across apartment landings, volunteer repair tables in neighborhood basements, and late-night conversations on delayed trains.
- **Target Audience:** Readers of narrative journalism, documentary photography, and urban humanities (*Apartamento*, *Works That Work*, *The Gentlewoman*, *Magnum Dispatches*) who value specific, unsentimental human observation over corporate or motivational clichés.
- **Brand Personality:** Observant, warm, tactile, literary, unhurried, documentary-minded. Optimistic without being saccharine, childish, or preachy.
- **Emotional Objective:** To make the reader feel less alone among strangers by noticing the quiet infrastructure of care operating in ordinary places every hour of the day.

---

## 3. Visual References & Design Principles

1. **Print-Grounded Digital Editorial:** Inspired by independent humanities journals where photography carries real weight, captions read like field notes (recording time of day, neighborhood, and overheard fragments), and color blocks mark thematic shifts.
2. **Portrait Mosaics & Unequal Grids:** Rejects uniform 3-column rounded cards in favor of asymmetrical 12-column editorial layouts—pairing 4:5 vertical portraits against 16:10 street frames and 1:1 medium-format studies.
3. **Saturated Civic Color Against Warm Paper:** Coral, Cobalt Blue, and Warm Yellow act as structural architectural fields and index stamps set against Warm Cream paper and deep Charcoal ink.

---

## 4. Color Palette (with HEX Values & Contrast Roles)

| Color Name | HEX | Role & Usage | Contrast Notes |
| :--- | :--- | :--- | :--- |
| **Warm Cream (Paper)** | `#F7F3EB` | Primary page ground and editorial canvas | Base surface (14.2:1 with Charcoal) |
| **Warm Sand (Tonal Step)** | `#EDE6D8` | Secondary section ground, index rows, field-note cards | Subtle tonal separation without drop shadows |
| **Deep Charcoal (Ink)** | `#181715` | Primary display and body typography, structural rules | Primary readable ink |
| **Editorial Slate** | `#4A4640` | Secondary metadata, timestamps, captions on cream | > 7.2:1 on `#F7F3EB` |
| **Signal Coral** | `#E04F3E` | Primary accent, warmth/kinship highlights, feature spreads | Used with `#181715` or `#F7F3EB` large display; `#B83222` for small text on cream |
| **Cobalt Blue** | `#1B45B8` | Civic & strangers accent, full-bleed essay callout blocks, badges | 7.6:1 contrast with `#F7F3EB` cream text |
| **Warm Yellow (Ochre)** | `#F2B735` | Community & daylight highlight blocks, issue stamps, pull-quote fields | 10.1:1 contrast with `#181715` charcoal text |
| **Stone Rule** | `#D5CCB9` | 1px editorial index dividers and table borders | Structural delineation |

---

## 5. Typography Pairings

- **Display & Expressive Statements (`--font-display`):** `'Bricolage Grotesque'` (Google Fonts, weights 500–800)
  - Used for the central statement, story headlines, big editorial pull numbers, and navigation wordmark.
  - Tracking: `-0.03em` on display sizes, line-height `0.96–1.06`.
- **Long-Form Narrative & Voice (`--font-serif`):** `'Newsreader'` (Google Fonts, optical size 6–72, regular & italic)
  - Used for long-form story body copy, overheard pull quotes, and literary introductions.
  - Measure constrained to `62ch–70ch` with `1.65` line-height for effortless reading.
- **Documentary UI & Field Metadata (`--font-sans`):** `'Plus Jakarta Sans'` (Google Fonts, weights 400–700)
  - Used for category filters, timestamps, location coordinates, community directory details, and form controls.

---

## 6. Grid, Spacing & Navigation System

- **Grid:** 12-column CSS Grid (`max-width: 1440px`, outer margin `clamp(1.25rem, 4vw, 3.5rem)`, column gap `clamp(1rem, 2vw, 2rem)`).
- **Spacing Scale:** `4px` base unit (`0.25rem` increments), with section vertical rhythm set to `clamp(4.5rem, 8vw, 7.5rem)`.
- **Navigation Concept:**
  - Top editorial masthead featuring Issue No. 15 metadata, *COMMON HOURS* logotype, and five primary routes: `Home`, `Stories`, `Featured Essay` (Story Detail), `Community`, and `Share a Story`, plus a live "Saved Moments" pocket indicator.
  - On mobile (`< 768px`), collapses cleanly into an accessible drawer with keyboard focus management and route descriptions.

---

## 7. Motion Principles

- **Custom Easing:** `--ease-out-expo: cubic-bezier(0.23, 1, 0.32, 1)` and `--ease-in-out-editorial: cubic-bezier(0.77, 0, 0.175, 1)`.
- **Micro-Feedback:** All pressable buttons respond with `transform: scale(0.97)` over `150ms ease-out`.
- **Image Treatment:** Documentary photographs reveal with subtle curtain/opacity transitions and gentle scale settle (`1.02` -> `1.0`) gated behind `@media (hover: hover) and (pointer: fine)`.
- **Reduced Motion:** `@media (prefers-reduced-motion: reduce)` disables all spatial transforms and scroll movement while preserving instant opacity/color feedback.

---

## 8. Original Image Generation Specification (14 Documentary Photographs)

All 14 images are generated specifically for Project 15 with coherent 35mm/50mm documentary photography direction (natural grain, available light, candid non-advertising expressions, zero fake text or UI):

1. **`hero-rain-umbrella.png`** (Home Mosaic Lead — *Strangers*)
   - **Subject:** Two commuters of different generations sharing a large dark umbrella at a rain-slicked crosswalk while waiting for the light.
   - **Environment:** Wet city street at dusk with warm amber shopfront reflections on asphalt.
   - **Composition:** Off-center two-shot framed from mid-torso up, rain streaks visible against warm backlight.
   - **Camera Angle:** Eye-level street documentary perspective.
   - **Lens Character:** 35mm f/2.0 prime lens, shallow-to-moderate depth of field.
   - **Lighting:** Warm tungsten bakery window light mixing with cool blue twilight rain.
   - **Color Grading:** Kodak Portra 800 warmth—cobalt shadows, amber and coral highlights.
   - **Texture:** Fine 35mm film grain, wet fabric texture, condensation droplets.
   - **Aspect Ratio:** 4:5 vertical portrait.
   - **Intended Placement:** Home page Hero Portrait Mosaic (Primary Lead Frame) & Story 1 ("The Crosswalk on 4th & Mercer").

2. **`hero-rooftop-dinner.png`** (Home Mosaic Frame 2 & Story 2 — *Friendship*)
   - **Subject:** Four friends in their late twenties and thirties crowded around a mismatched wooden table on an apartment terrace, passing a large ceramic bowl of noodles.
   - **Environment:** Urban apartment balcony/rooftop at dusk with string lights and potted herbs.
   - **Composition:** Candid diagonal table composition focusing on overlapping hands, bowls, and unguarded laughter mid-conversation.
   - **Camera Angle:** Slightly elevated over-the-shoulder angle at table height.
   - **Lens Character:** 35mm f/2.8 documentary lens.
   - **Lighting:** Golden-hour dusk fading into warm household bulb light.
   - **Color Grading:** Warm ochre yellow, terracotta coral, deep twilight blue sky.
   - **Texture:** Linen napkins, ceramic glaze, natural skin texture, film grain.
   - **Aspect Ratio:** 16:10 horizontal documentary frame.
   - **Intended Placement:** Home Hero Mosaic & Story 2 ("Seven Chairs for Five People").

3. **`hero-grandfather-hands.png`** (Home Mosaic Frame 3 & Story 3 — *Family*)
   - **Subject:** An elderly grandfather and his teenage granddaughter sitting at a sunlit kitchen table peeling tangerines together, hands close to a porcelain bowl.
   - **Environment:** Lived-in apartment kitchen with patterned oilcloth and morning tea steam.
   - **Composition:** Intimate close medium portrait emphasizing weathered hands and attentive posture.
   - **Camera Angle:** Eye-level across the kitchen table.
   - **Lens Character:** 50mm f/1.8 prime lens.
   - **Lighting:** Low angled morning window sunlight casting long soft shadows.
   - **Color Grading:** Warm cream, tangerine coral, soft charcoal shadows.
   - **Texture:** Citrus peel pores, wrinkled skin, sunlit dust motes, wood grain.
   - **Aspect Ratio:** 4:5 vertical portrait.
   - **Intended Placement:** Home Hero Mosaic & Story 3 ("What We Keep in the Tin").

4. **`featured-night-bus-piano.png`** (Featured Story Hero & Story Detail Lead — *Strangers / Community*)
   - **Subject:** A small group of commuters and a station attendant gathered around an upright wooden community piano inside a quiet late-evening train concourse as an older man plays in his work coat.
   - **Environment:**Tiled mid-century transit hall with warm brass lamps and high arched windows.
   - **Composition:** Wide editorial environmental portrait with the pianist in the left third and three listeners leaning against luggage on the right.
   - **Camera Angle:** Eye-level documentary wide shot.
   - **Lens Character:** 35mm f/2.0 prime lens.
   - **Lighting:** Warm pools of overhead globe lighting against deep cobalt evening windows.
   - **Color Grading:** Rich cobalt blue, warm brass yellow, deep charcoal, coral coat accent.
   - **Texture:** Scuffed terrazzo floor, worn wood piano case, wool coats, subtle film grain.
   - **Aspect Ratio:** 16:9 wide editorial spread.
   - **Intended Placement:** Home Featured Human Story spread & Story Detail lead photograph ("The 11:14 Upright at Union Concourse").

5. **`story-laundromat-folds.png`** (Stories Page & Story 4 — *Kindness*)
   - **Subject:** An older woman showing a young man in a university sweatshirt how to fold a fitted bedsheet between rows of warm stainless-steel washing machines.
   - **Environment:** Neighborhood coin laundromat on a rainy afternoon.
   - **Composition:** Symmetrical aisle framing broken by the white cotton sheet stretched between them.
   - **Camera Angle:** Straight-on waist-level documentary angle (Rolleiflex style).
   - **Lens Character:** 50mm medium-format character.
   - **Lighting:** Diffused fluorescent mixed with warm daylight from the front glass.
   - **Color Grading:** Cream whites, cobalt blue laundry baskets, coral detergent box accent.
   - **Texture:** Crisp cotton folds, brushed steel drums, steamed window glass.
   - **Aspect Ratio:** 1:1 square format.
   - **Intended Placement:** Stories Archive & Story 4 ("Geometry of the Fitted Sheet").

6. **`story-bicycle-repair.png`** (Stories Page & Story 5 — *Community*)
   - **Subject:** Two neighbors—a retired mechanic in cobalt coveralls and a young courier—crouched on a sidewalk fixing a slipped bicycle chain together.
   - **Environment:** Brick rowhouse stoop and tree-lined city sidewalk in late afternoon.
   - **Composition:** Low-angle two-shot capturing focused expressions and grease-stained hands working on the wheel.
   - **Camera Angle:** Low crouching angle at wheel level.
   - **Lens Character:** 35mm f/2.4 documentary lens.
   - **Lighting:** Warm sidelight filtering through autumn street trees.
   - **Color Grading:** Cobalt blue coveralls, warm brick coral, golden sunlight.
   - **Texture:** Brick mortar, rubber tire tread, worn steel tools, natural film grain.
   - **Aspect Ratio:** 4:5 vertical portrait.
   - **Intended Placement:** Stories Archive & Story 5 ("The Stoop Wrench on 9th Street").

7. **`story-bakery-window.png`** (Stories Page & Story 6 — *Kindness*)
   - **Subject:** A baker in a flour-dusted apron handing a warm paper bag of rolls through a Dutch half-door to an early-morning street sweeper in a high-visibility yellow vest.
   - **Environment:** Neighborhood corner bakery facade at 5:45 AM before sunrise.
   - **Composition:** Frame-within-a-frame doorway composition contrasting the warm interior with the quiet blue street.
   - **Camera Angle:** Street-level three-quarter angle.
   - **Lens Character:** 50mm f/1.8 lens.
   - **Lighting:** Warm interior oven glow spilling onto the cobalt dawn pavement.
   - **Color Grading:** Cobalt dawn blue, warm ochre yellow, toasted crust brown, cream paper.
   - **Texture:** Flour dust on linen, kraft paper crinkles, wet cobblestone.
   - **Aspect Ratio:** 4:5 vertical portrait.
   - **Intended Placement:** Stories Archive & Story 6 ("First Batch Before the Route").

8. **`story-brothers-moving.png`** (Stories Page & Story 7 — *Family*)
   - **Subject:** Two adult brothers resting on the tailgate of a parked moving van, drinking coffee from paper cups surrounded by taped cardboard boxes and a houseplant.
   - **Environment:** Quiet residential street at midday.
   - **Composition:** Relaxed horizontal portrait framed by the open back of the truck.
   - **Camera Angle:** Eye-level from the curb.
   - **Lens Character:** 35mm f/2.8 lens.
   - **Lighting:** Soft overcast daylight with warm interior shadow inside the van.
   - **Color Grading:** Warm cardboard ochre, faded red flannel, slate asphalt, cream sky.
   - **Texture:** Corrugated cardboard, scuffed boots, potted fern leaves.
   - **Aspect Ratio:** 16:10 horizontal frame.
   - **Intended Placement:** Stories Archive & Story 7 ("Three Flights Up, No Elevator").

9. **`story-park-chess.png`** (Stories Page & Story 8 — *Friendship*)
   - **Subject:** Two longtime friends in wool caps leaning intensely over a weathered stone chess table in a neighborhood park while a third friend watches with a thermos.
   - **Environment:** Public park under plane trees in crisp autumn light.
   - **Composition:** Tight triangular composition around the chessboard, expressive hand mid-move.
   - **Camera Angle:** Slightly high angle looking down at the table and faces.
   - **Lens Character:** 50mm prime lens.
   - **Lighting:** Dappled golden afternoon sunlight.
   - **Color Grading:** Warm yellow leaves, charcoal coats, coral scarf, cream stone.
   - **Texture:** Knitted wool, carved wooden chess pieces, weathered concrete.
   - **Aspect Ratio:** 1:1 square format.
   - **Intended Placement:** Stories Archive & Story 8 ("Forty Years of the Queen's Gambit").

10. **`story-grocery-orange.png`** (Stories Page & Story 9 — *Strangers*)
    - **Subject:** Three strangers kneeling simultaneously on a wet sidewalk to help an older shopper gather spilled blood oranges into a canvas tote bag.
    - **Environment:** Outside a corner greengrocer with wooden crates.
    - **Composition:** Dynamic ground-level composition following the scattered bright coral-red oranges and reaching hands.
    - **Camera Angle:** Low angle near sidewalk level.
    - **Lens Character:** 35mm prime lens.
    - **Lighting:** Bright diffused afternoon light.
    - **Color Grading:** Vivid coral oranges against charcoal pavement and cobalt denim.
    - **Texture:** Woven canvas bag, wet asphalt, textured citrus skin.
    - **Aspect Ratio:** 16:10 horizontal frame.
    - **Intended Placement:** Stories Archive & Story 9 ("Sixteen Oranges on Broadway").

11. **`story-porch-haircut.png`** (Stories Page & Story 10 — *Community / Family*)
    - **Subject:** A middle-aged woman trimming her elderly neighbor's hair on a sunlit wooden front porch with a striped cape draped over his shoulders.
    - **Environment:** Wooden front porch with potted geraniums and screen door.
    - **Composition:** Warm vertical portrait showing quiet trust and conversation.
    - **Camera Angle:** Eye-level from the porch steps.
    - **Lens Character:** 50mm f/2.0 lens.
    - **Lighting:** Warm late-afternoon golden light hitting the porch railing.
    - **Color Grading:** Coral geraniums, cream clapboard siding, cobalt striped cloth, warm skin tones.
    - **Texture:** Painted wood grain, cotton barber cape, silver hair.
    - **Aspect Ratio:** 4:5 vertical portrait.
    - **Intended Placement:** Stories Archive & Story 10 ("Sunday Trim on Cedar Ave").

12. **`story-bookshop-notes.png`** (Stories Page, Story Detail Secondary & Story 11 — *Kindness*)
    - **Subject:** A young woman standing between tall wooden bookshelves reading a handwritten postcard tucked inside a used paperback, smiling quietly to herself.
    - **Environment:** Cramped second-hand bookshop with warm desk lamps.
    - **Composition:** Vertical environmental portrait framed by stacks of colorful book spines.
    - **Camera Angle:** Eye-level through a gap in the shelves.
    - **Lens Character:** 50mm f/1.8 lens with soft foreground blur.
    - **Lighting:** Warm tungsten reading lamp glow.
    - **Color Grading:** Warm cream paper, cobalt and coral book spines, deep charcoal shadows.
    - **Texture:** Deckle-edged paper, aged book cloth, warm film grain.
    - **Aspect Ratio:** 4:5 vertical portrait.
    - **Intended Placement:** Stories Archive, Share a Story inspiration card & Story 11 ("Marginalia on Page 104").

13. **`community-garden-harvest.png`** (Community Directory Lead & Story 12 — *Community*)
    - **Subject:** Diverse neighbors of different ages sorting freshly harvested tomatoes, herbs, and greens into wooden crates at a long trestle table in an urban community garden.
    - **Environment:** Sunlit city lot garden bordered by brick buildings and trellises.
    - **Composition:** Wide horizontal tableau with lively hand gestures, dirt-stained gardening gloves, and shared work.
    - **Camera Angle:** Eye-level wide documentary frame.
    - **Lens Character:** 35mm f/2.8 lens.
    - **Lighting:** Bright morning sunlight with crisp shadows.
    - **Color Grading:** Coral red tomatoes, lush foliage, warm yellow crates, cobalt work shirt.
    - **Texture:** Soil, rough wood crates, heirloom produce, brick facade.
    - **Aspect Ratio:** 16:9 wide frame.
    - **Intended Placement:** Community Page Hero Mosaic & Story 12 ("The Lot Between Two Factories").

14. **`community-soup-window.png`** (Community Directory Feature Card — *Community / Kindness*)
    - **Subject:** Volunteers ladling steaming bowls of lentil soup from a large stockpot at a walk-up neighborhood kitchen window while neighbors chat on wooden benches outside.
    - **Environment:** Street-facing community kitchen window on a cool autumn day.
    - **Composition:** Documentary medium-wide shot with rising steam catching the sunlight.
    - **Camera Angle:** Eye-level from the sidewalk bench.
    - **Lens Character:** 35mm prime lens.
    - **Lighting:** Crisp autumn sunlight backlighting the rising soup steam.
    - **Color Grading:** Warm ochre soup, coral bowls, charcoal window frame, cream wall.
    - **Texture:** Rising steam, ceramic bowls, brushed stainless ladle, wool sweaters.
    - **Aspect Ratio:** 16:10 horizontal frame.
    - **Intended Placement:** Community Page Initiative Spotlight ("The Tuesday Soup Window").

---

## 9. Page-by-Page Composition Plan

### Page 1: Home (`/`)
- **Masthead & Issue Stamp:** Issue No. 15 · *The Proximity Issue* · Live count of bookmarked stories/initiatives.
- **Hero Section:** Asymmetric 12-column editorial spread. Left 6 columns hold the monumental statement (*"Even in a World That Keeps Moving, We're Still Looking for Each Other"*) in `Bricolage Grotesque`, paired with a literary introduction in `Newsreader`. Right 6 columns hold an interactive **3-Photo Documentary Mosaic** (`hero-rain-umbrella.png`, `hero-rooftop-dinner.png`, `hero-grandfather-hands.png`) where clicking or hovering a frame reveals the photographer's field log (exact time, street corner, lens, and overheard dialogue).
- **Interactive "24 Hours of Proximity" Timeline:** A warm yellow & cream interactive horizontal time-scrubber letting readers explore real human moments logged at `05:45 AM`, `08:15 AM`, `01:20 PM`, `05:50 PM`, `08:30 PM`, and `11:14 PM`.
- **Featured Human Story Spread:** Full-width architectural Cobalt Blue (`#1B45B8`) and Signal Coral (`#E04F3E`) editorial feature spotlighting *"The 11:14 Upright at Union Concourse"*, with pull quote, audio/field transcript snippet, and direct link to the long-form Story Detail page.
- **Selected Stories Asymmetric River:** 6 curated stories arranged in a staggered editorial mosaic (alternating 7/5 and 5/7 splits with large pull quotes and category badges).
- **Editorial Manifesto & Community Callout:** Introduction to the publication's mission and direct pathways to the Community Directory and Share a Story dispatch desk.

### Page 2: Stories (`/stories`)
- **Editorial Header:** Large statement heading (*"Twelve Dispatches on Human Proximity"*), field-note summary, and category breakdown.
- **Interactive Filter & Search Console:**
  - Category filter pills (`All · 12`, `Friendship`, `Family`, `Kindness`, `Community`, `Strangers`) with active Coral/Charcoal styling.
  - Instant search input filtering across story title, city, overheard quote, and narrative text.
  - Layout switcher: **Editorial Mosaic View** (asymmetric portrait & landscape layout) vs. **Field Archive Table View** (structured index with dispatch number, time of day, city, category, and reading time).
- **12 Original Stories:** Each written with a distinct literary voice, specific time and place, overheard quote, and dedicated documentary photograph.

### Page 3: Story Detail (`/stories/:slug`)
- **Editorial Essay Header:** Category badge, dispatch number, city & timestamp, monumental headline, deck paragraph, author & photographer credits, and reading time.
- **Lead Documentary Plate:** High-resolution documentary photograph with full camera/location caption and expandable field note.
- **Two-Column Asymmetric Reading Layout:**
  - Left sticky rail (3 columns on desktop): Table of moments, photographer's exposure metadata, overheard quote card, and a **"This Moment Stayed With Me"** resonance button (persisted in `localStorage`) plus Bookmark toggle.
  - Main narrative column (7 columns, `65ch` measure): Multi-paragraph literary nonfiction with drop cap, pull quotes set on Warm Yellow (`#F2B735`) or Warm Sand (`#EDE6D8`) fields, and a secondary documentary photograph with caption mid-essay.
- **Story Switcher & Related Dispatches:** Next/Previous story navigation bar plus 3 related stories from the same or adjacent category.

### Page 4: Community (`/community`)
- **Editorial Header:** *"The Neighborhood Infrastructure of Care"* — introducing grassroots, local initiatives and the people behind them.
- **Interactive Directory Controls:**
  - Filter by Category (`All Initiatives`, `Shared Meals`, `Mutual Aid & Repair`, `Third Places`, `Intergenerational`, `Letters & Language`).
  - Filter by Schedule (`Weekdays`, `Weekends`, `Open Daily`) and search by neighborhood/organizer.
- **Initiative Spotlight:** Large horizontal editorial feature on *The Tuesday Soup Window* and *The Lot Between Two Factories* with documentary photography.
- **10 Fictional Community Initiatives & People Making a Difference:** Presented as rich editorial dossiers (Organizer portrait/credit, Neighborhood, Meeting Hours, *"How Strangers Join"*, *"Small Thing Needed Right Now"*, and a **"Save to My Neighborhood Pocket"** interactive action).

### Page 5: Share a Story (`/share`)
- **Archival Dispatch Header:** *"Leave a Record of a Small Moment"* — framed as a physical postcard and field-note desk.
- **Transparent Local Storage Notice:** Prominent, warm-toned editorial notice clearly explaining that *COMMON HOURS* is a static frontend demonstration and submitted stories are saved locally in the reader's browser (`localStorage`) rather than transmitted to an external server.
- **Interactive Submission Form + Live Postcard Preview:**
  - Validated fields: Story Title, Category (`Friendship`, `Family`, `Kindness`, `Community`, `Strangers`), City / Neighborhood, Time of Day, Who Was There, The Moment (long-form narrative with live word/character counter), One Overheard Line or Detail (optional pull quote), and Your Name or Initials.
  - Accessible validation: programmatic `<label htmlFor>`, `aria-invalid`, `aria-describedby` field errors, and a `role="alert"` validation summary that focuses the first invalid input on submit.
  - "Load Sample Dispatch" helper button for quick testing.
- **Reader Dispatches Wall (Local Demo Storage):** Displays all user-submitted stories saved in `localStorage` alongside 2 pre-seeded reader dispatches, allowing the user to read, filter, or delete their local submissions.

