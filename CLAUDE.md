# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal academic website for Lindia Tjuatja, built with Jekyll using the [al-folio](https://github.com/alshedivat/al-folio) theme. Hosted on GitHub Pages; pushes to `master` trigger a GitHub Actions deploy to the `gh-pages` branch.

## Development

```bash
bundle install          # install Ruby dependencies
bundle exec jekyll serve  # serve locally at http://localhost:4000
```

The `_site/` directory is the built output — never edit it directly.

## Content Structure

| What to edit | Where |
|---|---|
| Bio / homepage | `_pages/about.md` |
| Publications | `_bibliography/papers.bib` (BibTeX, with custom fields like `abbr`, `code`, `selected`) |
| News items | `_news/announcement_YYYY-M-D.md` |
| CV PDF | `assets/pdf/Lindia_Tjuatja_CV.pdf` |
| Projects | `_projects/*.md` |

**Publications page** (`_pages/publications.md`) renders from BibTeX via jekyll-scholar. The `years` list in the front matter controls which years appear. To add a paper, add a BibTeX entry to `_bibliography/papers.bib` and update `years` if needed.

**News** uses `inline: true` in front matter for short one-line items; omit it for longer posts with a full page.

## Key Config (`_config.yml`)

- `scholar.last_name` / `first_name` — controls name bolding in publication lists
- `news_limit` — number of news items shown on the homepage
- `enable_darkmode`, `enable_math`, `enable_mansory` — feature flags for UI behavior
- Social links (Twitter, Google Scholar, etc.) are set here and rendered via `_includes/social.html`

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) builds and pushes to `gh-pages` on every push to `master`. The `bin/deploy` script handles the branch management if deploying manually.
