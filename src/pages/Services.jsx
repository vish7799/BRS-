import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import CTASection from '../sections/CTASection';
import useSEO from '../hooks/useSEO';
import services from '../data/services';
import electricalPanel from '../assets/images/electrical/electrical-panel.jpg';

export default function Services() {
  useSEO(
    'Our Services | BRS Solution Enterprises',
    'Explore BRS Solution Enterprises services — electrical installations, commercial and industrial construction, and turnkey interior solutions.'
  );

  const { hash } = useLocation();

  // Scroll to the targeted section if a hash fragment is present in the URL (e.g. /services#electrical-solutions)
  useEffect(() => {
    if (hash) {
      // Remove the '#' prefix to target the element's id
      const targetId = hash.slice(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [hash]);

  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Electrical, Construction & Interior Solutions"
        description="Integrated engineering services delivered by one accountable team — from power infrastructure to finished interiors."
        image={electricalPanel}
        imageAlt="Electrical installations by BRS Solution Enterprises"
      />

      <section className="section-padding bg-white" aria-label="Detailed services">
        <div className="container-site space-y-16 lg:space-y-24">
          {services.map((service, index) => {
            const isReversed = index % 2 === 1;
            return (
              <article
                key={service.id}
                id={service.id}
                className="grid scroll-mt-24 grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <Reveal className={isReversed ? 'lg:order-2' : ''}>
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    loading="lazy"
                    className="aspect-[4/3] w-full rounded-lg object-cover object-center shadow-card"
                  />
                </Reveal>

                <Reveal delay={0.1} className={isReversed ? 'lg:order-1' : ''}>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold sm:text-sm">
                      {`0${index + 1} — Service`}
                    </p>
                    <h2 className="mt-3 text-2xl font-extrabold text-brand-navy sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-brand-dark/70 sm:text-lg">
                      {service.description}
                    </p>

                    <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <FaCheckCircle
                            className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold"
                            aria-hidden="true"
                          />
                          <span className="text-sm font-medium text-brand-dark sm:text-base">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8">
                      <Button to="/contact" variant="primary">
                        Discuss Your Requirement
                        <FaArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Button>
                    </div>
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
}
