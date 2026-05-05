# Design System Document: Recipes & Notes

## 1. Overview & Creative North Star

### Creative North Star: "The Culinary Archivist"
This design system moves away from the "bloggy" nature of modern recipe sites and toward a high-end, editorial digital archive. It is inspired by the tactile experience of a chef’s private notebook—thick cream paper, intentional ink-heavy headings, and the organic warmth of a kitchen.

To break the "template" look, we employ **Intentional Asymmetry**. Elements should not always sit in a perfect center-aligned container. Instead, use the large `display-lg` typography to anchor the page, allowing images and body text to float with generous, uneven whitespace. The goal is to make the digital screen feel like a curated spread in a premium independent food magazine.

---

## 2. Colors

The palette is rooted in an organic, parchment-inspired base (`#fefae5`) to reduce eye strain and provide a "living" surface for content.

### Color Tokens
*   **Surface (The Canvas):** `surface` (`#fefae5`) and `surface_container` (`#f2eeda`) form the foundation.
*   **Primary (Forest Green):** `primary` (`#17341d`) is used for primary actions and deep, authoritative brand moments.
*   **Secondary (Terracotta):** `secondary` (`#974723`) acts as a warm, human accent for alerts, highlights, or "chef's notes."

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to section off content. Structural boundaries must be defined solely through background color shifts. For example, a recipe card or a "Notes" sidebar should be distinguished by moving from `surface` to `surface_container_low` or `surface_container_high`. Use color depth, not strokes, to organize information.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked physical layers. 
*   **Bottom Layer:** `surface` (Main Page Background).
*   **Middle Layer:** `surface_container` (Content Sections/Article Bodies).
*   **Top Layer:** `surface_container_highest` (Floating elements or Overlays).

### Signature Textures & Glassmorphism
For floating navigation bars or recipe "quick-view" drawers, use **Glassmorphism**. Apply `surface` at 80% opacity with a `backdrop-blur` of 20px. This allows the organic "cream" colors of the images and backgrounds to bleed through, softening the interface. Use a subtle linear gradient from `primary` to `primary_container` for high-impact CTA buttons to give them a slight "lacquered" depth.

---

## 3. Typography

The typographic soul of the system lies in the tension between the loud, modern sans-serif (Manrope) and the intimate, literary serif (Newsreader).

*   **Display & Headlines (Manrope):** Bold, heavy, and unapologetic. Use `display-lg` (3.5rem) for recipe titles. The tight letter-spacing and high weight evoke modern kitchen branding.
*   **Body & Titles (Newsreader):** This is the "Notebook" element. Use `body-lg` (1rem) for instructions and stories. The serif nature ensures long-form readability and provides a sophisticated contrast to the heavy headers.
*   **Labels (Manrope):** Use `label-md` for meta-data (Prep Time, Yield) in all caps with slightly increased letter spacing to maintain a clean, organized hierarchy.

---

## 4. Elevation & Depth

We reject traditional material shadows in favor of **Tonal Layering**.

*   **The Layering Principle:** Place a `surface_container_lowest` card on a `surface_container` section. This creates a soft "lift" that feels integrated rather than added on.
*   **Ambient Shadows:** Where physical elevation is required (e.g., a floating "Add to Grocery List" button), use a shadow tinted with `on_surface` (10% opacity) with a blur radius of 32px and a Y-offset of 8px. It should look like a soft glow of light, not a dark drop shadow.
*   **The "Ghost Border" Fallback:** If a separation is absolutely necessary for accessibility, use `outline_variant` at **15% opacity**. It should be barely perceptible—a "ghost" of a line.

---

## 5. Components

### Buttons
*   **Primary:** Background: `primary`; Text: `on_primary`; Corner Radius: `sm` (0.125rem) for a sharp, tailored look.
*   **Secondary:** Background: `secondary_container`; Text: `on_secondary_container`. Use for secondary actions like "Print Recipe."
*   **Tertiary:** No background. Bold Manrope text with a subtle `secondary` underline (2px) that expands on hover.

### Input Fields
Avoid the "box" look. Use a `surface_container_high` background with a `sm` (0.125rem) radius. Labels should be `label-md` (Manrope) sitting strictly above the field, never inside as a placeholder.

### Recipe Cards & Lists
*   **The Rule:** Forbid the use of horizontal divider lines.
*   **Execution:** Separate ingredients or steps using the **Spacing Scale**. Use `spacing.6` (2rem) between list items. For nested instructions, use a subtle background shift to `surface_container_low`.
*   **Images:** All images should have a `md` (0.375rem) corner radius to soften the "modern" edges.

### Additional Components: "The Note"
A specialized container for "Chef's Notes." This should use the `secondary_fixed` (Terracotta tint) background, `title-sm` Newsreader typography, and be slightly rotated (1-2 degrees) to mimic a scrap of paper tucked into a book.

---

## 6. Do's and Don'ts

### Do
*   **DO** use whitespace as a functional element. If a section feels crowded, increase the padding using `spacing.16` or `spacing.20`.
*   **DO** lean into "editorial" layout. Let a photo of a dish bleed off the edge of the screen while the text stays centered.
*   **DO** use the high-contrast `display-lg` scale for impact.

### Don't
*   **DON'T** use pure black (#000000). Always use `on_surface` (#1d1c10) for text to maintain the organic, ink-on-paper feel.
*   **DON'T** use default "rounded" buttons. Keep the `sm` (0.125rem) or `none` radius to maintain a sophisticated, bespoke architectural vibe.
*   **DON'T** use 1px lines to separate ingredients. Use the vertical space and typography weight to guide the eye.

### Accessibility Note
Ensure that when using the `secondary` (Terracotta) on the `surface` (Cream), you verify contrast ratios for smaller text. For body copy, prioritize the deep `primary` or `on_surface` tones for maximum legibility.