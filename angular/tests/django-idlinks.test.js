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
  const parsed = mod.parseResponse(pre);
  assert.ok(parsed, 'response parsed');
  const map = mod.buildIdMap(parsed.data);
  mod.applyIdLinks(pre, map);
  const first = pre.querySelectorAll('a').length;
  mod.applyIdLinks(pre, map);
  assert.equal(pre.querySelectorAll('a').length, first);
});

test('buildIdMap links privilege IDs on /self (which has no top-level org_id)', () => {
  const dom = new JSDOM('<div></div>', { url: 'https://api.gc1.mist.com/api/v1/self' });
  const mod = loadModule(dom.window);
  const map = mod.buildIdMap({
    email: 'x@y.z',
    privileges: [
      { scope: 'org', org_id: '05007bbb-99c4-4ed3-9fdc-5369128d14a0' },
      { scope: 'site', org_id: '05007bbb-99c4-4ed3-9fdc-5369128d14a0', site_id: '2bf12442-1558-41bd-849e-738d6d4aa1a3' },
      { scope: 'sitegroup', org_id: '05007bbb-99c4-4ed3-9fdc-5369128d14a0', sitegroup_id: 'aaaa1111-2222-3333-4444-555566667777' },
    ],
  });
  assert.equal(map['05007bbb-99c4-4ed3-9fdc-5369128d14a0'],
    'https://api.gc1.mist.com/api/v1/orgs/05007bbb-99c4-4ed3-9fdc-5369128d14a0');
  assert.equal(map['2bf12442-1558-41bd-849e-738d6d4aa1a3'],
    'https://api.gc1.mist.com/api/v1/sites/2bf12442-1558-41bd-849e-738d6d4aa1a3');
  assert.equal(map['aaaa1111-2222-3333-4444-555566667777'],
    'https://api.gc1.mist.com/api/v1/orgs/05007bbb-99c4-4ed3-9fdc-5369128d14a0/sitegroups/aaaa1111-2222-3333-4444-555566667777');
});
