import { useEffect, useState } from 'react';

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`page-loader ${hidden ? 'hidden' : ''}`}>
      <div className="loader-inner">
        <svg width="80" height="80" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="loader-logo">
          <defs>
            <linearGradient id="hexLoad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
            <linearGradient id="sLoad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>
          </defs>
          <path d="M32 3 L55 17 L55 47 L32 61 L9 47 L9 17 Z" fill="none" stroke="url(#hexLoad)" strokeWidth="2.5" />
          <path d="M32 10 L48 20 L48 44 L32 54 L16 44 L16 20 Z" fill="rgba(37,99,235,0.15)" stroke="rgba(56,189,248,0.5)" strokeWidth="1.5" />
          <path d="M40 22 C36 18, 24 18, 24 26 C24 32, 40 30, 40 38 C40 46, 28 46, 24 42" stroke="url(#sLoad)" strokeWidth="3" strokeLinecap="round" fill="none" />
        </svg>
        <div className="loader-text">
          SKILL CORE
          <small>SOLUTION</small>
        </div>
        <div className="loader-bar">
          <span></span>
        </div>
      </div>
    </div>
  );
}