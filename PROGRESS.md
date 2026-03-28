# Portfolio Website - Progress

## Project Setup
- Initialized Next.js 16 project with TypeScript, Tailwind CSS, and App Router
- Installed dependencies: `framer-motion`, `react-icons`, `next-themes`
- Set up dark-first theme with toggle (using `next-themes`)

## Architecture (Pluggable Data Layer)
All content is driven by JSON files in `src/data/` — no code changes needed to add content:

| File | Purpose |
|---|---|
| `personal.json` | Name, bio, social links, avatar, hourly rate |
| `experience.json` | Job roles, companies, dates, highlights |
| `reviews.json` | Client testimonials, ratings, platforms |
| `projects.json` | Portfolio projects with categories & tech stack |
| `skills.json` | Skill categories with proficiency levels |
| `services.json` | Service offerings with features |

## Sections Built
1. **Navbar** — Fixed, blur-on-scroll, mobile hamburger menu
2. **Hero** — Floating avatar with glow + bounce animation, gradient blobs, particle grid background, social links, CTAs
3. **About** — Bio text, language list, resume download, animated stats grid (Years, Projects, Clients, Languages)
4. **Services** — 4 service cards (Mobile, Web, UI/UX, API/Backend) with hover lift effect
5. **Experience** — Timeline layout with gradient line, tech badges
6. **Projects** — Filterable grid (All / Mobile App / Full Stack / Web App) with animated transitions
7. **Skills** — 5 category cards with animated progress bars
8. **Reviews** — Auto-playing carousel with navigation dots and arrows
9. **Contact** — Contact form + email/location cards + LinkedIn/Fiverr buttons
10. **Footer** — Copyright, social links

## Interactive / Wow Elements
- Scroll-triggered animations on every section (Framer Motion)
- Floating avatar with continuous up/down animation + 3D tilt on hover
- Animated gradient blobs in hero background
- Particle dot grid overlay
- Skill bars animate from 0 to value on scroll
- Project cards filter with layout animation
- Review carousel with autoplay (5s interval)
- Cards lift on hover
- Dark/light theme toggle
- Custom emerald gradient scrollbar
- Custom selection color
- Smooth scroll navigation
- Responsive across all breakpoints

## Color Palette
- **Changed from** blue/purple → **Emerald & Cyan** (`emerald-500`, `cyan-400`, `teal-500`)
- Applied across all components, scrollbar, and selection color

## Avatar Style
- **Changed from** circular framed avatar → **Floating card** with rounded corners, 3D tilt, glow, shadow, and "Available" badge

## TODO / Next Steps
- [ ] Add real avatar image at `public/avatar.png`
- [ ] Replace placeholder reviews with actual Fiverr reviews
- [ ] Add more experience entries from LinkedIn
- [ ] Replace placeholder projects with real portfolio work
- [ ] Add real project screenshots to `public/projects/`
- [ ] Update `personal.json` with real email
- [ ] Hook up contact form (Formspree / EmailJS)
- [ ] Add resume PDF at `public/resume.pdf`
- [ ] Deploy to Vercel
