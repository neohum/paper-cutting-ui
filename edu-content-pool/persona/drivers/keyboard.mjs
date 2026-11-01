// 종이 건반·리듬 블록·장구 장단판(keyboard) 조작기 — 화면 건반 누르기, 리듬 블록 놓기, 장단 칸 채우기, 스스로 점검 표시.
// 키보드 페르소나는 Tab 으로 건반·블록·칸에 닿아 Enter/Space(장단 칸은 1~5·0 숫자)만 쓴다.
import { makeCtx, finish, activate, tabTo, press, sleep } from './_arts-util.mjs';

export const tools = ['keyboard'];

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
const norm = (x) => { const m = midiOf(x); return m == null ? String(x) : labelOf(m); };
const isBlack = (m) => [1, 3, 6, 8, 10].includes(((m % 12) + 12) % 12);
const RHY = {
  q: { b: 1, name: '4분음표' }, e: { b: 0.5, name: '8분음표' }, h: { b: 2, name: '2분음표' }, dh: { b: 3, name: '점2분음표' }, w: { b: 4, name: '온음표' },
  qr: { b: 1, name: '4분쉼표', rest: true }, er: { b: 0.5, name: '8분쉼표', rest: true }, hr: { b: 2, name: '2분쉼표', rest: true },
};
const STROKES = ['덩', '쿵', '덕', '기덕', '더러러'];

function cfg(o) {
  const lo = midiOf(o.from) ?? 60; const hi = Math.max(lo + 4, midiOf(o.to) ?? 72);
  return {
    mode: ['rhythm', 'janggu'].includes(o.mode) ? o.mode : 'melody', lo, hi, black: !!o.black, maxNotes: Math.max(4, Math.min(24, o.maxNotes || 16)),
    meter: Math.max(2, Math.min(6, o.meter || 4)), measures: Math.max(1, Math.min(4, o.measures || 2)),
    blocks: (o.blocks || ['q', 'e', 'h', 'qr']).filter((k) => RHY[k]),
    beats: Math.max(4, Math.min(24, o.beats || 12)), group: Math.max(1, Math.min(6, o.group || 3)),
    strokes: (o.strokes || STROKES).filter((k) => STROKES.includes(k)),
  };
}

// 마디마다 박이 꼭 맞고(마디줄을 넘지 않고) use 를 모두 쓰고 쉼표가 rests 개 이상인 블록 차례를 찾는다
function planBeats(c, use, rests) {
  const cap = c.meter * c.measures; const need = use || []; const bad = new Set();
  const key = (p, mask, r) => `${p}|${mask}|${r}`;
  const go = (p, mask, r, acc) => {
    if (Math.abs(p - cap) < 1e-9) return need.every((_, i) => mask & (1 << i)) && r >= (rests || 0) ? acc : null;
    const k = key(p, mask, Math.min(r, rests || 0)); if (bad.has(k)) return null;
    for (const b of c.blocks) {
      const w = RHY[b].b; const e = p + w;
      if (e > cap + 1e-9) continue;
      if (Math.floor(p / c.meter + 1e-9) !== Math.floor((e - 1e-9) / c.meter)) continue;
      const ui = need.indexOf(b);
      const res = go(e, ui >= 0 ? mask | (1 << ui) : mask, r + (RHY[b].rest ? 1 : 0), acc.concat(b));
      if (res) return res;
    }
    bad.add(k); return null;
  };
  return go(0, 0, 0, []);
}

