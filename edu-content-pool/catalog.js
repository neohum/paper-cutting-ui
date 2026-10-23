// 초등 수업 콘텐츠 풀 카탈로그 — 학년 · 과목 · 단원 · 차시 탐색과 40분 수업 패키지 미리보기.
(() => {
  const C = window.EDU_CATALOG;
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const unitById = new Map(C.units.map((u) => [u.id, u]));
  const toolById = new Map(C.tools.map((t) => [t.id, t]));
  const siteById = new Map(C.resources.sites.map((s) => [s.id, s]));
  const lessonsByUnit = new Map();
  for (const l of C.lessons) {
    if (!lessonsByUnit.has(l.u)) lessonsByUnit.set(l.u, []);
    lessonsByUnit.get(l.u).push(l);
  }

  const state = { grade: 1, subject: null, sem: 'all', q: '', open: null };
  try {
    const saved = JSON.parse(localStorage.getItem('edu-catalog-view') ?? 'null');
    if (saved) Object.assign(state, { grade: saved.grade ?? 1, subject: saved.subject ?? null });
  } catch { /* 저장소가 막혀 있어도 기본값으로 동작 */ }
  const persist = () => {
    try { localStorage.setItem('edu-catalog-view', JSON.stringify({ grade: state.grade, subject: state.subject })); } catch { /* noop */ }
  };

  const subjectsOf = (g) => C.subjects[g <= 2 ? '1-2' : g <= 4 ? '3-4' : '5-6'];
  const unitsOf = (g, s) => C.units.filter((u) => u.g === g && u.s === s);
  const countOf = (g, s) => unitsOf(g, s).reduce((n, u) => n + u.n, 0);

  // ---- 40분 수업 패키지: 세부 주제(평가 증거·오개념·평가 문항)에서 조립한다 ----
  const FACET_MOVES = {
    concept: ['개념 그림 카드로 핵심 낱말 확인', '예와 예가 아닌 것 분류하기', '짝과 설명하고 바꿔 말하기'],
    representation: ['그림·표·몸짓으로 나타내기', '여러 표현 비교하며 같은 점 찾기', '내 표현을 모둠에 소개하기'],
    application: ['생활 장면 문제 해결하기', '해결 과정을 말과 글로 설명하기', '친구 풀이 검토하기'],
    procedure: ['탐구 순서 카드 정하기', '관찰·실험·조사 수행하고 기록하기', '결과를 정리해 발표하기'],
    understand: ['작품·자료 살펴보며 느낌 나누기', '핵심 요소 찾아 말하기', '감상 낱말 카드 고르기'],
    make: ['재료와 방법 탐색하기', '계획에 따라 표현·연주·활동하기', '작품·활동 공유하기'],
    reflect: ['활동 돌아보기 질문 답하기', '친구 작품·활동에 피드백하기', '다음 도전 정하기'],
  };

  // 평가 증거 문장의 현재형 어미(-는다/-ㄴ다)를 가능형(-을/-ㄹ 수 있다)으로 바꾼다.
  // 읽는다→읽을, 말한다→말할, 만든다→만들(ㄹ 받침을 얹으면 ㄹ 탈락 동사도 맞는다). 그 밖의 어미는 그대로 둔다.
  const HANGUL = 0xac00;
  const finalOf = (ch) => (ch.charCodeAt(0) - HANGUL) % 28;
  const withFinal = (ch, f) => String.fromCharCode(ch.charCodeAt(0) - finalOf(ch) + f);
  const isHangul = (ch) => ch && ch.charCodeAt(0) >= HANGUL && ch.charCodeAt(0) <= 0xd7a3;
  function toAbility(sentence, ending) {
    const s = sentence.trim().replace(/\.$/, '');
    if (s.endsWith('는다') && isHangul(s.at(-3)) && finalOf(s.at(-3)) !== 0) return `${s.slice(0, -2)}을 ${ending}`;
    const last = s.at(-2);
    if (s.endsWith('다') && isHangul(last) && finalOf(last) === 4) return `${s.slice(0, -2)}${withFinal(last, 8)} ${ending}`;
    return null;
  }

  function buildPackage(lesson) {
    const u = unitById.get(lesson.u);
    const t = lesson.tp ? C.topics[lesson.tp] : null;
    const moves = FACET_MOVES[t?.f] ?? FACET_MOVES.concept;
    const ev = t?.e ?? [];
    const objective = (ev[0] && toAbility(ev[0], '수 있다.')) ?? `${lesson.title.replace(/ - .*$/, '')}을(를) 이해하고 설명할 수 있다.`;
    const tool = toolById.get(lesson.tool);
    const opener = lesson.r === 'intro'
      ? `단원 도입: '${u.t}'에서 배울 것 미리 보기, 생활 속 경험 떠올리기`
      : lesson.r === 'wrap' ? '단원 학습 돌아보기: 배운 낱말 빙고' : '지난 차시 떠올리기 · 동기 유발 질문';
    return {
      objective,
      flow: [
        { phase: '도입', min: 5, items: [opener, '학습 문제 확인'] },
        { phase: '전개', min: 30, items: [
          `활동 1 (10분) — ${moves[0]}${tool ? ` · 크롬북: ${tool.name}` : ''}`,
          `활동 2 (12분) — ${moves[1]}${ev[1] ? `: ${ev[1]}` : ''}`,
          `활동 3 (8분) — ${moves[2]} · 활동지 작성`,
        ] },
        { phase: '정리', min: 5, items: [t?.a ? `형성평가: ${t.a}` : '형성평가: 배운 내용 한 문장으로 쓰기', '다음 차시 예고'] },
      ],
      misconceptions: t?.m ?? [],
      evidence: ev,
      tool,
    };
  }

  // ---- 렌더 ----
  function renderGrades() {
    $('#grade-tabs').innerHTML = [1, 2, 3, 4, 5, 6].map((g) => {
      const total = subjectsOf(g).reduce((n, s) => n + countOf(g, s), 0);
      return `<button type="button" role="tab" class="grade-tab" aria-selected="${g === state.grade}" data-grade="${g}">
        <span class="grade-tab__n">${g}학년</span><span class="grade-tab__c">${total}차시</span></button>`;
    }).join('');
  }

  function renderSubjects() {
    const subs = subjectsOf(state.grade);
    if (!subs.includes(state.subject)) state.subject = subs[0];
    $('#subject-list').innerHTML = subs.map((s) => {
      const us = unitsOf(state.grade, s);
      const verified = us.length > 0 && us.every((u) => u.v);
      return `<li><button type="button" class="subject-btn" aria-current="${s === state.subject}" data-subject="${esc(s)}">
        <span class="subject-btn__name">${esc(s)}</span>
        <span class="chip ${verified ? 'chip--mint' : 'chip--butter'}">${countOf(state.grade, s)}</span></button></li>`;
    }).join('');
  }

  function lessonMatches(l, u) {
    if (state.sem !== 'all' && u.sem !== state.sem) return false;
    if (!state.q) return true;
    return `${u.t} ${l.title}`.includes(state.q);
  }

  function renderUnits() {
    const us = unitsOf(state.grade, state.subject);
    const host = $('#units');
    $('#crumb').textContent = `${state.grade}학년 · ${state.subject}`;
    const blocks = us.map((u) => {
      const ls = (lessonsByUnit.get(u.id) ?? []).filter((l) => lessonMatches(l, u));
      if (ls.length === 0) return '';
      const rows = ls.map((l) => {
        const tool = toolById.get(l.tool);
        return `<li><button type="button" class="lesson-row" data-lesson="${esc(l.u)}#${l.i}">
          <span class="lesson-row__no">${l.i}차시</span>
          <span class="lesson-row__title">${esc(l.title)}</span>
          <span class="lesson-row__modes">
            <span class="mode" title="크롬북 도구">${tool ? esc(tool.name) : '도구 미정'}</span>
          </span></button></li>`;
      }).join('');
      return `<section class="unit pc-sheet" aria-labelledby="h-${esc(u.id)}">
        <header class="unit__head">
          <h3 id="h-${esc(u.id)}"><span class="unit__no">${u.no}단원</span> ${esc(u.t)}</h3>
          <div class="unit__meta">
            <span class="chip chip--sky">${esc(u.sem)}</span>
            <span class="chip">${u.n}차시</span>
            <span class="chip ${u.v ? 'chip--mint' : 'chip--butter'}" title="${u.v ? '교과서 단원 확인됨' : '교육과정 성취기준에서 자동 배정한 추정 단원'}">${u.v ? '단원 확인' : '추정 배정'}</span>
            ${u.sa ? '<span class="chip" title="성취기준-단원 연결표에 없어 단원명 유사도로 자동 연결한 성취기준이 포함됨">기준 자동 연결</span>' : ''}
            ${u.ne ? '<span class="chip" title="교과서 차시 수를 확인하지 못해 연간 시수에서 나눈 추정 차시">차시 추정</span>' : ''}
          </div>
          <p class="unit__std">${u.std.map((c) => `<abbr title="${esc(C.standards[c] ?? '')}">${esc(c)}</abbr>`).join(' ')}</p>
        </header>
        <ol class="lesson-list">${rows}</ol>
      </section>`;
    }).join('');
    host.innerHTML = blocks || '<p class="empty">조건에 맞는 차시가 없습니다.</p>';
  }

  function siteLinks(subject) {
    const ids = C.resources.subjectSites[subject] ?? [];
    const list = ids.map((id) => siteById.get(id)).filter(Boolean);
    if (list.length === 0) return '<li class="muted">자원 지도 생성 대기</li>';
    return list.map((s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.name)}</a>
      <span class="muted">${esc([s.free === false ? '유료' : '무료', s.login ? '로그인' : null].filter(Boolean).join(' · '))}</span></li>`).join('');
  }

  // 검증된 공식 채널 안에서 차시 주제로 검색한다(@handle/search?query=). 결과는 바뀔 수 있어 '변동 가능'으로 표시.
  function channelLinks(subject, query) {
    const list = (C.resources.subjectChannels[subject] ?? [])
      .map((id) => C.resources.channels.find((c) => c.id === id)).filter(Boolean);
    return list.map((c) => {
      const href = /\/@[^/]+$/.test(c.url) ? `${c.url}/search?query=${query}` : c.url;
      return `<li><a href="${esc(href)}" target="_blank" rel="noopener">${esc(c.name)}에서 찾기</a></li>`;
    }).join('');
  }

  function openLesson(key) {
    const [uid, i] = key.split('#');
    const lesson = (lessonsByUnit.get(uid) ?? []).find((l) => String(l.i) === i);
    if (!lesson) return;
    const u = unitById.get(uid);
    const p = buildPackage(lesson);
    const query = encodeURIComponent(`초등 ${u.g}학년 ${u.s} ${lesson.title.replace(/ - .*$/, '')}`);
    const panel = $('#detail');
    panel.innerHTML = `
      <header class="detail__head">
        <p class="detail__crumb">${u.g}학년 ${esc(u.sem)} · ${esc(u.s)} · ${u.no}단원 ${esc(u.t)} · ${lesson.i}/${u.n}차시</p>
        <h2>${esc(lesson.title)}</h2>
        <p class="detail__goal"><strong>학습목표</strong> ${esc(p.objective)}</p>
        <button type="button" class="pc-btn pc-btn--ghost detail__close" data-close aria-label="닫기">닫기</button>
      </header>
      <section class="detail__sec">
        <h3>40분 수업 흐름</h3>
        <ol class="flow">${p.flow.map((f) => `<li class="flow__step flow__step--${f.min === 30 ? 'main' : 'edge'}">
          <span class="flow__phase">${f.phase}<small>${f.min}분</small></span>
          <ul>${f.items.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></li>`).join('')}</ol>
        ${p.misconceptions.length ? `<p class="note"><strong>자주 하는 오개념</strong> ${p.misconceptions.map(esc).join(' / ')}</p>` : ''}
      </section>
      <section class="detail__sec detail__grid">
        <div class="mode-card mode-card--digital">
          <h4>크롬북 · 디지털</h4>
          ${p.tool ? `<p><strong>${esc(p.tool.name)}</strong></p><p class="muted">${esc(p.tool.interaction)}</p><p class="muted">레이어 ${p.tool.layers}장 · 상태: 제작 예정</p>` : '<p class="muted">도구 미정</p>'}
        </div>
        <div class="mode-card mode-card--paper">
          <h4>종이 활동지</h4>
          <p class="muted">A4 세로 1장 · 학습목표 · 활동 3문항 · 형성평가</p>
          <button type="button" class="pc-btn pc-btn--primary" data-print>활동지 인쇄 미리보기</button>
        </div>
        <div class="mode-card mode-card--site">
          <h4>교육 사이트</h4>
          <ul class="links">${siteLinks(u.s)}</ul>
        </div>
        <div class="mode-card mode-card--video">
          <h4>영상</h4>
          <ul class="links">
            ${channelLinks(u.s, encodeURIComponent(lesson.title.replace(/ - .*$/, '')))}
            <li><a href="https://www.youtube.com/results?search_query=${query}" target="_blank" rel="noopener">YouTube 전체에서 찾기</a></li>
          </ul>
          <p class="muted">검색 결과는 변동 가능 · 개별 영상은 실존·제목 확인과 교사 검수 후 연결합니다.</p>
        </div>
      </section>
      <section class="detail__sec">
        <h3>all-market 상태</h3>
        <p class="muted">기존 자료 매칭 전 — 계획서 Step 2(인벤토리 매칭) 이후 <em>그대로 사용 · 변형 · 신규</em>로 분류됩니다.</p>
      </section>`;
    panel.hidden = false;
    panel.focus();
    state.open = { lesson, u, p };
    renderWorksheet(lesson, u, p);
  }

  // 인쇄용 활동지 — 생태계 종이 학습지 양식(@edulinker/classroom-ui exam.css의 .edu-exam-*)으로 그린다.
  function renderWorksheet(lesson, u, p) {
    const ev = p.evidence.length ? p.evidence : [`${lesson.title}에 대해 알게 된 것을 써 봅시다.`];
    const check = p.flow[2].items[0].replace(/^형성평가: /, '');
    const q = (num, text, body) => `<section class="edu-exam-q">
        <div class="edu-exam-q-header"><span class="edu-exam-q-num">${num}</span><span class="edu-exam-q-text">${esc(text)}</span></div>${body}</section>`;
    $('#worksheet').innerHTML = `
      <article class="edu-exam-sheet">
        <header class="edu-exam-header">
          <div class="edu-exam-header-top">
            <span class="edu-exam-org-badge">${u.g}학년 ${esc(u.sem)} ${esc(u.s)}</span>
            <div class="edu-exam-title-group">
              <h1 class="edu-exam-main-title">${esc(lesson.title)}</h1>
              <p class="edu-exam-sub-title">${u.no}단원 ${esc(u.t)} · ${lesson.i}차시</p>
            </div>
          </div>
          <table class="edu-exam-meta-table"><tr><th>학년 반</th><td></td><th>번호</th><td></td><th>이름</th><td style="width:40%"></td></tr></table>
        </header>
        <div class="edu-exam-passage"><span class="edu-exam-passage-title">학습목표</span> ${esc(p.objective)}</div>
        ${ev.slice(0, 3).map((e, n) => q(`${n + 1}.`, toAbility(e, '수 있나요? 해 봅시다.') ?? e, '<div class="edu-exam-essay-box"></div>')).join('')}
        ${q('확인', check, '<div class="edu-exam-essay-box edu-exam-essay-box--lg"></div>')}
        <footer class="edu-exam-footer">스스로 평가: 잘함 ○ &nbsp; 보통 ○ &nbsp; 노력 ○ &nbsp;·&nbsp; edulinker 콘텐츠 풀</footer>
      </article>`;
  }

  function renderStats() {
    const total = C.lessons.length;
    const verifiedU = C.units.filter((u) => u.v).length;
    const withTool = C.lessons.filter((l) => l.tool).length;
    $('#stats').innerHTML = `
      <div class="stat"><span class="stat__n">${total.toLocaleString('ko-KR')}</span><span class="stat__l">차시</span></div>
      <div class="stat"><span class="stat__n">${C.units.length}</span><span class="stat__l">단원 (확인 ${verifiedU})</span></div>
      <div class="stat"><span class="stat__n">${C.tools.length}</span><span class="stat__l">페이퍼커팅 도구</span></div>
      <div class="stat"><span class="stat__n">${Math.round((withTool / total) * 100)}%</span><span class="stat__l">도구 연결 차시</span></div>`;
  }

  function renderAll() {
    renderGrades();
    renderSubjects();
    renderUnits();
    persist();
  }

  document.addEventListener('click', (e) => {
    const g = e.target.closest('[data-grade]');
    if (g) { state.grade = Number(g.dataset.grade); state.subject = null; renderAll(); return; }
    const s = e.target.closest('[data-subject]');
    if (s) { state.subject = s.dataset.subject; renderAll(); return; }
    const l = e.target.closest('[data-lesson]');
    if (l) { openLesson(l.dataset.lesson); return; }
    if (e.target.closest('[data-close]')) { $('#detail').hidden = true; return; }
    if (e.target.closest('[data-print]')) { window.print(); }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !$('#detail').hidden) $('#detail').hidden = true;
  });
  $('#search').addEventListener('input', (e) => { state.q = e.target.value.trim(); renderUnits(); });
  $('#sem').addEventListener('change', (e) => { state.sem = e.target.value; renderUnits(); });

  $('#generated').textContent = new Date(C.generatedAt).toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });
  renderStats();
  renderAll();
})();
