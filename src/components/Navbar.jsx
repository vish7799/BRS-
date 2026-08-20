import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/images/logo/brs-logo.jpg';
import { NAV_LINKS } from '../utils/site';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Shrink or shadow the header once the page scrolls past a threshold
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll(); // check scroll on mount
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Lock scrolling on the document body when mobile overlay menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const handleBrandClick = () => {
    closeMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const linkClasses = ({ isActive }) =>
    `relative px-1 py-2 text-sm font-semibold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm ${
      isActive
        ? 'text-brand-gold after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-brand-gold'
        : 'text-brand-dark hover:text-brand-navy'
    }`;

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        isScrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <nav
        className="container-site flex h-16 items-center justify-between sm:h-20"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          onClick={handleBrandClick}
          className="flex items-center gap-3 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
          aria-label="BRS Solution Enterprises — Home"
        >
          <img
            src={logo}
            alt="BRS Solution Enterprises logo"
            className="h-10 w-10 rounded-full object-cover ring-1 ring-brand-navy/10 sm:h-12 sm:w-12"
          />
          <span className="leading-tight">
            <span className="block text-lg font-extrabold tracking-wide text-brand-navy sm:text-xl">
              BRS
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-gold sm:text-xs">
              Solution Enterprises
            </span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-6 lg:flex lg:gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClasses} end={link.to === '/'}>
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              className="ml-2 inline-flex items-center rounded-md bg-brand-gold px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-brand-gold/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2"
            >
              Get in Touch
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-brand-navy transition-colors hover:bg-brand-light focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden bg-white transition-[max-height] duration-300 ease-out lg:hidden ${
          isOpen ? 'max-h-96 border-t border-brand-navy/10 shadow-lg' : 'max-h-0'
        }`}
      >
        <ul className="container-site flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block rounded-md px-4 py-3 text-sm font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold ${
                    isActive
                      ? 'bg-brand-navy text-white'
                      : 'text-brand-dark hover:bg-brand-light'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="pt-2">
            <Link
              to="/contact"
              onClick={closeMenu}
              className="block rounded-md bg-brand-gold px-4 py-3 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-gold/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy"
            >
              Get in Touch
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
