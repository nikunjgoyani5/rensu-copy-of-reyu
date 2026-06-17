# Rensu (Copy of Reyu) - Technical Handover

Prepared from repository evidence in `rensu-copy-of-reyu` on branch `main`.

Evidence policy used:
- **Verified from repository**: explicit in source, config, or files in this checkout
- **Inferred from code**: derived from implementation behavior
- **Not Found in Repository**: no verifiable evidence in this checkout

---

# Project Overview

## Purpose of the application

- **Verified from repository**: Static/marketing Next.js frontend for a lab-grown diamond jewelry brand.
- **Verified from repository**: Landing page with collections, shapes, ring styles, lab-grown content, customization, testimonials, and contact footer.
- **Verified from repository**: Product listing page with filter sidebar UI and mock product grid (`/products`).
- **Inferred from code**: UI branding references "Reyu Jewels" in logo alt text and footer (`Navbar.tsx`, `Footer.tsx`). Repository name is `rensu-copy-of-reyu`; products page metadata uses "Rensu" (`products/page.tsx`).

## Main user types

| User | Description | Evidence |
|------|-------------|----------|
| Site visitor | Browses marketing content and product catalog UI | No auth in this repository |
| Developer | Maintains static frontend pages and components | Repository structure |

There is no authentication, admin panel, or user account system in this repository.

## Major modules/features

| Feature | Route / location | Status |
|---------|------------------|--------|
| Home landing page | `/` via `src/app/page.tsx` -> `src/app/home/page.tsx` | Verified |
| Hero, collections, shapes, rings, lab-grown sections | `src/components/sections/` | Verified |
| Navigation with mega-menu (desktop/mobile) | `src/components/layout/Navbar.tsx` | Verified |
| Footer with contact and social links | `src/components/layout/Footer.tsx` | Verified |
| Product catalog UI | `/products` (`src/app/products/page.tsx`) | Verified |
| Filter sidebar (metal, shape, color, price) | `src/components/products/FilterSidebar.tsx` | UI only |
| Product grid with mock data | `src/components/products/ProductGrid.tsx` | Static mock data |
| Category navigation | `src/components/products/CategoryNav.tsx` | Verified |

---

# Tech Stack

| Layer | Technology | Evidence |
|-------|------------|----------|
| Framework | Next.js 16.2.4 (App Router) | `client/package.json` |
| UI | React 19.2.4 | `client/package.json` |
| Language | TypeScript 5 | `client/package.json`, `tsconfig.json` |
| Styling | Tailwind CSS 4 | `client/package.json`, `globals.css`, `postcss.config.mjs` |
| Icons | lucide-react, react-icons | `client/package.json` |
| Fonts | Geist, Geist Mono, Inria Serif, Inter via `next/font/google` | `src/app/layout.tsx` |
| Images | `next/image` with local assets and Unsplash remote URLs | Components, `next.config.ts` |

## Backend / database

**Status: Not Found in Repository**

This checkout contains only `client/`. No API server, database, or backend module is present.

## Infrastructure

**Status: Not Found in Repository**

No Dockerfile, docker-compose, CI/CD workflows, or deployment scripts found.

---

# High-Level Architecture

## Application flow

```
Browser
   |
   v
Next.js App Router (client/)
   |
   +-- Server-rendered pages (/, /products)
   +-- Client components ("use client" in Navbar, filters, etc.)
   +-- Static assets (src/assets/, public/images/)
   +-- Remote images (images.unsplash.com for product mocks)
```

- **Verified from repository**: No `fetch`, Axios, or `NEXT_PUBLIC_*` API calls found in `client/src`.
- **Inferred from code**: All product and filter data is hardcoded in component files.

## Architecture diagram

```
+------------------+
|   Web Browser    |
+--------+---------+
         |
         v
+------------------+
|  Next.js (client)|
|  App Router      |
+--------+---------+
         |
    +----+----+
    |         |
    v         v
 Local     Unsplash
 assets    (remote)
```

## External integrations

| Integration | Purpose | Status |
|-------------|---------|--------|
| Unsplash CDN | Mock product images in `ProductGrid.tsx` | Verified (`next.config.ts` remotePatterns) |
| Backend API (e.g. Reyu Jewels) | Live product/auth data | Not Found in Repository |

Footer lists `info@reyujewels.com` and phone `+91 9898076868` (`Footer.tsx`). Social links use `href="#"` placeholders.

---

# Repository Structure

| Path | Purpose |
|------|---------|
| `client/` | Next.js application root |
| `client/src/app/` | App Router pages and root layout |
| `client/src/app/home/page.tsx` | Home page composition |
| `client/src/app/products/page.tsx` | Product catalog page |
| `client/src/components/layout/` | Navbar, Footer |
| `client/src/components/sections/` | Landing page sections |
| `client/src/components/products/` | Catalog UI components |
| `client/src/components/ui/` | Container, Section wrappers |
| `client/src/assets/` | Local images and icons (PNG) |
| `client/public/images/` | SVG icons for shapes and ring styles |
| `client/next.config.ts` | Next.js config (Unsplash image domains) |

