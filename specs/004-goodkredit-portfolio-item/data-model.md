# Data Model: GoodKredit Portfolio Project

**Date**: 2026-05-16  
**Phase**: 1 (Design)  
**Focus**: Entity definitions, attributes, relationships, and validation rules

---

## Entity Definitions

### 1. Project

Represents a portfolio entry, which may contain one or more related apps (subprojects).

**Attributes**:

| Attribute | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `id` | string | ✓ | Unique identifier for the project | `"goodkredit-ecosystem"` |
| `title` | string | ✓ | Display name | `"GoodKredit & Related Apps"` |
| `subtitle` | string | ✓ | Short tagline | `"Fintech Utility Platform Suite"` |
| `category` | string | ✓ | Project type: `"grouped-project"` or `"single-project"` | `"grouped-project"` |
| `summary` | string | ✓ | Paragraph describing the project/suite | `"A collection of iOS fintech apps..."` |
| `featured` | boolean | ✓ | Display on homepage prominently | `true` |
| `cardThumbnail` | string | ✓ | Relative path to card thumbnail image | `"images/projects/goodkredit/card-thumbnail.webp"` |
| `topLevelDescription` | string | ✗ | For grouped projects, a narrative connecting all subprojects | `"Developed multiple iOS apps..."` |
| `subprojects` | Subproject[] | (depends) | Array of subprojects; required if category is `"grouped-project"` | `[{ id: "goodkredit", ... }]` |

**Constraints**:
- `id` must be unique across all projects.
- `category` determines whether `subprojects` array is expected (grouped-project) or not (single-project).
- `cardThumbnail` must reference a valid image file (WebP or JPG).

---

### 2. Subproject (also called "App")

Represents an individual application within a grouped project.

**Attributes**:

| Attribute | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `id` | string | ✓ | Unique identifier within the parent project | `"goodkredit"` |
| `title` | string | ✓ | App name | `"GoodKredit"` |
| `role` | string | ✓ | Developer's role | `"iOS Swift Developer + REST API"` |
| `company` | string | ✓ | Company name | `"GoodApps Inc."` |
| `timeframe` | string | ✓ | Employment or project period | `"2019 - Oct 2023"` |
| `summary` | string | ✓ | Detailed description of the app | `"An electronic Gift Certificate and electronic Gift Voucher program..."` |
| `features` | string[] | ✓ | List of key features | `["Bills payment", "QR pay", "Online store", ...]` |
| `screenshots` | Screenshot[] | ✓ | Array of app screenshots | `[{ id: "gk-screen-1", ... }]` |
| `externalLinks` | ExternalLink[] | ✓ | Array of external links (App Store, GitHub, demo) | `[{ label: "View on App Store", url: "https://...", type: "appstore" }]` |
| `status` | string | ✗ | Status for planned apps; values: `"published"` (default), `"placeholder"` | `"published"` |

**Constraints**:
- `id` must be unique within the parent project.
- `features[]` array should contain 3–8 items for optimal UX.
- `externalLinks[]` must include at least one primary link (e.g., App Store).
- `status: "placeholder"` indicates the app is planned but not yet populated; detail page may hide or gray out the entry.

---

### 3. Screenshot

Represents an image artifact showcasing app functionality.

**Attributes**:

| Attribute | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `id` | string | ✓ | Unique identifier within the subproject | `"gk-screen-1"` |
| `url` | string | ✓ | Relative or absolute path to image file | `"images/projects/goodkredit/screenshots/goodkredit-screen-1.webp"` |
| `caption` | string | ✓ | Short description for the screenshot | `"Payment dashboard overview"` |
| `displayOrder` | number | ✓ | Sort order for gallery rendering (ascending) | `1` |

**Constraints**:
- `displayOrder` must be unique within the subproject's screenshots array.
- `url` must reference a valid image file (WebP, JPG, PNG).
- `caption` should be concise (≤50 characters recommended).

---

### 4. ExternalLink

Represents an outbound link such as App Store, GitHub repository, or demo.

**Attributes**:

| Attribute | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `id` | string | ✓ | Unique identifier within the subproject | `"appstore-link"` |
| `label` | string | ✓ | Display text for the link | `"View on App Store"` |
| `url` | string | ✓ | Full URL (must be HTTP/HTTPS) | `"https://apps.apple.com/ph/app/goodkredit/id1493360454"` |
| `type` | string | ✓ | Link category: `"appstore"`, `"github"`, `"demo"`, or `"other"` | `"appstore"` |
| `target` | string | ✗ | Target attribute for link; default `"_blank"` for external links | `"_blank"` |

