/**
 * Interface copy in both languages. Restaurant content (menu, hours, story)
 * lives in `src/data/restaurant.ts` instead.
 *
 * Both objects must have exactly the same keys — `Ui` is derived from the
 * Spanish table, so a missing English key is a type error.
 */

import type { DayKey, Locale, TagKey } from './types';

const es = {
  // Language names, shown in the chooser and the header toggle.
  langName: 'Español',
  langNameOther: 'English',
  switchToOther: 'Switch to English',

  chooserTitle: '¿En qué idioma prefieres ver la página?',
  chooserSubtitle: 'Choose your language',
  chooserSpanish: 'Español',
  chooserEnglish: 'English',

  navMenu: 'Menú',
  navGallery: 'Galería',
  navVisit: 'Visítanos',
  navBook: 'Reservar',
  navAriaLabel: 'Navegación principal',
  navToggle: 'Abrir menú',
  skipToContent: 'Saltar al contenido',

  heroBook: 'Reservar mesa',
  heroMenu: 'Ver el menú',

  aboutEyebrow: 'Nuestra historia',
  aboutTitle: 'Sobre ROMBO',

  menuEyebrow: 'Lo que cocinamos',
  menuTitle: 'Menú',
  menuIntro:
    'El menú cambia con la pesca del día, así que algún plato puede variar ' +
    'entre tu visita y esta página. Avísanos de cualquier alergia y lo ' +
    'ajustamos.',

  galleryEyebrow: 'Por dentro',
  galleryTitle: 'Galería',
  galleryIntro: 'El fuego, la barra y la gente que lo hace posible.',

  visitEyebrow: 'Encuéntranos',
  visitTitle: 'Visítanos',
  visitIntro:
    'Estamos en Dorado, a un paso de la playa. Aceptamos walk-ins; para ' +
    'mesa reservada, escríbenos abajo.',
  visitHours: 'Horario',
  visitHoursCaption: 'Horario de apertura por día',
  visitAddress: 'Dirección',
  visitDirections: 'Cómo llegar',
  visitClosed: 'Cerrado',
  visitToday: 'Hoy',
  visitFollow: 'Síguenos',
  mapMissingTitle: 'El mapa aún no está configurado.',
  mapMissingBody:
    'Añade una URL de Google Maps en mapEmbedUrl dentro de ' +
    'src/data/restaurant.ts para mostrar el mapa aquí.',

  bookEyebrow: 'Reservas',
  bookTitle: 'Reservar mesa',
  bookIntro:
    'Envíanos una solicitud y te confirmamos. Para el mismo día o grupos de ' +
    'más de seis personas, escríbenos por Instagram.',
  bookNotConfiguredTitle: 'El formulario aún no está conectado.',
  bookNotConfiguredBody:
    'Crea un formulario gratuito en formspree.io y pega el endpoint en ' +
    'reservationEndpoint dentro de src/data/restaurant.ts. Mientras tanto, ' +
    'las reservas se pueden hacer por Instagram.',
  fieldName: 'Nombre',
  fieldEmail: 'Correo electrónico',
  fieldPhone: 'Teléfono',
  fieldGuests: 'Personas',
  fieldGuestsMax: '8 o más',
  fieldDate: 'Fecha',
  fieldTime: 'Hora',
  fieldNotes: '¿Algo que debamos saber?',
  fieldNotesPlaceholder: 'Alergias, silla para niños, alguna celebración…',
  fieldOptional: '(opcional)',
  fieldCompany: 'Empresa',
  bookSubmit: 'Enviar solicitud',
  bookSending: 'Enviando tu solicitud…',
  bookSuccess: 'Gracias — recibimos tu solicitud. Te confirmamos en breve.',
  bookErrorServer:
    'Algo salió mal al enviar. Escríbenos por Instagram y lo resolvemos.',
  bookErrorNetwork:
    'No pudimos conectar con el servicio de reservas. Escríbenos por Instagram.',

  footerRights: 'Todos los derechos reservados.',
  socialLabel: 'Redes sociales',

  notFoundTitle: 'No encontramos esa página',
  notFoundBody:
    'Puede que el enlace esté desactualizado. Vuelve al inicio para ver el ' +
    'menú, el horario y las reservas.',
  notFoundBack: 'Volver al inicio',

  metaTitleSuffix: 'Asador Playero · Dorado, Puerto Rico',
};

/** Every key in `es` must also exist in `en`. */
export type Ui = typeof es;

