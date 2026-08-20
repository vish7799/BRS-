import { FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

export default function ProjectCard({ project, onView }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-brand-navy/10 bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover">
      <button
        type="button"
        onClick={() => onView(project)}
        className="relative block w-full overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-inset"
        aria-label={`View gallery for ${project.title}, ${project.location}`}
      >
        <img
          src={project.coverImage}
          alt={project.coverAlt}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-brand-navy/0 transition-colors duration-300 group-hover:bg-brand-navy/20"
        />
        <span className="absolute left-4 top-4 rounded-full bg-brand-navy/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-gold">
          {project.category}
        </span>
      </button>

      <div className="p-5 sm:p-6">
        <h3 className="text-lg font-bold text-brand-navy">{project.title}</h3>
        <p className="mt-1.5 flex items-center gap-2 text-sm text-brand-dark/60">
          <FaMapMarkerAlt className="h-3.5 w-3.5 shrink-0 text-brand-gold" aria-hidden="true" />
          {project.location}
        </p>
        <button
          type="button"
          onClick={() => onView(project)}
          className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-navy transition-colors duration-200 hover:text-brand-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm"
        >
          View Project
          <FaArrowRight
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </button>
      </div>
    </article>
  );
}
