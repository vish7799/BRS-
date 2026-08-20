import { FaArrowRight } from 'react-icons/fa';
import Button from '../components/Button';
import heroImage from '../assets/images/construction/factory-bay.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-brand-navy">
      <img
        src={heroImage}
        alt="Industrial facility engineered by BRS Solution Enterprises"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/75 to-brand-navy/40"
      />

      <div className="container-site relative flex min-h-[80vh] items-center py-20">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-brand-navy/50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
            Electrical · Construction · Interiors
          </p>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Powering Buildings.
            <span className="mt-1 block text-brand-gold">Building Futures.</span>
          </h1>
          <p className="mt-5 text-lg font-semibold text-white/90 sm:text-xl">
            Electrical, Construction &amp; Interior Solutions
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            BRS Solution Enterprises delivers quality-driven engineering, construction and
            interior solutions for industrial, commercial and residential projects.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button to="/services" variant="gold">
              Explore Services
              <FaArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Button>
            <Button to="/projects" variant="outline-light">
              View Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
