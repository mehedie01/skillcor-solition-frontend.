import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FiArrowLeft, FiUser, FiCalendar, FiClock, FiArrowUpRight, FiLoader } from 'react-icons/fi';
import { api } from '../api/endpoints';

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    api.getBlogPost(id)
      .then((res) => {
        if (mounted) {
          setPost(res.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (mounted) {
          setError(err.friendlyMessage || 'Post not found.');
          setLoading(false);
        }
      });

    return () => { mounted = false; };
  }, [id]);

  const formatDate = (iso) => {
    const d = new Date(iso);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  if (loading) {
    return (
      <section className="sec">
        <div className="container">
          <div className="api-state" style={{ minHeight: '60vh' }}>
            <FiLoader className="spin" />
            <p>Loading post...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error || !post) {
    return (
      <section className="sec">
        <div className="container">
          <div className="api-state error" style={{ minHeight: '60vh' }}>
            <p>{error || 'Post not found.'}</p>
            <Link to="/blog" className="btn-pill">
              <FiArrowLeft /> Back to Blog
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="page-hero blog-post-hero">
        <div className="container page-hero-inner">
          <Link to="/blog" className="back-link">
            <FiArrowLeft /> Back to Blog
          </Link>
          <div className="tag" style={{ marginTop: 20 }}>
            <span className="dot" /> {post.category}
          </div>
          <h1 className="page-title">{post.title}</h1>
          <div className="post-meta" style={{ marginTop: 20 }}>
            <span><FiUser /> {post.author}</span>
            <span><FiCalendar /> {formatDate(post.created_at)}</span>
            <span><FiClock /> {post.read_time}</span>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <div className="post-cover">
            <img src={post.image_final} alt={post.title} />
          </div>

          <article className="post-content">
            {post.content.split('\n').map((para, i) => (
              para.trim() && <p key={i}>{para}</p>
            ))}
          </article>

          <div className="post-footer">
            <Link to="/blog" className="btn-pill">
              <FiArrowLeft /> All Posts
            </Link>
            <Link to="/contact" className="btn-pill">
              Work With Us <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}