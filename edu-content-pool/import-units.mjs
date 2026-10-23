#!/usr/bin/env node
// 조사 결과(sources/*.research.json, standard-unit-map.*.json)를 생성기 입력 units-map.json으로 바꾼다.
// - 단원명·검증 여부·출처는 조사 결과 그대로, 성취기준은 단원 자체 목록 + 경기도교육청 성취기준-단원 연결표(by_code)를 합친다.
// - 차시 수가 없는 단원은 그 학년·과목의 연간 시수(관행 배분)에서 알려진 차시를 뺀 나머지를 고르게 나눈다(estimated 표시).
// 사용: node edu-content-pool/import-units.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const read = (p) => JSON.parse(readFileSync(join(here, p), 'utf8'));
const research = read('sources/units-by-grade.research.json');
const byCode = { ...read('sources/standard-unit-map.g1-4.json').by_code, ...read('sources/standard-unit-map.g5-6.json').by_code };

// 학년당 연간 시수. 1~2학년 통합교과는 바른 144 + 슬기 224 + 즐거운 400 = 768(2년).
const hours = {
  '1-2': { 국어: 482, 수학: 256, 통합교과: 768 },
  '3-4': { 국어: 408, 사회: 204, 도덕: 68, 수학: 272, 과학: 204, 체육: 204, 음악: 136, 미술: 136, 영어: 136 },
  '5-6': { 국어: 408, 사회: 204, 도덕: 68, 수학: 272, 과학: 204, 실과: 136, 체육: 204, 음악: 136, 미술: 136, 영어: 204 },
};
const bandOf = (g) => (g <= 2 ? '1-2' : g <= 4 ? '3-4' : '5-6');
const subjectName = (s) => (s.startsWith('통합교과') ? '통합교과' : s);

// "3. 모양과 시각" → 단원 번호 3. by_code 값의 단원 표기에서 번호만 비교한다(단원명 표기는 출처마다 조금씩 다르다).
const unitNoOf = (label) => { const m = /^(\d+)\./.exec(label.trim()); return m ? Number(m[1]) : null; };

const grades = {};
let linked = 0;
for (const [g, subjects] of Object.entries(research.grades)) {
  const grade = Number(g);
  for (const [rawSubject, sems] of Object.entries(subjects)) {
    const subject = subjectName(rawSubject);
    const annual = hours[bandOf(grade)][subject];
    if (!annual) continue; // 영어·음악·미술·체육·실과 묶음 항목: 공통 단원 목록 없음 → 생성기의 성취기준 영역 배정을 쓴다
    const out = {};
    for (const [sem, list] of Object.entries(sems)) {
      if (!Array.isArray(list)) continue;
      const semNo = sem.startsWith('1') ? 1 : 2;
      out[sem] = list.filter((u) => u && u.title).map((u) => {
        const std = new Set(u.standards ?? []);
        for (const [code, places] of Object.entries(byCode)) {
          for (const label of places[`${grade}-${semNo}`] ?? []) {
            if (unitNoOf(label) === u.no) std.add(`[${code}]`);
          }
        }
        linked += std.size;
        return {
          no: u.no, title: u.title, standards: [...std].sort(),
          lessons: Number.isInteger(u.lessons) && u.lessons > 0 ? u.lessons : null,
          verified: u.verified !== false, source: u.source ?? null,
        };
      });
    }
    // 차시 수 채우기
    const all = Object.values(out).flat();
    const known = all.filter((u) => u.lessons).reduce((a, u) => a + u.lessons, 0);
    const unknown = all.filter((u) => !u.lessons);
    const yearly = annual / 2;
    const each = unknown.length ? Math.max(2, Math.round((yearly - known) / unknown.length)) : 0;
    for (const u of unknown) { u.lessons = each; u.lessonsEstimated = true; }
    grades[grade] ??= {};
    grades[grade][subject] = out;
  }
}

writeFileSync(join(here, 'units-map.json'), `${JSON.stringify({
  meta: {
    builtBy: 'import-units.mjs',
    researchedOn: '2026-10-24',
    note: '국정(국어·1~2 수학·통합교과·도덕)은 교과서 단원 확인, 사회·과학·3~6 수학은 검정이지만 성취기준 묶음 단원이라 출판사 간 공통(명칭 일부 차이). 5-2·6-2 국어는 예시자료 단원명(verified=false). 영어·음악·미술·체육·실과는 공통 단원 목록이 없어 제외.',
    sources: research.sources ?? [],
  },
  hours, grades,
}, null, 1)}\n`);
console.log(`grades=${Object.keys(grades).length} standards-links=${linked}`);
