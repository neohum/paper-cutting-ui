#!/usr/bin/env node
// 초1~초6 전 교과 학년·과목·단원·차시 카탈로그 생성기.
// 입력: korean-elementary-learning-map-mcp 데이터셋(성취기준·세부주제) + 단원 지도(units-map.json)
//       + 자원 지도(resources.json). 출력: catalog-data.js (file:// 에서도 열리도록 전역 변수로 싣는다).
//
// 사용: node edu-content-pool/build-catalog.mjs [--dataset <dir>]
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const argDataset = process.argv.indexOf('--dataset');
const DATASET = argDataset > 0
  ? process.argv[argDataset + 1]
  : process.env.LEARNING_MAP_DIR
    ?? join(here, '../../project2026/korean-elementary-learning-map-mcp/data/kr');

const readJson = (p) => JSON.parse(readFileSync(p, 'utf8'));
if (!existsSync(join(DATASET, 'topics.json'))) {
  console.error(`learning-map dataset not found: ${DATASET} (set --dataset or LEARNING_MAP_DIR)`);
  process.exit(1);
}

const standardsDoc = readJson(join(DATASET, 'curriculum-standards.json'));
const topics = readJson(join(DATASET, 'topics.json')).topics;
const unitsMap = readJson(join(here, 'units-map.json'));
const resources = readJson(join(here, 'resources.json'));
const toolCatalog = readJson(join(here, 'tools.json')).tools;

// 표준 코드 → 요약
const standardSummary = new Map();
for (const cu of standardsDoc.curricula) {
  for (const s of cu.standards) standardSummary.set(s.code, s.summary);
}

const codeOf = (key) => key.slice(key.indexOf('['));

// 1~2학년 통합교과는 주제별 교과서(바른·슬기·즐거운 통합)라 과목 하나로 다루고, 차시 제목에 원래 영역을 붙인다.
const subjectOf = (t) => (t.subjectKorean === '실과(기술·가정)/정보' ? '실과' : t.subjectKorean);
const INTEGRATED_TAG = { '바른 생활': '바른', '건강한 생활': '바른', '슬기로운 생활': '슬기', '즐거운 생활': '즐거운' };

// 학년군 세부 주제를 표준 코드별로 묶는다(코드 순서 = 교육과정 고시 순서).
const byStandard = new Map();
for (const t of topics) {
  const code = codeOf(t.standardKey ?? t.standards[0]);
  const key = `${subjectOf(t)}|${t.gradeBand}|${code}`;
  if (!byStandard.has(key)) byStandard.set(key, { subject: subjectOf(t), band: t.gradeBand, code, domain: t.domainKorean, topics: [] });
  byStandard.get(key).topics.push(t);
}

const bandOf = (g) => (g <= 2 ? '1-2' : g <= 4 ? '3-4' : '5-6');
const SUBJECTS_BY_BAND = {
  '1-2': ['국어', '수학', '통합교과'],
  '3-4': ['국어', '사회', '도덕', '수학', '과학', '체육', '음악', '미술', '영어'],
  '5-6': ['국어', '사회', '도덕', '수학', '과학', '실과', '체육', '음악', '미술', '영어'],
};

// 단원 지도에 있는 표준 코드는 그 학년·단원으로 간다. 지도에 없는 코드는
// 학년군 안에서 고시 순서 앞 절반을 낮은 학년, 뒤 절반을 높은 학년에 배정한다(추정 표시).
const claimed = new Set();
const lessons = [];
const units = [];
const topicDict = {};

// 세부 주제 이름이 데이터셋 안에서 겹치면("시각과 시간 - 개념 확인"이 기준 세 개에 다 있다)
// 성취기준 요약 + 단계 이름으로 바꿔 차시 제목이 서로 구별되게 한다.
const plainName = (t) => t.name.replace(/^\[[^\]]+\]\s*/, '');
const nameCount = new Map();
for (const t of topics) nameCount.set(plainName(t), (nameCount.get(plainName(t)) ?? 0) + 1);
function topicTitle(t) {
  const name = plainName(t);
  if (nameCount.get(name) === 1) return name;
  const step = name.includes(' - ') ? name.slice(name.lastIndexOf(' - ') + 3) : null;
  const summary = standardSummary.get(codeOf(t.standardKey ?? t.standards[0])) ?? name;
  return step ? `${summary} - ${step}` : summary;
}

function addTopic(t) {
  if (topicDict[t.id]) return;
  topicDict[t.id] = {
    n: topicTitle(t),
    f: t.facetKey,
    e: t.evidence ?? [],
    a: t.assessmentPrompt ?? '',
    m: t.misconceptions ?? [],
  };
}

const FACET_ORDER = ['concept', 'understand', 'representation', 'procedure', 'make', 'application', 'reflect'];
const facetRank = (t) => { const i = FACET_ORDER.indexOf(t.facetKey); return i < 0 ? FACET_ORDER.length : i; };

