/* =====================================================
   EDIT THIS BLOCK: your contact details & certificates
   ===================================================== */
const CONFIG = {
  email: "your.email@example.com",              // TODO: replace
  links: [
    { name: "LinkedIn",  url: "#", icon: "in" },  // TODO
    { name: "GitHub",    url: "#",         icon: "gh" },  // TODO
    { name: "Instagram", url: "#",      icon: "ig" }   // TODO
  ],
  roles: ["Software Engineer", "ICT Mentor", "Web Application Developer", "GenAI Integrator"]
};

const CERTS = [
  { title: "AI Productivity and AI API Integration for Developers", issuer: "Hacktiv8 Indonesia", date: "Feb 2026", id: "04398/H8/CSR/MBA/II/2026", skills: ["Prompt Engineering", "Rapid Prototyping"], cat: "AI", color: "#f97316", abbr: "H8" },
  { title: "Intro to Software Engineering", issuer: "RevoU", date: "Jan 2026", id: "CCSE050126-01-I-00007", skills: ["Software Engineering Practices", "JavaScript"], cat: "Development", color: "#facc15", abbr: "RV" },
  { title: "LLM-Based Tools and Gemini API Integration for Data Scientists", issuer: "Hacktiv8 Indonesia", date: "Jan 2026", id: "04019/H8/CSR/MBA/I/2026", skills: ["Generative AI", "Large Language Models (LLM)"], cat: "AI", color: "#f97316", abbr: "H8" },
  { title: "DSF 46 Faculty of IT: Back End by Dibimbing.id", issuer: "Dibimbing", date: "Dec 2025", skills: ["Back-End Web Development", "REST APIs"], cat: "Development", color: "#2dd4bf", abbr: "DB" },
  { title: "UiPath Citizen Developer (Indosat IDCamp)", issuer: "UiPath", date: "Nov 2025", skills: ["Robotic Process Automation (RPA)", "UiPath Automation"], cat: "Automation", color: "#fa4616", abbr: "UP" },
  { title: "Gemini Certified Educator", issuer: "Google", date: "Nov 2025", expires: "Valid until Oct 2028", skills: ["Artificial Intelligence in Education", "Google for Education Tools"], cat: "AI", color: "#4ade80", abbr: "G" },
  { title: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", skills: ["Cyber Best Practices", "Cybersecurity"], cat: "Security", color: "#38bdf8", abbr: "CS" },
  { title: "English for IT 1", issuer: "Cisco Networking Academy", skills: ["Technical English"], cat: "Language", color: "#38bdf8", abbr: "CS" },
  { title: "JavaScript Essentials 1", issuer: "Cisco Networking Academy", skills: ["JavaScript"], cat: "Development", color: "#38bdf8", abbr: "CS" },
  { title: "Python Essentials 1", issuer: "Cisco Networking Academy", skills: ["Python"], cat: "Development", color: "#38bdf8", abbr: "CS" },
  { title: "C++ Essentials 1", issuer: "Cisco Networking Academy", skills: ["C++"], cat: "Development", color: "#38bdf8", abbr: "CS" }
];

const ICONS = {
  in: "M4.98 3.5a2.5 2.5 0 11-.01 5 2.5 2.5 0 01.01-5zM3 9.75h4V21H3zM9.5 9.75h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-4.9c0-1.2 0-2.7-1.7-2.7s-1.9 1.3-1.9 2.6V21h-4z",
  gh: "M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.9.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z",
  ig: "M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3zm5 3.500a4.500 4.500 0 110 9 4.500 4.500 0 010-9zm0 2a2.500 2.500 0 100 5 2.500 2.500 0 000-5zM17.500 6a1 1 0 110 2 1 1 0 010-2z"
};

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const fine = matchMedia("(hover:hover) and (pointer:fine)").matches;
const lite = matchMedia("(max-width:860px), (hover:none)").matches;

/* Preloader */
addEventListener("load", () => setTimeout(() => $("#preloader").classList.add("done"), 600));

/* Year */
$("#year").textContent = new Date().getFullYear();

/* Typing effect */
(() => {
  const el = $("#typing"); let r = 0, c = 0, del = false;
  if (reduceMotion) { el.textContent = CONFIG.roles[0]; return; }
  const tick = () => {
    const word = CONFIG.roles[r];
    el.textContent = word.slice(0, del ? --c : ++c);
    let t = del ? 40 : 85;
    if (!del && c === word.length) { del = true; t = 1500; }
    else if (del && c === 0) { del = false; r = (r + 1) % CONFIG.roles.length; t = 350; }
    setTimeout(tick, t);
  };
  setTimeout(tick, 1000);
})();

/* Nav: scrolled state, progress bar, mobile menu, active link */
const nav = $("#nav"), prog = $("#progress"), links = $$("#navLinks a"), toggle = $("#navToggle");
let ticking = false;
addEventListener("scroll", () => {
  if (ticking) return; ticking = true;
  requestAnimationFrame(() => {
    nav.classList.toggle("scrolled", scrollY > 30);
    const h = document.documentElement;
    prog.style.transform = `scaleX(${Math.min(1, scrollY / (h.scrollHeight - h.clientHeight))})`;
    ticking = false;
  });
}, { passive: true });
toggle.addEventListener("click", () => {
  const open = $("#navLinks").classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
links.forEach(a => a.addEventListener("click", () => { $("#navLinks").classList.remove("open"); toggle.setAttribute("aria-expanded", false); }));
const spy = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
$$("main section[id]").forEach(s => spy.observe(s));

/* Scroll reveal (with stagger inside grids) */
$$(".skills,.projects,.services,.process,.about").forEach(g => $$(".reveal", g).forEach((el, i) => el.style.setProperty("--rd", i * 0.12 + "s")));
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add("in");
  $$(".bar i", e.target).forEach(b => b.style.transform = `scaleX(${b.dataset.level / 100})`);
  io.unobserve(e.target);
}), { threshold: .15 });
$$(".reveal").forEach(el => io.observe(el));