const en: Ui = {
  langName: 'English',
  langNameOther: 'Español',
  switchToOther: 'Ver en español',

  chooserTitle: 'Which language would you like?',
  chooserSubtitle: 'Elige tu idioma',
  chooserSpanish: 'Español',
  chooserEnglish: 'English',

  navMenu: 'Menu',
  navGallery: 'Gallery',
  navVisit: 'Visit',
  navBook: 'Book a table',
  navAriaLabel: 'Main navigation',
  navToggle: 'Open menu',
  skipToContent: 'Skip to content',

  heroBook: 'Book a table',
  heroMenu: 'See the menu',

  aboutEyebrow: 'Our story',
  aboutTitle: 'About ROMBO',

  menuEyebrow: 'What we cook',
  menuTitle: 'Menu',
  menuIntro:
    'The menu follows the day’s catch, so a dish or two may change between ' +
    'your visit and this page. Tell us about any allergies and we’ll work ' +
    'around them.',

  galleryEyebrow: 'A look inside',
  galleryTitle: 'Gallery',
  galleryIntro: 'The fire, the bar, and the people who make it happen.',

  visitEyebrow: 'Find us',
  visitTitle: 'Visit',
  visitIntro:
    'We’re in Dorado, a short walk from the beach. Walk-ins are welcome; ' +
    'for a reserved table, send us a request below.',
  visitHours: 'Opening hours',
  visitHoursCaption: 'Opening hours by day',
  visitAddress: 'Address',
  visitDirections: 'Get directions',
  visitClosed: 'Closed',
  visitToday: 'Today',
  visitFollow: 'Follow us',
  mapMissingTitle: 'The map isn’t set up yet.',
  mapMissingBody:
    'Add a Google Maps embed URL to mapEmbedUrl in ' +
    'src/data/restaurant.ts to show the map here.',

  bookEyebrow: 'Reservations',
  bookTitle: 'Book a table',
  bookIntro:
    'Send us a request and we’ll confirm. For same-day bookings or parties ' +
    'over six, message us on Instagram.',
  bookNotConfiguredTitle: 'The form isn’t connected yet.',
  bookNotConfiguredBody:
    'Create a free form at formspree.io and paste the endpoint into ' +
    'reservationEndpoint in src/data/restaurant.ts. Until then, guests can ' +
    'book through Instagram.',
  fieldName: 'Name',
  fieldEmail: 'Email',
  fieldPhone: 'Phone',
  fieldGuests: 'Guests',
  fieldGuestsMax: '8 or more',
  fieldDate: 'Date',
  fieldTime: 'Time',
  fieldNotes: 'Anything we should know?',
  fieldNotesPlaceholder: 'Allergies, high chair, celebrating something…',
  fieldOptional: '(optional)',
  fieldCompany: 'Company',
  bookSubmit: 'Request a table',
  bookSending: 'Sending your request…',
  bookSuccess: 'Thank you — your request is in. We’ll confirm shortly.',
  bookErrorServer:
    'Something went wrong sending that. Message us on Instagram instead.',
  bookErrorNetwork:
    'We couldn’t reach the booking service. Message us on Instagram instead.',

  footerRights: 'All rights reserved.',
  socialLabel: 'Social media',

  notFoundTitle: 'We couldn’t find that page',
  notFoundBody:
    'The link may be out of date. Head back to the homepage for the menu, ' +
    'opening hours and bookings.',
  notFoundBack: 'Back to the homepage',

  metaTitleSuffix: 'Asador Playero · Dorado, Puerto Rico',
};

export const ui: Record<Locale, Ui> = { es, en };

export const dayNames: Record<Locale, Record<DayKey, string>> = {
  es: {
    monday: 'Lunes',
    tuesday: 'Martes',
    wednesday: 'Miércoles',
    thursday: 'Jueves',
    friday: 'Viernes',
    saturday: 'Sábado',
    sunday: 'Domingo',
  },
  en: {
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday',
  },
};

export const tagNames: Record<Locale, Record<TagKey, string>> = {
  es: {
    vegetarian: 'Vegetariano',
    vegan: 'Vegano',
    glutenFree: 'Sin gluten',
    raw: 'Crudo',
    spicy: 'Picante',
    signature: 'De la casa',
  },
  en: {
    vegetarian: 'Vegetarian',
    vegan: 'Vegan',
    glutenFree: 'Gluten free',
    raw: 'Raw',
    spicy: 'Spicy',
    signature: 'Signature',
  },
};
