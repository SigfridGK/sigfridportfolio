# Data Model: NativeCamp Featured Project

**Feature**: Add NativeCamp to Featured Projects  
**Phase**: 1 - Design & Contracts  
**Date**: 2026-04-11

## Entity: NativeCamp Project Card

### Overview
Represents the NativeCamp project display element within the portfolio's projects section. A component-level entity that aggregates display data, styling references, and interaction handlers.

### Data Structure

```typescript
interface ProjectCard {
  id: string;                    // "nativecamp"
  name: string;                 // "NativeCamp"
  description: string;          // "Unlimited English conversation lessons platform with mobile-first accessibility..."
  icon: ImageAsset;            // Reference to nativecamp-app-icon.png
  website: URL;                // https://nativecamp.net
  technologies: Technology[];  // [Swift, Firebase, SwiftUI]
  styling: StyleReference;     // ".project-card" CSS class
  display: DisplayConfig;      // Positioning in grid, responsive behavior
}

interface ImageAsset {
  path: string;                // "assets/images/nativecamp-app-icon.png"
  alt: string;                 // "NativeCamp - unlimited English conversation lessons platform"
  format: string;              // "PNG"
  optimized: boolean;          // true (for web)
}

interface Technology {
  name: string;                // "Swift" | "Firebase" | "SwiftUI"
  badge: StyleClass;           // ".project-link" with var(--color-accent-green)
}

interface StyleReference {
  card: string;                // ".project-card"
  description: string;         // ".project-card p"
  links: string;              // ".project-links"
  link: string;               // ".project-link"
  linkHover: string;          // ".project-link:hover"
  linkFocus: string;          // ".project-link:focus"
}

interface DisplayConfig {
  layout: string;              // Grid positioning (auto-fit, minmax(300px, 1fr))
  mobile: Breakpoint;          // 320px+ (full width, stacked)
  tablet: Breakpoint;          // 768px+ (2-3 column grid)
  desktop: Breakpoint;         // 1024px+ (3-4 column grid)
  responsive: boolean;         // true
}
```

### Entity Attributes

| Attribute | Type | Source | Validation | Notes |
|-----------|------|--------|-----------|-------|
| `id` | string | Derived | Must be unique, lowercase, no spaces | Used as HTML id, CSS selectors |
| `name` | string | Spec FR-003 | Required, non-empty, ≤50 chars | "NativeCamp" - visible in h3 |
| `description` | string | Spec FR-004 | Required, 1-2 sentences, ≤200 chars | Explains platform value proposition |
| `icon.path` | string | Spec FR-002 | Must exist in assets/images/ | PNG optimized for web |
| `icon.alt` | string | Spec FR-008 | Required, descriptive, accessible | Screen-reader text |
| `website` | URL | Spec FR-006 | Valid HTTPS URL, www.nativecamp.net | Links to official platform |
| `technologies[]` | array | Spec FR-005 | Must contain: Swift, Firebase, SwiftUI | Displayed as green badges |
| `styling` | object | Existing | References existing CSS classes | No new styling needed |
| `responsive` | boolean | Spec FR-007 | Must support 320px+, 768px+, 1024px+ | Inherits from .projects-grid |

### Relationships

```
NativeCamp Project Card
    ↓ displayed in
Projects Grid (.projects-grid)
    ↓ contains multiple
Project Cards (.project-card)
    ├─ GoodKredit
    ├─ PaydayToday  
    ├─ GiftBeam
    └─ NativeCamp ← This entity

Related Objects:
- Portfolio (parent container) - sections/projects
- Project Card Component (.project-card) - styling template
- Image Asset (nativecamp-app-icon.png) - display resource
- Browser Window (viewport) - responsive context
```

### State & Lifecycle

**Creation**: Angular placement in HTML projects section  
**Display States**:
- `initial` - Page loads, card renders in grid
- `hover` - User hovers over card (shadow increases, link color changes)
- `focus` - User tabs to link (outline visible)
- `active` - User clicks link (navigates to nativecamp.net)
- `responsive` - Viewport changes (card adapts layout)

**Validation Rules**

| Field | Rule | Error Handling |
|-------|------|----------------|
| Icon exists | File must exist at path | Fallback to placeholder if missing |
| Icon format | Must be PNG or supported image format | Use default project icon |
| URL valid | Must be proper HTTPS URL | Disable link, show error state |
| Text content | Non-empty, reasonable length | Show placeholder text |
| Color contrast | Must meet WCAG AA 4.5:1 | Audit with DevTools; adjust colors if needed |

### Constraints

1. **No Database**: Static HTML content, no persistence needed
2. **No API Calls**: Platform data is hard-coded in HTML
3. **No Real-Time Updates**: Project card content is static
4. **CSS Availability**: Depends on existing styles.css being loaded
5. **Browser Support**: Must work on modern browsers (Chrome, Firefox, Safari, Edge)
6. **Responsive Only via CSS**: No JavaScript layout calculations

### Edge Cases

| Scenario | Expected Behavior | Implementation |
|----------|-------------------|----------------|
| Icon file missing | Display placeholder icon, show alt text | HTML img with fallback class |
| Viewport width 320px | Card full width, text readable, no overflow | Existing @media query handles it |
| No JavaScript | Card still displays, link still works | Pure HTML/CSS (no JS required) |
| High contrast mode | Color contrast maintained | Existing CSS variables WCAG AA compliant |
| Screen reader | Alt text read, link is navigable | Semantic HTML with proper alt attribute |

---

## Entity: Technology Badge

### Overview
Represents a technology label (Swift, Firebase, SwiftUI) displayed on the project card using existing badge styling.

### Data Structure

```typescript
interface TechnologyBadge {
  name: string;              // "Swift" | "Firebase" | "SwiftUI"
  cssClass: string;          // ".project-link"
  backgroundColor: string;   // "var(--color-accent-green)" (#10B981)
  textColor: string;         // "#FFFFFF"
  borderRadius: string;      // "9999px" (pill shape)
  padding: string;           // "4px 12px"
}
```

### Badge Styling Reference

```css
.project-link {
  background-color: var(--color-accent-green);  /* #10B981 */
  color: white;
  border-radius: 9999px;
  padding: 4px 12px;
  display: inline-block;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
```

### Badge Rendering

Each technology appears as an inline badge:
- **Swift** - green pill with white text
- **Firebase** - green pill with white text
- **SwiftUI** - green pill with white text

Badges are reused from existing `.project-link` class styling (same as project links/buttons, ensuring consistency across portfolio).

---

## References

- **Specification**: [spec.md](spec.md) for requirements (FR-001 through FR-010)
- **Constitution**: Portfolio Constitution v1.4.0 for design standards
- **Colors**: CLAUDE.md section "Light Theme Color Palette"
- **Existing Components**: 
  - `.project-card` styling in styles.css
  - `.project-link` badge styling in styles.css
  - `.projects-grid` responsive layout in styles.css

---

## Implementation Checklist

- [ ] Icon path verified: `assets/images/nativecamp-app-icon.png` exists
- [ ] HTML structure matches `.project-card` component pattern
- [ ] Alt text implemented: "NativeCamp - unlimited English conversation lessons platform"
- [ ] Link URL: `https://nativecamp.net`
- [ ] Technology badges: Swift, Firebase, SwiftUI using `.project-link` class
- [ ] CSS Grid positioning: Auto-fit in existing `.projects-grid`
- [ ] Responsive breakpoints: 320px, 768px, 1024px+ (inherited from existing)
- [ ] Color contrast: Verified WCAG AA 4.5:1 (using existing color variables)
- [ ] Browser testing: Chrome, Firefox, Safari, Edge
