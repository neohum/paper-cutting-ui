/**
 * PaperCut UI - 3D Paper Depth & Shadow Simulator Controller
 * Interactive physics calculations for craft light rays, layer elevation, and multi-tier paper shadows.
 */

(function () {
  'use strict';

  const PaperShadowStudio = {
    state: {
      angle: 315,         // Degrees (0 ~ 360)
      elevation: 4.5,     // px (Layer spacer height: 1 ~ 30) - B Standard 4.5px
      blur: 10,           // px (Gaussian diffusion: 0 ~ 45)
      opacity: 0.48,      // 0.05 ~ 0.50 - B Standard 48%
      color: [46, 30, 20],// Deep Burnt Umber [R, G, B] #2E1E14 - Canonical B Standard
      enableTier1: true,  // Contact shadow
      enableTier2: true,  // Mid-air float shadow
      enableTier3: true,  // Atmospheric ambient shadow
      enableHighlight: true, // Knife-cut white bevel highlight
      activeTab: 'landscape' // 'landscape' | 'ui-stack' | 'icons' | 'popup'
    },

    init() {
      const container = document.getElementById('paper-shadow-studio');
      if (!container) return;

      this.renderStudio(container);
      if (typeof window.hydrateMountedPlates === 'function') {
        window.hydrateMountedPlates(container);
      }
      this.bindControls(container);
      this.updateSimulation();
      this.initParallaxTilt(container);
    },

    renderStudio(container) {
      container.innerHTML = `
        <div class="pc-washi-tape pc-washi-tape-mint"></div>
        
        <!-- Header -->
        <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 6px; flex-wrap: wrap;">
          <span class="pc-badge pc-badge-mint">Depth & Physics Lab</span>
          <span class="pc-badge pc-badge-peach">3D Virtual Craft Lamp</span>
          <span class="pc-badge pc-badge-lavender">Multi-Tier Shadows</span>
        </div>
        <h2 class="pc-section-title section-title" style="font-size: 28px; font-weight: 800; margin: 0 0 10px; color: var(--pc-ink);">
          <span class="pc-section-plate" data-bg-shape="cloud-puffy" data-icon="sun" data-size="52" title="3D 그림자 스튜디오"></span>
          <span>3D 페이퍼 입체감 &amp; 그림자 시뮬레이터 (Paper Depth Studio)</span>
        </h2>
        <p style="font-size: 15px; color: var(--pc-ink-muted); margin: 0 0 24px; line-height: 1.6;">
          페이퍼 컷팅 UI의 가장 본질적인 매력은 <strong>종이와 종이 사이의 물리적 단차(Elevation)와 그 틈새로 드리우는 따뜻한 다층 그림자</strong>입니다. 가상 크래프트 조명의 각도, 종이 층간 간격(폼보드 스페이서), 다층 그림자 분해(접촉광·부유광·원거리광), 그리고 칼선 반사 림을 실시간으로 시뮬레이션하고 최적의 CSS/SVG 코드를 추출해보세요.
        </p>

        <!-- Studio Grid Layout -->
        <div class="pc-shadow-studio-grid">
          
          <!-- LEFT: Controls Card -->
          <div class="pc-shadow-controls-card">
            
            <div class="pc-shadow-panel-header">
              <span class="pc-shadow-panel-title">
                <span class="pc-inline-icon is-sm" data-icon="sun"></span> 1. 가상 크래프트 조명 (360° 광원)
              </span>
              <span class="pc-param-val-badge" id="pc-sim-angle-badge">315° 탑레프트</span>
            </div>

            <!-- Virtual Craft Lamp Compass Dial -->
            <div class="pc-virtual-lamp-box">
              <div class="pc-lamp-dial-container" id="pc-lamp-dial" title="다이얼을 드래그하여 조명 위치를 360도로 돌려보세요">
                <span class="pc-dial-marker is-n">0° 정오</span>
                <span class="pc-dial-marker is-e">90° 우측</span>
                <span class="pc-dial-marker is-s">180° 하단</span>
                <span class="pc-dial-marker is-w">270° 좌측</span>
                
                <div class="pc-lamp-dial-needle" id="pc-lamp-needle" style="transform: rotate(315deg);">
                  <div class="pc-lamp-dial-orb" title="광원 오브"></div>
                </div>
                <div class="pc-lamp-center-pin"></div>
              </div>

              <!-- Quick Angle Chips -->
              <div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:center;align-items:center;">
                <button type="button" class="pc-angle-quick-btn pc-svg-kirigami-btn is-active" data-angle="315" title="315° 데스크탑" style="border:none;background:transparent;padding:0;cursor:pointer;">
                  <svg class="pc-kirigami-btn-svg" viewBox="0 0 114 36" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:114px;height:36px;display:block;">
                    <defs>
                      <filter id="sh-ang-315" x="-20%" y="-20%" width="140%" height="150%">
                        <feDropShadow dx="0" dy="1" stdDeviation="0.5" flood-color="#2E1E14" flood-opacity="0.45"/>
                        <feDropShadow dx="0" dy="2.5" stdDeviation="1.2" flood-color="#2E1E14" flood-opacity="0.2"/>
                        <feDropShadow dx="0" dy="-0.5" stdDeviation="0.25" flood-color="#FFFFFF" flood-opacity="0.95"/>
                      </filter>
                    </defs>
                    <rect x="3" y="3" width="108" height="29" rx="6" fill="#A3D8C3" stroke="#FFFFFF" stroke-width="0.88" filter="url(#sh-ang-315)"/>
                    <rect x="5" y="5" width="104" height="25" rx="4" fill="#E8F6EE"/>
                    <text x="14" y="21" font-family="'Nanum Square Round', sans-serif" font-size="12" font-weight="800" fill="#1A4D38">315° 데스크탑</text>
                  </svg>
                </button>
                <button type="button" class="pc-angle-quick-btn pc-svg-kirigami-btn" data-angle="0" title="0° 직사광" style="border:none;background:transparent;padding:0;cursor:pointer;">
                  <svg class="pc-kirigami-btn-svg" viewBox="0 0 94 36" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:94px;height:36px;display:block;">
                    <defs>
                      <filter id="sh-ang-0" x="-20%" y="-20%" width="140%" height="150%">
                        <feDropShadow dx="0" dy="1" stdDeviation="0.5" flood-color="#2E1E14" flood-opacity="0.45"/>
                        <feDropShadow dx="0" dy="2.5" stdDeviation="1.2" flood-color="#2E1E14" flood-opacity="0.2"/>
                        <feDropShadow dx="0" dy="-0.5" stdDeviation="0.25" flood-color="#FFFFFF" flood-opacity="0.95"/>
                      </filter>
                    </defs>
                    <rect x="3" y="3" width="88" height="29" rx="6" fill="#FEE396" stroke="#FFFFFF" stroke-width="0.88" filter="url(#sh-ang-0)"/>
                    <rect x="5" y="5" width="84" height="25" rx="4" fill="#FFFBF0"/>
                    <text x="14" y="21" font-family="'Nanum Square Round', sans-serif" font-size="12" font-weight="800" fill="#66460D">0° 직사광</text>
                  </svg>
                </button>
                <button type="button" class="pc-angle-quick-btn pc-svg-kirigami-btn" data-angle="45" title="45° 모닝광" style="border:none;background:transparent;padding:0;cursor:pointer;">
                  <svg class="pc-kirigami-btn-svg" viewBox="0 0 96 36" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:96px;height:36px;display:block;">
                    <defs>
                      <filter id="sh-ang-45" x="-20%" y="-20%" width="140%" height="150%">
                        <feDropShadow dx="0" dy="1" stdDeviation="0.5" flood-color="#2E1E14" flood-opacity="0.45"/>
                        <feDropShadow dx="0" dy="2.5" stdDeviation="1.2" flood-color="#2E1E14" flood-opacity="0.2"/>
                        <feDropShadow dx="0" dy="-0.5" stdDeviation="0.25" flood-color="#FFFFFF" flood-opacity="0.95"/>
                      </filter>
                    </defs>
                    <rect x="3" y="3" width="90" height="29" rx="6" fill="#F7BA9E" stroke="#FFFFFF" stroke-width="0.88" filter="url(#sh-ang-45)"/>
                    <rect x="5" y="5" width="86" height="25" rx="4" fill="#FFF5EE"/>
                    <text x="14" y="21" font-family="'Nanum Square Round', sans-serif" font-size="12" font-weight="800" fill="#5C2C16">45° 모닝광</text>
                  </svg>
                </button>
                <button type="button" class="pc-angle-quick-btn pc-svg-kirigami-btn" data-angle="90" title="90° 사광" style="border:none;background:transparent;padding:0;cursor:pointer;">
                  <svg class="pc-kirigami-btn-svg" viewBox="0 0 92 36" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:92px;height:36px;display:block;">
                    <defs>
                      <filter id="sh-ang-90" x="-20%" y="-20%" width="140%" height="150%">
                        <feDropShadow dx="0" dy="1" stdDeviation="0.5" flood-color="#2E1E14" flood-opacity="0.45"/>
                        <feDropShadow dx="0" dy="2.5" stdDeviation="1.2" flood-color="#2E1E14" flood-opacity="0.2"/>
                        <feDropShadow dx="0" dy="-0.5" stdDeviation="0.25" flood-color="#FFFFFF" flood-opacity="0.95"/>
                      </filter>
                    </defs>
                    <rect x="3" y="3" width="86" height="29" rx="6" fill="#BEE1E6" stroke="#FFFFFF" stroke-width="0.88" filter="url(#sh-ang-90)"/>
                    <rect x="5" y="5" width="82" height="25" rx="4" fill="#F4FAFC"/>
                    <text x="14" y="21" font-family="'Nanum Square Round', sans-serif" font-size="12" font-weight="800" fill="#204C5A">90° 사광</text>
                  </svg>
                </button>
                <button type="button" class="pc-angle-quick-btn pc-svg-kirigami-btn" data-angle="180" title="180° 림라이트" style="border:none;background:transparent;padding:0;cursor:pointer;">
                  <svg class="pc-kirigami-btn-svg" viewBox="0 0 114 36" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:114px;height:36px;display:block;">
                    <defs>
                      <filter id="sh-ang-180" x="-20%" y="-20%" width="140%" height="150%">
                        <feDropShadow dx="0" dy="1" stdDeviation="0.5" flood-color="#2E1E14" flood-opacity="0.45"/>
                        <feDropShadow dx="0" dy="2.5" stdDeviation="1.2" flood-color="#2E1E14" flood-opacity="0.2"/>
                        <feDropShadow dx="0" dy="-0.5" stdDeviation="0.25" flood-color="#FFFFFF" flood-opacity="0.95"/>
                      </filter>
                    </defs>
                    <rect x="3" y="3" width="108" height="29" rx="6" fill="#D7CBEB" stroke="#FFFFFF" stroke-width="0.88" filter="url(#sh-ang-180)"/>
                    <rect x="5" y="5" width="104" height="25" rx="4" fill="#F6F2FC"/>
                    <text x="12" y="21" font-family="'Nanum Square Round', sans-serif" font-size="12" font-weight="800" fill="#3D2958">180° 림라이트</text>
                  </svg>
                </button>
              </div>
            </div>

            <!-- Physical Parameters Sliders -->
            <div class="pc-shadow-slider-group">
              
              <!-- Elevation (Layer Gap) -->
              <div class="pc-param-row">
                <div class="pc-param-label-row">
                  <span>종이 층간 간격 (단차 높이)</span>
                  <span class="pc-param-val-badge" id="pc-val-elevation">6px (카드스톡)</span>
                </div>
                <input type="range" class="pc-param-range" id="pc-input-elevation" min="1" max="28" value="6" step="1">
                <div class="pc-slider-quick-presets" style="display:flex;gap:4px;flex-wrap:wrap;margin-top:4px;">
                  <button type="button" class="pc-slider-preset-btn" data-slider="elevation" data-val="2">2px 미세</button>
                  <button type="button" class="pc-slider-preset-btn is-active" data-slider="elevation" data-val="6">6px 표준</button>
                  <button type="button" class="pc-slider-preset-btn" data-slider="elevation" data-val="12">12px 팝업</button>
                  <button type="button" class="pc-slider-preset-btn" data-slider="elevation" data-val="22">22px 부유</button>
                </div>
              </div>

              <!-- Blur Diffusion -->
              <div class="pc-param-row">
                <div class="pc-param-label-row">
                  <span>그림자 확산도 (블러 Diffusion)</span>
                  <span class="pc-param-val-badge" id="pc-val-blur">12px (스튜디오광)</span>
                </div>
                <input type="range" class="pc-param-range" id="pc-input-blur" min="1" max="40" value="12" step="1">
                <div class="pc-slider-quick-presets" style="display:flex;gap:4px;flex-wrap:wrap;margin-top:4px;">
                  <button type="button" class="pc-slider-preset-btn" data-slider="blur" data-val="4">4px 선명</button>
                  <button type="button" class="pc-slider-preset-btn is-active" data-slider="blur" data-val="12">12px 표준</button>
                  <button type="button" class="pc-slider-preset-btn" data-slider="blur" data-val="24">24px 확산</button>
                  <button type="button" class="pc-slider-preset-btn" data-slider="blur" data-val="36">36px 앰비언트</button>
                </div>
              </div>

              <!-- Opacity -->
              <div class="pc-param-row">
                <div class="pc-param-label-row">
                  <span>그림자 깊이 농도 (Opacity)</span>
                  <span class="pc-param-val-badge" id="pc-val-opacity">18% (자연광)</span>
                </div>
                <input type="range" class="pc-param-range" id="pc-input-opacity" min="5" max="50" value="18" step="1">
                <div class="pc-slider-quick-presets" style="display:flex;gap:4px;flex-wrap:wrap;margin-top:4px;">
                  <button type="button" class="pc-slider-preset-btn" data-slider="opacity" data-val="10">10% 은은</button>
                  <button type="button" class="pc-slider-preset-btn is-active" data-slider="opacity" data-val="18">18% 자연광</button>
                  <button type="button" class="pc-slider-preset-btn" data-slider="opacity" data-val="32">32% 스튜디오</button>
                  <button type="button" class="pc-slider-preset-btn" data-slider="opacity" data-val="48">48% B표준</button>
                </div>
              </div>
            </div>

            <!-- Multi-Tier Decomposition Toggles (3D Paper Toggle Switches) -->
            <div class="pc-shadow-tiers-box">
              <span style="font-size:12.5px;font-weight:800;color:var(--pc-ink);border-bottom:1px solid #E6DBC9;padding-bottom:4px;display:flex;align-items:center;gap:6px;">
                <span class="pc-inline-icon is-xs" data-icon="sparkles"></span>
                <span>2. 다층 그림자 물리 티어 분해 (3D 종이 토글)</span>
              </span>
              <label class="pc-tier-toggle-item pc-toggle pc-toggle-sm" style="display:flex;justify-content:space-between;align-items:center;width:100%;cursor:pointer;">
                <span class="pc-toggle-label" style="font-size:12.5px;font-weight:700;">Tier 1: 초밀착 접촉 그림자 (Contact Edge)</span>
                <input type="checkbox" class="pc-toggle-input" id="pc-toggle-tier1" checked>
                <span class="pc-toggle-track"><span class="pc-toggle-flap"></span></span>
              </label>
              <label class="pc-tier-toggle-item pc-toggle pc-toggle-sm" style="display:flex;justify-content:space-between;align-items:center;width:100%;cursor:pointer;">
                <span class="pc-toggle-label" style="font-size:12.5px;font-weight:700;">Tier 2: 중간 부유 그림자 (Mid-air Float)</span>
                <input type="checkbox" class="pc-toggle-input" id="pc-toggle-tier2" checked>
                <span class="pc-toggle-track"><span class="pc-toggle-flap"></span></span>
              </label>
              <label class="pc-tier-toggle-item pc-toggle pc-toggle-sm" style="display:flex;justify-content:space-between;align-items:center;width:100%;cursor:pointer;">
                <span class="pc-toggle-label" style="font-size:12.5px;font-weight:700;">Tier 3: 원거리 대기 확산광 (Ambient Floor)</span>
                <input type="checkbox" class="pc-toggle-input" id="pc-toggle-tier3" checked>
                <span class="pc-toggle-track"><span class="pc-toggle-flap"></span></span>
              </label>
              <label class="pc-tier-toggle-item pc-toggle pc-toggle-sm" style="display:flex;justify-content:space-between;align-items:center;width:100%;cursor:pointer;">
                <span class="pc-toggle-label" style="font-size:12.5px;font-weight:700;">Tier 4: 나이프 칼선 반사 림 (Knife Highlight)</span>
                <input type="checkbox" class="pc-toggle-input" id="pc-toggle-highlight" checked>
                <span class="pc-toggle-track"><span class="pc-toggle-flap"></span></span>
              </label>
            </div>

            <!-- Shadow Color Patina -->
            <div style="display:flex;flex-direction:column;gap:8px;">
              <span style="font-size:12.5px;font-weight:800;color:var(--pc-ink);">3. 그림자 틴트 & 색온도 (Patina)</span>
              <div class="pc-shadow-color-swatches">
                <button type="button" class="pc-color-swatch-btn is-active" data-rgb="46,30,20">
                  <span class="pc-color-swatch-dot" style="background:#2E1E14;"></span> <span>딥 번트 엄버 (B표준)</span>
                </button>
                <button type="button" class="pc-color-swatch-btn" data-rgb="40,52,65">
                  <span class="pc-color-swatch-dot" style="background:#283441;"></span> <span>쿨 슬레이트</span>
                </button>
                <button type="button" class="pc-color-swatch-btn" data-rgb="85,62,40">
                  <span class="pc-color-swatch-dot" style="background:#553E28;"></span> <span>앤틱 크래프트</span>
                </button>
                <button type="button" class="pc-color-swatch-btn" data-rgb="72,50,75">
                  <span class="pc-color-swatch-dot" style="background:#48324B;"></span> <span>파스텔 노을</span>
                </button>
              </div>
            </div>

          </div>

          <!-- RIGHT: Viewport & 3D Interactive Stage -->
          <div class="pc-shadow-viewport-card">
            
            <!-- Viewport Switcher Tabs -->
            <div class="pc-shadow-view-tabs" style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
              <button type="button" class="pc-shadow-tab-btn pc-svg-kirigami-btn is-active" data-view="landscape" title="5단 다층 페이퍼 풍경" style="border:none;background:transparent;padding:0;cursor:pointer;">
                <svg class="pc-kirigami-btn-svg" viewBox="0 0 170 38" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:170px;height:38px;display:block;">
                  <defs>
                    <filter id="sh-view-land" x="-20%" y="-20%" width="140%" height="150%">
                      <feDropShadow dx="0" dy="1" stdDeviation="0.5" flood-color="#2E1E14" flood-opacity="0.45"/>
                      <feDropShadow dx="0" dy="2.5" stdDeviation="1.2" flood-color="#2E1E14" flood-opacity="0.2"/>
                      <feDropShadow dx="0" dy="-0.5" stdDeviation="0.25" flood-color="#FFFFFF" flood-opacity="0.95"/>
                    </filter>
                  </defs>
                  <rect x="3" y="3" width="164" height="31" rx="6" fill="#A3D8C3" stroke="#FFFFFF" stroke-width="0.88" filter="url(#sh-view-land)"/>
                  <rect x="5" y="5" width="160" height="27" rx="4" fill="#E8F6EE"/>
                  <g transform="translate(14, 11) scale(0.65)">
                    <polygon points="10,2 18,18 2,18" fill="#1C4736"/>
                  </g>
                  <text x="32" y="22" font-family="'Nanum Square Round', sans-serif" font-size="12" font-weight="800" fill="#1A4D38">5단 다층 페이퍼 풍경</text>
                </svg>
              </button>
              <button type="button" class="pc-shadow-tab-btn pc-svg-kirigami-btn" data-view="ui-stack" title="UI 카드 &amp; 버튼 스택" style="border:none;background:transparent;padding:0;cursor:pointer;">
                <svg class="pc-kirigami-btn-svg" viewBox="0 0 166 38" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:166px;height:38px;display:block;">
                  <defs>
                    <filter id="sh-view-ui" x="-20%" y="-20%" width="140%" height="150%">
                      <feDropShadow dx="0" dy="1" stdDeviation="0.5" flood-color="#2E1E14" flood-opacity="0.45"/>
                      <feDropShadow dx="0" dy="2.5" stdDeviation="1.2" flood-color="#2E1E14" flood-opacity="0.2"/>
                      <feDropShadow dx="0" dy="-0.5" stdDeviation="0.25" flood-color="#FFFFFF" flood-opacity="0.95"/>
                    </filter>
                  </defs>
                  <rect x="3" y="3" width="160" height="31" rx="6" fill="#BEE1E6" stroke="#FFFFFF" stroke-width="0.88" filter="url(#sh-view-ui)"/>
                  <rect x="5" y="5" width="156" height="27" rx="4" fill="#F4FAFC"/>
                  <g transform="translate(14, 11) scale(0.65)">
                    <rect x="2" y="2" width="16" height="14" rx="2" stroke="#204C5A" stroke-width="2" fill="none"/>
                  </g>
                  <text x="32" y="22" font-family="'Nanum Square Round', sans-serif" font-size="12" font-weight="800" fill="#204C5A">UI 카드 &amp; 버튼 스택</text>
                </svg>
              </button>
              <button type="button" class="pc-shadow-tab-btn pc-svg-kirigami-btn" data-view="icons" title="스탠드얼론 아이콘 입체" style="border:none;background:transparent;padding:0;cursor:pointer;">
                <svg class="pc-kirigami-btn-svg" viewBox="0 0 172 38" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:172px;height:38px;display:block;">
                  <defs>
                    <filter id="sh-view-ico" x="-20%" y="-20%" width="140%" height="150%">
                      <feDropShadow dx="0" dy="1" stdDeviation="0.5" flood-color="#2E1E14" flood-opacity="0.45"/>
                      <feDropShadow dx="0" dy="2.5" stdDeviation="1.2" flood-color="#2E1E14" flood-opacity="0.2"/>
                      <feDropShadow dx="0" dy="-0.5" stdDeviation="0.25" flood-color="#FFFFFF" flood-opacity="0.95"/>
                    </filter>
                  </defs>
                  <rect x="3" y="3" width="166" height="31" rx="6" fill="#D7CBEB" stroke="#FFFFFF" stroke-width="0.88" filter="url(#sh-view-ico)"/>
                  <rect x="5" y="5" width="162" height="27" rx="4" fill="#F6F2FC"/>
                  <g transform="translate(14, 11) scale(0.65)">
                    <polygon points="10,2 12,8 18,8 13,12 15,18 10,14 5,18 7,12 2,8 8,8" fill="#3D2958"/>
                  </g>
                  <text x="32" y="22" font-family="'Nanum Square Round', sans-serif" font-size="12" font-weight="800" fill="#3D2958">스탠드얼론 아이콘 입체</text>
                </svg>
              </button>
              <span style="margin-left:auto;font-size:12px;font-weight:700;color:var(--pc-ink-muted);display:flex;align-items:center;gap:4px;">
                <span class="pc-inline-icon is-xs" data-icon="refresh-cw"></span> 마우스 호버 시 3D 틸트 반응
              </span>
            </div>

            <!-- 3D Stage Well -->
            <div class="pc-shadow-stage-well" id="pc-shadow-stage-well">
              <div class="pc-shadow-stage-canvas" id="pc-shadow-stage-canvas">
                
                <!-- View 1: 5-Layer 3D Mountain Landscape -->
                <div class="pc-landscape-scene" id="pc-view-landscape">
                  
                  <!-- Layer 1: Sky & Clouds -->
                  <div class="pc-layer-mount pc-layer-1-sky-cloud" data-depth-tier="1">
                    <svg viewBox="0 0 600 90" preserveAspectRatio="none" style="width:100%;height:100%;">
                      <path d="M0,0 L600,0 L600,30 Q500,65 400,35 Q300,75 200,35 Q100,65 0,25 Z" fill="#FFFFFF"/>
                    </svg>
                  </div>

                  <!-- Layer 5: Floating Hot Air Balloon -->
                  <div class="pc-layer-mount pc-layer-5-hot-balloon" data-depth-tier="5">
                    <svg viewBox="0 0 64 80" fill="none" style="width:100%;height:100%;">
                      <ellipse cx="32" cy="30" rx="24" ry="28" fill="#F7BA9E"/>
                      <path d="M16 28 C16 44 26 54 32 54 C38 54 48 44 48 28 Z" fill="#A3D8C3"/>
                      <ellipse cx="32" cy="30" rx="10" ry="28" fill="#FEE396"/>
                      <rect x="26" y="62" width="12" height="10" rx="2" fill="#D7CBEB"/>
                      <line x1="22" y1="52" x2="28" y2="62" stroke="#3D352E" stroke-width="1.5"/>
                      <line x1="42" y1="52" x2="36" y2="62" stroke="#3D352E" stroke-width="1.5"/>
                    </svg>
                  </div>

                  <!-- Layer 2: Deep Purple Mountains -->
                  <div class="pc-layer-mount pc-layer-2-deep-mount" data-depth-tier="2">
                    <svg viewBox="0 0 600 220" preserveAspectRatio="none" style="width:100%;height:100%;">
                      <path d="M0,130 Q120,40 260,95 Q400,30 520,80 Q560,95 600,85 L600,220 L0,220 Z" fill="#D7CBEB"/>
                    </svg>
                  </div>

                  <!-- Layer 3: Mid Peach Hills -->
                  <div class="pc-layer-mount pc-layer-3-mid-hill" data-depth-tier="3">
                    <svg viewBox="0 0 600 170" preserveAspectRatio="none" style="width:100%;height:100%;">
                      <path d="M0,90 Q150,20 320,65 Q460,10 600,50 L600,170 L0,170 Z" fill="#F7BA9E"/>
                    </svg>
                  </div>

                  <!-- Layer 4: Forefront Mint Hills -->
                  <div class="pc-layer-mount pc-layer-4-fore-hill" data-depth-tier="4">
                    <svg viewBox="0 0 600 120" preserveAspectRatio="none" style="width:100%;height:100%;">
                      <path d="M0,50 Q200,10 400,45 Q520,15 600,35 L600,120 L0,120 Z" fill="#A3D8C3"/>
                    </svg>
                  </div>

                </div>

                <!-- View 2: UI Stack -->
                <div class="pc-ui-stack-scene" id="pc-view-ui-stack" style="display:none;">
                  <div class="pc-sample-target-card" id="pc-sim-target-card">
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
                      <span class="pc-badge pc-badge-mint">Paper UI Card</span>
                      <span style="font-size:12px;font-weight:700;color:var(--pc-ink-muted);">3-Tier Shadow Stacking</span>
                    </div>
                    <h3 style="margin:0 0 8px;font-size:18px;font-weight:800;color:var(--pc-ink);">실시간 그림자 물리 반응 카드</h3>
                    <p style="margin:0 0 16px;font-size:13.5px;color:var(--pc-ink-muted);line-height:1.5;">
                      조명 각도와 층간 간격에 따라 상단 1px 화이트 림과 하단 접촉 그림자가 정밀하게 반응합니다.
                    </p>
                    <div style="display:flex;gap:10px;">
                      <button type="button" class="pc-sample-target-btn pc-svg-kirigami-btn" id="pc-sim-target-btn" style="border:none;background:transparent;padding:0;cursor:pointer;" title="입체 버튼 클릭">
                        <svg class="pc-kirigami-btn-svg" viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:160px;height:48px;display:block;">
                          <defs>
                            <filter id="sh-sim-target-btn" x="-20%" y="-20%" width="140%" height="150%">
                              <feDropShadow dx="0" dy="1.2" stdDeviation="0.6" flood-color="#2E1E14" flood-opacity="0.48"/>
                              <feDropShadow dx="0" dy="3.5" stdDeviation="1.8" flood-color="#2E1E14" flood-opacity="0.25"/>
                              <feDropShadow dx="0" dy="-0.5" stdDeviation="0.3" flood-color="#FFFFFF" flood-opacity="0.95"/>
                            </filter>
                          </defs>
                          <rect x="6" y="6" width="148" height="36" rx="10" fill="#A3D8C3" stroke="#FFFFFF" stroke-width="0.88" filter="url(#sh-sim-target-btn)"/>
                          <rect x="9" y="9" width="142" height="30" rx="8" fill="#FFFDF9"/>
                          <g transform="translate(18, 14) scale(0.68)">
                            <polygon points="10,2 12,8 18,8 13,12 15,18 10,14 5,18 7,12 2,8 8,8" fill="#A3D8C3"/>
                          </g>
                          <text x="44" y="28" font-family="'Nanum Square Round', sans-serif" font-size="13.5" font-weight="800" fill="#1C4736">입체 버튼 클릭</text>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <!-- View 3: Standalone Icons -->
                <div class="pc-icons-shadow-scene" id="pc-view-icons" style="display:none;">
                  <div class="pc-shadow-icon-plate" data-icon-sample="scissors">
                    <span class="pc-inline-icon is-lg" data-icon="scissors"></span>
                  </div>
                  <div class="pc-shadow-icon-plate" data-icon-sample="camera">
                    <span class="pc-inline-icon is-lg" data-icon="camera"></span>
                  </div>
                  <div class="pc-shadow-icon-plate" data-icon-sample="heart">
                    <span class="pc-inline-icon is-lg" data-icon="heart"></span>
                  </div>
                  <div class="pc-shadow-icon-plate" data-icon-sample="coffee">
                    <span class="pc-inline-icon is-lg" data-icon="coffee"></span>
                  </div>
                </div>

              </div>
            </div>

            <!-- Bottom: 5 Presets & One-Click Code Export -->
            <div class="pc-shadow-bottom-bar">
              
              <!-- 5 Physical Presets -->
              <div class="pc-presets-row" style="display:flex;gap:6px;flex-wrap:wrap;align-items:center;">
                <span style="font-size:12px;font-weight:800;color:var(--pc-ink);">원클릭 입체 프리셋:</span>
                <button type="button" class="pc-depth-preset-btn pc-svg-kirigami-btn" data-preset="micro" title="1. 미세 릴리프 (0.5mm)" style="border:none;background:transparent;padding:0;cursor:pointer;">
                  <svg class="pc-kirigami-btn-svg" viewBox="0 0 145 36" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:145px;height:36px;display:block;">
                    <defs>
                      <filter id="sh-pre-micro" x="-20%" y="-20%" width="140%" height="150%">
                        <feDropShadow dx="0" dy="0.9" stdDeviation="0.45" flood-color="#2E1E14" flood-opacity="0.42"/>
                        <feDropShadow dx="0" dy="2" stdDeviation="1" flood-color="#2E1E14" flood-opacity="0.18"/>
                        <feDropShadow dx="0" dy="-0.5" stdDeviation="0.25" flood-color="#FFFFFF" flood-opacity="0.95"/>
                      </filter>
                    </defs>
                    <rect x="3" y="3" width="139" height="29" rx="6" fill="#FAF6ED" stroke="#FFFFFF" stroke-width="0.88" filter="url(#sh-pre-micro)"/>
                    <rect x="5" y="5" width="135" height="25" rx="4" fill="#FFFDF9"/>
                    <text x="12" y="21" font-family="'Nanum Square Round', sans-serif" font-size="11.5" font-weight="800" fill="#4A3F33">1. 미세 릴리프 (0.5mm)</text>
                  </svg>
                </button>
                <button type="button" class="pc-depth-preset-btn pc-svg-kirigami-btn is-active" data-preset="standard" title="2. 카드스톡 표준 (2mm)" style="border:none;background:transparent;padding:0;cursor:pointer;">
                  <svg class="pc-kirigami-btn-svg" viewBox="0 0 148 36" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:148px;height:36px;display:block;">
                    <defs>
                      <filter id="sh-pre-std" x="-20%" y="-20%" width="140%" height="150%">
                        <feDropShadow dx="0" dy="1.1" stdDeviation="0.55" flood-color="#2E1E14" flood-opacity="0.46"/>
                        <feDropShadow dx="0" dy="2.8" stdDeviation="1.4" flood-color="#2E1E14" flood-opacity="0.22"/>
                        <feDropShadow dx="0" dy="-0.5" stdDeviation="0.25" flood-color="#FFFFFF" flood-opacity="0.95"/>
                      </filter>
                    </defs>
                    <rect x="3" y="3" width="142" height="29" rx="6" fill="#A3D8C3" stroke="#FFFFFF" stroke-width="0.88" filter="url(#sh-pre-std)"/>
                    <rect x="5" y="5" width="138" height="25" rx="4" fill="#E8F6EE"/>
                    <text x="12" y="21" font-family="'Nanum Square Round', sans-serif" font-size="11.5" font-weight="800" fill="#1A4D38">2. 카드스톡 표준 (2mm)</text>
                  </svg>
                </button>
                <button type="button" class="pc-depth-preset-btn pc-svg-kirigami-btn" data-preset="diorama" title="3. 섀도우박스 (8mm)" style="border:none;background:transparent;padding:0;cursor:pointer;">
                  <svg class="pc-kirigami-btn-svg" viewBox="0 0 142 36" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:142px;height:36px;display:block;">
                    <defs>
                      <filter id="sh-pre-dio" x="-20%" y="-20%" width="140%" height="150%">
                        <feDropShadow dx="0" dy="1.1" stdDeviation="0.55" flood-color="#2E1E14" flood-opacity="0.46"/>
                        <feDropShadow dx="0" dy="2.8" stdDeviation="1.4" flood-color="#2E1E14" flood-opacity="0.22"/>
                        <feDropShadow dx="0" dy="-0.5" stdDeviation="0.25" flood-color="#FFFFFF" flood-opacity="0.95"/>
                      </filter>
                    </defs>
                    <rect x="3" y="3" width="136" height="29" rx="6" fill="#F7BA9E" stroke="#FFFFFF" stroke-width="0.88" filter="url(#sh-pre-dio)"/>
                    <rect x="5" y="5" width="132" height="25" rx="4" fill="#FFF5EE"/>
                    <text x="12" y="21" font-family="'Nanum Square Round', sans-serif" font-size="11.5" font-weight="800" fill="#5C2C16">3. 섀도우박스 (8mm)</text>
                  </svg>
                </button>
                <button type="button" class="pc-depth-preset-btn pc-svg-kirigami-btn" data-preset="raking" title="4. 저각도 사광 (15mm)" style="border:none;background:transparent;padding:0;cursor:pointer;">
                  <svg class="pc-kirigami-btn-svg" viewBox="0 0 145 36" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:145px;height:36px;display:block;">
                    <defs>
                      <filter id="sh-pre-rak" x="-20%" y="-20%" width="140%" height="150%">
                        <feDropShadow dx="0" dy="1.1" stdDeviation="0.55" flood-color="#2E1E14" flood-opacity="0.46"/>
                        <feDropShadow dx="0" dy="2.8" stdDeviation="1.4" flood-color="#2E1E14" flood-opacity="0.22"/>
                        <feDropShadow dx="0" dy="-0.5" stdDeviation="0.25" flood-color="#FFFFFF" flood-opacity="0.95"/>
                      </filter>
                    </defs>
                    <rect x="3" y="3" width="139" height="29" rx="6" fill="#FEE396" stroke="#FFFFFF" stroke-width="0.88" filter="url(#sh-pre-rak)"/>
                    <rect x="5" y="5" width="135" height="25" rx="4" fill="#FFFBF0"/>
                    <text x="12" y="21" font-family="'Nanum Square Round', sans-serif" font-size="11.5" font-weight="800" fill="#66460D">4. 저각도 사광 (15mm)</text>
                  </svg>
                </button>
                <button type="button" class="pc-depth-preset-btn pc-svg-kirigami-btn" data-preset="levitate" title="5. 무중력 부유 (25mm)" style="border:none;background:transparent;padding:0;cursor:pointer;">
                  <svg class="pc-kirigami-btn-svg" viewBox="0 0 145 36" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:145px;height:36px;display:block;">
                    <defs>
                      <filter id="sh-pre-lev" x="-20%" y="-20%" width="140%" height="150%">
                        <feDropShadow dx="0" dy="1.1" stdDeviation="0.55" flood-color="#2E1E14" flood-opacity="0.46"/>
                        <feDropShadow dx="0" dy="2.8" stdDeviation="1.4" flood-color="#2E1E14" flood-opacity="0.22"/>
                        <feDropShadow dx="0" dy="-0.5" stdDeviation="0.25" flood-color="#FFFFFF" flood-opacity="0.95"/>
                      </filter>
                    </defs>
                    <rect x="3" y="3" width="139" height="29" rx="6" fill="#D7CBEB" stroke="#FFFFFF" stroke-width="0.88" filter="url(#sh-pre-lev)"/>
                    <rect x="5" y="5" width="135" height="25" rx="4" fill="#F6F2FC"/>
                    <text x="12" y="21" font-family="'Nanum Square Round', sans-serif" font-size="11.5" font-weight="800" fill="#3D2958">5. 무중력 부유 (25mm)</text>
                  </svg>
                </button>
              </div>

              <!-- Generated CSS Code Readout -->
              <div class="pc-code-preview-box">
                <span class="pc-code-text" id="pc-sim-code-readout">box-shadow: ...</span>
                <button type="button" class="pc-copy-shadow-code-btn pc-svg-kirigami-btn" id="pc-copy-shadow-btn" title="CSS box-shadow 코드 복사" style="border:none;background:transparent;padding:0;cursor:pointer;">
                  <svg class="pc-kirigami-btn-svg" viewBox="0 0 106 36" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:106px;height:36px;display:block;">
                    <defs>
                      <filter id="sh-copy-shadow-btn" x="-20%" y="-20%" width="140%" height="150%">
                        <feDropShadow dx="0" dy="1" stdDeviation="0.5" flood-color="#2E1E14" flood-opacity="0.45"/>
                        <feDropShadow dx="0" dy="2.5" stdDeviation="1.2" flood-color="#2E1E14" flood-opacity="0.2"/>
                        <feDropShadow dx="0" dy="-0.5" stdDeviation="0.25" flood-color="#FFFFFF" flood-opacity="0.95"/>
                      </filter>
                    </defs>
                    <rect x="3" y="3" width="100" height="29" rx="6" fill="#FEE396" stroke="#FFFFFF" stroke-width="0.88" filter="url(#sh-copy-shadow-btn)"/>
                    <rect x="5" y="5" width="96" height="25" rx="4" fill="#FFFDF9"/>
                    <g transform="translate(14, 10) scale(0.65)">
                      <rect x="4" y="4" width="12" height="12" rx="2" stroke="#66460D" stroke-width="2" fill="none"/>
                      <path d="M 8 4 V 2 C 8 1 9 0 10 0 H 18 C 19 0 20 1 20 2 V 10 C 20 11 19 12 18 12 H 16" stroke="#66460D" stroke-width="2" fill="none"/>
                    </g>
                    <text x="36" y="21" font-family="'Nanum Square Round', sans-serif" font-size="12" font-weight="800" fill="#66460D">CSS 복사</text>
                  </svg>
                </button>
              </div>

            </div>

          </div>

        </div>
      `;

      if (window.hydratePapercutIcons) {
        window.hydratePapercutIcons(container);
      }
    },

    bindControls(container) {
      // 1. Compass dial dragging & clicking
      const dial = container.querySelector('#pc-lamp-dial');
      let isDialDragging = false;

      const updateAngleFromEvent = (e) => {
        const rect = dial.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        const rad = Math.atan2(clientY - centerY, clientX - centerX);
        let deg = Math.round(rad * (180 / Math.PI)) + 90;
        if (deg < 0) deg += 360;

        this.state.angle = deg;
        this.updateSimulation();
      };

      dial.addEventListener('mousedown', (e) => {
        isDialDragging = true;
        updateAngleFromEvent(e);
      });
      window.addEventListener('mousemove', (e) => {
        if (isDialDragging) updateAngleFromEvent(e);
      });
      window.addEventListener('mouseup', () => { isDialDragging = false; });

      dial.addEventListener('touchstart', (e) => {
        isDialDragging = true;
        updateAngleFromEvent(e);
      }, { passive: true });
      window.addEventListener('touchmove', (e) => {
        if (isDialDragging) updateAngleFromEvent(e);
      }, { passive: true });
      window.addEventListener('touchend', () => { isDialDragging = false; });

      // Quick Angle Buttons
      container.querySelectorAll('.pc-angle-quick-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          container.querySelectorAll('.pc-angle-quick-btn').forEach(b => b.classList.remove('is-active'));
          btn.classList.add('is-active');
          this.state.angle = parseInt(btn.dataset.angle, 10);
          this.updateSimulation();
        });
      });

      // 2. Sliders
      const elElevation = container.querySelector('#pc-input-elevation');
      const elBlur = container.querySelector('#pc-input-blur');
      const elOpacity = container.querySelector('#pc-input-opacity');

      elElevation.addEventListener('input', (e) => {
        this.state.elevation = parseInt(e.target.value, 10);
        const presets = container.querySelectorAll('.pc-slider-preset-btn[data-slider="elevation"]');
        presets.forEach(p => p.classList.toggle('is-active', parseInt(p.dataset.val, 10) === this.state.elevation));
        this.updateSimulation();
      });
      elBlur.addEventListener('input', (e) => {
        this.state.blur = parseInt(e.target.value, 10);
        const presets = container.querySelectorAll('.pc-slider-preset-btn[data-slider="blur"]');
        presets.forEach(p => p.classList.toggle('is-active', parseInt(p.dataset.val, 10) === this.state.blur));
        this.updateSimulation();
      });
      elOpacity.addEventListener('input', (e) => {
        this.state.opacity = parseInt(e.target.value, 10) / 100;
        const valPct = parseInt(e.target.value, 10);
        const presets = container.querySelectorAll('.pc-slider-preset-btn[data-slider="opacity"]');
        presets.forEach(p => p.classList.toggle('is-active', parseInt(p.dataset.val, 10) === valPct));
        this.updateSimulation();
      });

      // Quick slider presets click binding
      container.querySelectorAll('.pc-slider-preset-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const sliderType = btn.dataset.slider;
          const val = parseInt(btn.dataset.val, 10);
          btn.closest('.pc-slider-quick-presets').querySelectorAll('.pc-slider-preset-btn').forEach(b => b.classList.remove('is-active'));
          btn.classList.add('is-active');
          if (sliderType === 'elevation') {
            this.state.elevation = val;
            if (elElevation) elElevation.value = val;
          } else if (sliderType === 'blur') {
            this.state.blur = val;
            if (elBlur) elBlur.value = val;
          } else if (sliderType === 'opacity') {
            this.state.opacity = val / 100;
            if (elOpacity) elOpacity.value = val;
          }
          this.updateSimulation();
        });
      });

      // 3. Toggles
      container.querySelector('#pc-toggle-tier1').addEventListener('change', (e) => {
        this.state.enableTier1 = e.target.checked;
        this.updateSimulation();
      });
      container.querySelector('#pc-toggle-tier2').addEventListener('change', (e) => {
        this.state.enableTier2 = e.target.checked;
        this.updateSimulation();
      });
      container.querySelector('#pc-toggle-tier3').addEventListener('change', (e) => {
        this.state.enableTier3 = e.target.checked;
        this.updateSimulation();
      });
      container.querySelector('#pc-toggle-highlight').addEventListener('change', (e) => {
        this.state.enableHighlight = e.target.checked;
        this.updateSimulation();
      });

      // 4. Color Swatches
      container.querySelectorAll('.pc-color-swatch-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          container.querySelectorAll('.pc-color-swatch-btn').forEach(b => b.classList.remove('is-active'));
          btn.classList.add('is-active');
          this.state.color = btn.dataset.rgb.split(',').map(n => parseInt(n.trim(), 10));
          this.updateSimulation();
        });
      });

      // 5. Viewport Tabs
      container.querySelectorAll('.pc-shadow-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          container.querySelectorAll('.pc-shadow-tab-btn').forEach(b => b.classList.remove('is-active'));
          btn.classList.add('is-active');
          const view = btn.dataset.view;
          this.state.activeTab = view;
          container.querySelector('#pc-view-landscape').style.display = view === 'landscape' ? 'block' : 'none';
          container.querySelector('#pc-view-ui-stack').style.display = view === 'ui-stack' ? 'flex' : 'none';
          container.querySelector('#pc-view-icons').style.display = view === 'icons' ? 'flex' : 'none';
        });
      });

      // 6. Presets
      const PRESETS = {
        micro: { angle: 315, elevation: 2, blur: 4, opacity: 0.52, label: '0.5mm' },
        standard: { angle: 315, elevation: 4.5, blur: 10, opacity: 0.48, label: '2mm (B표준)' },
        diorama: { angle: 315, elevation: 14, blur: 24, opacity: 0.42, label: '8mm' },
        raking: { angle: 80, elevation: 20, blur: 30, opacity: 0.48, label: '15mm' },
        levitate: { angle: 315, elevation: 26, blur: 42, opacity: 0.38, label: '25mm' }
      };

      container.querySelectorAll('.pc-depth-preset-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          container.querySelectorAll('.pc-depth-preset-btn').forEach(b => b.classList.remove('is-active'));
          btn.classList.add('is-active');
          const p = PRESETS[btn.dataset.preset];
          if (p) {
            this.state.angle = p.angle;
            this.state.elevation = p.elevation;
            this.state.blur = p.blur;
            this.state.opacity = p.opacity;

            elElevation.value = p.elevation;
            elBlur.value = p.blur;
            elOpacity.value = Math.round(p.opacity * 100);

            this.updateSimulation();
          }
        });
      });

      // 7. Copy CSS Button
      const copyBtn = container.querySelector('#pc-copy-shadow-btn');
      copyBtn.addEventListener('click', () => {
        const code = container.querySelector('#pc-sim-code-readout').textContent;
        navigator.clipboard.writeText(code).then(() => {
          if (typeof window.showPaperToast === 'function') {
            window.showPaperToast('3D 페이퍼 그림자 CSS 코드가 클립보드에 복사되었습니다!', 'mint');
          }
        });
      });
    },

    updateSimulation() {
      const { angle, elevation, blur, opacity, color, enableTier1, enableTier2, enableTier3, enableHighlight } = this.state;
      const [r, g, b] = color;

      // Calculate directional vectors (Angle in radians)
      // 0 deg = top light (shadow down, dy > 0, dx = 0)
      // 315 deg = top-left light (shadow down-right, dx > 0, dy > 0)
      const rad = (angle - 90) * (Math.PI / 180);
      const cosA = Math.cos(rad);
      const sinA = Math.sin(rad);

      // Tier 1: Contact shadow
      const dx1 = (elevation * 0.28 * cosA).toFixed(1);
      const dy1 = (elevation * 0.28 * sinA).toFixed(1);
      const blur1 = Math.max(1, Math.round(elevation * 0.45));
      const op1 = Math.min(0.55, (opacity * 1.35)).toFixed(2);

      // Tier 2: Mid-air floating elevation
      const dx2 = (elevation * 0.9 * cosA).toFixed(1);
      const dy2 = (elevation * 0.9 * sinA).toFixed(1);
      const blur2 = blur;
      const op2 = opacity.toFixed(2);

      // Tier 3: Atmospheric ambient floor
      const dx3 = (elevation * 1.6 * cosA).toFixed(1);
      const dy3 = (elevation * 1.6 * sinA).toFixed(1);
      const blur3 = Math.round(blur * 2.2);
      const op3 = (opacity * 0.55).toFixed(2);

      // Tier 4: Knife-cut highlight rim (facing towards the light)
      const hlDx = (-1 * cosA).toFixed(1);
      const hlDy = (-1 * sinA).toFixed(1);

      // Build Multi-Tier CSS box-shadow string
      const shadowParts = [];
      if (enableHighlight) {
        shadowParts.push(`${hlDx}px ${hlDy}px 0 rgba(255, 255, 255, 0.95) inset`);
      }
      if (enableTier1) {
        shadowParts.push(`${dx1}px ${dy1}px ${blur1}px rgba(${r}, ${g}, ${b}, ${op1})`);
      }
      if (enableTier2) {
        shadowParts.push(`${dx2}px ${dy2}px ${blur2}px rgba(${r}, ${g}, ${b}, ${op2})`);
      }
      if (enableTier3) {
        shadowParts.push(`${dx3}px ${dy3}px ${blur3}px rgba(${r}, ${g}, ${b}, ${op3})`);
      }

      const fullBoxShadow = shadowParts.length ? shadowParts.join(',\n    ') : 'none';
      const singleLineShadow = shadowParts.join(', ');

      // Update Needle & Badges
      const needle = document.getElementById('pc-lamp-needle');
      if (needle) needle.style.transform = `rotate(${angle}deg)`;

      const angleBadge = document.getElementById('pc-sim-angle-badge');
      if (angleBadge) {
        let desc = '커스텀';
        if (angle >= 300 && angle <= 330) desc = '315° 탑레프트 데스크광';
        else if (angle >= 340 || angle <= 20) desc = '0° 정오 직사광';
        else if (angle >= 35 && angle <= 65) desc = '45° 모닝광';
        else if (angle >= 75 && angle <= 105) desc = '90° 우측 사광';
        else if (angle >= 165 && angle <= 195) desc = '180° 하단 림라이트';
        else if (angle >= 255 && angle <= 285) desc = '270° 좌측 사광';
        angleBadge.textContent = `${angle}° (${desc})`;
      }

      const valElev = document.getElementById('pc-val-elevation');
      if (valElev) valElev.textContent = `${elevation}px (단차)`;

      const valBlur = document.getElementById('pc-val-blur');
      if (valBlur) valBlur.textContent = `${blur}px (확산)`;

      const valOpacity = document.getElementById('pc-val-opacity');
      if (valOpacity) valOpacity.textContent = `${Math.round(opacity * 100)}% (농도)`;

      // Apply to UI Sample Target
      const targetCard = document.getElementById('pc-sim-target-card');
      if (targetCard) targetCard.style.boxShadow = singleLineShadow;

      const targetBtn = document.getElementById('pc-sim-target-btn');
      if (targetBtn) targetBtn.style.boxShadow = singleLineShadow;

      // Apply to Icon Plates
      document.querySelectorAll('.pc-shadow-icon-plate').forEach(plate => {
        plate.style.boxShadow = singleLineShadow;
      });

      // Apply progressive depth to 5 Landscape Layers
      const mounts = document.querySelectorAll('.pc-layer-mount');
      mounts.forEach(mount => {
        const tier = parseInt(mount.dataset.depthTier, 10) || 1;
        const multiplier = tier * 0.75;
        const lDx = (dx2 * multiplier).toFixed(1);
        const lDy = (dy2 * multiplier).toFixed(1);
        const lBlur = Math.round(blur2 * multiplier);
        const lOp = Math.min(0.35, opacity * multiplier).toFixed(2);

        mount.style.filter = `drop-shadow(${lDx}px ${lDy}px ${lBlur}px rgba(${r}, ${g}, ${b}, ${lOp}))`;
      });

      // Update Code Readout
      const codeReadout = document.getElementById('pc-sim-code-readout');
      if (codeReadout) codeReadout.textContent = `box-shadow: ${singleLineShadow};`;
    },

    initParallaxTilt(container) {
      const well = container.querySelector('#pc-shadow-stage-well');
      const canvas = container.querySelector('#pc-shadow-stage-canvas');
      if (!well || !canvas) return;

      well.addEventListener('mousemove', (e) => {
        const r = well.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5; // -0.5 ~ 0.5
        const y = (e.clientY - r.top) / r.height - 0.5; // -0.5 ~ 0.5

        const rotX = (-y * 14).toFixed(1);
        const rotY = (x * 18).toFixed(1);

        canvas.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`;

        // Shift layers in 3D parallax
        container.querySelectorAll('.pc-layer-mount').forEach(m => {
          const tier = parseInt(m.dataset.depthTier, 10) || 1;
          const shiftX = (x * tier * 12).toFixed(1);
          const shiftY = (y * tier * 6).toFixed(1);
          m.style.transform = `translate3d(${shiftX}px, ${shiftY}px, ${tier * 8}px)`;
        });
      });

      well.addEventListener('mouseleave', () => {
        canvas.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
        container.querySelectorAll('.pc-layer-mount').forEach(m => {
          m.style.transform = 'translate3d(0, 0, 0)';
        });
      });
    }
  };

  // Auto-init on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => PaperShadowStudio.init());
  } else {
    PaperShadowStudio.init();
  }

  window.PaperShadowStudio = PaperShadowStudio;
})();
