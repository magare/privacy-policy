# Privacy Policy for NetSniffer

**Last Updated:** December 28, 2024

## Overview

NetSniffer ("the Extension") is a browser-based network traffic analyzer that helps developers and security professionals inspect HTTP/HTTPS requests and responses. This Privacy Policy explains how the Extension handles your data.

## Data Collection

### We Do NOT Collect Any Data

**NetSniffer does NOT collect any user data.** The extension only **displays** network traffic locally to you (similar to Chrome DevTools Network tab).

- We do **NOT** collect any data
- We do **NOT** transmit any data to external servers
- We do **NOT** use analytics or tracking services
- We do **NOT** store any data persistently (only in-memory during your session)
- We do **NOT** share any data with third parties

### What the Extension Displays

When you use NetSniffer, it **displays** (but does not collect) the following types of network traffic from your browser tab:

- Network request/response URLs, methods, headers, and bodies
- HTTP status codes and timing information
- WebSocket connections and messages

This data is shown to you locally in real-time and is NOT collected, stored, or transmitted anywhere.

## Data Storage

### Where Data is Stored

All captured network data is stored **locally** in your browser using:

- **localStorage**: For persistent settings, bookmarks, and session data
- **In-memory buffers**: For active capture sessions (cleared when the browser closes)

### Data Retention

- **Active session data**: Retained in memory until you clear it or close the side panel
- **Settings and preferences**: Stored in localStorage until you uninstall the extension
- **Bookmarks and annotations**: Stored in localStorage until you delete them or uninstall the extension

### Data Limits

The Extension implements a ring buffer that limits stored packets to prevent excessive memory usage (default: 5,000 packets per tab).

## Data Security

### Security Measures

1. **Local-only storage**: All data remains on your device
2. **Per-tab isolation**: Each browser tab has its own isolated capture session
3. **No network transmission**: Captured data is never sent to external servers
4. **Session cleanup**: Data is cleared when you close the side panel or browser

### Sensitive Data Warning

Network traffic may contain sensitive information such as:

- Authentication tokens and API keys
- Session cookies
- Personal information in request/response bodies
- Credentials in HTTP headers

**You are responsible for protecting this data.** Do not share exported captures containing sensitive information.

## Permissions Explained

The Extension requires the following permissions:

| Permission  | Purpose                                                                     |
| ----------- | --------------------------------------------------------------------------- |
| `debugger`  | Access Chrome DevTools Protocol to capture network traffic                  |
| `scripting` | Execute request replays in the page context for proper cookie/CORS handling |
| `tabs`      | Identify which tab to capture network traffic from                          |
| `tabGroups` | Organize monitored tabs into groups for better visual organization          |
| `sidePanel` | Display the network traffic analyzer interface                              |

## User Controls

You have full control over your data:

1. **Clear captured data**: Click the clear button to remove all captured packets
2. **Stop capture**: Stop the capture session at any time
3. **Export data**: Export captured data for external analysis
4. **Delete bookmarks/annotations**: Remove saved items at any time
5. **Uninstall**: Removing the extension deletes all stored data

## Third-Party Services

NetSniffer does **NOT** integrate with any third-party services. The Extension:

- Does not use analytics (Google Analytics, Mixpanel, etc.)
- Does not use crash reporting services
- Does not communicate with external APIs
- Does not include advertisements

## Children's Privacy

NetSniffer is a developer tool and is not intended for use by children under 13 years of age.

## Changes to This Policy

We may update this Privacy Policy from time to time. Changes will be reflected in the "Last Updated" date at the top of this document.

## Contact

If you have questions about this Privacy Policy or the Extension's data practices, please open an issue on our GitHub repository.

## Summary

- **No data collection** - We do not collect any user data
- **No data transmission** - Nothing is sent to external servers
- **No analytics or tracking** - No telemetry of any kind
- **Local display only** - Data is displayed locally like Chrome DevTools
- **You control everything** - Clear data anytime, uninstall to remove all
