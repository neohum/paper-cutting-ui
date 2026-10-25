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
  S.goto = (i) => { S.stage = i; S.maxStage = Math.max(S.maxStage, i); S.act = 0; S.item = 0; render(); };
  const keyOf = (a, i) => `${a.id}.${i + 1}`;
  const rec = (a, i) => (S.items[keyOf(a, i)] ??= { key: keyOf(a, i), activity: a.id, attempts: 0, hints: 0, correct: false, level: S.level, ms: 0, t0: Date.now() });

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
    K.scene($('#join-art'), S.lesson.illustration.scene);
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

  const stages = () => S.lesson.stages;
  const curStage = () => stages()[S.stage];

  function render() {
    const st = curStage();
    S.stageT0[S.stage] ??= Date.now();
    const total = stages().reduce((a, s) => a + s.minutes, 0);
    const who = `${esc(S.classCode || '반 코드 없음')} · ${esc(S.seat)}번${S.pairSeat ? `·${esc(S.pairSeat)}번` : ''}${S.nickname ? ` · ${esc(S.nickname)}` : ''}`;
    app.innerHTML = `
      <header class="pl-top pc-card">
        <div class="pl-top__title">
          <span class="pl-chip">${S.lesson.grade}학년 ${esc(S.lesson.subject)}</span>
          <h1>${esc(S.lesson.title)}</h1>
          ${S.role === 'student' && S.lesson.grade <= 2 ? '' : `<p class="pl-goal"><b>목표</b> ${esc(S.lesson.objective)}</p>`}
        </div>
        <div class="pl-top__side">
          <div class="pl-level" role="group" aria-label="난이도">${Object.entries(LEVELS).map(([k, v]) => `<button type="button" class="pl-level__b" data-level="${k}" aria-pressed="${S.level === k}">${v}</button>`).join('')}</div>
          <div class="pl-prefs">
            <button type="button" class="pl-pref" data-pref="sound" aria-pressed="${pref.sound !== false}"><i class="fi ${pref.sound === false ? 'fi-rr-volume-mute' : 'fi-rr-volume'}" aria-hidden="true"></i> 소리 ${pref.sound === false ? '꺼짐' : '켜짐'}</button>
          </div>
          ${S.role === 'student' ? `<span class="pl-muted">${who}</span>` : ''}
        </div>
      </header>
      <nav class="pl-steps" aria-label="수업 단계">
        ${stages().map((s, i) => { const locked = i > S.maxStage; return `<button type="button" class="pl-step ${i === S.stage ? 'is-on' : ''} ${i < S.stage ? 'is-done' : ''}" data-stage="${i}" ${i === S.stage ? 'aria-current="step"' : ''} ${locked ? 'disabled title="앞 단계를 마치면 열려요"' : ''} style="flex:${s.minutes}">
          <span>${locked ? '<i class="fi fi-rr-lock" aria-hidden="true"></i> ' : ''}${esc(s.title)}</span><small>${s.minutes}분</small></button>`; }).join('')}
      </nav>
      ${S.role === 'teacher' ? '<div class="pl-timer pc-card" id="timer" aria-live="off"></div>' : ''}
      <main id="stage" class="pl-stage" tabindex="-1"></main>
      <p class="pl-muted pl-foot">40분 수업 · 총 ${total}분 구성 · ${S.role === 'teacher' ? '교사는 단계·활동을 자유롭게 넘길 수 있습니다' : '앞 단계를 마치면 다음 단계가 열려요'}</p>`;
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
    K.scene($('#art'), S.lesson.illustration.scene);
    if (st.demo) {
      // 학생 화면의 시연 교구는 보기만 한다(Tab 순서에서 빼서 '활동 시작'까지 Tab을 덜 누르게)
      if (S.role !== 'teacher') { $('#demo').inert = true; $('#demo').setAttribute('aria-hidden', 'true'); }
      const t = K.mount(st.demo.tool, $('#demo'), Object.assign({ demoView: S.role === 'teacher' }, st.demo.options || {}));
      $('#demo-play')?.addEventListener('click', async () => { for (const s of st.demo.sequence) { await t.demo(s); await K.wait(900); } });
    }
  }

  const levelOpts = (a) => Object.assign({}, a.options || {}, (a.levels || {})[S.level] || {});

  function renderActivity(st) {
    const a = st.activities[S.act]; const it = a.items[S.item];
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
        <div class="pl-work">
          <div class="pl-side">
            <ol class="pl-dots" aria-label="문항 진행">${a.items.map((_, i) => { const r = S.items[keyOf(a, i)]; return `<li class="${i === S.item ? 'is-on' : ''} ${r?.correct ? 'is-ok' : ''}" aria-label="${i + 1}번${r?.correct ? ' 맞음' : ''}"></li>`; }).join('')}</ol>
            ${it.extra ? '<span class="pl-chip">더 해 보기</span>' : ''}
            <p class="pl-prompt" id="prompt">${esc(it.prompt)} ${readBtn(it.prompt)}</p>
            <div class="pl-feedback" id="fb" role="status" aria-live="polite"></div>
          </div>
          <div class="pl-tool" id="tool"></div>
          <div class="pl-side pl-side--actions">
            <div class="pl-actions">
              <button type="button" class="pl-btn pl-btn--primary" id="check">${it.free ? '<i class="fi fi-rr-check" aria-hidden="true"></i> 다 했어요' : '<i class="fi fi-rr-check" aria-hidden="true"></i> 확인'}</button>
              ${it.free ? '' : '<button type="button" class="pl-btn" id="hint"><i class="fi fi-rr-bulb" aria-hidden="true"></i> 힌트</button>'}
              <button type="button" class="pl-btn" id="reset"><i class="fi fi-rr-rotate-left" aria-hidden="true"></i> 처음으로</button>
            </div>
            <div id="suggest"></div>
          </div>
        </div>
      </section>`;
    S.tool = K.mount(a.tool, $('#tool'), Object.assign({}, levelOpts(a), it.toolOptions || {}));
    if (it.state && S.tool.setState) S.tool.setState(it.state);
    if (it.target && S.tool.setTarget) S.tool.setTarget(it.target);
    const r = rec(a, S.item); r.t0 = Date.now();
    const initialJSON = JSON.stringify(S.tool.getState());
    let lastHint = '';
    $('#check').addEventListener('click', () => {
      // 짝 활동(정답 없는 문항)도 교구를 한 번은 움직여야 '다 했어요'가 된다
      // (말하기만 하는 문항 talk:true는 예외)
      if (it.free && !it.talk && JSON.stringify(S.tool.getState()) === initialJSON) { $('#fb').innerHTML = '<p class="pl-hint">교구로 직접 만들어 본 뒤에 눌러요.</p>'; return; }
      if (it.free) { r.correct = true; r.free = true; r.attempts++; r.answer = S.tool.getState(); K.recorder.log('free', { key: r.key }); return advance(); }
      // 이미 맞힌 문항을 다시 보는 중이면 기록을 바꾸지 않는다
      if (r.correct) { const res0 = S.tool.check(it.target); $('#fb').className = `pl-feedback ${res0.correct ? 'is-ok' : 'is-no'}`; $('#fb').textContent = res0.correct ? '이미 맞힌 문제예요. 다음으로 넘어가요.' : res0.feedback; if (res0.correct) setTimeout(advance, 900); return; }
      // 아무것도 바꾸지 않고 다시 누른 '확인'은 시도로 세지 않는다(연타가 점수를 깎지 않게)
      const now = JSON.stringify(S.tool.getState());
      if (r.attempts && now === r.lastJSON && !r.correct) { $('#fb').innerHTML = '<p class="pl-hint">교구를 움직여 바꾼 뒤에 다시 확인해요.</p>'; return; }
      const res = S.tool.check(it.target);
      // 교구가 '아직 다 하지 않음'(incomplete)이라고 하면 시도로 세지 않고 안내만 한다(예: 까닭을 아직 안 고름)
      if (res.incomplete) { $('#fb').className = 'pl-feedback'; $('#fb').innerHTML = `<p class="pl-hint">${esc(res.feedback)}</p>`; return; }
      r.lastJSON = now;
      // 기록하는 단계는 '확인을 누른 때'의 단계 — 단계를 바꾼 직후 문항이 이전 단계로 남지 않게
      r.attempts++; r.level = S.level; r.last = S.tool.getState(); lastHint = res.hint || lastHint;
      K.recorder.log('check', { key: r.key, ok: res.correct });
      const fb = $('#fb');
      fb.className = `pl-feedback ${res.correct ? 'is-ok' : 'is-no'}`;
      fb.innerHTML = `<i class="fi ${res.correct ? 'fi-rr-star' : 'fi-rr-refresh'}" aria-hidden="true"></i> ${esc(res.feedback)}`;
      K.tick(res.correct ? 'ok' : 'no');
      if (res.correct) {
        r.correct = true; r.ms = Date.now() - r.t0;
        S.streak = r.attempts === 1 ? S.streak + 1 : 0;
        $('#check').disabled = true;
        // 기다리는 사이 교사가 단계·활동을 바꿨으면 넘기지 않는다
        const at = `${S.stage}.${S.act}.${S.item}`;
        setTimeout(() => { if (`${S.stage}.${S.act}.${S.item}` === at) advance(); }, 1100);
      } else {
        S.streak = 0;
        $('#suggest').innerHTML = ''; // 틀렸을 때 '단계 올리기' 권유가 남아 있지 않게
        // 두 번 틀리면 힌트를 자동으로 보이고, 세 번 틀리면 쉬운 단계를 권한다
        if (r.attempts >= 2 && res.hint) { r.hints++; fb.innerHTML += `<p class="pl-hint"><b>힌트</b> ${esc(res.hint)}</p>`; }
        if (r.attempts >= 3 && S.level !== 'easy') suggest(a, 'easy', '어렵다면 쉬운 단계로 바꿔 볼까요?');
        // 네 번 넘게 막히면 넘어갈 수 있다 — 못 푼 문항으로 기록되어 교사 화면에 보인다
        if (r.attempts >= 4 && !$('#giveup')) {
          $('.pl-actions').insertAdjacentHTML('beforeend', '<button type="button" class="pl-btn" id="giveup"><i class="fi fi-rr-arrow-right" aria-hidden="true"></i> 다음 문제로 (나중에 선생님과 다시)</button>');
          $('#giveup').addEventListener('click', () => { r.gaveUp = true; K.recorder.log('giveup', { key: r.key }); S.streak = 0; advance(); });
        }
      }
    });
    $('#hint')?.addEventListener('click', () => {
      const res = S.tool.check(it.target);
      const h = res.correct ? '지금 상태가 맞아요. 확인을 눌러 보세요.' : (res.hint || lastHint || '도구를 천천히 움직여 보세요.');
      r.hints++; K.recorder.log('hint', { key: r.key });
      $('#fb').className = 'pl-feedback'; $('#fb').innerHTML = `<p class="pl-hint"><b>힌트</b> ${esc(h)}</p>`;
    });
    $('#reset').addEventListener('click', () => { S.tool.reset ? S.tool.reset() : null; if (it.state && S.tool.setState) S.tool.setState(it.state); });
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
    render(); $('#stage').focus();
  }

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
    st.exitTicket.forEach((q, i) => {
      if (q.type !== 'tool') return;
      tools[i] = K.mount(q.tool, $(`#exit-tool-${i}`), q.options || {});
      if (q.state && tools[i].setState) tools[i].setState(q.state);
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
        else if (q.type === 'tool') { const c = tools[i].check(q.target); out.push({ key, value: tools[i].getState(), correct: c.correct, feedback: c.feedback }); }
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
    const items = Object.values(S.items).map(({ t0, lastJSON, ...r }) => r);
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
    if (btn) { btn.innerHTML = sent.delivered ? '<i class="fi fi-rr-check" aria-hidden="true"></i> 보냈어요' : '<i class="fi fi-rr-time-past" aria-hidden="true"></i> 코드를 선생님께 보여 주세요'; }
    const short = L.encodeShort(result, S.lesson);
    const stars = total ? Math.round((solved / total) * 2 + (correct / total)) : 0; // 끝까지 해낸 것 2별 + 한 번에 맞힘 1별
    $('#done').innerHTML = `
      <div class="pl-done" role="status">
        <p class="pl-stars" aria-label="별 ${stars}개">${[0, 1, 2].map((k) => `<span class="pl-star ${k < stars ? 'is-on' : ''}"><i class="fi fi-rr-star" aria-hidden="true"></i></span>`).join('')}</p>
        <p><b>${sent.delivered ? '선생님께 보냈어요!' : '아직 선생님께 가지 않았어요.'}</b></p>
        <p>끝까지 해낸 문제 <b>${solved} / ${total}</b> · 한 번에 맞힌 문제 <b>${correct} / ${total}</b></p>
        ${sent.delivered ? '' : `<div class="pl-short"><p>이 코드를 선생님께 보여 주세요</p><p class="pl-short__code" aria-label="제출 코드 ${esc(short.split('').join(' '))}">${esc(short)}</p>${sent.routes.some((r) => /HTTP 404|HTTP 405/.test(r)) || !sent.routes.some((r) => r.startsWith('hub-failed') || r === 'queued') ? '' : '<p class="pl-muted">와이파이가 되면 이 화면을 다시 열어도 자동으로 보내요.</p>'}</div>`}
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
  }

  // ---- 인쇄 활동지: 생태계 종이 학습지 양식(classroom-ui .edu-exam-*) ----
  function renderPrint(easy) {
    const l = S.lesson; const ws = l.worksheet;
    const q = (num, text, body) => `<section class="edu-exam-q"><div class="edu-exam-q-header"><span class="edu-exam-q-num">${num}</span><span class="edu-exam-q-text">${esc(text)}</span></div>${body}</section>`;
    const body = (it, i) => {
      if (it.type === 'figure') return `<div class="ws-figs ${it.wide ? 'ws-figs--wide' : ''}">${it.figures.map((f, k) => `<figure><div class="ws-fig" id="fig-${i}-${k}"></div><figcaption>${esc(f.caption || '')}</figcaption></figure>`).join('')}</div>`;
      if (it.type === 'choice') return `<ol class="edu-exam-choices edu-exam-choices-horizontal">${it.options.map((o) => `<li class="edu-exam-choice"><span class="edu-exam-choice-marker"></span><span class="edu-exam-choice-text">${esc(o)}</span></li>`).join('')}</ol>`;
      if (it.type === 'blank') return `<p class="ws-blank">${esc(it.text).replace(/___/g, '<span class="edu-exam-blank-underline"></span>')}</p>`;
      if (it.type === 'check') return `<ul class="ws-checks">${it.options.map((o) => `<li>□ ${esc(o)}</li>`).join('')}</ul>`;
      if (it.type === 'table') return `<table class="ws-grid"><tr>${it.columns.map((c) => `<th>${esc(c)}</th>`).join('')}</tr>${Array.from({ length: it.rows || 3 }, () => `<tr>${it.columns.map(() => '<td></td>').join('')}</tr>`).join('')}</table>`;
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
      if (snd) { snd.setAttribute('aria-pressed', String(pref.sound !== false)); snd.innerHTML = `<i class="fi ${pref.sound === false ? 'fi-rr-volume-mute' : 'fi-rr-volume'}" aria-hidden="true"></i> 소리 ${pref.sound === false ? '꺼짐' : '켜짐'}`; }
      return;
    }
    const ds = e.target.closest('[data-dismiss]'); if (ds) { S.suggestOff[ds.dataset.dismiss] = true; $('#suggest').innerHTML = ''; return; }
    const lv = e.target.closest('[data-level]');
    if (lv && S.lesson && S.role !== 'print') {
      if (lv.dataset.level !== S.level) { S.levelChanges.push({ from: S.level, to: lv.dataset.level, at: K.recorder.events.length }); S.level = lv.dataset.level; }
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
          outer: for (let x = 0; x < acts.length; x++) for (let y = 0; y < acts[x].items.length; y++) if (!S.items[keyOf(acts[x], y)]?.correct) { S.act = x; S.item = y; break outer; }
        }
        render();
      }
      return;
    }
    if (e.target.closest('[data-next]')) { S.stage = Math.min(S.stage + 1, stages().length - 1); S.maxStage = Math.max(S.maxStage, S.stage); S.act = 0; S.item = 0; render(); $('#stage').focus(); }
  });

  window.addEventListener('DOMContentLoaded', start);
})();
