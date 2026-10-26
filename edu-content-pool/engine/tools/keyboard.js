/* 종이 건반·리듬 블록·장구 장단판 — 음악(3~6학년)·즐거운 생활의 '듣고 따라 치기·박자 맞추기·가락/장단 짓기'.
 * 소리는 누를 때만 낸다(건반·블록·장단 칸을 누르거나 '듣기' 단추). 자동 재생 없음. kit.soundOn()이 거짓이면 소리 없음.
 *
 * mode(옵션)      | 화면                                   | 상태                          | target
 * --------------- | -------------------------------------- | ----------------------------- | ----------------------------------------------
 * 'melody'(기본)  | 종이 건반 + '친 음' 띠                 | { notes: ['도','레',…] }      | { notes: [...] } 들려 준 가락 따라 치기
 *                 |                                        |                               | { compose: { length?, min?, max?, startOn?, endOn?, only?: [...] } } 규칙 있는 가락 짓기
 * 'rhythm'        | 마디 띠 + 리듬 블록(음표·쉼표) 고르개  | { rhythm: ['q','e','e',…] }   | { rhythm: [...] } 들려 준 리듬 따라 놓기
 *                 |                                        |                               | { beats: true, use?: ['e',…], rests?: n } 마디마다 박 맞추기
 * 'janggu'        | 장단 칸(박마다 한 칸) + 구음 붓        | { strokes: ['덩','','덕',…] } | { strokes: [...] } 장단 따라 치기('' = 쉼)
 * 모든 mode       | + 자기 점검 목록(target.selfCheck)     | + checks: [true|false,…]      | { selfCheck: ['…', …], minNotes? } 자유 작곡·연주(교사 확인용 결과는 상태에 남음)
 * target 칸은 섞어 쓸 수 있다(예: { compose: { endOn: '도' }, selfCheck: ['내가 지은 가락을 두 번 쳐 보았어요'] }).
 *
 * 옵션(공통): mode, print, revealAfterCheck, selfCheck(목록을 옵션으로 줄 때), tempo(박/분, 기본 96)
 *  melody: from('C4'|'도'), to('C5'|'높은도'), black(검은건반, 기본 false), names('solfa' 계이름 | 'letter' 음이름 | 'none'),
 *          nameToggle(계이름 보이기 단추, 기본 true), melody(['솔','솔','라',…] '가락 듣기'로 들려줄 가락 — 없으면 target.notes),
 *          maxNotes(기본 16), showWhileListening(듣는 동안 건반을 비춤, 기본 false — 켜면 귀가 아니라 눈으로 맞춘다), printNames, printBoxes(인쇄 빈 칸 수)
 *  rhythm: meter(한 마디 박 수, 기본 4), measures(마디 수, 기본 2), blocks(고르개, 기본 ['q','e','h','qr']), pattern(들려줄 리듬 — 없으면 target.rhythm),
 *          showBeats(마디마다 지금 박 수 — 쉬움)
 *          블록: q 4분음표 1박, e 8분음표 ½박, h 2분음표 2박, dh 점2분음표 3박, w 온음표 4박, qr 4분쉼표 1박, er 8분쉼표 ½박, hr 2분쉼표 2박
 *  janggu: beats(칸 수, 기본 12), group(굵은 금 간격 = 한 박의 소박 수, 기본 3), jangdan('굿거리' 등 이름 — 머리에 보임),
 *          strokes(붓, 기본 ['덩','쿵','덕','기덕','더러러']), pattern(들려줄 장단 — 없으면 target.strokes)
 * revealAfterCheck: melody는 건반·띠의 계이름을, rhythm은 마디별 박 수(showBeats)를 맞힌 확인 전까지 숨긴다.
 * 음 이름: '도'~'시', 반음 '도#', 한 옥타브 위 '높은도', 아래 '낮은솔'. 'C4'·'G#4'처럼 써도 계이름으로 바뀐다(C4 = 도).
 * 키보드: 건반·블록·칸은 Tab으로 옮겨 Enter/Space. 장단 칸은 1~5 = 그 붓, 0·Delete = 지우기. 놓인 리듬 블록은 Enter = 빼기.
 * 예: { tool: 'keyboard', levels: { base: { from: '도', to: '높은도' } },
 *       items: [{ prompt: '가락을 듣고 똑같이 쳐 보세요.', toolOptions: { melody: ['솔','솔','라','라','솔'] }, target: { notes: ['솔','솔','라','라','솔'] } }] }
 */
