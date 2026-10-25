// 초등 수업 콘텐츠 풀 카탈로그 — 학년 · 과목 · 단원 · 차시 탐색과 40분 수업 패키지 미리보기.
(() => {
  const C = window.EDU_CATALOG;
  const { toAbility, toTask } = window.KoEndings;
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

  const subjectsOf = (g) => C.subjects[g <= 2 ? '1-2' : g <= 4 ? '3-4' : '5-6'];
  const unitsOf = (g, s) => C.units.filter((u) => u.g === g && u.s === s);
  const countOf = (g, s) => unitsOf(g, s).reduce((n, u) => n + u.n, 0);
  const validGrade = (g) => { const n = Number(g); return Number.isInteger(n) && n >= 1 && n <= 6 ? n : 1; };
  // "0단원"(한글 놀이)·"독서단원" 같은 번호 없는 단원은 이름만 보인다
  const unitLabel = (u) => (Number.isInteger(u.no) && u.no > 0 ? `${u.no}단원 ${u.t}` : u.t);

  // ---- 상태: 주소(#g=5&s=수학&l=단원id~차시) > 저장값 > 기본값 ----
  const state = { grade: 1, subject: null, sem: 'all', q: '', open: null, opener: null };
  try {
    const saved = JSON.parse(localStorage.getItem('edu-catalog-view') ?? 'null');
    if (saved && typeof saved === 'object') Object.assign(state, { grade: validGrade(saved.grade), subject: typeof saved.subject === 'string' ? saved.subject : null });
  } catch { /* 저장소가 막혀 있거나 값이 깨져도 기본값으로 동작 */ }
  const hash = new URLSearchParams(location.hash.slice(1));
  if (hash.has('g')) state.grade = validGrade(hash.get('g'));
  if (hash.has('s')) state.subject = hash.get('s');
  if (hash.has('q')) state.q = hash.get('q').trim().slice(0, 100);
  const persist = () => {
    try { localStorage.setItem('edu-catalog-view', JSON.stringify({ grade: state.grade, subject: state.subject })); } catch { /* noop */ }
  };
  const writeHash = () => {
    const p = new URLSearchParams({ g: String(state.grade), s: state.subject ?? '' });
    if (state.q) p.set('q', state.q);
    if (state.open) p.set('l', `${state.open.lesson.u}~${state.open.lesson.i}`);
    history.replaceState(null, '', `#${p}`);
  };

  // ---- 40분 수업 패키지: 세부 주제(평가 증거·평가 문항·오개념)에서 조립한다 ----
  // 평가 문항 중 교사에게 하는 지시("…주고 …하게 하라")는 학생 활동지에 싣지 않고 교사용 발문으로만 쓴다.
  const isTeacherPrompt = (a) => /하라\.?$|게 한 뒤|게 하고|게 하며|주고 |보여 주고|제시하고|들려주고|나눠 주고/.test(a);
  // 말하기·몸 활동은 쓰기 칸 대신 해 보기 확인 칸을 준다
  // 몸·소리로 하는 활동만 체크 칸으로 — 분류·설명처럼 결과가 남는 과제는 '말한다'로 끝나도 적을 칸을 준다
  const isPerformance = (e) => /노래|연주|부른다|움직|달린다|던진다|뛴다|춤|몸으로|몸짓|손뼉|박수|소리 내어|낭독|흉내|발표한다|읽어 준다|들려준다/.test(e);
  // 녹음·영상·실물처럼 종이에 없는 자료가 있어야 하는 과제 — 학생 혼자 하지 않도록 표시한다
  const needsTeacherMaterial = (e) => /다시 듣|들은 내용|듣고|녹음|영상|동영상|들려주|보여 주|실물|사진을 보/.test(e);
  const hazard = (text) => {
    const rules = [
      [/(^|[^편])불(을|이|꽃|에|씨)|촛불|초에 불|알코올램프|가열|연소|성냥|버너|점화/, '불을 쓸 때는 선생님과 함께하고, 머리카락·옷소매를 정리하며 주변에 타는 물건을 두지 않습니다. 알코올램프는 뚜껑을 덮어 끄고, 불 붙은 램프끼리 불을 옮기지 않습니다.'],
      [/레이저|돋보기|햇빛을 모|태양을 (직접 )?보/, '레이저 빛과 돋보기로 모은 햇빛을 눈이나 몸에 비추지 않고, 태양을 직접 보지 않습니다.'],
      [/시험관|집기병|삼각 플라스크/, '시험관·집기병은 집게와 받침대를 쓰고, 입구를 사람 쪽으로 향하지 않습니다.'],
      [/산과 염기|염산|수산화|약품|용액|지시약/, '약품은 맛보거나 냄새를 직접 맡지 않고, 보안경을 쓰며 피부에 묻으면 바로 물로 씻습니다.'],
      [/전기|전지|전구|회로/, '전지를 직접 이어 합선시키지 않고, 젖은 손으로 만지지 않습니다.'],
      [/칼|가위|(^|\s)톱(으로|을|질)|송곳|바느질|바늘(로|에 실)/, '날이 있는 도구는 몸 바깥쪽으로 쓰고, 쓰지 않을 때는 덮개를 씌웁니다.'],
      [/유리|비커|온도계/, '유리 기구는 두 손으로 옮기고, 깨지면 손으로 줍지 말고 선생님께 알립니다.'],
      [/뜨거운|끓는|끓음|증기/, '뜨거운 물과 김에 손을 가까이 대지 않습니다.'],
    ];
    return rules.filter(([re]) => re.test(text)).map(([, msg]) => msg);
  };

  const ROLE_OPENER = {
    intro: (u) => `단원 도입: '${u.t}'에서 배울 것 미리 보기 · 생활 속 경험 떠올리기`,
    wrap: () => '단원 정리: 배운 낱말 빙고 · 단원 학습 돌아보기',
    practice: () => '지난 차시 확인 문제 1개로 시작',
    extend: () => '배운 것을 놀이·도전 과제로 넓히기 안내',
    core: () => '지난 차시 떠올리기 · 동기 유발 질문',
  };

  function buildPackage(lesson) {
    const u = unitById.get(lesson.u);
    const t = lesson.tp ? C.topics[lesson.tp] : null;
    const ev = t?.e ?? [];
    const low = u.g <= 2;
    const objective = (ev[0] && toAbility(ev[0], '수 있다.')) ?? `${lesson.title.replace(/ - .*$/, '').replace(/ \(.*\)$/, '')}을(를) 이해하고 설명할 수 있다.`;
    const tool = toolById.get(lesson.tool);
    const tasks = ev.map((e) => ({ text: toTask(e) ?? e, performance: isPerformance(e), source: e }));
    const studentCheck = t?.a && !isTeacherPrompt(t.a) ? t.a : null;
    const practiceNote = lesson.r === 'practice' ? ' (같은 목표를 새 문제로 연습)' : lesson.r === 'extend' ? ' (놀이·모둠 도전으로 넓히기)' : '';
    // 확인 문항: 학생이 스스로 할 수 있는 평가 문항이 있으면 그것, 없으면 주제 성격(개념·표현·적용)에 맞춘 자기 확인
    const FALLBACK_CHECK = {
      concept: '오늘 배운 낱말 두 개를 넣어 문장을 하나 만들어 봅시다.',
      understand: '오늘 본 것 가운데 가장 기억에 남는 것과 그 까닭을 써 봅시다.',
      representation: '오늘 배운 것을 그림이나 표로 나타내 봅시다.',
      procedure: '오늘 한 활동의 순서를 차례대로 써 봅시다.',
      make: '내가 만든 것(한 것)을 소개하는 문장을 써 봅시다.',
      application: '생활 속에서 오늘 배운 것을 쓸 수 있는 때를 하나 써 봅시다.',
      reflect: '오늘 잘한 점 하나와 다음에 더 해 보고 싶은 것 하나를 써 봅시다.',
    };
    // 저학년은 활동 2개(15+15분), 3학년부터 3개(12+10+8분)
    const main = low
      ? [
        `활동 1 (12분) — ${tasks[0]?.text ?? '구체물·그림으로 알아보기'}${tool ? ` · 종이 활동지로 진행 (크롬북 '${tool.name}' 제작 예정)` : ''}`,
        '몸 풀기 (3분) — 노래·손유희로 자리에서 움직이기',
        `활동 2 (10분) — ${tasks[1]?.text ?? '짝과 말하고 그리기'}${practiceNote}`,
        '활동지 (5분) — 그림이나 글로 나타내고 짝과 바꿔 보기',
      ]
      : [
        `활동 1 (12분) — ${tasks[0]?.text ?? '핵심 개념 알아보기'} · 활동지 1번${tool ? ` (크롬북 '${tool.name}' 제작 예정)` : ''}`,
        `활동 2 (10분) — ${tasks[1]?.text ?? '친구와 비교하며 정리하기'}${practiceNote}`,
        '활동 3 (8분) — 활동지 마무리 · 짝과 바꿔 확인하기',
      ];
    const safety = ['과학', '실과', '체육'].includes(u.s) ? hazard(`${lesson.title} ${ev.join(' ')} ${t?.a ?? ''}`) : [];
    return {
      objective, tasks, tool, safety, low,
      teacherPrompt: t?.a ?? null,
      studentCheck: studentCheck ?? FALLBACK_CHECK[t?.f] ?? FALLBACK_CHECK.concept,
      flow: [
        { phase: '도입', min: 5, items: [(ROLE_OPENER[lesson.r] ?? ROLE_OPENER.core)(u), '학습 문제 확인'] },
        { phase: '전개', min: 30, items: main },
        { phase: '정리', min: 5, items: [t?.a ? `형성평가(교사 발문): ${t.a}` : '형성평가: 배운 내용 한 문장으로 말하기', '다음 차시 예고'] },
      ],
      misconceptions: t?.m ?? [],
    };
  }

  // ---- 렌더 ----
  function renderGrades() {
    $('#grade-tabs').innerHTML = [1, 2, 3, 4, 5, 6].map((g) => {
      const total = subjectsOf(g).reduce((n, s) => n + countOf(g, s), 0);
      return `<button type="button" class="grade-tab" aria-pressed="${g === state.grade}" data-grade="${g}">
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
        <span class="chip ${verified ? 'chip--mint' : 'chip--butter'}">${countOf(state.grade, s)}<span class="sr-only">차시, ${verified ? '단원명 확인' : '추정 배정 포함'}</span></span></button></li>`;
    }).join('');
  }

  // 공백으로 나눈 낱말이 모두 들어 있으면 일치
  const matchesQuery = (text, q) => q.split(/\s+/).filter(Boolean).every((w) => text.includes(w));
  const lessonText = (l, u) => `${u.t} ${l.title} ${u.std.join(' ')}`;

  function unitBlock(u, ls, showSubject) {
    const rows = ls.map((l) => {
      const tool = toolById.get(l.tool);
      return `<li><button type="button" class="lesson-row" data-lesson="${esc(l.u)}~${l.i}">
        <span class="lesson-row__no">${l.i}차시</span>
        <span class="lesson-row__title">${l.rp ? `<span class="rp">${esc(l.rp)}</span> ` : ''}${esc(l.title)}</span>
        <span class="lesson-row__modes"><span class="mode">${tool ? esc(tool.name) : '종이 활동'}</span></span></button></li>`;
    }).join('');
    return `<section class="unit pc-sheet" aria-labelledby="h-${esc(u.id)}">
      <header class="unit__head">
        <h3 id="h-${esc(u.id)}">${showSubject ? `<span class="unit__subj">${esc(u.s)}</span> ` : ''}<span class="unit__no">${esc(unitLabel(u))}</span></h3>
        <div class="unit__meta">
          <span class="chip chip--sky">${esc(u.sem)}</span>
          <span class="chip">${u.n}차시</span>
          <span class="chip ${u.v ? 'chip--mint' : 'chip--butter'}">${u.v ? '단원명 확인' : '추정 단원'}</span>
          ${u.sa ? '<span class="chip">기준 자동 연결</span>' : ''}
          ${u.ne ? '<span class="chip">차시 수 추정</span>' : ''}
        </div>
        <details class="unit__std"><summary>성취기준 ${u.std.length}개</summary>
          <ul>${u.std.map((c) => `<li><b>${esc(c)}</b> ${esc(C.standards[c] ?? '')}</li>`).join('')}</ul></details>
      </header>
      <ol class="lesson-list">${rows}</ol>
    </section>`;
  }

  function renderUnits() {
    const host = $('#units');
    const q = state.q;
    const inSem = (u) => state.sem === 'all' || u.sem === state.sem;
    // 검색어가 있으면 이 학년의 모든 과목에서 찾는다
    const subjects = q ? subjectsOf(state.grade) : [state.subject];
    let total = 0;
    const blocks = subjects.flatMap((s) => unitsOf(state.grade, s).filter(inSem).map((u) => {
      const ls = (lessonsByUnit.get(u.id) ?? []).filter((l) => !q || matchesQuery(lessonText(l, u), q));
      total += ls.length;
      return ls.length ? unitBlock(u, ls, !!q) : '';
    })).join('');
    $('#crumb').textContent = q ? `${state.grade}학년 전체 과목 검색` : `${state.grade}학년 · ${state.subject}`;
    $('#result-count').textContent = q ? `'${q}' ${total}차시` : `${total}차시`;
    if (blocks) { host.innerHTML = blocks; return; }
    // 이 학년에 없으면 다른 학년의 일치 수를 알려 준다
    const elsewhere = q ? [1, 2, 3, 4, 5, 6].filter((g) => g !== state.grade).map((g) => {
      const n = C.lessons.filter((l) => { const u = unitById.get(l.u); return u.g === g && matchesQuery(lessonText(l, u), q); }).length;
      return n ? `<button type="button" class="pc-btn pc-btn--ghost" data-grade="${g}">${g}학년 ${n}차시</button>` : '';
    }).join('') : '';
    host.innerHTML = `<div class="empty"><p>${q ? `${state.grade}학년에는 '${esc(q)}'에 맞는 차시가 없습니다.` : '조건에 맞는 차시가 없습니다.'}</p>${elsewhere ? `<p>다른 학년에서 찾기</p><div class="empty__alts">${elsewhere}</div>` : ''}</div>`;
  }

  function siteLinks(u, lesson) {
    let list = (C.resources.subjectSites[u.s] ?? []).map((id) => siteById.get(id)).filter(Boolean);
    if (u.s === '실과') {
      // 코딩 사이트는 정보 영역 차시에만
      const info = /정보|코딩|프로그래밍|알고리즘|소프트웨어|데이터|인공지능|디지털/.test(`${u.t} ${lesson.title}`);
      list = list.filter((s) => (s.topic === 'coding') === info);
    }
    if (list.length === 0) return '<li class="muted">연결된 사이트 없음</li>';
    return list.map((s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.name)}<span class="sr-only"> (새 창)</span></a>
      <span class="muted">${esc([s.free === false ? '유료' : '무료', s.login ? '로그인 필요' : null].filter(Boolean).join(' · '))}</span></li>`).join('');
  }

  // 검증된 공식 채널 안에서 차시 주제로 검색한다(@handle/search?query=). 결과는 바뀔 수 있어 '변동 가능'으로 표시.
  function channelLinks(subject, query, info) {
    return (C.resources.subjectChannels[subject] ?? [])
      .map((id) => C.resources.channels.find((c) => c.id === id)).filter(Boolean)
      .filter((c) => subject !== '실과' || (c.topic === 'coding') === info)
      .map((c) => {
        const href = /\/@[^/]+$/.test(c.url) ? `${c.url}/search?query=${query}` : c.url;
        return `<li><a href="${esc(href)}" target="_blank" rel="noopener">${esc(c.name)}에서 찾기<span class="sr-only"> (새 창)</span></a></li>`;
      }).join('');
  }

  function openLesson(key, opener) {
    const [uid, i] = key.split('~');
    const lesson = (lessonsByUnit.get(uid) ?? []).find((l) => String(l.i) === i);
    if (!lesson) {
      if (state.open) closeLesson();
      $('#result-count').textContent = '링크의 차시를 찾지 못했습니다. 목록에서 골라 주세요.';
      return;
    }
    const u = unitById.get(uid);
    // 주소의 학년·과목이 차시와 다르면 차시 쪽으로 목록을 맞춘다
    if (u.g !== state.grade || (u.s !== state.subject && !state.q)) { state.grade = u.g; state.subject = u.s; renderGrades(); renderSubjects(); renderUnits(); persist(); }
    const p = buildPackage(lesson);
    // 영상 검색은 문장 대신 짧은 낱말로 — 성취기준 문장 전체로 채널 안을 찾으면 결과가 0건이다
    const topic = u.t.replace(/^(독서|매체) 단원\.\s*/, '');
    const query = encodeURIComponent(`초등 ${u.g}학년 ${u.s} ${topic}`);
    const info = /정보|코딩|프로그래밍|알고리즘|소프트웨어|데이터|인공지능|디지털/.test(`${u.t} ${lesson.title}`);
    const itemCount = Math.min(p.tasks.length, p.low ? 2 : 3) + 1;
    const panel = $('#detail');
    panel.innerHTML = `
      <header class="detail__head">
        <p class="detail__crumb">${u.g}학년 ${esc(u.sem)} · ${esc(u.s)} · ${esc(unitLabel(u))} · ${lesson.i}/${u.n}차시</p>
        <h2 id="detail-title" tabindex="-1">${lesson.rp ? `<span class="rp">${esc(lesson.rp)}</span> ` : ''}${esc(lesson.title)}</h2>
        <p class="detail__goal"><strong>학습목표</strong> ${esc(p.objective)}</p>
        <div class="detail__actions">
          <button type="button" class="pc-btn pc-btn--ghost" data-copy-link>링크 복사</button>
          <span class="sr-only" role="status" aria-live="polite" id="copy-status"></span>
          <button type="button" class="pc-btn pc-btn--ghost" data-close>닫기</button>
        </div>
      </header>
      <section class="detail__sec detail__grid">
        <div class="mode-card mode-card--paper">
          <h3>종이 활동지</h3>
          <p class="muted">A4 세로 1장 · 활동 ${itemCount - 1}개 + 확인 1개${p.safety.length ? ' · 안전 수칙' : ''}</p>
          <div class="btn-row">
            <button type="button" class="pc-btn pc-btn--primary" data-print="basic">기본 인쇄</button>
            <button type="button" class="pc-btn pc-btn--ghost" data-print="easy">쉬운 버전 인쇄</button>
          </div>
        </div>
        <div class="mode-card mode-card--digital">
          <h3>크롬북 · 디지털</h3>
          ${(() => {
            // 만들어진 움직이는 교구 차시(lessons/manifest.js)가 이 차시 또는 이 단원에 있으면 바로 연다
            const built = (window.EDU_LESSONS || []).filter((x) => x.catalog && x.catalog.unit === u.id);
            const exact = built.find((x) => x.catalog.lesson === lesson.i);
            if (built.length) return `<p><span class="chip chip--mint">수업 준비됨</span> ${exact ? '이 차시' : '이 단원'}의 움직이는 교구 수업</p>${built.map((x) => `<p><a href="lessons/player.html?lesson=${esc(x.id)}&role=teacher" target="_blank" rel="noopener">${esc(x.title)} — 전자칠판<span class="sr-only">(새 창)</span></a> · <a href="lessons/teacher.html" target="_blank" rel="noopener">배포·수집<span class="sr-only">(새 창)</span></a></p>`).join('')}`;
            return p.tool ? `<p><strong>${esc(p.tool.name)}</strong> <span class="chip chip--butter">제작 예정</span></p><p class="muted">${esc(p.tool.interaction)}</p>` : '<p class="muted">이 차시는 종이 활동으로 진행합니다.</p>';
          })()}
        </div>
        <div class="mode-card mode-card--site">
          <h3>교육 사이트</h3>
          <ul class="links">${siteLinks(u, lesson)}</ul>
        </div>
        <div class="mode-card mode-card--video">
          <h3>영상</h3>
          <ul class="links">
            ${channelLinks(u.s, encodeURIComponent(topic), info)}
            <li><a href="https://www.youtube.com/results?search_query=${query}" target="_blank" rel="noopener">YouTube 전체에서 찾기<span class="sr-only"> (새 창)</span></a></li>
          </ul>
          <p class="muted">검색 결과는 바뀔 수 있습니다. 수업 전에 교사가 먼저 확인하세요.</p>
        </div>
      </section>
      <section class="detail__sec">
        <h3>40분 수업 흐름</h3>
        <ol class="flow">${p.flow.map((f) => `<li class="flow__step flow__step--${f.min === 30 ? 'main' : 'edge'}">
          <span class="flow__phase">${f.phase}<small>${f.min}분</small></span>
          <ul>${f.items.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></li>`).join('')}</ol>
        ${p.safety.length ? `<div class="note note--safety"><strong>안전 수칙</strong><ul>${p.safety.map((s) => `<li>${esc(s)}</li>`).join('')}</ul></div>` : ''}
        ${p.misconceptions.length ? `<p class="note"><strong>자주 하는 오개념</strong> ${p.misconceptions.map(esc).join(' / ')}</p>` : ''}
        <p class="note note--plain"><strong>수준별 지도</strong> 도움이 필요한 학생은 쉬운 버전(핵심 낱말·문장 틀·큰 글씨)으로, 빨리 끝낸 학생은 생활 속 예를 두 가지 더 찾아 쓰게 합니다.</p>
      </section>
      <section class="detail__sec">
        <h3>성취기준</h3>
        <ul class="std-list">${u.std.map((c) => `<li><b>${esc(c)}</b> ${esc(C.standards[c] ?? '')}</li>`).join('')}</ul>
        <p class="muted">차시 내용은 학년군 성취기준에서 자동으로 배치한 초안입니다. 교과서 진도와 맞춰 고쳐 쓰세요.</p>
      </section>`;
    $('#backdrop').hidden = false;
    panel.hidden = false;
    panel.scrollTop = 0;
    state.opener = opener ?? state.opener;
    state.open = { lesson, u, p };
    $('#detail-title').focus();
    renderWorksheet('basic');
    writeHash();
  }

  function closeLesson() {
    $('#detail').hidden = true;
    $('#backdrop').hidden = true;
    state.open = null;
    renderWorksheet();
    writeHash();
    // 연 줄로 포커스를 돌려준다(목록이 다시 그려졌으면 같은 차시 줄을 찾는다)
    const back = state.opener && document.contains(state.opener) ? state.opener
      : state.opener?.dataset?.lesson ? $(`[data-lesson="${CSS.escape(state.opener.dataset.lesson)}"]`) : null;
    (back ?? $('#units')).focus();
  }

  // 핵심 낱말: 학습목표에서 조사(을·를·이·가·와·과·의·에…)가 붙어 있던 낱말만 — 조사가 붙는 것은 명사다
  const keyWords = (text) => [...new Set(text.replace(/[.,'‘’"]/g, '').split(/\s+/)
    // 줄기를 게으르게(.{2,}?) 잡아야 '손뼉으로'가 '손뼉으'+'로'가 아니라 '손뼉'+'으로'로 갈린다
    .map((w) => /^(.+?)(을|를|이|가|은|는|의|에서|에|으로|로|와|과|도)$/.exec(w)?.[1])
    // 한글 두 글자 이상, 과거형(보았·만졌 — 끝 글자 ㅆ 받침)과 수식은 뺀다
    .filter((w) => w && /^[가-힣]{2,}$/.test(w) && (w.at(-1).charCodeAt(0) - 0xac00) % 28 !== 20
      && !/^(것|수|때|무엇|여러|자기|그곳|자주)$/.test(w)))].slice(0, 5);

  // 종이 시계판(바늘 없음) — 크롬북 '종이 아날로그 시계' 도구의 인쇄판. 학생이 바늘을 직접 그린다.
  function blankClock() {
    const ticks = Array.from({ length: 60 }, (_, k) => {
      const a = (k * 6 * Math.PI) / 180; const r1 = k % 5 ? 44 : 41;
      return `<line x1="${50 + r1 * Math.sin(a)}" y1="${50 - r1 * Math.cos(a)}" x2="${50 + 47 * Math.sin(a)}" y2="${50 - 47 * Math.cos(a)}" stroke="#111" stroke-width="${k % 5 ? 0.6 : 1.4}"/>`;
    }).join('');
    const nums = Array.from({ length: 12 }, (_, k) => {
      const a = ((k + 1) * 30 * Math.PI) / 180;
      return `<text x="${50 + 34 * Math.sin(a)}" y="${50 - 34 * Math.cos(a) + 3.5}" font-size="10" text-anchor="middle" fill="#111">${k + 1}</text>`;
    }).join('');
    return `<svg viewBox="0 0 100 100" role="img" aria-label="바늘 없는 시계판"><circle cx="50" cy="50" r="48" fill="none" stroke="#111" stroke-width="1.6"/>${ticks}${nums}<circle cx="50" cy="50" r="1.8" fill="#111"/></svg>`;
  }

  // 인쇄용 활동지 — 생태계 종이 학습지 양식(@edulinker/classroom-ui exam.css의 .edu-exam-*)으로 그린다.
  function renderWorksheet(variant) {
    const host = $('#worksheet');
    if (!state.open || !variant) {
      host.innerHTML = '<p class="print-hint">인쇄할 차시를 먼저 고른 뒤 \'기본 인쇄\'나 \'쉬운 버전 인쇄\'를 누르세요.</p>';
      return;
    }
    const { lesson, u, p } = state.open;
    const easy = variant === 'easy';
    const max = p.low ? 2 : 3;
    // 고를 거리가 종이에 없는 '고르기' 과제는 빼고(교사가 실물로 진행), 말하기 과제는 뒤로 보낸다
    const tasks0 = p.tasks.filter((t) => !/골라|고르/.test(t.text) || /보기|중에서|가운데/.test(t.text))
      .sort((a, b) => a.performance - b.performance).slice(0, max);
    const tasks = tasks0.map((t) => (needsTeacherMaterial(t.source) ? { ...t, text: `[선생님 자료] ${t.text}` } : t));
    // '발표에'·'목표를'은 표가 아니다 — 낱말 첫머리의 '표'만
    const table = (text) => (/(^|\s)표(에|로|를)\s/.test(text)
      ? `<table class="ws-grid">${Array.from({ length: 4 }, (_, r) => `<tr>${Array.from({ length: 4 }, () => (r === 0 ? '<th></th>' : '<td></td>')).join('')}</tr>`).join('')}</table>` : '');
    const answer = (task) => {
      if (task.performance) return '<div class="ws-check">□ 해 보았어요 &nbsp; □ 친구와 함께 했어요 &nbsp; 한 줄 메모: ______________________________</div>';
      // 표에 기록하는 과제는 표 자체가 답 칸이다
      if (table(task.source)) return table(task.source);
      const frame = easy && !p.low && /생각|의견|까닭|이유|느낌|주장/.test(task.source) ? '<p class="ws-frame">나는 __________________ 라고 생각해요. 왜냐하면 __________________ 때문이에요.</p>' : '';
      return `${frame}<div class="edu-exam-essay-box${p.low ? ' ws-draw' : ''}">${p.low ? '<span class="ws-draw__hint">그림이나 글로 나타내 보세요</span>' : ''}</div>`;
    };
    const q = (num, text, body) => `<section class="edu-exam-q">
        <div class="edu-exam-q-header"><span class="edu-exam-q-num">${num}</span><span class="edu-exam-q-text">${esc(text)}</span></div>${body}</section>`;
    const check = p.studentCheck;
    host.innerHTML = `
      <article class="edu-exam-sheet ws ${p.low ? 'ws--low' : ''} ${easy ? 'ws--easy' : ''}">
        <header class="edu-exam-header">
          <div class="edu-exam-header-top">
            <span class="edu-exam-org-badge">${u.g}학년 ${esc(u.sem)} ${esc(u.s)}${easy ? ' · 쉬운 버전' : ''}</span>
            <div class="edu-exam-title-group">
              <h1 class="edu-exam-main-title">${esc(u.t)} · ${lesson.i}차시${lesson.rp ? ` (${esc(lesson.rp)})` : ''}</h1>
              <p class="edu-exam-sub-title">${esc(lesson.title)}</p>
            </div>
          </div>
          <table class="edu-exam-meta-table"><tr><th>학년 반</th><td></td><th>번호</th><td></td><th>이름</th><td class="ws-name"></td></tr></table>
        </header>
        <div class="edu-exam-passage"><span class="edu-exam-passage-title">오늘의 목표</span> ${esc(p.objective)}</div>
        ${easy && keyWords(p.objective).length ? `<div class="ws-words"><b>${p.low ? '따라 쓰기' : '핵심 낱말'}</b> ${keyWords(p.objective).map((w) => `<span class="${p.low ? 'ws-trace' : ''}">${esc(w)}</span>`).join('')}</div>` : ''}
        ${p.safety.length ? `<div class="ws-safety"><b>안전 약속</b><ul>${p.safety.map((s) => `<li>${esc(s)}</li>`).join('')}</ul></div>` : ''}
        ${lesson.tool === 'clock' ? q('시계', '선생님이 불러 주는 시각을 시계판에 바늘로 그려 봅시다.', `<div class="ws-clocks">${['①', '②', '③'].map((n) => `<figure>${blankClock()}<figcaption>${n} ___시 ___분</figcaption></figure>`).join('')}</div>`) : ''}
        ${tasks.map((t, n) => q(`${n + 1}.`, t.text, answer(t))).join('')}
        ${q('확인', check, table(check) || '<div class="edu-exam-essay-box"></div>')}
        <footer class="edu-exam-footer">스스로 평가: 잘했어요 ○ &nbsp; 보통이에요 ○ &nbsp; 더 연습할래요 ○</footer>
      </article>`;
  }

  function renderStats() {
    const total = C.lessons.length;
    const verifiedU = C.units.filter((u) => u.v).length;
    $('#stats').innerHTML = `
      <div class="stat"><span class="stat__n">${total.toLocaleString('ko-KR')}</span><span class="stat__l">차시</span></div>
      <div class="stat"><span class="stat__n">${verifiedU}/${C.units.length}</span><span class="stat__l">단원명 확인</span></div>
      <div class="stat"><span class="stat__n">${(window.EDU_LESSONS || []).length}</span><span class="stat__l">움직이는 교구 수업</span></div>
      <div class="stat"><span class="stat__n">${total.toLocaleString('ko-KR')}</span><span class="stat__l">인쇄 활동지</span></div>`;
  }

  function renderAll(focusSelector) {
    renderGrades();
    renderSubjects();
    renderUnits();
    persist();
    writeHash();
    if (focusSelector) $(focusSelector)?.focus();
  }

  document.addEventListener('click', (e) => {
    const g = e.target.closest('[data-grade]');
    if (g) {
      if (state.open) closeLesson();
      state.grade = validGrade(g.dataset.grade); state.subject = null;
      renderAll(`.grade-tab[data-grade="${state.grade}"]`);
      return;
    }
    const s = e.target.closest('[data-subject]');
    if (s) {
      state.subject = s.dataset.subject;
      state.q = ''; $('#search').value = '';
      renderAll(`[data-subject="${CSS.escape(state.subject)}"]`);
      return;
    }
    const l = e.target.closest('[data-lesson]');
    if (l) { openLesson(l.dataset.lesson, l); return; }
    if (e.target.closest('[data-close]') || e.target.id === 'backdrop') { closeLesson(); return; }
    const pr = e.target.closest('[data-print]');
    if (pr) { renderWorksheet(pr.dataset.print); window.print(); return; }
    if (e.target.closest('[data-copy-link]')) {
      navigator.clipboard?.writeText(location.href).then(
        () => { e.target.textContent = '복사됨'; $('#copy-status').textContent = '링크를 복사했습니다'; setTimeout(() => { e.target.textContent = '링크 복사'; }, 2000); },
        () => { e.target.textContent = '주소창의 링크를 복사하세요'; $('#copy-status').textContent = '복사하지 못했습니다. 주소창의 링크를 복사하세요'; },
      );
    }
  });

  document.addEventListener('keydown', (e) => {
    const panel = $('#detail');
    if (panel.hidden) return;
    if (e.key === 'Escape') { closeLesson(); return; }
    if (e.key !== 'Tab') return;
    // 패널이 열려 있는 동안 Tab은 패널 안에서만 돈다
    const focusables = [...panel.querySelectorAll('a[href], button, [tabindex]:not([tabindex="-1"]), summary')].filter((x) => x.offsetParent !== null);
    if (focusables.length === 0) return;
    const first = focusables[0]; const last = focusables.at(-1);
    if (e.shiftKey && (document.activeElement === first || !panel.contains(document.activeElement))) { last.focus(); e.preventDefault(); }
    else if (!e.shiftKey && document.activeElement === last) { first.focus(); e.preventDefault(); }
  });

  $('#search').value = state.q;
  $('#search').addEventListener('input', (e) => { state.q = e.target.value.trim().slice(0, 100); renderUnits(); writeHash(); });
  $('#sem').addEventListener('change', (e) => { state.sem = e.target.value; renderUnits(); });

  $('#generated').textContent = new Date(C.generatedAt).toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });
  renderStats();
  renderAll();
  renderWorksheet();
  // 주소에 차시가 있으면 바로 연다. 열린 탭에서 주소를 바꿔도 따라간다.
  if (hash.has('l')) openLesson(hash.get('l'));
  window.addEventListener('hashchange', () => {
    const h = new URLSearchParams(location.hash.slice(1));
    const g = validGrade(h.get('g')); const s = h.get('s'); const l = h.get('l');
    const q = (h.get('q') ?? '').trim().slice(0, 100);
    if (q !== state.q) { state.q = q; $('#search').value = q; renderUnits(); }
    if (state.open && `${state.open.lesson.u}~${state.open.lesson.i}` === l) return;
    if (g !== state.grade || (s && s !== state.subject)) { state.grade = g; state.subject = s; renderAll(); }
    if (l) openLesson(l); else if (state.open) closeLesson();
  });
})();
