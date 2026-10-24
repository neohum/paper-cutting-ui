import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();
const logoPath = path.join(projectRoot, 'logo.svg');

test('PaperCut UI 3D Layered Papercut Logo SVG Suite', async (t) => {
  assert.ok(fs.existsSync(logoPath), 'logo.svg must exist at project root');
  const svgContent = fs.readFileSync(logoPath, 'utf-8');

  await t.test('Basic SVG ViewBox and Dimensions', () => {
    assert.match(svgContent, /viewBox="0 0 512 120"/, 'viewBox must be "0 0 512 120"');
    assert.match(svgContent, /width="512"/, 'width must be 512');
    assert.match(svgContent, /height="120"/, 'height must be 120');
  });

  await t.test('AC-1: 3-Tier Burnt Umber Shadow Filters & 0.88px Knife-Edge Rim Light', () => {
    // 1. ps-logo-base (Tier 1 Deep Shadow)
    assert.ok(svgContent.includes('id="ps-logo-base"'), 'Must define ps-logo-base filter');
    assert.match(
      svgContent,
      /<filter[^>]*id="ps-logo-base"[\s\S]*?<feDropShadow[^>]*flood-color="#2E1E14"[^>]*flood-opacity="0\.48"/,
      'ps-logo-base must have 48% burnt umber contact shadow'
    );
    assert.match(
      svgContent,
      /<filter[^>]*id="ps-logo-base"[\s\S]*?<feDropShadow[^>]*flood-color="#FFFFFF"[^>]*flood-opacity="0\.95"/,
      'ps-logo-base must have 95% white top rim reflection'
    );

    // 2. ps-logo-mid (Tier 2 Mid Shadow)
    assert.ok(svgContent.includes('id="ps-logo-mid"'), 'Must define ps-logo-mid filter');
    assert.match(
      svgContent,
      /<filter[^>]*id="ps-logo-mid"[\s\S]*?<feDropShadow[^>]*flood-color="#2E1E14"[^>]*flood-opacity="0\.45"/,
      'ps-logo-mid must have 45% burnt umber contact shadow'
    );

    // 3. ps-logo-top (Tier 3 Subtle Shadow)
    assert.ok(svgContent.includes('id="ps-logo-top"'), 'Must define ps-logo-top filter');
    assert.match(
      svgContent,
      /<filter[^>]*id="ps-logo-top"[\s\S]*?<feDropShadow[^>]*flood-color="#2E1E14"[^>]*flood-opacity="0\.40"/,
      'ps-logo-top must have 40% burnt umber shadow'
    );

    // 4. ps-logo-scissors (Craft Scissors Stepped Shadow)
    assert.ok(svgContent.includes('id="ps-logo-scissors"'), 'Must define ps-logo-scissors filter');

    // 5. 0.88px Pure White Knife-Edge Rim Light
    const rimMatches = svgContent.match(/stroke="#FFFFFF"[^>]*stroke-width="0\.88"|stroke-width="0\.88"[^>]*stroke="#FFFFFF"/g);
    assert.ok(rimMatches && rimMatches.length >= 10, 'Must have at least 10 occurrences of 0.88px pure white knife-edge rim lights');
  });

  await t.test('AC-2: "PaperCut" Wordmark 3D Layered Paper Structure (P, a, p, e, r, C, u, t)', () => {
    const letters = ['P', 'a', 'p', 'e', 'r', 'C', 'u', 't'];

    for (const letter of letters) {
      assert.ok(
        svgContent.includes(`id="pc-letter-${letter}"`),
        `Wordmark must contain layered glyph group id="pc-letter-${letter}"`
      );
    }

    // Verify 3-tier paper layers for each letter
    // 1) Kraft Underlays with translate offset and ps-logo-base
    const underlayCount = (svgContent.match(/class="pc-glyph-underlay"/g) || []).length;
    assert.strictEqual(underlayCount, 8, 'All 8 letters must have a kraft underlay sheet');
    assert.ok(svgContent.includes('fill="#D9CBB8"'), 'Underlays must use warm kraft tone #D9CBB8');
    assert.ok(svgContent.includes('transform="translate(1.2, 1.8)"'), 'Underlays must have (1.2, 1.8) paper offset');

    // 2) Velvet Ink Main Cardstock with 0.88px White Rim Light
    const mainCount = (svgContent.match(/class="pc-glyph-main"/g) || []).length;
    assert.strictEqual(mainCount, 8, 'All 8 letters must have a velvet ink main cardstock layer');
    assert.ok(svgContent.includes('fill="#382E26"'), 'Main letters must use velvet ink color #382E26');

    // 3) Kirigami Inlays & Paper Accents
    const inlayCount = (svgContent.match(/class="pc-glyph-inlay"/g) || []).length;
    assert.strictEqual(inlayCount, 8, 'All 8 letters must have a kirigami inlay/cut layer');

    // Specific kirigami accents
    // P: Peach (#F8B49B) loop inlay
    assert.match(
      svgContent,
      /<g id="pc-letter-P"[\s\S]*?fill="#F8B49B"/,
      'Letter P must contain Peach #F8B49B inner loop paper inlay'
    );
    // a: Mint (#A3D8C3) bowl inlay
    assert.match(
      svgContent,
      /<g id="pc-letter-a"[\s\S]*?fill="#A3D8C3"/,
      'Letter a must contain Mint #A3D8C3 inner bowl paper inlay'
    );
    // p: Sky (#BDE0EA) descender inlay
    assert.match(
      svgContent,
      /<g id="pc-letter-p"[\s\S]*?fill="#BDE0EA"/,
      'Letter p must contain Sky #BDE0EA descender paper ribbon inlay'
    );
    // e: Lavender (#D7CBEB) tongue fold inlay
    assert.match(
      svgContent,
      /<g id="pc-letter-e"[\s\S]*?fill="#D7CBEB"/,
      'Letter e must contain Lavender #D7CBEB tongue fold paper inlay'
    );
    // r: Buttercup (#FEE396) paper curl terminal
    assert.match(
      svgContent,
      /<g id="pc-letter-r"[\s\S]*?fill="#FEE396"/,
      'Letter r must contain Buttercup #FEE396 paper curl terminal'
    );
    // C: Chiseled carved curved paper arc
    assert.match(
      svgContent,
      /<g id="pc-letter-C"[\s\S]*?stroke="#F8B49B"/,
      'Letter C must contain chiseled carved curved paper arc'
    );
    // u: Mint (#A3D8C3) bottom curve inlay
    assert.match(
      svgContent,
      /<g id="pc-letter-u"[\s\S]*?fill="#A3D8C3"/,
      'Letter u must contain Mint #A3D8C3 bottom curve paper inlay'
    );
    // t: Chisel cut notch & score line
    assert.match(
      svgContent,
      /<g id="pc-letter-t"[\s\S]*?polygon[\s\S]*?fill="#FEE396"/,
      'Letter t must contain 45-degree chisel cut notch and score line'
    );
  });

  await t.test('AC-3: "UI" 2-Sheet Cardstock Pill Badge & Sewing Perforation', () => {
    assert.ok(svgContent.includes('id="pc-logo-badge"'), 'Must have pc-logo-badge group');

    // Layer 1: Peach #F8B49B Backing Sheet
    assert.match(
      svgContent,
      /<rect[^>]*id="pc-badge-sheet-1"[^>]*fill="#F8B49B"[^>]*filter="url\(#ps-logo-base\)"/,
      'Badge Layer 1 must be Peach #F8B49B pill with ps-logo-base filter'
    );

    // Layer 2: Mint #BBD5B8 Top Cardstock Sheet with 1.2px White Border
    assert.match(
      svgContent,
      /<rect[^>]*id="pc-badge-sheet-2"[^>]*stroke="#FFFFFF"[^>]*stroke-width="1\.2"[^>]*filter="url\(#ps-logo-mid\)"/,
      'Badge Layer 2 must be Mint top cardstock with 1.2px white border and ps-logo-mid filter'
    );

    // Layer 3: Dashed Perforated Sewing Stitch Line
    assert.match(
      svgContent,
      /<rect[^>]*id="pc-badge-stitching"[^>]*stroke-dasharray="3 2"/,
      'Badge Layer 3 must have dashed sewing perforation line (stroke-dasharray="3 2")'
    );

    // Layer 4: Pure White Cream Cardstock (#FFFDF9) Letters 'UI'
    assert.match(
      svgContent,
      /<path[^>]*id="pc-badge-letter-u"[^>]*fill="#FFFDF9"[^>]*filter="url\(#ps-logo-top\)"/,
      'Badge Letter U must be pure white cream cardstock #FFFDF9 with ps-logo-top filter'
    );
    assert.match(
      svgContent,
      /<path[^>]*id="pc-badge-letter-i"[^>]*fill="#FFFDF9"[^>]*filter="url\(#ps-logo-top\)"/,
      'Badge Letter I must be pure white cream cardstock #FFFDF9 with ps-logo-top filter'
    );
  });

  await t.test('Left Postage Stamp Emblem & Subtitle Harmonization', () => {
    // Emblem Base
    assert.match(
      svgContent,
      /<path[^>]*id="pc-emblem-base"[^>]*fill="#BBD5B8"[^>]*filter="url\(#ps-logo-base\)"/,
      'Emblem Layer 1 must be Mint #BBD5B8 postage stamp with ps-logo-base filter'
    );

    // Emblem Scissors Motif
    assert.match(
      svgContent,
      /<g[^>]*id="pc-emblem-scissors"[^>]*filter="url\(#ps-logo-scissors\)"/,
      'Emblem scissors motif must have ps-logo-scissors filter'
    );

    // 4 Swatch Diamond Studs
    assert.ok(svgContent.includes('id="pc-stud-mint"'), 'Must have mint diamond stud');
    assert.ok(svgContent.includes('id="pc-stud-peach"'), 'Must have peach diamond stud');
    assert.ok(svgContent.includes('id="pc-stud-lavender"'), 'Must have lavender diamond stud');
    assert.ok(svgContent.includes('id="pc-stud-buttercup"'), 'Must have buttercup diamond stud');

    // Subtitle Text
    assert.ok(
      svgContent.includes('LAYERED CRAFT DESIGN SYSTEM'),
      'Must contain subtitle text "LAYERED CRAFT DESIGN SYSTEM"'
    );
  });
});
