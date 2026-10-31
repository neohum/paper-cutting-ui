// 창체(교과 밖) 트랙 조각 읽기 — build-programs.mjs(생성)와 check-unit.mjs(검사)가 같이 쓴다. import 해도 아무것도 쓰지 않는다.
// 조각: programs/*.json, 각 { "note"?: ..., "units": [ ... ] }. 파일 이름순으로 합친다(이름이 '_'로 시작하는 예시 조각도 포함).
// 여러 에이전트가 동시에 단원을 더하므로 한 파일(옛 programs.json)을 같이 고치지 않고 그룹마다 자기 조각을 쓴다.
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
export const AREAS = ['안전교육', '법정교육', '계기교육', '자율·자치'];
export const ROLES = ['intro', 'core', 'practice', 'extend', 'wrap'];
// 영역코드에 숫자를 금지한다 — 차시 id '<단원>-NN'을 레지스트리가 끝의 '-두 자리'로 단원과 가르기 때문이다.
// check-lesson.mjs의 PROGRAM_UNIT_ID와 같은 규칙이다(그쪽은 브라우저 검사 모듈이라 따로 둔다).
export const PROGRAM_UNIT_ID = /^g([1-9]|1[0-2])-cc-([a-z]+(?:-[a-z]+)*)$/;
const two = (n) => String(n).padStart(2, '0');

// 돌려주는 값: { units: [{ ...단원, file }], errors: ['조각 · 단원 id · 이유'] } — units는 학년·id 순
export function loadPrograms(dir = join(here, 'programs')) {
  const errors = []; const units = []; const seen = new Map();
  const files = existsSync(dir) ? readdirSync(dir).filter((f) => f.endsWith('.json')).sort() : [];
  for (const f of files) {
    const E = (id, why) => errors.push(`programs/${f} · ${id} · ${why}`);
    let src;
    try { src = JSON.parse(readFileSync(join(dir, f), 'utf8')); } catch (e) { E('-', `JSON이 아님: ${e.message}`); continue; }
    if (!src || !Array.isArray(src.units)) { E('-', '{ "units": [...] } 모양이 아님'); continue; }
    for (const u of src.units) {
      const id = u?.id ?? '(id 없음)';
      const m = PROGRAM_UNIT_ID.exec(id);
      if (!m) { E(id, "단원 id는 'g<1~12>-cc-<영역코드: 영문 소문자·하이픈>'"); continue; }
      if (seen.has(id)) { E(id, `같은 단원 id가 programs/${seen.get(id)}에도 있음`); continue; }
      seen.set(id, f);
      if (u.grade !== Number(m[1])) E(id, `grade ${u.grade} ≠ id의 학년 ${m[1]}`);
      if (u.subject !== '창체') E(id, "subject는 '창체'");
      if (!AREAS.includes(u.area)) E(id, `area는 ${AREAS.join('·')} 중 하나: ${u.area}`);
      if (typeof u.unitTitle !== 'string' || !u.unitTitle.trim()) E(id, 'unitTitle 없음');
      if (typeof u.basis !== 'string' || !u.basis.trim()) E(id, 'basis(근거 법령·고시) 없음');
      const plan = Array.isArray(u.plan) ? u.plan : [];
      if (!plan.length) E(id, 'plan 없음');
      if (u.lessons !== plan.length) E(id, `lessons ${u.lessons} ≠ plan ${plan.length}개`);
      plan.forEach((p, k) => {
        const at = `${id}-${two(k + 1)}`;
        if (p?.i !== k + 1) E(at, `plan[${k}].i는 ${k + 1}이어야 함(1부터 빈틈없이)`);
        if (typeof p?.title !== 'string' || !p.title.trim()) E(at, 'title 없음');
        if (!ROLES.includes(p?.role)) E(at, `role은 ${ROLES.join('|')}: ${p?.role}`);
        if (typeof p?.tool !== 'string' || !/^[a-z][a-z-]*$/.test(p.tool)) E(at, `tool이 엔진 교구 id가 아님: ${p?.tool}`);
        else if (!existsSync(join(here, 'engine/tools', `${p.tool}.js`))) E(at, `교구 engine/tools/${p.tool}.js 없음`);
        if (typeof p?.topic !== 'string' || !p.topic.trim()) E(at, 'topic 없음');
      });
      units.push({ ...u, file: f });
    }
  }
  units.sort((a, b) => a.grade - b.grade || a.id.localeCompare(b.id));
  return { units, errors, files };
}

export const catalogUnitOf = (u) => `g${u.grade}-창체-${PROGRAM_UNIT_ID.exec(u.id)[2]}`;

// units-index.json 항목 모양(교과 단원과 같은 칸 + track·area·basis)
export const indexEntryOf = (u) => ({
  id: u.id, catalogUnit: catalogUnitOf(u), grade: u.grade, subject: '창체', semester: '연중', no: null,
  title: u.unitTitle, lessons: u.plan.length, verifiedTitle: true, standards: [], existing: {},
  plan: u.plan.map((p) => ({ i: p.i, lessonId: `${u.id}-${two(p.i)}`, role: p.role, title: p.title, catalogTool: p.tool, topic: p.topic })),
  track: '창체', area: u.area, basis: u.basis,
});
