/* 40분 차시 플레이어 — 학생(크롬북)·교사(전자칠판)·인쇄(활동지) 세 화면.
 * URL: player.html?lesson=<id>&role=student|teacher|print&level=easy|base|challenge&class=<반코드>&seat=<번호>
 *      &collect=<제출 주소 | 1(같은 출처 허브 주소)>&material_id=<포털 자료 id>
 * 런처 허브는 매개변수 없이 /dist/<id>/로 띄우므로 lesson이 없으면 번들에 박힌 window.EDU_BUNDLE_LESSON을 쓴다.
 */
(function () {
  'use strict';
  const K = window.PaperKit; const L = window.PaperLessons;
  const qs = new URLSearchParams(location.search);
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const LEVELS = { easy: '쉬움', base: '기본', challenge: '도전' };
  const CIRCLED = '①②③④⑤⑥⑦⑧⑨⑩';
  const app = $('#app');
  const PREF = 'edu-player-pref';
  const pref = (() => { try { return JSON.parse(localStorage.getItem(PREF) || '{}'); } catch (_) { return {}; } })();
  const savePref = () => { try { localStorage.setItem(PREF, JSON.stringify(pref)); } catch (_) { /* 저장 불가 */ } };

  const S = {
    lesson: null, role: qs.get('role') || 'student', level: LEVELS[qs.get('level')] ? qs.get('level') : 'base',
    classCode: (qs.get('class') || '').slice(0, 12), seat: qs.get('seat') || '', pairSeat: '', nickname: '',
    stage: 0, act: 0, item: 0, maxStage: 0, tool: null, started: null, items: {}, streak: 0, levelChanges: [],
    stageT0: {}, actT0: {}, suggestOff: {}, exitWarned: false,
  };

  window.__pl = S; // 자동 검사(check-lesson·simulate-class)가 현재 교구에 접근한다
  // 자동 검사용: 앞 단계를 건너뛰어 정리로 간다(학생 화면에는 이 길이 없다)
  S.goto = (i, act = 0, item = 0) => { S.stage = i; S.maxStage = Math.max(S.maxStage, i); S.act = act; S.item = item; render(); };
  const keyOf = (a, i) => `${a.id}.${i + 1}`;
  const rec = (a, i) => (S.items[keyOf(a, i)] ??= { key: keyOf(a, i), activity: a.id, attempts: 0, hints: 0, hintLevels: [], correct: false, level: S.level, ms: 0, t0: Date.now() });
  // 휴대폰 폭: 머리말을 줄이고 목표를 접는다(교구가 첫 화면에 들어오게)
  const phone = () => typeof matchMedia === 'function' && matchMedia('(max-width: 480px)').matches;
  const soundLabel = () => `<i class="fi ${pref.sound === false ? 'fi-rr-volume-mute' : 'fi-rr-volume'}" aria-hidden="true"></i><span class="pl-pref__t"> 소리 ${pref.sound === false ? '꺼짐' : '켜짐'}</span>`;

  // ---- 소리: 효과음 켜고 끄기(소리에 예민한 학생, 헤드폰 없는 교실). 읽어 주기는 학생이 스피커 단추를 누를 때만 ----
  if (pref.sound === false) K.setSound(false);
  const lowGrade = () => S.lesson && S.lesson.grade <= 2;
  // force: 학생이 읽어 주기 단추를 직접 누른 경우 — 효과음을 꺼 둔 학생도 듣고 싶을 때 들을 수 있게
  function speak(text, force) {
    if ((pref.sound === false && !force) || !('speechSynthesis' in window) || !text) return;
    try {
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(String(text).replace(/[()]/g, ' '));
      u.lang = 'ko-KR'; u.rate = lowGrade() ? 0.85 : 0.95;
      speechSynthesis.speak(u);
    } catch (_) { /* 읽어 주기는 부가 기능 */ }
  }
  const readBtn = (text) => `<button type="button" class="pl-read" data-read="${esc(text)}" aria-label="소리 내어 읽어 주기"><i class="fi fi-rr-volume" aria-hidden="true"></i></button>`;

  async function start() {
    const id = qs.get('lesson') || window.EDU_BUNDLE_LESSON;
    if (!id) { app.innerHTML = '<p class="pl-error">차시가 지정되지 않았습니다. 교사 화면에서 받은 링크로 다시 열어 주세요.</p>'; return; }
    try { S.lesson = await L.load(id); } catch (e) { app.innerHTML = `<p class="pl-error">${esc(e.message)}</p>`; return; }
    document.title = `${S.lesson.grade}학년 ${S.lesson.subject} · ${S.lesson.title}`;
    document.documentElement.dataset.role = S.role;
    document.documentElement.dataset.grade = S.lesson.grade;
    // 다시 열었을 때 못 보낸 결과가 있으면 보내고, 보냈다고 알려 준다
    L.flush().then((n) => { if (n) toast(`지난번에 못 보낸 결과 ${n}개를 선생님께 보냈어요.`); }).catch(() => {});
    if (S.role === 'print') return renderPrint(qs.get('variant') === 'easy');
    if (S.role === 'student' && !S.seat) return renderJoin();
    S.started = Date.now(); K.recorder.reset();
    if (S.role === 'teacher') S.maxStage = 2;
    render();
  }

  function toast(text) {
    const t = document.createElement('div'); t.className = 'pl-toast'; t.setAttribute('role', 'status'); t.textContent = text;
    document.body.appendChild(t); setTimeout(() => t.remove(), 4000);
  }

  // ---- 입장: 번호만 받는다(이름 없음). 포털이 아니면 반 코드가 꼭 있어야 반끼리 결과가 섞이지 않는다 ----
  function renderJoin() {
    const needClass = !S.classCode && !qs.get('material_id');
    app.innerHTML = `
      <section class="pl-join pc-card">
        <div class="pl-join__art" id="join-art"></div>
        <h1>${esc(S.lesson.title)} ${readBtn(S.lesson.title)}</h1>
        <p class="pl-muted">${S.lesson.grade}학년 ${esc(S.lesson.subject)} · ${esc(S.lesson.unitTitle)}</p>
        <form id="join" class="pl-join__form">
          ${needClass ? '<label>반 코드 <input name="class" maxlength="12" required autocomplete="off" placeholder="선생님이 알려 준 코드 (예: 3-2)"></label>' : ''}
          <label>내 번호 <input name="seat" inputmode="numeric" maxlength="4" required autocomplete="off" placeholder="예: 7"></label>
          <label>짝 번호 (둘이 한 기기로 할 때만) <input name="pair" inputmode="numeric" maxlength="4" autocomplete="off" placeholder="비워 두어도 돼요"></label>
          <p class="pl-warn" id="join-warn" role="alert" hidden></p>
          <label>별명 (선택) <input name="nick" maxlength="8" autocomplete="off" placeholder="이름은 쓰지 않아요"></label>
          ${qs.get('material_id') ? '<p class="pl-muted">포털에 로그인한 번호와 같은 번호를 넣어 주세요.</p>' : ''}
          <button class="pl-btn pl-btn--primary" type="submit"><i class="fi fi-rr-play" aria-hidden="true"></i> 시작하기</button>
        </form>
      </section>`;
    showArt($('#join-art'));
    $('#join').addEventListener('submit', (e) => {
      e.preventDefault();
      const f = new FormData(e.target);
      // '7번'처럼 써도 숫자만 받는다(브라우저 영어 형식 경고 대신 우리 말로 안내)
      S.seat = String(f.get('seat') || '').replace(/\D/g, '').replace(/^0+/, '').slice(0, 2);
      if (!S.seat) { const w = $('#join-warn'); w.hidden = false; w.textContent = '번호는 숫자로 써 주세요. 예: 7'; $('input[name="seat"]').focus(); return; }
      S.pairSeat = String(f.get('pair') || '').replace(/\D/g, '').slice(0, 2);
      if (S.pairSeat === S.seat) S.pairSeat = '';
      S.pairSeat = S.pairSeat.replace(/^0+/, '');
      if (f.get('class')) S.classCode = String(f.get('class')).trim().slice(0, 12);
      // 별명에 이름·전화번호처럼 보이는 것은 받지 않는다(포털에는 번호만 간다)
      S.nickname = String(f.get('nick') || '').replace(/[0-9-]{6,}/g, '').slice(0, 8);
      S.started = Date.now(); K.recorder.reset(); render(); $('#stage').focus();
    });
    (needClass ? $('input[name="class"]') : $('input[name="seat"]')).focus();
  }

  // ---- 도입 그림: 생성 그림(illustration.image)이 있으면 그것을, 없거나 못 읽으면 벡터 장면을 띄운다 ----
  // 경로는 lessons/ 기준 'img/<파일>'만 받는다 — 번들(dist/<id>/lessons/img/)과 개발 폴더에서 같은 주소로 풀리게
  const IMG_PATH = /^img\/[a-z0-9][a-z0-9-]*\.(webp|png|jpe?g)$/;
  function showArt(box) {
    const il = S.lesson.illustration || {};
    const vector = () => { box.textContent = ''; K.scene(box, il.scene); };
    if (!il.image || !IMG_PATH.test(il.image)) return vector();
    const [w, h] = il.size || (il.scene && il.scene.viewBox) || [480, 270];
    const caption = il.alt || [S.lesson.title, (il.scene?.layers || []).find((x) => x.motif === 'text')?.text].filter(Boolean).join(' — ');
    const img = document.createElement('img');
    img.className = 'pl-art__img'; img.decoding = 'async'; img.width = w; img.height = h;
    img.alt = `${caption} (종이 오리기 그림)`;
    img.addEventListener('error', vector, { once: true });
    img.src = L.base + il.image;
    box.textContent = ''; box.appendChild(img);
  }

  const stages = () => S.lesson.stages;
  const curStage = () => stages()[S.stage];

  function render() {
    const st = curStage();
    S.stageT0[S.stage] ??= Date.now();
    const total = stages().reduce((a, s) => a + s.minutes, 0);
    // 목표: 도입에서는 펼치고, 휴대폰에서는 도입 뒤로 접는다(학생이 펼치거나 접으면 다음 화면에서도 그대로)
    const showGoal = !(S.role === 'student' && S.lesson.grade <= 2);
    const goalOpen = S.goalOpen ?? (!phone() || st.id === 'intro');
    const who = `<span class="pl-who__c">${esc(S.classCode || '반 코드 없음')} · </span>${esc(S.seat)}번${S.pairSeat ? `·${esc(S.pairSeat)}번` : ''}${S.nickname ? ` · ${esc(S.nickname)}` : ''}`;
    // 단계 띠: 휴대폰에서는 수업 화면 아래에 둔다(DOM 순서 = 보이는 순서). 교구가 첫 화면에 들어오게
    const steps = `<nav class="pl-steps" aria-label="수업 단계">
        ${stages().map((s, i) => { const locked = i > S.maxStage; return `<button type="button" class="pl-step ${i === S.stage ? 'is-on' : ''} ${i < S.stage ? 'is-done' : ''}" data-stage="${i}" ${i === S.stage ? 'aria-current="step"' : ''} ${locked ? 'disabled title="앞 단계를 마치면 열려요"' : ''} style="flex:${s.minutes}">
          <span>${locked ? '<i class="fi fi-rr-lock" aria-hidden="true"></i> ' : ''}${esc(s.title)}</span><small>${s.minutes}분</small></button>`; }).join('')}
      </nav>`;
    app.innerHTML = `
      <header class="pl-top pc-card">
        <div class="pl-top__title">
          <span class="pl-chip">${S.lesson.grade}학년 ${esc(S.lesson.subject)}</span>
          <h1 title="${esc(S.lesson.title)}">${esc(S.lesson.title)}</h1>
          ${showGoal ? `<details class="pl-goal" id="goal" ${goalOpen ? 'open' : ''}><summary><b>목표</b><span class="pl-goal__more"> 보기</span></summary><p>${esc(S.lesson.objective)}</p></details>` : ''}
        </div>
        <div class="pl-top__side">
          <div class="pl-level" role="group" aria-label="난이도">${Object.entries(LEVELS).map(([k, v]) => `<button type="button" class="pl-level__b" data-level="${k}" aria-pressed="${S.level === k}">${v}</button>`).join('')}</div>
          <div class="pl-prefs">
            <button type="button" class="pl-pref" data-pref="sound" aria-pressed="${pref.sound !== false}">${soundLabel()}</button>
          </div>
          ${S.role === 'student' ? `<span class="pl-muted pl-who">${who}</span>` : ''}
        </div>
      </header>
      ${phone() ? '' : steps}
      ${S.role === 'teacher' ? '<div class="pl-timer pc-card" id="timer" aria-live="off"></div>' : ''}
      <main id="stage" class="pl-stage" tabindex="-1"></main>
      ${phone() ? steps : ''}
      <p class="pl-muted pl-foot">40분 수업 · 총 ${total}분 구성 · ${S.role === 'teacher' ? '교사는 단계·활동을 자유롭게 넘길 수 있습니다' : '앞 단계를 마치면 다음 단계가 열려요'}</p>`;

    // 학생이 직접 펼치거나 접은 것만 기억한다(toggle 이벤트는 처음 open 속성에도 일어난다)
    $('#goal summary')?.addEventListener('click', () => { S.goalOpen = !$('#goal').open; });
    if (st.id === 'intro') renderIntro(st);
    else if (st.id === 'main') renderActivity(st);
    else renderWrap(st);
    if (S.role === 'teacher') runTimer(st);
  }

  // ---- 교사 화면 단계 타이머: 단계에 처음 들어온 때부터 잰다(문항·난이도를 바꿔도 다시 시작하지 않음) ----
  let timerId = 0;
  function runTimer(st) {
    clearInterval(timerId);
    const end = S.stageT0[S.stage] + st.minutes * 60000;
    const box = $('#timer');
    const draw = () => {
      const left = Math.round((end - Date.now()) / 1000);
      const a = Math.abs(left);
      let act = '';
      if (st.id === 'main') {
        const ac = st.activities[S.act]; const k = `${S.stage}.${S.act}`; S.actT0[k] ??= Date.now();
        const used = Math.round((Date.now() - S.actT0[k]) / 1000);
        act = ` · 활동 ${S.act + 1} <b class="${used > ac.minutes * 60 ? 'pl-late' : ''}">${Math.floor(used / 60)}:${String(used % 60).padStart(2, '0')}</b> / 권장 ${ac.minutes}분`;
      }
      box.innerHTML = `<i class="fi fi-rr-hourglass-end" aria-hidden="true"></i> ${esc(st.title)} ${left >= 0 ? '남은 시간' : '시간 지남'} <b>${Math.floor(a / 60)}:${String(a % 60).padStart(2, '0')}</b>${act}`;
      box.classList.toggle('is-late', left <= 0);
    };
    draw(); timerId = setInterval(draw, 1000);
  }

  function teacherBox(text) {
    return S.role === 'teacher' && text ? `<aside class="pl-teacher"><b><i class="fi fi-rr-chalkboard-user" aria-hidden="true"></i> 교사 발문</b> ${esc(text)}</aside>` : '';
  }
  // 안전 약속은 실험하는 화면(도입·전개)에 학생·교사 모두에게 보인다 — 종이에만 있으면 실험 중에 못 본다
  // 도입에서는 펼쳐 보이고, 활동 화면에서는 접어 둔다(교구가 화면 밖으로 밀리지 않게)
  const safetyBox = (open = true) => (S.lesson.safety?.length ? `<details class="pl-safety" ${open ? 'open' : ''}><summary><b><i class="fi fi-rr-shield-check" aria-hidden="true"></i> 안전 약속</b></summary><ul>${S.lesson.safety.map((s) => `<li>${esc(s)}</li>`).join('')}</ul></details>` : '');
  const notesBox = () => (S.role === 'teacher' && S.lesson.teacherNotes ? `<details class="pl-notes"><summary><i class="fi fi-rr-info" aria-hidden="true"></i> 자주 생기는 오개념·지도 메모</summary><p>${esc(S.lesson.teacherNotes)}</p></details>` : '');

  function renderIntro(st) {
    const box = $('#stage');
    box.innerHTML = `
      <section class="pl-card pc-card">
        <div class="pl-nav pl-nav--top"><button type="button" class="pl-btn pl-btn--primary" data-next>활동 시작 <i class="fi fi-rr-arrow-right" aria-hidden="true"></i></button></div>
        <div class="pl-art" id="art"></div>
        ${teacherBox(st.teacher)}
        ${notesBox()}
        <p class="pl-say">${esc(st.student)} ${readBtn(st.student)}</p>
        ${safetyBox()}
        ${st.demo ? `<div class="pl-demo" id="demo"></div>${S.role === 'teacher' ? '<button type="button" class="pl-btn" id="demo-play"><i class="fi fi-rr-play" aria-hidden="true"></i> 시연</button>' : ''}` : ''}
      </section>`;
    showArt($('#art'));
    if (st.demo) {
      // 학생 화면의 시연 교구는 보기만 한다(Tab 순서에서 빼서 '활동 시작'까지 Tab을 덜 누르게)
      if (S.role !== 'teacher') { $('#demo').inert = true; $('#demo').setAttribute('aria-hidden', 'true'); }
      const t = K.mount(st.demo.tool, $('#demo'), Object.assign({ demoView: S.role === 'teacher' }, st.demo.options || {}));
      $('#demo-play')?.addEventListener('click', async () => { for (const s of st.demo.sequence) { await t.demo(s); await K.wait(900); } });
    }
  }

  const levelOpts = (a) => Object.assign({}, a.options || {}, (a.levels || {})[S.level] || {});

  // 피드백·힌트 줄마다 누르면 읽어 주는 단추(자동 읽기는 하지 않는다)
  const fbLine = (icon, text) => `<span class="pl-fb__t">${icon ? `<i class="fi ${icon}" aria-hidden="true"></i> ` : ''}${esc(text)}</span> ${readBtn(text)}`;
  const hintLine = (text, level, label) => `<p class="pl-hint" ${level ? `data-hint-level="${level}"` : ''}><b>${esc(label || (level ? `힌트 ${level}/3` : '힌트'))}</b> ${esc(text)} ${readBtn(text)}</p>`;

  function predictBox(it, r) {
    const p = it.predict; const locked = r.correct || r.attempts > 0;
    return `<div class="pl-predict" role="group" aria-labelledby="predict-q">
      <p class="pl-predict__q" id="predict-q"><b><i class="fi fi-rr-interrogation" aria-hidden="true"></i> 먼저 예상해요</b> ${esc(p.q)} ${readBtn(`${p.q} ${p.options.map((o, k) => `${k + 1}번, ${o}.`).join(' ')}`)}</p>
      <div class="pl-predict__opts">${p.options.map((o, k) => `<button type="button" class="pl-btn pl-btn--small pl-predict__o" data-predict="${k}" aria-pressed="${r.predict === k}" ${locked ? 'disabled' : ''}>${esc(o)}</button>`).join('')}</div>
    </div>`;
  }

  // 힌트 단추 글: 시도 전에는 '힌트'(언제나 1단계), 한 번 틀린 뒤부터 다음에 받을 단계 '힌트 2/3'
  const hintLabel = (r) => (r.attempts ? `힌트 ${L.flow.hintLevel(r)}/3` : '힌트');

  function renderActivity(st) {
    // 단계별 문항(levels[단계].prompt·target)이 있으면 그 단계의 문항을 낸다
    const a = st.activities[S.act]; const it = L.flow.itemAt(a.items[S.item], S.level);
    const r = rec(a, S.item);
    const F = L.flow;
    const box = $('#stage');
    box.innerHTML = `
      <section class="pl-card pc-card">
        <div class="pl-act-head">
          <h2>${esc(a.title)}</h2>
          <span class="pl-muted">${S.act + 1}/${st.activities.length} 활동 · ${a.minutes}분${a.pair ? ' · 짝 활동' : ''}</span>
        </div>
        ${S.role === 'teacher' ? `<div class="pl-jump" role="group" aria-label="활동 바로 가기">${st.activities.map((x, i) => `<button type="button" class="pl-btn pl-btn--small" data-act="${i}" aria-pressed="${i === S.act}">활동 ${i + 1}</button>`).join('')}<button type="button" class="pl-btn pl-btn--small" data-skip><i class="fi fi-rr-angle-small-right" aria-hidden="true"></i> 다음 문항</button></div>` : ''}
        <p class="pl-task">${esc(a.task)} ${readBtn(a.task)}</p>
        ${teacherBox(a.teacher)}
        ${safetyBox(false)}
        <div class="pl-work${it.predict ? ' has-predict' : ''}">
          <div class="pl-side">
            <ol class="pl-dots" aria-label="문항 진행">${a.items.map((_, i) => { const x = S.items[keyOf(a, i)]; return `<li class="${i === S.item ? 'is-on' : ''} ${x?.correct ? 'is-ok' : ''} ${x?.closed ? 'is-closed' : ''}" aria-label="${i + 1}번${x?.correct ? ' 맞음' : x?.closed ? ' 못 풂' : ''}"></li>`; }).join('')}</ol>
            ${it.extra ? '<span class="pl-chip">더 해 보기</span>' : ''}
            <p class="pl-prompt" id="prompt">${esc(it.prompt)} ${readBtn(it.prompt)}</p>
          </div>
          <div class="pl-tool" id="tool"></div>
          ${it.predict ? `<div class="pl-side pl-side--predict">${predictBox(it, r)}</div>` : ''}
          <div class="pl-side pl-side--actions">
            <div class="pl-actions">
              <button type="button" class="pl-btn pl-btn--primary" id="check"><i class="fi fi-rr-check" aria-hidden="true"></i> ${it.free ? '다 했어요' : '확인'}</button>
              ${it.free ? '' : `<button type="button" class="pl-btn" id="hint"><i class="fi fi-rr-bulb" aria-hidden="true"></i> <span id="hint-t">${hintLabel(r)}</span></button>`}
              <button type="button" class="pl-btn" id="reset"><i class="fi fi-rr-rotate-left" aria-hidden="true"></i> 처음으로</button>
            </div>
          </div>
          <div class="pl-side pl-side--fb">
            <div class="pl-feedback" id="fb" role="status" aria-live="polite"></div>
            <p class="pl-note" id="fb-note" role="status" aria-live="polite" hidden></p>
            <div id="suggest"></div>
            <div class="pl-more" id="more"></div>
          </div>
        </div>
      </section>`;
    // reveal:'after-check'는 교구에 넘기는 신호다 — 지원하는 교구는 확인 전까지 실시간 표시를 숨긴다
    // 문항별 단계 시작(items[n].levels[단계])이 있으면 그 단계의 시작 상태·교구 옵션을 쓴다
    const start0 = F.itemStart(it, S.level);
    S.tool = K.mount(a.tool, $('#tool'), Object.assign({}, levelOpts(a), start0.toolOptions, it.reveal === 'after-check' ? { revealAfterCheck: true } : {}));
    if (start0.state && S.tool.setState) S.tool.setState(start0.state);
    if (it.target && S.tool.setTarget) S.tool.setTarget(it.target);
    r.t0 = Date.now(); r.lockUntil = 0;
    const initialJSON = JSON.stringify(S.tool.getState());
    const at = `${S.stage}.${S.act}.${S.item}`;
    const checkBtn = $('#check'); const fb = $('#fb');
    // 기다리는 사이 교사가 단계·활동을 바꿨거나 화면을 다시 그렸으면 이 문항의 예약 동작을 하지 않는다
    const here = () => `${S.stage}.${S.act}.${S.item}` === at && $('#check') === checkBtn;
    let lastHint = ''; let lastFb = '';
    // 교사는 예상 없이도 확인할 수 있다(시연용)
    const ready = () => S.role === 'teacher' || F.predictReady(it, r);
    const setLocked = (on) => { checkBtn.setAttribute('aria-disabled', String(on)); };
    setLocked(!ready());
    // 안내 한 줄은 피드백과 따로 띄운다 — 연타가 진짜 피드백·자동 힌트를 덮어쓰지 않게
    let noteT = 0;
    const note = (text) => { const n = $('#fb-note'); n.hidden = false; n.innerHTML = fbLine('fi-rr-info', text); clearTimeout(noteT); noteT = setTimeout(() => { if ($('#fb-note') === n) n.hidden = true; }, 3500); };
    // 피드백을 새로 쓰면 지난 안내 줄('바꾼 뒤에 다시 확인해요' 등)은 내용까지 지운다 — 맞힌 뒤 '다시 하라'는 말이 남지 않게
    // 교구가 피드백 글을 비워 돌려줘도 확인 결과 줄은 비지 않는다
    const said = (res) => (res && typeof res.feedback === 'string' && res.feedback.trim()) || (res && res.correct ? '맞았어요!' : '아직 아니에요. 교구를 다시 살펴봐요.');
    const clearNote = () => { clearTimeout(noteT); const n = $('#fb-note'); n.hidden = true; n.textContent = ''; };
    const setFb = (cls, html) => { fb.className = `pl-feedback ${cls}`; fb.innerHTML = html; lastFb = html; clearNote(); };
    const hintBtn = $('#hint');
    const refreshHint = () => { const t = $('#hint-t'); if (t) t.textContent = hintLabel(r); };
    // 사다리 한 칸: 다음 단계 힌트를 받아 기록한다(힌트 단추와 두 번째 틀림 뒤 자동 힌트가 같이 쓴다)
    const ladderHint = (stateJSON) => {
      const level = F.hintLevel(r);
      const res = F.askHint(S.tool, it.target, { level, attempts: r.attempts, hints: it.hints });
      if (res.via === 'check') F.rehide(S.tool, it, stateJSON);
      r.hints++; r.hintLevels.push(level); K.recorder.log('hint', { key: r.key, level });
      refreshHint();
      return res;
    };
    // 시도를 다 쓴 문항은 '못 풂'으로 닫는다: 3단계 풀이와 정리를 보여 주고 '다음 문제'만 남긴다
    const showClosed = () => {
      checkBtn.disabled = true; if (hintBtn) hintBtn.disabled = true;
      box.querySelectorAll('[data-predict]').forEach((x) => { x.disabled = true; });
      const snap = JSON.stringify(S.tool.getState());
      const w = F.askHint(S.tool, it.target, { level: 3, attempts: r.attempts, hints: it.hints });
      if (w.via === 'check') F.rehide(S.tool, it, snap);
      setFb('is-no', fbLine('fi-rr-info', `${r.attempts}번 해 보았어요. 이 문제는 풀이를 보고 넘어가요.`) + (w.hint && !w.correct ? hintLine(w.hint, 3, '풀이') : ''));
      $('#more').innerHTML = `<div class="pl-conclude">${it.conclude ? `<p>${fbLine('fi-rr-book-alt', `정리: ${it.conclude}`)}</p>` : ''}<p class="pl-muted">선생님과 나중에 함께 다시 봐요.</p><button type="button" class="pl-btn pl-btn--primary" id="next-item">다음 문제 <i class="fi fi-rr-arrow-right" aria-hidden="true"></i></button></div>`;
      $('#next-item').addEventListener('click', () => { if (here()) advance(); });
      $('#next-item').focus({ preventScroll: true });
    };

    box.querySelectorAll('[data-predict]').forEach((b) => b.addEventListener('click', () => {
      if (b.disabled) return;
      r.predict = Number(b.dataset.predict);
      K.recorder.log('predict', { key: r.key, pick: r.predict });
      box.querySelectorAll('[data-predict]').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      if (!(r.lockUntil && Date.now() < r.lockUntil)) setLocked(false);
    }));
    const lockPredict = () => box.querySelectorAll('[data-predict]').forEach((x) => { x.disabled = true; });

    // 예상·정리가 있는 문항은 맞힌 뒤 바로 넘기지 않는다 — 예상과 관찰을 견주어 볼 시간을 준다
    const reflect = Boolean(it.predict || it.conclude);
    function conclude() {
      const lines = [F.predictLine(it, r), it.conclude ? `정리: ${it.conclude}` : ''].filter(Boolean);
      $('#more').innerHTML = `<div class="pl-conclude">${lines.map((t) => `<p>${fbLine(t.startsWith('정리') ? 'fi-rr-book-alt' : 'fi-rr-eye', t)}</p>`).join('')}<button type="button" class="pl-btn pl-btn--primary" id="next-item">다음 문제 <i class="fi fi-rr-arrow-right" aria-hidden="true"></i></button></div>`;
      $('#next-item').addEventListener('click', () => { if (here()) advance(); });
      $('#next-item').focus({ preventScroll: true });
    }

    checkBtn.addEventListener('click', () => {
      // 잠긴 확인도 말없이 지나가지 않는다 — 예상을 안 골랐거나, 틀린 직후 피드백을 읽는 잠깐(WRONG_LOCK_MS)
      if (checkBtn.getAttribute('aria-disabled') === 'true') { note(ready() ? '방금 받은 피드백을 먼저 읽어요. 잠시 뒤에 다시 확인할 수 있어요.' : '먼저 예상을 하나 골라요.'); return; }
      const now = JSON.stringify(S.tool.getState());
      // 짝 활동(정답 없는 문항)도 교구를 한 번은 움직여야 '다 했어요'가 된다 (말하기만 하는 문항 talk:true는 예외)
      if (it.free && !it.talk && now === initialJSON) { note('교구로 직접 만들어 본 뒤에 눌러요.'); return; }
      if (it.free) {
        r.correct = true; r.free = true; r.attempts++; r.answer = S.tool.getState(); K.recorder.log('free', { key: r.key });
        lockPredict();
        if (reflect) { checkBtn.disabled = true; return conclude(); }
        return advance();
      }
      // 이미 맞힌 문항을 다시 보는 중이면 기록을 바꾸지 않는다
      if (r.correct) { const res0 = S.tool.check(it.target); setFb(res0.correct ? 'is-ok' : 'is-no', fbLine(null, res0.correct ? '이미 맞힌 문제예요. 다음으로 넘어가요.' : said(res0))); if (res0.correct) setTimeout(() => { if (here()) advance(); }, 900); return; }
      // 아무것도 바꾸지 않고 다시 누른 '확인'은 시도로 세지 않고, 보이던 피드백도 그대로 둔다
      if (F.checkGate(r, now, Date.now()) === 'unchanged') { note('교구를 움직여 바꾼 뒤에 다시 확인해요.'); return; }
      const res = S.tool.check(it.target);
      // 교구가 '아직 다 하지 않음'(incomplete)이라고 하면 시도로 세지 않고 안내만 한다(예: 까닭을 아직 안 고름)
      if (res.incomplete) { note(res.feedback); return; }
      // 직전 틀린 상태에서 한 걸음만 바꾼 확인도 시도로 센다(쓸어 보기). 몇 번이었는지는 교사 화면에 보인다
      if (!res.correct && F.isNudge(S.tool, r.lastJSON, now)) r.nudges = (r.nudges || 0) + 1;
      r.lastJSON = now;
      // 기록하는 단계는 '확인을 누른 때'의 단계 — 단계를 바꾼 직후 문항이 이전 단계로 남지 않게
      r.attempts++; r.level = S.level; r.last = S.tool.getState(); lastHint = res.hint || lastHint;
      lockPredict();
      K.recorder.log('check', { key: r.key, ok: res.correct });
      let html = fbLine(res.correct ? 'fi-rr-star' : 'fi-rr-refresh', said(res));
      K.tick(res.correct ? 'ok' : 'no');
      if (res.correct) {
        setFb('is-ok', html);
        r.correct = true; r.ms = Date.now() - r.t0;
        S.streak = r.attempts === 1 ? S.streak + 1 : 0;
        checkBtn.disabled = true;
        if (reflect) return conclude();
        setTimeout(() => { if (here()) advance(); }, 1100);
        return;
      }
      S.streak = 0;
      // 틀린 확인은 숨긴 읽기 값을 드러내지 않는다(hint() 없는 교구는 상태를 다시 넣어 숨김으로 되돌림)
      F.rehide(S.tool, it, now);
      $('#suggest').innerHTML = ''; // 틀렸을 때 '단계 올리기' 권유가 남아 있지 않게
      // 시도를 다 썼으면 닫는다(조금씩 바꿔 확인을 연달아 눌러 숨긴 값을 쓸어 보는 것을 막는다)
      if (F.shouldClose(it, r)) { r.closed = 'attempts'; r.ms = Date.now() - r.t0; K.recorder.log('closed', { key: r.key, attempts: r.attempts }); return showClosed(); }
      // 두 번 틀리면 힌트 사다리의 다음 칸을 자동으로 보이고, 세 번 틀리면 쉬운 단계를 권한다
      if (r.attempts >= 2) { const h = ladderHint(now); if (h.hint && !h.correct) html += hintLine(h.hint, h.level); }
      refreshHint();
      setFb('is-no', html);
      // 틀린 직후 잠깐 확인을 잠근다 — 빠르게 두 번 누르는 학생도 '왜'를 읽을 시간을 갖게
      F.lockAfterWrong(r, Date.now()); setLocked(true);
      setTimeout(() => { if (here()) setLocked(!ready()); }, F.WRONG_LOCK_MS);
      if (r.attempts >= 3 && S.level !== 'easy') suggest(a, 'easy', '어렵다면 쉬운 단계로 바꿔 볼까요?');
      // 네 번 넘게 막히면 넘어갈 수 있다 — 못 푼 문항으로 기록되어 교사 화면에 보인다
      if (r.attempts >= 4 && !$('#giveup')) {
        $('#more').insertAdjacentHTML('beforeend', '<button type="button" class="pl-btn pl-btn--small" id="giveup"><i class="fi fi-rr-arrow-right" aria-hidden="true"></i> 다음 문제로 (나중에 선생님과 다시)</button>');
        $('#giveup').addEventListener('click', () => { r.gaveUp = true; K.recorder.log('giveup', { key: r.key }); S.streak = 0; advance(); });
      }
    });
    hintBtn?.addEventListener('click', () => {
      // 힌트는 확인이 아니다 — hint(target, { level, attempts })가 있으면 그것을, 없으면 check(target, { forHint: true })를 부르고, 숨김은 되돌린다
      const res = ladderHint(JSON.stringify(S.tool.getState()));
      // 1단계(시도 전)에는 틀린 확인의 힌트(lastHint)를 쓰지 않는다 — 그 글은 이 상태의 틀린 곳을 짚는다
      const h = res.correct ? '지금 상태가 맞아요. 확인을 눌러 보세요.' : (res.hint || (res.level > 1 && lastHint) || '도구를 천천히 움직여 보세요.');
      // 힌트는 보이던 피드백 아래에 붙인다(피드백을 지우지 않는다)
      fb.innerHTML = lastFb + hintLine(h, res.correct ? 0 : res.level); clearNote();
    });
    $('#reset').addEventListener('click', () => { S.tool.reset ? S.tool.reset() : null; if (start0.state && S.tool.setState) S.tool.setState(start0.state); });
    if (r.closed) return showClosed(); // 닫힌 문항으로 돌아오면(단계 바꾸기·교사 바로 가기) 닫힌 모양 그대로
    if (!it.free && S.streak >= 3 && S.level !== 'challenge') suggest(a, S.level === 'easy' ? 'base' : 'challenge', '아주 잘하고 있어요! 한 단계 올려 볼까요?');
  }

  function suggest(a, level, text) {
    const box = $('#suggest'); if (!box || S.suggestOff[`${a.id}:${level}`]) return;
    box.innerHTML = `<div class="pl-suggest"><span>${esc(text)}</span><button type="button" class="pl-btn" data-level="${level}">${LEVELS[level]}으로 바꾸기</button><button type="button" class="pl-btn" data-dismiss="${a.id}:${level}">괜찮아요</button></div>`;
  }

  // extra:true 문항은 '더 해 보기' — 도전 단계이거나 연달아 한 번에 맞힌 학생에게만 낸다(느린 학생이 40분을 넘지 않게)
  const wantsExtra = () => S.level === 'challenge' || S.streak >= 2 || S.role === 'teacher';
  function advance() {
    const st = curStage();
    const a = st.activities[S.act];
    let next = S.item + 1;
    while (next < a.items.length && a.items[next].extra && !wantsExtra()) next++;
    if (next < a.items.length) S.item = next;
    else if (S.act < st.activities.length - 1) { S.act++; S.item = 0; }
    else { S.stage++; S.maxStage = Math.max(S.maxStage, S.stage); S.act = 0; S.item = 0; }
    render(); focusStage();
  }
  // 휴대폰에서는 화면 맨 위로(짧아진 머리말과 교구가 첫 화면에 함께), 넓은 화면은 전처럼 단계로 굴린다
  function focusStage() { if (phone()) { $('#stage').focus({ preventScroll: true }); window.scrollTo(0, 0); } else $('#stage').focus(); }

  // ---- 정리: 출구 질문 + 제출 ----
  function renderWrap(st) {
    const box = $('#stage');
    box.innerHTML = `
      <section class="pl-card pc-card">
        <h2>정리 · 출구 질문</h2>
        ${teacherBox(st.teacher)}
        ${notesBox()}
        <form id="exit" class="pl-exit" novalidate>
          ${st.exitTicket.map((q, i) => `<fieldset class="pl-q" data-q="${i}"><legend><span class="pl-qn">${i + 1}</span> ${esc(q.prompt)} ${readBtn(q.type === 'choice' ? `${q.prompt} ${q.options.map((o, k) => `${k + 1}번, ${o}.`).join(' ')}` : q.prompt)}</legend>${exitBody(q, i)}<div class="pl-review" id="review-${i}"></div></fieldset>`).join('')}
          <p class="pl-warn" id="exit-warn" role="alert" hidden></p>
          ${S.role === 'student' ? '<button class="pl-btn pl-btn--primary" type="submit"><i class="fi fi-rr-paper-plane" aria-hidden="true"></i> 선생님께 제출하기</button>' : '<p class="pl-muted">교사 화면에서는 제출하지 않습니다. 학생 결과는 교사 대시보드에서 모입니다.</p>'}
        </form>
        <div id="done"></div>
      </section>`;
    restoreExitDraft();
    $('#exit').addEventListener('change', saveExitDraft);
    const tools = S.exitTools = {}; const initial = {};
    st.exitTicket.forEach((q0, i) => {
      if (q0.type !== 'tool') return;
      const q = L.flow.itemAt(q0, S.level);
      // 전개 문항과 똑같이 장착한다: 옵션(+문항 단계별 toolOptions) → 시작 상태 → 목표(setTarget).
      // 목표를 넘기지 않으면 보기·질문을 목표 없이 만드는 교구가 있다(1학년 모으기 출구 3: 0·1만 고를 수 있었다)
      const start0 = L.flow.itemStart(q, S.level);
      tools[i] = K.mount(q.tool, $(`#exit-tool-${i}`), Object.assign({}, q.options || {}, start0.toolOptions));
      if (start0.state && tools[i].setState) tools[i].setState(start0.state);
      if (q.target && tools[i].setTarget) tools[i].setTarget(q.target);
      initial[i] = JSON.stringify(tools[i].getState());
    });
    $('#exit').addEventListener('submit', async (e) => {
      e.preventDefault();
      if (S.role !== 'student') return;
      const f = new FormData(e.target);
      // 고르지 않은 객관식은 막고, 손대지 않은 교구 문항은 한 번만 알려 준다
      const missing = st.exitTicket.map((q, i) => (q.type === 'choice' && f.get(`q${i}`) == null ? i + 1 : null)).filter(Boolean);
      const untouched = st.exitTicket.map((q, i) => (q.type === 'tool' && JSON.stringify(tools[i].getState()) === initial[i] ? i + 1 : null)).filter(Boolean);
      const warn = $('#exit-warn');
      if (missing.length) { warn.hidden = false; warn.textContent = `${missing.join(', ')}번 문제를 아직 고르지 않았어요.`; $(`[data-q="${missing[0] - 1}"] input`)?.focus(); return; }
      if (untouched.length && !S.exitWarned) { S.exitWarned = true; warn.hidden = false; warn.textContent = `${untouched.join(', ')}번 문제는 아직 교구를 움직이지 않았어요. 그대로 내려면 한 번 더 누르세요.`; return; }
      warn.hidden = true;
      const out = [];
      st.exitTicket.forEach((q, i) => {
        const key = `exit.${i + 1}`;
        if (q.type === 'choice') { const v = f.get(`q${i}`); out.push({ key, value: v == null ? null : Number(v), correct: v == null ? false : Number(v) === q.answer }); }
        else if (q.type === 'tool') { const c = tools[i].check(L.flow.itemAt(q, S.level).target); out.push({ key, value: tools[i].getState(), correct: c.correct, feedback: c.feedback }); }
        else if (q.type === 'short') out.push({ key, value: String(f.get(`q${i}`) || '').slice(0, 300), correct: null });
        else out.push({ key, value: f.get(`q${i}`) || null, correct: null });
      });
      await finish(out);
      // 제출 뒤에는 맞았는지와 정답을 보여 준다 — 틀린 오개념을 그대로 들고 가지 않게
      st.exitTicket.forEach((q, i) => {
        const o = out[i]; const rv = $(`#review-${i}`); if (!rv || o.correct == null) return;
        const right = q.type === 'choice' ? q.options[q.answer] : null;
        rv.innerHTML = `<p class="${o.correct ? 'pl-ok' : 'pl-no'}"><i class="fi ${o.correct ? 'fi-rr-check' : 'fi-rr-cross-small'}" aria-hidden="true"></i> ${o.correct ? '맞았어요.' : `다시 보기: ${right ? `정답은 '${esc(right)}'이에요.` : esc(o.feedback || '')}`} ${q.explain ? esc(q.explain) : ''}</p>`;
      });
      $('#exit').dataset.sent = '1'; $('#exit').querySelectorAll('input, textarea').forEach((x) => { x.disabled = true; });
    });
  }

  // 정리 화면을 떠났다 돌아와도 고른 답이 남게 — 고른 답을 기억해 두었다가 되살린다
  function saveExitDraft() {
    const f = $('#exit'); if (!f || f.dataset.sent) return;
    S.exitDraft = Object.fromEntries([...new FormData(f).entries()]);
  }
  function restoreExitDraft() {
    for (const [k, v] of Object.entries(S.exitDraft || {})) {
      const el = document.querySelector(`#exit [name="${k}"][value="${CSS.escape(String(v))}"]`) || document.querySelector(`#exit textarea[name="${k}"]`);
      if (el && el.type === 'radio') el.checked = true; else if (el) el.value = v;
    }
  }

  function exitBody(q, i) {
    if (q.type === 'choice') return `<div class="pl-choices">${q.options.map((o, k) => `<label class="pl-choice"><input type="radio" name="q${i}" value="${k}"> <span>${esc(o)}</span></label>`).join('')}</div>`;
    if (q.type === 'tool') return `<div class="pl-tool pl-tool--exit" id="exit-tool-${i}"></div>`;
    if (q.type === 'short') return `<textarea name="q${i}" rows="3" maxlength="300" placeholder="생각을 짧게 써 보세요"></textarea>`;
    return `<div class="pl-mood">${[['good', 'fi-rr-smile', '재미있고 잘 알겠어요'], ['ok', 'fi-rr-meh', '조금 어려웠어요'], ['hard', 'fi-rr-sad', '많이 어려웠어요']].map(([v, ic, t]) => `<label class="pl-choice"><input type="radio" name="q${i}" value="${v}"> <i class="fi ${ic}" aria-hidden="true"></i> <span>${t}</span></label>`).join('')}</div>`;
  }

  async function finish(exit) {
    const items = Object.values(S.items).map(({ t0, lastJSON, lockUntil, hintLevels, ...r }) => (hintLevels && hintLevels.length ? { ...r, hintLevels } : r));
    const scored = items.filter((r) => !r.free);
    const exitScored = exit.filter((e) => e.correct != null);
    const correct = scored.filter((r) => r.correct && r.attempts === 1).length + exitScored.filter((e) => e.correct).length;
    const total = scored.length + exitScored.length;
    const solved = scored.filter((r) => r.correct).length + exitScored.filter((e) => e.correct).length;
    const finishedAt = new Date().toISOString();
    const base = {
      schema: 'edu-lesson-result.v1', lessonId: S.lesson.id, title: S.lesson.title, grade: S.lesson.grade, subject: S.lesson.subject,
      classCode: S.classCode, nickname: S.nickname, pairWith: S.pairSeat || undefined,
      level: S.level, levelChanges: S.levelChanges, startedAt: new Date(S.started).toISOString(), finishedAt,
      durationSec: Math.round((Date.now() - S.started) / 1000),
      score: { correct, total, solved }, items, exitTicket: exit, events: K.recorder.events.length,
    };
    // 포털·허브가 번호로 학생을 묶는 가명 키(반 코드+번호). 이름은 어디에도 없다. 짝이 있으면 같은 결과를 두 번호로 낸다.
    const mk = (seat) => ({ ...base, pairWith: S.pairSeat ? (seat === S.seat ? S.pairSeat : S.seat) : undefined, id: `${S.lesson.id}:${S.classCode}:${seat}:${finishedAt}`, seat, studentKey: `${S.classCode || `m${qs.get('material_id') || 'x'}`}-${seat}` });
    const result = mk(S.seat);
    const btn = $('#exit button[type="submit"]'); if (btn) { btn.disabled = true; btn.textContent = '보내는 중…'; }
    const collect = qs.get('collect') === '1' ? `${location.origin}/api/tools/${encodeURIComponent(`edu-lesson:${S.lesson.id}`)}/submissions` : qs.get('collect') || undefined;
    const opts = { collect, materialId: qs.get('material_id') || qs.get('materialId') || undefined, pin: qs.get('pin') || undefined };
    const sent = await L.submit(result, opts);
    if (S.pairSeat) await L.submit(mk(S.pairSeat), opts);
    window.__lastResult = { result, sent };
    const short = L.encodeShort(result, S.lesson);
    const stars = total ? Math.round((solved / total) * 2 + (correct / total)) : 0; // 끝까지 해낸 것 2별 + 한 번에 맞힘 1별
    // 받음 확인이 오면 '받았어요', 못 받았다고 오면 정직하게 실패와 코드를, 답이 없으면 '보냈어요'(확인 안 됨) 그대로
    const headline = () => (sent.portal === 'received' ? '선생님께 받았어요!' : sent.delivered ? '선생님께 보냈어요!' : sent.portal === 'rejected' ? '선생님 쪽에서 받지 못했어요.' : '아직 선생님께 가지 않았어요.');
    const btnHTML = () => (sent.portal === 'received' ? '<i class="fi fi-rr-check-double" aria-hidden="true"></i> 선생님께 받았어요'
      : sent.delivered ? '<i class="fi fi-rr-check" aria-hidden="true"></i> 보냈어요' : '<i class="fi fi-rr-time-past" aria-hidden="true"></i> 코드를 선생님께 보여 주세요');
    const shortBox = () => `<div class="pl-short"><p>이 코드를 선생님께 보여 주세요</p><p class="pl-short__code" aria-label="제출 코드 ${esc(short.split('').join(' '))}">${esc(short)}</p>${sent.routes.some((r) => /HTTP 404|HTTP 405/.test(r)) || !sent.routes.some((r) => r.startsWith('hub-failed') || r === 'queued') ? '' : '<p class="pl-muted">와이파이가 되면 이 화면을 다시 열어도 자동으로 보내요.</p>'}</div>`;
    if (btn) btn.innerHTML = btnHTML();
    $('#done').innerHTML = `
      <div class="pl-done" role="status">
        <p class="pl-stars" aria-label="별 ${stars}개">${[0, 1, 2].map((k) => `<span class="pl-star ${k < stars ? 'is-on' : ''}"><i class="fi fi-rr-star" aria-hidden="true"></i></span>`).join('')}</p>
        <p><b id="done-head">${headline()}</b></p>
        <p>끝까지 해낸 문제 <b>${solved} / ${total}</b> · 한 번에 맞힌 문제 <b>${correct} / ${total}</b></p>
        <div id="done-short">${sent.delivered ? '' : shortBox()}</div>
        <details><summary>자세한 결과 파일</summary><textarea readonly rows="3" class="pl-code" aria-label="긴 제출 코드">${esc(sent.code)}</textarea>
        <button type="button" class="pl-btn" id="dl"><i class="fi fi-rr-download" aria-hidden="true"></i> 결과 파일 저장</button></details>
      </div>`;
    $('#dl').addEventListener('click', () => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([JSON.stringify(result, null, 1)], { type: 'application/json' }));
      a.download = `${S.lesson.id}-${S.classCode || 'class'}-${S.seat}.json`; a.click();
    });
    window.__lastResult.short = short;
    $('#done').scrollIntoView({ behavior: 'smooth', block: 'center' }); $('#done .pl-done').setAttribute('tabindex', '-1'); $('#done .pl-done').focus({ preventScroll: true });
    document.dispatchEvent(new CustomEvent('lesson:submitted', { detail: window.__lastResult }));
    if (sent.ack) {
      sent.ack.then((state) => {
        if (state !== 'unconfirmed') {
          if (btn) btn.innerHTML = btnHTML();
          const head = $('#done-head'); if (head) head.textContent = headline();
          const box = $('#done-short'); if (box && !sent.delivered) box.innerHTML = shortBox();
        }
        document.dispatchEvent(new CustomEvent('lesson:ack', { detail: { state, clientId: sent.clientId } }));
      });
    }
  }

  // ---- 인쇄 활동지: 생태계 종이 학습지 양식(classroom-ui .edu-exam-*) ----
  function renderPrint(easy) {
    const l = S.lesson; const ws = l.worksheet;
    const q = (num, text, body) => `<section class="edu-exam-q"><div class="edu-exam-q-header"><span class="edu-exam-q-num">${num}</span><span class="edu-exam-q-text">${esc(text)}</span></div>${body}</section>`;
    const body = (it, i) => {
      if (it.type === 'figure') return `<div class="ws-figs ${it.wide ? 'ws-figs--wide' : ''}">${it.figures.map((f, k) => `<figure><div class="ws-fig" id="fig-${i}-${k}"></div><figcaption>${esc(f.caption || '')}</figcaption></figure>`).join('')}</div>`;
      // 보기 번호 ①②③④ — 종이에서는 '몇 번'으로 말하고 ○ 표시할 자리가 있어야 한다
      if (it.type === 'choice') return `<ol class="edu-exam-choices edu-exam-choices-horizontal">${it.options.map((o, k) => `<li class="edu-exam-choice"><span class="edu-exam-choice-marker" aria-hidden="true">${CIRCLED[k] || `(${k + 1})`}</span><span class="edu-exam-choice-text">${esc(o)}</span></li>`).join('')}</ol>`;
      if (it.type === 'blank') return `<p class="ws-blank">${esc(it.text).replace(/___/g, '<span class="edu-exam-blank-underline"></span>')}</p>`;
      if (it.type === 'check') return `<ul class="ws-checks">${it.options.map((o) => `<li>□ ${esc(o)}</li>`).join('')}</ul>`;
      // cells: 미리 채운 칸(2차원 배열, ''는 학생이 채울 빈칸). 없으면 rows만큼 빈 줄
      if (it.type === 'table') {
        const grid = Array.isArray(it.cells) ? it.cells : Array.from({ length: it.rows || 3 }, () => it.columns.map(() => ''));
        return `<table class="ws-grid"><tr>${it.columns.map((c) => `<th>${esc(c)}</th>`).join('')}</tr>${grid.map((row) => `<tr>${it.columns.map((_, c) => (row[c] ? `<td class="ws-given">${esc(row[c])}</td>` : '<td></td>')).join('')}</tr>`).join('')}</table>`;
      }
      return `<div class="edu-exam-essay-box${it.type === 'draw' ? ' ws-draw' : ''}"></div>`;
    };
    const items = easy && ws.easy?.items ? ws.easy.items : ws.items;
    const answers = qs.get('answers') === '1';
    app.innerHTML = `
      <div class="pl-print-bar no-print">
        <a class="pl-btn" href="?lesson=${encodeURIComponent(l.id)}&role=print${easy ? '' : '&variant=easy'}">${easy ? '기본 활동지 보기' : '쉬운 활동지 보기'}</a>
        <a class="pl-btn" href="?lesson=${encodeURIComponent(l.id)}&role=print${easy ? '&variant=easy' : ''}${answers ? '' : '&answers=1'}">${answers ? '정답 숨기기' : '교사용 정답 보기'}</a>
        <button type="button" class="pl-btn pl-btn--primary" onclick="window.print()"><i class="fi fi-rr-print" aria-hidden="true"></i> 인쇄</button>
      </div>
      <article class="edu-exam-sheet ws ${easy ? 'ws--easy' : ''} ${l.grade <= 2 ? 'ws--low' : ''}">
        <header class="edu-exam-header">
          <div class="edu-exam-header-top">
            <span class="edu-exam-org-badge">${l.grade}학년 ${esc(l.subject)}${easy ? ' · 쉬운 버전' : ''}${answers ? ' · 교사용' : ''}</span>
            <div class="edu-exam-title-group">
              <h1 class="edu-exam-main-title">${esc(l.unitTitle)} · ${esc(ws.title || l.title)}</h1>
              <p class="edu-exam-sub-title">${esc(l.title)}</p>
            </div>
          </div>
          <table class="edu-exam-meta-table"><tr><th>학년 반</th><td></td><th>번호</th><td></td><th>이름</th><td class="ws-name"></td></tr></table>
        </header>
        <div class="edu-exam-passage"><span class="edu-exam-passage-title">오늘의 목표</span> ${esc(l.objective)}</div>
        ${easy && ws.easy?.note ? `<div class="ws-words"><b>도움말</b> ${esc(ws.easy.note)}</div>` : ''}
        ${l.safety?.length ? `<div class="ws-safety"><b>안전 약속</b><ul>${l.safety.map((s) => `<li>${esc(s)}</li>`).join('')}</ul></div>` : ''}
        ${items.map((it, i) => q(`${i + 1}.`, it.prompt, body(it, i) + (answers && it.answer ? `<p class="ws-answer">정답: ${esc(it.answer)}</p>` : ''))).join('')}
        <footer class="edu-exam-footer">스스로 평가: 잘했어요 ○ &nbsp; 보통이에요 ○ &nbsp; 더 연습할래요 ○</footer>
      </article>`;
    items.forEach((it, i) => {
      if (it.type !== 'figure') return;
      it.figures.forEach((f, k) => {
        const t = K.mount(it.tool, $(`#fig-${i}-${k}`), Object.assign({ print: true }, it.options || {}, f.options || {}));
        if (f.state && t.setState) t.setState(f.state);
      });
    });
    K.printMode(true);
  }

  document.addEventListener('click', (e) => {
    const rd = e.target.closest('[data-read]');
    if (rd) { speak(rd.dataset.read, true); return; }
    const pf = e.target.closest('[data-pref]');
    if (pf) {
      const k = pf.dataset.pref;
      if (k === 'sound') { pref.sound = pref.sound === false; K.setSound(pref.sound !== false); if (pref.sound === false && 'speechSynthesis' in window) speechSynthesis.cancel(); }
      savePref();
      // 화면을 다시 그리지 않고 단추만 바꾼다 — 놓아 둔 조각·고른 답이 지워지지 않게
      const snd = $('[data-pref="sound"]');
      if (snd) { snd.setAttribute('aria-pressed', String(pref.sound !== false)); snd.innerHTML = soundLabel(); }
      return;
    }
    const ds = e.target.closest('[data-dismiss]'); if (ds) { S.suggestOff[ds.dataset.dismiss] = true; $('#suggest').innerHTML = ''; return; }
    const lv = e.target.closest('[data-level]');
    if (lv && S.lesson && S.role !== 'print') {
      // 이미 고른 난이도를 다시 누르면 아무것도 하지 않는다 — 다시 그리면 해 둔 조작이 지워진다
      if (!L.flow.levelChanges(S.level, lv.dataset.level)) return;
      S.levelChanges.push({ from: S.level, to: lv.dataset.level, at: K.recorder.events.length }); S.level = lv.dataset.level;
      K.recorder.log('level', { level: S.level });
      // 정리(출구 질문) 화면은 다시 그리지 않는다 — 고른 답이 지워지지 않게
      if (curStage().id === 'wrapup') { document.querySelectorAll('.pl-level__b').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.level === S.level))); return; }
      render(); return;
    }
    const ja = e.target.closest('[data-act]'); if (ja && S.role === 'teacher') { S.act = Number(ja.dataset.act); S.item = 0; render(); return; }
    if (e.target.closest('[data-skip]') && S.role === 'teacher') { advance(); return; }
    const sg = e.target.closest('[data-stage]');
    if (sg && !sg.disabled) {
      const i = Number(sg.dataset.stage);
      if (i <= S.maxStage) {
        saveExitDraft(); S.stage = i; S.act = 0; S.item = 0;
        // 전개로 돌아오면 아직 못 푼 첫 문항부터(다 풀었으면 처음 문항을 다시 볼 수 있지만 기록은 그대로)
        if (stages()[i].id === 'main') {
          const acts = stages()[i].activities;
          outer: for (let x = 0; x < acts.length; x++) for (let y = 0; y < acts[x].items.length; y++) { const x0 = S.items[keyOf(acts[x], y)]; if (!x0?.correct && !x0?.closed) { S.act = x; S.item = y; break outer; } }
        }
        render();
      }
      return;
    }
    if (e.target.closest('[data-next]')) { S.stage = Math.min(S.stage + 1, stages().length - 1); S.maxStage = Math.max(S.maxStage, S.stage); S.act = 0; S.item = 0; render(); focusStage(); }
  });

  window.addEventListener('DOMContentLoaded', start);
})();
