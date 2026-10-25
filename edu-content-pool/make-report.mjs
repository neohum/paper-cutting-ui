#!/usr/bin/env node
// 결과 보고서 — 차시 화면, 배포·수집 경로 시험, 학급 모의 수업 회차별 결과, 교사·학생 페르소나 의견과
// 그에 따른 수정·난이도 조정을 한 장의 HTML로 묶는다. 화면 캡처는 JPEG data URI로 넣어 파일 하나로 열린다.
// 사용: node edu-content-pool/make-report.mjs --evidence <dir> [--hub http://localhost:8790] [--out edu-content-pool/report.html]
//   <dir>/sim/round<N>/<lesson>.json   N은 아무 정수(1, 2, 3…) — 있는 폴더를 모두 회차로 읽는다 (simulate-class.mjs --out)
//   <dir>/persona/*.json               (페르소나 결과, round: 정수)
//   <dir>/limits.json                  ([{title, body}] — '한계와 남은 일'. body에는 <code>만 쓸 수 있다. 없으면 기본 문구)
//   <dir>/routes.json                                                  (배포·수집 경로 시험 결과)
//   <dir>/changes.json                                                 ([{round, lesson|area, issue, change, by}])
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import { chromium } from 'playwright-core';

const here = dirname(fileURLToPath(import.meta.url));
const arg = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : d; };
const ev = arg('--evidence', null);
const hub = arg('--hub', 'http://localhost:8790');
const out = arg('--out', join(here, 'report.html'));
if (!ev) { console.error('usage: make-report.mjs --evidence <dir>'); process.exit(2); }
const readJSON = (p, d = null) => { try { return JSON.parse(readFileSync(p, 'utf8')); } catch (_) { return d; } };
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const lessons = readdirSync(join(here, 'lessons/data')).filter((f) => f.endsWith('.js')).map((f) => {
  let l; vm.runInNewContext(readFileSync(join(here, 'lessons/data', f), 'utf8'), { PaperLessons: { register(x) { l = x; } } });
  return l;
}).sort((a, b) => a.grade - b.grade || a.subject.localeCompare(b.subject, 'ko'));
const toolsOf = (l) => [...new Set(l.stages.flatMap((s) => [s.demo?.tool, ...(s.activities || []).map((a) => a.tool)]).filter(Boolean))];
const sim = (round, id) => readJSON(join(ev, 'sim', `round${round}`, `${id}.json`));
const personas = existsSync(join(ev, 'persona')) ? readdirSync(join(ev, 'persona')).filter((f) => f.endsWith('.json')).map((f) => ({ f, ...readJSON(join(ev, 'persona', f), {}) })) : [];
const simRounds = existsSync(join(ev, 'sim')) ? readdirSync(join(ev, 'sim')).map((d) => /^round(\d+)$/.exec(d)?.[1]).filter(Boolean).map(Number).sort((a, b) => a - b) : [];
const personaRounds = [...new Set(personas.map((p) => Number(p.round)).filter(Number.isInteger))].sort((a, b) => a - b);
const limits = readJSON(join(ev, 'limits.json'), null);
const routes = readJSON(join(ev, 'routes.json'), []);
const changes = readJSON(join(ev, 'changes.json'), []);

// ---- 화면 캡처(작은 JPEG) ----
// 시스템 크롬을 쓴다(playwright 번들 브라우저가 없어도 돈다). CHROME_PATH로 덮어쓸 수 있다.
const chrome = [process.env.CHROME_PATH, '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', 'C:/Program Files/Google/Chrome/Application/chrome.exe', '/usr/bin/google-chrome'].find((p) => p && existsSync(p));
const browser = await chromium.launch({ executablePath: existsSync(chrome) ? chrome : undefined, headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 760 }, deviceScaleFactor: 1 });
const shot = async (opts = {}) => `data:image/jpeg;base64,${(await page.screenshot({ type: 'jpeg', quality: 62, ...opts })).toString('base64')}`;
const shots = {};
for (const l of lessons) {
  const base = `${hub}/edu-content-pool/lessons/player.html?lesson=${l.id}`;
  await page.setViewportSize({ width: 1280, height: 760 });
  await page.goto(`${base}&class=report&seat=1`); await page.waitForSelector('[data-next]'); await page.waitForTimeout(400);
  // 생성 그림(illustration.image)이 있으면 플레이어가 그것을 띄운다 — 다 읽힌 뒤 찍어 화면 크기(최대 760px)로 줄인 JPEG가 된다
  await page.waitForFunction(() => { const i = document.querySelector('#art img'); return !i || (i.complete && i.naturalWidth > 0); }, null, { timeout: 5000 }).catch(() => {});
  // 도입 그림과 교구만 잘라 담는다(작은 칸에서도 보이게)
  const el = async (sel) => `data:image/jpeg;base64,${(await page.locator(sel).first().screenshot({ type: 'jpeg', quality: 70 })).toString('base64')}`;
  const intro = await el('#art');
  await page.click('[data-next]'); await page.waitForTimeout(500);
  const act = await el('#tool');
  await page.setViewportSize({ width: 794, height: 1123 });
  await page.goto(`${base}&role=print`); await page.waitForTimeout(700);
  const ws = await shot({ clip: { x: 0, y: 60, width: 794, height: 1063 } });
  shots[l.id] = { intro, act, ws };
}
await browser.close();

