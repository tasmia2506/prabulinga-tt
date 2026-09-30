import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie } from 'lucide-react';

const STORAGE_KEY = 'prabhuling-cookie-consent';

export default function CookieConsent() {
  const [choice, setChoice] = useState(null);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      setChoice(stored || 'pending');
    } catch {
      setChoice('pending');
    }
  }, []);

  const setConsent = (value) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // localStorage unavailable (private mode, etc.) — banner will just not persist
    }
    setChoice(value);
  };

  if (choice === null || choice !== 'pending') return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      style={{
        position: 'fixed',
        left: '1rem',
        right: '1rem',
        bottom: '1rem',
        zIndex: 3000,
        maxWidth: '620px',
        margin: '0 auto',
        backgroundColor: 'var(--color-ink-solid)',
        color: '#FFFFFF',
        borderRadius: '16px',
        border: '1px solid rgba(255,255,255,0.12)',
        boxShadow: 'var(--shadow-stacked)',
        padding: '1.25rem 1.4rem',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '1rem'
      }}
      className="animate-fade-in"
    >
      <div
        style={{
          width: '38px',
          height: '38px',
          borderRadius: '10px',
          backgroundColor: 'var(--color-terracotta)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}
      >
        <Cookie size={19} style={{ color: 'var(--color-ink)' }} />
      </div>

      <p style={{ flex: '1 1 260px', fontSize: '0.85rem', lineHeight: '1.55', color: 'rgba(255,255,255,0.85)', margin: 0 }}>
        We use essential cookies to run this site, and analytics cookies only if you accept. Read our{' '}
        <Link to="/privacy-policy" style={{ color: 'var(--color-terracotta)', fontWeight: '700', textDecoration: 'underline' }}>
          Privacy Policy
        </Link>{' '}
        to learn more.
      </p>

      <div style={{ display: 'flex', gap: '0.6rem', flexShrink: 0 }}>
        <button
          onClick={() => setConsent('rejected')}
          className="btn btn-outline btn-sm"
          style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#FFFFFF', backgroundColor: 'transparent' }}
        >
          Reject
        </button>
        <button
          onClick={() => setConsent('accepted')}
          className="btn btn-primary btn-sm"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
