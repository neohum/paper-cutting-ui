/**
 * PaperCut SVG UI Primitives (papercut-svg-primitives.js)
 * 
 * 100% Pure SVG Vector Component Architecture inspired by Radix UI Primitives & Layered Papercraft:
 * "Layered paper-cut illustration of [ ], with overlapping shapes in soft pastel colors,
 *  handcrafted textures, subtle shadows between layers, clean vector edges,
 *  centered on a matte cream background, whimsical and modern visual storytelling."
 * 
 * Zero external dependencies (Vanilla JS + SVG + CSS).
 * Full WAI-ARIA semantics, keyboard navigation & 7 authentic pastel swatches.
 */

(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  }
  if (typeof root !== 'undefined') {
    root.PaperCutSVG = api;
  }
  if (typeof window !== 'undefined' && window !== root) {
    window.PaperCutSVG = api;
  }
})(typeof globalThis !== 'undefined' ? globalThis : (typeof self !== 'undefined' ? self : this), function () {
  'use strict';

  // 7대 원작 파스텔 색지 & 크래프트 보드 매핑
  const PALETTES = {
    cloud: { bg: '#FFFDF9', dark: '#E8E1D5', border: 'rgba(46,30,20,0.15)', ink: '#2E1E14' },
    mint: { bg: '#EAF7F1', dark: '#A3D8C3', border: 'rgba(108,174,151,0.6)', ink: '#1B4738' },
    peach: { bg: '#FDF1EA', dark: '#F7BA9E', border: 'rgba(226,148,114,0.6)', ink: '#5C2D18' },
    sand: { bg: '#FFF9E8', dark: '#F3D082', border: 'rgba(212,169,73,0.6)', ink: '#4D3B0E' },
    lavender: { bg: '#F4F0FA', dark: '#D7CBEB', border: 'rgba(164,146,201,0.6)', ink: '#3A275E' },
    sky: { bg: '#EDF7FA', dark: '#BDE0EA', border: 'rgba(128,184,200,0.6)', ink: '#194250' },
    sage: { bg: '#F0F6F1', dark: '#A3CCA0', border: 'rgba(112,160,109,0.6)', ink: '#244522' },
    rose: { bg: '#FDF0F1', dark: '#F5B8BE', border: 'rgba(217,130,140,0.6)', ink: '#5C1D24' },
    kraft: { bg: '#FAF6ED', dark: '#D5C7B4', border: 'rgba(184,165,141,0.6)', ink: '#3A2C1D' }
  };

  function getPalette(tone) {
    return PALETTES[tone] || PALETTES.mint;
  }

  // 공용 SVG 필터 & Defs 자동 주입 (단 1회만 DOM에 추가)
  const DEFS_ID = 'pc-svg-master-defs';
  function ensureMasterDefs() {
    if (typeof document === 'undefined') return;
    if (document.getElementById(DEFS_ID)) return;

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.id = DEFS_ID;
    svg.setAttribute('style', 'position: absolute; width: 0; height: 0; overflow: hidden; pointer-events: none;');
    svg.setAttribute('aria-hidden', 'true');
    svg.innerHTML = `
      <defs>
        <!-- 300g 수제 도화지 섬유 질감 필터 (0-KB Handcrafted Paper Pulp Texture) -->
        <filter id="pc-filter-paper-fiber" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise"/>
          <feDiffuseLighting in="noise" lighting-color="#FFFDF9" surfaceScale="1.2" result="light">
            <feDistantLight azimuth="55" elevation="65"/>
          </feDiffuseLighting>
          <feBlend mode="multiply" in="SourceGraphic" in2="light"/>
        </filter>

        <!-- 2-Tier 번트 엄버 물리 접촉 그림자 (Contact Drop Shadow) -->
        <filter id="pc-filter-contact-shadow" x="-20%" y="-20%" width="140%" height="160%">
          <feDropShadow dx="0" dy="1.5" stdDeviation="1" flood-color="#2E1E14" flood-opacity="0.32"/>
          <feDropShadow dx="0" dy="4" stdDeviation="3.5" flood-color="#2E1E14" flood-opacity="0.14"/>
        </filter>

        <!-- 깊은 섀도우박스 다층 그림자 (Deep Multi-Tier Shadow) -->
        <filter id="pc-filter-depth-shadow" x="-30%" y="-30%" width="160%" height="180%">
          <feDropShadow dx="0" dy="2" stdDeviation="1.5" flood-color="#2E1E14" flood-opacity="0.25"/>
          <feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#2E1E14" flood-opacity="0.18"/>
          <feDropShadow dx="0" dy="16" stdDeviation="18" flood-color="#2E1E14" flood-opacity="0.08"/>
        </filter>

        <!-- 음각 슬릿 및 파낸 홈 그림자 (Recessed Cutout Inset Shadow) -->
        <filter id="pc-filter-cutout-inset" x="-20%" y="-20%" width="140%" height="140%">
          <feOffset dx="0" dy="2"/>
          <feGaussianBlur stdDeviation="2" result="offset-blur"/>
          <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse"/>
          <feFlood flood-color="#2E1E14" flood-opacity="0.22" result="color"/>
          <feComposite operator="in" in="color" in2="inverse" result="shadow"/>
          <feComposite operator="over" in="shadow" in2="SourceGraphic"/>
        </filter>
      </defs>
    `;
    document.body.appendChild(svg);
  }

  // -------------------------------------------------------------------------
  // 1. BUTTON & TOGGLE (3-Tier Layered Vector Paper Button)
  // -------------------------------------------------------------------------
  function createButton(opts = {}) {
    ensureMasterDefs();
    const {
      label = '종이 공예 버튼',
      tone = 'mint',
      icon = null,
      variant = 'solid',
      onClick = null,
      ariaLabel = null
    } = opts;

    const pal = getPalette(tone);
    const wrap = document.createElement('div');
    wrap.className = `pc-svg-component pc-svg-btn pc-svg-btn--${tone}`;
    wrap.setAttribute('role', 'button');
    wrap.setAttribute('tabindex', '0');
    wrap.setAttribute('aria-label', ariaLabel || label);

    const width = opts.width || 170;
    const height = opts.height || 46;

    let shapeContent = '';
    if (variant === 'stamp') {
      shapeContent = `
        <rect x="2" y="4" width="${width - 4}" height="${height - 7}" rx="4"
              fill="${pal.dark}" filter="url(#pc-filter-contact-shadow)" />
        <rect x="2" y="2" width="${width - 4}" height="${height - 7}" rx="4"
              fill="${pal.bg}" stroke="${pal.border}" stroke-width="1" />
        <circle cx="10" cy="2" r="2" fill="#FAF7F0"/><circle cx="28" cy="2" r="2" fill="#FAF7F0"/><circle cx="46" cy="2" r="2" fill="#FAF7F0"/><circle cx="64" cy="2" r="2" fill="#FAF7F0"/><circle cx="82" cy="2" r="2" fill="#FAF7F0"/><circle cx="100" cy="2" r="2" fill="#FAF7F0"/><circle cx="118" cy="2" r="2" fill="#FAF7F0"/><circle cx="136" cy="2" r="2" fill="#FAF7F0"/><circle cx="154" cy="2" r="2" fill="#FAF7F0"/>
        <circle cx="10" cy="${height - 5}" r="2" fill="#FAF7F0"/><circle cx="28" cy="${height - 5}" r="2" fill="#FAF7F0"/><circle cx="46" cy="${height - 5}" r="2" fill="#FAF7F0"/><circle cx="64" cy="${height - 5}" r="2" fill="#FAF7F0"/><circle cx="82" cy="${height - 5}" r="2" fill="#FAF7F0"/><circle cx="100" cy="${height - 5}" r="2" fill="#FAF7F0"/><circle cx="118" cy="${height - 5}" r="2" fill="#FAF7F0"/><circle cx="136" cy="${height - 5}" r="2" fill="#FAF7F0"/><circle cx="154" cy="${height - 5}" r="2" fill="#FAF7F0"/>
        <rect x="10" y="7" width="${width - 20}" height="${height - 17}" rx="2"
              fill="#FFFDF9" stroke="#EADBCC" stroke-width="0.75" />
      `;
    } else if (variant === 'ticket') {
      shapeContent = `
        <path d="M 3 5 H ${width - 3} V 15 A 5 5 0 0 0 ${width - 3} 27 V 39 H 3 V 27 A 5 5 0 0 0 3 15 Z"
              fill="${pal.dark}" filter="url(#pc-filter-contact-shadow)" />
        <path d="M 3 2 H ${width - 3} V 13 A 5 5 0 0 0 ${width - 3} 25 V 37 H 3 V 25 A 5 5 0 0 0 3 13 Z"
              fill="${pal.bg}" stroke="${pal.border}" stroke-width="1" />
        <line x1="32" y1="4" x2="32" y2="36" stroke="${pal.border}" stroke-width="1.2" stroke-dasharray="3 2" opacity="0.6"/>
      `;
    } else if (variant === 'pill') {
      const radius = (height - 8) / 2;
      shapeContent = `
        <rect x="2" y="5" width="${width - 4}" height="${height - 8}" rx="${radius}"
              fill="${pal.dark}" stroke="${pal.border}" stroke-width="1.2"
              filter="url(#pc-filter-contact-shadow)" />
        <rect x="2" y="2" width="${width - 4}" height="${height - 8}" rx="${radius}"
              fill="${pal.bg}" stroke="${pal.border}" stroke-width="1" />
        <line x1="${radius + 4}" y1="3" x2="${width - radius - 4}" y2="3" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" />
      `;
    } else {
      shapeContent = `
        <rect x="2" y="5" width="${width - 4}" height="${height - 8}" rx="12"
              fill="${pal.dark}" stroke="${pal.border}" stroke-width="1.2"
              filter="url(#pc-filter-contact-shadow)" />
        <g class="pc-svg-layer-top">
          <rect x="2" y="2" width="${width - 4}" height="${height - 8}" rx="12"
                fill="${variant === 'solid' ? pal.bg : '#FFFDF9'}"
                stroke="${pal.border}" stroke-width="1" />
          <path d="M 14 3 L ${width - 14} 3" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" />
          <rect x="6" y="6" width="${width - 12}" height="${height - 16}" rx="8"
                fill="none" stroke="rgba(46,30,20,0.18)" stroke-width="1" stroke-dasharray="3 2.5" />
        </g>
      `;
    }

    wrap.innerHTML = `
      <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
        ${shapeContent}
        <g class="pc-svg-layer-top">
          <text x="${width / 2}" y="${height / 2 + 1}" text-anchor="middle" dominant-baseline="central"
                fill="${pal.ink}" font-size="13.5" font-weight="700" letter-spacing="-0.2px">
            ${label}
          </text>
          <rect class="pc-svg-focus-ring" x="1" y="1" width="${width - 2}" height="${height - 6}" rx="13"
                fill="none" stroke="transparent" stroke-width="1.5" opacity="0" />
        </g>
      </svg>
    `;

    function trigger() {
      if (typeof onClick === 'function') onClick();
      wrap.dispatchEvent(new CustomEvent('pc-svg-click', { bubbles: true, detail: { tone, label } }));
    }

    wrap.addEventListener('click', trigger);
    wrap.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        trigger();
      }
    });

    return wrap;
  }

  // -------------------------------------------------------------------------
  // 2. SWITCH (Sliding Paper Shutter Switch)
  // -------------------------------------------------------------------------
  function createSwitch(opts = {}) {
    ensureMasterDefs();
    const {
      checked = false,
      tone = 'mint',
      label = '종이 셔터 스위치',
      onChange = null
    } = opts;

    let isChecked = Boolean(checked);
    const pal = getPalette(tone);

    const wrap = document.createElement('div');
    wrap.className = `pc-svg-component pc-svg-switch pc-svg-switch--${tone}`;
    wrap.setAttribute('role', 'switch');
    wrap.setAttribute('tabindex', '0');
    wrap.setAttribute('aria-checked', String(isChecked));
    wrap.setAttribute('aria-label', label);

    const width = 56;
    const height = 32;

    function render() {
      wrap.innerHTML = `
        <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
          <!-- 트랙 베이스 (음각 도화지 홈) -->
          <rect x="2" y="2" width="${width - 4}" height="${height - 4}" rx="14"
                fill="#EAE2D4" stroke="rgba(46,30,20,0.18)" stroke-width="1.2"
                filter="url(#pc-filter-cutout-inset)" />

          <!-- Active 상태 시 드러나는 파스텔 색지 (Sliding Underlay) -->
          <rect class="pc-svg-switch-active-bg" x="2" y="2" width="${width - 4}" height="${height - 4}" rx="14"
                fill="${pal.dark}" stroke="${pal.border}" stroke-width="1" />

          <!-- 슬라이딩 종이 셔터 썸 (Craft Paper Shutter Thumb) -->
          <g class="pc-svg-switch-shutter">
            <!-- 썸 밑판 그림자 -->
            <circle cx="16" cy="16" r="10" fill="#E6DAC8" filter="url(#pc-filter-contact-shadow)" />
            <!-- 썸 본체 (크림 카드스톡) -->
            <circle cx="16" cy="16" r="10" fill="#FFFDF9" stroke="rgba(46,30,20,0.14)" stroke-width="1" />
            <!-- 썸 상단 순백 나이프 엣지 -->
            <path d="M 9 12 A 8 8 0 0 1 23 12" stroke="#FFFFFF" stroke-width="1.2" fill="none" />
            <!-- 썸 중심 원형 미싱 엠보싱 -->
            <circle cx="16" cy="16" r="5" fill="none" stroke="rgba(46,30,20,0.16)" stroke-width="0.8" stroke-dasharray="2 1.5" />
          </g>

          <!-- 포커스 링 -->
          <rect class="pc-svg-focus-ring" x="1" y="1" width="${width - 2}" height="${height - 2}" rx="15"
                fill="none" stroke="transparent" opacity="0" />
        </svg>
      `;
    }

    render();

    function toggle() {
      isChecked = !isChecked;
      wrap.setAttribute('aria-checked', String(isChecked));
      if (typeof onChange === 'function') onChange(isChecked);
      wrap.dispatchEvent(new CustomEvent('pc-svg-change', { bubbles: true, detail: { checked: isChecked } }));
    }

    wrap.addEventListener('click', toggle);
    wrap.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        toggle();
      }
    });

    return wrap;
  }

  // -------------------------------------------------------------------------
  // 3. CHECKBOX (Paper Stamp Seal Checkbox)
  // -------------------------------------------------------------------------
  function createCheckbox(opts = {}) {
    ensureMasterDefs();
    const {
      checked = false,
      tone = 'mint',
      label = '스탬프 체크박스',
      onChange = null
    } = opts;

    let isChecked = Boolean(checked);
    const pal = getPalette(tone);

    const wrap = document.createElement('div');
    wrap.className = `pc-svg-component pc-svg-checkbox pc-svg-checkbox--${tone}`;
    wrap.setAttribute('role', 'checkbox');
    wrap.setAttribute('tabindex', '0');
    wrap.setAttribute('aria-checked', String(isChecked));
    wrap.setAttribute('aria-label', label);

    const size = 26;

    wrap.innerHTML = `
      <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
        <!-- 300g 우표 인장 사각형 베이스 -->
        <rect x="2" y="3" width="${size - 4}" height="${size - 5}" rx="6"
              fill="#EFE8DC" filter="url(#pc-filter-contact-shadow)" />
        <rect x="2" y="2" width="${size - 4}" height="${size - 5}" rx="6"
              fill="#FFFDF9" stroke="rgba(46,30,20,0.18)" stroke-width="1.2" />
        <path d="M 5 3 L ${size - 5} 3" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" />

        <!-- 미싱 점선 프레임 -->
        <rect x="4" y="4" width="${size - 8}" height="${size - 9}" rx="4"
              fill="none" stroke="rgba(46,30,20,0.15)" stroke-width="0.8" stroke-dasharray="2 1.5" />

        <!-- 다층 파스텔 V자 체크마크 (Checkmark Stamp) -->
        <g class="pc-svg-check-mark">
          <rect x="3" y="3" width="${size - 6}" height="${size - 7}" rx="5" fill="${pal.dark}" />
          <!-- 나이프 컷 V자 체크 벡터 -->
          <path d="M 7 13 L 11 17 L 19 8" fill="none" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
        </g>

        <!-- 포커스 링 -->
        <rect class="pc-svg-focus-ring" x="1" y="1" width="${size - 2}" height="${size - 3}" rx="7"
              fill="none" stroke="transparent" opacity="0" />
      </svg>
    `;

    function toggle() {
      isChecked = !isChecked;
      wrap.setAttribute('aria-checked', String(isChecked));
      if (typeof onChange === 'function') onChange(isChecked);
      wrap.dispatchEvent(new CustomEvent('pc-svg-change', { bubbles: true, detail: { checked: isChecked } }));
    }

    wrap.addEventListener('click', toggle);
    wrap.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        toggle();
      }
    });

    return wrap;
  }

  // -------------------------------------------------------------------------
  // 4. RADIO GROUP & ITEM (Folded Disc Tile Radio)
  // -------------------------------------------------------------------------
  function createRadioGroup(opts = {}) {
    ensureMasterDefs();
    const {
      name = 'pc-radio-group',
      options = [
        { value: 'option1', label: '1단 수제 코튼지' },
        { value: 'option2', label: '2단 닥나무 한지' },
        { value: 'option3', label: '3단 크래프트 패키징' }
      ],
      value = 'option1',
      tone = 'peach',
      onChange = null
    } = opts;

    let currentValue = value;
    const pal = getPalette(tone);

    const group = document.createElement('div');
    group.className = 'pc-svg-radio-group';
    group.setAttribute('role', 'radiogroup');
    group.style.display = 'flex';
    group.style.flexDirection = 'column';
    group.style.gap = '12px';

    options.forEach(opt => {
      const isChecked = (opt.value === currentValue);
      const item = document.createElement('div');
      item.className = 'pc-svg-component pc-svg-radio-item';
      item.setAttribute('role', 'radio');
      item.setAttribute('tabindex', isChecked ? '0' : '-1');
      item.setAttribute('aria-checked', String(isChecked));
      item.setAttribute('data-value', opt.value);

      const size = 24;
      item.innerHTML = `
        <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
          <!-- 원형 인장 밑판 -->
          <circle cx="12" cy="13" r="10" fill="#EAE0D2" filter="url(#pc-filter-contact-shadow)" />
          <circle cx="12" cy="12" r="10" fill="#FFFDF9" stroke="rgba(46,30,20,0.18)" stroke-width="1.2" />
          <path d="M 6 8 A 8 8 0 0 1 18 8" stroke="#FFFFFF" stroke-width="1.2" fill="none" />
          <circle cx="12" cy="12" r="7.5" fill="none" stroke="rgba(46,30,20,0.14)" stroke-width="0.8" stroke-dasharray="2 1.5" />

          <!-- 체크 인장 원형 도장 (Radio Pip) -->
          <g class="pc-svg-radio-pip">
            <circle cx="12" cy="12" r="5.5" fill="${pal.dark}" />
            <circle cx="12" cy="12" r="2.5" fill="#FFFFFF" />
          </g>

          <!-- 포커스 링 -->
          <circle class="pc-svg-focus-ring" cx="12" cy="12" r="11" fill="none" stroke="transparent" opacity="0" />
        </svg>
        <span style="font-size: 14px; font-weight: 700; color: #2E1E14;">${opt.label}</span>
      `;

      item.addEventListener('click', () => {
        selectValue(opt.value);
      });

      group.appendChild(item);
    });

    function selectValue(newVal) {
      currentValue = newVal;
      const items = group.querySelectorAll('.pc-svg-radio-item');
      items.forEach(el => {
        const checked = (el.getAttribute('data-value') === currentValue);
        el.setAttribute('aria-checked', String(checked));
        el.setAttribute('tabindex', checked ? '0' : '-1');
      });
      if (typeof onChange === 'function') onChange(currentValue);
      group.dispatchEvent(new CustomEvent('pc-svg-change', { bubbles: true, detail: { value: currentValue } }));
    }

    group.addEventListener('keydown', (e) => {
      const items = Array.from(group.querySelectorAll('.pc-svg-radio-item'));
      const idx = items.findIndex(el => el.getAttribute('data-value') === currentValue);
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        const nextIdx = (idx + 1) % items.length;
        selectValue(items[nextIdx].getAttribute('data-value'));
        items[nextIdx].focus();
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const prevIdx = (idx - 1 + items.length) % items.length;
        selectValue(items[prevIdx].getAttribute('data-value'));
        items[prevIdx].focus();
      }
    });

    return group;
  }

  // -------------------------------------------------------------------------
  // 5. SLIDER (Carved Paper Slit Track & Thumb)
  // -------------------------------------------------------------------------
  function createSlider(opts = {}) {
    ensureMasterDefs();
    const {
      min = 0,
      max = 100,
      value = 50,
      tone = 'sand',
      width = 240,
      onChange = null
    } = opts;

    let curVal = Math.min(max, Math.max(min, value));
    const pal = getPalette(tone);

    const wrap = document.createElement('div');
    wrap.className = `pc-svg-component pc-svg-slider pc-svg-slider--${tone}`;
    wrap.setAttribute('role', 'slider');
    wrap.setAttribute('tabindex', '0');
    wrap.setAttribute('aria-valuemin', String(min));
    wrap.setAttribute('aria-valuemax', String(max));
    wrap.setAttribute('aria-valuenow', String(curVal));

    const height = 36;
    const trackPad = 16;
    const trackWidth = width - (trackPad * 2);

    function getThumbX(v) {
      const ratio = (v - min) / (max - min);
      return trackPad + (ratio * trackWidth);
    }

    function render() {
      const thumbX = getThumbX(curVal);
      wrap.innerHTML = `
        <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
          <!-- 음각 조각칼 슬릿 트랙 (Carved Slit Track) -->
          <rect x="${trackPad}" y="14" width="${trackWidth}" height="8" rx="4"
                fill="#E8DFD0" stroke="rgba(46,30,20,0.18)" stroke-width="1.2"
                filter="url(#pc-filter-cutout-inset)" />

          <!-- 채워진 파스텔 종이 스트립 (Filled Paper Track) -->
          <rect x="${trackPad}" y="14" width="${thumbX - trackPad}" height="8" rx="4"
                fill="${pal.dark}" />

          <!-- 미끄러지는 3D 종이 썸 (Sliding Papercraft Thumb) -->
          <g class="pc-svg-slider-thumb" transform="translate(${thumbX}, 18)">
            <!-- 밑판 그림자 -->
            <rect x="-10" y="-9" width="20" height="22" rx="6" fill="#D5C7B4" filter="url(#pc-filter-contact-shadow)" />
            <!-- 썸 본체 -->
            <rect x="-10" y="-11" width="20" height="22" rx="6" fill="#FFFDF9" stroke="${pal.border}" stroke-width="1.2" />
            <path d="M -7 -10 L 7 -10" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" />
            <!-- 중앙 펀칭 홀 -->
            <circle cx="0" cy="0" r="3" fill="${pal.dark}" />
          </g>

          <!-- 포커스 링 -->
          <rect class="pc-svg-focus-ring" x="2" y="4" width="${width - 4}" height="${height - 8}" rx="8"
                fill="none" stroke="transparent" opacity="0" />
        </svg>
      `;
    }

    render();

    function updateFromPointer(clientX) {
      const rect = wrap.getBoundingClientRect();
      const x = clientX - rect.left - trackPad;
      const ratio = Math.min(1, Math.max(0, x / trackWidth));
      curVal = Math.round(min + ratio * (max - min));
      wrap.setAttribute('aria-valuenow', String(curVal));
      render();
      if (typeof onChange === 'function') onChange(curVal);
      wrap.dispatchEvent(new CustomEvent('pc-svg-change', { bubbles: true, detail: { value: curVal } }));
    }

    let isDragging = false;
    wrap.addEventListener('pointerdown', (e) => {
      isDragging = true;
      wrap.classList.add('is-dragging');
      wrap.setPointerCapture(e.pointerId);
      updateFromPointer(e.clientX);
    });

    wrap.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      updateFromPointer(e.clientX);
    });

    wrap.addEventListener('pointerup', (e) => {
      if (!isDragging) return;
      isDragging = false;
      wrap.classList.remove('is-dragging');
      wrap.releasePointerCapture(e.pointerId);
    });

    wrap.addEventListener('keydown', (e) => {
      let step = (max - min) / 20 || 1;
      if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
        e.preventDefault();
        curVal = Math.min(max, curVal + step);
        wrap.setAttribute('aria-valuenow', String(curVal));
        render();
        if (typeof onChange === 'function') onChange(curVal);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
        e.preventDefault();
        curVal = Math.max(min, curVal - step);
        wrap.setAttribute('aria-valuenow', String(curVal));
        render();
        if (typeof onChange === 'function') onChange(curVal);
      }
    });

    return wrap;
  }

  // -------------------------------------------------------------------------
  // 6. ACCORDION (Creased Folded Paper Flap)
  // -------------------------------------------------------------------------
  function createAccordion(opts = {}) {
    ensureMasterDefs();
    const {
      items = [
        { id: 'acc1', title: '01. 다층 종이 적층 기법', content: '300g 코튼 카드스톡을 조각칼로 정밀 절단하여 2~4층의 물리적 단차를 형성합니다.' },
        { id: 'acc2', title: '02. 2-Tier 번트 엄버 그림자', content: '현실의 종이 층위 사이로 비쳐 나오는 따스한 번트 엄버 접촉 그림자를 수학적으로 계산합니다.' },
        { id: 'acc3', title: '03. 0.88px 순백 칼선 림 라이트', content: '칼날이 수직 90도로 종이를 가를 때 생기는 순백 절단면 반사광을 시뮬레이션합니다.' }
      ],
      tone = 'lavender'
    } = opts;

    const pal = getPalette(tone);
    const container = document.createElement('div');
    container.className = 'pc-svg-accordion';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '12px';
    container.style.width = '100%';
    container.style.maxWidth = '460px';

    items.forEach((itemData, idx) => {
      const item = document.createElement('div');
      item.className = 'pc-svg-accordion-item';
      item.setAttribute('data-state', idx === 0 ? 'open' : 'closed');

      const trigger = document.createElement('div');
      trigger.className = 'pc-svg-component pc-svg-accordion-trigger';
      trigger.setAttribute('role', 'button');
      trigger.setAttribute('tabindex', '0');
      trigger.setAttribute('aria-expanded', idx === 0 ? 'true' : 'false');

      const width = 460;
      const height = 48;

      trigger.innerHTML = `
        <svg width="100%" height="${height}" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none">
          <!-- 헤더 플랩 베이스 -->
          <rect x="2" y="4" width="${width - 4}" height="${height - 6}" rx="10"
                fill="#E8DFD2" filter="url(#pc-filter-contact-shadow)" />
          <rect x="2" y="2" width="${width - 4}" height="${height - 6}" rx="10"
                fill="${pal.bg}" stroke="${pal.border}" stroke-width="1.2" />
          <path d="M 12 3 L ${width - 12} 3" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" />
          
          <!-- 미싱 점선 프레임 -->
          <rect x="6" y="6" width="${width - 12}" height="${height - 14}" rx="7"
                fill="none" stroke="rgba(46,30,20,0.12)" stroke-width="0.8" stroke-dasharray="3 2" />

          <!-- 제목 텍스트 -->
          <text x="20" y="${height / 2 + 1}" dominant-baseline="central"
                fill="${pal.ink}" font-size="14.5" font-weight="700">
            ${itemData.title}
          </text>

          <!-- 접힘 화살표 (Chevron) -->
          <g class="pc-svg-chevron" transform="translate(${width - 28}, ${height / 2})">
            <circle cx="0" cy="0" r="10" fill="#FFFDF9" stroke="${pal.border}" stroke-width="1" />
            <path d="M -4 -2 L 0 3 L 4 -2" fill="none" stroke="${pal.ink}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
          </g>
        </svg>
      `;

      const content = document.createElement('div');
      content.className = 'pc-svg-accordion-content';
      content.innerHTML = `
        <div style="padding: 16px 20px; background: #FFFDF9; border: 1px solid rgba(46,30,20,0.10); border-top: none; border-radius: 0 0 10px 10px; font-size: 13.5px; color: #5C4D3E; line-height: 1.6; box-shadow: 0 4px 10px rgba(46,30,20,0.06);">
          ${itemData.content}
        </div>
      `;

      function toggle() {
        const isOpen = item.getAttribute('data-state') === 'open';
        item.setAttribute('data-state', isOpen ? 'closed' : 'open');
        trigger.setAttribute('aria-expanded', String(!isOpen));
      }

      trigger.addEventListener('click', toggle);
      trigger.addEventListener('keydown', (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          toggle();
        }
      });

      item.appendChild(trigger);
      item.appendChild(content);
      container.appendChild(item);
    });

    return container;
  }

  // -------------------------------------------------------------------------
  // 7. TABS (File Folder Manila Index Tabs)
  // -------------------------------------------------------------------------
  function createTabs(opts = {}) {
    ensureMasterDefs();
    const {
      tabs = [
        { id: 'tab-overview', label: '개요 & 철학', content: 'Radix UI의 견고한 접근성과 WAI-ARIA 시맨틱스를 100% 보존하면서, 모든 비주얼을 순수 SVG 페이퍼아트로 승화시켰습니다.' },
        { id: 'tab-layers', label: '다층 종이 레이어', content: '수제 300g 카드스톡과 350g 밑판 마운트 보드가 실제로 겹쳐지며 자연스러운 단차와 깊이감을 자아냅니다.' },
        { id: 'tab-textures', label: '섬유 텍스처', content: 'SVG 노이즈 필터로 생성된 닥나무/코튼 펄프의 오돌토돌한 촉감이 디지털 화면 위에 따스함을 전합니다.' }
      ],
      defaultTab = 'tab-overview',
      tone = 'sky'
    } = opts;

    let activeTabId = defaultTab;
    const pal = getPalette(tone);

    const wrap = document.createElement('div');
    wrap.className = 'pc-svg-tabs-container';
    wrap.style.width = '100%';
    wrap.style.maxWidth = '520px';

    const tabsList = document.createElement('div');
    tabsList.className = 'pc-svg-tabs-list';
    tabsList.setAttribute('role', 'tablist');

    const tabWidth = 140;
    const tabHeight = 38;

    tabs.forEach((t) => {
      const isSelected = (t.id === activeTabId);
      const tabBtn = document.createElement('div');
      tabBtn.className = 'pc-svg-component pc-svg-tab-trigger';
      tabBtn.setAttribute('role', 'tab');
      tabBtn.setAttribute('tabindex', isSelected ? '0' : '-1');
      tabBtn.setAttribute('aria-selected', String(isSelected));
      tabBtn.setAttribute('data-tab-id', t.id);

      tabBtn.innerHTML = `
        <svg width="${tabWidth}" height="${tabHeight}" viewBox="0 0 ${tabWidth} ${tabHeight}">
          <!-- 서류철 인덱스 사다리꼴 탭 (Manila File Folder Tab) -->
          <path d="M 6 36 L 14 6 C 16 3 20 2 24 2 L ${tabWidth - 24} 2 C ${tabWidth - 20} 2 ${tabWidth - 16} 3 ${tabWidth - 14} 6 L ${tabWidth - 6} 36 Z"
                fill="${isSelected ? pal.bg : '#EFE7DA'}" stroke="${pal.border}" stroke-width="1.2"
                filter="url(#pc-filter-contact-shadow)" />
          <path d="M 22 3 L ${tabWidth - 22} 3" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" />
          
          <text x="${tabWidth / 2}" y="${tabHeight / 2 + 3}" text-anchor="middle" dominant-baseline="central"
                fill="${pal.ink}" font-size="13" font-weight="700">
            ${t.label}
          </text>
        </svg>
      `;

      tabBtn.addEventListener('click', () => switchTab(t.id));
      tabsList.appendChild(tabBtn);
    });

    const panelsContainer = document.createElement('div');
    panelsContainer.style.background = pal.bg;
    panelsContainer.style.border = `1.5px solid ${pal.border}`;
    panelsContainer.style.borderRadius = '0 16px 16px 16px';
    panelsContainer.style.padding = '24px';
    panelsContainer.style.boxShadow = '0 8px 24px rgba(46,30,20,0.12)';
    panelsContainer.style.position = 'relative';

    tabs.forEach((t) => {
      const panel = document.createElement('div');
      panel.className = 'pc-svg-tab-panel';
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('id', `panel-${t.id}`);
      panel.setAttribute('data-state', t.id === activeTabId ? 'active' : 'inactive');
      panel.innerHTML = `
        <h4 style="margin: 0 0 8px; font-size: 16px; font-weight: 800; color: ${pal.ink};">${t.label}</h4>
        <p style="margin: 0; font-size: 14px; color: #4A3A2C; line-height: 1.6;">${t.content}</p>
      `;
      panelsContainer.appendChild(panel);
    });

    function switchTab(id) {
      activeTabId = id;
      const triggers = tabsList.querySelectorAll('.pc-svg-tab-trigger');
      triggers.forEach(el => {
        const sel = el.getAttribute('data-tab-id') === activeTabId;
        el.setAttribute('aria-selected', String(sel));
        el.setAttribute('tabindex', sel ? '0' : '-1');
        const path = el.querySelector('path');
        if (path) path.setAttribute('fill', sel ? pal.bg : '#EFE7DA');
      });

      const panels = panelsContainer.querySelectorAll('.pc-svg-tab-panel');
      panels.forEach(p => {
        p.setAttribute('data-state', p.id === `panel-${activeTabId}` ? 'active' : 'inactive');
      });
    }

    wrap.appendChild(tabsList);
    wrap.appendChild(panelsContainer);
    return wrap;
  }

  // -------------------------------------------------------------------------
  // 8. CARD (Craft Die-Cut Multi-Layer Card)
  // -------------------------------------------------------------------------
  function createCard(opts = {}) {
    ensureMasterDefs();
    const {
      title = '페이퍼 컷팅 카드',
      subtitle = 'Handcrafted 300g Cardstock',
      content = '나이프 엣지 칼선과 듀오톤 밑판이 정교하게 어우러진 순수 SVG 카드입니다.',
      tone = 'mint',
      diecut = 'ticket', // 'ticket' | 'stamp' | 'smooth'
      width = 320,
      height = 200
    } = opts;

    const pal = getPalette(tone);
    const wrap = document.createElement('div');
    wrap.className = `pc-svg-component pc-svg-card pc-svg-card--${tone}`;
    wrap.style.width = `${width}px`;

    // 티켓 노치 또는 우표 천공 다이컷 패스 생성
    let pathD = '';
    if (diecut === 'ticket') {
      pathD = `
        M 16 2
        L ${width - 16} 2
        A 14 14 0 0 1 ${width - 2} 16
        L ${width - 2} ${height / 2 - 14}
        A 14 14 0 0 0 ${width - 2} ${height / 2 + 14}
        L ${width - 2} ${height - 16}
        A 14 14 0 0 1 ${width - 16} ${height - 2}
        L 16 ${height - 2}
        A 14 14 0 0 1 2 ${height - 16}
        L 2 ${height / 2 + 14}
        A 14 14 0 0 0 2 ${height / 2 - 14}
        L 2 16
        A 14 14 0 0 1 16 2 Z
      `;
    } else {
      pathD = `
        M 16 2
        H ${width - 16}
        A 14 14 0 0 1 ${width - 2} 16
        V ${height - 16}
        A 14 14 0 0 1 ${width - 16} ${height - 2}
        H 16
        A 14 14 0 0 1 2 ${height - 16}
        V 16
        A 14 14 0 0 1 16 2 Z
      `;
    }

    wrap.innerHTML = `
      <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
        <!-- Layer 0: 350g 밑판 마운트 보드 -->
        <g transform="translate(0, 4)">
          <path d="${pathD}" fill="#E8DFD0" filter="url(#pc-filter-contact-shadow)" />
        </g>

        <!-- Layer 1: 카드 본체 -->
        <path d="${pathD}" fill="#FFFDF9" stroke="${pal.border}" stroke-width="1.2" />
        <path d="M 20 3 L ${width - 20} 3" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" />

        <!-- 수공예 미싱 점선 인셋 -->
        <rect x="14" y="14" width="${width - 28}" height="${height - 28}" rx="10"
              fill="none" stroke="rgba(46,30,20,0.12)" stroke-width="1" stroke-dasharray="3 2.5" />

        <!-- 상단 헤더 리본 태그 -->
        <rect x="24" y="24" width="80" height="20" rx="4" fill="${pal.dark}" />
        <text x="64" y="34.5" text-anchor="middle" dominant-baseline="central"
              fill="#FFFFFF" font-size="10.5" font-weight="800">
          ${subtitle}
        </text>

        <!-- 타이틀 & 본문 텍스트 -->
        <text x="24" y="72" fill="${pal.ink}" font-size="18" font-weight="800">
          ${title}
        </text>
        <foreignObject x="24" y="86" width="${width - 48}" height="90">
          <p xmlns="http://www.w3.org/1999/xhtml" style="margin: 0; font-size: 13.5px; color: #5C4D3E; line-height: 1.5; font-family: inherit;">
            ${content}
          </p>
        </foreignObject>
      </svg>
    `;

    return wrap;
  }

  // -------------------------------------------------------------------------
  // 9. DIALOG (Shadowbox Modal Window)
  // -------------------------------------------------------------------------
  function createDialog(opts = {}) {
    ensureMasterDefs();
    const {
      title = '섀도우박스 모달 다이얼로그',
      description = '도화지를 깊숙이 오려내어 아래쪽 레이어가 들여다보이는 종이 공예 창문입니다.',
      confirmText = '확인',
      cancelText = '취소',
      tone = 'peach',
      onConfirm = null
    } = opts;

    const pal = getPalette(tone);
    const backdrop = document.createElement('div');
    backdrop.className = 'pc-svg-dialog-backdrop';
    backdrop.setAttribute('data-state', 'closed');

    const width = 420;
    const height = 240;

    backdrop.innerHTML = `
      <div class="pc-svg-dialog-content" role="dialog" aria-modal="true" aria-labelledby="pc-dialog-title">
        <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
          <!-- 섀도우박스 깊은 그림자 -->
          <rect x="4" y="6" width="${width - 8}" height="${height - 12}" rx="18"
                fill="#EAE0D2" filter="url(#pc-filter-depth-shadow)" />

          <!-- 다층 외곽 프레임 (350g Mat Board Frame) -->
          <rect x="4" y="4" width="${width - 8}" height="${height - 12}" rx="18"
                fill="#FAF6ED" stroke="rgba(46,30,20,0.18)" stroke-width="1.5" />

          <!-- 내부 페이스 시트 (Cutout Inner Well) -->
          <rect x="14" y="14" width="${width - 28}" height="${height - 32}" rx="12"
                fill="#FFFDF9" stroke="${pal.border}" stroke-width="1.2" />

          <!-- 상단 순백 림 라이트 -->
          <path d="M 24 15 L ${width - 24} 15" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" />

          <!-- 미싱선 스티칭 -->
          <rect x="20" y="20" width="${width - 40}" height="${height - 44}" rx="8"
                fill="none" stroke="rgba(46,30,20,0.12)" stroke-width="1" stroke-dasharray="3 2" />

          <!-- 상단 펀칭 태그 배지 -->
          <rect x="32" y="28" width="60" height="18" rx="4" fill="${pal.dark}" />
          <text x="62" y="37.5" text-anchor="middle" dominant-baseline="central"
                fill="#FFFFFF" font-size="9.5" font-weight="800">
            DIALOG
          </text>

          <text id="pc-dialog-title" x="32" y="68" fill="${pal.ink}" font-size="17" font-weight="800">
            ${title}
          </text>
        </svg>

        <div style="position: absolute; top: 82px; left: 32px; right: 32px; font-size: 13.5px; color: #5C4D3E; line-height: 1.5;">
          ${description}
        </div>

        <div style="position: absolute; bottom: 26px; right: 32px; display: flex; gap: 10px;">
          <button type="button" class="pc-dialog-cancel-btn" style="padding: 7px 16px; border-radius: 8px; border: 1px solid rgba(46,30,20,0.18); background: #FAF7F0; font-size: 13px; font-weight: 700; color: #5C4D3E; cursor: pointer;">
            ${cancelText}
          </button>
          <button type="button" class="pc-dialog-confirm-btn" style="padding: 7px 18px; border-radius: 8px; border: 1px solid ${pal.border}; background: ${pal.dark}; font-size: 13px; font-weight: 700; color: #FFFFFF; cursor: pointer; box-shadow: 0 2px 6px rgba(46,30,20,0.2);">
            ${confirmText}
          </button>
        </div>
      </div>
    `;

    function open() {
      backdrop.setAttribute('data-state', 'open');
    }

    function close() {
      backdrop.setAttribute('data-state', 'closed');
    }

    backdrop.querySelector('.pc-dialog-cancel-btn').addEventListener('click', close);
    backdrop.querySelector('.pc-dialog-confirm-btn').addEventListener('click', () => {
      if (typeof onConfirm === 'function') onConfirm();
      close();
    });

    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) close();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && backdrop.getAttribute('data-state') === 'open') {
        close();
      }
    });

    document.body.appendChild(backdrop);
    const triggerBtn = createButton({
      label: opts.triggerLabel || '모달 다이얼로그 열기',
      tone: tone,
      variant: 'ticket',
      width: 160,
      onClick: open
    });
    triggerBtn.open = open;
    triggerBtn.close = close;
    triggerBtn.element = backdrop;
    return triggerBtn;
  }

  // -------------------------------------------------------------------------
  // 10. PROGRESS (Recessed Paper Trench Gauge)
  // -------------------------------------------------------------------------
  function createProgress(opts = {}) {
    ensureMasterDefs();
    const {
      value = 65,
      max = 100,
      tone = 'mint',
      width = 280,
      height = 20
    } = opts;

    const pal = getPalette(tone);
    const wrap = document.createElement('div');
    wrap.className = `pc-svg-component pc-svg-progress pc-svg-progress--${tone}`;
    wrap.setAttribute('role', 'progressbar');
    wrap.setAttribute('aria-valuemin', '0');
    wrap.setAttribute('aria-valuemax', String(max));
    wrap.setAttribute('aria-valuenow', String(value));

    const ratio = Math.min(1, Math.max(0, value / max));
    const fillWidth = (width - 4) * ratio;

    wrap.innerHTML = `
      <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
        <!-- 음각 도화지 트렌치 홈 -->
        <rect x="2" y="2" width="${width - 4}" height="${height - 4}" rx="${(height - 4) / 2}"
              fill="#ECE4D6" stroke="rgba(46,30,20,0.18)" stroke-width="1.2"
              filter="url(#pc-filter-cutout-inset)" />

        <!-- 채워진 파스텔 색지 게이지 -->
        <rect class="pc-svg-progress-bar" x="2" y="2" width="${fillWidth}" height="${height - 4}" rx="${(height - 4) / 2}"
              fill="${pal.dark}" stroke="${pal.border}" stroke-width="0.8" />
        <path d="M 6 3 L ${Math.max(6, fillWidth - 6)} 3" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" />
      </svg>
    `;

    function setValue(newVal) {
      const r = Math.min(1, Math.max(0, newVal / max));
      wrap.setAttribute('aria-valuenow', String(newVal));
      const bar = wrap.querySelector('.pc-svg-progress-bar');
      if (bar) bar.setAttribute('width', String((width - 4) * r));
    }

    wrap.setValue = setValue;
    wrap.element = wrap;
    return wrap;
  }

  // -------------------------------------------------------------------------
  // 11. TOOLTIP & POPOVER (Cutout Paper Tag with Tail)
  // -------------------------------------------------------------------------
  function createTooltip(opts = {}) {
    ensureMasterDefs();
    const {
      text = '종이 꼬리표 툴팁',
      tone = 'peach',
      target = null
    } = opts;

    const pal = getPalette(tone);
    const bubble = document.createElement('div');
    bubble.className = 'pc-svg-tooltip-bubble';

    const width = 140;
    const height = 40;

    bubble.innerHTML = `
      <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
        <!-- 꼬리표 붙은 말풍선 종이 태그 패스 -->
        <path d="
          M 10 2
          H ${width - 10}
          A 8 8 0 0 1 ${width - 2} 10
          V 24
          A 8 8 0 0 1 ${width - 10} 32
          H ${width / 2 + 6}
          L ${width / 2} 38
          L ${width / 2 - 6} 32
          H 10
          A 8 8 0 0 1 2 24
          V 10
          A 8 8 0 0 1 10 2 Z
        " fill="${pal.bg}" stroke="${pal.border}" stroke-width="1.2"
          filter="url(#pc-filter-contact-shadow)" />

        <text x="${width / 2}" y="17" text-anchor="middle" dominant-baseline="central"
              fill="${pal.ink}" font-size="12" font-weight="700">
          ${text}
        </text>
      </svg>
    `;

    return bubble;
  }

  // -------------------------------------------------------------------------
  // 12. SELECT (Fanned Paper Swatch Dropdown)
  // -------------------------------------------------------------------------
  function createSelect(opts = {}) {
    ensureMasterDefs();
    const {
      options = [
        { value: '300g-cotton', label: '300g 수제 코튼지' },
        { value: '250g-hanji', label: '250g 닥나무 전통 한지' },
        { value: '350g-kraft', label: '350g 크래프트 패키징' }
      ],
      value = '300g-cotton',
      tone = 'sand',
      onChange = null,
      width = 220
    } = opts;

    let curVal = value;
    const pal = getPalette(tone);

    const wrap = document.createElement('div');
    wrap.className = `pc-svg-component pc-svg-select pc-svg-select--${tone}`;
    wrap.setAttribute('data-state', 'closed');
    wrap.style.width = `${width}px`;

    const selectedOpt = options.find(o => o.value === curVal) || options[0];

    const trigger = document.createElement('div');
    trigger.className = 'pc-svg-select-trigger';
    trigger.setAttribute('role', 'combobox');
    trigger.setAttribute('tabindex', '0');
    trigger.setAttribute('aria-expanded', 'false');

    const h = 42;
    trigger.innerHTML = `
      <svg width="${width}" height="${h}" viewBox="0 0 ${width} ${h}">
        <rect x="2" y="4" width="${width - 4}" height="${h - 6}" rx="10"
              fill="#E8DFD0" filter="url(#pc-filter-contact-shadow)" />
        <rect x="2" y="2" width="${width - 4}" height="${h - 6}" rx="10"
              fill="#FFFDF9" stroke="${pal.border}" stroke-width="1.2" />
        <path d="M 12 3 L ${width - 12} 3" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" />

        <text class="pc-svg-select-label" x="16" y="${h / 2 + 1}" dominant-baseline="central"
              fill="${pal.ink}" font-size="13.5" font-weight="700">
          ${selectedOpt.label}
        </text>

        <!-- 화살표 -->
        <path d="M ${width - 24} 18 L ${width - 18} 24 L ${width - 12} 18" fill="none" stroke="${pal.ink}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    `;

    const dropdown = document.createElement('div');
    dropdown.className = 'pc-svg-select-dropdown';
    dropdown.setAttribute('role', 'listbox');
    dropdown.style.background = '#FFFDF9';
    dropdown.style.border = `1.2px solid ${pal.border}`;
    dropdown.style.borderRadius = '10px';
    dropdown.style.padding = '6px';
    dropdown.style.boxShadow = '0 10px 26px rgba(46,30,20,0.18)';

    options.forEach(opt => {
      const row = document.createElement('div');
      row.className = 'pc-svg-select-option';
      row.setAttribute('role', 'option');
      row.setAttribute('aria-selected', String(opt.value === curVal));
      row.style.padding = '8px 12px';
      row.style.borderRadius = '6px';
      row.style.fontSize = '13px';
      row.style.fontWeight = '700';
      row.style.color = pal.ink;
      row.innerText = opt.label;

      row.addEventListener('click', (e) => {
        e.stopPropagation();
        curVal = opt.value;
        trigger.querySelector('.pc-svg-select-label').textContent = opt.label;
        dropdown.querySelectorAll('.pc-svg-select-option').forEach(r => r.setAttribute('aria-selected', 'false'));
        row.setAttribute('aria-selected', 'true');
        close();
        if (typeof onChange === 'function') onChange(curVal);
      });

      dropdown.appendChild(row);
    });

    function toggle() {
      const isOpen = wrap.getAttribute('data-state') === 'open';
      if (isOpen) close();
      else open();
    }

    function open() {
      wrap.setAttribute('data-state', 'open');
      trigger.setAttribute('aria-expanded', 'true');
    }

    function close() {
      wrap.setAttribute('data-state', 'closed');
      trigger.setAttribute('aria-expanded', 'false');
    }

    trigger.addEventListener('click', toggle);
    document.addEventListener('click', (e) => {
      if (!wrap.contains(e.target)) close();
    });

    wrap.appendChild(trigger);
    wrap.appendChild(dropdown);
    return wrap;
  }

  // -------------------------------------------------------------------------
  // 13. BADGE (Pure SVG Multi-Layer Die-Cut Paper Badge)
  // -------------------------------------------------------------------------
  function createBadge(opts = {}) {
    ensureMasterDefs();
    const {
      label = '종이 배지',
      tone = 'mint',
      variant = 'stamp', // 'stamp', 'ticket', 'pill', 'scallop', 'ribbon', 'deckle'
      icon = null
    } = opts;
    const pal = getPalette(tone);
    const wrap = document.createElement('span');
    wrap.className = `pc-svg-component pc-svg-badge pc-svg-badge--${tone} pc-svg-badge--${variant}`;
    wrap.setAttribute('role', 'status');

    const width = Math.max(92, label.length * 12 + 36);
    const height = 28;

    let shapeMarkup = '';
    if (variant === 'ticket') {
      shapeMarkup = `
        <path d="M 3 3 H ${width - 3} V 9 A 3.5 3.5 0 0 0 ${width - 3} 19 V 25 H 3 V 19 A 3.5 3.5 0 0 0 3 9 Z"
              fill="${pal.bg}" stroke="${pal.border}" stroke-width="1" filter="url(#pc-filter-contact-shadow)"/>
        <line x1="20" y1="4" x2="20" y2="24" stroke="${pal.border}" stroke-width="1" stroke-dasharray="2 2" opacity="0.6"/>
      `;
    } else if (variant === 'pill') {
      shapeMarkup = `
        <rect x="2" y="3" width="${width - 4}" height="${height - 6}" rx="${(height - 6) / 2}"
              fill="${pal.bg}" stroke="${pal.border}" stroke-width="1" filter="url(#pc-filter-contact-shadow)"/>
      `;
    } else if (variant === 'ribbon') {
      shapeMarkup = `
        <polygon points="10,3 ${width - 3},3 ${width - 8},14 ${width - 3},25 10,25 3,17 3,11"
                 fill="${pal.bg}" stroke="${pal.border}" stroke-width="1" filter="url(#pc-filter-contact-shadow)"/>
        <circle cx="8" cy="14" r="2" fill="${pal.dark}"/>
      `;
    } else if (variant === 'scallop') {
      shapeMarkup = `
        <rect x="2" y="3" width="${width - 4}" height="${height - 6}" rx="8"
              fill="${pal.bg}" stroke="${pal.border}" stroke-width="1" filter="url(#pc-filter-contact-shadow)"/>
        <circle cx="12" cy="14" r="5" fill="${pal.dark}" stroke="#FFFFFF" stroke-width="0.8"/>
      `;
    } else {
      shapeMarkup = `
        <rect x="2" y="4" width="${width - 4}" height="${height - 7}" rx="4"
              fill="${pal.bg}" stroke="${pal.border}" stroke-width="1" filter="url(#pc-filter-contact-shadow)"/>
        <circle cx="10" cy="4" r="1.5" fill="#FAF7F0"/><circle cx="25" cy="4" r="1.5" fill="#FAF7F0"/>
        <circle cx="40" cy="4" r="1.5" fill="#FAF7F0"/><circle cx="55" cy="4" r="1.5" fill="#FAF7F0"/>
        <circle cx="${width - 10}" cy="4" r="1.5" fill="#FAF7F0"/><circle cx="${width - 25}" cy="4" r="1.5" fill="#FAF7F0"/>
        <circle cx="10" cy="25" r="1.5" fill="#FAF7F0"/><circle cx="25" cy="25" r="1.5" fill="#FAF7F0"/>
        <circle cx="${width - 10}" cy="25" r="1.5" fill="#FAF7F0"/>
      `;
    }

    wrap.innerHTML = `
      <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
        ${shapeMarkup}
        <line x1="8" y1="4.5" x2="${width - 8}" y2="4.5" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" opacity="0.9"/>
        <text x="${width / 2}" y="${height / 2 + 1}" text-anchor="middle" dominant-baseline="central"
              fill="${pal.ink}" font-size="11.5" font-weight="800">
          ${label}
        </text>
      </svg>
    `;
    return wrap;
  }

  // -------------------------------------------------------------------------
  // 14. INPUT (Wavy Deckle & Ticket Notch Pure SVG Inset Input)
  // -------------------------------------------------------------------------
  function createInput(opts = {}) {
    ensureMasterDefs();
    const {
      placeholder = '종이 위에 기록할 내용...',
      value = '',
      tone = 'mint',
      variant = 'wavy', // 'wavy', 'ticket', 'well'
      type = 'text',
      ariaLabel = '입력 필드',
      onChange = null
    } = opts;
    const pal = getPalette(tone);
    const wrap = document.createElement('div');
    wrap.className = `pc-svg-component pc-svg-input-wrap pc-svg-input--${tone}`;
    wrap.style.position = 'relative';
    wrap.style.display = 'inline-block';
    wrap.style.width = '100%';
    wrap.style.maxWidth = opts.maxWidth || '400px';

    const width = 380;
    const height = 48;

    let bgPath = '';
    if (variant === 'ticket') {
      bgPath = `
        <path d="M 4 4 H ${width - 4} V 18 A 6 6 0 0 0 ${width - 4} 30 V 44 H 4 V 30 A 6 6 0 0 0 4 18 Z"
              fill="${pal.bg}" stroke="${pal.border}" stroke-width="1.2" filter="url(#pc-filter-contact-shadow)"/>
        <rect x="12" y="7" width="${width - 24}" height="34" rx="4" fill="#FFFDF9" stroke="#EADBCC" stroke-width="0.8"/>
        <line x1="68" y1="8" x2="68" y2="40" stroke="${pal.border}" stroke-width="1" stroke-dasharray="2.5 2.5"/>
      `;
    } else {
      bgPath = `
        <path d="M 6 5 Q 30 3 60 6 Q 100 4 140 6 Q 180 3 220 6 Q 270 4 320 6 Q 350 4 ${width - 6} 5 Q ${width - 4} 14 ${width - 6} 24 Q ${width - 4} 34 ${width - 6} 43 Q 320 42 220 42 Q 140 42 60 42 Q 30 45 6 43 Q 4 34 6 24 Q 4 14 6 5 Z"
              fill="${variant === 'wavy' ? pal.bg : '#F4EEE3'}" stroke="${pal.border}" stroke-width="1.2" filter="url(#pc-filter-contact-shadow)"/>
        <rect x="10" y="7" width="${width - 20}" height="34" rx="4" fill="#FFFDF9" stroke="#EADBCC" stroke-width="0.8"/>
      `;
    }

    wrap.innerHTML = `
      <svg width="100%" height="${height}" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" style="display: block; width: 100%; height: 48px;">
        ${bgPath}
        <line x1="14" y1="8.5" x2="${width - 14}" y2="8.5" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" opacity="0.95"/>
      </svg>
      <input type="${type}" class="pc-svg-input-field" placeholder="${placeholder}" value="${value}" aria-label="${ariaLabel}"
             style="position: absolute; left: ${variant === 'ticket' ? '76px' : '16px'}; right: 16px; top: 8px; height: 32px; background: transparent; border: none; outline: none; font-size: 13.5px; font-weight: 600; color: #2E1E14; font-family: inherit;">
    `;

    const inputEl = wrap.querySelector('input');
    if (typeof onChange === 'function') {
      inputEl.addEventListener('input', (e) => onChange(e.target.value));
    }
    return wrap;
  }

  // -------------------------------------------------------------------------
  // 15. AVATAR (Layered Paper Disk Avatar)
  // -------------------------------------------------------------------------
  function createAvatar(opts = {}) {
    ensureMasterDefs();
    const {
      initials = 'PC',
      tone = 'peach',
      size = 44,
      ariaLabel = '사용자 아바타'
    } = opts;
    const pal = getPalette(tone);
    const wrap = document.createElement('div');
    wrap.className = `pc-svg-component pc-svg-avatar pc-svg-avatar--${tone}`;
    wrap.setAttribute('role', 'img');
    wrap.setAttribute('aria-label', ariaLabel);

    wrap.innerHTML = `
      <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
        <circle cx="${size / 2}" cy="${size / 2 + 1.5}" r="${size / 2 - 2}"
                fill="${pal.dark}" filter="url(#pc-filter-contact-shadow)"/>
        <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2 - 2}"
                fill="${pal.bg}" stroke="${pal.border}" stroke-width="1"/>
        <path d="M ${size * 0.2} ${size * 0.2} A ${size * 0.35} ${size * 0.35} 0 0 1 ${size * 0.8} ${size * 0.2}"
              stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round"/>
        <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2 - 5}"
                fill="#FFFDF9" stroke="#E6DDD1" stroke-width="0.8"/>
        <text x="${size / 2}" y="${size / 2 + 1}" text-anchor="middle" dominant-baseline="central"
              fill="${pal.ink}" font-size="${size * 0.34}" font-weight="800">
          ${initials}
        </text>
      </svg>
    `;
    return wrap;
  }

  // -------------------------------------------------------------------------
  // 16. BREADCRUMB (Multi-Piece Paper Arrow Breadcrumb)
  // -------------------------------------------------------------------------
  function createBreadcrumb(opts = {}) {
    ensureMasterDefs();
    const {
      items = [{ label: '홈' }, { label: '컴포넌트' }, { label: '버튼' }],
      tone = 'sand'
    } = opts;
    const pal = getPalette(tone);
    const nav = document.createElement('nav');
    nav.className = 'pc-svg-component pc-svg-breadcrumb';
    nav.setAttribute('aria-label', 'Breadcrumb');

    const ol = document.createElement('ol');
    ol.style.cssText = 'display: inline-flex; align-items: center; gap: 6px; list-style: none; margin: 0; padding: 0;';

    items.forEach((it, idx) => {
      const isLast = idx === items.length - 1;
      const li = document.createElement('li');
      li.style.cssText = 'display: inline-flex; align-items: center; gap: 6px;';

      const tag = document.createElement('span');
      tag.className = 'pc-svg-breadcrumb-item';
      tag.style.cssText = `background: ${isLast ? '#FFFDF9' : pal.bg}; border: 1px solid ${pal.border}; border-radius: 6px; padding: 4px 10px; font-size: 12px; font-weight: ${isLast ? '800' : '600'}; color: ${isLast ? '#2E1E14' : pal.ink}; box-shadow: 0 1px 2px rgba(46,30,20,0.12), inset 0 1px 0 #FFFFFF;`;
      tag.textContent = it.label;
      if (isLast) tag.setAttribute('aria-current', 'page');
      li.appendChild(tag);

      if (!isLast) {
        const sep = document.createElement('span');
        sep.innerHTML = `<svg width="12" height="12" viewBox="0 0 12 12" style="display:block;"><path d="M 4 2 L 8 6 L 4 10" stroke="#7A695A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`;
        sep.setAttribute('aria-hidden', 'true');
        li.appendChild(sep);
      }
      ol.appendChild(li);
    });

    nav.appendChild(ol);
    return nav;
  }

  // -------------------------------------------------------------------------
  // 17. PAGINATION (Ticket Paper Number Blocks)
  // -------------------------------------------------------------------------
  function createPagination(opts = {}) {
    ensureMasterDefs();
    const {
      current = 1,
      total = 5,
      onPageChange = null,
      tone = 'mint'
    } = opts;
    const pal = getPalette(tone);
    const nav = document.createElement('nav');
    nav.className = 'pc-svg-component pc-svg-pagination';
    nav.setAttribute('aria-label', 'Pagination');

    let stateCurrent = current;
    function render() {
      nav.innerHTML = '';
      const group = document.createElement('div');
      group.style.cssText = 'display: inline-flex; align-items: center; gap: 6px;';

      for (let i = 1; i <= total; i++) {
        const isAct = i === stateCurrent;
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.style.cssText = `width: 36px; height: 36px; border-radius: 8px; border: 1px solid ${isAct ? pal.border : 'rgba(46,30,20,0.15)'}; background: ${isAct ? pal.bg : '#FFFDF9'}; color: ${isAct ? pal.ink : '#554433'}; font-weight: 800; font-size: 13px; cursor: pointer; box-shadow: ${isAct ? '0 2px 4px rgba(46,30,20,0.18), inset 0 1px 0 #FFFFFF' : '0 1px 2px rgba(46,30,20,0.08)'};`;
        btn.textContent = String(i);
        btn.setAttribute('aria-label', `페이지 ${i}`);
        if (isAct) btn.setAttribute('aria-current', 'page');

        btn.addEventListener('click', () => {
          stateCurrent = i;
          render();
          if (typeof onPageChange === 'function') onPageChange(stateCurrent);
        });
        group.appendChild(btn);
      }
      nav.appendChild(group);
    }
    render();
    return nav;
  }

  // -------------------------------------------------------------------------
  // 18. TOAST (Washi-Tape Layered Paper Toast Alert)
  // -------------------------------------------------------------------------
  function createToast(opts = {}) {
    ensureMasterDefs();
    const message = typeof opts === 'string' ? opts : (opts.message || '알림 메시지');
    const tone = (typeof opts === 'object' && opts.tone) || 'mint';
    const pal = getPalette(tone);

    let container = document.getElementById('pc-svg-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'pc-svg-toast-container';
      container.style.cssText = 'position: fixed; bottom: 24px; right: 24px; display: flex; flex-direction: column; gap: 10px; z-index: 9999; pointer-events: none;';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `pc-svg-toast pc-svg-toast--${tone}`;
    toast.setAttribute('role', 'status');
    toast.style.cssText = `pointer-events: auto; background: #FFFDF9; border: 1px solid ${pal.border}; border-radius: 12px; padding: 14px 20px; box-shadow: 0 8px 24px rgba(46,30,20,0.22), inset 0 1px 0 #FFFFFF; position: relative; min-width: 240px; transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); transform: translateY(20px); opacity: 0;`;

    toast.innerHTML = `
      <div style="position: absolute; top: -8px; left: 50%; transform: translateX(-50%); width: 64px; height: 16px; background: ${pal.bg}; opacity: 0.85; border-radius: 2px; box-shadow: 0 1px 2px rgba(46,30,20,0.15);"></div>
      <div style="display: flex; align-items: center; gap: 10px;">
        <span class="pc-inline-icon is-xs" data-icon="check-v" style="width: 22px; height: 22px;"></span>
        <span style="font-size: 13.5px; font-weight: 700; color: #2E1E14;">${message}</span>
      </div>
    `;
    if (typeof window.hydratePapercutIcons === 'function') {
      window.hydratePapercutIcons(toast);
    }

    container.appendChild(toast);
    requestAnimationFrame(() => {
      toast.style.transform = 'translateY(0)';
      toast.style.opacity = '1';
    });

    setTimeout(() => {
      toast.style.transform = 'translateY(10px)';
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 350);
    }, 3200);

    return toast;
  }

  // -------------------------------------------------------------------------
  // 19. STEPPER (Connected Stitched Paper Disks)
  // -------------------------------------------------------------------------
  function createStepper(opts = {}) {
    ensureMasterDefs();
    const {
      steps = ['기본 정보', '상세 설정', '검토 및 완료'],
      active = 1,
      tone = 'mint'
    } = opts;
    const pal = getPalette(tone);
    const wrap = document.createElement('div');
    wrap.className = 'pc-svg-component pc-svg-stepper';
    wrap.setAttribute('role', 'navigation');
    wrap.setAttribute('aria-label', 'Progress Steps');

    const container = document.createElement('div');
    container.style.cssText = 'display: inline-flex; align-items: center; gap: 12px;';

    steps.forEach((step, idx) => {
      const isCompleted = idx < active;
      const isCurrent = idx === active;

      const item = document.createElement('div');
      item.style.cssText = 'display: inline-flex; align-items: center; gap: 8px;';

      const circle = document.createElement('div');
      circle.style.cssText = `width: 30px; height: 30px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-weight: 800; font-size: 12px; border: 1px solid ${isCurrent || isCompleted ? pal.border : 'rgba(46,30,20,0.18)'}; background: ${isCompleted ? pal.bg : (isCurrent ? '#FFFDF9' : '#F6EFE3')}; color: ${isCurrent ? '#2E1E14' : pal.ink}; box-shadow: ${isCurrent ? '0 2px 4px rgba(46,30,20,0.18), inset 0 1px 0 #FFFFFF' : 'none'};`;
      if (isCompleted) {
        circle.innerHTML = '<span class="pc-inline-icon is-xs" data-icon="check-v" style="width: 18px; height: 18px;"></span>';
        if (typeof window.hydratePapercutIcons === 'function') {
          window.hydratePapercutIcons(circle);
        }
      } else {
        circle.textContent = String(idx + 1);
      }

      const title = document.createElement('span');
      title.style.cssText = `font-size: 12.5px; font-weight: ${isCurrent ? '800' : '600'}; color: ${isCurrent ? '#2E1E14' : '#7A695A'};`;
      title.textContent = step;

      item.appendChild(circle);
      item.appendChild(title);
      container.appendChild(item);

      if (idx < steps.length - 1) {
        const line = document.createElement('div');
        line.style.cssText = `width: 32px; height: 2px; background: ${idx < active ? pal.bg : '#E6DDD1'}; border-top: 1px dashed rgba(46,30,20,0.2);`;
        container.appendChild(line);
      }
    });

    wrap.appendChild(container);
    return wrap;
  }

  // -------------------------------------------------------------------------
  // Automatic Declarative Hydration: PaperCutSVG.init(root)
  // -------------------------------------------------------------------------
  function init(root = (typeof document !== 'undefined' ? document : null)) {
    if (!root) return;
    ensureMasterDefs();

    // Declarative Buttons: <div data-pc-svg="button" data-label="..." data-tone="..." data-variant="...">
    root.querySelectorAll('[data-pc-svg="button"]').forEach(el => {
      if (el.dataset.pcHydrated) return;
      el.dataset.pcHydrated = 'true';
      const btn = createButton({
        label: el.dataset.label || el.textContent.trim() || '버튼',
        tone: el.dataset.tone || 'mint',
        variant: el.dataset.variant || 'solid',
        width: parseInt(el.dataset.width || 170, 10)
      });
      el.innerHTML = '';
      el.appendChild(btn);
    });

    // Declarative Badges: <div data-pc-svg="badge" data-label="..." data-tone="..." data-variant="...">
    root.querySelectorAll('[data-pc-svg="badge"]').forEach(el => {
      if (el.dataset.pcHydrated) return;
      el.dataset.pcHydrated = 'true';
      const bdg = createBadge({
        label: el.dataset.label || el.textContent.trim() || '배지',
        tone: el.dataset.tone || 'mint',
        variant: el.dataset.variant || 'stamp'
      });
      el.innerHTML = '';
      el.appendChild(bdg);
    });

    // Declarative Inputs: <div data-pc-svg="input" data-placeholder="..." data-tone="..." data-variant="...">
    root.querySelectorAll('[data-pc-svg="input"]').forEach(el => {
      if (el.dataset.pcHydrated) return;
      el.dataset.pcHydrated = 'true';
      const inp = createInput({
        placeholder: el.dataset.placeholder || '입력...',
        value: el.dataset.value || '',
        tone: el.dataset.tone || 'mint',
        variant: el.dataset.variant || 'wavy'
      });
      el.innerHTML = '';
      el.appendChild(inp);
    });

    // Declarative Switches: <div data-pc-svg="switch" data-checked="true" data-tone="...">
    root.querySelectorAll('[data-pc-svg="switch"]').forEach(el => {
      if (el.dataset.pcHydrated) return;
      el.dataset.pcHydrated = 'true';
      const sw = createSwitch({
        checked: el.dataset.checked === 'true',
        tone: el.dataset.tone || 'mint',
        label: el.dataset.label || '스위치'
      });
      el.innerHTML = '';
      el.appendChild(sw);
    });

    // Declarative Checkboxes: <div data-pc-svg="checkbox" data-checked="true" data-tone="...">
    root.querySelectorAll('[data-pc-svg="checkbox"]').forEach(el => {
      if (el.dataset.pcHydrated) return;
      el.dataset.pcHydrated = 'true';
      const cb = createCheckbox({
        checked: el.dataset.checked === 'true',
        tone: el.dataset.tone || 'mint',
        label: el.dataset.label || '체크박스'
      });
      el.innerHTML = '';
      el.appendChild(cb);
    });

    // Declarative Sliders: <div data-pc-svg="slider" data-value="50" data-tone="...">
    root.querySelectorAll('[data-pc-svg="slider"]').forEach(el => {
      if (el.dataset.pcHydrated) return;
      el.dataset.pcHydrated = 'true';
      const sld = createSlider({
        value: parseInt(el.dataset.value || 50, 10),
        tone: el.dataset.tone || 'mint'
      });
      el.innerHTML = '';
      el.appendChild(sld);
    });

    // Declarative Progress: <div data-pc-svg="progress" data-value="75" data-tone="...">
    root.querySelectorAll('[data-pc-svg="progress"]').forEach(el => {
      if (el.dataset.pcHydrated) return;
      el.dataset.pcHydrated = 'true';
      const prog = createProgress({
        value: parseInt(el.dataset.value || 75, 10),
        tone: el.dataset.tone || 'mint'
      });
      el.innerHTML = '';
      el.appendChild(prog);
    });

    // Declarative Avatars: <div data-pc-svg="avatar" data-initials="PC" data-tone="...">
    root.querySelectorAll('[data-pc-svg="avatar"]').forEach(el => {
      if (el.dataset.pcHydrated) return;
      el.dataset.pcHydrated = 'true';
      const av = createAvatar({
        initials: el.dataset.initials || 'PC',
        tone: el.dataset.tone || 'peach',
        size: parseInt(el.dataset.size || 44, 10)
      });
      el.innerHTML = '';
      el.appendChild(av);
    });
  }

  // Auto-init on DOMContentLoaded
  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => init(document));
    } else {
      init(document);
    }
  }

  return {
    version: '1.1.0',
    palettes: PALETTES,
    init,
    createButton,
    createSwitch,
    createCheckbox,
    createRadioGroup,
    createSlider,
    createAccordion,
    createTabs,
    createCard,
    createDialog,
    createProgress,
    createTooltip,
    createSelect,
    createBadge,
    createInput,
    createAvatar,
    createBreadcrumb,
    createPagination,
    createToast,
    createStepper
  };
});
