#!/usr/bin/env node
// 단원 자동 검사 — 단원 파일(lessons/units/<단원 id>.js)의 모든 차시를 크롬 하나·페이지 재사용으로 빠르게 본다.
// 사용: node edu-content-pool/check-unit.mjs <단원 id>|--all [--hub http://localhost:8790] [--shots <dir>] [--no-pdf] [--static]
//   --all     lessons/units/*.js 전부(이름이 '_'로 시작하는 예시 단원은 뺀다)
//   --static  브라우저 없이 정적 검사만
//   --no-pdf  활동지 PDF 쪽수 검사를 건너뛴다(화면 렌더 검사는 한다)
// classroom-hub.mjs가 떠 있어야 한다. 실패는 '차시 id · 위치 · 이유' 한 줄씩, 종료 코드 1.
//
// 정적: check-lesson.mjs의 차시 계약(staticLesson) + CATALOG_BUILD.md 2·5절 단원 계약
//   (차시 수·번호 = plan − refs, id 형식, 단원 안 중복 문항·제목, 활동·문항·출구·활동지 개수, illustration.image 없음, 성취기준 과목 코드)
// 동적(차시마다 수 초): 문항마다 시작 상태가 정답 아님 · solve→check · 1단계 힌트 누출 없음 · wrongAnswer(다 했지만 틀림),
//   확인 단추 한 번(실제 화면 경로), 출구 교구 장착·풀이, 학생 화면이 입장 화면 없이 바로 열림·휴대폰 가로 넘침, 활동지 인쇄 렌더.
//   단원마다 한 번: 번호 있는 제출과 번호 없는 제출이 허브에 들어가는지.
import { existsSync, mkdirSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import { chromium } from 'playwright-core';
import { staticLesson, itemAt, targetLeak, findChrome, ignorableConsole, SUBJECT_MARK } from './check-lesson.mjs';
import { PII } from './classroom-hub.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const argv = process.argv.slice(2);
const arg = (k, d) => { const i = argv.indexOf(k); return i >= 0 ? argv[i + 1] : d; };
const flag = (k) => argv.includes(k);
const hub = arg('--hub', 'http://localhost:8790').replace(/\/$/, '');
const shots = arg('--shots', null);
const target = argv.find((a, i) => !a.startsWith('--') && !['--hub', '--shots'].includes(argv[i - 1]));
if (!target && !flag('--all')) { console.error('usage: check-unit.mjs <unitId>|--all [--hub URL] [--shots dir] [--no-pdf] [--static]'); process.exit(2); }

const UNIT_ID = /^g[1-6]-(kor|math|int|soc|mor|sci|pe|mus|art|eng|prac)-[12]-\d{2}$/;
const SUBJECT_CODE = { 국어: 'kor', 수학: 'math', 통합교과: 'int', 사회: 'soc', 도덕: 'mor', 과학: 'sci', 체육: 'pe', 음악: 'mus', 미술: 'art', 영어: 'eng', 실과: 'prac' };
const two = (n) => String(n).padStart(2, '0');
const norm = (t) => String(t ?? '').replace(/\s+/g, ' ').trim();
const index = new Map(JSON.parse(readFileSync(join(here, 'units-index.json'), 'utf8')).units.map((u) => [u.id, u]));
const unitsMap = (() => { try { return JSON.parse(readFileSync(join(here, 'units-map.json'), 'utf8')); } catch (_) { return null; } })();

export function loadUnit(id) {
  let unit = null;
  vm.runInNewContext(readFileSync(join(here, 'lessons/units', `${id}.js`), 'utf8'), { PaperLessons: { registerUnit(u) { unit = u; }, register() {} } });
  return unit;
}

// ---- 실패 모으기: '차시 id · 위치 · 이유' ----
const lines = []; const notes = [];
const failAt = (lessonId, where, why) => lines.push(`${lessonId} · ${where} · ${why}`);
// staticLesson의 글('a1.2: …')은 앞머리를 위치로 떼어 낸다
const splitWhere = (m) => { const x = /^((?:a\d+|exit|worksheet(?:\.easy)?)\.\d+|[a-z]\w*\.\d+): (.*)$/.exec(m); return x ? [x[1], x[2]] : ['차시', m]; };

// 단원 성취기준 단서: units-map(국어·수학·사회·도덕·과학)의 같은 과목 코드, 없으면 units-index의 단원 성취기준
function unitStandards(idx) {
  if (!idx) return { verified: false, list: [] };
  const m = /^g(\d)-(.+)-(\d학기)-(\d+)$/.exec(idx.catalogUnit || '');
  const mu = m && (unitsMap?.grades?.[m[1]]?.[m[2]]?.[m[3]] || []).find((x) => String(x.no) === m[4]);
  const marks = SUBJECT_MARK[idx.subject] || [];
  const same = (list) => (list || []).filter((c) => marks.includes((/^\[\d([가-힣])\d{2}-\d{2}\]$/.exec(c) || [])[1]));
  if (mu) return { verified: mu.standardsVerified !== false, list: same(mu.standards), source: 'units-map' };
  return { verified: true, list: same(idx.standards), source: 'units-index' };
}

// 학생 활동 글: 도입 학생 글, 활동 과제, 문항 글(단계별 글 포함), 출구 질문, 활동지 문항 글, 준비물 — 교사 발문·교구 카드 글·정답 풀이는 뺀다
export function studentText(l) {
  const out = [];
  const add = (v) => { if (typeof v === 'string') out.push(v); };
  const st = l.stages || [];
  for (const s of st) {
    add(s.student);
    for (const a of s.activities || []) { add(a.task); for (const it of a.items || []) { add(it.prompt); for (const v of Object.values(it.levels || {})) add(v && v.prompt); } }
    for (const q of s.exitTicket || []) add(q.prompt);
  }
  for (const it of [...(l.worksheet?.items || []), ...(l.worksheet?.easy?.items || [])]) { add(it.prompt); add(it.instruction); }
  for (const m of [].concat(l.materials || [], l.prep || [])) add(typeof m === 'string' ? m : m && (m.name || m.text));
  return out.join('\n');
}
const HAZARD = /(^|[^편])불(을|이|꽃|에|씨)|촛불|알코올램프|가열|성냥|레이저|돋보기|시험관|약품|용액|전지|전구|회로|칼|가위|송곳|바늘|유리|비커|뜨거운|끓는|조리|공구/;
const EMPTY_TEACHER = /지도한다|지도하기|지도함|안내한다\.?$|설명한다\.?$|확인한다\.?$/;

export function staticUnit(id, unit) {
  const U = (where, why) => failAt(id, where, why);
  if (!unit) { U('단원', 'PaperLessons.registerUnit 호출이 없음'); return; }
  if (unit.id !== id) U('단원', `registerUnit id '${unit.id}' ≠ 파일 이름 '${id}'`);
  if (unit.schema !== 'edu-unit.v1') U('단원', `schema가 'edu-unit.v1'이 아님: ${unit.schema}`);
  const sample = id.startsWith('_');
  if (!sample && !UNIT_ID.test(id)) U('단원', `단원 id 형식이 아님(g<학년>-<과목>-<학기>-<두 자리>): ${id}`);
  const idx = index.get(id);
  if (!sample && !idx) U('단원', 'units-index.json에 없는 단원');
  if (idx) {
    if (unit.catalogUnit !== idx.catalogUnit) U('단원', `catalogUnit '${unit.catalogUnit}' ≠ units-index '${idx.catalogUnit}'`);
    if (unit.grade !== idx.grade) U('단원', `grade ${unit.grade} ≠ ${idx.grade}`);
    if (unit.subject !== idx.subject) U('단원', `subject ${unit.subject} ≠ ${idx.subject}`);
    if (SUBJECT_CODE[unit.subject] && id.split('-')[1] !== SUBJECT_CODE[unit.subject]) U('단원', `단원 id 과목 코드가 ${unit.subject}(${SUBJECT_CODE[unit.subject]})가 아님`);
  }
  if (typeof unit.unitTitle !== 'string' || !unit.unitTitle.trim()) U('단원', 'unitTitle 없음');
  // 진행 방향: 교사용 3~6문장
  const flow = typeof unit.flow === 'string' ? unit.flow.trim() : '';
  const sentences = (flow.match(/[.!?](\s|$)/g) || []).length;
  if (!flow) U('단원', 'flow(진행 방향) 없음');
  else if (sentences < 3 || sentences > 6) U('단원', `flow는 3~6문장이어야 함(지금 ${sentences}문장)`);
  // refs: 이미 있는 차시(units-index existing)를 그 번호로 잇는다
  const refs = unit.refs || {};
  if (typeof refs !== 'object' || Array.isArray(refs)) U('단원', 'refs는 { 번호: 차시 id } 객체여야 함');
  for (const [n, ref] of Object.entries(refs)) {
    if (!existsSync(join(here, 'lessons/data', `${ref}.js`))) U('단원', `refs ${n} → ${ref}: lessons/data/${ref}.js 없음`);
    if (idx && idx.existing[n] !== ref) U('단원', `refs ${n} → ${ref}가 units-index existing(${JSON.stringify(idx.existing)})과 다름`);
  }
  if (idx) for (const [n, ref] of Object.entries(idx.existing || {})) if (!(n in refs)) U('단원', `이미 있는 차시 ${n}번(${ref})을 refs에 이어야 함`);
  const lessons = Array.isArray(unit.lessons) ? unit.lessons : [];
  if (!lessons.length) U('단원', 'lessons 없음');
  // 차시 수·번호 = plan − refs
  const nums = lessons.map((l) => l?.catalog?.lesson);
  if (idx) {
    const want = idx.plan.map((p) => p.i).filter((i) => !(String(i) in refs));
    const got = [...nums].sort((a, b) => a - b);
    if (got.join() !== want.join()) U('단원', `차시 번호 [${got.join(',')}] ≠ plan − refs [${want.join(',')}] (차시 ${got.length}개, 있어야 할 것 ${want.length}개)`);
    if (nums.join() !== got.join()) U('단원', '차시가 번호 순서대로 놓이지 않음');
  }
  const std = unitStandards(idx);
  const titles = new Map(); const itemKeys = new Map();
  for (const l of lessons) {
    const lid = l?.id || '(id 없음)';
    const F = (where, why) => failAt(lid, where, why);
    const n = l?.catalog?.lesson;
    if (!Number.isInteger(n)) { F('catalog', 'catalog.lesson이 정수가 아님'); continue; }
    if (lid !== `${id}-${two(n)}`) F('id', `차시 id는 '${id}-${two(n)}'이어야 함`);
    if (l.catalog.unit !== unit.catalogUnit) F('catalog', `catalog.unit '${l.catalog.unit}' ≠ 단원 catalogUnit '${unit.catalogUnit}'`);
    if (String(n) in refs) F('catalog', `${n}번은 refs(${refs[n]})로 이어 두었으므로 lessons에 쓰지 않음`);
    for (const k of ['grade', 'subject', 'unitTitle']) if (l[k] !== unit[k]) F(k, `${k} '${l[k]}' ≠ 단원 '${unit[k]}'`);
    // 차시 계약 전체(check-lesson.mjs와 같은 검사)
    const allowEmpty = sample || !std.verified || !std.list.length;
    staticLesson(l, lid, (m) => { const [w, why] = splitWhere(m); F(w, why); }, (m) => notes.push(`${lid}: ${m}`), { allowEmptyStandards: allowEmpty });
    // 성취기준: units-map이 없는 과목은 units-index 단원 목록 안에서만
    if (std.source === 'units-index' && std.list.length) for (const c of l.standards || []) if (!std.list.includes(c)) F('standards', `${c}가 단원 성취기준(${std.list.join(' ')})에 없음`);
    if (idx && !std.verified && (l.standards || []).length) F('standards', '단원 성취기준이 미확인(standardsVerified:false)인데 standards를 적음 — []로 둔다');
    // 제목: 카탈로그 제목을 베끼지 않고, 단원 안에서 겹치지 않는다
    const plan = idx?.plan.find((p) => p.i === n);
    const title = norm(l.title);
    if (!title) F('title', '제목 없음');
    else {
      if (title.length > 40) F('title', `제목 ${title.length}자 > 40자`);
      if (plan && (title === norm(plan.title) || title === norm(plan.title.replace(/ - .*$/, '')))) F('title', '카탈로그 제목을 그대로 씀 — 학생이 실제로 하는 일을 쓴 제목으로');
      if (/ - (개념 확인|표현과 연결|적용|성찰|탐구)/.test(title)) F('title', "'주제 - 성격' 틀이 남아 있음");
      if (titles.has(title)) F('title', `제목이 ${titles.get(title)}와 같음`); else titles.set(title, lid);
    }
    if (l.illustration?.image != null) F('illustration', 'illustration.image는 쓰지 않음(단원 그림은 뒤에 따로 만든다)');
    if (!l.illustration?.scene) F('illustration', 'illustration.scene(벡터 장면) 없음');
    const st = l.stages || [];
    const main = st.find((s) => s.id === 'main'); const intro = st.find((s) => s.id === 'intro'); const wrap = st.find((s) => s.id === 'wrapup');
    const acts = main?.activities || [];
    if (acts.length < 1 || acts.length > 3) F('main', `전개 활동 ${acts.length}개 — 1~3개여야 함`);
    let quoted = 0;
    const teacher = (where, t) => {
      if (typeof t !== 'string' || norm(t).length < 20) { F(where, '교사 발문(teacher)이 없거나 너무 짧음'); return; }
      if (EMPTY_TEACHER.test(t)) F(where, "교사 발문에 '~를 지도한다' 같은 빈말 — 실제로 말할 문장과 짚을 오개념을 쓴다");
      if (/["“”‘’']/.test(t)) quoted++;
    };
    teacher('intro', intro?.teacher); teacher('wrapup', wrap?.teacher);
    let allFree = acts.length > 0;
    acts.forEach((a) => {
      teacher(a.id, a.teacher);
      const items = a.items || [];
      if (items.length < 3 || items.length > 6) F(a.id, `문항 ${items.length}개 — 활동마다 3~6개여야 함`);
      if (!a.levels || ['easy', 'base', 'challenge'].some((k) => !a.levels[k])) F(a.id, 'levels 세 단계(easy·base·challenge) 필요');
      if (norm(a.task).length > 200) F(a.id, `task ${norm(a.task).length}자 > 200자`);
      if (!existsSync(join(here, 'engine/tools', `${a.tool}.js`))) F(a.id, `교구 engine/tools/${a.tool}.js 없음`);
      items.forEach((it, i) => {
        const key = `${a.id}.${i + 1}`;
        if (!it.free) allFree = false;
        if (norm(it.prompt).length > 160) F(key, `문항 글 ${norm(it.prompt).length}자 > 160자`);
        for (const lv of ['easy', 'base', 'challenge']) {
          const x = itemAt(it, lv);
          if (it.free && lv !== 'base') continue;
          const k = `${norm(x.prompt)}|${JSON.stringify(x.target ?? null)}`;
          const at = `${lid} ${key}`;
          if (itemKeys.has(k) && itemKeys.get(k) !== at) F(key, `문항(글+정답)이 ${itemKeys.get(k)}와 같음 — 단원 안에서 반복하지 않는다`);
          else itemKeys.set(k, at);
        }
      });
    });
    if (allFree && !['체육', '미술', '음악'].includes(l.subject)) F('main', '전개 문항이 모두 짝 활동(free) — 엔진 교구로 확인하는 문항이 있어야 함');
    if (lessons.length && quoted === 0) F('teacher', '교사 발문에 실제로 말할 문장("…")이 하나도 없음');
    const exits = wrap?.exitTicket || [];
    if (exits.length < 2 || exits.length > 4) F('wrapup', `출구 질문 ${exits.length}개 — 2~4개여야 함`);
    exits.forEach((q, i) => {
      if (norm(q.prompt).length > 160) F(`exit.${i + 1}`, `출구 질문 글 ${norm(q.prompt).length}자 > 160자`);
      if (q.type === 'choice' && !(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < (q.options || []).length)) F(`exit.${i + 1}`, 'answer가 options 안의 번호가 아님');
      if (q.tool && !existsSync(join(here, 'engine/tools', `${q.tool}.js`))) F(`exit.${i + 1}`, `교구 engine/tools/${q.tool}.js 없음`);
      const k = `${norm(q.prompt)}|${JSON.stringify(q.target ?? null)}`;
      if (q.type !== 'mood' && itemKeys.has(k) && !itemKeys.get(k).startsWith(lid)) F(`exit.${i + 1}`, `문항이 ${itemKeys.get(k)}와 같음`);
      else if (q.type !== 'mood') itemKeys.set(k, `${lid} exit.${i + 1}`);
    });
    const ws = l.worksheet?.items || [];
    if (ws.length < 4) F('worksheet', `활동지 문항 ${ws.length}개 — 4개 이상이어야 함`);
    if (intro && norm(intro.student).length > 200) F('intro', `학생 글 ${norm(intro.student).length}자 > 200자`);
    // 안전: 체육은 언제나, 과학·실과는 위험한 도구·불·약품이 나오면
    const text = JSON.stringify(l);
    // 위험한 도구·불·약품은 학생이 실제로 하는 활동 글(도입 학생 글·과제·문항·출구·활동지 글·준비물)에 나올 때만 센다 —
    // 교사 발문의 예시('돋보기로 해를 보면…')나 분류할 카드 글('옛날 칼')은 safety[]를 요구하지 않는다
    const hz = HAZARD.exec(studentText(l));
    if (!(l.safety || []).length && (l.subject === '체육' || (['과학', '실과'].includes(l.subject) && hz))) F('safety', `${l.subject} 차시${l.subject === '체육' ? '' : `(실험·도구 — 학생 활동 글의 '${hz[0]}')`}에 safety[] 없음`);
    if (PII.test(text)) F('차시', '전화번호·주민번호·전자우편 모양의 값이 있음(학생 개인정보 금지)');
  }
}

// ---- 동적: 크롬 하나, 교사·인쇄·학생 페이지를 재사용 ----
async function dynamicUnit(browser, pages, id, unit, opts) {
  const lessons = unit.lessons || [];
  let submitted = false;
  for (const l of lessons) {
    const lid = l.id; const F = (where, why) => failAt(lid, where, why);
    const errs = []; pages.sink = errs;
    const t0 = Date.now();
    const base = `${hub}/edu-content-pool/lessons/player.html?lesson=${encodeURIComponent(lid)}`;
    try {
      // 1) 교사 화면: 문항마다 교구를 직접 부른다(학생처럼 끝까지 풀지 않는다 — 그것은 check-lesson.mjs가 한다)
      const T = pages.teacher;
      await T.goto(`${base}&role=teacher`);
      await T.waitForSelector('[data-next]', { timeout: 8000 });
      if (shots) await T.screenshot({ path: join(shots, `${lid}-1-intro.png`) });
      const r = await T.evaluate(() => {
        const S = window.__pl; const PL = window.PaperLessons; const Fl = PL.flow; const out = { items: [], exits: [], ui: null };
        const acts = S.lesson.stages[1].activities;
        const open = (x, y, lv) => { const a = acts[x]; delete S.items[`${a.id}.${y + 1}`]; S.level = lv; S.goto(1, x, y); return S.tool; };
        for (let x = 0; x < acts.length; x++) {
          for (let y = 0; y < acts[x].items.length; y++) {
            const it0 = acts[x].items[y]; const key = `${acts[x].id}.${y + 1}`; const row = { key, problems: [] };
            out.items.push(row);
            try {
              if (it0.free) {
                // 말하기만 하는 짝 활동(talk: true)은 교구를 움직이지 않아도 '다 했어요'가 된다(player.js) — 조각이 없어도 된다
                if (it0.talk) continue;
                open(x, y, 'base');
                // 플레이어는 교구 상태가 한 번은 바뀌어야 '다 했어요'를 받는다(player.js) — 조각이 있는지가 아니라 실제로 상태가 바뀌는지 본다
                // (check-lesson.mjs nudge와 같은 키: Enter·→·↑·Space, 단추는 누르기, 입력 칸은 값 넣기)
                const box = document.querySelector('#tool');
                const T0 = S.tool; const before = JSON.stringify(T0.getState());
                const moved = () => JSON.stringify(T0.getState()) !== before;
                let ok = false;
                for (const el of [...box.querySelectorAll('[tabindex="0"], button, input, select, textarea, [role="button"]')].slice(0, 8)) {
                  if (el.disabled) continue;
                  if (/^(INPUT|TEXTAREA)$/.test(el.tagName)) { el.value = '1'; el.dispatchEvent(new Event('input', { bubbles: true })); el.dispatchEvent(new Event('change', { bubbles: true })); }
                  else if (el.tagName === 'SELECT') { el.selectedIndex = (el.selectedIndex + 1) % Math.max(1, el.options.length); el.dispatchEvent(new Event('change', { bubbles: true })); }
                  else for (const key of ['Enter', 'ArrowRight', 'ArrowUp', ' ']) { el.focus(); el.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true, cancelable: true })); if (moved()) break; }
                  if (!moved() && (el.tagName === 'BUTTON' || el.getAttribute('role') === 'button')) el.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
                  if (moved()) { ok = true; break; }
                }
                if (!ok) row.problems.push('짝 활동 교구를 움직여도 상태가 바뀌지 않음(학생이 \'다 했어요\'를 누를 수 없음) — 교구를 움직이지 않는 말하기 활동이면 talk: true, 아니면 그 문항에 toolOptions(카드·칸 등)를 준다');
                continue;
              }
              // 단계마다 판정: 문항 target을 바꾼 단계뿐 아니라 toolOptions·state만 바꾼 단계(함정 카드를 더한 도전 등)도 그 판으로 풀리는지 본다
              const levels = ['base', ...Object.keys(it0.levels || {}).filter((lv) => lv !== 'base' && ['target', 'toolOptions', 'state'].some((k) => it0.levels[lv][k] != null))];
              for (const lv of levels) {
                const it = Fl.itemAt(it0, lv); const tag = lv === 'base' ? '' : ` (levels.${lv})`;
                let T = open(x, y, lv);
                const pre = T.check(it.target, { forHint: true }) || {};
                if (pre.correct && !pre.incomplete) row.problems.push(`시작 상태가 이미 정답${tag}`);
                if (lv === 'base') {
                  const h = Fl.askHint(T, it.target, { level: 1, attempts: 0, hints: it.hints });
                  row.hint1 = { text: h.hint, via: h.via, from: h.from || '' }; row.target = it.target;
                  T = open(x, y, lv);
                  // 스스로 점검(selfCheck)·아무 크기나 되는 척도(level: 'any')는 틀린 답이 없다 — wrongAnswer가 null이어도 된다(TOOLS.md)
                  // 척도 전 범위([1, steps])를 정답으로 둔 '내 마음 크기' 문항도 같다
                  const steps = (it.toolOptions && it.toolOptions.steps) || (acts[x].options && acts[x].options.steps) || 5;
                  const lvAll = Array.isArray(it.target?.level) && it.target.level[0] <= 1 && it.target.level[1] >= steps;
                  const selfAssess = it.target && typeof it.target === 'object' && (it.target.selfCheck != null || it.target.level === 'any' || lvAll);
                  if (typeof T.wrongAnswer === 'function') {
                    const w = T.wrongAnswer(it.target);
                    if (w == null && selfAssess) row.notes = (row.notes || []).concat('스스로 점검 문항 — 틀린 답 검사를 건너뜀');
                    else if (w == null) row.problems.push('wrongAnswer(target)가 상태를 돌려주지 않음');
                    else {
                      T.setState(JSON.parse(JSON.stringify(w)));
                      const c = T.check(it.target, { forHint: true }) || {};
                      if (c.correct) row.problems.push('wrongAnswer 상태가 정답으로 판정됨');
                      else if (c.incomplete) row.problems.push('wrongAnswer 상태가 incomplete(아직 다 안 함)로 판정됨 — 다 했지만 틀린 상태여야 함');
                    }
                  } else if (!selfAssess) {
                    const w = Fl.findWrong(T, it.target, { seed: 7 });
                    if (!w) row.problems.push('다 했지만 틀린 상태를 만들 수 없음 — 교구에 wrongAnswer(target) 필요');
                  }
                }
                T = open(x, y, lv);
                // 그 단계의 팔레트·카드·보기로 목표를 만들 수 있는가(교구가 알려 줄 수 있을 때 — solve()는 팔레트를 거치지 않을 수 있다)
                if (typeof T.achievable === 'function') { const why = T.achievable(it.target); if (why) row.problems.push(`${why}${tag}`); }
                if (typeof T.solve !== 'function') { row.problems.push('교구에 solve() 없음'); break; }
                T.solve(it.target);
                const c = T.check(it.target) || {};
                if (!c.correct) row.problems.push(`solve 뒤 check가 정답이 아님${tag}: ${c.feedback || ''}`);
              }
            } catch (e) { row.problems.push(`교구 오류: ${e.message}`); }
          }
        }
        // 실제 화면 경로 한 번: 첫 채점 문항을 풀고 확인 단추
        for (let x = 0; x < acts.length && !out.ui; x++) for (let y = 0; y < acts[x].items.length; y++) if (!acts[x].items[y].free) { out.ui = { x, y, predict: Boolean(Fl.itemAt(acts[x].items[y], 'base').predict), target: Fl.itemAt(acts[x].items[y], 'base').target }; break; }
        // 출구: 전개 문항처럼 장착되는가 · 시작이 정답 아님 · solve → check
        S.level = 'base'; S.goto(2);
        S.lesson.stages[2].exitTicket.forEach((q, i) => {
          const row = { key: `exit.${i + 1}`, problems: [] }; out.exits.push(row);
          if (q.type !== 'tool') return;
          try {
            const tl = S.exitTools[i]; if (!tl) { row.problems.push('출구 교구가 장착되지 않음'); return; }
            const box = document.createElement('div'); box.style.cssText = 'position:absolute;left:-9999px;top:0;width:560px'; document.body.appendChild(box);
            try {
              const st = Fl.itemStart(q, S.level);
              const ref = window.PaperKit.mount(q.tool, box, Object.assign({}, q.options || {}, st.toolOptions));
              if (st.state && ref.setState) ref.setState(st.state);
              const tq = Fl.itemAt(q, S.level).target;
              if (tq && ref.setTarget) ref.setTarget(tq);
              if (JSON.stringify(ref.getState()) !== JSON.stringify(tl.getState())) row.problems.push('출구 교구 시작 상태가 전개 문항처럼 장착되지 않음');
            } finally { box.remove(); }
            const t = Fl.itemAt(q, S.level).target;
            const pre = tl.check(t, { forHint: true }) || {};
            if (pre.correct && !pre.incomplete) row.problems.push('출구 교구 시작 상태가 이미 정답');
            if (!tl.solve) row.problems.push('출구 교구에 solve() 없음');
            else { tl.solve(t); if (!tl.check(t).correct) row.problems.push('출구 교구 solve 뒤 check가 정답이 아님'); }
          } catch (e) { row.problems.push(`출구 교구 오류: ${e.message}`); }
        });
        out.overflow = document.documentElement.scrollWidth - innerWidth;
        return out;
      });
      for (const row of [...r.items, ...r.exits]) { for (const p of row.problems) F(row.key, p); for (const m of row.notes || []) notes.push(`${lid} ${row.key}: ${m}`); }
      for (const row of r.items) {
        if (!row.hint1) continue;
        const leak = targetLeak(row.hint1.text, row.target);
        if (leak) (row.hint1.via === 'hint' || row.hint1.from ? (m) => F(row.key, m) : (m) => notes.push(`${lid} ${row.key}: 확인 필요: ${m}`))(`1단계 힌트(시도 전)에 정답 값 ${leak}이(가) 보임: "${row.hint1.text.slice(0, 60)}"`);
      }
      if (r.overflow > 1) F('교사 화면', `1366px에서 가로 넘침 ${r.overflow}px`);
      if (r.ui) {
        await T.evaluate(({ x, y }) => { const S = window.__pl; S.level = 'base'; S.goto(1, x, y); }, r.ui);
        if (r.ui.predict) await T.click('[data-predict="0"]');
        await T.evaluate((t) => window.__pl.tool.solve(t), r.ui.target);
        if (shots) await T.screenshot({ path: join(shots, `${lid}-2-act.png`) });
        await T.click('#check');
        const ok = await T.waitForSelector('#fb.is-ok', { timeout: 3000 }).then(() => true, () => false);
        if (!ok) F('화면', `확인 단추로 정답 처리되지 않음 (${(await T.textContent('#fb').catch(() => '')) || ''})`);
      }
      // 2) 학생 화면(휴대폰 폭): 입장 화면 없이 바로 도입, 전개로 넘어가도 가로 넘침 없음
      const P = pages.student;
      await P.goto(`${base}&role=student`);
      const opened = await P.waitForSelector('[data-next]', { timeout: 8000 }).then(() => true, () => false);
      if (!opened) F('학생 화면', '도입 화면이 바로 열리지 않음');
      if (await P.locator('input[name="seat"], input[name="class"], #join').count()) F('학생 화면', '반 코드·번호 입력 화면이 남아 있음');
      if (opened) {
        await P.click('[data-next]'); await P.waitForSelector('#tool', { timeout: 4000 }).catch(() => F('학생 화면', '전개 교구가 뜨지 않음'));
        const ov = await P.evaluate(() => document.documentElement.scrollWidth - innerWidth);
        if (ov > 1) F('학생 화면', `375px에서 가로 넘침 ${ov}px`);
        if (shots) await P.screenshot({ path: join(shots, `${lid}-3-mobile.png`), fullPage: true });
      }
      // 3) 활동지: 그림 교구가 그려지고 2쪽 이하
      const W = pages.print;
      for (const v of ['', '&variant=easy']) {
        await W.goto(`${base}&role=print${v}`);
        await W.waitForSelector('.edu-exam-sheet', { timeout: 6000 }).catch(() => F(`활동지${v ? '(쉬운)' : ''}`, '활동지가 그려지지 않음'));
        const empty = await W.evaluate(() => [...document.querySelectorAll('.ws-fig')].filter((x) => !x.children.length).length);
        if (empty) F(`활동지${v ? '(쉬운)' : ''}`, `그림 칸 ${empty}개가 비어 있음`);
        if (!opts.noPdf) {
          await W.emulateMedia({ media: 'print' });
          const pdf = await W.pdf({ format: 'A4', printBackground: true, path: shots ? join(shots, `${lid}-ws${v ? '-easy' : ''}.pdf`) : undefined });
          await W.emulateMedia({ media: 'screen' });
          const n = (pdf.toString('latin1').match(/\/Type\s*\/Page[^s]/g) || []).length;
          if (n > 2) F(`활동지${v ? '(쉬운)' : ''}`, `${n}쪽 — 2쪽 이하여야 함`);
        }
      }
      // 4) 제출(단원마다 한 번): 번호 있는 제출과 번호 없는 제출(런처 허브처럼 매개변수 없이)
      if (!submitted) { submitted = true; await submitTwice(pages.student, lid, F); }
    } catch (e) {
      F('실행', `오류: ${e.message.split('\n')[0]}`);
    }
    for (const e of errs) F('브라우저', e);
    notes.push(`${lid} ${((Date.now() - t0) / 1000).toFixed(1)}초`);
  }
}

