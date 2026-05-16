# Contract: Project Card HTML Structure

**Feature**: Add NativeCamp to Featured Projects  
**Contract Type**: HTML Component Interface  
**Date**: 2026-04-11  

## Contract: Project Card Display Format

### Purpose
Defines the HTML structure contract that the NativeCamp project card MUST satisfy to display correctly within the portfolio's projects grid.

### HTML Structure

```html
<div class="project-card">
  <!-- Project Icon -->
  <div class="project-image">
    <img src="assets/images/nativecamp-app-icon.png" 
         alt="NativeCamp - unlimited English conversation lessons platform"
         style="width: 100%; height: 100%; object-fit: contain; padding: 1rem;">
  </div>
  
  <!-- Project Title -->
  <h3>NativeCamp</h3>
  
  <!-- Project Description -->
  <p>Unlimited English conversation lessons platform with mobile-first accessibility for learners worldwide.</p>
  
  <!-- Technology Badges -->
  <div class="project-links">
    <span class="project-link" style="cursor: default;">Swift</span>
    <span class="project-link" style="cursor: default;">Firebase</span>
    <span class="project-link" style="cursor: default;">SwiftUI</span>
  </div>
  
  <!-- Project Link/CTA -->
  <div class="project-links">
    <a href="https://nativecamp.net" 
       class="project-link" 
       target="_blank"
       rel="noopener noreferrer">
      Visit NativeCamp
    </a>
  </div>
</div>
```

### Contract Requirements

| Element | Required | CSS Class | Validation |
|---------|----------|-----------|-----------|
| `.project-card` wrapper | YES | `.project-card` | Must exist, proper spacing |
| `.project-image` container | YES | `.project-image` | Background gradient, display flex |
| `<img>` icon | YES | N/A | src path valid, alt text descriptive |
| `<h3>` title | YES | N/A | Inherits `.project-card h3` styling |
| `<p>` description | YES | N/A | Inherits `.project-card p` styling (color: var(--color-text-secondary)) |
| Tech badge span | YES (x3) | `.project-link` | Three spans: Swift, Firebase, SwiftUI |
| Visit link `<a>` | YES | `.project-link` | href valid, target="_blank", rel="noopener noreferrer" |
| Link container div | YES | `.project-links` | Flexbox, gap for spacing |

### Display Contract

**Location in DOM**: Within `.projects-grid` div, after existing project cards (GoodKredit, PaydayToday, GiftBeam)  
**CSS Grid Position**: Auto-positioned by CSS Grid `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))`  
**Box Model**: Inherits from `.project-card` styles

```css
.project-card {
  background-color: var(--color-bg-secondary);      /* #FFFFFF */
  border: 1px solid var(--color-border);            /* #E5E7EB */
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px var(--color-shadow);
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px var(--color-shadow-lg);
  border-color: var(--color-accent-blue);
}
```

### Accessibility Contract

| Requirement | Value | Verification |
|-------------|-------|--------------|
| Alt text | "NativeCamp - unlimited English conversation lessons platform" | Semantic HTML img alt attribute |
| Color contrast | 4.5:1 minimum | Existing CSS variables WCAG AA compliant |
| Focus state | 2px solid outline | `.project-link:focus` in styles.css |
| Screen reader | Semantic heading + descriptive alt | Browser DevTools accessibility panel |
| Keyboard nav | Tab to link reachable | Manual testing with Tab key |

### Styling Contract

**Typography**:
- Title `<h3>`: `font-size: 1.25rem`, `color: var(--color-text-primary)`
- Description `<p>`: `font-size: 1rem`, `color: var(--color-text-secondary)`, `line-height: 1.6`
- Link text: `font-weight: 600`, `color: var(--color-accent-blue)`, hover: `color: var(--color-accent-blue-dark)`

**Spacing**:
- Card padding: `1.5rem`
- Element spacing: `0.5rem` between sections
- Badge gap: `1rem` horizontal

**Responsive Contract**

| Breakpoint | Behavior | Grid Columns |
|-----------|----------|--------------|
| Mobile (320px+) | Full width, stacked layout | 1 column |
| Tablet (768px+) | 2-3 columns | 2-3 columns |
| Desktop (1024px+) | 3-4 columns | 3-4 columns |

All responsive behavior handled by existing CSS Grid auto-fit with minmax(300px, 1fr).

### Interaction Contract

- **Link Click**: Navigate to https://nativecamp.net in new tab (`target="_blank"`)
- **Hover**: Card shadow increases, border color changes to accent-blue
- **Focus**: Link outline visible for keyboard navigation
- **No JavaScript**: Pure HTML/CSS (no click handlers required)

---

## Validation Checklist

- [ ] HTML validates with W3C validator (no errors)
- [ ] Alt text present and descriptive
- [ ] Image path `assets/images/nativecamp-app-icon.png` correct
- [ ] Link URL `https://nativecamp.net` accessible
- [ ] CSS classes exist in styles.css (`.project-card`, `.project-link`, etc.)
- [ ] Color contrast meets WCAG AA 4.5:1 standard
- [ ] Card displays in responsive grid (320px, 768px, 1024px+)
- [ ] Keyboard navigation works (Tab through card)
- [ ] Hover and focus states visible

---

## Implementation Notes

This contract MUST be satisfied by the final HTML in index.html. The contract specifies the exact HTML structure, CSS class references, and interaction behavior expected. Implementation tasks (T007-T013) ensure this contract is met.

See [tasks.md](tasks.md) for implementation details (T007: Add HTML block, T009: Add description, T011-T012: Add link and badges).
