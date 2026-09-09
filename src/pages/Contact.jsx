import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import useSEO from '../hooks/useSEO';
import { getWhatsAppUrl } from '../utils/site';
import labMetrology from '../assets/images/interiors/lab-metrology.jpg';

// Contact card configurations.
// TODO: Replace mock contact values (phone, email, and full physical address) with the client's official details before launch.
const contactCards = [
  {
    id: 'phone',
    icon: FaPhoneAlt,
    title: 'Phone',
    value: '+91-8447686691',
    note: 'Mon - Sat: 9:00 AM - 6:00 PM',
    href: 'tel:+918447686691',
    actionLabel: 'Call Now',
  },
  {
    id: 'email',
    icon: FaEnvelope,
    title: 'Email',
    value: 'brssolutions01@gmail.com',
    note: 'Response within 24 hours',
    href: 'mailto:brssolutions01@gmail.com',
    actionLabel: 'Send Email',
  },
  {
    id: 'whatsapp',
    icon: FaWhatsapp,
    title: 'WhatsApp',
    value: 'Chat with our team',
    note: 'Fastest way to reach us',
    href: getWhatsAppUrl(),
    actionLabel: 'Open WhatsApp',
  },
  {
    id: 'address',
    icon: FaMapMarkerAlt,
    title: 'Address',
    value: 'Millennium City Centre Gurgaon - Delhi Expy, Sector 29, Gurugram, Haryana 122007',
    note: 'Corporate Office',
    href: 'https://www.google.com/maps/search/?api=1&query=Millennium+City+Centre+Gurgaon+-+Delhi+Expy,+Sector+29,+Gurugram,+Haryana+122007',
    actionLabel: 'View on Maps',
  },
];

export default function Contact() {
  useSEO(
    'Contact Us | BRS Solution Enterprises',
    'Contact BRS Solution Enterprises for electrical, construction and interior solutions. Reach us by phone, email or WhatsApp.'
  );

  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Let's Build Something Great"
        description="Have a project requirement? Contact BRS Solution Enterprises for Electrical, Construction and Interior Solutions."
        image={labMetrology}
        imageAlt="Modern facility interior delivered by BRS Solution Enterprises"
      />

      <section className="section-padding bg-brand-light" aria-label="Contact details">
        <div className="container-site">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card, index) => (
              <Reveal key={card.id} delay={index * 0.08} className="h-full">
                <article className="flex h-full flex-col rounded-lg border border-brand-navy/10 bg-white p-6 text-center shadow-card transition-shadow duration-300 hover:shadow-card-hover">
                  <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-navy text-brand-gold">
                    <card.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h2 className="mt-4 text-lg font-bold text-brand-navy">{card.title}</h2>
                  {card.href ? (
                    <a
                      href={card.href}
                      target={card.href.startsWith('http') ? '_blank' : undefined}
                      rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="mt-2 break-words text-sm font-semibold text-brand-navy hover:text-brand-gold hover:underline transition-colors duration-200"
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p className="mt-2 break-words text-sm font-semibold text-brand-dark">
                      {card.value}
                    </p>
                  )}
                  <p className="mt-1 flex-1 text-xs text-brand-dark/50">{card.note}</p>
                  {card.href && (
                    <a
                      href={card.href}
                      target={card.href.startsWith('http') ? '_blank' : undefined}
                      rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="mt-4 inline-flex items-center justify-center rounded-md border border-brand-navy px-4 py-2 text-sm font-semibold text-brand-navy transition-colors duration-300 hover:bg-brand-navy hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2"
                    >
                      {card.actionLabel}
                    </a>
                  )}
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <div className="rounded-lg bg-brand-navy px-6 py-10 text-center sm:px-12 sm:py-14">
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                Prefer to Talk Directly?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
                Call us or start a WhatsApp chat — our team will get back to you to discuss
                your electrical, construction or interior project requirement.
              </p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
                <Button href="tel:+918447686691" variant="gold" aria-label="Call BRS Solution Enterprises">
                  <FaPhoneAlt className="h-4 w-4" aria-hidden="true" />
                  Call Now
                </Button>
                <Button
                  href={getWhatsAppUrl()}
                  variant="outline-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
