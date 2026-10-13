/**
 * PaperCut UI - Sidebar Navigation & Multi-Page View Router Controller
 * Transforms the single-scroll layout into distinct, dedicated page views per sidebar menu.
 * Supports URL hash routing, top craft breadcrumbs, bottom page-flip pagination, and view mode toggling.
 */

(function () {
  'use strict';

  const SECTIONS = [
    { id: 'overview', title: '개요 & 히어로', badge: 'Hero', icon: 'home', bgShape: 'postage-stamp', bgTheme: 'peach', category: '기본 정보' },
    
    // 시그니처 프리미티브
    { id: 'knife-cut-buttons', title: '3D 페이퍼 커팅 버튼', badge: '12종', icon: 'scissors', bgShape: 'deckle-edge', bgTheme: 'peach', category: '시그니처 프리미티브' },
    { id: 'kirigami-components', title: '페이퍼 커팅 카드 & 폼', badge: 'HOT', icon: 'sparkles', bgShape: 'squircle-offset', bgTheme: 'mint', category: '시그니처 프리미티브' },
    
    // 마스터 UI 키트 (Shadcn 표준)
    { id: 'shadcn-components', title: '페이퍼 UI 44종 컴포넌트', badge: '44개', icon: 'grid-view', bgShape: 'clover-leaf', bgTheme: 'lavender', category: '마스터 UI 키트' },
    { id: 'shadcn-blocks-charts', title: '실전 애플리케이션 블록', badge: '6대 블록', icon: 'contacts-book', bgShape: 'polaroid-frame', bgTheme: 'coral', category: '마스터 UI 키트' },
    { id: 'shadcn-charts-section', title: '3D 페이퍼 벡터 차트', badge: '6종 차트', icon: 'pie-chart-clean', bgShape: 'star-burst-8', bgTheme: 'mint', category: '마스터 UI 키트' },
    
    // 에셋 & 배경 시스템
    { id: 'icon-gallery', title: '3D 페이퍼컷 아이콘', badge: '678종', icon: 'star-cluster', bgShape: 'cog-seal', bgTheme: 'sky', category: '에셋 & 배경 시스템' },
    { id: 'bg-library', title: '3D 아이콘 배경 플레이트', badge: '130종', icon: 'shield-star', bgShape: 'shield-crest', bgTheme: 'rose', category: '에셋 & 배경 시스템' },
    
    // 디자인 시스템 & 피드백
    { id: 'texture-showcase', title: '16종 종이 질감 & 토큰', badge: '16 Stocks', icon: 'palette', bgShape: 'pebble-organic', bgTheme: 'sage', category: '디자인 시스템 & 피드백' },
    { id: 'paper-alerts-toasts', title: '알림 & 토스트 시스템', badge: 'NEW', icon: 'bell-ring', bgShape: 'notched-ticket', bgTheme: 'buttercup', category: '디자인 시스템 & 피드백' },
    { id: 'paper-animation-studio', title: '페이퍼 애니메이션 & 모션', badge: '8종 모션', icon: 'sparkles-double', bgShape: 'scallop-sunburst', bgTheme: 'lavender', category: '디자인 시스템 & 피드백' }
  ];

  const isSimulatorPage = window.location.pathname.endsWith('icon-simulator.html') || 
                          window.location.pathname.includes('icon-simulator');

  let activePageId = 'overview';
  // Default to Continuous Scroll Mode so all parts (1~4) and sections are immediately visible.
  let isPageMode = localStorage.getItem('pc_view_mode') === 'page';

  let plateSeq = 0;
  let bgLookupMap = null;
  function getBgMap() {
    if (!bgLookupMap) {
      bgLookupMap = new Map();
      (window.PAPERCUT_BACKGROUNDS || []).forEach(b => {
        bgLookupMap.set(b.id, b);
      });
    }
    return bgLookupMap;
  }

  const plateStringCache = new Map();
  const plateTemplateCache = new Map();

  /**
   * Generates a 3D Paper-Cut Icon Plate SVG combining a Paper-Cut Background Shape (from 130 collection)
   * with a vibrant 3D Layered Color Icon mathematically centered on the plate.
   * Utilizes in-memory caching to prevent repetitive string manipulations and regex sweeps.
   */
  function getMountedPapercutPlateSvg(bgShapeId, iconId, options = {}) {
    const bgMap = getBgMap();
    const allBgs = window.PAPERCUT_BACKGROUNDS || [];
    const bgObj = bgMap.get(bgShapeId) || allBgs.find(b => b.id === 'postage-stamp') || allBgs[0];
    const size = options.size || 96;
    const iconScale = options.iconScale || 48;
    const iconOffset = (96 - iconScale) / 2;
    const customSuffix = options.suffix || (`pl-${bgShapeId || 'shape'}-${iconId || 'icon'}-${size}`);

    const cacheKey = `${bgShapeId}__${iconId}__${size}__${iconScale}__${customSuffix}`;
    let cached = plateStringCache.get(cacheKey);
    if (cached) return cached;

    if (bgObj && typeof window.getPapercutIconSvg === 'function') {
      // Scope filter IDs in background SVG to prevent any ID collision
      let scopedContent = bgObj.svgContent.replace(/id="([^"]+)"/g, (m, id) => `id="${id}-${customSuffix}"`);
      scopedContent = scopedContent.replace(/url\(#([^)]+)\)/g, (m, id) => `url(#${id}-${customSuffix})`);
      // Strip any nested <svg> / </svg> wrappers in svgContent
      scopedContent = scopedContent.replace(/<\/?svg\b[^>]*>/gi, '');

      const rawIconSvg = window.getPapercutIconSvg(iconId, customSuffix) || window.getPapercutIconSvg('star', customSuffix);
      let centeredIcon = '';
      if (rawIconSvg) {
        centeredIcon = rawIconSvg.replace(/<svg\b([^>]*)>/, (m, attrs) => {
          const cleanAttrs = attrs.replace(/\b(width|height|x|y|style)="[^"]*"/g, '').trim();
          return `<svg ${cleanAttrs} x="${iconOffset}" y="${iconOffset}" width="${iconScale}" height="${iconScale}" style="width:${iconScale}px !important; height:${iconScale}px !important; display:block !important; overflow:visible !important;">`;
        });
      }

      cached = `
        <svg class="pc-mounted-plate-svg pc-sidebar-plate-svg" viewBox="0 0 96 96" width="${size}" height="${size}" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          ${scopedContent}
          <g class="pc-mounted-icon" style="transform-origin: 48px 48px;">
            ${centeredIcon}
          </g>
        </svg>
      `.trim();
      plateStringCache.set(cacheKey, cached);
      return cached;
    }

    // High-res SVG fallback with genuine 3D papercraft aesthetic if backgrounds library is still initializing
    return `
      <div class="pc-sidebar-plate-placeholder" data-bg-shape="${bgShapeId}" data-icon="${iconId}">
        <span class="pc-inline-icon is-color is-sm" data-icon="${iconId}"></span>
      </div>
    `.trim();
  }

  function getSidebarMountedPlateSvg(bgShapeId, iconId) {
    return getMountedPapercutPlateSvg(bgShapeId, iconId, { size: 96, iconScale: 48, suffix: 'sb-' + (bgShapeId || 'shape') });
  }

  /**
   * Retrieves or creates pre-parsed template element for mounted papercut plates
   */
  function getMountedPapercutPlateTemplate(bgShapeId, iconId, options = {}) {
    const size = options.size || 96;
    const iconScale = options.iconScale || 48;
    const key = `${bgShapeId}__${iconId}__${size}__${iconScale}`;
    let tpl = plateTemplateCache.get(key);
    if (!tpl) {
      const svgHtml = getMountedPapercutPlateSvg(bgShapeId, iconId, options);
      tpl = document.createElement('template');
      tpl.innerHTML = svgHtml;
      plateTemplateCache.set(key, tpl);
    }
    return tpl;
  }

  /**
   * Scoped Plate Hydrator
   * Hydrates only the specified root element and its descendants with template cloning
   */
  function hydrateMountedPlates(root = document) {
    if (!root) return;

    // If root itself is a plate element
    if (root.classList && (root.classList.contains('pc-section-plate') || root.classList.contains('pc-mounted-plate'))) {
      if (root.getAttribute('data-hydrated') !== 'true' || !root.firstElementChild) {
        const bgShape = root.getAttribute('data-bg-shape') || (root.dataset && root.dataset.bgShape);
        const iconId = root.getAttribute('data-icon') || (root.dataset && root.dataset.icon);
        const sizeAttr = root.getAttribute('data-size') || (root.dataset && root.dataset.size) || '52';
        const size = parseInt(sizeAttr, 10);
        if (bgShape && iconId) {
          const tpl = getMountedPapercutPlateTemplate(bgShape, iconId, { size: size, iconScale: 48 });
          root.textContent = '';
          root.appendChild(tpl.content.cloneNode(true));
          root.setAttribute('data-hydrated', 'true');
        }
      }
    }

    if (typeof root.querySelectorAll !== 'function') return;

    const plates = root.querySelectorAll('.pc-section-plate:not([data-hydrated="true"]), .pc-mounted-plate:not([data-hydrated="true"])');
    plates.forEach(el => {
      if (el.getAttribute('data-hydrated') === 'true' && el.firstElementChild) return;
      const bgShape = el.getAttribute('data-bg-shape') || (el.dataset && el.dataset.bgShape);
      const iconId = el.getAttribute('data-icon') || (el.dataset && el.dataset.icon);
      const sizeAttr = el.getAttribute('data-size') || (el.dataset && el.dataset.size) || '52';
      const size = parseInt(sizeAttr, 10);
      if (bgShape && iconId) {
        const tpl = getMountedPapercutPlateTemplate(bgShape, iconId, { size: size, iconScale: 48 });
        el.textContent = '';
        el.appendChild(tpl.content.cloneNode(true));
        el.setAttribute('data-hydrated', 'true');
      }
    });
  }

  // Expose globally for application and section headers
  window.getMountedPapercutPlateSvg = getMountedPapercutPlateSvg;
  window.getMountedPapercutPlateTemplate = getMountedPapercutPlateTemplate;
  window.hydrateMountedPlates = hydrateMountedPlates;

  function renderSidebar() {
    let sidebarEl = document.getElementById('pc-sidebar-nav');
    if (!sidebarEl) {
      sidebarEl = document.createElement('nav');
      sidebarEl.id = 'pc-sidebar-nav';
      document.body.prepend(sidebarEl);
    }

    document.body.classList.add('has-pc-sidebar');

    const isCollapsed = localStorage.getItem('pc_sidebar_collapsed') === 'true';
    if (isCollapsed) {
      sidebarEl.classList.add('is-collapsed');
      document.body.classList.add('is-collapsed');
    }

    // Fast Hydration: Check if .pc-sidebar-menu already statically exists in the HTML
    const existingMenu = sidebarEl.querySelector('.pc-sidebar-menu');
    const hasStaticMenu = !!(existingMenu && existingMenu.firstElementChild);

    if (!hasStaticMenu) {
      // Fallback: Generate full sidebar markup only when empty or missing
      let menuHtml = '';
      let lastCat = '';

      SECTIONS.forEach(sec => {
        if (sec.category !== lastCat) {
          menuHtml += `<div class="pc-sidebar-category">${sec.category}</div>`;
          lastCat = sec.category;
        }

        let itemHref = '';
        if (isSimulatorPage) {
          if (sec.id === 'icon-simulator') {
            itemHref = 'icon-simulator.html';
          } else {
            itemHref = sec.url || ('index.html#' + sec.id);
          }
        } else {
          itemHref = sec.url || ('#' + sec.id);
        }

        const plateSvg = getSidebarMountedPlateSvg(sec.bgShape, sec.icon);

        // Map section to specialized papercut badge model (stamp, wax, ticket, tag)
        let badgeStyle = 'ticket';
        if (sec.badgeStyle) {
          badgeStyle = sec.badgeStyle;
        } else if (sec.bgShape === 'postage-stamp' || sec.badge === 'Hero' || sec.badge === '659종' || sec.badge === '16 Stocks' || sec.badge === '8종 모션') {
          badgeStyle = 'stamp';
        } else if (sec.bgShape === 'wax-seal' || sec.badge === 'HOT' || sec.badge === 'DEPTH LAB' || sec.badge === '16~256px' || sec.badge === 'Playground') {
          badgeStyle = 'wax';
        } else if (sec.bgShape === 'hanging-tag' || sec.bgShape === 'shield-crest' || sec.badge === '16~28px' || sec.badge === '6대 블록' || sec.badge === '130종') {
          badgeStyle = 'tag';
        }

        menuHtml += `
          <a href="${itemHref}" class="pc-sidebar-item pc-btn" role="button" data-target="${sec.id}" title="${sec.title}">
            <div class="pc-sidebar-item-icon" data-bg-shape="${sec.bgShape}" data-icon="${sec.icon}">
              ${plateSvg}
            </div>
            <span class="pc-sidebar-item-text">${sec.title}</span>
            <span class="pc-sidebar-badge pc-badge--${badgeStyle} pc-badge--${sec.bgTheme || 'lavender'} pc-badge-${sec.bgTheme || 'lavender'}">${sec.badge}</span>
          </a>
        `;
      });

      const brandHref = isSimulatorPage ? 'index.html#overview' : '#overview';
      const toggleIcon = isCollapsed ? 'arrow-right' : 'arrow-left';
      const toggleTitle = isCollapsed ? '사이드바 펼치기 (Expand)' : '사이드바 접기 (Collapse)';

      sidebarEl.innerHTML = `
        <div class="pc-sidebar-header">
          <a href="${brandHref}" class="pc-sidebar-brand" title="PaperCut UI 메인으로 이동">
            <div class="pc-sidebar-logo-icon" title="PaperCut UI 로고 (우표 천공 플레이트 + 3D 가위)">
              <svg class="pc-logo-plate-svg" viewBox="0 0 40 40" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter id="sb-logo-sh-stamp" x="-20%" y="-20%" width="140%" height="150%">
                    <feDropShadow dx="0" dy="1.2" stdDeviation="0.6" flood-color="#2E1E14" flood-opacity="0.48"/>
                    <feDropShadow dx="0" dy="2.8" stdDeviation="1.4" flood-color="#2E1E14" flood-opacity="0.25"/>
                    <feDropShadow dx="-0.5" dy="-0.5" stdDeviation="0.3" flood-color="#FFFFFF" flood-opacity="0.95"/>
                  </filter>
                  <filter id="sb-logo-sh-scissors" x="-30%" y="-30%" width="160%" height="160%">
                    <feDropShadow dx="0" dy="0.8" stdDeviation="0.5" flood-color="#2E1E14" flood-opacity="0.42"/>
                    <feDropShadow dx="0.5" dy="1.8" stdDeviation="1.2" flood-color="#2E1E14" flood-opacity="0.25"/>
                    <feDropShadow dx="-0.4" dy="-0.4" stdDeviation="0.2" flood-color="#FFFFFF" flood-opacity="0.95"/>
                  </filter>
                </defs>
                <!-- Layer 1: Postage Stamp Perforated Icon Background Plate -->
                <path d="M 6 4 Q 8 6 10 4 Q 12 6 14 4 Q 16 6 18 4 Q 20 6 22 4 Q 24 6 26 4 Q 28 6 30 4 Q 32 6 34 4 Q 36 6 38 4 Q 37 6 37 8 Q 39 10 37 12 Q 39 14 37 16 Q 39 18 37 20 Q 39 22 37 24 Q 39 26 37 28 Q 39 30 37 32 Q 39 34 37 36 Q 36 34 34 36 Q 32 34 30 36 Q 28 34 26 36 Q 24 34 22 36 Q 20 34 18 36 Q 16 34 14 36 Q 12 34 10 36 Q 8 34 6 36 Q 4 34 2 36 Q 3 34 3 32 Q 1 30 3 28 Q 1 26 3 24 Q 1 22 3 20 Q 1 18 3 16 Q 1 14 3 12 Q 1 10 3 8 Q 1 6 3 4 Z" fill="#BBD5B8" filter="url(#sb-logo-sh-stamp)"/>
                <!-- Layer 2: Inner Cream Paper Inlay -->
                <rect x="6.5" y="6.5" width="27" height="27" rx="3" fill="#FFFDF9"/>
                <!-- Layer 3: Dashed Perforation Ring -->
                <rect x="8.5" y="8.5" width="23" height="23" rx="2" fill="none" stroke="#D8CEBD" stroke-width="0.8" stroke-dasharray="2 2"/>
                <!-- Layer 4: 3D Paper-Cut Scissors Craft Motif -->
                <g transform="translate(10.5, 10.5) scale(0.29)" filter="url(#sb-logo-sh-scissors)">
                  <circle cx="16" cy="18" r="9" fill="#F7BA9E"/>
                  <circle cx="16" cy="18" r="5" fill="#FFFDF9"/>
                  <circle cx="16" cy="46" r="9" fill="#F7BA9E"/>
                  <circle cx="16" cy="46" r="5" fill="#FFFDF9"/>
                  <path d="M 22 23 L 54 44 M 22 41 L 54 20" stroke="#FFFDF9" stroke-width="6" stroke-linecap="round"/>
                  <path d="M 22 23 L 54 44 M 22 41 L 54 20" stroke="#A3D8C3" stroke-width="3" stroke-linecap="round"/>
                  <circle cx="34" cy="32" r="3.2" fill="#FEE396"/>
                </g>
              </svg>
            </div>
            <div class="pc-sidebar-brand-text">
              <span class="pc-sidebar-brand-title">PaperCut UI</span>
              <span class="pc-sidebar-brand-sub">Layered Craft System</span>
            </div>
          </a>
          <button type="button" class="pc-sidebar-toggle-btn pc-btn" id="pc-sidebar-toggle" title="${toggleTitle}">
            <span class="pc-inline-icon is-color is-xs" data-icon="${toggleIcon}"></span>
          </button>
        </div>

        <div class="pc-sidebar-menu">
          ${menuHtml}
        </div>

        <div class="pc-sidebar-footer">
          <button type="button" class="pc-sidebar-top-btn pc-btn" id="pc-sidebar-to-top">
            <span class="pc-inline-icon is-color is-xs" data-icon="arrow-up"></span>
            <span>맨 위로 가기</span>
          </button>
        </div>
      `;
    }

    // Avoid double-binding event listeners
    if (sidebarEl.dataset.listenersBound === 'true') {
      return;
    }
    sidebarEl.dataset.listenersBound = 'true';

    // Mobile floating toggle button
    let floatBtn = document.querySelector('.pc-sidebar-floating-toggle');
    if (!floatBtn) {
      floatBtn = document.createElement('button');
      floatBtn.type = 'button';
      floatBtn.className = 'pc-sidebar-floating-toggle pc-btn';
      floatBtn.innerHTML = `
        <span class="pc-inline-icon is-color is-xs" data-icon="scissors"></span>
        <span>목차 색인</span>
      `;
      document.body.appendChild(floatBtn);
      floatBtn.addEventListener('click', () => {
        sidebarEl.classList.toggle('is-mobile-open');
      });
    }

    // Hydrate icons & 3D plates in sidebar (scoped strictly to sidebar to prevent main-thread freeze)
    function hydrateIcons() {
      if (typeof window.getPapercutIconSvg === 'function' && window.PAPERCUT_BACKGROUNDS) {
        sidebarEl.querySelectorAll('.pc-sidebar-item-icon').forEach(iconContainer => {
          const bgShape = iconContainer.getAttribute('data-bg-shape');
          const iconId = iconContainer.getAttribute('data-icon');
          if (bgShape && iconId && !iconContainer.querySelector('.pc-mounted-plate-svg')) {
            iconContainer.innerHTML = getSidebarMountedPlateSvg(bgShape, iconId);
          }
        });
      }
      if (typeof window.hydratePapercutIcons === 'function') {
        window.hydratePapercutIcons(sidebarEl);
        if (floatBtn) window.hydratePapercutIcons(floatBtn);
      }
      hydrateMountedPlates(sidebarEl);
    }
    hydrateIcons();
    window.addEventListener('load', () => {
      hydrateMountedPlates(sidebarEl);
    });
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', hydrateIcons);
    }

    // Toggle Collapse Button
    const toggleBtn = document.getElementById('pc-sidebar-toggle');
    if (toggleBtn) {
      const toggleTitle = isCollapsed ? '사이드바 펼치기 (Expand)' : '사이드바 접기 (Collapse)';
      toggleBtn.title = toggleTitle;
      const iconSpan = toggleBtn.querySelector('.pc-inline-icon');
      if (iconSpan) {
        iconSpan.setAttribute('data-icon', isCollapsed ? 'arrow-right' : 'arrow-left');
      }

      toggleBtn.addEventListener('click', () => {
        const nowCollapsed = sidebarEl.classList.toggle('is-collapsed');
        document.body.classList.toggle('is-collapsed', nowCollapsed);
        localStorage.setItem('pc_sidebar_collapsed', nowCollapsed ? 'true' : 'false');
        toggleBtn.title = nowCollapsed ? '사이드바 펼치기 (Expand)' : '사이드바 접기 (Collapse)';
        
        const span = toggleBtn.querySelector('.pc-inline-icon');
        if (span) {
          span.setAttribute('data-icon', nowCollapsed ? 'arrow-right' : 'arrow-left');
          span.classList.add('is-color');
          if (typeof window.hydratePapercutIcons === 'function') {
            window.hydratePapercutIcons(toggleBtn);
          }
        }
      });
    }

    // Top Button
    document.getElementById('pc-sidebar-to-top')?.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Setup Multi-Page Routing or Simulator Standalone Navigation
    if (isSimulatorPage) {
      setupSimulatorNavigation(sidebarEl);
    } else {
      setupRouter(sidebarEl);
    }
  }

  /**
   * Standalone Navigation for Icon Simulator Page
   */
  function setupSimulatorNavigation(sidebarEl) {
    sidebarEl.querySelectorAll('.pc-sidebar-item').forEach(link => {
      link.addEventListener('click', (e) => {
        sidebarEl.classList.remove('is-mobile-open');
        const targetId = link.getAttribute('data-target');
        if (targetId === 'icon-simulator-firr') {
          e.preventDefault();
          if (window.PaperCutIconSimulator && window.PaperCutIconSimulator.switchStudioMode) {
            window.PaperCutIconSimulator.switchStudioMode('firr');
          } else {
            const el = document.getElementById('canvas-scaler-firr');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }
          syncSimulatorActiveItem('firr');
        } else if (targetId === 'icon-simulator-paper3d') {
          e.preventDefault();
          if (window.PaperCutIconSimulator && window.PaperCutIconSimulator.switchStudioMode) {
            window.PaperCutIconSimulator.switchStudioMode('paper3d');
          } else {
            const el = document.getElementById('canvas-scaler-paper3d');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }
          syncSimulatorActiveItem('paper3d');
        }
      });
    });

    function syncSimulatorActiveItem(explicitMode) {
      const hash = window.location.hash || '';
      const mode = explicitMode || (hash.includes('mode=paper3d') ? 'paper3d' : 'firr');
      const activeTarget = mode === 'paper3d' ? 'icon-simulator-paper3d' : 'icon-simulator-firr';
      sidebarEl.querySelectorAll('.pc-sidebar-item').forEach(item => {
        item.classList.toggle('is-active', item.getAttribute('data-target') === activeTarget);
      });
    }

    window.addEventListener('hashchange', () => {
      syncSimulatorActiveItem();
    });

    syncSimulatorActiveItem();
    setTimeout(syncSimulatorActiveItem, 150);
  }

  /**
   * Multi-Page View Router Engine
   */
  function setupRouter(sidebarEl) {
    // Intercept clicks on sidebar items
    sidebarEl.querySelectorAll('.pc-sidebar-item').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && !href.startsWith('#')) {
          // Allow normal navigation for standalone pages like icon-simulator.html
          return;
        }
        e.preventDefault();
        sidebarEl.classList.remove('is-mobile-open');
        const targetId = link.getAttribute('data-target');
        switchPage(targetId, true);
      });
    });

    // Delegate clicks for internal page jump links across the document
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const href = link.getAttribute('href');
      const hash = href.replace(/^#/, '');
      const match = SECTIONS.find(s => s.id === hash);
      if (match) {
        e.preventDefault();
        switchPage(hash, true);
      }
    });

    // Handle browser Back / Forward navigation
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.replace(/^#/, '');
      if (hash && hash !== activePageId) {
        switchPage(hash, false);
      }
    });

    // Wire global header view mode switch button (#header-view-mode-btn)
    const headerBtn = document.getElementById('header-view-mode-btn');
    if (headerBtn) {
      headerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleViewMode();
      });
    }

    // Sync button visual state on initial router load
    syncViewModeButtons();

    // Initial page load route
    const initHash = window.location.hash.replace(/^#/, '');
    switchPage(initHash || 'overview', false);
  }

  function switchPage(pageId, pushState = true) {
    const targetSec = SECTIONS.find(s => s.id === pageId) || SECTIONS[0];
    activePageId = targetSec.id;

    if (pushState && window.location.protocol !== 'file:') {
      try {
        window.history.pushState(null, '', `#${activePageId}`);
      } catch (err) {
        // Silently suppress file:// unique security origin exception
      }
    }

    if (isPageMode) {
      document.body.classList.add('pc-page-mode');

      // Tag all page view containers if not already tagged
      ensurePageViewsTagged();

      // Show ONLY the active page view
      document.querySelectorAll('.pc-page-view').forEach(view => {
        const isTarget = view.id === activePageId;
        view.classList.toggle('is-active-page', isTarget);
      });

      // Update Top Breadcrumb & Page Header
      renderPageHeader(targetSec);

      // Update Bottom Pagination
      renderPagePagination(targetSec);

      window.scrollTo({ top: 0, behavior: 'instant' });
      requestAnimationFrame(() => window.scrollTo(0, 0));
      setTimeout(() => window.scrollTo(0, 0), 25);
    } else {
      document.body.classList.remove('pc-page-mode');

      // Make all page views visible in continuous scroll flow
      document.querySelectorAll('.pc-page-view').forEach(view => {
        view.classList.remove('is-active-page');
      });

      // Update Top Breadcrumb & Page Header
      renderPageHeader(targetSec);

      // Hide bottom pagination in continuous scroll mode
      renderPagePagination(targetSec);

      const targetEl = document.getElementById(activePageId);
      if (targetEl && (pushState || activePageId !== 'overview')) {
        const topOffset = targetEl.getBoundingClientRect().top + window.scrollY - 30;
        window.scrollTo({ top: topOffset, behavior: 'smooth' });
      }
    }

    // Highlight active sidebar item
    document.querySelectorAll('.pc-sidebar-item').forEach(item => {
      item.classList.toggle('is-active', item.getAttribute('data-target') === activePageId);
    });

    // Synchronize view mode buttons across header and in-page bar
    syncViewModeButtons();

    // Hydrate active section on page switch (scoped to target element)
    const targetEl = document.getElementById(activePageId);
    if (targetEl) {
      if (typeof window.hydratePapercutIcons === 'function') {
        window.hydratePapercutIcons(targetEl);
      }
      hydrateMountedPlates(targetEl);
      if (activePageId === 'icon-gallery' && typeof window.renderPapercutIcons === 'function') {
        window.renderPapercutIcons(true);
      }
      if (activePageId === 'bg-library' && typeof window.renderPapercutBackgrounds === 'function') {
        window.renderPapercutBackgrounds();
      }
    }

    // Notify components of activation
    notifyPageActivation(activePageId);
  }

  function ensurePageViewsTagged() {
    SECTIONS.forEach(sec => {
      const el = document.getElementById(sec.id);
      if (el && !el.classList.contains('pc-page-view')) {
        el.classList.add('pc-page-view');
      }
    });
  }

  function renderPageHeader(sec) {
    let bar = document.getElementById('pc-page-nav-bar');
    const container = document.querySelector('.showcase-container');
    if (!container) return;

    if (!bar) {
      bar = document.createElement('div');
      bar.id = 'pc-page-nav-bar';
      bar.className = 'pc-page-nav-bar';
      container.prepend(bar);
    }

    const curIndex = SECTIONS.findIndex(s => s.id === sec.id);

    bar.innerHTML = `
      <div class="pc-page-breadcrumb">
        <a href="#overview" style="text-decoration:none;color:inherit;display:inline-flex;align-items:center;">
          <span class="pc-inline-icon is-xs" data-icon="home"></span>
        </a>
        <span>›</span>
        <span>${sec.category}</span>
        <span>›</span>
        <span class="pc-page-breadcrumb-current">${sec.title}</span>
      </div>
      <div class="pc-page-nav-actions">
        <span class="pc-badge pc-badge-lavender" style="font-size:11.5px;font-weight:800;">
          ${isPageMode ? `페이지 ${curIndex + 1} / ${SECTIONS.length}` : '전체 연속 스크롤'}
        </span>
        <button type="button" class="pc-page-mode-toggle" id="pc-toggle-page-mode" title="페이지별 분할 보기와 전체 연속 스크롤 모드를 전환합니다">
          <span class="pc-inline-icon is-xs" data-icon="${isPageMode ? 'file' : 'layout-list'}"></span>
          <span>${isPageMode ? '페이지별 보기 (ON)' : '전체 스크롤 모드 (ON)'}</span>
        </button>
      </div>
    `;

    if (typeof window.hydratePapercutIcons === 'function') {
      window.hydratePapercutIcons(bar);
    }

    // Toggle View Mode Button
    bar.querySelector('#pc-toggle-page-mode')?.addEventListener('click', () => {
      toggleViewMode();
    });
  }

  /**
   * Centralized View Mode Toggle Controller
   * Seamlessly synchronizes header button (#header-view-mode-btn) & in-page toggle (#pc-toggle-page-mode)
   */
  function toggleViewMode() {
    isPageMode = !isPageMode;
    localStorage.setItem('pc_view_mode', isPageMode ? 'page' : 'scroll');
    syncViewModeButtons();
    switchPage(activePageId, false);
    if (typeof window.showPaperToast === 'function') {
      window.showPaperToast(
        isPageMode ? '단일 페이지별 보기 모드로 전환되었습니다.' : '전체 연속 스크롤 보기 모드로 전환되었습니다.',
        isPageMode ? 'buttercup' : 'mint',
        isPageMode ? 'file' : 'layout-list'
      );
    }
  }

  function syncViewModeButtons() {
    // 1. Header Button (#header-view-mode-btn)
    const headerBtn = document.getElementById('header-view-mode-btn');
    if (headerBtn) {
      headerBtn.title = isPageMode ? '전체 연속 스크롤 모드로 전환' : '단일 페이지별 분할 보기로 전환';
      headerBtn.classList.toggle('is-page-mode-active', isPageMode);
      
      const labelEl = headerBtn.querySelector('.label') || headerBtn.querySelector('text');
      if (labelEl) {
        labelEl.textContent = isPageMode ? '페이지 뷰' : '스크롤 뷰';
      }

      // Update the SVG ticket color & icon
      const bgPath = headerBtn.querySelector('path[fill]');
      if (bgPath) {
        bgPath.setAttribute('fill', isPageMode ? '#FEE396' : '#BBD5B8');
      }
      const iconGroup = headerBtn.querySelector('g[transform]');
      if (iconGroup) {
        if (isPageMode) {
          iconGroup.innerHTML = `
            <rect x="0" y="0" width="13" height="15" rx="2" fill="#66460D"/>
            <rect x="2" y="3" width="9" height="2" rx="0.5" fill="#FFFDF9"/>
            <rect x="2" y="7" width="9" height="2" rx="0.5" fill="#FFFDF9"/>
            <rect x="2" y="11" width="5" height="2" rx="0.5" fill="#FFFDF9"/>
          `;
          if (labelEl) labelEl.setAttribute('fill', '#66460D');
        } else {
          iconGroup.innerHTML = `
            <rect x="0" y="0" width="13" height="4" rx="1.5" fill="#20533C"/>
            <rect x="0" y="6" width="13" height="4" rx="1.5" fill="#20533C"/>
            <rect x="0" y="12" width="13" height="4" rx="1.5" fill="#20533C"/>
          `;
          if (labelEl) labelEl.setAttribute('fill', '#20533C');
        }
      }
    }

    // 2. In-Page Navigation Bar Toggle Button (#pc-toggle-page-mode)
    const pageToggle = document.getElementById('pc-toggle-page-mode');
    if (pageToggle) {
      pageToggle.title = isPageMode ? '전체 연속 스크롤 모드로 전환합니다' : '페이지별 독립 보기 모드로 전환합니다';
      pageToggle.innerHTML = `
        <span class="pc-inline-icon is-xs" data-icon="${isPageMode ? 'file' : 'layout-list'}"></span>
        <span>${isPageMode ? '단일 페이지 (ON)' : '전체 스크롤 (ON)'}</span>
      `;
      if (typeof window.hydratePapercutIcons === 'function') {
        window.hydratePapercutIcons(pageToggle);
      }
    }
  }

  function renderPagePagination(sec) {
    const curIndex = SECTIONS.findIndex(s => s.id === sec.id);
    const prevSec = curIndex > 0 ? SECTIONS[curIndex - 1] : null;
    const nextSec = curIndex < SECTIONS.length - 1 ? SECTIONS[curIndex + 1] : null;

    const activeEl = document.getElementById(sec.id);
    if (!activeEl) return;

    let pagination = activeEl.querySelector('.pc-page-pagination-bar');
    if (!isPageMode) {
      if (pagination) pagination.style.display = 'none';
      return;
    }

    if (!pagination) {
      pagination = document.createElement('div');
      pagination.className = 'pc-page-pagination-bar';
      activeEl.appendChild(pagination);
    }
    pagination.style.display = 'flex';

    pagination.innerHTML = `
      ${prevSec ? `
        <a href="#${prevSec.id}" class="pc-page-prev-btn" data-page="${prevSec.id}">
          <span class="pc-inline-icon is-xs" data-icon="arrow-left"></span>
          <span>이전 페이지: ${prevSec.title}</span>
        </a>
      ` : '<div></div>'}
      ${nextSec ? `
        <a href="#${nextSec.id}" class="pc-page-next-btn" data-page="${nextSec.id}">
          <span>다음 페이지: ${nextSec.title}</span>
          <span class="pc-inline-icon is-xs" data-icon="arrow-right"></span>
        </a>
      ` : '<div></div>'}
    `;

    if (typeof window.hydratePapercutIcons === 'function') {
      window.hydratePapercutIcons(pagination);
    }
  }

  function notifyPageActivation(pageId) {
    if (pageId === 'paper-shadow-studio' && window.PaperShadowStudio) {
      window.PaperShadowStudio.updateSimulation();
    }
    if (pageId === 'shadcn-blocks-charts' && window.PaperCutShadcnUI && window.PaperCutShadcnUI.refreshBlocks) {
      window.PaperCutShadcnUI.refreshBlocks();
    }
    if (typeof window.applyPapercutStrokeByScale === 'function') {
      const activeEl = document.getElementById(pageId);
      if (activeEl) window.applyPapercutStrokeByScale(activeEl);
    }
  }

  // Setup ScrollSpy when in continuous scroll mode
  window.addEventListener('scroll', () => {
    if (isSimulatorPage || isPageMode) return;
    const scrollPos = window.scrollY + 200;
    let currentId = '';

    for (let i = SECTIONS.length - 1; i >= 0; i--) {
      const sec = document.getElementById(SECTIONS[i].id);
      if (sec && sec.offsetTop <= scrollPos) {
        currentId = SECTIONS[i].id;
        break;
      }
    }

    if (!currentId && SECTIONS.length > 0) {
      currentId = SECTIONS[0].id;
    }

    if (currentId && currentId !== activePageId) {
      activePageId = currentId;
      const targetSec = SECTIONS.find(s => s.id === currentId);
      if (targetSec) {
        const curLabel = document.querySelector('.pc-page-breadcrumb-current');
        if (curLabel) curLabel.textContent = targetSec.title;
      }
    }

    document.querySelectorAll('.pc-sidebar-item').forEach(item => {
      item.classList.toggle('is-active', item.getAttribute('data-target') === currentId);
    });
  }, { passive: true });

  // If sidebar nav already exists in DOM (e.g. script is placed at bottom of body),
  // initialize immediately with 0ms delay. Otherwise wait for DOMContentLoaded.
  if (document.getElementById('pc-sidebar-nav') || document.readyState !== 'loading') {
    renderSidebar();
  } else {
    document.addEventListener('DOMContentLoaded', renderSidebar);
  }

  window.PaperCutSidebar = {
    switchPage,
    toggleViewMode,
    syncViewModeButtons,
    getMountedPapercutPlateSvg,
    hydrateMountedPlates,
    SECTIONS
  };
})();
