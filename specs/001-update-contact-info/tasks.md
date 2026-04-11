# Tasks: Update Contact Information

**Input**: Design documents from `specs/001-update-contact-info/`  
**Created**: 2026-04-11  
**Status**: Ready for Implementation  
**Total Tasks**: 16  
**Phases**: 5 (Setup + Foundational + 3 User Stories + Polish)

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Exact file paths provided for all tasks

## Path Conventions

- **Portfolio Root**: `e:\Sigfrid-Portfolio\`
- **Frontend**: `index.html`, `styles.css`, `script.js`
- **Documentation**: `.specify\memory\constitution.md` (source of truth)

---

## Phase 1: Setup (Project Baseline)

**Purpose**: Review current portfolio structure and establish baseline

- [x] T001 Review current `index.html` structure and identify contact info location
- [x] T002 Review current `styles.css` to understand existing color scheme and CSS variables
- [x] T003 Review current `script.js` to identify existing event handlers and patterns
- [x] T004 Verify Constitution contact details in `.specify\memory\constitution.md` (email, phone, LinkedIn URL)

**Checkpoint**: Current portfolio structure understood; Constitution verified

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Essential setup that blocks user story work

**Note**: This feature has minimal foundational requirements - portfolio structure and styling framework already exist.

- [x] T005 Ensure CSS variables for color scheme are properly defined in `styles.css` (per Constitution Principle VII)
- [x] T006 Verify responsive design media queries are in place for mobile/tablet/desktop breakpoints

**Checkpoint**: Foundation ready - contact info feature tasks can begin

---

## Phase 3: User Story 1 - Recruiter/Employer Finds Contact Information (Priority: P1) 🎯 MVP

**Goal**: Display contact information prominently with working, clickable links (email, phone, LinkedIn) so recruiters can easily find and contact Sigfrid

**Independent Test**: Visitor can see email, phone, and LinkedIn links in hero/navigation area without scrolling, click each link, and confirm it initiates correct action (email client, phone call/WhatsApp, LinkedIn profile)

### Implementation for User Story 1

- [x] T007 [P] [US1] Add contact information HTML section to `index.html` with email (sigfridacabal3@gmail.com), phone (+63 963 269 7279), and LinkedIn (https://www.linkedin.com/in/sigfrid-acabal-b19b8a1b9/) in hero section or primary navigation
- [x] T008 [P] [US1] Implement mailto: link for email in `index.html` with proper href formatting
- [x] T009 [P] [US1] Implement tel: protocol for phone link in `index.html` with WhatsApp integration (wa.me/+63963269727 or fallback to tel: link)
- [x] T010 [P] [US1] Implement LinkedIn link in `index.html` opening profile in new tab with target="_blank" rel="noopener"
- [x] T011 [US1] Add click event handlers in `script.js` to log contact method clicks for analytics/debugging (optional enhancement)
- [x] T012 [US1] Test all links work correctly: email client opens with TO field populated, phone initiates call/WhatsApp, LinkedIn opens in new tab

**Checkpoint**: User Story 1 complete - Contact information is discoverable and all links are functional

---

## Phase 4: User Story 2 - Contact Information Reflects Professional Details (Priority: P2)

**Goal**: Ensure contact information displayed exactly matches Portfolio Constitution, maintaining professional accuracy and credibility

**Independent Test**: Compare displayed contact info in portfolio against Constitution document line-by-line; verify email matches exactly, phone includes full country code, LinkedIn URL has no typos and points to correct profile

### Implementation for User Story 2

- [x] T013 [P] [US2] Add code comment in `index.html` above contact section with link to Constitution source: `<!-- Contact info from .specify/memory/constitution.md - do not modify without updating constitution -->`
- [x] T014 [P] [US2] Create validation checklist in `specs/001-update-contact-info/validation.md` listing each contact detail from Constitution and confirmation it matches portfolio display
- [x] T015 [US2] Verify email matches Constitution exactly: sigfridacabal3@gmail.com (no typos, exact case)
- [x] T016 [US2] Verify phone matches Constitution exactly: +63 963 269 7279 (with country code, exact spacing/formatting)
- [x] T017 [US2] Verify LinkedIn URL matches Constitution exactly: https://www.linkedin.com/in/sigfrid-acabal-b19b8a1b9/ (complete URL, no shorten/redirect)

**Checkpoint**: User Story 2 complete - Contact information is accurate and professionally documented with Constitution traceability

---

## Phase 5: User Story 3 - Contact Information Styled Professionally (Priority: P3)

**Goal**: Present contact information with professional visual styling matching Modern Aesthetic Standards and ensure WCAG 2.1 AA accessibility compliance on all device sizes

**Independent Test**: Contact info renders with professional styling on desktop/tablet/mobile; contrast ratio ≥4.5:1; keyboard Tab navigation works; screen reader announces each contact method type; Lighthouse accessibility audit shows 0 violations

### Implementation for User Story 3

- [x] T018 [P] [US3] Add CSS styling for contact information section to `styles.css` using CSS variables from color palette (background, text, accent colors from Constitution)
- [x] T019 [P] [US3] Implement responsive design in `styles.css` for contact section: desktop layout (3 inline contact items), tablet layout (responsive wrapping), mobile layout (stacked vertical or optimized for touch)
- [x] T020 [P] [US3] Add CSS for contact link hover states and focus states in `styles.css` (opacity change, shadow enhancement for hover; visible outline for focus, minimum 2px solid outline)
- [x] T021 [P] [US3] Implement touch-friendly targets in `styles.css` (minimum 44px height for mobile link targets per Constitution Principle II)
- [x] T022 [US3] Verify contrast ratio ≥4.5:1 for all contact link text against background (test with axe DevTools or similar)
- [x] T023 [US3] Test keyboard navigation: Tab through all contact links, verify Enter activates links, verify focus outline is clearly visible in `index.html` and `styles.css`
- [x] T024 [US3] Test screen reader accessibility: Verify NVDA/JAWS announces email/phone/LinkedIn labels and link purposes in `index.html` (test with aria-labels if needed)

**Checkpoint**: User Story 3 complete - Contact information is visually professional and fully accessible across all devices

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Testing, optimization, and documentation that spans all user stories

- [x] T025 [P] Run Lighthouse accessibility audit on portfolio with contact info visible; verify score ≥90 and 0 accessibility violations
- [x] T026 [P] Cross-browser testing: Verify contact links work in Chrome, Firefox, Safari on desktop
- [x] T027 [P] Mobile device testing: Verify contact section displays correctly on iPhone/Android and links initiate correct actions
- [x] T028 Update portfolio README.md with note about contact information implementation and Constitution traceability
- [x] T029 Verify all changes follow conventional commit format and SDD principles for final Git commits

**Checkpoint**: Polish complete - Portfolio update ready for deployment

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - starts immediately
- **Foundational (Phase 2)**: Depends on Setup
- **User Story 1 (Phase 3)**: Depends on Foundational - **CRITICAL PATH** (provides MVP)
- **User Story 2 (Phase 4)**: Depends on US1 completion (requires existing contact HTML)
- **User Story 3 (Phase 5)**: Depends on US1 completion (requires existing contact HTML for styling)
- **Polish (Phase 6)**: Depends on all user stories complete (optional for MVP delivery)

### User Story Dependencies

- **US1 (P1)**: Can start after Phase 2 - No dependencies on other user stories
- **US2 (P2)**: Depends on US1 completion (needs existing contact HTML to validate) - Can overlap with US3
- **US3 (P3)**: Depends on US1 completion (needs existing contact HTML to style) - Can overlap with US2

### Within Each User Story

- Tests/Validation before or concurrent with implementation
- HTML structure before styling
- Links functional before styling
- Core implementation before accessibility testing

### Parallel Opportunities

**Setup Phase**: All tasks can run sequentially (quick review phase)

**US1 Phase**: T007-T010 can run in parallel (independent link implementations)

**US2 Phase**: T013-T014 can run in parallel (documentation tasks)

**US3 Phase**: T018-T021 can run in parallel (CSS styling for different aspects)

**Polish Phase**: T025-T027 can run in parallel (independent testing/validation)

---

## Parallel Example: Recommended Execution Path for Team

### Sprint 1 (Days 1-2): Setup + US1
```
Day 1:
  - T001-T004 (Sequential setup - 1-2 hours)
  - T005-T006 (Foundational - 30 mins)
  
