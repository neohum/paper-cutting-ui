#!/usr/bin/env node
// 결과 보고서 — 차시 12개의 화면, 배포·수집 경로 시험, 학급 모의 수업(30명) 1·2회차, 교사 5명·학생 30명 페르소나
// 의견과 그에 따른 수정·난이도 조정을 한 장의 HTML로 묶는다. 화면 캡처는 JPEG data URI로 넣어 파일 하나로 열린다.
// 사용: node edu-content-pool/make-report.mjs --evidence <dir> [--hub http://localhost:8790] [--out edu-content-pool/report.html]
//   <dir>/sim/round1/<lesson>.json, <dir>/sim/round2/<lesson>.json  (simulate-class.mjs --out)
//   <dir>/persona/*.json                                               (페르소나 결과)
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
const sim = (round, id) => readJSON(join(ev, 'sim', round, `${id}.json`));
const personas = existsSync(join(ev, 'persona')) ? readdirSync(join(ev, 'persona')).filter((f) => f.endsWith('.json')).map((f) => ({ f, ...readJSON(join(ev, 'persona', f), {}) })) : [];
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
const simRows = lessons.map((l) => ({ l, r1: sim('round1', l.id), r2: sim('round2', l.id) }));
const sumOf = (r) => r?.summary;
const totalReceived = (round) => simRows.reduce((a, x) => a + (x[round]?.received || 0), 0);
const totalStudents = (round) => simRows.reduce((a, x) => a + (x[round]?.students || 0), 0);
const issueCount = (round) => personas.filter((p) => String(p.round) === String(round)).reduce((a, p) => a + (p.issues?.length || 0), 0);
const r2 = personas.filter((p) => String(p.round) === '2' && p.recheck);
const recheckTotal = r2.reduce((a, p) => a + p.recheck.length, 0);
const recheckFixed = r2.reduce((a, p) => a + p.recheck.filter((r) => r.status === 'fixed' || r.status === 'wontfix-ok').length, 0);
const recheckPartly = r2.reduce((a, p) => a + p.recheck.filter((r) => r.status === 'partly').length, 0);
const bar = (v, low) => `<span class="bar ${low ? 'low' : ''}" style="--v:${v ?? 0}%"><b>${v ?? '–'}%</b></span>`;
const delta = (a, b) => (a == null || b == null ? '' : `<span class="delta ${b >= a ? 'up' : 'down'}">${b >= a ? '+' : ''}${b - a}</span>`);

