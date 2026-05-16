# Tasks: Add NativeCamp to Featured Projects

**Input**: Design documents from `specs/003-add-nativecamp-feature/`  
**Feature Spec**: [spec.md](spec.md)  
**Feature Branch**: `003-add-nativecamp-feature`  
**Status**: Ready for Implementation

---

## Implementation Strategy

### MVP Scope (Recommended)
Complete **User Story 1** for immediate value - NativeCamp appears in projects with icon and name. This delivers the core discoverability requirement and can be deployed independently.

**Suggested Phasing**:
- **MVP Sprint 1**: Phase 1-3 (Setup + US1) = ~30 min, fully functional
- **Sprint 2**: Phase 4 (US2 - description) = ~15 min, adds value proposition context
- **Sprint 3**: Phase 5-6 (US3 + Polish) = ~20 min, complete feature with polish

### Parallel Execution
Tasks marked **[P]** can run in parallel (different files, no dependencies on incomplete tasks).

**Recommended Parallel Example**:
- T001 (verify icon asset) → then all subsequent tasks can proceed in parallel
- T002, T003, T004, T005 can all start together once foundation ready

---

## Dependencies & Completion Order

```
Phase 1 (Setup) 
    ↓ MUST complete before proceeding
Phase 2 (Foundational - HTML/CSS structure)
    ↓ MUST complete before user story work
Phase 3 (US1: Discover NativeCamp) → Independent test ✓
    ↓ Can proceed independently
Phase 4 (US2: Learn Value) → Independent test ✓
    ↓ Can proceed independently
Phase 5 (US3: Access NativeCamp) → Independent test ✓
    ↓ May proceed independently
Phase 6 (Polish & Verification)
    ↓ Final integration and cross-browser testing
```

**Note**: User Stories 1, 2, 3 can be implemented in any order after Phase 2, but recommended order is 1→2→3 for MVP progression.

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Verify assets and establish initial project structure for NativeCamp feature

- [ ] T001 Verify nativecamp-app-icon.png exists in assets/images/ directory and is optimized for web (PNG format, dimensions noted)
- [ ] T002 [P] Add NativeCamp feature entry to portfolio documentation (update CLAUDE.md with "NativeCamp" in project list)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Create shared HTML and CSS structure for project cards (not specific to NativeCamp)

**⚠️ CRITICAL**: This phase establishes the component foundation - no user story work begins until complete

- [ ] T003 Review existing project card component in index.html (lines ~70-130) to understand current HTML structure
- [ ] T004 [P] Review existing project card CSS in styles.css (search for .project-card) to understand styling patterns
- [ ] T005 [P] Verify project card CSS supports technology badges with .project-link styling for green badges
- [ ] T006 Ensure responsive design breakpoints work (verify @media queries at 768px and 1024px in styles.css)

**Checkpoint**: Foundation ready ✓ - Project card HTML/CSS structure understood and verified

---

## Phase 3: User Story 1 - Portfolio Visitor Discovers NativeCamp (Priority: P1) 🎯 MVP

**Goal**: NativeCamp appears in the projects grid with icon and name - core discoverability

**Independent Test**: 
1. Navigate to portfolio projects section
2. Verify NativeCamp card appears alongside GoodKredit, PaydayToday, GiftBeam
3. Verify card displays nativecamp-app-icon.png image
4. Verify card title reads "NativeCamp"
5. Feature is complete and testable on its own ✓

### Implementation for User Story 1

- [ ] T007 [P] [US1] Add NativeCamp project HTML block to index.html projects section (after existing GiftBeam project, before closing projects div)
  - Include: `<div class="project-card">` structure with icon img, h3 title "NativeCamp", description container
  - Image: `<img src="assets/images/nativecamp-app-icon.png" alt="NativeCamp - unlimited English conversation lessons platform">`
  - Title: `<h3>NativeCamp</h3>`

