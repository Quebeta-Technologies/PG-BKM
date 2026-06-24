import { CheckCircle2 } from 'lucide-react';
import Reveal from '../ui/Reveal.jsx';
import Eyebrow from '../ui/Eyebrow.jsx';

const POINTS = [
  'Separate, dedicated floors for boys and girls',
  'Walking distance from IT parks, malls, and bus stops',
  'No brokerage. No hidden charges. Transparent rent.',
  'Flexible stays — monthly, quarterly, or yearly',
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
                  alt="Sri Krishna PG common area"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="welcome-body">
              <Eyebrow centered={false}>Welcome home</Eyebrow>
              <h2>A PG that actually feels like a home, not a hostel.</h2>
              <p>
                Sri Krishna PG has been welcoming students, working professionals, and newcomers to
                Pune for over eight years. Across our four branches in Baner, we offer fully-furnished
                rooms, home-cooked meals, and a community that looks out for one another.
              </p>
              <p>
                Whether you are starting your first job, attending college, or simply new to the city —
                we will make sure your stay in Pune feels less like an arrangement and more like a
                beginning.
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