const SUBJECT_COLOR = { 국어: 'rose', 수학: 'sky', 통합교과: 'buttercup', 과학: 'mint', 사회: 'peach' };
const html = `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>페이퍼커팅 수업 결과</title>
<meta name="description" content="초1~6 움직이는 페이퍼커팅 40분 차시 ${lessons.length}개 — 화면, 배포·수집 시험, 교사 5명·학생 30명 수업 시험과 난이도 조정 결과">
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
    <p>초1~초6 ${new Set(lessons.map((l) => l.subject)).size}개 과목 ${lessons.length}개 차시를 PaperKit 엔진 위의 움직이는 교구 ${new Set(lessons.flatMap(toolsOf)).size}종으로 만들었습니다. 교사 5명·학생 30명 페르소나가 실제 브라우저로 수업하고, 학급 모의 수업(행동 모형 30명 × 차시)을 두 번 돌려 난이도를 조정했습니다.</p>
    <div class="kpis">
      <div class="kpi"><b>${lessons.length}</b><span>40분 차시</span></div>
      <div class="kpi"><b>${new Set(lessons.flatMap(toolsOf)).size}</b><span>움직이는 교구</span></div>
      <div class="kpi"><b>${routes.filter((r) => r.ok).length}/${routes.length || 0}</b><span>배포·수집 경로 통과</span></div>
      <div class="kpi"><b>${totalReceived('r2') || totalReceived('r1')}/${totalStudents('r2') || totalStudents('r1')}</b><span>모의 수업 결과 수집</span></div>
      <div class="kpi"><b>${issueCount(1)}</b><span>1회차 페르소나 이슈</span></div>
      <div class="kpi"><b>${recheckFixed}/${recheckTotal}</b><span>2회차에 고쳐짐 확인(일부 ${recheckPartly})</span></div>
      <div class="kpi"><b>${changes.length}</b><span>반영한 수정</span></div>
    </div>
    <nav class="toc" aria-label="목차"><a href="#lessons">차시</a><a href="#routes">배포·수집</a><a href="#sim">모의 수업</a><a href="#personas">교사·학생 의견</a><a href="#changes">수정·난이도</a><a href="#worksheets">활동지</a><a href="#limits">한계</a></nav>
  </header>

  <section class="card" id="lessons" aria-labelledby="h-l"><h2 id="h-l">차시 ${lessons.length}개</h2>
    <p class="muted">왼쪽은 도입 장면(“Layered paper-cut illustration” 문장 틀의 벡터판), 오른쪽은 전개 활동의 교구입니다. 막대는 도입·전개·정리 40분 흐름입니다.</p>
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

  <section class="card" id="sim" aria-labelledby="h-s"><h2 id="h-s">학급 모의 수업 — 30명 × ${lessons.length}차시, 1회차 → 2회차</h2>
    <p class="muted">2회차는 교사가 문항마다 적은 난도(difficulty)를 모형에 넣어 돌렸으므로, 1회차(모든 문항 같은 난도)와 숫자를 그대로 비교하면 안 됩니다. 2회차 숫자가 더 실제에 가깝습니다. 학생은 행동 모형입니다. 빠른 학생 5, 보통 9, 어려워하는 학생 5, 연타 3, 키보드 전용 2, 휴대폰 3, 오프라인 2, 다문화 1명이 실제 화면을 누르고 끌고 제출합니다. '한 번에 맞힘'은 첫 시도에 맞힌 문항 비율입니다.</p>
    <div class="scroll"><table><thead><tr><th>차시</th><th>수집</th><th>한 번에 맞힘 1회차<br><span class="muted">(모든 문항 같은 난도)</span></th><th>2회차<br><span class="muted">(문항별 난도 반영)</span></th><th>느낌(좋음·조금·많이 어려움)</th><th>교사 화면 권고(2회차)</th></tr></thead><tbody>
      ${simRows.map(({ l, r1, r2 }) => `<tr><td>${l.grade}학년 ${esc(l.subject)}<br><span class="muted">${esc(l.title)}</span></td>
        <td>${r2 ? `${r2.received}/${r2.students}` : r1 ? `${r1.received}/${r1.students}` : '–'}<br><span class="muted">${esc(Object.entries((r2 || r1)?.byRoute || {}).map(([k, v]) => `${k} ${v}`).join(' · '))}</span></td>
        <td>${bar(sumOf(r1)?.firstTry, sumOf(r1)?.firstTry < 50)}</td><td>${bar(sumOf(r2)?.firstTry, sumOf(r2)?.firstTry < 50)} ${delta(sumOf(r1)?.firstTry, sumOf(r2)?.firstTry)}</td>
        <td>${sumOf(r2 || r1) ? `${sumOf(r2 || r1).moods.good}·${sumOf(r2 || r1).moods.ok}·${sumOf(r2 || r1).moods.hard}` : '–'}</td>
        <td><ul>${(sumOf(r2 || r1)?.recommendations || []).slice(0, 3).map((x) => `<li>${esc(x)}</li>`).join('')}</ul></td></tr>`).join('')}
    </tbody></table></div>
  </section>

  <section class="card" id="personas" aria-labelledby="h-p"><h2 id="h-p">교사 5명·학생 30명의 의견</h2>
    <p class="muted">교사 페르소나는 자기 학급에 실제로 배포하고 결과를 모아 봤고, 학생 페르소나(학년별 5명씩)는 직접 교구를 끌고 돌리며 풀었습니다. 모두 같은 회사의 모델(Claude)이 맡았으므로 독립 검증이 아니라 '서로 다른 관점의 사용 시험'입니다.</p>
    ${[1, 2].map((round) => `<h3>${round}회차</h3><div class="grid">${personas.filter((p) => String(p.round) === String(round)).map((p) => `
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
      <li><b>그림:</b> 이 환경에는 이미지 생성 모델이 없어, 지정한 “Layered paper-cut illustration of …” 문장을 차시마다 <code>illustration.prompt</code>로 저장하고, 화면에는 같은 장면을 PaperKit 모티프로 조립한 벡터판을 띄웁니다. 생성 이미지가 생기면 같은 자리에 바꿔 넣으면 됩니다.</li>
      <li><b>학생 30명:</b> 실제 아이가 아니라 행동 모형과 언어 모델 페르소나입니다. 난이도 수치는 모형의 정확도 가정에 기대므로 실제 교실 1회 시범으로 다시 맞춰야 합니다.</li>
      <li><b>런처 허브 수집:</b> 실제 런처 허브에는 도구 결과를 받는 주소(<code>/api/tools/&lt;id&gt;/submissions</code>)가 없습니다(all_market 계획서에만 있음). 그래서 허브 배포 때는 제출 코드로 모읍니다. 시험대의 자동 수집은 그 주소를 흉내 낸 것입니다.</li>
      <li><b>포털 제출 확인:</b> 학생 포털 뷰어는 받았다는 답을 도구에 돌려주지 않습니다. 도구는 넘긴 것으로 보고 ‘보냈어요’를 띄웁니다. 포털이 <code>edulinker_submission:ack</code>를 돌려주면 확실해집니다.</li>
      <li><b>3회차 없음:</b> 2회차 재검증에서 나온 새 이슈는 고쳐 자동 검사·실포인터로 확인했지만, 페르소나 3회차 재검증은 하지 않았습니다.</li>
      <li><b>범위:</b> 이번에는 학년마다 대표 차시 2개 안팎(12개)입니다. 나머지 차시는 같은 엔진·계약·검사(check-lesson, simulate-class)로 늘립니다.</li>
    </ul>
  </section>
</div>
</body>
</html>`;
writeFileSync(out, html);
console.log(`report → ${out} (${Math.round(html.length / 1024)} KB)`);
