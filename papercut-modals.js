/**
 * PaperCut UI - 3D Papercraft Modal, Dialog, Sheet & Drawer Controller
 * 12 Kirigami Archetypes (Perforated Stamp, Antique Wax Seal, Notched Cinema Ticket,
 * Ultra-Thin Crisp, Hanging Tag, Dog-ear Fold, Washi Note, Emerald Gem, Deckle Edge,
 * Swallowtail Ribbon, Envelope Pocket, Double-Notch Voucher)
 */

(function () {
  'use strict';

  let dialogBackdrop = null;
  let sheetBackdrop = null;
  let drawerBackdrop = null;
  let previousActiveElement = null;

  // 12 Kirigami Archetype Names
  const KIRIGAMI_STYLES = [
    'washi', 'wax', 'ticket', 'thin', 'tag', 'dogear',
    'gem', 'stamp', 'deckle', 'ribbon', 'envelope', 'voucher'
  ];

  // 7 Pastel Paper Variant Names
  const PASTEL_VARIANTS = [
    'mint', 'peach', 'lavender', 'buttercup', 'sky', 'rose', 'cream', 'sage'
  ];

  // 페이퍼 레이어 엔진이 아는 7톤 (sage 등 그 밖의 변형은 mint로)
  const PAPER_TONES = ['mint', 'peach', 'lavender', 'buttercup', 'sky', 'rose', 'cream'];

  // 동적으로 바뀐 오버레이 내용을 즉시 수화한다(엔진이 없으면 아무 일도 안 한다)
  function hydratePaper(el) {
    const paper = window.PaperCutUI && window.PaperCutUI.paper;
    if (paper && typeof paper.hydrate === 'function' && el) paper.hydrate(el);
  }

  // SVG Medallion Templates
  const WAX_SEAL_SVG = `
    <svg class="pc-wax-seal-svg" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="pc-modal-wax-sh" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="1.2" stdDeviation="0.6" flood-color="#2E1E14" flood-opacity="0.48"/>
          <feDropShadow dx="0" dy="3.5" stdDeviation="1.8" flood-color="#2E1E14" flood-opacity="0.26"/>
          <feDropShadow dx="0" dy="-0.5" stdDeviation="0.3" flood-color="#FFFFFF" flood-opacity="0.95"/>
        </filter>
      </defs>
      <circle cx="22" cy="22" r="20" fill="#F5B8BE" filter="url(#pc-modal-wax-sh)"/>
      <circle cx="22" cy="22" r="16" fill="#F7BA9E"/>
      <circle cx="22" cy="22" r="11" fill="#FAF6ED"/>
      <path d="M 22 17 C 19.5 13.5 15.5 15.5 15.5 19.5 C 15.5 23.5 22 27.5 22 28 C 22 27.5 28.5 23.5 28.5 19.5 C 28.5 15.5 24.5 13.5 22 17 Z" fill="#F5B8BE"/>
    </svg>
  `;

  function ensureModalsDOM() {
    // 1. Dialog (Shadowbox Modal)
    if (!dialogBackdrop) {
      dialogBackdrop = document.createElement('div');
      dialogBackdrop.id = 'pc-modal-dialog-backdrop';
      dialogBackdrop.className = 'pc-modal-backdrop';
      dialogBackdrop.innerHTML = `
        <div class="pc-modal-dialog pc-modal-washi variant-mint" id="pc-active-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="pc-dialog-title" data-pc-paper="sheet" data-pc-tone="mint">
          <!-- Kirigami Ornamentation Mounts -->
          <div class="pc-dialog-washi" id="pc-dialog-washi-tape"></div>
          <div class="pc-modal-wax-seal" id="pc-dialog-wax-mount" style="display: none;">${WAX_SEAL_SVG}</div>
          <div class="pc-modal-dogear-flap" id="pc-dialog-dogear-mount" style="display: none;"></div>
          <div class="pc-modal-dogear-crease" id="pc-dialog-crease-mount" style="display: none;"></div>
          <div class="pc-modal-tag-eyelet" id="pc-dialog-tag-mount" style="display: none;"></div>
          <div class="pc-modal-ribbon-badge" id="pc-dialog-ribbon-mount" style="display: none;">
            <span class="pc-inline-icon is-xs" data-icon="sparkles"></span> <span>OFFICIAL</span>
          </div>
          <div class="pc-modal-envelope-flap" id="pc-dialog-envelope-mount" style="display: none;"></div>

          <div class="pc-dialog-inner">
            <div class="pc-dialog-header">
              <div class="pc-dialog-title-wrap">
                <h3 class="pc-dialog-title" id="pc-dialog-title">
                  <span class="pc-inline-icon is-sm" id="pc-dialog-icon" data-icon="settings"></span>
                  <span id="pc-dialog-title-text">3D 페이퍼 섀도우박스 모달</span>
                </h3>
                <p class="pc-dialog-desc" id="pc-dialog-desc">색종이를 정밀하게 레이어드한 핸드크래프트 다이얼로그 섀도우박스 창입니다.</p>
              </div>
              <button type="button" class="pc-dialog-close" id="pc-dialog-btn-close" aria-label="닫기">
                <span class="pc-inline-icon is-xs" data-icon="close"></span>
              </button>
            </div>

            <div class="pc-dialog-body" id="pc-dialog-body">
              <div style="display: flex; flex-direction: column; gap: 14px;">
                <div>
                  <label style="display: block; font-size: 13px; font-weight: 700; color: #4A3A2C; margin-bottom: 6px;">
                    프로필 명칭 (수제 라벨)
                  </label>
                  <div class="pc-ui-field-wrap pc-modal-field" data-pc-paper="field" data-pc-tone="cream">
                    <input type="text" class="pc-input" value="오리가미 아틀리에 에디터" style="width: 100%;">
                  </div>
                </div>
                <div>
                  <label style="display: block; font-size: 13px; font-weight: 700; color: #4A3A2C; margin-bottom: 6px;">
                    종이 지질 선택 (16종 스톡)
                  </label>
                  <div class="pc-ui-field-wrap pc-modal-field" data-pc-paper="field" data-pc-tone="cream">
                    <select class="pc-modal-select" aria-label="종이 지질 선택">
                      <option>300g 수제 코튼지 (Cotton Handmade)</option>
                      <option>350g 매트 크림보드 (Matte Cream Board)</option>
                      <option>닥나무 전통 한지 (Mulberry Hanji)</option>
                      <option>프렌치 린넨 패브릭지 (French Linen)</option>
                    </select>
                    <span class="pc-inline-icon is-xs pc-modal-select-caret" data-icon="arrow-down" aria-hidden="true"></span>
                  </div>
                </div>
                <div class="pc-modal-callout" data-pc-paper="field" data-pc-tone="buttercup">
                  <label class="pc-row pc-ui-checkbox-label pc-ui-ctl-label" style="--pc-gap: 8px; font-size: 13px;">
                    <span class="pc-ui-ctl pc-ui-ctl-check" data-pc-paper="knob" data-pc-tone="mint" data-pc-hover>
                      <input type="checkbox" class="pc-ui-ctl-input" checked>
                      <span class="pc-inline-icon is-xs pc-ui-ctl-mark" data-icon="check-mark"></span>
                    </span>
                    <span>칼선 외곽선(Stroke) 2.0px 안티앨리어싱 자동 보정</span>
                  </label>
                </div>
              </div>
            </div>

            <div class="pc-dialog-footer" id="pc-dialog-footer">
              <button type="button" class="pc-btn pc-btn-ghost" id="pc-dialog-btn-cancel">취소</button>
              <button type="button" class="pc-btn pc-btn-mint" id="pc-dialog-btn-confirm">
                <span class="pc-inline-icon is-xs" data-icon="check"></span>
                <span>설정 저장하기</span>
              </button>
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(dialogBackdrop);

      // Event listeners
      dialogBackdrop.addEventListener('click', (e) => {
        if (e.target === dialogBackdrop) closeDialog();
      });
      dialogBackdrop.querySelector('#pc-dialog-btn-close')?.addEventListener('click', closeDialog);
      dialogBackdrop.querySelector('#pc-dialog-btn-cancel')?.addEventListener('click', closeDialog);
      dialogBackdrop.querySelector('#pc-dialog-btn-confirm')?.addEventListener('click', () => {
        if (window.triggerPaperToast) {
          window.triggerPaperToast('모달 설정이 성공적으로 저장되었습니다!', 'mint', 'check');
        }
        closeDialog();
      });
    }

    // 2. Side Sheet (Slide-over Panel)
    if (!sheetBackdrop) {
      sheetBackdrop = document.createElement('div');
      sheetBackdrop.id = 'pc-modal-sheet-backdrop';
      sheetBackdrop.className = 'pc-modal-sheet-backdrop';
      sheetBackdrop.innerHTML = `
        <div class="pc-modal-sheet" role="dialog" aria-modal="true" aria-labelledby="pc-sheet-title" data-pc-paper="sheet" data-pc-tone="cream">
          <div class="pc-sheet-header">
            <div>
              <div style="display: flex; gap: 6px; margin-bottom: 4px;">
                <span class="pc-badge pc-badge-peach" data-pc-paper="pill" data-pc-tone="peach" style="font-size: 11px;">Slide-Over Sheet</span>
                <span class="pc-badge pc-badge-lavender" data-pc-paper="pill" data-pc-tone="lavender" style="font-size: 11px;">사이드 패널</span>
              </div>
              <h3 style="margin: 0; font-size: 20px; font-weight: 800; color: #37281E; display: flex; align-items: center; gap: 8px;">
                <span class="pc-inline-icon is-sm" data-icon="book"></span>
                <span id="pc-sheet-title">종이 공예 장바구니 & 주문서</span>
              </h3>
            </div>
            <button type="button" class="pc-dialog-close" id="pc-sheet-btn-close" aria-label="닫기">
              <span class="pc-inline-icon is-xs" data-icon="close"></span>
            </button>
          </div>
          <div class="pc-sheet-body" id="pc-sheet-body">
            <div style="display: flex; flex-direction: column; gap: 14px;">
              <!-- Item 1 -->
              <div class="pc-card pc-modal-sheet-item" data-pc-paper="sheet" data-pc-tone="mint">
                <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                  <div style="display: flex; gap: 10px; align-items: center;">
                    <div style="width: 40px; height: 40px; background: #E8F6EE; border-radius: 10px; display: flex; align-items: center; justify-content: center; border: 1px solid #C4E5D4;">
                      <span class="pc-inline-icon is-sm" data-icon="scissors"></span>
                    </div>
                    <div>
                      <div style="font-weight: 800; font-size: 14px; color: #37281E;">수제 코튼 페이퍼 팩 (50매)</div>
                      <div style="font-size: 12px; color: #8A7A6A;">300g 미색 코튼 보드지</div>
                    </div>
                  </div>
                  <span class="pc-badge pc-badge-mint" data-pc-paper="pill" data-pc-tone="mint" style="font-weight: 800;">₩18,500</span>
                </div>
              </div>

              <!-- Item 2 -->
              <div class="pc-card pc-modal-sheet-item" data-pc-paper="sheet" data-pc-tone="peach">
                <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                  <div style="display: flex; gap: 10px; align-items: center;">
                    <div style="width: 40px; height: 40px; background: #FDEFE6; border-radius: 10px; display: flex; align-items: center; justify-content: center; border: 1px solid #F8D3BE;">
                      <span class="pc-inline-icon is-sm" data-icon="palette"></span>
                    </div>
                    <div>
                      <div style="font-weight: 800; font-size: 14px; color: #37281E;">파스텔 마스킹 테이프 6색 세트</div>
                      <div style="font-size: 12px; color: #8A7A6A;">15mm 폭 반투명 와시 테이프</div>
                    </div>
                  </div>
                  <span class="pc-badge pc-badge-peach" data-pc-paper="pill" data-pc-tone="peach" style="font-weight: 800;">₩12,000</span>
                </div>
              </div>

              <!-- Item 3 -->
              <div class="pc-card pc-modal-sheet-item" data-pc-paper="sheet" data-pc-tone="lavender">
                <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                  <div style="display: flex; gap: 10px; align-items: center;">
                    <div style="width: 40px; height: 40px; background: #F3EEFD; border-radius: 10px; display: flex; align-items: center; justify-content: center; border: 1px solid #D9CBFA;">
                      <span class="pc-inline-icon is-sm" data-icon="sparkles"></span>
                    </div>
                    <div>
                      <div style="font-weight: 800; font-size: 14px; color: #37281E;">정밀 황동 크래프트 나이프</div>
                      <div style="font-size: 12px; color: #8A7A6A;">30도 각도 미세 칼날 10매 포함</div>
                    </div>
                  </div>
                  <span class="pc-badge pc-badge-lavender" data-pc-paper="pill" data-pc-tone="lavender" style="font-weight: 800;">₩9,800</span>
                </div>
              </div>

              <!-- Summary -->
              <div class="pc-modal-sheet-summary" data-pc-paper="field" data-pc-tone="cream">
                <div style="display: flex; justify-content: space-between; font-size: 13px; color: #6D5C4C; margin-bottom: 6px;">
                  <span>상품 소계</span>
                  <span>₩40,300</span>
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 13px; color: #6D5C4C; margin-bottom: 8px;">
                  <span>친환경 종이 완충재 배송비</span>
                  <span>₩3,000</span>
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 16px; font-weight: 800; color: #37281E; border-top: 1px dashed #DCCFBD; padding-top: 8px;">
                  <span>최종 결제 금액</span>
                  <span style="color: #2D6B4E;">₩43,300</span>
                </div>
              </div>
            </div>
          </div>
          <div class="pc-sheet-footer">
            <button type="button" class="pc-btn pc-btn-ghost" id="pc-sheet-btn-cancel">닫기</button>
            <button type="button" class="pc-btn pc-btn-peach" id="pc-sheet-btn-order">
              <span class="pc-inline-icon is-xs" data-icon="cart"></span>
              <span>주문서 작성하기</span>
            </button>
          </div>
        </div>
      `;
      document.body.appendChild(sheetBackdrop);

      sheetBackdrop.addEventListener('click', (e) => {
        if (e.target === sheetBackdrop) closeSheet();
      });
      sheetBackdrop.querySelector('#pc-sheet-btn-close')?.addEventListener('click', closeSheet);
      sheetBackdrop.querySelector('#pc-sheet-btn-cancel')?.addEventListener('click', closeSheet);
      sheetBackdrop.querySelector('#pc-sheet-btn-order')?.addEventListener('click', () => {
        if (window.triggerPaperToast) {
          window.triggerPaperToast('주문서가 생성되었습니다. 수제 영수증을 확인하세요!', 'peach', 'cart');
        }
        closeSheet();
      });
    }

    // 3. Bottom Drawer (Slide-up Craft Tray)
    if (!drawerBackdrop) {
      drawerBackdrop = document.createElement('div');
      drawerBackdrop.id = 'pc-modal-drawer-backdrop';
      drawerBackdrop.className = 'pc-modal-drawer-backdrop';
      drawerBackdrop.innerHTML = `
        <div class="pc-modal-drawer" role="dialog" aria-modal="true" aria-labelledby="pc-drawer-title" data-pc-paper="sheet" data-pc-tone="lavender" style="--pc-paper-radius: 24px;">
          <div class="pc-drawer-pull-tab" id="pc-drawer-tab" data-pc-paper="track" data-pc-tone="cream" title="아래로 스와이프하여 닫기"></div>
          <div class="pc-drawer-header">
            <div>
              <div style="font-size: 11px; font-weight: 800; color: #8F7D6D; text-transform: uppercase; letter-spacing: 0.5px;">Bottom Drawer Tray</div>
              <h3 style="margin: 0; font-size: 18px; font-weight: 800; color: #37281E; display: flex; align-items: center; gap: 8px;">
                <span class="pc-inline-icon is-sm" data-icon="inbox"></span>
                <span id="pc-drawer-title">서랍형 바텀 드로어 트레이 (Drawer)</span>
              </h3>
            </div>
            <button type="button" class="pc-dialog-close" id="pc-drawer-btn-close" aria-label="닫기">
              <span class="pc-inline-icon is-xs" data-icon="close"></span>
            </button>
          </div>
          <div class="pc-drawer-body" id="pc-drawer-body">
            <p style="margin: 0 0 16px; font-size: 13.5px; color: #6D5C4C;">
              화면 하단에서 부드럽게 솟아오르는 슬라이드업 크래프트 트레이입니다. 모바일 액션 시트나 빠른 설정 제어에 최적화되어 있습니다.
            </p>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 12px; margin-bottom: 12px;">
              <button type="button" class="pc-btn pc-btn-mint" style="padding: 12px 14px; flex-direction: column; gap: 6px; font-size: 13px;" onclick="window.triggerPaperToast('민트 테마 적용됨', 'mint')">
                <span class="pc-inline-icon is-sm" data-icon="palette"></span>
                <span>민트 색지</span>
              </button>
              <button type="button" class="pc-btn pc-btn-peach" style="padding: 12px 14px; flex-direction: column; gap: 6px; font-size: 13px;" onclick="window.triggerPaperToast('살구빛 테마 적용됨', 'peach')">
                <span class="pc-inline-icon is-sm" data-icon="flower"></span>
                <span>피치 살구지</span>
              </button>
              <button type="button" class="pc-btn pc-btn-lavender" style="padding: 12px 14px; flex-direction: column; gap: 6px; font-size: 13px;" onclick="window.triggerPaperToast('라벤더 테마 적용됨', 'lavender')">
                <span class="pc-inline-icon is-sm" data-icon="sparkles"></span>
                <span>라벤더 한지</span>
              </button>
              <button type="button" class="pc-btn pc-btn-buttercup" style="padding: 12px 14px; flex-direction: column; gap: 6px; font-size: 13px;" onclick="window.triggerPaperToast('햇살 버터컵 테마 적용됨', 'buttercup')">
                <span class="pc-inline-icon is-sm" data-icon="sun"></span>
                <span>햇살 버터컵</span>
              </button>
            </div>
          </div>
          <div class="pc-drawer-footer">
            <button type="button" class="pc-btn pc-btn-ghost" id="pc-drawer-btn-dismiss">서랍 닫기</button>
          </div>
        </div>
      `;
      document.body.appendChild(drawerBackdrop);

      drawerBackdrop.addEventListener('click', (e) => {
        if (e.target === drawerBackdrop) closeDrawer();
      });
      drawerBackdrop.querySelector('#pc-drawer-btn-close')?.addEventListener('click', closeDrawer);
      drawerBackdrop.querySelector('#pc-drawer-btn-dismiss')?.addEventListener('click', closeDrawer);
      drawerBackdrop.querySelector('#pc-drawer-tab')?.addEventListener('click', closeDrawer);
    }

    // Hydrate icons in created modals
    if (typeof window.hydratePapercutIcons === 'function') {
      window.hydratePapercutIcons(dialogBackdrop);
      window.hydratePapercutIcons(sheetBackdrop);
      window.hydratePapercutIcons(drawerBackdrop);
    }
    hydratePaper(dialogBackdrop);
    hydratePaper(sheetBackdrop);
    hydratePaper(drawerBackdrop);
  }

  function getFocusableElements(container) {
    if (!container) return [];
    return Array.from(container.querySelectorAll(
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    ));
  }

  function getActiveModal() {
    if (dialogBackdrop && dialogBackdrop.classList.contains('is-active')) return dialogBackdrop;
    if (sheetBackdrop && sheetBackdrop.classList.contains('is-active')) return sheetBackdrop;
    if (drawerBackdrop && drawerBackdrop.classList.contains('is-active')) return drawerBackdrop;
    return null;
  }

  /**
   * Open 3D Papercraft Dialog
   * @param {Object} opts - Dialog configuration options
   *   kirigami: 'washi' | 'wax' | 'ticket' | 'thin' | 'tag' | 'dogear' | 'gem' | 'stamp' | 'deckle' | 'ribbon' | 'envelope' | 'voucher'
   *   variant: 'mint' | 'peach' | 'lavender' | 'buttercup' | 'sky' | 'rose' | 'cream' | 'sage'
   *   title: string
   *   desc: string
   *   icon: string (papercut icon name)
   *   body: string | HTMLElement
   *   confirmLabel: string
   *   cancelLabel: string
   *   confirmStyle: string (e.g. 'pc-btn-mint', 'pc-btn-kirigami-wax')
   *   onConfirm: Function
   *   onCancel: Function
   *   customButtons: Array<{ label, class, onClick }>
   */
  function openDialog(opts = {}) {
    ensureModalsDOM();
    previousActiveElement = document.activeElement;

    const dialogEl = dialogBackdrop.querySelector('#pc-active-modal-dialog');
    if (!dialogEl) return;

    const kirigami = opts.kirigami || opts.style || 'washi';
    const variant = opts.variant || 'mint';

    // Reset kirigami & variant classes
    KIRIGAMI_STYLES.forEach(s => dialogEl.classList.remove(`pc-modal-${s}`));
    PASTEL_VARIANTS.forEach(v => dialogEl.classList.remove(`variant-${v}`));

    dialogEl.classList.add(`pc-modal-${kirigami}`);
    dialogEl.classList.add(`variant-${variant}`);

    // 페이퍼 레이어: 티켓 모달은 반원 노치가 있는 ticket 색지, 나머지는 sheet. 톤은 모달 색지 변형을 따른다.
    dialogEl.setAttribute('data-pc-paper', kirigami === 'ticket' ? 'ticket' : 'sheet');
    dialogEl.setAttribute('data-pc-tone', PAPER_TONES.includes(variant) ? variant : 'mint');

    // Manage Kirigami Ornaments
    const washiTape = dialogBackdrop.querySelector('#pc-dialog-washi-tape');
    const waxMount = dialogBackdrop.querySelector('#pc-dialog-wax-mount');
    const dogearMount = dialogBackdrop.querySelector('#pc-dialog-dogear-mount');
    const creaseMount = dialogBackdrop.querySelector('#pc-dialog-crease-mount');
    const tagMount = dialogBackdrop.querySelector('#pc-dialog-tag-mount');
    const ribbonMount = dialogBackdrop.querySelector('#pc-dialog-ribbon-mount');
    const envelopeMount = dialogBackdrop.querySelector('#pc-dialog-envelope-mount');

    if (washiTape) washiTape.style.display = (kirigami === 'washi') ? 'block' : 'none';
    if (waxMount) waxMount.style.display = (kirigami === 'wax') ? 'block' : 'none';
    if (dogearMount) dogearMount.style.display = (kirigami === 'dogear') ? 'block' : 'none';
    if (creaseMount) creaseMount.style.display = (kirigami === 'dogear') ? 'block' : 'none';
    if (tagMount) tagMount.style.display = (kirigami === 'tag') ? 'block' : 'none';
    if (ribbonMount) ribbonMount.style.display = (kirigami === 'ribbon') ? 'block' : 'none';
    if (envelopeMount) envelopeMount.style.display = (kirigami === 'envelope') ? 'block' : 'none';

    // Title & Description
    const titleEl = dialogBackdrop.querySelector('#pc-dialog-title-text');
    if (titleEl && opts.title) titleEl.textContent = opts.title;

    const descEl = dialogBackdrop.querySelector('#pc-dialog-desc');
    if (descEl) {
      if (opts.desc) {
        descEl.textContent = opts.desc;
        descEl.style.display = 'block';
      } else {
        descEl.style.display = 'none';
      }
    }

    // Icon
    const iconEl = dialogBackdrop.querySelector('#pc-dialog-icon');
    if (iconEl && opts.icon) {
      iconEl.setAttribute('data-icon', opts.icon);
    }

    // Body
    const bodyEl = dialogBackdrop.querySelector('#pc-dialog-body');
    if (bodyEl && opts.body) {
      if (typeof opts.body === 'string') {
        bodyEl.innerHTML = opts.body;
      } else if (opts.body instanceof HTMLElement) {
        bodyEl.innerHTML = '';
        bodyEl.appendChild(opts.body);
      }
    }

    // Footer & Buttons
    const footerEl = dialogBackdrop.querySelector('#pc-dialog-footer');
    if (footerEl) {
      if (opts.customButtons && Array.isArray(opts.customButtons)) {
        footerEl.innerHTML = '';
        opts.customButtons.forEach(btnDef => {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = btnDef.class || 'pc-btn pc-btn-ghost';
          btn.innerHTML = btnDef.label || '확인';
          btn.addEventListener('click', () => {
            if (typeof btnDef.onClick === 'function') btnDef.onClick(closeDialog);
            else closeDialog();
          });
          footerEl.appendChild(btn);
        });
      } else {
        const cancelBtn = footerEl.querySelector('#pc-dialog-btn-cancel');
        if (cancelBtn) {
          cancelBtn.textContent = opts.cancelLabel || '취소';
          cancelBtn.onclick = () => {
            if (typeof opts.onCancel === 'function') opts.onCancel();
            closeDialog();
          };
        }

        const confirmBtn = footerEl.querySelector('#pc-dialog-btn-confirm');
        if (confirmBtn) {
          const confirmText = confirmBtn.querySelector('span:last-child');
          if (confirmText) confirmText.textContent = opts.confirmLabel || '확인';
          if (opts.confirmStyle) {
            confirmBtn.className = `pc-btn ${opts.confirmStyle}`;
          } else {
            confirmBtn.className = `pc-btn pc-btn-${variant}`;
          }
          confirmBtn.onclick = () => {
            if (typeof opts.onConfirm === 'function') opts.onConfirm();
            closeDialog();
          };
        }
      }
    }

    // Close button styling: stamp or wax seal
    const closeBtn = dialogBackdrop.querySelector('#pc-dialog-btn-close');
    if (closeBtn) {
      closeBtn.className = 'pc-dialog-close';
      if (kirigami === 'wax') closeBtn.classList.add('is-wax');
      else if (kirigami === 'stamp') closeBtn.classList.add('is-stamp');
    }

    // Hydrate icons in dialog
    if (typeof window.hydratePapercutIcons === 'function') {
      window.hydratePapercutIcons(dialogEl);
    }

    hydratePaper(dialogEl);
    dialogBackdrop.classList.add('is-active');
    document.body.style.overflow = 'hidden';

    // Move focus to first focusable element
    requestAnimationFrame(() => {
      const focusable = getFocusableElements(dialogBackdrop);
      if (focusable.length > 0) focusable[0].focus();
    });
  }

  function closeDialog() {
    if (dialogBackdrop && dialogBackdrop.classList.contains('is-active')) {
      dialogBackdrop.classList.remove('is-active');
      document.body.style.overflow = '';
      if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
        previousActiveElement.focus();
        previousActiveElement = null;
      }
    }
  }

  /**
   * Open Side Sheet
   */
  function openSheet(opts = {}) {
    ensureModalsDOM();
    previousActiveElement = document.activeElement;

    if (opts.title) {
      const titleEl = sheetBackdrop.querySelector('#pc-sheet-title');
      if (titleEl) titleEl.textContent = opts.title;
    }
    if (opts.body) {
      const bodyEl = sheetBackdrop.querySelector('#pc-sheet-body');
      if (bodyEl) {
        if (typeof opts.body === 'string') bodyEl.innerHTML = opts.body;
        else if (opts.body instanceof HTMLElement) {
          bodyEl.innerHTML = '';
          bodyEl.appendChild(opts.body);
        }
      }
    }

    hydratePaper(sheetBackdrop);
    sheetBackdrop.classList.add('is-active');
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {
      const focusable = getFocusableElements(sheetBackdrop);
      if (focusable.length > 0) focusable[0].focus();
    });
  }

  function closeSheet() {
    if (sheetBackdrop && sheetBackdrop.classList.contains('is-active')) {
      sheetBackdrop.classList.remove('is-active');
      document.body.style.overflow = '';
      if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
        previousActiveElement.focus();
        previousActiveElement = null;
      }
    }
  }

  /**
   * Open Bottom Drawer
   */
  function openDrawer(opts = {}) {
    ensureModalsDOM();
    previousActiveElement = document.activeElement;

    if (opts.title) {
      const titleEl = drawerBackdrop.querySelector('#pc-drawer-title');
      if (titleEl) titleEl.textContent = opts.title;
    }
    if (opts.body) {
      const bodyEl = drawerBackdrop.querySelector('#pc-drawer-body');
      if (bodyEl) {
        if (typeof opts.body === 'string') bodyEl.innerHTML = opts.body;
        else if (opts.body instanceof HTMLElement) {
          bodyEl.innerHTML = '';
          bodyEl.appendChild(opts.body);
        }
      }
    }

    hydratePaper(drawerBackdrop);
    drawerBackdrop.classList.add('is-active');
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {
      const focusable = getFocusableElements(drawerBackdrop);
      if (focusable.length > 0) focusable[0].focus();
    });
  }

  function closeDrawer() {
    if (drawerBackdrop && drawerBackdrop.classList.contains('is-active')) {
      drawerBackdrop.classList.remove('is-active');
      document.body.style.overflow = '';
      if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
        previousActiveElement.focus();
        previousActiveElement = null;
      }
    }
  }

  // Global Keydown Handler (Escape closes active modal; Tab traps focus within modal)
  document.addEventListener('keydown', (e) => {
    const activeModal = getActiveModal();
    if (!activeModal) return;

    if (e.key === 'Escape') {
      closeDialog();
      closeSheet();
      closeDrawer();
      return;
    }

    if (e.key === 'Tab') {
      const focusable = getFocusableElements(activeModal);
      if (focusable.length === 0) return;
      const firstEl = focusable[0];
      const lastEl = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstEl || !activeModal.contains(document.activeElement)) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        if (document.activeElement === lastEl || !activeModal.contains(document.activeElement)) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    }
  });

  // Pre-packaged Kirigami Dialog Helpers
  function confirmModal(title, desc, onConfirm, opts = {}) {
    openDialog(Object.assign({
      title: title || '확인',
      desc: desc || '',
      icon: 'check',
      kirigami: 'washi',
      variant: 'mint',
      confirmLabel: '확인',
      cancelLabel: '취소',
      onConfirm
    }, opts));
  }

  function waxModal(opts = {}) {
    openDialog(Object.assign({
      kirigami: 'wax',
      variant: 'rose',
      icon: 'sparkles',
      confirmStyle: 'pc-btn-kirigami-wax'
    }, opts));
  }

  function ticketModal(opts = {}) {
    openDialog(Object.assign({
      kirigami: 'ticket',
      variant: 'buttercup',
      icon: 'ticket',
      confirmStyle: 'pc-btn-kirigami-ticket'
    }, opts));
  }

  function dogearModal(opts = {}) {
    openDialog(Object.assign({
      kirigami: 'dogear',
      variant: 'mint',
      icon: 'check',
      confirmStyle: 'pc-btn-kirigami-dogear'
    }, opts));
  }

  function stampModal(opts = {}) {
    openDialog(Object.assign({
      kirigami: 'stamp',
      variant: 'mint',
      icon: 'scissors',
      confirmStyle: 'pc-btn-kirigami-stamp'
    }, opts));
  }

  function washiModal(opts = {}) {
    openDialog(Object.assign({
      kirigami: 'washi',
      variant: 'peach',
      icon: 'bookmark',
      confirmStyle: 'pc-btn-kirigami-washi'
    }, opts));
  }

  function gemModal(opts = {}) {
    openDialog(Object.assign({
      kirigami: 'gem',
      variant: 'lavender',
      icon: 'sparkles',
      confirmStyle: 'pc-btn-kirigami-gem'
    }, opts));
  }

  function envelopeModal(opts = {}) {
    openDialog(Object.assign({
      kirigami: 'envelope',
      variant: 'peach',
      icon: 'mail',
      confirmStyle: 'pc-btn-kirigami-envelope'
    }, opts));
  }

  // Export API
  window.PaperCutModal = {
    openDialog,
    closeDialog,
    openSheet,
    closeSheet,
    openDrawer,
    closeDrawer,
    confirm: confirmModal,
    waxModal,
    ticketModal,
    dogearModal,
    stampModal,
    washiModal,
    gemModal,
    envelopeModal
  };

  // Wire up with PaperCutUI
  if (!window.PaperCutUI) window.PaperCutUI = {};
  window.PaperCutUI.openDemoModal = openDialog;
  window.PaperCutUI.openDemoSheet = openSheet;
  window.PaperCutUI.openDemoDrawer = openDrawer;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ensureModalsDOM);
  } else {
    ensureModalsDOM();
  }

})();
