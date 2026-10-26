#!/usr/bin/env node
// 배포·수집 경로 시험 — 교사 화면에서 배포하고 학생 화면에서 제출한 뒤 교사 화면에 모이는지 실제 브라우저로 본다.
// 사용: node edu-content-pool/test-routes.mjs [lessonId] [--hub http://localhost:8790] [--out routes.json]   (classroom-hub.mjs, build-bundles.mjs 먼저)
import { existsSync, writeFileSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { chromium } from 'playwright-core';

const here = dirname(fileURLToPath(import.meta.url));
const id = process.argv[2] && !process.argv[2].startsWith('--') ? process.argv[2] : 'g2-math-clock';
const arg = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : d; };
const out = arg('--out', null);
const hub = arg('--hub', 'http://localhost:8790').replace(/\/$/, '');
const L = `${hub}/edu-content-pool/lessons`;
// 포털은 학년·반으로 과제를 거르므로 반 코드는 '<차시 학년>-<반>' 모양
const grade = (() => { const w = {}; new Function('window', readFileSync(join(here, 'lessons/manifest.js'), 'utf8'))(w); return w.EDU_LESSONS.find((l) => l.id === id).grade; })();
const cls = `${grade}-${Date.now() % 90 + 10}`;
// 시스템 크롬을 쓴다(playwright 번들 브라우저가 없어도 돈다). CHROME_PATH로 덮어쓸 수 있다.
const chrome = [process.env.CHROME_PATH, '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', 'C:/Program Files/Google/Chrome/Application/chrome.exe', '/usr/bin/google-chrome'].find((p) => p && existsSync(p));
const browser = await chromium.launch({ executablePath: existsSync(chrome) ? chrome : undefined, headless: true });
const errors = [];
const page = async (vp = { width: 1366, height: 800 }) => { const p = await browser.newPage({ viewport: vp }); p.on('pageerror', (e) => errors.push(e.message)); p.on('console', (m) => { if (m.type() === 'error' && !/ERR_INTERNET_DISCONNECTED/.test(m.text())) errors.push(m.text()); }); return p; };
const rows = async () => (await (await fetch(`${hub}/api/results?lesson=${id}&class=${cls}`)).json());
const results = [];
const record = async (r, fn) => { try { const ev = await fn(); results.push({ ...r, ok: true, evidence: ev }); } catch (e) { results.push({ ...r, ok: false, evidence: e.message.split('\n')[0] }); } };
// 학생이 정리 단계로 가서 제출(문항 풀이는 check-lesson·simulate-class가 따로 본다)
// 학생 화면에는 정리로 건너뛰는 길이 없으므로 시험용 훅(__pl.goto)으로 간다. E는 evaluate가 되는 Page/Frame.
const finish = async (F, E) => {
  await E.evaluate(() => window.__pl.goto(2));
  const groups = await E.evaluate(() => [...new Set([...document.querySelectorAll('#exit input[type=radio]')].map((x) => x.name))]);
  for (const g of groups) await F.locator(`#exit input[name="${g}"]`).first().check();
  await F.locator('#exit button[type="submit"]').click();
  if (await F.locator('#exit-warn:not([hidden])').count()) await F.locator('#exit button[type="submit"]').click();
  await F.locator('.pl-done').waitFor({ timeout: 8000 });
};

const T = await page();
await T.goto(`${L}/teacher.html`); await T.fill('#class', cls); await T.click(`[data-lesson="${id}"]`);

// 포털 시험대에서 과제를 열어 제출하고, 도구가 받음 확인(ack)을 어떻게 보였는지 돌려준다.
// ack: '1' 저장 뒤 확인을 돌려줌 · '0' 답 안 함(지금의 실제 포털) · 'fail' 못 받았다고 답함
const portalRun = async (ack, seat) => {
  const S = await page(); const [g, c] = cls.split('-');
  await S.goto(`${L}/portal-sim.html?ack=${ack}&keep=1`); await S.fill('input[name="g"]', g); await S.fill('input[name="c"]', c); await S.fill('input[name="n"]', seat); await S.click('#who button');
  await S.locator('[data-open]').last().click();
  const F = S.frameLocator('#frame'); await F.locator('[data-next]').first().waitFor();
  const E = S.frames().find((f) => f.url().includes('player.html'));
  await finish(F, E); await S.waitForFunction(() => window.__portalSubmitted >= 1, null, { timeout: 6000 });
  const early = await E.evaluate(() => ({ portal: window.__lastResult.sent.portal, head: document.querySelector('#done-head').textContent }));
  // 확인이 없으면 5초 기다린 뒤 'unconfirmed'가 된다
  await E.waitForFunction(() => window.__lastResult.sent.portal !== 'pending', null, { timeout: 8000 });
  const late = await E.evaluate(() => ({ portal: window.__lastResult.sent.portal, delivered: window.__lastResult.sent.delivered, head: document.querySelector('#done-head').textContent, btn: document.querySelector('#exit button[type="submit"]').textContent.trim(), code: !!document.querySelector('#done-short .pl-short__code') }));
  await S.close();
  return { early, late };
};

