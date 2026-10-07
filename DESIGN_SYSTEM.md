# Layered Paper-cut UI Library — Design System Specification

> **Version:** 1.0.0  
> **Status:** Approved Architecture & Specification  
> **Target Framework:** Modern Web Components / React / Vue / Vanilla CSS & SVG  
> **Workspace Path:** `D:\works\paper-cutting-ui\DESIGN_SYSTEM.md`

---

## Table of Contents

1. [Core Philosophy & Spatial Metaphor](#1-core-philosophy--spatial-metaphor)
   - [Aesthetic Foundation](#11-aesthetic-foundation)
   - [The Physical Paper Metaphor](#12-the-physical-paper-metaphor)
   - [Elevation & Z-Axis Stacking System](#13-elevation--z-axis-stacking-system)
   - [Light, Warm Shadows & Diffuse Ambient Lighting](#14-light-warm-shadows--diffuse-ambient-lighting)
   - [Edge Profiles & Material Textures](#15-edge-profiles--material-textures)
2. [Color Palette & Design Tokens](#2-color-palette--design-tokens)
   - [Color Swatches & Swatch Matrix](#21-color-swatches--swatch-matrix)
   - [Warm Shadow Token System](#22-warm-shadow-token-system)
   - [CSS Custom Properties (Design Tokens)](#23-css-custom-properties-design-tokens)
   - [Contrast & WCAG 2.1 Accessibility Mapping](#24-contrast--wcag-21-accessibility-mapping)
3. [The 4 Fundamental UI Primitives](#3-the-4-fundamental-ui-primitives)
   - [3.1 Button Primitives](#31-button-primitives)
     - [Cardstock Stack](#311-cardstock-stack)
     - [Pressed-in Active State](#312-pressed-in-active-state)
     - [Paper-Tag](#313-paper-tag)
     - [Scallop-Cut](#314-scallop-cut)
   - [3.2 Input Box Primitives](#32-input-box-primitives)
     - [Carved Inset Well](#321-carved-inset-well)
     - [Postage Stamp Deckle](#322-postage-stamp-deckle)
     - [Ribbon Header](#323-ribbon-header)
   - [3.3 Checkbox Primitives](#33-checkbox-primitives)
     - [Origami Corner Fold](#331-origami-corner-fold)
     - [Paper Stamp Mark](#332-paper-stamp-mark)
     - [Pastel Ribbon Tag](#333-pastel-ribbon-tag)
   - [3.4 Dropdown Primitives](#34-dropdown-primitives)
     - [Bookmark Strip Fan-Out](#341-bookmark-strip-fan-out)
     - [Sliding Matchbox Drawer](#342-sliding-matchbox-drawer)
     - [Accordion Paper Fold](#343-accordion-paper-fold)
4. [Interaction Physics, Sound & Micro-Motions](#4-interaction-physics-sound--micro-motions)
   - [Spring Dynamics & Stiffness](#41-spring-dynamics--stiffness)
   - [Tactile Sound Metaphor](#42-tactile-sound-metaphor)
5. [Complete Catalog of 30 Interactive Applications](#5-complete-catalog-of-30-interactive-applications)
   - [Application Master Directory](#51-application-master-directory)
   - [Detailed Application Architectural Specifications (Apps 01–30)](#52-detailed-application-architectural-specifications-apps-0130)
6. [Implementation Guidelines & Code Recipes](#6-implementation-guidelines--code-recipes)
   - [SVG Filter Presets for Handcrafted Fiber](#61-svg-filter-presets-for-handcrafted-fiber)
   - [Scalloped and Deckle Edge CSS Mask Utilities](#62-scalloped-and-deckle-edge-css-mask-utilities)
   - [Building a Layered Cardstock Component](#63-building-a-layered-cardstock-component)
7. [Glossary & Architectural Principles](#7-glossary--architectural-principles)

---

## 1. Core Philosophy & Spatial Metaphor

### 1.1 Aesthetic Foundation

The **Layered Paper-cut UI Library** is founded upon the following design mantra:

> *"Layered paper-cut illustration, overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, matte cream background, whimsical and modern visual storytelling."*

Where conventional flat design treats screen real estate as an immaterial digital glass pane, and skeuomorphism mimics hyper-realistic glossy plastics and heavy leathers, the **Layered Paper-cut** paradigm honors the tangible craft of *kirigami* (cut paper), *origami* (folded paper), and layered diorama boxes (*shadowboxes*).

The user interface behaves as if constructed from heavyweight archival paper stock (200–300 gsm), meticulously laser-cut with clean vector silhouettes, hand-assembled over a warm desktop surface, and lit by gentle sunbeams filtered through sheer linen curtains.

```
       [Sunlight Filtered at 315°]
                 \
                  \
   +-----------------------------------------------+  Layer 0: Matte Cream Desk (#FAF7F0)
   |  +-----------------------------------------+  |
   |  | . . . . . . . . . . . . . . . . . . . . |  |  Layer 1: Base Cardstock Container
   |  |   +---------------------------------+   |  |
   |  |   | [Recessed Input Well / Deboss]  |   |  |  Layer 1-Inset: Carved Well
   |  |   +---------------------------------+   |  |
   |  |     +-----------------------------+     |  |
   |  |    /  Scalloped Pastel Cardstock  \     |  |  Layer 2: Content Plate
   |  |   +---------------------------------+   |  |
   |  |      | [Stack Button] | [Tag Tab]       |  |  Layer 3: Interactive Controls
   |  +-------\_______________/-----------------+  |
   +-----------------------------------------------+
```

### 1.2 The Physical Paper Metaphor

Every digital component in this design system conforms to four physical axioms:

1. **Definite Thickness Without Extrusion:** Paper sheets have a perceptible edge (0.5px to 1px highlight along the illuminated rim and a micro-offset shadow), yet they are planar surfaces rather than thick 3D volumetric plastic blocks.
2. **True Layer Overlap (Strict Z-Order):** Layers never intersect or pass through one another. When an element is stacked above another, it casts a soft warm shadow downward onto the layer immediately underneath.
3. **Punched, Cut, or Folded Operations:** All visual apertures are created using paper craft mechanisms:
   - *Punched:* Circles, eyelets, perforation tracks, postage stamp teeth.
   - *Cut (Kirigami):* Scalloped edges, silhouette windows, decorative lattice slits.
   - *Folded (Origami):* Corner dog-ears, accordion pleats, matchbox sleeves, pop-up risers.
4. **Matte Paper Radiance:** Surfaces exhibit zero specular hot spots. Reflections are broad, chalky, and diffuse, preserving soft pastel saturation and preventing digital eye fatigue.

### 1.3 Elevation & Z-Axis Stacking System

The system defines 6 discrete elevation tiers. Each tier corresponds to a physical height above the cream mat substrate:

| Elevation | Layer Name | Physical Equivalent | Typical Usage | Cast Shadow Profile |
|:---|:---|:---|:---|:---|
| **E-0** | Substrate Mat | Heavy cutting mat / desktop | Page background (`#FAF7F0`), canvas | None |
| **E-1** | Primary Sheet | 300 gsm foundation cardstock | App shell, workspace canvas, main panels | `0 2px 6px -1px rgba(74, 60, 49, 0.08)` |
| **E-2** | Card & Plate | 220 gsm pastel paper sheets | Content cards, section dividers, lists | `0 4px 12px -2px rgba(74, 60, 49, 0.10)` |
| **E-3** | Interactive Controls | Cutout chips, buttons, stamps | Standard buttons, input envelopes, badges | `0 6px 16px -3px rgba(74, 60, 49, 0.12)` |
| **E-4** | Floating Flaps & Drawers | Pop-up elements, folded tabs | Dropdowns, dialogs, matchbox drawers | `0 10px 24px -4px rgba(74, 60, 49, 0.14)` |
| **E-5** | Suspended Embellishments | Suspended tags, cursor floats | Tooltips, drag-and-drop ghost layers, toasts | `0 16px 36px -6px rgba(74, 60, 49, 0.16)` |

### 1.4 Light, Warm Shadows & Diffuse Ambient Lighting

Standard computer UI uses cold, desaturated black shadows (`rgba(0, 0, 0, 0.2)`), which makes interfaces look synthetic and industrial. In the **Layered Paper-cut** universe, light is warm and shadows pick up the natural brown-umber tones of organic wood pulp cardstock.

- **Primary Light Vector:** Directional 315° (top-left towards bottom-right).
- **Light Temperature:** 3200K (Warm daylight/reading lamp).
- **Shadow Base Formula:** `rgba(74, 60, 49, alpha)` where `rgb(74, 60, 49)` is deep burnt umber.
- **Ambient Occlusion Edge:** A tight 1px contact boundary `0 1px 1px 0 rgba(74, 60, 49, 0.07)` simulates paper fibers resting against adjacent sheets.
- **Paper Edge Highlight:** A 1px top/left inset line `inset 0 1px 0 0 rgba(255, 255, 255, 0.65)` mimics the bevel catching directional illumination.

### 1.5 Edge Profiles & Material Textures

1. **Clean Vector Cuts:** Ultra-smooth bezier paths mimicking computerized vinyl or laser cutters.
2. **Deckle Edges:** Subtle sinusoidal micro-waviness with 1px SVG displacement to convey handmade artisanal washi paper.
3. **Scalloped Borders:** Repetitive semi-circular or petal silhouettes cut cleanly along container perimeters.
4. **Perforations (Roulette Cut):** Intermittent circular or slotted punches that separate connected tear-away vouchers and coupons.

---

## 2. Color Palette & Design Tokens

### 2.1 Color Swatches & Swatch Matrix

The palette pairs a warm, unbleached matte cream base with six harmonious pastel tonal duos and deep craft ink accents:

```
[ Cream Substrate: #FAF7F0 ]
-------------------------------------------------------------------------
Pastel Sage:       [ #A8D5BA ] (Primary)     [ #D2E8D4 ] (Pastel Tint)
Pastel Peach:      [ #F7C5A8 ] (Primary)     [ #FDE2D1 ] (Pastel Tint)
Pastel Lavender:   [ #C9C1F8 ] (Primary)     [ #E3DEFD ] (Pastel Tint)
Pastel Buttercup:  [ #FDE68A ] (Primary)     [ #FEF3C7 ] (Pastel Tint)
Pastel Sky:        [ #BAE6FD ] (Primary)     [ #D9EEF8 ] (Pastel Tint)
Soft Rose:         [ #FBCFE8 ] (Primary)     [ #FCE7F3 ] (Pastel Tint)
-------------------------------------------------------------------------
Craft Ink Neutral: [ #2D2926 ] (Deep Ink)    [ #5C554F ] (Pencil Lead)
```

#### Complete Color Tokens Reference Table

| Role / Name | Hex Code | HSL Value | Symbolic Meaning & UI Function | Recommended Complement |
|:---|:---|:---|:---|:---|
| **Cream Base** | `#FAF7F0` | 42°, 40%, 96% | Desk surface, primary cardstock substrate, unbleached linen | Craft Ink (`#2D2926`) |
| **Cream Sheet Light** | `#FFFDF9` | 40°, 60%, 99% | Elevated paper layer highlight, button top-sheet | Sage or Lavender |
| **Pastel Sage Primary** | `#A8D5BA` | 143°, 36%, 75% | Botanical calm, confirmations, positive progress, nature nodes | Sage Tint (`#D2E8D4`) |
| **Pastel Sage Tint** | `#D2E8D4` | 134°, 34%, 87% | Sage backdrop card, hover fill, soft badges | Deep Ink (`#2D2926`) |
| **Pastel Peach Primary**| `#F7C5A8` | 22°, 82%, 81% | Warmth, energetic action buttons, highlights, creative tools | Peach Tint (`#FDE2D1`) |
| **Pastel Peach Tint** | `#FDE2D1` | 23°, 88%, 91% | Peach card well, notification pill background | Peach Primary (`#F7C5A8`)|
| **Pastel Lavender Primary**| `#C9C1F8` | 249°, 83%, 86%| Whimsical fantasy, structure, navigation roots, tags | Lavender Tint (`#E3DEFD`)|
| **Pastel Lavender Tint** | `#E3DEFD`| 249°, 85%, 93%| Dropdown menu drawer, secondary selection container | Lavender Primary |
| **Pastel Buttercup Primary**| `#FDE68A`| 48°, 96%, 77% | Attention, star ratings, active warnings, sunny accents | Buttercup Tint (`#FEF3C7`)|
| **Pastel Buttercup Tint**| `#FEF3C7`| 48°, 94%, 92% | Sticky note notes, highlighted table rows, tooltip wells | Buttercup Primary |
| **Pastel Sky Primary** | `#BAE6FD` | 199°, 95%, 86% | Airiness, communicative links, informational alerts, gauges | Sky Tint (`#D9EEF8`) |
| **Pastel Sky Tint** | `#D9EEF8` | 200°, 64%, 92% | Sky cardplate background, active list row selection | Sky Primary (`#BAE6FD`) |
| **Soft Rose Primary** | `#FBCFE8` | 326°, 86%, 90% | Playful affection, heart favorites, destructive or caution alerts | Rose Tint (`#FCE7F3`) |
| **Soft Rose Tint** | `#FCE7F3` | 324°, 73%, 95% | Delete confirmation modals, pastel badge tags | Rose Primary (`#FBCFE8`) |
| **Craft Ink (Text High)** | `#2D2926` | 27°, 8%, 16% | Primary body typography, line engravings, stamp strokes | Cream Base (`#FAF7F0`) |
| **Pencil Lead (Text Muted)**| `#5C554F` | 28°, 8%, 34% | Secondary metadata, captions, placeholder stamp text | Cream Base (`#FAF7F0`) |
| **Kraft Outline (Bevel)** | `#E2DAC8` | 41°, 30%, 84% | Paper bevel edge seam, divider score lines | Cream Base (`#FAF7F0`) |

### 2.2 Warm Shadow Token System

Instead of a single heavy shadow, paper cutouts employ **multi-stop composite shadows** featuring an ambient occlusion floor and a directional warm fringe:

```css
/* Level 1: Flat Card on Desk */
--shadow-paper-1: 
  0 1px 2px 0 rgba(74, 60, 49, 0.06),
  0 2px 6px -1px rgba(74, 60, 49, 0.08);

/* Level 2: Medium Elevated Layer */
--shadow-paper-2: 
  0 2px 4px 0 rgba(74, 60, 49, 0.06),
  0 6px 14px -2px rgba(74, 60, 49, 0.10);

/* Level 3: Interactive Button / Floating Sheet */
--shadow-paper-3: 
  0 3px 6px 0 rgba(74, 60, 49, 0.08),
  0 10px 22px -3px rgba(74, 60, 49, 0.12);

/* Level 4: Dropdown / Matchbox Drawer */
--shadow-paper-4: 
  0 4px 8px 0 rgba(74, 60, 49, 0.09),
  0 16px 30px -4px rgba(74, 60, 49, 0.14);

/* Level 5: Floating Modal / Suspended Tag */
--shadow-paper-5: 
  0 6px 12px 0 rgba(74, 60, 49, 0.10),
  0 24px 48px -6px rgba(74, 60, 49, 0.16);

/* Inset Carved Well (Debossed Paper Bed) */
--shadow-paper-inset: 
  inset 0 2px 4px 0 rgba(74, 60, 49, 0.12),
  inset 0 1px 2px 0 rgba(74, 60, 49, 0.08),
  0 1px 0 0 rgba(255, 255, 255, 0.85);
```

### 2.3 CSS Custom Properties (Design Tokens)

```css
:root {
  /* Surface Bases */
  --pc-bg-cream: #FAF7F0;
  --pc-bg-sheet-light: #FFFDF9;
  --pc-border-kraft: #E2DAC8;

  /* Pastel Palette Primaries & Tints */
  --pc-sage-primary: #A8D5BA;
  --pc-sage-tint: #D2E8D4;

  --pc-peach-primary: #F7C5A8;
  --pc-peach-tint: #FDE2D1;

  --pc-lavender-primary: #C9C1F8;
  --pc-lavender-tint: #E3DEFD;

  --pc-buttercup-primary: #FDE68A;
  --pc-buttercup-tint: #FEF3C7;

  --pc-sky-primary: #BAE6FD;
  --pc-sky-tint: #D9EEF8;

  --pc-rose-primary: #FBCFE8;
  --pc-rose-tint: #FCE7F3;

  /* Ink & Typography */
  --pc-ink-dark: #2D2926;
  --pc-ink-muted: #5C554F;
  --pc-ink-faint: #8E867E;

  /* Paper Radii & Curves */
  --pc-radius-sm: 4px;
  --pc-radius-md: 8px;
  --pc-radius-lg: 14px;
  --pc-radius-full: 9999px;
  --pc-radius-scallop: 12px;

  /* Animation Physics */
  --pc-ease-fold: cubic-bezier(0.34, 1.56, 0.64, 1);     /* Snappy spring */
  --pc-ease-glide: cubic-bezier(0.25, 1, 0.5, 1);        /* Gentle friction */
  --pc-duration-quick: 140ms;
  --pc-duration-normal: 240ms;
  --pc-duration-unfold: 360ms;
}
```

### 2.4 Contrast & WCAG 2.1 Accessibility Mapping

Because pastel colors possess high natural luminosity (L* > 75%), using white text upon them fails WCAG accessibility checks. The **Layered Paper-cut** system enforces strict typographic rules:

1. **High Contrast Rule:** All textual content rendered across Pastel Primaries or Pastel Tints MUST use `--pc-ink-dark` (`#2D2926`), achieving a contrast ratio of **≥ 8.2:1** (exceeding WCAG AAA criteria).
2. **Focus State Indication:** Focused elements receive a dual-ring paper crease outline: a 2px inner gap in Cream (`#FAF7F0`) and an outer 2px solid stitch line in Lavender (`#7C6EE6`) or Deep Ink (`#2D2926`).
3. **Non-Color State Indicators:** No interactive state relies solely on pastel color changes. Pressed buttons physically translate downward on the Y-axis; checked boxes display origami flaps or stamped symbols; dropdowns physically slide or fan out.

---

## 3. The 4 Fundamental UI Primitives

This section specifies the anatomy, structural markup, state changes, and visual recipes for our four core primitives and their distinct variants.

---

### 3.1 Button Primitives

Buttons represent tactile physical paper elements that invite pressing, pulling, or tearing.

```
+--------------------------------------------------------------------------+
| BUTTON PRIMITIVE VARIANTS                                                |
|                                                                          |
| 1. CARDSTOCK STACK      2. PRESSED-IN ACTIVE   3. PAPER-TAG  4. SCALLOP  |
|   +---------------+      . . . . . . . . . .     __O__        _.-"-._.-" |
|  /  Top Pastel   /|     :  [ Pressed In ]  :    | Tag |      (  Confirm )|
| +---------------+ |     :   (Well Shadow)  :    | 12  |       `-._.-"-._/|
| | Base Card #1  |/       ` . . . . . . . .'     |_____|                  |
+--------------------------------------------------------------------------+
```

#### 3.1.1 Cardstock Stack
- **Concept:** Three stacked sheets of varying pastel tones offset by 2px and 4px in the X/Y axes, creating a tangible layered card thickness.
- **Anatomy:**
  - *Base Layer (Kraft):* Structural bottom shadow sheet (`#E2DAC8`).
  - *Accent Layer:* Middle contrast cardstock (e.g., `--pc-lavender-tint`).
  - *Face Sheet:* Interactive top cardstock (e.g., `--pc-sage-primary` or `--pc-peach-primary`) with clean rounded corners.
- **State Behavior:**
  - *Resting:* Top sheet is elevated +4px (`translate(-3px, -3px)`), with dual layer shadows projecting downward.
  - *Hover:* Slides upward by 1px additional (`translate(-4px, -4px)`), amplifying bottom sheet visibility.
  - *Active / Pressed:* The top sheet snaps down (`translate(0px, 0px)`), flush against the lower sheets; drop shadows flatten into an ambient rim.
- **CSS Specification:**
```css
.pc-button-stack {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 22px;
  background-color: var(--pc-sage-primary);
  color: var(--pc-ink-dark);
  font-weight: 600;
  border-radius: var(--pc-radius-md);
  border: 1px solid rgba(74, 60, 49, 0.14);
  transform: translate(-3px, -3px);
  transition: transform var(--pc-duration-quick) var(--pc-ease-fold),
              box-shadow var(--pc-duration-quick) ease;
  box-shadow: 
    1.5px 1.5px 0 0 var(--pc-sage-tint),
    3px 3px 0 0 var(--pc-border-kraft),
    4px 4px 8px 0 rgba(74, 60, 49, 0.12);
  cursor: pointer;
}
.pc-button-stack:hover {
  transform: translate(-4px, -4px);
  box-shadow: 
    2px 2px 0 0 var(--pc-sage-tint),
    4px 4px 0 0 var(--pc-border-kraft),
    6px 6px 12px 0 rgba(74, 60, 49, 0.15);
}
.pc-button-stack:active {
  transform: translate(0px, 0px);
  box-shadow: 
    0 0 0 0 var(--pc-sage-tint),
    0 0 0 0 var(--pc-border-kraft),
    0 1px 3px 0 rgba(74, 60, 49, 0.10);
}
```

#### 3.1.2 Pressed-in Active State
- **Concept:** Rather than protruding upward, this button mimics a pre-cut paper trapdoor or debossed stamp that pushes *into* a carved cavity.
- **Anatomy:**
  - *Beveled Inset Boundary:* A 2px carved perimeter featuring an upper-left warm inset shadow.
  - *Retractable Paper Pad:* Sits coplanar with the background when relaxed, sinks 2px deeper upon click.
- **CSS Specification:**
```css
.pc-button-pressed-well {
  background-color: var(--pc-bg-sheet-light);
  border: 1.5px solid var(--pc-border-kraft);
  border-radius: var(--pc-radius-md);
  padding: 10px 20px;
  color: var(--pc-ink-dark);
  box-shadow: 
    inset 0 1px 0 rgba(255, 255, 255, 0.9),
    0 2px 4px rgba(74, 60, 49, 0.08);
  transition: all var(--pc-duration-quick) ease;
}
.pc-button-pressed-well:active, 
.pc-button-pressed-well.is-active {
  background-color: #F3EFE6;
  box-shadow: 
    inset 0 3px 6px rgba(74, 60, 49, 0.16),
    inset 0 1px 2px rgba(74, 60, 49, 0.10);
  transform: translateY(1.5px);
}
```

#### 3.1.3 Paper-Tag
- **Concept:** A luggage or gift-tag style paper card with clipped 45° angled shoulders, a punched brass ring eyelet, and an organic looped twine string.
- **Anatomy:**
  - *Clipped Corner Top:* SVG polygon or CSS `clip-path` creating the classic tag geometry.
  - *Brass Eyelet:* A 6px punched circular hole rimmed with a warm tan circle (`#D4A373`).
  - *Jute String:* A gentle curved vector line reaching to the parent header.
- **Micro-interaction:** Light pendulum swing of ±3 degrees on hover, returning softly to rest with inertia.

#### 3.1.4 Scallop-Cut
- **Concept:** A playful, craft-inspired border constructed from alternating semicircles along the top and bottom or all perimeter edges.
- **CSS SVG Mask Recipe:**
```css
.pc-button-scallop {
  position: relative;
  background-color: var(--pc-peach-primary);
  color: var(--pc-ink-dark);
  padding: 12px 26px;
  font-weight: bold;
  border: none;
  /* SVG Mask creates circular scallop teeth */
  mask-image: radial-gradient(circle at 10px 0, transparent 0, transparent 6px, black 7px);
  mask-size: 20px 100%;
  mask-repeat: repeat-x;
  filter: drop-shadow(0 3px 6px rgba(74, 60, 49, 0.12));
  transition: filter var(--pc-duration-quick) ease, transform var(--pc-duration-quick) ease;
}
.pc-button-scallop:hover {
  transform: translateY(-2px);
  filter: drop-shadow(0 6px 12px rgba(74, 60, 49, 0.15));
}
```

---

### 3.2 Input Box Primitives

Input boxes simulate functional paper apertures: hollows carved out of the cardstock, postage-franked envelopes, and floating folded ribbon banners.

```
+--------------------------------------------------------------------------+
| INPUT BOX PRIMITIVE VARIANTS                                             |
|                                                                          |
| 1. CARVED INSET WELL     2. POSTAGE STAMP DECKLE   3. RIBBON HEADER      |
|  +---------------------+  : : : : : : : : : : : :   /=====[ Label ]=====\|
|  |\\ Inner Vignette \\ |  :   [ Postal Frame ]  :  +---------------------+
|  |   Type here...      |  :   Punched Tooth Rim :  |  Framed Input Card  |
|  +---------------------+  : : : : : : : : : : : :  +---------------------+
+--------------------------------------------------------------------------+
```

#### 3.2.1 Carved Inset Well
- **Concept:** An aperture cut through the upper cardstock layer into a recessed pastel bed. The inner top and left boundaries cast an inverted warm shadow.
- **Visual Texture:** A subtle parchment grain texture sits inside the cavity.
- **Focus Transition:** The inset shadow warms from pale umber to soft Lavender (`rgba(201, 193, 248, 0.4)`), while a crisp 1.5px ink perimeter line sharpens.
- **CSS Specification:**
```css
.pc-input-well {
  width: 100%;
  padding: 12px 16px;
  background-color: #F5F1E8;
  border: 1px solid var(--pc-border-kraft);
  border-radius: var(--pc-radius-md);
  color: var(--pc-ink-dark);
  font-family: inherit;
  font-size: 14px;
  box-shadow: 
    inset 0 3px 5px 0 rgba(74, 60, 49, 0.11),
    inset 0 1px 2px 0 rgba(74, 60, 49, 0.08),
    0 1px 0 0 rgba(255, 255, 255, 0.8);
  outline: none;
  transition: all var(--pc-duration-normal) ease;
}
.pc-input-well:focus {
  background-color: #FFFDF9;
  border-color: var(--pc-lavender-primary);
  box-shadow: 
    inset 0 2px 4px 0 rgba(74, 60, 49, 0.06),
    0 0 0 3px var(--pc-lavender-tint);
}
```

#### 3.2.2 Postage Stamp Deckle
- **Concept:** The input field is framed like an international airmail stamp or commemorative postal issue, bordered by punched perforations.
- **Decorative Accent:** An authentic cancellation ink-mark graphic (` wavy postmark stamp `) rests subtly on the right flank.
- **Structure:** Perforated serrations generated via repeating CSS radial gradients:
```css
.pc-input-postage {
  position: relative;
  background: var(--pc-bg-sheet-light);
  border: 2px dashed var(--pc-peach-primary);
  border-radius: 4px;
  padding: 14px 18px;
  box-shadow: 0 3px 8px rgba(74, 60, 49, 0.08);
}
```

#### 3.2.3 Ribbon Header
- **Concept:** A pastel paper ribbon folded double-layered, sitting atop the input card like a traditional gift sash or banner label.
- **Visual Mechanics:**
  - Ribbon ends have a classic 45° fishtail or swallow-tail cutout.
  - Beneath each fold, a 2px dark triangle (`#C4B9A5`) gives the illusion of physical paper wrapping behind the card.

---

### 3.3 Checkbox Primitives

Checkboxes in the paper-cut system forgo generic mechanical checkmarks in favor of origami folds, physical ink stamps, and bookmark tags.

```
+--------------------------------------------------------------------------+
| CHECKBOX PRIMITIVE VARIANTS                                              |
|                                                                          |
| 1. ORIGAMI CORNER FOLD      2. PAPER STAMP MARK    3. PASTEL RIBBON TAG  |
|     +-------+                  +-------+                +-------+        |
|     |     / |                  |  * *  | (Inked         |  [#]  | (Washi |
|     |    /--| (Folded Dogear)  |   V   |  Rubber        |  TAG  |  Paper |
|     +-------+                  +-------+  Stamp)        +---|---+  Tab)  |
+--------------------------------------------------------------------------+
```

#### 3.3.1 Origami Corner Fold
- **Concept:** The checkbox represents a square paper chit. Checking the box dog-ears the top-right corner over, revealing a contrasting pastel hue on the reverse side.
- **Anatomy:**
  - *Base State:* Clean flat square in `--pc-bg-sheet-light` with a 1px kraft border.
  - *Checked State:* Top-right triangle rotates 180° along the diagonal axis, displaying `--pc-buttercup-primary` with a tiny triangle drop-shadow falling onto the chit surface.
- **CSS Specification:**
```css
.pc-checkbox-origami {
  width: 22px;
  height: 22px;
  position: relative;
  background: var(--pc-bg-sheet-light);
  border: 1.5px solid var(--pc-border-kraft);
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
  transition: all var(--pc-duration-quick) ease;
}
.pc-checkbox-origami::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 0 0;
  border-color: transparent transparent var(--pc-sage-primary) transparent;
  transition: all var(--pc-duration-quick) var(--pc-ease-fold);
  box-shadow: -1px 1px 2px rgba(74, 60, 49, 0.15);
}
.pc-checkbox-origami.is-checked {
  background-color: var(--pc-sage-tint);
  border-color: var(--pc-sage-primary);
}
.pc-checkbox-origami.is-checked::after {
  border-width: 0 12px 12px 0;
  border-color: transparent var(--pc-sage-primary) transparent transparent;
}
```

#### 3.3.2 Paper Stamp Mark
- **Concept:** Checking the box creates the physical illusion of pressing a hand-carved wooden rubber stamp into an ink pad and stamping the sheet.
- **Visual Texture:** The checkmark features slightly irregular, speckled edges mimicking ink soaked into paper fibers.
- **Animation:** An initial `scale(1.4)` stamp impact that snaps down to `scale(1.0)` with a slight 2° random angle wobble within 180ms.

#### 3.3.3 Pastel Ribbon Tag
- **Concept:** A small folded washi-tape ribbon tab protruding from the side of a list item or card edge.
- **Active State:** The ribbon tab slides outward by 6px and lights up with a cheerful pastel tint (`--pc-rose-primary`), displaying an embroidered or printed indicator dot.

---

### 3.4 Dropdown Primitives

Dropdowns are moments of tactile wonder—unfolding, fanning out, or sliding like secret compartments.

```
+--------------------------------------------------------------------------+
| DROPDOWN PRIMITIVE VARIANTS                                              |
|                                                                          |
| 1. BOOKMARK STRIP FAN-OUT   2. MATCHBOX DRAWER     3. ACCORDION FOLD     |
|         [ Header ]             [ Outer Sleeve ]         [ Pleat Top ]    |
|        /    |     \            |   | Tray |   |         / \   / \   / \  |
|     [S1]  [S2]   [S3]          +---|------|---+        /   \_/   \_/   \ |
|    (Fanning Palette)           (Slides Smoothly)       (Concertina Z-Fold|
+--------------------------------------------------------------------------+
```

#### 3.4.1 Bookmark Strip Fan-Out
- **Concept:** The selection trigger represents the brass fastener of a paper swatch book (like architect color chips). When opened, multiple pastel bookmark strips fan out in an arc.
- **Physics:** Each option blade rotates by an angular offset (`-6deg`, `0deg`, `+6deg`, etc.) with staggered spring delays (`animation-delay: 30ms * index`).
- **CSS Specification:**
```css
.pc-dropdown-fan-item {
  transform-origin: top left;
  transition: transform var(--pc-duration-unfold) var(--pc-ease-fold),
              opacity var(--pc-duration-normal) ease;
}
.pc-dropdown-fan.is-open .pc-dropdown-fan-item:nth-child(1) {
  transform: translateY(4px) rotate(-4deg);
}
.pc-dropdown-fan.is-open .pc-dropdown-fan-item:nth-child(2) {
  transform: translateY(8px) rotate(0deg);
}
.pc-dropdown-fan.is-open .pc-dropdown-fan-item:nth-child(3) {
  transform: translateY(12px) rotate(4deg);
}
```

#### 3.4.2 Sliding Matchbox Drawer
- **Concept:** A two-part container consisting of an outer cardstock sleeve with cut-out thumb notches, and an inner colored sliding tray.
- **Interaction:** Clicking the trigger pushes the inner drawer horizontally or vertically out of the sleeve, revealing option chips nestled within the tray bed.

#### 3.4.3 Accordion Paper Fold
- **Concept:** Inspired by concertina folded maps and pleated accordion instruments. When expanded, horizontal valley and mountain fold shadows alternate dynamically.
- **Visual Mechanics:**
  - Alternating segments have slight 3D perspective tilts (`rotateX(6deg)` and `rotateX(-6deg)`).
  - Mountain folds catch a 1px white highlight line; valley folds host a 2px warm umber shading gradient.

---

## 4. Interaction Physics, Sound & Micro-Motions

### 4.1 Spring Dynamics & Stiffness

Paper has high tensile resistance and low mass. It does not wobble like gelatin, nor does it bounce like rubber. Instead, paper movements are **crisp, snappy, and slightly cushioned**:

- **Paper Fold Spring:** `mass: 0.8`, `stiffness: 280`, `damping: 22`  
  *CSS Equivalent:* `cubic-bezier(0.34, 1.56, 0.64, 1)`
- **Drawer Slide Friction:** `mass: 1.2`, `stiffness: 190`, `damping: 24`  
  *CSS Equivalent:* `cubic-bezier(0.25, 1, 0.5, 1)`
- **Hover Lift:** 120ms gentle elevation with 1px X/Y translation and proportional shadow expansion.

### 4.2 Tactile Sound Metaphor

While silent by default in purely visual web experiences, applications incorporating auditory feedback should conform to these paper acoustic soundscapes:

| Action | Physical Acoustic Equivalent | Audio Profile / Frequency |
|:---|:---|:---|
| **Button Click** | Cardstock card snapped sharply onto mahogany table | 1.8 kHz, 45ms crisp transient snap |
| **Input Focus** | Soft HB graphite pencil touching fibrous watercolor paper | Low-amplitude whisper brush |
| **Checkbox Checked**| Rubber stamp depressing against absorbent pulp sheet | 220 Hz gentle low thud followed by 3 kHz fiber release |
| **Dropdown Fan-out**| Deck of playing cards being shuffled or fanned across felt | Rapid flutter cascade, 120ms total duration |
| **Drawer Slide** | Sliding two clean sheets of cold-pressed Strathmore card | Gentle fibrous friction slide |

---

## 5. Complete Catalog of 30 Interactive Applications

The **Layered Paper-cut UI Library** includes 30 flagship application templates. Each application demonstrates the aesthetic in a dedicated domain, showing how the 4 primitives combine with domain-specific paper crafts.

### 5.1 Application Master Directory

| App ID | Application Name | Primary Domain | Core Paper Metaphor | Dominant Pastel Palette | Key Primitives Used |
|:---:|:---|:---|:---|:---|:---|
| **APP-01** | Origami Studio & Pattern Maker | Craft & Design | Folding grid canvas & creased bone tool | Pastel Sage & Buttercup | Cardstock Stack, Accordion Fold |
| **APP-02** | Botanical Herbarium & Seed Journal | Nature & Gardening | Pressed flower mounts & seed packet envelopes | Pastel Sage & Peach | Paper-Tag, Carved Well, Origami Fold |
| **APP-03** | Parchment & Quill Storyboarder | Creative Writing | Manuscript index cards pinned to backing | Lavender & Buttercup | Scallop-Cut, Matchbox Drawer |
| **APP-04** | Bento Kitchen Meal Planner | Culinary & Lifestyle | Layered bento divider compartments | Pastel Peach & Sage | Ribbon Header, Matchbox Drawer |
| **APP-05** | Wanderlust Stamp Passport | Travel & Exploration | Perforated visa stamp books & deckle tickets | Sky & Soft Rose | Postage Stamp, Ribbon Tag |
| **APP-06** | Paper Forest Pomodoro Focus | Productivity | Pop-up tree grove growing with work sessions | Pastel Sage & Buttercup | Cardstock Stack, Origami Fold |
| **APP-07** | Matchbox Habit Tracker & Streaks | Self-Improvement | Sliding matchboxes with matchstick counters | Pastel Peach & Lavender | Matchbox Drawer, Paper Stamp |
| **APP-08** | Whimsical Tea House Blend POS | Commerce & Retail | Tea canister labels & folded paper tea bags | Pastel Sage & Peach | Scallop-Cut, Bookmark Fan-Out |
| **APP-09** | Starlit Celestial Astrolabe | Science & Education | Concentric rotating kirigami star dials | Lavender & Pastel Sky | Carved Inset Well, Fan-Out |
| **APP-10** | Pastel Music Box Synthesizer | Audio & Music | Punch-card music rolls & sliding stops | Lavender, Rose & Sky | Pressed-in Well, Accordion Fold |
| **APP-11** | Shadowbox Puppet Animator | Animation & Art | Multi-layer silhouette shadowbox stage | Pastel Peach & Lavender | Cardstock Stack, Ribbon Header |
| **APP-12** | Vintage Mailroom Dispatcher | Messaging & Email | Airmail envelopes & wax seal toggles | Pastel Sky & Soft Rose | Postage Stamp, Paper-Tag |
| **APP-13** | Cozy Book Nook Reading Log | Literature & Books | Stamped library cards & ribbon bookmarks | Buttercup & Sage | Bookmark Fan-Out, Paper Stamp |
| **APP-14** | Origami Crane Kanban Board | Project Management | Folded paper crane cards perched on wires | Sky, Sage & Rose | Cardstock Stack, Origami Fold |
| **APP-15** | Folk Art Weather Almanac | Weather & Data | Paper cloud layers & sunbeam cutouts | Pastel Sky & Buttercup | Scallop-Cut, Accordion Fold |
| **APP-16** | Scrapbook Memory Capsule | Media & Photos | Photo corner mounts & washi tape strips | Soft Rose & Buttercup | Paper-Tag, Ribbon Tag |
| **APP-17** | Artisan Ceramic Inventory | Crafts Marketplace | Bisque clay swatch cards & kiln tags | Peach & Pastel Sage | Pressed-in Well, Matchbox Drawer |
| **APP-18** | Quiet Meadow Breath Pacer | Wellness & Health | Expanding paper lotus blossom | Pastel Lavender & Sage | Origami Fold, Fan-Out |
| **APP-19** | Little Baker's Calculator | Culinary Math | Scalloped pastry doilies & recipe cards | Soft Rose & Buttercup | Scallop-Cut, Carved Inset Well |
| **APP-20** | Kirigami Blueprint Explorer | Architecture & CAD | Architectural pop-up folding schematics | Pastel Sky & Sage | Ribbon Header, Accordion Fold |
| **APP-21** | Pet Sanctuary Adoption Registry | Animal Care | Paw-punched tags & kennel gate cards | Pastel Peach & Sky | Paper-Tag, Paper Stamp |
| **APP-22** | Matchbox Solitaire Parlor | Casual Games | Embossed playing cards sliding from matchbox | Soft Rose & Lavender | Matchbox Drawer, Stack Button |
| **APP-23** | Botanist's Greenhouse IoT | Smart Home & IoT | Hygrometer dials & plant voucher slips | Pastel Sage & Sky | Carved Inset Well, Ribbon Tag |
| **APP-24** | Vintage Clockmaker Timekeeper | Utilities & Timing | Laser-cut wooden/paper escapement cogs | Buttercup & Peach | Pressed-in Well, Fan-Out |
| **APP-25** | Fairytale RPG Character Sheet | Tabletop Gaming | Illustrated quest scroll with wax emblem seal | Lavender & Buttercup | Scallop-Cut, Origami Fold |
| **APP-26** | Paper City Transit Navigator | Urban Transit | Fold-out pocket transit map with bus tickets | Pastel Sky & Peach | Accordion Fold, Postage Stamp |
| **APP-27** | Floral Apothecary Formulator | Herbal Medicine | Glass bottle tags & recipe index drawers | Pastel Sage & Rose | Paper-Tag, Matchbox Drawer |
| **APP-28** | Museum Artifact Curation | Culture & Arts | Matted archival museum showcase frames | Lavender & Cream | Carved Inset Well, Fan-Out |
| **APP-29** | Little Treasury Piggy Bank | Personal Finance | Folded paper piggy coin bank with coin slits | Pastel Peach & Buttercup | Pressed-in Well, Ribbon Tag |
| **APP-30** | Paper Craft Workshop Ticketing | Events & Booking | Stamped ticket stubs with tear-off perforations| Soft Rose & Sage | Postage Stamp, Scallop-Cut |

---

### 5.2 Detailed Application Architectural Specifications (Apps 01–30)

Below is the complete architectural specification for all 30 interactive applications.

---

#### APP-01: Origami Studio & Pattern Maker
- **Domain:** Craft & Graphic Design
- **Purpose:** A vector-based paper folding simulation where users draft origami crease patterns (Mountain & Valley folds), test collapse dynamics, and export cutting plotter files (SVG/DXF).
- **Spatial Metaphor:** A self-healing green grid cutting mat (`#D2E8D4`) over a cream desk, populated by crisp square origami sheets with live crease shadows.
- **Component Composition:**
  - *Primitives:* `Cardstock Stack` (tool selectors: Fold, Cut, Score, Unfold), `Accordion Paper Fold` (step-by-step folding instructions drawer), `Origami Corner Fold` (paper selection toggle).
  - *Custom Paper Elements:* Dashed red/blue crease lines (Mountain/Valley indicators), bone folder dragging cursor with contact drop shadow.
- **Palette Implementation:** Pastel Sage (`#A8D5BA`) workspace mat with Buttercup (`#FDE68A`) active fold facets and Craft Ink score lines.

---

#### APP-02: Botanical Herbarium & Seed Journal
- **Domain:** Nature & Gardening Science
- **Purpose:** Cataloging dried botanical specimens, seed collection dates, germination success rates, and pressing notes.
- **Spatial Metaphor:** A Victorian botanist's specimen portfolio with cream mounting sheets, translucent tracing paper overlays, and seed packet envelopes.
- **Component Composition:**
  - *Primitives:* `Paper-Tag` (specimen accession labels with tied jute cords), `Carved Inset Well` (taxonomic classification search field), `Origami Corner Fold` (checkbox for "Specimen Dried" and "Seed Bank Stored").
  - *Custom Paper Elements:* Paper corner photo mounts securing specimen photographs; glassine envelope packets that open upon click.
- **Palette Implementation:** Deep Sage (`#A8D5BA`) background cards, Peach (`#F7C5A8`) taxonomy tags, unbleached cream backing (`#FAF7F0`).

---

#### APP-03: Parchment & Quill Storyboarder
- **Domain:** Creative Writing & Screenplay Architecture
- **Purpose:** Visual index-card story plotting tool allowing authors to drag narrative acts, character arcs, and chapter summaries across physical bulletin tracks.
- **Spatial Metaphor:** A cork-textured board hosting overlapping pastel 3x5 index cards held down by paper-tape strips.
- **Component Composition:**
  - *Primitives:* `Scallop-Cut` (Act divider banners), `Sliding Matchbox Drawer` (character dossier drawer containing personality traits), `Pressed-in Active State` (timeline chapter buttons).
  - *Custom Paper Elements:* Masking tape corners rendered with 60% opacity pastel yellow ribbons; scored fold lines dividing subplot lanes.
- **Palette Implementation:** Pastel Lavender (`#C9C1F8`) for narrative arcs, Pastel Buttercup (`#FDE68A`) for plot twists, Soft Rose (`#FBCFE8`) for emotional climaxes.

---

#### APP-04: Bento Kitchen Meal Planner & Recipe Index
- **Domain:** Culinary Planning & Grocery Workflow
- **Purpose:** Weekly nutritious meal organizing with automatic ingredient consolidation and grocery shopping list aggregation.
- **Spatial Metaphor:** A traditional Japanese bento lunchbox crafted from pale birch cardstock with modular divider compartments.
- **Component Composition:**
  - *Primitives:* `Ribbon Header` (day-of-week header banners: Mon–Sun), `Sliding Matchbox Drawer` (recipe card drawers holding ingredient quantities), `Origami Corner Fold` (meal prep completion checklist).
  - *Custom Paper Elements:* Nori and rice textured ingredient badges; chopstick-styled separator rules.
- **Palette Implementation:** Peach Primary (`#F7C5A8`) for proteins, Sage Primary (`#A8D5BA`) for greens, Sky Primary (`#BAE6FD`) for seafood, Cream Base (`#FAF7F0`) for box structure.

---

#### APP-05: Wanderlust Stamp Passport & Trip Journal
- **Domain:** Travel Log & Itinerary Exploration
- **Purpose:** Documenting visited worldwide cities, tracking flights and rail journeys, and collecting interactive commemorative travel stamps.
- **Spatial Metaphor:** A stitched pocket passport bound in pastel sky cardstock with numbered watermark pages and postal visas.
- **Component Composition:**
  - *Primitives:* `Postage Stamp Deckle` (flight booking reference and date inputs), `Paper Stamp Mark` (destination entry visa stamps stamped upon arrival), `Pastel Ribbon Tag` (multi-country trip tab switcher).
  - *Custom Paper Elements:* Perforated boarding pass coupon with tearable barcode tab; metallic gold foil paper seal for country milestones.
- **Palette Implementation:** Pastel Sky (`#BAE6FD`) passport cover, Pastel Rose (`#FBCFE8`) departure stamps, Buttercup (`#FDE68A`) train vouchers.

---

#### APP-06: Paper Forest Pomodoro Focus Companion
- **Domain:** Productivity & Time Management
- **Purpose:** A focus timer where focused 25-minute intervals sprout intricate 3D layered paper trees, gradually assembling an enchanted paper forest.
- **Spatial Metaphor:** A circular layered shadowbox diorama that gains additional paper-cut foliage layers as the session progresses.
- **Component Composition:**
  - *Primitives:* `Cardstock Stack` (Timer Start/Pause controls), `Carved Inset Well` (task goal input field), `Origami Corner Fold` (break completed toggle).
  - *Custom Paper Elements:* Concentric circular paper rings rotating like a mechanical sundial; pop-up birch and pine tree silhouettes.
- **Palette Implementation:** Gradient transitions from Sage Tint (`#D2E8D4`) at dawn through Buttercup (`#FDE68A`) at midday to Lavender (`#C9C1F8`) at dusk.

---

#### APP-07: Matchbox Habit Tracker & Daily Streaks
- **Domain:** Personal Growth & Habit Formation
- **Purpose:** Daily recurring habit tracking where each habit is represented by an artisan matchbox that collects colorful pastel matches for consecutive streaks.
- **Spatial Metaphor:** A wooden apothecary matchbox shelf holding 12 colorful sliding paper matchboxes.
- **Component Composition:**
  - *Primitives:* `Sliding Matchbox Drawer` (the core habit container: sliding open reveals the streak history), `Paper Stamp Mark` (daily streak checklist), `Cardstock Stack` ("Ignite New Habit" button).
  - *Custom Paper Elements:* Matchstick progress bars with pastel sulfur heads; textured striker strip along the container boundary.
- **Palette Implementation:** Pastel Peach (`#F7C5A8`) drawer exterior, Lavender Tint (`#E3DEFD`) internal tray, Buttercup matches (`#FDE68A`).

---

#### APP-08: Whimsical Tea House Order & Blend Station
- **Domain:** Food & Beverage Point-of-Sale / Custom Tea Blending
- **Purpose:** Custom loose-leaf tea blend formulation (base teas, floral herbs, spices) and artisan packaging label generation.
- **Spatial Metaphor:** A boutique tea counter with hand-folded paper tea canisters, sample aroma cups, and tied tea bags.
- **Component Composition:**
  - *Primitives:* `Scallop-Cut` (scalloped edge tea canister selection cards), `Bookmark Strip Fan-Out` (steeping temperature and infusion time selector), `Paper-Tag` (custom customer name tag attached to tea bag string).
  - *Custom Paper Elements:* Translucent glassine tea bag packet showing silhouette herb leaves inside.
- **Palette Implementation:** Sage (`#A8D5BA`) for green teas, Peach (`#F7C5A8`) for fruit tisanes, Rose (`#FBCFE8`) for floral infusions.

---

#### APP-09: Starlit Constellation & Celestial Astrolabe
- **Domain:** Astronomy & Educational Science
- **Purpose:** Stargazing planner, celestial coordinate calculator, and mythic constellation story reader.
- **Spatial Metaphor:** An antique Renaissance astrolabe constructed from layered cut cardstock disks pinned with a center brass rivet.
- **Component Composition:**
  - *Primitives:* `Bookmark Strip Fan-Out` (season / month selector fanning along the horizon), `Carved Inset Well` (celestial coordinates input box), `Pressed-in Active State` (star magnitude toggles).
  - *Custom Paper Elements:* Pin-pricked constellation paper plates letting cream backlight shine through star coordinate holes.
- **Palette Implementation:** Deep Indigo backing (`#1E1B4B`) illuminated by Pastel Lavender (`#C9C1F8`), Pastel Sky (`#BAE6FD`), and Buttercup star dots (`#FDE68A`).

---

#### APP-10: Pastel Music Box & Synthesizer Sequencer
- **Domain:** Interactive Audio & Musical Creation
- **Purpose:** A 16-step polyphonic music sequencer where beats and melodies are composed by punching holes into a sliding paper roll.
- **Spatial Metaphor:** A Swiss mechanical music box with a crank handle, steel tines, and an endless pastel punch-card strip.
- **Component Composition:**
  - *Primitives:* `Pressed-in Active State` (the 16x8 sequencer matrix notes, debossing when activated), `Accordion Paper Fold` (sound synthesizer presets bank), `Cardstock Stack` (Tempo / Playback master controls).
  - *Custom Paper Elements:* Punched rectangular holes revealing an inner glowing brass cylinder; moving playhead tracking line.
- **Palette Implementation:** Pastel Lavender base roll (`#E3DEFD`), Soft Rose active notes (`#FBCFE8`), Sky Primary high octaves (`#BAE6FD`).

---

#### APP-11: Puppet Theater Shadowbox Animator
- **Domain:** Visual Storytelling & Stop-Motion Animation
- **Purpose:** Digital paper puppet rigging, scene backdrop stacking, and multi-plane 2D animation keyframing.
- **Spatial Metaphor:** A multi-layered toy theater proscenium with side wings, drop curtains, and cut-paper puppet silhouettes mounted on wire rods.
- **Component Composition:**
  - *Primitives:* `Cardstock Stack` (Keyframe capture buttons), `Ribbon Header` (Timeline track headers for Background, Midground, Foreground), `Carved Inset Well` (Frame rate and interpolation inputs).
  - *Custom Paper Elements:* Articulated joint rivets with pivot shadows; scalloped theater curtain header.
- **Palette Implementation:** Soft Rose curtain borders (`#FBCFE8`), Peach backdrop mountains (`#F7C5A8`), Sage foreground stage (`#A8D5BA`).

---

#### APP-12: Vintage Postal Mailroom & Letter Dispatcher
- **Domain:** Communication & Newsletter Management
- **Purpose:** Drafting, scheduling, and sending personalized handwritten-style customer letters and newsletters.
- **Spatial Metaphor:** A vintage postal sorting bureau with pigeonhole cubbies, airmail edge envelopes, and sealing wax pots.
- **Component Composition:**
  - *Primitives:* `Postage Stamp Deckle` (postal delivery tier selection and postage rate calculator), `Paper-Tag` (recipient mailing address tag), `Paper Stamp Mark` (certified airmail priority stamp).
  - *Custom Paper Elements:* Diagonal red-and-sky chevron airmail envelope borders; circular sealing wax badge toggle.
- **Palette Implementation:** Cream substrate (`#FAF7F0`), Pastel Sky borders (`#BAE6FD`), Soft Rose sealing wax (`#FBCFE8`), Craft Ink addresses.

---

#### APP-13: Cozy Book Nook & Reading Log
- **Domain:** Book Tracking & Literary Quotation Archive
- **Purpose:** Yearly reading challenge tracking, quote excerpt journaling, and personal lending library inventory.
- **Spatial Metaphor:** A physical book lending card slotted into a paper envelope glued inside the back cover of a hardcover volume.
- **Component Composition:**
  - *Primitives:* `Bookmark Strip Fan-Out` (genre filter: Fiction, Poetry, Sci-Fi, Biography), `Paper Stamp Mark` (date returned / date read library date stamp), `Carved Inset Well` (quote extraction note field).
  - *Custom Paper Elements:* Ribbon bookmark trailing from top edge; embossed library cardholder pocket.
- **Palette Implementation:** Warm Buttercup cardstock (`#FEF3C7`), Sage book covers (`#A8D5BA`), Charcoal stamped dates (`#2D2926`).

---

#### APP-14: Origami Crane Task Kanban Board
- **Domain:** Agile Project Management
- **Purpose:** Sprint board where workflow tickets are stylized as folded origami cranes migrating across columns (To Do, In Flight, Review, Complete).
- **Spatial Metaphor:** Strings of paper cranes suspended across bamboo rods resting against a cream studio wall.
- **Component Composition:**
  - *Primitives:* `Cardstock Stack` ("Create New Task" button), `Origami Corner Fold` (sub-task completion markers), `Sliding Matchbox Drawer` (task metadata inspection modal with assignee details).
  - *Custom Paper Elements:* Wing-folded task cards that flutter slightly when dragged between columns.
- **Palette Implementation:** Sky Primary (`#BAE6FD`) for backlog, Buttercup (`#FDE68A`) for in-progress, Sage Primary (`#A8D5BA`) for completed.

---

#### APP-15: Folk Art Weather Almanac & Forecast Diorama
- **Domain:** Weather Forecasting & Atmospheric Metrics
- **Purpose:** Hyper-local 7-day weather forecast, humidity curves, barometric pressure trends, and wind vector mapping.
- **Spatial Metaphor:** A folk art mechanical barometer with layered cut-out storm clouds, smiling paper suns, and droplet garlands.
- **Component Composition:**
  - *Primitives:* `Scallop-Cut` (temperature range cards with cloud scalloping), `Accordion Paper Fold` (hourly forecast expansion drawer), `Pressed-in Active State` (Metric / Imperial unit switch).
  - *Custom Paper Elements:* Layered rain droplet ribbons suspended by dashed score lines; layered cirrus cloud cutouts.
- **Palette Implementation:** Pastel Sky (`#BAE6FD`) for clear skies, Sage Tint (`#D2E8D4`) for humid conditions, Buttercup (`#FDE68A`) for sunny days.

---

#### APP-16: Scrapbook Memory Capsule & Photo Album
- **Domain:** Media Preservation & Family Archiving
- **Purpose:** Digital scrapbook album assembly, photo captioning, decorative washi sticker placement, and family milestone timelines.
- **Spatial Metaphor:** A heavyweight spiral-bound scrapbook laid open on a desk with matte photographs taped with decorative washi tape.
- **Component Composition:**
  - *Primitives:* `Paper-Tag` (photo date and GPS location tags), `Pastel Ribbon Tag` (album chapter tags along page edge), `Postage Stamp Deckle` (miniature thumbnail photo frames).
  - *Custom Paper Elements:* Semi-transparent floral washi tape strips; die-cut paper lace doilies.
- **Palette Implementation:** Soft Rose (`#FBCFE8`), Pastel Peach (`#F7C5A8`), Buttercup (`#FDE68A`), and archival photo white.

---

#### APP-17: Artisan Ceramic & Clay Inventory Workshop
- **Domain:** Artisan Studio Inventory & Kiln Batch Firing
- **Purpose:** Tracking ceramic vessels through greenware, bisque, glaze application, and kiln firing stages with shrinkage calculations.
- **Spatial Metaphor:** Wooden drying racks stacked with bisque-ware cards, clay batch swatches, and glaze recipe test tiles.
- **Component Composition:**
  - *Primitives:* `Pressed-in Active State` (kiln shelf temperature cone selector), `Sliding Matchbox Drawer` (glaze chemical formula cards), `Paper-Tag` (vessel inventory batch number).
  - *Custom Paper Elements:* Clay shrinkage ruler with embossed centimeter notches; circular glaze droplet swatch buttons.
- **Palette Implementation:** Terracotta Peach (`#F7C5A8`), Celadon Sage (`#A8D5BA`), Kaolin White (`#FFFDF9`), Unfired Clay Kraft (`#E2DAC8`).

---

#### APP-18: Quiet Meadow Meditation & Breath Pacer
- **Domain:** Mindfulness & Breath Regulation
- **Purpose:** Guided breathing exercise companion (4-7-8, box breathing) utilizing a mesmerizing expanding/contracting paper origami blossom.
- **Spatial Metaphor:** A circular water lily pool made of layered cardstock with petal folds that expand on inhalation and tuck inward on exhalation.
- **Component Composition:**
  - *Primitives:* `Origami Corner Fold` (daily meditation streak tracker), `Bookmark Strip Fan-Out` (breathing pattern selector), `Carved Inset Well` (session reflection journal).
  - *Custom Paper Elements:* 8-petal geometric origami lotus blooming via SVG transform rotations; concentric ripple ripples on cream water.
- **Palette Implementation:** Lavender Primary (`#C9C1F8`), Sage Tint (`#D2E8D4`), Soft Rose accents (`#FBCFE8`).

---

#### APP-19: Little Baker's Confectionery Calculator
- **Domain:** Baking Science & Recipe Scaling
- **Purpose:** Baker's percentage calculations, cake tin diameter conversions, and ingredient cost scaling for pastry chefs.
- **Spatial Metaphor:** A vintage French pastry shop recipe index surrounded by scalloped cake doilies and hand-inscribed recipe cards.
- **Component Composition:**
  - *Primitives:* `Scallop-Cut` (scalloped perimeter cake pan selector buttons), `Carved Inset Well` (flour / hydration percentage inputs), `Paper-Tag` (oven temperature and bake time tags).
  - *Custom Paper Elements:* Die-cut paper doily background mat; decorative scalloped measurement ruler.
- **Palette Implementation:** Soft Rose (`#FBCFE8`), Buttercup Tint (`#FEF3C7`), Cream Base (`#FAF7F0`), Cocoa Ink (`#2D2926`).

---

#### APP-20: Kirigami Architectural Blueprint Explorer
- **Domain:** Architectural Design & Floor Plan Viewing
- **Purpose:** Interactive 2.5D architectural floor plan viewer where walls, partitions, and staircases pop up from the page upon scrolling.
- **Spatial Metaphor:** An architectural pop-up book with laser-cut elevation models folding upright at 90-degree creases.
- **Component Composition:**
  - *Primitives:* `Ribbon Header` (Floor level selector tabs: Basement, Ground, Mezzanine, Roof), `Accordion Paper Fold` (structural materials specification sheet), `Cardstock Stack` (Measure and Dimension tools).
  - *Custom Paper Elements:* 45-degree isometric pop-up paper walls casting realistic directional floor shadows.
- **Palette Implementation:** Architect Cyan/Sky (`#BAE6FD`), Foundation Sage (`#A8D5BA`), Blueprint Ink (`#2D2926`).

---

#### APP-21: Whimsical Pet Sanctuary Adoption Registry
- **Domain:** Animal Rescue & Pet Care Management
- **Purpose:** Rescue animal profiles, medical vaccination tracking, adopter compatibility matching, and meet-and-greet bookings.
- **Spatial Metaphor:** An adoption kennel clipboard with dog/cat ear folded dossier folders and stamped vaccination records.
- **Component Composition:**
  - *Primitives:* `Paper-Tag` (collar tag displaying pet name, age, and breed), `Paper Stamp Mark` (rabies / microchip certification stamp), `Cardstock Stack` ("Submit Adoption Inquiry" button).
  - *Custom Paper Elements:* Punched paw-print airholes; folded paper pet collars.
- **Palette Implementation:** Warm Peach (`#F7C5A8`), Buttercup (`#FDE68A`), Sky Primary (`#BAE6FD`), Cream Base.

---

#### APP-22: Matchbox Card Deck & Solitaire Parlor
- **Domain:** Casual Gaming & Digital Card Playing
- **Purpose:** A serene, tactile Klondike and Spider Solitaire card game featuring bespoke paper-cut court cards and chip counters.
- **Spatial Metaphor:** A green baize desk with an authentic slide-out matchbox housing the card deck.
- **Component Composition:**
  - *Primitives:* `Sliding Matchbox Drawer` (card deck sleeve from which cards are dealt), `Cardstock Stack` (Undo Move and Hint buttons), `Origami Corner Fold` (sound effects and theme settings toggle).
  - *Custom Paper Elements:* Embossed cardstock playing cards with 3-layer cut face art; card-stacking cascade offset.
- **Palette Implementation:** Playing card face in Soft Rose (`#FBCFE8`) and Sky (`#BAE6FD`), mat in Sage Tint (`#D2E8D4`).

---

#### APP-23: Botanist's Greenhouse Climate & Sensor Dashboard
- **Domain:** Smart Agriculture & IoT Greenhouse Monitoring
- **Purpose:** Real-time monitoring of greenhouse temperature, soil moisture probes, ventilation flaps, and misting irrigation schedules.
- **Spatial Metaphor:** A wooden potting shed environmental telemetry board with paper-cut dial hygrometers and seed row tags.
- **Component Composition:**
  - *Primitives:* `Carved Inset Well` (threshold trigger inputs for automated misting), `Pastel Ribbon Tag` (zone selector: Tropical House, Succulent Bed, Orchid Ward), `Scallop-Cut` (fan speed toggle switches).
  - *Custom Paper Elements:* Cutout dial gauge with layered pointer needle casting shadow; paper plant silhouette health indicators.
- **Palette Implementation:** Sage Primary (`#A8D5BA`), Sky Primary (`#BAE6FD`), Buttercup Warning (`#FDE68A`).

---

#### APP-24: Vintage Clockmaker's Escapement & Timekeeper
- **Domain:** Utilities, World Clock & Chronograph
- **Purpose:** Multi-timezone international world clock, precision lap stopwatch, and chime alarm scheduler.
- **Spatial Metaphor:** The layered paper gears and escapement movement of a Black Forest cuckoo clock or wooden grandfather clock.
- **Component Composition:**
  - *Primitives:* `Pressed-in Active State` (stopwatch Split / Lap buttons), `Bookmark Strip Fan-Out` (international city timezone selector: London, Tokyo, New York, Paris), `Origami Corner Fold` (hourly chime toggle).
  - *Custom Paper Elements:* Intermeshed vector paper gear teeth with center eyelets; pendulum bob oscillating smoothly.
- **Palette Implementation:** Buttercup Primary (`#FDE68A`), Peach Primary (`#F7C5A8`), Ink Black (`#2D2926`).

---

#### APP-25: Fairytale Quest Character Sheet & Dice Roller
- **Domain:** Tabletop Roleplaying Games (TTRPG)
- **Purpose:** Player character stat management, spell slot tracking, inventory parchment, and 3D paper polyhedral dice rolling.
- **Spatial Metaphor:** An adventurer’s leather-bound field journal filled with fold-out map inserts, ink stat tallies, and inventory scrolls.
- **Component Composition:**
  - *Primitives:* `Scallop-Cut` (hit point and mana resource meters), `Origami Corner Fold` (spell memorization slots), `Carved Inset Well` (character backstory and equipment journal).
  - *Custom Paper Elements:* Wax-sealed letter quest log; icosahedron (d20) paper cutout dice tumbling with physics.
- **Palette Implementation:** Lavender Primary (`#C9C1F8`), Buttercup Primary (`#FDE68A`), Rose Tint (`#FCE7F3`), Kraft dividers.

---

#### APP-26: Paper City Transit & Tram Route Navigator
- **Domain:** Urban Navigation & Public Transit
- **Purpose:** Multi-modal public transit routing (tram, subway, ferry, cycling), schedule timetables, and mobile ticket validation.
- **Spatial Metaphor:** A fold-out pocket transit map with crisp accordion creases and die-cut tram tickets.
- **Component Composition:**
  - *Primitives:* `Accordion Paper Fold` (station-by-station itinerary list), `Postage Stamp Deckle` (single-ride transit pass with validated punch holes), `Cardstock Stack` ("Locate Nearest Tram" button).
  - *Custom Paper Elements:* Folded map crease overlays; route line strings connecting colored station dots.
- **Palette Implementation:** Sky Primary (`#BAE6FD`) for ferries, Peach (`#F7C5A8`) for trams, Lavender (`#C9C1F8`) for commuter rail.

---

#### APP-27: Floral Apothecary Remedy & Essential Oil Formulator
- **Domain:** Natural Remedies & Aromatherapy
- **Purpose:** Interactive herb-drug interaction checker, tincture dilution calculator, and bottle label printing studio.
- **Spatial Metaphor:** A multi-drawer apothecary cabinet containing amber glass dropper bottles labeled with hand-cut paper bands.
- **Component Composition:**
  - *Primitives:* `Paper-Tag` (botanical bottle label tags with string ties), `Sliding Matchbox Drawer` (medicinal herb property search drawers), `Carved Inset Well` (essential oil drop counter).
  - *Custom Paper Elements:* Apothecary measurement scale balance pan; embossed mortar and pestle emblem.
- **Palette Implementation:** Sage Primary (`#A8D5BA`), Soft Rose (`#FBCFE8`), Peach Tint (`#FDE2D1`).

---

#### APP-28: Shadowbox Museum Artifact Exhibition Curation
- **Domain:** Culture, Museum Arts & Archival Curation
- **Purpose:** Virtual gallery exhibition designer where curators position antiquities within layered shadowbox dioramas with museum didactic labels.
- **Spatial Metaphor:** Deep museum display cases with multi-tier matte board framing and warm directional spotlighting.
- **Component Composition:**
  - *Primitives:* `Carved Inset Well` (curatorial statement and artifact provenance notes), `Bookmark Strip Fan-Out` (historical period selector: Antiquity, Medieval, Baroque, Modern), `Pressed-in Active State` (exhibition lighting temperature toggles).
  - *Custom Paper Elements:* Beveled 45-degree museum matte board apertures; brass nameplate placards.
- **Palette Implementation:** Archival Cream (`#FAF7F0`), Antique Lavender (`#C9C1F8`), Deep Ink Charcoal (`#2D2926`).

---

#### APP-29: Little Treasury Piggy Bank & Savings Goal Vault
- **Domain:** Personal Finance & Micro-Savings
- **Purpose:** Visual savings envelope budgeting, rainy-day fund goals, and coin drop animations celebrating financial progress.
- **Spatial Metaphor:** An origami folded geometric paper piggy bank sitting beside labeled cash envelopes.
- **Component Composition:**
  - *Primitives:* `Pressed-in Active State` (Coin deposit buttons: $1, $5, $20, $100), `Pastel Ribbon Tag` (savings goal categories: Emergency, Vacation, Home), `Carved Inset Well` (target goal amount).
  - *Custom Paper Elements:* Top coin slot with realistic inner shadow; circular paper coins clinking into the bank.
- **Palette Implementation:** Pastel Peach (`#F7C5A8`), Buttercup Primary (`#FDE68A`), Sage Primary (`#A8D5BA`).

---

#### APP-30: Paper Craft Workshop Ticketing & Booking
- **Domain:** Creative Arts Events & Workshop Reservation
- **Purpose:** Booking seats for hands-on origami, bookbinding, and paper-cutting masterclasses with physical printable tickets.
- **Spatial Metaphor:** A ticketmaster’s wooden desk with perforated rolls of numbered vintage admission tickets.
- **Component Composition:**
  - *Primitives:* `Postage Stamp Deckle` (the admission ticket with perforated stub and QR code), `Scallop-Cut` (workshop skill level badges: Beginner, Intermediate, Master), `Cardstock Stack` ("Confirm Seat Reservation" button).
  - *Custom Paper Elements:* Perforated tear line with interactive drag-to-tear gesture that separates stub from ticket.
- **Palette Implementation:** Soft Rose Primary (`#FBCFE8`), Sage Tint (`#D2E8D4`), Buttercup (`#FDE68A`), Ink Black.

---

## 6. Implementation Guidelines & Code Recipes

### 6.1 SVG Filter Presets for Handcrafted Fiber

To impart a delicate handmade cardstock texture without costly raster images, apply this lightweight procedural SVG turbulence filter:

```html
<svg class="pc-filter-def" style="display: none;">
  <defs>
    <!-- Paper Grain Texture Filter -->
    <filter id="pc-paper-grain" x="0%" y="0%" width="100%" height="100%">
      <feTurbulence 
        type="fractalNoise" 
        baseFrequency="0.04 0.04" 
        numOctaves="3" 
        result="noise" 
      />
      <feColorMatrix 
        type="matrix" 
        values="0 0 0 0 0.98
                0 0 0 0 0.97
                0 0 0 0 0.94
                0 0 0 0.04 0" 
        result="colorNoise" 
      />
      <feComposite operator="in" in2="SourceGraphic" />
      <feBlend mode="multiply" in="SourceGraphic" result="blend" />
    </filter>
  </defs>
</svg>
```

Apply in CSS via:
```css
.pc-textured-paper {
  filter: url('#pc-paper-grain');
}
```

### 6.2 Scalloped and Deckle Edge CSS Mask Utilities

Create reusable scalloped paper edges dynamically without external image dependencies:

```css
/* Scalloped Horizontal Bottom Edge */
.pc-edge-scallop-bottom {
  --s: 14px; /* Scallop size */
  --r: 7px;  /* Scallop radius */
  mask-image: radial-gradient(var(--r) at 50% calc(100% - var(--r)), #000 98%, #0000 101%),
              linear-gradient(#000 calc(100% - var(--r)), #0000 0);
  mask-size: var(--s) 100%, 100% 100%;
  mask-repeat: repeat-x, no-repeat;
}

/* Postage Stamp Perforated Edge (All 4 Sides) */
.pc-edge-postage-stamp {
  position: relative;
  background: var(--pc-bg-sheet-light);
  border: 1px solid var(--pc-border-kraft);
  mask: 
    radial-gradient(circle 5px at 0 0, #0000 98%, #000 102%) 0 0 / 16px 16px,
    radial-gradient(circle 5px at 100% 100%, #0000 98%, #000 102%) 0 0 / 16px 16px;
}
```

### 6.3 Building a Layered Cardstock Component

Below is a complete HTML and CSS blueprint for assembling an authentic layered paper card with an origami tag:

```html
<article class="pc-card">
  <!-- Backing Shadow Sheet -->
  <div class="pc-card__shadow-sheet"></div>
  
  <!-- Middle Accent Sheet -->
  <div class="pc-card__accent-sheet"></div>

  <!-- Primary Face Sheet -->
  <div class="pc-card__face">
    <!-- Origami Corner Tag -->
    <div class="pc-card__corner-tag" aria-hidden="true"></div>

    <header class="pc-card__header">
      <span class="pc-badge pc-badge--sage">Field Journal</span>
      <h3 class="pc-card__title">Botanical Specimen #042</h3>
    </header>

    <div class="pc-card__body">
      <input type="text" class="pc-input-well" placeholder="Add specimen notes..." />
    </div>

    <footer class="pc-card__footer">
      <button class="pc-button-stack">
        <span>Archive Sheet</span>
      </button>
    </footer>
  </div>
</article>
```

```css
.pc-card {
  position: relative;
  width: 340px;
  background: transparent;
}

.pc-card__shadow-sheet {
  position: absolute;
  inset: 0;
  background-color: var(--pc-border-kraft);
  border-radius: var(--pc-radius-lg);
  transform: translate(6px, 6px);
  z-index: 1;
}

.pc-card__accent-sheet {
  position: absolute;
  inset: 0;
  background-color: var(--pc-lavender-tint);
  border-radius: var(--pc-radius-lg);
  transform: translate(3px, 3px);
  z-index: 2;
}

.pc-card__face {
  position: relative;
  background-color: var(--pc-bg-sheet-light);
  border: 1px solid var(--pc-border-kraft);
  border-radius: var(--pc-radius-lg);
  padding: 24px;
  z-index: 3;
  box-shadow: 
    0 4px 12px -2px rgba(74, 60, 49, 0.10),
    0 1px 2px 0 rgba(74, 60, 49, 0.06);
}

.pc-card__corner-tag {
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 28px 28px 0;
  border-color: transparent var(--pc-peach-primary) transparent transparent;
  filter: drop-shadow(-1px 2px 2px rgba(74, 60, 49, 0.15));
}
```

---

## 7. Glossary & Architectural Principles

1. **Cardstock Density (gsm):** Simulated weight of the virtual paper substrate. Higher gsm layers cast broader, more diffuse shadows.
2. **Deckle Edge:** An irregular, untrimmed, feathery paper boundary naturally formed during manual papermaking in a deckle frame.
3. **Kirigami:** The Japanese art of paper cutting and folding, forming pop-up structures from a single sheet without adhesives.
4. **Origami:** The Japanese art of paper folding without cutting, forming intricate geometric structures solely through creasing.
5. **Score Line:** A compressed indentation made on cardstock that facilitates clean, crack-free folding along a vector path.
6. **Shadowbox:** A glass-fronted case containing three-dimensional artistic scenes composed of staggered cut-paper planes arranged in depth.
7. **Warm Shadow:** Drop shadows rendered with umber and sienna chromatic components (`rgba(74, 60, 49, *)`), replacing sterile cold digital black.
8. **Washi Paper:** Traditional Japanese handmade paper formed from gampi, mitsumata, or kozo mulberry fibers, known for softness and tactile warmth.

---

## 8. Advanced Extensions: 14 Themes, Non-Identical Layering & 30 Icon Mastercraft

### 8.1 14 Curated Pastel Palette Presets
1. **Warm Mint & Buttercup (`theme-cream`)**: `#FAF7F0` substrate, `#A3D8C3` mint accents, `#FEE396` buttercup glow.
2. **Sunset Peach & Rose (`theme-peach`)**: `#FFFDF9` substrate, `#F7BA9E` peach face, `#F5B8BE` blush backing.
3. **Lavender Dream & Sky (`theme-lavender`)**: `#FAF8FE` substrate, `#D7CBEB` lavender, `#BDE0EA` clear summer sky.
4. **Buttercup Sun & Mint (`theme-buttercup`)**: `#FFFDF5` substrate, `#FEE396` sunlight, `#A3D8C3` fresh sprout.
5. **Summer Sky & Mint (`theme-sky`)**: `#F6FBFE` substrate, `#BDE0EA` aerial blue, `#A3D8C3` mint breeze.
6. **Cherry Blossom Rose (`theme-cherry`)**: `#FEF7F8` substrate, `#F5B8BE` petal pink, `#F7BA9E` warm apricot.
7. **Matcha Sage & Buttercup (`theme-matcha`)**: `#F8FAF6` substrate, `#BBD5B8` dried sage, `#FEE396` sweet honey.
8. **Cotton Candy Pink (`theme-cotton-candy`)**: `#FDF9FD` substrate, `#F5B8BE` spun sugar, `#BDE0EA` pastel cotton.
9. **Lemon Chiffon & Mint (`theme-lemon`)**: `#FFFEF7` substrate, `#FFF099` citrus curd, `#C8E8D5` crisp mint.
10. **Twilight Indigo & Gold (`theme-twilight`)**: `#F6F4FA` substrate, `#C8B8E8` dusk violet, `#FEE396` starlight.
11. **Apricot Coral & Rose (`theme-apricot`)**: `#FFF9F5` substrate, `#F8C39E` ripe apricot, `#F5A8B2` coral rose.
12. **Eucalyptus Forest (`theme-eucalyptus`)**: `#F5F9F6` substrate, `#A3CCA0` silver eucalyptus, `#C8B8E8` mist lavender.
13. **Berry Crumble & Sky (`theme-berry`)**: `#FAF5F8` substrate, `#E8A8C2` wild raspberry, `#BDE0EA` powder glaze.
14. **Vintage Teddy Craft (`theme-teddy`)**: `#FAF6F0` substrate, `#E2CCA8` warm kraft teddy, `#F7BA9E` baked peach.

### 8.2 Non-Identical 3-Layer Button Architecture
Authentic layered paper-cut art avoids concentric, machine-like borders. Instead, each button features three distinct sheets with deliberate geometric discrepancies:
- **Face Layer 3 (Foreground):** Balanced rounded rect (`border-radius: 16px`), knife-cut white top bevel highlight (`0 1px 0 rgba(255,255,255,0.95) inset`).
- **Middle Layer 2 (`::before`):** Asymmetric organic petal/wave cut (`border-radius: 20px 8px 18px 10px`), shifted 3px right and 3px down.
- **Bottom Layer 1 (`::after`):** Distinct deckle curve (`border-radius: 8px 24px 10px 22px`), shifted 6px right and 6px down.
- **Organic Classes:**
  - `.pc-btn-organic-scallop`: Wave-cut cloud contouring.
  - `.pc-btn-organic-ribbon`: Swallowtail banner trailing edge.
  - `.pc-btn-organic-leaf`: Botanical asymmetric leaf apex curves.

### 8.3 Matte Cream 3D Art Pulp Shader Engine & Universal UI Texture Extension
Surface realism is synthesized entirely in CSS + inline SVG procedural shaders without raster image files (0-byte payload):

#### 8.3.1 The 3 Procedural Texture Pillars
1. **Micro-Pulp Elevation via `<feDiffuseLighting>`:**
   `<feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" />` coupled with `<feDistantLight azimuth="45" elevation="55" />` produces realistic 3D shadow depressions across fibrous cardstock.
2. **Diffuse Radial Ambient:**
   `background: radial-gradient(circle at 35% 25%, rgba(255,255,255,0.7) 0%, rgba(250,246,237,0.2) 55%, rgba(215,200,180,0.25) 100%)`.
3. **1px Clean Vector Knife-Cut Bevel:**
   `box-shadow: 0 1.5px 0 rgba(255,255,255,0.98) inset, 0 -1.5px 0 rgba(74,58,42,0.08) inset`.

#### 8.3.2 Extending Paper Texture to Other UI Elements (`.pc-texture-paper`)
This tactile paper texture is fully modular and can be effortlessly applied to buttons, input fields, modal cards, and icon badges via a single reusable CSS class:
- **Zero-Markup Injection via Pseudo-Elements:**
  `.pc-texture-paper::before` injects the SVG data-URI procedural pulp shader at `mix-blend-mode: multiply` and `opacity: 0.32`.
- **Edge Bevel Injection:**
  `.pc-texture-paper::after` injects the 1.5px white cut-edge highlight (`rgba(255,255,255,0.95)`).
- **Z-Index Containment:**
  Using `isolation: isolate` guarantees the blend mode stays within the component boundary and doesn't pollute ancestor backgrounds.
- **Available Variants:**
  - `.pc-texture-paper` / `.pc-surface-cotton`: 300g heavyweight cotton watercolor paper.
  - `.pc-texture-hanji`: Mulberry fiber traditional Korean Hanji with directional fibers.
  - `.pc-texture-kraft`: 350g recycled unbleached kraft paperboard.

### 8.4 529 Standalone Layered Paper-Cut Icon System (Flaticon 500+ Complete Taxonomy & Kirigami Motifs)
529 mastercrafted 64x64px freestanding kirigami paper-cut illustrations with **zero background box or badge tiles**:
- **Pure Paper-Cut Silhouette Construction:** Each icon object is assembled out of 3–6 overlapping cardstock shapes (Mint `#A3D8C3`, Peach `#F7BA9E`, Lavender `#D7CBEB`, Buttercup `#FEE396`, Sky `#BDE0EA`, Rose `#F5B8BE`, Sage `#BBD5B8`, Cream `#FFFDF9`/`#FAF6ED`, Charcoal `#3D352E`).
- **Physical In-Object Shadows & Crisp Edge Rendering:**
  - Self-contained `<defs><filter id="ps-{unique-id}">` casting warm umber shadows (`<feDropShadow dx="0" dy="2.5" stdDeviation="1.5" flood-color="#4A3A2A" flood-opacity="0.18"/>`) between the overlapping paper pieces within the icon itself.
  - **No Compounding CSS Blur:** External `.pc-inline-icon svg` has CSS `filter: none !important;` to eliminate double-blur rasterization artifacts.
  - **Subpixel Geometric Precision:** Configured with `shape-rendering: geometricPrecision; text-rendering: geometricPrecision; image-rendering: -webkit-optimize-contrast;` for razor-sharp vector anti-aliasing on high-DPI displays.
- **Flaticon 500+ Complete Taxonomy Breakdown (529 Icons Across 14 Categories):**
  1. **UI & Systems (126 icons):** Home & Cottage, Magnifier, Craft Gear, Wastebasket, Pencil & Note, Plus/Minus Seals, Check Ribbon, Close Cross, Info Badge, Warning Triangle, Funnel Sieve, Connected Nodes, Chain Links, Eye/Slash, Padlock/Open, Brass Key, Heraldic Shield, Chevron Arrows (Right, Left, Up, Down), Voyage Compass, Refresh Sync, Undo/Redo Curves, Grid Matrix, List Checklist, Sliders Filter, Download/Upload Trays, External Link, Bookmark, Star Rating, Battery Status, Wifi Waves, Signal Bars, Bell Notification, Pin Needle, Globe Meridians, Code Brackets, Terminal Shell, Bug Beetle, Database Stack, Server Tower, Cloud Storage, Folder Tab, File Sheet, Trash Can, Scissors, Lock Dial, Fingerprint, Face ID, QR Code, Barcode, Prohibited / Ban Mark, etc.
  2. **Communication & Messaging (58 icons):** Folded Envelopes (open, unread, starred, sent, reply, forward, attachment), Speech Bubbles, Retro Phone, Voicemail Tape, Megaphones, Broadcast Tower, Radio Waves, RSS Feed, Notification Chime Bells, Comments, Block Quotes, Discussion Forums, Walkie-Talkies, Audio Voice Memos, etc.
  3. **User & Social (56 icons):** User Silhouette, Dual Group, Contact Book, Profile Card, User Add/Remove/Check/Star/Crown/Shield/Doctor/Artist/Tie/Graduate, Team Conference, Handshake Agreement, Stamped Signatures, Quill Inkpot, Thumbs Up/Down, Clapping Hands, Royal Medals, Trophy Cups, Award Laurels, Rosette Badges, Security Lanyards, etc.
  4. **Commerce & Shopping (48 icons):** Wire Shopping Carts, Shopping Totes, Bifold Wallets, Credit Cards, Gift Boxes with Bows, Gift Ribbon Bow, Parcel Package, Price Tags, Deckle Receipts, Gold Coins, Cash Banknotes, Barcode Scanners, Sale Percent Tags, Shipping Boxes, Delivery Vans, Open/Closed Shop Signs, Price Labels, Loyalty Cards, Stamp Cards, Cash Registers, Vault Safes, Piggy Banks, etc.
  5. **Finance & Payments (41 icons):** Bank Building Facades, Vault Safes, Stacked Coin Columns, Currency Notes, Rising Trend Stocks, Candlestick Graphs, Wallet Clips, Credit Chips, NFC Contactless Waves, Calculator Keypads, Revenue Pies, Tax Folders, Ledger Books, Diamond Gems, Investment Seeds, Gold Bullion Bars, Cheque Sheets, Balance Scales, etc.
  6. **Food & Cafe (37 icons):** Coffee Mugs, Teapots, Honey Pot, Butter Slice & Pat, Espresso Pour, Coffee Beans, Teabag Tags, Flaky Croissants, French Baguettes, Bakery Loaves, Cupcakes, Pancake Stacks, Square Waffles, Bitten Cookies, Chocolate Bars, Glazed Donuts, Ice Cream Sundaes, Lollipops, Milkshakes, Wine Goblets, Citrus Cocktails, Beer Steins, Juice Boxes, Crisp Apples, Cherry Pairs, Strawberries, Avocados, Carrots, Broccoli, Pizza Slices, Stacked Burgers, etc.
  7. **Media & Audio (34 icons):** Play/Pause/Stop Wedges, Speaker Cones, Mute Audio, Over-ear Headphones, Beamed Eighth Notes, Treble Clef, Vinyl Records, Turntables, Retro Radios, Cassette Tapes, Boomboxes, Stage Microphones, Acoustic Guitars, Piano Keyboards, Podcast Mics, Video Clapperboards, Film Reels, Cinema Screens, Retro TVs, Projectors, Studio Softboxes, Webcams, Camera Lenses, Apertures, Instant Polaroids, etc.
  8. **Devices & IT (29 icons):** Tablets with Stylus, E-Readers, Desktop Towers, CPU Microchips, Motherboards, RAM Memory Sticks, USB Flash Drives, Hard Disk Drives, Wi-Fi Routers, Bluetooth Nodes, Satellite Dishes, Game Controllers, Arcade Cabinets, VR Headsets, Battery Cells (full, low, charging), Power Cables, Wall Sockets, Lightbulb Ideas, Solar Panels, Wind Turbines, Smartwatches, Smartphones, Laptops, Monitors, etc.
  9. **Nature, Botanical & Fauna (39 icons):** Friendly Puppy (Dog), Cozy Cat, Pet Paw Print, Kirigami Butterfly, Peace Dove, Fresh Lemon, Warm Apricot, Wild Blueberries, Bamboo Stalks, Puffy Cloud, Crescent Moon, Cosmic Galaxy, Campfire Flame, Radiant Suns, Sprout Seedlings, Botanical Leaves, Sakura Blossoms, Scallop Trees, Layered Mountain Peaks, Pine Trees, Tropical Palms, Potted Houseplants, Tulips, Sunflowers, Desert Cacti, Maple Leaves, Four-leaf Clovers, Seedlings, Lilypads, Geode Crystals, Scallop Marine Shells, Honeycombs, etc.
  10. **Travel, Landmarks & Mobility (29 icons):** Torii Shrine Gate (Kyoto), Eiffel Tower (Paris), Matterhorn Alpine Peak (Swiss), First-Class Aircraft Seat, Passenger Airliners, Retro Bubble Cars, Travel Luggage Trunks, Transit Buses, Railway Locomotives, High-speed Trains, Sailing Yachts, Anchors, Ship Helm Wheels, Bicycles, Scooters, Cable Cars, Hot Air Balloons, Road Signs, Map Foldouts, Navigation Pins, Passport Books, Boarding Passes, Compasses, Campfires, Camping Tents, etc.
  11. **Lifestyle, Craft & Celebration (16 icons):** Cozy Fireplace, Flower Bouquet, Open Storybook, Vintage Teddy Bear, Mystical Crystal Ball, Papercraft Sparkles, Crossed Cutlery, Artist Paint Palettes, Drafting Pencils, Admission Tickets, Magic Wands, Chef Hats, Graduation Caps, Scissors, Sewing Needles, Paintbrushes.
  12. **Weather & Climate (6 icons):** Sunburst Clouds with Rays, Rain Clouds with Droplets, Peeking Sun Clouds, Symmetrical Snowflakes, Electric Lightning Bolts, Crescent Moons & Stars.
  13. **Time & Calendar (4 icons):** Wall Clocks, Tear-off Calendars, Wooden Hourglasses, Precision Stopwatches.
  14. **Documents & Paper (4 icons):** Ancient Scroll, Dog-Ear Notepads, Manila Tab Folders, Checklist Clipboards.
- **Interactive Icon Explorer:**
  - Real-time bilingual Korean/English/Tag search (`#icon-search-input`).
  - 15 pill category buttons (`.pc-icon-cat-btn`) supporting individual and multi-category tags.
  - Dynamic count badge (`#icon-count-badge`) dynamically reflecting total library count (529).
  - One-click copy raw self-contained SVG to clipboard with animated Paper Toast notification.

#### 8.4.1 Inline Paper-Cut Icon System (`.pc-inline-icon` & `data-icon` Auto-Hydration)
All Unicode emojis throughout the library's UI components (buttons, input prefixes, badges, dropdown items, headers, option tags) have been replaced with real standalone 3D paper-cut icons:
- **Zero-Boilerplate Declarative Markup:**
  ```html
  <button class="pc-btn pc-btn-mint">
    <span class="pc-inline-icon" data-icon="coffee"></span>
    <span>따스한 커피 주문하기</span>
  </button>
  ```
- **Automatic Client-Side Hydration:**
  `window.hydratePapercutIcons(root = document)` automatically queries all `[data-icon]` elements and injects the corresponding freestanding SVG with micro drop shadows and scalable vector sizing.
- **Upgraded Ergonomic Dimensions (Enhanced Size & Sharpness):**
  - `.pc-inline-icon`: Default UI icon (**1.55em**, ~24px-26px, providing clear vector visibility for fine paper cuts).
  - `.pc-inline-icon.is-xs`: Subtle micro hint (1.15em).
  - `.pc-inline-icon.is-sm`: Compact tag and dropdown prefix (1.35em).
  - `.pc-inline-icon.is-md`: Section header icon (1.85em).
  - `.pc-inline-icon.is-lg`: Prominent category icon (2.4em).
  - `.pc-inline-icon.is-xl`: Featured visual anchor (3.2em).
  - `.pc-inline-icon.is-badge-icon`: Centered inside background plates and shape badges (**76% container fill**, max 58x58px).
  - `.pc-inline-icon.is-input-icon`: Form input leading/trailing slot (24px fixed).
- **Paper Dropdown Auto-Enhancement with Icon Support:**
  `autoEnhanceSelectsToPaperDropdowns()` detects option `data-icon` attributes or leading icon keywords, generating interactive `.pc-dropdown-item` buttons with `<span class="pc-inline-icon is-sm">` and syncing both icon and label to the active trigger.

### 8.5 130 Curated 3D Paper-Cut Icon Background Plates (Zero-Box Compliant Modularity)
To provide flexible visual hierarchy when icons need backing badges, buttons, or category tiles without compromising the freestanding kirigami philosophy, the library includes **130 Curated Layered Paper-Cut Background Plates** (26 unique shapes each across 5 design archetypes):
- **Design Archetypes (5 Categories, 26 Shapes Each):**
  1. **Classic Philatelic & Seals (`classic`, 26 shapes):**
     - `postage-stamp`: Vintage 16-hole perforated edge postage stamp (`#BBD5B8` Sage + `#FFFDF9` Cream + Mint postmark).
     - `wax-seal`: Antique melted puddle rim with recessed center stamp well (`#F5B8BE` Dusty Rose + `#F7BA9E` Peach).
     - `notched-ticket`: Semicircular double-notched cinema stub with perforation tear line (`#FEE396` Buttercup + `#FFFDF9`).
     - `deckle-edge`: Organic frayed cotton deckle edge paper with hairline border (`#FAF6ED` Cream + `#F0E8DC` Kraft).
     - `hanging-tag`: Chamfered luggage/price tag with reinforced brass eyelet & twine loop (`#F7BA9E` Peach + `#FEE396`).
     - `cog-seal`: 16-point rosette star gear with circular cream disc & ribbon tails (`#D7CBEB` Lavender + `#F5B8BE` Rose).
     - *Additional 20 shapes:* Circular Postmark, Embossed Medal, Ledger Receipt, Perforated Strip, Notary Star Seal, Luggage Label, Calligraphy Card, Brass Fastener Plate, Cancellation Waves, Library Pocket, Coin Medallion, Signet Ring Oval, Certificate Frame, Parchment Scroll, Airmail Slanted Frame, Monogram Shield, Telegram Morse Strip, Customs Triangle Stamp, Gold Foil Seal, Curled Manuscript Scroll, etc.
  2. **Nature & Organic Forms (`nature`, 26 shapes):**
     - `pebble-organic`: Asymmetric river pebble with Bézier curves & paper reflection (`#A3D8C3` Mint + `#BBD5B8` Sage).
     - `cloud-puffy`: 6-scallop cumulus cloud with warm peeking sun glow (`#BDE0EA` Sky + `#D7CBEB` Lavender + `#FFFDF9`).
     - `blossom-petal`: 5 overlapping rounded cherry blossom petals with center pistil basin (`#F5B8BE` Rose + `#F7BA9E`).
     - `clover-leaf`: 4 interlocking heart-shaped clover lobes with center leaf slits (`#A3D8C3` Mint + `#BBD5B8`).
     - `droplet-tear`: Tapered teardrop silhouette pointing up-right with specular curve (`#BAE6FD` Sky + `#D7CBEB`).
     - `gingko-fan`: Flared gingko fan with characteristic notch and fluted rib veins (`#FEE396` Buttercup + `#F8C39E`).
     - *Additional 20 shapes:* Monstera Leaf, Succulent Rosette, Acorn Cupule, Lotus Pad, Whimsical Mushroom Cap, Spring Tulip Cup, Marine Scallop Shell, Honeycomb Flora, Pinecone Scale, Maple Leaf Plate, Wave Crest, Crystal Geode, Sprout Seedling Base, Sunflower Disc, Bamboo Node Plate, Camellia Double Petal, Fern Leaf Fan, Sea Coral Branch, Aurora Wave Ribbon, Graceful Feather Tray, etc.
  3. **Architectural & Geometric Polyhedra (`geo`, 26 shapes):**
     - `arch-shrine`: Romanesque semicircular vaulted arch with bottom architectural plinth (`#D7CBEB` Lavender + `#F5B8BE`).
     - `squircle-offset`: Triple superellipse squircle with asymmetric rotational card shifts (`#F7BA9E` Peach + `#A3D8C3`).
     - `hexagon-honeycomb`: Regular rounded hexagon with 3D faceted bottom amber shading (`#FEE396` Buttercup + `#F8C39E`).
     - `octagon-gem`: Chamfered emerald-cut octagon with corner facet crease lines (`#BBD5B8` Sage + `#BDE0EA` Sky).
     - `quatrefoil-gothic`: 4 intersecting circular gothic lobes with cusp diamond pins (`#C8B8E8` Twilight + `#FEE396`).
     - `star-burst-8`: 8-pointed starburst with convex petal tips & stitched cream medallion (`#FEE396` + `#F7BA9E`).
     - *Additional 20 shapes:* Isometric Cube Pedestal, Trapezoid Pedestal, Pointed Gothic Arch, Lozenge Diamond, Stadium Pill Capsule, Pagoda Roof, Stepped Ziggurat, Celtic Triquetra Knot, Chevron Shield, Dodecagon Clock Dial, Dome Observatory, Bridge Keystone, Torus Ring Disc, Classical Pillar Capital, Octagram Star Mandala, Triangular Prism Pedestal, Rhombus Cascade Tile, Hourglass Polygon, Circular Labyrinth Disc, Stepped Chevron Tier, etc.
  4. **Folded Craft & Stationery Paper (`craft`, 26 shapes):**
     - `dog-ear-card`: Thick cream card with folded-over triangular corner flap & shadow (`#FFFDF9` + `#A3D8C3` Mint).
     - `washi-tape-strip`: Square cardstock pinned by a diagonal translucent jagged washi tape (`#F7BA9E` + `#A3D8C3`).
     - `accordion-ribbon`: Raised card with folded 3D ribbon ends tucked beneath (`#BDE0EA` Sky + `#D7CBEB` Lavender).
     - `bookmark-pennant`: Vertical banner with deep bottom V-notch & top star rivet (`#F5B8BE` Rose + `#F7BA9E` Peach).
     - `slide-matchbox`: Kraft outer sleeve frame with partially extended mint inner drawer (`#E2CCA8` + `#A3D8C3`).
     - `envelope-pocket`: Lavender envelope pocket with folded V-collar flaps & heart wax seal (`#D7CBEB` + `#F7BA9E`).
     - *Additional 20 shapes:* Paperclip Memo Sheet, Spiral Notepad Top Wire, Binder Tab Folder, Origami Pinwheel, Pushpin Memo Card, Photo Corner Mount, Origami Fortune Teller, Diagonal Sash Bellyband, Ticket Stub Booklet, Quilted Origami Tessellation, Pop-up Book Stage, Tri-fold Creased Flyer, Hanging Clip Clipboard, Origami Hexagonal Envelope, Eyelet Reinforcer Tag, Origami Boat Pedestal, Stitched Seam Memo Card, Fan-Fold Rosette Plate, Decorative Envelope Liner, Corner Ribbon Photo Mount, etc.
  5. **Whimsical Modern & Kirigami (`whimsical`, 26 shapes):**
     - `scallop-sunburst`: Continuous 12-scallop wavy circular tray with punched eyelets (`#FEE396` + `#A3D8C3`).
     - `bubble-trio`: 3 merged intersecting bubble circles forming an organic pod (`#BDE0EA` Sky + `#D7CBEB`).
     - `polaroid-frame`: Classic white photo frame with wide bottom caption margin & photo corners (`#FFFDF9` + `#FDE2D1`).
     - `diamond-kite`: 45-degree tilted diamond kite with bottom apex string & bow ribbons (`#F7BA9E` + `#BDE0EA`).
     - `clamshell-oval`: Upright egg-oval contour with fluted wavy scallop bottom edge (`#D7CBEB` + `#BBD5B8`).
     - `shield-crest`: Medieval curved shield with pointed apex & dual-tone chevron tier (`#BBD5B8` + `#FEE396`).
     - *Additional 20 shapes:* Fairytale Magic Hand Mirror, Castle Turret, Star Wand Sparkle, Crescent Moon Cradle, Heart Medallion Pendant, Swiss Cross Rescue Shield, Hot Air Balloon Basket, Vintage Pocket Watch Fob, Norman Kite Shield, Origami Crane Wings, Crystal Snow Prism, Ribbon Rosette Trophy, Circus Big-Top Canopy, Secret Garden Fairy Door, Whimsical Compass Fleur, Floating Cloud Island, Alchemist Potion Flask, Festive Paper Lantern, Treasure Chest Dome, Music Score Staff Wave, etc.
- **Interactive Live Preview:**
  - Real-time icon selector dropdown mounts any of our 500 icons into all 130 background shapes simultaneously.
  - One-click SVG code copy (including nested icon and isolated filters).
  - One-click CSS class copy (`.pc-icon-badge` + shape modifiers).

---

*Authored by the Layered Paper-cut UI Architecture Team.*  
*All rights reserved. Ready for immediate component library scaffolding.*

