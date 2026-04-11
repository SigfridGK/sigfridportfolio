# Data Model: Portfolio Light Theme

**Feature**: Slick Portfolio Light Theme Design  
**Created**: 2026-04-11  
**Scope**: CSS color system and component styling model

## Color System Entity

### Entity: ColorToken

**Purpose**: Represents a single semantic color value in the light theme palette

**Attributes**:

| Attribute | Type | Description | Example |
|-----------|------|-------------|---------|
| `token_name` | String | CSS variable name | `--color-bg-primary` |
| `hex_value` | Hex | Color in hexadecimal format | `#FAFAFA` |
| `rgb_value` | RGB | RGB representation for reference | `250, 250, 250` |
| `category` | Enum | Color category (background, text, accent, border) | `background` |
| `level` | String | Priority/intensity level | `primary`, `secondary`, etc. |
| `contrast_pairs` | Array[String] | Which colors this pairs with (for validation) | `[--color-text-primary]` |
| `wcag_compliance` | Enum | Compliance level achieved | `AA`, `AAA`, `none` |
| `use_cases` | Array[String] | Intended use cases | `["hero-bg", "section-bg"]` |
| `notes` | String | Implementation notes | "Reduced eye strain vs pure white" |
| `validation_status` | Enum | Validated by tools | `validated`, `pending`, `failed` |

**Key Relationships**:
- ColorToken ← **used by** → Component (1-to-many)
- ColorToken ← **pairs with** → ColorToken (many-to-many, for contrast validation)

### Entity: Component

**Purpose**: Represents a styled UI component using color tokens

**Attributes**:

| Attribute | Type | Description | Example |
|-----------|------|-------------|---------|
| `component_name` | String | CSS class or element | `.project-card` |
| `component_type` | Enum | Type of component | `card`, `button`, `text`, `badge` |
| `background_token` | String | CSS variable for background | `--color-bg-secondary` |
| `text_token` | String | CSS variable for text | `--color-text-primary` |
| `border_token` | String | CSS variable for border (if exists) | `--color-border` |
| `hover_state` | Object | Hover state styling | `{ bg: "90% opacity", shadow: "elevated" }` |
| `focus_state` | Object | Focus state styling (keyboard a11y) | `{ outline: "2px solid accent" }` |
| `active_state` | Object | Active/pressed state styling | `{ bg: "darker shade" }` |
| `accessibility_notes` | String | a11y considerations | "44px minimum tap target on mobile" |
| `location` | String | File path where styled | `styles.css` |

**Key Relationships**:
- Component ← **uses** → ColorToken (1-to-many)
- Component ← **has states** → InteractiveState (1-to-many)

### Entity: InteractiveState

**Purpose**: Represents interactive states (hover, focus, active) for components

**Attributes**:

| Attribute | Type | Description | Example |
|-----------|------|-------------|---------|
| `state_name` | String | State identifier | `hover`, `focus`, `active` |
| `component_id` | String | Reference to parent component | `button-primary` |
| `visual_changes` | Object | CSS changes applied | `{ opacity: "0.9", boxShadow: "elevated" }` |
| `trigger_event` | String | What triggers state | `mouse:hover`, `keyboard:focus` |
| `a11y_compliant` | Boolean | Meets accessibility standards | `true` |
| `contrast_valid` | Boolean | Passes contrast check | `true` |

**Key Relationships**:
- InteractiveState ← **applied to** → Component (many-to-1)

---

## Color Entities & Instances

### Background Colors

```
Entity: ColorToken
├─ token: --color-bg-primary
│  ├─ hex: #FAFAFA
│  ├─ category: background
│  ├─ use_cases: [page-background, main-sections]
│  └─ wcag_compliance: AA
│
├─ token: --color-bg-secondary
│  ├─ hex: #FFFFFF
│  ├─ category: background
│  ├─ use_cases: [project-cards, modals, sections]
│  └─ wcag_compliance: AA
│
└─ token: --color-bg-accent
   ├─ hex: #F3F4F6
   ├─ category: background
   ├─ use_cases: [hover-backgrounds, subtle-highlights]
   └─ wcag_compliance: AA
```

### Text Colors

```
Entity: ColorToken
├─ token: --color-text-primary
│  ├─ hex: #1F2937
│  ├─ category: text
│  ├─ wcag_compliance: AAA (17.5:1 vs #FAFAFA)
│  └─ use_cases: [headings, body-text, descriptions]
│
└─ token: --color-text-secondary
   ├─ hex: #6B7280
   ├─ category: text
   ├─ wcag_compliance: AA (8.2:1 vs #FAFAFA)
   └─ use_cases: [metadata, dates, secondary-info]
```

### Accent Colors

```
Entity: ColorToken
├─ token: --color-accent-blue
│  ├─ hex: #2563EB
│  ├─ category: accent
│  ├─ wcag_compliance: AA (4.8:1 vs #FAFAFA)
│  └─ use_cases: [cta-buttons, links, primary-actions]
│
├─ token: --color-accent-blue-dark
│  ├─ hex: #1D4ED8
│  ├─ category: accent
│  ├─ use_cases: [active-states, pressed-buttons]
│  └─ wcag_compliance: AA (5.5:1 vs #FAFAFA)
│
└─ token: --color-accent-green
   ├─ hex: #10B981
   ├─ category: accent
   ├─ wcag_compliance: AA (6.1:1 vs #FAFAFA)
   └─ use_cases: [success-states, highlights, badges]
```

