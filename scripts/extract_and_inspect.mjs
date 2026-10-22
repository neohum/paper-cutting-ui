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
  console.log('📐 [1/3] Chrome 기동 및 1440x1080 뷰포트 연결...');
  const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  const debugPort = 9230;

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

  console.log('📐 [2/3] 주요 컴포넌트 수학적 바운딩 박스(0.01px 정밀도) 추출...');
  const evalResult = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const targets = [
          '#pc-site-header',
          '.pc-site-header-left',
          '.pc-site-header-right',
          '#header-paper-sound-btn',
          '#pc-toggle-page-mode',
          '#header-paper-dropdown-trigger',
          '#pc-sidebar-nav',
          '.pc-sidebar-item',
          '#overview',
          '.pc-hero-banner',
          '.pc-prompt-box',
          '.pc-hero-art-frame',
          '.pc-hero-actions-grid > *',
          '#pc-site-footer',
          '.pc-footer-brand-col',
          '.pc-footer-links .pc-footer-link',
          '.pc-footer-bottom-bar',
          '.pc-scroll-top-btn',
          '.pc-ribbon-banner'
        ];

        const elements = [];
        const seen = new Set();

        targets.forEach(selector => {
          document.querySelectorAll(selector).forEach((el, index) => {
            if (seen.has(el)) return;
            seen.add(el);

            const rect = el.getBoundingClientRect();
            if (rect.width <= 0 || rect.height <= 0) return;

            const computed = getComputedStyle(el);
            if (computed.display === 'none' || computed.visibility === 'hidden') return;

            const tag = el.tagName.toLowerCase();
            const id = el.id || \`\${selector.replace(/[^a-zA-Z0-9_-]/g, '_')}_\${index}\`;
            const isInteractive = ['button', 'a', 'input', 'select'].includes(tag) || 
                                  computed.cursor === 'pointer' || 
                                  el.hasAttribute('role');

            elements.push({
              id,
              selector: selector + (index > 0 ? \`:nth-of-type(\${index + 1})\` : ''),
              tag,
              role: el.getAttribute('role') || undefined,
              interactive: isInteractive,
              visible: true,
              left: Math.round(rect.left * 100) / 100,
              top: Math.round(rect.top * 100) / 100,
              width: Math.round(rect.width * 100) / 100,
              height: Math.round(rect.height * 100) / 100,
              right: Math.round(rect.right * 100) / 100,
              bottom: Math.round(rect.bottom * 100) / 100,
              centerX: Math.round((rect.left + rect.width / 2) * 100) / 100,
              centerY: Math.round((rect.top + rect.height / 2) * 100) / 100
            });
          });
        });

        return {
          viewport: { width: window.innerWidth, height: window.innerHeight },
          totalExtracted: elements.length,
          elements
        };
      })()
    `,
    returnByValue: true
  });

  const data = evalResult.result.value;
  console.log(`✓ 총 ${data.totalExtracted}개 핵심 UI 컴포넌트의 기하학적 좌표 추출 완료`);

  // Write boxes JSON
  const boxesPath = path.join(projectRoot, 'evidence/boxes_analysis.json');
  fs.writeFileSync(boxesPath, JSON.stringify(data.elements, null, 2), 'utf8');
  console.log(`✓ 바운딩 박스 데이터 저장: ${boxesPath}`);

  // Take screenshot
  const shot = await send('Page.captureScreenshot', { format: 'png' });
  const shotPath = path.join(projectRoot, 'evidence/math_analysis_screen.png');
  fs.writeFileSync(shotPath, Buffer.from(shot.data, 'base64'));
  console.log(`✓ 기준 스크린샷 캡처: ${shotPath}`);

  ws.close();
  chromeProc.kill();
  console.log('📐 [3/3] 추출 완료. 이제 Visual Inspector 엔진을 구동합니다.');
}

run().catch(console.error);
