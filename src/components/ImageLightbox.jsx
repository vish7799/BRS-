import { useEffect, useRef, useState } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight, FaMapMarkerAlt } from 'react-icons/fa';

export default function ImageLightbox({ project, onClose }) {
  const [index, setIndex] = useState(0);
  const closeRef = useRef(null);
  
  const images = project?.gallery || [];
  const total = images.length;

  // Handle keyboard events, scroll locking, and initial focus on mount
  useEffect(() => {
    // Focus the close button for accessibility
    closeRef.current?.focus();
    
    // Prevent background scrolling while overlay is open
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
      if (total > 1) {
        if (event.key === 'ArrowLeft') {
          setIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
        }
        if (event.key === 'ArrowRight') {
          setIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, total]);

  if (!project || total === 0) return null;

  const current = images[index];
  
  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const controlClasses =
    'inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-brand-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} image gallery`}
      className="fixed inset-0 z-[70] flex flex-col bg-brand-navy/95 backdrop-blur-sm"
    >
      {/* Lightbox Header */}
      <div className="container-site flex items-center justify-between py-4">
        <div className="min-w-0 text-white">
          <p className="truncate text-base font-bold sm:text-lg">{project.title}</p>
          <p className="flex items-center gap-1.5 text-xs text-white/70 sm:text-sm">
            <FaMapMarkerAlt className="h-3 w-3 text-brand-gold" aria-hidden="true" />
            {project.location}
          </p>
        </div>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close gallery"
          className={controlClasses}
        >
          <FaTimes className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      {/* Main Image Slider */}
      <div className="relative flex flex-1 items-center justify-center px-4 pb-4 sm:px-16">
        <img
          key={current.src + index}
          src={current.src}
          alt={current.alt}
          className="max-h-[70vh] w-auto max-w-full rounded-md object-contain shadow-2xl"
        />

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous image"
              className={`${controlClasses} absolute left-3 top-1/2 -translate-y-1/2 sm:left-6`}
            >
              <FaChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next image"
              className={`${controlClasses} absolute right-3 top-1/2 -translate-y-1/2 sm:right-6`}
            >
              <FaChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      {/* Slide Counter */}
      <div className="pb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
          {index + 1} / {total}
        </p>
      </div>
    </div>
  );
}
