#!/usr/bin/env node
// 차시·단원 → 배포 묶음.
//   dist/<id>/                  data 차시 하나의 런처 교실 허브용 정적 번들(외부 출처 0개 — 허브 CSP font/style/script 'self')
//     edulinker.plugin.json     edulinker-plugin.v3 (kind activity, tier1_web, studentPii none)
//     lesson-package.json       all_market lesson-package.v1 (intro/main/wrapup, CC-BY-SA-4.0)
//   dist/<id>.zip               all-market 업로드·USB 배포용(같은 내용)
//   dist/units/<단원 id>/        단원 묶음(런처 배포 단위 = 단원): index.html(차시 고르기) + <차시 id>.html(차시마다 바로 열기)
//     edulinker.plugin.json     단원 하나 = 플러그인 하나
//     packages/<차시 id>.json    차시마다 lesson-package.v1 (성취기준이 있는 차시만 — 스키마가 성취기준을 요구)
//   dist/units/<단원 id>.zip
//   lessons/manifest.js         교사 화면·결과 보고서가 읽는 차시 목록(EDU_LESSONS) + 단원 목록(EDU_UNITS)
//   lessons/units/index.js      카탈로그가 읽는 단원 색인(EDU_UNIT_INDEX: 있는 단원·진행 방향·카탈로그 차시 → 차시 id)
// 이름이 '_'로 시작하는 파일(data/_tool-*.js 교구 검사용 차시, units/_sample.js 형식 예시)은 manifest·카탈로그·묶음에서 뺀다.
// 사용: node edu-content-pool/build-bundles.mjs [--validate] [--unit <단원 id>]   (--unit: 그 단원 묶음만 다시, manifest·색인은 전체로 다시 씀)
// 다른 스크립트(check-lesson·simulate-class)는 bundleStale()만 가져다 쓴다 — import해도 묶지 않는다.
import { mkdirSync, readFileSync, writeFileSync, readdirSync, copyFileSync, rmSync, existsSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import vm from 'node:vm';

const here = dirname(fileURLToPath(import.meta.url));
const dist = join(here, 'dist');
const sha = (buf) => createHash('sha256').update(buf).digest('hex');

const loadLesson = (f) => { let l; vm.runInNewContext(readFileSync(join(here, 'lessons/data', f), 'utf8'), { PaperLessons: { register(x) { l = x; } } }); return l; };
const loadUnit = (f) => { let u; vm.runInNewContext(readFileSync(join(here, 'lessons/units', f), 'utf8'), { PaperLessons: { registerUnit(x) { u = x; }, register() {} } }); return u; };

const toolsOf = (l) => [...new Set([
  ...l.stages.flatMap((s) => [s.demo?.tool, ...(s.activities || []).map((a) => a.tool), ...(s.exitTicket || []).map((q) => q.tool)]),
  ...((l.worksheet && l.worksheet.items) || []).map((i) => i.tool),
  ...((l.worksheet && l.worksheet.easy && l.worksheet.easy.items) || []).map((i) => i.tool),
].filter(Boolean))];

// all_market 과목 분류(lesson-package.v1 subjectCategory)와 플러그인 subjects 슬러그
const CATEGORY = { 국어: 'korean', 수학: 'math', 영어: 'english', 사회: 'social_ethics', 도덕: 'social_ethics', 과학: 'science_practical', 실과: 'science_practical', 체육: 'arts_sports', 음악: 'arts_sports', 미술: 'arts_sports', 통합교과: 'integrated_curriculum' };
const SLUG = { 창체: 'creative-activities', 국어: 'korean', 수학: 'math', 영어: 'english', 사회: 'social', 도덕: 'ethics', 과학: 'science', 실과: 'practical-arts', 체육: 'pe', 음악: 'music', 미술: 'art', 통합교과: 'integrated' };
// 학년 1~12(창체 트랙은 중·고까지): 화면 글자와 플러그인 schoolLevels — registry.js gradeLabel과 같은 규칙
const gradeLabel = (g) => (g >= 10 ? `고${g - 9}` : g >= 7 ? `중${g - 6}` : `${g}학년`);
const schoolLevelOf = (g) => (g >= 10 ? 'high' : g >= 7 ? 'middle' : 'elementary');
const STD = /^\[\d{1,2}[가-힣]{1,4}\d{2}-\d{2}\]$/;
const CARDS = 'engine/tools/_cards.js';

// zip이 없는 윈도에서는 시스템 bsdtar(tar.exe)로 같은 zip을 만든다(Git Bash의 GNU tar는 zip을 못 만든다)
function makeZip(zip, dir) {
  try { execFileSync('zip', ['-qr', zip, '.'], { cwd: dir, stdio: 'pipe' }); return; } catch (e) { if (e.code !== 'ENOENT') throw e; }
  const tar = join(process.env.SystemRoot || 'C:/Windows', 'System32', 'tar.exe');
  if (!existsSync(tar)) throw new Error('zip도 tar.exe도 없어 묶음 zip을 만들 수 없음');
  execFileSync(tar, ['-a', '-c', '-f', zip, ...readdirSync(dir)], { cwd: dir, stdio: 'pipe' });
}

// 허브 경로(/dist/<id>/) 학생은 번들을 읽는다 — 차시·교구·플레이어 원본이 번들보다 새로우면 학생은 옛 판을 받는다.
// 돌려주는 값: null(최신) 또는 { reason, newer: [원본 경로…] }
export function bundleStale(id) {
  const entry = join(dist, id, 'index.html');
  if (!existsSync(entry)) return { reason: 'missing', newer: [] };
  const built = statSync(entry).mtimeMs;
  let l; try { l = loadLesson(`${id}.js`); } catch (e) { return { reason: `lesson-unreadable: ${e.message}`, newer: [] }; }
  const src = ['engine/paperkit.js', 'engine/paperkit.css', 'engine/papercut-tokens.css', 'lessons/registry.js', 'lessons/player.js', 'lessons/player.css', 'lessons/player.html', `lessons/data/${id}.js`, CARDS, ...toolsOf(l).map((t) => `engine/tools/${t}.js`)];
  const newer = src.filter((rel) => existsSync(join(here, rel)) && statSync(join(here, rel)).mtimeMs > built + 1);
  return newer.length ? { reason: 'stale', newer } : null;
}

// 플레이어 껍데기: 외부 글꼴·CDN을 빼고 경로를 번들 루트 기준으로. 허브는 매개변수를 주지 않으므로 차시 id를 박는다.
function playerHTML(lessonId, title) {
  const html = readFileSync(join(here, 'lessons/player.html'), 'utf8')
    .replace(/\s*<link rel="preconnect"[^>]*>/g, '')
    .replace(/\s*<link href="https:\/\/fonts\.googleapis\.com[^>]*>/g, '')
    .replace(/\s*<link rel="icon"[^>]*>/, '\n  <link rel="icon" href="data:,">')
    .replace(/href="\.\.\/engine\//g, 'href="engine/').replace(/src="\.\.\/engine\//g, 'src="engine/')
    .replace(/href="\.\.\/vendor\//g, 'href="vendor/')
    .replace(/href="player\.css"/g, 'href="lessons/player.css"').replace(/src="(registry|player)\.js"/g, 'src="lessons/$1.js"')
    .replace('<title>페이퍼커팅 40분 수업</title>', `<title>${esc(title)}</title>`)
    .replace('<div id="app"', `<script>window.EDU_BUNDLE_LESSON = ${JSON.stringify(lessonId)};</script>\n  <div id="app"`);
  if (/https?:\/\//.test(html.replace(/http:\/\/www\.w3\.org/g, ''))) throw new Error(`${lessonId}: 번들 html에 외부 주소가 남음`);
  return html;
}
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const VENDOR = ['vendor/classroom-ui/exam.css', 'vendor/classroom-ui/print.css', 'vendor/uicons/css/uicons-regular-rounded.css', 'vendor/uicons/webfonts/uicons-regular-rounded.woff2', 'vendor/uicons/LICENSE.txt'];
const ENGINE = ['engine/paperkit.js', 'engine/paperkit.css', 'engine/papercut-tokens.css'];
const PLAYER = ['lessons/registry.js', 'lessons/player.js', 'lessons/player.css'];

function copyAll(out, rels) {
  for (const rel of [...new Set(rels)]) { mkdirSync(dirname(join(out, rel)), { recursive: true }); copyFileSync(join(here, rel), join(out, rel)); }
}
// 생성 그림은 lessons/ 기준 경로 그대로 번들 lessons/ 아래에 둔다 — 플레이어가 registry 위치(lessons/)에서 같은 주소로 찾는다
function imageOf(l) {
  const img = l.illustration?.image;
  if (!img) return [];
  if (!/^img\/[a-z0-9][a-z0-9-]*\.(webp|png|jpe?g)$/.test(img)) throw new Error(`${l.id}: illustration.image 경로 형식이 아님: ${img}`);
  if (existsSync(join(here, 'lessons', img))) return [`lessons/${img}`];
  console.warn(`! ${l.id}: illustration.image ${img} 파일이 없어 벡터 그림으로 묶음`);
  return [];
}
const cardsIfAny = () => (existsSync(join(here, CARDS)) ? [CARDS] : []);

const stageSha = (s) => sha(Buffer.from(JSON.stringify(s)));
// 차시 하나의 lesson-package.v1. assetPath는 그 차시를 여는 파일. 성취기준이 없으면 null(스키마가 성취기준을 요구한다)
function packageOf(l, assetPath) {
  const code = (l.standards || []).find((s) => STD.test(s));
  if (!code) return null;
  return {
    schemaVersion: '1.0.0', packageId: pluginSlug(l.id), title: `${l.grade}학년 ${l.subject} ${l.title}`.slice(0, 120),
    summary: `${l.unitTitle} · ${l.objective}`.slice(0, 600), schoolLevel: 'elementary', gradeLevels: [`elem-${l.grade}`],
    subjectCategory: CATEGORY[l.subject], curriculumAchievementCode: code,
    stages: l.stages.map((s) => ({
      phase: s.id, title: s.title, durationMinutes: s.minutes, ...(s.teacher ? { teacherNote: s.teacher.slice(0, 400) } : {}),
      items: s.id === 'main'
        ? s.activities.map((a) => ({ id: a.id, type: 'plugin', title: a.title.slice(0, 120), moduleId: `pk-${a.tool}`.slice(0, 32), sha256: stageSha(a), permissions: ['classroom.display', 'storage.local'], assetPath }))
        : s.id === 'intro'
          ? [{ id: 'intro', type: 'presentation', title: '도입 장면과 발문', moduleId: 'pk-intro', sha256: stageSha(s), permissions: ['classroom.display', 'classroom.timer'], assetPath }]
          : [{ id: 'exit', type: 'assessment', title: '출구 질문', moduleId: 'pk-exit', sha256: stageSha(s), permissions: ['classroom.assessment', 'storage.local'], assetPath },
            { id: 'worksheet', type: 'worksheet', title: '인쇄 활동지', moduleId: 'pk-worksheet', sha256: stageSha(l.worksheet), permissions: ['classroom.worksheet'], assetPath }],
    })),
    license: 'CC-BY-SA-4.0', createdAt: new Date().toISOString(),
  };
}
// 플러그인 id·꾸러미 id 는 all_market edulinker-plugin.v3·lesson-package.v1 계약상 [a-z0-9-] 만 된다 — 국어 독서·매체 단원 id 의 한글만 영문으로 바꾼다
const pluginSlug = (id) => String(id).replace(/독서/g, 'reading').replace(/매체/g, 'media');
function pluginOf({ id, name, description, title, entrySha, grades, subjects, standards }) {
  return {
    schemaVersion: 3, id, name: name.slice(0, 100), version: '1.0.0',
    description: description.slice(0, 500),
    kind: 'activity',
    runtime: { tier: 'tier1_web', entry: 'index.html', offline: true, integrityHash: `sha256:${entrySha}` },
    window: { title: title.slice(0, 100), width: 1366, height: 768, minWidth: 360, minHeight: 600, resizable: true },
    permissions: ['storage.kv'],
    education: { schoolLevels: [...new Set(grades.map(schoolLevelOf))], grades, subjects, standards: [...new Set(standards.filter((s) => STD.test(s)))], lessonMinutes: 40 },
    data: { submissionSchema: 'edu-lesson-result.v1', studentPii: 'none' },
    distribution: { lanHub: true, cloudSchool: true, market: 'listed' },
    rights: { license: 'CC-BY-SA-4.0', sources: [] },
  };
}

// 단원 묶음 첫 화면: 차시 고르기(교사 전자칠판·학생 화면·활동지). 학생 입장(반 코드·번호) 화면은 없다.
function unitIndexHTML(unit, rows) {
  return `<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(`${gradeLabel(unit.grade)} ${unit.subject} · ${unit.unitTitle}`)}</title>
  <link rel="icon" href="data:,">
  <link rel="stylesheet" href="vendor/uicons/css/uicons-regular-rounded.css">
  <link rel="stylesheet" href="engine/papercut-tokens.css">
  <link rel="stylesheet" href="engine/paperkit.css">
  <link rel="stylesheet" href="lessons/player.css">
  <style>
    .u-wrap { max-width: 960px; margin: 0 auto; padding: 16px; display: grid; gap: 16px; }
    .u-head, .u-row { padding: 16px 20px; }
    .u-list { list-style: none; margin: 0; padding: 0; display: grid; gap: 10px; }
    .u-row { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; justify-content: space-between; }
    .u-row b { flex: 1 1 260px; }
    .u-links { display: flex; flex-wrap: wrap; gap: 8px; }
  </style>
</head>
<body>
  <main class="u-wrap">
    <header class="pc-card u-head">
      <span class="pl-chip">${gradeLabel(unit.grade)} ${esc(unit.subject)}</span>
      <h1>${esc(unit.unitTitle)}</h1>
      <details><summary><b>단원 진행 방향</b></summary><p>${esc(unit.flow)}</p></details>
    </header>
    <ol class="u-list">
${rows.map((r) => `      <li class="pc-card u-row"><b>${r.n}차시 · ${esc(r.title)}</b><span class="u-links">
        <a class="pl-btn pl-btn--primary" href="${r.file}?role=teacher"><i class="fi fi-rr-chalkboard-user" aria-hidden="true"></i> 전자칠판</a>
        <a class="pl-btn" href="${r.file}?role=student"><i class="fi fi-rr-play" aria-hidden="true"></i> 학생 화면</a>
        <a class="pl-btn" href="${r.file}?role=print"><i class="fi fi-rr-print" aria-hidden="true"></i> 활동지</a></span></li>`).join('\n')}
    </ol>
  </main>
</body>
</html>
`;
}

const isMain = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (isMain) await main();

async function main() {
const only = (() => { const i = process.argv.indexOf('--unit'); return i > 0 ? process.argv[i + 1] : null; })();
const dataFiles = readdirSync(join(here, 'lessons/data')).filter((f) => f.endsWith('.js') && !f.startsWith('_')).sort();
const lessons = dataFiles.map(loadLesson);
const byId = new Map(lessons.map((l) => [l.id, l]));
const unitsDir = join(here, 'lessons/units');
const unitFiles = existsSync(unitsDir) ? readdirSync(unitsDir).filter((f) => f.endsWith('.js') && !f.startsWith('_') && f !== 'index.js').sort() : [];
const units = unitFiles.map((f) => { const u = loadUnit(f); if (!u || `${u.id}.js` !== f) throw new Error(`${f}: registerUnit id가 파일 이름과 다름`); return u; });
const plan = (() => { try { return new Map(JSON.parse(readFileSync(join(here, 'units-index.json'), 'utf8')).units.map((u) => [u.id, u])); } catch (_) { return new Map(); } })();
// 차시 폴더만 하나씩 지우고 다시 쓴다 — 허브가 다른 차시를 서빙하는 중에도 다시 묶을 수 있게
mkdirSync(join(dist, 'units'), { recursive: true });
const manifest = [];
const unitList = [];
const validateList = []; // [폴더, 파일, 'plugin'|'package']

for (const l of lessons) {
  const out = join(dist, l.id);
  const zip = join(dist, `${l.id}.zip`);
  if (!only) {
    rmSync(out, { recursive: true, force: true }); rmSync(zip, { force: true });
    copyAll(out, [...ENGINE, ...cardsIfAny(), ...toolsOf(l).map((t) => `engine/tools/${t}.js`), ...PLAYER, `lessons/data/${l.id}.js`, ...VENDOR, ...imageOf(l)]);
    writeFileSync(join(out, 'index.html'), playerHTML(l.id, `${l.grade}학년 ${l.subject} · ${l.title}`));
    const entrySha = sha(readFileSync(join(out, 'index.html')));
    writeFileSync(join(out, 'edulinker.plugin.json'), `${JSON.stringify(pluginOf({ id: `kr.paperkit.${pluginSlug(l.id)}`, name: `${l.grade}학년 ${l.subject} · ${l.title}`, description: `${l.unitTitle} — ${l.objective} (40분, 움직이는 페이퍼커팅 교구)`, title: l.title, entrySha, grades: [l.grade], subjects: [SLUG[l.subject]], standards: l.standards || [] }), null, 2)}\n`);
    writeFileSync(join(out, 'lesson-package.json'), `${JSON.stringify(packageOf(l, 'index.html'), null, 2)}\n`);
    // zip(맥·리눅스 기본 zip). 묶음 해시를 manifest에 남긴다.
    makeZip(zip, out);
  }
  validateList.push([out, 'edulinker.plugin.json', 'plugin'], [out, 'lesson-package.json', 'package']);
  manifest.push({ id: l.id, grade: l.grade, subject: l.subject, unit: l.unitTitle, title: l.title, objective: l.objective, tools: toolsOf(l), catalog: l.catalog, bundleSha256: existsSync(zip) ? sha(readFileSync(zip)) : null, standards: l.standards || [] });
}

for (const u of units) {
  const out = join(dist, 'units', u.id);
  const zip = join(dist, 'units', `${u.id}.zip`);
  const refs = Object.entries(u.refs || {}).map(([n, ref]) => [Number(n), ref]);
  for (const [, ref] of refs) if (!byId.has(ref)) throw new Error(`${u.id}: refs의 ${ref}가 lessons/data에 없음`);
  // 단원 안 차시 순서(번호순): 단원 파일의 차시 + refs로 이은 기존 차시
  const rows = [
    ...u.lessons.map((l) => ({ n: l.catalog.lesson, id: l.id, l, file: `${l.id}.html` })),
    ...refs.map(([n, ref]) => ({ n, id: `${u.id}-${String(n).padStart(2, '0')}`, l: byId.get(ref), ref, file: `${u.id}-${String(n).padStart(2, '0')}.html` })),
  ].sort((a, b) => a.n - b.n).map((r) => ({ ...r, title: r.l.title }));
  if (!only || only === u.id) {
    rmSync(out, { recursive: true, force: true }); rmSync(zip, { force: true });
    const tools = [...new Set(rows.flatMap((r) => toolsOf(r.l)))];
    copyAll(out, [...ENGINE, ...cardsIfAny(), ...tools.map((t) => `engine/tools/${t}.js`), ...PLAYER, `lessons/units/${u.id}.js`,
      ...refs.map(([, ref]) => `lessons/data/${ref}.js`), ...VENDOR, ...rows.flatMap((r) => imageOf(r.l))]);
    // 차시마다 바로 여는 파일(허브는 매개변수를 주지 않는다). refs 번호는 '<단원>-NN'으로 열면 레지스트리가 기존 차시로 넘긴다
    for (const r of rows) writeFileSync(join(out, r.file), playerHTML(r.id, `${gradeLabel(r.l.grade)} ${r.l.subject} · ${r.l.title}`));
    writeFileSync(join(out, 'index.html'), unitIndexHTML(u, rows));
    const entrySha = sha(readFileSync(join(out, 'index.html')));
    writeFileSync(join(out, 'edulinker.plugin.json'), `${JSON.stringify(pluginOf({ id: `kr.paperkit.unit.${pluginSlug(u.id)}`, name: `${gradeLabel(u.grade)} ${u.subject} · ${u.unitTitle}`, description: `${u.unitTitle} — ${rows.length}차시 40분 수업(움직이는 페이퍼커팅 교구). ${u.flow || ''}`, title: u.unitTitle, entrySha, grades: [u.grade], subjects: [SLUG[u.subject]], standards: rows.flatMap((r) => r.l.standards || []) }), null, 2)}\n`);
    mkdirSync(join(out, 'packages'), { recursive: true });
    for (const r of rows) { const p = packageOf(r.l, r.file); if (p) writeFileSync(join(out, 'packages', `${r.id}.json`), `${JSON.stringify(p.packageId === pluginSlug(r.id) ? p : { ...p, packageId: pluginSlug(r.id) }, null, 2)}\n`); }
    makeZip(zip, out);
  }
  if (existsSync(join(out, 'edulinker.plugin.json'))) {
    validateList.push([out, 'edulinker.plugin.json', 'plugin']);
    for (const f of existsSync(join(out, 'packages')) ? readdirSync(join(out, 'packages')) : []) validateList.push([join(out, 'packages'), f, 'package']);
  }
  const bundleSha256 = existsSync(zip) ? sha(readFileSync(zip)) : null;
  for (const r of rows) {
    if (r.ref) continue; // 기존 차시는 위 data 항목이 이미 있다
    const l = r.l;
    manifest.push({ id: l.id, grade: l.grade, subject: l.subject, unit: l.unitTitle, title: l.title, objective: l.objective, tools: toolsOf(l), catalog: l.catalog, standards: l.standards || [],
      unitId: u.id, hub: `units/${u.id}/${l.id}.html`, zip: `units/${u.id}.zip` });
  }
  const p = plan.get(u.id);
  unitList.push({ id: u.id, catalogUnit: u.catalogUnit, grade: u.grade, subject: u.subject, unitTitle: u.unitTitle, flow: u.flow || '',
    lessons: rows.map((r) => ({ n: r.n, id: r.ref || r.id })), planned: p ? p.plan.length : rows.length, bundleSha256 });
}

writeFileSync(join(here, 'lessons/manifest.js'), `/* build-bundles.mjs가 만든다 — 손으로 고치지 않는다 */\nwindow.EDU_LESSONS = ${JSON.stringify(manifest, null, 1)};\nwindow.EDU_UNITS = ${JSON.stringify(unitList)};\n`);
// 카탈로그 색인: 카탈로그 차시('<catalogUnit>~<번호>') → 차시 id. 단원 파일이 없어도 이미 있는 data 차시는 그 자리에 잇는다
const idx = { units: {}, lessons: {} };
for (const l of lessons) if (l.catalog?.unit && Number.isInteger(l.catalog.lesson)) idx.lessons[`${l.catalog.unit}~${l.catalog.lesson}`] = l.id;
for (const u of unitList) {
  idx.units[u.catalogUnit] = { id: u.id, title: u.unitTitle, flow: u.flow, ready: u.lessons.length, planned: u.planned };
  for (const r of u.lessons) idx.lessons[`${u.catalogUnit}~${r.n}`] = r.id;
}
mkdirSync(unitsDir, { recursive: true });
writeFileSync(join(unitsDir, 'index.js'), `/* build-bundles.mjs가 만든다 — 손으로 고치지 않는다. 카탈로그가 읽는 단원 색인 */\nwindow.EDU_UNIT_INDEX = ${JSON.stringify(idx)};\n`);
console.log(`bundles: 차시 ${lessons.length} · 단원 ${units.length}(차시 ${manifest.length - lessons.length}) → ${dist}`);

// 계약 검사: all_market의 JSON Schema(2020-12)로 실제 검증 + 단원 차시의 차시 계약(필수 칸)
if (process.argv.includes('--validate')) {
  const am = [process.env.ALL_MARKET_DIR, '/Users/nm/works/all_market', join(here, '../../all_market')].find((p) => p && existsSync(join(p, 'contracts'))) || '';
  const ajvPath = join(am, 'node_modules/.pnpm/ajv@8.20.0/node_modules/ajv/dist/2020.js');
  if (!existsSync(ajvPath)) { console.error('all_market ajv 없음 — 검증 건너뜀'); process.exit(1); }
  const require = createRequire(import.meta.url);
  const Ajv = require(ajvPath).default;
  const ajv = new Ajv({ allErrors: true, strict: false });
  const vPlugin = ajv.compile(JSON.parse(readFileSync(join(am, 'contracts/edulinker-plugin.v3.schema.json'), 'utf8')));
  const vPkg = ajv.compile(JSON.parse(readFileSync(join(am, 'contracts/lesson-package.v1.schema.json'), 'utf8')));
  let bad = 0; let n = 0;
  for (const [dir, name, kind] of validateList) {
    const v = kind === 'plugin' ? vPlugin : vPkg; n++;
    const ok = v(JSON.parse(readFileSync(join(dir, name), 'utf8')));
    if (!ok) { bad++; console.error(`✗ ${dir.slice(dist.length + 1)}/${name}`, JSON.stringify(v.errors.slice(0, 3))); }
  }
  // 단원 차시: edu-lesson.v1 필수 칸(세 단계 40분·활동·문항 target·출구·활동지) — 깊은 검사는 check-unit.mjs
  for (const u of units) for (const l of u.lessons) {
    const why = [];
    if (l.schema !== 'edu-lesson.v1') why.push('schema');
    if ((l.stages || []).map((s) => s.id).join() !== 'intro,main,wrapup') why.push('stages');
    else {
      if (l.stages.reduce((a, s) => a + s.minutes, 0) !== 40) why.push('40분');
      const main = l.stages[1];
      if (!main.activities?.length || main.activities.reduce((a, x) => a + x.minutes, 0) !== main.minutes) why.push('전개 분');
      for (const a of main.activities || []) for (const it of a.items || []) if (!it.free && !it.target) why.push(`${a.id} target`);
      if (!l.stages[2].exitTicket?.length) why.push('출구');
    }
    if (!l.worksheet?.items?.length) why.push('활동지');
    if (!/다\.$/.test(l.objective || '')) why.push('objective');
    n++;
    if (why.length) { bad++; console.error(`✗ units/${u.id} ${l.id}: ${why.join(', ')}`); }
  }
  const noPkg = units.flatMap((u) => u.lessons.filter((l) => !packageOf(l, 'x'))).length;
  console.log(bad ? `schema errors=${bad}` : `schema ok (plugin v3 + lesson-package v1 + 단원 차시 edu-lesson.v1) × ${n}${noPkg ? ` · 성취기준이 없어 lesson-package를 만들지 않은 단원 차시 ${noPkg}개` : ''}`);
  process.exit(bad ? 1 : 0);
}
}
