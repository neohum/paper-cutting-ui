// 종이 몸(body) 조작기 — 겹 벗기기, 기관 찾기, 지나는 길, 하는 일 잇기, 팔 굽히기, 몸의 부분 고르기.
import { makeCtx, answerAsk } from './_sci-common.mjs';

export const tools = ['body'];

// 학생이 아는 몸의 지식(기관의 하는 일·소속 계통) — 화면의 그림을 읽고 떠올리는 것에 해당
const JOB = {
  뇌: '생각하고 몸에 명령을 내려요', 코: '숨을 들이쉬고 냄새를 맡아요', 입: '음식물을 잘게 부수고 침과 섞어요',
  기관: '들이마신 공기가 폐로 가는 길이에요', 식도: '삼킨 음식물을 위로 보내요', 폐: '몸에 산소를 받아들이고 이산화 탄소를 내보내요',
  심장: '펌프처럼 뛰어 피를 온몸으로 보내요', 간: '쓸개즙을 만들고 영양소를 저장해요', 위: '위액으로 음식물을 더 잘게 쪼개요',
  콩팥: '피 속의 노폐물을 걸러 오줌을 만들어요', 작은창자: '음식물의 영양소를 흡수해요', 큰창자: '음식물 찌꺼기의 물을 흡수해요',
  방광: '오줌을 모았다가 몸 밖으로 내보내요', 항문: '똥을 몸 밖으로 내보내요',
};
const ORGAN_ORDER = Object.keys(JOB);
const SYSTEMS = { 소화: ['입', '식도', '위', '작은창자', '큰창자', '항문'], 호흡: ['코', '기관', '폐'], 배설: ['콩팥', '방광'] };
const PART_DEFAULT = ['눈', '귀', '코', '혀', '피부', '목', '어깨', '팔꿈치', '손목', '허리', '허벅지', '무릎', '발목'];
const LAYERS = ['피부', '근육', '뼈', '기관'];

