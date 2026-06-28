import { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Reveal from '../ui/Reveal.jsx';
import Eyebrow from '../ui/Eyebrow.jsx';

const PHOTOS = [
  '/images/g1.png',
  '/images/g2.png',
  '/images/g3.png',
  '/images/g4.png',
  '/images/g5.png',
  '/images/g6.png',
  '/images/g7.png',
  '/images/g8.png',
];

function useColumns() {
  const [cols, setCols] = useState(() => window.innerWidth <= 600 ? 1 : window.innerWidth <= 960 ? 2 : 4);
  useEffect(() => {
    const update = () => setCols(window.innerWidth <= 600 ? 1 : window.innerWidth <= 960 ? 2 : 4);
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return cols;
}

export default function Gallery() {
  const [start, setStart] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [slideDir, setSlideDir] = useState('next');
  const cols = useColumns();
  const timerRef = useRef(null);
  const dragStartX = useRef(null);
  const isMobile = cols === 1;

  const slideNext = () => {
    if (sliding) return;
    setSlideDir('next');
    setSliding(true);
    setTimeout(() => {
      setStart((s) => (s + 1) % PHOTOS.length);
      setSliding(false);
    }, 600);
  };

  const slidePrev = () => {
    if (sliding) return;
    setSlideDir('prev');
    setSliding(true);
    setTimeout(() => {
      setStart((s) => (s - 1 + PHOTOS.length) % PHOTOS.length);
      setSliding(false);
    }, 600);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(slideNext, 2500);
  };

  useEffect(() => {
    timerRef.current = setInterval(slideNext, 2500);
    return () => clearInterval(timerRef.current);
  }, [cols]);

  // Touch
  const handleTouchStart = (e) => {
    dragStartX.current = e.touches[0].clientX;
    clearInterval(timerRef.current);
  };

  const handleTouchEnd = (e) => {
    if (dragStartX.current === null) return;
    const diff = dragStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? slideNext() : slidePrev();
    dragStartX.current = null;
    resetTimer();
  };

  const visible = Array.from({ length: cols }, (_, i) => PHOTOS[(start + i) % PHOTOS.length]);
  const next = PHOTOS[(start + cols) % PHOTOS.length];
  const itemWidth = cols === 1 ? '100%' : cols === 2 ? 'calc(50% - 8px)' : 'calc(25% - 12px)';
  const slideOffset = slideDir === 'next'
    ? (cols === 1 ? 'calc(-100% - 16px)' : cols === 2 ? 'calc(-50% - 8px)' : 'calc(-25% - 4px)')
    : (cols === 1 ? 'calc(100% + 16px)' : cols === 2 ? 'calc(50% + 8px)' : 'calc(25% + 4px)');

  const arrowStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 10,
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    background: 'var(--white)',
    border: '1px solid var(--border)',
    boxShadow: '0 4px 16px rgba(26,45,110,0.12)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: 'var(--navy)',
    transition: 'all 0.2s ease',
  };

  return (
    <section className="section plain-bg" id="gallery">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <Eyebrow>Our Rooms & Spaces</Eyebrow>
            <h2>Take a look inside Sri Krishna PG, Baner</h2>
            <p className="lede">Fully furnished rooms, dining area, and common spaces across all 4 branches.</p>
          </div>
        </Reveal>

        <div style={{ position: 'relative' }}>

          {/* Arrows — desktop only */}
          {!isMobile && (
            <>
              <button
                onClick={() => { slidePrev(); resetTimer(); }}
                style={{ ...arrowStyle, left: '-22px' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--navy)'; e.currentTarget.style.color = 'white'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--white)'; e.currentTarget.style.color = 'var(--navy)'; }}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => { slideNext(); resetTimer(); }}
                style={{ ...arrowStyle, right: '-22px' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--navy)'; e.currentTarget.style.color = 'white'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--white)'; e.currentTarget.style.color = 'var(--navy)'; }}
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          <div
            style={{ overflow: 'hidden', width: '100%' }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              style={{
                display: 'flex',
                gap: '16px',
                transform: sliding ? `translateX(${slideOffset})` : 'translateX(0)',
                transition: sliding ? 'transform 0.6s ease' : 'none',
              }}
            >
              {[...visible, next].map((src, i) => (
                <div
                  key={i}
                  style={{
                    flexShrink: 0,
                    width: itemWidth,
                    borderRadius: '8px',
                    overflow: 'hidden',
                    aspectRatio: '3/4',
                  }}
                >
                  <img
                    src={src}
                    alt={`Sri Krishna PG room ${i + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}