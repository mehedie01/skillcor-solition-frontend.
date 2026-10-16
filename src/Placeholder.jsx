import { Link } from 'react-router-dom';

export default function Placeholder({ title }) {
  return (
    <section
      style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '120px 20px 60px',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
        {title}
      </h1>
      <p style={{ color: '#94a3b8', marginBottom: '30px' }}>
        Ei page ta shiggiri asche. Amra ei page ta next step e banabo.
      </p>
      <Link to="/" className="btn-hero">← Back to Home</Link>
    </section>
  );
}