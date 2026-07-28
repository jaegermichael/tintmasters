import PageHero from '../components/ui/PageHero';
import { serviceData } from '../data/constants';

export default function Services() {
  return (
    <>
      <PageHero
        kicker="Our services"
        title="The right finish for the way you work."
        copy="Six core services for vehicles, buildings and business premises. Tell us the outcome you need, and we will help shape the right route."
      />
      <section className="section">
        <div className="shell">
          {serviceData.map(([title, text, image]) => (
            <article key={title} className="service-detail">
              <img src={image} alt={title} loading="lazy" />
              <div>
                <p className="eyebrow">Tint Masters service</p>
                <h2>{title}</h2>
                <p>{text}</p>
                <a className="button button-primary" href={`/contact?service=${encodeURIComponent(title)}`}>
                  Ask about this service
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}