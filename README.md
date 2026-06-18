# ReleaseMode.com

**Engineering Led Developer Relations.**

The marketing site for Release Mode LLC: a fast, mostly-static Astro brochure
build with a quiet premium layer of scroll-triggered reveals and animated page
transitions, all gracefully degrading for no-JS and reduced-motion visitors.

## Colophon: built with

| Tool                                                                                 | Version          | Why                                                                                 |
| ------------------------------------------------------------------------------------ | ---------------- | ----------------------------------------------------------------------------------- |
| [Astro](https://astro.build)                                                         | 6.4.x            | Static output, zero JS by default; islands only where needed.                       |
| [Tailwind CSS](https://tailwindcss.com)                                              | 4.3.x            | CSS-first styling via `@tailwindcss/vite`; tokens in `@theme`, no JS config.        |
| [Motion](https://motion.dev)                                                         | 12.40.x          | Real animation engine (springs, `stagger`, `inView`) behind the scroll reveals.     |
| [`ClientRouter`](https://docs.astro.build/en/guides/view-transitions/)               | (Astro built-in) | Animated page transitions / shared-element morphs.                                  |
| [`@astrojs/sitemap`](https://docs.astro.build/en/guides/integrations-guide/sitemap/) | 3.7.x            | Auto-generated `sitemap-index.xml` for SEO.                                         |
| [astro-seo](https://github.com/jonasmerlin/astro-seo)                                | 1.1.x            | Per-page meta, Open Graph, Twitter card tags.                                       |
| [Fontsource Inter Variable](https://fontsource.org/fonts/inter)                      | 5.2.x            | Self-hosted variable font: no layout shift, no Google CDN request.                  |
| [Bun](https://bun.sh)                                                                | 1.3.x            | Package manager + build runner.                                                     |
| [Prettier](https://prettier.io)                                                      | 3.8.x            | Formatting + `prettier-plugin-tailwindcss` class sorting + `prettier-plugin-astro`. |

## Local development

```bash
bun install      # install dependencies
bun dev          # dev server at http://localhost:4321
bun run build    # production build -> dist/
bun preview      # preview the built site locally
```

## Project shape

```
src/
  layouts/Layout.astro      # <head>, SEO, fonts, ClientRouter, reveal gate
  components/Reveal.astro    # Motion-powered scroll reveal island
  pages/index.astro          # homepage
  styles/global.css          # @import "tailwindcss" + @theme tokens
astro.config.mjs             # static output, site URL, Tailwind + sitemap
```

Styling is **CSS-first**: there is no `tailwind.config.js`. Design tokens live in
`src/styles/global.css` under `@theme`.

## Deployment (Render Static Site)

- **Build Command:** `bun install && bun run build`
- **Publish Directory:** `dist`
- **`output: 'static'`**: no adapter required.
- Optionally pin Bun with a `BUN_VERSION` environment variable.

If server-side logic is ever added, switch to a Render Web Service with
[`@astrojs/node`](https://docs.astro.build/en/guides/integrations-guide/node/).

## License

[MIT](./LICENSE) © 2026 Lee Flannery
