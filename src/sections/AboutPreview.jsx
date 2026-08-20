import { Link } from 'react-router-dom';
import { FaBolt, FaHardHat, FaCouch, FaArrowRight } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import Reveal from '../components/Reveal';

const pillars = [
  {
    id: 'electrical',
    icon: FaBolt,
    title: 'Electrical',
    description:
      'HT/LT installations, power distribution, panels and complete industrial electrification executed to the highest safety standards.',
    to: '/services#electrical-solutions',
  },
  {
    id: 'construction',
    icon: FaHardHat,
    title: 'Construction',
    description:
      'Commercial, industrial and warehouse construction with dependable civil and structural execution, delivered on schedule.',
    to: '/services#construction-solutions',
  },
  {
    id: 'interior',
    icon: FaCouch,
    title: 'Interior',
    description:
      'Turnkey office, retail and commercial interiors — from electrical fit-outs and false ceilings to complete lighting solutions.',
    to: '/services#interior-solutions',
  },
];

export default function AboutPreview() {
  return (
    <section className="section-padding bg-white" aria-labelledby="home-intro-heading">
      <div className="container-site">
        <Reveal>
          <SectionTitle
            eyebrow="Who We Are"
            title="Engineering Solutions Built Around Quality"
            description="BRS Solution Enterprises is a professional Electrical, Construction and Interior Solutions company providing reliable, quality-driven services for commercial, industrial and residential projects across India."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 lg:mt-16">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.id} delay={index * 0.1}>
              <article className="group h-full rounded-lg border border-brand-navy/10 bg-brand-light p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white hover:shadow-card-hover sm:p-8">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-md bg-brand-navy text-brand-gold transition-colors duration-300 group-hover:bg-brand-gold group-hover:text-white">
                  <pillar.icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-brand-navy">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-dark/70 sm:text-base">
                  {pillar.description}
                </p>
                {/* <Link
                  to={pillar.to}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-navy transition-colors duration-200 hover:text-brand-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm w-fit"
                  aria-label={`Explore ${pillar.title} solutions`}
                >
                  Explore
                  <FaArrowRight
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link> */}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
