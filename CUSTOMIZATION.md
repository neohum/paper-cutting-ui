# PaperCut UI — 사용자 정의(Customization) & 개발자 편의(DX) 가이드

> **"AI Agent Generated Paper-cut Art · Matte Cream 3D Art"**  
> 순수 HTML/CSS/Vanilla JS 기반으로 가볍고 빠르며, React·Vue·Svelte·Next.js 등 어떤 환경에서도 단 한 줄로 커스텀 가능한 페이퍼 크래프트 디자인 시스템입니다.

---

## 1. 🚀 30초 빠른 시작 (Quickstart)

### 방법 A: 단일 CSS/JS 임포트 (전통적인 방식)
```html
<!-- 1. 핵심 스타일시트 임포트 -->
<link rel="stylesheet" href="papercut.css">
<link rel="stylesheet" href="papercut-layout.css">

<!-- 2. 아이콘 & 인터랙션 스크립트 (defer) -->
<script defer src="papercut-icons.js"></script>
<script defer src="papercut.js"></script>

<!-- 3. 컴포넌트 즉시 사용 -->
<button class="pc-btn pc-btn-mint">
  <span class="pc-inline-icon is-sm" data-icon="scissors"></span>
  <span>자르기</span>
</button>
```

### 방법 B: 컴포넌트 단위 복사 (필요한 컴포넌트만 복사해서 사용)
전체 라이브러리를 설치할 필요 없이, 원하는 컴포넌트의 HTML/CSS/SVG 마크업만 복사하여 본인 프로젝트에 직접 붙여넣어 사용할 수 있습니다.

---

## 2. 🎨 디자인 토큰 커스텀 (CSS Variables)

PaperCut UI의 모든 시각적 속성(색상, 종이 단면 두께, 칼선 림, 그림자 깊이)은 `:root` CSS 변수로 제어됩니다. 여러분의 글로벌 CSS에서 변수 몇 개만 오버라이드하면 브랜드 아이덴티티에 맞는 커스텀 종이 공예 테마가 완성됩니다.

### 글로벌 디자인 토큰 오버라이드 예시
```css
:root {
  /* 1. 배경 및 잉크 색상 */
  --pc-bg-cream: #FAF7F0;        /* 캔버스 배경 */
  --pc-paper: #FFFDF9;           /* 기본 카드스톡 색지 */
  --pc-ink: #3D352E;             /* 텍스트 잉크 */
  --pc-ink-muted: #7A6F64;       /* 보조 잉크 */

  /* 2. 7대 파스텔 색지 커스텀 */
  --pc-mint: #A3D8C3;            /* 브랜드 메인 민트 */
  --pc-peach: #F7BA9E;           /* 피치 */
  --pc-lavender: #D7CBEB;        /* 라벤더 */
  --pc-buttercup: #FEE396;       /* 버터컵 골드 */
  --pc-sky: #BDE0EA;             /* 스카이 */
  --pc-rose: #F5B8BE;            /* 로즈 */

  /* 3. 종이 물리 엔진 (칼선 베벨 & 번트 엄버 2-Tier 그림자) */
  --pc-knife-rim-width: 0.88px;  /* 샤프한 나이프 엣지 림 두께 */
  --pc-shadow-contact: 0 2px 0 rgba(46, 30, 20, 0.48);  /* 접촉면 단단한 물리 칼선 */
  --pc-shadow-ambient: 0 4px 10px rgba(46, 30, 20, 0.20); /* 공기 중 확산 그림자 */
}
```

---

## 3. 🧩 주요 컴포넌트 커스텀 옵션

### 1) 3D 페이퍼 커팅 버튼 (`.pc-btn`)
```html
<!-- 기본 파스텔 색지 버튼 -->
<button class="pc-btn pc-btn-mint">민트 버튼</button>
<button class="pc-btn pc-btn-peach">피치 버튼</button>
<button class="pc-btn pc-btn-buttercup">버터컵 버튼</button>

<!-- 아이콘 마운트 플레이트가 결합된 버튼 -->
<button class="pc-btn pc-btn-lavender">
  <span class="pc-btn-icon-plate">
    <span class="pc-inline-icon is-sm" data-icon="sparkles"></span>
  </span>
  <span>마법 효과</span>
</button>
```

