# 기여 가이드 (Contributing Guidelines)

PaperCut UI 프로젝트에 관심을 가져주셔서 감사합니다! 기여를 환영하며, 아래 가이드라인을 참고해 주세요.

---

## 🔀 1. 브랜치 전략 및 Pull Request 규칙

1. **작업 브랜치 생성**:
   - 모든 작업은 목적에 맞는 브랜치(`feat/<기능명>`, `fix/<수정명>`, `docs/<문서명>`)에서 진행합니다.
   - `main` 브랜치로의 직접 푸시는 지양합니다.
2. **Pull Request (PR) 작성**:
   - 작업 완료 후 본 저장소에 PR을 생성하고 변경 사항을 명확히 설명합니다.
3. **Squash and Merge**:
   - 깔끔한 커밋 히스토리 유지를 위해 모든 PR은 **Squash and Merge** 방식으로 `main`에 병합됩니다.

---

## 🎨 2. 디자인 및 코드 스타일

- **디자인 철학 준수**: [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md)에 정의된 페이퍼 아트 철학(따뜻한 크림 배경, 다층 파스텔 색지, 웜 엄버 소프트 그림자, 물리적 프레스 모션)을 준수합니다.
- **아이콘 단일 표준**: 모든 UI 아이콘은 **Flaticon UIcons Regular Rounded (`fi fi-rr-*`)** 또는 `papercut-icons.js` 내장 벡터 심볼을 단일 표준으로 사용합니다.
- **독립성 유지**: 외부 무거운 프레임워크 의존성을 추가하지 않고 Vanilla CSS/JS의 가볍고 직관적인 설계를 우선합니다.

---

## 📜 3. 커밋 메시지 규칙 (Conventional Commits)

- `feat`: 신규 컴포넌트, 예제, 기능 추가
- `fix`: 스타일 깨짐 또는 인터랙션 버그 수정
- `refactor`: 동작 변경 없는 코드 구조 개선
- `docs`: README, 디자인 시스템 명세 등 문서 수정
- `style`: 코드 포맷팅, 세미콜론 누락 등
- `chore`: 빌드, 패키징, 기타 설정 변경
