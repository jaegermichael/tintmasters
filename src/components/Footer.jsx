import { Link } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact us', to: '/contact' }
];

const phone = '+263 78 422 7110';
const tel = '+263784227110';
const email = 'sales@tintmasters.co.zw';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <section className="footer-brand">
          <Link className="brand" to="/">
            Tint<span>Masters</span>
            <small>Zimbabwe</small>
          </Link>
          <p>Practical tinting, branding and security work for vehicles, homes and businesses across Harare.</p>
        </section>
        <section>
          <p className="footer-title">Explore</p>
          <nav className="footer-links" aria-label="Footer navigation">
            {navItems.map(({ label, to }) => (
              <Link key={to} to={to}>{label}</Link>
            ))}
          </nav>
        </section>
        <section>
          <p className="footer-title">Contact</p>
          <div className="footer-links">
            <a href={`tel:${tel}`}>{phone}</a>
            <a href={`mailto:${email}`}>{email}</a>
            <span>15223 10th Close<br />Sunningdale 2, Harare, Zimbabwe</span>
            <a href="https://www.facebook.com/CarWindowTintHarare" target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </section>
      </div>
      <div className="shell footer-bottom">
        <span>Copyright © {year} Tint Masters Zimbabwe</span>
        <span>Privacy and security, professionally handled.</span>
      </div>
    </footer>
  );
}