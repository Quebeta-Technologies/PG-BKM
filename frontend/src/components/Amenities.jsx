import { useState, useEffect, useRef } from 'react';
import { Utensils, Wifi, ShieldCheck, Snowflake, Droplets, Zap, Shirt, Coffee, Star } from 'lucide-react';
import Reveal from '../ui/Reveal.jsx';
import Eyebrow from '../ui/Eyebrow.jsx';
import { AMENITIES } from '../data.js';

const ICON_MAP = { Utensils, Wifi, ShieldCheck, Snowflake, Droplets, Zap, Shirt, Coffee };
const DUPLICATED = [...AMENITIES, ...AMENITIES, ...AMENITIES];

export default function Amenities() {
  const trackRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const offsetRef = useRef(0);
  const rafRef = useRef(null);
  const cardWidthRef = useRef(300);
  const [cardW, setCardW] = useState(300);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);
  const isPaused = useRef(false);

  const getCardWidth = () => {
    const vw = window.innerWidth;
    if (vw < 640) return vw - 48;
    if (vw < 1024) return 280;
    return 300;
  };

  useEffect(() => {
    const update = () => {
      const w = getCardWidth();
      cardWidthRef.current = w;
      setCardW(w);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    const gap = 20;
    const singleSetWidth = AMENITIES.length * (cardWidthRef.current + gap);

    const animate = () => {
      if (!isPaused.current) {
        offsetRef.current += 0.5;
        if (offsetRef.current >= singleSetWidth) {
          offsetRef.current -= singleSetWidth;
        }
        setOffset(offsetRef.current);
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [cardW]);

  const handleTouchStart = (e) => {
    isDragging.current = true;
    isPaused.current = true;
    dragStartX.current = e.touches[0].clientX;
    dragStartOffset.current = offsetRef.current;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const gap = 20;
    const singleSetWidth = AMENITIES.length * (cardWidthRef.current + gap);
    const diff = dragStartX.current - e.touches[0].clientX;
    let newOffset = dragStartOffset.current + diff;
    if (newOffset < 0) newOffset += singleSetWidth;
    if (newOffset >= singleSetWidth) newOffset -= singleSetWidth;
    offsetRef.current = newOffset;
    setOffset(newOffset);
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    isPaused.current = false;
  };

  return (
    <section
      className="section"
      id="amenities"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0E1F50 0%, #1A2D6E 50%, #0F8B8D 100%)',
        padding: '40px 0',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
        {[...Array(6)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            borderRadius: '50%',
            background: i % 2 === 0 ? 'rgba(212, 161, 74, 0.08)' : 'rgba(15, 139, 141, 0.1)',
            width: `${200 + i * 80}px`,
            height: `${200 + i * 80}px`,
            top: `${[10, 60, 30, 70, 20, 80][i]}%`,
            left: `${[10, 70, 40, 20, 80, 50][i]}%`,
            animation: `blobFloat ${4 + i}s ease-in-out infinite alternate`,
            animationDelay: `${i * 0.5}s`,
          }} />
        ))}
      </div>

      <style>{`
        @keyframes blobFloat {
          from { transform: translate(0, 0) scale(1); }
          to { transform: translate(20px, -20px) scale(1.1); }
        }
      `}</style>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-head" style={{ marginBottom: '32px' }}>
          <Reveal>
            <Eyebrow>What's included</Eyebrow>
            <h2 style={{ color: 'white' }}>Everything you need.</h2>
            <p className="lede" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Every Sri Krishna PG branch comes equipped with the essentials — and a few comforts you didn't expect.
            </p>
          </Reveal>
        </div>
      </div>

      <div
        style={{ overflow: 'hidden', position: 'relative', zIndex: 1 }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            gap: '20px',
            transform: `translateX(-${offset}px)`,
            willChange: 'transform',
            paddingLeft: '24px',
          }}
        >
          {DUPLICATED.map((a, i) => {
            const Icon = ICON_MAP[a.icon] || Star;
            return (
              <div key={i} style={{
                minWidth: `${cardW}px`,
                width: `${cardW}px`,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                backdropFilter: 'blur(12px)',
                borderRadius: '16px',
                padding: '28px 24px',
                flexShrink: 0,
                boxSizing: 'border-box',
              }}>
                <div className="amenity-icon" style={{ background: 'linear-gradient(135deg, #2E8B3A 0%, #1a5c24 100%)', color: 'white', marginBottom: '16px' }}>
                  <Icon size={24} />
                </div>
                <h3 style={{ color: 'white', marginBottom: '8px' }}>{a.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', margin: 0 }}>{a.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}