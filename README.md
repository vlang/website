# vlang.io

The dark V website is a server-rendered Veb application. It needs no JavaScript
framework or frontend build step. CSS and a small progressive-enhancement script
live in `static/`; the homepage is assembled from `index.html` and `templates/`.

## Run locally

Run from the repository root: Veb loads `translations/` relative to the working
directory. Traffic tracking is optional locally, so this starts the site without
PostgreSQL:

```sh
cd ~/code/website
v -old-compiler -d veb_livereload watch run .
```

The homepage is at `http://localhost:8082/`. `/compare` preserves the old language
comparison, and `/utc_now` supports the HTTP example. `/stats228` returns `503`
while tracking is disabled. To enable visit collection and the dashboard, provide
a PostgreSQL connection string (the sibling `~/code/traffic` module is also
required by the build):

```sh
VLANG_DB_CONNINFO='host=127.0.0.1 dbname=your_database user=your_user' \
  v -old-compiler -path '/Users/alex/code|@vlib|@vmodules' run .
```

## Demo showcase

The hero cycles through compilation, DOOM translation, live code reloading,
cross compilation, and the Vinix desktop. Visitors can select a demo, use arrow
keys/Home/End in the tab list, or pause playback. Automatic rotation pauses while
hovered, focused, offscreen, in a background tab, or while watching a full video.
Reduced-motion preferences disable automatic playback. Inactive media pauses.

- The first slide uses the supplied self-compilation recording,
  `static/img/self-compilation.mp4`. It starts muted, loops inline, and is
  paused along with the rest of the showcase for reduced motion, background
  tabs, hover/focus, and offscreen content.
- DOOM uses the original V channel demonstration, `6oXrz3oRoEg`. Its private-mode
  YouTube embed is created only after the visitor presses Play; a local screenshot
  is available before playback. No YouTube scripts load on page entry.
- Hot reloading and cross compilation use the old site's original `hot.mp4` and
  `vwin.mp4` recordings. They load on demand and have native playback controls.
- Vinix uses the real desktop screenshot from the sibling Vinix website.

To replace the compilation recording, update its video source and caption in
`index.html`. For a new DOOM recording, replace `data-youtube`, or use the same
native video pattern as the other demos. Suggested next recordings: a Veb app
updating in the browser as code changes; an ORM query producing a typed result;
a native V GUI app launching on macOS, Linux, and Windows; and a V shader or
particle simulation being edited live. Record benchmarks with the V revision,
hardware, build flags, and uncut elapsed time visible.

## Content preservation

`templates/content.html` ports all 27 news entries, 25 testimonials, 18 projects
(including Lilly and V GUI), five code examples, and the original feature text,
code, tables, screenshots, and videos. Expanded feature groups remain addressable
by URL fragments. Resources, books, merchandise, five editor integrations, all
six sponsors, donation links, community links, original credits, and English,
Russian, Spanish, French, Japanese, Chinese, Turkish, Brazilian Portuguese,
and Persian (Farsi) language selection remain available. The previous
site is preserved in `oldv/`.

Check a running instance against the old site's complete link inventory:

```sh
python3 tools/design_checks/check_content.py http://localhost:8082/
```

Browser validation covers desktop and mobile widths, keyboard navigation,
automatic rotation, reduced motion, copying commands/examples, the mobile menu,
media, translations, local assets, and accessibility with axe-core.

## Deploy

```sh
./deploy.sh
```

The script cross-compiles a Linux x86_64 production binary locally, stages the
complete release through the existing `vlang` SSH alias, saves a backup under
`/var/backups/vlang-<timestamp>.tar.gz`, and restarts the production origin
service (whose legacy internal name is `newvlang.service`). It verifies the
homepage, comparison page, and statistics route and restores the previous
release if an origin health check fails. It then checks the public
`https://vlang.io/` homepage. It does not change nginx, service configuration,
or the database.
`DEPLOY_HOST` and `TRAFFIC_MODULE_PARENT` can override the SSH alias and sibling
module parent. The deployed service must run with its site directory as its
working directory so translations load.
