import { useEffect, useState, useRef } from 'react';
import { Quote, Star } from 'lucide-react';
import Reveal from '../ui/Reveal.jsx';
import Eyebrow from '../ui/Eyebrow.jsx';
import { TESTIMONIALS } from '../data.js';

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [direction, setDirection] = useState('next');
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef(null);

  const total = Math.floor(TESTIMONIALS.length / 2); // number of pairs

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => goTo('next'), 4000);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => goTo('next'), 4000);
    return () => clearInterval(timerRef.current);
  }, []);

  const goTo = (dir, targetIdx = null) => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setIdx((i) => {
        if (targetIdx !== null) return targetIdx;
        return dir === 'next'
          ? (i + 1) % total
          : (i - 1 + total) % total;
      });
      setAnimating(false);
    }, 350);
    resetTimer();
  };

  const t1 = TESTIMONIALS[idx * 2];
  const t2 = TESTIMONIALS[idx * 2 + 1];

  const renderCard = (t) => (
    <div className="t-card" style={{ flex: 1 }}>
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
  );

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
            <div
              className={`t-slide-${direction} ${animating ? 't-exit' : 't-enter'}`}
              key={idx}
              style={{ display: 'flex', gap: '24px' }}
            >
              {t1 && renderCard(t1)}
              {t2 && renderCard(t2)}
            </div>
          </div>

          {/* Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '32px' }}>
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i > idx ? 'next' : 'prev', i)}
                style={{
                  width: i === idx ? '28px' : '10px',
                  height: '10px',
                  borderRadius: '999px',
                  background: i === idx ? 'var(--gold)' : 'rgba(255,255,255,0.3)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}