async function submitTwice(P, lid, F) {
  const cls = `cu-${Date.now() % 100000}`;
  const collect = encodeURIComponent(`${hub}/api/tools/edu-lesson:${lid}/submissions`);
  for (const seat of ['1', '']) {
    await P.goto(`${hub}/edu-content-pool/lessons/player.html?lesson=${encodeURIComponent(lid)}&class=${cls}${seat ? `&seat=${seat}` : ''}&collect=${collect}`);
    await P.waitForSelector('[data-next]', { timeout: 8000 });
    await P.evaluate(() => window.__pl.goto(2));
    const exit = await P.evaluate(() => window.__pl.lesson.stages[2].exitTicket);
    for (let i = 0; i < exit.length; i++) {
      const q = exit[i];
      if (q.type === 'choice') await P.check(`input[name="q${i}"][value="${q.answer}"]`);
      if (q.type === 'mood') await P.check(`input[name="q${i}"][value="good"]`);
      if (q.type === 'short') await P.fill(`textarea[name="q${i}"]`, '자동 검사 답');
      if (q.type === 'tool') await P.evaluate(({ i, t }) => window.__pl.exitTools[i].solve(t), { i, t: q.target });
    }
    await P.click('#exit button[type="submit"]');
    if (await P.locator('#exit-warn:not([hidden])').count()) await P.click('#exit button[type="submit"]');
    const done = await P.waitForSelector('.pl-done', { timeout: 8000 }).then(() => true, () => false);
    if (!done) { F('제출', `${seat ? '번호 있는' : '번호 없는'} 제출 화면이 끝나지 않음`); continue; }
    const { sent, result } = await P.evaluate(() => ({ sent: window.__lastResult.sent, result: window.__lastResult.result }));
    if (!sent.delivered) F('제출', `${seat ? '번호 있는' : '번호 없는'} 제출이 허브에 가지 않음: ${sent.routes.join(',')}`);
    if (!seat && !/-d[a-z0-9]{8}$/.test(result.studentKey || '')) F('제출', `번호 없는 제출의 studentKey가 기기 키가 아님: ${result.studentKey}`);
  }
  const rows = await (await fetch(`${hub}/api/results?class=${cls}`)).json();
  if (rows.length !== 2) F('제출', `허브에 결과 ${rows.length}건(번호 있는 것·없는 것 2건이어야 함)`);
}

