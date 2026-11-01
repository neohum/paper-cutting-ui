var turngl = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e2) {
      throw mod = 0, e2;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // ../../../../../private/tmp/claude-501/-Users-nm-orca-projects-all-market/376d5a16-cda6-417a-8c5f-8be4c0cb7a0f/scratchpad/packs/shim/three-global.cjs
  var require_three_global = __commonJS({
    "../../../../../private/tmp/claude-501/-Users-nm-orca-projects-all-market/376d5a16-cda6-417a-8c5f-8be4c0cb7a0f/scratchpad/packs/shim/three-global.cjs"(exports, module) {
      module.exports = globalThis.THREE;
    }
  });

  // ../../../../../private/tmp/claude-501/-Users-nm-orca-projects-all-market/376d5a16-cda6-417a-8c5f-8be4c0cb7a0f/scratchpad/packs/x-turngl-0.2.0/package/dist/turngl.esm.js
  var turngl_esm_exports = {};
  __export(turngl_esm_exports, {
    Book3D: () => i,
    TurnGLElement: () => s,
    default: () => a
  });
  var t = __toESM(require_three_global());
  var e = (t2, e2, i2) => Math.max(e2, Math.min(i2, t2));
  var i = class {
    constructor(t2, e2 = {}) {
      this.PW = e2.pageWidth ?? 1.65, this.PH = e2.pageHeight ?? 2.33, this.SEGS = e2.segments ?? 32, this._dark = "light" !== e2.theme, this._camT = { x: 0, y: 0 }, this._camC = { x: 0, y: 0 }, this._camZ = 6, this._initRenderer(t2), this._initScene(), this._initFlipGeom(), this._loop();
    }
    _initRenderer(e2) {
      const i2 = this.renderer = new t.WebGLRenderer({ canvas: e2, antialias: true, alpha: true });
      i2.setPixelRatio(Math.min(devicePixelRatio, 2)), i2.shadowMap.enabled = true, i2.shadowMap.type = t.PCFSoftShadowMap, i2.setClearColor(0, 0), this.scene = new t.Scene(), this.camera = new t.PerspectiveCamera(26, 1, 0.1, 100), this.camera.position.set(0, 0, this._camZ);
    }
    _initScene() {
      const e2 = this.scene, { PW: i2, PH: s2 } = this;
      this._amb = new t.AmbientLight(16777215, 0.5), e2.add(this._amb);
      const a2 = this._key = new t.DirectionalLight(16775408, 0.75);
      a2.position.set(1.5, 3.5, 4), a2.castShadow = true, a2.shadow.mapSize.set(1024, 1024), a2.shadow.camera.left = -6, a2.shadow.camera.right = 6, a2.shadow.camera.top = 5, a2.shadow.camera.bottom = -5, a2.shadow.radius = 4, e2.add(a2);
      const o = new t.PointLight(15266047, 0.25);
      o.position.set(-3, 0, 4), e2.add(o), this.meshL = this._pageMesh(), this.meshL.position.x = -i2 / 2, e2.add(this.meshL), this.meshR = this._pageMesh(), this.meshR.position.x = i2 / 2, e2.add(this.meshR);
      const n = new t.Mesh(new t.BoxGeometry(0.04, s2 + 0.02, 0.015), new t.MeshLambertMaterial({ color: 197122 }));
      n.position.set(0, 0, 5e-3), e2.add(n);
      const h = new t.Mesh(new t.PlaneGeometry(10, 8), new t.ShadowMaterial({ opacity: 0.18 }));
      h.receiveShadow = true, h.position.z = -0.06, e2.add(h);
    }
    _initFlipGeom() {
      const { PW: e2, PH: i2, SEGS: s2 } = this, a2 = this.flipGeom = new t.PlaneGeometry(e2, i2, s2, 1), o = a2.attributes.position;
      this._nx = new Float32Array(o.count), this._oy = new Float32Array(o.count);
      for (let t2 = 0; t2 < o.count; t2++) this._nx[t2] = o.getX(t2) / e2, this._oy[t2] = o.getY(t2);
      this._mFF = this._mat(this._blankCanvas()), this.flipF = new t.Mesh(a2, this._mFF), this.flipF.castShadow = true, this.flipF.visible = false, this.scene.add(this.flipF), this._mFB = this._mat(this._blankCanvas(), true), this.flipB = new t.Mesh(a2, this._mFB), this.flipB.visible = false, this.scene.add(this.flipB);
    }
    _pageMesh() {
      const e2 = new t.Mesh(new t.PlaneGeometry(this.PW, this.PH), this._mat(this._blankCanvas()));
      return e2.receiveShadow = true, e2;
    }
    _mat(e2, i2 = false) {
      const s2 = new t.CanvasTexture(e2);
      return i2 && (s2.wrapS = t.RepeatWrapping, s2.repeat.x = -1, s2.offset.x = 1), new t.MeshLambertMaterial({ map: s2, side: i2 ? t.BackSide : t.FrontSide });
    }
    _setTex(e2, i2) {
      e2.map && e2.map.dispose();
      const s2 = new t.CanvasTexture(i2);
      e2.side === t.BackSide && (s2.wrapS = t.RepeatWrapping, s2.repeat.x = -1, s2.offset.x = 1), e2.map = s2, e2.needsUpdate = true;
    }
    _blankCanvas() {
      const t2 = document.createElement("canvas");
      return t2.width = t2.height = 4, t2.getContext("2d").fillStyle = this._dark ? "#0d0b08" : "#d6d3cc", t2.getContext("2d").fillRect(0, 0, 4, 4), t2;
    }
    showSpread(t2, e2) {
      this._setTex(this.meshL.material, t2 ?? this._blankCanvas()), this._setTex(this.meshR.material, e2 ?? this._blankCanvas()), this.meshL.visible = true, this.meshR.visible = true;
    }
    prepFlip(t2, e2, i2) {
      this._setTex(this._mFF, e2 ?? this._blankCanvas()), this._setTex(this._mFB, i2 ?? this._blankCanvas()), this.curl(0, t2), this.flipF.visible = true, this.flipB.visible = true, "fwd" === t2 ? this.meshR.visible = false : this.meshL.visible = false;
    }
    endFlip() {
      this.flipF.visible = false, this.flipB.visible = false, this.meshL.visible = true, this.meshR.visible = true;
    }
    curl(t2, i2) {
      const { PW: s2, flipGeom: a2, _nx: o, _oy: n } = this, h = a2.attributes.position, r = 0.25;
      for (let a3 = 0; a3 < h.count; a3++) {
        const d = o[a3], l = "fwd" === i2 ? d + 0.5 : 0.5 - d, p = l * s2, _ = e(1.25 * t2 - 0.125 + (l - 0.5) * r, 0, 1) * Math.PI;
        h.setX(a3, "fwd" === i2 ? p * Math.cos(_) : -p * Math.cos(_)), h.setZ(a3, p * Math.sin(_)), h.setY(a3, n[a3]);
      }
      h.needsUpdate = true, a2.computeVertexNormals();
    }
    animate(t2, e2, i2, s2, a2) {
      const o = performance.now(), n = () => {
        const h = Math.min(1, (performance.now() - o) / i2);
        s2(t2 + (e2 - t2) * ((t3) => t3 < 0.5 ? 2 * t3 * t3 : (4 - 2 * t3) * t3 - 1)(h)), h < 1 ? requestAnimationFrame(n) : a2();
      };
      requestAnimationFrame(n);
    }
    mouseLook(t2, e2) {
      this._camT.x = 0.14 * e2, this._camT.y = 0.16 * -t2;
    }
    setZoom(t2) {
      this._camZ = e(6 / t2, 3, 10);
    }
    setTheme(t2) {
      this._dark = t2, this._amb.intensity = t2 ? 0.5 : 0.72, this._key.intensity = t2 ? 0.75 : 0.55;
    }
    resize(t2, e2) {
      this.renderer.setSize(t2, e2, false), this.camera.aspect = t2 / e2, this.camera.updateProjectionMatrix();
    }
    dispose() {
      cancelAnimationFrame(this._rafId), this.renderer.dispose();
    }
    _loop() {
      this._rafId = requestAnimationFrame(() => this._loop());
      const { _camC: t2, _camT: e2 } = this;
      t2.x += 0.055 * (e2.x - t2.x), t2.y += 0.055 * (e2.y - t2.y), this.camera.position.set(t2.y * this._camZ * 0.12, t2.x * this._camZ * 0.12, this._camZ), this.camera.lookAt(0, 0, 0), this.renderer.render(this.scene, this.camera);
    }
  };
  var s = class extends HTMLElement {
    static get observedAttributes() {
      return ["src", "theme"];
    }
    constructor() {
      super(), this._spread = 0, this._pages = [], this._total = 0, this._anim = false, this._drag = null, this._dragging = false, this._zoom = 1;
    }
    connectedCallback() {
      this._build();
      const t2 = this.getAttribute("src");
      t2 && this.load(t2);
    }
    disconnectedCallback() {
      this._book?.dispose(), window.removeEventListener("pointermove", this._onMove), window.removeEventListener("pointerup", this._onUp);
    }
    attributeChangedCallback(t2, e2, i2) {
      "theme" === t2 && this._book && this._book.setTheme("light" !== i2), "src" === t2 && this._book && this.load(i2);
    }
    _build() {
      this.attachShadow({ mode: "open" }).innerHTML = '\n      <style>\n        :host { display:block; position:relative; overflow:hidden; }\n        canvas { position:absolute; inset:0; width:100%; height:100%; touch-action:none; cursor:default; }\n        canvas.grabbing { cursor:grabbing; }\n        #loader { position:absolute; inset:0; display:flex; flex-direction:column;\n          align-items:center; justify-content:center; gap:12px;\n          background:rgba(0,0,0,.7); color:#eee; font-family:system-ui; font-size:13px; }\n        #loader.hidden { display:none; }\n        #bar { width:160px; height:2px; background:#333; border-radius:2px; overflow:hidden; }\n        #fill { height:100%; background:#fff; width:0%; transition:width .1s; }\n      </style>\n      <canvas id="cv"></canvas>\n      <div id="loader">\n        <span id="msg">Loading\u2026</span>\n        <div id="bar"><div id="fill"></div></div>\n      </div>\n    ';
      const t2 = this.shadowRoot.getElementById("cv"), e2 = "light" !== this.getAttribute("theme");
      this._book = new i(t2, { theme: e2 ? "dark" : "light" }), this._ro = new ResizeObserver(() => {
        this._book.resize(this.clientWidth, this.clientHeight);
      }), this._ro.observe(this), this._book.resize(this.clientWidth, this.clientHeight), this._bindDrag(t2);
    }
    async load(t2) {
      if (!t2) return;
      const e2 = this.shadowRoot, i2 = e2.getElementById("msg"), s2 = e2.getElementById("fill");
      e2.getElementById("loader").classList.remove("hidden");
      try {
        if (!window.pdfjsLib) throw new Error("pdf.js not found. Add it as a script before turngl.");
        window.pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js", i2.textContent = "Fetching\u2026";
        const e3 = await fetch(t2);
        if (!e3.ok) throw new Error(`HTTP ${e3.status}`);
        const a2 = await e3.arrayBuffer();
        i2.textContent = "Parsing PDF\u2026";
        const o = await pdfjsLib.getDocument({ data: a2 }).promise;
        this._total = o.numPages, this._pages = new Array(this._total).fill(null), this._spread = 0;
        for (let t3 = 1; t3 <= this._total; t3++) {
          const e4 = await o.getPage(t3), a3 = e4.getViewport({ scale: 2.2 }), n = document.createElement("canvas");
          n.width = a3.width, n.height = a3.height, await e4.render({ canvasContext: n.getContext("2d"), viewport: a3 }).promise, this._pages[t3 - 1] = n, s2.style.width = Math.round(t3 / this._total * 100) + "%", i2.textContent = `${t3} / ${this._total}`;
        }
        this._showSpread(), this.dispatchEvent(new CustomEvent("load", { detail: { pages: this._total } }));
      } catch (t3) {
        return i2.textContent = "Error: " + t3.message, void this.dispatchEvent(new CustomEvent("error", { detail: t3 }));
      }
      e2.getElementById("loader").classList.add("hidden");
    }
    get totalSpreads() {
      return Math.ceil(this._total / 2);
    }
    get _li() {
      return 2 * this._spread;
    }
    get _ri() {
      return 2 * this._spread + 1;
    }
    _showSpread() {
      this._book.showSpread(this._pages[this._li] ?? null, this._pages[this._ri] ?? null);
    }
    next() {
      if (this._anim || this._spread >= this.totalSpreads - 1) return;
      this._anim = true;
      const t2 = this._pages[this._ri] ?? null, e2 = this._pages[this._li + 2] ?? null;
      this._book.prepFlip("fwd", t2, e2), this._book.animate(0, 1, 780, (t3) => this._book.curl(t3, "fwd"), () => {
        this._spread++, this._book.endFlip(), this._showSpread(), this._anim = false, this.dispatchEvent(new CustomEvent("pagechange", { detail: { spread: this._spread, page: this._li + 1 } }));
      });
    }
    prev() {
      if (this._anim || this._spread <= 0) return;
      this._anim = true;
      const t2 = this._pages[this._li] ?? null, e2 = this._pages[this._ri - 2] ?? null;
      this._book.prepFlip("bwd", t2, e2), this._book.animate(0, 1, 780, (t3) => this._book.curl(t3, "bwd"), () => {
        this._spread--, this._book.endFlip(), this._showSpread(), this._anim = false, this.dispatchEvent(new CustomEvent("pagechange", { detail: { spread: this._spread, page: this._li + 1 } }));
      });
    }
    goTo(t2) {
      const i2 = e(Math.floor(t2 / 2), 0, this.totalSpreads - 1);
      i2 === this._spread || this._anim || (1 !== Math.abs(i2 - this._spread) ? (this._spread = i2, this._showSpread(), this.dispatchEvent(new CustomEvent("pagechange", { detail: { spread: this._spread, page: this._li + 1 } }))) : i2 > this._spread ? this.next() : this.prev());
    }
    get currentPage() {
      return this._li + 1;
    }
    get totalPages() {
      return this._total;
    }
    _ZOOM_STEPS = [0.35, 0.5, 0.65, 0.75, 0.85, 1, 1.15, 1.3, 1.5, 1.75, 2, 2.4];
    get zoom() {
      return this._zoom ?? 1;
    }
    set zoom(t2) {
      this._zoom = e(t2, 0.3, 2.5), this._book && this._book.setZoom(this._zoom), this.dispatchEvent(new CustomEvent("zoomchange", { detail: { zoom: this._zoom } }));
    }
    zoomIn() {
      const t2 = this._ZOOM_STEPS.find((t3) => t3 > this.zoom + 5e-3);
      t2 && (this.zoom = t2);
    }
    zoomOut() {
      const t2 = [...this._ZOOM_STEPS].reverse().find((t3) => t3 < this.zoom - 5e-3);
      t2 && (this.zoom = t2);
    }
    resetZoom() {
      this.zoom = 1;
    }
    fitZoom() {
      this.zoom = e(this.clientHeight / 500, 0.4, 1.8);
    }
    _bindDrag(t2) {
      const i2 = (e2) => {
        const i3 = t2.getBoundingClientRect();
        return ((e2.touches ? e2.touches[0].clientX : e2.clientX) - i3.left) / i3.width - 0.5;
      };
      t2.addEventListener("pointerdown", (e2) => {
        if (this._anim || !this._total) return;
        const s2 = i2(e2), a2 = s2 > 0 ? "fwd" : "bwd";
        if ("fwd" === a2 && this._spread >= this.totalSpreads - 1) return;
        if ("bwd" === a2 && this._spread <= 0) return;
        let o, n;
        "fwd" === a2 ? (o = this._pages[this._ri], n = this._pages[this._li + 2]) : (o = this._pages[this._li], n = this._pages[this._ri - 2]), this._dragging = true, this._drag = { dir: a2, sx: s2, prog: 0, lx: s2, vel: 0 }, this._book.prepFlip(a2, o ?? null, n ?? null), t2.classList.add("grabbing"), t2.setPointerCapture(e2.pointerId), e2.preventDefault();
      }, { passive: false }), this._onMove = (s2) => {
        if (!this._dragging || !this._drag) return void this._book.mouseLook(i2(s2), ((e2) => {
          const i3 = t2.getBoundingClientRect();
          return ((e2.touches ? e2.touches[0].clientY : e2.clientY) - i3.top) / i3.height - 0.5;
        })(s2));
        const a2 = this._drag, o = i2(s2), n = "fwd" === a2.dir ? 2.2 * (a2.sx - o) : 2.2 * (o - a2.sx), h = e(n, 0, 1);
        a2.vel = h - a2.prog, a2.prog = h, a2.lx = o, this._book.curl(h, a2.dir);
      }, this._onUp = () => {
        if (!this._dragging || !this._drag) return;
        this._dragging = false, t2.classList.remove("grabbing");
        const e2 = this._drag;
        this._drag = null;
        const i3 = e2.vel > 0.018 ? 0.12 : 0.38;
        e2.prog > i3 ? (this._anim = true, this._book.animate(e2.prog, 1, Math.max(100, 550 * (1 - e2.prog)), (t3) => this._book.curl(t3, e2.dir), () => {
          "fwd" === e2.dir ? this._spread++ : this._spread--, this._book.endFlip(), this._showSpread(), this._anim = false;
        })) : this._book.animate(e2.prog, 0, 400 * e2.prog + 80, (t3) => this._book.curl(t3, e2.dir), () => {
          this._book.endFlip(), this._showSpread();
        });
      }, window.addEventListener("pointermove", this._onMove), window.addEventListener("pointerup", this._onUp);
    }
  };
  "undefined" == typeof customElements || customElements.get("turn-gl") || customElements.define("turn-gl", s);
  var a = { Book3D: i, TurnGLElement: s };
  return __toCommonJS(turngl_esm_exports);
})();
