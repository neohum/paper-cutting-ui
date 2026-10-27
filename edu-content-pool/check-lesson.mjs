#!/usr/bin/env node
// 차시 자동 검사 — 정적 계약 + 실브라우저로 40분 흐름을 끝까지 풀고 제출까지 한다.
// 사용: node edu-content-pool/check-lesson.mjs <lessonId> [--hub http://localhost:8790] [--shots <dir>] [--rebuild]
//   --rebuild: dist/<id>/ 번들이 원본보다 오래되었으면 build-bundles.mjs로 다시 묶는다(없으면 알림만)
// classroom-hub.mjs가 떠 있어야 한다. 종료 코드 1 = 실패 항목 있음.
// 다른 스크립트(check-unit.mjs)는 아래 export 함수만 가져다 쓴다 — import해도 검사를 돌리지 않는다.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import vm from 'node:vm';
import { chromium } from 'playwright-core';
import { bundleStale } from './build-bundles.mjs';

const here = dirname(fileURLToPath(import.meta.url));

// 짝 활동(free) 문항은 교구를 움직여야 끝난다 — 조작 가능한 조각에 실제 키를 눌러 상태를 바꾼다
export async function nudge(F, E) {
  const before = await E.evaluate(() => JSON.stringify(window.__pl.tool.getState()));
  const els = F.locator('#tool [tabindex="0"]'); const n = await els.count();
  for (let i = 0; i < Math.min(n, 6); i++) {
    for (const k of ['Enter', 'ArrowRight', 'ArrowUp', ' ']) {
      await els.nth(i).focus().catch(() => {}); await els.nth(i).press(k).catch(() => {});
      if (await E.evaluate((b) => JSON.stringify(window.__pl.tool.getState()) !== b, before)) return true;
    }
  }
  return false;
}
// 확인을 누른 뒤 학생이 보는 글: 피드백 줄(#fb)과 안내 줄(#fb-note, 보일 때만)
export const said = (P) => P.evaluate(() => { const fb = document.querySelector('#fb'); const n = document.querySelector('#fb-note'); return { fb: (fb?.innerText || '').trim(), no: Boolean(fb?.classList.contains('is-no')), note: n && !n.hidden ? n.innerText.trim() : '' }; });
// 틀린 확인은 피드백이 비면 안 되고, 세지 않은 확인(잠김·바꾸지 않음)도 안내 줄로 답해야 한다
export async function saidSomething(P, key, how, counted, fail) {
  const r = await said(P);
  if (counted && r.no && !r.fb) fail(`${key}: 틀린 확인(${how}) 뒤 피드백이 비어 있음`);
  else if (!counted && !r.note && !r.fb) fail(`${key}: 확인(${how})을 눌렀는데 아무 글도 없음`);
  return r;
}
// 콘솔 오류 중 검사에서 빼는 것: 외부 글꼴·아이콘·파비콘, 그리고 아직 없을 수 있는 카드 공통 판(_cards.js — 레지스트리가 조용히 건너뛴다)
export const ignorableConsole = (m) => /fonts|uicons|favicon/.test(m.text()) || /\/engine\/tools\/_cards\.js(\?|$)/.test((m.location && m.location().url) || '');

