# Tulas International School (TIS) — Homepage Redesign

A modern, animated and responsive redesign concept for the Tulas International School homepage. The experience keeps a premium educational identity while adding strong conversion paths, micro-interactions and scroll-driven motion.

## 🚀 Live Demo
- **Live URL:** Add your Vercel / Netlify URL after deployment.
- **Repository:** Add your GitHub repository URL after pushing.

## 🛠️ Tech Stack
- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS + custom CSS variables
- **Animations:** Framer Motion + CSS transitions
- **Icons:** Lucide React
- **Deployment:** Vercel / Netlify / GitHub Pages

## ✨ Standout Features
1. **Custom Cursor** — Desktop-only cursor ring reacts to links and buttons; automatically hidden for coarse/touch pointers.
2. **Scroll-Triggered Reveals** — Section content enters with short, staggered Framer Motion reveals.
3. **Theme Switcher** — Light/dark theme toggle using CSS variables and React state.
4. **Scroll Progress Bar** — Spring-smoothed reading progress indicator fixed to the top of the page.
5. **Responsive Navigation** — Mobile menu with touch-friendly controls.
6. **Accessibility-minded motion** — Reduced-motion media query disables long transitions for users who prefer less motion.

## 📁 Component Architecture
```text
src/
├── components/
│   ├── ui/               # Buttons and section headings
│   ├── layout/           # Navbar and Footer
│   ├── sections/         # Hero, About, Academics, Life, Admissions
│   └── animation/        # Reveal, Cursor, Scroll Progress
├── hooks/                # Reusable media-query hook
├── data/                 # Navigation, stats, programme and experience data
└── styles/               # Global styles and design tokens
```

## 📦 Getting Started

### 1. Clone
```bash
git clone https://github.com/YOUR-USERNAME/tis-homepage-redesign.git
cd tis-homepage-redesign
```

### 2. Install
```bash
npm install
```

### 3. Run locally
```bash
npm run dev
```

Open `http://localhost:5173`.

### 4. Production check
```bash
npm run build
npm run preview
```

## 📱 Responsive Testing
Recommended viewport checks:
- Mobile: **375px**
- Tablet: **768px**
- Desktop: **1280px+**

## 🎨 Brand Identity
The redesign uses a premium editorial visual direction inspired by the school's international, experiential and future-focused positioning. Replace/add official TIS image assets and any exact approved copy before final client submission.

## ⚠️ Content / Asset Note
This project is a frontend redesign concept. Before production delivery, verify all school copy, photography, logos, contact details and brand colors against the official TIS brand guidelines and approved source content.

## Deployment
### Vercel
1. Push this repository to GitHub.
2. Import the repository into Vercel.
3. Framework preset: **Vite**.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.

No environment variables are required for this static frontend.
