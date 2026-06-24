import { MapPin, Navigation, Briefcase, ShoppingBag, Coffee, GraduationCap, ShoppingCart, Heart, Car, Train } from 'lucide-react';
import Reveal from '../ui/Reveal.jsx';
import Eyebrow from '../ui/Eyebrow.jsx';
import { LOCATIONS, LANDMARKS } from '../data.js';

const ICON_MAP = { Briefcase, ShoppingBag, Coffee, GraduationCap, ShoppingCart, Heart, Car, Train, MapPin };

export default function Locations() {
  return (
    <section className="section plain-bg" id="locations">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <Eyebrow>Four homes across Baner</Eyebrow>
            <h2>Pick the branch closest to your work or college.</h2>
            <p className="lede">
              All four of our branches are in Baner — minutes from Hinjewadi IT Park, Balewadi, and
              the Mumbai-Pune highway.
            </p>
          </Reveal>
        </div>

        <div className="locations-grid">
          {LOCATIONS.map((l, i) => (
            <Reveal key={l.name} delay={i * 80}>
              <div className="location-card">
                <div className="location-num">{String(i + 1).padStart(2, '0')}</div>
                <div className="location-body">
                  <h3>{l.name}</h3>
                  <div className="location-meta">
                    <span>
                      <MapPin size={13} style={{ display: 'inline', verticalAlign: '-2px', marginRight: 4 }} />
                      {l.area}
                    </span>
                    <span className="tag">{l.tag}</span>
                  </div>
                  <a href={l.url} target="_blank" rel="noopener noreferrer" className="location-link">
                    <Navigation size={14} /> Get directions →
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="map-wrap">
            <iframe
              title="Sri Krishna PG locations in Baner, Pune"
              src="https://maps.google.com/maps?q=Baner,Pune&z=15&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ width: '100%', height: '420px', border: 0, display: 'block' }}
            />
            {/* Branch links legend */}
            <div className="map-legend">
              {LOCATIONS.map((l, i) => (
                <a key={i} href={l.url} target="_blank" rel="noopener noreferrer" className="map-legend-item">
                  <div className="map-legend-dot" style={{ background: i === 3 ? 'var(--gold)' : 'var(--navy)' }}>
                    {i + 1}
                  </div>
                  <span>{l.name.replace('Sri Krishna PG — ', '')}</span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* NEARBY LANDMARKS */}
        <div className="section-head" style={{ marginTop: 80, marginBottom: 16 }}>
          <Reveal>
            <Eyebrow>Everything within reach</Eyebrow>
            <h2>What's nearby.</h2>
            <p className="lede">Distances from Baner — measured from our central branches.</p>
          </Reveal>
        </div>

        <div className="landmarks-grid">
          {LANDMARKS.map((l, i) => {
            const Icon = ICON_MAP[l.icon] || MapPin;
            return (
              <Reveal key={l.name} delay={i * 60}>
                <div className="landmark-card">
                  <div className="landmark-icon"><Icon size={20} /></div>
                  <div className="landmark-name">{l.name}</div>
                  <div className="landmark-meta">
                    <span className="landmark-type">{l.type}</span>
                    <span className="landmark-dist">{l.dist}</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}