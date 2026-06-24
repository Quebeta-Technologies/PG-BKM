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

export default function Gallery() {
  const [start, setStart] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setStart((s) => (s + 1) % PHOTOS.length);
    }, 2500);
    return () => clearInterval(t);
  }, []);

  const visible = [0, 1, 2, 3].map((i) => PHOTOS[(start + i) % PHOTOS.length]);

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

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
          {visible.map((src, i) => (
            <div key={i} style={{ borderRadius: '8px', overflow: 'hidden', aspectRatio: '3/4' }}>
              <img
                src={src}
                alt={`Sri Krishna PG room ${start + i + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.5s ease' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}