---

# Environment Configuration

**Status: Not Found in Repository**

- No `.env.example` file
- `.gitignore` excludes `.env*` (`client/.gitignore`)
- No environment variables referenced in application source

No secrets are required to run the dev server locally beyond installing npm dependencies.

---

# Local Development Setup

## Prerequisites

- Node.js and npm (versions not pinned in `package.json`)

## Installation and run

```bash
cd client
npm install
npm run dev
```

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Development server (default port 3000) |
| `npm run build` | Production build |
| `npm start` | Serve production build |
| `npm run lint` | ESLint |

## Build output

**Inferred from code**: Standard Next.js `.next/` output directory (gitignored).

---

# Deployment Process

**Status: Not Found in Repository**

No hosting platform, CI/CD pipeline, or deployment configuration is defined in this repository.

`client/README.md` (prior template) referenced Vercel generically as a Next.js deployment option; no project-specific Vercel config (`.vercel`, `vercel.json`) is present in this checkout.

---

# External Integrations

## Unsplash (remote images)

- **Purpose**: Product card images in mock catalog
- **Files**: `client/src/components/products/ProductGrid.tsx`, `client/next.config.ts`
- **Notes**: `remotePatterns` allows `**.unsplash.com`

## Backend API

- **Status**: Not Found in Repository
- **Notes**: No API client, env-based API URL, or data-fetching layer exists in `client/src`. A future backend integration would require new env configuration and page/component data wiring.

---

# Critical Business Logic

## Product catalog

**Verified from repository**

- `ProductGrid.tsx` defines `mockProducts` array with 12 static items (names, prices, carat options, Unsplash image URLs).
- Filters in `FilterSidebar.tsx` update React state only; they do not filter `mockProducts`.
- Sort dropdown ("Most Relevant") is presentational with no sorting logic.

## Navigation

**Verified from repository**

- Navbar category links (`Rings`, `Bracelets`, etc.) use `href="#"` (`Navbar.tsx`).
- Logo links to `/`.
- No link from navbar to `/products` found in source.

## Products page layout

**Verified from repository**

- `/products` does not include `Navbar` or `Footer` (only `CategoryNav`, filters, grid, `ExploreCollection`).
- Home page (`/home/page.tsx`) includes full layout with Navbar and Footer.

## Branding inconsistency

**Verified from repository**

| Location | Text |
|----------|------|
| `layout.tsx` metadata | "Create Next App" (default template) |
| `products/page.tsx` metadata | "Solitaire Rings \| Rensu" |
| Navbar/Footer alt text | "Reyu Jewels" |
| Footer email | `info@reyujewels.com` |

---

# Scheduled Jobs

**Status: Not Found in Repository**

No cron jobs, background workers, or queue systems.

---

# Known Issues / Technical Debt

| Item | Detail | Status |
|------|--------|--------|
| No backend integration | Product data is mock/static | Verified |
| Filters non-functional | UI state only, no product filtering | Verified |
| Default root metadata | `layout.tsx` still uses create-next-app defaults | Verified |
| Brand name mismatch | Rensu vs Reyu Jewels across files | Verified |
| Products page incomplete shell | Missing Navbar/Footer on `/products` | Verified |
| Nav links are placeholders | Most links use `href="#"` | Verified |
| No `.env.example` | No documented env for future API hookup | Verified |
| No API layer | No backend or data-fetching in this repo | Verified |

---

# Operational Notes

| Topic | Status | Detail |
|-------|--------|--------|
| Branching | Verified | `main` branch; remote `origin/main` |
| Release process | Not Found in Repository | |
| Feature flags | Not Found in Repository | |
| Startup order | Verified | Single Next.js app; `cd client && npm run dev` |
| Agent docs | Verified | `client/AGENTS.md`, `client/CLAUDE.md` (pointer files) |

---

# Infrastructure Ownership

| Item | Status | Detail |
|------|--------|--------|
| Repository hosting | Verified | `https://github.com/nikunjgoyani5/rensu-copy-of-reyu.git` |
| Server hosting | Not Found in Repository | |
| DNS / CDN | Not Found in Repository | |
| Database | Not Found in Repository | |

---

# Handover Checklist

| Item | Status |
|------|--------|
| Source code available | Verified - `client/` present |
| Deployment process documented | Not Found in Repository |
| Environment variables documented | Not Found in Repository (none used) |
| Integrations documented | Verified - Unsplash only; no API |
| Known issues documented | Verified |
| Infrastructure documented | Partial - repository URL only |

---

# Quick reference

| Item | Value |
|------|-------|
| Dev command | `cd client && npm run dev` |
| Default port | `3000` |
| Home route | `/` |
| Products route | `/products` |
| Path alias | `@/*` -> `client/src/*` |
