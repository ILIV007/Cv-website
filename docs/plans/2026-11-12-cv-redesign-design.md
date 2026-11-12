# CV Redesign — Design Doc

Date: 2026-11-12
Repo: ILIV007/Cv-website (canonical host https://iliv007-cv.vercel.app)
Base: local clone `~/workspace/cv-website`, content already at v2.2 (links,
project refresh, README) — NOT yet committed.
Status: APPROVED by the user 2026-11-12 (approach A: static, modernized).
Built as v3.0 in this clone — NOT yet committed.

## Builder check (fresh-reader review, done before building)

- Q: which accent hues / how many? → Builder's call: 4 (Cosmic Blue
  default, Violet, Cyan, Emerald), grounded in the site's own timeline
  planet palette. No user question needed.
- Q: settings control form (gear vs inline)? → Builder's call: gear
  button in the top bar opening a small glass popover (keyboard
  accessible, Esc / click-outside to close).
- Q: section reorder? → Kept the existing order; no clearly better flow
  found. Flagged, not silently decided.
- No user-only questions remained: theme, content freeze, stack and
  settings were all specified. Nothing important left for the user.

## Build notes (v3.0, what the builder found)

- Three shadow tokens (`--shadow-lg`, `--shadow-glow`, `--star-glow`)
  were used but never defined — card hover shadows were silently
  absent. Defined in variables.css.
- `vercel.json` did not exist in the clone although the v2.2 README
  documented it. Created (mirrors `_headers`).
- Contrast verified numerically: all body/label text 6.01–18.00:1;
  white text on light accent primaries FAILED (1.74–2.72:1), so all
  text-bearing accent surfaces now use AA-safe dark/deep variants
  (`--primary-dark`/`--primary-deep`, all ≥ 4.53:1).
- Footer version was still v2.1 — bumped to v3.0 with the rest.

## Intent and why

The CV site's UI/UX is outdated. Full rebuild: new layout, modernized
design system, new settings. The site is Iliya's public CV/portfolio —
visitors are potential collaborators/employers and his Telegram community.
It must look current and feel polished, in both English and Persian.

## Goals

- Modern layout: new section order and flow, clearer hierarchy, better
  use of space on desktop and mobile.
- Modernized cosmic design system: design tokens (color, type scale with
  `clamp()`, spacing), consistent components, tasteful motion.
- New settings: a small settings control — accent-hue choice (a few cosmic
  hues), layout density (comfortable/compact), motion on/off — persisted in
  `localStorage`, defaulting to current behaviour.
- Accessibility: WCAG AA contrast throughout (verify numerically, don't
  assume), keyboard navigation, `prefers-reduced-motion` respected.
- Performance: keep the site dependency-free and fast (no framework, no
  build step, no heavy assets).
- RTL correctness: every layout change must work mirrored in Persian.
- SEO/meta preserved: canonical + OG + JSON-LD + sitemap + robots all keep
  pointing at `iliv007-cv.vercel.app`; `vercel.json` security headers stay.
- Version bump to **v3.0** (full rebuild = major), cache-busting `?v=22`
  → `?v=30` on all CSS/JS/manifest links.

## Non-goals

- NO content changes: all text (EN + FA), projects, timeline, toolkit,
  contact details stay exactly as in v2.2.
- No framework or build step; no backend; no analytics.
- No new sections and no new projects.

## Anti-goals

- Losing the cosmic identity: dark stays the default theme (no light
  default; a light option is NOT in scope).
- Breaking EN/FA switching, the print stylesheet, the PWA manifest, or
  the custom 404 page.

## Constraints

- Static files only; deploys on Vercel from GitHub `main` (auto-deploy).
- Bilingual system stays: `data-en` / `data-fa` attributes + `js/i18n.js`.
- Current file layout stays (`css/` split, `js/` split, `assets/`).
- Work happens in the local clone; commit via GitHub API after the user
  reviews a live preview. No push/deploy without review.

## Approaches

- **A — Evolve the static site (PICKED by the user 2026-11-12):** same
  HTML/CSS/JS, no build step; layout + design system + settings rebuilt.
  Keeps the site light and the Vercel deploy unchanged; lowest risk.
- **B — Rebuild on a modern framework (e.g. Astro):** REJECTED — adds a
  build step and a bilingual-system migration for a single static page,
  with no meaningful gain for the visitor.
- **C — Full visual rebrand:** ruled out by the user's call to keep the
  dark cosmic theme.

## Decisions made by the user

- Keep the dark cosmic theme.
- Do not touch the content.
- Static, modernized (approach A), not a framework rebuild.

## My calls (proposals, not user decisions)

- Keep the section set (hero, about, timeline, toolkit, projects,
  contact) and their order unless the builder finds a clearly better flow
  — any reorder is flagged in the build report, not silently decided.
- Timeline keeps its planet/roadmap motif, refined (smaller dots, cleaner
  labels, better mobile collapse).
- Projects keep featured + compact cards; featured cards become a modern
  grid with consistent imagery/typography.
- Settings live in a small control in the nav (gear or inline segmented
  control), never a modal that blocks content.
- Motion: subtle starfield/gradient drift, disabled under
  `prefers-reduced-motion` or the motion toggle.

## What's left to the builder

- Exact palette/token values, final spacing and type measurements,
  implementation order, and the preview/verification pass (local serve +
  live browser checks: desktop + mobile, EN + FA, RTL, print, zero
  console errors, all links live).
- The builder must report: what changed per section, what was
  deliberately kept, and anything that could not be verified.

## Verification before ship

- Local serve + browser check of every section, both languages, mobile
  width, print view, reduced-motion.
- After commit: verify live at https://iliv007-cv.vercel.app (deploy lag
  expected; hard refresh if stale).
