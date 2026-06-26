import { useState, useEffect, useRef } from 'react';
import { Utensils, Wifi, ShieldCheck, Snowflake, Droplets, Zap, Shirt, Coffee, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Reveal from '../ui/Reveal.jsx';
import Eyebrow from '../ui/Eyebrow.jsx';
import { AMENITIES } from '../data.js';

const ICON_MAP = { Utensils, Wifi, ShieldCheck, Snowflake, Droplets, Zap, Shirt, Coffee };

export default function Amenities() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);
  const total = AMENITIES.length;

  const getVisible = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 640) return 1;
    if (typeof window !== 'undefined' && window.innerWidth < 1024) return 2;
    return 3;
  };

  const [visible, setVisible] = useState(3);

  useEffect(() => {
    const handleResize = () => setVisible(getVisible());
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = total - visible;

  const next = () => setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
  const prev = () => setCurrent((c) => (c <= 0 ? maxIndex : c - 1));

  useEffect(() => {
    timerRef.current = setInterval(next, 2500);
    return () => clearInterval(timerRef.current);
  }, [visible]);

  const resetTimer = (fn) => {
    clearInterval(timerRef.current);
    fn();
    timerRef.current = setInterval(next, 2500);
  };

  return (
    <section
      className="section"
      id="amenities"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0E1F50 0%, #1A2D6E 50%, #0F8B8D 100%)',
      }}
    >
      {/* Animated background blobs */}
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
        <div className="section-head">
          <Reveal>
            <Eyebrow>What's included</Eyebrow>
            <h2 style={{ color: 'white' }}>Everything you need.</h2>
            <p className="lede" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Every Sri Krishna PG branch comes equipped with the essentials — and a few comforts
              you didn't expect.
            </p>
          </Reveal>
        </div>

        {/* Carousel */}
        <div style={{ position: 'relative', overflow: 'hidden', padding: '0 48px' }}>
          <div style={{
            display: 'flex',
            transition: 'transform 0.5s ease',
            transform: `translateX(-${current * (100 / visible)}%)`,
            gap: '0',
          }}>
            {AMENITIES.map((a) => {
              const Icon = ICON_MAP[a.icon] || Star;
              return (
                <div key={a.title} style={{
                  minWidth: `${100 / visible}%`,
                  padding: '0 12px',
                  boxSizing: 'border-box',
                }}>
                  <div className="amenity-card" style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    backdropFilter: 'blur(12px)',
                    height: '100%',
                  }}>
                    <div className="amenity-icon" style={{ background: 'var(--gold)', color: 'var(--navy-deep)' }}>
                      <Icon size={24} />
                    </div>
                    <h3 style={{ color: 'white' }}>{a.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.65)' }}>{a.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <button onClick={() => resetTimer(prev)} style={{
            position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: '50%',
            width: '40px', height: '40px', cursor: 'pointer', color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => resetTimer(next)} style={{
            position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: '50%',
            width: '40px', height: '40px', cursor: 'pointer', color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px' }}>
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button key={i} onClick={() => resetTimer(() => setCurrent(i))} style={{
              width: i === current ? '24px' : '8px',
              height: '8px',
              borderRadius: '4px',
              background: i === current ? 'var(--gold)' : 'rgba(255,255,255,0.3)',
              border: 'none', cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: 0,
            }} />
          ))}
        </div>
      </div>
    </section>
  );
}