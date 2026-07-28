import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

const images = {
  tint: 'https://tintmasters.co.zw/wp-content/uploads/2025/04/Tint-masters-tinting-.jpg',
  frost: 'https://tintmasters.co.zw/wp-content/uploads/2025/04/IMG-20250408-WA0091.jpg',
  building: 'https://tintmasters.co.zw/wp-content/uploads/2025/04/IMG-20250408-WA0080.jpg',
  gate: 'https://tintmasters.co.zw/wp-content/uploads/2025/04/m100-2-sliding-gate-opener-1000x1000-1.jpg',
  signage: 'https://tintmasters.co.zw/wp-content/uploads/2025/04/drew-beamer-bSEyq0LR2mk-unsplash-scaled.jpg',
  wrap: 'https://tintmasters.co.zw/wp-content/uploads/2025/04/IMG-20250409-WA0121.jpg',
  team: 'https://tintmasters.co.zw/wp-content/uploads/2025/04/IMG-20250408-WA0099.jpg',
  founder: 'https://tintmasters.co.zw/wp-content/uploads/2025/04/IMG-20250409-WA0118.jpg'
};

const phone = '+263 78 422 7110';
const tel = '+263784227110';

const serviceCards = [
  ['Automotive tinting', 'Ceramic tint options for comfort, privacy and a refined finish.', images.tint],
  ['Window frosting', 'Privacy that still lets the light work.', images.frost],
  ['Building tinting', 'Residential and commercial window solutions.', images.building],
  ['Gates and CCTV', 'Stronger access control for the spaces that matter.', images.gate],
  ['Signage', 'Clear, practical signs that do their job.', images.signage],
  ['Vehicle branding', 'Put your business in motion.', images.wrap]
];

export default function Home() {
  const [reveal, setReveal] = useState(57);
  const tintStageRef = useRef(null);

  useEffect(() => {
    if (tintStageRef.current) {
      tintStageRef.current.style.setProperty('--reveal', `${reveal}%`);
    }
  }, [reveal]);

  return (
    <main id="content">
      <section className="hero">
        <div className="shell hero-grid">
          <div className="reveal">
            <p className="eyebrow">Tinting. Branding. Security.</p>
            <h1>Protect the view. <em>Own</em> the finish.</h1>
            <p className="hero-copy">
              Precision tinting, vehicle branding and practical security installations for homes, businesses and the road.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/contact">Get a free consultation</Link>
              <Link className="button button-outline" to="/services">Explore services</Link>
            </div>
          </div>
          <aside className="hero-aside reveal">
            <strong><a href={`tel:${tel}`}>{phone}</a></strong>
            Talk to our Harare team about your vehicle, property or business project.
          </aside>
        </div>
      </section>

      <section className="trust-strip">
        <div className="shell trust-items">
          <span>Automotive and building tinting</span>
          <span>Vehicle branding and wrapping</span>
          <span>Signage and window frosting</span>
          <span>CCTV and electric gates</span>
        </div>
      </section>

      <section className="section section-fog">
        <div className="shell intro-grid">
          <div className="intro-image" style={{ backgroundImage: `url(${images.tint})` }}></div>
          <div className="intro-copy">
            <p className="eyebrow">What we do</p>
            <h2>Your space. Your privacy. Your standard.</h2>
            <p>
              Every job starts with a clear purpose: reduce glare, strengthen privacy, make a brand easier to recognise
              or improve the security around a property.
            </p>
            <div className="capability-list">
              <div><span>01</span>Automotive and building tinting</div>
              <div><span>02</span>Vehicle branding and wrapping</div>
              <div><span>03</span>Signage and frosted glass</div>
              <div><span>04</span>CCTV and electric gates</div>
            </div>
            <Link className="button button-primary" to="/services">View all services</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Built for real work</p>
            <h2>Six ways we improve the everyday.</h2>
            <p>Choose the result you need. We will recommend a finish that suits the surface, setting and use.</p>
          </div>
          <div className="services-grid">
            {serviceCards.map(([title, copy, image]) => (
              <Link key={title} className="service" to="/services">
                <img src={image} alt={title} loading="lazy" />
                <span className="service-content">
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Visualise the difference</p>
            <h2>See the tint before you commit.</h2>
          </div>
          <div className="tint-reveal">
            <div className="tint-reveal-grid">
              <div className="tint-reveal-copy">
                <p className="eyebrow">The tint difference</p>
                <h2>More comfort. Less exposure.</h2>
                <p>
                  Move the control and see the visual effect of a darker, more private finish.
                  The right film is chosen around your vehicle, building and goals.
                </p>
                <div className="reveal-stat">
                  <b>Control the light</b>
                  <span>Privacy, glare reduction and a cleaner visual finish.</span>
                </div>
              </div>
              <div className="tint-stage" ref={tintStageRef} style={{ '--reveal': '57%' }}>
                <img src={images.tint} alt="Vehicle window tinting example" />
                <div className="tint-treated"><img src={images.tint} alt="" /></div>
                <div className="tint-divider" aria-hidden="true"><i></i></div>
                <input
                  className="tint-control"
                  type="range"
                  min="10"
                  max="90"
                  value={reveal}
                  onChange={(e) => setReveal(Number(e.target.value))}
                  aria-label="Adjust tint comparison"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="shell">
          <h2>Ready to improve your space?</h2>
          <Link className="button" to="/contact">Request a quote</Link>
        </div>
      </section>
    </main>
  );
}