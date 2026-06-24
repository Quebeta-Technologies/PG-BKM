import { useEffect, useState } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import LogoMark from '../ui/LogoMark.jsx';
import { CONTACT } from '../data.js';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setNavOpen(false);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#top" className="brand">
          <LogoMark size={44} />
          <div className="brand-text">
            <span className="name">Sri Krishna PG</span>
          </div>
        </a>

        <nav className={`nav ${navOpen ? 'open' : ''}`}>
          <a href="#about" onClick={close}>About</a>
          <a href="#gallery" onClick={close}>Gallery</a>
          <a href="#amenities" onClick={close}>Amenities</a>
          <a href="#rooms" onClick={close}>Rooms</a>
          <a href="#locations" onClick={close}>Locations</a>
          <a href="#reviews" onClick={close}>Reviews</a>
          <a href="#faq" onClick={close}>FAQ</a>
        </nav>

        <div className="header-cta">
          <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <MessageCircle size={16} /> WhatsApp
          </a>
          <a href={CONTACT.phoneTel} className="btn btn-primary">
            <Phone size={16} /> Book a Visit
          </a>
          <button className="btn nav-toggle" onClick={() => setNavOpen((o) => !o)} aria-label="Menu">
            {navOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
