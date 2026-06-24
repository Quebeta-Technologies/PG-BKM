import Reveal from '../ui/Reveal.jsx';
import Counter from '../ui/Counter.jsx';
import { STATS } from '../data.js';

export default function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="stat-num">
                <Counter end={s.num} suffix={s.suffix} />
              </div>
              <div className="stat-label">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
