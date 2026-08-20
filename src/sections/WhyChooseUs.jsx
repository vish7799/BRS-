import {
  FaUserTie,
  FaAward,
  FaShieldAlt,
  FaClock,
  FaHandshake,
} from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import Reveal from '../components/Reveal';

const features = [
  {
    id: 'professional-team',
    icon: FaUserTie,
    title: 'Professional Team',
    description: 'Experienced engineers, supervisors and skilled technicians on every project.',
  },
  {
    id: 'quality-workmanship',
    icon: FaAward,
    title: 'Quality Workmanship',
    description: 'Premium materials and precise execution, checked at every stage of delivery.',
  },
  {
    id: 'safety-focused',
    icon: FaShieldAlt,
    title: 'Safety-Focused Execution',
    description: 'Strict safety standards and compliant practices across every work site.',
  },
  {
    id: 'timely-delivery',
    icon: FaClock,
    title: 'Timely Delivery',
    description: 'Disciplined planning and transparent scheduling that keeps projects on track.',
  },
  {
    id: 'client-centric',
    icon: FaHandshake,
    title: 'Client-Centric Approach',
    description: 'Clear communication and long-term relationships built on trust and reliability.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-brand-navy" aria-labelledby="why-brs-heading">
      <div className="container-site">
        <Reveal>
          <SectionTitle
            eyebrow="The BRS Advantage"
            title="Why Choose BRS"
            description="Every project we take on is backed by engineering discipline, accountable execution and genuine partnership."
            light
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-5 lg:gap-4">
          {features.map((feature, index) => (
            <Reveal key={feature.id} delay={index * 0.08} className="h-full">
              <article className="h-full rounded-lg border border-white/10 bg-white/5 p-6 transition-colors duration-300 hover:border-brand-gold/50 hover:bg-white/10">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-brand-gold text-brand-navy">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-bold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {feature.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
