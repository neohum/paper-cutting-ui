/* 교사 조합 화면 — 학년·영역·주제 → 도입 1 + 활동 1~3 + 정리 1 모듈 고르기 → 플레이어(compose=…)로 열기.
 * 데이터: ../modules/index.js(EDU_MODULE_INDEX: 영역·학년군·추천 조합), 영역을 고르면 registry 가 modules/<영역>/_framework.js 와
 * modules/<영역>/<학년군>.js 를 script 로 읽는다(file:// 에서도 돈다). 조합 규칙은 modules/compose.js(PaperModules) 하나다.
 * 주소: compose.html?grade=<1~12>&domain=<영역>&topic=<주제 id>&ids=<도입,활동…,정리> — 같은 주소로 다시 열면 같은 선택.
 */
(function () {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const L = window.PaperLessons;
  const IDX = window.EDU_MODULE_INDEX || { tools: {}, domains: {} };
  const qs = new URLSearchParams(location.search);
  const S = { grade: Number(qs.get('grade')) || 0, domain: qs.get('domain') || '', topic: qs.get('topic') || '', intro: '', acts: [], wrap: '', mods: [], fw: null, band: null };
  const want = (qs.get('ids') || '').split(',').filter(Boolean);
  const GL = (g) => L.gradeLabel(g);
  const toolName = (t) => (t ? IDX.tools[t] || t : '교구 없음');
  const LV = { easy: '쉬움', base: '기본', challenge: '도전' };
  const TYPE = { intro: '도입', activity: '활동', wrap: '정리' };

  // 학년군 → 그 학년을 다루는 영역(모듈이나 주제가 있는 곳)
  const bandLabel = (g) => (g <= 2 ? '초1-2' : g <= 4 ? '초3-4' : g <= 6 ? '초5-6' : g <= 9 ? '중' : '고');
  const domainsFor = (g) => Object.values(IDX.domains).filter((d) => d.bands[bandLabel(g)] && d.bands[bandLabel(g)].modules);
  const grades = Array.from({ length: 12 }, (_, i) => i + 1).filter((g) => domainsFor(g).length);
  if (!grades.includes(S.grade)) S.grade = grades[0] || 0;

  function renderGrades() {
    $('#grades').innerHTML = grades.map((g) => `<button type="button" class="pl-level__b" data-grade="${g}" aria-pressed="${g === S.grade}">${GL(g)}</button>`).join('')
      || '<p class="pl-muted">아직 모듈이 있는 영역이 없습니다. node edu-content-pool/build-modules.mjs 로 색인을 만듭니다.</p>';
  }
  function renderDomains() {
    const list = domainsFor(S.grade);
    if (!list.some((d) => d.code === S.domain)) S.domain = list[0] ? list[0].code : '';
    $('#domain').innerHTML = list.map((d) => `<option value="${esc(d.code)}" ${d.code === S.domain ? 'selected' : ''}>[${esc(d.area)}] ${esc(d.title)} · 모듈 ${d.bands[bandLabel(S.grade)].modules}개</option>`).join('');
    const d = IDX.domains[S.domain];
    $('#basis').textContent = d && d.basis ? `근거: ${d.basis}` : '';
  }

  async function loadDomain() {
    S.mods = []; S.fw = null;
    if (!S.domain) return;
    try {
      const r = await L.loadDomain(S.domain, S.grade);
      S.fw = r.framework; S.band = r.band;
    } catch (e) { $('#errors').innerHTML = `<li>${esc(e.message)}</li>`; return; }
    S.mods = L.modules().filter((m) => m.domain === S.domain && m.band === S.band.label && (m.grades || []).includes(S.grade));
  }

  const topicsHere = () => {
    const ts = ((S.fw && S.fw.bands[S.band.label] && S.fw.bands[S.band.label].topics) || []).filter((t) => (t.grades || []).includes(S.grade));
    return ts.filter((t) => S.mods.some((m) => m.topic === t.id));
  };
  const recs = () => (S.fw ? window.PaperModules.sequencesOf(S.fw, S.grade) : []);

  function renderTopics() {
    const ts = topicsHere();
    if (!ts.some((t) => t.id === S.topic)) S.topic = ts[0] ? ts[0].id : '';
    $('#topics').innerHTML = ts.map((t) => `<button type="button" class="cm-topic" data-topic="${esc(t.id)}" aria-pressed="${t.id === S.topic}">${esc(t.title)} <small>${S.mods.filter((m) => m.topic === t.id).length}개</small></button>`).join('')
      || `<p class="pl-muted">${GL(S.grade)} 이 영역에는 아직 모듈 내용이 없습니다.</p>`;
    // 추천 조합(그 학년 의무 시수): 내용이 다 있어 조합되는 것만 열 수 있다
    const d = IDX.domains[S.domain]; const list = (d && d.grades[S.grade]) || [];
    $('#recs').innerHTML = list.length ? `<h3><i class="fi fi-rr-sparkles" aria-hidden="true"></i> 추천 조합 ${list.filter((x) => x.ready).length}/${list.length}차시</h3>
      <ol class="cm-reclist">${list.map((x) => `<li class="cm-rec ${x.ready ? '' : 'is-wait'}"><span class="cm-rec__n">${x.n}차시</span><b>${esc(x.title || '준비 중')}</b>
        ${x.ready ? `<span class="cm-rec__go"><button type="button" class="pl-btn pl-btn--small" data-rec="${x.n}"><i class="fi fi-rr-shuffle" aria-hidden="true"></i> 이 조합으로 채우기</button>
        <a class="pl-btn pl-btn--small" href="player.html?lesson=${encodeURIComponent(x.id)}&role=teacher" target="_blank" rel="noopener"><i class="fi fi-rr-chalkboard-user" aria-hidden="true"></i> 교사<span class="sr-only"> 화면 (새 창)</span></a></span>` : '<span class="pl-chip">모듈 준비 중</span>'}</li>`).join('')}</ol>` : '';
  }

  // 기본 선택: 주소의 ids → 이 주제의 첫 추천 조합 → 종류마다 첫 모듈(활동은 분 합계가 맞게)
  function fillDefault() {
    if (!S.band) { S.intro = ''; S.acts = []; S.wrap = ''; return; }
    const ok = (id) => S.mods.some((m) => m.id === id);
    if (want.length >= 3 && want.every(ok)) { setPicks(want); want.length = 0; return; }
    want.length = 0;
    const r = recs().find((x) => (x.topic || '') === S.topic && x.ids.every(ok));
    if (r) return setPicks(r.ids);
    const of = (t) => S.mods.filter((m) => m.topic === S.topic && m.type === t);
    const i = of('intro')[0]; const w = of('wrap')[0];
    const need = S.band.minutes - (i ? i.minutes : 0) - (w ? w.minutes : 0);
    const acts = []; let sum = 0;
    for (const a of of('activity')) { if (acts.length < 3 && sum + a.minutes <= need + window.PaperModules.SLACK) { acts.push(a.id); sum += a.minutes; } }
    S.intro = i ? i.id : ''; S.acts = acts; S.wrap = w ? w.id : '';
  }
  function setPicks(ids) { S.intro = ids[0]; S.wrap = ids[ids.length - 1]; S.acts = ids.slice(1, -1); }
  const picked = () => [S.intro, ...S.acts, S.wrap].filter(Boolean);

  function card(m) {
    const on = m.type === 'activity' ? S.acts.includes(m.id) : S[m.type] === m.id;
    const order = m.type === 'activity' && on ? `<span class="cm-card__order" aria-hidden="true">${S.acts.indexOf(m.id) + 1}</span>` : '';
    return `<li><button type="button" class="cm-card cm-card--${m.type} ${on ? 'is-on' : ''}" data-mod="${esc(m.id)}" aria-pressed="${on}">
      ${order}<span class="cm-card__head"><span class="cm-card__icon" aria-hidden="true"><i class="fi ${m.type === 'intro' ? 'fi-rr-play' : m.type === 'wrap' ? 'fi-rr-flag-checkered' : 'fi-rr-puzzle-alt'}"></i></span>
      <b class="cm-card__title">${esc(m.title)}</b></span>
      <span class="cm-card__method">${esc(m.method)}</span>
      <span class="cm-card__badges"><span class="pl-chip"><i class="fi fi-rr-apps" aria-hidden="true"></i> ${esc(toolName(m.tool))}</span><span class="pl-chip"><i class="fi fi-rr-clock-three" aria-hidden="true"></i> ${m.minutes}분</span></span>
      <span class="cm-card__levels">${Object.entries(LV).map(([k, v]) => `<span><b>${v}</b> ${esc(m.levels[k])}</span>`).join('')}</span>
      <span class="sr-only">${on ? '고름' : '고르지 않음'}</span></button></li>`;
  }

  function renderCols() {
    for (const t of ['intro', 'activity', 'wrap']) {
      const list = S.mods.filter((m) => m.topic === S.topic && m.type === t);
      $(`#col-${t}`).innerHTML = list.map(card).join('') || `<li class="pl-muted">이 주제의 ${TYPE[t]} 모듈이 아직 없습니다.</li>`;
    }
    renderPlan();
  }

  function renderPlan() {
    const ids = picked();
    const mods = ids.map((id) => L.module(id));
    const PM = window.PaperModules;
    const sum = mods.reduce((a, m) => a + (m ? m.minutes : 0), 0);
    const r = ids.length >= 3 ? PM.compose([L.module(S.intro), ...S.acts.map((x) => L.module(x)), L.module(S.wrap)], { id: 'preview', grade: S.grade, domain: S.fw || { code: S.domain }, topic: PM.topicOf(S.fw, S.topic) || {} })
      : { lesson: null, errors: [`도입·활동·정리를 모두 고르세요(지금 도입 ${S.intro ? 1 : 0} · 활동 ${S.acts.length} · 정리 ${S.wrap ? 1 : 0}).`] };
    $('#total').innerHTML = `<i class="fi fi-rr-clock-three" aria-hidden="true"></i> 합계 <b>${sum}분</b> / ${GL(S.grade)} 수업 ${S.band ? S.band.minutes : 40}분`;
    $('#total').classList.toggle('is-bad', Boolean(r.errors.length));
    $('#plan').innerHTML = r.lesson ? r.lesson.stages.map((s) => `<li><b>${esc(s.title)} ${s.minutes}분</b> ${s.id === 'main' ? s.activities.map((a) => `${esc(a.title)}(${a.minutes}분·${esc(toolName(a.tool))})`).join(' → ') : esc(mods[s.id === 'intro' ? 0 : mods.length - 1].title)}</li>`).join('') : '';
    $('#errors').innerHTML = r.errors.map((e) => `<li><i class="fi fi-rr-exclamation" aria-hidden="true"></i> ${esc(e)}</li>`).join('');
    const ok = Boolean(r.lesson);
    const url = (role) => new URL(`player.html?${new URLSearchParams({ compose: ids.join(','), grade: String(S.grade), ...(role ? { role } : {}) })}`, location.href).toString();
    for (const [sel, role] of [['#go-teacher', 'teacher'], ['#go-student', 'student'], ['#go-print', 'print']]) {
      const a = $(sel);
      if (ok) { a.href = url(role); a.removeAttribute('aria-disabled'); } else { a.removeAttribute('href'); a.setAttribute('aria-disabled', 'true'); }
    }
    $('#copy').disabled = !ok; $('#preview').disabled = !ok;
    $('#link').value = ok ? url('') : '';
    if (ok && !$('#preview-box').hidden) $('#preview-frame').src = url('student');
    history.replaceState(null, '', `?${new URLSearchParams({ grade: String(S.grade), domain: S.domain, topic: S.topic, ...(ids.length ? { ids: ids.join(',') } : {}) })}`);
  }

  async function refresh(level) {
    if (level <= 0) renderGrades();
    if (level <= 1) { renderDomains(); await loadDomain(); }
    if (level <= 2) renderTopics();
    if (level <= 3) fillDefault();
    renderCols();
  }

  function toggle(id) {
    const m = L.module(id); if (!m) return;
    if (m.type === 'activity') {
      if (S.acts.includes(id)) S.acts = S.acts.filter((x) => x !== id);
      else if (S.acts.length < 3) S.acts.push(id);
      else { $('#errors').innerHTML = '<li><i class="fi fi-rr-exclamation" aria-hidden="true"></i> 활동은 3개까지 고릅니다. 고른 활동을 하나 눌러 빼고 고르세요.</li>'; return; }
    } else S[m.type] = S[m.type] === id ? '' : id;
    renderCols();
    $(`[data-mod="${CSS.escape(id)}"]`)?.focus();
  }

  document.addEventListener('click', (e) => {
    const g = e.target.closest('[data-grade]'); if (g) { S.grade = Number(g.dataset.grade); refresh(0); return; }
    const t = e.target.closest('[data-topic]'); if (t) { S.topic = t.dataset.topic; refresh(2); return; }
    const r = e.target.closest('[data-rec]');
    if (r) { const x = recs().find((y) => y.n === Number(r.dataset.rec)); if (x) { S.topic = x.topic || S.topic; renderTopics(); setPicks(x.ids); renderCols(); $('#picks').focus(); } return; }
    const m = e.target.closest('[data-mod]'); if (m) { toggle(m.dataset.mod); return; }
  });
  $('#domain').addEventListener('change', (e) => { S.domain = e.target.value; refresh(1); });
  $('#copy').addEventListener('click', () => {
    navigator.clipboard?.writeText($('#link').value).then(() => { $('#copy-status').textContent = '복사했습니다.'; }, () => { $('#copy-status').textContent = '복사하지 못했습니다 — 칸을 눌러 직접 복사하세요.'; });
  });
  $('#preview').addEventListener('click', () => {
    const box = $('#preview-box'); box.hidden = !box.hidden; $('#preview').setAttribute('aria-pressed', String(!box.hidden));
    if (!box.hidden) $('#preview-frame').src = new URL(`player.html?${new URLSearchParams({ compose: picked().join(','), grade: String(S.grade), role: 'student' })}`, location.href).toString();
  });
  window.__compose = S; // 자동 검사가 고른 상태를 읽는다
  refresh(0).then(() => { document.documentElement.dataset.ready = '1'; });
})();
