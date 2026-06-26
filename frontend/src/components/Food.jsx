import { useState, useEffect } from 'react';
import { CheckCircle2, Sunrise, Sun, Moon, Utensils, ChevronDown } from 'lucide-react';
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

const ORDERED_MEALS = ['Breakfast', 'Lunch', 'Dinner'];

export default function Food() {
  const [current, setCurrent] = useState(0);
  const [openMeal, setOpenMeal] = useState(null);

  useEffect(() => {
    const t = setInterval(() => setCurrent((s) => (s + 1) % FOOD_IMAGES.length), 3000);
    return () => clearInterval(t);
  }, []);

  const sortedMeals = [...FOOD.meals].sort(
    (a, b) => ORDERED_MEALS.indexOf(a.name) - ORDERED_MEALS.indexOf(b.name)
  );

  return (
    <section className="section plain-bg" id="food">
      <div className="container">

        {/* Eyebrow + heading — full width, left aligned */}
        <Reveal>
          <Eyebrow centered={false}>Ghar ka khana</Eyebrow>
          <h2 style={{ whiteSpace: 'nowrap' }}>Home-cooked meals, every single day.</h2>
        </Reveal>

        <div className="food-grid" style={{ marginTop: '32px' }}>

          {/* LEFT — image carousel */}
          <Reveal>
            <div className="food-img" style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px', aspectRatio: '4/3' }}>
              {FOOD_IMAGES.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Home-cooked meals at Sri Krishna PG"
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

          {/* RIGHT — description + accordion */}
          <Reveal delay={150}>
            <div className="food-body">
              <p style={{ color: 'var(--ink-muted)', fontSize: 17 }}>
                Our in-house kitchen serves fresh, hot meals — both vegetarian and non-vegetarian.
                No third-party tiffin, no shortcuts. Breakfast & Dinner daily. Lunch available on weekends.
              </p>

              <div className="food-meals" style={{ gap: '10px', display: 'flex', flexDirection: 'column' }}>
                {sortedMeals.map((m) => {
                  const Icon = ICON_MAP[m.icon] || Utensils;
                  const isOpen = openMeal === m.name;
                  return (
                    <div
                      key={m.name}
                      style={{
                        border: '1px solid rgba(26,45,110,0.12)',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: isOpen ? '0 4px 16px rgba(26,45,110,0.08)' : 'none',
                      }}
                    >
                      <button
                        onClick={() => setOpenMeal(isOpen ? null : m.name)}
                        style={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: '14px 16px',
                          background: isOpen ? 'var(--navy)' : 'white',
                          border: 'none',
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'background 0.2s',
                        }}
                      >
                        <div style={{
                          width: '36px', height: '36px', borderRadius: '10px',
                          background: 'var(--gold)', color: 'var(--navy-deep)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          flexShrink: 0,
                        }}>
                          <Icon size={18} />
                        </div>
                        <span style={{ fontWeight: 600, fontSize: 16, color: isOpen ? 'white' : 'var(--navy)', flex: 1 }}>
                          {m.name}
                        </span>
                        <ChevronDown size={18} style={{ color: isOpen ? 'white' : 'var(--ink-muted)', transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }} />
                      </button>
                      <div style={{ maxHeight: isOpen ? '200px' : '0', overflow: 'hidden', transition: 'max-height 0.35s ease' }}>
                        <div style={{ padding: '14px 16px', background: '#f8f9fc' }}>
                          <p style={{ margin: '0 0 6px', color: 'var(--teal)', fontWeight: 600, fontSize: 13 }}>{m.time}</p>
                          <p style={{ margin: 0, color: 'var(--ink-muted)', fontSize: 14, lineHeight: 1.6 }}>{m.items}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="food-highlights" style={{ marginTop: '20px' }}>
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