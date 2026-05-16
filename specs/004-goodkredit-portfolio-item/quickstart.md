# Quickstart: GoodKredit Portfolio Integration

**Date**: 2026-05-16  
**Phase**: 1 (Design)  
**Audience**: Developers implementing the GoodKredit portfolio feature

---

## Overview

This guide walks through the step-by-step integration of the GoodKredit grouped project into the Sigfrid portfolio website. The implementation involves:

1. Creating/updating `data/projects.json` with GoodKredit project data
2. Updating `index.html` to support grouped project rendering
3. Adding CSS styles for grouped projects
4. Adding JavaScript functions for tab navigation and gallery
5. Integrating screenshot assets
6. Testing and deployment

**Estimated Time**: 2–4 hours (depending on screenshot availability and customization)

---

## Prerequisites

- HTML5, CSS3, JavaScript (ES6+) knowledge
- Git workflow understanding
- Access to portfolio repository and deployment environment
- GoodKredit project assets: thumbnail image and 2–3 app screenshots (WebP format recommended)

---

## Step 1: Prepare Project Data

### 1.1 Create `data/projects.json`

Create a new file at the repository root (or in frontend folder if applicable):

```json
{
  "version": "1.0",
  "lastUpdated": "2026-05-16",
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
          "summary": "An electronic Gift Certificate and electronic Gift Voucher program featuring bills payment, QR pay, online store, and RFID e-card transactions. Published on the App Store.",
          "features": [
            "Bills payment",
            "Buy load",
            "Mobile COOP organization",
            "Pay QR",
            "Drop-off service",
            "Online store",
            "RFID e-card payment",
            "Play To Save Lotto"
          ],
          "screenshots": [
            {
              "id": "gk-screen-1",
              "url": "images/projects/goodkredit/screenshots/goodkredit-screen-1.webp",
              "caption": "Payment dashboard overview",
              "displayOrder": 1
            },
            {
              "id": "gk-screen-2",
              "url": "images/projects/goodkredit/screenshots/goodkredit-screen-2.webp",
              "caption": "QR payment interface",
              "displayOrder": 2
            },
            {
              "id": "gk-screen-3",
              "url": "images/projects/goodkredit/screenshots/goodkredit-screen-3.webp",
              "caption": "Online store interface",
              "displayOrder": 3
            }
          ],
          "externalLinks": [
            {
              "id": "appstore-link",
              "label": "View on App Store",
              "url": "https://apps.apple.com/ph/app/goodkredit/id1493360454",
              "type": "appstore",
              "target": "_blank"
            }
          ],
          "status": "published"
        },
        {
          "id": "app-b",
          "title": "App B (TBD)",
          "role": "",
          "company": "",
          "timeframe": "",
          "summary": "Planned addition",
          "features": [],
          "screenshots": [],
          "externalLinks": [],
          "status": "placeholder"
        },
        {
          "id": "app-c",
          "title": "App C (TBD)",
          "role": "",
          "company": "",
          "timeframe": "",
          "summary": "Planned addition",
          "features": [],
          "screenshots": [],
          "externalLinks": [],
          "status": "placeholder"
        }
      ]
    }
  ]
}
```

### 1.2 Populate with Your Data

Replace placeholders with actual GoodKredit information:
- `summary`: Provide your own description of the app
- `features`: Customize the feature list (keep 3–8 items)
- `screenshots`: Update file paths and captions
- `externalLinks`: Verify the App Store URL is correct

---

## Step 2: Organize Assets

### 2.1 Create Directory Structure

```bash
mkdir -p images/projects/goodkredit/screenshots
```

### 2.2 Add Image Files

Place your assets in the directory:
- `images/projects/goodkredit/card-thumbnail.webp` (500x300px recommended)
- `images/projects/goodkredit/screenshots/goodkredit-screen-1.webp` (1080x1920px mobile format)
- `images/projects/goodkredit/screenshots/goodkredit-screen-2.webp`
- `images/projects/goodkredit/screenshots/goodkredit-screen-3.webp`

**Image Optimization Tips**:
- Use WebP format for modern browsers
- Compress images using ImageOptim, TinyPNG, or similar
- Keep file sizes under 200KB per image

