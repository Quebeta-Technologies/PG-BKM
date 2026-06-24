import { MapPin, Navigation, Briefcase, ShoppingBag, Coffee, GraduationCap, ShoppingCart, Heart, Car, Train } from 'lucide-react';
import Reveal from '../ui/Reveal.jsx';
import Eyebrow from '../ui/Eyebrow.jsx';
import { LOCATIONS, LANDMARKS } from '../data.js';

const ICON_MAP = { Briefcase, ShoppingBag, Coffee, GraduationCap, ShoppingCart, Heart, Car, Train, MapPin };

// All 4 branch coordinates in Baner, Pune
const BRANCH_COORDS = [
  { lat: 18.5590, lng: 73.7868, label: '1' },
  { lat: 18.5575, lng: 73.7845, label: '2' },
  { lat: 18.5560, lng: 73.7880, label: '3' },
  { lat: 18.5550, lng: 73.7672, label: '4' },
];

// Build Google Maps embed URL with all 4 markers
const buildMapUrl = () => {
  const base = 'https://maps.google.com/maps?';
  // Use the center of all branches as the map center
  const centerLat = 18.5569;
  const centerLng = 73.7816;
  // Embed with search query showing Baner area
  return `https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d7563.2!2d${centerLng}!3d${centerLat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e0${BRANCH_COORDS.map((b, i) => `!4m5!1s0x0%3A0x0!2sSri%20Krishna%20PG%20Branch%20${i + 1}!5e0!3m2!1sen!2sin!4v1`).join('')}!5m2!1sen!2sin`;
};

export default function Locations() {
  // Use iframe with all markers via Maps search
  const mapSrc = `https://maps.google.com/maps?q=Sri+Krishna+PG+Baner+Pune&z=15&output=embed&ll=18.5569,73.7816`;

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

        {/* MAP with all 4 pins using custom HTML/CSS overlay */}
        <Reveal>
          <div className="map-wrap">
            {/* Interactive map with pins overlay */}
            <div className="map-pins-container">
              <iframe
                title="Sri Krishna PG locations in Baner, Pune"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15126.4!2d73.7816!3d18.5569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m1!3e0!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ width: '100%', height: '100%', border: 0, display: 'block' }}
              />

              {/* SVG overlay with 4 animated pins */}
              <div className="map-overlay-pins">
                {BRANCH_COORDS.map((b, i) => (
                  <a
                    key={i}
                    href={LOCATIONS[i]?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-pin-btn"
                    style={{
                      // Position pins roughly matching Baner area on map
                      left: `${28 + i * 14}%`,
                      top: `${38 + (i % 2) * 14}%`,
                    }}
                    title={`Sri Krishna PG Branch ${i + 1}`}
                  >
                    <div className="map-pin-pulse" style={{ background: i === 3 ? 'var(--gold)' : 'var(--navy)' }} />
                    <div className="map-pin-icon" style={{ background: i === 3 ? 'var(--gold)' : 'var(--navy)' }}>
                      <span>{i + 1}</span>
                    </div>
                    <div className="map-pin-label">Branch {i + 1}</div>
                  </a>
                ))}
              </div>
            </div>

            {/* Legend */}
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
                  <div className="landmark-icon">
                    <Icon size={20} />
                  </div>
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