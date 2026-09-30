import React from 'react';

export default function TicketCard({
  children,
  ticketType = 'train',
  accentColor = 'var(--color-terracotta)',
  ticketNumber = 'PRB-TRAIN-8050',
  barcodeNumber = '0123456789012345',
  badgeText = 'RESERVATION TICKET',
  notchBgColor = 'var(--color-paper-bg)',
  className = '',
  style = {}
}) {
  // Generate side scalloped notch positions for left & right edges
  const scallopedNotchCount = 14;

  return (
    <div
      className={`ticket-card-exact ${className}`}
      style={{
        position: 'relative',
        maxWidth: '920px',
        margin: '0 auto',
        backgroundColor: '#F8F5EE', // Authentic off-white ticket paper
        borderRadius: '12px',
        border: '1.5px solid #D8CFC0',
        boxShadow: '0 14px 40px rgba(0, 0, 0, 0.09), 0 3px 10px rgba(0, 0, 0, 0.04)',
        overflow: 'hidden',
        ...style
      }}
    >
      {/* ========================================================================= */}
      {/* 4 LARGE CORNER NOTCHES (Top-Left, Top-Right, Bottom-Left, Bottom-Right)   */}
      {/* ========================================================================= */}

      {/* Top-Left Corner Notch */}
      <div
        style={{
          position: 'absolute',
          top: '-18px',
          left: '-18px',
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          backgroundColor: notchBgColor,
          border: '1.5px solid #D8CFC0',
          boxShadow: 'inset -2px -2px 4px rgba(0,0,0,0.06)',
          zIndex: 20
        }}
      />

      {/* Top-Right Corner Notch */}
      <div
        style={{
          position: 'absolute',
          top: '-18px',
          right: '-18px',
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          backgroundColor: notchBgColor,
          border: '1.5px solid #D8CFC0',
          boxShadow: 'inset 2px -2px 4px rgba(0,0,0,0.06)',
          zIndex: 20
        }}
      />

      {/* Bottom-Left Corner Notch */}
      <div
        style={{
          position: 'absolute',
          bottom: '-18px',
          left: '-18px',
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          backgroundColor: notchBgColor,
          border: '1.5px solid #D8CFC0',
          boxShadow: 'inset -2px 2px 4px rgba(0,0,0,0.06)',
          zIndex: 20
        }}
      />

      {/* Bottom-Right Corner Notch */}
      <div
        style={{
          position: 'absolute',
          bottom: '-18px',
          right: '-18px',
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          backgroundColor: notchBgColor,
          border: '1.5px solid #D8CFC0',
          boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.06)',
          zIndex: 20
        }}
      />

      {/* ========================================================================= */}
      {/* SCALLOPED / SERRATED PUNCH HOLES ALONG LEFT & RIGHT VERTICAL EDGES       */}
      {/* ========================================================================= */}
      {Array.from({ length: scallopedNotchCount }).map((_, idx) => {
        const topPercent = ((idx + 1) / (scallopedNotchCount + 1)) * 100;
        return (
          <React.Fragment key={idx}>
            {/* Left Edge Scallop Punch Hole */}
            <div
              style={{
                position: 'absolute',
                left: '-8px',
                top: `${topPercent}%`,
                transform: 'translateY(-50%)',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                backgroundColor: notchBgColor,
                border: '1.5px solid #D8CFC0',
                boxShadow: 'inset -1px 0 3px rgba(0,0,0,0.05)',
                zIndex: 20
              }}
            />
            {/* Right Edge Scallop Punch Hole */}
            <div
              style={{
                position: 'absolute',
                right: '-8px',
                top: `${topPercent}%`,
                transform: 'translateY(-50%)',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                backgroundColor: notchBgColor,
                border: '1.5px solid #D8CFC0',
                boxShadow: 'inset 1px 0 3px rgba(0,0,0,0.05)',
                zIndex: 20
              }}
            />
          </React.Fragment>
        );
      })}

      {/* ========================================================================= */}
      {/* TICKET CONTAINER INNER LAYOUT (Left Ticket Stub + Main Ticket Form Body)  */}
      {/* ========================================================================= */}
      <div className="ticket-layout-grid">
        {/* LEFT TICKET STUB SECTION (Matching Reference Image) */}
        <div className="ticket-stub-section">
          {/* Header Badge */}
          <div style={{ textTransform: 'uppercase', fontFamily: 'var(--font-typewriter)', fontSize: '0.65rem', letterSpacing: '0.12em', color: accentColor, fontWeight: '700', marginBottom: '0.5rem', textAlign: 'center' }}>
            PRABHULING PASS
          </div>

          {/* Ticket Type & Reference */}
          <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
            <span style={{ display: 'inline-block', padding: '0.25rem 0.65rem', backgroundColor: accentColor, color: '#FFFFFF', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 'bold', letterSpacing: '0.05em' }}>
              {badgeText}
            </span>
            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-typewriter)', marginTop: '0.4rem', color: 'var(--color-ink)', fontWeight: 'bold' }}>
              #{ticketNumber}
            </div>
          </div>

          {/* Barcode Graphic (Matching Reference Image Barcode Style) */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem', margin: '0.5rem 0' }}>
            <div className="barcode-wrapper">
              <svg width="150" height="48" viewBox="0 0 150 48" fill="none" style={{ maxWidth: '100%', height: 'auto' }}>
                <rect x="0" y="0" width="3" height="48" fill="#000000"/>
                <rect x="5" y="0" width="1" height="48" fill="#000000"/>
                <rect x="8" y="0" width="4" height="48" fill="#000000"/>
                <rect x="14" y="0" width="2" height="48" fill="#000000"/>
                <rect x="18" y="0" width="1" height="48" fill="#000000"/>
                <rect x="21" y="0" width="5" height="48" fill="#000000"/>
                <rect x="28" y="0" width="2" height="48" fill="#000000"/>
                <rect x="32" y="0" width="3" height="48" fill="#000000"/>
                <rect x="37" y="0" width="1" height="48" fill="#000000"/>
                <rect x="40" y="0" width="4" height="48" fill="#000000"/>
                <rect x="46" y="0" width="2" height="48" fill="#000000"/>
                <rect x="50" y="0" width="1" height="48" fill="#000000"/>
                <rect x="53" y="0" width="5" height="48" fill="#000000"/>
                <rect x="60" y="0" width="3" height="48" fill="#000000"/>
                <rect x="65" y="0" width="2" height="48" fill="#000000"/>
                <rect x="69" y="0" width="4" height="48" fill="#000000"/>
                <rect x="75" y="0" width="1" height="48" fill="#000000"/>
                <rect x="78" y="0" width="3" height="48" fill="#000000"/>
                <rect x="83" y="0" width="5" height="48" fill="#000000"/>
                <rect x="90" y="0" width="2" height="48" fill="#000000"/>
                <rect x="94" y="0" width="1" height="48" fill="#000000"/>
                <rect x="97" y="0" width="4" height="48" fill="#000000"/>
                <rect x="103" y="0" width="3" height="48" fill="#000000"/>
                <rect x="108" y="0" width="1" height="48" fill="#000000"/>
                <rect x="111" y="0" width="5" height="48" fill="#000000"/>
                <rect x="118" y="0" width="2" height="48" fill="#000000"/>
                <rect x="122" y="0" width="4" height="48" fill="#000000"/>
                <rect x="128" y="0" width="1" height="48" fill="#000000"/>
                <rect x="131" y="0" width="3" height="48" fill="#000000"/>
                <rect x="136" y="0" width="4" height="48" fill="#000000"/>
                <rect x="142" y="0" width="2" height="48" fill="#000000"/>
                <rect x="146" y="0" width="3" height="48" fill="#000000"/>
              </svg>
            </div>
            {/* Barcode Serial Number */}
            <span style={{ fontFamily: 'monospace', fontSize: '0.725rem', letterSpacing: '0.14em', color: '#000000', fontWeight: 'bold' }}>
              {barcodeNumber}
            </span>
          </div>

          <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.65rem', color: 'var(--color-ink-light)', fontFamily: 'var(--font-typewriter)' }}>
            VALID ALL-INDIA TRAVEL<br />
            <strong>OFFICIAL DESK PASS</strong>
          </div>
        </div>

        {/* DASHED PERFORATED STUB DIVIDER (Separating Stub from Main Form) */}
        <div className="ticket-stub-divider" />

        {/* MAIN TICKET FORM BODY */}
        <div className="ticket-body-section">
          {children}
        </div>
      </div>

      {/* Embedded CSS for exact ticket grid layout & responsiveness */}
      <style>{`
        .ticket-layout-grid {
          display: grid;
          grid-template-columns: 210px 2px 1fr;
          align-items: stretch;
          min-height: 480px;
        }

        .ticket-stub-section {
          padding: 2.25rem 1.25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: #F3EFE4;
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
        }

        .ticket-stub-divider {
          border-right: 2px dashed #C8BEAC;
          height: 100%;
        }

        .ticket-body-section {
          padding: 2.25rem 2rem 2.25rem 2.25rem;
          position: relative;
        }

        @media (max-width: 768px) {
          .ticket-layout-grid {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto 1fr;
          }

          .ticket-stub-section {
            padding: 1.5rem 1rem;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            border-bottom-left-radius: 0;
          }

          .ticket-stub-divider {
            border-right: none;
            border-bottom: 2px dashed #C8BEAC;
            width: 100%;
            height: 2px;
          }

          .ticket-body-section {
            padding: 1.5rem 1.25rem;
          }
        }
      `}</style>
    </div>
  );
}