// ---- 숫자 ----
const simRows = lessons.map((l) => ({ l, by: Object.fromEntries(simRounds.map((n) => [n, sim(n, l.id)])) }));
const sumOf = (r) => r?.summary;
const latestOf = (x) => [...simRounds].reverse().map((n) => x.by[n]).find(Boolean) || null;
const totalReceived = (round) => simRows.reduce((a, x) => a + (x.by[round]?.received || 0), 0);
const totalStudents = (round) => simRows.reduce((a, x) => a + (x.by[round]?.students || 0), 0);
const lastSim = [...simRounds].reverse().find((n) => totalStudents(n) > 0);
// 한 반 인원과 학생 유형 구성은 마지막 모의 수업 기록에서 센다
const simSample = lastSim != null ? simRows.map((x) => x.by[lastSim]).find(Boolean) : null;
const classSize = simSample?.students || 0;
const KIND = { quick: '빠른 학생', steady: '보통', struggling: '어려워하는 학생', clicker: '연타', keyboard: '키보드 전용', mobile: '휴대폰', offline: '오프라인', ell: '다문화' };
const kindMix = simSample?.students_log?.length ? Object.entries(simSample.students_log.reduce((a, x) => { a[x.kind] = (a[x.kind] || 0) + 1; return a; }, {})).map(([k, v]) => `${KIND[k] || k} ${v}`).join(', ') : '';
const issueCount = (round) => personas.filter((p) => Number(p.round) === round).reduce((a, p) => a + (p.issues?.length || 0), 0);
const firstPR = personaRounds[0];
const lastRecheckRound = [...personaRounds].reverse().find((n) => n !== firstPR && personas.some((p) => Number(p.round) === n && p.recheck));
const rc = personas.filter((p) => Number(p.round) === lastRecheckRound && p.recheck);
const recheckTotal = rc.reduce((a, p) => a + p.recheck.length, 0);
const recheckFixed = rc.reduce((a, p) => a + p.recheck.filter((r) => r.status === 'fixed' || r.status === 'wontfix-ok').length, 0);
const recheckPartly = rc.reduce((a, p) => a + p.recheck.filter((r) => r.status === 'partly').length, 0);
// 페르소나 인원: 회차마다 센 뒤 가장 큰 값(같은 사람이 여러 회차에 나오므로 더하지 않는다). 파일 하나가 여러 학생이면 count·students로 센다
const headcount = (re) => Math.max(0, ...personaRounds.map((n) => personas.filter((p) => Number(p.round) === n && re.test(`${p.role || ''} ${p.persona || ''}`))
  .reduce((a, p) => a + (Number(p.count) || (Array.isArray(p.students) ? p.students.length : 1)), 0)));
