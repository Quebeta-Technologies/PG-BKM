import { useState, useEffect } from 'react';
import { CheckCircle2, Sunrise, Sun, Moon, Utensils } from 'lucide-react';
import Reveal from '../ui/Reveal.jsx';
import Eyebrow from '../ui/Eyebrow.jsx';
import { FOOD } from '../data.js';

const ICON_MAP = { Sunrise, Sun, Moon, Utensils };

const FOOD_IMAGES = [
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=900&q=80',
];

export default function Food() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((s) => (s + 1) % FOOD_IMAGES.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="section plain-bg" id="food">
      <div className="container">
        <div className="food-grid">
          <Reveal>
            <div className="food-img" style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px', aspectRatio: '4/3' }}>
              {FOOD_IMAGES.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Home-cooked vegetarian meals at Sri Krishna PG"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: i === current ? 1 : 0,
                    transition: 'opacity 0.8s ease',
                  }}
                />
              ))}
              <div style={{ position: 'absolute', bottom: '12px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '6px' }}>
                {FOOD_IMAGES.map((_, i) => (
                  <div key={i} onClick={() => setCurrent(i)} style={{ width: i === current ? '20px' : '8px', height: '8px', borderRadius: '4px', background: i === current ? 'var(--gold)' : 'rgba(255,255,255,0.6)', cursor: 'pointer', transition: 'all 0.3s' }} />
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="food-body">
              <Eyebrow centered={false}>Ghar ka khana</Eyebrow>
              <h2>Home-cooked meals, every single day.</h2>
              <p style={{ color: 'var(--ink-muted)', fontSize: 17 }}>
                Our in-house kitchen serves fresh, hot, vegetarian meals — no third-party tiffin, no
                shortcuts. Breakfast & Dinner daily. Lunch available on weekends.
              </p>

              <div className="food-meals">
                {FOOD.meals.map((m) => {
                  const Icon = ICON_MAP[m.icon] || Utensils;
                  return (
                    <div className="food-meal" key={m.name}>
                      <div className="food-meal-icon">
                        <Icon size={22} />
                      </div>
                      <div className="food-meal-body">
                        <div className="food-meal-name">
                          <span>{m.name}</span>
                          <span className="food-meal-time">{m.time}</span>
                        </div>
                        <div className="food-meal-items">{m.items}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="food-highlights">
                {FOOD.highlights.map((h) => (
                  <div className="food-highlight" key={h}>
                    <CheckCircle2 size={16} />
                    <span>{h}</span>
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