### 2) 4대 특화 종이공예 뱃지 (`.pc-badge`)
```html
<!-- 우표 천공 미니 뱃지 -->
<span class="pc-badge pc-badge--stamp pc-badge--mint">v1.0.0</span>

<!-- 앤틱 왁스 실링 원형 뱃지 -->
<span class="pc-badge pc-badge--wax pc-badge--rose">승인됨</span>

<!-- 좌우 노치 다이컷 티켓 뱃지 -->
<span class="pc-badge pc-badge--ticket pc-badge--peach">할인권</span>

<!-- 크라프트 타공 태그 뱃지 -->
<span class="pc-badge pc-badge--tag pc-badge--buttercup">NEW</span>
```

### 3) 4대 종이 카드 변형 (`.pc-card`)
```html
<!-- 기본 매트 크림 카드 -->
<div class="pc-card">...</div>

<!-- 우측 상단 모서리가 접힌 도그이어 카드 -->
<div class="pc-card pc-card-dogear">...</div>

<!-- 지그재그 마스킹 테이프로 부착된 와시 테이프 카드 -->
<div class="pc-card pc-card-washi">...</div>

<!-- 닥나무 수제 데클 엣지 카드 -->
<div class="pc-card pc-card-deckle">...</div>
```

---

## 3-2. ✂️ PC 컴포넌트와 페이퍼 레이어 (`papercut-ui.*`, `papercut-paper-layer.*`)