- [ ] T008 [US1] Add NativeCamp project data structure to JavaScript if tracking is needed (optional, add click handler in script.js if user clicks project card)

**Checkpoint**: User Story 1 complete ✓
- NativeCamp visible in projects section with icon and name
- Fully testable independently
- Ready to deploy or proceed to Story 2

---

## Phase 4: User Story 2 - Visitor Learns About NativeCamp Value Proposition (Priority: P2)

**Goal**: Project description clearly communicates NativeCamp's value - unlimited English lessons, mobile platform

**Independent Test**:
1. Scroll to NativeCamp project card in projects section
2. Read the project description text
3. Verify description states: platform provides "unlimited English conversation lessons"
4. Verify description mentions "mobile" or "app" aspect
5. Feature is complete and testable independently ✓

### Implementation for User Story 2

- [ ] T009 [P] [US2] Add project description paragraph to NativeCamp card in index.html
  - Content: "Unlimited English conversation lessons platform with mobile-first accessibility for learners worldwide"
  - Location: Within project-card div, after `<h3>NativeCamp</h3>`, inside `<p>` tag
  - File: index.html, NativeCamp project-card section (around line ~T007 location)

- [ ] T010 [US2] Verify CSS styling for project description text uses correct colors (var(--color-text-secondary) for secondary text color)
  - Check styles.css for `.project-card p { color: var(--color-text-secondary); }`
  - Ensure color contrast meets WCAG AA 4.5:1 minimum

**Checkpoint**: User Story 2 complete ✓
- NativeCamp description visible and communicates value proposition
- Both Stories 1 & 2 working independently
- Ready to proceed to Story 3 or deploy

---

## Phase 5: User Story 3 - Visitor Accesses NativeCamp (Priority: P3)

**Goal**: Project card includes interactive link to NativeCamp website - enables visitor engagement

**Independent Test**:
1. Locate NativeCamp project card in projects section
2. Find the clickable link/button on the card
3. Click the link and verify navigation to https://nativecamp.net (or expected destination)
4. Verify link has visible hover state (underline, color change)
5. Feature is complete and testable independently ✓

### Implementation for User Story 3

- [ ] T011 [P] [US3] Add NativeCamp website link (project-links section) to project card in index.html
  - Link element: `<div class="project-links"><a href="https://nativecamp.net" class="project-link" target="_blank">Visit NativeCamp</a></div>`
  - Location: Within NativeCamp project-card div, after description paragraph
  - File: index.html, NativeCamp project-card section

- [ ] T012 [US3] Add technology badges for Swift, Firebase, SwiftUI to NativeCamp card in index.html
  - Structure: Add badge divs or spans with class "project-link" (reuses existing badge styling)
  - Each badge: `<span class="project-link" style="cursor: default;">Swift</span>` (or use badge-specific class if available)
  - Location: Within project-links div, alongside or above Visit link
  - Technologies: Swift, Firebase, SwiftUI (three separate badges)
  - File: index.html, NativeCamp project-card section

- [ ] T013 [P] [US3] Verify project link CSS styling in styles.css (.project-link hover state)
  - Check: `.project-link:hover { background-color: var(--color-accent-blue); opacity: 0.9; }`
  - Ensure: Focus states are visible for keyboard navigation (outline: 2px solid)
  - File: styles.css, search for `.project-link`

**Checkpoint**: User Story 3 complete ✓
- All Stories 1, 2, 3 working independently
- Full feature accessible and functional
- Ready for final polish phase

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Ensure responsive design, accessibility, consistency, and browser compatibility

### Responsive Design Verification

- [ ] T014 [P] Test NativeCamp project card on mobile viewport (320px width)
  - Verify: Card layout adapts, icon scales appropriately, text remains readable
  - Check: No horizontal scrolling, touch targets ≥44px
  - File: Open `index.html` in browser at 320px width, or use DevTools device emulation
  
- [ ] T015 [P] Test NativeCamp project card on tablet viewport (768px width)
  - Verify: Card displays correctly with grid layout, all elements visible
  - File: DevTools tablet emulation (iPad)

