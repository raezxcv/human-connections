# PROJECT 15 — HUMAN CONNECTION
## *COMMON HOURS: A Journal of Everyday Human Connection (Issue No. 15)*
**Even in a World That Keeps Moving, We’re Still Looking for Each Other**

A contemporary documentary and literary editorial platform chronicling the small, unscripted rituals of friendship, family, kindness, community, and strangers helping strangers.

---

### Pages & Architecture

1. **Home (`/`)**
   - Monumental central statement paired with an interactive 3-Photo Documentary Portrait Mosaic & field-note inspector.
   - Editorial Introduction & Manifesto (*"Against the Myth That Everyone Is Looking Down"*).
   - Interactive **24 Hours of Proximity** clock scrubbing through six time coordinates (`05:40 AM` to `11:14 PM`).
   - Full-bleed Cobalt Blue & Signal Coral Featured Human Story spread (*"The 11:14 Upright at Union Concourse"*).
   - Asymmetric Selected Dispatches river and dual bridge to the Community Directory & Share a Story desk.

2. **Stories (`/stories`)**
   - **13 original human connection stories** categorized across `Friendship`, `Family`, `Kindness`, `Community`, and `Strangers`.
   - Category filter bar with live counts, keyword search across city/title/overheard quote, and layout toggle between **Editorial Mosaic View** and **Field Index Table View**.

3. **Story Detail (`/stories/:slug`)**
   - Dedicated long-form narrative layout for all 13 dispatches featuring literary drop-caps, primary and secondary documentary photographs with camera metadata, sticky field-note rail (*Overheard on Site*, *Small Things Noticed*), **"This Moment Stayed With Me"** resonance counter (`localStorage`), **Field Pocket** bookmarking, and next/previous/related story navigation.

4. **Community (`/community`)**
   - Directory of **10 fictionalized neighborhood initiatives and organizers** (*The Tuesday Soup Window*, *The Lot Between Two Factories*, *Southside Porch Repair Collective*, *The 11:00 PM Bahasa, Spanish & English Table*, *Cedar Avenue Porch Barbers*, etc.).
   - Filterable by gathering category (`Shared Meals`, `Mutual Aid & Repair`, `Third Places`, `Intergenerational`, `Letters & Language`), schedule (`Weekdays`, `Weekends`, `Open Daily`), and keyword search, with interactive supply pledge and Field Pocket saving.

5. **Share a Story (`/share`)**
   - Editorial submission form with accessible validation (`aria-invalid`, `aria-describedby`, `role="alert"` summary, focus-first-error), a live Dispatch Proof postcard preview, one-click sample moment loader, and a transparent notice explaining that submissions are stored locally in the browser (`localStorage`) rather than sent to an external backend.

---

### Running Locally

```bash
npm install
npm run dev
```

### Building for Production

```bash
npm run build
npm run preview
```

