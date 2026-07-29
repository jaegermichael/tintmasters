import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { images, serviceCards, phone, tel } from '../data/constants';
import Reveal from '../components/ui/Reveal';

const heroContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const heroItem = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

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
        <motion.div className="shell hero-grid" variants={heroContainer} initial="hidden" animate="show">
          <motion.div variants={heroItem}>
            <p className="eyebrow">Tinting. Branding. Security.</p>
            <h1>Protect the view. <em>Own</em> the finish.</h1>
            <p className="hero-copy">
              Precision tinting, vehicle branding and practical security installations for homes, businesses and the road.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/contact">Get a free consultation</Link>
              <Link className="button button-outline" to="/services">Explore services</Link>
            </div>
          </motion.div>
          <motion.aside className="hero-aside" variants={heroItem}>
            <strong><a href={`tel:${tel}`}>{phone}</a></strong>
            Talk to our Harare team about your vehicle, property or business project.
          </motion.aside>
        </motion.div>
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
          <Reveal className="intro-image" style={{ backgroundImage: `url(${images.tint})` }} />
          <Reveal delay={0.1} className="intro-copy">
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
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal className="section-heading">
            <p className="eyebrow">Built for real work</p>
            <h2>Six ways we improve the everyday.</h2>
            <p>Choose the result you need. We will recommend a finish that suits the surface, setting and use.</p>
          </Reveal>
          <div className="services-grid">
            {serviceCards.map(([title, copy, image], i) => (
              <Reveal as="div" key={title} delay={Math.min(i * 0.07, 0.35)} y={16}>
                <Link className="service" to="/services">
                  <img src={image} alt={title} loading="lazy" />
                  <span className="service-content">
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="shell">
          <Reveal className="section-heading">
            <p className="eyebrow">Visualise the difference</p>
            <h2>See the tint before you commit.</h2>
          </Reveal>
          <div className="tint-reveal">
            <div className="tint-reveal-grid">
              <Reveal className="tint-reveal-copy">
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
              </Reveal>
              <Reveal delay={0.15} className="tint-stage" ref={tintStageRef} style={{ '--reveal': '57%' }}>
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
              </Reveal>
            </div>
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
