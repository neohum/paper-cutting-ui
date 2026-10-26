/* 교사 화면 — 차시 고르기 → 배포(포털·허브·링크/QR·종이) → 결과 모으기(허브/포털 자동 + 제출 코드·파일) → 난이도 권고 */
(function () {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const lessons = window.EDU_LESSONS || [];
  const onHub = location.protocol.startsWith('http');
  const KEY = 'edu-teacher-view';
  const saved = (() => { try { return JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (_) { return {}; } })();
  const S = { grade: saved.grade || 0, lesson: null, rows: [], local: [], poll: 0 };
  $('#class').value = saved.classCode || '';
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify({ grade: S.grade, classCode: $('#class').value.trim(), lesson: S.lesson?.id })); } catch (_) { /* 저장 불가 */ } };
  const playerURL = (params) => new URL(`player.html?${new URLSearchParams(params)}`, location.href).toString();

  function renderGrades() {
    $('#grade-filter').innerHTML = [0, 1, 2, 3, 4, 5, 6].map((g) => `<button type="button" class="pl-level__b" data-grade="${g}" aria-pressed="${S.grade === g}">${g ? `${g}학년` : '전체'}</button>`).join('');
  }
  function renderLessons() {
    const list = lessons.filter((l) => !S.grade || l.grade === S.grade);
    $('#lessons').innerHTML = list.map((l) => `
      <li><button type="button" class="t-lesson ${S.lesson?.id === l.id ? 'is-on' : ''}" data-lesson="${l.id}" aria-pressed="${S.lesson?.id === l.id}">
        <span class="pl-chip">${l.grade}학년 ${esc(l.subject)}</span>
        <b>${esc(l.title)}</b>
        <span class="pl-muted">${esc(l.unit)} · 교구 ${l.tools.map(esc).join(', ')}</span>
      </button></li>`).join('') || '<li class="pl-muted">이 학년 차시는 아직 없습니다.</li>';
  }

  async function select(id) {
    S.lesson = lessons.find((l) => l.id === id); save(); renderLessons();
    try { S.full = await PaperLessons.load(id, { tools: false }); S.labels = LessonAnalytics.labelsOf(S.full); } catch (_) { S.full = null; S.labels = {}; }
    $('#dist').hidden = false; $('#collect').hidden = false;
    $('#dist-title').textContent = `${S.lesson.grade}학년 ${S.lesson.subject} · ${S.lesson.title}`;
    renderDist(); startPolling(); renderSummary();
  }

  function renderDist() {
    const l = S.lesson; const cls = $('#class').value.trim();
    // collect=1: 플레이어가 같은 출처의 수집 주소를 스스로 만든다(링크가 짧아져 QR이 성글다)
    const student = playerURL({ lesson: l.id, ...(cls ? { class: cls } : {}), ...(onHub ? { collect: '1' } : {}) });
    $('#student-url').value = student;
    $('#teacher-url').value = playerURL({ lesson: l.id, role: 'teacher' });
    $('#open-teacher').href = $('#teacher-url').value;
    $('#ws-basic').href = playerURL({ lesson: l.id, role: 'print' });
    $('#ws-easy').href = playerURL({ lesson: l.id, role: 'print', variant: 'easy' });
    $('#hub-zip').href = `../dist/${l.id}.zip`;
    $('#hub-open').href = onHub ? `${location.origin}/dist/${l.id}/` : `../dist/${l.id}/index.html`;
    // 포털 과제: 링크에 반 코드만(수집 주소는 포털이 맡는다)
    const portalUrl = playerURL({ lesson: l.id, ...(cls ? { class: cls } : {}) });
    $('#portal-url').value = portalUrl;
    const m = /^(\d)-(\d{1,2})$/.exec(cls);
    S.assignment = {
      title: `[${l.grade}학년 ${l.subject}] ${l.title}`, target_grade: l.grade, ...(m ? { target_class_num: Number(m[2]) } : {}),
      payload_json: { activity_type: 'external', subject_tag: l.subject, reward_points: 0, questions_json: [], background_images_json: [], external_links: [{ url: portalUrl, name: l.title }] },
    };
    $('#portal-json').textContent = JSON.stringify(S.assignment, null, 2);
    const qr = window.qrcode(0, 'M'); qr.addData(student); qr.make();
    $('#qr').innerHTML = qr.createSvgTag({ cellSize: 4, margin: 2, scalable: true });
    $('#qr-big-box').innerHTML = $('#qr').innerHTML;
  }

  // ---- 수집 ----
  async function pull() {
    if (!onHub || !S.lesson) return;
    try {
      const cls = $('#class').value.trim();
      const r = await fetch(`/api/results?lesson=${encodeURIComponent(S.lesson.id)}${cls ? `&class=${encodeURIComponent(cls)}` : ''}`);
      if (!r.ok) throw new Error(r.status);
      S.rows = await r.json();
      $('#live').textContent = `자동 수집 중 · ${new Date().toLocaleTimeString('ko-KR')} 갱신`;
      renderSummary();
    } catch (_) { $('#live').textContent = '자동 수집 주소에 연결되지 않습니다 — 제출 코드나 파일로 모아 주세요.'; }
  }
  function startPolling() { clearInterval(S.poll); if (onHub) { pull(); S.poll = setInterval(pull, 3000); } else $('#live').textContent = '파일로 열었습니다 — 제출 코드·파일로 모읍니다.'; }

  const forLesson = (r) => { const d = r.schema ? r : r.data; return d && d.lessonId === S.lesson.id; };
  // 예상(predict) 문항: 반 학생들이 무엇을 예상했는지(채점 아님). 차시의 predict.answer가 있으면 그 보기를 표시한다
  function predictTable(s) {
    // S.lesson은 목록(manifest) 항목이라 stages가 없다 — 단계 구조는 읽어 온 차시(S.full)에 있다
    const defs = {};
    if (!S.full) return '';
    for (const a of S.full.stages[1].activities) a.items.forEach((it, i) => { if (it.predict) defs[`${a.id}.${i + 1}`] = it.predict; });
    const rows = (s.predicts || []).filter((r) => defs[r.key]);
    if (!rows.length) return '';
    return `<h3>예상 분포 (채점하지 않음)</h3><table class="t-table"><tbody>${rows.map((r) => { const d = defs[r.key]; return `<tr><td><b>${esc(r.key)}</b> ${esc(d.q)}</td><td>${d.options.map((o, k) => `<span class="t-pred${d.answer === k ? ' is-ans' : ''}">${esc(o)} <b>${r.counts[k] || 0}</b></span>`).join(' ')}</td></tr>`; }).join('')}</tbody></table>`;
  }
  // 단계 바꾸기 한 줄: 몇 명이 몇 번, 쉽게·어렵게 어느 쪽으로, 누가(번호와 길)
  function levelMovesLine(s) {
    const m = s.levelMoves; if (!m || !m.students) return '';
    return `<p class="t-movesline"><i class="fi fi-rr-shuffle" aria-hidden="true"></i> <b>단계 바꿈</b> ${m.students}명 · ${m.total}번 (쉽게 ${m.down} · 어렵게 ${m.up})
      <span class="pl-muted">${m.who.map((w) => `${esc(w.seat)}번 ${esc(w.path)}`).join(' · ')}</span></p>`;
  }
  function renderSummary() {
    if (!S.lesson) return;
    const all = [...S.rows, ...S.local].filter(forLesson);
    const s = LessonAnalytics.summarize(all, S.labels || {});
    const expected = Number($('#expected').value) || 0;
    const bar = (v, cls = '') => `<span class="t-bar ${cls}" style="--v:${v}%"><span>${v}%</span></span>`;
    $('#summary').innerHTML = `
      <div class="t-stats">
        <div class="t-stat"><b>${s.n}${expected ? `/${expected}` : ''}</b><span>제출</span></div>
        <div class="t-stat"><b>${s.firstTry}%</b><span>한 번에 맞힘</span></div>
        <div class="t-stat"><b>${s.avgSolved}%</b><span>끝까지 해냄(평균)</span></div>
        <div class="t-stat"><b>${s.exitAvg ?? '–'}%</b><span>출구 질문 정답</span></div>
        <div class="t-stat"><b>${s.avgMinutes}분</b><span>평균 걸린 시간</span></div>
        <div class="t-stat"><b>${s.moods.good}·${s.moods.ok}·${s.moods.hard}</b><span>느낌(좋음·조금·많이 어려움)</span></div>
      </div>
      <div class="t-rec"><h3><i class="fi fi-rr-bulb" aria-hidden="true"></i> 다음 수업 난이도</h3><ul>${s.recommendations.map((r) => `<li>${esc(r)}</li>`).join('')}</ul></div>
      ${s.items.length ? `<h3>문항별</h3><table class="t-table"><thead><tr><th>문항</th><th>한 번에</th><th>결국 맞힘</th><th>평균 시도</th><th>힌트 본 학생</th></tr></thead><tbody>${s.items.map((r) => `<tr><td><b>${esc(r.key)}</b> ${esc(r.label)}</td><td>${bar(r.firstTry, r.firstTry < 50 ? 'is-low' : '')}</td><td>${bar(r.solved)}</td><td>${r.avgAttempts}</td><td>${r.hintRate}%</td></tr>`).join('')}</tbody></table>` : ''}
      ${levelMovesLine(s)}
      ${predictTable(s)}
      ${s.exits.length ? `<h3>출구 질문</h3><table class="t-table"><tbody>${s.exits.map((r) => `<tr><td><b>${esc(r.key)}</b> ${esc(r.label)}</td><td>${bar(r.correct, r.correct < 50 ? 'is-low' : '')}</td></tr>`).join('')}</tbody></table>` : ''}
      ${s.students.length ? `<h3>학생별 (이름 없이 번호만)</h3><table class="t-table"><thead><tr><th>번호</th><th>별명</th><th>단계</th><th>한 번에</th><th>끝까지</th><th>건너뜀</th><th>시간</th><th>느낌</th></tr></thead><tbody>${s.students.map((x) => `<tr class="${x.flag ? 'is-flag' : ''}"><td>${esc(x.seat)}${x.pairWith ? `·${esc(x.pairWith)}` : ''}</td><td>${esc(x.nickname)}</td><td>${esc({ easy: '쉬움', base: '기본', challenge: '도전' }[x.level] || x.level)}${x.levelChanges ? ` <span class="t-moves" title="${esc(x.levelPath)}">↺${x.levelChanges}</span>` : ''}</td><td>${x.firstTry}%</td><td>${x.solved}%</td><td>${x.skipped || ''}</td><td>${x.durationMin}분${x.durationMin > 40 ? ' ⚠' : ''}</td><td>${esc({ good: '좋음', ok: '조금 어려움', hard: '많이 어려움' }[x.mood] || '')}</td></tr>`).join('')}</tbody></table>` : ''}`;
    // 학생 수를 알면 아직 안 낸 번호를 보여 준다(모의 수업에서 2명이 멈춰도 누가 빠졌는지 몰랐던 문제)
    if (expected && s.n < expected) {
      const got = new Set(s.students.flatMap((x) => [String(x.seat), String(x.pairWith || '')]));
      const missing = Array.from({ length: expected }, (_, i) => String(i + 1)).filter((x) => !got.has(x));
      if (missing.length) $('#summary').insertAdjacentHTML('afterbegin', `<p class="t-warn"><i class="fi fi-rr-user-time" aria-hidden="true"></i> 아직 안 낸 번호: ${missing.join(', ')}</p>`);
    }
    window.__summary = s;
  }

  $('#add-codes').addEventListener('click', async () => {
    // 코드 하나 안의 띄어쓰기는 지우고, 줄바꿈·쉼표로만 코드를 나눈다(EL1 긴 코드는 공백 없음)
    if (!$('#class').value.trim()) { $('#import-status').textContent = '반 코드를 먼저 넣어 주세요. 짧은 코드에는 반이 담겨 있지 않습니다.'; $('#class').focus(); return; }
    const lines = $('#codes').value.split(/[\n,;]+/).map((x) => (/EL1\./.test(x) ? x.trim() : x.replace(/\s+/g, ''))).filter((x) => x.replace(/-/g, '').length >= 8); let ok = 0; let bad = 0; let dup = 0; const why = [];
    for (const c of lines) {
      try {
        // EL1.… 긴 코드(결과 파일 수준)와 4자씩 묶인 짧은 코드(EL2) 둘 다 받는다
        const r = /^EL1\./.test(c) ? PaperLessons.decode(c) : PaperLessons.decodeShort(c, S.full, $('#class').value.trim());
        if (r.lessonId !== S.lesson.id) { bad++; continue; }
        if ([...S.rows, ...S.local].some((x) => { const d = x.schema ? x : x.data; return d && d.lessonId === r.lessonId && d.seat === r.seat && (d.classCode || '') === (r.classCode || ''); })) { dup++; continue; }
        S.local.push(r); ok++;
        if (onHub) fetch('/api/results/import', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ appId: `edu-lesson:${r.lessonId}`, studentKey: `${r.classCode || 'noclass'}-${r.seat}`, data: r }) }).catch(() => {});
      } catch (e) { bad++; why.push(e.message); }
    }
    $('#import-status').textContent = `코드 ${ok}개를 넣었습니다${dup ? ` · ${dup}개는 이미 있는 학생이라 건너뜀` : ''}${bad ? ` · ${bad}개는 넣지 못했습니다(${[...new Set(why)].join(' / ') || '이 차시 코드가 아님'})` : ''}.`;
    $('#codes').value = ''; renderSummary();
  });
  $('#files').addEventListener('change', async (e) => {
    let ok = 0;
    for (const f of e.target.files) { try { const r = JSON.parse(await f.text()); if (r.schema === 'edu-lesson-result.v1') { S.local.push(r); ok++; } } catch (_) { /* 다른 파일 */ } }
    $('#import-status').textContent = `결과 파일 ${ok}개를 넣었습니다.`; renderSummary();
  });
  $('#csv').addEventListener('click', () => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([LessonAnalytics.toCSV([...S.rows, ...S.local].filter(forLesson), S.labels || {}, S.lesson.standards || [])], { type: 'text/csv' }));
    a.download = `${S.lesson.id}-${$('#class').value.trim() || 'class'}.csv`; a.click();
  });
  $('#portal-post').addEventListener('click', async () => {
    if (!onHub) { $('#portal-status').textContent = '시험용 포털은 classroom-hub.mjs로 열었을 때만 씁니다. 실제로는 런처의 자료 배포 화면에 링크를 붙이세요.'; return; }
    // 반 코드가 없으면 여러 반 결과가 같은 번호로 겹친다 — 게시 전에 막는다
    if (!/^\d-\d{1,2}$/.test($('#class').value.trim())) { $('#portal-status').textContent = "반 코드를 '학년-반'(예: 3-2) 모양으로 먼저 넣어 주세요."; $('#class').focus(); return; }
    if (Number($('#class').value.trim().split('-')[0]) !== S.lesson.grade) { $('#portal-status').textContent = `이 차시는 ${S.lesson.grade}학년용인데 반 코드가 ${$('#class').value.trim()}입니다. 반 코드의 학년을 확인해 주세요.`; $('#class').focus(); return; }
    const existing = await (await fetch('/api/portal/assignments')).json();
    if (existing.some((a) => a.title === S.assignment.title && a.target_class_num === S.assignment.target_class_num && a.target_grade === S.assignment.target_grade)) { $('#portal-status').textContent = '이미 이 반에 같은 과제를 게시했습니다.'; return; }
    const r = await fetch('/api/portal/assignments', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(S.assignment) });
    const j = await r.json();
    $('#portal-status').textContent = r.ok ? `게시했습니다 (${j.id}). 학생은 포털의 '내 과제'에서 이 과제를 엽니다.` : `게시하지 못했습니다: ${j.error}`;
  });
  $('#copy').addEventListener('click', () => {
    navigator.clipboard?.writeText($('#student-url').value).then(() => { $('#copy-status').textContent = '복사했습니다.'; }, () => { $('#copy-status').textContent = '복사하지 못했습니다 — 칸을 눌러 직접 복사하세요.'; });
  });
  $('#qr-big').addEventListener('click', () => { $('#qr-overlay').hidden = false; $('#qr-close').focus(); });
  $('#qr-close').addEventListener('click', () => { $('#qr-overlay').hidden = true; $('#qr-big').focus(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !$('#qr-overlay').hidden) $('#qr-close').click(); });
  $('#class').addEventListener('input', () => { save(); if (S.lesson) { renderDist(); pull(); } });
  $('#expected').addEventListener('input', renderSummary);
  document.addEventListener('click', (e) => {
    const g = e.target.closest('[data-grade]'); if (g) { S.grade = Number(g.dataset.grade); save(); renderGrades(); renderLessons(); return; }
    const l = e.target.closest('[data-lesson]'); if (l) { select(l.dataset.lesson); $('#dist').scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
    const t = e.target.closest('[data-tab]');
    if (t) {
      document.querySelectorAll('[data-tab]').forEach((b) => b.setAttribute('aria-selected', String(b === t)));
      document.querySelectorAll('[data-panel]').forEach((p) => { p.hidden = p.dataset.panel !== t.dataset.tab; });
    }
  });
  renderGrades(); renderLessons();
  if (saved.lesson && lessons.some((l) => l.id === saved.lesson)) select(saved.lesson);
})();
