# ROMBO Asador Playero — website

Bilingual (Spanish / English) static website for
[ROMBO Asador Playero](https://www.instagram.com/romboasadorplayero/), a
beachside grill and cocktail bar at 112A Calle 15, Dorado, Puerto Rico.

Built with [Astro](https://astro.build). Menu, gallery, opening hours, map and
a reservation request form on one page per language.

## Before this goes live

A few things still need real values. Each degrades gracefully until then —
nothing is broken, and no invented information is published.

| What | Where | Status |
| ---- | ----- | ------ |
| **Phone number** | `restaurant.phone` | Empty. Two different numbers appear in online listings and neither was confirmed, so none is published. |
| **Email** | `restaurant.email` | Empty, same reason. |
| **Map** | `restaurant.mapEmbedUrl` | Empty — the map area shows a setup note. |
| **Booking form** | `restaurant.reservationEndpoint` | Empty — the form renders disabled and points guests to Instagram. |
| **Photos** | `public/images/gallery/` | Placeholder SVGs. |
| **Public URL** | `site` in `astro.config.mjs` | Set to `https://example.com`; change it so canonical and social tags are right. |

Set any of these and the corresponding UI switches on automatically — phone and
email links appear in the header, Visit section and footer; the map replaces its
note; the form enables itself.

### What *is* real

- **The full menu**, transcribed from the printed menu: all 19 items across
  Aperitivos, Pastelillos and Principales, with the printed prices. Spanish
  descriptions are as printed; the English ones are translations of those.
  Chillo frito carries `marketPrice` instead of a figure, and the four dishes
  marked `***` on the printed menu carry `subjectToAvailability`, footnoted at
  the bottom of the section alongside the raw-protein notice.
- Name, address (112A Calle 15, Dorado, PR 00646), price range ($20–60)
- Opening hours: closed Mon–Wed; Thu & Fri 3–11 pm; Sat & Sun 1–11 pm; kitchen
  closes 10 pm, bar 11 pm
- Instagram and Facebook links

The accent colour (`--accent` in `src/styles/global.css`) is set to the red of
the ROMBO wordmark. The logo itself is not in the repo — the header uses styled
text. Drop a real logo file into `public/` if you'd rather use the mark.

## Running it

Requires Node 18 or newer.

```sh
npm install
npm run dev      # http://localhost:4321
```

| Command           | What it does                                       |
| ----------------- | -------------------------------------------------- |
| `npm run dev`     | Dev server with hot reload                          |
| `npm run build`   | Typechecks, then builds the static site to `dist/`  |
| `npm run preview` | Serves the built `dist/` locally                    |

## How the two languages work

- **`/`** is Spanish (the default), **`/en/`** is English. Both render the same
  `Page.astro`, so the two versions cannot drift apart structurally.
- **On a first visit**, a dialog asks which language the visitor wants. It's
  written in both languages so either speaker can read it. The choice is saved
  to `localStorage` under `rombo:lang`.
- **On later visits**, a small inline script redirects to the stored language
  before the page paints, so there's no flash of the wrong language.
- **The header has an ES/EN toggle** for changing language later. It updates the
  stored preference too, so the redirect script doesn't bounce the visitor back.
- If `localStorage` is unavailable (private mode, blocked storage), everything
  still works — the visitor is just asked again next time.
- `hreflang` tags advertise both versions to search engines.

### Editing content

- **`src/data/restaurant.ts`** — everything about the restaurant: contact
  details, hours, menu, gallery. Text that differs per language is written as
  `{ es: '…', en: '…' }`.
- **`src/i18n/ui.ts`** — interface copy: nav labels, headings, buttons, form
  fields, error messages. The English object is typed against the Spanish one,
  so a missing translation is a build error rather than a silent fallback.

To add a menu item, add an entry to the relevant section in `menu`:

```ts
{
  name: 'Tacos al pastor',                  // as printed; same in both languages
  description: { es: 'Descripción…', en: 'Description…' },
  price: '$14',                             // empty string hides the price
  marketPrice: true,                        // optional: shows "Precio del mercado"
  subjectToAvailability: true,              // optional: prints the *** marker
  tags: ['glutenFree'],                     // optional badges
}
```

Tag keys are defined in `src/i18n/types.ts` and translated in `src/i18n/ui.ts`.
No dish currently uses them — they're there for when you want to flag
vegetarian, gluten-free and similar.

For hours, use 24-hour `"HH:MM"` strings; both `opens` and `closes` set to
`null` means closed that day. Today's row is highlighted automatically.

## How it's put together

```
src/
  data/restaurant.ts     all restaurant content — start here
  i18n/
    types.ts             Locale, day and tag keys
    ui.ts                interface copy in both languages
    index.ts             helpers (time formatting, string lookup)
  layouts/Layout.astro   <head>, SEO meta, hreflang, schema.org, skip link
  components/
    Page.astro           the homepage, rendered once per language
    Header, Hero, About, Menu, Gallery, Visit, Reservations, Footer
    LanguageChooser.astro   first-visit dialog + redirect script
  pages/
    index.astro          Spanish homepage  →  /
    en/index.astro       English homepage  →  /en/
    404.astro            not-found page, shown in both languages
  styles/global.css      design tokens, reset, shared utilities
public/                  images, favicon, robots.txt — served as-is
```

Notes on a few decisions:

- **No JavaScript framework.** The page ships three small scripts (language
  redirect, mobile nav, form submit) and nothing else.
- **schema.org `Restaurant` markup** is generated from the same data, so Google
  can show hours, address and price range directly in search results.
- **The reservation form works without JavaScript.** It's a normal `POST` form;
  the script only upgrades it to submit in place with an inline confirmation.
  A hidden honeypot field catches basic spam bots, and a hidden `lang` field
  records which language the guest was browsing in.
- **Accessibility**: skip link, visible focus rings, labelled form fields, a
  real `<table>` for hours, `lang` attributes on switched-language text, and
  `prefers-reduced-motion` respected.

## Deploying

`npm run build` produces a fully static `dist/` that any static host will serve.
On [Netlify](https://netlify.com), [Vercel](https://vercel.com) or
[Cloudflare Pages](https://pages.cloudflare.com), point at this repo and use:

- Build command: `npm run build`
- Publish directory: `dist`
