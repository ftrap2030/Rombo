/**
 * Everything specific to the restaurant lives here: contact details, opening
 * hours, the menu and the gallery.
 *
 * Text that differs between Spanish and English is written as a `Translated`
 * object — `{ es: '…', en: '…' }`. Interface copy (nav labels, form fields,
 * buttons) is not here; it lives in `src/i18n/ui.ts`.
 */

import type { DayKey, TagKey, Translated } from '../i18n/types';

export interface MenuItem {
  /** Dish name exactly as printed on the menu; identical in both languages. */
  name: string;
  description: Translated;
  /**
   * Display string including the currency symbol, e.g. "$20" or "2 x $15".
   * Leave empty to hide the price — or set `marketPrice` instead.
   */
  price: string;
  /** Renders a localised "market price" in place of a figure. */
  marketPrice?: boolean;
  /** Prints the menu's *** marker, footnoted as "subject to availability". */
  subjectToAvailability?: boolean;
  tags?: TagKey[];
}

export interface MenuSection {
  title: Translated;
  description?: Translated;
  items: MenuItem[];
}

export interface GalleryPhoto {
  /** Path under `public/`, e.g. "/images/gallery/barra.jpg". */
  src: string;
  /** Describe the photo for screen readers, in both languages. */
  alt: Translated;
}

export interface OpeningHours {
  day: DayKey;
  /** 24-hour "HH:MM". Both `null` means closed that day. */
  opens: string | null;
  closes: string | null;
}

// -----------------------------------------------------------------------------
// Contact & identity — confirmed from the Google Business listing and the
// verified Instagram profile (@romboasadorplayero).
// -----------------------------------------------------------------------------

export const restaurant = {
  name: 'ROMBO',
  fullName: 'ROMBO Asador Playero',

  tagline: {
    es: 'Coctelería · Asados · Pesca local',
    en: 'Cocktails · Live-fire grill · Local catch',
  } satisfies Translated,

  intro: {
    es:
      'Asador playero en Dorado. Cocinamos sobre fuego con pesca local del ' +
      'día y servimos coctelería de autor hasta tarde.',
    en:
      'A beachside grill in Dorado. We cook over live fire with the day’s ' +
      'local catch and pour craft cocktails until late.',
  } satisfies Translated,

  about: {
    es:
      'ROMBO es un asador playero: fuego, pesca local y una barra que no se ' +
      'toma nada demasiado en serio. Trabajamos con atún y dorado del país, ' +
      'chillo fresco y carnes ahumadas en casa, así que el menú se mueve con ' +
      'lo que entra cada día. Aceptamos walk-ins y también puedes reservar.',
    en:
      'ROMBO is a beachside asador: live fire, local seafood, and a bar that ' +
      'refuses to take itself too seriously. We work with local tuna and ' +
      'mahi-mahi, fresh snapper and meats smoked in house, so the menu moves ' +
      'with whatever comes in each day. Walk-ins are welcome, and you can ' +
      'also book ahead.',
  } satisfies Translated,

  address: {
    street: '112A Calle 15',
    locality: 'Dorado',
    region: 'PR',
    postalCode: '00646',
    country: 'Puerto Rico',
  },

  /**
   * Left empty on purpose: two different numbers appear in online listings and
   * neither is confirmed. Add the correct one and it appears in the header,
   * the Visit section and the footer automatically.
   */
  phone: '' as string,
  /** Likewise unconfirmed — add the real address to switch the email link on. */
  email: '' as string,

  social: {
    instagram: 'https://www.instagram.com/romboasadorplayero/',
    facebook: 'https://www.facebook.com/p/ROMBO-Asador-Playero-100063582128800/',
  },

  /**
   * Google Maps embed URL. To get one: open Google Maps → find ROMBO Asador
   * Playero → Share → Embed a map → copy the `src` out of the <iframe>.
   * While this is empty the map area shows a short setup note instead.
   */
  mapEmbedUrl: '' as string,
  /** Search link built from the address — works without an API key. */
  mapLinkUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('ROMBO Asador Playero, 112A Calle 15, Dorado, PR 00646'),

  /**
   * Where the reservation form posts. Create a free form at https://formspree.io
   * and paste the endpoint here; until then the form renders disabled with a
   * note pointing guests to Instagram.
   */
  reservationEndpoint: '' as string,
} as const;

// -----------------------------------------------------------------------------
// Opening hours — from the Instagram bio:
// "J & V 3pm-11pm  S & D 1pm-11pm  ·  Cocina 10pm*  ·  Barra 11pm"
// (J = jueves, V = viernes, S = sábado, D = domingo)
// -----------------------------------------------------------------------------

