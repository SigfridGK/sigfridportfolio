# Implementation Plan: Add GoodKredit Portfolio Item

**Branch**: `004-goodkredit-portfolio-item` | **Date**: 2026-05-16 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `/specs/004-goodkredit-portfolio-item/spec.md`

**Note**: This plan covers adding the GoodKredit project card and detail page to the Sigfrid portfolio as a grouped project with planned sub-sections for two additional apps.

## Summary

Add a GoodKredit portfolio entry to showcase an iOS fintech/utility app featuring electronic gift certificates, vouchers, and mini services (bills payment, QR pay, store, RFID e-card, Play-to-Save Lotto). The portfolio site will display the project on the listing page and provide a detail page grouping GoodKredit and two planned related apps as sub-sections. Each app will include a summary, screenshot gallery, and App Store link.

## Technical Context

**Language/Version**: HTML5, CSS3, JavaScript (ES6+)  
**Primary Dependencies**: None (static site using CSS variables, no external frameworks)  
**Storage**: File-based content (JSON or markdown for project metadata)  
**Testing**: Manual testing (browser testing, Lighthouse audit, accessibility validation)  
**Target Platform**: Web (all modern browsers, mobile-responsive)  
**Project Type**: Static portfolio website component  
**Performance Goals**: Lighthouse score ≥90, page load <2s  
**Constraints**: Responsive design (mobile-first), WCAG 2.1 AA accessibility, 44px touch targets, no external dependencies beyond existing portfolio  
**Scale/Scope**: 1 combined project entry with 3 sub-sections (apps), ~5–10 screenshot assets, simple data structure

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

**Principle I: Clean Code & Maintainability** ✓ PASS
- HTML will use semantic tags for project structure.
- CSS will use CSS variables (already established in constitution) for colors and spacing.
- JavaScript will be minimal; interaction logic will be vanilla ES6.
- Rationale: Maintains portfolio code quality standards; no framework sprawl.

**Principle II: Responsive Design (Mobile-First)** ✓ PASS
- Project card and detail page will use flexbox/grid with mobile-first breakpoints.
- Touch-friendly: primary CTAs (view detail, open store link) ≥44px.
- Rationale: Aligns with portfolio mobile-first strategy and iOS developer brand.

**Principle III: Performance & Accessibility** ✓ PASS
- Semantic HTML for project sections, alt text for screenshots, ARIA labels for external links.
- Images optimized and lazy-loaded; light theme with CSS variables ensures WCAG AA contrast.
- Rationale: Constitution mandate; validates accessibility compliance.

**Principle V: iOS Development Showcase** ✓ PASS
- GoodKredit project prominently displays iOS tech stack (Swift, MVC, eGHL SDK, Firebase ecosystem).
- Detail page includes App Store link and technical accomplishments (payment integration, multi-service architecture).
- Rationale: Showcases iOS expertise as primary career focus.

**Principle VII: Professional Presentation & Visual Branding** ✓ PASS
- Project card follows established light theme color palette and spacing conventions.
- Detail page maintains cohesive design with typography, shadows, and modern aesthetic.
- Rationale: Consistent with portfolio visual standards.

**Result**: NO VIOLATIONS. Feature aligns with all core principles. Proceed to Phase 0.

## Project Structure

### Documentation (this feature)

```text
specs/004-goodkredit-portfolio-item/
├── plan.md              # This file (/speckit.plan command output)
├── spec.md              # Feature specification
├── research.md          # Phase 0 output: Content strategy and display approach
├── data-model.md        # Phase 1 output: Project and subproject data schema
├── quickstart.md        # Phase 1 output: Implementation guide for portfolio integration
├── contracts/           # Phase 1 output: UI contract for project card and detail page
└── checklists/
    └── requirements.md  # Specification quality checklist
```

### Source Code (portfolio repository)

```text
.
├── index.html           # Portfolio homepage; projects listing section to be updated
├── styles.css           # Existing CSS with variables; new styles added for grouped projects
├── script.js            # Existing JavaScript; interaction handlers for project detail expansion/collapse
│
├── images/              # Portfolio assets (existing)
│   └── projects/        # Subfolder: GoodKredit project artifacts
│       └── goodkredit/
│           ├── card-thumbnail.webp
│           └── screenshots/
│               ├── goodkredit-screen-1.webp
│               ├── goodkredit-screen-2.webp
│               └── goodkredit-screen-3.webp
│
└── data/                # Project data (new folder for centralized content)
    └── projects.json    # Structured project data (card metadata, subprojects, links)
```

**Structure Decision**: 
- Portfolio homepage (index.html, styles.css, script.js) remain as primary files.
- New `data/projects.json` centralizes project metadata for easy editing and portability.
- Grouped projects (GoodKredit + 2 planned apps) are managed as a single project entry with a `subprojects[]` array in projects.json.
- Existing CSS variables are reused; new classes added for sub-section styling (e.g., `.project-subproject`, `.project-group-nav`).
- JavaScript uses vanilla ES6 for expansion/collapse of sub-sections and link handling.

## Complexity Tracking

No violations detected. Standard portfolio feature scope. No additional projects, repositories, or dependencies introduced.

---

## Phase 0: Research & Content Strategy

**Objective**: Establish how GoodKredit project content integrates with the existing portfolio structure and define the data schema for grouped projects.

### Research Tasks

