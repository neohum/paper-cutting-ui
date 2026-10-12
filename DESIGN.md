# DESIGN.md — UI/UX system for paper-cutting-ui

> The single source of truth for visual + interaction conventions.
> Agents touching view code MUST consult this first.

## Tokens (PaperCut UI Authentic Palette)

| Token            | Value             | Use                     |
| ---------------- | ----------------- | ----------------------- |
| `color.bg`       | `#F8F4EC`         | matte cream page canvas |
| `color.paper`    | `#FFFDF9`         | elevated paper sheet    |
| `color.fg`       | `#3D352E`         | natural warm charcoal ink |
| `color.muted`    | `#7D7368`         | secondary muted text    |
| `color.mint`     | `#A3D8C3`         | primary affirmative / nature |
| `color.peach`    | `#F7BA9E`         | energetic action buttons |
| `color.lavender` | `#D7CBEB`         | structure, navigation   |
| `color.buttercup`| `#FEE396`         | warnings, stars, accents|
| `color.sky`      | `#BDE0EA`         | information, links      |
| `color.danger`   | `#F5B8BE`         | soft rose destructive   |
| `shadow.contact` | `0 1.2px 2px rgba(46, 30, 20, 0.48)` | 2-Tier knife contact edge |
| `shadow.elevated`| `0 4.5px 10px rgba(46, 30, 20, 0.26)`| 4.5px 48% stacking standard |
| `radius.sm`      | `10px`            | inputs, small cards     |
| `radius.md`      | `16px`            | cards, dialogs, modals  |
| `radius.lg`      | `24px`            | containers, hero panels |
| `radius.pill`    | `999px`           | badges, search capsules |
| `space.unit`     | `4px`             | base spacing grid       |
| `font.sans`      | `'Nanum Square Round', -apple-system, sans-serif` | body & UI (Korean-capable) |
| `font.hand`      | `'Gaegu', cursive, sans-serif` | handcrafted craft accents |
| `font.mono`      | ui-monospace, monospace | code, IDs, parameters   |

## Components — contract

### Button
- variants: `primary | secondary | ghost | danger`
- sizes: `sm | md` (md is default)
- always reachable by keyboard; visible focus ring `2px solid color.accent`
- loading state replaces children with spinner — width stays stable
- **Perfect Centering:** button text and icons must be perfectly centered (`inline-flex items-center justify-center leading-none`) with `i.flex.items-center.justify-center.leading-none` to prevent baseline misalignment and vertical drift

### Input
- label is **never** placeholder-only
- error renders below in `color.danger`, with `aria-describedby` wired

### Card
- padding `space.unit * 4`, radius `radius.md`
- no shadow; uses a 1px `color.muted` border at 24% opacity
- **Anti-Fingernail Standard:** no asymmetric single-side thick borders combined with rounded corners (`border-l-4 rounded-*`); use balanced symmetric borders or background fills

## Language & typography

- pages declare `<meta charset="utf-8">` and default to `<html lang="ko">`
- UI copy defaults to Korean (see `AGENTS.md` → *Working language & encoding*)
- the `font.sans` stack always carries Korean-capable fallbacks — never ship a
  Latin-only webfont without them
- **Korean Line-Break & Typography Rules (한국어 줄바꿈 국룰):**
  - **어절 줄바꿈 후보 (`word-break: keep-all` / `break-keep`):** 한국어 텍스트 기본 적용. 음절 단위로 단어가 끊어지는 현상 방지.
  - **제목 균형 줄바꿈 (`text-wrap: balance` / `text-balance`):** 제목(`h1`~`h6`)에 적용하여 각 줄의 길이를 균등하게 맞추고 어색한 호흡 방지.
  - **본문 외톨이 단어 방지 (`text-wrap: pretty` / `text-pretty`):** 문단(`p`)에 적용하여 마지막 줄에 외톨이 단어(orphan)가 홀로 남지 않도록 처리.
  - **긴 용어/URL 넘침 방지 (`overflow-wrap: break-word` / `break-words`):** 띄어쓰기 없는 전문 용어(예: 개인정보처리방침)나 긴 링크가 컨테이너를 벗어날 때 안전하게 줄바꿈.
  - **버튼/배지 한 줄 유지 (`white-space: nowrap` / `whitespace-nowrap`):** 버튼, 배지, 칩 라벨이 화면 크기에 따라 2줄로 꺾이는 현상 방지.

