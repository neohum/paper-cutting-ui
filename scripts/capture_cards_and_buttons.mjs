import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';

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
  const debugPort = 9228;

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

  await new Promise(r => setTimeout(r, 1500));

  const outDir = path.resolve('evidence/20261018-two-sheet-cards-and-buttons-stack');
  fs.mkdirSync(outDir, { recursive: true });

  // 1. Capture Top Nav Bar & Overview
  const navShot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(outDir, 'two_sheet_nav_overview.png'), Buffer.from(navShot.data, 'base64'));

  // 2. Navigate to components page
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        if (typeof window.navigateToPage === 'function') {
          window.navigateToPage('pc-components');
        } else {
          window.location.hash = '#pc-components';
        }
      })()
    `
  });
  await new Promise(r => setTimeout(r, 1000));

  const btnShot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(outDir, 'two_sheet_buttons_showcase.png'), Buffer.from(btnShot.data, 'base64'));

  console.log('Screenshots saved in', outDir);

  ws.close();
  chromeProc.kill();
}

run().catch(e => {
  console.error(e);
  process.exit(1);
});
