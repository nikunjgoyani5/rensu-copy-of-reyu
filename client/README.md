# Rensu (Copy of Reyu) - Client

Next.js frontend for the Reyu Jewels marketing site and static product catalog UI.

For full project handover details, see `../TECHNICAL_HANDOVER.md`.

## Stack

- Next.js 16 (App Router)
- React 19, TypeScript
- Tailwind CSS 4
- Lucide React, React Icons

## Local setup

```bash
npm install
npm run dev
```

Dev server: `http://localhost:3000`

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm start` | Run production server |
| `npm run lint` | ESLint |

## Routes

| Route | Page |
|-------|------|
| `/` | Home (renders `src/app/home/page.tsx`) |
| `/products` | Solitaire rings catalog UI (mock data) |

## Environment

No `.env.example` is present in this repository. The app uses static/mock content and Unsplash image URLs configured in `next.config.ts`.

## Assets

Local images live under `src/assets/`. Remote product images use `images.unsplash.com` (allowed in `next.config.ts`).
