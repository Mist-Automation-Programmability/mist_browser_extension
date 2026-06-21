const { test } = require('node:test');
const assert = require('node:assert');
const { JSDOM } = require('jsdom');

function loadModule(win) {
  global.window = win;
  global.document = win.document;
  delete require.cache[require.resolve('../src/assets/js/django_links.js')];
  return require('../src/assets/js/django_links.js');
}

const PRE = `<pre class="prettyprint">{
  <span class="str">"id"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"abc"</span><span class="pun">,</span>
  <span class="str">"created_time"</span><span class="pun">:</span><span class="pln"> </span><span class="lit">1700000000</span>
}</pre>`;

test('copy source is the pristine raw JSON, captured before mutation', () => {
  const dom = new JSDOM(`<div class="response-info">${PRE}</div>`);
  const mod = loadModule(dom.window);
  const pre = dom.window.document.querySelector('.prettyprint');
  const raw = mod.parseResponse(pre).raw;
  // mutate the DOM the way the augmenters would
  mod.applyTimestamps(pre);
  // raw stays valid JSON regardless of annotations
  assert.doesNotThrow(() => JSON.parse(raw));
  assert.equal(JSON.parse(raw).created_time, 1700000000);
});

test('Copy button injected once into the response container', () => {
  const dom = new JSDOM(`<div class="response-info">${PRE}</div>`);
  const mod = loadModule(dom.window);
  const info = dom.window.document.querySelector('.response-info');
  const pre = info.querySelector('.prettyprint');
  const raw = mod.parseResponse(pre).raw;
  mod.setupCopyButton(pre, raw, info);
  mod.setupCopyButton(pre, raw, info);
  assert.equal(info.querySelectorAll('button.mist-copy-json').length, 1);
});
