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
  const debugPort = 9229;

  const chromeProc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${debugPort}`,
    '--window-size=1440,1600',
    '--disable-gpu',
    '--no-sandbox',
    'http://127.0.0.1:3333/papercut-svg-primitives.html'
  ]);

  await new Promise(r => setTimeout(r, 1200));

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

  function send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = idCounter++;
      pending.set(id, { resolve, reject });
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  await new Promise(r => setTimeout(r, 1500));

  // 1. Top Section & Hero Banner Screenshot
  let shot = await send('Page.captureScreenshot', { format: 'png' });
  const outDir = path.join(projectRoot, 'evidence/20261024-full-svg-primitives');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  fs.writeFileSync(path.join(outDir, 'svg_primitives_top_hero.png'), Buffer.from(shot.data, 'base64'));
  console.log('Saved svg_primitives_top_hero.png');

  // 2. Scroll to Grid Section
  await send('Runtime.evaluate', {
    expression: `window.scrollTo(0, 750);`
  });
  await new Promise(r => setTimeout(r, 600));

  shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(outDir, 'svg_primitives_components_grid.png'), Buffer.from(shot.data, 'base64'));
  console.log('Saved svg_primitives_components_grid.png');

  // 3. Scroll to Accordion & Tabs Section
  await send('Runtime.evaluate', {
    expression: `window.scrollTo(0, 1400);`
  });
  await new Promise(r => setTimeout(r, 600));

  shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(outDir, 'svg_primitives_accordion_tabs.png'), Buffer.from(shot.data, 'base64'));
  console.log('Saved svg_primitives_accordion_tabs.png');

  ws.close();
  chromeProc.kill();
  console.log('All screenshots captured successfully!');
}

run().catch(e => {
  console.error(e);
  process.exit(1);
});
