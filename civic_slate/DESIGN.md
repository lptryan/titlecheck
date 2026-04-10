```markdown
# Design System Strategy: The Architectural Ledger

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Digital Notary."** 

In the world of real estate title intelligence, clarity is a commodity and authority is the currency. This design system moves away from the generic "SaaS dashboard" aesthetic in favor of a high-end editorial experience. It mimics the tactile confidence of heavy-stock legal bond paper, precision-milled typography, and the organized transparency of a master ledger.

We break the "template" look by using intentional white space, extreme typographic contrast, and a "No-Line" philosophy. The layout shouldn't feel like an app; it should feel like an official record—structured, immutable, and premium.

---

## 2. Colors & Surface Intelligence
Our palette is rooted in the depth of `primary` (#022448) and the clarity of `surface` (#f9f9ff). We use color not just for decoration, but as functional intelligence.

### The "No-Line" Rule
To achieve a high-end feel, **1px solid borders are strictly prohibited for sectioning.** Boundaries must be defined through background color shifts or subtle tonal transitions.
- **Sectioning:** Use `surface_container_low` (#f0f3ff) or `surface_container` (#e7eefe) to distinguish content blocks against the main `surface`.
- **Contrast:** High-priority data sits on `surface_container_lowest` (#ffffff) to "pop" via brightness rather than a border.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. 
- **Base Layer:** `surface` (#f9f9ff) or `background` (#f9f9ff).
- **Secondary Content Layer:** `surface_container_low`.
- **Interactive/Primary Content Layer:** `surface_container_highest` (#dce2f3).
- **Glassmorphism:** For floating elements like utility bars or filtering "dock" components, use `surface_container_lowest` at 80% opacity with a `24px` backdrop blur. This ensures the "official record" stays visible beneath the navigation.

### Signature Textures
Main CTAs and Hero backgrounds should utilize a subtle linear gradient: 
`linear-gradient(180deg, #1e3a5f 0%, #022448 100%)`.
This provides a "visual soul"—a slight depth that feels like a polished granite or high-end fountain pen ink, distinguishing it from flat, cheaper digital experiences.

---

## 3. Typography: The Editorial Scale
We employ a high-contrast pairing: **Newsreader** (Serif) for authority and **Inter** (Sans-serif) for functional data.

- **The Voice (Display & Headline):** Use `display-lg` to `headline-sm`. These utilize Newsreader to convey a legal, established heritage. The generous tracking and serif details command attention.
- **The Engine (Title & Body):** Use `title-lg` down to `body-sm` in Inter. This is our "working" type—crisp, legible, and modern.
- **The Label (Labels):** `label-md` and `label-sm` are always in Inter, often in All-Caps with +5% letter spacing to mimic the metadata on official government stamps.

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows and borders are "noisy." This system uses **Tonal Layering** to convey importance.

- **The Layering Principle:** Depth is achieved by stacking. A `surface_container_lowest` card sitting on a `surface_container_low` background provides a soft, natural lift.
- **Ambient Shadows:** Only for floating modals or "urgent" alerts. Use the `on_surface` color at 6% opacity with a 32px blur and 8px Y-offset. This mimics natural light rather than a digital drop shadow.
- **Ghost Borders:** If a border is required for accessibility in input fields, use `outline_variant` (#c4c6cf) at **20% opacity**. Never 100%.

---

## 5. Component Logic

### Buttons: The Signature Action
- **Primary:** Deep Slate Blue gradient (from `primary_container` to `primary`) with `on_primary` text. No border. `0.25rem` (4px) corner radius for a sharp, professional finish.
- **Secondary:** Transparent background with a `Ghost Border` and `primary` text.
- **Tertiary:** Pure text with an underline that appears only on hover, reinforcing the "editorial" feel.

### Status Badges: The Intelligence Indicators
Since TitleCheck centers on statuses, these must be unmistakable but refined.
- **Clear (Success):** Emerald (#059669) background at 10% opacity with solid Emerald text. 
- **Caution (Warning):** Amber (#b45309) background at 10% opacity with solid Amber text.
- **Urgent (Alert):** Red (#dc2626) background at 10% opacity with solid Red text.

### Input Fields & Data Entry
- **Field Style:** Use `surface_container_low` as the fill. No bottom line. No heavy border.
- **Focus State:** Transition the fill to `surface_container_lowest` and add a 1px `primary` Ghost Border.

### Cards & Information Units
**Never use divider lines.** Separate internal card sections using `1.5rem` to `2rem` of vertical whitespace. If a physical separation is required, use a 4px tall rectangular "block" in `surface_container_high` (#e2e8f8) as a modern take on the traditional horizontal rule.

---

## 6. Do's and Don'ts

### Do
- **Do** treat every page as an "Audit Trail." Information should flow logically from top-to-bottom.
- **Do** use `display-lg` for key metrics (e.g., "98% Clear") to create an authoritative focal point.
- **Do** lean into asymmetry. For example, a left-aligned headline with a right-aligned status badge creates a high-end, bespoke feel.

### Don't
- **Don't** use consumer-style imagery or stock photos of smiling realtors. The interface is the product.
- **Don't** use rounded corners larger than `xl` (0.75rem). Stay within the `sm` (2px) to `md` (6px) range to keep the "legal document" edge.
- **Don't** use pure black. Always use `on_background` (#151c27) for text to maintain the "Deep Slate Blue" brand essence.

---

## 7. Accessibility & Motion
- **Legibility:** All text-to-background combinations must meet a 4.5:1 ratio. High-contrast typography is a core pillar of "Transparency."
- **Motion:** Transitions should be "Snappy & Intentional." Use a `200ms` Ease-Out duration. Elements should not "bounce"; they should fade and slide upward 4px, as if a sheet of paper is being placed onto a stack.```