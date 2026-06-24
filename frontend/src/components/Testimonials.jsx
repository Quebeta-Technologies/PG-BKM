import { useEffect, useState } from 'react';
import { Quote, Star } from 'lucide-react';
import Reveal from '../ui/Reveal.jsx';
import Eyebrow from '../ui/Eyebrow.jsx';
import { TESTIMONIALS } from '../data.js';

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % TESTIMONIALS.length), 6500);
    return () => clearInterval(t);
  }, []);

  const t = TESTIMONIALS[idx];

  return (
    <section className="section testimonials" id="reviews">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <Eyebrow>What residents say</Eyebrow>
            <h2>Trusted by 500+ residents across Baner.</h2>
            <p className="lede">
              Real words from students and professionals who have called Sri Krishna PG home.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="t-carousel">
            <div className="t-card" key={idx}>
              <Quote className="t-quote" size={36} />
              <div className="t-stars">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={18} />
                ))}
              </div>
              <p className="t-text">{t.text}</p>
              <div className="t-author">{t.name}</div>
              <div className="t-role">{t.role}</div>
            </div>
            <div className="t-nav">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  className={`t-dot ${i === idx ? 'active' : ''}`}
                  onClick={() => setIdx(i)}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
