/**
 * Single source of truth for every piece of restaurant-specific content.
 *
 * Everything the site renders — name, hours, menu, gallery, contact details —
 * comes from this file. To launch the real site, replace the placeholder values
 * below with the restaurant's actual details. No other file needs to change.
 */

export interface MenuItem {
  name: string;
  description: string;
  /** Formatted for display, e.g. "$12" or "$12.50". Include the currency symbol. */
  price: string;
  /** Shown as a small badge on the item, e.g. ["Vegetarian", "Gluten free"]. */
  tags?: string[];
}

export interface MenuSection {
  title: string;
  /** Optional blurb shown under the section heading. */
  description?: string;
  items: MenuItem[];
}

export interface GalleryPhoto {
  /** Path under `public/`, e.g. "/images/gallery/dining-room.jpg". */
  src: string;
  /** Describe the photo for screen readers. Never leave this empty. */
  alt: string;
}

/**
 * One row of the opening-hours table.
 *
 * `opens`/`closes` are 24-hour "HH:MM" strings used for the machine-readable
 * schema.org markup. Set both to `null` for a day the restaurant is closed.
 */
export interface OpeningHours {
  /** Full day name, e.g. "Monday". */
  day: string;
  opens: string | null;
  closes: string | null;
  /** Overrides the generated text, e.g. "12:00 – 15:00, 19:00 – 23:00". */
  note?: string;
}

// -----------------------------------------------------------------------------
// PLACEHOLDER CONTENT — replace everything below with the real details.
// -----------------------------------------------------------------------------

export const restaurant = {
  name: 'Rombo',
  /** Short line under the logo and in search results. */
  tagline: 'Neighbourhood kitchen & wine bar',
  /** 1–3 sentences for the hero section. */
  intro:
    'A small family-run kitchen serving seasonal plates and natural wine. ' +
    'Everything is cooked to order with produce from growers we know by name.',
  /** Longer story for the About section. */
  about:
    'We opened in a former corner shop with ten seats and one hotplate. ' +
    'The menu changes with what our suppliers bring us each week, so expect ' +
    'a short list of dishes and a few surprises. Walk-ins are always welcome ' +
    'at the counter.',

  address: {
    street: '123 Example Street',
    locality: 'Your Town',
    region: 'Your Region',
    postalCode: '00000',
    country: 'Your Country',
  },

  phone: '+00 000 000 000',
  email: 'hello@example.com',

  social: {
    facebook: 'https://www.facebook.com/',
    instagram: '',
  },

  /**
   * Google Maps embed URL. To get one: open Google Maps → find the restaurant →
   * Share → Embed a map → copy the `src` value out of the <iframe> snippet.
   */
  mapEmbedUrl: '',
  /** Plain link used by the "Get directions" button. */
  mapLinkUrl: 'https://www.google.com/maps',

  /**
   * Where the reservation form submits. Sign up at https://formspree.io (free
   * tier) and paste the form endpoint here — the form stays disabled with a
   * clear message until this is filled in.
   */
  reservationEndpoint: '',
} as const;

export const openingHours: OpeningHours[] = [
  { day: 'Monday', opens: null, closes: null },
  { day: 'Tuesday', opens: '17:00', closes: '23:00' },
  { day: 'Wednesday', opens: '17:00', closes: '23:00' },
  { day: 'Thursday', opens: '17:00', closes: '23:00' },
  { day: 'Friday', opens: '12:00', closes: '00:00' },
  { day: 'Saturday', opens: '12:00', closes: '00:00' },
  { day: 'Sunday', opens: '12:00', closes: '17:00' },
];

export const menu: MenuSection[] = [
  {
    title: 'To start',
    description: 'Made to share.',
    items: [
      {
        name: 'Focaccia & olive oil',
        description: 'Baked each morning, new-harvest oil, flaky salt.',
        price: '$6',
        tags: ['Vegan'],
      },
      {
        name: 'Marinated olives',
        description: 'Citrus peel, fennel seed, chilli.',
        price: '$5',
        tags: ['Vegan', 'Gluten free'],
      },
      {
        name: 'Burrata & tomatoes',
        description: 'Heritage tomatoes, basil, aged balsamic.',
        price: '$13',
        tags: ['Vegetarian', 'Gluten free'],
      },
    ],
  },
  {
    title: 'Mains',
    items: [
      {
        name: 'Handmade tagliatelle',
        description: 'Slow beef ragù, parmesan, black pepper.',
        price: '$18',
      },
      {
        name: 'Roast cauliflower',
        description: 'Almond cream, brown butter, capers, raisins.',
        price: '$16',
        tags: ['Vegetarian', 'Gluten free'],
      },
      {
        name: 'Catch of the day',
        description: 'Whatever came in this morning, grilled, salsa verde.',
        price: 'Market price',
        tags: ['Gluten free'],
      },
    ],
  },
  {
    title: 'Dessert',
    items: [
      {
        name: 'Tiramisù',
        description: 'The house recipe. Non-negotiable.',
        price: '$8',
        tags: ['Vegetarian'],
      },
      {
        name: 'Affogato',
        description: 'Vanilla gelato, double espresso.',
        price: '$6',
        tags: ['Vegetarian', 'Gluten free'],
      },
    ],
  },
];

export const gallery: GalleryPhoto[] = [
  { src: '/images/gallery/placeholder-1.svg', alt: 'Placeholder — replace with a photo of the dining room' },
  { src: '/images/gallery/placeholder-2.svg', alt: 'Placeholder — replace with a photo of a signature dish' },
  { src: '/images/gallery/placeholder-3.svg', alt: 'Placeholder — replace with a photo of the bar' },
  { src: '/images/gallery/placeholder-4.svg', alt: 'Placeholder — replace with a photo of the kitchen team' },
  { src: '/images/gallery/placeholder-5.svg', alt: 'Placeholder — replace with a photo of a dessert' },
  { src: '/images/gallery/placeholder-6.svg', alt: 'Placeholder — replace with a photo of the terrace' },
];

/** Convenience: the address on one line, for meta tags and the map link. */
export const formattedAddress = [
  restaurant.address.street,
  restaurant.address.locality,
  restaurant.address.region,
  restaurant.address.postalCode,
].filter(Boolean).join(', ');
