import Reveal from '../ui/Reveal.jsx';
import Eyebrow from '../ui/Eyebrow.jsx';
import { AMENITIES } from '../data.js';

const GIF_MAP = {
  Utensils: 'https://media.giphy.com/media/3o7TKsQ8MQ1B8VFpCU/giphy.gif',
  Wifi: 'https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif',
  ShieldCheck: 'https://media.giphy.com/media/3o6Zt6KHxJTbXCnSvu/giphy.gif',
  Snowflake: 'https://media.giphy.com/media/26BRuo6sLetdllPAQ/giphy.gif',
  Droplets: 'https://media.giphy.com/media/l0MYEqEzwMWFCg8rm/giphy.gif',
  Zap: 'https://media.giphy.com/media/3o7TKF1fSIs1R19B8k/giphy.gif',
  Shirt: 'https://media.giphy.com/media/l0HlNQ03J5JxX6lva/giphy.gif',
  Coffee: 'https://media.giphy.com/media/3o6ZtpxSZbQRRnwCKQ/giphy.gif',
};

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
      <div style={{
        position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0, pointerEvents: 'none',
      }}>
        {[...Array(6)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            borderRadius: '50%',
            background: i % 2 === 0
              ? 'rgba(212, 161, 74, 0.08)'
              : 'rgba(15, 139, 141, 0.1)',
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
            <Eyebrow style={{ color: 'var(--gold-bright)' }}>What's included</Eyebrow>
            <h2 style={{ color: 'white' }}>Everything you need. Nothing you don't.</h2>
            <p className="lede" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Every Sri Krishna PG branch comes equipped with the essentials — and a few comforts
              you didn't expect.
            </p>
          </Reveal>
        </div>

        <div className="amenities-grid">
          {AMENITIES.map((a, i) => (
            <Reveal key={a.title} delay={i * 70}>
              <div className="amenity-card" style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                backdropFilter: 'blur(12px)',
              }}>
                <div className="amenity-icon" style={{
                  background: 'transparent',
                  width: '64px',
                  height: '64px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  marginBottom: '16px',
                }}>
                  <img
                    src={GIF_MAP[a.icon]}
                    alt={a.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <h3 style={{ color: 'white' }}>{a.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.65)' }}>{a.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}