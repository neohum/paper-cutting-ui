import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();

test('Dedicated Layered Paper-Cut Breadcrumb (No Card Backing) Suite', async (t) => {
  const indexHtml = fs.readFileSync(path.join(projectRoot, 'index.html'), 'utf-8');
  const sidebarJs = fs.readFileSync(path.join(projectRoot, 'papercut-sidebar.js'), 'utf-8');
  const papercutCss = fs.readFileSync(path.join(projectRoot, 'papercut.css'), 'utf-8');
  const layoutCss = fs.readFileSync(path.join(projectRoot, 'papercut-layout.css'), 'utf-8');
  const sidebarCss = fs.readFileSync(path.join(projectRoot, 'papercut-sidebar.css'), 'utf-8');
  const uiCss = fs.readFileSync(path.join(projectRoot, 'papercut-ui.css'), 'utf-8');

  await t.test('AC-1: #pc-page-nav-bar 밑에 받쳐진 사각형 카드 제거 및 투명 컨테이너 적용', () => {
    // 1. index.html does not equip #pc-page-nav-bar with pc-card or pc-card-sheet
    assert.match(
      indexHtml,
      /<nav id="pc-page-nav-bar"\s+class="pc-page-nav-bar pc-paper-breadcrumb-bar"/,
      'index.html #pc-page-nav-bar must not have pc-card or pc-card-sheet classes'
    );
    assert.doesNotMatch(
      indexHtml,
      /<nav id="pc-page-nav-bar"[^>]*\bpc-card\b/,
      'index.html #pc-page-nav-bar must strictly omit pc-card'
    );

    // 2. papercut-sidebar.js does not assign pc-card to bar.className
    assert.match(
      sidebarJs,
      /bar\.className\s*=\s*['"]pc-page-nav-bar pc-paper-breadcrumb-bar['"]/,
      'papercut-sidebar.js must set bar.className to pc-page-nav-bar pc-paper-breadcrumb-bar without pc-card'
    );
    assert.doesNotMatch(
      sidebarJs,
      /bar\.className\s*=[^;]*\bpc-card\b/,
      'papercut-sidebar.js must not add pc-card to breadcrumb bar'
    );

    // 3. CSS sets background: transparent and hides ::after/::before underlay cards
    for (const [name, css] of [['papercut.css', papercutCss], ['papercut-layout.css', layoutCss], ['papercut-sidebar.css', sidebarCss]]) {
      assert.match(
        css,
        /\.pc-page-nav-bar[^}]*background:\s*transparent/i,
        `${name} must set .pc-page-nav-bar background: transparent`
      );
      assert.match(
        css,
        /\.pc-page-nav-bar::after[^}]*display:\s*none\s*!important/i,
        `${name} must hide .pc-page-nav-bar::after underlay backing card`
      );
    }
  });

  await t.test('AC-2: 전용 레이어드 페이퍼 커팅 브레드크럼 조형 구조 (홈, 카테고리, 현재 페이지, 3D 종이 화살표)', () => {
    // 1. index.html contains layered breadcrumb markup
    assert.ok(
      indexHtml.includes('pc-breadcrumb-layered'),
      'index.html must include .pc-breadcrumb-layered'
    );
    assert.ok(
      indexHtml.includes('pc-crumb-home') && indexHtml.includes('pc-crumb-category') && indexHtml.includes('pc-crumb-page'),
      'index.html must include tiered crumb tags: pc-crumb-home, pc-crumb-category, pc-crumb-page'
    );
    assert.ok(
      indexHtml.includes('pc-crumb-arrow'),
      'index.html must include 3D paper-cut chevron arrow separator: pc-crumb-arrow'
    );

    // 2. papercut-sidebar.js dynamically generates layered breadcrumb tags and arrows
    assert.ok(
      sidebarJs.includes('pc-breadcrumb-layered'),
      'papercut-sidebar.js must render .pc-breadcrumb-layered'
    );
    assert.ok(
      sidebarJs.includes('pc-crumb-arrow'),
      'papercut-sidebar.js must render .pc-crumb-arrow separator'
    );
    assert.ok(
      sidebarJs.includes('pc-crumb-home') && sidebarJs.includes('pc-crumb-category') && sidebarJs.includes('pc-crumb-page'),
      'papercut-sidebar.js must render pc-crumb-home, pc-crumb-category, and pc-crumb-page'
    );
  });

  await t.test('AC-3: 레이어드 페이퍼아트 CSS 디자인 토큰 준수 (스티칭, 순백 림 라이트, 번트 엄버 그림자)', () => {
    // 1. Dashed stitching on active crumb page
    assert.match(
      sidebarCss,
      /\.pc-crumb-page[^}]*border:[^;]*dashed/i,
      'papercut-sidebar.css must apply dashed stitching border on active page crumb'
    );

    // 2. 3D paper-cut arrow separator badge styling
    assert.match(
      sidebarCss,
      /\.pc-crumb-arrow\s*\{[^}]*width:\s*22px[^}]*border-radius:\s*6px/i,
      'papercut-sidebar.css must style .pc-crumb-arrow badge'
    );

    // 3. UI CSS defines layered breadcrumb classes
    assert.ok(
      uiCss.includes('.pc-breadcrumb-layered') && uiCss.includes('.pc-crumb-arrow'),
      'papercut-ui.css must declare .pc-breadcrumb-layered and .pc-crumb-arrow'
    );
  });
});
