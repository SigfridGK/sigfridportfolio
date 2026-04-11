# Implementation Plan: Slick Portfolio Light Theme Design

**Branch**: `002-portfolio-light-theme` | **Date**: 2026-04-11 | **Spec**: [spec.md](spec.md)

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Transform the Sigfrid Portfolio from its current gradient/dark theme to a modern, professional light theme that enhances readability, reinforces Tech Lead credibility, and maintains accessibility (WCAG AA) across all devices. Focus on clean light color palette, excellent contrast, and subtle interactive feedback.

## Technical Context

**Language/Version**: HTML5, CSS3 (with CSS Variables), ES6+ JavaScript

**Primary Dependencies**: 
- Lighthouse (for accessibility/performance validation)
- axe DevTools or similar (for WCAG AA compliance checking)
- No additional frameworks required (vanilla JS compatible)

**Storage**: N/A (static portfolio site)

**Testing**: Manual accessibility testing (contrast validation), cross-browser testing (Safari, Chrome, Firefox)

**Target Platform**: Web (desktop, tablet, mobile); iOS Safari primary consideration

**Project Type**: Static HTML/CSS/JavaScript portfolio website

**Performance Goals**: Lighthouse score ≥90 (maintain current performance)

**Constraints**: 
- No breaking changes to layout/structure
- No addition of external CSS frameworks
- Colors must be WCAG AA compliant (4.5:1 minimum contrast for normal text)
- Mobile-first responsive design maintained

**Scale/Scope**: 
- 5 main portfolio sections (hero, about, skills, projects, contact)
- ~20-30 CSS color variables (primary, secondary, accent, text colors)
- ~10 interactive element states (hover, focus, active)
- ~3 breakpoints (mobile, tablet, desktop)

## Constitution Check

✅ **Compliance with Sigfrid Portfolio Constitution v1.1.1**:

- **Principle I (Clean Code & Maintainability)**: CSS organized with semantic variable naming, no duplication, comments explain color usage
- **Principle II (Responsive Design - Mobile-First)**: Light theme applies across all breakpoints; media queries maintain contrast and spacing
- **Principle III (Performance & Accessibility)**: WCAG AA compliance (4.5:1 contrast), Lighthouse ≥90, semantic HTML preserved
- **Principle IV (Version Control)**: Small, logical commits per component (colors.css, interactive-states.css, etc.)
- **Principle V (iOS Development Showcase)**: Project cards showcase technologies clearly with light backgrounds and readable badges
- **Principle VI (Technical Leadership)**: Production-ready code demonstrates understanding of accessibility, color theory, and responsive design best practices

## Project Structure

```text
Sigfrid-Portfolio/
├── index.html              # Updated with semantic markup for light theme
├── styles.css              # Primary stylesheet (refactored for light palette)
├── script.js               # JavaScript for interactive states (minimal changes)
├── assets/
│   └── images/            # Project images (may need subtle border/framing)
└── .specify/              # Speckit project config
```

## Implementation Strategy

### MVP (User Story 1: Visitor First Impression)

**Phase Focus**: Light color palette + readable content

1. Define light theme CSS variables (backgrounds, text, accents)
2. Update `styles.css` with light palette colors
3. Ensure baseline WCAG AA contrast compliance
4. Test on desktop and mobile (iOS Safari, Chrome)

**Deliverable**: Portfolio renders in light theme with professional appearance

### Increment 1 (User Story 2: Project Showcase Clarity)

**Phase Focus**: Project cards + technology badges

1. Style project cards for light backgrounds (borders, shadows)
2. Style technology badges with readable contrast
3. Ensure project descriptions are legible
4. Validate image framing and visibility

**Deliverable**: Projects section is clear and readable showcasing iOS expertise

### Increment 2 (User Story 3: Brand Consistency)

**Phase Focus**: Typography + accent colors + polished interactive states

1. Verify typography hierarchy on light palette
2. Apply accent colors to CTAs and highlights with iOS design language
3. Polish hover, focus, active states for interactive elements
4. Ensure overall design feels modern and credible

**Deliverable**: Portfolio reflects Tech Lead expertise and modern iOS design trends

### Increment 3 (User Story 4: Cross-Device Consistency)

**Phase Focus**: Responsive validation + accessibility compliance

1. Test across devices (desktop, tablet, mobile)
2. Validate contrast ratios at all breakpoints
3. Ensure touch targets ≥44px on mobile
4. Final accessibility audit (Lighthouse ≥90)

**Deliverable**: Light theme renders consistently and accessibly across all devices

## Assumptions & Decisions

- **Color Palette**: Modern, professional (e.g., #FAFAFA backgrounds, #1F2937 text, accent blues from current design)
- **No Framework Changes**: Existing HTML/CSS structure preserved; light theme implemented via variable substitution + component-specific adjustments
- **Typography Unchanged**: Font families, sizes remain; only colors adjust for light palette
- **Gradients Softened**: Current gradients can remain but softened in light palette
- **No Dark Mode MVP**: Light theme only initially; dark mode is future phase
- **Git Workflow**: Feature branch `002-portfolio-light-theme`; small, descriptive commits per CSS module
