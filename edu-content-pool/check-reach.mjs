// 닿을 수 있는가 — 문항 target 을 그 단계(easy·base·challenge)의 교구 옵션으로 학생이 화면 조작만으로 만들 수 있는지 데이터만으로 판정한다.
// check-unit.mjs 의 정적 단계가 부른다(--static 에서도 돈다).
//
// 왜 따로 있나: 브라우저 단계의 solve → check 는 solve 가 setState 로 상태를 직접 써서 화면 제약(입력 칸 자릿수·고르개 단추·
// 건반 범위·눈금·−/+ 간격)을 지나치지 않는다. 그래서 '정답 상태는 있지만 학생은 거기에 갈 수 없는' 문항이 초록으로 통과했다
// (학생 화면 점검 결함: multiply·pattern 자릿수, timer 범위·간격, keyboard 고르개·건반·마디, fracstrips 나눌 수 단추,
//  hangul 바구니, map 범례 보기, collage 팔레트, numberline 출발점 눈금).
// 규칙은 교구 파일의 화면 코드가 정본이다 — 교구가 순수 함수(core)로 내놓은 것은 그것을 쓰고(keyboard cfg·timer TU·collage achievable),
// 아니면 같은 식을 여기 적는다. 교구의 입력 제약을 바꾸면 여기도 같이 바꾼다.
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const here = dirname(fileURLToPath(import.meta.url));
const toolsDir = join(here, 'engine/tools');
const cores = {};
for (const id of ['keyboard', 'timer', 'collage']) {
  const K = { registerTool(name, def) { cores[name] = def.core; } };
  vm.runInNewContext(readFileSync(join(toolsDir, `${id}.js`), 'utf8'), { window: { PaperKit: K } });
}
// map 기호 기본 이름(범례 보기 글): 교구 파일의 ICONS 표에서 읽는다
const MAP_ICON_NAME = Object.fromEntries([...readFileSync(join(toolsDir, 'map.js'), 'utf8').matchAll(/^\s{4}(\w+): \{ name: '([^']+)'/gm)].map((m) => [m[1], m[2]]));
if (Object.keys(MAP_ICON_NAME).length < 10) throw new Error('check-reach: map.js ICONS 표를 읽지 못함 — 교구 파일 모양이 바뀌었으면 이 정규식을 고친다');
for (const id of ['keyboard', 'timer', 'collage']) if (!cores[id]) throw new Error(`check-reach: ${id}.js core 를 읽지 못함`);

const LEVELS = ['easy', 'base', 'challenge'];
const EPS = 1e-6;
const isInt = (v) => Number.isFinite(v) && Math.abs(v - Math.round(v)) < EPS;
const digitsOf = (n) => String(Math.abs(Math.round(n))).length;
const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a));
const show = (v) => JSON.stringify(v);

// player.js 와 같은 장착: 활동 옵션 + 활동 levels[단계] + 문항 toolOptions + 문항 levels[단계].toolOptions, target·state 는 itemAt·itemStart
export function mounted(item, level, actOpts) {
  const o = (item.levels && item.levels[level]) || {};
  return {
    options: Object.assign({}, actOpts || {}, item.toolOptions || {}, o.toolOptions || {}),
    target: o.target != null ? o.target : item.target,
    state: Object.prototype.hasOwnProperty.call(o, 'state') ? o.state : item.state,
  };
}

// 값 v 에서 −/+ 로 닿는 값 모음(범위 [lo, hi]에 걸리면 끝값으로 멈춘다 — 화면 코드의 Math.max(lo, Math.min(hi, v + d)))
function stepReach(start, step, lo, hi) {
  const seen = new Set(); const q = [start]; const r = (x) => Math.round(x * 1e6) / 1e6;
  while (q.length && seen.size < 5000) { const v = r(q.pop()); if (seen.has(v)) continue; seen.add(v); for (const d of [step, -step]) q.push(Math.max(lo, Math.min(hi, v + d))); }
  return seen;
}

