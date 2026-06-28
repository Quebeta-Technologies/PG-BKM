import { useState, useEffect, useRef } from 'react';
import { CheckCircle2, Sunrise, Sun, Moon, Utensils, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import Reveal from '../ui/Reveal.jsx';
import Eyebrow from '../ui/Eyebrow.jsx';
import { FOOD } from '../data.js';

const ICON_MAP = { Sunrise, Sun, Moon, Utensils };

const FOOD_IMAGES = [
  '/images/f1.png',
  '/images/f2.png',
  '/images/f3.png',
  '/images/f4.png',
];

const ORDERED_MEALS = ['Breakfast', 'Lunch', 'Dinner'];

export default function Food() {
  const [current, setCurrent] = useState(0);
  const [openMeal, setOpenMeal] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const timerRef = useRef(null);
  const dragStartX = useRef(null);
  const isDragging = useRef(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 960);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setCurrent((s) => (s + 1) % FOOD_IMAGES.length), 3000);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => setCurrent((s) => (s + 1) % FOOD_IMAGES.length), 3000);
    return () => clearInterval(timerRef.current);
  }, []);

  const goNext = () => { setCurrent((s) => (s + 1) % FOOD_IMAGES.length); resetTimer(); };
  const goPrev = () => { setCurrent((s) => (s - 1 + FOOD_IMAGES.length) % FOOD_IMAGES.length); resetTimer(); };

  const handleTouchStart = (e) => {
    dragStartX.current = e.touches[0].clientX;
    clearInterval(timerRef.current);
  };
  const handleTouchEnd = (e) => {
    if (dragStartX.current === null) return;
    const diff = dragStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? goNext() : goPrev();
    dragStartX.current = null;
    resetTimer();
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    clearInterval(timerRef.current);
    e.preventDefault();
  };
  const handleMouseUp = (e) => {
    if (!isDragging.current) return;
    const diff = dragStartX.current - e.clientX;
    if (Math.abs(diff) > 40) diff > 0 ? goNext() : goPrev();
    isDragging.current = false;
    dragStartX.current = null;
    resetTimer();
  };
  const handleMouseLeave = () => {
    isDragging.current = false;
    dragStartX.current = null;
    resetTimer();
  };

  const sortedMeals = [...FOOD.meals].sort(
    (a, b) => ORDERED_MEALS.indexOf(a.name) - ORDERED_MEALS.indexOf(b.name)
  );

  const arrowStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 10,
    width: '40px',
    height: '40px',
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
    <section className="section plain-bg" id="food">
      <div className="container">
        <Reveal>
          <Eyebrow centered={false}>Ghar ka khana</Eyebrow>
          <h2>Home-cooked meals, every single day.</h2>
          <p style={{ color: 'var(--ink-muted)', fontSize: 17, marginTop: '8px' }}>
            Our in-house kitchen serves fresh, hot meals — both veg and non-veg. No third-party tiffin.
          </p>
        </Reveal>

        <div className="food-grid" style={{ marginTop: '32px' }}>

          {/* LEFT — image carousel */}
          <Reveal>
            <div style={{ position: 'relative' }}>
              <div
                style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px', aspectRatio: '4/3', cursor: 'grab', userSelect: 'none' }}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
              >
                {FOOD_IMAGES.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Home-cooked meals at Sri Krishna PG"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: i === current ? 1 : 0,
                      transition: 'opacity 0.8s ease',
                      pointerEvents: 'none',
                    }}
                  />
                ))}
              </div>

              {!isMobile && (
                <>
                  <button
                    onClick={goPrev}
                    style={{ ...arrowStyle, left: '-20px' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--navy)'; e.currentTarget.style.color = 'white'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--white)'; e.currentTarget.style.color = 'var(--navy)'; }}
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={goNext}
                    style={{ ...arrowStyle, right: '-20px' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--navy)'; e.currentTarget.style.color = 'white'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--white)'; e.currentTarget.style.color = 'var(--navy)'; }}
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              )}
            </div>
          </Reveal>

          {/* RIGHT */}
          <Reveal delay={150}>
            <div style={{ position: 'relative' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {sortedMeals.map((m) => {
                  const Icon = ICON_MAP[m.icon] || Utensils;
                  const isOpen = openMeal === m.name;
                  return (
                    <div
                      key={m.name}
                      style={{
                        position: 'relative',
                        marginBottom: isOpen ? '90px' : '0',
                        transition: 'margin-bottom 0.3s ease',
                      }}
                    >
                      <button
                        onClick={() => setOpenMeal(isOpen ? null : m.name)}
                        style={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: '14px 16px',
                          background: isOpen ? 'var(--navy)' : 'white',
                          border: '1px solid rgba(26,45,110,0.12)',
                          borderRadius: isOpen ? '12px 12px 0 0' : '12px',
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'background 0.2s',
                        }}
                      >
                        <div style={{
                          width: '36px', height: '36px', borderRadius: '10px',
                          background: 'var(--gold)', color: 'var(--navy-deep)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          flexShrink: 0,
                        }}>
                          <Icon size={18} />
                        </div>
                        <span style={{ fontWeight: 600, fontSize: 16, color: isOpen ? 'white' : 'var(--navy)', flex: 1 }}>
                          {m.name}
                        </span>
                        <ChevronDown size={18} style={{ color: isOpen ? 'white' : 'var(--ink-muted)', transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }} />
                      </button>

                      {isOpen && (
                        <div style={{
                          position: 'absolute',
                          top: '100%',
                          left: 0,
                          right: 0,
                          zIndex: 100,
                          background: '#f8f9fc',
                          border: '1px solid rgba(26,45,110,0.12)',
                          borderTop: 'none',
                          borderRadius: '0 0 12px 12px',
                          padding: '14px 16px',
                          boxShadow: '0 8px 24px rgba(26,45,110,0.12)',
                        }}>
                          <p style={{ margin: '0 0 6px', color: 'var(--teal)', fontWeight: 600, fontSize: 13 }}>{m.time}</p>
                          <p style={{ margin: 0, color: 'var(--ink-muted)', fontSize: 14, lineHeight: 1.6 }}>{m.items}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 16px', marginTop: '20px' }}>
                {FOOD.highlights.map((h) => (
                  <div key={h} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--teal)', flexShrink: 0 }} />
                    <span style={{ fontSize: 14, color: 'var(--ink-muted)' }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}