import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

async function getWsUrl(port) {
  return new Promise((resolve, reject) => {
    const req = http.get(`http://127.0.0.1:${port}/json`, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const list = JSON.parse(data);
          const pageTarget = list.find(t => t.type === 'page');
          if (pageTarget) resolve(pageTarget.webSocketDebuggerUrl);
          else resolve(null);
        } catch(e) {
          reject(e);
        }
      });
    });
    req.on('error', reject);
  });
}

async function run() {
  const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  const debugPort = 9226;

  const chromeProc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${debugPort}`,
    '--window-size=1440,1100',
    '--disable-gpu',
    '--no-sandbox',
    'http://127.0.0.1:3000/index.html'
  ]);

  let wsUrl;
  for (let i = 0; i < 15; i++) {
    try {
      wsUrl = await getWsUrl(debugPort);
      if (wsUrl) break;
    } catch(e) {
      await new Promise(r => setTimeout(r, 400));
    }
  }

  if (!wsUrl) {
    console.error('Could not connect to Chrome debugging port');
    chromeProc.kill();
    process.exit(1);
  }

  const ws = new WebSocket(wsUrl);
  let idCounter = 1;
  const pending = new Map();

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) reject(msg.error);
      else resolve(msg.result);
    }
  };

  await new Promise(r => ws.onopen = r);

  function send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = idCounter++;
      pending.set(id, { resolve, reject });
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  await new Promise(r => setTimeout(r, 2000));

  // Inspect computed styles of cards
  const cardInspection = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const cards = document.querySelectorAll('.pc-card, .pc-card-sheet, .pc-card-stacked, .pc-card-nested');
        const sampleCard = cards[0];
        const beforeStyle = window.getComputedStyle(sampleCard, '::before');
        const afterStyle = window.getComputedStyle(sampleCard, '::after');

        return {
          cardCount: cards.length,
          beforeDisplay: beforeStyle.display,
          afterPosition: afterStyle.position,
          afterTop: afterStyle.top,
          afterBottom: afterStyle.bottom,
          afterLeft: afterStyle.left,
          afterRight: afterStyle.right,
          afterBorderRadius: afterStyle.borderRadius,
          afterBoxShadow: afterStyle.boxShadow
        };
      })()
    `,
    returnByValue: true
  });

  console.log('Live Card Computed Styles:', JSON.stringify(cardInspection.result.value, null, 2));

  // 1. Capture Hero Overview Banner
  const heroShot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(projectRoot, 'evidence/two_sheet_hero_overview.png'), Buffer.from(heroShot.data, 'base64'));

  // 2. Click "페이퍼 UI & 특화 컴포넌트" sidebar item and capture
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const item = Array.from(document.querySelectorAll('.pc-sidebar-item')).find(el => el.textContent.includes('페이퍼 UI'));
        if (item) item.click();
      })()
    `
  });
  await new Promise(r => setTimeout(r, 1000));

  const compShot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(projectRoot, 'evidence/two_sheet_cards_components.png'), Buffer.from(compShot.data, 'base64'));

  // 3. Click "레이어드 스택 & 겹침" sidebar item and capture
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const item = Array.from(document.querySelectorAll('.pc-sidebar-item')).find(el => el.textContent.includes('레이어드 스택'));
        if (item) item.click();
      })()
    `
  });
  await new Promise(r => setTimeout(r, 1000));

  const stackShot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(projectRoot, 'evidence/two_sheet_stacking_studio.png'), Buffer.from(stackShot.data, 'base64'));

  console.log('Screenshots captured successfully in evidence/');

  ws.close();
  chromeProc.kill();
}

run().catch(e => {
  console.error(e);
  process.exit(1);
});
