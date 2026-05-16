# Quickstart: NativeCamp Feature Verification

**Feature**: Add NativeCamp to Featured Projects  
**Phase**: 1 - Design & Contracts  
**Date**: 2026-04-11  
**Purpose**: Quick manual verification scenarios for NativeCamp project card

---

## Pre-Implementation Checklist

Before starting implementation tasks, verify prerequisites:

- [ ] **Asset exists**: `assets/images/nativecamp-app-icon.png` is present in repository
- [ ] **File size**: Icon image is optimized for web (recommend <100KB PNG)
- [ ] **Repository**: Local `e:\Sigfrid-Portfolio` checkout is current
- [ ] **Browser ready**: Have modern browser open (Chrome, Firefox, Safari, or Edge)

---

## Test Scenario 1: MVP - NativeCamp Discoverable (User Story 1)

**Goal**: Verify NativeCamp project card appears in projects grid with icon and name

**Status Check: After completing T007-T008**

### Manual Test Steps

1. **Navigate to portfolio homepage**
   - Open `file:///e:/Sigfrid-Portfolio/index.html` in browser
   - OR: Start local web server: `python -m http.server 8000` from portfolio root
   - Access `http://localhost:8000` in browser

2. **Scroll to Projects section**
   - Click "Projects" in navigation menu
   - OR: Scroll down from hero section

3. **Verify NativeCamp card visible**
   - Look for project card grid
   - Count cards: Should see GoodKredit, PaydayToday, GiftBeam, **and NativeCamp**
   - Verify 4 cards total (or more if other projects added)

4. **Verify card content**
   - Icon displays: Check NativeCamp app icon is visible (colored PNG)
   - Icon loads: Image should not be broken/placeholder
   - Title visible: "NativeCamp" text appears as h3 heading
   - No text overflow: Title fits within card width

5. **Verify styling consistency**
   - NativeCamp card has same border and shadow as others
   - White background matches other cards
   - Card height/width reasonable and consistent
   - No visual glitches or misalignment

### Success Criteria (MVP PASS)

✅ NativeCamp appears as 4th or later project card  
✅ Icon displays without broken image  
✅ Title "NativeCamp" visible  
✅ Card styling matches other projects  
✅ No console errors (F12 → Console tab)

### Troubleshooting

| Issue | Cause | Fix |
|-------|-------|-----|
| Card doesn't appear | HTML not added | Check T007: HTML block added to index.html |
| Icon is broken/gray | Asset path wrong | Verify `assets/images/nativecamp-app-icon.png` exists and path is correct |
| Card styling wrong | CSS not loaded | Check styles.css loaded in browser (F12 → Network tab) |
| Text overflow | Card width too small | Check CSS Grid breakpoints responsive (F12 → toggle device toolbar) |
| Position wrong | Not in projects grid | Check HTML is inside `.projects-grid` div |

---

## Test Scenario 2: Design - NativeCamp Communicates Value (User Story 2)

**Goal**: Verify description text clearly explains NativeCamp's value proposition

**Status Check: After completing T009-T010**

### Manual Test Steps

1. **Open portfolio to projects section** (same as Scenario 1)

2. **Locate NativeCamp card**

3. **Read description text**
   - Should see paragraph below title
   - Text should mention "unlimited conversation lessons" (or similar)
   - Text should reference "mobile" or "app" aspect

4. **Verify text styling**
   - Description is readable (not too small, not covered)
   - Color is gray (not same as title, secondary text color)
   - Line height provides breathing room (not cramped)

5. **Verify description content clarity**
   - Is feature/value clear to non-technical visitor?
   - Does description explain what NativeCamp does?
   - Is it 1-2 sentences (not a paragraph)?

### Success Criteria (US2 PASS)

✅ Description text visible on card  
✅ Text mentions "unlimited conversation lessons" or equivalent  
✅ Text mentions "mobile" or "app"  
✅ Text color is secondary (gray, not black)  
✅ Text is readable at normal zoom level  
✅ Description is concise (1-2 sentences)

### Text Content Verification

```
Expected text: "Unlimited English conversation lessons platform with 
mobile-first accessibility for learners worldwide."

OR similar variations that communicate:
- Unlimited lessons (key value)
- English/conversation (domain)
- Mobile accessibility (technical capability)
- Learning platform (product category)
```

---

## Test Scenario 3: Interaction - NativeCamp is Accessible (User Story 3)

**Goal**: Verify link to NativeCamp works and tech badges are visible

**Status Check: After completing T011-T013**

### Manual Test Steps

1. **Open portfolio projects section** (same as Scenario 1)

