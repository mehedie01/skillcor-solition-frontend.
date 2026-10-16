import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiMail, FiPhone, FiMapPin, FiClock,
  FiSend, FiCheck, FiArrowUpRight, FiAlertCircle,
  FiMessageCircle, FiBriefcase, FiHeadphones, FiLoader,
} from 'react-icons/fi';
import { api } from '../api/endpoints';

const contactMethods = [
  {
    icon: <FiMail />,
    title: 'Email Us',
    desc: 'We reply within 24 hours',
    value: 'contact@skillcoresolution.com',
    link: 'mailto:contact@skillcoresolution.com',
  },
  {
    icon: <FiPhone />,
    title: 'Call Us',
    desc: 'Sun–Thu, 10 AM – 7 PM',
    value: '+880 1XXX-XXXXXX',
    link: 'tel:+880',
  },
  {
    icon: <FiMapPin />,
    title: 'Visit Office',
    desc: 'Tech Hub Tower, Level 4',
    value: 'Banani, Dhaka 1213, BD',
    link: 'https://maps.google.com/?q=Banani+Dhaka',
  },
  {
    icon: <FiClock />,
    title: 'Working Hours',
    desc: 'Weekend closed',
    value: 'Sun–Thu: 10AM – 7PM',
    link: null,
  },
];

const services = [
  'Web Development',
  'Mobile App Development',
  'UI/UX & Brand Design',
  'Digital Marketing',
  'Video Editing & Animation',
  'Cybersecurity',
  'Freelance / Outsourcing',
  'IT Training',
  'Other',
];

const budgets = ['< $500', '$500 – $1,500', '$1,500 – $5,000', '$5,000 – $10,000', '$10,000+'];

