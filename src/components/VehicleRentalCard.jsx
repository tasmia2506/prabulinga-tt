import React from 'react';
import { Car, Users, Briefcase, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';
import { buildWhatsAppLink } from '../utils/whatsapp';

export default function VehicleRentalCard({ vehicle, whatsappNumber, phoneNumber, onEnquire }) {
  const whatsappLink = buildWhatsAppLink(whatsappNumber, {
    serviceType: 'BusRental',
    selectedBus: vehicle.name,
    minKmPerDay: vehicle.minKmPerDay,
    battaPerDay: vehicle.battaPerDay,
  });

  return (
    <div
      className="card"
      style={{
        backgroundColor: 'var(--color-paper-sheet)',
        border: '1px solid var(--color-border)',
        borderRadius: '18px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease',
        boxShadow: '0 4px 18px -2px rgba(0, 0, 0, 0.06)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 16px 32px -6px rgba(0, 0, 0, 0.14)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 18px -2px rgba(0, 0, 0, 0.06)';
      }}
    >
      {/* Vehicle photo banner */}
      <div style={{ position: 'relative', height: '190px', width: '100%', overflow: 'hidden', backgroundColor: 'var(--color-paper-cream)' }}>
        {vehicle.image ? (
          <img
            src={vehicle.image}
            alt={vehicle.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 55%', display: 'block' }}
            loading="lazy"
          />
        ) : (
          <div
            style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--color-ink-soft, #555)' }}
          >
            <Car size={44} strokeWidth={1.5} />
            <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>Photo coming soon</span>
          </div>
        )}
        <div className="tag-dark" style={{ position: 'absolute', top: '12px', left: '12px' }}>
          {vehicle.subType}
        </div>
        {vehicle.ac && (
          <span
            className="tag-light"
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
            }}
          >
            ONLY AC
          </span>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: '1rem 1.25rem 1.25rem 1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.2rem',
            fontWeight: 700,
            color: 'var(--color-ink)',
            marginBottom: '0.5rem',
          }}
        >
          {vehicle.name}
        </h3>

        <p style={{ fontSize: '0.875rem', color: 'var(--color-ink-muted)', lineHeight: 1.55, marginBottom: '1rem' }}>
          {vehicle.description}
        </p>

        {/* Seats / Bags row */}
        <div
          style={{
            display: 'flex',
            gap: '0.75rem',
            backgroundColor: 'var(--color-paper-cream)',
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
            padding: '0.75rem',
            marginBottom: '0.9rem',
          }}
        >
          <div style={{ flex: 1, textAlign: 'center' }}>
            <Users size={18} style={{ color: 'var(--color-terracotta)' }} />
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-ink)', marginTop: '0.25rem' }}>
              {vehicle.seats} Seater
            </div>
          </div>
          <div style={{ width: '1px', backgroundColor: 'var(--color-border)' }} />
          <div style={{ flex: 1, textAlign: 'center' }}>
            <Briefcase size={18} style={{ color: 'var(--color-terracotta)' }} />
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-ink)', marginTop: '0.25rem' }}>
              {vehicle.bags} Bags
            </div>
          </div>
        </div>

        {/* Amenities */}
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, marginBottom: '1rem' }}>
          {vehicle.amenities.slice(0, 3).map((a) => (
            <li
              key={a}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.4rem',
                fontSize: '0.8rem',
                color: 'var(--color-ink-muted)',
                marginBottom: '0.3rem',
              }}
            >
              <CheckCircle2 size={14} style={{ color: 'var(--color-forest, #1E7A5A)', flexShrink: 0, marginTop: '1px' }} />
              {a}
            </li>
          ))}
        </ul>

        {/* CTAs */}
        <div style={{ marginTop: 'auto', borderTop: '1px dashed var(--color-border)', paddingTop: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <button
            onClick={() => onEnquire && onEnquire(vehicle)}
            className="btn btn-primary"
            style={{ flex: 1, fontSize: '0.85rem', padding: '0.65rem 1rem', justifyContent: 'center' }}
          >
            Enquire →
          </button>

          {phoneNumber && (
            <a
              href={`tel:${phoneNumber.replace(/[^0-9+]/g, '')}`}
              title="Call to Book"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                backgroundColor: 'var(--color-ink-solid)',
                color: '#FFFFFF',
                flexShrink: 0,
              }}
            >
              <Phone size={17} />
            </a>
          )}

          {whatsappNumber && (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              title="Enquire via WhatsApp"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                backgroundColor: 'var(--color-ink-solid)',
                color: '#FFFFFF',
                flexShrink: 0,
              }}
            >
              <MessageSquare size={17} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