export const openingHours: OpeningHours[] = [
  { day: 'monday', opens: null, closes: null },
  { day: 'tuesday', opens: null, closes: null },
  { day: 'wednesday', opens: null, closes: null },
  { day: 'thursday', opens: '15:00', closes: '23:00' },
  { day: 'friday', opens: '15:00', closes: '23:00' },
  { day: 'saturday', opens: '13:00', closes: '23:00' },
  { day: 'sunday', opens: '13:00', closes: '23:00' },
];

/**
 * The Google Business rating, shown under the hero.
 *
 * This is a snapshot, not a live figure — a static site cannot read Google's
 * API — so `checked` records when it was last confirmed. Update all three
 * values together every few months, or set `googleRating` to `null` to hide
 * the block entirely.
 *
 * Deliberately NOT emitted as schema.org `aggregateRating`: Google's
 * structured-data guidelines expect ratings marked up on your own site to be
 * collected by your own site, and marking up a third-party score can earn a
 * manual action. Displaying it visually with attribution and a link is fine.
 */
export const googleRating = {
  value: '4.7',
  count: 371,
  checked: '2026-09',
  url: restaurant.mapLinkUrl,
};

/**
 * Attributes shown on the Google listing. These are stable descriptions of the
 * place rather than a live feed, so they only change when the venue does.
 */
export const amenities: Translated[] = [
  { es: 'Área exterior', en: 'Outdoor seating' },
  { es: 'Coctelería destacada', en: 'Great cocktails' },
  { es: 'Música en vivo', en: 'Live music' },
];

/** Shown under the hours table. */
export const hoursNote: Translated = {
  es: 'La cocina cierra a las 10:00 pm. La barra sigue hasta las 11:00 pm.',
  en: 'The kitchen closes at 10:00 pm. The bar keeps going until 11:00 pm.',
};

// -----------------------------------------------------------------------------
// MENU — transcribed from the printed menu. Prices and Spanish descriptions are
// exactly as printed; the English descriptions are translations of those.
//
// Dishes marked *** on the printed menu are "sujeto a disponibilidad" and carry
// `subjectToAvailability: true` here.
// -----------------------------------------------------------------------------

