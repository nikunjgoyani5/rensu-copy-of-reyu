# Rensu (Copy of Reyu)

Frontend marketing and catalog UI for a lab-grown diamond jewelry brand (Reyu Jewels branding in components).

This repository contains only the Next.js client under `client/`. There is no backend in this repo.

Repository: `https://github.com/nikunjgoyani5/rensu-copy-of-reyu.git`

For architecture, pages, limitations, and operational notes, see `TECHNICAL_HANDOVER.md`.

## Quick start

```bash
cd client
npm install
npm run dev
```

Open `http://localhost:3000` (Next.js default dev port).

## Structure

| Path | Purpose |
|------|---------|
| `client/` | Next.js 16 App Router frontend |
| `client/src/app/` | Routes (`/`, `/home`, `/products`) |
| `client/src/components/` | Layout, landing sections, product UI |
| `client/public/images/` | SVG shape and style icons |

## Documentation

- `TECHNICAL_HANDOVER.md` - full project handover
- `client/README.md` - client setup and commands
