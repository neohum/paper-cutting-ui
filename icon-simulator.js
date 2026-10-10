/**
 * PaperCut UI - Dual Studio Icon Size Simulator Controller
 * Completely separates 16~28px fi fi-rr Ultra-Slim Vector Line Studio from 32~256px 3D Layered Paper Art Studio.
 * Supports URL hash routing (#mode=firr, #mode=paper3d), live scaling, loupe inspector, dynamic matrix, and code export.
 */

(function () {
  'use strict';

  // 1. fi fi-rr Slim Line Studio Sizes (16px ~ 28px) - High Readability & Subpixel Precision
  const FIRR_SIZES = [
    { size: 16, label: '16px', role: '파비콘 & 브레드크럼 (웹 표준 최소 규격)', desc: '0.88px 진회색 극세선 · 그림자 차단 · 8% 파스텔 워시', clarity: 'fi-rr 16px' },
    { size: 18, label: '18px', role: '스몰 버튼 접두사 & 인풋 필드', desc: '0.88px 진회색 극세선 · 서브픽셀 정렬 가독성', clarity: 'fi-rr 18px' },
    { size: 20, label: '20px', role: '표준 폼 컨트롤 & 인라인 뱃지', desc: '0.88px 진회색 극세선 · 또렷한 윤곽 실루엣', clarity: 'fi-rr 20px' },
    { size: 24, label: '24px', role: '표준 액션 버튼 & 모바일 탭바', desc: '0.88px 진회색 극세선 · 균형잡힌 글리프 비율', clarity: 'fi-rr 24px' },
    { size: 28, label: '28px', role: '헤더 액션 바 (라인 모드 최대 임계점)', desc: '0.88px 진회색 극세선 · 라인 아트 최대 허용 규격', clarity: 'fi-rr 28px' }
  ];

  // 2. 3D Layered Paper Art Studio Sizes (16px ~ 256px) - Layered Paper & Spatial Depth
  const PAPER3D_SIZES = [
    { size: 16, label: '16px', role: '초소형 3D 페이퍼 컬러 (16px 시작점)', desc: '외곽선 OFF · 마이크로 다층 색지 & 정밀 그림자', clarity: '3D Paper 16px' },
    { size: 20, label: '20px', role: '스몰 3D 뱃지 & 아이콘', desc: '초미세 다층 색지 레이어링 · 소프트 섀도우', clarity: '3D Paper 20px' },
    { size: 24, label: '24px', role: '컴팩트 3D 버튼 & 인라인 액션', desc: '다층 파스텔 색지 · 선명한 형태감', clarity: '3D Paper 24px' },
    { size: 28, label: '28px', role: '스몰 카드 & 툴바 심볼', desc: '색지 레이어링 디테일 확장 규격', clarity: '3D Paper 28px' },
    { size: 32, label: '32px', role: '아바타 뱃지 & 퀵 액션 (표준 시작점)', desc: '외곽선 OFF · 다층 색지 레이어링 & 3D 입체 그림자', clarity: '3D Paper 32px' },
    { size: 40, label: '40px', role: '대시보드 지표 카드 썸네일', desc: '다층 색지 입체감 · 소프트 드롭섀도우', clarity: '3D Paper 40px' },
    { size: 48, label: '48px', role: '피처 콜아웃 & 앱 런처', desc: '종이 공예 질감 확연 · 뚜렷한 음영 층위', clarity: '3D Paper 48px' },
    { size: 64, label: '64px', role: '모달 & 다이얼로그 헤더 (표준 권장)', desc: '풍부한 다층 색지 · 디오라마적 볼륨감', clarity: '3D Paper 64px' },
    { size: 80, label: '80px', role: '카테고리 타일 & 배너', desc: '종이 공예의 섬세한 컷팅 층위 감상', clarity: '3D Paper 80px' },
    { size: 96, label: '96px', role: '앱 쇼케이스 & 온보딩', desc: '화려한 3D 페이퍼 아트의 시각적 몰입', clarity: '3D Paper 96px' },
    { size: 128, label: '128px', role: '히어로 일러스트레이션', desc: '웅장한 페이퍼 컷팅 예술 작품', clarity: '3D Paper 128px' },
    { size: 192, label: '192px', role: '디오라마 센터피스', desc: '대형 종이 공예 디오라마 조형물', clarity: '3D Paper 192px' },
    { size: 256, label: '256px', role: '스튜디오 맥시멈 디테일', desc: '정밀한 종이 컷팅 레이어의 정점', clarity: '3D Paper 256px' }
  ];

  // Simulator State: Independently tracks Canvas 1 (16~28px fi-rr) and Canvas 2 (16~256px 3D Paper)
  const simState = {
    selectedIconId: 'coffee',
    firrSize: 24,       // Canvas 1: 16px ~ 28px (default 24px)
    paper3dSize: 64,    // Canvas 2: 16px ~ 256px (default 64px)
    firrZoom: 4,        // Canvas 1 Loupe: 1x ~ 16x (default 4x)
    paper3dZoom: 1,     // Canvas 2 Loupe: 1x ~ 16x (default 1x)
    background: 'cream',
    showBbox: true,
    showGrid: false,
    autoStroke: true,
    activeCategory: 'all',
    searchQuery: '',
    exportTab: 'svg',    // 'svg' | 'html' | 'component' | 'css'
    // Canvas 1 (fi fi-rr Line) Dedicated Customization States
    firrStrokeWidth: 0.88,      // 0.4px ~ 2.4px (default 0.88px)
    firrStrokeColor: '#423D39', // Stroke color (default #423D39)
    firrBg: 'white',            // Canvas 1 independent background: 'white' | 'cream' | 'dark' | 'mint' | 'peach' | 'lavender' | 'buttercup' | 'blueprint' | 'checker'
    // Gallery Explorer States
    galleryTheme: 'white',      // 'white' | 'cream' | 'dark' | 'mint' | 'peach' | 'lavender' | 'buttercup' | 'blueprint'
    galleryStyle: 'paper3d',    // 'paper3d' (3D colored paper) | 'firr' (0.88px line)
    galleryLimit: 120,          // Batch size for seamless high performance
    galleryExpanded: false,     // Expanded height mode toggle
    selectedDropdownValue: '선택 옵션 A (fi fi-rr 라인 렌더링)'
  };

  let uniqueCounter = 0;

  /**
   * Helper to retrieve icon from global library
   */
  function getIcon(id) {
    if (!window.PAPERCUT_ICONS || !Array.isArray(window.PAPERCUT_ICONS)) return null;
    return window.PAPERCUT_ICONS.find(item => item.id === id) || window.PAPERCUT_ICONS[0];
  }

  /**
   * Build scaled SVG string with unique filter IDs and pure mode transformation
   * - isLineMode (!options.forcePaper3d && (size <= 28 || forceLineMode)): Strips 100% of colorful paper fills into pure, crisp fi fi-rr vector line art with custom stroke width & color
   * - 3D Paper Art Mode (forcePaper3d or size >= 32): Preserves full kirigami layered color papercraft with realistic drop shadows (16px ~ 256px)
   */
  function buildScaledSvg(iconId, size, options = {}) {
    const icon = getIcon(iconId);
    if (!icon || !icon.svg) return '';

    let svgRaw = icon.svg;
    const uid = `sim-${++uniqueCounter}`;

    // Mode determination: forcePaper3d keeps pure 3D paper color even at <= 28px
    const isLineMode = !options.forcePaper3d && (options.forceLineMode || size <= 28);
    const strokeWidth = options.strokeWidth || simState.firrStrokeWidth || 0.88;
    const strokeColor = options.strokeColor || simState.firrStrokeColor || '#423D39';

    // Strict PaperCut UI specification: fi-rr style NEVER exceeds 28px
    const effectiveSize = isLineMode ? Math.min(28, size || 24) : size;

    if (isLineMode) {
      // 1. Strip all drop-shadow filters and defs completely
      svgRaw = svgRaw.replace(/<defs>[\s\S]*?<\/defs>/gi, '')
                     .replace(/filter="url\(#[^"]+\)"/gi, '')
                     .replace(/filter="[^"]*"/gi, '');

      // 2. Transform ALL geometric elements into pure fi fi-rr monochrome line art
      // Strip any colorful fills (pink, mint, peach, cream, yellow, blue, etc.) completely!
      svgRaw = svgRaw.replace(/<(path|rect|circle|ellipse|polygon|line|polyline)\b([^>]*?)(?:\/?>)/gi, (match, tag, rawAttrs) => {
        // Identify solid dark accent points (pupils, tiny center dots, buttons)
        const isDarkAccent = /fill=[\"'](#3D352E|#2B2623|#4A3A2A|#221C18|#333333|#000000|#111111|black)[\"']/i.test(rawAttrs);

        // Clean out legacy stroke/fill/opacity attributes
        let cleanAttrs = rawAttrs
          .replace(/\bstroke=[\"'][^\"']*[\"']/gi, '')
          .replace(/\bstroke-width=[\"'][^\"']*[\"']/gi, '')
          .replace(/\bstroke-linecap=[\"'][^\"']*[\"']/gi, '')
          .replace(/\bstroke-linejoin=[\"'][^\"']*[\"']/gi, '')
          .replace(/\bstroke-miterlimit=[\"'][^\"']*[\"']/gi, '')
          .replace(/\bfill=[\"'][^\"']*[\"']/gi, '')
          .replace(/\bfill-opacity=[\"'][^\"']*[\"']/gi, '')
          .replace(/\bopacity=[\"'][^\"']*[\"']/gi, '')
          .replace(/\/+$/, '')
          .trim();

        if (isDarkAccent) {
          // Solid dark point dot
          return `<${tag} ${cleanAttrs} fill="${strokeColor}" stroke="${strokeColor}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/>`;
        } else {
          // Pure fi fi-rr line: fill="none", customized razor-sharp vector line
          return `<${tag} ${cleanAttrs} fill="none" stroke="${strokeColor}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" vector-effect="non-scaling-stroke"/>`;
        }
      });
    } else {
      // Replace drop-shadow filter IDs for 3D paper art (16px ~ 256px) to prevent DOM id conflicts
      svgRaw = svgRaw.replace(/id="ps-([^"]+)"/g, `id="ps-$1-${uid}"`)
                     .replace(/url\(#ps-([^)]+)\)/g, `url(#ps-$1-${uid})`);
    }

    const vbMatch = svgRaw.match(/viewBox="([^"]+)"/);
    const vb = vbMatch ? vbMatch[1] : '0 0 64 64';

    // Replace root <svg> tag cleanly in a single pass
    let cleanSvg = svgRaw.replace(/<svg\b([^>]*)>/, (m, attrs) => {
      let a = attrs.replace(/\b(width|height|viewBox|style|shape-rendering|class|data-style)="[^"]*"/g, '').trim();
      const maxConstraint = isLineMode ? ' max-width:28px !important; max-height:28px !important;' : '';
      const styleStr = `width:${effectiveSize}px !important; height:${effectiveSize}px !important;${maxConstraint} display:block !important; overflow:visible !important;${isLineMode ? ' filter: none !important;' : ''}`;
      const clsStr = isLineMode
        ? 'pc-layered-paper-icon pc-stroke-active-layer pc-firr-style'
        : 'pc-layered-paper-icon';
      const dataStyle = isLineMode ? 'fi-rr' : 'paper-art';

      return `<svg ${a} width="${effectiveSize}" height="${effectiveSize}" viewBox="${vb}" class="${clsStr}" data-style="${dataStyle}" shape-rendering="geometricPrecision" style="${styleStr}">`;
    });

    return cleanSvg;
  }

  /**
   * Download Standalone Clean SVG File with custom styling options
   */
  function downloadSvgFile(iconId, size, options = {}) {
    const isLineMode = !options.forcePaper3d && (options.forceLineMode || size <= 28);
    const strokeWidth = simState.firrStrokeWidth || 0.88;
    const strokeColor = simState.firrStrokeColor || '#423D39';
    const svgContent = buildScaledSvg(iconId, size, { standalone: true, strokeWidth, strokeColor, forcePaper3d: options.forcePaper3d });
    if (!svgContent) return;

    // Wrap with XML header and clean indentation for developers
    const modeLabel = isLineMode ? `fi fi-rr Ultra-Slim Vector Line (${strokeWidth}px, ${strokeColor})` : '3D Layered Paper Art';
    const fullXml = `<?xml version="1.0" encoding="UTF-8"?>\n<!-- PaperCut UI - ${iconId} (${size}px) | ${modeLabel} -->\n${svgContent}`;
    const blob = new Blob([fullXml], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `papercut-${iconId}-${size}px-${isLineMode ? `firr-${strokeWidth}px` : 'paper3d'}.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    notify(`[${iconId}] ${size}px SVG 파일이 다운로드되었습니다! (${isLineMode ? `${strokeWidth}px ${strokeColor} 라인` : '3D 페이퍼'})`, 'peach');
  }

  /**
   * Show toast alert
   */
  function notify(msg, type = 'mint') {
    if (typeof window.showPaperToast === 'function') {
      window.showPaperToast(msg, type);
    } else {
      console.log(`[Toast]: ${msg}`);
    }
  }

  /**
   * Smoothly scroll and focus on target canvas studio
   */
  function switchStudioMode(mode, targetSize) {
    const isFirr = mode === 'firr';
    const tabFirr = document.getElementById('tab-studio-firr');
    const tabPaper3d = document.getElementById('tab-studio-paper3d');

    if (tabFirr) tabFirr.classList.toggle('is-active', isFirr);
    if (tabPaper3d) tabPaper3d.classList.toggle('is-active', !isFirr);

    const targetEl = document.getElementById(isFirr ? 'canvas-scaler-firr' : 'canvas-scaler-paper3d');
    if (targetEl) {
      const topOffset = targetEl.getBoundingClientRect().top + window.scrollY - 30;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }

    if (typeof targetSize === 'number') {
      if (isFirr) {
        simState.firrSize = Math.max(16, Math.min(28, targetSize));
        updateCanvasFirr();
      } else {
        simState.paper3dSize = Math.max(16, Math.min(256, targetSize));
        updateCanvasPaper3d();
      }
    }
  }

  let isInternalHashChange = false;

  /**
   * Sync URL Hash with Current Icon (Safe for both HTTP/HTTPS and file:// origins)
   */
  function syncUrlHash() {
    if (window.location.protocol === 'file:') return;

    const hash = `#icon=${simState.selectedIconId}`;
    if (window.location.hash === hash) return;

    try {
      if (window.history && typeof window.history.replaceState === 'function') {
        window.history.replaceState(null, '', hash);
      } else {
        isInternalHashChange = true;
        window.location.hash = hash;
        setTimeout(() => { isInternalHashChange = false; }, 80);
      }
    } catch (err) {
      // Silently catch and suppress security origin restrictions
    }
  }

  /**
   * =========================================================================
   * CANVAS 1: Update fi fi-rr Slim Line Canvas (16px ~ 28px)
   * =========================================================================
   */
  function updateCanvasFirr() {
    const id = simState.selectedIconId;
    const size = simState.firrSize;
    const strokeWidth = simState.firrStrokeWidth || 0.88;
    const strokeColor = simState.firrStrokeColor || '#423D39';
    const firrBg = simState.firrBg || 'white';

    // 0. Inject CSS Properties into Canvas 1 card for instantaneous reactivity
    const scalerCard = document.getElementById('canvas-scaler-firr');
    if (scalerCard) {
      scalerCard.style.setProperty('--pc-icon-stroke-color', strokeColor);
      scalerCard.style.setProperty('--pc-icon-stroke-width', `${strokeWidth}px`);
      scalerCard.style.setProperty('--pc-icon-size', `${size}px`);
    }

    // 1. Vessel & Viewport
    const vessel = document.getElementById('sim-vessel-firr');
    const viewport = document.getElementById('sim-viewport-firr');
    const dimBadge = document.getElementById('sim-dim-firr');

    if (dimBadge) dimBadge.textContent = `${size}px × ${size}px`;

    if (vessel) {
      vessel.setAttribute('data-dim', `${size} × ${size}`);
      vessel.classList.toggle('has-bbox', simState.showBbox);
      vessel.innerHTML = buildScaledSvg(id, size, { strokeWidth, strokeColor });
    }

    if (viewport) {
      viewport.setAttribute('data-bg', firrBg);
      viewport.classList.toggle('has-grid', simState.showGrid);
    }

    // 2. Size Slider & Number Input
    const slider = document.getElementById('sim-slider-firr');
    const numInput = document.getElementById('sim-num-firr');
    if (slider) slider.value = size;
    if (numInput) numInput.value = size;

    // 3. Preset Buttons Active
    document.querySelectorAll('#sim-presets-firr .sim-preset-btn').forEach(btn => {
      const btnSize = parseInt(btn.getAttribute('data-size'), 10);
      btn.classList.toggle('is-active', btnSize === size);
    });

    // 4. Stroke Width Slider, Number Input, Presets
    const sliderWidth = document.getElementById('sim-slider-width-firr');
    const numWidth = document.getElementById('sim-width-firr');
    if (sliderWidth) sliderWidth.value = strokeWidth;
    if (numWidth) numWidth.value = strokeWidth;

    document.querySelectorAll('#sim-presets-stroke-width .sim-preset-btn').forEach(btn => {
      const w = parseFloat(btn.getAttribute('data-swidth'));
      btn.classList.toggle('is-active', Math.abs(w - strokeWidth) < 0.02);
    });

    // 5. Stroke Color UI Sync
    const colorLabel = document.getElementById('sim-color-firr-label');
    const colorBadge = document.getElementById('sim-color-preview-badge');
    const colorPicker = document.getElementById('sim-color-firr-picker');
    if (colorLabel) colorLabel.textContent = strokeColor.toUpperCase();
    if (colorBadge) colorBadge.style.backgroundColor = strokeColor;
    if (colorPicker && /^#[0-9a-fA-F]{6}$/i.test(strokeColor)) {
      colorPicker.value = strokeColor;
    }

    document.querySelectorAll('.sim-firr-color-chip').forEach(chip => {
      const c = chip.getAttribute('data-color');
      chip.classList.toggle('is-active', c.toLowerCase() === strokeColor.toLowerCase());
    });

    // 6. Background Type UI Sync
    const bgBadge = document.getElementById('sim-firr-bg-badge');
    const bgNames = {
      white: '화이트(기본)',
      cream: '크림 코튼',
      dark: '다크 슬레이트',
      mint: '소프트 민트',
      peach: '소프트 피치',
      lavender: '소프트 라벤더',
      buttercup: '소프트 버터컵',
      blueprint: '블루프린트 그리드',
      checker: '투명 격자 체커보드'
    };
    if (bgBadge) bgBadge.textContent = bgNames[firrBg] || firrBg;

    document.querySelectorAll('.sim-firr-bg-btn').forEach(btn => {
      btn.classList.toggle('is-active', btn.getAttribute('data-bg') === firrBg);
    });

    // 7. Loupe Inspector for Canvas 1
    const loupeBox = document.getElementById('sim-loupe-box-firr');
    const loupeFactor = document.getElementById('sim-loupe-factor-firr');
    if (loupeBox) {
      loupeBox.setAttribute('data-bg', firrBg);
      loupeBox.innerHTML = buildScaledSvg(id, size, { strokeWidth, strokeColor });
      const svgEl = loupeBox.querySelector('svg');
      if (svgEl) svgEl.style.transform = `scale(${simState.firrZoom})`;
    }
    if (loupeFactor) {
      loupeFactor.textContent = `${simState.firrZoom}x 배율 루페 (${strokeWidth}px 선, ${strokeColor})`;
    }
    document.querySelectorAll('#sim-loupe-zooms-firr .sim-zoom-btn').forEach(btn => {
      btn.classList.toggle('is-active', parseFloat(btn.getAttribute('data-zoom')) === simState.firrZoom);
    });

    // 8. In-situ Micro UI Preview
    const pBtn = document.getElementById('preview-btn-icon-firr');
    const pInput = document.getElementById('preview-input-icon-firr');
    const pBadge = document.getElementById('preview-badge-icon-firr');
    if (pBtn) pBtn.innerHTML = buildScaledSvg(id, 24, { strokeWidth, strokeColor });
    if (pInput) pInput.innerHTML = buildScaledSvg(id, 20, { strokeWidth, strokeColor });
    if (pBadge) pBadge.innerHTML = buildScaledSvg(id, 16, { strokeWidth, strokeColor });
  }

  /**
   * =========================================================================
   * CANVAS 2: Update 3D Layered Paper Art Canvas (16px ~ 256px)
   * =========================================================================
   */
  function updateCanvasPaper3d() {
    const id = simState.selectedIconId;
    const size = simState.paper3dSize;

    // 1. Vessel & Viewport
    const vessel = document.getElementById('sim-vessel-paper3d');
    const viewport = document.getElementById('sim-viewport-paper3d');
    const dimBadge = document.getElementById('sim-dim-paper3d');

    if (dimBadge) dimBadge.textContent = `${size}px × ${size}px`;

    if (vessel) {
      vessel.setAttribute('data-dim', `${size} × ${size}`);
      vessel.classList.toggle('has-bbox', simState.showBbox);
      vessel.innerHTML = buildScaledSvg(id, size, { forcePaper3d: true });
    }

    if (viewport) {
      viewport.setAttribute('data-bg', simState.background);
      viewport.classList.toggle('has-grid', simState.showGrid);
    }

    // 2. Slider & Number Input
    const slider = document.getElementById('sim-slider-paper3d');
    const numInput = document.getElementById('sim-num-paper3d');
    if (slider) slider.value = size;
    if (numInput) numInput.value = size;

    // 3. Preset Buttons Active
    document.querySelectorAll('#sim-presets-paper3d .sim-preset-btn').forEach(btn => {
      const btnSize = parseInt(btn.getAttribute('data-size'), 10);
      btn.classList.toggle('is-active', btnSize === size);
    });

    // 4. Loupe Inspector for Canvas 2
    const loupeBox = document.getElementById('sim-loupe-box-paper3d');
    const loupeFactor = document.getElementById('sim-loupe-factor-paper3d');
    if (loupeBox) {
      loupeBox.innerHTML = buildScaledSvg(id, size, { forcePaper3d: true });
      const svgEl = loupeBox.querySelector('svg');
      if (svgEl) svgEl.style.transform = `scale(${simState.paper3dZoom})`;
    }
    if (loupeFactor) {
      loupeFactor.textContent = `${simState.paper3dZoom}x 배율 루페 (3D 색지 그림자)`;
    }
    document.querySelectorAll('#sim-loupe-zooms-paper3d .sim-zoom-btn').forEach(btn => {
      btn.classList.toggle('is-active', parseFloat(btn.getAttribute('data-zoom')) === simState.paper3dZoom);
    });

    // 5. In-situ Showcase UI Preview
    const pKpi = document.getElementById('preview-kpi-icon-paper3d');
    const pModal = document.getElementById('preview-modal-icon-paper3d');
    if (pKpi) pKpi.innerHTML = buildScaledSvg(id, 48, { forcePaper3d: true });
    if (pModal) pModal.innerHTML = buildScaledSvg(id, 64, { forcePaper3d: true });
  }

  /**
   * Update Both Canvases Simultaneously
   */
  function updateBothCanvases() {
    updateCanvasFirr();
    updateCanvasPaper3d();
    renderComparisonMatrix();
    renderUiContexts();
    updateCodeExport();
  }

  /**
   * Backward-compatible alias for single workbench calls
   */
  function updateWorkbench() {
    updateBothCanvases();
  }

  /**
   * Render Multi-Scale Comparison Matrix (Side-by-side or combined)
   */
  function renderComparisonMatrix() {
    const grid = document.getElementById('sim-matrix-grid');
    if (!grid) return;

    const id = simState.selectedIconId;

    // Combine both sets so users see the complete gradient from 16px to 256px
    const fullList = [
      ...FIRR_SIZES.map(item => ({ ...item, isFirr: true })),
      ...PAPER3D_SIZES.map(item => ({ ...item, isFirr: false }))
    ];

    grid.innerHTML = fullList.map(item => {
      const isActive = item.isFirr 
        ? item.size === simState.firrSize 
        : item.size === simState.paper3dSize;

      return `
        <div class="sim-matrix-card ${isActive ? 'is-active-inspect' : ''}" data-size="${item.size}" data-mode="${item.isFirr ? 'firr' : 'paper3d'}">
          <span class="pc-badge pc-badge-${item.isFirr ? 'peach' : 'mint'}" style="font-size: 11px;">
            ${item.clarity}
          </span>
          <div class="sim-matrix-stage">
            ${buildScaledSvg(id, item.size, { forcePaper3d: !item.isFirr, forceLineMode: item.isFirr })}
          </div>
          <div class="sim-matrix-meta">
            <div class="sim-matrix-dim">${item.size}px × ${item.size}px</div>
            <div style="font-size: 12px; font-weight: 800; color: var(--pc-ink);">${item.role}</div>
            <div class="sim-matrix-desc">${item.desc}</div>
            <button type="button" class="pc-btn pc-btn-sm sim-matrix-select-btn" data-size="${item.size}" data-mode="${item.isFirr ? 'firr' : 'paper3d'}" style="margin-top: 8px; width: 100%; padding: 4px 8px; font-size: 11px;">
              <span>${item.isFirr ? '캔버스 1에서 검사' : '캔버스 2에서 검사'}</span>
            </button>
          </div>
        </div>
      `;
    }).join('');

    // Attach click handlers to matrix cards
    grid.querySelectorAll('.sim-matrix-select-btn, .sim-matrix-card').forEach(el => {
      el.addEventListener('click', (e) => {
        const targetCard = e.target.closest('.sim-matrix-card');
        if (!targetCard) return;
        const size = parseInt(targetCard.getAttribute('data-size'), 10);
        const mode = targetCard.getAttribute('data-mode');

        if (mode === 'firr') {
          simState.firrSize = size;
          updateCanvasFirr();
          const c1 = document.getElementById('canvas-scaler-firr');
          if (c1) c1.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
          simState.paper3dSize = size;
          updateCanvasPaper3d();
          const c2 = document.getElementById('canvas-scaler-paper3d');
          if (c2) c2.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        highlightActiveMatrixCards();
      });
    });
  }

  function highlightActiveMatrixCards() {
    document.querySelectorAll('.sim-matrix-card').forEach(c => {
      const s = parseInt(c.getAttribute('data-size'), 10);
      const isFirr = c.getAttribute('data-mode') === 'firr';
      const isActive = isFirr ? s === simState.firrSize : s === simState.paper3dSize;
      c.classList.toggle('is-active-inspect', isActive);
    });
  }

  /**
   * Render Real-world UI Context Simulator (Differentiated per Studio Mode)
   */
  function renderUiContexts() {
    const container = document.getElementById('sim-context-mockups');
    if (!container) return;

    const iconId = simState.selectedIconId;
    const isFirr = simState.mode === 'firr';

    if (isFirr) {
      // ==========================================
      // fi fi-rr Micro UI Components (16px ~ 28px)
      // ==========================================
      container.innerHTML = `
        <!-- 1. Buttons Suite -->
        <div class="sim-context-box">
          <div class="sim-context-title">
            <span>01. 마이크로 버튼 패밀리 결합</span>
            <span class="pc-badge pc-badge-peach">16px / 20px / 24px</span>
          </div>
          <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
            <!-- Compact Button (16px icon) -->
            <button class="pc-btn pc-btn-sm pc-btn-mint" style="display: inline-flex; align-items: center; gap: 6px;">
              ${buildScaledSvg(iconId, 16)}
              <span>스몰 버튼 (16px)</span>
            </button>
            <!-- Standard Button (20px icon) -->
            <button class="pc-btn pc-btn-peach" style="display: inline-flex; align-items: center; gap: 8px;">
              ${buildScaledSvg(iconId, 20)}
              <span>표준 액션 (20px)</span>
            </button>
            <!-- Large Stacked Button (24px icon) -->
            <button class="pc-btn pc-btn-lg pc-btn-lavender pc-btn-stacked" style="display: inline-flex; align-items: center; gap: 8px;">
              ${buildScaledSvg(iconId, 24)}
              <span>라지 버튼 (24px)</span>
            </button>
            <!-- Circle Icon Button (20px icon) -->
            <button class="pc-btn pc-btn-buttercup" style="width: 40px; height: 40px; border-radius: 50%; padding: 0; display: inline-flex; align-items: center; justify-content: center;" title="원형 아이콘 버튼 (20px)">
              ${buildScaledSvg(iconId, 20)}
            </button>
          </div>
        </div>

        <!-- 2. Inputs & Forms -->
        <div class="sim-context-box">
          <div class="sim-context-title">
            <span>02. 텍스트 입력창 & 셀렉트 드롭다운</span>
            <span class="pc-badge pc-badge-peach">16px / 18px</span>
          </div>
          <div style="display: flex; flex-direction: column; gap: 10px;">
            <!-- Input with Leading Icon (16px) -->
            <div style="position: relative;">
              <div style="position: absolute; left: 14px; top: 50%; transform: translateY(-50%); pointer-events: none;">
                ${buildScaledSvg(iconId, 16)}
              </div>
              <input type="text" class="pc-input" placeholder="0.88px 정밀 라인 아이콘 접두사 입력창..." style="padding-left: 42px; width: 100%;">
            </div>
            <!-- Pure PaperCut UI Custom Paper Dropdown with Icon (18px) -->
            <div style="display: flex; gap: 8px; align-items: center;">
              <span class="pc-badge pc-badge-lavender" style="display: inline-flex; align-items: center; gap: 6px;">
                ${buildScaledSvg(iconId, 18)} <span>옵션 태그 (18px)</span>
              </span>
              <div class="pc-custom-paper-dropdown" id="sim-paper-dropdown" style="flex: 1;">
                <button type="button" class="pc-paper-dropdown-trigger" id="sim-paper-dropdown-trigger" aria-haspopup="listbox" aria-expanded="false">
                  <span style="display: flex; align-items: center; gap: 8px;">
                    <span class="pc-inline-icon is-xs" style="color: var(--pc-peach-dark); width: 14px; height: 14px; display: inline-flex;">${buildScaledSvg('bookmark', 14, { forceLineMode: true, strokeColor: 'var(--pc-peach-dark)' })}</span>
                    <span id="sim-paper-dropdown-val">${simState.selectedDropdownValue}</span>
                  </span>
                  <span class="pc-paper-dropdown-arrow pc-inline-icon is-xs" style="width: 12px; height: 12px; display: inline-flex;">${buildScaledSvg('arrow-down', 12, { forceLineMode: true })}</span>
                </button>
                <div class="pc-paper-dropdown-menu" id="sim-paper-dropdown-menu" role="listbox">
                  <div class="pc-paper-dropdown-item ${simState.selectedDropdownValue === '선택 옵션 A (fi fi-rr 라인 렌더링)' ? 'is-selected' : ''}" data-val="선택 옵션 A (fi fi-rr 라인 렌더링)">
                    <span class="pc-dropdown-item-check pc-inline-icon is-xs" style="width: 12px; height: 12px; display: inline-flex; opacity: ${simState.selectedDropdownValue === '선택 옵션 A (fi fi-rr 라인 렌더링)' ? '1' : '0'};">${buildScaledSvg('check', 12, { forceLineMode: true, strokeColor: 'var(--pc-peach-dark)' })}</span>
                    <span>선택 옵션 A (fi fi-rr 라인 렌더링)</span>
                  </div>
                  <div class="pc-paper-dropdown-item ${simState.selectedDropdownValue === '선택 옵션 B (0.88px 서브픽셀 정렬)' ? 'is-selected' : ''}" data-val="선택 옵션 B (0.88px 서브픽셀 정렬)">
                    <span class="pc-dropdown-item-check pc-inline-icon is-xs" style="width: 12px; height: 12px; display: inline-flex; opacity: ${simState.selectedDropdownValue === '선택 옵션 B (0.88px 서브픽셀 정렬)' ? '1' : '0'};">${buildScaledSvg('check', 12, { forceLineMode: true, strokeColor: 'var(--pc-peach-dark)' })}</span>
                    <span>선택 옵션 B (0.88px 서브픽셀 정렬)</span>
                  </div>
                  <div class="pc-paper-dropdown-item ${simState.selectedDropdownValue === '선택 옵션 C (3D 다층 색지 공예)' ? 'is-selected' : ''}" data-val="선택 옵션 C (3D 다층 색지 공예)">
                    <span class="pc-dropdown-item-check pc-inline-icon is-xs" style="width: 12px; height: 12px; display: inline-flex; opacity: ${simState.selectedDropdownValue === '선택 옵션 C (3D 다층 색지 공예)' ? '1' : '0'};">${buildScaledSvg('check', 12, { forceLineMode: true, strokeColor: 'var(--pc-peach-dark)' })}</span>
                    <span>선택 옵션 C (3D 다층 색지 공예)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 3. Badges, Tags & Ribbon -->
        <div class="sim-context-box">
          <div class="sim-context-title">
            <span>03. 인라인 뱃지 & 카빙 태그</span>
            <span class="pc-badge pc-badge-peach">16px / 18px / 20px</span>
          </div>
          <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
            <span class="pc-badge pc-badge-mint" style="display: inline-flex; align-items: center; gap: 6px;">
              ${buildScaledSvg(iconId, 16)} <span>인디케이터 핀 (16px)</span>
            </span>
            <span class="pc-badge pc-badge-peach" style="display: inline-flex; align-items: center; gap: 6px;">
              ${buildScaledSvg(iconId, 18)} <span>스탠다드 뱃지 (18px)</span>
            </span>
            <span class="pc-ribbon-banner" style="display: inline-flex; align-items: center; gap: 6px;">
              ${buildScaledSvg(iconId, 20)} <span>리본 배너 태그 (20px)</span>
            </span>
            <span class="pc-label-tag" style="display: inline-flex; align-items: center; gap: 6px;">
              ${buildScaledSvg(iconId, 16)} <span>카빙 라벨 (16px)</span>
            </span>
          </div>
        </div>

        <!-- 4. Mobile Navigation & Tab Bar -->
        <div class="sim-context-box">
          <div class="sim-context-title">
            <span>04. 모바일 하단 탭 내비게이션 바</span>
            <span class="pc-badge pc-badge-peach">24px</span>
          </div>
          <div class="sim-mockup-mobile-bar">
            <div class="sim-mockup-tab-item is-active">
              ${buildScaledSvg(iconId, 24)}
              <span>선택됨 (24px)</span>
            </div>
            <div class="sim-mockup-tab-item">
              ${buildScaledSvg('home', 24)}
              <span>홈</span>
            </div>
            <div class="sim-mockup-tab-item">
              ${buildScaledSvg('search', 24)}
              <span>검색</span>
            </div>
            <div class="sim-mockup-tab-item">
              ${buildScaledSvg('settings', 24)}
              <span>설정</span>
            </div>
          </div>
        </div>

        <!-- 5. Data Table Action Cells -->
        <div class="sim-context-box">
          <div class="sim-context-title">
            <span>05. 데이터 테이블 인라인 액션 셀</span>
            <span class="pc-badge pc-badge-peach">16px / 18px</span>
          </div>
          <div style="background: #FFFFFF; border-radius: 12px; padding: 10px 14px; border: 1px solid rgba(74,58,42,0.1); display: flex; align-items: center; justify-content: space-between;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span class="pc-badge pc-badge-buttercup" style="padding: 2px 6px;">${buildScaledSvg(iconId, 16)}</span>
              <span style="font-size: 13px; font-weight: 700; color: var(--pc-ink);">시스템 문서_20261010.pdf</span>
            </div>
            <div style="display: flex; gap: 6px;">
              <button type="button" class="pc-btn pc-btn-sm pc-btn-mint" style="padding: 4px 8px; font-size: 11px; display: inline-flex; align-items: center; gap: 4px;">
                ${buildScaledSvg(iconId, 16)} <span>보기</span>
              </button>
              <button type="button" class="pc-btn pc-btn-sm pc-btn-peach" style="padding: 4px 8px; font-size: 11px; display: inline-flex; align-items: center; gap: 4px;">
                ${buildScaledSvg('scissors', 16)} <span>편집</span>
              </button>
            </div>
          </div>
        </div>

        <!-- 6. Compact Toast Notification -->
        <div class="sim-context-box">
          <div class="sim-context-title">
            <span>06. 컴팩트 토스트 알림 팝업</span>
            <span class="pc-badge pc-badge-peach">18px / 20px</span>
          </div>
          <div style="background: #FFFFFF; border-radius: 14px; padding: 12px 16px; display: flex; align-items: center; gap: 12px; box-shadow: 0 4px 14px rgba(55,40,30,0.08); border-left: 4px solid var(--pc-peach, #F5BCA0);">
            <div style="flex-shrink: 0;">${buildScaledSvg(iconId, 20)}</div>
            <div>
              <div style="font-size: 13px; font-weight: 800; color: var(--pc-ink);">0.88px 극세선 정밀 동기화 완료</div>
              <div style="font-size: 11.5px; color: var(--pc-ink-muted);">fi fi-rr 라인 모드에서 그림자 없이 선명하게 작동 중입니다.</div>
            </div>
          </div>
        </div>
      `;
    } else {
      // ==========================================
      // 3D Paper Art Showcase Components (32px ~ 256px)
      // ==========================================
      container.innerHTML = `
        <!-- 1. Dashboard Stat Card -->
        <div class="sim-context-box">
          <div class="sim-context-title">
            <span>01. 대시보드 지표 카드 & KPI 타일</span>
            <span class="pc-badge pc-badge-mint">40px / 48px</span>
          </div>
          <div style="background: #FFFFFF; border-radius: 16px; padding: 18px; display: flex; align-items: center; gap: 16px; box-shadow: var(--pc-paper-shadow-sm, 0 4px 12px rgba(55,40,30,0.08));">
            <div style="width: 60px; height: 60px; border-radius: 16px; background: var(--pc-mint-light, #E8F5EE); display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: var(--pc-paper-shadow-xs);">
              ${buildScaledSvg(iconId, 48)}
            </div>
            <div>
              <div style="font-size: 12px; font-weight: 700; color: var(--pc-ink-muted);">일일 3D 페이퍼 아트 발행량</div>
              <div style="font-size: 24px; font-weight: 800; color: var(--pc-ink); margin-top: 2px;">2,840 건</div>
            </div>
          </div>
        </div>

        <!-- 2. Modal Dialog Header -->
        <div class="sim-context-box">
          <div class="sim-context-title">
            <span>02. 모달 다이얼로그 헤더 히어로</span>
            <span class="pc-badge pc-badge-mint">64px / 80px</span>
          </div>
          <div style="background: #FFFFFF; border-radius: 18px; padding: 22px; text-align: center; box-shadow: var(--pc-paper-shadow-md, 0 8px 24px rgba(55,40,30,0.1)); border: 1px solid rgba(74,58,42,0.08);">
            <div style="width: 88px; height: 88px; margin: 0 auto 12px; border-radius: 24px; background: var(--pc-peach-light, #FDEEE4); display: flex; align-items: center; justify-content: center; box-shadow: var(--pc-paper-shadow-sm);">
              ${buildScaledSvg(iconId, 64)}
            </div>
            <div style="font-size: 16px; font-weight: 800; color: var(--pc-ink);">3D 페이퍼 모달 완성</div>
            <div style="font-size: 12.5px; color: var(--pc-ink-muted); margin-top: 4px;">다층 색지의 깊이 있는 그림자로 인터페이스에 종이 공예의 생동감을 불어넣습니다.</div>
          </div>
        </div>

        <!-- 3. Feature Highlight Banner -->
        <div class="sim-context-box">
          <div class="sim-context-title">
            <span>03. 피처 하이라이트 배너 카드</span>
            <span class="pc-badge pc-badge-mint">64px / 96px</span>
          </div>
          <div style="background: linear-gradient(135deg, #FFFDF9 0%, #FAF7F0 100%); border-radius: 18px; padding: 20px; display: flex; align-items: center; gap: 18px; border: 1.5px solid rgba(74,58,42,0.12); box-shadow: var(--pc-paper-shadow-sm);">
            <div style="flex-shrink: 0; display: flex; align-items: center; justify-content: center;">
              ${buildScaledSvg(iconId, 80)}
            </div>
            <div>
              <span class="pc-badge pc-badge-buttercup" style="font-size: 10.5px; margin-bottom: 4px;">Paper Craft Highlight</span>
              <div style="font-size: 15px; font-weight: 800; color: var(--pc-ink);">입체 종이 공예 비주얼</div>
              <div style="font-size: 12px; color: var(--pc-ink-muted); margin-top: 3px;">80px 이상의 대형 규격에서 다층 색지의 레이어링과 드롭섀도우가 완벽한 조화를 이룹니다.</div>
            </div>
          </div>
        </div>

        <!-- 4. App Launcher Category Tiles -->
        <div class="sim-context-box">
          <div class="sim-context-title">
            <span>04. 앱 런처 타일 & 카테고리 그리드</span>
            <span class="pc-badge pc-badge-mint">48px / 64px</span>
          </div>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
            <div style="background: #FFFFFF; border-radius: 14px; padding: 12px 8px; text-align: center; border: 1px solid rgba(74,58,42,0.1);">
              <div style="width: 52px; height: 52px; margin: 0 auto 6px; display: flex; align-items: center; justify-content: center;">
                ${buildScaledSvg(iconId, 48)}
              </div>
              <span style="font-size: 11px; font-weight: 700; color: var(--pc-ink);">선택 아이콘</span>
            </div>
            <div style="background: #FFFFFF; border-radius: 14px; padding: 12px 8px; text-align: center; border: 1px solid rgba(74,58,42,0.1);">
              <div style="width: 52px; height: 52px; margin: 0 auto 6px; display: flex; align-items: center; justify-content: center;">
                ${buildScaledSvg('sparkles', 48)}
              </div>
              <span style="font-size: 11px; font-weight: 700; color: var(--pc-ink);">반짝임</span>
            </div>
            <div style="background: #FFFFFF; border-radius: 14px; padding: 12px 8px; text-align: center; border: 1px solid rgba(74,58,42,0.1);">
              <div style="width: 52px; height: 52px; margin: 0 auto 6px; display: flex; align-items: center; justify-content: center;">
                ${buildScaledSvg('gift', 48)}
              </div>
              <span style="font-size: 11px; font-weight: 700; color: var(--pc-ink);">선물함</span>
            </div>
          </div>
        </div>

        <!-- 5. Paper Diorama Centerpiece -->
        <div class="sim-context-box">
          <div class="sim-context-title">
            <span>05. 3D 페이퍼 디오라마 센터피스</span>
            <span class="pc-badge pc-badge-mint">128px / 192px</span>
          </div>
          <div style="background: radial-gradient(circle at center, #FFFFFF 0%, #FAF5EC 100%); border-radius: 20px; padding: 24px; text-align: center; border: 2px solid rgba(74,58,42,0.12); box-shadow: var(--pc-paper-shadow-md);">
            <div style="display: flex; align-items: center; justify-content: center; min-height: 140px;">
              ${buildScaledSvg(iconId, 128)}
            </div>
            <div style="font-size: 14px; font-weight: 800; color: var(--pc-ink); margin-top: 10px;">128px 대형 페이퍼 디오라마 일러스트</div>
            <div style="font-size: 12px; color: var(--pc-ink-muted);">수학적 벡터 패스가 빚어낸 핸드메이드 종이 예술의 품격을 웹에서 온전히 경험하세요.</div>
          </div>
        </div>

        <!-- 6. Fullscreen Welcome Onboarding Card -->
        <div class="sim-context-box">
          <div class="sim-context-title">
            <span>06. 풀스크린 온보딩 웰컴 카드</span>
            <span class="pc-badge pc-badge-mint">96px</span>
          </div>
          <div style="background: #FFFFFF; border-radius: 18px; padding: 20px; display: flex; align-items: center; gap: 16px; border: 1px solid rgba(74,58,42,0.1); box-shadow: var(--pc-paper-shadow-sm);">
            <div style="flex-shrink: 0; width: 104px; height: 104px; border-radius: 20px; background: var(--pc-lavender-light, #ECE8F6); display: flex; align-items: center; justify-content: center; box-shadow: var(--pc-paper-shadow-xs);">
              ${buildScaledSvg(iconId, 80)}
            </div>
            <div>
              <div style="font-size: 15px; font-weight: 800; color: var(--pc-ink);">PaperCut UI에 오신 것을 환영합니다</div>
              <div style="font-size: 12px; color: var(--pc-ink-muted); margin-top: 4px; line-height: 1.5;">독립형 SVG 파일 다운로드와 인터랙티브 코드 생성으로 현대적 프로덕트에 즉시 도입 가능합니다.</div>
            </div>
          </div>
        </div>
      `;
    }

    // Bind custom PaperCut paper dropdown interactions
    bindCustomDropdownEvents();
  }

  /**
   * Bind Pure PaperCut Custom Paper Dropdown Events
   */
  function bindCustomDropdownEvents() {
    const trigger = document.getElementById('sim-paper-dropdown-trigger');
    const menu = document.getElementById('sim-paper-dropdown-menu');
    const label = document.getElementById('sim-paper-dropdown-val');
    if (!trigger || !menu) return;

    trigger.onclick = (e) => {
      e.stopPropagation();
      const isOpen = trigger.classList.toggle('is-open');
      menu.classList.toggle('is-active', isOpen);
      trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    };

    menu.querySelectorAll('.pc-paper-dropdown-item').forEach(item => {
      item.onclick = (e) => {
        e.stopPropagation();
        const val = item.getAttribute('data-val');
        simState.selectedDropdownValue = val;
        if (label) label.textContent = val;

        menu.querySelectorAll('.pc-paper-dropdown-item').forEach(it => {
          const isSel = it === item;
          it.classList.toggle('is-selected', isSel);
          const chk = it.querySelector('.pc-dropdown-item-check');
          if (chk) chk.style.opacity = isSel ? '1' : '0';
        });

        trigger.classList.remove('is-open');
        menu.classList.remove('is-active');
        trigger.setAttribute('aria-expanded', 'false');
        notify(`커스텀 종이 드롭다운: [${val}] 선택 완료`, 'mint');
      };
    });
  }

  // Global listener for closing custom dropdown on outside click
  document.addEventListener('click', (e) => {
    const trigger = document.getElementById('sim-paper-dropdown-trigger');
    const menu = document.getElementById('sim-paper-dropdown-menu');
    if (trigger && menu && !trigger.contains(e.target) && !menu.contains(e.target)) {
      trigger.classList.remove('is-open');
      menu.classList.remove('is-active');
      trigger.setAttribute('aria-expanded', 'false');
    }
  });

  /**
   * Render Search Gallery of All 678 Icons with Live Background Themes & View Modes
   */
  function renderSearchGallery() {
    const grid = document.getElementById('sim-gallery-grid');
    const countBadge = document.getElementById('sim-gallery-count');
    if (!grid) return;

    if (!window.PAPERCUT_ICONS || !Array.isArray(window.PAPERCUT_ICONS)) {
      grid.innerHTML = '<div style="padding: 20px; color: var(--pc-ink-muted);">아이콘 라이브러리 로딩 중...</div>';
      return;
    }

    const totalIconsCount = window.PAPERCUT_ICONS.length;
    const query = simState.searchQuery.toLowerCase().trim();
    const cat = simState.activeCategory;

    const filtered = window.PAPERCUT_ICONS.filter(icon => {
      const matchCat = cat === 'all' || icon.category === cat;
      if (!matchCat) return false;
      if (!query) return true;

      const nameKo = (icon.nameKo || '').toLowerCase();
      const nameEn = (icon.nameEn || '').toLowerCase();
      const id = (icon.id || '').toLowerCase();
      const tags = (icon.tags || []).join(' ').toLowerCase();

      return nameKo.includes(query) || nameEn.includes(query) || id.includes(query) || tags.includes(query);
    });

    // Sync gallery theme attribute
    grid.setAttribute('data-gallery-theme', simState.galleryTheme || 'white');

    // Handle pagination limits
    const currentLimit = simState.galleryLimit || 120;
    const displayList = filtered.slice(0, currentLimit);

    // Update Live Count Badges
    if (countBadge) {
      if (filtered.length === totalIconsCount) {
        countBadge.textContent = `전체 ${totalIconsCount}종 라이브러리 (${displayList.length}종 표시 중)`;
      } else {
        countBadge.textContent = `검색 결과 ${filtered.length}종 (전체 ${totalIconsCount}종 중 ${displayList.length}종 표시)`;
      }
    }

    // Update Load Actions Buttons state
    const loadActions = document.getElementById('sim-gallery-load-actions');
    const loadMoreBtn = document.getElementById('btn-gallery-load-more');
    const loadAllBtn = document.getElementById('btn-gallery-load-all');
    if (loadActions) {
      if (displayList.length >= filtered.length) {
        if (loadMoreBtn) loadMoreBtn.style.display = 'none';
        if (loadAllBtn) {
          loadAllBtn.innerHTML = `<span class="pc-inline-icon is-sm" style="display:inline-flex;width:14px;height:14px;align-items:center;justify-content:center;">${buildScaledSvg('check', 14, { forceLineMode: true })}</span> <span>${filtered.length}종 전체 로드 완료</span>`;
          loadAllBtn.disabled = true;
          loadAllBtn.style.opacity = '0.6';
          loadAllBtn.style.pointerEvents = 'none';
        }
      } else {
        if (loadMoreBtn) {
          loadMoreBtn.style.display = 'inline-flex';
          const remaining = filtered.length - displayList.length;
          const nextBatch = Math.min(120, remaining);
          loadMoreBtn.innerHTML = `<span class="pc-inline-icon is-sm" style="display:inline-flex;width:14px;height:14px;align-items:center;justify-content:center;">${buildScaledSvg('add', 14, { forceLineMode: true })}</span> <span>더 많은 아이콘 보기 (+${nextBatch}종)</span>`;
        }
        if (loadAllBtn) {
          loadAllBtn.style.display = 'inline-flex';
          loadAllBtn.innerHTML = `<span class="pc-inline-icon is-sm" style="display:inline-flex;width:14px;height:14px;align-items:center;justify-content:center;">${buildScaledSvg('apps', 14, { forceLineMode: true })}</span> <span>전체 ${filtered.length}종 한 번에 모두 로드</span>`;
          loadAllBtn.disabled = false;
          loadAllBtn.style.opacity = '1';
          loadAllBtn.style.pointerEvents = 'auto';
        }
      }
    }

    // Style switch: 3D colored paper (36px) vs fi-rr ultra-crisp line (24px)
    const iconSize = simState.galleryStyle === 'firr' ? 24 : 36;

    if (displayList.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 48px 20px; text-align: center; color: var(--pc-ink-muted);">
          <div style="font-size: 32px; margin-bottom: 8px;">🔍</div>
          <div style="font-size: 15px; font-weight: 800; color: var(--pc-ink);">검색된 아이콘이 없습니다</div>
          <div style="font-size: 12.5px; margin-top: 4px;">다른 검색어나 카테고리를 선택해보세요.</div>
        </div>
      `;
      return;
    }

    grid.innerHTML = displayList.map(icon => `
      <div class="sim-icon-card-item ${icon.id === simState.selectedIconId ? 'is-selected' : ''}" data-icon="${icon.id}" title="${icon.nameKo} (${icon.id})">
        <div style="width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; pointer-events: none;">
          ${buildScaledSvg(icon.id, iconSize)}
        </div>
        <div style="font-size: 11.5px; font-weight: 800; color: var(--pc-ink); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 100%;">
          ${icon.nameKo}
        </div>
        <div style="font-size: 9.5px; color: var(--pc-ink-muted); font-family: monospace;">${icon.id}</div>
      </div>
    `).join('');

    grid.querySelectorAll('.sim-icon-card-item').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-icon');
        selectIcon(id);
      });
    });
  }

  /**
   * Select icon and sync entire page
   */
  function selectIcon(iconId) {
    simState.selectedIconId = iconId;

    const icon = getIcon(iconId);
    if (!icon) return;

    // Update active badges
    const nameKoEl = document.getElementById('sim-active-name-ko');
    const nameEnEl = document.getElementById('sim-active-name-en');
    const idBadge = document.getElementById('sim-active-id-badge');

    if (nameKoEl) nameKoEl.textContent = icon.nameKo;
    if (nameEnEl) nameEnEl.textContent = icon.nameEn;
    if (idBadge) idBadge.textContent = icon.id;

    // Update Quick Chips Active
    document.querySelectorAll('.sim-icon-chip').forEach(chip => {
      const chipId = chip.getAttribute('data-chip-icon') || chip.getAttribute('data-icon-id') || chip.getAttribute('data-icon');
      chip.classList.toggle('is-active', chipId === iconId);
    });

    // Update Workbench, Matrix, UI Contexts
    updateWorkbench();
    renderComparisonMatrix();
    renderUiContexts();
    renderSearchGallery();
    syncUrlHash();

    // Sync with embedded micro-matrix if present
    if (typeof window.initIconStrokeMatrixSim === 'function') {
      const microRoot = document.getElementById('icon-stroke-matrix-sim');
      if (microRoot) {
        const chip = microRoot.querySelector(`.pc-sim-chip-btn[data-icon="${iconId}"]`);
        if (chip) chip.click();
      }
    }
  }

  /**
   * Update Code Export
   */
  function updateCodeExport() {
    const pre = document.getElementById('sim-code-preview');
    if (!pre) return;

    const id = simState.selectedIconId;
    const sw = simState.firrStrokeWidth || 0.88;
    const sc = simState.firrStrokeColor || '#423D39';

    if (simState.exportTab === 'svg') {
      pre.textContent = `<!-- 1. fi fi-rr ${sw}px Crisp Vector Line SVG (${simState.firrSize}px, ${sc}) -->\n${buildScaledSvg(id, simState.firrSize, { standalone: true, strokeWidth: sw, strokeColor: sc })}\n\n<!-- 2. 3D Layered Paper Art SVG (${simState.paper3dSize}px) -->\n${buildScaledSvg(id, simState.paper3dSize, { standalone: true, forcePaper3d: true })}`;
    } else if (simState.exportTab === 'html') {
      pre.textContent = `<!-- 1. Micro Component Line Icon (${simState.firrSize}px, stroke: ${sw}px ${sc}) -->\n<span class="pc-inline-icon is-firr" data-icon="${id}" style="--pc-icon-size: ${simState.firrSize}px; --pc-icon-stroke-width: ${sw}px; --pc-icon-stroke-color: ${sc};"></span>\n\n<!-- 2. 3D Paper Art Showcase Icon (${simState.paper3dSize}px) -->\n<span class="pc-inline-icon" data-icon="${id}" style="--pc-icon-size: ${simState.paper3dSize}px;"></span>`;
    } else if (simState.exportTab === 'component') {
      pre.textContent = `<!-- fi fi-rr Line Button Component -->\n<button type="button" class="pc-btn pc-btn-peach">\n  <span class="pc-inline-icon is-firr" data-icon="${id}" style="--pc-icon-stroke-width: ${sw}px; --pc-icon-stroke-color: ${sc};"></span>\n  <span>라인 버튼 (${simState.firrSize}px)</span>\n</button>\n\n<!-- 3D Paper Art Action Component -->\n<button type="button" class="pc-btn pc-btn-mint">\n  <span class="pc-inline-icon" data-icon="${id}"></span>\n  <span>페이퍼 액션 (${simState.paper3dSize}px)</span>\n</button>`;
    } else if (simState.exportTab === 'css') {
      pre.textContent = `/* Dual Canvas CSS Specifications */\n/* Canvas 1: ${sw}px Crisp Line (<=28px) */\n.pc-icon-${id}-firr {\n  width: ${simState.firrSize}px;\n  height: ${simState.firrSize}px;\n  stroke: ${sc};\n  stroke-width: ${sw}px;\n  filter: none;\n}\n\n/* Canvas 2: 3D Layered Paper Art (16px ~ 256px) */\n.pc-icon-${id}-paper3d {\n  width: ${simState.paper3dSize}px;\n  height: ${simState.paper3dSize}px;\n  filter: drop-shadow(0 4px 10px rgba(55,40,30,0.18));\n}`;
    }
  }

  /**
   * Attach All Event Listeners for Dual Canvases
   */
  function initEvents() {
    // ---------------------------------------------------------
    // CANVAS 1: fi fi-rr Line Scaler (16px ~ 28px)
    // ---------------------------------------------------------
    const sliderFirr = document.getElementById('sim-slider-firr');
    const numFirr = document.getElementById('sim-num-firr');
    const stepMinusFirr = document.getElementById('btn-step-firr-minus');
    const stepPlusFirr = document.getElementById('btn-step-firr-plus');
    const btnDownloadFirr = document.getElementById('btn-download-firr');

    sliderFirr?.addEventListener('input', (e) => {
      simState.firrSize = parseInt(e.target.value, 10);
      updateCanvasFirr();
      highlightActiveMatrixCards();
      updateCodeExport();
    });

    numFirr?.addEventListener('change', (e) => {
      let val = parseInt(e.target.value, 10);
      if (isNaN(val)) val = 24;
      simState.firrSize = Math.max(16, Math.min(28, val));
      updateCanvasFirr();
      highlightActiveMatrixCards();
      updateCodeExport();
    });

    stepMinusFirr?.addEventListener('click', () => {
      simState.firrSize = Math.max(16, simState.firrSize - 1);
      updateCanvasFirr();
      highlightActiveMatrixCards();
      updateCodeExport();
    });

    stepPlusFirr?.addEventListener('click', () => {
      simState.firrSize = Math.min(28, simState.firrSize + 1);
      updateCanvasFirr();
      highlightActiveMatrixCards();
      updateCodeExport();
    });

    document.querySelectorAll('#sim-presets-firr .sim-preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const sz = parseInt(btn.getAttribute('data-size'), 10);
        if (sz) {
          simState.firrSize = sz;
          updateCanvasFirr();
          highlightActiveMatrixCards();
          updateCodeExport();
        }
      });
    });

    // --- Canvas 1 Stroke Width Controls ---
    const sliderWidthFirr = document.getElementById('sim-slider-width-firr');
    const numWidthFirr = document.getElementById('sim-width-firr');
    const stepWidthMinus = document.getElementById('btn-step-width-minus');
    const stepWidthPlus = document.getElementById('btn-step-width-plus');

    sliderWidthFirr?.addEventListener('input', (e) => {
      simState.firrStrokeWidth = parseFloat(e.target.value);
      updateCanvasFirr();
      updateCodeExport();
    });

    numWidthFirr?.addEventListener('change', (e) => {
      let val = parseFloat(e.target.value);
      if (isNaN(val)) val = 0.88;
      simState.firrStrokeWidth = Math.max(0.4, Math.min(2.4, Math.round(val * 100) / 100));
      updateCanvasFirr();
      updateCodeExport();
    });

    stepWidthMinus?.addEventListener('click', () => {
      simState.firrStrokeWidth = Math.max(0.4, Math.round((simState.firrStrokeWidth - 0.05) * 100) / 100);
      updateCanvasFirr();
      updateCodeExport();
    });

    stepWidthPlus?.addEventListener('click', () => {
      simState.firrStrokeWidth = Math.min(2.4, Math.round((simState.firrStrokeWidth + 0.05) * 100) / 100);
      updateCanvasFirr();
      updateCodeExport();
    });

    document.querySelectorAll('#sim-presets-stroke-width .sim-preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const sw = parseFloat(btn.getAttribute('data-swidth'));
        if (sw) {
          simState.firrStrokeWidth = sw;
          updateCanvasFirr();
          updateCodeExport();
          notify(`선의 굵기가 [${sw}px]로 설정되었습니다.`, 'peach');
        }
      });
    });

    // --- Canvas 1 Stroke Color Controls ---
    document.querySelectorAll('.sim-firr-color-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const col = chip.getAttribute('data-color');
        if (col) {
          simState.firrStrokeColor = col;
          updateCanvasFirr();
          updateCodeExport();
          notify(`선의 색상이 [${col}]로 변경되었습니다.`, 'mint');
        }
      });
    });

    const colorPickerFirr = document.getElementById('sim-color-firr-picker');
    colorPickerFirr?.addEventListener('input', (e) => {
      simState.firrStrokeColor = e.target.value;
      updateCanvasFirr();
      updateCodeExport();
    });

    // --- Canvas 1 Background Selection Controls ---
    document.querySelectorAll('.sim-firr-bg-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const bg = btn.getAttribute('data-bg');
        if (bg) {
          simState.firrBg = bg;
          updateCanvasFirr();
          notify(`캔버스 1 배경: [${btn.textContent.trim()}] 적용됨`, 'mint');
        }
      });
    });

    document.querySelectorAll('#sim-loupe-zooms-firr .sim-zoom-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        simState.firrZoom = parseFloat(btn.getAttribute('data-zoom'));
        updateCanvasFirr();
      });
    });

    btnDownloadFirr?.addEventListener('click', () => {
      downloadSvgFile(simState.selectedIconId, simState.firrSize);
    });

    // ---------------------------------------------------------
    // CANVAS 2: 3D Paper Art Scaler (16px ~ 256px)
    // ---------------------------------------------------------
    const sliderPaper3d = document.getElementById('sim-slider-paper3d');
    const numPaper3d = document.getElementById('sim-num-paper3d');
    const stepM4 = document.getElementById('btn-step-paper3d-m4');
    const stepP4 = document.getElementById('btn-step-paper3d-p4');
    const stepM16 = document.getElementById('btn-step-paper3d-m16');
    const stepP16 = document.getElementById('btn-step-paper3d-p16');
    const btnDownloadPaper3d = document.getElementById('btn-download-paper3d');

    sliderPaper3d?.addEventListener('input', (e) => {
      simState.paper3dSize = parseInt(e.target.value, 10);
      updateCanvasPaper3d();
      highlightActiveMatrixCards();
      updateCodeExport();
    });

    numPaper3d?.addEventListener('change', (e) => {
      let val = parseInt(e.target.value, 10);
      if (isNaN(val)) val = 64;
      simState.paper3dSize = Math.max(16, Math.min(256, val));
      updateCanvasPaper3d();
      highlightActiveMatrixCards();
      updateCodeExport();
    });

    stepM4?.addEventListener('click', () => {
      simState.paper3dSize = Math.max(16, simState.paper3dSize - 4);
      updateCanvasPaper3d();
      highlightActiveMatrixCards();
      updateCodeExport();
    });

    stepP4?.addEventListener('click', () => {
      simState.paper3dSize = Math.min(256, simState.paper3dSize + 4);
      updateCanvasPaper3d();
      highlightActiveMatrixCards();
      updateCodeExport();
    });

    stepM16?.addEventListener('click', () => {
      simState.paper3dSize = Math.max(16, simState.paper3dSize - 16);
      updateCanvasPaper3d();
      highlightActiveMatrixCards();
      updateCodeExport();
    });

    stepP16?.addEventListener('click', () => {
      simState.paper3dSize = Math.min(256, simState.paper3dSize + 16);
      updateCanvasPaper3d();
      highlightActiveMatrixCards();
      updateCodeExport();
    });

    document.querySelectorAll('#sim-presets-paper3d .sim-preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const sz = parseInt(btn.getAttribute('data-size'), 10);
        if (sz) {
          simState.paper3dSize = sz;
          updateCanvasPaper3d();
          highlightActiveMatrixCards();
          updateCodeExport();
        }
      });
    });

    document.querySelectorAll('#sim-loupe-zooms-paper3d .sim-zoom-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        simState.paper3dZoom = parseFloat(btn.getAttribute('data-zoom'));
        updateCanvasPaper3d();
      });
    });

    btnDownloadPaper3d?.addEventListener('click', () => {
      downloadSvgFile(simState.selectedIconId, simState.paper3dSize, { forcePaper3d: true });
    });

    // ---------------------------------------------------------
    // GLOBAL STAGE: Background & Overlay Toggles
    // ---------------------------------------------------------
    document.querySelectorAll('.sim-bg-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.sim-bg-chip').forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        simState.background = btn.getAttribute('data-bg');
        updateBothCanvases();
      });
    });

    document.getElementById('toggle-bbox')?.addEventListener('change', (e) => {
      simState.showBbox = e.target.checked;
      updateBothCanvases();
    });

    document.getElementById('toggle-grid')?.addEventListener('change', (e) => {
      simState.showGrid = e.target.checked;
      updateBothCanvases();
    });

    // Quick Icon Chips
    document.querySelectorAll('.sim-icon-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const iconId = chip.getAttribute('data-chip-icon') || chip.getAttribute('data-icon-id') || chip.getAttribute('data-icon');
        selectIcon(iconId);
      });
    });

    // General trigger download svg buttons
    document.querySelectorAll('.btn-trigger-download-svg').forEach(btn => {
      btn.addEventListener('click', () => {
        downloadSvgFile(simState.selectedIconId, simState.paper3dSize);
      });
    });

    // Gallery Category Filter
    document.querySelectorAll('.sim-cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.sim-cat-btn').forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        simState.activeCategory = btn.getAttribute('data-cat');
        simState.galleryLimit = 120; // reset to initial limit for newly selected category
        renderSearchGallery();
      });
    });

    // Gallery Search Input
    const searchInput = document.getElementById('sim-gallery-search');
    searchInput?.addEventListener('input', (e) => {
      simState.searchQuery = e.target.value;
      simState.galleryLimit = 120; // reset to initial limit on search
      renderSearchGallery();
    });

    // Gallery Card Background Theme Switcher
    document.querySelectorAll('.sim-gallery-bg-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.sim-gallery-bg-chip').forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        simState.galleryTheme = btn.getAttribute('data-gtheme') || 'white';
        const grid = document.getElementById('sim-gallery-grid');
        if (grid) {
          grid.setAttribute('data-gallery-theme', simState.galleryTheme);
        }
        notify(`아이콘 카드 배경: [${btn.textContent.trim()}] 테마 적용됨`, 'mint');
      });
    });

    // Gallery Render Style Toggle (3D Paper vs 0.88px Line)
    document.querySelectorAll('.sim-gallery-style-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.sim-gallery-style-btn').forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        simState.galleryStyle = btn.getAttribute('data-style') || 'paper3d';
        renderSearchGallery();
        const styleName = simState.galleryStyle === 'firr' ? '0.88px 라인 뷰' : '3D 페이퍼 뷰';
        notify(`갤러리 렌더 스타일: [${styleName}]로 전환되었습니다.`, 'peach');
      });
    });

    // Gallery Load More (+120 icons)
    document.getElementById('btn-gallery-load-more')?.addEventListener('click', () => {
      simState.galleryLimit = (simState.galleryLimit || 120) + 120;
      renderSearchGallery();
      notify(`아이콘을 추가로 로드했습니다.`, 'mint');
    });

    // Gallery Load All (All 678 icons at once)
    document.getElementById('btn-gallery-load-all')?.addEventListener('click', () => {
      simState.galleryLimit = 99999;
      renderSearchGallery();
      notify(`전체 678종 아이콘을 한 번에 모두 로드했습니다!`, 'peach');
    });

    // Gallery Expand Height Toggle
    document.getElementById('btn-toggle-gallery-expand')?.addEventListener('click', () => {
      const grid = document.getElementById('sim-gallery-grid');
      const label = document.getElementById('label-gallery-expand');
      if (!grid) return;

      simState.galleryExpanded = !simState.galleryExpanded;
      grid.classList.toggle('is-expanded', simState.galleryExpanded);

      if (label) {
        label.textContent = simState.galleryExpanded ? '접기 (기본 스크롤 뷰)' : '전체 678종 한 번에 펼치기';
      }

      if (simState.galleryExpanded && simState.galleryLimit < 99999) {
        simState.galleryLimit = 99999;
        renderSearchGallery();
      }

      notify(simState.galleryExpanded ? '갤러리 영역 전체가 시원하게 펼쳐졌습니다.' : '갤러리 스크롤 뷰로 복귀했습니다.', 'mint');
    });

    // Gallery Infinite Scroll (Auto load on scroll near bottom)
    const galleryGrid = document.getElementById('sim-gallery-grid');
    if (galleryGrid) {
      galleryGrid.addEventListener('scroll', () => {
        const total = window.PAPERCUT_ICONS ? window.PAPERCUT_ICONS.length : 678;
        if ((simState.galleryLimit || 120) >= total) return;
        if (galleryGrid.scrollTop + galleryGrid.clientHeight >= galleryGrid.scrollHeight - 90) {
          simState.galleryLimit = (simState.galleryLimit || 120) + 60;
          renderSearchGallery();
        }
      });
    }

    // Code Export Tabs
    document.querySelectorAll('.sim-code-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.sim-code-tab-btn').forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        simState.exportTab = btn.getAttribute('data-tab');
        updateCodeExport();
      });
    });

    // Copy Code Button
    document.getElementById('btn-copy-code')?.addEventListener('click', () => {
      const pre = document.getElementById('sim-code-preview');
      if (pre && navigator.clipboard) {
        navigator.clipboard.writeText(pre.textContent).then(() => {
          notify(`[${simState.selectedIconId}] ${simState.exportTab.toUpperCase()} 코드가 클립보드에 복사되었습니다!`, 'mint');
        });
      }
    });

    // Hash navigation listener
    window.addEventListener('hashchange', parseHashAndApply);
  }

  /**
   * Parse URL Hash (#icon=coffee)
   */
  function parseHashAndApply() {
    if (isInternalHashChange) return;
    const hash = window.location.hash || '';

    const iconMatch = hash.match(/icon=([a-zA-Z0-9_-]+)/);
    if (iconMatch && iconMatch[1]) {
      selectIcon(iconMatch[1]);
    }
  }

  /**
   * Main Initialization
   */
  function init() {
    const hash = window.location.hash || '';
    const iconMatch = hash.match(/icon=([a-zA-Z0-9_-]+)/);
    if (iconMatch && iconMatch[1]) {
      simState.selectedIconId = iconMatch[1];
    }

    initEvents();
    selectIcon(simState.selectedIconId);
  }

  // Run on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(init, 60);
    });
  } else {
    setTimeout(init, 60);
  }

  // Expose API
  window.PaperCutIconSimulator = {
    selectIcon,
    switchStudioMode,
    updateBothCanvases,
    updateCanvasFirr,
    updateCanvasPaper3d,
    updateWorkbench,
    buildScaledSvg,
    simState
  };

})();
