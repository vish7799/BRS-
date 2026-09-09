import { FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import { getWhatsAppUrl } from '../utils/site';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-brand-navy" aria-labelledby="cta-heading">
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-gold/10"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-brand-gold/5"
      />

      <div className="container-site relative py-16 sm:py-20">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold sm:text-sm">
              Start Your Project
            </p>
            <h2
              id="cta-heading"
              className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl"
            >
              Let&apos;s Build Something Great
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
              Have a project requirement? Contact BRS Solution Enterprises for Electrical,
              Construction and Interior Solutions.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <Button to="/contact" variant="gold">
                Get in Touch
                <FaArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Button>
              <Button
                href={getWhatsAppUrl()}
                variant="outline-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
