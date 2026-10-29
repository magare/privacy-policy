# Privacy Policy for Ollama Sidekick

**Last Updated: October 29, 2026**

## Model context and capability data

Ollama Sidekick sends only the context assembled for the request you make to
the endpoint configured for the selected model. Complete local chat history may
be represented by a smaller rolling summary in an outbound request; the
original messages and summary state remain in the browser's local extension
storage.

Capability discovery contacts only configured Ollama or OpenAI-compatible
model endpoints. Discovery requests contain no chat, page, screenshot, or
summary content. Context diagnostics contain token counts and model-limit
provenance only; they do not store prompts, page content, summaries,
screenshots, API keys, or full conversation history.

## Overview

Ollama Sidekick is a browser extension that provides a chat interface to local Ollama models and cloud model services that you explicitly configure.

## Our Privacy Commitment

**Ollama Sidekick does not operate analytics, advertising, tracking, or developer-owned data servers.**

Local Ollama use stays on the endpoint you configure. If you add a cloud model connection, prompts, enabled page context, conversation history needed for the request, and optional screenshots are sent directly to that provider under its own privacy policy.

Page context is enabled by default and can be turned off with the context
toggle before sending a request. Agent Mode is optional and uses observations
from the pages needed for the task you start.

The extension does not receive persistent access to every website when it is
installed. One-off current-page features can use Chrome's temporary `activeTab`
grant. When you enable page context, start Agent Mode, or choose to enable all
websites, Chrome may ask for optional access to ordinary HTTP and HTTPS sites so
the feature can continue after navigation. You can deny or later revoke this
access. Configured cloud providers and Agent Mode's site approvals also use
separate, exact-origin checks; broad Chrome access does not bypass those checks.

## Data Handling

### Data the Extension Developer Does Not Collect

- Personal information sent to developer-owned systems
- Browsing history sent to developer-owned systems
- Page content sent to developer-owned systems
- Chat conversations sent to developer-owned systems
- Usage analytics
- Cookies or tracking data
- IP addresses
- Device identifiers

### Data Stored Locally on Your Device

The following data is stored on your device using Chrome's extension storage
APIs, in the location shown for each row:

| Data Type                                       | Purpose                                        | Storage Location                     |
| ----------------------------------------------- | ---------------------------------------------- | ------------------------------------ |
| Chat history                                    | Save your conversations                        | Local browser storage                |
| Selected AI model                               | Remember your preference                       | Local browser storage                |
| Context toggle state                            | Remember your preference                       | Local browser storage                |
| Ollama server URL                               | Connect to your local server                   | Local browser storage                |
| Cloud connection name, URL, and model IDs       | Connect to a provider you choose               | Local browser storage                |
| Cloud provider API key                          | Authenticate to a provider you choose          | Local browser storage (not synced)   |
| Per-model capability values and sources         | Keep requests within model limits              | Local browser storage                |
| Rolling outbound summaries                      | Compact long chats safely                      | Local browser storage                |
| Brain mode page indexes                         | Search pages you choose to index               | Local browser storage                |
| Token-count diagnostics                         | Evaluate budget estimates                      | Local browser storage                |
| Agent origins approved by the user              | Remember permitted task sites                  | Local browser storage                |
| Redacted Agent Mode checkpoints and research    | Resume tasks and verify research results       | Local browser storage, up to 30 days |
| Structured Agent Mode event and receipt records | Audit actions, approvals, and verified effects | Local browser storage, up to 30 days |

This stored configuration is not sent to the extension developer. API keys are
kept in a dedicated local storage entry (not in the cloud-connection metadata
list), are not synced, and are never exposed to webpage content scripts.
Removing a cloud connection or clearing extension data removes the stored key.

In split incognito mode, chats and Agent Mode checkpoints remain in memory or
session storage for that incognito context. They neither read from nor write to
ordinary persistent chat/run history.

Agent Mode durable records are bounded, redacted before storage, and
automatically expire. A checkpoint retains the user-supplied task contract and,
when needed for safe recovery, the exact pending action and approval binding.
The compensation transaction format can retain a bounded, integrity-sealed
inverse only when an exact semantic inverse survives redaction and can be
verified against the same origin, account, document, URL, and after-state.
Generic DOM events and browser navigation do not currently meet that standard,
so they are not persisted or offered as Undo authority. If a site-specific
inverse is added later, a successful Undo will mark its one-owner source record
consumed rather than creating background authority.
To support long research tasks, a checkpoint may include bounded page excerpts,
source URLs and titles, and notes gathered during the task. The extension
attempts to redact recognized credentials, payment information, and other
sensitive patterns before persistence, but automated redaction cannot identify
every sensitive value. Screenshots are omitted from durable agent checkpoints.
Task-scoped memory can be inspected, corrected, exported, deleted, or disabled
from the active task UI. Deleting a chat also deletes its durable Agent Mode
runs and active-run pointers; a deletion tombstone prevents an in-flight
cancellation from recreating those records.

