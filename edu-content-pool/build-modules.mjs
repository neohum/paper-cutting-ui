#!/usr/bin/env node
// 창체 모듈 체계도·내용 → 브라우저용 생성 파일. file:// 에서도 돌아야 해서 json 을 fetch 하지 않고 script 로 읽게 만든다.
//   입력  framework/*.json                체계도(domains → bands → topics/modules/sequences — framework/FRAMEWORK_SPEC.md)
//         modules/<영역>/<학년군 code>.js  모듈 내용(PaperLessons.registerModules([...edu-module.v1]) — MODULES_BUILD.md)
//   출력  modules/<영역>/_framework.js     PaperLessons.registerFramework(영역 하나) — 플레이어·조합 화면이 읽는다
//         modules/index.js                window.EDU_MODULE_INDEX — 카탈로그·조합 화면이 읽는 영역·학년별 추천 차시 목록(조합되는지 표시)
// 다시 돌려도 결과가 같다(시각·난수를 쓰지 않는다). build-bundles.mjs 가 끝에 이것을 부른다.
// 사용: node edu-content-pool/build-modules.mjs [--check]   (--check: 쓰지 않고 생성 파일이 최신인지 — 낡았으면 1)
// 다른 스크립트(check-module.mjs·build-bundles.mjs)는 아래 export 만 쓴다 — import 해도 아무것도 쓰지 않는다.
import { existsSync, mkdirSync, readFileSync, readdirSync, realpathSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const here = dirname(fileURLToPath(import.meta.url));
// modules/compose.js 는 브라우저 script 다(이 저장소의 .js 는 ESM 으로 읽히므로 require 하지 않고 vm 으로 돌려 window.PaperModules 를 받는다)
export const PM = (() => { const ctx = {}; ctx.self = ctx; vm.runInNewContext(readFileSync(join(here, 'modules/compose.js'), 'utf8'), ctx, { filename: 'modules/compose.js' }); return ctx.PaperModules; })();
const MOD_DIR = join(here, 'modules');

// 체계도: framework/*.json 을 이름순으로 합친다. 같은 영역 code 가 두 파일에 있으면 오류.
export function loadFramework(dir = join(here, 'framework')) {
  const domains = new Map(); const errors = [];
  const files = existsSync(dir) ? readdirSync(dir).filter((f) => f.endsWith('.json')).sort() : [];
  for (const f of files) {
    let src;
    try { src = JSON.parse(readFileSync(join(dir, f), 'utf8')); } catch (e) { errors.push(`framework/${f} · JSON 이 아님: ${e.message}`); continue; }
    for (const d of (src && src.domains) || []) {
      if (!d || typeof d.code !== 'string') { errors.push(`framework/${f} · code 없는 영역`); continue; }
      if (domains.has(d.code)) { errors.push(`framework/${f} · 영역 ${d.code} 가 ${domains.get(d.code).file} 에도 있음`); continue; }
      domains.set(d.code, Object.assign({}, d, { file: `framework/${f}` }));
    }
  }
  return { domains, errors, files };
}

// 모듈 내용 파일: modules/<영역>/<code>.js. 파일마다 등록한 모듈 목록(같은 id 가 두 번이면 오류)
export function loadModuleFiles(dir = MOD_DIR) {
  const files = []; const errors = []; const byId = new Map();
  if (!existsSync(dir)) return { files, errors, byId };
  for (const d of readdirSync(dir, { withFileTypes: true }).filter((x) => x.isDirectory() && !x.name.startsWith('_')).map((x) => x.name).sort()) {
    for (const f of readdirSync(join(dir, d)).filter((x) => x.endsWith('.js') && !x.startsWith('_')).sort()) {
      const rel = `modules/${d}/${f}`; const list = [];
      try {
        vm.runInNewContext(readFileSync(join(dir, d, f), 'utf8'), { PaperLessons: { registerModules(x) { list.push(...[].concat(x || [])); } } }, { filename: rel });
      } catch (e) { errors.push(`${rel} · 읽지 못함: ${e.message.split('\n')[0]}`); continue; }
      const band = PM.BANDS.find((b) => `${b.code}.js` === f);
      if (!band) errors.push(`${rel} · 파일 이름은 학년군 code(${PM.BANDS.map((b) => b.code).join('·')}).js`);
      files.push({ rel, domain: d, band, modules: list });
      for (const m of list) {
        const id = m && m.id;
        if (byId.has(id)) errors.push(`${rel} · 모듈 ${id} 가 ${byId.get(id).file} 에도 있음`);
        else byId.set(id, Object.assign({ file: rel }, { m }));
      }
    }
  }
  return { files, errors, byId };
}

// 영역 하나의 브라우저용 체계도 — 조합에 필요한 칸만(주제·계획 모듈 요약·추천 조합)
function frameworkJS(d) {
  // 계획 모듈 요약(modules[])·개념·오개념은 뺀다 — 조합에는 주제(제목·학년·목표·근거)와 추천 조합만 쓰고, 화면은 모듈 내용 파일을 읽는다
  const bands = Object.fromEntries(Object.entries(d.bands || {}).map(([k, b]) => [k, {
    topics: (b.topics || []).map((t) => ({ id: t.id, title: t.title, grades: t.grades, objective: t.objective, source: t.source })),
    sequences: b.sequences || [],
  }]));
  const keep = { code: d.code, title: d.title, area: d.area, basis: d.basis, hours: d.hours, bands };
  return `/* build-modules.mjs 가 ${d.file} 에서 만든다 — 손으로 고치지 않는다 */\nPaperLessons.registerFramework(${JSON.stringify(keep)});\n`;
}

// 카탈로그·조합 화면 색인: 영역마다 학년별 추천 차시(조합되는지)와 학년군별 모듈 수
export function moduleIndex(fw = loadFramework(), mf = loadModuleFiles()) {
  const get = (id) => (mf.byId.get(id) || {}).m;
  // 교구 이름(카탈로그 tools.json) — 엔진에만 있는 교구는 id 그대로 두지 않게 몇 개 덧붙인다
  const tools = (() => { try { return Object.fromEntries(JSON.parse(readFileSync(join(here, 'tools.json'), 'utf8')).tools.map((t) => [t.id, t.name])); } catch (_) { return {}; } })();
  Object.assign(tools, { dilemma: '갈림길 결과 카드', 'rubric-writing': '기준표 글쓰기', sortboard: '종이 분류판' }, tools);
  const out = { tools, domains: {} };
  const codes = [...new Set([...fw.domains.keys(), ...mf.files.map((f) => f.domain)])].sort();
  for (const code of codes) {
    const d = fw.domains.get(code);
    const mods = [...mf.byId.values()].map((x) => x.m).filter((m) => m && m.domain === code);
    const entry = { code, title: (d && d.title) || code, area: (d && d.area) || '', basis: (d && d.basis) || '', framework: Boolean(d), bands: {}, grades: {} };
    for (const b of PM.BANDS) {
      const n = mods.filter((m) => m.band === b.label);
      if (n.length) entry.bands[b.label] = { modules: n.length, topics: [...new Set(n.map((m) => m.topic))].length };
      for (const g of b.grades) {
        const seq = d ? PM.sequencesOf(d, g) : [];
        if (!seq.length) continue;
        entry.grades[g] = seq.map((s) => {
          const r = PM.composeSequence(d, g, s, get);
          return r.lesson ? { n: s.n, id: s.id, title: r.lesson.title, minutes: r.lesson.minutes, tools: [...new Set(r.lesson.stages[1].activities.map((a) => a.tool))], ready: true }
            : { n: s.n, id: s.id, ready: false };
        });
      }
    }
    // 모듈 내용이 하나라도 있는 영역만 싣는다(카탈로그·조합 화면은 내용이 있는 곳만 바꾼다)
    if (mods.length) out.domains[code] = entry;
  }
  return out;
}

// 생성할 파일 [[경로, 내용]]
export function outputs() {
  const fw = loadFramework(); const mf = loadModuleFiles();
  const files = [...fw.domains.values()].map((d) => [join(MOD_DIR, d.code, '_framework.js'), frameworkJS(d)]);
  files.push([join(MOD_DIR, 'index.js'), `/* build-modules.mjs 가 만든다 — 손으로 고치지 않는다. 카탈로그·조합 화면이 읽는 창체 모듈 색인 */\nwindow.EDU_MODULE_INDEX = ${JSON.stringify(moduleIndex(fw, mf))};\n`]);
  return { files, errors: [...fw.errors, ...mf.errors] };
}
export function writeDomainFramework(code) {
  const d = loadFramework().domains.get(code); if (!d) return false;
  const p = join(MOD_DIR, code, '_framework.js'); const s = frameworkJS(d);
  if (read(p) !== s) { mkdirSync(dirname(p), { recursive: true }); writeFileSync(p, s); }
  return true;
}
const read = (p) => { try { return readFileSync(p, 'utf8'); } catch (_) { return ''; } };

export function build({ check = false } = {}) {
  const { files, errors } = outputs();
  if (check) return { stale: files.filter(([p, s]) => read(p) !== s).map(([p]) => p.slice(here.length + 1)), errors };
  for (const [p, s] of files) { if (read(p) === s) continue; mkdirSync(dirname(p), { recursive: true }); writeFileSync(p, s); }
  return { written: files.map(([p]) => p.slice(here.length + 1)), errors };
}

const direct = (() => { try { return realpathSync(process.argv[1]) === realpathSync(fileURLToPath(import.meta.url)); } catch (_) { return false; } })();
if (direct) {
  const check = process.argv.includes('--check');
  const r = build({ check });
  for (const e of r.errors) console.error(`✗ ${e}`);
  if (check) { console.log(r.stale.length ? `낡음: ${r.stale.join(', ')} — node edu-content-pool/build-modules.mjs` : '최신'); process.exit(r.stale.length || r.errors.length ? 1 : 0); }
  console.log(`modules: ${r.written.join(', ')}`);
  process.exit(r.errors.length ? 1 : 0);
}