function lessonsForUnit(grade, subject, semester, unit, standardGroups, unitVerified, autoLinked = true, lessonsEstimated = true) {
  const unitId = `g${grade}-${subject}-${semester}-${unit.no}`;
  // 성취기준은 코드 순, 한 기준 안에서는 개념 → 표현 → 절차 → 적용(예술은 이해 → 표현 → 성찰) 순으로 가르친다.
  const unitTopics = [...standardGroups].sort((a, b) => a.code.localeCompare(b.code, 'ko'))
    .flatMap((g) => [...g.topics].sort((a, b) => facetRank(a) - facetRank(b)));
  const count = Math.max(1, unit.lessons ?? unitTopics.length * 2);
  units.push({
    id: unitId, g: grade, s: subject, sem: semester, no: unit.no, t: unit.title,
    std: standardGroups.map((g) => g.code), n: count, v: unitVerified, src: unit.source ?? null,
    sa: autoLinked, ne: lessonsEstimated,
  });
  if (unitTopics.length === 0) {
    for (let i = 1; i <= count; i++) {
      lessons.push({ u: unitId, i, tp: null, title: `${unit.title} (${i}/${count})` });
    }
    return;
  }
  // 차시를 세부 주제에 고르게 나눠 붙인다. 첫 차시는 단원 도입, 마지막 차시는 정리·평가.
  for (let i = 1; i <= count; i++) {
    const tIdx = Math.min(unitTopics.length - 1, Math.floor(((i - 1) * unitTopics.length) / count));
    const t = unitTopics[tIdx];
    addTopic(t);
    const role = i === 1 ? 'intro' : i === count ? 'wrap' : 'core';
    const tag = subject === '통합교과' ? `[${INTEGRATED_TAG[t.domainKorean] ?? t.domainKorean}] ` : '';
    lessons.push({ u: unitId, i, tp: t.id, r: role, title: `${tag}${topicDict[t.id].n}` });
  }
}

// 두 문자열의 글자 bigram Jaccard 유사도 — 단원명과 성취기준 요약·세부 주제 모듈을 잇는 데 쓴다.
const bigrams = (s) => { const t = s.replace(/[^가-힣a-zA-Z0-9]/g, ''); const b = new Set(); for (let i = 0; i < t.length - 1; i++) b.add(t.slice(i, i + 2)); return b; };
const similarity = (a, b) => { const A = bigrams(a); const B = bigrams(b); let n = 0; for (const x of A) if (B.has(x)) n++; return n / (A.size + B.size - n || 1); };
const groupText = (g) => `${standardSummary.get(g.code) ?? ''} ${[...new Set(g.topics.map((t) => t.module ?? t.curriculumAreaKorean ?? ''))].join(' ')}`;

// 1단계: 단원 지도의 단원을 모으고 명시된 성취기준을 붙인다.
const mappedUnits = [];
for (let grade = 1; grade <= 6; grade++) {
  const band = bandOf(grade);
  for (const subject of SUBJECTS_BY_BAND[band]) {
    for (const [semester, list] of Object.entries(unitsMap.grades?.[grade]?.[subject] ?? {})) {
      for (const unit of list) {
        const groups = (unit.standards ?? []).map((code) => byStandard.get(`${subject}|${band}|${code}`)).filter(Boolean);
        groups.forEach((g) => claimed.add(`${g.subject}|${g.band}|${g.code}`));
        mappedUnits.push({ grade, band, subject, semester, unit, groups, auto: false });
      }
    }
  }
}

// 2단계: 아직 아무 단원에도 안 붙은 성취기준을 같은 학년군·과목에서 가장 비슷한 단원에 붙인다.
// 통합교과처럼 단원↔성취기준 대응표가 없는 과목은 고시 순서대로 주제 단원들에 고르게 나눈다.
for (const band of ['1-2', '3-4', '5-6']) {
  for (const subject of SUBJECTS_BY_BAND[band]) {
    const targets = mappedUnits.filter((m) => m.band === band && m.subject === subject);
    if (targets.length === 0) continue;
    const free = [...byStandard.values()]
      .filter((g) => g.subject === subject && g.band === band && !claimed.has(`${g.subject}|${g.band}|${g.code}`))
      .sort((a, b) => a.code.localeCompare(b.code, 'ko'));
    const noLinks = targets.every((m) => m.groups.length === 0);
    free.forEach((g, idx) => {
      let best = targets[idx % targets.length];
      if (!noLinks) {
        let score = -1;
        for (const m of targets) {
          const sc = similarity(m.unit.title, groupText(g)) + (m.groups.length === 0 ? 0.05 : 0);
          if (sc > score) { score = sc; best = m; }
        }
      }
      best.groups.push(g);
      best.auto = true;
      claimed.add(`${g.subject}|${g.band}|${g.code}`);
    });
  }
}

