# Evidence: Enlarge PaperCut Icons & Pure SVG Standardization

## 1. 배포 목적 & 스펙 준수 요약
- **목적**:
  - 기존 UI 내에 잔존하던 텍스트 유니코드 이모지(`🌿`, `🎋`, `📦`, `📜`, `🎨`, `📰`, `✓` 등) 및 외부 웹폰트/단색 SVG를 100% 전면 제거.
  - 679종의 순수 SVG 3D 다층 페이퍼아트 아이콘(`papercut-icons.js`) 단일 표준 체제로 통합.
  - 아이콘 크기를 대폭 확대(`is-xs: 22px`, `is-sm: 26px`, `is-md: 34px`, `is-lg: 44px`, `is-xl: 58px`)하여 16px 이하에서 발생하던 뭉개짐(smudge/blob)을 원천 차단하고 종이 단차, 0.88px 순백 칼선 림 라이트, 2-Tier 번트 엄버 그림자를 시각적으로 극대화.
  - 빈티지 신문지 전용 `newspaper` 3D 다층 페이퍼아트 아이콘 신규 제작 및 글로벌 레지스트리 등록.
  - `create-agent-harness`에 서브에이전트 병렬 스웜(Subagent Parallel Swarm) 프로토콜 및 하드룰 표준 제정 및 v0.4.59 동기화.

## 2. 검증 커맨드 & 실행 결과
- `node --test tests/papercut-icons-scale.test.mjs`
  - `ICONS-1`: index.html UI 내 텍스트 이모지 0개 완벽 검증 -> PASS
  - `ICONS-2`: papercut-svg-primitives.html 이모지 및 외부 fi-rr CDN 0개 완벽 검증 -> PASS
  - `ICONS-3`: papercut-icons.js 내 newspaper 신규 3D 페이퍼아트 아이콘 등록 검증 -> PASS
  - `ICONS-4`: 아이콘 최소 크기 22px 보장 및 확대 규격 선언 검증 -> PASS
  - `ICONS-5`: primitives 체크마크 check-v 아이콘 교체 검증 -> PASS
- `node --test tests/index-radix-primitives.test.mjs tests/papercut-svg-primitives.test.mjs` -> 14/14 PASS
- **실사 스크린샷 캡처 증거**:
  - `sidebar-enlarged-paper-icons.png`: 사이드바 8종 종이 텍스처 확대 아이콘 실사
  - `header-enlarged-icons.png`: 헤더 26px 확대 아이콘 실사
  - `sound-studio-enlarged-paper-cards.png`: 사운드 스튜디오 34px 확대 카드 실사
  - `radix-primitives-in-index.png`: index.html 내 12대 프리미티브 덱 실사
  - `primitives-hero-pure-svg.png`: 순수 SVG UI 라이브러리 히어로 실사

## 3. 전후 변경점 비교
- **Before**:
  - 사이드바/사운드스튜디오/드롭다운에 텍스트 이모지(`🌿`, `🎋`, `📦` 등) 노출.
  - 아이콘이 `is-xs`(12~15px)로 축소되어 3D 그림자가 번져 검은 얼룩으로 변질.
  - `papercut-svg-primitives.html`이 외부 Flaticon 웹폰트 CDN에 의존.
  - 빈티지 신문지 모양 전용 PC 아이콘 부재로 대체 아이콘 혼용.
- **After**:
  - 100% 순수 SVG 3D 다층 페이퍼아트 아이콘 단일 체계 완성.
  - 최소 22px~58px 크기로 대폭 확대되어 종이 질감과 입체감이 선명하게 구현.
  - 외부 CDN 의존 0개의 완벽한 오프라인 독립 순수 SVG UI 라이브러리 확립.
  - `newspaper` 신규 3D 다층 페이퍼아트 아이콘 추가.

## 4. 위험 요소 및 대응책
- **레이아웃 밀림 방지**: 아이콘 크기 확대 시 버튼 및 드롭다운의 `flex`, `gap`, `min-width`를 조화롭게 유지하여 인접 컨트롤 정렬 하드룰 준수.
- **지연 수화(Lazy Hydration)**: 동적 렌더링 시 `window.hydratePapercutIcons` 연동 표준화.
