<div align="center">

# Faizal Richi Candra | Portfolio

### Software Engineer & ICT Mentor, Bojonegoro, Indonesia

A futuristic glassmorphism portfolio website built with pure HTML, CSS, and JavaScript. No frameworks, no build step.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-22d3ee?style=flat)

</div>

---

## About this project

This is my personal portfolio. It presents who I am, what I build, and what I teach: web application development on one side, and Informatics education for middle and high school students on the other.

The design follows a dark glassmorphism style with translucent glass panels, cyan glow accents, floating 3D glass cubes, and a large cut-out portrait at the center of the hero section.

## Sections

| Section | What it shows |
|---|---|
| **Hero** | Portrait, typing animation of my roles, and quick stats |
| **About** | Short professional summary and key facts |
| **Technical skills** | Backend, frontend, and additional skills with animated bars |
| **Featured projects** | e-Lab Komputer and e-Absensi Madrasah, with features, tech stack, and project size |
| **Licenses & certifications** | 11 certifications with category filter |
| **Services** | Web development, GenAI integration, ICT mentoring |
| **Work process** | Discover, design, build, test, launch |
| **Contact** | Message form, email button, and social links |

## Featured projects

Both are full-stack applications I designed, built, and delivered for Madrasah Sains Qur'an Ar-Ridwan, using PHP 8.2, CodeIgniter 4, and MySQL / MariaDB.

- **e-Lab Komputer**: computer lab reservation and management system with automatic availability checks, inventory with Excel import, class and account blocking, and official A4 reports with QR-code signatures.
- **e-Absensi Madrasah**: teacher and class attendance system with automatic teaching-hour (JTM) calculation, configurable late fines, monthly scheduling with conflict detection, and official A4 recaps with QR-code signatures.

## Features

**Animations**
- Floating 3D glass cubes, rotating rings, and a drifting particle network in the background
- Typing effect for the role title
- Scroll-triggered reveal with stagger, animated skill bars, and count-up numbers
- 3D tilt on glass cards, magnetic buttons, a cursor glow, and mouse parallax on the portrait
- Preloader and a scroll progress bar

**Experience**
- Fully responsive: phone, tablet, laptop, and large desktop monitors
- Layout scales with the viewport width from 1200 px up, so a laptop and a 21-inch monitor show the same proportions
- Certification filter by category
- Respects the `prefers-reduced-motion` setting
- Accessible markup: semantic sections, visible focus states, labeled controls

**Performance**
- Zero dependencies and no build step
- On phones and touch devices a lighter mode runs automatically: heavy blur, 3D cubes, particles, and looping animations are turned off so scrolling stays smooth on budget devices
- WebP images with a smaller portrait served to small screens
- Scroll and progress effects use compositor-friendly transforms

## Tech stack

| Area | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, grid, flexbox, `backdrop-filter`, 3D transforms) |
| Behavior | Vanilla JavaScript (IntersectionObserver, Canvas, `requestAnimationFrame`) |
| Fonts | [Sora](https://fonts.google.com/specimen/Sora) and [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts |

## Project structure

```
portofolio/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
    ├── foto-profil.png / .webp        # hero portrait (transparent background)
    ├── foto-profil-sm.webp            # smaller portrait for phones
    ├── foto-profil-square.png / .webp # 1:1 upper-body photo (About section)
    ├── favicon-32.png
    ├── favicon-512.png                # 1:1 favicon
    └── apple-touch-icon.png
```

## Getting started

No installation is needed.

1. Download or clone this folder.
2. Open `index.html` in a browser.

To serve it locally instead, run a static server from the project folder, for example:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Customization

Most content is edited in one place.

**Contact details and roles** are at the top of `js/main.js`:

```js
const CONFIG = {
  email: "your.email@example.com",
  links: [
    { name: "LinkedIn",  url: "#", icon: "in" },
    { name: "GitHub",    url: "#", icon: "gh" },
    { name: "Instagram", url: "#", icon: "ig" }
  ],
  roles: ["Software Engineer", "ICT Mentor", "Web Application Developer", "GenAI Integrator"]
};
```

Replace `#` with the real profile URLs. A link set to `#` stays on the page, and a real URL opens in a new tab.

**Certifications** are in the `CERTS` array in `js/main.js`. Each item has a title, issuer, date, credential ID, skills, category, and badge color. Add or remove items freely. The filter buttons are created automatically from the categories.

**Projects** are written directly in the `#projects` section of `index.html`.

**Photos**
- Replace `assets/foto-profil.png` with a transparent-background PNG of the same name for the hero. Keep `foto-profil.webp` and `foto-profil-sm.webp` in sync if you want the optimized versions to match.
- The favicon files are square (1:1). Regenerate them from your photo if you change it.

**Colors** are CSS variables at the top of `css/style.css` (`--cyan`, `--teal`, `--bg`, and others).

## Contact form

The form opens the visitor's email app with the message pre-filled (`mailto:`), so it works on any static host without a server. For direct delivery without opening an email app, connect the form to a form service or a small backend.

## Deployment

It is a static site, so any static host works.

- **Shared hosting (for example InfinityFree):** upload the folder contents into `htdocs` (or into a subfolder such as `htdocs/portofolio`) and open the URL with a trailing slash. File and folder names are case-sensitive.
- **GitHub Pages or Netlify:** push the folder to a repository, or drag and drop it into Netlify.

After updating files, hard refresh the browser (Ctrl + F5) to clear cached copies.

## Browser support

Current versions of Chrome, Edge, Firefox, Safari, and Chrome on Android. `backdrop-filter` and CSS masks are used on desktop and fall back gracefully where unsupported.

## Author

**Faizal Richi Candra**
Software Engineer & ICT Mentor, Bojonegoro, Indonesia

I'm open to networking and collaboration in software engineering and technology education.

---

<div align="center">

© 2026 Faizal Richi Candra. All rights reserved.

</div>
