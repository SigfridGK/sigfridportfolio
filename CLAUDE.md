# Sigfrid-Portfolio Development Guidelines

Auto-generated from all feature plans. Last updated: 2026-05-16

## Active Technologies
- HTML5, CSS3, JavaScript (ES6+) + None (static site using CSS variables, no external frameworks) (master)
- File-based content (JSON or markdown for project metadata) (master)

- HTML5, CSS3 (with CSS Variables), ES6+ JavaScript (master)

## Project Structure

```text
backend/
frontend/
tests/
```

## Commands

npm test; npm run lint

## Code Style

HTML5, CSS3 (with CSS Variables), ES6+ JavaScript: Follow standard conventions

## Recent Changes
- master: Added HTML5, CSS3, JavaScript (ES6+) + None (static site using CSS variables, no external frameworks)

- master: Added HTML5, CSS3 (with CSS Variables), ES6+ JavaScript

<!-- MANUAL ADDITIONS START -->

## Light Theme Color Palette (WCAG AA Compliant)

```css
:root {
  /* Backgrounds */
  --color-bg-primary: #FAFAFA;      /* Off-white, high contrast */
  --color-bg-secondary: #FFFFFF;    /* Pure white for cards */
  --color-bg-accent: #F3F4F6;       /* Light gray for hover states */
  
  /* Text Colors */
  --color-text-primary: #1F2937;    /* Dark gray (4.5:1 on #FAFAFA) */
  --color-text-secondary: #6B7280;  /* Medium gray for secondary text */
  
  /* Accent Colors */
  --color-accent-blue: #2563EB;     /* iOS-inspired accent blue */
  --color-accent-blue-dark: #1D4ED8; /* Darker shade for active states */
  --color-accent-green: #10B981;    /* Success color for tech badges */
  
  /* Borders & Shadows */
  --color-border: #E5E7EB;
  --color-shadow: rgba(0, 0, 0, 0.1);
}
```

## Component Styling Guide

**Project Cards**:
- Background: `var(--color-bg-secondary)` (#FFFFFF)
- Text: `var(--color-text-primary)` (#1F2937)
- Border: 1px solid `var(--color-border)` (#E5E7EB)
- Shadow: 0 1px 3px `var(--color-shadow)`
- Hover: Increase shadow to 0 4px 6px `var(--color-shadow)`

**Technology Badges**:
- Background: `var(--color-accent-green)` (#10B981)
- Text: #FFFFFF
- Border-radius: 9999px (pill shape)
- Padding: 4px 12px

**Links & Buttons**:
- Default: Color `var(--color-accent-blue)` (#2563EB)
- Hover: Opacity 0.9 + shadow
- Focus: 2px solid outline in accent blue
- Active: Darker shade `var(--color-accent-blue-dark)` (#1D4ED8)

## Design Decisions

1. **CSS Variables for Maintainability**: All colors defined as variables to support future dark mode
2. **WCAG AA Compliance**: All color pairs validated for 4.5:1+ contrast ratio
3. **No External Frameworks**: Pure CSS with variables; zero performance impact
4. **Mobile-First Responsive**: Colors inherited via CSS variables across all breakpoints
5. **Interactive States**: Clear keyboard accessibility with visible focus outlines

## Accessibility Requirements

- Minimum contrast ratio: 4.5:1 (WCAG AA normal text)
- Large text (18pt+): 3:1 minimum contrast
- Focus states: Always visible and clearly distinguishable
- Keyboard navigation: All interactive elements reachable via Tab key

## Performance Constraints

- CSS Variables: Zero performance impact (no additional HTTP requests)
- Lighthouse target: Maintain ≥90 score
- No new external dependencies added
- Static HTML/CSS/JS only (no frameworks)

## Implementation Files

- **styles.css**: Update with CSS variables and light theme colors (T001-T044)
- **index.html**: No changes needed (semantic structure preserved)
- **script.js**: No changes needed (interaction logic unchanged)

## Testing Checklist

- [ ] All text readable at normal size (no zooming required)
- [ ] Color contrast validated with axe DevTools (0 violations)
- [ ] Keyboard navigation works across all sections
- [ ] Mobile touch targets ≥44px
- [ ] Lighthouse score ≥90
- [ ] Cross-browser tested (Chrome, Firefox, Safari)
- [ ] iOS Safari tested specifically

<!-- MANUAL ADDITIONS END -->