export async function drive({ page, target, options, readState, log, persona, root: rootSel }) {
  const ctx = makeCtx({ page, persona, readState, log });
  const o = options || {};
  const t = target || {};
  const mode = ['layers', 'find', 'path', 'match', 'arm', 'parts'].includes(o.mode) ? o.mode : 'layers';
  const root = rootSel || '#tool';
  const jobs = Object.assign({}, JOB, o.jobs || {});
  const organs = Array.isArray(o.organs) && o.organs.length ? o.organs : ORGAN_ORDER;
  let reached = true;

  const spotsLoc = page.locator(`${root} .bd-spot`);

  // 몸 위의 자리를 눌러 이름이 나오게 하는 공통 길: 짐작한 자리부터 눌러 보고, 상태를 보며 다른 자리를 눌러 본다
  async function pressSpot(idx, label) {
    const loc = spotsLoc.nth(idx);
    return ctx.tap(loc, label);
  }

  if (mode === 'layers' && (t.layer != null || t.peeled != null)) {
    const want = t.peeled != null ? t.peeled : LAYERS.indexOf(t.layer);
    if (want < 0 || want > 3) { ctx.problem('unreachable', `겹 '${t.layer}'을(를) 만들 수 없음`); reached = false; }
    else {
      for (let g = 0; g < 8 && (await ctx.state()).peeled !== want && !ctx.over(); g++) {
        const cur = (await ctx.state()).peeled;
        const btn = page.locator(`${root} button[data-do="${cur < want ? 'peel' : 'cover'}"]`);
        if (!(await btn.count())) { ctx.problem('control-missing', '겹 벗기기·덮기 단추가 없음'); reached = false; break; }
        await ctx.tapExpect(btn, cur < want ? '한 겹 벗기기' : '한 겹 덮기', async () => (await ctx.state()).peeled !== cur);
      }
      reached = (await ctx.state()).peeled === want;
    }
  }

  if (mode === 'find' && (t.sel || t.job)) {
    const want = t.sel || ORGAN_ORDER.find((n) => jobs[n] === t.job) || null;
    if (!want) { ctx.problem('driver-limit', `일 '${t.job}'을(를) 하는 기관을 알지 못함`); reached = false; }
    else {
      const n = await spotsLoc.count();
      const guess = organs.indexOf(want);
      if (guess < 0) { ctx.problem('unreachable', `고를 수 있는 기관에 '${want}'이(가) 없음`); reached = false; }
      else {
        const order = [guess].concat(Array.from({ length: n }, (_, i) => i).filter((i) => i !== guess));
        let hit = false;
        for (const i of order) {
          if (i >= n) continue;
          await pressSpot(i, `몸속 ${i + 1}번`);
          if ((await ctx.state()).sel === want) { hit = true; break; }
          if (ctx.over()) break;
        }
        reached = hit;
        if (!hit && n === 0) ctx.problem('control-missing', '몸속 기관을 누르는 자리가 없음');
      }
    }
  }

  if (mode === 'path' && (t.path || t.system)) {
    const want = t.path || SYSTEMS[t.system] || [];
    const clearAll = page.locator(`${root} button[data-do="clear"]`);
    if (((await ctx.state()).path || []).length) await ctx.tap(clearAll, '모두 지우기');
    const n = await spotsLoc.count();
    for (const name of want) {
      const guess = organs.indexOf(name);
      if (guess < 0) { ctx.problem('unreachable', `지나는 곳 '${name}'이(가) 고를 수 있는 기관에 없음`); reached = false; break; }
      const len0 = ((await ctx.state()).path || []).length;
      const order = [guess].concat(Array.from({ length: n }, (_, i) => i).filter((i) => i !== guess));
      let ok = false;
      for (const i of order) {
        if (i >= n) continue;
        await pressSpot(i, `몸속 ${i + 1}번`);
        const p = (await ctx.state()).path || [];
        if (p.length === len0 + 1 && p[p.length - 1] === name) { ok = true; break; }
        if (p.length > len0) await ctx.tap(page.locator(`${root} button[data-do="undo"]`), '하나 되돌리기');
        if (ctx.over()) break;
      }
      if (!ok) { reached = false; break; }
    }
    reached = reached && ((await ctx.state()).path || []).join() === want.join();
  }

  if (mode === 'match' && t.match) {
    const matchBy = o.matchBy === 'name' ? 'name' : 'job';
    const want = t.match === 'auto' || t.match === true ? Object.fromEntries(organs.map((n) => [n, matchBy === 'name' ? n : jobs[n]])) : t.match;
    for (const [organ, val] of Object.entries(want)) {
      const btn = page.locator(`${root} button[data-do="m"][data-k="${organ}"]`);
      if (!(await btn.count())) { ctx.problem('control-missing', `'${organ}' 줄의 고르기 단추가 없음`); reached = false; continue; }
      let seen = 0;
      while (((await ctx.state()).match || {})[organ] !== val && seen++ < 20 && !ctx.over()) {
        const before = ((await ctx.state()).match || {})[organ];
        await ctx.tapExpect(btn, `${organ} 고르기`, async () => ((await ctx.state()).match || {})[organ] !== before);
      }
      if (((await ctx.state()).match || {})[organ] !== val) { ctx.problem('unreachable', `'${organ}' 줄의 보기에 '${String(val).slice(0, 20)}'이(가) 없음`); reached = false; }
    }
  }

  if (mode === 'parts' && Array.isArray(t.parts)) {
    const list = Array.isArray(o.parts) && o.parts.length ? o.parts : PART_DEFAULT;
    const have = () => (async () => (await ctx.state()).parts || [])();
    // 틀리게 눌린 것은 다시 눌러 뺀다
    for (const name of await have()) if (!t.parts.includes(name)) { const i = list.indexOf(name); if (i >= 0) await pressSpot(i, `몸의 부분 ${i + 1}`); }
    for (const name of t.parts) {
      const i = list.indexOf(name);
      if (i < 0) { ctx.problem('unreachable', `고를 수 있는 몸의 부분에 '${name}'이(가) 없음`); reached = false; continue; }
      if ((await have()).includes(name)) continue;
      await ctx.tapExpect(spotsLoc.nth(i), `몸의 부분 ${i + 1}`, async () => (await have()).includes(name));
      if (!(await have()).includes(name)) reached = false;
    }
    const fin = await have();
    reached = reached && t.parts.every((p) => fin.includes(p)) && fin.every((p) => t.parts.includes(p));
  }

  if (mode === 'arm' && (t.bent != null || t.shorter || Number.isFinite(t.angle))) {
    const step = o.step || 10;
    const wantAngle = Number.isFinite(t.angle) ? t.angle
      : (t.bent === true || t.shorter === '안쪽') ? 120 : (t.bent === false || t.shorter === '바깥쪽') ? 0 : null;
    const fore = page.locator(`${root} .bd-fore`);
    if (!(await fore.count())) { ctx.problem('control-missing', '팔을 움직이는 아래팔이 없음'); reached = false; }
    else if (wantAngle != null) {
      const cur0 = (await ctx.state()).angle || 0;
      if (ctx.input === 'keyboard') {
        const n = Math.round((wantAngle - cur0) / step);
        if (n) {
          if (!(await ctx.focusViaTab(fore, '아래팔'))) reached = false;
          else await ctx.key(n > 0 ? 'ArrowUp' : 'ArrowDown', Math.abs(n));
        }
      } else {
        // 눈에 보이는 팔꿈치(둥근 뼈 끝)와 손(아래팔 끝 둥근 곳)을 찾아, 손을 잡고 팔꿈치 둘레로 돌린다
        const elbowBox = await page.locator(`${root} svg circle[r="9"]`).first().boundingBox();
        const handBox = await page.locator(`${root} .bd-fore circle[r="17"]`).first().boundingBox();
        await ctx.box(fore);
        if (!elbowBox || !handBox) { ctx.problem('driver-limit', '팔꿈치·손 위치를 찾지 못함'); reached = false; }
        else {
          const E = ctx.center(elbowBox); const H = ctx.center(handBox);
          ctx.sizeCheck(handBox, '아래팔(손)');
          const R = Math.hypot(H.x - E.x, H.y - E.y);
          const at = (a) => ({ x: E.x - R * Math.sin((a * Math.PI) / 180), y: E.y + R * Math.cos((a * Math.PI) / 180) });
          const pts = [H]; const n = 14;
          for (let i = 1; i <= n; i++) pts.push(at(cur0 + ((wantAngle - cur0) * i) / n));
          await ctx.dragPath(pts, '아래팔 끌기');
        }
      }
      const a = (await ctx.state()).angle || 0;
      reached = reached && Math.abs(a - wantAngle) <= step / 2 + 1e-6;
    }
  }

  if (t.pick != null) reached = (await answerAsk(ctx, `${root} [role="radiogroup"] button[data-pick]`, t)) && reached;

  return ctx.result(reached);
}
