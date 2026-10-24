/**
 * PaperCut UI - Sidebar Navigation & Multi-Page View Router Controller
 * Transforms the single-scroll layout into distinct, dedicated page views per sidebar menu.
 * Supports URL hash routing, top craft breadcrumbs, bottom page-flip pagination, and view mode toggling.
 */

(function () {
  'use strict';

  const SECTIONS = [
    { id: 'overview', title: '개요 & 히어로', badge: 'Hero', icon: 'home', bgShape: 'postage-stamp', bgTheme: 'peach', category: '기본 정보' },
    { id: 'quick-start', title: '설치 & 복사 가이드', badge: '1초 복사', icon: 'download', bgShape: 'seal-wax', bgTheme: 'mint', category: '기본 정보' },
    
    // 마스터 UI 키트 (PC 표준)
    { id: 'pc-components', title: '페이퍼 UI & 특화 컴포넌트', badge: '통합 마스터', icon: 'grid-view', bgTheme: 'lavender', category: '마스터 UI 키트', aliases: ['kirigami-components', 'knife-cut-buttons'],
      // 예전 섹션 주소를 하위 범주로 잇는다 (#knife-cut-buttons → #pc-components)
      aliasSubs: { 'kirigami-components': 'cards', 'knife-cut-buttons': 'buttons' }
    },
    { id: 'pc-blocks-charts', title: '실전 애플리케이션 블록', badge: '6대 블록', icon: 'contacts-book', bgShape: 'polaroid-frame', bgTheme: 'coral', category: '마스터 UI 키트' },
    { id: 'pc-charts-section', title: '3D 페이퍼 벡터 차트', badge: '12종 차트', icon: 'pie-chart-clean', bgShape: 'star-burst-8', bgTheme: 'mint', category: '마스터 UI 키트' },
    
    // 에셋 & 배경 시스템
    { id: 'icon-gallery', title: '3D 페이퍼컷 아이콘', badge: '750종', icon: 'star-cluster', bgShape: 'cog-seal', bgTheme: 'sky', category: '에셋 & 배경 시스템' },
    { id: 'bg-library', title: '3D 아이콘 배경 플레이트', badge: '130종', icon: 'shield-star', bgShape: 'shield-crest', bgTheme: 'rose', category: '에셋 & 배경 시스템' },
    
    { id: 'texture-showcase', title: '16종 종이 질감 & 토큰', badge: '16 Stocks', icon: 'palette', bgShape: 'pebble-organic', bgTheme: 'sage', category: '디자인 시스템 & 피드백' },
    { id: 'paper-alerts-toasts', title: '알림 & 토스트 시스템', badge: 'NEW', icon: 'bell-ring', bgShape: 'notched-ticket', bgTheme: 'buttercup', category: '디자인 시스템 & 피드백' },

    // 사운드 & 햅틱 (사이드바 제일 하단 메뉴)
    { id: 'paper-sound-studio', title: '종이 소리 & 햅틱 랩', badge: '8종 ASMR', icon: 'volume', bgShape: 'wax-seal', bgTheme: 'buttercup', category: '사운드 & 인터랙션' }
  ];

  const isSimulatorPage = window.location.pathname.endsWith('icon-simulator.html') || 
                          window.location.pathname.includes('icon-simulator');

  let activePageId = 'overview';
  // 하위 메뉴로 고른 범주. 값이 있으면 그 섹션의 해당 범주만 보이고 다른 섹션은 숨긴다(보기 모드 설정과 무관, 저장하지 않음).
  let activeSubId = '';
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

  // Synchronize toggle button states (Header & Sidebar)
  function updateToggleButtons(collapsed) {
    const toggleBtn = document.getElementById('pc-sidebar-toggle');
    const headerToggleBtn = document.getElementById('pc-header-sidebar-toggle');
    const title = collapsed ? '사이드바 펼치기 (Expand)' : '사이드바 접기 (Collapse)';

    if (toggleBtn) {
      toggleBtn.title = title;
      toggleBtn.setAttribute('aria-label', title);
      const arrowPath = toggleBtn.querySelector('#sb-toggle-arrow') || toggleBtn.querySelector('path[id="sb-toggle-arrow"]') || toggleBtn.querySelector('svg path:last-of-type');
      if (arrowPath) {
        arrowPath.setAttribute('d', collapsed ? 'M 14 11 L 20 17 L 14 23' : 'M 20 11 L 14 17 L 20 23');
      }
    }

    if (headerToggleBtn) {
      headerToggleBtn.title = collapsed ? '사이드바 펼치기' : '사이드바 접기';
      headerToggleBtn.setAttribute('aria-label', collapsed ? '사이드바 펼치기' : '사이드바 접기');
    }
  }

  function toggleSidebarCollapse() {
    const sidebarEl = document.getElementById('pc-sidebar-nav');
    if (!sidebarEl) return;
    if (window.innerWidth < 768) {
      sidebarEl.classList.toggle('is-mobile-open');
    } else {
      const nowCollapsed = sidebarEl.classList.toggle('is-collapsed');
      document.body.classList.toggle('is-collapsed', nowCollapsed);
      localStorage.setItem('pc_sidebar_collapsed', nowCollapsed ? 'true' : 'false');
      updateToggleButtons(nowCollapsed);
    }
  }

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
    } else {
      sidebarEl.classList.remove('is-collapsed');
      document.body.classList.remove('is-collapsed');
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

        const iconHtml = `<span class="pc-inline-icon is-color is-lg" data-icon="${sec.icon}"></span>`;

        // Map section to specialized papercut badge model (ticket, tag) - stamp/bandage removed
        let badgeStyle = 'ticket';
        if (sec.badgeStyle && sec.badgeStyle !== 'stamp') {
          badgeStyle = sec.badgeStyle;
        } else if (sec.bgShape === 'hanging-tag' || sec.bgShape === 'shield-crest' || sec.badge === '16~28px' || sec.badge === '6대 블록' || sec.badge === '130종') {
          badgeStyle = 'tag';
        } else {
          badgeStyle = 'ticket';
        }

        const hasChildren = !!(sec.children && sec.children.length);
        const chevronHtml = hasChildren ? `<span class="pc-sidebar-chevron" aria-hidden="true"><svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6l4 4 4-4"/></svg></span>` : '';
        const ariaControlsAttr = hasChildren ? ` aria-controls="pc-sidebar-sub-${sec.id}" aria-expanded="true"` : '';

        menuHtml += `
          <a href="${itemHref}" class="pc-sidebar-item pc-sidebar-nav-btn pc-btn" role="button" data-target="${sec.id}"${ariaControlsAttr} title="${sec.title}">
            <div class="pc-sidebar-item-icon" data-icon="${sec.icon}">
              ${iconHtml}
            </div>
            <span class="pc-sidebar-item-text">${sec.title}</span>
            <span class="pc-sidebar-badge pc-badge pc-badge--${sec.bgTheme || 'lavender'} pc-badge-${sec.bgTheme || 'lavender'} inline-flex items-center justify-center leading-none">${sec.badge}</span>
            ${chevronHtml}
          </a>
        `;
      });

      // Sound widget placed at the bottom of sidebar menu
      menuHtml += `
        <div class="pc-sidebar-sound-widget" id="pc-sidebar-sound-widget" aria-label="종이 소리 테스트 제어기">
          <div class="pc-sidebar-sound-header">
            <div class="pc-sidebar-sound-title-group">
              <span class="pc-sidebar-sound-icon pc-inline-icon is-xs" data-icon="volume" id="pc-sidebar-sound-icon" aria-hidden="true"></span>
              <span class="pc-sidebar-sound-label">종이 소리 테스트</span>
            </div>
            <button type="button" class="pc-sidebar-sound-toggle-btn" id="pc-sidebar-sound-toggle" title="종이 소리 바스락 효과음 켜기/끄기" aria-pressed="false">
              <span class="pc-sound-toggle-pip"></span>
              <span class="pc-sound-toggle-text">OFF</span>
            </button>
          </div>
          <div class="pc-sidebar-sound-papers" id="pc-sidebar-sound-list" role="radiogroup" aria-label="종이 종류별 사운드 선택">
            <button type="button" class="pc-sidebar-paper-btn is-active" data-paper="cotton" role="radio" aria-checked="true" title="🌿 300g 수제 코튼지 (포근한 펄프 서걱임)">
              <div class="pc-paper-btn-left"><span class="pc-paper-emoji">🌿</span><span class="pc-paper-name">300g 코튼지</span></div>
              <span class="pc-paper-badge">300g</span>
            </button>
            <button type="button" class="pc-sidebar-paper-btn" data-paper="hanji" role="radio" aria-checked="false" title="🎋 닥나무 전통 한지 (맑고 찰랑이는 사각거림)">
              <div class="pc-paper-btn-left"><span class="pc-paper-emoji">🎋</span><span class="pc-paper-name">닥나무 한지</span></div>
              <span class="pc-paper-badge">한지</span>
            </button>
            <button type="button" class="pc-sidebar-paper-btn" data-paper="kraft" role="radio" aria-checked="false" title="📦 350g 크라프트 보드 (묵직한 둔탁음과 마찰)">
              <div class="pc-paper-btn-left"><span class="pc-paper-emoji">📦</span><span class="pc-paper-name">크라프트 보드</span></div>
              <span class="pc-paper-badge">350g</span>
            </button>
            <button type="button" class="pc-sidebar-paper-btn" data-paper="vellum" role="radio" aria-checked="false" title="📜 반투명 실크 벨러지 (바삭바삭 파사삭 찰랑임)">
              <div class="pc-paper-btn-left"><span class="pc-paper-emoji">📜</span><span class="pc-paper-name">실크 벨러지</span></div>
              <span class="pc-paper-badge">벨럼</span>
            </button>
            <button type="button" class="pc-sidebar-paper-btn" data-paper="origami" role="radio" aria-checked="false" title="🎨 오리가미 화지 (경쾌한 착착 접힘 스냅)">
              <div class="pc-paper-btn-left"><span class="pc-paper-emoji">🎨</span><span class="pc-paper-name">오리가미 화지</span></div>
              <span class="pc-paper-badge">색종이</span>
            </button>
            <button type="button" class="pc-sidebar-paper-btn" data-paper="cardboard" role="radio" aria-checked="false" title="📦 골판지 카톤 (드르륵 요철 질감 마찰음)">
              <div class="pc-paper-btn-left"><span class="pc-paper-emoji">📦</span><span class="pc-paper-name">골판지 카톤</span></div>
              <span class="pc-paper-badge">골판지</span>
            </button>
            <button type="button" class="pc-sidebar-paper-btn" data-paper="newsprint" role="radio" aria-checked="false" title="📰 빈티지 신문지 (가볍게 파스락거리는 구김음)">
              <div class="pc-paper-btn-left"><span class="pc-paper-emoji">📰</span><span class="pc-paper-name">빈티지 신문지</span></div>
              <span class="pc-paper-badge">신문지</span>
            </button>
            <button type="button" class="pc-sidebar-paper-btn" data-paper="parchment" role="radio" aria-checked="false" title="📜 고문서 양피지 (바싹 마른 크리스피 크랙클)">
              <div class="pc-paper-btn-left"><span class="pc-paper-emoji">📜</span><span class="pc-paper-name">고문서 양피지</span></div>
              <span class="pc-paper-badge">양피지</span>
            </button>
          </div>
        </div>
      `;

      const brandHref = isSimulatorPage ? 'index.html#overview' : '#overview';
      const toggleIcon = isCollapsed ? 'arrow-right' : 'arrow-left';
      const toggleTitle = isCollapsed ? '사이드바 펼치기 (Expand)' : '사이드바 접기 (Collapse)';

      sidebarEl.innerHTML = `
        <div class="pc-sidebar-header">
          <div class="pc-sidebar-header-lead">
            <span class="pc-sidebar-header-icon pc-inline-icon is-sm" data-icon="book" aria-hidden="true"></span>
            <span class="pc-sidebar-header-title">목차 네비게이션</span>
          </div>
          <button type="button" class="pc-sidebar-toggle-btn pc-svg-kirigami-btn" id="pc-sidebar-toggle" title="${toggleTitle}" aria-label="${toggleTitle}" style="width:34px; height:34px; padding:0; border:none; background:transparent; display:inline-flex; align-items:center; justify-content:center;">
            <svg class="pc-kirigami-btn-svg" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:34px; height:34px; display:block;">
              <defs>
                <filter id="sb-toggle-sh-js" x="-20%" y="-20%" width="140%" height="150%">
                  <feDropShadow dx="0" dy="1" stdDeviation="0.5" flood-color="#2E1E14" flood-opacity="0.40"/>
                  <feDropShadow dx="0" dy="2" stdDeviation="1" flood-color="#2E1E14" flood-opacity="0.20"/>
                  <feDropShadow dx="0" dy="-0.5" stdDeviation="0.25" flood-color="#FFFFFF" flood-opacity="0.95"/>
                </filter>
              </defs>
              <rect x="3" y="3" width="28" height="28" rx="6" fill="#FAF6ED" stroke="#FFFFFF" stroke-width="0.88" filter="url(#sb-toggle-sh-js)"/>
              <rect x="5.5" y="5.5" width="23" height="23" rx="4.5" fill="#FFFDF9" stroke="#E6DDD1" stroke-width="0.75"/>
              <path id="sb-toggle-arrow" d="${isCollapsed ? 'M 14 11 L 20 17 L 14 23' : 'M 20 11 L 14 17 L 20 23'}" stroke="#4A3A2C" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
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

    mountSubmenus(sidebarEl);

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

    // Hydrate icons in sidebar (pure freestanding icons, no background plate)
    function hydrateIcons() {
      sidebarEl.querySelectorAll('.pc-sidebar-item-icon').forEach(iconContainer => {
        const iconId = iconContainer.getAttribute('data-icon');
        if (iconId && !iconContainer.querySelector('.pc-inline-icon, .pc-layered-paper-icon, svg')) {
          iconContainer.innerHTML = `<span class="pc-inline-icon is-color is-lg" data-icon="${iconId}"></span>`;
        }
      });
      if (typeof window.hydratePapercutIcons === 'function') {
        window.hydratePapercutIcons(sidebarEl);
        if (floatBtn) window.hydratePapercutIcons(floatBtn);
      }
    }
    hydrateIcons();
    window.addEventListener('load', () => {
      hydrateMountedPlates(sidebarEl);
    });
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', hydrateIcons);
    }

    // Synchronize initial toggle button states (Header & Sidebar)
    updateToggleButtons(isCollapsed);

    // Toggle Collapse Button in Sidebar Header
    const toggleBtn = document.getElementById('pc-sidebar-toggle');
    if (toggleBtn && !toggleBtn.dataset.bound) {
      toggleBtn.dataset.bound = 'true';
      toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleSidebarCollapse();
      });
    }

    // Toggle Collapse Button in Global Header
    const headerToggleBtn = document.getElementById('pc-header-sidebar-toggle');
    if (headerToggleBtn && !headerToggleBtn.dataset.bound) {
      headerToggleBtn.dataset.bound = 'true';
      headerToggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleSidebarCollapse();
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
   * 하위 메뉴: children이 있는 섹션의 사이드바 항목 바로 뒤에 번호 매긴 하위 항목을 붙인다.
   * 정적 사전 렌더링 메뉴와 JS 생성 메뉴 모두에 같은 방식으로 붙이므로 SECTIONS가 유일한 원본이다.
   */
  function mountSubmenus(sidebarEl) {
    SECTIONS.forEach(sec => {
      if (!sec.children || !sec.children.length) return;
      const parent = sidebarEl.querySelector(`.pc-sidebar-item[data-target="${sec.id}"]`);
      if (!parent) return;

      const listId = `pc-sidebar-sub-${sec.id}`;
      let sub = sidebarEl.querySelector(`.pc-sidebar-submenu[data-parent="${sec.id}"]`);
      if (!sub) {
        const base = isSimulatorPage ? `index.html#${sec.id}` : `#${sec.id}`;
        sub = document.createElement('div');
        sub.className = 'pc-sidebar-submenu is-open';
        sub.id = listId;
        sub.setAttribute('role', 'group');
        sub.setAttribute('aria-label', `${sec.title} 하위 메뉴`);
        sub.dataset.parent = sec.id;
        sub.innerHTML = sec.children.map((child, i) => `
          <a href="${base}/${child.id}" class="pc-sidebar-subitem" data-parent="${sec.id}" data-sub="${child.id}" title="${child.title}">
            <span class="pc-sidebar-subitem-num" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
            <span class="pc-sidebar-subitem-text">${child.title}</span>
            <span class="pc-sidebar-subitem-count">${child.count}</span>
          </a>
        `).join('');
        parent.after(sub);
      }

      parent.setAttribute('aria-controls', listId);
      parent.setAttribute('aria-expanded', sub.classList.contains('is-open') ? 'true' : 'false');

      // Dropdown Chevron Indicator guarantee
      if (!parent.querySelector('.pc-sidebar-chevron')) {
        const chevron = document.createElement('span');
        chevron.className = 'pc-sidebar-chevron';
        chevron.setAttribute('aria-hidden', 'true');
        chevron.innerHTML = '<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6l4 4 4-4"/></svg>';
        parent.appendChild(chevron);
      }
    });
  }

  /**
   * 하위 메뉴 상태를 화면에 반영한다: 범주 필터, 하위 메뉴 펼침·활성 표시.
   * 3D 페이퍼컷 마스터 UI 컴포넌트 스위트는 탭 형태가 아니라 1페이지로 스크롤 되도록 보장.
   */
  function applySubState() {
    const focusId = activeSubId ? activePageId : '';

    // 메뉴별 독립 보기(page mode)에서만 pc-sub-focus 적용. 전체 연속 스크롤 모드에서는 다른 섹션을 숨기지 않는다.
    document.body.classList.toggle('pc-sub-focus', isPageMode && !!focusId);
    document.querySelectorAll('.pc-page-view').forEach(view => {
      view.classList.toggle('is-focus-page', view.id === focusId);
    });

    SECTIONS.forEach(s => {
      if (!s.children) return;
      const cat = s.id === focusId ? activeSubId : 'all';
      const sectionEl = document.getElementById(s.id);
      if (sectionEl && (s.id === focusId || sectionEl.dataset.subFiltered === 'true')) {
        filterSectionGroups(sectionEl, cat);
        sectionEl.dataset.subFiltered = cat === 'all' ? 'false' : 'true';
      }
    });

    document.querySelectorAll('.pc-sidebar-submenu').forEach(list => {
      // 드롭다운 하위 메뉴는 기본적으로 사이드바에 펼쳐져(is-open) 표시되며,
      // 사용자가 상위 버튼을 눌러 명시적으로 접었을 때(userClosed === 'true')에만 숨겨집니다.
      const open = list.dataset.userClosed !== 'true';
      list.classList.toggle('is-open', open);
      const parent = document.querySelector(`.pc-sidebar-item[aria-controls="${list.id}"]`) ||
                     document.querySelector(`.pc-sidebar-item[data-target="${list.dataset.parent}"]`);
      if (parent) parent.setAttribute('aria-expanded', open ? 'true' : 'false');
      list.querySelectorAll('.pc-sidebar-subitem').forEach(item => {
        const isActive = list.dataset.parent === focusId && item.dataset.sub === activeSubId;
        item.classList.toggle('is-active', isActive);
        if (isActive) item.setAttribute('aria-current', 'page');
        else item.removeAttribute('aria-current');
      });
    });
  }

  // 3D 페이퍼컷 마스터 UI 컴포넌트 스위트는 탭 형태가 아니라 1페이지로 스크롤 되도록 보장:
  // 모든 컴포넌트 그룹을 항상 표시(display: block) 상태로 유지하며, 알약 버튼 활성 상태만 동기화한다.
  function filterSectionGroups(sectionEl, cat) {
    sectionEl.querySelectorAll('.pc-filter-btn[data-target-cat]').forEach(btn => {
      btn.classList.toggle('is-active', btn.dataset.targetCat === cat);
    });
    sectionEl.querySelectorAll('.pc-comp-group').forEach(el => {
      el.style.display = 'block';
    });
  }

  function currentRoute() {
    return activeSubId ? `${activePageId}/${activeSubId}` : activePageId;
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
        const isActive = item.getAttribute('data-target') === activeTarget;
        item.classList.toggle('is-active', isActive);
        item.classList.toggle('pc-is-active', isActive);
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
        e.stopPropagation();
        const targetId = link.getAttribute('data-target') || (href ? href.replace(/^#/, '') : '');
        const list = sidebarEl.querySelector(`.pc-sidebar-submenu[data-parent="${targetId}"]`);
        const hasSubmenu = !!list;
        
        if (window.innerWidth < 768) {
          sidebarEl.classList.remove('is-mobile-open');
        }
        switchPage(targetId, true, { toggleSub: hasSubmenu });
      });
    });

    sidebarEl.querySelectorAll('.pc-sidebar-subitem').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (window.innerWidth < 768) {
          sidebarEl.classList.remove('is-mobile-open');
        }
        switchPage(`${link.dataset.parent}/${link.dataset.sub}`, true);
      });
    });

    // 섹션 안 범주 알약을 눌렀을 때: 하위 메뉴 및 스크롤을 동기화한다.
    document.addEventListener('click', (e) => {
      const pill = e.target.closest('.pc-filter-btn[data-target-cat]');
      if (!pill) return;
      const sectionEl = pill.closest('.pc-page-view');
      if (!sectionEl || sectionEl.id !== 'pc-components') return;
      const cat = pill.dataset.targetCat;
      activeSubId = cat === 'all' ? '' : cat;
      const list = document.querySelector(`.pc-sidebar-submenu[data-parent="pc-components"]`);
      if (list && activeSubId) delete list.dataset.userClosed;
      replaceRoute();
      applySubState();
      renderPageHeader(SECTIONS.find(s => s.id === activePageId));
    });

    // Delegate clicks for internal page jump links across the document
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      if (link.closest('#pc-sidebar-nav')) return; // Ignore sidebar links handled above
      const href = link.getAttribute('href');
      const hash = href.replace(/^#/, '');
      const base = hash.split('/')[0];
      const match = SECTIONS.find(s => s.id === base || (s.aliases && s.aliases.includes(base)));
      if (match) {
        e.preventDefault();
        switchPage(hash, true);
      }
    });

    // Handle browser Back / Forward navigation
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.replace(/^#/, '');
      if (hash && hash !== currentRoute()) {
        switchPage(hash, false);
      }
    });

    // Wire global header view mode switch button (#header-view-mode-btn)
    const headerBtn = document.getElementById('header-view-mode-btn');
    if (headerBtn && !headerBtn.dataset.viewBound) {
      headerBtn.dataset.viewBound = 'true';
      headerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleViewMode();
      });
    }

    // Sync button visual state on initial router load
    syncViewModeButtons();

    // Initial page load route
    const initHash = window.location.hash.replace(/^#/, '');
    switchPage(initHash || 'overview', false);
  }

  function replaceRoute() {
    if (window.location.protocol === 'file:') return;
    try {
      window.history.replaceState(null, '', `#${currentRoute()}`);
    } catch (err) {
      // file:// 등 고유 출처 예외는 무시한다
    }
  }

  function switchPage(pageId, pushState = true, options = {}) {
    // 하위 메뉴 경로: "<섹션 id>/<하위 id>"
    let subId = '';
    const slash = (pageId || '').indexOf('/');
    if (slash !== -1) {
      subId = pageId.slice(slash + 1);
      pageId = pageId.slice(0, slash);
    }
    const targetSec = SECTIONS.find(s => s.id === pageId || (s.aliases && s.aliases.includes(pageId))) || SECTIONS[0];
    if (!subId && targetSec.aliasSubs && targetSec.aliasSubs[pageId]) {
      subId = targetSec.aliasSubs[pageId];
    }
    const isSameSection = activePageId === targetSec.id;
    activePageId = targetSec.id;
    const sub = subId && targetSec.children ? targetSec.children.find(c => c.id === subId) : null;
    activeSubId = sub ? sub.id : '';

    const list = document.querySelector(`.pc-sidebar-submenu[data-parent="${activePageId}"]`);
    if (list) {
      if (options.toggleSub) {
        // Dropdown toggle: 상위 버튼을 누를 때마다 숨겼다가 나타남 (Toggle open/close)
        const currentlyOpen = list.classList.contains('is-open') && list.dataset.userClosed !== 'true';
        if (currentlyOpen) {
          list.dataset.userClosed = 'true';
        } else {
          delete list.dataset.userClosed;
        }
      } else if (subId) {
        // 하위 항목 직접 클릭 또는 하위 주소 진입 시 메뉴 무조건 열림
        delete list.dataset.userClosed;
      }
    }

    if (pushState && window.location.protocol !== 'file:') {
      try {
        window.history.pushState(null, '', `#${currentRoute()}`);
      } catch (err) {
        // Silently suppress file:// unique security origin exception
      }
    }

    applySubState();

    // 1. Hydrate target section content BEFORE measuring scroll offset
    const activeEl = document.getElementById(activePageId);
    if (activeEl) {
      if (typeof window.hydratePapercutIcons === 'function') {
        window.hydratePapercutIcons(activeEl);
      }
      hydrateMountedPlates(activeEl);
      if (activePageId === 'icon-gallery' && typeof window.renderPapercutIcons === 'function') {
        window.renderPapercutIcons(true);
      }
      if (activePageId === 'bg-library' && typeof window.renderPapercutBackgrounds === 'function') {
        window.renderPapercutBackgrounds();
      }
      if (activePageId === 'pc-blocks-charts' && window.PaperCutUI && window.PaperCutUI.refreshBlocks) {
        window.PaperCutUI.refreshBlocks();
      }
    }

    const stickyHeader = document.getElementById('pc-site-header');
    const headerHeight = stickyHeader ? stickyHeader.offsetHeight : 64;
    const headerOffset = headerHeight + 20;

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

      const subTarget = activeSubId ? document.getElementById('pc-suite-' + activeSubId) : null;
      if (subTarget) {
        requestAnimationFrame(() => {
          const topOffset = subTarget.getBoundingClientRect().top + window.scrollY - (headerHeight + 24);
          window.scrollTo({ top: Math.max(0, topOffset), behavior: 'smooth' });
        });
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
        requestAnimationFrame(() => window.scrollTo(0, 0));
        setTimeout(() => window.scrollTo(0, 0), 25);
      }
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

      const subTarget = activeSubId ? document.getElementById('pc-suite-' + activeSubId) : null;
      const scrollTarget = subTarget || document.getElementById(activePageId);

      if (scrollTarget) {
        if (activePageId === 'overview' && !activeSubId) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          // Double requestAnimationFrame ensures accurate scroll target calculation after DOM layout reflow
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              const targetTop = scrollTarget.getBoundingClientRect().top + window.scrollY - (subTarget ? headerHeight + 36 : headerOffset);
              window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
            });
          });
        }
      }
    }

    // Highlight active sidebar item
    document.querySelectorAll('.pc-sidebar-item').forEach(item => {
      const isActive = item.getAttribute('data-target') === activePageId;
      item.classList.toggle('is-active', isActive);
      item.classList.toggle('pc-is-active', isActive);
    });

    // Synchronize view mode buttons across header and in-page bar
    syncViewModeButtons();

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
    const container = document.querySelector('.pc-showcase-container, .showcase-container');
    if (!container) return;

    if (!bar) {
      bar = document.createElement('div');
      bar.id = 'pc-page-nav-bar';
      container.prepend(bar);
    }
    bar.className = 'pc-page-nav-bar pc-card pc-card-sheet';

    const curIndex = SECTIONS.findIndex(s => s.id === sec.id);
    const subIndex = activeSubId && sec.children ? sec.children.findIndex(c => c.id === activeSubId) : -1;
    const subCrumb = subIndex === -1 ? '' :
      `<li class="pc-ui-breadcrumb-separator" aria-hidden="true">›</li><li class="pc-ui-breadcrumb-item"><span class="pc-ui-breadcrumb-page pc-badge pc-badge--lavender" style="font-size: 12px; font-weight: 800;">${String(subIndex + 1).padStart(2, '0')}. ${sec.children[subIndex].title}</span></li>`;

    bar.innerHTML = `
      <nav class="pc-ui-breadcrumb" aria-label="현재 위치">
        <ol class="pc-ui-breadcrumb-list">
          <li class="pc-ui-breadcrumb-item">
            <a href="#overview" class="pc-ui-breadcrumb-link" title="홈">
              <span class="pc-inline-icon is-xs" data-icon="home"></span>
              <span>홈</span>
            </a>
          </li>
          <li class="pc-ui-breadcrumb-separator" aria-hidden="true">›</li>
          <li class="pc-ui-breadcrumb-item">
            <span class="pc-ui-breadcrumb-link pc-breadcrumb-category" style="cursor: default;">${sec.category}</span>
          </li>
          <li class="pc-ui-breadcrumb-separator" aria-hidden="true">›</li>
          <li class="pc-ui-breadcrumb-item">
            <span class="pc-ui-breadcrumb-page pc-breadcrumb-current">${sec.title}</span>
          </li>
          ${subCrumb}
        </ol>
      </nav>
      <div class="pc-page-nav-actions">
        <span class="pc-badge pc-badge--ticket pc-badge--lavender" style="font-size:12px; font-weight:800; padding: 5px 14px;">
          ${isPageMode ? `페이지 ${curIndex + 1} / ${SECTIONS.length}` : '전체 연속 스크롤'}
        </span>
        <button type="button" class="pc-svg-kirigami-btn pc-page-mode-toggle" id="pc-toggle-page-mode" title="${isPageMode ? '전체 연속 스크롤 모드로 전환합니다' : '메뉴별 독립 보기 모드로 전환합니다'}" style="padding:0; border:none; background:transparent; display:inline-flex;">
          <svg class="pc-kirigami-btn-svg" viewBox="0 0 160 42" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 144px; height: 38px; display: block;">
            <defs>
              <filter id="nav-view-sh-js" x="-20%" y="-20%" width="140%" height="150%">
                <feDropShadow dx="0" dy="1.2" stdDeviation="0.6" flood-color="#2E1E14" flood-opacity="0.45"/>
                <feDropShadow dx="0" dy="2.8" stdDeviation="1.4" flood-color="#2E1E14" flood-opacity="0.22"/>
                <feDropShadow dx="0" dy="-0.5" stdDeviation="0.3" flood-color="#FFFFFF" flood-opacity="0.95"/>
              </filter>
            </defs>
            <path id="nav-toggle-bg" d="M 8 6 H 152 C 154 6 156 8 156 10 V 16 C 152 16 149 18 149 21 C 149 24 152 26 156 26 V 32 C 156 34 154 36 152 36 H 8 C 6 36 4 34 4 32 V 26 C 8 26 11 24 11 21 C 11 18 8 16 4 16 V 10 C 4 8 6 6 8 6 Z" fill="${isPageMode ? '#FEE396' : '#BBD5B8'}" stroke="#FFFFFF" stroke-width="0.88" filter="url(#nav-view-sh-js)"/>
            <line x1="34" y1="8" x2="34" y2="34" stroke="#FFFDF9" stroke-width="1.2" stroke-dasharray="2 2"/>
            <rect x="11" y="10" width="20" height="22" rx="4" fill="#FFFDF9" stroke="#FFFFFF" stroke-width="0.88"/>
            <g id="nav-mode-icon-group" transform="translate(15, 14)">
              ${isPageMode ? `
                <rect x="0" y="0" width="12" height="14" rx="2" fill="#66460D"/>
                <line x1="2.5" y1="3.5" x2="9.5" y2="3.5" stroke="#FFFDF9" stroke-width="1.2"/>
                <line x1="2.5" y1="7" x2="9.5" y2="7" stroke="#FFFDF9" stroke-width="1.2"/>
                <line x1="2.5" y1="10.5" x2="7.5" y2="10.5" stroke="#FFFDF9" stroke-width="1.2"/>
              ` : `
                <rect x="0" y="0" width="12" height="3.5" rx="1.2" fill="#20533C"/>
                <rect x="0" y="5" width="12" height="3.5" rx="1.2" fill="#20533C"/>
                <rect x="0" y="10" width="12" height="3.5" rx="1.2" fill="#20533C"/>
              `}
            </g>
            <text id="nav-toggle-mode-label" class="pc-label" x="44" y="25" font-family="'Nanum Square Round', sans-serif" font-size="12" font-weight="800" fill="${isPageMode ? '#66460D' : '#20533C'}" letter-spacing="-0.3">
              ${isPageMode ? '스크롤뷰: OFF' : '스크롤뷰: ON'}
            </text>
          </svg>
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
  function setViewMode(pageMode) {
    isPageMode = !!pageMode;
    localStorage.setItem('pc_view_mode', isPageMode ? 'page' : 'scroll');
    syncViewModeButtons();
    switchPage(activePageId, false);
    if (typeof window.showPaperToast === 'function') {
      window.showPaperToast(
        isPageMode ? '메뉴별 분할 보기 모드로 전환되었습니다. (스크롤뷰: OFF)' : '전체 연속 스크롤 모드로 전환되었습니다. (스크롤뷰: ON)',
        isPageMode ? 'buttercup' : 'mint',
        isPageMode ? 'file' : 'layout-list'
      );
    }
  }

  function toggleViewMode() {
    setViewMode(!isPageMode);
  }

  function syncViewModeButtons() {
    // 1. Header Button (#header-view-mode-btn)
    const headerBtn = document.getElementById('header-view-mode-btn');
    if (headerBtn) {
      headerBtn.title = isPageMode ? '스크롤뷰: OFF (현재 메뉴별 보기) — 클릭 시 전체 스크롤 모드로 전환' : '스크롤뷰: ON (현재 전체 스크롤 모드) — 클릭 시 메뉴별 보기로 전환';
      headerBtn.classList.toggle('is-page-mode-active', isPageMode);
      
      const labelEl = headerBtn.querySelector('#header-view-mode-label') || headerBtn.querySelector('.label') || headerBtn.querySelector('text');
      if (labelEl) {
        labelEl.textContent = isPageMode ? '스크롤뷰: OFF' : '스크롤뷰: ON';
        labelEl.setAttribute('fill', isPageMode ? '#66460D' : '#20533C');
      }

      // Update the SVG ticket color & icon
      const bgPath = headerBtn.querySelector('path[fill]');
      if (bgPath) {
        bgPath.setAttribute('fill', isPageMode ? '#FEE396' : '#BBD5B8');
      }
      const iconGroup = headerBtn.querySelector('#header-view-mode-icon') || headerBtn.querySelector('g[transform]');
      if (iconGroup) {
        if (isPageMode) {
          iconGroup.innerHTML = `
            <rect x="0" y="0" width="13" height="15" rx="2" fill="#66460D"/>
            <rect x="2" y="3" width="9" height="2" rx="0.5" fill="#FFFDF9"/>
            <rect x="2" y="7" width="9" height="2" rx="0.5" fill="#FFFDF9"/>
            <rect x="2" y="11" width="5" height="2" rx="0.5" fill="#FFFDF9"/>
          `;
        } else {
          iconGroup.innerHTML = `
            <rect x="0" y="0" width="13" height="4" rx="1.5" fill="#20533C"/>
            <rect x="0" y="6" width="13" height="4" rx="1.5" fill="#20533C"/>
            <rect x="0" y="12" width="13" height="4" rx="1.5" fill="#20533C"/>
          `;
        }
      }
    }

    // 2. In-Page Navigation Bar Toggle Button (#pc-toggle-page-mode)
    const pageToggle = document.getElementById('pc-toggle-page-mode');
    if (pageToggle) {
      pageToggle.title = isPageMode ? '전체 연속 스크롤 모드로 전환합니다 (스크롤뷰: ON)' : '메뉴별 독립 보기 모드로 전환합니다 (스크롤뷰: OFF)';
      const labelEl = pageToggle.querySelector('#nav-toggle-mode-label') || pageToggle.querySelector('.pc-label') || pageToggle.querySelector('text');
      const bgPath = pageToggle.querySelector('#nav-toggle-bg') || pageToggle.querySelector('path[d*="H 152"]') || pageToggle.querySelector('path');
      const iconGroup = pageToggle.querySelector('#nav-mode-icon-group') || pageToggle.querySelector('g[transform*="15"]');

      if (labelEl && bgPath) {
        labelEl.textContent = isPageMode ? '스크롤뷰: OFF' : '스크롤뷰: ON';
        labelEl.setAttribute('fill', isPageMode ? '#66460D' : '#20533C');
        bgPath.setAttribute('fill', isPageMode ? '#FEE396' : '#BBD5B8');
        if (iconGroup) {
          iconGroup.innerHTML = isPageMode ? `
            <rect x="0" y="0" width="12" height="14" rx="2" fill="#66460D"/>
            <line x1="2.5" y1="3.5" x2="9.5" y2="3.5" stroke="#FFFDF9" stroke-width="1.2"/>
            <line x1="2.5" y1="7" x2="9.5" y2="7" stroke="#FFFDF9" stroke-width="1.2"/>
            <line x1="2.5" y1="10.5" x2="7.5" y2="10.5" stroke="#FFFDF9" stroke-width="1.2"/>
          ` : `
            <rect x="0" y="0" width="12" height="3.5" rx="1.2" fill="#20533C"/>
            <rect x="0" y="5" width="12" height="3.5" rx="1.2" fill="#20533C"/>
            <rect x="0" y="10" width="12" height="3.5" rx="1.2" fill="#20533C"/>
          `;
        }
      }
    }

    const pageBadge = document.querySelector('#pc-page-nav-bar .pc-page-nav-actions .pc-badge');
    if (pageBadge) {
      const curIndex = SECTIONS.findIndex(s => s.id === activePageId);
      pageBadge.textContent = isPageMode ? `페이지 ${curIndex + 1} / ${SECTIONS.length}` : '전체 연속 스크롤';
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
    if (pageId === 'pc-blocks-charts' && window.PaperCutUI && window.PaperCutUI.refreshBlocks) {
      window.PaperCutUI.refreshBlocks();
    }
    if (typeof window.applyPapercutStrokeByScale === 'function') {
      const activeEl = document.getElementById(pageId);
      if (activeEl) window.applyPapercutStrokeByScale(activeEl);
    }
  }

  // Setup ScrollSpy when in continuous scroll mode
  window.addEventListener('scroll', () => {
    if (isSimulatorPage || isPageMode) return;
    let currentId = '';
    let bestTop = -Infinity;

    // 메뉴 순서와 문서 순서가 다르므로(예: 애니메이션 스튜디오가 컴포넌트보다 위) 화면 기준선(200px)을
    // 이미 지난 섹션 중 가장 아래에 있는 것을 고른다. 숨겨진 섹션은 건너뛴다.
    SECTIONS.forEach(s => {
      const sec = document.getElementById(s.id);
      if (!sec || sec.offsetParent === null) return;
      const top = sec.getBoundingClientRect().top;
      if (top <= 200 && top > bestTop) {
        bestTop = top;
        currentId = s.id;
      }
    });

    if (!currentId && SECTIONS.length > 0) {
      currentId = SECTIONS[0].id;
    }

    if (currentId && currentId !== activePageId) {
      activePageId = currentId;
      const targetSec = SECTIONS.find(s => s.id === currentId);
      if (targetSec) {
        const curLabel = document.querySelector('.pc-breadcrumb-current, .pc-page-breadcrumb-current');
        if (curLabel) curLabel.textContent = targetSec.title;
        const catLabel = document.querySelector('.pc-breadcrumb-category');
        if (catLabel) catLabel.textContent = targetSec.category;
      }
    }

    document.querySelectorAll('.pc-sidebar-item').forEach(item => {
      const isActive = item.getAttribute('data-target') === currentId;
      item.classList.toggle('is-active', isActive);
      item.classList.toggle('pc-is-active', isActive);
    });

    // 1페이지 연속 스크롤 시 #pc-components 하위 6개 스위트 목차 자동 활성화
    if (currentId === 'pc-components') {
      const subCategories = (SECTIONS.find(s => s.id === 'pc-components').children || []).map(c => c.id);
      let activeSub = '';
      for (let j = subCategories.length - 1; j >= 0; j--) {
        const subEl = document.getElementById('pc-suite-' + subCategories[j]);
        // offsetTop은 그리드 기준이라 문서 위치와 다르다. 화면 기준 위치로 비교한다.
        if (subEl && subEl.offsetParent !== null && subEl.getBoundingClientRect().top <= 260) {
          activeSub = subCategories[j];
          break;
        }
      }
      document.querySelectorAll('#pc-components .pc-filter-btn[data-target-cat]').forEach(btn => {
        btn.classList.toggle('is-active', activeSub ? btn.dataset.targetCat === activeSub : btn.dataset.targetCat === 'all');
      });
      document.querySelectorAll('.pc-sidebar-submenu[data-parent="pc-components"] .pc-sidebar-subitem').forEach(item => {
        item.classList.toggle('is-active', item.dataset.sub === activeSub);
      });
    }
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
    setViewMode,
    toggleViewMode,
    syncViewModeButtons,
    toggleSidebarCollapse,
    getMountedPapercutPlateSvg,
    hydrateMountedPlates,
    get isPageMode() { return isPageMode; },
    get isCollapsed() { return document.body.classList.contains('is-collapsed'); },
    SECTIONS
  };
})();