(function (K) {
  'use strict';
  // ---------------- 공통 ----------------
  const levelOf = (opts) => {
    const want = opts && Number.isInteger(opts.level) ? opts.level : 1;
    const a = opts && Number.isFinite(opts.attempts) ? opts.attempts : null;
    const cap = a == null ? 3 : a >= 2 ? 3 : a >= 1 ? 2 : 1;
    return Math.max(1, Math.min(3, want, cap));
  };
  const lev = (a, b) => {
    const m = a.length; const n = b.length; const d = Array.from({ length: m + 1 }, (_, i) => [i]);
    for (let j = 1; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    return d[m][n];
  };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const josa = (w, a, b) => { const c = String(w).charCodeAt(String(w).length - 1); if (c < 0xac00 || c > 0xd7a3) return w + b; return w + ((c - 0xac00) % 28 ? a : b); };

  // ---------------- 음 ----------------
  const PC = ['도', '도#', '레', '레#', '미', '파', '파#', '솔', '솔#', '라', '라#', '시'];
  const LET = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  function midiOf(x) {
    if (typeof x === 'number') return x;
    const s = String(x || '').trim();
    let m = /^([A-Ga-g])(#|b)?(-?\d)$/.exec(s);
    if (m) { let pc = LET.indexOf(m[1].toUpperCase()); if (m[2] === '#') pc += 1; if (m[2] === 'b') pc -= 1; return (Number(m[3]) + 1) * 12 + pc; }
    m = /^((?:높은|낮은)*)(도|레|미|파|솔|라|시)(#)?$/.exec(s);
    if (!m) return null;
    const up = (m[1].match(/높은/g) || []).length - (m[1].match(/낮은/g) || []).length;
    return 60 + up * 12 + PC.indexOf(m[2]) + (m[3] ? 1 : 0);
  }
  function labelOf(midi) {
    const pc = ((midi % 12) + 12) % 12; const oct = Math.floor(midi / 12) - 5;
    return (oct > 0 ? '높은'.repeat(oct) : oct < 0 ? '낮은'.repeat(-oct) : '') + PC[pc];
  }
  const letterOf = (midi) => `${LET[((midi % 12) + 12) % 12]}${Math.floor(midi / 12) - 1}`;
  const norm = (x) => { const m = midiOf(x); return m == null ? String(x) : labelOf(m); };
  const isBlack = (midi) => [1, 3, 6, 8, 10].includes(((midi % 12) + 12) % 12);
  const freq = (midi) => 440 * Math.pow(2, (midi - 69) / 12);

  // ---------------- 리듬·장단 ----------------
  const RHY = {
    q: { b: 1, name: '4분음표' }, e: { b: 0.5, name: '8분음표' }, h: { b: 2, name: '2분음표' }, dh: { b: 3, name: '점2분음표' }, w: { b: 4, name: '온음표' },
    qr: { b: 1, name: '4분쉼표', rest: true }, er: { b: 0.5, name: '8분쉼표', rest: true }, hr: { b: 2, name: '2분쉼표', rest: true },
  };
  const beatWord = (b) => (b === 0.5 ? '반 박' : `${b}박`);
  const STROKES = { 덩: '두 손 함께(북편+채편)', 쿵: '북편(왼손)', 덕: '채편(오른손)', 기덕: '채편 두 번', 더러러: '채편 굴리기' };
  const MIX = { 덩: '쿵', 쿵: '덩', 덕: '기덕', 기덕: '덕', 더러러: '덕' }; // 자주 헷갈리는 짝

  // ---------------- 판정(순수 함수: 화면 없이도 돈다 — tests/edu-tools-arts-pe-prac.test.mjs) ----------------
  const modeOf = (o) => (['rhythm', 'janggu'].includes(o && o.mode) ? o.mode : 'melody');
  const cfg = (o) => {
    o = o || {};
    const lo = midiOf(o.from) ?? 60; const hi = Math.max(lo + 4, midiOf(o.to) ?? 72);
    return {
      mode: modeOf(o), lo, hi, black: !!o.black, maxNotes: Math.max(4, Math.min(24, o.maxNotes || 16)),
      meter: Math.max(2, Math.min(6, o.meter || 4)), measures: Math.max(1, Math.min(4, o.measures || 2)),
      blocks: (o.blocks || ['q', 'e', 'h', 'qr']).filter((k) => RHY[k]),
      beats: Math.max(4, Math.min(24, o.beats || 12)), group: Math.max(1, Math.min(6, o.group || 3)),
      strokes: (o.strokes || ['덩', '쿵', '덕', '기덕', '더러러']).filter((k) => STROKES[k]),
    };
  };
  const workOf = (c, s) => (c.mode === 'rhythm' ? (s.rhythm || []).length : c.mode === 'janggu' ? (s.strokes || []).filter(Boolean).length : (s.notes || []).length);
  const workWord = (c) => (c.mode === 'rhythm' ? '리듬 블록' : c.mode === 'janggu' ? '장단 칸' : '음');
  function rhythmLayout(list, c) {
    let p = 0; const out = [];
    for (const k of list) { const b = (RHY[k] || RHY.q).b; out.push({ k, p, b, cross: Math.floor(p / c.meter + 1e-9) !== Math.floor((p + b) / c.meter - 1e-9) }); p += b; }
    return { blocks: out, total: p };
  }
  const measureSums = (list, c) => { const sums = Array(c.measures).fill(0); for (const x of rhythmLayout(list, c).blocks) { const m = Math.floor(x.p / c.meter + 1e-9); if (m < c.measures) sums[m] += x.b; } return sums; };

  function judgeSelf(s, t, c) {
    const items = t.selfCheck || []; const checks = s.checks || [];
    const need = t.minNotes != null ? t.minNotes : 1;
    const work = workOf(c, s); const ticked = items.filter((_, i) => checks[i]).length;
    if (work < need && !ticked) return { correct: false, incomplete: true, feedback: `먼저 ${c.mode === 'melody' ? '건반을 눌러 가락을 지어' : c.mode === 'rhythm' ? '리듬 블록을 놓아' : '장단 칸을 채워'} 보세요.`, hint: '만든 뒤에 아래 목록에서 해낸 것을 표시해요.' };
    if (work < need) return { correct: false, feedback: `${workWord(c)}${need > 1 ? `을 ${need}개 넘게` : ''} 더 만들어야 해요. 목록 표시만으로는 끝나지 않아요.`, hint: '건반·블록·칸으로 먼저 만들어요.' };
    const left = items.filter((_, i) => !checks[i]);
    if (left.length) return { correct: false, feedback: `아직 표시하지 않은 점검 항목이 ${left.length}개 있어요.`, hint: `‘${left[0]}’를 해 보았는지 살펴보고 표시해요.`, left };
    return { correct: true, feedback: '스스로 점검을 모두 마쳤어요! 선생님께 내 작품을 들려 드려요.' };
  }
  function judgeMelody(s, t, c) {
    const got = (s.notes || []).map(norm);
    if (t.notes) {
      const want = t.notes.map(norm);
      const i = want.findIndex((n, k) => got[k] !== n);
      if (i < 0 && got.length === want.length) return { correct: true, feedback: `맞아요! 들려 준 가락 ${want.length}음을 그대로 쳤어요.` };
      if (!got.length) return { correct: false, incomplete: true, feedback: '가락을 듣고 건반을 눌러 따라 쳐 보세요.', hint: '‘가락 듣기’를 눌러 다시 들어요.' };
      if (i < 0 || i >= got.length) {
        if (got.length < want.length) return { correct: false, incomplete: true, feedback: `앞부분은 맞아요. 아직 ${want.length - got.length}음이 더 남았어요.`, hint: '가락의 뒷부분을 다시 들어요.', at: got.length };
        return { correct: false, feedback: `가락보다 ${got.length - want.length}음을 더 쳤어요. 마지막 음을 지워 보세요.`, hint: '‘하나 지우기’로 남는 음을 지워요.', at: want.length };
      }
      const hi = midiOf(want[i]) > midiOf(got[i]);
      return { correct: false, feedback: `${i + 1}번째 음이 달라요. 들려 준 음은 친 음보다 더 ${hi ? '높아요' : '낮아요'}.`, hint: `${i + 1}번째 음을 다시 듣고, 건반에서 ${hi ? '오른쪽(높은 쪽)' : '왼쪽(낮은 쪽)'}으로 찾아요.`, at: i, dir: hi ? 1 : -1 };
    }
    const r = t.compose || {};
    const n = got.length; const min = r.length || r.min || 1;
    if (!n) return { correct: false, incomplete: true, feedback: '건반을 눌러 나만의 가락을 지어 보세요.', hint: '마음에 드는 음부터 하나씩 눌러요.' };
    if (n < min) return { correct: false, incomplete: true, feedback: `가락이 아직 짧아요. ${min - n}음을 더 지어요.`, hint: '규칙에 맞게 음을 더 눌러요.', rule: 'length' };
    if (r.length && n > r.length) return { correct: false, feedback: `음이 ${r.length}개여야 하는데 ${n}개예요.`, hint: '‘하나 지우기’로 남는 음을 지워요.', rule: 'length' };
    if (r.max && n > r.max) return { correct: false, feedback: `음이 ${r.max}개보다 많아요.`, hint: '‘하나 지우기’로 줄여요.', rule: 'length' };
    if (r.only) {
      const ok = r.only.map(norm); const bad = got.findIndex((x) => !ok.includes(x));
      if (bad >= 0) return { correct: false, feedback: `${bad + 1}번째 음 ‘${got[bad]}’는 쓰기로 한 음이 아니에요.`, hint: `쓸 수 있는 음: ${ok.join(' ')}`, rule: 'only', at: bad };
    }
    if (r.startOn && got[0] !== norm(r.startOn)) return { correct: false, feedback: `첫 음이 ‘${got[0]}’예요. 시작하는 음 규칙을 다시 보세요.`, hint: `첫 음을 ‘${norm(r.startOn)}’로 시작해요.`, rule: 'startOn' };
    if (r.endOn && got[n - 1] !== norm(r.endOn)) return { correct: false, feedback: `끝 음이 ‘${got[n - 1]}’예요. 가락이 끝난 느낌이 나도록 끝 음 규칙을 지켜요.`, hint: `마지막 음을 ‘${norm(r.endOn)}’로 바꾸어요.`, rule: 'endOn' };
    return { correct: true, feedback: `규칙에 맞는 ${n}음 가락을 지었어요! ‘내가 친 음 듣기’로 들어 보세요.` };
  }
  function judgeRhythm(s, t, c) {
    const list = s.rhythm || [];
    const lay = rhythmLayout(list, c); const cap = c.meter * c.measures;
    if (t.rhythm) {
      const want = t.rhythm;
      if (!list.length) return { correct: false, incomplete: true, feedback: '리듬을 듣고 블록을 차례로 놓아 보세요.', hint: '‘리듬 듣기’를 눌러 다시 들어요.' };
      const i = want.findIndex((k, j) => list[j] !== k);
      if (i < 0 && list.length === want.length) return { correct: true, feedback: '맞아요! 들려 준 리듬과 똑같이 놓았어요.' };
      const wantTotal = rhythmLayout(want, c).total;
      if ((i < 0 || i >= list.length) && lay.total < wantTotal) return { correct: false, incomplete: true, feedback: '앞부분은 맞아요. 리듬이 더 남았어요.', hint: '뒷부분을 다시 들어요.', at: list.length };
      if (i < 0) return { correct: false, feedback: '블록을 더 많이 놓았어요. 마지막 블록을 빼 보세요.', hint: '‘하나 지우기’를 눌러요.', at: want.length };
      const a = RHY[list[i]] || RHY.q; const b = RHY[want[i]] || RHY.q;
      const why = a.rest !== b.rest ? (b.rest ? '그 자리는 소리를 내지 않고 쉬어요.' : '그 자리는 쉬지 않고 소리를 내요.') : a.b > b.b ? '그 소리는 더 짧아요.' : a.b < b.b ? '그 소리는 더 길어요.' : '';
      return { correct: false, feedback: `${i + 1}번째 블록이 달라요. ${why}`, hint: `${i + 1}번째 소리를 손뼉으로 치며 길이를 세어요.`, at: i };
    }
    const sums = measureSums(list, c);
    if (!list.length) return { correct: false, incomplete: true, feedback: `한 마디에 ${c.meter}박이에요. 블록을 놓아 마디를 채워 보세요.`, hint: '블록 아래의 박 수를 보고 골라요.' };
    if (lay.total < cap) return { correct: false, incomplete: true, feedback: `아직 ${beatWord(cap - lay.total)}이 비었어요. 마지막 마디까지 채워요.`, hint: '남은 박만큼 블록을 더 놓아요.' };
    if (lay.total > cap) return { correct: false, feedback: `박이 ${beatWord(lay.total - cap)} 넘쳤어요. 블록을 빼 보세요.`, hint: '마지막 블록을 빼고 남은 박을 세어요.', measure: c.measures - 1 };
    const cross = lay.blocks.find((x) => x.cross);
    if (cross) { const m = Math.floor(cross.p / c.meter + 1e-9); return { correct: false, feedback: `${m + 1}번째 마디의 블록이 세로줄(마디줄)을 넘어갔어요. ${m + 1}번째 마디가 ${beatWord(c.meter)}이 되지 않아요.`, hint: `${m + 1}번째 마디의 박을 더해 ${c.meter}박이 되게 블록을 바꾸어요.`, measure: m }; }
    if (t.use) { const miss = t.use.find((k) => !list.includes(k)); if (miss) return { correct: false, feedback: `박은 맞아요. 그런데 ${(RHY[miss] || RHY.q).name}를 꼭 넣기로 했어요.`, hint: `${(RHY[miss] || RHY.q).name} 블록을 넣고, 박이 맞게 다른 블록을 바꾸어요.`, rule: 'use' }; }
    if (t.rests) { const n = list.filter((k) => (RHY[k] || {}).rest).length; if (n < t.rests) return { correct: false, feedback: `박은 맞아요. 쉼표를 ${t.rests}개 넘게 넣기로 했어요.`, hint: '소리 블록 하나를 같은 박의 쉼표로 바꾸어요.', rule: 'rests' }; }
    return { correct: true, feedback: `맞아요! 마디마다 ${c.meter}박씩 꼭 맞아요(${sums.map((x) => `${x}박`).join(' · ')}).` };
  }
  function judgeJanggu(s, t, c) {
    const got = s.strokes || []; const want = t.strokes || [];
    if (!got.some(Boolean)) return { correct: false, incomplete: true, feedback: '장단을 듣고 칸마다 구음을 넣어 보세요.', hint: '‘장단 듣기’를 눌러 다시 들어요.' };
    const i = want.findIndex((x, k) => (got[k] || '') !== (x || ''));
    if (i < 0) return { correct: true, feedback: `맞아요! ${want.filter(Boolean).length}번 치는 장단을 그대로 놓았어요.` };
    const g = got[i] || ''; const w = want[i] || '';
    const why = !w ? '그 박은 치지 않고 쉬어요.' : !g ? '그 박에도 소리가 있어요.' : MIX[g] === w ? (g === '덩' || w === '덩' ? '두 손을 함께 치는지, 한 손만 치는지 들어 보세요.' : '채편을 한 번 치는지, 두 번 치는지 들어 보세요.') : '소리가 북편(낮은 소리)인지 채편(높은 소리)인지 들어 보세요.';
    return { correct: false, feedback: `${i + 1}번째 박이 달라요. ${why}`, hint: `${i + 1}번째 박을 다시 듣고 손으로 무릎을 쳐 보아요.`, at: i };
  }
  function judge(s, t, o) {
    s = s || {}; t = t || {}; const c = cfg(o);
    const main = t.notes || t.compose || t.rhythm || t.beats || t.strokes;
    if (main) {
      const r = c.mode === 'rhythm' ? judgeRhythm(s, t, c) : c.mode === 'janggu' ? judgeJanggu(s, t, c) : judgeMelody(s, t, c);
      if (!r.correct || !t.selfCheck) return r;
    }
    if (t.selfCheck) return judgeSelf(s, t, c);
    return main ? { correct: true, feedback: '맞아요!' } : { correct: false, incomplete: true, feedback: '문제에서 하라는 것을 해 보세요.' };
  }
  // 정답 상태 만들기 — 자동 검사·교사 '정답 보기'
  function solve(t, o) {
    t = t || {}; const c = cfg(o); const s = {};
    if (c.mode === 'rhythm') {
      if (t.rhythm) s.rhythm = t.rhythm.slice();
      else {
        const need = (t.use || []).slice(); for (let i = need.filter((k) => RHY[k] && RHY[k].rest).length; i < (t.rests || 0); i++) need.push('qr');
        const out = []; let m = 0; let room = c.meter;
        const put = (k) => { out.push(k); room -= RHY[k].b; if (room <= 1e-9) { m++; room = c.meter; } };
        for (const k of need) { if (!RHY[k] || RHY[k].b > c.meter) continue; if (RHY[k].b > room + 1e-9) { while (room >= 1) put('q'); if (room > 1e-9) put('e'); } if (m < c.measures) put(k); }
        while (m < c.measures) { if (room >= 1) put('q'); else put('e'); }
        s.rhythm = out;
      }
    } else if (c.mode === 'janggu') s.strokes = (t.strokes || Array(c.beats).fill('')).map((x) => x || '');
    else if (t.notes) s.notes = t.notes.map(norm);
    else {
      const r = t.compose || {}; const n = r.length || r.min || (t.selfCheck ? Math.max(t.minNotes || 1, 4) : 4);
      const pool = (r.only ? r.only.map(norm) : [60, 62, 64, 65, 67].map(labelOf));
      const notes = Array.from({ length: n }, (_, i) => pool[i % pool.length]);
      if (r.startOn) notes[0] = norm(r.startOn);
      if (r.endOn) notes[n - 1] = norm(r.endOn);
      s.notes = notes;
    }
    if (c.mode === 'janggu' && !t.strokes && t.selfCheck) s.strokes = s.strokes.map((_, i) => (i % c.group === 0 ? c.strokes[0] : ''));
    if (t.selfCheck) {
      if (c.mode === 'melody' && !t.notes && !t.compose && s.notes.length < (t.minNotes || 1)) s.notes = Array(t.minNotes).fill('도');
      s.checks = t.selfCheck.map(() => true);
    }
    return s;
  }
  // 그럴듯한 오답(다 했지만 틀림) — 학생이 실제로 자주 하는 실수
  function wrongAnswer(t, o, cur) {
    t = t || {}; const c = cfg(o); const good = solve(t, o); const list = [];
    if (t.selfCheck && !(t.notes || t.compose || t.rhythm || t.beats || t.strokes)) {
      list.push(Object.assign({}, good, { checks: good.checks.map((_, i) => i !== good.checks.length - 1) }));
    } else if (c.mode === 'melody' && t.notes) {
      const w = good.notes.map(midiOf);
      // 비슷한 높이의 이웃 음으로 친다(한 칸 높게/낮게) — 같은 음이 이어지는 곳이나 끝 음에서 자주 틀린다
      for (let i = w.length - 1; i >= 0; i--) for (const d of [2, -2, 1, -1]) { const x = w.slice(); x[i] += d; if (!isBlack(x[i]) || c.black) list.push({ notes: x.map(labelOf) }); }
    } else if (c.mode === 'melody') {
      const r = t.compose || {}; const x = good.notes.slice();
      if (r.endOn) { const e = midiOf(x[x.length - 1]); x[x.length - 1] = labelOf(e + 2); list.push({ notes: x }); }
      if (r.startOn) { const y = good.notes.slice(); y[0] = labelOf(midiOf(y[0]) + 2); list.push({ notes: y }); }
      if (r.only) { const y = good.notes.slice(); const ok = r.only.map(norm); let m = midiOf(y[0]) + 1; while (ok.includes(labelOf(m))) m++; y[0] = labelOf(m); list.push({ notes: y }); }
      if (r.length) list.push({ notes: good.notes.concat([good.notes[good.notes.length - 1]]) });
    } else if (c.mode === 'rhythm' && t.rhythm) {
      const w = t.rhythm;
      w.forEach((k, i) => {
        if (k === 'e' && w[i + 1] === 'e') list.push({ rhythm: w.slice(0, i).concat(['q'], w.slice(i + 2)) }); // 8분음표 둘을 4분음표 하나로
        if (k === 'h') list.push({ rhythm: w.slice(0, i).concat(['q', 'q'], w.slice(i + 1)) });
        if (k === 'qr') list.push({ rhythm: w.slice(0, i).concat(['q'], w.slice(i + 1)) }); // 쉼표 자리에 소리를 냄
        if (k === 'q') list.push({ rhythm: w.slice(0, i).concat(['e', 'e'], w.slice(i + 1)) });
      });
    } else if (c.mode === 'rhythm') {
      // 2분음표를 마디 끝에 놓아 마디줄을 넘긴다(박을 이어 세는 실수)
      if (c.measures >= 2) { const x = Array(c.meter - 1).fill('q').concat(['h']); while (rhythmLayout(x, c).total < c.meter * c.measures) x.push('q'); if (rhythmLayout(x, c).total === c.meter * c.measures) list.push({ rhythm: x }); }
      list.push({ rhythm: Array(c.meter * c.measures + 1).fill('q') });
    } else if (c.mode === 'janggu') {
      const w = good.strokes;
      w.forEach((k, i) => { if (k && MIX[k]) { const x = w.slice(); x[i] = MIX[k]; list.push({ strokes: x }); } });
      list.push({ strokes: w.slice(1).concat([w[0]]) }); // 한 박 밀려 침
    }
    const withChecks = (x) => (t.selfCheck && !x.checks ? Object.assign({}, x, { checks: t.selfCheck.map(() => true) }) : x);
    const curJ = JSON.stringify(cur || {});
    const cand = list.map(withChecks).filter((x) => { const r = judge(x, t, o); return !r.correct && !r.incomplete; });
    return cand.find((x) => JSON.stringify(x) !== curJ) || cand[0] || null;
  }
  function hintFor(s, t, o, opts) {
    t = t || {}; const c = cfg(o); const r = judge(s, t, o);
    if (r.correct) return { hint: '지금 상태가 맞아요.', correct: true };
    const lv = levelOf(opts);
    const onlySelf = t.selfCheck && !(t.notes || t.compose || t.rhythm || t.beats || t.strokes);
    if (lv <= 1) {
      if (onlySelf) return { hint: '내 작품을 처음부터 다시 들어 보고, 정말 해낸 것만 목록에서 하나씩 표시해요.', correct: false };
      if (c.mode === 'melody' && t.notes) return { hint: '가락을 다시 들으며 음 하나마다 손가락으로 따라 짚어요. 다음 음이 올라가는지, 내려가는지, 같은지 들어 보세요.', correct: false };
      if (c.mode === 'melody') return { hint: '문제의 규칙을 하나씩 확인해요. 몇 음으로 짓는지, 어느 음으로 시작하고 끝나는지 보세요.', correct: false };
      if (c.mode === 'rhythm' && t.rhythm) return { hint: '리듬을 다시 들으며 손뼉으로 따라 쳐요. 긴 소리, 짧은 소리, 쉬는 곳을 차례로 찾아요.', correct: false };
      if (c.mode === 'rhythm') return { hint: '블록 아래의 박 수를 더해 보세요. 한 마디의 박을 다 채우면 다음 마디로 넘어가요.', correct: false };
      return { hint: '장단을 다시 들으며 박마다 무릎을 쳐요. 낮은 소리는 북편(왼손), 높은 소리는 채편(오른손)이에요.', correct: false };
    }
    if (lv === 2) return { hint: r.hint || r.feedback, correct: false };
    // 3단계: 그 자리의 풀이
    if (onlySelf || (r.left && r.left.length)) return { hint: `점검 항목 ‘${(r.left || t.selfCheck)[0]}’를 해 보고, 했으면 표시해요.`, correct: false };
    if (c.mode === 'melody' && t.notes) { const i = r.at ?? 0; const want = t.notes.map(norm); return { hint: i < want.length ? `${i + 1}번째 음은 ‘${want[i]}’예요. 앞의 맞는 음은 두고 그 음부터 다시 쳐요.` : `음은 ${want.length}개예요. 남는 음을 지워요.`, correct: false }; }
    if (c.mode === 'melody') return { hint: r.hint || r.feedback, correct: false };
    if (c.mode === 'rhythm' && t.rhythm) { const i = r.at ?? 0; const k = t.rhythm[i]; return { hint: k ? `${i + 1}번째 블록은 ${RHY[k].name}(${beatWord(RHY[k].b)})예요.` : '남는 블록을 빼요.', correct: false }; }
    if (c.mode === 'rhythm') { const m = r.measure ?? 0; return { hint: `${m + 1}번째 마디를 4분음표 ${c.meter}개처럼 ${c.meter}박이 꼭 되는 블록으로 다시 놓아요. 남는 박은 다음 마디에 놓아요.`, correct: false }; }
    const i = r.at ?? 0; const w = (t.strokes || [])[i] || '';
    return { hint: w ? `${i + 1}번째 박은 ‘${w}’(${STROKES[w]})예요.` : `${i + 1}번째 박은 비워 두어요(쉼).`, correct: false };
  }
  function distance(a, b) {
    a = a || {}; b = b || {};
    const ch = (a.checks || []).reduce((n, x, i) => n + (!!x !== !!(b.checks || [])[i] ? 1 : 0), 0) + Math.abs((a.checks || []).length - (b.checks || []).length);
    if (a.rhythm || b.rhythm) return lev(a.rhythm || [], b.rhythm || []) + ch;
    if (a.strokes || b.strokes) { const x = a.strokes || []; const y = b.strokes || []; let d = 0; for (let i = 0; i < Math.max(x.length, y.length); i++) if ((x[i] || '') !== (y[i] || '')) d++; return d + ch; }
    return lev((a.notes || []).map(norm), (b.notes || []).map(norm)) + ch;
  }
  const core = { judge, solve, wrongAnswer, hint: hintFor, distance, norm, midiOf, labelOf, cfg, RHY };

  // ---------------- 소리(누를 때만) ----------------
  let actx = null;
  const audio = (kit) => {
    if (!kit.soundOn() || typeof AudioContext === 'undefined') return null;
    try { actx = actx || new AudioContext(); if (actx.state === 'suspended') actx.resume(); return actx; } catch (_) { return null; }
  };
  function tone(kit, midi, at, dur) {
    const a = audio(kit); if (!a) return;
    const t0 = a.currentTime + (at || 0); const d = dur || 0.45;
    const os = a.createOscillator(); os.type = 'triangle'; os.frequency.value = freq(midi);
    const g = a.createGain(); g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(0.3, t0 + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t0 + d);
    os.connect(g).connect(a.destination); os.start(t0); os.stop(t0 + d + 0.05);
  }
  function hit(kit, kind, at) {
    const a = audio(kit); if (!a) return;
    const t0 = a.currentTime + (at || 0);
    const low = () => { const os = a.createOscillator(); os.type = 'sine'; os.frequency.setValueAtTime(110, t0); os.frequency.exponentialRampToValueAtTime(60, t0 + 0.25); const g = a.createGain(); g.gain.setValueAtTime(0.5, t0); g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.35); os.connect(g).connect(a.destination); os.start(t0); os.stop(t0 + 0.4); };
    const slap = (dt, v) => { const len = 0.06; const buf = a.createBuffer(1, Math.floor(a.sampleRate * len), a.sampleRate); const d = buf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d.length, 2); const src = a.createBufferSource(); src.buffer = buf; const f = a.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 2600; const g = a.createGain(); g.gain.value = v || 0.5; src.connect(f).connect(g).connect(a.destination); src.start(t0 + (dt || 0)); };
    if (kind === '덩') { low(); slap(0); } else if (kind === '쿵') low(); else if (kind === '덕') slap(0); else if (kind === '기덕') { slap(0, 0.3); slap(0.09); } else if (kind === '더러러') { slap(0, 0.3); slap(0.06, 0.35); slap(0.12, 0.45); } else if (kind === 'click') slap(0, 0.35);
  }

  // ---------------- 화면 ----------------
  K.registerTool('keyboard', {
    name: '종이 건반·장단판',
    core,
    create(box, o, kit) {
      const P = kit.palette; const print = !!o.print; const C = cfg(o);
      const narrow = !print && typeof matchMedia === 'function' && matchMedia('(max-width: 820px)').matches;
      let notes = []; let rhythm = []; let strokes = Array(C.beats).fill(''); let checks = [];
      let target = null; let revealed = false; let showNames = o.names !== 'none'; let brush = C.strokes[0]; let playing = false;
      const hideVals = () => !!o.revealAfterCheck && !revealed;
      const W = 560;

      // ---- 단추 줄(위) ----
      let bar = null; let msg = null; let selfBox = null;
      const btn = (act, icon, text, extra) => `<button type="button" class="pl-btn pl-btn--small kb-act" data-kb="${act}" tabindex="0" style="min-height:44px"${extra || ''}><i class="fi ${icon}" aria-hidden="true"></i> ${text}</button>`;
      if (!print) {
        bar = document.createElement('div');
        bar.className = 'kb-bar'; bar.setAttribute('role', 'group'); bar.setAttribute('aria-label', '듣기와 지우기');
        bar.style.cssText = 'display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-bottom:8px';
        box.prepend(bar);
        msg = document.createElement('p'); msg.className = 'kb-msg'; msg.setAttribute('aria-live', 'polite');
        msg.style.cssText = 'margin:6px 2px 0;min-height:1.4em;font-weight:700;line-height:1.45;word-break:keep-all';
      }
      const say = (t) => { if (msg) msg.textContent = t; kit.announce(t); };
      const source = () => (C.mode === 'melody' ? o.melody || (target && target.notes) : C.mode === 'rhythm' ? o.pattern || (target && target.rhythm) : o.pattern || (target && target.strokes));
      function paintBar() {
        if (!bar) return;
        const src = source(); const word = C.mode === 'melody' ? '가락' : C.mode === 'rhythm' ? '리듬' : '장단';
        bar.innerHTML = (src ? btn('listen', 'fi-rr-headphones', `${word} 듣기`) : '') + btn('mine', 'fi-rr-play', '내 것 듣기')
          + (C.mode === 'melody' && o.names !== 'none' && o.nameToggle !== false ? btn('names', showNames ? 'fi-rr-eye' : 'fi-rr-eye-crossed', '계이름', ` aria-pressed="${showNames && !hideVals()}"${hideVals() ? ' aria-disabled="true"' : ''}`) : '')
          + (C.mode !== 'janggu' ? btn('undo', 'fi-rr-undo', '하나 지우기') : '') + btn('clear', 'fi-rr-trash', '모두 지우기');
        // 장단 붓은 칸 아래에 둔다(칸이 먼저 Tab에 걸리게)
        if (brushBox) brushBox.innerHTML = `<b style="font-size:15px">구음 붓</b>${C.strokes.map((k, i) => `<button type="button" class="pl-btn pl-btn--small kb-brush" data-brush="${k}" role="radio" aria-checked="${k === brush}" tabindex="0" style="min-height:44px;min-width:56px">${i + 1}. ${k}</button>`).join('')}<span style="flex-basis:100%;font-size:14px;opacity:.8">${esc(STROKES[brush])} — 칸을 누르면 넣고, 한 번 더 누르면 지워요.</span>`;
      }
      let brushBox = null;
      if (bar && C.mode === 'janggu') {
        brushBox = document.createElement('div'); brushBox.className = 'kb-brushes'; brushBox.setAttribute('role', 'radiogroup'); brushBox.setAttribute('aria-label', '구음 붓');
        brushBox.style.cssText = 'display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin-top:8px';
        brushBox.addEventListener('click', (e) => {
          const b = e.target.closest('[data-brush]'); if (!b) return;
          brush = b.dataset.brush; paintBar(); hit(kit, brush); say(`붓: ${brush} — ${STROKES[brush]}. 칸을 누르면 넣어요.`); const f = brushBox.querySelector(`[data-brush="${brush}"]`); if (f) f.focus();
        });
      }
      if (bar) {
        bar.addEventListener('click', (e) => {
          const b = e.target.closest('button'); if (!b) return;
          const act = b.dataset.kb;
          if (act === 'listen') play(source(), true);
          else if (act === 'mine') play(C.mode === 'melody' ? notes : C.mode === 'rhythm' ? rhythm : strokes, false);
          else if (act === 'names') { if (hideVals()) { say('계이름은 맞힌 뒤에 보여요. 지금은 귀로 들어요.'); return; } showNames = !showNames; paintKeys(); paintStrip(); paintBar(); const f = bar.querySelector('[data-kb="names"]'); if (f) f.focus(); }
          else if (act === 'undo') { if (C.mode === 'melody' ? !notes.length : !rhythm.length) return; if (C.mode === 'melody') notes.pop(); else rhythm.pop(); changed('하나 지웠어요.'); }
          else if (act === 'clear') { notes = []; rhythm = []; strokes = Array(C.beats).fill(''); changed('모두 지웠어요.'); }
        });
      }
      async function play(seq, isSource) {
        if (!seq || !seq.length || playing) return;
        if (!kit.soundOn()) { say('소리가 꺼져 있어요. 위의 소리 단추를 켜요.'); return; }
        playing = true; const beat = 60 / (o.tempo || 96);
        if (C.mode === 'melody') {
          seq.forEach((n, i) => { const m = midiOf(n); if (m != null) tone(kit, m, i * beat, beat * 0.9); });
          if (!isSource || o.showWhileListening) for (let i = 0; i < seq.length; i++) { lightKey(midiOf(seq[i])); await kit.wait(beat * 1000); }
          else await kit.wait(seq.length * beat * 1000);
        } else if (C.mode === 'rhythm') {
          let p = 0; for (const k of seq) { const r = RHY[k] || RHY.q; if (!r.rest) hit(kit, 'click', p * beat); p += r.b; }
          await kit.wait(p * beat * 1000);
        } else {
          const sub = beat / Math.max(1, C.group > 1 ? 2 : 1);
          seq.forEach((k, i) => { if (k) hit(kit, k, i * sub); });
          await kit.wait(seq.length * sub * 1000);
        }
        playing = false;
      }

      // ---- 무대 ----
      let st; let H = 0;
      const layers = {};
      // melody: 건반 배치
      const whites = []; const blacks = [];
      if (C.mode === 'melody') for (let m = C.lo; m <= C.hi; m++) { if (isBlack(m)) { if (C.black) blacks.push(m); } else whites.push(m); }
      let rows = [whites]; let kw = 0; const KH = 170; const STRIP = 62;
      if (C.mode === 'melody') {
        const per = narrow ? 5 : 15;
        if (whites.length > per) {
          // 줄을 나눌 때 검은건반이 두 줄에 걸치지 않게 미·시 뒤에서 끊는다(검은건반이 없으면 아무 데서나)
          const L = Math.ceil(whites.length / Math.ceil(whites.length / per));
          rows = []; let cur = [];
          whites.forEach((m, i) => {
            cur.push(m);
            const pc = m % 12; const okBreak = !C.black || pc === 4 || pc === 11;
            if (i < whites.length - 1 && okBreak && cur.length >= (C.black ? Math.min(L, 3) : L)) { rows.push(cur); cur = []; }
          });
          if (cur.length) rows.push(cur);
          // 마지막 줄이 한 칸뿐이면(높은도) 앞줄에 붙인다
          if (rows.length > 1 && rows[rows.length - 1].length === 1 && rows[rows.length - 2].length < per + 1) rows[rows.length - 2].push(rows.pop()[0]);
        }
        kw = (W - 16) / Math.max(...rows.map((r) => r.length));
        H = (print && !o.printBoxes ? 0 : STRIP) + rows.length * (KH + 10) + 6;
      } else if (C.mode === 'rhythm') H = print ? 134 : 292;
      else { const per = narrow ? Math.min(6, C.beats) : Math.min(12, C.beats); H = 40 + Math.ceil(C.beats / per) * 104 + 6; }
      st = kit.stage(box, { viewBox: [W, H], label: C.mode === 'melody' ? '종이 건반. 건반을 누르면 소리가 나고 친 음이 위 띠에 차례로 적혀요.' : C.mode === 'rhythm' ? '리듬 블록 판. 아래 블록을 누르면 마디에 차례로 놓여요.' : '장구 장단판. 붓을 고르고 박 칸을 누르면 구음이 들어가요.' });
      if (brushBox) box.appendChild(brushBox);
      if (msg) box.appendChild(msg);

      // ---- melody ----
      const keyEls = new Map(); let stripL = null;
      function buildKeys() {
        const top0 = print && !o.printBoxes ? 4 : STRIP;
        stripL = st.layer('strip'); const KL = st.layer('keys');
        rows.forEach((row, ri) => {
          const y = top0 + ri * (KH + 10); const x0 = (W - row.length * kw) / 2;
          row.forEach((m, i) => {
            const g = kit.el('g', { class: 'kb-key' }, KL);
            kit.piece(st, g, { shape: { type: 'rect', x: 2, y: 0, w: kw - 4, h: KH, rx: 10 }, color: 'cream', depth: 2, fill: '#FFFDF8' });
            const t = kit.el('text', { x: kw / 2, y: KH - 16, 'text-anchor': 'middle', 'font-size': kw < 50 ? 15 : 20, class: 'pk-text', fill: P.ink.base }, g);
            kit.transform(g, { x: x0 + i * kw, y });
            keyEls.set(m, { g, t, black: false });
          });
          // 검은건반: 왼쪽 흰건반의 오른쪽 끝에 걸친다(같은 줄 안에서만)
          row.forEach((m, i) => {
            if (!C.black || !blacks.includes(m + 1) || i === row.length - 1) return;
            const bw = Math.min(kw * 0.62, 64); const g = kit.el('g', { class: 'kb-key kb-key--black' }, KL);
            kit.piece(st, g, { shape: { type: 'rect', x: -bw / 2, y: 0, w: bw, h: KH * 0.58, rx: 8 }, color: 'ink', depth: 2 });
            const t = kit.el('text', { x: 0, y: KH * 0.58 - 12, 'text-anchor': 'middle', 'font-size': 12, class: 'pk-text', fill: '#FFFDF8' }, g);
            kit.transform(g, { x: x0 + (i + 1) * kw, y });
            keyEls.set(m + 1, { g, t, black: true });
          });
        });
        keyEls.forEach((k, m) => {
          if (print) return;
          k.g.setAttribute('tabindex', '0'); k.g.setAttribute('role', 'button'); k.g.style.cursor = 'pointer';
          const press = (e) => { if (e) e.preventDefault(); pressKey(m); };
          k.g.addEventListener('pointerdown', press);
          k.g.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') press(e); });
        });
        // 검은건반을 위에 그리려고 순서를 다시 맞춘다
        keyEls.forEach((k) => { if (k.black) KL.appendChild(k.g); });
      }
      function lightKey(m) {
        const k = keyEls.get(m); if (!k) return;
        const s0 = k.g.__pk || { y: 0 }; const y0 = s0.y;
        kit.tween(160, (q) => kit.transform(k.g, { y: y0 + Math.sin(q * Math.PI) * 5 })).then(() => kit.transform(k.g, { y: y0 }));
      }
      function pressKey(m) {
        tone(kit, m); lightKey(m);
        if (notes.length >= C.maxNotes) { say(`친 음은 ${C.maxNotes}개까지 적혀요. 지우고 다시 쳐요.`); return; }
        notes.push(labelOf(m)); changed(hideVals() || !showNames ? `${notes.length}번째 음을 쳤어요.` : `${labelOf(m)}`);
      }
      const nameOn = () => showNames && !hideVals() && o.names !== 'none';
      const nameOfKey = (m) => (o.names === 'letter' ? letterOf(m) : labelOf(m));
      function paintKeys() {
        keyEls.forEach((k, m) => {
          const show = print ? !!o.printNames : nameOn();
          const label = o.names === 'letter' ? letterOf(m) : labelOf(m);
          k.t.textContent = show ? (k.black ? label.replace(/^(높은|낮은)+/, '') : label.replace(/^높은/, '높은 ').replace(/^낮은/, '낮은 ')) : '';
          if (!print) k.g.setAttribute('aria-label', `${nameOn() ? nameOfKey(m) : `${[...keyEls.keys()].sort((a, b) => a - b).indexOf(m) + 1}번째`} 건반${k.black ? '(검은건반)' : ''}`);
        });
      }
      function paintStrip() {
        if (!stripL) return;
        stripL.textContent = '';
        if (print && !o.printBoxes) return;
        const n = print ? o.printBoxes : C.maxNotes; const bw = Math.min(34, (W - 24) / n);
        if (!print) kit.el('text', { x: 12, y: 18, 'font-size': 13, class: 'pk-text', fill: P.peach.dark }, stripL).textContent = '친 음';
        for (let i = 0; i < n; i++) {
          const x = 12 + i * bw; const has = !print && i < notes.length;
          kit.el('rect', { x: x + 1, y: 24, width: bw - 3, height: 30, rx: 6, fill: has ? P.buttercup.light : '#FFF', stroke: has ? P.buttercup.layer : '#CFC5B4', 'stroke-width': 1.2 }, stripL);
          if (has) kit.el('text', { x: x + bw / 2 - 0.5, y: 45, 'text-anchor': 'middle', 'font-size': notes[i].length > 2 ? 9 : 13, class: 'pk-text', fill: P.ink.base }, stripL).textContent = nameOn() ? (o.names === 'letter' ? letterOf(midiOf(notes[i])) : notes[i].replace(/^높은/, '↑').replace(/^낮은/, '↓')) : '●';
        }
      }

      // ---- rhythm ----
      const RX = 16; const RW = W - 32; const RY = 30; const RH = 96;
      let measL = null; let blockL = null; let palL = null; let sumL = null;
      function glyph(g, k, x, y, s, ink) {
        const r = RHY[k] || RHY.q; ink = ink || P.ink.base;
        const head = (filled) => kit.el('ellipse', { cx: x, cy: y + 10 * s, rx: 7 * s, ry: 5 * s, transform: `rotate(-20 ${x} ${y + 10 * s})`, fill: filled ? ink : '#FFF', stroke: ink, 'stroke-width': 2 * s }, g);
        const stem = () => kit.el('line', { x1: x + 6.4 * s, y1: y + 9 * s, x2: x + 6.4 * s, y2: y - 20 * s, stroke: ink, 'stroke-width': 2 * s }, g);
        if (!r.rest) {
          head(k === 'q' || k === 'e');
          if (k !== 'w') stem();
          if (k === 'e') kit.el('path', { d: `M${x + 6.4 * s} ${y - 20 * s} q ${8 * s} ${6 * s} ${7 * s} ${16 * s}`, fill: 'none', stroke: ink, 'stroke-width': 2 * s }, g);
          if (k === 'dh') kit.el('circle', { cx: x + 13 * s, cy: y + 10 * s, r: 2.2 * s, fill: ink }, g);
        } else if (k === 'qr') kit.el('path', { d: `M${x - 3 * s} ${y - 18 * s} l ${6 * s} ${8 * s} l ${-6 * s} ${7 * s} l ${6 * s} ${8 * s} q ${-9 * s} ${-2 * s} ${-2 * s} ${8 * s}`, fill: 'none', stroke: ink, 'stroke-width': 2.6 * s, 'stroke-linejoin': 'round' }, g);
        else if (k === 'er') { kit.el('circle', { cx: x - 3 * s, cy: y - 8 * s, r: 3 * s, fill: ink }, g); kit.el('path', { d: `M${x - 3 * s} ${y - 6 * s} q ${6 * s} ${2 * s} ${9 * s} ${-4 * s} l ${-7 * s} ${20 * s}`, fill: 'none', stroke: ink, 'stroke-width': 2 * s }, g); }
        else if (k === 'hr') { kit.el('line', { x1: x - 10 * s, y1: y + 2 * s, x2: x + 10 * s, y2: y + 2 * s, stroke: ink, 'stroke-width': 1.5 * s }, g); kit.el('rect', { x: x - 7 * s, y: y - 4 * s, width: 14 * s, height: 6 * s, fill: ink }, g); }
      }
      const cap = C.meter * C.measures; const unit = RW / cap;
      function buildRhythm() {
        measL = st.layer('measures'); blockL = st.layer('blocks'); sumL = st.layer('sums');
        kit.piece(st, measL, { shape: { type: 'rect', x: RX, y: RY, w: RW, h: RH, rx: 12 }, color: 'cream', depth: 1, fill: '#FFF9EE', texture: !print });
        for (let m = 0; m <= C.measures; m++) kit.el('line', { x1: RX + m * C.meter * unit, y1: RY + 6, x2: RX + m * C.meter * unit, y2: RY + RH - 6, stroke: P.ink.light, 'stroke-width': m === 0 || m === C.measures ? 3 : 2 }, measL);
        for (let b = 1; b < cap; b++) if (b % C.meter) kit.el('line', { x1: RX + b * unit, y1: RY + RH - 14, x2: RX + b * unit, y2: RY + RH - 6, stroke: '#CFC5B4', 'stroke-width': 1.5 }, measL);
        // 활동지: 마디 띠만 잘라 크게 보인다
        if (print) st.svg.setAttribute('viewBox', `${RX - 6} ${RY - 6} ${RW + 12} ${RH + 12}`);
        if (!print) {
          kit.el('text', { x: RX + 4, y: 20, 'font-size': 14, class: 'pk-text', fill: P.peach.dark }, measL).textContent = `${C.meter}박 마디 ${C.measures}개`;
          palL = st.layer('palette');
          const n = C.blocks.length; const pw = Math.min(110, (W - 24) / n);
          kit.el('text', { x: RX + 4, y: RY + RH + 52, 'font-size': 14, class: 'pk-text', fill: P.peach.dark }, palL).textContent = '블록 고르기';
          C.blocks.forEach((k, i) => {
            const g = kit.el('g', { class: 'kb-pal', tabindex: '0', role: 'button', 'aria-label': `${RHY[k].name} ${beatWord(RHY[k].b)} 놓기` }, palL);
            g.style.cursor = 'pointer';
            kit.piece(st, g, { shape: { type: 'rect', x: 3, y: 0, w: pw - 6, h: 92, rx: 12 }, color: RHY[k].rest ? 'lavender' : 'mint', depth: 2 });
            glyph(g, k, pw / 2 - 4, 36, 1.15);
            kit.el('text', { x: pw / 2, y: 70, 'text-anchor': 'middle', 'font-size': 12, class: 'pk-text', fill: P.ink.base }, g).textContent = RHY[k].name;
            kit.el('text', { x: pw / 2, y: 86, 'text-anchor': 'middle', 'font-size': 12, class: 'pk-text', fill: P.ink.light }, g).textContent = beatWord(RHY[k].b);
            kit.transform(g, { x: (W - n * pw) / 2 + i * pw, y: RY + RH + 60 });
            const put = (e) => { if (e) e.preventDefault(); addBlock(k); };
            g.addEventListener('click', put); g.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') put(e); });
          });
        }
      }
      function addBlock(k) {
        const total = rhythmLayout(rhythm, C).total;
        if (total + RHY[k].b > cap + 1e-9) { kit.tick('no'); say(`남은 자리가 ${beatWord(cap - total)}이에요. ${RHY[k].name}(${beatWord(RHY[k].b)})는 들어가지 않아요.`); return; }
        rhythm.push(k); if (!RHY[k].rest) hit(kit, 'click');
        changed(`${RHY[k].name}를 놓았어요.`);
      }
      function paintRhythm() {
        if (!blockL) return;
        blockL.textContent = ''; sumL.textContent = '';
        rhythmLayout(rhythm, C).blocks.forEach((x, i) => {
          const g = kit.el('g', { class: 'kb-block' }, blockL);
          const w = Math.max(10, x.b * unit - 4);
          kit.piece(st, g, { shape: { type: 'rect', x: 2, y: 0, w, h: RH - 34, rx: 8 }, color: RHY[x.k].rest ? 'lavender' : x.cross ? 'rose' : 'buttercup', depth: 1 });
          glyph(g, x.k, Math.min(w / 2, 22), (RH - 34) / 2 + 2, Math.min(1, w / 30));
          kit.transform(g, { x: RX + x.p * unit, y: RY + 10 });
          if (!print) {
            g.setAttribute('tabindex', '0'); g.setAttribute('role', 'button'); g.style.cursor = 'pointer';
            g.setAttribute('aria-label', `${i + 1}번째 블록 ${RHY[x.k].name}. Enter를 누르면 빼요.`);
            const rm = (e) => { if (e) e.preventDefault(); rhythm.splice(i, 1); changed(`${i + 1}번째 블록을 뺐어요.`); const f = blockL.querySelectorAll('.kb-block')[Math.min(i, rhythm.length - 1)]; if (f) f.focus(); };
            g.addEventListener('click', rm); g.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ' || e.key === 'Delete' || e.key === 'Backspace') rm(e); });
          }
        });
        if (o.showBeats && !print && !hideVals()) measureSums(rhythm, C).forEach((v, m) => {
          kit.el('text', { x: RX + (m + 0.5) * C.meter * unit, y: RY + RH + 22, 'text-anchor': 'middle', 'font-size': 15, class: 'pk-text', fill: v === C.meter ? P.mint.dark : P.ink.light }, sumL).textContent = `${v}박 / ${C.meter}박`;
        });
      }

      // ---- janggu ----
      const per = narrow ? Math.min(6, C.beats) : Math.min(12, C.beats); const cw = (W - 24) / per;
      const cellEls = [];
      function strokeMark(g, k, x, y) {
        const ink = print ? '#000' : P.ink.base;
        if (k === '덩') { kit.el('circle', { cx: x, cy: y, r: 13, fill: 'none', stroke: ink, 'stroke-width': 3 }, g); kit.el('line', { x1: x, y1: y - 19, x2: x, y2: y + 19, stroke: ink, 'stroke-width': 3 }, g); }
        else if (k === '쿵') kit.el('circle', { cx: x, cy: y, r: 13, fill: 'none', stroke: ink, 'stroke-width': 3 }, g);
        else if (k === '덕') kit.el('line', { x1: x, y1: y - 17, x2: x, y2: y + 17, stroke: ink, 'stroke-width': 3.4 }, g);
        else if (k === '기덕') { kit.el('line', { x1: x - 7, y1: y - 5, x2: x - 7, y2: y + 9, stroke: ink, 'stroke-width': 2.4 }, g); kit.el('line', { x1: x + 5, y1: y - 17, x2: x + 5, y2: y + 17, stroke: ink, 'stroke-width': 3.4 }, g); }
        else if (k === '더러러') kit.el('path', { d: `M${x - 12} ${y} q 4 -10 8 0 t 8 0 t 8 0`, fill: 'none', stroke: ink, 'stroke-width': 3 }, g);
      }
      function buildJanggu() {
        const L = st.layer('cells');
        kit.el('text', { x: 14, y: 26, 'font-size': 16, class: 'pk-text', fill: print ? '#000' : P.peach.dark }, L).textContent = `${o.jangdan ? `${o.jangdan} 장단 · ` : ''}${C.beats}칸`;
        for (let i = 0; i < C.beats; i++) {
          const r = Math.floor(i / per); const cI = i % per;
          const g = kit.el('g', { class: 'kb-cell' }, L);
          const p = kit.piece(st, g, { shape: { type: 'rect', x: 1, y: 0, w: cw - 2, h: 96, rx: 8 }, color: i % C.group === 0 ? 'peach' : 'cream', depth: 1, fill: i % C.group === 0 ? P.peach.light : '#FFFDF8' });
          kit.el('text', { x: cw / 2, y: 18, 'text-anchor': 'middle', 'font-size': 12, class: 'pk-text', fill: print ? '#000' : P.ink.light }, g).textContent = String(i + 1);
          const mark = kit.el('g', null, g); const word = kit.el('text', { x: cw / 2, y: 88, 'text-anchor': 'middle', 'font-size': 14, class: 'pk-text', fill: print ? '#000' : P.ink.base }, g);
          kit.transform(g, { x: 12 + cI * cw, y: 40 + r * 104 });
          if (i % C.group === 0 && i) kit.el('line', { x1: 0, y1: -2, x2: 0, y2: 98, stroke: print ? '#000' : P.ink.light, 'stroke-width': 3 }, g);
          cellEls.push({ g, mark, word, face: p.face });
          if (print) continue;
          g.setAttribute('tabindex', '0'); g.setAttribute('role', 'button'); g.style.cursor = 'pointer';
          const paint = (k) => { strokes[i] = strokes[i] === k ? '' : k; if (strokes[i]) hit(kit, strokes[i]); changed(strokes[i] ? `${i + 1}번째 박: ${strokes[i]}` : `${i + 1}번째 박을 비웠어요.`); cellEls[i].g.focus(); };
          g.addEventListener('click', () => paint(brush));
          g.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); paint(brush); return; }
            const n = Number(e.key);
            if (Number.isInteger(n) && n >= 1 && n <= C.strokes.length) { e.preventDefault(); strokes[i] = ''; paint(C.strokes[n - 1]); }
            else if (e.key === '0' || e.key === 'Delete' || e.key === 'Backspace') { e.preventDefault(); strokes[i] = ''; changed(`${i + 1}번째 박을 비웠어요.`); cellEls[i].g.focus(); }
            else if (e.key === 'ArrowRight' && cellEls[i + 1]) { e.preventDefault(); cellEls[i + 1].g.focus(); }
            else if (e.key === 'ArrowLeft' && cellEls[i - 1]) { e.preventDefault(); cellEls[i - 1].g.focus(); }
          });
        }
      }
      function paintJanggu() {
        cellEls.forEach((c, i) => {
          c.mark.textContent = ''; const k = strokes[i] || '';
          strokeMark(c.mark, k, cw / 2, 48); c.word.textContent = k;
          if (!print) c.g.setAttribute('aria-label', `${i + 1}번째 박: ${k || '비어 있음'}. Enter를 누르면 고른 붓(${brush})을 넣어요.`);
        });
      }

      // ---- 자기 점검 목록 ----
      const selfItems = () => (target && target.selfCheck) || o.selfCheck || null;
      function paintSelf() {
        const items = selfItems();
        if (print || !items) { if (selfBox) { selfBox.remove(); selfBox = null; } return; }
        if (!selfBox) {
          selfBox = document.createElement('div'); selfBox.className = 'kb-self'; selfBox.setAttribute('role', 'group'); selfBox.setAttribute('aria-label', '스스로 점검');
          selfBox.style.cssText = 'display:grid;gap:6px;margin-top:8px';
          selfBox.addEventListener('click', (e) => { const b = e.target.closest('[data-chk]'); if (!b) return; const i = Number(b.dataset.chk); checks[i] = !checks[i]; changed(checks[i] ? '표시했어요.' : '표시를 지웠어요.'); const f = selfBox.querySelector(`[data-chk="${i}"]`); if (f) f.focus(); });
          box.appendChild(selfBox);
        }
        selfBox.innerHTML = `<b style="font-size:15px"><i class="fi fi-rr-list-check" aria-hidden="true"></i> 스스로 점검 — 해낸 것을 눌러 표시해요</b>${items.map((x, i) => `<button type="button" class="pl-btn pl-btn--small" data-chk="${i}" role="checkbox" aria-checked="${!!checks[i]}" tabindex="0" style="justify-content:flex-start;white-space:normal;text-align:left;line-height:1.35;min-height:44px;${checks[i] ? 'font-weight:800;background:var(--pc-mint-light,#EAF7F1)' : 'font-weight:500'}"><i class="fi ${checks[i] ? 'fi-rr-checkbox' : 'fi-rr-square'}" aria-hidden="true"></i> ${esc(x)}</button>`).join('')}`;
      }

      function paint() { if (C.mode === 'melody') { paintKeys(); paintStrip(); } else if (C.mode === 'rhythm') paintRhythm(); else paintJanggu(); paintSelf(); }
      function state() {
        const s = C.mode === 'melody' ? { notes: notes.slice() } : C.mode === 'rhythm' ? { rhythm: rhythm.slice() } : { strokes: strokes.slice() };
        if (selfItems()) s.checks = selfItems().map((_, i) => !!checks[i]);
        return s;
      }
      function changed(text) {
        const was = revealed; revealed = false;
        paint(); if (was && C.mode === 'melody') paintBar();
        if (text) say(text);
        kit.recorder.log('keyboard', state());
      }
      function load(s) {
        s = s || {};
        notes = (s.notes || []).map(norm).slice(0, C.maxNotes);
        rhythm = (s.rhythm || []).filter((k) => RHY[k]);
        strokes = Array.from({ length: C.beats }, (_, i) => ((s.strokes || [])[i] && STROKES[s.strokes[i]] ? s.strokes[i] : ''));
        checks = (s.checks || []).map(Boolean);
        revealed = false; if (msg) msg.textContent = '';
        paint(); paintBar();
      }

      if (C.mode === 'melody') buildKeys(); else if (C.mode === 'rhythm') buildRhythm(); else buildJanggu();
      paintBar(); paint();

      return {
        getState: state,
        setState: load,
        setTarget(t) { target = t || null; paintBar(); paintSelf(); },
        reset() { load({}); },
        solve(t) { load(solve(t || target, o)); },
        check(t, opts) {
          const r = judge(state(), t || target, o);
          if (!(opts && opts.forHint) && r.correct && o.revealAfterCheck) { revealed = true; paint(); paintBar(); }
          return { correct: r.correct, incomplete: r.incomplete, feedback: r.feedback, hint: r.hint };
        },
        hint(t, opts) { return hintFor(state(), t || target, o, opts); },
        wrongAnswer(t) { return wrongAnswer(t || target, o, state()); },
        distance,
        async demo(t) {
          const s = solve(t || target, o); load({});
          if (C.mode === 'melody') for (const n of s.notes) { pressKey(midiOf(n)); await kit.wait(450); }
          else if (C.mode === 'rhythm') for (const k of s.rhythm) { addBlock(k); await kit.wait(350); }
          else { for (let i = 0; i < s.strokes.length; i++) { strokes[i] = s.strokes[i]; if (strokes[i]) hit(kit, strokes[i]); paint(); await kit.wait(260); } }
          load(s);
        },
      };
    },
  });
})(window.PaperKit);
