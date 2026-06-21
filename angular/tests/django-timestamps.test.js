const { test } = require('node:test');
const assert = require('node:assert');
const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

function loadModule(win) {
  global.window = win;
  global.document = win.document;
  delete require.cache[require.resolve('../src/assets/js/django_links.js')];
  return require('../src/assets/js/django_links.js');
}

// 1700000000 = 2023-11-14T22:13:20Z ; uptime must NOT be annotated.
const PRE = `<pre class="prettyprint">{
  <span class="str">"created_time"</span><span class="pun">:</span><span class="pln"> </span><span class="lit">1700000000</span><span class="pun">,</span>
  <span class="str">"uptime"</span><span class="pun">:</span><span class="pln"> </span><span class="lit">1700000000</span><span class="pun">,</span>
  <span class="str">"port"</span><span class="pun">:</span><span class="pln"> </span><span class="lit">443</span>
}</pre>`;

test('annotates timestamp keys, with UTC in title', () => {
  const dom = new JSDOM(`<div class="response-info">${PRE}</div>`);
  const mod = loadModule(dom.window);
  const pre = dom.window.document.querySelector('.prettyprint');
  mod.applyTimestamps(pre);

  const ann = pre.querySelectorAll('span.mist-ts');
  assert.equal(ann.length, 1, 'exactly one annotation');
  assert.match(ann[0].textContent, /→ \d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/);
  assert.equal(ann[0].title, '2023-11-14T22:13:20.000Z');
});

test('last_flapped: annotated when a real epoch, skipped when 0 or the "never" sentinel', () => {
  // 1700000000 = real flap; 0 = never (below range); 62135596800 = Juniper
  // "never" sentinel (above range). Only the real one should annotate.
  const FLAP = `<pre class="prettyprint">{
  <span class="str">"last_flapped"</span><span class="pun">:</span><span class="pln"> </span><span class="lit">1700000000</span><span class="pun">,</span>
  <span class="str">"last_flapped"</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span>
  <span class="str">"last_flapped"</span><span class="pun">:</span><span class="pln"> </span><span class="lit">62135596800</span>
}</pre>`;
  const dom = new JSDOM(`<div class="response-info">${FLAP}</div>`);
  const mod = loadModule(dom.window);
  const pre = dom.window.document.querySelector('.prettyprint');
  mod.applyTimestamps(pre);
  const ann = pre.querySelectorAll('span.mist-ts');
  assert.equal(ann.length, 1, 'only the in-range last_flapped is annotated');
  assert.equal(ann[0].title, '2023-11-14T22:13:20.000Z');
});

test('excludes uptime and non-epoch numbers; idempotent', () => {
  const dom = new JSDOM(`<div class="response-info">${PRE}</div>`);
  const mod = loadModule(dom.window);
  const pre = dom.window.document.querySelector('.prettyprint');
  mod.applyTimestamps(pre);
  mod.applyTimestamps(pre);
  assert.equal(pre.querySelectorAll('span.mist-ts').length, 1);
});

// --- Real-fixture characterization tests ---
// Counts were determined by running the actual code against each fixture.
// A future change to the DOM-walk heuristic that alters any count will fail here.
const EXPECTED_TS_COUNTS = {
  'self-apitokens': 17,
  'device-stats': 14,
  'list-paginated': 18, // 10 + 8 in-range last_flapped (2 sentinel 62135596800 excluded by upper bound)
};

const FIXTURES_DIR = path.join(__dirname, 'fixtures');

for (const [fixtureName, expectedCount] of Object.entries(EXPECTED_TS_COUNTS)) {
  test(`fixture ${fixtureName}: timestamp count locked at ${expectedCount}`, () => {
    const raw = fs.readFileSync(path.join(FIXTURES_DIR, fixtureName + '.raw.html'), 'utf8');
    const dom = new JSDOM(`<div class="response-info">${raw}</div>`);
    const mod = loadModule(dom.window);
    const pre = dom.window.document.querySelector('.prettyprint');
    mod.applyTimestamps(pre);
    const spans = pre.querySelectorAll('span.mist-ts');

    assert.equal(spans.length, expectedCount,
      `expected ${expectedCount} mist-ts spans in ${fixtureName}, got ${spans.length}`);

    const ISO_RE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
    const TEXT_RE = /^ → \d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;
    const TS_MIN = 946684800;
    const TS_MAX = 4102444800;

    for (let i = 0; i < spans.length; i++) {
      const s = spans[i];
      assert.match(s.title, ISO_RE,
        `span[${i}] title not ISO-8601 UTC in ${fixtureName}: ${s.title}`);
      assert.match(s.textContent, TEXT_RE,
        `span[${i}] textContent malformed in ${fixtureName}: ${JSON.stringify(s.textContent)}`);
      const epoch = new Date(s.title).getTime() / 1000;
      assert.ok(epoch >= TS_MIN && epoch <= TS_MAX,
        `span[${i}] decoded epoch ${epoch} out of range in ${fixtureName}`);
    }
  });
}
