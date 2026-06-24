import { CheckCircle2 } from 'lucide-react';
import Reveal from '../ui/Reveal.jsx';
import Eyebrow from '../ui/Eyebrow.jsx';

const POINTS = [
  'Boys & Girls PG in Baner, Pune — separate dedicated floors',
  'Walking distance from Hinjewadi IT Park, malls & bus stops',
  'No brokerage. No hidden charges. Transparent monthly rent.',
  'Flexible stays — monthly, quarterly, or yearly contracts',
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
                  src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=900&q=80"
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
              <p>
                Looking for a PG in Baner near Hinjewadi, Balewadi, or Aundh? Sri Krishna PG offers
                affordable, all-inclusive monthly rent with no brokerage and no hidden charges — just a
                safe, comfortable home in Pune.
              </p>
              <div className="welcome-points">
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