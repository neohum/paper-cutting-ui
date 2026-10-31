#!/usr/bin/env node
// 창체(교과 밖) 트랙 목록 → 카탈로그·검사 기반.
//   입력  programs/*.json               조각 파일(그룹마다 하나, 파일 이름순으로 합침 — programs-lib.mjs, 형식은 PROGRAMS_BUILD.md)
//   출력  units-index.json              기존 교과 단원은 그대로 두고, track:'창체' 단원만 지우고 다시 붙인다(학년·id 순)
//         programs-data.js              window.EDU_PROGRAMS — catalog-data.js(EDU_CATALOG)와 같은 짧은 키의 units/lessons + topics
// 다시 돌려도 결과가 같다(시각·난수를 쓰지 않는다). 형식이 틀리거나 단원 id가 겹치면 한 줄씩 알리고 아무것도 쓰지 않는다(종료 코드 1).
// 두 출력 파일은 코디네이터가 마지막에 다시 만든다 — 차시 작성 에이전트는 로컬 검사용으로만 돌리고 커밋하지 않는다.
// 사용: node edu-content-pool/build-programs.mjs [--lint|--check]
//   --lint  조각 형식·id 중복만 본다(아무것도 쓰지 않음) — 차시 작성 에이전트용
//   --check 쓰지 않고 생성 파일이 최신인지 본다(형식 오류도 1) — 코디네이터용
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { AREAS, loadPrograms, catalogUnitOf, indexEntryOf } from './programs-lib.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const two = (n) => String(n).padStart(2, '0');

const { units, errors, files } = loadPrograms();
if (errors.length) { for (const e of errors) console.error(`✗ ${e}`); process.exit(1); }
if (process.argv.includes('--lint')) { console.log(`조각 ${files.length}개 · 창체 단원 ${units.length}개 — 형식 오류·id 중복 없음`); process.exit(0); }

// (a) units-index.json
const indexPath = join(here, 'units-index.json');
const index = JSON.parse(readFileSync(indexPath, 'utf8'));
const subjectUnits = index.units.filter((u) => u.track !== '창체');
const programUnits = units.map(indexEntryOf);
// 원본처럼 한 칸 들여쓰기·끝 줄바꿈 없음 — 교과 단원 줄이 diff에 잡히지 않게
const indexOut = JSON.stringify({ ...index, units: [...subjectUnits, ...programUnits] }, null, 1);

// (b) programs-data.js: EDU_CATALOG.units/lessons와 같은 짧은 키. 창체 차시의 주제는 topics[차시 id].n
const data = {
  source: { builtBy: 'build-programs.mjs', from: files.map((f) => `programs/${f}`) },
  areas: AREAS,
  units: units.map((u) => ({ id: catalogUnitOf(u), uid: u.id, g: u.grade, s: '창체', sem: '연중', no: null, t: u.unitTitle, std: [], n: u.plan.length, v: true, sa: false, ne: false, area: u.area, basis: u.basis })),
  lessons: units.flatMap((u) => u.plan.map((p) => ({ u: catalogUnitOf(u), i: p.i, tp: `${u.id}-${two(p.i)}`, r: p.role, title: p.title, tool: p.tool }))),
  topics: Object.fromEntries(units.flatMap((u) => u.plan.map((p) => [`${u.id}-${two(p.i)}`, { n: p.topic, f: 'program', e: [], m: [] }]))),
};
const dataOut = `// 자동 생성 파일 — build-programs.mjs 로 다시 만든다. 직접 고치지 않는다.\nwindow.EDU_PROGRAMS = ${JSON.stringify(data)};\n`;

const dataPath = join(here, 'programs-data.js');
const read = (p) => { try { return readFileSync(p, 'utf8'); } catch (_) { return ''; } };
if (process.argv.includes('--check')) {
  const stale = [[indexPath, indexOut], [dataPath, dataOut]].filter(([p, s]) => read(p) !== s).map(([p]) => p.slice(here.length + 1));
  console.log(stale.length ? `낡음: ${stale.join(', ')} — node edu-content-pool/build-programs.mjs` : '최신');
  process.exit(stale.length ? 1 : 0);
}
writeFileSync(indexPath, indexOut);
writeFileSync(dataPath, dataOut);
console.log(`programs: 조각 ${files.length}개 · 창체 단원 ${programUnits.length}개 · 차시 ${data.lessons.length}개 → units-index.json(교과 ${subjectUnits.length} + 창체 ${programUnits.length}), programs-data.js`);
