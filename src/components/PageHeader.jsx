import Reveal from './Reveal';
import { Link } from 'react-router-dom';

export default function PageHeader({ eyebrow, title, description, image, imageAlt }) {
  return (
    <section className="relative overflow-hidden bg-brand-navy">
      {image && (
        <>
          <img
            src={image}
            alt={imageAlt || ''}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/85 to-brand-navy/60"
          />
        </>
      )}
      <div className="container-site relative py-16 sm:py-20 lg:py-28">
        <Reveal>
          {eyebrow && (
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold sm:text-sm">
              {eyebrow}
            </p>
          )}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="block w-fit rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            aria-label="Return to BRS Solution Enterprises home page"
          >
            <h1 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight text-white transition-colors hover:text-brand-gold sm:text-4xl lg:text-5xl">
              {title}
            </h1>
          </Link>
          {description && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
