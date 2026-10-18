# Design system

Dark bento portfolio over a field of live ink. Tokens live in `src/styles/theme.css`; components use tokens only, never raw values.

## Idea

The page floats as solid tiles over a WebGL ink field (`src/scripts/ink.js`). The ink shows through the gaps between tiles, inside "window" tiles, and as a lit sphere in place of a portrait. The canvas persists across pages (Astro view transitions), so the ink never restarts.

## Color

| Token | Use |
| --- | --- |
| `--ink-0` … `--ink-5` | Night palette, mirrored in `COLORS` in `ink.js` (change both together). `--ink-0` is the page ground, `--ink-5` the focus color. |
| `--surface` | Tiles. |
| `--surface-raised` | Neutral tile (client, Disney). |
| `--edge` | Outline of window tiles over the ink. |
| `--text`, `--text-soft` | Text on dark. Body copy in `--text-soft` only when secondary. |
| `--text-on-color` | Text on pastel tiles and pill buttons. |
| `--tile-a/b/c` | Stat tiles: aqua, pink, lime. |

## Type

One family, Geist (300/400/500/700/800). Five steps: `--step-xs` (labels), `--step-s` (body), `--step-m` (card titles, statements), `--step-l` (numbers, contact), `--step-xl` (section words). Display sizes use `--tracking-display`, large text `--tracking-tight`.

## Shape and space

`--radius` for tiles and windows, `--radius-sm` for fragments inside them, pills fully round. `--gap` between tiles (it is where the ink shows, keep it small). `--pad` inside sections. The about card has a tab with a concave corner and a circular hole for the sphere.

## Components (global, in `theme.css`)

- `.tile`: solid surface. `.window`: transparent, outlined, shows the ink.
- `.pill`: primary action with a nested round icon; `.pill--ghost` secondary.
- `.chip`: small toggle or link; `aria-pressed="true"` fills it.
- `.go`: on tiles that are themselves links, a ringed arrow that fills and turns on hover.
- Hovers never resize or move an element. They change color or outline, or rotate an arrow in place.
- Contact: a native popover centered over a veil of `--ink-1` (a tint, not a blur, so the live ink stays cheap), in `Base.astro`. Any `popovertarget="contact"` button opens it.
- `.rise`: entrance on scroll (needs the page script).

## Motion

Curves: `--ease` for entrances and opening, `--ease-hover` (gentle in and out) for every hover. Durations `--dur-fast` (hover fades), `--dur` (arrow turns, press), `--dur-slow` (entrances). Animate transform and opacity only. Everything stops under `prefers-reduced-motion`, and the ink draws one still frame.

## Content

Copy lives in `src/i18n.ts`, one object per language. Pages: `/{lang}/` (profile at a glance), `/{lang}/projects/`, `/{lang}/experience/`. `/` sends the visitor to `/en/` or `/es/` from their saved choice or browser language.
