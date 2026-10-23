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

// 영어 세부 주제는 영역 이름이 영어로만 있다 → 단원 제목에 쓸 한국어 영역명.
const EN_DOMAIN = {
  Listening: '듣기', Speaking: '말하기', Reading: '읽기', Writing: '쓰기', 'Vocabulary & Expressions': '어휘와 표현',
  'Alphabet & Phonics': '알파벳과 소리', Pronunciation: '발음', Strategies: '학습 전략', Media: '매체',
  'Culture & Intercultural': '문화 이해', Interaction: '상호작용',
};
const domainOf = (t) => t.domainKorean ?? EN_DOMAIN[t.domain] ?? t.domain ?? '기타';

// 학년군 세부 주제를 표준 코드별로 묶는다(코드 순서 = 교육과정 고시 순서).
const byStandard = new Map();
for (const t of topics) {
  const code = codeOf(t.standardKey ?? t.standards[0]);
  const key = `${subjectOf(t)}|${t.gradeBand}|${code}`;
  if (!byStandard.has(key)) byStandard.set(key, { subject: subjectOf(t), band: t.gradeBand, code, domain: domainOf(t), topics: [] });
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
// 원천 데이터의 요약 일부가 동사 줄기에서 잘려 있다("힘의 특징을 말", "방법을 찾을"). 명사형으로 닫는다.
function closeTail(text) {
  return text
    .replace(/(^|\s)말$/, '$1말하기')
    .replace(/(\S)을$/, (m, c) => `${c}기`)
    .replace(/(\S*[가-힣])$/, (w) => {
      const ch = w.at(-1); const code = ch.charCodeAt(0) - 0xac00;
      // ㄹ 받침 관형형(만들·할·볼)만 기-명사형으로. 만들→만들기, 할→하기
      if (code % 28 !== 8 || !(w.length === 1 || /^(만들|살필|고를|나눌|기를)$/.test(w))) return w;
      return w === '만들' || w === '살필' ? `${w}기` : `${w.slice(0, -1)}${String.fromCharCode(ch.charCodeAt(0) - 8)}기`;
    });
}
function topicTitle(t) {
  const name = plainName(t);
  const [head, ...rest] = name.split(' - ');
  const step = rest.length ? rest.join(' - ') : null;
  if (nameCount.get(name) === 1) return step ? `${closeTail(head)} - ${step}` : closeTail(head);
  const summary = closeTail(standardSummary.get(codeOf(t.standardKey ?? t.standards[0])) ?? head);
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

// 학습맵 세부 주제는 학년군(1-2 등) 단위라 낮은 학년 단원에 높은 학년 범위가 섞인다(1학년 '9까지의 수'에 '네 자리 수').
// 학년별로 분명히 이른 범위를 막는다. 막고 나서 주제가 하나도 안 남으면 거르지 않는다.
const GRADE_EXCLUDE = {
  1: { 수학: /세 자리|네 자리|곱셈|구구|1000|두 자리 수끼리|몇 시 몇 분|cm|자로 재|어림/ },
  3: { 수학: /소수 두 자리|분모가 다른/ },
};
// 단원명 bigram 중 주제 글에 들어 있는 비율 — 짧은 단원명과 긴 주제 설명을 견줄 때 Jaccard보다 덜 깎인다.
const containment = (title, text) => { const A = bigrams(title); if (!A.size) return 0; const B = bigrams(text); let n = 0; for (const x of A) if (B.has(x)) n++; return n / A.size; };
const topicText = (t) => `${t.name} ${(t.evidence ?? []).join(' ')}`;

function lessonsForUnit(grade, subject, semester, unit, standardGroups, unitVerified, autoLinked = true, lessonsEstimated = true) {
  const unitId = `g${grade}-${subject}-${semester}-${unit.no}`;
  // 성취기준은 코드 순, 한 기준 안에서는 개념 → 표현 → 절차 → 적용(예술은 이해 → 표현 → 성찰) 순으로 가르친다.
  let unitTopics = [...standardGroups].sort((a, b) => a.code.localeCompare(b.code, 'ko'))
    .flatMap((g) => [...g.topics].sort((a, b) => facetRank(a) - facetRank(b)));
  const exclude = GRADE_EXCLUDE[grade]?.[subject];
  if (exclude) {
    const kept = unitTopics.filter((t) => !exclude.test(topicText(t)));
    if (kept.length) unitTopics = kept;
  }
  // 단원명과 뚜렷이 겹치는 주제가 있으면(한글 놀이 ↔ 자모·글자) 그 주제부터 가르친다. 과학·사회는 기준 묶음 순서 유지.
  if (!['과학', '사회'].includes(subject)) {
    const rel = new Map(unitTopics.map((t) => [t.id, containment(unit.title, topicText(t))]));
    if (Math.max(...rel.values()) >= 0.5) {
      unitTopics = unitTopics.map((t, i) => [t, i]).sort((a, b) => (rel.get(b[0].id) >= 0.5) - (rel.get(a[0].id) >= 0.5) || a[1] - b[1]).map(([t]) => t);
    }
  }
  const count = Math.max(1, unit.lessons ?? unitTopics.length * 2);
  // 주제가 차시보다 많으면 단원명과 가까운 주제부터 남긴다(가르치는 순서는 유지).
  if (unitTopics.length > count) {
    const keep = new Set(unitTopics.map((t, i) => [containment(unit.title, topicText(t)), i])
      .sort((a, b) => b[0] - a[0] || a[1] - b[1]).slice(0, count).map(([, i]) => i));
    unitTopics = unitTopics.filter((_, i) => keep.has(i));
  }
  units.push({
    id: unitId, g: grade, s: subject, sem: semester, no: unit.no, t: unit.title,
    std: [...new Set(standardGroups.map((g) => g.code))], n: count, v: unitVerified, src: unit.source ?? null,
    sa: autoLinked, ne: lessonsEstimated,
  });
  if (unitTopics.length === 0) {
    for (let i = 1; i <= count; i++) {
      lessons.push({ u: unitId, i, tp: null, title: `${unit.title} (${i}/${count})` });
    }
    return;
  }
  // 차시를 세부 주제에 고르게 나눠 붙인다. 첫 차시는 단원 도입, 마지막 차시는 정리·평가.
  // 한 주제가 여러 차시에 걸치면 두 번째는 연습, 세 번째부터는 심화·놀이 차시로 구별한다.
  const seen = new Map();
  for (let i = 1; i <= count; i++) {
    const tIdx = Math.min(unitTopics.length - 1, Math.floor(((i - 1) * unitTopics.length) / count));
    const t = unitTopics[tIdx];
    addTopic(t);
    const occ = (seen.get(t.id) ?? 0) + 1;
    seen.set(t.id, occ);
    const role = i === 1 ? 'intro' : i === count ? 'wrap' : occ === 2 ? 'practice' : occ >= 3 ? 'extend' : 'core';
    const tag = subject === '통합교과' ? `[${INTEGRATED_TAG[t.domainKorean] ?? t.domainKorean}] ` : '';
    // 반복 차시는 제목 뒤가 아니라 별도 필드(rp)로 둔다 — 목록에서 말줄임에 잘리지 않게 앞쪽 칩으로 보인다
    lessons.push({ u: unitId, i, tp: t.id, r: role, title: `${tag}${topicDict[t.id].n}`, ...(occ > 1 ? { rp: occ === 2 ? '연습' : `심화·놀이 ${occ - 2}` } : {}) });
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

// 통합교과 주제 교과서(1학년 학교·사람들·우리나라·탐험·하루·약속·상상·이야기, 2학년 나·자연·마을·세계·계절·인물·물건·기억)는
// 성취기준-주제 대응표가 공개되어 있지 않다. 주제별 핵심어가 성취기준 글에 몇 번 나오는지로 고르고, 같은 점수면 덜 찬 주제로 보낸다.
const THEME_KEYWORDS = {
  학교: ['학교', '교실', '선생님', '친구', '규칙', '안전', '몸'], 사람들: ['사람', '가족', '이웃', '친구', '관계', '배려', '함께'],
  우리나라: ['우리나라', '전통', '나라', '문화', '상징', '놀이'], 탐험: ['탐험', '탐구', '궁금', '발견', '관찰', '움직임', '활기'],
  하루: ['하루', '일과', '생활', '습관', '시간', '건강', '아침'], 약속: ['약속', '규칙', '질서', '공공', '지키', '안전', '환경'],
  상상: ['상상', '표현', '창의', '꿈', '만들', '놀이', '미래'], 이야기: ['이야기', '감상', '듣', '말', '노래', '책', '느낌'],
  나: ['나', '몸', '마음', '성장', '건강', '자신', '긍정'], 자연: ['자연', '식물', '동물', '생명', '환경', '생태', '지속가능'],
  마을: ['마을', '이웃', '동네', '장소', '일', '직업', '공동체'], 세계: ['세계', '나라', '다양', '문화', '지구', '다른'],
  계절: ['봄', '여름', '가을', '겨울', '계절', '날씨', '변화'], 인물: ['인물', '사람', '본받', '존경', '역할', '이야기'],
  물건: ['물건', '도구', '재료', '만들', '아끼', '기술'], 기억: ['기억', '추억', '기록', '과거', '감상', '돌아보', '전시'],
};
function bestTheme(g, targets, cap) {
  const text = `${groupText(g)} ${g.topics.map(topicText).join(' ')}`;
  const ranked = targets
    .map((m) => [(THEME_KEYWORDS[m.unit.title] ?? []).reduce((a, k) => a + text.split(k).length - 1, 0), m])
    .sort((a, b) => b[0] - a[0] || a[1].groups.length - b[1].groups.length);
  // 한 주제에 성취기준이 몰리면(학교에 1개, 탐험에 9개) 차시가 같은 주제로 반복된다 → 주제당 상한을 둔다.
  return (ranked.find(([, m]) => m.groups.length < cap) ?? ranked[0])[1];
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
    const themeCap = Math.ceil(free.length / targets.length);
    // 과학·사회 단원은 성취기준 묶음([4과07-*])과 일대일이라, 같은 묶음 단원이 있으면 그리로 보낸다.
    const blockOf = (code) => code.slice(0, code.indexOf('-'));
    const blockUnit = (g) => (['과학', '사회'].includes(subject)
      ? targets.find((m) => m.groups.some((x) => blockOf(x.code) === blockOf(g.code))) : null);
    free.forEach((g, idx) => {
      let best = targets[idx % targets.length];
      if (noLinks && THEME_KEYWORDS[targets[0].unit.title]) {
        best = bestTheme(g, targets, themeCap);
      } else if (blockUnit(g)) {
        best = blockUnit(g);
      } else if (!noLinks) {
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
    // 영역마다 성취기준 앞 절반은 낮은 학년, 뒤 절반은 높은 학년 — 두 학년 모두 모든 영역(듣기·말하기·읽기·쓰기 등)을 배운다.
    const byDomain = new Map();
    const domainAll = new Map();
    for (const g of groups) {
      if (!domainAll.has(g.domain)) domainAll.set(g.domain, []);
      domainAll.get(g.domain).push(g);
    }
    for (const [domain, gs] of domainAll) {
      const half = Math.ceil(gs.length / 2);
      const part = lower ? gs.slice(0, half) : gs.slice(half);
      if (part.length) byDomain.set(domain, part);
    }
    const mine = [...byDomain.values()].flat();
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

// 차시마다 맞는 페이퍼커팅 도구를 점수로 고른다: 단원명 일치 2점 + 차시 주제 일치 1점, 과목·학년이 맞아야 후보.
// 맞는 도구가 없으면 억지로 붙이지 않는다(과목 기본 도구만 허용) — 엉뚱한 도구는 없는 것보다 나쁘다.
const unitById = new Map(units.map((u) => [u.id, u]));
const compiled = toolCatalog.map((t) => ({ ...t, re: new RegExp(t.match, 'g') }));
const hits = (re, text) => (text.match(re) ?? []).length;
for (const l of lessons) {
  const u = unitById.get(l.u);
  let best = null; let bestScore = 0;
  for (const t of compiled) {
    if (!(t.subjects.includes(u.s) || t.subjects.includes('공통'))) continue;
    if (t.grades && !t.grades.includes(u.g)) continue;
    const score = 2 * hits(t.re, u.t) + hits(t.re, l.title);
    if (score > bestScore) { best = t; bestScore = score; }
  }
  best ??= compiled.find((t) => t.defaultFor?.includes(u.s));
  if (best) l.tool = best.id;
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
