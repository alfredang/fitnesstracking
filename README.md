# 💪 PulseFit — Fitness Tracking Website

A modern, premium, fully-responsive **single-page** marketing website for a fitness-tracking app / gym brand. Built with **pure HTML5, CSS3, and vanilla JavaScript** — no frameworks, no build step, no dependencies.

🔗 **Live site:** [alfredang.github.io/fitnesstracking](https://alfredang.github.io/fitnesstracking/)

![PulseFit website screenshot](docs/screenshot.png)

---

## ✨ Features

- 🌗 **Dark / light theme** toggle that persists via `localStorage` (falls back to system preference)
- 🧭 **Sticky navbar** with smooth-scroll anchor navigation and a mobile hamburger menu
- 🔢 **Animated stat counters** and scroll-reveal animations (`IntersectionObserver`)
- 💳 **Membership pricing**, **fitness classes**, and **dietary programs** — rendered from JS data arrays
- 📍 **Searchable branch locator** with live filtering
- 📊 **Animated tracking dashboard** — conic-gradient progress rings and bars
- 📝 **Booking form** with client-side validation and toast notifications
- 💬 **Auto-playing testimonials carousel** (swipe, prev/next, dots, pause-on-hover)
- 📣 Animated CTA band and a floating Facebook button
- 🔍 **SEO-ready:** JSON-LD `LocalBusiness` schema, canonical, Open Graph + Twitter cards, `robots.txt`, `sitemap.xml`
- ♿ Accessible: semantic landmarks, ARIA labels, keyboard-operable nav/carousel, `prefers-reduced-motion`

---

## 🚀 Run locally

No build required — just serve the folder over HTTP:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

> Images are hotlinked from Unsplash, so an internet connection is needed to view the full design.

---

## 📁 Project structure

```
.
├── index.html            # all sections + navbar + floating button
├── css/styles.css        # design system, themes, responsive layout
├── js/script.js          # all interactivity (theme, carousel, forms, dashboard…)
├── robots.txt            # search-engine directives
├── sitemap.xml           # single-URL sitemap
├── docs/screenshot.png   # README preview
└── .github/workflows/
    └── deploy.yml         # GitHub Actions → GitHub Pages deploy
```

---

## 🌐 Deployment

The site auto-deploys to **GitHub Pages** via GitHub Actions on every push to `main` (see [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)). No manual steps — push and it's live.

---

## ⚙️ Before using a custom domain

Replace the placeholder domain `https://www.pulsefit.com` in `index.html` (canonical, OG/Twitter, JSON-LD), `robots.txt`, and `sitemap.xml` with your real domain.

---

## 🛠️ Tech stack

Pure **HTML5** · **CSS3** (custom properties, grid, `backdrop-filter`, `conic-gradient`) · **Vanilla JavaScript (ES6+)** — zero dependencies.

---

Powered by [Tertiary Infotech Academy Pte Ltd.](https://www.tertiarycourses.com.sg/)
