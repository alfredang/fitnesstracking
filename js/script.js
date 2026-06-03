/* =========================================================
   PulseFit — interactivity (vanilla ES6+)
   Modules: theme, mobile nav, smooth scroll, counters/reveal,
   classes, branches, testimonials, booking, newsletter, toast
   ========================================================= */
"use strict";

/* ---------- Data ---------- */
const CLASSES = [
  { name: "Yoga", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80", desc: "Improve flexibility, balance and calm with guided flows.", duration: "60 min", trainer: "Aisha Khan", schedule: "Mon · Wed · Fri — 7:00 AM" },
  { name: "HIIT", img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=600&q=80", desc: "High-intensity intervals that torch calories fast.", duration: "30 min", trainer: "Marcus Reed", schedule: "Tue · Thu — 6:00 PM" },
  { name: "Strength Training", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80", desc: "Build lean muscle with progressive overload.", duration: "55 min", trainer: "David Chen", schedule: "Mon · Thu — 5:00 PM" },
  { name: "Pilates", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80", desc: "Core-focused, low-impact strengthening and control.", duration: "50 min", trainer: "Elena Rossi", schedule: "Wed · Sat — 9:00 AM" },
  { name: "Spin Class", img: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=600&q=80", desc: "High-energy indoor cycling with pumping playlists.", duration: "45 min", trainer: "Sarah Lopez", schedule: "Daily — 6:30 AM" },
  { name: "CrossFit", img: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=600&q=80", desc: "Functional, varied workouts for all-round fitness.", duration: "60 min", trainer: "Marcus Reed", schedule: "Tue · Fri — 7:00 PM" },
  { name: "Zumba", img: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=600&q=80", desc: "Dance your way fit with fun, rhythmic cardio.", duration: "45 min", trainer: "Sarah Lopez", schedule: "Mon · Wed — 6:00 PM" }
];

const BRANCHES = [
  { name: "Downtown Fitness Center", address: "120 Market St, Downtown", phone: "+1 (555) 100-2200", hours: "Mon–Sun · 5:00 AM – 11:00 PM", facilities: ["Pool", "Sauna", "Free Weights", "Cardio Zone", "Parking"] },
  { name: "Eastside Fitness Hub", address: "44 River Ave, Eastside", phone: "+1 (555) 100-3300", hours: "Mon–Sat · 6:00 AM – 10:00 PM", facilities: ["Group Studio", "Free Weights", "Cardio Zone", "Lockers"] },
  { name: "West End Gym", address: "8 Sunset Blvd, West End", phone: "+1 (555) 100-4400", hours: "Mon–Sun · 5:30 AM – 11:30 PM", facilities: ["Boxing Ring", "Pool", "Sauna", "Personal Training"] },
  { name: "North Wellness Center", address: "210 Pine Rd, Northside", phone: "+1 (555) 100-5500", hours: "Mon–Sun · 6:00 AM – 10:00 PM", facilities: ["Yoga Studio", "Spa", "Cardio Zone", "Juice Bar"] },
  { name: "South Performance Club", address: "77 Stadium Way, Southside", phone: "+1 (555) 100-6600", hours: "Mon–Sat · 5:00 AM – 12:00 AM", facilities: ["Strength Lab", "Recovery Room", "Free Weights", "Parking", "Lockers"] }
];

const TESTIMONIALS = [
  { name: "Jessica Tan", role: "Lost 14kg in 6 months", rating: 5, photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80", quote: "PulseFit completely changed my routine. The tracking dashboard keeps me accountable every single day." },
  { name: "Daniel Okoro", role: "Marathon finisher", rating: 5, photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80", quote: "The trainers and the structured classes got me from couch to marathon. Best decision I've made." },
  { name: "Priya Sharma", role: "Gained strength & confidence", rating: 5, photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80", quote: "I love the diet programs paired with strength training. I feel stronger and more confident than ever." },
  { name: "Liam Murphy", role: "Premium member, 2 yrs", rating: 4, photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80", quote: "Booking classes across branches is effortless. The app is genuinely the best fitness tool I've used." },
  { name: "Mia Rodriguez", role: "Healthy lifestyle member", rating: 5, photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80", quote: "From water intake to BMI, everything is in one place. The reminders keep me on track all week." },
  { name: "Kenji Watanabe", role: "Elite member", rating: 5, photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80", quote: "My personal trainer tailors everything to my goals. Priority booking means I never miss a session." }
];

/* ---------- Toast helper ---------- */
function showToast(message, type = "success", title = "Success") {
  const wrap = document.getElementById("toastWrap");
  const el = document.createElement("div");
  el.className = `toast ${type}`;
  el.innerHTML = `<div><strong>${title}</strong><br><span>${message}</span></div>`;
  wrap.appendChild(el);
  requestAnimationFrame(() => el.classList.add("show"));
  setTimeout(() => {
    el.classList.remove("show");
    setTimeout(() => el.remove(), 450);
  }, 3800);
}

/* ---------- Theme ---------- */
function initTheme() {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.setAttribute("data-theme", saved || (prefersDark ? "dark" : "light"));

  toggle.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
}

/* ---------- Mobile nav + sticky shadow ---------- */
function initMobileNav() {
  const burger = document.getElementById("hamburger");
  const links = document.getElementById("navLinks");
  const navbar = document.getElementById("navbar");

  const close = () => { links.classList.remove("open"); burger.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); };

  burger.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", String(open));
  });
  links.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
  document.addEventListener("click", (e) => {
    if (!links.contains(e.target) && !burger.contains(e.target)) close();
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 8);
  }, { passive: true });
}

/* ---------- Smooth scroll (with sticky offset) ---------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href");
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

/* ---------- Counters + scroll reveal + dashboard ---------- */
function animateCounter(el) {
  const target = +el.dataset.count;
  const suffix = el.dataset.suffix || "";
  const dur = 1600;
  const start = performance.now();
  function tick(now) {
    const p = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(eased * target).toLocaleString() + suffix;
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = target.toLocaleString() + suffix;
  }
  requestAnimationFrame(tick);
}

function activateDashboard(scope) {
  scope.querySelectorAll(".ring").forEach((ring) => {
    const pct = +ring.dataset.percent;
    ring.style.setProperty("--p", pct);
    const val = ring.querySelector(".ring-val");
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / 1100, 1);
      val.textContent = Math.round(p * pct) + "%";
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
  scope.querySelectorAll(".bar-fill").forEach((b) => { b.style.width = b.dataset.percent + "%"; });
}

function initObservers() {
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.classList.add("visible");
      el.querySelectorAll?.("[data-count]").forEach(animateCounter);
      if (el.id === "dashboard") activateDashboard(el);
      obs.unobserve(el);
    });
  }, { threshold: 0.18 });

  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  const dash = document.getElementById("dashboard");
  if (dash) io.observe(dash);
  // Hero stats sit inside hero (above fold) — animate immediately.
  document.querySelectorAll(".hero [data-count]").forEach(animateCounter);
}

/* ---------- Classes ---------- */
function initClasses() {
  const grid = document.getElementById("classesGrid");
  grid.innerHTML = CLASSES.map((c) => `
    <article class="card class-card reveal">
      <div class="class-media">
        <span class="class-tag">${c.duration}</span>
        <img src="${c.img}" alt="Instructor leading a ${c.name} class at PulseFit" width="600" height="375" loading="lazy" />
      </div>
      <div class="card-body">
        <h3>${c.name}</h3>
        <p>${c.desc}</p>
        <div class="class-meta">
          <span><b>Trainer:</b> ${c.trainer}</span>
          <span><b>Schedule:</b> ${c.schedule}</span>
        </div>
        <button class="btn btn-primary btn-block" data-book-class="${c.name}">Book Class</button>
      </div>
    </article>`).join("");
}

/* ---------- Branches ---------- */
function initBranches() {
  const search = document.getElementById("branchSearch");
  const select = document.getElementById("branchSelect");
  const details = document.getElementById("branchDetails");
  const formField = document.getElementById("branchField");

  // Populate the branch <select> and the booking-form branch field.
  select.innerHTML = BRANCHES.map((b, i) => `<option value="${i}">${b.name}</option>`).join("");
  formField.innerHTML = '<option value="">Select a branch</option>' +
    BRANCHES.map((b) => `<option>${b.name}</option>`).join("");

  function render(i) {
    const b = BRANCHES[i];
    if (!b) { details.innerHTML = '<p class="branch-empty">No branch matches your search.</p>'; return; }
    details.innerHTML = `
      <h3>${b.name}</h3>
      <div class="branch-info">
        <p><b>Address</b> <span>${b.address}</span></p>
        <p><b>Contact</b> <span>${b.phone}</span></p>
        <p><b>Hours</b> <span>${b.hours}</span></p>
      </div>
      <div class="facilities">${b.facilities.map((f) => `<span>${f}</span>`).join("")}</div>`;
  }

  search.addEventListener("input", () => {
    const q = search.value.trim().toLowerCase();
    const idx = BRANCHES.findIndex((b) => b.name.toLowerCase().includes(q) || b.address.toLowerCase().includes(q));
    if (q && idx === -1) { render(-1); return; }
    const target = q ? idx : +select.value;
    select.value = target;
    render(target);
  });
  select.addEventListener("change", () => render(+select.value));

  render(0);
}

/* ---------- Testimonials carousel ---------- */
function initTestimonials() {
  const track = document.getElementById("carouselTrack");
  const dotsWrap = document.getElementById("dots");
  const prev = document.getElementById("prevBtn");
  const next = document.getElementById("nextBtn");
  const carousel = document.getElementById("carousel");
  let index = 0, timer;

  track.innerHTML = TESTIMONIALS.map((t) => `
    <div class="slide">
      <img src="${t.photo}" alt="Portrait of ${t.name}, PulseFit member" width="86" height="86" loading="lazy" />
      <div class="stars" aria-label="${t.rating} out of 5 stars">${"★".repeat(t.rating)}${"☆".repeat(5 - t.rating)}</div>
      <blockquote>"${t.quote}"</blockquote>
      <p class="who">${t.name}</p>
      <p class="role">${t.role}</p>
    </div>`).join("");

  dotsWrap.innerHTML = TESTIMONIALS.map((_, i) => `<button role="tab" aria-label="Testimonial ${i + 1}"></button>`).join("");
  const dots = [...dotsWrap.children];

  function go(i) {
    index = (i + TESTIMONIALS.length) % TESTIMONIALS.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, di) => d.classList.toggle("active", di === index));
  }
  function start() { stop(); timer = setInterval(() => go(index + 1), 5000); }
  function stop() { clearInterval(timer); }

  next.addEventListener("click", () => { go(index + 1); start(); });
  prev.addEventListener("click", () => { go(index - 1); start(); });
  dots.forEach((d, i) => d.addEventListener("click", () => { go(i); start(); }));
  carousel.addEventListener("mouseenter", stop);
  carousel.addEventListener("mouseleave", start);

  // Touch swipe
  let startX = 0;
  track.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; stop(); }, { passive: true });
  track.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
    start();
  }, { passive: true });

  go(0);
  start();
}

