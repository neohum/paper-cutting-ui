# lat.md — Agent Lattice for paper-cutting-ui

> A *map* of this repo for the agents. Keep it short, factual, and current.
> When you delete or move a top-level directory, update this file in the same commit.

## Top-level layout

```
.
├── index.html                  # 30 interactive apps, 45 PC components, 6 charts showcase
├── icon-simulator.html         # Dual Studio Icon Simulator (16~28px line vs 32~256px 3D paper)
├── papercut.css                # Core PaperCut UI stylesheet (B Standard 2-Tier 4.5px 48% Stacking)
├── papercut.js                 # Interactions, dropdowns, haptic press, toasts, audio synth
├── papercut-icons.js           # 678-icon registry (659 SVGs + 19 aliases) & scale-based engine
├── papercut-shadow-studio.*    # 3D Depth & Shadow physics simulation lab
├── papercut-ui.*           # 45 PC UI papercraft components
├── papercut-paper-layer.*  # SVG paper layer engine (data-pc-paper) for PC components
├── papercut-blocks-charts.*    # 6 production blocks & 6 vector charts
├── papercut-alerts-toasts.*    # Alerts & toasts system
├── papercut-sidebar.*          # Responsive left-aligned navigation sidebar
├── DESIGN_SYSTEM.md            # Comprehensive design system master specification
├── DESIGN.md                   # UI/UX tokens & component contract
└── docs/                       # Architecture decision records (ADRs) & audits
```

## Module ownership

| Path                        | Purpose                                    | Owner    | Touched by                  |
| --------------------------- | ------------------------------------------ | -------- | --------------------------- |
| `index.html`                | Primary web showcase & playground          | _lead_   | architect, builder          |
| `icon-simulator.html` / `*` | Dual Studio Icon Simulator & Physics Lab   | _lead_   | architect, builder          |
| `papercut.css`              | Core CSS tokens, elevation & components    | _lead_   | architect, builder          |
| `papercut-icons.js`         | 678 Kirigami icon system & hydration       | _lead_   | architect, builder          |
| `papercut-shadow-studio.*`  | 3D multi-tier shadow engine                | _lead_   | architect, builder          |
| `papercut-ui.*`         | 45 PC UI paper component adaptations   | _lead_   | architect, builder          |
| `papercut-paper-layer.*` | SVG cardstock layer engine for PC components | _lead_ | architect, builder |
| `papercut-blocks-charts.*`  | Scenario blocks & 3D vector data charts    | _lead_   | architect, builder          |
| `DESIGN_SYSTEM.md`          | Master design specification & app taxonomy | _lead_   | architect                   |
| `DESIGN.md`                 | Single source of truth for UI/UX contracts | _lead_   | architect                   |

## Dependency edges (high-signal only)

- `app/*` → `lib/*` (UI consumes domain — never the other way)
- `lib/server/*` is `server-only` — never imported from `app/(client)`
- `scripts/*` may import `lib/*` but not `app/*`

## External integrations

| System    | Where it lives        | Notes                       |
| --------- | --------------------- | --------------------------- |
| _GitHub_  | `lib/integrations/gh` | _PAT in `GITHUB_TOKEN` env_ |
| _DB_      | `lib/db`              | _drizzle schema in `…`_     |

## Don't-touch list

- `…` — frozen, requires sign-off
