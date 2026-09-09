import SectionTitle from '../components/SectionTitle';
import Reveal from '../components/Reveal';
import industries from '../data/industries';

export default function Industries() {
  return (
    <section className="section-padding bg-white" aria-labelledby="industries-heading">
      <div className="container-site">
        <Reveal>
          <SectionTitle
            eyebrow="Where We Work"
            title="Industries We Serve"
            description="Proven capability across industrial, commercial and institutional environments."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-16 lg:grid-cols-4 lg:gap-5">
          {industries.map((industry, index) => (
            <Reveal key={industry.id} delay={(index % 4) * 0.06}>
              <article className="flex h-full flex-col items-center rounded-lg border border-brand-navy/10 bg-brand-light px-4 py-6 text-center transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand-gold/60 hover:bg-white hover:shadow-card-hover">
                <industry.icon className="h-8 w-8 text-brand-gold" aria-hidden="true" />
                <h3 className="mt-3 text-sm font-bold text-brand-navy sm:text-base">
                  {industry.name}
                </h3>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
