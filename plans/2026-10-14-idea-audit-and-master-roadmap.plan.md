---
slug: 2026-10-14-idea-audit-and-master-roadmap
title: "paper-cutting-ui 전수 아이디어·플랜 감사 및 마스터 개발 로드맵"
status: done
risk: medium
created: 2026-10-14
---

# Plan: paper-cutting-ui 전수 아이디어·플랜 감사 및 마스터 개발 로드맵

## 1. 감사 개요 (Audit Summary)

입체 종이 공예 디자인 시스템(`paper-cutting-ui`)의 보유 플랜 2종과 실제 소스 코드(`index.html`, `papercut*.css`, `papercut*.js`)를 전수 대조하였다. 로고·파비콘 일원화(`logo.svg`, `favicon.svg`), 우표 천공/왁스 실링 배지(`.pc-badge`), 44종 컴포넌트(`#shadcn-components`) 및 사이드바 개편은 구현되었으나, **두 플랜의 핵심 Acceptance Criteria(AC) 중 정적 검증 조건 2건이 미충족 상태**임이 확인되었다:
1. `papercut-system-unification.plan.md` Step 2(키리가미 용어 완전 퇴출): `index.html` 6986~6994줄 푸터 영역에 `'키리가미'` 텍스트 및 `#kirigami-components` 데드 링크 3건이 잔존함.
2. `ui-library-streamline.plan.md` Step 1~2(레거시 30대 산발 컴포넌트 섹션 및 시뮬레이터 잔재 제거): `index.html` 내부에 `#core-components`(2060줄), `#part-2-forms`(2835줄), `#part-3-widgets`(3408줄), `#part-4-advanced`(3987줄) 레거시 섹션 약 3,400줄이 여전히 삭제되지 않고 남아 있으며, 루트에 `icon-simulator.html/css/js`, `papercut-shadow-studio.css/js` 및 `scratch/` 임시 파일들이 방치되어 있음.

---

## 2. 보유 플랜 실현 상태 판정 표

| 플랜 파일명 (`plans/*.plan.md`) | 실현 여부 | 코드 및 테스트 근거 | 추가 개발 가치 및 우선순위 |
| --- | --- | --- | --- |
| `papercut-system-unification.plan.md` (PaperCut 시스템 일원화 및 아이콘/버튼 기반 UI 전면 개편) | **부분 구현** | `logo.svg`, `favicon.svg`, `papercut.css`(`.pc-badge` 160개 규칙), `papercut-sidebar.js/css` 구현 완료. **단, Step 2 AC-1 위반: `index.html` 6986, 6990, 6994줄에 `'키리가미'` 텍스트 및 `#kirigami-components` 데드 앵커 3건 잔존** | **최우선 (P0)** — 푸터의 잔존 키리가미 용어 및 깨진 앵커 링크를 즉시 정리하여 AC-1(0건) 달성 필요 |
| `ui-library-streamline.plan.md` (PaperCut UI 라이브러리 정예화 - 불필요 랩/아트 제거 및 컴포넌트 일원화) | **부분 구현** | `#shadowbox-diorama`, `#paper-shadow-studio` 섹션은 `index.html`에서 제거됨. **단, Step 2 AC-1 위반: `index.html`에 `#core-components`, `#part-2-forms`, `#part-3-widgets`, `#part-4-advanced` 4개 구형 섹션(2060~5490줄)이 그대로 남아 있고, 루트에 `icon-simulator.*` 및 `papercut-shadow-studio.*` 파일이 잔존함** | **최우선 (P0)** — 중복 레거시 섹션 3,400줄 및 미사용 스튜디오/시뮬레이터 파일을 정리하여 DOM 무게를 절반으로 줄이고 44종 마스터 컴포넌트로 완전 일원화 필요 |

---

## 3. 미구현·개선 사항 단계별 개발 계획서 (Master Roadmap)

### Step 1: complete-terminology-and-deadlink-purge
- Goal: `papercut-system-unification.plan.md` Step 2의 미결 사항인 `index.html` 푸터 내 '키리가미' 잔존 문구 3건과 데드 앵커(`#kirigami-components` 등)를 전수 제거하고 유효한 섹션 앵커로 교체한다.
- Files: index.html, papercut-sidebar.js
- Acceptance:
  - AC-1: `Select-String -Path index.html,papercut*.js,papercut*.css -Pattern '키리가미'` 실행 결과가 정확히 0건이다.
  - AC-2: `index.html` 내 모든 `href="#..."` 내부 앵커가 실제 존재하는 DOM `id`를 가리키며 데드 링크가 0건이다.
