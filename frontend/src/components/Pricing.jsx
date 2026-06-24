import { CheckCircle2, XCircle, Phone, MessageCircle, IndianRupee, Info } from 'lucide-react';
import Reveal from '../ui/Reveal.jsx';
import Eyebrow from '../ui/Eyebrow.jsx';
import { PRICING, CONTACT } from '../data.js';

export default function Pricing() {
  return (
    <section className="section plain-bg" id="pricing">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <Eyebrow>Transparent pricing</Eyebrow>
            <h2>What you pay for. And what you don't.</h2>
            <p className="lede">{PRICING.intro}</p>
          </Reveal>
        </div>

        <div className="pricing-wrap">
          <div className="pricing-grid">
            <Reveal>
              <div className="pricing-card featured">
                <h3>
                  <CheckCircle2 size={22} /> Included in rent
                </h3>
                <div className="pricing-list">
                  {PRICING.included.map((item) => (
                    <div className="pricing-item" key={item}>
                      <CheckCircle2 size={18} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="pricing-card">
                <h3>
                  <Info size={22} /> Not included
                </h3>
                <div className="pricing-list">
                  {PRICING.notIncluded.map((item) => (
                    <div className="pricing-item" key={item}>
                      <XCircle size={18} style={{ color: 'var(--ink-muted)' }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="pricing-cta">
              <p>
                <IndianRupee size={14} style={{ display: 'inline', verticalAlign: '-2px' }} /> Rent
                varies by branch and room type. Reach out — we will share the latest pricing right away.
              </p>
              <a href={CONTACT.phoneTel} className="btn btn-primary">
                <Phone size={16} /> Call for rates
              </a>
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