**Constraints**:
- `url` must be a valid HTTP/HTTPS URL (validated via regex or URL() constructor).
- `type` must be one of the predefined values.
- `target` defaults to `"_blank"` for external links; internal links may use `""` (same window).

---

## Relationships

```
Project
  ├── has many Subproject (if category = "grouped-project")
  │     ├── has many Screenshot
  │     └── has many ExternalLink
  │
  └── has one Thumbnail (image reference)
```

### Relationship Rules
- A **Project** with `category: "grouped-project"` MUST have `subprojects[]` array with ≥2 items (or ≥1 if adding more later).
- A **Subproject** MUST belong to exactly one parent Project.
- A **Screenshot** belongs to exactly one Subproject and must have unique `displayOrder` within that subproject.
- An **ExternalLink** belongs to exactly one Subproject.

---

## Data Lifecycle & State Transitions

### Project State
- **Draft**: Project data created but `featured: false`; not displayed on homepage.
- **Published**: `featured: true`; displayed on listing and homepage.
- **Archived**: Project removed from listing (soft delete via flag or JSON exclusion).

### Subproject State
- **Published**: `status: undefined` or `status: "published"`; fully rendered on detail page.
- **Placeholder**: `status: "placeholder"`; indicates future addition; may be grayed out or hidden in detail page until populated.

### Screenshot Lifecycle
- **Added**: New screenshot uploaded to `images/projects/{project}/screenshots/`.
- **Referenced**: Screenshot `url` added to subproject `screenshots[]` array with `displayOrder`.
- **Displayed**: Screenshot rendered in gallery on detail page; accessible via lightbox/carousel.

---

## Validation Rules

### Data Structure Validation
1. **Project**:
   - `id` is non-empty string; matches pattern `^[a-z0-9\-]+$` (lowercase, hyphens, digits only).
   - `category` is one of `["grouped-project", "single-project"]`.
   - If `category === "grouped-project"`, `subprojects[]` must be an array with ≥1 item.
   - `featured` is boolean.

2. **Subproject**:
   - `id` is non-empty string; unique within parent project.
   - `features[]` array length: 3–8 items.
   - `screenshots[]` array length: ≥1 item.
   - `externalLinks[]` array length: ≥1 item; at least one with `type === "appstore"`.

3. **Screenshot**:
   - `displayOrder` values are unique within subproject and form a sequence starting at 1 (e.g., 1, 2, 3).
   - `url` references a file with extension `.webp`, `.jpg`, `.jpeg`, or `.png`.

4. **ExternalLink**:
   - `url` passes URL validation (valid HTTP/HTTPS scheme).
   - `type` is one of `["appstore", "github", "demo", "other"]`.

### Content Validation
- **Character Limits**:
  - `title`: ≤50 characters.
  - `subtitle`: ≤100 characters.
  - `caption`: ≤50 characters.
  - `summary`: ≤500 characters.
  - `role`: ≤50 characters.
- **No Invalid Markup**: Summaries and captions are plain text; no HTML tags allowed (sanitized on render).
- **Internationalization**: All text is English; accented characters allowed (UTF-8 encoded).

---

## Example Data Structure

```json
{
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
          "summary": "An electronic Gift Certificate and electronic Gift Voucher program featuring bills payment, QR pay, online store, and RFID e-card transactions.",
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
          "status": "placeholder"
        },
        {
          "id": "app-c",
          "title": "App C (TBD)",
          "status": "placeholder"
        }
      ]
    }
  ]
}
```

---

## Integration with Portfolio

### Storage Location
- **File**: `data/projects.json` (at repository root or under frontend folder).
- **Access**: Loaded via `fetch()` in script.js or embedded inline in index.html for faster load.

### Modification Path
1. Update `data/projects.json` with new subproject data or screenshots.
2. Add image assets to `images/projects/goodkredit/` or corresponding subfolder.
3. No code changes required; portfolio dynamically renders from data structure.

### Backward Compatibility
- Existing single-project entries remain unchanged (category: "single-project").
- Grouped projects are opt-in (category: "grouped-project").
- Portfolio HTML/CSS/JS checks category and renders accordingly.