// 실제 뷰어처럼 저장 성공 300ms 뒤 iframe을 닫는 포털: 닫히기 전에 도구가 '받았어요'를 바로 그렸는지 본다
const portalClose = async (seat) => {
  const S = await page(); const [g, c] = cls.split('-');
  await S.goto(`${L}/portal-sim.html?ack=1`); await S.fill('input[name="g"]', g); await S.fill('input[name="c"]', c); await S.fill('input[name="n"]', seat); await S.click('#who button');
  await S.locator('[data-open]').last().click();
  const F = S.frameLocator('#frame'); await F.locator('[data-next]').first().waitFor();
  const E = S.frames().find((f) => f.url().includes('player.html'));
  // 받음 확인 사건이 오는 그 순간의 제목을 프레임 안에서 붙잡아 부모 창에 남긴다(곧 iframe이 닫힌다)
  await E.evaluate(() => document.addEventListener('lesson:ack', () => { parent.__headAtAck = document.querySelector('#done-head')?.textContent || ''; }));
  await finish(F, E);
  await S.waitForFunction(() => window.__headAtAck != null && document.querySelector('#viewer').hidden, null, { timeout: 6000 });
  const head = await S.evaluate(() => window.__headAtAck); await S.close();
  return head;
};

await record({ name: '학생 포털 과제 (do.io.kr)', teacher: "교사 화면 '학생 포털 과제' → 과제 게시(web_assignments.external_links)", student: '포털 로그인 → 과제 열기(앱 내 뷰어 iframe) → 수업 → 제출', collect: 'edulinker_submission 메시지 → 포털이 자료 제출함(web_material_submissions)에 저장 → edulinker_submission:ack로 받음 확인' }, async () => {
  await T.click('#portal-post'); await T.waitForFunction(() => /게시했습니다/.test(document.querySelector('#portal-status').textContent));
  const { late } = await portalRun('1', '1');
  if (late.portal !== 'received' || !/받았어요/.test(late.head) || !/받았어요/.test(late.btn)) throw new Error(`받음 확인이 화면에 안 보임: ${JSON.stringify(late)}`);
  const r = (await rows()).find((x) => x.seat === '1'); if (!r || r.via !== 'portal') throw new Error('포털 제출이 수집되지 않음');
  if (!r.clientId) throw new Error('포털 저장에 clientId 없음');
  const closing = await portalClose('7');
  if (!/받았어요/.test(closing)) throw new Error(`iframe이 닫히기 전에 받음 확인이 그려지지 않음: '${closing}'`);
  return `포털 중계 저장 → ${r.receiptId}, deviceLabel '${r.deviceLabel}', 받음 확인 → '${late.head}'`;
});

await record({ name: '포털 받음 확인 없음·실패', teacher: '—', student: '확인을 돌려주지 않는 포털 / 저장 실패를 돌려주는 포털에서 제출', collect: '확인 없음 → “보냈어요”(확인 안 됨) 유지, 실패 → 실패 안내와 제출 코드' }, async () => {
  const none = await portalRun('0', '5');
  if (none.early.portal !== 'pending' || none.late.portal !== 'unconfirmed' || !none.late.delivered || !/보냈어요/.test(none.late.btn) || /받았어요/.test(none.late.head)) throw new Error(`확인 없음 처리 이상: ${JSON.stringify(none)}`);
  const bad = await portalRun('fail', '6');
  if (bad.late.portal !== 'rejected' || bad.late.delivered || !bad.late.code || !/받지 못했어요/.test(bad.late.head)) throw new Error(`실패 처리 이상: ${JSON.stringify(bad)}`);
  return `확인 없음 → '${none.late.btn}'(5초 뒤 unconfirmed), 실패 → '${bad.late.head}' + 제출 코드 표시`;
});

await record({ name: '링크·QR (크롬북 바로가기)', teacher: "교사 화면 '링크·QR' → 학생 링크 복사 또는 QR을 전자칠판에 띄움", student: 'QR·링크로 열기(반·번호는 링크에) → 수업 → 제출', collect: '링크에 든 수집 주소로 바로 전송(교사 PC 시험대)' }, async () => {
  const url = await T.inputValue('#student-url'); const qr = await T.locator('#qr svg').count(); if (!qr) throw new Error('QR 없음');
  const S = await page(); await S.goto(`${url}&seat=2`); await finish(S, S);
  const r = (await rows()).find((x) => x.seat === '2'); if (!r) throw new Error('링크 제출이 수집되지 않음');
  return `QR SVG 생성, 제출 경로 ${r.via}`;
});

