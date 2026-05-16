# Feature Specification: Add GoodKredit portfolio item

**Feature Branch**: `004-goodkredit-portfolio-item`
**Created**: 2026-05-16
**Status**: Draft
**Input**: User description: "add GoodKredit feature
iOS Swift/SwiftUI Developer +
Rest API
GoodApps Inc. | 2019 - Oct. 2023
Projects: 
https://apps.apple.com/ph/app/goodkredit/id1493360454 
GoodKredit App 
GoodKredit is an electronic Gift Certificate and electronic Gift Voucher program based on multiple
repayment models. eg. Online payment and bills. 
Language uses Swift programming in Xcode ide. 
MVC architecture.
I used PODS Frameworks and libraries from eGHL SDK(Malaysia) online payment CC/Visa card.
This mobile app is like a super finance/utility app, having mini services:
Bills payment, Buy load, Mobile COOP organization, Pay QR, Drop-off, 
Online store that are connected to our portal, RFID’s for modern Jeep e-card payment,  
Play To Save Lotto and more."

## Clarifications

### Session 2026-05-16

- Q: How should GoodKredit and the two additional apps be represented in the portfolio? → A: Option B — Group GoodKredit and the two additional apps under a single combined project with sub-sections.

When grouped, the project page will contain a top-level narrative for the GoodKredit program and three clearly separated sub-sections (GoodKredit, App B, App C) each with its own summary, artifacts, and external links.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Discover GoodKredit in portfolio (Priority: P1)

As a portfolio visitor, I want to find a clear project card for GoodKredit so I can learn about the project and open the detailed project page.

Why this priority: A discoverable project card is the primary way visitors learn about the project and the developer's work.

Independent Test: Visit the portfolio homepage, locate the GoodKredit card, and open its detail page.

Acceptance Scenarios:
1. Given the portfolio homepage, When the page loads, Then a project card titled "GoodKredit" is visible in the projects list.
2. Given the GoodKredit card, When the user clicks or taps it, Then the GoodKredit project detail page opens.

---

### User Story 2 - Read project details and view artifacts (Priority: P1)

As a visitor on the GoodKredit project page, I want to read a concise summary, view screenshots, and open the App Store link so I can evaluate the work and install the app.

Why this priority: The project page must communicate scope, role, and outcomes to potential employers or users.

Independent Test: Open the project page, confirm summary, role, screenshots, and that the App Store link opens a new tab/window to the provided store URL.

Acceptance Scenarios:
1. Given the project page, When it loads, Then a summary, timeframe, my role, and list of notable features are visible.
2. Given the App Store link, When clicked, Then it opens the App Store URL in a new tab/window.

---

### User Story 3 - Review feature highlights and impact (Priority: P2)

As a hiring manager, I want to quickly scan key features (payments, QR, store, RFID, Play-to-Save) and the business impact so I can assess relevance.

Why this priority: Quick assessment helps decision-makers decide to contact the developer.

Independent Test: Project page displays a concise bullet list of key features and a short impact/outcome summary.

Acceptance Scenarios:
1. Given the project page, When viewed, Then a bullet list of mini services and a short outcomes paragraph are present.

---

### Edge Cases

- If screenshots are missing, show placeholders and a clear note that artifacts are unavailable.
- If the App Store link is unreachable, show the link but display an inline message noting it could not be verified.
- For very small screens, ensure primary actions (open gallery, view store link) remain accessible.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Portfolio MUST display a GoodKredit project card on the Projects listing page with title, short subtitle, and thumbnail.
- **FR-002**: Portfolio MUST provide a dedicated GoodKredit project detail page containing: summary, role and timeframe, feature highlights, screenshots gallery, App Store link, and optional demo/notes.
- **FR-003**: The App Store link MUST open in a new browser tab/window and point to the provided App Store URL.
- **FR-004**: Screenshots gallery MUST support viewing multiple images with captions and a graceful placeholder when images are missing.
- **FR-005**: Project detail page MUST include a concise list of key features (bills payment, buy load, mobile COOP, Pay QR, drop-off, online store, RFID e-card, Play To Save Lotto).
- **FR-006**: Project detail page MUST list the developer role, timeframe, and brief responsibilities (author-provided summary) for context.
- **FR-007**: All content on the project page MUST be editable via the portfolio's content management approach (file, CMS, or source), and changes must reflect on the live site after the normal deployment process.
- **FR-008**: The portfolio MUST support grouping multiple related apps under a single combined project entry with discrete sub-sections for each app, each containing title, summary, screenshots, and external links.

### Key Entities *(include if feature involves data)*

- **Project**: Represents the portfolio entry. Attributes: title, subtitle, summary, timeframe, role, features[], screenshots[], external_links[].
- **Screenshot**: Represents an image artifact. Attributes: file_path or URL, caption, display_order.
- **External Link**: Represents links such as App Store or demo. Attributes: url, label, type.
- **Subproject / App**: Represents a related app within a combined project. Attributes: id, title, summary, screenshots[], external_link, role, timeframe.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: GoodKredit project card is visible on the Projects listing for 100% of normal visits (no personalization) within 2 page-loads.
- **SC-002**: 100% of clicks on the project card reliably open the GoodKredit detail page.
- **SC-003**: The App Store link opens in a new tab for 100% of tested clicks across desktop and mobile browsers.
- **SC-004**: At least one screenshot appears in the gallery for 95% of test environments; when none exist a placeholder and explanatory text appear.
- **SC-005**: A reviewer unfamiliar with the project can answer: "What problem did this app solve?" after reading the detail page (qualitative acceptance during review).
- **SC-006**: For grouped projects, each subproject's summary and linkability must allow a reviewer to distinguish apps and access each app's store page independently.

## Assumptions

- The portfolio site supports project detail pages and a projects listing.
- The content (summary, screenshots, links) will be provided by the feature owner (developer) in a format compatible with the portfolio's content workflow.
- No new authentication or backend APIs are required to publish this portfolio content.
- The App Store URL provided is the canonical external link for the project (apps.apple.com link supplied by the user).

## Dependencies

- Availability of project artifacts from the developer: screenshots, short summary, and the App Store URL.
- Existing portfolio templates or components for project cards and detail pages.

## Acceptance Criteria (Testable)

- AC-001: On desktop and mobile viewport sizes, the project card is present and navigates to the detail page when clicked.
- AC-002: The project detail page contains the summary, role/timeframe, feature highlights, screenshot gallery (or placeholders), and the App Store link.
- AC-003: All external links open in a new tab and validate as reachable (200 OK) when tested; unreachable links are flagged in a content note.
- AC-004: When grouped, the combined project page exposes separate sub-section anchors/navigation for each included app and each sub-section's App Store link opens in a new tab.

## Notes / Background

- The GoodKredit app is a payments/utility app featuring electronic gift certificates and vouchers, multiple repayment models, and mini services such as bills payment, QR pay, online store, RFID e-card payments, and Play To Save Lotto. The app was published to the App Store: https://apps.apple.com/ph/app/goodkredit/id1493360454.
- The author worked as an iOS developer at GoodApps Inc. (2019–Oct 2023) and can provide screenshots and a short narrative describing responsibilities, payment integrations (e.g., eGHL), and architecture for the portfolio description if desired.
- Planned additions: The author intends to add two more related apps to this combined project; those subprojects will be added as new sub-sections with their own artifacts and links.
