#!/usr/bin/env node
// 교실 허브 모의 서버 — 배포·수집 경로를 실제 브라우저로 시험하려고 만든 것이다.
// 실제 런처(all_market/apps/launcher) 허브를 흉내 낸다:
//   - /dist/<lessonId>/  : 번들을 매개변수 없이 서빙, 런처와 같은 CSP(connect-src 'self', frame-ancestors 'none')
//   - POST /api/tools/<appId>/submissions : @edulinker/app-sdk가 LAN에서 쓰는 주소. 실제 허브에는 아직 없는 경로다
//     (all_market/plans/treasure-codex-classroom-results.plan.md에 계획만 있음) — 런처 쪽 추가 작업으로 넘긴다.
//   - /portal/ : 학생 포털(web-student InAppWebViewerModal) 흉내. iframe의 edulinker_submission 메시지를
//     받아 POST /api/portal/materials/<id>/submit(web_material_submissions 모양)으로 저장하고, 저장 결과를
//     edulinker_submission:ack { clientId, ok }로 도구에 돌려준다(portal-sim.html?ack=0이면 답하지 않음).
//   - GET /api/results?class=&lesson= : 교사 대시보드가 읽는다(허브·포털 두 길 모두)
// 사용: node edu-content-pool/classroom-hub.mjs [--port 8790] [--out results.jsonl]
import { createServer } from 'node:http';
import { readFile, appendFile, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, normalize, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const arg = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : d; };
const port = Number(arg('--port', 8790));
const out = arg('--out', null);
const repo = join(here, '..');
const results = [];
const assignments = []; // web-student web_assignments 흉내: { id, title, target_grade, target_class_num, payload_json: { external_links } }

const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg' };
// all_market/apps/launcher/internal/server/static_bundle.go baseBundleCSP 그대로(2026-10-25 기준)
const LAUNCHER_CSP = "default-src 'self'; connect-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; font-src 'self'; script-src 'self' 'unsafe-inline'; form-action 'none'; frame-ancestors 'none'; base-uri 'none'; object-src 'none'";

function send(res, code, body, headers = {}) {
  res.writeHead(code, { 'cache-control': 'no-store', ...headers });
  res.end(body);
}
const json = (res, code, obj) => send(res, code, JSON.stringify(obj), { 'content-type': 'application/json; charset=utf-8' });

async function body(req) {
  let size = 0; const chunks = [];
  for await (const c of req) { size += c.length; if (size > 512 * 1024) throw new Error('too large'); chunks.push(c); }
  return JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}');
}

// 개인정보 거름: 이름·전화·주민번호 같은 모양이 들어 있으면 받지 않는다(studentPii: none)
const PII = /\d{6}-?[1-4]\d{6}|01[016789]-?\d{3,4}-?\d{4}|[\w.+-]+@[\w-]+\.[\w.]+/;

async function store(kind, payload, extra) {
  const text = JSON.stringify(payload);
  if (PII.test(text)) throw Object.assign(new Error('개인정보로 보이는 값이 있어 받지 않았습니다'), { status: 422 });
  const r = payload.data || payload;
  const row = {
    receiptId: `rc-${results.length + 1}`, receivedAt: new Date().toISOString(), via: kind,
    appId: payload.appId, materialId: payload.materialId || extra.materialId || null, studentKey: payload.studentKey,
    deviceLabel: payload.deviceLabel, score: payload.score, totalScore: payload.totalScore, comment: payload.comment,
    clientId: typeof payload.clientId === 'string' ? payload.clientId.slice(0, 64) : null,
    lessonId: r.lessonId, classCode: r.classCode, seat: r.seat, data: r,
  };
  // 같은 학생의 같은 차시 재제출은 덮어쓴다(web_assignment_submissions의 assignment+student 유일과 같음)
  // 포털은 실제처럼 '로그인한 학생'(deviceLabel)으로 묶는다 — 과제 안에서 번호를 잘못 넣어도 남의 결과를 덮지 않게
  const same = kind === 'portal' ? (x) => x.via === 'portal' && x.materialId === row.materialId && x.deviceLabel === row.deviceLabel
    : (x) => x.appId === row.appId && x.studentKey === row.studentKey;
  const i = results.findIndex(same);
  if (i >= 0) results[i] = row; else results.push(row);
  if (out) await appendFile(out, `${JSON.stringify(row)}\n`);
  return row;
}

createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  try {
    if (req.method === 'OPTIONS') return send(res, 204, '');
    let m;
    if (req.method === 'POST' && (m = /^\/api\/tools\/([^/]+)\/submissions$/.exec(url.pathname))) {
      // 런처 번들(/dist/)에서 왔으면 허브, 그 밖(링크·QR로 연 플레이어)이면 링크 수집
      const row = await store(/\/dist\//.test(req.headers.referer || '') ? 'hub' : 'link', await body(req), {});
      return json(res, 201, { receiptId: row.receiptId, receivedAt: row.receivedAt });
    }
    if (req.method === 'POST' && (m = /^\/api\/portal\/materials\/([^/]+)\/submit$/.exec(url.pathname))) {
      const row = await store('portal', await body(req), { materialId: decodeURIComponent(m[1]) });
      return json(res, 201, { receiptId: row.receiptId, receivedAt: row.receivedAt, clientId: row.clientId });
    }
    if (req.method === 'POST' && url.pathname === '/api/results/import') {
      const row = await store('code', await body(req), {});
      return json(res, 201, { receiptId: row.receiptId });
    }
    if (req.method === 'POST' && url.pathname === '/api/portal/assignments') {
      const a = await body(req);
      const links = a.payload_json?.external_links;
      // web-student lib/assignmentInput.ts와 같은 검사: http(s) 주소만
      if (!Array.isArray(links) || !links.length || links.some((l) => !/^https?:\/\//.test(typeof l === 'string' ? l : l.url))) throw Object.assign(new Error('external_links는 http(s) 주소 배열이어야 합니다'), { status: 422 });
      const row = { id: `as-${assignments.length + 1}`, status: 'published', created_at: new Date().toISOString(), ...a };
      assignments.push(row);
      return json(res, 201, row);
    }
    if (req.method === 'GET' && url.pathname === '/api/portal/assignments') return json(res, 200, assignments);
    if (req.method === 'GET' && url.pathname === '/api/results') {
      const c = url.searchParams.get('class'); const l = url.searchParams.get('lesson');
      return json(res, 200, results.filter((r) => (!c || r.classCode === c) && (!l || r.lessonId === l)));
    }
    if (req.method === 'DELETE' && url.pathname === '/api/results') { results.length = 0; assignments.length = 0; return json(res, 200, { ok: true }); }

    // 정적 파일. /dist/<id>/는 번들 폴더(edu-content-pool/dist)에서, 나머지는 저장소 루트에서
    let rel = decodeURIComponent(url.pathname);
    let file; let csp = null;
    if (rel.startsWith('/dist/')) { file = join(here, rel); csp = LAUNCHER_CSP; }
    else file = join(repo, rel);
    file = normalize(file);
    if (!file.startsWith(repo)) return send(res, 403, 'forbidden');
    if (existsSync(file) && (await stat(file)).isDirectory()) file = join(file, 'index.html');
    if (!existsSync(file)) return send(res, 404, 'not found');
    const headers = { 'content-type': types[extname(file)] || 'application/octet-stream' };
    if (csp) headers['content-security-policy'] = csp;
    return send(res, 200, await readFile(file), headers);
  } catch (e) {
    return json(res, e.status || 400, { error: e.message });
  }
}).listen(port, () => console.log(`classroom-hub http://localhost:${port}/  (teacher: /edu-content-pool/lessons/teacher.html)`));