---

## Step 3: Update HTML (index.html)

### 3.1 Add Project Loading Script

Insert this at the end of `<head>` or before `</body>`:

```html
<script>
  // Load projects.json and render projects
  async function loadProjects() {
    try {
      const response = await fetch('data/projects.json');
      const data = await response.json();
      renderProjects(data.projects);
    } catch (error) {
      console.error('Error loading projects:', error);
    }
  }
  
  document.addEventListener('DOMContentLoaded', loadProjects);
</script>
```

### 3.2 Add Projects Container

In the HTML `<section>` where projects are listed, add:

```html
<section id="projects-container" class="projects-grid">
  <!-- Projects will be rendered here dynamically -->
</section>
```

### 3.3 Example: Full Project Card HTML Template

Add to your HTML (for reference; will be generated by JS in production):

```html
<!-- For Single Project -->
<article class="project-card" data-project-id="goodkredit-ecosystem" data-category="grouped-project">
  <div class="project-card__container">
    <div class="project-card__image-wrapper">
      <img src="images/projects/goodkredit/card-thumbnail.webp" alt="GoodKredit & Related Apps" class="project-card__image" loading="lazy" />
    </div>
    <div class="project-card__content">
      <h3 class="project-card__title">GoodKredit & Related Apps</h3>
      <p class="project-card__subtitle">Fintech Utility Platform Suite</p>
      <p class="project-card__summary">A collection of iOS fintech apps...</p>
      <div class="project-card__meta">
        <span class="project-card__badge">3 Apps</span>
      </div>
      <a href="#/projects/goodkredit-ecosystem" class="project-card__cta">View Details →</a>
    </div>
  </div>
</article>
```

---

## Step 4: Add CSS Styles (styles.css)

### 4.1 Add CSS Variables (if not present)

Ensure your `:root` selector includes these variables (or add them):

```css
:root {
  /* Backgrounds */
  --color-bg-primary: #FAFAFA;
  --color-bg-secondary: #FFFFFF;
  
  /* Text Colors */
  --color-text-primary: #1F2937;
  --color-text-secondary: #6B7280;
  
  /* Accent Colors */
  --color-accent-blue: #2563EB;
  --color-accent-blue-dark: #1D4ED8;
  --color-accent-green: #10B981;
  
  /* Borders & Shadows */
  --color-border: #E5E7EB;
  --color-shadow: rgba(0, 0, 0, 0.1);
}
```

### 4.2 Add Project Card Styles

```css
/* Project Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  margin: 32px 0;
}

/* Project Card */
.project-card {
  display: flex;
  flex-direction: column;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  box-shadow: 0 1px 3px var(--color-shadow);
  transition: all 200ms ease-in-out;
  overflow: hidden;
}

.project-card:hover {
  box-shadow: 0 4px 6px var(--color-shadow);
  transform: translateY(-2px);
}

.project-card__container {
  display: flex;
  flex-direction: column;
}

.project-card__image-wrapper {
  width: 100%;
  padding-top: 56.25%; /* 16:9 aspect ratio */
  position: relative;
  overflow: hidden;
  background: var(--color-bg-primary);
}

.project-card__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-card__content {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.project-card__title {
  font-size: 18px;
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0;
}

.project-card__subtitle {
  font-size: 14px;
  color: var(--color-text-secondary);
  margin: 0;
}

.project-card__summary {
  font-size: 14px;
  color: var(--color-text-primary);
  margin: 8px 0;
  line-height: 1.5;
}

.project-card__meta {
  margin-top: 8px;
}

.project-card__badge {
  display: inline-block;
  background: var(--color-accent-green);
  color: white;
  padding: 4px 12px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 600;
}

.project-card__cta {
  display: inline-block;
  margin-top: 12px;
  background: var(--color-accent-blue);
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: background 200ms ease-in-out;
}

.project-card__cta:hover {
  background: var(--color-accent-blue-dark);
}

.project-card__cta:focus-visible {
  outline: 2px solid var(--color-accent-blue);
  outline-offset: 2px;
}

/* Responsive */
@media (min-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }
}
```

