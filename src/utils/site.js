export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '918447686691';

export const WHATSAPP_MESSAGE =
  'Hello BRS Solution Enterprises, I would like to discuss a project requirement.';

export function getWhatsAppUrl() {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}

export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];