1. **Content Structure for Grouped Projects**
   - Decision: GoodKredit + 2 planned apps grouped under single combined project entry.
   - Rationale: Aligns with clarification (Option B); reduces visual clutter on projects listing.
   - Approach: projects.json will store a top-level project with a `subprojects[]` array. Detail page will render sub-sections with navigation anchors.

2. **Existing Portfolio Integration Points**
   - Decision: Reuse existing HTML structure (project card template); extend with sub-project navigation.
   - Rationale: Minimizes duplicate code; maintains visual consistency with other portfolio entries.
   - Approach: Examine index.html and script.js for project card rendering patterns; apply same patterns to sub-sections.

3. **Asset Management for Multi-App Project**
   - Decision: Store each app's screenshots in a subfolder under `images/projects/goodkredit/`; reference via projects.json.
   - Rationale: Centralizes assets; simplifies adding App B and App C screenshots later.
   - Approach: projects.json includes `subprojects[].screenshots[]` with relative paths.

4. **Technology Stack for Detail Page**
   - Decision: Vanilla HTML/CSS/JavaScript (no external libraries); CSS variables for theming.
   - Rationale: Aligns with portfolio architecture (no framework dependencies); emphasizes clean code principles.
   - Approach: Detail page uses CSS Grid/Flexbox for layout; JavaScript event listeners for sub-section navigation and external links.

### Output: research.md
- Content modeling approach for grouped projects
- Integration strategy with existing portfolio (HTML/CSS/JS patterns)
- Asset naming and storage strategy
- Data schema draft for projects.json

---

## Phase 1: Design & Contracts

**Objective**: Define the data schema, UI contracts, and implementation quickstart for integrating GoodKredit into the portfolio.

### 1. Data Model (data-model.md)

**Entities**:
- **Project**: top-level portfolio entry
  - id (string): unique identifier for project
  - title (string): display name (e.g., "GoodKredit & Related Apps")
  - subtitle (string): short tagline
  - summary (string): paragraph describing the grouped project
  - category (string): "grouped-project" or "single-project"
  - subprojects[] (array of Subproject): grouped apps
  - featured (boolean): whether to highlight on homepage

- **Subproject**: individual app within a grouped project
  - id (string): unique app identifier (e.g., "goodkredit", "app-b", "app-c")
  - title (string): app name
  - role (string): developer's role (e.g., "iOS Swift Developer")
  - timeframe (string): employment period (e.g., "2019 - Oct 2023")
  - summary (string): app description
  - features[] (array of string): key features
  - screenshots[] (array of Screenshot): app screenshots
  - externalLinks[] (array of ExternalLink): App Store, demo, GitHub, etc.

- **Screenshot**: image artifact for an app
  - id (string): unique identifier
  - url (string): relative or absolute path to image
  - caption (string): description of screenshot
  - displayOrder (number): sort order

- **ExternalLink**: outbound link (App Store, demo, GitHub)
  - id (string): unique identifier
  - label (string): display text (e.g., "View on App Store")
  - url (string): full URL
  - type (string): "appstore" | "github" | "demo" | "other"
  - target (string): "_blank" for external links

### 2. Interface Contracts (contracts/project-card-contract.md + contracts/project-detail-contract.md)

**Project Card Contract**:
- Input: Project object with `subprojects[]`
- Output: HTML card element with title, subtitle, thumbnail, and "View Details" CTA
- Interaction: Click card → navigate to detail page (route: `#projects/{project-id}` or dedicated page)

**Project Detail Page Contract**:
- Input: Project object with full subproject data
- Output: Detail page with top-level project summary + tabbed/navigable sub-sections
- Each sub-section displays: title, role, timeframe, features, screenshot gallery, external links
- Interaction: 
  - View gallery → lightbox or carousel for screenshots
  - Click App Store link → open in new tab
  - Sub-section navigation → highlight active sub-section, scroll to section

### 3. Implementation Quickstart (quickstart.md)

**Steps**:
1. Add GoodKredit project data to projects.json (create if not exists)
2. Update index.html projects section to support grouped projects (conditional rendering for subprojects)
3. Add CSS styles for `.project-group-nav`, `.project-subproject`, `.screenshot-gallery`
4. Add JavaScript functions: renderSubprojects(), handleSubprojectNavigation(), openExternalLink()
5. Integrate screenshot gallery (lightbox or carousel)
6. Test: responsive design on mobile/tablet/desktop, accessibility (Lighthouse, WCAG)
7. Add image assets for GoodKredit (screenshots, thumbnail)

### 4. Agent Context Update

- Run `.specify/scripts/powershell/update-agent-context.ps1 -AgentType claude`
- This updates `.claude/agent-context.md` (or `.instructions.md`) with project-specific context:
  - Portfolio structure and component naming conventions
  - CSS variable naming for grouped projects
  - JavaScript patterns for dynamic project rendering
  - Accessibility considerations (alt text, ARIA labels, keyboard navigation)

---

## Summary of Deliverables

✓ Technical Context: HTML5/CSS3/JavaScript static site, no external dependencies  
✓ Constitution Check: All principles pass (clean code, responsive design, accessibility, iOS showcase, visual branding)  
✓ Project Structure: Defined source code layout and documentation structure  
✓ Phase 0 Complete: Research approach documented (ready to generate research.md)  
✓ Phase 1 Design: Data model, contracts, and quickstart (ready to generate design files)  

**Next Step**: Execute Phase 0 (generate research.md), then Phase 1 (generate data-model.md, contracts/, quickstart.md, update agent context).
