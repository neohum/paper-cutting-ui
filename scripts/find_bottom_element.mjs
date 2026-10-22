import { spawn } from 'child_process';
import http from 'http';

async function getWsUrl(port) {
  return new Promise((resolve, reject) => {
    const req = http.get(`http://127.0.0.1:${port}/json`, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const list = JSON.parse(data);
          const pageTarget = list.find(t => t.type === 'page');
          resolve(pageTarget ? pageTarget.webSocketDebuggerUrl : null);
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
  const debugPort = 9225;

  const chromeProc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${debugPort}`,
    '--window-size=1440,1080',
    '--disable-gpu',
    '--no-sandbox',
    'http://127.0.0.1:3000/'
  ]);

  await new Promise(r => setTimeout(r, 1000));
  const wsUrl = await getWsUrl(debugPort);
  const ws = new WebSocket(wsUrl);
  let id = 1;
  const pending = new Map();

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve } = pending.get(msg.id);
      pending.delete(msg.id);
      resolve(msg.result);
    }
  };
  await new Promise(r => ws.onopen = r);

  function send(method, params = {}) {
    return new Promise((resolve) => {
      const curId = id++;
      pending.set(curId, { resolve });
      ws.send(JSON.stringify({ id: curId, method, params }));
    });
  }

  await new Promise(r => setTimeout(r, 1500));

  const result = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const all = Array.from(document.querySelectorAll('*'));
        const docH = document.documentElement.scrollHeight;
        const footer = document.getElementById('pc-site-footer');
        const footerBottom = footer ? (footer.offsetTop + footer.clientHeight) : 0;
        
        const deepEls = all.map(el => {
          const rect = el.getBoundingClientRect();
          const pageY = rect.bottom + window.scrollY;
          return {
            tag: el.tagName,
            id: el.id,
            className: el.className,
            bottom: pageY,
            height: rect.height,
            style: el.getAttribute('style')
          };
        }).filter(item => item.bottom > footerBottom + 10)
          .sort((a, b) => b.bottom - a.bottom);

        // check wrapper elements
        const wrappers = ['main-content', 'pc-content-wrapper', 'pc-app-layout', 'pc-sidebar-nav'].map(id => {
          const el = document.getElementById(id) || document.querySelector('.' + id);
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          const comp = getComputedStyle(el);
          return {
            id,
            scrollHeight: el.scrollHeight,
            offsetHeight: el.offsetHeight,
            paddingBottom: comp.paddingBottom,
            marginBottom: comp.marginBottom,
            minHeight: comp.minHeight,
            height: comp.height,
            rectBottom: rect.bottom + window.scrollY
          };
        });

        return {
          footerBottom,
          docH,
          deepEls: deepEls.slice(0, 10),
          wrappers
        };
      })()
    `,
    returnByValue: true
  });

  console.log(JSON.stringify(result.result.value, null, 2));

  ws.close();
  chromeProc.kill();
}

run().catch(console.error);
