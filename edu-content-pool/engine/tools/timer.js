/* 체육 활동판 — 구간 타이머(운동/쉬기 되풀이)·순서 카드·기록판·안전 점검·스스로 점검을 한 판에 모은다.
 * 옵션에 준 칸만 보인다. 몸으로 하는 활동 자체는 판정하지 않고, 판정은 '계획(타이머 맞추기)·순서·기록 입력·점검 표시'로 한다.
 * 신호음은 판 안의 '신호음' 단추를 눌러 켰을 때만 난다(기본 꺼짐). 화면 타이머는 '시작'을 눌러야 돈다.
 *
 * 칸        | 옵션                                                    | 상태                         | target
 * --------- | ------------------------------------------------------- | ---------------------------- | ------------------------------------------------------
 * 구간 타이머 | plan: { work, rest, rounds } 처음 값(초·초·번)          | plan: { work, rest, rounds } | plan: { work?, rest?, rounds? }(준 칸만 맞으면 됨) · total: 전체 초(운동×번 + 쉬기×(번−1))
 * 순서 카드  | cards: ['본운동','준비운동','정리운동'](섞어서 적는다) | order: ['…', …]              | order: ['준비운동','본운동','정리운동'] 바른 차례
 * 기록판    | fields: ['1회', {label:'2회', unit:'초', step:0.1}] , stopwatch(시간 재기) | records: [수|null, …] | records: true(모두 적기) | n(n칸 이상 적기) | [수, …](그대로 옮겨 적기)
 * 안전 점검  | safety: ['운동장에 돌이 없어요', …]                     | safety: [true|false, …]      | safety: true(모두 확인)
 * 스스로 점검 | (target.selfCheck)                                      | checks: [true|false, …]      | selfCheck: ['…', …]
 * 그 밖의 옵션: title(판 머리 글), unit(기록 기본 단위, 기본 '회'), showTotal(전체 시간 보기 — revealAfterCheck이면 맞힌 뒤에 보임),
 *              workStep(기본 5초), restStep(기본 5초), print,
 *              timeUnit('min'이면 타이머 칸을 분으로 맞춘다 — plan·target.plan·target.total 값이 모두 분, 칸은 운동 1~60분·쉬기 0~30분,
 *              workStep·restStep 기본 1분. 미술 작업 시간·체육 경기 시간처럼 몇 분 단위 계획에 쓴다. 기본은 초),
 *              doneLabel(칸이 하나도 없는 판 — 짝·모둠 free 문항 — 에 나오는 '해 보았어요' 표시 글, 기본 '짝·모둠과 함께 해 보았어요'. 상태에 done: true|false)
 * target 칸은 섞어 쓸 수 있다 — 모두 맞아야 정답(예: { safety: true, order: [...] }).
 * 키보드: 수 칸은 ←/→·↑/↓ 또는 −/+ 단추, 카드는 ←/→로 자리를 옮기고 Enter로 골라 다른 카드와 바꾼다, 점검은 Enter/Space.
 * 예: { prompt: '30초 운동하고 10초 쉬기를 4번 하도록 타이머를 맞추세요.', toolOptions: { plan: { work: 20, rest: 20, rounds: 2 } }, target: { plan: { work: 30, rest: 10, rounds: 4 } } }
 */
