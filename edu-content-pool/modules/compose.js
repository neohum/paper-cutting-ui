/* 창체 모듈 조합기 — 도입 1 + 활동 1~3 + 정리 1(edu-module.v1) → 차시 하나(edu-lesson.v1).
 * 플레이어·교사 조합 화면(브라우저, window.PaperModules)과 검사·시험(node, module.exports)이 같은 규칙을 쓴다.
 * 형식 전문: MODULES_BUILD.md. 이 파일은 DOM 을 쓰지 않는다.
 */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.PaperModules = api;
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';
  // 학년군 — 체계도(framework/*.json bands)의 키가 label, 파일 이름(modules/<영역>/<code>.js)이 code
  const BANDS = [
    { label: '초1-2', code: 'e12', grades: [1, 2], minutes: 40 },
    { label: '초3-4', code: 'e34', grades: [3, 4], minutes: 40 },
    { label: '초5-6', code: 'e56', grades: [5, 6], minutes: 40 },
    { label: '중', code: 'm', grades: [7, 8, 9], minutes: 45 },
    { label: '고', code: 'h', grades: [10, 11, 12], minutes: 50 },
  ];
  const bandOf = (grade) => BANDS.find((b) => b.grades.includes(Number(grade))) || null;
  const bandByLabel = (label) => BANDS.find((b) => b.label === label || b.code === label) || null;
  const TYPES = ['intro', 'activity', 'wrap'];
  const SLACK = 3;
  const DOMAIN = /^[a-z]+(?:-[a-z]+)*$/;
  // 모듈 id: '<주제 id>.<intro|activity|wrap>.<영문 소문자 이름>' — 주제 id 는 '<영역>.<학년군 code>.<주제 이름>'(체계도 framework/*.json 과 같다)
  const MODULE_ID = /^[a-z]+(?:-[a-z]+)*\.[a-z0-9]+\.[a-z0-9-]+\.(intro|activity|wrap)\.[a-z0-9-]+$/;
  const TYPE_WORD = { intro: 'intro', activity: 'activity', wrap: 'wrap' };
  // 추천 조합 차시 id: cc-<학년>-<영역>-<두 자리>. 교사가 고른 조합: cc-<학년>-<영역>-x<해시 6자>
  const LESSON_ID = /^cc-([1-9]|1[0-2])-([a-z]+(?:-[a-z]+)*)-(\d{2}|x[0-9a-z]{6})$/;
  const two = (n) => String(n).padStart(2, '0');
  const lessonIdOf = (grade, domain, n) => `cc-${grade}-${domain}-${two(n)}`;
  const hash6 = (s) => { let h = 2166136261; for (const ch of String(s)) { h ^= ch.codePointAt(0); h = Math.imul(h, 16777619) >>> 0; } return h.toString(36).padStart(6, '0').slice(-6); };
  const customIdOf = (grade, domain, ids) => `cc-${grade}-${domain}-x${hash6(ids.join(','))}`;
  const PROMPT = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const SCENE = (text, extra) => ({ viewBox: [480, 270], layers: [
    { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'hills', y: 204 },
    { motif: 'house', x: 96, y: 214, color: 'buttercup', s: 0.9 }, { motif: 'tree', x: 380, y: 214 }, ...(extra || []),
    { motif: 'text', x: 240, y: 140, text, size: 22 },
  ] });
  const isObj = (v) => v != null && typeof v === 'object' && !Array.isArray(v);
  const str = (v) => typeof v === 'string' && v.trim().length > 0;

  // 모듈 하나의 모양 — 내용 품질(글 길이·학년군 기준)은 check-module.mjs 가 본다
  function shapeErrors(m) {
    const out = []; const E = (t) => out.push(t);
    if (!isObj(m)) return ['모듈이 객체가 아님'];
    if (m.schema !== 'edu-module.v1') E(`schema 가 'edu-module.v1' 이 아님: ${m.schema}`);
    if (!TYPES.includes(m.type)) E(`type 은 ${TYPES.join('|')}: ${m.type}`);
    if (!str(m.id) || !MODULE_ID.test(m.id)) E(`id 형식이 아님('<주제 id>.<intro|activity|wrap>.<이름>'): ${m.id}`);
    else {
      if (m.type && m.id.split('.')[3] !== TYPE_WORD[m.type]) E(`id 의 넷째 마디는 type(${m.type}) → '${TYPE_WORD[m.type]}'`);
      if (str(m.topic) && !m.id.startsWith(`${m.topic}.`)) E(`id 가 주제 id(${m.topic})로 시작하지 않음`);
    }
    if (!str(m.domain) || !DOMAIN.test(m.domain)) E(`domain 은 영문 소문자·하이픈: ${m.domain}`);
    else if (str(m.topic) && m.topic.split('.')[0] !== m.domain) E(`topic(${m.topic}) 첫 마디가 domain(${m.domain})이 아님`);
    const band = bandByLabel(m.band);
    if (!band) E(`band 는 ${BANDS.map((b) => b.label).join('·')} 중 하나: ${m.band}`);
    if (!str(m.topic)) E('topic 없음');
    if (!Array.isArray(m.grades) || !m.grades.length || !m.grades.every((g) => band && band.grades.includes(g))) E(`grades 는 학년군(${m.band}) 안의 학년 배열: ${JSON.stringify(m.grades)}`);
    if (!str(m.title) || m.title.length > 30) E('title(카드 제목) 은 30자 이하 글');
    if (!str(m.method)) E('method(학습 방식) 없음');
    if (!Number.isInteger(m.minutes) || m.minutes < 2 || m.minutes > 30) E(`minutes 는 2~30 정수: ${m.minutes}`);
    if (!isObj(m.levels) || ['easy', 'base', 'challenge'].some((k) => !str(m.levels[k]))) E('levels 는 { easy, base, challenge } 한 줄씩(수준별로 무엇이 달라지는지)');
    if (m.type === 'intro') {
      const x = m.intro;
      if (!isObj(x)) E('intro 칸 없음');
      else {
        if (!str(x.teacher)) E('intro.teacher 없음');
        if (!str(x.student)) E('intro.student 없음');
        if (!isObj(x.demo) || !str(x.demo.tool) || !Array.isArray(x.demo.sequence)) E('intro.demo 는 { tool, options, sequence[] }');
        else if (m.tool !== x.demo.tool) E(`tool(${m.tool}) ≠ intro.demo.tool(${x.demo.tool})`);
        if (!isObj(x.art) || !str(x.art.draw) || !str(x.art.banner)) E('intro.art 는 { draw(영문 장면), banner(그림 글), extra? }');
      }
    } else if (m.type === 'activity') {
      const a = m.activity;
      if (!isObj(a)) E('activity 칸 없음');
      else {
        if (!str(a.title)) E('activity.title 없음');
        else if (/^활동\s*\d/.test(a.title)) E("activity.title 에 '활동 n.' 을 붙이지 않음(조합기가 붙인다)");
        if (!str(a.tool)) E('activity.tool 없음');
        else if (m.tool !== a.tool) E(`tool(${m.tool}) ≠ activity.tool(${a.tool})`);
        if (!str(a.teacher)) E('activity.teacher 없음');
        if (!str(a.task)) E('activity.task 없음');
        if (!isObj(a.levels) || ['easy', 'base', 'challenge'].some((k) => !isObj(a.levels[k]))) E('activity.levels 는 교구 옵션 { easy:{}, base:{}, challenge:{} }');
        if (!Array.isArray(a.items) || !a.items.length) E('activity.items 없음');
        if ('id' in a || 'minutes' in a) E('activity 에 id·minutes 를 쓰지 않음(id 는 조합기가, 분은 모듈 minutes)');
      }
      if (m.worksheet != null && (!isObj(m.worksheet) || !Array.isArray(m.worksheet.items))) E('worksheet 는 { items[], easy?[] }');
    } else if (m.type === 'wrap') {
      const w = m.wrap;
      if (!isObj(w)) E('wrap 칸 없음');
      else {
        if (!str(w.teacher)) E('wrap.teacher 없음');
        if (!Array.isArray(w.exitTicket) || !w.exitTicket.length) E('wrap.exitTicket 없음');
        const tools = (w.exitTicket || []).filter((q) => q && q.type === 'tool').map((q) => q.tool);
        if ((m.tool || null) !== (tools[0] || null)) E(`tool(${m.tool}) ≠ 첫 교구 출구 질문의 tool(${tools[0] || '없음'})`);
      }
      if (!isObj(m.worksheet) || !str(m.worksheet.title) || !Array.isArray(m.worksheet.items)) E('worksheet 는 { title, items[], easy?: { note?, items[] } }');
    }
    return out;
  }

  // mods: [도입, 활동…, 정리] 모듈 객체. ctx: { id, grade, domain:{code,title,area?,basis?}, topic?:{id,title,objective}, n?, title?, objective? }
  // 돌려주는 값: { lesson, errors } — errors 가 있으면 lesson 은 null
  function compose(mods, ctx) {
    const errors = []; const E = (t) => errors.push(t);
    ctx = ctx || {};
    const grade = Number(ctx.grade);
    const band = bandOf(grade);
    if (!band) E(`학년이 1~12가 아님: ${ctx.grade}`);
    if (!Array.isArray(mods) || mods.length < 3 || mods.length > 5) E(`모듈은 도입 1 + 활동 1~3 + 정리 1 (지금 ${Array.isArray(mods) ? mods.length : 0}개)`);
    if (errors.length) return { lesson: null, errors };
    mods.forEach((m, i) => { if (!m) E(`${i + 1}번째 모듈을 찾지 못함`); });
    if (errors.length) return { lesson: null, errors };
    const intro = mods[0]; const wrap = mods[mods.length - 1]; const acts = mods.slice(1, -1);
    if (intro.type !== 'intro') E(`첫 모듈(${intro.id})이 도입이 아님`);
    if (wrap.type !== 'wrap') E(`마지막 모듈(${wrap.id})이 정리가 아님`);
    acts.forEach((a) => { if (a.type !== 'activity') E(`가운데 모듈(${a.id})이 활동이 아님`); });
    if (new Set(mods.map((m) => m.id)).size !== mods.length) E('같은 모듈을 두 번 골랐음');
    for (const m of mods) {
      for (const t of shapeErrors(m)) E(`${m.id || '?'}: ${t}`);
      if (band && m.band !== band.label) E(`${m.id}: 학년군 ${m.band} — ${grade}학년(${band.label}) 수업에 쓸 수 없음`);
      else if (Array.isArray(m.grades) && !m.grades.includes(grade)) E(`${m.id}: ${grade}학년 모듈이 아님(grades ${m.grades.join(',')})`);
    }
    const domain = ctx.domain && ctx.domain.code;
    for (const m of mods) if (domain && m.domain !== domain) E(`${m.id}: 영역 ${m.domain} ≠ ${domain}`);
    // 분: 도입 + 활동 + 정리 = 학년군 수업 시간. 활동 합은 '안팎'(±SLACK분)까지 받고, 가장 긴 활동의 분을 고쳐 정확히 맞춘다
    const need = band.minutes - (intro.minutes || 0) - (wrap.minutes || 0);
    const actSum = acts.reduce((a, m) => a + (m.minutes || 0), 0);
    if (Math.abs(actSum - need) > SLACK && !ctx.probe) E(`분 합계 ${actSum + intro.minutes + wrap.minutes}분 — ${band.label} 수업 ${band.minutes}분과 ${SLACK}분 넘게 다름 (도입 ${intro.minutes} + 활동 ${acts.map((a) => a.minutes).join('+')} + 정리 ${wrap.minutes}, 활동 합은 ${need}분 안팎)`);
    if (errors.length) return { lesson: null, errors };

    const topic = ctx.topic || {};
    const clone = (v) => JSON.parse(JSON.stringify(v));
    const activities = acts.map((m, k) => Object.assign({ id: `a${k + 1}` }, clone(m.activity), { title: `활동 ${k + 1}. ${m.activity.title}`, minutes: m.minutes }));
    if (actSum !== need && Math.abs(actSum - need) <= SLACK) { const long = activities.reduce((a, b) => (b.minutes > a.minutes ? b : a)); long.minutes += need - actSum; }
    const actTitle = acts[0].activity.title;
    const wsItems = [...acts.flatMap((m) => (m.worksheet && m.worksheet.items) || []), ...wrap.worksheet.items].map(clone);
    const easyItems = [...acts.flatMap((m) => (m.worksheet && m.worksheet.easy) || []), ...((wrap.worksheet.easy && wrap.worksheet.easy.items) || [])].map(clone);
    const worksheet = { title: wrap.worksheet.title, items: wsItems };
    if (easyItems.length) worksheet.easy = Object.assign(wrap.worksheet.easy && wrap.worksheet.easy.note ? { note: wrap.worksheet.easy.note } : {}, { items: easyItems });
    const lv = (k) => acts.map((m) => m.levels[k]).join(' ');
    const lesson = {
      id: ctx.id, schema: 'edu-lesson.v1',
      catalog: { unit: `g${grade}-창체-${intro.domain}`, lesson: Number.isInteger(ctx.n) ? ctx.n : 0 },
      grade, subject: '창체', unitTitle: (ctx.domain && ctx.domain.title) || intro.domain,
      standards: [], minutes: intro.minutes + wrap.minutes + activities.reduce((x, y) => x + y.minutes, 0), formats: ['chromebook', 'projector', 'print'],
      title: ctx.title || `${topic.title || intro.title} · ${actTitle}`,
      objective: ctx.objective || topic.objective || '',
      illustration: { prompt: PROMPT(intro.intro.art.draw), scene: SCENE(intro.intro.art.banner, intro.intro.art.extra) },
      stages: [
        { id: 'intro', title: '도입', minutes: intro.minutes, teacher: intro.intro.teacher, student: intro.intro.student, demo: clone(intro.intro.demo) },
        { id: 'main', title: '전개', minutes: activities.reduce((x, y) => x + y.minutes, 0), activities },
        { id: 'wrapup', title: '정리', minutes: wrap.minutes, teacher: wrap.wrap.teacher, exitTicket: clone(wrap.wrap.exitTicket) },
      ],
      worksheet,
      differentiation: { easy: lv('easy'), base: lv('base'), challenge: lv('challenge') },
      teacherNotes: mods.map((m) => m.notes).filter(str).join(' '),
      modules: mods.map((m) => m.id),
    };
    if (ctx.safety && ctx.safety.length) lesson.safety = ctx.safety.slice();
    return { lesson, errors: [] };
  }

  // 체계도 영역(domain json 한 개)의 학년 추천 조합 → [{ n, id, ids:[도입, 활동…, 정리], title?, objective?, topic }]
  function sequencesOf(domain, grade) {
    const band = bandOf(grade); if (!domain || !band) return [];
    const b = (domain.bands || {})[band.label]; if (!b) return [];
    const seq = (b.sequences || []).find((s) => s.grade === Number(grade));
    return ((seq && seq.lessons) || []).map((x) => ({ n: x.n, id: lessonIdOf(grade, domain.code, x.n), ids: [x.intro, ...(x.activities || []), x.wrap], topic: x.topic, title: x.title, objective: x.objective }));
  }
  const topicOf = (domain, id) => { for (const b of Object.values((domain && domain.bands) || {})) { const t = (b.topics || []).find((x) => x.id === id); if (t) return t; } return null; };
  // 모듈 목록과 체계도로 추천 차시 하나를 조합한다
  function composeSequence(domain, grade, entry, get) {
    const mods = entry.ids.map(get);
    const missing = entry.ids.filter((id, i) => !mods[i]);
    if (missing.length) return { lesson: null, errors: missing.map((id) => `모듈 내용이 아직 없음: ${id}`) };
    const topic = topicOf(domain, entry.topic || mods[0].topic) || {};
    return compose(mods, { id: entry.id, grade, n: entry.n, domain, topic, title: entry.title, objective: entry.objective });
  }

  return { BANDS, SLACK, bandOf, bandByLabel, TYPES, MODULE_ID, LESSON_ID, lessonIdOf, customIdOf, hash6, shapeErrors, compose, sequencesOf, topicOf, composeSequence, PROMPT, SCENE };
}));
