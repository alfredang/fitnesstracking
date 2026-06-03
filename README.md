# fitnesstracking

**PulseFit** — a modern, responsive single-page marketing website for a fitness-tracking app / gym brand. Built with pure **HTML5, CSS3, and vanilla JavaScript** — no frameworks, no build step.

## Features

- Sticky navbar with anchor navigation and mobile hamburger menu
- Dark / light theme toggle (persists via `localStorage`)
- Hero with animated stat counters
- Membership pricing, fitness classes, dietary programs (data-driven from JS)
- Searchable branch locator
- Animated tracking dashboard (rings + progress bars)
- Booking form with client-side validation + toast notifications
- Auto-playing testimonials carousel (swipe / prev-next / dots)
- Scroll-reveal animations, floating Facebook button
- SEO: JSON-LD `LocalBusiness` schema, canonical, Open Graph + Twitter cards, `robots.txt`, `sitemap.xml`

## Run locally

No build required — serve the folder over HTTP:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

Images are hotlinked from Unsplash, so an internet connection is needed to view the full design.

## Project structure

```
index.html       # all sections + nav + floating button
css/styles.css   # design system, themes, responsive layout
js/script.js     # all interactivity (theme, carousel, forms, dashboard…)
robots.txt
sitemap.xml
```

## Before deploying

Replace the placeholder domain `https://www.pulsefit.com` in `index.html` (canonical, OG/Twitter, JSON-LD), `robots.txt`, and `sitemap.xml` with your real domain.
