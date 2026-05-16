# Research: GoodKredit Portfolio Integration

**Date**: 2026-05-16  
**Phase**: 0 (Research & Clarification)  
**Focus**: Content strategy, portfolio integration, and data modeling approach

---

## 1. Content Structure for Grouped Projects

### Decision
GoodKredit and the two planned additional apps will be grouped under a single combined project entry in the portfolio. The grouping reduces visual clutter while clearly presenting related apps as a cohesive showcase of the developer's work in the fintech/utility app space.

### Rationale
- **User Impact**: Hiring managers can quickly assess the developer's range within a specific domain (fintech apps) without navigating multiple separate project entries.
- **Content Efficiency**: Centralizes related app descriptions, screenshots, and links under one project narrative.
- **Scalability**: Simplifies adding App B and App C later without duplicating portfolio UI code.
- **Branding**: Positions the developer as a specialist in multi-service platform development.

### Implementation Approach
**Data Structure** (projects.json):
```json
{
  "projects": [
    {
      "id": "goodkredit-ecosystem",
      "title": "GoodKredit & Related Apps",
      "subtitle": "Fintech Utility Platform Suite",
      "category": "grouped-project",
      "summary": "A collection of iOS fintech apps showcasing full-stack development from design to App Store deployment.",
      "featured": true,
      "cardThumbnail": "images/projects/goodkredit/card-thumbnail.webp",
      "topLevelDescription": "Developed multiple iOS apps for payment processing, vouchers, and utility services using Swift and modern iOS architecture patterns.",
      "subprojects": [
        {
          "id": "goodkredit",
          "title": "GoodKredit",
          "role": "iOS Swift Developer + REST API",
          "company": "GoodApps Inc.",
          "timeframe": "2019 - Oct 2023",
          "summary": "...",
          "features": [...],
          "screenshots": [...],
          "externalLinks": [...]
        },
        {
          "id": "app-b",
          "title": "App B (TBD)",
          "role": "...",
          "company": "...",
          "timeframe": "...",
          "summary": "Planned addition",
          "status": "placeholder"
        },
        {
          "id": "app-c",
          "title": "App C (TBD)",
          "status": "placeholder"
        }
      ]
    }
  ]
}
```

### Content Workflow
1. **Initial Population**: Provide GoodKredit subproject data, placeholders for Apps B & C.
2. **Update Path**: To add App B/C, update projects.json `subprojects[]` array and add screenshot assets.
3. **No Code Changes Required**: Portfolio HTML/CSS/JS will dynamically render sub-sections from the data structure.

---

## 2. Portfolio Integration Points

### Decision
The GoodKredit project will be integrated into the existing Sigfrid portfolio (index.html, styles.css, script.js) by reusing established patterns for project cards and extending them to support sub-section rendering.

### Rationale
- **Code Reuse**: Existing project card template used for other portfolio entries can be adapted.
- **Consistency**: Maintains visual hierarchy and interaction patterns already established in the portfolio.
- **Performance**: No new dependencies or heavy JavaScript libraries; vanilla ES6 suffices.
- **Maintainability**: Clean separation between data (projects.json) and presentation (HTML/CSS/JS).

### Integration Strategy

**Step 1: Examine Existing Portfolio**
- Review index.html for project card structure and rendering location.
- Identify CSS classes and styling for cards (`.project-card`, `.project-card__title`, etc.).
- Check script.js for event handlers and DOM manipulation patterns.

**Step 2: Extend HTML Structure**
- Add a conditional rendering block in the projects section to detect grouped projects:
  ```html
  <div class="project-card project-card--grouped" data-project-id="goodkredit-ecosystem">
    <div class="project-card__header">
      <h3 class="project-card__title">GoodKredit & Related Apps</h3>
    </div>
    <div class="project-subprojects-nav">
      <button class="subproject-tab" data-subproject="goodkredit">GoodKredit</button>
      <button class="subproject-tab" data-subproject="app-b">App B</button>
      <button class="subproject-tab" data-subproject="app-c">App C</button>
    </div>
    <div class="project-subproject-content" id="goodkredit-content">
      <!-- Dynamically rendered subproject details -->
    </div>
  </div>
  ```

**Step 3: Add CSS Styles**
- Define styles for `.project-card--grouped`, `.project-subprojects-nav`, `.subproject-tab`, `.project-subproject-content`.
- Reuse existing CSS variables for colors, spacing, typography.
- Ensure responsive behavior on mobile (tab buttons stack or collapse into dropdown).

**Step 4: Add JavaScript Interaction**
- Function `renderSubprojects(projectData)`: Dynamically generate sub-section content from projects.json.
- Function `handleSubprojectNavigation(tabButton)`: Switch active tab, update content display.
- Function `openExternalLink(url)`: Handle App Store link opening (target="_blank").
- Event listeners on tab buttons and external links.

### Output
- Plan for modifying index.html, styles.css, script.js (documented in quickstart.md)
- Approach for projects.json integration (detailed in data-model.md)

---

## 3. Asset Management for Multi-App Project

### Decision
Each app's assets (screenshots, thumbnails) will be organized in a subfolder structure under `images/projects/goodkredit/`. This centralizes assets for the grouped project and simplifies adding assets for Apps B and C.

### Rationale
- **Organization**: Clear folder hierarchy reduces asset filename collisions and improves discoverability.
- **Scalability**: Easy to duplicate the structure for App B and App C folders when ready.
- **Portability**: Assets bundled with project data; can be exported or archived as a unit.

