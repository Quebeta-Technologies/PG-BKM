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
  const cardWidth = useRef(320);

  useEffect(() => {
    const updateCardWidth = () => {
      if (window.innerWidth < 640) cardWidth.current = window.innerWidth - 48;
      else if (window.innerWidth < 1024) cardWidth.current = 280;
      else cardWidth.current = 320;
    };
    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);
    return () => window.removeEventListener('resize', updateCardWidth);
  }, []);

  useEffect(() => {
    const gap = 24;
    const singleSetWidth = AMENITIES.length * (cardWidth.current + gap);

    const animate = () => {
      offsetRef.current += 0.5;
      if (offsetRef.current >= singleSetWidth) {
        offsetRef.current -= singleSetWidth;
      }
      setOffset(offsetRef.current);
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

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
        <div className="section-head" style={{ marginBottom: '32px' }}>
          <Reveal>
            <Eyebrow>What's included</Eyebrow>
            <h2 style={{ color: 'white' }}>Everything you need.</h2>
            <p className="lede" style={{ color: 'rgba(255,255,255,0.7)', whiteSpace: 'nowrap' }}>
              Every Sri Krishna PG branch comes equipped with the essentials — and a few comforts you didn't expect.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Infinite carousel — full width, no container */}
      <div style={{ overflow: 'hidden', position: 'relative', zIndex: 1 }}>
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            gap: '24px',
            transform: `translateX(-${offset}px)`,
            willChange: 'transform',
            paddingLeft: '24px',
          }}
        >
          {DUPLICATED.map((a, i) => {
            const Icon = ICON_MAP[a.icon] || Star;
            return (
              <div key={i} style={{
                minWidth: '300px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                backdropFilter: 'blur(12px)',
                borderRadius: '16px',
                padding: '28px 24px',
                flexShrink: 0,
              }}>
                <div className="amenity-icon" style={{ background: 'var(--gold)', color: 'var(--navy-deep)', marginBottom: '16px' }}>
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