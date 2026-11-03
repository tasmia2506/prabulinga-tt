import React from 'react';
import { Armchair, MessageSquare, Phone } from 'lucide-react';
import { buildWhatsAppLink } from '../../utils/whatsapp';

export default function TicketStub({
  ticketType = 'PASSENGER BUS PASS #01',
  title,
  subtitle,
  seats,
  origin = 'Bengaluru',
  destination = 'South India',
  price,
  details = [],
  stampText = 'OPERATED FLEET',
  status = 'OPERATIONAL',
  image,
  onBook,
  onViewDetail,
  whatsappNumber,
  phoneNumber,
  style = {}
}) {
  // Seat count has its own row with an icon, so drop it from the spec line.
  const specText = subtitle && seats ? subtitle.replace(/\(?\s*\d+\s*seats?\s*\)?/i, '').replace(/[\s,]+$/, '').trim() : subtitle;
  const visibleFeatures = details.slice(0, 3);
  const remainingCount = details.length > 3 ? details.length - 3 : 0;
  const defaultPlaceholder = "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80";

  return (
    <div
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-paper-sheet)',
        border: '1px solid var(--color-border)',
        borderRadius: '20px',
        boxShadow: '0 4px 18px -2px rgba(0, 0, 0, 0.06)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
        height: '100%',
        transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease',
        ...style
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 16px 32px -6px rgba(0, 0, 0, 0.14)';
        const img = e.currentTarget.querySelector('img');
        if (img) img.style.transform = 'scale(1.06)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 18px -2px rgba(0, 0, 0, 0.06)';
        const img = e.currentTarget.querySelector('img');
        if (img) img.style.transform = 'scale(1)';
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* 1. Top Bus Picture Card (Photo Placeholder Container) */}
        <div style={{ position: 'relative', height: 'clamp(190px, 56vw, 300px)', width: '100%', overflow: 'hidden', backgroundColor: 'var(--color-paper-cream)', flexShrink: 0 }}>
          <img
            src={image || defaultPlaceholder}
            alt={title || "Luxury Bus Coach"}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 62%', display: 'block', transition: 'transform 0.4s ease' }}
            loading="lazy"
          />

          {/* Top Left Ticket Badge Overlay */}
          <div className="tag-dark" style={{ position: 'absolute', top: '12px', left: '12px' }}>
            <span className="ts-full">{ticketType}</span>
            <span className="ts-short">{ticketType.replace(/^PASSENGER /, '')}</span>
          </div>

          {/* Top Right Operational Status Overlay */}
          <div className="tag-light" style={{ position: 'absolute', top: '12px', right: '12px', color: 'var(--color-forest)' }}>
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-terracotta)',
                display: 'inline-block'
              }}
            />
            {status}
          </div>
        </div>

        {/* 2. Main Content Body */}
        <div
          style={{
            padding: '1rem 1.1rem 0.5rem 1.1rem',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: (details.length === 0 && !origin && !destination) ? 'center' : 'flex-start'
          }}
        >
          {/* Header Title & Fleet Tag */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <h3
              title={title}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(0.9rem, 4.3vw, 1.2rem)',
                fontWeight: '700',
                color: 'var(--color-ink)',
                lineHeight: '1.3',
                margin: 0,
                flex: '1 1 auto',
                minWidth: 0,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              {title}
            </h3>

            {stampText && (
              <span
                style={{
                  fontFamily: 'var(--font-typewriter)',
                  fontSize: 'clamp(0.5rem, 2.2vw, 0.625rem)',
                  fontWeight: '700',
                  color: 'var(--color-gold-stamp)',
                  border: '1px solid rgba(179, 143, 0, 0.35)',
                  backgroundColor: 'var(--color-terracotta-soft)',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '30px',
                  letterSpacing: '0.04em',
                  whiteSpace: 'nowrap',
                  flexShrink: 0
                }}
              >
                ✓ <span className="ts-full">{stampText}</span><span className="ts-short">{stampText.split(' ')[0]}</span>
              </span>
            )}
          </div>

          {specText && (
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.82rem',
                lineHeight: '1.45',
                color: 'var(--color-ink-muted)',
                fontWeight: '500',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                minHeight: '2.4em'
              }}
            >
              {specText}
            </div>
          )}

          {seats && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginTop: '0.6rem', fontSize: '0.88rem', fontWeight: '700', color: 'var(--color-ink)' }}>
              <Armchair size={17} style={{ color: 'var(--color-gold-stamp)', flexShrink: 0 }} />
              <span>{seats} Seats</span>
            </div>
          )}

        </div>
      </div>

      {/* 5. Clean Footer Section */}
      <div style={{ padding: '0 1.1rem 1.1rem 1.1rem' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)', opacity: 0.6, marginBottom: '0.8rem' }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          {onBook && (
            <button
              onClick={onBook}
              className="btn btn-primary"
              style={{
                flex: 1,
                fontSize: '0.9rem',
                padding: '0.7rem 1rem',
                justifyContent: 'center'
              }}
            >
              Book Pass →
            </button>
          )}

          {phoneNumber && (
            <a
              href={`tel:${phoneNumber.replace(/[^0-9+]/g, '')}`}
              title="Call to Book"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                backgroundColor: 'var(--color-ink-solid)',
                color: '#FFFFFF',
                flexShrink: 0,
                transition: 'transform 0.2s ease, opacity 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <Phone size={18} />
            </a>
          )}

          {whatsappNumber && (
            <a
              href={buildWhatsAppLink(whatsappNumber, { serviceType: 'Bus', selectedBus: title, from: origin, to: destination })}
              target="_blank"
              rel="noreferrer"
              title="Book via WhatsApp"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                backgroundColor: 'var(--color-ink-solid)',
                color: '#FFFFFF',
                flexShrink: 0,
                transition: 'transform 0.2s ease, opacity 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <MessageSquare size={18} />
            </a>
          )}
        </div>
      </div>
      <style>{`
        .ts-short { display: none; }
        @media (max-width: 400px) {
          .ts-full { display: none; }
          .ts-short { display: inline; }
        }
      `}</style>
    </div>
  );
}


