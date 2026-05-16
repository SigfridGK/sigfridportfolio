# UI Contract: Project Card (Grouped & Single)

**Date**: 2026-05-16  
**Version**: 1.0  
**Applies to**: Both single-project and grouped-project categories

---

## Component Purpose

The project card is a visual representation of a portfolio entry on the projects listing page. It displays a preview of the project/app suite, encouraging the user to click through to the detail page for more information.

---

## Input Contract

**Data Structure**: Project object (from data-model.md)

```json
{
  "id": "goodkredit-ecosystem",
  "title": "GoodKredit & Related Apps",
  "subtitle": "Fintech Utility Platform Suite",
  "category": "grouped-project",
  "summary": "A collection of iOS fintech apps...",
  "featured": true,
  "cardThumbnail": "images/projects/goodkredit/card-thumbnail.webp",
  "subprojects": [...]
}
```

**Required Fields**:
- `id`, `title`, `subtitle`, `cardThumbnail`, `category`

---

## Output Contract: HTML Structure

```html
<article class="project-card" data-project-id="goodkredit-ecosystem" data-category="grouped-project">
  
  <!-- Card Container -->
  <div class="project-card__container">
    
    <!-- Image Section -->
    <div class="project-card__image-wrapper">
      <img 
        src="images/projects/goodkredit/card-thumbnail.webp" 
        alt="GoodKredit & Related Apps - Fintech Utility Platform Suite"
        class="project-card__image"
        loading="lazy"
      />
    </div>
    
    <!-- Content Section -->
    <div class="project-card__content">
      <div class="project-card__header">
        <h3 class="project-card__title">GoodKredit & Related Apps</h3>
        <p class="project-card__subtitle">Fintech Utility Platform Suite</p>
      </div>
      
      <p class="project-card__summary">
        A collection of iOS fintech apps showcasing full-stack development from design to App Store deployment.
      </p>
      
      <!-- For Grouped Projects: Sub-project Count Badge -->
      <div class="project-card__meta" data-if="category === 'grouped-project'">
        <span class="project-card__badge">3 Apps</span>
      </div>
      
      <!-- Call-to-Action -->
      <a href="#/projects/goodkredit-ecosystem" class="project-card__cta" role="button" aria-label="View GoodKredit & Related Apps details">
        View Details
        <svg class="project-card__cta-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">
          <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" stroke-width="2" fill="none"/>
        </svg>
      </a>
    </div>
    
  </div>
  
</article>
```

---

## CSS Styling Rules

### Layout
- **Card Container**: Display as flex column on mobile; row on tablet/desktop.
- **Image Aspect Ratio**: 16:9 or 4:3; responsive scaling.
- **Content Alignment**: Vertically centered; text left-aligned.
- **Spacing**: 16px padding inside card; 8px gap between sections on mobile; 24px on desktop.

