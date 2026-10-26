#!/usr/bin/env node
// 차시 → 배포 묶음. 한 차시를 세 가지 모양으로 낸다.
//   dist/<id>/                런처 교실 허브용 정적 번들(외부 출처 0개 — 허브 CSP font/style/script 'self')
//     edulinker.plugin.json   edulinker-plugin.v3 (kind activity, tier1_web, studentPii none)
//     lesson-package.json     all_market lesson-package.v1 (intro/main/wrapup, CC-BY-SA-4.0)
//   dist/<id>.zip             all-market 업로드·USB 배포용(같은 내용)
//   lessons/manifest.js       교사 화면·결과 보고서가 읽는 차시 목록
// 사용: node edu-content-pool/build-bundles.mjs [--validate]
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

const toolsOf = (l) => [...new Set([
  ...l.stages.flatMap((s) => [s.demo?.tool, ...(s.activities || []).map((a) => a.tool), ...(s.exitTicket || []).map((q) => q.tool)]),
  ...l.worksheet.items.map((i) => i.tool),
].filter(Boolean))];

// all_market 과목 분류(lesson-package.v1 subjectCategory)와 플러그인 subjects 슬러그
const CATEGORY = { 국어: 'korean', 수학: 'math', 영어: 'english', 사회: 'social_ethics', 도덕: 'social_ethics', 과학: 'science_practical', 실과: 'science_practical', 체육: 'arts_sports', 음악: 'arts_sports', 미술: 'arts_sports', 통합교과: 'integrated_curriculum' };
const SLUG = { 국어: 'korean', 수학: 'math', 영어: 'english', 사회: 'social', 도덕: 'ethics', 과학: 'science', 실과: 'practical-arts', 체육: 'pe', 음악: 'music', 미술: 'art', 통합교과: 'integrated' };

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
  const src = ['engine/paperkit.js', 'engine/paperkit.css', 'lessons/registry.js', 'lessons/player.js', 'lessons/player.css', 'lessons/player.html', `lessons/data/${id}.js`, ...toolsOf(l).map((t) => `engine/tools/${t}.js`)];
  const newer = src.filter((rel) => existsSync(join(here, rel)) && statSync(join(here, rel)).mtimeMs > built + 1);
  return newer.length ? { reason: 'stale', newer } : null;
}

const isMain = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (isMain) await main();

