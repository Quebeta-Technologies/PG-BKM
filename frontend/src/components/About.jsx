import { CheckCircle2 } from 'lucide-react';
import Reveal from '../ui/Reveal.jsx';
import Eyebrow from '../ui/Eyebrow.jsx';

const POINTS = [
  'Boys & Girls PG',
  'Near Hinjewadi IT Park',
  'Zero brokerage',
  'No hidden charges',
  '4 branches in Baner',
  'Veg & non-veg meals daily',
  '24×7 CCTV',
  'High-speed Wi-Fi',
  'AC & Non-AC rooms',
  'Daily housekeeping',
];

export default function About() {
  return (
    <section className="section grid-bg" id="about">
      <div className="container">
        <div className="welcome-grid">
          <Reveal>
            <div className="welcome-img-wrap">
              <div className="welcome-img">
                <img
                  src="/images/about.png"
                  alt="Sri Krishna PG furnished room in Baner Pune"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="welcome-body">
              <Eyebrow centered={false}>Best PG in Baner, Pune</Eyebrow>
              <h2>Premium PG Accommodation in Baner, Pune for Boys & Girls</h2>
              <p>
                Sri Krishna PG is one of the most trusted paying guest accommodations in Baner, Pune —
                serving students, IT professionals, and working professionals for over 8 years. With 4
                fully-furnished PG branches near Hinjewadi IT Park, we offer single, double and triple
                sharing rooms with home-cooked meals and 24/7 security.
              </p>
              <div className="welcome-points" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 24px' }}>
                {POINTS.map((p) => (
                  <div className="welcome-point" key={p}>
                    <CheckCircle2 size={20} />
                    <span>{p}</span>
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