import { Link } from 'react-router-dom';
import {
  FiMail, FiPhone, FiMapPin,
  FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiYoutube,
  FiArrowUpRight, FiSend,
  FiFacebook,
} from 'react-icons/fi';

function LogoMark() {
  return (
    <svg width="42" height="42" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="hexGradF" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
        <linearGradient id="sGradF" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>
      </defs>
      <path d="M32 3 L55 17 L55 47 L32 61 L9 47 L9 17 Z" fill="none" stroke="url(#hexGradF)" strokeWidth="2.5" />
      <path d="M32 10 L48 20 L48 44 L32 54 L16 44 L16 20 Z" fill="rgba(37,99,235,0.15)" stroke="rgba(56,189,248,0.5)" strokeWidth="1.5" />
      <path d="M40 22 C36 18, 24 18, 24 26 C24 32, 40 30, 40 38 C40 46, 28 46, 24 42" stroke="url(#sGradF)" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', to: '/home' },
    { name: 'Services', to: '/services' },
    { name: 'Portfolio', to: '/portfolio' },
    { name: 'Blog', to: '/blog' },
    { name: 'About Us', to: '/about' },
    { name: 'Contact', to: '/contact' },
  ];

  const serviceLinks = [
    { name: 'Web Development', to: '/services' },
    { name: 'Mobile App', to: '/services' },
    { name: 'UI/UX Design', to: '/services' },
    { name: 'Digital Marketing', to: '/services' },
    { name: 'Video Editing', to: '/services' },
    { name: 'Cybersecurity', to: '/services' },
  ];

  const socials = [
    { icon: <FiGithub />, url: 'https://github.com', label: 'GitHub', cls: 'github' },
    { icon: <FiLinkedin />, url: 'https://linkedin.com', label: 'LinkedIn', cls: 'linkedin' },
    { icon: <FiTwitter />, url: 'https://twitter.com', label: 'Twitter', cls: 'twitter' },
    { icon: <FiInstagram />, url: 'https://instagram.com', label: 'Instagram', cls: 'instagram' },
    { icon: <FiYoutube />, url: 'https://youtube.com', label: 'YouTube', cls: 'youtube' },
    { icon: <FiMail />, url: 'https://mail.google.com', label: 'Email', cls: 'email' },
    { icon: <FiFacebook />, url: 'https://www.facebook.com/profile.php?id=61589193417063', label: 'Facebook', cls: 'facebook' },
  ];

  const handleNewsletter = (e) => {
    e.preventDefault();
    alert('Subscribed! Thank you.');
    e.target.reset();
  };

  return (
    <footer className="footer-main">
      {/* ===== TOP CTA STRIP ===== */}
      <div className="footer-cta">
        <div className="container footer-cta-inner">
          <div>
            <h3>Have a project in mind?</h3>
            <p>Let's turn your idea into a scalable digital product.</p>
          </div>
          <Link to="/contact" className="btn-pill">
            Start a Project <FiArrowUpRight />
          </Link>
        </div>
      </div>

      <div className="footer-body">
        <div className="container footer-grid">
          {/* Brand Column */}
          <div className="footer-col footer-brand">
            <Link to="/home" className="footer-logo">
              <LogoMark />
              <div className="logo-text">
                SKILL CORE
                <small>SOLUTION</small>
              </div>
            </Link>
            <p className="footer-desc">
              A full-service IT agency delivering web, design, marketing, and
              outsourcing solutions for businesses worldwide since 2019.
            </p>

            <div className="footer-socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`fs-btn fs-${s.cls}`}
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-list">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <Link to={l.to}>
                    <span className="link-arrow">›</span> {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        
          <div className="footer-col">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-list">
              {serviceLinks.map((s) => (
                <li key={s.name}>
                  <Link to={s.to}>
                    <span className="link-arrow">›</span> {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col footer-contact">
            <h4 className="footer-title">Get in Touch</h4>

            <div className="fc-item">
              <FiMapPin />
              <span>Tech Hub Tower, Level 4,<br />106,Green Road,Framgate,Dhaka, 1215</span>
            </div>

            <a href="mailto:skillcoresolution@gmail.com" className="fc-item">
              <FiMail />
              <span>skillcoresolution@gmail.com</span>
            </a>

            <a href="tel:+8801862265418" className="fc-item">
              <FiPhone />
              <span>+880 1862-265418</span>
            </a>

            <form className="footer-newsletter" onSubmit={handleNewsletter}>
              <input
                type="email"
                placeholder="Your email for updates"
                required
              />
              <button type="submit" aria-label="Subscribe">
                <FiSend />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {year} SKILL CORE SOLUTION. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/about">Privacy Policy</Link>
            <span>·</span>
            <Link to="/about">Terms of Service</Link>
            <span>·</span>
            <Link to="/contact">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}