import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES } from '../data.js';

export default function Hero() {
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setSlide((s) => (s + 1) % HERO_SLIDES.length), 5500);
    return () => clearInterval(t);
  }, [paused]);

  const goTo = useCallback(
    (i) => setSlide(((i % HERO_SLIDES.length) + HERO_SLIDES.length) % HERO_SLIDES.length),
    []
  );

  return (
    <section
      className="hero"
      id="top"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {HERO_SLIDES.map((s, i) => (
        <div key={i} className={`hero-slide ${i === slide ? 'active' : ''}`}>
          <img src={s.src} alt={s.title} />
          <div className="hero-overlay" />
        </div>
      ))}

      <div className="hero-nav">
        <div className="hero-dots">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              className={`hero-dot ${i === slide ? 'active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <div className="hero-arrows">
          <button className="hero-arrow" onClick={() => goTo(slide - 1)} aria-label="Previous">
            <ChevronLeft size={20} />
          </button>
          <button className="hero-arrow" onClick={() => goTo(slide + 1)} aria-label="Next">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}