### Asset Structure
```
images/projects/goodkredit/
├── card-thumbnail.webp          # 500x300px, for listing card
├── screenshots/
│   ├── goodkredit-screen-1.webp  # 1080x1920px (iPhone format)
│   ├── goodkredit-screen-2.webp
│   ├── goodkredit-screen-3.webp
│   └── ...
└── [future: app-b/, app-c/]
```

### Asset Metadata in projects.json
```json
"screenshots": [
  {
    "id": "gk-screen-1",
    "url": "images/projects/goodkredit/screenshots/goodkredit-screen-1.webp",
    "caption": "Payment dashboard overview",
    "displayOrder": 1
  },
  ...
]
```

### Optimization Guidelines
- **Format**: Use WebP for modern browsers; provide fallback JPEG for older browsers.
- **Dimensions**: Optimize for mobile-first; responsive images using `srcset` if needed.
- **Loading**: Lazy-load screenshots; prioritize card thumbnail.
- **Compression**: Reduce file size using tools like ImageOptim or TinyPNG without visible quality loss.

---

## 4. Technology Stack for Detail Page

### Decision
Vanilla HTML/CSS/JavaScript (ES6+) with no external framework dependencies. The detail page will use CSS Grid/Flexbox for layout and vanilla DOM manipulation for interactivity.

### Rationale
- **Alignment with Constitution**: Portfolio emphasizes clean code and no external framework dependencies.
- **Performance**: No overhead from frameworks; faster page load and rendering.
- **Maintainability**: Code is transparent and easily reviewed; future developers can understand without framework knowledge.
- **iOS Developer Brand**: Demonstrates command of native web fundamentals, mirroring iOS native development philosophy.

### Technology Choices

**HTML5 Semantic Markup**:
- Use `<article>`, `<section>`, `<nav>` for project and sub-section structure.
- Use `<figure>` + `<figcaption>` for screenshots with captions.
- Use `<dl>` (definition list) for project metadata (role, timeframe, company).

**CSS3 with Variables**:
- Reuse existing CSS variables (--color-accent-blue, --color-text-primary, etc. from constitution).
- Define new variables for grouped project styling: --project-subproject-border, --subproject-active-bg.
- Use CSS Grid for screenshot gallery layout; Flexbox for navigation tabs.
- Media queries for mobile/tablet/desktop breakpoints.

**JavaScript (ES6+)**:
- Arrow functions, template literals, const/let scoping.
- DOM event delegation for tab navigation and link handling.
- Fetch API to load projects.json (if data is not embedded in HTML).
- Optional: Simple lightbox for screenshot viewing (pure JS, no jQuery/library).

### No External Dependencies
- No jQuery, Bootstrap, Tailwind, or other CSS frameworks.
- No lightbox library (build simple modal using CSS + vanilla JS if needed).
- No data library (fetch() and native array methods suffice).

---

## 5. Accessibility & Performance Strategy

### Accessibility (WCAG 2.1 AA)
- **Alt Text**: Every screenshot has descriptive alt text (e.g., "GoodKredit payment dashboard showing bills payment interface").
- **Keyboard Navigation**: Tab through sub-project tabs, external links, and gallery controls.
- **ARIA Labels**: Use `aria-current="page"` for active tab; `aria-label` for icon-only buttons.
- **Color Contrast**: Text and backgrounds meet 4.5:1 ratio using established CSS variables.
- **Semantic HTML**: Proper heading hierarchy; screen reader friendly.

### Performance (Lighthouse ≥90)
- **Image Optimization**: WebP + fallback; lazy-load screenshots.
- **Critical Rendering Path**: Inline critical CSS; defer non-critical CSS/JS.
- **Caching**: Screenshot gallery images cached by browser.
- **Bundle Size**: Keep script.js additions under 5KB (minified).
- **Testing**: Run Lighthouse audit on detail page; target ≥90 performance score.

---

## 6. Data Validation & Constraints

### Data Schema Validation
- **Required Fields**: Each subproject must include id, title, role, company, timeframe, externalLinks[].
- **Validation Rules**:
  - URL fields must be valid HTTP/HTTPS URLs (validate with regex or URL() constructor).
  - Screenshots displayOrder must be unique within a subproject.
  - External link type must be one of: "appstore", "github", "demo", "other".

### Edge Cases Handling
1. **Missing Screenshots**: Display placeholder image with message "Screenshots not available yet."
2. **Unreachable App Store Link**: Display link but add inline note "Link could not be verified" if fetch returns error.
3. **Very Small Screen**: Ensure tabs stack and screenshot gallery adapts to single-column layout.
4. **No JavaScript**: Fallback behavior—show all subprojects stacked (no tab interaction), all links functional.

---

## Summary of Findings

| Topic | Finding | Next Step |
|-------|---------|-----------|
| Content Structure | Grouped project with subprojects[] array in projects.json | Implement data-model.md |
| Portfolio Integration | Reuse existing card patterns; extend HTML/CSS/JS | Define UI contracts in contracts/ |
| Asset Management | Centralized folder structure under images/projects/goodkredit/ | Document in quickstart.md |
| Technology | Vanilla HTML5/CSS3/JavaScript ES6+ | Confirm in data-model.md |
| Accessibility | WCAG AA compliance via semantic HTML + CSS variables | Implement and test during task phase |
| Performance | Lighthouse ≥90 target; image optimization + lazy-load | Verify in acceptance testing |

---

## Ready for Phase 1: Design & Contracts

All research questions have been resolved. Proceed to Phase 1 to generate:
- data-model.md (detailed entity schema)
- contracts/ (UI and data contracts)
- quickstart.md (step-by-step implementation guide)
- Agent context update (for Claude/Copilot guidance)
