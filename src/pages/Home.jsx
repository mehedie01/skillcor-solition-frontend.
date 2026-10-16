import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  FiArrowUpRight, FiCheck, FiCode, FiPenTool, FiTrendingUp,
  FiUsers, FiBookOpen, FiShield, FiVideo, FiFilm, FiSmartphone,
  FiMail, FiPhone, FiMapPin, FiArrowDownRight, FiLoader,
  FiPlus, FiMinus,
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


const projects = [
  { title: 'Amber Bottle', tags: ['Web Development', 'Digital Design'], img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80' },
  { title: 'Pixelforge', tags: ['UI/UX Design', 'Branding'], img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80' },
  { title: 'BioTrack LMS', tags: ['Web App', 'Dashboard'], img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80' },
  { title: 'Nova Store', tags: ['E-commerce', 'Next.js'], img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80' },
  { title: 'Aurora Brand', tags: ['Branding', 'Marketing'], img: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=600&q=80' },
];

const testimonials = [
  { name: 'Ayesha Rahman', role: 'Founder, TechNest', text: 'Our website redesign was flawless. They understood our vision perfectly!', type: 'light' },
  { name: 'Rakib Hasan', role: 'CEO, BazaarBD', text: 'From concept to execution, they delivered outstanding results. Highly recommend their expertise!', type: 'dark' },
  { name: 'Sadia Ahmed', role: 'Manager, DigiCore', text: 'Super smooth process with incredible results. Highly recommend!', type: 'white' },
];

const team = [
  { name: 'Mahin Rahman', role: 'Creative Director', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80' },
  { name: 'Tania Akter', role: 'Marketing Strategist', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80' },
  { name: 'Sabbir Khan', role: 'Lead Developer', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
  { name: 'Nusrat Jahan', role: 'UI/UX Designer', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80' },
];

const pricing = [
  { name: 'Launch', price: '$499', period: '/ project', desc: 'Ideal for getting your website launched fast.', features: ['Responsive Website Design', 'Basic SEO Setup', 'Contact Form Integration', '1 Month Support'], popular: false },
  { name: 'Scale', price: '$1,299', period: '/ project', oldPrice: '$1,699', desc: 'Perfect for growing brands that need more.', features: ['Everything in Launch Plan', 'Custom Design & Development', 'Advanced SEO Setup', '3 Months Priority Support'], popular: true },
  { name: 'Elite', price: '$3,499', period: '/ project', desc: 'Best for advanced, custom, and long-term needs.', features: ['Everything in Scale Plan', 'Full Custom Web Application', '3 Months Free Monthly SEO', 'Dedicated Account Manager'], popular: false },
];

const faqs = [
  { q: 'What services does your agency offer?', a: 'We offer Web Development, UI/UX Design, Digital Marketing, Freelance Outsourcing, and IT Training — complete end-to-end IT solutions.' },
  { q: 'How long does a typical project take?', a: 'Depends on complexity. Simple sites take 1–2 weeks, larger applications 4–8 weeks.' },
  { q: 'Do you offer custom designs, or do you use templates?', a: 'We build custom designs tailored to your brand. Every project starts with a strategy session.' },
  { q: "What's the cost of a project?", a: 'Starting from $499 for simple projects. Contact us for a custom quote based on your needs.' },
  { q: 'Do you provide ongoing support?', a: 'Yes, all plans include a support window, with extended priority support available.' },
];

const news = [
  { title: 'A campaign that connects', date: 'May 12, 2025', cat: 'Marketing', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80' },
  { title: 'Breaking boundaries our status quo in design', date: 'May 08, 2025', cat: 'Design', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80' },
  { title: 'Recognized for design excellence', date: 'May 03, 2025', cat: 'Awards', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80' },
];


export default function Home() {
  const location = useLocation();
  const [activeService, setActiveService] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  // Dynamic services from Django API
  const [services, setServices] = useState([]);
  const [servicesLoading, setServicesLoading] = useState(true);

  // Hash scroll
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  // Fetch services
  useEffect(() => {
    let mounted = true;
    api.getServices()
      .then((res) => {
        if (mounted) {
          setServices(res.data);
          setServicesLoading(false);
        }
      })
      .catch(() => {
        if (mounted) setServicesLoading(false);
      });
    return () => { mounted = false; };
  }, []);

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      
      <section className="intro-hero">
        <div className="container intro-inner">
          <div className="intro-tagline">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path d="M12 2 L14.5 8 L21 9 L16 13.5 L17.5 20 L12 16.5 L6.5 20 L8 13.5 L3 9 L9.5 8 Z" fill="#38bdf8" />
            </svg>
            <p>We create <span>high-performing</span> digital solutions that elevate brands and enhance conversions.</p>
          </div>
          <h1 className="intro-title">
            Skill Core <br />
            <span className="intro-word">
              Solution
              <button className="intro-arrow" onClick={scrollToServices} aria-label="Scroll">
                <FiArrowDownRight />
              </button>
            </span>
          </h1>
        </div>
      </section>

      
      <section id="services" className="sec">
        <div className="container what-grid">
          <div className="what-left">
            <div className="tag"><span className="dot" /> What we do</div>
            <h2 className="sec-h2">What we do</h2>
            <p className="sec-sub">A comprehensive IT agency handling web, design, marketing, and outsourcing under one roof.</p>
            <div className="what-img">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80" alt="Team" />
            </div>
          </div>

          <div className="what-right">
            {servicesLoading && (
              <div className="api-state" style={{ padding: '30px 0' }}>
                <FiLoader className="spin" />
                <p>Loading services...</p>
              </div>
            )}

            {!servicesLoading && services.map((s, i) => (
              <div
                key={s.id}
                className={`what-item ${activeService === i ? 'active' : ''}`}
                onClick={() => setActiveService(i)}
              >
                <h3>{s.title}</h3>
                <p>{s.short_desc}</p>
              </div>
            ))}

            {!servicesLoading && services.length === 0 && (
              <div className="api-state" style={{ padding: '30px 0' }}>
                <p>Ekhono kono service add kora hoyni.</p>
              </div>
            )}

            <Link to="/services" className="btn-pill">
              Learn More <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </section>

      
      <section className="sec sec-alt">
        <div className="container">
          <div className="tag"><span className="dot" /> Why us</div>
          <h2 className="sec-h2">Why choose us</h2>
          <p className="sec-sub">We've built success with strategies that drive real impact. With 15+ countries served, we deliver excellence at scale.</p>

          <div className="why-grid">
            <div className="why-card why-big">
              <div className="stars">★★★★★</div>
              <p className="why-quote">The team exceeded our expectations with a stunning brand experience.</p>
              <div className="why-person">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80" alt="" />
                <div>
                  <strong>Rafiq Islam</strong>
                  <span>CEO, StartupX</span>
                </div>
              </div>
              <div className="why-badge">98.6%</div>
            </div>

            <div className="why-card why-img">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80" alt="" />
            </div>

            <div className="why-card why-stat">
              <span className="why-num">500+</span>
              <p>Completed projects globally</p>
              <div className="why-avatars">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&q=80" alt="" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&q=80" alt="" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&q=80" alt="" />
              </div>
            </div>

            <div className="why-card why-stat2">
              <span className="why-num-big">238+</span>
              <p>Successful projects delivered</p>
            </div>

            <div className="why-card why-brand">
              <h3>Skill Core<span>.</span></h3>
              <p>Our global team delivers modern, user-friendly digital solutions for businesses across industries.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <div className="tag"><span className="dot" /> Portfolio</div>
          <h2 className="sec-h2">Featured projects</h2>
          <p className="sec-sub">A collection of projects that showcase our creativity, innovation, and technical expertise.</p>
        </div>

        <div className="projects-marquee">
          <div className="projects-track">
            {[...projects, ...projects].map((p, i) => (
              <div className="project-card" key={`${p.title}-${i}`}>
                <div className="project-img">
                  <img src={p.img} alt={p.title} />
                </div>
                <h4>{p.title}</h4>
                <div className="project-tags">
                  {p.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-alt">
        <div className="container">
          <div className="tag"><span className="dot" /> Testimonials</div>
          <h2 className="sec-h2">Stories from clients</h2>
          <p className="sec-sub">Hear what our clients say about working with us — real results, real feedback.</p>

          <div className="testi-grid">
            {testimonials.map((t, i) => (
              <div key={i} className={`testi-card testi-${t.type}`}>
                <p className="testi-text">"{t.text}"</p>
                <div className="testi-person">
                  <img src={`https://i.pravatar.cc/80?img=${i + 20}`} alt="" />
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="sec">
        <div className="container">
          <div className="tag"><span className="dot" /> Our team</div>
          <h2 className="sec-h2">Meet our team</h2>
          <p className="sec-sub">Our team combines tech expertise with creative vision to bring ideas to life.</p>

          <div className="team-grid">
            {team.map((m) => (
              <div className="team-card" key={m.name}>
                <div className="team-img"><img src={m.img} alt={m.name} /></div>
                <h4>{m.name}</h4>
                <span>{m.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-alt">
        <div className="container">
          <div className="tag"><span className="dot" /> Pricing</div>
          <h2 className="sec-h2">Affordable pricing</h2>
          <p className="sec-sub">Choose a plan that fits your needs. Flexible, transparent, no hidden costs.</p>

          <div className="pricing-grid">
            {pricing.map((p) => (
              <div key={p.name} className={`price-card ${p.popular ? 'popular' : ''}`}>
                {p.popular && <span className="price-badge">Most Popular</span>}
                <h3>{p.name}</h3>
                <div className="price-row">
                  <span className="price">{p.price}</span>
                  {p.oldPrice && <span className="price-old">{p.oldPrice}</span>}
                  <span className="price-period">{p.period}</span>
                </div>
                <p className="price-desc">{p.desc}</p>
                <div className="price-features">
                  <strong>What's included:</strong>
                  <ul>
                    {p.features.map((f) => (
                      <li key={f}><FiCheck /> {f}</li>
                    ))}
                  </ul>
                </div>
                <Link to="/contact" className="btn-price">Submit your idea</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="container faq-wrap">
          <div className="tag"><span className="dot" /> FAQ</div>
          <h2 className="sec-h2">Frequently asked questions</h2>
          <p className="sec-sub">Discover how we tackle your questions.</p>

          <div className="faq-list">
            {faqs.map((f, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  <span>{f.q}</span>
                  {openFaq === i ? <FiMinus /> : <FiPlus />}
                </button>
                {openFaq === i && <p className="faq-a">{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="sec sec-alt">
        <div className="container">
          <div className="tag"><span className="dot" /> Blog</div>
          <h2 className="sec-h2">Recent news</h2>
          <p className="sec-sub">Explore our latest articles, insights, and creative thoughts.</p>

          <div className="news-grid">
            {news.map((n) => (
              <div className="news-card" key={n.title}>
                <div className="news-img"><img src={n.img} alt={n.title} /></div>
                <div className="news-meta">
                  <span>{n.cat}</span> · <span>{n.date}</span>
                </div>
                <h4>{n.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="sec">
        <div className="container contact-wrap">
          <div className="contact-left">
            <div className="tag"><span className="dot" /> Contact</div>
            <h2 className="sec-h2">Get in touch</h2>
            <p className="sec-sub">Let's collaborate and create something amazing. Tell us about your project.</p>

            <div className="contact-info">
              <a href="mailto:contact@youritfirm.com"><FiMail /> contact@youritfirm.com</a>
              <a href="tel:+880"><FiPhone /> +880 1XXX-XXXXXX</a>
              <span><FiMapPin /> Tech Hub Tower, Level 4, Dhaka</span>
            </div>
          </div>

          <form
            className="contact-form"
            onSubmit={(e) => { e.preventDefault(); window.location.href = '/contact'; }}
          >
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Tell us about your project..." rows="5" required />
            <button type="submit" className="btn-price">Submit message</button>
          </form>
        </div>
      </section>
    </>
  );
}