// ---- 1) 정적 계약 ----
// 예상 → 관찰 → 정리: items[n].predict = { q, options[, answer] }, items[n].conclude = '한 문장', items[n].reveal = 'after-check'
export function itemShape(it, note = () => {}) {
  const out = [];
  if (it.predict != null) {
    const p = it.predict;
    if (typeof p !== 'object' || Array.isArray(p)) out.push('predict는 { q, options } 객체여야 함');
    else {
      if (typeof p.q !== 'string' || !p.q.trim()) out.push('predict.q(예상 질문)가 비어 있음');
      if (!Array.isArray(p.options) || p.options.length < 2 || p.options.length > 5 || !p.options.every((o) => typeof o === 'string' && o.trim())) out.push('predict.options는 글자 보기 2~5개여야 함');
      else if (new Set(p.options.map((o) => o.trim())).size !== p.options.length) out.push('predict.options에 같은 보기가 있음');
      if (p.answer != null && !(Number.isInteger(p.answer) && p.answer >= 0 && p.answer < (p.options || []).length)) out.push('predict.answer는 options 안의 번호(0부터)여야 함');
      const extra = Object.keys(p).filter((k) => !['q', 'options', 'answer'].includes(k));
      if (extra.length) out.push(`predict에 모르는 칸: ${extra.join(', ')}`);
    }
  }
  if (it.conclude != null && (typeof it.conclude !== 'string' || !it.conclude.trim() || it.conclude.length > 120)) out.push('conclude는 120자 이하 한 문장이어야 함');
  if (it.reveal != null && it.reveal !== 'after-check') out.push(`reveal은 'after-check'만 쓸 수 있음: ${it.reveal}`);
  // 힌트 사다리 글: hints = ['1단계 개념', '2단계 틀린 단계 짚기', '3단계 풀이'] — 있으면 교구 힌트 글 대신 단계별로 쓴다
  if (it.hints != null) {
    if (!Array.isArray(it.hints) || !it.hints.length || it.hints.length > 3 || !it.hints.every((h) => typeof h === 'string' && h.trim() && h.length <= 200)) out.push('hints는 글자 1~3개 배열이어야 함(단계 1·2·3, 200자 이하)');
    else for (const lv of ['easy', 'base', 'challenge']) { const leak = targetLeak(it.hints[0], itemAt(it, lv).target); if (leak) { out.push(`hints[0](1단계)는 개념만 — ${lv} 정답 값 ${leak}이(가) 들어 있음`); break; } }
  }
  if (it.maxAttempts != null && !(Number.isInteger(it.maxAttempts) && it.maxAttempts >= 1 && it.maxAttempts <= 10)) out.push('maxAttempts는 1~10 정수여야 함');
  if (it.free && (it.hints != null || it.maxAttempts != null)) out.push('짝 활동(free) 문항에는 hints·maxAttempts를 쓰지 않음');
  // 문항별 단계 시작: levels = { easy?|base?|challenge?: { state?, toolOptions? } }
  if (it.levels != null) {
    if (typeof it.levels !== 'object' || Array.isArray(it.levels)) out.push('levels는 { easy?, base?, challenge? } 객체여야 함');
    else for (const [k, v] of Object.entries(it.levels)) {
      if (!['easy', 'base', 'challenge'].includes(k)) { out.push(`levels에 모르는 단계: ${k}`); continue; }
      if (!v || typeof v !== 'object' || Array.isArray(v)) { out.push(`levels.${k}는 { state?, toolOptions? } 객체여야 함`); continue; }
      const extra = Object.keys(v).filter((x) => !['state', 'toolOptions', 'prompt', 'target'].includes(x));
      if (extra.length) out.push(`levels.${k}에 모르는 칸: ${extra.join(', ')}`);
      if (!['state', 'toolOptions', 'prompt', 'target'].some((x) => x in v)) out.push(`levels.${k}가 비어 있음(state·toolOptions·prompt·target 중 하나는 있어야 함)`);
      // 단계별 문항: prompt는 글, target은 문항 target과 같은 모양(객체)이고 free 문항에는 쓰지 않는다
      if (v.prompt != null && (typeof v.prompt !== 'string' || !v.prompt.trim() || v.prompt.length > 160)) out.push(`levels.${k}.prompt는 160자 이하 글이어야 함`);
      if (v.target != null) {
        if (it.free) out.push(`levels.${k}.target: 짝 활동(free) 문항에는 target을 쓰지 않음`);
        else if (typeof v.target !== 'object' || Array.isArray(v.target) !== Array.isArray(it.target)) out.push(`levels.${k}.target은 문항 target과 같은 모양이어야 함`);
        else { const ks = (o) => Object.keys(o || {}).sort().join(); if (!Array.isArray(v.target) && ks(v.target) !== ks(it.target)) note(`levels.${k}.target 칸(${ks(v.target)})이 문항 target 칸(${ks(it.target)})과 다름 — 의도한 것인지 확인`); }
        if (v.prompt == null && JSON.stringify(v.target) !== JSON.stringify(it.target)) out.push(`levels.${k}.target을 바꾸면 levels.${k}.prompt도 함께 바꿔야 함(문항 글과 목표가 어긋남)`);
      }
      if (v.state != null && (typeof v.state !== 'object' || Array.isArray(v.state))) out.push(`levels.${k}.state는 교구 상태 객체여야 함`);
      if (v.toolOptions != null && (typeof v.toolOptions !== 'object' || Array.isArray(v.toolOptions))) out.push(`levels.${k}.toolOptions는 객체여야 함`);
    }
  }
  return out;
}
// 플레이어 PaperLessons.flow.itemAt과 같은 규칙: 그 단계의 prompt·target이 문항 것을 바꾼다
export function itemAt(item, level) {
  const o = (item && item.levels && item.levels[level]) || {};
  if (!item || (o.prompt == null && o.target == null)) return item;
  return Object.assign({}, item, o.prompt != null ? { prompt: o.prompt } : {}, o.target != null ? { target: o.target } : {});
}
// 1단계 힌트는 개념·전략만: 목표(target)의 수(0·1 제외)·한글 값이 글에 들어 있으면 그 값을 돌려준다
export function targetLeak(text, target) {
  if (typeof text !== 'string' || !text || target == null) return null;
  const vals = [];
  (function walk(v) {
    if (typeof v === 'number' && Number.isFinite(v) && Math.abs(v) >= 2) vals.push(String(v));
    else if (typeof v === 'string' && /[가-힣]/.test(v)) vals.push(v);
    else if (v && typeof v === 'object') for (const k of Object.keys(v)) walk(v[k]);
  })(target);
  for (const v of vals) {
    // 한두 글자 한글 값('가', '감')은 낱말 속('소리가')이 아니라 따로 쓰였을 때만 센다
    const esc = v.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const hit = /^-?\d/.test(v) ? new RegExp(`(?<![\\d.])${esc}(?![\\d])`).test(text)
      : v.length <= 2 ? new RegExp(`(?<![가-힣])${esc}(?![가-힣])`).test(text) : text.includes(v);
    if (hit) return `'${v}'`;
  }
  return null;
}
// 출구 질문에는 확인 단추가 없다 — '확인을 누르세요' 같은 글은 학생을 헤매게 한다
export const EXIT_CHECK_WORDS = /['‘"“]확인['’"”]|확인\s*(단추|버튼)|확인\s*(을|를)?\s*(누르|눌러|눌렀|눌)/;

// 활동지 표: cells = 미리 채운 칸의 2차원 배열(''는 빈칸), 줄마다 columns 수와 같아야 한다
export function worksheetShape(it) {
  const out = [];
  if (it.type === 'table' && it.cells != null) {
    if (!Array.isArray(it.cells) || !it.cells.length) out.push('table.cells는 줄 배열이어야 함');
    else it.cells.forEach((row, r) => {
      if (!Array.isArray(row) || !row.every((c) => typeof c === 'string')) out.push(`table.cells[${r}]는 글자 배열이어야 함('' = 빈칸)`);
      else if (row.length !== (it.columns || []).length) out.push(`table.cells[${r}] 칸 ${row.length}개 ≠ columns ${(it.columns || []).length}개`);
    });
    if (it.rows != null && Array.isArray(it.cells) && it.rows !== it.cells.length) out.push(`table.rows ${it.rows} ≠ cells 줄 ${it.cells.length} — 하나만 쓰세요`);
  }
  return out;
}
// 성취기준: 과목 머리글자가 차시 과목과 같아야 하고, 단원 목록(units-map)에 같은 과목 코드가 있으면 그 안에 있어야 한다
export const SUBJECT_MARK = { 국어: ['국'], 수학: ['수'], 과학: ['과'], 사회: ['사'], 통합교과: ['바', '슬', '즐'], 도덕: ['도'], 영어: ['영'], 체육: ['체'], 음악: ['음'], 미술: ['미'], 실과: ['실'] };
// opts.allowEmpty: 단원 목록이 비었거나 미확인이라 standards: []로 둔 단원 차시(지어내지 않는다 — CATALOG_BUILD.md 2절)
export function standardsCheck(l, opts = {}) {
  const out = []; const codes = l.standards || [];
  const marks = SUBJECT_MARK[l.subject];
  const markOf = (c) => (/^\[\d([가-힣])\d{2}-\d{2}\]$/.exec(c) || [])[1];
  if (!codes.length) out.push(opts.allowEmpty ? { fail: false, text: 'standards 비움(단원 성취기준 미확인)' } : { fail: true, text: 'standards 없음' });
  for (const c of codes) {
    const m = markOf(c);
    if (!m) out.push({ fail: true, text: `성취기준 형식이 아님: ${c} (예: [4수01-09])` });
    else if (marks && !marks.includes(m)) out.push({ fail: true, text: `성취기준 ${c}가 ${l.subject} 과목 코드(${marks.join('·')})가 아님` });
  }
  if (!marks) out.push({ fail: false, text: `과목 ${l.subject}의 성취기준 머리글자 규칙 없음 — 확인하지 않음` });
  let map = null;
  try { map = JSON.parse(readFileSync(join(here, 'units-map.json'), 'utf8')); } catch (_) { out.push({ fail: false, text: 'units-map.json을 읽지 못해 단원 대조를 건너뜀' }); return out; }
  const u = /^g(\d)-(.+)-(\d학기)-(\d+)$/.exec(l.catalog?.unit || '');
  const unit = u && (map.grades?.[u[1]]?.[u[2]]?.[u[3]] || []).find((x) => String(x.no) === u[4]);
  if (!unit) { out.push({ fail: false, text: `units-map에 단원 ${l.catalog?.unit} 없음 — 성취기준 단원 대조를 건너뜀` }); return out; }
  const same = (unit.standards || []).filter((c) => marks && marks.includes(markOf(c)));
  if (!same.length) { out.push({ fail: false, text: `units-map 단원 ${l.catalog.unit}에 ${l.subject} 성취기준이 아직 없음 — 대조를 건너뜀` }); return out; }
  for (const c of codes) if (markOf(c) && marks.includes(markOf(c)) && !unit.standards.includes(c)) out.push({ fail: true, text: `성취기준 ${c}가 단원 ${l.catalog.unit}(${unit.title}) 목록(${same.join(' ')})에 없음` });
  return out;
}

export const PROMPT_HEAD = 'Layered paper-cut illustration of ';
export const PROMPT_TAIL = ', with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.';
// 단원 차시 id('<단원 id>-<두 자리>', 예: g1-int-2-06-01)는 lessons/units/<단원 id>.js 안에 있다
export const UNIT_LESSON_ID = /^(g\d-[a-z]+-[12]-\d{2})-\d{2}$/;
export function unitOfLesson(id) {
  const m = UNIT_LESSON_ID.exec(id || '');
  return m && !existsSync(join(here, 'lessons/data', `${id}.js`)) && existsSync(join(here, 'lessons/units', `${m[1]}.js`)) ? m[1] : null;
}
export function loadDataLesson(id) {
  const unitId = unitOfLesson(id);
  if (unitId) {
    let unit = null;
    vm.runInNewContext(readFileSync(join(here, 'lessons/units', `${unitId}.js`), 'utf8'), { PaperLessons: { registerUnit(u) { unit = u; }, register() {} } });
    return (unit?.lessons || []).find((l) => l?.id === id);
  }
  let lesson;
  vm.runInNewContext(readFileSync(join(here, 'lessons/data', `${id}.js`), 'utf8'), { PaperLessons: { register(l) { lesson = l; } } });
  return lesson;
}

// 정적 계약(차시 하나) — fail(글)·note(글)로 알린다. opts.allowEmptyStandards: 단원 차시의 standards: [] 허용
export function staticLesson(lesson, id, fail, note, opts = {}) {
  if (!lesson || lesson.id !== id) { fail('register된 id가 파일 이름과 다름'); if (!lesson) return; }
  const st = lesson.stages || [];
  if (st.map((s) => s.id).join() !== 'intro,main,wrapup') fail(`stages 순서가 intro,main,wrapup이 아님: ${st.map((s) => s.id)}`);
  const sum = st.reduce((a, s) => a + s.minutes, 0);
  if (sum !== 40) fail(`단계 분 합계 ${sum} ≠ 40`);
  const main = st.find((s) => s.id === 'main');
  const actSum = (main?.activities || []).reduce((a, x) => a + x.minutes, 0);
  if (main && actSum !== main.minutes) fail(`전개 활동 분 합계 ${actSum} ≠ 전개 ${main.minutes}`);
  for (const a of main?.activities || []) {
    if (!a.levels || !a.levels.easy || !a.levels.base || !a.levels.challenge) fail(`${a.id}: levels easy/base/challenge 필요`);
    if (!a.items?.length) fail(`${a.id}: items 없음`);
    for (const it of a.items || []) if (!it.free && !it.target) fail(`${a.id}: target 없는 문항 "${it.prompt}"`);
    // 단계별 문항도 출구 중복 검사 대상(아래 mainKeys)
    (a.items || []).forEach((it, i) => { for (const m of itemShape(it, note)) fail(`${a.id}.${i + 1}: ${m}`); });
  }
  // 출구 질문이 전개 문항을 그대로 다시 내면 '배운 것을 옮겨 쓰는지'를 재지 못한다
  const norm = (t) => String(t || '').replace(/\s+/g, ' ').trim();
  const mainKeys = new Map((main?.activities || []).flatMap((a) => a.items.flatMap((it, i) => ['easy', 'base', 'challenge'].map((lv) => { const x = itemAt(it, lv); return [`${norm(x.prompt)}|${JSON.stringify(x.target ?? null)}`, `${a.id}.${i + 1}`]; }))));
  (st.find((s) => s.id === 'wrapup')?.exitTicket || []).forEach((q, i) => {
    const same = mainKeys.get(`${norm(q.prompt)}|${JSON.stringify(q.target ?? null)}`);
    if (same) fail(`exit.${i + 1}: 전개 ${same}와 문항·정답이 똑같음 — 숫자나 상황을 바꿔 내야 함`);
    if (EXIT_CHECK_WORDS.test(q.prompt || '')) fail(`exit.${i + 1}: 출구 질문에는 확인 단추가 없는데 '확인'을 누르라고 함: "${q.prompt}"`);
    if (q.type === 'tool' && !q.target) fail(`exit.${i + 1}: 교구 출구 질문에 target 없음`);
  });
  for (const m of standardsCheck(lesson, { allowEmpty: opts.allowEmptyStandards })) (m.fail ? fail : note)(m.text);
  const p = lesson.illustration?.prompt || '';
  if (!p.startsWith(PROMPT_HEAD) || !p.endsWith(PROMPT_TAIL)) fail('illustration.prompt가 지정 문장 틀과 다름');
  // 생성 그림은 선택이다. 적었으면 파일이 있어야 하고, 크롬북·허브에서 가볍게 열리도록 400KB 이하
  const img = lesson.illustration?.image;
  if (img != null) {
    if (!/^img\/[a-z0-9][a-z0-9-]*\.(webp|png|jpe?g)$/.test(img)) fail(`illustration.image는 'img/<소문자-이름>.webp|png|jpg' 모양이어야 함: ${img}`);
    else if (!existsSync(join(here, 'lessons', img))) fail(`illustration.image 파일 없음: lessons/${img}`);
    else if (statSync(join(here, 'lessons', img)).size > 400 * 1024) fail(`illustration.image ${Math.round(statSync(join(here, 'lessons', img)).size / 1024)}KB > 400KB`);
    else note(`그림 ${img} ${Math.round(statSync(join(here, 'lessons', img)).size / 1024)}KB`);
    const size = lesson.illustration.size;
    if (size != null && !(Array.isArray(size) && size.length === 2 && size.every((n) => Number.isInteger(n) && n > 0))) fail('illustration.size는 [가로, 세로] 정수 쌍이어야 함');
  }
  if (!lesson.worksheet?.items?.length) fail('worksheet.items 없음');
  for (const [name, list] of [['worksheet', lesson.worksheet?.items], ['worksheet.easy', lesson.worksheet?.easy?.items]]) (list || []).forEach((it, i) => { for (const m of worksheetShape(it)) fail(`${name}.${i + 1}: ${m}`); });
  if (!/[다]\.$/.test(lesson.objective || '')) fail('objective는 "~할 수 있다."로 끝나야 함');
  if (!lesson.catalog?.unit) fail('catalog.unit 없음');
}

// 시스템 크롬을 쓴다(playwright 번들 브라우저가 없어도 돈다). CHROME_PATH로 덮어쓸 수 있다.
export const findChrome = () => [process.env.CHROME_PATH, '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', 'C:/Program Files/Google/Chrome/Application/chrome.exe', '/usr/bin/google-chrome'].find((p) => p && existsSync(p));

const isMain = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (isMain) await main();

async function main() {
const id = process.argv[2];
const arg = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : d; };
const hub = arg('--hub', 'http://localhost:8790');
const shots = arg('--shots', null);
if (!id) { console.error('usage: check-lesson.mjs <lessonId>'); process.exit(2); }
const fails = []; const notes = [];
const fail = (m) => fails.push(m);
const note = (m) => notes.push(m);
const unitId = unitOfLesson(id);
const lesson = loadDataLesson(id);
// 단원 차시의 성취기준 대조(units-map·units-index)와 단원 묶음은 check-unit.mjs가 맡는다 — 여기서는 비어 있어도 알림만
staticLesson(lesson, id, fail, note, { allowEmptyStandards: !!unitId });
if (unitId) note(`단원 ${unitId}의 차시 — 단원 계약(차시 번호·성취기준·refs)은 check-unit.mjs ${unitId}로 본다`);

// ---- 1.5) 허브 번들(dist/<id>/)이 원본보다 오래되었는가 — 허브 경로 학생은 번들을 받는다 ----
if (!unitId) {
  let stale = bundleStale(id);
  if (stale && process.argv.includes('--rebuild')) {
    execFileSync(process.execPath, [join(here, 'build-bundles.mjs')], { stdio: 'pipe' });
    notes.push(`번들을 다시 묶음(${stale.reason}${stale.newer.length ? `: ${stale.newer.join(', ')}` : ''})`);
    stale = bundleStale(id);
  }
  if (stale) notes.push(`경고: dist/${id}/ 번들이 ${stale.reason === 'missing' ? '없음' : `원본보다 오래됨(${stale.newer.join(', ')})`} — 허브 학생은 옛 판을 받는다. --rebuild로 다시 묶으세요`);
}

const chrome = findChrome();
const browser = await chromium.launch({ executablePath: chrome && existsSync(chrome) ? chrome : undefined, headless: true });
const errors = [];
await browserLesson({ browser, hub, id, lesson, shots, fail, note, errors });
await browser.close();
for (const e of errors) fail(e);
console.log(JSON.stringify({ lesson: id, ok: fails.length === 0, fails, notes }, null, 1));
process.exit(fails.length ? 1 : 0);
}

