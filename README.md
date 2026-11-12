# 🌀 ILIV007 Portfolio — v3.0

> **AI Automation Engineer | Computer Engineering Student**
> A cosmic-themed, bilingual portfolio showcasing AI systems, automation workflows, and experimental software.

🔗 **Live Demo**: [iliv007-cv](https://iliv007-cv.vercel.app)

---

## ✨ What's New in v3.0

- 🎨 **Full redesign, same cosmic soul** — dark cosmic theme kept and modernized: new sticky glass top bar (logo, section nav, language, settings), two-column hero with the orbit visual, left-aligned editorial section headers, featured projects as a 3-column grid with accent-tinted visual bands
- ⚙️ **Settings, persisted** — accent hue (Cosmic Blue / Violet / Cyan / Emerald), layout density (comfortable / compact) and motion on/off, saved in `localStorage`; motion defaults to the OS `prefers-reduced-motion` setting
- 🧩 **Design system rebuilt on tokens** — fluid `clamp()` type scale, section spacing token, accent-driven CSS variables (one hue re-tints the whole site); fixed three undefined shadow tokens (`--shadow-lg`, `--shadow-glow`, `--star-glow`) that had silently disabled card hover shadows
- ♿ **Accessibility verified** — text contrast re-checked numerically (all body text ≥ 5.9:1 on the dark background); 44px settings touch target; keyboard-accessible settings popover (Esc / click-outside to close)
- ⚡ **Cache-busting bumped** — all CSS/JS/manifest links `?v=22` → `?v=30`; `vercel.json` (security headers) now actually ships — it was documented in v2.2 but the file was missing

See [CHANGELOG](#-changelog) below for the full list.

---

## 🚀 Featured Projects

| Project | Description | Tech Stack |
|---------|-------------|-----------|
| **TradeAgent IV** | AI crypto market intelligence — flagship analysis, macro calendar, morning brief, top movers | JavaScript, Cloudflare Workers, Telegram API, AI/LLM |
| **IV \| AI** | AI assistant bot — smart comments and group replies, multi-model failover | JavaScript, Cloudflare Workers, Telegram API, AI/LLM |
| **Proxiv3** | MTProto proxy distribution bot with a verified proxy pool | Cloudflare Workers, Telegram Bot, MTProto |
| **prime-skill** | Curated public collection of 84 agent skills in 7 categories | Skills, Agents, Open Source |
| **ILIVIR3 HUB** | Tech command center — central portal for the ILIVIR3 bot ecosystem | TypeScript, React, Vite, Tailwind |
| **Donate** | Crypto donation page — BTC, BNB, USDT, TRX with QR codes | HTML, CSS, JavaScript |
| **This Portfolio** | Iterative conversational development, cosmic theme | HTML, CSS, JavaScript |

---

## 🛠️ Tech Stack

**Core:** Python · JavaScript · C++ · SQL · HTML/CSS
**AI & Automation:** OpenRouter · Cloudflare Workers · N8N · Telegram API · Prompt Engineering · Hugging Face
**Data & Infra:** SQL Server · SSMS · T-SQL · REST APIs · Docker · Vercel · Cloudflare Workers
**Tools:** Git · GitHub · VS Code · Google Colab · WordPress

---

## 🗂️ Project Structure (v3.0)

```
Cv-website/
├── index.html              # Main HTML (semantic, ~480 lines)
├── 404.html                # Custom "Lost in space" 404 page
├── css/
│   ├── variables.css       # Design tokens (colors, spacing, motion)
│   ├── base.css            # Reset, typography, body, a11y utilities
│   ├── components.css      # Buttons, cards, tags, switches, widgets
│   ├── sections.css        # Hero, about, timeline, projects, toolkit…
│   ├── animations.css      # Keyframes + motion utility classes
│   └── responsive.css      # Breakpoints, RTL, print, reduced-motion
├── js/
│   ├── i18n.js             # Bilingual switching + localStorage persistence
│   ├── settings.js         # v3.0 display settings (accent, density, motion)
│   ├── ui.js               # Stars, scroll reveal, progress bar, back-to-top, GitHub stars
│   └── main.js             # Entry point — wires everything on DOM ready
├── assets/
│   ├── favicon.svg         # SVG favicon with "IV" monogram
│   ├── og-cover.svg        # Open Graph / Twitter card image (1200×630)
│   └── manifest.json       # PWA web app manifest
├── _headers                # Cloudflare security + cache headers
├── _redirects              # 404 → custom page (Cloudflare)
├── vercel.json             # Security headers for the Vercel deployment
├── VERSION.txt             # Deployed version marker (v3.0)
├── robots.txt              # Crawler rules
├── sitemap.xml             # Sitemap
├── .gitignore
├── README.md               # This file
└── LICENSE                 # MIT
```

> 💡 Still dependency-free — no build step required. Just static files.

---

## 📦 How to Use

### 1. Clone the Repository
```bash
git clone https://github.com/ILIV007/iliv007-cv.git
cd iliv007-cv
```

### 2. Run Locally
Open `index.html` directly in your browser, **or** serve it for a more accurate environment:
```bash
# Python
python -m http.server 8000

# Node (npx)
npx serve .

# Bun
bunx serve .
```

### 3. Deploy to Vercel (Recommended — canonical host)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy (first run links the project; pushes to main auto-deploy)
vercel --prod
```

> `vercel.json` carries the security headers on Vercel. The `_headers` and `_redirects` files are kept for a Cloudflare Pages fallback deployment.

### 4. Customization
- **Content** — edit bilingual text via `data-en` / `data-fa` attributes in `index.html`
- **Theme** — tweak CSS variables in `css/variables.css`
- **Links & projects** — edit directly in `index.html`
- **OG image / favicon** — replace files in `assets/`

---

## 🌍 Language Switching

- **EN** — English (LTR)
- **FA** — Persian (RTL with Vazirmatn font)

The selected language is **persisted in `localStorage`** and restored on next visit. First-time visitors with a Persian browser get Persian automatically.

Switching updates: all text content, text direction (`ltr`/`rtl`), font stack, and component alignment.

---

## ♿ Accessibility

- ✅ Semantic HTML5 (`header`, `main`, `section`, `article`, `nav`, `footer`)
- ✅ Skip-to-content link
- ✅ Keyboard-navigable with visible focus rings
- ✅ `prefers-reduced-motion` respected (animations disabled on request)
- ✅ ARIA labels on interactive controls; decorative icons hidden
- ✅ Color contrast tuned for WCAG AA
- ✅ No-JS fallback (all content visible without JavaScript)

---

## 🛡️ Security & Performance

- **CSP**, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, HSTS via `_headers`
- Immutable cache for CSS/JS/assets (1 year)
- `preconnect` to both Google Fonts hosts
- `IntersectionObserver` with `unobserve` to free memory
- `requestAnimationFrame`-throttled scroll handlers

---

## 📋 Changelog

### v3.1.3 — original colours restored + topbar controls pinned right
- Colours back to the original v3.0 palette (user: the colour scheme goes back to how it was — anyone who wants a different theme can switch it in settings). Whole scheme reverted to the v3.0.3 state: dusty Cosmic Blue `#6BA4D4` family as the default accent, the original v3.0 values for Violet/Cyan/Emerald, near-black surfaces (`#0B1120` / `#111827`), subtle borders and the original glow strengths. The v3.1.0–v3.1.2 colour work is fully gone: no warm amber (`--warm` removed with every reference), no per-card band hues, no amber nebula or amber in the scroll bar, original timeline planet colours. The accent switcher in settings still works — it re-tints the site from the restored v3.0 accents.
- Topbar controls pinned to the physical right (user: they were still on the left in FA mode). Root cause: the v3.0.1 RTL conversion made the topbar flex row mirror, so in `dir="rtl"` the logo went right and the language/settings controls landed on the far left (on mobile the nav is hidden, so their `margin-inline-start: auto` pushed them all the way left). Fix: `direction: ltr` on `.topbar-inner` — the bar is a control surface, not prose, so its layout never mirrors now; logo stays left, controls stay right in both languages. Bonus: the settings popover (`inset-inline-end: 0`) now always means "right", so it opens right-aligned under the gear in both languages. The v3.1.2 sizing fix is kept (both controls exactly 44px, lang buttons fill the pill edge to edge).
- Kept, not reverted: the v3.1.2 project order (featured IVAI-bot / TradeAgent IV / Proxiv3; AI-admin + Fredy with no Source links at the front of compact; IVAI-App card), all v3.0.1–v3.0.3 layout/RTL fixes, and the v3.1.2 topbar sizing.
- Cache-busting `?v=35` → `?v=36`.

### v3.1.2 — paler blue + tidy topbar + pins as main projects
- Blue, paler still (user: #7C9CFF was better but still a bit loud): the live check showed the small periwinkle text accents were already luminous — the loud part was the SOLID blues (--primary-dark/-deep on the logo, avatar core, EN toggle and CTA). Whole scale re-tuned with the ui-ux-pro-max dark-mode rule (desaturated / lighter tonal variants, not inverted colours): --primary #ACBCF1 (HSL 226/72/81, contrast on card 8.89:1, Lab dE 25.3 from the Cyan accent — still clearly blue), --primary-light #C9D4F7, --primary-dark #4A6BD9 (white text 4.78:1), --primary-deep #3163D8 (white text 5.38:1); --accent-rgb 172 188 241. Every text/background pair re-verified WCAG AA.
- Topbar tidy (user's mobile screenshot): the language pill was ~40px vs the gear's 44px and the active button floated inside it — both controls are now exactly 44px tall, same radius/border/background, lang buttons fill the pill edge to edge; on ≤480px the gaps/paddings tighten (wordmark 14px, lang buttons 0 10px) while heights stay 44px for touch targets. Language switch and settings gear work exactly as before — no behaviour change.
- Main projects are now the pinned repos by quality (user: private projects showed a Source link nobody can open, and should not be main options). Featured, in pin order: IV|AI (IVAI-bot, pin 1), TradeAgent IV (pin 2), Proxiv3 (pin 3). AI-admin and Fredy lost their Source links (private repos), kept their Demo links, and moved to the front of the compact list. Compact order now: AI-admin, Fredy, prime-skill, ILIVIR3 HUB, Lyra, ARKEEN SERPENT, Donate, Warehouse DB, This Portfolio, IVAI-App (NEW card — public, pinned #5, was missing from the CV; Source only, no Demo since no public binary exists; tagline + honest 'in development' wording; hue sky), More Projects. No other project text or link changed.
- Cache-busting `?v=34` → `?v=35`.

### v3.1.1 — luminous blue revision + blue CTA restored
- User feedback on v3.1.0 live: the royal blue `#3B82F6` read as INK on the dark violet surfaces, and the yellow View Projects button was worse than the previous blue one. Both fixed.
- New blue (ui-ux-pro-max colour data + dark-mode rule: lighter tonal variants on dark backgrounds, not darker ones): Cosmic Blue is now a luminous periwinkle blue `#7C9CFF` (HSL 225/100/74, vs-card 6.38:1 vs 4.52:1 before) with `--primary-light`/`--accent` `#AAB8FF`, `--primary-dark` `#2563EB` (white text 5.17:1), `--primary-deep` `#1E50C8` (white 6.92:1) — every step lighter than its v3.1.0 counterpart. All text/background pairs re-verified WCAG AA.
- Distinct from Cyan: `#7C9CFF` sits at hue 225° (periwinkle blue), ΔE 35.1 from the Cyan accent `#38BDF8` (hue 198°) and ΔE 43.9 from Violet `#8B5CF6` — clearly a blue, not a cyan and not a violet. (The obvious alternative, Tailwind blue-400 `#60A5FA`, measured only ΔE 22.4 from cyan, so it was rejected.)
- View Projects CTA reverted to the v3.0 style: blue gradient (`--primary-dark` → `--primary-deep`), white text, blue glow — no yellow anywhere on the button. Everything else from v3.1.0 is kept: stepped violet surfaces, visible borders/glows, per-project band hues, and the subtle warm amber in the background (amber nebula + scroll-progress bar).
- Cache-busting `?v=33` → `?v=34`.

### v3.1.0 — "Vivid Cosmic" colour redesign (dark theme stays)
- Why: the v3.0 palette felt dead — dusty low-saturation blue `#6BA4D4`; near-black surfaces `#0B1120` vs `#111827` barely differed; borders at 0.10 alpha; glows at 0.12–0.16; vivid neons confined to the tiny orbit dots; zero warm colours, everything cold blue-slate.
- New surfaces (indigo-violet darks, stepped for depth): bg `#0D0B1E` → elevated `#151230` → card `#1C1940` → hover `#241F52`; cards are now clearly distinct from the page. Borders are indigo-tinted and visible (`rgba(165,180,252,0.22)`, strong `0.38`); glows lifted (`--accent-glow` 0.16→0.30, `--shadow-glow` 0.18→0.30); the orphaned `--star-glow` token was removed (its only use is now band-driven).
- Vivid default accent: Cosmic Blue is now royal blue `#3B82F6` / `#93C5FD` (was dusty `#6BA4D4`); all four accents re-tuned to the same vivid system (Violet `#8B5CF6`, Cyan `#38BDF8`, Emerald `#4ADE80`) — the settings switcher still re-tints the whole site. Text lifted slightly (`#EDF1F9` / `#B7C1D6` / `#9AA7BF`); every text/background pair re-verified WCAG AA (worst case: white on violet-dark 5.70:1; cyan/emerald keep their darker `-dark` tokens so white button text stays ≥5:1).
- Warm counterpoint (new `--warm` amber `#FBBF24`): the primary "View Projects" CTA is now an amber gradient with dark text (10.75:1); the second nebula glows warm amber; the scroll-progress bar runs blue → violet → amber.
- Atmosphere turned up: nebulae 0.05→0.12 opacity, grid overlay 0.018→0.045, hero halo 0.16→0.32, avatar glow 0.45→0.65, orbit rings 0.25→0.45, pills/tags/badges tinted 2× stronger, timeline road glow 0.35→0.55, stat numbers now in accent colour.
- Per-project colour identity: each of the 12 project cards carries its own band hue (`--band` on the article) — TradeAgent + Donate amber, AI-admin + ILIVIR3 HUB violet, Fredy + ARKEEN rose, IV|AI + Lyra sky, Proxiv3 + Warehouse emerald, prime-skill + This Portfolio blue. Featured cards tint their visual band + icon hover glow; compact cards get a coloured top edge.
- No layout, content, text or link changes — colours (and the glow strengths that serve them) only. `VERSION.txt` stays v3.0; cache-busting `?v=32` → `?v=33`.

### v3.0.3 — hero stats centred on stacked layout
- Iliya's screenshot (mobile, 23:47): the +12 / AI / 14 stats row hugged the left edge on the stacked hero, with dead space on the right — the numbers, centred over their wider labels, read as shoved to the side. Fix: `.quick-stats` is now `justify-content: center` below 1100px (whenever the hero stacks); the desktop two-column hero keeps `flex-start`, aligned with the text column. Each stat item was already `text-align: center` (number centred over its label) — unchanged.
- Cache-busting `?v=31` → `?v=32`.

### v3.0.2 — rgba() token fix (root cause of the invisible timeline road)
- The v3.0 accent-token conversion wrote `rgba(var(--accent-rgb), alpha)` in 53 places. That mixes the space-separated variable (`--accent-rgb: 110 164 212`) with the legacy comma alpha — invalid CSS, so browsers silently dropped every one of those declarations: the timeline road + glow, card borders, button glows, the grid overlay and the star glow were all missing (the road was the most visible casualty). Fixed by converting all 53 to the valid modern form `rgb(var(--accent-rgb) / alpha)` (and the same for `--accent-soft-rgb`).
- Cache-busting bumped `?v=30` → `?v=31` so the corrected CSS is unambiguously fresh (v3.0 and v3.0.1 shared `?v=30`).

### v3.0.1 — Layout & RTL fixes (no version bump — fix release)
- Projects re-sorted by professionalism: TradeAgent IV, AI-admin, Fredy, IVAI-bot, Proxiv3, prime-skill, ILIVIR3 HUB, Lyra, Arkeen Serpent, Donate (new card), Warehouse DB, This Portfolio; featured = first three
- Hero rebuilt for mid widths: stacks to one column below 1100px, no more 100dvh void, orbit visual enlarged (100px → 160px) and no longer scaled by transform
- Timeline rebuilt (flex + spacer architecture): 3px glowing road now clearly visible, dots structurally centred on their cards; tighter item spacing; mobile road uses logical `inset-inline-start`
- Featured grid: 3rd card becomes a wide horizontal card at 768–1023px instead of an orphaned cell; compact + featured cards now equal-height with links pinned to the bottom
- Also Worked With restructured as a horizontal band; GitHub card restructured as a horizontal band; Contact is 2×2 below desktop and 4-in-a-row on desktop
- Section spacing tightened (`--space-section` 4.5–6.5rem → 3–4.5rem, headers 48px → 36px)
- RTL fixes: mobile timeline road was on the physical left while nodes were on the right; work-header `row-reverse` double-reversed in RTL (removed); back-to-top / scroll-progress / skip-link now use logical properties; `letter-spacing` zeroed on all Persian-bearing elements (it disconnects the cursive joins)
- JS fixes: FA-browser auto-detection branch was dead code (`|| 'en'` made it unreachable); stars are now re-created when motion is toggled back on; anchored sections get `scroll-margin-top` so the fixed top bar no longer covers them
- Cleanup: deleted dead rules (`.card`, `.tk-tag` x3, `.badge-in-progress`, `.timeline-badge` in print); `minmax(min(...))` guards on edu/compact grids so narrow phones can't overflow

### v3.0 — Full redesign (dark cosmic, modernized)
- New sticky glass top bar with logo, section nav, language switcher and a settings popover (accent, density, motion — persisted in localStorage)
- Two-column hero (text + orbit visual), left-aligned section headers, featured projects as a 3-column grid with accent-tinted visual bands, fluid `clamp()` type scale
- Accent system: one hue token (`--accent-rgb`) re-tints buttons, glows, borders and gradients; 4 accents — Cosmic Blue (default), Violet, Cyan, Emerald
- Bug fixes: defined the missing `--shadow-lg` / `--shadow-glow` / `--star-glow` tokens (card hover shadows were silently absent); created the missing `vercel.json` the README already documented
- Contrast verified numerically (see v3.0 notes in the design doc); no content or link changes — v2.2 text and URLs untouched
- Cache-busting `?v=22` → `?v=30`

### v2.2 — Vercel move + project refresh
- Canonical host moved from `iliv007-cv.pages.dev` to `iliv007-cv.vercel.app` (canonical, OG, JSON-LD, sitemap, robots); repo homepage updated; `vercel.json` added with the security headers (`_headers`/`_redirects` kept for Cloudflare Pages fallback)
- Project cards refreshed to Nov 2026: TradeAgent IV (v6, no more "Emotion Engine"), Fredy (v14, Creator / APOD / arXiv), IVAI-bot (v3.7.9), AI-admin (v3.5.0); Proxiv3 + prime-skill added; Hades Army (repo private) and XO Game (repo deleted) removed; Warehouse DB → Store-Management-SQL and This Portfolio → Cv-website source links fixed
- Cache-busting `?v=21` → `?v=22` on all CSS/JS/manifest links

### v2.0.10 — Minimal Neon Roadmap
**Timeline redesigned for elegance**
- Planets reduced from 80px → 16px — now small neon dots, not huge orbs
- Removed all text from inside the planets; the year is now a mono label on the card (`timeline-date`)
- Cards sit snug beside the dots with just 4px margin
- Neon palette tuned to be cohesive with the dark blue site: 2022 blue, 2023 cyan, 2024 green, 2025 gold, 2026 violet
- Each planet has a soft multi-layer glow (8px + 18px + 30px) instead of harsh shadows
- Subtle outer halo ring (30% opacity) for depth
- 2026 Roadmap dot gently pulses (2.5s animation) to mark it as the destination
- Cards have minimal padding (14px 18px) and clean typography
- Cache-busting bumped from `?v=209` → `?v=2010`

### v2.1.0 — Cache-Busting Fix
**Root cause found and fixed**
- The old `_headers` file had two `Cache-Control` rules that stacked: `max-age=3600` (from `/*`) AND `max-age=31536000, immutable` (from `/css/*`). Cloudflare Pages merged them, causing CSS/JS to be cached for **a full year** as immutable. Browsers never re-requested the files, so even after deploying v2.0.9, users kept seeing the old v2.0.4 styles from their browser cache.
- Fix 1: removed the `Cache-Control` rules from `_headers` entirely — now only security headers are set, and Cloudflare uses sensible defaults.
- Fix 2: added `?v=209` query strings to all CSS/JS/manifest links in `index.html`. This is the standard cache-busting technique — a different URL forces the browser to fetch the new file regardless of any cached version.
- Verified live: the site at `iliv007-cv.pages.dev` was already serving v2.0.9 correctly (confirmed via curl + Agent Browser), but users' browsers were showing stale cached CSS.

### v2.0.9 — Definitive Favicon Fix
- Replaced the manifest icon `src` with an **inline data URI** (the 🌀 emoji as a base SVG embedded directly in `manifest.json`). This eliminates any file-path resolution issues — there is no file reference at all, so the 404 is impossible.
- Added `VERSION.txt` at the site root. Visit `https://iliv007-cv.pages.dev/VERSION.txt` to confirm the deployed version. It should read `v2.0.9`.
- Note: if you still see old content or the favicon error, your Cloudflare Pages site has not redeployed. Push these files to GitHub to trigger a new deployment.

### v2.0.8 — Roadmap Timeline & Toolkit Restore
**Timeline — true roadmap design**
- Replaced the single-column layout with a **zigzag**: cards alternate left/right around a central vertical road
- Uses a 3-column CSS grid (`1fr 110px 1fr`) — grid columns flow with `direction`, so the zigzag mirrors automatically in RTL with zero extra code
- The road has a thick gradient path (blue → violet) with dashed white center markings
- Each of the 5 milestones has a **uniquely colored planet**: 2022 blue, 2023 cyan, 2024 green, 2025 gold, 2026 violet (destination)
- Planets pulse and scale up when scrolled into view
- 2026 "Roadmap" milestone is a special violet destination star with a dashed orbital ring
- Mobile (≤720px): collapses to single-column with road on the left

**Toolkit — restored to v2.0.1 layout**
- Reverted to the original 12-column bento grid
- AI Systems: `span 7` × `span 2 rows` (large hero card)
- Engineering Core & Cloud: `span 5` each (stacked beside AI)
- Hardware & Workflow: `span 6` each (row below)
- Also Worked With: `span 12` (full width, bottom)
- Restored `tk-span-5`, `tk-span-6`, `tk-span-12` classes in HTML and CSS
- Mobile collapses all to single column

**Code audit**
- Verified all file paths in `index.html` resolve correctly
- Confirmed no orphaned class references (`tk-wide`, `tk-group-2`, `timeline-body`, `timeline-date` all removed)
- All 12 referenced files exist (6 CSS, 3 JS, 3 assets)
- Zero console errors in both LTR and RTL
- Print stylesheet updated for the new timeline structure
- Codebase is clean and ready for adding new content (projects, skills, timeline entries)

### v2.0.7 — Manifest Icon Fix
- Fixed the PWA manifest icon path: `assets/favicon.svg` → `/assets/favicon.svg` (root-absolute). The relative path was resolving to `/assets/assets/favicon.svg` (404) because the manifest itself lives in `/assets/`.
- Updated `assets/favicon.svg` to render the 🌀 emoji, matching the browser tab icon.

### v2.0.6 — Quality & Natural Persian
**Toolkit — bento layout restored**
- Replaced the flat auto-fit grid with a proper 3-column bento: AI Systems spans 2 cols (wide hero), Engineering/Cloud/Hardware/Workflow as single cards, Also Worked With spans 3 (full width)
- Added tablet breakpoint (2-column at 769–980px, AI and Also-Worked-With span 2)
- Mobile collapses to single column

**Timeline — bigger planets**
- Orb size increased from 56px → 76px (88px node), stronger glow halos
- Mobile orbs: 50px → 62px (72px node)

**Persian — complete rewrite**
- Rewrote all 34 `data-fa` strings in natural, idiomatic Persian
- Fixed the "ابهماشی" typo (was meant to be "ابزارهایی")
- Replaced clunky translation-style phrasings with natural speech (e.g. "متفاوت ساخته‌شده" → "ساختن در ذاتمه", "فناوری‌هایی که در سطح آشنایی کاوش کرده‌ام" → "فناوری‌هایی که باهاشون آشناام")
- Consistent tone: professional but personal, mixing formal headings with natural spoken-style descriptions

### v2.0.5 — Cosmic Journey Timeline
**Timeline redesigned as a cosmic journey**
- Each milestone is now a **glowing planet orb** with a radial-gradient surface, inner shadow for depth, and the year (e.g. `'22`) on its surface
- Each orb has a **rotating orbital ring** with a small moon dot that circles the planet (14s rotation)
- The connecting line is a **gradient energy beam** (blue → violet) with a **comet** that travels down it on a 7s loop
- **Scroll-activated**: each planet scales up and brightens (via a second IntersectionObserver) when scrolled into view
- The 2026 roadmap milestone is a **violet planet** with a dashed orbital ring and a `Roadmap` badge
- Cards are **glassmorphic** with a gradient top accent line
- Mobile (≤600px): orbs slide to the start edge, cards sit beside them in a horizontal row — works in both LTR and RTL
- Print stylesheet updated to hide the orbs/rings/comet and show clean cards

### v2.0.4 — Stability & Simplicity
**Toolkit — bulletproof grid**
- Replaced the fragile span-based bento grid with a simple `repeat(auto-fit, minmax(280px, 1fr))` grid
- All 6 cards are now equal size, arranged 3×2 on desktop, 1 column on mobile
- Removed all `tk-span-*` classes — no more layout edge cases

**GitHub stars**
- Default value is now `0` (a number), not the `★` symbol
- Fallback on API failure also shows `0`

**404 page — fast & simple**
- Removed the 3D canvas galaxy (was heavy and slow to load)
- Replaced with a pure CSS starry background (instant load, zero JS)
- Same cosmic theme, same messaging, fraction of the weight
- Deleted `js/galaxy.js`

### v2.0.3 — Layout & Robustness
**Timeline — complete redesign**
- Replaced the vertical-line + dot timeline (which broke in RTL) with a clean table-style row layout: date column + content column, separated by subtle borders
- Uses CSS Grid with `grid-template-columns: 100px 1fr` — automatically mirrors in RTL via logical properties
- On mobile (<560px), the date stacks above the content

**Toolkit — simplified grid**
- Replaced the fragile 12-column grid with a clean 3-column bento grid
- AI Systems spans 2 columns (wide), three cards fill row 2 (1 col each), Also Worked With spans 3 (full width)
- Added tablet breakpoint (2-column at 769–980px)

**GitHub stars**
- Replaced the "+3 Years Coding" stat with live GitHub star count
- Fetches `https://api.github.com/users/ILIV007/repos?per_page=100` and sums `stargazers_count`
- Falls back to ★ symbol if rate-limited (60 req/hour for unauthenticated)
- CSP updated to allow `connect-src https://api.github.com`

**404 page — CSP fix**
- Moved the 3D galaxy script from inline to external `js/galaxy.js`
- This fixes the galaxy not rendering when deployed to Cloudflare Pages (the global CSP blocks inline scripts)
- Removed the per-page CSP override for `/404.html` — no longer needed

**UI polish (openclaw.ai-inspired)**
- Tighter card padding, cleaner hover states
- Mono font for stack labels and timeline dates
- More minimal shadows

### v2.0.2 — Polish & 3D Galaxy
**Critical fixes**
- Fixed Persian (RTL) timeline overflow — rebuilt as single-column with `inset-inline-start` logical properties so it mirrors correctly in both LTR and RTL
- Moved the Evolution/Timeline section to below Projects for better narrative flow

**Content & copywriting**
- Complete professional rewrite of all English and Persian text (consistent formal Persian, correct spelling, direct tone inspired by modern AI product sites)
- Deduplicated the Systems & Technologies section — removed repeated entries (e.g. Telegram API appeared twice); each card now has distinct, accurate content
- Added short narrative lines under each toolkit card
- Relabeled the 2026 timeline entry as "Roadmap"

**404 page — 3D galaxy**
- Replaced the simple 404 with a real-time Canvas spiral galaxy: 6,000+ stars in 4 spiral arms, colored nebula clouds, a bright glowing core, differential rotation, and mouse-driven 3D tilt
- Additive blending + motion-blur trails for a luminous, cinematic look
- Respects `prefers-reduced-motion`
- CSP relaxed for `/404.html` to allow the self-contained inline script

**UI**
- Restored the 🌀 emoji favicon (replaces the SVG monogram)
- Footer version bumped to v2.0.2

### v2.0.1 — Rebuild
**Critical fixes**
- Fixed missing OG image & `.gitignore` (BUG-01)
- No-JS fallback: reveal content always visible without JS (BUG-02)
- Language preference persisted in `localStorage` (BUG-03)
- Toolkit grid rebuilt to fill 12 columns with zero gaps (BUG-04)
- Removed "0 GitHub Stars" stat; replaced with "3+ Years Coding" (BUG-05)

**Accessibility**
- `prefers-reduced-motion` support (A11Y-01)
- Skip-to-content link (A11Y-02)
- Focus management on anchor navigation (A11Y-03)
- Brighter `--text-muted` / `--text-dim` for WCAG AA (A11Y-04)
- ARIA labels on language buttons, `aria-hidden` on decorative SVGs (A11Y-05)
- Removed inline `onclick`; uses `addEventListener` (A11Y-06)

**Performance**
- `preconnect` to `fonts.gstatic.com` (PERF-01)
- Immutable cache headers for static assets (PERF-02)
- `IntersectionObserver` now `unobserve`s after reveal (PERF-03)

**SEO**
- JSON-LD `Person` structured data (SEO-01)
- Canonical URL (SEO-02)
- `robots.txt` + `sitemap.xml` (SEO-03)
- All OG/Twitter meta consistent

**Security**
- Full `_headers` config (CSP, HSTS, X-Frame-Options, etc.) (SEC-01)
- Custom 404 page via `_redirects` (SEC-02)

**Code quality**
- Email unified to `iliv007@proton.me` everywhere (CODE-02)
- Print stylesheet added (CODE-03)
- PWA `manifest.json` (CODE-04)
- 2026 timeline entry relabeled as "Roadmap" (CODE-05)
- Inline styles removed; moved to classes (CODE-01)

**New UI**
- Scroll progress indicator (top)
- Back-to-top floating button
- Refined color palette + violet accent
- Subtle hero entrance animations
- Sticky footer that never floats

### v1.0.0 — Initial release
- Single-file `index.html` portfolio, cosmic theme, bilingual EN/FA

---

## 🤝 Contributing

Contributions, suggestions, and bug reports are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 📬 Contact

- **Telegram**: [@iliv007](https://t.me/iliv007)
- **Channel**: [t.me/ILIVIR3](https://t.me/ILIVIR3)
- **Email**: [iliv007@proton.me](mailto:iliv007@proton.me)
- **GitHub**: [@ILIV007](https://github.com/ILIV007)

---

> *"Built with curiosity, caffeine, and countless iterations."* ☕🚀
