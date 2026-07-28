import { Link } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import { images, values } from '../data/constants';

export default function About() {
  return (
    <>
      <PageHero
        kicker="About Tint Masters"
        title="Work you can see. Standards you can trust."
        copy="We bring tinting, branding and security under one roof, with a practical approach and careful finish."
      />

      <section className="section section-fog">
        <div className="shell intro-grid">
          <div className="intro-copy">
            <p className="eyebrow">Our approach</p>
            <h2>We solve the practical part, then refine the visible part.</h2>
            <p>
              Tint Masters Zimbabwe works with vehicle owners, homeowners and businesses that want a better result
              from the surfaces they use every day.
            </p>
            <p>
              That could be cooler cabin temperatures, a private meeting room, a branded fleet or a more secure entrance.
              The material and installation method change, but the standard stays the same.
            </p>
            <Link className="button button-primary" to="/contact">Talk to our team</Link>
          </div>
          <div className="about-visual">
            <img src={images.team} alt="Tint Masters project work" />
            <img src={images.founder} alt="Tint Masters team at work" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">What guides us</p>
            <h2>Clear recommendations. Careful execution.</h2>
          </div>
          <div className="values">
            {values.map(({ num, label, title, desc }) => (
              <article key={title} className="value">
                <b>{num} {label}</b>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="shell">
          <h2>Ready to improve your space?</h2>
          <Link className="button" to="/contact">Request a quote</Link>
        </div>
      </section>
    </>
  );
}