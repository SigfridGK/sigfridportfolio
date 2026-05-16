# UI Contract: Project Detail Page (Grouped & Single)

**Date**: 2026-05-16  
**Version**: 1.0  
**Applies to**: Project detail view for both single-project and grouped-project categories

---

## Component Purpose

The project detail page provides comprehensive information about a portfolio project or project suite. For grouped projects, it displays a top-level narrative and separate navigable sub-sections for each app.

---

## Input Contract

**Data Structure**: Full Project object with subprojects[] populated

```json
{
  "id": "goodkredit-ecosystem",
  "title": "GoodKredit & Related Apps",
  "subtitle": "Fintech Utility Platform Suite",
  "category": "grouped-project",
  "summary": "...",
  "topLevelDescription": "...",
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
    ...
  ]
}
```

---

## Output Contract: HTML Structure

### Page Layout (Top-Level)

```html
<main class="project-detail" data-project-id="goodkredit-ecosystem" data-category="grouped-project">
  
  <!-- Page Header -->
  <header class="project-detail__header">
    <div class="project-detail__breadcrumb">
      <a href="/#/projects" class="project-detail__breadcrumb-link">← Projects</a>
    </div>
    <h1 class="project-detail__title">GoodKredit & Related Apps</h1>
    <p class="project-detail__subtitle">Fintech Utility Platform Suite</p>
  </header>
  
  <!-- Top-Level Description (Grouped Projects Only) -->
  <section class="project-detail__intro" data-if="category === 'grouped-project'">
    <p class="project-detail__intro-text">
      Developed multiple iOS apps for payment processing, vouchers, and utility services using Swift and modern iOS architecture patterns.
    </p>
  </section>
  
  <!-- Sub-Project Navigation (Grouped Projects) -->
  <nav class="project-subproject-nav" data-if="category === 'grouped-project'" aria-label="App selection">
    <div class="project-subproject-nav__tabs">
      <button 
        class="project-subproject-nav__tab project-subproject-nav__tab--active" 
        data-subproject-id="goodkredit"
        aria-selected="true"
        role="tab"
      >
        GoodKredit
      </button>
      <button 
        class="project-subproject-nav__tab" 
        data-subproject-id="app-b"
        aria-selected="false"
        role="tab"
        disabled
      >
        App B (TBD)
      </button>
      <button 
        class="project-subproject-nav__tab" 
        data-subproject-id="app-c"
        aria-selected="false"
        role="tab"
        disabled
      >
        App C (TBD)
      </button>
    </div>
  </nav>
  
  <!-- Sub-Project Detail (Grouped: Visible for Active Tab; Single: Always Visible) -->
  <article class="project-subproject-detail" data-subproject-id="goodkredit" id="subproject-goodkredit">
    
    <!-- Subproject Header -->
    <div class="project-subproject-detail__header">
      <h2 class="project-subproject-detail__title">GoodKredit</h2>
      <p class="project-subproject-detail__meta">
        <span class="project-subproject-detail__role">iOS Swift Developer + REST API</span>
        <span class="project-subproject-detail__separator">•</span>
        <span class="project-subproject-detail__company">GoodApps Inc.</span>
        <span class="project-subproject-detail__separator">•</span>
        <span class="project-subproject-detail__timeframe">2019 - Oct 2023</span>
      </p>
    </div>
    
    <!-- Subproject Summary -->
    <p class="project-subproject-detail__summary">
      An electronic Gift Certificate and electronic Gift Voucher program featuring bills payment, QR pay, online store, and RFID e-card transactions.
    </p>
    
    <!-- Key Features -->
    <section class="project-subproject-detail__features">
      <h3 class="project-subproject-detail__section-title">Key Features</h3>
      <ul class="project-subproject-detail__features-list">
        <li class="project-subproject-detail__feature-item">Bills payment</li>
        <li class="project-subproject-detail__feature-item">Buy load</li>
        <li class="project-subproject-detail__feature-item">Mobile COOP organization</li>
        <li class="project-subproject-detail__feature-item">Pay QR</li>
        <li class="project-subproject-detail__feature-item">Drop-off service</li>
        <li class="project-subproject-detail__feature-item">Online store</li>
        <li class="project-subproject-detail__feature-item">RFID e-card payment</li>
        <li class="project-subproject-detail__feature-item">Play To Save Lotto</li>
      </ul>
    </section>
    
    <!-- Screenshot Gallery -->
    <section class="project-subproject-detail__gallery">
      <h3 class="project-subproject-detail__section-title">Screenshots</h3>
      <div class="project-subproject-detail__gallery-wrapper">
        <img 
          src="images/projects/goodkredit/screenshots/goodkredit-screen-1.webp" 
          alt="Payment dashboard overview" 
          class="project-subproject-detail__gallery-image"
          loading="lazy"
        />
        <img 
          src="images/projects/goodkredit/screenshots/goodkredit-screen-2.webp" 
          alt="QR payment interface" 
          class="project-subproject-detail__gallery-image"
          loading="lazy"
        />
        <img 
          src="images/projects/goodkredit/screenshots/goodkredit-screen-3.webp" 
          alt="Online store interface" 
          class="project-subproject-detail__gallery-image"
          loading="lazy"
        />
      </div>
      
      <!-- Lightbox / Modal (Optional) -->
      <div class="project-subproject-detail__lightbox" role="dialog" aria-hidden="true" aria-label="Image viewer">
        <button class="project-subproject-detail__lightbox-close" aria-label="Close image viewer">×</button>
        <img src="" alt="" class="project-subproject-detail__lightbox-image" />
        <div class="project-subproject-detail__lightbox-nav">
          <button class="project-subproject-detail__lightbox-prev" aria-label="Previous image">‹</button>
          <button class="project-subproject-detail__lightbox-next" aria-label="Next image">›</button>
        </div>
      </div>
    </section>
    
    <!-- External Links (App Store, GitHub, Demo) -->
    <section class="project-subproject-detail__links">
      <h3 class="project-subproject-detail__section-title">Links</h3>
      <div class="project-subproject-detail__links-wrapper">
        <a 
          href="https://apps.apple.com/ph/app/goodkredit/id1493360454" 
          target="_blank" 
          rel="noopener noreferrer"
          class="project-subproject-detail__link project-subproject-detail__link--appstore"
          aria-label="View GoodKredit on App Store (opens in new window)"
        >
          <svg class="project-subproject-detail__link-icon" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20">
            <!-- App Store icon SVG -->
          </svg>
          View on App Store
        </a>
      </div>
    </section>
    
  </article>
  
  <!-- Placeholder for other subprojects (if status === 'placeholder') -->
  <article class="project-subproject-detail project-subproject-detail--placeholder" data-subproject-id="app-b" id="subproject-app-b" hidden>
    <div class="project-subproject-detail__placeholder">
      <p>App B details coming soon.</p>
    </div>
  </article>
  
  <!-- Footer / Back Button -->
  <footer class="project-detail__footer">
    <a href="/#/projects" class="project-detail__back-link">← Back to Projects</a>
  </footer>
  
</main>
```

