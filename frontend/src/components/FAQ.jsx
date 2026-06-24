import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Reveal from '../ui/Reveal.jsx';
import Eyebrow from '../ui/Eyebrow.jsx';
import { FAQS } from '../data.js';

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section plain-bg" id="faq">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <Eyebrow>Questions, answered</Eyebrow>
            <h2>Things people ask before moving in.</h2>
          </Reveal>
        </div>

        <div className="faq-list">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 40}>
              <div className={`faq-item ${open === i ? 'open' : ''}`}>
                <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                  {f.q}
                  <ChevronDown size={20} />
                </button>
                <div className="faq-a">
                  <div className="faq-a-inner">{f.a}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
