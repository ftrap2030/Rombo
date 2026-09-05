# Rombo — restaurant website

A fast, static website for a small restaurant, built with [Astro](https://astro.build).
Single page with menu, gallery, opening hours, map and a reservation request form.

> **Status: placeholder content.** Every detail on the site right now is made up.
> See [Making it yours](#making-it-yours) to swap in the real restaurant.

## Running it

Requires Node 18 or newer.

```sh
npm install
npm run dev      # http://localhost:4321
```

| Command           | What it does                                     |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Dev server with hot reload                        |
| `npm run build`   | Typechecks, then builds the static site to `dist/` |
| `npm run preview` | Serves the built `dist/` locally                  |

## Making it yours

Almost everything lives in one file: **`src/data/restaurant.ts`**. Edit it and
the whole site updates — no other file needs to change.

1. **Details** — name, tagline, intro, about text, address, phone, email and
   social links in the `restaurant` object.
2. **Opening hours** — the `openingHours` array. Use 24-hour `"HH:MM"` strings;
   set `opens` and `closes` to `null` for a closed day. For a split service, add
   a `note` like `"12:00 – 15:00, 19:00 – 23:00"` and it overrides the display
   text. Today's row is highlighted automatically.
3. **Menu** — the `menu` array of sections, each with items. `price` is a
   display string, so `"$12"`, `"12 €"` and `"Market price"` all work. Optional
   `tags` render as small badges (`"Vegan"`, `"Gluten free"`, …).
4. **Photos** — drop real images into `public/images/gallery/` and point the
   `gallery` array at them. Landscape 4:3 at roughly 1200×900 works well. Write
   a real `alt` description for each; it matters for screen readers and search.
5. **Map** — in Google Maps, find the restaurant → **Share** → **Embed a map**,
   copy the `src` value out of the `<iframe>` snippet, and paste it into
   `mapEmbedUrl`. Also update `mapLinkUrl` for the "Get directions" button.
   Until `mapEmbedUrl` is set, the map area shows a short setup note.
6. **Reservations** — the form needs somewhere to send submissions. Create a
   free form at [formspree.io](https://formspree.io) and paste the endpoint into
   `reservationEndpoint`. Until then the form renders disabled with a note
   telling guests to phone or email instead.

Two more things worth updating before launch:

- `site` in `astro.config.mjs` — set it to the real public URL so canonical
  links and social share tags are correct.
- `public/favicon.svg` — currently a plain "R" monogram.

Colours, fonts and spacing are CSS custom properties at the top of
`src/styles/global.css`.

## How it's put together

```
src/
  data/restaurant.ts     all site content — start here
  layouts/Layout.astro   <head>, SEO meta, schema.org markup, skip link
  components/            Header, Hero, About, Menu, Gallery, Visit,
                         Reservations, Footer
  pages/
    index.astro          the one page, composed from the components
    404.astro            not-found page
  styles/global.css      design tokens, reset, shared utilities
public/                  images, favicon, robots.txt — served as-is
```

Notes on a few decisions:

- **No JavaScript framework.** The page ships two tiny scripts (mobile nav,
  form submit) and nothing else.
- **schema.org `Restaurant` markup** is generated from the same data, so Google
  can show hours, address and phone directly in search results.
- **The reservation form works without JavaScript.** It's a normal `POST` form;
  the script only upgrades it to submit in place with an inline confirmation.
  A hidden honeypot field catches basic spam bots.
- **Accessibility**: skip link, visible focus rings, labelled form fields, a
  real `<table>` for hours, and `prefers-reduced-motion` respected.

## Deploying

`npm run build` produces a fully static `dist/` that any static host will serve.
On [Netlify](https://netlify.com), [Vercel](https://vercel.com) or
[Cloudflare Pages](https://pages.cloudflare.com), point at this repo and use:

- Build command: `npm run build`
- Publish directory: `dist`
