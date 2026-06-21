# Privacy Policy — Mist Extension

**Last updated: 21 June 2026**

This Privacy Policy describes how the **Mist Extension** ("the Extension") — an
open-source browser extension for Chrome, Firefox, Safari, and other supported
browsers — handles information. The Extension is a developer companion tool for
the Juniper Mist™ dashboard and APIs.

## Summary

**The Extension does not collect, store, sell, or transmit your personal data to
the developer or to any third party.** It runs entirely in your browser. The only
network communication it performs is:

1. Requests to **your own Juniper Mist / Mist cloud**, using the credentials you
   are already signed in with, to show you information you already have access to
   (sessions, API usage, API tokens) and to perform actions you explicitly
   request.
2. A request to **GitHub** to check whether a newer version of the Extension is
   available.

There is **no analytics, no telemetry, no advertising, and no tracking** of any
kind.

## What the Extension accesses, and why

### Juniper Mist session cookies
On supported Mist/Juniper domains, the Extension reads your existing session
cookies (such as `csrftoken` and `sessionid`) to:
- detect which Mist clouds you are signed in to, and
- authenticate API requests to those clouds on your behalf.

These cookies are used **locally, in your browser**, and are only ever sent back
to the Mist/Juniper cloud they belong to — the same service that issued them.
They are **never** sent to the developer or any third party, and the Extension
does not store them.

### Requests to your Juniper Mist cloud
Using your existing session, the Extension makes API calls to your Mist/Juniper
cloud to display information (e.g. logged-in account, API request usage, API
tokens) and to perform actions **you initiate** (e.g. creating or deleting an API
token). These requests go only to the official Mist/Juniper API endpoints for the
cloud you are using. The data returned is shown to you and is **not** retained by
the Extension or sent anywhere else.

Supported Mist/Juniper domains: `*.mist.com`, `*.mistsys.com`,
`*.mist-federal.com`, and `*.ai.juniper.net`.

### Local settings storage
The Extension stores a small amount of data in your browser's local extension
storage:
- your feature preferences (e.g. ID-link generation, timestamp conversion, the
  Copy-JSON button), and
- a temporary record of an API action you asked it to perform.

This data stays in your browser, is used only to make the Extension work as you
configured it, and is removed when you uninstall the Extension or clear its data.
It is never transmitted off your device.

### Clipboard
When you click a copy control (for example, "Copy JSON"), the Extension writes
the selected content to your system clipboard. It does **not** read your
clipboard.

### Update check (GitHub)
The Extension may request release information from GitHub
(`https://api.github.com/.../releases/latest`) to tell you when a newer version
is available. This is a standard, unauthenticated request and contains no
personal data about you. As with any web request, GitHub may process technical
information (such as your IP address) under [GitHub's own privacy
statement](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement).

## What the Extension does **not** do

- It does **not** collect or transmit any personal data to the developer.
- It does **not** use analytics, telemetry, crash reporting, or tracking.
- It does **not** show advertising.
- It does **not** sell or share your data with anyone.
- It does **not** read pages or data outside the supported Mist/Juniper domains
  for any purpose other than the features described above.

## Browser permissions

The Extension requests only the permissions it needs to function:

| Permission | Why it is needed |
|---|---|
| `cookies` (on Mist/Juniper domains) | Detect your Mist sessions and authenticate API calls to your own cloud. |
| `tabs` | Open Mist API/dashboard pages and coordinate actions you request. |
| `storage` | Save your feature preferences in your browser. |
| `clipboardWrite` | Copy content (e.g. a JSON response) to your clipboard when you click a copy control. |
| Host access to Mist/Juniper domains | Read sessions and make API requests on those domains only. |

## Third-party services

- **Juniper Mist.** The Extension interacts with the Juniper Mist service you
  already use. Your Mist account and the data in it are governed by Juniper's own
  privacy policy and terms, not by this Extension.
- **GitHub.** Used only for the optional update check described above.

The Extension is an independent, open-source project and is not an official
Juniper Networks product.

## Data retention

The developer does not receive or retain any of your data. Settings stored by the
Extension remain in your browser until you remove the Extension or clear its
storage.

## Children's privacy

The Extension is a tool for network and software professionals and is not
directed to children. It does not knowingly collect any information from anyone,
including children under 13.

## Your rights

Because the Extension does not collect or hold your personal data, there is no
personal data for the developer to access, correct, export, or delete. Any data
the Extension stores lives only in your own browser and is fully under your
control (you can remove it at any time by uninstalling the Extension or clearing
its storage).

## Changes to this policy

This policy may be updated as the Extension evolves. Material changes will be
reflected by updating the "Last updated" date above and publishing the revised
policy at the same location.

## Contact

Questions about this policy or the Extension can be raised at:
- GitHub: <https://github.com/tmunzer/mist_browser_extension/issues>
