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
  const debugPort = 9230;

  const chromeProc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${debugPort}`,
    '--window-size=1440,1100',
    '--disable-gpu',
    '--no-sandbox',
    'http://127.0.0.1:3000/index.html#pc-components'
  ]);

  let wsUrl;
  for (let i = 0; i < 20; i++) {
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

  const send = (method, params = {}) => {
    return new Promise((resolve, reject) => {
      const id = idCounter++;
      pending.set(id, { resolve, reject });
      ws.send(JSON.stringify({ id, method, params }));
    });
  };

  await new Promise(r => ws.onopen = r);

  await send('Page.enable');
  await send('DOM.enable');
  await send('CSS.enable');

  // Wait for rendering
  await new Promise(r => setTimeout(r, 1500));

  const outDir = path.join(process.cwd(), 'evidence', '20261018-universal-papercut-craft');

  // 1. Capture Aperture & Die-Cut showcase banner
  await send('Runtime.evaluate', {
    expression: `document.querySelector('#pc-components .pc-aperture-header').scrollIntoView({ block: 'center' });`
  });
  await new Promise(r => setTimeout(r, 600));

  const bannerShot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(outDir, 'aperture_diecut_showcase.png'), Buffer.from(bannerShot.data, 'base64'));
  console.log('✅ Captured aperture_diecut_showcase.png');

  // 2. Capture Recessed Depth & Die-cut ticket card grid
  await send('Runtime.evaluate', {
    expression: `
      const el = document.querySelector('#pc-suite-cards');
      if (el) el.scrollIntoView({ block: 'start' });
    `
  });
  await new Promise(r => setTimeout(r, 600));

  const cardsShot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(outDir, 'diecut_ticket_cards.png'), Buffer.from(cardsShot.data, 'base64'));
  console.log('✅ Captured diecut_ticket_cards.png');

  ws.close();
  chromeProc.kill();
  console.log('🎉 All evidence captured successfully!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
