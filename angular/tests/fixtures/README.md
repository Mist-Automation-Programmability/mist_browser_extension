# DRF fixtures (characterization)

These capture the **current** ID-Links behavior on real Mist DRF (browsable-API)
pages, so the `django_links.js` refactor can be proven behavior-preserving.

Each page contributes a pair:
- `<name>.raw.html` — the `.prettyprint` block **before** any augmentation
  (ID Links toggle OFF).
- `<name>.expected.json` — `{ url, links: [{ text, href }] }` extracted from the
  page **with** the current ID Links toggle ON (the oracle).

## Capture procedure

With the current extension loaded:

1. **Raw** — ID Links **OFF** (Tools toggle off), reload the DRF page, then in the
   page console:
   ```js
   copy(document.querySelector('.response-info .prettyprint').outerHTML)
   ```
   Save into `<name>.raw.html`. (Renderer is google-code-prettify: strings —
   keys and values — are `span.str`, numbers are `span.lit`.)

2. **Oracle** — ID Links **ON**, reload, then:
   ```js
   copy(JSON.stringify({
     url: location.href,
     links: [...document.querySelectorAll('.response-info .prettyprint a')]
       .map(a => ({ text: a.textContent, href: a.getAttribute('href') }))
   }, null, 2))
   ```
   Save into `<name>.expected.json`.

## Pages to capture

- `self-apitokens` — `/api/v1/self/apitokens` (required)
- `device-stats` — `/api/v1/sites/:id/stats/devices/:id` (exercises the `stats` URL branch)
- `list-paginated` — any list with `results` + `next` (exercises pagination linking)
