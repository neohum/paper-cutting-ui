// 태양·지구·달(earth) 조작기 — 자전(spin), 공전(orbit), 달 모양(moon), 그림자(shadow), 행성 차례(planets).
import { makeCtx, answerAsk } from './_sci-common.mjs';
import { spinToHour } from './_sci-spin.mjs';

export const tools = ['earth'];

const PLANETS = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];
const SEASONS = ['봄', '여름', '가을', '겨울'];
const STARS = { 봄: '사자자리', 여름: '백조자리', 가을: '페가수스자리', 겨울: '오리온자리' };
const shapeOfDay = (d) => (d <= 5 ? '초승달' : d <= 10 ? '상현달' : d <= 19 ? '보름달' : d <= 24 ? '하현달' : '그믐달');
const PHASE_HOUR = { 아침: 6, 낮: 12, 저녁: 18, 밤: 0 };

export async function drive({ page, target, options, readState, log, persona, root: rootSel }) {
  const ctx = makeCtx({ page, persona, readState, log });
  const o = options || {};
  const t = target || {};
  const root = rootSel || '#tool';
  const mode = ['orbit', 'moon', 'shadow', 'planets'].includes(o.mode) ? o.mode : 'spin';
  let reached = true;

  if (mode === 'spin' && (t.hour != null || t.time || t.phase)) {
    let want = t.hour;
    if (want == null && t.phase) want = PHASE_HOUR[t.phase];
    if (want == null && t.time) want = t.time === '밤' ? 0 : 12;
    if (want == null) { ctx.problem('driver-limit', '목표 시각을 정하지 못함'); reached = false; }
    else {
      const earth = page.locator(`${root} .ea-earth`);
      if (!(await earth.count())) { ctx.problem('control-missing', '돌릴 지구가 없음'); reached = false; }
      else reached = await spinToHour(ctx, earth, want, o.step || 1, 'short', '지구');
    }
  }

  if (mode === 'orbit' && (t.season || t.night)) {
    const stars = Object.assign({}, STARS, o.constellations || {});
    const want = t.season || SEASONS.find((s) => stars[s] === t.night);
    const earth = page.locator(`${root} .ea-earth`);
    if (!want) { ctx.problem('unreachable', `별자리 '${t.night}'가 보이는 자리가 이 판에 없음`); reached = false; }
    else if (!(await earth.count())) { ctx.problem('control-missing', '옮길 지구가 없음'); reached = false; }
    else {
      for (let g = 0; g < 5 && (await ctx.state()).season !== want && !ctx.over(); g++) {
        const before = (await ctx.state()).season;
        await ctx.tapExpect(earth, '지구', async () => (await ctx.state()).season !== before);
      }
      reached = (await ctx.state()).season === want;
    }
  }

  if (mode === 'moon' && t.moon) {
    const days = Array.isArray(o.days) ? o.days : [3, 7, 15, 22, 27];
    const want = t.moon === 'auto' || t.moon === true ? Object.fromEntries(days.map((d) => [String(d), shapeOfDay(d)])) : t.moon;
    for (const [d, shape] of Object.entries(want)) {
      const card = page.locator(`${root} .ea-moon[aria-label^="음력 ${d}일 달"]`);
      if (!(await card.count())) { ctx.problem('control-missing', `음력 ${d}일 달 카드가 없음`); reached = false; continue; }
      const cur = () => (async () => ((await ctx.state()).moon || {})[d])();
      for (let g = 0; g < 8 && (await cur()) !== shape && !ctx.over(); g++) {
        const before = await cur();
        await ctx.tapExpect(card, `음력 ${d}일 달`, async () => (await cur()) !== before);
      }
      if ((await cur()) !== shape) { ctx.problem('unreachable', `음력 ${d}일 달 카드를 '${shape}'로 고를 수 없음`); reached = false; }
    }
  }

  if (mode === 'shadow' && (t.alt != null || t.hour != null || t.noon || t.shortest || t.longest || t.shadow != null)) {
    const hrs = o.hours && typeof o.hours === 'object' ? { rise: o.hours.rise ?? 6, set: o.hours.set ?? 18, top: o.hours.top ?? 60 } : null;
    const stick = Number.isFinite(o.stick) ? o.stick : 10;
    const altStep = hrs ? 0 : (o.altStep || 10);
    const minAlt = hrs ? 0 : Number.isFinite(o.minAlt) ? o.minAlt : 10; const maxAlt = hrs ? hrs.top : Number.isFinite(o.maxAlt) ? o.maxAlt : 80;
    let want = null; let key = hrs ? 'hour' : 'alt';
    if (hrs) {
      if (t.hour != null) want = t.hour;
      else if (t.noon || t.shortest) want = Math.round((hrs.rise + hrs.set) / 2);
      else if (t.longest) want = hrs.rise;
      else if (t.alt != null) { want = null; for (let h = hrs.rise; h <= hrs.set; h++) if (Math.round(hrs.top * Math.sin((Math.PI * (h - hrs.rise)) / (hrs.set - hrs.rise))) === t.alt) { want = h; break; } }
      else if (t.shadow != null) { for (let h = hrs.rise + 1; h < hrs.set; h++) { const a = Math.round(hrs.top * Math.sin((Math.PI * (h - hrs.rise)) / (hrs.set - hrs.rise))); if (a > 0 && Math.abs(Math.round((stick / Math.tan((a * Math.PI) / 180)) * 10) / 10 - t.shadow) < 0.06) { want = h; break; } } }
    } else if (t.alt != null) want = t.alt;
    else if (t.shortest) want = maxAlt;
    else if (t.longest) want = minAlt;
    else if (t.shadow != null) { for (let a = minAlt; a <= maxAlt; a += altStep) if (Math.abs(Math.round((stick / Math.tan((a * Math.PI) / 180)) * 10) / 10 - t.shadow) < 0.06) { want = a; break; } }
    if (want == null) { ctx.problem('unreachable', '이 판의 태양 자리로는 목표 값을 만들 수 없음'); reached = false; }
    else {
      const sun = page.locator(`${root} .ea-sun`);
      if (!(await sun.count())) { ctx.problem('control-missing', '옮길 태양이 없음'); reached = false; }
      else if (ctx.input === 'keyboard') {
        if (!(await ctx.focusViaTab(sun, '태양'))) reached = false;
        else {
          for (let g = 0; g < 40; g++) {
            const cur = (await ctx.state())[key];
            if (cur === want) break;
            await ctx.key(hrs ? (want > cur ? 'ArrowRight' : 'ArrowLeft') : (want > cur ? 'ArrowUp' : 'ArrowDown'));
            if ((await ctx.state())[key] === cur) { ctx.problem('unreachable', `태양이 더 움직이지 않음(${key}=${cur}, 목표 ${want})`); break; }
          }
        }
      } else {
        // 눈에 보이는 막대 밑동을 기준으로, 태양을 목표 높이(각도) 쪽으로 끈다
        const stickBox = await page.locator(`${root} svg rect[width="10"][height="90"].pk-face`).first().boundingBox();
        const sunBox = await ctx.box(sun);
        if (!stickBox || !sunBox) { ctx.problem('driver-limit', '막대·태양 위치를 찾지 못함'); reached = false; }
        else {
          ctx.sizeCheck(sunBox, '태양');
          const B = { x: stickBox.x + stickBox.width / 2, y: stickBox.y + stickBox.height };
          const S = ctx.center(sunBox);
          const d = Math.hypot(S.x - B.x, S.y - B.y);
          for (let attempt = 0; attempt < 3; attempt++) {
            const cur = (await ctx.state())[key]; if (cur === want) break;
            const a = hrs ? ((want - hrs.rise) / (hrs.set - hrs.rise)) * 180 : want;
            const P = { x: B.x - d * Math.cos((a * Math.PI) / 180), y: B.y - d * Math.sin((a * Math.PI) / 180) };
            const sb = await ctx.box(sun); const from = ctx.center(sb);
            await ctx.dragPath(ctx.line(from, P, 10), '태양 끌기');
          }
        }
      }
      reached = reached && (await ctx.state())[key] === want;
    }
  }

  if (mode === 'planets' && !o.readOnly) {
    const planets = (Array.isArray(o.planets) && o.planets.length ? o.planets : PLANETS).filter((p) => PLANETS.includes(p));
    const want = Array.isArray(t.order) ? t.order : planets;
    if (want.some((p) => !planets.includes(p))) { ctx.problem('unreachable', '차례에 넣을 행성 카드가 이 판에 없음'); reached = false; }
    else {
      const card = (p) => page.locator(`${root} .ea-planet[aria-label^="${p} 카드"]`);
      const ord = async () => (await ctx.state()).order || [];
      // 앞부분이 어긋난 곳부터 카드를 빼고 다시 놓는다
      for (let g = 0; g < 20; g++) {
        const cur = await ord(); let k = 0; while (k < cur.length && cur[k] === want[k]) k++;
        if (k === cur.length) break;
        const before = cur.length;
        await ctx.tapExpect(card(cur[k]), `${cur[k]} 카드 빼기`, async () => (await ord()).length === before - 1);
        if (ctx.over()) break;
      }
      for (const p of want) {
        const cur = await ord(); if (cur.includes(p)) continue;
        const before = cur.length;
        if (!(await card(p).count())) { ctx.problem('control-missing', `${p} 카드가 화면에 없음`); reached = false; continue; }
        await ctx.tapExpect(card(p), `${p} 카드`, async () => (await ord()).length === before + 1);
      }
      reached = reached && (await ord()).join() === want.join();
    }
  }

  if (t.pick != null) reached = (await answerAsk(ctx, `${root} [data-pick], ${root} .ea-ask [role="radio"]`, t)) && reached;

  return ctx.result(reached);
}
