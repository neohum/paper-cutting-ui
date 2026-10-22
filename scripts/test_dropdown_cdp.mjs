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
  const debugPort = 9222;

  // 1. Launch Chrome with remote debugging
  const chromeProc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${debugPort}`,
    '--window-size=1440,1080',
    '--disable-gpu',
    '--no-sandbox',
    'http://127.0.0.1:3000/'
  ]);

  // wait 1s for port to open
  await new Promise(r => setTimeout(r, 1000));

  let wsUrl;
  for (let i = 0; i < 10; i++) {
    try {
      wsUrl = await getWsUrl(debugPort);
      if (wsUrl) break;
    } catch(e) {
      await new Promise(r => setTimeout(r, 500));
    }
  }

  if (!wsUrl) {
    console.error('Could not connect to Chrome debugging port');
    chromeProc.kill();
    process.exit(1);
  }

  console.log('Connected to Chrome CDP at', wsUrl);

  // Use WebSocket from Node 22+ (global WebSocket is standard in Node 21+)
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

  // Wait 1.5s for page rendering & hydration
  await new Promise(r => setTimeout(r, 1500));

  // Click on #header-paper-dropdown-trigger
  const evalResult = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const trigger = document.getElementById('header-paper-dropdown-trigger');
        if (trigger) {
          trigger.click();
          return { success: true };
        }
        return { success: false, reason: 'trigger not found' };
      })()
    `,
    returnByValue: true
  });
  console.log('Click result:', evalResult.result.value);

  // Wait 400ms for transition
  await new Promise(r => setTimeout(r, 400));

  // Take screenshot
  const shot = await send('Page.captureScreenshot', {
    format: 'png'
  });

  const outPath = path.join(projectRoot, 'evidence/verify_02_dropdown_opened_live.png');
  fs.writeFileSync(outPath, Buffer.from(shot.data, 'base64'));
  console.log('Saved screenshot to', outPath);

  ws.close();
  chromeProc.kill();
}

run().catch(e => {
  console.error(e);
  process.exit(1);
});
