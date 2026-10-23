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
  const debugPort = 9232;

  const chromeProc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${debugPort}`,
    '--window-size=1440,2200',
    '--disable-gpu',
    '--no-sandbox',
    'http://127.0.0.1:3333/index.html'
  ]);

  await new Promise(r => setTimeout(r, 1500));

  let wsUrl;
  for (let i = 0; i < 10; i++) {
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

  function sendCommand(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = idCounter++;
      pending.set(id, { resolve, reject });
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  await sendCommand('Page.enable');
  await sendCommand('DOM.enable');

  await new Promise(r => setTimeout(r, 1500));

  const outDir = path.join(projectRoot, 'evidence', '20261024-index-radix-primitives');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // Switch active page view to 'pc-components'
  await sendCommand('Runtime.evaluate', {
    expression: `
      document.body.classList.add('pc-page-mode');
      document.querySelectorAll('.pc-page-view').forEach(view => {
        const isTarget = view.id === 'pc-components';
        view.classList.toggle('is-active-page', isTarget);
        if (isTarget) {
          view.style.display = 'block';
        } else {
          view.style.display = 'none';
        }
      });
      window.scrollTo(0, 0);
    `
  });
  await new Promise(r => setTimeout(r, 1200));

  // 1. Capture Radix Primitives live deck inside index.html
  await sendCommand('Runtime.evaluate', {
    expression: `
      const el = document.getElementById('pc-radix-primitives-live-deck');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
    `
  });
  await new Promise(r => setTimeout(r, 800));

  const captureDeck = await sendCommand('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(outDir, 'index_radix_primitives_deck.png'), Buffer.from(captureDeck.data, 'base64'));
  console.log('Saved index_radix_primitives_deck.png');

  // 2. Scroll to buttons suite
  await sendCommand('Runtime.evaluate', {
    expression: `
      const el = document.getElementById('pc-suite-buttons');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    `
  });
  await new Promise(r => setTimeout(r, 800));

  const captureButtons = await sendCommand('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(outDir, 'index_buttons_and_components.png'), Buffer.from(captureButtons.data, 'base64'));
  console.log('Saved index_buttons_and_components.png');

  // 3. Scroll to forms & toggles suite
  await sendCommand('Runtime.evaluate', {
    expression: `
      const el = document.getElementById('pc-suite-forms');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    `
  });
  await new Promise(r => setTimeout(r, 800));

  const captureForms = await sendCommand('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(outDir, 'index_forms_and_toggles.png'), Buffer.from(captureForms.data, 'base64'));
  console.log('Saved index_forms_and_toggles.png');

  ws.close();
  chromeProc.kill();
  console.log('Capture complete!');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
