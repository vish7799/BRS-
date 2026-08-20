import { FaEye, FaBullseye } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';
import Reveal from '../components/Reveal';
import WhyChooseUs from '../sections/WhyChooseUs';
import CTASection from '../sections/CTASection';
import useSEO from '../hooks/useSEO';
import restaurantMural from '../assets/images/interiors/restaurant-mural.jpg';
import labMetrology from '../assets/images/interiors/lab-metrology.jpg';
import warehouseExterior from '../assets/images/construction/warehouse-exterior.jpg';
import electricalPanel from '../assets/images/electrical/electrical-panel.jpg';

const values = [
  {
    id: 'vision',
    icon: FaEye,
    title: 'Our Vision',
    description:
      'To become one of India\u2019s trusted engineering and construction companies and deliver quality-driven infrastructure solutions.',
  },
  {
    id: 'mission',
    icon: FaBullseye,
    title: 'Our Mission',
    description:
      'Deliver high-quality engineering solutions with strong safety standards, timely execution, and long-term client relationships.',
  },
];

const galleryImages = [
  {
    src: restaurantMural,
    alt: 'Restaurant interior with traditional feature wall executed by BRS',
  },
  {
    src: labMetrology,
    alt: 'Precision laboratory fit-out delivered by BRS Solution Enterprises',
  },
  {
    src: warehouseExterior,
    alt: 'Industrial warehouse building constructed by BRS Solution Enterprises',
  },
  {
    src: electricalPanel,
    alt: 'Electrical control panel installation by BRS Solution Enterprises',
  },
];

export default function About() {
  useSEO(
    'About Us | BRS Solution Enterprises',
    'Learn about BRS Solution Enterprises — a professional electrical, construction and interior solutions company serving commercial, industrial and residential projects.'
  );

  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="About BRS Solution Enterprises"
        description="A professional engineering company built on quality, safety and trust."
        image={warehouseExterior}
        imageAlt="Industrial facility constructed by BRS Solution Enterprises"
      />

      <section className="section-padding bg-white" aria-labelledby="about-story-heading">
        <div className="container-site grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <SectionTitle
                align="left"
                eyebrow="Who We Are"
                title="Reliable Engineering. Professional Execution."
              />
              <p className="mt-6 text-base leading-relaxed text-brand-dark/70 sm:text-lg">
                BRS Solution Enterprises is a professional Electrical, Construction and Interior
                Solutions company providing reliable and quality services for commercial,
                industrial and residential projects.
              </p>
              <p className="mt-4 text-base leading-relaxed text-brand-dark/70 sm:text-lg">
                From large-scale warehouses and manufacturing facilities to premium restaurant
                and commercial interiors, our team delivers every project with disciplined
                planning, safety-focused execution and premium workmanship.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {galleryImages.map((image) => (
                <img
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-lg object-cover object-center shadow-card"
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-brand-light" aria-labelledby="vision-mission-heading">
        <div className="container-site">
          <Reveal>
            <SectionTitle
              eyebrow="What Drives Us"
              title="Vision & Mission"
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-16">
            {values.map((value, index) => (
              <Reveal key={value.id} delay={index * 0.1} className="h-full">
                <article className="h-full rounded-lg border border-brand-navy/10 bg-white p-6 shadow-card sm:p-10">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-md bg-brand-navy text-brand-gold">
                    <value.icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-brand-navy sm:text-2xl">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-brand-dark/70">
                    {value.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <CTASection />
    </>
  );
}
