export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Nosotros',
    'nav.events': 'Eventos',
    'nav.contact': 'Contacto',
    'nav.login': 'Login Moodle',
    'footer.rights': 'Todos los derechos reservados',
    'footer.developed': 'Desarrollado por',
    // We will add more translations here as we extract them
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.events': 'Events',
    'nav.contact': 'Contact',
    'nav.login': 'Login Moodle',
    'footer.rights': 'All rights reserved',
    'footer.developed': 'Developed by',
  },
} as const;
