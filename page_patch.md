# Privacy Policy for Page Patch

**Last Updated:** December 11, 2024

## Introduction

Page Patch ("we", "our", or "the extension") is a browser extension that allows users to customize webpage elements. This Privacy Policy explains how we handle information when you use our extension.

## Summary

- We do NOT collect personal information
- We do NOT track your browsing history
- We do NOT sell any data
- All customization data is stored locally on your device
- License validation requires minimal data exchange with our payment provider

## Information We Collect

### Information We Do NOT Collect

- Personal identification information (name, email, address)
- Browsing history or activity
- Cookies or tracking data
- Financial information (handled by third-party payment processor)
- Any data from webpages you visit

### Information Stored Locally

The following data is stored locally on your device using Chrome's storage API:

1. **Customization Rules**: CSS selectors and styling rules you create for webpages
2. **User Preferences**: Settings like dark mode preference and sync options
3. **Action History**: Undo history for your customizations (stored temporarily)

This data never leaves your device unless you explicitly enable Chrome Sync.

### Information Processed for License Validation

If you purchase a Pro license, the following minimal information is processed:

1. **License Key**: Your unique license key (provided after purchase)
2. **Instance Identifier**: A randomly generated identifier for your browser instance

This information is sent to our payment provider (Dodo Payments) solely to validate your license. We do not receive or store your payment information.

## How We Use Information

### Local Data Usage

- To apply your customizations when you visit webpages
- To remember your preferences across browser sessions
- To provide undo functionality

### License Validation

- To verify Pro license status
- To manage license activations across devices

## Data Storage

### Local Storage

All customization data is stored using Chrome's `chrome.storage.local` API. This data:

- Remains on your device
- Is not accessible to websites you visit
- Is not transmitted to any servers
- Can be deleted by uninstalling the extension or clearing extension data

### Chrome Sync (Optional)

If you enable Chrome Sync for the extension (Pro feature), your customization data may be synced across your devices using Google's Chrome Sync infrastructure. This is governed by Google's privacy policy.

## Third-Party Services

### Dodo Payments

We use Dodo Payments for license management. When validating a license:

- Only your license key and instance identifier are transmitted
- Dodo Payments' privacy policy applies: https://dodopayments.com/privacy

### No Analytics or Tracking

We do not use any analytics services, tracking pixels, or similar technologies.

## Permissions Explained

### Why We Need "<all_urls>" Permission

The extension requires access to all URLs because:

- Users need to customize elements on any webpage they choose
- The content script must run on pages where customizations are applied
- We cannot predict which websites users want to customize

**Important**: This permission does NOT mean we access or collect data from these pages. The extension only:

- Reads the DOM to identify elements you want to customize
- Applies CSS styles you've defined
- Does NOT read page content, forms, or any sensitive data

### Storage Permission

Used to save your customizations and preferences locally.

### ActiveTab Permission

Used to interact with the current tab when you activate the element picker.

### Scripting Permission

Used to inject the content script that applies your customizations.

### SidePanel Permission

Used to provide the side panel interface for managing customizations.

## Data Security

- All data is stored locally using Chrome's secure storage APIs
- License validation uses HTTPS encryption
- No sensitive data is transmitted or stored externally

## Your Rights and Choices

### Access Your Data

You can view all stored data through Chrome's developer tools or by exporting your customizations (Pro feature).

### Delete Your Data

You can delete all extension data by:

1. Using the "Clear All Sites" button in the extension settings
2. Uninstalling the extension
3. Clearing extension data through Chrome settings

### Disable the Extension

You can disable the extension at any time through Chrome's extension management page.

## Children's Privacy

This extension is not directed at children under 13. We do not knowingly collect information from children.

## Changes to This Policy

We may update this Privacy Policy from time to time. We will notify users of any material changes by updating the "Last Updated" date.

## Consent

By using Page Patch, you consent to this Privacy Policy.
