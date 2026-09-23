# IPC-A-600H · Academia interactiva de inspección de PCB

An interactive, self-study web app for learning visual inspection of printed
circuit boards against **IPC-A-600H** — 10 levels, lessons, figure galleries and
quizzes. The UI and all content are in Spanish.

Everything ships as **one HTML file**: the lessons (`src/data.js`) and all 145
figure crops (`src/images.js`, inlined as base64 data URIs) are baked into
`src/app.html` at build time. There are no external requests, no CDN, no fonts
and no build tooling beyond Python's standard library — so the page works from
any path, offline, and from `file://`.

## Enabling GitHub Pages

This repo publishes with **GitHub Actions** (recommended). Two one-time settings
are required:

1. **Settings → Pages → Build and deployment → Source** → choose
   **GitHub Actions**.
2. Confirm the workflow ran: **Actions → "Deploy to GitHub Pages"**. It triggers
   on every push to `main` and can also be started by hand with
   *Run workflow*.

The site is then live at:

```
https://ojperdomoc.github.io/normasIPC/
```

> The first run only happens after the branch containing
> `.github/workflows/deploy-pages.yml` is merged into `main`. Actions does not
> publish from other branches, so a pull request never overwrites the live site.

### Alternative: publish without a build step

If you would rather not use Actions, set **Settings → Pages → Source** to
**Deploy from a branch**, branch **`main`**, folder **`/ (root)`**.

The repository root already contains a tracked `index.html` that forwards to the
built `IPC-A-600H_Academia_Interactiva.html`, so the root URL works immediately
with nothing to compile. The tracked `.nojekyll` file tells Pages to serve the
files as they are instead of running a Jekyll build over the 3.2 MB page.

Note this publishes the whole repository, including the 64 MB of extraction
intermediates under `work/`; the Actions route publishes only the three files in
`dist/` and is the better choice. (Actions deploys never run Jekyll, so
`.nojekyll` only matters for this option.)

## Rebuilding

```bash
python3 build.py
```

| Output | Contents |
| --- | --- |
| `dist/index.html` | the full app — **this is what GitHub Pages serves** |
| `dist/IPC-A-600H_Academia_Interactiva.html` | redirect, keeps old bookmarks working |
| `dist/404.html` | redirect, sends any unknown URL back to the app |
| `./index.html` | redirect, for the "deploy from a branch" option above |
| `./IPC-A-600H_Academia_Interactiva.html` | the full app, standalone copy |

`dist/` is git-ignored — it is regenerated on every push by the workflow. The two
files in the repository root are tracked on purpose so the no-build option above
keeps working.

`build.py` refuses to publish a broken page: it fails if a placeholder was left
unsubstituted or if the output is under 1 MB (the real payload is ~3.2 MB).

### Editing content

| File | Purpose |
| --- | --- |
| `src/app.html` | page template, CSS and app logic; contains the `/*__DATA__*/` and `/*__IMAGES__*/` placeholders |
| `src/data.js` | levels, lessons and quiz questions — edit this to change teaching content |
| `src/images.js` | generated: `const FIG_IMG = { "<figure>": "data:image/jpeg;base64,…" }` |

After editing, run `python3 build.py` and commit the regenerated root
`IPC-A-600H_Academia_Interactiva.html`.

### Regenerating the figures

`work/` holds the one-off extraction pipeline that produced `src/images.js` from
the source PDF, plus 64 MB of intermediate crops. It is **not** needed to build
or serve the site and is never published.

- `work/extract.py` — locates figure captions in the PDF and crops each figure to
  `work/figs/`, writing the index `work/figs.json`.
- `work/build_imgs.py` — trims whitespace, downscales to 560 px, re-encodes as
  JPEG q74 and writes `src/images.js`.

Both scripts were written against a different directory layout (`uploads/*.pdf`,
`ipc600_app/src/…`) and need their paths adjusted before they can be re-run.

## Troubleshooting

| Symptom | Fix |
| --- | --- |
| `https://…/normasIPC/` returns 404 | Pages is not enabled — set **Settings → Pages → Source** to *GitHub Actions* (or *Deploy from a branch*). |
| Workflow fails at *Deploy to GitHub Pages* with 403/404 | **Settings → Pages → Source** is still *Deploy from a branch*; the two modes are mutually exclusive. |
| Page loads but is blank | The committed build is stale or truncated — re-run `python3 build.py` and commit. |
| Old link `…/IPC-A-600H_Academia_Interactiva.html` | Still valid; it forwards to the app. |
