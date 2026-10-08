/**
 * PaperCut UI - 3D Paper-Cut Icon Background Shapes System (130 Curated Kirigami Plates)
 * Provides interactive category filters, live icon-placement preview switcher, and one-click CSS/SVG copying.
 * Total Shapes: 130 (26 per archetype across 5 archetypes)
 */

(function () {
  'use strict';

  window.PAPERCUT_BACKGROUNDS = [
  {
    "id": "postage-stamp",
    "nameKo": "빈티지 우표 천공 타일",
    "nameEn": "Vintage Postage Stamp",
    "category": "classic",
    "colors": [
      "#BBD5B8",
      "#FFFDF9",
      "#A3D8C3"
    ],
    "paletteDesc": "코튼 세이지 (#BBD5B8) + 매트 크림 (#FFFDF9) + 민트 소인",
    "recommendedFor": "홈, 편지, 선물, 티켓, 문서",
    "cssClass": "pc-bg-postage-stamp",
    "svgContent": "\n      <defs>\n    <filter id=\"bg-sh-postage\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n      <!-- Layer 1: Perforated Stamp Base -->\n      <path d=\"M12 8 Q16 11 20 8 Q24 11 28 8 Q32 11 36 8 Q40 11 44 8 Q48 11 52 8 Q56 11 60 8 Q64 11 68 8 Q72 11 76 8 Q80 11 84 8 \n               Q85 12 88 16 Q85 20 88 24 Q85 28 88 32 Q85 36 88 40 Q85 44 88 48 Q85 52 88 56 Q85 60 88 64 Q85 68 88 72 Q85 76 88 80 Q85 84 88 88\n               Q84 85 80 88 Q76 85 72 88 Q68 85 64 88 Q60 85 56 88 Q52 85 48 88 Q44 85 40 88 Q36 85 32 88 Q28 85 24 88 Q20 85 16 88 Q12 85 8 88\n               Q11 84 8 80 Q11 76 8 72 Q11 68 8 64 Q11 60 8 56 Q11 52 8 48 Q11 44 8 40 Q11 36 8 32 Q11 28 8 24 Q11 20 8 16 Q11 12 8 8 Z\" \n            fill=\"#BBD5B8\" filter=\"url(#bg-sh-postage)\"/>\n      <!-- Layer 2: Inner Cream Stamp Inlay -->\n      <rect x=\"15\" y=\"15\" width=\"66\" height=\"66\" rx=\"4\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-postage)\"/>\n      <!-- Layer 3: Dashed Perforation Ring -->\n      <rect x=\"19\" y=\"19\" width=\"58\" height=\"58\" rx=\"2\" fill=\"none\" stroke=\"#D8CEBD\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\"/>\n      <!-- Layer 4: Vintage Wavy Postmark -->\n      <path d=\"M52 18 C58 21 64 19 70 23 M52 23 C58 26 64 24 70 28 M52 28 C58 31 64 29 70 33\" stroke=\"#A3D8C3\" stroke-width=\"1.5\" stroke-linecap=\"round\" opacity=\"0.85\"/>\n      <circle cx=\"28\" cy=\"26\" r=\"6\" fill=\"none\" stroke=\"#F7BA9E\" stroke-width=\"1.2\" opacity=\"0.7\"/>\n    "
  },
  {
    "id": "wax-seal",
    "nameKo": "앤틱 왁스 실링 인장",
    "nameEn": "Antique Wax Seal",
    "category": "classic",
    "colors": [
      "#F5B8BE",
      "#F7BA9E",
      "#FFFDF9"
    ],
    "paletteDesc": "더스티 로즈 (#F5B8BE) + 피치 왁스 (#F7BA9E) + 골드 글로우",
    "recommendedFor": "하트, 별, 체크, 자물쇠, 편지",
    "cssClass": "pc-bg-wax-seal",
    "svgContent": "\n      <defs>\n    <filter id=\"bg-sh-wax\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n      <!-- Layer 1: Irregular Melted Wax Puddle -->\n      <path d=\"M48 8 C62 7 74 14 82 24 C90 34 89 48 86 60 C83 72 74 83 62 87 C50 91 36 88 24 82 C12 76 6 64 8 50 C10 36 18 22 30 14 C36 10 42 9 48 8 Z\" \n            fill=\"#F5B8BE\" filter=\"url(#bg-sh-wax)\"/>\n      <!-- Layer 2: Raised Wax Ring Rim -->\n      <circle cx=\"48\" cy=\"48\" r=\"33\" fill=\"#F7BA9E\" filter=\"url(#bg-sh-wax)\"/>\n      <!-- Layer 3: Recessed Center Medallion Well -->\n      <circle cx=\"48\" cy=\"48\" r=\"25\" fill=\"#FAF6ED\"/>\n      <!-- Layer 4: Wax Rim Highlight Crescent -->\n      <path d=\"M26 32 C30 22 42 18 56 20 C42 22 32 30 28 42 Z\" fill=\"#FFFDF9\" opacity=\"0.6\"/>\n      <circle cx=\"48\" cy=\"48\" r=\"23\" fill=\"none\" stroke=\"#E6CCA8\" stroke-width=\"1\" stroke-dasharray=\"2 3\"/>\n    "
  },
  {
    "id": "notched-ticket",
    "nameKo": "노치 시네마 티켓",
    "nameEn": "Double-Notched Cinema Ticket",
    "category": "classic",
    "colors": [
      "#FEE396",
      "#FFFDF9",
      "#D7CBEB"
    ],
    "paletteDesc": "버터컵 옐로우 (#FEE396) + 크림 화이트 + 라벤더 절취선",
    "recommendedFor": "티켓, 카메라, 영화, 음악, 쇼핑",
    "cssClass": "pc-bg-notched-ticket",
    "svgContent": "\n      <defs>\n    <filter id=\"bg-sh-ticket\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n      <!-- Layer 1: Outer Ticket with Side Notches -->\n      <path d=\"M12 10 H84 C86.2 10 88 11.8 88 14 V40 C83 40 79 43.6 79 48 C79 52.4 83 56 88 56 V82 C88 84.2 86.2 86 84 86 H12 C9.8 86 8 84.2 8 82 V56 C13 56 17 52.4 17 48 C17 43.6 13 40 8 40 V14 C8 11.8 9.8 10 12 10 Z\" \n            fill=\"#FEE396\" filter=\"url(#bg-sh-ticket)\"/>\n      <!-- Layer 2: Inner Cream Paper Sheet -->\n      <path d=\"M16 16 H80 C81 16 82 17 82 18 V40 C78 40 75 43.6 75 48 C75 52.4 78 56 82 56 V78 C82 79 81 80 80 80 H16 C15 80 14 79 14 78 V56 C18 56 21 52.4 21 48 C21 43.6 18 40 14 40 V18 C14 17 15 16 16 16 Z\" \n            fill=\"#FFFDF9\" filter=\"url(#bg-sh-ticket)\"/>\n      <!-- Layer 3: Vertical Perforation Tear Line -->\n      <line x1=\"30\" y1=\"16\" x2=\"30\" y2=\"80\" stroke=\"#D7CBEB\" stroke-width=\"2\" stroke-dasharray=\"3 3\"/>\n      <!-- Layer 4: Stub Star Stamp -->\n      <polygon points=\"22,44 23.5,47.5 27,47.5 24,49.5 25.5,53 22,51 18.5,53 20,49.5 17,47.5 20.5,47.5\" fill=\"#A3D8C3\"/>\n    "
  },
  {
    "id": "deckle-edge",
    "nameKo": "수제 코튼 한지 데클지",
    "nameEn": "Deckle Edge Cotton Paper",
    "category": "classic",
    "colors": [
      "#FAF6ED",
      "#F0E8DC",
      "#C4B7A6"
    ],
    "paletteDesc": "매트 크림 (#FAF6ED) + 수제 닥나무 엣지 + 빈티지 골드 라인",
    "recommendedFor": "보태니컬 나뭇잎, 꽃, 커피, 책갈피, 연필",
    "cssClass": "pc-bg-deckle-edge",
    "svgContent": "\n      <defs>\n    <filter id=\"bg-sh-deckle\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n      <!-- Layer 1: Fibrous Deckle Backing -->\n      <path d=\"M12 9 C18 8 26 10 34 8 C42 10 50 8 58 10 C66 8 74 10 84 9 \n               C83 17 86 25 84 33 C86 41 83 49 85 57 C83 65 86 73 84 83 \n               C75 84 67 82 59 84 C51 82 43 84 35 82 C27 84 19 82 11 83 \n               C12 74 9 66 11 58 C9 50 12 42 10 34 C12 26 9 18 12 9 Z\" \n            fill=\"#F0E8DC\" filter=\"url(#bg-sh-deckle)\"/>\n      <!-- Layer 2: Main Cotton Cardstock -->\n      <rect x=\"15\" y=\"14\" width=\"66\" height=\"68\" rx=\"8\" fill=\"#FAF6ED\" filter=\"url(#bg-sh-deckle)\"/>\n      <!-- Layer 3: Fine Inner Hairline Inlay -->\n      <rect x=\"20\" y=\"19\" width=\"56\" height=\"58\" rx=\"5\" fill=\"none\" stroke=\"#C4B7A6\" stroke-width=\"1.2\"/>\n      <!-- Layer 4: Diagonal Corner Crease Accent -->\n      <polygon points=\"15,28 15,14 29,14\" fill=\"#FFFDF9\" opacity=\"0.8\"/>\n    "
  },
  {
    "id": "hanging-tag",
    "nameKo": "사각 크라프트 타공 태그",
    "nameEn": "Hanging Craft Price Tag",
    "category": "classic",
    "colors": [
      "#F7BA9E",
      "#FFFDF9",
      "#FEE396"
    ],
    "paletteDesc": "크라프트 피치 (#F7BA9E) + 아이보리 페이스 + 황동 아일렛",
    "recommendedFor": "가격표, 쇼핑백, 장바구니, 선물, 할인",
    "cssClass": "pc-bg-hanging-tag",
    "svgContent": "\n      <defs>\n    <filter id=\"bg-sh-tag\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n      <!-- Layer 1: Chamfered Top Tag Body -->\n      <path d=\"M28 8 L68 8 L86 26 L86 84 C86 86.8 83.8 89 81 89 L15 89 C12.2 89 10 86.8 10 84 L10 26 Z\" \n            fill=\"#F7BA9E\" filter=\"url(#bg-sh-tag)\"/>\n      <!-- Layer 2: Inner Cream Tag Sheet -->\n      <path d=\"M30 14 L66 14 L80 28 L80 83 C80 84.5 78.5 85.5 77 85.5 L19 85.5 C17.5 85.5 16 84.5 16 83 L16 28 Z\" \n            fill=\"#FFFDF9\" filter=\"url(#bg-sh-tag)\"/>\n      <!-- Layer 3: Brass Eyelet Reinforcement Washer -->\n      <circle cx=\"48\" cy=\"19\" r=\"6\" fill=\"#FEE396\" filter=\"url(#bg-sh-tag)\"/>\n      <circle cx=\"48\" cy=\"19\" r=\"3.2\" fill=\"#FAF6ED\"/>\n      <!-- Layer 4: Twine Cord Loop Peeking Out -->\n      <path d=\"M48 16 C48 8 42 4 48 3 C54 4 48 8 48 16\" stroke=\"#A3D8C3\" stroke-width=\"2.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    "
  },
  {
    "id": "cog-seal",
    "nameKo": "톱니 리본 엠블럼",
    "nameEn": "Rosette Star Cog Seal",
    "category": "classic",
    "colors": [
      "#D7CBEB",
      "#F5B8BE",
      "#FFFDF9"
    ],
    "paletteDesc": "소프트 라벤더 (#D7CBEB) + 로즈 핑크 (#F5B8BE) + 크림",
    "recommendedFor": "설정, 어워드, 인증, 방패, 보안",
    "cssClass": "pc-bg-cog-seal",
    "svgContent": "\n      <defs>\n    <filter id=\"bg-sh-cog\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n      <!-- Layer 1: Peeking Ribbon Tails -->\n      <polygon points=\"34,70 30,92 48,82 66,92 62,70\" fill=\"#BDE0EA\" filter=\"url(#bg-sh-cog)\"/>\n      <!-- Layer 2: 16-point Rosette Cog Seal -->\n      <path d=\"M48 6 L53 13 L62 10 L64 19 L73 19 L72 28 L80 32 L76 40 L82 46 L76 52 L80 60 L72 64 L73 73 L64 73 L62 82 L53 79 L48 86 L43 79 L34 82 L32 73 L23 73 L24 64 L16 60 L20 52 L14 46 L20 40 L16 32 L24 28 L23 19 L32 19 L34 10 L43 13 Z\" \n            fill=\"#D7CBEB\" filter=\"url(#bg-sh-cog)\"/>\n      <!-- Layer 3: Scalloped Ring Inset -->\n      <circle cx=\"48\" cy=\"46\" r=\"30\" fill=\"#F5B8BE\" filter=\"url(#bg-sh-cog)\"/>\n      <!-- Layer 4: Pure Cream Inner Center Disc -->\n      <circle cx=\"48\" cy=\"46\" r=\"23\" fill=\"#FFFDF9\"/>\n      <circle cx=\"48\" cy=\"46\" r=\"20\" fill=\"none\" stroke=\"#D7CBEB\" stroke-width=\"1.2\" stroke-dasharray=\"2 2\"/>\n    "
  },
  {
    "id": "pebble-organic",
    "nameKo": "물방울 유기적 조약돌",
    "nameEn": "River Pebble Smooth",
    "category": "nature",
    "colors": [
      "#A3D8C3",
      "#BBD5B8",
      "#FFFDF9"
    ],
    "paletteDesc": "파스텔 민트 (#A3D8C3) + 세이지 그린 (#BBD5B8) + 화이트",
    "recommendedFor": "새싹, 나뭇잎, 스파, 힐링, 건강",
    "cssClass": "pc-bg-pebble-organic",
    "svgContent": "\n      <defs>\n    <filter id=\"bg-sh-pebble\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n      <!-- Layer 1: Asymmetric River Pebble -->\n      <path d=\"M30 10 C50 6 78 12 86 34 C94 56 84 80 62 88 C40 96 16 88 8 68 C0 48 10 14 30 10 Z\" \n            fill=\"#A3D8C3\" filter=\"url(#bg-sh-pebble)\"/>\n      <!-- Layer 2: Offset Rotated Pebble Tier -->\n      <path d=\"M36 17 C52 14 74 20 80 38 C86 56 76 74 58 80 C40 86 22 78 16 62 C10 46 20 20 36 17 Z\" \n            fill=\"#BBD5B8\" filter=\"url(#bg-sh-pebble)\"/>\n      <!-- Layer 3: Smooth Cream Top Plate -->\n      <path d=\"M40 24 C52 22 68 26 72 40 C76 54 68 68 54 72 C40 76 26 70 22 56 C18 42 28 26 40 24 Z\" \n            fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Soft Glancing Paper Reflection Highlight -->\n      <path d=\"M32 20 C42 18 56 22 62 30 C54 26 42 24 34 26 Z\" fill=\"#FFFFFF\" opacity=\"0.6\"/>\n    "
  },
  {
    "id": "cloud-puffy",
    "nameKo": "몽글몽글 구름 쿠션",
    "nameEn": "Puffy Cumulus Cloud",
    "category": "nature",
    "colors": [
      "#BDE0EA",
      "#D7CBEB",
      "#FFFDF9"
    ],
    "paletteDesc": "써머 스카이 (#BDE0EA) + 파우더 라벤더 + 마시멜로 크림",
    "recommendedFor": "날씨, 비구름, 꿈, 비행기, 여행",
    "cssClass": "pc-bg-cloud-puffy",
    "svgContent": "\n      <defs>\n    <filter id=\"bg-sh-cloud\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n      <!-- Layer 1: Peeking Sun Glow behind Cloud -->\n      <circle cx=\"68\" cy=\"28\" r=\"16\" fill=\"#FEE396\" filter=\"url(#bg-sh-cloud)\"/>\n      <!-- Layer 2: Deep Sky Cloud Silhouette -->\n      <path d=\"M22 68 C15 68 10 63 10 56 C10 50 14 45 20 44 C20 32 30 22 42 22 C48 22 54 25 58 29 C62 25 68 22 74 24 C82 26 88 34 87 42 C92 44 95 49 95 55 C95 62 89 68 82 68 Z\" \n            fill=\"#BDE0EA\" filter=\"url(#bg-sh-cloud)\"/>\n      <!-- Layer 3: Offset Lavender Shadow Cloud -->\n      <path d=\"M24 71 C18 71 14 67 14 61 C14 55 18 51 23 50 C23 40 31 31 42 31 C47 31 52 33 56 37 C60 33 65 31 71 33 C78 35 83 41 83 48 C87 50 89 54 89 59 C89 65 84 71 78 71 Z\" \n            fill=\"#D7CBEB\" filter=\"url(#bg-sh-cloud)\"/>\n      <!-- Layer 4: Pure White Front Cloud Face -->\n      <path d=\"M25 67 C20 67 16 63 16 58 C16 53 19 49 24 48 C24 38 32 30 42 30 C47 30 52 32 55 36 C59 32 64 30 70 32 C76 34 81 40 81 46 C85 48 87 52 87 56 C87 62 82 67 77 67 Z\" \n            fill=\"#FFFDF9\"/>\n    "
  },
  {
    "id": "blossom-petal",
    "nameKo": "5엽 벚꽃 꽃받침",
    "nameEn": "5-Petal Blossom Plate",
    "category": "nature",
    "colors": [
      "#F5B8BE",
      "#F7BA9E",
      "#FEE396"
    ],
    "paletteDesc": "체리 블라썸 로즈 (#F5B8BE) + 피치 살구 + 허니 암술",
    "recommendedFor": "꽃, 뷰티, 카페, 디저트, 봄",
    "cssClass": "pc-bg-blossom-petal",
    "svgContent": "\n      <defs>\n    <filter id=\"bg-sh-blossom\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n      <!-- Layer 1: 5 Overlapping Rose Petals -->\n      <path d=\"M48 10 C54 2 64 6 68 14 C72 22 66 30 58 34 C68 32 78 38 80 48 C82 58 74 66 64 66 C68 76 62 86 52 88 C42 90 36 82 34 74 C26 80 16 76 12 68 C8 60 12 50 20 46 C12 42 8 32 14 24 C20 16 30 18 36 26 C36 16 42 12 48 10 Z\" \n            fill=\"#F5B8BE\" filter=\"url(#bg-sh-blossom)\"/>\n      <!-- Layer 2: Rotated Inner Peach Blossom Tier -->\n      <circle cx=\"48\" cy=\"48\" r=\"32\" fill=\"#F7BA9E\" filter=\"url(#bg-sh-blossom)\"/>\n      <!-- Layer 3: Central Cream Nectar Basin -->\n      <circle cx=\"48\" cy=\"48\" r=\"24\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Delicate Buttercup Pistil Dots -->\n      <circle cx=\"48\" cy=\"48\" r=\"20\" fill=\"none\" stroke=\"#FEE396\" stroke-width=\"1.8\" stroke-dasharray=\"2 3\"/>\n    "
  },
  {
    "id": "clover-leaf",
    "nameKo": "행운의 4잎 클로버 플레이트",
    "nameEn": "Lucky 4-Leaf Clover",
    "category": "nature",
    "colors": [
      "#A3D8C3",
      "#BBD5B8",
      "#FFFDF9"
    ],
    "paletteDesc": "포레스트 민트 (#A3D8C3) + 세이지 클로버 + 크림",
    "recommendedFor": "행운, 별, 체크, 성공, 자연",
    "cssClass": "pc-bg-clover-leaf",
    "svgContent": "\n      <defs>\n    <filter id=\"bg-sh-clover\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n      <!-- Layer 1: 4 Heart-Shaped Clover Lobes -->\n      <path d=\"M48 48 C42 36 30 20 40 10 C50 0 60 16 48 30 C62 18 78 28 86 38 C94 48 78 58 66 48 C78 60 68 76 58 84 C48 92 38 76 48 64 C34 76 18 66 10 56 C2 46 18 36 30 48 Z\" \n            fill=\"#A3D8C3\" filter=\"url(#bg-sh-clover)\"/>\n      <!-- Layer 2: Inner Sage Green Medallion -->\n      <circle cx=\"48\" cy=\"48\" r=\"30\" fill=\"#BBD5B8\" filter=\"url(#bg-sh-clover)\"/>\n      <!-- Layer 3: Cream Flower Well -->\n      <circle cx=\"48\" cy=\"48\" r=\"23\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Delicate Heart Vein Slits -->\n      <path d=\"M48 20 V34 M76 48 H62 M48 76 V62 M20 48 H34\" stroke=\"#FFFDF9\" stroke-width=\"1.5\" stroke-linecap=\"round\"/>\n    "
  },
  {
    "id": "droplet-tear",
    "nameKo": "모던 물방울 티어드롭",
    "nameEn": "Modern Teardrop",
    "category": "nature",
    "colors": [
      "#BAE6FD",
      "#D7CBEB",
      "#FFFDF9"
    ],
    "paletteDesc": "아쿠아 스카이 (#BAE6FD) + 소프트 라벤더 + 화이트",
    "recommendedFor": "날씨, 음료, 커피, 빗방울, 위치핀",
    "cssClass": "pc-bg-droplet-tear",
    "svgContent": "\n      <defs>\n    <filter id=\"bg-sh-tear\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n      <!-- Layer 1: Angled Tapered Teardrop Base -->\n      <path d=\"M58 8 C68 20 86 44 86 62 C86 78 72 88 52 88 C32 88 18 74 18 56 C18 38 42 18 58 8 Z\" \n            fill=\"#BAE6FD\" filter=\"url(#bg-sh-tear)\"/>\n      <!-- Layer 2: Offset Lavender Drop Tier -->\n      <path d=\"M56 16 C64 26 78 46 78 60 C78 72 68 80 52 80 C36 80 26 70 26 56 C26 42 44 24 56 16 Z\" \n            fill=\"#D7CBEB\" filter=\"url(#bg-sh-tear)\"/>\n      <!-- Layer 3: Smooth Cream Faceplate -->\n      <path d=\"M54 24 C60 32 70 48 70 58 C70 66 62 72 50 72 C38 72 32 64 32 54 C32 44 44 30 54 24 Z\" \n            fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Curved Gloss Reflection -->\n      <path d=\"M36 50 C36 62 44 68 50 68\" stroke=\"#FFFFFF\" stroke-width=\"2.5\" stroke-linecap=\"round\" fill=\"none\" opacity=\"0.7\"/>\n    "
  },
  {
    "id": "gingko-fan",
    "nameKo": "은행잎 부채꼴 플레이트",
    "nameEn": "Gingko Fan Plate",
    "category": "nature",
    "colors": [
      "#FEE396",
      "#F8C39E",
      "#FFFDF9"
    ],
    "paletteDesc": "골든 버터컵 (#FEE396) + 살구빛 앰버 (#F8C39E) + 아이보리",
    "recommendedFor": "가을, 보태니컬, 책, 도서관, 감성",
    "cssClass": "pc-bg-gingko-fan",
    "svgContent": "\n      <defs>\n    <filter id=\"bg-sh-gingko\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n      <!-- Layer 1: Gingko Leaf Fan Silhouette -->\n      <path d=\"M48 84 C48 84 46 64 28 58 C10 52 8 32 20 20 C32 8 44 14 48 20 C52 14 64 8 76 20 C88 32 86 52 68 58 C50 64 48 84 48 84 Z\" \n            fill=\"#FEE396\" filter=\"url(#bg-sh-gingko)\"/>\n      <!-- Layer 2: Stepped Warm Apricot Inset -->\n      <circle cx=\"48\" cy=\"44\" r=\"30\" fill=\"#F8C39E\" filter=\"url(#bg-sh-gingko)\"/>\n      <!-- Layer 3: Round Cream Icon Seat -->\n      <circle cx=\"48\" cy=\"44\" r=\"23\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Delicate Fluted Leaf Rib Veins -->\n      <path d=\"M48 68 L36 32 M48 68 L48 28 M48 68 L60 32\" stroke=\"#EDC96C\" stroke-width=\"1.2\" stroke-linecap=\"round\" opacity=\"0.6\"/>\n    "
  },
  {
    "id": "arch-shrine",
    "nameKo": "로마네스크 아치형 창문",
    "nameEn": "Romanesque Arched Shrine",
    "category": "geo",
    "colors": [
      "#D7CBEB",
      "#F5B8BE",
      "#FFFDF9"
    ],
    "paletteDesc": "미스트 라벤더 (#D7CBEB) + 블러셔 로즈 (#F5B8BE) + 크림",
    "recommendedFor": "홈, 갤러리, 사진, 건축, 캘린더",
    "cssClass": "pc-bg-arch-shrine",
    "svgContent": "\n      <defs>\n    <filter id=\"bg-sh-arch\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n      <!-- Layer 1: Outer Vaulted Arch Silhouette -->\n      <path d=\"M48 8 C28 8 16 22 16 42 V84 C16 86.2 17.8 88 20 88 H76 C78.2 88 80 86.2 80 84 V42 C80 22 68 8 48 8 Z\" \n            fill=\"#D7CBEB\" filter=\"url(#bg-sh-arch)\"/>\n      <!-- Layer 2: Stepped Rose Window Frame -->\n      <path d=\"M48 14 C32 14 22 26 22 44 V82 H74 V44 C74 26 64 14 48 14 Z\" \n            fill=\"#F5B8BE\" filter=\"url(#bg-sh-arch)\"/>\n      <!-- Layer 3: Inner Cream Window Well -->\n      <path d=\"M48 20 C36 20 28 30 28 46 V78 H68 V46 C68 30 60 20 48 20 Z\" \n            fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Base Plinth Bar at Bottom -->\n      <rect x=\"12\" y=\"84\" width=\"72\" height=\"6\" rx=\"2\" fill=\"#FEE396\" filter=\"url(#bg-sh-arch)\"/>\n    "
  },
  {
    "id": "squircle-offset",
    "nameKo": "3중 오프셋 스쿼클",
    "nameEn": "Triple Offset Squircle",
    "category": "geo",
    "colors": [
      "#F7BA9E",
      "#A3D8C3",
      "#FFFDF9"
    ],
    "paletteDesc": "살구 피치 (#F7BA9E) + 애플 민트 (#A3D8C3) + 퓨어 크림",
    "recommendedFor": "앱 아이콘, 디바이스, 스마트폰, 음악, 게임",
    "cssClass": "pc-bg-squircle-offset",
    "svgContent": "\n      <defs>\n    <filter id=\"bg-sh-squircle\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n      <!-- Layer 1: Rotated Peach Squircle Base -->\n      <rect x=\"12\" y=\"12\" width=\"72\" height=\"72\" rx=\"24\" transform=\"rotate(7 48 48)\" fill=\"#F7BA9E\" filter=\"url(#bg-sh-squircle)\"/>\n      <!-- Layer 2: Counter-Rotated Mint Squircle -->\n      <rect x=\"13\" y=\"13\" width=\"70\" height=\"70\" rx=\"22\" transform=\"rotate(-5 48 48)\" fill=\"#A3D8C3\" filter=\"url(#bg-sh-squircle)\"/>\n      <!-- Layer 3: Foreground Square-Squircle Card -->\n      <rect x=\"16\" y=\"16\" width=\"64\" height=\"64\" rx=\"20\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Delicate Bevel Inset Line -->\n      <rect x=\"20\" y=\"20\" width=\"56\" height=\"56\" rx=\"16\" fill=\"none\" stroke=\"#E6DDD0\" stroke-width=\"1.2\"/>\n    "
  },
  {
    "id": "hexagon-honeycomb",
    "nameKo": "육각형 벌집 셀",
    "nameEn": "Honeycomb Hexagon Cell",
    "category": "geo",
    "colors": [
      "#FEE396",
      "#F8C39E",
      "#FFFDF9"
    ],
    "paletteDesc": "허니 버터컵 (#FEE396) + 앰버 섀도우 (#F8C39E) + 크림",
    "recommendedFor": "톱니, 공학, 테크, 과학, 배터리",
    "cssClass": "pc-bg-hexagon-honeycomb",
    "svgContent": "\n      <defs>\n    <filter id=\"bg-sh-hex\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n      <!-- Layer 1: Regular Rounded Hexagon -->\n      <polygon points=\"48,8 84,28 84,68 48,88 12,68 12,28\" fill=\"#FEE396\" stroke=\"#FEE396\" stroke-width=\"6\" stroke-linejoin=\"round\" filter=\"url(#bg-sh-hex)\"/>\n      <!-- Layer 2: Faceted Bottom Shade Half -->\n      <polygon points=\"48,48 84,68 48,88 12,68\" fill=\"#F8C39E\" opacity=\"0.6\"/>\n      <!-- Layer 3: Inner Cream Regular Hexagon -->\n      <polygon points=\"48,16 76,32 76,64 48,80 20,64 20,32\" fill=\"#FFFDF9\" stroke=\"#FFFDF9\" stroke-width=\"4\" stroke-linejoin=\"round\"/>\n      <!-- Layer 4: Delicate Center Hex Ring -->\n      <polygon points=\"48,22 70,35 70,61 48,74 26,61 26,35\" fill=\"none\" stroke=\"#EDC96C\" stroke-width=\"1.2\"/>\n    "
  },
  {
    "id": "octagon-gem",
    "nameKo": "에메랄드 컷 팔각형 젬",
    "nameEn": "Emerald Octagon Gem",
    "category": "geo",
    "colors": [
      "#BBD5B8",
      "#BDE0EA",
      "#FFFDF9"
    ],
    "paletteDesc": "세이지 그린 (#BBD5B8) + 스카이 블루 (#BDE0EA) + 크림",
    "recommendedFor": "자물쇠, 보안, 보석, 방패, 신용카드",
    "cssClass": "pc-bg-octagon-gem",
    "svgContent": "\n      <defs>\n    <filter id=\"bg-sh-gem\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n      <!-- Layer 1: Chamfered Corner Octagon -->\n      <polygon points=\"30,8 66,8 88,30 88,66 66,88 30,88 8,66 8,30\" fill=\"#BBD5B8\" stroke=\"#BBD5B8\" stroke-width=\"4\" stroke-linejoin=\"round\" filter=\"url(#bg-sh-gem)\"/>\n      <!-- Layer 2: Stepped Inner Sky Frame -->\n      <polygon points=\"32,14 64,14 82,32 82,64 64,82 32,82 14,64 14,32\" fill=\"#BDE0EA\" filter=\"url(#bg-sh-gem)\"/>\n      <!-- Layer 3: Central Cream Facet Well -->\n      <polygon points=\"34,20 62,20 76,34 76,62 62,76 34,76 20,62 20,34\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Facet Ray Accents -->\n      <line x1=\"8\" y1=\"8\" x2=\"20\" y2=\"20\" stroke=\"#FFFDF9\" stroke-width=\"1.5\" stroke-linecap=\"round\"/>\n      <line x1=\"88\" y1=\"88\" x2=\"76\" y2=\"76\" stroke=\"#BBD5B8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/>\n    "
  },
  {
    "id": "quatrefoil-gothic",
    "nameKo": "고딕 콰트로포일 4원형",
    "nameEn": "Gothic Quatrefoil",
    "category": "geo",
    "colors": [
      "#C8B8E8",
      "#FEE396",
      "#FFFDF9"
    ],
    "paletteDesc": "트와일라잇 바이올렛 (#C8B8E8) + 골드 버터컵 + 크림",
    "recommendedFor": "앤틱, 나침반, 시계, 음악, 아트",
    "cssClass": "pc-bg-quatrefoil-gothic",
    "svgContent": "\n      <defs>\n    <filter id=\"bg-sh-quat\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n      <!-- Layer 1: 4 Interlocking Round Lobes -->\n      <path d=\"M48 10 C58 10 66 18 66 28 C66 32 64 36 62 40 C66 38 70 36 74 36 C84 36 92 44 92 54 C92 64 84 72 74 72 C70 72 66 70 62 68 C64 72 66 76 66 80 C66 90 58 98 48 98 C38 98 30 90 30 80 C30 76 32 72 34 68 C30 70 26 72 22 72 C12 72 4 64 4 54 C4 44 12 36 22 36 C26 36 30 38 34 40 C32 36 30 32 30 28 C30 18 38 10 48 10 Z\" \n            transform=\"translate(0, -6)\" fill=\"#C8B8E8\" filter=\"url(#bg-sh-quat)\"/>\n      <!-- Layer 2: Inner Stepped Gold Accent -->\n      <circle cx=\"48\" cy=\"48\" r=\"30\" fill=\"#FEE396\" filter=\"url(#bg-sh-quat)\"/>\n      <!-- Layer 3: Central Cream Paper Disc -->\n      <circle cx=\"48\" cy=\"48\" r=\"23\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Four Cusp Accent Diamond Dots -->\n      <polygon points=\"48,21 50,24 48,27 46,24\" fill=\"#C8B8E8\"/>\n      <polygon points=\"75,48 72,50 69,48 72,46\" fill=\"#C8B8E8\"/>\n      <polygon points=\"48,75 46,72 48,69 50,72\" fill=\"#C8B8E8\"/>\n      <polygon points=\"21,48 24,46 27,48 24,50\" fill=\"#C8B8E8\"/>\n    "
  },
  {
    "id": "star-burst-8",
    "nameKo": "부드러운 8각 별 인장",
    "nameEn": "Soft 8-Point Starburst",
    "category": "geo",
    "colors": [
      "#FEE396",
      "#F7BA9E",
      "#FFFDF9"
    ],
    "paletteDesc": "선라이트 버터컵 (#FEE396) + 피치 살구 + 화이트",
    "recommendedFor": "반짝임, 별, 칭찬, 선물, 메달",
    "cssClass": "pc-bg-star-burst-8",
    "svgContent": "\n      <defs>\n    <filter id=\"bg-sh-star8\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n      <!-- Layer 1: 8-Pointed Star Silhouette -->\n      <path d=\"M48 6 L56 22 L72 14 L70 32 L88 38 L76 50 L88 62 L70 68 L72 86 L56 78 L48 94 L40 78 L24 86 L26 68 L8 62 L20 50 L8 38 L26 32 L24 14 L40 22 Z\" \n            fill=\"#FEE396\" filter=\"url(#bg-sh-star8)\"/>\n      <!-- Layer 2: Second Offset Peach Star -->\n      <circle cx=\"48\" cy=\"48\" r=\"31\" fill=\"#F7BA9E\" filter=\"url(#bg-sh-star8)\"/>\n      <!-- Layer 3: Circular Cream Paper Medallion -->\n      <circle cx=\"48\" cy=\"48\" r=\"23\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Stitched Circle Accent -->\n      <circle cx=\"48\" cy=\"48\" r=\"20\" fill=\"none\" stroke=\"#EDC96C\" stroke-width=\"1.2\" stroke-dasharray=\"2 3\"/>\n    "
  },
  {
    "id": "dog-ear-card",
    "nameKo": "도그이어 접힌 모서리 카드",
    "nameEn": "Dog-Eared Folded Card",
    "category": "craft",
    "colors": [
      "#FFFDF9",
      "#A3D8C3",
      "#BBD5B8"
    ],
    "paletteDesc": "도톰한 크림 카드 (#FFFDF9) + 민트 배색 접지 (#A3D8C3)",
    "recommendedFor": "문서, 파일, 노트, 편집, 클립보드",
    "cssClass": "pc-bg-dog-ear-card",
    "svgContent": "\n      <defs>\n    <filter id=\"bg-sh-dogear\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n      <!-- Layer 1: Card Base with Chamfered Top-Right -->\n      <path d=\"M14 10 H64 L86 32 V82 C86 84.8 83.8 87 81 87 H19 C16.2 87 14 84.8 14 82 Z\" \n            fill=\"#FFFDF9\" filter=\"url(#bg-sh-dogear)\"/>\n      <!-- Layer 2: Underneath Pastel Paper Reveal -->\n      <polygon points=\"64,10 86,32 64,32\" fill=\"#BBD5B8\"/>\n      <!-- Layer 3: Folded Over Triangular Corner Flap -->\n      <polygon points=\"64,10 86,32 64,32\" fill=\"#A3D8C3\" filter=\"url(#bg-sh-dogear)\"/>\n      <!-- Layer 4: Realistic Fold Shading and Score Line -->\n      <line x1=\"64\" y1=\"10\" x2=\"86\" y2=\"32\" stroke=\"#4A3A2A\" stroke-opacity=\"0.15\" stroke-width=\"1.5\"/>\n      <rect x=\"20\" y=\"22\" width=\"40\" height=\"4\" rx=\"2\" fill=\"#F0E8DC\"/>\n      <rect x=\"20\" y=\"30\" width=\"30\" height=\"4\" rx=\"2\" fill=\"#F0E8DC\"/>\n    "
  },
  {
    "id": "washi-tape-strip",
    "nameKo": "마스킹 테이프 부착 플레이트",
    "nameEn": "Washi-Taped Card",
    "category": "craft",
    "colors": [
      "#F7BA9E",
      "#FFFDF9",
      "#A3D8C3"
    ],
    "paletteDesc": "살구 피치 카드 (#F7BA9E) + 반투명 민트 마스킹 테이프",
    "recommendedFor": "사진, 메모, 아이디어, 핀, 북마크",
    "cssClass": "pc-bg-washi-tape-strip",
    "svgContent": "\n      <defs>\n    <filter id=\"bg-sh-washi\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n      <!-- Layer 1: Main Peach Cardstock -->\n      <rect x=\"14\" y=\"16\" width=\"68\" height=\"68\" rx=\"14\" fill=\"#F7BA9E\" filter=\"url(#bg-sh-washi)\"/>\n      <!-- Layer 2: Inner Cream Writing Pad -->\n      <rect x=\"19\" y=\"21\" width=\"58\" height=\"58\" rx=\"9\" fill=\"#FFFDF9\"/>\n      <!-- Layer 3: Mint Washi Tape with Jagged Torn Ends -->\n      <path d=\"M26 10 L28 12 L30 10 L70 10 L72 12 L74 10 V22 L72 20 L70 22 L30 22 L28 20 L26 22 Z\" \n            transform=\"rotate(-3 50 16)\" fill=\"#A3D8C3\" opacity=\"0.9\" filter=\"url(#bg-sh-washi)\"/>\n      <!-- Layer 4: Translucent Tape Fiber Texture Lines -->\n      <line x1=\"32\" y1=\"16\" x2=\"68\" y2=\"16\" stroke=\"#FFFDF9\" stroke-width=\"1.2\" stroke-dasharray=\"2 3\" opacity=\"0.6\"/>\n    "
  },
  {
    "id": "accordion-ribbon",
    "nameKo": "주름진 아코디언 배너",
    "nameEn": "Accordion Fold Banner",
    "category": "craft",
    "colors": [
      "#BDE0EA",
      "#D7CBEB",
      "#FFFDF9"
    ],
    "paletteDesc": "스카이 블루 (#BDE0EA) + 섀도우 라벤더 + 화이트 카드",
    "recommendedFor": "공지, 배너, 메가폰, 축하, 선물",
    "cssClass": "pc-bg-accordion-ribbon",
    "svgContent": "\n      <defs>\n    <filter id=\"bg-sh-accordion\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n      <!-- Layer 1: Back Folded Swallowtail Ribbon Ends -->\n      <path d=\"M6 32 L20 18 V46 L6 60 L12 46 Z\" fill=\"#BDE0EA\" filter=\"url(#bg-sh-accordion)\"/>\n      <path d=\"M90 32 L76 18 V46 L90 60 L84 46 Z\" fill=\"#BDE0EA\" filter=\"url(#bg-sh-accordion)\"/>\n      <!-- Layer 2: Accordion Fold Shadows -->\n      <polygon points=\"20,18 20,46 28,46\" fill=\"#D7CBEB\"/>\n      <polygon points=\"76,18 76,46 68,46\" fill=\"#D7CBEB\"/>\n      <!-- Layer 3: Center Elevated Card Body -->\n      <rect x=\"18\" y=\"14\" width=\"60\" height=\"68\" rx=\"12\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-accordion)\"/>\n      <!-- Layer 4: Delicate Top/Bottom Border Stitches -->\n      <line x1=\"24\" y1=\"20\" x2=\"72\" y2=\"20\" stroke=\"#BDE0EA\" stroke-width=\"1.5\" stroke-dasharray=\"3 2\"/>\n      <line x1=\"24\" y1=\"76\" x2=\"72\" y2=\"76\" stroke=\"#BDE0EA\" stroke-width=\"1.5\" stroke-dasharray=\"3 2\"/>\n    "
  },
  {
    "id": "bookmark-pennant",
    "nameKo": "제비꼬리 페넌트 플래그",
    "nameEn": "Pennant Swallowtail",
    "category": "craft",
    "colors": [
      "#F5B8BE",
      "#F7BA9E",
      "#FFFDF9"
    ],
    "paletteDesc": "로즈 핑크 (#F5B8BE) + 피치 섀도우 + 크림 페이스",
    "recommendedFor": "북마크, 저장, 즐겨찾기, 깃발, 리본",
    "cssClass": "pc-bg-bookmark-pennant",
    "svgContent": "\n      <defs>\n    <filter id=\"bg-sh-pennant\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n      <!-- Layer 1: Hanging Banner with Deep V-Notch -->\n      <path d=\"M18 10 H78 V74 L48 88 L18 74 Z\" fill=\"#F5B8BE\" filter=\"url(#bg-sh-pennant)\"/>\n      <!-- Layer 2: Offset Peach Shadow Banner -->\n      <path d=\"M22 14 H74 V70 L48 82 L22 70 Z\" fill=\"#F7BA9E\" filter=\"url(#bg-sh-pennant)\"/>\n      <!-- Layer 3: Inner Cream Card Face -->\n      <path d=\"M25 18 H71 V66 L48 77 L25 66 Z\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Top Seam Stitches & Gold Star Rivet -->\n      <line x1=\"22\" y1=\"16\" x2=\"74\" y2=\"16\" stroke=\"#FFFDF9\" stroke-width=\"2\" stroke-dasharray=\"3 2\"/>\n      <polygon points=\"48,22 49.5,25.5 53,25.5 50,27.5 51.5,31 48,29 44.5,31 46,27.5 43,25.5 46.5,25.5\" fill=\"#FEE396\"/>\n    "
  },
  {
    "id": "slide-matchbox",
    "nameKo": "성냥갑 슬라이드 서랍",
    "nameEn": "Matchbox Slide Drawer",
    "category": "craft",
    "colors": [
      "#E2CCA8",
      "#A3D8C3",
      "#FFFDF9"
    ],
    "paletteDesc": "크라프트 슬리브 (#E2CCA8) + 민트 서랍 (#A3D8C3) + 로즈 탭",
    "recommendedFor": "보관함, 수신함, 서랍, 선물, 검색",
    "cssClass": "pc-bg-slide-matchbox",
    "svgContent": "\n      <defs>\n    <filter id=\"bg-sh-matchbox\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n      <!-- Layer 1: Peeking Extended Drawer on Right -->\n      <rect x=\"36\" y=\"24\" width=\"50\" height=\"52\" rx=\"8\" fill=\"#A3D8C3\" filter=\"url(#bg-sh-matchbox)\"/>\n      <rect x=\"42\" y=\"28\" width=\"40\" height=\"44\" rx=\"5\" fill=\"#FFFDF9\"/>\n      <!-- Drawer Pull Ribbon Tab -->\n      <path d=\"M86 46 H94 V54 H86 Z\" fill=\"#F5B8BE\" filter=\"url(#bg-sh-matchbox)\"/>\n      <!-- Layer 2: Main Matchbox Outer Sleeve Frame -->\n      <rect x=\"10\" y=\"18\" width=\"62\" height=\"64\" rx=\"10\" fill=\"#E2CCA8\" filter=\"url(#bg-sh-matchbox)\"/>\n      <!-- Layer 3: Cutout Window into Drawer -->\n      <rect x=\"18\" y=\"26\" width=\"46\" height=\"48\" rx=\"6\" fill=\"#FAF6ED\"/>\n      <!-- Layer 4: Edge Fold Scored Shadow -->\n      <line x1=\"16\" y1=\"20\" x2=\"16\" y2=\"80\" stroke=\"#C4B090\" stroke-width=\"1.5\"/>\n    "
  },
  {
    "id": "envelope-pocket",
    "nameKo": "삼각 플랩 포켓 봉투",
    "nameEn": "Folded Pocket Envelope",
    "category": "craft",
    "colors": [
      "#D7CBEB",
      "#F7BA9E",
      "#F5B8BE"
    ],
    "paletteDesc": "라벤더 포켓 (#D7CBEB) + 피치 플랩 (#F7BA9E) + 하트 실",
    "recommendedFor": "메일, 편지, 초대장, 메시지, 알림",
    "cssClass": "pc-bg-envelope-pocket",
    "svgContent": "\n      <defs>\n    <filter id=\"bg-sh-pocket\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n      <!-- Layer 1: Envelope Pocket Base -->\n      <rect x=\"12\" y=\"20\" width=\"72\" height=\"62\" rx=\"10\" fill=\"#D7CBEB\" filter=\"url(#bg-sh-pocket)\"/>\n      <!-- Layer 2: Cream Notepaper Peeking Out of Pocket -->\n      <rect x=\"18\" y=\"10\" width=\"60\" height=\"50\" rx=\"6\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-pocket)\"/>\n      <!-- Layer 3: Crossed Bottom Diagonal Pocket Flaps -->\n      <polygon points=\"12,82 48,54 84,82\" fill=\"#F7BA9E\" filter=\"url(#bg-sh-pocket)\"/>\n      <!-- Layer 4: Heart Wax Seal Securing Flaps -->\n      <circle cx=\"48\" cy=\"54\" r=\"8\" fill=\"#F5B8BE\" filter=\"url(#bg-sh-pocket)\"/>\n      <path d=\"M48 57 C46 55 43 53 43 51 C43 49.5 44.5 48.5 46 48.5 C47 48.5 47.8 49 48 49.5 C48.2 49 49 48.5 50 48.5 C51.5 48.5 53 49.5 53 51 C53 53 50 55 48 57 Z\" fill=\"#FFFDF9\"/>\n    "
  },
  {
    "id": "scallop-sunburst",
    "nameKo": "물결 가리비 원형 트레이",
    "nameEn": "12-Scallop Cookie Tray",
    "category": "whimsical",
    "colors": [
      "#FEE396",
      "#A3D8C3",
      "#FFFDF9"
    ],
    "paletteDesc": "골든 버터컵 (#FEE396) + 파스텔 민트 (#A3D8C3) + 크림",
    "recommendedFor": "음식, 베이커리, 디저트, 카페, 달콤함",
    "cssClass": "pc-bg-scallop-sunburst",
    "svgContent": "\n      <defs>\n    <filter id=\"bg-sh-scallop\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n      <!-- Layer 1: Continuous 12-Scallop Wavy Perimeter -->\n      <path d=\"M48 8 C54 8 57 14 62 16 C67 18 73 16 77 21 C81 26 80 32 83 37 C86 42 92 45 92 51 C92 57 86 60 83 65 C80 70 81 76 77 81 C73 86 67 84 62 86 C57 88 54 94 48 94 C42 94 39 88 34 86 C29 84 23 86 19 81 C15 76 16 70 13 65 C10 60 4 57 4 51 C4 45 10 42 13 37 C16 32 15 26 19 21 C23 16 29 18 34 16 C39 14 42 8 48 8 Z\" \n            transform=\"translate(0, -3)\" fill=\"#FEE396\" filter=\"url(#bg-sh-scallop)\"/>\n      <!-- Layer 2: Inner Mint Wave Ring -->\n      <circle cx=\"48\" cy=\"48\" r=\"31\" fill=\"#A3D8C3\" filter=\"url(#bg-sh-scallop)\"/>\n      <!-- Layer 3: Flat Cream Plate Face -->\n      <circle cx=\"48\" cy=\"48\" r=\"24\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Punched Hole Eyelet Details in Scallop Crests -->\n      <circle cx=\"48\" cy=\"14\" r=\"1.5\" fill=\"#EDC96C\"/>\n      <circle cx=\"78\" cy=\"48\" r=\"1.5\" fill=\"#EDC96C\"/>\n      <circle cx=\"48\" cy=\"82\" r=\"1.5\" fill=\"#EDC96C\"/>\n      <circle cx=\"18\" cy=\"48\" r=\"1.5\" fill=\"#EDC96C\"/>\n    "
  },
  {
    "id": "bubble-trio",
    "nameKo": "오버랩 버블 3중주",
    "nameEn": "Merged Bubble Trio",
    "category": "whimsical",
    "colors": [
      "#BDE0EA",
      "#D7CBEB",
      "#FFFDF9"
    ],
    "paletteDesc": "스카이 블루 (#BDE0EA) + 파우더 라벤더 + 부드러운 폼",
    "recommendedFor": "대화 말풍선, 채팅, 소셜, 메시지, 유저",
    "cssClass": "pc-bg-bubble-trio",
    "svgContent": "\n      <defs>\n    <filter id=\"bg-sh-bubble\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n      <!-- Layer 1: Merged 3-Bubble Silhouette -->\n      <path d=\"M42 16 C54 16 64 24 68 34 C76 34 84 40 86 50 C88 60 82 70 72 74 C66 84 54 88 42 86 C28 84 18 72 18 58 C18 48 24 38 34 32 C34 22 38 16 42 16 Z\" \n            fill=\"#BDE0EA\" filter=\"url(#bg-sh-bubble)\"/>\n      <!-- Layer 2: Overlapping Lavender Bubble -->\n      <circle cx=\"62\" cy=\"56\" r=\"22\" fill=\"#D7CBEB\" filter=\"url(#bg-sh-bubble)\"/>\n      <!-- Layer 3: Main Cream Circular Disc -->\n      <circle cx=\"44\" cy=\"48\" r=\"25\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Tiny Satellite Paper Bubbles -->\n      <circle cx=\"78\" cy=\"24\" r=\"5\" fill=\"#F5B8BE\" filter=\"url(#bg-sh-bubble)\"/>\n      <circle cx=\"85\" cy=\"16\" r=\"2.8\" fill=\"#FEE396\"/>\n    "
  },
  {
    "id": "polaroid-frame",
    "nameKo": "미니 폴라로이드 액자",
    "nameEn": "Mini Polaroid Frame",
    "category": "whimsical",
    "colors": [
      "#FFFDF9",
      "#FDE2D1",
      "#A3D8C3"
    ],
    "paletteDesc": "코튼 화이트 프레임 (#FFFDF9) + 살구빛 틴트 + 민트 코너",
    "recommendedFor": "카메라, 사진, 추억, 여행, 프로필",
    "cssClass": "pc-bg-polaroid-frame",
    "svgContent": "\n      <defs>\n    <filter id=\"bg-sh-polaroid\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n      <!-- Layer 1: Classic Polaroid White Cardstock with Wide Bottom -->\n      <rect x=\"14\" y=\"8\" width=\"68\" height=\"80\" rx=\"6\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-polaroid)\"/>\n      <!-- Layer 2: Inset Square Photo Well with Deep Shadow -->\n      <rect x=\"20\" y=\"14\" width=\"56\" height=\"52\" rx=\"3\" fill=\"#FDE2D1\" filter=\"url(#bg-sh-polaroid)\"/>\n      <!-- Layer 3: Paper Photo Mounting Corners -->\n      <polygon points=\"20,14 30,14 20,24\" fill=\"#A3D8C3\"/>\n      <polygon points=\"76,66 66,66 76,56\" fill=\"#A3D8C3\"/>\n      <!-- Layer 4: Handwritten Pencil Caption Wavy Line -->\n      <path d=\"M30 76 Q42 74 54 77 Q64 74 68 76\" stroke=\"#C4B7A6\" stroke-width=\"1.8\" stroke-linecap=\"round\" fill=\"none\"/>\n    "
  },
  {
    "id": "diamond-kite",
    "nameKo": "공중 다이아몬드 연",
    "nameEn": "Rounded Diamond Kite",
    "category": "whimsical",
    "colors": [
      "#F7BA9E",
      "#BDE0EA",
      "#FFFDF9"
    ],
    "paletteDesc": "코랄 피치 (#F7BA9E) + 스카이 블루 + 꼬리 리본",
    "recommendedFor": "바람, 야외, 여행, 비행기, 레저",
    "cssClass": "pc-bg-diamond-kite",
    "svgContent": "\n      <defs>\n    <filter id=\"bg-sh-kite\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n      <!-- Layer 1: Kite Tail String with Bows -->\n      <path d=\"M48 76 Q42 84 48 94 Q54 96 50 100\" stroke=\"#C4B7A6\" stroke-width=\"1.5\" fill=\"none\"/>\n      <polygon points=\"44,82 48,85 44,88 47,85\" fill=\"#F5B8BE\"/>\n      <polygon points=\"52,82 48,85 52,88 49,85\" fill=\"#FEE396\"/>\n      <!-- Layer 2: Main Rotated Diamond Body -->\n      <rect x=\"20\" y=\"20\" width=\"56\" height=\"56\" rx=\"14\" transform=\"rotate(45 48 48)\" fill=\"#F7BA9E\" filter=\"url(#bg-sh-kite)\"/>\n      <!-- Layer 3: Inner Sky Blue Inset Diamond -->\n      <rect x=\"24\" y=\"24\" width=\"48\" height=\"48\" rx=\"10\" transform=\"rotate(45 48 48)\" fill=\"#BDE0EA\" filter=\"url(#bg-sh-kite)\"/>\n      <!-- Layer 4: Center Cream Diamond Plate -->\n      <rect x=\"28\" y=\"28\" width=\"40\" height=\"40\" rx=\"8\" transform=\"rotate(45 48 48)\" fill=\"#FFFDF9\"/>\n    "
  },
  {
    "id": "clamshell-oval",
    "nameKo": "비대칭 조개 타원형",
    "nameEn": "Fluted Clamshell Oval",
    "category": "whimsical",
    "colors": [
      "#D7CBEB",
      "#BBD5B8",
      "#FFFDF9"
    ],
    "paletteDesc": "미스트 라벤더 (#D7CBEB) + 세이지 그린 + 펄 크림",
    "recommendedFor": "바다, 카페, 조개, 음악, 휴식",
    "cssClass": "pc-bg-clamshell-oval",
    "svgContent": "\n      <defs>\n    <filter id=\"bg-sh-clamshell\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n      <!-- Layer 1: Clamshell with Fluted Scallop Bottom -->\n      <path d=\"M48 10 C68 10 84 26 84 48 C84 62 78 72 74 78 Q70 82 66 80 Q62 84 56 82 Q52 86 48 84 Q44 86 40 82 Q34 84 30 80 Q26 82 22 78 C18 72 12 62 12 48 C12 26 28 10 48 10 Z\" \n            fill=\"#D7CBEB\" filter=\"url(#bg-sh-clamshell)\"/>\n      <!-- Layer 2: Stepped Inner Sage Oval -->\n      <ellipse cx=\"48\" cy=\"46\" r=\"30\" rx=\"30\" ry=\"32\" fill=\"#BBD5B8\" filter=\"url(#bg-sh-clamshell)\"/>\n      <!-- Layer 3: Smooth Pearl Cream Center Plate -->\n      <ellipse cx=\"48\" cy=\"46\" rx=\"23\" ry=\"25\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Fluted Radiating Rib Creases -->\n      <path d=\"M48 82 L48 64 M40 80 L42 66 M56 80 L54 66\" stroke=\"#FFFDF9\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    "
  },
  {
    "id": "shield-crest",
    "nameKo": "헤럴딕 앤틱 방패",
    "nameEn": "Medieval Heraldic Crest",
    "category": "whimsical",
    "colors": [
      "#BBD5B8",
      "#FEE396",
      "#FFFDF9"
    ],
    "paletteDesc": "헤럴딕 세이지 (#BBD5B8) + 로열 버터컵 (#FEE396) + 크림",
    "recommendedFor": "보안, 방패, 자물쇠, 인증, 신뢰",
    "cssClass": "pc-bg-shield-crest",
    "svgContent": "\n      <defs>\n    <filter id=\"bg-sh-shield\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n      <!-- Layer 1: Curving Shield Contour with Pointed Apex -->\n      <path d=\"M48 8 C62 8 82 12 82 24 V54 C82 70 66 82 48 88 C30 82 14 70 14 54 V24 C14 12 34 8 48 8 Z\" \n            fill=\"#BBD5B8\" filter=\"url(#bg-sh-shield)\"/>\n      <!-- Layer 2: Dual-Tone Chevron Inset Frame -->\n      <path d=\"M48 14 C60 14 76 18 76 28 V52 C76 66 62 76 48 82 C34 76 20 66 20 52 V28 C20 18 36 14 48 14 Z\" \n            fill=\"#FEE396\" filter=\"url(#bg-sh-shield)\"/>\n      <!-- Layer 3: Inner Cream Shield Inlay -->\n      <path d=\"M48 20 C56 20 70 23 70 32 V50 C70 62 58 71 48 76 C38 71 26 62 26 50 V32 C26 23 40 20 48 20 Z\" \n            fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Crown or Laurel Cross Accent Pins -->\n      <circle cx=\"48\" cy=\"27\" r=\"2.5\" fill=\"#BBD5B8\"/>\n    "
  },
  {
    "id": "circular-postmark",
    "nameKo": "원형 더블링 우편 소인",
    "nameEn": "Double-Ring Postal Cancel",
    "category": "classic",
    "colors": [
      "#BDE0EA",
      "#FFFDF9",
      "#A3D8C3"
    ],
    "paletteDesc": "스카이 블루 (#BDE0EA) + 코튼 화이트 + 민트 소인링",
    "recommendedFor": "편지, 메일, 배송, 항공권, 인증",
    "cssClass": "pc-bg-circular-postmark",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-circular-postmark\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Outer Scalloped Postmark Disc -->\n      <circle cx=\"48\" cy=\"48\" r=\"40\" fill=\"#BDE0EA\" filter=\"url(#bg-sh-circular-postmark)\"/>\n      <!-- Layer 2: Middle Cream Postal Cardstock -->\n      <circle cx=\"48\" cy=\"48\" r=\"34\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-circular-postmark)\"/>\n      <!-- Layer 3: Concentric Stitched Rings -->\n      <circle cx=\"48\" cy=\"48\" r=\"30\" fill=\"none\" stroke=\"#A3D8C3\" stroke-width=\"1.8\"/>\n      <circle cx=\"48\" cy=\"48\" r=\"24\" fill=\"#FAF6ED\"/>\n      <!-- Layer 4: Horizontal Cancel Date Bar & Waves -->\n      <line x1=\"28\" y1=\"42\" x2=\"68\" y2=\"42\" stroke=\"#F7BA9E\" stroke-width=\"1.5\"/>\n      <line x1=\"28\" y1=\"54\" x2=\"68\" y2=\"54\" stroke=\"#F7BA9E\" stroke-width=\"1.5\"/>\n      <path d=\"M68 45 C74 42 78 48 84 45 M68 51 C74 48 78 54 84 51\" stroke=\"#3D352E\" stroke-width=\"1.2\" stroke-linecap=\"round\" opacity=\"0.6\"/>\n</svg>"
  },
  {
    "id": "embossed-medal",
    "nameKo": "엠보싱 로열 메달리온",
    "nameEn": "Embossed Royal Medallion",
    "category": "classic",
    "colors": [
      "#FEE396",
      "#F5B8BE",
      "#FFFDF9"
    ],
    "paletteDesc": "로열 버터컵 (#FEE396) + 로즈 핑크 리본 + 크림 코어",
    "recommendedFor": "트로피, 어워드, 훈장, 승리, 프리미엄",
    "cssClass": "pc-bg-embossed-medal",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-embossed-medal\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Top Angled Ribbon Hanger -->\n      <polygon points=\"36,8 60,8 68,26 28,26\" fill=\"#F5B8BE\" filter=\"url(#bg-sh-embossed-medal)\"/>\n      <!-- Layer 2: 12-Lobed Laurel Scalloped Medallion Rim -->\n      <path d=\"M48 16 C53 16 57 20 62 21 C67 22 72 20 76 24 C80 28 78 33 81 38 C84 43 88 47 88 52 C88 57 84 61 81 66 C78 71 80 76 76 80 C72 84 67 82 62 83 C57 84 53 88 48 88 C43 88 39 84 34 83 C29 82 24 84 20 80 C16 76 18 71 15 66 C12 61 8 57 8 52 C8 47 12 43 15 38 C18 33 16 28 20 24 C24 20 29 22 34 21 C39 20 43 16 48 16 Z\" \n            fill=\"#FEE396\" filter=\"url(#bg-sh-embossed-medal)\"/>\n      <!-- Layer 3: Inner Recessed Cream Stage -->\n      <circle cx=\"48\" cy=\"52\" r=\"26\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-embossed-medal)\"/>\n      <!-- Layer 4: Delicate Beaded Pearl Perimeter -->\n      <circle cx=\"48\" cy=\"52\" r=\"22\" fill=\"none\" stroke=\"#E2CCA8\" stroke-width=\"1.2\" stroke-dasharray=\"2 3\"/>\n      <polygon points=\"48,32 50,37 55,37 51,40 53,45 48,42 43,45 45,40 41,37 46,37\" fill=\"#FEE396\" opacity=\"0.8\"/>\n</svg>"
  },
  {
    "id": "ledger-receipt",
    "nameKo": "빈티지 영수증 장부 표",
    "nameEn": "Vintage Ledger Receipt Card",
    "category": "classic",
    "colors": [
      "#E2CCA8",
      "#FFFDF9",
      "#BBD5B8"
    ],
    "paletteDesc": "크라프트지 (#E2CCA8) + 장부 크림 (#FFFDF9) + 세이지 헤더",
    "recommendedFor": "계산, 영수증, 결제, 장부, 송장",
    "cssClass": "pc-bg-ledger-receipt",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-ledger-receipt\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Kraft Paper Backing Card -->\n      <rect x=\"12\" y=\"10\" width=\"72\" height=\"76\" rx=\"6\" fill=\"#E2CCA8\" filter=\"url(#bg-sh-ledger-receipt)\"/>\n      <!-- Layer 2: Serrated Tear-Top Receipt Slip -->\n      <path d=\"M16 18 L20 15 L24 18 L28 15 L32 18 L36 15 L40 18 L44 15 L48 18 L52 15 L56 18 L60 15 L64 18 L68 15 L72 18 L76 15 L80 18 V80 H16 Z\" \n            fill=\"#FFFDF9\" filter=\"url(#bg-sh-ledger-receipt)\"/>\n      <!-- Layer 3: Colored Ledger Header Banner Tab -->\n      <rect x=\"22\" y=\"24\" width=\"52\" height=\"10\" rx=\"3\" fill=\"#BBD5B8\"/>\n      <!-- Layer 4: Metallic Wire Staple & Ruled Lines -->\n      <rect x=\"42\" y=\"11\" width=\"12\" height=\"3\" rx=\"1.5\" fill=\"#3D352E\"/>\n      <line x1=\"22\" y1=\"42\" x2=\"74\" y2=\"42\" stroke=\"#E2CCA8\" stroke-width=\"1.2\" stroke-dasharray=\"3 2\"/>\n      <line x1=\"22\" y1=\"52\" x2=\"74\" y2=\"52\" stroke=\"#E2CCA8\" stroke-width=\"1.2\" stroke-dasharray=\"3 2\"/>\n      <line x1=\"22\" y1=\"62\" x2=\"74\" y2=\"62\" stroke=\"#E2CCA8\" stroke-width=\"1.2\" stroke-dasharray=\"3 2\"/>\n      <line x1=\"22\" y1=\"72\" x2=\"74\" y2=\"72\" stroke=\"#E2CCA8\" stroke-width=\"1.2\" stroke-dasharray=\"3 2\"/>\n</svg>"
  },
  {
    "id": "perforated-strip",
    "nameKo": "연속 우표 절취 시트",
    "nameEn": "Perforated Stamp Strip",
    "category": "classic",
    "colors": [
      "#A3D8C3",
      "#FFFDF9",
      "#FAF6ED"
    ],
    "paletteDesc": "애플 민트 (#A3D8C3) + 페일 크림 + 빈티지 아이보리",
    "recommendedFor": "우표, 컬렉션, 사진, 티켓, 쿠폰",
    "cssClass": "pc-bg-perforated-strip",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-perforated-strip\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Dual Joined Perforated Stamp Base -->\n      <path d=\"M10 14 Q14 16 18 14 Q22 16 26 14 Q30 16 34 14 Q38 16 42 14 Q46 16 50 14 Q54 16 58 14 Q62 16 66 14 Q70 16 74 14 Q78 16 82 14 Q86 16 86 20 Q84 24 86 28 Q84 32 86 36 Q84 40 86 44 Q84 48 86 52 Q84 56 86 60 Q84 64 86 68 Q84 72 86 76 Q84 80 82 82 Q78 80 74 82 Q70 80 66 82 Q62 80 58 82 Q54 80 50 82 Q46 80 42 82 Q38 80 34 82 Q30 80 26 82 Q22 80 18 82 Q14 80 10 82 Q8 78 10 74 Q8 70 10 66 Q8 62 10 58 Q8 54 10 50 Q8 46 10 42 Q8 38 10 34 Q8 30 10 26 Q8 22 10 18 Z\" \n            fill=\"#A3D8C3\" filter=\"url(#bg-sh-perforated-strip)\"/>\n      <!-- Layer 2: Left and Right Stamp Card Inlays -->\n      <rect x=\"14\" y=\"18\" width=\"31\" height=\"60\" rx=\"3\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-perforated-strip)\"/>\n      <rect x=\"51\" y=\"18\" width=\"31\" height=\"60\" rx=\"3\" fill=\"#FAF6ED\" filter=\"url(#bg-sh-perforated-strip)\"/>\n      <!-- Layer 3: Center Dividing Tear Perforations -->\n      <line x1=\"48\" y1=\"14\" x2=\"48\" y2=\"82\" stroke=\"#3D352E\" stroke-width=\"1.5\" stroke-dasharray=\"2 3\" opacity=\"0.4\"/>\n      <!-- Layer 4: Postal Cancellation Arch -->\n      <path d=\"M38 34 C44 26 52 26 58 34\" stroke=\"#F7BA9E\" stroke-width=\"1.8\" stroke-linecap=\"round\" fill=\"none\"/>\n      <circle cx=\"30\" cy=\"65\" r=\"4\" fill=\"none\" stroke=\"#BBD5B8\" stroke-width=\"1.2\"/>\n</svg>"
  },
  {
    "id": "notary-seal",
    "nameKo": "공증인 톱니 별 스티커",
    "nameEn": "Golden Star Notary Seal",
    "category": "classic",
    "colors": [
      "#FEE396",
      "#F5B8BE",
      "#FFFDF9"
    ],
    "paletteDesc": "골든 버터컵 (#FEE396) + 루비 로즈 리본 + 크림 씰",
    "recommendedFor": "보증, 인증서, 계약, 보안, 서명",
    "cssClass": "pc-bg-notary-seal",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-notary-seal\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Twin Hanging Satin Ribbon Tails -->\n      <polygon points=\"38,62 30,90 44,82 48,92 52,62\" fill=\"#F5B8BE\" filter=\"url(#bg-sh-notary-seal)\"/>\n      <polygon points=\"48,62 52,92 56,82 70,90 62,62\" fill=\"#F7BA9E\" filter=\"url(#bg-sh-notary-seal)\"/>\n      <!-- Layer 2: 24-Point Sharp Starburst Seal -->\n      <path d=\"M48 8 L51 15 L58 13 L59 20 L66 21 L65 28 L72 31 L69 38 L76 43 L71 49 L76 55 L69 60 L72 67 L65 70 L66 77 L59 78 L58 85 L51 83 L48 90 L45 83 L38 85 L37 78 L30 77 L31 70 L24 67 L27 60 L20 55 L25 49 L20 43 L27 38 L24 31 L31 28 L30 21 L37 20 L38 13 L45 15 Z\" \n            fill=\"#FEE396\" filter=\"url(#bg-sh-notary-seal)\"/>\n      <!-- Layer 3: Raised Circular Core Disc -->\n      <circle cx=\"48\" cy=\"48\" r=\"26\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-notary-seal)\"/>\n      <!-- Layer 4: Embossed Inner Ring & Star Rivets -->\n      <circle cx=\"48\" cy=\"48\" r=\"21\" fill=\"none\" stroke=\"#E2CCA8\" stroke-width=\"1.5\" stroke-dasharray=\"3 2\"/>\n      <polygon points=\"48,34 49,36.5 52,36.5 49.5,38 50.5,41 48,39 45.5,41 46.5,38 44,36.5 47,36.5\" fill=\"#FEE396\"/>\n</svg>"
  },
  {
    "id": "luggage-label",
    "nameKo": "앤틱 여행가방 라벨",
    "nameEn": "Antique Hotel Luggage Label",
    "category": "classic",
    "colors": [
      "#E2CCA8",
      "#FFFDF9",
      "#F5B8BE"
    ],
    "paletteDesc": "크라프트 보드 (#E2CCA8) + 호텔 화이트 + 코랄 테두리",
    "recommendedFor": "여행, 가방, 호텔, 항공, 지도",
    "cssClass": "pc-bg-luggage-label",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-luggage-label\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Heavy Octagonal Chamfered Backer -->\n      <polygon points=\"26,10 70,10 88,28 88,68 70,86 26,86 8,68 8,28\" fill=\"#E2CCA8\" filter=\"url(#bg-sh-luggage-label)\"/>\n      <!-- Layer 2: Dual-Tone Airmail Chevron Border -->\n      <polygon points=\"28,14 68,14 84,30 84,66 68,82 28,82 12,66 12,30\" fill=\"#F5B8BE\" filter=\"url(#bg-sh-luggage-label)\"/>\n      <!-- Layer 3: Crisp Hotel Cream Cardstock -->\n      <polygon points=\"30,18 66,18 80,32 80,64 66,78 30,78 16,64 16,32\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Four Corner Brass Accent Tabs -->\n      <polygon points=\"16,32 24,32 16,24\" fill=\"#BDE0EA\"/>\n      <polygon points=\"80,32 72,32 80,24\" fill=\"#BDE0EA\"/>\n      <polygon points=\"80,64 72,64 80,72\" fill=\"#BDE0EA\"/>\n      <polygon points=\"16,64 24,64 16,72\" fill=\"#BDE0EA\"/>\n</svg>"
  },
  {
    "id": "calligraphy-card",
    "nameKo": "바로크 스크롤 프레임 카드",
    "nameEn": "Baroque Scroll Border Card",
    "category": "classic",
    "colors": [
      "#D7CBEB",
      "#FAF6ED",
      "#BBD5B8"
    ],
    "paletteDesc": "앤틱 라벤더 (#D7CBEB) + 파치먼트 크림 + 세이지 라인",
    "recommendedFor": "예술, 폰트, 서예, 청첩장, 초대",
    "cssClass": "pc-bg-calligraphy-card",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-calligraphy-card\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Scrolled Baroque Outer Card -->\n      <path d=\"M22 10 C16 10 10 16 10 22 C10 28 14 32 12 38 C10 44 8 46 8 48 C8 50 10 52 12 58 C14 64 10 68 10 74 C10 80 16 86 22 86 C28 86 32 82 38 84 C44 86 46 88 48 88 C50 88 52 86 58 84 C64 82 68 86 74 86 C80 86 86 80 86 74 C86 68 82 64 84 58 C86 52 88 50 88 48 C88 46 86 44 84 38 C82 32 86 28 86 22 C86 16 80 10 74 10 C68 10 64 14 58 12 C52 10 50 8 48 8 C46 8 44 10 38 12 C32 14 28 10 22 10 Z\" \n            fill=\"#D7CBEB\" filter=\"url(#bg-sh-calligraphy-card)\"/>\n      <!-- Layer 2: Main Cream Parchment Field -->\n      <rect x=\"16\" y=\"16\" width=\"64\" height=\"64\" rx=\"8\" fill=\"#FAF6ED\" filter=\"url(#bg-sh-calligraphy-card)\"/>\n      <!-- Layer 3: Delicate Flourish Corner Frame -->\n      <rect x=\"21\" y=\"21\" width=\"54\" height=\"54\" rx=\"4\" fill=\"none\" stroke=\"#BBD5B8\" stroke-width=\"1.2\"/>\n      <!-- Layer 4: Four Corner Spiral Scrolls -->\n      <circle cx=\"21\" cy=\"21\" r=\"2.5\" fill=\"#FEE396\"/>\n      <circle cx=\"75\" cy=\"21\" r=\"2.5\" fill=\"#FEE396\"/>\n      <circle cx=\"75\" cy=\"75\" r=\"2.5\" fill=\"#FEE396\"/>\n      <circle cx=\"21\" cy=\"75\" r=\"2.5\" fill=\"#FEE396\"/>\n</svg>"
  },
  {
    "id": "brass-fastener-plate",
    "nameKo": "황동 할핀 브래드 카드",
    "nameEn": "Brass Brads Document Plate",
    "category": "classic",
    "colors": [
      "#E2CCA8",
      "#FFFDF9",
      "#FEE396"
    ],
    "paletteDesc": "크라프트 서류철 (#E2CCA8) + 백상지 + 황동 할핀 (#FEE396)",
    "recommendedFor": "문서, 파일, 결재, 보관, 클립",
    "cssClass": "pc-bg-brass-fastener-plate",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-brass-fastener-plate\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Heavy Kraft Folder Backer -->\n      <rect x=\"10\" y=\"12\" width=\"76\" height=\"72\" rx=\"8\" fill=\"#E2CCA8\" filter=\"url(#bg-sh-brass-fastener-plate)\"/>\n      <!-- Layer 2: Clean White Document Cardstock -->\n      <rect x=\"15\" y=\"17\" width=\"66\" height=\"62\" rx=\"4\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-brass-fastener-plate)\"/>\n      <!-- Layer 3: Four Metallic Brass Brads -->\n      <circle cx=\"22\" cy=\"24\" r=\"3.5\" fill=\"#FEE396\" filter=\"url(#bg-sh-brass-fastener-plate)\"/>\n      <circle cx=\"74\" cy=\"24\" r=\"3.5\" fill=\"#FEE396\" filter=\"url(#bg-sh-brass-fastener-plate)\"/>\n      <circle cx=\"74\" cy=\"72\" r=\"3.5\" fill=\"#FEE396\" filter=\"url(#bg-sh-brass-fastener-plate)\"/>\n      <circle cx=\"22\" cy=\"72\" r=\"3.5\" fill=\"#FEE396\" filter=\"url(#bg-sh-brass-fastener-plate)\"/>\n      <!-- Layer 4: Brad Core Slits & Stamped Box -->\n      <line x1=\"20\" y1=\"24\" x2=\"24\" y2=\"24\" stroke=\"#3D352E\" stroke-width=\"1\"/>\n      <line x1=\"72\" y1=\"24\" x2=\"76\" y2=\"24\" stroke=\"#3D352E\" stroke-width=\"1\"/>\n      <line x1=\"72\" y1=\"72\" x2=\"76\" y2=\"72\" stroke=\"#3D352E\" stroke-width=\"1\"/>\n      <line x1=\"20\" y1=\"72\" x2=\"24\" y2=\"72\" stroke=\"#3D352E\" stroke-width=\"1\"/>\n      <rect x=\"30\" y=\"66\" width=\"36\" height=\"8\" rx=\"2\" fill=\"none\" stroke=\"#F7BA9E\" stroke-width=\"1\" stroke-dasharray=\"2 2\"/>\n</svg>"
  },
  {
    "id": "cancellation-waves",
    "nameKo": "에어메일 웨이브 소인 플레이트",
    "nameEn": "Wavy Airmail Cancel Plate",
    "category": "classic",
    "colors": [
      "#FFFDF9",
      "#F5B8BE",
      "#BDE0EA"
    ],
    "paletteDesc": "화이트 에어메일 (#FFFDF9) + 로즈 스트라이프 + 스카이 웨이브",
    "recommendedFor": "항공 우편, 여행, 소식, 메시지, 해외",
    "cssClass": "pc-bg-cancellation-waves",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-cancellation-waves\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Envelope Base with Striped Border -->\n      <rect x=\"10\" y=\"14\" width=\"76\" height=\"68\" rx=\"6\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-cancellation-waves)\"/>\n      <!-- Layer 2: Diagonal Airmail Chevrons around Border -->\n      <path d=\"M10 14 L20 14 L10 24 Z M30 14 L40 14 L10 44 L10 34 Z M50 14 L60 14 L10 64 L10 54 Z\" fill=\"#F5B8BE\"/>\n      <path d=\"M20 14 L30 14 L10 34 L10 24 Z M40 14 L50 14 L10 54 L10 44 Z M60 14 L70 14 L10 74 L10 64 Z\" fill=\"#BDE0EA\"/>\n      <!-- Layer 3: Central Circular Clean Mount Stage -->\n      <circle cx=\"48\" cy=\"48\" r=\"28\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-cancellation-waves)\"/>\n      <circle cx=\"48\" cy=\"48\" r=\"25\" fill=\"#FAF6ED\"/>\n      <!-- Layer 4: Triple Curved Postal Cancellation Waves -->\n      <path d=\"M52 38 C60 34 68 42 76 38 M52 46 C60 42 68 50 76 46 M52 54 C60 50 68 58 76 54\" stroke=\"#3D352E\" stroke-width=\"1.5\" stroke-linecap=\"round\" opacity=\"0.6\"/>\n</svg>"
  },
  {
    "id": "library-card-pocket",
    "nameKo": "도서관 대출 카드 포켓",
    "nameEn": "Vintage Library Card Pocket",
    "category": "classic",
    "colors": [
      "#E2CCA8",
      "#BBD5B8",
      "#FFFDF9"
    ],
    "paletteDesc": "도서관 크라프트 (#E2CCA8) + 세이지 플랩 + 인덱스 카드",
    "recommendedFor": "책, 도서관, 북마크, 대여, 독서",
    "cssClass": "pc-bg-library-card-pocket",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-library-card-pocket\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Manila Heavy Pocket Card -->\n      <rect x=\"12\" y=\"10\" width=\"72\" height=\"76\" rx=\"6\" fill=\"#E2CCA8\" filter=\"url(#bg-sh-library-card-pocket)\"/>\n      <!-- Layer 2: White Index Insert Card Peeking Up -->\n      <rect x=\"18\" y=\"14\" width=\"60\" height=\"52\" rx=\"4\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-library-card-pocket)\"/>\n      <line x1=\"24\" y1=\"22\" x2=\"72\" y2=\"22\" stroke=\"#F5B8BE\" stroke-width=\"1.2\"/>\n      <line x1=\"24\" y1=\"30\" x2=\"72\" y2=\"30\" stroke=\"#BDE0EA\" stroke-width=\"1.2\"/>\n      <!-- Layer 3: Slanted Front Pocket Flap with Thumb Notch -->\n      <path d=\"M12 44 H38 C42 44 44 48 48 48 C52 48 54 44 58 44 H84 V82 C84 84.2 82.2 86 80 86 H16 C13.8 86 12 84.2 12 82 Z\" \n            fill=\"#BBD5B8\" filter=\"url(#bg-sh-library-card-pocket)\"/>\n      <!-- Layer 4: Pocket Reinforced Stitches -->\n      <line x1=\"16\" y1=\"48\" x2=\"16\" y2=\"82\" stroke=\"#FFFDF9\" stroke-width=\"1.5\" stroke-dasharray=\"3 2\"/>\n      <line x1=\"80\" y1=\"48\" x2=\"80\" y2=\"82\" stroke=\"#FFFDF9\" stroke-width=\"1.5\" stroke-dasharray=\"3 2\"/>\n</svg>"
  },
  {
    "id": "coin-medallion",
    "nameKo": "고대 주화 양각 메달리온",
    "nameEn": "Ancient Minted Coin Plate",
    "category": "classic",
    "colors": [
      "#FEE396",
      "#E2CCA8",
      "#FFFDF9"
    ],
    "paletteDesc": "황금 주화 (#FEE396) + 앤틱 브론즈 (#E2CCA8) + 매트 크림",
    "recommendedFor": "코인, 화폐, 결제, 금융, 골드",
    "cssClass": "pc-bg-coin-medallion",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-coin-medallion\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Heavy Hammered Outer Coin Edge -->\n      <circle cx=\"48\" cy=\"48\" r=\"41\" fill=\"#FEE396\" filter=\"url(#bg-sh-coin-medallion)\"/>\n      <!-- Layer 2: Milled Tooth Rim Bezel -->\n      <circle cx=\"48\" cy=\"48\" r=\"35\" fill=\"#E2CCA8\" stroke=\"#FEE396\" stroke-width=\"2\" stroke-dasharray=\"2 3\"/>\n      <!-- Layer 3: Central Recessed Medallion Basin -->\n      <circle cx=\"48\" cy=\"48\" r=\"27\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-coin-medallion)\"/>\n      <!-- Layer 4: Ancient Radial Ingot Ticks & Crescent -->\n      <circle cx=\"48\" cy=\"48\" r=\"23\" fill=\"none\" stroke=\"#FEE396\" stroke-width=\"1.2\" stroke-dasharray=\"1.5 4\"/>\n      <path d=\"M26 36 C30 24 44 18 60 22\" stroke=\"#FFFDF9\" stroke-width=\"2.5\" stroke-linecap=\"round\" fill=\"none\" opacity=\"0.8\"/>\n</svg>"
  },
  {
    "id": "signet-ring-oval",
    "nameKo": "인장 반지 타원 씰",
    "nameEn": "Oval Signet Crest Seal",
    "category": "classic",
    "colors": [
      "#F7BA9E",
      "#F5B8BE",
      "#FFFDF9"
    ],
    "paletteDesc": "테라코타 왁스 (#F7BA9E) + 로즈 인장 (#F5B8BE) + 아이보리",
    "recommendedFor": "보안, 인장, 서명, 신뢰, 권위",
    "cssClass": "pc-bg-signet-ring-oval",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-signet-ring-oval\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Thick Melted Oval Wax Border -->\n      <ellipse cx=\"48\" cy=\"48\" rx=\"42\" ry=\"36\" fill=\"#F7BA9E\" filter=\"url(#bg-sh-signet-ring-oval)\"/>\n      <!-- Layer 2: Raised Inner Bezel Oval Ring -->\n      <ellipse cx=\"48\" cy=\"48\" rx=\"34\" ry=\"28\" fill=\"#F5B8BE\" filter=\"url(#bg-sh-signet-ring-oval)\"/>\n      <!-- Layer 3: Center Flat Signing Stage -->\n      <ellipse cx=\"48\" cy=\"48\" rx=\"26\" ry=\"21\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Laurel Sprig Wreath Accents -->\n      <path d=\"M26 48 C26 40 34 32 44 31 M70 48 C70 40 62 31 52 31\" stroke=\"#E2CCA8\" stroke-width=\"1.2\" stroke-linecap=\"round\" fill=\"none\"/>\n      <path d=\"M26 48 C26 56 34 64 44 65 M70 48 C70 56 62 65 52 65\" stroke=\"#E2CCA8\" stroke-width=\"1.2\" stroke-linecap=\"round\" fill=\"none\"/>\n</svg>"
  },
  {
    "id": "certificate-frame",
    "nameKo": "수료증 기요셰 프레임 플레이트",
    "nameEn": "Guilloche Border Diploma Plate",
    "category": "classic",
    "colors": [
      "#BBD5B8",
      "#FAF6ED",
      "#D7CBEB"
    ],
    "paletteDesc": "세이지 프레임 (#BBD5B8) + 수료증 양피지 (#FAF6ED) + 라벤더 기요셰",
    "recommendedFor": "학위, 인증, 자격증, 상장, 문서",
    "cssClass": "pc-bg-certificate-frame",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-certificate-frame\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Deep Sage Certificate Backer -->\n      <rect x=\"10\" y=\"10\" width=\"76\" height=\"76\" rx=\"8\" fill=\"#BBD5B8\" filter=\"url(#bg-sh-certificate-frame)\"/>\n      <!-- Layer 2: Stepped Fine Parchment Card -->\n      <rect x=\"14\" y=\"14\" width=\"68\" height=\"68\" rx=\"5\" fill=\"#FAF6ED\" filter=\"url(#bg-sh-certificate-frame)\"/>\n      <!-- Layer 3: Double Guilloche Inset Frame -->\n      <rect x=\"18\" y=\"18\" width=\"60\" height=\"60\" rx=\"3\" fill=\"none\" stroke=\"#D7CBEB\" stroke-width=\"1.8\"/>\n      <rect x=\"21\" y=\"21\" width=\"54\" height=\"54\" rx=\"2\" fill=\"none\" stroke=\"#E2CCA8\" stroke-width=\"0.8\"/>\n      <!-- Layer 4: Rosette Seal in Corner & Corner Knots -->\n      <circle cx=\"21\" cy=\"21\" r=\"3\" fill=\"#FEE396\"/>\n      <circle cx=\"75\" cy=\"21\" r=\"3\" fill=\"#FEE396\"/>\n      <circle cx=\"21\" cy=\"75\" r=\"3\" fill=\"#FEE396\"/>\n      <circle cx=\"75\" cy=\"75\" r=\"3\" fill=\"#FEE396\"/>\n</svg>"
  },
  {
    "id": "parchment-scroll",
    "nameKo": "돌돌 말린 양피지 스크롤",
    "nameEn": "Curled Parchment Scroll",
    "category": "classic",
    "colors": [
      "#E2CCA8",
      "#FAF6ED",
      "#F5B8BE"
    ],
    "paletteDesc": "앤틱 크라프트 (#E2CCA8) + 파치먼트 스크롤 + 로즈 왁스 클립",
    "recommendedFor": "역사, 판타지, 편지, 마법, 퀘스트",
    "cssClass": "pc-bg-parchment-scroll",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-parchment-scroll\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Rolled Scroll Cylinders (Top & Bottom) -->\n      <path d=\"M16 14 C16 8 80 8 80 14 C80 20 16 20 16 14 Z\" fill=\"#E2CCA8\" filter=\"url(#bg-sh-parchment-scroll)\"/>\n      <path d=\"M16 82 C16 76 80 76 80 82 C80 88 16 88 16 82 Z\" fill=\"#E2CCA8\" filter=\"url(#bg-sh-parchment-scroll)\"/>\n      <!-- Layer 2: Main Unfurled Parchment Body -->\n      <rect x=\"14\" y=\"16\" width=\"68\" height=\"64\" rx=\"4\" fill=\"#FAF6ED\" filter=\"url(#bg-sh-parchment-scroll)\"/>\n      <!-- Layer 3: Central Inset Field -->\n      <rect x=\"18\" y=\"22\" width=\"60\" height=\"52\" rx=\"2\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Red Wax Clasp & Curl Ribbons -->\n      <circle cx=\"48\" cy=\"18\" r=\"6\" fill=\"#F5B8BE\" filter=\"url(#bg-sh-parchment-scroll)\"/>\n      <circle cx=\"48\" cy=\"18\" r=\"3\" fill=\"#FEE396\"/>\n      <line x1=\"22\" y1=\"30\" x2=\"74\" y2=\"30\" stroke=\"#E2CCA8\" stroke-width=\"1.2\" stroke-dasharray=\"4 2\"/>\n</svg>"
  },
  {
    "id": "monstera-leaf",
    "nameKo": "몬스테라 잎사귀 플레이트",
    "nameEn": "Monstera Deliciosa Leaf",
    "category": "nature",
    "colors": [
      "#A3D8C3",
      "#BBD5B8",
      "#FFFDF9"
    ],
    "paletteDesc": "몬스테라 민트 (#A3D8C3) + 세이지 잎맥 + 코튼 크림",
    "recommendedFor": "식물, 정원, 인테리어, 카페, 힐링",
    "cssClass": "pc-bg-monstera-leaf",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-monstera-leaf\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Broad Monstera Leaf with Split Fenestrations -->\n      <path d=\"M48 10 C68 12 86 30 86 54 C86 74 68 86 48 88 C28 86 10 74 10 54 C10 30 28 12 48 10 Z\" \n            fill=\"#A3D8C3\" filter=\"url(#bg-sh-monstera-leaf)\"/>\n      <!-- Layer 2: Stepped Inner Sage Layer -->\n      <circle cx=\"48\" cy=\"48\" r=\"32\" fill=\"#BBD5B8\" filter=\"url(#bg-sh-monstera-leaf)\"/>\n      <!-- Layer 3: Central Cream Mounting Stage -->\n      <circle cx=\"48\" cy=\"48\" r=\"24\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Organic Leaf Cutout Slits & Center Stem -->\n      <ellipse cx=\"68\" cy=\"42\" rx=\"4\" ry=\"1.8\" transform=\"rotate(25 68 42)\" fill=\"#FFFDF9\"/>\n      <ellipse cx=\"28\" cy=\"42\" rx=\"4\" ry=\"1.8\" transform=\"rotate(-25 28 42)\" fill=\"#FFFDF9\"/>\n      <line x1=\"48\" y1=\"20\" x2=\"48\" y2=\"82\" stroke=\"#A3D8C3\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n</svg>"
  },
  {
    "id": "succulent-rosette",
    "nameKo": "다육식물 로제트 화분",
    "nameEn": "Layered Succulent Rosette",
    "category": "nature",
    "colors": [
      "#BBD5B8",
      "#A3D8C3",
      "#F5B8BE"
    ],
    "paletteDesc": "세이지 그린 (#BBD5B8) + 민트 잎사귀 + 핑크 잎끝 팁",
    "recommendedFor": "화초, 다육이, 가드닝, 샵, 보태니컬",
    "cssClass": "pc-bg-succulent-rosette",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-succulent-rosette\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: 8 Pointed Outer Succulent Petals -->\n      <path d=\"M48 6 L58 20 L76 14 L76 32 L92 40 L82 56 L90 74 L72 78 L64 94 L48 84 L32 94 L24 78 L6 74 L14 56 L4 40 L20 32 L20 14 L38 20 Z\" \n            fill=\"#BBD5B8\" filter=\"url(#bg-sh-succulent-rosette)\"/>\n      <!-- Layer 2: Middle Mint Rosette Ring -->\n      <circle cx=\"48\" cy=\"48\" r=\"32\" fill=\"#A3D8C3\" filter=\"url(#bg-sh-succulent-rosette)\"/>\n      <!-- Layer 3: Center Cream Basin -->\n      <circle cx=\"48\" cy=\"48\" r=\"24\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Rose Pink Petal Tip Accents -->\n      <polygon points=\"48,10 46,15 50,15\" fill=\"#F5B8BE\"/>\n      <polygon points=\"84,46 80,44 80,48\" fill=\"#F5B8BE\"/>\n      <polygon points=\"48,82 46,77 50,77\" fill=\"#F5B8BE\"/>\n      <polygon points=\"12,46 16,44 16,48\" fill=\"#F5B8BE\"/>\n</svg>"
  },
  {
    "id": "acorn-cupule",
    "nameKo": "도토리 깍지 플레이트",
    "nameEn": "Autumn Acorn Cupule",
    "category": "nature",
    "colors": [
      "#E2CCA8",
      "#F7BA9E",
      "#FFFDF9"
    ],
    "paletteDesc": "크라프트 깍지 (#E2CCA8) + 살구 도토리 + 크림 페이스",
    "recommendedFor": "가을, 숲, 다람쥐, 계절, 자연",
    "cssClass": "pc-bg-acorn-cupule",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-acorn-cupule\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Textured Scaly Acorn Cup Cap -->\n      <path d=\"M20 36 C20 18 76 18 76 36 Z\" fill=\"#E2CCA8\" filter=\"url(#bg-sh-acorn-cupule)\"/>\n      <rect x=\"45\" y=\"8\" width=\"6\" height=\"12\" rx=\"3\" fill=\"#3D352E\"/>\n      <!-- Layer 2: Plump Nut Body Silhouette -->\n      <path d=\"M22 34 C22 66 38 88 48 88 C58 88 74 66 74 34 Z\" fill=\"#F7BA9E\" filter=\"url(#bg-sh-acorn-cupule)\"/>\n      <!-- Layer 3: Round Cream Nut Face -->\n      <circle cx=\"48\" cy=\"54\" r=\"24\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Cap Cross-Hatch Paper Texture -->\n      <line x1=\"26\" y1=\"30\" x2=\"70\" y2=\"30\" stroke=\"#FFFDF9\" stroke-width=\"1.5\" stroke-dasharray=\"3 2\" opacity=\"0.6\"/>\n      <circle cx=\"48\" cy=\"54\" r=\"20\" fill=\"none\" stroke=\"#E2CCA8\" stroke-width=\"1.2\" stroke-dasharray=\"2 3\"/>\n</svg>"
  },
  {
    "id": "lotus-pad",
    "nameKo": "수련 잎 연꽃 방석",
    "nameEn": "Floating Lotus Lilypad",
    "category": "nature",
    "colors": [
      "#BDE0EA",
      "#A3D8C3",
      "#FFFDF9"
    ],
    "paletteDesc": "연못 스카이 (#BDE0EA) + 수련 잎 민트 (#A3D8C3) + 연꽃 핑크",
    "recommendedFor": "연못, 물, 명상, 요가, 평온",
    "cssClass": "pc-bg-lotus-pad",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-lotus-pad\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Concentric Water Ripple Ring -->\n      <circle cx=\"48\" cy=\"48\" r=\"41\" fill=\"#BDE0EA\" filter=\"url(#bg-sh-lotus-pad)\"/>\n      <!-- Layer 2: Floating Round Lilypad with Notch -->\n      <path d=\"M48 48 L84 32 C88 42 88 56 82 68 C74 80 60 88 46 88 C30 88 16 78 10 64 C4 50 8 34 20 22 C32 10 50 8 66 14 C74 18 80 24 84 32 Z\" \n            fill=\"#A3D8C3\" filter=\"url(#bg-sh-lotus-pad)\"/>\n      <!-- Layer 3: Center Cream Lilypad Disc -->\n      <circle cx=\"48\" cy=\"48\" r=\"25\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Floating Pink Lotus Petal Accent -->\n      <path d=\"M64 54 C68 48 74 48 76 56 C74 62 68 62 64 54 Z\" fill=\"#F5B8BE\"/>\n      <circle cx=\"48\" cy=\"48\" r=\"21\" fill=\"none\" stroke=\"#BBD5B8\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\"/>\n</svg>"
  },
  {
    "id": "mushroom-cap",
    "nameKo": "숲속 버섯 갓 플레이트",
    "nameEn": "Whimsical Forest Mushroom Cap",
    "category": "nature",
    "colors": [
      "#F5B8BE",
      "#FAF6ED",
      "#FFFDF9"
    ],
    "paletteDesc": "로즈 버섯 갓 (#F5B8BE) + 크림 주름살 + 마시멜로 도트",
    "recommendedFor": "버섯, 숲, 동화, 아동, 귀여움",
    "cssClass": "pc-bg-mushroom-cap",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-mushroom-cap\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Wide Mushroom Cap Dome -->\n      <path d=\"M12 56 C12 28 30 12 48 12 C66 12 84 28 84 56 C74 58 60 54 48 54 C36 54 22 58 12 56 Z\" \n            fill=\"#F5B8BE\" filter=\"url(#bg-sh-mushroom-cap)\"/>\n      <!-- Layer 2: Fluted Underside Gills -->\n      <path d=\"M14 56 C26 60 40 56 48 56 C56 56 70 60 82 56 L72 82 C68 86 28 86 24 82 Z\" \n            fill=\"#FAF6ED\" filter=\"url(#bg-sh-mushroom-cap)\"/>\n      <!-- Layer 3: Main Cream Center Stage -->\n      <circle cx=\"48\" cy=\"48\" r=\"24\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Paper-Cut Polka Dot Holes on Cap -->\n      <circle cx=\"34\" cy=\"30\" r=\"5\" fill=\"#FFFDF9\"/>\n      <circle cx=\"62\" cy=\"28\" r=\"4.5\" fill=\"#FFFDF9\"/>\n      <circle cx=\"48\" cy=\"20\" r=\"3.5\" fill=\"#FFFDF9\"/>\n</svg>"
  },
  {
    "id": "tulip-cup",
    "nameKo": "봄 튤립 꽃봉오리",
    "nameEn": "Spring Tulip Bloom",
    "category": "nature",
    "colors": [
      "#BBD5B8",
      "#F5B8BE",
      "#F7BA9E"
    ],
    "paletteDesc": "세이지 줄기 (#BBD5B8) + 튤립 로즈 (#F5B8BE) + 피치 꽃잎",
    "recommendedFor": "꽃집, 선물, 봄, 플라워, 이벤트",
    "cssClass": "pc-bg-tulip-cup",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-tulip-cup\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Twin Flanking Green Leaf Blades -->\n      <path d=\"M20 86 C12 68 18 42 34 32 C30 52 38 72 48 86 Z\" fill=\"#BBD5B8\" filter=\"url(#bg-sh-tulip-cup)\"/>\n      <path d=\"M76 86 C84 68 78 42 62 32 C66 52 58 72 48 86 Z\" fill=\"#BBD5B8\" filter=\"url(#bg-sh-tulip-cup)\"/>\n      <!-- Layer 2: 3-Lobed Tulip Cup Silhouette -->\n      <path d=\"M26 36 C26 66 40 84 48 84 C56 84 70 66 70 36 C64 44 56 46 48 38 C40 46 32 44 26 36 Z\" \n            fill=\"#F5B8BE\" filter=\"url(#bg-sh-tulip-cup)\"/>\n      <!-- Layer 3: Center Cream Petal Inlay -->\n      <circle cx=\"48\" cy=\"50\" r=\"23\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Peach Center Petal Crest -->\n      <path d=\"M48 24 L54 38 C52 42 44 42 42 38 Z\" fill=\"#F7BA9E\"/>\n      <circle cx=\"48\" cy=\"50\" r=\"19\" fill=\"none\" stroke=\"#F7BA9E\" stroke-width=\"1.2\" stroke-dasharray=\"2 3\"/>\n</svg>"
  },
  {
    "id": "shell-scallop-marine",
    "nameKo": "조개 가리비 패각",
    "nameEn": "Deep Sea Scallop Shell",
    "category": "nature",
    "colors": [
      "#D7CBEB",
      "#BDE0EA",
      "#FFFDF9"
    ],
    "paletteDesc": "오션 라벤더 (#D7CBEB) + 마린 스카이 (#BDE0EA) + 진주 크림",
    "recommendedFor": "바다, 비치, 여름, 보물, 여행",
    "cssClass": "pc-bg-shell-scallop-marine",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-shell-scallop-marine\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Fan-Shaped Radiating Shell Silhouette -->\n      <path d=\"M48 86 L32 86 C28 86 26 82 26 78 L20 72 C12 62 10 46 16 32 C24 16 36 10 48 10 C60 10 72 16 80 32 C86 46 84 62 76 72 L70 78 C70 82 68 86 64 86 Z\" \n            fill=\"#D7CBEB\" filter=\"url(#bg-sh-shell-scallop-marine)\"/>\n      <!-- Layer 2: Stepped Inner Sky Shell Plate -->\n      <circle cx=\"48\" cy=\"46\" r=\"32\" fill=\"#BDE0EA\" filter=\"url(#bg-sh-shell-scallop-marine)\"/>\n      <!-- Layer 3: Pearl Cream Center Well -->\n      <circle cx=\"48\" cy=\"46\" r=\"24\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Fluted Radiating Groove Ribs -->\n      <line x1=\"48\" y1=\"84\" x2=\"48\" y2=\"70\" stroke=\"#FFFDF9\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n      <line x1=\"40\" y1=\"82\" x2=\"32\" y2=\"68\" stroke=\"#FFFDF9\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      <line x1=\"56\" y1=\"82\" x2=\"64\" y2=\"68\" stroke=\"#FFFDF9\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n</svg>"
  },
  {
    "id": "honeycomb-flora",
    "nameKo": "꽃송이 벌집 셀",
    "nameEn": "Floral Honeycomb Cell",
    "category": "nature",
    "colors": [
      "#FEE396",
      "#BBD5B8",
      "#FFFDF9"
    ],
    "paletteDesc": "허니 골드 (#FEE396) + 세이지 리프 (#BBD5B8) + 화이트",
    "recommendedFor": "꿀벌, 생태, 식물, 건강, 푸드",
    "cssClass": "pc-bg-honeycomb-flora",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-honeycomb-flora\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: 6 Petal Lobes Surrounding Hex Core -->\n      <path d=\"M48 8 C54 8 58 14 66 18 C74 22 80 20 84 28 C88 36 84 42 86 50 C88 58 84 66 80 72 C76 78 72 82 64 84 C56 86 52 90 48 90 C44 90 40 86 32 84 C24 82 20 78 16 72 C12 66 8 58 10 50 C12 42 8 36 12 28 C16 20 22 22 30 18 C38 14 42 8 48 8 Z\" \n            fill=\"#FEE396\" filter=\"url(#bg-sh-honeycomb-flora)\"/>\n      <!-- Layer 2: Inner Sage Green Hexagon -->\n      <polygon points=\"48,16 76,32 76,64 48,80 20,64 20,32\" fill=\"#BBD5B8\" filter=\"url(#bg-sh-honeycomb-flora)\"/>\n      <!-- Layer 3: Central Cream Disc -->\n      <circle cx=\"48\" cy=\"48\" r=\"23\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Pollen Dots & Hex Guideline -->\n      <polygon points=\"48,22 70,35 70,61 48,74 26,61 26,35\" fill=\"none\" stroke=\"#FEE396\" stroke-width=\"1.2\"/>\n      <circle cx=\"48\" cy=\"22\" r=\"1.8\" fill=\"#FAF6ED\"/>\n</svg>"
  },
  {
    "id": "pinecone-scale",
    "nameKo": "솔방울 솔잎 플레이트",
    "nameEn": "Pinecone Paper Scales",
    "category": "nature",
    "colors": [
      "#E2CCA8",
      "#BBD5B8",
      "#FFFDF9"
    ],
    "paletteDesc": "크라프트 솔방울 (#E2CCA8) + 세이지 솔잎 + 마운틴 크림",
    "recommendedFor": "캠핑, 등산, 겨울, 솔잎, 산",
    "cssClass": "pc-bg-pinecone-scale",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-pinecone-scale\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Flanking Pine Needle Sprays -->\n      <path d=\"M12 48 C8 32 18 16 28 14 C24 28 26 42 30 52 Z\" fill=\"#BBD5B8\" filter=\"url(#bg-sh-pinecone-scale)\"/>\n      <path d=\"M84 48 C88 32 78 16 68 14 C72 28 70 42 66 52 Z\" fill=\"#BBD5B8\" filter=\"url(#bg-sh-pinecone-scale)\"/>\n      <!-- Layer 2: Stepped Scalloped Pinecone Body -->\n      <path d=\"M48 12 C62 12 76 28 76 56 C76 74 64 86 48 86 C32 86 20 74 20 56 C20 28 34 12 48 12 Z\" \n            fill=\"#E2CCA8\" filter=\"url(#bg-sh-pinecone-scale)\"/>\n      <!-- Layer 3: Inner Cream Oval Stage -->\n      <ellipse cx=\"48\" cy=\"50\" rx=\"23\" ry=\"25\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Pinecone Overlapping Bract Arcs -->\n      <path d=\"M34 32 Q48 38 62 32 M30 46 Q48 54 66 46 M32 60 Q48 68 64 60\" stroke=\"#C4B090\" stroke-width=\"1.5\" stroke-linecap=\"round\" fill=\"none\"/>\n</svg>"
  },
  {
    "id": "maple-leaf",
    "nameKo": "단풍잎 실루엣 플레이트",
    "nameEn": "Autumn Maple Foliage",
    "category": "nature",
    "colors": [
      "#F7BA9E",
      "#FEE396",
      "#FFFDF9"
    ],
    "paletteDesc": "가을 단풍 피치 (#F7BA9E) + 은행 버터컵 + 코튼 페이스",
    "recommendedFor": "단풍, 가을, 단풍놀이, 수필, 감성",
    "cssClass": "pc-bg-maple-leaf",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-maple-leaf\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: 5-Pointed Maple Foliage Silhouette -->\n      <path d=\"M48 8 L54 24 L68 18 L64 32 L82 32 L74 46 L88 56 L70 62 L74 74 L58 70 L48 88 L38 70 L22 74 L26 62 L8 56 L22 46 L14 32 L32 32 L28 18 L42 24 Z\" \n            fill=\"#F7BA9E\" filter=\"url(#bg-sh-maple-leaf)\"/>\n      <!-- Layer 2: Stepped Buttercup Inner Maple -->\n      <circle cx=\"48\" cy=\"48\" r=\"30\" fill=\"#FEE396\" filter=\"url(#bg-sh-maple-leaf)\"/>\n      <!-- Layer 3: Center Cream Leaf Disc -->\n      <circle cx=\"48\" cy=\"48\" r=\"23\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Delicate Maple Vein Ribs -->\n      <line x1=\"48\" y1=\"80\" x2=\"48\" y2=\"28\" stroke=\"#F7BA9E\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      <line x1=\"48\" y1=\"56\" x2=\"30\" y2=\"40\" stroke=\"#F7BA9E\" stroke-width=\"1.4\" stroke-linecap=\"round\"/>\n      <line x1=\"48\" y1=\"56\" x2=\"66\" y2=\"40\" stroke=\"#F7BA9E\" stroke-width=\"1.4\" stroke-linecap=\"round\"/>\n</svg>"
  },
  {
    "id": "wave-crest",
    "nameKo": "우키요에 파도 포말 플레이트",
    "nameEn": "Japanese Paper Wave Crest",
    "category": "nature",
    "colors": [
      "#BDE0EA",
      "#A3D8C3",
      "#FFFDF9"
    ],
    "paletteDesc": "파도 스카이 (#BDE0EA) + 청록 민트 (#A3D8C3) + 흰 포말 크림",
    "recommendedFor": "서핑, 바다, 항해, 물, 스포츠",
    "cssClass": "pc-bg-wave-crest",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-wave-crest\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Curling Cresting Ocean Wave -->\n      <path d=\"M10 78 C20 78 28 66 38 66 C48 66 52 74 62 74 C74 74 84 62 86 48 C88 32 76 18 60 18 C46 18 36 28 36 40 C36 48 42 54 48 54 C52 54 56 50 56 46 C56 42 52 40 48 40 C44 40 42 44 42 46 C34 46 22 56 18 68 L10 78 Z\" \n            fill=\"#BDE0EA\" filter=\"url(#bg-sh-wave-crest)\"/>\n      <!-- Layer 2: Rolling Seafoam Mint Body -->\n      <circle cx=\"48\" cy=\"48\" r=\"32\" fill=\"#A3D8C3\" filter=\"url(#bg-sh-wave-crest)\"/>\n      <!-- Layer 3: Clean Round Center Mount -->\n      <circle cx=\"48\" cy=\"48\" r=\"24\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Three Tiny Flying Foam Droplets -->\n      <circle cx=\"68\" cy=\"24\" r=\"3\" fill=\"#FFFDF9\"/>\n      <circle cx=\"76\" cy=\"30\" r=\"2.2\" fill=\"#FFFDF9\"/>\n      <circle cx=\"72\" cy=\"16\" r=\"1.8\" fill=\"#FFFDF9\"/>\n</svg>"
  },
  {
    "id": "crystal-geode",
    "nameKo": "천연 수정 지오드 단면",
    "nameEn": "Natural Crystal Geode",
    "category": "nature",
    "colors": [
      "#E2CCA8",
      "#D7CBEB",
      "#FFFDF9"
    ],
    "paletteDesc": "원석 크라프트 (#E2CCA8) + 자수정 라벤더 + 수정 화이트",
    "recommendedFor": "보석, 크리스탈, 지질, 광물, 뷰티",
    "cssClass": "pc-bg-crystal-geode",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-crystal-geode\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Organic Rough Mineral Outer Crust -->\n      <path d=\"M48 8 C68 6 86 16 90 36 C94 56 86 78 68 88 C48 94 22 88 12 70 C4 54 8 28 26 14 C34 8 40 8 48 8 Z\" \n            fill=\"#E2CCA8\" filter=\"url(#bg-sh-crystal-geode)\"/>\n      <!-- Layer 2: Faceted Amethyst Crystal Ring -->\n      <path d=\"M48 14 C64 12 78 22 82 38 C86 54 78 72 64 80 C48 86 28 80 20 66 C14 52 18 32 32 20 C38 14 42 14 48 14 Z\" \n            fill=\"#D7CBEB\" filter=\"url(#bg-sh-crystal-geode)\"/>\n      <!-- Layer 3: Polished Agate Cream Core -->\n      <circle cx=\"48\" cy=\"48\" r=\"24\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Pointed Crystal Facet Teeth -->\n      <polygon points=\"48,20 46,26 50,26\" fill=\"#D7CBEB\"/>\n      <polygon points=\"74,48 68,46 68,50\" fill=\"#D7CBEB\"/>\n      <polygon points=\"48,76 46,70 50,70\" fill=\"#D7CBEB\"/>\n      <polygon points=\"22,48 28,46 28,50\" fill=\"#D7CBEB\"/>\n</svg>"
  },
  {
    "id": "sprout-seedling",
    "nameKo": "새싹 떡잎 플레이트",
    "nameEn": "Twin Leaf Sprout",
    "category": "nature",
    "colors": [
      "#E2CCA8",
      "#A3D8C3",
      "#BBD5B8"
    ],
    "paletteDesc": "씨앗 크라프트 (#E2CCA8) + 새싹 민트 (#A3D8C3) + 세이지 줄기",
    "recommendedFor": "새싹, 스타트업, 성장, 유아, 에코",
    "cssClass": "pc-bg-sprout-seedling",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-sprout-seedling\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Seed Pod Base Cradle -->\n      <ellipse cx=\"48\" cy=\"80\" rx=\"28\" ry=\"10\" fill=\"#E2CCA8\" filter=\"url(#bg-sh-sprout-seedling)\"/>\n      <!-- Layer 2: Twin Emergent Sprout Cotyledon Leaves -->\n      <path d=\"M48 76 C48 50 20 44 18 24 C34 22 46 38 48 52 C50 38 62 22 78 24 C76 44 48 50 48 76 Z\" \n            fill=\"#A3D8C3\" filter=\"url(#bg-sh-sprout-seedling)\"/>\n      <!-- Layer 3: Center Sunbeam Cream Disc -->\n      <circle cx=\"48\" cy=\"48\" r=\"23\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Tiny Third Emergent Leaflet -->\n      <path d=\"M48 40 C44 32 46 24 48 20 C50 24 52 32 48 40 Z\" fill=\"#BBD5B8\"/>\n      <circle cx=\"48\" cy=\"48\" r=\"19\" fill=\"none\" stroke=\"#A3D8C3\" stroke-width=\"1.2\" stroke-dasharray=\"2 3\"/>\n</svg>"
  },
  {
    "id": "sunflower-disc",
    "nameKo": "해바라기 씨앗 디스크",
    "nameEn": "Sunflower Radiant Disc",
    "category": "nature",
    "colors": [
      "#FEE396",
      "#F7BA9E",
      "#FFFDF9"
    ],
    "paletteDesc": "선샤인 버터컵 (#FEE396) + 피치 씨앗 테두리 + 크림",
    "recommendedFor": "햇살, 에너지, 긍정, 여름, 농업",
    "cssClass": "pc-bg-sunflower-disc",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-sunflower-disc\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: 16 Radiating Sunflower Petals -->\n      <path d=\"M48 6 L53 16 L62 10 L64 21 L74 19 L72 30 L82 32 L76 42 L84 48 L76 54 L82 64 L72 66 L74 77 L64 75 L62 86 L53 80 L48 90 L43 80 L34 86 L32 75 L22 77 L24 66 L14 64 L20 54 L12 48 L20 42 L14 32 L24 30 L22 19 L32 21 L34 10 L43 16 Z\" \n            fill=\"#FEE396\" filter=\"url(#bg-sh-sunflower-disc)\"/>\n      <!-- Layer 2: Warm Peach Corona Ring -->\n      <circle cx=\"48\" cy=\"48\" r=\"32\" fill=\"#F7BA9E\" filter=\"url(#bg-sh-sunflower-disc)\"/>\n      <!-- Layer 3: Center Clean Cream Stage -->\n      <circle cx=\"48\" cy=\"48\" r=\"24\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Spiral Seed Pattern Perimeter Dots -->\n      <circle cx=\"48\" cy=\"48\" r=\"20\" fill=\"none\" stroke=\"#E2CCA8\" stroke-width=\"1.5\" stroke-dasharray=\"2 3\"/>\n      <circle cx=\"48\" cy=\"48\" r=\"14\" fill=\"none\" stroke=\"#E2CCA8\" stroke-width=\"1\" stroke-dasharray=\"2 2\"/>\n</svg>"
  },
  {
    "id": "isometric-cube",
    "nameKo": "등각 투영 종이 큐브",
    "nameEn": "Tilted Isometric Paper Cube",
    "category": "geo",
    "colors": [
      "#FAF6ED",
      "#BDE0EA",
      "#D7CBEB"
    ],
    "paletteDesc": "라이트 크림 (#FAF6ED) + 스카이 블루 + 라벤더 섀도우",
    "recommendedFor": "박스, 3D, 입체, 블록, 패키지",
    "cssClass": "pc-bg-isometric-cube",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-isometric-cube\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Isometric Hexagonal Cube Outline -->\n      <polygon points=\"48,8 84,28 84,68 48,88 12,68 12,28\" fill=\"#BBD5B8\" stroke=\"#BBD5B8\" stroke-width=\"4\" stroke-linejoin=\"round\" filter=\"url(#bg-sh-isometric-cube)\"/>\n      <!-- Layer 2: Three Light-Medium-Dark Facet Folds -->\n      <polygon points=\"48,12 80,30 48,48 16,30\" fill=\"#FAF6ED\"/>\n      <polygon points=\"16,30 48,48 48,84 16,66\" fill=\"#BDE0EA\"/>\n      <polygon points=\"48,48 80,30 80,66 48,84\" fill=\"#D7CBEB\"/>\n      <!-- Layer 3: Center Elevated Mounting Hexagon -->\n      <polygon points=\"48,26 68,37 68,59 48,70 28,59 28,37\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-isometric-cube)\"/>\n      <!-- Layer 4: Inner Bevel Stitches -->\n      <polygon points=\"48,30 64,39 64,57 48,66 32,57 32,39\" fill=\"none\" stroke=\"#E2CCA8\" stroke-width=\"1.2\"/>\n</svg>"
  },
  {
    "id": "trapezoid-pedestal",
    "nameKo": "아르데코 사다리꼴 받침대",
    "nameEn": "Art Deco Trapezoid Pedestal",
    "category": "geo",
    "colors": [
      "#E2CCA8",
      "#D7CBEB",
      "#FFFDF9"
    ],
    "paletteDesc": "크라프트 페데스탈 (#E2CCA8) + 라벤더 기둥 + 크림 단상",
    "recommendedFor": "시상대, 랭킹, 전시, 갤러리, 건축",
    "cssClass": "pc-bg-trapezoid-pedestal",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-trapezoid-pedestal\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Stepped Monument Trapezoid Base -->\n      <polygon points=\"26,12 70,12 84,84 12,84\" fill=\"#E2CCA8\" filter=\"url(#bg-sh-trapezoid-pedestal)\"/>\n      <!-- Layer 2: Fluted Lavender Shaft Columns -->\n      <polygon points=\"28,16 68,16 80,80 16,80\" fill=\"#D7CBEB\" filter=\"url(#bg-sh-trapezoid-pedestal)\"/>\n      <!-- Layer 3: Upper Cream Platform Card -->\n      <rect x=\"22\" y=\"20\" width=\"52\" height=\"56\" rx=\"6\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Art Deco Horizontal Gold Inset Bars -->\n      <line x1=\"26\" y1=\"26\" x2=\"70\" y2=\"26\" stroke=\"#FEE396\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n      <line x1=\"20\" y1=\"74\" x2=\"76\" y2=\"74\" stroke=\"#FEE396\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n      <line x1=\"48\" y1=\"28\" x2=\"48\" y2=\"72\" stroke=\"#E2CCA8\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/>\n</svg>"
  },
  {
    "id": "pointed-arch-gothic",
    "nameKo": "고딕 뾰족 아치 란셋",
    "nameEn": "Lancet Gothic Pointed Arch",
    "category": "geo",
    "colors": [
      "#BBD5B8",
      "#A3D8C3",
      "#FFFDF9"
    ],
    "paletteDesc": "세이지 석조 (#BBD5B8) + 민트 아치 창틀 + 스테인드 크림",
    "recommendedFor": "건축, 역사, 창문, 성당, 도서관",
    "cssClass": "pc-bg-pointed-arch-gothic",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-pointed-arch-gothic\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Pointed Lancet Arch Silhouette -->\n      <path d=\"M48 6 C32 18 16 38 16 56 V84 C16 86.2 17.8 88 20 88 H76 C78.2 88 80 86.2 80 84 V56 C80 38 64 18 48 6 Z\" \n            fill=\"#BBD5B8\" filter=\"url(#bg-sh-pointed-arch-gothic)\"/>\n      <!-- Layer 2: Inset Mint Window Jamb Frame -->\n      <path d=\"M48 14 C36 24 22 42 22 58 V82 H74 V58 C74 42 60 24 48 14 Z\" \n            fill=\"#A3D8C3\" filter=\"url(#bg-sh-pointed-arch-gothic)\"/>\n      <!-- Layer 3: Cream Window Pane Well -->\n      <path d=\"M48 22 C38 30 28 46 28 60 V78 H68 V60 C68 46 58 30 48 22 Z\" \n            fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Trefoil Pointed Cusp Mullion -->\n      <path d=\"M48 22 V54 M28 54 H68\" stroke=\"#BBD5B8\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      <circle cx=\"48\" cy=\"38\" r=\"4\" fill=\"none\" stroke=\"#FEE396\" stroke-width=\"1.2\"/>\n</svg>"
  },
  {
    "id": "lozenge-diamond",
    "nameKo": "마름모 로젠지 다이아몬드",
    "nameEn": "Elongated Rhombus Lozenge",
    "category": "geo",
    "colors": [
      "#F7BA9E",
      "#D7CBEB",
      "#FFFDF9"
    ],
    "paletteDesc": "살구 피치 (#F7BA9E) + 라벤더 윙 + 크림 다이아몬드",
    "recommendedFor": "보석, 라벨, 뱃지, 경고, 하이라이트",
    "cssClass": "pc-bg-lozenge-diamond",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-lozenge-diamond\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Softened Corner Diamond Lozenge -->\n      <polygon points=\"48,6 88,48 48,90 8,48\" stroke=\"#F7BA9E\" stroke-width=\"6\" stroke-linejoin=\"round\" fill=\"#F7BA9E\" filter=\"url(#bg-sh-lozenge-diamond)\"/>\n      <!-- Layer 2: Stepped Inner Lavender Lozenge -->\n      <polygon points=\"48,14 80,48 48,82 16,48\" fill=\"#D7CBEB\" filter=\"url(#bg-sh-lozenge-diamond)\"/>\n      <!-- Layer 3: Central Cream Facet Well -->\n      <polygon points=\"48,22 72,48 48,74 24,48\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Horizontal Chevron Wing Accent Bars -->\n      <polygon points=\"48,32 58,48 48,64 38,48\" fill=\"none\" stroke=\"#E2CCA8\" stroke-width=\"1.2\"/>\n      <circle cx=\"48\" cy=\"48\" r=\"2.5\" fill=\"#FEE396\"/>\n</svg>"
  },
  {
    "id": "pill-capsule",
    "nameKo": "둥근 알약 스타디움 플레이트",
    "nameEn": "Stadium Pill Capsule",
    "category": "geo",
    "colors": [
      "#BDE0EA",
      "#F7BA9E",
      "#FFFDF9"
    ],
    "paletteDesc": "스카이 블루 (#BDE0EA) + 코랄 피치 (#F7BA9E) + 클린 크림",
    "recommendedFor": "헬스케어, 의료, 캡슐, 약국, 피트니스",
    "cssClass": "pc-bg-pill-capsule",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-pill-capsule\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Stadium Capsule Base (Sky Top, Peach Bottom) -->\n      <rect x=\"14\" y=\"10\" width=\"68\" height=\"76\" rx=\"34\" fill=\"#BDE0EA\" filter=\"url(#bg-sh-pill-capsule)\"/>\n      <!-- Layer 2: Bottom Peach Dipped Half -->\n      <path d=\"M14 48 C14 66.8 29.2 82 48 82 C66.8 82 82 66.8 82 48 H14 Z\" fill=\"#F7BA9E\"/>\n      <!-- Layer 3: Center Clean Oval Cream Mount -->\n      <rect x=\"20\" y=\"16\" width=\"56\" height=\"64\" rx=\"28\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-pill-capsule)\"/>\n      <!-- Layer 4: Center Horizontal Divider Line & Shine -->\n      <line x1=\"22\" y1=\"48\" x2=\"74\" y2=\"48\" stroke=\"#E2CCA8\" stroke-width=\"1.5\" stroke-dasharray=\"3 2\"/>\n      <path d=\"M30 24 C36 18 46 18 52 20\" stroke=\"#FFFDF9\" stroke-width=\"2.5\" stroke-linecap=\"round\" fill=\"none\" opacity=\"0.8\"/>\n</svg>"
  },
  {
    "id": "pagoda-roof",
    "nameKo": "동양 처마 기와 플레이트",
    "nameEn": "Oriental Pagoda Roof Eaves",
    "category": "geo",
    "colors": [
      "#A3D8C3",
      "#E2CCA8",
      "#FFFDF9"
    ],
    "paletteDesc": "청자기와 민트 (#A3D8C3) + 황토 크라프트 + 백자 크림",
    "recommendedFor": "동양, 한옥, 사찰, 여행, 전통",
    "cssClass": "pc-bg-pagoda-roof",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-pagoda-roof\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Swept Curving Pagoda Eaves Silhouette -->\n      <path d=\"M48 8 C52 14 68 22 90 28 C80 32 68 34 68 40 V82 C68 84.2 66.2 86 64 86 H32 C29.8 86 28 84.2 28 82 V40 C28 34 16 32 6 28 C28 22 44 14 48 8 Z\" \n            fill=\"#A3D8C3\" filter=\"url(#bg-sh-pagoda-roof)\"/>\n      <!-- Layer 2: Inner Temple Wall Body -->\n      <rect x=\"26\" y=\"36\" width=\"44\" height=\"46\" rx=\"4\" fill=\"#E2CCA8\" filter=\"url(#bg-sh-pagoda-roof)\"/>\n      <!-- Layer 3: Ceremonial Cream Plaque -->\n      <rect x=\"30\" y=\"40\" width=\"36\" height=\"38\" rx=\"3\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Ornamental Roof Finial & Tile Ridges -->\n      <polygon points=\"48,6 51,12 45,12\" fill=\"#FEE396\"/>\n      <line x1=\"16\" y1=\"28\" x2=\"80\" y2=\"28\" stroke=\"#FFFDF9\" stroke-width=\"1.5\" stroke-linecap=\"round\"/>\n      <circle cx=\"48\" cy=\"59\" r=\"12\" fill=\"none\" stroke=\"#E2CCA8\" stroke-width=\"1\" stroke-dasharray=\"2 2\"/>\n</svg>"
  },
  {
    "id": "stepped-ziggurat",
    "nameKo": "계단식 지구라트 피라미드",
    "nameEn": "Mesopotamian Stepped Ziggurat",
    "category": "geo",
    "colors": [
      "#E2CCA8",
      "#FEE396",
      "#FFFDF9"
    ],
    "paletteDesc": "사막 크라프트 (#E2CCA8) + 황금 버터컵 + 성소 크림",
    "recommendedFor": "피라미드, 역사, 고고학, 레벨, 랭킹",
    "cssClass": "pc-bg-stepped-ziggurat",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-stepped-ziggurat\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Broad Bottom Terrace Platform -->\n      <rect x=\"10\" y=\"62\" width=\"76\" height=\"24\" rx=\"4\" fill=\"#E2CCA8\" filter=\"url(#bg-sh-stepped-ziggurat)\"/>\n      <!-- Layer 2: Middle Terrace Platform -->\n      <rect x=\"18\" y=\"38\" width=\"60\" height=\"26\" rx=\"4\" fill=\"#FEE396\" filter=\"url(#bg-sh-stepped-ziggurat)\"/>\n      <!-- Layer 3: Top Altar Sanctuary Platform -->\n      <rect x=\"26\" y=\"14\" width=\"44\" height=\"26\" rx=\"4\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-stepped-ziggurat)\"/>\n      <!-- Layer 4: Central Stepped Staircase Ramp -->\n      <polygon points=\"42,86 54,86 51,14 45,14\" fill=\"#FAF6ED\" opacity=\"0.9\"/>\n      <line x1=\"43\" y1=\"38\" x2=\"53\" y2=\"38\" stroke=\"#3D352E\" stroke-width=\"1\" opacity=\"0.4\"/>\n      <line x1=\"41\" y1=\"62\" x2=\"55\" y2=\"62\" stroke=\"#3D352E\" stroke-width=\"1\" opacity=\"0.4\"/>\n</svg>"
  },
  {
    "id": "triquetra-knot",
    "nameKo": "켈트 삼지창 아크 트라이케트라",
    "nameEn": "Celtic Triquetra Arc",
    "category": "geo",
    "colors": [
      "#D7CBEB",
      "#BBD5B8",
      "#FFFDF9"
    ],
    "paletteDesc": "미스틱 라벤더 (#D7CBEB) + 켈트 세이지 + 신성 크림",
    "recommendedFor": "심볼, 마법, 룬, 연결, 3중주",
    "cssClass": "pc-bg-triquetra-knot",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-triquetra-knot\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: 3 Interlocking Lenticular Arcs -->\n      <path d=\"M48 8 C68 24 88 56 68 84 C48 76 28 76 28 84 C8 56 28 24 48 8 Z\" \n            fill=\"#D7CBEB\" filter=\"url(#bg-sh-triquetra-knot)\"/>\n      <!-- Layer 2: Interlaced Circle Ribbon Ring -->\n      <circle cx=\"48\" cy=\"52\" r=\"30\" fill=\"none\" stroke=\"#BBD5B8\" stroke-width=\"8\" filter=\"url(#bg-sh-triquetra-knot)\"/>\n      <!-- Layer 3: Central Cream Triangular Core Plate -->\n      <circle cx=\"48\" cy=\"52\" r=\"23\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Knot Interlace Drop Shadow Cuts -->\n      <circle cx=\"48\" cy=\"52\" r=\"19\" fill=\"none\" stroke=\"#E2CCA8\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\"/>\n      <polygon points=\"48,34 50,38 46,38\" fill=\"#FEE396\"/>\n</svg>"
  },
  {
    "id": "shield-chevron",
    "nameKo": "쉐브론 화살깃 패널",
    "nameEn": "Architectural Chevron Shield",
    "category": "geo",
    "colors": [
      "#BDE0EA",
      "#F7BA9E",
      "#FFFDF9"
    ],
    "paletteDesc": "스카이 쉐브론 (#BDE0EA) + 피치 화살깃 + 크림 베이스",
    "recommendedFor": "화살표, 속도, 전진, 프로세스, 방향",
    "cssClass": "pc-bg-shield-chevron",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-shield-chevron\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Dual V-Shaped Chevron Body -->\n      <path d=\"M12 18 L48 40 L84 18 V46 L48 68 L12 46 Z\" fill=\"#BDE0EA\" filter=\"url(#bg-sh-shield-chevron)\"/>\n      <path d=\"M12 46 L48 68 L84 46 V66 L48 88 L12 66 Z\" fill=\"#BDE0EA\" filter=\"url(#bg-sh-shield-chevron)\"/>\n      <!-- Layer 2: Angled Accent Chevron Stripe -->\n      <path d=\"M16 24 L48 44 L80 24 V36 L48 56 L16 36 Z\" fill=\"#F7BA9E\"/>\n      <!-- Layer 3: Central Elevated Hexagonal Stage -->\n      <polygon points=\"48,22 72,36 72,64 48,78 24,64 24,36\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-shield-chevron)\"/>\n      <!-- Layer 4: Stitch Guide Perimeter Line -->\n      <polygon points=\"48,27 67,38 67,61 48,72 29,61 29,38\" fill=\"none\" stroke=\"#E2CCA8\" stroke-width=\"1.2\"/>\n</svg>"
  },
  {
    "id": "dodecagon-clock",
    "nameKo": "12각 다면체 다이얼",
    "nameEn": "12-Sided Dodecagon Dial",
    "category": "geo",
    "colors": [
      "#FEE396",
      "#BBD5B8",
      "#FFFDF9"
    ],
    "paletteDesc": "골든 12각 (#FEE396) + 세이지 베젤 + 시계판 크림",
    "recommendedFor": "시계, 시간, 알람, 다이얼, 스케줄",
    "cssClass": "pc-bg-dodecagon-clock",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-dodecagon-clock\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Regular 12-Sided Dodecagon Polygon -->\n      <polygon points=\"48,8 68,13 83,28 88,48 83,68 68,83 48,88 28,83 13,68 8,48 13,28 28,13\" \n            fill=\"#FEE396\" stroke=\"#FEE396\" stroke-width=\"4\" stroke-linejoin=\"round\" filter=\"url(#bg-sh-dodecagon-clock)\"/>\n      <!-- Layer 2: Inset Sage Circular Bezel Ring -->\n      <circle cx=\"48\" cy=\"48\" r=\"34\" fill=\"#BBD5B8\" filter=\"url(#bg-sh-dodecagon-clock)\"/>\n      <!-- Layer 3: Clean Watch Face Cream Disc -->\n      <circle cx=\"48\" cy=\"48\" r=\"26\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: 12 Radial Hour Notch Lines -->\n      <circle cx=\"48\" cy=\"48\" r=\"22\" fill=\"none\" stroke=\"#E2CCA8\" stroke-width=\"1.5\" stroke-dasharray=\"1.5 9.97\"/>\n      <circle cx=\"48\" cy=\"48\" r=\"3\" fill=\"#3D352E\"/>\n</svg>"
  },
  {
    "id": "dome-observatory",
    "nameKo": "천문대 돔 로툰다",
    "nameEn": "Astronomical Dome Rotunda",
    "category": "geo",
    "colors": [
      "#D7CBEB",
      "#BDE0EA",
      "#FFFDF9"
    ],
    "paletteDesc": "스타라이트 라벤더 (#D7CBEB) + 돔 스카이 + 관측소 크림",
    "recommendedFor": "천문, 별, 우주, 과학, 렌즈",
    "cssClass": "pc-bg-dome-observatory",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-dome-observatory\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Semicircular Dome Cupola & Plinth Base -->\n      <path d=\"M14 84 H82 V88 H14 Z\" fill=\"#E2CCA8\"/>\n      <path d=\"M16 54 C16 26 30 10 48 10 C66 10 80 26 80 54 H16 Z\" fill=\"#D7CBEB\" filter=\"url(#bg-sh-dome-observatory)\"/>\n      <!-- Layer 2: Columned Rotunda Arcade Base -->\n      <rect x=\"18\" y=\"52\" width=\"60\" height=\"32\" rx=\"3\" fill=\"#BDE0EA\" filter=\"url(#bg-sh-dome-observatory)\"/>\n      <!-- Layer 3: Central Circular Observation Stage -->\n      <circle cx=\"48\" cy=\"48\" r=\"24\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Dome Slit & Observatory Window Arches -->\n      <line x1=\"48\" y1=\"10\" x2=\"48\" y2=\"40\" stroke=\"#FFFDF9\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n      <circle cx=\"48\" cy=\"48\" r=\"20\" fill=\"none\" stroke=\"#D7CBEB\" stroke-width=\"1.2\" stroke-dasharray=\"2 3\"/>\n</svg>"
  },
  {
    "id": "bridge-keystone",
    "nameKo": "석조 아치 키스톤 플레이트",
    "nameEn": "Masonry Bridge Keystone",
    "category": "geo",
    "colors": [
      "#E2CCA8",
      "#BBD5B8",
      "#FFFDF9"
    ],
    "paletteDesc": "키스톤 크라프트 (#E2CCA8) + 세이지 석재 + 코어 크림",
    "recommendedFor": "건축, 교량, 네트워크, 보안, 연결",
    "cssClass": "pc-bg-bridge-keystone",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-bridge-keystone\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Wedge-Shaped Keystone Voussoir Silhouette -->\n      <polygon points=\"24,10 72,10 84,84 12,84\" fill=\"#E2CCA8\" filter=\"url(#bg-sh-bridge-keystone)\"/>\n      <!-- Layer 2: Inset Masonry Block Lining -->\n      <polygon points=\"28,15 68,15 78,80 18,80\" fill=\"#BBD5B8\" filter=\"url(#bg-sh-bridge-keystone)\"/>\n      <!-- Layer 3: Center Keystone Presentation Tablet -->\n      <rect x=\"24\" y=\"20\" width=\"48\" height=\"54\" rx=\"6\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Stone Joint Grooves & Central Rosette -->\n      <circle cx=\"48\" cy=\"47\" r=\"18\" fill=\"none\" stroke=\"#E2CCA8\" stroke-width=\"1.2\" stroke-dasharray=\"3 2\"/>\n      <circle cx=\"48\" cy=\"22\" r=\"3\" fill=\"#FEE396\"/>\n</svg>"
  },
  {
    "id": "torus-ring-disc",
    "nameKo": "3중 도넛 토러스 링",
    "nameEn": "Concentric Donut Torus",
    "category": "geo",
    "colors": [
      "#A3D8C3",
      "#BDE0EA",
      "#FFFDF9"
    ],
    "paletteDesc": "민트 외륜 (#A3D8C3) + 스카이 해자 + 크림 코어",
    "recommendedFor": "타겟, 목표, 원형, 휠, 나침반",
    "cssClass": "pc-bg-torus-ring-disc",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-torus-ring-disc\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Outer Thick Paper Disc -->\n      <circle cx=\"48\" cy=\"48\" r=\"41\" fill=\"#A3D8C3\" filter=\"url(#bg-sh-torus-ring-disc)\"/>\n      <!-- Layer 2: Raised Circular Moat Ring -->\n      <circle cx=\"48\" cy=\"48\" r=\"33\" fill=\"#BDE0EA\" filter=\"url(#bg-sh-torus-ring-disc)\"/>\n      <!-- Layer 3: Recessed Center Cream Disc -->\n      <circle cx=\"48\" cy=\"48\" r=\"24\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Quad Compass Tick Marks (12, 3, 6, 9) -->\n      <line x1=\"48\" y1=\"12\" x2=\"48\" y2=\"18\" stroke=\"#FFFDF9\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n      <line x1=\"84\" y1=\"48\" x2=\"78\" y2=\"48\" stroke=\"#FFFDF9\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n      <line x1=\"48\" y1=\"84\" x2=\"48\" y2=\"78\" stroke=\"#FFFDF9\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n      <line x1=\"12\" y1=\"48\" x2=\"18\" y2=\"48\" stroke=\"#FFFDF9\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n</svg>"
  },
  {
    "id": "colonnade-pillar",
    "nameKo": "클래식 이오니아 기둥 머리",
    "nameEn": "Classical Ionic Colonnade",
    "category": "geo",
    "colors": [
      "#FAF6ED",
      "#E2CCA8",
      "#FFFDF9"
    ],
    "paletteDesc": "대리석 크림 (#FAF6ED) + 앤틱 크라프트 + 순백 패널",
    "recommendedFor": "기둥, 신전, 클래식, 뱅킹, 법률",
    "cssClass": "pc-bg-colonnade-pillar",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-colonnade-pillar\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Double Volute Scroll Capital & Pedestal -->\n      <path d=\"M12 24 C8 24 6 18 10 14 C14 10 24 10 28 16 H68 C72 10 82 10 86 14 C90 18 88 24 84 24 H12 Z\" \n            fill=\"#FAF6ED\" filter=\"url(#bg-sh-colonnade-pillar)\"/>\n      <rect x=\"14\" y=\"82\" width=\"68\" height=\"6\" rx=\"2\" fill=\"#E2CCA8\"/>\n      <!-- Layer 2: Fluted Column Shaft Body -->\n      <rect x=\"20\" y=\"22\" width=\"56\" height=\"62\" rx=\"4\" fill=\"#E2CCA8\" filter=\"url(#bg-sh-colonnade-pillar)\"/>\n      <!-- Layer 3: Central Inscription Cream Panel -->\n      <rect x=\"25\" y=\"26\" width=\"46\" height=\"54\" rx=\"3\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Vertical Fluting Shaft Lines -->\n      <line x1=\"33\" y1=\"30\" x2=\"33\" y2=\"76\" stroke=\"#FAF6ED\" stroke-width=\"1.2\"/>\n      <line x1=\"48\" y1=\"30\" x2=\"48\" y2=\"76\" stroke=\"#FAF6ED\" stroke-width=\"1.2\"/>\n      <line x1=\"63\" y1=\"30\" x2=\"63\" y2=\"76\" stroke=\"#FAF6ED\" stroke-width=\"1.2\"/>\n</svg>"
  },
  {
    "id": "paperclip-sheet",
    "nameKo": "클립 고정 메모지",
    "nameEn": "Bent Wire Paperclip Memo",
    "category": "craft",
    "colors": [
      "#FFFDF9",
      "#FEE396",
      "#3D352E"
    ],
    "paletteDesc": "화이트 메모지 (#FFFDF9) + 버터컵 백패드 + 차콜 클립",
    "recommendedFor": "메모, 할일, 클립, 서류, 핀",
    "cssClass": "pc-bg-paperclip-sheet",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-paperclip-sheet\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Pastel Buttercup Backer Card (Tilted) -->\n      <rect x=\"14\" y=\"14\" width=\"66\" height=\"68\" rx=\"8\" transform=\"rotate(4 48 48)\" fill=\"#FEE396\" filter=\"url(#bg-sh-paperclip-sheet)\"/>\n      <!-- Layer 2: Front Crisp White Note Card -->\n      <rect x=\"16\" y=\"16\" width=\"64\" height=\"66\" rx=\"6\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-paperclip-sheet)\"/>\n      <!-- Layer 3: Looped Wire Paperclip -->\n      <path d=\"M26 34 V12 C26 9 32 9 32 12 V38 C32 43 20 43 20 38 V18 C20 16 24 16 24 18 V34\" \n            stroke=\"#3D352E\" stroke-width=\"2.5\" stroke-linecap=\"round\" fill=\"none\" filter=\"url(#bg-sh-paperclip-sheet)\"/>\n      <!-- Layer 4: Ruled Notepad Guides -->\n      <line x1=\"38\" y1=\"28\" x2=\"72\" y2=\"28\" stroke=\"#E2CCA8\" stroke-width=\"1.2\"/>\n      <line x1=\"26\" y1=\"40\" x2=\"72\" y2=\"40\" stroke=\"#E2CCA8\" stroke-width=\"1.2\"/>\n      <line x1=\"26\" y1=\"52\" x2=\"72\" y2=\"52\" stroke=\"#E2CCA8\" stroke-width=\"1.2\"/>\n      <line x1=\"26\" y1=\"64\" x2=\"72\" y2=\"64\" stroke=\"#E2CCA8\" stroke-width=\"1.2\"/>\n</svg>"
  },
  {
    "id": "spiral-notepad",
    "nameKo": "와이어 트윈 스프링 수첩",
    "nameEn": "Spiral-Bound Notebook Page",
    "category": "craft",
    "colors": [
      "#E2CCA8",
      "#FFFDF9",
      "#BDE0EA"
    ],
    "paletteDesc": "크라프트 표지 (#E2CCA8) + 속지 크림 + 스카이 와이어 링",
    "recommendedFor": "수첩, 노트, 글쓰기, 다이어리, 아이디어",
    "cssClass": "pc-bg-spiral-notepad",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-spiral-notepad\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Hardcover Kraft Backing Board -->\n      <rect x=\"12\" y=\"14\" width=\"72\" height=\"74\" rx=\"8\" fill=\"#E2CCA8\" filter=\"url(#bg-sh-spiral-notepad)\"/>\n      <!-- Layer 2: Lined Cream Notepad Sheet -->\n      <rect x=\"16\" y=\"18\" width=\"64\" height=\"66\" rx=\"5\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-spiral-notepad)\"/>\n      <!-- Layer 3: Row of 5 Square Punch Holes Along Top -->\n      <rect x=\"22\" y=\"14\" width=\"5\" height=\"5\" rx=\"1.5\" fill=\"#3D352E\"/>\n      <rect x=\"34\" y=\"14\" width=\"5\" height=\"5\" rx=\"1.5\" fill=\"#3D352E\"/>\n      <rect x=\"46\" y=\"14\" width=\"5\" height=\"5\" rx=\"1.5\" fill=\"#3D352E\"/>\n      <rect x=\"58\" y=\"14\" width=\"5\" height=\"5\" rx=\"1.5\" fill=\"#3D352E\"/>\n      <rect x=\"70\" y=\"14\" width=\"5\" height=\"5\" rx=\"1.5\" fill=\"#3D352E\"/>\n      <!-- Layer 4: Spiral Wire Loops & Micro-Perforations -->\n      <path d=\"M24 10 C24 6 25 6 25 18 M36 10 C36 6 37 6 37 18 M48 10 C48 6 49 6 49 18 M60 10 C60 6 61 6 61 18 M72 10 C72 6 73 6 73 18\" stroke=\"#BDE0EA\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n      <line x1=\"16\" y1=\"24\" x2=\"80\" y2=\"24\" stroke=\"#D7CBEB\" stroke-width=\"1\" stroke-dasharray=\"2 2\"/>\n</svg>"
  },
  {
    "id": "binder-tab-folder",
    "nameKo": "마닐라 인덱스 탭 서류철",
    "nameEn": "Manila File Folder with Tab",
    "category": "craft",
    "colors": [
      "#E2CCA8",
      "#BBD5B8",
      "#FFFDF9"
    ],
    "paletteDesc": "마닐라 크라프트 (#E2CCA8) + 세이지 인덱스 + 크림 서류",
    "recommendedFor": "폴더, 파일, 정리, 아카이브, 디렉토리",
    "cssClass": "pc-bg-binder-tab-folder",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-binder-tab-folder\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Manila Folder with Stepped Tab -->\n      <path d=\"M12 18 C12 15 14 13 17 13 H42 L50 20 H81 C84 20 86 22 86 25 V81 C86 84 84 86 81 86 H17 C14 86 12 84 12 81 Z\" \n            fill=\"#E2CCA8\" filter=\"url(#bg-sh-binder-tab-folder)\"/>\n      <!-- Layer 2: Inner Folder Pastel Green Lining -->\n      <path d=\"M14 26 H84 V82 C84 83.5 82.5 85 81 85 H17 C15.5 85 14 83.5 14 82 Z\" fill=\"#BBD5B8\"/>\n      <!-- Layer 3: Central Cream Index Document Sheet -->\n      <rect x=\"18\" y=\"24\" width=\"60\" height=\"54\" rx=\"4\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-binder-tab-folder)\"/>\n      <!-- Layer 4: Embossed Tab Label Line & Score Crease -->\n      <rect x=\"20\" y=\"15\" width=\"20\" height=\"3\" rx=\"1.5\" fill=\"#FAF6ED\"/>\n      <line x1=\"14\" y1=\"26\" x2=\"84\" y2=\"26\" stroke=\"#E2CCA8\" stroke-width=\"1.5\"/>\n</svg>"
  },
  {
    "id": "origami-pinwheel",
    "nameKo": "종이접기 바람개비 날개",
    "nameEn": "Four-Blade Origami Pinwheel",
    "category": "craft",
    "colors": [
      "#A3D8C3",
      "#FEE396",
      "#F7BA9E"
    ],
    "paletteDesc": "민트 바람개비 (#A3D8C3) + 버터컵 접지 + 피치 리벳",
    "recommendedFor": "바람, 회전, 놀이, 창의, 풍력",
    "cssClass": "pc-bg-origami-pinwheel",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-origami-pinwheel\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: 4 Folded Pinwheel Triangular Blades -->\n      <polygon points=\"48,48 48,10 18,10\" fill=\"#A3D8C3\" filter=\"url(#bg-sh-origami-pinwheel)\"/>\n      <polygon points=\"48,48 86,48 86,18\" fill=\"#FEE396\" filter=\"url(#bg-sh-origami-pinwheel)\"/>\n      <polygon points=\"48,48 48,86 78,86\" fill=\"#A3D8C3\" filter=\"url(#bg-sh-origami-pinwheel)\"/>\n      <polygon points=\"48,48 10,48 10,78\" fill=\"#FEE396\" filter=\"url(#bg-sh-origami-pinwheel)\"/>\n      <!-- Layer 2: Diagonal Contrast Shadow Triangles -->\n      <polygon points=\"48,48 48,18 30,30\" fill=\"#BBD5B8\"/>\n      <polygon points=\"48,48 78,48 66,30\" fill=\"#F7BA9E\"/>\n      <!-- Layer 3: Center Clean Cream Stage -->\n      <circle cx=\"48\" cy=\"48\" r=\"23\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-origami-pinwheel)\"/>\n      <!-- Layer 4: Brass Pushpin Rivet in Center -->\n      <circle cx=\"48\" cy=\"48\" r=\"5\" fill=\"#F7BA9E\"/>\n      <circle cx=\"46.5\" cy=\"46.5\" r=\"1.5\" fill=\"#FFFDF9\"/>\n</svg>"
  },
  {
    "id": "pushpin-memo",
    "nameKo": "코르크보드 압정 메모",
    "nameEn": "Corkboard Pushpin Note",
    "category": "craft",
    "colors": [
      "#E2CCA8",
      "#FEE396",
      "#F5B8BE"
    ],
    "paletteDesc": "코르크 크라프트 (#E2CCA8) + 옐로우 메모지 + 로즈 압정",
    "recommendedFor": "메모, 핀, 공지, 게시판, 리마인더",
    "cssClass": "pc-bg-pushpin-memo",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-pushpin-memo\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Corkboard Textured Backing Plate -->\n      <rect x=\"10\" y=\"10\" width=\"76\" height=\"76\" rx=\"10\" fill=\"#E2CCA8\" filter=\"url(#bg-sh-pushpin-memo)\"/>\n      <!-- Layer 2: Slightly Rotated Sticky Note Paper -->\n      <rect x=\"16\" y=\"16\" width=\"64\" height=\"64\" rx=\"4\" transform=\"rotate(-3 48 48)\" fill=\"#FEE396\" filter=\"url(#bg-sh-pushpin-memo)\"/>\n      <!-- Layer 3: Center Cream Writing Pad -->\n      <rect x=\"22\" y=\"24\" width=\"52\" height=\"50\" rx=\"3\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: 3D Sphere Pushpin with Shadow at Top Center -->\n      <ellipse cx=\"48\" cy=\"18\" rx=\"6\" ry=\"3\" fill=\"#4A3A2A\" opacity=\"0.25\"/>\n      <circle cx=\"48\" cy=\"16\" r=\"6\" fill=\"#F5B8BE\" filter=\"url(#bg-sh-pushpin-memo)\"/>\n      <circle cx=\"46\" cy=\"14\" r=\"2\" fill=\"#FFFDF9\"/>\n</svg>"
  },
  {
    "id": "photo-corner-mount",
    "nameKo": "앨범 사진 코너 마운트",
    "nameEn": "Vintage Album Photo Corners",
    "category": "craft",
    "colors": [
      "#E2CCA8",
      "#FFFDF9",
      "#D7CBEB"
    ],
    "paletteDesc": "앨범 크라프트 (#E2CCA8) + 포토 화이트 + 라벤더 코너 포켓",
    "recommendedFor": "사진, 앨범, 갤러리, 추억, 포토",
    "cssClass": "pc-bg-photo-corner-mount",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-photo-corner-mount\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Heavy Kraft Photo Album Page -->\n      <rect x=\"10\" y=\"10\" width=\"76\" height=\"76\" rx=\"8\" fill=\"#E2CCA8\" filter=\"url(#bg-sh-photo-corner-mount)\"/>\n      <!-- Layer 2: Classic White Photo Paper Face -->\n      <rect x=\"16\" y=\"16\" width=\"64\" height=\"64\" rx=\"4\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-photo-corner-mount)\"/>\n      <!-- Layer 3: 4 Triangular Slotted Paper Photo Corners -->\n      <polygon points=\"16,16 32,16 16,32\" fill=\"#D7CBEB\" filter=\"url(#bg-sh-photo-corner-mount)\"/>\n      <polygon points=\"80,16 64,16 80,32\" fill=\"#D7CBEB\" filter=\"url(#bg-sh-photo-corner-mount)\"/>\n      <polygon points=\"80,80 64,80 80,64\" fill=\"#D7CBEB\" filter=\"url(#bg-sh-photo-corner-mount)\"/>\n      <polygon points=\"16,80 32,80 16,64\" fill=\"#D7CBEB\" filter=\"url(#bg-sh-photo-corner-mount)\"/>\n      <!-- Layer 4: Inset Hairline Photo Border -->\n      <rect x=\"22\" y=\"22\" width=\"52\" height=\"52\" rx=\"2\" fill=\"none\" stroke=\"#E2CCA8\" stroke-width=\"1.2\"/>\n</svg>"
  },
  {
    "id": "folded-fortune-teller",
    "nameKo": "종이 동서남북 접기",
    "nameEn": "Paper Fortune Teller Cootie Catcher",
    "category": "craft",
    "colors": [
      "#BDE0EA",
      "#F5B8BE",
      "#FFFDF9"
    ],
    "paletteDesc": "스카이 블루 (#BDE0EA) + 로즈 핑크 + 크림 다이아몬드",
    "recommendedFor": "게임, 선택, 운세, 동서남북, 놀이",
    "cssClass": "pc-bg-folded-fortune-teller",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-folded-fortune-teller\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: 4 Mountain Fold Pyramid Flaps Meeting at Edges -->\n      <polygon points=\"10,10 48,28 86,10 48,48\" fill=\"#BDE0EA\" filter=\"url(#bg-sh-folded-fortune-teller)\"/>\n      <polygon points=\"86,10 68,48 86,86 48,48\" fill=\"#F5B8BE\" filter=\"url(#bg-sh-folded-fortune-teller)\"/>\n      <polygon points=\"86,86 48,68 10,86 48,48\" fill=\"#BDE0EA\" filter=\"url(#bg-sh-folded-fortune-teller)\"/>\n      <polygon points=\"10,86 28,48 10,10 48,48\" fill=\"#F5B8BE\" filter=\"url(#bg-sh-folded-fortune-teller)\"/>\n      <!-- Layer 2: Inner Fold Shadows -->\n      <polygon points=\"48,28 68,48 48,68 28,48\" fill=\"#D7CBEB\"/>\n      <!-- Layer 3: Center Elevated Cream Stage Diamond -->\n      <polygon points=\"48,22 74,48 48,74 22,48\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-folded-fortune-teller)\"/>\n      <!-- Layer 4: Crease Score Lines -->\n      <line x1=\"22\" y1=\"48\" x2=\"74\" y2=\"48\" stroke=\"#E2CCA8\" stroke-width=\"1.2\" stroke-dasharray=\"2 2\"/>\n      <line x1=\"48\" y1=\"22\" x2=\"48\" y2=\"74\" stroke=\"#E2CCA8\" stroke-width=\"1.2\" stroke-dasharray=\"2 2\"/>\n</svg>"
  },
  {
    "id": "diagonal-sash-card",
    "nameKo": "대각 띠지 장식 카드",
    "nameEn": "Card with Diagonal Paper Belly-Band",
    "category": "craft",
    "colors": [
      "#FAF6ED",
      "#F7BA9E",
      "#A3D8C3"
    ],
    "paletteDesc": "청첩장 크림 (#FAF6ED) + 살구 띠지 (#F7BA9E) + 민트 리본",
    "recommendedFor": "초대장, 선물, 카드, 리본, 패키징",
    "cssClass": "pc-bg-diagonal-sash-card",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-diagonal-sash-card\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Heavy Premium Invitation Cardstock -->\n      <rect x=\"12\" y=\"12\" width=\"72\" height=\"72\" rx=\"14\" fill=\"#FAF6ED\" filter=\"url(#bg-sh-diagonal-sash-card)\"/>\n      <!-- Layer 2: Clean Inner Stage -->\n      <rect x=\"18\" y=\"18\" width=\"60\" height=\"60\" rx=\"9\" fill=\"#FFFDF9\"/>\n      <!-- Layer 3: Diagonal Peach Paper Sash Bellyband Across Corner -->\n      <polygon points=\"48,84 84,48 84,62 62,84\" fill=\"#F7BA9E\" filter=\"url(#bg-sh-diagonal-sash-card)\"/>\n      <polygon points=\"12,48 48,12 36,12 12,36\" fill=\"#A3D8C3\" filter=\"url(#bg-sh-diagonal-sash-card)\"/>\n      <!-- Layer 4: Fine Sash Stitch Lines -->\n      <line x1=\"52\" y1=\"84\" x2=\"84\" y2=\"52\" stroke=\"#FFFDF9\" stroke-width=\"1.5\" stroke-dasharray=\"2 2\"/>\n      <line x1=\"16\" y1=\"48\" x2=\"48\" y2=\"16\" stroke=\"#FFFDF9\" stroke-width=\"1.5\" stroke-dasharray=\"2 2\"/>\n</svg>"
  },
  {
    "id": "ticket-stub-booklet",
    "nameKo": "스테이플 철 티켓북",
    "nameEn": "Stapled Ticket Stub Book",
    "category": "craft",
    "colors": [
      "#D7CBEB",
      "#FFFDF9",
      "#3D352E"
    ],
    "paletteDesc": "라벤더 티켓북 바인더 + 크림 티켓 + 메탈 스테이플 (#3D352E)",
    "recommendedFor": "티켓, 쿠폰, 북, 영수증, 바우처",
    "cssClass": "pc-bg-ticket-stub-booklet",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-ticket-stub-booklet\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Left Binder Spine Strip & Booklet Backing -->\n      <rect x=\"10\" y=\"16\" width=\"76\" height=\"64\" rx=\"6\" fill=\"#D7CBEB\" filter=\"url(#bg-sh-ticket-stub-booklet)\"/>\n      <!-- Layer 2: Main Detachable Cream Ticket Card -->\n      <rect x=\"24\" y=\"19\" width=\"58\" height=\"58\" rx=\"4\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-ticket-stub-booklet)\"/>\n      <!-- Layer 3: Two Metallic Wire Staple Bars -->\n      <rect x=\"14\" y=\"28\" width=\"4\" height=\"12\" rx=\"1.5\" fill=\"#3D352E\"/>\n      <rect x=\"14\" y=\"56\" width=\"4\" height=\"12\" rx=\"1.5\" fill=\"#3D352E\"/>\n      <!-- Layer 4: Vertical Perforation Tear Dots & Star -->\n      <line x1=\"34\" y1=\"19\" x2=\"34\" y2=\"77\" stroke=\"#D7CBEB\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\"/>\n      <polygon points=\"42,48 43,50 45,50 43.5,51 44,53 42,52 40,53 40.5,51 39,50 41,50\" fill=\"#FEE396\"/>\n</svg>"
  },
  {
    "id": "quilted-origami-tess",
    "nameKo": "미우라 접기 격자 카드",
    "nameEn": "Miura-Ori Folded Grid",
    "category": "craft",
    "colors": [
      "#BBD5B8",
      "#A3D8C3",
      "#FFFDF9"
    ],
    "paletteDesc": "세이지 그리드 (#BBD5B8) + 민트 접지 + 크림 헥사곤",
    "recommendedFor": "격자, 건축, 종이접기, 기하학, 텍스처",
    "cssClass": "pc-bg-quilted-origami-tess",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-quilted-origami-tess\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Accordion Folded Parallelogram Facets Base -->\n      <rect x=\"12\" y=\"12\" width=\"72\" height=\"72\" rx=\"10\" fill=\"#BBD5B8\" filter=\"url(#bg-sh-quilted-origami-tess)\"/>\n      <!-- Layer 2: Angled Crease Shading Polygon Tiles -->\n      <polygon points=\"12,12 36,36 12,60\" fill=\"#A3D8C3\"/>\n      <polygon points=\"84,12 60,36 84,60\" fill=\"#A3D8C3\"/>\n      <polygon points=\"12,84 36,60 60,84\" fill=\"#A3D8C3\"/>\n      <!-- Layer 3: Elevated Central Cream Hexagonal Mount -->\n      <polygon points=\"48,22 72,36 72,60 48,74 24,60 24,36\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-quilted-origami-tess)\"/>\n      <!-- Layer 4: Mountain and Valley Crease Lines -->\n      <line x1=\"24\" y1=\"48\" x2=\"72\" y2=\"48\" stroke=\"#E2CCA8\" stroke-width=\"1.2\" stroke-dasharray=\"3 2\"/>\n      <circle cx=\"48\" cy=\"48\" r=\"16\" fill=\"none\" stroke=\"#E2CCA8\" stroke-width=\"1\"/>\n</svg>"
  },
  {
    "id": "pop-up-stage",
    "nameKo": "팝업 카드 계단 스탠드",
    "nameEn": "Pop-Up Card Floating Step",
    "category": "craft",
    "colors": [
      "#FAF6ED",
      "#FEE396",
      "#FFFDF9"
    ],
    "paletteDesc": "팝업 크림 (#FAF6ED) + 버터컵 계단 단상 + 순백 플로팅",
    "recommendedFor": "무대, 팝업, 축하, 카드, 스탠드",
    "cssClass": "pc-bg-pop-up-stage",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-pop-up-stage\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Horizontal Card Fold Base Crease -->\n      <rect x=\"12\" y=\"14\" width=\"72\" height=\"68\" rx=\"8\" fill=\"#FAF6ED\" filter=\"url(#bg-sh-pop-up-stage)\"/>\n      <!-- Layer 2: Pop-Up Riser Vertical Tab Step -->\n      <rect x=\"22\" y=\"44\" width=\"52\" height=\"34\" rx=\"4\" fill=\"#FEE396\" filter=\"url(#bg-sh-pop-up-stage)\"/>\n      <!-- Layer 3: Forward Floating Rectangular Presentation Stage -->\n      <rect x=\"18\" y=\"20\" width=\"60\" height=\"52\" rx=\"6\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-pop-up-stage)\"/>\n      <!-- Layer 4: Dual Slit Cutouts & Stage Shadow -->\n      <line x1=\"18\" y1=\"46\" x2=\"78\" y2=\"46\" stroke=\"#4A3A2A\" stroke-opacity=\"0.12\" stroke-width=\"2\"/>\n      <rect x=\"24\" y=\"26\" width=\"48\" height=\"4\" rx=\"2\" fill=\"#FAF6ED\"/>\n</svg>"
  },
  {
    "id": "creased-flyer-tri",
    "nameKo": "3단 리플렛 접지 패널",
    "nameEn": "Tri-Fold Brochure Panel",
    "category": "craft",
    "colors": [
      "#BDE0EA",
      "#F5B8BE",
      "#FFFDF9"
    ],
    "paletteDesc": "스카이 플랩 (#BDE0EA) + 로즈 플랩 (#F5B8BE) + 와이드 크림",
    "recommendedFor": "안내장, 브로셔, 리플렛, 홍보, 팜플렛",
    "cssClass": "pc-bg-creased-flyer-tri",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-creased-flyer-tri\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Left & Right Folded Flap Wings Behind -->\n      <rect x=\"8\" y=\"14\" width=\"28\" height=\"68\" rx=\"4\" fill=\"#BDE0EA\" filter=\"url(#bg-sh-creased-flyer-tri)\"/>\n      <rect x=\"60\" y=\"14\" width=\"28\" height=\"68\" rx=\"4\" fill=\"#F5B8BE\" filter=\"url(#bg-sh-creased-flyer-tri)\"/>\n      <!-- Layer 2: Center Wide Cream Brochure Panel -->\n      <rect x=\"20\" y=\"12\" width=\"56\" height=\"72\" rx=\"6\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-creased-flyer-tri)\"/>\n      <!-- Layer 3: Dual Vertical Scored Fold Shadows -->\n      <line x1=\"28\" y1=\"12\" x2=\"28\" y2=\"84\" stroke=\"#4A3A2A\" stroke-opacity=\"0.15\" stroke-width=\"1.8\"/>\n      <line x1=\"68\" y1=\"12\" x2=\"68\" y2=\"84\" stroke=\"#4A3A2A\" stroke-opacity=\"0.15\" stroke-width=\"1.8\"/>\n      <!-- Layer 4: Heading Bar & Dot Guide -->\n      <rect x=\"34\" y=\"20\" width=\"28\" height=\"4\" rx=\"2\" fill=\"#FAF6ED\"/>\n      <circle cx=\"48\" cy=\"48\" r=\"16\" fill=\"none\" stroke=\"#E2CCA8\" stroke-width=\"1\" stroke-dasharray=\"2 2\"/>\n</svg>"
  },
  {
    "id": "hanging-clip-clipboard",
    "nameKo": "불독 클립 바인더 판",
    "nameEn": "Bulldog Clip Clipboard",
    "category": "craft",
    "colors": [
      "#E2CCA8",
      "#FFFDF9",
      "#BBD5B8"
    ],
    "paletteDesc": "나무 클립보드 크라프트 (#E2CCA8) + 메모지 + 세이지 클립",
    "recommendedFor": "클립보드, 검사, 체크리스트, 점검, 서류",
    "cssClass": "pc-bg-hanging-clip-clipboard",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-hanging-clip-clipboard\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Heavy Kraft Clipboard Base with Hanging Hole -->\n      <rect x=\"12\" y=\"14\" width=\"72\" height=\"74\" rx=\"8\" fill=\"#E2CCA8\" filter=\"url(#bg-sh-hanging-clip-clipboard)\"/>\n      <circle cx=\"48\" cy=\"10\" r=\"3.5\" fill=\"#3D352E\"/>\n      <!-- Layer 2: Clipped Cream Stationery Sheet -->\n      <rect x=\"18\" y=\"20\" width=\"60\" height=\"62\" rx=\"4\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-hanging-clip-clipboard)\"/>\n      <!-- Layer 3: Sage Metallic Bulldog Clip at Top -->\n      <rect x=\"34\" y=\"14\" width=\"28\" height=\"12\" rx=\"3\" fill=\"#BBD5B8\" filter=\"url(#bg-sh-hanging-clip-clipboard)\"/>\n      <!-- Layer 4: Spring Wire Loop of Clip -->\n      <path d=\"M40 14 C40 8 56 8 56 14\" stroke=\"#3D352E\" stroke-width=\"2\" fill=\"none\"/>\n      <line x1=\"24\" y1=\"36\" x2=\"72\" y2=\"36\" stroke=\"#FAF6ED\" stroke-width=\"1.5\"/>\n</svg>"
  },
  {
    "id": "folded-envelope-origami",
    "nameKo": "6각 보자기 접기 봉투",
    "nameEn": "Origami Hexagon Fold Envelope",
    "category": "craft",
    "colors": [
      "#D7CBEB",
      "#F7BA9E",
      "#FFFDF9"
    ],
    "paletteDesc": "라벤더 보자기 (#D7CBEB) + 피치 접지 날개 + 순백 실",
    "recommendedFor": "선물, 보자기, 포장, 전통, 축의금",
    "cssClass": "pc-bg-folded-envelope-origami",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-folded-envelope-origami\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Regular Hexagonal Envelope Pouch -->\n      <polygon points=\"48,8 84,28 84,68 48,88 12,68 12,28\" fill=\"#D7CBEB\" stroke=\"#D7CBEB\" stroke-width=\"4\" stroke-linejoin=\"round\" filter=\"url(#bg-sh-folded-envelope-origami)\"/>\n      <!-- Layer 2: 3 Interlocking Spiral Fold Flaps -->\n      <polygon points=\"48,48 48,8 84,28\" fill=\"#F7BA9E\"/>\n      <polygon points=\"48,48 84,68 48,88\" fill=\"#FEE396\"/>\n      <polygon points=\"48,48 12,68 12,28\" fill=\"#BBD5B8\"/>\n      <!-- Layer 3: Central Cream Hexagonal Disc -->\n      <circle cx=\"48\" cy=\"48\" r=\"23\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-folded-envelope-origami)\"/>\n      <!-- Layer 4: Round Wax Seal Clasp in Core -->\n      <circle cx=\"48\" cy=\"48\" r=\"7\" fill=\"#F5B8BE\"/>\n      <circle cx=\"48\" cy=\"48\" r=\"20\" fill=\"none\" stroke=\"#E2CCA8\" stroke-width=\"1.2\" stroke-dasharray=\"2 3\"/>\n</svg>"
  },
  {
    "id": "magic-mirror",
    "nameKo": "마법의 손거울 액자",
    "nameEn": "Enchanted Hand Mirror",
    "category": "whimsical",
    "colors": [
      "#D7CBEB",
      "#F5B8BE",
      "#FFFDF9"
    ],
    "paletteDesc": "환상 라벤더 (#D7CBEB) + 블러셔 로즈 (#F5B8BE) + 은거울 크림",
    "recommendedFor": "뷰티, 거울, 마법, 판타지, 화장품",
    "cssClass": "pc-bg-magic-mirror",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-magic-mirror\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Carved Baroque Mirror Handle & Frame -->\n      <path d=\"M48 6 C66 6 80 20 80 44 C80 62 68 76 54 80 L52 92 C52 94 44 94 44 92 L42 80 C28 76 16 62 16 44 C16 20 30 6 48 6 Z\" \n            fill=\"#D7CBEB\" filter=\"url(#bg-sh-magic-mirror)\"/>\n      <!-- Layer 2: Stepped Rose Gold Bezel Ring -->\n      <ellipse cx=\"48\" cy=\"44\" rx=\"28\" ry=\"32\" fill=\"#F5B8BE\" filter=\"url(#bg-sh-magic-mirror)\"/>\n      <!-- Layer 3: Oval Reflective Cream Well -->\n      <ellipse cx=\"48\" cy=\"44\" rx=\"22\" ry=\"26\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Baroque Filigree Crest Peak & Sparkle Star -->\n      <polygon points=\"48,8 51,14 45,14\" fill=\"#FEE396\"/>\n      <polygon points=\"62,26 64,29 67,29 64.5,31 65.5,34 62,32 58.5,34 59.5,31 57,29 60,29\" fill=\"#FEE396\"/>\n</svg>"
  },
  {
    "id": "fairytale-castle",
    "nameKo": "동화 성채 망루 플레이트",
    "nameEn": "Fairy Castle Turret Battlement",
    "category": "whimsical",
    "colors": [
      "#BDE0EA",
      "#F5B8BE",
      "#FFFDF9"
    ],
    "paletteDesc": "스카이 성벽 (#BDE0EA) + 핑크 첨탑 (#F5B8BE) + 성채 안뜰 크림",
    "recommendedFor": "성, 왕국, 게임, 판타지, 동화",
    "cssClass": "pc-bg-fairytale-castle",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-fairytale-castle\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: 3-Crenel Castle Battlement Wall -->\n      <path d=\"M12 40 H20 V32 H28 V40 H44 V32 H52 V40 H68 V32 H76 V40 H84 V86 H12 Z\" \n            fill=\"#BDE0EA\" filter=\"url(#bg-sh-fairytale-castle)\"/>\n      <!-- Layer 2: Flanking Pointed Conical Turret Roofs -->\n      <polygon points=\"16,36 8,40 12,14\" fill=\"#F5B8BE\" filter=\"url(#bg-sh-fairytale-castle)\"/>\n      <polygon points=\"80,36 88,40 84,14\" fill=\"#F5B8BE\" filter=\"url(#bg-sh-fairytale-castle)\"/>\n      <polygon points=\"48,32 38,40 58,40\" fill=\"#F5B8BE\"/>\n      <!-- Layer 3: Center Cream Courtyard Mount -->\n      <rect x=\"22\" y=\"38\" width=\"52\" height=\"44\" rx=\"6\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Arched Portcullis Gate & Flag -->\n      <path d=\"M42 82 V68 C42 64 54 64 54 68 V82 Z\" fill=\"#E2CCA8\"/>\n      <line x1=\"12\" y1=\"14\" x2=\"12\" y2=\"8\" stroke=\"#FEE396\" stroke-width=\"1.5\"/>\n      <polygon points=\"12,8 18,11 12,14\" fill=\"#FEE396\"/>\n</svg>"
  },
  {
    "id": "star-wand-spark",
    "nameKo": "요정의 4각 반짝임 별",
    "nameEn": "Four-Point Twinkle Star",
    "category": "whimsical",
    "colors": [
      "#FEE396",
      "#F7BA9E",
      "#FFFDF9"
    ],
    "paletteDesc": "샤이닝 버터컵 (#FEE396) + 피치 오로라 (#F7BA9E) + 펄 화이트",
    "recommendedFor": "마법, 반짝임, 매직, 판타지, 소원",
    "cssClass": "pc-bg-star-wand-spark",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-star-wand-spark\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Elongated 4-Point Sparkle Starburst -->\n      <path d=\"M48 6 C48 30 26 48 6 48 C26 48 48 66 48 90 C48 66 70 48 90 48 C70 48 48 30 48 6 Z\" \n            fill=\"#FEE396\" filter=\"url(#bg-sh-star-wand-spark)\"/>\n      <!-- Layer 2: Rotated 45-degree Satellite Diamond Star -->\n      <polygon points=\"48,22 60,36 74,48 60,60 48,74 36,60 22,48 36,36\" fill=\"#F7BA9E\" filter=\"url(#bg-sh-star-wand-spark)\"/>\n      <!-- Layer 3: Central Circular Fairy Disc -->\n      <circle cx=\"48\" cy=\"48\" r=\"23\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Tiny Satellite Fairy Sparkle Dots -->\n      <circle cx=\"76\" cy=\"22\" r=\"3.5\" fill=\"#FEE396\"/>\n      <circle cx=\"20\" cy=\"74\" r=\"2.5\" fill=\"#FEE396\"/>\n      <circle cx=\"48\" cy=\"48\" r=\"19\" fill=\"none\" stroke=\"#E2CCA8\" stroke-width=\"1.2\" stroke-dasharray=\"2 3\"/>\n</svg>"
  },
  {
    "id": "moon-crescent-cradle",
    "nameKo": "낮잠 초승달 요람",
    "nameEn": "Sleeping Crescent Moon Cradle",
    "category": "whimsical",
    "colors": [
      "#FEE396",
      "#BDE0EA",
      "#FFFDF9"
    ],
    "paletteDesc": "문라이트 버터컵 (#FEE396) + 밤하늘 스카이 + 순면 구름",
    "recommendedFor": "수면, 밤, 꿈, 힐링, 아기",
    "cssClass": "pc-bg-moon-crescent-cradle",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-moon-crescent-cradle\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Sweeping Golden Crescent Moon Profile -->\n      <path d=\"M56 10 C68 18 76 34 76 52 C76 74 60 90 38 90 C28 90 20 86 14 80 C26 84 42 80 52 68 C64 54 64 30 56 10 Z\" \n            fill=\"#FEE396\" filter=\"url(#bg-sh-moon-crescent-cradle)\"/>\n      <!-- Layer 2: Puffy Cloud Pillow Resting in Curve -->\n      <path d=\"M22 72 C16 72 12 68 12 62 C12 56 16 52 22 51 C22 41 32 32 44 32 C50 32 56 35 60 40 C65 38 72 40 76 46 C80 52 78 60 74 64 C76 66 78 70 76 74 C74 78 68 80 62 80 Z\" \n            fill=\"#BDE0EA\" filter=\"url(#bg-sh-moon-crescent-cradle)\"/>\n      <!-- Layer 3: Central Circular Cloud Disc Stage -->\n      <circle cx=\"48\" cy=\"50\" r=\"23\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Little Dangling Star on Thread -->\n      <line x1=\"56\" y1=\"10\" x2=\"48\" y2=\"28\" stroke=\"#E2CCA8\" stroke-width=\"1.2\" stroke-dasharray=\"2 2\"/>\n      <polygon points=\"48,26 49.5,29.5 53,29.5 50,31.5 51.5,35 48,33 44.5,35 46,31.5 43,29.5 46.5,29.5\" fill=\"#F5B8BE\"/>\n</svg>"
  },
  {
    "id": "heart-medallion",
    "nameKo": "겹겹이 접힌 사랑 하트",
    "nameEn": "Layered Origami Heart",
    "category": "whimsical",
    "colors": [
      "#F5B8BE",
      "#F7BA9E",
      "#FFFDF9"
    ],
    "paletteDesc": "로맨틱 로즈 (#F5B8BE) + 피치 섀도우 (#F7BA9E) + 퓨어 크림",
    "recommendedFor": "하트, 좋아요, 즐겨찾기, 사랑, 헬스",
    "cssClass": "pc-bg-heart-medallion",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-heart-medallion\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Broad Curved Heart Silhouette -->\n      <path d=\"M48 86 C48 86 12 64 12 36 C12 20 24 10 36 10 C44 10 48 18 48 18 C48 18 52 10 60 10 C72 10 84 20 84 36 C84 64 48 86 48 86 Z\" \n            fill=\"#F5B8BE\" filter=\"url(#bg-sh-heart-medallion)\"/>\n      <!-- Layer 2: Stepped Inner Peach Heart Tier -->\n      <path d=\"M48 78 C48 78 18 58 18 36 C18 24 28 16 38 16 C44 16 48 22 48 22 C48 22 52 16 58 16 C68 16 78 24 78 36 C78 58 48 78 48 78 Z\" \n            fill=\"#F7BA9E\" filter=\"url(#bg-sh-heart-medallion)\"/>\n      <!-- Layer 3: Central Cream Presentation Disc -->\n      <circle cx=\"48\" cy=\"44\" r=\"23\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Scalloped Lace Edge Accents & Center Crease -->\n      <line x1=\"48\" y1=\"20\" x2=\"48\" y2=\"76\" stroke=\"#FAF6ED\" stroke-width=\"1.8\" stroke-dasharray=\"3 2\"/>\n      <circle cx=\"48\" cy=\"44\" r=\"19\" fill=\"none\" stroke=\"#F5B8BE\" stroke-width=\"1.2\" stroke-dasharray=\"2 3\"/>\n</svg>"
  },
  {
    "id": "swiss-cross-shield",
    "nameKo": "스위스 크로스 구조대 방패",
    "nameEn": "Rescue Swiss Cross Plate",
    "category": "whimsical",
    "colors": [
      "#F5B8BE",
      "#A3D8C3",
      "#FFFDF9"
    ],
    "paletteDesc": "코랄 로즈 십자가 (#F5B8BE) + 민트 프레임 + 응급 크림",
    "recommendedFor": "의료, 병원, 십자가, 안전, 응급",
    "cssClass": "pc-bg-swiss-cross-shield",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-swiss-cross-shield\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Rounded Equilateral Cross Silhouette -->\n      <path d=\"M34 10 H62 V34 H86 V62 H62 V86 H34 V62 H10 V34 H34 Z\" \n            stroke=\"#F5B8BE\" stroke-width=\"6\" stroke-linejoin=\"round\" fill=\"#F5B8BE\" filter=\"url(#bg-sh-swiss-cross-shield)\"/>\n      <!-- Layer 2: Inset Mint Cross Frame -->\n      <path d=\"M38 16 H58 V38 H80 V58 H58 V80 H38 V58 H16 V38 H38 Z\" fill=\"#A3D8C3\" filter=\"url(#bg-sh-swiss-cross-shield)\"/>\n      <!-- Layer 3: Center Clean Cream Mount Stage -->\n      <circle cx=\"48\" cy=\"48\" r=\"24\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Rivet Corner Dots & Target Ring -->\n      <circle cx=\"48\" cy=\"48\" r=\"20\" fill=\"none\" stroke=\"#E2CCA8\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\"/>\n      <circle cx=\"48\" cy=\"24\" r=\"2\" fill=\"#F5B8BE\"/>\n      <circle cx=\"72\" cy=\"48\" r=\"2\" fill=\"#F5B8BE\"/>\n      <circle cx=\"48\" cy=\"72\" r=\"2\" fill=\"#F5B8BE\"/>\n      <circle cx=\"24\" cy=\"48\" r=\"2\" fill=\"#F5B8BE\"/>\n</svg>"
  },
  {
    "id": "hot-air-balloon",
    "nameKo": "몽환 열기구 풍선",
    "nameEn": "Fantasy Hot Air Balloon",
    "category": "whimsical",
    "colors": [
      "#BDE0EA",
      "#FEE396",
      "#E2CCA8"
    ],
    "paletteDesc": "스카이 열기구 (#BDE0EA) + 버터컵 스트라이프 + 바구니 크라프트",
    "recommendedFor": "여행, 모험, 비행, 꿈, 탐험",
    "cssClass": "pc-bg-hot-air-balloon",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-hot-air-balloon\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Inverted Teardrop Balloon Envelope -->\n      <path d=\"M48 8 C28 8 16 26 16 46 C16 62 36 74 42 76 H54 C60 74 80 62 80 46 C80 26 68 8 48 8 Z\" \n            fill=\"#BDE0EA\" filter=\"url(#bg-sh-hot-air-balloon)\"/>\n      <!-- Layer 2: Alternating Striped Paper Gores -->\n      <path d=\"M36 10 C26 22 26 50 44 76 H52 C70 50 70 22 60 10 Z\" fill=\"#FEE396\"/>\n      <!-- Layer 3: Center Circular Observation Porthole -->\n      <circle cx=\"48\" cy=\"42\" r=\"23\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-hot-air-balloon)\"/>\n      <!-- Layer 4: Rigging Twine Ropes & Wicker Basket -->\n      <line x1=\"42\" y1=\"76\" x2=\"40\" y2=\"84\" stroke=\"#3D352E\" stroke-width=\"1.2\"/>\n      <line x1=\"54\" y1=\"76\" x2=\"56\" y2=\"84\" stroke=\"#3D352E\" stroke-width=\"1.2\"/>\n      <rect x=\"38\" y=\"84\" width=\"20\" height=\"8\" rx=\"2\" fill=\"#E2CCA8\" filter=\"url(#bg-sh-hot-air-balloon)\"/>\n</svg>"
  },
  {
    "id": "pocket-watch-fob",
    "nameKo": "회중시계 헌터 케이스",
    "nameEn": "Antique Pocket Watch Case",
    "category": "whimsical",
    "colors": [
      "#FEE396",
      "#E2CCA8",
      "#FFFDF9"
    ],
    "paletteDesc": "골든 와치 케이스 (#FEE396) + 브론즈 크라운 + 에나멜 크림",
    "recommendedFor": "시간, 시계, 앤틱, 역사, 귀금속",
    "cssClass": "pc-bg-pocket-watch-fob",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-pocket-watch-fob\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Top Winding Crown & Chain Loop -->\n      <circle cx=\"48\" cy=\"8\" r=\"6\" fill=\"none\" stroke=\"#FEE396\" stroke-width=\"3\" filter=\"url(#bg-sh-pocket-watch-fob)\"/>\n      <rect x=\"44\" y=\"10\" width=\"8\" height=\"6\" rx=\"2\" fill=\"#E2CCA8\"/>\n      <!-- Layer 2: Heavy Circular Watch Case Body -->\n      <circle cx=\"48\" cy=\"50\" r=\"39\" fill=\"#FEE396\" filter=\"url(#bg-sh-pocket-watch-fob)\"/>\n      <!-- Layer 3: Crisp Cream Enamel Dial Face -->\n      <circle cx=\"48\" cy=\"50\" r=\"28\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Chapter Ring Indices & Watch Hands Accent -->\n      <circle cx=\"48\" cy=\"50\" r=\"24\" fill=\"none\" stroke=\"#E2CCA8\" stroke-width=\"1.5\" stroke-dasharray=\"1.5 11\"/>\n      <circle cx=\"48\" cy=\"50\" r=\"3\" fill=\"#3D352E\"/>\n      <line x1=\"48\" y1=\"50\" x2=\"48\" y2=\"34\" stroke=\"#3D352E\" stroke-width=\"1.5\" stroke-linecap=\"round\"/>\n      <line x1=\"48\" y1=\"50\" x2=\"58\" y2=\"50\" stroke=\"#3D352E\" stroke-width=\"1.5\" stroke-linecap=\"round\"/>\n</svg>"
  },
  {
    "id": "kite-shield-medieval",
    "nameKo": "노르만 카이트 롱 방패",
    "nameEn": "Norman Kite Shield",
    "category": "whimsical",
    "colors": [
      "#BBD5B8",
      "#D7CBEB",
      "#FFFDF9"
    ],
    "paletteDesc": "노르만 세이지 (#BBD5B8) + 라벤더 테두리 + 기사단 크림",
    "recommendedFor": "방패, 기사, 수호, 보안, 게임",
    "cssClass": "pc-bg-kite-shield-medieval",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-kite-shield-medieval\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Elongated Teardrop Kite Shield Silhouette -->\n      <path d=\"M48 8 C68 8 82 18 82 42 C82 66 58 84 48 92 C38 84 14 66 14 42 C14 18 28 8 48 8 Z\" \n            fill=\"#BBD5B8\" filter=\"url(#bg-sh-kite-shield-medieval)\"/>\n      <!-- Layer 2: Stepped Inner Lavender Guard -->\n      <path d=\"M48 14 C64 14 76 22 76 42 C76 62 56 78 48 84 C40 78 20 62 20 42 C20 22 32 14 48 14 Z\" \n            fill=\"#D7CBEB\" filter=\"url(#bg-sh-kite-shield-medieval)\"/>\n      <!-- Layer 3: Center Cream Shield Faceplate -->\n      <circle cx=\"48\" cy=\"44\" r=\"24\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Shield Boss & Cross Studs -->\n      <circle cx=\"48\" cy=\"44\" r=\"20\" fill=\"none\" stroke=\"#E2CCA8\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\"/>\n      <circle cx=\"48\" cy=\"24\" r=\"2.5\" fill=\"#FEE396\"/>\n      <circle cx=\"48\" cy=\"74\" r=\"2.5\" fill=\"#FEE396\"/>\n</svg>"
  },
  {
    "id": "origami-crane-wings",
    "nameKo": "종이학 날개 플레이트",
    "nameEn": "Paper Crane Wing Plate",
    "category": "whimsical",
    "colors": [
      "#A3D8C3",
      "#BDE0EA",
      "#FFFDF9"
    ],
    "paletteDesc": "학 날개 민트 (#A3D8C3) + 스카이 바디 (#BDE0EA) + 순백 가슴",
    "recommendedFor": "종이학, 평화, 비상, 소원, 힐링",
    "cssClass": "pc-bg-origami-crane-wings",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-origami-crane-wings\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Swept Outstretched Crane Wings Silhouette -->\n      <polygon points=\"48,32 10,14 26,62 48,88 70,62 86,14\" fill=\"#A3D8C3\" filter=\"url(#bg-sh-origami-crane-wings)\"/>\n      <!-- Layer 2: Folded Crane Body Triangular Facets -->\n      <polygon points=\"48,16 26,62 48,80 70,62\" fill=\"#BDE0EA\" filter=\"url(#bg-sh-origami-crane-wings)\"/>\n      <!-- Layer 3: Elevated Center Diamond Breast Plate -->\n      <polygon points=\"48,24 68,48 48,72 28,48\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Sharp Valley Fold Lines -->\n      <line x1=\"48\" y1=\"16\" x2=\"48\" y2=\"80\" stroke=\"#FFFDF9\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n      <line x1=\"28\" y1=\"48\" x2=\"68\" y2=\"48\" stroke=\"#E2CCA8\" stroke-width=\"1.2\" stroke-dasharray=\"2 2\"/>\n</svg>"
  },
  {
    "id": "crystal-snow-prism",
    "nameKo": "6각 얼음 결정 스노우",
    "nameEn": "6-Point Ice Crystal Snowflake",
    "category": "whimsical",
    "colors": [
      "#BDE0EA",
      "#D7CBEB",
      "#FFFDF9"
    ],
    "paletteDesc": "프로스트 스카이 (#BDE0EA) + 라벤더 크리스탈 + 눈꽃 화이트",
    "recommendedFor": "겨울, 눈, 크리스마스, 얼음, 냉각",
    "cssClass": "pc-bg-crystal-snow-prism",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-crystal-snow-prism\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: 6-Pointed Branched Snowflake Silhouette -->\n      <path d=\"M48 6 L52 18 L64 12 L60 24 L72 20 L66 32 L84 28 L74 38 L90 48 L74 58 L84 68 L66 64 L72 76 L60 72 L64 84 L52 78 L48 90 L44 78 L32 84 L36 72 L24 76 L30 64 L12 68 L22 58 L6 48 L22 38 L12 28 L30 32 L24 20 L36 24 L32 12 L44 18 Z\" \n            fill=\"#BDE0EA\" filter=\"url(#bg-sh-crystal-snow-prism)\"/>\n      <!-- Layer 2: Stepped Inner Ice Crystal Hexagon -->\n      <polygon points=\"48,18 74,33 74,63 48,78 22,63 22,33\" fill=\"#D7CBEB\" filter=\"url(#bg-sh-crystal-snow-prism)\"/>\n      <!-- Layer 3: Center Cream Snow Disc -->\n      <circle cx=\"48\" cy=\"48\" r=\"23\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Radiating Ice Prism Crystals & Frosted Ring -->\n      <line x1=\"48\" y1=\"28\" x2=\"48\" y2=\"68\" stroke=\"#BDE0EA\" stroke-width=\"1.5\"/>\n      <line x1=\"30\" y1=\"38\" x2=\"66\" y2=\"58\" stroke=\"#BDE0EA\" stroke-width=\"1.5\"/>\n      <line x1=\"30\" y1=\"58\" x2=\"66\" y2=\"38\" stroke=\"#BDE0EA\" stroke-width=\"1.5\"/>\n</svg>"
  },
  {
    "id": "ribbon-rosette-trophy",
    "nameKo": "1등상 수상 리본 트로피",
    "nameEn": "First Prize Ribbon Rosette",
    "category": "whimsical",
    "colors": [
      "#F7BA9E",
      "#FEE396",
      "#FFFDF9"
    ],
    "paletteDesc": "살구 리본 테일 (#F7BA9E) + 골드 로제트 (#FEE396) + 트로피 화이트",
    "recommendedFor": "1등, 어워드, 트로피, 메달, 챔피언",
    "cssClass": "pc-bg-ribbon-rosette-trophy",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-ribbon-rosette-trophy\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Twin Hanging Swallowtail Prize Streamers -->\n      <polygon points=\"34,56 24,92 42,82 48,92 48,56\" fill=\"#F7BA9E\" filter=\"url(#bg-sh-ribbon-rosette-trophy)\"/>\n      <polygon points=\"48,56 48,92 54,82 72,92 62,56\" fill=\"#F7BA9E\" filter=\"url(#bg-sh-ribbon-rosette-trophy)\"/>\n      <!-- Layer 2: Pleated Circular Rosette Medal Disc -->\n      <circle cx=\"48\" cy=\"44\" r=\"36\" fill=\"#FEE396\" filter=\"url(#bg-sh-ribbon-rosette-trophy)\"/>\n      <!-- Layer 3: Central Recessed Pure White Medallion -->\n      <circle cx=\"48\" cy=\"44\" r=\"25\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Embossed Laurel Wreath Ring & Star -->\n      <circle cx=\"48\" cy=\"44\" r=\"21\" fill=\"none\" stroke=\"#E2CCA8\" stroke-width=\"1.5\" stroke-dasharray=\"2 3\"/>\n      <polygon points=\"48,30 49.5,33.5 53,33.5 50,35.5 51.5,39 48,37 44.5,39 46,35.5 43,33.5 46.5,33.5\" fill=\"#FEE396\"/>\n</svg>"
  },
  {
    "id": "circus-tent-canopy",
    "nameKo": "서커스 천막 캐노피",
    "nameEn": "Vintage Circus Big-Top Canopy",
    "category": "whimsical",
    "colors": [
      "#F5B8BE",
      "#FEE396",
      "#FFFDF9"
    ],
    "paletteDesc": "서커스 핑크 (#F5B8BE) + 버터컵 스트라이프 + 아레나 화이트",
    "recommendedFor": "축제, 서커스, 이벤트, 파티, 엔터테인먼트",
    "cssClass": "pc-bg-circus-tent-canopy",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-circus-tent-canopy\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Conical Big-Top Canopy with Scalloped Skirt -->\n      <path d=\"M48 10 L84 46 C84 46 80 54 74 54 C68 54 64 48 58 48 C52 48 48 54 42 54 C36 54 32 48 26 48 C20 48 16 54 12 54 C12 46 12 46 48 10 Z\" \n            fill=\"#F5B8BE\" filter=\"url(#bg-sh-circus-tent-canopy)\"/>\n      <rect x=\"14\" y=\"52\" width=\"68\" height=\"34\" rx=\"4\" fill=\"#FAF6ED\" filter=\"url(#bg-sh-circus-tent-canopy)\"/>\n      <!-- Layer 2: Alternating Striped Wedge Gores -->\n      <polygon points=\"48,10 58,48 48,54 38,48\" fill=\"#FEE396\"/>\n      <!-- Layer 3: Central Arena Cream Stage -->\n      <circle cx=\"48\" cy=\"52\" r=\"23\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Pennant Flag Flying at Summit -->\n      <line x1=\"48\" y1=\"10\" x2=\"48\" y2=\"4\" stroke=\"#3D352E\" stroke-width=\"1.5\"/>\n      <polygon points=\"48,4 58,7 48,10\" fill=\"#FEE396\"/>\n      <circle cx=\"48\" cy=\"52\" r=\"19\" fill=\"none\" stroke=\"#E2CCA8\" stroke-width=\"1.2\" stroke-dasharray=\"2 3\"/>\n</svg>"
  },
  {
    "id": "fairy-portal-door",
    "nameKo": "비밀의 화원 아치 문",
    "nameEn": "Secret Garden Arched Door",
    "category": "whimsical",
    "colors": [
      "#E2CCA8",
      "#BBD5B8",
      "#FFFDF9"
    ],
    "paletteDesc": "포털 스톤 크라프트 (#E2CCA8) + 정원 세이지 (#BBD5B8) + 신비 크림",
    "recommendedFor": "비밀, 문, 정원, 탈출, 열쇠",
    "cssClass": "pc-bg-fairy-portal-door",
    "svgContent": "<svg viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <filter id=\"bg-sh-fairy-portal-door\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n<!-- Layer 1: Stone Arch Portal Surround -->\n      <path d=\"M48 8 C28 8 14 22 14 42 V86 H82 V42 C82 22 68 8 48 8 Z\" \n            fill=\"#E2CCA8\" filter=\"url(#bg-sh-fairy-portal-door)\"/>\n      <!-- Layer 2: Wooden Plank Arched Door Body -->\n      <path d=\"M48 14 C32 14 20 26 20 44 V82 H76 V44 C76 26 64 14 48 14 Z\" \n            fill=\"#BBD5B8\" filter=\"url(#bg-sh-fairy-portal-door)\"/>\n      <!-- Layer 3: Center Cream Sanctuary Stage -->\n      <circle cx=\"48\" cy=\"50\" r=\"23\" fill=\"#FFFDF9\"/>\n      <!-- Layer 4: Dual Iron Strap Hinges & Round Door Ring Knocker -->\n      <rect x=\"20\" y=\"34\" width=\"16\" height=\"4\" rx=\"1.5\" fill=\"#3D352E\"/>\n      <rect x=\"20\" y=\"66\" width=\"16\" height=\"4\" rx=\"1.5\" fill=\"#3D352E\"/>\n      <circle cx=\"48\" cy=\"50\" r=\"6\" fill=\"none\" stroke=\"#FEE396\" stroke-width=\"2\"/>\n</svg>"
  },
  {
    "id": "airmail-border",
    "nameKo": "항공우편 빗살 프레임",
    "nameEn": "Vintage Airmail Frame",
    "category": "classic",
    "colors": [
      "#F5B8BE",
      "#FFFDF9",
      "#BDE0EA"
    ],
    "paletteDesc": "파스텔 로즈 (#F5B8BE) + 매트 크림 (#FFFDF9) + 스카이 (#BDE0EA)",
    "recommendedFor": "편지, 우편, 여행, 배송 아이콘",
    "cssClass": "pc-bg-airmail-border",
    "svgContent": "\n      <defs>\n        <filter id=\"bg-sh-airmail-border\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n          <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n        </filter>\n      </defs>\n      <!-- Layer 1: Slanted Parallelogram Borders Base -->\n      <rect x=\"8\" y=\"8\" width=\"80\" height=\"80\" rx=\"10\" fill=\"#F5B8BE\" filter=\"url(#bg-sh-airmail-border)\"/>\n      <path d=\"M12 8 L22 8 L14 16 L8 16 Z M30 8 L40 8 L32 16 L22 16 Z M48 8 L58 8 L50 16 L40 16 Z M66 8 L76 8 L68 16 L58 16 Z M84 8 L88 8 L88 12 L84 16 L76 16 Z\" fill=\"#BDE0EA\"/>\n      <path d=\"M8 80 L18 80 L26 88 L16 88 Z M26 80 L36 80 L44 88 L34 88 Z M44 80 L54 80 L62 88 L52 88 Z M62 80 L72 80 L80 88 L70 88 Z\" fill=\"#BDE0EA\"/>\n      <!-- Layer 2: Inset Cream Faceplate -->\n      <rect x=\"14\" y=\"14\" width=\"68\" height=\"68\" rx=\"8\" fill=\"#FFFDF9\" stroke=\"#E2CCA8\" stroke-width=\"1.2\" stroke-dasharray=\"3 2\" filter=\"url(#bg-sh-airmail-border)\"/>\n      <!-- Layer 3: Inner Stage -->\n      <rect x=\"18\" y=\"18\" width=\"60\" height=\"60\" rx=\"6\" fill=\"#FAF6ED\"/>\n    "
  },
  {
    "id": "monogram-shield",
    "nameKo": "모노그램 앤틱 실드",
    "nameEn": "Monogram Antique Shield",
    "category": "classic",
    "colors": [
      "#D7CBEB",
      "#FFFDF9",
      "#A3D8C3"
    ],
    "paletteDesc": "라벤더 (#D7CBEB) + 매트 크림 (#FFFDF9) + 민트 소인",
    "recommendedFor": "보안, 자격, 인증, 프로필 아이콘",
    "cssClass": "pc-bg-monogram-shield",
    "svgContent": "\n      <defs>\n        <filter id=\"bg-sh-monogram-shield\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n          <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n        </filter>\n      </defs>\n      <!-- Layer 1: Shield Outline Base -->\n      <path d=\"M48 8 C68 8 84 14 84 32 C84 62 48 88 48 88 C48 88 12 62 12 32 C12 14 28 8 48 8 Z\" fill=\"#D7CBEB\" filter=\"url(#bg-sh-monogram-shield)\"/>\n      <!-- Layer 2: Inset Shield -->\n      <path d=\"M48 14 C64 14 78 19 78 34 C78 58 48 80 48 80 C48 80 18 58 18 34 C18 19 32 14 48 14 Z\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-monogram-shield)\"/>\n      <!-- Layer 3: Inner Accent Field -->\n      <path d=\"M48 20 C60 20 72 24 72 36 C72 54 48 72 48 72 C48 72 24 54 24 36 C24 24 36 20 48 20 Z\" fill=\"#FAF6ED\" stroke=\"#A3D8C3\" stroke-width=\"1.5\" stroke-dasharray=\"4 2\"/>\n    "
  },
  {
    "id": "telegram-strip",
    "nameKo": "전보 모스부호 리본",
    "nameEn": "Telegram Ribbon Strip",
    "category": "classic",
    "colors": [
      "#E2CCA8",
      "#FFFDF9",
      "#F7BA9E"
    ],
    "paletteDesc": "크라프트 (#E2CCA8) + 매트 크림 (#FFFDF9) + 피치 액센트",
    "recommendedFor": "메시지, 알림, 통신 아이콘",
    "cssClass": "pc-bg-telegram-strip",
    "svgContent": "\n      <defs>\n        <filter id=\"bg-sh-telegram-strip\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n          <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n        </filter>\n      </defs>\n      <rect x=\"8\" y=\"14\" width=\"80\" height=\"68\" rx=\"6\" fill=\"#E2CCA8\" filter=\"url(#bg-sh-telegram-strip)\"/>\n      <rect x=\"12\" y=\"18\" width=\"72\" height=\"60\" rx=\"4\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-telegram-strip)\"/>\n      <!-- Morse Code Perforations Top and Bottom -->\n      <g fill=\"#F7BA9E\">\n        <circle cx=\"20\" cy=\"24\" r=\"2\"/><circle cx=\"27\" cy=\"24\" r=\"2\"/><rect x=\"33\" y=\"22.5\" width=\"8\" height=\"3\" rx=\"1.5\"/><circle cx=\"46\" cy=\"24\" r=\"2\"/><rect x=\"52\" y=\"22.5\" width=\"8\" height=\"3\" rx=\"1.5\"/><circle cx=\"65\" cy=\"24\" r=\"2\"/>\n        <rect x=\"20\" y=\"71.5\" width=\"8\" height=\"3\" rx=\"1.5\"/><circle cx=\"33\" cy=\"73\" r=\"2\"/><rect x=\"39\" y=\"71.5\" width=\"8\" height=\"3\" rx=\"1.5\"/><circle cx=\"52\" cy=\"73\" r=\"2\"/><circle cx=\"58\" cy=\"73\" r=\"2\"/><circle cx=\"65\" cy=\"73\" r=\"2\"/>\n      </g>\n    "
  },
  {
    "id": "customs-stamp",
    "nameKo": "세관 삼각 패스 스탬프",
    "nameEn": "Customs Triangle Stamp",
    "category": "classic",
    "colors": [
      "#A3D8C3",
      "#FFFDF9",
      "#FEE396"
    ],
    "paletteDesc": "민트 페이퍼 (#A3D8C3) + 매트 크림 (#FFFDF9) + 버터컵",
    "recommendedFor": "승인, 패스, 출입, 여행 아이콘",
    "cssClass": "pc-bg-customs-stamp",
    "svgContent": "\n      <defs>\n        <filter id=\"bg-sh-customs-stamp\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n          <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n        </filter>\n      </defs>\n      <path d=\"M48 6 L88 78 C90 82 87 86 82 86 L14 86 C9 86 6 82 8 78 Z\" fill=\"#A3D8C3\" filter=\"url(#bg-sh-customs-stamp)\"/>\n      <path d=\"M48 14 L82 76 C83 78 81 80 79 80 L17 80 C15 80 13 78 14 76 Z\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-customs-stamp)\"/>\n      <path d=\"M48 24 L74 72 L22 72 Z\" fill=\"#FAF6ED\" stroke=\"#FEE396\" stroke-width=\"2\" stroke-dasharray=\"3 3\"/>\n    "
  },
  {
    "id": "embossed-seal-gold",
    "nameKo": "골드 포일 양각 씰",
    "nameEn": "Gold Foil Embossed Seal",
    "category": "classic",
    "colors": [
      "#FEE396",
      "#FAF6ED",
      "#E2CCA8"
    ],
    "paletteDesc": "버터컵 골드 (#FEE396) + 크림 (#FAF6ED) + 크라프트 톤",
    "recommendedFor": "프리미엄, 어워드, 훈장 아이콘",
    "cssClass": "pc-bg-embossed-seal-gold",
    "svgContent": "\n      <defs>\n        <filter id=\"bg-sh-embossed-seal-gold\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n          <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n        </filter>\n      </defs>\n      <circle cx=\"48\" cy=\"48\" r=\"40\" fill=\"#FEE396\" filter=\"url(#bg-sh-embossed-seal-gold)\"/>\n      <circle cx=\"48\" cy=\"48\" r=\"35\" fill=\"#FAF6ED\" stroke=\"#E2CCA8\" stroke-width=\"2\" filter=\"url(#bg-sh-embossed-seal-gold)\"/>\n      <circle cx=\"48\" cy=\"48\" r=\"31\" fill=\"#FFFDF9\" stroke=\"#FEE396\" stroke-width=\"1.5\" stroke-dasharray=\"2 2\"/>\n    "
  },
  {
    "id": "manuscript-scroll",
    "nameKo": "양피지 컬링 스크롤",
    "nameEn": "Curled Manuscript Scroll",
    "category": "classic",
    "colors": [
      "#FAF6ED",
      "#E2CCA8",
      "#F7BA9E"
    ],
    "paletteDesc": "크림 양피지 (#FAF6ED) + 크라프트 롤 (#E2CCA8)",
    "recommendedFor": "문서, 역사, 이야기, 스크립트 아이콘",
    "cssClass": "pc-bg-manuscript-scroll",
    "svgContent": "\n      <defs>\n        <filter id=\"bg-sh-manuscript-scroll\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n          <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n        </filter>\n      </defs>\n      <!-- Base paper sheet -->\n      <path d=\"M16 12 C16 12 28 8 48 8 C68 8 80 12 80 12 L80 82 C80 82 68 86 48 86 C28 86 16 82 16 82 Z\" fill=\"#E2CCA8\" filter=\"url(#bg-sh-manuscript-scroll)\"/>\n      <path d=\"M19 14 C19 14 30 11 48 11 C66 11 77 14 77 14 L77 80 C77 80 66 83 48 83 C30 83 19 80 19 80 Z\" fill=\"#FAF6ED\" filter=\"url(#bg-sh-manuscript-scroll)\"/>\n      <!-- Top Scroll Curl -->\n      <ellipse cx=\"48\" cy=\"11\" rx=\"30\" ry=\"4\" fill=\"#FFFDF9\" stroke=\"#E2CCA8\" stroke-width=\"1\"/>\n      <!-- Bottom Scroll Curl -->\n      <ellipse cx=\"48\" cy=\"83\" rx=\"30\" ry=\"4\" fill=\"#FFFDF9\" stroke=\"#E2CCA8\" stroke-width=\"1\"/>\n    "
  },
  {
    "id": "bamboo-joint",
    "nameKo": "청대나무 마디 플레이트",
    "nameEn": "Bamboo Node Plate",
    "category": "nature",
    "colors": [
      "#A3D8C3",
      "#FFFDF9",
      "#BBD5B8"
    ],
    "paletteDesc": "민트 페이퍼 (#A3D8C3) + 크림 (#FFFDF9) + 세이지 그린",
    "recommendedFor": "친환경, 성장, 웰빙, 생태 아이콘",
    "cssClass": "pc-bg-bamboo-joint",
    "svgContent": "\n      <defs>\n        <filter id=\"bg-sh-bamboo-joint\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n          <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n        </filter>\n      </defs>\n      <rect x=\"12\" y=\"10\" width=\"72\" height=\"76\" rx=\"16\" fill=\"#A3D8C3\" filter=\"url(#bg-sh-bamboo-joint)\"/>\n      <rect x=\"16\" y=\"14\" width=\"64\" height=\"68\" rx=\"12\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-bamboo-joint)\"/>\n      <!-- Bamboo Node Seams -->\n      <path d=\"M12 28 C28 26 68 26 84 28 M12 68 C28 66 68 66 84 68\" stroke=\"#BBD5B8\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    "
  },
  {
    "id": "camellia-bloom",
    "nameKo": "동백꽃 겹꽃잎 트레이",
    "nameEn": "Camellia Petal Tray",
    "category": "nature",
    "colors": [
      "#F5B8BE",
      "#FFFDF9",
      "#FEE396"
    ],
    "paletteDesc": "로즈 핑크 (#F5B8BE) + 크림 (#FFFDF9) + 버터컵",
    "recommendedFor": "뷰티, 블라썸, 플라워, 감성 아이콘",
    "cssClass": "pc-bg-camellia-bloom",
    "svgContent": "\n      <defs>\n        <filter id=\"bg-sh-camellia-bloom\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n          <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n        </filter>\n      </defs>\n      <path d=\"M48 8 C58 8 68 14 74 22 C82 30 88 40 88 48 C88 58 82 68 74 74 C68 82 58 88 48 88 C38 88 28 82 22 74 C14 68 8 58 8 48 C8 38 14 28 22 22 C28 14 38 8 48 8 Z\" fill=\"#F5B8BE\" filter=\"url(#bg-sh-camellia-bloom)\"/>\n      <circle cx=\"48\" cy=\"48\" r=\"32\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-camellia-bloom)\"/>\n      <circle cx=\"48\" cy=\"48\" r=\"28\" fill=\"#FAF6ED\" stroke=\"#FEE396\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\"/>\n    "
  },
  {
    "id": "fern-frond",
    "nameKo": "양치식물 고사리 부채",
    "nameEn": "Fern Leaf Fan",
    "category": "nature",
    "colors": [
      "#BBD5B8",
      "#FFFDF9",
      "#A3D8C3"
    ],
    "paletteDesc": "세이지 (#BBD5B8) + 매트 크림 (#FFFDF9) + 민트 잎맥",
    "recommendedFor": "보태니컬, 가든, 유기농 아이콘",
    "cssClass": "pc-bg-fern-frond",
    "svgContent": "\n      <defs>\n        <filter id=\"bg-sh-fern-frond\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n          <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n        </filter>\n      </defs>\n      <path d=\"M48 6 C62 6 82 22 84 48 C84 72 66 88 48 88 C30 88 12 72 12 48 C14 22 34 6 48 6 Z\" fill=\"#BBD5B8\" filter=\"url(#bg-sh-fern-frond)\"/>\n      <path d=\"M48 11 C60 11 76 25 78 48 C78 68 62 83 48 83 C34 83 18 68 18 48 C20 25 36 11 48 11 Z\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-fern-frond)\"/>\n      <path d=\"M48 16 L48 78 M48 28 L62 20 M48 38 L66 30 M48 48 L66 42 M48 28 L34 20 M48 38 L30 30 M48 48 L30 42\" stroke=\"#A3D8C3\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    "
  },
  {
    "id": "coral-branch",
    "nameKo": "바다 산호초 가지",
    "nameEn": "Sea Coral Branch",
    "category": "nature",
    "colors": [
      "#F7BA9E",
      "#FFFDF9",
      "#BDE0EA"
    ],
    "paletteDesc": "피치 코랄 (#F7BA9E) + 크림 (#FFFDF9) + 스카이 오션",
    "recommendedFor": "해양, 여름, 산호, 여행 아이콘",
    "cssClass": "pc-bg-coral-branch",
    "svgContent": "\n      <defs>\n        <filter id=\"bg-sh-coral-branch\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n          <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n        </filter>\n      </defs>\n      <path d=\"M24 14 C32 8 40 18 48 12 C56 6 68 12 72 20 C78 28 86 34 84 46 C82 58 88 68 80 78 C72 88 60 84 48 86 C36 88 24 86 16 76 C8 66 14 54 12 42 C10 30 16 20 24 14 Z\" fill=\"#F7BA9E\" filter=\"url(#bg-sh-coral-branch)\"/>\n      <circle cx=\"48\" cy=\"48\" r=\"30\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-coral-branch)\"/>\n      <circle cx=\"48\" cy=\"48\" r=\"26\" fill=\"#FAF6ED\" stroke=\"#BDE0EA\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\"/>\n    "
  },
  {
    "id": "aurora-waves",
    "nameKo": "극광 오로라 물결",
    "nameEn": "Aurora Wave Ribbon",
    "category": "nature",
    "colors": [
      "#BDE0EA",
      "#D7CBEB",
      "#FFFDF9"
    ],
    "paletteDesc": "스카이 블루 (#BDE0EA) + 소프트 라벤더 (#D7CBEB)",
    "recommendedFor": "신비, 밤하늘, 영감, 음악 아이콘",
    "cssClass": "pc-bg-aurora-waves",
    "svgContent": "\n      <defs>\n        <filter id=\"bg-sh-aurora-waves\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n          <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n        </filter>\n      </defs>\n      <rect x=\"8\" y=\"12\" width=\"80\" height=\"72\" rx=\"14\" fill=\"#BDE0EA\" filter=\"url(#bg-sh-aurora-waves)\"/>\n      <path d=\"M8 32 C24 22 44 42 64 28 C74 20 82 24 88 28 L88 84 L8 84 Z\" fill=\"#D7CBEB\" filter=\"url(#bg-sh-aurora-waves)\"/>\n      <circle cx=\"48\" cy=\"48\" r=\"30\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-aurora-waves)\"/>\n      <circle cx=\"48\" cy=\"48\" r=\"26\" fill=\"#FAF6ED\"/>\n    "
  },
  {
    "id": "feather-quill",
    "nameKo": "우아한 깃털 곡선 트레이",
    "nameEn": "Graceful Feather Tray",
    "category": "nature",
    "colors": [
      "#D7CBEB",
      "#FFFDF9",
      "#F7BA9E"
    ],
    "paletteDesc": "라벤더 (#D7CBEB) + 매트 크림 (#FFFDF9) + 피치",
    "recommendedFor": "글쓰기, 시, 문학, 가벼움 아이콘",
    "cssClass": "pc-bg-feather-quill",
    "svgContent": "\n      <defs>\n        <filter id=\"bg-sh-feather-quill\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n          <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n        </filter>\n      </defs>\n      <path d=\"M80 12 C72 28 66 52 48 70 C34 84 18 86 14 84 C12 80 16 66 30 50 C48 30 68 18 80 12 Z\" fill=\"#D7CBEB\" filter=\"url(#bg-sh-feather-quill)\"/>\n      <circle cx=\"48\" cy=\"48\" r=\"31\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-feather-quill)\"/>\n      <circle cx=\"48\" cy=\"48\" r=\"27\" fill=\"#FAF6ED\" stroke=\"#F7BA9E\" stroke-width=\"1.5\" stroke-dasharray=\"2 2\"/>\n    "
  },
  {
    "id": "octagram-star",
    "nameKo": "팔각 별빛 만다라",
    "nameEn": "Octagram Star Mandala",
    "category": "geo",
    "colors": [
      "#FEE396",
      "#FFFDF9",
      "#A3D8C3"
    ],
    "paletteDesc": "버터컵 (#FEE396) + 매트 크림 (#FFFDF9) + 민트 액센트",
    "recommendedFor": "하이라이트, 즐겨찾기, 럭셔리 아이콘",
    "cssClass": "pc-bg-octagram-star",
    "svgContent": "\n      <defs>\n        <filter id=\"bg-sh-octagram-star\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n          <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n        </filter>\n      </defs>\n      <!-- Base: Two overlapping rotated squares -->\n      <g filter=\"url(#bg-sh-octagram-star)\">\n        <rect x=\"14\" y=\"14\" width=\"68\" height=\"68\" rx=\"8\" fill=\"#FEE396\"/>\n        <rect x=\"14\" y=\"14\" width=\"68\" height=\"68\" rx=\"8\" fill=\"#FEE396\" transform=\"rotate(45 48 48)\"/>\n      </g>\n      <circle cx=\"48\" cy=\"48\" r=\"32\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-octagram-star)\"/>\n      <circle cx=\"48\" cy=\"48\" r=\"27\" fill=\"#FAF6ED\" stroke=\"#A3D8C3\" stroke-width=\"1.5\"/>\n    "
  },
  {
    "id": "triangular-prism",
    "nameKo": "삼각 프리즘 단상",
    "nameEn": "Triangular Prism Pedestal",
    "category": "geo",
    "colors": [
      "#BDE0EA",
      "#FFFDF9",
      "#D7CBEB"
    ],
    "paletteDesc": "스카이 블루 (#BDE0EA) + 크림 (#FFFDF9) + 라벤더 그림자",
    "recommendedFor": "3D, 그래픽, 기하학, 렌더링 아이콘",
    "cssClass": "pc-bg-triangular-prism",
    "svgContent": "\n      <defs>\n        <filter id=\"bg-sh-triangular-prism\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n          <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n        </filter>\n      </defs>\n      <polygon points=\"48,8 86,76 10,76\" fill=\"#BDE0EA\" filter=\"url(#bg-sh-triangular-prism)\"/>\n      <polygon points=\"48,15 80,72 16,72\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-triangular-prism)\"/>\n      <polygon points=\"48,24 74,68 22,68\" fill=\"#FAF6ED\" stroke=\"#D7CBEB\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\"/>\n    "
  },
  {
    "id": "rhombus-cascade",
    "nameKo": "마름모 캐스케이드 타일",
    "nameEn": "Rhombus Cascade Tile",
    "category": "geo",
    "colors": [
      "#F7BA9E",
      "#FFFDF9",
      "#BBD5B8"
    ],
    "paletteDesc": "피치 (#F7BA9E) + 매트 크림 (#FFFDF9) + 세이지 그린",
    "recommendedFor": "데이터, 그리드, 패턴, 레이아웃 아이콘",
    "cssClass": "pc-bg-rhombus-cascade",
    "svgContent": "\n      <defs>\n        <filter id=\"bg-sh-rhombus-cascade\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n          <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n        </filter>\n      </defs>\n      <polygon points=\"48,6 90,48 48,90 6,48\" fill=\"#F7BA9E\" filter=\"url(#bg-sh-rhombus-cascade)\"/>\n      <polygon points=\"48,12 84,48 48,84 12,48\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-rhombus-cascade)\"/>\n      <polygon points=\"48,20 76,48 48,76 20,48\" fill=\"#FAF6ED\" stroke=\"#BBD5B8\" stroke-width=\"1.5\"/>\n    "
  },
  {
    "id": "hourglass-poly",
    "nameKo": "모래시계 폴리곤",
    "nameEn": "Hourglass Polygon Plate",
    "category": "geo",
    "colors": [
      "#D7CBEB",
      "#FFFDF9",
      "#FEE396"
    ],
    "paletteDesc": "라벤더 (#D7CBEB) + 매트 크림 (#FFFDF9) + 버터컵",
    "recommendedFor": "시간, 타이머, 대기, 진행 아이콘",
    "cssClass": "pc-bg-hourglass-poly",
    "svgContent": "\n      <defs>\n        <filter id=\"bg-sh-hourglass-poly\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n          <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n        </filter>\n      </defs>\n      <polygon points=\"12,10 84,10 56,48 84,86 12,86 40,48\" fill=\"#D7CBEB\" filter=\"url(#bg-sh-hourglass-poly)\"/>\n      <circle cx=\"48\" cy=\"48\" r=\"31\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-hourglass-poly)\"/>\n      <circle cx=\"48\" cy=\"48\" r=\"26\" fill=\"#FAF6ED\" stroke=\"#FEE396\" stroke-width=\"1.5\" stroke-dasharray=\"2 2\"/>\n    "
  },
  {
    "id": "circular-labyrinth",
    "nameKo": "원형 미궁 라비린스",
    "nameEn": "Circular Labyrinth Disc",
    "category": "geo",
    "colors": [
      "#A3D8C3",
      "#FFFDF9",
      "#3D352E"
    ],
    "paletteDesc": "민트 페이퍼 (#A3D8C3) + 크림 (#FFFDF9) + 차콜 잉크",
    "recommendedFor": "탐색, 알고리즘, 복잡도, 퍼즐 아이콘",
    "cssClass": "pc-bg-circular-labyrinth",
    "svgContent": "\n      <defs>\n        <filter id=\"bg-sh-circular-labyrinth\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n          <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n        </filter>\n      </defs>\n      <circle cx=\"48\" cy=\"48\" r=\"42\" fill=\"#A3D8C3\" filter=\"url(#bg-sh-circular-labyrinth)\"/>\n      <circle cx=\"48\" cy=\"48\" r=\"36\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-circular-labyrinth)\"/>\n      <!-- Labyrinth concentric cuts -->\n      <path d=\"M48 18 A30 30 0 1 0 78 48 M48 24 A24 24 0 0 1 72 48\" stroke=\"#3D352E\" stroke-width=\"1.5\" stroke-linecap=\"round\" fill=\"none\" opacity=\"0.3\"/>\n      <circle cx=\"48\" cy=\"48\" r=\"28\" fill=\"#FAF6ED\"/>\n    "
  },
  {
    "id": "stepped-chevron",
    "nameKo": "계단식 쉐브론 단상",
    "nameEn": "Stepped Chevron Tier",
    "category": "geo",
    "colors": [
      "#BBD5B8",
      "#FFFDF9",
      "#F5B8BE"
    ],
    "paletteDesc": "세이지 (#BBD5B8) + 매트 크림 (#FFFDF9) + 로즈",
    "recommendedFor": "상승, 진보, 레벨업, 화살표 아이콘",
    "cssClass": "pc-bg-stepped-chevron",
    "svgContent": "\n      <defs>\n        <filter id=\"bg-sh-stepped-chevron\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n          <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n        </filter>\n      </defs>\n      <polygon points=\"48,8 88,40 76,40 48,18 20,40 8,40\" fill=\"#BBD5B8\" filter=\"url(#bg-sh-stepped-chevron)\"/>\n      <rect x=\"12\" y=\"24\" width=\"72\" height=\"64\" rx=\"10\" fill=\"#BBD5B8\" filter=\"url(#bg-sh-stepped-chevron)\"/>\n      <rect x=\"16\" y=\"28\" width=\"64\" height=\"56\" rx=\"8\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-stepped-chevron)\"/>\n      <circle cx=\"48\" cy=\"54\" r=\"26\" fill=\"#FAF6ED\" stroke=\"#F5B8BE\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\"/>\n    "
  },
  {
    "id": "kraft-tag-reinforcer",
    "nameKo": "도넛 아일렛 태그",
    "nameEn": "Eyelet Reinforcer Tag",
    "category": "craft",
    "colors": [
      "#E2CCA8",
      "#FFFDF9",
      "#F7BA9E"
    ],
    "paletteDesc": "크라프트 보드 (#E2CCA8) + 매트 크림 (#FFFDF9) + 피치 링",
    "recommendedFor": "쇼핑, 가격, 태그, 상품 아이콘",
    "cssClass": "pc-bg-kraft-tag-reinforcer",
    "svgContent": "\n      <defs>\n        <filter id=\"bg-sh-kraft-tag-reinforcer\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n          <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n        </filter>\n      </defs>\n      <rect x=\"10\" y=\"10\" width=\"76\" height=\"76\" rx=\"12\" fill=\"#E2CCA8\" filter=\"url(#bg-sh-kraft-tag-reinforcer)\"/>\n      <rect x=\"14\" y=\"14\" width=\"68\" height=\"68\" rx=\"8\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-kraft-tag-reinforcer)\"/>\n      <!-- Top Eyelet Reinforcer Donut -->\n      <circle cx=\"48\" cy=\"20\" r=\"5\" fill=\"#F7BA9E\"/>\n      <circle cx=\"48\" cy=\"20\" r=\"2\" fill=\"#E2CCA8\"/>\n      <circle cx=\"48\" cy=\"52\" r=\"26\" fill=\"#FAF6ED\"/>\n    "
  },
  {
    "id": "origami-boat-base",
    "nameKo": "색종이 돛단배 좌대",
    "nameEn": "Origami Boat Pedestal",
    "category": "craft",
    "colors": [
      "#BDE0EA",
      "#FFFDF9",
      "#FEE396"
    ],
    "paletteDesc": "스카이 블루 (#BDE0EA) + 크림 (#FFFDF9) + 버터컵",
    "recommendedFor": "출항, 여행, 모험, 탐험 아이콘",
    "cssClass": "pc-bg-origami-boat-base",
    "svgContent": "\n      <defs>\n        <filter id=\"bg-sh-origami-boat-base\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n          <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n        </filter>\n      </defs>\n      <!-- Boat Hull Base -->\n      <polygon points=\"10,64 86,64 74,86 22,86\" fill=\"#BDE0EA\" filter=\"url(#bg-sh-origami-boat-base)\"/>\n      <polygon points=\"48,8 78,58 48,58\" fill=\"#FEE396\" filter=\"url(#bg-sh-origami-boat-base)\"/>\n      <polygon points=\"48,16 22,58 48,58\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-origami-boat-base)\"/>\n      <circle cx=\"48\" cy=\"46\" r=\"28\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-origami-boat-base)\"/>\n      <circle cx=\"48\" cy=\"46\" r=\"24\" fill=\"#FAF6ED\"/>\n    "
  },
  {
    "id": "stitched-border-memo",
    "nameKo": "스티치 재봉선 메모지",
    "nameEn": "Stitched Seam Memo Card",
    "category": "craft",
    "colors": [
      "#FFFDF9",
      "#F5B8BE",
      "#E2CCA8"
    ],
    "paletteDesc": "매트 크림 (#FFFDF9) + 로즈 실밥선 (#F5B8BE)",
    "recommendedFor": "노트, 할일, 일기, 공예 아이콘",
    "cssClass": "pc-bg-stitched-border-memo",
    "svgContent": "\n      <defs>\n        <filter id=\"bg-sh-stitched-border-memo\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n          <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n        </filter>\n      </defs>\n      <rect x=\"10\" y=\"8\" width=\"76\" height=\"80\" rx=\"8\" fill=\"#FAF6ED\" filter=\"url(#bg-sh-stitched-border-memo)\"/>\n      <rect x=\"14\" y=\"12\" width=\"68\" height=\"72\" rx=\"6\" fill=\"#FFFDF9\" stroke=\"#F5B8BE\" stroke-width=\"1.8\" stroke-dasharray=\"4 3\" filter=\"url(#bg-sh-stitched-border-memo)\"/>\n      <circle cx=\"48\" cy=\"48\" r=\"28\" fill=\"#FAF6ED\"/>\n    "
  },
  {
    "id": "fan-fold-rosette",
    "nameKo": "부채꼴 아코디언 로제트",
    "nameEn": "Fan-Fold Rosette Plate",
    "category": "craft",
    "colors": [
      "#D7CBEB",
      "#FFFDF9",
      "#A3D8C3"
    ],
    "paletteDesc": "라벤더 (#D7CBEB) + 매트 크림 (#FFFDF9) + 민트 코어",
    "recommendedFor": "파티, 축하, 장식, 이벤트 아이콘",
    "cssClass": "pc-bg-fan-fold-rosette",
    "svgContent": "\n      <defs>\n        <filter id=\"bg-sh-fan-fold-rosette\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n          <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n        </filter>\n      </defs>\n      <!-- Circular Rosette with fan pleats -->\n      <circle cx=\"48\" cy=\"48\" r=\"42\" fill=\"#D7CBEB\" filter=\"url(#bg-sh-fan-fold-rosette)\"/>\n      <path d=\"M48 6 L48 90 M6 48 L90 48 M18 18 L78 78 M18 78 L78 18\" stroke=\"#BBD5B8\" stroke-width=\"1.5\" opacity=\"0.4\"/>\n      <circle cx=\"48\" cy=\"48\" r=\"32\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-fan-fold-rosette)\"/>\n      <circle cx=\"48\" cy=\"48\" r=\"26\" fill=\"#FAF6ED\" stroke=\"#A3D8C3\" stroke-width=\"1.5\"/>\n    "
  },
  {
    "id": "envelope-liner",
    "nameKo": "봉투 속지 패턴 플레이트",
    "nameEn": "Decorative Envelope Liner",
    "category": "craft",
    "colors": [
      "#F7BA9E",
      "#FFFDF9",
      "#FAF6ED"
    ],
    "paletteDesc": "피치 봉투 (#F7BA9E) + 크림 속지 (#FFFDF9)",
    "recommendedFor": "초대장, 편지, 선물, 카드 아이콘",
    "cssClass": "pc-bg-envelope-liner",
    "svgContent": "\n      <defs>\n        <filter id=\"bg-sh-envelope-liner\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n          <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n        </filter>\n      </defs>\n      <rect x=\"8\" y=\"14\" width=\"80\" height=\"68\" rx=\"8\" fill=\"#F7BA9E\" filter=\"url(#bg-sh-envelope-liner)\"/>\n      <polygon points=\"8,14 48,46 88,14\" fill=\"#FAF6ED\" stroke=\"#E2CCA8\" stroke-width=\"1\" filter=\"url(#bg-sh-envelope-liner)\"/>\n      <circle cx=\"48\" cy=\"50\" r=\"28\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-envelope-liner)\"/>\n      <circle cx=\"48\" cy=\"50\" r=\"24\" fill=\"#FAF6ED\"/>\n    "
  },
  {
    "id": "corner-ribbon-photo",
    "nameKo": "모서리 삼각 리본 마운트",
    "nameEn": "Corner Ribbon Photo Mount",
    "category": "craft",
    "colors": [
      "#FFFDF9",
      "#A3D8C3",
      "#E2CCA8"
    ],
    "paletteDesc": "매트 크림 (#FFFDF9) + 민트 리본 탭 (#A3D8C3)",
    "recommendedFor": "사진, 갤러리, 아트, 앨범 아이콘",
    "cssClass": "pc-bg-corner-ribbon-photo",
    "svgContent": "\n      <defs>\n        <filter id=\"bg-sh-corner-ribbon-photo\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n          <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n        </filter>\n      </defs>\n      <rect x=\"10\" y=\"10\" width=\"76\" height=\"76\" rx=\"8\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-corner-ribbon-photo)\"/>\n      <!-- 4 Corner Ribbon Tabs -->\n      <polygon points=\"10,24 24,10 32,10 10,32\" fill=\"#A3D8C3\"/>\n      <polygon points=\"86,24 72,10 64,10 86,32\" fill=\"#A3D8C3\"/>\n      <polygon points=\"10,72 24,86 32,86 10,64\" fill=\"#A3D8C3\"/>\n      <polygon points=\"86,72 72,86 64,86 86,64\" fill=\"#A3D8C3\"/>\n      <rect x=\"18\" y=\"18\" width=\"60\" height=\"60\" rx=\"4\" fill=\"#FAF6ED\" stroke=\"#E2CCA8\" stroke-width=\"1.2\"/>\n    "
  },
  {
    "id": "compass-star-fleur",
    "nameKo": "동화 나침반 플뢰르",
    "nameEn": "Whimsical Compass Fleur",
    "category": "whimsical",
    "colors": [
      "#BDE0EA",
      "#FFFDF9",
      "#FEE396"
    ],
    "paletteDesc": "스카이 블루 (#BDE0EA) + 크림 (#FFFDF9) + 버터컵 골드",
    "recommendedFor": "방향, 가이드, 여행, 나침반 아이콘",
    "cssClass": "pc-bg-compass-star-fleur",
    "svgContent": "\n      <defs>\n        <filter id=\"bg-sh-compass-star-fleur\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n          <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n        </filter>\n      </defs>\n      <circle cx=\"48\" cy=\"48\" r=\"42\" fill=\"#BDE0EA\" filter=\"url(#bg-sh-compass-star-fleur)\"/>\n      <!-- Compass 4 Points -->\n      <polygon points=\"48,8 54,48 48,52 42,48\" fill=\"#FEE396\"/>\n      <polygon points=\"48,88 54,48 48,44 42,48\" fill=\"#FAF6ED\"/>\n      <polygon points=\"8,48 48,42 52,48 48,54\" fill=\"#FEE396\"/>\n      <polygon points=\"88,48 48,42 44,48 48,54\" fill=\"#FAF6ED\"/>\n      <circle cx=\"48\" cy=\"48\" r=\"30\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-compass-star-fleur)\"/>\n      <circle cx=\"48\" cy=\"48\" r=\"26\" fill=\"#FAF6ED\"/>\n    "
  },
  {
    "id": "floating-cloud-island",
    "nameKo": "공중 부유 구름 섬",
    "nameEn": "Floating Cloud Island",
    "category": "whimsical",
    "colors": [
      "#FFFDF9",
      "#BBD5B8",
      "#BDE0EA"
    ],
    "paletteDesc": "매트 크림 (#FFFDF9) + 세이지 아일랜드 + 스카이",
    "recommendedFor": "상상, 드림, 클라우드, 자연 아이콘",
    "cssClass": "pc-bg-floating-cloud-island",
    "svgContent": "\n      <defs>\n        <filter id=\"bg-sh-floating-cloud-island\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n          <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n        </filter>\n      </defs>\n      <!-- Base Floating Landmass -->\n      <path d=\"M14 56 C14 56 24 84 48 84 C72 84 82 56 82 56 Z\" fill=\"#BBD5B8\" filter=\"url(#bg-sh-floating-cloud-island)\"/>\n      <!-- Puffy Cloud Mound -->\n      <path d=\"M22 56 C14 56 12 44 20 38 C18 28 28 22 36 26 C42 16 56 16 62 24 C72 20 80 28 78 38 C86 44 84 56 76 56 Z\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-floating-cloud-island)\"/>\n      <circle cx=\"48\" cy=\"46\" r=\"26\" fill=\"#FAF6ED\" stroke=\"#BDE0EA\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\"/>\n    "
  },
  {
    "id": "potion-flask",
    "nameKo": "마법 시약 플라스크",
    "nameEn": "Alchemist Potion Flask",
    "category": "whimsical",
    "colors": [
      "#D7CBEB",
      "#FFFDF9",
      "#F5B8BE"
    ],
    "paletteDesc": "라벤더 포션 (#D7CBEB) + 크림 (#FFFDF9) + 로즈 마개",
    "recommendedFor": "과학, 실험실, 마법, 특수효과 아이콘",
    "cssClass": "pc-bg-potion-flask",
    "svgContent": "\n      <defs>\n        <filter id=\"bg-sh-potion-flask\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n          <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n        </filter>\n      </defs>\n      <!-- Stopper -->\n      <rect x=\"42\" y=\"6\" width=\"12\" height=\"10\" rx=\"3\" fill=\"#F5B8BE\"/>\n      <!-- Flask Body -->\n      <path d=\"M40 16 L56 16 L56 30 L78 68 C84 78 78 88 66 88 L30 88 C18 88 12 78 18 68 L40 30 Z\" fill=\"#D7CBEB\" filter=\"url(#bg-sh-potion-flask)\"/>\n      <circle cx=\"48\" cy=\"56\" r=\"26\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-potion-flask)\"/>\n      <circle cx=\"48\" cy=\"56\" r=\"22\" fill=\"#FAF6ED\"/>\n    "
  },
  {
    "id": "paper-lantern",
    "nameKo": "종이 등불 랜턴",
    "nameEn": "Festive Paper Lantern",
    "category": "whimsical",
    "colors": [
      "#F5B8BE",
      "#FFFDF9",
      "#FEE396"
    ],
    "paletteDesc": "로즈 핑크 (#F5B8BE) + 매트 크림 (#FFFDF9) + 버터컵 빛",
    "recommendedFor": "축제, 등불, 아시아, 파티 아이콘",
    "cssClass": "pc-bg-paper-lantern",
    "svgContent": "\n      <defs>\n        <filter id=\"bg-sh-paper-lantern\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n          <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n        </filter>\n      </defs>\n      <!-- Top and Bottom caps -->\n      <rect x=\"36\" y=\"6\" width=\"24\" height=\"6\" rx=\"2\" fill=\"#FEE396\"/>\n      <rect x=\"36\" y=\"84\" width=\"24\" height=\"6\" rx=\"2\" fill=\"#FEE396\"/>\n      <!-- Lantern Oval Body -->\n      <path d=\"M38 12 L58 12 C78 20 86 38 86 48 C86 58 78 76 58 84 L38 84 C18 76 10 58 10 48 C10 38 18 20 38 12 Z\" fill=\"#F5B8BE\" filter=\"url(#bg-sh-paper-lantern)\"/>\n      <circle cx=\"48\" cy=\"48\" r=\"30\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-paper-lantern)\"/>\n      <circle cx=\"48\" cy=\"48\" r=\"26\" fill=\"#FAF6ED\"/>\n    "
  },
  {
    "id": "treasure-chest-base",
    "nameKo": "보물상자 아치 돔",
    "nameEn": "Treasure Chest Dome",
    "category": "whimsical",
    "colors": [
      "#E2CCA8",
      "#FFFDF9",
      "#FEE396"
    ],
    "paletteDesc": "크라프트 트렁크 (#E2CCA8) + 크림 (#FFFDF9) + 골드 경첩",
    "recommendedFor": "보상, 코인, 잠금해제, 게임 아이콘",
    "cssClass": "pc-bg-treasure-chest-base",
    "svgContent": "\n      <defs>\n        <filter id=\"bg-sh-treasure-chest-base\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n          <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n        </filter>\n      </defs>\n      <path d=\"M12 36 C12 20 28 10 48 10 C68 10 84 20 84 36 L84 84 L12 84 Z\" fill=\"#E2CCA8\" filter=\"url(#bg-sh-treasure-chest-base)\"/>\n      <path d=\"M16 38 C16 24 30 14 48 14 C66 14 80 24 80 38 L80 80 L16 80 Z\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-treasure-chest-base)\"/>\n      <circle cx=\"48\" cy=\"50\" r=\"26\" fill=\"#FAF6ED\" stroke=\"#FEE396\" stroke-width=\"1.8\"/>\n    "
  },
  {
    "id": "music-score-strip",
    "nameKo": "오선지 멜로디 리본",
    "nameEn": "Music Score Wave",
    "category": "whimsical",
    "colors": [
      "#FFFDF9",
      "#D7CBEB",
      "#3D352E"
    ],
    "paletteDesc": "매트 크림 (#FFFDF9) + 라벤더 음표 + 차콜 오선",
    "recommendedFor": "음악, 플레이어, 음향, 작곡 아이콘",
    "cssClass": "pc-bg-music-score-strip",
    "svgContent": "\n      <defs>\n        <filter id=\"bg-sh-music-score-strip\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n          <feDropShadow dx=\"0\" dy=\"3.5\" stdDeviation=\"2.2\" flood-color=\"#4A3A2A\" flood-opacity=\"0.18\"/>\n        </filter>\n      </defs>\n      <rect x=\"8\" y=\"12\" width=\"80\" height=\"72\" rx=\"12\" fill=\"#D7CBEB\" filter=\"url(#bg-sh-music-score-strip)\"/>\n      <rect x=\"12\" y=\"16\" width=\"72\" height=\"64\" rx=\"8\" fill=\"#FFFDF9\" filter=\"url(#bg-sh-music-score-strip)\"/>\n      <!-- Five Staff Lines -->\n      <line x1=\"16\" y1=\"28\" x2=\"80\" y2=\"28\" stroke=\"#3D352E\" stroke-width=\"1\" opacity=\"0.3\"/>\n      <line x1=\"16\" y1=\"34\" x2=\"80\" y2=\"34\" stroke=\"#3D352E\" stroke-width=\"1\" opacity=\"0.3\"/>\n      <line x1=\"16\" y1=\"40\" x2=\"80\" y2=\"40\" stroke=\"#3D352E\" stroke-width=\"1\" opacity=\"0.3\"/>\n      <line x1=\"16\" y1=\"46\" x2=\"80\" y2=\"46\" stroke=\"#3D352E\" stroke-width=\"1\" opacity=\"0.3\"/>\n      <line x1=\"16\" y1=\"52\" x2=\"80\" y2=\"52\" stroke=\"#3D352E\" stroke-width=\"1\" opacity=\"0.3\"/>\n      <circle cx=\"48\" cy=\"48\" r=\"28\" fill=\"#FAF6ED\" stroke=\"#D7CBEB\" stroke-width=\"1.5\"/>\n    "
  }
];

  let currentCategory = 'all';
  let previewIconId = 'coffee'; // Default preview icon inside background shapes

  // Sample icons to place inside the background shapes for interactive testing
  const sampleIcons = [
    { id: 'coffee', name: '따스한 커피' },
    { id: 'home', name: '홈 & 코티지' },
    { id: 'camera', name: '레트로 카메라' },
    { id: 'heart', name: '접힌 하트' },
    { id: 'gift', name: '선물 상자' },
    { id: 'sun', name: '따스한 햇살' },
    { id: 'sparkles', name: '마법 반짝임' },
    { id: 'mail', name: '편지 봉투' },
    { id: 'search', name: '돋보기' },
    { id: 'palette', name: '물감 팔레트' },
    { id: 'none', name: '아이콘 없음 (배경만)' }
  ];

  document.addEventListener('DOMContentLoaded', () => {
    initBackgroundShowcase();
  });

  function initBackgroundShowcase() {
    renderBackgrounds();

    // Category Buttons
    const catButtons = document.querySelectorAll('.pc-bg-cat-btn');
    catButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        catButtons.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        currentCategory = btn.getAttribute('data-cat') || 'all';
        renderBackgrounds();
      });
    });

    // Icon Selector Dropdown/Buttons
    const iconSelector = document.getElementById('bg-preview-icon-select');
    if (iconSelector) {
      iconSelector.addEventListener('change', (e) => {
        previewIconId = e.target.value;
        renderBackgrounds();
      });
    }

    // Click to Copy Handler
    const container = document.getElementById('background-plates-grid');
    if (container) {
      container.addEventListener('click', (e) => {
        const copySvgBtn = e.target.closest('.pc-bg-copy-svg-btn');
        const copyCssBtn = e.target.closest('.pc-bg-copy-css-btn');
        const card = e.target.closest('.pc-bg-card');
        if (!card) return;

        const shapeId = card.dataset.shape;
        const shapeItem = (window.PAPERCUT_BACKGROUNDS || []).find(b => b.id === shapeId);
        if (!shapeItem) return;

        if (copySvgBtn) {
          const svgCode = card.querySelector('.pc-bg-plate-stage svg')?.outerHTML || '';
          if (navigator.clipboard) {
            navigator.clipboard.writeText(svgCode).then(() => {
              if (typeof showPaperToast === 'function') {
                showPaperToast(`[${shapeItem.nameKo}] 배경 플레이트 SVG 코드가 복사되었습니다!`, 'mint');
              }
            });
          }
        } else if (copyCssBtn) {
          const cssCode = `class="${shapeItem.cssClass}"`;
          if (navigator.clipboard) {
            navigator.clipboard.writeText(cssCode).then(() => {
              if (typeof showPaperToast === 'function') {
                showPaperToast(`[${shapeItem.nameKo}] CSS 클래스(${shapeItem.cssClass})가 복사되었습니다!`, 'buttercup');
              }
            });
          }
        }
      });
    }
  }

  function getMountedIconSvg(iconId, suffix) {
    if (iconId === 'none') return '';
    const rawSvg = typeof window.getPapercutIconSvg === 'function' ? window.getPapercutIconSvg(iconId, suffix || 'bg-plate') : '';
    if (!rawSvg) return '';

    // Mathematically center icon (48x48) precisely at center (24, 24) on the 96x96 topmost paper plate
    const centeredSvg = rawSvg.replace(/<svg\b([^>]*)>/, (m, attrs) => {
      const cleanAttrs = attrs.replace(/\b(width|height|x|y|style)="[^"]*"/g, '').trim();
      return `<svg ${cleanAttrs} x="24" y="24" width="48" height="48" style="width:48px !important; height:48px !important; display:block !important; overflow:visible !important;">`;
    });

    return `
      <g class="pc-mounted-icon" style="transform-origin: 48px 48px;">
        ${centeredSvg}
      </g>
    `;
  }

  function renderBackgrounds() {
    const container = document.getElementById('background-plates-grid');
    const countBadge = document.getElementById('bg-count-badge');
    if (!container) return;

    const all = window.PAPERCUT_BACKGROUNDS || [];
    const filtered = all.filter(item => {
      if (currentCategory === 'all') return true;
      return item.category === currentCategory;
    });

    if (countBadge) {
      countBadge.textContent = `${filtered.length}개 배경 모양`;
    }

    const fragment = document.createDocumentFragment();
    filtered.forEach((item, idx) => {
      const mountedIconSvg = getMountedIconSvg(previewIconId, 'bg-' + item.id);
      const card = document.createElement('div');
      card.className = 'pc-bg-card';
      card.dataset.shape = item.id;

      // Wrap SVG with mounted icon slot
      const fullSvg = `
        <svg class="pc-bg-plate-svg" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          ${item.svgContent}
          ${mountedIconSvg}
        </svg>
      `;

      card.innerHTML = `
        <div class="pc-bg-plate-stage">
          ${fullSvg}
        </div>
        <div class="pc-bg-card-info">
          <div class="pc-bg-card-header">
            <span class="pc-bg-num">#${(idx + 1).toString().padStart(2, '0')}</span>
            <span class="pc-badge pc-badge-${item.category === 'classic' ? 'peach' : item.category === 'nature' ? 'mint' : item.category === 'geo' ? 'lavender' : item.category === 'craft' ? 'buttercup' : 'sky'}" style="font-size: 11px; padding: 2px 8px;">
              ${item.category === 'classic' ? '우표·인장' : item.category === 'nature' ? '자연·조약돌' : item.category === 'geo' ? '아치·다면체' : item.category === 'craft' ? '접지·문구' : '동화·키리가미'}
            </span>
          </div>
          <div class="pc-bg-name-ko">${item.nameKo}</div>
          <div class="pc-bg-name-en">${item.nameEn}</div>
          <div class="pc-bg-palette-desc">${item.paletteDesc}</div>
          <div class="pc-bg-rec-tag">✦ 추천 아이콘: ${item.recommendedFor}</div>
          <div class="pc-bg-action-row">
            <button type="button" class="pc-btn pc-btn-sm pc-bg-copy-svg-btn" title="아이콘이 결합된 SVG 복사">
              <span class="pc-inline-icon is-xs" data-icon="clipboard"></span> <span>SVG 복사</span>
            </button>
            <button type="button" class="pc-btn pc-btn-sm pc-bg-copy-css-btn pc-btn-peach" title="CSS 클래스 복사">
              <span class="pc-inline-icon is-xs" data-icon="price-tag"></span> <span>CSS 클래스</span>
            </button>
          </div>
        </div>
      `;
      fragment.appendChild(card);
    });

    container.innerHTML = '';
    container.appendChild(fragment);
    if (typeof window.hydratePapercutIcons === 'function') {
      window.hydratePapercutIcons(container);
    }
  }

  window.initPapercutBackgroundShowcase = initBackgroundShowcase;
})();
