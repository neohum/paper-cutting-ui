#!/usr/bin/env node

/**
 * PaperCut UI - Official CLI Tool
 * 
 * Easy installation and copy-paste component generator for PaperCut UI.
 * 
 * Usage:
 *   npx papercut-ui init              # Initializes PaperCut UI in your project (CSS, JS, starter)
 *   npx papercut-ui add <component>   # Adds a component snippet to ./components/
 *   npx papercut-ui list              # Lists all available components
 *   npx papercut-ui snippet <comp>    # Outputs raw code snippet to stdout
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageRoot = path.resolve(__dirname, '..');

const COMPONENTS = {
  button: {
    name: 'Button (버튼)',
    desc: '3D 다층 칼선 및 티켓/우표 노치 버튼',
    html: `<!-- PaperCut Buttons -->
<div class="pc-row-wrap" style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
  <!-- 01. Solid Button (Mint) -->
  <button type="button" class="pc-btn pc-btn--mint" style="padding: 10px 20px; font-weight: 800; border-radius: 10px; cursor: pointer;">
    <span>종이 공예 버튼</span>
  </button>

  <!-- 02. Ticket Notch Button (Peach) -->
  <button type="button" class="pc-btn pc-btn--ticket pc-btn--peach" style="padding: 10px 22px; font-weight: 800; cursor: pointer;">
    <span>티켓 노치 버튼</span>
  </button>

  <!-- 03. Stamp Teeth Button (Lavender) -->
  <button type="button" class="pc-btn pc-btn--stamp pc-btn--lavender" style="padding: 10px 22px; font-weight: 800; cursor: pointer;">
    <span>우표 천공 버튼</span>
  </button>
</div>`
  },
  input: {
    name: 'Input (인풋)',
    desc: '음각 프레스 카빙 인레이 텍스트 입력창',
    html: `<!-- PaperCut Carved Inset Well Input -->
<div class="pc-field" style="max-width: 380px; display: flex; flex-direction: column; gap: 6px;">
  <label for="pc-input-text" style="font-size: 13px; font-weight: 800; color: #2E1E14;">이름</label>
  <input type="text" id="pc-input-text" class="pc-input" data-pc-paper="field" placeholder="내용을 입력하세요..." style="height: 44px; padding: 0 16px; border-radius: 10px; border: 1.5px solid #D5C7B4; background: #FFFDF9; box-shadow: inset 0 2px 4px rgba(46,30,20,0.06); width: 100%; box-sizing: border-box;" />
</div>`
  },
  card: {
    name: 'Card (카드)',
    desc: '티켓 노치, 미싱 절취선 및 다층 스택 카드',
    html: `<!-- PaperCut Ticket Notch Card -->
<div class="pc-card pc-card-sheet" data-pc-paper="ticket" data-pc-tone="cream" style="background: #FFFDF9; border: 1.5px solid #D5C7B4; border-radius: 16px; padding: 24px; box-shadow: 0 4px 14px rgba(46,30,20,0.10); max-width: 420px; position: relative;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px dashed rgba(46,30,20,0.15); padding-bottom: 10px;">
    <h3 style="margin: 0; font-size: 17px; font-weight: 800; color: #2E1E14;">수제 종이 카드</h3>
    <span class="pc-badge pc-badge--mint" style="padding: 4px 10px; border-radius: 6px; font-size: 11px; font-weight: 800; background: #EAF7F1; color: #1B4738;">Papercraft</span>
  </div>
  <p style="margin: 0 0 16px 0; font-size: 14px; color: #5C4331; line-height: 1.6;">
    350g 밑판 마운트 보드와 상단 0.88px 칼선 림, 2-Tier 번트 엄버 그림자가 적용된 감성 카드입니다.
  </p>
  <div style="display: flex; justify-content: flex-end;">
    <button type="button" class="pc-btn pc-btn--mint" style="padding: 8px 16px; font-size: 13px; font-weight: 800; border-radius: 8px;">자세히 보기</button>
  </div>
</div>`
  },
  switch: {
    name: 'Switch (스위치)',
    desc: '음각 도화지 트랙 슬라이딩 셔터 스위치',
    html: `<!-- PaperCut Tactile Shutter Switch -->
<label class="pc-switch" style="display: inline-flex; align-items: center; gap: 12px; cursor: pointer; user-select: none;">
  <span style="font-size: 14px; font-weight: 800; color: #2E1E14;">알림 켜기</span>
  <span style="position: relative; width: 52px; height: 28px; background: #E5DDD0; border-radius: 999px; border: 1.5px solid #C8B9A6; box-shadow: inset 0 2px 4px rgba(46,30,20,0.15); display: inline-block; transition: background 0.25s ease;">
    <input type="checkbox" style="position: absolute; opacity: 0; width: 0; height: 0;" onchange="this.parentElement.style.background = this.checked ? '#A3D8C3' : '#E5DDD0'; this.nextElementSibling.style.transform = this.checked ? 'translateX(24px)' : 'translateX(0)';">
    <span style="position: absolute; top: 2px; left: 2px; width: 20px; height: 20px; background: #FFFDF9; border-radius: 50%; box-shadow: 0 2px 5px rgba(46,30,20,0.25); border: 1px solid #D5C7B4; transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1); pointer-events: none;"></span>
  </span>
</label>`
  },
  checkbox: {
    name: 'Checkbox (체크박스)',
    desc: '종이접기 모서리 폴드 및 다층 체크박스',
    html: `<!-- PaperCut Origami Dogear Checkbox -->
<label class="pc-checkbox" style="display: inline-flex; align-items: center; gap: 10px; cursor: pointer; user-select: none;">
  <input type="checkbox" style="width: 20px; height: 20px; accent-color: #6CAE97; cursor: pointer;">
  <span style="font-size: 14px; font-weight: 700; color: #2E1E14;">이용약관에 동의합니다</span>
</label>`
  },
  badge: {
    name: 'Badge (배지)',
    desc: '우표 톱니 및 티켓 노치 파스텔 색지 배지',
    html: `<!-- PaperCut Badges -->
<div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
  <span class="pc-badge pc-badge--mint" style="padding: 5px 12px; font-size: 12px; font-weight: 800; border-radius: 8px; background: #EAF7F1; border: 1px solid rgba(108,174,151,0.6); color: #1B4738;">Mint Cotton</span>
  <span class="pc-badge pc-badge--peach" style="padding: 5px 12px; font-size: 12px; font-weight: 800; border-radius: 8px; background: #FDF1EA; border: 1px solid rgba(226,148,114,0.6); color: #5C2D18;">Peach Warm</span>
  <span class="pc-badge pc-badge--lavender" style="padding: 5px 12px; font-size: 12px; font-weight: 800; border-radius: 8px; background: #F4F0FA; border: 1px solid rgba(164,146,201,0.6); color: #3A275E;">Lavender Soft</span>
  <span class="pc-badge pc-badge--sand" style="padding: 5px 12px; font-size: 12px; font-weight: 800; border-radius: 8px; background: #FFF9E8; border: 1px solid rgba(212,169,73,0.6); color: #4D3B0E;">Buttercup Sand</span>
</div>`
  },
  slider: {
    name: 'Slider (슬라이더)',
    desc: '크래프트 음각 트랙 & 원형 페이퍼 노브 슬라이더',
    html: `<!-- PaperCut Slider -->
<div class="pc-field" style="max-width: 320px; display: flex; flex-direction: column; gap: 8px;">
  <div style="display: flex; justify-content: space-between; font-size: 13px; font-weight: 800; color: #2E1E14;">
    <span>음량 크기</span>
    <span id="slider-val">70%</span>
  </div>
  <input type="range" min="0" max="100" value="70" style="width: 100%; accent-color: #6CAE97; cursor: pointer;" oninput="document.getElementById('slider-val').textContent = this.value + '%'">
</div>`
  },
  dialog: {
    name: 'Dialog (모달 / 다이얼로그)',
    desc: '수제 도화지 레이어드 팝업 모달',
    html: `<!-- PaperCut Dialog / Modal -->
<div id="pc-sample-dialog" style="display: none; position: fixed; inset: 0; background: rgba(46,30,20,0.45); backdrop-filter: blur(3px); z-index: 9999; align-items: center; justify-content: center;">
  <div style="background: #FFFDF9; border: 2px solid #D5C7B4; border-radius: 20px; padding: 28px; width: 90%; max-width: 440px; box-shadow: 0 16px 36px rgba(46,30,20,0.22); position: relative;">
    <h3 style="margin: 0 0 10px 0; font-size: 19px; font-weight: 800; color: #2E1E14;">알림</h3>
    <p style="margin: 0 0 20px 0; font-size: 14px; color: #5C4331; line-height: 1.6;">
      3D 다층 단차와 수제 크래프트 질감의 페이퍼 모달 다이얼로그입니다.
    </p>
    <div style="display: flex; justify-content: flex-end; gap: 10px;">
      <button type="button" onclick="document.getElementById('pc-sample-dialog').style.display='none'" style="padding: 8px 16px; font-size: 13px; font-weight: 700; border-radius: 8px; background: #FAF6ED; border: 1px solid #D5C7B4; color: #5C4331; cursor: pointer;">취소</button>
      <button type="button" onclick="document.getElementById('pc-sample-dialog').style.display='none'" style="padding: 8px 16px; font-size: 13px; font-weight: 800; border-radius: 8px; background: #A3D8C3; border: 1px solid #6CAE97; color: #1B4738; cursor: pointer;">확인</button>
    </div>
  </div>
</div>
<!-- Modal Trigger Button -->
<button type="button" class="pc-btn pc-btn--mint" onclick="document.getElementById('pc-sample-dialog').style.display='flex'" style="padding: 10px 20px; font-weight: 800; border-radius: 10px; cursor: pointer;">
  모달 열기
</button>`
  },
  toast: {
    name: 'Toast (토스트 알림)',
    desc: '부유하는 3D 페이퍼 플로팅 알림',
    html: `<!-- PaperCut Toast Trigger Example -->
<button type="button" class="pc-btn pc-btn--mint" onclick="if(window.showPaperToast) { window.showPaperToast('작업이 완료되었습니다!', 'mint', 'check'); } else { alert('작업 완료!'); }" style="padding: 10px 20px; font-weight: 800; border-radius: 10px; cursor: pointer;">
  토스트 알림 띄우기
</button>`
  },
  tabs: {
    name: 'Tabs (탭)',
    desc: '색지 스택 팬아웃 탭 내비게이션',
    html: `<!-- PaperCut Tabs -->
<div class="pc-tabs" style="display: inline-flex; gap: 6px; padding: 4px; background: #F4EFE6; border-radius: 12px; border: 1px solid #D5C7B4;">
  <button type="button" style="padding: 8px 16px; font-size: 13px; font-weight: 800; border-radius: 8px; border: 1px solid rgba(46,30,20,0.12); background: #FFFDF9; color: #2E1E14; box-shadow: 0 2px 4px rgba(46,30,20,0.08); cursor: pointer;">첫 번째 탭</button>
  <button type="button" style="padding: 8px 16px; font-size: 13px; font-weight: 700; border-radius: 8px; border: none; background: transparent; color: #7A695A; cursor: pointer;">두 번째 탭</button>
  <button type="button" style="padding: 8px 16px; font-size: 13px; font-weight: 700; border-radius: 8px; border: none; background: transparent; color: #7A695A; cursor: pointer;">세 번째 탭</button>
</div>`
  },
  accordion: {
    name: 'Accordion (아코디언)',
    desc: '접지 공예 스타일 접이식 아코디언',
    html: `<!-- PaperCut Accordion -->
<details style="background: #FFFDF9; border: 1.5px solid #D5C7B4; border-radius: 12px; padding: 14px 18px; max-width: 440px; box-shadow: 0 2px 6px rgba(46,30,20,0.06);">
  <summary style="font-size: 14px; font-weight: 800; color: #2E1E14; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center;">
    <span>페이퍼 아트 디자인이란 무엇인가요?</span>
    <span style="font-size: 12px; color: #7A695A;">▼</span>
  </summary>
  <p style="margin: 12px 0 0 0; font-size: 13.5px; color: #5C4331; line-height: 1.6; border-top: 1px dashed rgba(46,30,20,0.12); padding-top: 10px;">
    실제 색종이를 오려 층층이 쌓아 올린 듯한 2-Tier 번트 엄버 그림자와 순백 칼선 림을 결합하여 디지털 인터페이스에 물리적 촉감을 불어넣는 디자인 시스템입니다.
  </p>
</details>`
  }
};

const STARTER_HTML = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PaperCut UI Starter</title>
  
  <!-- PaperCut Core Stylesheets -->
  <link rel="stylesheet" href="./papercut.css">
  <link rel="stylesheet" href="./papercut-svg-primitives.css">
  
  <style>
    body {
      margin: 0;
      padding: 40px 20px;
      background: #FAF7F0;
      color: #2E1E14;
      font-family: -apple-system, BlinkMacSystemFont, "Pretendard", sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .container {
      max-width: 600px;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
  </style>
</head>
<body>

  <div class="container">
    <header style="text-align: center;">
      <h1 style="font-size: 28px; font-weight: 900; margin: 0 0 8px 0;">✂️ PaperCut UI</h1>
      <p style="color: #7A695A; font-size: 14px; margin: 0;">설치 및 복사 붙여넣기로 바로 완성된 페이퍼 공예 인터페이스</p>
    </header>

    <!-- Sample Card -->
    <div class="pc-card pc-card-sheet" style="background: #FFFDF9; border: 1.5px solid #D5C7B4; border-radius: 16px; padding: 24px; box-shadow: 0 4px 14px rgba(46,30,20,0.10);">
      <h2 style="font-size: 18px; font-weight: 800; margin: 0 0 10px 0;">반갑습니다!</h2>
      <p style="font-size: 14px; color: #5C4331; line-height: 1.6; margin: 0 0 18px 0;">
        PaperCut UI가 성공적으로 설치되었습니다. 원하는 컴포넌트를 복사하여 프로젝트에 자유롭게 붙여넣으세요.
      </p>
      
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <button type="button" class="pc-btn pc-btn--mint" onclick="alert('PaperCut UI 버튼 클릭!')" style="padding: 10px 18px; font-weight: 800; border-radius: 8px; cursor: pointer;">
          민트 버튼
        </button>
        <button type="button" class="pc-btn pc-btn--ticket pc-btn--peach" style="padding: 10px 18px; font-weight: 800; cursor: pointer;">
          티켓 버튼
        </button>
      </div>
    </div>
  </div>

  <!-- PaperCut Core Scripts -->
  <script src="./papercut-icons.js"></script>
  <script src="./papercut-svg-primitives.js"></script>
  <script src="./papercut.js"></script>
</body>
</html>`;

function printHelp() {
  console.log(`
✂️ PaperCut UI - CLI Tool

명령어:
  npx papercut-ui init              프로젝트에 PaperCut UI 핵심 파일 복사 및 시작 템플릿 생성
  npx papercut-ui add <component>   원하는 컴포넌트 HTML 스니펫을 ./components/ 에 복사
  npx papercut-ui list              사용 가능한 모든 컴포넌트 목록 보기
  npx papercut-ui snippet <comp>    컴포넌트 HTML 코드를 콘솔에 즉시 출력
  npx papercut-ui help              도움말 확인

사용 가능한 컴포넌트:
  ${Object.keys(COMPONENTS).join(', ')}
`);
}

function runInit() {
  console.log('🚀 PaperCut UI 프로젝트 초기화 시작...\n');
  const targetDir = process.cwd();
  
  const filesToCopy = [
    'papercut.css',
    'papercut-svg-primitives.css',
    'papercut.js',
    'papercut-svg-primitives.js',
    'papercut-icons.js'
  ];

  for (const file of filesToCopy) {
    const src = path.join(packageRoot, file);
    const dest = path.join(targetDir, file);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
      console.log(`  ✓ 복사 완료: ${file}`);
    }
  }

  const starterPath = path.join(targetDir, 'papercut-starter.html');
  if (!fs.existsSync(starterPath)) {
    fs.writeFileSync(starterPath, STARTER_HTML, 'utf8');
    console.log(`  ✓ 생성 완료: papercut-starter.html (브라우저로 열어 바로 확인 가능)`);
  }

  console.log('\n✨ 초기화가 완료되었습니다!');
  console.log('  👉 브라우저에서 papercut-starter.html 을 열어보거나,');
  console.log('  👉 "npx papercut-ui add button" 으로 원하는 컴포넌트를 추가하세요.\n');
}

function runAdd(componentName) {
  if (!componentName) {
    console.error('❌ 컴포넌트 이름을 입력해주세요. 예: npx papercut-ui add button');
    console.log('사용 가능 컴포넌트:', Object.keys(COMPONENTS).join(', '));
    process.exit(1);
  }

  const comp = COMPONENTS[componentName.toLowerCase()];
  if (!comp) {
    console.error(`❌ "${componentName}" 컴포넌트를 찾을 수 없습니다.`);
    console.log('사용 가능 컴포넌트:', Object.keys(COMPONENTS).join(', '));
    process.exit(1);
  }

  const targetDir = path.join(process.cwd(), 'components');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const filePath = path.join(targetDir, `${componentName.toLowerCase()}.html`);
  fs.writeFileSync(filePath, comp.html, 'utf8');
  console.log(`✓ [${comp.name}] 컴포넌트 스니펫이 생성되었습니다: ${filePath}`);
  console.log('\n생성된 코드:');
  console.log('--------------------------------------------------');
  console.log(comp.html);
  console.log('--------------------------------------------------');
}

function runList() {
  console.log('\n📋 PaperCut UI 사용 가능한 컴포넌트 목록:\n');
  for (const [key, val] of Object.entries(COMPONENTS)) {
    console.log(`  • ${key.padEnd(12)} - ${val.name}: ${val.desc}`);
  }
  console.log('\n👉 추가 방법: npx papercut-ui add <이름>\n');
}

function runSnippet(componentName) {
  if (!componentName) {
    console.error('❌ 컴포넌트 이름을 입력해주세요. 예: npx papercut-ui snippet button');
    process.exit(1);
  }

  const comp = COMPONENTS[componentName.toLowerCase()];
  if (!comp) {
    console.error(`❌ "${componentName}" 컴포넌트를 찾을 수 없습니다.`);
    process.exit(1);
  }

  process.stdout.write(comp.html + '\n');
}

// CLI Arg Parsing
const args = process.argv.slice(2);
const cmd = args[0] || 'help';

switch (cmd) {
  case 'init':
    runInit();
    break;
  case 'add':
    runAdd(args[1]);
    break;
  case 'list':
  case 'ls':
    runList();
    break;
  case 'snippet':
    runSnippet(args[1]);
    break;
  case 'help':
  case '--help':
  case '-h':
  default:
    printHelp();
    break;
}
