#!/usr/bin/env python3
"""Build the IPC-A-600H interactive academy for GitHub Pages.

The app is a single self-contained HTML page. ``src/app.html`` is a template with
two placeholders that get replaced by the generated JavaScript payloads:

    /*__DATA__*/    <- src/data.js    (levels, lessons, quizzes)
    /*__IMAGES__*/  <- src/images.js  (figure crops inlined as base64 data URIs)

Because every figure is inlined as a data URI, the built page makes no external
requests and does not care what path it is served from. That matters for GitHub
Pages, which serves project sites from a sub-path such as
``https://<user>.github.io/normasIPC/``.

Outputs
-------
dist/index.html                              full app  -> what GitHub Pages serves
dist/IPC_610.html                            IPC-A-610 trainer (copied verbatim)
dist/IPC-A-600H_Academia_Interactiva.html    redirect  -> keeps old bookmarks alive
dist/404.html                                redirect  -> sends stray URLs to the app
./index.html                                 redirect  -> for "deploy from a branch"
./IPC-A-600H_Academia_Interactiva.html       full app  -> legacy standalone copy

``IPC_610.html`` is a second, self-contained trainer (IPC-A-610, electronic
assemblies) kept as a plain tracked file in the repository root. Both pages
carry a "Normas" tab strip in their header that links to each other with
relative URLs, so it must be shipped next to ``index.html`` in ``dist/``.

``dist/`` is the artifact uploaded by .github/workflows/deploy-pages.yml and is
git-ignored. The two files written to the repository root are tracked on purpose:
they let the site also be published with the no-build "Deploy from a branch"
option (Settings -> Pages -> Source: Deploy from a branch -> main / root).

Usage:  python3 build.py
"""

from __future__ import annotations

import os
import shutil
import subprocess
import sys

ROOT = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(ROOT, "src")
DIST = os.path.join(ROOT, "dist")
LEGACY_NAME = "IPC-A-600H_Academia_Interactiva.html"
# Extra self-contained pages published as-is next to the app. Each one is
# reachable from the "Normas" tab strip in the header.
EXTRA_PAGES = ["IPC_610.html"]
TITLE = "IPC-A-600H · Academia interactiva de inspección de PCB"

# The real payload is ~3.2 MB. Anything far below that means a placeholder was
# not substituted, so fail loudly instead of publishing a broken page.
MIN_BYTES = 1_000_000


def read(rel: str) -> str:
    path = os.path.join(SRC, rel)
    if not os.path.isfile(path):
        sys.exit(f"build.py: missing required source file: {path}")
    with open(path, encoding="utf-8") as fh:
        return fh.read()


def write(path: str, text: str) -> int:
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as fh:
        fh.write(text)
    return len(text.encode("utf-8"))


def base_path() -> str:
    """Absolute path prefix the site is served from, e.g. ``/normasIPC``.

    GitHub Pages serves a project site from ``/<repo>`` and a user/organization
    site (``<user>.github.io``) from ``/``. The workflow passes the real value in
    ``PAGES_BASE_PATH``; outside CI it is derived from the git remote so local
    builds produce the same 404 page.
    """
    raw = os.environ.get("PAGES_BASE_PATH")
    if raw is None:
        raw = _repo_name_from_git()
    if raw is None:
        return ""
    raw = "/" + raw.strip("/") if raw.strip("/") else ""
    if raw.lower().endswith(".github.io"):  # user/org site -> served from root
        return ""
    return raw


def _repo_name_from_git() -> str | None:
    try:
        url = subprocess.run(
            ["git", "config", "--get", "remote.origin.url"],
            cwd=ROOT, capture_output=True, text=True, timeout=10,
        ).stdout.strip()
    except Exception:
        return None
    if not url:
        return None
    return os.path.basename(url).removesuffix(".git") or None


