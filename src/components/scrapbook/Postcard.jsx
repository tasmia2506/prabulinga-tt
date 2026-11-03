import React from 'react';
import TravelStamp from './TravelStamp';

export default function Postcard({
  image,
  title,
  subtitle,
  description,
  location,
  stampText = 'POSTAL • SOUTH INDIA',
  rotation = '1deg',
  onClick,
  style = {}
}) {
  return (
    <div
      onClick={onClick}
      className="tilt-card"
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-paper-sheet)',
        border: '1px solid rgba(190, 175, 155, 0.6)',
        borderRadius: '4px',
        padding: '1.25rem',
        boxShadow: 'var(--shadow-paper)',
        transform: `rotate(${rotation})`,
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        cursor: onClick ? 'pointer' : 'default',
        overflow: 'hidden',
        ...style
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'rotate(0deg) translateY(-4px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-photo)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = `rotate(${rotation}) translateY(0)`;
        e.currentTarget.style.boxShadow = 'var(--shadow-paper)';
      }}
    >
      {/* Airmail Border Accent Top */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '6px',
          backgroundImage: 'repeating-linear-gradient(135deg, var(--color-terracotta) 0, var(--color-terracotta) 15px, #FFFFFF 15px, #FFFFFF 25px, var(--color-ocean-blue) 25px, var(--color-ocean-blue) 40px, #FFFFFF 40px, #FFFFFF 50px)'
        }}
      />

      <div style={{ display: 'grid', gridTemplateColumns: image ? '1fr 1fr' : '1fr', gap: '1.25rem', marginTop: '0.35rem' }}>
        {/* Left Photo or Note */}
        {image && (
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '3px', border: '1px solid rgba(0,0,0,0.1)' }}>
            <img
              src={image}
              alt={title}
              style={{ width: '100%', height: '100%', minHeight: '180px', objectFit: 'cover', display: 'block' }}
              loading="lazy"
            />
          </div>
        )}

        {/* Right Postcard Details */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-typewriter)',
                    fontSize: '0.7rem',
                    color: 'var(--color-terracotta)',
                    letterSpacing: '0.1em'
                  }}
                >
                  POSTCARD FROM {location ? location.toUpperCase() : 'KARNATAKA'}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.45rem',
                    fontWeight: '700',
                    color: 'var(--color-ink)',
                    lineHeight: '1.2',
                    marginTop: '0.1rem'
                  }}
                >
                  {title}
                </h3>
              </div>

              {/* Stamp Badge */}
              <TravelStamp text={stampText} size="small" color="var(--color-forest)" rotation="-4deg" />
            </div>

            {subtitle && (
              <p style={{ fontFamily: 'var(--font-handwriting)', fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--color-forest)', marginBottom: '0.5rem' }}>
                "{subtitle}"
              </p>
            )}

            {description && (
              <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)', lineHeight: '1.5' }}>
                {description}
              </p>
            )}
          </div>

          <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '0.75rem', marginTop: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.7rem', color: 'var(--color-ink-light)' }}>
              PRABHULING TRAVELS
            </span>
            <span style={{ fontSize: '0.825rem', fontWeight: '700', color: 'var(--color-terracotta)' }}>
              Explore Memory →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
