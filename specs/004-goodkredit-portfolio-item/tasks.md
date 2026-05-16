# Tasks: Add GoodKredit Portfolio Item

**Input**: Design documents from `/specs/004-goodkredit-portfolio-item/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/, quickstart.md

**Tests**: Manual acceptance testing only (no automated test suite requested); each task includes acceptance criteria.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `- [ ] [ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- `index.html` — Portfolio homepage
- `styles.css` — Main stylesheet
- `script.js` — Main JavaScript file
- `data/projects.json` — Project metadata (new)
- `images/projects/goodkredit/` — Asset folder (new)

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Create project structure and data files

- [x] T001 Create `data/` directory structure at repository root
- [x] T002 Create `images/projects/goodkredit/` subdirectories for assets
- [x] T003 [P] Create `images/projects/goodkredit/screenshots/` for app screenshots
- [x] T004 Create initial `data/projects.json` with empty projects array
- [x] T005 [P] Prepare project assets: card thumbnail (500x300px) as `images/projects/goodkredit/card-thumbnail.webp`
- [x] T006 [P] Prepare app screenshots (1080x1920px) as `images/projects/goodkredit/screenshots/goodkredit-screen-{1,2,3}.webp`

**Checkpoint**: Directory structure and asset placeholders ready - can proceed to foundational phase

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before user story implementation

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T007 Add CSS variables for grouped projects in `styles.css` (--project-subproject-border, --subproject-active-bg)
- [ ] T008 [P] Add base project card styles (.project-card, .project-card__title, .project-card__cta) in `styles.css`
- [ ] T009 [P] Add base responsive layout styles (mobile-first breakpoints for 640px, 1024px) in `styles.css`
- [ ] T010 Add `loadProjects()` function to `script.js` to fetch and render projects from `data/projects.json`
- [ ] T011 [P] Add `createProjectCardHTML()` function to `script.js` for dynamic project card rendering
- [ ] T012 [P] Add `attachProjectCardListeners()` function to `script.js` for click event handling
- [ ] T013 Add `DOMContentLoaded` event listener in `script.js` to trigger project loading on page load

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Discover GoodKredit in Portfolio (Priority: P1) 🎯 MVP

**Goal**: Display a visible, clickable project card for GoodKredit on the portfolio homepage projects listing

**Independent Test**: 
1. Load portfolio homepage
2. Verify "GoodKredit & Related Apps" card appears in projects list
3. Click card → verify detail page URL changes (hash-based routing or page navigation)
4. On mobile (320px viewport), verify card is visible and touch target ≥44px

### Implementation for User Story 1

- [ ] T014 [P] [US1] Add .projects-grid CSS class for responsive project layout in `styles.css`
- [ ] T015 [P] [US1] Add .project-card__badge styles for "3 Apps" indicator in `styles.css`
- [ ] T016 [US1] Update `index.html` projects section: add `<div id="projects-container" class="projects-grid">` placeholder
- [ ] T017 [US1] Add GoodKredit project data to `data/projects.json` with:
  - id: "goodkredit-ecosystem"
  - title: "GoodKredit & Related Apps"
  - subtitle: "Fintech Utility Platform Suite"
  - category: "grouped-project"
  - cardThumbnail: "images/projects/goodkredit/card-thumbnail.webp"
  - Placeholder subprojects for GoodKredit, App B, App C
- [ ] T018 [US1] Verify project card renders correctly on desktop (1024px+) with image visible
- [ ] T019 [US1] Verify project card renders correctly on tablet (640px–1024px) with responsive layout
- [ ] T020 [US1] Verify project card renders correctly on mobile (320px–640px) with single-column layout
- [ ] T021 [US1] Test card click event: ensure navigation to detail page (or hash update) works
- [ ] T022 [US1] Run Lighthouse accessibility audit on projects listing; target score ≥90

**Acceptance Criteria (AC-001 from spec.md)**:
- Card present on all desktop/mobile viewport sizes
- Card navigates to detail page on click
- Touch targets ≥44px on mobile
- No console errors

**Checkpoint**: User Story 1 complete - project card is discoverable and clickable

---

## Phase 4: User Story 2 - Read Project Details and View Artifacts (Priority: P1)

**Goal**: Display a detailed project page with summary, role, features, screenshot gallery, and App Store link

**Independent Test**:
1. Click GoodKredit card → navigate to detail page
2. Verify page displays: title, subtitle, top-level description, features list, screenshots, App Store link
3. Click App Store link → opens in new tab to correct URL
4. On mobile, verify all content visible and readable without horizontal scroll

### Implementation for User Story 2

- [ ] T023 [P] [US2] Add project detail page styles (.project-detail, .project-subproject-nav, .project-subproject-detail, .project-subproject-detail__gallery) in `styles.css`
- [ ] T024 [P] [US2] Add sub-section tab styles (.project-subproject-nav__tab, .project-subproject-nav__tab--active) in `styles.css`
- [ ] T025 [P] [US2] Add screenshot gallery grid styles (.project-subproject-detail__gallery-wrapper, .project-subproject-detail__gallery-image) in `styles.css`
- [ ] T026 [US2] Create `loadProjectDetail()` function in `script.js` to fetch project by ID from `data/projects.json`
- [ ] T027 [US2] Add `renderProjectDetail()` function in `script.js` to dynamically generate detail page HTML
- [ ] T028 [US2] Add `createSubprojectHTML()` function in `script.js` for individual subproject rendering
- [ ] T029 [US2] Add `attachDetailPageListeners()` function in `script.js` for tab and link event handling
- [ ] T030 [US2] Add `switchSubproject()` function in `script.js` to handle tab switching and content updates
- [ ] T031 [US2] Update `data/projects.json` GoodKredit subproject with:
  - role: "iOS Swift Developer + REST API"
  - company: "GoodApps Inc."
  - timeframe: "2019 - Oct 2023"
  - summary: "An electronic Gift Certificate and electronic Gift Voucher program featuring bills payment, QR pay, online store, and RFID e-card transactions."
  - features[]: [Bills payment, Buy load, Mobile COOP, Pay QR, Drop-off, Online store, RFID e-card, Play To Save Lotto]
  - screenshots[]: 3 screenshots with captions
  - externalLinks[]: App Store link to https://apps.apple.com/ph/app/goodkredit/id1493360454
- [ ] T032 [US2] Add screenshot gallery interaction: clicking image opens lightbox (or expands preview)
- [ ] T033 [US2] Test detail page renders correctly on desktop (≥1024px)
- [ ] T034 [US2] Test detail page renders correctly on tablet (640px–1024px)
- [ ] T035 [US2] Test detail page renders correctly on mobile (320px–640px) with stacked layout
- [ ] T036 [US2] Verify tab navigation works: switching tabs updates active state and content display
- [ ] T037 [US2] Verify App Store link opens in new tab with correct URL (use target="_blank")
- [ ] T038 [US2] Test keyboard navigation: Tab through tabs and links; verify focus indicators visible
- [ ] T039 [US2] Verify screenshot image paths resolve (no 404 errors in browser console)
- [ ] T040 [US2] Run Lighthouse performance audit on detail page; target score ≥90 and page load <2s

**Acceptance Criteria (AC-002, AC-003 from spec.md)**:
- Detail page contains summary, role/timeframe, features, screenshot gallery, App Store link
- App Store link opens in new tab and is reachable
- All external links validated and functional
- No console errors or broken image references

**Checkpoint**: User Story 2 complete - detail page fully functional with all content visible

---

## Phase 5: User Story 3 - Review Feature Highlights and Impact (Priority: P2)

**Goal**: Display key features and business impact prominently for quick assessment by hiring managers

**Independent Test**:
1. Open GoodKredit detail page
2. Verify feature list displays all 8 features in readable format
3. Verify "Why this priority" narrative explains business value
4. On mobile, verify features readable without truncation
5. Verify hiring manager can understand app's purpose from reading the page

### Implementation for User Story 3

- [ ] T041 [P] [US3] Add feature list display styles in `styles.css` (.project-subproject-detail__features-list, .project-subproject-detail__feature-item)
- [ ] T042 [P] [US3] Add visual indicator for features (bullet points or icons) via CSS pseudo-elements or inline elements
- [ ] T043 [US3] Update `data/projects.json` GoodKredit subproject to include complete feature list with accurate descriptions
- [ ] T044 [US3] Add "Impact / Outcomes" section to detail page HTML: "This fintech suite enabled payment processing at scale with integrated voucher system and utility services"
- [ ] T045 [US3] Test feature list readability on mobile: ensure no horizontal overflow, grid adapts to single column if needed
- [ ] T046 [US3] Test "Impact" narrative is clear and motivating without being jargon-heavy
- [ ] T047 [US3] Verify SC-005 (Success Criterion): reviewer unfamiliar with project can answer "What problem did this app solve?" after reading

**Acceptance Criteria (from spec.md)**:
- Feature list clearly visible and readable
- Impact narrative explains business value
- Mobile layout adapts gracefully
- Hiring manager can quickly assess relevance

**Checkpoint**: User Stories 1, 2, and 3 all complete - full feature set delivered

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements affecting the entire feature (accessibility, performance, responsiveness, edge cases)

- [ ] T048 [P] Add placeholder image styling for missing screenshots (gray background + "Image unavailable" message)
- [ ] T049 [P] Add error handling for unreachable App Store link (display warning badge or tooltip)
- [ ] T050 [P] Optimize all images: compress to <200KB using WebP format; add fallback JPG
- [ ] T051 [P] Implement lazy loading for screenshot images (loading="lazy" attribute)
- [ ] T052 Validate alt text on all images in detail page (for screen reader accessibility)
- [ ] T053 Test keyboard accessibility: ensure all interactive elements (tabs, links, buttons) reachable via Tab key
- [ ] T054 [P] Verify WCAG 2.1 AA color contrast for all text elements using axe DevTools
- [ ] T055 Validate semantic HTML: ensure proper heading hierarchy (h1, h2, h3), use of <article>, <section>, <nav>
- [ ] T056 [P] Test on real mobile devices (iOS Safari, Chrome Mobile) - verify touch interactions, orientation change
- [ ] T057 Test animation/transition performance on low-end devices (reduce motion if smooth scrolling lags)
- [ ] T058 Validate JSON structure in `data/projects.json`: no syntax errors, all required fields present
- [ ] T059 Run final Lighthouse audit on all pages: target score ≥90 for Performance, Accessibility, Best Practices
- [ ] T060 Test responsive behavior at edge breakpoints: 320px, 480px, 640px, 768px, 1024px, 1280px
- [ ] T061 [P] Cross-browser testing: Chrome, Firefox, Safari, Edge (latest 2 versions)
- [ ] T062 [P] Test iOS Safari specifically: verify viewport scaling, input elements, bottom nav bar doesn't hide content
- [ ] T063 Verify all links have aria-label or descriptive text for screen readers
- [ ] T064 Test tab order: clicking through with Tab key should follow logical reading order
- [ ] T065 Commit all changes per git conventions: `git add data/ images/ styles.css script.js index.html; git commit -m "feat: add GoodKredit portfolio entry"`
- [ ] T066 Run quickstart.md validation: follow step-by-step guide to verify implementation matches spec

**Checkpoint**: Feature complete and ready for deployment

---

## Dependencies & Execution Order

### Phase Dependencies

| Phase | Depends On | Blocking |
|-------|-----------|----------|
| Phase 1: Setup | None | No |
| Phase 2: Foundational | Phase 1 | YES - blocks all user stories |
| Phase 3: US1 (P1) | Phase 2 | No - can start after Phase 2 |
| Phase 4: US2 (P1) | Phase 2 | No - can start after Phase 2 |
| Phase 5: US3 (P2) | Phase 2 | No - can start after Phase 2 |
| Phase 6: Polish | Phase 3, 4, 5 | No - starts when user stories ready |

### User Story Dependencies

- **User Story 1 (P1)**: No dependencies on other user stories - independent
- **User Story 2 (P1)**: Can depend on US1 data but should be independently testable
- **User Story 3 (P2)**: Can integrate with US1/US2 but should be independently testable

### Parallel Execution Example

**Scenario**: After Phase 2 foundational work is complete, team of 3 developers can work in parallel:

```
Developer A:            Developer B:            Developer C:
Phase 3: User Story 1   Phase 4: User Story 2   Phase 5: User Story 3
(Hours 1–2)             (Hours 1–3)             (Hours 1–2)

T014 CSS grid           T023 Detail page CSS    T041 Feature list CSS
T015 Badge styles       T024 Tab styles         T042 Feature indicators
T016 HTML update        T025 Gallery styles     T043 Update JSON
T017 JSON update        T026 loadProjectDetail  T044 Add impact section
T018–T022 Testing       T027 renderProjectDetail T045–T047 Testing
                        T028–T032 JavaScript
                        T033–T040 Testing

After all complete: Merge parallel work, proceed to Phase 6 Polish
```

**With 1 developer**: Execute sequentially: Phase 1 → Phase 2 → Phase 3 → Phase 4 → Phase 5 → Phase 6

---

## Task Summary

| Phase | Task Count | Focus |
|-------|-----------|-------|
| Phase 1: Setup | 6 | Project structure and assets |
| Phase 2: Foundational | 7 | CSS and JavaScript infrastructure |
| Phase 3: User Story 1 | 9 | Project card discovery |
| Phase 4: User Story 2 | 18 | Detail page and artifacts |
| Phase 5: User Story 3 | 7 | Features and impact |
| Phase 6: Polish | 19 | Accessibility, performance, testing |
| **TOTAL** | **66** | |

### Tasks per User Story

- **US1 (Discover)**: 9 tasks
- **US2 (Details)**: 18 tasks
- **US3 (Features)**: 7 tasks

---

## MVP Scope (Recommended for First Iteration)

**If time/resources limited, deliver MVP with these tasks only**:

1. Phase 1: Setup (all 6 tasks) — 30 min
2. Phase 2: Foundational (all 7 tasks) — 1 hour
3. Phase 3: US1 (T014–T022) — 1.5 hours
4. Phase 4: US2 (T023–T040, prioritize T031 for data) — 2.5 hours

**MVP Total**: ~5.5 hours, delivers project discovery + readable detail page

**Then add later**:
- Phase 5: US3 (features prominence)
- Phase 6: Polish (accessibility, performance optimizations)

---

## Incremental Delivery (Recommended Approach)

**Iteration 1 (MVP)**: Phases 1–4 (complete)
- Deliverable: Project card + detail page functional
- Lighthouse: ≥85

**Iteration 2 (Features)**: Phase 5 (complete)
- Deliverable: Feature highlights and impact visible
- Lighthouse: ≥88

**Iteration 3 (Polish)**: Phase 6 (complete)
- Deliverable: Full accessibility, performance, edge cases handled
- Lighthouse: ≥90
- Ready for production

---

## Acceptance Criteria by User Story

### User Story 1 (Discover)
- ✅ AC-001: Card visible on all viewports (320px–1280px+)
- ✅ AC-001: Card navigates to detail page on click
- ✅ AC-001: Touch targets ≥44px on mobile

### User Story 2 (Details)
- ✅ AC-002: Detail page shows summary, role/timeframe, features, gallery, link
- ✅ AC-003: App Store link opens in new tab; URL validates as reachable

### User Story 3 (Features)
- ✅ SC-006: Each app in group distinguishable; independent App Store link per app

### All User Stories
- ✅ No console errors or broken image references
- ✅ Keyboard navigable (all interactive elements reachable via Tab)
- ✅ WCAG 2.1 AA contrast compliance
- ✅ Lighthouse ≥90

---

## Next Steps After Tasks Complete

1. **Testing**: Run full test suite (Lighthouse, axe DevTools, manual browser testing)
2. **Code Review**: Self-review against code review checklist in constitution.md
3. **Deployment**: Merge to main, deploy to production
4. **Monitoring**: Check analytics for portfolio visitor engagement with GoodKredit project
5. **Future**: Add App B and App C by updating `data/projects.json` (no code changes needed)