// ---------------- 교구별 규칙: (options, target, state) → 문제 글 배열 ----------------
const RULES = {
  multiply(o, t) {
    const out = []; t = t || {};
    const mode = ['array', 'group', 'table'].includes(o.mode) ? o.mode : 'array';
    if (mode === 'array') {
      const maxR = Math.max(1, Math.min(10, o.maxRows || 10)); const maxC = Math.max(1, Math.min(10, o.maxCols || 10));
      const fits = (r, c) => r <= maxR && c <= maxC;
      if (t.rows != null && t.cols != null && !(fits(t.rows, t.cols) || (t.anyOrder && fits(t.cols, t.rows)))) out.push(`배열 ${t.rows}줄 ${t.cols}개는 판(최대 ${maxR}줄 ${maxC}개)으로 만들 수 없음`);
      else if (t.rows != null && t.rows > maxR) out.push(`줄 수 ${t.rows} > maxRows ${maxR}`);
      else if (t.cols != null && t.cols > maxC) out.push(`한 줄 개수 ${t.cols} > maxCols ${maxC}`);
      if (t.product != null) {
        const ms = t.minSide || 1; let ok = false;
        for (let r = ms; r <= maxR && !ok; r++) if (t.product % r === 0 && t.product / r >= ms && t.product / r <= maxC) ok = true;
        if (!ok) out.push(`곱 ${t.product}를 판(최대 ${maxR}줄 ${maxC}개${ms > 1 ? `, 한 변 ${ms} 이상` : ''})의 배열로 만들 수 없음`);
      }
    } else if (mode === 'group') {
      const raw = Number(o.count ?? 12); const count = Math.max(1, Math.min(60, Math.round(raw)));
      if (raw > 60) out.push(`count ${raw} > 60 — 교구는 낱개를 60개까지만 놓음`);
      const maxSize = Math.max(1, Math.min(count, Math.round(o.maxSize ?? count)));
      for (const k of ['size', 'plates', 'groups']) if (t[k] != null && (t[k] < 1 || t[k] > maxSize) && !(k === 'groups' && o.by !== 'plates')) out.push(`${k} ${t[k]}가 묶는 수 범위(1~${maxSize}) 밖`);
      for (const k of ['answer', 'rest']) if (t[k] != null && !(isInt(t[k]) && t[k] >= 0 && digitsOf(t[k]) <= 4)) out.push(`${k} ${t[k]}를 입력 칸(0 이상 정수 4자리)에 쓸 수 없음`);
    } else {
      // 곱셈표 빈칸: 숫자 단추·키는 cellDigits 자리까지만 남긴다(slice(-cellDigits))
      const rowsOf = Array.isArray(o.rowsOf) ? o.rowsOf.map(Number) : [2, 3, 4, 5, 6, 7, 8, 9];
      const colsOf = Array.isArray(o.colsOf) ? o.colsOf.map(Number) : [1, 2, 3, 4, 5, 6, 7, 8, 9];
      let blanks = [];
      if (o.blanks === 'all') blanks = rowsOf.flatMap((a) => colsOf.map((b) => [a, b]));
      else if (typeof o.blanks === 'string' && /^row:\d+$/.test(o.blanks)) { const a = Number(o.blanks.slice(4)); blanks = colsOf.map((b) => [a, b]); }
      else if (typeof o.blanks === 'string' && /^col:\d+$/.test(o.blanks)) { const b = Number(o.blanks.slice(4)); blanks = rowsOf.map((a) => [a, b]); }
      else if (Array.isArray(o.blanks)) blanks = o.blanks.filter((x) => Array.isArray(x) && x.length === 2).map((x) => [Number(x[0]), Number(x[1])]);
      const off = blanks.filter(([a, b]) => !rowsOf.includes(a) || !colsOf.includes(b));
      if (off.length) out.push(`빈칸 ${off.map((x) => x.join('×')).join(', ')}가 표(rowsOf·colsOf)에 없음`);
      blanks = blanks.filter(([a, b]) => rowsOf.includes(a) && colsOf.includes(b));
      const calc = (a, b) => (o.op === '+' ? a + b : a * b);
      const want = Math.max(1, ...blanks.map(([a, b]) => digitsOf(calc(a, b))));
      const cellDigits = Math.max(1, Math.min(6, Math.round(Number(o.digits) || 0) || Math.max(3, want)));
      if (want > cellDigits) out.push(`빈칸 정답이 ${want}자리인데 칸에 ${cellDigits}자리까지만 쓸 수 있음(digits)`);
      if (blanks.some(([a, b]) => calc(a, b) < 0)) out.push('빈칸 정답에 음수가 있어 숫자 단추로 쓸 수 없음');
    }
    return out;
  },

  pattern(o, t) {
    const out = []; t = t || {};
    const SHAPES = ['circle', 'square', 'triangle', 'star', 'heart', 'diamond', 'hexagon', 'arrow'];
    const norm = (p) => {
      if (p == null) return null;
      if (typeof p === 'number') return { n: p };
      if (typeof p === 'string') { const m = /^([a-z]+):([a-z]+)$/.exec(p); if (m && SHAPES.includes(m[1])) return { s: m[1], c: m[2] }; if (SHAPES.includes(p)) return { s: p, c: 'peach' }; if (/^-?\d+(\.\d+)?$/.test(p)) return { n: Number(p) }; return { t: p }; }
      if (typeof p === 'object') { const q = {}; if (p.s) { q.s = SHAPES.includes(p.s) ? p.s : 'circle'; q.c = p.c || 'peach'; } if (p.n != null) q.n = Number(p.n); if (p.t != null) q.t = String(p.t); if (p.k != null) q.k = Math.max(1, Math.min(16, Math.round(p.k))); if (p.r) q.r = ((Math.round(p.r) % 360) + 360) % 360; return q; }
      return null;
    };
    const keyOf = (p) => { const q = norm(p); return q ? ['s', 'c', 'n', 't', 'k', 'r'].map((k) => (q[k] == null ? '' : q[k])).join('|') : ''; };
    const mode = ['fill', 'rule', 'odd', 'make'].includes(o.mode) ? o.mode : 'fill';
    const seq = (Array.isArray(o.seq) ? o.seq : []).slice(0, 16).map(norm);
    const allNum = seq.filter(Boolean).length > 0 && seq.filter(Boolean).every((p) => p.n != null && !p.s && p.t == null);
    let palette = Array.isArray(o.palette) ? o.palette.map(norm).filter(Boolean) : [];
    if (!palette.length) { const seen = new Set(); for (const p of seq) if (p && !seen.has(keyOf(p))) { seen.add(keyOf(p)); palette.push(p); } }
    const digits = Math.max(1, Math.min(12, Math.round(Number(o.digits)) || Math.max(4, ...seq.filter((p) => p && p.n != null).map((p) => digitsOf(p.n)))));
    const numInput = o.input === 'number' || (o.input == null && !Array.isArray(o.palette) && (mode === 'fill' || mode === 'make') && allNum);
    // 수 칸: inp.value.replace(/[^0-9]/g,'').slice(0, digits) — 0 이상 정수, digits 자리까지
    const numOk = (n) => isInt(n) && n >= 0 && digitsOf(n) <= digits;
    const numWhy = (n) => (!isInt(n) || n < 0 ? `${n}은 수 칸에 쓸 수 없음(숫자만 — 음수·소수 불가)` : `${n}은 ${digitsOf(n)}자리인데 수 칸은 ${digits}자리까지(digits)`);
    const palKeys = new Set(palette.map(keyOf));
    if (mode === 'fill') {
      const blanks = seq.filter((p) => p == null).length;
      const want = Array.isArray(t.fill) ? t.fill : [];
      if (want.length > blanks) out.push(`정답 ${want.length}개인데 빈칸은 ${blanks}개`);
      for (const p of want) {
        if (numInput) { const q = norm(p); if (!q || q.n == null) out.push(`수 칸에 수가 아닌 정답 ${show(p)}`); else if (!numOk(q.n)) out.push(numWhy(q.n)); }
        else if (!palKeys.has(keyOf(p))) out.push(`정답 조각 ${show(p)}가 고르개(palette)에 없음`);
      }
    } else if (mode === 'make') {
      const length = Math.max(4, Math.min(12, o.length || 8));
      if (t.rule === 'add' || t.rule === 'mul') {
        if (numInput) {
          const d = t.step != null ? t.step : 2;
          // 첫 수는 학생이 고른다 — 가장 작은 첫 수(더하기 0, 빼기는 끝이 0, 곱하기 1)로도 length 칸을 쓸 수 없을 때만 실패
          const seqv = Array.from({ length }, (_, i) => (t.rule === 'add' ? (d < 0 ? -d * (length - 1) : 0) + i * d : d ** i));
          const bad = seqv.find((n) => !numOk(n));
          if (bad != null) out.push(`규칙(${t.rule} ${d})으로 ${length}칸을 채우면 ${numWhy(bad)}`);
        } else out.push(`수 규칙(${t.rule})인데 수 칸이 아님(palette 를 주었거나 seq 가 수가 아님)`);
      } else if (t.rule === 'core') {
        for (const p of t.core || []) if (!palKeys.has(keyOf(p))) out.push(`되풀이 묶음 조각 ${show(p)}가 고르개에 없음`);
      } else if (t.rule === 'repeat') {
        if (t.uses && t.uses > palette.length) out.push(`서로 다른 조각 ${t.uses}개가 필요한데 고르개는 ${palette.length}개`);
        if (t.period && t.period * (t.minRepeats || 2) > length) out.push(`묶음 ${t.period}개를 ${t.minRepeats || 2}번 되풀이할 칸(${length})이 모자람`);
      }
    } else if (mode === 'rule') {
      if (t.pick != null && !(Number.isInteger(t.pick) && t.pick >= 0 && t.pick < (o.choices || []).length)) out.push(`pick ${t.pick}이 보기(choices ${(o.choices || []).length}개) 밖`);
    } else if (mode === 'odd') {
      if (t.odd != null && !(Number.isInteger(t.odd) && t.odd >= 0 && t.odd < seq.length)) out.push(`odd ${t.odd}가 조각 줄(${seq.length}개) 밖`);
    }
    return out;
  },

  timer(o, t) {
    const out = []; t = t || {};
    const C = cores.timer; const U = C.TU(o);
    if (t.plan || t.total != null) {
      const p0 = C.planOf(o, t) || { work: 30, rest: 10, rounds: 3 };
      const reach = {};
      for (const k of ['work', 'rest', 'rounds']) { const [lo, hi, d] = U.lim[k]; reach[k] = stepReach(p0[k], d, lo, hi); }
      const NAME = { work: '운동', rest: '쉬기', rounds: '횟수' };
      const w = t.plan || {};
      for (const k of ['work', 'rest', 'rounds']) if (w[k] != null && !reach[k].has(w[k])) {
        const [lo, hi, d] = U.lim[k];
        out.push(`${NAME[k]} ${w[k]}${k === 'rounds' ? '번' : U.u}에 −/+로 닿을 수 없음(${lo}~${hi}, ${d}${k === 'rounds' ? '' : U.u}씩, 처음 ${p0[k]}${o.timeUnit === 'min' ? '' : ' — 분 단위면 timeUnit: \'min\''})`);
      }
      if (t.total != null && !out.length) {
        const pick = (k) => (w[k] != null ? [w[k]] : [...reach[k]]);
        let ok = false;
        for (const a of pick('work')) { for (const b of pick('rest')) { for (const n of pick('rounds')) if (C.totalOf({ work: a, rest: b, rounds: n }) === t.total) { ok = true; break; } if (ok) break; } if (ok) break; }
        if (!ok) out.push(`전체 ${t.total}${U.u}을(를) 만드는 운동·쉬기·횟수 조합에 −/+로 닿을 수 없음`);
      }
    }
    if (t.order) {
      const cards = C.cardsOf(o, t);
      const miss = t.order.filter((x) => !cards.includes(x));
      if (miss.length) out.push(`순서 카드에 없는 ${miss.map((x) => `‘${x}’`).join(', ')}`);
      if (cards.length !== t.order.length) out.push(`카드 ${cards.length}장인데 정답 차례는 ${t.order.length}장`);
    }
    if (Array.isArray(t.records)) {
      const fs = C.fieldsOf(o);
      t.records.forEach((v, i) => {
        if (v == null) return;
        const f = fs[i]; if (!f) { out.push(`기록 ${i + 1}번째 칸이 없음(fields ${fs.length}개)`); return; }
        const k = v / f.step;
        if (v < 0 || v > f.max || Math.abs(k - Math.round(k)) > 1e-6) out.push(`기록 ‘${f.label}’ ${v}에 −/+로 닿을 수 없음(0~${f.max}, ${f.step}씩)`);
      });
    } else if (typeof t.records === 'number' && t.records > C.fieldsOf(o).length) out.push(`기록 ${t.records}칸이 필요한데 칸은 ${C.fieldsOf(o).length}개`);
    if (t.safety && !(o.safety || []).length) out.push('safety 목록 없이 target.safety');
    return out;
  },

  keyboard(o, t) {
    const out = []; t = t || {};
    const C = cores.keyboard; const c = C.cfg(o);
    if (c.mode === 'melody') {
      const keys = new Set(); for (let m = c.lo; m <= c.hi; m++) if (c.black || ![1, 3, 6, 8, 10].includes(m % 12)) keys.add(m);
      const range = `${C.labelOf(c.lo)}~${C.labelOf(c.hi)}${c.black ? '' : ', 흰건반만'}`;
      const off = (list) => [...new Set(list.filter((x) => !keys.has(C.midiOf(x))).map(C.norm))];
      if (t.notes) {
        const bad = off(t.notes); if (bad.length) out.push(`건반(${range})에 없는 음 ${bad.join(' ')}`);
        if (t.notes.length > c.maxNotes) out.push(`음 ${t.notes.length}개 > maxNotes ${c.maxNotes}`);
      }
      if (t.compose) {
        const r = t.compose;
        const bad = off([r.startOn, r.endOn].filter(Boolean)); if (bad.length) out.push(`건반(${range})에 없는 시작·끝 음 ${bad.join(' ')}`);
        if (r.only) { const ok = r.only.filter((x) => keys.has(C.midiOf(x))); if (!ok.length) out.push(`쓰기로 한 음(only)이 건반(${range})에 하나도 없음`); }
        if ((r.length || r.min || 1) > c.maxNotes) out.push(`가락 길이 ${r.length || r.min} > maxNotes ${c.maxNotes}`);
      }
    } else if (c.mode === 'rhythm') {
      const cap = c.meter * c.measures;
      const blockName = (k) => (C.RHY[k] ? C.RHY[k].name : k);
      if (t.rhythm) {
        const miss = [...new Set(t.rhythm.filter((k) => !c.blocks.includes(k)))];
        if (miss.length) out.push(`블록 고르개(${c.blocks.join(',')})에 없는 블록 ${miss.map(blockName).join(', ')}`);
        let p = 0; let cross = null;
        for (const k of t.rhythm) { const b = (C.RHY[k] || C.RHY.q).b; if (cross == null && Math.floor(p / c.meter + 1e-9) !== Math.floor((p + b) / c.meter - 1e-9)) cross = Math.floor(p / c.meter + 1e-9) + 1; p += b; }
        if (p > cap + 1e-9) out.push(`리듬이 ${p}박인데 마디 ${c.meter}박 × ${c.measures}개 = ${cap}박까지만 놓임`);
        // 블록은 놓이지만 그 마디의 박 수가 meter 를 넘는다(학생 화면 점검의 '5박 마디' 결함과 같은 것)
        else if (cross != null) out.push(`리듬의 ${cross}번째 마디가 ${c.meter}박을 넘어 마디줄을 가로지름`);
      }
      if (t.beats) {
        const miss = (t.use || []).filter((k) => !c.blocks.includes(k));
        if (miss.length) out.push(`꼭 넣을 블록 ${miss.map(blockName).join(', ')}이(가) 고르개에 없음`);
        if (t.rests && !c.blocks.some((k) => C.RHY[k].rest)) out.push('쉼표를 넣어야 하는데 고르개에 쉼표 블록이 없음');
        // 고르개 블록만으로 한 마디(meter 박)를 꼭 채울 수 있는가(½박 단위)
        const unit = 2; const want = c.meter * unit; const can = Array(want + 1).fill(false); can[0] = true;
        for (let s = 1; s <= want; s++) can[s] = c.blocks.some((k) => { const b = Math.round(C.RHY[k].b * unit); return b <= s && can[s - b]; });
        if (!can[want]) out.push(`고르개 블록(${c.blocks.join(',')})으로 ${c.meter}박 마디를 채울 수 없음`);
      }
    } else if (c.mode === 'janggu') {
      if (t.strokes) {
        const miss = [...new Set(t.strokes.filter((x) => x && !c.strokes.includes(x)))];
        if (miss.length) out.push(`구음 붓(${c.strokes.join(',')})에 없는 ${miss.join(', ')}`);
        if (t.strokes.length > c.beats) out.push(`장단 ${t.strokes.length}칸 > beats ${c.beats}`);
      }
    }
    return out;
  },

  fracstrips(o, t) {
    const out = []; t = t || {};
    const divide = o.mode === 'divide';
    const [, td] = o.top || [1, 2];
    if (t.reduce) {
      const [a, b] = t.reduce;
      const divs = (o.divisors || [2, 3, 4, 5, 6]).map(Number);
      if (!divide) out.push("target.reduce 인데 mode 가 'divide' 가 아님");
      if (t.div != null && !divs.includes(t.div)) out.push(`나눌 수 ${t.div} 단추가 없음(divisors ${divs.join(',')})`);
      else if (!divs.some((k) => a % k === 0 && b % k === 0)) out.push(`${a}/${b}의 공약수 단추가 없음(divisors ${divs.join(',')})`);
      const g = gcd(a, b); const res = t.lowest ? [a / g, b / g] : [a, b];
      // 화면 위 띠(top)가 약분할 분수다 — 다르면 학생은 다른 분수를 보고 약분한다
      if (divide && (o.top ? `${o.top[0]}/${o.top[1]}` : '1/2') !== `${a}/${b}`) out.push(`위 띠 top ${o.top ? o.top.join('/') : '1/2(기본)'}가 약분할 분수 ${a}/${b}와 다름`);
      // 기약분수: 최대공약수로 한 번에 나누는 학생이 그 단추를 찾을 수 있어야 한다(학생 화면 점검: ÷10·÷15 단추가 없던 결함)
      if (t.lowest && t.div == null && g > 1 && !divs.includes(g)) out.push(`최대공약수 ${g} 단추가 없음(divisors ${divs.join(',')})`);
      if (res.some((n) => digitsOf(n) > 3)) out.push('약분한 분수 입력 칸은 3자리까지');
    }
    if (t.equalTo) {
      const [n, d] = t.equalTo;
      const maxDen = o.maxDen || (divide ? Math.max(24, td) : 12);
      const ok = (k) => k >= 1 && k <= maxDen && (n * k) % d === 0 && (k !== d || t.allowSame);
      if (t.den != null) { if (!ok(t.den)) out.push(`아래 띠 ${t.den}조각으로 ${n}/${d}와 같은 분수를 만들 수 없음(maxDen ${maxDen})`); }
      else if (t.smallest) { const k = d / gcd(n, d); if (!ok(k)) out.push(`가장 작은 분모 ${k}에 닿을 수 없음(maxDen ${maxDen}${k === d ? ', 이미 기약분수 — allowSame 필요' : ''})`); }
      else { let any = false; for (let k = 1; k <= maxDen && !any; k++) any = ok(k); if (!any) out.push(`아래 띠(1~${maxDen}조각)로 ${n}/${d}와 크기가 같은 다른 분수를 만들 수 없음`); }
    }
    if (Number.isInteger(t.ask) && !(o.ask && Array.isArray(o.ask.choices) && t.ask >= 0 && t.ask < o.ask.choices.length)) out.push(`ask ${t.ask}가 보기(ask.choices) 밖`);
    return out;
  },

  hangul(o, t, s) {
    const out = []; t = t || {};
    const CHO = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ'; const JUNG = 'ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ';
    const JONG = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
    const SIMPLE = 'ㅏㅐㅑㅒㅓㅔㅕㅖㅣㅗㅛㅜㅠㅡ'; // 교구 okJung(VERT+HORZ) — 겹모음(ㅘ 등)은 조각이 없다
    const dec = (x) => { const k = String(x || '').charCodeAt(0) - 0xAC00; return k >= 0 && k <= 11171 ? { cho: CHO[Math.floor(k / 588)], jung: JUNG[Math.floor((k % 588) / 28)], jong: JONG[k % 28] || null } : null; };
    if (!t.syllable) return out;
    const w = dec(t.syllable); if (!w) { out.push(`글자 ‘${t.syllable}’를 조각으로 나눌 수 없음`); return out; }
    const lock = Array.isArray(o.lock) ? o.lock : [];
    const st = s ? (s.syllable ? dec(s.syllable) : s) : null;
    const cons = (o.consonants || ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ']).filter((c) => CHO.includes(c));
    const vows = (o.vowels || ['ㅏ', 'ㅓ', 'ㅗ', 'ㅜ', 'ㅡ', 'ㅣ']).filter((j) => SIMPLE.includes(j));
    const hasJong = Array.isArray(o.batchim); const fins = hasJong ? o.batchim.filter((f) => JONG.indexOf(f) > 0) : [];
    if (lock.includes('cho')) { if (!st || st.cho !== w.cho) out.push(`초성이 잠겼는데(lock) 시작 상태 초성이 ‘${w.cho}’가 아님`); } else if (!cons.includes(w.cho)) out.push(`자음 바구니(${cons.join('')})에 ‘${w.cho}’가 없음`);
    if (lock.includes('jung')) { if (!st || st.jung !== w.jung) out.push(`모음이 잠겼는데(lock) 시작 상태 모음이 ‘${w.jung}’가 아님`); } else if (!SIMPLE.includes(w.jung)) out.push(`겹모음 ‘${w.jung}’은 조각이 없음`); else if (!vows.includes(w.jung)) out.push(`모음 바구니(${vows.join('')})에 ‘${w.jung}’가 없음`);
    if (w.jong) { if (!hasJong) out.push(`받침 ‘${w.jong}’이 있는데 batchim 옵션이 없음`); else if (!fins.includes(w.jong)) out.push(`받침 바구니(${fins.join('')})에 ‘${w.jong}’가 없음`); }
    return out;
  },

  map(o, t) {
    const out = []; t = t || {};
    const mode = ['pin', 'terrain', 'compass', 'legend', 'scale'].includes(o.mode) ? o.mode : 'pin';
    const places = (o.places || []).filter((p) => p && p.name);
    const [gc, gr] = Array.isArray(o.grid) ? o.grid : [6, 4];
    const placeBy = (n) => places.find((p) => p.name === n);
    for (const k of ['place', 'from', 'to']) if (t[k] != null && !placeBy(t[k]) && !(k !== 'place' && (o[k] === t[k] && placeBy(o[k])))) out.push(`장소 ‘${t[k]}’가 지도(places)에 없음`);
    if (t.region != null && !(o.regions || []).some((g) => g && g.name === t.region)) out.push(`지역 ‘${t.region}’가 regions 에 없음`);
    if (Array.isArray(t.at) && !(t.at[0] >= 0 && t.at[0] < gc && t.at[1] >= 0 && t.at[1] < gr)) out.push(`칸 ${show(t.at)}가 지도(${gc}×${gr}) 밖`);
    if (mode === 'compass' && t.dir != null) { const DIRS = o.points === 4 ? ['북', '동', '남', '서'] : ['북', '북동', '동', '남동', '남', '남서', '서', '북서']; if (!DIRS.includes(t.dir)) out.push(`방위 ‘${t.dir}’ 단추가 없음(points ${o.points === 4 ? 4 : 8})`); }
    if (mode === 'legend') {
      const icons = [...new Set(places.map((p) => p.icon))].filter((k) => MAP_ICON_NAME[k]);
      const meanings = Object.assign({}, ...icons.map((k) => ({ [k]: (places.find((p) => p.icon === k && p.legend) || {}).legend || MAP_ICON_NAME[k] })), o.meanings || {});
      const keys = (Array.isArray(o.legendIcons) ? o.legendIcons.filter((k) => MAP_ICON_NAME[k]) : Object.keys(meanings)).slice(0, 8);
      const choices = new Set(keys.map((k) => meanings[k] || MAP_ICON_NAME[k]).concat(o.extra || []));
      for (const [k, v] of Object.entries(t.legend || {})) {
        if (!keys.includes(k)) out.push(`범례에 기호 ‘${k}’ 빈칸이 없음`);
        else if (!choices.has(v)) out.push(`범례 보기(${[...choices].join('·')})에 ‘${v}’가 없음`);
      }
    }
    if (mode === 'scale') {
      const scale = o.scale && Number.isFinite(o.scale.cell) ? o.scale : { cell: 100 };
      const step = Number.isFinite(o.distStep) && o.distStep > 0 ? o.distStep : scale.cell;
      const a = placeBy(t.from || o.from); const b = placeBy(t.to || o.to);
      const want = Number.isFinite(t.dist) ? t.dist : a && b ? (Math.abs(a.at[0] - b.at[0]) + Math.abs(a.at[1] - b.at[1])) * scale.cell : null;
      if (want != null) { const k = want / step; if (want < 0 || want > step * 40 || Math.abs(k - Math.round(k)) > 1e-6) out.push(`거리 ${want}에 −/+(${step}씩, ${step * 40}까지)로 닿을 수 없음`); }
    }
    if (t.pick != null && !(o.ask && Array.isArray(o.ask.choices) && Number.isInteger(t.pick) && t.pick >= 0 && t.pick < o.ask.choices.length)) out.push(`pick ${t.pick}이 보기(ask.choices) 밖`);
    return out;
  },

  collage(o, t, s) {
    const out = []; t = t || {};
    const C = cores.collage;
    const why = C.achievable(t, o); if (why) out.push(why);
    // 대칭 문항: 시작 조각의 짝은 학생이 고르개에서 같은 모양·색·크기를 골라 붙인다 — achievable 은 이것을 보지 않는다
    if (t.symmetry && s && Array.isArray(s.pieces)) {
      const axis = t.symmetry === 'horizontal' ? 'horizontal' : 'vertical';
      const shapes = (o.shapes || C.SH0).filter((k) => C.SHAPES[k]); const colors = (o.colors || Object.keys(C.COLORS)).filter((k) => C.COLORS[k]); const sizes = (o.sizes || ['s', 'm', 'l']).filter((k) => C.SIZES[k]);
      const miss = new Set();
      for (const p of s.pieces) {
        const m = C.mirror(p, axis);
        if (m.x === p.x && m.y === p.y) continue;
        if (s.pieces.some((q) => q !== p && q.shape === p.shape && q.color === p.color && q.size === p.size && q.x === m.x && q.y === m.y)) continue;
        if (!shapes.includes(p.shape)) miss.add(`모양 ‘${(C.SHAPES[p.shape] || { name: p.shape }).name}’`);
        if (!colors.includes(p.color)) miss.add(`색 ‘${p.color}’`);
        if (!sizes.includes(p.size || 'm')) miss.add(`크기 ‘${(C.SIZES[p.size] || { name: p.size }).name}’`);
      }
      if (miss.size) out.push(`대칭 짝을 붙일 고르개에 시작 조각의 ${[...miss].slice(0, 3).join(', ')}이(가) 없음`);
    }
    const maxPieces = Math.max(2, Math.min(40, o.maxPieces || 24));
    const need = (t.pieces && (t.pieces.n ?? t.pieces.min)) || 0;
    if (need > maxPieces) out.push(`조각 ${need}개가 필요한데 maxPieces ${maxPieces}`);
    return out;
  },

  numberline(o, t) {
    const out = []; t = t || {};
    const parse = (v) => {
      if (typeof v === 'number') return v; if (typeof v !== 'string') return NaN;
      const x = v.trim().replace(/\s+/g, ' ');
      let m = /^(-?\d+) (\d+)\/(\d+)$/.exec(x); if (m) return Number(m[1]) + Math.sign(Number(m[1]) || 1) * (Number(m[2]) / Number(m[3]));
      m = /^(-?\d+)\/(\d+)$/.exec(x); if (m) return Number(m[2]) ? Number(m[1]) / Number(m[2]) : NaN;
      return /^-?\d*\.?\d+$/.test(x) ? Number(x) : NaN;
    };
    const mode = ['place', 'jump', 'read'].includes(o.mode) ? o.mode : 'place';
    const min = Number.isFinite(parse(o.min)) ? parse(o.min) : 0;
    let max = Number.isFinite(parse(o.max)) ? parse(o.max) : 10; if (max <= min) max = min + 10;
    const stepV = parse(o.step) > 0 ? parse(o.step) : 1; const sub = Math.max(1, Math.min(20, Math.round(o.sub || 1)));
    const unit = stepV / sub; const N = Math.max(1, Math.min(200, Math.round((max - min) / unit)));
    const last = min + N * unit;
    const onTick = (v) => { const k = (v - min) / unit; return Math.abs(k - Math.round(k)) < 1e-4 && Math.round(k) >= 0 && Math.round(k) <= N; };
    const fmt = (v) => String(Math.round(v * 1000) / 1000);
    const grid = `${fmt(min)}~${fmt(last)}, ${fmt(unit)}칸`;
    if (mode === 'place') {
      for (const p of t.points || []) { const v = parse(p); if (!Number.isFinite(v)) out.push(`점 ${show(p)}를 읽을 수 없음`); else if (!onTick(v)) out.push(`점 ${show(p)}가 눈금(${grid}) 위에 없음 — 점은 눈금에만 놓임`); }
      if ((t.points || []).length > 6) out.push(`점 ${(t.points || []).length}개 > 6`);
    } else if (mode === 'jump') {
      const hopStep = parse(o.hopStep) > 0 ? parse(o.hopStep) : unit;
      const fixed = o.fixedFrom != null && Number.isFinite(parse(o.fixedFrom)) ? parse(o.fixedFrom) : null;
      const tf = t.from != null ? parse(t.from) : null;
      const f = fixed != null ? fixed : tf;
      if (fixed != null && tf != null && Math.abs(fixed - tf) > EPS) out.push(`출발점이 fixedFrom ${fmt(fixed)}로 잠겼는데 target.from 은 ${fmt(tf)}`);
      if (fixed != null && (fixed < min - EPS || fixed > max + EPS)) out.push(`fixedFrom ${fmt(fixed)}가 수직선(${fmt(min)}~${fmt(max)}) 밖`);
      // 출발점·화살표·도착점은 가까운 눈금(xOf(tickOf(v)))에 그려진다 — 눈금 밖 값은 다른 자리에 보인다
      else if (fixed != null && !onTick(fixed)) out.push(`출발점 fixedFrom ${fmt(fixed)}가 눈금(${grid}) 위에 없음 — 가까운 눈금에 그려짐`);
      if (fixed == null && tf != null && !onTick(tf)) out.push(`출발점 ${fmt(tf)}가 눈금(${grid}) 위에 없음 — 출발점은 눈금에만 놓임`);
      // 뛰는 크기: 처음 hopSize 에서 −/+ hopStep, hopStep ~ (max − min) 사이
      const size0 = parse(o.hopSize) > 0 ? parse(o.hopSize) : hopStep;
      // setSize 처럼 hopStep 의 배수에 가까우면 배수로 맞춘다(1/12 를 다섯 번 더한 값 = 5/12)
      const sizes = new Set(); { const q = [size0]; while (q.length && sizes.size < 2000) { let v = Math.max(hopStep, Math.min(max - min, q.pop())); const k = v / hopStep; v = Math.abs(k - Math.round(k)) < 1e-4 ? Math.round(k) * hopStep : v; v = Math.round(v * 1e9) / 1e9; if (sizes.has(v)) continue; sizes.add(v); q.push(v + hopStep, v - hopStep); } }
      const ts = t.size != null ? parse(t.size) : null;
      if (ts != null && ![...sizes].some((x) => Math.abs(x - ts) < 1e-6)) out.push(`뛰는 크기 ${fmt(ts)}에 −/+로 닿을 수 없음(처음 ${fmt(size0)}, ${fmt(hopStep)}씩, ${fmt(hopStep)}~${fmt(max - min)})`);
      const te = t.end != null ? parse(t.end) : null;
      if (te != null && (te < min - EPS || te > max + EPS)) out.push(`도착 ${fmt(te)}가 수직선(${fmt(min)}~${fmt(max)}) 밖`);
      else if (te != null && !onTick(te)) out.push(`도착 ${fmt(te)}가 눈금(${grid}) 위에 없음 — 가까운 눈금에 그려짐`);
      if (t.count != null && t.count > 30) out.push(`화살표 ${t.count}개 > 30`);
      if (f != null && ts != null && t.count != null && te == null) { const e = f + ts * t.count; if (e > max + EPS) out.push(`${fmt(f)}에서 ${fmt(ts)}씩 ${t.count}번 뛰면 ${fmt(e)} — 수직선 끝 ${fmt(max)}을 넘음`); }
      if (f != null && te != null && !out.length) {
        const d = te - f;
        if (ts != null) { const k = d / ts; if (Math.abs(k - Math.round(k)) > 1e-6) out.push(`${fmt(f)}에서 ${fmt(ts)}씩 뛰어 ${fmt(te)}에 닿을 수 없음`); else if (Math.abs(Math.round(k)) > 30) out.push(`화살표가 ${Math.abs(Math.round(k))}개 필요함(30개까지)`); }
        else { const ks = [...sizes]; const g = ks.every((x) => isInt(x / hopStep)) ? hopStep : null; if (g && !isInt(d / g)) out.push(`${fmt(f)}에서 ${fmt(te)}까지 ${fmt(d)}를 ${fmt(g)}의 배수로만 뛸 수 있어 닿을 수 없음`); }
      }
    } else if (mode === 'read') {
      const useInput = !(Array.isArray(o.choices) && o.choices.length);
      if (t.pick != null && (useInput || !(t.pick >= 0 && t.pick < o.choices.length))) out.push(`pick ${t.pick}이 보기(choices) 밖`);
      const marks = Array.isArray(o.marks) ? o.marks : [];
      if (t.mark != null && !(t.mark >= 0 && t.mark < marks.length)) out.push(`mark ${t.mark}가 찍힌 점(marks ${marks.length}개) 밖`);
      // 찍힌 점도 가까운 눈금에 그려진다 — 점을 읽어 그 수를 쓰는(value = 점의 수) 문항에서 점이 눈금 밖이면 학생은 다른 수를 읽는다.
      // 보기 고르기(pick)·점에서 계산한 값을 쓰는 문항은 보지 않는다('어림' 문항이 눈금 사이 점을 일부러 쓴다)
      const mk = marks[Number.isInteger(t.mark) ? t.mark : 0]; const mv = mk == null ? NaN : parse(typeof mk === 'object' ? mk.v : mk);
      if (t.value != null && Math.abs(parse(t.value) - mv) < EPS && !onTick(mv)) out.push(`읽을 점 ${fmt(mv)}가 눈금(${grid}) 위에 없음 — 가까운 눈금에 그려짐`);
      if (t.value != null && useInput && !Number.isFinite(parse(t.value))) out.push(`value ${show(t.value)}를 수로 쓸 수 없음`);
    }
    return out;
  },
};

// 이 검사를 넣을 때(2026-11-01) 이미 있던 차시 결함 — 차시를 고치는 일은 이 변경 밖이라 실패 대신 알림으로 둔다.
// 차시를 고치면 그 줄이 더 걸리지 않으므로 check-unit 이 '목록에서 지움'을 실패로 알린다(목록은 줄기만 한다). 새 줄을 더하지 않는다.
export const KNOWN_REACH = new Set([
  // hangul 쉬움 바구니에 목표 조각이 없음
  'g1-kor-1-03-03 · a1.3 · 교구 범위 밖 (levels.easy): 받침 바구니(ㄴㅁㅇ)에 ‘ㄹ’가 없음',
  'g1-kor-1-03-04 · a2.3 · 교구 범위 밖 (levels.easy): 받침 바구니(ㄱㄴㅇ)에 ‘ㄹ’가 없음',
  'g1-kor-1-03-05 · a2.4 · 교구 범위 밖 (levels.easy): 받침 바구니(ㄴㄹㅁ)에 ‘ㅇ’가 없음',
  'g1-kor-1-03-12 · a1.3 · 교구 범위 밖 (levels.easy): 자음 바구니(ㅂㅍ)에 ‘ㄱ’가 없음',
  'g1-kor-1-03-12 · a1.4 · 교구 범위 밖 (levels.easy): 자음 바구니(ㅂㅍ)에 ‘ㅋ’가 없음',
  // numberline 도전 눈금(500)에 목표 점이 없음 — 교구는 가까운 눈금(1250→1500)을 정답으로 판정한다
  'g3-math-1-05-08 · a2.1 · 교구 범위 밖 (levels.challenge): 점 1250가 눈금(0~3000, 500칸) 위에 없음 — 점은 눈금에만 놓임',
  'g3-math-1-05-08 · a2.3 · 교구 범위 밖 (levels.challenge): 점 750가 눈금(0~3000, 500칸) 위에 없음 — 점은 눈금에만 놓임',
  'g3-math-1-05-08 · a2.4 · 교구 범위 밖 (levels.challenge): 점 2750가 눈금(0~3000, 500칸) 위에 없음 — 점은 눈금에만 놓임',
  // keyboard 리듬이 마디줄을 가로지름(g5-mus-2-03-09 '5박 마디'와 같은 결함)
  'g3-mus-1-01-06 · exit.1 · 교구 범위 밖: 리듬의 3번째 마디가 2박을 넘어 마디줄을 가로지름',
  'g3-mus-1-01-16 · exit.1 · 교구 범위 밖: 리듬의 1번째 마디가 4박을 넘어 마디줄을 가로지름',
  'g4-mus-2-03-12 · a2.2 · 교구 범위 밖: 리듬의 1번째 마디가 4박을 넘어 마디줄을 가로지름',
  // keyboard 쉬움 고르개에 점2분음표 없음
  'g4-mus-1-02-07 · a1.2 · 교구 범위 밖 (levels.easy): 블록 고르개(q,e,h,qr)에 없는 블록 점2분음표',
  'g4-mus-1-02-20 · a2.3 · 교구 범위 밖 (levels.easy): 꼭 넣을 블록 점2분음표이(가) 고르개에 없음',
  // timer 쉬움 restStep 10 으로 쉬기 15초·5초에 닿지 않음
  "g4-pe-1-01-10 · a2.1 · 교구 범위 밖 (levels.easy): 쉬기 15초에 −/+로 닿을 수 없음(0~120, 10초씩, 처음 10 — 분 단위면 timeUnit: 'min')",
  "g4-pe-1-01-13 · a2.1 · 교구 범위 밖 (levels.easy): 쉬기 15초에 −/+로 닿을 수 없음(0~120, 10초씩, 처음 10 — 분 단위면 timeUnit: 'min')",
  "g4-pe-2-03-16 · a2.2 · 교구 범위 밖 (levels.easy): 쉬기 15초에 −/+로 닿을 수 없음(0~120, 10초씩, 처음 10 — 분 단위면 timeUnit: 'min')",
  "g4-pe-2-03-19 · a2.1 · 교구 범위 밖 (levels.easy): 쉬기 15초에 −/+로 닿을 수 없음(0~120, 10초씩, 처음 10 — 분 단위면 timeUnit: 'min')",
  "g4-pe-2-03-24 · a1.2 · 교구 범위 밖 (levels.easy): 쉬기 5초에 −/+로 닿을 수 없음(0~120, 10초씩, 처음 10 — 분 단위면 timeUnit: 'min')",
  "g6-pe-1-02-43 · a1.2 · 교구 범위 밖 (levels.easy): 쉬기 5초에 −/+로 닿을 수 없음(0~120, 10초씩, 처음 10 — 분 단위면 timeUnit: 'min')",
  "g6-pe-2-03-05 · a1.3 · 교구 범위 밖 (levels.easy): 쉬기 15초에 −/+로 닿을 수 없음(0~120, 10초씩, 처음 10 — 분 단위면 timeUnit: 'min')",
  "g6-pe-2-03-08 · a2.1 · 교구 범위 밖 (levels.easy): 쉬기 15초에 −/+로 닿을 수 없음(0~120, 10초씩, 처음 10 — 분 단위면 timeUnit: 'min')",
  "g6-pe-2-03-16 · a1.3 · 교구 범위 밖 (levels.easy): 쉬기 15초에 −/+로 닿을 수 없음(0~120, 10초씩, 처음 10 — 분 단위면 timeUnit: 'min')",
  "g6-pe-2-03-26 · a2.1 · 교구 범위 밖 (levels.easy): 쉬기 15초에 −/+로 닿을 수 없음(0~120, 10초씩, 처음 10 — 분 단위면 timeUnit: 'min')",
  // numberline 출발점·도착·읽을 점이 그 단계 눈금 위에 없음 — 교구는 가까운 눈금에 그리고 판정도 가까운 눈금으로 한다(g3-math-1-05 도전만 #58 에서 고쳤다)
  "g3-math-1-05-02 · a2.1 · 교구 범위 밖 (levels.challenge): 도착 80가 눈금(0~180, 30칸) 위에 없음 — 가까운 눈금에 그려짐",
  "g3-math-1-05-02 · a2.2 · 교구 범위 밖 (levels.challenge): 도착 110가 눈금(0~180, 30칸) 위에 없음 — 가까운 눈금에 그려짐",
  "g3-math-1-05-02 · a2.4 · 교구 범위 밖 (levels.challenge): 도착 170가 눈금(0~180, 30칸) 위에 없음 — 가까운 눈금에 그려짐",
  "g3-math-1-05-04 · a1.1 · 교구 범위 밖 (levels.challenge): 출발점 fixedFrom 20가 눈금(0~180, 30칸) 위에 없음 — 가까운 눈금에 그려짐",
  "g3-math-1-05-04 · a1.1 · 교구 범위 밖 (levels.challenge): 도착 50가 눈금(0~180, 30칸) 위에 없음 — 가까운 눈금에 그려짐",
  "g3-math-1-05-04 · a1.2 · 교구 범위 밖 (levels.challenge): 출발점 fixedFrom 10가 눈금(0~180, 30칸) 위에 없음 — 가까운 눈금에 그려짐",
  "g3-math-1-05-04 · a1.2 · 교구 범위 밖 (levels.challenge): 도착 40가 눈금(0~180, 30칸) 위에 없음 — 가까운 눈금에 그려짐",
  "g3-math-1-05-04 · a1.3 · 교구 범위 밖 (levels.challenge): 출발점 fixedFrom 40가 눈금(0~180, 30칸) 위에 없음 — 가까운 눈금에 그려짐",
  "g3-math-1-05-04 · a2.1 · 교구 범위 밖 (levels.challenge): 출발점 fixedFrom 50가 눈금(0~180, 30칸) 위에 없음 — 가까운 눈금에 그려짐",
  "g3-math-1-05-04 · a2.1 · 교구 범위 밖 (levels.challenge): 도착 80가 눈금(0~180, 30칸) 위에 없음 — 가까운 눈금에 그려짐",
  "g3-math-1-05-04 · a2.2 · 교구 범위 밖 (levels.base): 출발점 fixedFrom 45가 눈금(0~180, 10칸) 위에 없음 — 가까운 눈금에 그려짐",
  "g3-math-1-05-04 · a2.2 · 교구 범위 밖 (levels.base): 도착 75가 눈금(0~180, 10칸) 위에 없음 — 가까운 눈금에 그려짐",
  "g3-math-1-05-04 · a2.2 · 교구 범위 밖 (levels.challenge): 출발점 fixedFrom 45가 눈금(0~180, 30칸) 위에 없음 — 가까운 눈금에 그려짐",
  "g3-math-1-05-04 · a2.2 · 교구 범위 밖 (levels.challenge): 도착 75가 눈금(0~180, 30칸) 위에 없음 — 가까운 눈금에 그려짐",
  "g3-math-1-05-04 · a2.3 · 교구 범위 밖 (levels.base): 출발점 fixedFrom 35가 눈금(0~180, 10칸) 위에 없음 — 가까운 눈금에 그려짐",
  "g3-math-1-05-04 · a2.3 · 교구 범위 밖 (levels.challenge): 출발점 fixedFrom 35가 눈금(0~180, 30칸) 위에 없음 — 가까운 눈금에 그려짐",
  "g3-math-1-05-04 · a2.4 · 교구 범위 밖 (levels.base): 출발점 fixedFrom 55가 눈금(0~180, 10칸) 위에 없음 — 가까운 눈금에 그려짐",
  "g3-math-1-05-04 · a2.4 · 교구 범위 밖 (levels.challenge): 출발점 fixedFrom 55가 눈금(0~180, 30칸) 위에 없음 — 가까운 눈금에 그려짐",
  "g3-math-1-05-04 · a2.4 · 교구 범위 밖 (levels.challenge): 도착 100가 눈금(0~180, 30칸) 위에 없음 — 가까운 눈금에 그려짐",
  "g3-math-1-05-05 · a1.2 · 교구 범위 밖 (levels.base): 도착 15가 눈금(0~180, 10칸) 위에 없음 — 가까운 눈금에 그려짐",
  "g3-math-1-05-05 · a1.3 · 교구 범위 밖 (levels.base): 도착 25가 눈금(0~180, 10칸) 위에 없음 — 가까운 눈금에 그려짐",
  "g3-math-1-05-05 · a1.4 · 교구 범위 밖 (levels.base): 도착 15가 눈금(0~180, 10칸) 위에 없음 — 가까운 눈금에 그려짐",
  "g3-math-1-05-05 · a2.1 · 교구 범위 밖 (levels.base): 도착 45가 눈금(0~180, 10칸) 위에 없음 — 가까운 눈금에 그려짐",
  "g3-math-1-05-05 · a2.3 · 교구 범위 밖 (levels.base): 도착 35가 눈금(0~180, 10칸) 위에 없음 — 가까운 눈금에 그려짐",
  "g3-math-1-05-05 · a2.4 · 교구 범위 밖 (levels.base): 도착 45가 눈금(0~180, 10칸) 위에 없음 — 가까운 눈금에 그려짐",
  "g3-math-1-05-09 · a3.2 · 교구 범위 밖 (levels.challenge): 출발점 fixedFrom 1250가 눈금(0~3000, 500칸) 위에 없음 — 가까운 눈금에 그려짐",
  "g3-math-1-05-09 · a3.3 · 교구 범위 밖 (levels.challenge): 출발점 fixedFrom 750가 눈금(0~3000, 500칸) 위에 없음 — 가까운 눈금에 그려짐",
  "g3-math-1-05-09 · a3.4 · 교구 범위 밖 (levels.challenge): 도착 2250가 눈금(0~3000, 500칸) 위에 없음 — 가까운 눈금에 그려짐",
  "g3-math-1-05-10 · a2.1 · 교구 범위 밖 (levels.challenge): 읽을 점 3400가 눈금(0~4000, 500칸) 위에 없음 — 가까운 눈금에 그려짐",
  "g3-math-1-05-10 · a2.2 · 교구 범위 밖 (levels.challenge): 읽을 점 1800가 눈금(0~4000, 500칸) 위에 없음 — 가까운 눈금에 그려짐",
  "g3-math-1-05-10 · a2.3 · 교구 범위 밖 (levels.challenge): 읽을 점 2600가 눈금(0~4000, 500칸) 위에 없음 — 가까운 눈금에 그려짐",
  "g3-math-1-05-10 · a2.4 · 교구 범위 밖 (levels.base): 읽을 점 3900가 눈금(0~4000, 200칸) 위에 없음 — 가까운 눈금에 그려짐",
  "g3-math-1-05-10 · a2.4 · 교구 범위 밖 (levels.challenge): 읽을 점 3900가 눈금(0~4000, 500칸) 위에 없음 — 가까운 눈금에 그려짐",
  "g5-sci-2-03-14 · exit.2 · 교구 범위 밖: 읽을 점 57가 눈금(40~70, 2칸) 위에 없음 — 가까운 눈금에 그려짐",
  "✗ 단원 562개 · 차시 6760개 · 실패 34줄 · 0.0초 (차시당 0.0초)",
]);

export const REACH_TOOLS = Object.keys(RULES);
export function reachProblems(tool, options, target, state) {
  const rule = RULES[tool];
  if (!rule || target == null) return [];
  return rule(options || {}, target, state);
}

// 차시 하나: 전개 문항(free·talk 제외)과 출구 교구 문항을 단계마다 본다. fail(where, why) — 같은 이유가 여러 단계에 나오면 한 줄로 묶는다.
export function lessonReach(l, fail) {
  const st = l.stages || [];
  const check = (where, tool, item, actOpts, actLevels) => {
    if (!RULES[tool]) return;
    const by = new Map();
    for (const lv of LEVELS) {
      const m = mounted(item, lv, Object.assign({}, actOpts || {}, (actLevels || {})[lv] || {}));
      for (const why of reachProblems(tool, m.options, m.target, m.state)) { if (!by.has(why)) by.set(why, []); by.get(why).push(lv); }
    }
    for (const [why, lvs] of by) fail(where, `교구 범위 밖${lvs.length === 3 ? '' : ` (levels.${lvs.join('·')})`}: ${why}`);
  };
  for (const s of st) {
    for (const a of s.activities || []) (a.items || []).forEach((it, i) => { if (!it.free) check(`${a.id}.${i + 1}`, a.tool, it, a.options, a.levels); });
    (s.exitTicket || []).forEach((q, i) => { if (q.type === 'tool') check(`exit.${i + 1}`, q.tool, q, q.options, null); });
  }
}