// ---- 2) 실브라우저: 40분 흐름을 학생처럼 끝까지 풀고 제출한 뒤, 교사 화면에서 문항마다 힌트·오답·쓸어 보기를 본다 ----
export async function browserLesson({ browser, hub, id, lesson, shots, fail, note, errors }) {
const notes = { push: note };
const saidSomething0 = (P, key, how, counted) => saidSomething(P, key, how, counted, fail);
if (shots) mkdirSync(shots, { recursive: true });
const page = await browser.newPage({ viewport: { width: 1366, height: 768 } });
page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));
page.on('console', (m) => { if (m.type() === 'error' && !ignorableConsole(m)) errors.push(`console: ${m.text()}`); });
const base = `${hub}/edu-content-pool/lessons/player.html?lesson=${id}`;
const classCode = `chk-${Date.now() % 100000}`;
try {
  await page.goto(`${base}&class=${classCode}&seat=1&collect=${encodeURIComponent(`${hub}/api/tools/edu-lesson:${id}/submissions`)}`);
  await page.waitForSelector('[data-next]', { timeout: 8000 });
  if (lesson.illustration?.image) {
    // 적어 둔 그림이 실제로 떴는지(못 읽으면 플레이어는 조용히 벡터로 돌아가므로 여기서 잡는다)
    const shown = await page.waitForFunction(() => { const i = document.querySelector('#art img'); return i && i.complete && i.naturalWidth > 0; }, null, { timeout: 4000 }).then(() => true, () => false);
    if (!shown) fail('illustration.image가 도입 화면에 뜨지 않음(벡터로 대체됨)');
  }
  if (shots) await page.screenshot({ path: join(shots, `${id}-1-intro.png`) });
  await page.click('[data-next]');
  let guard = 0; const shotActs = new Set();
  while (guard++ < 40) {
    const where = await page.evaluate(() => window.__pl.lesson.stages[window.__pl.stage].id);
    if (where !== 'main') break;
    const info = await page.evaluate(() => { const S = window.__pl; const a = S.lesson.stages[S.stage].activities[S.act]; return { item: window.PaperLessons.flow.itemAt(a.items[S.item], S.level), act: a.id, key: `${a.id}.${S.item + 1}`, hasSolve: typeof S.tool.solve === 'function' }; });
    if (info.item.predict) {
      // 예상을 고르기 전에는 확인이 잠겨 있어야 한다
      if ((await page.getAttribute('#check', 'aria-disabled')) !== 'true') fail(`${info.key}: 예상을 고르기 전에 확인이 열려 있음`);
      await page.click('[data-predict="0"]');
    }
    if (!info.item.free) {
      // 처음 상태가 이미 정답이면 문항이 무의미하다
      const pre = await page.evaluate((t) => window.__pl.tool.check(t).correct, info.item.target);
      if (pre) fail(`${info.key}: 시작 상태가 이미 정답`);
      if (!info.hasSolve) { fail(`${info.key}: 교구에 solve() 없음`); break; }
      await page.evaluate((t) => window.__pl.tool.solve(t), info.item.target);
      // 오답 피드백(힌트) 경로는 solve 전에 한 번 확인해 두는 대신 check 반환 모양만 본다
    }
    if (info.item.free && !info.item.talk && !(await nudge(page, page))) fail(`${info.key}: 짝 활동 교구를 키보드로 움직일 수 없음`);
    // 활동마다 첫 문항 화면을 한 장씩(활동이 넷 이상인 차시도 빠짐없이)
    if (shots && !shotActs.has(info.act)) { shotActs.add(info.act); await page.screenshot({ path: join(shots, `${id}-2-act-${shotActs.size}.png`) }); }
    await page.click('#check');
    if (!info.item.free) {
      const ok = await page.waitForSelector('#fb.is-ok', { timeout: 3000 }).then(() => true, () => false);
      if (!ok) { fail(`${info.key}: solve 뒤 확인이 정답 처리되지 않음 (${await page.textContent('#fb')})`); break; }
      if (info.item.predict || info.item.conclude) await page.click('#next-item', { timeout: 3000 }).catch(() => fail(`${info.key}: 맞힌 뒤 '다음 문제' 단추가 없음`));
      else await page.waitForTimeout(1300);
      await page.waitForFunction((k) => { const S = window.__pl; const s = S.lesson.stages[S.stage]; return s.id !== 'main' || `${s.activities[S.act].id}.${S.item + 1}` !== k; }, info.key, { timeout: 4000 }).catch(() => {});
    } else if (info.item.predict || info.item.conclude) await page.click('#next-item', { timeout: 3000 }).catch(() => fail(`${info.key}: '다 했어요' 뒤 '다음 문제' 단추가 없음`));
    else await page.waitForTimeout(200);
  }
  // 정리: 출구 질문
  await page.waitForSelector('#exit', { timeout: 5000 });
  const exit = await page.evaluate(() => window.__pl.lesson.stages[2].exitTicket);
  for (let i = 0; i < exit.length; i++) {
    const q = exit[i];
    if (q.type === 'choice') await page.check(`input[name="q${i}"][value="${q.answer}"]`);
    if (q.type === 'mood') await page.check(`input[name="q${i}"][value="good"]`);
    if (q.type === 'short') await page.fill(`textarea[name="q${i}"]`, '자동 검사 답');
    if (q.type === 'tool') {
      // 전개 문항과 똑같이 장착됐는가: 따로 옵션 → 시작 상태 → setTarget으로 세운 교구와 상태·글자가 같아야 한다
      // (출구 교구에 target이 안 넘어가 보기·질문이 목표 없이 만들어지던 문제 — 1학년 모으기 출구 3)
      const same = await page.evaluate((i) => {
        const S = window.__pl; const q = S.lesson.stages[2].exitTicket[i]; const tl = S.exitTools[i];
        if (!tl) return 'missing';
        const box = document.createElement('div'); box.style.cssText = 'position:absolute;left:-9999px;top:0;width:560px'; document.body.appendChild(box);
        try {
          const st = window.PaperLessons.flow.itemStart(q, S.level);
          const ref = window.PaperKit.mount(q.tool, box, Object.assign({}, q.options || {}, st.toolOptions));
          if (st.state && ref.setState) ref.setState(st.state);
          const tq = window.PaperLessons.flow.itemAt(q, S.level).target;
          if (tq && ref.setTarget) ref.setTarget(tq);
          const text = (el) => [...el.querySelectorAll('text, button, label')].map((x) => x.textContent.trim()).filter(Boolean).join('|');
          if (JSON.stringify(ref.getState()) !== JSON.stringify(tl.getState())) return 'state';
          if (text(box) !== text(document.querySelector(`#exit-tool-${i}`))) return 'text';
          return '';
        } finally { box.remove(); }
      }, i);
      if (same) fail(`exit.${i + 1}: 출구 교구가 전개 문항처럼 장착되지 않음(${same === 'missing' ? '교구 없음' : same === 'state' ? '시작 상태 다름' : '보기·글자 다름 — setTarget 누락?'})`);
      const ok = await page.evaluate((i) => { const S = window.__pl; const t = window.PaperLessons.flow.itemAt(S.lesson.stages[2].exitTicket[i], S.level).target; const tl = S.exitTools[i]; if (!tl || !tl.solve) return false; tl.solve(t); return tl.check(t).correct; }, i);
      if (!ok) fail(`exit.${i + 1}: 교구 solve(target) 뒤 check(target).correct가 아님 — 학생이 풀 수 없는 출구 문항`);
    }
  }
  if (shots) await page.screenshot({ path: join(shots, `${id}-3-exit.png`), fullPage: true });
  await page.click('#exit button[type="submit"]');
  await page.waitForSelector('.pl-done', { timeout: 8000 });
  const { sent, result } = await page.evaluate(() => window.__lastResult);
  if (result.score.correct !== result.score.total) fail(`모두 맞혔는데 점수 ${result.score.correct}/${result.score.total}`);
  if (!sent.delivered) fail(`제출 실패: ${sent.routes.join(',')}`);
  const rows = await (await fetch(`${hub}/api/results?class=${classCode}`)).json();
  if (rows.length !== 1) fail(`허브에 결과 ${rows.length}건(1건이어야 함)`);
  // 확인 전 숨김(reveal)·문항별 단계 시작(levels)·틀린 답 만들기 — 교사 화면에서 문항마다 따로 연다(제출 기록에 남지 않게)
  await probeItems();
  // 가로 넘침(크롬북 1366, 휴대폰 375)
  for (const w of [1366, 375]) {
    await page.setViewportSize({ width: w, height: 800 });
    await page.goto(`${base}&class=${classCode}&seat=2`); await page.click('[data-next]'); await page.waitForTimeout(300);
    const ov = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
    if (ov > 1) fail(`${w}px에서 가로 넘침 ${ov}px`);
    if (shots && w === 375) await page.screenshot({ path: join(shots, `${id}-4-mobile.png`), fullPage: true });
  }
  // 인쇄 활동지
  for (const v of ['', '&variant=easy']) {
    await page.setViewportSize({ width: 794, height: 1123 });
    await page.goto(`${base}&role=print${v}`); await page.waitForTimeout(600);
    await page.emulateMedia({ media: 'print' });
    const pdf = await page.pdf({ format: 'A4', printBackground: true, path: shots ? join(shots, `${id}-ws${v ? '-easy' : ''}.pdf`) : undefined });
    const pages = (pdf.toString('latin1').match(/\/Type\s*\/Page[^s]/g) || []).length;
    if (pages > 2) fail(`활동지${v ? '(쉬운)' : ''} ${pages}쪽 — 2쪽 이하여야 함`);
    notes.push(`활동지${v ? '(쉬운)' : ''} ${pages}쪽`);
    // 활동지에 정답 노출(그림 안 글자 중 '정답' 모양) 검사는 교구별 o.print 처리에 맡기고, 화면 캡처로 사람이 본다
    if (shots) await page.screenshot({ path: join(shots, `${id}-ws${v ? '-easy' : ''}.png`), fullPage: true });
    await page.emulateMedia({ media: 'screen' });
  }
} catch (e) {
  fail(`실행 중 오류: ${e.message.split('\n')[0]}`);
}
await page.close();