await record({ name: '런처 교실 허브 (LAN)', teacher: "교사 화면 '런처 교실 허브' → 묶음(zip)을 런처에 설치 → 허브 QR/주소 공유", student: '허브 주소 /dist/<차시>/?class=&seat= 열기(런처가 붙임) → 수업 → 제출', collect: '같은 출처 /api/tools/<id>/submissions (실제 허브에는 아직 없음 → 시험대가 흉내)' }, async () => {
  const csp = (await fetch(`${hub}/dist/${id}/`)).headers.get('content-security-policy');
  if (!/connect-src 'self'/.test(csp) || !/font-src 'self'/.test(csp)) throw new Error('허브 CSP가 실제 런처와 다름');
  const S = await page(); await S.goto(`${hub}/dist/${id}/?class=${encodeURIComponent(cls)}&seat=3`); await finish(S, S);
  const font = await S.evaluate(() => document.fonts.check('16px uicons-regular-rounded'));
  const r = (await rows()).find((x) => x.seat === '3'); if (!r || r.via !== 'hub') throw new Error('허브 제출이 수집되지 않음');
  return `실제 런처 CSP에서 콘솔 오류 0, 아이콘 글꼴 동봉(${font ? '로드됨' : '안 됨'}), 수집 ${r.via}`;
});

await record({ name: '오프라인 제출 코드', teacher: "교사 화면 '결과 모으기' → 제출 코드 붙여 넣기 또는 결과 파일 넣기", student: '와이파이가 끊긴 채 제출 → 화면의 EL1. 코드를 보여 주거나 결과 파일 저장', collect: '교사 화면에서 코드 해독 → 같은 표에 합쳐짐(재접속 시 대기열 자동 재전송도 시도)' }, async () => {
  const ctx = await browser.newContext(); const S = await ctx.newPage();
  await S.goto(`${L}/player.html?lesson=${id}&class=${cls}&seat=4&collect=${encodeURIComponent(`${hub}/api/tools/x/submissions`)}`);
  await ctx.setOffline(true); await finish(S, S);
  const sent = await S.evaluate(() => window.__lastResult.sent); if (sent.delivered) throw new Error('오프라인인데 전송됨으로 표시');
  const short = await S.textContent('.pl-short__code');
  await T.fill('#codes', short); await T.click('#add-codes'); await T.waitForTimeout(800);
  const r = (await rows()).find((x) => x.seat === '4'); if (!r) throw new Error('코드 가져오기 후 수집 안 됨');
  // 재접속 재전송(대기열)
  await ctx.setOffline(false); await S.reload(); await S.waitForTimeout(1500);
  const q = await S.evaluate(() => JSON.parse(localStorage.getItem('edu-lesson-results-queue') || '[]').length);
  return `짧은 코드 '${short}'(${short.replace(/-/g, '').length}자) 교사 붙여 넣기 성공, 재접속 뒤 대기열 ${q}건 남음`;
});

await record({ name: '종이 활동지', teacher: "교사 화면 '종이' → 기본/쉬운 활동지 인쇄", student: '활동지에 쓰기·그리기', collect: '교사가 걷어서 확인(디지털 수집 없음)' }, async () => {
  const S = await page({ width: 794, height: 1123 }); const pages = [];
  for (const v of ['', '&variant=easy']) { await S.goto(`${L}/player.html?lesson=${id}&role=print${v}`); await S.waitForTimeout(500); await S.emulateMedia({ media: 'print' }); const pdf = await S.pdf({ format: 'A4', printBackground: true }); pages.push((pdf.toString('latin1').match(/\/Type\s*\/Page[^s]/g) || []).length); }
  if (pages.some((p) => p > 2)) throw new Error(`쪽수 ${pages}`);
  return `A4 기본 ${pages[0]}쪽 · 쉬운 ${pages[1]}쪽`;
});

await record({ name: 'all-market 등록 묶음', teacher: '런처 묶음(zip) 업로드', student: '—', collect: '—' }, async () => {
  const o = execFileSync('node', [join(here, 'build-bundles.mjs'), '--validate'], { encoding: 'utf8' });
  if (!/schema ok/.test(o)) throw new Error(o);
  return o.trim().split('\n').pop();
});

await record({ name: '교사 대시보드 집계', teacher: '결과 표·난이도 권고·CSV', student: '—', collect: '—' }, async () => {
  await T.waitForTimeout(3500);
  const n = await T.evaluate(() => window.__summary?.n);
  if (n < 4) throw new Error(`대시보드 ${n}명`);
  return `대시보드에 ${n}명 집계(포털·링크·허브·코드 합침), 권고 ${await T.evaluate(() => window.__summary.recommendations.length)}개`;
});

await browser.close();
if (errors.length) results.push({ name: '콘솔 오류', ok: false, evidence: errors.slice(0, 5).join(' | ') });
if (out) writeFileSync(out, JSON.stringify(results, null, 1));
for (const r of results) console.log(`${r.ok ? '✓' : '✗'} ${r.name} — ${r.evidence}`);
process.exit(results.every((r) => r.ok) ? 0 : 1);