/* ---------- Booking form ---------- */
function initBooking() {
  const form = document.getElementById("bookingForm");
  const classField = document.getElementById("classField");
  classField.innerHTML = '<option value="">Select a class</option>' +
    CLASSES.map((c) => `<option>${c.name}</option>`).join("");

  const setError = (name, msg) => {
    const small = form.querySelector(`.error[data-for="${name}"]`);
    const field = form.querySelector(`[name="${name}"]`)?.closest(".field");
    if (small) small.textContent = msg;
    field?.classList.toggle("invalid", !!msg);
  };

  const validators = {
    fullName: (v) => v.trim().length >= 2 || "Please enter your full name.",
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "Enter a valid email address.",
    phone: (v) => /^[+\d][\d\s().-]{6,}$/.test(v) || "Enter a valid phone number.",
    branch: (v) => !!v || "Please choose a branch.",
    class: (v) => !!v || "Please choose a class.",
    date: (v) => !!v || "Please pick a date.",
    time: (v) => !!v || "Please pick a time slot."
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let ok = true;
    for (const [name, rule] of Object.entries(validators)) {
      const input = form.elements[name];
      const result = rule(input.value);
      if (result !== true) { setError(name, result); ok = false; }
      else setError(name, "");
    }
    if (!ok) { showToast("Please fix the highlighted fields.", "error", "Check your details"); return; }

    const name = form.elements.fullName.value.trim().split(" ")[0];
    showToast(`Thanks, ${name}! Your booking request is confirmed — check your email.`, "success", "Booking confirmed");
    form.reset();
    form.querySelectorAll(".invalid").forEach((f) => f.classList.remove("invalid"));
  });

  // Clear an error as soon as the user fixes the field.
  form.querySelectorAll("input, select").forEach((el) => {
    el.addEventListener("input", () => setError(el.name, ""));
  });

  // Prevent picking past dates.
  const date = document.getElementById("dateField");
  const today = new Date().toISOString().split("T")[0];
  date.min = today;
}