const faqs = [
  { q: 'How fast do you reply?', a: 'We usually reply within 24 hours on business days.' },
  { q: 'Do you work with international clients?', a: 'Yes! We serve clients in 15+ countries with flexible timezone communication.' },
  { q: 'What if I only have an idea?', a: 'Perfect — we help you shape your idea into a full product strategy, then design & build it.' },
  { q: 'Do you sign NDAs?', a: 'Absolutely. We can sign NDAs before any project discussion.' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '',
    service: '', budget: '', message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [feedback, setFeedback] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear field error on typing
    if (fieldErrors[e.target.name]) {
      setFieldErrors({ ...fieldErrors, [e.target.name]: null });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setFeedback('');
    setFieldErrors({});

    try {
      const res = await api.sendContact(formData);
      setStatus('success');
      setFeedback(res.data.message || 'Message sent! We will reply within 24 hours.');
      setFormData({
        name: '', email: '', phone: '', company: '',
        service: '', budget: '', message: '',
      });
      setTimeout(() => setStatus('idle'), 6000);
    } catch (err) {
      setStatus('error');

      // Field-level errors from Django
      if (err?.response?.data?.errors) {
        setFieldErrors(err.response.data.errors);
        setFeedback('Please check the highlighted fields.');
      } else {
        setFeedback(err.friendlyMessage || 'Something went wrong. Please try again.');
      }
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  return (
    <>
      {/* ===== PAGE HERO ===== */}
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div className="tag"><span className="dot" /> Contact</div>
          <h1 className="page-title">
            Let's build something <span>amazing together</span>
          </h1>
          <p className="page-sub">
            Tell us about your project. We'll get back to you within 24 hours with
            a plan, timeline, and quote.
          </p>
        </div>
      </section>

      {/* ===== CONTACT METHODS ===== */}
      <section className="sec">
        <div className="container">
          <div className="contact-methods">
            {contactMethods.map((m) => {
              const Wrapper = m.link ? 'a' : 'div';
              const linkProps = m.link
                ? { href: m.link, target: m.link.startsWith('http') ? '_blank' : '_self', rel: 'noreferrer' }
                : {};
              return (
                <Wrapper key={m.title} className="contact-method" {...linkProps}>
                  <div className="cm-icon">{m.icon}</div>
                  <h4>{m.title}</h4>
                  <p className="cm-desc">{m.desc}</p>
                  <p className="cm-value">{m.value}</p>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== FORM + INFO ===== */}
      <section className="sec sec-alt">
        <div className="container">
          <div className="contact-main">
            {/* LEFT: Info */}
            <div className="contact-info-block">
              <div className="tag"><span className="dot" /> Get in touch</div>
              <h2 className="sec-h2">Tell us about your project</h2>
              <p className="sec-sub">
                Fill out the form and our team will reach out to discuss your
                goals, timeline, and budget.
              </p>

              <div className="info-points">
                <div className="info-point">
                  <div className="ip-icon"><FiMessageCircle /></div>
                  <div>
                    <h5>Free Consultation</h5>
                    <p>30-minute discovery call to understand your needs.</p>
                  </div>
                </div>

                <div className="info-point">
                  <div className="ip-icon"><FiBriefcase /></div>
                  <div>
                    <h5>Detailed Proposal</h5>
                    <p>Custom plan with timeline, deliverables, and pricing.</p>
                  </div>
                </div>

                <div className="info-point">
                  <div className="ip-icon"><FiHeadphones /></div>
                  <div>
                    <h5>Dedicated Support</h5>
                    <p>A single point of contact throughout your project.</p>
                  </div>
                </div>
              </div>

              <div className="info-quick">
                <p>Prefer email? Reach us directly:</p>
                <a href="mailto:contact@skillcoresolution.com" className="quick-mail">
                  <FiMail /> contact@skillcoresolution.com
                </a>
              </div>
            </div>

            {/* RIGHT: Form */}
            <div className="contact-form-block">
              <form className="contact-main-form" onSubmit={handleSubmit} noValidate>
                <h3>Send us a message</h3>

                {/* Feedback banner */}
                {status === 'success' && (
                  <div className="form-banner success">
                    <FiCheck /> {feedback}
                  </div>
                )}
                {status === 'error' && (
                  <div className="form-banner error">
                    <FiAlertCircle /> {feedback}
                  </div>
                )}

                <div className="form-row">
                  <div className="form-field">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={fieldErrors.name ? 'input-error' : ''}
                    />
                    {fieldErrors.name && (
                      <span className="field-error">{fieldErrors.name[0]}</span>
                    )}
                  </div>
                  <div className="form-field">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={fieldErrors.email ? 'input-error' : ''}
                    />
                    {fieldErrors.email && (
                      <span className="field-error">{fieldErrors.email[0]}</span>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+880 1XXX-XXXXXX"
                    />
                  </div>
                  <div className="form-field">
                    <label>Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label>Service Needed *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={fieldErrors.service ? 'input-error' : ''}
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {fieldErrors.service && (
                      <span className="field-error">{fieldErrors.service[0]}</span>
                    )}
                  </div>
                  <div className="form-field">
                    <label>Estimated Budget</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      <option value="">Select budget range</option>
                      {budgets.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-field">
                  <label>Project Details *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                    className={fieldErrors.message ? 'input-error' : ''}
                  />
                  {fieldErrors.message && (
                    <span className="field-error">{fieldErrors.message[0]}</span>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn-submit"
                  disabled={status === 'loading' || status === 'success'}
                >
                  {status === 'loading' && (<><FiLoader className="spin" /> Sending...</>)}
                  {status === 'success' && (<><FiCheck /> Message Sent!</>)}
                  {(status === 'idle' || status === 'error') && (
                    <>Send Message <FiSend /></>
                  )}
                </button>

                <p className="form-note">
                  We respect your privacy. Your information will never be shared.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <div className="tag"><span className="dot" /> Find us</div>
          <h2 className="sec-h2">Our location</h2>
          <p className="sec-sub">Visit our office or find us on the map.</p>

          <div className="contact-map">
            <iframe
              title="Skill Core Solution Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.0186751112025!2d90.40236131542978!3d23.79367398456207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a3c3d3a2b7%3A0x1c1e5b3f8f8e8e8e!2sBanani%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="sec sec-alt">
        <div className="container faq-wrap">
          <div className="tag"><span className="dot" /> Quick answers</div>
          <h2 className="sec-h2">Before you ask</h2>
          <p className="sec-sub">A few common questions we get.</p>

          <div className="contact-faq-grid">
            {faqs.map((f) => (
              <div className="contact-faq" key={f.q}>
                <h4>{f.q}</h4>
                <p>{f.a}</p>
              </div>
            ))}
          </div>

          <div className="contact-cta-inline">
            <p>Still have questions? Let's talk directly.</p>
            <Link to="/services" className="btn-pill">
              Explore Services <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}