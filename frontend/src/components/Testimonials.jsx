import { useEffect, useState, useRef } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Reveal from '../ui/Reveal.jsx';
import Eyebrow from '../ui/Eyebrow.jsx';
import { TESTIMONIALS } from '../data.js';

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [direction, setDirection] = useState('next');
  const [animating, setAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const timerRef = useRef(null);
  const dragStartX = useRef(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const total = isMobile ? TESTIMONIALS.length : Math.floor(TESTIMONIALS.length / 2);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => goTo('next'), 4000);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => goTo('next'), 4000);
    return () => clearInterval(timerRef.current);
  }, [isMobile]);

  const goTo = (dir, targetIdx = null) => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setIdx((i) => {
        if (targetIdx !== null) return targetIdx % total;
        return dir === 'next' ? (i + 1) % total : (i - 1 + total) % total;
      });
      setAnimating(false);
    }, 350);
    resetTimer();
  };

  const handleTouchStart = (e) => {
    dragStartX.current = e.touches[0].clientX;
    clearInterval(timerRef.current);
  };

  const handleTouchEnd = (e) => {
    if (dragStartX.current === null) return;
    const diff = dragStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goTo(diff > 0 ? 'next' : 'prev');
    dragStartX.current = null;
    resetTimer();
  };

  const getCards = () => {
    if (isMobile) return [TESTIMONIALS[idx]];
    return [TESTIMONIALS[idx * 2], TESTIMONIALS[idx * 2 + 1]].filter(Boolean);
  };

  const renderCard = (t) => (
    <div className="t-card" style={{ flex: 1 }} key={t.name}>
      <Quote className="t-quote" size={28} />
      <div className="t-stars">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} size={14} />
        ))}
      </div>
      <p className="t-text" style={{ fontSize: '15px', lineHeight: 1.6 }}>{t.text}</p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '20px' }}>
        <img
          src={`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(t.name)}&backgroundColor=1A2D6E&textColor=D4A14A&fontSize=36`}
          alt={t.name}
          style={{ width: '44px', height: '44px', borderRadius: '50%', border: '2px solid var(--gold)', flexShrink: 0 }}
        />
        <div style={{ textAlign: 'left' }}>
          <div className="t-author" style={{ fontSize: '14px' }}>{t.name}</div>
          <div className="t-role" style={{ fontSize: '12px' }}>{t.role}</div>
        </div>
      </div>
    </div>
  );

  const arrowStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 10,
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.1)',
    border: '1px solid rgba(255,255,255,0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: 'white',
    transition: 'all 0.2s ease',
  };

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
          <div style={{ position: 'relative' }}>

            {/* Arrows — desktop only */}
            {!isMobile && (
              <>
                <button
                  onClick={() => goTo('prev')}
                  style={{ ...arrowStyle, left: '-56px' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--navy)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'white'; }}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => goTo('next')}
                  style={{ ...arrowStyle, right: '-56px' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--navy)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'white'; }}
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            <div
              className="t-carousel"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className={`t-slide-${direction} ${animating ? 't-exit' : 't-enter'}`}
                key={idx}
                style={{ display: 'flex', gap: '24px' }}
              >
                {getCards().map(renderCard)}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}