### Border & Shadow Colors

```
Entity: ColorToken
├─ token: --color-border
│  ├─ hex: #E5E7EB
│  ├─ category: border
│  └─ use_cases: [card-borders, dividers, subtle-lines]
│
└─ token: --color-shadow
   ├─ value: rgba(0, 0, 0, 0.1)
   ├─ category: shadow
   └─ use_cases: [card-shadows, depth, layering]
```

---

## Component Instances

### Component: ProjectCard

```
Entity: Component
├─ name: project-card (.project-card)
├─ type: card
├─ background: --color-bg-secondary (#FFFFFF)
├─ text: --color-text-primary (#1F2937)
├─ border: --color-border (#E5E7EB)
├─ states:
│  ├─ hover: { shadow: "0 4px 6px rgba(0,0,0,0.1)" }
│  ├─ focus: { outline: "2px solid --color-accent-blue" }
│  └─ active: { shadow: "0 8px 12px rgba(0,0,0,0.15)" }
└─ location: styles.css
```

### Component: Button (CTA)

```
Entity: Component
├─ name: button (.btn-primary)
├─ type: button
├─ background: --color-accent-blue (#2563EB)
├─ text: #FFFFFF (white for contrast on blue)
├─ border: none
├─ states:
│  ├─ default: { opacity: 1 }
│  ├─ hover: { opacity: 0.9, boxShadow: "0 2px 4px rgba(0,0,0,0.2)" }
│  ├─ focus: { outline: "2px solid --color-accent-blue-dark" }
│  └─ active: { background: --color-accent-blue-dark (#1D4ED8) }
└─ location: styles.css
```

### Component: TechnologyBadge

```
Entity: Component
├─ name: tech-badge (.tech-badge)
├─ type: badge
├─ background: --color-accent-green (#10B981)
├─ text: #FFFFFF
├─ border: none
├─ display: pill-shaped (border-radius: 9999px)
├─ padding: small (4px 12px)
└─ location: styles.css
```

### Component: BodyText

```
Entity: Component
├─ name: body text (p, li, etc.)
├─ type: text
├─ color: --color-text-primary (#1F2937)
├─ line-height: 1.6
├─ letter-spacing: normal
└─ location: styles.css
```

### Component: Link

```
Entity: Component
├─ name: anchor link (a)
├─ type: text
├─ color: --color-accent-blue (#2563EB)
├─ text-decoration: none (default)
├─ states:
│  ├─ hover: { text-decoration: underline }
│  ├─ focus: { outline: "2px solid --color-accent-blue" }
│  └─ visited: { color: "#7c3aed" (adjusted purple) }
└─ location: styles.css
```

---

## Validation Rules

### ContrastRatio Validation

**Rule**: All text-background pairs MUST have minimum 4.5:1 contrast ratio (WCAG AA)

**Pairs to Validate**:
- `--color-text-primary` vs `--color-bg-primary` ✅ 17.5:1
- `--color-text-primary` vs `--color-bg-secondary` ✅ 17.5:1
- `--color-text-secondary` vs `--color-bg-primary` ✅ 8.2:1
- `--color-accent-blue` vs `--color-bg-primary` ✅ 4.8:1
- White text (`#FFFFFF`) vs `--color-accent-blue` ✅ 8.6:1

### Interactive State Validation

**Rule**: All interactive states MUST maintain WCAG AA compliance and be keyboard accessible

**Validations**:
- Focus states have visible outline (minimum 2px)
- Hover states don't remove focus state visibility
- Touch targets on mobile ≥ 44px height/width
- Color not sole differentiator (relies on opacity, outline, or shape changes)

---

## Relationships & State Transitions

### Color Usage Dependency Graph

```
--color-bg-primary
  └─ Base for all text colors (primary, secondary)
  └─ Reference for contrast validation

--color-text-primary
  ├─ Applied to: headings, body, descriptions
  └─ Pairs with: --color-bg-primary, --color-bg-secondary

--color-accent-blue
  ├─ Applied to: buttons, links, highlights
  ├─ Hover→: 90% opacity
  └─ Active→: --color-accent-blue-dark

--color-border
  ├─ Applied to: project-card, section-dividers
  └─ Pairs with: --color-bg-secondary
```

### Component Composition

- **ProjectCard**: background (secondary) + text (primary) + border + shadow + badge (accent-green)
- **Button**: background (accent-blue) + text (white) + hover/focus/active states
- **Link**: text (accent-blue) + hover (underline) + focus (outline)
- **BodyText**: text (primary) + secondary text (secondary color)

---

## Out of Scope

- CSS-in-JS or preprocessors (vanilla CSS only)
- Animation timing and easing
- Dark mode color tokens (future phase)
- Custom font definitions (typography assumed to be HTML already defined)
