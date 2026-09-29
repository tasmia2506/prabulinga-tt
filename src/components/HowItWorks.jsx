import React from 'react';
import PaperCard from './scrapbook/PaperCard';

export default function HowItWorks() {
  const steps = [
    {
      step: 'STEP 01',
      title: 'Choose Service',
      desc: 'Select bus ticket from our 7-bus fleet, flight, train booking, or tour package.'
    },
    {
      step: 'STEP 02',
      title: 'Send Requirement',
      desc: 'Enter preferred route, travel dates, & passenger count via our booking form or WhatsApp.'
    },
    {
      step: 'STEP 03',
      title: 'Human Desk Check',
      desc: 'Our agency desk verifies live seat map availability & exact transparent fares.'
    },
    {
      step: 'STEP 04',
      title: 'Board & Travel',
      desc: 'Receive your verified pass on WhatsApp/SMS & board your bus hassle-free.'
    }
  ];

  return (
    <section
      className="section-padding"
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: "url('/home2.jfif')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        color: '#FFFFFF'
      }}
    >
      {/* Dark Subtle Backdrop Overlay for Text Contrast */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(18, 25, 20, 0.75) 0%, rgba(18, 25, 20, 0.85) 100%)',
          zIndex: 1
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div className="section-header" style={{ textAlign: 'center' }}>
          <div className="section-tag" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#FDFBF7', border: '1px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(6px)' }}>
            <span>JOURNEY WORKFLOW</span>
          </div>
          <h2 className="section-title" style={{ color: '#FFFFFF', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
            HOW BOOKING WORKS WITH US
          </h2>
          <p className="section-desc" style={{ color: 'rgba(253, 251, 247, 0.92)', textShadow: '0 2px 10px rgba(0,0,0,0.5)', maxWidth: '680px', margin: '0 auto 2.5rem auto' }}>
            No complicated portal traps or hidden online fees. Pure human assistance & clear ticket delivery.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 240px), 1fr))', gap: '1.75rem' }}>
          {steps.map((item, idx) => (
            <PaperCard
              key={idx}
              paperType="sheet"
              padding="1.6rem"
              style={{
                backgroundColor: 'rgba(253, 251, 247, 0.95)',
                backdropFilter: 'blur(4px)',
                boxShadow: 'var(--shadow-stacked)'
              }}
            >
              <div style={{ marginBottom: '0.85rem' }}>
                <span style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-terracotta)', fontWeight: '700', letterSpacing: '0.08em' }}>
                  {item.step}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: 'var(--color-ink)',
                  marginBottom: '0.4rem'
                }}
              >
                {item.title}
              </h3>

              <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)', lineHeight: '1.5' }}>
                {item.desc}
              </p>
            </PaperCard>
          ))}
        </div>
      </div>
    </section>
  );
}

