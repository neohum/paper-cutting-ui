/* 차시 등록소 + 결과 제출 — 플레이어와 교사 화면이 같이 쓴다.
 * 차시 파일(data/<id>.js)은 script 태그로 읽는다. fetch가 막히는 file://(USB·런처 로컬 폴더)에서도 돌아야 하기 때문이다.
 */
(function (root) {
  'use strict';
  const lessons = {};
  const loaded = {};
  const base = (() => {
    const s = document.currentScript && document.currentScript.src;
    return s ? s.slice(0, s.lastIndexOf('/') + 1) : './';
  })();

  function loadScript(src) {
    if (loaded[src]) return loaded[src];
    loaded[src] = new Promise((res, rej) => {
      const s = document.createElement('script');
      s.src = src; s.onload = res; s.onerror = () => rej(new Error(`불러오지 못함: ${src}`));
      document.head.appendChild(s);
    });
    return loaded[src];
  }

  function toolsOf(lesson) {
    const ids = new Set();
    if (lesson.stages) for (const st of lesson.stages) {
      if (st.demo) ids.add(st.demo.tool);
      for (const a of st.activities || []) ids.add(a.tool);
      for (const q of st.exitTicket || []) if (q.tool) ids.add(q.tool);
    }
    for (const it of (lesson.worksheet && lesson.worksheet.items) || []) if (it.tool) ids.add(it.tool);
    ids.delete(undefined);
    return [...ids];
  }

  // opts.tools=false: 교사 화면처럼 교구 없이 차시 구조만 필요할 때(짧은 제출 코드 풀기)
  async function load(id, opts = {}) {
    if (!/^[a-z0-9-]+$/.test(id)) throw new Error('차시 id 형식이 아닙니다');
    if (!lessons[id]) await loadScript(`${base}data/${id}.js`);
    const l = lessons[id];
    if (!l) throw new Error(`차시를 찾지 못함: ${id}`);
    if (opts.tools !== false) await Promise.all(toolsOf(l).map((t) => loadScript(`${base}../engine/tools/${t}.js`)));
    return l;
  }

  // ---- 결과 제출: 런처/포털(iframe) → 수집 서버 → 오프라인 대기열 순으로 시도하고, 어떤 길로 갔는지 돌려준다 ----
  const QUEUE = 'edu-lesson-results-queue';
  const readQ = () => { try { return JSON.parse(localStorage.getItem(QUEUE) || '[]'); } catch (_) { return []; } };
  const writeQ = (q) => { try { localStorage.setItem(QUEUE, JSON.stringify(q.slice(-50))); } catch (_) { /* 저장 불가 브라우저 */ } };

  async function post(url, result) {
    const ctl = new AbortController(); const t = setTimeout(() => ctl.abort(), 6000);
    try {
      const r = await fetch(url, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(result), signal: ctl.signal });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return true;
    } finally { clearTimeout(t); }
  }

  // 생태계 앱 SDK(@edulinker/app-sdk)와 같은 제출 모양. 학생 포털 뷰어(InAppWebViewerModal)가 이 메시지를
  // 받아 web_material_submissions.app_data로 저장한다. 이름 등 개인정보는 넣지 않는다(studentPii: none).
  function sdkPayload(result, opts) {
    return {
      appId: `edu-lesson:${result.lessonId}`, appTitle: result.title, materialId: opts.materialId || '',
      pin: opts.pin || '', studentKey: result.studentKey, deviceLabel: `${result.seat}번`,
      score: result.score.correct, totalScore: result.score.total,
      comment: `${result.level} 단계 · ${Math.round(result.durationSec / 60)}분 · 출구 ${result.exitTicket.filter((e) => e.correct).length}/${result.exitTicket.filter((e) => e.correct != null).length}`,
      data: result, attachments: [], submittedAt: result.finishedAt, clientTime: new Date().toISOString(),
    };
  }

  // 제출 한 건을 가리키는 무작위 id — 포털의 받음 확인(ack)을 짝지을 때만 쓴다. 학생 정보는 들어 있지 않다.
  const clientIdOf = () => {
    try { if (root.crypto && root.crypto.randomUUID) return root.crypto.randomUUID(); } catch (_) { /* 보안 문맥 아님 */ }
    return `c${Date.now().toString(36)}${Math.random().toString(36).slice(2, 10)}`;
  };
  const isPlain = (d) => d != null && typeof d === 'object' && !Array.isArray(d) && Object.prototype.toString.call(d) === '[object Object]';
  // 부모 포털이 { type: 'edulinker_submission:ack', ok, clientId? } 로 답하면 'received'|'rejected',
  // ms 안에 답이 없으면 'unconfirmed'(넘기긴 했지만 받았는지 모름 — 지금의 실제 포털이 그렇다)
  function waitAck(clientId, ms) {
    return new Promise((resolve) => {
      const done = (v) => { clearTimeout(t); root.removeEventListener('message', on); resolve(v); };
      const on = (e) => {
        if (e.source !== root.parent) return;
        const d = e.data;
        if (!isPlain(d) || d.type !== 'edulinker_submission:ack' || typeof d.ok !== 'boolean') return;
        // 실제 포털(web-student)은 clientId를 붙이지 않을 수도 있다 — 출처가 부모로 확인됐으면 id 없는 답은 이 제출의 답으로 본다
        const ref = d.clientId ?? d.submissionId;
        if (ref != null && ref !== clientId) return;
        done(d.ok ? 'received' : 'rejected');
      };
      const t = setTimeout(() => done('unconfirmed'), ms);
      root.addEventListener('message', on);
    });
  }

  async function submit(result, opts = {}) {
    const routes = [];
    const payload = sdkPayload(result, opts);
    payload.clientId = payload.clientId || clientIdOf();
    let ack = null;
    // 1) 학생 포털·런처 웹뷰 안(iframe)이면 부모에게 넘긴다. 받음 확인은 보낸 뒤 따로 기다린다(아래 sent.ack).
    if (root.parent && root.parent !== root) {
      // 듣기를 먼저 건다 — 허브 전송을 기다리는 사이에 온 ack를 놓치지 않게
      const waiting = waitAck(payload.clientId, opts.ackMs ?? 5000);
      try {
        root.parent.postMessage({ type: 'edulinker_submission', source: 'paperkit-lesson', clientId: payload.clientId, payload }, '*');
        routes.push('portal'); ack = waiting;
      } catch (_) { /* 부모 없음 */ }
    }
    // 2) 교실 허브(LAN): 런처가 /dist/<id>/로 서빙하면 같은 출처의 도구 제출 주소. ?collect=로 바꿀 수 있다.
    const hub = opts.collect || (location.pathname.includes('/dist/') && location.protocol.startsWith('http')
      ? `${location.origin}/api/tools/${encodeURIComponent(payload.appId)}/submissions` : null);
    if (hub) {
      try { await post(hub, payload); routes.push('hub'); } catch (e) { routes.push(`hub-failed:${e.message}`); }
    }
    opts = Object.assign({}, opts, { collect: hub });
    const delivered = routes.some((r) => r === 'portal' || r === 'hub');
    // 수집 주소가 아예 없는 곳(404: 실제 런처 허브 등)은 다시 보내도 소용없으니 대기열에 넣지 않는다
    const noEndpoint = routes.some((r) => /HTTP 40[45]/.test(r));
    const enqueue = () => { const q = readQ(); q.push({ collect: opts.collect || null, payload }); writeQ(q); routes.push('queued'); };
    if (!delivered && !noEndpoint) enqueue();
    const sent = { delivered, routes, code: encode(result), clientId: payload.clientId, portal: ack ? 'pending' : null };
    if (ack) {
      // 열거되지 않게 둔다 — 자동 검사가 sent를 직렬화해 읽을 때 Promise가 끼지 않게
      Object.defineProperty(sent, 'ack', { enumerable: false, value: ack.then((state) => {
        sent.portal = state;
        // 포털이 못 받았다고 답했고 허브로도 안 갔으면, 안 간 것으로 고치고 코드·대기열 길로 돌린다
        if (state === 'rejected' && !routes.includes('hub')) {
          sent.delivered = false; routes.push('portal-rejected');
          if (!noEndpoint) enqueue();
        }
        return state;
      }) });
    }
    return sent;
  }

  // 대기열 재전송: 플레이어를 다시 열면(와이파이 복구) 자동으로 보낸다
  async function flush() {
    const q = readQ(); const rest = [];
    for (const item of q) {
      if (!item.collect) { rest.push(item); continue; }
      try { await post(item.collect, item.payload); } catch (_) { rest.push(item); }
    }
    writeQ(rest);
    return q.length - rest.length;
  }

  // 제출 코드: 네트워크가 전혀 없을 때 학생이 화면 코드를 보여 주거나 붙여 넣는다. 요약만 담아 짧게 유지한다.
  function encode(r) {
    const s = { v: 1, l: r.lessonId, c: r.classCode, n: r.seat, k: r.nickname, lv: r.level, d: r.durationSec,
      sc: [r.score.correct, r.score.total, r.score.solved ?? r.score.correct], it: r.items.map((i) => [i.key, i.correct ? 1 : 0, i.attempts, i.hints, i.free ? 1 : 0]),
      x: r.exitTicket.map((e) => [e.key, e.correct == null ? -1 : e.correct ? 1 : 0, e.value]), f: r.finishedAt };
    const bytes = new TextEncoder().encode(JSON.stringify(s));
    let bin = ''; bytes.forEach((b) => { bin += String.fromCharCode(b); });
    return 'EL1.' + btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }
  function decode(code) {
    const m = /^EL1\.([A-Za-z0-9_-]+)$/.exec(String(code).trim());
    if (!m) throw new Error('제출 코드 형식이 아닙니다');
    const b = atob(m[1].replace(/-/g, '+').replace(/_/g, '/'));
    const s = JSON.parse(new TextDecoder().decode(Uint8Array.from(b, (c) => c.charCodeAt(0))));
    return {
      schema: 'edu-lesson-result.v1', id: `${s.l}:${s.c}:${s.n}:${s.f}`, lessonId: s.l, classCode: s.c, seat: s.n, nickname: s.k, level: s.lv,
      durationSec: s.d, score: { correct: s.sc[0], total: s.sc[1], solved: s.sc[2] ?? s.sc[0] }, finishedAt: s.f, via: 'code',
      items: s.it.map(([key, c, attempts, hints, free]) => ({ key, correct: !!c, attempts, hints, ...(free ? { free: true } : {}) })),
      exitTicket: s.x.map(([key, c, value]) => ({ key, correct: c < 0 ? null : !!c, value })),
    };
  }

  // ---- 짧은 제출 코드(EL2): 와이파이가 없을 때 학생이 화면을 보여 주거나 불러 주는 13자 남짓 코드 ----
  // 반 코드는 넣지 않는다(교사가 고른 반으로 들어감). 문항 순서는 차시 파일 순서를 따른다.
  //   [판 2 = 2][차시 해시 16][번호 7][짝 번호 7, 없으면 0][단계 2][분 6][문항마다 2: 0 안 함·1 한 번에·2 나중에·3 못 풂][출구마다 2: 0 없음·1 맞음·2 틀림][느낌 2][채움][검사 10]
  const B32 = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';
  const hash16 = (str) => { let h = 5381; for (const ch of str) h = ((h * 33) ^ ch.codePointAt(0)) >>> 0; return h & 0xffff; };
  const scoredItems = (l) => l.stages[1].activities.flatMap((a) => a.items.map((it, i) => (it.free ? null : `${a.id}.${i + 1}`))).filter(Boolean);
  // 검사 글자 두 개(10비트): 5비트 묶음마다 자리 무게(1,2,3…)를 곱해 1021로 나눈 나머지 —
  // 글자 값 차이(최대 31)가 1021의 배수가 될 수 없어 이웃한 두 글자를 바꿔 쓴 실수를 모두 잡는다
  const check = (bits, end) => { let sum = 0; for (let i = 0, k = 1; i < end; i += 5, k++) sum += k * parseInt(bits.slice(i, Math.min(i + 5, end)).join('').padEnd(5, '0'), 2); return sum % 1021; };
  const LV = ['easy', 'base', 'challenge']; const MOOD = [null, 'good', 'ok', 'hard'];
  function encodeShort(r, l) {
    const bits = [];
    const put = (v, n) => { for (let i = n - 1; i >= 0; i--) bits.push((v >> i) & 1); };
    put(2, 2); put(hash16(l.id), 16); put(Math.min(127, Number(r.seat) || 0), 7); put(Math.min(127, Number(r.pairWith) || 0), 7); put(Math.max(0, LV.indexOf(r.level)), 2);
    put(Math.min(63, Math.round(r.durationSec / 60)), 6);
    const byKey = Object.fromEntries(r.items.map((i) => [i.key, i]));
    for (const k of scoredItems(l)) { const i = byKey[k]; put(!i || !i.attempts ? 0 : i.correct ? (i.attempts === 1 ? 1 : 2) : 3, 2); }
    let mood = 0;
    for (const e of r.exitTicket) { if (e.correct == null) { const m = MOOD.indexOf(e.value); if (m > 0) mood = m; continue; } put(e.correct ? 1 : 2, 2); }
    put(mood, 2);
    while (bits.length % 5) bits.push(0); // 검사 글자가 글자 경계에 오게
    put(check(bits, bits.length), 10);
    while (bits.length % 5) bits.push(0);
    let out = ''; for (let i = 0; i < bits.length; i += 5) out += B32[parseInt(bits.slice(i, i + 5).join(''), 2)];
    return out.match(/.{1,4}/g).join('-');
  }
  function decodeShort(code, l, classCode) {
    const clean = String(code).toUpperCase().replace(/[^0-9A-Z]/g, '').replace(/O/g, '0').replace(/[IL]/g, '1');
    const bits = [];
    for (const ch of clean) { const v = B32.indexOf(ch); if (v < 0) throw new Error('코드 글자가 잘못되었습니다'); for (let i = 4; i >= 0; i--) bits.push((v >> i) & 1); }
    let p = 0; const get = (n) => { let v = 0; for (let i = 0; i < n; i++) v = (v << 1) | (bits[p++] ?? 0); return v; };
    if (get(2) !== 2) throw new Error('코드를 잘못 옮겨 적은 것 같아요(첫 글자를 확인해 주세요)');
    if (get(16) !== hash16(l.id)) throw new Error('이 차시의 코드가 아니거나 앞쪽 글자를 잘못 옮겨 적었어요');
    const seat = String(get(7)); const pair = get(7); const level = LV[get(2)] || 'base'; const minutes = get(6);
    const items = scoredItems(l).map((key) => { const v = get(2); return v === 0 ? null : { key, correct: v !== 3, attempts: v === 1 ? 1 : 2, hints: 0 }; }).filter(Boolean);
    const exits = l.stages[2].exitTicket.map((q, i) => ({ q, key: `exit.${i + 1}` }));
    const exitTicket = [];
    for (const { q, key } of exits) if (q.type === 'choice' || q.type === 'tool') { const v = get(2); exitTicket.push({ key, correct: v === 1, value: null }); }
    const mood = MOOD[get(2)];
    const end = Math.ceil(p / 5) * 5; p = end; const chk = get(10);
    if (check(bits, end) !== chk) throw new Error('코드를 잘못 옮겨 적은 것 같아요(검사 글자 불일치)');
    if (mood) exitTicket.push({ key: 'exit.mood', correct: null, value: mood });
    const sc = items.filter((i) => i.correct && i.attempts === 1).length + exitTicket.filter((e) => e.correct).length;
    const tot = items.length + exitTicket.filter((e) => e.correct != null).length;
    const solved = items.filter((i) => i.correct).length + exitTicket.filter((e) => e.correct).length;
    return { schema: 'edu-lesson-result.v1', id: `${l.id}:${classCode}:${seat}:short`, lessonId: l.id, classCode, seat, nickname: '', level, ...(pair ? { pairWith: String(pair) } : {}),
      durationSec: minutes * 60, score: { correct: sc, total: tot, solved }, finishedAt: new Date().toISOString(), via: 'code', items, exitTicket };
  }

  root.PaperLessons = {
    register(l) { lessons[l.id] = l; }, get: (id) => lessons[id], all: () => Object.values(lessons),
    load, loadScript, toolsOf, submit, waitAck, flush, encode, decode, encodeShort, decodeShort, sdkPayload, base,
  };
})(window);
