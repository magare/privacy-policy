# SnapGlade — Privacy Policy

**Effective date:** 2026-06-23
**Last updated:** 2026-08-08

SnapGlade ("the extension") is a Chrome/Edge/Brave/Firefox browser extension for
capturing, annotating, and beautifying screenshots. This policy explains exactly
what data the extension touches and where it goes.

**Summary:** SnapGlade is built to work on your device. By default, nothing you
capture or create ever leaves your browser. The only time data leaves your
device is if **you** explicitly connect Google Drive backup — and even then it
goes to a private folder in **your own** Google Drive, never to us. We run no
servers, no analytics, and no ads.

---

## What the extension stores, and where

| Data | Where it lives | Leaves your device? |
| --- | --- | --- |
| Screenshots & screen recordings you capture | Your browser's IndexedDB | No (unless you enable Drive backup) |
| Editor projects (layers, annotations, styling) | Your browser's IndexedDB | No (unless you enable Drive backup) |
| Preferences, brand kit, saved styles, templates | `chrome.storage.sync` / `chrome.storage.local` | Only via your browser's own account sync (Google/Mozilla), if you have it enabled |
| Diagnostics/error log (opt-in) | `chrome.storage.local` | No — local only, and off unless you turn it on |
| Google Drive auth token (only if you connect Drive) | Managed by the browser's identity system | Used only to talk to Google Drive on your behalf |
| Optional MCP requests and generated assets | Memory in a companion process on `127.0.0.1` | No — loopback traffic stays on your device |

We, the developer, operate **no backend servers**. The extension never sends
your screenshots, recordings, projects, settings, or any usage/analytics data to
us or to any third party we control.

## Optional local MCP automation

Advanced users may separately install and run the open-source `snapglade-mcp`
companion. While that process is running, an extension-owned editor page can
connect to it over `127.0.0.1`. The bridge accepts extension registration only,
uses a fresh random session token, and keeps generated files in process memory.
It can access or change SnapGlade data only when the user's MCP client invokes a
SnapGlade tool. Local input paths are read by the companion process and their
bytes are passed over loopback; they are not uploaded to the developer.

## Page content access

To take screenshots and recordings, the extension reads the content of the tab
you choose to capture (via `scripting`, `tabCapture`, and host
access). This happens only for the page and the moment you initiate a capture or
recording. Captured image/video data is processed in your browser and stored
locally as described above. It is never transmitted to the developer.

On-device face detection (bundled cascade) and manual redaction tools run
entirely in your browser to help you redact private content. No image data is
sent anywhere for this.

## Optional Google Drive backup

Google Drive backup is **off by default** and only activates when you click
"Connect Google Drive" on the options page.

- It uses the `https://www.googleapis.com/auth/drive.appdata` scope. This scope
  can **only** read and write a hidden, application-private folder
  (`appDataFolder`) that belongs to this extension inside your own Google Drive.
  It **cannot** see, read, or modify any of your other Drive files.
- When enabled, the extension uploads your saved projects (the editable document
  plus the screenshot image bytes) to that hidden folder so your work can follow
  you across your own devices.
- This data resides in **your** Google Drive account. The developer has no access
  to it and operates no server in between. Google's handling of data in your
  Drive is governed by [Google's Privacy Policy](https://policies.google.com/privacy).
- You can disconnect at any time from the options page, which revokes the token.
  You can also delete the app data folder from your Google account at any time.

SnapGlade's use of information received from Google APIs adheres to the
[Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy),
including the Limited Use requirements. We only use Drive access to provide the
backup/sync feature you explicitly enabled; we do not transfer, sell, or use this
data for advertising or any other purpose.

## What we do NOT do

- We do **not** collect or transmit personal information to ourselves.
- We do **not** use analytics, telemetry, tracking, or advertising.
- We do **not** sell or share your data with third parties.
- We do **not** use your data to train any model.

## Permissions, briefly

`scripting`, `tabCapture`, host access — capture the page you choose.
`downloads` — save exported images/files to your computer.
`clipboardWrite` — copy a screenshot to your clipboard.
`storage` — save your projects, captures, and settings locally.
`contextMenus` — right-click capture entries.
`offscreen` — encode recordings/GIFs in the background.
`identity` + `oauth2` — only to authorize the optional Google Drive backup.
Loopback host access — connect to an optional MCP companion running on the
user's own computer; SnapGlade never exposes or connects to a public MCP host.

## Children

SnapGlade is a general-purpose productivity tool and is not directed at children.

## Changes to this policy

If this policy changes, the "Last updated" date above will change and the new
version will be published at the same URL.

## Contact

Questions about this policy: **vilaslmagare@gmail.com**

> _Maintainer note: confirm the contact email above before publishing, and host
> this file at a public URL (e.g. GitHub Pages or the raw GitHub link) — the
> Chrome Web Store listing requires a privacy-policy URL._
