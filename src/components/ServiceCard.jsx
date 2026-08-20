import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

export default function ServiceCard({ icon: Icon, title, description, to }) {
  return (
    <article className="group flex h-full flex-col rounded-lg border border-brand-navy/10 bg-white p-6 shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand-gold/60 hover:shadow-card-hover sm:p-8">
      <div className="inline-flex h-14 w-14 items-center justify-center rounded-md bg-brand-navy text-brand-gold transition-colors duration-300 group-hover:bg-brand-gold group-hover:text-white">
        <Icon className="h-7 w-7" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-xl font-bold text-brand-navy">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-dark/70 sm:text-base">
        {description}
      </p>
      <Link
        to={to}
        className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-navy transition-colors duration-200 hover:text-brand-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm w-fit"
        aria-label={`Learn more about ${title}`}
      >
        Learn More
        <FaArrowRight
          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </Link>
    </article>
  );
}
