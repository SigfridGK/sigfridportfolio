<!-- 
Sync Impact Report:
- Version: 1.2.1 → 1.3.0 (MINOR: Added Principle VII - Professional Presentation & Visual Branding)
- Ratified: 2026-04-11
- Last Amended: 2026-04-11
- Developer: Sigfrid Acabal, iOS Developer (since September 2019)
- Current Role: Tech Lead & iOS Developer, Forty Degrees Celsius Inc.
- Scope: Professional iOS portfolio showcasing 7+ years of expertise and leadership
- Core Competencies: Swift/SwiftUI, Flutter, Node.js, iOS architecture patterns, REST API integration, Spec-Driven Development (SDD)
- Technical Focus: iOS development with emphasis on clean architecture, Firebase integration, WebRTC, and cloud services
- Contact: sigfridacabal3@gmail.com | +63 963 269 7279 (Viber/WhatsApp) | https://www.linkedin.com/in/sigfrid-acabal-b19b8a1b9/
- New Principle: Professional Presentation & Visual Branding (hero section, profile picture, modern aesthetic)
- Files Updated: constitution.md
-->

# Sigfrid Portfolio Constitution

## Core Principles

### I. Clean Code & Maintainability
Every line of code must serve a clear purpose. HTML, CSS, and JavaScript MUST be 
organized logically with meaningful naming conventions. Comments explain the "why," 
not the "what." Code duplication is eliminated through reusable components.
Rationale: A portfolio IS the developer's first impression—clean, maintainable code 
demonstrates professional standards and engineering discipline expected of a Tech Lead.

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

### V. iOS Development Showcase (Technical Depth Required)
Portfolio prominently features iOS projects with clear descriptions of technologies used:
**Primary**: Swift, SwiftUI, Combine, XCTest, MVVM, MVP architecture patterns
**Libraries & Integrations**: Alamofire (networking), Firebase (real-time DB, Crashlytics, Auth), 
Kingfisher (image caching), SwiftyJSON (JSON parsing), Google Maps integration
**Advanced Features**: WebRTC/SkyWay integration, WebSocket connectivity, AWS S3 storage, 
REST API integration, performance optimization for complex data handling
**Cross-platform**: Flutter expertise documented where applicable

Projects structured using architecture patterns (MVVM, MVP, Clean Architecture) with explicit 
diagrams or documentation. Links to App Store, GitHub repositories with active commits, or demos.
In-depth case studies explain technical decisions, problem-solving approach, lessons learned.
Rationale: As an iOS developer with 7+ years of experience and Tech Lead responsibilities,
portfolio must demonstrate command of modern iOS ecosystem and ability to architect scalable solutions.

### VI. Technical Leadership & Code Quality Standards
Portfolio exemplifies the code review and quality standards expected of a Tech Lead.
Every featured project includes evidence of: architecture design decisions, comprehensive
testing strategies (unit/integration tests), performance optimization, and documentation.
Code MUST be production-ready—demonstrating ability to mentor junior developers and
establish technical excellence across teams.
Rationale: Leadership role requires portfolio to showcase not just individual contribution
but ability to elevate team standards and technical culture.

### VII. Professional Presentation & Visual Branding
Portfolio front-end MUST feature a professional, modern aesthetic with clear visual hierarchy.
**Hero Section**: Eye-catching introduction with professional workspace context, clear value 
proposition, and clear call-to-action. Professional headshot integrated as circular profile 
picture with modern styling.
**Visual Consistency**: Modern color scheme (light theme with accent colors), consistent 
typography, professional spacing, and alignment. CSS variables enable maintainability.
**Brand Elements**: Professional photography (workspace, profile headshot), cohesive design 
language, modern gradients and shadows for depth. Modern hero background establishes 
professional context (e.g., developer workspace).
Rationale: First impressions matter. As a Tech Lead, visual presentation demonstrates 
attention to design and user experience—critical skills for modern development roles.
Professional visual branding shows respect for recruiter time and positions the portfolio 
as a finished product, not a work-in-progress.

## Technology Stack

**Web Portal (Portfolio Site):**
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Design**: Responsive, modern gradient-based aesthetic with professional branding
- **Hosting**: Static site compatible with any web server
- **Version Control**: Git with GitHub integration
- **Testing & QA**: Accessibility validation (axe DevTools, WAVE), Performance testing (Lighthouse, WebPageTest)

