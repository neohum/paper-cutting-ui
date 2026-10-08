/**
 * PaperCut UI - Sidebar Navigation & Multi-Page View Router Controller
 * Transforms the single-scroll layout into distinct, dedicated page views per sidebar menu.
 * Supports URL hash routing, top craft breadcrumbs, bottom page-flip pagination, and view mode toggling.
 */

(function () {
  'use strict';

  const SECTIONS = [
    { id: 'overview', title: '개요 & 히어로', badge: 'Hero', icon: 'home', category: '기본 정보' },
    { id: 'shadowbox-diorama', title: '3D 섀도우 박스 디오라마', badge: 'Diorama', icon: 'layers', category: '기본 정보' },
    
    // 30대 실전 컴포넌트 (4개 세부 파트)
    { id: 'core-components', title: '기본 원형 (Part 1)', badge: '01~08', icon: 'settings', category: '30대 실전 컴포넌트' },
    { id: 'part-2-forms', title: '폼 컨트롤 (Part 2)', badge: '09~16', icon: 'edit', category: '30대 실전 컴포넌트' },
    { id: 'part-3-widgets', title: '시나리오 위젯 (Part 3)', badge: '17~24', icon: 'luggage', category: '30대 실전 컴포넌트' },
    { id: 'part-4-advanced', title: '복합 컴포넌트 (Part 4)', badge: '25~30', icon: 'layers', category: '30대 실전 컴포넌트' },
    
    // 디자인 시스템
    { id: 'texture-showcase', title: '16종 종이 질감', badge: '16 Stocks', icon: 'palette', category: '디자인 시스템' },
    { id: 'paper-shadow-studio', title: '3D 페이퍼 그림자 & 입체감 스튜디오', badge: 'DEPTH LAB', icon: 'layers', category: '디자인 시스템' },
    { id: 'paper-animation-studio', title: '페이퍼 애니메이션 스튜디오', badge: '8종 모션', icon: 'sparkles', category: '디자인 시스템' },
    { id: 'paper-alerts-toasts', title: '알림 & 토스트 시스템', badge: 'NEW', icon: 'bell', category: '디자인 시스템' },
    
    // 아이콘 & 배경
    { id: 'icon-gallery', title: '페이퍼컷 아이콘 라이브러리', badge: '659종', icon: 'sparkles', category: '아이콘 & 배경' },
    { id: 'bg-library', title: '3D 아이콘 배경 플레이트', badge: '130종', icon: 'shield', category: '아이콘 & 배경' },
    { id: 'playground', title: '실시간 디자인 랩', badge: 'Playground', icon: 'brush', category: '디자인 랩' },
    
    // 컴포넌트 컬렉션
    { id: 'shadcn-components', title: '페이퍼 UI 44종 컴포넌트', badge: '44개', icon: 'layers', category: '컴포넌트 컬렉션' },
    { id: 'shadcn-blocks-charts', title: '실전 애플리케이션 블록', badge: '6대 블록', icon: 'contacts-book', category: '컴포넌트 컬렉션' },
    { id: 'shadcn-charts-section', title: '3D 페이퍼 벡터 차트', badge: '6종 차트', icon: 'pie-chart-clean', category: '컴포넌트 컬렉션' }
  ];

  let activePageId = 'overview';
  // Default to Multi-Page View Mode per user requirement
  let isPageMode = localStorage.getItem('pc_view_mode') !== 'scroll';

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

    let menuHtml = '';
    let lastCat = '';

    SECTIONS.forEach(sec => {
      if (sec.category !== lastCat) {
        menuHtml += `<div class="pc-sidebar-category">${sec.category}</div>`;
        lastCat = sec.category;
      }
      menuHtml += `
        <a href="#${sec.id}" class="pc-sidebar-item" data-target="${sec.id}" title="${sec.title}">
          <div class="pc-sidebar-item-icon">
            <span class="pc-inline-icon is-xs" data-icon="${sec.icon}"></span>
          </div>
          <span class="pc-sidebar-item-text">${sec.title}</span>
          <span class="pc-sidebar-badge">${sec.badge}</span>
        </a>
      `;
    });

    sidebarEl.innerHTML = `
      <div class="pc-sidebar-header">
        <a href="#overview" class="pc-sidebar-brand">
          <div class="pc-sidebar-logo-icon">
            <span class="pc-inline-icon is-sm" data-icon="scissors"></span>
          </div>
          <div class="pc-sidebar-brand-text">
            <span class="pc-sidebar-brand-title">PaperCut UI</span>
            <span class="pc-sidebar-brand-sub">Layered Craft Library</span>
          </div>
        </a>
        <button type="button" class="pc-sidebar-toggle-btn" id="pc-sidebar-toggle" title="사이드바 접기/펼치기">
          <span class="pc-inline-icon is-xs" data-icon="arrow-left"></span>
        </button>
      </div>

      <div class="pc-sidebar-menu">
        ${menuHtml}
      </div>

      <div class="pc-sidebar-footer">
        <button type="button" class="pc-sidebar-top-btn" id="pc-sidebar-to-top">
          <span class="pc-inline-icon is-xs" data-icon="arrow-up"></span>
          <span>맨 위로 가기</span>
        </button>
      </div>
    `;

    // Mobile floating toggle button
    let floatBtn = document.querySelector('.pc-sidebar-floating-toggle');
    if (!floatBtn) {
      floatBtn = document.createElement('button');
      floatBtn.type = 'button';
      floatBtn.className = 'pc-sidebar-floating-toggle';
      floatBtn.innerHTML = `
        <span class="pc-inline-icon is-xs" data-icon="scissors"></span>
        <span>목차 색인</span>
      `;
      document.body.appendChild(floatBtn);
      floatBtn.addEventListener('click', () => {
        sidebarEl.classList.toggle('is-mobile-open');
      });
    }

    // Hydrate icons in sidebar
    if (typeof window.hydratePapercutIcons === 'function') {
      window.hydratePapercutIcons(sidebarEl);
      window.hydratePapercutIcons(floatBtn);
    }

    // Toggle Collapse Button
    const toggleBtn = document.getElementById('pc-sidebar-toggle');
    toggleBtn?.addEventListener('click', () => {
      const nowCollapsed = sidebarEl.classList.toggle('is-collapsed');
      document.body.classList.toggle('is-collapsed', nowCollapsed);
      localStorage.setItem('pc_sidebar_collapsed', nowCollapsed ? 'true' : 'false');
      
      const iconSpan = toggleBtn.querySelector('.pc-inline-icon');
      if (iconSpan) {
        iconSpan.setAttribute('data-icon', nowCollapsed ? 'arrow-right' : 'arrow-left');
        if (typeof window.hydratePapercutIcons === 'function') {
          window.hydratePapercutIcons(toggleBtn);
        }
      }
    });

    // Top Button
    document.getElementById('pc-sidebar-to-top')?.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Setup Multi-Page Routing
    setupRouter(sidebarEl);
  }

  /**
   * Multi-Page View Router Engine
   */
  function setupRouter(sidebarEl) {
    // Intercept clicks on sidebar items
    sidebarEl.querySelectorAll('.pc-sidebar-item').forEach(link => {
      link.addEventListener('click', (e) => {
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

    // Initial page load route
    const initHash = window.location.hash.replace(/^#/, '');
    switchPage(initHash || 'overview', false);
  }

  function switchPage(pageId, pushState = true) {
    const targetSec = SECTIONS.find(s => s.id === pageId) || SECTIONS[0];
    activePageId = targetSec.id;

    if (pushState) {
      window.history.pushState(null, '', `#${activePageId}`);
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
      const targetEl = document.getElementById(activePageId);
      if (targetEl) {
        const topOffset = targetEl.getBoundingClientRect().top + window.scrollY - 30;
        window.scrollTo({ top: topOffset, behavior: 'smooth' });
      }
    }

    // Highlight active sidebar item
    document.querySelectorAll('.pc-sidebar-item').forEach(item => {
      item.classList.toggle('is-active', item.getAttribute('data-target') === activePageId);
    });

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
          페이지 ${curIndex + 1} / ${SECTIONS.length}
        </span>
        <button type="button" class="pc-page-mode-toggle" id="pc-toggle-page-mode" title="페이지별 분할 보기와 전체 연속 스크롤 모드를 전환합니다">
          <span class="pc-inline-icon is-xs" data-icon="${isPageMode ? 'file' : 'layout-list'}"></span>
          <span>${isPageMode ? '페이지별 보기 (ON)' : '전체 스크롤 모드'}</span>
        </button>
      </div>
    `;

    if (typeof window.hydratePapercutIcons === 'function') {
      window.hydratePapercutIcons(bar);
    }

    // Toggle View Mode Button
    bar.querySelector('#pc-toggle-page-mode')?.addEventListener('click', () => {
      isPageMode = !isPageMode;
      localStorage.setItem('pc_view_mode', isPageMode ? 'page' : 'scroll');
      switchPage(activePageId, false);
      if (typeof window.showPaperToast === 'function') {
        window.showPaperToast(
          isPageMode ? '페이지별 독립 보기 모드로 전환되었습니다.' : '전체 스크롤 보기 모드로 전환되었습니다.',
          'mint'
        );
      }
    });
  }

  function renderPagePagination(sec) {
    const curIndex = SECTIONS.findIndex(s => s.id === sec.id);
    const prevSec = curIndex > 0 ? SECTIONS[curIndex - 1] : null;
    const nextSec = curIndex < SECTIONS.length - 1 ? SECTIONS[curIndex + 1] : null;

    const activeEl = document.getElementById(sec.id);
    if (!activeEl) return;

    let pagination = activeEl.querySelector('.pc-page-pagination-bar');
    if (!pagination) {
      pagination = document.createElement('div');
      pagination.className = 'pc-page-pagination-bar';
      activeEl.appendChild(pagination);
    }

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
    if (isPageMode) return;
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

    document.querySelectorAll('.pc-sidebar-item').forEach(item => {
      item.classList.toggle('is-active', item.getAttribute('data-target') === currentId);
    });
  }, { passive: true });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderSidebar);
  } else {
    renderSidebar();
  }

  window.PaperCutSidebar = {
    switchPage,
    SECTIONS
  };
})();
