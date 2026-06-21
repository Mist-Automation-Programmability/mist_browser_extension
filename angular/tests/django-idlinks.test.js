const { test } = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');
const { JSDOM } = require('jsdom');

const FX = path.join(__dirname, 'fixtures');
const sortByText = (a, b) => a.text.localeCompare(b.text) || a.href.localeCompare(b.href);

function loadModule(win) {
  global.window = win;
  global.document = win.document;
  delete require.cache[require.resolve('../src/assets/js/django_links.js')];
  return require('../src/assets/js/django_links.js');
}

function fixturePairs() {
  return fs.readdirSync(FX)
    .filter(f => f.endsWith('.expected.json'))
    .map(f => f.slice(0, -'.expected.json'.length));
}

// One characterization test per captured fixture pair — locks results.next,
// stats URL handling, and large-list behavior, not just self/apitokens.
for (const name of fixturePairs()) {
  test(`${name}: id links reproduced through the new pass`, () => {
    const raw = fs.readFileSync(path.join(FX, `${name}.raw.html`), 'utf8');
    const exp = JSON.parse(fs.readFileSync(path.join(FX, `${name}.expected.json`), 'utf8'));
    const dom = new JSDOM(`<div class="response-info">${raw}</div>`, { url: exp.url });
    const mod = loadModule(dom.window);

    const pre = dom.window.document.querySelector('.prettyprint');
    const parsed = mod.parseResponse(pre);
    assert.ok(parsed, 'response parsed');
    mod.applyIdLinks(pre, mod.buildIdMap(parsed.data));

    const got = [...pre.querySelectorAll('a')]
      .map(a => ({ text: a.textContent, href: a.getAttribute('href') }))
      .sort(sortByText);
    assert.deepEqual(got, exp.links.slice().sort(sortByText));
  });
}

test('applyIdLinks is idempotent (second run adds no anchors)', () => {
  const raw = fs.readFileSync(path.join(FX, 'self-apitokens.raw.html'), 'utf8');
  const exp = JSON.parse(fs.readFileSync(path.join(FX, 'self-apitokens.expected.json'), 'utf8'));
  const dom = new JSDOM(`<div class="response-info">${raw}</div>`, { url: exp.url });
  const mod = loadModule(dom.window);
  const pre = dom.window.document.querySelector('.prettyprint');
  const map = mod.buildIdMap(mod.parseResponse(pre).data);
  mod.applyIdLinks(pre, map);
  const first = pre.querySelectorAll('a').length;
  mod.applyIdLinks(pre, map);
  assert.equal(pre.querySelectorAll('a').length, first);
});
