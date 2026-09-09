import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import ImageLightbox from '../components/ImageLightbox';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import projects from '../data/projects';

export default function ProjectsPreview() {
  const [activeProject, setActiveProject] = useState(null);
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="section-padding bg-brand-light" aria-labelledby="projects-preview-heading">
      <div className="container-site">
        <Reveal>
          <SectionTitle
            eyebrow="Our Work"
            title="Featured Projects"
            description="A selection of recent electrical, construction and interior projects delivered by the BRS team."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:mt-16">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.1}>
              <ProjectCard project={project} onView={setActiveProject} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center lg:mt-12">
          <Button to="/projects" variant="outline">
            View All Projects
            <FaArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Button>
        </Reveal>
      </div>

      {activeProject && (
        <ImageLightbox project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  );
}
