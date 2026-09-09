import Button from '../components/Button';
import useSEO from '../hooks/useSEO';

export default function NotFound() {
  useSEO(
    'Page Not Found | BRS Solution Enterprises',
    'The page you are looking for does not exist. Return to the BRS Solution Enterprises homepage.'
  );

  return (
    <section className="flex min-h-[70vh] items-center bg-brand-light">
      <div className="container-site py-16 text-center sm:py-20">
        <p className="text-7xl font-extrabold tracking-tight text-brand-gold sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 text-3xl font-extrabold text-brand-navy sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-brand-dark/70 sm:text-lg">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <div className="mt-8">
          <Button to="/" variant="primary">
            Back to Home
          </Button>
        </div>
      </div>
    </section>
  );
}