// 교구 안에 화면으로 보이는 글자만 모은다(숨긴 읽기 값이 드러났는지 견준다) — 페이지 안에서 evaluate로 돈다
function visibleText() {
  const out = [];
  const walk = (n) => {
    for (const c of n.childNodes) {
      if (c.nodeType === 3) { const t = c.textContent.trim(); if (t) out.push(t); continue; }
      if (c.nodeType !== 1 || c.classList.contains('pk-sr')) continue;
      const cs = getComputedStyle(c);
      if (cs.display === 'none' || cs.visibility === 'hidden' || Number(cs.opacity) === 0) continue;
      walk(c);
    }
  };
  walk(document.querySelector('#tool'));
  return out.join(' | ');
}
async function probeItems() {
  const tp = await browser.newPage({ viewport: { width: 1366, height: 768 } });
  tp.on('pageerror', (e) => errors.push(`pageerror(교사 검사): ${e.message}`));
  await tp.goto(`${base}&role=teacher`); await tp.waitForSelector('[data-next]', { timeout: 8000 });
  const acts = lesson.stages[1].activities;
  for (let x = 0; x < acts.length; x++) {
    for (let y = 0; y < acts[x].items.length; y++) {
      const it0 = acts[x].items[y]; const key = `${acts[x].id}.${y + 1}`;
      if (it0.free) continue;
      const it = itemAt(it0, 'base');
      const open = async (level) => { await tp.evaluate(([x, y, lv]) => { window.__pl.level = lv; window.__pl.goto(1, x, y); }, [x, y, level]); await tp.waitForTimeout(120); };
      // 문항별 단계 시작: 그 단계로 열었을 때 시작 상태가 이미 정답이면 안 된다
      for (const lv of Object.keys(it0.levels || {})) {
        await open(lv);
        const tl = itemAt(it0, lv).target;
        const pre = await tp.evaluate((t) => { const r = window.__pl.tool.check(t, { forHint: true }); return r.correct && !r.incomplete; }, tl);
        if (pre) fail(`${key}: levels.${lv} 시작 상태가 이미 정답`);
        // 단계별 목표가 있으면 그 단계에서 풀 수 있어야 한다(solve → check)
        if (it0.levels[lv].target != null) {
          const ok = await tp.evaluate((t) => { const T = window.__pl.tool; if (!T.solve) return false; T.solve(t); return T.check(t, { forHint: true }).correct === true; }, tl);
          if (!ok) fail(`${key}: levels.${lv}.target을 solve 뒤에도 정답이 아님`);
        }
      }
      await open('base');
      // 다 했지만 틀린 답을 만들 수 있는가(모의 수업이 오답 시도를 정직하게 기록하려면 필요) — wrongAnswer(target) 또는 정답 근처 상태
      const w = await tp.evaluate((t) => { const r = window.PaperLessons.flow.findWrong(window.__pl.tool, t, { seed: 7 }); return r && { via: r.via, path: r.path || '' }; }, it.target);
      if (!w) notes.push(`${key}: 다 했지만 틀린 상태를 만들지 못함 — 교구에 wrongAnswer(target)이 필요(모의 수업 오답이 incomplete로 빠짐)`);
      if (it.reveal !== 'after-check') continue;
      await open('base');
      const hasHint = await tp.evaluate(() => typeof window.__pl.tool.hint === 'function');
      // 힌트는 숨긴 값을 드러내지 않는다: 힌트 전후 교구 글자가 같아야 한다
      const t0 = await tp.evaluate(visibleText);
      await tp.click('#hint'); await tp.waitForTimeout(150);
      const t1 = await tp.evaluate(visibleText);
      if (t0 !== t1) fail(`${key}: reveal 문항에서 힌트가 교구 표시를 바꿈(숨긴 값 노출 의심)${hasHint ? '' : ' — 교구에 hint()가 없음'}: "${t0.slice(0, 80)}" → "${t1.slice(0, 80)}"`);
      // 틀린 확인도 숨긴 값을 드러내지 않는다
      if (w) {
        await open('base');
        await tp.evaluate((t) => { window.PaperLessons.flow.findWrong(window.__pl.tool, t, { seed: 7 }); }, it.target);
        const s0 = await tp.evaluate(visibleText);
        await tp.click('#check'); await tp.waitForTimeout(200);
        await saidSomething0(tp, key, '오답 상태', true);
        const ok = await tp.evaluate(() => document.querySelector('#fb').classList.contains('is-ok'));
        const s1 = await tp.evaluate(visibleText);
        if (!ok && s0 !== s1) (hasHint ? (m) => notes.push(`확인 필요: ${m}`) : fail)(`${key}: reveal 문항에서 틀린 확인 뒤 교구 표시가 바뀜: "${s0.slice(0, 80)}" → "${s1.slice(0, 80)}"`);
      }
      if (!hasHint) notes.push(`${key}: reveal 문항 교구에 hint()가 없어 플레이어가 setState로 다시 숨김(교구에 hint()를 넣으세요)`);
    }
  }
  await probeLadder(tp);
  await tp.close();
}