The pages or messages you choose to process can contain personal, financial,
health, location, communication, or other sensitive information. They may also
contain URLs or titles of pages visited during a task. The extension processes
the content needed for the features you invoke and may send that content to
your selected model provider as described above; choose your pages and provider
accordingly.

Chrome separately manages host-permission grants. Users can review or revoke
site access in Chrome's extension settings or from Sidekick's Diagnostics
panel. Revoking a Chrome grant does not transmit anything to the extension
developer.

### Page Content Processing

When you use Ollama Sidekick:

1. You invoke a current-page or Agent Mode feature.
2. Chrome must have granted temporary `activeTab` access or optional access
   covering that site.
3. The packaged content script is injected on demand; it is not installed as a
   passive script on every webpage.
4. Relevant content is processed locally in your browser.
5. Content included in the request is sent to the model endpoint selected for
   that request.
6. With a local Ollama model, that is your configured Ollama server.
7. With a cloud model, that is the cloud API URL you explicitly saved.

On sites for which persistent access has been granted, Sidekick may refresh
the local current-page context after navigation so the side panel does not use
stale content. Page content is sent to a model when you submit a request with
context enabled or start an Agent Mode task that needs page observations.

## Network Connections

Ollama Sidekick makes model requests only to endpoints configured by you:

| Destination                            | Purpose                                       |
| -------------------------------------- | --------------------------------------------- |
| `localhost:11434` or `127.0.0.1:11434` | Connect to your local Ollama server           |
| A cloud API base URL you save          | List models and send chat-completion requests |

Loopback access is part of the required installation permissions. A remote
provider requires an exact runtime host grant and must use HTTPS. The manifest's
optional HTTP(S) patterns only declare which origins Chrome may let the
extension request later; they do not grant all-site access at installation.

The extension does not:

- Send model data to developer-owned servers
- Include any analytics or tracking scripts
- Load resources from external CDNs (all assets are bundled)

## Third-Party Services

Cloud integrations are opt-in and use an OpenAI-compatible API supplied by you.
The provider receives only requests you initiate while one of its models is selected.
Your relationship with that service—including retention, training, and billing—is
governed by the provider's terms and privacy policy.

## Permissions Explained

| Permission/capability                    | Why It's Needed                                                                      |
| ---------------------------------------- | ------------------------------------------------------------------------------------ |
| `storage`                                | Save chats, preferences, approved origins, and provider configuration locally        |
| `activeTab`                              | Temporarily access the current tab after a user gesture                              |
| `scripting`                              | Inject the packaged page-context/agent script on demand                              |
| `sidePanel`                              | Display the chat, task, approval, and settings interface                             |
| `contextMenus`                           | Provide user-invoked actions for selected text                                       |
| Required `localhost` / `127.0.0.1` hosts | Connect to local Ollama without granting public-network hosts                        |
| Optional HTTP(S) hosts                   | Request website access for context or Agent Mode, or access to a configured provider |

The extension requests neither the `tabs` nor `webNavigation` permission and
has no required `<all_urls>` permission or passive all-page content script.

## Data Security

- Cloud API URLs must use HTTPS, except for localhost gateways
- API keys remain in dedicated local extension storage and are sent only as authorization headers to the matching endpoint
- Page scripts cannot access model credentials
- You can disable page context before sending a request
- Extension pages execute only packaged scripts under a strict Content Security
  Policy; remote code and string evaluation are not allowed
- Broad website access is optional, requested through Chrome's permission
  prompt, and can be revoked. Agent Mode's site approvals remain separate.

## Children's Privacy

The extension developer does not knowingly collect personal data directly from
children. As described above, data entered into the extension or included from
a page can be processed locally or sent to a model provider chosen by the user.

## Changes to This Policy

If we update this privacy policy, we will:

- Update the "Last Updated" date
- Include changes in the extension update notes
- Maintain previous versions in our repository

## Your Rights

The extension developer does not operate a server containing your chats or
page content:

- There is no data to request, modify, or delete from our servers
- You have full control over locally stored data through your browser settings
- Uninstalling the extension removes all local data

## Contact

For privacy-related questions or concerns:

- Contact the developer through the [Chrome Web Store support page](https://chromewebstore.google.com/detail/ollama-sidekick/ggeleclijedgoacjldhaefjcaofgkeli/support).

Ollama Sidekick's handling of user data follows the Chrome Web Store User Data
Policy, including its Limited Use requirements.

## Summary

| Question                                  | Answer                                                                          |
| ----------------------------------------- | ------------------------------------------------------------------------------- |
| Does the extension process personal data? | It may process content you provide or select; the developer does not receive it |
| Do you track users?                       | No                                                                              |
| Do you use analytics?                     | No                                                                              |
| Do you sell data?                         | No (we don't have any)                                                          |
| Where is data stored?                     | Only on your local device                                                       |
| Where does data go?                       | To the local or cloud model endpoint you select                                 |

---

_This privacy policy is effective as of October 29, 2026._
