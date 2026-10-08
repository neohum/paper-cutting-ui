/**
 * PaperCut UI - Icon Size & Stroke Simulation Matrix Controller
 * 
 * Provides an interactive micro-scale matrix specifically for icon dimensions
 * from 3px to 16px (3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16px),
 * with 5-stage side-by-side outline comparison (0px, 0.2px, 0.4px, 0.7px, 1.2px, + live slot),
 * real-time color picking & 10 curated ink swatches, 3 outline modes (sticker, layer, double),
 * scale behavior toggle (fixed pixel vs proportional), loupe zoom inspector (1x, 2x, 4x, 8x),
 * background switcher, dynamic size slider, and instant standalone code export.
 */

(function () {
  'use strict';

  // 14 Standard Micro Pixel Sizes strictly from 3px to 16px (all sizes above 16px removed)
  const SIM_SIZES = [
    { size: 3, label: '3px', nameKo: '3px 나노 도트 픽셀', nameEn: '3px Nano Dot Pixel', rec: '0.1 ~ 0.3px', optMin: 0.1, optMax: 0.3, maxChoke: 0.6 },
    { size: 4, label: '4px', nameKo: '4px 서브픽셀 인디케이터', nameEn: '4px Subpixel Indicator', rec: '0.1 ~ 0.4px', optMin: 0.1, optMax: 0.4, maxChoke: 0.8 },
    { size: 5, label: '5px', nameKo: '5px 미니 뱃지 핀', nameEn: '5px Mini Badge Pin', rec: '0.2 ~ 0.4px', optMin: 0.2, optMax: 0.4, maxChoke: 0.9 },
    { size: 6, label: '6px', nameKo: '6px 초소형 상태 도트', nameEn: '6px Micro Status Dot', rec: '0.2 ~ 0.5px', optMin: 0.2, optMax: 0.5, maxChoke: 1.0 },
    { size: 7, label: '7px', nameKo: '7px 인라인 마이크로 태그', nameEn: '7px Inline Micro Tag', rec: '0.2 ~ 0.5px', optMin: 0.2, optMax: 0.5, maxChoke: 1.1 },
    { size: 8, label: '8px', nameKo: '8px 초소형 툴팁 글리프', nameEn: '8px Micro Glyph', rec: '0.3 ~ 0.6px', optMin: 0.3, optMax: 0.6, maxChoke: 1.3 },
    { size: 9, label: '9px', nameKo: '9px 조밀한 데이터 셀', nameEn: '9px Dense Data Cell', rec: '0.3 ~ 0.7px', optMin: 0.3, optMax: 0.7, maxChoke: 1.5 },
    { size: 10, label: '10px', nameKo: '10px 서브텍스트 아이콘', nameEn: '10px Subtext Icon', rec: '0.4 ~ 0.8px', optMin: 0.4, optMax: 0.8, maxChoke: 1.7 },
    { size: 11, label: '11px', nameKo: '11px 캡션 인디케이터', nameEn: '11px Caption Indicator', rec: '0.4 ~ 0.8px', optMin: 0.4, optMax: 0.8, maxChoke: 1.8 },
    { size: 12, label: '12px', nameKo: '12px 컴팩트 인라인 심볼', nameEn: '12px Compact Inline', rec: '0.5 ~ 0.9px', optMin: 0.5, optMax: 0.9, maxChoke: 2.0 },
    { size: 13, label: '13px', nameKo: '13px 버튼 접두사 태그', nameEn: '13px Button Prefix', rec: '0.5 ~ 1.0px', optMin: 0.5, optMax: 1.0, maxChoke: 2.2 },
    { size: 14, label: '14px', nameKo: '14px 표준 본문 인라인', nameEn: '14px Body Text Inline', rec: '0.5 ~ 1.1px', optMin: 0.5, optMax: 1.1, maxChoke: 2.4 },
    { size: 15, label: '15px', nameKo: '15px 폼 라벨 인디케이터', nameEn: '15px Form Label Icon', rec: '0.6 ~ 1.2px', optMin: 0.6, optMax: 1.2, maxChoke: 2.5 },
    { size: 16, label: '16px', nameKo: '16px 파비콘 / 툴바 기본', nameEn: '16px Favicon & Micro Standard', rec: '0.6 ~ 1.4px', optMin: 0.6, optMax: 1.4, maxChoke: 2.8 }
  ];

  // 5 Micro-Tuned Comparison Preset Thicknesses
  const COMPARISON_PRESETS = [
    { key: 'baseline', label: '기준선 (0px)', width: 0, desc: '순수 키리가미' },
    { key: 'hairline', label: '초미세 (0.2px)', width: 0.2, desc: '나노 라인' },
    { key: 'subtle', label: '슬림 (0.4px)', width: 0.4, desc: '섬세한 윤곽' },
    { key: 'standard', label: '스탠다드 (0.7px)', width: 0.7, desc: '표준 윤곽' },
    { key: 'bold', label: '강조 (1.2px)', width: 1.2, desc: '고대비 보더' }
  ];

  // 12 Curated Quick Sample Chips
  const QUICK_SAMPLE_ICONS = [
    { id: 'coffee', label: '커피', icon: 'coffee' },
    { id: 'home', label: '홈', icon: 'home' },
    { id: 'camera', label: '카메라', icon: 'camera' },
    { id: 'gift', label: '선물', icon: 'gift' },
    { id: 'heart', label: '하트', icon: 'heart' },
    { id: 'sun', label: '태양', icon: 'sun' },
    { id: 'sparkles', label: '반짝임', icon: 'sparkles' },
    { id: 'mail', label: '메일', icon: 'mail' },
    { id: 'scissors', label: '가위', icon: 'scissors' },
    { id: 'cart', label: '카트', icon: 'cart' },
    { id: 'shield', label: '방패', icon: 'shield' },
    { id: 'bell', label: '종', icon: 'bell' }
  ];

  // 10 Curated Papercraft Ink Swatches
  const INK_SWATCHES = [
    { color: '#2B2623', name: '다크 차콜 (Dark Charcoal)' },
    { color: '#4E3629', name: '웜 초콜릿 (Chocolate)' },
    { color: '#4A6B5D', name: '포레스트 세이지 (Sage)' },
    { color: '#1E2B37', name: '미드나잇 네이비 (Midnight Navy)' },
    { color: '#FFFFFF', name: '순백 스티커 (White)' },
    { color: '#D9534F', name: '코랄 레드 (Coral Red)' },
    { color: '#6B5B82', name: '라벤더 더스크 (Lavender Dusk)' },
    { color: '#B58900', name: '앤틱 골드 (Antique Gold)' },
    { color: '#2D5A43', name: '포레스트 파인 (Forest Pine)' },
    { color: '#B86574', name: '더스티 로즈 (Dusty Rose)' }
  ];

  // Component State
  const state = {
    selectedIconId: 'coffee',
    strokeWidth: 0.5,
    strokeColor: '#2B2623',
    mode: 'sticker', // 'sticker' | 'layer' | 'double'
    scaleMode: 'fixed', // 'fixed' | 'proportional'
    background: 'cream', // 'cream' | 'white' | 'dark' | 'mint' | 'peach' | 'blueprint'
    perSizeOverrides: {}, // { [size]: number }
    exportTab: 'svg', // 'svg' | 'css'
    exportSize: 16,
    activeFilterSize: 'all', // 'all' | 3..16
    zoomMultiplier: 1, // 1, 2, 4, 8
    openDrawers: {} // { [size]: boolean }
  };

  /**
   * Helper to retrieve icon object from library
   */
  function getIcon(iconId) {
    if (!window.PAPERCUT_ICONS || !Array.isArray(window.PAPERCUT_ICONS)) return null;
    return window.PAPERCUT_ICONS.find(item => item.id === iconId) || window.PAPERCUT_ICONS[0];
  }

  /**
   * Toast notification helper
   */
  function notify(msg, type = 'mint') {
    if (typeof window.showPaperToast === 'function') {
      window.showPaperToast(msg, type);
    } else {
      console.log(`[Toast ${type}]: ${msg}`);
    }
  }

  /**
   * Build standalone processed SVG string with outlines, filters, and STRICT pixel sizing applied
   */
  function buildSimSvg(svgRaw, size, strokeWidth, strokeColor, mode, scaleMode, filterId) {
    if (!svgRaw) return '';
    let cleanSvg = svgRaw;

    const vbMatch = cleanSvg.match(/viewBox="([^"]+)"/);
    const vb = vbMatch ? vbMatch[1] : '0 0 64 64';

    // Normalize <svg> root element dimensions with strict inline styles to override any external CSS
    cleanSvg = cleanSvg.replace(/<svg\b([^>]*)>/, (m, attrs) => {
      let a = attrs.replace(/\b(width|height|viewBox|style)="[^"]*"/g, '').trim();
      return `<svg ${a} width="${size}" height="${size}" viewBox="${vb}" style="width:${size}px !important; height:${size}px !important; min-width:${size}px !important; min-height:${size}px !important; max-width:${size}px !important; max-height:${size}px !important; display:block !important; overflow:visible !important;">`;
    });

    // If 0px stroke, return original pristine kirigami SVG
    if (!strokeWidth || strokeWidth <= 0) {
      return cleanSvg;
    }

    // Filter morphology radius calculation
    // SVG viewBox is 64x64. For size in 3..16px:
    let radius = strokeWidth;
    if (scaleMode === 'fixed') {
      radius = strokeWidth * (64 / size);
    }

    // 1. Sticker Die-Cut Mode & Double Outline Outer Contour
    if (mode === 'sticker' || mode === 'double') {
      const filterDef = `<filter id="${filterId}" x="-50%" y="-50%" width="200%" height="200%">` +
        `<feMorphology in="SourceAlpha" operator="dilate" radius="${radius.toFixed(2)}" result="EXP"/>` +
        `<feFlood flood-color="${strokeColor}" result="COL"/>` +
        `<feComposite in="COL" in2="EXP" operator="in" result="OUT"/>` +
        `<feDropShadow in="OUT" dx="0" dy="1.5" stdDeviation="0.8" flood-color="#4A3A2A" flood-opacity="0.22" result="SHD"/>` +
        `<feMerge><feMergeNode in="SHD"/><feMergeNode in="OUT"/><feMergeNode in="SourceGraphic"/></feMerge>` +
        `</filter>`;

      if (cleanSvg.includes('<defs>')) {
        cleanSvg = cleanSvg.replace('<defs>', `<defs>${filterDef}`);
      } else {
        cleanSvg = cleanSvg.replace(/<svg\b[^>]*>/, `$&<defs>${filterDef}</defs>`);
      }

      // Group graphics inside filter group
      cleanSvg = cleanSvg.replace(/<svg\b([^>]*)>([\s\S]*?)<\/svg>/, function(match, attrs, inner) {
        let defsMatch = inner.match(/<defs>[\s\S]*?<\/defs>/);
        let defs = defsMatch ? defsMatch[0] : '';
        let rest = inner.replace(/<defs>[\s\S]*?<\/defs>/, '');
        return `<svg ${attrs}>${defs}<g filter="url(#${filterId})">${rest}</g></svg>`;
      });
    }

    // 2. Kirigami Layer Cutline Mode & Double Outline Inner Cutlines (All Paper Shapes)
    if (mode === 'layer' || mode === 'double') {
      const layerWidth = mode === 'double' ? Math.max(0.2, strokeWidth * 0.5) : strokeWidth;
      const effStrokeWidth = scaleMode === 'fixed' ? (layerWidth * (64 / size)).toFixed(2) : layerWidth.toFixed(2);
      const nonScaling = scaleMode === 'fixed' ? ' vector-effect="non-scaling-stroke"' : '';

      // Filled paper pieces
      cleanSvg = cleanSvg.replace(/<(path|rect|circle|ellipse|polygon)\b([^>]*?)(\/?>)/gi, function(m, tag, attrs, close) {
        if (attrs.includes('fill="none"')) return m;
        let newAttrs = attrs
          .replace(/\bstroke="[^"]*"/g, '')
          .replace(/\bstroke-width="[^"]*"/g, '')
          .replace(/\bvector-effect="[^"]*"/g, '');
        return `<${tag}${newAttrs} stroke="${strokeColor}" stroke-width="${effStrokeWidth}" stroke-linejoin="round" stroke-linecap="round" style="paint-order: stroke fill;"${nonScaling}${close}`;
      });

      // Linear and stroked paper pieces (handles, steam, lines)
      cleanSvg = cleanSvg.replace(/<(path|circle|rect|ellipse|polygon|line)\b([^>]*?)(\/?>)/gi, function(m, tag, attrs, close) {
        if (tag !== 'line' && !attrs.includes('fill="none"')) return m;
        const swHalf = (parseFloat(effStrokeWidth) * 0.5).toFixed(2);
        const filterStyle = `filter: drop-shadow(${swHalf}px 0 0 ${strokeColor}) drop-shadow(-${swHalf}px 0 0 ${strokeColor}) drop-shadow(0 ${swHalf}px 0 ${strokeColor}) drop-shadow(0 -${swHalf}px 0 ${strokeColor});`;
        if (attrs.includes('style="')) {
          return `<${tag}${attrs.replace(/style="([^"]*)"/, `style="$1; ${filterStyle}"`)}${nonScaling}${close}`;
        }
        return `<${tag}${attrs} style="${filterStyle}"${nonScaling}${close}`;
      });
    }

    return cleanSvg;
  }

  /**
   * Clarity Rating and Metrics Calculator for 3px - 16px micro scales
   */
  function calculateClarity(sizeDef, effWidth) {
    if (!effWidth || effWidth <= 0) {
      return {
        score: 100,
        level: 'is-optimal',
        statusText: '원작 순수 키리가미',
        ratio: 0
      };
    }

    const ratio = ((effWidth / sizeDef.size) * 100).toFixed(1);
    const { optMin, optMax, maxChoke } = sizeDef;

    if (effWidth >= optMin && effWidth <= optMax) {
      return {
        score: 98,
        level: 'is-optimal',
        statusText: '최적 선명도 (Ultra Crisp)',
        ratio
      };
    } else if (effWidth < optMin) {
      const score = Math.round(85 + (effWidth / optMin) * 12);
      return {
        score,
        level: 'is-good',
        statusText: '초미세 헤어라인 (Subtle)',
        ratio
      };
    } else if (effWidth <= maxChoke) {
      const score = Math.round(92 - ((effWidth - optMax) / (maxChoke - optMax)) * 22);
      return {
        score,
        level: 'is-warning',
        statusText: '두께 강조 (Bold Accent)',
        ratio
      };
    } else {
      const score = Math.max(30, Math.round(65 - (effWidth - maxChoke) * 15));
      return {
        score,
        level: 'is-choked',
        statusText: '선 뭉개짐 주의 (Choked)',
        ratio
      };
    }
  }

  /**
   * Generate Full Modular HTML Markup
   */
  function generateMarkup() {
    const icon = getIcon(state.selectedIconId);

    return `
      <!-- Decorative Washi Tape -->
      <div class="pc-washi-tape pc-washi-tape-mint" style="top: -14px; left: 36px;"></div>

      <!-- Section Header -->
      <div class="pc-sim-header">
        <div class="pc-sim-badges">
          <span class="pc-badge pc-badge-peach">3px ~ 16px Micro Scale Matrix</span>
          <span class="pc-badge pc-badge-mint">14 Exact Pixel Sizes (3px~16px)</span>
          <span class="pc-badge pc-badge-lavender">Strict Physical Dimensions</span>
          <span class="pc-badge pc-badge-sky">Loupe Zoom Inspector</span>
        </div>
        <h2 class="pc-sim-title">
          <span class="pc-inline-icon is-md" data-icon="scissors"></span> 아이콘 크기별 외곽선(Stroke) 시뮬레이션 매트릭스 (3px ~ 16px)
        </h2>
        <p class="pc-sim-subtitle">
          아이콘의 가로·세로 크기를 <strong>3픽셀부터 16픽셀까지 14단계(3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16px)로 실제 축소</strong>하여 선폭(0.1px~2.5px), 색상, 윤곽 모드를 실시간 비교·검증할 수 있습니다. 1x 실제 픽셀 뷰와 돋보기 루페 확대를 통해 극소형 UI에서도 선명한 디테일을 즉시 확인할 수 있습니다.
        </p>
      </div>

      <!-- Master Control Console Panel -->
      <div class="pc-sim-console">
        <div class="pc-sim-console-grid">

          <!-- 1. Icon Selection & Search -->
          <div class="pc-sim-control-card">
            <div class="pc-sim-control-header">
              <div class="pc-sim-control-title">
                <span class="pc-inline-icon is-xs" data-icon="search"></span>
                <span>테스트 아이콘 선택 (529종)</span>
              </div>
              <span class="pc-badge pc-badge-mint" id="sim-active-icon-badge" style="font-size: 11px;">${state.selectedIconId}</span>
            </div>

            <!-- Search Input with Dropdown -->
            <div style="position: relative;">
              <input type="text" id="sim-icon-search-input" class="pc-input" placeholder="아이콘 검색 (예: 커피, 홈, 카메라, 선물, cart...)" style="width: 100%; height: 38px; font-size: 13px; border-radius: 10px;">
              <div id="sim-icon-dropdown" class="pc-sim-search-dropdown"></div>
            </div>

            <!-- 12 Quick Sample Chips -->
            <div class="pc-sim-quick-chips">
              ${QUICK_SAMPLE_ICONS.map(item => `
                <button type="button" class="pc-sim-chip-btn ${item.id === state.selectedIconId ? 'is-active' : ''}" data-icon="${item.id}">
                  <span class="pc-inline-icon is-xs" data-icon="${item.icon}"></span>
                  <span>${item.label}</span>
                </button>
              `).join('')}
            </div>
          </div>

          <!-- 2. Outline Color & 10 Curated Ink Swatches -->
          <div class="pc-sim-control-card">
            <div class="pc-sim-control-header">
              <div class="pc-sim-control-title">
                <span class="pc-inline-icon is-xs" data-icon="palette"></span>
                <span>외곽선 색상 (Color)</span>
              </div>
              <span id="sim-color-val" style="font-family: monospace; font-size: 12.5px; font-weight: 800; color: var(--pc-ink);">${state.strokeColor}</span>
            </div>

            <div class="pc-sim-swatch-grid">
              <!-- Color Picker Input -->
              <div class="pc-sim-color-picker-wrap" title="직접 색상 지정">
                <input type="color" id="sim-color-picker" class="pc-sim-color-input" value="${state.strokeColor}">
              </div>

              <!-- 10 Curated Ink Swatches -->
              <div class="pc-sim-swatch-list">
                ${INK_SWATCHES.map(s => `
                  <button type="button" class="pc-sim-swatch ${s.color === state.strokeColor ? 'is-active' : ''}" data-color="${s.color}" style="background-color: ${s.color};" title="${s.name}"></button>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- 3. Outline Mode Segmented Control -->
          <div class="pc-sim-control-card">
            <div class="pc-sim-control-header">
              <div class="pc-sim-control-title">
                <span class="pc-inline-icon is-xs" data-icon="scissors"></span>
                <span>외곽선 모드 (Mode)</span>
              </div>
              <span class="pc-badge pc-badge-peach" id="sim-mode-badge" style="font-size: 11px;">다이컷 스티커</span>
            </div>

            <div class="pc-sim-segmented">
              <button type="button" class="pc-sim-seg-btn sim-mode-btn ${state.mode === 'sticker' ? 'is-active' : ''}" data-mode="sticker">스티커 다이컷</button>
              <button type="button" class="pc-sim-seg-btn sim-mode-btn ${state.mode === 'layer' ? 'is-active' : ''}" data-mode="layer">레이어 칼선</button>
              <button type="button" class="pc-sim-seg-btn sim-mode-btn ${state.mode === 'double' ? 'is-active' : ''}" data-mode="double">더블 외곽선</button>
            </div>

            <div id="sim-mode-caption" style="font-size: 11.5px; color: var(--pc-ink-muted); line-height: 1.45;">
              아이콘 전체 실루엣에 부드러운 다이컷 종이 스티커 경계선과 그림자를 두릅니다.
            </div>
          </div>

          <!-- 4. Global Stroke Thickness Slider (Micro calibrated: 0.1px ~ 2.5px) -->
          <div class="pc-sim-control-card">
            <div class="pc-sim-control-header">
              <div class="pc-sim-control-title">
                <span class="pc-inline-icon is-xs" data-icon="edit"></span>
                <span>미세 외곽선 두께 (Thickness)</span>
              </div>
              <span id="sim-thickness-val" style="font-size: 13.5px; font-weight: 800; color: #2B2623;">${state.strokeWidth.toFixed(1)}px</span>
            </div>

            <div class="pc-sim-range-wrap">
              <input type="range" id="sim-global-stroke-slider" class="pc-sim-range-input" min="0.1" max="2.5" step="0.1" value="${state.strokeWidth}">
              <div class="pc-sim-thick-presets">
                ${[0.1, 0.2, 0.3, 0.4, 0.5, 0.7, 1.0, 1.2, 1.5].map(w => `
                  <button type="button" class="pc-sim-preset-btn ${w === state.strokeWidth ? 'is-active' : ''}" data-val="${w}">${w}px</button>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- 5. Dynamic Master Size Slider (3px ~ 16px) & Loupe Zoom -->
          <div class="pc-sim-control-card" style="border: 1.5px solid var(--pc-mint);">
            <div class="pc-sim-control-header">
              <div class="pc-sim-control-title">
                <span class="pc-inline-icon is-xs" data-icon="settings"></span>
                <span>아이콘 가로·세로 크기 (3px ~ 16px)</span>
              </div>
              <span id="sim-master-size-display" class="pc-badge pc-badge-mint" style="font-size: 12px; font-weight: 800;">
                ${state.activeFilterSize === 'all' ? '전체 (3~16px)' : `${state.activeFilterSize}px × ${state.activeFilterSize}px`}
              </span>
            </div>

            <div class="pc-sim-range-wrap">
              <div style="display: flex; justify-content: space-between; font-size: 11px; font-weight: 700; color: var(--pc-ink-muted); margin-bottom: 4px;">
                <span>3px</span>
                <span>8px</span>
                <span>12px</span>
                <span>16px</span>
              </div>
              <input type="range" id="sim-master-size-slider" class="pc-sim-range-input" min="3" max="16" step="1" value="${state.activeFilterSize === 'all' ? 16 : state.activeFilterSize}">
              
              <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 8px; flex-wrap: wrap; gap: 6px;">
                <span style="font-size: 11.5px; font-weight: 700; color: var(--pc-ink);">돋보기 루페 (Zoom):</span>
                <div class="pc-sim-loupe-wrap">
                  <button type="button" class="pc-sim-loupe-btn sim-zoom-btn ${state.zoomMultiplier === 1 ? 'is-active' : ''}" data-zoom="1">1x (실제 1:1)</button>
                  <button type="button" class="pc-sim-loupe-btn sim-zoom-btn ${state.zoomMultiplier === 2 ? 'is-active' : ''}" data-zoom="2">2x</button>
                  <button type="button" class="pc-sim-loupe-btn sim-zoom-btn ${state.zoomMultiplier === 4 ? 'is-active' : ''}" data-zoom="4">4x 루페</button>
                  <button type="button" class="pc-sim-loupe-btn sim-zoom-btn ${state.zoomMultiplier === 8 ? 'is-active' : ''}" data-zoom="8">8x 픽셀</button>
                </div>
              </div>
            </div>
          </div>

          <!-- 6. Background Switcher & Scale Mode -->
          <div class="pc-sim-control-card">
            <div class="pc-sim-control-header">
              <div class="pc-sim-control-title">
                <span class="pc-inline-icon is-xs" data-icon="eye"></span>
                <span>스테이지 배경 & 스케일</span>
              </div>
              <div class="pc-sim-segmented" style="height: 24px; padding: 2px;">
                <button type="button" class="pc-sim-seg-btn sim-scale-btn ${state.scaleMode === 'fixed' ? 'is-active' : ''}" data-scale="fixed" style="font-size: 10px; padding: 1px 6px;">고정 픽셀</button>
                <button type="button" class="pc-sim-seg-btn sim-scale-btn ${state.scaleMode === 'proportional' ? 'is-active' : ''}" data-scale="proportional" style="font-size: 10px; padding: 1px 6px;">비례</button>
              </div>
            </div>

            <div class="pc-sim-bg-chips">
              <button type="button" class="pc-sim-bg-chip sim-bg-btn ${state.background === 'cream' ? 'is-active' : ''}" data-bg="cream">
                <span class="pc-sim-bg-dot" style="background: #FAF7F0;"></span> 크림
              </button>
              <button type="button" class="pc-sim-bg-chip sim-bg-btn ${state.background === 'white' ? 'is-active' : ''}" data-bg="white">
                <span class="pc-sim-bg-dot" style="background: #FFFFFF;"></span> 화이트
              </button>
              <button type="button" class="pc-sim-bg-chip sim-bg-btn ${state.background === 'dark' ? 'is-active' : ''}" data-bg="dark">
                <span class="pc-sim-bg-dot" style="background: #221C18;"></span> 다크
              </button>
              <button type="button" class="pc-sim-bg-chip sim-bg-btn ${state.background === 'mint' ? 'is-active' : ''}" data-bg="mint">
                <span class="pc-sim-bg-dot" style="background: #E8F5EE;"></span> 민트
              </button>
              <button type="button" class="pc-sim-bg-chip sim-bg-btn ${state.background === 'peach' ? 'is-active' : ''}" data-bg="peach">
                <span class="pc-sim-bg-dot" style="background: #FDEEE4;"></span> 피치
              </button>
              <button type="button" class="pc-sim-bg-chip sim-bg-btn ${state.background === 'blueprint' ? 'is-active' : ''}" data-bg="blueprint">
                <span class="pc-sim-bg-dot" style="background: #152A38; border-color: #64B9E6;"></span> 그리드
              </button>
            </div>
          </div>

        </div>
      </div>

      <!-- Quick Size Filter Pills (3px ~ 16px) -->
      <div class="pc-sim-size-filter-bar">
        <span style="font-size: 12px; font-weight: 800; color: var(--pc-ink); display: flex; align-items: center; gap: 4px;">
          <span class="pc-inline-icon is-xs" data-icon="settings"></span> 규격 필터:
        </span>
        <button type="button" class="pc-sim-size-filter-chip sim-size-chip ${state.activeFilterSize === 'all' ? 'is-active' : ''}" data-size="all">전체 3px~16px (14단계)</button>
        ${SIM_SIZES.map(s => `
          <button type="button" class="pc-sim-size-filter-chip sim-size-chip ${state.activeFilterSize == s.size ? 'is-active' : ''}" data-size="${s.size}">${s.size}px</button>
        `).join('')}
      </div>

      <!-- Multi-Size Simulation Matrix Container (3px ~ 16px strictly) -->
      <div class="pc-sim-matrix-container" id="sim-matrix-rows-container">
        <!-- Rendered dynamically by updateSimMatrix() -->
      </div>

      <!-- Live Readout & Code Export Panel -->
      <div class="pc-sim-export-panel" id="sim-export-panel">
        <div class="pc-sim-export-top">
          <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
            <span class="pc-badge pc-badge-buttercup">Live Code Export</span>
            <span style="font-size: 15px; font-weight: 800; color: var(--pc-ink);">마이크로 규격(3px~16px) 코드 생성기</span>
            <div style="display: flex; align-items: center; gap: 6px;">
              <span style="font-size: 12px; font-weight: 700; color: var(--pc-ink-muted);">가로×세로 규격:</span>
              <select id="sim-export-size-select" class="pc-select" style="padding: 4px 10px; font-size: 12px; border-radius: 8px;">
                ${SIM_SIZES.map(s => `<option value="${s.size}" ${s.size === state.exportSize ? 'selected' : ''}>${s.size}px × ${s.size}px - ${s.nameKo}</option>`).join('')}
              </select>
            </div>
          </div>

          <div style="display: flex; gap: 8px; align-items: center;">
            <div class="pc-sim-export-tabs">
              <button type="button" class="pc-sim-tab-btn ${state.exportTab === 'svg' ? 'is-active' : ''}" data-tab="svg">인라인 SVG 코드</button>
              <button type="button" class="pc-sim-tab-btn ${state.exportTab === 'css' ? 'is-active' : ''}" data-tab="css">CSS 스타일 토큰</button>
            </div>
            <button type="button" id="btn-sim-copy-code" class="pc-btn pc-btn-mint pc-btn-sm" style="box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
              <span class="pc-inline-icon is-xs" data-icon="clipboard"></span> <span id="sim-copy-btn-label">코드 복사</span>
            </button>
          </div>
        </div>

        <pre class="pc-sim-code-box" id="sim-code-preview"><code><!-- Generated Code --></code></pre>
      </div>
    `;
  }

  /**
   * Render Size Rows inside the Matrix Container (strictly 3px to 16px)
   */
  function renderMatrixRows() {
    const container = document.getElementById('sim-matrix-rows-container');
    if (!container) return;

    const icon = getIcon(state.selectedIconId);
    if (!icon) return;

    let html = '';

    const sizesToRender = state.activeFilterSize === 'all'
      ? SIM_SIZES
      : SIM_SIZES.filter(s => s.size == state.activeFilterSize);

    sizesToRender.forEach(sizeDef => {
      const activeStroke = state.perSizeOverrides[sizeDef.size] !== undefined
        ? state.perSizeOverrides[sizeDef.size]
        : state.strokeWidth;

      const isOverridden = state.perSizeOverrides[sizeDef.size] !== undefined;
      const isDrawerOpen = !!state.openDrawers[sizeDef.size];

      const clarity = calculateClarity(sizeDef, activeStroke);

      html += `
        <div class="pc-sim-size-card" id="sim-size-card-${sizeDef.size}">
          <!-- Size Card Header -->
          <div class="pc-sim-size-header">
            <div class="pc-sim-size-left">
              <span class="pc-sim-size-pill">${sizeDef.label}</span>
              <div class="pc-sim-size-titles">
                <span class="pc-sim-size-name-ko">${sizeDef.nameKo} (가로 ${sizeDef.size}px × 세로 ${sizeDef.size}px)</span>
                <span class="pc-sim-size-name-en">${sizeDef.nameEn} · 1:1 Physical Scaled Size</span>
              </div>
            </div>

            <!-- Diagnostics & Clarity Metrics -->
            <div class="pc-sim-size-metrics">
              <span class="pc-sim-metric-tag" title="현재 적용된 물리 외곽선 두께와 아이콘 크기 비율">
                선폭: <strong>${activeStroke.toFixed(1)}px</strong> (${clarity.ratio}%)
              </span>
              <span class="pc-sim-clarity-badge ${clarity.level}" title="해당 크기에서의 선명도 지수">
                ${clarity.statusText}
              </span>
              <span class="pc-sim-metric-tag" style="background: #FAF7F0; color: #73675B;" title="디자인 시스템 권장 미세 선폭">
                권장: ${sizeDef.rec}
              </span>
            </div>

            <!-- Size Actions -->
            <div class="pc-sim-size-actions">
              <button type="button" class="pc-sim-action-btn sim-copy-size-svg" data-size="${sizeDef.size}" title="이 크기의 완성된 SVG 복사">
                <span class="pc-inline-icon is-xs" data-icon="clipboard"></span> SVG 복사
              </button>
              <button type="button" class="pc-sim-action-btn sim-copy-size-css" data-size="${sizeDef.size}" title="이 크기의 CSS 복사">
                <span class="pc-inline-icon is-xs" data-icon="file"></span> CSS 복사
              </button>
              <button type="button" class="pc-sim-action-btn sim-toggle-drawer-btn ${isDrawerOpen ? 'is-active' : ''}" data-size="${sizeDef.size}" title="이 크기만 독립적으로 두께 미세조정">
                <span class="pc-inline-icon is-xs" data-icon="edit"></span> ${isOverridden ? `개별 (${activeStroke.toFixed(1)}px)` : '미세조정'}
              </button>
            </div>
          </div>

          <!-- Per-Size Fine-Tuning Accordion Drawer -->
          <div class="pc-sim-persize-drawer ${isDrawerOpen ? 'is-open' : ''}" id="sim-drawer-${sizeDef.size}">
            <div class="pc-sim-persize-label">
              <span class="pc-inline-icon is-xs" data-icon="edit"></span>
              <span>${sizeDef.size}px × ${sizeDef.size}px 전용 미세 두께:</span>
              <strong id="sim-persize-val-${sizeDef.size}">${activeStroke.toFixed(1)}px</strong>
            </div>
            <input type="range" class="pc-sim-persize-slider" min="0.1" max="2.5" step="0.1" value="${activeStroke}" data-size="${sizeDef.size}">
            ${isOverridden ? `
              <button type="button" class="pc-sim-action-btn sim-reset-persize-btn" data-size="${sizeDef.size}" style="background: #FEE396; border-color: #E2C26D; font-size: 11px;">
                전역 동기화로 복귀
              </button>
            ` : ''}
          </div>

          <!-- 6 Comparative Columns Grid (0px, 0.2px, 0.4px, 0.7px, 1.2px, Active) -->
          <div class="pc-sim-compare-grid">
            ${COMPARISON_PRESETS.map(preset => {
              const filterId = `sim-f-${state.selectedIconId}-${sizeDef.size}-${preset.key}`;
              const svgCode = buildSimSvg(
                icon.svg,
                sizeDef.size,
                preset.width,
                state.strokeColor,
                state.mode,
                state.scaleMode,
                filterId
              );

              return `
                <div class="pc-sim-cell" data-size="${sizeDef.size}" data-width="${preset.width}" title="클릭하여 이 설정 선택 및 코드 생성">
                  <div class="pc-sim-cell-badge">
                    <span>${preset.label}</span>
                  </div>
                  <div class="pc-sim-stage bg-${state.background}">
                    <div class="pc-sim-svg-wrapper" style="--sim-icon-size:${sizeDef.size}px; width:${sizeDef.size}px; height:${sizeDef.size}px; transform: scale(${state.zoomMultiplier}); transform-origin: center center;">
                      ${svgCode}
                    </div>
                  </div>
                  <div class="pc-sim-cell-footer">
                    <span class="pc-sim-cell-thick">${sizeDef.size}×${sizeDef.size}px | ${preset.width === 0 ? '0px' : `${preset.width.toFixed(1)}px`}</span>
                    <span class="pc-sim-cell-copy-hint">클릭 복사</span>
                  </div>
                </div>
              `;
            }).join('')}

            <!-- 6th Slot: Dynamic Active Slot -->
            <div class="pc-sim-cell is-active-slot" data-size="${sizeDef.size}" data-width="${activeStroke}" title="현재 실시간 슬라이더가 적용된 라이브 슬롯">
              <div class="pc-sim-cell-badge">
                <span class="pc-sim-live-tag">LIVE</span>
                <span>커스텀 (${activeStroke.toFixed(1)}px)</span>
              </div>
              <div class="pc-sim-stage bg-${state.background}">
                <div class="pc-sim-svg-wrapper" style="--sim-icon-size:${sizeDef.size}px; width:${sizeDef.size}px; height:${sizeDef.size}px; transform: scale(${state.zoomMultiplier}); transform-origin: center center;">
                  ${buildSimSvg(
                    icon.svg,
                    sizeDef.size,
                    activeStroke,
                    state.strokeColor,
                    state.mode,
                    state.scaleMode,
                    `sim-f-${state.selectedIconId}-${sizeDef.size}-live`
                  )}
                </div>
              </div>
              <div class="pc-sim-cell-footer">
                <span class="pc-sim-cell-thick" style="color: var(--pc-mint-dark);">${sizeDef.size}×${sizeDef.size}px | ${activeStroke.toFixed(1)}px</span>
                <span class="pc-sim-cell-copy-hint" style="color: var(--pc-mint-dark);">클릭 복사</span>
              </div>
            </div>

          </div>
        </div>
      `;
    });

    container.innerHTML = html;

    // Attach row events
    attachRowEventListeners();
  }

  /**
   * Attach dynamic events for cards, cells, drawers, and copy buttons
   */
  function attachRowEventListeners() {
    const container = document.getElementById('sim-matrix-rows-container');
    if (!container) return;

    // 1. Cell click -> select size & stroke and update code export
    container.querySelectorAll('.pc-sim-cell').forEach(cell => {
      cell.addEventListener('click', () => {
        const size = parseInt(cell.getAttribute('data-size'), 10);
        const width = parseFloat(cell.getAttribute('data-width'));

        state.exportSize = size;
        const sizeSelect = document.getElementById('sim-export-size-select');
        if (sizeSelect) sizeSelect.value = size;

        const masterSlider = document.getElementById('sim-master-size-slider');
        if (masterSlider) masterSlider.value = size;

        updateCodeExport();

        // Highlight selected cell temporarily
        container.querySelectorAll('.pc-sim-cell').forEach(c => c.style.outline = '');
        cell.style.outline = '2px solid var(--pc-mint-dark)';

        notify(`[${state.selectedIconId}] ${size}px × ${size}px 규격 (외곽선: ${width.toFixed(1)}px) 설정이 선택되었습니다.`, 'mint');

        // Scroll smoothly to code export
        const exportPanel = document.getElementById('sim-export-panel');
        if (exportPanel) {
          exportPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    });

    // 2. SVG copy button on size card
    container.querySelectorAll('.sim-copy-size-svg').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const size = parseInt(btn.getAttribute('data-size'), 10);
        const stroke = state.perSizeOverrides[size] !== undefined ? state.perSizeOverrides[size] : state.strokeWidth;
        const icon = getIcon(state.selectedIconId);
        if (!icon) return;

        const svgCode = buildSimSvg(
          icon.svg,
          size,
          stroke,
          state.strokeColor,
          state.mode,
          state.scaleMode,
          `pc-export-${state.selectedIconId}-${size}`
        );

        if (navigator.clipboard) {
          navigator.clipboard.writeText(svgCode).then(() => {
            notify(`[${state.selectedIconId}] ${size}px × ${size}px 완성형 SVG 코드가 복사되었습니다!`, 'mint');
          });
        }
      });
    });

    // 3. CSS copy button on size card
    container.querySelectorAll('.sim-copy-size-css').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const size = parseInt(btn.getAttribute('data-size'), 10);
        const stroke = state.perSizeOverrides[size] !== undefined ? state.perSizeOverrides[size] : state.strokeWidth;
        const cssCode = generateCssCode(size, stroke);

        if (navigator.clipboard) {
          navigator.clipboard.writeText(cssCode).then(() => {
            notify(`[${state.selectedIconId}] ${size}px × ${size}px CSS 클래스가 복사되었습니다!`, 'peach');
          });
        }
      });
    });

    // 4. Per-size Drawer toggle
    container.querySelectorAll('.sim-toggle-drawer-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const size = parseInt(btn.getAttribute('data-size'), 10);
        state.openDrawers[size] = !state.openDrawers[size];
        renderMatrixRows();
      });
    });

    // 5. Per-size slider
    container.querySelectorAll('.pc-sim-persize-slider').forEach(slider => {
      slider.addEventListener('input', (e) => {
        const size = parseInt(slider.getAttribute('data-size'), 10);
        const val = parseFloat(e.target.value);
        state.perSizeOverrides[size] = val;

        const valTag = document.getElementById(`sim-persize-val-${size}`);
        if (valTag) valTag.textContent = `${val.toFixed(1)}px`;

        // Live re-render
        renderMatrixRows();
        updateCodeExport();
      });
    });

    // 6. Reset per-size override
    container.querySelectorAll('.sim-reset-persize-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const size = parseInt(btn.getAttribute('data-size'), 10);
        delete state.perSizeOverrides[size];
        renderMatrixRows();
        notify(`${size}px 크기가 전역 두께(${state.strokeWidth.toFixed(1)}px)와 다시 동기화되었습니다.`, 'mint');
      });
    });
  }

  /**
   * Generate CSS code snippet for export
   */
  function generateCssCode(size, stroke) {
    const iconId = state.selectedIconId;
    return `/* PaperCut UI - Kirigami Icon Token: ${iconId} (${size}px x ${size}px) */
.pc-icon-${iconId}-${size} {
  width: ${size}px !important;
  height: ${size}px !important;
  --pc-icon-stroke-color: ${state.strokeColor};
  --pc-icon-stroke-width: ${stroke.toFixed(1)}px;
}

/* Layer Cutline & Stroke Styling */
.pc-icon-${iconId}-${size} svg path:not([fill="none"]),
.pc-icon-${iconId}-${size} svg circle:not([fill="none"]),
.pc-icon-${iconId}-${size} svg rect:not([fill="none"]) {
  stroke: var(--pc-icon-stroke-color);
  stroke-width: var(--pc-icon-stroke-width);
  stroke-linejoin: round;
  stroke-linecap: round;
  paint-order: stroke fill;
  ${state.scaleMode === 'fixed' ? 'vector-effect: non-scaling-stroke;' : ''}
}`;
  }

  /**
   * Update Code Export Output Box
   */
  function updateCodeExport() {
    const codePre = document.getElementById('sim-code-preview');
    if (!codePre) return;

    const size = state.exportSize;
    const stroke = state.perSizeOverrides[size] !== undefined ? state.perSizeOverrides[size] : state.strokeWidth;
    const icon = getIcon(state.selectedIconId);
    if (!icon) return;

    if (state.exportTab === 'svg') {
      const code = buildSimSvg(
        icon.svg,
        size,
        stroke,
        state.strokeColor,
        state.mode,
        state.scaleMode,
        `pc-export-${state.selectedIconId}-${size}`
      );
      codePre.textContent = code;
    } else {
      const code = generateCssCode(size, stroke);
      codePre.textContent = code;
    }
  }

  /**
   * Initialize Global Event Listeners for the Controller
   */
  function initEventListeners() {
    const root = document.getElementById('icon-stroke-matrix-sim');
    if (!root) return;

    // 1. Icon Search & Autocomplete
    const searchInput = document.getElementById('sim-icon-search-input');
    const dropdown = document.getElementById('sim-icon-dropdown');

    if (searchInput && dropdown) {
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        if (!query) {
          dropdown.classList.remove('is-open');
          dropdown.innerHTML = '';
          return;
        }

        const icons = window.PAPERCUT_ICONS || [];
        const matches = icons.filter(item => {
          return item.id.toLowerCase().includes(query) ||
                 (item.nameKo && item.nameKo.toLowerCase().includes(query)) ||
                 (item.nameEn && item.nameEn.toLowerCase().includes(query)) ||
                 (item.tags && item.tags.some(t => t.toLowerCase().includes(query)));
        }).slice(0, 10);

        if (matches.length === 0) {
          dropdown.innerHTML = `<div class="pc-sim-dropdown-item" style="color: #9C8F82; pointer-events:none;">일치하는 아이콘이 없습니다</div>`;
        } else {
          dropdown.innerHTML = matches.map(item => `
            <div class="pc-sim-dropdown-item" data-id="${item.id}">
              <span class="pc-inline-icon is-xs" data-icon="${item.id}"></span>
              <span>${item.nameKo || item.id} (${item.id})</span>
            </div>
          `).join('');
        }

        dropdown.classList.add('is-open');
        if (typeof window.hydratePapercutIcons === 'function') {
          window.hydratePapercutIcons(dropdown);
        }
      });

      dropdown.addEventListener('click', (e) => {
        const item = e.target.closest('.pc-sim-dropdown-item');
        if (item && item.getAttribute('data-id')) {
          selectIcon(item.getAttribute('data-id'));
          dropdown.classList.remove('is-open');
          searchInput.value = '';
        }
      });

      document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
          dropdown.classList.remove('is-open');
        }
      });
    }

    // 2. Quick Sample Chips
    root.querySelectorAll('.pc-sim-chip-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-icon');
        if (id) selectIcon(id);
      });
    });

    // 3. Color Picker & Swatches
    const colorPicker = document.getElementById('sim-color-picker');
    const colorVal = document.getElementById('sim-color-val');

    if (colorPicker) {
      colorPicker.addEventListener('input', (e) => {
        setColor(e.target.value);
      });
    }

    root.querySelectorAll('.pc-sim-swatch').forEach(btn => {
      btn.addEventListener('click', () => {
        const col = btn.getAttribute('data-color');
        if (col) setColor(col);
      });
    });

    function setColor(col) {
      state.strokeColor = col;
      if (colorPicker) colorPicker.value = col;
      if (colorVal) colorVal.textContent = col.toUpperCase();

      root.querySelectorAll('.pc-sim-swatch').forEach(b => {
        b.classList.toggle('is-active', b.getAttribute('data-color') === col);
      });

      renderMatrixRows();
      updateCodeExport();
    }

    // 4. Mode Segmented Buttons
    root.querySelectorAll('.sim-mode-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const mode = btn.getAttribute('data-mode');
        state.mode = mode;

        root.querySelectorAll('.sim-mode-btn').forEach(b => b.classList.toggle('is-active', b === btn));
        
        const modeBadge = document.getElementById('sim-mode-badge');
        const modeCaption = document.getElementById('sim-mode-caption');
        
        if (mode === 'sticker') {
          if (modeBadge) modeBadge.textContent = '다이컷 스티커';
          if (modeCaption) modeCaption.textContent = '아이콘 전체 실루엣에 부드러운 다이컷 종이 스티커 경계선과 그림자를 두릅니다.';
        } else if (mode === 'layer') {
          if (modeBadge) modeBadge.textContent = '레이어 칼선';
          if (modeCaption) modeCaption.textContent = '아이콘을 구성하는 각 색종이 조각의 절단면에 정밀 칼선 테두리를 긋습니다.';
        } else {
          if (modeBadge) modeBadge.textContent = '더블 외곽선';
          if (modeCaption) modeCaption.textContent = '외부 스티커 다이컷 외곽선과 내부 종이 조각 칼선 테두리를 모두 함께 적용합니다.';
        }

        renderMatrixRows();
        updateCodeExport();
      });
    });

    // 5. Global Stroke Slider
    const globalStrokeSlider = document.getElementById('sim-global-stroke-slider');
    const strokeValTag = document.getElementById('sim-thickness-val');

    if (globalStrokeSlider) {
      globalStrokeSlider.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        state.strokeWidth = val;
        if (strokeValTag) strokeValTag.textContent = `${val.toFixed(1)}px`;

        root.querySelectorAll('.pc-sim-preset-btn').forEach(b => {
          b.classList.toggle('is-active', parseFloat(b.getAttribute('data-val')) === val);
        });

        renderMatrixRows();
        updateCodeExport();
      });
    }

    root.querySelectorAll('.pc-sim-preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const val = parseFloat(btn.getAttribute('data-val'));
        state.strokeWidth = val;
        if (globalStrokeSlider) globalStrokeSlider.value = val;
        if (strokeValTag) strokeValTag.textContent = `${val.toFixed(1)}px`;

        root.querySelectorAll('.pc-sim-preset-btn').forEach(b => b.classList.toggle('is-active', b === btn));
        renderMatrixRows();
        updateCodeExport();
      });
    });

    // 6. Dynamic Master Size Slider (3px ~ 16px) & Size Filter Chips
    const masterSizeSlider = document.getElementById('sim-master-size-slider');
    const masterSizeDisplay = document.getElementById('sim-master-size-display');

    if (masterSizeSlider) {
      masterSizeSlider.addEventListener('input', (e) => {
        const sz = parseInt(e.target.value, 10);
        state.activeFilterSize = sz;
        state.exportSize = sz;

        if (masterSizeDisplay) masterSizeDisplay.textContent = `${sz}px × ${sz}px`;

        const exportSizeSelect = document.getElementById('sim-export-size-select');
        if (exportSizeSelect) exportSizeSelect.value = sz;

        root.querySelectorAll('.sim-size-chip').forEach(c => {
          c.classList.toggle('is-active', c.getAttribute('data-size') == sz);
        });

        renderMatrixRows();
        updateCodeExport();
      });
    }

    root.querySelectorAll('.sim-size-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const sz = chip.getAttribute('data-size');
        state.activeFilterSize = sz;

        if (sz !== 'all') {
          const numSz = parseInt(sz, 10);
          state.exportSize = numSz;
          if (masterSizeSlider) masterSizeSlider.value = numSz;
          if (masterSizeDisplay) masterSizeDisplay.textContent = `${numSz}px × ${numSz}px`;
          const exportSizeSelect = document.getElementById('sim-export-size-select');
          if (exportSizeSelect) exportSizeSelect.value = numSz;
        } else {
          if (masterSizeDisplay) masterSizeDisplay.textContent = '전체 (3~16px)';
        }

        root.querySelectorAll('.sim-size-chip').forEach(c => c.classList.toggle('is-active', c === chip));
        renderMatrixRows();
        updateCodeExport();
      });
    });

    // 7. Loupe Zoom Inspector Buttons (1x, 2x, 4x, 8x)
    root.querySelectorAll('.sim-zoom-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const zoom = parseInt(btn.getAttribute('data-zoom'), 10);
        state.zoomMultiplier = zoom;

        root.querySelectorAll('.sim-zoom-btn').forEach(b => b.classList.toggle('is-active', b === btn));
        renderMatrixRows();
        notify(`루페 배율이 ${zoom}x (${zoom === 1 ? '실제 1:1 픽셀' : `${zoom}배 확대`})로 전환되었습니다.`, 'mint');
      });
    });

    // 8. Scale Mode Segmented
    root.querySelectorAll('.sim-scale-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const mode = btn.getAttribute('data-scale');
        state.scaleMode = mode;

        root.querySelectorAll('.sim-scale-btn').forEach(b => b.classList.toggle('is-active', b === btn));
        renderMatrixRows();
        updateCodeExport();
      });
    });

    // 9. Background Stage Buttons
    root.querySelectorAll('.sim-bg-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const bg = btn.getAttribute('data-bg');
        state.background = bg;

        root.querySelectorAll('.sim-bg-btn').forEach(b => b.classList.toggle('is-active', b === btn));
        renderMatrixRows();
      });
    });

    // 10. Code Export Tabs & Size Selector
    root.querySelectorAll('.pc-sim-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        state.exportTab = tab;

        root.querySelectorAll('.pc-sim-tab-btn').forEach(b => b.classList.toggle('is-active', b === btn));
        updateCodeExport();
      });
    });

    const exportSizeSelect = document.getElementById('sim-export-size-select');
    if (exportSizeSelect) {
      exportSizeSelect.addEventListener('change', (e) => {
        state.exportSize = parseInt(e.target.value, 10);
        updateCodeExport();
      });
    }

    // 11. Copy Code Button
    const copyCodeBtn = document.getElementById('btn-sim-copy-code');
    const codePre = document.getElementById('sim-code-preview');

    if (copyCodeBtn && codePre) {
      copyCodeBtn.addEventListener('click', () => {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(codePre.textContent).then(() => {
            notify(`[${state.selectedIconId}] ${state.exportSize}px × ${state.exportSize}px ${state.exportTab.toUpperCase()} 코드가 클립보드에 복사되었습니다!`, 'mint');
          });
        }
      });
    }
  }

  /**
   * Select icon and update view
   */
  function selectIcon(iconId) {
    state.selectedIconId = iconId;

    const badge = document.getElementById('sim-active-icon-badge');
    if (badge) badge.textContent = iconId;

    const root = document.getElementById('icon-stroke-matrix-sim');
    if (root) {
      root.querySelectorAll('.pc-sim-chip-btn').forEach(b => {
        b.classList.toggle('is-active', b.getAttribute('data-icon') === iconId);
      });
    }

    renderMatrixRows();
    updateCodeExport();
  }

  /**
   * Main Initialization
   */
  function init() {
    const container = document.getElementById('icon-stroke-matrix-sim');
    if (!container) return;

    // Render Master Frame
    container.innerHTML = generateMarkup();

    // Hydrate Icons in console
    if (typeof window.hydratePapercutIcons === 'function') {
      window.hydratePapercutIcons(container);
    }

    // Render Matrix Rows
    renderMatrixRows();

    // Update Initial Code Export
    updateCodeExport();

    // Attach Event Listeners
    initEventListeners();
  }

  // Expose API
  window.initIconStrokeMatrixSim = init;
  window.renderIconSimMarkup = generateMarkup;

  // Auto-run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      // Delay slightly to ensure papercut-icons.js is loaded
      setTimeout(init, 50);
    });
  } else {
    setTimeout(init, 50);
  }

})();
