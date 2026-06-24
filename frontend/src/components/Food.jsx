import { CheckCircle2, Sunrise, Sun, Moon, Utensils } from 'lucide-react';
import Reveal from '../ui/Reveal.jsx';
import Eyebrow from '../ui/Eyebrow.jsx';
import { FOOD } from '../data.js';

const ICON_MAP = { Sunrise, Sun, Moon, Utensils };

export default function Food() {
  return (
    <section className="section plain-bg" id="food">
      <div className="container">
        <div className="food-grid">
          <Reveal>
            <div className="food-img">
              <img src={FOOD.image} alt="Home-cooked vegetarian meals at Sri Krishna PG" />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="food-body">
              <Eyebrow centered={false}>Ghar ka khana</Eyebrow>
              <h2>Three home-cooked meals, every single day.</h2>
              <p style={{ color: 'var(--ink-muted)', fontSize: 17 }}>
                Our in-house kitchen serves fresh, hot, vegetarian meals — no third-party tiffin, no
                shortcuts. The kind of food that gets you out of bed in the morning.
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
