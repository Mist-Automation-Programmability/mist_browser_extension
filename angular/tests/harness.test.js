const { test } = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');
const { JSDOM } = require('jsdom');

test('jsdom loads the raw fixture and finds the prettyprint block', () => {
  const raw = fs.readFileSync(
    path.join(__dirname, 'fixtures', 'self-apitokens.raw.html'), 'utf8');
  const dom = new JSDOM(`<div class="response-info">${raw}</div>`);
  const pre = dom.window.document.querySelector('.prettyprint');
  assert.ok(pre, 'prettyprint element present');
  assert.ok(pre.textContent.includes('{'), 'fixture contains JSON');
});
