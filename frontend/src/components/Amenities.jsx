import { Utensils, Wifi, ShieldCheck, Snowflake, Droplets, Zap, Shirt, Coffee, Star } from 'lucide-react';
import Reveal from '../ui/Reveal.jsx';
import Eyebrow from '../ui/Eyebrow.jsx';
import { AMENITIES } from '../data.js';

const ICON_MAP = { Utensils, Wifi, ShieldCheck, Snowflake, Droplets, Zap, Shirt, Coffee };

export default function Amenities() {
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
            <h2 style={{ color: 'white' }}>Everything you need. Nothing you don't.</h2>
            <p className="lede" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Every Sri Krishna PG branch comes equipped with the essentials — and a few comforts
              you didn't expect.
            </p>
          </Reveal>
        </div>

        <div className="amenities-grid">
          {AMENITIES.map((a, i) => {
            const Icon = ICON_MAP[a.icon] || Star;
            return (
              <Reveal key={a.title} delay={i * 70}>
                <div className="amenity-card" style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  backdropFilter: 'blur(12px)',
                }}>
                  <div className="amenity-icon">
                    <Icon size={24} />
                  </div>
                  <h3 style={{ color: 'white' }}>{a.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.65)' }}>{a.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}