import { useEffect, useRef, useState } from 'react';
import { Phone, Eye, BedDouble, Luggage } from 'lucide-react';
import Eyebrow from '../ui/Eyebrow.jsx';
import { STEPS } from '../data.js';

const ICONS = [Phone, Eye, BedDouble, Luggage];

const CONFIGS = [
  { bg: '#1A2D6E', light: '#e8edf8', accent: '#D4A14A', label: 'Step 1' },
  { bg: '#0F8B8D', light: '#e6f4f4', accent: '#E8B84C', label: 'Step 2' },
  { bg: '#0E1F50', light: '#e7eaf5', accent: '#2BA8AA', label: 'Step 3' },
  { bg: '#D4A14A', light: '#faf3e7', accent: '#1A2D6E', label: 'Step 4' },
];

function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function StepCard({ step, index, inView, activeStep, setActiveStep }) {
  const Icon = ICONS[index];
  const c = CONFIGS[index];
  const isActive = activeStep === index;
  const delay = index * 180;

  return (
    <div
      className={`hiw-card ${isActive ? 'hiw-card--active' : ''}`}
      onMouseEnter={() => setActiveStep(index)}
      onMouseLeave={() => setActiveStep(null)}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(60px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
        '--card-bg': c.bg,
        '--card-light': c.light,
        '--card-accent': c.accent,
      }}
    >
      {/* Animated background blob */}
      <div className="hiw-blob" style={{ background: c.light }} />

      {/* Floating number */}
      <div className="hiw-num" style={{ color: c.bg }}>
        {step.num}
      </div>

      {/* Icon with orbit ring */}
      <div className="hiw-icon-orbit">
        <div className="hiw-orbit-ring" style={{ borderColor: `${c.bg}30` }} />
        <div className="hiw-orbit-ring hiw-orbit-ring--2" style={{ borderColor: `${c.bg}18` }} />
        <div className="hiw-icon-circle" style={{ background: c.bg, boxShadow: `0 12px 32px ${c.bg}44` }}>
          <Icon size={26} color="white" strokeWidth={1.8} />
        </div>
        {/* Orbiting dot */}
        <div className="hiw-orbit-dot" style={{ background: c.accent }} />
      </div>

      {/* Content */}
      <div className="hiw-content">
        <h3 className="hiw-title" style={{ color: c.bg }}>{step.title}</h3>
        <p className="hiw-desc">{step.desc}</p>
      </div>

      {/* Bottom glow bar */}
      <div
        className="hiw-glow-bar"
        style={{
          background: `linear-gradient(90deg, ${c.bg}, ${c.accent})`,
          transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
        }}
      />

      {/* Corner accent */}
      <div className="hiw-corner" style={{ borderColor: c.bg }} />
    </div>
  );
}

export default function HowItWorks() {
  const [ref, inView] = useInView();
  const [activeStep, setActiveStep] = useState(null);

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

        <div className="hiw-grid" ref={ref}>
          {STEPS.map((step, i) => (
            <StepCard
              key={step.num}
              step={step}
              index={i}
              inView={inView}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
            />
          ))}
        </div>
      </div>
    </section>
  );
}