/* Counters */
const cio = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  const el = e.target, to = +el.dataset.to, t0 = performance.now();
  const step = t => { const p = Math.min((t - t0) / 1600, 1); el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(step); };
  requestAnimationFrame(step); cio.unobserve(el);
}), { threshold: .6 });
$$(".count").forEach(el => cio.observe(el));

/* 3D tilt + glare for glass cards, magnetic buttons, hero parallax, cursor glow */
if (fine && !reduceMotion) {
  $$("[data-tilt]").forEach(card => {
    card.addEventListener("mousemove", e => {
      const r = card.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      card.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateZ(0)`;
    });
    card.addEventListener("mouseleave", () => { card.style.transition = "transform .6s cubic-bezier(.22,.8,.24,1)"; card.style.transform = ""; });
    card.addEventListener("mouseenter", () => card.style.transition = "transform .1s");
  });
  $$(".magnetic").forEach(b => {
    b.addEventListener("mousemove", e => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .25}px,${(e.clientY - r.top - r.height / 2) * .35}px)`; });
    b.addEventListener("mouseleave", () => b.style.transform = "");
  });
  const photo = $("#heroPhoto"), glow = $("#cursorGlow");
  addEventListener("mousemove", e => {
    glow.style.transform = `translate(${e.clientX - 210}px,${e.clientY - 210}px)`;
    const x = e.clientX / innerWidth - .5, y = e.clientY / innerHeight - .5;
    photo.style.transform = `translate(${x * 14}px,${y * 8}px)`;
    $$(".cube").forEach((c, i) => c.style.translate = `${x * (24 + i * 16)}px ${y * (24 + i * 16)}px`);
  });
} else { $("#cursorGlow").style.display = "none"; }

/* Certificates */
(() => {
  const cats = ["All", ...new Set(CERTS.map(c => c.cat))];
  const fWrap = $("#certFilters"), grid = $("#certGrid");
  const draw = cat => {
    grid.innerHTML = "";
    CERTS.filter(c => cat === "All" || c.cat === cat).forEach((c, i) => {
      const card = document.createElement("article");
      card.className = "glass cert"; card.style.animationDelay = i * .06 + "s";
      card.innerHTML = `
        <div class="cert__top">
          <div class="cert__badge" style="--c:${c.color}">${c.abbr}</div>
          <div><h3>${c.title}</h3><p class="cert__issuer">${c.issuer}</p></div>
        </div>
        <div class="cert__meta">
          ${c.date ? `<span>Issued <b>${c.date}</b>${c.expires ? " · " + c.expires : ""}</span>` : ""}
          ${c.id ? `<span>Credential ID <b>${c.id}</b></span>` : ""}
        </div>
        <div class="tags">${c.skills.map(s => `<span>${s}</span>`).join("")}</div>`;
      grid.appendChild(card);
    });
  };
  cats.forEach((cat, i) => {
    const b = document.createElement("button");
    b.textContent = cat; if (!i) b.className = "on";
    b.addEventListener("click", () => { $$("button", fWrap).forEach(x => x.classList.remove("on")); b.classList.add("on"); draw(cat); });
    fWrap.appendChild(b);
  });
  draw("All");
})();

/* Social links & email */
$("#social").innerHTML = CONFIG.links.map(l =>
  `<a href="${l.url}" ${l.url === "#" ? "" : 'target="_blank" rel="noopener"'}><svg viewBox="0 0 24 24"><path d="${ICONS[l.icon]}"/></svg>${l.name}</a>`).join("");
$("#emailBtn").href = "mailto:" + CONFIG.email;

/* Contact form: opens the visitor's email app with the message filled in */
$("#contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const f = e.target, st = $("#formStatus");
  if (!f.name.value.trim() || !/^\S+@\S+\.\S+$/.test(f.email.value) || !f.message.value.trim()) {
    st.style.color = "#fb7185"; st.textContent = "Please fill in your name, a valid email, and a message."; return;
  }
  const body = `${f.message.value}\n\nFrom: ${f.name.value} (${f.email.value})`;
  location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent("Portfolio inquiry from " + f.name.value)}&body=${encodeURIComponent(body)}`;
  st.style.color = "var(--teal)"; st.textContent = "Opening your email app…"; f.reset();
});

/* Background: drifting particles that link up (canvas) */
(() => {
  if (lite) return; // no particle canvas on phones
  const cv = $("#bg"), ctx = cv.getContext("2d"); let w, h, pts;
  const init = () => {
    w = cv.width = innerWidth; h = cv.height = innerHeight;
    const n = Math.min(70, Math.floor(w * h / 22000));
    pts = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .3 }));
  };
  const loop = () => {
    ctx.clearRect(0, 0, w, h);
    pts.forEach((p, i) => {
      p.x = (p.x + p.vx + w) % w; p.y = (p.y + p.vy + h) % h;
      ctx.fillStyle = "rgba(34,211,238,.7)"; ctx.beginPath(); ctx.arc(p.x, p.y, 1.4, 0, 7); ctx.fill();
      for (let j = i + 1; j < pts.length; j++) {
        const q = pts[j], d = Math.hypot(p.x - q.x, p.y - q.y);
        if (d < 130) { ctx.strokeStyle = `rgba(34,211,238,${.16 * (1 - d / 130)})`; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke(); }
      }
    });
    if (!reduceMotion) requestAnimationFrame(loop);
  };
  addEventListener("resize", init); init(); loop();
})();
