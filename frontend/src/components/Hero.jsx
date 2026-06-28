import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES, HERO_SLIDES_MOBILE } from '../data.js';

export default function Hero() {
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const slides = isMobile ? HERO_SLIDES_MOBILE : HERO_SLIDES;

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setSlide((s) => (s + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, [paused, slides.length]);

  const goTo = useCallback(
    (i) => setSlide(((i % slides.length) + slides.length) % slides.length),
    [slides.length]
  );

  return (
    <section
      className="hero"
      id="top"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((s, i) => (
        <div key={i} className={`hero-slide ${i === slide ? 'active' : ''}`}>
          <img src={s.src} alt={s.title} />
          <div className="hero-overlay" />
        </div>
      ))}

      <div className="hero-nav">
        <div className="hero-dots">
          {slides.map((_, i) => (
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