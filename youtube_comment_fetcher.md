# Privacy Policy for YouTube Comment WordCloud Extension

**Last Updated:** December 9, 2025

## Overview

YouTube Comment WordCloud ("the Extension") is a browser extension that generates visual word clouds from YouTube video comments and live chat messages. This privacy policy explains how the Extension handles user data.

## Data Collection

### What Data We Access

The Extension accesses the following data **only on YouTube.com**:

1. **YouTube Comments**: Text content of comments displayed on YouTube video pages
2. **Live Chat Messages**: Text content of live chat messages on YouTube live streams (when enabled)
3. **User Preferences**: Settings you configure within the Extension (color scheme, word limits, etc.)

### What Data We DO NOT Collect

- We do **NOT** collect any personal information
- We do **NOT** collect usernames, profile pictures, or account information
- We do **NOT** track your browsing history
- We do **NOT** send any data to external servers
- We do **NOT** use analytics or tracking services

## Data Processing

### Local Processing Only

All data processing happens **entirely within your browser**:

1. Comment text is scraped from the visible YouTube page DOM
2. Text is processed locally to extract word frequencies
3. A word cloud visualization is generated using HTML5 Canvas
4. **No data ever leaves your device**

### Data Storage

- **User Settings**: Stored locally using Chrome's `storage.sync` API
  - This may sync your preferences across your Chrome browsers if you're signed in
  - Settings include: enabled state, color scheme, max words, refresh interval, custom stopwords
- **Comment Data**: Stored only in temporary memory during your browsing session
  - Automatically cleared when you navigate away or close the tab
  - Never written to disk or persistent storage

## Permissions Explained

The Extension requests the following permissions:

| Permission              | Why It's Needed                                                            |
| ----------------------- | -------------------------------------------------------------------------- |
| `activeTab`             | To detect when you're on a YouTube video page and inject the word cloud UI |
| `storage`               | To save your preferences (color scheme, settings) locally                  |
| `*://www.youtube.com/*` | To access YouTube pages and read comment content for word cloud generation |

## Data Sharing

**We do not share any data with third parties.** The Extension:

- Has no external API calls
- Has no analytics or telemetry
- Has no advertising
- Does not communicate with any servers

## Data Retention

- **Settings**: Retained until you uninstall the Extension or clear browser data
- **Comment Data**: Not retained - exists only in memory during active use

## Your Rights

You can:

- **Disable the Extension** at any time through Chrome's extension settings
- **Clear stored settings** by uninstalling and reinstalling the Extension
- **Control what's analyzed** using the Extension's settings (enable/disable live chat, custom stopwords)

## Children's Privacy

The Extension does not knowingly collect any data from children under 13. The Extension processes publicly visible YouTube comments without any user identification.

## Changes to This Policy

We may update this privacy policy from time to time. Any changes will be reflected in the "Last Updated" date above.

---

**Summary**: This Extension processes YouTube comments locally in your browser to create word cloud visualizations. No data is collected, stored externally, or shared with anyone. Your privacy is fully protected.
