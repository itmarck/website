# itmarck.com

Personal site of Marcelo Velásquez, software developer in Peru: projects, experience and contact. Static Astro site, English and Spanish, deployed on Cloudflare.

## Commands

| Command | Does |
| --- | --- |
| `npm start` | Dev server |
| `npm run build` | Type check and build to `dist/` |
| `npm run preview` | Serve the build |
| `npm run lint` | Format and lint (Biome) |

## Structure

- `src/i18n.ts` — all copy, one object per language. Pages are generated per language: `/{lang}/`, `/{lang}/projects/`, `/{lang}/experience/`. `/` redirects by saved choice or browser language.
- `src/layouts/Base.astro` — head, menu, contact popover and page shell.
- `src/scripts/ink.js` — the WebGL ink background and the home's sphere. `site.js` wires each page.
- `src/styles/theme.css` — design tokens and shared components.
- `public/brand/mark.svg`, `public/favicon/favicon.svg` — the logo. `src/pages/privacy.astro` — privacy policy for the website, English only.
- `public/_headers` — cache and security headers. `public/robots.txt` — points to the sitemap.
- Metadata lives in `Base.astro` (per-page `title` and `description` props). JSON-LD for Google is on the home pages only: `WebSite` and `ProfilePage`.

## Design

Dark bento over a field of live ink: solid tiles float on a WebGL canvas that shows through the gaps, inside outlined "window" tiles and as a lit sphere in place of a portrait. The canvas persists across pages, so the ink never restarts.

- **Tokens only.** Colors, type steps, radii, spacing and motion come from `theme.css`; the full ink palette is `COLORS` in `ink.js`.
- **Color.** Ground `--ink-0`; tiles `--surface`; text `--text` / `--text-soft`. Accent tiles aqua, pink and lime (`--tile-a/b/c`) at `--tile-opacity` so the ink shows through. Lime is the brand accent.
- **Type.** One family, Geist. Five steps from `--step-xs` to `--step-xl`.
- **Hover.** Never moves or resizes anything: linked tiles turn translucent, text and outlines change color, pill arrows rotate in place. Hovers use `--ease-hover`.
- **Motion.** Transform and opacity only. Everything stops under `prefers-reduced-motion`; the ink draws one still frame.
- **Layout.** Fluid first: grid, flex, `clamp()`, container queries. Content and menu stay within `--max` (96rem). The ink still fills the window.
- **Breakpoints.** Three widths: wide (default), medium (`< 64em`) and small (`< 48em`). Each one has a single media query in `theme.css` that only changes variables (`--home-*`, `--work-*`, `--rail-*`…). Pages read them, for example `grid-template-areas: var(--home-areas)`. Don't add media queries in components.
- **Units.** `rem`/`em`/`%`. `px` only for borders, outlines, shadows and blurs.
- **Text size.** Body text keeps the browser's size. Only titles scale. Never shrink text to make it fit: make room or cut it with an ellipsis.

## Logo

A hexagon split along a slash into two pieces, read as `</>`. One shape everywhere, SVG only. The menu shows it in `--text`; the favicon is the mark in near-black on a lime tile. Don't rotate it, outline it, join its pieces or recolor it outside text, near-black and lime.

## Deploy

`wrangler.jsonc` serves `dist/` as static assets on Cloudflare Workers. Connect the repo in Cloudflare → Workers & Pages → Workers Builds, production branch `main`, build command `npm run build`, deploy command `npx wrangler deploy`. Every merge to `main` deploys.
