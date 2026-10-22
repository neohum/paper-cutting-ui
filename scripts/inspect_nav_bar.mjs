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
  const debugPort = 9227;

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

  const result = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const nav = document.getElementById('pc-page-nav-bar');
        if (!nav) return { error: 'No #pc-page-nav-bar' };

        const navRect = nav.getBoundingClientRect();
        const navStyle = window.getComputedStyle(nav);
        const navBefore = window.getComputedStyle(nav, '::before');
        const navAfter = window.getComputedStyle(nav, '::after');

        const breadcrumb = nav.querySelector('.pc-ui-breadcrumb');
        const breadcrumbRect = breadcrumb ? breadcrumb.getBoundingClientRect() : null;
        const breadcrumbStyle = breadcrumb ? window.getComputedStyle(breadcrumb) : null;

        const actions = nav.querySelector('.pc-page-nav-actions');
        const actionsRect = actions ? actions.getBoundingClientRect() : null;
        const actionsStyle = actions ? window.getComputedStyle(actions) : null;

        // Check if there are elements covering it (elementFromPoint)
        const centerEl = document.elementFromPoint(navRect.left + navRect.width / 2, navRect.top + navRect.height / 2);
        const leftEl = document.elementFromPoint(navRect.left + 50, navRect.top + navRect.height / 2);
        const rightEl = document.elementFromPoint(navRect.right - 50, navRect.top + navRect.height / 2);

        return {
          nav: {
            rect: navRect,
            zIndex: navStyle.zIndex,
            position: navStyle.position,
            isolation: navStyle.isolation,
            overflow: navStyle.overflow,
            background: navStyle.background,
            color: navStyle.color,
            opacity: navStyle.opacity,
            visibility: navStyle.visibility
          },
          navBefore: {
            display: navBefore.display,
            zIndex: navBefore.zIndex,
            position: navBefore.position,
            background: navBefore.background
          },
          navAfter: {
            display: navAfter.display,
            zIndex: navAfter.zIndex,
            position: navAfter.position,
            background: navAfter.background,
            inset: navAfter.inset,
            top: navAfter.top,
            left: navAfter.left,
            width: navAfter.width,
            height: navAfter.height
          },
          breadcrumb: {
            rect: breadcrumbRect,
            opacity: breadcrumbStyle ? breadcrumbStyle.opacity : null,
            visibility: breadcrumbStyle ? breadcrumbStyle.visibility : null,
            zIndex: breadcrumbStyle ? breadcrumbStyle.zIndex : null,
            color: breadcrumbStyle ? breadcrumbStyle.color : null
          },
          actions: {
            rect: actionsRect,
            opacity: actionsStyle ? actionsStyle.opacity : null,
            visibility: actionsStyle ? actionsStyle.visibility : null,
            zIndex: actionsStyle ? actionsStyle.zIndex : null
          },
          hitTest: {
            center: centerEl ? centerEl.outerHTML.slice(0, 100) : null,
            left: leftEl ? leftEl.outerHTML.slice(0, 100) : null,
            right: rightEl ? rightEl.outerHTML.slice(0, 100) : null
          }
        };
      })()
    `,
    returnByValue: true
  });

  console.log('Inspection:', JSON.stringify(result.result.value, null, 2));

  ws.close();
  chromeProc.kill();
}

run().catch(e => {
  console.error(e);
  process.exit(1);
});