### 4.3 Add Project Detail Page Styles

```css
/* Project Detail Page */
.project-detail {
  max-width: 1000px;
  margin: 0 auto;
  padding: 32px 16px;
}

.project-detail__header {
  margin-bottom: 32px;
}

.project-detail__title {
  font-size: 32px;
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 16px 0 8px 0;
}

.project-detail__subtitle {
  font-size: 16px;
  color: var(--color-text-secondary);
}

.project-detail__breadcrumb-link {
  color: var(--color-accent-blue);
  text-decoration: none;
  font-size: 14px;
}

.project-detail__breadcrumb-link:hover {
  text-decoration: underline;
}

/* Sub-Project Navigation */
.project-subproject-nav {
  display: flex;
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 32px;
  gap: 0;
}

.project-subproject-nav__tab {
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  padding: 12px 16px;
  color: var(--color-text-secondary);
  font-weight: 500;
  cursor: pointer;
  transition: all 200ms ease-in-out;
}

.project-subproject-nav__tab:hover {
  color: var(--color-text-primary);
}

.project-subproject-nav__tab--active {
  color: var(--color-accent-blue);
  border-bottom-color: var(--color-accent-blue);
}

.project-subproject-nav__tab:focus-visible {
  outline: 2px solid var(--color-accent-blue);
  outline-offset: -2px;
}

.project-subproject-nav__tab:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Sub-Project Detail */
.project-subproject-detail {
  margin-bottom: 48px;
}

.project-subproject-detail__title {
  font-size: 24px;
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0 0 8px 0;
}

.project-subproject-detail__meta {
  font-size: 14px;
  color: var(--color-text-secondary);
}

.project-subproject-detail__separator {
  margin: 0 8px;
}

.project-subproject-detail__summary {
  font-size: 16px;
  color: var(--color-text-primary);
  line-height: 1.6;
  margin: 16px 0 24px 0;
}

.project-subproject-detail__section-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 32px 0 16px 0;
}

/* Features List */
.project-subproject-detail__features-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.project-subproject-detail__feature-item {
  padding: 8px 0;
  color: var(--color-text-primary);
}

.project-subproject-detail__feature-item::before {
  content: "◆ ";
  color: var(--color-accent-blue);
  margin-right: 8px;
}

/* Screenshot Gallery */
.project-subproject-detail__gallery-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
}

.project-subproject-detail__gallery-image {
  width: 100%;
  height: auto;
  border-radius: 6px;
  aspect-ratio: 9/16;
  object-fit: cover;
  cursor: pointer;
  transition: opacity 200ms ease-in-out;
}

.project-subproject-detail__gallery-image:hover {
  opacity: 0.8;
}

/* External Links */
.project-subproject-detail__link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--color-accent-blue);
  color: white;
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: background 200ms ease-in-out;
}

.project-subproject-detail__link:hover {
  background: var(--color-accent-blue-dark);
}

.project-subproject-detail__link:focus-visible {
  outline: 2px solid var(--color-accent-blue);
  outline-offset: 2px;
}
```

---

## Step 5: Add JavaScript Functions (script.js)

### 5.1 Add Project Rendering Function

```javascript
// Render projects from JSON data
function renderProjects(projects) {
  const container = document.getElementById('projects-container');
  if (!container) return;
  
  container.innerHTML = projects
    .filter(p => p.featured !== false)
    .map(project => createProjectCardHTML(project))
    .join('');
  
  // Attach event listeners
  attachProjectCardListeners();
}

// Create project card HTML
function createProjectCardHTML(project) {
  const isGrouped = project.category === 'grouped-project';
  const badgeHTML = isGrouped 
    ? `<div class="project-card__meta"><span class="project-card__badge">${project.subprojects.length} Apps</span></div>`
    : '';
  
  return `
    <article class="project-card" data-project-id="${project.id}" data-category="${project.category}">
      <div class="project-card__container">
        <div class="project-card__image-wrapper">
          <img src="${project.cardThumbnail}" alt="${project.title} - ${project.subtitle}" class="project-card__image" loading="lazy" />
        </div>
        <div class="project-card__content">
          <h3 class="project-card__title">${project.title}</h3>
          <p class="project-card__subtitle">${project.subtitle}</p>
          <p class="project-card__summary">${project.summary}</p>
          ${badgeHTML}
          <a href="#/projects/${project.id}" class="project-card__cta">View Details →</a>
        </div>
      </div>
    </article>
  `;
}

// Attach click listeners to project cards
function attachProjectCardListeners() {
  document.querySelectorAll('.project-card__cta').forEach(link => {
    link.addEventListener('click', (e) => {
      const card = e.target.closest('.project-card');
      const projectId = card.dataset.projectId;
      navigateToProjectDetail(projectId);
    });
  });
}

// Navigate to project detail page
function navigateToProjectDetail(projectId) {
  // Option 1: Use hash-based routing
  window.location.hash = `/projects/${projectId}`;
  
  // Option 2: Use full page navigation (simpler)
  // window.location.href = `/project-detail.html?id=${projectId}`;
}
```

