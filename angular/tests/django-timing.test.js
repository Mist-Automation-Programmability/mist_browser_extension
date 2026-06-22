const { test } = require('node:test');
const assert = require('node:assert');
const { JSDOM } = require('jsdom');

// runAugment uses the global document, MutationObserver, and setTimeout.
function loadModule(win) {
  global.window = win;
  global.document = win.document;
  global.MutationObserver = win.MutationObserver;
  delete require.cache[require.resolve('../src/assets/js/django_links.js')];
  return require('../src/assets/js/django_links.js');
}

// The Mist page's syntax highlighter wraps the JSON in str/lit spans. Before it
// runs, .prettyprint holds plain text — which is what our content script can see
// if it executes first (the Safari timing race).
const HIGHLIGHTED =
  '<span class="meta nocode">HTTP 200 OK</span>\n\n{ ' +
  '<span class="str">"created_time"</span><span class="pun">:</span> <span class="lit">1700000000</span> }';

test('runAugment defers and re-applies once highlight tokens appear (timing race)', async () => {
  const dom = new JSDOM(
    '<div class="response-info"><pre class="prettyprint">HTTP 200 OK\n\n{ "created_time": 1700000000 }</pre></div>',
    { url: 'https://api.gc1.mist.com/api/v1/self/apitokens' });
  const mod = loadModule(dom.window);
  const pre = dom.window.document.querySelector('.prettyprint');

  // Highlighter has not run yet: no str/lit tokens, so nothing applies.
  mod.runAugment({ id_links: false, ts_human: true, copy_json: false });
  assert.equal(pre.querySelectorAll('span.mist-ts').length, 0, 'nothing applied before tokens exist');

  // Highlighter runs and wraps the JSON in tokens.
  pre.innerHTML = HIGHLIGHTED;

  // Let the MutationObserver fire.
  await new Promise((r) => setTimeout(r, 50));
  assert.equal(pre.querySelectorAll('span.mist-ts').length, 1, 'applied after highlight tokens appeared');
});

test('runAugment applies synchronously when tokens are already present', () => {
  const dom = new JSDOM(
    `<div class="response-info"><pre class="prettyprint">${HIGHLIGHTED}</pre></div>`,
    { url: 'https://api.gc1.mist.com/api/v1/self/apitokens' });
  const mod = loadModule(dom.window);
  const pre = dom.window.document.querySelector('.prettyprint');

  mod.runAugment({ id_links: false, ts_human: true, copy_json: false });
  assert.equal(pre.querySelectorAll('span.mist-ts').length, 1, 'applied synchronously when tokens present');
});
