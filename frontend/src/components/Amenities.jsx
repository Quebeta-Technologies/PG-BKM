import { Utensils, Wifi, ShieldCheck, Snowflake, Droplets, Zap, Shirt, Coffee, Star } from 'lucide-react';
import Reveal from '../ui/Reveal.jsx';
import Eyebrow from '../ui/Eyebrow.jsx';
import { AMENITIES } from '../data.js';

const ICON_MAP = { Utensils, Wifi, ShieldCheck, Snowflake, Droplets, Zap, Shirt, Coffee };

export default function Amenities() {
  return (
    <section className="section grid-bg" id="amenities">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <Eyebrow>What's included</Eyebrow>
            <h2>Everything you need. Nothing you don't.</h2>
            <p className="lede">
              Every Sri Krishna PG branch comes equipped with the essentials — and a few comforts
              you didn't expect.
            </p>
          </Reveal>
        </div>

        <div className="amenities-grid">
          {AMENITIES.map((a, i) => {
            const Icon = ICON_MAP[a.icon] || Star;
            return (
              <Reveal key={a.title} delay={i * 70}>
                <div className="amenity-card">
                  <div className="amenity-icon">
                    <Icon size={24} />
                  </div>
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
