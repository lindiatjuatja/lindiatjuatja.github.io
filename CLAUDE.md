# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal academic website for Lindia Tjuatja, built with Next.js 15 (App Router), React 19, Tailwind CSS v4, and Motion, based on the [Nim](https://github.com/ibelick/nim) template. It is exported as a static site (`output: 'export'` in `next.config.mjs`) and hosted on GitHub Pages at https://lindiatjuatja.github.io.

## Development

```bash
npm install       # install dependencies
npm run dev       # serve locally at http://localhost:3000
npm run build     # static export to out/
```

`out/` and `.next/` are build output (gitignored) — never edit them directly. `.jekyll-cache/` is a leftover from the old Jekyll site and can be ignored.

## Content Structure

| What to edit | Where |
|---|---|
| Publications | `PUBLICATIONS` in `app/data.ts` |
| News items | `NEWS` in `app/data.ts` (`html` field is raw HTML; links use `target="_blank" rel="noopener noreferrer" class="underline"`) |
| Email, social links | `EMAIL`, `SOCIAL_LINKS` in `app/data.ts` |
| Bio / homepage | `app/page.tsx` |
| Publications page layout | `app/publications/page.tsx` (groups by `year` automatically) |
| FAQ | `app/faq/page.tsx` |
| Nav links | `NAV_LINKS` in `app/header.tsx` |
| Images / static files | `public/` (served from site root, e.g. `public/prof_pic.jpg` → `/prof_pic.jpg`) |

**Publications**: add an object to `PUBLICATIONS` with `title`, `authors`, `venue`, `year`, optional `link` / `code`, and a unique `id`. Entries are listed in array order within each year, newest first.

**CV**: `CV_URL` in `app/data.ts` points to `/Lindia_Tjuatja_CV.pdf`, but that file is not currently in `public/` and `CV_URL` is not rendered anywhere. Add the PDF to `public/` before linking it.

**Blog**: `app/blog/` still contains the template's example MDX posts (with placeholder links). They aren't linked from the nav but are still built and publicly reachable.

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) runs `npm ci && npm run build` and publishes `out/` to the `gh-pages` branch on every push to `master`.
