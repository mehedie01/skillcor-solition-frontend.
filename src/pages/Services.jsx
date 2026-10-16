import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FiArrowUpRight, FiCheck, FiCode, FiPenTool, FiTrendingUp,
  FiUsers, FiBookOpen, FiShield, FiVideo, FiFilm, FiSmartphone,
  FiLoader,
} from 'react-icons/fi';
import { api } from '../api/endpoints';

const iconMap = {
  code: <FiCode />,
  mobile: <FiSmartphone />,
  design: <FiPenTool />,
  marketing: <FiTrendingUp />,
  video: <FiVideo />,
  animation: <FiFilm />,
  shield: <FiShield />,
  users: <FiUsers />,
  book: <FiBookOpen />,
};

const process = [
  { num: '01', title: 'Discovery', desc: 'We understand your goals, audience, and challenges.' },
  { num: '02', title: 'Strategy', desc: 'We craft a plan with clear deliverables and timelines.' },
  { num: '03', title: 'Design & Build', desc: 'We design and develop with weekly check-ins.' },
  { num: '04', title: 'Launch & Scale', desc: 'We launch, monitor, and optimize for growth.' },
];


const sideWorks = [
  { title: 'E-commerce Platform', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80' },
  { title: 'SaaS Dashboard', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80' },
  { title: 'Brand Identity', img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500&q=80' },
  { title: 'Marketing Campaign', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80' },
  { title: 'Mobile App UI', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&q=80' },
  { title: 'Motion Design Reel', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&q=80' },
];

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentWork, setCurrentWork] = useState(0);


  useEffect(() => {
    let mounted = true;

    api.getServices()
      .then((res) => {
        if (mounted) {
          setServices(res.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (mounted) {
          setError(err.friendlyMessage || 'Failed to load services.');
          setLoading(false);
        }
      });

    return () => { mounted = false; };
  }, []);

 
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWork((prev) => (prev + 1) % sideWorks.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>

      <section className="page-hero">
        <div className="container page-hero-inner">
          <div className="tag"><span className="dot" /> Services</div>
          <h1 className="page-title">
            Solutions that <span>drive growth</span>
          </h1>
          <p className="page-sub">
            From strategy to execution — we deliver complete IT solutions that help your
            business stand out, scale up, and stay ahead.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <div className="svc-layout">
            {/* Left: Service list */}
            <div className="svc-list">
              {loading && (
                <div className="api-state">
                  <FiLoader className="spin" />
                  <p>Loading services...</p>
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

              {!loading && !error && services.length === 0 && (
                <div className="api-state">
                  <p>Ekhono kono service add kora hoyni. Django admin theke add koro.</p>
                </div>
              )}

              {services.map((s, i) => (
                <div className="svc-row" key={s.id}>
                  <div className="svc-num">{String(i + 1).padStart(2, '0')}</div>
                  <div className="svc-main">
                    <div className="svc-head">
                      <div className="svc-icon">{iconMap[s.icon] || <FiCode />}</div>
                      <div>
                        <h3>{s.title}</h3>
                        <p className="svc-short">{s.short_desc}</p>
                      </div>
                    </div>
                    <p className="svc-desc">{s.full_desc}</p>
                    <ul className="svc-features">
                      {s.feature_list.map((f) => (
                        <li key={f}><FiCheck /> {f}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <aside className="svc-sidebar">
              <div className="sidebar-box">
                <div className="sidebar-head">
                  <span className="dot" />
                  <h4>Our Recent Work</h4>
                </div>

                <div className="sidebar-slider">
                  {sideWorks.map((w, i) => (
                    <div
                      key={w.title}
                      className={`slide-item ${i === currentWork ? 'active' : ''}`}
                    >
                      <img src={w.img} alt={w.title} />
                      <div className="slide-overlay">
                        <h5>{w.title}</h5>
                        <span>View Project <FiArrowUpRight /></span>
                      </div>
                    </div>
                  ))}

                  <div className="slide-dots">
                    {sideWorks.map((_, i) => (
                      <button
                        key={i}
                        className={i === currentWork ? 'active' : ''}
                        onClick={() => setCurrentWork(i)}
                        aria-label={`Slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="sidebar-foot">
                  <p>Ei box ta tumi jekono shomoy tomar kajer sample diye update korte parbe.</p>
                  <Link to="/contact" className="sidebar-cta">
                    Start a Project <FiArrowUpRight />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      
      <section className="sec sec-alt">
        <div className="container">
          <div className="tag"><span className="dot" /> How we work</div>
          <h2 className="sec-h2">Our process</h2>
          <p className="sec-sub">A simple, transparent process from idea to launch.</p>

          <div className="process-grid">
            {process.map((p) => (
              <div className="process-card" key={p.num}>
                <span className="process-num">{p.num}</span>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="sec">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to start your project?</h2>
            <p>Let's turn your idea into a scalable digital product.</p>
            <Link to="/contact" className="btn-pill">
              Get a Quote <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}