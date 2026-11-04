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
- **Commit locally after each change cycle. Push only when Icaro says so,** after he has reviewed the change on localhost.

## Where things live

```
_config.yml          site title/description, owner links, formspree_id (empty = email button only)
_data/videos.yml     featured videos, in display order. client:false shows a "Spec ad" tag. featured:true = in the first 9 on mobile
_data/clients.yml    logo wall: REAL clients only, never spec brands
_data/testimonials.yml  brand quotes, word for word. Never publish a sender's email address
index.html           all sections (hero, clients, work, trust, reviews, process, pets, photos, about, contact)
_includes/           head (SEO + og tags), nav, footer, socials, ph (placeholder box)
assets/css/main.css  all styles. Palette tokens at the top (from her Canva site)
assets/js/main.js    filter chips, "See all work" on mobile, one video playing at a time
assets/video/        MP4s. assets/img/posters/ = first-frame posters. assets/img/logos/ = client logos
og/og-default.html   source of assets/img/og-default.jpg (1200x630). Re-render with headless Chrome
```

## Rules

- Every `<video>` gets `controlsList="nodownload"`, `playsinline` and `preload="none"`.
- Convert videos to 720x1280 H.264, 8-bit yuv420p, `+faststart`. That's the same ffmpeg standard as icarobichir.com.
- **Spec pieces** (Ninja, Strava) are always tagged "Spec ad" and never appear on the logo wall. Built is left out entirely: it contains collagen, which conflicts with her vegetarian positioning. Abercrombie and Royal Canin were removed (old spec pieces), and so was Pelsbarn, because the brand holds the video rights (ads only). Pelsbarn stays on the logo wall, since it's still a real client.
- Her goal niche is wellness, nutrition and fitness, so the video grid shows those first and pet after.
- She trains every day (running, lifting, HIIT, StairMaster). Copy says "every day."
- Keep her brand separate from Icaro's (@icarobichir). No cross-links unless asked. Exception: her TikTok link is @shelftherapystudio, the couple account (Icaro's call, 2026-11-03), because she doesn't use @heyitsme.nanda.
- Decided 2026-11-03: booking stays as the email button (no form), the spec videos stay, the logo wall is text-only, and the copy claims (UX research, Sydney Mohni line) stay for now.
- Copy style: plain human language, no em dashes in new copy, no AI buzzwords.
