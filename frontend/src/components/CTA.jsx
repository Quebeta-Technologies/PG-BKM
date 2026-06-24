import { Phone, MessageCircle } from 'lucide-react';
import Reveal from '../ui/Reveal.jsx';
import Eyebrow from '../ui/Eyebrow.jsx';
import { CONTACT } from '../data.js';

export default function CTA() {
  return (
    <section className="cta-final">
      <div className="container">
        <Reveal>
          <Eyebrow>Book your visit today</Eyebrow>
          <h2>Come see the space. Stay for the feeling.</h2>
          <p>
            A 15-minute walk-through is the best way to decide. Pick your branch — we will show you
            around, no commitment, no pressure.
          </p>
          <div className="cta-actions">
            <a href={CONTACT.phoneTel} className="btn btn-gold">
              <Phone size={16} /> Call {CONTACT.phone}
            </a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
              <MessageCircle size={16} /> Message on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