def build_app() -> str:
    template = read("app.html")
    for marker in ("/*__DATA__*/", "/*__IMAGES__*/"):
        if marker not in template:
            sys.exit(f"build.py: placeholder {marker} is missing from src/app.html")

    app = (template
           .replace("/*__DATA__*/", read("data.js"))
           .replace("/*__IMAGES__*/", read("images.js")))

    for marker in ("__DATA__", "__IMAGES__"):
        if marker in app:
            sys.exit(f"build.py: {marker} was not substituted; refusing to publish")
    if len(app.encode("utf-8")) < MIN_BYTES:
        sys.exit(f"build.py: output is only {len(app)/1e6:.2f} MB "
                 f"(< {MIN_BYTES/1e6:.1f} MB); figure data is missing")
    return app


def redirect_page(target: str, note: str, absolute_base: str | None = None) -> str:
    """A small themed page that forwards to ``target``.

    ``absolute_base`` is used by dist/404.html, which can be requested from any
    depth, so its link has to be an absolute path rather than a relative one.
    """
    href = absolute_base if absolute_base is not None else target
    js_target = (f"'{absolute_base}'" if absolute_base is not None
                 else f"'{target}'")
    return f"""<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{TITLE}</title>
<meta http-equiv="refresh" content="0; url={href}">
<style>
html,body{{height:100%;margin:0;background:#0b1220;color:#e6ecf8;
font-family:"Segoe UI",system-ui,-apple-system,Roboto,Helvetica,Arial,sans-serif}}
main{{min-height:100%;display:flex;align-items:center;justify-content:center;padding:24px}}
.card{{max-width:460px;text-align:center;background:#111a2e;border:1px solid #233152;
border-radius:14px;padding:28px}}
h1{{font-size:19px;margin:0 0 8px}}
p{{color:#93a3c3;font-size:14px;margin:0 0 18px;line-height:1.5}}
a{{display:inline-block;background:#10b981;color:#04120c;font-weight:700;
text-decoration:none;padding:10px 18px;border-radius:10px}}
</style>
</head>
<body>
<main><div class="card">
<h1>IPC-A-600H · Academia interactiva</h1>
<p>{note}</p>
<p><a href="{href}">Abrir la academia</a></p>
</div></main>
<script>
(function () {{
  var url = {js_target};
  // A file:// checkout has no site root to resolve against, so fall back to the
  // sibling index.html instead of bouncing to the server root.
  if (location.protocol === "file:" && url.charAt(0) === "/") url = "./index.html";
  location.replace(url + location.hash);
}})();
</script>
</body>
</html>
"""


def main() -> int:
    base = base_path()
    # Build first, then replace dist/ wholesale, so a failed build never wipes a
    # working one and stale files from an older layout are never published.
    app = build_app()
    shutil.rmtree(DIST, ignore_errors=True)
    written = []

    # --- dist/: the GitHub Pages artifact (Actions deploy) -------------------
    written.append(("dist/index.html", write(os.path.join(DIST, "index.html"), app)))
    for name in EXTRA_PAGES:
        src = os.path.join(ROOT, name)
        if not os.path.isfile(src):
            sys.exit(f"build.py: missing extra page: {src}")
        shutil.copyfile(src, os.path.join(DIST, name))
        written.append((f"dist/{name}", os.path.getsize(src)))
    written.append((f"dist/{LEGACY_NAME}", write(
        os.path.join(DIST, LEGACY_NAME),
        redirect_page("./index.html",
                      "Esta dirección ha cambiado. Redirigiendo a la academia…"))))
    written.append(("dist/404.html", write(
        os.path.join(DIST, "404.html"),
        redirect_page("/",
                      "No encontramos esa página. Redirigiendo a la academia…",
                      absolute_base=(base or "") + "/"))))

    # --- repository root: the "deploy from a branch" payload -----------------
    written.append((LEGACY_NAME, write(os.path.join(ROOT, LEGACY_NAME), app)))
    written.append(("index.html", write(
        os.path.join(ROOT, "index.html"),
        redirect_page(f"./{LEGACY_NAME}",
                      "Redirigiendo a la academia interactiva…"))))

    print(f"GitHub Pages base path: {base + '/' if base else '/'}")
    for name, size in written:
        print(f"  {size/1e6:7.3f} MB  {name}")
    print("Publish dist/ with GitHub Actions, or the repository root with "
          "'Deploy from a branch'.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