// ---- 실행 ----
const unitsDir = join(here, 'lessons/units');
const ids = flag('--all')
  ? (existsSync(unitsDir) ? readdirSync(unitsDir).filter((f) => f.endsWith('.js') && !f.startsWith('_') && f !== 'index.js').map((f) => f.slice(0, -3)).sort() : [])
  : [target];
if (!ids.length) { console.error('검사할 단원 파일이 없음'); process.exit(2); }
const units = [];
for (const id of ids) {
  if (!existsSync(join(unitsDir, `${id}.js`))) { failAt(id, '단원', `lessons/units/${id}.js 없음`); continue; }
  let unit = null;
  try { unit = loadUnit(id); } catch (e) { failAt(id, '단원', `파일을 읽지 못함: ${e.message.split('\n')[0]}`); continue; }
  staticUnit(id, unit);
  units.push([id, unit]);
}
const t0 = Date.now();
if (!flag('--static') && units.length) {
  const up = await fetch(`${hub}/api/results?class=__ping`).then((r) => r.ok, () => false);
  if (!up) { console.error(`허브(${hub})에 닿지 않음 — node edu-content-pool/classroom-hub.mjs --port <포트> 를 먼저 띄우거나 --static`); process.exit(2); }
  if (shots) mkdirSync(shots, { recursive: true });
  const chrome = findChrome();
  const browser = await chromium.launch({ executablePath: chrome || undefined, headless: true });
  const pages = { sink: [] };
  const mk = async (vp) => {
    const p = await browser.newPage({ viewport: vp });
    p.on('pageerror', (e) => pages.sink.push(`pageerror: ${e.message}`));
    p.on('console', (m) => { if (m.type() === 'error' && !ignorableConsole(m)) pages.sink.push(`console: ${m.text()}`); });
    return p;
  };
  pages.teacher = await mk({ width: 1366, height: 768 });
  pages.student = await mk({ width: 375, height: 800 });
  pages.print = await mk({ width: 794, height: 1123 });
  for (const [id, unit] of units) await dynamicUnit(browser, pages, id, unit, { noPdf: flag('--no-pdf') });
  await browser.close();
}
const lessonCount = units.reduce((n, [, u]) => n + (u?.lessons?.length || 0), 0);
for (const line of lines) console.log(line);
if (flag('--verbose')) for (const n of notes) console.error(`  · ${n}`);
console.log(`${lines.length ? '✗' : '✓'} 단원 ${units.length}개 · 차시 ${lessonCount}개 · 실패 ${lines.length}줄 · ${((Date.now() - t0) / 1000).toFixed(1)}초${lessonCount ? ` (차시당 ${((Date.now() - t0) / 1000 / lessonCount).toFixed(1)}초)` : ''}`);
process.exit(lines.length ? 1 : 0);