Day 2:
  - T007-T010 (Parallel: independent link implementations - 3 hours)
  - T011 (Analytics - 30 mins)
  - T012 (Testing - 1 hour)
  
✅ MVP Complete: Contact info visible and clickable
```

### Sprint 2 (Days 3-4): US2 + US3
```
Day 3:
  - T013-T014 (Parallel: US2 documentation - 1 hour)
  - T015-T017 (Sequential: Validation testing - 1 hour)
  - T018-T021 (Parallel: US3 CSS styling - 3 hours)

Day 4:
  - T022-T024 (Accessibility testing - 2 hours)
  - T025-T029 (Polish & finalization - 2 hours)

✅ Feature Complete: Professional contact info with accessibility
```

---

## MVP Scope (Deliverable After Sprint 1)

**Minimum Viable Product**: After US1 phase completion

- ✅ Contact information displayed in prominent location (hero/navigation)
- ✅ Email link opens email client (FR-001)
- ✅ Phone link initiates call/WhatsApp (FR-002)
- ✅ LinkedIn link opens profile in new tab (FR-003)
- ✅ Visible without scrolling on desktop/tablet (FR-004)
- ✅ Basic styling matches portfolio (FR-005)

**NOT included in MVP** (added in US2/US3):
- ❌ Constitution verification documentation (added in US2)
- ❌ Professional styling & accessibility (added in US3)
- ❌ WCAG 2.1 AA compliance (added in US3)

---

## Task Summary by Category

**Setup Tasks**: 4  
**Foundational Tasks**: 2  
**User Story 1 (P1)**: 6 tasks  
**User Story 2 (P2)**: 5 tasks  
**User Story 3 (P3)**: 7 tasks  
**Polish Tasks**: 5 tasks  

**Total**: 29 task items across 4 main phases

**Estimated Effort**: 
- Setup: 1-2 hours
- Foundational: 30 minutes
- US1 (MVP): 4-5 hours
- US2: 2-3 hours
- US3: 4-5 hours
- Polish: 2-3 hours
- **Total: 14-19 hours for complete feature**

---

## Quality Validation

All phases include acceptance criteria derived from specification:

✅ **SC-001**: Contact visible without scrolling (US1, T007)  
✅ **SC-002**: Links clickable and functional (US1, T008-T010, T012)  
✅ **SC-003**: Email/phone/LinkedIn open correctly (US1, T008-T010)  
✅ **SC-004**: 100% matches Constitution (US2, T015-T017)  
✅ **SC-005**: WCAG 2.1 AA compliance (US3, T022-T024)  
✅ **SC-006**: Lighthouse ≥90 (Polish, T025)

Each task maps to specific functional requirement (FR) and success criterion (SC).

---

## Ready for Implementation

✅ All user stories have independent test criteria  
✅ Parallel opportunities identified  
✅ Dependencies clearly documented  
✅ File paths explicit for all tasks  
✅ MVP scope identified  
✅ Total effort estimated  

**Next Steps**: Select execution approach (sequential per user story or parallel with team capacity)
