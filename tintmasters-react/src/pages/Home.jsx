import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { images, serviceCards, phone, tel } from '../data/constants';

export default function Home() {
  const [reveal, setReveal] = useState(57);
  const tintStageRef = useRef(null);
  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    if (tintStageRef.current) {
      tintStageRef.current.style.setProperty('--reveal', `${reveal}%`);
    }
  }, [reveal]);

  useEffect(() => {
    // Respect the visitor's reduced-motion preference by keeping the
    // static poster image instead of autoplaying the background video.
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setShowVideo(!query.matches);
    const handleChange = (e) => setShowVideo(!e.matches);
    query.addEventListener('change', handleChange);
    return () => query.removeEventListener('change', handleChange);
  }, []);

  return (
    <main id="content">
      <section className="hero">
        {showVideo && (
          <video
            className="hero-video"
            src="/videos/hero.mp4"
            poster="/images/hero-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />
        )}
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