- Tests: powershell -Command "if ((Select-String -Path index.html,papercut*.js,papercut*.css -Pattern '키리가미').Count -ne 0) { exit 1 }"
- Risk: low
- Complexity: low

### Step 2: purge-legacy-sections-and-orphan-files
- Goal: `ui-library-streamline.plan.md` Step 1~2를 완결하기 위해 `index.html`에서 구형 중복 섹션(`#core-components`, `#part-2-forms`, `#part-3-widgets`, `#part-4-advanced`)을 제거하고, 미사용 `icon-simulator.*` 및 `papercut-shadow-studio.*` 참조를 정리한다.
- Files: index.html, papercut.js, icon-simulator.html, icon-simulator.css, icon-simulator.js, papercut-shadow-studio.css, papercut-shadow-studio.js
- Acceptance:
  - AC-1: `index.html` 내에 `id="core-components"`, `id="part-2-forms"`, `id="part-3-widgets"`, `id="part-4-advanced"` 섹션이 0건이다.
  - AC-2: `#shadcn-components`(44종 표준 컴포넌트)와 `#blocks-showcase`(6대 실전 블록)의 모든 인터랙티브 탭·모달·토스트·차트가 스크립트 에러 없이 100% 정상 동작한다.
  - AC-3: 루트의 고아 파일(`icon-simulator.*`, `papercut-shadow-studio.*`, `scratch_test.txt`)이 제거되거나 아카이브 정리되어 배포 번들이 경량화된다.
- Tests: powershell -Command "if (Select-String -Path index.html -Pattern 'id=\"core-components\"|id=\"part-2-forms\"|id=\"part-3-widgets\"|id=\"part-4-advanced\"') { exit 1 }"
- Depends on: complete-terminology-and-deadlink-purge
- Risk: medium
- Complexity: medium

### Step 3: esm-package-and-typescript-declarations
- Goal: 외부 웹 프로젝트에서 PaperCut UI를 손쉽게 가져다 쓸 수 있도록 `package.json` 패키지 엔트리, 통합 CSS 번들(`dist/papercut-bundle.css`), ESM 모듈(`dist/papercut.esm.js`) 및 TypeScript 선언 파일(`dist/papercut.d.ts`) 빌드 파이프라인을 구축한다.
- Files: package.json, scripts/build-library.mjs, types/papercut.d.ts, CUSTOMIZATION.md
- Acceptance:
  - AC-1: `npm run build` 실행 시 `dist/papercut-bundle.css`, `dist/papercut.esm.js`, `dist/papercut.d.ts`가 생성된다.
  - AC-2: `papercut.d.ts`에 `PaperCutIcons`, `PaperCutBackgrounds`, `PaperCutToast`, `PaperCutModal` API 타입이 정의되어 TypeScript 프로젝트에서 자동완성을 지원한다.
- Tests: npm run build
- Depends on: purge-legacy-sections-and-orphan-files
- Risk: low
- Complexity: medium

### Step 4: snippet-copy-and-a11y-verification
- Goal: 44종 UI 컴포넌트 카드마다 원클릭 HTML/CSS 코드 스니펫 복사 버튼을 장착하고, 키보드 접근성(Focus-visible, ARIA role) 및 반응형 레이아웃 무결성을 검증한다.
- Files: papercut-shadcn.js, papercut-shadcn.css, index.html
- Acceptance:
  - AC-1: 44종 컴포넌트 쇼케이스의 각 아이템에서 '코드 복사' 버튼 클릭 시 즉시 사용 가능한 PaperCut HTML 마크업이 클립보드에 복사되고 토스트 알림이 표시된다.
  - AC-2: `npx tsx scripts/ops/verify-responsive.ts` 실행 시 모바일/태블릿/데스크톱 뷰포트에서 가로 스크롤 오버플로우 및 콘솔 에러가 0건이다.
- Tests: npx tsx scripts/ops/verify-responsive.ts
- Depends on: esm-package-and-typescript-declarations
- Risk: low
- Complexity: medium

## 4. Verification
- **Tier 1 (정적 검사)**: '키리가미' 잔존 0건, 구형 Part 1~4 섹션 0건, 내부 앵커 무결성 검사 통과
- **Tier 2 (빌드 및 스크립트 검증)**: `npm run build` 및 `npx tsx scripts/ops/verify-responsive.ts` 통과
- **Tier 3 (시각 및 인터랙션 검증)**: 브라우저에서 사이드바 전체 메뉴 이동, 44종 컴포넌트 조작, 코드 스니펫 복사 확인
