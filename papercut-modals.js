/**
 * PaperCut UI - 3D Papercraft Modal, Sheet & Drawer Controller
 * Provides real interactive Dialog, Side Sheet, and Bottom Drawer overlays.
 */

(function () {
  'use strict';

  let dialogBackdrop = null;
  let sheetBackdrop = null;
  let drawerBackdrop = null;

  function ensureModalsDOM() {
    // 1. Dialog (Shadowbox Modal)
    if (!dialogBackdrop) {
      dialogBackdrop = document.createElement('div');
      dialogBackdrop.id = 'pc-modal-dialog-backdrop';
      dialogBackdrop.className = 'pc-modal-backdrop';
      dialogBackdrop.innerHTML = `
        <div class="pc-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="pc-dialog-title">
          <div class="pc-dialog-washi"></div>
          <div class="pc-dialog-header">
            <div class="pc-dialog-title-wrap">
              <h3 class="pc-dialog-title" id="pc-dialog-title">
                <span class="pc-inline-icon is-sm" data-icon="settings"></span>
                <span>3D 페이퍼 섀도우박스 모달</span>
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
                <input type="text" class="pc-input" value="오리가미 아틀리에 에디터" style="width: 100%;">
              </div>
              <div>
                <label style="display: block; font-size: 13px; font-weight: 700; color: #4A3A2C; margin-bottom: 6px;">
                  종이 지질 선택 (16종 스톡)
                </label>
                <div class="pc-select-wrapper">
                  <select class="pc-select">
                    <option>300g 수제 코튼지 (Cotton Handmade)</option>
                    <option>350g 매트 크림보드 (Matte Cream Board)</option>
                    <option>닥나무 전통 한지 (Mulberry Hanji)</option>
                    <option>프렌치 린넨 패브릭지 (French Linen)</option>
                  </select>
                </div>
              </div>
              <div style="background: #F3ECE1; border-radius: 12px; padding: 12px 14px; border: 1px solid #E2D6C3;">
                <label class="pc-checkbox-label" style="font-size: 13px;">
                  <input type="checkbox" class="pc-checkbox-input" checked>
                  <span class="pc-checkbox-box"></span>
                  <span>칼선 외곽선(Stroke) 2.0px 안티앨리어싱 자동 보정</span>
                </label>
              </div>
            </div>
          </div>
          <div class="pc-dialog-footer">
            <button type="button" class="pc-btn pc-btn-ghost" id="pc-dialog-btn-cancel">취소</button>
            <button type="button" class="pc-btn pc-btn-mint" id="pc-dialog-btn-confirm">
              <span class="pc-inline-icon is-xs" data-icon="check"></span>
              <span>설정 저장하기</span>
            </button>
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
        <div class="pc-modal-sheet" role="dialog" aria-modal="true">
          <div class="pc-sheet-header">
            <div>
              <div style="display: flex; gap: 6px; margin-bottom: 4px;">
                <span class="pc-badge pc-badge-peach" style="font-size: 11px;">Slide-Over Sheet</span>
                <span class="pc-badge pc-badge-lavender" style="font-size: 11px;">사이드 패널</span>
              </div>
              <h3 style="margin: 0; font-size: 20px; font-weight: 800; color: #37281E; display: flex; align-items: center; gap: 8px;">
                <span class="pc-inline-icon is-sm" data-icon="book"></span>
                <span>종이 공예 장바구니 & 주문서</span>
              </h3>
            </div>
            <button type="button" class="pc-dialog-close" id="pc-sheet-btn-close" aria-label="닫기">
              <span class="pc-inline-icon is-xs" data-icon="close"></span>
            </button>
          </div>
          <div class="pc-sheet-body">
            <div style="display: flex; flex-direction: column; gap: 14px;">
              <!-- Item 1 -->
              <div class="pc-card" style="padding: 14px; background: #FFFFFF; border-radius: 14px; border: 1.5px solid #E6DCCB;">
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
                  <span class="pc-badge pc-badge-mint" style="font-weight: 800;">₩18,500</span>
                </div>
              </div>

              <!-- Item 2 -->
              <div class="pc-card" style="padding: 14px; background: #FFFFFF; border-radius: 14px; border: 1.5px solid #E6DCCB;">
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
                  <span class="pc-badge pc-badge-peach" style="font-weight: 800;">₩12,000</span>
                </div>
              </div>

              <!-- Item 3 -->
              <div class="pc-card" style="padding: 14px; background: #FFFFFF; border-radius: 14px; border: 1.5px solid #E6DCCB;">
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
                  <span class="pc-badge pc-badge-lavender" style="font-weight: 800;">₩9,800</span>
                </div>
              </div>

              <!-- Summary -->
              <div style="background: #F4EFE6; border-radius: 14px; padding: 14px 16px; margin-top: 8px;">
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

      // Event listeners
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
        <div class="pc-modal-drawer" role="dialog" aria-modal="true">
          <div class="pc-drawer-pull-tab" id="pc-drawer-tab" title="아래로 스와이프하여 닫기"></div>
          <div class="pc-drawer-header">
            <div>
              <div style="font-size: 11px; font-weight: 800; color: #8F7D6D; text-transform: uppercase; letter-spacing: 0.5px;">Bottom Drawer Tray</div>
              <h3 style="margin: 0; font-size: 18px; font-weight: 800; color: #37281E; display: flex; align-items: center; gap: 8px;">
                <span class="pc-inline-icon is-sm" data-icon="inbox"></span>
                <span>서랍형 바텀 드로어 트레이 (Drawer)</span>
              </h3>
            </div>
            <button type="button" class="pc-dialog-close" id="pc-drawer-btn-close" aria-label="닫기">
              <span class="pc-inline-icon is-xs" data-icon="close"></span>
            </button>
          </div>
          <div class="pc-drawer-body">
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
  }

  function openDialog(opts = {}) {
    ensureModalsDOM();
    if (opts.title) {
      const titleSpan = dialogBackdrop.querySelector('#pc-dialog-title span:last-child');
      if (titleSpan) titleSpan.textContent = opts.title;
    }
    if (opts.desc) {
      const descEl = dialogBackdrop.querySelector('#pc-dialog-desc');
      if (descEl) descEl.textContent = opts.desc;
    }
    dialogBackdrop.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  function closeDialog() {
    if (dialogBackdrop) {
      dialogBackdrop.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  }

  function openSheet(opts = {}) {
    ensureModalsDOM();
    sheetBackdrop.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  function closeSheet() {
    if (sheetBackdrop) {
      sheetBackdrop.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  }

  function openDrawer(opts = {}) {
    ensureModalsDOM();
    drawerBackdrop.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (drawerBackdrop) {
      drawerBackdrop.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  }

  // Global Keydown Handler (Escape closes active modal)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDialog();
      closeSheet();
      closeDrawer();
    }
  });

  // Export API
  window.PaperCutModal = {
    openDialog,
    closeDialog,
    openSheet,
    closeSheet,
    openDrawer,
    closeDrawer
  };

  // Wire up with PaperCutShadcnUI
  if (!window.PaperCutShadcnUI) window.PaperCutShadcnUI = {};
  window.PaperCutShadcnUI.openDemoModal = openDialog;
  window.PaperCutShadcnUI.openDemoSheet = openSheet;
  window.PaperCutShadcnUI.openDemoDrawer = openDrawer;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ensureModalsDOM);
  } else {
    ensureModalsDOM();
  }

})();