export const menu: MenuSection[] = [
  {
    title: { es: 'Aperitivos', en: 'Starters' },
    items: [
      {
        name: 'Crema de viandas',
        description: {
          es: 'Crema de yautía, malanga, calabaza y pico de gallo.',
          en: 'Yautía, malanga and calabaza cream soup with pico de gallo.',
        },
        price: '$8',
      },
      {
        name: 'Ceviche de dorado',
        description: {
          es: 'Ceviche de dorado fresco con tostones.',
          en: 'Fresh mahi-mahi ceviche with tostones.',
        },
        price: '$20',
      },
      {
        name: 'Beer batter fish tacos',
        description: {
          es: 'Tacos de dorado fresco en un empanado de cerveza y especias.',
          en: 'Fresh mahi-mahi in a beer-and-spice batter.',
        },
        price: '2 x $15',
      },
      {
        name: 'Tuna tartar',
        description: {
          es: 'Tartar de atún de aleta amarilla del país.',
          en: 'Local yellowfin tuna tartare.',
        },
        price: '$24',
        subjectToAvailability: true,
      },
      {
        name: 'Tacos de brisket',
        description: {
          es:
            'Carne de res premium cocida en su propio jugo, cebollas ' +
            'encurtidas y cilantro.',
          en:
            'Premium beef cooked in its own juices, pickled onions and ' +
            'cilantro.',
        },
        price: '$14',
      },
      {
        name: 'Tacos al pastor',
        description: {
          es: 'Elaborados con la receta auténtica de Cuernavaca, México.',
          en: 'Made with the authentic recipe from Cuernavaca, Mexico.',
        },
        price: '$14',
      },
      {
        name: 'Camarones al cajún',
        description: {
          es:
            'Camarones al estilo cajún acompañados de la salsa de la casa y ' +
            'tostones.',
          en: 'Cajun-style shrimp with house sauce and tostones.',
        },
        price: '$22',
      },
    ],
  },
  {
    title: { es: 'Pastelillos', en: 'Pastelillos' },
    description: {
      es: 'Fritos al momento.',
      en: 'Fried to order.',
    },
    items: [
      {
        name: 'Langosta',
        description: {
          es: 'Pastelillo relleno de langosta.',
          en: 'Lobster pastelillo.',
        },
        price: '$6',
      },
      {
        name: 'Chapín',
        description: {
          es: 'Pastelillo relleno de chapín.',
          en: 'Trunkfish pastelillo.',
        },
        price: '$4',
      },
      {
        name: 'Dorado',
        description: {
          es: 'Pastelillo relleno de dorado.',
          en: 'Mahi-mahi pastelillo.',
        },
        price: '$4',
      },
      {
        name: 'Combinado',
        description: {
          es: 'Carne ahumada y longaniza.',
          en: 'Smoked meat and longaniza.',
        },
        price: '$4',
      },
      {
        name: 'Arepa de coco',
        description: {
          es: 'Arepa de coco frita.',
          en: 'Fried coconut arepa.',
        },
        price: '$2',
      },
    ],
  },
  {
    title: { es: 'Principales', en: 'Mains' },
    items: [
      {
        name: 'Por encima de los gandules',
        description: {
          es:
            'Pork belly o filete de dorado por encima de un escabeche de ' +
            'gandules del patio.',
          en:
            'Pork belly or mahi-mahi fillet over a pigeon pea escabeche from ' +
            'the garden.',
        },
        price: '$20',
      },
      {
        name: 'Filete de atún',
        description: {
          es:
            'Filete de atún aleta amarilla del país sobre salteado de viandas ' +
            'y aceite de cilantro.',
          en:
            'Local yellowfin tuna fillet over sautéed root vegetables and ' +
            'cilantro oil.',
        },
        price: '$32',
        subjectToAvailability: true,
      },
      {
        name: 'Chillo frito',
        description: {
          es: 'Chillo frito con ensalada verde y tostones.',
          en: 'Fried whole snapper with green salad and tostones.',
        },
        price: '',
        marketPrice: true,
        subjectToAvailability: true,
      },
      {
        name: 'Churrasco',
        description: {
          es: 'Churrasco con ensalada verde y acompañante.',
          en: 'Skirt steak with green salad and a side.',
        },
        price: '$32',
        subjectToAvailability: true,
      },
      {
        name: 'Carne ahumada',
        description: {
          es:
            'Media libra de carne ahumada premium en la salsa de la casa y ' +
            'tostones.',
          en:
            'Half a pound of premium smoked meat in house sauce, with tostones.',
        },
        price: '$15',
      },
      {
        name: 'Carne frita',
        description: {
          es: 'Media libra de cerdo premium en cebollas salteadas con tostones.',
          en: 'Half a pound of premium pork with sautéed onions and tostones.',
        },
        price: '$15',
      },
      {
        name: 'ROMBO burger',
        description: {
          es: '5 oz de carne de cerdo ahumada y carne de res premium con papitas fritas.',
          en: '5 oz of smoked pork and premium beef, served with fries.',
        },
        price: '$12',
      },
    ],
  },
];

// -----------------------------------------------------------------------------
// Gallery — placeholders. Drop real photos into public/images/gallery/ and
// point these at them. Landscape 4:3, around 1200×900, works well.
// -----------------------------------------------------------------------------

export const gallery: GalleryPhoto[] = [
  {
    src: '/images/gallery/placeholder-1.svg',
    alt: {
      es: 'Marcador: sustituir por una foto de la barra',
      en: 'Placeholder — replace with a photo of the bar',
    },
  },
  {
    src: '/images/gallery/placeholder-2.svg',
    alt: {
      es: 'Marcador: sustituir por una foto del asador',
      en: 'Placeholder — replace with a photo of the grill',
    },
  },
  {
    src: '/images/gallery/placeholder-3.svg',
    alt: {
      es: 'Marcador: sustituir por una foto de un ceviche',
      en: 'Placeholder — replace with a photo of a ceviche',
    },
  },
  {
    src: '/images/gallery/placeholder-4.svg',
    alt: {
      es: 'Marcador: sustituir por una foto del equipo',
      en: 'Placeholder — replace with a photo of the team',
    },
  },
  {
    src: '/images/gallery/placeholder-5.svg',
    alt: {
      es: 'Marcador: sustituir por una foto de un coctel',
      en: 'Placeholder — replace with a photo of a cocktail',
    },
  },
  {
    src: '/images/gallery/placeholder-6.svg',
    alt: {
      es: 'Marcador: sustituir por una foto del área exterior',
      en: 'Placeholder — replace with a photo of the outdoor seating',
    },
  },
];

/** The address on one line, for meta tags and the map link. */
export const formattedAddress = [
  restaurant.address.street,
  restaurant.address.locality,
  `${restaurant.address.region} ${restaurant.address.postalCode}`,
].join(', ');
