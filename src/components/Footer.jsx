import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../assets/images/logo/brs-logo.jpg';
import { NAV_LINKS } from '../utils/site';
import services from '../data/services';

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="container-site grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="BRS Solution Enterprises logo"
              className="h-12 w-12 rounded-full object-cover ring-1 ring-white/20"
              loading="lazy"
            />
            <span className="leading-tight">
              <span className="block text-lg font-extrabold tracking-wide">BRS</span>
              <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">
                Solution Enterprises
              </span>
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            A professional Electrical, Construction and Interior Solutions company delivering
            reliable, quality-driven services for commercial, industrial and residential
            projects.
          </p>
          <p className="mt-4 text-sm font-semibold text-brand-gold">
            Powering Buildings, Building Futures.
          </p>
        </div>

        <nav aria-label="Footer quick links">
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-brand-gold">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-white/70 transition-colors duration-200 hover:text-brand-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer services">
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-brand-gold">
            Services
          </h3>
          <ul className="mt-5 space-y-3">
            {services.map((service) => (
              <li key={service.id}>
                <Link
                  to={`/services#${service.id}`}
                  className="text-sm text-white/70 transition-colors duration-200 hover:text-brand-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-brand-gold">
            Contact
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <FaPhoneAlt className="mt-1 h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
              <span>
                <a
                  href="tel:+918447686691"
                  className="hover:text-brand-gold transition-colors duration-200"
                >
                  +91-8447686691
                </a>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaEnvelope className="mt-1 h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
              <span>
                <a
                  href="mailto:brssolutions01@gmail.com"
                  className="hover:text-brand-gold transition-colors duration-200"
                >
                  brssolutions01@gmail.com
                </a>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
              <span className="leading-relaxed">
                Millennium City Centre Gurgaon - Delhi Expy, Sector 29, Gurugram, Haryana 122007
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-2 py-5 text-center text-xs text-white/60 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} BRS Solution Enterprises. All rights reserved.</p>
          <p>Electrical · Construction · Interior Solutions</p>
        </div>
      </div>
    </footer>
  );
}
