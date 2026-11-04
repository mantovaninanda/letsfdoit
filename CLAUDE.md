# CLAUDE.md: fernandamantovani.com

Fernanda Mantovani's UGC portfolio. Icaro maintains it. Fernanda says what to change, and we make the change. One page, data-driven. The design matches her original Canva site (fernandamantovani.my.canva.site).

## Run it

- Ruby comes from rbenv, pinned to 3.2.2 (`.ruby-version`). Always run from this folder.
- **Build:** `/Users/icaro/.rbenv/shims/bundle exec jekyll build --config _config.yml,_config_dev.yml`
- **Serve:** `/Users/icaro/.rbenv/shims/bundle exec jekyll serve --watch --config _config.yml,_config_dev.yml --port 4322` → http://localhost:4322
  - The port is 4322, so it doesn't clash with icarobichir.com on 4321.
  - `_config_dev.yml` points `url` at localhost, so `absolute_url` links (the og:image) resolve locally.
- The Gemfile uses the `github-pages` gem, so local builds run the same Jekyll (3.10) and plugins that GitHub Pages runs in production.

## Deploy

- The repo is `mantovaninanda/letsfdoit`, branch **`gh-pages`**, which GitHub Pages builds on push. `CNAME` = fernandamantovani.com. **Never delete `CNAME`.**
- DNS is on Cloudflare. The 4 GitHub A records are Proxied, there's no www record, SSL is Full, and Always Use HTTPS is on.
- **Work on a feature branch and open a PR into `gh-pages`.** `gh-pages` is the live branch, so merging the PR deploys. The current branch is `portfolio-site` (PR #1: https://github.com/mantovaninanda/letsfdoit/pull/1).
- **Commit locally after each change cycle. Push or update the PR only when Icaro says so,** after he has reviewed the change on localhost.
- Commit as `Icaro Bichir <icbichir1+claude@gmail.com>`, with no Claude attribution trailers.
- `gh` on this Mac: run `env -u GITHUB_TOKEN gh …`. An invalid `GITHUB_TOKEN` env var overrides the working keyring login (IcaroBichir, which has WRITE on the repo).
- `_config.yml` changes need a server restart. Other edits hot-reload. If the browser shows the old page, hard-refresh with ⌘⇧R.

## Where things live

```
_config.yml          site title/description, owner links, formspree_id (empty = email button only)
_data/videos.yml     ONE card per brand, in display order (wellness first). Source = youtube: ID | tiktok: ID | instagram: URL | file: MP4 (first set wins, none = placeholder).
                     client:false = "Spec ad" tag. featured:true = in the first 9 on mobile. brand_posted:true = "Posted by <brand> on their account" note
_data/clients.yml    logo wall: REAL clients only, never spec brands
_data/testimonials.yml  brand quotes, word for word. Never publish a sender's email address
_data/brc.yml        Brasil Run Club highlight (title, stats, BRC email). Shown as a hero badge + the green #brc section (between UGC Photography and About)
index.html           all sections (hero, clients, work, trust, reviews, process, pets, photos, about, contact)
_includes/           head (SEO + og tags), nav, footer, socials, ph (placeholder box)
assets/css/main.css  all styles. Palette tokens at the top (from her Canva site)
assets/js/main.js    filter chips, "See all work" on mobile, one video playing at a time
assets/video/        MP4s. assets/img/posters/ = first-frame posters. assets/img/logos/ = client logos
og/og-default.html   source of assets/img/og-default.jpg (1200x630). Re-render with headless Chrome
```

## Video embeds (decided 2026-11-03)

- Fernanda doesn't want downloadable files in the repo, so **don't add MP4s** unless she changes her mind. **YouTube Unlisted** is the likely host (Icaro is discussing it with her).
- **TikTok:** public videos only. "Ads only" videos show "Video currently unavailable" in embeds (tested). Uses the `tiktok.com/player/v1/<id>` iframe.
- **Instagram:** public posts/reels via the `instagram-media` blockquote plus `embed.js`, loaded only when a video uses it. IG adds its own header and comments box, so those cards are taller. Accepted for now.
- One video per brand. Dropped alternatives are listed at the bottom of `videos.yml` with the reason.

## Rules

- Every `<video>` gets `controlsList="nodownload"`, `playsinline` and `preload="none"`.
- Convert videos to 720x1280 H.264, 8-bit yuv420p, `+faststart`. That's the same ffmpeg standard as icarobichir.com.
- **Spec pieces** (Ninja, Strava) are always tagged "Spec ad" and never appear on the logo wall. Built is left out entirely: it contains collagen, which conflicts with her vegetarian positioning. Abercrombie and Royal Canin were removed (old spec pieces), and so was Pelsbarn, because the brand holds the video rights (ads only). Pelsbarn stays on the logo wall, since it's still a real client.
- Her goal niche is wellness, nutrition and fitness, so the video grid shows those first and pet after.
- She trains every day (running, lifting, HIIT, StairMaster). Copy says "every day."
- Keep her brand separate from Icaro's (@icarobichir). No cross-links unless asked. Exception: her TikTok link is @shelftherapystudio, the couple account (Icaro's call, 2026-11-03), because she doesn't use @heyitsme.nanda.
- Decided 2026-11-03: booking stays as the email button (no form), the spec videos stay, the logo wall is text-only, and the copy claims (UX research, Sydney Mohni line) stay for now.
- Copy style: plain human language, no em dashes in new copy, no AI buzzwords.
- **BRC section** (`#brc`, between UGC Photography and About) plus the hero badge. Colors: deep green `#082a1c` → `#0d3a27` and **muted gold `#c9a43e`**. Fernanda asked for darker green and less bright yellow, so don't brighten them. Links: brasilrunclub.com • @brasilrunclub • @brasilrunclubmiami, plus a Partner with BRC mailto.
- Logo wall: text names with blush dot separators. A script hides the dot at the end of each wrapped line.
- Removed at Fernanda's request: Pelsbarn's video (the brand holds the rights; Pelsbarn stays on the logo wall), Abercrombie and Royal Canin (old spec pieces). Built is out (collagen). Testimonial bubbles have no arrows.

## Status (end of 2026-11-03)

- PR #1 is open with everything pushed. It's **not merged**, so production still shows the old placeholder.
- Still to fill: the intro reel, all photos (headshot, about, pets, UGC photos), and the videos for Calmamix, BeeFree, Authen, Pirani, Strava, Ninja, Vidge and King Kanine.
- Confirm the BRC stats with Fernanda (`_data/brc.yml`: 6,000+ members, 250+ runners per event are August figures).
- Copy claims ("UX research", the Sydney Mohni line) stay for now. To discuss with her later.