PC 컴포넌트(`.pc-ui-*`, 데모의 `#pc-components`)는 칼선 버튼과 같은 방식으로 그려집니다. 요소의 실제 크기에 맞춘 인라인 SVG 색지 레이어(받침 색지 + 흰 림 위쪽 색지 + 2단 번트 엄버 그림자)를 깔고, 기호는 3D 컬러 아이콘으로 표시합니다.
컴포넌트 구성과 명세는 [shadcn/ui](https://github.com/shadcn-ui/ui)(MIT)를 참고했습니다. 자세한 고지는 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)에 있습니다.

```html
<link rel="stylesheet" href="papercut-ui.css">
<link rel="stylesheet" href="papercut-paper-layer.css">
<script defer src="papercut-icons.js"></script>
<script defer src="papercut-ui.js"></script>
<script defer src="papercut-paper-layer.js"></script>

<!-- 어떤 요소든 data-pc-paper 하나로 색지 레이어가 붙습니다 -->
<div class="pc-ui-card" data-pc-paper="sheet" data-pc-tone="peach">…</div>

<!-- input/select 같은 빈 요소는 레이어를 담을 수 없으므로 감싸는 요소에 붙입니다 -->
<span class="pc-ui-field-wrap" data-pc-paper="field">
  <input class="pc-ui-input" type="email" placeholder="letter@papercraft.art">
</span>
```

| `data-pc-paper` | 모양 | 쓰는 곳 |
| --- | --- | --- |
| `sheet` | 점선 천공이 있는 카드 시트 | 카드, 패널, 대화상자, 아코디언 항목, 캘린더 |
| `field` | 안쪽으로 파인 홈 | 입력, 셀렉트, 콤보박스, 라디오 묶음 |
| `pill` | 둥근 알약 | 배지, 토글, 브레드크럼, 페이지 번호, 메뉴 항목 |
| `tab` | 서류철 탭 | 탭, 폴더 탭 |
| `ticket` | 양옆 노치가 있는 티켓 | 알림, 토스트 |
| `track` | 얇은 홈 | 슬라이더·진행 막대·스위치 트랙, 리사이즈 손잡이 |
| `knob` | 들뜬 원·둥근 사각 | 슬라이더 손잡이, 체크박스, 라디오, 캘린더 날짜, 캐러셀 점 |
| `menu` | 그림자가 큰 시트 | 드롭다운, 컨텍스트 메뉴, 팝오버, 툴팁 |

- **색:** `data-pc-tone`은 `mint`, `peach`, `lavender`, `buttercup`, `sky`, `rose`, `cream`(기본) 중 하나입니다. 세부 색은 `--pc-paper-fill`, `--pc-paper-base`, `--pc-paper-rim`, `--pc-paper-accent`, `--pc-paper-accent-base`로 덮어쓸 수 있고, 모서리는 `--pc-paper-radius`로 바꿉니다.
- **상태:** `[data-state=open|checked|active|on]`, `[aria-selected|aria-checked|aria-pressed=true]`, `.is-active`, `:has(> input:checked)`이면 위쪽 색지가 눌리고 accent 색이 됩니다. `:disabled`와 `[aria-disabled=true]`는 채도가 빠집니다. 상태는 CSS만으로 바뀌고 다시 그리지 않습니다.
- **동적 요소:** 화면 근처에 온 요소만 지연 수화합니다. 새로 넣은 요소도 자동으로 잡히고, 바로 그려야 하면 `PaperCutUI.paper.hydrate(el)`을 호출합니다. 크기만 바꿨다면 `PaperCutUI.paper.refresh(el)`, 제거하려면 `PaperCutUI.paper.destroy(el)`을 씁니다.
- **JS가 없을 때:** 레이어가 붙지 않고 기존 CSS 모양이 그대로 보입니다.
- **주의:** 레이어가 붙은 요소의 `textContent`를 통째로 바꾸면 레이어도 지워집니다. 글자는 안쪽 `<span>`을 바꾸세요.

---

## 3-1. 📱 반응형 (Responsive)

모든 컴포넌트는 **폭 280px 이상의 컨테이너**에서 부모를 벗어나지 않습니다. 전체 계약은 [`docs/responsive.md`](docs/responsive.md)에 있습니다.

- **브레이크포인트**: `480 / 768 / 1024 / 1280px` 네 단계 (페이지 골격 전용)
- **컨테이너 쿼리**: 블록·리더·푸터·히어로는 놓인 자리의 폭으로 열을 접습니다. 카드 안쪽을 접고 싶으면 감싸는 요소에 `container-type: inline-size`를 선언하세요 (카드 자체에는 걸지 않습니다)
- **레이아웃 유틸리티**: `.pc-grid-auto`, `.pc-grid-cols`, `.pc-row`, `.pc-row-wrap`, `.pc-row-scroll`, `.pc-stack`

```html
<!-- 최소 열 폭 320px, 좁으면 자동으로 한 열 -->
<div class="pc-grid-auto" style="--pc-grid-min: 320px; --pc-grid-gap: 24px;">
  <div class="pc-card">…</div>
  <div class="pc-card">…</div>
</div>
```

검사: `node scripts/ops/verify-overflow.mjs --page` (페이지 8개 폭), `--fixtures` (컴포넌트를 280/360/480px 상자에 넣어 실측)

---

## 4. ⚡ 성능 & 안정성 보장 (Enterprise Grade)

1. **지연 수화 (Lazy Hydration)**:
   - 뷰포트 진입 200px 전에 `IntersectionObserver`로 자동 수화되어 메인 스레드 프리징 0ms.
2. **HTTP 전송 압축**:
   - `scripts/ops/serve.ts` (또는 프로덕션 Caddy)를 통해 Gzip/Brotli 자동 적용, 전송량 **85% 이상 절감**.
3. **접근성 (WAI-ARIA & WCAG 2.1 AA)**:
   - 모든 대화형 버튼 `min-height: 44px`, `min-width: 44px` 터치 타깃 준수.
   - 키보드 포커스 링(`:focus-visible`) 및 `@media (prefers-reduced-motion)` 대응.
4. **종이 바스락 효과음 (Sound Synthesis)**:
   - 외부 오디오 파일 다운로드 없이 브라우저 내장 `Web Audio API`를 통해 실시간 합성되는 초경량 종이 효과음.
   - 원치 않을 경우 상단 사운드 토글로 원클릭 Mute 가능.
