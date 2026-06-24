import { Bed, CheckCircle2 } from 'lucide-react';
import Reveal from '../ui/Reveal.jsx';
import Eyebrow from '../ui/Eyebrow.jsx';
import { ROOMS } from '../data.js';

export default function Rooms() {
  return (
    <section className="section grid-bg" id="rooms">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <Eyebrow>Choose your room</Eyebrow>
            <h2>Three room types. One standard of comfort.</h2>
            <p className="lede">
              Every room is fully furnished with bed, mattress, wardrobe, study desk, and ample
              storage.
            </p>
          </Reveal>
        </div>

        <div className="rooms-grid">
          {ROOMS.map((r, i) => (
            <Reveal key={r.type} delay={i * 100}>
              <div className="room-card">
                <Bed size={32} className="room-icon" />
                <h3>{r.type}</h3>
                <p className="room-desc">{r.desc}</p>
                <div className="room-features">
                  {r.features.map((f) => (
                    <div className="room-feature" key={f}>
                      <CheckCircle2 size={16} />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