**iOS Development Expertise (Featured in Portfolio):**
- **Languages & Frameworks**: Swift, SwiftUI, UIKit, Flutter (cross-platform), Node.js (backend), AngularJS
- **iOS Libraries**: Alamofire (HTTP networking), Firebase suite (Realtime Database, Crashlytics, Authentication), 
  Kingfisher (image caching), SwiftyJSON (JSON parsing), Google Maps SDK, AWS S3 integration, SkyWay WebRTC
- **Architecture Patterns**: MVC, MVVM, MVP, Clean Architecture
- **API & Communication**: REST API integration, WebSocket connectivity, WebRTC (real-time communication)
- **Development Tools**: Xcode, Android Studio, Git/GitHub, Jira, Firebase Crashlytics, SwiftLint (code quality)
- **Deployment & Monitoring**: Firebase Crashlytics for real-time crash reporting, App Store deployment

## Development Workflow

Before implementing any changes:
1. Create a feature branch from main with descriptive name
2. Make changes following CSS/HTML/JS conventions and accessibility standards
3. Test responsiveness across all device sizes and browsers
4. Run Lighthouse audit; verify score ≥90
5. Validate accessibility compliance (WCAG 2.1 AA)
6. Commit with clear, conventional commit messages following Spec-Driven Development (SDD) principles
7. Self-review code against code review checklist (see Governance)
8. Verify iOS project descriptions are technically accurate, specific, and demonstrate expertise
9. Ensure visual presentation maintains professional branding and modern aesthetic standards
10. Merge to main and deploy

## Contact Information

**Professional Contact Details:**
- **Email**: sigfridacabal3@gmail.com
- **Phone/WhatsApp/Viber**: +63 963 269 7279
- **LinkedIn**: https://www.linkedin.com/in/sigfrid-acabal-b19b8a1b9/

For inquiries regarding projects, collaboration opportunities, or technical consultations, 
use the contact methods above. Response time commitment: business hours (Philippine Standard Time).

## Professional Standards

**Portfolio Accuracy**: Every featured project MUST accurately represent:
- Technologies used (versions matter for context; e.g., "SwiftUI with iOS 15+" not just "SwiftUI")
- Architecture decisions and rationale
- Team size, scope, and personal contribution
- Real performance metrics or optimization results where possible
- Code quality practices demonstrated (testing, documentation, error handling)

**Mentorship & Knowledge Sharing**: As a Tech Lead, portfolio should evidence:
- Knowledge transfer capability through clear documentation
- Code review patterns and quality gate implementation
- Ability to architect solutions for junior developers to understand and extend
- Best practices exemplified, not just listed

**Visual Presentation**: Portfolio must maintain professional visual standards:
- Professional headshot integrated prominently in hero section
- Modern, cohesive color scheme and typography
- Clear visual hierarchy guiding user attention to key information
- Responsive design that looks polished on all devices

## Governance

This constitution defines the non-negotiable standards for portfolio development.
All principles are binding for merged code. Amendments follow semantic versioning 
(MAJOR.MINOR.PATCH) and require documentation of rationale.

Code review checklist (self-review for solo project):
- ✓ Code is clean, readable, and well-commented
- ✓ Responsive design verified across multiple devices and browsers
- ✓ Accessibility standards met (WCAG 2.1 AA minimum)
- ✓ Performance metrics maintained (Lighthouse ≥90)
- ✓ iOS projects showcase advanced architectural patterns and technical depth
- ✓ Case studies clearly explain technical decisions, problem-solving, and specific tech stack used
- ✓ Git commit messages follow conventional commit format and SDD principles
- ✓ Code demonstrates production-ready quality suitable for Tech Lead portfolio
- ✓ Testing strategies are evident (unit/integration tests referenced or visible in repos)
- ✓ Firebase, networking, and WebRTC integrations (where used) are properly documented
- ✓ Project descriptions include specific technologies (versions, frameworks, libraries)
- ✓ Code reflects Spec-Driven Development methodology and TDD principles
- ✓ Professional headshot prominently featured in hero section
- ✓ Visual branding is consistent, modern, and reflects professional standards
- ✓ Hero section establishes professional context and value proposition clearly

Amendment Procedure:
- Constitution changes require version bump with rationale documentation
- All updates must maintain or elevate current quality standards
- Backward-incompatible changes require MAJOR version bump with migration plan

**Version**: 1.3.0 | **Ratified**: 2026-04-11 | **Last Amended**: 2026-04-11
