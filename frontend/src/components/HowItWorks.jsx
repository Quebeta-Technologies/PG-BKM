import { useEffect, useRef, useState } from 'react';
import { Phone, Eye, BedDouble, Luggage } from 'lucide-react';
import Eyebrow from '../ui/Eyebrow.jsx';
import { STEPS } from '../data.js';

const ICONS = [Phone, Eye, BedDouble, Luggage];

const COLORS = [
  { bg: '#1A2D6E', accent: '#D4A14A' },
  { bg: '#0F8B8D', accent: '#E8B84C' },
  { bg: '#0E1F50', accent: '#2BA8AA' },
  { bg: '#D4A14A', accent: '#1A2D6E' },
];

function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function StepCard({ step, index, inView }) {
  const Icon = ICONS[index];
  const c = COLORS[index];
  const delay = index * 150;

  return (
    <div
      className="step-card-new"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {/* Step number badge — top right */}
      <div className="step-badge" style={{ background: c.bg, boxShadow: `0 8px 20px ${c.bg}55` }}>
        <span className="step-badge-num" style={{ color: c.accent }}>{step.num}</span>
      </div>

      {/* Icon */}
      <div className="step-icon-wrap" style={{ background: `${c.bg}14`, border: `2px solid ${c.bg}22` }}>
        <Icon size={28} color={c.bg} strokeWidth={1.8} />
      </div>

      {/* Connector to next card */}
      {index < STEPS.length - 1 && (
        <div
          className="step-connector"
          style={{
            background: `linear-gradient(90deg, ${c.bg}, ${COLORS[index + 1].bg})`,
            transform: inView ? 'scaleX(1)' : 'scaleX(0)',
            transition: `transform 0.6s ease ${delay + 400}ms`,
          }}
        />
      )}

      <h3 className="step-title">{step.title}</h3>
      <p className="step-desc">{step.desc}</p>

      {/* Bottom accent bar */}
      <div
        className="step-accent-bar"
        style={{
          background: c.bg,
          transform: inView ? 'scaleX(1)' : 'scaleX(0)',
          transition: `transform 0.5s ease ${delay + 200}ms`,
        }}
      />
    </div>
  );
}

export default function HowItWorks() {
  const [ref, inView] = useInView();

  return (
    <section className="section grid-bg" id="how">
      <div className="container">
        <div className="section-head">
          <Eyebrow centered>From visit to move-in</Eyebrow>
          <h2>Four simple steps. No paperwork drama.</h2>
          <p className="lede">
            The whole process — from your first call to picking up the keys — usually takes less than a week.
          </p>
        </div>

        <div className="steps-grid-new" ref={ref}>
          {STEPS.map((step, i) => (
            <StepCard key={step.num} step={step} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}