// 3단계: 성취기준이 여전히 없는 단원(대응표가 비고 남은 기준도 없는 경우)은 같은 학년군에서 가장 비슷한 기준을 빌려 온다.
for (const m of mappedUnits) {
  if (m.groups.length) continue;
  const pool = [...byStandard.values()].filter((g) => g.subject === m.subject && g.band === m.band);
  const ranked = pool.map((g) => [similarity(m.unit.title, groupText(g)), g]).sort((a, b) => b[0] - a[0]);
  if (ranked.length) { m.groups.push(...ranked.slice(0, 2).map(([, g]) => g)); m.auto = true; }
}

for (const m of mappedUnits) {
  lessonsForUnit(m.grade, m.subject, m.semester, m.unit, m.groups, m.unit.verified !== false, m.auto, !!m.unit.lessonsEstimated);
}

// 지도에 없는 표준 → 추정 배정 단원
for (let grade = 1; grade <= 6; grade++) {
  const band = bandOf(grade);
  const lower = grade % 2 === 1;
  for (const subject of SUBJECTS_BY_BAND[band]) {
    if (unitsMap.grades?.[grade]?.[subject]) continue;
    const groups = [...byStandard.values()]
      .filter((g) => g.subject === subject && g.band === band && !claimed.has(`${g.subject}|${g.band}|${g.code}`))
      .sort((a, b) => a.code.localeCompare(b.code, 'ko'));
    if (groups.length === 0) continue;
    const half = Math.ceil(groups.length / 2);
    const mine = lower ? groups.slice(0, half) : groups.slice(half);
    // 같은 영역끼리 단원으로 묶고, 연간 시수를 영역 크기에 비례해 나눈다.
    const byDomain = new Map();
    for (const g of mine) {
      if (!byDomain.has(g.domain)) byDomain.set(g.domain, []);
      byDomain.get(g.domain).push(g);
    }
    const annual = Math.round((unitsMap.hours?.[band]?.[subject] ?? mine.length * 6) / 2);
    const totalStd = mine.length;
    let no = 0;
    const domains = [...byDomain.entries()];
    domains.forEach(([domain, gs], idx) => {
      no += 1;
      const semester = idx < domains.length / 2 ? '1학기' : '2학기';
      const n = Math.max(gs.length * 2, Math.round((annual * gs.length) / totalStd));
      lessonsForUnit(grade, subject, semester,
        { no, title: domain, lessons: n, standards: gs.map((g) => g.code) }, gs, false);
    });
  }
}

const out = {
  generatedAt: new Date().toISOString().replace('Z', '+00:00'),
  source: {
    dataset: standardsDoc.dataset ?? 'korean-elementary-learning-map-mcp',
    taxonomyVersion: standardsDoc.taxonomyVersion,
    unitsMap: unitsMap.meta ?? null,
  },
  hours: unitsMap.hours ?? {},
  subjects: SUBJECTS_BY_BAND,
  standards: Object.fromEntries([...standardSummary.entries()]),
  units,
  lessons,
  topics: topicDict,
  resources: {
    sites: resources.sites ?? [],
    channels: resources.channels ?? [],
    subjectSites: resources.subjectSites ?? {},
    subjectChannels: resources.subjectChannels ?? {},
  },
  tools: toolCatalog,
};

// 차시마다 맞는 페이퍼커팅 도구 하나를 미리 고른다(과목이 맞고 주제 이름이 정규식에 걸리는 첫 도구).
const unitById = new Map(units.map((u) => [u.id, u]));
const compiled = toolCatalog.map((t) => ({ ...t, re: new RegExp(t.match) }));
for (const l of lessons) {
  const u = unitById.get(l.u);
  const text = `${u.t} ${l.title}`;
  const hit = compiled.find((t) => (t.subjects.includes(u.s) || t.subjects.includes('공통')) && t.re.test(text))
    ?? compiled.find((t) => t.subjects.includes(u.s));
  if (hit) l.tool = hit.id;
}

writeFileSync(join(here, 'catalog-data.js'),
  `// 자동 생성 파일 — build-catalog.mjs 로 다시 만든다. 직접 고치지 않는다.\nwindow.EDU_CATALOG = ${JSON.stringify(out)};\n`);

const verifiedUnits = units.filter((u) => u.v).length;
console.log(`units=${units.length} (verified ${verifiedUnits}) lessons=${lessons.length} topics=${Object.keys(topicDict).length}`);
for (let g = 1; g <= 6; g++) {
  const per = {};
  for (const u of units.filter((x) => x.g === g)) per[u.s] = (per[u.s] ?? 0) + u.n;
  console.log(`  ${g}학년`, JSON.stringify(per));
}
