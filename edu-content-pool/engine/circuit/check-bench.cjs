// 회로 실험대 브라우저 검사 — 드래그·탭·키보드·선택 목록 잇기, 세 프로그램 과제, 선 옮김, 합선, 저장, 휴대폰 폭.
// 사용: node edu-content-pool/engine/circuit/check-bench.cjs "$PWD/edu-content-pool/vendor/_samples/circuit-wiring.html" [캡처 폴더]
// 필요: playwright(또는 playwright-core + 설치된 Chromium). 네트워크 없음.
let chromium; try { ({ chromium } = require('playwright')); } catch { ({ chromium } = require('playwright-core')); }
const OUT = process.argv[3] || require('os').tmpdir();
const url = 'file://' + process.argv[2];
let fails = 0;
const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); if (!c) fails++; };
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1440, height: 1000 } });
  const errs = [];
  p.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); });
  p.on('pageerror', (e) => errs.push(String(e)));
  const ext = [];
  p.on('request', (r) => { if (!r.url().startsWith('file:') && !r.url().startsWith('data:')) ext.push(r.url()); });
  await p.goto(url);
  await p.evaluate(() => { try { localStorage.clear(); } catch {} });
  await p.reload();
  await p.evaluate(() => window.bench.ready);
  await p.waitForTimeout(300);
  const pos = (n) => p.evaluate((n) => window.bench.pinPosition(n), n);
  const wires = () => p.evaluate(() => window.bench.toJSON().wires.map((w) => w.a + '-' + w.b));
  const ledOn = (id) => p.evaluate((id) => document.querySelector(`.cb-part[data-id="${id}"] wokwi-led`).value, id);
  const sample = async (id, n, ms) => { const s = []; for (let i = 0; i < n; i++) { s.push((await ledOn(id)) ? 1 : 0); await p.waitForTimeout(ms); } return s.join(''); };

  // 1) 실제 마우스 드래그: 13번 → 저항1 왼쪽
  let a = await pos('uno:13'), c = await pos('r1:1');
  await p.mouse.move(a.x, a.y); await p.mouse.down();
  await p.mouse.move((a.x + c.x) / 2, a.y - 40, { steps: 6 }); await p.mouse.move(c.x + 3, c.y + 2, { steps: 6 }); await p.mouse.up();
  ok((await wires()).includes('uno:13-r1:1'), '드래그로 13번→저항1 연결 (손 뗀 자리 3px 어긋나도 붙음)');
  // 2) 두 번 눌러 잇기: 저항1 오른쪽 → LED1 긴 다리
  a = await pos('r1:2'); c = await pos('led1:A');
  await p.mouse.click(a.x, a.y); await p.mouse.click(c.x, c.y);
  ok((await wires()).includes('r1:2-led1:A'), '두 번 눌러 저항1→LED1(+) 연결');
  // 3) 선택 목록으로 잇기
  const sels = p.locator('.cb-form select');
  await sels.nth(0).selectOption('led1:C'); await sels.nth(1).selectOption('uno:GND.1');
  await p.locator('.cb-form button').click();
  ok((await wires()).includes('led1:C-uno:GND.1'), '선택 목록으로 LED1(−)→GND 연결');
  // 4) 키보드로 잇기: 8번 Enter → 7번 Enter
  await p.focus('.cb-pin[data-node="uno:8"]'); await p.keyboard.press('Enter');
  await p.focus('.cb-pin[data-node="uno:7"]'); await p.keyboard.press('Enter');
  ok((await wires()).includes('uno:8-uno:7'), '키보드(Enter 두 번)로 8번→7번 연결');
  // 선 클릭 선택 후 Delete
  await p.evaluate(() => { const g = [...document.querySelectorAll('.cb-wire')].pop(); g.dispatchEvent(new MouseEvent('click', { bubbles: true })); });
  await p.keyboard.press('Delete');
  ok(!(await wires()).includes('uno:8-uno:7'), '선을 눌러 고른 뒤 Delete 로 지우기');

  // 5) 깜빡이기
  await p.selectOption('.cb-side select.cb-select >> nth=0', 'blink');
  await p.click('.cb-primary');
  const s1 = await sample('led1', 16, 150);
  ok(/1/.test(s1) && /0/.test(s1), '깜빡이기: LED1 이 13번을 따라 켜졌다 꺼짐 ' + s1);
  ok(await p.evaluate(() => window.bench.progress().done), '깜빡이기 과제 완료 판정');
  ok(await p.evaluate(() => !window.bench.result().warnings.length), '저항 있는 회로는 경고 없음');
  await p.screenshot({ path: OUT + '/desk-blink.png' });
  // 6) 선을 12번으로 옮기면 꺼진 채
  await p.evaluate(() => { const i = window.bench.toJSON().wires.findIndex((w) => w.a === 'uno:13'); window.bench.disconnect(i); window.bench.connect('uno:12', 'r1:1'); });
  const s2 = await sample('led1', 12, 150);
  ok(!/1/.test(s2), '선을 12번으로 옮기면 깜빡이기 프로그램으로는 안 켜짐 ' + s2);
  // 7) 번갈아 켜기: LED2 를 13번에
  await p.evaluate(() => { const B = window.bench; B.connect('uno:13', 'r2:1'); B.connect('r2:2', 'led2:A'); B.connect('led2:C', 'uno:GND.2'); });
  await p.selectOption('.cb-side select.cb-select >> nth=0', 'alternate');
  const pairs = []; for (let i = 0; i < 16; i++) { pairs.push(((await ledOn('led1')) ? 1 : 0) + '' + ((await ledOn('led2')) ? 1 : 0)); await p.waitForTimeout(150); }
  ok(pairs.includes('10') && pairs.includes('01') && !pairs.includes('11'), '번갈아 켜기: ' + pairs.join(' '));
  ok(await p.evaluate(() => window.bench.progress().done), '번갈아 켜기 과제 완료');
  await p.screenshot({ path: OUT + '/desk-alternate.png' });
  // 8) 버튼으로 켜기: 2번 → 버튼 → GND, LED1 을 13번으로
  await p.evaluate(() => { const B = window.bench; const i = B.toJSON().wires.findIndex((w) => w.a === 'uno:12'); B.disconnect(i); B.connect('uno:13', 'r1:1'); B.connect('uno:2', 'btn1:1.l'); B.connect('btn1:2.r', 'uno:GND.3'); });
  await p.selectOption('.cb-side select.cb-select >> nth=0', 'button-led');
  await p.waitForTimeout(300);
  ok(!(await ledOn('led1')), '버튼 뗌 → LED1 꺼짐');
  const bb = await p.locator('.cb-part[data-id="btn1"] wokwi-pushbutton').boundingBox();
  await p.mouse.move(bb.x + bb.width / 2, bb.y + bb.height / 2); await p.mouse.down(); await p.waitForTimeout(300);
  const onPressed = await ledOn('led1');
  await p.mouse.up(); await p.waitForTimeout(300);
  ok(onPressed && !(await ledOn('led1')), '실제 버튼 누름 → 켜짐, 뗌 → 꺼짐');
  ok(await p.evaluate(() => window.bench.progress().done), '버튼 과제 완료');
  // 버튼 반대쪽 GND 선을 빼면 2번은 풀업으로 HIGH → 눌러도 꺼짐
  await p.evaluate(() => { const B = window.bench; B.disconnect(B.toJSON().wires.findIndex((w) => w.a === 'btn1:2.r')); B.press('btn1', true); });
  await p.waitForTimeout(200);
  ok(!(await ledOn('led1')), 'GND 선을 빼면 눌러도 안 켜짐(회로가 동작을 결정)');
  await p.evaluate(() => window.bench.press('btn1', false));
  // 9) 합선 경고
  await p.evaluate(() => window.bench.connect('uno:5V', 'uno:GND.2'));
  ok(await p.evaluate(() => window.bench.result().warnings.some((w) => w.kind === 'short')), '5V–GND 직결 합선 경고');
  ok(await p.locator('.cb-wire.is-short').count() > 0, '합선 선이 빨간 점선으로 표시');
  await p.screenshot({ path: OUT + '/desk-short.png' });
  // 10) 저장 → 새로 고침 뒤 복원
  const before = (await wires()).length;
  await p.reload(); await p.evaluate(() => window.bench.ready); await p.waitForTimeout(200);
  ok((await wires()).length === before, '새로 고침 뒤 선 ' + before + '개 복원(localStorage)');
  // 11) 잘못된 JSON 거부
  const r = await p.evaluate(() => window.bench.load({ parts: [{ id: 'uno', type: 'board' }], wires: [{ a: 'uno:99', b: 'uno:GND.1' }] }));
  ok(r.length > 0, '없는 핀을 가리키는 회로 JSON 은 거부');
  // 12) 부품 키보드 이동 + 부품 추가
  const tag = p.locator('.cb-tag', { hasText: 'LED1' });
  const x0 = await p.evaluate(() => window.bench.toJSON().parts.find((q) => q.id === 'led1').x);
  await tag.focus(); await p.keyboard.press('Shift+ArrowLeft');
  ok((await p.evaluate(() => window.bench.toJSON().parts.find((q) => q.id === 'led1').x)) === x0 - 16, '이름표 + 화살표로 부품 이동, 선이 따라감');
  await p.click('.cb-toolbar button >> nth=2');
  ok(await p.evaluate(() => window.bench.toJSON().parts.some((q) => q.id === 'led3')), 'LED 노랑 추가 → led3');

  // 휴대폰 폭
  const m = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, hasTouch: true });
  m.on('pageerror', (e) => errs.push(String(e)));
  await m.goto(url); await m.evaluate(() => window.bench.ready); await m.waitForTimeout(300);
  const sw = await m.evaluate(() => [document.documentElement.scrollWidth, window.innerWidth]);
  ok(sw[0] <= sw[1], '휴대폰: 페이지 가로 스크롤 없음 ' + sw);
  const small = await m.evaluate(() => [...document.querySelectorAll('.cb-btn,.cb-select')].filter((e) => e.offsetParent && e.getBoundingClientRect().height < 44).length);
  ok(small === 0, '휴대폰: 버튼·선택 상자 높이 44px 이상');
  // 터치 탭 두 번으로 잇기
  const tp = async (n) => { const q = await m.evaluate((n) => { const e = document.querySelector(`.cb-pin[data-node="${n}"]`); e.scrollIntoView({ block: 'center', inline: 'center' }); const r = e.getBoundingClientRect(); return { x: r.x + r.width / 2, y: r.y + r.height / 2 }; }, n); await m.touchscreen.tap(q.x, q.y); };
  await tp('uno:13'); await tp('r1:1');
  ok(await m.evaluate(() => window.bench.toJSON().wires.some((w) => w.a === 'uno:13' && w.b === 'r1:1')), '휴대폰: 터치 두 번으로 연결');
  await m.evaluate(() => window.scrollTo(0, 0));
  await m.screenshot({ path: OUT + '/mobile.png', fullPage: true });

  ok(errs.length === 0, '콘솔 오류 0 ' + errs.slice(0, 3).join(' | '));
  ok(ext.length === 0, '외부 네트워크 요청 0 ' + ext.slice(0, 3).join(' '));
  await b.close();
  console.log(fails ? `\n${fails} FAIL` : '\nALL PASS');
  process.exit(fails ? 1 : 0);
})().catch((e) => { console.error(e); process.exit(2); });
