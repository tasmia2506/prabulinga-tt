import React from 'react';

export default function Polaroid({
  image,
  title,
  caption,
  location,
  rotation = '0deg',
  badgeText,
  onClick,
  style = {}
}) {
  return (
    <div
      onClick={onClick}
      style={{
        position: 'relative',
        backgroundColor: '#FFFFFF',
        padding: '0.75rem 0.75rem 1.25rem 0.75rem',
        borderRadius: '8px',
        boxShadow: '0 8px 24px -4px rgba(0, 0, 0, 0.08)',
        border: '1px solid rgba(195, 180, 160, 0.35)',
        transform: `rotate(${rotation})`,
        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease',
        cursor: onClick ? 'pointer' : 'default',
        ...style
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = `rotate(0deg) translateY(-4px)`;
        e.currentTarget.style.boxShadow = '0 14px 32px -4px rgba(0, 0, 0, 0.16)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = `rotate(${rotation}) translateY(0)`;
        e.currentTarget.style.boxShadow = '0 8px 24px -4px rgba(0, 0, 0, 0.08)';
      }}
    >
      {/* Image Container */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '4 / 3',
          overflow: 'hidden',
          backgroundColor: '#F5EFE3',
          borderRadius: '6px'
        }}
      >
        <img
          src={image}
          alt={title || caption || 'Travel photo'}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
          loading="lazy"
        />

        {badgeText && (
          <div
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              backgroundColor: 'var(--color-ink-solid)',
              color: '#FFFFFF',
              fontFamily: 'var(--font-typewriter)',
              fontSize: '0.675rem',
              fontWeight: '700',
              padding: '0.2rem 0.6rem',
              borderRadius: '3px',
              letterSpacing: '0.05em'
            }}
          >
            {badgeText}
          </div>
        )}
      </div>

      {/* Polaroid Caption Area */}
      <div style={{ marginTop: '0.75rem', textAlign: 'center', padding: '0 0.25rem' }}>
        {title && (
          <h4
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.15rem',
              fontWeight: '700',
              color: 'var(--color-ink)',
              lineHeight: '1.25',
              marginBottom: '0.15rem'
            }}
          >
            {title}
          </h4>
        )}

        {(caption || location) && (
          <div
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.85rem',
              color: 'var(--color-ink-muted)',
              lineHeight: '1.3'
            }}
          >
            {caption || location}
          </div>
        )}
      </div>
    </div>
  );
}
