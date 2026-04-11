# Tasks: Slick Portfolio Light Theme Design

**Input**: Design documents from `/specs/002-portfolio-light-theme/`  
**Prerequisites**: plan.md (tech stack HTML/CSS/JS), spec.md (4 user stories), constitution v1.1.1  
**Link to Plan**: [plan.md](plan.md) | **Link to Spec**: [spec.md](spec.md)

**Organization**: Tasks are grouped by user story to enable independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3, US4)
- Include exact file paths in descriptions

## Path Conventions

- **Stylesheets**: `styles.css` (main stylesheet)
- **JavaScript**: `script.js` (interactive behaviors)
- **HTML**: `index.html` (structure)
- **Assets**: `assets/` directory

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and light theme structural setup

- [ ] T001 Create comprehensive CSS color variables structure in `styles.css` root section with categories (backgrounds, text, accents, borders)
- [ ] T002 Document light color palette mapping (current dark → new light equivalents) in `styles.css` comments
- [ ] T003 [P] Ensure `index.html` has semantic structure with section classes ready for light theme styling

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before user story work begins

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T004 Measure and document current color scheme with hex values and contrast ratios
- [ ] T005 Define light theme primary palette: backgrounds (#FAFAFA, #FFFFFF), text (#1F2937, #374151), accents (blue, green from Apple design language)
- [ ] T006 [P] Install accessibility validation tools locally (axe browser extension, Lighthouse CLI, or online WCAG checker)
- [ ] T007 Create CSS variables reference block at top of `styles.css` with category comments (--color-bg-primary, --color-text-primary, --color-accent-blue, etc.)
- [ ] T008 [P] Test CSS variable usage in browser DevTools to ensure values propagate correctly

**Checkpoint**: Light theme color infrastructure ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Visitor First Impression (Priority: P1) 🎯 MVP

**Goal**: Deliver light color palette with excellent contrast and readability across main portfolio sections

**Independent Test**: Visitor opens portfolio, sees light color scheme throughout (light backgrounds, dark text, accent colors) with professional appearance and readable content on desktop and mobile

### Implementation for User Story 1

- [ ] T009 [P] [US1] Update body background color to light value in `styles.css` (white or off-white #FAFAFA)
- [ ] T010 [P] [US1] Update primary text color to dark value in `styles.css` (charcoal #1F2937 or navy #374151)
- [ ] T011 [P] [US1] Update hero section background in `styles.css` with light palette (light background + dark text)
- [ ] T012 [P] [US1] Update about section background and text colors in `styles.css` for light theme
- [ ] T013 [P] [US1] Update skills section styling for light palette in `styles.css`
- [ ] T014 [P] [US1] Update footer background and text colors in `styles.css` for light theme
- [ ] T015 [US1] Validate contrast ratios for all text elements using accessibility checker (should show ≥4.5:1 for normal text)
- [ ] T016 [US1] Test portfolio on desktop browser (Chrome, Firefox) - verify light theme renders correctly and professionally
- [ ] T017 [US1] Test portfolio on iOS Safari mobile device - verify text is readable and spacing is appropriate at mobile size

**Checkpoint**: User Story 1 complete - Portfolio renders in light theme with professional appearance and proper contrast

---

## Phase 4: User Story 2 - iOS Project Showcase Clarity (Priority: P1)

**Goal**: Deliver project cards and project section with clear, readable styling that showcases iOS expertise and technologies

**Independent Test**: Project cards display with light backgrounds, project images are visible and well-framed, technology badges (Swift, Firebase, MVVM) are readable with excellent contrast

### Implementation for User Story 2

- [ ] T018 [P] [US2] Set project card background to light value in `styles.css` with subtle shadows for depth
- [ ] T019 [P] [US2] Update project card text colors (title, description) for light palette in `styles.css` with proper contrast
- [ ] T020 [P] [US2] Style technology badges in project cards for light backgrounds (borders, light background, or subtle color) in `styles.css`
- [ ] T021 [P] [US2] Add subtle borders or frames to project images in `styles.css` for visual separation on light backgrounds
- [ ] T022 [US2] Verify project card borders and shadows are visible and professional-looking (test in browser)
- [ ] T023 [US2] Test project images are properly displayed and framed with good visibility on light backgrounds
- [ ] T024 [US2] Validate technology badge contrast ratios meet WCAG AA standards (minimum 4.5:1)
- [ ] T025 [US2] Test projects section on multiple devices (desktop, tablet, mobile) for consistent rendering

**Checkpoint**: User Story 2 complete - Project showcase is clear, readable, and demonstrates iOS expertise effectively

---

## Phase 5: User Story 3 - Brand Consistency & Tech Lead Credibility (Priority: P2)

**Goal**: Deliver polished interactive states and accent colors that reflect modern iOS design language and professional credibility

**Independent Test**: Design includes modern interactive states (hover, focus, active), accent colors reflect iOS design language, typography hierarchy is clear

### Implementation for User Story 3

- [ ] T026 [P] [US3] Define accent color palette in CSS variables (primary accent, accent-hover, accent-focus) reflecting iOS design language in `styles.css`
- [ ] T027 [P] [US3] Apply primary accent color to main CTA buttons in `styles.css` (Contact button, project links)
- [ ] T028 [P] [US3] Create hover state for buttons with lighter/darker accent variant in `styles.css`
- [ ] T029 [P] [US3] Create focus state for keyboard navigation with visible outline/ring in `styles.css`
- [ ] T030 [P] [US3] Update link colors to use accent palette in `styles.css` with underline on hover
- [ ] T031 [US3] Test hover states on interactive elements (buttons, links) - verify feedback is clear without overwhelming light aesthetic
- [ ] T032 [US3] Test focus states with keyboard navigation (Tab through elements) - ensure visible and accessible
- [ ] T033 [US3] Verify typography hierarchy on light palette (headers darker/bolder, body lighter) - compare to modern portfolios
- [ ] T034 [US3] Test accent colors across different content sections to ensure cohesive, professional appearance

**Checkpoint**: User Story 3 complete - Portfolio reflects Tech Lead credibility and modern iOS design trends

---

## Phase 6: User Story 4 - Cross-Device Visual Consistency (Priority: P2)

**Goal**: Ensure light theme renders consistently and remains accessible across all device sizes and screen conditions

**Independent Test**: Portfolio renders correctly on iOS Safari, Android Chrome, Firefox with consistent light color palette, readability (≥4.5:1 contrast), and responsive design

### Implementation for User Story 4

- [ ] T035 [P] [US4] Test portfolio at mobile breakpoint (< 600px) - verify text readable, colors consistent, contrast maintained in `index.html` and `styles.css`
- [ ] T036 [P] [US4] Test portfolio at tablet breakpoint (600px - 900px) - ensure layout and colors render properly
- [ ] T037 [P] [US4] Test portfolio at desktop breakpoint (> 900px) - verify full-width design looks professional
- [ ] T038 [US4] Validate all touch targets are minimum 44px height and width on mobile in `styles.css`
- [ ] T039 [US4] Test on iOS Safari on iPhone (multiple screen sizes if possible)
- [ ] T040 [US4] Test on Chrome/Android mobile browser for Android compatibility
- [ ] T041 [US4] Test on desktop Firefox browser for cross-browser consistency
- [ ] T042 [US4] Run Lighthouse audit to ensure score remains ≥90 (performance, accessibility, best practices)
- [ ] T043 [US4] Verify contrast ratios at all breakpoints using accessibility checker - should remain ≥4.5:1
- [ ] T044 [US4] Test in high-brightness environment (sunny conditions) or simulate by adjusting screen brightness - ensure contrast sufficient

**Checkpoint**: User Story 4 complete - Light theme renders consistently and accessibly across all devices

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Final validation, optimization, and code cleanup

- [ ] T045 [P] Review `script.js` for any dark-theme specific code that needs light-theme compatibility testing
- [ ] T046 [P] Ensure all CSS color variables follow naming convention (--color-[category]-[state]) in `styles.css`
- [ ] T047 [P] Add CSS comments documenting light theme color palette rationale and WCAG compliance
- [ ] T048 [P] Test form inputs and focus states on light backgrounds in `styles.css` and `index.html`
- [ ] T049 Perform final accessibility audit using axe DevTools or similar tool to validate WCAG AA compliance
- [ ] T050 Perform final code review: check CSS is clean, no duplication, well-organized by section
- [ ] T051 Test smooth scrolling and animations on light palette - ensure they don't cause accessibility issues
- [ ] T052 Verify page loads performance is not degraded - run Lighthouse one final time
- [ ] T053 Create final git commits documenting light theme changes with descriptive messages

**Checkpoint**: Light theme implementation complete and production-ready

---

## Implementation Strategy

### MVP Delivery (User Stories 1 + 2)

**Scope**: Light color palette + project showcase clarity

**Timeline**: Implement T009-T017 (US1 baseline), then T018-T025 (US2 projects) sequentially

**Deliverable**: Portfolio with professional light theme showcasing iOS projects effectively

### Incremental Delivery (User Story 3)

**Scope**: Polish interactive states and accent colors

**Timeline**: Add T026-T034 (interactive states, accents, polish)

**Deliverable**: Modern, credible portfolio with smooth interactions

### Final Validation (User Story 4)

**Scope**: Cross-device consistency and accessibility compliance

**Timeline**: Add T035-T044 (responsive testing, accessibility audit)

**Deliverable**: Production-ready accessible portfolio across all devices

### Polish & Release (Phase 7)

**Scope**: Code cleanup and final validation

**Timeline**: T045-T053 (review, final testing, commit)

**Deliverable**: Released and committed to main branch

---

## Parallel Opportunities

**Can run in parallel** (within phase constraints):

- **Phase 1**: T001, T002, T003 (no dependencies)
- **Phase 2**: T004, T006, T008 (T005 and T007 depend on earlier results)
- **Phase 3**: T009-T014 (all update different CSS sections, independent)
- **Phase 5**: T026-T030 (all style interactive elements, independent)
- **Phase 6**: T035-T037, T039-T041 (parallel device testing)
- **Phase 7**: T045-T048, T051 (all independent code review/testing)

---

## Dependencies & Task Flow

```
Setup (T001-T003)
    ↓
Foundational (T004-T008)  ← BLOCKING GATE
    ↓
US1 (T009-T017)  ← MVP
    ├─ US2 (T018-T025)    ← Depends on US1 complete
    ├─ US3 (T026-T034)    ← Can start after T008
    ├─ US4 (T035-T044)    ← Can run in parallel with US3
    →→ Polish (T045-T053) ← Depends on all user stories complete
```

---

## Success Critera Mapping

| Task ID | Requirement | Success Criteria |
|---------|-------------|-----------------|
| T004-T007 | FR-001, FR-002, FR-003 | Color palette defined and documented |
| T015, T023, T024, T043 | FR-003, NFR-002 | WCAG AA contrast compliance validated (≥4.5:1) |
| T016-T017, T025, T035-T044 | FR-001, US non-functional | Renders consistently across devices |
| T018-T024 | FR-005, FR-007, FR-008 | Project showcase is clear and readable |
| T026-T034 | FR-004, FR-006, FR-009 | Interactive states provide clear feedback |
| T042, T052 | NFR-001 | Lighthouse score maintained ≥90 |
| T049 | NFR-002, NFR-003 | WCAG AA compliance verified |
