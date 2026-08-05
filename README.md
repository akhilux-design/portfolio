# akhilux — portfolio

Static portfolio site. Every page is a single self-contained HTML file (fonts, images, scripts inlined) — no build step, no dependencies.

## Pages
- `index.html` — home
- `works.html` — all works
- `growcontech.html`, `servo.html`, `instants.html`, `skillswap.html` — case studies

## Host on GitHub Pages
1. Push the contents of this `site/` folder to the repo root (or a `docs/` folder).
2. Repo **Settings → Pages** → Source: your branch (`main`) → root (or `/docs`).
3. Live at `https://<username>.github.io/<repo>/` in ~1 min.

`.nojekyll` is included so Pages serves all files as-is.

## Updating
These files are generated. Edit the `*.dc.html` source in the design project, re-export, and replace the files here.