const teachers = headcount(/교사/); const studentsP = headcount(/학생/);
const who = [teachers && `교사 ${teachers}명`, studentsP && `학생 ${studentsP}명`].filter(Boolean).join('·') || '페르소나';
const roundsText = (rs) => rs.map((n) => `${n}회차`).join(' → ');
const withPhoto = lessons.filter((l) => l.illustration?.image && existsSync(join(here, 'lessons', l.illustration.image)));
const anyPhoto = withPhoto.length > 0;
// limits.json 본문은 글자로 넣되 <code>…</code>만 살린다
const safeBody = (b) => esc(b).replace(/&lt;(\/?)code&gt;/g, '<$1code>');
const DEFAULT_LIMITS = [
  anyPhoto
    ? { title: '그림', body: `생성 그림이 있는 차시(${withPhoto.length}개)는 그 그림을, 없는 차시는 같은 장면을 PaperKit 모티프로 조립한 벡터판을 띄웁니다. 인쇄 활동지에는 큰 그림을 넣지 않습니다.` }
    : { title: '그림', body: '이 환경에는 이미지 생성 모델이 없어, 지정한 “Layered paper-cut illustration of …” 문장을 차시마다 <code>illustration.prompt</code>로 저장하고, 화면에는 같은 장면을 PaperKit 모티프로 조립한 벡터판을 띄웁니다. 생성 이미지가 생기면 <code>illustration.image</code>에 적으면 같은 자리에 뜹니다.' },
  { title: classSize ? `학생 ${classSize}명` : '학생', body: '실제 아이가 아니라 행동 모형과 언어 모델 페르소나입니다. 난이도 수치는 모형의 정확도 가정에 기대므로 실제 교실 1회 시범으로 다시 맞춰야 합니다.' },
  { title: '런처 허브 수집', body: '실제 런처 허브에는 도구 결과를 받는 주소(<code>/api/tools/&lt;id&gt;/submissions</code>)가 없습니다(all_market 계획서에만 있음). 그래서 허브 배포 때는 제출 코드로 모읍니다. 시험대의 자동 수집은 그 주소를 흉내 낸 것입니다.' },
  { title: '포털 제출 확인', body: '도구는 포털이 <code>edulinker_submission:ack</code>를 돌려주면 ‘선생님께 받았어요’를, 못 받았다고 하면 실패와 제출 코드를 띄웁니다. 5초 안에 답이 없으면 ‘보냈어요’(확인 안 됨)로 남습니다.' },
  { title: '회차', body: `${roundsText(personaRounds.length ? personaRounds : simRounds) || '회차 기록 없음'}까지 돌렸습니다. 마지막 회차에서 나온 새 이슈는 자동 검사로 확인했지만, 그다음 페르소나 재검증은 하지 않았습니다.` },
  { title: '범위', body: `이번에는 ${lessons.length}개 차시입니다. 나머지 차시는 같은 엔진·계약·검사(check-lesson, simulate-class)로 늘립니다.` },
];
const limitRows = Array.isArray(limits) && limits.length ? limits.filter((x) => x && x.title && x.body) : DEFAULT_LIMITS;
const bar = (v, low) => `<span class="bar ${low ? 'low' : ''}" style="--v:${v ?? 0}%"><b>${v ?? '–'}%</b></span>`;
const delta = (a, b) => (a == null || b == null ? '' : `<span class="delta ${b >= a ? 'up' : 'down'}">${b >= a ? '+' : ''}${b - a}</span>`);