2. **Locate NativeCamp card**

3. **Verify technology badges present**
   - Below description, should see small green pills/badges
   - Check for: **Swift**, **Firebase**, **SwiftUI** (three separate badges)
   - Badges should have green background (var(--color-accent-green))
   - Text should be white

4. **Verify link/button visible**
   - Below badges, should see "Visit NativeCamp" link or button
   - Link text is blue (var(--color-accent-blue))
   - Link is underlined or indicated as clickable

5. **Test link functionality**
   - Click "Visit NativeCamp" link
   - Should navigate to https://nativecamp.net
   - Should open in NEW tab (not replace current page)
   - Browser tab title should show "NativeCamp"

6. **Test hover state**
   - Hover over card: Shadow should increase
   - Hover over "Visit NativeCamp" link: Color should darken or underline appear
   - Hover over tech badges: No change expected (static)

7. **Test keyboard navigation**
   - Press Tab key from projects section
   - Cycle through project cards until NativeCamp card in focus
   - Press Tab again to focus "Visit NativeCamp" link
   - Link should have visible outline (2px blue border)
   - Press Enter: Should navigate to https://nativecamp.net

### Success Criteria (US3 PASS)

✅ Tech badges visible (Swift, Firebase, SwiftUI)  
✅ Badges have green background  
✅ "Visit NativeCamp" link visible  
✅ Link is blue color  
✅ Link click navigates to https://nativecamp.net  
✅ Link opens in new tab  
✅ Card hover effect visible (shadow increases)  
✅ Link focus state visible (2px outline)  
✅ Keyboard Tab navigation works through link

### Troubleshooting

| Issue | Cause | Fix |
|-------|-------|-----|
| Link doesn't work | URL wrong or missing | Check T011: href="https://nativecamp.net" in HTML |
| Link opens in same tab | target="_blank" missing | Add target="_blank" rel="noopener noreferrer" |
| Badges not visible | CSS not loaded or class wrong | Check `.project-link` class exists in styles.css |
| Focus outline missing | CSS not defined | Check `.project-link:focus` in styles.css |
| Keyboard nav doesn't work | Link not in tab order | Verify link is `<a>` element with href |

---

## Test Scenario 4: Responsive - NativeCamp on All Devices

**Goal**: Verify card displays correctly on mobile, tablet, desktop

**Status Check: After completing T014-T016**

### Manual Test - Mobile (320px)

1. Open browser F12 DevTools
2. Click toggle device toolbar (Ctrl+Shift+M)
3. Select "iPhone SE" or set width to 320px
4. Navigate to projects section
5. Verify:
   - [ ] Card is full width (not cramped)
   - [ ] Text is readable without horizontal scroll
   - [ ] Image scales appropriately
   - [ ] Badges and link are touchable (large enough)
   - [ ] No text overflow

### Manual Test - Tablet (768px)

1. DevTools: Set width to 768px (iPad)
2. Verify:
   - [ ] Grid shows 2-3 columns
   - [ ] NativeCamp card is one of multiple columns
   - [ ] Spacing and alignment correct
   - [ ] Text readable at this size

### Manual Test - Desktop (1024px+)

1. DevTools: Set width to 1024px or larger
2. Verify:
   - [ ] Grid shows 3-4 columns
   - [ ] NativeCamp card properly positioned in grid
   - [ ] All cards aligned and evenly spaced
   - [ ] No excessive white space

### Success Criteria (Responsive PASS)

✅ Works on 320px (mobile) - full width, readable  
✅ Works on 768px (tablet) - 2-3 columns  
✅ Works on 1024px+ (desktop) - 3-4 columns  
✅ No horizontal scroll on any device  
✅ Touch targets ≥44px on mobile  
✅ Text readable at all sizes

---

## Test Scenario 5: Accessibility - Contrast & Alt Text

**Goal**: Verify color contrast and accessibility

**Status Check: After completing T017-T019**

### Manual Test - Color Contrast

1. Open browser F12 DevTools
2. Right-click on NativeCamp card → Inspect
3. Check Colors panel:
   - Description text color should be `var(--color-text-secondary)`
   - Link color should be `var(--color-accent-blue)`
   - Badge background should be `var(--color-accent-green)`
4. Use WebAIM Contrast Checker:
   - Text color on white background: Should be 4.5:1 or higher
   - Link color on white background: Should be 4.5:1 or higher

### Manual Test - Alt Text

1. Right-click on NativeCamp image → Copy Image Alt Text
2. Verify alt text is: "NativeCamp - unlimited English conversation lessons platform"
3. Alt text should be descriptive, not "image" or "pic"

