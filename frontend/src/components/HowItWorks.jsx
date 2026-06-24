import Reveal from '../ui/Reveal.jsx';
import Eyebrow from '../ui/Eyebrow.jsx';
import { STEPS } from '../data.js';

export default function HowItWorks() {
  return (
    <section className="section grid-bg" id="how">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <Eyebrow>From visit to move-in</Eyebrow>
            <h2>Four simple steps. No paperwork drama.</h2>
            <p className="lede">
              The whole process — from your first call to picking up the keys — usually takes less than a week.
            </p>
          </Reveal>
        </div>

        <div className="steps-grid">
          {STEPS.map((s, i) => (
            <Reveal key={s.num} delay={i * 120}>
              <div className="step-card">
                <div className="step-num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