const SUBJECT_COLOR = { 국어: 'rose', 수학: 'sky', 통합교과: 'buttercup', 과학: 'mint', 사회: 'peach' };
const html = `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>페이퍼커팅 수업 결과</title>
<meta name="description" content="초1~6 움직이는 페이퍼커팅 40분 차시 ${lessons.length}개 — 화면, 배포·수집 시험, ${esc(who)} 수업 시험과 난이도 조정 결과">
<style>
:root { --cream:#F8F4EC; --paper:#FFFDF9; --ink:#3D352E; --muted:#635A50; --mint:#A3D8C3; --mint-l:#EAF7F1; --mint-d:#275C46; --peach:#F7BA9E; --peach-l:#FDF1EA; --peach-d:#6E3B21; --lav:#D7CBEB; --lav-l:#F4F0FA; --lav-d:#473B6B; --lav-layer:#B8A6D9; --butter:#FEE396; --butter-l:#FFF9E8; --butter-d:#6E530F; --sky:#BDE0EA; --sky-l:#EDF7FA; --sky-d:#204C5A; --rose:#F5B8BE; --rose-l:#FDF0F1; --rose-d:#702830; --sh: 0 1.2px 2px rgba(46,30,20,.48), 0 4.5px 10px rgba(46,30,20,.26); }
* { box-sizing: border-box; }
body { margin: 0; background: var(--cream); color: var(--ink); font-family: 'Nanum Gothic', -apple-system, 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif; line-height: 1.6; word-break: keep-all; overflow-wrap: break-word; }
h1, h2, h3 { margin: 0; text-wrap: balance; line-height: 1.3; } p { margin: 0; text-wrap: pretty; }
.wrap { max-width: 1200px; margin: 0 auto; padding: 16px; display: grid; gap: 20px; }
.card { background: var(--paper); border-radius: 20px; box-shadow: inset 0 1px 0 #fff, var(--sh); padding: 20px; display: grid; gap: 12px; min-width: 0; }
.hero { background: var(--lav-l); box-shadow: inset 0 1px 0 #fff, 0 5px 0 var(--lav-layer), var(--sh); }
.muted { color: var(--muted); font-size: .9em; }
.kpis { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px; }
.kpi { background: var(--paper); border-radius: 16px; padding: 12px 14px; box-shadow: var(--sh); display: grid; }
.kpi b { font-size: 1.6em; color: var(--lav-d); } .kpi span { font-size: .85em; color: var(--muted); }
nav.toc { display: flex; flex-wrap: wrap; gap: 8px; } nav.toc a { display: inline-flex; align-items: center; min-height: 44px; padding: 6px 14px; border-radius: 14px; background: var(--paper); color: var(--ink); text-decoration: none; font-weight: 700; box-shadow: var(--sh); }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 16px; }
.lesson { padding: 0; overflow: hidden; gap: 0; }
.lesson .imgs { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; background: #E6DED0; }
.lesson img { width: 100%; height: 190px; display: block; object-fit: contain; background: #F8F4EC; }
.lesson .body { padding: 14px 16px; display: grid; gap: 6px; }
.chip { display: inline-flex; align-items: center; justify-content: center; line-height: 1; padding: 5px 10px; border-radius: 999px; font-weight: 800; font-size: .78em; justify-self: start; }
.c-rose { background: var(--rose-l); color: var(--rose-d); } .c-sky { background: var(--sky-l); color: var(--sky-d); } .c-buttercup { background: var(--butter-l); color: var(--butter-d); } .c-mint { background: var(--mint-l); color: var(--mint-d); } .c-peach { background: var(--peach-l); color: var(--peach-d); }
.prompt { font-size: .78em; color: var(--muted); background: var(--cream); border-radius: 10px; padding: 8px 10px; }
.flow { display: flex; height: 26px; border-radius: 10px; overflow: hidden; font-size: .75em; font-weight: 700; }
.flow span { display: flex; align-items: center; justify-content: center; white-space: nowrap; overflow: hidden; }
.links { display: flex; flex-wrap: wrap; gap: 6px; } .links a { font-size: .85em; color: var(--sky-d); }
table { width: 100%; border-collapse: collapse; font-size: .88em; } th, td { text-align: left; padding: 7px 8px; border-bottom: 1px solid #E6DED0; vertical-align: top; }
th { color: var(--muted); font-weight: 700; }
.scroll { overflow-x: auto; }
.bar { display: block; position: relative; height: 20px; min-width: 90px; background: #EFE8DC; border-radius: 999px; overflow: hidden; }
.bar::before { content: ''; position: absolute; inset: 0 auto 0 0; width: var(--v); background: var(--mint); } .bar.low::before { background: var(--rose); }
.bar b { position: relative; padding-left: 8px; font-size: .8em; line-height: 20px; }
.delta { font-weight: 800; font-size: .8em; } .delta { color: var(--muted); }
.sev { display: inline-flex; align-items: center; line-height: 1; padding: 3px 8px; border-radius: 8px; font-size: .75em; font-weight: 800; white-space: nowrap; }
.sev.blocker { background: var(--rose); color: var(--rose-d); } .sev.major { background: var(--peach-l); color: var(--peach-d); } .sev.minor { background: var(--sky-l); color: var(--sky-d); }
.ok { color: var(--mint-d); font-weight: 800; } .no { color: var(--rose-d); font-weight: 800; }
.ws { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px; } .ws figure { margin: 0; } .ws img { width: 100%; border-radius: 10px; box-shadow: var(--sh); background: #fff; } .ws figcaption { font-size: .8em; color: var(--muted); }
details summary { cursor: pointer; font-weight: 700; min-height: 32px; }
.persona { border: 1px solid #E6DED0; border-radius: 14px; padding: 12px 14px; display: grid; gap: 6px; }
.limits li { margin-bottom: 4px; }
@media (max-width: 520px) { .grid { grid-template-columns: 1fr; } }
</style>
</head>
<body>
<div class="wrap">
  <header class="card hero">
    <span class="chip c-mint">edulinker 콘텐츠 풀 · ${new Date().toLocaleDateString('ko-KR', { timeZone: 'Asia/Seoul' })}</span>
    <h1>움직이는 페이퍼커팅 40분 수업 — 만들고, 나눠 주고, 모으고, 고친 결과</h1>
    <p>초1~초6 ${new Set(lessons.map((l) => l.subject)).size}개 과목 ${lessons.length}개 차시를 PaperKit 엔진 위의 움직이는 교구 ${new Set(lessons.flatMap(toolsOf)).size}종으로 만들었습니다. ${esc(who)} 페르소나가 실제 브라우저로 수업하고${simRounds.length ? `, 학급 모의 수업(행동 모형 ${classSize}명 × 차시)을 ${simRounds.length}번(${roundsText(simRounds)}) 돌려` : ''} 난이도를 조정했습니다.</p>
    <div class="kpis">
      <div class="kpi"><b>${lessons.length}</b><span>40분 차시</span></div>
      <div class="kpi"><b>${new Set(lessons.flatMap(toolsOf)).size}</b><span>움직이는 교구</span></div>
      <div class="kpi"><b>${routes.filter((r) => r.ok).length}/${routes.length || 0}</b><span>배포·수집 경로 통과</span></div>
      <div class="kpi"><b>${lastSim != null ? `${totalReceived(lastSim)}/${totalStudents(lastSim)}` : '–'}</b><span>모의 수업 결과 수집${lastSim != null ? `(${lastSim}회차)` : ''}</span></div>
      ${firstPR != null ? `<div class="kpi"><b>${issueCount(firstPR)}</b><span>${firstPR}회차 페르소나 이슈</span></div>` : ''}
      ${lastRecheckRound != null ? `<div class="kpi"><b>${recheckFixed}/${recheckTotal}</b><span>${lastRecheckRound}회차에 고쳐짐 확인(일부 ${recheckPartly})</span></div>` : ''}
      <div class="kpi"><b>${changes.length}</b><span>반영한 수정</span></div>
    </div>
    <nav class="toc" aria-label="목차"><a href="#lessons">차시</a><a href="#routes">배포·수집</a><a href="#sim">모의 수업</a><a href="#personas">교사·학생 의견</a><a href="#changes">수정·난이도</a><a href="#worksheets">활동지</a><a href="#limits">한계</a></nav>
  </header>

  <section class="card" id="lessons" aria-labelledby="h-l"><h2 id="h-l">차시 ${lessons.length}개</h2>
    <p class="muted">왼쪽은 도입 장면(“Layered paper-cut illustration” 문장 틀로 ${anyPhoto ? '만든 그림, 그림이 없는 차시는 같은 장면의 벡터판' : '조립한 벡터판'}), 오른쪽은 전개 활동의 교구입니다. 막대는 도입·전개·정리 40분 흐름입니다.</p>
    <div class="grid">${lessons.map((l) => `
      <article class="card lesson">
        <div class="imgs"><img src="${shots[l.id].intro}" alt="${esc(l.title)} 도입 장면" loading="lazy"><img src="${shots[l.id].act}" alt="${esc(l.title)} 교구 화면" loading="lazy"></div>
        <div class="body">
          <span class="chip c-${SUBJECT_COLOR[l.subject] || 'lav'}">${l.grade}학년 ${esc(l.subject)} · ${esc(l.unitTitle)}</span>
          <h3>${esc(l.title)}</h3>
          <p class="muted">${esc(l.objective)}</p>
          <div class="flow" aria-label="40분 흐름">${l.stages.map((s, i) => `<span style="flex:${s.minutes};background:var(--${['butter', 'mint', 'lav'][i]})">${esc(s.title)} ${s.minutes}분</span>`).join('')}</div>
          <p class="muted">교구: ${toolsOf(l).map(esc).join(', ')} · 활동 ${l.stages[1].activities.length}개 · 문항 ${l.stages[1].activities.reduce((a, x) => a + x.items.length, 0)}개 · 출구 질문 ${l.stages[2].exitTicket.length}개</p>
          <details><summary>그림 프롬프트</summary><p class="prompt">${esc(l.illustration.prompt)}</p></details>
          <div class="links"><a href="lessons/player.html?lesson=${l.id}">학생 화면</a><a href="lessons/player.html?lesson=${l.id}&role=teacher">전자칠판</a><a href="lessons/player.html?lesson=${l.id}&role=print">활동지</a><a href="dist/${l.id}.zip">런처 묶음</a></div>
        </div>
      </article>`).join('')}</div>
  </section>

  <section class="card" id="routes" aria-labelledby="h-r"><h2 id="h-r">교사는 어떻게 나눠 주고, 결과는 어떻게 모이나</h2>
    <p class="muted">생태계 실제 코드(web-student 뷰어, 런처 허브 CSP, @edulinker/app-sdk 제출 모양)를 따라 만들고 classroom-hub.mjs 시험대에서 실제 브라우저로 확인했습니다.</p>
    <div class="scroll"><table><thead><tr><th>경로</th><th>교사가 하는 일</th><th>학생이 하는 일</th><th>결과가 모이는 곳</th><th>시험</th></tr></thead><tbody>
      ${routes.map((r) => `<tr><td><b>${esc(r.name)}</b></td><td>${esc(r.teacher)}</td><td>${esc(r.student)}</td><td>${esc(r.collect)}</td><td class="${r.ok ? 'ok' : 'no'}">${r.ok ? '통과' : '실패'}<br><span class="muted">${esc(r.evidence || '')}</span></td></tr>`).join('')}
    </tbody></table></div>
  </section>

  <section class="card" id="sim" aria-labelledby="h-s"><h2 id="h-s">학급 모의 수업 — ${classSize || '–'}명 × ${lessons.length}차시${simRounds.length ? `, ${roundsText(simRounds)}` : ''}</h2>
    <p class="muted">${simRounds.length > 1 && simRounds[0] === 1 ? '2회차부터는 교사가 문항마다 적은 난도(difficulty)를 모형에 넣어 돌렸으므로, 1회차(모든 문항 같은 난도)와 숫자를 그대로 비교하면 안 됩니다. 뒤 회차 숫자가 더 실제에 가깝습니다. ' : ''}학생은 행동 모형입니다.${kindMix ? ` ${esc(kindMix)}명이 실제 화면을 누르고 끌고 제출합니다.` : ''} '한 번에 맞힘'은 첫 시도에 맞힌 문항 비율이고, 옆 숫자는 바로 앞 회차와의 차이입니다.</p>
    ${simRounds.length ? `<div class="scroll"><table><thead><tr><th>차시</th><th>수집<br><span class="muted">(마지막 회차)</span></th>${simRounds.map((n) => `<th>한 번에 맞힘<br>${n}회차</th>`).join('')}<th>느낌(좋음·조금·많이 어려움)</th><th>교사 화면 권고</th></tr></thead><tbody>
      ${simRows.map((x) => { const last = latestOf(x); return `<tr><td>${x.l.grade}학년 ${esc(x.l.subject)}<br><span class="muted">${esc(x.l.title)}</span></td>
        <td>${last ? `${last.received}/${last.students}` : '–'}<br><span class="muted">${esc(Object.entries(last?.byRoute || {}).map(([k, v]) => `${k} ${v}`).join(' · '))}</span></td>
        ${simRounds.map((n, i) => { const v = sumOf(x.by[n])?.firstTry; const prev = i ? sumOf(x.by[simRounds[i - 1]])?.firstTry : null; return `<td>${bar(v, v < 50)} ${i ? delta(prev, v) : ''}</td>`; }).join('')}
        <td>${sumOf(last) ? `${sumOf(last).moods.good}·${sumOf(last).moods.ok}·${sumOf(last).moods.hard}` : '–'}</td>
        <td><ul>${(sumOf(last)?.recommendations || []).slice(0, 3).map((r) => `<li>${esc(r)}</li>`).join('')}</ul></td></tr>`; }).join('')}
    </tbody></table></div>` : '<p class="muted">모의 수업 기록(sim/round&lt;N&gt;/)이 없습니다.</p>'}
  </section>

  <section class="card" id="personas" aria-labelledby="h-p"><h2 id="h-p">${esc(who)}의 의견</h2>
    <p class="muted">교사 페르소나는 자기 학급에 실제로 배포하고 결과를 모아 봤고, 학생 페르소나는 직접 교구를 끌고 돌리며 풀었습니다. 모두 같은 회사의 모델(Claude)이 맡았으므로 독립 검증이 아니라 '서로 다른 관점의 사용 시험'입니다.</p>
    ${(personaRounds.length ? personaRounds : [null]).map((round) => `${round == null ? '' : `<h3>${round}회차</h3>`}<div class="grid">${personas.filter((p) => (round == null ? true : Number(p.round) === round)).map((p) => `
      <div class="persona"><b>${esc(p.persona || p.f)}</b><span class="muted">${esc(p.role || '')}</span>
        <p>${esc(p.summary || '')}</p>
        ${p.recheck ? (() => { const c = (k) => p.recheck.filter((r) => r.status === k).length; return `<p><span class="ok">고쳐짐 ${c('fixed') + c('wontfix-ok')}</span> · 일부 ${c('partly')} · <span class="no">안 고쳐짐 ${c('not fixed')}</span> · 새 이슈 ${(p.issues || []).length}</p>`; })() : ''}
        ${p.verdict ? `<p><b>판정</b> ${esc(p.verdict)}</p>` : ''}
        <details><summary>이슈 ${(p.issues || []).length}개${p.difficulty?.length ? ` · 난이도 제안 ${p.difficulty.length}개` : ''}</summary>
          <ul>${(p.issues || []).map((i) => `<li><span class="sev ${esc(i.severity)}">${esc(i.severity)}</span> <b>${esc(i.lesson || '')}</b> ${esc(i.what)} ${i.status ? `<span class="${i.status === 'fixed' ? 'ok' : 'muted'}">(${esc(i.status)})</span>` : ''}</li>`).join('')}</ul>
          ${p.difficulty?.length ? `<ul>${p.difficulty.map((d) => `<li>${esc(d.lesson)} ${esc(d.item || '')}: ${esc(d.proposal)} — ${esc(d.reason || '')}</li>`).join('')}</ul>` : ''}
        </details></div>`).join('') || '<p class="muted">없음</p>'}</div>`).join('')}
  </section>

  <section class="card" id="changes" aria-labelledby="h-c"><h2 id="h-c">고친 것과 난이도 조정</h2>
    <div class="scroll"><table><thead><tr><th>회차</th><th>대상</th><th>문제</th><th>바꾼 것</th><th>제기</th></tr></thead><tbody>
      ${changes.map((c) => `<tr><td>${esc(c.round)}</td><td>${esc(c.lesson || c.area)}</td><td>${esc(c.issue)}</td><td>${esc(c.change)}</td><td class="muted">${esc(c.by || '')}</td></tr>`).join('')}
    </tbody></table></div>
  </section>

  <section class="card" id="worksheets" aria-labelledby="h-w"><h2 id="h-w">종이 활동지 (생태계 classroom-ui 양식)</h2>
    <p class="muted">디지털 교구와 같은 그림이 흑백 칼선으로 들어갑니다. 정답 표기는 인쇄에서 숨깁니다. 모두 A4 한 장 안팎입니다.</p>
    <div class="ws">${lessons.map((l) => `<figure><img src="${shots[l.id].ws}" alt="${esc(l.title)} 활동지" loading="lazy"><figcaption>${l.grade}학년 ${esc(l.subject)} · ${esc(l.title)}</figcaption></figure>`).join('')}</div>
  </section>

  <section class="card" id="limits" aria-labelledby="h-x"><h2 id="h-x">한계와 남은 일</h2>
    <ul class="limits">
      ${limitRows.map((x) => `<li><b>${esc(x.title)}:</b> ${safeBody(x.body)}</li>`).join('')}
    </ul>
  </section>
</div>
</body>
</html>`;
writeFileSync(out, html);
console.log(`report → ${out} (${Math.round(html.length / 1024)} KB)`);
if (html.length > 4 * 1024 * 1024) console.warn("! 보고서가 4MB를 넘음 — 캡처 품질(quality)을 낮추거나 차시 수를 나눠 주세요");
