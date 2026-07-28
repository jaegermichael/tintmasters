import { useState } from 'react';
import { Link } from 'react-router-dom';

const nav = [
  ['Home', 'home'], ['About', 'about'], ['Services', 'services'],
  ['Gallery', 'gallery'], ['Contact us', 'contact']
];

export default function Header({ currentPage }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell nav">
        <Link className="brand" to="/" aria-label="Tint Masters home">
          Tint<span>Masters</span>
          <small>Zimbabwe</small>
        </Link>
        <nav className={`nav-links ${isOpen ? 'open' : ''}`} id="main-nav" aria-label="Primary navigation">
          {nav.map(([label, id]) => (
            <Link key={id} to={`/${id === 'home' ? '' : id}`} aria-current={currentPage === id ? 'page' : undefined}>
              {label}
            </Link>
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