### 5.2 Add Project Detail Page Rendering (if using single-page app pattern)

```javascript
// Load and render project detail
async function loadProjectDetail(projectId) {
  try {
    const response = await fetch('data/projects.json');
    const data = await response.json();
    const project = data.projects.find(p => p.id === projectId);
    
    if (!project) {
      console.error('Project not found:', projectId);
      return;
    }
    
    renderProjectDetail(project);
  } catch (error) {
    console.error('Error loading project detail:', error);
  }
}

// Render project detail page
function renderProjectDetail(project) {
  const isGrouped = project.category === 'grouped-project';
  const container = document.querySelector('.project-detail');
  
  let subprojectNav = '';
  let subprojectContent = '';
  
  if (isGrouped) {
    subprojectNav = `
      <nav class="project-subproject-nav" aria-label="App selection">
        <div class="project-subproject-nav__tabs">
          ${project.subprojects.map((sub, idx) => `
            <button class="project-subproject-nav__tab ${idx === 0 ? 'project-subproject-nav__tab--active' : ''}" 
                    data-subproject-id="${sub.id}"
                    aria-selected="${idx === 0}"
                    role="tab"
                    ${sub.status === 'placeholder' ? 'disabled' : ''}>
              ${sub.title}
            </button>
          `).join('')}
        </div>
      </nav>
    `;
    
    subprojectContent = project.subprojects
      .map((sub, idx) => createSubprojectHTML(sub, idx === 0))
      .join('');
  } else {
    // For single projects, use the first (and only) item
    subprojectContent = createSubprojectHTML(project, true);
  }
  
  // Render page
  container.innerHTML = `
    <header class="project-detail__header">
      <a href="/#" class="project-detail__breadcrumb-link">← Projects</a>
      <h1 class="project-detail__title">${project.title}</h1>
      <p class="project-detail__subtitle">${project.subtitle}</p>
    </header>
    ${project.topLevelDescription ? `<section class="project-detail__intro"><p class="project-detail__intro-text">${project.topLevelDescription}</p></section>` : ''}
    ${subprojectNav}
    ${subprojectContent}
  `;
  
  attachDetailPageListeners();
}

// Create subproject HTML
function createSubprojectHTML(subproject, isActive = false) {
  if (subproject.status === 'placeholder') {
    return `
      <article class="project-subproject-detail project-subproject-detail--placeholder" data-subproject-id="${subproject.id}" ${!isActive ? 'hidden' : ''}>
        <div class="project-subproject-detail__placeholder">
          <p>${subproject.summary || 'Coming soon'}</p>
        </div>
      </article>
    `;
  }
  
  return `
    <article class="project-subproject-detail" data-subproject-id="${subproject.id}" ${!isActive ? 'hidden' : ''}>
      <div class="project-subproject-detail__header">
        <h2 class="project-subproject-detail__title">${subproject.title}</h2>
        <p class="project-subproject-detail__meta">
          <span class="project-subproject-detail__role">${subproject.role}</span>
          <span class="project-subproject-detail__separator">•</span>
          <span class="project-subproject-detail__company">${subproject.company}</span>
          <span class="project-subproject-detail__separator">•</span>
          <span class="project-subproject-detail__timeframe">${subproject.timeframe}</span>
        </p>
      </div>
      
      <p class="project-subproject-detail__summary">${subproject.summary}</p>
      
      <section class="project-subproject-detail__features">
        <h3 class="project-subproject-detail__section-title">Key Features</h3>
        <ul class="project-subproject-detail__features-list">
          ${subproject.features.map(f => `<li class="project-subproject-detail__feature-item">${f}</li>`).join('')}
        </ul>
      </section>
      
      ${subproject.screenshots && subproject.screenshots.length > 0 ? `
      <section class="project-subproject-detail__gallery">
        <h3 class="project-subproject-detail__section-title">Screenshots</h3>
        <div class="project-subproject-detail__gallery-wrapper">
          ${subproject.screenshots.map(ss => `
            <img src="${ss.url}" alt="${ss.caption}" class="project-subproject-detail__gallery-image" loading="lazy" />
          `).join('')}
        </div>
      </section>
      ` : ''}
      
      ${subproject.externalLinks && subproject.externalLinks.length > 0 ? `
      <section class="project-subproject-detail__links">
        <h3 class="project-subproject-detail__section-title">Links</h3>
        <div class="project-subproject-detail__links-wrapper">
          ${subproject.externalLinks.map(link => `
            <a href="${link.url}" target="${link.target}" rel="noopener noreferrer" class="project-subproject-detail__link">${link.label}</a>
          `).join('')}
        </div>
      </section>
      ` : ''}
    </article>
  `;
}

// Attach detail page event listeners
function attachDetailPageListeners() {
  // Tab navigation
  document.querySelectorAll('[role="tab"]').forEach(tab => {
    tab.addEventListener('click', (e) => {
      const subprojectId = e.target.dataset.subprojectId;
      switchSubproject(subprojectId);
    });
  });
}

// Switch active subproject tab
function switchSubproject(subprojectId) {
  // Update tabs
  document.querySelectorAll('[role="tab"]').forEach(tab => {
    const isActive = tab.dataset.subprojectId === subprojectId;
    tab.classList.toggle('project-subproject-nav__tab--active', isActive);
    tab.setAttribute('aria-selected', isActive);
  });
  
  // Update content
  document.querySelectorAll('.project-subproject-detail').forEach(detail => {
    const isActive = detail.dataset.subprojectId === subprojectId;
    detail.hidden = !isActive;
  });
}
```

