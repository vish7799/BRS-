import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import ImageLightbox from '../components/ImageLightbox';
import Reveal from '../components/Reveal';
import CTASection from '../sections/CTASection';
import useSEO from '../hooks/useSEO';
import projects from '../data/projects';
import restaurantInterior from '../assets/images/interiors/restaurant-interior.jpg';

export default function Projects() {
  useSEO(
    'Our Projects | BRS Solution Enterprises',
    'View the BRS Solution Enterprises project portfolio — restaurants, warehouses, factories, showrooms and commercial facilities across India.'
  );  

  const [activeProject, setActiveProject] = useState(null);

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Projects That Speak for Our Work"
        description="Restaurants, warehouses, manufacturing facilities and commercial spaces — engineered and delivered by BRS."
        image={restaurantInterior}
        imageAlt="Premium restaurant interior completed by BRS Solution Enterprises"
      />

      <section className="section-padding bg-brand-light" aria-label="Project portfolio">
        <div className="container-site">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.id} delay={(index % 3) * 0.1}>
                <ProjectCard project={project} onView={setActiveProject} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      {activeProject && (
        <ImageLightbox project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </>
  );
}
