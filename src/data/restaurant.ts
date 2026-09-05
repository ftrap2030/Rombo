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
  /** Dish name. Kept in Spanish in both languages — these are the real names. */
  name: string;
  description: Translated;
  /**
   * Display string including the currency symbol, e.g. "$18".
   * Leave empty to hide the price for that item.
   */
  price: string;
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
      'toma nada demasiado en serio. El menú cambia con lo que entra del mar ' +
      'cada día, así que espera una lista corta y alguna que otra sorpresa. ' +
      'Aceptamos walk-ins y también puedes reservar.',
    en:
      'ROMBO is a beachside asador: live fire, local seafood, and a bar that ' +
      'refuses to take itself too seriously. The menu moves with whatever ' +
      'comes in off the water each day, so expect a short list and the odd ' +
      'surprise. Walk-ins are welcome, and you can also book ahead.',
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

/** Shown under the hours table. */
export const hoursNote: Translated = {
  es: 'La cocina cierra a las 10:00 pm. La barra sigue hasta las 11:00 pm.',
  en: 'The kitchen closes at 10:00 pm. The bar keeps going until 11:00 pm.',
};

// -----------------------------------------------------------------------------
// MENU — dish names below are real (confirmed from listings and reviews), but
// PRICES ARE NOT SET. Add the real prices in `price`, and add or remove dishes
// to match the current menu. An empty `price` simply renders no price.
// -----------------------------------------------------------------------------

export const menu: MenuSection[] = [
  {
    title: { es: 'Aperitivos', en: 'To start' },
    description: {
      es: 'Para picar y compartir.',
      en: 'Small plates, made to share.',
    },
    items: [
      {
        name: 'Ceviche de chillo fresco',
        description: {
          es: 'Chillo del día, leche de tigre, cebolla morada, cilantro.',
          en: 'Day-boat snapper, leche de tigre, red onion, cilantro.',
        },
        price: '',
        tags: ['raw', 'glutenFree'],
      },
      {
        name: 'Ceviche de dorado',
        description: {
          es: 'Dorado local curado en cítricos, ají y maíz tostado.',
          en: 'Local mahi cured in citrus, chilli and toasted corn.',
        },
        price: '',
        tags: ['raw', 'glutenFree'],
      },
      {
        name: 'Ensalada de mariscos',
        description: {
          es: 'Mariscos marinados, cítricos y aceite de oliva.',
          en: 'Marinated seafood, citrus and olive oil.',
        },
        price: '',
        tags: ['glutenFree'],
      },
      {
        name: 'Empanadillas de pesca',
        description: {
          es: 'Rellenas con la pesca del día.',
          en: 'Turnovers filled with the day’s catch.',
        },
        price: '',
      },
    ],
  },
  {
    title: { es: 'Del asador', en: 'From the grill' },
    description: {
      es: 'Todo sobre fuego vivo.',
      en: 'Everything over live fire.',
    },
    items: [
      {
        name: 'Filete de dorado',
        description: {
          es: 'A la parrilla, con guarnición del día.',
          en: 'Grilled, with the side of the day.',
        },
        price: '',
        tags: ['glutenFree'],
      },
      {
        name: 'Chillo entero',
        description: {
          es: 'Chillo fresco al fuego, según disponibilidad.',
          en: 'Whole fresh snapper on the fire, subject to the catch.',
        },
        price: '',
        tags: ['glutenFree'],
      },
      {
        name: 'Pincho de tiburón',
        description: {
          es: 'Marinado y asado a la brasa.',
          en: 'Marinated and flame-grilled skewer.',
        },
        price: '',
      },
      {
        name: 'Pork belly',
        description: {
          es: 'Sobre escabeche de gandules.',
          en: 'Over a pigeon pea escabeche.',
        },
        price: '',
      },
      {
        name: 'Carne ahumada',
        description: {
          es: 'Ahumada en casa, a fuego lento.',
          en: 'Smoked in house, low and slow.',
        },
        price: '',
      },
      {
        name: 'Carne frita con tostones',
        description: {
          es: 'Clásico de la casa, con tostones.',
          en: 'A house classic, served with tostones.',
        },
        price: '',
      },
    ],
  },
  {
    title: { es: 'Tacos', en: 'Tacos' },
    items: [
      {
        name: 'Tacos de dorado',
        description: {
          es: 'Dorado local en batter de cerveza, repollo y salsa de la casa.',
          en: 'Beer-battered local mahi, cabbage and house sauce.',
        },
        price: '',
      },
      {
        name: 'Tacos al pastor',
        description: {
          es: 'Cerdo al pastor, piña y cilantro.',
          en: 'Al pastor pork, pineapple and cilantro.',
        },
        price: '',
      },
    ],
  },
  {
    title: { es: 'Barra', en: 'Bar' },
    description: {
      es: 'Coctelería de autor, ron local y mezcal.',
      en: 'Craft cocktails, local rum and mezcal.',
    },
    items: [
      {
        name: 'Coctelería de autor',
        description: {
          es: 'Pregunta por la carta de la barra — cambia con frecuencia.',
          en: 'Ask for the bar list — it changes often.',
        },
        price: '',
        tags: ['signature'],
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
