import { Link } from 'react-router-dom';
import {
  FiArrowUpRight, FiTarget, FiEye, FiHeart, FiCheck,
  FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiMail,
  FiMapPin, FiPhone, FiGlobe,
} from 'react-icons/fi';

const values = [
  {
    icon: <FiTarget />,
    title: 'Our Mission',
    desc: 'To empower businesses of every size with world-class technology, design, and marketing that actually drives results.',
  },
  {
    icon: <FiEye />,
    title: 'Our Vision',
    desc: 'To become a global hub of digital talent — where creativity, engineering, and strategy come together to build the future.',
  },
  {
    icon: <FiHeart />,
    title: 'Our Values',
    desc: 'Transparency, ownership, continuous learning, and obsession with client success. Every decision reflects these.',
  },
];

const milestones = [
  { year: '2019', title: 'Founded', desc: 'Started as a 3-person freelance team in Dhaka.' },
  { year: '2021', title: 'First 50 Clients', desc: 'Expanded to full-service web & design agency.' },
  { year: '2023', title: 'Global Reach', desc: 'Clients across 15+ countries, team grew to 20+.' },
  { year: '2025', title: '238+ Projects', desc: 'Full IT solution — dev, design, marketing, video & more.' },
];

const team = [
  {
    name: 'Devbroto Pall',
    role: 'Founder & CEO',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80',
    bio: 'Visionary leader with 8+ years in tech and product strategy.',
    portfolio: 'https://devbroto.example.com',
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com',
    },
  },
  {
    name: 'Saydul Nobi Peal',
    role: 'Head of Marketing',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80',
    bio: 'Growth strategist who has scaled 30+ brands with paid & organic campaigns.',
    portfolio: 'https://saydul.example.com',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com',
    },
  },
  {
    name: 'Mahedul hasan Subho',
    role: 'Lead Full-Stack Developer',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    bio: 'Django + React expert. Loves clean code and scalable architecture.',
    portfolio: 'https://mahedul.example.com',
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    name: 'Nusrat Jahan',
    role: 'Senior UI/UX Designer',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80',
    bio: 'Design systems and interfaces that convert. Figma nerd.',
    portfolio: 'https://nusrat.example.com',
    socials: {
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    name: 'Rifat Hasan',
    role: 'Motion & Video Lead',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80',
    bio: 'Cinematic edits, motion graphics, and 3D animation specialist.',
    portfolio: 'https://rifat.example.com',
    socials: {
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
    },
  },
  {
    name: 'Md Mehedi Hasan',
    role: 'Cybersecurity Analyst',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
    bio: 'Security audits and pentests to keep clients safe from threats.',
    portfolio: 'https://mehedi.example.com',
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
  },
];

const socialIcon = {
  github: <FiGithub />,
  linkedin: <FiLinkedin />,
  twitter: <FiTwitter />,
  instagram: <FiInstagram />,
  email: <FiMail />,
};

const whyUs = [
  'Full-service team — dev, design, marketing, video under one roof',
  'Transparent pricing with no hidden costs',
  'Weekly progress reports and open communication',
  'Post-launch support on every project',
  'Global client base with 98.6% satisfaction',
  'Fast turnaround without compromising quality',
];

export default function About() {
  return (
    <>
      {/* ===== PAGE HERO ===== */}
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div className="tag"><span className="dot" /> About Us</div>
          <h1 className="page-title">
            We are <span>Skill Core Solution</span>
          </h1>
          <p className="page-sub">
            A full-service IT agency bridging innovation and execution. Since 2019,
            we've helped 200+ businesses worldwide scale with technology, design,
            and marketing.
          </p>
        </div>
      </section>

      {/* ===== COMPANY STORY ===== */}
      <section className="sec">
        <div className="container about-story">
          <div className="about-story-text">
            <div className="tag"><span className="dot" /> Our Story</div>
            <h2 className="sec-h2">Built by creators, <br /> for creators</h2>
            <p>
              We started as a 3-person freelance team in Dhaka with one goal:
              deliver the kind of work that big agencies charge a fortune for —
              but with startup-level energy and personal attention.
            </p>
            <p>
              Today, we're a global team of engineers, designers, marketers, and
              storytellers. But our approach hasn't changed — every project gets
              our best people, honest communication, and obsessive attention to
              detail.
            </p>
            <p>
              From startups to enterprises, from landing pages to full SaaS
              platforms, from brand identity to global ad campaigns — we do it
              all, under one roof.
            </p>
          </div>

          <div className="about-story-stats">
            <div className="story-stat">
              <span>238+</span>
              <p>Projects Delivered</p>
            </div>
            <div className="story-stat">
              <span>15+</span>
              <p>Countries Served</p>
            </div>
            <div className="story-stat">
              <span>6+</span>
              <p>Years in Business</p>
            </div>
            <div className="story-stat">
              <span>98.6%</span>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

    
      <section className="sec sec-alt">
        <div className="container">
          <div className="tag"><span className="dot" /> What drives us</div>
          <h2 className="sec-h2">Mission, Vision & Values</h2>
          <p className="sec-sub">The principles behind everything we build.</p>

          <div className="values-grid">
            {values.map((v) => (
              <div className="value-card" key={v.title}>
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <div className="tag"><span className="dot" /> Journey</div>
          <h2 className="sec-h2">Our milestones</h2>
          <p className="sec-sub">From a 3-person team to a global agency.</p>

          <div className="timeline">
            {milestones.map((m, i) => (
              <div className="timeline-item" key={m.year}>
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <span className="timeline-year">{m.year}</span>
                  <h4>{m.title}</h4>
                  <p>{m.desc}</p>
                </div>
                {i < milestones.length - 1 && <div className="timeline-line" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-alt">
        <div className="container">
          <div className="tag"><span className="dot" /> Our Team</div>
          <h2 className="sec-h2">Meet the people behind the work</h2>
          <p className="sec-sub">
            A hand-picked team of engineers, designers, and strategists — each
            bringing a unique skill to your project.
          </p>

          <div className="team-full-grid">
            {team.map((m) => (
              <div className="team-full-card" key={m.name}>
                <div className="team-full-img">
                  <img src={m.img} alt={m.name} />
                </div>

                <div className="team-full-body">
                  <h3>{m.name}</h3>
                  <span className="team-role">{m.role}</span>
                  <p className="team-bio">{m.bio}</p>

                  {/* Portfolio link */}
                  <a
                    href={m.portfolio}
                    target="_blank"
                    rel="noreferrer"
                    className="team-portfolio"
                  >
                    View Portfolio <FiArrowUpRight />
                  </a>

                  
                  <div className="team-socials">
                    {Object.entries(m.socials).map(([key, url]) => (
                      <a
                        key={key}
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className={`social-btn social-${key}`}
                        aria-label={key}
                      >
                        {socialIcon[key]}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="sec">
        <div className="container">
          <div className="tag"><span className="dot" /> Why choose us</div>
          <h2 className="sec-h2">What makes us different</h2>

          <div className="why-list-grid">
            {whyUs.map((w) => (
              <div className="why-list-item" key={w}>
                <div className="why-check"><FiCheck /></div>
                <p>{w}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}