---

## CSS Styling Rules

### Page Structure
- **Max-width**: 1000px (centered on desktop)
- **Padding**: 16px on mobile; 32px on tablet/desktop
- **Background**: `var(--color-bg-primary)` (#FAFAFA)

### Header Section
- **Title** (`project-detail__title`):
  - Font Size: 32px on desktop; 24px on mobile
  - Font Weight: 700
  - Color: `var(--color-text-primary)` (#1F2937)
  - Margin Bottom: 8px

- **Subtitle** (`project-detail__subtitle`):
  - Font Size: 16px
  - Color: `var(--color-text-secondary)` (#6B7280)
  - Margin Bottom: 24px

- **Breadcrumb** (`project-detail__breadcrumb-link`):
  - Color: `var(--color-accent-blue)` (#2563EB)
  - Font Size: 14px
  - Margin Bottom: 16px
  - Hover: Text decoration underline

### Sub-Project Navigation (Grouped Projects)

**Tab Container** (`project-subproject-nav`):
- Display: flex (horizontal scroll on mobile)
- Border Bottom: 1px solid `var(--color-border)` (#E5E7EB)
- Margin Bottom: 24px

**Tab Button** (`project-subproject-nav__tab`):
- Background: transparent
- Color: `var(--color-text-secondary)` (#6B7280)
- Border: none; border-bottom: 2px solid transparent
- Padding: 12px 16px
- Font Size: 14px
- Font Weight: 500
- Cursor: pointer
- Transition: All 200ms ease-in-out

**Tab Active State** (`project-subproject-nav__tab--active`):
- Color: `var(--color-accent-blue)` (#2563EB)
- Border Bottom Color: `var(--color-accent-blue)` (#2563EB)

**Tab Focus State**:
- Outline: 2px solid `var(--color-accent-blue)`
- Outline Offset: -2px

**Tab Disabled State**:
- Opacity: 0.5
- Cursor: not-allowed

### Sub-Project Detail Section

**Title** (`project-subproject-detail__title`):
- Font Size: 24px
- Font Weight: 700
- Color: `var(--color-text-primary)`
- Margin Bottom: 8px

**Meta Information** (`project-subproject-detail__meta`):
- Font Size: 14px
- Color: `var(--color-text-secondary)` (#6B7280)
- Line Height: 1.5
- Margin Bottom: 16px

**Summary** (`project-subproject-detail__summary`):
- Font Size: 16px
- Color: `var(--color-text-primary)`
- Line Height: 1.6
- Margin Bottom: 24px

**Section Title** (`project-subproject-detail__section-title`):
- Font Size: 18px
- Font Weight: 600
- Color: `var(--color-text-primary)`
- Margin Bottom: 16px
- Margin Top: 32px (first margin top: 0)

### Features List
- **Layout**: Grid (2–3 columns on tablet/desktop; 1 column on mobile)
- **Item** (`project-subproject-detail__feature-item`):
  - Font Size: 14px
  - Color: `var(--color-text-primary)`
  - Padding: 8px
  - Bullet: `◆` or custom bullet

### Screenshot Gallery
- **Layout**: CSS Grid; 1 column on mobile; 2 columns on tablet; 3 on desktop
- **Gap**: 12px
- **Image** (`project-subproject-detail__gallery-image`):
  - Width: 100%
  - Height: auto
  - Border Radius: 6px
  - Aspect Ratio: 9/16 (mobile screenshot ratio)
  - Object-fit: cover
  - Cursor: pointer
  - Hover: Opacity 0.8; shadow elevation
  - Transition: 200ms ease-in-out

### External Links
- **Layout**: Flex; wrap on mobile
- **Link** (`project-subproject-detail__link`):
  - Background: `var(--color-accent-blue)` (#2563EB)
  - Color: #FFFFFF
  - Border: none
  - Border Radius: 6px
  - Padding: 12px 24px
  - Font Size: 14px
  - Font Weight: 600
  - Cursor: pointer
  - Display: inline-flex; align-items: center; gap: 8px
  - Hover: Background `var(--color-accent-blue-dark)` (#1D4ED8); shadow elevation
  - Focus: 2px solid outline in blue
  - Text Decoration: none

---

## Responsive Behavior

### Mobile (< 640px)
- Single column layout
- Tabs: Horizontal scroll or dropdown selector
- Gallery: 1 column
- Padding: 16px

### Tablet (640px – 1024px)
- Single column layout
- Tabs: Horizontal with wrap
- Gallery: 2 columns
- Padding: 24px

### Desktop (> 1024px)
- Single column layout (centered, max-width 1000px)
- Tabs: Horizontal
- Gallery: 3 columns
- Padding: 32px

---

## Accessibility Requirements

- **Semantic HTML**: Use `<main>`, `<section>`, `<article>`, `<nav>` for structure
- **Alt Text**: Every screenshot has descriptive alt text
- **Keyboard Navigation**: All interactive elements (tabs, links, gallery buttons) navigable via Tab key
- **ARIA Roles**: Tabs use `role="tab"`, `aria-selected`, `aria-label`
- **Focus Indicator**: Visible 2px outline on focus
- **Color Contrast**:
  - Text: 4.5:1 minimum
  - Links: 4.5:1 minimum
  - Buttons: 4.5:1 minimum
- **Skip Navigation**: Optional "Skip to content" link at top
- **Heading Hierarchy**: `<h1>` for page title; `<h2>` for subproject title; `<h3>` for section titles

---

## JavaScript Interaction

### Tab Navigation (Grouped Projects)
```javascript
// Event: Click tab button
// Action: Show corresponding subproject-detail section; hide others
// Update: aria-selected, focus management
```

### Screenshot Gallery (Lightbox)
```javascript
// Event: Click on gallery image
// Action: Open lightbox modal with image
// Navigation: Prev/Next buttons to cycle through images
// Close: ESC key, close button, click outside
```

### External Links
```javascript
// Event: Click link (App Store, GitHub, etc.)
// Action: Open in new tab (target="_blank")
// Tracking: Optional analytics event (not blocking)
```

### Dynamic Rendering
- Subproject content renders based on `data-subproject-id` attribute
- Placeholder subprojects marked with `status: "placeholder"` appear disabled/grayed out
- Non-published subprojects hidden unless explicitly selected (optional feature flag)

---

## Performance Targets

- Page Load (first paint): ≤1.5s
- Screenshot Load (lazy): ≤2s
- Tab Switch: ≤100ms
- Lightbox Open: ≤200ms
- Overall Lighthouse Score: ≥90

---

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari (macOS/iOS): Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Mobile 90+
