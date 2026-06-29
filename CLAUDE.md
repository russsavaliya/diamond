# Cauer Lab Grown Diamonds — Project Context

## What This Is
A luxury B2B/B2C portfolio + e-commerce website for **Cauer Lab Grown Diamonds**, a premium CVD diamond manufacturer based in Surat, India. Built with React + Vite.

## Tech Stack
- **Framework:** React 19 + React Router DOM v7
- **Build Tool:** Vite 8
- **Styling:** Tailwind CSS v4 (utility classes only — no CSS modules)
- **Animations:** Framer Motion v12 (page transitions, scroll effects, floating elements)
- **Icons:** React Icons v5 (`react-icons/fa`, `react-icons/gi`, etc.)
- **Dev server:** `npm run dev` | **Build:** `npm run build`

## Project Structure
```
src/
├── App.jsx              # Root: routing, page transitions, CustomCursor, WhatsAppButton
├── main.jsx             # Entry point, BrowserRouter setup
├── index.css            # Global styles
├── components/          # Reusable UI
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Modal.jsx
│   ├── Loader.jsx       # 1.5s initial loading screen
│   ├── PageBanner.jsx
│   ├── AnimatedSection.jsx
│   ├── CountUp.jsx
│   └── Sparkles.jsx
├── pages/               # One file per route
│   ├── Home.jsx         # /
│   ├── About.jsx        # /about
│   ├── Diamonds.jsx     # /diamonds
│   ├── Jewellery.jsx    # /jewellery
│   ├── Process.jsx      # /process
│   ├── Gallery.jsx      # /gallery
│   ├── Contact.jsx      # /contact
│   └── NotFound.jsx     # /*
└── data/                # All static content — edit here, not in page files
    ├── siteData.js      # Company info, products, nav links, testimonials
    ├── images.js        # Centralized image paths/URLs
    └── fonts.js         # Font family names
public/images/           # Static assets (logo, diamonds, hero, team, factory)
```

## Key Patterns
- **All site content lives in `src/data/siteData.js`** — company name, phone, products, team, testimonials, etc. Always update data there, not hardcoded in components.
- **Page transitions** use `<AnimatePresence>` + `PageWrapper` in App.jsx. New pages should be added as routes there.
- **Framer Motion** is used everywhere for animations — prefer `motion.*` elements over plain ones when adding animated UI.
- **No CSS modules** — use Tailwind classes only.
- **Images** are referenced via `src/data/images.js` — add new image paths there.

## Company Info (from siteData.js)
- **Company:** Cauer Lab Grown Diamonds
- **Tagline:** Beyond Your Choice
- **Location:** Surat, Gujarat, India
- **Phone:** +91 99999 55555 *(placeholder — replace with real number for production)*
- **Email:** info@cauer.com
- **Hours:** Mon–Sat, 9:30 AM – 6:30 PM

## Existing Global UI Elements (App.jsx)
- `<Loader>` — 1.5s splash screen on first load
- `<CustomCursor>` — custom cursor on desktop (hidden on mobile)
- `<Navbar>` / `<Footer>` — always visible
- `<WhatsAppButton>` — fixed bottom-right floating button, links to `wa.me` with pre-filled message

## Styling Theme
- **Fonts:** Cinzel (headings), Raleway (body), Cormorant Garamond (accent) — loaded via Google Fonts in `index.html`
- **Color palette** (Tailwind custom classes):
  - `diamond-black` → white (#ffffff)
  - `diamond-blue` → gray (#555555)
  - `diamond-silver` → dark (#1a1a1a)
  - `diamond-gold` → black (#000000)
  - `diamond-violet` → dark gray (#333333)
- **Custom animations:** `shimmer`, `spin-slow`, `float`, `glow-pulse`, `spin-reverse`

## NPM Scripts
```bash
npm run dev      # Start dev server with HMR
npm run build    # Production build → /dist
npm run preview  # Preview production build
npm run lint     # ESLint check
```
