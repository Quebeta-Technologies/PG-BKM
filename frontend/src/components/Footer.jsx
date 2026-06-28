import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { CONTACT, LOCATIONS } from '../data.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <img src="/images/logo.png" alt="Sri Krishna PG Logo" style={{ height: '64px', width: 'auto' }} />
            </div>
            <p className="footer-about">
              Premium paying-guest accommodation for boys and girls across four locations in Baner,
              Pune. Furnished rooms, home-cooked meals, 24×7 security — your home in the city.
            </p>
          </div>

          <div>
            <h4>Explore</h4>
            <div className="footer-links">
              <a href="#about">About</a>
              <a href="#gallery">Gallery</a>
              <a href="#amenities">Amenities</a>
              <a href="#rooms">Room Types</a>
              <a href="#pricing">Pricing</a>
              <a href="#locations">Locations</a>
              <a href="#reviews">Reviews</a>
              <a href="#faq">FAQ</a>
            </div>
          </div>

          <div>
            <h4>Locations</h4>
            <div className="footer-links">
              {LOCATIONS.map((l, i) => (
                <a key={i} href={l.url} target="_blank" rel="noopener noreferrer">
                  Branch {i + 1}, Baner
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4>Get in touch</h4>
            <div className="footer-contact">
              <Phone size={14} />
              <a href={CONTACT.phoneTel}>{CONTACT.phone}</a>
            </div>
            <div className="footer-contact">
              <MessageCircle size={14} />
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">
                WhatsApp us
              </a>
            </div>
            <div className="footer-contact">
              <MapPin size={14} />
              <span>Baner, Pune, MH</span>
            </div>
            <div className="footer-contact">
              <Clock size={14} />
              <span>Visits: {CONTACT.visitHours}</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy-desktop">
            © {new Date().getFullYear()} Sri Krishna PG. All rights reserved. &nbsp;·&nbsp; Made With <span style={{ color: 'red' }}>❤️</span> Quebeta
          </span>
          <span className="footer-copy-mobile">
            © {new Date().getFullYear()} Sri Krishna PG. All rights reserved.
          </span>
          <span className="footer-made-mobile">Made With <span style={{ color: 'red' }}>❤️</span> Quebeta</span>
        </div>
      </div>
    </footer>
  );
}