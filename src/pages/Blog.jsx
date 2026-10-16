import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiClock, FiUser, FiCalendar, FiLoader } from 'react-icons/fi';
import { api } from '../api/endpoints';

const categories = ['All', 'Case Study', 'Web Development', 'Design', 'Marketing', 'Career'];

export default function Blog() {
  const [activeCat, setActiveCat] = useState('All');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    api.getBlogPosts(activeCat === 'All' ? null : activeCat)
      .then((res) => {
        if (mounted) {
          setPosts(res.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (mounted) {
          setError(err.friendlyMessage || 'Failed to load posts.');
          setLoading(false);
        }
      });

    return () => { mounted = false; };
  }, [activeCat]);

  const featured = posts.find((p) => p.is_featured);
  const regular = posts.filter((p) => !p.is_featured);

  const formatDate = (iso) => {
    const d = new Date(iso);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <>
      
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div className="tag"><span className="dot" /> Success Stories / Blog</div>
          <h1 className="page-title">
            Stories that <span>inspire growth</span>
          </h1>
          <p className="page-sub">
            Insights, case studies, and lessons from real projects — written by the
            team that builds them.
          </p>
        </div>
      </section>

      {loading && (
        <section className="sec">
          <div className="container">
            <div className="api-state">
              <FiLoader className="spin" />
              <p>Loading posts...</p>
            </div>
          </div>
        </section>
      )}

      {error && (
        <section className="sec">
          <div className="container">
            <div className="api-state error">
              <p>{error}</p>
              <button onClick={() => window.location.reload()} className="btn-pill">Retry</button>
            </div>
          </div>
        </section>
      )}

      {!loading && !error && featured && (
        <section className="sec">
          <div className="container">
            <Link to={`/blog/${featured.id}`} className="featured-post">
              <div className="featured-img">
                <img src={featured.image_final} alt={featured.title} />
                <span className="featured-badge">Featured</span>
              </div>
              <div className="featured-body">
                <div className="post-cat">{featured.category}</div>
                <h2>{featured.title}</h2>
                <p>{featured.excerpt}</p>
                <div className="post-meta">
                  <span><FiUser /> {featured.author}</span>
                  <span><FiCalendar /> {formatDate(featured.created_at)}</span>
                  <span><FiClock /> {featured.read_time}</span>
                </div>
                <span className="read-more">
                  Read Case Study <FiArrowUpRight />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {!loading && !error && (
        <section className="sec sec-alt">
          <div className="container">
            <div className="port-head">
              <div className="tag"><span className="dot" /> Filter by category</div>
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

            <div className="blog-grid">
              {regular.map((p) => (
                <Link to={`/blog/${p.id}`} className="blog-card" key={p.id}>
                  <div className="blog-img">
                    <img src={p.image_final} alt={p.title} />
                  </div>
                  <div className="blog-body">
                    <div className="post-cat">{p.category}</div>
                    <h3>{p.title}</h3>
                    <p>{p.excerpt}</p>
                    <div className="post-meta small">
                      <span><FiCalendar /> {formatDate(p.created_at)}</span>
                      <span><FiClock /> {p.read_time}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {regular.length === 0 && (
              <div className="port-empty">
                <p>Ei category te ekhono kono post nei.</p>
              </div>
            )}
          </div>
        </section>
      )}

      <section className="sec">
        <div className="container">
          <div className="cta-box">
            <h2>Get our latest stories in your inbox</h2>
            <p>No spam. Only insights that help you grow.</p>
            <form
              className="newsletter-form"
              onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); }}
            >
              <input type="email" placeholder="your@email.com" required />
              <button type="submit" className="btn-pill">
                Subscribe <FiArrowUpRight />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}