async function main() {
const lessons = readdirSync(join(here, 'lessons/data')).filter((f) => f.endsWith('.js')).sort().map(loadLesson);
// 차시 폴더만 하나씩 지우고 다시 쓴다 — 허브가 다른 차시를 서빙하는 중에도 다시 묶을 수 있게
mkdirSync(dist, { recursive: true });
const manifest = [];

for (const l of lessons) {
  const out = join(dist, l.id);
  rmSync(out, { recursive: true, force: true }); rmSync(join(dist, `${l.id}.zip`), { force: true });
  const files = [
    ['engine/paperkit.js'], ['engine/paperkit.css'],
    ...toolsOf(l).map((t) => [`engine/tools/${t}.js`]),
    ['lessons/registry.js'], ['lessons/player.js'], ['lessons/player.css'], [`lessons/data/${l.id}.js`],
    ['vendor/classroom-ui/exam.css'], ['vendor/classroom-ui/print.css'],
    ['vendor/uicons/css/uicons-regular-rounded.css'], ['vendor/uicons/webfonts/uicons-regular-rounded.woff2'], ['vendor/uicons/LICENSE.txt'],
  ];
  // 생성 그림은 lessons/ 기준 경로 그대로 번들 lessons/ 아래에 둔다 — 플레이어가 registry 위치(lessons/)에서 같은 주소로 찾는다
  const img = l.illustration?.image;
  if (img) {
    if (!/^img\/[a-z0-9][a-z0-9-]*\.(webp|png|jpe?g)$/.test(img)) throw new Error(`${l.id}: illustration.image 경로 형식이 아님: ${img}`);
    if (existsSync(join(here, 'lessons', img))) files.push([`lessons/${img}`]);
    else console.warn(`! ${l.id}: illustration.image ${img} 파일이 없어 벡터 그림으로 묶음`);
  }
  for (const [rel] of files) { mkdirSync(dirname(join(out, rel)), { recursive: true }); copyFileSync(join(here, rel), join(out, rel)); }
  // 플레이어 껍데기: 외부 글꼴·CDN을 빼고 경로를 번들 루트 기준으로. 허브는 매개변수를 주지 않으므로 차시 id를 박는다.
  const html = readFileSync(join(here, 'lessons/player.html'), 'utf8')
    .replace(/\s*<link rel="preconnect"[^>]*>/g, '')
    .replace(/\s*<link href="https:\/\/fonts\.googleapis\.com[^>]*>/g, '')
    .replace(/\s*<link rel="icon"[^>]*>/, '\n  <link rel="icon" href="data:,">')
    .replace(/href="\.\.\/engine\//g, 'href="engine/').replace(/src="\.\.\/engine\//g, 'src="engine/')
    .replace(/href="\.\.\/vendor\//g, 'href="vendor/')
    .replace(/href="player\.css"/g, 'href="lessons/player.css"').replace(/src="(registry|player)\.js"/g, 'src="lessons/$1.js"')
    .replace('<title>페이퍼커팅 40분 수업</title>', `<title>${l.grade}학년 ${l.subject} · ${l.title}</title>`)
    .replace('<div id="app"', `<script>window.EDU_BUNDLE_LESSON = ${JSON.stringify(l.id)};</script>\n  <div id="app"`);
  if (/https?:\/\//.test(html.replace(/http:\/\/www\.w3\.org/g, ''))) throw new Error(`${l.id}: 번들 index.html에 외부 주소가 남음`);
  writeFileSync(join(out, 'index.html'), html);

  const entrySha = sha(readFileSync(join(out, 'index.html')));
  const plugin = {
    schemaVersion: 3, id: `kr.paperkit.${l.id}`, name: `${l.grade}학년 ${l.subject} · ${l.title}`, version: '1.0.0',
    description: `${l.unitTitle} — ${l.objective} (40분, 움직이는 페이퍼커팅 교구)`.slice(0, 500),
    kind: 'activity',
    runtime: { tier: 'tier1_web', entry: 'index.html', offline: true, integrityHash: `sha256:${entrySha}` },
    window: { title: l.title, width: 1366, height: 768, minWidth: 360, minHeight: 600, resizable: true },
    permissions: ['storage.kv'],
    education: { schoolLevels: ['elementary'], grades: [l.grade], subjects: [SLUG[l.subject]], standards: (l.standards || []).filter((s) => /^\[\d{1,2}[가-힣]{1,4}\d{2}-\d{2}\]$/.test(s)), lessonMinutes: 40 },
    data: { submissionSchema: 'edu-lesson-result.v1', studentPii: 'none' },
    distribution: { lanHub: true, cloudSchool: true, market: 'listed' },
    rights: { license: 'CC-BY-SA-4.0', sources: [] },
  };
  writeFileSync(join(out, 'edulinker.plugin.json'), `${JSON.stringify(plugin, null, 2)}\n`);

  const stageSha = (s) => sha(Buffer.from(JSON.stringify(s)));
  const pkg = {
    schemaVersion: '1.0.0', packageId: l.id, title: `${l.grade}학년 ${l.subject} ${l.title}`.slice(0, 120),
    summary: `${l.unitTitle} · ${l.objective}`.slice(0, 600), schoolLevel: 'elementary', gradeLevels: [`elem-${l.grade}`],
    subjectCategory: CATEGORY[l.subject], curriculumAchievementCode: (l.standards || [])[0],
    stages: l.stages.map((s) => ({
      phase: s.id, title: s.title, durationMinutes: s.minutes, ...(s.teacher ? { teacherNote: s.teacher.slice(0, 400) } : {}),
      items: s.id === 'main'
        ? s.activities.map((a) => ({ id: a.id, type: 'plugin', title: a.title.slice(0, 120), moduleId: `pk-${a.tool}`.slice(0, 32), sha256: stageSha(a), permissions: ['classroom.display', 'storage.local'], assetPath: 'index.html' }))
        : s.id === 'intro'
          ? [{ id: 'intro', type: 'presentation', title: '도입 장면과 발문', moduleId: 'pk-intro', sha256: stageSha(s), permissions: ['classroom.display', 'classroom.timer'], assetPath: 'index.html' }]
          : [{ id: 'exit', type: 'assessment', title: '출구 질문', moduleId: 'pk-exit', sha256: stageSha(s), permissions: ['classroom.assessment', 'storage.local'], assetPath: 'index.html' },
            { id: 'worksheet', type: 'worksheet', title: '인쇄 활동지', moduleId: 'pk-worksheet', sha256: stageSha(l.worksheet), permissions: ['classroom.worksheet'], assetPath: 'index.html' }],
    })),
    license: 'CC-BY-SA-4.0', createdAt: new Date().toISOString(),
  };
  writeFileSync(join(out, 'lesson-package.json'), `${JSON.stringify(pkg, null, 2)}\n`);

  // zip(맥·리눅스 기본 zip). 묶음 해시를 lesson-package에 남긴다.
  const zip = join(dist, `${l.id}.zip`);
  makeZip(zip, out);
  manifest.push({ id: l.id, grade: l.grade, subject: l.subject, unit: l.unitTitle, title: l.title, objective: l.objective, tools: toolsOf(l), catalog: l.catalog, bundleSha256: sha(readFileSync(zip)), standards: l.standards || [] });
}

writeFileSync(join(here, 'lessons/manifest.js'), `/* build-bundles.mjs가 만든다 — 손으로 고치지 않는다 */\nwindow.EDU_LESSONS = ${JSON.stringify(manifest, null, 1)};\n`);
console.log(`bundles=${manifest.length} → ${dist}`);

// 계약 검사: all_market의 JSON Schema(2020-12)로 실제 검증
if (process.argv.includes('--validate')) {
  const am = [process.env.ALL_MARKET_DIR, '/Users/nm/works/all_market', join(here, '../../all_market')].find((p) => p && existsSync(join(p, 'contracts'))) || '';
  const ajvPath = join(am, 'node_modules/.pnpm/ajv@8.20.0/node_modules/ajv/dist/2020.js');
  if (!existsSync(ajvPath)) { console.error('all_market ajv 없음 — 검증 건너뜀'); process.exit(1); }
  const require = createRequire(import.meta.url);
  const Ajv = require(ajvPath).default;
  const ajv = new Ajv({ allErrors: true, strict: false });
  const vPlugin = ajv.compile(JSON.parse(readFileSync(join(am, 'contracts/edulinker-plugin.v3.schema.json'), 'utf8')));
  const vPkg = ajv.compile(JSON.parse(readFileSync(join(am, 'contracts/lesson-package.v1.schema.json'), 'utf8')));
  let bad = 0;
  for (const m of manifest) {
    for (const [name, v] of [['edulinker.plugin.json', vPlugin], ['lesson-package.json', vPkg]]) {
      const ok = v(JSON.parse(readFileSync(join(dist, m.id, name), 'utf8')));
      if (!ok) { bad++; console.error(`✗ ${m.id}/${name}`, JSON.stringify(v.errors.slice(0, 3))); }
    }
  }
  console.log(bad ? `schema errors=${bad}` : `schema ok (plugin v3 + lesson-package v1) × ${manifest.length}`);
  process.exit(bad ? 1 : 0);
}
}