## Layout rules

- 8px baseline grid (`space.unit * 2`)
- content max-width `1180px`
- side padding clamps `clamp(16px, 4vw, 32px)`

## Interaction rules

- destructive actions confirm (`danger` variant + 1.5s hold-to-confirm OR modal)
- toasts top-right, 4s, auto-dismiss; never use for errors that block work
- forms validate on blur, never on each keystroke

## Assets — icons & images

Default assets are a bug. Anything visual that ships — favicon, logo, icons,
empty-state illustrations, OG/social images, placeholder imagery — is
**generated for this project** in its design language, never left as a
framework default or pulled from a generic pack.

- **Icons (Full-Color 3D Paper-Cut Art · 678 Icons):**
  - **Universal Full-Color 3D Kirigami Standard (16px ~ 256px 전역):** 모노크롬 철선을 전면 배제하고, AI 원작 아트워크(`assets/papercut-hero.jpg`)의 파스텔 7색지(Mint, Peach, Lavender, Buttercup, Sky, Rose, Cream)와 2-Tier 48% 번트 엄버 그림자가 살아있는 독립형 풀컬러 3D 종이공예 SVG(678종 시스템)를 단일 표준으로 적용. 버튼, 인풋, 배지, 내비게이션, 드롭다운 등 모든 UI 컴포넌트에서 풍부한 컬러 페이퍼 층위와 3D 입체감을 유지.
  - **Dynamic Hydration:** `<span class="pc-inline-icon" data-icon="{id}"></span>`로 주입되며, 자동 인스턴스 ID 고유화 및 315° 번트 엄버(`rgba(46, 30, 20, ...)`) 2-Tier 48% 접촉 그림자 필터가 안정적으로 렌더링됨.
- **Favicon / logo:** derived from the paper-cutting-ui identity and
  `color.accent` on `color.bg`; author the SVG first, export raster sizes
  from it.
- **Illustrations, empty states, OG images:** composed from the token palette
  above — no stock photos, no third-party mascots, no watermarked placeholders.
- **Generation path:** produce assets through the design skills
  (`.claude/skills/design-orchestrator` → `aesthetic-system` → `design-tokens`)
  so they stay consistent with this file. An asset that needs a color outside
  the tokens means the tokens get extended here first, in the same commit.

### Baseline set — generated by default for any web service / app

If paper-cutting-ui serves a web UI or ships as an app, this set exists before
first deploy — the **lead** queues an asset-generation card automatically when
any of it is missing or still a framework default:

| Asset                       | Source of truth                                    |
| --------------------------- | -------------------------------------------------- |
| `favicon.svg` (+ `.ico`, 32/180/192/512 PNG) | logo mark, `color.accent` on `color.bg` |
| `logo.svg` (mark + wordmark variants)        | project identity, token palette         |
| `apple-touch-icon.png` (180×180)             | exported from `favicon.svg`             |
| PWA/manifest icons (192/512)                 | exported from `favicon.svg`             |
| OG/social image (1200×630)                   | logo + token palette composition        |

All rasters are exported from the authored SVGs — the SVG is the source file
and lives in the repo alongside the exports.

## Don'ts

- no inline color literals in components — use tokens
- no `<div onClick>` — use `<button>` or `<a>`
- no emoji in product UI unless a designer signs off
- no default/framework favicons, sample logos, or stock placeholder imagery —
  every shipped asset is generated for this project (see **Assets**)
- no cuticle / fingernail-shaped designs — never combine asymmetric thick borders (`border-l-4`, `border-l-2`, `rounded-r-*`) with rounded corners on cards, callouts, or buttons; use symmetric full borders (`border`) or solid color fills
- no misaligned button contents — never render text and icons without `inline-flex items-center justify-center leading-none` and centered icon containers
- no `break-all` on Korean text — never use `word-break: break-all` (`break-all`) on Korean headings or body copy (causes syllable fragmentation AI slop); use `break-keep` with `text-balance` or `text-pretty`

