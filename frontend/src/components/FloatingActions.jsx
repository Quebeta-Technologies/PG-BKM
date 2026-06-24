import { MessageCircle, Phone } from 'lucide-react';
import { CONTACT } from '../data.js';

export default function FloatingActions() {
  return (
    <>
      {/* Floating WhatsApp button (always visible) */}
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fab-wa float-deco"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} />
      </a>

      {/* Mobile bottom sticky bar */}
      <div className="mobile-bar">
        <a href={CONTACT.phoneTel} className="m-call">
          <Phone size={16} /> Book a Visit
        </a>
        <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="m-wa">
          <MessageCircle size={16} /> WhatsApp
        </a>
      </div>
    </>
  );
}
