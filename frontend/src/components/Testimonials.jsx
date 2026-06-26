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

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => goTo('next'), 2000);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => goTo('next'), 2000);
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
          ? (i + 1) % TESTIMONIALS.length
          : (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
      });
      setAnimating(false);
    }, 350);
    resetTimer();
  };

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
            <div
              className={`t-card t-slide-${direction} ${animating ? 't-exit' : 't-enter'}`}
              key={idx}
            >
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}