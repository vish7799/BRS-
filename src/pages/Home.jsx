import Hero from '../sections/Hero';
import AboutPreview from '../sections/AboutPreview';
import ServicesPreview from '../sections/ServicesPreview';
import WhyChooseUs from '../sections/WhyChooseUs';
import Industries from '../sections/Industries';
import ProjectsPreview from '../sections/ProjectsPreview';
import CTASection from '../sections/CTASection';
import useSEO from '../hooks/useSEO';

export default function Home() {
  useSEO(
    'BRS Solution Enterprises | Electrical, Construction & Interior Solutions',
    'BRS Solution Enterprises provides professional electrical, construction and interior solutions for industrial, commercial and residential projects.'
  );

  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <WhyChooseUs />
      <Industries />
      <ProjectsPreview />
      <CTASection />
    </>
  );
}
