import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, MessageSquare, Menu, X, ChevronRight, Moon, Sun } from 'lucide-react';
import { PearlButton } from './ui/pearl-button';

export default function Header({ config, onOpenBookingModal, isDarkMode, onToggleDarkMode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const HERO_IMAGE_PAGES = ['/', '/services', '/buses', '/destinations', '/about', '/packages'];
  const isHome = HERO_IMAGE_PAGES.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Packages', path: '/packages' },
    { label: 'Destinations', path: '/destinations' },
    { label: 'Our Buses', path: '/buses' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
  ];

  const blended = isHome && !scrolled;
  const textColor = blended ? '#FFFFFF' : 'var(--color-ink)';
  const tagColor = 'var(--color-terracotta)';

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: blended ? 'transparent' : 'var(--color-paper-sheet)',
        borderBottom: blended ? 'none' : '1px solid var(--color-border)',
        boxShadow: scrolled ? 'var(--shadow-paper)' : 'none',
        transition: 'all 0.35s ease'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '72px', position: 'relative', gap: '1rem' }}>
        {/* Brand Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', flexShrink: 0 }}>
          <img
            src="/logo.jpg"
            alt="Prabhuling Travel Agency & Online Services"
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              objectFit: 'cover',
              boxShadow: '0 3px 10px rgba(0,0,0,0.15)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}
          />
          <div className="header-brand-text">
            <div
              className="font-display"
              style={{
                fontSize: '1.15rem',
                fontWeight: '800',
                color: textColor,
                lineHeight: '1.15',
                letterSpacing: '-0.01em'
              }}
            >
              PRABHULING TRAVEL AGENCY
            </div>
            <div
              className="font-typewriter"
              style={{
                fontSize: '0.62rem',
                color: tagColor,
                lineHeight: '1',
                letterSpacing: '0.1em',
                marginTop: '2px'
              }}
            >
              & ONLINE SERVICES
            </div>
          </div>
        </Link>

        {/* Desktop Navigation — Centered */}
        <nav style={{ display: 'none', flex: 1, justifyContent: 'center', gap: '1.5rem', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link, idx) => (
            <NavLink
              key={idx}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              style={({ isActive }) => ({
                fontSize: '0.875rem',
                fontWeight: isActive ? '700' : '600',
                color: isActive ? 'var(--color-terracotta)' : textColor,
                textDecoration: 'none',
                transition: 'color 0.2s',
                padding: '0.25rem 0',
                whiteSpace: 'nowrap',
                borderBottom: isActive ? '2px solid var(--color-terracotta)' : '2px solid transparent'
              })}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right: Phone Pill + Primary CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
          <a
            href={`tel:${(config?.phoneNumber || '').replace(/[^0-9+]/g, '')}`}
            className="header-phone-pill"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.55rem 1rem',
              borderRadius: '30px',
              backgroundColor: blended ? 'rgba(255, 255, 255, 0.08)' : 'var(--color-paper-cream)',
              border: blended ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid var(--color-border)',
              color: textColor,
              fontSize: '0.85rem',
              fontWeight: '700',
              textDecoration: 'none',
              whiteSpace: 'nowrap'
            }}
          >
            <Phone size={15} style={{ color: 'var(--color-terracotta)' }} />
            {config?.phoneNumber}
          </a>

          <Link to="/booking" style={{ textDecoration: 'none' }} className="header-cta-btn">
            <PearlButton label="BOOK A TRIP" />
          </Link>

          {/* Dark Mode Toggle */}
          <button
            onClick={onToggleDarkMode}
            style={{
              display: 'inline-flex',
              padding: '0.5rem',
              borderRadius: '4px',
              border: blended ? '1px solid rgba(255,255,255,0.3)' : '1px solid var(--color-border)',
              backgroundColor: blended ? 'rgba(255,255,255,0.08)' : 'var(--color-paper-cream)',
              color: textColor,
              cursor: 'pointer'
            }}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: 'inline-flex',
              padding: '0.5rem',
              borderRadius: '4px',
              border: blended ? '1px solid rgba(255,255,255,0.3)' : '1px solid var(--color-border)',
              backgroundColor: blended ? 'rgba(255,255,255,0.08)' : 'var(--color-paper-cream)',
              color: textColor
            }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          style={{
            backgroundColor: blended ? 'var(--color-ink)' : 'var(--color-paper-sheet)',
            borderTop: blended ? '1px solid rgba(255,255,255,0.1)' : '1px solid var(--color-border)',
            padding: '1.25rem 1.5rem',
            boxShadow: 'var(--shadow-stacked)',
            position: 'relative'
          }}
          className="animate-fade-in"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
            {navLinks.map((link, idx) => (
              <NavLink
                key={idx}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setIsMobileMenuOpen(false)}
                style={({ isActive }) => ({
                  fontSize: '1rem',
                  fontWeight: isActive ? '700' : '600',
                  color: isActive ? 'var(--color-terracotta)' : textColor,
                  padding: '0.5rem 0',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottom: blended ? '1px solid rgba(255,255,255,0.12)' : '1px solid var(--color-border)',
                  textDecoration: 'none'
                })}
              >
                <span>{link.label}</span>
                <ChevronRight size={16} style={{ color: blended ? 'rgba(255,255,255,0.5)' : 'var(--color-ink-light)' }} />
              </NavLink>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            <a
              href={`tel:${(config?.phoneNumber || '').replace(/[^0-9+]/g, '')}`}
              className="btn btn-outline"
              style={{ width: '100%', textDecoration: 'none', borderColor: blended ? 'rgba(255,255,255,0.3)' : 'var(--color-border-strong)', color: textColor, backgroundColor: 'transparent' }}
            >
              <Phone size={18} /> {config?.phoneNumber}
            </a>
            <Link
              to="/booking"
              style={{ textDecoration: 'none', width: '100%' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <PearlButton label="BOOK A TRIP" style={{ width: '100%' }} />
            </Link>
            <a
              className="btn btn-whatsapp"
              href={`https://wa.me/${config.whatsappNumber.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noreferrer"
              style={{ width: '100%', textDecoration: 'none' }}
            >
              <MessageSquare size={18} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* Inline Responsive Helper */}
      <style>{`
        @media (min-width: 1080px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
        @media (max-width: 1079px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: inline-flex !important; }
        }
        @media (max-width: 1079px) {
          .header-phone-pill { display: none !important; }
        }
        @media (max-width: 480px) {
          .header-cta-btn { display: none !important; }
        }
        @media (max-width: 860px) {
          .header-brand-text { display: none !important; }
        }
      `}</style>
    </header>
  );
}