/* ---------- Membership / class CTAs → prefill booking ---------- */
function initCtaPrefill() {
  document.addEventListener("click", (e) => {
    const joinBtn = e.target.closest("[data-join]");
    const bookBtn = e.target.closest("[data-book-class]");
    const enrollBtn = e.target.closest("[data-enroll]");

    if (joinBtn) {
      showToast(`${joinBtn.dataset.join} plan selected — complete your booking below.`, "success", "Great choice!");
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    }
    if (bookBtn) {
      const sel = document.getElementById("classField");
      if (sel) sel.value = bookBtn.dataset.bookClass;
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    }
    if (enrollBtn) {
      showToast(`You're enrolled in the ${enrollBtn.dataset.enroll}. We'll be in touch!`, "success", "Enrolled");
    }
  });
}

/* ---------- Newsletter ---------- */
function initNewsletter() {
  const form = document.getElementById("newsletterForm");
  const input = document.getElementById("newsletterEmail");
  const err = form.parentElement.querySelector('.error[data-for="newsletter"]');
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
      err.textContent = "Please enter a valid email.";
      return;
    }
    err.textContent = "";
    showToast("You're subscribed! Watch your inbox for fitness tips.", "success", "Subscribed");
    form.reset();
  });
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initMobileNav();
  initClasses();        // build cards before observers/smooth-scroll bind
  initBranches();
  initTestimonials();
  initBooking();
  initNewsletter();
  initCtaPrefill();
  initSmoothScroll();
  initObservers();
  document.getElementById("year").textContent = new Date().getFullYear();
});