### Manual Test - Keyboard Navigation

1. Press Tab repeatedly to cycle through portfolio
2. When NativeCamp link in focus:
   - [ ] 2px blue outline should be visible around link
   - [ ] Outline should be distinguishable from normal state
   - [ ] Press Enter: Navigate to nativecamp.net

### Manual Test - Screen Reader (Optional)

1. macOS: Press Cmd+F5 to enable Voice Over
2. OR Windows: Install NVDA (free screen reader)
3. Navigate to projects section
4. Verify screen reader reads:
   - Card as a region or group
   - Image alt text: "NativeCamp - unlimited English conversation lessons platform"
   - Heading: "NativeCamp"
   - Description text
   - Link: "Visit NativeCamp" with href

### Success Criteria (Accessibility PASS)

✅ Color contrast 4.5:1 minimum (WCAG AA)  
✅ Alt text is descriptive and meaningful  
✅ Focus outline visible and distinguishable  
✅ Keyboard navigation works (Tab + Enter)  
✅ Screen reader identifies image, heading, link  

---

## Test Scenario 6: Performance - Lighthouse Audit

**Goal**: Verify feature doesn't degrade performance

**Status Check: After completing T024**

### Manual Lighthouse Test

1. Open browser F12 DevTools
2. Go to "Lighthouse" tab
3. Select "Performance" category
4. Click "Analyze page load"
5. Wait for audit to complete
6. Check score:
   - [ ] **Performance score ≥90** (target: maintain current or higher)
   - [ ] No new performance issues introduced
   - [ ] Image optimization noted (should be good for PNG icon)

### Performance Targets

- **Largest Contentful Paint (LCP)**: <2.5s
- **First Input Delay (FID)**: <100ms  
- **Cumulative Layout Shift (CLS)**: <0.1
- **Overall score**: ≥90

### Troubleshooting

| Issue | Cause | Fix |
|-------|-------|-----|
| Score dropped | Heavy image | Optimize PNG: reduce size, use compression |
| LCP slow | Image loading | Ensure fast CDN or local file delivery |
| CLS issue | Layout shift | Verify no layout repaints on card render |

### Success Criteria (Performance PASS)

✅ Lighthouse score ≥90 maintained  
✅ No new performance warnings  
✅ Image loads quickly (no delays)  
✅ No layout shifts on page load

---

## Complete Feature Verification Checklist

After all implementation tasks complete, verify:

### MVP (T001-T008)
- [ ] Scenario 1 PASS: NativeCamp discoverable with icon and name

### Full Feature (T001-T013)
- [ ] Scenario 1 PASS: NativeCamp discoverable
- [ ] Scenario 2 PASS: Description communicates value
- [ ] Scenario 3 PASS: Link works and badges visible

### Polish (T014-T025)
- [ ] Scenario 4 PASS: Responsive on all devices
- [ ] Scenario 5 PASS: Accessibility verified
- [ ] Scenario 6 PASS: Performance maintained

**Feature Complete When**: All scenarios PASS ✅

---

## Links & References

- **Portfolio**: e:\Sigfrid-Portfolio\
- **Icon**: e:\Sigfrid-Portfolio\assets\images\nativecamp-app-icon.png
- **Main HTML**: e:\Sigfrid-Portfolio\index.html
- **Styles**: e:\Sigfrid-Portfolio\styles.css
- **NativeCamp Website**: https://nativecamp.net
- **WCAG AA Standard**: https://www.w3.org/WAI/WCAG21/quickref/

---

## Quick Command Reference

```bash
# Start local server (if needed)
cd e:\Sigfrid-Portfolio
python -m http.server 8000

# Access portfolio
http://localhost:8000

# Open DevTools
F12 (Windows/Linux) or Cmd+Option+I (Mac)

# Responsive design mode
Ctrl+Shift+M (Windows/Linux) or Cmd+Shift+M (Mac)

# Lighthouse audit
DevTools → Lighthouse → Analyze page load
```

---

## Success Path

1. ✅ Verify prerequisites (asset exists)
2. ✅ Complete T001-T008 → Test Scenario 1
3. ✅ Complete T009-T010 → Test Scenario 2
4. ✅ Complete T011-T013 → Test Scenario 3
5. ✅ Complete T014-T016 → Test Scenario 4
6. ✅ Complete T017-T019 → Test Scenario 5
7. ✅ Complete T024 → Test Scenario 6
8. ✅ All scenarios PASS → Feature complete!

**Estimated Time**: 60-90 minutes for full completion
