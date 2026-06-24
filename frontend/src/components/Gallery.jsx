import { useEffect, useState } from 'react';
import Reveal from '../ui/Reveal.jsx';
import Eyebrow from '../ui/Eyebrow.jsx';

const PHOTOS = [
  'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=900&q=80',
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
  const cols = useColumns();

  useEffect(() => {
    const t = setInterval(() => {
      setSliding(true);
      setTimeout(() => {
        setStart((s) => (s + 1) % PHOTOS.length);
        setSliding(false);
      }, 600);
    }, 2500);
    return () => clearInterval(t);
  }, []);

  const visible = Array.from({ length: cols }, (_, i) => PHOTOS[(start + i) % PHOTOS.length]);
  const next = PHOTOS[(start + cols) % PHOTOS.length];
  const itemWidth = cols === 1 ? '100%' : cols === 2 ? 'calc(50% - 8px)' : 'calc(25% - 12px)';
  const slideOffset = cols === 1 ? 'calc(-100% - 16px)' : cols === 2 ? 'calc(-50% - 8px)' : 'calc(-25% - 4px)';

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

        <div style={{ overflow: 'hidden', width: '100%' }}>
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
    </section>
  );
}