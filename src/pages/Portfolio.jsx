import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  FiArrowUpRight, FiExternalLink, FiFilter, FiLoader,
} from 'react-icons/fi';
import { api } from '../api/endpoints';

function CountUp({ end, suffix = '', decimals = 0, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const startTime = performance.now();

            const tick = (now) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setCount(end * eased);

              if (progress < 1) requestAnimationFrame(tick);
              else setCount(end);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  const display = decimals > 0
    ? count.toFixed(decimals)
    : Math.floor(count).toString();

  return <span ref={ref}>{display}{suffix}</span>;
}

const stats = [
  { value: 238, suffix: '+', label: 'Projects Delivered' },
  { value: 15, suffix: '+', label: 'Countries Served' },
  { value: 98.6, suffix: '%', label: 'Client Satisfaction', decimals: 1 },
  { value: 6, suffix: '+', label: 'Years Experience' },
];

const categories = ['All', 'Web Development', 'UI/UX Design', 'Mobile App', 'Branding', 'Marketing', 'Video & Animation'];

export default function Portfolio() {
  const [activeCat, setActiveCat] = useState('All');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    api.getProjects(activeCat === 'All' ? null : activeCat)
      .then((res) => {
        if (mounted) {
          setProjects(res.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (mounted) {
          setError(err.friendlyMessage || 'Failed to load projects.');
          setLoading(false);
        }
      });

    return () => { mounted = false; };
  }, [activeCat]);

  return (
    <>
      
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div className="tag"><span className="dot" /> Portfolio</div>
          <h1 className="page-title">
            Case studies that <span>deliver results</span>
          </h1>
          <p className="page-sub">
            A curated collection of our work across web, mobile, branding, and marketing.
            Every project tells a story of growth.
          </p>
        </div>
      </section>

      
      <section className="stats-bar">
        <div className="container stats-grid">
          {stats.map((s) => (
            <div className="stat-item" key={s.label}>
              <span className="stat-num">
                <CountUp end={s.value} suffix={s.suffix} decimals={s.decimals || 0} />
              </span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      
      <section className="sec">
        <div className="container">
          <div className="port-head">
            <div className="tag">
              <span className="dot" />
              <FiFilter style={{ marginRight: 4 }} /> Filter by
            </div>
            <div className="filter-tabs">
              {categories.map((c) => (
                <button
                  key={c}
                  className={`filter-btn ${activeCat === c ? 'active' : ''}`}
                  onClick={() => setActiveCat(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {loading && (
            <div className="api-state">
              <FiLoader className="spin" />
              <p>Loading projects...</p>
            </div>
          )}

          {error && (
            <div className="api-state error">
              <p>{error}</p>
              <button onClick={() => window.location.reload()} className="btn-pill">
                Retry
              </button>
            </div>
          )}

          {!loading && !error && (
            <>
              <div className="port-grid">
                {projects.map((p) => (
                  <article
                    className={`port-card ${p.is_featured ? 'featured' : ''}`}
                    key={p.id}
                  >
                    <div className="port-img">
                      <img src={p.image_final} alt={p.title} />
                      <div className="port-overlay">
                        <span className="port-year">{p.year}</span>
                        <div className="port-icons">
                          <a href="#" aria-label="View"><FiArrowUpRight /></a>
                          <a href="#" aria-label="External"><FiExternalLink /></a>
                        </div>
                      </div>
                    </div>

                    <div className="port-body">
                      <div className="port-cat">{p.category}</div>
                      <h3>{p.title}</h3>
                      {p.client && (
                        <p className="port-client">Client: <strong>{p.client}</strong></p>
                      )}
                      <p className="port-desc">{p.description}</p>
                      <div className="port-tags">
                        {p.tag_list.map((t) => <span key={t}>{t}</span>)}
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {projects.length === 0 && (
                <div className="port-empty">
                  <p>Ei category te ekhono kono project nei. Arek option try koro.</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      
      <section className="sec sec-alt">
        <div className="container">
          <div className="cta-box">
            <h2>Want to be our next success story?</h2>
            <p>Let's build something amazing together.</p>
            <Link to="/contact" className="btn-pill">
              Start Your Project <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}