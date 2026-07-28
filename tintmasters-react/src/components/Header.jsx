import { Link, useLocation, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Home', to: '/', id: 'home' },
  { label: 'About', to: '/about', id: 'about' },
  { label: 'Services', to: '/services', id: 'services' },
  { label: 'Gallery', to: '/gallery', id: 'gallery' },
  { label: 'Contact us', to: '/contact', id: 'contact' }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="site-header">
      <div className="shell nav">
        <Link className="brand" to="/" aria-label="Tint Masters home">
          Tint<span>Masters</span>
          <small>Zimbabwe</small>
        </Link>
        <nav className={`nav-links ${isOpen ? 'open' : ''}`} id="main-nav" aria-label="Primary navigation">
          {navItems.map(({ label, to, id }) => (
            <NavLink
              key={id}
              to={to}
              className={({ isActive }) => isActive ? 'active' : ''}
              aria-current={location.pathname === to ? 'page' : undefined}
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <Link className="nav-cta" to="/contact">Request a quote</Link>
        <button
          className="menu-toggle"
          aria-expanded={isOpen}
          aria-controls="main-nav"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>
    </header>
  );
}