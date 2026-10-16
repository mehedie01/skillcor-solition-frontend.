import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

function LogoMark() {
  return (
    <svg width="42" height="42" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="hexGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
        <linearGradient id="sGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>
      </defs>
      <path d="M32 3 L55 17 L55 47 L32 61 L9 47 L9 17 Z" fill="none" stroke="url(#hexGrad)" strokeWidth="2.5" />
      <path d="M32 10 L48 20 L48 44 L32 54 L16 44 L16 20 Z" fill="rgba(37,99,235,0.15)" stroke="rgba(56,189,248,0.5)" strokeWidth="1.5" />
      <path d="M40 22 C36 18, 24 18, 24 26 C24 32, 40 30, 40 38 C40 46, 28 46, 24 42" stroke="url(#sGrad)" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export default function Navbar() {
  const location = useLocation();
  const isLanding = location.pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

const links = [
  { name: 'Services', to: '/services' },
  { name: 'Portfolio / Case Studies', to: '/portfolio' },
  { name: 'Success Stories / Blog', to: '/blog' },
  { name: 'About Us', to: '/about' },
  { name: 'Contact', to: '/contact' },
];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <Link to={isLanding ? '/' : '/home'} className="logo-wrap">
          <LogoMark />
          <div className="logo-text">
            SKILL CORE
            <small>SOLUTION</small>
          </div>
        </Link>

        {!isLanding && (
          <>
            <ul className={`nav-links ${open ? 'open' : ''}`}>
              {links.map((l) => (
                <li key={l.name}>
                  <Link to={l.to} onClick={() => setOpen(false)}>{l.name}</Link>
                </li>
              ))}
            </ul>

            <Link to="/contact" className="btn-quote">contact</Link>

            <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
              {open ? <FiX /> : <FiMenu />}
            </button>
          </>
        )}

        {isLanding && (
          <Link to="/home" className="btn-quote">contact</Link>
        )}
      </div>
    </nav>
  );
}