// 한 칸씩 쓸어 보기(학생이 키보드로 한 걸음 바꾸고 확인을 누르기를 되풀이): 닫힐 때까지 확인마다 글이 있어야 하고,
// 틀린 직후 잠긴 동안 다시 누른 확인도 안내 줄로 답해야 한다(말없이 무시되던 문제 — g5-science-light a1.5)
async function stepSweep(tp, open, x, y, it, key) {
  await open(x, y);
  const max = it.maxAttempts || 3; let fast = false;
  for (let k = 0; k <= max; k++) {
    if (await tp.evaluate(() => document.querySelector('#check')?.disabled)) break;
    if (!(await nudge(tp, tp))) { if (k === 0) notes.push(`${key}: 한 칸씩 쓸어 보기 검사를 못 함(키보드로 움직일 수 없음)`); break; }
    const a0 = await tp.evaluate((k) => window.__pl.items[k]?.attempts || 0, key);
    await tp.click('#check'); await tp.waitForTimeout(150);
    const st = await tp.evaluate((k) => { const x = window.__pl.items[k]; return { a: x?.attempts || 0, ok: Boolean(x?.correct) }; }, key);
    if (st.ok) break;
    await saidSomething0(tp, key, `한 칸씩 ${k + 1}번째`, st.a > a0);
    if (!fast && st.a > a0 && !(await tp.evaluate(() => document.querySelector('#check')?.disabled))) {
      // 잠긴 동안 바로 다시 누르기
      fast = true; await nudge(tp, tp); await tp.click('#check', { force: true }); await tp.waitForTimeout(80);
      const a1 = await tp.evaluate((k) => window.__pl.items[k]?.attempts || 0, key);
      const r = await said(tp);
      if (a1 === st.a && !r.note) fail(`${key}: 틀린 직후 잠긴 확인을 다시 눌렀는데 안내가 없음`);
    }
    await tp.waitForTimeout(1250);
  }
}
// 1단계 힌트(시도 전)는 개념만: 교구 hint(target, { level: 1, attempts: 0 })(또는 차시 hints[0])에 정답 값이 없어야 한다.
// 힌트 사다리(단추 글 '힌트' → '힌트 2/3')와 쓸어 보기 막기(reveal 문항은 3번 틀리면 닫힘)를 교사 화면에서 한 문항씩 확인한다.
async function probeLadder(tp) {
  const acts = lesson.stages[1].activities;
  const open = async (x, y) => { await tp.evaluate(([x, y]) => { const S = window.__pl; const a = S.lesson.stages[1].activities[x]; delete S.items[`${a.id}.${y + 1}`]; S.level = 'base'; S.goto(1, x, y); }, [x, y]); await tp.waitForTimeout(120); };
  let ladderDone = false; let sweepDone = false;
  for (let x = 0; x < acts.length; x++) {
    for (let y = 0; y < acts[x].items.length; y++) {
      const it = itemAt(acts[x].items[y], 'base'); const key = `${acts[x].id}.${y + 1}`;
      if (it.free) continue;
      await open(x, y);
      const h1 = await tp.evaluate((it) => { const r = window.PaperLessons.flow.askHint(window.__pl.tool, it.target, { level: 1, attempts: 0, hints: it.hints }); return { hint: r.hint, via: r.via, from: r.from || '' }; }, it);
      const leak = targetLeak(h1.hint, it.target);
      if (leak) (h1.via === 'hint' || h1.from ? fail : (m) => notes.push(`확인 필요: ${m}`))(`${key}: 1단계 힌트(시도 전)에 정답 값 ${leak}이(가) 보임 — 개념·전략만 말해야 함: "${h1.hint.slice(0, 60)}"`);
      if (!ladderDone) {
        // 시도 전: 단추 글 '힌트', 몇 번 눌러도 1단계
        const lab0 = (await tp.textContent('#hint-t'))?.trim();
        await tp.click('#hint'); await tp.waitForTimeout(60); await tp.click('#hint'); await tp.waitForTimeout(60);
        const lv0 = await tp.evaluate((k) => window.__pl.items[k]?.hintLevels?.join(','), key);
        if (lab0 !== '힌트') fail(`${key}: 시도 전 힌트 단추 글이 '힌트'가 아님: ${lab0}`);
        if (lv0 !== '1,1') fail(`${key}: 시도 전 힌트가 1단계에 머물지 않음: [${lv0}]`);
        const w = await tp.evaluate((t) => Boolean(window.PaperLessons.flow.findWrong(window.__pl.tool, t, { seed: 11 })), it.target);
        if (w) {
          await tp.click('#check'); await tp.waitForTimeout(1300);
          await saidSomething0(tp, key, '사다리 첫 오답', true);
          const lab1 = (await tp.textContent('#hint-t').catch(() => ''))?.trim();
          const closed = await tp.evaluate((k) => Boolean(window.__pl.items[k]?.closed), key);
          if (!closed && lab1 !== '힌트 2/3') fail(`${key}: 한 번 틀린 뒤 힌트 단추가 '힌트 2/3'이 아님: ${lab1}`);
          if (!closed) {
            // 바꾸지 않고 다시 누르면 안내 줄이 뜨고, 그 뒤 맞히면 안내 줄은 내용까지 사라져야 한다('맞아요' 옆에 '다시 확인해요'가 남던 문제)
            await tp.click('#check'); await tp.waitForTimeout(100);
            const n0 = await tp.textContent('#fb-note');
            await tp.evaluate((t) => window.__pl.tool.solve(t), it.target);
            await tp.click('#check');
            const ok = await tp.waitForSelector('#fb.is-ok', { timeout: 3000 }).then(() => true, () => false);
            const n1 = await tp.evaluate(() => { const n = document.querySelector('#fb-note'); return n ? `${n.hidden ? 'hidden' : 'shown'}:${n.textContent.trim()}` : 'gone'; });
            if (!/바꾼 뒤에/.test(n0 || '')) notes.push(`${key}: 바꾸지 않은 확인에 안내 줄이 안 보임: "${(n0 || '').trim()}"`);
            if (ok && n1 !== 'hidden:' && n1 !== 'gone') fail(`${key}: 맞힌 뒤에도 지난 안내 줄이 남음: ${n1}`);
          }
          ladderDone = true;
        }
      }
      if (!sweepDone && it.reveal === 'after-check') {
        await open(x, y);
        const max = it.maxAttempts || 3;
        let made = 0;
        for (let k = 0; k < max; k++) {
          const w = await tp.evaluate(([t, k, s]) => { const S = window.__pl; return Boolean(window.PaperLessons.flow.findWrong(S.tool, t, { seed: s, avoid: [S.items[k]?.lastJSON].filter(Boolean) })); }, [it.target, key, 21 + k]);
          if (!w) break;
          await tp.click('#check'); await tp.waitForTimeout(1300); made++;
          await saidSomething0(tp, key, `쓸어 보기 ${made}번째`, true);
        }
        if (made === max) {
          const r = await tp.evaluate((k) => { const x = window.__pl.items[k]; return { closed: x?.closed, correct: x?.correct, attempts: x?.attempts, next: Boolean(document.querySelector('#next-item')), checkOff: document.querySelector('#check')?.disabled }; }, key);
          if (r.closed !== 'attempts' || r.correct || !r.next || !r.checkOff) fail(`${key}: reveal 문항을 ${max}번 틀려도 닫히지 않음(쓸어 보기 막기): ${JSON.stringify(r)}`);
          sweepDone = true;
        }
      }
      if (it.reveal === 'after-check') await stepSweep(tp, open, x, y, it, key);
    }
  }
  if (!ladderDone) notes.push('힌트 사다리 화면 검사를 못 함(틀린 상태를 만들 수 있는 문항 없음)');
  if (!sweepDone && acts.some((a) => a.items.some((it) => it.reveal === 'after-check'))) notes.push('쓸어 보기 막기 화면 검사를 못 함(reveal 문항에서 서로 다른 틀린 상태를 시도 수만큼 만들지 못함)');
  else if (sweepDone) notes.push('힌트 사다리·쓸어 보기 막기 화면 검사 통과');
}
}
export { visibleTextFn as visibleText };

// check-unit이 페이지 안에서 쓰는 같은 함수(교구 안 보이는 글자)
function visibleTextFn() {
  const out = [];
  const walk = (n) => {
    for (const c of n.childNodes) {
      if (c.nodeType === 3) { const t = c.textContent.trim(); if (t) out.push(t); continue; }
      if (c.nodeType !== 1 || c.classList.contains('pk-sr')) continue;
      const cs = getComputedStyle(c);
      if (cs.display === 'none' || cs.visibility === 'hidden' || Number(cs.opacity) === 0) continue;
      walk(c);
    }
  };
  walk(document.querySelector('#tool'));
  return out.join(' | ');
}
