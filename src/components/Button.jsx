import { Link } from 'react-router-dom';

// Tailwind style variants for primary, secondary gold, and outline themes
const variants = {
  primary: 'bg-brand-navy text-white hover:bg-brand-navy/90',
  gold: 'bg-brand-gold text-white hover:bg-brand-gold/90',
  outline:
    'border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white',
  'outline-light':
    'border border-white/70 text-white hover:bg-white hover:text-brand-navy',
};

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2';

/**
 * Polymorphic Button Component
 * - Automatically renders a React Router <Link> if 'to' prop is provided
 * - Renders a standard anchor tag <a> if 'href' prop is provided
 * - Defaults to a standard HTML <button> otherwise
 */
export default function Button({ to, href, variant = 'primary', className = '', children, ...rest }) {
  const classes = `${baseClasses} ${variants[variant] || variants.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
