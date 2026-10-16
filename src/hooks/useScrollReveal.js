import { useEffect } from 'react';

export default function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      '.sec-h2, .sec-sub, .service-card, .value-card, .team-full-card, .blog-card, .port-card, .price-card, .news-card, .process-card, .story-stat, .contact-method, .contact-faq, .timeline-item, .featured-post'
    );

    elements.forEach((el) => el.classList.add('reveal'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}