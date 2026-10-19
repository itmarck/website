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
| `--tile-a/b/c` | Stat tiles: aqua, pink, lime. Over the ink they are drawn at `--tile-opacity` (74%) so the ink shows through. |

## Type

One family, Geist (300/400/500/700/800). Five steps: `--step-xs` (labels), `--step-s` (body), `--step-m` (card titles, statements), `--step-l` (numbers, contact), `--step-xl` (section words). Display sizes use `--tracking-display`, large text `--tracking-tight`.

## Shape and space

`--radius` for tiles and windows, `--radius-sm` for fragments inside them, pills fully round. `--gap` between tiles (it is where the ink shows, keep it small). `--pad` inside sections. The about card has a tab with a concave corner and a circular hole for the sphere.

## Logo

The itmarck mark: a hexagon split along a slash into two pieces pushed slightly apart, so they read as `<` and `>` and the whole as `</>`. Soft corners like the cards. One shape everywhere, all SVG, no variants by size.
- Files: `public/brand/mark.svg` (the mark, light, for the site's dark ground) and `public/favicon/favicon.svg` (the icon). The menu inlines the mark in `Base.astro`.
- Menu: the mark in `--text` at the menu items' resting opacity, full on hover, like them. Lime is kept for the icon and the cards.
- Favicon/icon: the mark in near-black filling a lime (`--tile-c`) tile with the card radius. `public/favicon/favicon.svg`, SVG only.
- Clear space: keep at least a quarter of the mark's width empty around it. Don't rotate, outline, add effects, join the two pieces or recolor outside `--text`, `--text-on-color` and lime.

## Components (global, in `theme.css`)

- `.tile`: solid surface. `.window`: transparent, outlined, shows the ink.
- `.pill`: primary action with a nested round icon; `.pill--ghost` secondary.
- `.chip`: small toggle or link; `aria-pressed="true"` fills it.
- `.go`: on tiles that are themselves links, a ringed arrow cue. It hides itself when the tile is too narrow.
- Hovers never resize or move an element. Linked tiles and list rows turn slightly translucent so the ink shows through; text and outlines change color; pill arrows rotate in place.
- Contact: a native popover centered over a strong blur with a faint ink tint (the ink pauses while it is open), in `Base.astro`. Any `popovertarget="contact"` button opens it.
- `.rise`: entrance on scroll (needs the page script).

## Motion

Curves: `--ease` for entrances and opening, `--ease-hover` (gentle in and out) for every hover. Durations `--dur-fast` (hover fades), `--dur` (arrow turns, press), `--dur-slow` (entrances). Animate transform and opacity only. Everything stops under `prefers-reduced-motion`, and the ink draws one still frame.

## Content

Copy lives in `src/i18n.ts`, one object per language. Pages: `/{lang}/` (profile at a glance), `/{lang}/projects/`, `/{lang}/experience/`. `/` sends the visitor to `/en/` or `/es/` from their saved choice or browser language.
