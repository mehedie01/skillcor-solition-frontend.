import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <section className="hero">
      <div className="container hero-content">
        <h1>
          Empowering Your Vision with <span>Next-Gen Digital Solutions</span>
        </h1>
        <p>
          We deliver premium Web Development, UI/UX Design, Results-Driven Marketing,
          and Expert Consultation to scale your business globally.
        </p>
        <Link to="/home" className="btn-hero">Grow Your Business</Link>
      </div>
    </section>
  );
}