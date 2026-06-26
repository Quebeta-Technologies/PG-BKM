import { useState, useRef, useEffect } from 'react';
import { MapPin, Navigation, Briefcase, ShoppingBag, Coffee, GraduationCap, ShoppingCart, Heart, Car, Train, ChevronLeft, ChevronRight } from 'lucide-react';
import Reveal from '../ui/Reveal.jsx';
import Eyebrow from '../ui/Eyebrow.jsx';
import { LOCATIONS, LANDMARKS } from '../data.js';

const ICON_MAP = { Briefcase, ShoppingBag, Coffee, GraduationCap, ShoppingCart, Heart, Car, Train, MapPin };

const EMBED_URLS = [
  'https://maps.google.com/maps?q=18.5590,73.7868&z=16&output=embed',
  'https://maps.google.com/maps?q=18.5575,73.7845&z=16&output=embed',
  'https://maps.google.com/maps?q=18.5560,73.7880&z=16&output=embed',
  'https://maps.google.com/maps?q=18.5550,73.7672&z=16&output=embed',
];

export default function Locations() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);
  const total = LOCATIONS.length;

  const next = () => setCurrent((c) => (c + 1) % total);
  const prev = () => setCurrent((c) => (c - 1 + total) % total);

  const resetTimer = (fn) => {
    clearInterval(timerRef.current);
    fn();
    timerRef.current = setInterval(next, 3500);
  };

  useEffect(() => {
    timerRef.current = setInterval(next, 3500);
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <section className="section plain-bg" id="locations">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <Eyebrow>Four homes across Baner</Eyebrow>
            <h2>Pick the branch closest to your work or college.</h2>
            <p className="lede">
              All four of our branches are in Baner — minutes from Hinjewadi IT Park, Balewadi, and
              the Mumbai-Pune highway.
            </p>
          </Reveal>
        </div>

        {/* Carousel */}
        <Reveal>
          <div style={{ position: 'relative' }}>
            {/* Track */}
            <div style={{ overflow: 'hidden', borderRadius: '12px' }}>
              <div style={{
                display: 'flex',
                transition: 'transform 0.5s ease',
                transform: `translateX(-${current * 100}%)`,
              }}>
                {LOCATIONS.map((l, i) => (
                  <div key={l.name} style={{ minWidth: '100%', padding: '0 4px', boxSizing: 'border-box' }}>
                    <div className="location-card-new">
                      <div className="location-mini-map" style={{ height: '280px' }}>
                        <iframe
                          title={l.name}
                          src={EMBED_URLS[i]}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          style={{ width: '100%', height: '100%', border: 0, display: 'block', pointerEvents: 'none' }}
                        />
                        
                          href={l.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="location-map-overlay"
                          title="Open in Google Maps"
                        >
                          <div className="location-map-btn">
                            <Navigation size={14} /> Open in Maps
                          </div>
                        </a>
                      </div>

                      <div className="location-card-body">
                        <div className="location-num-badge">{String(i + 1).padStart(2, '0')}</div>
                        <div className="location-info">
                          <h3>{l.name}</h3>
                          <div className="location-meta">
                            <span>
                              <MapPin size={13} style={{ display: 'inline', verticalAlign: '-2px', marginRight: 4 }} />
                              {l.area}
                            </span>
                            <span className="tag">{l.tag}</span>
                          </div>
                          <a href={l.url} target="_blank" rel="noopener noreferrer" className="location-link">
                            <Navigation size={14} /> Get directions →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prev / Next arrows */}
            <button
              onClick={() => resetTimer(prev)}
              style={{
                position: 'absolute', left: '-20px', top: '40%', transform: 'translateY(-50%)',
                width: '40px', height: '40px', borderRadius: '50%',
                background: 'var(--navy)', color: 'white', border: 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', boxShadow: '0 4px 12px rgba(26,45,110,0.2)',
              }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => resetTimer(next)}
              style={{
                position: 'absolute', right: '-20px', top: '40%', transform: 'translateY(-50%)',
                width: '40px', height: '40px', borderRadius: '50%',
                background: 'var(--navy)', color: 'white', border: 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', boxShadow: '0 4px 12px rgba(26,45,110,0.2)',
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '20px' }}>
            {LOCATIONS.map((_, i) => (
              <button
                key={i}
                onClick={() => resetTimer(() => setCurrent(i))}
                style={{
                  width: i === current ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: i === current ? 'var(--navy)' : 'rgba(26,45,110,0.2)',
                  border: 'none', cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </Reveal>

        {/* NEARBY LANDMARKS */}
        <div className="section-head" style={{ marginTop: 80, marginBottom: 16 }}>
          <Reveal>
            <Eyebrow>Everything within reach</Eyebrow>
            <h2>What's nearby.</h2>
            <p className="lede">Distances from Baner — measured from our central branches.</p>
          </Reveal>
        </div>

        <div className="landmarks-grid">
          {LANDMARKS.map((l, i) => {
            const Icon = ICON_MAP[l.icon] || MapPin;
            return (
              <Reveal key={l.name} delay={i * 60}>
                <div className="landmark-card">
                  <div className="landmark-icon"><Icon size={20} /></div>
                  <div className="landmark-name">{l.name}</div>
                  <div className="landmark-meta">
                    <span className="landmark-type">{l.type}</span>
                    <span className="landmark-dist">{l.dist}</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}