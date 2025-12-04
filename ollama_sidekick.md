# Privacy Policy for Ollama Sidekick

**Last Updated: December 2025**

## Overview

Ollama Sidekick is a browser extension that provides a chat interface to locally-hosted Ollama AI models. This privacy policy explains how the extension handles your data.

## Our Privacy Commitment

**Ollama Sidekick does not collect, store, or transmit any personal data to external servers.**

All functionality is performed locally on your device.

## Data Handling

### Data We DO NOT Collect

- Personal information
- Browsing history
- Page content (beyond local processing)
- Chat conversations
- Usage analytics
- Cookies or tracking data
- IP addresses
- Device identifiers

### Data Stored Locally on Your Device

The following data is stored locally in your browser using Chrome's storage API (`chrome.storage.local`):

| Data Type            | Purpose                      | Storage Location      |
| -------------------- | ---------------------------- | --------------------- |
| Chat history         | Save your conversations      | Local browser storage |
| Selected AI model    | Remember your preference     | Local browser storage |
| Context toggle state | Remember your preference     | Local browser storage |
| Ollama server URL    | Connect to your local server | Local browser storage |

This data:

- Never leaves your device
- Is not accessible to us or any third party
- Can be deleted by removing the extension or clearing extension data

### Page Content Processing

When you use Ollama Sidekick:

1. The extension reads content from the current webpage
2. This content is processed locally in your browser
3. The content is sent ONLY to your local Ollama server (localhost)
4. No webpage content is ever transmitted to external servers

## Network Connections

Ollama Sidekick makes network requests ONLY to:

| Destination                            | Purpose                             |
| -------------------------------------- | ----------------------------------- |
| `localhost:11434` or `127.0.0.1:11434` | Connect to your local Ollama server |

**No other network connections are made.**

The extension does not:

- Connect to any external APIs
- Send data to any cloud services
- Include any analytics or tracking scripts
- Load resources from external CDNs (all assets are bundled)

## Third-Party Services

Ollama Sidekick does not integrate with or send data to any third-party services.

The extension connects only to Ollama, which is:

- Open-source software
- Installed and run locally on your machine
- Controlled entirely by you

## Permissions Explained

| Permission                      | Why It's Needed                                        |
| ------------------------------- | ------------------------------------------------------ |
| `storage`                       | Save your preferences and chat history locally         |
| `activeTab`                     | Access the current tab to extract page content         |
| `tabs`                          | Track tab changes to update page context               |
| `scripting`                     | Inject content script to read page content             |
| `sidePanel`                     | Display the chat interface in Chrome's side panel      |
| `webNavigation`                 | Detect page navigation in single-page applications     |
| `host_permissions: <all_urls>`  | Extract content from any webpage you choose to analyze |
| `host_permissions: localhost/*` | Connect to your local Ollama server                    |

## Data Security

- All data remains on your local device
- Communication with Ollama uses your local network only
- No encryption is needed for external transmission because there is none
- Your data is as secure as your local machine

## Children's Privacy

Ollama Sidekick does not collect any data from any users, including children under 13.

## Changes to This Policy

If we update this privacy policy, we will:

- Update the "Last Updated" date
- Include changes in the extension update notes
- Maintain previous versions in our repository

## Your Rights

Since we don't collect any data:

- There is no data to request, modify, or delete from our servers
- You have full control over locally stored data through your browser settings
- Uninstalling the extension removes all local data

## Summary

| Question                      | Answer                           |
| ----------------------------- | -------------------------------- |
| Do you collect personal data? | No                               |
| Do you track users?           | No                               |
| Do you use analytics?         | No                               |
| Do you sell data?             | No (we don't have any)           |
| Where is data stored?         | Only on your local device        |
| Where does data go?           | Only to your local Ollama server |

---

_This privacy policy is effective as of December 2025._
