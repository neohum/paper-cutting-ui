#!/usr/bin/env node
// 창체 모듈 검사 — 모듈 내용(modules/<영역>/<학년군>.js)과 체계도(framework/*.json)의 추천 조합 차시를 본다.
// 사용: node edu-content-pool/check-module.mjs <영역>[/<학년군 code>]|<모듈 id>|--all [--static] [--touch] [--hub URL] [--shots dir] [--no-pdf] [--verbose]
//   --all     modules/ 아래 모든 영역(이름이 '_'로 시작하는 폴더·파일은 뺀다)
//   --static  브라우저 없이 정적 검사만
//   --touch   휴대폰 화면에서 교구 누름 영역 44px(check-unit.mjs --touch 와 같은 검사)
// 정적(모듈마다): 형식(edu-module.v1 — modules/compose.js shapeErrors) · 체계도 계획과 일치(id·type·주제·교구·분) · 주제 근거(source)
//   · 학년군 기준(학생 글·카드 글자 수 상한, 초등 법 조문·형량 금지, 피해 경험 묻기 금지) · 문항 모양(check-lesson itemShape)
//   · 교구 범위(check-reach — 활동 문항과 정리 출구 교구 질문, 단계마다) · 주제 안 같은 방식·교구 반복 금지 · 학년군 카드 계열 교구 60% 이하
// 정적(추천 조합 차시마다): 조합 성공(분 합계·학년군·학년) · check-lesson 차시 계약 · 활동 1~3·문항 3~6·출구 2~4·활동지 4 이상
//   · 같은 학년 안 모듈·문항·제목 반복 금지 · 교사 발문 빈말 금지
// 동적: check-unit.mjs 와 같은 브라우저 검사(solve→check, 시작 상태 정답 아님, 1단계 힌트 누출, wrongAnswer, 확인 단추, 출구 교구,
//   학생 화면·휴대폰 가로 넘침, 활동지 렌더·2쪽, 제출). 추천 조합에 안 들어간 모듈은 시험 조합(compose=…&probe=1)으로 돌린다.
// 실패는 '모듈 id|차시 id · 위치 · 이유' 한 줄씩, 종료 코드 1. classroom-hub.mjs 가 떠 있어야 한다(--static 제외).
import { existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { staticLesson, itemShape, worksheetShape } from './check-lesson.mjs';
import { lessonReach } from './check-reach.mjs';
import { PII } from './classroom-hub.mjs';
import { PM, loadFramework, loadModuleFiles, writeDomainFramework } from './build-modules.mjs';
import { lines, notes, failAt, dynamicUnit, openPages, runTouch, hubUp, hub } from './check-unit.mjs';

const argv = process.argv.slice(2);
const flag = (k) => argv.includes(k);
const arg = (k) => { const i = argv.indexOf(k); return i >= 0 ? argv[i + 1] : null; };
const target = argv.find((a, i) => !a.startsWith('--') && !['--hub', '--shots'].includes(argv[i - 1]));
if (!target && !flag('--all')) { console.error('usage: check-module.mjs <영역>[/<학년군 code>]|<모듈 id>|--all [--static] [--touch] [--hub URL] [--shots dir] [--no-pdf]'); process.exit(2); }
const norm = (t) => String(t ?? '').replace(/\s+/g, ' ').trim();
const len = (t) => norm(t).replace(/\s/g, '').length; // 글자 수 = 띄어쓰기 뺀 글자
const EMPTY_TEACHER = /지도한다|지도하기|지도함|안내한다\.?$|설명한다\.?$|확인한다\.?$/;
const CARD_TOOLS = new Set(['mindmap', 'story', 'emotion', 'timeline', 'wordcards', 'sortboard']);

// 학년군 기준표(FRAMEWORK_SPEC.md '학년군과 학습 방식'). 글자 수는 띄어쓰기를 뺀 수.
//   prompt: 문항·출구 질문 글, say: 도입 학생 글·활동 과제, card: 교구 카드·보기 글(카드·칸·바구니·체크 항목·고르기 보기), opt: 출구 고르기 보기
const BAND_RULES = {
  '초1-2': { prompt: 22, say: 45, card: 8, opt: 12, avoid: [[/제\s*\d+\s*조|법률|법령|조항|시행령|처벌|징역|벌금|형량/, '법·제도 낱말(초1-2는 법·제도를 쓰지 않음)']] },
  '초3-4': { prompt: 45, say: 80, card: 14, opt: 20, avoid: [[/제\s*\d+\s*조|조항|시행령|징역|벌금|형량/, '법 조문·형량(초3-4)']] },
  '초5-6': { prompt: 70, say: 120, card: 20, opt: 30, avoid: [[/제\s*\d+\s*조|징역|벌금형|형량|\d+\s*년\s*이하/, '법 조문 번호·형량(초5-6)']] },
  중: { prompt: 120, say: 160, card: 30, opt: 50, avoid: [] },
  고: { prompt: 160, say: 200, card: 40, opt: 60, avoid: [] },
};
// 피해 경험을 묻는 글 — 학생에게 겪은 일을 꺼내게 하지 않는다(FRAMEWORK_SPEC.md)
const ASK_HARM = /(당한|당했던|겪은|겪었던|피해를\s*입은|맞은|괴롭힘을\s*받은)\s*(적|일|경험)/;

// 교구 옵션 안의 학생에게 보이는 짧은 글 → [글, 종류]. 카드·체크 항목·바구니는 카드 글(card), 칸 이름·갈림길 보기·상황은 보기 글(opt)
function cardTexts(opts) {
  const out = [];
  const take = (v, kind) => { if (typeof v === 'string') out.push([v, kind]); else if (v && typeof v === 'object') { for (const k of ['text', 'label']) if (typeof v[k] === 'string') out.push([v[k], kind]); } };
  for (const k of ['cards', 'items']) for (const v of [].concat((opts && opts[k]) || [])) take(v, 'card');
  for (const k of ['slots', 'choices']) for (const v of [].concat((opts && opts[k]) || [])) take(v, 'opt');
  if (opts && typeof opts.basket === 'string') out.push([opts.basket, 'card']);
  if (opts && typeof opts.situation === 'string') out.push([opts.situation, 'prompt']);
  return out;
}

// ---- 대상 모으기 ----
const fw = loadFramework();
const mf = loadModuleFiles();
const all = [...mf.byId.values()].map((x) => Object.assign({ __file: x.file }, x.m)).filter((m) => m && m.id);
const pick = (() => {
  if (flag('--all')) return () => true;
  if (PM.MODULE_ID.test(target)) return (m) => m.id === target;
  const [d, code] = target.split('/');
  const band = code ? PM.bandByLabel(code) : null;
  if (code && !band) { console.error(`학년군 code 가 아님: ${code} (${PM.BANDS.map((b) => b.code).join('·')})`); process.exit(2); }
  return (m) => m.domain === d && (!band || m.band === band.label);
})();
const chosen = all.filter(pick);
for (const e of [...fw.errors, ...mf.errors]) failAt('파일', '읽기', e);
if (!chosen.length && !lines.length) { console.error(`검사할 모듈이 없음: ${target || '--all'}`); process.exit(2); }
const byId = new Map(all.map((m) => [m.id, m]));
const get = (id) => byId.get(id);

// ---- 정적: 모듈 ----
const planOf = (m) => { const d = fw.domains.get(m.domain); const b = d && d.bands && d.bands[m.band]; return { d, b, plan: b && (b.modules || []).find((x) => x.id === m.id), topic: b && (b.topics || []).find((t) => t.id === m.topic) }; };
// 문항·출구 질문의 levels[단계]는 toolOptions 만 읽힌다(player.js·check-reach mounted) — options 칸은 조용히 무시되어 단계별 판이 안 바뀐다
const levelOptionsSlip = (it, k, F) => { for (const [lv, v] of Object.entries((it && it.levels) || {})) if (v && typeof v === 'object' && Object.prototype.hasOwnProperty.call(v, 'options')) F(k, `levels.${lv} 에 options 칸 — 단계별 교구 옵션은 toolOptions 로 쓴다(options 는 플레이어가 읽지 않음)`); };

function staticModule(m) {
  const F = (where, why) => failAt(m.id, where, why);
  for (const t of PM.shapeErrors(m)) F('형식', t);
  if (m.__file !== `modules/${m.domain}/${(PM.bandByLabel(m.band) || {}).code}.js`) F('파일', `${m.domain}·${m.band} 모듈은 modules/${m.domain}/${(PM.bandByLabel(m.band) || {}).code}.js 에 둔다(지금 ${m.__file})`);
  const { d, b, plan, topic } = planOf(m);
  if (!d) F('체계도', `영역 ${m.domain} 가 체계도(framework/*.json)에 없음`);
  else if (!b) F('체계도', `영역 ${m.domain} 에 학년군 ${m.band} 가 없음`);
  else {
    if (!topic) F('체계도', `주제 ${m.topic} 가 체계도에 없음`);
    else {
      if (!norm(topic.source)) F('근거', `주제 ${m.topic} 의 source(공식 근거)가 비어 있음`);
      if (!norm(topic.objective)) F('근거', `주제 ${m.topic} 의 objective 가 비어 있음`);
      for (const g of m.grades || []) if (!(topic.grades || []).includes(g)) F('학년', `${g}학년은 주제 grades(${(topic.grades || []).join(',')})에 없음`);
    }
    if (!plan) F('체계도', '체계도 modules 에 없는 모듈 id — 체계도 계획의 id 와 맞춘다');
    else {
      const t = { intro: 'intro', activity: 'activity', wrap: 'wrap' }[m.type];
      if (plan.type !== t) F('체계도', `type ${m.type} ≠ 계획 ${plan.type}`);
      if (plan.topic !== m.topic) F('체계도', `topic ${m.topic} ≠ 계획 ${plan.topic}`);
      if ((plan.tool || null) !== (m.tool || null)) F('체계도', `tool ${m.tool} ≠ 계획 ${plan.tool}`);
      if (plan.minutes !== m.minutes) F('체계도', `minutes ${m.minutes} ≠ 계획 ${plan.minutes}`);
    }
  }
  const R = BAND_RULES[m.band]; if (!R) return;
  const said = []; // [where, text, kind]
  if (m.type === 'intro' && m.intro) {
    said.push(['intro.student', m.intro.student, 'say']);
    for (const [c, kind] of cardTexts(m.intro.demo && m.intro.demo.options)) said.push(['intro.demo', c, kind]);
    if (!norm(m.intro.teacher) || norm(m.intro.teacher).length < 20) F('intro.teacher', '교사 발문이 없거나 너무 짧음');
    else if (EMPTY_TEACHER.test(m.intro.teacher)) F('intro.teacher', "교사 발문에 '~를 지도한다' 같은 빈말");
  }
  if (m.type === 'activity' && m.activity) {
    const a = m.activity;
    said.push(['activity.task', a.task, 'say']);
    if (!norm(a.teacher) || norm(a.teacher).length < 20) F('activity.teacher', '교사 발문이 없거나 너무 짧음');
    else if (EMPTY_TEACHER.test(a.teacher)) F('activity.teacher', "교사 발문에 '~를 지도한다' 같은 빈말");
    const items = a.items || [];
    if (items.length < 3 || items.length > 6) F('activity', `문항 ${items.length}개 — 3~6개여야 함`);
    if (!items.some((it) => !it.free)) F('activity', '문항이 모두 짝 활동(free) — 교구로 확인하는 문항이 있어야 함');
    items.forEach((it, i) => {
      const k = `item.${i + 1}`;
      if (!it.free && !it.target) F(k, 'target 없음');
      levelOptionsSlip(it, k, F);
      for (const t of itemShape(it, (n) => notes.push(`${m.id} ${k}: ${n}`))) F(k, t);
      said.push([k, it.prompt, 'prompt']);
      for (const v of Object.values(it.levels || {})) if (v && v.prompt) said.push([k, v.prompt, 'prompt']);
      for (const lv of [null, 'easy', 'base', 'challenge']) {
        const o = lv ? ((it.levels || {})[lv] || {}).toolOptions : it.toolOptions;
        if (o) for (const [c, kind] of cardTexts(Object.assign({}, a.options || {}, o))) said.push([k, c, kind]);
      }
    });
    const ws = (m.worksheet && m.worksheet.items) || [];
    ws.forEach((it, i) => { for (const t of worksheetShape(it)) F(`worksheet.${i + 1}`, t); said.push([`worksheet.${i + 1}`, it.prompt, 'prompt']); });
    // 교구 범위: 활동 하나만 든 차시 모양으로 본다
    lessonReach({ stages: [{ id: 'main', activities: [Object.assign({ id: 'a1' }, a)] }] }, (w, why) => F(w.replace(/^a1\./, 'item.'), why));
  }
  if (m.type === 'wrap' && m.wrap) {
    if (!norm(m.wrap.teacher) || norm(m.wrap.teacher).length < 20) F('wrap.teacher', '교사 발문이 없거나 너무 짧음');
    else if (EMPTY_TEACHER.test(m.wrap.teacher)) F('wrap.teacher', "교사 발문에 '~를 지도한다' 같은 빈말");
    const ex = m.wrap.exitTicket || [];
    if (ex.length < 2 || ex.length > 4) F('wrap', `출구 질문 ${ex.length}개 — 2~4개여야 함`);
    ex.forEach((q, i) => {
      const k = `exit.${i + 1}`;
      said.push([k, q.prompt, 'prompt']);
      if (q.type === 'choice') { if (!(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < (q.options || []).length)) F(k, 'answer 가 options 안의 번호가 아님'); for (const o of q.options || []) said.push([k, o, 'opt']); }
      levelOptionsSlip(q, k, F);
      if (q.type === 'tool') { if (!q.target) F(k, '교구 출구 질문에 target 없음'); for (const [c, kind] of cardTexts(q.options)) said.push([k, c, kind]); }
    });
    // 교구 범위: 출구 교구 질문도 단계마다 본다(chart 고르기 정답이 보기 안인지, timer 차례 카드가 판에 있는지 등) — 정리 모듈만 든 차시 모양으로
    lessonReach({ stages: [{ id: 'wrapup', exitTicket: ex }] }, F);
    const ws = (m.worksheet && m.worksheet.items) || [];
    if (ws.length < 2) F('worksheet', `정리 모듈 활동지 문항 ${ws.length}개 — 2개 이상(활동 모듈 몫과 합쳐 차시마다 4개 이상)`);
    [...ws, ...((m.worksheet && m.worksheet.easy && m.worksheet.easy.items) || [])].forEach((it, i) => { for (const t of worksheetShape(it)) F(`worksheet.${i + 1}`, t); said.push([`worksheet.${i + 1}`, it.prompt, 'prompt']); });
  }
  for (const [where, text, kind] of said) {
    if (typeof text !== 'string') continue;
    const lim = R[kind];
    if (lim && len(text) > lim) F(where, `${m.band} ${({ prompt: '문항 글', say: '학생 글', card: '카드 글', opt: '보기 글' })[kind]} ${len(text)}자 > ${lim}자: "${norm(text).slice(0, 30)}"`);
    for (const [re, why] of R.avoid) if (re.test(text)) F(where, `${why}: "${norm(text).slice(0, 30)}"`);
    if (ASK_HARM.test(text)) F(where, `피해 경험을 묻는 글 — 겪은 일을 꺼내게 하지 않는다: "${norm(text).slice(0, 30)}"`);
  }
  if (PII.test(JSON.stringify(m))) F('모듈', '전화번호·주민번호·전자우편 모양의 값이 있음(학생 개인정보 금지)');
}

// ---- 정적: 학년군·주제 묶음 ----
function staticGroups(mods) {
  const groups = new Map();
  for (const m of mods) { const k = `${m.domain}|${m.band}`; if (!groups.has(k)) groups.set(k, []); groups.get(k).push(m); }
  for (const [k, list] of groups) {
    const [domain, band] = k.split('|');
    const allInBand = all.filter((m) => m.domain === domain && m.band === band);
    const withTool = allInBand.filter((m) => m.tool);
    const cards = withTool.filter((m) => CARD_TOOLS.has(m.tool));
    if (withTool.length >= 5 && cards.length / withTool.length > 0.6) failAt(`${domain}/${band}`, '교구', `카드 계열 교구(${[...CARD_TOOLS].join('·')}) 모듈 ${cards.length}/${withTool.length} = ${Math.round((cards.length / withTool.length) * 100)}% > 60%`);
    const topics = new Map();
    for (const m of allInBand) { if (!topics.has(m.topic)) topics.set(m.topic, []); topics.get(m.topic).push(m); }
    for (const [topic, tm] of topics) {
      if (!list.some((m) => m.topic === topic)) continue;
      const seen = new Map();
      for (const m of tm) {
        const key = `${m.type}|${m.tool}|${norm(m.method)}`;
        if (seen.has(key)) failAt(m.id, '주제', `${seen.get(key)} 와 같은 type·교구·방식 — 주제 안에서 방식을 되풀이하지 않는다`); else seen.set(key, m.id);
      }
      const n = (t) => tm.filter((m) => m.type === t).length;
      const { b } = planOf(tm[0]);
      const planned = ((b && b.modules) || []).filter((x) => x.topic === topic);
      const missing = planned.filter((x) => !byId.has(x.id)).map((x) => x.id);
      notes.push(`${topic}: 도입 ${n('intro')} · 활동 ${n('activity')} · 정리 ${n('wrap')}${missing.length ? ` · 아직 안 쓴 계획 모듈 ${missing.length}개(${missing.join(', ')})` : ''}`);
    }
  }
}

// ---- 정적: 추천 조합 차시(그 학년의 sequences) ----
function recommended(mods) {
  const out = []; const keys = new Set();
  for (const m of mods) for (const g of m.grades || []) keys.add(`${m.domain}|${g}`);
  for (const k of [...keys].sort()) {
    const [domain, g0] = k.split('|'); const g = Number(g0);
    const d = fw.domains.get(domain); if (!d) continue;
    const seqs = PM.sequencesOf(d, g);
    const hours = d.hours && d.hours[g];
    if (seqs.length && hours && seqs.length !== hours) notes.push(`${domain} ${g}학년 추천 조합 ${seqs.length}차시 / 의무 시수 ${hours}`);
    const usedMod = new Map(); const titles = new Map(); const itemKeys = new Map();
    for (const s of seqs) {
      const F = (where, why) => failAt(s.id, where, why);
      for (const id of s.ids) { if (usedMod.has(id)) F('조합', `모듈 ${id} 를 ${usedMod.get(id)} 에서도 씀 — 같은 학년 안에서 되풀이하지 않는다`); else usedMod.set(id, s.id); }
      // 이번 검사 대상 모듈이 하나도 안 든 차시는 조합만 확인한다(아직 내용이 없는 모듈은 진행 알림)
      const mine = s.ids.some((id) => mods.some((m) => m.id === id));
      const r = PM.composeSequence(d, g, s, get);
      if (!r.lesson) { const absent = r.errors.every((e) => e.startsWith('모듈 내용이 아직 없음')); if (absent) notes.push(`${s.id}: ${r.errors.join(' / ')}`); else if (mine) for (const e of r.errors) F('조합', e); continue; }
      if (!mine) continue;
      out.push(r.lesson);
      staticComposed(r.lesson, F, { titles, itemKeys });
    }
  }
  return out;
}
function staticComposed(l, F, ctx) {
  const lid = l.id;
  const want = l.minutes;
  // check-lesson 은 40분만 안다 — 중 45·고 50분 차시의 '≠ 40' 과 분을 따지지 않는 시험 조합의 분 합계는 여기서 따로 본다
  staticLesson(l, lid, (msg) => { const mm = /^단계 분 합계 (\d+) ≠ 40$/.exec(msg); if (mm && (ctx.probe || Number(mm[1]) === want)) return; const x = /^((?:a\d+|exit|worksheet(?:\.easy)?)\.\d+): (.*)$/.exec(msg); F(x ? x[1] : '차시', x ? x[2] : msg); }, (n) => notes.push(`${lid}: ${n}`), { allowEmptyStandards: true });
  if (!ctx.probe) {
    const band = PM.bandOf(l.grade);
    if (band && l.minutes !== band.minutes) F('차시', `분 ${l.minutes} ≠ ${band.label} ${band.minutes}`);
    const acts = l.stages[1].activities;
    if (acts.length < 1 || acts.length > 3) F('main', `전개 활동 ${acts.length}개 — 1~3개`);
    const ex = l.stages[2].exitTicket || [];
    if (ex.length < 2 || ex.length > 4) F('wrapup', `출구 질문 ${ex.length}개 — 2~4개`);
    if ((l.worksheet.items || []).length < 4) F('worksheet', `활동지 문항 ${(l.worksheet.items || []).length}개 — 4개 이상(활동 모듈 worksheet 와 정리 모듈 worksheet 를 합친 수)`);
    const title = norm(l.title);
    if (title.length > 40) F('title', `제목 ${title.length}자 > 40자 — 추천 조합에 title 을 준다`);
    if (ctx.titles.has(title)) F('title', `제목이 ${ctx.titles.get(title)} 와 같음 — 추천 조합에 title 을 준다`); else ctx.titles.set(title, lid);
    if (!l.stages.some((s) => /["“”‘’']/.test([s.teacher, ...(s.activities || []).map((a) => a.teacher)].join(' ')))) F('teacher', '교사 발문에 실제로 말할 문장("…")이 하나도 없음');
    acts.forEach((a) => (a.items || []).forEach((it, i) => {
      const k = `${norm(it.prompt)}|${JSON.stringify(it.target ?? null)}`;
      if (!it.free && ctx.itemKeys.has(k)) F(`${a.id}.${i + 1}`, `문항(글+정답)이 ${ctx.itemKeys.get(k)} 와 같음 — 같은 학년 안에서 반복하지 않는다`); else ctx.itemKeys.set(k, `${lid} ${a.id}.${i + 1}`);
    }));
  }
  if (PII.test(JSON.stringify(l))) F('차시', '전화번호·주민번호·전자우편 모양의 값이 있음');
}

// ---- 시험 조합: 추천 조합에 안 들어간 모듈을 브라우저로 돌릴 차시 ----
function probes(mods, covered) {
  const out = [];
  const topics = new Map();
  for (const m of mods) { if (!topics.has(m.topic)) topics.set(m.topic, []); topics.get(m.topic).push(m); }
  for (const [, tm0] of topics) {
    const tm = all.filter((m) => m.topic === tm0[0].topic && !PM.shapeErrors(m).length);
    const I = tm.filter((m) => m.type === 'intro'); const A = tm.filter((m) => m.type === 'activity'); const W = tm.filter((m) => m.type === 'wrap');
    const need = tm0.filter((m) => !covered.has(m.id) && !PM.shapeErrors(m).length);
    if (!need.length || !I.length || !A.length || !W.length) { for (const m of need) if (!(I.length && A.length && W.length)) notes.push(`${m.id}: 같은 주제에 도입·활동·정리가 다 있어야 브라우저 검사를 함(시험 조합 불가)`); continue; }
    const nI = need.filter((m) => m.type === 'intro'); const nA = need.filter((m) => m.type === 'activity'); const nW = need.filter((m) => m.type === 'wrap');
    const count = Math.max(nI.length, nW.length, Math.ceil(nA.length / 3));
    for (let k = 0; k < count; k++) {
      const acts = (nA.length ? nA.slice(k * 3, k * 3 + 3) : []);
      const ids = [(nI[k] || I[0]).id, ...(acts.length ? acts : [A[0]]).map((m) => m.id), (nW[k] || W[0]).id];
      const d = fw.domains.get(tm0[0].domain) || { code: tm0[0].domain, title: tm0[0].domain };
      const grade = (tm0[0].grades || [])[0];
      const id = PM.customIdOf(grade, d.code, ids);
      const r = PM.compose(ids.map(get), { id, grade, domain: d, topic: PM.topicOf(d, tm0[0].topic) || {}, probe: true });
      if (!r.lesson) { for (const e of r.errors) failAt(id, '시험 조합', e); continue; }
      r.lesson.query = `compose=${ids.map(encodeURIComponent).join(',')}&grade=${grade}&probe=1`;
      out.push(r.lesson);
    }
  }
  return out;
}

// ---- 실행 ----
for (const m of chosen) staticModule(m);
staticGroups(chosen);
const rec = recommended(chosen);
const covered = new Set(rec.flatMap((l) => l.modules));
const prb = probes(chosen, covered);
for (const l of prb) staticComposed(l, (w, why) => failAt(l.id, w, why), { probe: true });
const t0 = Date.now();
const lessons = [...rec, ...prb];
if (!flag('--static') && lessons.length) {
  if (!(await hubUp())) { console.error(`허브(${hub})에 닿지 않음 — node edu-content-pool/classroom-hub.mjs --port <포트> 를 먼저 띄우거나 --static`); process.exit(2); }
  // 플레이어는 modules/<영역>/_framework.js 를 읽는다 — 검사하는 영역의 것은 체계도와 같게 맞춘다(같은 내용이면 쓰지 않음)
  for (const d of new Set(lessons.map((l) => l.modules[0].split('.')[0]))) writeDomainFramework(d);
  const shots = arg('--shots'); if (shots && !existsSync(shots)) mkdirSync(shots, { recursive: true });
  const { browser, pages } = await openPages();
  const unit = { lessons };
  await dynamicUnit(browser, pages, 'modules', unit, { noPdf: flag('--no-pdf') });
  if (flag('--touch')) await runTouch(browser, pages, [unit]);
  await browser.close();
}
// 차시 자리(a1.2·exit.1·intro…)로 난 실패에 그 자리의 모듈 id 를 붙인다 — 모듈 작성자가 고칠 파일·모듈을 바로 찾게
const owner = new Map(lessons.map((l) => [l.id, l]));
const whose = (line) => {
  const [lid, where] = line.split(' · '); const l = owner.get(lid); if (!l) return line;
  const a = /^a(\d+)\./.exec(where || '');
  const id = a ? l.modules[Number(a[1])] : /^(exit|wrapup)/.test(where || '') ? l.modules[l.modules.length - 1] : /^intro|도입/.test(where || '') ? l.modules[0] : null;
  return id ? `${line} (모듈 ${id})` : line;
};
for (const line of lines) console.log(whose(line));
if (flag('--verbose')) for (const n of notes) console.error(`  · ${n}`);
console.log(`${lines.length ? '✗' : '✓'} 모듈 ${chosen.length}개 · 추천 조합 차시 ${rec.length}개 · 시험 조합 ${prb.length}개 · 실패 ${lines.length}줄 · ${((Date.now() - t0) / 1000).toFixed(1)}초`);
process.exit(lines.length ? 1 : 0);
