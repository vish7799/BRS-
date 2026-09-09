# BRS Solution Enterprises — Corporate Website

Production corporate website for **BRS Solution Enterprises** — Electrical, Construction & Interior Solutions.

## Tech Stack

- React 18 + Vite
- JavaScript (JSX)
- Tailwind CSS 3
- React Router (HashRouter — works on any static host without rewrite rules)
- React Icons
- Framer Motion (subtle section reveals only)

## Getting Started

```bash
npm install
npm run dev      # local development
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Environment

Copy `.env.example` to `.env` and fill in the values:

```
VITE_WHATSAPP_NUMBER=91XXXXXXXXXX   # WhatsApp number, international format, no '+'
VITE_SITE_URL=https://example.com   # public production URL
```

> `VITE_` variables are embedded into the browser bundle — never store secrets here.
> `.env` is git-ignored; only commit `.env.example`.

## Pages

| Route        | Page                                    |
| ------------ | --------------------------------------- |
| `/`          | Home                                    |
| `/about`     | About (story, vision & mission)         |
| `/services`  | Services (electrical/construction/interior, deep-linkable anchors) |
| `/projects`  | Project portfolio with fullscreen lightbox |
| `/contact`   | Contact (phone, email, WhatsApp, address) |
| `*`          | 404                                     |

## Before Launch Checklist

- [ ] Replace placeholder phone number, email and address with final client details (`src/components/Footer.jsx`, `src/pages/Contact.jsx`, `.env`)
- [ ] Add project-specific photographs for Encalm Guest House, Sagar Ratna R Cube and Radon Future Vision (see `TODO` notes in `src/data/projects.js`)
- [ ] Update `robots.txt` sitemap URL with the production domain
- [ ] Optional: swap `HashRouter` for `BrowserRouter` in `src/main.jsx` and add an SPA fallback rewrite on the hosting provider
