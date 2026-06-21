const { test } = require('node:test');
const assert = require('node:assert');
const { JSDOM } = require('jsdom');

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

test('excludes uptime and non-epoch numbers; idempotent', () => {
  const dom = new JSDOM(`<div class="response-info">${PRE}</div>`);
  const mod = loadModule(dom.window);
  const pre = dom.window.document.querySelector('.prettyprint');
  mod.applyTimestamps(pre);
  mod.applyTimestamps(pre);
  assert.equal(pre.querySelectorAll('span.mist-ts').length, 1);
});