- [ ] T016 [P] Test NativeCamp project card on desktop viewport (1024px+ width)
  - Verify: Card aligns with other projects in grid, spacing and sizing consistent
  - File: Full-size browser window or DevTools 1024px emulation

### Accessibility & Compliance

- [ ] T017 [P] Verify alt text for NativeCamp icon is descriptive
  - Check: index.html img alt="NativeCamp - unlimited English conversation lessons platform"
  - Test: Disable images in browser, verify alt text displays meaningfully

- [ ] T018 [P] Verify color contrast for project description and links meets WCAG AA standard
  - Tool: Use browser DevTools or WebAIM contrast checker
  - Target: 4.5:1 contrast ratio minimum for text
  - Check: Text on background colors in both light and any dark modes

- [ ] T019 Verify keyboard navigation works for NativeCamp link
  - Test: Use Tab key to navigate to "Visit NativeCamp" link from projects section
  - Verify: Link has visible focus outline (2px solid in accent color)
  - File: index.html (no code changes, just verification)

### Cross-Browser Testing

- [ ] T020 [P] Test NativeCamp card in Chrome/Edge (Chromium-based)
  - Verify: Icon displays, layout correct, link works, responsive breakpoints work

- [ ] T021 [P] Test NativeCamp card in Firefox
  - Verify: Icon displays, layout correct, link works, no rendering issues

- [ ] T022 [P] Test NativeCamp card in Safari (desktop or iOS simulator)
  - Verify: Icon displays correctly, responsive design works, no font rendering issues

### Final Integration

- [ ] T023 Verify NativeCamp appears correctly positioned in projects grid
  - Should appear as 4th card (after GoodKredit, PaydayToday, GiftBeam) or in logical position in grid
  - Verify: Grid layout doesn't break, spacing consistent with other cards

- [ ] T024 Run Lighthouse performance audit
  - Target: Maintain ≥90 score for portfolio
  - Check: Image is optimized, no new performance regressions
  - File: DevTools Lighthouse in browser

- [ ] T025 Final visual inspection and sign-off
  - Verify: All three user stories working
  - Verify: Design consistent with light theme
  - Verify: No visual regressions to other projects
  - Verify: All requirements from spec met

**Checkpoint**: Feature complete and production-ready ✓

---

## Summary

**Total Tasks**: 25 tasks across 6 phases

**Per User Story**:
- **US1 (Discover)**: T007, T008 = 2 tasks (P1 - MVP focus)
- **US2 (Learn)**: T009, T010 = 2 tasks (P2)
- **US3 (Access)**: T011, T012, T013 = 3 tasks (P3)
- **Setup**: T001, T002 = 2 tasks (foundation)
- **Foundational**: T003, T004, T005, T006 = 4 tasks (prerequisites)
- **Polish**: T014-T025 = 12 tasks (quality & verification)

**Parallel Opportunities**:
- T001 must complete first (verify asset)
- T002-T006 can start after T001
- T007-T012 can start in parallel after T006
- T014-T022 can all run in parallel (different browsers/viewports)
- T023-T025 sequential (final integration)

**MVP Path** (Recommended for Quick Delivery):
1. Complete T001-T006 (Setup + Foundation) = ~10 min
2. Complete T007-T008 (US1) = ~15 min
3. Quick visual test = ~5 min
4. **Total MVP: ~30 min, fully functional**

Then iteratively add US2, US3, Polish as needed.

**Estimated Effort**:
- MVP (User Story 1): 30-45 minutes
- Full Feature (All Stories): 60-90 minutes
- Polish & Testing: 30-45 minutes
- **Total Project**: 2-3 hours for production-ready delivery

---

## Next Steps

✅ Tasks generated and ready for implementation  
→ Run `/speckit.implement` to begin task execution  
→ Or start manually with T001 (verify icon asset exists)
