# Privacy Policy for Swagger to Postman Collection Exporter

**Effective Date:** February 23, 2026

This Privacy Policy describes how the "Swagger to Postman Collection Exporter" Chrome Extension (the "Extension") handles your data. We are committed to protecting your privacy and ensuring that your data remains yours.

## 1. Data Collection and Usage
The Extension **does not collect, store, or transmit any personal information or usage data**. 

All operations performed by the Extension, including reading OpenAPI specifications from your active browser tabs and converting them into Postman Collection JSON formats, are executed **entirely locally on your device**. 

## 2. Permissions Required
To function correctly, the Extension requires the following browser permissions:
- **`activeTab`**: Used strictly to access the current tab's URL and DOM only when you explicitly click the Extension icon or the "Convert Current Page" button. This allows the Extension to detect and extract the Swagger/Redoc definitions present on that specific page.
- **`scripting`**: Used to execute the conversion scripts within the context of the active tab to safely read the OpenAPI schema before generating the Postman file.
- **`downloads`**: Used to seamlessly save the generated Postman Collection JSON file directly to your local computer without navigating away from the page or sending data to external servers.
- **`storage`**: Used solely to save your local extension preferences (such as "Include Auth Headers" vs. "Group by Tags") between sessions so you do not have to reconfigure them every time.

None of the data accessed via these permissions ever leaves your browser or device.

## 3. Third-Party Services
We do not use any third-party analytics, tracking, or data collection services within the Extension. We do not send your API specifications to any external servers.

## 4. Changes to this Privacy Policy
We may update this Privacy Policy from time to time. Any changes will be published on this page. Because we do not collect user data, we cannot notify you directly of changes.
