# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

PulseFit — a single-page marketing website for a fictional fitness-tracking app/gym brand. Pure HTML5 + CSS3 + vanilla ES6+ JavaScript. **No build step, no dependencies, no framework, no tests.**

## Running locally

There is nothing to build. Serve the folder over HTTP (needed so relative paths and `fetch`-style behavior work; opening `index.html` via `file://` also works for most things):

```powershell
python -m http.server 8791   # then open http://localhost:8791/index.html
```

Images are hotlinked from Unsplash, so rendering the full design requires an internet connection.

## Architecture

Three files, one page:

- `index.html` — all 11 sections in source order (hero → membership → classes → dietary → branches → dashboard → booking → testimonials → CTA → footer), plus the sticky navbar and floating Facebook button. Navigation is anchor-based (`#section-id`); there are no other pages.
- `css/styles.css` — the design system and all styling.
- `js/script.js` — all interactivity.

### Theming (CSS custom properties)
Colors/spacing live as CSS variables under `:root` (light) and `[data-theme="dark"]` in `styles.css`. The theme is switched by toggling the `data-theme` attribute on `<html>` from JS (`initTheme`), and the choice is persisted to `localStorage` under the key `theme`. To add a themed color, define it in **both** variable blocks.

### Content is data-driven
Classes, branches, and testimonials are **not** hardcoded in HTML — they live as arrays at the top of `script.js` (`CLASSES`, `BRANCHES`, `TESTIMONIALS`) and are rendered into placeholder containers (`#classesGrid`, `#branchSelect`/`#branchDetails`, `#carouselTrack`/`#dots`) by their init functions. To change this content, edit the arrays, not the markup. The booking form's branch/class `<select>` options are also populated from these same arrays, so they stay in sync.

### JS structure
`script.js` is plain (no modules/imports), wrapped in `"use strict"`, and wired up in a single `DOMContentLoaded` handler at the bottom. Each feature is an `initX()` function (`initTheme`, `initMobileNav`, `initSmoothScroll`, `initObservers`, `initClasses`, `initBranches`, `initTestimonials`, `initBooking`, `initNewsletter`, `initCtaPrefill`). Order matters in the init block: data-rendering inits (e.g. `initClasses`) run before `initObservers`/`initSmoothScroll` so the dynamically created `.reveal` elements and anchor links get observed/bound.

### Cross-cutting patterns
- **Scroll animations & counters**: a single `IntersectionObserver` in `initObservers` adds `.visible` to any `.reveal` element on entry, runs count-up on `[data-count]` elements, and triggers the dashboard rings/bars. Hero stats are above the fold so they're animated immediately instead.
- **Notifications**: all user feedback goes through the shared `showToast(message, type, title)` helper (`type` = `success` | `error`), which appends to `#toastWrap`.
- **CTA wiring**: "Join Now" / "Book Class" / "Enroll" buttons use `data-join` / `data-book-class` / `data-enroll` attributes and are handled by one delegated click listener in `initCtaPrefill`, which pre-fills the booking form and smooth-scrolls to `#contact`.
- **Forms** are validated entirely client-side (regex + required checks) with inline `.error` messages; there is no backend — successful submits just show a toast and reset.

Respect `prefers-reduced-motion` (already handled in CSS) and keep new icons as inline SVG (the project intentionally uses no icon font).
