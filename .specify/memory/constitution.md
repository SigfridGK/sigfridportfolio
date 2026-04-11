<!-- 
Sync Impact Report:
- Version: 1.0.0 (initial constitution)
- Ratified: 2026-04-11
- Last Amended: 2026-04-11
- Created for: Sigfrid Acabal iOS Portfolio development
- Scope: Personal portfolio website showcasing iOS development work
-->

# Sigfrid Portfolio Constitution

## Core Principles

### I. Clean Code & Maintainability
Every line of code must serve a clear purpose. HTML, CSS, and JavaScript MUST be 
organized logically with meaningful naming conventions. Comments explain the "why," 
not the "what." Code duplication is eliminated through reusable components.
Rationale: A portfolio IS the developer's first impression—clean, maintainable code 
demonstrates professional standards and engineering discipline.

### II. Responsive Design (Mobile-First)
The portfolio MUST render correctly on all device sizes (mobile, tablet, desktop).
Touch-friendly interactive elements with minimum 44px tap targets. Performance must 
not degrade on slower connections. CSS uses media queries for progressive enhancement.
Rationale: iOS development focus means the portfolio must showcase mobile-first thinking 
and excellent user experience across all platforms.

### III. Performance & Accessibility
Page load time must be optimized (Lighthouse score ≥90). Images are compressed and 
lazy-loaded where appropriate. Semantic HTML ensures proper accessibility (WCAG 2.1 AA 
compliance). All interactive elements are keyboard navigable and screen-reader friendly.
Rationale: Modern development practices include performance and accessibility as 
non-negotiable quality gates.

### IV. Version Control & Git Workflow
All changes committed with clear, descriptive messages following conventional commits.
Feature branches for substantial work. Main branch remains stable and deployable.
Regular commits: Small, logical changesets that can be reviewed independently.
Rationale: Professional git history serves as documentation and enables team collaboration.

### V. iOS Development Showcase
Portfolio prominently features iOS projects with clear descriptions of technologies used
(Swift, UIKit, SwiftUI, etc.). Links to App Store, GitHub repositories, or live demos.
Case studies highlight problem-solving and technical decisions.
Rationale: Portfolio's purpose is to demonstrate iOS expertise and attract opportunities.

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Design**: Responsive, modern gradient-based aesthetic
- **Hosting**: Static site compatible with any web server
- **Version Control**: Git with GitHub integration

## Development Workflow

Before implementing any changes:
1. Create a feature branch from main
2. Make changes following CSS/HTML/JS conventions
3. Test responsiveness across device sizes
4. Commit with clear messages
5. Create pull request for review (self-review acceptable for solo project)
6. Verify Lighthouse scores remain ≥90
7. Merge to main and deploy

## Governance

This constitution defines the non-negotiable standards for portfolio development.
All principles are binding for merged code. Amendments follow semantic versioning 
(MAJOR.MINOR.PATCH) and require documentation of rationale.

Code review checklist:
- ✓ Code is clean, readable, and well-commented
- ✓ Responsive design verified across devices
- ✓ Accessibility standards met (WCAG 2.1 AA)
- ✓ Performance metrics maintained (Lighthouse ≥90)
- ✓ iOS projects properly showcased
- ✓ Git commit messages are descriptive

**Version**: 1.0.0 | **Ratified**: 2026-04-11 | **Last Amended**: 2026-04-11