export async function drive({ page, root: rootSel, target, options, prompt, toolId, persona, readState, log }) {
  const ctx = makeCtx({ page, persona, readState, log });
  const o = options || {}; const t = target || {}; const C = cfg(o);
  const R0 = rootSel || '#tool';
  const tool = page.locator(R0);
  try {
    let s = await ctx.read();
    const readBack = async () => { await sleep(60); s = await ctx.read(); };
    const bar = (act) => tool.locator(`[data-kb="${act}"]`);
    const need = t.minNotes != null ? t.minNotes : 1;
    let want = null; // 만들 목록(가락 음·리듬 블록·장단 칸)

    // ---------- melody ----------
    if (C.mode === 'melody') {
      const whites = []; const blacks = [];
      for (let m = C.lo; m <= C.hi; m++) { if (isBlack(m)) { if (C.black) blacks.push(m); } else whites.push(m); }
      const keyLoc = (m) => (isBlack(m) ? tool.locator('g.kb-key.kb-key--black').nth(blacks.indexOf(m)) : tool.locator('g.kb-key:not(.kb-key--black)').nth(whites.indexOf(m)));
      const has = (m) => (isBlack(m) ? blacks.includes(m) : whites.includes(m));
      const names = whites.concat(blacks).sort((a, b) => a - b).map(labelOf);
      if (t.notes) want = t.notes.map(norm);
      else if (t.compose) {
        const r = t.compose; const pool = r.only ? r.only.map(norm).filter((x) => names.includes(x)) : whites.map(labelOf);
        if (!pool.length) ctx.stop('unreachable', `쓸 수 있는 음 ${(r.only || []).join(' ')} 이(가) 이 단계 건반(${labelOf(C.lo)}~${labelOf(C.hi)})에 없음`);
        const n = r.length ?? (r.max ? Math.min(r.max, Math.max(r.min || 1, 4)) : Math.max(r.min || 1, 4));
        const first = r.startOn ? norm(r.startOn) : pool[0]; const last = r.endOn ? norm(r.endOn) : pool[pool.length - 1];
        if (r.startOn && !names.includes(first)) ctx.stop('unreachable', `시작 음 ‘${first}’ 건반이 없음`);
        if (r.endOn && !names.includes(last)) ctx.stop('unreachable', `끝 음 ‘${last}’ 건반이 없음`);
        if (r.only && ((r.startOn && !pool.includes(first)) || (r.endOn && !pool.includes(last)))) ctx.stop('unreachable', '시작·끝 음이 쓸 수 있는 음 목록에 없음');
        if (n < 2 && first !== last) ctx.stop('unreachable', '음 1개로 시작 음과 끝 음을 모두 맞출 수 없음');
        want = [first]; for (let i = 1; i < n - 1; i++) want.push(pool[i % pool.length]); if (n > 1) want.push(last);
      }
      if (want) {
        if (want.length > C.maxNotes) ctx.stop('unreachable', `가락 ${want.length}음이 한 번에 칠 수 있는 수(${C.maxNotes})를 넘음`);
        for (const w of want) if (!has(midiOf(w))) ctx.stop('unreachable', `건반에 ‘${w}’ 음이 없음(${labelOf(C.lo)}~${labelOf(C.hi)}${C.black ? '' : ', 검은건반 없음'})`);
        const have = (s.notes || []).map(norm);
        let k = 0; while (k < have.length && k < want.length && have[k] === want[k]) k++;
        for (let i = have.length; i > k; i--) await activate(ctx, bar('undo'), '하나 지우기 단추');
        for (let i = k; i < want.length; i++) await activate(ctx, keyLoc(midiOf(want[i])), `건반 ‘${want[i]}’`, { key: 'Enter' });
        await readBack();
      } else if (t.selfCheck) {
        const n = (s.notes || []).length;
        for (let i = n; i < need; i++) await activate(ctx, keyLoc(whites[0]), `건반 ‘${labelOf(whites[0])}’`);
        await readBack();
      }
    }

    // ---------- rhythm ----------
    if (C.mode === 'rhythm') {
      if (t.rhythm) want = t.rhythm.slice();
      else if (t.beats) {
        want = planBeats(C, t.use, t.rests);
        if (!want) ctx.stop('unreachable', `이 단계 블록(${C.blocks.join(',')})으로는 마디마다 ${C.meter}박을 채우면서 ${[t.use ? `${t.use.join('·')} 쓰기` : '', t.rests ? `쉼표 ${t.rests}개` : ''].filter(Boolean).join(', ')} 조건을 만족할 수 없음`);
      }
      const pal = (k) => tool.locator(`g.kb-pal[aria-label^="${RHY[k].name} "]`);
      if (want) {
        for (const k of want) if (!C.blocks.includes(k) || !(await pal(k).count())) ctx.stop('unreachable', `블록 고르개에 ${RHY[k] ? RHY[k].name : k} 블록이 없음`);
        const total = want.reduce((n, k) => n + RHY[k].b, 0); const cap = C.meter * C.measures;
        if (total > cap + 1e-9) ctx.stop('unreachable', `목표 리듬이 ${total}박인데 마디 판은 ${C.meter}박 × ${C.measures}마디 = ${cap}박까지만 놓임`);
        const have = (s.rhythm || []).slice();
        let k = 0; while (k < have.length && k < want.length && have[k] === want[k]) k++;
        for (let i = have.length; i > k; i--) await activate(ctx, bar('undo'), '하나 지우기 단추');
        for (let i = k; i < want.length; i++) await activate(ctx, pal(want[i]), `${RHY[want[i]].name} 블록`);
        await readBack();
      } else if (t.selfCheck) {
        const n = (s.rhythm || []).length;
        const q = C.blocks[0];
        for (let i = n; i < need; i++) await activate(ctx, pal(q), `${RHY[q].name} 블록`);
        await readBack();
      }
    }

    // ---------- janggu ----------
    if (C.mode === 'janggu') {
      const cells = tool.locator('g.kb-cell');
      const nCells = await cells.count();
      const brush = (k) => tool.locator(`[data-brush="${k}"]`);
      let cur = (await tool.locator('[data-brush][aria-checked="true"]').first().getAttribute('data-brush').catch(() => null)) || C.strokes[0];
      const useBrush = async (k) => { if (cur === k) return; await activate(ctx, brush(k), `구음 붓 ‘${k}’`); cur = k; };
      const paintCell = async (i, k) => { // 키보드: 칸에 닿아 숫자 키. 마우스·터치: 붓을 고르고 칸 누르기
        if (ctx.input === 'keyboard') { await tabTo(ctx, cells.nth(i), `장단 ${i + 1}번째 칸`); await press(ctx, k ? String(C.strokes.indexOf(k) + 1) : '0'); }
        else { await useBrush(k); await activate(ctx, cells.nth(i), `장단 ${i + 1}번째 칸`); }
      };
      let list = null;
      if (t.strokes) list = t.strokes.slice();
      else if (t.selfCheck) { list = (s.strokes || []).slice(); let n = list.filter(Boolean).length; for (let i = 0; i < nCells && n < need; i++) if (!list[i]) { list[i] = C.strokes[0]; n++; } }
      if (list) {
        for (let i = 0; i < list.length; i++) if (list[i] && (i >= nCells || !C.strokes.includes(list[i]))) ctx.stop('unreachable', `장단 ${i + 1}번째 칸 ‘${list[i]}’을(를) 넣을 칸·붓이 없음(칸 ${nCells}개, 붓 ${C.strokes.join('·')})`);
        for (let i = 0; i < Math.max(list.length, nCells); i++) {
          const w = list[i] || ''; const c0 = (s.strokes || [])[i] || '';
          if (w === c0) continue;
          if (!w) { if (ctx.input === 'keyboard') await paintCell(i, ''); else { await useBrush(c0); await activate(ctx, cells.nth(i), `장단 ${i + 1}번째 칸`); } } // 같은 붓으로 한 번 더 누르면 지워진다
          else await paintCell(i, w);
        }
        await readBack();
      }
    }

    // ---------- 스스로 점검 ----------
    if (t.selfCheck) {
      if ((await tool.locator('[data-chk]').count()) < t.selfCheck.length) ctx.stop('control-missing', '스스로 점검 칸이 모자람');
      for (let i = 0; i < t.selfCheck.length; i++) {
        if (!(s.checks || [])[i]) await activate(ctx, tool.locator(`[data-chk="${i}"]`), `스스로 점검 ‘${t.selfCheck[i]}’`, { key: ' ' });
      }
      await readBack();
    }

    // 도착 판단
    let ok = true;
    if (want) {
      const got = C.mode === 'melody' ? (s.notes || []).map(norm) : C.mode === 'rhythm' ? s.rhythm || [] : (s.strokes || []).map((x) => x || '');
      if (C.mode === 'janggu') ok = want.every((w, i) => (got[i] || '') === (w || ''));
      else ok = JSON.stringify(got) === JSON.stringify(want);
    }
    if (t.selfCheck) {
      const work = C.mode === 'melody' ? (s.notes || []).length : C.mode === 'rhythm' ? (s.rhythm || []).length : (s.strokes || []).filter(Boolean).length;
      ok = ok && work >= need && t.selfCheck.every((_, i) => (s.checks || [])[i]);
    }
    return finish(ctx, null, ok);
  } catch (e) {
    return finish(ctx, e, false);
  }
}