---

## Step 6: Testing Checklist

- [ ] Project card displays correctly on mobile/tablet/desktop
- [ ] Project card image loads without errors
- [ ] Click "View Details" navigates to detail page
- [ ] Project detail page renders with all sections
- [ ] Sub-project tabs work (switch between apps)
- [ ] Screenshots load and display properly
- [ ] App Store link opens in new tab
- [ ] Page passes Lighthouse accessibility check (≥90 score)
- [ ] All external links are reachable (200 OK)
- [ ] Mobile touch targets are ≥44px

---

## Step 7: Deployment

### 7.1 Commit Changes

```bash
git add data/projects.json images/projects/goodkredit/ styles.css script.js index.html
git commit -m "feat: add GoodKredit grouped project to portfolio"
```

### 7.2 Deploy

Push to main branch and deploy to production per your normal workflow.

### 7.3 Verification

1. Visit portfolio homepage
2. Verify GoodKredit card appears in projects listing
3. Click "View Details" and verify detail page loads
4. Test tab navigation and external links
5. Run Lighthouse audit

---

## Next Steps

**Adding App B & App C**:
1. Update `data/projects.json` with new subproject data
2. Add screenshot assets to `images/projects/goodkredit/screenshots/`
3. Update tab navigation and content dynamically (no code changes needed)
4. Test and deploy

---

## Support & Troubleshooting

- **Projects not loading**: Check browser console for fetch errors; verify `data/projects.json` path
- **Images not showing**: Verify file paths in `data/projects.json` match actual asset locations
- **Styles not applying**: Check CSS specificity and browser DevTools for overrides
- **Links not working**: Validate URLs in `data/projects.json`; ensure `target="_blank"` is present

