export default function SectionTitle({ eyebrow, title, description, align = 'center', light = false }) {
  const alignClasses = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl ${alignClasses}`}>
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold sm:text-sm">
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-3 text-3xl font-extrabold leading-tight sm:text-4xl ${
          light ? 'text-white' : 'text-brand-navy'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? 'text-white/80' : 'text-brand-dark/70'
          }`}
        >
          {description}
        </p>
      )}
      <span
        aria-hidden="true"
        className={`mt-5 block h-1 w-16 rounded-full bg-brand-gold ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
    </div>
  );
}
