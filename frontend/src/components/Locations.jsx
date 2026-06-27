import { useEffect, useRef, useState } from 'react';
import { MapPin, Navigation, Briefcase, ShoppingBag, Coffee, GraduationCap, ShoppingCart, Heart, Car, Train } from 'lucide-react';
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
  const [idx, setIdx] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const timerRef = useRef(null);
  const dragStartX = useRef(null);
  const isDragging = useRef(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const total = isMobile ? LOCATIONS.length : Math.ceil(LOCATIONS.length / 2);

  const goNext = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setIdx((i) => (i + 1) % total);
      setAnimating(false);
    }, 400);
  };

  const goPrev = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setIdx((i) => (i - 1 + total) % total);
      setAnimating(false);
    }, 400);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(goNext, 3000);
  };

  useEffect(() => {
    timerRef.current = setInterval(goNext, 3000);
    return () => clearInterval(timerRef.current);
  }, [animating, isMobile]);

  // Touch handlers
  const handleTouchStart = (e) => {
    dragStartX.current = e.touches[0].clientX;
    clearInterval(timerRef.current);
  };

  const handleTouchEnd = (e) => {
    if (dragStartX.current === null) return;
    const diff = dragStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      diff > 0 ? goNext() : goPrev();
    }
    dragStartX.current = null;
    resetTimer();
  };

  // Mouse handlers
  const handleMouseDown = (e) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    clearInterval(timerRef.current);
    e.preventDefault();
  };

  const handleMouseUp = (e) => {
    if (!isDragging.current) return;
    const diff = dragStartX.current - e.clientX;
    if (Math.abs(diff) > 40) {
      diff > 0 ? goNext() : goPrev();
    }
    isDragging.current = false;
    dragStartX.current = null;
    resetTimer();
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    dragStartX.current = null;
    resetTimer();
  };

  const getPair = () => {
    if (isMobile) return [LOCATIONS[idx]].map((l, i) => ({ l, i: idx }));
    return [LOCATIONS[idx * 2], LOCATIONS[idx * 2 + 1]]
      .filter(Boolean)
      .map((l, i) => ({ l, i: idx * 2 + i }));
  };

  const renderCard = ({ l, i }) => (
    <div key={i} className="location-card-new" style={{ flex: 1 }}>
      <div className="location-mini-map">
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
  );

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

        <Reveal>
          <div
            style={{ position: 'relative', overflow: 'hidden', cursor: 'grab' }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            <div
              key={idx}
              style={{
                display: 'flex',
                gap: '20px',
                animation: animating ? 'locExit 0.4s ease forwards' : 'locEnter 0.4s ease forwards',
                userSelect: 'none',
              }}
            >
              {getPair().map(renderCard)}
            </div>
          </div>
        </Reveal>

        <div className="section-head" style={{ marginTop: 80, marginBottom: 16 }}>
          <Reveal>
            <Eyebrow>Everything within reach</Eyebrow>
            <h2>What's nearby.</h2>
            <p className="lede">Distances from Baner — measured from our central branches.</p>
          </Reveal>
        </div>

        <div className="landmarks-grid">
          {LANDMARKS.map((lm, li) => {
            const Icon = ICON_MAP[lm.icon] || MapPin;
            return (
              <Reveal key={lm.name} delay={li * 60}>
                <div className="landmark-card">
                  <div className="landmark-icon"><Icon size={20} /></div>
                  <div className="landmark-name">{lm.name}</div>
                  <div className="landmark-meta">
                    <span className="landmark-type">{lm.type}</span>
                    <span className="landmark-dist">{lm.dist}</span>
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