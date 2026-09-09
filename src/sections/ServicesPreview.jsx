import { FaBolt, FaHardHat, FaCouch } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import Reveal from '../components/Reveal';
import services from '../data/services';

const serviceIcons = {
  'electrical-solutions': FaBolt,
  'construction-solutions': FaHardHat,
  'interior-solutions': FaCouch,
};

export default function ServicesPreview() {
  return (
    <section className="section-padding bg-brand-light" aria-labelledby="services-preview-heading">
      <div className="container-site">
        <Reveal>
          <SectionTitle
            eyebrow="What We Do"
            title="Our Core Services"
            description="Three integrated disciplines — delivered by one accountable team, from first drawing to final handover."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:mt-16">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.1} className="h-full">
              <ServiceCard
                icon={serviceIcons[service.id]}
                title={service.title}
                // description={service.shortDescription}
                to={`/services#${service.id}`}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