### Visual Properties
- **Background**: `var(--color-bg-secondary)` (#FFFFFF)
- **Border**: 1px solid `var(--color-border)` (#E5E7EB)
- **Border Radius**: 8px
- **Shadow**: 0 1px 3px `var(--color-shadow)`
- **Hover Shadow**: 0 4px 6px `var(--color-shadow)` (elevated on hover)
- **Transition**: All 200ms ease-in-out

### Typography
- **Title** (`project-card__title`):
  - Font Size: 18px
  - Font Weight: 600
  - Color: `var(--color-text-primary)` (#1F2937)
  - Line Height: 1.4

- **Subtitle** (`project-card__subtitle`):
  - Font Size: 14px
  - Color: `var(--color-text-secondary)` (#6B7280)
  - Font Weight: 400

- **Summary** (`project-card__summary`):
  - Font Size: 14px
  - Color: `var(--color-text-primary)`
  - Line Height: 1.5
  - Max-width: 300px (truncate if necessary with ellipsis)

### Interactive Elements

**CTA Button** (`.project-card__cta`):
- Background: `var(--color-accent-blue)` (#2563EB)
- Text Color: #FFFFFF
- Border Radius: 6px
- Padding: 8px 16px
- Font Size: 14px
- Font Weight: 600
- Cursor: pointer
- Hover: Background `var(--color-accent-blue-dark)` (#1D4ED8); shadow elevation
- Focus: 2px solid outline in `var(--color-accent-blue)`
- Active: Darker shade for 100ms (tactile feedback)

**Badge** (`.project-card__badge`, if grouped):
- Background: `var(--color-accent-green)` (#10B981)
- Text Color: #FFFFFF
- Border Radius: 9999px (pill shape)
- Padding: 4px 12px
- Font Size: 12px
- Font Weight: 600

---

## Responsive Behavior

### Mobile (< 640px)
- Card: Single column, image on top
- Image Height: 200px
- Padding: 12px

### Tablet (640px – 1024px)
- Card: Two-column layout; image left, content right
- Image Height: 240px
- Padding: 16px

### Desktop (> 1024px)
- Card: Two-column layout; image left, content right
- Image Height: 280px
- Padding: 24px
- Max-width: 600px per card

---

## Accessibility Requirements

- **Alt Text**: Descriptive alt text for image (e.g., "GoodKredit & Related Apps - Fintech Utility Platform Suite")
- **Semantic HTML**: Use `<article>` for card container; `<h3>` for title
- **Keyboard Navigation**: CTA link/button must be keyboard-accessible (Tab key)
- **Focus Indicator**: Visible 2px outline on focus (via `:focus-visible`)
- **Color Contrast**:
  - Title text: 4.5:1 contrast ratio minimum
  - Subtitle text: 4.5:1 contrast ratio minimum
  - Button text: 4.5:1 contrast ratio minimum
- **ARIA**: `aria-label` on CTA for screen reader clarity if icon-only

---

## JavaScript Interaction

### Event Listeners
1. **Click on CTA**: Navigate to detail page (e.g., `window.location.hash = "#/projects/goodkredit-ecosystem"`)
2. **Hover**: Elevate shadow (CSS handles this via :hover pseudo-class)
3. **Focus**: Show focus indicator (CSS :focus-visible handles this)

### Data Attributes
- `data-project-id`: Used to identify project for routing/navigation
- `data-category`: Used to conditionally render grouped vs. single-project UI

---

## Examples

### Single Project Card
```html
<article class="project-card" data-project-id="nativecamp" data-category="single-project">
  <div class="project-card__container">
    <div class="project-card__image-wrapper">
      <img src="images/projects/nativecamp/card.webp" alt="NativeCamp English - ESL Platform" class="project-card__image" loading="lazy" />
    </div>
    <div class="project-card__content">
      <h3 class="project-card__title">NativeCamp (En)</h3>
      <p class="project-card__subtitle">ESL Learning Platform</p>
      <p class="project-card__summary">Real-time English learning with native instructors...</p>
      <a href="#/projects/nativecamp" class="project-card__cta" role="button">View Details → </a>
    </div>
  </div>
</article>
```

### Grouped Project Card (with Badge)
```html
<article class="project-card" data-project-id="goodkredit-ecosystem" data-category="grouped-project">
  <div class="project-card__container">
    <div class="project-card__image-wrapper">
      <img src="images/projects/goodkredit/card-thumbnail.webp" alt="GoodKredit & Related Apps - Fintech Utility Platform Suite" class="project-card__image" loading="lazy" />
    </div>
    <div class="project-card__content">
      <h3 class="project-card__title">GoodKredit & Related Apps</h3>
      <p class="project-card__subtitle">Fintech Utility Platform Suite</p>
      <p class="project-card__summary">A collection of iOS fintech apps showcasing full-stack development...</p>
      <div class="project-card__meta">
        <span class="project-card__badge">3 Apps</span>
      </div>
      <a href="#/projects/goodkredit-ecosystem" class="project-card__cta" role="button">View Details → </a>
    </div>
  </div>
</article>
```

---

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari (macOS/iOS): Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Mobile 90+

---

## Performance Targets

- Image Load (lazy): ≤1s on 4G
- Card Render: ≤100ms via CSS only
- Interaction Latency: ≤50ms (hover shadow, focus outline)
