import { Link } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import Reveal from '../components/ui/Reveal';
import { images, values } from '../data/constants';

export default function About() {
  return (
    <main id="content">
      <PageHero
        kicker="About Tint Masters"
        title="Work you can see. Standards you can trust."
        copy="We bring tinting, branding and security under one roof, with a practical approach and careful finish."
      />

      <section className="section section-fog">
        <div className="shell intro-grid">
          <Reveal delay={0.05} className="intro-copy">
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
          </Reveal>
          <Reveal className="about-visual">
            <img src={images.team} alt="Tint Masters project work" />
            <img src={images.founder} alt="Tint Masters team at work" />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal className="section-heading">
            <p className="eyebrow">What guides us</p>
            <h2>Clear recommendations. Careful execution.</h2>
          </Reveal>
          <div className="values">
            {values.map(({ num, label, title, desc }, i) => (
              <Reveal as="article" key={title} delay={Math.min(i * 0.08, 0.3)} y={16} className="value">
                <b>{num} {label}</b>
                <h3>{title}</h3>
                <p>{desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Reveal as="section" className="cta-band">
        <div className="shell">
          <h2>Ready to improve your space?</h2>
          <Link className="button" to="/contact">Request a quote</Link>
        </div>
      </Reveal>
    </main>
  );
}