(function (K) {
  'use strict';
  // 받침에 맞는 조사(따옴표 뒤·수 뒤도) — '‘손 씻기’를', '‘줄넘기 3번’을'
  const jo = (w, a, b) => { const s = String(w).replace(/[’'"”)\]\s]+$/, ''); const c = s.charCodeAt(s.length - 1); if (c >= 0xac00 && c <= 0xd7a3) return `${w}${(c - 0xac00) % 28 ? a : b}`; return `${w}${/[013678]$/.test(s) ? a : b}`; };
  const jq = (w, a, b) => `‘${w}’${jo(w, a, b).slice(String(w).length)}`;
  const levelOf = (opts) => {
    const want = opts && Number.isInteger(opts.level) ? opts.level : 1;
    const a = opts && Number.isFinite(opts.attempts) ? opts.attempts : null;
    const cap = a == null ? 3 : a >= 2 ? 3 : a >= 1 ? 2 : 1;
    return Math.max(1, Math.min(3, want, cap));
  };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const fmt = (sec) => { sec = Math.max(0, Math.round(sec)); const m = Math.floor(sec / 60); const s = sec % 60; return m ? `${m}분${s ? ` ${s}초` : ''}` : `${s}초`; };
  // 받침 따라 조사 고르기(‘2분’이에요 / ‘30초’예요)
  const jong = (w) => { const c = String(w).charCodeAt(String(w).length - 1) - 0xac00; return c >= 0 && c <= 11171 && c % 28 !== 0; };
  const ieyo = (w) => `${w}${jong(w) ? '이에요' : '예요'}`;
  // 타이머 칸 단위: 기본 초, timeUnit 'min'이면 분(타이머가 돌 때는 60을 곱해 초로 잰다)
  const TU = (o) => (o && o.timeUnit === 'min' ? { u: '분', k: 60, lim: { work: [1, 60, o.workStep || 1], rest: [0, 30, o.restStep || 1], rounds: [1, 10, 1] }, ro: '분으로', ye: '분이에요' } : { u: '초', k: 1, lim: { work: [5, 300, (o && o.workStep) || 5], rest: [0, 120, (o && o.restStep) || 5], rounds: [1, 10, 1] }, ro: '초로', ye: '초예요' });
  const totalOf = (p) => (p ? p.rounds * p.work + Math.max(0, p.rounds - 1) * p.rest : 0);
  const fieldsOf = (o) => (o.fields || []).map((f) => (typeof f === 'string' ? { label: f } : f)).map((f) => ({ label: String(f.label || ''), unit: f.unit || o.unit || '회', step: f.step || 1, max: f.max || 999 }));
  const cardsOf = (o, t) => (o.cards ? o.cards.slice() : t && t.order ? t.order.slice(1).concat(t.order.slice(0, 1)) : []);
  const PLAN0 = { work: 30, rest: 10, rounds: 3 };
  const planOf = (o, t) => (o.plan || (t && (t.plan || t.total != null)) ? Object.assign({}, PLAN0, o.plan || {}) : null);

  function judge(s, t, o) {
    s = s || {}; t = t || {}; o = o || {};
    const parts = ['safety', 'order', 'plan', 'total', 'records', 'selfCheck'].filter((k) => t[k] != null);
    if (!parts.length) return { correct: false, incomplete: true, feedback: '문제에서 하라는 것을 해 보세요.' };
    if (t.safety) {
      const items = o.safety || []; const got = s.safety || []; const n = items.filter((_, i) => got[i]).length;
      if (!n) return { correct: false, incomplete: true, feedback: '활동하기 전에 안전 점검부터 해요. 확인한 것을 눌러 표시해요.', hint: '둘레를 살펴보고 하나씩 표시해요.', part: 'safety' };
      if (n < items.length) { const left = items.find((_, i) => !got[i]); return { correct: false, feedback: `안전 점검이 ${items.length - n}개 남았어요. 모두 확인해야 활동을 시작해요.`, hint: `${jq(left, '을', '를')} 확인했나요?`, part: 'safety', left }; }
    }
    if (t.order) {
      const got = s.order || []; const want = t.order;
      const i = want.findIndex((x, k) => got[k] !== x);
      if (i >= 0) {
        const there = got[i]; const j = want.indexOf(there);
        return { correct: false, feedback: `${i + 1}번째 자리에 ‘${there}’ 카드가 왔어요. ${j > i ? '이 활동은 더 나중에 해요.' : '이 활동은 더 먼저 해요.'}`, hint: `${jq(there, '을', '를')} 언제 하는지 떠올려 자리를 옮겨요.`, part: 'order', at: i };
      }
    }
    if (t.plan || t.total != null) {
      const p = s.plan || planOf(o, t) || PLAN0;
      const w = t.plan || {};
      const NAME = { work: '운동 시간', rest: '쉬는 시간', rounds: '되풀이 횟수' };
      for (const k of ['work', 'rest', 'rounds']) if (w[k] != null && p[k] !== w[k]) {
        const swap = k !== 'rounds' && w.work != null && w.rest != null && p.work === w.rest && p.rest === w.work;
        return { correct: false, feedback: swap ? '운동 시간과 쉬는 시간이 바뀌었어요.' : `${NAME[k]}${jong(NAME[k]) ? '이' : '가'} 문제와 달라요.`, hint: swap ? '먼저 운동, 그다음 쉬기예요. 두 수를 바꾸어 넣어요.' : `문제에서 ${NAME[k]}${jong(NAME[k]) ? '을' : '를'} 다시 찾아 −/+로 맞추어요.`, part: 'plan', key: k, swap };
      }
      if (t.total != null && totalOf(p) !== t.total) return { correct: false, feedback: `전체 시간이 ${ieyo(fmt(totalOf(p) * TU(o).k))}. 문제에서 말한 시간과 달라요.`, hint: '운동 시간×횟수에 쉬는 시간×(횟수−1)을 더해 보세요. 마지막에는 쉬지 않아요.', part: 'total' };
    }
    if (t.records != null) {
      const fs = fieldsOf(o); const got = s.records || []; const filled = fs.map((_, i) => got[i] != null && got[i] !== '' && Number.isFinite(Number(got[i])));
      const n = filled.filter(Boolean).length;
      if (!n) return { correct: false, incomplete: true, feedback: '활동을 하고 잰 기록을 칸에 적어 보세요.', hint: '−/+ 단추나 방향키로 수를 넣어요.', part: 'records' };
      if (Array.isArray(t.records)) {
        const i = t.records.findIndex((v, k) => v != null && Number(got[k]) !== v);
        if (i >= 0) return { correct: false, feedback: `${fs[i] ? fs[i].label : `${i + 1}번째`} 칸의 기록이 달라요. 보기 표를 다시 보세요.`, hint: `${fs[i] ? fs[i].label : `${i + 1}번째`} 칸을 다시 옮겨 적어요.`, part: 'records', at: i };
      } else {
        const need = t.records === true ? fs.length : Math.min(fs.length, Number(t.records) || 1);
        if (n < need) { const i = filled.indexOf(false); return { correct: false, feedback: `기록 칸이 ${need - n}개 비었어요.`, hint: `${fs[i] ? fs[i].label : '빈'} 칸에 잰 기록을 적어요.`, part: 'records', at: i }; }
      }
    }
    if (t.selfCheck) {
      const got = s.checks || []; const left = t.selfCheck.filter((_, i) => !got[i]);
      if (left.length === t.selfCheck.length && parts.length === 1) return { correct: false, incomplete: true, feedback: '활동을 마치고 스스로 점검 목록에서 해낸 것을 표시해요.', hint: '해낸 것만 하나씩 눌러요.', part: 'self' };
      if (left.length) return { correct: false, feedback: `아직 표시하지 않은 점검 항목이 ${left.length}개 있어요.`, hint: `${jq(left[0], '을', '를')} 해 보았는지 떠올리고 표시해요.`, part: 'self', left };
    }
    const said = t.order ? '활동 차례가 꼭 맞아요' : t.plan || t.total != null ? `타이머를 알맞게 맞추었어요(전체 ${fmt(totalOf(s.plan || PLAN0) * TU(o).k)})` : t.records != null ? '기록을 모두 적었어요' : t.safety ? '안전 점검을 모두 마쳤어요' : '스스로 점검을 마쳤어요';
    return { correct: true, feedback: `맞아요! ${said}.` };
  }
  function solve(t, o) {
    t = t || {}; o = o || {}; const s = {};
    const plan = planOf(o, t); if (plan) s.plan = Object.assign({}, plan, t.plan || {});
    if (t.total != null && s.plan && totalOf(s.plan) !== t.total) {
      // 전체 시간이 맞는 계획을 찾는다(정해진 칸은 그대로)
      const fixed = t.plan || {}; let found = null;
      const L = TU(o).lim; const d = TU(o).k === 60 ? 1 : 5;
      for (let r = 1; r <= 10 && !found; r++) for (let w = L.work[0]; w <= L.work[1] && !found; w += d) for (let q = L.rest[0]; q <= L.rest[1] && !found; q += d) {
        const p = { work: fixed.work ?? w, rest: fixed.rest ?? q, rounds: fixed.rounds ?? r };
        if (totalOf(p) === t.total) found = p;
      }
      if (found) s.plan = found;
    }
    const cards = cardsOf(o, t); if (cards.length || t.order) s.order = t.order ? t.order.slice() : cards;
    const fs = fieldsOf(o); if (fs.length) s.records = fs.map((f, i) => (Array.isArray(t.records) && t.records[i] != null ? t.records[i] : t.records != null ? 10 + i : null));
    if (o.safety) s.safety = o.safety.map(() => !!t.safety);
    if (t.selfCheck) s.checks = t.selfCheck.map(() => true);
    return s;
  }
  function wrongAnswer(t, o, cur) {
    t = t || {}; o = o || {}; const good = solve(t, o); const list = []; const clone = () => JSON.parse(JSON.stringify(good));
    if (t.order && t.order.length >= 2) {
      const n = t.order.length; const a = clone(); [a.order[n - 1], a.order[n - 2]] = [a.order[n - 2], a.order[n - 1]]; list.push(a); // 마무리 활동을 앞당김
      const b = clone(); [b.order[0], b.order[1]] = [b.order[1], b.order[0]]; list.push(b); // 몸풀기 없이 바로 시작
    }
    if (t.plan) {
      const w = t.plan; const a = clone();
      if (w.work != null && w.rest != null && w.work !== w.rest) { a.plan.work = w.rest; a.plan.rest = w.work; list.push(a); }
      for (const k of ['rounds', 'work', 'rest']) if (w[k] != null) { const b = clone(); b.plan[k] += k === 'rounds' ? 1 : 5; list.push(b); }
    }
    if (t.total != null) { const a = clone(); a.plan.rest += 5; list.push(a); const b = clone(); b.plan.rounds += 1; list.push(b); }
    if (t.records != null && good.records && good.records.length) {
      const a = clone();
      if (Array.isArray(t.records)) { const i = t.records.findIndex((v) => v != null); a.records[i] = Number(a.records[i]) + 1; }
      else {
        // n칸 이상 적기: 한 칸 모자라게(n−1칸만) 적은 상태 — records: 3처럼 수로 준 목표도 '다 했지만 모자람'을 만든다
        const need = t.records === true ? a.records.length : Math.min(a.records.length, Number(t.records) || 1);
        a.records = a.records.map((v, i) => (i < need - 1 ? v : null));
      }
      list.push(a);
    }
    if (t.safety && good.safety && good.safety.length > 1) { const a = clone(); a.safety[a.safety.length - 1] = false; list.push(a); }
    if (t.selfCheck && (t.selfCheck.length > 1 || Object.keys(t).length > 1)) { const a = clone(); a.checks[a.checks.length - 1] = false; list.push(a); }
    const curJ = JSON.stringify(cur || {});
    const cand = list.filter((x) => { const r = judge(x, t, o); return !r.correct && !r.incomplete; });
    return cand.find((x) => JSON.stringify(x) !== curJ) || cand[0] || null;
  }
  function hintFor(s, t, o, opts) {
    t = t || {}; const r = judge(s, t, o);
    if (r.correct) return { hint: '지금 상태가 맞아요.', correct: true };
    const lv = levelOf(opts);
    if (lv <= 1) {
      const part = r.part || (t.safety ? 'safety' : t.order ? 'order' : t.plan || t.total != null ? 'plan' : t.records != null ? 'records' : 'self');
      return {
        hint: {
          safety: '활동하기 전에 둘레와 몸, 준비물을 실제로 살펴보고, 확인한 것만 표시해요.',
          // 몸 움직임 차례(준비 운동·정리 운동…)일 때만 몸 이야기를 한다 — 음악·실과 차례 카드는 중립 글
          order: (t.order || []).concat((o && o.cards) || []).some((c) => /운동|몸풀|스트레칭|체조|달리|뛰|걷|줄넘기|맨손|숨 고르|호흡/.test(String(c)))
            ? '무엇을 먼저 해야 몸이 다치지 않는지, 힘껏 움직인 뒤에는 무엇을 해야 몸이 편해지는지 차례대로 떠올려요.'
            : '무엇이 맨 먼저 와야 하는지 찾고, 그다음에 이어지는 것을 하나씩 차례대로 놓아요.',
          plan: '문제에서 운동하는 시간, 쉬는 시간, 되풀이하는 횟수를 하나씩 찾아 차례로 맞추어요.',
          total: '운동한 시간을 모두 더하고, 쉬는 시간도 더해요. 마지막 운동 뒤에는 쉬지 않아요.',
          records: '활동을 한 번 할 때마다 잰 횟수나 시간을 그 칸에 바로 적어요.',
          self: '오늘 활동을 떠올려 보고, 정말 해낸 것만 목록에서 하나씩 표시해요.',
        }[part] || '문제에서 하라는 것을 하나씩 해 보세요.',
        correct: false,
      };
    }
    if (lv === 2) return { hint: r.hint || r.feedback, correct: false };
    if (r.part === 'order') return { hint: `${r.at + 1}번째 자리에는 ‘${t.order[r.at]}’ 카드가 와요. 그 카드를 찾아 ←/→로 옮겨요.`, correct: false };
    if (r.part === 'plan' && t.plan) { const NAME = { work: '운동 시간', rest: '쉬는 시간', rounds: '되풀이 횟수' }; const k = r.key; const U = TU(o); return { hint: r.swap ? `운동 ${t.plan.work}${U.u}, 쉬기 ${t.plan.rest}${U.ro} 넣어요.` : `${NAME[k]}${jong(NAME[k]) ? '을' : '를'} ${t.plan[k]}${k === 'rounds' ? '번으로' : U.ro} 맞추어요.`, correct: false }; }
    if (r.part === 'total') { const p = solve(t, o).plan; const U = TU(o); return { hint: `예를 들어 운동 ${p.work}${U.u}, 쉬기 ${p.rest}${U.u}, ${p.rounds}번이면 ${p.rounds}×${p.work} + ${Math.max(0, p.rounds - 1)}×${p.rest} = ${totalOf(p)}${U.ye}.`, correct: false }; }
    if (r.part === 'records' && Array.isArray(t.records)) { const fs = fieldsOf(o); return { hint: `${fs[r.at] ? fs[r.at].label : `${r.at + 1}번째`} 칸은 ${ieyo(`${t.records[r.at]}${fs[r.at] ? fs[r.at].unit : ''}`)}.`, correct: false }; }
    if ((r.part === 'self' || r.part === 'safety') && r.left) return { hint: `${jq(Array.isArray(r.left) ? r.left[0] : r.left, '을', '를')} 직접 해 보고, 했으면 눌러 표시해요.`, correct: false };
    return { hint: r.hint || r.feedback, correct: false };
  }
  function distance(a, b) {
    a = a || {}; b = b || {}; let d = 0;
    if (a.plan || b.plan) { const p = a.plan || PLAN0; const q = b.plan || PLAN0; d += Math.abs(p.work - q.work) / 5 + Math.abs(p.rest - q.rest) / 5 + Math.abs(p.rounds - q.rounds); }
    const x = a.order || []; const y = b.order || []; let od = 0; for (let i = 0; i < Math.max(x.length, y.length); i++) if (x[i] !== y[i]) od++; d += od / 2;
    const r1 = a.records || []; const r2 = b.records || [];
    for (let i = 0; i < Math.max(r1.length, r2.length); i++) { const u = r1[i]; const v = r2[i]; if (u == null && v == null) continue; d += u == null || v == null ? 1 : Math.min(1, Math.abs(u - v)); }
    for (const k of ['safety', 'checks']) { const p = a[k] || []; const q = b[k] || []; for (let i = 0; i < Math.max(p.length, q.length); i++) if (!!p[i] !== !!q[i]) d++; }
    return d;
  }
  const core = { judge, solve, wrongAnswer, hint: hintFor, distance, totalOf, TU, planOf, fieldsOf, cardsOf };

  K.registerTool('timer', {
    name: '체육 활동판',
    core,
    create(box, o, kit) {
      const P = kit.palette; const print = !!o.print;
      let target = null; let revealed = false;
      let plan = planOf(o, null); let order = cardsOf(o, null); const fields = fieldsOf(o); let records = fields.map(() => null);
      let safety = (o.safety || []).map(() => false); let checks = []; let picked = -1;
      // 칸이 하나도 없는 판(짝·모둠이 몸으로 하는 free 문항 — 판정할 target이 없다)에는 '해 보았어요' 표시 하나를 둔다.
      // 그래야 학생이 판에 한 일을 남기고 '다 했어요'를 누를 수 있다. 다른 칸이 하나라도 있으면 나오지 않는다.
      let done = false;
      let run = null; let beep = false; let sw = null;
      const narrow = !print && typeof matchMedia === 'function' && matchMedia('(max-width: 820px)').matches;
      const W = 560;
      let msg = null; let html = null;
      const say = (t) => { if (msg) msg.textContent = t; kit.announce(t); };

      // ---- 무대 크기: 타이머 링 / 순서 카드 / (인쇄) 기록·점검 표 ----
      const RING = 196; const perRow = narrow ? 3 : 5; const CARD_H = 104;
      const cardRows = () => (order.length ? Math.ceil(order.length / perRow) : 0);
      const printRows = print ? fields.length + (o.safety || []).length : 0;
      const top = 54;
      const heightOf = () => top + (plan ? RING : 0) + (order.length ? cardRows() * (CARD_H + 10) + 30 : 0) + (printRows ? printRows * 40 + 20 : 0) + 8;
      let H = heightOf();
      const st = kit.stage(box, { viewBox: [W, H], label: '체육 활동판. 타이머·순서 카드·기록·점검이 있어요.' });
      // target이 순서·타이머를 요구해 칸이 늦게 생기면 무대 높이를 다시 맞춘다
      const resize = () => { const h = heightOf(); if (h === H) return; H = h; st.svg.setAttribute('viewBox', `0 0 ${W} ${H}`); const bg = st.svg.querySelector('.pk-bg'); if (bg) bg.setAttribute('height', String(H)); };
      const HL = st.layer('head'); const RL = st.layer('ring'); const CL = st.layer('cards'); const TL = st.layer('table');
      kit.piece(st, HL, { shape: { type: 'rect', x: 12, y: 8, w: W - 24, h: 38, rx: 12 }, color: 'mint', depth: 1, texture: !print });
      kit.el('text', { x: W / 2, y: 34, 'text-anchor': 'middle', 'font-size': 19, class: 'pk-text', fill: print ? '#000' : P.mint.dark }, HL).textContent = o.title || '체육 활동판';

      // 구간 타이머 링
      let ringFg = null; let bigT = null; let phaseT = null; let planT = null; let totalT = null;
      const RC = { x: W / 2, y: top + RING / 2, r: 80 };
      function buildRing() {
        if (!plan || ringFg) return;
        kit.piece(st, RL, { shape: { type: 'circle', r: RC.r + 14, cx: RC.x, cy: RC.y }, color: 'peach', depth: 3, texture: !print });
        kit.piece(st, RL, { shape: { type: 'circle', r: RC.r - 6, cx: RC.x, cy: RC.y }, color: 'cream', depth: 1 });
        const C = 2 * Math.PI * RC.r;
        kit.el('circle', { cx: RC.x, cy: RC.y, r: RC.r, fill: 'none', stroke: '#EFE6D6', 'stroke-width': 10 }, RL);
        ringFg = kit.el('circle', { cx: RC.x, cy: RC.y, r: RC.r, fill: 'none', stroke: P.mint.layer, 'stroke-width': 10, 'stroke-linecap': 'round', 'stroke-dasharray': `${C} ${C}`, 'stroke-dashoffset': '0', transform: `rotate(-90 ${RC.x} ${RC.y})` }, RL);
        if (print) ringFg.setAttribute('stroke', '#999');
        bigT = kit.el('text', { x: RC.x, y: RC.y + 12, 'text-anchor': 'middle', 'font-size': 36, class: 'pk-text', fill: print ? '#000' : P.ink.base }, RL);
        phaseT = kit.el('text', { x: RC.x, y: RC.y - 26, 'text-anchor': 'middle', 'font-size': 16, class: 'pk-text', fill: print ? '#000' : P.peach.dark }, RL);
        planT = kit.el('text', { x: RC.x, y: RC.y + 42, 'text-anchor': 'middle', 'font-size': 13, class: 'pk-text', fill: print ? '#000' : P.ink.light }, RL);
        totalT = kit.el('text', { x: RC.x + RC.r + 34, y: RC.y + 6, 'text-anchor': 'start', 'font-size': 14, class: 'pk-text', fill: P.ink.light }, RL);
      }
      buildRing();
      function paintRing() {
        if (!plan) return;
        const U = TU(o);
        if (print) { bigT.textContent = `___${U.u}`; phaseT.textContent = '운동 / 쉬기'; planT.textContent = `운동 ___${U.u} · 쉬기 ___${U.u} · ___번`; totalT.textContent = ''; return; }
        const C = 2 * Math.PI * RC.r;
        if (run) {
          const ph = run.phases[run.i]; const left = Math.max(0, ph.sec - (run.paused ? run.elapsed : (Date.now() - run.t0) / 1000));
          bigT.textContent = U.k === 60 ? `${Math.floor(Math.ceil(left) / 60)}:${String(Math.ceil(left) % 60).padStart(2, '0')}` : `${Math.ceil(left)}`; phaseT.textContent = `${ph.kind === 'work' ? '운동' : '쉬기'} · ${ph.round}/${plan.rounds}번`;
          ringFg.setAttribute('stroke', ph.kind === 'work' ? P.rose.layer : P.sky.layer);
          ringFg.setAttribute('stroke-dashoffset', String(C * (1 - left / ph.sec)));
        } else {
          bigT.textContent = `${plan.work}${U.u}`; phaseT.textContent = '운동부터 시작'; ringFg.setAttribute('stroke', P.mint.layer); ringFg.setAttribute('stroke-dashoffset', '0');
        }
        planT.textContent = `운동 ${plan.work}${U.u} · 쉬기 ${plan.rest}${U.u} · ${plan.rounds}번`;
        totalT.textContent = o.showTotal && !(o.revealAfterCheck && !revealed) ? `전체 ${fmt(totalOf(plan) * U.k)}` : '';
      }

      // 순서 카드
      const cardTop = () => top + (plan ? RING : 0) + 26;
      function drawCards() {
        CL.textContent = '';
        if (!order.length) return;
        const n = Math.min(perRow, order.length); const cw = (W - 24) / n;
        kit.el('text', { x: 16, y: cardTop() - 8, 'font-size': 15, class: 'pk-text', fill: print ? '#000' : P.peach.dark }, CL).textContent = print ? '차례대로 번호를 쓰세요' : '순서 카드 — 활동 차례대로 놓아요';
        order.forEach((label, i) => {
          const r = Math.floor(i / perRow); const c = i % perRow;
          const g = kit.el('g', { class: 'tm-card' }, CL);
          kit.piece(st, g, { shape: { type: 'rect', x: 3, y: 0, w: cw - 6, h: CARD_H, rx: 14 }, color: i === picked ? 'buttercup' : ['sky', 'mint', 'lavender', 'peach', 'rose'][i % 5], depth: 2 });
          kit.el('circle', { cx: 24, cy: 22, r: 14, fill: '#FFFDF8', stroke: print ? '#000' : P.ink.light, 'stroke-width': 1.5 }, g);
          kit.el('text', { x: 24, y: 27, 'text-anchor': 'middle', 'font-size': 14, class: 'pk-text', fill: print ? '#000' : P.ink.base }, g).textContent = print ? '' : String(i + 1);
          // 긴 이름은 두 줄로(띄어쓰기에서 끊는다)
          const words = String(label).split(' '); const lines = []; let line = '';
          for (const w of words) { if ((line + ' ' + w).trim().length > Math.floor(cw / 19) && line) { lines.push(line); line = w; } else line = (line + ' ' + w).trim(); }
          lines.push(line);
          lines.slice(0, 3).forEach((ln, k) => { kit.el('text', { x: cw / 2, y: CARD_H / 2 + 12 + (k - (Math.min(3, lines.length) - 1) / 2) * 22, 'text-anchor': 'middle', 'font-size': 18, class: 'pk-text', fill: print ? '#000' : P.ink.base }, g).textContent = ln; });
          kit.transform(g, { x: 12 + c * cw, y: cardTop() + r * (CARD_H + 10) });
          if (print) return;
          g.setAttribute('tabindex', '0'); g.setAttribute('role', 'button'); g.style.cursor = 'pointer';
          g.setAttribute('aria-label', `${i + 1}번째 자리: ${label}.${picked === i ? ' 골랐어요. 바꿀 카드에서 Enter.' : ' Enter로 고르고 다른 카드와 바꾸거나, ←/→로 옮겨요.'}`);
          const tap = () => {
            if (picked < 0) { picked = i; drawCards(); say(`‘${label}’ 카드를 골랐어요. 바꿀 자리의 카드를 눌러요.`); focusCard(i); return; }
            if (picked === i) { picked = -1; drawCards(); focusCard(i); return; }
            const j = picked; [order[i], order[j]] = [order[j], order[i]]; picked = -1; changed(`${jq(order[i], '과', '와')} ‘${order[j]}’의 자리를 바꾸었어요.`); focusCard(i);
          };
          g.addEventListener('click', tap);
          g.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); tap(); return; }
            const d = { ArrowRight: 1, ArrowLeft: -1 }[e.key]; if (!d) return;
            e.preventDefault(); const j = i + d; if (j < 0 || j >= order.length) return;
            [order[i], order[j]] = [order[j], order[i]]; picked = -1; changed(`${jq(order[j], '을', '를')} ${j + 1}번째 자리로 옮겼어요.`); focusCard(j);
          });
        });
      }
      const focusCard = (i) => { const g = CL.querySelectorAll('.tm-card')[i]; if (g) g.focus(); };

      // 인쇄: 기록·점검을 표로 그린다
      if (print && printRows) {
        let y = H - printRows * 40 - 12;
        fields.forEach((f) => { kit.el('text', { x: 24, y: y + 26, 'font-size': 16, class: 'pk-text', fill: '#000' }, TL).textContent = f.label; kit.el('rect', { x: 220, y: y + 4, width: 200, height: 30, fill: '#fff', stroke: '#000' }, TL); kit.el('text', { x: 432, y: y + 26, 'font-size': 15, class: 'pk-text', fill: '#000' }, TL).textContent = f.unit; y += 40; });
        (o.safety || []).forEach((s) => { kit.el('rect', { x: 24, y: y + 8, width: 22, height: 22, fill: '#fff', stroke: '#000' }, TL); kit.el('text', { x: 58, y: y + 26, 'font-size': 15, class: 'pk-text', fill: '#000' }, TL).textContent = s; y += 40; });
      }

      // ---- HTML 칸: 타이머 맞추기 단추·기록·점검 ----
      if (!print) {
        html = document.createElement('div'); html.className = 'tm-panel'; html.style.cssText = 'display:grid;gap:10px;margin-top:8px';
        box.appendChild(html);
        msg = document.createElement('p'); msg.className = 'tm-msg'; msg.setAttribute('aria-live', 'polite');
        msg.style.cssText = 'margin:2px;min-height:1.4em;font-weight:700;line-height:1.45;word-break:keep-all';
        box.appendChild(msg);
        html.addEventListener('click', onClick);
        html.addEventListener('keydown', (e) => {
          const sp = e.target.closest('[role="spinbutton"]'); const d = { ArrowUp: 1, ArrowRight: 1, ArrowDown: -1, ArrowLeft: -1 }[e.key];
          if (!sp || !d) return;
          e.preventDefault(); bump(sp.dataset.k, Number(sp.dataset.i || 0), d, `[role="spinbutton"][data-k="${sp.dataset.k}"][data-i="${sp.dataset.i || 0}"]`);
        });
      }
      const spin = (k, i, label, val, unit) => `<span style="display:inline-flex;align-items:center;gap:6px;flex-wrap:nowrap"><b style="min-width:4.2em">${esc(label)}</b><button type="button" class="pl-btn pl-btn--small" data-bump="${k}" data-i="${i}" data-d="-1" tabindex="0" aria-label="${esc(label)} 줄이기" style="min-width:44px;min-height:44px"><i class="fi fi-rr-minus" aria-hidden="true"></i></button><span role="spinbutton" tabindex="0" data-k="${k}" data-i="${i}" aria-label="${esc(label)}" ${val == null ? 'aria-valuetext="아직 안 적음"' : `aria-valuenow="${val}"`} style="display:inline-block;min-width:3.2em;min-height:44px;line-height:44px;text-align:center;font-size:21px;font-weight:800;border-radius:10px;background:#FFFDF8">${val == null ? '?' : val}</span><button type="button" class="pl-btn pl-btn--small" data-bump="${k}" data-i="${i}" data-d="1" tabindex="0" aria-label="${esc(label)} 늘리기" style="min-width:44px;min-height:44px"><i class="fi fi-rr-plus" aria-hidden="true"></i></button><span>${esc(unit)}</span></span>`;
      const chk = (k, i, text, on, icon) => `<button type="button" class="pl-btn pl-btn--small" data-chk="${k}" data-i="${i}" role="checkbox" aria-checked="${!!on}" tabindex="0" style="justify-content:flex-start;white-space:normal;text-align:left;line-height:1.35;min-height:44px;${on ? 'font-weight:800;background:var(--pc-mint-light,#EAF7F1)' : 'font-weight:500'}"><i class="fi ${on ? 'fi-rr-checkbox' : icon}" aria-hidden="true"></i> ${esc(text)}</button>`;
      const selfItems = () => (target && target.selfCheck) || o.selfCheck || null;
      const bare = () => !plan && !order.length && !fields.length && !(o.safety && o.safety.length) && !selfItems();
      function paintHtml() {
        if (!html) return;
        const out = [];
        if (o.safety && o.safety.length) out.push(`<div role="group" aria-label="안전 점검" style="display:grid;gap:6px"><b><i class="fi fi-rr-shield-check" aria-hidden="true"></i> 안전 점검 — 확인한 것을 눌러요</b>${o.safety.map((x, i) => chk('safety', i, x, safety[i], 'fi-rr-square')).join('')}</div>`);
        if (plan) out.push(`<div role="group" aria-label="타이머 맞추기" style="display:flex;flex-wrap:wrap;gap:8px 18px;align-items:center"><b style="flex-basis:100%"><i class="fi fi-rr-stopwatch" aria-hidden="true"></i> 타이머 맞추기</b>${spin('work', 0, '운동', plan.work, TU(o).u)}${spin('rest', 0, '쉬기', plan.rest, TU(o).u)}${spin('rounds', 0, '횟수', plan.rounds, '번')}<span style="display:flex;gap:8px;flex-wrap:wrap"><button type="button" class="pl-btn pl-btn--small" data-tm="start" tabindex="0" style="min-height:44px"><i class="fi ${run && !run.paused ? 'fi-rr-pause' : 'fi-rr-play'}" aria-hidden="true"></i> ${run && !run.paused ? '멈춤' : run ? '이어 하기' : '시작'}</button><button type="button" class="pl-btn pl-btn--small" data-tm="stop" tabindex="0" style="min-height:44px"><i class="fi fi-rr-stop" aria-hidden="true"></i> 처음</button><button type="button" class="pl-btn pl-btn--small" data-tm="beep" aria-pressed="${beep}" tabindex="0" style="min-height:44px"><i class="fi fi-rr-volume" aria-hidden="true"></i> 신호음</button></span></div>`);
        if (fields.length) out.push(`<div role="group" aria-label="기록판" style="display:flex;flex-wrap:wrap;gap:8px 18px;align-items:center"><b style="flex-basis:100%"><i class="fi fi-rr-edit" aria-hidden="true"></i> 기록판</b>${fields.map((f, i) => spin('rec', i, f.label, records[i], f.unit)).join('')}${o.stopwatch ? `<span style="display:flex;gap:8px;align-items:center;flex-wrap:wrap"><button type="button" class="pl-btn pl-btn--small" data-tm="sw" tabindex="0" style="min-height:44px"><i class="fi fi-rr-stopwatch" aria-hidden="true"></i> ${sw && sw.on ? '멈추기' : '시간 재기'}</button><b class="tm-sw" style="font-size:20px;min-width:4em">${sw ? `${sw.sec.toFixed(1)}초` : '0.0초'}</b><button type="button" class="pl-btn pl-btn--small" data-tm="swput" tabindex="0" style="min-height:44px"><i class="fi fi-rr-arrow-small-down" aria-hidden="true"></i> 기록에 넣기</button></span>` : ''}</div>`);
        if (selfItems()) out.push(`<div role="group" aria-label="스스로 점검" style="display:grid;gap:6px"><b><i class="fi fi-rr-list-check" aria-hidden="true"></i> 스스로 점검 — 해낸 것을 눌러 표시해요</b>${selfItems().map((x, i) => chk('self', i, x, checks[i], 'fi-rr-square')).join('')}</div>`);
        if (bare()) out.push(`<div role="group" aria-label="해 본 것 표시" style="display:grid;gap:6px">${chk('done', 0, o.doneLabel || '짝·모둠과 함께 해 보았어요', done, 'fi-rr-square')}</div>`);
        html.innerHTML = out.join('');
      }
      function bump(k, i, d, refocus) {
        if (k === 'rec') {
          const f = fields[i]; const cur = records[i];
          records[i] = Math.max(0, Math.min(f.max, Math.round(((cur == null ? 0 : cur) + d * f.step) * 10) / 10));
          changed(`${f.label} ${records[i]}${f.unit}`);
        } else {
          if (run) stopRun();
          const lim = TU(o).lim[k];
          plan[k] = Math.max(lim[0], Math.min(lim[1], plan[k] + d * lim[2]));
          changed(`${{ work: '운동', rest: '쉬기', rounds: '횟수' }[k]} ${plan[k]}${k === 'rounds' ? '번' : TU(o).u}`);
        }
        const f = html.querySelector(refocus); if (f) f.focus();
      }
      function onClick(e) {
        const b = e.target.closest('button'); if (!b) return;
        if (b.dataset.bump) { bump(b.dataset.bump, Number(b.dataset.i), Number(b.dataset.d), `[data-bump="${b.dataset.bump}"][data-i="${b.dataset.i}"][data-d="${b.dataset.d}"]`); return; }
        if (b.dataset.chk) {
          const i = Number(b.dataset.i);
          if (b.dataset.chk === 'done') { done = !done; changed(done ? '표시했어요.' : '표시를 지웠어요.'); const f = html.querySelector('[data-chk="done"]'); if (f) f.focus(); return; }
          const arr = b.dataset.chk === 'safety' ? safety : checks; arr[i] = !arr[i];
          changed(arr[i] ? '표시했어요.' : '표시를 지웠어요.');
          const f = html.querySelector(`[data-chk="${b.dataset.chk}"][data-i="${i}"]`); if (f) f.focus(); return;
        }
        const a = b.dataset.tm;
        if (a === 'start') { if (run && !run.paused) pauseRun(); else startRun(); }
        else if (a === 'stop') { stopRun(); say('타이머를 처음으로 돌렸어요.'); }
        else if (a === 'beep') { beep = !beep; paintHtml(); say(beep ? '신호음을 켰어요. 운동과 쉬기가 바뀔 때 소리가 나요.' : '신호음을 껐어요.'); }
        else if (a === 'sw') { if (sw && sw.on) { sw.sec = sw.base + (Date.now() - sw.t0) / 1000; sw.on = false; say(`${sw.sec.toFixed(1)}초`); } else { sw = { on: true, t0: Date.now(), base: 0, sec: 0 }; tickSw(); } paintHtml(); }
        else if (a === 'swput') { const i = records.findIndex((x) => x == null); if (!sw || sw.on) { say('먼저 시간을 재고 멈춘 뒤에 넣어요.'); return; } if (i < 0) { say('빈 기록 칸이 없어요.'); return; } records[i] = Math.round(sw.sec * 10) / 10; changed(`${fields[i].label}에 ${records[i]}초를 넣었어요.`); }
        const f = a && html.querySelector(`[data-tm="${a}"]`); if (f) f.focus();
      }
      function tickSw() { if (!sw || !sw.on || !box.isConnected) return; sw.sec = (Date.now() - sw.t0) / 1000; const el = html && html.querySelector('.tm-sw'); if (el) el.textContent = `${sw.sec.toFixed(1)}초`; setTimeout(tickSw, 100); }
      // 타이머 실행(화면 표시만 — 상태가 아니다)
      function phasesOf(p) { const out = []; for (let r = 1; r <= p.rounds; r++) { const k = TU(o).k; out.push({ kind: 'work', sec: p.work * k, round: r }); if (r < p.rounds && p.rest > 0) out.push({ kind: 'rest', sec: p.rest * k, round: r }); } return out; }
      function cue(kind) {
        if (!beep || !kit.soundOn() || typeof AudioContext === 'undefined') return;
        try { const a = new AudioContext(); const os = a.createOscillator(); os.frequency.value = kind === 'work' ? 880 : 520; const g = a.createGain(); g.gain.setValueAtTime(0.25, a.currentTime); g.gain.exponentialRampToValueAtTime(0.0001, a.currentTime + 0.35); os.connect(g).connect(a.destination); os.start(); os.stop(a.currentTime + 0.4); setTimeout(() => a.close(), 600); } catch (_) { /* 소리는 부가 기능 */ }
      }
      function loop() {
        if (!run || run.paused) return;
        if (!box.isConnected) { run = null; return; }
        const ph = run.phases[run.i];
        if ((Date.now() - run.t0) / 1000 >= ph.sec) {
          run.i++;
          if (run.i >= run.phases.length) { run = null; paintRing(); paintHtml(); say('끝! 정리 운동을 해요.'); cue('rest'); return; }
          run.t0 = Date.now(); cue(run.phases[run.i].kind); kit.announce(run.phases[run.i].kind === 'work' ? '운동 시작' : '쉬기');
        }
        paintRing(); setTimeout(loop, 200);
      }
      function startRun() {
        if (!plan) return;
        if (run && run.paused) { run.paused = false; run.t0 = Date.now() - run.elapsed * 1000; say('이어서 해요.'); }
        else { run = { phases: phasesOf(plan), i: 0, t0: Date.now() }; cue('work'); say('운동 시작!'); }
        paintHtml(); loop();
      }
      function pauseRun() { if (!run || run.paused) return; run.elapsed = (Date.now() - run.t0) / 1000; run.paused = true; paintRing(); paintHtml(); say('잠깐 멈추었어요. 시작을 누르면 이어서 해요.'); }
      function stopRun() { run = null; paintRing(); paintHtml(); }

      function state() {
        const s = {};
        if (plan) s.plan = { work: plan.work, rest: plan.rest, rounds: plan.rounds };
        if (order.length) s.order = order.slice();
        if (fields.length) s.records = records.slice();
        if (o.safety) s.safety = safety.slice();
        if (selfItems()) s.checks = selfItems().map((_, i) => !!checks[i]);
        if (bare()) s.done = done;
        return s;
      }
      function changed(text) {
        revealed = false;
        drawCards(); paintRing(); paintHtml();
        if (text) say(text);
        kit.recorder.log('timer', state());
      }
      function load(s) {
        s = s || {};
        if (planOf(o, target) && !plan) plan = planOf(o, target);
        if (plan) plan = Object.assign({}, planOf(o, target) || PLAN0, s.plan || {});
        const cards = cardsOf(o, target);
        order = s.order && s.order.length ? s.order.slice() : cards;
        records = fields.map((_, i) => (s.records && s.records[i] != null ? Number(s.records[i]) : null));
        safety = (o.safety || []).map((_, i) => !!(s.safety && s.safety[i]));
        checks = (s.checks || []).map(Boolean); done = !!s.done; picked = -1; revealed = false;
        resize(); buildRing(); stopRun(); if (msg) msg.textContent = '';
        drawCards(); paintRing(); paintHtml();
      }
      let started = null;
      load({});
      return {
        getState: state,
        setState(s) { started = s ? JSON.parse(JSON.stringify(s)) : null; load(s); },
        setTarget(t) {
          target = t || null;
          // target이 순서·타이머를 요구하는데 옵션에 없으면 그 칸을 만든다(그림 크기는 처음 만든 그대로)
          if (!order.length && t && t.order) { order = (started && started.order) || cardsOf(o, t); }
          if (!plan && t && (t.plan || t.total != null)) plan = Object.assign({}, PLAN0, (started && started.plan) || {});
          resize(); buildRing(); drawCards(); paintRing(); paintHtml();
        },
        reset() { load({}); },
        solve(t) { load(solve(t || target, o)); },
        check(t, opts) {
          const r = judge(state(), t || target, o);
          if (!(opts && opts.forHint) && r.correct && o.revealAfterCheck) { revealed = true; paintRing(); }
          return { correct: r.correct, incomplete: r.incomplete, feedback: r.feedback, hint: r.hint };
        },
        hint(t, opts) { return hintFor(state(), t || target, o, opts); },
        wrongAnswer(t) { return wrongAnswer(t || target, o, state()); },
        distance,
        async demo(t) { const s = solve(t || target, o); load(s); if (plan) { const u = TU(o).u; say(`운동 ${plan.work}${u}, 쉬기 ${plan.rest}${u}${u === '분' ? '을' : '를'} ${plan.rounds}번 해요.`); } },
      };
    },
  });
})(window.PaperKit);
