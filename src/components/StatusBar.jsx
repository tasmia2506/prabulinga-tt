import React from 'react';

export default function StatusBar({ config }) {
  return (
    <div
      style={{
        backgroundColor: '#000000',
        color: 'rgba(255, 255, 255, 0.8)',
        padding: '0.7rem 0',
        position: 'relative',
        zIndex: 5
      }}
    >
      <div
        className="container status-bar-row"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
          fontFamily: 'var(--font-typewriter)',
          fontSize: '0.7rem',
          letterSpacing: '0.1em'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap', rowGap: '0.35rem' }}>
          <span style={{ whiteSpace: 'nowrap' }}>16&deg;31'N 75&deg;04'E <span style={{ color: 'var(--color-terracotta)' }}>&bull;</span></span>
          <span style={{ whiteSpace: 'nowrap' }}>TERDAL, BAGALKOT DISTRICT BASE <span style={{ color: 'var(--color-terracotta)' }}>&bull;</span></span>
          <span style={{ whiteSpace: 'nowrap' }}>ALL ROUTES OPERATIONAL</span>
        </div>

        <div style={{ whiteSpace: 'nowrap' }}>
          <span>INSTANT DISPATCH: {config?.phoneNumber || '+91 80501 72818'}</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .status-bar-row {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
}
