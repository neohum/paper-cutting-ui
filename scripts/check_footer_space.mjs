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
  const debugPort = 9224;

  const chromeProc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${debugPort}`,
    '--window-size=1440,1080',
    '--disable-gpu',
    '--no-sandbox',
    'http://127.0.0.1:3000/'
  ]);

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

  // Measure document and footer positions
  const evalResult = await send('Runtime.evaluate', {
    expression: `
      (() => {
        window.scrollTo(0, document.body.scrollHeight);
        const footer = document.getElementById('pc-site-footer');
        const main = document.getElementById('main-content');
        const contentWrapper = document.getElementById('pc-content-wrapper');
        const appLayout = document.querySelector('.pc-app-layout');
        const footerRect = footer ? footer.getBoundingClientRect() : null;
        
        return {
          windowScrollY: window.scrollY,
          windowInnerHeight: window.innerHeight,
          documentHeight: document.documentElement.scrollHeight,
          bodyHeight: document.body.scrollHeight,
          footerOffsetTop: footer ? footer.offsetTop : 0,
          footerClientHeight: footer ? footer.clientHeight : 0,
          footerRectBottom: footerRect ? footerRect.bottom : 0,
          remainingAfterFooter: footerRect ? (window.innerHeight - footerRect.bottom) : 0,
          documentScrollHeightMinusFooterBottom: footer ? (document.documentElement.scrollHeight - (footer.offsetTop + footer.clientHeight)) : 0,
          appLayoutPaddingBottom: appLayout ? getComputedStyle(appLayout).paddingBottom : 0,
          contentWrapperPaddingBottom: contentWrapper ? getComputedStyle(contentWrapper).paddingBottom : 0,
          contentWrapperMarginBottom: contentWrapper ? getComputedStyle(contentWrapper).marginBottom : 0,
          bodyPaddingBottom: getComputedStyle(document.body).paddingBottom,
          bodyMarginBottom: getComputedStyle(document.body).marginBottom,
        };
      })()
    `,
    returnByValue: true
  });
  console.log('Measurement:', JSON.stringify(evalResult.result.value, null, 2));

  await new Promise(r => setTimeout(r, 500));

  // Take screenshot at bottom of page
  const shot = await send('Page.captureScreenshot', {
    format: 'png'
  });

  const outPath = path.join(projectRoot, 'evidence/verify_footer_space_before.png');
  fs.writeFileSync(outPath, Buffer.from(shot.data, 'base64'));
  console.log('Saved bottom screenshot to', outPath);

  ws.close();
  chromeProc.kill();
}

run().catch(e => {
  console.error(e);
  process.exit(1);
});
