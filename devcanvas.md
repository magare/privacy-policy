# Dev Canvas Studio Privacy Policy

Last updated: March 14, 2026

## Overview

Dev Canvas Studio is a visual editing extension for frontend development. This policy explains what information the extension accesses, how it is used, and how it is stored.

## Information We Access

Dev Canvas Studio may access the following information on the page the user is actively inspecting:

- the current page URL
- information about the element the user selects, such as tag name, classes, ids, selected text, attributes, and computed styles
- framework and source-mapping context used to generate accurate style update requests

Dev Canvas Studio may also store user-provided configuration and workflow data locally, including:

- bridge server URL
- project root path entered by the user
- editor preferences
- saved presets
- viewport presets
- queued style changes and generated prompts

## How We Use Information

Dev Canvas Studio uses this information only to provide its core functionality:

- identify the page and element being edited
- let the user inspect and preview style changes
- generate precise local style update requests
- send those requests only to a user-controlled local bridge server when the user explicitly chooses Apply
- restore the user's settings and presets across browser sessions

## Local Storage

Dev Canvas Studio stores settings and queued changes in `chrome.storage.local` on the user's device. The extension does not require an account and does not sync this data to a cloud service as part of its normal operation.

## Localhost Communication

When the user chooses to apply changes, Dev Canvas Studio can send selected element metadata and style diffs to a local loopback bridge server on `localhost` or `127.0.0.1`. This bridge is controlled by the user and is used only for the local development workflow.

Dev Canvas Studio does not send this data to a remote public service as part of the extension itself.

## What We Do Not Do

- We do not sell user data.
- We do not use user data for advertising.
- We do not send inspected page data to a remote public service as part of the extension itself.
- We do not require account registration.
- We do not include analytics or third-party tracking SDKs in the extension package.

## Data Retention And Control

Data stored by Dev Canvas Studio remains on the user's device until the user removes it, clears extension storage, or uninstalls the extension.

Users can control stored data by:

- changing or removing stored settings in the extension
- clearing queued changes
- removing saved presets
- uninstalling the extension

## Contact

Support requests can be routed through the project support page or repository issue tracker.
